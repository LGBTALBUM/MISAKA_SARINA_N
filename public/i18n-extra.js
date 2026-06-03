const EXTRA_I18N_LOCALES = ['en', 'ja', 'zh-TW', 'ca'];

const extraTranslations = {
  en: {
    'nav.timeline': 'Timeline',
    'nav.friends': 'Friends',
    'timeline.eyebrow': 'Release Timeline',
    'timeline.title': 'Sound traces by year.',
    'timeline.copy': 'A chronological view of the Misaka Sarina music archive. Main releases, manual catalogue entries, and lower-priority version entries are grouped together by year for cleanup and discovery.',
    'timeline.backMusic': 'Back to music',
    'timeline.catalogueReview': 'Catalogue review',
    'timeline.years': 'Years',
    'timeline.entries': 'Entries',
    'timeline.main': 'Main',
    'timeline.manual': 'Manual',
    'timeline.index': 'Index',
    'timeline.archiveYear': 'Archive year',
    'timeline.secondary': 'Secondary',
    'friends.eyebrow': 'Friends',
    'friends.title': 'Neighboring stars.',
    'friends.copy': 'Friend links, personal sites, and neighboring spaces connected to the Misaka Sarina archive.',
    'friends.links': 'Links',
    'friends.site': 'Friend site'
  },
  ja: {
    'nav.timeline': '年表',
    'nav.friends': '友人リンク',
    'timeline.eyebrow': 'リリース年表',
    'timeline.title': '年ごとの音の痕跡。',
    'timeline.copy': 'Misaka Sarina の音楽アーカイブを時系列で見るページです。メインリリース、手動カタログ項目、低優先度のバージョン項目を年ごとにまとめ、整理と発見に使えるようにしています。',
    'timeline.backMusic': '音楽へ戻る',
    'timeline.catalogueReview': 'カタログ確認',
    'timeline.years': '年',
    'timeline.entries': '項目',
    'timeline.main': 'メイン',
    'timeline.manual': '手動',
    'timeline.index': '索引',
    'timeline.archiveYear': 'アーカイブ年',
    'timeline.secondary': '二次項目',
    'friends.eyebrow': '友人リンク',
    'friends.title': '隣り合う星たち。',
    'friends.copy': 'Misaka Sarina のアーカイブにつながる友人リンク、個人サイト、近くのインターネット空間です。',
    'friends.links': 'リンク',
    'friends.site': '友人サイト'
  },
  'zh-TW': {
    'nav.timeline': '時間線',
    'nav.friends': '友連',
    'timeline.eyebrow': '發行時間線',
    'timeline.title': '按年份排列的聲音痕跡。',
    'timeline.copy': '以時間順序整理 Misaka Sarina 的音樂檔案。主發行、手動目錄條目與較低優先級的版本條目會按年份歸檔，方便清理與探索。',
    'timeline.backMusic': '返回音樂',
    'timeline.catalogueReview': '目錄檢查',
    'timeline.years': '年份',
    'timeline.entries': '條目',
    'timeline.main': '主要',
    'timeline.manual': '手動',
    'timeline.index': '索引',
    'timeline.archiveYear': '檔案年份',
    'timeline.secondary': '次要',
    'friends.eyebrow': '友連',
    'friends.title': '鄰近的星星。',
    'friends.copy': '與 Misaka Sarina 檔案相連的友站、個人網站與鄰近空間。',
    'friends.links': '連結',
    'friends.site': '友站'
  },
  ca: {
    'nav.timeline': 'Cronologia',
    'nav.friends': 'Amistats',
    'timeline.eyebrow': 'Cronologia de llançaments',
    'timeline.title': 'Rastres sonors per any.',
    'timeline.copy': 'Una vista cronològica de l’arxiu musical de Misaka Sarina. Els llançaments principals, les entrades manuals del catàleg i les versions de prioritat baixa s’agrupen per any per facilitar la revisió i la descoberta.',
    'timeline.backMusic': 'Torna a música',
    'timeline.catalogueReview': 'Revisió del catàleg',
    'timeline.years': 'Anys',
    'timeline.entries': 'Entrades',
    'timeline.main': 'Principal',
    'timeline.manual': 'Manual',
    'timeline.index': 'Índex',
    'timeline.archiveYear': 'Any d’arxiu',
    'timeline.secondary': 'Secundari',
    'friends.eyebrow': 'Amistats',
    'friends.title': 'Estrelles veïnes.',
    'friends.copy': 'Enllaços d’amistat, llocs personals i espais veïns connectats amb l’arxiu de Misaka Sarina.',
    'friends.links': 'Enllaços',
    'friends.site': 'Lloc amic'
  }
};

const resolveExtraLocale = () => {
  const stored = localStorage.getItem('msarina.locale') || 'system';
  if (stored !== 'system' && EXTRA_I18N_LOCALES.includes(stored)) return stored;

  const browser = navigator.language || 'en';
  if (browser.toLowerCase().startsWith('ja')) return 'ja';
  if (browser.toLowerCase().startsWith('zh')) return 'zh-TW';
  if (browser.toLowerCase().startsWith('ca')) return 'ca';
  return 'en';
};

const applyExtraI18n = () => {
  const locale = resolveExtraLocale();
  const dict = extraTranslations[locale] || extraTranslations.en;

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    const value = dict[key] || extraTranslations.en[key];
    if (value) node.textContent = value;
  });

  document.querySelectorAll('[data-i18n-template]').forEach((node) => {
    const key = node.getAttribute('data-i18n-template');
    const value = dict[key] || extraTranslations.en[key];
    if (!value) return;

    const values = JSON.parse(node.getAttribute('data-i18n-values') || '{}');
    node.textContent = value.replace(/\{(\w+)\}/g, (_, name) => values[name] ?? '');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  applyExtraI18n();

  document.querySelectorAll('[data-locale-select]').forEach((select) => {
    select.addEventListener('change', () => {
      window.setTimeout(applyExtraI18n, 0);
    });
  });
});
