# sametkorkmaz.dev

Source of my personal site: **https://sametkorkmaz.dev**

## Stack

- [Astro](https://astro.build) 7, static output, no client-side JavaScript
- TypeScript (strict), Tailwind CSS v4
- Fonts self-hosted with the Astro Fonts API: preloaded, size-adjusted fallbacks (no layout shift)
- Hosted on Cloudflare Workers (static assets)

## How changes ship

- Every pull request runs CI (`astro check`, build, dependency review) and gets its own Cloudflare preview URL.
- `main` is protected: pull request and green checks required, squash merge only.
- A merge to `main` deploys to production.
- Hashed assets under `/_astro/` are cached for a year (`public/_headers`); HTML is revalidated on every visit.

## Run locally

```sh
npm ci
npm run dev      # http://localhost:4321
npm run build    # astro check + build to ./dist
npm run preview  # serve ./dist
```

## Layout

- `src/data/site.ts`: all page content, typed
- `src/layouts/Base.astro`: HTML shell, fonts, meta tags
- `src/components/`: `Section`, `Entry`
- `src/pages/`: `index.astro`, `404.astro`
