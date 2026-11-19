
const dishes=[{"category":"formules","name":"Formule Perso","price":"11,90 €","description":"½ poulet braisé, 1 accompagnement, 1 sauce verte et 1 boisson 33 cl.","note":""},{"category":"formules","name":"Formule Duo","price":"21,90 €","description":"1 poulet braisé, 2 accompagnements, 2 sauces vertes et 2 boissons 33 cl.","note":""},{"category":"formules","name":"Formule Family","price":"34,00 €","description":"2 poulets braisés, 2 accompagnements XL, 4 sauces vertes et 1 bouteille 1 L.","note":""},{"category":"burgers","name":"Hamburger poulet — menu","price":"11,90 €","description":"Avec frites et boisson 33 cl.","note":""},{"category":"burgers","name":"Hamburger poulet — seul","price":"8,90 €","description":"Poulet mariné, cheddar, laitue, cornichons, tomate, oignon rouge, sauce verte.","note":""},{"category":"burgers","name":"Hamburger steak — menu","price":"11,90 €","description":"Avec frites et boisson 33 cl.","note":""},{"category":"burgers","name":"Hamburger steak — seul","price":"9,50 €","description":"Steak, cheddar fondu, laitue, cornichons, tomate, oignon rouge, sauce verte.","note":""},{"category":"burgers","name":"Supplément œuf","price":"1,00 €","description":"Pour les burgers.","note":""},{"category":"sandwichs","name":"Sandwich poulet","price":"7,90 €","description":"Poulet mariné, poivron, laitue, tomate, oignon rouge, cheddar, sauce verte.","note":""},{"category":"sandwichs","name":"Sandwich bœuf","price":"8,90 €","description":"Bœuf, poivron, laitue, tomate, oignon rouge, cheddar, sauce verte.","note":""},{"category":"sandwichs","name":"Pastels ×6","price":"5,90 €","description":"Petits chaussons farcis, par six.","note":""},{"category":"sandwichs","name":"Poké Tieb","price":"12,90 €","description":"Poké Tieb.","note":""},{"category":"plats","name":"Tagliatelles au saumon","price":"9,50 €","description":"Saumon, crème fluide et aneth.","note":""},{"category":"plats","name":"Tagliatelles fermières","price":"7,90 €","description":"Poulet, crème fluide.","note":""},{"category":"plats","name":"Tagliatelles carbonara","price":"9,50 €","description":"Lardons de dinde, crème fluide, avec ou sans œuf.","note":""},{"category":"plats","name":"Escalope façon saltimbocca","price":"12,00 €","description":"Escalope de dinde à la façon saltimbocca.","note":""},{"category":"plats","name":"Escalope chèvre miel","price":"12,00 €","description":"Escalope de dinde, crème fraîche, chèvre et miel.","note":""},{"category":"plats","name":"Escalope à la moutarde","price":"12,00 €","description":"Escalope de dinde, crème fraîche et moutarde de Dijon.","note":""},{"category":"salades","name":"Salade Océane","price":"7,90 €","description":"Salade, saumon fumé, emmental, tomate.","note":""},{"category":"salades","name":"Salade du Chef","price":"7,50 €","description":"Salade, tomate, maïs, escalope de dinde, emmental.","note":""},{"category":"salades","name":"Salade Paysanne","price":"7,00 €","description":"Salade, tomate, poulet, maïs, emmental.","note":""},{"category":"texmex","name":"Wings ×8","price":"5,90 €","description":"","note":""},{"category":"texmex","name":"Wings ×16","price":"10,90 €","description":"","note":""},{"category":"texmex","name":"Pilons ×4","price":"6,90 €","description":"","note":""},{"category":"texmex","name":"Pilons ×8","price":"11,90 €","description":"","note":""},{"category":"texmex","name":"Tenders ×4","price":"5,90 €","description":"","note":""},{"category":"texmex","name":"Tenders ×8","price":"10,90 €","description":"","note":""},{"category":"texmex","name":"Menu enfants","price":"6,00 €","description":"Menu enfants : cheese ou tenders, frites et Capri-Sun.","note":""},{"category":"accompagnements","name":"Allocos — normal","price":"4,50 €","description":"","note":""},{"category":"accompagnements","name":"Allocos — XL","price":"5,90 €","description":"","note":""},{"category":"accompagnements","name":"Pommes de terre sautées — normal","price":"3,90 €","description":"","note":""},{"category":"accompagnements","name":"Pommes de terre sautées — XL","price":"5,50 €","description":"","note":""},{"category":"accompagnements","name":"Riz blanc — normal","price":"3,00 €","description":"","note":""},{"category":"accompagnements","name":"Riz blanc — XL","price":"5,50 €","description":"","note":""},{"category":"accompagnements","name":"Riz tieb — normal","price":"4,50 €","description":"","note":""},{"category":"accompagnements","name":"Riz tieb — XL","price":"5,90 €","description":"","note":""},{"category":"accompagnements","name":"Frites — normal","price":"3,00 €","description":"","note":""},{"category":"accompagnements","name":"Frites — XL","price":"5,50 €","description":"","note":""},{"category":"accompagnements","name":"Frites de patate douce — normal","price":"4,50 €","description":"","note":""},{"category":"accompagnements","name":"Frites de patate douce — XL","price":"5,90 €","description":"","note":""},{"category":"accompagnements","name":"Haricots verts — normal","price":"3,00 €","description":"","note":""},{"category":"accompagnements","name":"Haricots verts — XL","price":"5,50 €","description":"","note":""},{"category":"accompagnements","name":"Potatoes — normal","price":"3,90 €","description":"","note":""},{"category":"accompagnements","name":"Potatoes — XL","price":"5,90 €","description":"","note":""},{"category":"desserts","name":"Tarte aux pommes","price":"2,50 €","description":"","note":""},{"category":"desserts","name":"Tarte aux poires","price":"2,50 €","description":"","note":""},{"category":"desserts","name":"Tarte aux daims","price":"2,50 €","description":"","note":""},{"category":"desserts","name":"Tiramisu au choix","price":"2,50 €","description":"","note":""},{"category":"desserts","name":"Glace Häagen-Dazs 100 ml","price":"3,00 €","description":"","note":""},{"category":"desserts","name":"Glace Häagen-Dazs 500 ml","price":"6,50 €","description":"","note":""},{"category":"boissons","name":"Boisson 33 cl","price":"1,80 €","description":"","note":""},{"category":"boissons","name":"Boisson 1,25 L","price":"3,00 €","description":"","note":""},{"category":"boissons","name":"Boisson 2 L","price":"3,50 €","description":"","note":""},{"category":"boissons","name":"Bissap 33 cl","price":"3,50 €","description":"","note":""},{"category":"boissons","name":"Jus de gingembre 33 cl","price":"3,50 €","description":"","note":""}];const STORAGE_KEY='osaveurs_catalog_v6';let CATEGORIES={formules:'Formules braisées',burgers:'Burgers',sandwichs:'Sandwichs',plats:'Pâtes & escalopes',salades:'Salades',texmex:'Tex-Mex',accompagnements:'Accompagnements',desserts:'Desserts',boissons:'Boissons'};
const DEFAULT_CATEGORIES={...CATEGORIES};
function validateCategories(raw){
 if(!Array.isArray(raw)||raw.length>60)throw Error('Catégories invalides');
 const used=new Set();
 return raw.map(c=>{
  const id=String(c.id||'').trim(),name=String(c.name||'').trim();
  if(!/^[a-z0-9-]{2,40}$/.test(id)||used.has(id)||!name||name.length>65)throw Error('Identifiant ou nom de catégorie invalide / en doublon');
  used.add(id);return {id,name,visible:c.visible!==false};
 });
}
function categoryData(){return Object.entries(CATEGORIES).map(([id,name])=>({id,name,visible:!hiddenCategories.has(id)}))}
let hiddenCategories=new Set();
function applyCategories(raw){
 const cats=validateCategories(raw);
 CATEGORIES=Object.fromEntries(cats.map(c=>[c.id,c.name]));
 hiddenCategories=new Set(cats.filter(c=>!c.visible).map(c=>c.id));
 if(!CATEGORIES[activeCategory]||hiddenCategories.has(activeCategory))activeCategory='all';
}
function buildFilters(){
 const host=document.querySelector('.filters');
 host.innerHTML='<button class="filter'+(activeCategory==='all'?' active':'')+'" data-filter="all" aria-pressed="'+(activeCategory==='all')+'">Toute la carte</button>'+categoryData().filter(c=>c.visible).map(c=>'<button class="filter'+(activeCategory===c.id?' active':'')+'" data-filter="'+escapeHTML(c.id)+'" aria-pressed="'+(activeCategory===c.id)+'">'+escapeHTML(c.name)+'</button>').join('');
}
const escapeHTML=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const isSafeImage=url=>typeof url==='string'&&/^https:\/\/[^\s]+$/i.test(url)&&url.length<1001;
function normalize(d,i){return {id:String(d.id||('dish-'+i)),category:CATEGORIES[d.category]?d.category:(Object.keys(CATEGORIES)[0]||'plats'),name:String(d.name||'').slice(0,100),price:String(d.price||'À confirmer').slice(0,30),description:String(d.description||'').slice(0,500),image:isSafeImage(d.image)?d.image:'',visible:d.visible!==false};}
let catalog=dishes.map(normalize);
let fileHandle=null;
let dirty=false;
const MENU_PATH='/api/menu';
async function loadMenu(){
  try{
    const response=await fetch(MENU_PATH,{cache:'no-store'});
    if(!response.ok)throw new Error('HTTP '+response.status);
    const data=await response.json();
    if(!Array.isArray(data.dishes)||!data.dishes.every(x=>x&&typeof x.name==='string'))throw new Error('Carte invalide');
    if(Array.isArray(data.categories))applyCategories(data.categories);else applyCategories(Object.entries(DEFAULT_CATEGORIES).map(([id,name])=>({id,name,visible:true})));catalog=data.dishes.map(normalize);
    setStatus('Carte chargée depuis '+MENU_PATH+'.');
  }catch(err){
    setStatus('Impossible de charger menu.json. Vérifiez la présence du fichier sur votre hébergement.');
  }
  buildFilters();render();updateCart();
  if(location.hash.startsWith('#plat='))openDetail(safeDishId(location.hash.slice(6)),false);
}
function setStatus(message){const el=document.getElementById('admin-file-status');if(el)el.textContent=message}
function markDirty(){dirty=true;setStatus('Modifications non publiées. Cliquez sur « Enregistrer ».')}
async function apiSave(path,data){
 const response=await fetch(path,{method:'PUT',credentials:'same-origin',headers:{'content-type':'application/json'},body:JSON.stringify(data)});
 const result=await response.json().catch(()=>({}));if(!response.ok)throw Error(result.error||'Enregistrement impossible');return result;
}
async function saveMenu(){
 try{await apiSave('/api/menu',{version:2,restaurant:'O Saveurs Braisees',categories:categoryData(),dishes:catalog});dirty=false;setStatus('Carte enregistrée sur Cloudflare. La mise à jour peut prendre un peu de temps à apparaître partout.');return true;}
 catch(err){setStatus('Erreur : '+err.message);return false;}
}

