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

const safeIsoDate = (value) => {
  if (!value) return '';
  const date = new Date(value);
  return Number.isNaN(date.valueOf()) ? '' : date.toISOString();
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

const getPostText = (item) => {
  const title = normalizePostText(item.title || '');
  const description = normalizePostText(item.description || '');
  if (description && description !== title