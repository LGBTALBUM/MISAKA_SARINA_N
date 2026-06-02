import type { MusicRelease } from '../data/music';

export type CoverCapableRelease = MusicRelease & {
  coverSquare?: string;
};

export type ResolvedMusicCover = {
  primary?: string;
  fallback?: string;
  hasCover: boolean;
  strategy: 'square' | 'source' | 'placeholder';
};

export const resolveUrlWithBase = (url: string, baseUrl: string) => {
  if (/^https?:\/\//i.test(url)) return url;
  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${base}${url.replace(/^\/+/, '')}`;
};

export const getSquareCoverCandidate = (cover?: string) => {
  if (!cover) return undefined;

  try {
    const url = new URL(cover);

    if (url.hostname === 'i.ytimg.com' || url.hostname.endsWith('.ytimg.com')) {
      const parts = url.pathname.split('/').filter(Boolean);
      const videoIndex = parts.findIndex((part) => part === 'vi');
      const videoId = videoIndex >= 0 ? parts[videoIndex + 1] : undefined;
      if (videoId) return `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
    }

    if (url.hostname.includes('sndcdn.com')) {
      return cover.replace(/-large\./, '-t500x500.');
    }

    return cover;
  } catch {
    return cover;
  }
};

export const resolveMusicCover = (release: CoverCapableRelease, baseUrl: string): ResolvedMusicCover => {
  const originalCover = release.cover ? resolveUrlWithBase(release.cover, baseUrl) : undefined;
  const squareCandidate = release.coverSquare
    ? resolveUrlWithBase(release.coverSquare, baseUrl)
    : release.cover
      ? resolveUrlWithBase(getSquareCoverCandidate(release.cover) ?? release.cover, baseUrl)
      : undefined;

  if (squareCandidate) {
    return {
      primary: squareCandidate,
      fallback: originalCover && originalCover !== squareCandidate ? originalCover : undefined,
      hasCover: true,
      strategy: release.coverSquare || squareCandidate !== originalCover ? 'square' : 'source'
    };
  }

  if (originalCover) {
    return {
      primary: originalCover,
      hasCover: true,
      strategy: 'source'
    };
  }

  return {
    hasCover: false,
    strategy: 'placeholder'
  };
};
