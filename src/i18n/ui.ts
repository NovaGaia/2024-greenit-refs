export const showDefaultLang = true;

const siteURL = process.env.SITE_URL || "http://localhost:1234";
const pathPrefix = "/wp";

export const languages = {
  en: "English",
  fr: "Français",
  es: "Espagnol",
};

export const code_languages = ["en", "fr", "es"];

export const defaultLang = "fr";

export const ui = {
  es: {
    "nav.baseline": "Mejores prácticas de ecodiseño para WordPress",
    "nav.back.home": "Regreso a casa",
    "nav.fiches": "Mejores prácticas",
    "nav.lexique": "Léxico",
    "nav.contrib": "Contribuir",
  },
  en: {
    "nav.baseline": "Ecodesign best practices for WordPress",
    "nav.back.home": "Back to home",
    "nav.fiches": "Best practices",
    "nav.lexique": "Lexicon",
    "nav.contrib": "Contribute",
  },
  fr: {
    // global
    pathPrefix: pathPrefix,
    "refName.min": "RWP",
    "repo.url": "https://github.com/cnumr/best-practices-wordpress",
    "repo.branch": "main",
    // SEO
    "seo.site_name": "Les bonnes pratiques d'écoconception pour WordPress",
    "seo.default.description":
      "Les bonnes pratiques d'écoconception pour WordPress",
    "seo.url": siteURL + pathPrefix,
    "seo.titleTemplate": "%s | Collectif Green IT",
    "seo.fb.image.url": "/asso-greenit-share-fb.png",
    "seo.tw.image.url": "/asso-greenit-share-tw.png",
    "seo.image.alt": "Les bonnes pratiques d'écoconception pour WordPress",
    "seo.noRobots": true,
    // BacktoTop
    "backToTop.title": "Retour en haut de page",
    // header
    "nav.refName": "WordPress",
    "nav.back.home": "Retour à l'accueil",
    "nav.fiches.label": "Bonnes pratiques",
    "nav.fiches.title": "Bonnes pratiques",
    "nav.lexique.label": "Lexique",
    "nav.lexique.title": "Lexique",
    "nav.personnas.label": "Personnas",
    "nav.personnas.title": "Personnas",
    "nav.contrib.label": "Contribuez !",
    "nav.contrib.title":
      "Voir la méthode de contribution sur le GitHub du CNUMR",
    "nav.contrib.icon.title": "Voir le repository GitHub de CNUMR",
    "nav.secondary.mentionsLegale.label": "Mentions légales",
    "nav.secondary.mentionsLegale.title": "Les Mentions légales du site.",
    // footer
    "footer.asso.label": "Association Green IT",
    "footer.logo.title":
      "Aller sur le site de l'assiciation GreenIT (site externe)",
    "footer.logo.alt":
      "Logo association Green It - lien sortant vers le site l'association GreenIT",
    "footer.licence.type": "Sous licence CC BY-NC-ND 4.0",
    "footer.licence.link.title":
      "Consulter le contenu de la licence CC BY-NC-ND 4.0 (site externe)",
    // contribCTA
    "contribCTA.errorText":
      "Vous avez repérez une coquille ou vous souhaitez contribuer à rendre WordPress plus éco-responsable ?",
    "contribCTA.discuss": "Venez sur le repo pour lancer une discussion sur",
    // Bonnes pratiques
    "fiches.title": "Bonnes pratiques",
    "fiches.description":
      "Les Fiches de Bonnes pratiques pour rendre WordPress plus respectueux de l'environnement.",
    // Lexique
    "lexique.title": "Lexique",
    "lexique.description": "TODO",
    // Personnas
    "personnas.title": "Personnas",
    "personnas.description": "TODO",
  },
} as const;
