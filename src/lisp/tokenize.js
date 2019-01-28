var commentSignal = require('./commentSignal');

var comment_question_ = function(match) {
  return match[0] === ';';
};

var createTokenRegex = function() {
  return /[\s,]*(~@|\#\+|\#\-|\#\!|[\[\](){}'`~@^]|"(?:\\.|[^\\"])*"|;.*|[^\s\[\](){}'"`,;]*)/g;
};

var meaningful_question_ = function(match) {
  return match !== '';
};

var tokenize = function(sourceCode) {
  var match;
  var tokenRegex = createTokenRegex();
  var result = [];
  while (meaningful_question_(match = tokenRegex.exec(sourceCode)[1])) {
    if (comment_question_(match)) {
      continue;
    }
    result.push(match);
  }
  if (result.length === 0) {
    return commentSignal;
  } else {
    return result;
  }
};

module.exports = tokenize;
