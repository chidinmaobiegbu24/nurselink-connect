// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    output: {
      dir: ".output-preview",
    },
  },
  vite: {
    server: {
  port: 8082,
},
    base: "/",
    build: {
      outDir: "dist",
    },
  },
  tanstackStart: {
    router: {
      basepath: "/nurselink-connect",
    },
      prerender: {
        routes: ["/", "/find-nurse", "/join-as-nurse"],
      },
  },
});
