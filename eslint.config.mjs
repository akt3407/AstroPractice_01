import typescriptEslintParser from "@typescript-eslint/parser";
import astroParser from "astro-eslint-parser";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import importPlugin from "eslint-plugin-import-x";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

const importRules = {
  // unused-imports
  "@typescript-eslint/no-unused-vars": "off",
  "unused-imports/no-unused-imports": "error",
  "unused-imports/no-unused-vars": [
    "warn",
    {
      vars: "all",
      varsIgnorePattern: "^_",
      args: "after-used",
      argsIgnorePattern: "^_",
    },
  ],
  // import order
  "import-x/order": [
    "error",
    {
      groups: [
        "builtin",
        "external",
        "internal",
        ["parent", "sibling"],
        "index",
        "object",
        "type",
      ],
      "newlines-between": "always",
      alphabetize: {
        order: "asc",
        caseInsensitive: true,
      },
      pathGroups: [
        // grups の設定
      ],
    },
  ],
};

const eslintConfig = [
  // 除外ファイルの設定
  {
    ignores: [".astro/", "dist/", "node_modules"],
  },
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs["flat/recommended"],
  eslintConfigPrettier,
  // Astro + TypeScript
  {
    files: ["*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: typescriptEslintParser,
        extraFileExtensions: [".astro"],
      },
    },
    plugins: {
      "unused-imports": unusedImports,
      "import-x": importPlugin,
    },
    rules: importRules,
  },
  // JS / TS
  {
    plugins: {
      "unused-imports": unusedImports,
      "import-x": importPlugin,
    },
    rules: importRules,
  },
];

export default eslintConfig;
