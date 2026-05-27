export type WorkItem = {
  title: string;
  slug: string;
  status: 'live' | 'reserved' | 'draft' | 'maintained';
  category: 'site' | 'tool' | 'infrastructure' | 'music-system' | 'archive';
  summary: string;
  href?: string;
  tags: string[];
};

export const works: WorkItem[] = [
  {
    title: 'Misaka Sarina Homepage',
    slug: 'misaka-sarina-homepage',
    status: 'live',
    category: 'site',
    summary: 'Dark Archive style creator homepage built with Astro, VocaDB-synced music data, and GitHub Pages deployment.',
    href: '/',
    tags: ['Astro', 'GitHub Pages', 'Music Archive']
  },
  {
    title: 'Music Catalogue System',
    slug: 'music-catalogue-system',
    status: 'maintained',
    category: 'music-system',
    summary: 'VocaDB sync plus manual override layer for featured releases, hidden entries, corrected metadata, and archive visibility rules.',
    href: '/music/',
    tags: ['VocaDB', 'Overrides', 'Release Archive']
  },
  {
    title: 'Links Archive',
    slug: 'links-archive',
    status: 'live',
    category: 'archive',
    summary: 'Structured replacement for the original link-in-bio page, grouped by listening platforms, socials, support, and projects.',
    href: '/links/',
    tags: ['Links', 'Identity', 'Archive']
  },
  {
    title: 'Digital Garden',
    slug: 'digital-garden',
    status: 'reserved',
    category: 'archive',
    summary: 'Reserved space for technical notes, release diaries, lyrics context, production logs, and infrastructure SOPs.',
    href: '/blog/',
    tags: ['Notes', 'Release Diary', 'SOP']
  },
  {
    title: 'Infrastructure Notes',
    slug: 'infrastructure-notes',
    status: 'draft',
    category: 'infrastructure',
    summary: 'Future index for deployment records, network experiments, self-hosted tools, and reproducible maintenance notes.',
    tags: ['Infra', 'Self-hosting', 'Logs']
  }
];
