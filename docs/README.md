---
label: Intro
icon: home
order: 1000
---

# Générateur de site de référentiel

Afin de simplifier la consultation des référentiels de bonnes pratiques du Green IT, nous avons mis en place un générateur de site statique. Ce site est généré à partir des fichiers de données des référentiels.

Ce générateur est basé sur [Astro](https://astro.build/), un framework de développement web et sur un CMS headless [TinaCMS](https://tinacms.org/).

Le site généré est un site statique, il peut être hébergé sur n'importe quel serveur web.

Il propose ces fonctionnalités :

- Affichage des référentiels de bonnes pratiques
- Affichage des fiches d'un lexique
- Les fiches du lexique s'affichent automatiquement dans des bulles contextuelles dans les bonnes pratiques
- Un moteur de recherche permet de trouver les fiches du référentiel ou les fiches du lexique
- Les fiches de bonnes pratiques peuvent être filtrées par plusieurs catégorie sur la page "Bonnes pratiques"
- L'interface du site est multilingue (français, espagol et anglais), les fiches et lexiques peuvent être traduits dans ces langues. D'autres langues peuvent être ajoutées facilement.

## Usage

TinaCMS permet de modifier les données des référentiels directement dans le navigateur. Pour cela, il faut cliquer sur le bouton "Edit this page" en haut de la page lorsque le site est lancé en local.
