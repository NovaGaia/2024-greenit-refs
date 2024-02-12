# Gestion de référentiels GreenIT

![GreenIT](./src/assets/logo-asso.png)

## Présentation

Ce projet est un template de site pour gérer les référentiels du collectif.

Il utilise cette stack :

- [Astro](https://astro.build/)
- [TinaCMS](https://tinacms.org/)
- [Devcontainer](https://code.visualstudio.com/docs/remote/containers)
- [TailwindCSS](https://tailwindcss.com/)

## Astro

Il sert à générer le site front servant les fiches.

C'est un site static.

## TinaCMS

C'est le CMS qui sert à gérer les fiches. Il tourne en local et permet de modifier les fiches en markdown.

Vous pourrez éditer les fiches en français, anglais et espagnol.

Ce CMS permet aussi d'ajouter des médias aux fiches.

## Devcontainer

C'est un container docker qui permet de lancer le site Astro et TinaCMS.

## TailwindCSS

C'est un framework CSS qui permet de gérer le style du site.

## Installation

### Prérequis

- [Docker](https://www.docker.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Le plugin VScode Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Installation

1. Cloner le projet
2. Ouvrir le projet dans Visual Studio Code
3. Ouvrir le dossier dans un container
4. Lancer le container
5. Ouvrir un terminal dans le container
6. Installer les dépendances

```bash
npm install
```

> Il n'y a pas besoin de fichier de configuration `.env`.

### Lancement

Lancer le site Astro et TinaCMS

```bash
npm run dev
```

- Pour voir le site : [http://localhost:4321/](http://localhost:4321/)
- Pour voir TinaCMS : [http://localhost:4321/admin/index.html](http://localhost:4321/admin/index.html)

**Arreter le site Astro et TinaCMS**

dans le terminal faites `[ctrl]`+`[c]`

### Ajout ou modification d'une fiche

Dans VSCode, créez une nouvelle branche à partir de la branche `main`.

Dans TinaCMS, ajoutez ou modifiez une fiche.

Une fois les modifications terminées, créez un commit et un push.

Créez une pull request et demandez une revue.

### Tester les modifications

Avant de push sur GitHub

```bash
npm run build
```

### Déploiement

TinaCMS est un CMS qui se lance en local. Il n'est pas possible de déployer directement. Tout sera géré par GitHub.

Push vos modifications sur votre branche et faites une pull request vers la branch main.

> Pour ne pas déclancher le build, ajouter `[skip ci]` (avec les crochets) à votre message de commit.

Le site est déployé sur infomaniak quand il y un merge sur la branch `main`.

#### Configuration GitHub (a faire évoluer...)

Créer ces variables d'environnements sur GitHub pour les GitHub Actions :

- `BASE_URL`: `https://ref.greenit.fr/wp/|https://ref.greenit.fr/web/`
- `PUBLIC_BASE`: `wp|rwp`
- `PUBLIC_REF_NAME`: `RWP|RWEB`
- `PUBLIC_REPO_BRANCH`: `main`
- `PUBLIC_REPO_URL`: `https://github.com/cnumr/best-practices-wordpress|https://github.com/cnumr/best-practices`
- `SITE_URL`: `https://ref.greenit.fr`
- `PUBLIC_SITE_TITLE`: n'oubliez pas de stringifier et echapper les `"` ➡️  `{\"es\":{\"short\":\"WordPress\",\"long\":\" para WordPress\"},\"en\":{\"short\":\"WordPress\",\"long\":\" for WordPress\"},\"fr\":{\"short\":\"WordPress\",\"long\":\" pour WordPress\"}}`