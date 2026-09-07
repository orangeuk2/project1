# VedaNova

Original API-first astrology consultation demo inspired by the functional breadth of AstroKuberChat, but rebuilt with its own branding, UX, copy, structure and implementation.

## Included

- Expert marketplace with specialty filters
- Expert profiles and demo consultation chat
- Shared birth-profile form
- Tool library with routes for Kundli, Dasha, compatibility, numerology, D60/Past Life, Astro GPS and future modules
- Daily Panchang/transit brief
- Celebrity-chart research catalogue
- Premium report catalogue
- Personal dashboard
- Light/dark themes and responsive layouts
- Original SVG logo, hero artwork and visual system
- Hono backend stub serving all demo data through HTTP APIs
- Shared TypeScript contracts between frontend and backend

## Architecture

```text
apps/
  web/       React + Vite frontend
  api/       Hono API stub
packages/
  contracts/ Shared TypeScript DTOs
```

The frontend never imports demo domain data directly. It talks to `/api/*` via `apps/web/src/lib/api.ts`, so the static backend can later be replaced by real auth, storage, Swiss Ephemeris calculations, LLM consultation, billing and realtime presence without redesigning the UI.

## Run

```bash
npm install
npm run dev
```

Web: `http://localhost:5173`
API: `http://localhost:8787`
Health: `http://localhost:8787/api/health`

## Demo endpoints

- `GET /api/home`
- `GET /api/experts`
- `GET /api/experts/:id`
- `POST /api/chat/sessions`
- `POST /api/chat/sessions/:id/messages`
- `GET /api/tools`
- `POST /api/tools/kundli`
- `POST /api/tools/compatibility`
- `POST /api/tools/numerology`
- `POST /api/tools/past-life`
- `POST /api/tools/astro-gps`
- `GET /api/panchang`
- `GET /api/celebrities`
- `GET /api/profile`
- `GET /api/reports`

## Production next steps

1. Add deterministic Swiss Ephemeris calculations behind the current tool contracts.
2. Add authentication, encrypted birth-profile storage and user consent controls.
3. Add provider presence, scheduling, websocket chat and conversation persistence.
4. Add billing/wallet/entitlements and real report generation.
5. Add rate limits, audit logs, abuse protection and observability.
6. Add E2E tests and CI deployment previews.

> Demo data and interpretations are illustrative only; the current stub does not claim astronomical accuracy.
