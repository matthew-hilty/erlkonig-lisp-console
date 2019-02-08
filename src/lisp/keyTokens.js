const deref                 = 'deref';
const derefGlyph            = '@';
const catchStar             = 'catch*';
const defBang               = 'def!';
const _do                   = 'do';
const _eval                 = 'eval';
const _evalWithEnv          = 'eval-with-env';
const expandMacro           = 'expand-macro';
const _false                = 'false';
const fnStar                = 'fn*';
const _getCurrentEnv        = '-get-current-env-';
const _getDefaultEnv        = '-get-default-env-';
const _if                   = 'if';
const ignoreBang            = 'ignore!';
const ignoreBangGlyph       = '#!';
const ignoreIfTrue          = 'ignoreIfTrue';
const ignoreIfTrueGlyph     = '#-';
const ignoreUnlessTrue      = 'ignoreUnlessTrue';
const ignoreUnlessTrueGlyph = '#+';
const ignore                = 'ignore';
const indexEnd              = '}';
const indexStart            = '{';
const letStar               = 'let*';
const letrecStar            = 'letrec*';
const listEnd               = ')';
const listStart             = '(';
const macroStar             = 'macro*';
const nil                   = 'nil';
const _process              = '-process-';
const quasiquote            = 'quasiquote';
const quasiquoteGlyph       = '`';
const quote                 = 'quote';
const quoteGlyph            = '\'';
const splat                 = '&';
const spliceUnquote         = 'splice-unquote';
const spliceUnquoteGlyph    = '~@';
const _true                 = 'true';
const tryStar               = 'try*';
const undefBang             = 'undef!';
const unquote               = 'unquote';
const unquoteGlyph          = '~'

const keyTokens = [
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

const keywords = [
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

const macroTokens = [quasiquote, quote, spliceUnquote, unquote];

const glyphTokens = [
  derefGlyph,
  ignoreBangGlyph,
  quasiquoteGlyph,
  quoteGlyph,
  spliceUnquoteGlyph,
  unquoteGlyph
];

const binaryGlyphTokens = [ignoreIfTrueGlyph, ignoreUnlessTrueGlyph];

const __indexOf = [].indexOf || function(item) {
  for (let i = 0, l = this.length; i < l; i++) {
    if (i in this && this[i] === item) return i;
  } return -1;
};

const isKeyword = function(jsString) {
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
