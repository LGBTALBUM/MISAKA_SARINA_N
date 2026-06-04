# Bluesky RSS Worker

This Worker turns the OpenRSS feed for Misaka Sarina's Bluesky profile into a cacheable JSON endpoint for the static Astro site.

## Source feed

```txt
https://openrss.org/bsky.app/profile/msarina.bluesky.siacone.art
```

## Recommended route

Use a Cloudflare Worker route on the same domain:

```txt
msarina.moe/api/bluesky-rss.json
```

The static page at `/blog/bluesky/` first tries to read:

```txt
/api/bluesky-rss.json
```

If the Worker route is not available, the page falls back to directly opening the RSS feed and Bluesky profile.

## Deploy steps

1. Create a Cloudflare Worker.
2. Paste `workers/bluesky-rss-worker.js` into the Worker editor, or deploy it with Wrangler.
3. Add a Worker route:

```txt
msarina.moe/api/bluesky-rss.json
```

4. Visit:

```txt
https://msarina.moe/api/bluesky-rss.json
```

Expected response shape:

```json
{
  "ok": true,
  "source": "OpenRSS",
  "feedUrl": "https://openrss.org/bsky.app/profile/msarina.bluesky.siacone.art",
  "profileUrl": "https://bsky.app/profile/msarina.bluesky.siacone.art",
  "fetchedAt": "2026-01-01T00:00:00.000Z",
  "count": 12,
  "items": []
}
```

## Cache behavior

The Worker caches successful JSON responses for 15 minutes and allows stale content while revalidating.
