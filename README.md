# Northstar AI Consulting

A static, single-page marketing site built with Astro + Tailwind CSS.
Editorial, minimal aesthetic. Zero JavaScript shipped to the client outside of the small reveal/nav scripts.

## Stack

- **Astro 5** (static output)
- **Tailwind CSS** (custom palette + Inter / Inter Tight via Google Fonts)
- **TypeScript**
- **lucide-static** for icons (SVG strings, no runtime JS)

## Project structure

```
src/
  components/    One file per section (Nav, Hero, WhyMe, Services, HowItWorks, About, BookACall, Footer, SectionDivider)
  data/          services.ts (six service cards) and bio.ts (about copy)
  layouts/       Layout.astro — global head, fonts, reveal-on-scroll script
  lib/           icon.ts — reads lucide-static SVGs at build time
  pages/         index.astro — the single page that imports all sections in order
  styles/        global.css — Tailwind layers, component classes, animations
public/          Static assets (favicon)
```

To edit copy: open `src/data/services.ts` or `src/data/bio.ts`, or the section component itself.

## Local development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321/` by default.

## Production build

```bash
npm run build       # outputs to ./dist
npm run preview     # serve ./dist locally
```

`output: 'static'` is set in `astro.config.mjs`, so `dist/` is plain HTML/CSS/JS suitable for any static host.

## Replacing the 3D hero embed

Open `src/components/Hero.astro`. There's a comment marker:

```html
<!-- REPLACE WITH SPLINE/THREE.JS EMBED -->
```

Replace the placeholder `<div>` immediately below it with your Spline / three.js / iframe embed.
The slot is `min-h-[360px] lg:min-h-[500px]` and rounded — match those constraints.

## Deploying to Railway

This site is fully static, so any Railway service that serves the `dist/` folder works. The simplest path:

1. Push this repo to GitHub.
2. In Railway: **New Project → Deploy from GitHub repo** → pick this repo.
3. Railway auto-detects Node. Set the following:
   - **Build command:** `npm run build`
   - **Start command:** `npm run preview`
   - **Root directory:** (leave blank)
4. Railway injects `PORT` automatically; `npm run preview` reads it (`astro preview --host 0.0.0.0 --port $PORT`).
5. Once deployed, go to **Settings → Networking → Custom Domain**, add your domain, and set the CNAME at your registrar to the value Railway shows.

Alternative (recommended for pure static): use a static-hosting service like Caddy/Nginx via a custom Dockerfile and serve `dist/` directly. The `astro preview` approach above works out of the box on Railway with no Dockerfile.

## Accessibility

- Semantic HTML (`section`, `header`, `footer`, `nav`, `article`, `ol`)
- Single `h1` (hero), one `h2` per section
- `prefers-reduced-motion` disables reveal and hero stagger animations
- Keyboard-accessible mobile menu, Esc to close

## Style tokens

Defined in `tailwind.config.mjs`:

| Token | Value |
| --- | --- |
| `bg-background` | `#FAFAF8` |
| `bg-surface` | `#FFFFFF` |
| `text-text-primary` | `#0A0A0A` |
| `text-text-secondary` | `#6B6B6B` |
| `text-accent` / `bg-accent` | `#C2410C` |
| `border-border-subtle` | `rgba(10,10,10,0.08)` |
| `border-border-hover` | `rgba(10,10,10,0.20)` |
| `bg-divider` | `rgba(10,10,10,0.06)` |
