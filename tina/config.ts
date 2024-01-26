import { defineConfig } from "tinacms";
import fiches from "./collections/fiches";
import lexique from "./collections/lexique";
import personas from "./collections/personas";
import home from "./collections/home";
import mentionsLegales from "./collections/mentionsLegales";
import siteData from "./datas/siteData";

const PUBLIC_BASE =
  process.env.PUBLIC_BASE && process.env.PUBLIC_BASE !== ""
    ? process.env.PUBLIC_BASE
    : "";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
    basePath: PUBLIC_BASE,
  },
  media: {
    tina: {
      mediaRoot: "/src/assets",
      publicFolder: "",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [fiches, lexique, personas, home, mentionsLegales],
  },
});
