const LOCALES = ['en', 'ja', 'zh-TW', 'ca'];
const THEMES = ['dark', 'light'];

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.music': 'Music',
    'nav.works': 'Works',
    'nav.blog': 'Blog',
    'nav.links': 'Links',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'ui.language': 'Language',
    'ui.theme': 'Theme',
    'ui.system': 'System',
    'ui.themeDark': 'Dark',
    'ui.themeLight': 'Light',
    'ui.skip': 'Skip to content',
    'footer.built': 'Built with Astro. Legacy link-page behavior now lives under',
    'home.eyebrow': 'Baker Siacone / Siacone Art',
    'home.copy': 'Music creator / VOCALOID creator / digital project maker. Welcome to the small world of Baker Siacone / Misaka Sarina.',
    'home.listen': 'Listen / Music',
    'home.links': 'Links',
    'home.contact': 'Contact',
    'home.nightArchive': 'Night archive',
    'home.heroCard': 'I make music, small tools, and personal spaces on the internet.',
    'home.featured': 'Featured Release',
    'home.viewRelease': 'View release',
    'home.explore': 'Explore',
    'home.exploreTitle': 'A small hub for music, notes, and digital traces.',
    'home.tileMusicTitle': 'Music',
    'home.tileMusicBody': 'Main releases first, with version entries kept in a secondary section.',
    'home.tileLinksTitle': 'Links',
    'home.tileLinksBody': 'The organized replacement for the original Linkyee list.',
    'home.tileWorksTitle': 'Works',
    'home.tileWorksBody': 'Future tools, experiments, and technical projects.',
    'home.digitalTrace': 'Digital Trace',
    'home.digitalTitle': 'Development traces behind the archive.',
    'home.digitalBody': 'Small tools, web experiments, infrastructure notes, and the repository history that keeps this creator space reproducible.',
    'music.archive': 'Music Archive',
    'music.title': 'Releases and sound traces.',
    'music.copy': 'Main releases are shown first. Instrumental, Off Vocal, Vocal Off, karaoke, and other version entries remain available in a lower-priority archive section.',
    'works.archive': 'Works Archive',
    'works.title': 'Projects, systems, and experiments.',
    'works.copy': 'A lightweight index for public-facing web tools, archive systems, music infrastructure, and technical experiments around the Misaka Sarina / Siacone Art space.',
    'blog.archive': 'Digital Garden',
    'blog.title': 'Notes, diaries, and maintenance logs.',
    'blog.copy': 'A prepared writing surface for release context, technical notes, production logs, and reproducible site maintenance records.',
    'about.eyebrow': 'About',
    'contact.eyebrow': 'Contact'
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.music': '音楽',
    'nav.works': '制作物',
    'nav.blog': 'ノート',
    'nav.links': 'リンク',
    'nav.about': '概要',
    'nav.contact': '連絡先',
    'ui.language': '言語',
    'ui.theme': 'テーマ',
    'ui.system': 'システム',
    'ui.themeDark': 'ダーク',
    'ui.themeLight': 'ライト',
    'ui.skip': '本文へ移動',
    'footer.built': 'Astro で構築。旧リンクページの役割は現在',
    'home.eyebrow': 'Baker Siacone / Siacone Art',
    'home.copy': '音楽クリエイター / VOCALOID クリエイター / デジタルプロジェクト制作者。Baker Siacone / Misaka Sarina の小さな世界へようこそ。',
    'home.listen': '聴く / 音楽',
    'home.links': 'リンク',
    'home.contact': '連絡先',
    'home.nightArchive': '夜のアーカイブ',
    'home.heroCard': '音楽、小さなツール、そして個人のインターネット空間を作っています。',
    'home.featured': '注目リリース',
    'home.viewRelease': 'リリースを見る',
    'home.explore': '探索',
    'home.exploreTitle': '音楽、ノート、デジタルな痕跡のための小さなハブ。',
    'home.tileMusicTitle': '音楽',
    'home.tileMusicBody': 'メインリリースを優先し、バージョン違いは二次セクションに整理します。',
    'home.tileLinksTitle': 'リンク',
    'home.tileLinksBody': '元の Linkyee リストを整理したリンクアーカイブ。',
    'home.tileWorksTitle': '制作物',
    'home.tileWorksBody': '将来のツール、実験、技術プロジェクト用の領域。',
    'home.digitalTrace': 'デジタル痕跡',
    'home.digitalTitle': 'このアーカイブを支える開発の痕跡。',
    'home.digitalBody': '小さなツール、Web 実験、インフラメモ、そして再現可能な制作空間を支えるリポジトリ履歴。',
    'music.archive': '音楽アーカイブ',
    'music.title': 'リリースと音の痕跡。',
    'music.copy': 'メインリリースを先に表示し、Instrumental / Off Vocal / カラオケなどのバージョンは低優先度のアーカイブに残します。',
    'works.archive': '制作物アーカイブ',
    'works.title': 'プロジェクト、システム、実験。',
    'works.copy': 'Misaka Sarina / Siacone Art 周辺の Web ツール、アーカイブシステム、音楽インフラ、技術実験の軽量インデックス。',
    'blog.archive': 'デジタルガーデン',
    'blog.title': 'ノート、日記、メンテナンスログ。',
    'blog.copy': 'リリース背景、技術ノート、制作ログ、再現可能なメンテナンス記録のための執筆スペース。',
    'about.eyebrow': '概要',
    'contact.eyebrow': '連絡先'
  },
  'zh-TW': {
    'nav.home': '首頁',
    'nav.music': '音樂',
    'nav.works': '作品',
    'nav.blog': '筆記',
    'nav.links': '連結',
    'nav.about': '關於',
    'nav.contact': '聯絡',
    'ui.language': '語言',
    'ui.theme': '主題',
    'ui.system': '跟隨系統',
    'ui.themeDark': '深色',
    'ui.themeLight': '淺色',
    'ui.skip': '跳到主要內容',
    'footer.built': '使用 Astro 建構。舊版連結頁功能目前位於',
    'home.eyebrow': 'Baker Siacone / Siacone Art',
    'home.copy': '音樂創作者 / VOCALOID 創作者 / 數位專案製作者。歡迎來到 Baker Siacone / Misaka Sarina 的天南星小世界。',
    'home.listen': '聆聽 / 音樂',
    'home.links': '連結',
    'home.contact': '聯絡',
    'home.nightArchive': '夜間檔案館',
    'home.heroCard': '我製作音樂、小工具，以及屬於自己的網路空間。',
    'home.featured': '精選發行',
    'home.viewRelease': '查看發行',
    'home.explore': '探索',
    'home.exploreTitle': '一個放置音樂、筆記與數位痕跡的小型樞紐。',
    'home.tileMusicTitle': '音樂',
    'home.tileMusicBody': '主作品優先展示，版本條目保留在次級區塊。',
    'home.tileLinksTitle': '連結',
    'home.tileLinksBody': '原 Linkyee 清單的整理版替代入口。',
    'home.tileWorksTitle': '作品',
    'home.tileWorksBody': '未來工具、實驗與技術專案的預留空間。',
    'home.digitalTrace': '數位痕跡',
    'home.digitalTitle': '支撐這座檔案館的開發痕跡。',
    'home.digitalBody': '小工具、Web 實驗、基礎設施筆記，以及讓這個創作者空間可重現的 repo 歷史。',
    'music.archive': '音樂檔案館',
    'music.title': '發行作品與聲音痕跡。',
    'music.copy': '主作品會優先展示；Instrumental、Off Vocal、Vocal Off、卡拉 OK 等版本條目會保留在低權重檔案區。',
    'works.archive': '作品檔案館',
    'works.title': '專案、系統與實驗。',
    'works.copy': 'Misaka Sarina / Siacone Art 周邊公開 Web 工具、檔案系統、音樂基礎設施與技術實驗的輕量索引。',
    'blog.archive': '數位花園',
    'blog.title': '筆記、日誌與維護紀錄。',
    'blog.copy': '為發行背景、技術筆記、製作紀錄與可重現的網站維護紀錄準備的書寫空間。',
    'about.eyebrow': '關於',
    'contact.eyebrow': '聯絡'
  },
  ca: {
    'nav.home': 'Inici',
    'nav.music': 'Música',
    'nav.works': 'Projectes',
    'nav.blog': 'Notes',
    'nav.links': 'Enllaços',
    'nav.about': 'Sobre',
    'nav.contact': 'Contacte',
    'ui.language': 'Idioma',
    'ui.theme': 'Tema',
    'ui.system': 'Sistema',
    'ui.themeDark': 'Fosc',
    'ui.themeLight': 'Clar',
    'ui.skip': 'Salta al contingut',
    'footer.built': 'Creat amb Astro. El comportament de l’antiga pàgina d’enllaços ara viu a',
    'home.eyebrow': 'Baker Siacone / Siacone Art',
    'home.copy': 'Creador musical / creador VOCALOID / creador de projectes digitals. Benvingut al petit món de Baker Siacone / Misaka Sarina.',
    'home.listen': 'Escolta / Música',
    'home.links': 'Enllaços',
    'home.contact': 'Contacte',
    'home.nightArchive': 'Arxiu nocturn',
    'home.heroCard': 'Faig música, petites eines i espais personals a internet.',
    'home.featured': 'Llançament destacat',
    'home.viewRelease': 'Veure llançament',
    'home.explore': 'Explora',
    'home.exploreTitle': 'Un petit centre per a música, notes i rastres digitals.',
    'home.tileMusicTitle': 'Música',
    'home.tileMusicBody': 'Els llançaments principals primer; les versions queden en una secció secundària.',
    'home.tileLinksTitle': 'Enllaços',
    'home.tileLinksBody': 'El reemplaçament organitzat de la llista Linkyee original.',
    'home.tileWorksTitle': 'Projectes',
    'home.tileWorksBody': 'Espai reservat per a eines, experiments i projectes tècnics futurs.',
    'home.digitalTrace': 'Rastre digital',
    'home.digitalTitle': 'Rastres de desenvolupament darrere l’arxiu.',
    'home.digitalBody': 'Petites eines, experiments web, notes d’infraestructura i l’historial del repositori que fa reproduïble aquest espai creatiu.',
    'music.archive': 'Arxiu musical',
    'music.title': 'Llançaments i rastres sonors.',
    'music.copy': 'Els llançaments principals es mostren primer. Instrumentals, Off Vocal, karaoke i altres versions queden en una secció d’arxiu de menor prioritat.',
    'works.archive': 'Arxiu de projectes',
    'works.title': 'Projectes, sistemes i experiments.',
    'works.copy': 'Un índex lleuger d’eines web, sistemes d’arxiu, infraestructura musical i experiments tècnics de Misaka Sarina / Siacone Art.',
    'blog.archive': 'Jardí digital',
    'blog.title': 'Notes, diaris i registres de manteniment.',
    'blog.copy': 'Un espai d’escriptura per al context dels llançaments, notes tècniques, registres de producció i manteniment reproduïble.',
    'about.eyebrow': 'Sobre',
    'contact.eyebrow': 'Contacte'
  }
};

