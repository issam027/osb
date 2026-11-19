
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
const uploadedPhotoPath=/^\/api\/photos\/[a-f0-9]{64}$/;
const isSafeImage=url=>typeof url==='string'&&((/^https:\/\/[^\s]+$/i.test(url)&&url.length<1001)||uploadedPhotoPath.test(url));
const galleryPhotos={
  13: "https://cdn.website.dish.co/media/05/d1/4523552/O-SAVEURS-BRAISEES-OSAVEURBRAISE-6MARS-13-jpg.jpg",
  40: "https://cdn.website.dish.co/media/bb/63/4530897/O-SAVEURS-BRAISEES-OSAVEURBRAISE-6MARS-40-jpg.jpg",
  60: "https://cdn.website.dish.co/media/f5/e5/4530861/O-SAVEURS-BRAISEES-OSAVEURBRAISE-6MARS-60-jpg.jpg",
  78: "https://cdn.website.dish.co/media/6f/c8/4530856/O-SAVEURS-BRAISEES-OSAVEURBRAISE-6MARS-78-jpg.jpg",
  34: "https://cdn.website.dish.co/media/e8/2c/4530887/O-SAVEURS-BRAISEES-OSAVEURBRAISE-6MARS-34-jpg.jpg",
  19: "https://cdn.website.dish.co/media/34/9c/4523547/O-SAVEURS-BRAISEES-OSAVEURBRAISE-6MARS-19-jpg.jpg",
  33: "https://cdn.website.dish.co/media/c4/38/4530882/O-SAVEURS-BRAISEES-OSAVEURBRAISE-6MARS-33-jpg.jpg",
};
const defaultDishPhotos=new Map([
  ["Formule Family", [galleryPhotos[13], galleryPhotos[40]]],
  ["Hamburger steak — menu", [galleryPhotos[60]]],
  ["Tagliatelles fermières", [galleryPhotos[78]]],
  ["Wings ×8", [galleryPhotos[34]]],
  ["Wings ×16", [galleryPhotos[34]]],
  ["Frites de patate douce — normal", [galleryPhotos[19]]],
  ["Frites de patate douce — XL", [galleryPhotos[19]]],
  ["Riz tieb — normal", [galleryPhotos[33]]],
  ["Riz tieb — XL", [galleryPhotos[33]]],
]);
function formatDishPrice(value){
 const price=String(value).trim();
 const match=price.match(/^(\d{1,24})(?:[,.](\d{1,2}))?\s*€?$/);
 return match?`${match[1]},${(match[2]||'').padEnd(2,'0')} €`:price;
}
function isEggSupplement(d){
 return /^supplément (?:œuf|oeuf)$/i.test(d.name?.trim());
}
function normalizeCatalog(entries){
 const legacyEgg=entries.find(isEggSupplement);
 const eggPrice=legacyEgg?Math.round((amount(formatDishPrice(legacyEgg.price))??1)*100):100;
 return entries.map((dish,index)=>isEggSupplement(dish)?null:normalize(dish,index,eggPrice)).filter(Boolean);
}
function normalize(d,i,eggPrice){
 const links=Array.isArray(d.images)?d.images:isSafeImage(d.image)?[d.image]:defaultDishPhotos.get(d.name)||[];
 const images=[...new Set(links.filter(isSafeImage))].slice(0,8);
 const extras=Array.isArray(d.extras)?d.extras:(d.category==='burgers'&&/^Hamburger /i.test(d.name)?[{name:'Œuf',price:eggPrice}]:[]);
 return {id:String(d.id||('dish-'+i)),category:CATEGORIES[d.category]?d.category:(Object.keys(CATEGORIES)[0]||'plats'),name:String(d.name||'').slice(0,100),price:formatDishPrice(d.price||'À confirmer').slice(0,30),description:String(d.description||'').slice(0,500),image:images[0]||'',images,extras,visible:d.visible!==false};}
let catalog=normalizeCatalog(dishes);
let fileHandle=null;
let dirty=false;
const MENU_PATH='/api/menu';
let menuLoaded=false;
async function loadMenu(){
  try{
    const response=await fetch(MENU_PATH,{cache:'no-store'});
    if(!response.ok)throw new Error('HTTP '+response.status);
    const data=await response.json();
    if(!Array.isArray(data.dishes)||!data.dishes.every(x=>x&&typeof x.name==='string'))throw new Error('Carte invalide');
    if(Array.isArray(data.categories))applyCategories(data.categories);else applyCategories(Object.entries(DEFAULT_CATEGORIES).map(([id,name])=>({id,name,visible:true})));catalog=normalizeCatalog(data.dishes);
    menuLoaded=true;
    setStatus('');
  }catch(err){
    setStatus('La carte n’a pas pu être chargée. Actualisez la page pour réessayer.');
  }
  buildFilters();render();updateCart();
  if(location.hash.startsWith('#plat='))openDetail(safeDishId(location.hash.slice(6)));
}
function setStatus(message){const el=document.getElementById('admin-file-status');if(el)el.textContent=message}
function markDirty(){dirty=true;setStatus('Modifications non publiées. Cliquez sur « Enregistrer ».')}
async function apiSave(path,data){
 const response=await fetch(path,{method:'PUT',credentials:'same-origin',headers:{'content-type':'application/json'},body:JSON.stringify(data)}).catch(()=>{
  throw Error('Vérifiez votre connexion puis réessayez.');
 });
 if(response.status===401)throw Error('Votre session a expiré. Reconnectez-vous pour enregistrer.');
 if(!response.ok)throw Error('Impossible d’enregistrer. Réessayez dans un instant.');
}
const SAVE_CONFIRMATION='La modification est enregistrée et sera visible prochainement.';
async function saveMenu(){
 if(!menuLoaded){
  setStatus('La carte n’est pas chargée. Actualisez la page avant de publier.');
  return false;
 }
 try{await apiSave('/api/menu',{version:2,restaurant:'O Saveurs Braisees',categories:categoryData(),dishes:catalog});dirty=false;setStatus(SAVE_CONFIRMATION);return true;}
 catch(err){setStatus('Erreur : '+err.message);return false;}
}

