# NEXT BET — India Consumer AI Intelligence

An independent research and interactive investing experiment by Ishaan Singh. Not affiliated with Bessemer Venture Partners.

## What is working
- Responsive, branded investment research site with six original market theses.
- Research landscape with nine real company/benchmark entries. Explicit classifications distinguish incumbents, enablers and adjacent companies from investable startups.
- Three opinionated diligence memos with bull/bear cases, falsification tests and citations.
- A Gemini-backed analyst with three modes: fresh signals, startup screening, red-team. Grounding citations are returned when available.
- Robust fallback when Gemini is not configured; no fabricated live feed.
- No database or recurring bill required for the starter implementation.

## Deploy to Vercel (free-first)
1. Create a **private** GitHub repository (or public if you want the source visible). Upload the contents of this directory to its root. Never upload a real `.env` file.
2. Vercel → Add New → Project → Import repository. Framework preset: **Other**. Root Directory: repository root. Deploy.
3. Open [Google AI Studio API keys](https://aistudio.google.com/app/apikey). Create an API key for a free-tier project, subject to current quotas, region and terms.
4. Vercel → Project → Settings → Environment Variables. Add `GEMINI_API_KEY` with the key value. Add `GEMINI_MODEL` = `gemini-2.5-flash` (or a currently available free-grounded model). Enable for Production, Preview, Development as appropriate. Redeploy.
5. Test **Intelligence Lab** with a fresh query; verify live source links and grounding banner. Never place the API key in public browser code.
6. Review autobiographical statements and replace the placeholder LinkedIn link with your actual link. Read every thesis before using it as your application.

## Free-tier reality check
Google's pricing document currently lists free Gemini 2.5 Flash text and up to 500 Google Search-grounded prompts/day on free tier (shared with Flash-Lite), subject to account quotas. Confirm in your own AI Studio project. The API returns 429 when exhausted. It does **not** provide continuously updated saved data: the research is performed on demand and is timestamped. Vercel Hobby has its own limits. Public endpoints can be abused; for a widely shared app, add a real per-IP rate limit, CAPTCHA, or gated access and budget alert before enabling an exposed API key.

## Development and checks
`npm test` runs data and API validation tests. `npm run check` syntax-checks client/server JS. For local Vercel function preview, install Vercel CLI: `npx vercel dev` and provide a local `.env` containing `GEMINI_API_KEY`. For a no-key visual preview run `python3 -m http.server 8000 --directory public` and open `http://localhost:8000`; the live API will not work in this static-only preview.

## Editorial standards
- Category scores are manually assigned **conviction scores**, not data-derived forecasts or real-time metrics.
- Evidence links support market context. They don't independently establish each speculative thesis.
- No claims about unverified financing, revenue, active fundraising, usage counts or investments.
- The company list is illustrative, not exhaustive.
- The Gemini answer must be cross-checked. AI can hallucinate and generate false inferences even with Search grounding.
- Stronger next edition: investor-grade founder interview notes, dated funding disclosures, a sourced company database, cohort data, versioned investment memos and a source-reviewed change log.

## Stack
Vanilla JS modules + CSS, Vercel Node serverless endpoint, Google Gemini REST API. No npm runtime dependencies or paid subscription required.
