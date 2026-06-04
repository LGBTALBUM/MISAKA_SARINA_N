const BLUESKY_FEED_URL = 'https://openrss.org/bsky.app/profile/msarina.bluesky.siacone.art';
const BLUESKY_PROFILE_URL = 'https://bsky.app/profile/msarina.bluesky.siacone.art';

const stripHtml = (html) => {
  const template = document.createElement('template');
  template.innerHTML = html || '';
  return (template.content.textContent || '').trim();
};

const formatDate = (value) => {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.valueOf())) return value;
  return new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

const createFeedCard = (item) => {
  const article = document.createElement('article');
  article.className = 'feed-item';

  const eyebrow = document.createElement('span');
  eyebrow.className = 'feed-item-source';
  eyebrow.textContent = 'Bluesky';

  const title = document.createElement('h2');
  const link = document.createElement('a');
  link.href = item.link;
  link.target = '_blank';
  link.rel = 'noreferrer';
  link.textContent = item.title || 'Bluesky post';
  title.append(link);

  const body = document.createElement('p');
  body.textContent = item.description || item.title || '';

  const meta = document.createElement('small');
  meta.textContent = formatDate(item.pubDate);

  article.append(eyebrow, title, body, meta);
  return article;
};

const parseFeed = (xmlText) => {
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlText, 'application/xml');
  const parserError = xml.querySelector('parsererror');
  if (parserError) throw new Error('RSS parser error');

  return [...xml.querySelectorAll('item')].map((item) => ({
    title: stripHtml(item.querySelector('title')?.textContent || ''),
    link: item.querySelector('link')?.textContent?.trim() || BLUESKY_PROFILE_URL,
    description: stripHtml(item.querySelector('description')?.textContent || ''),
    pubDate: item.querySelector('pubDate')?.textContent?.trim() || ''
  }));
};

const renderFallback = (root, message) => {
  const fallback = document.createElement('div');
  fallback.className = 'feed-fallback';
  fallback.innerHTML = `
    <p>${message}</p>
    <div class="button-row">
      <a class="button primary" href="${BLUESKY_FEED_URL}" target="_blank" rel="noreferrer">Open RSS feed</a>
      <a class="button" href="${BLUESKY_PROFILE_URL}" target="_blank" rel="noreferrer">Open Bluesky profile</a>
    </div>
  `;
  root.replaceChildren(fallback);
};

const loadBlueskyFeed = async () => {
  const root = document.querySelector('[data-bluesky-feed]');
  const status = document.querySelector('[data-bluesky-status]');
  if (!root) return;

  try {
    const response = await fetch(BLUESKY_FEED_URL, {
      headers: { Accept: 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8' }
    });
    if (!response.ok) throw new Error(`RSS request failed: ${response.status}`);

    const xmlText = await response.text();
    const items = parseFeed(xmlText).slice(0, 12);
    if (!items.length) throw new Error('No feed items found');

    root.replaceChildren(...items.map(createFeedCard));
    if (status) status.textContent = `${items.length} items loaded from OpenRSS.`;
  } catch (error) {
    console.warn('[bluesky-rss]', error);
    if (status) status.textContent = 'Feed fallback mode.';
    renderFallback(root, 'The RSS feed could not be loaded in this browser session. You can still open the feed or profile directly.');
  }
};

document.addEventListener('DOMContentLoaded', loadBlueskyFeed);
