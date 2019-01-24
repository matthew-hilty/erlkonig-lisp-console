var atomize, binaryGlyphIndex, binaryGlyphTokens, binaryGlyph_question_, boolean_question_, comment, createErlBoolean, createErlIdentifier, createErlIgnore, createErlIndex, createErlList, createErlNil, createErlNumber, createErlString, createErlSymbol, deref, derefGlyph, extractJsValue, float_question_, glyphIndex, glyphTokens, glyph_question_, identifer_question_, ignore, ignoreIfTrue, ignoreIfTrueGlyph, ignoreUnlessTrue, ignoreUnlessTrueGlyph, ignore_bang_, ignore_bang_Glyph, ignore_question_, indexEnd, indexStart, indexStart_question_, integer_question_, keyTokens, listEnd, listStart, listStart_question_, nil, nil_question_, parse, parseBinaryGlyph, parseBoolean, parseFloat10, parseGlyph, parseIndex, parseInt10, parseList, quasiquote, quasiquoteGlyph, quote, quoteGlyph, reverse, spliceUnquote, spliceUnquoteGlyph, startsWith_question_, string_question_, stripUnderscores, unquote, unquoteGlyph, _false, _parse, _true,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

binaryGlyphTokens = require('./keyTokens').binaryGlyphTokens;

comment = require('./commentSignal');

createErlBoolean = require('./type-utilities').createErlBoolean;

createErlIdentifier = require('./type-utilities').createErlIdentifier;

createErlIgnore = require('./type-utilities').createErlIgnore;

createErlIndex = require('./type-utilities').createErlIndex;

createErlList = require('./type-utilities').createErlList;

createErlNil = require('./type-utilities').createErlNil;

createErlNumber = require('./type-utilities').createErlNumber;

createErlString = require('./type-utilities').createErlString;

createErlSymbol = require('./type-utilities').createErlSymbol;

deref = require('./keyTokens').deref;

derefGlyph = require('./keyTokens').derefGlyph;

extractJsValue = require('./type-utilities').extractJsValue;

_false = require('./keyTokens')._false;

glyphTokens = require('./keyTokens').glyphTokens;

ignore = require('./keyTokens').ignore;

ignore_bang_ = require('./keyTokens').ignore_bang_;

ignore_bang_Glyph = require('./keyTokens').ignore_bang_Glyph;

ignoreIfTrue = require('./keyTokens').ignoreIfTrue;

ignoreIfTrueGlyph = require('./keyTokens').ignoreIfTrueGlyph;

ignoreUnlessTrue = require('./keyTokens').ignoreUnlessTrue;

ignoreUnlessTrueGlyph = require('./keyTokens').ignoreUnlessTrueGlyph;

indexEnd = require('./keyTokens').indexEnd;

indexStart = require('./keyTokens').indexStart;

keyTokens = require('./keyTokens').keyTokens;

listEnd = require('./keyTokens').listEnd;

listStart = require('./keyTokens').listStart;

nil = require('./keyTokens').nil;

quasiquote = require('./keyTokens').quasiquote;

quote = require('./keyTokens').quote;

spliceUnquote = require('./keyTokens').spliceUnquote;

unquote = require('./keyTokens').unquote;

quasiquoteGlyph = require('./keyTokens').quasiquoteGlyph;

quoteGlyph = require('./keyTokens').quoteGlyph;

spliceUnquoteGlyph = require('./keyTokens').spliceUnquoteGlyph;

unquoteGlyph = require('./keyTokens').unquoteGlyph;

reverse = require('./linked-list').reverse;

_true = require('./keyTokens')._true;

atomize = function(token) {
  var createErlValue;
  createErlValue = (function() {
    switch (false) {
      case !nil_question_(token):
        return createErlNil;
      case !ignore_question_(token):
        return createErlIgnore;
      case !boolean_question_(token):
        return function(__i) {
          return createErlBoolean(parseBoolean(__i));
        };
      case !string_question_(token):
        return createErlString;
      case !identifer_question_(token):
        return createErlIdentifier;
      case !integer_question_(token):
        return function(__i) {
          return createErlNumber(parseInt10(__i));
        };
      case !float_question_(token):
        return function(__i) {
          return createErlNumber(parseFloat10(__i));
        };
      default:
        return createErlSymbol;
    }
  })();
  return createErlValue(token);
};

