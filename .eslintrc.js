const eslintSveltePreprocess = require("eslint-svelte3-preprocess");
const svelteConfig = require("./svelte.config");

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    createDefaultProgram: true,
    ecmaVersion: 2019,
    sourceType: "module",
  },
  extends: ["eslint:recommended"],
  plugins: ["svelte3", "@typescript-eslint"],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
    },
    {
      files: ["*.ts", "*.json"],
      extends: [
        "plugin:@typescript-eslint/recommended",
      ],
    },
  ],
  settings: {
    "svelte3/preprocess": eslintSveltePreprocess(svelteConfig.preprocess),
  },
};
