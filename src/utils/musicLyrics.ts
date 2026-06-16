import { lyricsByTitle, type LyricsEntry } from '../data/musicLyrics';
import type { ResolvedMusicRelease } from './musicCatalogue';

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[()（）\[\]【】~～!！?？'".,，。:：\s-]+/g, '')
    .trim();

export const getLyricsForRelease = (release: ResolvedMusicRelease): LyricsEntry | undefined => {
  const releaseTitle = normalize(release.title);
  return lyricsByTitle.find((entry) => releaseTitle.includes(normalize(entry.title)) || normalize(entry.title).includes(releaseTitle));
};

export const getLyricsStats = (releases: ResolvedMusicRelease[]) => {
  const matched = releases.filter((release) => getLyricsForRelease(release));
  return {
    seeded: lyricsByTitle.length,
    matched: matched.length,
    pending: Math.max(0, releases.length - matched.length)
  };
};
