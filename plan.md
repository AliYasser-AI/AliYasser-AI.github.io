# Ali Yasser Ali Cybersecurity Portfolio — Implementation Plan

## Scope

Build a single-page, production-quality portfolio for Ali Yasser Ali using verified CV-supported facts and the supplied Medium URLs. The page is recruiter-first: identity, target roles, evidence, CV access, research, and contact are clear within seconds, while the visual layer creates a distinct command-center / network-archive experience.

## Architecture

- `index.html`: crawler-visible title, description, Open Graph/Twitter metadata, font preconnects, favicon, and the app mount.
- `src/main.tsx`: React entry point and reduced-motion initialization.
- `src/App.tsx`: page composition, interactive state, filtering, modal case-study view, contact behavior, and scroll-aware navigation.
- `src/styles.css`: responsive design system, scanline/grid atmosphere, accessible focus states, reduced-motion rules, layout, and motion.
- `src/data/profile.ts`: single editable source for identity, contact links, experience, education, certifications, CTFs, skills, architecture nodes, case studies, and article records.
- `public/cv.pdf`: reserved for the user-provided CV; the UI exposes an explicit placeholder state until the file exists.
- `public/manus-routes.json`: route manifest for the single public route.
- `public/robots.txt` and `public/sitemap.xml`: static discovery documents without a guessed canonical origin.

The app is static-only. The contact form uses a transparent `mailto:` flow and reports that behavior instead of pretending a message was sent. No server or database is needed for the current scope.

## Design Direction

### Candidate styles

- **Cybernetic editorial**: 0.07 probability — magazine-like typography with circuit annotations and research-led pacing.
- **Blacksite operations console**: 0.05 probability — dark command-center panels, telemetry labels, and restrained neon status signals.
- **Aurora network field**: 0.06 probability — luminous node topology, deep-space gradients, and quiet orbital movement.

### Chosen movement: Blacksite operations console with editorial restraint

- **Core principles**: verified evidence over theatrics; strong hierarchy over dashboard clutter; motion as orientation rather than distraction; technical detail paired with plain-English context.
- **Color philosophy**: near-black and charcoal create a secure, quiet workspace; emerald signals verified or active states; cyan is reserved for links and system context; warm neutral text keeps long-form content readable.
- **Layout paradigm**: asymmetrical editorial flow with a left rail for section identity, wide evidence panels, and offset cards that feel pinned to an intelligence board rather than placed in a generic centered grid.
- **Signature elements**: an emerald network lattice behind the hero, numbered section markers with tiny telemetry captions, and case-study cards styled as archive entries with a confidence/status line.
- **Interaction philosophy**: every interaction reveals context — filters narrow the archive, hover states expose metadata, the case-study modal adds detail, and the terminal preview is decorative but never required.
- **Animation**: slow ambient node drift, pointer parallax within a bounded range, section reveal on scroll, and short state transitions for filters/modals. Respect `prefers-reduced-motion` by disabling movement and keeping content fully visible.
- **Typography system**: Space Grotesk for editorial headings and body text, IBM Plex Mono for labels, telemetry, dates, and code-like fragments. Large headlines are compact and left-aligned; paragraphs use a readable measure.
- **Brand essence**: A methodical offensive-security researcher who turns weak signals into defensible findings. Personality: precise, curious, composed.
- **Brand voice**: direct, evidence-led, quietly confident. Example lines: “Find the weak signal. Validate the impact.” and “A research log built for the details that survive scrutiny.”
- **Wordmark and logo**: `AYA//` paired with a bracketed cursor mark, used as a compact monogram rather than a generic shield.
- **Signature brand color**: `#79F2B0` — a cool emerald used only for verified evidence, focus, and active system states.

## Content Rules

Use only facts supplied in the brief and the CV-backed details. The six supplied Medium URLs are represented as article records with metadata extracted from the live pages where available; the UI labels the collection as externally hosted research. No flags, private client data, secrets, or exploit payloads are reproduced in the portfolio. Case-study items use sanitized summaries and clearly state when a detail is an editable template or public write-up.

## Interaction and Performance

- Hero network is SVG-based with a CSS perspective transform and pointer-responsive lighting. It remains readable without JavaScript and avoids a large WebGL bundle.
- Scroll reveals use `IntersectionObserver` and a CSS class, not a perpetual animation loop.
- Metric counters render verified figures as static text and animate only when motion is allowed.
- Archive filters use buttons with `aria-pressed`; the selected case opens an accessible modal with close button and Escape support.
- Navigation supports keyboard focus, anchors, and a mobile menu.
- Form validates name, email, and message, then opens a mail client through `mailto:` with an explicit confirmation note.
- All decorative layers are `aria-hidden`; content remains usable with reduced motion, no hover, no WebGL, and on narrow screens.

## Build and Delivery

Use Vite, React, TypeScript, and Lucide React. Pin pnpm in `package.json`, install dependencies, run the production build, inspect diagnostics, and start the configured port-3000 preview. Keep the route manifest, robots, sitemap, metadata, CV placeholder, and editable data files in the repository. Checkpoint the completed project to the managed remote after the build is clean. Deployment instructions will target any static host that can run `pnpm build` and publish `dist/`.
