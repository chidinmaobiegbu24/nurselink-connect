import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ChangeEvent, type FormEvent } from "react";

const nurses = [
  {
    id: "grace-johnson",
    name: "Grace Johnson",
    location: "Lagos",
    role: "Registered Nurse",
  },
  {
    id: "sarah-williams",
    name: "Sarah Williams",
    location: "Abuja",
    role: "Licensed Practical Nurse",
  },
  {
    id: "david-brown",
    name: "David Brown",
    location: "Port Harcourt",
    role: "Registered Nurse",
  },
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  careType: "",
  startDate: "",
  notes: "",
};

export const Route = createFileRoute("/request-care/$nurseId")({
  component: RequestCare,
});

function RequestCare() {
  const { nurseId } = Route.useParams();
  const nurse = nurses.find((profile) => profile.id === nurseId);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (!nurse) {
    return (
      <main className="min-h-screen overflow-x-hidden bg-gray-50 py-10 px-4 sm:py-16 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-blue-900 mb-4 sm:text-4xl">
            Nurse Not Found
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
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-900 mb-4 sm:text-4xl">
            Request Care
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Send a care request to {nurse.name}, {nurse.role} in {nurse.location}.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded-xl shadow-md space-y-6 sm:p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="text-gray-700 font-medium">
              Full Name
              <input
                name="fullName"
                type="text"
                value={form.fullName}
                onChange={handleChange}
                required
                className="mt-2 w-full border rounded-lg px-4 py-3 font-normal"
              />
            </label>

            <label className="text-gray-700 font-medium">
              Email Address
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-2 w-full border rounded-lg px-4 py-3 font-normal"
              />
            </label>

            <label className="text-gray-700 font-medium">
              Phone Number
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                required
                className="mt-2 w-full border rounded-lg px-4 py-3 font-normal"
              />
            </label>

            <label className="text-gray-700 font-medium">
              Location
              <input
                name="location"
                type="text"
                value={form.location}
                onChange={handleChange}
                required
                className="mt-2 w-full border rounded-lg px-4 py-3 font-normal"
              />
            </label>

            <label className="text-gray-700 font-medium">
              Type of Care Needed
              <select
                name="careType"
                value={form.careType}
                onChange={handleChange}
                required
                className="mt-2 w-full border rounded-lg px-4 py-3 font-normal"
              >
                <option value="">Choose a type of care</option>
                <option>Home Nursing Care</option>
                <option>Elderly Care</option>
                <option>Post-Surgery Care</option>
                <option>General Caregiving</option>
              </select>
            </label>

            <label className="text-gray-700 font-medium">
              Preferred Start Date
              <input
                name="startDate"
                type="date"
                value={form.startDate}
                onChange={handleChange}
                required
                className="mt-2 w-full border rounded-lg px-4 py-3 font-normal"
              />
            </label>
          </div>

          <label className="block text-gray-700 font-medium">
            Additional Notes
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={4}
              className="mt-2 w-full border rounded-lg px-4 py-3 font-normal"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white rounded-lg px-6 py-3 hover:bg-blue-800 sm:w-auto"
          >
            Submit Care Request
          </button>

          {submitted && (
            <p className="text-green-700" role="status">
              Care request submitted successfully.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}