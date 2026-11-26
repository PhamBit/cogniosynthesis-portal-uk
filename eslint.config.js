// ESLint 9 flat config: JavaScript, TypeScript and Astro files under src/.
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";

export default [
  { ignores: ["dist/", ".astro/", "node_modules/", "public/"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    // Astro frontmatter runs in Node at build time; <script> blocks run in the browser.
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
];
