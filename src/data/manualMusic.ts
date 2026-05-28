import type { MusicRelease } from './music';

export type ManualMusicRelease = MusicRelease & {
  source: MusicRelease['source'] & {
    label: 'Manual catalogue' | string;
  };
};

export const manualMusicReleases: ManualMusicRelease[] = [
  // Add YTM-derived catalogue entries here when they are missing from VocaDB.
  // These entries are private-source-derived and should not expose private playlist URLs.
  // Example:
  // {
  //   slug: 'example-release',
  //   title: 'Example Release',
  //   type: 'single',
  //   releaseDate: '2026-01-01',
  //   description: 'Manually added from private catalogue reference.',
  //   cover: '',
  //   featured: false,
  //   platforms: [
  //     { label: 'YouTube Music', href: 'https://music.youtube.com/watch?v=PUBLIC_TRACK_ID' }
  //   ],
  //   credits: [],
  //   notes: ['Added manually because VocaDB metadata may be incomplete.'],
  //   source: {
  //     label: 'Manual catalogue',
  //     id: 'ytm-private-catalogue-reference',
  //     href: '/music/'
  //   }
  // }
];
