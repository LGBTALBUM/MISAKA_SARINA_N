export type ContentSection = {
  title: string;
  body: string;
};

export type ContentLink = {
  label: string;
  href: string;
  note?: string;
};

export type PostItem = {
  title: string;
  slug: string;
  date: string;
  category: 'release-diary' | 'technical-note' | 'site-log' | 'music-note';
  summary: string;
  tags: string[];
  status: 'planned' | 'draft' | 'published';
  bodySections?: ContentSection[];
  links?: ContentLink[];
  related?: ContentLink[];
};

export const posts: PostItem[] = [
  {
    title: 'Why this site became a dark archive',
    slug: 'why-dark-archive',
    date: '2026-05-26',
    category: 'site-log',
    status: 'planned',
    summary: 'A future note about turning a simple link page into a music-first creator archive.',
    tags: ['Site Rebuild', 'Astro', 'Design'],
    bodySections: [
      {
        title: 'Context',
        body: 'The previous homepage was useful as a link collection, but it did not fully represent the music catalogue, project identity, or long-term archive needs of Misaka Sarina / Siacone Art.'
      },
      {
        title: 'Design direction',
        body: 'The Dark Archive direction keeps the site quiet, music-first, and slightly technical. It avoids a generic link-in-bio feeling and makes room for releases, works, notes, and maintenance traces.'
      }
    ],
    links: [
      { label: 'Homepage', href: '/', note: 'Current Dark Archive landing page' },
      { label: 'Works archive', href: '/works/', note: 'Project and system index' }
    ],
    related: [
      { label: 'Misaka Sarina Homepage', href: '/works/misaka-sarina-homepage/' }
    ]
  },
  {
    title: 'How the music catalogue is synced',
    slug: 'music-catalogue-sync',
    date: '2026-05-26',
    category: 'technical-note',
    status: 'planned',
    summary: 'A future technical note covering VocaDB sync, manual overrides, release visibility, and sitemap generation.',
    tags: ['VocaDB', 'Data Pipeline', 'Maintenance'],
    bodySections: [
      {
        title: 'Generated data',
        body: 'The catalogue sync writes generated release entries into src/data/music.ts. This file should be treated as generated output and reviewed after each sync.'
      },
      {
        title: 'Manual curation',
        body: 'Manual corrections are stored in src/data/musicOverrides.ts. This keeps featured selections, hidden entries, corrected descriptions, cover replacements, credits, and notes safe from future sync operations.'
      },
      {
        title: 'Display layer',
        body: 'Pages should read from src/utils/musicCatalogue.ts so they receive the resolved, override-aware catalogue rather than the raw generated VocaDB data.'
      }
    ],
    links: [
      { label: 'Music archive', href: '/music/', note: 'Resolved catalogue output' },
      { label: 'VocaDB artist profile', href: 'https://vocadb.net/Ar/75285', note: 'Source profile' }
    ],
    related: [
      { label: 'Music Catalogue System', href: '/works/music-catalogue-system/' }
    ]
  },
  {
    title: 'Release diary template',
    slug: 'release-diary-template',
    date: '2026-05-26',
    category: 'release-diary',
    status: 'draft',
    summary: 'A reusable structure for documenting song background, credits, platform links, lyrics context, and production notes.',
    tags: ['Release', 'Credits', 'Lyrics'],
    bodySections: [
      {
        title: 'Suggested structure',
        body: 'A release diary can include background context, production notes, vocal direction, arrangement notes, credits, platform links, lyrics context, and post-release reflections.'
      },
      {
        title: 'Connection to releases',
        body: 'Future diary entries can link back to music release detail pages so listeners can move between catalogue metadata and longer-form context.'
      }
    ],
    links: [
      { label: 'Music archive', href: '/music/', note: 'Release catalogue' }
    ],
    related: [
      { label: 'Production notes index', href: '/blog/production-notes-index/' }
    ]
  },
  {
    title: 'Production notes index',
    slug: 'production-notes-index',
    date: '2026-05-26',
    category: 'music-note',
    status: 'planned',
    summary: 'A future index for notes about arrangement, vocals, mixing direction, and the production process behind releases.',
    tags: ['Music Production', 'Arrangement', 'Archive'],
    bodySections: [
      {
        title: 'Purpose',
        body: 'This index is reserved for music production notes that are too specific for the main homepage but valuable for documenting creative decisions over time.'
      },
      {
        title: 'Possible topics',
        body: 'Future notes can cover arrangement ideas, vocal processing, mixing direction, lyrics context, instrument choices, and release-specific production decisions.'
      }
    ],
    links: [
      { label: 'Release diary template', href: '/blog/release-diary-template/', note: 'Reusable writing structure' }
    ],
    related: [
      { label: 'Digital Garden', href: '/works/digital-garden/' }
    ]
  }
];
