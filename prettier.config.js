module.exports = {
  tailwindConfig: "./tailwind.config.js",
  overrides: [
    {
      files: ["*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      rules: {
        "prettier/prettier": "error",
      },
    },
  ],
};
