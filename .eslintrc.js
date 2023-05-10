module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["prettify.js", "lang-css.js"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  plugins: ["react", "prettier"],
  rules: {
    // Règles spécifiques
  },
};
