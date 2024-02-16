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
    if (path === "") {
      return `${import.meta.env.SITE_URL || process.env.SITE_URL}${import.meta.env.PUBLIC_BASE || process.env.PUBLIC_BASE}/${l}.html`;
    }
    return !showDefaultLang && l === defaultLang
      ? `${import.meta.env.SITE_URL || process.env.SITE_URL}${import.meta.env.PUBLIC_BASE || process.env.PUBLIC_BASE}/${path}`
      : `${import.meta.env.SITE_URL || process.env.SITE_URL}${import.meta.env.PUBLIC_BASE || process.env.PUBLIC_BASE}/${l}${path}`;
  };
}

/**
 * Test if the string is in the ui for the lang passed or for the default lang
 * @param lang {keyof typeof ui} The lang to test
 * @param key {string | undefined} The key to test
 * @returns {boolean} True if the key is in the ui for the lang passed or for the default lang
 */
export function isStringInUi(lang: keyof typeof ui, key: string | undefined) {
  if (!key) return false;
  return key in ui[lang] || key in ui[defaultLang];
}
