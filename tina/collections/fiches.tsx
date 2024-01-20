import {
  titleField,
  warnField,
  defaultFields,
  onFichesBeforeSubmit_DefaultFields,
} from "../utils/commonFields";
import type { Collection } from "tinacms";

const fiches: Collection = {
  name: "fiches",
  label: "Fiches du Référentiel",
  path: "src/content/fiches",
  format: "mdx",
  ui: {
    // router: ({ document }) => {
    //   // navigate to the post that was clicked
    //   // return document._sys.path;
    //   return `/${document._sys.breadcrumbs.join("/")}`;
    // },
    beforeSubmit: onFichesBeforeSubmit_DefaultFields,
  },
  defaultItem: () => {
    return { published: false };
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
      options: [
        "Cache",
        "Documents",
        "Fonctionnalités",
        "Front-office",
        "Hébergement",
        "Images",
        "Sécurité",
        "Stockage",
        "Thèmes",
        "Vidéos/Audios",
      ],
    },
    {
      type: "string",
      name: "responsible",
      label: "Responsible(s)",
      list: true,
      required: true,
      options: [
        "Code(use·ur) → Développeu·se·r",
        "Designeu(se·r)",
        "Low-code → Freelance et développeur Front-End d'agences",
        "No-code → Madame et Monsieur tout le monde",
      ],
    },
    {
      type: "string",
      name: "lifecycle",
      label: "Lifecycle",
      required: true,
      options: [
        "Analyse des besoins",
        "Installation",
        "Conception & Design",
        "Intégration & Développement",
        "Contenu & médias",
        "Tests & validation",
        "Mise en ligne",
        "Maintenance",
        "Fin de vie",
      ],
    },
    {
      type: "string",
      name: "priority_implementation",
      label: "Priority implementation",
      required: true,
      options: ["Fort 👍👍👍", "Moyen 👍👍", "Faible 👍"],
    },
    {
      type: "string",
      name: "environmental_impact",
      label: "Environmental impact",
      required: true,
      options: ["Fort 🌱🌱🌱", "Moyen 🌱🌱", "Faible 🌱"],
    },
    {
      type: "string",
      name: "saved_resources",
      label: "Saved resource(s)",
      list: true,
      required: true,
      options: [
        "Processeur",
        "Mémoire vive",
        "Stockage",
        "Réseau",
        "Requêtes",
        "Déchets électroniques",
        "Consommation électrique",
        "Émissions de gaz à effet de serre",
      ],
    },
    titleField("Corps de la fiche"),
    {
      type: "rich-text",
      name: "body",
      isBody: true,
      label: "Contenu",
      required: true,
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
