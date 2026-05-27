import { generateRssXml } from '../utils/feed';

export async function GET() {
  return new Response(generateRssXml('/feed.xml'), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8'
    }
  });
}
