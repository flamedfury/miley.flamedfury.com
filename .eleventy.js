module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/css");
	eleventyConfig.addPassthroughCopy("src/img");
	eleventyConfig.addPassthroughCopy("src/js");
	eleventyConfig.addPassthroughCopy("src/gallery");

	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

	return {
		dir: {
			// templates
			markdownTemplateEngine: "njk",
			htmlTemplateEngine: "njk",
			dataTemplateEngine: "njk",

			// enable passthrough file copy for static assets.
			passthroughFileCopy: true,

			// set our prefered input and output directories
			input: "src",
			output: "public",
		}
	};
};