let activeCategory='all',editId=null;
function persist(){markDirty()}
function render(cat=activeCategory){activeCategory=cat;const menu=document.getElementById('menu-grid');menu.innerHTML=catalog.filter(d=>d.visible&&!hiddenCategories.has(d.category)&&(cat==='all'||d.category===cat)).map(d=>`<article class="dish" id="plat-${escapeHTML(d.id)}">${d.image?`<img class="dish-photo" src="${escapeHTML(d.image)}" loading="lazy" decoding="async" alt="${escapeHTML(d.name)}">`:''}<div class="eyebrow">${escapeHTML(CATEGORIES[d.category]||d.category)}</div><div class="top"><h3>${escapeHTML(d.name)}</h3></div><p>${escapeHTML(d.description)}</p><div class="top"><span class="price">${escapeHTML(d.price)}</span></div><button type="button" class="dish-more" data-detail-id="${escapeHTML(d.id)}" aria-label="Voir la fiche de ${escapeHTML(d.name)}">Découvrir le plat ↗</button><button type="button" class="add-dish" data-add-id="${escapeHTML(d.id)}" aria-label="Ajouter ${escapeHTML(d.name)} à ma commande">+ Ajouter à ma commande</button></article>`).join('')||'<p>Aucun plat disponible dans cette catégorie.</p>'}
document.querySelector('.filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;activeCategory=b.dataset.filter;buildFilters();render();});
buildFilters();
const $=id=>document.getElementById(id);const shell=$('admin-shell');let adminAuthenticated=false;
async function openAdmin(){try{const r=await fetch('/api/auth/session',{credentials:'same-origin'});const v=await r.json();adminAuthenticated=v.authenticated===true}catch(e){adminAuthenticated=false}shell.hidden=false;syncPageScroll();$('admin-login').hidden=adminAuthenticated;$('admin-panel').hidden=!adminAuthenticated;if(adminAuthenticated){drawAdmin();$('admin-search').focus()}else $('admin-user').focus()}
function closeAdmin(){shell.hidden=true;$('admin-modal').hidden=true;syncPageScroll();$('admin-open').focus()}
$('admin-open').addEventListener('click',openAdmin);$('admin-cancel').addEventListener('click',closeAdmin);$('admin-close').addEventListener('click',closeAdmin);
$('admin-login-form').addEventListener('submit',async e=>{
 e.preventDefault();const button=$('admin-login-form').querySelector('[type=submit]');button.disabled=true;
 try{const response=await fetch('/api/auth/login',{method:'POST',credentials:'same-origin',headers:{'content-type':'application/json'},body:JSON.stringify({username:$('admin-user').value.trim(),password:$('admin-pass').value})});const result=await response.json();if(!response.ok)throw Error(result.error||'Connexion impossible');adminAuthenticated=true;$('admin-login').hidden=true;$('admin-panel').hidden=false;$('admin-pass').value='';$('admin-error').textContent='';drawAdmin();}
 catch(err){$('admin-error').textContent=err.message}finally{button.disabled=false}
});
$('admin-logout').addEventListener('click',async()=>{try{await fetch('/api/auth/logout',{method:'POST',credentials:'same-origin'})}catch(e){}adminAuthenticated=false;$('admin-panel').hidden=true;$('admin-login').hidden=false;$('admin-user').value='';$('admin-pass').value='';$('admin-user').focus()});
fetch('/api/auth/session',{credentials:'same-origin'}).then(r=>r.json()).then(v=>{adminAuthenticated=v.authenticated===true}).catch(()=>{});

function drawAdmin(){if(!adminAuthenticated)return;const cats=categoryData();$('stat-total').textContent=catalog.length;$('stat-visible').textContent=catalog.filter(d=>d.visible).length;$('stat-categories').textContent=cats.length;const selected=$('admin-category').value;$('admin-category').innerHTML='<option value="all">Toutes les catégories</option>'+Object.entries(CATEGORIES).map(([k,v])=>`<option value="${escapeHTML(k)}">${escapeHTML(v)}</option>`).join('');$('admin-category').value=selected&&[...$('admin-category').options].some(x=>x.value===selected)?selected:'all';const q=$('admin-search').value.trim().toLocaleLowerCase('fr');const c=$('admin-category').value;const rows=catalog.filter(d=>(c==='all'||d.category===c)&&[d.name,d.description,d.category].join(' ').toLocaleLowerCase('fr').includes(q));$('admin-rows').innerHTML=rows.map(d=>`<tr><td><strong>${escapeHTML(d.name)}</strong><small>${escapeHTML(d.description.slice(0,90))}</small></td><td>${escapeHTML(CATEGORIES[d.category])}</td><td><strong>${escapeHTML(d.price)}</strong></td><td class="${d.visible?'':'off'}">${d.visible?'Visible':'Masqué'}</td><td><div class="row-actions"><button class="a-btn secondary" data-action="edit" data-id="${escapeHTML(d.id)}">Modifier</button><button class="a-btn secondary" data-action="toggle" data-id="${escapeHTML(d.id)}">${d.visible?'Masquer':'Afficher'}</button><button class="a-btn danger" data-action="delete" data-id="${escapeHTML(d.id)}">Supprimer</button></div></td></tr>`).join('')||'<tr><td colspan="5">Aucun plat trouvé.</td></tr>';$('admin-count').textContent=`${rows.length} plat(s) affiché(s) dans le tableau`}
$('admin-search').addEventListener('input',drawAdmin);$('admin-category').addEventListener('change',drawAdmin);
$('admin-rows').addEventListener('click',e=>{if(!adminAuthenticated)return;const btn=e.target.closest('button[data-action]');if(!btn)return;const d=catalog.find(x=>x.id===btn.dataset.id);if(!d)return;if(btn.dataset.action==='edit')openEditor(d);if(btn.dataset.action==='toggle'){d.visible=!d.visible;persist();render();drawAdmin()}if(btn.dataset.action==='delete'&&confirm(`Supprimer définitivement « ${d.name} » de la carte ?`)){catalog=catalog.filter(x=>x.id!==d.id);persist();render();drawAdmin()}});
function openEditor(d){editId=d?.id||null;$('editor-title').textContent=d?'Modifier le plat':'Ajouter un plat';$('dish-name').value=d?.name||'';$('dish-category').innerHTML=Object.entries(CATEGORIES).map(([k,v])=>`<option value="${escapeHTML(k)}">${escapeHTML(v)}</option>`).join('');$('dish-category').value=d?.category||Object.keys(CATEGORIES)[0];$('dish-price').value=d?.price||'';$('dish-description').value=d?.description||'';$('dish-image').value=d?.image||'';$('dish-visible').checked=d?.visible!==false;$('admin-modal').hidden=false;$('dish-name').focus()}
$('admin-add').addEventListener('click',()=>openEditor(null));$('editor-cancel').addEventListener('click',()=>{$('admin-modal').hidden=true;$('admin-add').focus()});
$('admin-editor').addEventListener('submit',e=>{e.preventDefault();if(!adminAuthenticated)return;const image=$('dish-image').value.trim();if(image&&!isSafeImage(image)){alert('L’image doit utiliser une URL HTTPS valide.');return}const next={id:editId||('custom-'+Date.now()+'-'+Math.random().toString(36).slice(2)),name:$('dish-name').value.trim(),category:$('dish-category').value,price:$('dish-price').value.trim(),description:$('dish-description').value.trim(),image,visible:$('dish-visible').checked};if(!next.name||!next.price)return;const i=catalog.findIndex(d=>d.id===editId);if(i>=0)catalog[i]=next;else catalog.unshift(next);persist();render();drawAdmin();$('admin-modal').hidden=true;$('admin-add').focus()});
$('admin-export').addEventListener('click',()=>{const tab=$('admin-panel').dataset.currentTab;if(tab==='horaires'||tab==='annonces')$('settings-export').click();else saveMenu()});
$('admin-import').addEventListener('click',()=>{const tab=$('admin-panel').dataset.currentTab;if(tab==='horaires'||tab==='annonces')$('settings-import').click();else $('admin-import-file').click()});$('admin-import-file').addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;if(file.size>2e6){alert('Fichier trop volumineux.');return}try{const data=JSON.parse(await file.text());if(!Array.isArray(data.dishes)||data.dishes.length>1000||!data.dishes.every(d=>d&&typeof d.name==='string'&&d.name.trim()&&typeof d.category==='string'))throw Error('Format invalide');if(!confirm(`Remplacer la carte locale par ${data.dishes.length} plats ? Exportez votre carte actuelle avant de continuer.`))return;if(Array.isArray(data.categories))applyCategories(data.categories);else applyCategories(Object.entries(DEFAULT_CATEGORIES).map(([id,name])=>({id,name,visible:true})));catalog=data.dishes.map(normalize);persist();buildFilters();render();drawAdmin();drawCategories();setStatus('Carte importée. Cliquez sur « Enregistrer » pour la publier.');alert('Carte chargée. Cliquez sur « Enregistrer » pour la publier.')}catch(err){alert('Import impossible : fichier JSON de carte invalide.')}finally{e.target.value=''}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!shell.hidden){if(!$('admin-modal').hidden){$('admin-modal').hidden=true}else closeAdmin()}});


