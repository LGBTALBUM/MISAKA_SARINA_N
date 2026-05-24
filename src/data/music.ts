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
  source?: {
    label: string;
    id: string;
    href: string;
  };
};

export const musicReleases: MusicRelease[] = [
  {
    "title": "Misaka Sarina Artist Profile",
    "slug": "artist-profile",
    "releaseDate": "2026-05-24",
    "type": "profile",
    "featured": true,
    "description": "Official public music profiles for Misaka Sarina. This catalogue entry groups confirmed artist pages while individual song releases are synced from VocaDB.",
    "platforms": [
      {
        "label": "Spotify",
        "href": "https://open.spotify.com/artist/7HO1a8ZvIIRGG0y4sjkwy1"
      },
      {
        "label": "Apple Music",
        "href": "https://music.apple.com/en/artist/misaka-sarina/1705885192"
      },
      {
        "label": "YouTube Music",
        "href": "https://music.youtube.com/channel/UC7HcmRkHYdqHMYs_TxlP_GQ"
      },
      {
        "label": "Amazon Music",
        "href": "https://www.amazon.co.uk/music/player/artists/B0C627DLFN/misaka-sarina"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/Ar/75285"
      }
    ],
    "credits": [
      "Artist: Misaka Sarina",
      "Project identity: Baker Siacone"
    ],
    "notes": [
      "This entry is intentionally marked as a profile, not a single release.",
      "Individual song entries below can be regenerated from VocaDB by running npm run sync:vocadb."
    ],
    "source": {
      "label": "VocaDB",
      "id": "75285",
      "href": "https://vocadb.net/Ar/75285"
    }
  },
  {
    "title": "The Terrible Days We've Passed",
    "slug": "the-terrible-days-we-ve-passed",
    "releaseDate": "2025-09-05",
    "type": "single",
    "description": "Synced from VocaDB entry S/836385.",
    "cover": "https://i.ytimg.com/vi/jddt3BkL-A4/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/jddt3BkL-A4"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/836385"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "836385",
      "href": "https://vocadb.net/S/836385"
    }
  },
  {
    "title": "Time Magic",
    "slug": "time-magic",
    "releaseDate": "2024-07-10",
    "type": "single",
    "description": "Synced from VocaDB entry S/836566.",
    "cover": "https://i.ytimg.com/vi/A2aJniCKXi4/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/A2aJniCKXi4"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/836566"
      }
    ],
    "credits": [
      "初音ミク",
      "心華",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "836566",
      "href": "https://vocadb.net/S/836566"
    }
  },
  {
    "title": "Catch The Wind",
    "slug": "catch-the-wind",
    "releaseDate": "2025-06-11",
    "type": "demo",
    "description": "Synced from VocaDB entry S/799347.",
    "cover": "https://i.ytimg.com/vi/tJFCV366o9Y/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/tJFCV366o9Y"
      },
      {
        "label": "YouTube",
        "href": "https://www.youtube.com/watch?v=xTvv-e7xyNc"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/799347"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "799347",
      "href": "https://vocadb.net/S/799347"
    }
  },
  {
    "title": "DREAM U",
    "slug": "dream-u",
    "releaseDate": "2019-11-11",
    "type": "single",
    "description": "Synced from VocaDB entry S/341183.",
    "cover": "https://i.ytimg.com/vi/zlk078Z3YWg/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/zlk078Z3YWg"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/341183"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "341183",
      "href": "https://vocadb.net/S/341183"
    }
  },
  {
    "title": "FALLING DOWN",
    "slug": "falling-down",
    "releaseDate": "2019-07-25",
    "type": "single",
    "description": "Synced from VocaDB entry S/252018.",
    "cover": "https://i1.sndcdn.com/artworks-BLFbbvW61gKf-0-large.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/chuyinmiku/falling-down"
      },
      {
        "label": "YouTube",
        "href": "https://youtu.be/YBW3xDQCGYs"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/252018"
      }
    ],
    "credits": [
      "乐正龙牙 (Unknown)",
      "初音ミク V4 (中文版)",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "252018",
      "href": "https://vocadb.net/S/252018"
    }
  },
  {
    "title": "Hello~ (2025 Remix)",
    "slug": "hello-2025-remix",
    "releaseDate": "2025-12-31",
    "type": "single",
    "description": "Synced from VocaDB entry S/921057.",
    "cover": "https://i.ytimg.com/vi/LhZtWQlVFpo/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/LhZtWQlVFpo"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/921057"
      }
    ],
    "credits": [
      "初音ミク",
      "Misaka Sarina",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "921057",
      "href": "https://vocadb.net/S/921057"
    }
  },
  {
    "title": "Hey~我回來了",
    "slug": "hey-我回來了",
    "releaseDate": "2022-09-28",
    "type": "single",
    "description": "Synced from VocaDB entry S/462002.",
    "cover": "https://i.ytimg.com/vi/FIZt8qV0YBA/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/FIZt8qV0YBA"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/462002"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "洛天依AI"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "462002",
      "href": "https://vocadb.net/S/462002"
    }
  },
  {
    "title": "Hey~我回來了",
    "slug": "hey-我回來了-2",
    "releaseDate": "2022-12-24",
    "type": "demo",
    "description": "Synced from VocaDB entry S/462089.",
    "cover": "https://i.ytimg.com/vi/PBL7CV6QFh4/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/PBL7CV6QFh4"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/462089"
      }
    ],
    "credits": [
      "初音ミク",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "462089",
      "href": "https://vocadb.net/S/462089"
    }
  },
  {
    "title": "Hey~我回來了 (Off Vocal)",
    "slug": "hey-我回來了-off-vocal",
    "releaseDate": "2022-12-15",
    "type": "single",
    "description": "Synced from VocaDB entry S/462007.",
    "cover": "https://i.ytimg.com/vi/Td2zNVZcsVs/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/Td2zNVZcsVs"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/462007"
      }
    ],
    "credits": [
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "462007",
      "href": "https://vocadb.net/S/462007"
    }
  },
  {
    "title": "I Broke My Lipstick Again",
    "slug": "i-broke-my-lipstick-again",
    "releaseDate": "2025-08-09",
    "type": "single",
    "description": "Synced from VocaDB entry S/824862.",
    "cover": "https://i.ytimg.com/vi/SyvPgo0TggQ/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/SyvPgo0TggQ"
      },
      {
        "label": "YouTube",
        "href": "https://youtu.be/840cQ7JwYG0"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/824862"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "824862",
      "href": "https://vocadb.net/S/824862"
    }
  },
  {
    "title": "i to ho ni ho",
    "slug": "i-to-ho-ni-ho",
    "releaseDate": "2022-11-10",
    "type": "single",
    "description": "Synced from VocaDB entry S/763193.",
    "cover": "https://i.ytimg.com/vi/vg4DECE0t78/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/vg4DECE0t78"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/763193"
      }
    ],
    "credits": [
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "763193",
      "href": "https://vocadb.net/S/763193"
    }
  },
  {
    "title": "i to ho ni ho",
    "slug": "i-to-ho-ni-ho-2",
    "releaseDate": "2022-11-11",
    "type": "single",
    "description": "Synced from VocaDB entry S/763190.",
    "cover": "https://i.ytimg.com/vi/dN_CubTyrew/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/dN_CubTyrew"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/763190"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "763190",
      "href": "https://vocadb.net/S/763190"
    }
  },
  {
    "title": "IT'S FALLING DOWN",
    "slug": "it-s-falling-down",
    "releaseDate": "2019-07-25",
    "type": "demo",
    "description": "Synced from VocaDB entry S/252020.",
    "cover": "https://i1.sndcdn.com/artworks-PYSSGHwVZyXi-0-large.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/chuyinmiku/its-falling-down-1"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/252020"
      }
    ],
    "credits": [
      "乐正龙牙 (Unknown)",
      "初音ミク V4 (中文版)",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "252020",
      "href": "https://vocadb.net/S/252020"
    }
  },
  {
    "title": "Little Child",
    "slug": "little-child",
    "releaseDate": "2025-12-22",
    "type": "demo",
    "description": "Synced from VocaDB entry S/890195.",
    "cover": "https://i.ytimg.com/vi/zG4wvs_Xe6Y/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/zG4wvs_Xe6Y"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/890195"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "890195",
      "href": "https://vocadb.net/S/890195"
    }
  },
  {
    "title": "Little Things & Don't Shut Me Down",
    "slug": "little-things-don-t-shut-me-down",
    "releaseDate": "2025-08-29",
    "type": "single",
    "description": "Synced from VocaDB entry S/833247.",
    "cover": "https://i.ytimg.com/vi/U3vBgJdnm2s/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/U3vBgJdnm2s"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/833247"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "洛天依AI",
      "乐正绫AI",
      "言和AI",
      "乐正龙牙AI",
      "徵羽摩柯AI",
      "墨清弦AI"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "833247",
      "href": "https://vocadb.net/S/833247"
    }
  },
  {
    "title": "Love Memories",
    "slug": "love-memories",
    "releaseDate": "2020-01-11",
    "type": "demo",
    "description": "Synced from VocaDB entry S/298058.",
    "cover": "https://i1.sndcdn.com/artworks-NuFf3U7oxdeh-0-large.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/jingyinrin/love-memories"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/298058"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "鏡音リン",
      "鏡音レン"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "298058",
      "href": "https://vocadb.net/S/298058"
    }
  },
  {
    "title": "Love Memories",
    "slug": "love-memories-2",
    "releaseDate": "2020-01-01",
    "type": "single",
    "description": "Synced from VocaDB entry S/298060.",
    "cover": "https://i1.sndcdn.com/artworks-4O6IosvLOG6f-0-large.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/chuyinmiku/love-memories"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/298060"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "298060",
      "href": "https://vocadb.net/S/298060"
    }
  },
  {
    "title": "Love Memories",
    "slug": "love-memories-3",
    "releaseDate": "2020-07-26",
    "type": "single",
    "description": "Synced from VocaDB entry S/304664.",
    "cover": "https://i1.sndcdn.com/artworks-xw1jEIjJAXFD-0-large.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/luotianyi-scmusic/love-memories"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/304664"
      }
    ],
    "credits": [
      "洛天依",
      "Misaka Sarina",
      "Scott Tchan"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "304664",
      "href": "https://vocadb.net/S/304664"
    }
  },
  {
    "title": "Love Memories (Acoustic)",
    "slug": "love-memories-acoustic",
    "releaseDate": "2021-01-09",
    "type": "demo",
    "description": "Synced from VocaDB entry S/445367.",
    "cover": "https://i.ytimg.com/vi/_a83i-DGx9c/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/_a83i-DGx9c"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/445367"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "445367",
      "href": "https://vocadb.net/S/445367"
    }
  },
  {
    "title": "Lovelight",
    "slug": "lovelight",
    "releaseDate": "2025-08-01",
    "type": "demo",
    "description": "Synced from VocaDB entry S/820143.",
    "cover": "https://i.ytimg.com/vi/RlEN764a0jY/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/RlEN764a0jY"
      },
      {
        "label": "Niconico",
        "href": "http://www.nicovideo.jp/watch/sm45251089"
      },
      {
        "label": "Bilibili",
        "href": "https://www.bilibili.com/video/av114955135222067"
      },
      {
        "label": "YouTube",
        "href": "https://www.youtube.com/watch?v=U7-1hc2INmQ"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/820143"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク V4 (English)",
      "洛天依AI",
      "言和AI",
      "乐正绫AI",
      "墨清弦AI",
      "乐正龙牙AI",
      "徵羽摩柯AI"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "820143",
      "href": "https://vocadb.net/S/820143"
    }
  },
  {
    "title": "My Sweetie-Rotating-One",
    "slug": "my-sweetie-rotating-one",
    "releaseDate": "2025-12-25",
    "type": "single",
    "description": "Synced from VocaDB entry S/896900.",
    "cover": "https://i.ytimg.com/vi/exwPBrxQB5c/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/exwPBrxQB5c"
      },
      {
        "label": "YouTube",
        "href": "https://music.youtube.com/watch?v=exwPBrxQB5c&si=prX9UT2NzPtk8my4"
      },
      {
        "label": "Apple Music",
        "href": "https://music.apple.com/hk/song/my-sweetie-rotating-one/1863517171"
      },
      {
        "label": "Spotify",
        "href": "https://open.spotify.com/track/0ssDt0kRk0CbrEcdaOdevv?si=6d1374972c1743f6"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/896900"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "896900",
      "href": "https://vocadb.net/S/896900"
    }
  },
  {
    "title": "NEET~Night!!!",
    "slug": "neet-night",
    "releaseDate": "2019-06-14",
    "type": "single",
    "description": "Synced from VocaDB entry S/252034.",
    "cover": "https://i.ytimg.com/vi/IheAcLVsP94/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/IheAcLVsP94"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/252034"
      }
    ],
    "credits": [
      "初音ミク V4 (English)",
      "Misaka Sarina",
      "Scott Tchan"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "252034",
      "href": "https://vocadb.net/S/252034"
    }
  },
  {
    "title": "Paint",
    "slug": "paint",
    "releaseDate": "2025-12-25",
    "type": "single",
    "description": "Synced from VocaDB entry S/896897.",
    "cover": "https://i.ytimg.com/vi/wcRFdsrvX6w/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/wcRFdsrvX6w"
      },
      {
        "label": "YouTube",
        "href": "https://music.youtube.com/watch?v=wcRFdsrvX6w&si=vKMeO1N6HVZXFtHu"
      },
      {
        "label": "Apple Music",
        "href": "https://music.apple.com/hk/song/paint/1863517149"
      },
      {
        "label": "Spotify",
        "href": "https://open.spotify.com/track/4QEuI1HHnUo9DaSZpgn6et?si=022e1bffe4714e6c"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/896897"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "896897",
      "href": "https://vocadb.net/S/896897"
    }
  },
  {
    "title": "Picture Book",
    "slug": "picture-book",
    "releaseDate": "2025-03-09",
    "type": "demo",
    "description": "Synced from VocaDB entry S/760732.",
    "cover": "https://i.ytimg.com/vi/0Fz7AaYIMhQ/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/0Fz7AaYIMhQ"
      },
      {
        "label": "YouTube",
        "href": "https://www.youtube.com/watch?v=B7encWb7lNQ"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/760732"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "760732",
      "href": "https://vocadb.net/S/760732"
    }
  },
  {
    "title": "Rebirth",
    "slug": "rebirth",
    "releaseDate": "2025-11-19",
    "type": "single",
    "description": "Synced from VocaDB entry S/921132.",
    "cover": "https://i.ytimg.com/vi/kRkR1ExFhZc/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/kRkR1ExFhZc"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/921132"
      }
    ],
    "credits": [
      "初音ミク",
      "Misaka Sarina",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "921132",
      "href": "https://vocadb.net/S/921132"
    }
  },
  {
    "title": "SONG 4 AUTISTICS",
    "slug": "song-4-autistics",
    "releaseDate": "2020-04-03",
    "type": "single",
    "description": "Synced from VocaDB entry S/406205.",
    "cover": "https://i.ytimg.com/vi/8047rlhLmiI/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/8047rlhLmiI"
      },
      {
        "label": "Vocaloid Lyrics Wiki",
        "href": "https://vocaloidlyrics.miraheze.org/wiki/SONG_4_AUTISTICS"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/406205"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク",
      "鏡音リン"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "406205",
      "href": "https://vocadb.net/S/406205"
    }
  },
  {
    "title": "STE",
    "slug": "ste",
    "releaseDate": "2022-11-11",
    "type": "single",
    "description": "Synced from VocaDB entry S/763189.",
    "cover": "https://i.ytimg.com/vi/C2Ms2MPQMNk/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/C2Ms2MPQMNk"
      },
      {
        "label": "YouTube",
        "href": "https://youtu.be/wJSbQtCliYk"
      },
      {
        "label": "Vocaloid Lyrics Wiki",
        "href": "https://vocaloidlyrics.fandom.com/wiki/STE"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/763189"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "763189",
      "href": "https://vocadb.net/S/763189"
    }
  },
  {
    "title": "STE",
    "slug": "ste-2",
    "releaseDate": "2022-11-10",
    "type": "single",
    "description": "Synced from VocaDB entry S/763192.",
    "cover": "https://i.ytimg.com/vi/q1W6nqRFclE/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/q1W6nqRFclE"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/763192"
      }
    ],
    "credits": [
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "763192",
      "href": "https://vocadb.net/S/763192"
    }
  },
  {
    "title": "STE (2025 Remix)",
    "slug": "ste-2025-remix",
    "releaseDate": "2025-12-31",
    "type": "demo",
    "description": "Synced from VocaDB entry S/921055.",
    "cover": "https://i.ytimg.com/vi/TL5ROmCZpu0/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/TL5ROmCZpu0"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/921055"
      }
    ],
    "credits": [
      "初音ミク",
      "Misaka Sarina",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "921055",
      "href": "https://vocadb.net/S/921055"
    }
  },
  {
    "title": "Suppose You Are Mine",
    "slug": "suppose-you-are-mine",
    "releaseDate": "2019-06-22",
    "type": "demo",
    "description": "Synced from VocaDB entry S/251998.",
    "cover": "https://i1.sndcdn.com/artworks-wDM5HZu6V9nb-0-large.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/chuyinmiku/suppose-you-are-mine-miku"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/251998"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク V4 (English)"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "251998",
      "href": "https://vocadb.net/S/251998"
    }
  },
  {
    "title": "Suppose You Are Mine",
    "slug": "suppose-you-are-mine-2",
    "releaseDate": "2019-06-22",
    "type": "demo",
    "description": "Synced from VocaDB entry S/251999.",
    "cover": "https://i1.sndcdn.com/artworks-EF3Z1Wv9Lx6d-0-large.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/xunyinruka/suppose-you-are-mine-luka"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/251999"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "巡音ルカ V4X (Unknown)"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "251999",
      "href": "https://vocadb.net/S/251999"
    }
  },
  {
    "title": "Suppose You Are Mine",
    "slug": "suppose-you-are-mine-3",
    "releaseDate": "2019-07-25",
    "type": "demo",
    "description": "Synced from VocaDB entry S/252013.",
    "cover": "https://i1.sndcdn.com/artworks-zkcYo00klwf9-0-large.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/jingyinrin/suppose-you-are-mine"
      },
      {
        "label": "Amazon",
        "href": "https://www.amazon.com/dp/B07VDTYGD1/ref=dm_ws_tlw_trk1"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/252013"
      }
    ],
    "credits": [
      "鏡音レン V4 (English)",
      "鏡音リン V4 (English)",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "252013",
      "href": "https://vocadb.net/S/252013"
    }
  },
  {
    "title": "Suppose You Are Mine",
    "slug": "suppose-you-are-mine-4",
    "releaseDate": "2019-07-25",
    "type": "demo",
    "description": "Synced from VocaDB entry S/252014.",
    "cover": "https://i1.sndcdn.com/artworks-03Hmeoj05gRB-0-large.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/jingyinrin/suppose-you-are-mine-rin"
      },
      {
        "label": "Amazon",
        "href": "https://www.amazon.com/dp/B07VH12LBD/ref=dm_ws_tlw_trk2"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/252014"
      }
    ],
    "credits": [
      "鏡音リン V4 (English)",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "252014",
      "href": "https://vocadb.net/S/252014"
    }
  },
  {
    "title": "Suppose You Are Mine",
    "slug": "suppose-you-are-mine-5",
    "releaseDate": "2019-07-25",
    "type": "demo",
    "description": "Synced from VocaDB entry S/252015.",
    "cover": "https://i1.sndcdn.com/artworks-cLcxfbA5AelD-0-large.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/jingyinren/suppose-you-are-mine-len"
      },
      {
        "label": "YouTube",
        "href": "https://youtu.be/NY1Qq_UkrgY"
      },
      {
        "label": "Amazon",
        "href": "https://www.amazon.com/dp/B07VCTYDS5/ref=dm_ws_tlw_trk3"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/252015"
      }
    ],
    "credits": [
      "鏡音レン V4 (English)",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "252015",
      "href": "https://vocadb.net/S/252015"
    }
  },
  {
    "title": "Suppose You Are Mine (2020 Special Version)",
    "slug": "suppose-you-are-mine-2020-special-version",
    "releaseDate": "2020-07-26",
    "type": "single",
    "description": "Synced from VocaDB entry S/304663.",
    "cover": "https://i1.sndcdn.com/artworks-r14a8tQguKpR-0-large.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/luotianyi-scmusic/suppose-you-are-mine-2020"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/304663"
      }
    ],
    "credits": [
      "洛天依",
      "Scott Tchan",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "304663",
      "href": "https://vocadb.net/S/304663"
    }
  },
  {
    "title": "Suppose You Are Mine (Radio Edit)",
    "slug": "suppose-you-are-mine-radio-edit",
    "releaseDate": "2019-06-22",
    "type": "single",
    "description": "Synced from VocaDB entry S/251997.",
    "cover": "https://i1.sndcdn.com/artworks-jFAoK31mjr9x-0-large.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/chuyinmiku/suppose-you-are-mine-radio"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/251997"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "巡音ルカ V4X (Unknown)",
      "初音ミク V4 (English)"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "251997",
      "href": "https://vocadb.net/S/251997"
    }
  },
  {
    "title": "Suppose You Are Mine (Instrumental)",
    "slug": "suppose-you-are-mine-instrumental",
    "releaseDate": "2019-06-22",
    "type": "single",
    "description": "Synced from VocaDB entry S/252000.",
    "cover": "https://i1.sndcdn.com/artworks-toxEI0oA1WJJ-0-large.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/chuyinmiku/suppose-you-are-mine"
      },
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/jingyinrin/suppose-you-are-mine-vocal-off"
      },
      {
        "label": "Amazon",
        "href": "https://www.amazon.com/dp/B07VGWL2YV/ref=dm_ws_tlw_trk4"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/252000"
      }
    ],
    "credits": [
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "252000",
      "href": "https://vocadb.net/S/252000"
    }
  },
  {
    "title": "THE TOP",
    "slug": "the-top",
    "releaseDate": "2020-11-07",
    "type": "single",
    "description": "Synced from VocaDB entry S/304667.",
    "cover": "https://i1.sndcdn.com/artworks-cGrfN4GKZiXz-0-large.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/luotianyi-scmusic/the-top"
      },
      {
        "label": "YouTube",
        "href": "https://youtu.be/bNSGLes1PvI"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/304667"
      }
    ],
    "credits": [
      "洛天依",
      "Misaka Sarina",
      "Scott Tchan"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "304667",
      "href": "https://vocadb.net/S/304667"
    }
  },
  {
    "title": "THE TOP",
    "slug": "the-top-2",
    "releaseDate": "2020-11-06",
    "type": "demo",
    "description": "Synced from VocaDB entry S/418469.",
    "cover": "https://i.ytimg.com/vi/T8OEB4HYs3Y/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/T8OEB4HYs3Y"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/418469"
      }
    ],
    "credits": [
      "初音ミク",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "418469",
      "href": "https://vocadb.net/S/418469"
    }
  },
  {
    "title": "THE TOP",
    "slug": "the-top-3",
    "releaseDate": "2020-11-06",
    "type": "demo",
    "description": "Synced from VocaDB entry S/418471.",
    "cover": "https://i.ytimg.com/vi/EnzIF0UuF94/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/EnzIF0UuF94"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/418471"
      }
    ],
    "credits": [
      "GUMI",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "418471",
      "href": "https://vocadb.net/S/418471"
    }
  },
  {
    "title": "THE TOP (Acoustic)",
    "slug": "the-top-acoustic",
    "releaseDate": "2021-01-09",
    "type": "demo",
    "description": "Synced from VocaDB entry S/418470.",
    "cover": "https://i.ytimg.com/vi/oPHrgq-3XM4/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/oPHrgq-3XM4"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/418470"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "418470",
      "href": "https://vocadb.net/S/418470"
    }
  },
  {
    "title": "TWINTAILS",
    "slug": "twintails",
    "releaseDate": "2024-07-10",
    "type": "single",
    "description": "Synced from VocaDB entry S/836536.",
    "cover": "https://i.ytimg.com/vi/LZfEXP3eXkA/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/LZfEXP3eXkA"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/836536"
      }
    ],
    "credits": [
      "初音ミク",
      "心華",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "836536",
      "href": "https://vocadb.net/S/836536"
    }
  },
  {
    "title": "Wanna Hold Your Hand Right Now",
    "slug": "wanna-hold-your-hand-right-now",
    "releaseDate": "2022-09-09",
    "type": "single",
    "description": "Synced from VocaDB entry S/437625.",
    "cover": "https://i.ytimg.com/vi/w8n-M2qAO2E/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/w8n-M2qAO2E"
      },
      {
        "label": "NCM Song Release",
        "href": "https://music.163.com/#/song?id=1978969448"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/437625"
      }
    ],
    "credits": [
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "437625",
      "href": "https://vocadb.net/S/437625"
    }
  },
  {
    "title": "Wanna Hold Your Hand Right Now",
    "slug": "wanna-hold-your-hand-right-now-2",
    "releaseDate": "2020-12-19",
    "type": "single",
    "description": "Synced from VocaDB entry S/307725.",
    "cover": "https://i1.sndcdn.com/artworks-bokVUvyMMgGP-0-large.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/chuyinmiku-music/wanna-hold-your-hand-right-1"
      },
      {
        "label": "YouTube",
        "href": "https://youtu.be/Z3wjaZNyk6c"
      },
      {
        "label": "Niconico",
        "href": "http://www.nicovideo.jp/watch/sm37975386"
      },
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/chuyinmiku-music/wanna-hold-your-hand-right-4"
      },
      {
        "label": "YouTube",
        "href": "https://youtu.be/OBU-z4mW4ek"
      },
      {
        "label": "YouTube",
        "href": "https://youtu.be/l5ZrXufqh2c"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/307725"
      }
    ],
    "credits": [
      "初音ミク",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "307725",
      "href": "https://vocadb.net/S/307725"
    }
  },
  {
    "title": "Wanna Hold Your Hand Right Now (Acoustic)",
    "slug": "wanna-hold-your-hand-right-now-acoustic",
    "releaseDate": "2021-01-09",
    "type": "demo",
    "description": "Synced from VocaDB entry S/442747.",
    "cover": "https://i.ytimg.com/vi/VcnuX_CaBlI/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/VcnuX_CaBlI"
      },
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/chuyinmiku-music/wanna-hold-your-hand-right-2"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/442747"
      }
    ],
    "credits": [
      "初音ミク",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "442747",
      "href": "https://vocadb.net/S/442747"
    }
  },
  {
    "title": "When You Danced With Me",
    "slug": "when-you-danced-with-me",
    "releaseDate": "2025-08-23",
    "type": "demo",
    "description": "Synced from VocaDB entry S/830128.",
    "cover": "https://i.ytimg.com/vi/pipNrkLIdO0/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/pipNrkLIdO0"
      },
      {
        "label": "YouTube",
        "href": "https://youtu.be/YDJZlPTFol8"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/830128"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "洛天依AI",
      "言和AI"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "830128",
      "href": "https://vocadb.net/S/830128"
    }
  },
  {
    "title": "Whispers in the Midnight",
    "slug": "whispers-in-the-midnight",
    "releaseDate": "2024-04-22",
    "type": "single",
    "description": "Synced from VocaDB entry S/822270.",
    "cover": "https://i.ytimg.com/vi/AjOuP7GJHtc/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/AjOuP7GJHtc"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/822270"
      }
    ],
    "credits": [
      "初音ミク",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "822270",
      "href": "https://vocadb.net/S/822270"
    }
  },
  {
    "title": "Whispers In The Midnight",
    "slug": "whispers-in-the-midnight-2",
    "releaseDate": "2025-12-25",
    "type": "single",
    "description": "Synced from VocaDB entry S/896890.",
    "cover": "https://i.ytimg.com/vi/3eB7pCyNSTE/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/3eB7pCyNSTE"
      },
      {
        "label": "YouTube",
        "href": "https://music.youtube.com/watch?v=3eB7pCyNSTE&si=LOjXX8l_jP0LXbel"
      },
      {
        "label": "Apple Music",
        "href": "https://music.apple.com/hk/song/whispers-in-the-midnight/1863516884"
      },
      {
        "label": "Spotify",
        "href": "https://open.spotify.com/track/53TArxuTkaBxDHqDhmNZ3Y?si=7817ee6538174667"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/896890"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "896890",
      "href": "https://vocadb.net/S/896890"
    }
  },
  {
    "title": "Whispers in the Midnight 心華 Version",
    "slug": "whispers-in-the-midnight-心華-version",
    "releaseDate": "2025-08-05",
    "type": "demo",
    "description": "Synced from VocaDB entry S/822271.",
    "cover": "https://i.ytimg.com/vi/ATyzww4ed1I/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/ATyzww4ed1I"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/822271"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "心華"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "822271",
      "href": "https://vocadb.net/S/822271"
    }
  },
  {
    "title": "Why I Hate This Song",
    "slug": "why-i-hate-this-song",
    "releaseDate": "2025-12-31",
    "type": "single",
    "description": "Synced from VocaDB entry S/921060.",
    "cover": "https://i.ytimg.com/vi/Sx8xxxo-aRk/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/Sx8xxxo-aRk"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/921060"
      }
    ],
    "credits": [
      "初音ミク",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "921060",
      "href": "https://vocadb.net/S/921060"
    }
  },
  {
    "title": "Let’s go to the beach together!",
    "slug": "let-s-go-to-the-beach-together",
    "releaseDate": "2024-07-10",
    "type": "single",
    "description": "Synced from VocaDB entry S/836548.",
    "cover": "https://i.ytimg.com/vi/52f6FYN_AQY/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/52f6FYN_AQY"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/836548"
      }
    ],
    "credits": [
      "初音ミク",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "836548",
      "href": "https://vocadb.net/S/836548"
    }
  },
  {
    "title": "不眠之夜",
    "slug": "不眠之夜",
    "releaseDate": "2025-12-31",
    "type": "single",
    "description": "Synced from VocaDB entry S/921056.",
    "cover": "https://i.ytimg.com/vi/qIw_i6ppXIE/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/qIw_i6ppXIE"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/921056"
      }
    ],
    "credits": [
      "初音ミク",
      "心華",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "921056",
      "href": "https://vocadb.net/S/921056"
    }
  },
  {
    "title": "Journey into the World",
    "slug": "journey-into-the-world",
    "releaseDate": "2024-07-10",
    "type": "single",
    "description": "Synced from VocaDB entry S/836572.",
    "cover": "https://i.ytimg.com/vi/FwGzppV1C-k/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/FwGzppV1C-k"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/836572"
      }
    ],
    "credits": [
      "心華",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "836572",
      "href": "https://vocadb.net/S/836572"
    }
  },
  {
    "title": "你~還在看我嗎",
    "slug": "你-還在看我嗎",
    "releaseDate": "2020-09-01",
    "type": "single",
    "description": "Synced from VocaDB entry S/304668.",
    "cover": "https://i1.sndcdn.com/artworks-tQM6Auoo0iJf-0-large.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/luotianyi-scmusic/ayk1lqlk9yzs"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/304668"
      }
    ],
    "credits": [
      "洛天依",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "304668",
      "href": "https://vocadb.net/S/304668"
    }
  },
  {
    "title": "你~還在看我嗎 (Instrumental)",
    "slug": "你-還在看我嗎-instrumental",
    "releaseDate": "2020-09-01",
    "type": "single",
    "description": "Synced from VocaDB entry S/304669.",
    "cover": "https://i1.sndcdn.com/artworks-uSEcN6FXVkdX-0-large.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/luotianyi-scmusic/vocal-off-4"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/304669"
      }
    ],
    "credits": [
      "洛天依",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "304669",
      "href": "https://vocadb.net/S/304669"
    }
  },
  {
    "title": "再見了，曾經的我！",
    "slug": "再見了-曾經的我",
    "releaseDate": "2025-11-19",
    "type": "single",
    "description": "Synced from VocaDB entry S/921137.",
    "cover": "https://i.ytimg.com/vi/2czSLFMVGH8/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/2czSLFMVGH8"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/921137"
      }
    ],
    "credits": [
      "初音ミク",
      "Misaka Sarina",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "921137",
      "href": "https://vocadb.net/S/921137"
    }
  },
  {
    "title": "So How",
    "slug": "so-how",
    "releaseDate": "2025-11-24",
    "type": "single",
    "description": "Synced from VocaDB entry S/890194.",
    "cover": "https://i.ytimg.com/vi/JZ-Qe53rnFA/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/JZ-Qe53rnFA"
      },
      {
        "label": "YouTube",
        "href": "https://youtu.be/McLi3obJUA4"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/890194"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "890194",
      "href": "https://vocadb.net/S/890194"
    }
  },
  {
    "title": "Ah, Banyan Tree!",
    "slug": "ah-banyan-tree",
    "releaseDate": "2024-07-10",
    "type": "single",
    "description": "Synced from VocaDB entry S/836562.",
    "cover": "https://i.ytimg.com/vi/N6UguLtE1vA/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/N6UguLtE1vA"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/836562"
      }
    ],
    "credits": [
      "初音ミク",
      "心華",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "836562",
      "href": "https://vocadb.net/S/836562"
    }
  },
  {
    "title": "Do U Like My Hair?",
    "slug": "do-u-like-my-hair",
    "releaseDate": "2024-07-10",
    "type": "single",
    "description": "Synced from VocaDB entry S/836540.",
    "cover": "https://i.ytimg.com/vi/fzAq_rODHUQ/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/fzAq_rODHUQ"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/836540"
      }
    ],
    "credits": [
      "初音ミク",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "836540",
      "href": "https://vocadb.net/S/836540"
    }
  },
  {
    "title": "夜_舞_夢",
    "slug": "夜-舞-夢",
    "releaseDate": "2025-12-31",
    "type": "single",
    "description": "Synced from VocaDB entry S/921063.",
    "cover": "https://i.ytimg.com/vi/nZ1E4uL8nws/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/nZ1E4uL8nws"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/921063"
      }
    ],
    "credits": [
      "初音ミク",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "921063",
      "href": "https://vocadb.net/S/921063"
    }
  },
  {
    "title": "夜聲",
    "slug": "夜聲",
    "releaseDate": "2025-11-19",
    "type": "single",
    "description": "Synced from VocaDB entry S/921136.",
    "cover": "https://i.ytimg.com/vi/X9NWDNk_R-I/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/X9NWDNk_R-I"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/921136"
      }
    ],
    "credits": [
      "初音ミク",
      "Misaka Sarina",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "921136",
      "href": "https://vocadb.net/S/921136"
    }
  },
  {
    "title": "天南星的世界",
    "slug": "天南星的世界",
    "releaseDate": "2025-11-19",
    "type": "single",
    "description": "Synced from VocaDB entry S/921133.",
    "cover": "https://i.ytimg.com/vi/1wuAIU_mwtM/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/1wuAIU_mwtM"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/921133"
      }
    ],
    "credits": [
      "初音ミク",
      "Misaka Sarina",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "921133",
      "href": "https://vocadb.net/S/921133"
    }
  },
  {
    "title": "失落著 (2025 Remix)",
    "slug": "失落著-2025-remix",
    "releaseDate": "2025-12-31",
    "type": "single",
    "description": "Synced from VocaDB entry S/921058.",
    "cover": "https://i.ytimg.com/vi/1bqg5ePnqgU/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/1bqg5ePnqgU"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/921058"
      }
    ],
    "credits": [
      "初音ミク",
      "Misaka Sarina",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "921058",
      "href": "https://vocadb.net/S/921058"
    }
  },
  {
    "title": "她不知道到哪裡去了",
    "slug": "她不知道到哪裡去了",
    "releaseDate": "2023-10-24",
    "type": "single",
    "description": "Synced from VocaDB entry S/836580.",
    "cover": "https://i.ytimg.com/vi/OkPjkdTar4I/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/OkPjkdTar4I"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/836580"
      }
    ],
    "credits": [
      "初音ミク",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "836580",
      "href": "https://vocadb.net/S/836580"
    }
  },
  {
    "title": "How Naughty She Is",
    "slug": "how-naughty-she-is",
    "releaseDate": "2024-07-10",
    "type": "demo",
    "description": "Synced from VocaDB entry S/836535.",
    "cover": "https://i.ytimg.com/vi/7g5YNhQs7ik/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/7g5YNhQs7ik"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/836535"
      }
    ],
    "credits": [
      "初音ミク",
      "Misaka Sarina",
      "心華"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "836535",
      "href": "https://vocadb.net/S/836535"
    }
  },
  {
    "title": "好羨慕啊...... (TдT)",
    "slug": "好羨慕啊-t-t",
    "releaseDate": "2024-06-18",
    "type": "single",
    "description": "Synced from VocaDB entry S/652701.",
    "cover": "https://i.ytimg.com/vi/otGr-jYRXwQ/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/otGr-jYRXwQ"
      },
      {
        "label": "YouTube",
        "href": "https://youtu.be/NQlQFPvg2yw"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/652701"
      }
    ],
    "credits": [
      "初音ミク",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "652701",
      "href": "https://vocadb.net/S/652701"
    }
  },
  {
    "title": "寫給妳的話",
    "slug": "寫給妳的話",
    "releaseDate": "2022-09-09",
    "type": "demo",
    "description": "Synced from VocaDB entry S/740360.",
    "cover": "https://i.ytimg.com/vi/PH4FJCgC5pY/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/PH4FJCgC5pY"
      },
      {
        "label": "NCM Song Release",
        "href": "https://music.163.com/#/song?id=1978969442"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/740360"
      }
    ],
    "credits": [
      "初音ミク V4 (中文版)",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "740360",
      "href": "https://vocadb.net/S/740360"
    }
  },
  {
    "title": "寫給妳的話",
    "slug": "寫給妳的話-2",
    "releaseDate": "2021-08-27",
    "type": "single",
    "description": "Synced from VocaDB entry S/740370.",
    "cover": "https://i.ytimg.com/vi/BYThnsI4sww/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/BYThnsI4sww"
      },
      {
        "label": "NCM Song Release",
        "href": "https://music.163.com/#/song?id=1873009072"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/740370"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "洛天依",
      "心華"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "740370",
      "href": "https://vocadb.net/S/740370"
    }
  },
  {
    "title": "寫給妳的話",
    "slug": "寫給妳的話-3",
    "releaseDate": "2022-09-09",
    "type": "single",
    "description": "Synced from VocaDB entry S/437623.",
    "cover": "https://i.ytimg.com/vi/ZLziUQePSjM/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/ZLziUQePSjM"
      },
      {
        "label": "NCM Song Release",
        "href": "https://music.163.com/#/song?id=1978969446"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/437623"
      }
    ],
    "credits": [
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "437623",
      "href": "https://vocadb.net/S/437623"
    }
  },
  {
    "title": "寫給妳的話",
    "slug": "寫給妳的話-4",
    "releaseDate": "2022-09-09",
    "type": "demo",
    "description": "Synced from VocaDB entry S/437615.",
    "cover": "https://i.ytimg.com/vi/qfpPvxp5SEo/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/qfpPvxp5SEo"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/437615"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "洛天依"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "437615",
      "href": "https://vocadb.net/S/437615"
    }
  },
  {
    "title": "小房間",
    "slug": "小房間",
    "releaseDate": "2025-09-07",
    "type": "single",
    "description": "Synced from VocaDB entry S/837176.",
    "cover": "https://i.ytimg.com/vi/6waronw51vc/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/6waronw51vc"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/837176"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "837176",
      "href": "https://vocadb.net/S/837176"
    }
  },
  {
    "title": "My Tiny Room",
    "slug": "my-tiny-room",
    "releaseDate": "2025-12-25",
    "type": "single",
    "description": "Synced from VocaDB entry S/896888.",
    "cover": "https://i.ytimg.com/vi/UpQKLQ2gx5I/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/UpQKLQ2gx5I"
      },
      {
        "label": "YouTube",
        "href": "https://music.youtube.com/watch?v=UpQKLQ2gx5I&si=9IcBpLYZvoIezYgb"
      },
      {
        "label": "Apple Music",
        "href": "https://music.apple.com/hk/song/%E5%B0%8F%E6%88%BF%E9%96%93/1863516880"
      },
      {
        "label": "Spotify",
        "href": "https://open.spotify.com/track/0HE2vxYfvdI0fp0j0vpgEc?si=6898b11a1b4646c5"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/896888"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "896888",
      "href": "https://vocadb.net/S/896888"
    }
  },
  {
    "title": "Little Woods (Everything has changed)",
    "slug": "little-woods-everything-has-changed",
    "releaseDate": "2024-07-10",
    "type": "single",
    "description": "Synced from VocaDB entry S/836543.",
    "cover": "https://i.ytimg.com/vi/SS0Xus5YkIQ/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/SS0Xus5YkIQ"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/836543"
      }
    ],
    "credits": [
      "初音ミク",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "836543",
      "href": "https://vocadb.net/S/836543"
    }
  },
  {
    "title": "小樹林 (一切都變了啊)",
    "slug": "小樹林-一切都變了啊",
    "releaseDate": "2025-12-25",
    "type": "single",
    "description": "Synced from VocaDB entry S/896898.",
    "cover": "https://i.ytimg.com/vi/tE7d6phnhfo/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/tE7d6phnhfo"
      },
      {
        "label": "YouTube",
        "href": "https://music.youtube.com/watch?v=tE7d6phnhfo&si=ebc0QY1-Ds_DKXFL"
      },
      {
        "label": "Apple Music",
        "href": "https://music.apple.com/hk/song/%E5%B0%8F%E6%A8%B9%E6%9E%97/1863517151"
      },
      {
        "label": "Spotify",
        "href": "https://open.spotify.com/track/72deNzJowyPhAjA8AHtb7I?si=44a340377c1245bb"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/896898"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "896898",
      "href": "https://vocadb.net/S/896898"
    }
  },
  {
    "title": "Little Turtle",
    "slug": "little-turtle",
    "releaseDate": "2024-07-10",
    "type": "single",
    "description": "Synced from VocaDB entry S/836546.",
    "cover": "https://i.ytimg.com/vi/6NySmr_PYws/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/6NySmr_PYws"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/836546"
      }
    ],
    "credits": [
      "心華",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "836546",
      "href": "https://vocadb.net/S/836546"
    }
  },
  {
    "title": "就這樣咯？",
    "slug": "就這樣咯",
    "releaseDate": "2025-09-11",
    "type": "single",
    "description": "Synced from VocaDB entry S/839949.",
    "cover": "https://i.ytimg.com/vi/04Ynw1sTZlM/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/04Ynw1sTZlM"
      },
      {
        "label": "YouTube",
        "href": "https://youtu.be/YM62kRRyRII"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/839949"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "839949",
      "href": "https://vocadb.net/S/839949"
    }
  },
  {
    "title": "想起了你",
    "slug": "想起了你",
    "releaseDate": "2019-06-22",
    "type": "demo",
    "description": "Synced from VocaDB entry S/252001.",
    "cover": "https://i1.sndcdn.com/artworks-tyW3NU6w0rUO-0-large.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/lezhenglongya/mgyw1pmj9qon"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/252001"
      }
    ],
    "credits": [
      "乐正龙牙 (Unknown)",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "252001",
      "href": "https://vocadb.net/S/252001"
    }
  },
  {
    "title": "想起了你 (Instrumental)",
    "slug": "想起了你-instrumental",
    "releaseDate": "2019-06-22",
    "type": "single",
    "description": "Synced from VocaDB entry S/252002.",
    "cover": "https://i1.sndcdn.com/artworks-1HJafl4hgQbC-0-large.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "SoundCloud",
        "href": "http://soundcloud.com/lezhenglongya/fgwgisy23kkf"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/252002"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "乐正龙牙 (Unknown)"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "252002",
      "href": "https://vocadb.net/S/252002"
    }
  },
  {
    "title": "我們ㄉ世界",
    "slug": "我們-世界",
    "releaseDate": "2022-09-09",
    "type": "single",
    "description": "Synced from VocaDB entry S/437614.",
    "cover": "https://i.ytimg.com/vi/zGRw3R63h1I/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/zGRw3R63h1I"
      },
      {
        "label": "NCM Song Release",
        "href": "https://music.163.com/#/song?id=1831522541"
      },
      {
        "label": "Spotify",
        "href": "https://open.spotify.com/track/2GfJKnddjnO7tFUgaQxcjE"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/437614"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "洛天依",
      "心華"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "437614",
      "href": "https://vocadb.net/S/437614"
    }
  },
  {
    "title": "我們ㄉ世界",
    "slug": "我們-世界-2",
    "releaseDate": "2022-09-09",
    "type": "single",
    "description": "Synced from VocaDB entry S/437622.",
    "cover": "https://i.ytimg.com/vi/87o0HXTLcEk/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/87o0HXTLcEk"
      },
      {
        "label": "NCM Song Release",
        "href": "https://music.163.com/#/song?id=1978969445"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/437622"
      }
    ],
    "credits": [
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "437622",
      "href": "https://vocadb.net/S/437622"
    }
  },
  {
    "title": "我們ㄉ世界",
    "slug": "我們-世界-3",
    "releaseDate": "2022-09-08",
    "type": "demo",
    "description": "Synced from VocaDB entry S/740357.",
    "cover": "https://i.ytimg.com/vi/hvmmKnDzE9U/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/hvmmKnDzE9U"
      },
      {
        "label": "NCM Song Release",
        "href": "https://music.163.com/#/song?id=1978969441"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/740357"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク V4 (中文版)"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "740357",
      "href": "https://vocadb.net/S/740357"
    }
  },
  {
    "title": "我們ㄉ世界",
    "slug": "我們-世界-4",
    "releaseDate": "2026-01-25",
    "type": "demo",
    "description": "Synced from VocaDB entry S/905481.",
    "cover": "https://i.ytimg.com/vi/4OxpGdc1kco/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/4OxpGdc1kco"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/905481"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "905481",
      "href": "https://vocadb.net/S/905481"
    }
  },
  {
    "title": "I Wanna...",
    "slug": "i-wanna",
    "releaseDate": "2025-12-25",
    "type": "single",
    "description": "Synced from VocaDB entry S/896884.",
    "cover": "https://i.ytimg.com/vi/hFCHpiC6d6g/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/hFCHpiC6d6g"
      },
      {
        "label": "YouTube",
        "href": "https://music.youtube.com/watch?v=hFCHpiC6d6g&si=d8vbwcQcLiGtJ6tX"
      },
      {
        "label": "Spotify",
        "href": "https://open.spotify.com/track/4MZlUEIFFCEjeURgEVg59i?si=e5b847133c6d4f36"
      },
      {
        "label": "Apple Music",
        "href": "https://music.apple.com/hk/song/%E6%88%91%E6%83%B3%E8%A6%81/1863516777"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/896884"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "896884",
      "href": "https://vocadb.net/S/896884"
    }
  },
  {
    "title": "我會保護你",
    "slug": "我會保護你",
    "releaseDate": "2026-01-22",
    "type": "single",
    "description": "Synced from VocaDB entry S/903880.",
    "cover": "https://nicovideo.cdn.nimg.jp/thumbnails/45864131/45864131.61180007",
    "featured": false,
    "platforms": [
      {
        "label": "Niconico",
        "href": "http://www.nicovideo.jp/watch/sm45864131"
      },
      {
        "label": "YouTube",
        "href": "https://youtu.be/7gegp3XgPNI"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/903880"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "903880",
      "href": "https://vocadb.net/S/903880"
    }
  },
  {
    "title": "我的奇幻世界",
    "slug": "我的奇幻世界",
    "releaseDate": "2025-12-31",
    "type": "single",
    "description": "Synced from VocaDB entry S/921066.",
    "cover": "https://i.ytimg.com/vi/qjILbhuaj6Q/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/qjILbhuaj6Q"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/921066"
      }
    ],
    "credits": [
      "初音ミク",
      "心華",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "921066",
      "href": "https://vocadb.net/S/921066"
    }
  },
  {
    "title": "My Kitten",
    "slug": "my-kitten",
    "releaseDate": "2026-03-06",
    "type": "single",
    "description": "Synced from VocaDB entry S/948486.",
    "cover": "https://nicovideo.cdn.nimg.jp/thumbnails/46024518/46024518.32636213",
    "featured": false,
    "platforms": [
      {
        "label": "Niconico",
        "href": "http://www.nicovideo.jp/watch/sm46024518"
      },
      {
        "label": "YouTube",
        "href": "https://youtu.be/3nyNPsBxVgI"
      },
      {
        "label": "YouTube",
        "href": "https://youtu.be/RkfGXXZ3EzU"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/948486"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "948486",
      "href": "https://vocadb.net/S/948486"
    }
  },
  {
    "title": "我的小貓 (Instrumental Version)",
    "slug": "我的小貓-instrumental-version",
    "releaseDate": "2026-03-09",
    "type": "single",
    "description": "Synced from VocaDB entry S/949081.",
    "cover": "https://i.ytimg.com/vi/N_OdrsSSKSg/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/N_OdrsSSKSg"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/949081"
      }
    ],
    "credits": [
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "949081",
      "href": "https://vocadb.net/S/949081"
    }
  },
  {
    "title": "我的頭好痛啊 qwq",
    "slug": "我的頭好痛啊-qwq",
    "releaseDate": "2025-06-04",
    "type": "single",
    "description": "Synced from VocaDB entry S/799863.",
    "cover": "http://i0.hdslb.com/bfs/archive/17d47351c1a3b8905c0f5ff4871bbc1daca2fe05.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "Bilibili",
        "href": "https://www.bilibili.com/video/av114623030234892"
      },
      {
        "label": "YouTube",
        "href": "https://youtu.be/QArHzpSYMq0"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/799863"
      }
    ],
    "credits": [
      "初音ミク",
      "心華",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "799863",
      "href": "https://vocadb.net/S/799863"
    }
  },
  {
    "title": "Dear Mama",
    "slug": "dear-mama",
    "releaseDate": "2026-01-04",
    "type": "single",
    "description": "Synced from VocaDB entry S/894732.",
    "cover": "https://i.ytimg.com/vi/HEIfxUeKybo/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/HEIfxUeKybo"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/894732"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "894732",
      "href": "https://vocadb.net/S/894732"
    }
  },
  {
    "title": "時刻在準備著",
    "slug": "時刻在準備著",
    "releaseDate": "2026-02-11",
    "type": "single",
    "description": "Synced from VocaDB entry S/921042.",
    "cover": "https://nicovideo.cdn.nimg.jp/thumbnails/45934446/45934446.66182017",
    "featured": false,
    "platforms": [
      {
        "label": "Niconico",
        "href": "http://www.nicovideo.jp/watch/sm45934446"
      },
      {
        "label": "YouTube",
        "href": "https://youtu.be/_CEA7-QVIvU"
      },
      {
        "label": "YouTube",
        "href": "https://youtu.be/GlFm7nUtDGA"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/921042"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "921042",
      "href": "https://vocadb.net/S/921042"
    }
  },
  {
    "title": "月亮",
    "slug": "月亮",
    "releaseDate": "2025-08-18",
    "type": "single",
    "description": "Synced from VocaDB entry S/827629.",
    "cover": "https://i.ytimg.com/vi/smKyJVyIeTw/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/smKyJVyIeTw"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/827629"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "827629",
      "href": "https://vocadb.net/S/827629"
    }
  },
  {
    "title": "月台",
    "slug": "月台",
    "releaseDate": "2024-07-10",
    "type": "single",
    "description": "Synced from VocaDB entry S/836541.",
    "cover": "https://i.ytimg.com/vi/2RkDJiPRK6I/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/2RkDJiPRK6I"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/836541"
      }
    ],
    "credits": [
      "初音ミク",
      "心華",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "836541",
      "href": "https://vocadb.net/S/836541"
    }
  },
  {
    "title": "月夜 (帶我飛吧 (Off Vocal))",
    "slug": "月夜-帶我飛吧-off-vocal",
    "releaseDate": "2022-12-15",
    "type": "single",
    "description": "Synced from VocaDB entry S/462005.",
    "cover": "https://i.ytimg.com/vi/YLmVR_KvPaw/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/YLmVR_KvPaw"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/462005"
      }
    ],
    "credits": [
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "462005",
      "href": "https://vocadb.net/S/462005"
    }
  },
  {
    "title": "月夜 (帶我飛吧)",
    "slug": "月夜-帶我飛吧",
    "releaseDate": "2022-12-15",
    "type": "single",
    "description": "Synced from VocaDB entry S/462003.",
    "cover": "https://i.ytimg.com/vi/Zm6TBMfLQ64/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/Zm6TBMfLQ64"
      },
      {
        "label": "YouTube",
        "href": "https://youtu.be/6ZzD43_afF4"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/462003"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "462003",
      "href": "https://vocadb.net/S/462003"
    }
  },
  {
    "title": "月夜 (帶我飛吧)",
    "slug": "月夜-帶我飛吧-2",
    "releaseDate": "2025-12-25",
    "type": "single",
    "description": "Synced from VocaDB entry S/896891.",
    "cover": "https://i.ytimg.com/vi/hNbsOJph-do/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/hNbsOJph-do"
      },
      {
        "label": "YouTube",
        "href": "https://music.youtube.com/watch?v=hNbsOJph-do&si=tHGhj1YCtVwSbWQD"
      },
      {
        "label": "Apple Music",
        "href": "https://music.apple.com/hk/song/%E6%9C%88%E5%A4%9C/1863516890"
      },
      {
        "label": "Spotify",
        "href": "https://open.spotify.com/track/2CUgvL1vMkHCD5GpAVl2b0?si=c303ac545ea7464a"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/896891"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "896891",
      "href": "https://vocadb.net/S/896891"
    }
  },
  {
    "title": "朋友費",
    "slug": "朋友費",
    "releaseDate": "2026-01-10",
    "type": "single",
    "description": "Synced from VocaDB entry S/897632.",
    "cover": "https://i.ytimg.com/vi/bE5IWdKekuo/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/bE5IWdKekuo"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/897632"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "897632",
      "href": "https://vocadb.net/S/897632"
    }
  },
  {
    "title": "木棉花",
    "slug": "木棉花",
    "releaseDate": "2025-12-25",
    "type": "single",
    "description": "Synced from VocaDB entry S/896899.",
    "cover": "https://i.ytimg.com/vi/rpeEd1HQQgA/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/rpeEd1HQQgA"
      },
      {
        "label": "YouTube",
        "href": "https://music.youtube.com/watch?v=rpeEd1HQQgA&si=bAfAZvJHqwzsOFTq"
      },
      {
        "label": "Apple Music",
        "href": "https://music.apple.com/hk/song/%E6%9C%A8%E6%A3%89%E8%8A%B1/1863517162"
      },
      {
        "label": "Spotify",
        "href": "https://open.spotify.com/track/5FGWG0btvi6S7v5HsqIfXx?si=01b86118c6f04b7d"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/896899"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "896899",
      "href": "https://vocadb.net/S/896899"
    }
  },
  {
    "title": "木棉花",
    "slug": "木棉花-2",
    "releaseDate": "2025-12-31",
    "type": "demo",
    "description": "Synced from VocaDB entry S/921044.",
    "cover": "https://nicovideo.cdn.nimg.jp/thumbnails/45913715/45913715.33576360",
    "featured": false,
    "platforms": [
      {
        "label": "Niconico",
        "href": "http://www.nicovideo.jp/watch/sm45913715"
      },
      {
        "label": "YouTube",
        "href": "https://youtu.be/W3W9moxEgRc"
      },
      {
        "label": "YouTube",
        "href": "https://youtu.be/-kdSqiMRwIw"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/921044"
      }
    ],
    "credits": [
      "Misaka Sarina",
      "初音ミク"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "921044",
      "href": "https://vocadb.net/S/921044"
    }
  },
  {
    "title": "The Story of the Bridge (Short Ver.)",
    "slug": "the-story-of-the-bridge-short-ver",
    "releaseDate": "2024-07-10",
    "type": "single",
    "description": "Synced from VocaDB entry S/836549.",
    "cover": "https://i.ytimg.com/vi/UHbSeRkLmlM/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/UHbSeRkLmlM"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/836549"
      }
    ],
    "credits": [
      "初音ミク",
      "心華",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "836549",
      "href": "https://vocadb.net/S/836549"
    }
  },
  {
    "title": "Nameless Grass",
    "slug": "nameless-grass",
    "releaseDate": "2024-07-10",
    "type": "single",
    "description": "Synced from VocaDB entry S/836573.",
    "cover": "https://i.ytimg.com/vi/XIWmJ9Z-4XY/default.jpg",
    "featured": false,
    "platforms": [
      {
        "label": "YouTube",
        "href": "https://youtu.be/XIWmJ9Z-4XY"
      },
      {
        "label": "VocaDB",
        "href": "https://vocadb.net/S/836573"
      }
    ],
    "credits": [
      "心華",
      "Misaka Sarina"
    ],
    "notes": [
      "This entry was generated from VocaDB.",
      "Review title, date, credits, and platform links before treating it as final."
    ],
    "source": {
      "label": "VocaDB",
      "id": "836573",
      "href": "https://vocadb.net/S/836573"
    }
  }
];

export const getSortedReleases = () =>
  [...musicReleases].sort(
    (a, b) => new Date(b.releaseDate).valueOf() - new Date(a.releaseDate).valueOf()
  );

export const getFeaturedRelease = () => musicReleases.find((release) => release.featured) ?? musicReleases[0];
