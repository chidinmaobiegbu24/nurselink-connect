import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BadgeCheck, BriefcaseMedical, UserRound } from "lucide-react";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/join-as-nurse")({
  head: () => ({
    meta: [
      {
        title: "Join as a Nurse | Nurses Connect",
      },
      {
        name: "description",
        content:
          "Create a Nurses Connect profile and help individuals and families find professional nursing care.",
      },
    ],
  }),
  component: JoinAsNurse,
});

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  role: string;
  service: string;
  experience: string;
  availability: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  role: "",
  service: "",
  experience: "",
  availability: "",
};

function JoinAsNurse() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: undefined,
    }));

    setSubmitted(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FormErrors = {};

    const trimmedFullName = form.fullName.trim();
    const trimmedEmail = form.email.trim();
    const trimmedPhone = form.phone.trim();
    const trimmedLocation = form.location.trim();
    const trimmedRole = form.role.trim();
    const trimmedService = form.service.trim();
    const trimmedExperience = form.experience.trim();

    const phoneDigits = trimmedPhone.replace(/\D/g, "");
    const experienceValue = Number(trimmedExperience);

    if (!trimmedFullName) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!trimmedEmail) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!trimmedPhone) {
      nextErrors.phone = "Please enter your phone number.";
    } else if (phoneDigits.length < 7) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!trimmedLocation) {
      nextErrors.location = "Please enter your location.";
    }

    if (!trimmedRole) {
      nextErrors.role = "Please select your professional role.";
    }

    if (!trimmedService) {
      nextErrors.service = "Please select your service.";
    }

    if (!trimmedExperience) {
      nextErrors.experience = "Please enter your years of experience.";
    } else if (
      Number.isNaN(experienceValue) ||
      experienceValue < 0 ||
      experienceValue > 70
    ) {
      nextErrors.experience = "Please enter a valid number of years.";
    }

    if (!form.availability) {
      nextErrors.availability = "Please select your availability.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitted(false);
    try {
      const response = await fetch("http://localhost:5000/api/nurses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: trimmedFullName,
          email: trimmedEmail,
          phone: trimmedPhone,
          location: trimmedLocation,
          professionalRole: trimmedRole,
          service: trimmedService,
          yearsOfExperience: experienceValue,
          availability: form.availability,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to register nurse.");
      }

      setForm(initialForm);
      setSubmitted(true);
    } catch (error) {
      console.error("Nurse registration failed:", error);

      setErrors({
        fullName:
          error instanceof Error
            ? error.message
            : "Unable to register. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-paper px-4 py-10 text-ink sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <UserRound className="h-8 w-8 text-primary" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Join as a Nurse
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Create your Nurses Connect profile and connect with individuals
            and families looking for professional nursing care.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-primary/5 p-4">
              <BadgeCheck className="mb-2 h-6 w-6 text-primary" />
              <h2 className="font-semibold">Professional Profile</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Showcase your experience and services.
              </p>
            </div>

            <div className="rounded-xl bg-primary/5 p-4">
              <BriefcaseMedical className="mb-2 h-6 w-6 text-primary" />
              <h2 className="font-semibold">Care Opportunities</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Help families find the care they need.
              </p>
            </div>

            <div className="rounded-xl bg-primary/5 p-4">
              <UserRound className="mb-2 h-6 w-6 text-primary" />
              <h2 className="font-semibold">Easy Registration</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Submit your professional information securely.
              </p>
            </div>
          </div>

          {submitted && (
            <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
              <p className="font-semibold">
                Registration successful!
              </p>
              <p className="mt-1 text-sm">
                Your nurse profile has been saved successfully.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />

                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />

                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full rounded-lg border px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />

                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-medium"
                >
                  Location
                </label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="e.g. Port Harcourt"
                  className="w-full rounded-lg border px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />

                {errors.location && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.location}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="mb-2 block text-sm font-medium"
                >
                  Professional Role
                </label>

                <select
                  id="role"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full rounded-lg border bg-white px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select your role</option>
                  <option value="Registered Nurse">Registered Nurse</option>
                  <option value="Licensed Practical Nurse">
                    Licensed Practical Nurse
                  </option>
                  <option value="Community Health Nurse">
                    Community Health Nurse
                  </option>
                  <option value="Midwife">Midwife</option>
                  <option value="Caregiver">Caregiver</option>
                </select>

                {errors.role && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.role}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium"
                >
                  Service / Specialization
                </label>

                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border bg-white px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select a service</option>
                  <option value="Home Nursing Care">
                    Home Nursing Care
                  </option>
                  <option value="Elderly Care">Elderly Care</option>
                  <option value="Post-Surgery Care">
                    Post-Surgery Care
                  </option>
                  <option value="General Caregiving">
                    General Caregiving
                  </option>
                </select>

                {errors.service && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.service}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="experience"
                  className="mb-2 block text-sm font-medium"
                >
                  Years of Experience
                </label>

                <input
                  id="experience"
                  name="experience"
                  type="number"
                  min="0"
                  max="70"
                  value={form.experience}
                  onChange={handleChange}
                  placeholder="e.g. 5"
                  className="w-full rounded-lg border px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />

                {errors.experience && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.experience}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="availability"
                  className="mb-2 block text-sm font-medium"
                >
                  Availability
                </label>

                <select
                  id="availability"
                  name="availability"
                  value={form.availability}
                  onChange={handleChange}
                  className="w-full rounded-lg border bg-white px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select availability</option>
                  <option value="Available">Available</option>
                  <option value="Currently Unavailable">
                    Currently Unavailable
                  </option>
                </select>

                {errors.availability && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.availability}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-end">
              <Link to="/">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Cancel
                </Button>
              </Link>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? "Registering..." : "Register as a Nurse"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}