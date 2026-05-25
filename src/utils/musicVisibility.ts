import type { MusicRelease } from '../data/music';

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

const SHORT_VERSION_KEYWORDS = [
  /short\s*ver\.?/i,
  /short\s*version/i,
  /tv\s*size/i,
  /demo/i
];

const normaliseTitle = (title: string) =>
  title
    .toLowerCase()
    .replace(/[\[\]【】()（）]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export const isProfileEntry = (release: MusicRelease) => release.type === 'profile';

export const isVersionEntry = (release: MusicRelease) => {
  const title = normaliseTitle(release.title);
  return VERSION_KEYWORDS.some((pattern) => pattern.test(title));
};

export const isSecondaryEntry = (release: MusicRelease) => {
  const title = normaliseTitle(release.title);
  return isVersionEntry(release) || SHORT_VERSION_KEYWORDS.some((pattern) => pattern.test(title));
};

export const isMainCatalogueEntry = (release: MusicRelease) =>
  !isProfileEntry(release) && !isVersionEntry(release);

export const getMainCatalogueReleases = (releases: MusicRelease[]) =>
  releases.filter((release) => isMainCatalogueEntry(release));

export const getSecondaryReleases = (releases: MusicRelease[]) =>
  releases.filter((release) => !isProfileEntry(release) && !isMainCatalogueEntry(release));

export const getProfileEntries = (releases: MusicRelease[]) =>
  releases.filter((release) => isProfileEntry(release));

export const getFeaturedCatalogueRelease = (releases: MusicRelease[]) =>
  releases.find((release) => isMainCatalogueEntry(release)) ??
  releases.find((release) => !isProfileEntry(release)) ??
  releases[0];
