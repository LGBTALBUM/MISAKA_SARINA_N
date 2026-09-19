export type HomeDiscoverySong = {
  slug: string;
  role: string;
  storyKey: string;
  fallbackStory: string;
};

export const homeDiscoverySongs: HomeDiscoverySong[] = [
  {
    slug: '我們-世界',
    role: 'Legacy / Recognition Anchor',
    storyKey: 'brandHome.songWorld',
    fallbackStory: 'A legacy anchor: an older song that makes the long history of Misaka Sarina visible.'
  },
  {
    slug: '寫給妳的話',
    role: 'Personal / Emotional Anchor',
    storyKey: 'brandHome.songLetter',
    fallbackStory: 'A personal anchor: a direct way into the emotional reason these songs exist.'
  },
  {
    slug: '小房間',
    role: 'Visual / Intimate Anchor',
    storyKey: 'brandHome.songRoom',
    fallbackStory: 'A small-room story of memory, night, and the private spaces where songs are kept.'
  },
  {
    slug: '天南星的世界',
    role: 'World-building Anchor',
    storyKey: 'brandHome.songWorldbuilding',
    fallbackStory: 'A world-building anchor: one of the clearest entrances into the Misaka Sarina small-world idea.'
  }
];
