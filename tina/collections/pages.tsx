import {
  defaultFields,
  onPagesBeforeSubmit_DefaultFields,
  titleField,
  warnField,
} from "../utils/commonFields";
import type { Collection } from "tinacms";

const pages: Collection = {
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
    beforeSubmit: onPagesBeforeSubmit_DefaultFields,
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
      required: true,
    },
  ],
};

export default pages;
