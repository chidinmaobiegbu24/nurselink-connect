import mongoose from "mongoose";
import { z } from "zod";

import { connectDatabase } from "@/server/db";
import { SEED_NURSES } from "@/server/seed";
import {
  AVAILABILITY_VALUES,
  type NurseInput,
  type NurseListResult,
  type NurseRecord,
} from "@/server/types";

/** Raised when a write cannot be persisted because MongoDB is not available. */
export class DatabaseUnavailableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DatabaseUnavailableError";
  }
}

/** Raised when a nurse registers with an email that is already stored. */
export class DuplicateNurseEmailError extends Error {
  constructor(email: string) {
    super(`A nurse with the email ${email} is already registered.`);
    this.name = "DuplicateNurseEmailError";
  }
}

/** Mirrors `server/models/Nurse.js`. */
const nurseSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    professionalRole: { type: String, required: true },
    service: { type: String, required: true },
    yearsOfExperience: { type: Number, required: true },
    availability: { type: String, enum: AVAILABILITY_VALUES, default: "Available" },
  },
  { timestamps: true },
);

type NurseModel = mongoose.Model<LeanNurse>;

/**
 * Re-use the compiled model across warm invocations and dev-server reloads so
 * mongoose never throws `OverwriteModelError`.
 */
const Nurse: NurseModel =
  (mongoose.models["Nurse"] as NurseModel | undefined) ??
  (mongoose.model("Nurse", nurseSchema) as unknown as NurseModel);

/** Validates the JSON body sent by `join-as-nurse.tsx`. */
export const nurseInputSchema = z.object({
  fullName: z.string().trim().min(2, "fullName is required"),
  email: z.string().trim().email("A valid email is required"),
  phone: z.string().trim().min(7, "phone is required"),
  location: z.string().trim().min(2, "location is required"),
  professionalRole: z.string().trim().min(2, "professionalRole is required"),
  service: z.string().trim().min(2, "service is required"),
  yearsOfExperience: z.coerce
    .number()
    .int("yearsOfExperience must be a whole number")
    .min(0, "yearsOfExperience cannot be negative")
    .max(70, "yearsOfExperience is out of range"),
  availability: z.enum(AVAILABILITY_VALUES).default("Available"),
});

/**
 * A mongoose document or lean row, narrowed to the fields we serialize. `_id`
 * and the timestamp fields are normalised before they reach the browser.
 */
type LeanNurse = NurseInput & {
  _id: unknown;
  createdAt?: unknown;
  updatedAt?: unknown;
};

function serializeId(value: unknown): string {
  return value === null || value === undefined ? "" : String(value);
}

function serializeDate(value: unknown): string | null {
  if (value instanceof Date) {
    return value.toISOString();
  }

  return typeof value === "string" && value.length > 0 ? value : null;
}

function toNurseRecord(row: LeanNurse): NurseRecord {
  return {
    _id: serializeId(row._id),
    fullName: String(row.fullName ?? ""),
    email: String(row.email ?? ""),
    phone: String(row.phone ?? ""),
    location: String(row.location ?? ""),
    professionalRole: String(row.professionalRole ?? ""),
    service: String(row.service ?? ""),
    yearsOfExperience: Number(row.yearsOfExperience ?? 0),
    availability:
      row.availability === "Currently Unavailable" ? "Currently Unavailable" : "Available",
    createdAt: serializeDate(row.createdAt),
    updatedAt: serializeDate(row.updatedAt),
  };
}

/**
 * GET /api/nurses.
 *
 * Reads MongoDB when it is configured and reachable. When it is not configured
 * at all (a fresh Vercel deploy without `MONGODB_URI`, or a plain `npm run dev`
 * checkout) the read-only sample nurses are returned and flagged as `demo` so
 * the page still renders. An unreachable database is reported as an error
 * instead of silently showing sample data.
 */
export async function listNurses(): Promise<NurseListResult> {
  const { client, uriConfigured, reason } = await connectDatabase();

  if (!uriConfigured) {
    return {
      nurses: SEED_NURSES,
      source: "demo",
      notice: `Demo data: ${reason ?? "MONGODB_URI is not configured."}`,
    };
  }

  if (!client) {
    throw new DatabaseUnavailableError(
      reason ?? "MongoDB could not be reached. Check MONGODB_URI and the Atlas IP allow-list.",
    );
  }

  const rows = (await Nurse.find().sort({ createdAt: -1 }).lean().exec()) as unknown as LeanNurse[];

  return { nurses: rows.map(toNurseRecord), source: "mongodb" };
}

/** POST /api/nurses. Persists to MongoDB, or reports why it cannot. */
export async function createNurse(input: NurseInput): Promise<NurseRecord> {
  const { client, uriConfigured, reason } = await connectDatabase();

  if (!client) {
    throw new DatabaseUnavailableError(
      uriConfigured
        ? (reason ?? "MongoDB could not be reached, so the nurse could not be saved.")
        : "MongoDB is not configured, so the nurse could not be saved. Add MONGODB_URI as an environment variable.",
    );
  }

  const email = input.email.toLowerCase();
  const existing = await Nurse.countDocuments({ email }).exec();

  if (existing > 0) {
    throw new DuplicateNurseEmailError(email);
  }

  const created = (await Nurse.create(input)) as unknown as LeanNurse;

  return toNurseRecord(created);
}
