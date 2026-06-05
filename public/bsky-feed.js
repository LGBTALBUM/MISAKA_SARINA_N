const A='/api/bluesky-rss.json';
const P='https://bsky.app/profile/msarina.bluesky.siacone.art';
const q=(s)=>document.querySelector(s);
const esc=(s)=>String(s||'').replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const fmt=(s)=>{if(!s)return'';const d=new Date(s);return isNaN(d)?s:d.toLocaleString()};
function card(x){
  const t=esc((x.description||x.title||'Bluesky post').trim());
  const u=esc(x.link||P);
  const d=esc(fmt(x.pubDate));
  return `<article class="bsky-card"><div class="bsky-top"><span>Bluesky</span><time>${d}</time></div><p>${t}</p><a class="button" target="_blank" rel="noreferrer" href="${u}">Open post</a></article>`;
}
async function main(){
  const root=q('[data-bluesky-feed]');
  const st=q('[data-bluesky-status]');
  if(!root)return;
  try{
    const r=await fetch(A,{cache:'no-store',headers:{accept:'application/json'}});
    const j=await r.json();
    const items=Array.isArray(j.items)?j.items:[];
    if(!items.length)throw new Error('empty feed');
    root.innerHTML=items.slice(0,12).map(card).join('');
    if(st)st.textContent=`${items.length} items loaded from Worker JSON.`;
  }catch(e){
    if(st)st.textContent='Feed fallback mode: '+(e&&e.message?e.message:e);
    root.innerHTML=`<article class="bsky-card"><p>Feed could not be rendered. Open the source profile instead.</p><a class="button" target="_blank" rel="noreferrer" href="${P}">Open Bluesky profile</a></article>`;
  }
}
main();
