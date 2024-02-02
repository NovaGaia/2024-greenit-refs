import { LocalAuthProvider, defineConfig } from "tinacms";
import {
  TinaUserCollection,
  UsernamePasswordAuthJSProvider,
} from "tinacms-authjs/dist/tinacms";
import fiches from "./collections/fiches";
import lexique from "./collections/lexique";
import personas from "./collections/personas";
import home from "./collections/home";
import mentionsLegales from "./collections/mentionsLegales";

const PUBLIC_BASE =
  process.env.PUBLIC_BASE && process.env.PUBLIC_BASE !== ""
    ? process.env.PUBLIC_BASE
    : "";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

export default defineConfig({
  contentApiUrlOverride: "/api/tina/gql", // ensure this value is provided depending on your hosting solution
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
