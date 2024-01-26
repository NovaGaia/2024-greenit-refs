import { slugify } from "../../src/js/utils.js";
import {
  titleField,
  warnField,
  defaultFields,
  onPersonasBeforeSubmit,
} from "../utils/commonFields.tsx";
import type { Collection } from "tinacms";

const PUBLIC_BASE =
  process.env.PUBLIC_BASE && process.env.PUBLIC_BASE !== ""
    ? process.env.PUBLIC_BASE + "/"
    : "";

const personas: Collection = {
  name: "personas",
  label: "Personas",
  path: "src/content/personas",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      // navigate to the post that was clicked
      // return document._sys.path;
      return `/${PUBLIC_BASE}${document._sys.breadcrumbs[0]}/personas/${slugify(document._sys.breadcrumbs[1])}`;
    },
    beforeSubmit: onPersonasBeforeSubmit,
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

export default personas;
