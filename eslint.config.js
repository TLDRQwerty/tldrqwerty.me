import eslintPluginAstro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

export default tseslint.config(
  tseslint.configs.recommended,
  eslint.configs.recommended,
  eslintPluginAstro.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  globalIgnores([".astro"]),
);