boolean_question_ = function(token) {
  return token === _false || token === _true;
};

float_question_ = function(token) {
  return /^(-|\+)?[0-9](_|\d)*\.(\d|(\d(_|\d)*\d))$/.test(token);
};

binaryGlyph_question_ = function(token) {
  return __indexOf.call(binaryGlyphTokens, token) >= 0;
};

glyph_question_ = function(token) {
  return __indexOf.call(glyphTokens, token) >= 0;
};

ignore_question_ = function(token) {
  return token === ignore;
};

indexStart_question_ = function(token) {
  return token === indexStart;
};

integer_question_ = function(token) {
  return /^(0(?!\.)|((-|\+)?[1-9](_|\d)*$))/.test(token);
};

listStart_question_ = function(token) {
  return token === listStart;
};

nil_question_ = function(token) {
  return token === nil;
};

_parse = function(token, tokens) {
  switch (false) {
    case !listStart_question_(token):
      return parseList(tokens);
    case !indexStart_question_(token):
      return parseIndex(tokens);
    case !glyph_question_(token):
      return parseGlyph(glyphIndex[token], tokens);
    case !binaryGlyph_question_(token):
      return parseBinaryGlyph(binaryGlyphIndex[token], tokens);
    default:
      return atomize(token);
  }
};

parse = function(tokens) {
  if (tokens === comment) {
    return comment;
  }
  return _parse(tokens.shift(), tokens);
};

parseBinaryGlyph = function(keyword, tokens) {
  return createErlList(createErlSymbol(keyword), createErlList(parse(tokens), createErlList(parse(tokens))));
};

parseBoolean = function(token) {
  return token === _true;
};

parseFloat10 = function(token) {
  return parseFloat(stripUnderscores(token), 10);
};

parseGlyph = function(keyword, tokens) {
  return createErlList(createErlSymbol(keyword), createErlList(parse(tokens)));
};

parseIndex = function(tokens) {
  var jsIndex, key, keyStep_question_, token;
  jsIndex = {};
  key = null;
  keyStep_question_ = true;
  while ((token = tokens.shift()) !== indexEnd) {
    if (keyStep_question_) {
      key = _parse(token, tokens);
      keyStep_question_ = false;
    } else {
      jsIndex[extractJsValue(key)] = _parse(token, tokens);
      keyStep_question_ = true;
    }
  }
  return createErlIndex(jsIndex);
};

parseInt10 = function(token) {
  return parseInt(stripUnderscores(token), 10);
};

parseList = function(tokens) {
  var erlList, token;
  erlList = createErlList();
  while ((token = tokens.shift()) !== listEnd) {
    erlList = createErlList(_parse(token, tokens), erlList);
  }
  return reverse(erlList);
};

startsWith_question_ = function(char) {
  return function(token) {
    return token[0] === char;
  };
};

stripUnderscores = function(token) {
  return token.replace(/_/g, '');
};

glyphIndex = {};

glyphIndex[derefGlyph] = deref;

glyphIndex[ignore_bang_Glyph] = ignore_bang_;

glyphIndex[quasiquoteGlyph] = quasiquote;

glyphIndex[quoteGlyph] = quote;

glyphIndex[spliceUnquoteGlyph] = spliceUnquote;

glyphIndex[unquoteGlyph] = unquote;

binaryGlyphIndex = {};

binaryGlyphIndex[ignoreIfTrueGlyph] = ignoreIfTrue;

binaryGlyphIndex[ignoreUnlessTrueGlyph] = ignoreUnlessTrue;

string_question_ = startsWith_question_('"');

identifer_question_ = startsWith_question_(':');

module.exports = parse;
