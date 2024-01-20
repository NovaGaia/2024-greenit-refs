/**
 * @type {import('astro').ClientDirective}
 */
export default (load, opts, el) => {
  try {
    const isEditor =
      window.frameElement && window.frameElement.id === "tina-iframe";
    if (isEditor) {
      load().then((hydrate) => hydrate());
    }
  } catch (e) {
    console.error(e);
  }
};
