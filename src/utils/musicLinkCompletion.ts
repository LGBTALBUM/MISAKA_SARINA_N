import { musicReleases } from '../data/music';
import type { MusicRelease } from '../data/music';

export type LinkCompletionResult = {
  platforms: MusicRelease['platforms'];
  completedFrom?: {
    slug: string;
    title: string;
    source: string;
  };
};

const VERSION_TRAILERS = [
  /\s*\((instrumental|off vocal|vocal off|karaoke|acoustic|remix|extended version|radio edit|take \d+|short ver\.|short version|2025 remix)[^)]+\)$/i,
  /\s*\[(instrumental|off vocal|vocal off|karaoke|acoustic|remix|extended version|radio edit|take \d+|short ver\.|short version|2025 remix)[^\]]+\]$/i,
  /\s*（(instrumental|off vocal|vocal off|karaoke|acoustic|remix|extended version|radio edit|take \d+|short ver\.|short version|2025 remix)[^）]+）$/i
];

export const normalizeCatalogueTitle = (title: string) => {
  let normalized = title
    .toLowerCase()
    .replace(/[～~]/g, '~')
    .replace(/[「」『』]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  for (const pattern of VERSION_TRAILERS) {
    normalized = normalized.replace(pattern, '').trim();
  }

  return normalized;
};

const generatedLinkIndex = new Map<string, MusicRelease>();

for (const release of musicReleases) {
  if (!release.platforms || release.platforms.length === 0) continue;
  const key = normalizeCatalogueTitle(release.title);
  const existing = generatedLinkIndex.get(key);
  if (!existing || release.platforms.length > existing.platforms.length) {
    generatedLinkIndex.set(key, release);
  }
}

export const completePublicLinks = (release: MusicRelease): LinkCompletionResult => {
  if (release.platforms.length > 0) return { platforms: release.platforms };
  if (release.source?.label !== 'Manual catalogue') return { platforms: release.platforms };

  const match = generatedLinkIndex.get(normalizeCatalogueTitle(release.title));
  if (!match || match.slug === release.slug || match.platforms.length === 0) {
    return { platforms: release.platforms };
  }

  return {
    platforms: match.platforms,
    completedFrom: {
      slug: match.slug,
      title: match.title,
      source: match.source?.label ?? 'Generated catalogue'
    }
  };
};
