export default function (eleventyConfig) {
  // Static assets pass through untouched.
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");

  // Reviews and gallery entries are markdown files in content/, written by
  // Decap CMS. Only published:true items reach the site — that's the
  // approval gate Bijoy controls from /admin.
  eleventyConfig.addCollection("reviews", (api) =>
    api
      .getFilteredByGlob("content/reviews/*.md")
      .filter((item) => item.data.published === true)
      .sort((a, b) => (b.data.date || 0) - (a.data.date || 0))
  );

  eleventyConfig.addCollection("gallery", (api) =>
    api
      .getFilteredByGlob("content/gallery/*.md")
      .filter((item) => item.data.published !== false)
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  );

  // Star rating stored as a number 1-5; render as filled stars.
  eleventyConfig.addFilter("stars", (n) => "★★★★★".slice(0, Number(n) || 5));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
