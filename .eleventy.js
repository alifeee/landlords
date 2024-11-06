const handlebarsPlugin = require("@11ty/eleventy-plugin-handlebars");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(handlebarsPlugin);

  eleventyConfig.addPassthroughCopy({ _public: "/" });

  eleventyConfig.addFilter("eq", (a1, a2) => a1 == a2);
  eleventyConfig.addFilter("add", (a1, a2) => a1 + a2);
};
