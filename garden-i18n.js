const GARDEN_I18N_LOCALES = ['en', 'ja', 'zh-TW', 'ca'];

const gardenTranslations = {
  en: {
    'garden.eyebrow': 'Digital Garden',
    'garden.title': 'A living map for notes and traces.',
    'garden.copy': 'The garden collects drafts, release context, technical notes, business notes, and maintenance logs before they become a polished archive.',
    'garden.openBlog': 'Open note archive',
    'garden.totalNotes': 'Total notes',
    'garden.laneRelease': 'Release diary',
    'garden.laneReleaseBody': 'Song background, credits, lyric context, and post-release reflections.',
    'garden.laneTechnical': 'Technical note',
    'garden.laneTechnicalBody': 'Implementation notes, data sync, deployment behavior, and reproducible build details.',
    'garden.laneSite': 'Site log',
    'garden.laneSiteBody': 'Design decisions, maintenance history, structure changes, and launch notes.',
    'garden.laneMusic': 'Music note',
    'garden.laneMusicBody': 'Arrangement, vocal direction, production choices, and creative process notes.',
    'garden.laneBusiness': 'Business note',
    'garden.laneBusinessBody': 'Collaboration briefs, scope decisions, project routes, and practical inquiry context.',
    'garden.laneField': 'Field note',
    'garden.laneFieldBody': 'Loose observations about small web systems, infrastructure, and creator identity.',
    'garden.latestSeeds': 'Latest seeds',
    'garden.latestTitle': 'Recent notes waiting to grow.',
    'garden.latestCopy': 'Drafts and planned notes are treated as living entries: useful now, but allowed to be revised later.',
    'garden.loop': 'Maintenance loop',
    'garden.loopTitle': 'How the garden stays useful.',
    'garden.capture': 'Capture',
    'garden.captureBody': 'Keep unfinished context instead of waiting for perfect articles.',
    'garden.connect': 'Connect',
    'garden.connectBody': 'Link notes back to releases, works, timelines, and collaboration routes.',
    'garden.review': 'Review',
    'garden.reviewBody': 'Return to drafts after releases, site changes, and deployment updates.',
    'garden.routeBlog': 'All notes',
    'garden.routeBlogBody': 'Browse the complete note archive.',
    'garden.routeWorks': 'Project context',
    'garden.routeWorksBody': 'Connect notes to systems and projects.',
    'garden.routeTimeline': 'Release history',
    'garden.routeTimelineBody': 'Move from notes back to music traces.',
    'home.quickGardenLabel': 'Garden',
    'home.quickGardenBody': 'Living notes map',
    'home.tileGardenBody': 'A living map for drafts, notes, release context, and maintenance traces.',
    'status.published': 'Published',
    'blog.openGarden': 'Open garden',
    'blog.gardenMap': 'Garden map'
  },
  ja: {
    'garden.eyebrow': 'デジタルガーデン',
    'garden.title': 'ノートと痕跡のための生きた地図。',
    'garden.copy': 'ガーデンは、下書き、リリース文脈、技術ノート、ビジネスノート、保守ログを、整ったアーカイブになる前の段階から集めます。',
    'garden.openBlog': 'ノートアーカイブを開く',
    'garden.totalNotes': 'ノート総数',
    'garden.laneRelease': 'リリース日記',
    'garden.laneReleaseBody': '曲の背景、クレジット、歌詞文脈、公開後の振り返り。',
    'garden.laneTechnical': '技術ノート',
    'garden.laneTechnicalBody': '実装メモ、データ同期、デプロイ挙動、再現可能なビルド詳細。',
    'garden.laneSite': 'サイトログ',
    'garden.laneSiteBody': 'デザイン判断、保守履歴、構造変更、公開メモ。',
    'garden.laneMusic': '音楽ノート',
    'garden.laneMusicBody': '編曲、ボーカル方針、制作上の選択、創作過程のメモ。',
    'garden.laneBusiness': 'ビジネスノート',
    'garden.laneBusinessBody': '共同制作ブリーフ、範囲判断、プロジェクト経路、実務的な問い合わせ文脈。',
    'garden.laneField': 'フィールドノート',
    'garden.laneFieldBody': '小さな Web システム、インフラ、クリエイターアイデンティティについての観察。',
    'garden.latestSeeds': '新しい種',
    'garden.latestTitle': 'これから育つ最近のノート。',
    'garden.latestCopy': '下書きや予定ノートは、生きた項目として扱います。今役に立ち、あとから直せます。',
    'garden.loop': '保守ループ',
    'garden.loopTitle': 'ガーデンを役立つ状態に保つ方法。',
    'garden.capture': '記録する',
    'garden.captureBody': '完璧な記事を待たず、未完成の文脈を残します。',
    'garden.connect': 'つなげる',
    'garden.connectBody': 'ノートをリリース、制作物、年表、共同制作ルートへ戻します。',
    'garden.review': '見直す',
    'garden.reviewBody': 'リリース、サイト変更、デプロイ更新の後で下書きに戻ります。',
    'garden.routeBlog': 'すべてのノート',
    'garden.routeBlogBody': '完全なノートアーカイブを見る。',
    'garden.routeWorks': 'プロジェクト文脈',
    'garden.routeWorksBody': 'ノートをシステムやプロジェクトに接続します。',
    'garden.routeTimeline': 'リリース履歴',
    'garden.routeTimelineBody': 'ノートから音楽の痕跡へ戻ります。',
    'home.quickGardenLabel': 'ガーデン',
    'home.quickGardenBody': '生きたノート地図',
    'home.tileGardenBody': '下書き、ノート、リリース文脈、保守の痕跡のための生きた地図。',
    'status.published': '公開済み',
    'blog.openGarden': 'ガーデンを開く',
    'blog.gardenMap': 'ガーデン地図'
  },
  'zh-TW': {
    'garden.eyebrow': '數位花園',
    'garden.title': '筆記與痕跡的生長地圖。',
    'garden.copy': '數位花園會收集草稿、發行脈絡、技術筆記、商務筆記與維護紀錄，讓它們在成為完整檔案前也能被閱讀與連結。',
    'garden.openBlog': '打開筆記檔案',
    'garden.totalNotes': '筆記總數',
    'garden.laneRelease': '發行日記',
    'garden.laneReleaseBody': '歌曲背景、credit、歌詞脈絡與發行後回顧。',
    'garden.laneTechnical': '技術筆記',
    'garden.laneTechnicalBody': '實作筆記、資料同步、部署行為與可重現 build 細節。',
    'garden.laneSite': '站點紀錄',
    'garden.laneSiteBody': '設計決策、維護歷史、結構變更與上線紀錄。',
    'garden.laneMusic': '音樂筆記',
    'garden.laneMusicBody': '編曲、歌唱方向、製作選擇與創作流程筆記。',
    'garden.laneBusiness': '商務筆記',
    'garden.laneBusinessBody': '合作 brief、範圍判斷、專案路徑與實際詢問脈絡。',
    'garden.laneField': '現場筆記',
    'garden.laneFieldBody': '關於小型 Web 系統、基礎設施與創作者身分的鬆散觀察。',
    'garden.latestSeeds': '最新種子',
    'garden.latestTitle': '等待生長的近期筆記。',
    'garden.latestCopy': '草稿與計畫中的筆記會被視為活的條目：現在有用，也允許之後修訂。',
    'garden.loop': '維護循環',
    'garden.loopTitle': '讓花園持續有用的方法。',
    'garden.capture': '捕捉',
    'garden.captureBody': '不要等到文章完美才留下上下文。',
    'garden.connect': '連結',
    'garden.connectBody': '把筆記連回發行、作品、時間線與合作路徑。',
    'garden.review': '回看',
    'garden.reviewBody': '在發行、站點變更與部署更新後回到草稿。',
    'garden.routeBlog': '全部筆記',
    'garden.routeBlogBody': '瀏覽完整筆記檔案。',
    'garden.routeWorks': '專案脈絡',
    'garden.routeWorksBody': '把筆記連到系統與專案。',
    'garden.routeTimeline': '發行歷史',
    'garden.routeTimelineBody': '從筆記回到音樂痕跡。',
    'home.quickGardenLabel': '花園',
    'home.quickGardenBody': '生長中的筆記地圖',
    'home.tileGardenBody': '草稿、筆記、發行脈絡與維護痕跡的生長地圖。',
    'status.published': '已發布',
    'blog.openGarden': '打開花園',
    'blog.gardenMap': '花園地圖'
  },
  ca: {
    'garden.eyebrow': 'Jardí digital',
    'garden.title': 'Un mapa viu de notes i rastres.',
    'garden.copy': 'El jardí recull esborranys, context de llançaments, notes tècniques, notes de negoci i registres de manteniment abans que esdevinguin un arxiu polit.',
    'garden.openBlog': 'Obre l’arxiu de notes',
    'garden.totalNotes': 'Notes totals',
    'garden.laneRelease': 'Diari de llançament',
    'garden.laneReleaseBody': 'Context de cançons, crèdits, lletres i reflexions posteriors.',
    'garden.laneTechnical': 'Nota tècnica',
    'garden.laneTechnicalBody': 'Notes d’implementació, sincronització de dades, desplegament i detalls reproduïbles.',
    'garden.laneSite': 'Registre del lloc',
    'garden.laneSiteBody': 'Decisions de disseny, manteniment, canvis d’estructura i notes de llançament.',
    'garden.laneMusic': 'Nota musical',
    'garden.laneMusicBody': 'Arranjament, direcció vocal, decisions de producció i procés creatiu.',
    'garden.laneBusiness': 'Nota de negoci',
    'garden.laneBusinessBody': 'Briefs de col·laboració, decisions d’abast, rutes de projecte i context pràctic.',
    'garden.laneField': 'Nota de camp',
    'garden.laneFieldBody': 'Observacions sobre petits sistemes web, infraestructura i identitat de creador.',
    'garden.latestSeeds': 'Llavors recents',
    'garden.latestTitle': 'Notes recents esperant créixer.',
    'garden.latestCopy': 'Els esborranys i notes planificades són entrades vives: útils ara i revisables després.',
    'garden.loop': 'Bucle de manteniment',
    'garden.loopTitle': 'Com el jardí continua sent útil.',
    'garden.capture': 'Captura',
    'garden.captureBody': 'Conserva context inacabat en lloc d’esperar articles perfectes.',
    'garden.connect': 'Connecta',
    'garden.connectBody': 'Enllaça notes amb llançaments, treballs, cronologies i rutes de col·laboració.',
    'garden.review': 'Revisa',
    'garden.reviewBody': 'Torna als esborranys després de llançaments, canvis del lloc i desplegaments.',
    'garden.routeBlog': 'Totes les notes',
    'garden.routeBlogBody': 'Explora l’arxiu complet de notes.',
    'garden.routeWorks': 'Context de projecte',
    'garden.routeWorksBody': 'Connecta notes amb sistemes i projectes.',
    'garden.routeTimeline': 'Historial de llançaments',
    'garden.routeTimelineBody': 'Torna de les notes als rastres musicals.',
    'home.quickGardenLabel': 'Jardí',
    'home.quickGardenBody': 'Mapa viu de notes',
    'home.tileGardenBody': 'Un mapa viu d’esborranys, notes, context de llançament i manteniment.',
    'status.published': 'Publicat',
    'blog.openGarden': 'Obre el jardí',
    'blog.gardenMap': 'Mapa del jardí'
  }
};

const resolveGardenLocale = () => {
  const stored = localStorage.getItem('msarina.locale') || 'system';
  if (stored !== 'system' && GARDEN_I18N_LOCALES.includes(stored)) return stored;
  const browser = navigator.language || 'en';
  if (browser.toLowerCase().startsWith('ja')) return 'ja';
  if (browser.toLowerCase().startsWith('zh')) return 'zh-TW';
  if (browser.toLowerCase().startsWith('ca')) return 'ca';
  return 'en';
};

const applyGardenI18n = () => {
  const locale = resolveGardenLocale();
  const dict = gardenTranslations[locale] || gardenTranslations.en;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    const value = dict[key] || gardenTranslations.en[key];
    if (value) node.textContent = value;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  applyGardenI18n();
  document.querySelectorAll('[data-locale-select]').forEach((select) => {
    select.addEventListener('change', () => window.setTimeout(applyGardenI18n, 0));
  });
});
