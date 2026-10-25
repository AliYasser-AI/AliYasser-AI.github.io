# Ali Yasser | Penetration Testing Portfolio

Source bundle for Ali Yasser’s personal penetration-testing portfolio. The site highlights his web/API, network, Active Directory, and Android testing experience, responsible bug-bounty research, selected projects, credentials, and five technical field notes.

## Run locally

Requirements: Node.js LTS and pnpm.

```bash
pnpm install
pnpm dev:static
```

For a production static build:

```bash
pnpm build:static
```

The generated site is written to `dist/public`.

## GitHub note

This archive is prepared for uploading as a source repository. It is not preconfigured with a GitHub Pages workflow. If you deploy from a repository subpath (for example `username.github.io/repository`), configure Vite’s `base` path and the Pages build workflow for that repository.

The downloadable CV PDF is included. Review the personal contact details in it before making the repository public. No `.env` files or API credentials are included; keep secrets out of GitHub.
