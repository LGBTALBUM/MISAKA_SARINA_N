import { musicReleases } from '../data/music';
import type { MusicPlatform, MusicRelease } from '../data/music';

export type LinkCompletion = {
  sourceSlug: string;
  sourceTitle: string;
  sourceId?: string;
  platforms: MusicPlatform[];
};

export type LinkCompletedRelease<T extends MusicRelease = MusicRelease> = T & {
  linkCompletion?: LinkCompletion;
};

const VERSION_SEGMENTS = [
  /\binstrumental\b/gi,
  /\boff\s*vocal\b/gi,
  /\bvocal\s*off\b/gi,
  /\bkaraoke\b/gi,
  /\bacoustic\b/gi,
  /\bacappella\b/gi,
  /\ba\s*cappella\b/gi,
  /\bremix\b/gi,
  /\bextended\s*version\b/gi,
  /\bradio\s*edit\b/gi,
  /\btake\s*\d+\b/gi,
  /\bshort\s*ver\.?\b/gi,
  /\bshort\s*version\b/gi,
  /\btv\s*size\b/gi,
  /\bdemo\b/gi,
  /伴奏/g,
  /カラオケ/g,
  /オフボーカル/g
];

export const normalizeCompletionTitle = (title: string) => {
  let normalized = title
    .toLowerCase()
    .replace(/[～~]/g, ' ')
    .replace(/「|」|『|』|“|”|"|'/g, '')
    .replace(/\[[^\]]*\]/g, ' ')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/（[^）]*）/g, ' ')
    .replace(/【[^】]*】/g, ' ');

  VERSION_SEGMENTS.forEach((pattern) => {
    normalized = normalized.replace(pattern, ' ');
  });

  return normalized
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const isGeneratedReleaseWithPublicLinks = (release: MusicRelease) =>
  release.source?.label !== 'Manual catalogue' &&
  release.type !== 'profile' &&
  release.platforms.length > 0;

const dedupePlatforms = (platforms: MusicPlatform[]) => {
  const seen = new Set<string>();
  return platforms.filter((platform) => {
    const key = `${platform.label.toLowerCase()}::${platform.href}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

export const buildPublicLinkIndex = () => {
  const entries = new Map<string, LinkCompletion>();

  musicReleases
    .filter(isGeneratedReleaseWithPublicLinks)
    .forEach((release) => {
      const key = normalizeCompletionTitle(release.title);
      if (!key) return;
      const current = entries.get(key);
      const candidate: LinkCompletion = {
        sourceSlug: release.slug,
        sourceTitle: release.title,
        sourceId: release.source?.id,
        platforms: dedupePlatforms(release.platforms)
      };

      if (!current || candidate.platforms.length > current.platforms.length) {
        entries.set(key, candidate);
      }
    });

  return entries;
};

const publicLinkIndex = buildPublicLinkIndex();

export const getPublicLinkCompletion = (release: MusicRelease) => {
  if (release.source?.label !== 'Manual catalogue') return undefined;
  if (release.platforms.length > 0) return undefined;

  const key = normalizeCompletionTitle(release.title);
  const completion = key ? publicLinkIndex.get(key) : undefined;

  if (!completion) return undefined;
  if (completion.sourceSlug === release.slug) return undefined;

  return completion;
};

export const applyPublicLinkCompletion = <T extends MusicRelease>(release: T): LinkCompletedRelease<T> => {
  const completion = getPublicLinkCompletion(release);
  if (!completion) return release;

  return {
    ...release,
    platforms: completion.platforms,
    notes: [
      ...(release.notes ?? []),
      `Public platform links completed from generated catalogue entry: ${completion.sourceTitle} (${completion.sourceSlug}).`
    ],
    linkCompletion: completion
  };
};
