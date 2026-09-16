import { n as __toESM } from "../_runtime.mjs";
import { a as saveCareRequest, r as getNurses } from "./mock-data-DPXyPuiQ.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as ArrowLeft, C as ClipboardList, E as CalendarDays, a as ShieldCheck, r as UserRound } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-Bdcyobe6.mjs";
import { t as Route } from "./request-care._nurseId-BG05jwia.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/request-care._nurseId-BD4Xvj0Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initialForm = {
	fullName: "",
	email: "",
	phone: "",
	location: "",
	careType: "",
	startDate: "",
	notes: ""
};
var inputClassName = (hasError) => `mt-2 h-11 w-full rounded-lg border bg-paper px-4 text-sm font-normal text-ink outline-none transition placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-primary/15 ${hasError ? "border-destructive focus:border-destructive" : "border-input focus:border-primary"}`;
function RequestCare() {
	const { nurseId } = Route.useParams();
	const [nurses, setNurses] = (0, import_react.useState)(getNurses);
	const nurse = nurses.find((profile) => profile.id === nurseId);
	const [form, setForm] = (0, import_react.useState)(initialForm);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setNurses(getNurses());
	}, []);
	const handleChange = (event) => {
		const { name, value } = event.target;
		setForm((currentForm) => ({
			...currentForm,
			[name]: value
		}));
		setErrors((currentErrors) => {
			if (!currentErrors[name]) return currentErrors;
			const nextErrors = { ...currentErrors };
			delete nextErrors[name];
			return nextErrors;
		});
		setSubmitted(false);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		const nextErrors = {};
		const trimmedFullName = form.fullName.trim();
		const trimmedEmail = form.email.trim();
		const trimmedPhone = form.phone.trim();
		const trimmedLocation = form.location.trim();
		const phoneDigits = trimmedPhone.replace(/\D/g, "");
		if (!trimmedFullName) nextErrors.fullName = "Please enter your full name.";
		if (!trimmedEmail) nextErrors.email = "Please enter your email address.";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) nextErrors.email = "Please enter a valid email address, such as you@example.com.";
		if (!trimmedPhone) nextErrors.phone = "Please enter your phone number.";
		else if (!/^\+?[0-9\s().-]+$/.test(trimmedPhone) || phoneDigits.length < 7) nextErrors.phone = "Please enter a valid phone number with at least 7 digits.";
		if (!trimmedLocation) nextErrors.location = "Please enter where care is needed.";
		if (!form.careType) nextErrors.careType = "Please select the type of care needed.";
		if (!form.startDate) nextErrors.startDate = "Please choose a preferred start date.";
		if (Object.keys(nextErrors).length > 0) {
			setErrors(nextErrors);
			setSubmitted(false);
			return;
		}
		setErrors({});
		saveCareRequest({
			id: `request-${Date.now()}`,
			patient: form.fullName,
			service: form.careType,
			nurse: nurse?.name ?? "Unassigned",
			status: "Pending",
			date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-GB", {
				day: "2-digit",
				month: "short",
				year: "numeric"
			}),
			email: form.email,
			phone: form.phone,
			location: form.location,
			startDate: form.startDate,
			notes: form.notes
		});
		setForm(initialForm);
		setSubmitted(true);
	};
	if (!nurse) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-paper px-4 py-10 text-ink sm:px-6 sm:py-16 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary",
					children: "Request unavailable"
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
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/find-nurse",
						children: "Back to Find a Nurse"
					})
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen overflow-x-hidden bg-paper px-4 py-10 text-ink sm:px-6 sm:py-16 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/nurse-profile/$nurseId",
					params: { nurseId: nurse.id },
					className: "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "size-4",
						"aria-hidden": "true"
					}), "Back to Nurse Profile"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary",
							children: "Personalised care"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl",
							children: "Request care with confidence"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8",
							children: [
								"Tell us a little about your needs and ",
								nurse.name,
								" will have the right context to respond to your request."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "mt-10 rounded-2xl border border-line bg-surface p-5 shadow-sm sm:mt-12 sm:p-8",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3 border-b border-line pb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
									className: "size-5",
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-semibold text-ink",
								children: "Your details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-6 text-muted-foreground",
								children: "So the nurse can contact you about your request."
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-5 pt-6 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm font-semibold text-ink",
									children: [
										"Full name",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "fullName",
											type: "text",
											autoComplete: "name",
											placeholder: "e.g. Amaka Okafor",
											value: form.fullName,
											onChange: handleChange,
											required: true,
											"aria-invalid": Boolean(errors.fullName),
											"aria-describedby": errors.fullName ? "fullName-error" : void 0,
											className: inputClassName(Boolean(errors.fullName))
										}),
										errors.fullName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "fullName-error",
											className: "mt-1.5 text-xs font-medium text-destructive",
											children: errors.fullName
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm font-semibold text-ink",
									children: [
										"Email address",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "email",
											type: "email",
											autoComplete: "email",
											placeholder: "you@example.com",
											value: form.email,
											onChange: handleChange,
											required: true,
											"aria-invalid": Boolean(errors.email),
											"aria-describedby": errors.email ? "email-error" : void 0,
											className: inputClassName(Boolean(errors.email))
										}),
										errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "email-error",
											className: "mt-1.5 text-xs font-medium text-destructive",
											children: errors.email
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm font-semibold text-ink",
									children: [
										"Phone number",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "phone",
											type: "tel",
											autoComplete: "tel",
											placeholder: "e.g. +234 800 000 0000",
											value: form.phone,
											onChange: handleChange,
											required: true,
											"aria-invalid": Boolean(errors.phone),
											"aria-describedby": errors.phone ? "phone-error" : void 0,
											className: inputClassName(Boolean(errors.phone))
										}),
										errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "phone-error",
											className: "mt-1.5 text-xs font-medium text-destructive",
											children: errors.phone
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm font-semibold text-ink",
									children: [
										"Care location",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "location",
											type: "text",
											autoComplete: "address-level2",
											placeholder: "City or region where care is needed",
											value: form.location,
											onChange: handleChange,
											required: true,
											"aria-invalid": Boolean(errors.location),
											"aria-describedby": errors.location ? "location-error" : void 0,
											className: inputClassName(Boolean(errors.location))
										}),
										errors.location && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "location-error",
											className: "mt-1.5 text-xs font-medium text-destructive",
											children: errors.location
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-start gap-3 border-b border-line pb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 shrink-0 place-items-center rounded-lg bg-success-soft text-success",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {
									className: "size-5",
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-semibold text-ink",
								children: "Care preferences"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-6 text-muted-foreground",
								children: "Help us understand the support you are looking for."
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-5 pt-6 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-semibold text-ink",
								children: [
									"Type of care needed",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										name: "careType",
										value: form.careType,
										onChange: handleChange,
										required: true,
										"aria-invalid": Boolean(errors.careType),
										"aria-describedby": errors.careType ? "careType-error" : void 0,
										className: inputClassName(Boolean(errors.careType)),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "Select a care service"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Home Nursing Care" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Elderly Care" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Post-Surgery Care" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "General Caregiving" })
										]
									}),
									errors.careType && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										id: "careType-error",
										className: "mt-1.5 text-xs font-medium text-destructive",
										children: errors.careType
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-semibold text-ink",
								children: [
									"Preferred start date",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "startDate",
										type: "date",
										autoComplete: "off",
										value: form.startDate,
										onChange: handleChange,
										required: true,
										"aria-invalid": Boolean(errors.startDate),
										"aria-describedby": errors.startDate ? "startDate-error" : void 0,
										className: inputClassName(Boolean(errors.startDate))
									}),
									errors.startDate && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										id: "startDate-error",
										className: "mt-1.5 text-xs font-medium text-destructive",
										children: errors.startDate
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-start gap-3 border-b border-line pb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-10 shrink-0 place-items-center rounded-lg bg-clay-soft text-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
									className: "size-5",
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-semibold text-ink",
								children: "Anything else to share?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-6 text-muted-foreground",
								children: "Optional details can help the nurse prepare for your needs."
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block pt-6 text-sm font-semibold text-ink",
							children: [
								"Additional notes ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-normal text-muted-foreground",
									children: "(optional)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "notes",
									value: form.notes,
									onChange: handleChange,
									rows: 4,
									placeholder: "Share helpful context, preferences, or questions...",
									className: "mt-2 w-full resize-y rounded-lg border border-input bg-paper px-4 py-3 text-sm font-normal leading-6 text-ink outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/15"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2 text-xs leading-5 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
									className: "size-4 shrink-0 text-success",
									"aria-hidden": "true"
								}), "Your request is shared only to help coordinate your care."]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								size: "lg",
								className: "h-12 rounded-lg px-6 shadow-sm",
								children: "Submit Care Request"
							})]
						}),
						submitted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 rounded-lg border border-success/20 bg-success-soft px-4 py-3 text-sm font-medium text-success",
							role: "status",
							children: "Care request submitted successfully."
						})
					]
				})
			]
		})
	});
}
//#endregion
export { RequestCare as component };
