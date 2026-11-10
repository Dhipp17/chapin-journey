# Chapin + Salesforce: Future-State Journey

Static site, no build step. Open `index.html` or host on GitHub Pages.

| File | What it holds |
|---|---|
| `index.html`, `styles.css` | Layout and Salesforce-branded styling |
| `data.js` | Roadmap and the six journey tabs |
| `why.js` | "Why Salesforce" statement, pillars, proof points |
| `faqs.js` | salesforce.com FAQs with source links (also searched by Ask) |
| `slides.js` | Overview-deck slide cards and the Ask knowledge base |
| `render.js`, `agent.js` | Page rendering and the Ask assistant |

## Publish on GitHub Pages
1. Create a **private** repo (Pages on private repos needs GitHub Pro/Team/Enterprise).
2. Push these files to `main`.
3. Settings > Pages > Source: `main` / root.

## Logos
- Chapin: `assets/chapin-logo.png` (included). Falls back to a text wordmark if missing.
- Salesforce: the header uses a text wordmark. Swap in the official logo from Salesforce brand resources.

## Ask assistant
Answers come from the Chapin knowledge base in `slides.js` plus the salesforce.com FAQs in `faqs.js`. If a question matches a salesforce.com FAQ more closely, that answer leads with a link to its source page; otherwise the Chapin answer leads and the best FAQ appears as a quick answer underneath. It uses keyword retrieval with no external calls, so it is deterministic and safe to demo offline. To add or change answers, edit the `KB` array. To power it with a live model, replace the `search()` call in `agent.js` with a call to your own server-side endpoint; never put an API key in this repo.

## Slide images
Cards show a condensed text version of each overview slide and link to the slide in Google Slides (viewers need access to the deck). To show the real slide image, export the slide as PNG to `assets/slides/<id>.png` using the ids in `slides.js` (for example `roi.png`); the card uses it automatically.

## Content notes
- No pricing or contract terms are included.
- Customer results are labelled Achieved or Projected as the source describes them. Verify before external use.
- The Slack tab is marked "Proposed"; it was not part of the scoped work.
- The page is `noindex`; share the link only with Chapin.
