const PROFILE = 'https://bsky.app/profile/msarina.bluesky.siacone.art';
const q = (selector) => document.querySelector(selector);
const fmt = (value) => {
  if (!value) return '';
  const date = new Date(value);
  return Number.isNaN(date.valueOf()) ? value : date.toLocaleString();
};

function card(item) {
  const article = document.createElement('article');
  article.className = 'bsky-card';

  const top = document.createElement('div');
  top.className = 'bsky-top';

  const source = document.createElement('span');
  source.textContent = 'Bluesky';

  const time = document.createElement('time');
  time.textContent = fmt(item.pubDate);

  const copy = document.createElement('p');
  copy.textContent = String(item.description || item.title || 'Bluesky post').trim();

  const link = document.createElement('a');
  link.className = 'button';
  link.target = '_blank';
  link.rel = 'noreferrer';
  link.href = item.link || PROFILE;
  link.textContent = 'Open post';

  top.append(source, time);
  article.append(top, copy, link);
  return article;
}

function fallbackCard() {
  const article = document.createElement('article');
  article.className = 'bsky-card';

  const copy = document.createElement('p');
  copy.textContent = 'Feed could not be rendered. Open the source profile instead.';

  const link = document.createElement('a');
  link.className = 'button';
  link.target = '_blank';
  link.rel = 'noreferrer';
  link.href = PROFILE;
  link.textContent = 'Open Bluesky profile';

  article.append(copy, link);
  return article;
}

async function main() {
  const root = q('[data-bluesky-feed]');
  const status = q('[data-bluesky-status]');
  if (!root) return;

  try {
    if (!window.MSBlueskyFeed || typeof window.MSBlueskyFeed.getItems !== 'function') {
      throw new Error('Bluesky feed client unavailable');
    }

    const result = await window.MSBlueskyFeed.getItems({ limit: 12 });
    root.replaceChildren(...result.items.map(card));

    if (status) {
      status.removeAttribute('data-i18n');
      status.textContent = `${result.items.length} items loaded from ${result.source}.`;
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    if (status) {
      status.removeAttribute('data-i18n');
      status.textContent = `Feed fallback mode: ${message}`;
    }

    root.replaceChildren(fallbackCard());
  }
}

main();
