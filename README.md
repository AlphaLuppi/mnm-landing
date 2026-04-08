# mnm-landing

Landing page for **MnM** — the supervision cockpit for AI agents.
Deployed at **[mnm.alphaluppi.fr](https://mnm.alphaluppi.fr)**.

## Stack

- **[Astro 5](https://astro.build)** — zero-JS-by-default static site
- **[Tailwind CSS v4](https://tailwindcss.com)** — CSS-first, via `@tailwindcss/vite`
- **Fraunces + Inter + JetBrains Mono** — Google Fonts (variable)
- **GitHub Pages** — hosted, CI-deployed via Actions

## Design direction

**Wabi-Sabi Premium.** Warm cream paper, charcoal ink, a single terracotta
accent. Generous whitespace, serif display typography, subtle paper grain.
Asymmetric layouts inspired by `linear.app`, `arc.net`, `studiofreight.com`,
and editorial print design.

Design tokens live in `src/styles/global.css` (`@theme` block).

## Development

```bash
bun install
bun run dev         # http://localhost:4321
bun run build       # dist/
bun run preview     # preview production build
bun run check       # Astro type check
```

## Deployment

Pushes to `master` trigger `.github/workflows/deploy.yml` which:

1. Builds the site with Bun
2. Uploads `dist/` as a Pages artifact
3. Deploys to GitHub Pages (custom domain: `mnm.alphaluppi.fr`)

Custom domain is set via `public/CNAME` — GitHub picks it up automatically.

### DNS setup (one-time)

On `alphaluppi.fr` DNS zone, add a CNAME record:

```
mnm  CNAME  alphaluppi.github.io.
```

Then in GitHub repo → Settings → Pages:

- Source: **GitHub Actions**
- Custom domain: `mnm.alphaluppi.fr`
- Enforce HTTPS: ✓

## Structure

```
mnm-landing/
├── public/
│   ├── CNAME                   # mnm.alphaluppi.fr
│   └── favicon.svg             # MnM mark
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── HowItWorks.astro
│   │   ├── Download.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css          # Tailwind v4 + design tokens
├── astro.config.mjs
├── package.json
└── .github/workflows/deploy.yml
```

## Roadmap

- [x] **v0.1** — Hero, Features, How it works, Download (coming-soon), Footer
- [ ] **v0.2** — Real download links (Sprint 4 of mnm)
- [ ] **v0.3** — Changelog page (MDX)
- [ ] **v0.4** — Blog section
- [ ] **v0.5** — Docs integration

## License

Proprietary — © Studio Manifeste.
