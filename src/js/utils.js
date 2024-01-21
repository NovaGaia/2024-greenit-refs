/**
 * This function takes a text and converts it into a URL-friendly slug.
 * It performs the following transformations:
 * - Normalizes the string to remove accents
 * - Converts the text to lower case
 * - Replaces single quotes and double quotes with spaces
 * - Replaces spaces with hyphens
 * - Removes all non-alphanumeric characters except hyphens
 * - Replaces multiple consecutive hyphens with a single hyphen
 * - Replaces all non-ASCII characters with hyphens
 * - Removes leading and trailing hyphens
 *
 * @param {string} text - The text to be slugified.
 * @returns {string} The slugified text.
 */
const slugify = (text) => {
  return text
    .toString()
    .normalize("NFD")
    .toLowerCase()
    .replace(/['"]/g, " ")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/[^\x00-\x7F]/g, "-")
    .replace(/-+$/, "");
};

export { slugify };
