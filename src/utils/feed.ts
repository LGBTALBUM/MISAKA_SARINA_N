import { posts } from '../data/posts';
import { site } from '../data/content';

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const toAbsoluteUrl = (path: string) => new URL(path.replace(/^\/+/, ''), site.url).toString();

const getPostDescription = (post: (typeof posts)[number]) => {
  const firstSection = post.bodySections?.[0]?.body;
  return firstSection ? `${post.summary}\n\n${firstSection}` : post.summary;
};

export const getPublishedPosts = () =>
  posts
    .filter((post) => post.status === 'published')
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

export const generateRssXml = (feedPath = '/rss.xml') => {
  const publishedPosts = getPublishedPosts();
  const lastBuildDate = new Date().toUTCString();
  const feedUrl = toAbsoluteUrl(feedPath);
  const siteUrl = toAbsoluteUrl('/');

  const items = publishedPosts
    .map((post) => {
      const url = toAbsoluteUrl(`/blog/${post.slug}/`);
      return `    <item>\n      <title>${escapeXml(post.title)}</title>\n      <link>${escapeXml(url)}</link>\n      <guid isPermaLink="true">${escapeXml(url)}</guid>\n      <pubDate>${new Date(post.date).toUTCString()}</pubDate>\n      <category>${escapeXml(post.category)}</category>\n      <description>${escapeXml(getPostDescription(post))}</description>\n    </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n  <channel>\n    <title>${escapeXml(site.title)}</title>\n    <link>${escapeXml(siteUrl)}</link>\n    <description>${escapeXml(site.description)}</description>\n    <language>zh-Hant</language>\n    <lastBuildDate>${lastBuildDate}</lastBuildDate>\n    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />\n${items}\n  </channel>\n</rss>\n`;
};
