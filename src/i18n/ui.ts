function getTranslatedTitle(lang: string, key: string = "short") {
  const SITE_TITLE: object = JSON.parse(
    import.meta.env.PUBLIC_SITE_TITLE || process.env.SITE_TITLE,
  );
  return `${SITE_TITLE[lang][key] || SITE_TITLE[defaultLang][key] || "TBD"}`;
}

export const showDefaultLang = true;

const siteURL =
  import.meta.env.SITE_URL || process.env.SITE_URL || "http://localhost:1234";
const PUBLIC_BASE =
  import.meta.env.PUBLIC_BASE || process.env.PUBLIC_BASE
    ? "/" + (import.meta.env.PUBLIC_BASE || process.env.PUBLIC_BASE)
    : "/";

export const languages = {
  en: "🇬🇧 English",
  fr: "🇫🇷 Français",
  es: "🇪🇸 Espagnol",
};

export const code_languages = ["en", "fr", "es"];

export const defaultLang = "fr";

export const ui = {
  es: {
    // SEO
    "seo.site_name": "Buenas prácticas de ecodiseño",
    "seo.default.description":
      "Buenas prácticas de ecodiseño" + getTranslatedTitle("es", "long"),
    "seo.url": siteURL + PUBLIC_BASE,
    "seo.titleTemplate": "%s | Colectivo de TI Verde",
    "seo.fb.image.url": "/asso-greenit-share-fb.png",
    "seo.tw.image.url": "/asso-greenit-share-tw.png",
    "seo.image.alt":
      "Buenas prácticas de ecodiseño" + getTranslatedTitle("es", "long"),
    "seo.noRobots": true,

    // src/components/BackToTop.astro
    "Retour en haut de page": "Volver al principio de la página",

    // src/components/Header.astro
    "Retour à l'accueil": "Retorno al inicio",

    // src/pages/[lang]/fiches/index.astro && src/components/fiches/FichesListView.astro
    "Bonnes pratiques": "Buenas prácticas",
    "Consulter les Bonnes pratiques": "Consulta las Mejores Prácticas",

    // src/pages/[lang]/lexique/index.astro && src/components/lexique/LexiqueListView.astro
    Lexique: "Léxico",
    "Consulter le Lexique": "Consulta el glosario",
    "Consulter les Personas": "Ver personas",

    // src/pages/[lang]/personas/index.astro
    Personas: "Personas",
    "Contribuez !": "¡Contribuir!",
    "Voir la méthode de contribution sur le GitHub du CNUMR":
      "Vea el método de contribución en CNUMR GitHub",
    "Voir le repository GitHub de CNUMR": "Ver el repositorio CNUMR GitHub",

    // src/components/Footer.astro
    "Mentions légales": "Notas legales",
    "Les mentions légales du site.": "Los avisos legales del sitio.",
    "Association Green IT": "Asociación de TI verde",
    "Aller sur le site de l'association GreenIT (site externe)":
      "Ir al sitio web de la asociación GreenIT (sitio externo)",
    "Logo association Green IT - lien sortant vers le site l'association Green IT":
      "Logotipo de la asociación Green IT: enlace saliente al sitio web de la asociación Green IT",
    "Sous licence CC BY-NC-ND 4.0": "Licenciado bajo CC BY-NC-ND 4.0",

    // src/components/Licence.astro
    "Consulter le contenu de la licence CC BY-NC-ND 4.0 (site externe)":
      "Ver el contenido de la licencia CC BY-NC-ND 4.0 (sitio externo)",

    // A continuer...

    // src/components/ContributeCTA.astro
    "Vous avez repérez une coquille ou vous souhaitez contribuer ?":
      "Vous avez repérez une coquille ou vous souhaitez contribuer ?",
    "Venez sur le repo pour lancer une discussion sur":
      "Venez sur le repo pour lancer une discussion sur",
    "la fiche": "la fiche",
    "la fiche du lexique": "la fiche du lexique",
    "le persona": "le persona",

    // src/pages/[lang]/fiches/index.astro
    "Les Fiches de Bonnes pratiques pour rendre le numérique plus respectueux de l'environnement.":
      "Les Fiches de Bonnes pratiques pour rendre le numérique plus respectueux de l'environnement.",

    // src/pages/[lang]/lexique/index.astro
    "Les termes utilisés pour rendre le numérique plus respectueux de l'environnement.":
      "Les termes utilisés pour rendre le numérique plus respectueux de l'environnement.",

    // src/pages/[lang]/personas/index.astro
    "Les profils que nous ciblons avec ce référentiel.":
      "Les profils que nous ciblons avec ce référentiel.",

    // src/components/mdx/MDXLexiqueTooltip.astro
    "Définition manquante, vérifier le formatage du lien ou si la fiche existe dans le Lexique.":
      "Définition manquante, vérifier le formatage du lien ou si la fiche existe dans le Lexique.",

    // src/components/CardView.astro
    Fort: "Fort",
    Moyen: "Moyen",
    Faible: "Faible",

    // src/components/fiches/FichesFilter.astro
    Afficher: "Afficher",
    Masquer: "Masquer",
    "les filtres": "les filtres",
    Catégories: "Catégories",

    // src/components/fiches/FichesTableValidation.astro
    "Principe de validation": "Principe de validation",
    "Le nombre": "Le nombre",
    "est inférieur ou égal à": "est inférieur ou égal à",

    // src/components/fiches/FicheViewPaginate.astro
    "Navigation entre les bonnes pratiques":
      "Navigation entre les bonnes pratiques",
    "Priorité d'implémentation": "Priorité d'implémentation",
    "Impact environnemental": "Impact environnemental",

    // src/components/FichesMetasDisplay.astro
    "Sommaire :": "Sommaire :",

    // src/components/LanguagePicker.astro
    "Language picker": "Sélecteur de langue",
    "Changer de langue": "🇬🇧 / 🇫🇷",

    // Scope
    scope: "Périmètre",
    cache: "Cache",
    documents: "Documents",
    features: "Fonctionnalités",
    images: "Images",
    "front-office": "Front-office",
    hosting: "Hébergement",
    performance: "Performance",
    security: "Sécurité",
    themes: "Thèmes",
    seo: "SEO",
    storage: "Stockage",
    "videos-sounds": "Vidéos/Audios",
    // Lifecycle
    lifecycle: "Cycle de vie",
    "1-analyse-of-needs": "1. Analyse des besoins",
    "2-installation": "2. Installation",
    "3-conception-design": "3. Conception & Design",
    "4-integration-development": "4. Intégration & Développement",
    "5-content-media": "5. Contenu & médias",
    "6-tests-validation": "6. Tests & Validation",
    "7-deployment": "7. Mise en ligne",
    "8-maintenance": "8. Maintenance",
    "9-end-of-life": "9. Fin de vie",
    // Environmental impact
    environmental_impact: "Impact environnemental",
    high_environmental_impact: "Fort 🌱🌱🌱",
    medium_environmental_impact: "Moyen 🌱🌱",
    low_environmental_impact: "Faible 🌱",
    // Priority implementation
    priority_implementation: "Priorité d'implémentation",
    high_priority: "Haute 👍👍👍",
    medium_priority: "Moyenne 👍👍",
    low_priority: "Faible 👍",
    // Saved resource(s)
    saved_resources: "Ressource(s) économisée(s)",
    cpu: "Processeur",
    ram: "Mémoire vive",
    network: "Réseau",
    requests: "Requêtes",
    "e-waste": "Déchets électroniques",
    electricity: "Consommation électrique",
    ghg: "Émissions de gaz à effet de serre",
    tdb: "À définir",
  },
  en: {
    // SEO
    "seo.site_name": "Good ecodesign practices",
    "seo.default.description":
      "Good ecodesign practices" + getTranslatedTitle("en", "long"),
    "seo.url": siteURL + PUBLIC_BASE,
    "seo.titleTemplate": "%s | Green IT Collective",
    "seo.fb.image.url": "/asso-greenit-share-fb.png",
    "seo.tw.image.url": "/asso-greenit-share-tw.png",
    "seo.image.alt":
      "Good ecodesign practices" + getTranslatedTitle("en", "long"),
    "seo.noRobots": true,

    // src/components/BackToTop.astro
    "Retour en haut de page": "Return to top of page",

    // src/components/Header.astro
    "Retour à l'accueil": "Back to Home",

    // src/pages/[lang]/fiches/index.astro && src/components/fiches/FichesListView.astro
    "Bonnes pratiques": "Good practices",
    "Consulter les Bonnes pratiques": "Consult the Best practices",

    // src/pages/[lang]/lexique/index.astro && src/components/lexique/LexiqueListView.astro
    Lexique: "Glossary",
    "Consulter le Lexique": "Consult the Glossary",
    "Consulter les Personas": "View Personas",

    // src/pages/[lang]/personas/index.astro
    Personas: "Personas",
    "Contribuez !": "Contribute!",
    "Voir la méthode de contribution sur le GitHub du CNUMR":
      "See the contribution method on the CNUMR GitHub",
    "Voir le repository GitHub de CNUMR": "See the CNUMR GitHub repository",

    // src/components/Footer.astro
    "Mentions légales": "Legal Notice",
    "Les mentions légales du site.": "The legal notices of the site.",
    "Association Green IT": "Green IT Association",
    "Aller sur le site de l'association GreenIT (site externe)":
      "Go to the GreenIT association website (external site)",
    "Logo association Green IT - lien sortant vers le site l'association Green IT":
      "Green IT association logo - outgoing link to the GreenIT association website",
    "Sous licence CC BY-NC-ND 4.0": "Licensed under CC BY-NC-ND 4.0",

    // src/components/Licence.astro
    "Consulter le contenu de la licence CC BY-NC-ND 4.0 (site externe)":
      "View CC BY-NC-ND 4.0 license content (external site)",

    // A continuer...

    // src/components/ContributeCTA.astro
    "Vous avez repérez une coquille ou vous souhaitez contribuer ?":
      "Vous avez repérez une coquille ou vous souhaitez contribuer ?",
    "Venez sur le repo pour lancer une discussion sur":
      "Venez sur le repo pour lancer une discussion sur",
    "la fiche": "la fiche",
    "la fiche du lexique": "la fiche du lexique",
    "le persona": "le persona",

    // src/pages/[lang]/fiches/index.astro
    "Les Fiches de Bonnes pratiques pour rendre le numérique plus respectueux de l'environnement.":
      "Les Fiches de Bonnes pratiques pour rendre le numérique plus respectueux de l'environnement.",

    // src/pages/[lang]/lexique/index.astro
    "Les termes utilisés pour rendre le numérique plus respectueux de l'environnement.":
      "Les termes utilisés pour rendre le numérique plus respectueux de l'environnement.",

    // src/pages/[lang]/personas/index.astro
    "Les profils que nous ciblons avec ce référentiel.":
      "Les profils que nous ciblons avec ce référentiel.",

    // src/components/mdx/MDXLexiqueTooltip.astro
    "Définition manquante, vérifier le formatage du lien ou si la fiche existe dans le Lexique.":
      "Définition manquante, vérifier le formatage du lien ou si la fiche existe dans le Lexique.",

    // src/components/CardView.astro
    Fort: "Fort",
    Moyen: "Moyen",
    Faible: "Faible",

    // src/components/fiches/FichesFilter.astro
    Afficher: "Afficher",
    Masquer: "Masquer",
    "les filtres": "les filtres",
    Catégories: "Catégories",

    // src/components/fiches/FichesTableValidation.astro
    "Principe de validation": "Principe de validation",
    "Le nombre": "Le nombre",
    "est inférieur ou égal à": "est inférieur ou égal à",

    // src/components/fiches/FicheViewPaginate.astro
    "Navigation entre les bonnes pratiques":
      "Navigation entre les bonnes pratiques",
    "Priorité d'implémentation": "Priorité d'implémentation",
    "Impact environnemental": "Impact environnemental",

    // src/components/FichesMetasDisplay.astro
    "Sommaire :": "Sommaire :",

    // src/components/LanguagePicker.astro
    "Language picker": "Sélecteur de langue",
    "Changer de langue": "🇪🇸 / 🇫🇷",

    // Scope
    scope: "Périmètre",
    cache: "Cache",
    documents: "Documents",
    features: "Fonctionnalités",
    images: "Images",
    "front-office": "Front-office",
    hosting: "Hébergement",
    performance: "Performance",
    security: "Sécurité",
    themes: "Thèmes",
    seo: "SEO",
    storage: "Stockage",
    "videos-sounds": "Vidéos/Audios",
    // Lifecycle
    lifecycle: "Cycle de vie",
    "1-analyse-of-needs": "1. Analyse des besoins",
    "2-installation": "2. Installation",
    "3-conception-design": "3. Conception & Design",
    "4-integration-development": "4. Intégration & Développement",
    "5-content-media": "5. Contenu & médias",
    "6-tests-validation": "6. Tests & Validation",
    "7-deployment": "7. Mise en ligne",
    "8-maintenance": "8. Maintenance",
    "9-end-of-life": "9. Fin de vie",
    // Environmental impact
    environmental_impact: "Impact environnemental",
    high_environmental_impact: "Fort 🌱🌱🌱",
    medium_environmental_impact: "Moyen 🌱🌱",
    low_environmental_impact: "Faible 🌱",
    // Priority implementation
    priority_implementation: "Priorité d'implémentation",
    high_priority: "Haute 👍👍👍",
    medium_priority: "Moyenne 👍👍",
    low_priority: "Faible 👍",
    // Saved resource(s)
    saved_resources: "Ressource(s) économisée(s)",
    cpu: "Processeur",
    ram: "Mémoire vive",
    network: "Réseau",
    requests: "Requêtes",
    "e-waste": "Déchets électroniques",
    electricity: "Consommation électrique",
    ghg: "Émissions de gaz à effet de serre",
    tdb: "À définir",
  },
  fr: {
    // SEO
    "seo.site_name": "Les bonnes pratiques d'écoconception",
    "seo.default.description":
      "Les bonnes pratiques d'écoconception" + getTranslatedTitle("fr", "long"),
    "seo.url": siteURL + PUBLIC_BASE,
    "seo.titleTemplate": "%s | Collectif Green IT",
    "seo.fb.image.url": "/asso-greenit-share-fb.png",
    "seo.tw.image.url": "/asso-greenit-share-tw.png",
    "seo.image.alt":
      "Les bonnes pratiques d'écoconception" + getTranslatedTitle("fr", "long"),
    "seo.noRobots": true,

    // src/components/BackToTop.astro
    "Retour en haut de page": "Retour en haut de page",

    // src/components/Header.astro
    "Retour à l'accueil": "Retour à l'accueil",

    // src/pages/[lang]/fiches/index.astro && src/components/fiches/FichesListView.astro
    "Bonnes pratiques": "Bonnes pratiques",
    "Consulter les Bonnes pratiques": "Consulter les Bonnes pratiques",
    "Vue en cartes": "Vue en cartes",
    "Vue en tableau (pour copier/coller)":
      "Vue en tableau (pour copier/coller)",

    // src/pages/[lang]/lexique/index.astro && src/components/lexique/LexiqueListView.astro
    Lexique: "Lexique",
    "Consulter le Lexique": "Consulter le Lexique",
    "Consulter les Personas": "Consulter les Personas",

    // src/pages/[lang]/personas/index.astro
    Personas: "Personas",
    "Contribuez !": "Contribuez !",
    "Voir la méthode de contribution sur le GitHub du CNUMR":
      "Voir la méthode de contribution sur le GitHub du CNUMR",
    "Voir le repository GitHub de CNUMR": "Voir le repository GitHub de CNUMR",

    // src/components/Footer.astro
    "Mentions légales": "Mentions légales",
    "Les mentions légales du site.": "Les mentions légales du site.",
    "Association Green IT": "Association Green IT",
    "Aller sur le site de l'association Green IT (site externe)":
      "Aller sur le site de l'association Green IT (site externe)",
    "Logo association Green IT - lien sortant vers le site l'association Green IT":
      "Logo association Green IT - lien sortant vers le site l'association Green IT",
    "Sous licence CC BY-NC-ND 4.0": "Sous licence CC BY-NC-ND 4.0",

    // src/components/Licence.astro
    "Consulter le contenu de la licence CC BY-NC-ND 4.0 (site externe)":
      "Consulter le contenu de la licence CC BY-NC-ND 4.0 (site externe)",

    // src/components/ContributeCTA.astro
    "Vous avez repérez une coquille ou vous souhaitez contribuer ?":
      "Vous avez repérez une coquille ou vous souhaitez contribuer ?",
    "Venez sur le repo pour lancer une discussion sur":
      "Venez sur le repo pour lancer une discussion sur",
    "la fiche": "la fiche",
    "la fiche du lexique": "la fiche du lexique",
    "le persona": "le persona",

    // src/pages/[lang]/fiches/index.astro
    "Les Fiches de Bonnes pratiques pour rendre le numérique plus respectueux de l'environnement.":
      "Les Fiches de Bonnes pratiques pour rendre le numérique plus respectueux de l'environnement.",

    // src/pages/[lang]/lexique/index.astro
    "Les termes utilisés pour rendre le numérique plus respectueux de l'environnement.":
      "Les termes utilisés pour rendre le numérique plus respectueux de l'environnement.",

    // src/pages/[lang]/personas/index.astro
    "Les profils que nous ciblons avec ce référentiel.":
      "Les profils que nous ciblons avec ce référentiel.",

    // src/components/mdx/MDXLexiqueTooltip.astro
    "Définition manquante, vérifier le formatage du lien ou si la fiche existe dans le Lexique.":
      "Définition manquante, vérifier le formatage du lien ou si la fiche existe dans le Lexique.",

    // src/components/CardView.astro
    Fort: "Fort",
    Moyen: "Moyen",
    Faible: "Faible",

    // src/components/fiches/FichesFilter.astro
    Afficher: "Afficher",
    Masquer: "Masquer",
    "les filtres": "les filtres",
    Catégories: "Catégories",

    // src/components/fiches/FichesTableValidation.astro
    "Principe de validation": "Principe de validation",
    "Le nombre": "Le nombre",
    "est inférieur ou égal à": "est inférieur ou égal à",

    // src/components/fiches/FicheViewPaginate.astro
    "Navigation entre les bonnes pratiques":
      "Navigation entre les bonnes pratiques",
    "Priorité d'implémentation": "Priorité d'implémentation",
    "Impact environnemental": "Impact environnemental",

    // src/components/FichesMetasDisplay.astro
    "Sommaire :": "Sommaire :",
    responsible: "Responsable(s)",

    // src/components/LanguagePicker.astro
    "Language picker": "Sélecteur de langue",
    "Changer de langue": "🇬🇧 / 🇪🇸",

    // Scope
    scope: "Périmètre",
    cache: "Cache",
    documents: "Documents",
    features: "Fonctionnalités",
    images: "Images",
    "front-office": "Front-office",
    hosting: "Hébergement",
    performance: "Performance",
    security: "Sécurité",
    themes: "Thèmes",
    seo: "SEO",
    storage: "Stockage",
    "videos-sounds": "Vidéos/Audios",
    // Lifecycle
    lifecycle: "Cycle de vie",
    "1-analyse-of-needs": "1. Analyse des besoins",
    "2-installation": "2. Installation",
    "3-conception-design": "3. Conception & Design",
    "4-integration-development": "4. Intégration & Développement",
    "5-content-media": "5. Contenu & médias",
    "6-tests-validation": "6. Tests & Validation",
    "7-deployment": "7. Mise en ligne",
    "8-maintenance": "8. Maintenance",
    "9-end-of-life": "9. Fin de vie",
    // Environmental impact
    environmental_impact: "Impact environnemental",
    high_environmental_impact: "Fort 🌱🌱🌱",
    medium_environmental_impact: "Moyen 🌱🌱",
    low_environmental_impact: "Faible 🌱",
    // Priority implementation
    priority_implementation: "Priorité d'implémentation",
    high_priority: "Haute 👍👍👍",
    medium_priority: "Moyenne 👍👍",
    low_priority: "Faible 👍",
    // Saved resource(s)
    saved_resources: "Ressource(s) économisée(s)",
    cpu: "Processeur",
    ram: "Mémoire vive",
    network: "Réseau",
    requests: "Requêtes",
    "e-waste": "Déchets électroniques",
    electricity: "Consommation électrique",
    ghg: "Émissions de gaz à effet de serre",
    tdb: "À définir",
  },
} as const;
