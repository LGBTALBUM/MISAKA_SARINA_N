const J='/api/bluesky-rss.json';
const P='https://bsky.app/profile/msarina.bluesky.siacone.art';
const clean=s=>String(s||'').replace(/\r\n/g,'\n').replace(/\n{3,}/g,'\n\n').trim();
const fmt=s=>{const d=new Date(s||'');return s&&!Number.isNaN(d.valueOf())?new Intl.DateTimeFormat(undefined,{year:'numeric',month:'short',day:'2-digit',hour:'2-digit',minute:'2-digit'}).format(d):''};
const body=