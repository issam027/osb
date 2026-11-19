const json=(data,status=200,extra={})=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store','x-content-type-options':'nosniff',...extra}});
const enc=new TextEncoder();
const hex=bytes=>Array.from(bytes).map(x=>x.toString(16).padStart(2,'0')).join('');
const sha=async s=>hex(new Uint8Array(await crypto.subtle.digest('SHA-256',enc.encode(s))));
const hmac=async(secret,value)=>{const k=await crypto.subtle.importKey('raw',enc.encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);return hex(new Uint8Array(await crypto.subtle.sign('HMAC',k,enc.encode(value))));};
const equal=(a,b)=>{if(typeof a!=='string'||typeof b!=='string'||a.length!==b.length)return false;let x=0;for(let i=0;i<a.length;i++)x|=a.charCodeAt(i)^b.charCodeAt(i);return x===0;};
const cookies=r=>Object.fromEntries((r.headers.get('cookie')||'').split(';').map(x=>x.trim().split('=').slice(0,2)).filter(x=>x.length===2));
async function authed(req,env){const token=cookies(req).osb_session;if(!token||!env.OSB_SESSION_SECRET)return false;const [expiry,sig]=token.split('.');if(!/^\d{13}$/.test(expiry)||Number(expiry)<Date.now()||!sig)return false;return equal(sig,await hmac(env.OSB_SESSION_SECRET,expiry));}
function checkOrigin(req){const o=req.headers.get('origin');return !!o&&o===new URL(req.url).origin;}
async function parse(req,max=100000){const raw=await req.text();if(raw.length>max)throw Error('Données trop volumineuses');return JSON.parse(raw);}
const photoPath=/^\/api\/photos\/([a-f0-9]{64})$/;
const validPhotoLink=url=>typeof url==='string'&&(/^https:\/\/[^\s]{1,1000}$/i.test(url)||photoPath.test(url));
const maxPhotoBytes=750000;
async function uploadPhoto(req,env){
 if(!checkOrigin(req))return json({error:'Origine refusée'},403);
 if(!await authed(req,env))return json({error:'Connexion requise'},401);
 if(req.headers.get('content-type')!=='image/webp'||!req.body)return json({error:'Photo invalide'},415);
 if(Number(req.headers.get('content-length'))>maxPhotoBytes)return json({error:'Photo trop volumineuse'},413);
 const reader=req.body.getReader();
 const buffer=new Uint8Array(maxPhotoBytes);
 let length=0;
 while(true){
  const {value,done}=await reader.read();
  if(done)break;
  if(length+value.byteLength>maxPhotoBytes){
   await reader.cancel();
   return json({error:'Photo trop volumineuse'},413);
  }
  buffer.set(value,length);
  length+=value.byteLength;
 }
 const bytes=buffer.subarray(0,length);
 const header=new DataView(bytes.buffer,0,length);
 if(length<20||header.getUint32(0)!==0x52494646||header.getUint32(8)!==0x57454250||header.getUint32(4,true)!==length-8)return json({error:'Photo invalide'},415);
 const id=hex(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes)));
 const key='osb:photo:'+id;
 if(!await env.OSB_KV.get(key,'arrayBuffer'))await env.OSB_KV.put(key,bytes.buffer.slice(0,length));
 return json({path:'/api/photos/'+id},201);
}
function validPhone(value){
 if(typeof value!=='string'||!/^\+?[0-9 ().-]+$/.test(value.trim()))return false;
 const number=value.trim().replace(/[ ().-]/g,'');
 return /^(?:0[1-9]\d{8}|\+33[1-9]\d{8}|\+(?!33)[1-9]\d{7,14})$/.test(number);
}
function validateMenu(x){if(!x||!Array.isArray(x.categories)||!Array.isArray(x.dishes)||x.categories.length>60||x.dishes.length>1000)throw Error('Carte incorrecte');const ids=new Set();for(const c of x.categories){if(!c||typeof c.id!=='string'||!/^[a-z0-9-]{2,40}$/.test(c.id)||ids.has(c.id)||typeof c.name!=='string'||!c.name.trim()||c.name.length>65||typeof c.visible!=='boolean')throw Error('Catégorie invalide');ids.add(c.id)}const dishIds=new Set();for(const d of x.dishes){if(!d||typeof d.id!=='string'||d.id.length>100||dishIds.has(d.id)||!ids.has(d.category)||typeof d.name!=='string'||!d.name.trim()||d.name.length>100||typeof d.price!=='string'||!d.price.trim()||d.price.length>30||typeof d.description!=='string'||d.description.length>500||typeof d.image!=='string'||(d.image&&!validPhotoLink(d.image))||typeof d.visible!=='boolean')throw Error('Plat invalide');if(d.images!==undefined&&(!Array.isArray(d.images)||d.images.length>8||d.images.some(url=>!validPhotoLink(url))))throw Error('Photos du plat invalides');if(d.extras!==undefined){
 if(!Array.isArray(d.extras)||d.extras.length>12||d.extras.some(extra=>!extra||typeof extra.name!=='string'||!extra.name.trim()||extra.name.length>60||!Number.isSafeInteger(extra.price)||extra.price<0||extra.price>999999)||new Set(d.extras.map(extra=>extra.name.trim().toLocaleLowerCase('fr'))).size!==d.extras.length)throw Error('Suppléments invalides');
}dishIds.add(d.id)}return {version:2,restaurant:'O Saveurs Braisees',categories:x.categories,dishes:x.dishes};}
function validateDelivery(delivery){
 if(delivery===undefined||delivery===null)return null;
 const {fee,freeFrom}=delivery;
 const validAmount=value=>Number.isSafeInteger(value)&&value>0&&value<=999999;
 if(fee===0&&freeFrom===null)return {fee,freeFrom};
 if(!validAmount(fee)||(freeFrom!==null&&!validAmount(freeFrom)))throw Error('Tarif de livraison invalide');
 return {fee,freeFrom};
}
function validateSite(x){if(!x||!validPhone(x.phone)||!Array.isArray(x.hours)||x.hours.length!==7)throw Error('Informations invalides');const days=['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];for(let i=0;i<7;i++){const h=x.hours[i];if(!h||h.day!==days[i]||typeof h.closed!=='boolean'||!Array.isArray(h.slots)||h.slots.length>2||(!h.closed&&!h.slots.length))throw Error('Horaires invalides');for(const s of h.slots){if(!s||!/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(s.open)||!/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(s.close)||s.open>=s.close)throw Error('Créneau invalide')}}const a=x.announcement;if(!a||typeof a.enabled!=='boolean'||typeof a.title!=='string'||a.title.length>100||typeof a.message!=='string'||a.message.length>600||typeof a.start!=='string'||typeof a.end!=='string')throw Error('Annonce invalide');for(const d of [a.start,a.end])if(d&&!/^\d{4}-\d{2}-\d{2}$/.test(d))throw Error('Date invalide');if(a.enabled&&(!a.title||!a.message||!a.start||!a.end))throw Error('Annonce incomplète');if(a.start&&a.end&&a.start>a.end)throw Error('Dates inversées');return {version:1,phone:x.phone,hours:x.hours,announcement:a,delivery:validateDelivery(x.delivery)};}
export default {async fetch(req,env){const u=new URL(req.url),path=u.pathname;try{
if(path.startsWith('/api/')){
if(!env.OSB_KV)return json({error:'KV non configuré'},503);
if(path==='/api/photos'&&req.method==='POST')return await uploadPhoto(req,env);
const photo=path.match(photoPath);
if(photo&&(req.method==='GET'||req.method==='HEAD')){
 const bytes=await env.OSB_KV.get('osb:photo:'+photo[1],'arrayBuffer');
 if(!bytes)return json({error:'Photo indisponible'},404);
 return new Response(req.method==='HEAD'?null:bytes,{headers:{
  'content-type':'image/webp','content-length':String(bytes.byteLength),
  'cache-control':'public, max-age=31536000, immutable','x-content-type-options':'nosniff'
 }});
}

if(path==='/api/menu'&&req.method==='GET'){const v=await env.OSB_KV.get('osb:menu');if(v)return new Response(v,{headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});return env.ASSETS.fetch(new Request(new URL('/assets/data/menu.json',u)));}
if(path==='/api/site'&&req.method==='GET'){const v=await env.OSB_KV.get('osb:site');if(v)return new Response(v,{headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});return env.ASSETS.fetch(new Request(new URL('/assets/data/site.json',u)));}
if(path==='/api/auth/session'&&req.method==='GET')return json({authenticated:await authed(req,env)});
if(path==='/api/auth/login'&&req.method==='POST'){if(!checkOrigin(req))return json({error:'Origine refusée'},403);if(!env.OSB_ADMIN_PASSWORD||!env.OSB_SESSION_SECRET)return json({error:'Identifiants serveur non configurés'},503);const {username,password}=await parse(req,3000);const ok=equal(await sha(String(password||'')),await sha(env.OSB_ADMIN_PASSWORD))&&username==='admin';if(!ok)return json({error:'Identifiants incorrects'},401);const expiry=String(Date.now()+8*3600*1000);const sig=await hmac(env.OSB_SESSION_SECRET,expiry);return json({authenticated:true},200,{'set-cookie':`osb_session=${expiry}.${sig}; Path=/api; HttpOnly; Secure; SameSite=Strict; Max-Age=28800`});}
if(path==='/api/auth/logout'&&req.method==='POST'){if(!checkOrigin(req))return json({error:'Origine refusée'},403);return json({authenticated:false},200,{'set-cookie':'osb_session=; Path=/api; HttpOnly; Secure; SameSite=Strict; Max-Age=0'});}
if((path==='/api/menu'||path==='/api/site')&&req.method==='PUT'){if(!checkOrigin(req))return json({error:'Origine refusée'},403);if(!await authed(req,env))return json({error:'Connexion requise'},401);const data=await parse(req,path==='/api/menu'?1000000:100000);const valid=path==='/api/menu'?validateMenu(data):validateSite(data);await env.OSB_KV.put(path==='/api/menu'?'osb:menu':'osb:site',JSON.stringify(valid));return json({saved:true,notice:'Modifications enregistrées. Leur diffusion mondiale peut prendre un peu de temps.'});}
return json({error:'Route inconnue'},404);
}
return env.ASSETS.fetch(req);
}catch(e){return json({error:e instanceof SyntaxError?'JSON incorrect':e.message||'Erreur serveur'},400)} }};
