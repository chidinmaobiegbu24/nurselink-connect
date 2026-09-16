//#region node_modules/.nitro/vite/services/ssr/assets/mock-data-DPXyPuiQ.js
var nurses = [
	{
		id: "grace-johnson",
		name: "Grace Johnson",
		location: "Lagos",
		role: "Registered Nurse",
		experience: "5+ Years Experience",
		service: "Home Nursing Care",
		availability: "Available",
		description: "Specializes in home nursing, elderly care, and patient support."
	},
	{
		id: "sarah-williams",
		name: "Sarah Williams",
		location: "Abuja",
		role: "Licensed Practical Nurse",
		experience: "4+ Years Experience",
		service: "Post-Surgery Care",
		availability: "Currently Unavailable",
		description: "Provides post-surgery care and general caregiving support."
	},
	{
		id: "david-brown",
		name: "David Brown",
		location: "Port Harcourt",
		role: "Registered Nurse",
		experience: "7+ Years Experience",
		service: "Elderly Care",
		availability: "Available",
		description: "Experienced in chronic care support and home nursing services."
	}
];
var careRequests = [
	{
		id: "CR-1048",
		patient: "Amaka Okafor",
		service: "Home Nursing Care",
		nurse: "Grace Johnson",
		status: "In progress",
		date: "15 Sep 2026"
	},
	{
		id: "CR-1047",
		patient: "Samuel Williams",
		service: "Post-Surgery Care",
		nurse: "Sarah Williams",
		status: "Pending",
		date: "14 Sep 2026"
	},
	{
		id: "CR-1046",
		patient: "Helen Ibrahim",
		service: "Elderly Care",
		nurse: "David Brown",
		status: "Completed",
		date: "13 Sep 2026"
	}
];
var NURSES_STORAGE_KEY = "nurses-connect-registered-nurses";
var CARE_REQUESTS_STORAGE_KEY = "nurses-connect-care-requests";
var DATA_UPDATED_EVENT = "nurses-connect-data-updated";
function getSavedNurses() {
	if (typeof window === "undefined") return [];
	try {
		const storedNurses = window.localStorage.getItem(NURSES_STORAGE_KEY);
		if (!storedNurses) return [];
		const parsedNurses = JSON.parse(storedNurses);
		return Array.isArray(parsedNurses) ? parsedNurses : [];
	} catch {
		return [];
	}
}
function getNurses() {
	return [...nurses, ...getSavedNurses()];
}
function saveNurse(nurse) {
	if (typeof window === "undefined") return;
	window.localStorage.setItem(NURSES_STORAGE_KEY, JSON.stringify([...getSavedNurses(), nurse]));
	window.dispatchEvent(new Event(DATA_UPDATED_EVENT));
}
function getSavedCareRequests() {
	if (typeof window === "undefined") return [];
	try {
		const storedRequests = window.localStorage.getItem(CARE_REQUESTS_STORAGE_KEY);
		if (!storedRequests) return [];
		const parsedRequests = JSON.parse(storedRequests);
		return Array.isArray(parsedRequests) ? parsedRequests : [];
	} catch {
		return [];
	}
}
function getCareRequests() {
	return [...careRequests, ...getSavedCareRequests()];
}
function saveCareRequest(request) {
	if (typeof window === "undefined") return;
	window.localStorage.setItem(CARE_REQUESTS_STORAGE_KEY, JSON.stringify([...getSavedCareRequests(), request]));
	window.dispatchEvent(new Event(DATA_UPDATED_EVENT));
}
//#endregion
export { saveCareRequest as a, getSavedNurses as i, getCareRequests as n, saveNurse as o, getNurses as r, DATA_UPDATED_EVENT as t };
