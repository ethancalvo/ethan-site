const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("cssMin", function(code) {
    let output = new CleanCSS({}).minify(code);
    return output.styles;
  });

  eleventyConfig.addWatchTarget("./public/js/");

  eleventyConfig.addWatchTarget("./src/css");

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
    },
  };
};
