module.exports = {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: { parser: "astro" },
    },
    {
      files: ["*.ts", "*.tsx", "*.js", "*.mjs", "*.jsx"],
      options: { parser: "typescript" },
    },
  ],
  // フォーマットの設定
  trailingComma: "all",
  tabWidth: 2,
  printWidth: 80,
  singleQuote: false,
  arrowParens: "always",
  bracketSpacing: true,
  bracketSameLine: false,
  semi: true,
  endOfLine: "lf",
};
