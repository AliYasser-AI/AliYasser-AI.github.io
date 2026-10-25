# Ali Yasser | Penetration Testing Portfolio

Portfolio source for Ali Yasser featuring penetration testing, bug-bounty research, projects, credentials, and technical field notes. Includes a pointer-responsive cybersecurity network backdrop, animated scope ticker, scroll progress, counters, and restrained card interactions. A custom 30-second ambient cyber sound loop is opt-in from the header and never autoplays. The site honors `prefers-reduced-motion`.

## Run locally

Requires Node.js LTS and pnpm.

```bash
pnpm install
pnpm dev:static
```

Build the static site with `pnpm build:static`; the output is written to `dist/public`.

## GitHub Pages

This source bundle is not a preconfigured Pages workflow. For a project Pages URL such as `username.github.io/repository`, configure Vite’s base path and a Pages build workflow for that repository.

The downloadable CV PDF is included; review personal contact details before making the repository public. `.env` files and credentials are excluded—never commit secrets.
