var binaryGlyphTokens     = require('./keyTokens').binaryGlyphTokens;
var comment               = require('./commentSignal');
var createErlBoolean      = require('./type-utilities').createErlBoolean;
var createErlIdentifier   = require('./type-utilities').createErlIdentifier;
var createErlIgnore       = require('./type-utilities').createErlIgnore;
var createErlIndex        = require('./type-utilities').createErlIndex;
var createErlList         = require('./type-utilities').createErlList;
var createErlNil          = require('./type-utilities').createErlNil;
var createErlNumber       = require('./type-utilities').createErlNumber;
var createErlString       = require('./type-utilities').createErlString;
var createErlSymbol       = require('./type-utilities').createErlSymbol;
var deref                 = require('./keyTokens').deref;
var derefGlyph            = require('./keyTokens').derefGlyph;
var extractJsValue        = require('./type-utilities').extractJsValue;
var _false                = require('./keyTokens')._false;
var glyphTokens           = require('./keyTokens').glyphTokens;
var ignore                = require('./keyTokens').ignore;
var ignore_bang_          = require('./keyTokens').ignore_bang_;
var ignore_bang_Glyph     = require('./keyTokens').ignore_bang_Glyph;
var ignoreIfTrue          = require('./keyTokens').ignoreIfTrue;
var ignoreIfTrueGlyph     = require('./keyTokens').ignoreIfTrueGlyph;
var ignoreUnlessTrue      = require('./keyTokens').ignoreUnlessTrue;
var ignoreUnlessTrueGlyph = require('./keyTokens').ignoreUnlessTrueGlyph;
var indexEnd              = require('./keyTokens').indexEnd;
var indexStart            = require('./keyTokens').indexStart;
var keyTokens             = require('./keyTokens').keyTokens;
var listEnd               = require('./keyTokens').listEnd;
var listStart             = require('./keyTokens').listStart;
var nil                   = require('./keyTokens').nil;
var quasiquote            = require('./keyTokens').quasiquote;
var quote                 = require('./keyTokens').quote;
var spliceUnquote         = require('./keyTokens').spliceUnquote;
var unquote               = require('./keyTokens').unquote;
var quasiquoteGlyph       = require('./keyTokens').quasiquoteGlyph;
var quoteGlyph            = require('./keyTokens').quoteGlyph;
var spliceUnquoteGlyph    = require('./keyTokens').spliceUnquoteGlyph;
var unquoteGlyph          = require('./keyTokens').unquoteGlyph;
var reverse               = require('./linked-list').reverse;
var _true                 = require('./keyTokens')._true;

var  __indexOf = [].indexOf || function(item) {
  for (var i = 0, l = this.length; i < l; i++) {
    if (i in this && this[i] === item) return i;
  } return -1;
};

var atomize = function(token) {
  var createErlValue = (function() {
    if (nil_question_(token)) {
      return createErlNil;
    } else if (ignore_question_(token)) {
      return createErlIgnore;
    } else if (boolean_question_(token)) {
      return function(token) {
        return createErlBoolean(parseBoolean(token));
      };
    } else if (string_question_(token)) {
      return createErlString;
    } else if (identifer_question_(token)) {
      return createErlIdentifier;
    } else if (integer_question_(token)) {
      return function(token) {
        return createErlNumber(parseInt10(token));
      };
    } else if (float_question_(token)) {
      return function(token) {
        return createErlNumber(parseFloat10(token));
      };
    } else {
      return createErlSymbol;
    }
  })();
  return createErlValue(token);
};

var boolean_question_ = function(token) {
  return token === _false || token === _true;
};

var float_question_ = function(token) {
  return /^(-|\+)?[0-9](_|\d)*\.(\d|(\d(_|\d)*\d))$/.test(token);
};

var binaryGlyph_question_ = function(token) {
  return __indexOf.call(binaryGlyphTokens, token) >= 0;
};

var glyph_question_ = function(token) {
  return __indexOf.call(glyphTokens, token) >= 0;
};

var ignore_question_ = function(token) {
  return token === ignore;
};

var indexStart_question_ = function(token) {
  return token === indexStart;
};

var integer_question_ = function(token) {
  return /^(0(?!\.)|((-|\+)?[1-9](_|\d)*$))/.test(token);
};

var listStart_question_ = function(token) {
  return token === listStart;
};

var nil_question_ = function(token) {
  return token === nil;
};

var _parse = function(token, tokens) {
  if (listStart_question_(token)) {
    return parseList(tokens);
  } else if (indexStart_question_(token)) {
    return parseIndex(tokens);
  } else if (glyph_question_(token)) {
    return parseGlyph(glyphIndex[token], tokens);
  } else if (binaryGlyph_question_(token)) {
    return parseBinaryGlyph(binaryGlyphIndex[token], tokens);
  } else {
    return atomize(token);
  }
};

var parse = function(tokens) {
  if (tokens === comment) {
    return comment;
  }
  return _parse(tokens.shift(), tokens);
};

var parseBinaryGlyph = function(keyword, tokens) {
  return createErlList(
    createErlSymbol(keyword),
    createErlList(
      parse(tokens),
      createErlList(parse(tokens))));
};

var parseBoolean = function(token) {
  return token === _true;
};

var parseFloat10 = function(token) {
  return parseFloat(stripUnderscores(token), 10);
};

var parseGlyph = function(keyword, tokens) {
  return createErlList(
    createErlSymbol(keyword),
    createErlList(parse(tokens)));
};

var parseIndex = function(tokens) {
  var token;
  var jsIndex = {};
  var key = null;
  var keyStep_question_ = true;
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

var parseInt10 = function(token) {
  return parseInt(stripUnderscores(token), 10);
};

var parseList = function(tokens) {
  var token;
  var erlList = createErlList();
  while ((token = tokens.shift()) !== listEnd) {
    erlList = createErlList(_parse(token, tokens), erlList);
  }
  return reverse(erlList);
};

var startsWith_question_ = function(char) {
  return function(token) {
    return token[0] === char;
  };
};

var stripUnderscores = function(token) {
  return token.replace(/_/g, '');
};

var glyphIndex = {};

glyphIndex[derefGlyph]         = deref;
glyphIndex[ignore_bang_Glyph]  = ignore_bang_;
glyphIndex[quasiquoteGlyph]    = quasiquote;
glyphIndex[quoteGlyph]         = quote;
glyphIndex[spliceUnquoteGlyph] = spliceUnquote;
glyphIndex[unquoteGlyph]       = unquote;

var binaryGlyphIndex = {};

binaryGlyphIndex[ignoreIfTrueGlyph]     = ignoreIfTrue;
binaryGlyphIndex[ignoreUnlessTrueGlyph] = ignoreUnlessTrue;

var string_question_ = startsWith_question_('"');

var identifer_question_ = startsWith_question_(':');

module.exports = parse;
