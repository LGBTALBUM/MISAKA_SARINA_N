# Misaka Sarina Homepage

Dark Archive style Astro rebuild of the Misaka Sarina / Baker Siacone mainpage.

This repository builds the production site for:

```txt
https://msarina.moe/
```

The previous Linkyee-style link page is kept separately at:

```txt
https://msarina.siacone.art/
```

## Current site structure

- `/` — landing page with featured release, YouTube embed, Bluesky preview, downloads entry, and sponsor card
- `/music/` — music archive resolved from VocaDB generated data plus manual catalogue entries
- `/music/:slug/` — release detail pages with platform links, metadata, catalogue notes, and lyrics pane
- `/music/lyrics/` — lyrics seed overview sourced from the manager lyrics catalogue
- `/music/timeline/` — release timeline grouped by year
- `/catalogue-review/` — internal-style static music catalogue review dashboard
- `/downloads/` — reserved download area for future small tools, archive packages, music-related files, and creator-made utilities
- `/links/` — archive-style external link collection
- `/about/` — artist and project identity page
- `/contact/` — contact entry points
- `/works/` — project and experiment archive
- `/works/:slug/` — work detail pages
- `/blog/` — notes, release diaries, and digital garden index
- `/blog/:slug/` — blog / note detail pages
- `/garden/` — digital garden style notes and archive lanes
- `/404.html` — custom not found page
- `/sitemap.xml` — generated sitemap
- `/robots.txt` — crawler rules for the production site

## Development

```bash
npm install
npm run dev
```

## Build check

```bash
npm run build
```

Run the build before merging any PR that changes Astro pages, data files, public scripts, public CSS, i18n layers, or catalogue logic.

## Homepage widgets

The homepage has an additional widget layer mounted by:

```txt
public/home-widgets.js
public/home-widgets.css
```

Current homepage widget blocks:

- featured YouTube video
- Bluesky RSS preview
- downloads entry card
- GitHub Sponsors card

The current featured video embed is:

```txt
https://www.youtube.com/embed/P9Bfig2ADe0?si=cmFkg31YP-Ya6k20
```

When changing homepage widgets, update the cache-busting version in `src/layouts/BaseLayout.astro` for both:

```txt
/home-widgets.css?v=...
/home-widgets.js?v=...
```

The widget text uses `data-i18n` keys supplied by `public/downloads-i18n.js`.

## Downloads area

The reserved downloads area lives at:

```txt
/downloads/
```

Primary implementation files:

```txt
src/pages/downloads.astro
public/downloads-i18n.js
```

Use this area for future downloadable items such as:

- small tools and utilities
- archive packages
- music-related files
- creator-made workflow helpers
- public templates or reproducible project material

Future downloadable files should be added through PRs with clear names, version notes, and a short explanation of what each file is for.

## Internationalization

The site currently uses lightweight client-side i18n layers instead of a full routing-based locale system.

Current i18n files:

```txt
public/i18n-extra.js
public/content-i18n.js
public/garden-i18n.js
public/downloads-i18n.js
```

Supported locale keys:

```txt
en
ja
zh-TW
ca
```

Rules:

- Static text that needs translation should use `data-i18n="key"`.
- Dynamic homepage widget text should dispatch `msarina:dynamic-content` after DOM insertion.
- New page-specific text can be added to a focused i18n file instead of overloading one large file.
- Keep English as fallback text in markup.

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

## Music catalogue data flow

The rendered music archive should read from resolved catalogue utilities rather than raw generated data.

Current flow:

```txt
src/data/music.ts
+ src/data/manualMusic.ts
+ src/data/manager/manualReleases.json
+ src/data/manualMusicQuality.ts
+ src/data/musicOverrides.ts
+ src/data/manager/musicOverrides.json
→ src/utils/musicCatalogue.ts
→ /music/ catalogue
→ /music/:slug/ pages
```

Site pages should read from:

