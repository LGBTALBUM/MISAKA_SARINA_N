import { writeFile } from 'node:fs/promises';

const ARTIST_IDS = [75285, 176454];
const OUTPUT_PATH = 'src/data/music.ts';
const PAGE_SIZE = 100;
const COMMON_FIELDS = 'Names,Artists,PVs,WebLinks,ThumbUrl';

const artistProfile = {
  title: 'Misaka Sarina Artist Profile',
  slug: 'artist-profile',
  releaseDate: '2026-05-24',
  type: 'profile',
  featured: true,
  description:
    'Official public music profiles and discovery sources for Misaka Sarina. Individual song releases are synchronized across both known VocaDB artist identities.',
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
      label: 'VocaDB — 75285',
      href: 'https://vocadb.net/Ar/75285'
    },
    {
      label: 'VocaDB — 176454',
      href: 'https://vocadb.net/Ar/176454'
    },
    {
      label: 'Kiite',
      href: 'https://kiite.jp/creator/DoEBH2NZo3'
    },
    {
      label: 'VocaRank — Combined',
      href: 'https://vocarank.live/en/search?vocalist_ids=75285%2C176454'
    },
    {
      label: 'VocaRank — 75285',
      href: 'https://vocarank.live/en/artist/75285'
    },
    {
      label: 'VocaRank — 176454',
      href: 'https://vocarank.live/en/artist/176454'
    }
  ],
  credits: ['Artist: Misaka Sarina', 'Project identity: Baker Siacone'],
  notes: [
    'This entry is intentionally marked as a profile, not a single release.',
    'VocaDB artist IDs 75285 and 176454 are both included in synchronization.',
    'Kiite is used as an external discovery / cross-check source.',
    'VocaRank is used as a live statistics and cross-ID discovery source; view counts are not frozen into this static catalogue.'
  ],
  source: {
    label: 'VocaDB',
    id: ARTIST_IDS.join(' / '),
    href: 'https://vocadb.net/Ar/75285'
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
      'The sync checks both Misaka Sarina artist IDs: 75285 and 176454.',
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

const makeSongApiUrl = ({ key, value, start }) => {
  const apiUrl = new URL('https://vocadb.net/api/songs');
  apiUrl.searchParams.append(key, String(value));
  apiUrl.searchParams.append('start', String(start));
  apiUrl.searchParams.append('maxResults', String(PAGE_SIZE));
  apiUrl.searchParams.append('fields', COMMON_FIELDS);
  return apiUrl;
};

const requestJson = async (apiUrl) => {
  const response = await fetch(apiUrl, {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'MISAKA_SARINA_N sync script'
    }
  });

  const body = await response.text();

  if (!response.ok) {
    throw new Error(
      `VocaDB API request failed: ${response.status} ${response.statusText}\nURL: ${apiUrl.toString()}\nBody: ${body.slice(0, 1000)}`
    );
  }

  return body ? JSON.parse(body) : null;
};

const fetchPaged = async (key, value) => {
  const all = [];

  for (let start = 0; start < 2000; start += PAGE_SIZE) {
    const apiUrl = makeSongApiUrl({ key, value, start });
    const payload = await requestJson(apiUrl);
    const items = Array.isArray(payload) ? payload : payload?.items ?? [];

    all.push(...items);
    console.log(`Fetched ${items.length} entries from ${apiUrl.toString()}`);

    if (items.length < PAGE_SIZE) break;
  }

  return all;
};

const fetchSongsForArtist = async (artistId) => {
  const errors = [];

  for (const key of ['artistId[]', 'artistId']) {
    try {
      const items = await fetchPaged(key, artistId);
      if (items.length > 0) return items;
      errors.push(`${key}: empty result`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      errors.push(message);
      console.warn(message);
    }
  }

  console.warn(`No entries resolved for artist ${artistId}.\n${errors.join('\n')}`);
  return [];
};

const fetchSongs = async () => {
  const merged = new Map();

  for (const artistId of ARTIST_IDS) {
    const items = await fetchSongsForArtist(artistId);
    for (const item of items) {
      if (item?.id != null) merged.set(String(item.id), item);
    }
  }

  if (merged.size === 0) {
    console.warn('Artist-ID strategies returned no songs; falling back to text query.');
    const items = await fetchPaged('query', 'Misaka Sarina');
    for (const item of items) {
      if (item?.id != null) merged.set(String(item.id), item);
    }
  }

  if (merged.size === 0) {
    throw new Error('No VocaDB songs were returned for either artist ID or the text-query fallback.');
  }

  return [...merged.values()];
};

const main = async () => {
  const items = await fetchSongs();
  const usedSlugs = new Set([artistProfile.slug]);
  const songs = items.map((song) => mapSong(song, usedSlugs));
  const releases = [artistProfile, ...songs];

  await writeFile(OUTPUT_PATH, toTs(releases));
  console.log(`Synced ${songs.length} unique VocaDB song entries across artist IDs ${ARTIST_IDS.join(', ')}.`);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