const storage = {
  locale: 'msarina.locale',
  theme: 'msarina.theme'
};

const normaliseLocale = (value) => {
  if (!value) return 'en';
  const lower = value.toLowerCase();
  if (lower.startsWith('ja')) return 'ja';
  if (lower.startsWith('zh')) return 'zh-TW';
  if (lower.startsWith('ca')) return 'ca';
  if (lower.startsWith('en')) return 'en';
  return 'en';
};

const getLocalePreference = () => localStorage.getItem(storage.locale) || 'system';
const getThemePreference = () => localStorage.getItem(storage.theme) || 'system';
const resolveLocale = (preference) => preference === 'system' ? normaliseLocale(navigator.language) : (LOCALES.includes(preference) ? preference : 'en');
const resolveTheme = (preference) => {
  if (THEMES.includes(preference)) return preference;
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
  return 'dark';
};

const translate = (locale) => {
  const dict = translations[locale] || translations.en;
  document.documentElement.dataset.locale = locale;
  document.documentElement.lang = locale === 'zh-TW' ? 'zh-Hant' : locale;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    const value = dict[key] || translations.en[key];
    if (value) node.textContent = value;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((node) => {
    const key = node.getAttribute('data-i18n-aria');
    const value = dict[key] || translations.en[key];
    if (value) node.setAttribute('aria-label', value);
  });
};

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
};

const syncControls = () => {
  const localePreference = getLocalePreference();
  const themePreference = getThemePreference();
  document.querySelectorAll('[data-locale-select]').forEach((select) => {
    select.value = localePreference;
  });
  document.querySelectorAll('[data-theme-select]').forEach((select) => {
    select.value = themePreference;
  });
};

const applyPreferences = () => {
  const locale = resolveLocale(getLocalePreference());
  const theme = resolveTheme(getThemePreference());
  translate(locale);
  applyTheme(theme);
  syncControls();
};

document.addEventListener('DOMContentLoaded', () => {
  applyPreferences();

  document.querySelectorAll('[data-locale-select]').forEach((select) => {
    select.addEventListener('change', () => {
      localStorage.setItem(storage.locale, select.value);
      applyPreferences();
    });
  });

  document.querySelectorAll('[data-theme-select]').forEach((select) => {
    select.addEventListener('change', () => {
      localStorage.setItem(storage.theme, select.value);
      applyPreferences();
    });
  });

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
      if (getThemePreference() === 'system') applyPreferences();
    });
  }
});
