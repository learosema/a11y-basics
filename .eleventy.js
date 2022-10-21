const htmlMinTransform = require('./eleventy/html-min-transform');
const underlineH1Transform = require('./eleventy/underline-h1-transform');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

const navigationData = require('./navigation-data');

module.exports = function (config) {
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);
  config.addTransform('htmlmin', htmlMinTransform);
  config.addTransform('underlineh1', underlineH1Transform);
  config.addPlugin(pluginSyntaxHighlight);

  config.addCollection('slides', function (collectionApi) {
    const all = collectionApi.getAll();
    return navigationData
      .map((fileSlug) => all.find((item) => item.fileSlug === fileSlug))
      .filter(Boolean);
  });

  // Return your Object options:
  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
