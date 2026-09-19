# Goodmech CNC Solutions — Website

Marketing site for Goodmech CNC Solutions (Punjab, India): forging simulation, CAD/CAM software, WIDMA CNC machines and GO3D printers.
Built with React 19, TypeScript, Vite and Tailwind CSS v4; deployed to GitHub Pages.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173/Goodmech-CNC-solutions/
npm run build     # type-check + production build → dist/
npm run preview   # serve the production build locally
npm run lint
```

Requires Node 20+.

## Project layout

```
index.html              entry point, fonts, meta
public/                 static files copied as-is (favicon, spec-guide PDF)
src/
  main.tsx              router + app bootstrap
  App.tsx               routes and page shell
  index.css             Tailwind v4 @theme tokens and global styles
  components/           Header, Footer, ProductShowcase, HeroProductPage, …
  pages/                one file per route
  data/
    company.ts          contact details, locations, authorised principals
    products.ts         product catalogue by category
    heroProducts.ts     the three flagship products with dedicated pages
  assets/               logo and client-supplied product artwork
.github/workflows/      GitHub Pages deploy (runs on push to main)
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/simufact`, `/solidworks`, `/worknc` | Flagship product pages |
| `/machines` | WIDMA CNC machines |
| `/software` | CAD/CAM software |
| `/cae` | CAE / simulation software |
| `/printers` | GO3D 3D printers |
| `/quote` | Quote request |

## Deployment

Every push to `main` builds and publishes `dist/` to GitHub Pages via `.github/workflows/deploy.yml`.
`vite.config.ts` sets `base: '/Goodmech-CNC-solutions/'` so asset paths resolve under the repo sub-path; change it if the repo is renamed or moved to a custom domain.

## Content changes

All copy, contact details and product data live in `src/data/`. Client briefs, screenshots and the content-verification checklist are kept outside this repository.
