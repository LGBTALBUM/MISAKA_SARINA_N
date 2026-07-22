const META_NOTICE_LOCALES = ['en', 'ja', 'zh-TW', 'ca'];

const metaNoticeTranslations = {
  en: {
    'home.metaNoticeEyebrow': 'Platform notice',
    'home.metaNoticeTitle': 'Meta platform use suspended',
    'home.metaNoticeBody': "Because all of MISAKA SARINA's Meta accounts have been suspended, and after considering the future direction of this personal project, Meta platforms will no longer be used for the foreseeable future. Thank you for your understanding."
  },
  ja: {
    'home.metaNoticeEyebrow': 'プラットフォームに関するお知らせ',
    'home.metaNoticeTitle': 'Meta プラットフォームの利用停止について',
    'home.metaNoticeBody': 'MISAKA SARINA の Meta アカウントがすべて停止されたため、今後の個人活動の方針を踏まえ、Meta プラットフォームの利用を長期的に停止します。ご理解いただけますと幸いです。'
  },
  'zh-TW': {
    'home.metaNoticeEyebrow': '平台使用公告',
    'home.metaNoticeTitle': '將長期停止使用 Meta 平台',
    'home.metaNoticeBody': '由於 MISAKA SARINA 的 Meta 帳號全部慘遭停權，現基於個人方向考慮，將長期停止使用 Meta 平台，希望得到您的理解。'
  },
  ca: {
    'home.metaNoticeEyebrow': 'Avís sobre plataformes',
    'home.metaNoticeTitle': 'Suspensió de l’ús de les plataformes de Meta',
    'home.metaNoticeBody': 'Com que tots els comptes de Meta de MISAKA SARINA han estat suspesos, i tenint en compte la futura direcció personal del projecte, es deixarà d’utilitzar les plataformes de Meta durant un període prolongat. Gràcies per la vostra comprensió.'
  }
};

const resolveMetaNoticeLocale = () => {
  const stored = localStorage.getItem('msarina.locale') || 'system';
  if (stored !== 'system' && META_NOTICE_LOCALES.includes(stored)) return stored;

  const browser = navigator.language || 'en';
  if (browser.toLowerCase().startsWith('ja')) return 'ja';
  if (browser.toLowerCase().startsWith('zh')) return 'zh-TW';
  if (browser.toLowerCase().startsWith('ca')) return 'ca';
  return 'en';
};

const applyMetaNoticeI18n = () => {
  const locale = resolveMetaNoticeLocale();
  const dict = metaNoticeTranslations[locale] || metaNoticeTranslations.en;

  document.querySelectorAll('[data-i18n^="home.metaNotice"]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    const value = dict[key] || metaNoticeTranslations.en[key];
    if (value) node.textContent = value;
  });
};

window.applyMetaNoticeI18n = applyMetaNoticeI18n;

document.addEventListener('DOMContentLoaded', () => {
  applyMetaNoticeI18n();

  document.querySelectorAll('[data-locale-select]').forEach((select) => {
    select.addEventListener('change', () => {
      window.setTimeout(applyMetaNoticeI18n, 0);
    });
  });
});

document.addEventListener('msarina:dynamic-content', applyMetaNoticeI18n);
