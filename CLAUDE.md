# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Astro dev server
npm run build     # Static build to dist/
npm run preview   # Serve the built dist/ locally

# Docker (mirrors production)
docker build -t professional-site .
docker run -p 8080:80 professional-site
```

There is no test runner and no lint script — `AGENTS` references `npm run lint`, but only `dev`/`build`/`preview`/`astro` exist in `package.json`. Treat `npm run build` (which type-checks via `astro/tsconfigs/strict`) as the verification step before committing.

## Architecture

**Static Astro site, Portuguese-first, with full English mirror.** All pages are pre-rendered at build time and served by Nginx — there is no SSR runtime.

### i18n routing — three coordinated redirect layers
The site has two locales (`pt` default, `en`). Each page exists twice under `src/pages/pt/<page>.astro` and `src/pages/en/<page>.astro`; **there are no shared route components** — when adding or changing a page, edit both copies. Root `/` redirects to `/pt/` in **three places** that must stay in sync:
- `astro.config.mjs` — `redirects: { '/': '/pt/' }` (dev + build)
- `nginx.conf` — `location = / { return 302 /pt/; }` (production runtime, instant; this is why the meta-refresh fallback in `src/pages/index.astro` rarely fires)
- `src/pages/index.astro` — meta-refresh + JS fallback for static hosts without rewrite rules (e.g., GitHub Pages)

i18n helpers live in `src/i18n/` — `useTranslations(lang)` returns a `t(key)` function backed by the flat `ui` dict in `src/i18n/ui.ts`. Keys missing in a locale fall back to `defaultLang` ('pt'). When adding a string, add it to **both** `pt` and `en` blocks of `ui.ts`.

### Layout & SEO
`src/layouts/BaseLayout.astro` is the single layout — it owns `<head>`, hreflang alternates, Open Graph/Twitter cards, and the `ProfilePage` JSON-LD structured data. Hardcoded `siteUrl = 'https://marcelojr.com.br'`; canonical/OG URLs are built against it regardless of where the build is served. Pass `lang` so `htmlLang`/`ogLocale`/JSON-LD jobTitle render correctly.

### Tailwind v4 configuration
Uses `@tailwindcss/vite` (not PostCSS). The `tailwind.config.mjs` is loaded via `@config '../../tailwind.config.mjs';` at the top of `src/styles/global.css` — this is how v4 picks up the legacy-style `theme.extend` (custom colors `surface`/`primary`/`accent`, `rounded-bento`, `shadow-card`/`shadow-glow`, and the Inter/JetBrains Mono font stacks). The repo-root `styles.css` is legacy and unused — do not edit it; styles live in `src/styles/global.css`.

### Dual-target builds
`astro.config.mjs` switches `base` to `/professional-site` when `GITHUB_ACTIONS=true` so the GitHub Pages preview (`.github/workflows/static.yml`) works under a subpath; production (Dokploy) builds with `base: '/'`. When referencing assets, use `import.meta.env.BASE_URL` (see `base` usage in page frontmatter) rather than hardcoding `/`.

### Deploy
Production: push to `main` → Dokploy webhook → multi-stage Docker build (`node:20-alpine` → `nginx:alpine`) → Docker Swarm on Hostinger VPS behind Traefik. Preview: same push triggers `.github/workflows/static.yml` → GitHub Pages.

## Conventions from `AGENTS`
- Dark-first design (Slate/Zinc 900 background, Indigo/Violet primary accents — encoded in `tailwind.config.mjs`).
- Case studies follow the **Problema → Solução Arquitetural → Resultados** structure (see `caseStudies` array in `src/pages/{pt,en}/index.astro`).
- Skills grouped by capability layer (Cloud, Backend, DevOps, Observability).
- `execution-plan.md` is intentionally untracked — never stage or commit it.
