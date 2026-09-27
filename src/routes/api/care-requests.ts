import { createFileRoute } from "@tanstack/react-router";

import {
  careRequestInputSchema,
  createCareRequest,
  listCareRequests,
} from "@/server/care-requests";
import { DatabaseUnavailableError } from "@/server/nurses";

/**
 * `POST /api/care-requests` — submit a care request (`request-care.$nurseId.tsx`).
 * `GET /api/care-requests` — recent care requests (`dashboard.tsx`).
 *
 * Same-origin by design, so the browser never needs CORS. These routes run in
 * the Nitro function that Vercel deploys from `.vercel/output`.
 */
export const Route = createFileRoute("/api/care-requests")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const { careRequests, source, notice } = await listCareRequests();

          return Response.json(
            notice
              ? { careRequests, meta: { source, notice } }
              : { careRequests, meta: { source } },
            { headers: { "x-data-source": source } },
          );
        } catch (error) {
          const message =
            error instanceof DatabaseUnavailableError
              ? error.message
              : "Failed to fetch care requests";

          console.error("[api/care-requests] GET failed:", error);

          return Response.json({ message }, { status: 503 });
        }
      },
      POST: async ({ request }) => {
        const payload: unknown = await request.json().catch(() => null);
        const parsed = careRequestInputSchema.safeParse(payload);

        if (!parsed.success) {
          return Response.json(
            {
              message: parsed.error.issues[0]?.message ?? "Invalid care request payload",
              issues: parsed.error.issues.map((issue) => ({
                field: issue.path.join("."),
                message: issue.message,
              })),
            },
            { status: 400 },
          );
        }

        try {
          const careRequest = await createCareRequest(parsed.data);

          return Response.json({ careRequest, meta: { source: "mongodb" } }, { status: 201 });
        } catch (error) {
          const status = error instanceof DatabaseUnavailableError ? 503 : 400;
          const message =
            error instanceof DatabaseUnavailableError
              ? error.message
              : "Failed to create care request";

          console.error("[api/care-requests] POST failed:", error);

          return Response.json({ message }, { status });
        }
      },
    },
  },
});
