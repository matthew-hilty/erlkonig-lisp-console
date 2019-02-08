import { commentSignal } from './commentSignal';

const createTokenRegex = function() {
  return /[\s,]*(~@|\#\+|\#\-|\#\!|[\[\](){}'`~@^]|"(?:\\.|[^\\"])*"|;.*|[^\s\[\](){}'"`,;]*)/g;
};

const isComment = function(match) {
  return match[0] === ';';
};

const isMeaningful = function(match) {
  return match !== '';
};

const tokenize = function(sourceCode) {
  let match;
  const tokenRegex = createTokenRegex();
  const result = [];
  while (isMeaningful(match = tokenRegex.exec(sourceCode)[1])) {
    if (isComment(match)) {
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

export { tokenize };
