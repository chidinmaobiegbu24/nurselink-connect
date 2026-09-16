import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowLeft,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  Clock3,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  DATA_UPDATED_EVENT,
  getCareRequests,
  getNurses,
  getSavedNurses,
} from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard | Nurses Connect" },
      {
        name: "description",
        content:
          "Review Nurses Connect nurse availability, recent registrations, and care request activity.",
      },
    ],
  }),
  component: Dashboard,
});

const SUMMARY_CARD_DETAILS = [
  {
    label: "Total Nurses",
    detail: "Registered nurses",
    icon: Users,
    iconClassName: "bg-secondary text-primary",
  },
  {
    label: "Available Nurses",
    detail: "Marked available",
    icon: Activity,
    iconClassName: "bg-success-soft text-success",
  },
  {
    label: "Care Requests",
    detail: "Submitted requests",
    icon: ClipboardList,
    iconClassName: "bg-clay-soft text-accent",
  },
  {
    label: "Completed Requests",
    detail: "Marked completed",
    icon: CheckCircle2,
    iconClassName: "bg-secondary text-primary",
  },
] as const;

function statusClassName(status: string) {
  if (status === "Completed") return "bg-success-soft text-success";
  if (status === "In progress") return "bg-secondary text-primary";
  return "bg-clay-soft text-accent";
}

function Dashboard() {
  const [nurses, setNurses] = useState(getNurses);
  const [recentNurses, setRecentNurses] = useState(getSavedNurses);
  const [careRequests, setCareRequests] = useState(getCareRequests);

  useEffect(() => {
    const refreshDashboard = () => {
      setNurses(getNurses());
      setRecentNurses(getSavedNurses());
      setCareRequests(getCareRequests());
    };

    refreshDashboard();
    window.addEventListener(DATA_UPDATED_EVENT, refreshDashboard);
    window.addEventListener("storage", refreshDashboard);
    window.addEventListener("focus", refreshDashboard);

    return () => {
      window.removeEventListener(DATA_UPDATED_EVENT, refreshDashboard);
      window.removeEventListener("storage", refreshDashboard);
      window.removeEventListener("focus", refreshDashboard);
    };
  }, []);

  const availableNurses = nurses.filter((nurse) => nurse.availability === "Available");
  const completedRequests = careRequests.filter(
    (request) => request.status.toLowerCase() === "completed",
  );
  const recentRegisteredNurses = [...recentNurses].reverse().slice(0, 5);
  const recentCareRequests = [...careRequests].reverse().slice(0, 5);

  const summaryValues = [
    nurses.length,
    availableNurses.length,
    careRequests.length,
    completedRequests.length,
  ];

  return (
    <main className="min-h-screen bg-paper px-4 py-8 text-ink sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to Home
        </Link>
        <header className="mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Overview
            </p>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Dashboard
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Keep an eye on your nurse network and the latest care requests.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock3 className="size-4 text-primary" aria-hidden="true" />
            Updated today
          </div>
        </header>

        <section aria-label="Summary" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {SUMMARY_CARD_DETAILS.map(({ label, detail, icon: Icon, iconClassName }, index) => (
            <Card
              key={label}
              className="border-line bg-surface shadow-sm transition-shadow hover:shadow-md"
            >
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{label}</p>
                    <p className="mt-3 font-display text-4xl font-semibold text-ink">
                      {summaryValues[index]}
                    </p>
                  </div>
                  <span
                    className={`grid size-11 shrink-0 place-items-center rounded-lg ${iconClassName}`}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">{detail}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section
          className="mt-8 rounded-2xl border border-line bg-surface p-5 shadow-sm sm:mt-10 sm:p-6 lg:p-7"
          aria-labelledby="recent-nurses-heading"
        >
          <div className="flex flex-col gap-2 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Nurse network
              </p>
              <h2 id="recent-nurses-heading" className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
                Recent Nurses
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Newly registered professionals ready to be discovered.
              </p>
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {recentNurses.length} registered
            </span>
          </div>

          {recentRegisteredNurses.length > 0 ? (
            <ul className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {recentRegisteredNurses.map((nurse) => (
                <li key={nurse.id}>
                  <Link
                    to="/nurse-profile/$nurseId"
                    params={{ nurseId: nurse.id }}
                    className="group block rounded-xl border border-line bg-paper p-5 transition duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                        <BadgeCheck className="size-5" aria-hidden="true" />
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                          nurse.availability === "Available"
                            ? "bg-success-soft text-success"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        <ShieldCheck className="size-3.5" aria-hidden="true" />
                        {nurse.availability ?? "Availability pending"}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-ink group-hover:text-primary">
                      {nurse.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">{nurse.role}</p>
                    <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
                        {nurse.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <ClipboardList className="size-4 shrink-0 text-primary" aria-hidden="true" />
                        {nurse.service}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-5 rounded-xl border border-dashed border-line bg-paper px-6 py-10 text-center">
              <Users className="mx-auto size-8 text-primary" aria-hidden="true" />
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                No nurses registered yet
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                New nurse registrations will appear here once they join Nurses Connect.
              </p>
            </div>
          )}
        </section>

        <section
          className="mt-8 overflow-hidden rounded-2xl border border-line bg-surface shadow-sm sm:mt-10"
          aria-labelledby="recent-requests-heading"
        >
          <div className="flex flex-col gap-2 border-b border-line px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h2
                id="recent-requests-heading"
                className="font-display text-2xl font-semibold text-ink"
              >
                Recent Care Requests
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                A quick view of the latest activity.
              </p>
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {careRequests.length} latest
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead className="bg-hero text-xs uppercase tracking-[0.12em] text-muted-foreground">
                <tr>
                  <th className="px-5 py-4 font-medium sm:px-6">Request</th>
                  <th className="px-5 py-4 font-medium">Service</th>
                  <th className="px-5 py-4 font-medium">Nurse</th>
                  <th className="px-5 py-4 font-medium">Status</th>
                  <th className="px-5 py-4 font-medium sm:px-6">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {recentCareRequests.length > 0 ? (
                  recentCareRequests.map((request) => (
                    <tr key={request.id} className="transition-colors hover:bg-secondary/40">
                      <td className="px-5 py-4 sm:px-6">
                        <p className="font-medium text-ink">{request.patient}</p>
                        <p className="mt-1 font-mono text-xs text-muted-foreground">{request.id}</p>
                      </td>
                      <td className="px-5 py-4 text-muted-foreground">{request.service}</td>
                      <td className="px-5 py-4 text-muted-foreground">{request.nurse}</td>
                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusClassName(request.status)}`}
                        >
                          {request.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-muted-foreground sm:px-6">{request.date}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-5 py-12 text-center text-sm text-muted-foreground sm:px-6"
                    >
                      No care requests yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
