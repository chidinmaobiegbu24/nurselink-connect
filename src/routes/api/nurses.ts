import { createFileRoute } from "@tanstack/react-router";

import {
  createNurse,
  DuplicateNurseEmailError,
  DatabaseUnavailableError,
  listNurses,
  nurseInputSchema,
} from "@/server/nurses";

/**
 * `GET /api/nurses`  — nurse directory (`find-nurse.tsx`, `dashboard.tsx`,
 * `nurse-profile.$nurseId.tsx`, `request-care.$nurseId.tsx`).
 * `POST /api/nurses` — nurse registration (`join-as-nurse.tsx`).
 *
 * These routes replace the Express endpoints in `server/server.js` for the
 * deployed app: Vercel runs them inside the Nitro function built from
 * `.vercel/output`, so the app's relative `/api/...` fetches are same-origin
 * and need no CORS or proxy.
 */
export const Route = createFileRoute("/api/nurses")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const { nurses, source, notice } = await listNurses();

          return Response.json(
            notice ? { nurses, meta: { source, notice } } : { nurses, meta: { source } },
            { headers: { "x-data-source": source } },
          );
        } catch (error) {
          const message =
            error instanceof DatabaseUnavailableError ? error.message : "Failed to fetch nurses";

          console.error("[api/nurses] GET failed:", error);

          return Response.json({ message }, { status: 503 });
        }
      },
      POST: async ({ request }) => {
        const payload: unknown = await request.json().catch(() => null);
        const parsed = nurseInputSchema.safeParse(payload);

        if (!parsed.success) {
          return Response.json(
            {
              message: parsed.error.issues[0]?.message ?? "Invalid nurse payload",
              issues: parsed.error.issues.map((issue) => ({
                field: issue.path.join("."),
                message: issue.message,
              })),
            },
            { status: 400 },
          );
        }

        try {
          const nurse = await createNurse(parsed.data);

          return Response.json({ nurse, meta: { source: "mongodb" } }, { status: 201 });
        } catch (error) {
          const status = error instanceof DuplicateNurseEmailError ? 409 : 503;
          const message =
            error instanceof DuplicateNurseEmailError || error instanceof DatabaseUnavailableError
              ? error.message
              : "Failed to create nurse";

          console.error("[api/nurses] POST failed:", error);

          return Response.json({ message }, { status });
        }
      },
    },
  },
});
