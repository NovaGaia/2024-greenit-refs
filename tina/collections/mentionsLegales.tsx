import {
  defaultFields,
  onDefaultPagesBeforeSubmit,
  titleField,
  warnField,
} from "../utils/commonFields";
import type { Collection } from "tinacms";

const mentionsLegales: Collection = {
  name: "mentionsLegales",
  label: "Mentions légales",
  path: "src/content/mentionsLegales",
  format: "mdx",
  match: { include: "{en,fr,es}" },
  ui: {
    router: ({ document }) => {
      console.log("🚀 ~ document:", document);
      // navigate to the post that was clicked
      // return document._sys.path;
      return `/${document._sys.breadcrumbs[0]}/mentions-legales`;
    },
    beforeSubmit: onDefaultPagesBeforeSubmit,
  },
  defaultItem: () => {
    return { published: false };
  },
  fields: [
    warnField("", ""),
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
    },
  ],
};

export default mentionsLegales;
