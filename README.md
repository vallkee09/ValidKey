# Valerii Kovalenko — personal website

Next.js App Router with static export for Cloudflare Pages, React, TypeScript and Tailwind CSS. English-language editorial site for Quality Engineering, AI in QA, QA leadership and personal consultations.

## Local development

```sh
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3101
```

## Verification

```sh
npm test
npm run lint
npm run build
WRANGLER_SEND_METRICS=false npm run preview
# In another terminal:
npm run test:smoke
```

## Structure

- `app/page.tsx`: homepage and biography.
- `app/radar`: Radar introduction and reading page. The first page is an editorial draft, not a weekly news edition.
- `app/skills`: two human-guided AI workflow playbooks.
- `public/playbooks`: downloadable Markdown with prompts, fictional examples and review criteria. Not installed agent skills; no production-validation claims.
- `app/consultations`: two audiences and a browser-only message builder.
- `lib/site.ts`: identity, existing contact destinations, production-origin configuration.

The brief builder does not submit, store or send personal data. Clipboard access follows an explicit button click and has a manual-copy fallback. Contact happens on LinkedIn or Telegram. No newsletter, account, payment or booking integration is configured. No third-party analytics are loaded.

## Content and assets

The site serves a precompressed 960 × 1200 WebP portrait (about 81 KB) without an image server. The name-based wordmark and K favicon use the site's graphite and warm-white palette. Open Graph and Twitter metadata share a 1200 × 630 PNG card in `public/images`.

## Cloudflare Pages

The build uses the supported Webpack pipeline to avoid Turbopack’s restricted local subprocess-port requirement. Use Node.js 22 (`.node-version`), install `npm ci`, build `npm run build`, output directory `out`. The Git repository root is the build root (`./`), not `ValidKey`. No server, Workers adapter, Pages Functions, API keys or paid image service is required. `public/_headers` supplies security headers and immutable caching for fingerprinted assets. The exported `404.html` preserves real 404 responses.

`npm run preview` runs the exported files in Wrangler locally on port 3101; it does not deploy them. `next start` is not used for static exports. The consultation page is prerendered; its small client-side message builder reads `?focus=career` or `?focus=leadership` within a Suspense boundary. It defaults to career for missing or unknown values.

Live site: https://valerii-kovalenko.pages.dev. Project: valerii-kovalenko, using Direct Upload. The workflow in `.github/workflows/cloudflare-pages.yml` verifies pull requests and main. Once its deployment secret and activation variable are configured, passing main builds update this same Pages project. Built-in Git integration is not used. Setup and rollback instructions are in [docs/deployment.md](docs/deployment.md).

## Publication controls

The initial Cloudflare deployment was explicitly approved and completed on 2026-09-22. Future pushes, deployments, external automations or publication changes still require authorization within the current task scope. Default metadata is noindex and robots.txt disallows crawling. After approval, set `SITE_URL` to the real HTTPS origin and `SITE_INDEXABLE=true` at build time to enable canonical URLs, sitemap entries and indexing. An empty sitemap in the local preview is intentional.

Next: complete the one-time GitHub Actions credential setup and enable search indexing after final content review. The initial deployment deliberately retains noindex. Consultation format is approved: 60 minutes plus a short written summary with next steps.
