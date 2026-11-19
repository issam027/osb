# OSB — O'Saveurs Braisées — V24.1, Worker + KV

## Convention de nommage OSB

- **Code projet :** `OSB`
- **Nom du Worker Cloudflare :** `osaveursbraisees` (conservé pour ne pas modifier l’URL existante)
- **Namespace KV :** `OSB_DATA`
- **Binding Worker :** `OSB_KV`
- **Clés KV :** `osb:menu`, `osb:site`
- **Secrets Worker :** `OSB_ADMIN_PASSWORD`, `OSB_SESSION_SECRET`
- **Cookie :** `osb_session`
- **Routes API :** `/api/*` (inchangées pour conserver la compatibilité du site)

## Avant de commencer

Cette archive remplace le déploiement « fichiers statiques uniquement » par un Worker qui sert les fichiers du dossier `public/` et une API sécurisée. Elle conserve le nom `osaveursbraisees` dans `wrangler.jsonc` pour réutiliser le Worker existant dans le même compte Cloudflare. **Sauvegardez d'abord votre V23 et les données actuelles**. Le déploiement doit être fait via Wrangler (terminal), pas en téléversant seulement le ZIP.

## 1. Préparer les outils

Installez Node.js LTS sur votre ordinateur, décompressez cette archive, ouvrez un terminal dans son dossier et lancez :

```bash
npm install
npx wrangler login
```

Connectez-vous au **compte Cloudflare qui possède** `osaveursbraisees.ijoober.workers.dev`.

## 2. Créer le stockage KV

Dans Cloudflare > Workers & Pages > KV, créez un namespace nommé `OSB_DATA`. Copiez son **Namespace ID**. Dans `wrangler.jsonc`, remplacez `REMPLACER_PAR_ID_OSB_KV` par cet identifiant. Vous pouvez aussi créer le namespace via `npx wrangler kv namespace create OSB_DATA` et récupérer l'ID affiché.

## 3. Configurer les secrets du Worker

Exécutez les commandes suivantes **dans le dossier du projet** :

```bash
npx wrangler secret put OSB_ADMIN_PASSWORD
npx wrangler secret put OSB_SESSION_SECRET
```

Pour `OSB_ADMIN_PASSWORD`, saisissez un mot de passe personnel **long et unique** (idéalement 20 caractères ou plus). L'identifiant de connexion sera `admin`.

Pour `OSB_SESSION_SECRET`, utilisez une autre valeur **aléatoire et distincte**, idéalement 32 octets ou plus. Exemple pour la générer localement avec Node :

```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

Copiez la sortie comme secret de session. **Ne mettez aucun de ces secrets dans les fichiers du site, le JSON ou le dépôt Git.** La commande `secret put` peut déployer une version du Worker ; vérifiez que le site reste accessible avant la suite.

## 4. Déployer

```bash
npm run deploy
```

Le nom `osaveursbraisees` cible normalement l'adresse existante du compte. Vérifiez le nom et le compte avant de confirmer tout remplacement. Si Cloudflare vous signale un Worker existant avec une autre configuration, sauvegardez cette configuration et ne forcez pas le déploiement avant de l'avoir vérifiée.

## 5. Tester avant toute modification

- Ouvrez `https://osaveursbraisees.ijoober.workers.dev/` en navigation privée : le menu et les horaires doivent s'afficher.
- Ouvrez l'Espace pro. Connectez-vous avec **admin** et votre mot de passe.
- Modifiez un plat, cliquez sur **Enregistrer**. Rechargez la page et vérifiez le changement.
- Testez aussi l'onglet Catégories, Horaires et Annonces. Pour les horaires/annonces, les deux onglets modifient le même objet `osb:site`.
- Déconnectez-vous. Essayez une mauvaise connexion : elle doit être refusée.

## 6. Conservation et sauvegarde

Le premier chargement utilise les fichiers `public/assets/data/menu.json` et `site.json` comme valeurs initiales si KV est vide. **Aucune migration n'est nécessaire** si les données actuellement publiées sont celles de la V23 incluse dans l'archive. Si votre site en ligne contient des modifications plus récentes, remplacez ces deux fichiers avant le premier déploiement, ou restaurez leurs sauvegardes JSON dans les clés KV correspondantes.

Les données publiées résident ensuite dans KV (`osb:menu`, `osb:site`). Les fichiers statiques restent des valeurs de secours. Pour sauvegarder, utilisez la console Cloudflare KV ou exportez les données via l'API publique `/api/menu` et `/api/site` ; les sauvegardes de données sont distinctes des archives du code.

## Sécurité et limites

- Le mot de passe est conservé comme **secret du Worker**, pas en KV. C'est plus sûr que de le mettre dans un namespace KV accessible par le code. Les sessions sont des cookies HttpOnly/Secure/SameSite signés côté serveur, valables 8 heures.
- L'API vérifie l'origine, l'authentification et la structure des données avant d'écrire. Le site ne contient plus de connexion `root/root`.
- Pour protéger la connexion des essais répétés, activez une règle de limitation de débit Cloudflare sur `/api/auth/login` (WAF / Rate limiting selon votre offre). Cette archive ne contient pas de limitation anti-bruteforce distribuée.
- **KV est à cohérence éventuelle** : la propagation mondiale des changements peut prendre plusieurs dizaines de secondes ; une modification n'est pas garantie visible immédiatement depuis tous les lieux.
- Les modifications concurrentes par plusieurs administrateurs peuvent s'écraser. Cette version vise une administration par une seule personne.
- Les images de plats continuent de dépendre des URLs HTTPS déjà utilisées.
- Le site doit être servi en HTTPS pour que la session fonctionne.

## Si vous avez déjà installé la V24 précédente

Si vous aviez créé `OSAVEURS_DATA` et enregistré des données sous `restaurant:menu` et `restaurant:site`, **ne supprimez pas ces données**. Copiez les deux valeurs vers `osb:menu` et `osb:site` dans le namespace `OSB_DATA` avant de passer à cette version. Les secrets `ADMIN_PASSWORD` et `SESSION_SECRET` doivent être recréés sous leurs noms `OSB_...`. Si la V24 n’a pas été déployée, aucune migration n’est nécessaire.
