/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  printWidth: 110,
  singleQuote: true,
  useTabs: true,
  semi: false,
};

module.exports = config;
