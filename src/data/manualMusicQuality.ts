import type { MusicRelease } from './music';

export type ManualMusicQualityOverride = {
  title?: string;
  releaseDate?: string;
  description?: string;
  cover?: string;
  coverSquare?: string;
  credits?: MusicRelease['credits'];
  notes?: MusicRelease['notes'];
  platforms?: MusicRelease['platforms'];
  featuredCandidate?: boolean;
  needsReview?: boolean;
  qualityNotes?: string[];
};

export const manualMusicQualityOverrides: Record<string, ManualMusicQualityOverride> = {
  'ytm-02-053': {
    title: '小房間',
    credits: ['Artist / vocal field from export: 初音ミク · Misaka Sarina'],
    needsReview: false,
    qualityNotes: ['Normalized exported YouTube-style title and corrected unknown artist field.']
  },
  'ytm-01-038': {
    title: '再給我一天的時間吧QAQ',
    qualityNotes: ['Normalized lowercase qaq variant to match the main title style.']
  },
  'ytm-01-048': {
    title: '小樹林 (一切都變了啊)',
    qualityNotes: ['Normalized spacing before parenthetical subtitle.']
  },
  'ytm-01-049': {
    title: '月夜～帶我飛吧',
    qualityNotes: ['Normalized separator style for subtitle.']
  },
  'ytm-02-047': {
    title: '月夜～帶我飛吧 (2025 Remix)',
    qualityNotes: ['Normalized separator and parenthetical spacing.']
  },
  'ytm-02-057': {
    featuredCandidate: true,
    qualityNotes: ['Important Misaka Sarina-era main release candidate.']
  },
  'ytm-02-058': {
    featuredCandidate: true,
    qualityNotes: ['Important Misaka Sarina-era main release candidate.']
  },
  'ytm-02-059': {
    featuredCandidate: true,
    qualityNotes: ['Important Misaka Sarina-era main release candidate.']
  },
  'ytm-02-060': {
    featuredCandidate: true,
    qualityNotes: ['Important Misaka Sarina-era main release candidate.']
  },
  'ytm-02-061': {
    featuredCandidate: true,
    qualityNotes: ['Important Misaka Sarina-era main release candidate.']
  },
  'ytm-02-062': {
    featuredCandidate: true,
    qualityNotes: ['Important Misaka Sarina-era main release candidate.']
  },
  'ytm-02-063': {
    featuredCandidate: true,
    qualityNotes: ['Important Misaka Sarina-era main release candidate.']
  },
  'ytm-02-064': {
    featuredCandidate: true,
    qualityNotes: ['Important Misaka Sarina-era main release candidate.']
  },
  'ytm-02-065': {
    featuredCandidate: true,
    qualityNotes: ['Important Misaka Sarina-era main release candidate.']
  }
};
