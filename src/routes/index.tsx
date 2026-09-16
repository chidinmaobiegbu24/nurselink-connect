import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Check,
  Clock3,
  Facebook,
  HandHelping,
  HeartHandshake,
  HeartPulse,
  HousePlus,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Pill,
  Phone,
  Quote,
  Search,
  Send,
  ShieldCheck,
  Stethoscope,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroNurse from "@/assets/hero-nurse.jpg";
import nurseGrace from "@/assets/nurse-grace.jpg";
import nurseDaniel from "@/assets/nurse-daniel.jpg";
import nursePriya from "@/assets/nurse-priya.jpg";

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

const NAV_LINKS = ["Home", "Find a Nurse", "Dashboard", "How It Works", "About"];

const STEPS = [
  {
    id: "find",
    label: "Step 1",
    title: "Find a Nurse",
    description: "Users can search and browse qualified nurses based on their caregiving needs.",
    icon: Search,
  },
  {
    id: "profiles",
    label: "Step 2",
    title: "View Nurse Profiles",
    description:
      "Users can view nurse qualifications, experience, services, and other important information.",
    icon: BadgeCheck,
  },
  {
    id: "request",
    label: "Step 3",
    title: "Request Care",
    description: "Users can send a care request and connect with a qualified nurse.",
    icon: Send,
  },
];

const NURSES = [
  {
    id: "grace-adeyemi",
    name: "Grace Adeyemi",
    image: nurseGrace,
    title: "RN, BSc (Hons) Adult Nursing",
    experience: "9 years experience",
    location: "Didsbury, Manchester",
    availability: "Available this week",
    services:
      "Specialises in post-operative recovery, wound care and medication management for adults healing at home.",
  },
  {
    id: "daniel-osei",
    name: "Daniel Osei",
    image: nurseDaniel,
    title: "RN, MSc Critical Care",
    experience: "12 years experience",
    location: "Edgbaston, Birmingham",
    availability: "Available in 3 days",
    services:
      "Supports clients living with chronic conditions, complex mobility needs and respiratory care at home.",
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    image: nursePriya,
    title: "RGN, RM — Registered Midwife",
    experience: "7 years experience",
    location: "Kensington, London",
    availability: "Available this week",
    services:
      "Focused on maternal and newborn support, postnatal recovery and feeding guidance for new families.",
  },
];

const SERVICES = [
  {
    id: "home-nursing-care",
    title: "Home Nursing Care",
    description: "Professional nursing care provided in the comfort of your home.",
    icon: HousePlus,
  },
  {
    id: "elderly-care",
    title: "Elderly Care",
    description: "Compassionate support and care for elderly people.",
    icon: HeartHandshake,
  },
  {
    id: "post-surgery-care",
    title: "Post-Surgery Care",
    description: "Professional support for patients recovering after surgery.",
    icon: Stethoscope,
  },
  {
    id: "medication-assistance",
    title: "Medication Assistance",
    description: "Help with medication reminders and basic medication support.",
    icon: Pill,
  },
  {
    id: "chronic-care-support",
    title: "Chronic Care Support",
    description: "Support for people living with long-term health conditions.",
    icon: Activity,
  },
  {
    id: "general-caregiving",
    title: "General Caregiving",
    description: "Daily caregiving and personal support based on individual needs.",
    icon: HandHelping,
  },
];

const BENEFITS = [
  {
    id: "qualified-nurses",
    title: "Trusted Nurses",
    description: "Connect with qualified professionals who are ready to support your care needs.",
    icon: BadgeCheck,
  },
  {
    id: "easy-to-use",
    title: "Easy Care Requests",
    description:
      "Find the right nurse and send a care request through a clear, straightforward process.",
    icon: Send,
  },
  {
    id: "reliable-home-care",
    title: "Convenient Home Care",
    description: "Explore dependable nursing support designed to fit naturally into life at home.",
    icon: HousePlus,
  },
  {
    id: "convenient-connection",
    title: "Simple and Secure",
    description:
      "Browse care options and connect with confidence through a simple, reassuring experience.",
    icon: ShieldCheck,
  },
];

const ABOUT_HIGHLIGHTS = [
  { title: "Qualified Nurses", icon: BadgeCheck },
  { title: "Personalized Care", icon: HeartHandshake },
  { title: "Convenient Home Care", icon: HousePlus },
];

