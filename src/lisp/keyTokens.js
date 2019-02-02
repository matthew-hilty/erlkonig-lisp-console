var deref                 = 'deref';
var derefGlyph            = '@';
var catchStar             = 'catch*';
var defBang               = 'def!';
var _do                   = 'do';
var _eval                 = 'eval';
var _evalWithEnv          = 'eval-with-env';
var expandMacro           = 'expand-macro';
var _false                = 'false';
var fnStar                = 'fn*';
var _getCurrentEnv        = '-get-current-env-';
var _getDefaultEnv        = '-get-default-env-';
var _if                   = 'if';
var ignoreBang            = 'ignore!';
var ignoreBangGlyph       = '#!';
var ignoreIfTrue          = 'ignoreIfTrue';
var ignoreIfTrueGlyph     = '#-';
var ignoreUnlessTrue      = 'ignoreUnlessTrue';
var ignoreUnlessTrueGlyph = '#+';
var ignore                = 'ignore';
var indexEnd              = '}';
var indexStart            = '{';
var letStar               = 'let*';
var letrecStar            = 'letrec*';
var listEnd               = ')';
var listStart             = '(';
var macroStar             = 'macro*';
var nil                   = 'nil';
var _process              = '-process-';
var quasiquote            = 'quasiquote';
var quasiquoteGlyph       = '`';
var quote                 = 'quote';
var quoteGlyph            = '\'';
var splat                 = '&';
var spliceUnquote         = 'splice-unquote';
var spliceUnquoteGlyph    = '~@';
var _true                 = 'true';
var tryStar               = 'try*';
var undefBang             = 'undef!';
var unquote               = 'unquote';
var unquoteGlyph          = '~'

var keyTokens = [
  deref,
  derefGlyph,
  catchStar,
  defBang,
  _do,
  _eval,
  _evalWithEnv,
  expandMacro,
  _false,
  fnStar,
  _getCurrentEnv,
  _getDefaultEnv,
  _if,
  ignoreBang,
  ignoreBangGlyph,
  ignoreIfTrue,
  ignoreIfTrueGlyph,
  ignoreUnlessTrue,
  ignoreUnlessTrueGlyph,
  ignore,
  indexEnd,
  indexStart,
  letStar,
  letrecStar,
  listEnd,
  listStart,
  macroStar,
  nil,
  _process,
  quasiquote,
  quasiquoteGlyph,
  quote,
  quoteGlyph,
  splat,
  spliceUnquote,
  spliceUnquoteGlyph,
  _true,
  tryStar,
  undefBang,
  unquote,
  unquoteGlyph
];

var keywords = [
  catchStar,
  defBang,
  _do,
  _eval,
  _evalWithEnv,
  expandMacro,
  _false,
  fnStar,
  _getCurrentEnv,
  _getDefaultEnv,
  _if,
  ignore,
  letStar,
  letrecStar,
  macroStar,
  nil,
  _process,
  quasiquote,
  quote,
  spliceUnquote,
  _true,
  tryStar,
  undefBang,
  unquote
];

var macroTokens = [quasiquote, quote, spliceUnquote, unquote];

var glyphTokens = [
  derefGlyph,
  ignoreBangGlyph,
  quasiquoteGlyph,
  quoteGlyph,
  spliceUnquoteGlyph,
  unquoteGlyph
];

var binaryGlyphTokens = [ignoreIfTrueGlyph, ignoreUnlessTrueGlyph];

var __indexOf = [].indexOf || function(item) {
  for (var i = 0, l = this.length; i < l; i++) {
    if (i in this && this[i] === item) return i;
  } return -1;
};

var isKeyword = function(jsString) {
  return __indexOf.call(keywords, jsString) >= 0;
};

export {
  binaryGlyphTokens,
  deref,
  derefGlyph,
  catchStar,
  defBang,
  _do,
  _eval,
  _evalWithEnv,
  expandMacro,
  _false,
  fnStar,
  _getCurrentEnv,
  _getDefaultEnv,
  glyphTokens,
  _if,
  ignoreIfTrue,
  ignoreIfTrueGlyph,
  ignoreUnlessTrue,
  ignoreUnlessTrueGlyph,
  ignore,
  ignoreBang,
  ignoreBangGlyph,
  indexEnd,
  indexStart,
  keyTokens,
  isKeyword,
  letStar,
  letrecStar,
  listEnd,
  listStart,
  macroStar,
  macroTokens,
  nil,
  _process,
  quasiquote,
  quasiquoteGlyph,
  quote,
  quoteGlyph,
  splat,
  spliceUnquote,
  spliceUnquoteGlyph,
  _true,
  tryStar,
  undefBang,
  unquote,
  unquoteGlyph
};