/* V16 : gestion des catégories, enregistrée dans menu.json */
function drawCategories(){
 if(!adminAuthenticated)return;
 const cats=categoryData(),host=$('category-rows');
 host.innerHTML=cats.map((c,i)=>{
  const n=catalog.filter(d=>d.category===c.id).length;
  return '<div class="category-row" data-id="'+escapeHTML(c.id)+'"><div><strong>'+escapeHTML(c.name)+'</strong><small>'+n+' plat(s) · '+escapeHTML(c.id)+'</small></div><div class="category-actions">'+
  '<button class="a-btn secondary" type="button" data-cat-action="up" '+(i===0?'disabled':'')+' aria-label="Monter '+escapeHTML(c.name)+'">↑</button>'+
  '<button class="a-btn secondary" type="button" data-cat-action="down" '+(i===cats.length-1?'disabled':'')+' aria-label="Descendre '+escapeHTML(c.name)+'">↓</button>'+
  '<button class="a-btn secondary" type="button" data-cat-action="rename">Renommer</button>'+
  '<button class="a-btn secondary" type="button" data-cat-action="toggle">'+(c.visible?'Masquer':'Afficher')+'</button>'+
  '<button class="a-btn danger" type="button" data-cat-action="delete">Supprimer</button></div></div>';
 }).join('');
}
function categoryChanged(message){
 markDirty();buildFilters();render();drawAdmin();drawCategories();updateCart();
 $('category-status').textContent=message+' Enregistrez menu.json pour publier.';
}
function makeCategoryId(name){
 const base=name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,35)||'categorie';
 let id=base,i=2;while(CATEGORIES[id])id=base+'-'+i++;
 return id;
}
$('category-add-form').addEventListener('submit',e=>{
 e.preventDefault();if(!adminAuthenticated)return;
 const name=$('category-new-name').value.trim();
 if(!name)return;
 if(Object.values(CATEGORIES).some(n=>n.toLocaleLowerCase('fr')===name.toLocaleLowerCase('fr'))){$('category-status').textContent='Ce nom existe déjà.';return}
 if(Object.keys(CATEGORIES).length>=60){$('category-status').textContent='Maximum 60 catégories.';return}
 CATEGORIES[makeCategoryId(name)]=name;
 $('category-new-name').value='';
 categoryChanged('Catégorie ajoutée.');
});
$('category-rows').addEventListener('click',e=>{
 if(!adminAuthenticated)return;
 const b=e.target.closest('button[data-cat-action]'),row=b?.closest('[data-id]');if(!row)return;
 const id=row.dataset.id,action=b.dataset.catAction,cats=categoryData(),index=cats.findIndex(c=>c.id===id);
 if(index<0)return;
 if(action==='rename'){
  const name=prompt('Nouveau nom de la catégorie :',CATEGORIES[id]);
  if(name===null)return;
  const cleaned=name.trim();
  if(!cleaned||cleaned.length>65){$('category-status').textContent='Nom invalide (1 à 65 caractères).';return}
  if(Object.entries(CATEGORIES).some(([k,v])=>k!==id&&v.toLocaleLowerCase('fr')===cleaned.toLocaleLowerCase('fr'))){$('category-status').textContent='Nom déjà utilisé.';return}
  CATEGORIES[id]=cleaned;
 }else if(action==='toggle'){
  if(hiddenCategories.has(id))hiddenCategories.delete(id);else hiddenCategories.add(id);
 }else if(action==='delete'){
  const count=catalog.filter(d=>d.category===id).length;
  if(count){$('category-status').textContent='Suppression impossible : '+count+' plat(s) utilisent cette catégorie. Déplacez-les d’abord.';return}
  if(cats.length===1){$('category-status').textContent='Conservez au moins une catégorie.';return}
  if(!confirm('Supprimer la catégorie « '+CATEGORIES[id]+' » ?'))return;
  delete CATEGORIES[id];hiddenCategories.delete(id);
 }else if(action==='up'||action==='down'){
  const other=index+(action==='up'?-1:1);if(other<0||other>=cats.length)return;
  [cats[index],cats[other]]=[cats[other],cats[index]];
  CATEGORIES=Object.fromEntries(cats.map(c=>[c.id,c.name]));
 }else return;
 if(!CATEGORIES[activeCategory]||hiddenCategories.has(activeCategory))activeCategory='all';
 categoryChanged('Catégories mises à jour.');
});
const oldDrawAdmin=drawAdmin;
drawAdmin=function(){oldDrawAdmin();drawCategories()};

