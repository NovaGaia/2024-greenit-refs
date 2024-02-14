// tina/config.ts
import { defineConfig } from "tinacms";

// tina/utils/commonFields.tsx
import {
  wrapFieldsWithMeta
} from "tinacms";

// tina/utils/warning.jsx
import { jsx, jsxs } from "react/jsx-runtime";
var WarningIcon = (props) => {
  return jsxs(
    "svg",
    {
      stroke: "currentColor",
      fill: "currentColor",
      "stroke-width": "0",
      viewBox: "0 0 24 24",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: [
        jsx("path", { d: "M11.001 10h2v5h-2zM11 16h2v2h-2z" }),
        jsx("path", { d: "M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z" })
      ]
    }
  );
};
var RestartWarning = ({ comment }) => {
  return jsx("p", { className: "mb-4 rounded-lg border border-yellow-200 bg-gradient-to-r from-yellow-50 to-yellow-100 px-4 py-2.5 shadow", children: jsxs("div", { className: "flex items-center gap-2", children: [
    jsx(WarningIcon, { className: `h-auto w-6 flex-shrink-0 text-yellow-400` }),
    jsx("div", { className: "flex flex-col gap-1", children: comment && jsx(
      "div",
      {
        className: `flex-1 whitespace-normal text-sm text-yellow-700	`,
        dangerouslySetInnerHTML: { __html: comment }
      }
    ) })
  ] }) });
};

