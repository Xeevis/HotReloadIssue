// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    app: "/",
    pages: { url: "/pages" },
    shared: { url: "/shared" },
  },
  plugins: [
    "@snowpack/plugin-postcss",
    "@jadex/snowpack-plugin-tailwindcss-jit",
    ["@jadex/snowpack-plugin-watch", { extensions: [".razor"] }],
  ],
  buildOptions: {
    out: "wwwroot",
  },
  optimize: {
    minify: true,
    bundle: true,
    target: "es2020",
  },
};
