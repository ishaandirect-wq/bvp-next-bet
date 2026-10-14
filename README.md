# NEXT BET — a place to test ideas

A simple personal research notebook by Ishaan Singh. Built for Vercel with a free-tier Gemini API key (where eligible).

## What it does

1. Write any investment thesis.
2. See arguments for and against, capital activity, assumptions, relevant businesses and next questions.
3. Ask contextual follow-up questions.
4. Reopen, refresh, search, export, import, or delete past research.

## Deploy

Upload the **contents of this folder** to your existing GitHub project (replace old files). Vercel deploys automatically. Keep `GEMINI_API_KEY` configured as a server-side environment variable in Vercel. The default model is `gemini-2.5-flash`, override with `GEMINI_MODEL` if needed. No API key goes in public files. Vercel has no required build step.

## Test

Run `npm test` and `npm run check` with Node 20+. You can run locally with `npx vercel dev` after configuring Vercel's local environment. Live Gemini research needs a working key, search grounding access and free quota.

## How past research works

Saved in `localStorage` on the user's browser, not a server. It persists across browser restarts **on the same device and same domain**. Export JSON to back up or transfer it. Clearing browser data, using incognito, or changing domains can make history inaccessible. It does not automatically sync or allow collaborators to view it. No fabricated sample history is included. For a Loom demo, run your real example theses, then show the Past research tab.

## Research limitations

Gemini is asked to use Google Search, but grounding depends on the model, service, and quota. The application shows URLs that the provider returns, however these are a *reading list*, not per-claim verified citations. Some information may be incomplete, outdated or wrong; check primary documents for important investment claims. The free quota is not guaranteed. Unverified 'pulling back' actors should not be asserted as confirmed divestments. There is no automatic background research refresh: `Research again` runs a fresh request.

## Scope

This is deliberately a small personal project, not an enterprise research platform. No user accounts, payments, shared workspace or scheduled refresh.
