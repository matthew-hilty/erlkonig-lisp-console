var commentSignal              = require('./commentSignal');
var extractJsValue             = require('./type-utilities').extractJsValue;
var indexEnd                   = require('./keyTokens').indexEnd;
var indexStart                 = require('./keyTokens').indexStart;
var isErlAtom                  = require('./type-utilities').isErlAtom;
var isErlCoreEffectfulFunction = require('./type-utilities').isErlCoreEffectfulFunction;
var isErlCorePureFunction      = require('./type-utilities').isErlCorePureFunction;
var isErlIdentifier            = require('./type-utilities').isErlIdentifier;
var isErlIgnore                = require('./type-utilities').isErlIgnore;
var isErlIndex                 = require('./type-utilities').isErlIndex;
var isErlKeyword               = require('./type-utilities').isErlKeyword;
var isErlList                  = require('./type-utilities').isErlList;
var isErlMacro                 = require('./type-utilities').isErlMacro;
var isErlNil                   = require('./type-utilities').isErlNil;
var isErlString                = require('./type-utilities').isErlString;
var isErlUserPureFunction      = require('./type-utilities').isErlUserPureFunction;
var listEnd                    = require('./keyTokens').listEnd;
var listStart                  = require('./keyTokens').listStart;
var reduce                     = require('./linked-list').reduce;

var __hasProp = {}.hasOwnProperty;

var adjoinErlValue = function(shouldBeReadable) {
  return function(memo, erlValue) {
    var serialized = serialize(erlValue, shouldBeReadable);
    if (memo.length === 0) {
      return serialized;
    } else {
      return "" + memo + " " + serialized;
    }
  };
};

var serialize = function(erlExpr, shouldBeReadable) {
  if (erlExpr === commentSignal) {
    return commentSignal;
  }
  var _serialize = (function() {
    if (isErlList(erlExpr)) {
      return serializeList;
    } else if (isErlIgnore(erlExpr)) {
      return function(erlValue) {
        return ignoreLabel;
      };
    } else if (isErlIndex(erlExpr)) {
      return serializeIndex;
    } else if (isErlKeyword(erlExpr)) {
      return function(erlValue) {
        return keywordLabel;
      };
    } else if (isErlCoreEffectfulFunction(erlExpr)) {
      return function(erlValue) {
        return coreEffectfulFunctionLabel;
      };
    } else if (isErlCorePureFunction(erlExpr)) {
      return function(erlValue) {
        return corePureFunctionLabel;
      };
    } else if (isErlUserPureFunction(erlExpr)) {
      return function(erlValue) {
        return userPureFunctionLabel;
      };
    } else if (isErlMacro(erlExpr)) {
      return function(erlValue) {
        return macroLabel;
      };
    } else if (isErlNil(erlExpr)) {
      return function(erlValue) {
        return nilLabel;
      };
    } else if (isErlIdentifier(erlExpr)) {
      return serializeIdentifier;
    } else if (isErlString(erlExpr)) {
      return serializeString;
    } else if (isErlAtom(erlExpr)) {
      return serializeAtom;
    } else if (erlExpr.jsValue != null) {
      return extractJsValue;
    } else {
      return function(erlValue) {
        return erlValue;
      };
    }
  })();
  return _serialize(erlExpr, shouldBeReadable);
};

var serializeAtom = function(erlAtom, shouldBeReadable) {
  return "(atom " + (serialize(erlAtom.erlValue, shouldBeReadable)) + ")";
};

var serializeIdentifier = function(erlString, shouldBeReadable) {
  return extractJsValue(erlString);
};

var serializeIndex = function(erlIndex, shouldBeReadable) {
  var jsIndex = erlIndex.jsValue;
  var memo = '';
  for (var key in jsIndex) {
    if (!__hasProp.call(jsIndex, key)) continue;
    var erlValue = jsIndex[key];
    if (memo === '') {
      memo = ""
        + key
        + " "
        + (serialize(erlValue, shouldBeReadable));
    } else {
      memo = ""
        + memo
        + ", "
        + key
        + " "
        + (serialize(erlValue, shouldBeReadable));
    }
  }
  return indexStart + memo + indexEnd;
};

var serializeList = function(erlList, shouldBeReadable) {
  var serializedList = reduce(
    "",
    adjoinErlValue(shouldBeReadable),
    erlList);
  return listStart + serializedList + listEnd;
};

var serializeString = function(erlString, shouldBeReadable) {
  var jsString = stripQuotes(extractJsValue(erlString));
  if (!shouldBeReadable) {
    return jsString;
  }
  return jsString
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n');
};

var stripQuotes = function(jsString) {
  return jsString.slice(1, -1);
};

var coreEffectfulFunctionLabel = '<effectful core function>';
var corePureFunctionLabel      = '<core function>';
var ignoreLabel                = '<ignore>';
var keywordLabel               = '<keyword>';
var macroLabel                 = '<macro>';
var nilLabel                   = 'nil';
var userPureFunctionLabel      = '<function>';

module.exports = serialize;
