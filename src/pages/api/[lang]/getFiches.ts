import { code_languages } from "@i18n/ui";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getRefConfig } from "referentiel-config";

export const GET: APIRoute = async ({ params, request }) => {
  const lang = params.lang;
  const entries = await getCollection("fiches");
  const output: any = {
    ref: import.meta.env.PUBLIC_REF_NAME,
    version: getRefConfig().refInformations.currentVersion,
    refs: [],
  };
  entries
    .filter((entry) =>
      import.meta.env.MODE === "development" ? "true" : entry.data.published,
    )
    .filter((entry) => entry.data.language === "fr")
    .map((entry) => {
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
      output.refs.push(o);
    });
  return new Response(JSON.stringify(output));
};

export async function getStaticPaths() {
  return code_languages.map((lang) => {
    return { params: { lang } };
  });
}
