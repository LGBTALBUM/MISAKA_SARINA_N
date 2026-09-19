const MUSIC_SOURCES_LOCALES = ['en', 'ja', 'zh-TW', 'ca'];

const musicSourcesTranslations = {
  en: {
    'musicSources.eyebrow': 'External discovery & statistics',
    'musicSources.title': 'Cross-check the archive across Kiite and VocaRank.',
    'musicSources.copy': 'The local catalogue remains curated and static. These external sources help discover missing works, reconcile the two Misaka Sarina VocaDB artist identities, and inspect live YouTube / Niconico statistics without freezing volatile view counts into this site.',
    'musicSources.kiiteCopy': 'Creator catalogue used as a discovery and cross-check source for Niconico-facing works that may be missing from the primary catalogue.',
    'musicSources.vocarankSearchCopy': 'Combined VocaRank search spanning both Misaka Sarina VocaDB identities, with current YouTube and Niconico view statistics.',
    'musicSources.vocarankPrimaryCopy': 'VocaRank artist view for the long-standing Misaka Sarina VocaDB identity used by the original site sync.',
    'musicSources.vocarankSecondaryCopy': 'VocaRank artist view for the second Misaka Sarina VocaDB identity, now included in catalogue synchronization.'
  },
  ja: {
    'musicSources.eyebrow': '外部ディスカバリー / 統計',
    'musicSources.title': 'Kiite と VocaRank からアーカイブを照合。',
    'musicSources.copy': 'ローカルのカタログは引き続き静的かつ手動で整理します。外部ソースは、未収録作品の発見、Misaka Sarina の2つの VocaDB アーティスト ID の照合、そして変動する再生数をサイトへ固定せず YouTube / Niconico の最新統計を確認するために使います。',
    'musicSources.kiiteCopy': 'Niconico 系作品の発見と照合に使うクリエイターカタログ。主カタログにない作品の補完候補を確認できます。',
    'musicSources.vocarankSearchCopy': 'Misaka Sarina の2つの VocaDB ID をまとめて検索し、YouTube と Niconico の最新再生統計を確認できます。',
    'musicSources.vocarankPrimaryCopy': '従来のサイト同期で使用してきた Misaka Sarina の VocaDB ID 75285 に対応する VocaRank アーティスト表示です。',
    'musicSources.vocarankSecondaryCopy': '今後カタログ同期にも含める Misaka Sarina の2つ目の VocaDB ID 176454 に対応する VocaRank アーティスト表示です。'
  },
  'zh-TW': {
    'musicSources.eyebrow': '外部探索與統計',
    'musicSources.title': '透過 Kiite 與 VocaRank 交叉核對音樂檔案。',
    'musicSources.copy': '本站目錄仍維持經整理的靜態資料；這些外部來源用來發現遺漏作品、核對 Misaka Sarina 的兩個 VocaDB 藝術家身分，並查看即時的 YouTube / Niconico 播放統計，而不把容易過期的播放數硬寫進本站。',
    'musicSources.kiiteCopy': '作為 Niconico 向作品的探索與交叉核對來源，可用來找出主目錄可能尚未收錄的作品。',
    'musicSources.vocarankSearchCopy': '合併搜尋 Misaka Sarina 的兩個 VocaDB 身分，並查看目前的 YouTube 與 Niconico 播放統計。',
    'musicSources.vocarankPrimaryCopy': '對應原本網站同步所使用之 Misaka Sarina VocaDB ID 75285 的 VocaRank 藝術家頁。',
    'musicSources.vocarankSecondaryCopy': '對應 Misaka Sarina 第二個 VocaDB ID 176454 的 VocaRank 藝術家頁；此 ID 現已納入目錄同步。'
  },
  ca: {
    'musicSources.eyebrow': 'Descoberta externa i estadístiques',
    'musicSources.title': 'Contrasta l’arxiu amb Kiite i VocaRank.',
    'musicSources.copy': 'El catàleg local continua sent curat i estàtic. Aquestes fonts externes serveixen per descobrir obres absents, reconciliar les dues identitats de Misaka Sarina a VocaDB i consultar estadístiques en directe de YouTube / Niconico sense congelar xifres de reproduccions que canvien constantment.',
    'musicSources.kiiteCopy': 'Catàleg de creadora per descobrir i contrastar obres orientades a Niconico que poden faltar al catàleg principal.',
    'musicSources.vocarankSearchCopy': 'Cerca combinada de VocaRank per a les dues identitats VocaDB de Misaka Sarina, amb estadístiques actuals de YouTube i Niconico.',
    'musicSources.vocarankPrimaryCopy': 'Vista d’artista de VocaRank per a la identitat VocaDB de Misaka Sarina utilitzada per la sincronització original del lloc.',
    'musicSources.vocarankSecondaryCopy': 'Vista d’artista de VocaRank per a la segona identitat VocaDB de Misaka Sarina, ara inclosa en la sincronització del catàleg.'
  }
};

const resolveMusicSourcesLocale = () => {
  const stored = localStorage.getItem('msarina.locale') || 'system';
  if (stored !== 'system' && MUSIC_SOURCES_LOCALES.includes(stored)) return stored;

  const browser = navigator.language || 'en';
  if (browser.toLowerCase().startsWith('ja')) return 'ja';
  if (browser.toLowerCase().startsWith('zh')) return 'zh-TW';
  if (browser.toLowerCase().startsWith('ca')) return 'ca';
  return 'en';
};

const applyMusicSourcesI18n = () => {
  const locale = resolveMusicSourcesLocale();
  const dict = musicSourcesTranslations[locale] || musicSourcesTranslations.en;

  document.querySelectorAll('[data-i18n^="musicSources."]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    const value = dict[key] || musicSourcesTranslations.en[key];
    if (value) node.textContent = value;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  applyMusicSourcesI18n();

  document.querySelectorAll('[data-locale-select]').forEach((select) => {
    select.addEventListener('change', () => {
      window.setTimeout(applyMusicSourcesI18n, 0);
    });
  });
});

document.addEventListener('msarina:dynamic-content', applyMusicSourcesI18n);
