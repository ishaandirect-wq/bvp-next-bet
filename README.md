# NEXT BET — Simple Research Notebook (v2)

An independent research project by Ishaan Singh on where Indian Consumer AI businesses might emerge.

## What changed

- Removed the command center, radar, scores, company dashboard and investment committee language.
- Kept three clear experiences: **My theses**, **Challenge a thesis**, and **Research your own idea**.
- Six short thesis articles explain the belief, reasoning, relevant companies, disconfirming evidence, test plan and starting sources.
- Gemini runs only when a visitor requests research or a counterargument. Its output is shown separately from Ishaan's own views.
- Designed for a simple 60–90 second Loom walkthrough.

## Deploy on Vercel

1. Push the contents of this `next-bet` folder to your GitHub repository (root should contain `package.json`, `public/`, `api/` and `vercel.json`).
2. In Vercel, import or redeploy the repository. Framework preset: **Other**; output directory: **public**, if asked.
3. Under Vercel Project Settings → Environment Variables, add `GEMINI_API_KEY` using a key from https://aistudio.google.com/app/apikey. Do not put it into public frontend code or into GitHub.
4. Redeploy and test both "Research the idea" and "Challenge my assumptions". Gemini grounding/quota may vary; no guarantee of free requests or verified real-time findings.

## Run checks

Requires Node.js 20 or later.

```bash
npm test
npm run check
```

## Limitations

- The thesis notes are exploratory opinions, not independent primary market research. Source links are contextual and must be manually reviewed before using in an application.
- AI research happens on demand, not automatically in the background. Gemini responses can be mistaken and are not a database of reliably updated companies.
- The original backend uses Google Search grounding; if the API tier/model does not support this for your key, the feature may return an error.
- Avoid placing confidential company information into the public research form.
- This project is independent and not affiliated with Bessemer Venture Partners.
