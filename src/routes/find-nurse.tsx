import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  BadgeCheck,
  BriefcaseMedical,
  LoaderCircle,
  MapPin,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { getNurses } from "@/lib/mock-data";

export const Route = createFileRoute("/find-nurse")({
  head: () => ({
    meta: [
      { title: "Find a Nurse | Nurses Connect" },
      {
        name: "description",
        content:
          "Search qualified Nurses Connect professionals by name, location, role, or home-care specialization.",
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <FindNurse />;
}
export default function FindNurse() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [allNurses, setAllNurses] = useState(getNurses);
  const [filteredNurses, setFilteredNurses] = useState(getNurses);
  const [isSearching, setIsSearching] = useState(false);
  const searchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const loadedNurses = getNurses();
    setAllNurses(loadedNurses);
    setFilteredNurses(loadedNurses);

    return () => {
      if (searchTimerRef.current) clearTimeout(searchTimerRef.current);
    };
  }, []);

  const services = Array.from(new Set(allNurses.map((nurse) => nurse.service))).sort();

  const handleSearch = () => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    setIsSearching(true);
    if (searchTimerRef.current) clearTimeout(searchTimerRef.current);

    searchTimerRef.current = setTimeout(() => {
      setFilteredNurses(
        allNurses.filter(
          (nurse) =>
            (!normalizedSearchTerm ||
              [nurse.name, nurse.location, nurse.role].some((value) =>
                value.toLowerCase().includes(normalizedSearchTerm),
              )) &&
            (!selectedService || nurse.service === selectedService),
        ),
      );
      setIsSearching(false);
    }, 300);
  };

  const handleClearSearch = () => {
    if (searchTimerRef.current) clearTimeout(searchTimerRef.current);
    setSearchTerm("");
    setSelectedService("");
    setFilteredNurses(allNurses);
    setIsSearching(false);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-paper px-4 py-10 text-ink sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to Home
        </Link>
        <header className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Trusted professionals
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Find the right nurse for your care needs
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Browse qualified professionals by location and specialty, then view their profile to
            find a confident match for you or your loved one.
          </p>
        </header>

        <section
          className="mt-10 rounded-2xl border border-line bg-surface p-5 shadow-sm sm:mt-12 sm:p-7"
          aria-labelledby="search-heading"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 id="search-heading" className="font-display text-2xl font-semibold text-ink">
                Search available nurses
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Refine your search to find care in the right place.
              </p>
            </div>
            <span className="hidden items-center gap-2 text-xs font-medium text-success sm:flex">
              <ShieldCheck className="size-4" aria-hidden="true" />
              Profiles you can trust
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto_auto] lg:items-end">
            <label className="text-sm font-medium text-ink">
              Search nurses
              <span className="relative mt-2 block">
                <MapPin
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  placeholder="Search by name, location, or role"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-11 w-full rounded-lg border border-input bg-paper pl-10 pr-4 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </span>
            </label>

            <label className="text-sm font-medium text-ink">
              Service or specialization
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="mt-2 h-11 w-full rounded-lg border border-input bg-paper px-4 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
              >
                <option value="">All services</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>

            <Button
              type="button"
              onClick={handleSearch}
              disabled={isSearching}
              className="h-11 rounded-lg px-6"
            >
              {isSearching ? (
                <LoaderCircle className="animate-spin" aria-hidden="true" />
              ) : (
                <Search aria-hidden="true" />
              )}
              Search nurses
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleClearSearch}
              disabled={isSearching || (!searchTerm && !selectedService)}
              className="h-11 rounded-lg border-primary/25 px-5 text-primary shadow-none hover:bg-secondary hover:text-primary"
            >
              <X aria-hidden="true" />
              Clear Search
            </Button>
          </div>
        </section>

        <div className="mt-12 flex flex-col gap-2 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Your options
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink">Available Nurses</h2>
          </div>
          <p className="text-sm text-muted-foreground" aria-live="polite">
            {filteredNurses.length} {filteredNurses.length === 1 ? "nurse" : "nurses"} found
          </p>
        </div>

        <div
          className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
          aria-busy={isSearching}
        >
          {isSearching ? (
            <div className="col-span-full grid gap-5 md:grid-cols-2 xl:grid-cols-3" aria-live="polite">
              <span className="sr-only">Searching nurse profiles...</span>
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="h-64 animate-pulse rounded-2xl border border-line bg-surface p-6 shadow-sm"
                >
                  <div className="h-6 w-2/3 rounded bg-secondary" />
                  <div className="mt-3 h-4 w-1/2 rounded bg-secondary" />
                  <div className="mt-8 h-px w-full bg-line" />
                  <div className="mt-5 h-4 w-4/5 rounded bg-secondary" />
                  <div className="mt-3 h-4 w-3/5 rounded bg-secondary" />
                  <div className="mt-8 h-10 w-full rounded-lg bg-secondary" />
                </div>
              ))}
            </div>
          ) : filteredNurses.length > 0 ? (
            filteredNurses.map((nurse) => (
              <article
                key={nurse.id}
                className="group flex min-w-0 flex-col rounded-2xl border border-line bg-surface p-5 shadow-sm transition duration-300 motion-safe:hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl font-semibold leading-tight text-ink">
                      {nurse.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-primary">{nurse.role}</p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <BadgeCheck className="size-5" aria-hidden="true" />
                  </span>
                </div>

                <div className="mt-6 flex flex-col gap-3 border-y border-line py-5 text-sm text-muted-foreground">
                  <span className="flex items-start gap-2">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{nurse.location}</span>
                  </span>
                  <span className="flex items-start gap-2">
                    <BriefcaseMedical
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{nurse.service}</span>
                  </span>
                </div>

                <div className="mt-5 flex flex-1 flex-col">
                  {nurse.description && (
                    <p className="text-sm leading-6 text-muted-foreground">{nurse.description}</p>
                  )}
                  <p
                    className={`mt-4 text-xs font-semibold ${
                      nurse.availability === "Available" ? "text-success" : "text-muted-foreground"
                    }`}
                  >
                    {nurse.availability ?? "Availability confirmed on request"}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-6 h-11 w-full rounded-lg border-primary/25 text-primary shadow-none hover:bg-primary hover:text-primary-foreground"
                  >
                    <Link to="/nurse-profile/$nurseId" params={{ nurseId: nurse.id }}>
                      View Profile
                    </Link>
                  </Button>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full rounded-2xl border border-dashed border-line bg-surface px-6 py-12 text-center">
              <Search className="mx-auto size-8 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-display text-2xl font-semibold text-ink">No nurses found</h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                Try a different location or service to broaden your search.
              </p>
              <Button
                type="button"
                variant="outline"
                onClick={handleClearSearch}
                className="mt-6 h-10 rounded-lg border-primary/25 text-primary shadow-none hover:bg-secondary hover:text-primary"
              >
                <X aria-hidden="true" />
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
