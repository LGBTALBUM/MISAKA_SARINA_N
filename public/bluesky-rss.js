const BLUESKY_JSON_URL = '/api/bluesky-rss.json';
const BLUESKY_FEED_URL = 'https://openrss.org/feed/bsky.app/profile/msarina.bluesky.siacone.art';
const BLUESKY_PROFILE_URL = 'https://bsky.app/profile/msarina.bluesky.siacone.art';

const stripHtml = (html) => {
  const template = document.createElement('template');
  template.innerHTML = html || '';
  return (template.content.textContent || '').trim();
};

const normalizePostText = (value = '') => value
  .replace(/\r\n/g, '\n')
  .replace(/\n{3,}/g, '\n\n')
  .trim();

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

const getPostText = (item) => {
  const title = normalizePostText(item.title || '');
  const description = normalizePostText(item.description || '');
  if (description && description !== title) return description;
  return title || description || 'Bluesky post';
};

const createFeedCard = (item) => {
  const article = document.createElement('article');
  article.className = 'feed-item';

  const header = document.createElement('div');
  header.className = 'feed-card-header';

  const source = document.createElement('span');
  source.className = 'feed-item-source';
  source.textContent = 'Bluesky';

  const meta = document.createElement('time');
  meta.className = 'feed-item-date';
  const dateValue = item.pubDate || item.date || item.published || '';
  if (dateValue) meta.dateTime = new Date(dateValue).toISOString?.() || dateValue;
  meta.textContent = formatDate(dateValue);

  header.append(source, meta);

  const body = document.createElement('p');
  body.className = 'feed-post-text';
  body.textContent = getPostText(item);

  const footer = document.createElement('div');
  footer.className = 'feed-card-footer';

  const link = document.createElement('a');
  link.className = 'button';
  link.href = item.link || BLUESKY_PROFILE_URL;
  link.target = '_blank';
  link.rel = 'noreferrer';
  link.textContent = 'Open post';

  footer.append(link);
  article.append(header, body, footer);
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

const loadJsonFeed = async () => {
  const response = await fetch(BLUESKY_JSON_URL, {
    cache: 'no-store',
    headers: { Accept: 'application/json' }
  });
  if (!response.ok) throw new Error(`Worker JSON request failed: ${response.status}`);
  const payload = await response.json();
  if (!Array.isArray(payload.items)) throw new Error(payload.error || 'Invalid Worker JSON payload: missing items array');
  return payload.items;
};

const loadDirectRssFeed = async () => {
  const response = await fetch(BLUESKY_FEED_URL, {
    headers: { Accept: 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8' }
  });
  if (!response.ok) throw new Error(`RSS request failed: ${response.status}`);
  const xmlText = await response.text();
  return parseFeed(xmlText);
};

const loadBlueskyFeed = async () => {
  const root = document.querySelector('[data-bluesky-feed]');
  const status = document.querySelector('[data-bluesky-status]');
  if (!root) return;

  try {
    let source = 'Worker JSON';
    let items;
    let workerErrorMessage = '';

    try {
      items = await loadJsonFeed();
    } catch (workerError) {
      workerErrorMessage = workerError instanceof Error ? workerError.message : String(workerError);
      console.warn('[bluesky-rss] Worker JSON unavailable, trying direct RSS', workerError);
      source = 'OpenRSS direct fetch';
      items = await loadDirectRssFeed();
    }

    const visibleItems = items.slice(0, 12);
    if (!visibleItems.length) throw new Error(workerErrorMessage || 'No feed items found');

    root.replaceChildren(...visibleItems.map(createFeedCard));
    if (status) status.textContent = `${visibleItems.length} items loaded from ${source}.`;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn('[bluesky-rss]', error);
    if (status) status.textContent = `Feed fallback mode: ${message}`;
    renderFallback(root, 'The feed could not be loaded in this browser session. You can still open the RSS feed or Bluesky profile directly.');
  }
};

document.addEventListener('DOMContentLoaded', loadBlueskyFeed);
