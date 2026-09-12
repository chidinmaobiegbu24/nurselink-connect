import { useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import heroNurse from "@/assets/hero-nurse.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nurses Connect — Verified Nurses for Home Care" },
      {
        name: "description",
        content:
          "Nurses Connect pairs your household with a verified, background-checked nurse for in-home visits — wound care, post-op recovery, or daily support.",
      },
      { property: "og:title", content: "Nurses Connect — Verified Nurses for Home Care" },
      {
        property: "og:description",
        content:
          "Match with a licensed home-care nurse near you. Verified credentials, fast response, care delivered at your kitchen table.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const NAV_LINKS = [
  { label: "Home", href: "#", current: true },
  { label: "Find a Nurse", href: "#", current: false },
  { label: "How It Works", href: "#", current: false },
  { label: "About", href: "#", current: false },
];

const STATS = [
  { value: "4,200+", label: "Verified nurses" },
  { value: "45 min", label: "Avg. response" },
  { value: "12", label: "Regions covered" },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased">
      <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <a href="#" className="flex min-w-0 items-center gap-2.5">
            <span className="grid size-8 shrink-0 place-items-center rounded-[10px] bg-teal font-display text-base font-semibold text-paper">
              N
            </span>
            <span className="truncate font-display text-lg font-semibold tracking-tight">
              Nurses Connect
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={link.current ? "page" : undefined}
                className={`navlink transition-colors hover:text-teal-ink ${
                  link.current ? "text-teal-ink" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#"
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink/70 transition-colors hover:text-teal-ink"
            >
              Login
            </a>
            <a
              href="#"
              className="rounded-lg bg-teal px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-teal-ink"
            >
              Register
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid size-10 shrink-0 place-items-center rounded-lg text-ink/70 transition-colors hover:bg-teal-soft hover:text-teal-ink md:hidden"
          >
            <svg
              className="size-5"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M5 5l10 10M15 5 5 15" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" />
              )}
            </svg>
          </button>
        </nav>

        <div
          id="mobile-nav"
          className={`border-line bg-paper px-5 md:hidden ${
            menuOpen ? "block border-t" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-1 py-3 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`rounded-lg px-3 py-2.5 ${
                  link.current ? "bg-teal-soft text-teal-ink" : "text-ink/70"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-2 pb-4">
            <a
              href="#"
              className="flex-1 rounded-lg border border-line py-2.5 text-center text-sm font-medium"
            >
              Login
            </a>
            <a
              href="#"
              className="flex-1 rounded-lg bg-teal py-2.5 text-center text-sm font-semibold text-paper"
            >
              Register
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5">
        <section className="grid items-center gap-12 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-6">
            <p
              className="rise mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-teal"
              style={{ animationDelay: "40ms" }}
            >
              Home nursing, matched to you
            </p>
            <h1
              className="rise max-w-[16ch] font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "110ms" }}
            >
              Care that shows up at your door, on time, every time.
            </h1>
            <p
              className="rise mt-6 max-w-[46ch] text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
              style={{ animationDelay: "190ms" }}
            >
              Nurses Connect pairs your household with a verified, background-checked nurse for
              in-home visits — wound care, post-op recovery, or daily support. You choose the care;
              we handle the rest.
            </p>

            <form
              className="rise mt-8 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
              style={{ animationDelay: "270ms" }}
            >
              <label htmlFor="care-location" className="sr-only">
                Where do you need care?
              </label>
              <div className="flex flex-1 items-center gap-2 rounded-xl border border-line bg-surface px-4 py-3 focus-within:border-teal focus-within:ring-2 focus-within:ring-teal/20">
                <svg
                  className="size-4 shrink-0 text-clay"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M10 2.6 17.4 10 10 17.4 2.6 10z" />
                </svg>
                <input
                  id="care-location"
                  type="text"
                  placeholder="Where do you need care? e.g. Kings Park"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-ink/40"
                />
              </div>
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-teal px-6 py-3 text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-ink"
              >
                Find a Nurse
              </button>
            </form>

            <div className="rise mt-4" style={{ animationDelay: "330ms" }}>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-teal-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/40"
              >
                Join as a Nurse
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <dl
              className="rise mt-10 flex flex-wrap gap-x-8 gap-y-3"
              style={{ animationDelay: "390ms" }}
            >
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-2xl font-semibold text-teal-ink">
                    {stat.value}
                  </dt>
                  <dd className="text-xs text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-6">
            <div
              className="rise relative overflow-hidden rounded-[28px] ring-1 ring-black/5"
              style={{ animationDelay: "200ms" }}
            >
              <div className="aspect-4/5 w-full overflow-hidden">
                <div className="drift h-full w-full">
                  <img
                    src={heroNurse}
                    alt="A nurse in a teal apron placing a care bag on a kitchen table beside a smiling older woman"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-surface/95 px-3 py-1.5 text-xs font-medium text-ink ring-1 ring-black/5">
                <span className="size-1.5 rounded-full bg-clay" />
                On-site in 12 regions
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <TrustPoint label="Background-checked, licensed nurses">
              <path d="M10 2.6 4 5.2v4.2c0 3.5 2.4 6 6 8.2 3.6-2.2 6-4.7 6-8.2V5.2z" />
              <path d="m7.4 10 1.9 1.9 3.3-3.7" />
            </TrustPoint>
            <TrustPoint label="Care plans within 24 hours">
              <circle cx="10" cy="10" r="7.2" />
              <path d="M10 5.8v4.4l2.6 1.8" />
            </TrustPoint>
            <TrustPoint label="Support in 12 regions">
              <circle cx="10" cy="10" r="7.2" />
              <circle cx="10" cy="10" r="2.6" />
            </TrustPoint>
          </div>
        </section>
      </main>

      <footer className="mt-8 border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Nurses Connect</span>
          <span>Clinical care, delivered with a human hand.</span>
        </div>
      </footer>
    </div>
  );
}

function TrustPoint({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 px-1 py-6 sm:justify-center">
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-teal-soft text-teal-ink">
        <svg
          className="size-4"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {children}
        </svg>
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}
