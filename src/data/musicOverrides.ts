import type { MusicRelease } from './music';
import managerMusicOverrides from './manager/musicOverrides.json';

export type MusicReleaseOverride = Partial<Omit<MusicRelease, 'slug' | 'source'>> & {
  hidden?: boolean;
  forceMain?: boolean;
  forceSecondary?: boolean;
  featuredCandidate?: boolean;
  needsReview?: boolean;
  qualityNotes?: string[];
  source?: Partial<MusicRelease['source']>;
};

const curatedMusicOverrides: Record<string, MusicReleaseOverride> = {
  'artist-profile': {
    featured: false,
    description:
      'Official public music profiles for Misaka Sarina, grouped as an artist-profile archive entry rather than a release. Individual works remain available as separate catalogue pages.',
    notes: [
      'Profile entries are intentionally separated from release entries on the music archive page.',
      'Public artist profile links are kept here so release pages can stay focused on individual works.'
    ]
  },
  'the-terrible-days-we-ve-passed': {
    featured: true,
    description:
      'A public Misaka Sarina and Hatsune Miku release selected as the current homepage feature. The entry keeps its public YouTube and VocaDB links while the VocaDB source remains available for structured metadata review.',
    credits: ['Misaka Sarina', '初音ミク'],
    notes: [
      'Selected as the current homepage featured release.',
      'Curated site description added through musicOverrides.ts.',
      'The VocaDB source link is preserved for structured metadata review.'
    ]
  },
  'i-broke-my-lipstick-again': {
    description:
      'A sharp, character-forward Hatsune Miku release in the Misaka Sarina catalogue. Multiple public YouTube references are preserved until the final canonical platform set is confirmed.',
    credits: ['Misaka Sarina', '初音ミク'],
    notes: [
      'Manual archive copy added for public-facing readability.',
      'Review duplicate public video links before treating the platform list as final.'
    ]
  },
  'catch-the-wind': {
    forceSecondary: true,
    description:
      'A demo / alternate catalogue entry kept in the secondary archive section for reference rather than primary release positioning.',
    notes: [
      'Forced to secondary because the source type is demo and it has multiple public references.',
      'Keep available for archive completeness.'
    ]
  },
  'ytm-02-057': {
    featured: false,
    forceMain: true,
    description:
      'A private-catalogue-derived Misaka Sarina-era main release candidate. The entry remains in the curated archive but is no longer used as the homepage featured release until a public canonical platform URL is confirmed.',
    credits: ['初音ミク', 'Misaka Sarina'],
    notes: [
      'Previously selected as the homepage featured release; replaced by a public-link release.',
      'Private YouTube Music export references remain omitted from public output.',
      'Add public streaming or video links when a public canonical URL is confirmed.'
    ]
  },
  'ytm-02-058': {
    forceMain: true,
    description:
      'A Misaka Sarina-era Hatsune Miku release from the manual catalogue layer. Kept in the primary catalogue as a main work while public platform links are still pending.',
    credits: ['初音ミク', 'Misaka Sarina'],
    notes: [
      'Curated as a primary archive entry from the manual catalogue.',
      'Public platform link not added yet.'
    ]
  },
  'ytm-02-059': {
    forceMain: true,
    description:
      'A starry, late-night archive entry from the manual Misaka Sarina catalogue. This page is ready for public links once a canonical platform URL is confirmed.',
    credits: ['初音ミク', 'Misaka Sarina'],
    notes: [
      'Curated as a primary archive entry from the manual catalogue.',
      'Public platform link not added yet.'
    ]
  },
  'ytm-02-060': {
    forceMain: true,
    description:
      'A fireworks-themed Misaka Sarina-era release preserved through the manual catalogue layer and positioned as a main archive entry.',
    credits: ['初音ミク', 'Misaka Sarina'],
    notes: [
      'Curated as a primary archive entry from the manual catalogue.',
      'Public platform link not added yet.'
    ]
  },
  'ytm-02-061': {
    forceMain: true,
    description:
      'A nocturne-oriented Misaka Sarina-era entry that fits the site’s Dark Archive direction. It remains public-link-ready but does not expose private playlist references.',
    credits: ['初音ミク', 'Misaka Sarina'],
    notes: [
      'Curated as a primary archive entry from the manual catalogue.',
      'Public platform link not added yet.'
    ]
  },
  'ytm-02-062': {
    forceMain: true,
    description:
      'A farewell-to-the-past themed Misaka Sarina-era release kept as a main catalogue entry for the archive timeline.',
    credits: ['初音ミク', 'Misaka Sarina'],
    notes: [
      'Curated as a primary archive entry from the manual catalogue.',
      'Public platform link not added yet.'
    ]
  },
  'ytm-02-063': {
    forceMain: true,
    description:
      'A post-rain Misaka Sarina-era release preserved as a primary archive entry. The manual layer keeps the public page stable while source data is gradually cleaned.',
    credits: ['初音ミク', 'Misaka Sarina'],
    notes: [
      'Curated as a primary archive entry from the manual catalogue.',
      'Public platform link not added yet.'
    ]
  },
  'ytm-02-064': {
    forceMain: true,
    description:
      'A direct, question-like Misaka Sarina-era release from the manual catalogue layer, promoted into the primary archive set.',
    credits: ['初音ミク', 'Misaka Sarina'],
    notes: [
      'Curated as a primary archive entry from the manual catalogue.',
      'Public platform link not added yet.'
    ]
  },
  'ytm-02-065': {
    forceMain: true,
    description:
      'A pale-dream themed Misaka Sarina-era release kept in the primary catalogue as part of the curated 113-114 archive block.',
    credits: ['初音ミク', 'Misaka Sarina'],
    notes: [
      'Curated as a primary archive entry from the manual catalogue.',
      'Public platform link not added yet.'
    ]
  },
  'ytm-02-066': {
    forceSecondary: true,
    description:
      'Instrumental version of Rebirth. Kept in the secondary archive section to avoid competing with the main release entry.'
  },
  'ytm-02-067': {
    forceSecondary: true,
    description:
      'Instrumental version of 天南星的世界. Kept in the secondary archive section to avoid competing with the main release entry.'
  },
  'ytm-02-068': {
    forceSecondary: true,
    description:
      'Instrumental version of 相約繁星間. Kept in the secondary archive section to avoid competing with the main release entry.'
  },
  'ytm-02-069': {
    forceSecondary: true,
    description:
      'Instrumental version of 煙花漫天. Kept in the secondary archive section to avoid competing with the main release entry.'
  },
  'ytm-02-070': {
    forceSecondary: true,
    description:
      'Instrumental version of 夜聲. Kept in the secondary archive section to avoid competing with the main release entry.'
  },
  'ytm-02-071': {
    forceSecondary: true,
    description:
      'Instrumental version of 再見了，曾經的我！. Kept in the secondary archive section to avoid competing with the main release entry.'
  },
  'ytm-02-072': {
    forceSecondary: true,
    description:
      'Instrumental version of 雨後. Kept in the secondary archive section to avoid competing with the main release entry.'
  },
  'ytm-02-073': {
    forceSecondary: true,
    description:
      'Instrumental version of 告訴我吧. Kept in the secondary archive section to avoid competing with the main release entry.'
  },
  'ytm-02-074': {
    forceSecondary: true,
    description:
      'Instrumental version of 蒼白的夢. Kept in the secondary archive section to avoid competing with the main release entry.'
  }
};

export const musicOverrides: Record<string, MusicReleaseOverride> = {
  ...curatedMusicOverrides,
  ...(managerMusicOverrides as Record<string, MusicReleaseOverride>)
};
