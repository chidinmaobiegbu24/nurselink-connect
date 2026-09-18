import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  BadgeCheck,
  BriefcaseMedical,
  Clock3,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/nurse-profile/$nurseId")({
  head: () => ({
    meta: [
      { title: "Nurse Profile | Nurses Connect" },
      {
        name: "description",
        content:
          "Review a qualified Nurses Connect professional's experience, specialization, availability, and care services.",
      },
    ],
  }),
  component: NurseProfile,
});

type Nurse = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  professionalRole: string;
  service: string;
  yearsOfExperience: number;
  availability: "Available" | "Currently Unavailable";
};

function NurseProfile() {
  const { nurseId } = Route.useParams();

  const [nurse, setNurse] = useState<Nurse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNurse = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("http://localhost:5000/api/nurses");

        if (!response.ok) {
          throw new Error("Failed to fetch nurses");
        }

        const nurses: Nurse[] = await response.json();

        const foundNurse = nurses.find(
          (profile) => profile._id === nurseId,
        );

        if (!foundNurse) {
          setError("Nurse profile not found.");
          setNurse(null);
          return;
        }

        setNurse(foundNurse);
      } catch (err) {
        console.error("Failed to load nurse profile:", err);

        setError(
          "Unable to load this nurse profile. Please make sure the backend server is running.",
        );
      } finally {
        setLoading(false);
      }
    };

    loadNurse();
  }, [nurseId]);

  if (loading) {
    return (
      <main className="min-h-screen bg-paper px-4 py-10 text-ink sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-muted-foreground">
            Loading nurse profile...
          </p>
        </div>
      </main>
    );
  }

  if (!nurse) {
    return (
      <main className="min-h-screen bg-paper px-4 py-10 text-ink sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Profile unavailable
          </p>

          <h1 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Nurse profile not found
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            {error ||
              "This profile may have been removed or the link may be out of date."}
          </p>

          <Button asChild className="mt-8 h-11 rounded-lg">
            <Link to="/find-nurse">
              <ArrowLeft aria-hidden="true" />
              Back to Find a Nurse
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  const initials = nurse.fullName
    .split(" ")
    .map((namePart) => namePart[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="min-h-screen bg-paper px-4 py-8 text-ink sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/find-nurse"
          className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-3.5 py-2 text-sm font-semibold text-muted-foreground shadow-sm transition-colors hover:border-primary/25 hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to Find a Nurse
        </Link>

        <article className="mt-6 overflow-hidden rounded-2xl border border-line bg-surface shadow-xl shadow-primary/5">
          <div className="bg-hero px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
              <div className="grid size-28 shrink-0 place-items-center rounded-2xl bg-secondary ring-4 ring-surface sm:size-36 lg:size-40">
                <span className="font-display text-4xl font-semibold text-primary">
                  {initials}
                </span>
              </div>

              <div className="min-w-0">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-success-soft px-3 py-1.5 text-xs font-semibold text-success">
                  <BadgeCheck className="size-3.5" aria-hidden="true" />
                  Trusted nurse profile
                </div>

                <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
                  {nurse.fullName}
                </h1>

                <p className="mt-3 text-base font-medium text-primary sm:text-lg">
                  {nurse.professionalRole}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12 lg:p-12">
            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-line bg-paper p-5 transition-shadow hover:shadow-sm">
                  <MapPin className="size-5 text-primary" aria-hidden="true" />

                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-ink">
                    {nurse.location}
                  </p>
                </div>

                <div className="rounded-xl border border-line bg-paper p-5 transition-shadow hover:shadow-sm">
                  <BriefcaseMedical
                    className="size-5 text-primary"
                    aria-hidden="true"
                  />

                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Service or specialization
                  </p>

                  <p className="mt-1 text-sm font-medium leading-6 text-ink">
                    {nurse.service}
                  </p>
                </div>

                <div className="rounded-xl border border-line bg-paper p-5 transition-shadow hover:shadow-sm">
                  <Clock3
                    className="size-5 text-primary"
                    aria-hidden="true"
                  />

                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Experience
                  </p>

                  <p className="mt-1 text-sm font-medium text-ink">
                    {nurse.yearsOfExperience} years
                  </p>
                </div>

                <div
                  className={`rounded-xl p-5 transition-shadow hover:shadow-sm ${
                    nurse.availability === "Available"
                      ? "border border-success/20 bg-success-soft"
                      : "border border-line bg-paper"
                  }`}
                >
                  <ShieldCheck
                    className={`size-5 ${
                      nurse.availability === "Available"
                        ? "text-success"
                        : "text-muted-foreground"
                    }`}
                    aria-hidden="true"
                  />

                  <p
                    className={`mt-3 text-xs font-semibold uppercase tracking-[0.12em] ${
                      nurse.availability === "Available"
                        ? "text-success/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    Availability
                  </p>

                  <p
                    className={`mt-1 text-sm font-medium ${
                      nurse.availability === "Available"
                        ? "text-success"
                        : "text-ink"
                    }`}
                  >
                    {nurse.availability}
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-line pt-8">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Professional profile
                </p>

                <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
                  About This Nurse
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  {nurse.fullName} is a{" "}
                  {nurse.professionalRole.toLowerCase()} offering{" "}
                  {nurse.service.toLowerCase()} services in{" "}
                  {nurse.location}.
                </p>
              </div>
            </div>

            <aside className="h-fit rounded-xl border border-primary/15 bg-secondary/45 p-5 shadow-sm sm:p-6 lg:sticky lg:top-24">
              <ShieldCheck
                className="size-6 text-success"
                aria-hidden="true"
              />

              <h2 className="mt-4 font-display text-xl font-semibold text-ink">
                Ready to connect?
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Share what you need and send a care request directly to{" "}
                {nurse.fullName}.
              </p>

              <Button
                asChild
                size="lg"
                className="mt-6 h-11 w-full rounded-lg"
              >
                <Link
                  to="/request-care/$nurseId"
                  params={{ nurseId: nurse._id }}
                >
                  Request Care
                </Link>
              </Button>
            </aside>
          </div>
        </article>
      </div>
    </main>
  );
}