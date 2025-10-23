
# Purchase Power ⚡

A Stuff-inspired (but independently implemented) affiliate review site. Built with Next.js (App Router) + Tailwind, with light/dark themes and seeded content.

## Features
- Next.js 14 App Router
- Tailwind CSS
- Light/Dark theme (next-themes)
- 10 main categories, seeded products
- Product pages with an honest, lightly cheeky tone (24-year-old reviewer energy)
- Client-side "Midas" keyword randomizer that replaces `{keyword}` in affiliate URLs and blocks referrers

## Quick start
```bash
pnpm i   # or npm i / yarn
pnpm dev # or npm run dev
```

## Vercel deploy
1. Push this folder to a GitHub repo.
2. In Vercel, click **New Project** → **Import** the repo.
3. Framework = Next.js, Build command = `next build`, Output = `.next` (auto-detected).
4. Deploy.

## Customize
- Edit `data/categories.json` and `data/products.json`.
- Logo: `/public/logo.svg` (blue + cyan charging motif).
- Keywords for affiliate links: set `window.MIDAS_KEYWORDS` in `app/layout.tsx`.
- Add more API routes in `app/api/*` if needed.
