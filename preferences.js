const LOCALES = ['en', 'ja', 'zh-TW', 'ca'];
const THEMES = ['dark', 'light'];

const translations = {
  en: {
    'nav.home': 'Home', 'nav.music': 'Music', 'nav.works': 'Works', 'nav.blog': 'Blog', 'nav.links': 'Links', 'nav.about': 'About', 'nav.contact': 'Contact',
    'ui.language': 'Language', 'ui.theme': 'Theme', 'ui.system': 'System', 'ui.themeDark': 'Dark', 'ui.themeLight': 'Light', 'ui.skip': 'Skip to content',
    'footer.built': 'Built with Astro. Legacy link-page behavior now lives under',
    'home.eyebrow': 'Baker Siacone / Siacone Art',
    'home.copy': 'Music creator / VOCALOID creator / digital project maker. Welcome to the small world of Baker Siacone / Misaka Sarina.',
    'home.listen': 'Listen / Music', 'home.links': 'Links', 'home.contact': 'Contact', 'home.nightArchive': 'Night archive',
    'home.heroCard': 'I make music, small tools, and personal spaces on the internet.', 'home.featured': 'Featured Release', 'home.viewRelease': 'View release',
    'home.explore': 'Explore', 'home.exploreTitle': 'A small hub for music, notes, and digital traces.',
    'home.tileMusicTitle': 'Music', 'home.tileMusicBody': 'Main releases first, with version entries kept in a secondary section.',
    'home.tileLinksTitle': 'Links', 'home.tileLinksBody': 'The organized replacement for the original Linkyee list.',
    'home.tileWorksTitle': 'Works', 'home.tileWorksBody': 'Future tools, experiments, and technical projects.',
    'home.digitalTrace': 'Digital Trace', 'home.digitalTitle': 'Development traces behind the archive.',
    'home.digitalBody': 'Small tools, web experiments, infrastructure notes, and the repository history that keeps this creator space reproducible.',
    'music.archive': 'Music Archive', 'music.title': 'Releases and sound traces.',
    'music.copy': 'Main releases are shown first. Instrumental, Off Vocal, Vocal Off, karaoke, and other version entries remain available in a lower-priority archive section.',
    'works.archive': 'Works Archive', 'works.title': 'Projects, systems, and experiments.',
    'works.copy': 'A lightweight index for public-facing web tools, archive systems, music infrastructure, and technical experiments around the Misaka Sarina / Siacone Art space.',
    'works.next': 'Next step', 'works.nextTitle': 'Works now have shareable detail pages.',
    'works.nextCopy': 'Each work entry now has a generated detail route. The next expansion can add screenshots, repository links, changelogs, deployment notes, and maintenance history.',
    'works.readNotes': 'Read notes', 'works.details': 'Details', 'works.open': 'Open',
    'blog.archive': 'Digital Garden', 'blog.title': 'Notes, diaries, and maintenance logs.',
    'blog.copy': 'A prepared writing surface for release context, technical notes, production logs, and reproducible site maintenance records.',
    'blog.next': 'Next step', 'blog.nextTitle': 'Blog entries now have shareable detail pages.',
    'blog.nextCopy': 'The current page uses lightweight static data. Later, this can become MDX-powered posts with full body content, references, tags, excerpts, and RSS without changing the first-level information architecture.',
    'blog.viewWorks': 'View works', 'blog.musicArchive': 'Music archive', 'blog.details': 'Details',
    'links.eyebrow': 'Links Archive', 'links.title': 'Everything in one place.',
    'links.copy': 'The original Linkyee function is preserved here as a structured archive of listening platforms, social profiles, support channels, and project entrances.',
    'about.eyebrow': 'About', 'about.title': 'Misaka Sarina aka Baker Siacone',
    'about.copy': 'This site is a dark archive for music, links, notes, and digital traces. It turns the old link page into a creator homepage with a proper release catalogue and room for future projects.',
    'about.identity': 'Identity', 'about.identityTitle': 'Music creator / VOCALOID creator / digital project maker', 'about.identityCopy': 'Siacone Art is the project space. Misaka Sarina is the music identity.',
    'about.music': 'Music', 'about.musicTitle': 'Release archive first.', 'about.musicCopy': 'The music catalogue is synced from VocaDB and arranged so main releases stay visible while versions and instrumentals remain available.',
    'about.web': 'Web', 'about.webTitle': 'A personal space.', 'about.webCopy': 'The site is built with Astro and designed to stay light, static, and portable across GitHub Pages or future production hosting.',
    'about.future': 'Future', 'about.futureTitle': 'Expandable by design.', 'about.futureCopy': 'Works, blog notes, lyrics, credits, and production logs can be added without changing the core information architecture.',
    'contact.eyebrow': 'Contact', 'contact.title': 'Tell me about your project.',
    'contact.copy': 'For music production, collaboration, licensing, release-related questions, or digital project inquiries, use one of the contact routes below.',
    'contact.primaryEmail': 'Primary email', 'contact.writeEmail': 'Write email', 'contact.production': 'Production', 'contact.soundbetter': 'Music production profile',
    'contact.social': 'Social', 'contact.instagram': 'Updates and direct contact', 'contact.archive': 'Archive', 'contact.allLinks': 'All Links', 'contact.allLinksCopy': 'Full external link collection',
    'notFound.eyebrow': '404', 'notFound.title': 'Archive entry not found.',
    'notFound.copy': 'The page you are looking for does not exist in this archive, or the route has moved during the rebuild.',
    'notFound.backHome': 'Back home', 'notFound.musicArchive': 'Music archive', 'notFound.linksArchive': 'Links archive'
  },
  ja: {
    'nav.home': 'ホーム', 'nav.music': '音楽', 'nav.works': '制作物', 'nav.blog': 'ノート', 'nav.links': 'リンク', 'nav.about': '概要', 'nav.contact': '連絡先',
    'ui.language': '言語', 'ui.theme': 'テーマ', 'ui.system': 'システム', 'ui.themeDark': 'ダーク', 'ui.themeLight': 'ライト', 'ui.skip': '本文へ移動',
    'footer.built': 'Astro で構築。旧リンクページの役割は現在',
    'home.eyebrow': 'Baker Siacone / Siacone Art',
    'home.copy': '音楽クリエイター / VOCALOID クリエイター / デジタルプロジェクト制作者。Baker Siacone / Misaka Sarina の小さな世界へようこそ。',
    'home.listen': '聴く / 音楽', 'home.links': 'リンク', 'home.contact': '連絡先', 'home.nightArchive': '夜のアーカイブ',
    'home.heroCard': '音楽、小さなツール、そして個人のインターネット空間を作っています。', 'home.featured': '注目リリース', 'home.viewRelease': 'リリースを見る',
    'home.explore': '探索', 'home.exploreTitle': '音楽、ノート、デジタルな痕跡のための小さなハブ。',
    'home.tileMusicTitle': '音楽', 'home.tileMusicBody': 'メインリリースを優先し、バージョン違いは二次セクションに整理します。',
    'home.tileLinksTitle': 'リンク', 'home.tileLinksBody': '元の Linkyee リストを整理したリンクアーカイブ。',
    'home.tileWorksTitle': '制作物', 'home.tileWorksBody': '将来のツール、実験、技術プロジェクト用の領域。',
    'home.digitalTrace': 'デジタル痕跡', 'home.digitalTitle': 'このアーカイブを支える開発の痕跡。',
    'home.digitalBody': '小さなツール、Web 実験、インフラメモ、そして再現可能な制作空間を支えるリポジトリ履歴。',
    'music.archive': '音楽アーカイブ', 'music.title': 'リリースと音の痕跡。',
    'music.copy': 'メインリリースを先に表示し、Instrumental / Off Vocal / カラオケなどのバージョンは低優先度のアーカイブに残します。',
    'works.archive': '制作物アーカイブ', 'works.title': 'プロジェクト、システム、実験。',
    'works.copy': 'Misaka Sarina / Siacone Art 周辺の Web ツール、アーカイブシステム、音楽インフラ、技術実験の軽量インデックス。',
    'works.next': '次のステップ', 'works.nextTitle': '制作物には共有可能な詳細ページがあります。',
    'works.nextCopy': '各制作物エントリには生成された詳細ルートがあります。次の拡張ではスクリーンショット、リポジトリリンク、変更履歴、デプロイメモ、保守履歴を追加できます。',
    'works.readNotes': 'ノートを読む', 'works.details': '詳細', 'works.open': '開く',
    'blog.archive': 'デジタルガーデン', 'blog.title': 'ノート、日記、メンテナンスログ。',
    'blog.copy': 'リリース背景、技術ノート、制作ログ、再現可能なメンテナンス記録のための執筆スペース。',
    'blog.next': '次のステップ', 'blog.nextTitle': 'ブログエントリには共有可能な詳細ページがあります。',
    'blog.nextCopy': '現在は軽量な静的データを使用しています。将来は本文、参照、タグ、抜粋、RSS を持つ MDX 投稿へ拡張できます。',
    'blog.viewWorks': '制作物を見る', 'blog.musicArchive': '音楽アーカイブ', 'blog.details': '詳細',
    'links.eyebrow': 'リンクアーカイブ', 'links.title': 'すべてを一か所に。',
    'links.copy': '元の Linkyee の役割を、音楽プラットフォーム、SNS、支援、プロジェクト入口の構造化アーカイブとして残しています。',
    'about.eyebrow': '概要', 'about.title': 'Misaka Sarina aka Baker Siacone',
    'about.copy': 'このサイトは音楽、リンク、ノート、デジタルな痕跡のためのダークアーカイブです。古いリンクページを、リリースカタログと将来のプロジェクト領域を持つクリエイターホームページへ変えています。',
    'about.identity': 'アイデンティティ', 'about.identityTitle': '音楽クリエイター / VOCALOID クリエイター / デジタルプロジェクト制作者', 'about.identityCopy': 'Siacone Art はプロジェクト空間。Misaka Sarina は音楽のアイデンティティです。',
    'about.music': '音楽', 'about.musicTitle': 'まずリリースアーカイブ。', 'about.musicCopy': '音楽カタログは VocaDB から同期され、メインリリースを見やすくしつつ、バージョンやインストも参照できるよう整理されています。',
    'about.web': 'Web', 'about.webTitle': '個人の空間。', 'about.webCopy': 'このサイトは Astro で構築され、GitHub Pages や将来の本番ホスティングへ移しやすい軽量な静的サイトとして設計されています。',
    'about.future': '将来', 'about.futureTitle': '拡張を前提に設計。', 'about.futureCopy': 'Works、ブログノート、歌詞、クレジット、制作ログを、コア構造を変えずに追加できます。',
    'contact.eyebrow': '連絡先', 'contact.title': 'プロジェクトについて聞かせてください。',
    'contact.copy': '音楽制作、コラボ、ライセンス、リリース関連、デジタルプロジェクトの相談は以下の連絡経路からどうぞ。',
    'contact.primaryEmail': '主なメール', 'contact.writeEmail': 'メールを書く', 'contact.production': '制作', 'contact.soundbetter': '音楽制作プロフィール',
    'contact.social': 'SNS', 'contact.instagram': '更新と直接連絡', 'contact.archive': 'アーカイブ', 'contact.allLinks': 'すべてのリンク', 'contact.allLinksCopy': '外部リンク一覧',
    'notFound.eyebrow': '404', 'notFound.title': 'アーカイブ項目が見つかりません。',
    'notFound.copy': '探しているページはこのアーカイブに存在しないか、再構築中にルートが移動した可能性があります。',
    'notFound.backHome': 'ホームへ戻る', 'notFound.musicArchive': '音楽アーカイブ', 'notFound.linksArchive': 'リンクアーカイブ'
  },
  'zh-TW': {
    'nav.home': '首頁', 'nav.music': '音樂', 'nav.works': '作品', 'nav.blog': '筆記', 'nav.links': '連結', 'nav.about': '關於', 'nav.contact': '聯絡',
    'ui.language': '語言', 'ui.theme': '主題', 'ui.system': '跟隨系統', 'ui.themeDark': '深色', 'ui.themeLight': '淺色', 'ui.skip': '跳到主要內容',
    'footer.built': '使用 Astro 建構。舊版連結頁功能目前位於',
    'home.eyebrow': 'Baker Siacone / Siacone Art',
    'home.copy': '音樂創作者 / VOCALOID 創作者 / 數位專案製作者。歡迎來到 Baker Siacone / Misaka Sarina 的天南星小世界。',
    'home.listen': '聆聽 / 音樂', 'home.links': '連結', 'home.contact': '聯絡', 'home.nightArchive': '夜間檔案館',
    'home.heroCard': '我製作音樂、小工具，以及屬於自己的網路空間。', 'home.featured': '精選發行', 'home.viewRelease': '查看發行',
    'home.explore': '探索', 'home.exploreTitle': '一個放置音樂、筆記與數位痕跡的小型樞紐。',
    'home.tileMusicTitle': '音樂', 'home.tileMusicBody': '主作品優先展示，版本條目保留在次級區塊。',
    'home.tileLinksTitle': '連結', 'home.tileLinksBody': '原 Linkyee 清單的整理版替代入口。',
    'home.tileWorksTitle': '作品', 'home.tileWorksBody': '未來工具、實驗與技術專案的預留空間。',
    'home.digitalTrace': '數位痕跡', 'home.digitalTitle': '支撐這座檔案館的開發痕跡。',
    'home.digitalBody': '小工具、Web 實驗、基礎設施筆記，以及讓這個創作者空間可重現的 repo 歷史。',
    'music.archive': '音樂檔案館', 'music.title': '發行作品與聲音痕跡。',
    'music.copy': '主作品會優先展示；Instrumental、Off Vocal、Vocal Off、卡拉 OK 等版本條目會保留在低權重檔案區。',
    'works.archive': '作品檔案館', 'works.title': '專案、系統與實驗。',
    'works.copy': 'Misaka Sarina / Siacone Art 周邊公開 Web 工具、檔案系統、音樂基礎設施與技術實驗的輕量索引。',
    'works.next': '下一步', 'works.nextTitle': 'Works 已經有可分享的詳情頁。',
    'works.nextCopy': '每個作品條目現在都有產生出來的詳情路由。下一步可以加入截圖、repo 連結、更新紀錄、部署筆記與維護歷史。',
    'works.readNotes': '閱讀筆記', 'works.details': '詳情', 'works.open': '開啟',
    'blog.archive': '數位花園', 'blog.title': '筆記、日誌與維護紀錄。',
    'blog.copy': '為發行背景、技術筆記、製作紀錄與可重現的網站維護紀錄準備的書寫空間。',
    'blog.next': '下一步', 'blog.nextTitle': 'Blog 條目已經有可分享的詳情頁。',
    'blog.nextCopy': '目前使用輕量靜態資料。未來可以升級成包含完整正文、引用、標籤、摘要與 RSS 的 MDX 文章，而不改變第一層資訊架構。',
    'blog.viewWorks': '查看作品', 'blog.musicArchive': '音樂檔案館', 'blog.details': '詳情',
    'links.eyebrow': '連結檔案館', 'links.title': '所有入口集中在這裡。',
    'links.copy': '原本 Linkyee 的功能被保留下來，並整理成聆聽平台、社群、支持合作與專案入口的結構化檔案館。',
    'about.eyebrow': '關於', 'about.title': 'Misaka Sarina aka Baker Siacone',
    'about.copy': '這個網站是一座放置音樂、連結、筆記與數位痕跡的深色檔案館。它把舊的連結頁升級成具有作品 catalog 與未來專案空間的創作者首頁。',
    'about.identity': '身份', 'about.identityTitle': '音樂創作者 / VOCALOID 創作者 / 數位專案製作者', 'about.identityCopy': 'Siacone Art 是專案空間。Misaka Sarina 是音樂身份。',
    'about.music': '音樂', 'about.musicTitle': '作品檔案優先。', 'about.musicCopy': '音樂 catalog 會從 VocaDB 同步，並整理成主作品優先可見、版本與伴奏仍可查閱的結構。',
    'about.web': 'Web', 'about.webTitle': '一個個人空間。', 'about.webCopy': '本站使用 Astro 建構，設計上保持輕量、靜態，並可在 GitHub Pages 或未來正式主機之間移動。',
    'about.future': '未來', 'about.futureTitle': '為擴充而設計。', 'about.futureCopy': 'Works、Blog 筆記、歌詞、credit 與製作紀錄都可以在不改核心資訊架構的前提下加入。',
    'contact.eyebrow': '聯絡', 'contact.title': '告訴我你的專案。',
    'contact.copy': '如果是音樂製作、合作、授權、發行相關問題，或數位專案洽詢，可以使用以下聯絡入口。',
    'contact.primaryEmail': '主要信箱', 'contact.writeEmail': '寫信', 'contact.production': '製作', 'contact.soundbetter': '音樂製作 profile',
    'contact.social': '社群', 'contact.instagram': '更新與直接聯絡', 'contact.archive': '檔案館', 'contact.allLinks': '所有連結', 'contact.allLinksCopy': '完整外部連結集合',
    'notFound.eyebrow': '404', 'notFound.title': '找不到這個檔案條目。',
    'notFound.copy': '你正在尋找的頁面不存在於這座檔案館，或是在重構過程中路由已經移動。',
    'notFound.backHome': '回首頁', 'notFound.musicArchive': '音樂檔案館', 'notFound.linksArchive': '連結檔案館'
  },
  ca: {
    'nav.home': 'Inici', 'nav.music': 'Música', 'nav.works': 'Projectes', 'nav.blog': 'Notes', 'nav.links': 'Enllaços', 'nav.about': 'Sobre', 'nav.contact': 'Contacte',
    'ui.language': 'Idioma', 'ui.theme': 'Tema', 'ui.system': 'Sistema', 'ui.themeDark': 'Fosc', 'ui.themeLight': 'Clar', 'ui.skip': 'Salta al contingut',
    'footer.built': 'Creat amb Astro. El comportament de l’antiga pàgina d’enllaços ara viu a',
    'home.eyebrow': 'Baker Siacone / Siacone Art',
    'home.copy': 'Creador musical / creador VOCALOID / creador de projectes digitals. Benvingut al petit món de Baker Siacone / Misaka Sarina.',
    'home.listen': 'Escolta / Música', 'home.links': 'Enllaços', 'home.contact': 'Contacte', 'home.nightArchive': 'Arxiu nocturn',
    'home.heroCard': 'Faig música, petites eines i espais personals a internet.', 'home.featured': 'Llançament destacat', 'home.viewRelease': 'Veure llançament',
    'home.explore': 'Explora', 'home.exploreTitle': 'Un petit centre per a música, notes i rastres digitals.',
    'home.tileMusicTitle': 'Música', 'home.tileMusicBody': 'Els llançaments principals primer; les versions queden en una secció secundària.',
    'home.tileLinksTitle': 'Enllaços', 'home.tileLinksBody': 'El reemplaçament organitzat de la llista Linkyee original.',
    'home.tileWorksTitle': 'Projectes', 'home.tileWorksBody': 'Espai reservat per a eines, experiments i projectes tècnics futurs.',
    'home.digitalTrace': 'Rastre digital', 'home.digitalTitle': 'Rastres de desenvolupament darrere l’arxiu.',
    'home.digitalBody': 'Petites eines, experiments web, notes d’infraestructura i l’historial del repositori que fa reproduïble aquest espai creatiu.',
    'music.archive': 'Arxiu musical', 'music.title': 'Llançaments i rastres sonors.',
    'music.copy': 'Els llançaments principals es mostren primer. Instrumentals, Off Vocal, karaoke i altres versions queden en una secció d’arxiu de menor prioritat.',
    'works.archive': 'Arxiu de projectes', 'works.title': 'Projectes, sistemes i experiments.',
    'works.copy': 'Un índex lleuger d’eines web, sistemes d’arxiu, infraestructura musical i experiments tècnics de Misaka Sarina / Siacone Art.',
    'works.next': 'Pas següent', 'works.nextTitle': 'Els projectes ja tenen pàgines de detall compartibles.',
    'works.nextCopy': 'Cada entrada de projecte té una ruta de detall generada. La següent ampliació pot afegir captures, enllaços al repositori, registres de canvis, notes de desplegament i historial de manteniment.',
    'works.readNotes': 'Llegeix notes', 'works.details': 'Detalls', 'works.open': 'Obre',
    'blog.archive': 'Jardí digital', 'blog.title': 'Notes, diaris i registres de manteniment.',
    'blog.copy': 'Un espai d’escriptura per al context dels llançaments, notes tècniques, registres de producció i manteniment reproduïble.',
    'blog.next': 'Pas següent', 'blog.nextTitle': 'Les entrades del blog ja tenen pàgines de detall compartibles.',
    'blog.nextCopy': 'La pàgina actual fa servir dades estàtiques lleugeres. Més endavant pot convertir-se en entrades MDX amb cos complet, referències, etiquetes, extractes i RSS sense canviar l’arquitectura de primer nivell.',
    'blog.viewWorks': 'Veure projectes', 'blog.musicArchive': 'Arxiu musical', 'blog.details': 'Detalls',
    'links.eyebrow': 'Arxiu d’enllaços', 'links.title': 'Tot en un sol lloc.',
    'links.copy': 'La funció original de Linkyee es conserva com un arxiu estructurat de plataformes d’escolta, perfils socials, canals de suport i entrades de projecte.',
    'about.eyebrow': 'Sobre', 'about.title': 'Misaka Sarina aka Baker Siacone',
    'about.copy': 'Aquest lloc és un arxiu fosc per a música, enllaços, notes i rastres digitals. Converteix l’antiga pàgina d’enllaços en una pàgina de creador amb catàleg de llançaments i espai per a projectes futurs.',
    'about.identity': 'Identitat', 'about.identityTitle': 'Creador musical / creador VOCALOID / creador de projectes digitals', 'about.identityCopy': 'Siacone Art és l’espai de projecte. Misaka Sarina és la identitat musical.',
    'about.music': 'Música', 'about.musicTitle': 'Primer, l’arxiu de llançaments.', 'about.musicCopy': 'El catàleg musical se sincronitza des de VocaDB i s’organitza perquè els llançaments principals siguin visibles i les versions i instrumentals continuïn disponibles.',
    'about.web': 'Web', 'about.webTitle': 'Un espai personal.', 'about.webCopy': 'El lloc està fet amb Astro i dissenyat per ser lleuger, estàtic i portable entre GitHub Pages o un futur allotjament de producció.',
    'about.future': 'Futur', 'about.futureTitle': 'Dissenyat per créixer.', 'about.futureCopy': 'Projectes, notes de blog, lletres, crèdits i registres de producció es poden afegir sense canviar l’arquitectura d’informació principal.',
    'contact.eyebrow': 'Contacte', 'contact.title': 'Explica’m el teu projecte.',
    'contact.copy': 'Per a producció musical, col·laboracions, llicències, preguntes sobre llançaments o projectes digitals, fes servir una de les vies de contacte següents.',
    'contact.primaryEmail': 'Correu principal', 'contact.writeEmail': 'Escriu un correu', 'contact.production': 'Producció', 'contact.soundbetter': 'Perfil de producció musical',
    'contact.social': 'Social', 'contact.instagram': 'Actualitzacions i contacte directe', 'contact.archive': 'Arxiu', 'contact.allLinks': 'Tots els enllaços', 'contact.allLinksCopy': 'Col·lecció completa d’enllaços externs',
    'notFound.eyebrow': '404', 'notFound.title': 'Entrada d’arxiu no trobada.',
    'notFound.copy': 'La pàgina que busques no existeix en aquest arxiu, o la ruta s’ha mogut durant la reconstrucció.',
    'notFound.backHome': 'Torna a l’inici', 'notFound.musicArchive': 'Arxiu musical', 'notFound.linksArchive': 'Arxiu d’enllaços'
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
