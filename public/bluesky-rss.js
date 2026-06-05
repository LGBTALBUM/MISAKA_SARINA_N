const API='/api/bluesky-rss.json';
const PROFILE='https://bsky.app/profile/msarina.bluesky.siacone.art';
function clean(v){return String(v||'').replace(/\r\n/g,'\n').replace(/\n{3,}/g,'\n\n').trim()}
function fmt(v){if(!v)return'';const d=new Date(v);return Number.isNaN(d.valueOf())?v:new Intl.DateTimeFormat(undefined,{year:'numeric',month:'short',day:'2-digit',hour:'2-digit',minute:'2-digit'}).format(d)}
function text