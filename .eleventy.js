const htmlMinTransform = require('./eleventy/html-min-transform');
const underlineH1Transform = require('./eleventy/underline-h1-transform');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function(config) {
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);
  config.addTransform('htmlmin', htmlMinTransform);
  config.addTransform('underlineh1', underlineH1Transform); 
  // Return your Object options:
  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'public'
    }
  }
};
