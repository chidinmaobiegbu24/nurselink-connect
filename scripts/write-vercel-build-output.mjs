/**
 * Ensures the Vercel Build Output directory is complete.
 *
 * Nitro 3 betas (see nitrojs/nitro#3211) write `.vercel/output/functions/
 * __server.func/index.mjs` plus `static/` but skip the two metadata files the
 * Vercel Build Output API requires:
 *
 *   - `.vercel/output/config.json`                     -> routing (static first, then the function)
 *   - `.vercel/output/functions/__server.func/.vc-config.json` -> how to run the function
 *
 * Without them Vercel publishes the prerendered `static/` files only, which is
 * exactly why every `/api/*` request returned 404: nothing ever routed to the
 * TanStack Start server. This script writes the same files Nitro's own
 * `generateFunctionFiles()` would write for this project's config (no route
 * rules, no ISR, no per-route function overrides), and it only fills in what is
 * missing — once Nitro emits them itself this becomes a no-op.
 *
 * Run as part of `npm run build`; never fails the build.
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, posix, relative, sep } from "node:path";
import process from "node:process";

const OUTPUT_DIR = join(".vercel", "output");
const FALLBACK_ROUTE = "/__server"; // Nitro's Vercel fallback: functions/__server.func
const FUNCTION_ENTRY = "index.mjs";

const log = (message) => console.log(`[vercel-output] ${message}`);

function readJson(file) {
  try {
    return JSON.parse(readFileSync(file, "utf8"));
  } catch {
    return null;
  }
}

/** `static/foo/index.html` -> `{ "foo/index.html": { path: "foo" } }` (clean URLs). */
function collectOverrides(staticDir, prefix = "") {
  const overrides = {};

  if (!existsSync(staticDir)) {
    return overrides;
  }

  for (const entry of readdirSync(staticDir, { withFileTypes: true })) {
    const absolute = join(staticDir, entry.name);
    const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      Object.assign(overrides, collectOverrides(absolute, relativePath));
      continue;
    }

    if (entry.name !== "index.html" || !prefix) {
      continue;
    }

    // `find-nurse/index.html` is served at `/find-nurse`.
    const route = relativePath.slice(0, -"/index.html".length);
    overrides[relativePath.split(sep).join(posix.sep)] = { path: route };
  }

  return overrides;
}

function main() {
  const functionDir = join(OUTPUT_DIR, "functions", "__server.func");
  const functionEntry = join(functionDir, FUNCTION_ENTRY);

  if (!existsSync(functionEntry)) {
    log("no Vercel server function found; nothing to do");
    return;
  }

  const nitroManifest = readJson(join(OUTPUT_DIR, "nitro.json")) ?? {};
  const runtime =
    nitroManifest?.config?.vercel?.functions?.runtime ??
    process.env["VERCEL_NODE_VERSION"] ??
    "nodejs24.x";

  const functionConfigPath = join(functionDir, ".vc-config.json");

  if (existsSync(functionConfigPath)) {
    log(".vc-config.json already present; leaving it alone");
  } else {
    writeFileSync(
      functionConfigPath,
      `${JSON.stringify(
        {
          handler: FUNCTION_ENTRY,
          launcherType: "Nodejs",
          shouldAddHelpers: false,
          supportsResponseStreaming: true,
          runtime,
        },
        null,
        2,
      )}\n`,
    );
    log(`wrote ${relative(".", functionConfigPath)} (runtime ${runtime})`);
  }

  const buildConfigPath = join(OUTPUT_DIR, "config.json");

  if (existsSync(buildConfigPath)) {
    log("config.json already present; leaving it alone");
    return;
  }

  const overrides = collectOverrides(join(OUTPUT_DIR, "static"));

  writeFileSync(
    buildConfigPath,
    `${JSON.stringify(
      {
        version: 3,
        framework: {
          name: nitroManifest?.framework?.name ?? "nitro",
          version: nitroManifest?.framework?.version ?? "",
        },
        overrides,
        routes: [{ handle: "filesystem" }, { src: "/(.*)", dest: FALLBACK_ROUTE }],
      },
      null,
      2,
    )}\n`,
  );

  log(`wrote ${relative(".", buildConfigPath)} (${Object.keys(overrides).length} overrides)`);
}

try {
  main();
} catch (error) {
  // Never break the build: an incomplete build output is no worse than before.
  console.warn("[vercel-output] warning: could not complete the build output:", error);
}
