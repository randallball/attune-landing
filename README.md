# Attune Landing

Static landing page for Attune—passive biomarker insights from a smart toilet.

## Getting started
1) Clone: `git clone https://github.com/randallball/attune-landing.git`
2) Open `index.html` in your browser (no build step needed).
3) Edit `styles.css` or `index.html` to adjust copy/design; refresh to see changes.

## Deploying
Any static host works (GitHub Pages, Vercel, Netlify, S3). Serve the repo root so `index.html`, `styles.css`, and `script.js` are available.

## Messaging Segments
Use URL params to switch landing-page messaging without separate deployments:

- `/?segment=performance` (default experience)
- `/?segment=screen` (subscription purchase flow for wellness tracking)

You can combine this with pricing/UTM params, for example:
`/?segment=screen&price=39&utm_source=meta&utm_campaign=screen_test`

## Screen Purchase Flow

- Screen CTAs route to `/checkout/` (account-first flow with OTP login)
- Successful checkout routes to `/purchase-success/`
- Subscription offer: `$20/month` including `20 strips/month`