/* Liste de commande locale, sans transmission automatique */
const CART_KEY='osaveurs-call-list-v1';
let callCart={};try{const saved=JSON.parse(localStorage.getItem(CART_KEY));if(saved&&typeof saved==='object'&&!Array.isArray(saved))callCart=saved}catch(e){}
function saveCallCart(){try{localStorage.setItem(CART_KEY,JSON.stringify(callCart))}catch(e){}}
function cartEntries(){return Object.entries(callCart).map(([id,qty])=>({dish:catalog.find(d=>d.id===id&&d.visible),qty:Math.max(0,Math.min(99,Number(qty)||0))})).filter(x=>x.dish&&x.qty>0)}
function amount(price){const m=String(price).replace(/\s/g,'').match(/^(\d+(?:[,.]\d{1,2})?)€/);return m?Number(m[1].replace(',','.')):null}
function euro(n){return n.toLocaleString('fr-FR',{style:'currency',currency:'EUR'})}
function updateCart(){const rows=cartEntries();const count=rows.reduce((a,r)=>a+r.qty,0);document.getElementById('cart-count').textContent=count;document.getElementById('cart-lines').innerHTML=rows.map(({dish:d,qty})=>`<div class="cart-line"><div><strong>${escapeHTML(d.name)}</strong><small>${escapeHTML(d.price)} · ${escapeHTML(CATEGORIES[d.category])}</small></div><div class="cart-qty"><button type="button" data-cart-id="${escapeHTML(d.id)}" data-delta="-1" aria-label="Retirer un ${escapeHTML(d.name)}">−</button><span>${qty}</span><button type="button" data-cart-id="${escapeHTML(d.id)}" data-delta="1" aria-label="Ajouter un ${escapeHTML(d.name)}">+</button></div></div>`).join('')||'<p class="cart-explain">Votre liste est vide. Choisissez des plats dans la carte.</p>';let sum=0,unknown=false;rows.forEach(({dish,qty})=>{const p=amount(dish.price);if(p===null)unknown=true;else sum+=p*qty});document.getElementById('cart-total').textContent=unknown?euro(sum)+' + prix à confirmer':euro(sum);document.getElementById('cart-copy').disabled=!rows.length;document.getElementById('cart-clear').disabled=!rows.length}
function openCart(){document.getElementById('cart-overlay').hidden=false;syncPageScroll();updateCart();document.getElementById('cart-close').focus()}
function closeCart(){document.getElementById('cart-overlay').hidden=true;syncPageScroll();document.getElementById('cart-launch').focus()}
document.getElementById('menu-grid').addEventListener('click',e=>{const btn=e.target.closest('[data-add-id]');if(!btn)return;const d=catalog.find(x=>x.id===btn.dataset.addId&&x.visible);if(!d)return;callCart[d.id]=Math.min(99,(Number(callCart[d.id])||0)+1);saveCallCart();updateCart();btn.textContent='✓ Ajouté à la liste';setTimeout(()=>{if(btn.isConnected)btn.textContent='+ Ajouter à ma commande'},900)});
document.getElementById('cart-launch').addEventListener('click',openCart);
document.getElementById('cart-close').addEventListener('click',closeCart);
document.getElementById('cart-overlay').addEventListener('click',e=>{if(e.target.id==='cart-overlay')closeCart()});
document.getElementById('cart-lines').addEventListener('click',e=>{const b=e.target.closest('[data-cart-id]');if(!b)return;const id=b.dataset.cartId;callCart[id]=Math.max(0,Math.min(99,(Number(callCart[id])||0)+Number(b.dataset.delta)));if(!callCart[id])delete callCart[id];saveCallCart();updateCart()});
document.getElementById('cart-clear').addEventListener('click',()=>{if(confirm('Vider toute votre liste ?')){callCart={};saveCallCart();updateCart()}});
function orderText(){const rows=cartEntries();let total=0,unknown=false;const lines=rows.map(({dish:d,qty})=>{const p=amount(d.price);if(p===null)unknown=true;else total+=p*qty;return `${qty} × ${d.name} — ${d.price}`});return `Bonjour O'Saveurs Braisées, je souhaite commander :\n\n${lines.join('\n')}\n\nTotal indicatif : ${euro(total)}${unknown?' + tarifs à confirmer':''}\nMerci de me confirmer les disponibilités et le montant final.`}
document.getElementById('cart-copy').addEventListener('click',async()=>{const t=orderText();try{await navigator.clipboard.writeText(t);document.getElementById('cart-copy').textContent='✓ Liste copiée';setTimeout(()=>document.getElementById('cart-copy').textContent='Copier ma liste',2000)}catch(e){const ta=document.createElement('textarea');ta.value=t;document.body.appendChild(ta);ta.select();const ok=document.execCommand('copy');ta.remove();if(ok)alert('Liste copiée. Appelez maintenant le restaurant.');else prompt('Copiez votre liste :',t)}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!document.getElementById('cart-overlay').hidden)closeCart()});
updateCart();

