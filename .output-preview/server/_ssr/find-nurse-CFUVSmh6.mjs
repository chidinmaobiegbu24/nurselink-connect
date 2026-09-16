import { n as __toESM } from "../_runtime.mjs";
import { r as getNurses } from "./mock-data-DPXyPuiQ.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as ArrowLeft, D as BriefcaseMedical, O as BadgeCheck, a as ShieldCheck, f as MapPin, m as LoaderCircle, s as Search, t as X } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-Bdcyobe6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/find-nurse-CFUVSmh6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RouteComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FindNurse, {});
}
function FindNurse() {
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [selectedService, setSelectedService] = (0, import_react.useState)("");
	const [allNurses, setAllNurses] = (0, import_react.useState)(getNurses);
	const [filteredNurses, setFilteredNurses] = (0, import_react.useState)(getNurses);
	const [isSearching, setIsSearching] = (0, import_react.useState)(false);
	const searchTimerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
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
			setFilteredNurses(allNurses.filter((nurse) => (!normalizedSearchTerm || [
				nurse.name,
				nurse.location,
				nurse.role
			].some((value) => value.toLowerCase().includes(normalizedSearchTerm))) && (!selectedService || nurse.service === selectedService)));
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen overflow-x-hidden bg-paper px-4 py-10 text-ink sm:px-6 sm:py-16 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "size-4",
						"aria-hidden": "true"
					}), "Back to Home"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary",
							children: "Trusted professionals"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl",
							children: "Find the right nurse for your care needs"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8",
							children: "Browse qualified professionals by location and specialty, then view their profile to find a confident match for you or your loved one."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10 rounded-2xl border border-line bg-surface p-5 shadow-sm sm:mt-12 sm:p-7",
					"aria-labelledby": "search-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "search-heading",
							className: "font-display text-2xl font-semibold text-ink",
							children: "Search available nurses"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Refine your search to find care in the right place."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden items-center gap-2 text-xs font-medium text-success sm:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Profiles you can trust"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto_auto] lg:items-end",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-medium text-ink",
								children: ["Search nurses", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative mt-2 block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										placeholder: "Search by name, location, or role",
										value: searchTerm,
										onChange: (e) => setSearchTerm(e.target.value),
										className: "h-11 w-full rounded-lg border border-input bg-paper pl-10 pr-4 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-medium text-ink",
								children: ["Service or specialization", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: selectedService,
									onChange: (e) => setSelectedService(e.target.value),
									className: "mt-2 h-11 w-full rounded-lg border border-input bg-paper px-4 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "All services"
									}), services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: service,
										children: service
									}, service))]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								onClick: handleSearch,
								disabled: isSearching,
								className: "h-11 rounded-lg px-6",
								children: [isSearching ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									className: "animate-spin",
									"aria-hidden": "true"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { "aria-hidden": "true" }), "Search nurses"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "outline",
								onClick: handleClearSearch,
								disabled: isSearching || !searchTerm && !selectedService,
								className: "h-11 rounded-lg border-primary/25 px-5 text-primary shadow-none hover:bg-secondary hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" }), "Clear Search"]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-col gap-2 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary",
						children: "Your options"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold text-ink",
						children: "Available Nurses"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						"aria-live": "polite",
						children: [
							filteredNurses.length,
							" ",
							filteredNurses.length === 1 ? "nurse" : "nurses",
							" found"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3",
					"aria-busy": isSearching,
					children: isSearching ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-full grid gap-5 md:grid-cols-2 xl:grid-cols-3",
						"aria-live": "polite",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Searching nurse profiles..."
						}), Array.from({ length: 3 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-64 animate-pulse rounded-2xl border border-line bg-surface p-6 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-2/3 rounded bg-secondary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-4 w-1/2 rounded bg-secondary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 h-px w-full bg-line" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-4 w-4/5 rounded bg-secondary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-4 w-3/5 rounded bg-secondary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 h-10 w-full rounded-lg bg-secondary" })
							]
						}, index))]
					}) : filteredNurses.length > 0 ? filteredNurses.map((nurse) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group flex min-w-0 flex-col rounded-2xl border border-line bg-surface p-5 shadow-sm transition duration-300 motion-safe:hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/5 sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl font-semibold leading-tight text-ink",
										children: nurse.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm font-medium text-primary",
										children: nurse.role
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
										className: "size-5",
										"aria-hidden": "true"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-col gap-3 border-y border-line py-5 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "mt-0.5 size-4 shrink-0 text-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: nurse.location })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseMedical, {
										className: "mt-0.5 size-4 shrink-0 text-primary",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: nurse.service })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-1 flex-col",
								children: [
									nurse.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-6 text-muted-foreground",
										children: nurse.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `mt-4 text-xs font-semibold ${nurse.availability === "Available" ? "text-success" : "text-muted-foreground"}`,
										children: nurse.availability ?? "Availability confirmed on request"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "outline",
										className: "mt-6 h-11 w-full rounded-lg border-primary/25 text-primary shadow-none hover:bg-primary hover:text-primary-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/nurse-profile/$nurseId",
											params: { nurseId: nurse.id },
											children: "View Profile"
										})
									})
								]
							})
						]
					}, nurse.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-full rounded-2xl border border-dashed border-line bg-surface px-6 py-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								className: "mx-auto size-8 text-primary",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-2xl font-semibold text-ink",
								children: "No nurses found"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground",
								children: "Try a different location or service to broaden your search."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "outline",
								onClick: handleClearSearch,
								className: "mt-6 h-10 rounded-lg border-primary/25 text-primary shadow-none hover:bg-secondary hover:text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" }), "Clear Search"]
							})
						]
					})
				})
			]
		})
	});
}
//#endregion
export { RouteComponent as component, FindNurse as default };
