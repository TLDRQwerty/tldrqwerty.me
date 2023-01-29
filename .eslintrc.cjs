module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:astro/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "svelte3"],
  root: true,
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/triple-slash-reference": "off",
  },
  settings: {
    "svelte3/typescript": () => require("typescript"),
  },
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
};
