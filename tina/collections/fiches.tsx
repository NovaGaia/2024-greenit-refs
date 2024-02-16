import {
  titleField,
  warnField,
  defaultFields,
  onFichesBeforeSubmit,
} from "../utils/commonFields";
import { slugify } from "../../src/js/utils.js";
import { tinaTableTemplate, type Collection, type TinaField } from "tinacms";
import {
  getRefConfig,
  MESURE_ON_3,
  MESURE_ON_5,
} from "../../referentiel-config";

const PUBLIC_BASE =
  process.env.PUBLIC_BASE && process.env.PUBLIC_BASE !== ""
    ? process.env.PUBLIC_BASE + "/"
    : "";

const TINA_PUBLIC_REF_NAME_PROCESS = process.env.TINA_PUBLIC_REF_NAME;

const getSpecificRefFields: any = () => {
  const specificsFields: TinaField[] = [];
  const featuresEnabled = getRefConfig(
    TINA_PUBLIC_REF_NAME_PROCESS,
  ).featuresEnabled;

  if (featuresEnabled.environmental_impact === MESURE_ON_3) {
    const priority_implementation: TinaField = {
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
    };
    specificsFields.push(priority_implementation);
  }

  if (featuresEnabled.environmental_impact === MESURE_ON_5) {
    const environmental_impact: TinaField = {
      type: "number",
      name: "environmental_impact",
      label: "Environmental impact",
      required: true,
      ui: {
        validate: (value) => {
          if (value > 5) {
            return "La valeur doit être comprise entre 1 et 5.";
          }
          if (value < 1) {
            return "La valeur doit être comprise entre 1 et 5.";
          }
        },
      },
    };
    specificsFields.push(environmental_impact);
  }

  if (featuresEnabled.priority_implementation === MESURE_ON_3) {
    const priority_implementation: TinaField = {
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
    };
    specificsFields.push(priority_implementation);
  }

  if (
    featuresEnabled.priority_implementation === MESURE_ON_5 &&
    featuresEnabled.environmental_impact === MESURE_ON_5 &&
    featuresEnabled.moe === true
  ) {
    const priority_implementation: TinaField = {
      type: "number",
      name: "priority_implementation",
      label: "Priority implementation",
      ui: {
        component: "hidden",
      },
    };
    specificsFields.push(priority_implementation);
  }

  if (featuresEnabled.moe === true) {
    const moe: TinaField = {
      type: "number",
      name: "moe",
      label: "Mise en oeuvre",
      required: true,
      ui: {
        validate: (value) => {
          if (value > 5) {
            return "La valeur doit être comprise entre 1 et 5.";
          }
          if (value < 1) {
            return "La valeur doit être comprise entre 1 et 5.";
          }
        },
      },
    };
    specificsFields.push(moe);
  }

  if (featuresEnabled.tiers === true) {
    const tiers: TinaField = {
      type: "string",
      name: "tiers",
      label: "Tiers",
      required: true, // répercuter ces changements dans src/i18n/ui.ts
      options: [
        {
          label: "Utilisateur/Terminal",
          value: "user-device",
        },
        {
          label: "Réseau",
          value: "network",
        },
        {
          label: "Datacenter",
          value: "datacenter",
        },
        {
          label: "<< TBD (éviter de l'utiliser) >>",
          value: "tbd",
        },
      ],
    };
    specificsFields.push(tiers);
  }

  if (featuresEnabled.scope === true) {
    const perimetre: TinaField = {
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
    };
    specificsFields.push(perimetre);
  }

  return specificsFields;
};

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
      refType: TINA_PUBLIC_REF_NAME_PROCESS,
      validations: [{ rule: "<A CHANGER>", maxValue: "3" }],
      versions: [
        {
          version: getRefConfig(process.env.TINA_PUBLIC_REF_NAME)
            .refInformations.currentVersion,
          idRef: "<A CHANGER>",
        },
      ],
    };
  },
  fields: [
    warnField(
      "Pour voir les modifications, il faut sauvegarder pour déclencher un refresh.<br />Le nom de fichier de la fiche dépends des valeurs initiales #REF, Title et Language. Il ne changera plus automatiquement, il faut modifier manuellement le nom dans l'explorateur de fichier.",
    ),
    warnField(
      "Les élements marqués <b>A renseigner dans un second temps.</b> sont à compléter après la création de la fiche.",
      "_warn2",
    ),
    { type: "string", name: "refID", label: "#REF", required: true },
    ...defaultFields,
    titleField("Metadatas"),
    {
      type: "string",
      name: "refType",
      label: "Type de fiche",
      ui: {
        component: "hidden",
      },
    },
    {
      type: "object",
      list: true,
      name: "versions",
      label: "Version(s)",
      description:
        "A renseigner dans un second temps. N'a qu'un rôle informatif, le #REF est celui qui sert pour générer le nom de fichier.",
      ui: {
        defaultItem: {
          version: getRefConfig(process.env.TINA_PUBLIC_REF_NAME)
            .refInformations.currentVersion,
          idRef: "<A CHANGER>",
        },
        itemProps: (item) => {
          return {
            label: `Version: ${item?.version} | ID: ${item?.idRef}`,
          };
        },
        min: 1,
      },
      fields: [
        {
          type: "string",
          name: "version",
          label: "Version Ref.",
          required: true,
        },
        {
          type: "string",
          name: "idRef",
          label: "ID Ref.",
          required: true,
        },
      ],
    },
    {
      type: "string",
      name: "people",
      label: "Auteur·e·s",
      required: true,
    },
    {
      type: "object",
      name: "responsible",
      label: "Responsible(s)",
      description: "A renseigner dans un second temps.",
      list: true,
      required: true,
      ui: {
        itemProps: (item) => {
          if (!item || item.responsible === undefined)
            return { label: "Personnas: TBD" };
          const [src, content, type, ...label] = item?.responsible.split("/");
          return {
            label: `Personnas: ${label?.join("/") || "TBD"}`,
          };
        },
      },
      fields: [
        {
          type: "reference",
          label: "Responsible",
          name: "responsible",
          description: "A renseigner dans un second temps.",
          collections: ["personas"],
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
          label: "2. Installation / Architechture",
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
          label: "8. Maintenance / Usage / Contribution",
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
    ...getSpecificRefFields(),
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
          value: "requests",
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
      description: "A renseigner dans un second temps.",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: `Rule: ${item?.rule}`,
          };
        },
        defaultItem: {
          rule: "<A CHANGER>",
          maxValue: "3",
        },
        min: 1,
      },
      fields: [
        { type: "string", name: "rule", label: "Le nombre..." },
        {
          type: "string",
          name: "maxValue",
          label: "...est inférieur ou égal à",
        },
      ],
    },
  ],
};

export default fiches;