// src/js/utils.js
var slugify = (text) => {
  return text.toString().normalize("NFD").toLowerCase().replace(/['"]/g, " ").replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/[^\x00-\x7F]/g, "-").replace(/-+$/, "");
};

// referentiel-config.ts
var MESURE_ON_3 = "use-3-grades";
var MESURE_ON_5 = "use-5-grades";
var getRefConfig = (specificRef) => {
  const currentRef = specificRef || process.env.PUBLIC_REF_NAME || import.meta.env.PUBLIC_REF_NAME;
  const config = {
    i18n: {
      defaultLang: "fr",
      locales: ["fr", "en", "es"],
      languages: {
        fr: "\u{1F1EB}\u{1F1F7} Fran\xE7ais",
        en: "\u{1F1EC}\u{1F1E7} English",
        es: "\u{1F1EA}\u{1F1F8} Espa\xF1ol"
      },
      refTitles: {
        es: { short: "<TBD>", long: " para <TBD>" },
        en: { short: "<TBD>", long: " for <TBD>" },
        fr: { short: "<TBD>", long: " pour <TBD>" }
      }
    },
    refInformations: {
      currentVersion: "0.0.1",
      creationYear: 2021
    },
    featuresEnabled: {
      lexique: false,
      linkToPersonas: false,
      priority_implementation: MESURE_ON_3,
      environmental_impact: MESURE_ON_3,
      moe: false,
      tiers: false,
      scope: false
    }
  };
  switch (currentRef) {
    case "RWP":
      config.i18n.locales = ["fr", "en", "es"];
      config.i18n.languages = {
        fr: "\u{1F1EB}\u{1F1F7} Fran\xE7ais",
        en: "\u{1F1EC}\u{1F1E7} English",
        es: "\u{1F1EA}\u{1F1F8} Espa\xF1ol"
      };
      config.i18n.refTitles = {
        es: { short: "WordPress", long: " para WordPress" },
        en: { short: "WordPress", long: " for WordPress" },
        fr: { short: "WordPress", long: " pour WordPress" }
      };
      config.refInformations = {
        currentVersion: "1.0.0",
        creationYear: 2021
      };
      config.featuresEnabled.lexique = true;
      config.featuresEnabled.linkToPersonas = true;
      config.featuresEnabled.priority_implementation = MESURE_ON_3;
      config.featuresEnabled.environmental_impact = MESURE_ON_3;
      config.featuresEnabled.moe = false;
      config.featuresEnabled.tiers = false;
      config.featuresEnabled.scope = true;
      break;
    case "RWEB":
      config.i18n.locales = ["fr", "en", "es"];
      config.i18n.languages = {
        fr: "\u{1F1EB}\u{1F1F7} Fran\xE7ais",
        en: "\u{1F1EC}\u{1F1E7} English",
        es: "\u{1F1EA}\u{1F1F8} Espa\xF1ol"
      };
      config.i18n.refTitles = {
        es: { short: "Performance Web", long: " para Performance Web" },
        en: { short: "Web Performance", long: " for Web Performance" },
        fr: { short: "Performance Web", long: " pour Performance Web" }
      };
      config.refInformations = {
        currentVersion: "4.0.0",
        creationYear: 2012
      };
      config.featuresEnabled.lexique = false;
      config.featuresEnabled.linkToPersonas = false;
      config.featuresEnabled.priority_implementation = "false";
      config.featuresEnabled.environmental_impact = MESURE_ON_5;
      config.featuresEnabled.moe = true;
      config.featuresEnabled.tiers = true;
      config.featuresEnabled.scope = false;
      break;
    default:
      console.error(`PUBLIC_REF_NAME NOT CONFIGURED!`);
      break;
  }
  return config;
};

// tina/utils/commonFields.tsx
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var onFichesBeforeSubmit = async ({
  form,
  values
}) => {
  const TINA_PUBLIC_REF_NAME_PROCESS3 = process.env.TINA_PUBLIC_REF_NAME;
  if (!values.responsible) {
    values.responsible = [];
  }
  if (form.crudType === "create") {
    return {
      ...values,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      filename: TINA_PUBLIC_REF_NAME_PROCESS3 + "_" + values.refID + "-" + slugify(values.title)
    };
  }
  return {
    ...values,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
};
var onLexiqueBeforeSubmit = async ({
  form,
  values
}) => {
  if (form.crudType === "create") {
    return {
      ...values,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      filename: slugify(values.title)
    };
  }
  return {
    ...values,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
};
var onPersonasBeforeSubmit = async ({
  form,
  values
}) => {
  if (form.crudType === "create") {
    return {
      ...values,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      filename: slugify(values.title)
    };
  }
  return {
    ...values,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
};
var onDefaultPagesBeforeSubmit = async ({
  form,
  values
}) => {
  if (form.crudType === "create") {
    return {
      ...values,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      filename: values.language
    };
  }
  return {
    ...values,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
};
var titleField = (label) => {
  return {
    type: "string",
    name: `_${slugify(label).replace(/-/g, "_")}`,
    ui: {
      component: () => {
        return jsx2("h2", { className: "mb-2 text-xl font-black", children: label });
      }
    }
  };
};
var warnField = (comment = "", name = "_warning") => {
  return {
    type: "string",
    name,
    ui: {
      component: () => {
        return jsx2(RestartWarning, { comment });
      }
    }
  };
};
var defaultFields = [
  {
    type: "string",
    name: "title",
    label: "Title",
    isTitle: true,
    required: true
  },
  {
    type: "datetime",
    name: "createdAt",
    label: "Creation date",
    ui: {
      component: "hidden"
    }
  },
  {
    type: "datetime",
    name: "updatedAt",
    label: "Updated date",
    ui: {
      component: "hidden"
    }
  },
  {
    type: "string",
    name: "language",
    label: "Language",
    required: true,
    options: getRefConfig(process.env.TINA_PUBLIC_REF_NAME).i18n.locales,
    ui: {
      // component: "select",
      validate: (value) => {
        if (value === "" || value === void 0 || value === null) {
          return "Required";
        }
      },
      component: wrapFieldsWithMeta(({ field, input, meta }) => {
        if (meta.initial === void 0) {
          return jsx2(Fragment, { children: jsxs2("div", { className: "group relative", children: [
            jsxs2(
              "select",
              {
                ...input,
                ...field,
                ...meta,
                className: "focus:shadow-outline block w-full cursor-pointer appearance-none truncate rounded-md border border-gray-200 bg-white py-2 pl-3 pr-8 text-base text-gray-300 shadow focus:border-blue-500 focus:outline-none focus:ring-blue-500 group-has-[option:not([value='']):checked]:text-gray-700 sm:text-sm",
                children: [
                  jsx2("option", { value: "", children: "Choose an option" }),
                  field["options"].map((option) => jsx2("option", { value: option, children: option }))
                ]
              }
            ),
            jsxs2(
              "svg",
              {
                stroke: "currentColor",
                fill: "currentColor",
                strokeWidth: "0",
                viewBox: "0 0 24 24",
                className: "pointer-events-none absolute right-2 top-1/2 h-auto w-6 -translate-y-1/2 text-gray-300 transition duration-150 ease-out group-hover:text-blue-500",
                height: "1em",
                width: "1em",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  jsx2("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
                  jsx2("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" })
                ]
              }
            )
          ] }) });
        } else {
          return jsx2("span", { className: "font-bold", children: input.value });
        }
      })
    }
  },
  {
    type: "boolean",
    name: "published",
    label: "Published",
    required: true,
    description: "La page/fiche ne sera pas visible tant qu'elle n'est pas publi\xE9e."
  }
];
var templateCTAWithIcon = {
  type: "object",
  name: "CTAWithIcon",
  label: "Call to action",
  ui: {
    defaultItem: {
      label: "Label",
      url: "https://example.com",
      icon: "tabler:brand-github",
      target: "_blank"
    }
  },
  fields: [
    {
      type: "string",
      name: "label",
      label: "Label",
      required: true
    },
    {
      type: "string",
      name: "url",
      label: "URL",
      required: true
    },
    {
      type: "string",
      name: "icon",
      label: "Icon",
      required: false,
      options: ["tabler:brand-github-filled", "tabler:brand-github"]
    },
    {
      type: "string",
      name: "target",
      label: "Target",
      required: true,
      options: ["_self", "_blank"]
    }
  ]
};

// tina/collections/fiches.tsx
import { tinaTableTemplate } from "tinacms";
var PUBLIC_BASE = process.env.PUBLIC_BASE && process.env.PUBLIC_BASE !== "" ? process.env.PUBLIC_BASE + "/" : "";
var TINA_PUBLIC_REF_NAME_PROCESS = process.env.TINA_PUBLIC_REF_NAME;
var getSpecificRefFields = () => {
  const specificsFields = [];
  if (getRefConfig(TINA_PUBLIC_REF_NAME_PROCESS).featuresEnabled.environmental_impact === MESURE_ON_3) {
    const priority_implementation = {
      type: "string",
      name: "environmental_impact",
      label: "Environmental impact",
      required: true,
      // répercuter ces changements dans src/i18n/ui.ts
      options: [
        {
          label: "Fort \u{1F331}\u{1F331}\u{1F331}",
          value: "high_environmental_impact"
        },
        {
          label: "Moyen \u{1F331}\u{1F331}",
          value: "medium_environmental_impact"
        },
        {
          label: "Faible \u{1F331}",
          value: "low_environmental_impact"
        },
        {
          value: "tbd",
          label: "<< TBD (\xE9viter de l'utiliser) >>"
        }
      ]
    };
    specificsFields.push(priority_implementation);
  }
  if (getRefConfig(TINA_PUBLIC_REF_NAME_PROCESS).featuresEnabled.environmental_impact === MESURE_ON_5) {
    const environmental_impact = {
      type: "number",
      name: "environmental_impact",
      label: "Environmental impact",
      required: true,
      ui: {
        validate: (value) => {
          if (value > 5) {
            return "La valeur doit \xEAtre comprise entre 1 et 5.";
          }
          if (value < 1) {
            return "La valeur doit \xEAtre comprise entre 1 et 5.";
          }
        }
      }
    };
    specificsFields.push(environmental_impact);
  }
  if (getRefConfig(TINA_PUBLIC_REF_NAME_PROCESS).featuresEnabled.priority_implementation === MESURE_ON_3) {
    const priority_implementation = {
      type: "string",
      name: "priority_implementation",
      label: "Priority implementation",
      required: true,
      // répercuter ces changements dans src/i18n/ui.ts
      options: [
        {
          label: "Haute \u{1F44D}\u{1F44D}\u{1F44D}",
          value: "high_priority"
        },
        {
          label: "Moyenne \u{1F44D}\u{1F44D}",
          value: "medium_priority"
        },
        {
          label: "Faible \u{1F44D}",
          value: "low_priority"
        },
        {
          value: "tbd",
          label: "<< TBD (\xE9viter de l'utiliser) >>"
        }
      ]
    };
    specificsFields.push(priority_implementation);
  }
  if (getRefConfig(TINA_PUBLIC_REF_NAME_PROCESS).featuresEnabled.moe === true) {
    const moe = {
      type: "number",
      name: "moe",
      label: "Mise en oeuvre",
      required: true,
      ui: {
        validate: (value) => {
          if (value > 5) {
            return "La valeur doit \xEAtre comprise entre 1 et 5.";
          }
          if (value < 1) {
            return "La valeur doit \xEAtre comprise entre 1 et 5.";
          }
        }
      }
    };
    specificsFields.push(moe);
  }
  if (getRefConfig(TINA_PUBLIC_REF_NAME_PROCESS).featuresEnabled.tiers === true) {
    const tiers = {
      type: "string",
      name: "tiers",
      label: "Tiers",
      required: true,
      // répercuter ces changements dans src/i18n/ui.ts
      options: [
        {
          label: "Utilisateur/Terminal",
          value: "user-device"
        },
        {
          label: "R\xE9seau",
          value: "network"
        },
        {
          label: "Datacenter",
          value: "datacenter"
        },
        {
          label: "<< TBD (\xE9viter de l'utiliser) >>",
          value: "tbd"
        }
      ]
    };
    specificsFields.push(tiers);
  }
  if (getRefConfig(TINA_PUBLIC_REF_NAME_PROCESS).featuresEnabled.scope === true) {
    const perimetre = {
      type: "string",
      name: "scope",
      label: "Scope",
      required: true,
      // répercuter ces changements dans src/components/fiches/FichesFilter.astro et dans src/i18n/ui.ts
      options: [
        {
          value: "cache",
          label: "Cache"
        },
        {
          value: "documents",
          label: "Documents"
        },
        {
          value: "features",
          label: "Fonctionnalit\xE9s"
        },
        {
          value: "images",
          label: "Images"
        },
        {
          value: "front-office",
          label: "Front-office"
        },
        {
          value: "hosting",
          label: "H\xE9bergement"
        },
        {
          value: "performance",
          label: "Performance"
        },
        {
          value: "security",
          label: "S\xE9curit\xE9"
        },
        {
          value: "seo",
          label: "SEO"
        },
        {
          value: "storage",
          label: "Stockage"
        },
        {
          value: "themes",
          label: "Th\xE8mes"
        },
        {
          value: "videos-sounds",
          label: "Vid\xE9os/Audios"
        },
        {
          value: "tbd",
          label: "<< TBD (\xE9viter de l'utiliser) >>"
        }
      ]
    };
    specificsFields.push(perimetre);
  }
  return specificsFields;
};
var fiches = {
  name: "fiches",
  label: "Fiches du R\xE9f\xE9rentiel",
  path: "src/content/fiches",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `${PUBLIC_BASE}${document._sys.breadcrumbs[0]}/fiches/${slugify(document._sys.breadcrumbs[1])}`;
    },
    beforeSubmit: onFichesBeforeSubmit
  },
  defaultItem: () => {
    return {
      published: false,
      refType: TINA_PUBLIC_REF_NAME_PROCESS,
      validations: [{ rule: "<A CHANGER>", maxValue: "3" }],
      versions: [
        {
          version: getRefConfig(process.env.TINA_PUBLIC_REF_NAME).refInformations.currentVersion,
          idRef: "<A CHANGER>"
        }
      ]
    };
  },
  fields: [
    warnField(
      "Pour voir les modifications, il faut sauvegarder pour d\xE9clencher un refresh.<br />Le nom de fichier de la fiche d\xE9pends des valeurs initiales #REF, Title et Language. Il ne changera plus automatiquement, il faut modifier manuellement le nom dans l'explorateur de fichier."
    ),
    warnField(
      "Les \xE9lements marqu\xE9s <b>A renseigner dans un second temps.</b> sont \xE0 compl\xE9ter apr\xE8s la cr\xE9ation de la fiche.",
      "_warn2"
    ),
    { type: "string", name: "refID", label: "#REF", required: true },
    ...defaultFields,
    titleField("Metadatas"),
    {
      type: "string",
      name: "refType",
      label: "Type de fiche",
      ui: {
        component: "hidden"
      }
    },
    {
      type: "object",
      list: true,
      name: "versions",
      label: "Version(s)",
      description: "A renseigner dans un second temps. N'a qu'un r\xF4le informatif, le #REF est celui qui sert pour g\xE9n\xE9rer le nom de fichier.",
      ui: {
        defaultItem: {
          version: getRefConfig(process.env.TINA_PUBLIC_REF_NAME).refInformations.currentVersion,
          idRef: "<A CHANGER>"
        },
        itemProps: (item) => {
          return {
            label: `Version: ${item?.version} | ID: ${item?.idRef}`
          };
        },
        min: 1
      },
      fields: [
        {
          type: "string",
          name: "version",
          label: "Version Ref.",
          required: true
        },
        {
          type: "string",
          name: "idRef",
          label: "ID Ref.",
          required: true
        }
      ]
    },
    {
      type: "string",
      name: "people",
      label: "Auteur\xB7e\xB7s",
      required: true
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
          if (!item || item.responsible === void 0)
            return { label: "Personnas: TBD" };
          const [src, content, type, ...label] = item?.responsible.split("/");
          return {
            label: `Personnas: ${label?.join("/") || "TBD"}`
          };
        }
      },
      fields: [
        {
          type: "reference",
          label: "Responsible",
          name: "responsible",
          description: "A renseigner dans un second temps.",
          collections: ["personas"]
        }
      ]
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
          label: "1. Analyse des besoins"
        },
        {
          value: "2-installation",
          label: "2. Installation / Architechture"
        },
        {
          value: "3-conception-design",
          label: "3. Conception & Design"
        },
        {
          value: "4-integration-development",
          label: "4. Int\xE9gration & D\xE9veloppement"
        },
        {
          value: "5-content-media",
          label: "5. Contenu & m\xE9dias"
        },
        {
          value: "6-tests-validation",
          label: "6. Tests & validation"
        },
        {
          value: "7-deployment",
          label: "7. Mise en ligne"
        },
        {
          value: "8-maintenance",
          label: "8. Maintenance / Usage / Contribution"
        },
        {
          value: "9-end-of-life",
          label: "9. Fin de vie"
        },
        {
          value: "tbd",
          label: "<< TBD (\xE9viter de l'utiliser) >>"
        }
      ]
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
          label: "Processeur"
        },
        {
          value: "ram",
          label: "M\xE9moire vive"
        },
        {
          value: "storage",
          label: "Stockage"
        },
        {
          value: "network",
          label: "R\xE9seau"
        },
        {
          value: "requests",
          label: "Requ\xEAtes"
        },
        {
          value: "e-waste",
          label: "D\xE9chets \xE9lectroniques"
        },
        {
          value: "electricity",
          label: "Consommation \xE9lectrique"
        },
        {
          value: "ghg",
          label: "\xC9missions de gaz \xE0 effet de serre"
        },
        {
          value: "tbd",
          label: "<< TBD (\xE9viter de l'utiliser) >>"
        }
      ]
    },
    titleField("Corps de la fiche"),
    {
      type: "rich-text",
      name: "body",
      isBody: true,
      label: "Contenu",
      required: true,
      templates: [tinaTableTemplate]
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
            label: `Rule: ${item?.rule}`
          };
        },
        defaultItem: {
          rule: "<A CHANGER>",
          maxValue: "3"
        },
        min: 1
      },
      fields: [
        { type: "string", name: "rule", label: "Le nombre..." },
        {
          type: "string",
          name: "maxValue",
          label: "...est inf\xE9rieur ou \xE9gal \xE0"
        }
      ]
    }
  ]
};
var fiches_default = fiches;

