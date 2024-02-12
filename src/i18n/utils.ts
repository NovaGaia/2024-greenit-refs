import { ui, defaultLang, showDefaultLang } from "./ui";

const PUBLIC_BASE =
  import.meta.env.PUBLIC_BASE || process.env.PUBLIC_BASE
    ? (import.meta.env.PUBLIC_BASE || process.env.PUBLIC_BASE) + "/"
    : "";

export function getLangFromUrl(url: URL) {
  // const [, , lang] = url.pathname.split("/");
  const lang =
    PUBLIC_BASE !== ""
      ? url.pathname.split("/")[2]
      : url.pathname.split("/")[1];
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang
      ? `${import.meta.env.SITE_URL || process.env.SITE_URL}${import.meta.env.PUBLIC_BASE || process.env.PUBLIC_BASE}/${path}`
      : `${import.meta.env.SITE_URL || process.env.SITE_URL}${import.meta.env.PUBLIC_BASE || process.env.PUBLIC_BASE}/${l}${path}`;
  };
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getTranslatedTitle(
  lang: string,
  key: string = "short",
  data: any = undefined,
) {
  // console.log(`data`, data);

  if (data !== undefined) {
    const SITE_TITLE: object = JSON.parse(data.replaceAll("\\", ""));
    return `${SITE_TITLE[lang][key] || SITE_TITLE[defaultLang][key] || "TBD"}`;
  } else {
    // console.warn(`uiUtils > data = undefined`);
  }
}
