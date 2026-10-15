# NEXT BET — capital-news reliability update

Built from the existing V5 app, preserving `api/analyze.js` (`gemini-3.5-flash-lite`), `/api/analyze.js`, the Bessemer application note, local Past Research, and follow-up questions.

## What changed
- New `/api/capital-news.js` searches public Google News RSS headlines for recent funding/pullback signals (no API key required).
- Two sections now show headline, publication date and direct article link rather than a permanent “Not verified” placeholder.
- The UI calls them **Funding signals** and **Pullback signals** — not verified investor transactions. Inapplicable or inaccessible news returns a plain explanation.
- The original Gemini model and JSON-generation configuration remain unchanged, with Google Search grounding still disabled. Thus the rest of the investment analysis is preliminary, not independently sourced.

## Deploy
Upload **all** updated `api/` and `public/` files from this project to your existing repository, plus `tests/news.test.js`. Keep your Vercel Environment Variables intact. No new key or dependency needed. `npm test` and `npm run check` validate the code locally.

## Operational limitations
News is found by keyword, not a database of verified financing or transactions. Some headlines may be only loosely related to the thesis; users must open and verify source articles. Feeds can throttle/block automated traffic, resulting in a clearly shown empty or unavailable state. Headline links may point through Google News. Historical notes saved in the browser are not automatically re-researched; select **Research again** to update them.

**Before sharing with Bessemer, test two real theses on the deployed URL**, verify each source link and ensure Past Research opens the saved reports. Live RSS and Gemini calls cannot be exercised without Vercel/network access.