// tina/collections/lexique.tsx
var lexique = {
  name: "lexique",
  label: "Lexique",
  path: "src/content/lexique",
  format: "mdx",
  ui: {
    // router: ({ document }) => {
    //   // navigate to the post that was clicked
    //   // return document._sys.path;
    //   return `/${document._sys.breadcrumbs.join("/")}`;
    // },
    beforeSubmit: onLexiqueBeforeSubmit
  },
  defaultItem: () => {
    return { published: false };
  },
  fields: [
    ...defaultFields,
    titleField("Corps de la fiche"),
    {
      type: "rich-text",
      name: "body",
      isBody: true,
      label: "Contenu",
      required: true
    }
  ]
};
var lexique_default = lexique;

// tina/collections/personas.tsx
var PUBLIC_BASE2 = process.env.PUBLIC_BASE && process.env.PUBLIC_BASE !== "" ? process.env.PUBLIC_BASE + "/" : "";
var TINA_PUBLIC_REF_NAME_PROCESS2 = process.env.TINA_PUBLIC_REF_NAME;
var personas = {
  name: "personas",
  label: "Personas",
  path: "src/content/personas",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/${PUBLIC_BASE2}${document._sys.breadcrumbs[0]}/personas/${slugify(document._sys.breadcrumbs[1])}`;
    },
    beforeSubmit: onPersonasBeforeSubmit
  },
  defaultItem: () => {
    return { refType: TINA_PUBLIC_REF_NAME_PROCESS2, published: false };
  },
  fields: [
    warnField(
      "Pour voir les modifications, il faut sauvegarder pour d\xE9clencher un refresh."
    ),
    // slugHiddenField,
    {
      type: "string",
      name: "refType",
      label: "Type de fiche",
      ui: {
        component: "hidden"
      }
    },
    ...defaultFields,
    {
      type: "string",
      name: "shortName",
      label: "Nom court (1 mot)",
      required: true
    },
    titleField("Corps de la fiche"),
    {
      type: "rich-text",
      name: "body",
      isBody: true,
      label: "Contenu",
      required: true
    }
  ]
};
var personas_default = personas;

// tina/collections/home.tsx
import { tinaTableTemplate as tinaTableTemplate2 } from "tinacms";
var PUBLIC_BASE3 = process.env.PUBLIC_BASE && process.env.PUBLIC_BASE !== "" ? process.env.PUBLIC_BASE + "/" : "";
var home = {
  name: "home",
  label: "Home pages",
  path: "src/content/home",
  format: "mdx",
  match: { include: "{en,fr,es}" },
  ui: {
    router: ({ document }) => {
      return `${PUBLIC_BASE3}/${document._sys.breadcrumbs[0]}`;
    },
    beforeSubmit: onDefaultPagesBeforeSubmit
  },
  defaultItem: () => {
    return { published: false };
  },
  fields: [
    warnField(
      "Pour voir les modifications, il faut sauvegarder pour d\xE9clencher un refresh."
    ),
    // slugVisibleField,
    ...defaultFields,
    titleField("Corps de la fiche"),
    // { type: "boolean", name: "useProse", label: "Utiliser le style 'Prose'" },
    {
      type: "rich-text",
      name: "body",
      isBody: true,
      label: "Contenu",
      required: true,
      // description:
      //   "Ne pas utiliser le niveau 1 (#) pour vos titres, il est réservé au titre de la page (champs `Title`).",
      templates: [templateCTAWithIcon, tinaTableTemplate2]
    }
  ]
};
var home_default = home;

// tina/collections/mentionsLegales.tsx
import { tinaTableTemplate as tinaTableTemplate3 } from "tinacms";
var PUBLIC_BASE4 = process.env.PUBLIC_BASE && process.env.PUBLIC_BASE !== "" ? process.env.PUBLIC_BASE + "/" : "";
var mentionsLegales = {
  name: "mentionsLegales",
  label: "Mentions l\xE9gales",
  path: "src/content/mentionsLegales",
  format: "mdx",
  match: { include: "{en,fr,es}" },
  ui: {
    router: ({ document }) => {
      console.log("\u{1F680} ~ document:", document);
      return `/${PUBLIC_BASE4}${document._sys.breadcrumbs[0]}/mentions-legales`;
    },
    beforeSubmit: onDefaultPagesBeforeSubmit
  },
  defaultItem: () => {
    return { published: false };
  },
  fields: [
    warnField(
      "Pour voir les modifications, il faut sauvegarder pour d\xE9clencher un refresh."
    ),
    // slugVisibleField,
    ...defaultFields,
    titleField("Corps de la fiche"),
    // { type: "boolean", name: "useProse", label: "Utiliser le style 'Prose'" },
    {
      type: "rich-text",
      name: "body",
      isBody: true,
      label: "Contenu",
      required: true,
      // description:
      //   "Ne pas utiliser le niveau 1 (#) pour vos titres, il est réservé au titre de la page (champs `Title`).",
      templates: [templateCTAWithIcon, tinaTableTemplate3]
    }
  ]
};
var mentionsLegales_default = mentionsLegales;

// tina/datas/siteData.tsx
var siteData = {
  label: "Site Informations (SEO, etc.)",
  name: "siteData",
  path: "src/data",
  match: { include: "siteData", exclude: "i18n.json" },
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  format: "json",
  fields: [
    warnField("", ""),
    titleField("SEO"),
    {
      type: "string",
      name: "title",
      label: "Default Title",
      isTitle: true,
      required: true
    },
    {
      type: "string",
      name: "description",
      label: "Default Description",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "string",
      name: "titleTemplate",
      label: "Add to title, ex: '%s | Site'"
    },
    {
      type: "string",
      name: "twitterUsername",
      label: "Twitter Username"
    },
    {
      type: "string",
      name: "fbPageUrl",
      label: "Facebook Page/User URL"
    },
    {
      type: "object",
      name: "image",
      label: "Default Image",
      fields: [
        {
          type: "image",
          name: "url",
          label: "URL",
          required: true
        },
        {
          type: "string",
          name: "alt",
          label: "Alt",
          required: true
        }
      ]
    },
    titleField("Footer"),
    { type: "rich-text", name: "informations", label: "Informations" },
    {
      type: "object",
      name: "networks",
      label: "Social Networks",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.url };
        }
      },
      fields: [
        { type: "string", name: "url", label: "URL", required: true },
        { type: "string", name: "title", label: "Title", required: true },
        {
          type: "string",
          name: "icon",
          label: "Network",
          required: true,
          options: [
            "tabler:brand-github",
            "tabler:brand-linkedin",
            "tabler:brand-facebook",
            "tabler:brand-instagram",
            "tabler:brand-google-maps"
          ]
        }
      ]
    }
  ]
};

// tina/config.ts
var PUBLIC_BASE5 = process.env.PUBLIC_BASE && process.env.PUBLIC_BASE !== "" ? process.env.PUBLIC_BASE : "";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
    basePath: PUBLIC_BASE5
  },
  media: {
    tina: {
      mediaRoot: "/src/assets",
      publicFolder: ""
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [fiches_default, lexique_default, personas_default, home_default, mentionsLegales_default]
  }
});
export {
  config_default as default
};
