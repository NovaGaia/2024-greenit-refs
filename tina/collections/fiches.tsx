import {
  titleField,
  warnField,
  defaultFields,
  onFichesBeforeSubmit,
} from "../utils/commonFields";
import { slugify } from "../../src/js/utils.js";
import { tinaTableTemplate, type Collection } from "tinacms";

const PUBLIC_BASE =
  process.env.PUBLIC_BASE && process.env.PUBLIC_BASE !== ""
    ? process.env.PUBLIC_BASE + "/"
    : "";

const fiches: Collection = {
  name: "fiches",
  label: "Fiches du Référentiel",
  path: "src/content/fiches",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      // navigate to the post that was clicked
      // return document._sys.path;
      return `${PUBLIC_BASE}${document._sys.breadcrumbs[0]}/fiches/${slugify(document._sys.breadcrumbs[1])}`;
    },
    beforeSubmit: onFichesBeforeSubmit,
  },
  defaultItem: () => {
    return {
      published: false,
      validations: [{ rule: "<A CHANGER>", maxValue: 3 }],
    };
  },
  fields: [
    warnField(
      "",
      "Le nom de fichier de la fiche dépends des valeurs initiales #REF, Title et Language. Il ne changera plus automatiquement, il faut modifier manuellement le nom dans un second temps.",
    ),
    { type: "string", name: "refID", label: "#REF", required: true },
    ...defaultFields,
    titleField("Metadatas"),
    {
      type: "string",
      name: "people",
      label: "Auteur·e·s",
      required: true,
    },
    {
      type: "string",
      name: "scope",
      label: "Scope",
      required: true,
      // répercuter ces changements dans src/components/fiches/FichesFilter.astro et dans src/i18n/ui.ts
      options: [
        {
          value: "cache",
          label: "Cache",
        },
        {
          value: "documents",
          label: "Documents",
        },
        {
          value: "features",
          label: "Fonctionnalités",
        },
        {
          value: "images",
          label: "Images",
        },
        {
          value: "front-office",
          label: "Front-office",
        },
        {
          value: "hosting",
          label: "Hébergement",
        },
        {
          value: "performance",
          label: "Performance",
        },
        {
          value: "security",
          label: "Sécurité",
        },
        {
          value: "seo",
          label: "SEO",
        },
        {
          value: "storage",
          label: "Stockage",
        },
        {
          value: "themes",
          label: "Thèmes",
        },
        {
          value: "videos-sounds",
          label: "Vidéos/Audios",
        },
        {
          value: "tbd",
          label: "<< TBD (éviter de l'utiliser) >>",
        },
      ],
    },
    {
      type: "string",
      name: "responsible",
      label: "Responsible(s)",
      list: true,
      required: true,
      // répercuter ces changements dans src/i18n/ui.ts
      options: [
        {
          value: "developer",
          label: "Code(use·ur) → Développeu·se·r",
        },
        {
          value: "designer",
          label: "Designeu(se·r)",
        },
        {
          value: "lowcode",
          label: "Low-code → Freelance et développeur Front-End d'agences",
        },
        {
          value: "nocode",
          label: "No-code → Madame et Monsieur tout le monde",
        },
        {
          value: "tbd",
          label: "<< TBD (éviter de l'utiliser) >>",
        },
      ],
    },
    {
      type: "string",
      name: "lifecycle",
      label: "Lifecycle",
      required: true,
      // répercuter ces changements dans src/components/fiches/FichesFilter.astro et dans src/i18n/ui.ts
      options: [
        {
          value: "1-analyse-of-needs",
          label: "1. Analyse des besoins",
        },
        {
          value: "2-installation",
          label: "2. Installation",
        },
        {
          value: "3-conception-design",
          label: "3. Conception & Design",
        },
        {
          value: "4-integration-development",
          label: "4. Intégration & Développement",
        },
        {
          value: "5-content-media",
          label: "5. Contenu & médias",
        },
        {
          value: "6-tests-validation",
          label: "6. Tests & validation",
        },
        {
          value: "7-deployment",
          label: "7. Mise en ligne",
        },
        {
          value: "8-maintenance",
          label: "8. Maintenance",
        },
        {
          value: "9-end-of-life",
          label: "9. Fin de vie",
        },
        {
          value: "tbd",
          label: "<< TBD (éviter de l'utiliser) >>",
        },
      ],
    },
    {
      type: "string",
      name: "environmental_impact",
      label: "Environmental impact",
      required: true,
      // répercuter ces changements dans src/i18n/ui.ts
      options: [
        {
          label: "Fort 🌱🌱🌱",
          value: "high_environmental_impact",
        },
        {
          label: "Moyen 🌱🌱",
          value: "medium_environmental_impact",
        },
        {
          label: "Faible 🌱",
          value: "low_environmental_impact",
        },
        {
          value: "tbd",
          label: "<< TBD (éviter de l'utiliser) >>",
        },
      ],
    },
    {
      type: "string",
      name: "priority_implementation",
      label: "Priority implementation",
      required: true,
      // répercuter ces changements dans src/i18n/ui.ts
      options: [
        {
          label: "Haute 👍👍👍",
          value: "high_priority",
        },
        {
          label: "Moyenne 👍👍",
          value: "medium_priority",
        },
        {
          label: "Faible 👍",
          value: "low_priority",
        },
        {
          value: "tbd",
          label: "<< TBD (éviter de l'utiliser) >>",
        },
      ],
    },
    {
      type: "string",
      name: "saved_resources",
      label: "Saved resource(s)",
      list: true,
      required: true,
      // répercuter ces changements dans src/components/fiches/FichesFilter.astro et dans src/i18n/ui.ts
      options: [
        {
          value: "cpu",
          label: "Processeur",
        },
        {
          value: "ram",
          label: "Mémoire vive",
        },
        {
          value: "storage",
          label: "Stockage",
        },
        {
          value: "network",
          label: "Réseau",
        },
        {
          value: "queries",
          label: "Requêtes",
        },
        {
          value: "e-waste",
          label: "Déchets électroniques",
        },
        {
          value: "electricity",
          label: "Consommation électrique",
        },
        {
          value: "ghg",
          label: "Émissions de gaz à effet de serre",
        },
        {
          value: "tbd",
          label: "<< TBD (éviter de l'utiliser) >>",
        },
      ],
    },
    titleField("Corps de la fiche"),
    {
      type: "rich-text",
      name: "body",
      isBody: true,
      label: "Contenu",
      required: true,
      templates: [tinaTableTemplate],
    },
    {
      type: "object",
      name: "validations",
      label: "Principe(s) de validation",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: `Rule: ${item?.rule}`,
          };
        },
        min: 1,
        defaultItem: {
          rule: "<A CHANGER>",
          maxValue: 3,
        },
      },
      fields: [
        { type: "string", name: "rule", label: "Le nombre..." },
        {
          type: "number",
          name: "maxValue",
          label: "...est inférieur ou égal à",
        },
      ],
    },
  ],
};

export default fiches;
