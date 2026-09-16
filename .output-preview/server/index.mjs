globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-09-12T21:51:34.954Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/nitro.json": {
		"type": "application/json",
		"etag": "\"15c-HOr4R27AQb/kJN89s9oOV2BaCMo\"",
		"mtime": "2026-09-15T20:45:54.442Z",
		"size": 348,
		"path": "../public/nitro.json"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"ae-hLVBrSrDdpIw3Xl0dJPRkupPepQ\"",
		"mtime": "2026-09-12T21:51:34.954Z",
		"size": 174,
		"path": "../public/robots.txt"
	},
	"/assets/activity-BUa5I1T7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df-NUHl5o+QZFibRqOyui952yNNVmY\"",
		"mtime": "2026-09-16T09:37:00.903Z",
		"size": 223,
		"path": "../public/assets/activity-BUa5I1T7.js"
	},
	"/assets/badge-check-BqnQbz3J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"131-gGn9qXqV9oJIUSWVe7EOHunEC0o\"",
		"mtime": "2026-09-16T09:37:00.903Z",
		"size": 305,
		"path": "../public/assets/badge-check-BqnQbz3J.js"
	},
	"/assets/activity-BoWyQ37L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df-A5RmvekqQbO/JZbufsjB4Y9wccI\"",
		"mtime": "2026-09-15T20:45:50.356Z",
		"size": 223,
		"path": "../public/assets/activity-BoWyQ37L.js"
	},
	"/assets/badge-check-L-63RkHC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"131-zmuogNJqY9nsRgVa+wCy95xFPQg\"",
		"mtime": "2026-09-15T20:45:50.356Z",
		"size": 305,
		"path": "../public/assets/badge-check-L-63RkHC.js"
	},
	"/assets/briefcase-medical-DBb9MH8b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16c-zpLnuYydw34yTZYz+ziOvPGR/wY\"",
		"mtime": "2026-09-16T09:37:00.903Z",
		"size": 364,
		"path": "../public/assets/briefcase-medical-DBb9MH8b.js"
	},
	"/assets/briefcase-medical-DzZA6D_D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16c-u+y8YT+VcwhoC02lXKQ1YjgWTBo\"",
		"mtime": "2026-09-15T20:45:50.356Z",
		"size": 364,
		"path": "../public/assets/briefcase-medical-DzZA6D_D.js"
	},
	"/assets/button-CO-akEhk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1246-8JXsSpUFcgf4cp5+MsLS8QLSWW4\"",
		"mtime": "2026-09-16T09:37:00.903Z",
		"size": 4678,
		"path": "../public/assets/button-CO-akEhk.js"
	},
	"/assets/clipboard-list-UK3pYdl0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"190-8NN+XCsNvWc6hw1MmC46HVNz8fI\"",
		"mtime": "2026-09-16T09:37:00.912Z",
		"size": 400,
		"path": "../public/assets/clipboard-list-UK3pYdl0.js"
	},
	"/assets/button-DLiOmkKf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1231-tjtv/PljV2dUdUqLAmaSAk6RRHM\"",
		"mtime": "2026-09-15T20:45:50.356Z",
		"size": 4657,
		"path": "../public/assets/button-DLiOmkKf.js"
	},
	"/assets/clipboard-list-bzOOJOr_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"190-GkDgtkvZCDdNG/KHJd8FmDyZ4UM\"",
		"mtime": "2026-09-15T20:45:50.356Z",
		"size": 400,
		"path": "../public/assets/clipboard-list-bzOOJOr_.js"
	},
	"/assets/clock-3-NZtS99Pn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-Ke1+axGCDHZyHebrO+WHi1gwkqE\"",
		"mtime": "2026-09-16T09:37:00.912Z",
		"size": 158,
		"path": "../public/assets/clock-3-NZtS99Pn.js"
	},
	"/assets/dashboard-ClsUaVRp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"27ac-nU9f1MkVJWB4JlR5BojiBx5kJw0\"",
		"mtime": "2026-09-16T09:37:00.912Z",
		"size": 10156,
		"path": "../public/assets/dashboard-ClsUaVRp.js"
	},
	"/assets/clock-3-Db6sSMeO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-UV7ahk5+0XM/ocuhsD2znjBjRek\"",
		"mtime": "2026-09-15T20:45:50.356Z",
		"size": 158,
		"path": "../public/assets/clock-3-Db6sSMeO.js"
	},
	"/assets/find-nurse-Dv1XhtbU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21d5-eX91ylj2CC0M7jm8dsUL5AJW5cc\"",
		"mtime": "2026-09-16T09:37:00.912Z",
		"size": 8661,
		"path": "../public/assets/find-nurse-Dv1XhtbU.js"
	},
	"/assets/dashboard-j-7R_uq0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1920-Pz27dg77Q3edHLgj1hXloxSktQU\"",
		"mtime": "2026-09-15T20:45:50.356Z",
		"size": 6432,
		"path": "../public/assets/dashboard-j-7R_uq0.js"
	},
	"/assets/find-nurse-DS2sGOkk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a3d-I0ypCSGt1FktRMXwNKUfF3YtnyU\"",
		"mtime": "2026-09-15T20:45:50.372Z",
		"size": 6717,
		"path": "../public/assets/find-nurse-DS2sGOkk.js"
	},
	"/assets/index-BzlERgE2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"52dc7-gX6vqC8yl0UQe5FrdudnOGQvUV4\"",
		"mtime": "2026-09-16T09:37:00.896Z",
		"size": 339399,
		"path": "../public/assets/index-BzlERgE2.js"
	},
	"/assets/hero-nurse-DMZvpZDN.jpg": {
		"type": "image/jpeg",
		"etag": "\"23444-vzbIMtADEp7fF7nouTfVshhfwcA\"",
		"mtime": "2026-09-16T09:37:01.767Z",
		"size": 144452,
		"path": "../public/assets/hero-nurse-DMZvpZDN.jpg"
	},
	"/assets/join-as-nurse-CzxpUsfS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"231f-vAyM2Dyk/oPRYhz/4p6hrvemFvs\"",
		"mtime": "2026-09-16T09:37:00.912Z",
		"size": 8991,
		"path": "../public/assets/join-as-nurse-CzxpUsfS.js"
	},
	"/assets/join-as-nurse-DQUuw_-Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a5c-qQio5Xeh4u/qYx1L0iNHzDA/Mas\"",
		"mtime": "2026-09-15T20:45:50.372Z",
		"size": 6748,
		"path": "../public/assets/join-as-nurse-DQUuw_-Y.js"
	},
	"/assets/link-C5U38H4x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8c13-BKRiXNjzhsBWHBxO+B36NFClZ6s\"",
		"mtime": "2026-09-16T09:37:00.912Z",
		"size": 35859,
		"path": "../public/assets/link-C5U38H4x.js"
	},
	"/assets/map-pin-DFGOoGdN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8-PBhS8Oi2/jzBR6wZGG9ttbr24ps\"",
		"mtime": "2026-09-16T09:37:00.927Z",
		"size": 248,
		"path": "../public/assets/map-pin-DFGOoGdN.js"
	},
	"/assets/map-pin-NTAM4P3U.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8-KzLUWYj+yne6yKpv6Gnbvxc2FAc\"",
		"mtime": "2026-09-15T20:45:50.372Z",
		"size": 248,
		"path": "../public/assets/map-pin-NTAM4P3U.js"
	},
	"/assets/mock-data-BejGuxuo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"52b-VA+byIESshyz/Pu2Hl9c/tLhbaQ\"",
		"mtime": "2026-09-15T20:45:50.372Z",
		"size": 1323,
		"path": "../public/assets/mock-data-BejGuxuo.js"
	},
	"/assets/mock-data-Iq6eduWt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"82d-wRPt5MYWY0tZHbaYKUUik5xNQCU\"",
		"mtime": "2026-09-16T09:37:00.928Z",
		"size": 2093,
		"path": "../public/assets/mock-data-Iq6eduWt.js"
	},
	"/assets/nurse-daniel-otvKFaF6.jpg": {
		"type": "image/jpeg",
		"etag": "\"e2cd-RhO9+Zjj86AB9oY1/lRGuSHb2sw\"",
		"mtime": "2026-09-16T09:37:02.829Z",
		"size": 58061,
		"path": "../public/assets/nurse-daniel-otvKFaF6.jpg"
	},
	"/assets/nurse-grace-B3W3LZLO.jpg": {
		"type": "image/jpeg",
		"etag": "\"c364-almNQVpD5r36KhbzTvZwXdw1k/A\"",
		"mtime": "2026-09-16T09:37:02.986Z",
		"size": 50020,
		"path": "../public/assets/nurse-grace-B3W3LZLO.jpg"
	},
	"/assets/jsx-runtime-Dk72oS4N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2246-jdmifwUklrWzVvkkm/k29uuTwFE\"",
		"mtime": "2026-09-15T20:45:50.372Z",
		"size": 8774,
		"path": "../public/assets/jsx-runtime-Dk72oS4N.js"
	},
	"/assets/nurse-priya-Ai-AN1dZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c7-T79G4ptXZJeolya8hVrgO+XT6lM\"",
		"mtime": "2026-09-15T20:45:50.388Z",
		"size": 199,
		"path": "../public/assets/nurse-priya-Ai-AN1dZ.js"
	},
	"/assets/nurse-priya-PNypXSTR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"91-ov21f2bnUlevnOYaY8xUedwNEKE\"",
		"mtime": "2026-09-16T09:37:00.928Z",
		"size": 145,
		"path": "../public/assets/nurse-priya-PNypXSTR.js"
	},
	"/assets/nurse-profile._nurseId-BcOk8M9E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19ea-uNeC0uyk8GtRXj19wI+dhXKLHrI\"",
		"mtime": "2026-09-16T09:37:00.928Z",
		"size": 6634,
		"path": "../public/assets/nurse-profile._nurseId-BcOk8M9E.js"
	},
	"/assets/nurse-priya-wZl4NN6O.jpg": {
		"type": "image/jpeg",
		"etag": "\"b342-yYoy8CLMcZLQm9lwwiXFDHmcBBg\"",
		"mtime": "2026-09-16T09:37:02.986Z",
		"size": 45890,
		"path": "../public/assets/nurse-priya-wZl4NN6O.jpg"
	},
	"/assets/nurse-profile._nurseId-ChjZ0UqY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c4-jo9tBpm7KP6UMoIue0tfTeOq3ok\"",
		"mtime": "2026-09-15T20:45:50.388Z",
		"size": 708,
		"path": "../public/assets/nurse-profile._nurseId-ChjZ0UqY.js"
	},
	"/assets/nurse-profile._nurseId-Dsqavv0W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1783-6GQvAK3jarPSIcTNiilOngnP1e8\"",
		"mtime": "2026-09-15T20:45:50.388Z",
		"size": 6019,
		"path": "../public/assets/nurse-profile._nurseId-Dsqavv0W.js"
	},
	"/assets/nurse-profile._nurseId-OjTgbuBf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36a-2VNc/TNjSR32KXjpNxrQHQJynXY\"",
		"mtime": "2026-09-16T09:37:00.928Z",
		"size": 874,
		"path": "../public/assets/nurse-profile._nurseId-OjTgbuBf.js"
	},
	"/assets/preload-helper-Du5D-ni0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1837-MX/ngacR0bJajlBOvv7Xela3Cvo\"",
		"mtime": "2026-09-16T09:37:00.928Z",
		"size": 6199,
		"path": "../public/assets/preload-helper-Du5D-ni0.js"
	},
	"/assets/request-care._nurseId-9KraerH6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2932-QozlNN0wymf5kcsOa+qa1LCgah8\"",
		"mtime": "2026-09-16T09:37:01.667Z",
		"size": 10546,
		"path": "../public/assets/request-care._nurseId-9KraerH6.js"
	},
	"/assets/request-care._nurseId-DEhz_EcE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ff-17dFvN/ixrbq5GrnI+4dQxY5Pew\"",
		"mtime": "2026-09-16T09:37:01.667Z",
		"size": 767,
		"path": "../public/assets/request-care._nurseId-DEhz_EcE.js"
	},
	"/assets/request-care._nurseId-EBt-YmY0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25a-gCqBSwIR4rEWiLtOa9pwRi+qG5g\"",
		"mtime": "2026-09-15T20:45:50.404Z",
		"size": 602,
		"path": "../public/assets/request-care._nurseId-EBt-YmY0.js"
	},
	"/assets/link-BdGZEJWW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"69eb-X87zBgwNNxd9aqRTywrcWwN46bI\"",
		"mtime": "2026-09-15T20:45:50.372Z",
		"size": 27115,
		"path": "../public/assets/link-BdGZEJWW.js"
	},
	"/assets/request-care._nurseId-Gkxl6AUq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2204-GtKEdXkY33fkB5EyhPF2CpXFpsY\"",
		"mtime": "2026-09-15T20:45:50.404Z",
		"size": 8708,
		"path": "../public/assets/request-care._nurseId-Gkxl6AUq.js"
	},
	"/assets/routes-VcIpG4-M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"883d-mF26kyDDSkL/43qFpzK52o2OLx4\"",
		"mtime": "2026-09-16T09:37:01.694Z",
		"size": 34877,
		"path": "../public/assets/routes-VcIpG4-M.js"
	},
	"/assets/search-CjXqF5Yn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a3-r8MbPsjFJ3HZGQkJZ65+87RRadk\"",
		"mtime": "2026-09-15T20:45:50.541Z",
		"size": 163,
		"path": "../public/assets/search-CjXqF5Yn.js"
	},
	"/assets/shield-check-Bv188Tfw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"135-DJTDonrcqkIKJ+CTggMoLUJjLkA\"",
		"mtime": "2026-09-16T09:37:01.699Z",
		"size": 309,
		"path": "../public/assets/shield-check-Bv188Tfw.js"
	},
	"/assets/routes-C-XJLbTP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"68e2-THK//2CkiuI25inF5PyfBVZDibk\"",
		"mtime": "2026-09-15T20:45:50.541Z",
		"size": 26850,
		"path": "../public/assets/routes-C-XJLbTP.js"
	},
	"/assets/shield-check-UAHGcNwz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"135-KfpgmWQxlHLfL8ucijeBS3eacXU\"",
		"mtime": "2026-09-15T20:45:50.541Z",
		"size": 309,
		"path": "../public/assets/shield-check-UAHGcNwz.js"
	},
	"/assets/styles-DWEC6YAj.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1709c-glH92g+0K2i+N305pDWEC6HL+rE\"",
		"mtime": "2026-09-16T09:37:02.986Z",
		"size": 94364,
		"path": "../public/assets/styles-DWEC6YAj.css"
	},
	"/assets/styles-DNBWjcBU.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"16756-zRSLsEQMNvGq71nLSC1cmvZDELA\"",
		"mtime": "2026-09-15T20:45:50.557Z",
		"size": 91990,
		"path": "../public/assets/styles-DNBWjcBU.css"
	},
	"/assets/user-round-DS9kCJRL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ab-UHcxkzXMVe9+qaPIPX0keSz6eIk\"",
		"mtime": "2026-09-16T09:37:01.712Z",
		"size": 171,
		"path": "../public/assets/user-round-DS9kCJRL.js"
	},
	"/assets/user-round-CK3lSJhb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ab-LjckmuecvR8PAW3gMAlkvUqDpto\"",
		"mtime": "2026-09-15T20:45:50.541Z",
		"size": 171,
		"path": "../public/assets/user-round-CK3lSJhb.js"
	},
	"/assets/utils-imTvxFWI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"70ab-xxi4wV8BzEsiak0koTycbEbCHjw\"",
		"mtime": "2026-09-16T09:37:01.756Z",
		"size": 28843,
		"path": "../public/assets/utils-imTvxFWI.js"
	},
	"/assets/x-B_BEXhYT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"108-EsLWGUSE3iQoT7rBuRYm6T95qlU\"",
		"mtime": "2026-09-16T09:37:01.767Z",
		"size": 264,
		"path": "../public/assets/x-B_BEXhYT.js"
	},
	"/assets/index-hcL1Jw5G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"52ad3-Dlr8yP/4V8x+cy7XCf6F4avJgfw\"",
		"mtime": "2026-09-15T20:45:50.356Z",
		"size": 338643,
		"path": "../public/assets/index-hcL1Jw5G.js"
	},
	"/assets/utils-Btd0dY3s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"70b2-Evm7k1phWBxoaBBjphgxlIGdU6M\"",
		"mtime": "2026-09-15T20:45:50.541Z",
		"size": 28850,
		"path": "../public/assets/utils-Btd0dY3s.js"
	},
	"/assets/preload-helper-ocNnXJwI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1870-zSYxabjxy58xwK8/ph1HiVQlZTg\"",
		"mtime": "2026-09-15T20:45:50.396Z",
		"size": 6256,
		"path": "../public/assets/preload-helper-ocNnXJwI.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_W4JXcl = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_W4JXcl
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
