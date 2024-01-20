// tina/config.ts
import { defineConfig } from "tinacms";

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
var RestartWarning = ({ view, comment }) => {
  return jsx("p", { className: "mb-4 rounded-lg border border-yellow-200 bg-gradient-to-r from-yellow-50 to-yellow-100 px-4 py-2.5 shadow", children: jsxs("div", { className: "flex items-center gap-2", children: [
    jsx(WarningIcon, { className: `h-auto w-6 flex-shrink-0 text-yellow-400` }),
    jsxs("div", { className: "flex flex-col gap-1", children: [
      jsxs("div", { className: `flex-1 whitespace-normal text-sm text-yellow-700	`, children: [
        "Pour voir les modifications, il faut sauvegarder pour d\xE9clencher un refresh.",
        " ",
        view && jsx(
          "a",
          {
            href: `${view}`,
            className: "underline",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "consulter la page"
          }
        )
      ] }),
      comment && jsx("div", { className: `flex-1 whitespace-normal text-sm text-yellow-700	`, children: comment })
    ] })
  ] }) });
};

// tina/utils/commonFields.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var REF_NAME = "RWP";
var slugify = (text) => {
  return text.toString().normalize("NFD").toLowerCase().replace(/['"]/g, " ").replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/[^\x00-\x7F]/g, "-").replace(/-+$/, "");
};
var onFichesBeforeSubmit_DefaultFields = async ({
  form,
  values
}) => {
  if (form.crudType === "create") {
    return {
      ...values,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      filename: REF_NAME + "_" + values.refID + "-" + values.language + "-" + slugify(values.title),
      slug: "/fiches/" + REF_NAME + "_" + values.refID + "-" + values.language + "-" + slugify(values.title)
    };
  }
  return {
    ...values,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    slug: "/fiches/" + REF_NAME + "_" + values.refID + "-" + values.language + "-" + slugify(values.title)
  };
};
var onLexiqueBeforeSubmit_DefaultFields = async ({
  form,
  values
}) => {
  if (form.crudType === "create") {
    return {
      ...values,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      filename: values.language + "-" + slugify(values.title),
      slug: "/lexique/" + values.language + "-" + slugify(values.title)
    };
  }
  return {
    ...values,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    slug: "/lexique/" + values.language + "-" + slugify(values.title)
  };
};
var onPersonnasBeforeSubmit_DefaultFields = async ({
  form,
  values
}) => {
  if (form.crudType === "create") {
    return {
      ...values,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      filename: values.language + "-" + slugify(values.title),
      slug: "/personnas/" + values.language + "-" + slugify(values.title)
    };
  }
  return {
    ...values,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    slug: "/personnas/" + values.language + "-" + slugify(values.title)
  };
};
var onPagesBeforeSubmit_DefaultFields = async ({
  form,
  values
}) => {
  if (form.crudType === "create") {
    return {
      ...values,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      filename: values.language + "-" + slugify(values.title),
      slug: values.language + "-" + slugify(values.title)
    };
  }
  return {
    ...values,
    updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    slug: values.language + "-" + slugify(values.title)
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
var warnField = (view = "", comment = "") => {
  return {
    type: "string",
    name: "_warning",
    ui: {
      component: () => {
        return jsx2(RestartWarning, { view, comment });
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
    options: ["fr", "en", "es"]
  },
  { type: "boolean", name: "published", label: "Published", required: true },
  {
    type: "string",
    name: "slug",
    label: "Slug",
    ui: {
      component: "hidden"
    }
  }
];

// tina/collections/fiches.tsx
var fiches = {
  name: "fiches",
  label: "Fiches du R\xE9f\xE9rentiel",
  path: "src/content/fiches",
  format: "mdx",
  ui: {
    // router: ({ document }) => {
    //   // navigate to the post that was clicked
    //   // return document._sys.path;
    //   return `/${document._sys.breadcrumbs.join("/")}`;
    // },
    beforeSubmit: onFichesBeforeSubmit_DefaultFields
  },
  defaultItem: () => {
    return { published: false };
  },
  fields: [
    warnField(
      "",
      "Le nom de fichier de la fiche d\xE9pends des valeurs initiales #REF, Title et Language. Il ne changera plus automatiquement, il faut modifier manuellement le nom dans un second temps."
    ),
    { type: "string", name: "refID", label: "#REF", required: true },
    ...defaultFields,
    titleField("Metadatas"),
    {
      type: "string",
      name: "people",
      label: "Auteur\xB7e\xB7s",
      required: true
    },
    {
      type: "string",
      name: "scope",
      label: "Scope",
      required: true,
      options: [
        "Cache",
        "Documents",
        "Fonctionnalit\xE9s",
        "Front-office",
        "H\xE9bergement",
        "Images",
        "S\xE9curit\xE9",
        "Stockage",
        "Th\xE8mes",
        "Vid\xE9os/Audios"
      ]
    },
    {
      type: "string",
      name: "responsible",
      label: "Responsible(s)",
      list: true,
      required: true,
      options: [
        "Code(use\xB7ur) \u2192 D\xE9veloppeu\xB7se\xB7r",
        "Designeu(se\xB7r)",
        "Low-code \u2192 Freelance et d\xE9veloppeur Front-End d'agences",
        "No-code \u2192 Madame et Monsieur tout le monde"
      ]
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
        "Int\xE9gration & D\xE9veloppement",
        "Contenu & m\xE9dias",
        "Tests & validation",
        "Mise en ligne",
        "Maintenance",
        "Fin de vie"
      ]
    },
    {
      type: "string",
      name: "priority_implementation",
      label: "Priority implementation",
      required: true,
      options: ["Fort \u{1F44D}\u{1F44D}\u{1F44D}", "Moyen \u{1F44D}\u{1F44D}", "Faible \u{1F44D}"]
    },
    {
      type: "string",
      name: "environmental_impact",
      label: "Environmental impact",
      required: true,
      options: ["Fort \u{1F331}\u{1F331}\u{1F331}", "Moyen \u{1F331}\u{1F331}", "Faible \u{1F331}"]
    },
    {
      type: "string",
      name: "saved_resources",
      label: "Saved resource(s)",
      list: true,
      required: true,
      options: [
        "Processeur",
        "M\xE9moire vive",
        "Stockage",
        "R\xE9seau",
        "Requ\xEAtes",
        "D\xE9chets \xE9lectroniques",
        "Consommation \xE9lectrique",
        "\xC9missions de gaz \xE0 effet de serre"
      ]
    },
    titleField("Corps de la fiche"),
    {
      type: "rich-text",
      name: "body",
      isBody: true,
      label: "Contenu",
      required: true
    },
    {
      type: "object",
      name: "validations",
      label: "Principe(s) de validation",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: `Rule: ${item?.rule}`
          };
        }
      },
      fields: [
        { type: "string", name: "rule", label: "Le nombre..." },
        {
          type: "number",
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
    beforeSubmit: onLexiqueBeforeSubmit_DefaultFields
  },
  defaultItem: () => {
    return { published: false };
  },
  fields: [
    warnField("", ""),
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

// tina/collections/personnas.tsx
var personnas = {
  name: "personnas",
  label: "Personnas",
  path: "src/content/personnas",
  format: "mdx",
  ui: {
    // router: ({ document }) => {
    //   // navigate to the post that was clicked
    //   // return document._sys.path;
    //   return `/${document._sys.breadcrumbs.join("/")}`;
    // },
    beforeSubmit: onPersonnasBeforeSubmit_DefaultFields
  },
  defaultItem: () => {
    return { published: false };
  },
  fields: [
    warnField("", ""),
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
var personnas_default = personnas;

// tina/collections/pages.tsx
var pages = {
  name: "pages",
  label: "Pages (hors index)",
  path: "src/content/pages",
  format: "mdx",
  match: { exclude: "{index}" },
  ui: {
    // router: ({ document }) => {
    //   // navigate to the post that was clicked
    //   // return document._sys.path;
    //   return `/${document._sys.breadcrumbs.join("/")}`;
    // },
    beforeSubmit: onPagesBeforeSubmit_DefaultFields
  },
  defaultItem: () => {
    return { published: false };
  },
  fields: [
    warnField("", ""),
    ...defaultFields,
    titleField("Corps de la fiche"),
    { type: "boolean", name: "useProse", label: "Utiliser le style 'Prose'" },
    {
      type: "rich-text",
      name: "body",
      isBody: true,
      label: "Contenu",
      required: true
    }
  ]
};
var pages_default = pages;

// tina/config.ts
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "/src/assets",
      publicFolder: ""
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [fiches_default, lexique_default, personnas_default, pages_default]
  }
});
export {
  config_default as default
};
