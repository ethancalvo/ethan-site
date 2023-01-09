
module.exports = function (eleventyConfig) {
  
  // eleventyConfig.addPassthroughCopy("src/js/");
  // eleventyConfig.addWatchTarget("./src/js/");

  eleventyConfig.addPassthroughCopy({"src/styles/":"styles/"});
  eleventyConfig.addWatchTarget("./src/styles/");

  eleventyConfig.setBrowserSyncConfig({
    notify: false,
    files:['./public/js'],
    browser: "Microsoft Edge",
    open:"local"
  });

  return {
    dir: {
      input: "src/html",
      output: "public",
      layouts: "_layouts"
    },
  };
};
