# Ali Yasser Ali — Cybersecurity Portfolio

This is a static React/Vite portfolio for Ali Yasser Ali. It uses a data-driven profile, a lightweight SVG network field, responsive CSS, and accessible archive interactions.

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

For a production build:

```bash
pnpm build
pnpm preview
```

The production output is written to `dist/`.

## Editing the content

The editable source of truth is `src/data/profile.ts`. Update profile links, contact email, case studies, achievements, certifications, and Medium articles there. Add the actual CV as `public/cv.pdf`; the existing download action intentionally displays the remaining asset requirement until that file is supplied.

The contact form is intentionally transparent. When `profile.contactEmail` is empty it reports that configuration is missing. After adding a verified email address in the data file, the form prepares a `mailto:` message and does not claim delivery through a backend.

## Static deployment

Deploy the repository to Vercel, Netlify, GitHub Pages, or another static host with the following build settings:

- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm build`
- Output directory: `dist`

Set the deployed site’s canonical URL in the SEO metadata and `public/sitemap.xml` before submitting it to search engines. The project includes `public/manus-routes.json`, `robots.txt`, a favicon, and a static sitemap placeholder.

## Content and disclosure note

The public archive deliberately uses CV-supported details and sanitized summaries from the supplied Medium write-ups. It does not publish private client report contents, credentials, secrets, unapproved proof-of-concept material, bounty totals, or invented metrics.
