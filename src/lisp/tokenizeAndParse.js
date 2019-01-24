var parse, tokenize;

parse = require('./parse');

tokenize = require('./tokenize');

module.exports = function(sourceCode) {
  return parse(tokenize(sourceCode));
};
