import { generateRssXml } from '../utils/feed';

export async function GET() {
  return new Response(generateRssXml('/rss.xml'), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8'
    }
  });
}
