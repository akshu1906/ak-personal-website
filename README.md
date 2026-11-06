# Akshita Choudhury — Portfolio

Personal portfolio built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build to ./dist
```

## Editing content

All copy lives in `src/data/content.ts`: profile links, experience (most recent first), impact stats, projects, skills and awards.

- **Résumé:** replace `public/resume.pdf`. Every "View résumé" link points at it.
- **Photo:** replace `public/about.jpg`.

## Structure

```
src/
  components/  Sidebar, About, Experience, Projects, Recognition, Contact
  data/        content.ts
  layouts/     Layout.astro (fonts, meta, theme bootstrap)
  pages/       index.astro (page + interactions script)
  styles/      global.css (light/dark color tokens)
```

## Deploy

Push to `main`; `.github/workflows/deploy.yml` builds and publishes. In repo settings → Pages, set the source to **GitHub Actions**. If the site is served from `<user>.github.io/<repo>`, set `base: '/<repo>'` in `astro.config.mjs`.
