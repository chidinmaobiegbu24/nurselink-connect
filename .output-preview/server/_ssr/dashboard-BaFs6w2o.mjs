import { n as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { i as getSavedNurses, n as getCareRequests, r as getNurses, t as DATA_UPDATED_EVENT } from "./mock-data-DPXyPuiQ.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as ArrowLeft, C as ClipboardList, O as BadgeCheck, S as Clock3, a as ShieldCheck, f as MapPin, j as Activity, n as Users, w as CircleCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-BaFs6w2o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
var SUMMARY_CARD_DETAILS = [
	{
		label: "Total Nurses",
		detail: "Registered nurses",
		icon: Users,
		iconClassName: "bg-secondary text-primary"
	},
	{
		label: "Available Nurses",
		detail: "Marked available",
		icon: Activity,
		iconClassName: "bg-success-soft text-success"
	},
	{
		label: "Care Requests",
		detail: "Submitted requests",
		icon: ClipboardList,
		iconClassName: "bg-clay-soft text-accent"
	},
	{
		label: "Completed Requests",
		detail: "Marked completed",
		icon: CircleCheck,
		iconClassName: "bg-secondary text-primary"
	}
];
function statusClassName(status) {
	if (status === "Completed") return "bg-success-soft text-success";
	if (status === "In progress") return "bg-secondary text-primary";
	return "bg-clay-soft text-accent";
}
function Dashboard() {
	const [nurses, setNurses] = (0, import_react.useState)(getNurses);
	const [recentNurses, setRecentNurses] = (0, import_react.useState)(getSavedNurses);
	const [careRequests, setCareRequests] = (0, import_react.useState)(getCareRequests);
	(0, import_react.useEffect)(() => {
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
	const completedRequests = careRequests.filter((request) => request.status.toLowerCase() === "completed");
	const recentRegisteredNurses = [...recentNurses].reverse().slice(0, 5);
	const recentCareRequests = [...careRequests].reverse().slice(0, 5);
	const summaryValues = [
		nurses.length,
		availableNurses.length,
		careRequests.length,
		completedRequests.length
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-paper px-4 py-8 text-ink sm:px-6 sm:py-12 lg:px-8",
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
					className: "mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary",
							children: "Overview"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl",
							children: "Dashboard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base",
							children: "Keep an eye on your nurse network and the latest care requests."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, {
							className: "size-4 text-primary",
							"aria-hidden": "true"
						}), "Updated today"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					"aria-label": "Summary",
					className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
					children: SUMMARY_CARD_DETAILS.map(({ label, detail, icon: Icon, iconClassName }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "border-line bg-surface shadow-sm transition-shadow hover:shadow-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "p-5 sm:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-muted-foreground",
									children: label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-display text-4xl font-semibold text-ink",
									children: summaryValues[index]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `grid size-11 shrink-0 place-items-center rounded-lg ${iconClassName}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5",
										"aria-hidden": "true"
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs text-muted-foreground",
								children: detail
							})]
						})
					}, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8 rounded-2xl border border-line bg-surface p-5 shadow-sm sm:mt-10 sm:p-6 lg:p-7",
					"aria-labelledby": "recent-nurses-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary",
								children: "Nurse network"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "recent-nurses-heading",
								className: "mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl",
								children: "Recent Nurses"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-6 text-muted-foreground",
								children: "Newly registered professionals ready to be discovered."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground",
							children: [recentNurses.length, " registered"]
						})]
					}), recentRegisteredNurses.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3",
						children: recentRegisteredNurses.map((nurse) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/nurse-profile/$nurseId",
							params: { nurseId: nurse.id },
							className: "group block rounded-xl border border-line bg-paper p-5 transition duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-11 shrink-0 place-items-center rounded-lg bg-secondary text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
											className: "size-5",
											"aria-hidden": "true"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: `inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${nurse.availability === "Available" ? "bg-success-soft text-success" : "bg-secondary text-muted-foreground"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
											className: "size-3.5",
											"aria-hidden": "true"
										}), nurse.availability ?? "Availability pending"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 font-display text-xl font-semibold text-ink group-hover:text-primary",
									children: nurse.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-medium text-primary",
									children: nurse.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex flex-col gap-2 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
											className: "size-4 shrink-0 text-primary",
											"aria-hidden": "true"
										}), nurse.location]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {
											className: "size-4 shrink-0 text-primary",
											"aria-hidden": "true"
										}), nurse.service]
									})]
								})
							]
						}) }, nurse.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 rounded-xl border border-dashed border-line bg-paper px-6 py-10 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
								className: "mx-auto size-8 text-primary",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-xl font-semibold text-ink",
								children: "No nurses registered yet"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground",
								children: "New nurse registrations will appear here once they join Nurses Connect."
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8 overflow-hidden rounded-2xl border border-line bg-surface shadow-sm sm:mt-10",
					"aria-labelledby": "recent-requests-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 border-b border-line px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "recent-requests-heading",
							className: "font-display text-2xl font-semibold text-ink",
							children: "Recent Care Requests"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "A quick view of the latest activity."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground",
							children: [careRequests.length, " latest"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-[720px] border-collapse text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-hero text-xs uppercase tracking-[0.12em] text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-medium sm:px-6",
										children: "Request"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-medium",
										children: "Service"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-medium",
										children: "Nurse"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-medium",
										children: "Status"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-medium sm:px-6",
										children: "Date"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-line",
								children: recentCareRequests.length > 0 ? recentCareRequests.map((request) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "transition-colors hover:bg-secondary/40",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "px-5 py-4 sm:px-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-medium text-ink",
												children: request.patient
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 font-mono text-xs text-muted-foreground",
												children: request.id
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-4 text-muted-foreground",
											children: request.service
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-4 text-muted-foreground",
											children: request.nurse
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusClassName(request.status)}`,
												children: request.status
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-4 text-muted-foreground sm:px-6",
											children: request.date
										})
									]
								}, request.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 5,
									className: "px-5 py-12 text-center text-sm text-muted-foreground sm:px-6",
									children: "No care requests yet."
								}) })
							})]
						})
					})]
				})
			]
		})
	});
}
//#endregion
export { Dashboard as component };
