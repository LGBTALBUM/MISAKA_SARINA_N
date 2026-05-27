export type PostItem = {
  title: string;
  slug: string;
  date: string;
  category: 'release-diary' | 'technical-note' | 'site-log' | 'music-note';
  summary: string;
  tags: string[];
  status: 'planned' | 'draft' | 'published';
};

export const posts: PostItem[] = [
  {
    title: 'Why this site became a dark archive',
    slug: 'why-dark-archive',
    date: '2026-05-26',
    category: 'site-log',
    status: 'planned',
    summary: 'A future note about turning a simple link page into a music-first creator archive.',
    tags: ['Site Rebuild', 'Astro', 'Design']
  },
  {
    title: 'How the music catalogue is synced',
    slug: 'music-catalogue-sync',
    date: '2026-05-26',
    category: 'technical-note',
    status: 'planned',
    summary: 'A future technical note covering VocaDB sync, manual overrides, release visibility, and sitemap generation.',
    tags: ['VocaDB', 'Data Pipeline', 'Maintenance']
  },
  {
    title: 'Release diary template',
    slug: 'release-diary-template',
    date: '2026-05-26',
    category: 'release-diary',
    status: 'draft',
    summary: 'A reusable structure for documenting song background, credits, platform links, lyrics context, and production notes.',
    tags: ['Release', 'Credits', 'Lyrics']
  },
  {
    title: 'Production notes index',
    slug: 'production-notes-index',
    date: '2026-05-26',
    category: 'music-note',
    status: 'planned',
    summary: 'A future index for notes about arrangement, vocals, mixing direction, and the production process behind releases.',
    tags: ['Music Production', 'Arrangement', 'Archive']
  }
];
