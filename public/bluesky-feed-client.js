(() => {
  const HANDLE = 'msarina.bluesky.siacone.art';
  const PROFILE_URL = `https://bsky.app/profile/${HANDLE}`;
  const WORKER_URL = '/api/bluesky-rss.json';
  const PUBLIC_API_URL = new URL('https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed');

  PUBLIC_API_URL.searchParams.set('actor', HANDLE);
  PUBLIC_API_URL.searchParams.set('limit', '30');
  PUBLIC_API_URL.searchParams.set('filter', 'posts_no_replies');

  const cleanText = (value) => String(value || '').trim();

  const fetchJson = async (url, timeoutMs) => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(url, {
        cache: 'no-store',
        headers: { accept: 'application/json' },
        signal: controller.signal
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return await response.json();
    } finally {
      window.clearTimeout(timeout);
    }
  };

  const postUrl = (post) => {
    const uri = cleanText(post?.uri);
    const rkey = uri.split('/').filter(Boolean).pop();
    const handle = cleanText(post?.author?.handle) || HANDLE;

    return rkey
      ? `https://bsky.app/profile/${encodeURIComponent(handle)}/post/${encodeURIComponent(rkey)}`
      : PROFILE_URL;
  };

  const normalizePublicApi = (payload) => {
    const feed = Array.isArray(payload?.feed) ? payload.feed : [];

    return feed
      .filter((entry) => !entry?.reason)
      .map((entry) => {
        const post = entry?.post || {};
        const record = post?.record || {};
        const description = cleanText(record?.text);

        return {
          title: description || 'Bluesky post',
          description,
          pubDate: cleanText(record?.createdAt) || cleanText(post?.indexedAt),
          link: postUrl(post)
        };
      })
      .filter((item) => item.description || item.link);
  };

  const normalizeWorker = (payload) => {
    const items = Array.isArray(payload?.items) ? payload.items : [];

    return items
      .map((item) => ({
        title: cleanText(item?.title) || 'Bluesky post',
        description: cleanText(item?.description) || cleanText(item?.title),
        pubDate: cleanText(item?.pubDate),
        link: cleanText(item?.link) || PROFILE_URL
      }))
      .filter((item) => item.description || item.link);
  };

  const sources = [
    {
      name: 'Bluesky public API',
      load: async () => normalizePublicApi(await fetchJson(PUBLIC_API_URL.toString(), 8000))
    },
    {
      name: 'Worker JSON fallback',
      load: async () => normalizeWorker(await fetchJson(WORKER_URL, 4000))
    }
  ];

  const getItems = async ({ limit = 12 } = {}) => {
    const errors = [];

    for (const source of sources) {
      try {
        const items = await source.load();
        if (!items.length) throw new Error('empty feed');

        return {
          items: items.slice(0, Math.max(1, limit)),
          source: source.name
        };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        errors.push(`${source.name}: ${message}`);
      }
    }

    throw new Error(errors.join(' | ') || 'feed unavailable');
  };

  window.MSBlueskyFeed = Object.freeze({
    getItems,
    profileUrl: PROFILE_URL,
    publicApiUrl: PUBLIC_API_URL.toString()
  });
})();
