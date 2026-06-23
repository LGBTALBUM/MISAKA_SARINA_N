export type ContentSection = {
  title: string;
  body: string;
};

export type ContentLink = {
  label: string;
  href: string;
  note?: string;
};

export type ServiceEndpoint = {
  label: string;
  value: string;
  protocol: string;
  note?: string;
};

export type ChangelogEntry = {
  date: string;
  title: string;
  body: string;
};

export type WorkItem = {
  title: string;
  slug: string;
  status: 'live' | 'reserved' | 'draft' | 'maintained';
  category: 'site' | 'tool' | 'infrastructure' | 'music-system' | 'archive';
  summary: string;
  href?: string;
  tags: string[];
  bodySections?: ContentSection[];
  links?: ContentLink[];
  serviceEndpoints?: ServiceEndpoint[];
  changelog?: ChangelogEntry[];
  related?: ContentLink[];
};

export const works: WorkItem[] = [
  {
    title: 'Misaka Sarina Homepage',
    slug: 'misaka-sarina-homepage',
    status: 'live',
    category: 'site',
    summary: 'Dark Archive style creator homepage built with Astro, VocaDB-synced music data, and GitHub Pages deployment.',
    href: '/',
    tags: ['Astro', 'GitHub Pages', 'Music Archive'],
    bodySections: [
      {
        title: 'Purpose',
        body: 'This homepage turns the old link-in-bio style site into a music-first creator archive. It keeps the site lightweight while giving releases, links, projects, and notes a clearer information architecture.'
      },
      {
        title: 'Current architecture',
        body: 'The site is built with Astro and deployed as a GitHub Pages debug mirror. Pages are static, route generation is predictable, and project-path base URL handling is kept explicit for the current repository deployment.'
      }
    ],
    links: [
      { label: 'Homepage', href: '/', note: 'Current landing page' },
      { label: 'Repository', href: 'https://github.com/LGBTALBUM/MISAKA_SARINA_N', note: 'Astro rebuild source' }
    ],
    changelog: [
      { date: '2026-05-27', title: 'Dark Archive baseline', body: 'The first-level pages, music archive, detail pages, and static content sections are now aligned under the Dark Archive visual system.' }
    ],
    related: [
      { label: 'Music archive', href: '/music/' },
      { label: 'Links archive', href: '/links/' }
    ]
  },
  {
    title: 'Music Catalogue System',
    slug: 'music-catalogue-system',
    status: 'maintained',
    category: 'music-system',
    summary: 'VocaDB sync plus manual override layer for featured releases, hidden entries, corrected metadata, and archive visibility rules.',
    href: '/music/',
    tags: ['VocaDB', 'Overrides', 'Release Archive'],
    bodySections: [
      {
        title: 'Data flow',
        body: 'Generated VocaDB data lives in src/data/music.ts. Manual corrections are kept in src/data/musicOverrides.ts so sync operations can be repeated without overwriting curated site decisions.'
      },
      {
        title: 'Visibility rules',
        body: 'The catalogue prioritizes main releases while moving instrumental, off-vocal, karaoke, demo, and profile entries into lower-priority sections. Overrides can force entries into main or secondary sections when the automated rules are not enough.'
      }
    ],
    links: [
      { label: 'Music archive', href: '/music/', note: 'Release index' },
      { label: 'VocaDB profile', href: 'https://vocadb.net/Ar/75285', note: 'Source profile' }
    ],
    changelog: [
      { date: '2026-05-26', title: 'Manual override layer', body: 'Added override support for featured entries, hidden entries, manual metadata, and visibility control.' }
    ],
    related: [
      { label: 'Release detail pages', href: '/music/' },
      { label: 'Maintenance notes', href: '/blog/music-catalogue-sync/' }
    ]
  },
  {
    title: 'Links Archive',
    slug: 'links-archive',
    status: 'live',
    category: 'archive',
    summary: 'Structured replacement for the original link-in-bio page, grouped by listening platforms, socials, support, and projects.',
    href: '/links/',
    tags: ['Links', 'Identity', 'Archive'],
    bodySections: [
      {
        title: 'Role in the site',
        body: 'The links page preserves the practical function of the old mainpage while moving it into a more structured archive system. It is no longer the entire site, but it remains the fastest way to reach external profiles.'
      }
    ],
    links: [
      { label: 'Links archive', href: '/links/', note: 'External link collection' }
    ],
    related: [
      { label: 'Contact', href: '/contact/' },
      { label: 'About', href: '/about/' }
    ]
  },
  {
    title: 'Digital Garden',
    slug: 'digital-garden',
    status: 'reserved',
    category: 'archive',
    summary: 'Reserved space for technical notes, release diaries, lyrics context, production logs, and infrastructure SOPs.',
    href: '/blog/',
    tags: ['Notes', 'Release Diary', 'SOP'],
    bodySections: [
      {
        title: 'Planned scope',
        body: 'The digital garden is prepared for notes that do not fit into a release page or a project card: technical logs, site maintenance records, release context, production notes, and long-form explanations.'
      }
    ],
    links: [
      { label: 'Blog index', href: '/blog/', note: 'Current note archive' }
    ],
    related: [
      { label: 'Works archive', href: '/works/' },
      { label: 'Music archive', href: '/music/' }
    ]
  },
  {
    title: 'Infrastructure Notes',
    slug: 'infrastructure-notes',
    status: 'draft',
    category: 'infrastructure',
    summary: 'Future index for deployment records, network experiments, self-hosted tools, and reproducible maintenance notes.',
    tags: ['Infra', 'Self-hosting', 'Logs', 'NTP'],
    bodySections: [
      {
        title: 'Future direction',
        body: 'This entry is reserved for infrastructure and maintenance records. It can later link to deployment SOPs, network experiments, self-hosting notes, and operational checklists.'
      },
      {
        title: '我的NTP伺服器',
        body: 'This host is intended for NTP clients only. It should be configured as an NTP server endpoint, not opened as a normal browser page.'
      }
    ],
    serviceEndpoints: [
      {
        label: '我的NTP伺服器',
        value: 'ntp.msarina.moe',
        protocol: 'UDP/123',
        note: 'Use this value in NTP client settings. It is not an HTTP/HTTPS web link.'
      }
    ],
    changelog: [
      { date: '2026-06-23', title: 'NTP endpoint note', body: 'Documented ntp.msarina.moe as an NTP-only service endpoint for UDP/123 clients.' }
    ],
    related: [
      { label: 'Technical notes', href: '/blog/music-catalogue-sync/' },
      { label: 'Contact', href: '/contact/' }
    ]
  }
];
