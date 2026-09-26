import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Use the project subpath on GitHub Pages, but the domain root on Vercel.
const basePath = process.env["GITHUB_ACTIONS"]
  ? "/nurselink-connect"
  : "";

export default defineConfig({
nitro: {
  preset: "vercel",
},
  vite: {
    server: {
      port: 8082,
    },

    base: basePath ? `${basePath}/` : "/",

    build: {
      outDir: "dist",
    },
  },

  tanstackStart: {
    router: {
      basepath: basePath || "/",
    },

    // TanStack Start 1.168.x prerenders the routes listed in `pages`, plus every
    // static route it discovers (autoStaticPathsDiscovery) and every <a href> it
    // finds when crawlLinks is on. The old `prerender.routes` key is not part of
    // this version's schema and was silently ignored.
    pages: [{ path: "/" }, { path: "/find-nurse" }, { path: "/join-as-nurse" }],

    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
});