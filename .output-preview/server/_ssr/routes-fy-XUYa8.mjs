import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { O as BadgeCheck, S as Clock3, T as Check, _ as HousePlus, a as ShieldCheck, b as HandHelping, c as Quote, d as Menu, f as MapPin, g as Instagram, h as Linkedin, i as Stethoscope, j as Activity, k as ArrowRight, l as Pill, o as Send, p as Mail, s as Search, t as X, u as Phone, v as HeartPulse, x as Facebook, y as HeartHandshake } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-Bdcyobe6.mjs";
import { n as nurse_grace_default, r as nurse_priya_default, t as nurse_daniel_default } from "./nurse-priya-Cu7_ONRQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-fy-XUYa8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_nurse_default = "/assets/hero-nurse-DMZvpZDN.jpg";
var NAV_LINKS = [
	"Home",
	"Find a Nurse",
	"Dashboard",
	"How It Works",
	"About"
];
var STEPS = [
	{
		id: "find",
		label: "Step 1",
		title: "Find a Nurse",
		description: "Users can search and browse qualified nurses based on their caregiving needs.",
		icon: Search
	},
	{
		id: "profiles",
		label: "Step 2",
		title: "View Nurse Profiles",
		description: "Users can view nurse qualifications, experience, services, and other important information.",
		icon: BadgeCheck
	},
	{
		id: "request",
		label: "Step 3",
		title: "Request Care",
		description: "Users can send a care request and connect with a qualified nurse.",
		icon: Send
	}
];
var NURSES = [
	{
		id: "grace-adeyemi",
		name: "Grace Adeyemi",
		image: nurse_grace_default,
		title: "RN, BSc (Hons) Adult Nursing",
		experience: "9 years experience",
		location: "Didsbury, Manchester",
		availability: "Available this week",
		services: "Specialises in post-operative recovery, wound care and medication management for adults healing at home."
	},
	{
		id: "daniel-osei",
		name: "Daniel Osei",
		image: nurse_daniel_default,
		title: "RN, MSc Critical Care",
		experience: "12 years experience",
		location: "Edgbaston, Birmingham",
		availability: "Available in 3 days",
		services: "Supports clients living with chronic conditions, complex mobility needs and respiratory care at home."
	},
	{
		id: "priya-sharma",
		name: "Priya Sharma",
		image: nurse_priya_default,
		title: "RGN, RM — Registered Midwife",
		experience: "7 years experience",
		location: "Kensington, London",
		availability: "Available this week",
		services: "Focused on maternal and newborn support, postnatal recovery and feeding guidance for new families."
	}
];
var SERVICES = [
	{
		id: "home-nursing-care",
		title: "Home Nursing Care",
		description: "Professional nursing care provided in the comfort of your home.",
		icon: HousePlus
	},
	{
		id: "elderly-care",
		title: "Elderly Care",
		description: "Compassionate support and care for elderly people.",
		icon: HeartHandshake
	},
	{
		id: "post-surgery-care",
		title: "Post-Surgery Care",
		description: "Professional support for patients recovering after surgery.",
		icon: Stethoscope
	},
	{
		id: "medication-assistance",
		title: "Medication Assistance",
		description: "Help with medication reminders and basic medication support.",
		icon: Pill
	},
	{
		id: "chronic-care-support",
		title: "Chronic Care Support",
		description: "Support for people living with long-term health conditions.",
		icon: Activity
	},
	{
		id: "general-caregiving",
		title: "General Caregiving",
		description: "Daily caregiving and personal support based on individual needs.",
		icon: HandHelping
	}
];
var BENEFITS = [
	{
		id: "qualified-nurses",
		title: "Trusted Nurses",
		description: "Connect with qualified professionals who are ready to support your care needs.",
		icon: BadgeCheck
	},
	{
		id: "easy-to-use",
		title: "Easy Care Requests",
		description: "Find the right nurse and send a care request through a clear, straightforward process.",
		icon: Send
	},
	{
		id: "reliable-home-care",
		title: "Convenient Home Care",
		description: "Explore dependable nursing support designed to fit naturally into life at home.",
		icon: HousePlus
	},
	{
		id: "convenient-connection",
		title: "Simple and Secure",
		description: "Browse care options and connect with confidence through a simple, reassuring experience.",
		icon: ShieldCheck
	}
];
var ABOUT_HIGHLIGHTS = [
	{
		title: "Qualified Nurses",
		icon: BadgeCheck
	},
	{
		title: "Personalized Care",
		icon: HeartHandshake
	},
	{
		title: "Convenient Home Care",
		icon: HousePlus
	}
];
var TESTIMONIALS = [
	{
		quote: "Finding the right nurse felt simple and reassuring. We were able to request the support my mother needed at home.",
		name: "Amaka Okafor",
		role: "Family Member"
	},
	{
		quote: "The clear profiles helped me understand my options and connect with a professional I could trust.",
		name: "Samuel Williams",
		role: "Patient"
	},
	{
		quote: "Nurses Connect made it easy to share my experience and offer dependable care to families nearby.",
		name: "Grace Johnson",
		role: "Registered Nurse"
	}
];
function resolveAssetPath(assetPath) {
	return assetPath.replace(/^\/nurselink-connect(?=\/)/, "");
}
function Home() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [currentYear, setCurrentYear] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setCurrentYear((/* @__PURE__ */ new Date()).getFullYear());
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-hidden bg-paper font-sans text-ink antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:flex lg:h-20 lg:justify-between",
					"aria-label": "Main navigation",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex min-w-0 items-center gap-3",
							"aria-label": "Nurses Connect home",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, {
									className: "size-5",
									strokeWidth: 2.2,
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate font-display text-xl font-semibold text-primary sm:text-2xl",
								children: "Nurses Connect"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden items-center gap-8 lg:flex",
							children: NAV_LINKS.map((label, index) => index === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								"aria-current": "page",
								className: "navlink text-sm font-medium text-muted-foreground transition-colors hover:text-primary aria-[current=page]:text-primary",
								children: label
							}, label) : index === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/find-nurse",
								className: "navlink text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
								children: label
							}, label) : index === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dashboard",
								className: "navlink text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
								children: label
							}, label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: index === 3 ? "#how-it-works" : "#about-nurses-connect",
								className: "navlink text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
								children: label
							}, label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden items-center gap-2 lg:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								asChild: true,
								className: "text-ink hover:bg-secondary hover:text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									children: "Login"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "h-10 rounded-lg px-5 shadow-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/join-as-nurse",
									children: "Register"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "icon",
							onClick: () => setMenuOpen((open) => !open),
							"aria-expanded": menuOpen,
							"aria-controls": "mobile-nav",
							"aria-label": menuOpen ? "Close menu" : "Open menu",
							className: "size-10 shrink-0 lg:hidden",
							children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { "aria-hidden": "true" })
						})
					]
				}), menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "mobile-nav",
					className: "border-t border-line bg-paper px-5 py-4 lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-7xl flex-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								onClick: () => setMenuOpen(false),
								className: "rounded-lg px-3 py-3 text-sm font-medium text-ink transition-colors hover:bg-secondary hover:text-primary",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/find-nurse",
								onClick: () => setMenuOpen(false),
								className: "rounded-lg px-3 py-3 text-sm font-medium text-ink transition-colors hover:bg-secondary hover:text-primary",
								children: "Find a Nurse"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/join-as-nurse",
								onClick: () => setMenuOpen(false),
								className: "rounded-lg px-3 py-3 text-sm font-medium text-ink transition-colors hover:bg-secondary hover:text-primary",
								children: "Join as a Nurse"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/find-nurse",
								onClick: () => setMenuOpen(false),
								className: "rounded-lg px-3 py-3 text-sm font-medium text-ink transition-colors hover:bg-secondary hover:text-primary",
								children: "Request Care"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dashboard",
								onClick: () => setMenuOpen(false),
								className: "rounded-lg px-3 py-3 text-sm font-medium text-ink transition-colors hover:bg-secondary hover:text-primary",
								children: "Dashboard"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 grid grid-cols-2 gap-3 border-t border-line pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									asChild: true,
									className: "h-11 shadow-none",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										children: "Login"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "h-11 shadow-none",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/join-as-nurse",
										children: "Register"
									})
								})]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "home",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "relative isolate min-h-[calc(100svh-4.5rem)] overflow-hidden bg-hero lg:min-h-[calc(100svh-5rem)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-12 lg:gap-16 lg:py-14",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 lg:col-span-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rise mb-6 inline-flex items-center gap-2 rounded-full border border-success/25 bg-success-soft px-3 py-1.5 text-xs font-semibold text-success",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
											className: "size-4",
											"aria-hidden": "true"
										}), "Trusted care, thoughtfully connected"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "rise max-w-[13ch] font-display text-4xl font-semibold leading-[1.08] text-balance text-ink sm:text-5xl lg:text-6xl",
										children: "Find trusted nursing care for the moments that matter"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "rise mt-6 max-w-[58ch] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8",
										children: "Nurses Connect makes it easier for individuals and families to discover qualified nurses, understand their experience, and request dependable care at home."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rise mt-8 flex flex-col gap-3 sm:flex-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											size: "lg",
											className: "h-12 rounded-lg px-6 text-base shadow-lg shadow-primary/15",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/find-nurse",
												children: ["Find a Nurse", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											variant: "outline",
											size: "lg",
											className: "h-12 rounded-lg border-primary/25 bg-surface px-6 text-base text-primary shadow-none hover:bg-secondary hover:text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/join-as-nurse",
												children: "Join as a Nurse"
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rise mt-8 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:gap-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid size-5 place-items-center rounded-full bg-success-soft text-success",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
													className: "size-3.5",
													strokeWidth: 2.5,
													"aria-hidden": "true"
												})
											}), "Qualified professionals"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid size-5 place-items-center rounded-full bg-success-soft text-success",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
													className: "size-3.5",
													strokeWidth: 2.5,
													"aria-hidden": "true"
												})
											}), "Clear, reliable connections"]
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative lg:col-span-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rise relative mx-auto max-w-xl overflow-hidden rounded-2xl bg-surface p-2 shadow-2xl shadow-primary/10 ring-1 ring-primary/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aspect-[5/4] overflow-hidden rounded-xl sm:aspect-[4/3] lg:aspect-[5/6] xl:aspect-[4/3]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: resolveAssetPath(hero_nurse_default),
											alt: "A nurse helping an older woman with home care at her kitchen table",
											width: 1024,
											height: 1280,
											fetchPriority: "high",
											className: "h-full w-full object-cover object-center"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-5 left-5 right-5 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-xl bg-surface/95 p-4 shadow-lg backdrop-blur sm:right-auto sm:max-w-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-10 shrink-0 place-items-center rounded-lg bg-success-soft text-success",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
												className: "size-5",
												"aria-hidden": "true"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block truncate text-sm font-semibold text-ink",
												children: "Professional home care"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs text-muted-foreground",
												children: "Support you can feel confident in"
											})]
										})]
									})]
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "how-it-works",
						"aria-labelledby": "how-it-works-heading",
						className: "scroll-mt-20 border-t border-line bg-paper py-20 sm:py-24 lg:py-28",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-7xl px-5 sm:px-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto max-w-2xl text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary",
										children: "How It Works"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										id: "how-it-works-heading",
										className: "mt-4 font-display text-3xl font-semibold leading-[1.15] text-balance text-ink sm:text-4xl lg:text-[2.75rem]",
										children: "Three simple steps to reliable home care"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8",
										children: "From first search to confirmed care, Nurses Connect keeps every step clear and straightforward."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-14 grid gap-6 sm:grid-cols-2 sm:mt-16 lg:mt-20 lg:grid-cols-3 lg:gap-8",
								children: STEPS.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "flex",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-7 shadow-sm transition duration-300 motion-safe:hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5 sm:p-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": "true",
												className: "absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "grid size-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground sm:size-14",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, {
														className: "size-6 sm:size-7",
														strokeWidth: 1.9,
														"aria-hidden": "true"
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground",
													children: step.label
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
												className: "mt-7 font-display text-xl font-semibold leading-snug text-ink sm:text-2xl",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "sr-only",
													children: `Step ${index + 1}: `
												}), step.title]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7",
												children: step.description
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": "true",
												className: "mt-7 block h-px w-full bg-line transition-colors duration-300 group-hover:bg-primary/20"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-4 font-mono text-xs text-muted-foreground/80",
												children: `0${index + 1} / 0${STEPS.length}`
											})
										]
									})
								}, step.id))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "featured-nurses",
						"aria-labelledby": "featured-nurses-heading",
						className: "scroll-mt-20 border-t border-line bg-secondary/45 py-20 sm:py-24 lg:py-28",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-7xl px-5 sm:px-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto max-w-2xl text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary",
										children: "Featured Nurses"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										id: "featured-nurses-heading",
										className: "mt-4 font-display text-3xl font-semibold leading-[1.15] text-balance text-ink sm:text-4xl lg:text-[2.75rem]",
										children: "Meet Our Featured Nurses"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8",
										children: "Browse qualified, background-checked nurses near you and find the right match for the care your family needs."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-14 grid gap-6 sm:grid-cols-2 sm:mt-16 lg:grid-cols-3 lg:gap-8",
								children: NURSES.map((nurse) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "flex",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition duration-300 motion-safe:hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative overflow-hidden",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "aspect-[4/5] w-full overflow-hidden bg-secondary",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: resolveAssetPath(nurse.image),
													alt: `Portrait of ${nurse.name}, ${nurse.title}`,
													width: 768,
													height: 960,
													loading: "lazy",
													className: "h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-surface/95 px-3 py-1.5 text-xs font-semibold text-success shadow-sm ring-1 ring-black/5 backdrop-blur",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
													className: "size-3.5",
													strokeWidth: 2.2,
													"aria-hidden": "true"
												}), "Verified nurse"]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-1 flex-col p-6 sm:p-7",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display text-xl font-semibold leading-snug text-ink",
													children: nurse.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1.5 text-sm font-medium text-primary",
													children: nurse.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-5 flex flex-col gap-2.5 text-sm text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {
															className: "size-4 shrink-0 text-primary",
															strokeWidth: 1.9,
															"aria-hidden": "true"
														}), nurse.experience]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "flex min-w-0 items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
															className: "size-4 shrink-0 text-primary",
															strokeWidth: 1.9,
															"aria-hidden": "true"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "truncate",
															children: nurse.location
														})]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-5 text-sm leading-6 text-muted-foreground",
													children: nurse.services
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-6 block h-px w-full bg-line",
													"aria-hidden": "true"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-5 flex flex-1 flex-col gap-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-semibold text-success",
														children: nurse.availability
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														asChild: true,
														variant: "outline",
														className: "mt-auto h-11 w-full rounded-lg border-primary/25 bg-surface text-sm font-semibold text-primary shadow-none transition-colors hover:bg-primary hover:text-primary-foreground",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
															to: "/nurse-profile/$nurseId",
															params: { nurseId: nurse.id },
															"aria-label": `View profile of ${nurse.name}`,
															children: ["View Profile", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
																className: "size-4",
																"aria-hidden": "true"
															})]
														})
													})]
												})
											]
										})]
									})
								}, nurse.id))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "our-services",
						"aria-labelledby": "our-services-heading",
						className: "scroll-mt-20 border-t border-line bg-paper py-20 sm:py-24 lg:py-28",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-7xl px-5 sm:px-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto max-w-2xl text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary",
										children: "Our Services"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										id: "our-services-heading",
										className: "mt-4 font-display text-3xl font-semibold leading-[1.15] text-balance text-ink sm:text-4xl lg:text-[2.75rem]",
										children: "Our Services"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8",
										children: "Nurses Connect helps you find qualified nurses for a wide range of home-care needs — from everyday support to specialist recovery care."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-14 grid gap-6 sm:grid-cols-2 sm:mt-16 lg:grid-cols-3 lg:gap-8",
								children: SERVICES.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "flex",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-7 shadow-sm transition duration-300 motion-safe:hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5 sm:p-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": "true",
												className: "absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `grid size-12 shrink-0 place-items-center rounded-xl transition-colors duration-300 sm:size-14 ${index % 2 === 0 ? "bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground" : "bg-success-soft text-success group-hover:bg-success group-hover:text-primary-foreground"}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(service.icon, {
													className: "size-6 sm:size-7",
													strokeWidth: 1.9,
													"aria-hidden": "true"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-6 font-display text-lg font-semibold leading-snug text-ink sm:text-xl",
												children: service.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7",
												children: service.description
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": "true",
												className: "mt-6 block h-px w-full bg-line transition-colors duration-300 group-hover:bg-primary/20"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-3 font-mono text-xs text-muted-foreground/80",
												children: `0${index + 1} / 0${SERVICES.length}`
											})
										]
									})
								}, service.id))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "about-nurses-connect",
						"aria-labelledby": "about-nurses-connect-heading",
						className: "scroll-mt-20 border-t border-line bg-secondary/35 py-20 sm:py-24 lg:py-28",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary",
									children: "About Nurses Connect"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									id: "about-nurses-connect-heading",
									className: "mt-4 max-w-2xl font-display text-3xl font-semibold leading-[1.15] text-balance text-ink sm:text-4xl lg:text-[2.75rem]",
									children: "About Nurses Connect"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8",
									children: "Nurses Connect helps individuals and families connect with qualified nurses and access convenient care services designed around their personal needs, at home or wherever support is needed."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4",
									children: ABOUT_HIGHLIGHTS.map((highlight) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-9 shrink-0 place-items-center rounded-lg bg-success-soft text-success",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(highlight.icon, {
												className: "size-4.5",
												strokeWidth: 2,
												"aria-hidden": "true"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-semibold leading-tight text-ink",
											children: highlight.title
										})]
									}, highlight.title))
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-11 shrink-0 place-items-center rounded-xl bg-success-soft text-success",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, {
												className: "size-5",
												"aria-hidden": "true"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-xl font-semibold text-ink sm:text-2xl",
											children: "One place to find and offer care"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-sm leading-7 text-muted-foreground sm:text-base",
										children: "Search by location or service, explore nurse profiles, and take the next step with confidence."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										className: "mt-6 h-11 rounded-lg px-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/find-nurse",
											children: ["Find a Nurse", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
										})
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "why-choose-nurses-connect",
						"aria-labelledby": "why-choose-nurses-connect-heading",
						className: "scroll-mt-20 border-t border-line bg-secondary/35 py-20 sm:py-24 lg:py-28",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-7xl px-5 sm:px-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto max-w-2xl text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary",
										children: "Why Choose Us"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										id: "why-choose-nurses-connect-heading",
										className: "mt-4 font-display text-3xl font-semibold leading-[1.15] text-balance text-ink sm:text-4xl lg:text-[2.75rem]",
										children: "Why Choose Nurses Connect?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8",
										children: "Find trusted care with a platform designed to make connecting with professional nurses simple, reliable, and reassuring."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6",
								children: BENEFITS.map((benefit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "flex",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "group relative flex h-full w-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm transition duration-300 motion-safe:hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5 sm:p-7",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												"aria-hidden": "true",
												className: "absolute inset-x-0 top-0 h-1 origin-left scale-x-0 rounded-t-2xl bg-primary transition-transform duration-300 group-hover:scale-x-100"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid size-12 shrink-0 place-items-center rounded-xl bg-success-soft text-success transition-colors duration-300 group-hover:bg-success group-hover:text-primary-foreground sm:size-14",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(benefit.icon, {
													className: "size-6 sm:size-7",
													strokeWidth: 1.9,
													"aria-hidden": "true"
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-6 font-display text-lg font-semibold leading-snug text-ink sm:text-xl",
												children: benefit.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7",
												children: benefit.description
											})
										]
									})
								}, benefit.id))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						"aria-labelledby": "testimonials-heading",
						className: "border-t border-line bg-paper py-20 sm:py-24 lg:py-28",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-7xl px-5 sm:px-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto max-w-2xl text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary",
										children: "Real experiences"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										id: "testimonials-heading",
										className: "mt-4 font-display text-3xl font-semibold leading-[1.15] text-balance text-ink sm:text-4xl lg:text-[2.75rem]",
										children: "What People Say"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8",
										children: "Hear from people who found a clearer path to trusted care through Nurses Connect."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-14 grid gap-5 sm:mt-16 md:grid-cols-3 md:gap-6",
								children: TESTIMONIALS.map((testimonial) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "flex",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "flex h-full w-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-7",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
												className: "size-8 text-primary/70",
												strokeWidth: 1.8,
												"aria-hidden": "true"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
												className: "mt-5 flex-1 text-sm leading-7 text-muted-foreground sm:text-base",
												children: [
													"“",
													testimonial.quote,
													"”"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-6 border-t border-line pt-5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-display text-lg font-semibold text-ink",
													children: testimonial.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm text-primary",
													children: testimonial.role
												})]
											})
										]
									})
								}, testimonial.name))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-t border-line bg-primary px-5 py-16 text-primary-foreground sm:px-8 sm:py-20 lg:py-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/70",
										children: "Start with confidence"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-[2.75rem]",
										children: "Ready to Find the Right Nurse?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 max-w-xl text-base leading-7 text-primary-foreground/75 sm:text-lg sm:leading-8",
										children: "Connect with trusted nursing professionals for dependable support, or share your experience with families looking for care."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 sm:flex-row lg:flex-col",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "h-12 rounded-lg bg-surface px-6 text-base text-primary shadow-lg hover:bg-secondary hover:text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/find-nurse",
										children: ["Find a Nurse", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "h-12 rounded-lg border-primary-foreground/30 px-6 text-base text-primary-foreground shadow-none hover:bg-primary-foreground/10 hover:text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/join-as-nurse",
										children: "Join as a Nurse"
									})
								})]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-line bg-ink px-5 py-10 text-paper sm:px-8 sm:py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:gap-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, {
										className: "size-4",
										"aria-hidden": "true"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xl font-semibold",
									children: "Nurses Connect"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-sm text-sm leading-6 text-paper/75",
								children: "Connecting individuals and families with qualified nurses for reliable, professional home-care support."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Nurses Connect on Facebook",
										className: "grid size-9 place-items-center rounded-lg border border-paper/20 text-paper/75 transition-colors hover:border-paper/40 hover:text-paper",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, {
											className: "size-4",
											"aria-hidden": "true"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Nurses Connect on Instagram",
										className: "grid size-9 place-items-center rounded-lg border border-paper/20 text-paper/75 transition-colors hover:border-paper/40 hover:text-paper",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
											className: "size-4",
											"aria-hidden": "true"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Nurses Connect on LinkedIn",
										className: "grid size-9 place-items-center rounded-lg border border-paper/20 text-paper/75 transition-colors hover:border-paper/40 hover:text-paper",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
											className: "size-4",
											"aria-hidden": "true"
										})
									})
								]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold text-paper",
							children: "Explore"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-col items-start gap-3 text-sm text-paper/75",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									className: "transition-colors hover:text-paper",
									to: "/",
									children: "Home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									className: "transition-colors hover:text-paper",
									to: "/find-nurse",
									children: "Find a Nurse"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									className: "transition-colors hover:text-paper",
									to: "/join-as-nurse",
									children: "Join as a Nurse"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									className: "transition-colors hover:text-paper",
									to: "/find-nurse",
									children: "Request Care"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									className: "transition-colors hover:text-paper",
									to: "/dashboard",
									children: "Dashboard"
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold text-paper",
							children: "Services"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-col items-start gap-3 text-sm text-paper/75",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Home Nursing Care" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Elderly Care" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Post-Surgery Care" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "General Caregiving" })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold text-paper",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm leading-6 text-paper/75",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										className: "size-4 shrink-0 text-primary",
										"aria-hidden": "true"
									}), "info@nursesconnect.com"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "size-4 shrink-0 text-primary",
										"aria-hidden": "true"
									}), "+234 800 000 0000"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "size-4 shrink-0 text-primary",
										"aria-hidden": "true"
									}), "Lagos, Nigeria"]
								})
							]
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-10 max-w-7xl border-t border-paper/20 pt-5 text-xs text-paper/65",
					children: [
						"© ",
						currentYear ?? "",
						" Nurses Connect. All rights reserved."
					]
				})]
			})
		]
	});
}
//#endregion
export { Home as component };
