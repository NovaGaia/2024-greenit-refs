import {
  defaultFields,
  onPagesBeforeSubmit_DefaultFields,
  titleField,
  warnField,
} from "../utils/commonFields";
import type { Collection } from "tinacms";
const home: Collection = {
  label: "Page: Accueil",
  name: "homeData",
  path: "src/data",
  match: { include: "homeData" },
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false,
    },
    // router: ({ document }) => {
    //   console.log("🚀 ~ home.ui.document:", document);
    //   // navigate to the post that was clicked
    //   // return document._sys.path;
    //   return `/${document._sys.breadcrumbs.join("/")}`;
    //   return `/`;
    // },
  },
  fields: [
    { type: "string", name: "title", label: "Title", required: true },
    { type: "rich-text", name: "contenu", label: "Contenu" },
  ],
};

export default home;
