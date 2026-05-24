export type MusicPlatform = {
  label: string;
  href: string;
};

export type MusicRelease = {
  title: string;
  slug: string;
  releaseDate: string;
  type: 'profile' | 'single' | 'ep' | 'album' | 'demo';
  description: string;
  cover?: string;
  featured?: boolean;
  platforms: MusicPlatform[];
  credits?: string[];
  notes?: string[];
};

export const musicReleases: MusicRelease[] = [
  {
    title: 'Misaka Sarina Artist Profile',
    slug: 'artist-profile',
    releaseDate: '2026-05-24',
    type: 'profile',
    featured: true,
    description:
      'Official public music profiles for Misaka Sarina. This catalogue entry groups confirmed artist pages while individual song releases are being added.',
    platforms: [
      {
        label: 'Spotify',
        href: 'https://open.spotify.com/artist/7HO1a8ZvIIRGG0y4sjkwy1'
      },
      {
        label: 'Apple Music',
        href: 'https://music.apple.com/en/artist/misaka-sarina/1705885192'
      },
      {
        label: 'YouTube Music',
        href: 'https://music.youtube.com/channel/UC7HcmRkHYdqHMYs_TxlP_GQ'
      },
      {
        label: 'Amazon Music',
        href: 'https://www.amazon.co.uk/music/player/artists/B0C627DLFN/misaka-sarina'
      },
      {
        label: 'VocaDB',
        href: 'https://vocadb.net/Ar/75285'
      }
    ],
    credits: ['Artist: Misaka Sarina', 'Project identity: Baker Siacone'],
    notes: [
      'This entry is intentionally marked as a profile, not a single release.',
      'Add confirmed song releases below this entry once title, release date, and platform URLs are verified.'
    ]
  }
];

export const getSortedReleases = () =>
  [...musicReleases].sort(
    (a, b) => new Date(b.releaseDate).valueOf() - new Date(a.releaseDate).valueOf()
  );

export const getFeaturedRelease = () => musicReleases.find((release) => release.featured) ?? musicReleases[0];
