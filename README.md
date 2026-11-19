# O’Saveurs Braisées

Site du restaurant de poulet braisé à Meudon-la-Forêt. Les clients consultent la carte, préparent leur liste et passent commande par téléphone. Le restaurant gère les plats, les horaires, les annonces et les tarifs de livraison dans l’Espace pro, y compris depuis un téléphone.

[Ouvrir le site](https://osaveursbraisees.ijoober.workers.dev/) · [Voir la carte](https://osaveursbraisees.ijoober.workers.dev/#carte) · [Horaires et itinéraire](https://osaveursbraisees.ijoober.workers.dev/#infos)

**Adresse** — 8 rue Saint-Exupéry, 92360 Meudon-la-Forêt.

## Préparer une commande

1. Filtre la carte par catégorie, puis ouvre **Découvrir le plat** pour voir sa composition, son prix et ses photos. La fiche peut être partagée par lien. Les photos défilent avec les flèches ou par balayage sur mobile.
2. Ajoute les plats à **Ma liste**. Ajuste les quantités et ajoute au besoin une note par ligne, par exemple « sans oignons ». La liste et les notes sont conservées dans le navigateur.
3. Choisis **À emporter** ou **Livraison**. Le site affiche un total indicatif comprenant les suppléments sélectionnés et les frais de livraison configurés. Les prix ou frais inconnus restent à confirmer.
4. Appelle le restaurant pour confirmer les plats, le montant et les modalités. **Copier ma liste** inclut les quantités, les notes et le mode choisi. Le site ne transmet aucune commande et ne collecte aucun paiement.

Quand la liste est vide, l’écran illustré propose **Voir la carte**. La flèche **↑** remonte en haut de la page en un appui.

## Gérer le site dans l’Espace pro

Ouvre **Espace pro** en bas du site et connecte-toi avec le compte `admin`. Les onglets restent en haut de la fenêtre, et **Enregistrer** et **Déconnexion** restent accessibles en bas. La croix ferme la fenêtre en gardant la session ouverte.

| Onglet | Ce que tu peux modifier |
| --- | --- |
| **Plats** | Ajouter, modifier, masquer ou supprimer un plat. Saisis le prix sans symbole, par exemple `12,50`. Tu peux choisir des photos sur ton appareil ou coller des liens, jusqu’à huit photos par plat. La première photo illustre la carte. Configure aussi les suppléments autorisés et leur prix. |
| **Catégories** | Ajouter, renommer, réordonner ou masquer les catégories. Masquer une catégorie retire aussi ses plats de la carte publique en les conservant dans l’Espace pro. |
| **Horaires** | Modifier le téléphone public et jusqu’à deux créneaux par jour. La case **Fermé** masque les champs d’heures du jour. |
| **Annonces** | Programmer un bandeau public avec un titre, un message et une période. Les dates de début et de fin sont incluses. Pour retirer l’annonce, désactive-la et enregistre. |
| **Livraison** | Choisir la livraison gratuite, un tarif fixe, un tarif offert à partir d’un seuil ou un tarif à confirmer par téléphone. Le seuil s’applique au sous-total des plats. |

Dans l’éditeur de plat, **Valider le plat** prépare le changement. Utilise ensuite **Enregistrer** en bas de l’Espace pro pour le publier. Les changements peuvent prendre un court délai avant d’être visibles pour tous.

Certaines photos de la galerie du restaurant servent de photos par défaut. Les photos saisies dans l’Espace pro ont priorité. Choisis de préférence des images qui correspondent au plat et à sa portion.

## Structure et stockage

| Fichier ou dossier | Rôle |
| --- | --- |
| [`public/index.html`](public/index.html) | Site public, fiches des plats, liste de commande et Espace pro. |
| [`public/assets/css/site.css`](public/assets/css/site.css) et [`public/assets/js/site.js`](public/assets/js/site.js) | Mise en page responsive et interactions. |
| [`public/assets/data/`](public/assets/data/) | Carte et informations initiales, utilisées quand les données publiées sont absentes. |
| [`src/worker.js`](src/worker.js) | Lecture des données publiques, validation des modifications et sessions de l’Espace pro. |
| [`wrangler.jsonc`](wrangler.jsonc) | Configuration du Worker et de son stockage. |

Le Worker Cloudflare `osaveursbraisees` sert les fichiers publics et les routes `/api/*`. Le binding `OSB_KV` relie le Worker au namespace `OSB_DATA`. `osb:menu` contient les plats et catégories. `osb:site` contient le téléphone, les horaires, l’annonce et la livraison. Les photos envoyées depuis l’Espace pro sont compressées en WebP et stockées séparément sous des clés `osb:photo:*`. Le menu conserve leurs chemins. Les écritures nécessitent une session administrateur. Un redéploiement du code conserve les données publiées dans KV.

## Développer et déployer

Avec Node.js et npm, lance les commandes suivantes à la racine du dépôt.

```sh
npm install
npm run dev
```

Pour tester la connexion en local, définis des valeurs de test pour `OSB_ADMIN_PASSWORD` et `OSB_SESSION_SECRET` dans un fichier `.dev.vars` local. Garde ce fichier hors de Git.

La production utilise le Worker existant dans le compte Cloudflare du restaurant.

1. Dans **Workers & Pages → osaveursbraisees → Settings → Builds**, connecte `issam027/osb` à la branche de production `main`. Utilise la racine du dépôt et la commande `npx wrangler deploy`.
2. Dans **Settings → Variables and Secrets** du Worker, définis `OSB_ADMIN_PASSWORD` et `OSB_SESSION_SECRET` comme secrets d’exécution. Utilise un mot de passe unique et une clé de session aléatoire distincte. Les variables de **Builds** servent au déploiement. Les secrets d’exécution permettent au Worker de traiter la connexion.
3. Après un push, vérifie le résultat dans **Builds**, puis la version active dans **Deployments**. Si les filtres de chemins excluent le README, une mise à jour de documentation seule peut être ignorée.
4. Sur la version déployée, vérifie la carte, les photos, la liste avec et sans articles, les tarifs de livraison et la connexion à l’Espace pro.

Le [guide de déploiement](DEPLOIEMENT.md) décrit aussi le déploiement depuis un terminal, la migration et la sauvegarde des données KV.
