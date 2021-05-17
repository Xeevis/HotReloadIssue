module.exports = (snowpackConfig, pluginOptions) => {
  return {
    name: "@jadex/snowpack-plugin-watch",
    resolve: {
      input: [...pluginOptions.extensions],
      output: [...pluginOptions.extensions],
    },
    async load({ filePath, isDev }) {
      return {
        "": "",
      };
    },
  };
};
