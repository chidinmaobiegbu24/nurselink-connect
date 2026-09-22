import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, MapPin, BriefcaseMedical, Clock, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { getNurses } from "../server/api";

export const Route = createFileRoute("/find-nurse")({
  component: FindNurse,
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

function FindNurse() {
  const [nurses, setNurses] = useState<Nurse[]>([]);
  const [search, setSearch] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNurses = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getNurses();

        setNurses(data);
      } catch (err) {
        console.error("Failed to load nurses:", err);

        setError(
          "Unable to load nurses. Please make sure the backend server is running.",
        );
      } finally {
        setLoading(false);
      }
    };

    loadNurses();
  }, []);

  const filteredNurses = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return nurses.filter((nurse) => {
      const matchesSearch =
        !searchValue ||
        nurse.fullName.toLowerCase().includes(searchValue) ||
        nurse.location.toLowerCase().includes(searchValue) ||
        nurse.professionalRole.toLowerCase().includes(searchValue);

      const matchesService =
        !service || nurse.service === service;

      return matchesSearch && matchesService;
    });
  }, [nurses, search, service]);

  const clearFilters = () => {
    setSearch("");
    setService("");
  };

  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Page Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Find a Nurse
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Find professional nurses and caregivers based on your location
            and care needs.
          </p>
        </div>

        {/* Search and Filter */}
        <section className="mb-8 rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
          <div className="grid gap-4 md:grid-cols-[1fr_280px_auto]">

            {/* Search Input */}
            <div>
              <label
                htmlFor="nurse-search"
                className="mb-2 block text-sm font-medium"
              >
                Search by name, location or role
              </label>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                <input
                  id="nurse-search"
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="e.g. Port Harcourt or Registered Nurse"
                  className="w-full rounded-lg border bg-background py-3 pl-10 pr-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* Service Filter */}
            <div>
              <label
                htmlFor="service-filter"
                className="mb-2 block text-sm font-medium"
              >
                Service
              </label>

              <select
                id="service-filter"
                value={service}
                onChange={(event) => setService(event.target.value)}
                className="w-full rounded-lg border bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                <option value="">All Services</option>
                <option value="Home Nursing Care">
                  Home Nursing Care
                </option>
                <option value="Elderly Care">
                  Elderly Care
                </option>
                <option value="Post-Surgery Care">
                  Post-Surgery Care
                </option>
                <option value="General Caregiving">
                  General Caregiving
                </option>
              </select>
            </div>

            {/* Clear Button */}
            <div className="flex items-end">
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition hover:bg-muted md:w-auto"
              >
                <X className="h-4 w-4" />
                Clear
              </button>
            </div>

          </div>
        </section>

        {/* Number of Nurses */}
        {!loading && !error && (
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {filteredNurses.length}{" "}
              {filteredNurses.length === 1 ? "nurse" : "nurses"} found
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="rounded-2xl border bg-white p-10 text-center shadow-sm">
            <p className="text-muted-foreground">
              Loading nurses...
            </p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
            <p className="font-medium text-red-700">
              {error}
            </p>
          </div>
        )}

        {/* Nurse Cards */}
        {!loading && !error && filteredNurses.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {filteredNurses.map((nurse) => (
              <article
                key={nurse._id}
                className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >

                {/* Nurse Name and Availability */}
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold">
                      {nurse.fullName}
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {nurse.professionalRole}
                    </p>
                  </div>

                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                      nurse.availability === "Available"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {nurse.availability}
                  </span>
                </div>

                {/* Nurse Information */}
                <div className="space-y-3 text-sm">

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                    <div>
                      <p className="font-medium">
                        Location
                      </p>

                      <p className="text-muted-foreground">
                        {nurse.location}
                      </p>
                    </div>
                  </div>

                  {/* Service */}
                  <div className="flex items-start gap-3">
                    <BriefcaseMedical className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                    <div>
                      <p className="font-medium">
                        Service
                      </p>

                      <p className="text-muted-foreground">
                        {nurse.service}
                      </p>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                    <div>
                      <p className="font-medium">
                        Experience
                      </p>

                      <p className="text-muted-foreground">
                        {nurse.yearsOfExperience} years
                      </p>
                    </div>
                  </div>

                </div>

                {/* View Profile Button */}
                <div className="mt-6">
                  <Link
                    to="/nurse-profile/$nurseId"
                    params={{ nurseId: nurse._id }}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    View Profile
                  </Link>
                </div>

              </article>
            ))}

          </div>
        )}

        {/* No Nurses Found */}
        {!loading && !error && filteredNurses.length === 0 && (
          <div className="rounded-2xl border bg-white p-10 text-center shadow-sm">

            <Search className="mx-auto mb-4 h-10 w-10 text-muted-foreground" />

            <h2 className="text-xl font-semibold">
              No nurses found
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Try changing your search or service filter.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Clear Filters
            </button>

          </div>
        )}

      </div>
    </main>
  );
}