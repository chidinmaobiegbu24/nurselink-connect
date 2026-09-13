import { createFileRoute, Link } from "@tanstack/react-router";

const nurses = [
  {
    id: "grace-johnson",
    name: "Grace Johnson",
    location: "Lagos",
    role: "Registered Nurse",
    experience: "5+ Years Experience",
    service: "Home Nursing Care",
    description: "Specializes in home nursing, elderly care, and patient support.",
  },
  {
    id: "sarah-williams",
    name: "Sarah Williams",
    location: "Abuja",
    role: "Licensed Practical Nurse",
    experience: "4+ Years Experience",
    service: "Post-Surgery Care",
    description: "Provides post-surgery care and general caregiving support.",
  },
  {
    id: "david-brown",
    name: "David Brown",
    location: "Port Harcourt",
    role: "Registered Nurse",
    experience: "7+ Years Experience",
    service: "Elderly Care",
    description: "Experienced in chronic care support and home nursing services.",
  },
  {
    id: "grace-adeyemi",
    name: "Grace Adeyemi",
    location: "Didsbury, Manchester",
    role: "RN, BSc (Hons) Adult Nursing",
    experience: "9 years experience",
    service: "Post-operative recovery, wound care, and medication management",
    description: "Specialises in post-operative recovery, wound care and medication management for adults healing at home.",
  },
  {
    id: "daniel-osei",
    name: "Daniel Osei",
    location: "Edgbaston, Birmingham",
    role: "RN, MSc Critical Care",
    experience: "12 years experience",
    service: "Chronic conditions, complex mobility, and respiratory care",
    description: "Supports clients living with chronic conditions, complex mobility needs and respiratory care at home.",
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    location: "Kensington, London",
    role: "RGN, RM — Registered Midwife",
    experience: "7 years experience",
    service: "Maternal and newborn support, postnatal recovery, and feeding guidance",
    description: "Focused on maternal and newborn support, postnatal recovery and feeding guidance for new families.",
  },
];

export const Route = createFileRoute("/nurse-profile/$nurseId")({
  component: NurseProfile,
});

function NurseProfile() {
  const { nurseId } = Route.useParams();
  const nurse = nurses.find((profile) => profile.id === nurseId);

  if (!nurse) {
    return (
      <main className="min-h-screen overflow-x-hidden bg-gray-50 py-10 px-4 sm:py-16 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-blue-900 mb-4 sm:text-4xl">
            Nurse Profile Not Found
          </h1>
          <Link
            to="/find-nurse"
            className="inline-block bg-blue-900 text-white rounded-lg px-6 py-3 hover:bg-blue-800"
          >
            Back to Find a Nurse
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-gray-50 py-10 px-4 sm:py-16 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-5 sm:p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-4 sm:text-4xl">
            {nurse.name}
          </h1>
          <p className="text-gray-600 text-lg">{nurse.role}</p>
          <p className="text-gray-500 mt-3">📍 {nurse.location}, Nigeria</p>
          <p className="text-gray-500 mt-2">{nurse.experience}</p>
          <p className="text-gray-600 mt-5">
            <span className="font-semibold">Services or specialization:</span>{" "}
            {nurse.service}
          </p>
          <p className="text-gray-600 mt-4">{nurse.description}</p>

          <Link
            to="/request-care/$nurseId"
            params={{ nurseId: nurse.id }}
            className="mt-6 inline-block w-full bg-blue-900 text-center text-white rounded-lg px-6 py-3 hover:bg-blue-800 sm:w-auto"
          >
            Request Care
          </Link>
        </div>
      </div>
    </main>
  );
}