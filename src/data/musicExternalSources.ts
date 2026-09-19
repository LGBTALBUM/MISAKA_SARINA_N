export type MusicExternalSource = {
  id: string;
  label: string;
  href: string;
  eyebrow: string;
  copyKey: string;
  description: string;
  meta: string;
};

export const musicExternalSources: MusicExternalSource[] = [
  {
    id: 'kiite',
    label: 'Kiite — Misaka Sarina',
    href: 'https://kiite.jp/creator/DoEBH2NZo3',
    eyebrow: 'Discovery / Niconico',
    copyKey: 'musicSources.kiiteCopy',
    description: 'Creator catalogue used as a discovery and cross-check source for Niconico-facing works that may be missing from the primary catalogue.',
    meta: 'Creator ID · DoEBH2NZo3'
  },
  {
    id: 'vocarank-search',
    label: 'VocaRank — combined catalogue search',
    href: 'https://vocarank.live/en/search?vocalist_ids=75285%2C176454',
    eyebrow: 'Live statistics',
    copyKey: 'musicSources.vocarankSearchCopy',
    description: 'Combined VocaRank search spanning both Misaka Sarina VocaDB identities, with current YouTube and Niconico view statistics.',
    meta: 'VocaDB IDs · 75285 + 176454'
  },
  {
    id: 'vocarank-75285',
    label: 'VocaRank — artist 75285',
    href: 'https://vocarank.live/en/artist/75285',
    eyebrow: 'Artist view',
    copyKey: 'musicSources.vocarankPrimaryCopy',
    description: 'VocaRank artist view for the long-standing Misaka Sarina VocaDB identity used by the original site sync.',
    meta: 'Artist ID · 75285'
  },
  {
    id: 'vocarank-176454',
    label: 'VocaRank — artist 176454',
    href: 'https://vocarank.live/en/artist/176454',
    eyebrow: 'Artist view',
    copyKey: 'musicSources.vocarankSecondaryCopy',
    description: 'VocaRank artist view for the second Misaka Sarina VocaDB identity, now included in catalogue synchronization.',
    meta: 'Artist ID · 176454'
  }
];
