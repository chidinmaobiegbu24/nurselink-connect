import { existsSync } from "node:fs";
import { resolve } from "node:path";
import process from "node:process";

import dotenv from "dotenv";
import mongoose from "mongoose";

/**
 * Server-only MongoDB connection helper.
 *
 * It is imported exclusively from TanStack Start server routes
 * (`src/routes/api/*`), so it is never part of the client bundle.
 */

/** Abort quickly when the database is unreachable (e.g. Atlas IP allow-list). */
const SERVER_SELECTION_TIMEOUT_MS = 8_000;
const CONNECT_TIMEOUT_MS = 8_000;

/**
 * Vercel functions are short lived and serverless, so the connection is cached
 * on globalThis to survive dev-server module reloads and warm invocations.
 */
type MongooseGlobal = typeof globalThis & {
  __nurseLinkMongoose?: mongoose.Mongoose;
};

export type DatabaseHandle = {
  /** Connected Mongoose instance, or `null` when MongoDB is unavailable. */
  client: mongoose.Mongoose | null;
  /** `true` when a MONGODB_URI was found, even if connecting failed. */
  uriConfigured: boolean;
  /** Human readable reason for the failure, safe to surface to the client. */
  reason?: string;
};

function readUri(): string {
  const fromEnvironment = process.env["MONGODB_URI"]?.trim();
  if (fromEnvironment) {
    return fromEnvironment;
  }

  // Local development: prefer a root `.env`, fall back to the Express app's
  // `server/.env` so developers do not have to duplicate their credentials.
  const candidateFiles = [resolve(process.cwd(), ".env"), resolve(process.cwd(), "server", ".env")];

  for (const file of candidateFiles) {
    if (!existsSync(file)) {
      continue;
    }

    dotenv.config({ path: file, quiet: true });

    const loaded = process.env["MONGODB_URI"]?.trim();
    if (loaded) {
      return loaded;
    }
  }

  return "";
}

export async function connectDatabase(): Promise<DatabaseHandle> {
  const uri = readUri();

  if (!uri) {
    return {
      client: null,
      uriConfigured: false,
      reason:
        "MONGODB_URI is not configured. Add it as a Vercel environment variable (or in .env / server/.env locally).",
    };
  }

  const cache = globalThis as MongooseGlobal;
  const cached = cache.__nurseLinkMongoose;

  if (cached?.connection.readyState === mongoose.ConnectionStates.connected) {
    return { client: cached, uriConfigured: true };
  }

  try {
    const client = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: SERVER_SELECTION_TIMEOUT_MS,
      connectTimeoutMS: CONNECT_TIMEOUT_MS,
    });

    cache.__nurseLinkMongoose = client;

    return { client, uriConfigured: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    console.warn("[api] MongoDB connection failed:", message);

    return {
      client: null,
      uriConfigured: true,
      reason: "MongoDB could not be reached. Check MONGODB_URI and the Atlas IP allow-list.",
    };
  }
}
