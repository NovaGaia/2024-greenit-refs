import {
  slugHiddenField,
  titleField,
  warnField,
  defaultFields,
  onPersonnasBeforeSubmit_DefaultFields,
} from "../utils/commonFields";
import type { Collection } from "tinacms";

const personnas: Collection = {
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
    beforeSubmit: onPersonnasBeforeSubmit_DefaultFields,
  },
  defaultItem: () => {
    return { published: false };
  },
  fields: [
    warnField("", ""),
    // slugHiddenField,
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

export default personnas;
