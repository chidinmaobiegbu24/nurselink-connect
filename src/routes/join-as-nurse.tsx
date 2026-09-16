import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BadgeCheck, BriefcaseMedical, UserRound } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { saveNurse } from "@/lib/mock-data";

export const Route = createFileRoute("/join-as-nurse")({
  head: () => ({
    meta: [
      { title: "Join as a Nurse | Nurses Connect" },
      {
        name: "description",
        content:
          "Create a Nurses Connect profile and help individuals and families find your professional home-care services.",
      },
    ],
  }),
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
  availability: "Available",
};

type FormField = keyof typeof initialForm;
type FormErrors = Partial<Record<FormField, string>>;

const inputClassName = (hasError: boolean) =>
  `mt-2 h-11 w-full rounded-lg border bg-paper px-4 text-sm font-normal text-ink outline-none transition placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-primary/15 ${
    hasError
      ? "border-destructive focus:border-destructive"
      : "border-input focus:border-primary"
  }`;

function JoinAsNurse() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setErrors((currentErrors) => {
      if (!currentErrors[name as FormField]) return currentErrors;

      const nextErrors = { ...currentErrors };
      delete nextErrors[name as FormField];
      return nextErrors;
    });
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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

    if (!trimmedFullName) nextErrors.fullName = "Please enter your full name.";
    if (!trimmedEmail) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email address, such as you@example.com.";
    }
    if (!trimmedPhone) {
      nextErrors.phone = "Please enter your phone number.";
    } else if (!/^\+?[0-9\s().-]+$/.test(trimmedPhone) || phoneDigits.length < 7) {
      nextErrors.phone = "Please enter a valid phone number with at least 7 digits.";
    }
    if (!trimmedLocation) nextErrors.location = "Please enter your location.";
    if (!trimmedRole) nextErrors.role = "Please enter your professional role.";
    if (!trimmedService) nextErrors.service = "Please enter your service or specialization.";
    if (
      !trimmedExperience ||
      !Number.isFinite(experienceValue) ||
      experienceValue < 0
    ) {
      nextErrors.experience = "Please enter a valid number of years from 0 upwards.";
    }
    if (!form.availability) nextErrors.availability = "Please select your availability.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    saveNurse({
      id: `registered-${Date.now()}`,
      name: trimmedFullName,
      email: trimmedEmail,
      phone: trimmedPhone,
      location: trimmedLocation,
      role: trimmedRole,
      service: trimmedService,
      experience: `${trimmedExperience} years experience`,
      availability: form.availability,
    });
    setForm(initialForm);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-paper px-4 py-10 text-ink sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to Home
        </Link>
        <header className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Join the care community
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Bring your nursing expertise to people who need it
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Create a professional profile on Nurses Connect and make it easier for individuals and
            families to find trusted care that fits their needs.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl border border-line bg-surface p-5 shadow-sm sm:mt-12 sm:p-8"
          noValidate
        >
          <div className="flex items-start gap-3 border-b border-line pb-6">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
              <UserRound className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">Your details</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Tell families how they can reach you.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 pt-6 md:grid-cols-2">
            <label className="text-sm font-semibold text-ink">
              Full name
              <input
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="e.g. Grace Adeyemi"
                value={form.fullName}
                onChange={handleChange}
                required
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                className={inputClassName(Boolean(errors.fullName))}
              />
              {errors.fullName && (
                <p id="fullName-error" className="mt-1.5 text-xs font-medium text-destructive">
                  {errors.fullName}
                </p>
              )}
            </label>

            <label className="text-sm font-semibold text-ink">
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={inputClassName(Boolean(errors.email))}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs font-medium text-destructive">
                  {errors.email}
                </p>
              )}
            </label>

            <label className="text-sm font-semibold text-ink">
              Phone number
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="e.g. +234 800 000 0000"
                value={form.phone}
                onChange={handleChange}
                required
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={inputClassName(Boolean(errors.phone))}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1.5 text-xs font-medium text-destructive">
                  {errors.phone}
                </p>
              )}
            </label>

            <label className="text-sm font-semibold text-ink">
              Location
              <input
                name="location"
                type="text"
                autoComplete="address-level2"
                placeholder="City or region where you practise"
                value={form.location}
                onChange={handleChange}
                required
                aria-invalid={Boolean(errors.location)}
                aria-describedby={errors.location ? "location-error" : undefined}
                className={inputClassName(Boolean(errors.location))}
              />
              {errors.location && (
                <p id="location-error" className="mt-1.5 text-xs font-medium text-destructive">
                  {errors.location}
                </p>
              )}
            </label>
          </div>

          <div className="mt-8 flex items-start gap-3 border-b border-line pb-6">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-success-soft text-success">
              <BriefcaseMedical className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">Professional profile</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Help families understand your experience and areas of care.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 pt-6 md:grid-cols-2">
            <label className="text-sm font-semibold text-ink">
              Professional role
              <input
                name="role"
                type="text"
                placeholder="e.g. Registered Nurse"
                value={form.role}
                onChange={handleChange}
                required
                aria-invalid={Boolean(errors.role)}
                aria-describedby={errors.role ? "role-error" : undefined}
                className={inputClassName(Boolean(errors.role))}
              />
              {errors.role && (
                <p id="role-error" className="mt-1.5 text-xs font-medium text-destructive">
                  {errors.role}
                </p>
              )}
            </label>

            <label className="text-sm font-semibold text-ink">
              Service or specialization
              <input
                name="service"
                type="text"
                placeholder="e.g. Elderly care and home nursing"
                value={form.service}
                onChange={handleChange}
                required
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? "service-error" : undefined}
                className={inputClassName(Boolean(errors.service))}
              />
              {errors.service && (
                <p id="service-error" className="mt-1.5 text-xs font-medium text-destructive">
                  {errors.service}
                </p>
              )}
            </label>

            <label className="text-sm font-semibold text-ink md:col-span-2">
              Years of experience
              <input
                name="experience"
                type="number"
                min="0"
                placeholder="e.g. 5"
                value={form.experience}
                onChange={handleChange}
                required
                aria-invalid={Boolean(errors.experience)}
                aria-describedby={errors.experience ? "experience-error" : undefined}
                className={inputClassName(Boolean(errors.experience))}
              />
              {errors.experience && (
                <p id="experience-error" className="mt-1.5 text-xs font-medium text-destructive">
                  {errors.experience}
                </p>
              )}
            </label>

            <label className="text-sm font-semibold text-ink md:col-span-2">
              Availability
              <select
                name="availability"
                value={form.availability}
                onChange={handleChange}
                required
                aria-invalid={Boolean(errors.availability)}
                aria-describedby={errors.availability ? "availability-error" : undefined}
                className={inputClassName(Boolean(errors.availability))}
              >
                <option value="Available">Available</option>
                <option value="Currently Unavailable">Currently Unavailable</option>
              </select>
              {errors.availability && (
                <p
                  id="availability-error"
                  className="mt-1.5 text-xs font-medium text-destructive"
                >
                  {errors.availability}
                </p>
              )}
            </label>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2 text-xs leading-5 text-muted-foreground">
              <BadgeCheck className="size-4 shrink-0 text-success" aria-hidden="true" />
              Your details help families find the right professional support.
            </p>
            <Button type="submit" size="lg" className="h-12 rounded-lg px-6 shadow-sm">
              Submit Registration
            </Button>
          </div>

          {submitted && (
            <p
              className="mt-5 rounded-lg border border-success/20 bg-success-soft px-4 py-3 text-sm font-medium text-success"
              role="status"
            >
              Registration submitted successfully.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
