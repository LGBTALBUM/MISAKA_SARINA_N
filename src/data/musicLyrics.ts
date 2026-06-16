export type LyricsStatus = 'complete' | 'partial' | 'pending' | 'instrumental';

export type LyricsEntry = {
  title: string;
  status: LyricsStatus;
  language?: string;
  excerpt?: string[];
  notes?: string[];
};

export const lyricsByTitle: LyricsEntry[] = [
  {
    title: '小房間',
    status: 'partial',
    language: 'zh-Hant',
    excerpt: [
      '小房間 小房間',
      '屬於我的最後一個小房間',
      '它給我 帶來了',
      '或許世界絕無僅有的溫暖'
    ],
    notes: ['Known opening fragment from the creator archive. Full lyrics still need verification before publication.']
  },
  {
    title: '寫給妳的話',
    status: 'partial',
    language: 'zh-Hant',
    excerpt: [
      '角落中的天使啊…',
      '真的好想把想對妳說出的话',
      '寫成詩篇送給妳啊'
    ],
    notes: ['Known fragment from the creator archive. Full lyrics should be pasted into this catalogue after review.']
  },
  {
    title: '我是一棵無名的草',
    status: 'partial',
    language: 'zh-Hant',
    excerpt: [
      '我是一棵無名的草',
      '躲在最偏僻的牆角…'
    ],
    notes: ['Related lyric fragment for future garden/catalogue linking.']
  }
];
