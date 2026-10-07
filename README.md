# Tial Construction Ltd — Website

Marketing site for **Tial Construction Ltd** — general building construction, civil & structural works, renovations, project management and roadworks in Uganda.
_"Building on Trust, Leading with Integrity."_

**Live site:** https://ashi145.github.io/TIAL-construction/

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite 7](https://vite.dev) build tool
- [Tailwind CSS 4](https://tailwindcss.com) (`@tailwindcss/vite`)
- [React Router 7](https://reactrouter.com) for client-side routing
- `vite-plugin-singlefile` — production build is a single self-contained `index.html`

## Getting started

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
```

Other scripts:

```bash
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Project structure

```
src/
  components/   Header, Footer, cards, buttons, layout pieces
  pages/        One file per route (Home, About, Services, Projects, ...)
  data/
    content.ts  All site copy: services, projects, team, insights, contact details
    images.ts   Image imports and stock photo URLs
  App.tsx       Route table
  index.css     Tailwind entry + theme
public/         Favicon and other static files
```

Most day-to-day edits happen in `src/data/content.ts` (text) and `src/data/images.ts` (pictures).

## Deployment

The site deploys itself to **GitHub Pages** on every push to `main` via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. `npm ci && npm run build`
2. `dist/index.html` is copied to `dist/404.html` so deep links (e.g. `/about`) work on Pages
3. The `dist/` folder is published with `actions/deploy-pages`

Because the site lives under `/TIAL-construction/`, `vite.config.ts` sets `base` for production and `App.tsx` passes `import.meta.env.BASE_URL` as the router `basename`. Local dev stays at `/`.

## Notes

- Stock photography comes from [Pexels](https://www.pexels.com); local images in the repo root are used by `src/data/images.ts` — swap them for Tial's own photography when available.
- See [`SECURITY-CHECKLIST.md`](SECURITY-CHECKLIST.md) before going live with forms or contact handling.
