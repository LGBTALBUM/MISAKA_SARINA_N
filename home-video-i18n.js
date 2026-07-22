const HOME_VIDEO_I18N_LOCALES = ['en', 'ja', 'zh-TW', 'ca'];

const homeVideoTranslations = {
  en: {
    'homeVideo.title': 'Now featured: a new Misaka Sarina video.',
    'homeVideo.copy': 'The homepage spotlight has been refreshed. Watch the featured video here, then continue on YouTube to like, comment, share, and explore more releases.',
    'homeVideo.watch': 'Watch on YouTube'
  },
  ja: {
    'homeVideo.title': '新しい Misaka Sarina 動画を特集しています。',
    'homeVideo.copy': 'ホームページの注目動画を更新しました。ここで視聴した後、YouTube で高評価、コメント、共有をして、ほかの作品もご覧ください。',
    'homeVideo.watch': 'YouTube で見る'
  },
  'zh-TW': {
    'homeVideo.title': '現正推薦：Misaka Sarina 全新精選影片。',
    'homeVideo.copy': '首頁焦點影片已更新。立即在這裡觀看，並前往 YouTube 按讚、留言、分享，以及探索更多作品。',
    'homeVideo.watch': '前往 YouTube 觀看'
  },
  ca: {
    'homeVideo.title': 'Ara destacat: un nou vídeo de Misaka Sarina.',
    'homeVideo.copy': 'El vídeo destacat de la portada s’ha renovat. Mira’l aquí i continua a YouTube per donar-hi m’agrada, comentar, compartir i descobrir més treballs.',
    'homeVideo.watch': 'Mira’l a YouTube'
  }
};

const resolveHomeVideoLocale = () => {
  const stored = localStorage.getItem('msarina.locale') || 'system';
  if (stored !== 'system' && HOME_VIDEO_I18N_LOCALES.includes(stored)) return stored;

  const browser = navigator.language || 'en';
  if (browser.toLowerCase().startsWith('ja')) return 'ja';
  if (browser.toLowerCase().startsWith('zh')) return 'zh-TW';
  if (browser.toLowerCase().startsWith('ca')) return 'ca';
  return 'en';
};

const applyHomeVideoI18n = () => {
  const locale = resolveHomeVideoLocale();
  const dict = homeVideoTranslations[locale] || homeVideoTranslations.en;

  document.querySelectorAll('[data-i18n^="homeVideo."]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    const value = dict[key] || homeVideoTranslations.en[key];
    if (value) node.textContent = value;
  });
};

window.applyHomeVideoI18n = applyHomeVideoI18n;

document.addEventListener('DOMContentLoaded', () => {
  applyHomeVideoI18n();

  document.querySelectorAll('[data-locale-select]').forEach((select) => {
    select.addEventListener('change', () => {
      window.setTimeout(applyHomeVideoI18n, 0);
    });
  });
});

document.addEventListener('msarina:dynamic-content', applyHomeVideoI18n);
