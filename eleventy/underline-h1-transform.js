module.exports = (value, outputPath) => {
  if (outputPath && outputPath.indexOf('.html') > -1) {
    return value.replace(/\<h1\>(.+)\<\/h1\>/, '<h1><u>$1</u></h1>');
  }
  return value;
};
