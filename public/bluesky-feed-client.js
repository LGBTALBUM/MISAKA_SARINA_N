(() => {
  const HANDLE = 'msarina.bluesky.siacone.art';
  const DID = 'did:plc:67qxrad62jqu2433pa3i2fhi';
  const PROFILE_URL = `https://bsky.app/profile/${HANDLE}`;
  const WORKER_URL = '/api/bluesky-rss.json';

  const makePublicApiUrl = (origin) => {
    const url = new URL('/xrpc/app.bsky.feed.getAuthorFeed', origin);
    url.searchParams.set('actor', DID);
    url.searchParams.set('limit', '30');
    url.searchParams.set('filter', 'posts_no_replies');
    return url;
  };

  const PUBLIC_API_URL = makePublicApiUrl('https://public.api.bsky.app');
  const API_FALLBACK_URL = makePublicApiUrl('https://api.bsky.app');
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
      name: 'Site Worker proxy',
      load: async () => normalizeWorker(await fetchJson(WORKER_URL, 7000))
    },
    {
      name: 'Bluesky public API',
      load: async () => normalizePublicApi(await fetchJson(PUBLIC_API_URL.toString(), 7000))
    },
    {
      name: 'Bluesky API fallback',
      load: async () => normalizePublicApi(await fetchJson(API_FALLBACK_URL.toString(), 7000))
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
    workerUrl: WORKER_URL,
    publicApiUrl: PUBLIC_API_URL.toString()
  });
})();
