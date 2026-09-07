# VedaNova

VedaNova is an original API-first astrology consultation and research demo inspired by the *functional scope* of large astrology marketplaces. It does **not** copy AstroKuberChat branding, text, proprietary assets or production calculations.

## What is implemented

### Consultation marketplace
- Expert directory with practice, language, availability and search filters.
- Full expert profile pages with methods, biography, rate and availability.
- Interactive demo chat sessions with suggested prompts, timer and wallet indicator.
- Consultation history and future-ready scheduling surfaces.

### Astrology tool workbench
Every tool has its own URL and server-backed interactive demo result. Current catalog includes:
- Birth Chart D1
- Vimshottari Dasha
- Compatibility / Guna Milan
- Nakshatra Deep Analysis
- Name Numerology
- Deep Numerology & Lo Shu
- Rahu Placement
- Astro GPS
- 20-Year Life Arc
- Astro Visualization
- Life Replay
- Varshaphal
- D27 Saptavimshamsha
- 9-Planet Effects & Remedies
- Bhrigu Bindu
- KP Sub-Lord Console
- Past Life D60
- Navamsa D9
- Rudramsha D11
- Hora D2 Wealth
- Doshas & Remedies
- Raja Yogas
- Divisional Charts D1 → D60
- Muhurat Finder
- Marriage Muhurat
- Ishta Devata
- Ashtakavarga
- Rashi Tulya Navamsa
- Kalachakra Dasha
- Chakra & Purushartha Map
- Wealth Programming
- Celebrity Chart Match
- Career Compass

### Research & content
- Daily Panchang/brief demo.
- Celebrity database with category/search filters and detail pages.
- Journal index and article pages.

### Commerce & services
- Premium report list, detail, preview and demo purchase.
- Gemstone-store list, product detail and safe demo checkout.
- Private-reading booking page.
- Learning-course enrollment page.

### Account & operations
- Dashboard.
- Shared birth profile with API save.
- Demo wallet + top-up flow.
- Consultation history.
- Demo sign-in surface.
- Astrologer portal with metrics, queue and application flow.

## API-first rule

The frontend never imports server mock data. All catalog content and results are returned through HTTP endpoints under `/api`. Production integrations can replace the static implementation without changing page URLs or component contracts.

Important: all astrology values currently returned by the server are **static demo placeholders**. The project intentionally does not claim Swiss Ephemeris or deterministic Vedic accuracy until a real calculation engine is integrated.

## Monorepo

```text
apps/
  api/              Hono/Node demo API
  web/              React + Vite frontend
packages/
  contracts/        Shared TypeScript DTOs
```

## Run locally

```bash
npm install
npm run dev
```

Frontend: http://localhost:5173  
API: http://localhost:8787

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Production integration points

1. Replace `apps/api/src/results.ts` with deterministic astrology services (e.g. Swiss Ephemeris-based computation plus explicitly versioned Vedic rules).
2. Persist users, birth profiles, consultations, wallet ledger, orders and reports in a database.
3. Add OAuth/session auth.
4. Add real expert presence, scheduling, messaging and moderation.
5. Add a payment provider and idempotent order/webhook handling.
6. Add location autocomplete, timezone resolution and geocoding.
7. Add AI interpretation only after calculated chart facts are produced and validated.
8. Add observability, rate limiting, CSRF/session protections where appropriate, tests and deployment pipelines.
