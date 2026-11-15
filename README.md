# Data Fellows — Website

Marketing website and content backend for **[Data Fellows](https://datafellowsai.com)**, the global data and AI community I founded in August 2022. The site introduces Data Fellows' data analytics offering, explains how the engagement works, and captures leads for consultations and community sign-up.

This repo holds two separate apps: a Next.js marketing frontend and a Payload CMS backend.

## Architecture

```text
frontend/   Next.js 14 app (App Router) — the public-facing marketing site
backend/    Payload CMS v2 + Express + MongoDB — admin panel and content API
```

The two apps are independent (separate `package.json`, separate deploys) and share no code. The root `package.json` is a minimal placeholder and isn't used to run either app.

### Frontend

A single-page marketing site (`frontend/app/home/`) built from sections:

- Hero with an image slider and typewriter headline
- Services, "how it works," and pricing
- A "why choose us" feature grid
- A testimonials section
- A login page (`frontend/app/login/`)

Lead capture (consultation requests, "become a Data Fellow") goes through Google Forms links rather than a custom backend form.

**Stack:** Next.js 14 (App Router, Turbopack dev server), TypeScript, Tailwind CSS, MUI, Swiper, Zustand, TanStack Query, React Hook Form, Axios.

### Backend

A [Payload CMS](https://payloadcms.com) v2 instance (`backend/src/`) served through Express, with:

- `Users` collection — admin accounts, each with a `dashboard_link` field
- `Media` collection — asset uploads
- Custom logo/icon components for the Payload admin UI
- An image upload hook that pushes files to ImgBB / freeimage.host instead of local storage

**Stack:** Payload CMS v2, Express, MongoDB (via `@payloadcms/db-mongodb`), TypeScript, deployed as a Vercel serverless function (`backend/vercel.json`).

## My contribution

I founded Data Fellows and directed this site: the frontend content and structure, and the Payload backend used to manage site content and media.

## Run locally

**Frontend** (`frontend/`):

```bash
npm install
npm run dev     # next dev --turbo -p 4000, served on http://localhost:4000
```

Requires environment variables for the contact-form email integration and API base URL (not committed): `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_SMTP_KEY`, `NEXT_PUBLIC_SMTP_SECRET`, `NEXT_PUBLIC_SMTP_PROJECT_ID`.

**Backend** (`backend/`):

```bash
bun install
bun run dev      # starts Payload + Express via nodemon
```

Requires `DATABASE_URI` (MongoDB connection string), `PAYLOAD_SECRET`, `APP_URL`, `PORT`, and image-hosting keys (`IMGBB_KEY`, `UPLOAD_KEY`) — none of which are committed to this repo.

## Status

This reflects an earlier iteration of the Data Fellows site. Data Fellows itself remains active — see [datafellowsai.com](https://datafellowsai.com) for the current site.
