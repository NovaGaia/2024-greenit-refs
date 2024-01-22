// Importe les propriétés depuis `astro:content`
import { defaultLang } from "@i18n/ui";
import { date, string } from "astro/zod";
import {
  type ImageFunction,
  defineCollection,
  z,
  reference,
  getCollection,
  getEntry,
  type CollectionEntry,
} from "astro:content";

// import { type TinaMarkdownContent } from "tinacms/dist/rich-text";
// Exporter un objet `collections` unique pour y enregistrer vos collections

const fiches = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      refID: z.string(),
      title: z.string(),
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
      published: z.boolean().optional(),
      language: z.string(),
      // slug: z.string(),
      people: z.string(),
      scope: z.string(),
      responsible: z.array(z.string()),
      lifecycle: z.string(),
      priority_implementation: z.string(),
      environmental_impact: z.string(),
      saved_resources: z.array(z.string()),
      validations: z.array(
        z.object({ rule: z.string(), maxValue: z.number() }),
      ),
    }),
});

const lexique = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
      published: z.boolean().optional(),
      language: z.string(),
      // slug: z.string(),
    }),
});

const personnas = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
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
      createdAt: z.date().optional(),
      updatedAt: z.date().optional(),
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
  personnas,
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
export async function getPersonnas() {
  const collection = await getCollection("personnas");

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

export async function getPages() {
  const collection = await getCollection("pages");

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

export async function getCollectionByLang(
  collection: "fiches" | "lexique" | "personnas",
  lang: "fr" | "es" | "en",
) {
  const items:
    | CollectionEntry<"fiches">[]
    | CollectionEntry<"lexique">[]
    | CollectionEntry<"personnas">[]
    | any[] = await getCollection(collection);

  return items
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
