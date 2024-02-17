import { getCollection, type CollectionEntry } from "astro:content";
import type { EntryType } from "perf_hooks";
import { getRefConfig } from "referentiel-config";

export async function GET({ params, request }) {
  const id = params.id;
  const lang = params.lang;
  const entries: CollectionEntry<"fiches">[] = await getCollection("fiches");
  const filteredEntries: CollectionEntry<"fiches">[] = entries
    .filter((entry) => entry.data.language === lang)
    .filter((entry) => entry.data.published)
    .filter((entry) => entry.data.refID === params.id);
  if (entries && filteredEntries.length > 1) {
    throw new Error("Duplicate ID on `Fiches`.");
  }
  const entry = filteredEntries[0];
  const [_lang, ...slug] = entry.slug.split("/");
  let o = {
    id: entry.data.refID,
    lang: lang,
    title: entry.data.title,
    lifecycle: entry.data.lifecycle,
    slug: `/${import.meta.env.PUBLIC_BASE !== "" ? import.meta.env.PUBLIC_BASE + "/" : ""}fr/${entry.collection}/${slug}`,
  };
  if (getRefConfig().featuresEnabled.scope) {
    o["scope"] = entry.data.scope;
  }
  return new Response(JSON.stringify(o), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Charset: "UTF-8",
    },
  });
}

export async function getStaticPaths() {
  const entries = await getCollection("fiches");
  const paths = entries
    .filter((entry) =>
      import.meta.env.MODE === "development" ? "true" : entry.data.published,
    )
    .map((entry) => {
      const [lang, ...slug] = entry.slug.split("/");
      return {
        params: {
          lang,
          id: entry.data.refID,
        },
      };
    });

  return paths;
}