/* Fiches partageables : chaque produit a un lien direct stable. */
let selectedDish=null;let lastDetailFocus=null;
function safeDishId(value){try{return decodeURIComponent(value)}catch{return ''}}
function setDishHash(hash){
  // Certains hébergements et aperçus locaux refusent replaceState :
  // la fiche doit rester utilisable même sans mise à jour d'URL.
  try { history.replaceState(null,'',hash); } catch(err) { console.warn('Lien du plat non mis à jour',err); }
}
function openDetail(id,updateURL=true){
  const d=catalog.find(x=>String(x.id)===String(id)&&x.visible&&!hiddenCategories.has(x.category));
  if(!d)return;
  const overlay=document.getElementById('detail-overlay');
  if(!overlay)return;
  selectedDish=d;lastDetailFocus=document.activeElement;
  document.getElementById('detail-category').textContent=CATEGORIES[d.category]||d.category;
  document.getElementById('detail-title').textContent=d.name;
  document.getElementById('detail-description').textContent=d.description||'Pour connaître la composition et les options, contactez directement le restaurant.';
  document.getElementById('detail-price').textContent=d.price;
  document.getElementById('detail-share').href='#plat='+encodeURIComponent(d.id);
  overlay.hidden=false;syncPageScroll();
  document.getElementById('detail-close').focus();
  if(updateURL)setDishHash('#plat='+encodeURIComponent(d.id));
}
function closeDetail(){
  const overlay=document.getElementById('detail-overlay');
  if(!overlay||overlay.hidden)return;
  overlay.hidden=true;syncPageScroll();
  if(location.hash.startsWith('#plat='))setDishHash('#carte');
  if(lastDetailFocus?.isConnected)lastDetailFocus.focus();
  selectedDish=null;
}
document.getElementById('menu-grid').addEventListener('click',e=>{
  const b=e.target.closest('[data-detail-id]');
  if(!b)return;
  e.preventDefault();
  openDetail(b.dataset.detailId);
});
document.getElementById('detail-close').addEventListener('click',closeDetail);
document.getElementById('detail-overlay').addEventListener('click',e=>{if(e.target.id==='detail-overlay')closeDetail()});
document.getElementById('detail-add').addEventListener('click',()=>{if(!selectedDish)return;callCart[selectedDish.id]=Math.min(99,(Number(callCart[selectedDish.id])||0)+1);saveCallCart();updateCart();closeDetail();openCart()});
document.getElementById('detail-share').addEventListener('click',async e=>{e.preventDefault();if(!selectedDish)return;const url=new URL(location.href);url.hash='plat='+encodeURIComponent(selectedDish.id);try{await navigator.clipboard.writeText(url.href);e.target.textContent='✓ Lien copié'}catch{prompt('Copier le lien du plat',url.href)}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!document.getElementById('detail-overlay').hidden)closeDetail()});
window.addEventListener('hashchange',()=>{if(location.hash.startsWith('#plat=')){openDetail(safeDishId(location.hash.slice(6)),false)}});
if(location.hash.startsWith('#plat='))openDetail(safeDishId(location.hash.slice(6)),false);

