# Bluesky Feed Worker

This Worker provides a same-origin JSON proxy for Misaka Sarina's Bluesky feed at `msarina.moe`.

The browser should prefer this Worker instead of fetching Bluesky cross-origin directly. The Worker uses Bluesky's public AppView API as its primary upstream and keeps additional fallbacks for resilience.

## Upstream order

1. Bluesky cached public AppView:

```txt
https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed
```

2. Bluesky AppView fallback:

```txt
https://api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed
```

3. OpenRSS compatibility fallback:

```txt
https://openrss.org/feed/bsky.app/profile/msarina.bluesky.siacone.art
```

The official Bluesky requests use the account DID:

```txt
did:plc:67qxrad62jqu2433pa3i2fhi
```

and request `posts_no_replies`.

## Recommended route

Use a Cloudflare Worker route on the same domain:

```txt
msarina.moe/api/bluesky-rss.json
```

The homepage and `/blog/bluesky/` should request this same-origin route first. Browser-side direct Bluesky API requests remain a final fallback only.

## Deploy steps

1. Update the existing Cloudflare Worker with `workers/bluesky-rss-worker.js`.
2. Keep the Worker route:

```txt
msarina.moe/api/bluesky-rss.json
```

3. Visit:

```txt
https://msarina.moe/api/bluesky-rss.json
```

Expected successful response shape:

```json
{
  "ok": true,
  "source": "Bluesky public API",
  "sourceUrl": "https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?...",
  "profileUrl": "https://bsky.app/profile/msarina.bluesky.siacone.art",
  "fetchedAt": "2026-01-01T00:00:00.000Z",
  "count": 12,
  "items": []
}
```

If the first Bluesky host fails, the Worker automatically tries the second official host and then OpenRSS.

## Cache behavior

Successful JSON responses are cached for 15 minutes and allow stale content while revalidating.

## Important deployment note

Merging this repository does not by itself update an already-created Cloudflare Worker unless a separate Worker deployment pipeline is configured. After merging Worker-source changes, redeploy the Worker code in Cloudflare or with Wrangler before validating the production endpoint.