let activeCategory='all',editId=null;
function persist(){markDirty()}
function render(cat=activeCategory){activeCategory=cat;const menu=document.getElementById('menu-grid');menu.innerHTML=catalog.filter(d=>d.visible&&!hiddenCategories.has(d.category)&&(cat==='all'||d.category===cat)).map(d=>`<article class="dish" id="plat-${escapeHTML(d.id)}">${d.image?`<img class="dish-photo" src="${escapeHTML(d.image)}" loading="lazy" decoding="async" alt="${escapeHTML(d.name)}">`:''}<div class="eyebrow">${escapeHTML(CATEGORIES[d.category]||d.category)}</div><div class="top"><h3>${escapeHTML(d.name)}</h3></div><p>${escapeHTML(d.description)}</p><div class="top"><span class="price">${escapeHTML(d.price)}</span><span class="dish-list-qty" data-list-qty="${escapeHTML(d.id)}" aria-live="polite" hidden></span></div><button type="button" class="dish-more" data-detail-id="${escapeHTML(d.id)}" aria-label="Voir la fiche de ${escapeHTML(d.name)}">Découvrir le plat ↗</button><button type="button" class="add-dish" data-add-id="${escapeHTML(d.id)}" aria-label="Ajouter ${escapeHTML(d.name)} à ma liste">+ Ajouter à ma liste</button></article>`).join('')||'<p>Aucun plat disponible dans cette catégorie.</p>';updateDishQuantities()}
document.querySelector('.filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;activeCategory=b.dataset.filter;buildFilters();render();});
buildFilters();
const $=id=>document.getElementById(id);const shell=$('admin-shell');let adminAuthenticated=false;
async function openAdmin(){try{const r=await fetch('/api/auth/session',{credentials:'same-origin'});const v=await r.json();adminAuthenticated=v.authenticated===true}catch(e){adminAuthenticated=false}clearAdminStatuses();shell.hidden=false;syncPageScroll();$('admin-login').hidden=adminAuthenticated;$('admin-panel').hidden=!adminAuthenticated;if(adminAuthenticated){drawAdmin();shell.querySelector('.admin-tab.active').focus({preventScroll:true})}else $('admin-user').focus()}
const publicationStatusIds=['admin-file-status','category-status','settings-status','admin-action-status'];
let confirmationTimer;
function clearAdminStatuses(){
 clearTimeout(confirmationTimer);
 for(const id of ['category-status','settings-status','admin-action-status','admin-error'])$(id).textContent='';
 if($('admin-file-status').textContent===SAVE_CONFIRMATION)setStatus('');
}
function expireSaveConfirmation(){
 clearTimeout(confirmationTimer);
 confirmationTimer=setTimeout(()=>{
  for(const id of publicationStatusIds){
   if($(id).textContent===SAVE_CONFIRMATION)$(id).textContent='';
  }
 },8000);
}
function closeAdmin(){resetPhotoUpload();clearAdminStatuses();shell.hidden=true;$('admin-modal').hidden=true;syncPageScroll();$('admin-open').focus()}
$('admin-open').addEventListener('click',openAdmin);$('admin-cancel').addEventListener('click',closeAdmin);
$('admin-close').addEventListener('click',closeAdmin);
$('admin-login-form').addEventListener('submit',async e=>{
 e.preventDefault();const button=$('admin-login-form').querySelector('[type=submit]');button.disabled=true;
 try{const response=await fetch('/api/auth/login',{method:'POST',credentials:'same-origin',headers:{'content-type':'application/json'},body:JSON.stringify({username:$('admin-user').value.trim(),password:$('admin-pass').value})});if(response.status===401)throw Error('Vérifiez votre identifiant et votre mot de passe.');if(!response.ok)throw Error('L’Espace pro est indisponible pour le moment. Réessayez plus tard.');adminAuthenticated=true;clearAdminStatuses();$('admin-login').hidden=true;$('admin-panel').hidden=false;$('admin-pass').value='';$('admin-error').textContent='';drawAdmin();}
 catch(err){$('admin-error').textContent=err instanceof TypeError?'Vérifiez votre connexion puis réessayez.':err.message}finally{button.disabled=false}
});
$('admin-logout').addEventListener('click',async()=>{
 const button=$('admin-logout');
 button.disabled=true;
 try{
  const response=await fetch('/api/auth/logout',{method:'POST',credentials:'same-origin'});
  if(!response.ok)throw Error('Déconnexion impossible. Réessayez.');
  adminAuthenticated=false;
  $('admin-panel').hidden=true;
  $('admin-login').hidden=false;
  $('admin-user').value='';
  $('admin-pass').value='';
  closeAdmin();
 }catch(e){
  $('admin-action-status').textContent='Déconnexion impossible. Réessayez.';
 }finally{button.disabled=false}
});
fetch('/api/auth/session',{credentials:'same-origin'}).then(r=>r.json()).then(v=>{adminAuthenticated=v.authenticated===true}).catch(()=>{});

function drawAdmin(){if(!adminAuthenticated)return;const cats=categoryData();$('stat-total').textContent=catalog.length;$('stat-visible').textContent=catalog.filter(d=>d.visible).length;$('stat-categories').textContent=cats.length;const selected=$('admin-category').value;$('admin-category').innerHTML='<option value="all">Toutes les catégories</option>'+Object.entries(CATEGORIES).map(([k,v])=>`<option value="${escapeHTML(k)}">${escapeHTML(v)}</option>`).join('');$('admin-category').value=selected&&[...$('admin-category').options].some(x=>x.value===selected)?selected:'all';const q=$('admin-search').value.trim().toLocaleLowerCase('fr');const c=$('admin-category').value;const rows=catalog.filter(d=>(c==='all'||d.category===c)&&[d.name,d.description,d.category].join(' ').toLocaleLowerCase('fr').includes(q));$('admin-rows').innerHTML=rows.map(d=>`<tr><td><strong>${escapeHTML(d.name)}</strong><small>${escapeHTML(d.description.slice(0,90))}</small></td><td>${escapeHTML(CATEGORIES[d.category])}</td><td><strong>${escapeHTML(d.price)}</strong></td><td class="${d.visible?'':'off'}">${d.visible?'Visible':'Masqué'}</td><td><div class="row-actions"><button class="a-btn secondary" data-action="edit" data-id="${escapeHTML(d.id)}">Modifier</button><button class="a-btn secondary" data-action="toggle" data-id="${escapeHTML(d.id)}">${d.visible?'Masquer':'Afficher'}</button><button class="a-btn danger" data-action="delete" data-id="${escapeHTML(d.id)}">Supprimer</button></div></td></tr>`).join('')||'<tr><td colspan="5">Aucun plat trouvé.</td></tr>';$('admin-count').textContent=`${rows.length} plat(s) affiché(s)`}
$('admin-search').addEventListener('input',drawAdmin);$('admin-category').addEventListener('change',drawAdmin);
$('admin-rows').addEventListener('click',e=>{if(!adminAuthenticated)return;const btn=e.target.closest('button[data-action]');if(!btn)return;const d=catalog.find(x=>x.id===btn.dataset.id);if(!d)return;if(btn.dataset.action==='edit')openEditor(d,btn);if(btn.dataset.action==='toggle'){d.visible=!d.visible;persist();render();drawAdmin()}if(btn.dataset.action==='delete'&&confirm(`Supprimer définitivement « ${d.name} » de la carte ?`)){catalog=catalog.filter(x=>x.id!==d.id);persist();render();drawAdmin()}});
let editorTrigger;
function openEditor(d,trigger=$('admin-add')){resetPhotoUpload();editorTrigger=trigger;editId=d?.id||null;$('editor-title').textContent=d?'Modifier le plat':'Ajouter un plat';$('dish-name').value=d?.name||'';$('dish-category').innerHTML=Object.entries(CATEGORIES).map(([k,v])=>`<option value="${escapeHTML(k)}">${escapeHTML(v)}</option>`).join('');$('dish-category').value=d?.category||Object.keys(CATEGORIES)[0];$('dish-price').value=d?.price.replace(/\s*€$/,'')||'';$('dish-description').value=d?.description||'';loadEditorPhotos(d?.images||[]);$('dish-visible').checked=d?.visible!==false;$('dish-extra-rows').replaceChildren();$('dish-extra-error').textContent='';(d?.extras||[]).forEach(addExtraEditorRow);$('admin-modal').hidden=false;$('dish-name').focus()}
function closeEditor(){
 resetPhotoUpload();
 $('admin-modal').hidden=true;
 (editorTrigger?.isConnected?editorTrigger:$('admin-add')).focus({preventScroll:true});
}
$('admin-add').addEventListener('click',()=>openEditor(null));
$('editor-cancel').addEventListener('click',closeEditor);
$('editor-close').addEventListener('click',closeEditor);
let photoUpload;
let editorPhotoOrder=[];
let uploadedPhotos=[];
function loadEditorPhotos(images){
 editorPhotoOrder=images;
 uploadedPhotos=images.filter(path=>uploadedPhotoPath.test(path));
 $('dish-image').value=images.filter(path=>!uploadedPhotoPath.test(path)).join('\n');
 showUploadedPhotos();
}
function showUploadedPhotos(){
 $('dish-uploaded-photos').replaceChildren(...uploadedPhotos.map((path,index)=>{
  const item=document.createElement('div');
  const image=document.createElement('img');
  image.src=path;
  image.alt='';
  const remove=document.createElement('button');
  remove.type='button';
  remove.className='a-btn secondary';
  remove.textContent='Retirer';
  remove.setAttribute('aria-label','Retirer la photo '+(index+1));
  remove.addEventListener('click',()=>{
   uploadedPhotos=uploadedPhotos.filter(photo=>photo!==path);
   showUploadedPhotos();
   $('dish-photo-files').focus();
  });
  item.append(image,remove);
  return item;
 }));
}
function resetPhotoUpload(){
 photoUpload?.abort();
 photoUpload=null;
 $('dish-photo-files').value='';
 $('dish-upload-status').textContent='';
 $('admin-editor').querySelector('button[type="submit"]').disabled=false;
}
function dishPhotoLinks(){
 const external=$('dish-image').value.split(/\r?\n/).map(link=>link.trim()).filter(Boolean);
 const ordered=external;
 for(const [index,link] of editorPhotoOrder.entries()){
  if(uploadedPhotos.includes(link)&&!ordered.includes(link))ordered.splice(index,0,link);
 }
 return [...new Set([...ordered,...uploadedPhotos])];
}
async function prepareDishPhoto(file){
 if(file.size>25*1024*1024)throw Error('Choisissez une photo de moins de 25 Mo.');
 const bitmap=await createImageBitmap(file).catch(()=>{throw Error('Cette photo ne peut pas être ouverte. Essayez en JPEG, PNG ou WebP.');});
 try{
  const scale=Math.min(1,1440/Math.max(bitmap.width,bitmap.height));
  const canvas=document.createElement('canvas');
  canvas.width=Math.max(1,Math.round(bitmap.width*scale));
  canvas.height=Math.max(1,Math.round(bitmap.height*scale));
  canvas.getContext('2d').drawImage(bitmap,0,0,canvas.width,canvas.height);
  for(const quality of [.84,.72,.58]){
   const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/webp',quality));
   if(blob?.type==='image/webp'&&blob.size<=750000)return blob;
  }
  throw Error('Cette photo est trop lourde. Essayez une image plus petite.');
 }finally{bitmap.close()}
}
$('dish-photo-files').addEventListener('change',async event=>{
 const files=[...event.target.files];
 event.target.value='';
 if(!files.length||photoUpload)return;
 const status=$('dish-upload-status');
 if(dishPhotoLinks().length+files.length>8){
  status.textContent='Chaque plat peut avoir jusqu’à 8 photos.';
  return;
 }
 const controller=new AbortController();
 photoUpload=controller;
 const submit=$('admin-editor').querySelector('button[type="submit"]');
 submit.disabled=true;
 const failures=[];
 try{
  for(const [index,file] of files.entries()){
   if(controller.signal.aborted)break;
   status.textContent=`Envoi de la photo ${index+1} sur ${files.length}…`;
   try{
    const photo=await prepareDishPhoto(file);
    const response=await fetch('/api/photos',{method:'POST',body:photo,signal:controller.signal});
    if(response.status===401)throw Error('Reconnectez-vous pour ajouter des photos.');
    if(!response.ok)throw Error('Envoi impossible. Réessayez dans un instant.');
    const {path}=await response.json();
    if(!uploadedPhotoPath.test(path))throw Error('Envoi impossible. Réessayez dans un instant.');
    if(controller.signal.aborted)break;
    const links=dishPhotoLinks();
    if(!links.includes(path)&&links.length>=8)throw Error('Chaque plat peut avoir jusqu’à 8 photos.');
    if(!links.includes(path)){
     editorPhotoOrder=[...links,path];
     uploadedPhotos.push(path);
     showUploadedPhotos();
    }
   }catch(error){
    if(controller.signal.aborted)break;
    failures.push(error instanceof TypeError?'Vérifiez votre connexion puis réessayez.':error.message);
   }
  }
  if(!controller.signal.aborted)status.textContent=failures.length?failures[0]:'Photos ajoutées. Validez le plat puis appuyez sur « Enregistrer ».';
 }finally{
  if(photoUpload===controller){
   photoUpload=null;
   submit.disabled=false;
  }
 }
});
function addExtraEditorRow(extra){
 const row=document.createElement('div');
 row.className='dish-extra-row';
 row.innerHTML='<label>Nom<input class="extra-name" maxlength="60" required></label><label>Prix (€)<input class="extra-price" inputmode="decimal" maxlength="7" required></label><button type="button" class="a-btn secondary" aria-label="Retirer le supplément">×</button>';
 row.querySelector('.extra-name').value=extra?.name||'';
 row.querySelector('.extra-price').value=extra?String(extra.price/100).replace('.',','):'';
 row.querySelector('button').addEventListener('click',()=>row.remove());
 $('dish-extra-rows').append(row);
 return row;
}
$('dish-extra-add').addEventListener('click',()=>{
 if($('dish-extra-rows').children.length>=12){
  $('dish-extra-error').textContent='Vous pouvez ajouter jusqu’à 12 suppléments.';
  return;
 }
 $('dish-extra-error').textContent='';
 addExtraEditorRow().querySelector('input').focus();
});
function readDishExtras(){
 const extras=[...$('dish-extra-rows').children].map(row=>{
  const name=row.querySelector('.extra-name').value.trim();
  const value=row.querySelector('.extra-price').value.trim();
  const price=/^\d{1,4}(?:[,.]\d{1,2})?$/.test(value)?Math.round(Number(value.replace(',','.'))*100):NaN;
  return {name,price};
 });
 if(extras.some(extra=>!extra.name||!Number.isSafeInteger(extra.price))){
  throw Error('Indiquez un nom et un prix valide pour chaque supplément.');
 }
 if(new Set(extras.map(extra=>extra.name.toLocaleLowerCase('fr'))).size!==extras.length){
  throw Error('Chaque supplément doit avoir un nom différent.');
 }
 return extras;
}
$('admin-editor').addEventListener('submit',e=>{e.preventDefault();if(!adminAuthenticated)return;let extras;try{extras=readDishExtras()}catch(error){$('dish-extra-error').textContent=error.message;return}const images=dishPhotoLinks();if(images.length>8||!images.every(isSafeImage)){alert('Ajoutez jusqu’à 8 liens de photos valides, un par ligne.');return}const next={id:editId||('custom-'+Date.now()+'-'+Math.random().toString(36).slice(2)),name:$('dish-name').value.trim(),category:$('dish-category').value,price:formatDishPrice($('dish-price').value),description:$('dish-description').value.trim(),image:images[0]||'',images,extras,visible:$('dish-visible').checked};if(!next.name||!next.price)return;const i=catalog.findIndex(d=>d.id===editId);if(i>=0)catalog[i]=next;else catalog.unshift(next);persist();render();drawAdmin();closeEditor()});
$('admin-export').addEventListener('click',async ()=>{
 const tab=$('admin-panel').dataset.currentTab;
 if(['horaires','annonces','livraison'].includes(tab))$('settings-export').click();
 else{
  const publish=$('admin-export');
  publish.disabled=true;
  try{
   const saved=await saveMenu();
   $('admin-action-status').textContent=$('admin-file-status').textContent;
   if($('admin-panel').dataset.currentTab==='categories')$('category-status').textContent=$('admin-file-status').textContent;
   if(saved)expireSaveConfirmation();
  }finally{publish.disabled=false}
 }
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!shell.hidden){if(!$('admin-modal').hidden)closeEditor();else closeAdmin()}});


