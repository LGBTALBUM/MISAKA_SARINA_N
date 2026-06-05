const J='/api/bluesky-rss.json';
const F='https://openrss.org/feed/bsky.app/profile/msarina.bluesky.siacone.art';
const P='https://bsky.app/profile/msarina.bluesky.siacone.art';
const clean=(s='')=>String(s).replace(/\r\n/g,'\n').replace(/\n{3,}/g,'\n\n').trim();
const fmt=(s='')=>{const d=new Date(s);return s&&!Number.isNaN(d.valueOf())?new Intl.DateTimeFormat(undefined,{year:'numeric',month:'short',day:'2-digit',hour:'2-digit',minute:'2-digit'}).format(d):s};
const text=(it)=>{const t=clean(it.title||''),d=clean(it.description||'');return d&&d!==t?d:(t||d||'Bluesky post')};
const card=(it)=>{const a=document.createElement('article');a.className='card bluesky-post-card';a.innerHTML=`<div class="bluesky-post-head"><span>Bluesky</span><time