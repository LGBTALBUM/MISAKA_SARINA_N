const HOME_FEED = '/api/bluesky-rss.json';
const PROFILE = 'https://bsky.app/profile/msarina.bluesky.siacone.art';
const SPONSOR = 'https://github.com/sponsors/LGBTALBUM';
const YT = 'https://www.youtube.com/embed/-ZseniKo-2s';
const YT_WATCH = 'https://youtu.be/-ZseniKo-2s?si=q5HjSG0nBWpqnLyq';

const isHome = () => location.pathname === '/' || location.pathname === '/index.html';
const text = (value) => String(value || '').trim();
const fmt = (value) => {
  if (!value) return '';
  const date = new Date(value);
  return Number.isNaN(date.valueOf()) ? value : date.toLocaleString();
};
const postText = (item) => text(item.description) || text(item.title) || 'Bluesky post';
const translateDynamic = () => document.dispatchEvent(new Event('msarina:dynamic-content'));

function section() {
  const section = document.createElement('section');
  section.className = 'section home-extra';
  section.innerHTML = `
    <p class="eyebrow" data-i18n="homeWidgets.kicker">Live feed & support</p>
    <article class="home-widget home-video">
      <p class="eyebrow" data-i18n="homeWidgets.featuredVideo">Featured video</p>
      <div class="home-video-frame">
        <iframe width="560" height="315" src="${YT}" title="Misaka Sarina featured video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
      </div>
      <div class="home-video-promo">
        <div>
          <h2 data-i18n="homeVideo.title">Now featured: a new Misaka Sarina video.</h2>
          <p data-i18n="homeVideo.copy">The homepage spotlight has been refreshed. Watch the featured video here, then continue on YouTube to like, comment, share, and explore more releases.</p>
        </div>
        <a class="button primary" href="${YT_WATCH}" target="_blank" rel="noreferrer" data-i18n="homeVideo.watch">Watch on YouTube</a>
      </div>
    </article>
    <div class="home-extra-grid">
      <article class="home-widget home-bsky">
        <div class="home-widget-top">
          <span class="home-widget-kicker" data-i18n="homeWidgets.bsky">Bluesky</span>
          <time class="home-widget-time">Loading</time>
        </div>
        <h2 data-i18n="homeWidgets.socialTitle">From the social stream</h2>
        <p data-i18n="homeWidgets.socialLoading">Loading the second latest Bluesky RSS item...</p>
        <a class="button" href="/blog/bluesky/" data-i18n="homeWidgets.openBsky">Open Bluesky lane</a>
      </article>
      <article class="home-widget home-downloads">
        <p class="eyebrow" data-i18n="homeWidgets.downloads">Downloads</p>
        <h2 data-i18n="homeWidgets.downloadsTitle">Download shelf is available.</h2>
        <p data-i18n="homeWidgets.downloadsCopy">Current downloadable works and future distribution categories live here.</p>
        <a class="button primary" href="/downloads/" data-i18n="homeWidgets.openDownloads">Open downloads</a>
      </article>
      <article class="home-widget home-sponsor">
        <p class="eyebrow" data-i18n="homeWidgets.support">Support</p>
        <h2 data-i18n="homeWidgets.supportTitle">Support the archive</h2>
        <p data-i18n="homeWidgets.supportCopy">Help keep LGBTALBUM open-source work, site experiments, and creator infrastructure maintained.</p>
        <a class="button primary" href="${SPONSOR}" target="_blank" rel="noreferrer" data-i18n="homeWidgets.sponsor">Sponsor on GitHub</a>
      </article>
    </div>
  `;
  return section;
}

async function fill(root) {
  const card = root.querySelector('.home-bsky');
  try {
    const response = await fetch(HOME_FEED, { cache: 'no-store', headers: { accept: 'application/json' } });
    const json = await response.json();
    const items = Array.isArray(json.items) ? json.items : [];
    const item = items[1] || items[0];
    if (!item) throw new Error('empty feed');
    card.querySelector('.home-widget-time').textContent = fmt(item.pubDate);
    card.querySelector('p').removeAttribute('data-i18n');
    card.querySelector('p').textContent = postText(item);
    card.querySelector('a').href = item.link || PROFILE;
    card.querySelector('a').setAttribute('data-i18n', 'homeWidgets.openPost');
  } catch (error) {
    card.querySelector('.home-widget-time').setAttribute('data-i18n', 'homeWidgets.fallback');
    card.querySelector('p').setAttribute('data-i18n', 'homeWidgets.feedFallback');
    card.querySelector('a').href = '/blog/bluesky/';
    card.querySelector('a').setAttribute('data-i18n', 'homeWidgets.openBsky');
  }
  translateDynamic();
}

document.addEventListener('DOMContentLoaded', () => {
  if (!isHome()) return;
  const main = document.querySelector('main');
  if (!main) return;
  const root = section();
  main.append(root);
  translateDynamic();
  fill(root);
});
