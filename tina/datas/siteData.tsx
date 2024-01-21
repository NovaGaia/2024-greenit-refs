import { titleField, warnField } from "../utils/commonFields";
import type { Collection } from "tinacms";

const siteData: Collection = {
  label: "Site Informations (SEO, etc.)",
  name: "siteData",
  path: "src/data",
  match: { include: "siteData", exclude: "i18n.json" },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
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
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Default Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "titleTemplate",
      label: "Add to title, ex: '%s | Site'",
    },
    {
      type: "string",
      name: "twitterUsername",
      label: "Twitter Username",
    },
    {
      type: "string",
      name: "fbPageUrl",
      label: "Facebook Page/User URL",
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
          required: true,
        },
        {
          type: "string",
          name: "alt",
          label: "Alt",
          required: true,
        },
      ],
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
          // Field values are accessed by item?.<Field name>
          return { label: item?.url };
        },
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
            "tabler:brand-google-maps",
          ],
        },
      ],
    },
  ],
};

export default siteData;
