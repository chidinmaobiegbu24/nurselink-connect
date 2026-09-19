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

    prerender: {
      enabled: true,
      crawlLinks: true,
      routes: ["/", "/find-nurse", "/join-as-nurse"],
    },
  },
});