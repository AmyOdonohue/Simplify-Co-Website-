export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/assessment.html": "assessment.html" });
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });

  eleventyConfig.addFilter("cleanUrl", (url) => url.replace(/\.html$/, ""));

  return {
    dir: { input: "src", output: "_site" },
    templateFormats: ["njk"],
    htmlTemplateEngine: "njk",
  };
}
