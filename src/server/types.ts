/**
 * Wire shapes shared by the `/api/*` server routes and the server-only data
 * layer. These mirror the mongoose documents in `server/models/*.js` and the
 * `Nurse` / `CareRequest` types used by the page components.
 */

export const AVAILABILITY_VALUES = ["Available", "Currently Unavailable"] as const;
export type Availability = (typeof AVAILABILITY_VALUES)[number];

export const CARE_REQUEST_STATUSES = ["Pending", "Accepted", "Completed", "Cancelled"] as const;
export type CareRequestStatus = (typeof CARE_REQUEST_STATUSES)[number];

/** JSON shape returned for a nurse (`_id` is always a string for the client). */
export type NurseRecord = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  professionalRole: string;
  service: string;
  yearsOfExperience: number;
  availability: Availability;
  createdAt: string | null;
  updatedAt: string | null;
};

/** Body accepted by `POST /api/nurses`. */
export type NurseInput = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  professionalRole: string;
  service: string;
  yearsOfExperience: number;
  availability: Availability;
};

/** JSON shape returned for a care request. */
export type CareRequestRecord = {
  _id: string;
  patient: string;
  service: string;
  nurse: string;
  status: CareRequestStatus;
  date: string;
  email: string;
  phone: string;
  location: string;
  startDate: string;
  notes: string;
  createdAt: string | null;
};

/** Body accepted by `POST /api/care-requests`. */
export type CareRequestInput = {
  patient: string;
  service: string;
  nurse: string;
  status: CareRequestStatus;
  date: string;
  email: string;
  phone: string;
  location: string;
  startDate: string;
  notes: string;
};

/**
 * Which data answered a read request. `demo` means MongoDB was not reachable,
 * so the read-only sample data from `src/server/seed.ts` was returned instead.
 */
export type DataSource = "mongodb" | "demo";

export type NurseListResult = {
  nurses: NurseRecord[];
  source: DataSource;
  /** Set when MongoDB could not be used, so the UI can explain what happened. */
  notice?: string;
};

export type CareRequestListResult = {
  careRequests: CareRequestRecord[];
  source: DataSource;
  notice?: string;
};
