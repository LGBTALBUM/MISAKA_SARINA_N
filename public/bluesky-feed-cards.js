const JSON_URL = '/api/bluesky-rss.json';
const FEED_URL = 'https://openrss.org/feed/bsky.app/profile/msarina.bluesky.siacone.art';
const PROFILE_URL = 'https://bsky.app/profile/msarina.bluesky.siacone.art';

const clean = (value = '') => value.replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();

const dateText = (value = '') => {
  const date = new Date(value);
  if (!value || Number.isNaN(date.valueOf())) return value;
  return new Intl.DateTimeFormat(undefined