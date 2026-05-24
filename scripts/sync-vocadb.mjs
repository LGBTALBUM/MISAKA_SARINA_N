import { writeFile } from 'node:fs/promises';

const ARTIST_ID = 75285;
const OUTPUT_PATH = 'src/data/music.ts';

const artistProfile = {
  title: 'Misaka Sarina Artist Profile',
  slug: 'artist-profile',
  releaseDate: '2026-05-24',
  type: 'profile',
  featured: true,
  description:
    'Official public music profiles for Misaka Sarina. This catalogue entry groups confirmed artist pages while individual song releases are synced from VocaDB.',
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
      href: `https://vocadb.net/Ar/${ARTIST_ID}`
    }
  ],
  credits: ['Artist: Misaka Sarina', 'Project identity: Baker Siacone'],
  notes: [
    'This entry is intentionally marked as a profile, not a single release.',
    'Individual song entries below can be regenerated from VocaDB by running npm run sync:vocadb.'
  ],
  source: {
    label: 'VocaDB',
    id: String(ARTIST_ID),
    href: `https://vocadb.net/Ar/${ARTIST_ID}`
  }
};

const slugify = (input) =>
  input
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff\u3040-\u30ff\u3400-\u4dbf]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'untitled';

const normalizeBaseDate = (value) => {
  if (!value) return '1970-01-01';
  const date = String(value).slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : '1970-01-01';
};

const toPlatformLabel = (raw) => {
  const value = String(raw || '').trim();
  if (!value) return 'External Link';
  const normalized = value.toLowerCase();
  if (normalized.includes('youtube')) return 'YouTube';
  if (normalized.includes('niconico') || normalized.includes('nicovideo')) return 'Niconico';
  if (normalized.includes('soundcloud')) return 'SoundCloud';
  if (normalized.includes('spotify')) return 'Spotify';
  if (normalized.includes('apple')) return 'Apple Music';
  if (normalized.includes('bandcamp')) return 'Bandcamp';
  if (normalized.includes('bilibili')) return 'Bilibili';
  return value;
};

const pickName = (song) => {
  const names = Array.isArray(song.names) ? song.names : [];
  const english = names.find((name) => name.language === 'English');
  const original = names.find((name) => name.language === 'Original');
  return english?.value || original?.value || song.name || song.defaultName || `VocaDB Song ${song.id}`;
};

const mapPlatforms = (song) => {
  const pvs = Array.isArray(song.pvs) ? song.pvs : [];
  const webLinks = Array.isArray(song.webLinks) ? song.webLinks : [];
  const links = [];

  for (const pv of pvs) {
    const href = pv.url || pv.pvId;
    if (!href || !String(href).startsWith('http')) continue;
    links.push({
      label: toPlatformLabel(pv.service || pv.name || 'PV'),
      href
    });
  }

  for (const link of webLinks) {
    const href = link.url;
    if (!href || !String(href).startsWith('http')) continue;
    links.push({
      label: toPlatformLabel(link.description || link.category || link.url),
      href
    });
  }

  links.push({
    label: 'VocaDB',
    href: `https://vocadb.net/S/${song.id}`
  });

  const seen = new Set();
  return links.filter((link) => {
    if (seen.has(link.href)) return false;
    seen.add(link.href);
    return true;
  });
};

const mapSongType = (song) => {
  const raw = String(song.songType || song.type || '').toLowerCase();
  if (raw.includes('cover') || raw.includes('remix')) return 'demo';
  return 'single';
};

const mapCredits = (song) => {
  const artists = Array.isArray(song.artists)
    ? song.artists.map((artist) => artist.name || artist.artist?.name).filter(Boolean)
    : [];
  return artists.length > 0 ? artists : ['Misaka Sarina'];
};

const mapSong = (song, usedSlugs) => {
  const title = pickName(song);
  const baseSlug = slugify(title);
  let slug = baseSlug;
  let index = 2;
  while (usedSlugs.has(slug)) {
    slug = `${baseSlug}-${index}`;
    index += 1;
  }
  usedSlugs.add(slug);

  return {
    title,
    slug,
    releaseDate: normalizeBaseDate(song.publishDate || song.releaseDate || song.createDate),
    type: mapSongType(song),
    description: `Synced from VocaDB entry S/${song.id}.`,
    cover: song.thumbUrl || undefined,
    featured: false,
    platforms: mapPlatforms(song),
    credits: mapCredits(song),
    notes: [
      'This entry was generated from VocaDB.',
      'Review title, date, credits, and platform links before treating it as final.'
    ],
    source: {
      label: 'VocaDB',
      id: String(song.id),
      href: `https://vocadb.net/S/${song.id}`
    }
  };
};

const toTs = (releases) => `export type MusicPlatform = {\n  label: string;\n  href: string;\n};\n\nexport type MusicRelease = {\n  title: string;\n  slug: string;\n  releaseDate: string;\n  type: 'profile' | 'single' | 'ep' | 'album' | 'demo';\n  description: string;\n  cover?: string;\n  featured?: boolean;\n  platforms: MusicPlatform[];\n  credits?: string[];\n  notes?: string[];\n  source?: {\n    label: string;\n    id: string;\n    href: string;\n  };\n};\n\nexport const musicReleases: MusicRelease[] = ${JSON.stringify(releases, null, 2)};\n\nexport const getSortedReleases = () =>\n  [...musicReleases].sort(\n    (a, b) => new Date(b.releaseDate).valueOf() - new Date(a.releaseDate).valueOf()\n  );\n\nexport const getFeaturedRelease = () => musicReleases.find((release) => release.featured) ?? musicReleases[0];\n`;

const fetchSongs = async () => {
  const apiUrl = new URL('https://vocadb.net/api/songs');
  apiUrl.searchParams.set('artistId', String(ARTIST_ID));
  apiUrl.searchParams.set('start', '0');
  apiUrl.searchParams.set('maxResults', '100');
  apiUrl.searchParams.set('sort', 'PublishDate');
  apiUrl.searchParams.set('fields', 'Names,Artists,PVs,WebLinks,ReleaseDate,ThumbUrl');

  const response = await fetch(apiUrl, {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'MISAKA_SARINA_N sync script'
    }
  });

  if (!response.ok) {
    throw new Error(`VocaDB API request failed: ${response.status} ${response.statusText}`);
  }

  const payload = await response.json();
  return Array.isArray(payload) ? payload : payload.items ?? [];
};

const main = async () => {
  const items = await fetchSongs();
  const usedSlugs = new Set([artistProfile.slug]);
  const songs = items.map((song) => mapSong(song, usedSlugs));
  const releases = [artistProfile, ...songs];

  await writeFile(OUTPUT_PATH, toTs(releases));
  console.log(`Synced ${songs.length} VocaDB song entries for artist ${ARTIST_ID}.`);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