/* V16 : gestion des catégories, enregistrée dans menu.json */
function drawCategories(){
 if(!adminAuthenticated)return;
 const cats=categoryData(),host=$('category-rows');
 host.innerHTML=cats.map((c,i)=>{
  const n=catalog.filter(d=>d.category===c.id).length;
  return '<div class="category-row" data-id="'+escapeHTML(c.id)+'"><div><strong>'+escapeHTML(c.name)+'</strong><small>'+n+' '+(n===1?'plat':'plats')+' · '+(c.visible?'Visible':'Masquée')+'</small></div><div class="category-actions">'+
  '<button class="a-btn secondary" type="button" data-cat-action="up" '+(i===0?'disabled':'')+' aria-label="Monter '+escapeHTML(c.name)+'">↑</button>'+
  '<button class="a-btn secondary" type="button" data-cat-action="down" '+(i===cats.length-1?'disabled':'')+' aria-label="Descendre '+escapeHTML(c.name)+'">↓</button>'+
  '<button class="a-btn secondary" type="button" data-cat-action="rename" aria-expanded="false">Renommer</button>'+
  '<button class="a-btn secondary" type="button" data-cat-action="toggle">'+(c.visible?'Masquer':'Afficher')+'</button>'+
  '<button class="a-btn danger" type="button" data-cat-action="delete">Supprimer</button></div>'+
  '<form class="category-rename" hidden><label>Nouveau nom<input name="category-name" maxlength="65" required></label>'+
  '<div class="admin-actions"><button class="a-btn" type="submit">Valider le nom</button>'+
  '<button class="a-btn secondary" type="button" data-cat-action="cancel-rename">Annuler</button></div></form></div>';
 }).join('');
}
function categoryChanged(message){
 markDirty();buildFilters();render();drawAdmin();drawCategories();updateCart();
 $('category-status').textContent=message+' Appuyez sur « Enregistrer » pour publier.';
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
 if(action==='rename'||action==='cancel-rename'){
  const form=row.querySelector('.category-rename');
  const rename=row.querySelector('[data-cat-action="rename"]');
  const opening=action==='rename'&&form.hidden;
  form.hidden=!opening;
  rename.setAttribute('aria-expanded',String(opening));
  if(opening){
   const input=form.elements['category-name'];
   input.value=CATEGORIES[id];
   input.focus();
   input.select();
  }else rename.focus();
  return;
 }
 if(action==='toggle'){
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
$('category-rows').addEventListener('submit',event=>{
 const form=event.target.closest('.category-rename');
 if(!form||!adminAuthenticated)return;
 event.preventDefault();
 const id=form.closest('.category-row').dataset.id;
 const input=form.elements['category-name'];
 const name=input.value.trim();
 if(!name||Object.entries(CATEGORIES).some(([key,value])=>key!==id&&value.toLocaleLowerCase('fr')===name.toLocaleLowerCase('fr'))){
  $('category-status').textContent=name?'Ce nom est déjà utilisé.':'Saisissez un nom pour la catégorie.';
  input.focus();
  return;
 }
 CATEGORIES[id]=name;
 categoryChanged('Catégorie renommée.');
 $('category-rows').querySelector(`.category-row[data-id="${CSS.escape(id)}"] [data-cat-action="rename"]`).focus({preventScroll:true});
});
const oldDrawAdmin=drawAdmin;
drawAdmin=function(){oldDrawAdmin();drawCategories()};

/* Liste de commande locale, sans transmission automatique */
const CART_KEY='osaveurs-call-list-v1';
const CART_NOTES_KEY='osaveurs-call-notes-v1';
let deliveryPricing=null;
let cartNotes=Object.create(null);
try{Object.assign(cartNotes,JSON.parse(localStorage.getItem(CART_NOTES_KEY)))}catch(e){}
function saveCartNotes(){try{localStorage.setItem(CART_NOTES_KEY,JSON.stringify(cartNotes))}catch(e){}}
function cartNote(id){return typeof cartNotes[id]==='string'?cartNotes[id].slice(0,200):''}
const cartExtras=Object.create(null);
try{Object.assign(cartExtras,JSON.parse(localStorage.getItem('osaveurs-call-extras-v1')))}catch(e){}
function saveCartExtras(){try{localStorage.setItem('osaveurs-call-extras-v1',JSON.stringify(cartExtras))}catch(e){}}
function selectedExtras(dish){
 const names=Array.isArray(cartExtras[dish.id])?cartExtras[dish.id]:[];
 return dish.extras.filter(extra=>names.includes(extra.name));
}
function extraChoices(dish,forCart=false){
 if(!dish.extras.length)return '';
 const names=new Set(selectedExtras(dish).map(extra=>extra.name));
 return `<fieldset class="extra-choices"><legend>Suppléments par portion</legend>${dish.extras.map(extra=>
  `<label><input type="checkbox" value="${escapeHTML(extra.name)}" ${names.has(extra.name)?'checked':''}> <span>${escapeHTML(extra.name)} · +${euro(extra.price/100)}</span></label>`
 ).join('')}${forCart?'':'<small>Le choix s’applique à toutes les portions de ce plat dans votre liste.</small>'}</fieldset>`;
}
function checkedExtras(host){
 return [...host.querySelectorAll('input:checked')].map(input=>input.value);
}
function storeExtras(id,host){
 cartExtras[id]=checkedExtras(host);
 saveCartExtras();
}
function isDelivery(){return document.querySelector('[name="cart-fulfillment"]:checked').value==='delivery'}
let callCart={};try{const saved=JSON.parse(localStorage.getItem(CART_KEY));if(saved&&typeof saved==='object'&&!Array.isArray(saved))callCart=saved}catch(e){}
function saveCallCart(){try{localStorage.setItem(CART_KEY,JSON.stringify(callCart))}catch(e){}}
function cartEntries(){return Object.entries(callCart).map(([id,qty])=>({dish:catalog.find(d=>d.id===id&&d.visible&&!hiddenCategories.has(d.category)),qty:Math.max(0,Math.min(99,Number(qty)||0))})).filter(x=>x.dish&&x.qty>0)}
function amount(price){const m=String(price).replace(/\s/g,'').match(/^(\d+(?:[,.]\d{1,2})?)€/);return m?Number(m[1].replace(',','.')):null}
function euro(n){return n.toLocaleString('fr-FR',{style:'currency',currency:'EUR'})}
function cartEstimate(rows){
 let subtotal=0,unknown=false;
 for(const {dish,qty} of rows){
  const price=amount(dish.price);
  if(price===null)unknown=true;
  const extras=selectedExtras(dish).reduce((sum,extra)=>sum+extra.price,0);
  subtotal+=(Math.round((price??0)*100)+extras)*qty;
 }
 if(!isDelivery())return {total:subtotal,unknown,deliveryText:''};
 if(!deliveryPricing)return {total:subtotal,unknown:true,deliveryText:'Livraison : tarif à confirmer par téléphone.'};
 const {fee,freeFrom}=deliveryPricing;
 if(freeFrom!==null&&subtotal<freeFrom&&unknown){
  return {total:subtotal,unknown:true,deliveryText:'Livraison : '+euro(fee/100)+', offerte dès '+euro(freeFrom/100)+'. Frais à confirmer selon le total.'};
 }
 const charge=freeFrom!==null&&subtotal>=freeFrom?0:fee;
 const rule=freeFrom!==null&&charge?' · offerte dès '+euro(freeFrom/100):'';
 return {total:subtotal+charge,unknown,deliveryText:charge?'Livraison : '+euro(charge/100)+rule:'Livraison offerte'};
}
function estimateText({total,unknown}){
 return unknown?(total?euro(total/100)+' + montant à confirmer':'À confirmer'):euro(total/100);
}
function showDishQuantity(badge,id){
 const qty=Math.max(0,Math.min(99,Number(callCart[id])||0));
 const label=qty?`${qty} dans ma liste`:'';
 badge.hidden=!qty;
 if(badge.textContent!==label)badge.textContent=label;
}
function updateDishQuantities(){
 for(const badge of document.querySelectorAll('#menu-grid [data-list-qty]')){
  showDishQuantity(badge,badge.dataset.listQty);
 }
}
function addDishToCart(id){
 callCart[id]=Math.min(99,(Number(callCart[id])||0)+1);
 saveCallCart();
}
function updateCart(){
 const rows=cartEntries();
 updateDishQuantities();
 const empty=rows.length===0;
 const focusWasInside=$('cart-content').contains(document.activeElement);
 $('cart-empty').hidden=!empty;
 $('cart-content').hidden=empty;
 if(empty&&focusWasInside)$('cart-browse').focus({preventScroll:true});
 $('cart-count').textContent=rows.reduce((count,row)=>count+row.qty,0);
 $('cart-lines').innerHTML=rows.map(({dish:d,qty})=>{
  const id=escapeHTML(d.id);
  const name=escapeHTML(d.name);
  const note=escapeHTML(cartNote(d.id));
  return `<div class="cart-line" data-line-id="${id}"><div><strong>${name}</strong><small>${escapeHTML(d.price)} · ${escapeHTML(CATEGORIES[d.category])}</small>
  <details class="cart-note"><summary>${note?'Modifier la note':'Ajouter une note'}</summary><textarea rows="2" maxlength="200" data-note-id="${id}" aria-label="Note pour ${name}" placeholder="Par exemple : sans oignons">${note}</textarea></details>
  <p class="cart-note-preview" ${note?'':'hidden'}>${note}</p>${extraChoices(d,true)}</div>
  <div class="cart-qty"><button type="button" data-cart-id="${id}" data-delta="-1" aria-label="Retirer un ${name}">−</button><span>${qty}</span><button type="button" data-cart-id="${id}" data-delta="1" aria-label="Ajouter un ${name}">+</button></div></div>`;
 }).join('');
 updateCartTotals(rows);
}
function updateCartTotals(rows){
 const estimate=cartEstimate(rows);
 $('cart-delivery').textContent=estimate.deliveryText;
 $('cart-delivery').hidden=!rows.length||!estimate.deliveryText;
 $('cart-total').textContent=rows.length?estimateText(estimate):euro(0);
}
document.querySelector('.cart-fulfillment').addEventListener('change',updateCart);
$('cart-lines').addEventListener('change',event=>{
 const choices=event.target.closest('.extra-choices');
 if(!choices)return;
 storeExtras(choices.closest('[data-line-id]').dataset.lineId,choices);
 updateCartTotals(cartEntries());
});
$('cart-lines').addEventListener('input',event=>{
 const field=event.target.closest('[data-note-id]');
 if(!field)return;
 const note=field.value.trim();
 if(note)cartNotes[field.dataset.noteId]=note;
 else delete cartNotes[field.dataset.noteId];
 const line=field.closest('.cart-line');
 const preview=line.querySelector('.cart-note-preview');
 preview.textContent=note;
 preview.hidden=!note;
 line.querySelector('summary').textContent=note?'Modifier la note':'Ajouter une note';
 saveCartNotes();
});
function openCart(){document.getElementById('cart-overlay').hidden=false;syncPageScroll();updateCart();document.getElementById('cart-close').focus()}
function closeCart(){document.getElementById('cart-overlay').hidden=true;syncPageScroll();document.getElementById('cart-launch').focus()}
$('menu-grid').addEventListener('click',event=>{
 const button=event.target.closest('[data-add-id]');
 if(!button)return;
 addDishToCart(button.dataset.addId);
 updateCart();
});
document.getElementById('cart-launch').addEventListener('click',openCart);
document.getElementById('cart-close').addEventListener('click',closeCart);
$('cart-browse').addEventListener('click',closeCart);
document.getElementById('cart-overlay').addEventListener('click',e=>{if(e.target.id==='cart-overlay')closeCart()});
document.getElementById('cart-lines').addEventListener('click',e=>{const b=e.target.closest('[data-cart-id]');if(!b)return;const id=b.dataset.cartId;callCart[id]=Math.max(0,Math.min(99,(Number(callCart[id])||0)+Number(b.dataset.delta)));if(!callCart[id]){delete callCart[id];delete cartNotes[id];delete cartExtras[id];saveCartNotes();saveCartExtras()}saveCallCart();updateCart()});
document.getElementById('cart-clear').addEventListener('click',()=>{if(confirm('Vider toute votre liste ?')){callCart={};cartNotes=Object.create(null);for(const id of Object.keys(cartExtras))delete cartExtras[id];saveCartExtras();saveCallCart();saveCartNotes();updateCart()}});
function orderText(){
 const rows=cartEntries();
 const estimate=cartEstimate(rows);
 const lines=rows.map(({dish,qty})=>{
  const note=cartNote(dish.id);
  const extras=selectedExtras(dish).map(extra=>extra.name+' (+'+euro(extra.price/100)+')');
  return `${qty} × ${dish.name} — ${dish.price}${extras.length?'\n   Suppléments par portion : '+extras.join(', '):''}${note?'\n   Note : '+note:''}`;
 });
 return [
  "Bonjour O'Saveurs Braisées, je souhaite commander.",
  isDelivery()?'Mode : livraison':'Mode : à emporter',
  ...lines,
  estimate.deliveryText,
  'Total indicatif : '+estimateText(estimate),
  'Merci de me confirmer les disponibilités et le montant final.'
 ].filter(Boolean).join('\n');
}
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
const detailDialog=$('detail-overlay');
const detailPhoto=$('detail-photo');
let detailPhotoIndex=0;
const detailGallery=$('detail-gallery');
function showDetailPhoto(index){
  const images=selectedDish.images;
  const count=images.length;
  detailPhotoIndex=count?(index+count)%count:0;
  detailGallery.hidden=!count;
  $('detail-photo-controls').hidden=count<2;
  $('detail-photo-count').textContent=count>1?`${detailPhotoIndex+1} / ${count}`:'';
  detailPhoto.hidden=!count;
  detailPhoto.alt=count>1?`${selectedDish.name} — photo ${detailPhotoIndex+1}`:selectedDish.name;
  if(count)detailPhoto.src=images[detailPhotoIndex];
  else detailPhoto.removeAttribute('src');
}
detailPhoto.addEventListener('error',()=>{detailPhoto.hidden=true});
$('detail-photo-prev').addEventListener('click',()=>showDetailPhoto(detailPhotoIndex-1));
$('detail-photo-next').addEventListener('click',()=>showDetailPhoto(detailPhotoIndex+1));
let touchStart;
detailGallery.addEventListener('touchstart',event=>{touchStart=event.touches.length===1?event.touches[0]:null},{passive:true});
detailGallery.addEventListener('touchend',event=>{
  if(!touchStart||selectedDish?.images.length<2)return;
  const touch=event.changedTouches[0];
  const dx=touch.clientX-touchStart.clientX;
  const dy=touch.clientY-touchStart.clientY;
  touchStart=null;
  if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy))showDetailPhoto(detailPhotoIndex+(dx<0?1:-1));
},{passive:true});
function updateDetailPrice(){
 const names=checkedExtras($('detail-extras'));
 const extras=selectedDish.extras.filter(extra=>names.includes(extra.name)).reduce((total,extra)=>total+extra.price,0);
 const base=amount(selectedDish.price);
 $('detail-price').textContent=!extras?selectedDish.price:base===null?selectedDish.price+' + '+euro(extras/100):euro((Math.round(base*100)+extras)/100);
}
$('detail-extras').addEventListener('change',updateDetailPrice);
function openDetail(id,trigger=null){
  const d=catalog.find(x=>String(x.id)===String(id)&&x.visible&&!hiddenCategories.has(x.category));
  if(!d)return;
  selectedDish=d;
  if(!detailDialog.open)lastDetailFocus=trigger;
  document.getElementById('detail-category').textContent=CATEGORIES[d.category]||d.category;
  document.getElementById('detail-title').textContent=d.name;
  showDetailPhoto(0);
  document.getElementById('detail-description').textContent=d.description||'Pour connaître la composition et les options, contactez directement le restaurant.';
  showDishQuantity($('detail-list-qty'),d.id);
  $('detail-extras').innerHTML=extraChoices(d);
  updateDetailPrice();
  const share=$('detail-share');
  share.href='#plat='+encodeURIComponent(d.id);
  share.textContent='Partager ↗';
  if(!detailDialog.open){
    detailDialog.hidden=false;
    detailDialog.showModal();
  }
  detailDialog.scrollTop=0;
}
function closeDetail(){
  if(!detailDialog.open)return;
  detailDialog.close();
  detailDialog.hidden=true;
  if(location.hash.startsWith('#plat='))setDishHash('#carte');
  if(lastDetailFocus?.isConnected)lastDetailFocus.focus({preventScroll:true});
  selectedDish=null;
}
document.getElementById('menu-grid').addEventListener('click',e=>{
  const b=e.target.closest('[data-detail-id]');
  if(!b)return;
  e.preventDefault();
  openDetail(b.dataset.detailId,b);
});
document.getElementById('detail-close').addEventListener('click',closeDetail);
detailDialog.addEventListener('click',event=>{
 const bounds=detailDialog.getBoundingClientRect();
 if(event.target===detailDialog&&(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom))closeDetail();
});
detailDialog.addEventListener('cancel',event=>{event.preventDefault();closeDetail()});
document.getElementById('detail-add').addEventListener('click',()=>{if(!selectedDish)return;storeExtras(selectedDish.id,$('detail-extras'));addDishToCart(selectedDish.id);closeDetail();openCart()});
document.getElementById('detail-share').addEventListener('click',async e=>{e.preventDefault();if(!selectedDish)return;const url=new URL(location.href);url.hash='plat='+encodeURIComponent(selectedDish.id);try{await navigator.clipboard.writeText(url.href);e.target.textContent='✓ Lien copié'}catch{prompt('Copier le lien du plat',url.href)}});
window.addEventListener('hashchange',()=>{if(location.hash.startsWith('#plat=')){openDetail(safeDishId(location.hash.slice(6)))}});

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
 const defaultPhone=settings.phone;
 let settingsLoaded=false;
 const phoneNumber=phone=>String(phone).trim().replace(/[ ().-]/g,'');
 const validPhone=phone=>/^\+?[0-9 ().-]+$/.test(phone.trim())&&/^(?:0[1-9]\d{8}|\+33[1-9]\d{8}|\+(?!33)[1-9]\d{7,14})$/.test(phoneNumber(phone));
 const phoneHref=phone=>{const digits=phone.replace(/\D/g,'');return digits.startsWith('0')&&digits.length===10?'+33'+digits.slice(1):'+'+digits};
 function validate(input){
   if(!input||typeof input!=='object')throw Error('Fichier incorrect');
   const phone=String(input.phone||'').trim();
   if(!validPhone(phone))throw Error('Saisissez un numéro de téléphone complet, par exemple 01 41 36 01 93.');
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
   return {version:1,phone,hours,announcement:ann,delivery:input.delivery??null};
 }
 function renderPublic(){
   deliveryPricing=settings.delivery??null;
   updateCart();
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
 function toggleDeliveryFields(){
   const mode=el('delivery-mode').value;
   el('delivery-fee-field').hidden=mode!=='fixed'&&mode!=='threshold';
   el('delivery-threshold-field').hidden=mode!=='threshold';
 }
 el('delivery-mode').addEventListener('change',toggleDeliveryFields);
 function readDelivery(){
   const mode=el('delivery-mode').value;
   if(mode==='unconfigured')return null;
   if(mode==='free')return {fee:0,freeFrom:null};
   function cents(id,label){
     const value=el(id).value.trim().replace(',','.');
     const amount=Math.round(Number(value)*100);
     if(!/^\d{1,4}(?:\.\d{1,2})?$/.test(value)||amount<=0)throw Error(label+' : saisissez un montant supérieur à zéro.');
     return amount;
   }
   return {
     fee:cents('delivery-fee','Frais de livraison'),
     freeFrom:mode==='threshold'?cents('delivery-threshold','Livraison gratuite dès'):null
   };
 }
 function drawSettings(){
   const delivery=settings.delivery;
   el('delivery-mode').value=!delivery?'unconfigured':delivery.fee===0?'free':delivery.freeFrom===null?'fixed':'threshold';
   el('delivery-fee').value=delivery?.fee?String(delivery.fee/100).replace('.',','):'';
   el('delivery-threshold').value=delivery?.freeFrom?String(delivery.freeFrom/100).replace('.',','):'';
   toggleDeliveryFields();
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
 }
 function readForm(){
   const hours=[...document.querySelectorAll('.settings-day')].map((node,i)=>{
     const closed=node.querySelector('.hours-closed').checked;
     const slots=[...node.querySelectorAll('.settings-slot')].map(slot=>({open:slot.querySelector('.hours-open').value,close:slot.querySelector('.hours-close').value})).filter(x=>x.open||x.close);
     return {day:DAYS[i],closed,slots:closed?[]:slots};
   });
   return validate({phone:el('settings-phone').value,hours,delivery:readDelivery(),announcement:{
     enabled:el('announcement-enabled').checked,title:el('announcement-admin-title').value,
     message:el('announcement-message').value,start:el('announcement-start').value,end:el('announcement-end').value
   }});
 }
 el('settings-form').addEventListener('submit',e=>{
   e.preventDefault();try{readForm();el('settings-status').textContent='Les changements sont prêts. Appuyez sur « Enregistrer » pour les publier.'}
   catch(err){el('settings-status').textContent='Erreur : '+err.message}
 });
 el('settings-export').addEventListener('click',async()=>{
   const publish=el('admin-export');
   publish.disabled=true;
   try{if(!settingsLoaded)throw Error('Les informations ne sont pas chargées. Actualisez la page avant de publier.');const next=readForm();await apiSave('/api/site',next);settings=next;renderPublic();el('settings-status').textContent=SAVE_CONFIRMATION;expireSaveConfirmation();}
   catch(err){el('settings-status').textContent='Erreur : '+err.message}
   finally{publish.disabled=false}
   el('admin-action-status').textContent=el('settings-status').textContent;
 });
 async function load(){
   try{const response=await fetch(SITE_PATH,{cache:'no-store'});if(!response.ok)throw Error('HTTP '+response.status);const data=await response.json();settings=validate({...data,phone:typeof data.phone==='string'&&validPhone(data.phone)?data.phone:defaultPhone});settingsLoaded=true}
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
   if(panels[name].hidden)document.querySelector('.admin-main').scrollTop=0;
   if(['horaires','annonces','livraison'].includes(name))panels[name].appendChild(shared);
   document.getElementById('admin-delivery-fields').hidden=name!=='livraison';
   document.getElementById('admin-hours-fields').hidden=name!=='horaires';
   document.getElementById('admin-announcement-fields').hidden=name!=='annonces';
   buttons.forEach(b=>{const on=b.dataset.adminTab===name;b.classList.toggle('active',on);b.setAttribute('aria-selected',String(on));b.tabIndex=on?0:-1;if(on&&focus)b.focus()});
   Object.entries(panels).forEach(([key,p])=>p.hidden=key!==name);
   document.getElementById('admin-panel').dataset.currentTab=name;
   const titles={plats:'Gestion des plats',categories:'Gestion des catégories',horaires:'Horaires & téléphone',annonces:'Gestion des annonces',livraison:'Tarifs de livraison'};
   document.getElementById('admin-section-title').textContent=titles[name];
   document.getElementById('admin-export').textContent='Enregistrer';
   document.getElementById('admin-export').setAttribute('aria-label','Publier les modifications de '+titles[name]);
   document.getElementById('admin-action-status').textContent='';
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
 const ids=['admin-shell','cart-overlay','photo-lightbox'];
 const opened=ids.some(id=>{const n=document.getElementById(id);return n&&!n.hidden&&n.getClientRects().length>0});
 document.body.style.overflow=opened?'hidden':'';
 document.documentElement.style.overflow='';
}
const scrollOverlayIds=['admin-shell','cart-overlay','photo-lightbox'];
scrollOverlayIds.forEach(id=>{
 const n=document.getElementById(id);
 if(n)new MutationObserver(syncPageScroll).observe(n,{attributes:true,attributeFilter:['hidden']});
});
window.addEventListener('pageshow',syncPageScroll);
document.addEventListener('visibilitychange',syncPageScroll);
window.addEventListener('hashchange',()=>requestAnimationFrame(syncPageScroll));
document.addEventListener('keydown',e=>{
 if(e.key!=='Escape')return;
 const photo=document.getElementById('photo-lightbox');
 const cart=document.getElementById('cart-overlay');
 const admin=document.getElementById('admin-shell');
 if(!photo.hidden||!cart.hidden||!admin.hidden)
   requestAnimationFrame(syncPageScroll);
});
syncPageScroll();

const backToTop=$('back-to-top');
function updateBackToTop(){
 backToTop.hidden=window.scrollY<=8;
}
backToTop.addEventListener('click',event=>{
 event.preventDefault();
 window.scrollTo({top:0,behavior:'instant'});
});
window.addEventListener('scroll',updateBackToTop,{passive:true});
window.addEventListener('pageshow',updateBackToTop);
updateBackToTop();
