import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, ClipboardList, ShieldCheck, UserRound } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { getNurses, saveCareRequest } from "@/lib/mock-data";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  careType: "",
  startDate: "",
  notes: "",
};

type FormField = keyof typeof initialForm;
type FormErrors = Partial<Record<FormField, string>>;

const inputClassName = (hasError: boolean) =>
  `mt-2 h-11 w-full rounded-lg border bg-paper px-4 text-sm font-normal text-ink outline-none transition placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-primary/15 ${
    hasError
      ? "border-destructive focus:border-destructive"
      : "border-input focus:border-primary"
  }`;

export const Route = createFileRoute("/request-care/$nurseId")({
  head: () => ({
    meta: [
      { title: "Request Care | Nurses Connect" },
      {
        name: "description",
        content:
          "Share your care needs with a qualified Nurses Connect professional and request convenient home-care support.",
      },
    ],
  }),
  component: RequestCare,
});

function RequestCare() {
  const { nurseId } = Route.useParams();
  const [nurses, setNurses] = useState(getNurses);
  const nurse = nurses.find((profile) => profile.id === nurseId);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setNurses(getNurses());
  }, []);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
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
    const phoneDigits = trimmedPhone.replace(/\D/g, "");

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
    if (!trimmedLocation) nextErrors.location = "Please enter where care is needed.";
    if (!form.careType) nextErrors.careType = "Please select the type of care needed.";
    if (!form.startDate) nextErrors.startDate = "Please choose a preferred start date.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    saveCareRequest({
      id: `request-${Date.now()}`,
      patient: form.fullName,
      service: form.careType,
      nurse: nurse?.name ?? "Unassigned",
      status: "Pending",
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      email: form.email,
      phone: form.phone,
      location: form.location,
      startDate: form.startDate,
      notes: form.notes,
    });
    setForm(initialForm);
    setSubmitted(true);
  };

  if (!nurse) {
    return (
      <main className="min-h-screen bg-paper px-4 py-10 text-ink sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Request unavailable
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Nurse profile not found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            This profile may have been removed or the link may be out of date.
          </p>
          <Button asChild className="mt-8 h-11 rounded-lg">
            <Link to="/find-nurse">Back to Find a Nurse</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-paper px-4 py-10 text-ink sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/nurse-profile/$nurseId"
          params={{ nurseId: nurse.id }}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to Nurse Profile
        </Link>
        <header className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Personalised care
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Request care with confidence
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Tell us a little about your needs and {nurse.name} will have the right context to
            respond to your request.
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
                So the nurse can contact you about your request.
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
                placeholder="e.g. Amaka Okafor"
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
              Care location
              <input
                name="location"
                type="text"
                autoComplete="address-level2"
                placeholder="City or region where care is needed"
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
              <ClipboardList className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">Care preferences</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Help us understand the support you are looking for.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 pt-6 md:grid-cols-2">
            <label className="text-sm font-semibold text-ink">
              Type of care needed
              <select
                name="careType"
                value={form.careType}
                onChange={handleChange}
                required
                aria-invalid={Boolean(errors.careType)}
                aria-describedby={errors.careType ? "careType-error" : undefined}
                className={inputClassName(Boolean(errors.careType))}
              >
                <option value="">Select a care service</option>
                <option>Home Nursing Care</option>
                <option>Elderly Care</option>
                <option>Post-Surgery Care</option>
                <option>General Caregiving</option>
              </select>
              {errors.careType && (
                <p id="careType-error" className="mt-1.5 text-xs font-medium text-destructive">
                  {errors.careType}
                </p>
              )}
            </label>

            <label className="text-sm font-semibold text-ink">
              Preferred start date
              <input
                name="startDate"
                type="date"
                autoComplete="off"
                value={form.startDate}
                onChange={handleChange}
                required
                aria-invalid={Boolean(errors.startDate)}
                aria-describedby={errors.startDate ? "startDate-error" : undefined}
                className={inputClassName(Boolean(errors.startDate))}
              />
              {errors.startDate && (
                <p id="startDate-error" className="mt-1.5 text-xs font-medium text-destructive">
                  {errors.startDate}
                </p>
              )}
            </label>
          </div>

          <div className="mt-8 flex items-start gap-3 border-b border-line pb-6">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-clay-soft text-accent">
              <CalendarDays className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                Anything else to share?
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Optional details can help the nurse prepare for your needs.
              </p>
            </div>
          </div>

          <label className="block pt-6 text-sm font-semibold text-ink">
            Additional notes <span className="font-normal text-muted-foreground">(optional)</span>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={4}
              placeholder="Share helpful context, preferences, or questions..."
              className="mt-2 w-full resize-y rounded-lg border border-input bg-paper px-4 py-3 text-sm font-normal leading-6 text-ink outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/15"
            />
          </label>

          <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2 text-xs leading-5 text-muted-foreground">
              <ShieldCheck className="size-4 shrink-0 text-success" aria-hidden="true" />
              Your request is shared only to help coordinate your care.
            </p>
            <Button type="submit" size="lg" className="h-12 rounded-lg px-6 shadow-sm">
              Submit Care Request
            </Button>
          </div>

          {submitted && (
            <p
              className="mt-5 rounded-lg border border-success/20 bg-success-soft px-4 py-3 text-sm font-medium text-success"
              role="status"
            >
              Care request submitted successfully.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
