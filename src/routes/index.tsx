import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, HeartPulse, Menu, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroNurse from "@/assets/hero-nurse.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nurses Connect | Trusted Home-Care Nurses" },
      {
        name: "description",
        content:
          "Find qualified nurses for reliable and professional home-care services with Nurses Connect.",
      },
      { property: "og:title", content: "Nurses Connect | Trusted Home-Care Nurses" },
      {
        property: "og:description",
        content: "Find qualified nurses for reliable and professional home-care services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const NAV_LINKS = ["Home", "Find a Nurse", "How It Works", "About"];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper font-sans text-ink antialiased">
      <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-md">
        <nav
          className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:flex lg:h-20 lg:justify-between"
          aria-label="Main navigation"
        >
          <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="Nurses Connect home">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <HeartPulse className="size-5" strokeWidth={2.2} aria-hidden="true" />
            </span>
            <span className="truncate font-display text-xl font-semibold text-primary sm:text-2xl">
              Nurses Connect
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((label, index) => (
              <a
                key={label}
                href={index === 0 ? "#home" : `#${label.toLowerCase().replaceAll(" ", "-")}`}
                aria-current={index === 0 ? "page" : undefined}
                className="navlink text-sm font-medium text-muted-foreground transition-colors hover:text-primary aria-[current=page]:text-primary"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <Button variant="ghost" asChild className="text-ink hover:bg-secondary hover:text-primary">
              <a href="#login">Login</a>
            </Button>
            <Button asChild className="h-10 rounded-lg px-5 shadow-none">
              <a href="#register">Register</a>
            </Button>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="size-10 shrink-0 lg:hidden"
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </nav>

        {menuOpen && (
          <div id="mobile-nav" className="border-t border-line bg-paper px-5 py-4 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col">
              {NAV_LINKS.map((label, index) => (
                <a
                  key={label}
                  href={index === 0 ? "#home" : `#${label.toLowerCase().replaceAll(" ", "-")}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-ink transition-colors hover:bg-secondary hover:text-primary"
                >
                  {label}
                </a>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-3 border-t border-line pt-4">
                <Button variant="outline" asChild className="h-11 shadow-none">
                  <a href="#login">Login</a>
                </Button>
                <Button asChild className="h-11 shadow-none">
                  <a href="#register">Register</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="relative isolate min-h-[calc(100svh-4.5rem)] overflow-hidden bg-hero lg:min-h-[calc(100svh-5rem)]">
          <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-12 lg:gap-16 lg:py-14">
            <div className="relative z-10 lg:col-span-6">
              <div className="rise mb-6 inline-flex items-center gap-2 rounded-full border border-success/25 bg-success-soft px-3 py-1.5 text-xs font-semibold text-success">
                <ShieldCheck className="size-4" aria-hidden="true" />
                Qualified care, right at home
              </div>

              <h1 className="rise max-w-[13ch] font-display text-4xl font-semibold leading-[1.08] text-balance text-ink sm:text-5xl lg:text-6xl">
                Find Trusted Nurses for Quality Home Care
              </h1>
              <p className="rise mt-6 max-w-[58ch] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Nurses Connect helps individuals and families find qualified nurses for reliable and
                professional home-care services.
              </p>

              <div className="rise mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 rounded-lg px-6 text-base shadow-lg shadow-primary/15">
                  <a href="#find-a-nurse">
                    Find a Nurse
                    <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-lg border-primary/25 bg-surface px-6 text-base text-primary shadow-none hover:bg-secondary hover:text-primary"
                >
                  <a href="#join-as-a-nurse">Join as a Nurse</a>
                </Button>
              </div>

              <div className="rise mt-8 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:gap-6">
                <span className="flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full bg-success-soft text-success">
                    <Check className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  Verified professionals
                </span>
                <span className="flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full bg-success-soft text-success">
                    <Check className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  Care tailored to your needs
                </span>
              </div>
            </div>

            <div className="relative lg:col-span-6">
              <div className="rise relative mx-auto max-w-xl overflow-hidden rounded-2xl bg-surface p-2 shadow-2xl shadow-primary/10 ring-1 ring-primary/10">
                <div className="aspect-[5/4] overflow-hidden rounded-xl sm:aspect-[4/3] lg:aspect-[5/6] xl:aspect-[4/3]">
                  <img
                    src={heroNurse}
                    alt="A nurse helping an older woman with home care at her kitchen table"
                    width={1024}
                    height={1280}
                    fetchPriority="high"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="absolute bottom-5 left-5 right-5 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-xl bg-surface/95 p-4 shadow-lg backdrop-blur sm:right-auto sm:max-w-xs">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-success-soft text-success">
                    <ShieldCheck className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-ink">Professional home care</span>
                    <span className="block text-xs text-muted-foreground">Support you can feel confident in</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}