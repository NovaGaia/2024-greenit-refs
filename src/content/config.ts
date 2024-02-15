// Importe les propriétés depuis `astro:content`
import {
  defineCollection,
  z,
  getCollection,
  getEntry,
  type CollectionEntry,
} from "astro:content";

const PUBLIC_REF_NAME =
  import.meta.env.PUBLIC_REF_NAME || process.env.PUBLIC_REF_NAME;

// import { type TinaMarkdownContent } from "tinacms/dist/rich-text";
// Exporter un objet `collections` unique pour y enregistrer vos collections

const fiches = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      refID: z.string(),
      title: z.string(),
      createdAt: z.date(),
      updatedAt: z.date(),
      published: z.boolean().optional(),
      language: z.string(),
      refType: z.string().optional(),
      // slug: z.string(),
      people: z.string().optional(),
      scope: z.string().optional(),
      responsible: z.array(z.object({ responsible: z.string() })).optional(),
      lifecycle: z.string(),
      priority_implementation: z.any(),
      environmental_impact: z.any(),
      moe: z.any().optional(),
      tiers: z.string().optional(),
      saved_resources: z.array(z.string()),
      validations: z
        .array(z.object({ rule: z.string(), maxValue: z.string() }))
        .optional(),
      versions: z
        .array(z.object({ version: z.string(), idRef: z.string() }))
        .optional(),
    }),
});

const lexique = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      createdAt: z.date(),
      updatedAt: z.date(),
      published: z.boolean().optional(),
      language: z.string(),
      // slug: z.string(),
    }),
});

const personas = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      shortName: z.string(),
      createdAt: z.date(),
      updatedAt: z.date(),
      published: z.boolean().optional(),
      language: z.string(),
      // slug: z.string(),
    }),
});

const pages = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      createdAt: z.date(),
      updatedAt: z.date(),
      published: z.boolean().optional(),
      language: z.string(),
      // slug: z.string(),
    }),
});

const home = pages;
const mentionsLegales = pages;

export const collections = {
  // Définir un `type` et un `schema` pour chaque collection
  fiches,
  lexique,
  personas,
  home,
  mentionsLegales,
};

/**
 * @deprecated use `getCollectionByLang`
 */
export async function getFiches() {
  const collection = await getCollection("fiches");

  return collection
    .filter((item) => item.data.published)
    .map((item) => {
      const { item_lang, item_slug } = getInformations(item.slug);
      return {
        ...item,
        item_lang,
        item_slug,
      };
    });
}
export async function getLexique() {
  const collection = await getCollection("lexique");

  return collection
    .filter((item) => item.data.published)
    .map((item) => {
      const { item_lang, item_slug } = getInformations(item.slug);
      return {
        ...item,
        item_lang,
        item_slug,
      };
    });
}
export async function getPersonas() {
  const collection = await getCollection("personas");

  return collection
    .filter((item) => item.data.published)
    .map((item) => {
      const { item_lang, item_slug } = getInformations(item.slug);
      return {
        ...item,
        item_lang,
        item_slug,
      };
    });
}

// export async function getPages() {
//   const collection = await getCollection("pages");

//   return collection
//     .filter((item) => item.data.published)
//     .map((item) => {
//       const { item_lang, item_slug } = getInformations(item.slug);
//       return {
//         ...item,
//         item_lang,
//         item_slug,
//       };
//     });
// }

export async function getCollectionByLang(
  collection: "fiches" | "lexique" | "personas",
  lang: "fr" | "es" | "en",
) {
  const items: CollectionEntry<"fiches" | "lexique" | "personas">[] | any[] =
    await getCollection(collection);

  return items
    .filter(
      (item) =>
        (collection === "fiches" &&
          item.data.refType === PUBLIC_REF_NAME &&
          item.data.published) ||
        (collection !== "fiches" && item.data.published),
    )
    .filter((item) => item.data.published)
    .filter((item) => item.slug.split("/")[0] === lang)
    .map((item) => {
      const { item_lang, item_slug } = getInformations(item.slug);
      return {
        ...item,
        item_lang,
        item_slug,
      };
    });
}

export async function getIndexPageByLang(_lang) {
  const lang = _lang || "defaultLang";
  return getEntry("home", lang);
}
export async function getMentionsLegalesByLang(_lang) {
  const lang = _lang || "defaultLang";
  return getEntry("mentionsLegales", lang);
}

const getInformations = (slug) => {
  const [item_lang, ...item_slug] = slug.split("/");
  return { item_lang, item_slug };
};
