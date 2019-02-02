import { parse } from './parse';
import { tokenize } from './tokenize';

export const tokenizeAndParse = function(sourceCode) {
  return parse(tokenize(sourceCode));
};
