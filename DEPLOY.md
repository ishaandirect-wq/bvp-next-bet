# NEXT BET V7 — capital coverage reliability patch

Only these files changed relative to V6:
- `api/capital-news.js` — topic-aware headline searches, 4 concurrent RSS queries, conservative capital-event filtering and a direct live Google News search fallback.
- `public/app.js` — link text differentiates a genuine article source from a search page; clearer research disclosure.
- `tests/news.test.js` — updated and expanded test coverage.

## Deploy
Replace the above files in the existing GitHub repository, commit to main, and allow Vercel to redeploy. Do not alter your Gemini environment variables or existing saved history. Browser history remains in the same localStorage key.

## Validate
1. Search `Indian healthtech companies will attract more funding.`
2. Review 'Funding signals' and 'Pullback signals'. Click **Read source** for a dated headline, or **Search news** to look up an area that lacks matching coverage.
3. Try an unrelated thesis and revisit Past research. Check that previous entries are still present.

News articles and search results are research leads, not a complete funding database. Public news feeds can be unavailable, and individual articles need manual verification. No production Google News or Gemini calls were performed during offline testing.
