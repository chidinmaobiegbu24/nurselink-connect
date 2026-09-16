import { n as __toESM } from "../_runtime.mjs";
import { o as saveNurse } from "./mock-data-DPXyPuiQ.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as ArrowLeft, D as BriefcaseMedical, O as BadgeCheck, r as UserRound } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-Bdcyobe6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/join-as-nurse-BhlSSllE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initialForm = {
	fullName: "",
	email: "",
	phone: "",
	location: "",
	role: "",
	service: "",
	experience: "",
	availability: "Available"
};
var inputClassName = (hasError) => `mt-2 h-11 w-full rounded-lg border bg-paper px-4 text-sm font-normal text-ink outline-none transition placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-primary/15 ${hasError ? "border-destructive focus:border-destructive" : "border-input focus:border-primary"}`;
function JoinAsNurse() {
	const [form, setForm] = (0, import_react.useState)(initialForm);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
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
		const trimmedRole = form.role.trim();
		const trimmedService = form.service.trim();
		const trimmedExperience = form.experience.trim();
		const phoneDigits = trimmedPhone.replace(/\D/g, "");
		const experienceValue = Number(trimmedExperience);
		if (!trimmedFullName) nextErrors.fullName = "Please enter your full name.";
		if (!trimmedEmail) nextErrors.email = "Please enter your email address.";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) nextErrors.email = "Please enter a valid email address, such as you@example.com.";
		if (!trimmedPhone) nextErrors.phone = "Please enter your phone number.";
		else if (!/^\+?[0-9\s().-]+$/.test(trimmedPhone) || phoneDigits.length < 7) nextErrors.phone = "Please enter a valid phone number with at least 7 digits.";
		if (!trimmedLocation) nextErrors.location = "Please enter your location.";
		if (!trimmedRole) nextErrors.role = "Please enter your professional role.";
		if (!trimmedService) nextErrors.service = "Please enter your service or specialization.";
		if (!trimmedExperience || !Number.isFinite(experienceValue) || experienceValue < 0) nextErrors.experience = "Please enter a valid number of years from 0 upwards.";
		if (!form.availability) nextErrors.availability = "Please select your availability.";
		if (Object.keys(nextErrors).length > 0) {
			setErrors(nextErrors);
			setSubmitted(false);
			return;
		}
		setErrors({});
		saveNurse({
			id: `registered-${Date.now()}`,
			name: trimmedFullName,
			email: trimmedEmail,
			phone: trimmedPhone,
			location: trimmedLocation,
			role: trimmedRole,
			service: trimmedService,
			experience: `${trimmedExperience} years experience`,
			availability: form.availability
		});
		setForm(initialForm);
		setSubmitted(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen overflow-x-hidden bg-paper px-4 py-10 text-ink sm:px-6 sm:py-16 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
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
							children: "Join the care community"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl",
							children: "Bring your nursing expertise to people who need it"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8",
							children: "Create a professional profile on Nurses Connect and make it easier for individuals and families to find trusted care that fits their needs."
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
								children: "Tell families how they can reach you."
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
											placeholder: "e.g. Grace Adeyemi",
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
										"Location",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "location",
											type: "text",
											autoComplete: "address-level2",
											placeholder: "City or region where you practise",
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
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefcaseMedical, {
									className: "size-5",
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-semibold text-ink",
								children: "Professional profile"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-6 text-muted-foreground",
								children: "Help families understand your experience and areas of care."
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-5 pt-6 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm font-semibold text-ink",
									children: [
										"Professional role",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "role",
											type: "text",
											placeholder: "e.g. Registered Nurse",
											value: form.role,
											onChange: handleChange,
											required: true,
											"aria-invalid": Boolean(errors.role),
											"aria-describedby": errors.role ? "role-error" : void 0,
											className: inputClassName(Boolean(errors.role))
										}),
										errors.role && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "role-error",
											className: "mt-1.5 text-xs font-medium text-destructive",
											children: errors.role
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm font-semibold text-ink",
									children: [
										"Service or specialization",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "service",
											type: "text",
											placeholder: "e.g. Elderly care and home nursing",
											value: form.service,
											onChange: handleChange,
											required: true,
											"aria-invalid": Boolean(errors.service),
											"aria-describedby": errors.service ? "service-error" : void 0,
											className: inputClassName(Boolean(errors.service))
										}),
										errors.service && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "service-error",
											className: "mt-1.5 text-xs font-medium text-destructive",
											children: errors.service
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm font-semibold text-ink md:col-span-2",
									children: [
										"Years of experience",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "experience",
											type: "number",
											min: "0",
											placeholder: "e.g. 5",
											value: form.experience,
											onChange: handleChange,
											required: true,
											"aria-invalid": Boolean(errors.experience),
											"aria-describedby": errors.experience ? "experience-error" : void 0,
											className: inputClassName(Boolean(errors.experience))
										}),
										errors.experience && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "experience-error",
											className: "mt-1.5 text-xs font-medium text-destructive",
											children: errors.experience
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "text-sm font-semibold text-ink md:col-span-2",
									children: [
										"Availability",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											name: "availability",
											value: form.availability,
											onChange: handleChange,
											required: true,
											"aria-invalid": Boolean(errors.availability),
											"aria-describedby": errors.availability ? "availability-error" : void 0,
											className: inputClassName(Boolean(errors.availability)),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Available",
												children: "Available"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Currently Unavailable",
												children: "Currently Unavailable"
											})]
										}),
										errors.availability && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "availability-error",
											className: "mt-1.5 text-xs font-medium text-destructive",
											children: errors.availability
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2 text-xs leading-5 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
									className: "size-4 shrink-0 text-success",
									"aria-hidden": "true"
								}), "Your details help families find the right professional support."]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								size: "lg",
								className: "h-12 rounded-lg px-6 shadow-sm",
								children: "Submit Registration"
							})]
						}),
						submitted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 rounded-lg border border-success/20 bg-success-soft px-4 py-3 text-sm font-medium text-success",
							role: "status",
							children: "Registration submitted successfully."
						})
					]
				})
			]
		})
	});
}
//#endregion
export { JoinAsNurse as component };
