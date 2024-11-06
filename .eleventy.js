import handlebarsPlugin from "@11ty/eleventy-plugin-handlebars";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(handlebarsPlugin);

  eleventyConfig.addPassthroughCopy({ _public: "/" });

  eleventyConfig.addFilter("eq", (a1, a2) => a1 == a2);
  eleventyConfig.addFilter("add", (a1, a2) => a1 + a2);
}

export const config = {
  pathPrefix: "/landlords/",
};
