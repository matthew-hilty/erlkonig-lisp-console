var commentSignal                      = require('./commentSignal');
var extractJsValue                     = require('./type-utilities').extractJsValue;
var indexEnd                           = require('./keyTokens').indexEnd;
var indexStart                         = require('./keyTokens').indexStart;
var listEnd                            = require('./keyTokens').listEnd;
var listStart                          = require('./keyTokens').listStart;
var erlAtom_question_                  = require('./type-utilities').erlAtom_question_;
var erlCoreEffectfulFunction_question_ = require('./type-utilities').erlCoreEffectfulFunction_question_;
var erlCorePureFunction_question_      = require('./type-utilities').erlCorePureFunction_question_;
var erlIdentifier_question_            = require('./type-utilities').erlIdentifier_question_;
var erlIgnore_question_                = require('./type-utilities').erlIgnore_question_;
var erlIndex_question_                 = require('./type-utilities').erlIndex_question_;
var erlKeyword_question_               = require('./type-utilities').erlKeyword_question_;
var erlList_question_                  = require('./type-utilities').erlList_question_;
var erlMacro_question_                 = require('./type-utilities').erlMacro_question_;
var erlNil_question_                   = require('./type-utilities').erlNil_question_;
var erlString_question_                = require('./type-utilities').erlString_question_;
var erlUserPureFunction_question_      = require('./type-utilities').erlUserPureFunction_question_;
var reduce                             = require('./linked-list').reduce;

var  __hasProp = {}.hasOwnProperty;

var adjoinErlValue = function(printReadably_question_) {
  return function(memo, erlValue) {
    var serialized = serialize(erlValue, printReadably_question_);
    if (memo.length === 0) {
      return serialized;
    } else {
      return "" + memo + " " + serialized;
    }
  };
};

var serialize = function(erlExpr, printReadably_question_) {
  if (erlExpr === commentSignal) {
    return commentSignal;
  }
  var _serialize = (function() {
    if (erlList_question_(erlExpr)) {
      return serializeList;
    } else if (erlIgnore_question_(erlExpr)) {
      return function(erlValue) {
        return ignoreLabel;
      };
    } else if (erlIndex_question_(erlExpr)) {
      return serializeIndex;
    } else if (erlKeyword_question_(erlExpr)) {
      return function(erlValue) {
        return keywordLabel;
      };
    } else if (erlCoreEffectfulFunction_question_(erlExpr)) {
      return function(erlValue) {
        return coreEffectfulFunctionLabel;
      };
    } else if (erlCorePureFunction_question_(erlExpr)) {
      return function(erlValue) {
        return corePureFunctionLabel;
      };
    } else if (erlUserPureFunction_question_(erlExpr)) {
      return function(erlValue) {
        return userPureFunctionLabel;
      };
    } else if (erlMacro_question_(erlExpr)) {
      return function(erlValue) {
        return macroLabel;
      };
    } else if (erlNil_question_(erlExpr)) {
      return function(erlValue) {
        return nilLabel;
      };
    } else if (erlIdentifier_question_(erlExpr)) {
      return serializeIdentifier;
    } else if (erlString_question_(erlExpr)) {
      return serializeString;
    } else if (erlAtom_question_(erlExpr)) {
      return serializeAtom;
    } else if (erlExpr.jsValue != null) {
      return extractJsValue;
    } else {
      return function(erlValue) {
        return erlValue;
      };
    }
  })();
  return _serialize(erlExpr, printReadably_question_);
};

var serializeAtom = function(erlAtom, printReadably_question_) {
  return "(atom " + (serialize(erlAtom.erlValue, printReadably_question_)) + ")";
};

var serializeIdentifier = function(erlString, printReadably_question_) {
  return extractJsValue(erlString);
};

var serializeIndex = function(erlIndex, printReadably_question_) {
  var jsIndex = erlIndex.jsValue;
  var memo = '';
  for (var key in jsIndex) {
    if (!__hasProp.call(jsIndex, key)) continue;
    var erlValue = jsIndex[key];
    if (memo === '') {
      memo = ""
        + key
        + " "
        + (serialize(erlValue, printReadably_question_));
    } else {
      memo = ""
        + memo
        + ", "
        + key
        + " "
        + (serialize(erlValue, printReadably_question_));
    }
  }
  return indexStart + memo + indexEnd;
};

var serializeList = function(erlList, printReadably_question_) {
  var serializedList = reduce(
    "",
    adjoinErlValue(printReadably_question_),
    erlList);
  return listStart + serializedList + listEnd;
};

var serializeString = function(erlString, printReadably_question_) {
  var jsString = stripQuotes(extractJsValue(erlString));
  if (!printReadably_question_) {
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
