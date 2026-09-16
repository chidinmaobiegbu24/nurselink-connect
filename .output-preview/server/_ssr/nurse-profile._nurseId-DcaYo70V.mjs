import { n as __toESM } from "../_runtime.mjs";
import { r as getNurses } from "./mock-data-DPXyPuiQ.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as ArrowLeft, D as BriefcaseMedical, O as BadgeCheck, S as Clock3, a as ShieldCheck, f as MapPin } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-Bdcyobe6.mjs";
import { t as Route } from "./nurse-profile._nurseId-ClNLM9SS.mjs";
import { n as nurse_grace_default, r as nurse_priya_default, t as nurse_daniel_default } from "./nurse-priya-Cu7_ONRQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nurse-profile._nurseId-DcaYo70V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function resolveAssetPath(assetPath) {
	return assetPath.replace(/^\/nurselink-connect(?=\/)/, "");
}
function NurseProfile() {
	const { nurseId } = Route.useParams();
	const [nurses, setNurses] = (0, import_react.useState)(getNurses);
	(0, import_react.useEffect)(() => {
		setNurses(getNurses());
	}, []);
	const nurse = nurses.find((profile) => profile.id === nurseId);
	const image = nurse ? {
		"grace-adeyemi": nurse_grace_default,
		"daniel-osei": nurse_daniel_default,
		"priya-sharma": nurse_priya_default
	}[nurse.id] : void 0;
	const initials = nurse?.name.split(" ").map((namePart) => namePart[0]).join("").slice(0, 2).toUpperCase();
	if (!nurse) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-paper px-4 py-10 text-ink sm:px-6 sm:py-16 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary",
					children: "Profile unavailable"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl",
					children: "Nurse profile not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-md text-sm leading-6 text-muted-foreground",
					children: "This profile may have been removed or the link may be out of date."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-8 h-11 rounded-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/find-nurse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { "aria-hidden": "true" }), "Back to Find a Nurse"]
					})
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-paper px-4 py-8 text-ink sm:px-6 sm:py-12 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/find-nurse",
				className: "inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-3.5 py-2 text-sm font-semibold text-muted-foreground shadow-sm transition-colors hover:border-primary/25 hover:text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
					className: "size-4",
					"aria-hidden": "true"
				}), "Back to Find a Nurse"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mt-6 overflow-hidden rounded-2xl border border-line bg-surface shadow-xl shadow-primary/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-hero px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-28 shrink-0 overflow-hidden rounded-2xl bg-secondary ring-4 ring-surface sm:size-36 lg:size-40",
							children: image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: resolveAssetPath(image),
								alt: `Portrait of ${nurse.name}`,
								className: "h-full w-full object-cover object-top"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-full w-full place-items-center font-display text-4xl font-semibold text-primary",
								children: initials
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-success-soft px-3 py-1.5 text-xs font-semibold text-success",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
										className: "size-3.5",
										"aria-hidden": "true"
									}), "Trusted nurse profile"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-4 font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl",
									children: nurse.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-base font-medium text-primary sm:text-lg",
									children: nurse.role
								})
							]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 p-5 sm:p-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12 lg:p-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-line bg-paper p-5 transition-shadow hover:shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "size-5 text-primary",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground",
										children: "Location"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm font-medium text-ink",
										children: nurse.location
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-line bg-paper p-5 transition-shadow hover:shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseMedical, {
										className: "size-5 text-primary",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground",
										children: "Service or specialization"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm font-medium leading-6 text-ink",
										children: nurse.service
									})
								]
							}),
							nurse.experience && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-line bg-paper p-5 transition-shadow hover:shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {
										className: "size-5 text-primary",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground",
										children: "Experience"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm font-medium text-ink",
										children: nurse.experience
									})
								]
							}),
							(nurse.availability || nurse.status) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `rounded-xl p-5 transition-shadow hover:shadow-sm ${nurse.availability === "Available" ? "border border-success/20 bg-success-soft" : "border border-line bg-paper"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										className: `size-5 ${nurse.availability === "Available" ? "text-success" : "text-muted-foreground"}`,
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `mt-3 text-xs font-semibold uppercase tracking-[0.12em] ${nurse.availability === "Available" ? "text-success/80" : "text-muted-foreground"}`,
										children: "Availability"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `mt-1 text-sm font-medium ${nurse.availability === "Available" ? "text-success" : "text-ink"}`,
										children: nurse.availability ?? nurse.status
									})
								]
							})
						]
					}), nurse.description && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 border-t border-line pt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary",
								children: "Professional profile"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl",
								children: "About This Nurse"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base",
								children: nurse.description
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "h-fit rounded-xl border border-primary/15 bg-secondary/45 p-5 shadow-sm sm:p-6 lg:sticky lg:top-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
								className: "size-6 text-success",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-xl font-semibold text-ink",
								children: "Ready to connect?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm leading-6 text-muted-foreground",
								children: [
									"Share what you need and send a care request directly to ",
									nurse.name,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "mt-6 h-11 w-full rounded-lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/request-care/$nurseId",
									params: { nurseId: nurse.id },
									children: "Request Care"
								})
							})
						]
					})]
				})]
			})]
		})
	});
}
//#endregion
export { NurseProfile as component };
