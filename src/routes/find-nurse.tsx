import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from "react";
export const Route = createFileRoute('/find-nurse')({
  component: RouteComponent,
})

function RouteComponent() {
  return <FindNurse />;
}
export default function FindNurse() {
  const [location, setLocation] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const nurses = [
    {
      id: "grace-johnson",
      name: "Grace Johnson",
      location: "Lagos",
      role: "Registered Nurse",
      service: "Home Nursing Care",
      experience: "5+ Years Experience",
      description: "Specializes in home nursing, elderly care, and patient support.",
    },
    {
      id: "sarah-williams",
      name: "Sarah Williams",
      location: "Abuja",
      role: "Licensed Practical Nurse",
      service: "Post-Surgery Care",
      experience: "4+ Years Experience",
      description: "Provides post-surgery care and general caregiving support.",
    },
    {
      id: "david-brown",
      name: "David Brown",
      location: "Port Harcourt",
      role: "Registered Nurse",
      service: "Elderly Care",
      experience: "7+ Years Experience",
      description: "Experienced in chronic care support and home nursing services.",
    },
  ];
  const [filteredNurses, setFilteredNurses] = useState(nurses);

  const handleSearch = () => {
    const normalizedLocation = location.trim().toLowerCase();

    setFilteredNurses(
      nurses.filter(
        (nurse) =>
          (!normalizedLocation ||
            nurse.location.toLowerCase().includes(normalizedLocation)) &&
          (!selectedService || nurse.service === selectedService)
      )
    );
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-gray-50 py-10 px-4 sm:py-16 sm:px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-900 mb-4 sm:text-4xl">
            Find a Nurse
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Search and connect with qualified nurses based on your
            caregiving needs.
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md mb-10 sm:p-6">
          <h2 className="text-xl font-semibold mb-4">
            Search for a Nurse
          </h2>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

            <input
              type="text"
              placeholder="Search by location"
               value={location}
               onChange={(e) => setLocation(e.target.value)}
              className="border rounded-lg px-4 py-3"
            />

            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="border rounded-lg px-4 py-3"
            >
              <option value="">Choose a service</option>
              <option>Home Nursing Care</option>
              <option>Elderly Care</option>
              <option>Post-Surgery Care</option>
              <option>General Caregiving</option>
            </select>

            <button
              onClick={handleSearch}
              className="w-full bg-blue-900 text-white rounded-lg px-6 py-3 hover:bg-blue-800 lg:w-auto"
            >
              Search
            </button>

          </div>
        </div>

        <h2 className="text-2xl font-bold text-blue-900 mb-6 sm:text-3xl">
          Available Nurses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNurses.length > 0 ? (
            filteredNurses.map((nurse) => (
              <div key={nurse.name} className="min-w-0 bg-white rounded-xl shadow-md p-5 sm:p-6">
                <h3 className="text-xl font-bold text-blue-900">
                  {nurse.name}
                </h3>

                <p className="text-gray-600 mt-1">{nurse.role}</p>

                <p className="text-gray-500 mt-3">
                  📍 {nurse.location}, Nigeria
                </p>

                <Link
                  to="/nurse-profile/$nurseId"
                  params={{ nurseId: nurse.id }}
                  className="mt-5 inline-block w-full bg-blue-900 text-center text-white px-5 py-2 rounded-lg hover:bg-blue-800 sm:w-auto"
                >
                  View Profile
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No nurses found in this location.</p>
          )}

</div>

      </div>
    </main>
  );
}