```txt
src/utils/musicCatalogue.ts
```

Do not directly render from `src/data/music.ts` unless intentionally debugging generated VocaDB output.

## Manual catalogue entries

Private YouTube Music catalogue playlists must not be displayed publicly or linked from the site.

Legacy/manual seed entries currently live in:

```txt
src/data/manualMusic.ts
```

Manager-generated manual entries should prefer:

```txt
src/data/manager/manualReleases.json
```

Manual entries should use public track/platform URLs only. Do not store private playlist URLs in the public repository.

Manual catalogue entries should usually not set `forceMain`. Let `src/utils/musicVisibility.ts` classify version entries such as Instrumental, Off Vocal, Karaoke, Acoustic, Remix, Extended, Radio Edit, Take, and Short Ver. into the secondary section. Use `forceMain` or `forceSecondary` only for deliberate exceptions.

Entries without public platform links are still allowed. Their detail pages show a no-public-platform-link state until public URLs are added.

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

Quality overrides are applied before `musicOverrides.ts`, so final manual corrections can still be made in `musicOverrides.ts` or `src/data/manager/musicOverrides.json` if needed.

## Manual music overrides

Do not manually edit generated VocaDB entries in `src/data/music.ts` unless you intentionally want the next sync to overwrite them.

Curated TypeScript overrides live in:

```txt
src/data/musicOverrides.ts
```

Manager-generated overrides should prefer:

```txt
src/data/manager/musicOverrides.json
```

Manager overrides are merged after curated TypeScript overrides, so they can update store links, preview links, platform arrays, descriptions, credits, notes, and visibility fields by slug.

Common override use cases:

```json
{
  "some-release-slug": {
    "platforms": [
      { "label": "YouTube", "href": "https://youtu.be/..." },
      { "label": "Spotify", "href": "https://open.spotify.com/track/..." }
    ],
    "description": "Manual description shown on the site.",
    "notes": ["Manual note kept outside generated VocaDB data."],
    "forceMain": true
  },
  "some-version-entry": {
    "hidden": true
  }
}
```

Supported override fields include normal music fields such as `title`, `description`, `releaseDate`, `type`, `cover`, `featured`, `platforms`, `credits`, `notes`, plus visibility fields:

- `hidden` — remove the entry from site output and sitemap
- `forceMain` — force the entry into the main catalogue
- `forceSecondary` — force the entry into the secondary versions section
- `featuredCandidate` — mark as a candidate for featured placement
- `needsReview` — mark for review workflows

## Lyrics catalogue

Lyrics data is kept separate from generated music metadata.

Manager-readable lyrics data lives in:

```txt
src/data/manager/lyrics.json
```

Compatibility export:

```txt
src/data/musicLyrics.ts
```

Rendered surfaces:

```txt
/music/
/music/:slug/
/music/lyrics/
```

Allowed lyric status values:

- `complete`
- `partial`
- `pending`
- `instrumental`

Use `complete` only after creator-side verification. Do not scrape or invent lyrics. If only fragments are verified, keep the entry as `partial`.

## Manager JSON layer

The site includes stable JSON write targets for a future closed-source catalogue manager:

```txt
src/data/manager/lyrics.json
src/data/manager/manualReleases.json
src/data/manager/musicOverrides.json
```

Schema contracts live in:

```txt
src/data/manager/schema/lyrics.schema.json
src/data/manager/schema/manualReleases.schema.json
src/data/manager/schema/musicOverrides.schema.json
```

The intended Manager submit flow:

```txt
GUI edits release / lyrics / platform links
→ validate JSON against schema
→ create branch from main
→ commit changed JSON files
→ open GitHub PR
→ review and merge
```

The manager should not write directly to `.astro` pages for normal catalogue edits.

## Catalogue review dashboard

The static review dashboard is available at:

```txt
/catalogue-review/
```

It is not added to the main navigation. Use it during catalogue cleanup to check:

