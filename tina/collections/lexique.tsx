import {
  slugHiddenField,
  titleField,
  warnField,
  defaultFields,
  onLexiqueBeforeSubmit,
} from "../utils/commonFields";
import type { Collection } from "tinacms";

const lexique: Collection = {
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
    beforeSubmit: onLexiqueBeforeSubmit,
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
      required: true,
    },
  ],
};

export default lexique;
