import mongoose from "mongoose";
import { z } from "zod";

import { connectDatabase } from "@/server/db";
import { DatabaseUnavailableError } from "@/server/nurses";
import {
  CARE_REQUEST_STATUSES,
  type CareRequestInput,
  type CareRequestListResult,
  type CareRequestRecord,
} from "@/server/types";

/** Mirrors `server/models/CareRequest.js`. */
const careRequestSchema = new mongoose.Schema(
  {
    patient: { type: String, required: true },
    service: { type: String, required: true },
    nurse: { type: String, default: "Unassigned" },
    status: { type: String, enum: CARE_REQUEST_STATUSES, default: "Pending" },
    date: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    startDate: { type: String, required: true },
    notes: { type: String, default: "" },
  },
  { timestamps: true },
);

type LeanCareRequest = CareRequestInput & {
  _id: unknown;
  createdAt?: unknown;
};

type CareRequestModel = mongoose.Model<LeanCareRequest>;

/**
 * Re-use the compiled model across warm invocations and dev-server reloads so
 * mongoose never throws `OverwriteModelError`.
 */
const CareRequest: CareRequestModel =
  (mongoose.models["CareRequest"] as CareRequestModel | undefined) ??
  (mongoose.model("CareRequest", careRequestSchema) as unknown as CareRequestModel);

/** Validates the JSON body sent by `request-care.$nurseId.tsx`. */
export const careRequestInputSchema = z.object({
  patient: z.string().trim().min(2, "patient is required"),
  service: z.string().trim().min(2, "service is required"),
  nurse: z.string().trim().min(2).default("Unassigned"),
  status: z.enum(CARE_REQUEST_STATUSES).default("Pending"),
  date: z.string().trim().min(1, "date is required"),
  email: z.string().trim().email("A valid email is required"),
  phone: z.string().trim().min(7, "phone is required"),
  location: z.string().trim().min(2, "location is required"),
  startDate: z.string().trim().min(1, "startDate is required"),
  notes: z.string().trim().max(2000, "notes is too long").default(""),
});

function serializeId(value: unknown): string {
  return value === null || value === undefined ? "" : String(value);
}

function serializeDate(value: unknown): string | null {
  if (value instanceof Date) {
    return value.toISOString();
  }

  return typeof value === "string" && value.length > 0 ? value : null;
}

function toCareRequestRecord(row: LeanCareRequest): CareRequestRecord {
  return {
    _id: serializeId(row._id),
    patient: String(row.patient ?? ""),
    service: String(row.service ?? ""),
    nurse: String(row.nurse ?? "Unassigned"),
    status: (CARE_REQUEST_STATUSES as readonly string[]).includes(String(row.status))
      ? (row.status as CareRequestRecord["status"])
      : "Pending",
    date: String(row.date ?? ""),
    email: String(row.email ?? ""),
    phone: String(row.phone ?? ""),
    location: String(row.location ?? ""),
    startDate: String(row.startDate ?? ""),
    notes: String(row.notes ?? ""),
    createdAt: serializeDate(row.createdAt),
  };
}

/**
 * GET /api/care-requests. Newest first, matching
 * `CareRequest.find().sort({ createdAt: -1 })` in the Express app.
 */
export async function listCareRequests(): Promise<CareRequestListResult> {
  const { client, uriConfigured, reason } = await connectDatabase();

  if (!client) {
    const notice = uriConfigured
      ? (reason ?? "MongoDB could not be reached.")
      : "Demo mode: care requests are not stored because MONGODB_URI is not configured.";

    return { careRequests: [], source: "demo", notice };
  }

  const rows = (await CareRequest.find()
    .sort({ createdAt: -1 })
    .lean()
    .exec()) as unknown as LeanCareRequest[];

  return { careRequests: rows.map(toCareRequestRecord), source: "mongodb" };
}

/** POST /api/care-requests. Persists to MongoDB, or reports why it cannot. */
export async function createCareRequest(input: CareRequestInput): Promise<CareRequestRecord> {
  const { client, uriConfigured, reason } = await connectDatabase();

  if (!client) {
    throw new DatabaseUnavailableError(
      uriConfigured
        ? (reason ?? "MongoDB could not be reached, so the care request could not be saved.")
        : "MongoDB is not configured, so the care request could not be saved. Add MONGODB_URI as an environment variable.",
    );
  }

  const created = (await CareRequest.create(input)) as unknown as LeanCareRequest;

  return toCareRequestRecord(created);
}
