# Ali Yasser | Penetration Testing Portfolio

An English portfolio for Ali Yasser featuring penetration testing, responsible bug-bounty research, projects, credentials, and technical field notes.

## Motion and sound

The site includes a bright pointer-responsive cybersecurity network, animated scanning/data pulses, parallax in the hero, a moving assessment-scope ticker, scroll progress, counters, and restrained 3D card motion. A custom high-energy cinematic electronic cyber-thriller score is available from the header; it fades in and out, stays off until explicitly started, and never autoplays. The interface honors `prefers-reduced-motion`.

## Run locally

Requires Node.js LTS and pnpm.

```bash
pnpm install
pnpm dev:static
```

Build with `pnpm build:static`; static output is in `dist/public`.

## GitHub Pages

This is a source bundle, not a preconfigured Pages workflow. For a repository Pages URL, configure Vite’s base path and a Pages workflow for that repository.

The downloadable CV PDF is included; review its personal contact details before making the repository public. `.env` files and credentials are excluded; never commit secrets.
