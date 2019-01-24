var commentSignal, comment_question_, createTokenRegex, meaningful_question_, tokenize;

commentSignal = require('./commentSignal');

comment_question_ = function(match) {
  return match[0] === ';';
};

createTokenRegex = function() {
  return /[\s,]*(~@|\#\+|\#\-|\#\!|[\[\](){}'`~@^]|"(?:\\.|[^\\"])*"|;.*|[^\s\[\](){}'"`,;]*)/g;
};

meaningful_question_ = function(match) {
  return match !== '';
};

tokenize = function(sourceCode) {
  var match, result, tokenRegex;
  tokenRegex = createTokenRegex();
  result = [];
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
