// Import fast-glob package
const fg = require('fast-glob');

// Run search for images in /gallery
const galleryImages = fg.sync(['**/gallery/*', 'img']);

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/css");
	eleventyConfig.addPassthroughCopy("src/img");
	eleventyConfig.addPassthroughCopy("src/js");
	eleventyConfig.addPassthroughCopy("src/gallery");

	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

	return {
		dir: {
			// enable passthrough file copy for static assets.
			passthroughFileCopy: true,

			// set our prefered input and output directories
			input: "src",
			output: "public",
		}
	};
};