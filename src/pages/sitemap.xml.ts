import { getSortedReleases } from '../utils/musicCatalogue';
import { site } from '../data/content';

const staticPages = ['/', '/music/', '/works/', '/blog/', '/links/', '/about/', '/contact/'];
const lastmod = new Date().toISOString().slice(0, 10);

const toAbsoluteUrl = (path: string) => new URL(path.replace(/^\/+/, ''), site.url).toString();
const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export async function GET() {
  const releasePages = getSortedReleases().map((release) => `/music/${release.slug}/`);
  const urls = [...staticPages, ...releasePages];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (url) => `  <url>\n    <loc>${escapeXml(toAbsoluteUrl(url))}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
    )
    .join('\n')}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
