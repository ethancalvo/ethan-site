module.exports = function (eleventyConfig) {
  eleventyConfig.addExtension(["11ty.ts"], {
    key: "11ty.js",
  });

  // eleventyConfig.addPassthroughCopy("src/js/");
  // eleventyConfig.addWatchTarget("./src/js/");

  eleventyConfig.addPassthroughCopy({ "src/styles/": "styles/" });
  eleventyConfig.addWatchTarget("./src/styles/");

  eleventyConfig.setServerOptions({
    liveReload: true,
    port: 8080,
    watch: [],
    showAllHosts: true,
  });

  return {
    dir: {
      input: "src/html",
      output: "public",
      layouts: "_layouts",
    },
  };
};
