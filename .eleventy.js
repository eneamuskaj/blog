module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("posts", (collection) => {
    return collection.getFilteredByGlob("src/posts/*.md").reverse();
  });

  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    },
    markdownTemplateEngine: "njk"
  };
};
