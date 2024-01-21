import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

const SITE_URL = process.env.SITE_URL || "http://localhost:4321";
const tina = ({ directiveName = "tina" } = {}) => ({
  name: "tina-cms",
  hooks: {
    "astro:config:setup": ({ addClientDirective, opts }) => {
      addClientDirective({
        name: directiveName,
        entrypoint: "./tina/tina.mjs",
      });
    },
  },
});

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  i18n: {
    defaultLocale: "fr",
    locales: ["en", "es", "fr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      applyBaseStyles: false,
      // Example: Allow writing nested CSS declarations
      // alongside Tailwind's syntax
      nesting: true,
    }),
    tina(),
    icon({
      iconDir: "src/assets/icons",
      include: {
        tabler: ["*"],
      },
    }),
    sitemap(),
    mdx(),
    react(),
  ],
});
