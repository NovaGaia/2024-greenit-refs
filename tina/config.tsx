import { LocalAuthProvider, defineConfig } from "tinacms";
import {
  TinaUserCollection,
  UsernamePasswordAuthJSProvider,
} from "tinacms-authjs/dist/tinacms.mjs";
import fiches from "./collections/fiches.tsx";
import lexique from "./collections/lexique.tsx";
import personas from "./collections/personas.tsx";
import home from "./collections/home.tsx";
import mentionsLegales from "./collections/mentionsLegales.tsx";

const PUBLIC_BASE =
  process.env.PUBLIC_BASE && process.env.PUBLIC_BASE !== ""
    ? process.env.PUBLIC_BASE
    : "";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
console.log("🚀 ~ isLocal:", isLocal);

export default defineConfig({
  contentApiUrlOverride: "/api/tina/backend/", // ensure this value is provided depending on your hosting solution
  authProvider: isLocal
    ? new LocalAuthProvider()
    : new UsernamePasswordAuthJSProvider(),

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