/* V13 — visionneuse des photographies de la galerie */
(()=>{
 const tiles=Array.from(document.querySelectorAll('#galerie .photo-tile'));
 const overlay=document.getElementById('photo-lightbox');
 const img=document.getElementById('photo-lightbox-img');
 const caption=document.getElementById('photo-lightbox-caption');
 const counter=document.getElementById('photo-lightbox-counter');
 const closeButton=document.getElementById('photo-lightbox-close');
 let current=0,previousFocus=null,startX=null;
 function show(i){
   current=(i+tiles.length)%tiles.length;
   const source=tiles[current].querySelector('img');
   img.src=source.currentSrc||source.src;
   img.alt=source.alt||'Photo du restaurant';
   caption.textContent=tiles[current].querySelector('figcaption')?.textContent||source.alt||'';
   counter.textContent=(current+1)+' / '+tiles.length;
 }
 function open(i){
   previousFocus=document.activeElement;
   show(i);overlay.hidden=false;syncPageScroll();closeButton.focus();
 }
 function close(){
   overlay.hidden=true;img.removeAttribute('src');syncPageScroll();
   if(previousFocus?.isConnected)previousFocus.focus();
 }
 tiles.forEach((tile,i)=>{
   tile.tabIndex=0;tile.setAttribute('role','button');
   tile.setAttribute('aria-label','Agrandir : '+(tile.querySelector('figcaption')?.textContent||'photo'));
   tile.addEventListener('click',()=>open(i));
   tile.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(i)}});
 });
 closeButton.addEventListener('click',close);
 document.getElementById('photo-lightbox-prev').addEventListener('click',()=>show(current-1));
 document.getElementById('photo-lightbox-next').addEventListener('click',()=>show(current+1));
 overlay.addEventListener('click',e=>{if(e.target===overlay)close()});
 document.addEventListener('keydown',e=>{
   if(overlay.hidden)return;
   if(e.key==='Escape'){e.preventDefault();close()}
   if(e.key==='ArrowLeft'){e.preventDefault();show(current-1)}
   if(e.key==='ArrowRight'){e.preventDefault();show(current+1)}
   if(e.key==='Tab'){
     const controls=[closeButton,document.getElementById('photo-lightbox-prev'),document.getElementById('photo-lightbox-next')];
     const pos=controls.indexOf(document.activeElement);
     if(e.shiftKey&&pos===0){e.preventDefault();controls[2].focus()}
     else if(!e.shiftKey&&pos===2){e.preventDefault();controls[0].focus()}
   }
 });
 overlay.addEventListener('touchstart',e=>{startX=e.changedTouches[0].screenX},{passive:true});
 overlay.addEventListener('touchend',e=>{
   if(startX===null)return;
   const delta=e.changedTouches[0].screenX-startX;
   if(Math.abs(delta)>65)show(current+(delta<0?1:-1));
   startX=null;
 },{passive:true});
})();


