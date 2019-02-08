import { binaryGlyphTokens } from './keyTokens';
import { commentSignal } from './commentSignal';
import { createErlBoolean } from './type-utilities';
import { createErlIdentifier } from './type-utilities';
import { createErlIgnore } from './type-utilities';
import { createErlIndex } from './type-utilities';
import { createErlList } from './type-utilities';
import { createErlNil } from './type-utilities';
import { createErlNumber } from './type-utilities';
import { createErlString } from './type-utilities';
import { createErlSymbol } from './type-utilities';
import { deref } from './keyTokens';
import { derefGlyph } from './keyTokens';
import { extractJsValue } from './type-utilities';
import { _false } from './keyTokens';
import { glyphTokens } from './keyTokens';
import { ignore } from './keyTokens';
import { ignoreBang } from './keyTokens';
import { ignoreBangGlyph } from './keyTokens';
import { ignoreIfTrue } from './keyTokens';
import { ignoreIfTrueGlyph } from './keyTokens';
import { ignoreUnlessTrue } from './keyTokens';
import { ignoreUnlessTrueGlyph } from './keyTokens';
import { indexEnd } from './keyTokens';
import { indexStart } from './keyTokens';
import { keyTokens } from './keyTokens';
import { listEnd } from './keyTokens';
import { listStart } from './keyTokens';
import { nil } from './keyTokens';
import { quasiquote } from './keyTokens';
import { quote } from './keyTokens';
import { spliceUnquote } from './keyTokens';
import { unquote } from './keyTokens';
import { quasiquoteGlyph } from './keyTokens';
import { quoteGlyph } from './keyTokens';
import { spliceUnquoteGlyph } from './keyTokens';
import { unquoteGlyph } from './keyTokens';
import { reverse } from './linked-list';
import { _true } from './keyTokens';

const  __indexOf = [].indexOf || function(item) {
  for (let i = 0, l = this.length; i < l; i++) {
    if (i in this && this[i] === item) return i;
  } return -1;
};

const atomize = function(token) {
  const createErlValue = (function() {
    if (isNil(token)) {
      return createErlNil;
    } else if (isIgnore(token)) {
      return createErlIgnore;
    } else if (isBoolean(token)) {
      return function(token) {
        return createErlBoolean(parseBoolean(token));
      };
    } else if (isString(token)) {
      return createErlString;
    } else if (isIdentifier(token)) {
      return createErlIdentifier;
    } else if (isInteger(token)) {
      return function(token) {
        return createErlNumber(parseInt10(token));
      };
    } else if (isFloat(token)) {
      return function(token) {
        return createErlNumber(parseFloat10(token));
      };
    } else {
      return createErlSymbol;
    }
  })();
  return createErlValue(token);
};

const isBoolean = function(token) {
  return token === _false || token === _true;
};

const isFloat = function(token) {
  return /^(-|\+)?[0-9](_|\d)*\.(\d|(\d(_|\d)*\d))$/.test(token);
};

const isBinaryGlyph = function(token) {
  return __indexOf.call(binaryGlyphTokens, token) >= 0;
};

const isGlyph = function(token) {
  return __indexOf.call(glyphTokens, token) >= 0;
};

const isIgnore = function(token) {
  return token === ignore;
};

const isIndexStart = function(token) {
  return token === indexStart;
};

const isInteger = function(token) {
  return /^(0(?!\.)|((-|\+)?[1-9](_|\d)*$))/.test(token);
};

const isListStart = function(token) {
  return token === listStart;
};

const isNil = function(token) {
  return token === nil;
};

const _parse = function(token, tokens) {
  if (isListStart(token)) {
    return parseList(tokens);
  } else if (isIndexStart(token)) {
    return parseIndex(tokens);
  } else if (isGlyph(token)) {
    return parseGlyph(glyphIndex[token], tokens);
  } else if (isBinaryGlyph(token)) {
    return parseBinaryGlyph(binaryGlyphIndex[token], tokens);
  } else {
    return atomize(token);
  }
};

const parse = function(tokens) {
  if (tokens === commentSignal) {
    return commentSignal;
  }
  return _parse(tokens.shift(), tokens);
};

const parseBinaryGlyph = function(keyword, tokens) {
  return createErlList(
    createErlSymbol(keyword),
    createErlList(
      parse(tokens),
      createErlList(parse(tokens))));
};

const parseBoolean = function(token) {
  return token === _true;
};

const parseFloat10 = function(token) {
  return parseFloat(stripUnderscores(token), 10);
};

const parseGlyph = function(keyword, tokens) {
  return createErlList(
    createErlSymbol(keyword),
    createErlList(parse(tokens)));
};

const parseIndex = function(tokens) {
  let token;
  const jsIndex = {};
  let key = null;
  let isKeyStep = true;
  while ((token = tokens.shift()) !== indexEnd) {
    if (isKeyStep) {
      key = _parse(token, tokens);
      isKeyStep = false;
    } else {
      jsIndex[extractJsValue(key)] = _parse(token, tokens);
      isKeyStep = true;
    }
  }
  return createErlIndex(jsIndex);
};

const parseInt10 = function(token) {
  return parseInt(stripUnderscores(token), 10);
};

const parseList = function(tokens) {
  let token;
  let erlList = createErlList();
  while ((token = tokens.shift()) !== listEnd) {
    erlList = createErlList(_parse(token, tokens), erlList);
  }
  return reverse(erlList);
};

const startsWith = function(char) {
  return function(token) {
    return token[0] === char;
  };
};

const stripUnderscores = function(token) {
  return token.replace(/_/g, '');
};

const glyphIndex = {};

glyphIndex[derefGlyph]         = deref;
glyphIndex[ignoreBangGlyph]    = ignoreBang;
glyphIndex[quasiquoteGlyph]    = quasiquote;
glyphIndex[quoteGlyph]         = quote;
glyphIndex[spliceUnquoteGlyph] = spliceUnquote;
glyphIndex[unquoteGlyph]       = unquote;

const binaryGlyphIndex = {};

binaryGlyphIndex[ignoreIfTrueGlyph]     = ignoreIfTrue;
binaryGlyphIndex[ignoreUnlessTrueGlyph] = ignoreUnlessTrue;

const isString = startsWith('"');

const isIdentifier = startsWith(':');

export { parse };
