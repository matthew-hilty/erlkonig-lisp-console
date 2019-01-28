var parse    = require('./parse');
var tokenize = require('./tokenize');

module.exports = function(sourceCode) {
  return parse(tokenize(sourceCode));
};
