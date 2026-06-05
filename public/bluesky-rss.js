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
  .replace