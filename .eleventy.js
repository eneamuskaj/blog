const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("posts", (collection) => {
    return collection.getFilteredByGlob("src/posts/*.md").reverse();
  });

  // Add a date filter using Luxon
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat("MMMM d, yyyy");
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
