# O’Saveurs Braisées (OSB)

Site du restaurant O’Saveurs Braisées. Il présente le menu, les horaires et les annonces. L’Espace pro permet de gérer ces informations depuis le navigateur.

[Voir le site](https://osaveursbraisees.ijoober.workers.dev/)

## Fonctionnement

- Le Worker Cloudflare `osaveursbraisees` sert le site depuis [`public/`](public/) et les routes `/api/*` depuis [`src/worker.js`](src/worker.js).
- Le namespace `OSB_DATA`, relié au Worker par le binding `OSB_KV`, stocke les données publiées sous les clés `osb:menu` et `osb:site`.
- Quand une clé KV est absente, le Worker charge le [menu](public/assets/data/menu.json) ou les [informations du site](public/assets/data/site.json) depuis le dépôt. Le premier enregistrement dans l’Espace pro crée la clé correspondante.

## Déploiement depuis Cloudflare

1. Dans **Workers & Pages → osaveursbraisees → Settings → Builds**, vérifie que le dépôt `issam027/osb` est connecté, avec `main` comme branche de production, la racine du dépôt comme répertoire et `npx wrangler deploy` comme commande de déploiement.
2. Dans **Settings → Variables and Secrets**, configure les deux secrets d’exécution `OSB_ADMIN_PASSWORD` et `OSB_SESSION_SECRET`. Le premier est le mot de passe de l’identifiant `admin`. Le second est une valeur aléatoire distincte qui signe les sessions. Saisis ces valeurs dans Cloudflare et garde-les hors du dépôt.
3. Après un push sur `main`, vérifie dans **Builds** que Cloudflare a pris en compte le commit. Si un filtre de chemins exclut `README.md`, ce changement seul ne déclenchera pas de build.
4. Dans **Deployments**, vérifie que la nouvelle version reçoit le trafic de production. Ouvre ensuite le site et teste le menu, les horaires et la connexion à l’Espace pro.

Si l’Espace pro affiche **Identifiants serveur non configurés**, vérifie que la version active dispose des deux secrets d’exécution. Les secrets de build seuls sont indisponibles au Worker pendant une requête.

Le [guide de déploiement](DEPLOIEMENT.md) couvre aussi la sauvegarde, la migration des données KV et le déploiement avec Wrangler depuis un terminal.
