// Importe les propriétés depuis `astro:content`
import { date } from "astro/zod";
import {
  type ImageFunction,
  defineCollection,
  z,
  reference,
} from "astro:content";

// import { type TinaMarkdownContent } from "tinacms/dist/rich-text";
// Exporter un objet `collections` unique pour y enregistrer vos collections

export const collections = {
  // Définir un `type` et un `schema` pour chaque collection
  fiches: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        refID: z.string(),
        title: z.string(),
        createdAt: z.date().optional(),
        updatedAt: z.date().optional(),
        published: z.boolean().optional(),
        language: z.string(),
        slug: z.string(),
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
  }),
  lexique: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        createdAt: z.date().optional(),
        updatedAt: z.date().optional(),
        published: z.boolean().optional(),
        language: z.string(),
        slug: z.string(),
      }),
  }),
  personnas: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        createdAt: z.date().optional(),
        updatedAt: z.date().optional(),
        published: z.boolean().optional(),
        language: z.string(),
        slug: z.string(),
      }),
  }),
  pages: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        createdAt: z.date().optional(),
        updatedAt: z.date().optional(),
        published: z.boolean().optional(),
        language: z.string(),
        slug: z.string(),
      }),
  }),
};
