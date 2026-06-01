import { musicReleases } from '../data/music';
import type { MusicRelease } from '../data/music';
import { manualMusicReleases } from '../data/manualMusic';
import { manualMusicQualityOverrides } from '../data/manualMusicQuality';
import { musicOverrides } from '../data/musicOverrides';
import { completePublicLinks } from './musicLinkCompletion';

export type ResolvedMusicRelease = MusicRelease & {
  hidden?: boolean;
  forceMain?: boolean;
  forceSecondary?: boolean;
  featuredCandidate?: boolean;
  needsReview?: boolean;
  qualityNotes?: string[];
  linkCompletedFrom?: {
    slug: string;
    title: string;
    source: string;
  };
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

  const completed = completePublicLinks(qualityResolved);
  const linkCompletedResolved: ResolvedMusicRelease = completed.completedFrom
    ? {
        ...qualityResolved,
        platforms: completed.platforms,
        linkCompletedFrom: completed.completedFrom,
        notes: [
          ...(qualityResolved.notes ?? []),
          `Public links completed from ${completed.completedFrom.title} (${completed.completedFrom.slug}).`
        ]
      }
    : qualityResolved;

  const override = musicOverrides[linkCompletedResolved.slug];
  if (!override) return linkCompletedResolved;

  return {
    ...linkCompletedResolved,
    ...override,
    slug: linkCompletedResolved.slug,
    platforms: override.platforms ?? linkCompletedResolved.platforms,
    credits: override.credits ?? linkCompletedResolved.credits,
    notes: override.notes ?? linkCompletedResolved.notes,
    source: override.source ? { ...linkCompletedResolved.source, ...override.source } as MusicRelease['source'] : linkCompletedResolved.source
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
