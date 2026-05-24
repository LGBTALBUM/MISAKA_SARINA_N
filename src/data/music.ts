export type MusicPlatform = {
  label: string;
  href: string;
};

export type MusicRelease = {
  title: string;
  slug: string;
  releaseDate: string;
  type: 'single' | 'ep' | 'album' | 'demo';
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
    type: 'single',
    featured: true,
    description:
      'A temporary catalogue entry for the current Misaka Sarina streaming profiles. Replace this with the next official release entry when the music database is populated.',
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
    credits: ['Misaka Sarina', 'Baker Siacone'],
    notes: [
      'This entry exists to validate the music catalogue structure.',
      'Future release entries can include cover art, lyrics, credits, production notes, and more platform links.'
    ]
  }
];

export const getSortedReleases = () =>
  [...musicReleases].sort(
    (a, b) => new Date(b.releaseDate).valueOf() - new Date(a.releaseDate).valueOf()
  );

export const getFeaturedRelease = () => musicReleases.find((release) => release.featured) ?? musicReleases[0];
