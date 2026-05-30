# Misaka Sarina Homepage

Dark Archive style Astro rebuild of the Misaka Sarina / Baker Siacone mainpage.

This repository is currently used as a GitHub Pages debug mirror for the new site architecture. The current debug URL is:

```txt
https://lgbtalbum.github.io/MISAKA_SARINA_N/
```

## Current site structure

- `/` — landing page with featured release
- `/music/` — music archive resolved from VocaDB generated data plus manual catalogue entries
- `/music/:slug/` — release detail pages
- `/links/` — archive-style external link collection
- `/about/` — artist and project identity page
- `/contact/` — contact entry points
- `/works/` — project and experiment archive
- `/works/:slug/` — work detail pages
- `/blog/` — notes, release diaries, and digital garden index
- `/blog/:slug/` — blog / note detail pages
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

VocaDB is treated as a structured metadata source, not the only source of truth for the complete listening catalogue. Some releases may be missing or incomplete there.

## Manual catalogue entries

Private YouTube Music catalogue playlists must not be displayed publicly or linked from the site.

When a release is present in a private YTM catalogue but missing from VocaDB, add it as a manual entry here:

```txt
src/data/manualMusic.ts
```

Manual entries are merged with generated VocaDB entries before rendering:

```txt
src/data/music.ts
+ src/data/manualMusic.ts
+ src/data/manualMusicQuality.ts
+ src/data/musicOverrides.ts
→ src/utils/musicCatalogue.ts
→ /music/ catalogue
```

Manual entries should use public track/platform URLs only. Do not store private playlist URLs in the public repository.

Manual catalogue entries should usually not set `forceMain`. Let `src/utils/musicVisibility.ts` classify version entries such as Instrumental, Off Vocal, Karaoke, Acoustic, Remix, Extended, Radio Edit, Take, and Short Ver. into the secondary section. Use `forceMain` or `forceSecondary` only for deliberate exceptions.

Entries without public platform links are still allowed. Their detail pages show a "No public platform link yet" state until public URLs are added.

## Manual catalogue quality overrides

Do not directly edit the large CSV-derived seed list for small quality fixes. Use:

```txt
src/data/manualMusicQuality.ts
```

This file is for gradual cleanup of YTM-derived entries, including:

- normalized titles
- corrected artist / vocal fields
- public platform links when available
- featured candidate markers
- needs-review markers
- quality notes explaining what was changed

Quality overrides are applied before `musicOverrides.ts`, so final manual corrections can still be made in `musicOverrides.ts` if needed.

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

## Works and Blog content

Works and Blog currently use lightweight static data files:

```txt
src/data/works.ts
src/data/posts.ts
```

Use `works.ts` for public projects, tools, infrastructure experiments, and archive systems. Use `posts.ts` for planned notes, release diaries, technical notes, and digital garden entries.

Each item generates a shareable detail route:

```txt
/works/:slug/
/blog/:slug/
```

The current implementation intentionally does not use MDX or a CMS. This keeps the debug mirror simple while leaving room for future content collections, richer body content, screenshots, changelogs, RSS, and MDX-powered detail pages.

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
3. Check `/links/` Listen group after changing public platform links.
4. Check `/works/`, `/works/:slug/`, `/blog/`, and `/blog/:slug/` pages.
5. Verify external cover URLs are not prefixed with the GitHub Pages base path.
6. If VocaDB data changed, review `src/data/music.ts` before merging.
7. Add missing private-catalogue-derived music entries in `src/data/manualMusic.ts`.
8. Put gradual manual catalogue cleanup in `src/data/manualMusicQuality.ts`.
9. Put final manual music corrections in `src/data/musicOverrides.ts`.
10. Review whether new manual entries should stay in Primary catalogue or secondary version entries.
11. Put Works / Blog content in `src/data/works.ts` and `src/data/posts.ts`.
12. Keep production-domain changes separate from debug-mirror changes.
