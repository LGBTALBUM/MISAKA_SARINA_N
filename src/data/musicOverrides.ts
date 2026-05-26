import type { MusicRelease } from './music';

export type MusicReleaseOverride = Partial<Omit<MusicRelease, 'slug' | 'source'>> & {
  hidden?: boolean;
  forceMain?: boolean;
  forceSecondary?: boolean;
  source?: Partial<MusicRelease['source']>;
};

export const musicOverrides: Record<string, MusicReleaseOverride> = {
  // Example:
  // 'the-terrible-days-we-ve-passed': {
  //   featured: true,
  //   description: 'Manual description shown on the site.',
  //   notes: ['Manual note kept outside the VocaDB generated file.']
  // }
};
