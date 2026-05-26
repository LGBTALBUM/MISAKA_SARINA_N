import { musicReleases } from '../data/music';
import type { MusicRelease } from '../data/music';
import { musicOverrides } from '../data/musicOverrides';

export type ResolvedMusicRelease = MusicRelease & {
  hidden?: boolean;
  forceMain?: boolean;
  forceSecondary?: boolean;
};

const mergeRelease = (release: MusicRelease): ResolvedMusicRelease => {
  const override = musicOverrides[release.slug];
  if (!override) return release;

  return {
    ...release,
    ...override,
    slug: release.slug,
    platforms: override.platforms ?? release.platforms,
    credits: override.credits ?? release.credits,
    notes: override.notes ?? release.notes,
    source: override.source ? { ...release.source, ...override.source } as MusicRelease['source'] : release.source
  };
};

export const getResolvedReleases = () =>
  musicReleases.map(mergeRelease).filter((release) => !release.hidden);

export const getSortedReleases = () =>
  [...getResolvedReleases()].sort(
    (a, b) => new Date(b.releaseDate).valueOf() - new Date(a.releaseDate).valueOf()
  );

export const getFeaturedRelease = () =>
  getResolvedReleases().find((release) => release.featured) ?? getResolvedReleases()[0];
