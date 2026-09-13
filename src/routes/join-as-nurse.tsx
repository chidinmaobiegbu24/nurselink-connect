import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/join-as-nurse")({
  component: JoinAsNurse,
});

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  role: "",
  service: "",
  experience: "",
};

function JoinAsNurse() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-gray-50 py-10 px-4 sm:py-16 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-900 mb-4 sm:text-4xl">
            Join as a Nurse
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Welcome, qualified nurses. Register your details to connect with
            people looking for trusted professional care.
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
              Professional Role
              <input
                name="role"
                type="text"
                value={form.role}
                onChange={handleChange}
                required
                className="mt-2 w-full border rounded-lg px-4 py-3 font-normal"
              />
            </label>

            <label className="text-gray-700 font-medium">
              Service/Specialization
              <input
                name="service"
                type="text"
                value={form.service}
                onChange={handleChange}
                required
                className="mt-2 w-full border rounded-lg px-4 py-3 font-normal"
              />
            </label>

            <label className="text-gray-700 font-medium md:col-span-2">
              Years of Experience
              <input
                name="experience"
                type="number"
                min="0"
                value={form.experience}
                onChange={handleChange}
                required
                className="mt-2 w-full border rounded-lg px-4 py-3 font-normal"
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white rounded-lg px-6 py-3 hover:bg-blue-800 sm:w-auto"
          >
            Submit Registration
          </button>

          {submitted && (
            <p className="text-green-700" role="status">
              Registration submitted successfully.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
