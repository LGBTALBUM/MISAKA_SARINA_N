import type { MusicRelease } from '../data/music';

type VisibilityRelease = MusicRelease & {
  forceMain?: boolean;
  forceSecondary?: boolean;
};

const VERSION_KEYWORDS = [
  /instrumental/i,
  /off\s*vocal/i,
  /vocal\s*off/i,
  /karaoke/i,
  /inst\.?/i,
  /伴奏/,
  /カラオケ/,
  /オフボーカル/,
  /offvo/i
];

const SECONDARY_VERSION_KEYWORDS = [
  /short\s*ver\.?/i,
  /short\s*version/i,
  /tv\s*size/i,
  /demo/i,
  /acoustic/i,
  /acappella/i,
  /a\s*cappella/i,
  /remix/i,
  /extended\s*version/i,
  /radio\s*edit/i,
  /take\s*\d+/i,
  /karaoke\s*version/i,
  /\bver\.?\b/i
];

const normaliseTitle = (title: string) =>
  title
    .toLowerCase()
    .replace(/[\[\]【】()（）]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export const isProfileEntry = (release: VisibilityRelease) => release.type === 'profile';

export const isVersionEntry = (release: VisibilityRelease) => {
  if (release.forceMain) return false;
  if (release.forceSecondary) return true;

  const title = normaliseTitle(release.title);
  return VERSION_KEYWORDS.some((pattern) => pattern.test(title));
};

export const isSecondaryEntry = (release: VisibilityRelease) => {
  if (release.forceMain) return false;
  if (release.forceSecondary) return true;

  const title = normaliseTitle(release.title);
  return isVersionEntry(release) || SECONDARY_VERSION_KEYWORDS.some((pattern) => pattern.test(title));
};

export const isMainCatalogueEntry = (release: VisibilityRelease) =>
  !isProfileEntry(release) && !isSecondaryEntry(release);

export const getMainCatalogueReleases = <T extends VisibilityRelease>(releases: T[]) =>
  releases.filter((release) => isMainCatalogueEntry(release));

export const getSecondaryReleases = <T extends VisibilityRelease>(releases: T[]) =>
  releases.filter((release) => !isProfileEntry(release) && !isMainCatalogueEntry(release));

export const getProfileEntries = <T extends VisibilityRelease>(releases: T[]) =>
  releases.filter((release) => isProfileEntry(release));

export const getFeaturedCatalogueRelease = <T extends VisibilityRelease>(releases: T[]) =>
  releases.find((release) => release.featured && isMainCatalogueEntry(release)) ??
  releases.find((release) => isMainCatalogueEntry(release)) ??
  releases.find((release) => !isProfileEntry(release)) ??
  releases[0];
