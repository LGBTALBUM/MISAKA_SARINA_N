const HANDLE = 'msarina.bluesky.siacone.art';
const DID = 'did:plc:67qxrad62jqu2433pa3i2fhi';
const PROFILE_URL = `https://bsky.app/profile/${HANDLE}`;
const OPENRSS_URL = `https://openrss.org/feed/bsky.app/profile/${HANDLE}`;
const CACHE_TTL_SECONDS = 15 * 60;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept'
};

const cleanText = (value = '') => String(value || '').trim();

const makeAuthorFeedUrl = (origin) => {
  const url = new URL('/xrpc/app.bsky.feed.getAuthorFeed', origin);
  url.searchParams.set('actor', DID);
  url.searchParams.set('limit', '30');
  url.searchParams.set('filter', 'posts_no_replies');
  return url.toString();
};

const publicApiSources = [
  ['Bluesky public API', makeAuthorFeedUrl('https://public.api.bsky.app')],
  ['Bluesky API fallback', makeAuthorFeedUrl('https://api.bsky.app')]
];

const stripHtml = (value = '') => value
  .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
  .replace(/<[^>]*>/g, '')
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&#39;/g, "'")
  .trim();

const getTag = (item, tagName) => {
  const pattern = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i');
  const match = item.match(pattern);
  return match ? stripHtml(match[1]) : '';
};

const parseRssItems = (xml) => {
  const itemMatches = xml.match(/<item[\s\S]*?<\/item>/gi) || [];
  return itemMatches.slice(0, 20).map((item) => ({
    title: getTag(item, 'title') || 'Bluesky post',
    link: getTag(item, 'link') || PROFILE_URL,
    description: getTag(item, 'description') || getTag(item, 'title') || '',
    pubDate: getTag(item, 'pubDate'),
    guid: getTag(item, 'guid') || getTag(item, 'link')
  }));
};

const postUrl = (post) => {
  const uri = cleanText(post?.uri);
  const rkey = uri.split('/').filter(Boolean).pop();
  const handle = cleanText(post?.author?.handle) || HANDLE;

  return rkey
    ? `https://bsky.app/profile/${encodeURIComponent(handle)}/post/${encodeURIComponent(rkey)}`
    : PROFILE_URL;
};

const parseApiItems = (payload) => {
  const feed = Array.isArray(payload?.feed) ? payload.feed : [];

  return feed
    .filter((entry) => !entry?.reason)
    .map((entry) => {
      const post = entry?.post || {};
      const record = post?.record || {};
      const description = cleanText(record?.text);
      const link = postUrl(post);

      return {
        title: description || 'Bluesky post',
        link,
        description,
        pubDate: cleanText(record?.createdAt) || cleanText(post?.indexedAt),
        guid: cleanText(post?.uri) || link
      };
    })
    .filter((item) => item.description || item.link)
    .slice(0, 20);
};

const fetchWithTimeout = async (url, init = {}, timeoutMs = 8000) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
};

const fetchApiSource = async (name, url) => {
  const response = await fetchWithTimeout(url, {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'MisakaSarinaSite/2.0 (+https://msarina.moe/)'
    }
  });

  if (!response.ok) throw new Error(`${name} HTTP ${response.status}`);
  const payload = await response.json();
  const items = parseApiItems(payload);
  if (!items.length) throw new Error(`${name} returned empty feed`);

  return { source: name, sourceUrl: url, items };
};

const fetchOpenRss = async () => {
  const response = await fetchWithTimeout(OPENRSS_URL, {
    headers: {
      Accept: 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8',
      'User-Agent': 'MisakaSarinaSite/2.0 (+https://msarina.moe/)'
    }
  });

  if (!response.ok) throw new Error(`OpenRSS HTTP ${response.status}`);
  const xml = await response.text();
  const items = parseRssItems(xml);
  if (!items.length) throw new Error('OpenRSS returned empty feed');

  return { source: 'OpenRSS fallback', sourceUrl: OPENRSS_URL, items };
};

const jsonResponse = (body, init = {}) => new Response(JSON.stringify(body, null, 2), {
  status: init.status || 200,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': `public, max-age=${CACHE_TTL_SECONDS}, s-maxage=${CACHE_TTL_SECONDS}, stale-while-revalidate=86400`,
    ...corsHeaders,
    ...(init.headers || {})
  }
});

const loadFeed = async () => {
  const errors = [];

  for (const [name, url] of publicApiSources) {
    try {
      return await fetchApiSource(name, url);
    } catch (error) {
      errors.push(error instanceof Error ? error.message : String(error));
    }
  }

  try {
    return await fetchOpenRss();
  } catch (error) {
    errors.push(error instanceof Error ? error.message : String(error));
  }

  throw new Error(errors.join(' | ') || 'No Bluesky upstream available');
};

export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== 'GET') {
      return jsonResponse({ ok: false, error: 'Method not allowed' }, { status: 405 });
    }

    const cache = caches.default;
    const cacheKey = new Request(new URL(request.url).origin + '/api/bluesky-rss.json', request);
    const cached = await cache.match(cacheKey);
    if (cached) return cached;

    try {
      const result = await loadFeed();
      const payload = {
        ok: true,
        source: result.source,
        sourceUrl: result.sourceUrl,
        profileUrl: PROFILE_URL,
        fetchedAt: new Date().toISOString(),
        count: result.items.length,
        items: result.items
      };

      const response = jsonResponse(payload);
      ctx.waitUntil(cache.put(cacheKey, response.clone()));
      return response;
    } catch (error) {
      return jsonResponse({
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown Worker error',
        profileUrl: PROFILE_URL,
        items: []
      }, { status: 502 });
    }
  }
};
