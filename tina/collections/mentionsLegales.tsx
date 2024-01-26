import {
  defaultFields,
  onDefaultPagesBeforeSubmit,
  templateCTAWithIcon,
  titleField,
  warnField,
} from "../utils/commonFields";
import { tinaTableTemplate, type Collection } from "tinacms";

const PUBLIC_BASE =
  process.env.PUBLIC_BASE && process.env.PUBLIC_BASE !== ""
    ? process.env.PUBLIC_BASE + "/"
    : "";

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
      return `/${PUBLIC_BASE}${document._sys.breadcrumbs[0]}/mentions-legales`;
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
      templates: [templateCTAWithIcon, tinaTableTemplate],
    },
  ],
};

export default mentionsLegales;
