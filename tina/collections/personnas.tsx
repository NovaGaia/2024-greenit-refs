import { slugify } from "../../src/js/utils.js";
import {
  titleField,
  warnField,
  defaultFields,
  onPersonnasBeforeSubmit,
} from "../utils/commonFields";
import type { Collection } from "tinacms";

// Ne fonctionne pas, donc ref.
const PUBLIC_BASE =
  process.env.PUBLIC_BASE || import.meta.env.PUBLIC_BASE || "ref";

const personnas: Collection = {
  name: "personnas",
  label: "Personnas",
  path: "src/content/personnas",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      // navigate to the post that was clicked
      // return document._sys.path;
      return `${PUBLIC_BASE}/${document._sys.breadcrumbs[0]}/personnas/${slugify(document._sys.breadcrumbs[1])}`;
    },
    beforeSubmit: onPersonnasBeforeSubmit,
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
