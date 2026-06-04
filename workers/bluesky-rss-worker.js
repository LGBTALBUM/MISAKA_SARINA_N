const FEED_URL = 'https://openrss.org/feed/bsky.app/profile/msarina.bluesky.siacone.art';
const PROFILE_URL = 'https://bsky.app/profile/msarina.bluesky.siacone.art';
const CACHE_TTL_SECONDS = 15 * 60;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept'
};

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

const parseItems = (xml) => {
  const itemMatches = xml.match(/<item[\s\S]*?<\/item>/gi) || [];
  return itemMatches.slice(0, 20).map((item) => ({
    title: getTag(item, 'title') || 'Bluesky post',
    link: getTag(item, 'link') || PROFILE_URL,
    description: getTag(item, 'description') || getTag(item, 'title') || '',
    pubDate: getTag(item, 'pubDate'),
    guid: getTag(item, 'guid') || getTag(item, 'link')
  }));
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
      const upstream = await fetch(FEED_URL, {
        headers: {
          Accept: 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8',
          'User-Agent': 'MisakaSarinaSite/1.0 (+https://msarina.moe/)'
        }
      });

      if (!upstream.ok) {
        return jsonResponse({
          ok: false,
          error: `Upstream RSS request failed: ${upstream.status}`,
          feedUrl: FEED_URL,
          profileUrl: PROFILE_URL,
          items: []
        }, { status: 502 });
      }

      const xml = await upstream.text();
      const items = parseItems(xml);
      const payload = {
        ok: true,
        source: 'OpenRSS',
        feedUrl: FEED_URL,
        profileUrl: PROFILE_URL,
        fetchedAt: new Date().toISOString(),
        count: items.length,
        items
      };

      const response = jsonResponse(payload);
      ctx.waitUntil(cache.put(cacheKey, response.clone()));
      return response;
    } catch (error) {
      return jsonResponse({
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown Worker error',
        feedUrl: FEED_URL,
        profileUrl: PROFILE_URL,
        items: []
      }, { status: 500 });
    }
  }
};
