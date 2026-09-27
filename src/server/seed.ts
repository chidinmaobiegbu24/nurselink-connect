import type { NurseRecord } from "@/server/types";

/**
 * Sample nurses used ONLY as a read-only demo fallback when MongoDB is not
 * reachable (for example before `MONGODB_URI` has been added to the Vercel
 * project). Every response that contains seed data is labelled with
 * `meta.source = "seed"` so the UI can be explicit about it. Registrations are
 * never written here.
 */
export const SEED_NURSES: NurseRecord[] = [
  {
    _id: "seed-1",
    fullName: "Priya Sharma",
    email: "priya@example.com",
    phone: "+1-416-555-0101",
    location: "Toronto, ON",
    professionalRole: "Registered Nurse",
    service: "Home Nursing Care",
    yearsOfExperience: 5,
    availability: "Available",
    createdAt: null,
    updatedAt: null,
  },
  {
    _id: "seed-2",
    fullName: "Grace Adeyemi",
    email: "grace@example.com",
    phone: "+1-604-555-0102",
    location: "Vancouver, BC",
    professionalRole: "Nurse Practitioner",
    service: "Elderly Care",
    yearsOfExperience: 8,
    availability: "Available",
    createdAt: null,
    updatedAt: null,
  },
  {
    _id: "seed-3",
    fullName: "Daniel Osei",
    email: "daniel@example.com",
    phone: "+1-403-555-0103",
    location: "Calgary, AB",
    professionalRole: "Critical Care Nurse",
    service: "Post-Surgery Care",
    yearsOfExperience: 10,
    availability: "Currently Unavailable",
    createdAt: null,
    updatedAt: null,
  },
];
