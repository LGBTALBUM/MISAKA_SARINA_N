# Manager catalog files

These JSON files are intended as stable write targets for a closed-source catalogue manager.

The website still keeps older curated TypeScript data layers, but manager-generated changes should prefer these files because JSON is easier to update safely from a GUI tool.

## `manualReleases.json`

Append new manually maintained releases here. Each entry should follow the public `MusicRelease` shape plus an explicit `source` object.

Minimal entry:

```json
{
  "title": "Song title",
  "slug": "manual-song-title",
  "releaseDate": "2026-01-01",
  "type": "single",
  "description": "Public catalogue description.",
  "featured": false,
  "platforms": [
    { "label": "YouTube", "href": "https://youtu.be/..." },
    { "label": "Spotify", "href": "https://open.spotify.com/track/..." }
  ],
  "credits": ["Misaka Sarina"],
  "notes": ["Added through Manager."],
  "source": {
    "label": "Manager catalogue",
    "id": "manager-2026-001",
    "href": "https://msarina.moe/music/"
  }
}
```

## `musicOverrides.json`

Patch existing releases by slug. Manager-generated overrides take precedence over curated TypeScript overrides.

```json
{
  "ytm-02-057": {
    "platforms": [
      { "label": "YouTube", "href": "https://youtu.be/..." },
      { "label": "Apple Music", "href": "https://music.apple.com/..." }
    ],
    "notes": ["Public platform links reviewed through Manager."]
  }
}
```

## `lyrics.json`

Lyrics seed catalogue. Use `complete` only after creator-side verification.

```json
{
  "title": "Song title",
  "status": "partial",
  "language": "zh-Hant",
  "excerpt": ["line 1", "line 2"],
  "notes": ["Verified fragment from creator archive."]
}
```

Allowed lyric status values:

- `complete`
- `partial`
- `pending`
- `instrumental`