- Primary / Secondary / Profiles counts
- Manual catalogue entries
- entries without public platform links
- manual entries without public platform links
- featured candidates
- needs-review entries
- possible duplicate title groups

The dashboard includes page anchors, quick links, a search box, client-side filters, and copy helper buttons for slug, `manualMusicQuality.ts` templates, platform-link templates, and `musicOverrides.ts` templates.

This page is generated from the same resolved catalogue as `/music/`, so it reflects VocaDB data, manual entries, manual quality overrides, manager JSON entries, and final music overrides.

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

The current implementation intentionally does not use MDX or a CMS. This keeps the site simple while leaving room for future content collections, richer body content, screenshots, changelogs, deployment notes, RSS, and MDX-powered detail pages.

## GitHub Actions

The repository includes a production build workflow:

```txt
Build and deploy Astro site
```

It runs on pushes to `main`, builds the Astro site, and publishes `./dist` to:

```txt
gh-pages
```

The production custom domain is stored in:

```txt
public/CNAME
```

with this value:

```txt
msarina.moe
```

The repository also includes a manual workflow:

```txt
Sync VocaDB music data
```

It runs the sync script, builds the site, and pushes generated catalogue changes to:

```txt
data/vocadb-sync
```

Because the repository may not allow Actions to create pull requests automatically, open the compare URL manually if needed.

## Deployment notes

This repo is configured for GitHub Pages root-domain production deployment:

```txt
https://msarina.moe/
```

The legacy Linkyee page should remain available at:

```txt
https://msarina.siacone.art/
```

Before changing production deployment again, review these files:

- `astro.config.mjs` — `site` and root-path deployment settings
- `src/data/content.ts` — `site.url`, navigation, and external links
- `public/CNAME` — GitHub Pages custom domain
- `public/robots.txt` — sitemap URL
- `.github/workflows/*` — deployment target and permissions

## Design direction

The current visual direction is **Dark Archive**:

- dark background image with vertical repeat
- compact mobile header with menu toggle
- release archive layout
- homepage widget layer for live/social/support/download entry points
- main releases prioritized over instrumental / off-vocal versions
- static pages polished to match the archive system
- light/dark theme support through shared CSS variables and preference scripts

## Maintenance checklist

When updating the site:

1. Run `npm run build` before merging.
2. Check `/`, `/music/`, and a few `/music/:slug/` pages.
3. Check `/music/lyrics/` after changing lyrics data.
4. Check `/downloads/` after changing downloadable items or download copy.
5. Check `/catalogue-review/` during manual catalogue cleanup.
6. Use catalogue review search / filters / copy helpers when cleaning manual entries.
7. Check `/links/` Listen group after changing public platform links.
8. Check `/works/`, `/works/:slug/`, `/blog/`, and `/blog/:slug/` pages.
9. Verify the homepage widgets after changing `public/home-widgets.js`, `public/home-widgets.css`, or `public/downloads-i18n.js`.
10. Bump homepage widget asset query versions in `BaseLayout.astro` when changing homepage widget JS/CSS.
11. Verify external cover URLs are not prefixed with a GitHub Pages project base path.
12. If VocaDB data changed, review `src/data/music.ts` before merging.
13. Add missing private-catalogue-derived music entries in `src/data/manualMusic.ts` or `src/data/manager/manualReleases.json`.
14. Put gradual manual catalogue cleanup in `src/data/manualMusicQuality.ts`.
15. Put final manual music corrections in `src/data/musicOverrides.ts` or `src/data/manager/musicOverrides.json`.
16. Review whether new manual entries should stay in Primary catalogue or secondary version entries.
17. Put Works / Blog content in `src/data/works.ts` and `src/data/posts.ts`.
18. Keep legacy Linkyee deployment changes separate from the Astro production site.
19. Keep manager-generated catalogue edits in `src/data/manager/*.json` and validate against `src/data/manager/schema/*.schema.json` before opening a PR.
