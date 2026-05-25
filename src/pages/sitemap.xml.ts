import { getSortedReleases } from '../data/music';
import { site } from '../data/content';

const staticPages = ['/', '/music/', '/works/', '/blog/', '/links/', '/about/', '/contact/'];

const toAbsoluteUrl = (path: string) => new URL(path.replace(/^\/+/, ''), site.url).toString();

export async function GET() {
  const releasePages = getSortedReleases().map((release) => `/music/${release.slug}/`);
  const urls = [...staticPages, ...releasePages];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (url) => `  <url>\n    <loc>${toAbsoluteUrl(url)}</loc>\n  </url>`
    )
    .join('\n')}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
