import managerLyrics from './manager/lyrics.json';

export type LyricsStatus = 'complete' | 'partial' | 'pending' | 'instrumental';

export type LyricsEntry = {
  title: string;
  status: LyricsStatus;
  language?: string;
  excerpt?: string[];
  notes?: string[];
};

export const lyricsByTitle: LyricsEntry[] = managerLyrics as LyricsEntry[];
