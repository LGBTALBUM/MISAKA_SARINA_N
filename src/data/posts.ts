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
  category: 'release-diary' | 'technical-note' | 'site-log' | 'music-note' | 'business-note' | 'field-note';
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
  },
  {
    title: 'Business collaboration brief',
    slug: 'business-collaboration-brief',
    date: '2026-06-03',
    category: 'business-note',
    status: 'draft',
    summary: 'A compact guide for starting a collaboration request with useful context, scope, timeline, and budget boundaries.',
    tags: ['Business', 'Collaboration', 'Brief'],
    bodySections: [
      {
        title: 'What to include',
        body: 'A useful first message includes the project type, expected outcome, deadline, budget range, reference links, and the decision maker or contact person.'
      },
      {
        title: 'Why scope matters',
        body: 'Small creator projects are easiest to finish when the scope is explicit. A clear scope keeps the work reviewable, prevents hidden assumptions, and makes later maintenance easier.'
      }
    ],
    links: [
      { label: 'Business', href: '/business/', note: 'Collaboration entry point' },
      { label: 'Contact', href: '/contact/', note: 'Send the first message' }
    ]
  },
  {
    title: 'Maintaining a creator archive after launch',
    slug: 'maintaining-creator-archive',
    date: '2026-06-03',
    category: 'site-log',
    status: 'draft',
    summary: 'A maintenance note about keeping links, releases, pages, metadata, and deployment details understandable after the site is already public.',
    tags: ['Maintenance', 'Archive', 'Deployment'],
    bodySections: [
      {
        title: 'After launch',
        body: 'A public site is not finished when it deploys. Links change, releases get new platforms, descriptions need refinement, and deployment settings can drift away from the original assumptions.'
      },
      {
        title: 'Maintenance surface',
        body: 'The important maintenance surfaces are content data, generated music metadata, manual overrides, external links, domain settings, and the visual system. Each should have a clear place to be updated.'
      }
    ],
    links: [
      { label: 'Works', href: '/works/', note: 'Project index' },
      { label: 'Release timeline', href: '/music/timeline/', note: 'Music archive timeline' }
    ]
  },
  {
    title: 'Field notes on small web systems',
    slug: 'small-web-systems-field-notes',
    date: '2026-06-03',
    category: 'field-note',
    status: 'planned',
    summary: 'Loose notes about personal web systems, static deployment, creator identity, and keeping technical work legible.',
    tags: ['Small Web', 'Static Site', 'Infrastructure'],
    bodySections: [
      {
        title: 'Small systems',
        body: 'Small web systems should be boring in the best way: easy to inspect, easy to move, easy to rebuild, and not dependent on an oversized backend unless the content truly needs it.'
      },
      {
        title: 'Legibility',
        body: 'A project is easier to keep alive when its structure explains itself. Routes, data files, notes, and deployment settings should make sense to the future maintainer.'
      }
    ],
    links: [
      { label: 'Business', href: '/business/', note: 'Web archive work' },
      { label: 'GitHub repository', href: 'https://github.com/LGBTALBUM/MISAKA_SARINA_N', note: 'Current implementation' }
    ]
  }
];
