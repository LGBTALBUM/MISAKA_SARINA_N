import { musicReleases } from '../data/music';
import type { MusicRelease } from '../data/music';
import { manualMusicReleases } from '../data/manualMusic';
import { manualMusicQualityOverrides } from '../data/manualMusicQuality';
import { musicOverrides } from '../data/musicOverrides';

export type ResolvedMusicRelease = MusicRelease & {
  hidden?: boolean;
  forceMain?: boolean;
  forceSecondary?: boolean;
  featuredCandidate?: boolean;
  needsReview?: boolean;
  qualityNotes?: string[];
};

const mergeRelease = (release: MusicRelease): ResolvedMusicRelease => {
  const qualityOverride = manualMusicQualityOverrides[release.slug];
  const qualityResolved = qualityOverride
    ? {
        ...release,
        ...qualityOverride,
        slug: release.slug,
        platforms: qualityOverride.platforms ?? release.platforms,
        credits: qualityOverride.credits ?? release.credits,
        notes: [
          ...(qualityOverride.notes ?? release.notes ?? []),
          ...(qualityOverride.qualityNotes ?? []).map((note) => `Quality note: ${note}`)
        ]
      }
    : release;

  const override = musicOverrides[qualityResolved.slug];
  if (!override) return qualityResolved;

  return {
    ...qualityResolved,
    ...override,
    slug: qualityResolved.slug,
    platforms: override.platforms ?? qualityResolved.platforms,
    credits: override.credits ?? qualityResolved.credits,
    notes: override.notes ?? qualityResolved.notes,
    source: override.source ? { ...qualityResolved.source, ...override.source } as MusicRelease['source'] : qualityResolved.source
  };
};

export const getRawCatalogueReleases = () => [
  ...musicReleases,
  ...manualMusicReleases
];

export const getResolvedReleases = () =>
  getRawCatalogueReleases().map(mergeRelease).filter((release) => !release.hidden);

export const getSortedReleases = () =>
  [...getResolvedReleases()].sort(
    (a, b) => new Date(b.releaseDate).valueOf() - new Date(a.releaseDate).valueOf()
  );

export const getFeaturedRelease = () =>
  getResolvedReleases().find((release) => release.featured) ?? getResolvedReleases()[0];