/* V14 — informations du restaurant et annonce programmée, sans BDD */
(()=>{
 const SITE_PATH='/api/site';
 const DAYS=['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];
 let settings=JSON.parse(JSON.stringify({
   version:1,phone:'01 41 36 01 93',
   hours:DAYS.map((day,i)=>({day,closed:i===6,slots:i===6?[]:[{open:'10:30',close:'14:30'},{open:'18:00',close:'22:30'}]})),
   announcement:{enabled:false,title:'',message:'',start:'',end:''}
 }));
 const el=id=>document.getElementById(id);
 const clean=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const phoneHref=phone=>{const digits=phone.replace(/\D/g,'');return digits.startsWith('0')&&digits.length===10?'+33'+digits.slice(1):'+'+digits};
 function validate(input){
   if(!input||typeof input!=='object')throw Error('Fichier incorrect');
   const phone=String(input.phone||'').trim();
   if(!/^[+0-9 ()\-.]{8,30}$/.test(phone)||phone.replace(/\D/g,'').length<9)throw Error('Téléphone invalide');
   if(!Array.isArray(input.hours)||input.hours.length!==7)throw Error('Sept jours requis');
   const hours=DAYS.map((day,i)=>{
     const h=input.hours[i];
     if(!h||h.day!==day||typeof h.closed!=='boolean'||!Array.isArray(h.slots)||h.slots.length>2)throw Error('Horaires invalides pour '+day);
     const slots=h.closed?[]:h.slots.map(slot=>{
       if(!/^\d{2}:\d{2}$/.test(slot.open)||!/^\d{2}:\d{2}$/.test(slot.close)||slot.open>=slot.close||slot.close>'23:59')throw Error('Créneau invalide : '+day);
       return {open:slot.open,close:slot.close};
     });
     if(!h.closed&&slots.length===0)throw Error('Ajoutez un créneau pour '+day);
     if(slots.length===2&&slots[0].close>slots[1].open)throw Error('Créneaux qui se chevauchent : '+day);
     return {day,closed:h.closed,slots};
   });
   const a=input.announcement||{};
   const ann={enabled:a.enabled===true,title:String(a.title||'').trim().slice(0,100),message:String(a.message||'').trim().slice(0,600),start:String(a.start||''),end:String(a.end||'')};
   for(const d of [ann.start,ann.end])if(d&&!/^\d{4}-\d{2}-\d{2}$/.test(d))throw Error('Date invalide');
   if(ann.enabled&&(!ann.title||!ann.message||!ann.start||!ann.end))throw Error('Complétez le titre, le message et les deux dates');
   if(ann.start&&ann.end&&ann.start>ann.end)throw Error('La date de fin doit suivre le début');
   return {version:1,phone,hours,announcement:ann};
 }
 function renderPublic(){
   const phone=settings.phone, href='tel:'+phoneHref(phone);
   document.querySelectorAll('a[href^="tel:"]').forEach(a=>{
     a.href=href;
     if(a.closest('#infos'))a.textContent='↗  '+phone;
     else if(a.closest('.feature'))a.textContent='Appeler le '+phone+' ↗';
     else if(a.closest('.note'))a.textContent=phone;
     else if(a.closest('.footer'))a.textContent=phone;
     else if(a.id==='cart-call-link')a.textContent='Appeler le restaurant · '+phone;
   });
   const body=el('public-hours');
   body.innerHTML=settings.hours.map(h=>'<tr><td>'+clean(h.day)+'</td><td>'+(h.closed?'Fermé':h.slots.map(t=>clean(t.open.replace(':','h'))+'–'+clean(t.close.replace(':','h'))).join('<br>'))+'</td></tr>').join('');
   const a=settings.announcement;
   // Dates civiles locales, début et fin inclus : pas de décalage UTC.
   const now=new Date();const today=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0');
   const active=a.enabled&&a.start<=today&&today<=a.end&&a.title&&a.message;
   el('public-announcement').hidden=!active;
   el('announcement-title').textContent=active?a.title:'';
   el('announcement-text').textContent=active?a.message:'';
   el('announcement-mini-title').textContent=active?a.title:'';
   el('announcement-mini').dataset.active=active?'true':'false';
   if(!active)el('announcement-mini').hidden=true;
 }
 function drawSettings(){
   el('settings-phone').value=settings.phone;
   el('settings-hours').innerHTML=settings.hours.map((h,i)=>{
     const slots=h.slots;
     return '<div class="settings-day" data-day="'+i+'"><strong>'+h.day+'</strong><label class="settings-check"><input class="hours-closed" type="checkbox" '+(h.closed?'checked':'')+'> Fermé</label>'+
     [0,1].map(j=>'<div class="settings-slot"><span>'+(j?'Service 2':'Service 1')+'</span><input type="time" class="hours-open" value="'+(slots[j]?.open||'')+'"><span>à</span><input type="time" class="hours-close" value="'+(slots[j]?.close||'')+'"></div>').join('')+'</div>';
   }).join('');
   el('announcement-enabled').checked=settings.announcement.enabled;
   el('announcement-admin-title').value=settings.announcement.title;
   el('announcement-message').value=settings.announcement.message;
   el('announcement-start').value=settings.announcement.start;
   el('announcement-end').value=settings.announcement.end;
   el('settings-status').textContent='Informations chargées. Cliquez sur « Enregistrer » pour publier vos modifications.';
 }
 function readForm(){
   const hours=[...document.querySelectorAll('.settings-day')].map((node,i)=>{
     const closed=node.querySelector('.hours-closed').checked;
     const slots=[...node.querySelectorAll('.settings-slot')].map(slot=>({open:slot.querySelector('.hours-open').value,close:slot.querySelector('.hours-close').value})).filter(x=>x.open||x.close);
     return {day:DAYS[i],closed,slots:closed?[]:slots};
   });
   return validate({phone:el('settings-phone').value,hours,announcement:{
     enabled:el('announcement-enabled').checked,title:el('announcement-admin-title').value,
     message:el('announcement-message').value,start:el('announcement-start').value,end:el('announcement-end').value
   }});
 }
 el('settings-form').addEventListener('submit',e=>{
   e.preventDefault();try{settings=readForm();renderPublic();el('settings-status').textContent='Modifications affichées localement. Cliquez sur « Enregistrer » pour les publier.'}
   catch(err){el('settings-status').textContent='Erreur : '+err.message}
 });
 el('settings-export').addEventListener('click',async()=>{
   try{settings=readForm();const response=await apiSave('/api/site',settings);renderPublic();el('settings-status').textContent='Informations enregistrées sur Cloudflare. La diffusion peut prendre un peu de temps.';}
   catch(err){el('settings-status').textContent='Erreur : '+err.message}
 });
 el('settings-import').addEventListener('click',()=>el('settings-import-file').click());
 el('settings-import-file').addEventListener('change',async e=>{
   const file=e.target.files[0];if(!file)return;
   try{if(file.size>100000)throw Error('Fichier trop volumineux');settings=validate(JSON.parse(await file.text()));drawSettings();renderPublic();el('settings-status').textContent='Informations importées. Cliquez sur « Enregistrer » pour publier.'}
   catch(err){el('settings-status').textContent='Import impossible : '+err.message}
   finally{e.target.value=''}
 });
 async function load(){
   try{const response=await fetch(SITE_PATH,{cache:'no-store'});if(!response.ok)throw Error('HTTP '+response.status);settings=validate(await response.json())}
   catch(err){/* Valeurs initiales utilisées en aperçu local */ }
   renderPublic();drawSettings();
 }
 load();
})();

/* V17 : initialisation du catalogue après installation des événements et du panier. */
loadMenu();

/* V18 — navigation par quatre onglets indépendants dans l'espace pro. */
(()=>{
 const buttons=[...document.querySelectorAll('[data-admin-tab]')];
 const panels=Object.fromEntries(buttons.map(b=>[b.dataset.adminTab,document.getElementById('panel-'+b.dataset.adminTab)]));
 const shared=document.querySelector('.admin-settings-tabs');
 function activate(name,focus=false){
   if(!panels[name])return;
   if(name==='annonces')panels.annonces.appendChild(shared);
   else if(name==='horaires')panels.horaires.appendChild(shared);
   document.getElementById('admin-hours-fields').hidden=name!=='horaires';
   document.getElementById('admin-announcement-fields').hidden=name!=='annonces';
   buttons.forEach(b=>{const on=b.dataset.adminTab===name;b.classList.toggle('active',on);b.setAttribute('aria-selected',String(on));b.tabIndex=on?0:-1;if(on&&focus)b.focus()});
   Object.entries(panels).forEach(([key,p])=>p.hidden=key!==name);
   document.getElementById('admin-panel').dataset.currentTab=name;
   const isSite=name==='horaires'||name==='annonces';
   const titles={plats:'Gestion des plats',categories:'Gestion des catégories',horaires:'Horaires & téléphone',annonces:'Gestion des annonces'};
   document.getElementById('admin-section-title').textContent=titles[name];
   document.getElementById('admin-export').textContent='Enregistrer';
   document.getElementById('admin-import').textContent='Ouvrir '+(isSite?'site.json':'menu.json');
   document.getElementById('admin-export').setAttribute('aria-label','Publier les modifications de '+titles[name]);
   document.getElementById('admin-import').setAttribute('aria-label','Importer '+(isSite?'site.json':'menu.json')+' pour '+titles[name]);
   document.getElementById('admin-action-status').textContent='Les modifications sont enregistrées directement sur Cloudflare.';
 }
 buttons.forEach((b,i)=>{
   b.addEventListener('click',()=>activate(b.dataset.adminTab));
   b.addEventListener('keydown',e=>{
     if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;
     e.preventDefault();const n=e.key==='Home'?0:e.key==='End'?buttons.length-1:(i+(e.key==='ArrowRight'?1:-1)+buttons.length)%buttons.length;
     activate(buttons[n].dataset.adminTab,true);
   });
 });
 // Restore the most useful starting view on each opening.
 activate('plats');
})();

/* V21 : annonce grande au départ, compacte et fixe uniquement après défilement */
(()=>{
 const full=document.getElementById('public-announcement');
 const mini=document.getElementById('announcement-mini');
 const button=document.getElementById('announcement-mini-open');
 if(!full||!mini||!button)return;
 const update=()=>{
   if(full.hidden||mini.dataset.active!=='true'){mini.hidden=true;return}
   const bounds=full.getBoundingClientRect();
   // La petite barre apparaît seulement lorsque le grand bandeau est passé derrière le header.
   const header=document.querySelector('.header');
   const headerHeight=header?.getBoundingClientRect().height||82;
   mini.style.top=headerHeight+'px';
   mini.hidden=bounds.bottom>headerHeight+2;
 };
 let scheduled=false;
 const schedule=()=>{if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;update()})};
 window.addEventListener('scroll',schedule,{passive:true});
 window.addEventListener('resize',schedule,{passive:true});
 new MutationObserver(schedule).observe(full,{attributes:true,attributeFilter:['hidden']});
 button.addEventListener('click',()=>{
   const header=document.querySelector('.header');
   const top=window.scrollY+full.getBoundingClientRect().top-(header?.getBoundingClientRect().height||82)-8;
   window.scrollTo({top:Math.max(0,top),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
 });
 schedule();
})();


/* V23 : verrouillage du défilement synchronisé avec les fenêtres réellement ouvertes */
function syncPageScroll(){
 const ids=['admin-shell','cart-overlay','detail-overlay','photo-lightbox'];
 const opened=ids.some(id=>{const n=document.getElementById(id);return n&&!n.hidden});
 document.body.style.overflow=opened?'hidden':'';
 document.documentElement.style.overflow='';
}
const scrollOverlayIds=['admin-shell','cart-overlay','detail-overlay','photo-lightbox'];
scrollOverlayIds.forEach(id=>{
 const n=document.getElementById(id);
 if(n)new MutationObserver(syncPageScroll).observe(n,{attributes:true,attributeFilter:['hidden']});
});
window.addEventListener('pageshow',syncPageScroll);
window.addEventListener('hashchange',()=>requestAnimationFrame(syncPageScroll));
document.addEventListener('keydown',e=>{
 if(e.key!=='Escape')return;
 const photo=document.getElementById('photo-lightbox');
 const detail=document.getElementById('detail-overlay');
 const cart=document.getElementById('cart-overlay');
 const admin=document.getElementById('admin-shell');
 if(!photo.hidden||!detail.hidden||!cart.hidden||!admin.hidden)
   requestAnimationFrame(syncPageScroll);
});
syncPageScroll();
