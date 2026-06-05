const BLUESKY_JSON_URL = '/api/bluesky-rss.json';
const BLUESKY_FEED_URL = 'https://openrss.org/feed/bsky.app/profile/msarina.bluesky.siacone.art';
const BLUESKY_PROFILE_URL = 'https://bsky.app/profile/msarina.bluesky.siacone.art';

const normalizePostText = (value = '') => String(value).replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();

const formatDate = (value) => {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.valueOf())) return value