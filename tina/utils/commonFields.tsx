import type { Form, TinaCMS, TinaField } from "tinacms";
import { RestartWarning } from "./warning";

const REF_NAME = "RWP";

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

/**
 * This function is called before the form is submitted.
 * @param {Form} form - The form object.
 * @param {TinaCMS} cms - The cms object.
 * @param {Record<string, any>} values - The values object.
 * @returns {Record<string, any>} The values object.
 */
const onFichesBeforeSubmit_DefaultFields = async ({
  form,
  values,
}: {
  form: Form;
  cms: TinaCMS;
  values: Record<string, any>;
}) => {
  if (form.crudType === "create") {
    return {
      ...values,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      filename:
        REF_NAME +
        "_" +
        values.refID +
        "-" +
        values.language +
        "-" +
        slugify(values.title),
      slug:
        "/fiches/" +
        REF_NAME +
        "_" +
        values.refID +
        "-" +
        values.language +
        "-" +
        slugify(values.title),
    };
  }
  return {
    ...values,
    updatedAt: new Date().toISOString(),
    slug:
      "/fiches/" +
      REF_NAME +
      "_" +
      values.refID +
      "-" +
      values.language +
      "-" +
      slugify(values.title),
  };
};

/**
 * This function is called before the form is submitted.
 * @param {Form} form - The form object.
 * @param {TinaCMS} cms - The cms object.
 * @param {Record<string, any>} values - The values object.
 * @returns {Record<string, any>} The values object.
 */
const onLexiqueBeforeSubmit_DefaultFields = async ({
  form,
  values,
}: {
  form: Form;
  cms: TinaCMS;
  values: Record<string, any>;
}) => {
  if (form.crudType === "create") {
    return {
      ...values,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      filename: values.language + "-" + slugify(values.title),
      slug: "/lexique/" + values.language + "-" + slugify(values.title),
    };
  }
  return {
    ...values,
    updatedAt: new Date().toISOString(),
    slug: "/lexique/" + values.language + "-" + slugify(values.title),
  };
};

/**
 * This function is called before the form is submitted.
 * @param {Form} form - The form object.
 * @param {TinaCMS} cms - The cms object.
 * @param {Record<string, any>} values - The values object.
 * @returns {Record<string, any>} The values object.
 */
const onPersonnasBeforeSubmit_DefaultFields = async ({
  form,
  values,
}: {
  form: Form;
  cms: TinaCMS;
  values: Record<string, any>;
}) => {
  if (form.crudType === "create") {
    return {
      ...values,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      filename: values.language + "-" + slugify(values.title),
      slug: "/personnas/" + values.language + "-" + slugify(values.title),
    };
  }
  return {
    ...values,
    updatedAt: new Date().toISOString(),
    slug: "/personnas/" + values.language + "-" + slugify(values.title),
  };
};

/**
 * This function is called before the form is submitted.
 * @param {Form} form - The form object.
 * @param {TinaCMS} cms - The cms object.
 * @param {Record<string, any>} values - The values object.
 * @returns {Record<string, any>} The values object.
 */
const onPagesBeforeSubmit_DefaultFields = async ({
  form,
  values,
}: {
  form: Form;
  cms: TinaCMS;
  values: Record<string, any>;
}) => {
  if (form.crudType === "create") {
    return {
      ...values,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      filename: values.language + "-" + slugify(values.title),
      slug: values.language + "-" + slugify(values.title),
    };
  }
  return {
    ...values,
    updatedAt: new Date().toISOString(),
    slug: values.language + "-" + slugify(values.title),
  };
};

/**
 * Title field
 * @type {TinaField}
 */
const titleField: any = (label) => {
  return {
    type: "string",
    name: `_${slugify(label).replace(/-/g, "_")}`,
    ui: {
      component: () => {
        return <h2 className="mb-2 text-xl font-black">{label}</h2>;
      },
    },
  };
};

/**
 * Warning field
 * @type {TinaField}
 */
const warnField: any = (view = "", comment = "") => {
  return {
    type: "string",
    name: "_warning",
    ui: {
      component: () => {
        return <RestartWarning view={view} comment={comment} />;
      },
    },
  };
};

/**
 * Default fields for fiches/lexiques/personnas
 * @type {TinaField[]}
 */
const defaultFields: TinaField[] = [
  {
    type: "string",
    name: "title",
    label: "Title",
    isTitle: true,
    required: true,
  },
  {
    type: "datetime",
    name: "createdAt",
    label: "Creation date",
    ui: {
      component: "hidden",
    },
  },
  {
    type: "datetime",
    name: "updatedAt",
    label: "Updated date",
    ui: {
      component: "hidden",
    },
  },
  {
    type: "string",
    name: "language",
    label: "Language",
    required: true,
    options: ["fr", "en", "es"],
  },
  { type: "boolean", name: "published", label: "Published", required: true },
  {
    type: "string",
    name: "slug",
    label: "Slug",
    ui: {
      component: "hidden",
    },
  },
];

export {
  titleField,
  warnField,
  defaultFields,
  onFichesBeforeSubmit_DefaultFields,
  onLexiqueBeforeSubmit_DefaultFields,
  onPersonnasBeforeSubmit_DefaultFields,
  onPagesBeforeSubmit_DefaultFields,
};
