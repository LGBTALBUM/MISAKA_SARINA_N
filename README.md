# Misaka Sarina Homepage

Dark Archive style Astro rebuild of the Misaka Sarina / Baker Siacone mainpage.

This repository is currently used as a GitHub Pages debug mirror for the new site architecture. The current debug URL is:

```txt
https://lgbtalbum.github.io/MISAKA_SARINA_N/
```

## Current site structure

- `/` — landing page with featured release
- `/music/` — music archive synced from VocaDB data
- `/music/:slug/` — release detail pages
- `/links/` — archive-style external link collection
- `/about/` — artist and project identity page
- `/contact/` — contact entry points
- `/works/` — reserved project archive page
- `/blog/` — reserved digital garden page
- `/404.html` — custom not found page
- `/sitemap.xml` — generated sitemap
- `/robots.txt` — crawler rules for the debug mirror

## Development

```bash
npm install
npm run dev
```

## Build check

```bash
npm run build
```

## VocaDB sync

The music catalogue can be regenerated from VocaDB with:

```bash
npm run sync:vocadb
```

The sync script currently targets VocaDB artist ID `75285` and writes generated entries to:

```txt
src/data/music.ts
```

Generated catalogue data should be reviewed before merging. Check titles, release dates, credits, platform links, slugs, and whether version entries should remain secondary.

## Manual music overrides

Do not manually edit generated VocaDB entries in `src/data/music.ts` unless you intentionally want the next sync to overwrite them.

Use this file for manual corrections:

```txt
src/data/musicOverrides.ts
```

Common override use cases:

```ts
export const musicOverrides = {
  'the-terrible-days-we-ve-passed': {
    featured: true,
    description: 'Manual description shown on the site.',
    notes: ['Manual note kept outside the VocaDB generated file.']
  },
  'some-version-entry': {
    hidden: true
  },
  'some-main-release': {
    forceMain: true
  },
  'some-secondary-entry': {
    forceSecondary: true
  }
};
```

Supported override fields include normal music fields such as `title`, `description`, `releaseDate`, `type`, `cover`, `featured`, `platforms`, `credits`, `notes`, plus visibility fields:

- `hidden` — remove the entry from site output and sitemap
- `forceMain` — force the entry into the main catalogue
- `forceSecondary` — force the entry into the secondary versions section

Site pages should read from `src/utils/musicCatalogue.ts`, not directly from `src/data/music.ts`.

## GitHub Actions

The repository includes a manual workflow:

```txt
Sync VocaDB music data
```

It runs the sync script, builds the site, and pushes generated catalogue changes to:

```txt
data/vocadb-sync
```

Because the repository may not allow Actions to create pull requests automatically, open the compare URL manually if needed.

## Deployment notes

This repo is configured for GitHub Pages project-path deployment. Base-path handling is important because the debug mirror lives under:

```txt
/MISAKA_SARINA_N/
```

Before moving to the production domain, review these files:

- `src/data/content.ts` — `site.url`
- `public/robots.txt` — sitemap URL
- `astro.config.mjs` — `site` / `base` settings if present
- `.github/workflows/*` — deployment target and permissions

## Design direction

The current visual direction is **Dark Archive**:

- dark background image with vertical repeat
- release archive layout
- main releases prioritized over instrumental / off-vocal versions
- static pages polished to match the archive system

## Maintenance checklist

When updating the site:

1. Run `npm run build` before merging.
2. Check `/`, `/music/`, and a few `/music/:slug/` pages.
3. Verify external cover URLs are not prefixed with the GitHub Pages base path.
4. If VocaDB data changed, review `src/data/music.ts` before merging.
5. Put manual music corrections in `src/data/musicOverrides.ts`.
6. Keep production-domain changes separate from debug-mirror changes.