const TESTIMONIALS = [
  {
    quote:
      "Finding the right nurse felt simple and reassuring. We were able to request the support my mother needed at home.",
    name: "Amaka Okafor",
    role: "Family Member",
  },
  {
    quote:
      "The clear profiles helped me understand my options and connect with a professional I could trust.",
    name: "Samuel Williams",
    role: "Patient",
  },
  {
    quote:
      "Nurses Connect made it easy to share my experience and offer dependable care to families nearby.",
    name: "Grace Johnson",
    role: "Registered Nurse",
  },
];

function resolveAssetPath(assetPath: string) {
  return assetPath.replace(/^\/nurselink-connect(?=\/)/, "");
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper font-sans text-ink antialiased">
      <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-md">
        <nav
          className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:flex lg:h-20 lg:justify-between"
          aria-label="Main navigation"
        >
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Nurses Connect home">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <HeartPulse className="size-5" strokeWidth={2.2} aria-hidden="true" />
            </span>
            <span className="truncate font-display text-xl font-semibold text-primary sm:text-2xl">
              Nurses Connect
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((label, index) =>
              index === 0 ? (
                <Link
                  key={label}
                  to="/"
                  aria-current="page"
                  className="navlink text-sm font-medium text-muted-foreground transition-colors hover:text-primary aria-[current=page]:text-primary"
                >
                  {label}
                </Link>
              ) : index === 1 ? (
                <Link
                  key={label}
                  to="/find-nurse"
                  className="navlink text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              ) : index === 2 ? (
                <Link
                  key={label}
                  to="/dashboard"
                  className="navlink text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              ) : (
                <a
                  key={label}
                  href={index === 3 ? "#how-it-works" : "#about-nurses-connect"}
                  className="navlink text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {label}
                </a>
              ),
            )}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <Button
              variant="ghost"
              asChild
              className="text-ink hover:bg-secondary hover:text-primary"
            >
              <Link to="/">Login</Link>
            </Button>
            <Button asChild className="h-10 rounded-lg px-5 shadow-none">
              <Link to="/join-as-nurse">Register</Link>
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
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-ink transition-colors hover:bg-secondary hover:text-primary"
              >
                Home
              </Link>
              <Link
                to="/find-nurse"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-ink transition-colors hover:bg-secondary hover:text-primary"
              >
                Find a Nurse
              </Link>
              <Link
                to="/join-as-nurse"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-ink transition-colors hover:bg-secondary hover:text-primary"
              >
                Join as a Nurse
              </Link>
              <Link
                to="/find-nurse"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-ink transition-colors hover:bg-secondary hover:text-primary"
              >
                Request Care
              </Link>
              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-ink transition-colors hover:bg-secondary hover:text-primary"
              >
                Dashboard
              </Link>
              <div className="mt-3 grid grid-cols-2 gap-3 border-t border-line pt-4">
                <Button variant="outline" asChild className="h-11 shadow-none">
                  <Link to="/">Login</Link>
                </Button>
                <Button asChild className="h-11 shadow-none">
                  <Link to="/join-as-nurse">Register</Link>
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
                Trusted care, thoughtfully connected
              </div>

              <h1 className="rise max-w-[13ch] font-display text-4xl font-semibold leading-[1.08] text-balance text-ink sm:text-5xl lg:text-6xl">
                Find trusted nursing care for the moments that matter
              </h1>
              <p className="rise mt-6 max-w-[58ch] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Nurses Connect makes it easier for individuals and families to discover qualified
                nurses, understand their experience, and request dependable care at home.
              </p>

              <div className="rise mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-lg px-6 text-base shadow-lg shadow-primary/15"
                >
                  <Link to="/find-nurse">
                    Find a Nurse
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-lg border-primary/25 bg-surface px-6 text-base text-primary shadow-none hover:bg-secondary hover:text-primary"
                >
                  <Link to="/join-as-nurse">Join as a Nurse</Link>
                </Button>
              </div>

              <div className="rise mt-8 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:gap-6">
                <span className="flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full bg-success-soft text-success">
                    <Check className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  Qualified professionals
                </span>
                <span className="flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full bg-success-soft text-success">
                    <Check className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  Clear, reliable connections
                </span>
              </div>
            </div>

            <div className="relative lg:col-span-6">
              <div className="rise relative mx-auto max-w-xl overflow-hidden rounded-2xl bg-surface p-2 shadow-2xl shadow-primary/10 ring-1 ring-primary/10">
                <div className="aspect-[5/4] overflow-hidden rounded-xl sm:aspect-[4/3] lg:aspect-[5/6] xl:aspect-[4/3]">
                  <img
                    src={resolveAssetPath(heroNurse)}
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
                    <span className="block truncate text-sm font-semibold text-ink">
                      Professional home care
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      Support you can feel confident in
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          aria-labelledby="how-it-works-heading"
          className="scroll-mt-20 border-t border-line bg-paper py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                How It Works
              </p>
              <h2
                id="how-it-works-heading"
                className="mt-4 font-display text-3xl font-semibold leading-[1.15] text-balance text-ink sm:text-4xl lg:text-[2.75rem]"
              >
                Three simple steps to reliable home care
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                From first search to confirmed care, Nurses Connect keeps every step clear and
                straightforward.
              </p>
            </div>

            <ol className="mt-14 grid gap-6 sm:grid-cols-2 sm:mt-16 lg:mt-20 lg:grid-cols-3 lg:gap-8">
              {STEPS.map((step, index) => (
                <li key={step.id} className="flex">
                  <article className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-7 shadow-sm transition duration-300 motion-safe:hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5 sm:p-8">
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
                    />
                    <div className="flex items-center justify-between gap-4">
                      <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground sm:size-14">
                        <step.icon
                          className="size-6 sm:size-7"
                          strokeWidth={1.9}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {step.label}
                      </span>
                    </div>

                    <h3 className="mt-7 font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">
                      <span className="sr-only">{`Step ${index + 1}: `}</span>
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                      {step.description}
                    </p>

                    <span
                      aria-hidden="true"
                      className="mt-7 block h-px w-full bg-line transition-colors duration-300 group-hover:bg-primary/20"
                    />
                    <span className="mt-4 font-mono text-xs text-muted-foreground/80">
                      {`0${index + 1} / 0${STEPS.length}`}
                    </span>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="featured-nurses"
          aria-labelledby="featured-nurses-heading"
          className="scroll-mt-20 border-t border-line bg-secondary/45 py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Featured Nurses
              </p>
              <h2
                id="featured-nurses-heading"
                className="mt-4 font-display text-3xl font-semibold leading-[1.15] text-balance text-ink sm:text-4xl lg:text-[2.75rem]"
              >
                Meet Our Featured Nurses
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Browse qualified, background-checked nurses near you and find the right match for
                the care your family needs.
              </p>
            </div>

            <ul className="mt-14 grid gap-6 sm:grid-cols-2 sm:mt-16 lg:grid-cols-3 lg:gap-8">
              {NURSES.map((nurse) => (
                <li key={nurse.id} className="flex">
                  <article className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition duration-300 motion-safe:hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5">
                    <div className="relative overflow-hidden">
                      <div className="aspect-[4/5] w-full overflow-hidden bg-secondary">
                        <img
                          src={resolveAssetPath(nurse.image)}
                          alt={`Portrait of ${nurse.name}, ${nurse.title}`}
                          width={768}
                          height={960}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-surface/95 px-3 py-1.5 text-xs font-semibold text-success shadow-sm ring-1 ring-black/5 backdrop-blur">
                        <BadgeCheck className="size-3.5" strokeWidth={2.2} aria-hidden="true" />
                        Verified nurse
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <h3 className="font-display text-xl font-semibold leading-snug text-ink">
                        {nurse.name}
                      </h3>
                      <p className="mt-1.5 text-sm font-medium text-primary">{nurse.title}</p>

                      <div className="mt-5 flex flex-col gap-2.5 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Clock3
                            className="size-4 shrink-0 text-primary"
                            strokeWidth={1.9}
                            aria-hidden="true"
                          />
                          {nurse.experience}
                        </span>
                        <span className="flex min-w-0 items-center gap-2">
                          <MapPin
                            className="size-4 shrink-0 text-primary"
                            strokeWidth={1.9}
                            aria-hidden="true"
                          />
                          <span className="truncate">{nurse.location}</span>
                        </span>
                      </div>

                      <p className="mt-5 text-sm leading-6 text-muted-foreground">
                        {nurse.services}
                      </p>

                      <span className="mt-6 block h-px w-full bg-line" aria-hidden="true" />

                      <div className="mt-5 flex flex-1 flex-col gap-4">
                        <span className="text-xs font-semibold text-success">
                          {nurse.availability}
                        </span>
                        <Button
                          asChild
                          variant="outline"
                          className="mt-auto h-11 w-full rounded-lg border-primary/25 bg-surface text-sm font-semibold text-primary shadow-none transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                          <Link
                            to="/nurse-profile/$nurseId"
                            params={{ nurseId: nurse.id }}
                            aria-label={`View profile of ${nurse.name}`}
                          >
                            View Profile
                            <ArrowRight className="size-4" aria-hidden="true" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="our-services"
          aria-labelledby="our-services-heading"
          className="scroll-mt-20 border-t border-line bg-paper py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Our Services
              </p>
              <h2
                id="our-services-heading"
                className="mt-4 font-display text-3xl font-semibold leading-[1.15] text-balance text-ink sm:text-4xl lg:text-[2.75rem]"
              >
                Our Services
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Nurses Connect helps you find qualified nurses for a wide range of home-care needs —
                from everyday support to specialist recovery care.
              </p>
            </div>

            <ul className="mt-14 grid gap-6 sm:grid-cols-2 sm:mt-16 lg:grid-cols-3 lg:gap-8">
              {SERVICES.map((service, index) => (
                <li key={service.id} className="flex">
                  <article className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-7 shadow-sm transition duration-300 motion-safe:hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5 sm:p-8">
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
                    />
                    <span
                      className={`grid size-12 shrink-0 place-items-center rounded-xl transition-colors duration-300 sm:size-14 ${
                        index % 2 === 0
                          ? "bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                          : "bg-success-soft text-success group-hover:bg-success group-hover:text-primary-foreground"
                      }`}
                    >
                      <service.icon
                        className="size-6 sm:size-7"
                        strokeWidth={1.9}
                        aria-hidden="true"
                      />
                    </span>

                    <h3 className="mt-6 font-display text-lg font-semibold leading-snug text-ink sm:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                      {service.description}
                    </p>

                    <span
                      aria-hidden="true"
                      className="mt-6 block h-px w-full bg-line transition-colors duration-300 group-hover:bg-primary/20"
                    />
                    <span className="mt-3 font-mono text-xs text-muted-foreground/80">
                      {`0${index + 1} / 0${SERVICES.length}`}
                    </span>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="about-nurses-connect"
          aria-labelledby="about-nurses-connect-heading"
          className="scroll-mt-20 border-t border-line bg-secondary/35 py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                About Nurses Connect
              </p>
              <h2
                id="about-nurses-connect-heading"
                className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-[1.15] text-balance text-ink sm:text-4xl lg:text-[2.75rem]"
              >
                About Nurses Connect
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Nurses Connect helps individuals and families connect with qualified nurses and
                access convenient care services designed around their personal needs, at home or
                wherever support is needed.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
                {ABOUT_HIGHLIGHTS.map((highlight) => (
                  <li
                    key={highlight.title}
                    className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 shadow-sm"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-success-soft text-success">
                      <highlight.icon className="size-4.5" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold leading-tight text-ink">
                      {highlight.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-success-soft text-success">
                  <HeartPulse className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                  One place to find and offer care
                </h3>
              </div>
              <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                Search by location or service, explore nurse profiles, and take the next step with
                confidence.
              </p>
              <Button asChild className="mt-6 h-11 rounded-lg px-5">
                <Link to="/find-nurse">
                  Find a Nurse
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section
          id="why-choose-nurses-connect"
          aria-labelledby="why-choose-nurses-connect-heading"
          className="scroll-mt-20 border-t border-line bg-secondary/35 py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Why Choose Us
              </p>
              <h2
                id="why-choose-nurses-connect-heading"
                className="mt-4 font-display text-3xl font-semibold leading-[1.15] text-balance text-ink sm:text-4xl lg:text-[2.75rem]"
              >
                Why Choose Nurses Connect?
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Find trusted care with a platform designed to make connecting with professional
                nurses simple, reliable, and reassuring.
              </p>
            </div>

            <ul className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {BENEFITS.map((benefit) => (
                <li key={benefit.id} className="flex">
                  <article className="group relative flex h-full w-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm transition duration-300 motion-safe:hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5 sm:p-7">
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 rounded-t-2xl bg-primary transition-transform duration-300 group-hover:scale-x-100"
                    />
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-success-soft text-success transition-colors duration-300 group-hover:bg-success group-hover:text-primary-foreground sm:size-14">
                      <benefit.icon
                        className="size-6 sm:size-7"
                        strokeWidth={1.9}
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="mt-6 font-display text-lg font-semibold leading-snug text-ink sm:text-xl">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                      {benefit.description}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="testimonials-heading"
          className="border-t border-line bg-paper py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Real experiences
              </p>
              <h2
                id="testimonials-heading"
                className="mt-4 font-display text-3xl font-semibold leading-[1.15] text-balance text-ink sm:text-4xl lg:text-[2.75rem]"
              >
                What People Say
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Hear from people who found a clearer path to trusted care through Nurses Connect.
              </p>
            </div>

            <ul className="mt-14 grid gap-5 sm:mt-16 md:grid-cols-3 md:gap-6">
              {TESTIMONIALS.map((testimonial) => (
                <li key={testimonial.name} className="flex">
                  <article className="flex h-full w-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-7">
                    <Quote
                      className="size-8 text-primary/70"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    <blockquote className="mt-5 flex-1 text-sm leading-7 text-muted-foreground sm:text-base">
                      “{testimonial.quote}”
                    </blockquote>
                    <div className="mt-6 border-t border-line pt-5">
                      <p className="font-display text-lg font-semibold text-ink">
                        {testimonial.name}
                      </p>
                      <p className="mt-1 text-sm text-primary">{testimonial.role}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-line bg-primary px-5 py-16 text-primary-foreground sm:px-8 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                Start with confidence
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-[2.75rem]">
                Ready to Find the Right Nurse?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-primary-foreground/75 sm:text-lg sm:leading-8">
                Connect with trusted nursing professionals for dependable support, or share your
                experience with families looking for care.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-lg bg-surface px-6 text-base text-primary shadow-lg hover:bg-secondary hover:text-primary"
              >
                <Link to="/find-nurse">
                  Find a Nurse
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-lg border-primary-foreground/30 px-6 text-base text-primary-foreground shadow-none hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/join-as-nurse">Join as a Nurse</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-ink px-5 py-10 text-paper sm:px-8 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground">
                <HeartPulse className="size-4" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-semibold">Nurses Connect</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-paper/75">
                Connecting individuals and families with qualified nurses for reliable, professional
              home-care support.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <button
                type="button"
                aria-label="Nurses Connect on Facebook"
                className="grid size-9 place-items-center rounded-lg border border-paper/20 text-paper/75 transition-colors hover:border-paper/40 hover:text-paper"
              >
                <Facebook className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Nurses Connect on Instagram"
                className="grid size-9 place-items-center rounded-lg border border-paper/20 text-paper/75 transition-colors hover:border-paper/40 hover:text-paper"
              >
                <Instagram className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Nurses Connect on LinkedIn"
                className="grid size-9 place-items-center rounded-lg border border-paper/20 text-paper/75 transition-colors hover:border-paper/40 hover:text-paper"
              >
                <Linkedin className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-paper">Explore</h2>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-paper/75">
              <Link className="transition-colors hover:text-paper" to="/">
                Home
              </Link>
              <Link className="transition-colors hover:text-paper" to="/find-nurse">
                Find a Nurse
              </Link>
              <Link className="transition-colors hover:text-paper" to="/join-as-nurse">
                Join as a Nurse
              </Link>
              <Link className="transition-colors hover:text-paper" to="/find-nurse">
                Request Care
              </Link>
              <Link className="transition-colors hover:text-paper" to="/dashboard">
                Dashboard
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-paper">Services</h2>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-paper/75">
              <span>Home Nursing Care</span>
              <span>Elderly Care</span>
              <span>Post-Surgery Care</span>
              <span>General Caregiving</span>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-paper">Contact</h2>
            <p className="mt-4 text-sm leading-6 text-paper/75">
              <span className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                info@nursesconnect.com
              </span>
              <span className="mt-3 flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
                +234 800 000 0000
              </span>
              <span className="mt-3 flex items-center gap-2">
                <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
                Lagos, Nigeria
              </span>
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-paper/20 pt-5 text-xs text-paper/65">
            © {currentYear ?? ""} Nurses Connect. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
