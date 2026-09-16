import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nurse-profile._nurseId-ClNLM9SS.js
var $$splitComponentImporter = () => import("./nurse-profile._nurseId-DcaYo70V.mjs");
var Route = createFileRoute("/nurse-profile/$nurseId")({
	head: () => ({ meta: [{ title: "Nurse Profile | Nurses Connect" }, {
		name: "description",
		content: "Review a qualified Nurses Connect professional's experience, specialization, availability, and care services."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
