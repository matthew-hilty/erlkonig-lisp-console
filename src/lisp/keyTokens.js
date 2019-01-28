var deref                 = 'deref';
var derefGlyph            = '@';
var catch_asterisk_       = 'catch*';
var def_bang_             = 'def!';
var _do                   = 'do';
var _eval                 = 'eval';
var _evalWithEnv          = 'eval-with-env';
var expand_hyphen_macro   = 'expand-macro';
var _false                = 'false';
var fn_asterisk_          = 'fn*';
var _getCurrentEnv        = '-get-current-env-';
var _getDefaultEnv        = '-get-default-env-';
var _if                   = 'if';
var ignore_bang_          = 'ignore!';
var ignore_bang_Glyph     = '#!';
var ignoreIfTrue          = 'ignoreIfTrue';
var ignoreIfTrueGlyph     = '#-';
var ignoreUnlessTrue      = 'ignoreUnlessTrue';
var ignoreUnlessTrueGlyph = '#+';
var ignore                = 'ignore';
var indexEnd              = '}';
var indexStart            = '{';
var let_asterisk_         = 'let*';
var letrec_asterisk_      = 'letrec*';
var listEnd               = ')';
var listStart             = '(';
var macro_asterisk_       = 'macro*';
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
var try_asterisk_         = 'try*';
var undef_bang_           = 'undef!';
var unquote               = 'unquote';
var unquoteGlyph          = '~'

var keyTokens = [
  deref,
  derefGlyph,
  catch_asterisk_,
  def_bang_,
  _do,
  _eval,
  _evalWithEnv,
  expand_hyphen_macro,
  _false,
  fn_asterisk_,
  _getCurrentEnv,
  _getDefaultEnv,
  _if,
  ignore_bang_,
  ignore_bang_Glyph,
  ignoreIfTrue,
  ignoreIfTrueGlyph,
  ignoreUnlessTrue,
  ignoreUnlessTrueGlyph,
  ignore,
  indexEnd,
  indexStart,
  let_asterisk_,
  letrec_asterisk_,
  listEnd,
  listStart,
  macro_asterisk_,
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
  try_asterisk_,
  undef_bang_,
  unquote,
  unquoteGlyph
];

var keywords = [
  catch_asterisk_,
  def_bang_,
  _do,
  _eval,
  _evalWithEnv,
  expand_hyphen_macro,
  _false,
  fn_asterisk_,
  _getCurrentEnv,
  _getDefaultEnv,
  _if,
  ignore,
  let_asterisk_,
  letrec_asterisk_,
  macro_asterisk_,
  nil,
  _process,
  quasiquote,
  quote,
  spliceUnquote,
  _true,
  try_asterisk_,
  undef_bang_,
  unquote
];

var macroTokens = [quasiquote, quote, spliceUnquote, unquote];

var glyphTokens = [
  derefGlyph,
  ignore_bang_Glyph,
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

var keyword_question_ = function(jsString) {
  return __indexOf.call(keywords, jsString) >= 0;
};

module.exports = {
  binaryGlyphTokens: binaryGlyphTokens,
  deref: deref,
  derefGlyph: derefGlyph,
  catch_asterisk_: catch_asterisk_,
  def_bang_: def_bang_,
  _do: _do,
  _eval: _eval,
  _evalWithEnv: _evalWithEnv,
  expand_hyphen_macro: expand_hyphen_macro,
  _false: _false,
  fn_asterisk_: fn_asterisk_,
  _getCurrentEnv: _getCurrentEnv,
  _getDefaultEnv: _getDefaultEnv,
  glyphTokens: glyphTokens,
  _if: _if,
  ignoreIfTrue: ignoreIfTrue,
  ignoreIfTrueGlyph: ignoreIfTrueGlyph,
  ignoreUnlessTrue: ignoreUnlessTrue,
  ignoreUnlessTrueGlyph: ignoreUnlessTrueGlyph,
  ignore: ignore,
  ignore_bang_: ignore_bang_,
  ignore_bang_Glyph: ignore_bang_Glyph,
  indexEnd: indexEnd,
  indexStart: indexStart,
  keyTokens: keyTokens,
  keyword_question_: keyword_question_,
  let_asterisk_: let_asterisk_,
  letrec_asterisk_: letrec_asterisk_,
  listEnd: listEnd,
  listStart: listStart,
  macro_asterisk_: macro_asterisk_,
  macroTokens: macroTokens,
  nil: nil,
  _process: _process,
  quasiquote: quasiquote,
  quasiquoteGlyph: quasiquoteGlyph,
  quote: quote,
  quoteGlyph: quoteGlyph,
  splat: splat,
  spliceUnquote: spliceUnquote,
  spliceUnquoteGlyph: spliceUnquoteGlyph,
  _true: _true,
  try_asterisk_: try_asterisk_,
  undef_bang_: undef_bang_,
  unquote: unquote,
  unquoteGlyph: unquoteGlyph
};
