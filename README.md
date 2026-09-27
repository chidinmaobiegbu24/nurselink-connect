# NurseLink Connect

I want to build a responsive web application called "Nurses Connect" using HTML, CSS, and JavaScript.

The purpose of the website is to connect people who need home-care services with qualified nurses.

Please create only the basic project structure and the homepage layout for now.

The homepage should include:

A navigation bar with:

Logo: Nurses Connect

Home

Find a Nurse

How It Works

About

Login

Register

A Hero section with:

A professional healthcare headline

A short description

A "Find a Nurse" button

A "Join as a Nurse" button

Do not create the other pages yet.

Use a clean, modern, professional healthcare design that is responsive on mobile and desktop.

Use HTML, CSS, and JavaScript.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4f027217-9bc7-45d3-a900-5ea4a7420f06).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## API routes

The JSON API is served by this same TanStack Start app, so every page uses
relative, same-origin URLs (`fetch("/api/nurses")`) — no `localhost:5000`, no
CORS, and no separate backend to deploy.

| Route                | Methods       | Used by                                                               |
| -------------------- | ------------- | --------------------------------------------------------------------- |
| `/api/nurses`        | `GET`, `POST` | Find a Nurse, Nurse profile, Request care, Join as a Nurse, Dashboard |
| `/api/care-requests` | `GET`, `POST` | Request care, Dashboard                                               |

- Handlers: `src/routes/api/nurses.ts`, `src/routes/api/care-requests.ts`
- Data access + validation: `src/server/` (mongoose schemas mirror `server/models/*.js`)

Responses are envelopes so the client can tell where the data came from:

```json
{ "nurses": [{ "_id": "6aad…", "fullName": "…" }], "meta": { "source": "mongodb" } }
```

`meta.source` is `mongodb` when the database answered, or `demo` when
`MONGODB_URI` is not configured — `/find-nurse` then shows a banner and serves
the read-only sample nurses from `src/server/seed.ts`. Reads never fail with
stale sample data when the database _is_ configured but unreachable: those
requests return `503` with an actionable `message`.

`server/server.js` is the older standalone Express implementation of the same
API (`node server/server.js`, needs `server/.env`). It is kept for local
experiments only — Vercel never runs it, which is why requests to a deployed
`/api/*` path used to 404.

## Environment variables

Copy `.env.example` to `.env` (or reuse `server/.env`, which the server code
also reads as a fallback):

| Variable      | Required           | Purpose                                          |
| ------------- | ------------------ | ------------------------------------------------ |
| `MONGODB_URI` | Yes, to store data | MongoDB Atlas connection string used by `/api/*` |
| `PORT`        | No                 | Only used by the standalone Express app          |

## Deploying to Vercel

`vercel.json` intentionally contains only `buildCommand`. Nitro's `vercel`
preset writes a Build Output API directory to `.vercel/output`, and Vercel
deploys it as one Node.js function (which serves `/api/*` and SSR) plus static
assets. Do **not** set `outputDirectory` (`.vercel/output/static`) — that
publishes static files only and every `/api/*` request returns 404.

1. Import this repository in Vercel; the TanStack Start / Nitro preset is detected automatically.
2. Add `MONGODB_URI` under Project Settings → Environment Variables for Production, Preview and Development.
3. MongoDB Atlas allows traffic by IP allow-list, and Vercel's outbound IPs are not fixed — configure the allow-list your deployment needs, otherwise `/api/*` returns `503` with "MongoDB could not be reached".
4. After deploying, verify `https://<deployment>/api/nurses` returns JSON with the `x-data-source: mongodb` response header.

To reproduce the deployed output locally:

```sh
npm run build
npx srvx --port 4321 --static .vercel/output/static .vercel/output/functions/__server.func/index.mjs
```
