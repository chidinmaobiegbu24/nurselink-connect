export type Nurse = {
  id: string;
  name: string;
  location: string;
  role: string;
  experience: string;
  service: string;
  description?: string;
  email?: string;
  phone?: string;
  availability?: string;
  status?: string;
};

export type CareRequest = {
  id: string;
  patient: string;
  service: string;
  nurse: string;
  status: string;
  date: string;
  email?: string;
  phone?: string;
  location?: string;
  startDate?: string;
  notes?: string;
};

export const nurses: Nurse[] = [
  {
    id: "grace-johnson",
    name: "Grace Johnson",
    location: "Lagos",
    role: "Registered Nurse",
    experience: "5+ Years Experience",
    service: "Home Nursing Care",
    availability: "Available",
    description: "Specializes in home nursing, elderly care, and patient support.",
  },
  {
    id: "sarah-williams",
    name: "Sarah Williams",
    location: "Abuja",
    role: "Licensed Practical Nurse",
    experience: "4+ Years Experience",
    service: "Post-Surgery Care",
    availability: "Currently Unavailable",
    description: "Provides post-surgery care and general caregiving support.",
  },
  {
    id: "david-brown",
    name: "David Brown",
    location: "Port Harcourt",
    role: "Registered Nurse",
    experience: "7+ Years Experience",
    service: "Elderly Care",
    availability: "Available",
    description: "Experienced in chronic care support and home nursing services.",
  },
];

export const careRequests: CareRequest[] = [
  {
    id: "CR-1048",
    patient: "Amaka Okafor",
    service: "Home Nursing Care",
    nurse: "Grace Johnson",
    status: "In progress",
    date: "15 Sep 2026",
  },
  {
    id: "CR-1047",
    patient: "Samuel Williams",
    service: "Post-Surgery Care",
    nurse: "Sarah Williams",
    status: "Pending",
    date: "14 Sep 2026",
  },
  {
    id: "CR-1046",
    patient: "Helen Ibrahim",
    service: "Elderly Care",
    nurse: "David Brown",
    status: "Completed",
    date: "13 Sep 2026",
  },
];

const NURSES_STORAGE_KEY = "nurses-connect-registered-nurses";
const CARE_REQUESTS_STORAGE_KEY = "nurses-connect-care-requests";
export const DATA_UPDATED_EVENT = "nurses-connect-data-updated";

export function getSavedNurses(): Nurse[] {
  if (typeof window === "undefined") return [];

  try {
    const storedNurses = window.localStorage.getItem(NURSES_STORAGE_KEY);
    if (!storedNurses) return [];

    const parsedNurses: unknown = JSON.parse(storedNurses);
    return Array.isArray(parsedNurses) ? (parsedNurses as Nurse[]) : [];
  } catch {
    return [];
  }
}

export function getNurses(): Nurse[] {
  return [...nurses, ...getSavedNurses()];
}

export function saveNurse(nurse: Nurse) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(NURSES_STORAGE_KEY, JSON.stringify([...getSavedNurses(), nurse]));
  window.dispatchEvent(new Event(DATA_UPDATED_EVENT));
}

export function getSavedCareRequests(): CareRequest[] {
  if (typeof window === "undefined") return [];

  try {
    const storedRequests = window.localStorage.getItem(CARE_REQUESTS_STORAGE_KEY);
    if (!storedRequests) return [];

    const parsedRequests: unknown = JSON.parse(storedRequests);
    return Array.isArray(parsedRequests) ? (parsedRequests as CareRequest[]) : [];
  } catch {
    return [];
  }
}

export function getCareRequests(): CareRequest[] {
  return [...careRequests, ...getSavedCareRequests()];
}

export function saveCareRequest(request: CareRequest) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(
    CARE_REQUESTS_STORAGE_KEY,
    JSON.stringify([...getSavedCareRequests(), request]),
  );
  window.dispatchEvent(new Event(DATA_UPDATED_EVENT));
}
