var adjoinErlValue, commentSignal, coreEffectfulFunctionLabel, corePureFunctionLabel, erlAtom_question_, erlCoreEffectfulFunction_question_, erlCorePureFunction_question_, erlIdentifier_question_, erlIgnore_question_, erlIndex_question_, erlKeyword_question_, erlList_question_, erlMacro_question_, erlNil_question_, erlString_question_, erlUserPureFunction_question_, extractJsValue, ignoreLabel, indexEnd, indexStart, keywordLabel, listEnd, listStart, macroLabel, nilLabel, reduce, serialize, serializeAtom, serializeIdentifier, serializeIndex, serializeList, serializeString, stripQuotes, userPureFunctionLabel,
  __hasProp = {}.hasOwnProperty;

commentSignal = require('./commentSignal');

extractJsValue = require('./type-utilities').extractJsValue;

indexEnd = require('./keyTokens').indexEnd;

indexStart = require('./keyTokens').indexStart;

listEnd = require('./keyTokens').listEnd;

listStart = require('./keyTokens').listStart;

erlAtom_question_ = require('./type-utilities').erlAtom_question_;

erlCoreEffectfulFunction_question_ = require('./type-utilities').erlCoreEffectfulFunction_question_;

erlCorePureFunction_question_ = require('./type-utilities').erlCorePureFunction_question_;

erlIdentifier_question_ = require('./type-utilities').erlIdentifier_question_;

erlIgnore_question_ = require('./type-utilities').erlIgnore_question_;

erlIndex_question_ = require('./type-utilities').erlIndex_question_;

erlKeyword_question_ = require('./type-utilities').erlKeyword_question_;

erlList_question_ = require('./type-utilities').erlList_question_;

erlMacro_question_ = require('./type-utilities').erlMacro_question_;

erlNil_question_ = require('./type-utilities').erlNil_question_;

erlString_question_ = require('./type-utilities').erlString_question_;

erlUserPureFunction_question_ = require('./type-utilities').erlUserPureFunction_question_;

reduce = require('./linked-list').reduce;

adjoinErlValue = function(printReadably_question_) {
  return function(memo, erlValue) {
    var serialized;
    serialized = serialize(erlValue, printReadably_question_);
    if (memo.length === 0) {
      return serialized;
    } else {
      return "" + memo + " " + serialized;
    }
  };
};

serialize = function(erlExpr, printReadably_question_) {
  var _serialize;
  if (erlExpr === commentSignal) {
    return commentSignal;
  }
  _serialize = (function() {
    switch (false) {
      case !erlList_question_(erlExpr):
        return serializeList;
      case !erlIgnore_question_(erlExpr):
        return function(x) {
          return ignoreLabel;
        };
      case !erlIndex_question_(erlExpr):
        return serializeIndex;
      case !erlKeyword_question_(erlExpr):
        return function(x) {
          return keywordLabel;
        };
      case !erlCoreEffectfulFunction_question_(erlExpr):
        return function(x) {
          return coreEffectfulFunctionLabel;
        };
      case !erlCorePureFunction_question_(erlExpr):
        return function(x) {
          return corePureFunctionLabel;
        };
      case !erlUserPureFunction_question_(erlExpr):
        return function(x) {
          return userPureFunctionLabel;
        };
      case !erlMacro_question_(erlExpr):
        return function(x) {
          return macroLabel;
        };
      case !erlNil_question_(erlExpr):
        return function(x) {
          return nilLabel;
        };
      case !erlIdentifier_question_(erlExpr):
        return serializeIdentifier;
      case !erlString_question_(erlExpr):
        return serializeString;
      case !erlAtom_question_(erlExpr):
        return serializeAtom;
      case erlExpr.jsValue == null:
        return extractJsValue;
      default:
        return function(x) {
          return x;
        };
    }
  })();
  return _serialize(erlExpr, printReadably_question_);
};

serializeAtom = function(erlAtom, printReadably_question_) {
  return "(atom " + (serialize(erlAtom.erlValue, printReadably_question_)) + ")";
};

serializeIdentifier = function(erlString, printReadably_question_) {
  return extractJsValue(erlString);
};

serializeIndex = function(erlIndex, printReadably_question_) {
  var erlValue, jsIndex, key, memo;
  jsIndex = erlIndex.jsValue;
  memo = '';
  for (key in jsIndex) {
    if (!__hasProp.call(jsIndex, key)) continue;
    erlValue = jsIndex[key];
    memo = memo === '' ? "" + key + " " + (serialize(erlValue, printReadably_question_)) : "" + memo + ", " + key + " " + (serialize(erlValue, printReadably_question_));
  }
  return indexStart + memo + indexEnd;
};

serializeList = function(erlList, printReadably_question_) {
  var serializedList;
  serializedList = reduce("", adjoinErlValue(printReadably_question_), erlList);
  return listStart + serializedList + listEnd;
};

serializeString = function(erlString, printReadably_question_) {
  var jsString;
  jsString = stripQuotes(extractJsValue(erlString));
  if (!printReadably_question_) {
    return jsString;
  }
  return jsString.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
};

stripQuotes = function(jsString) {
  return jsString.slice(1, -1);
};

coreEffectfulFunctionLabel = '<effectful core function>';

corePureFunctionLabel = '<core function>';

ignoreLabel = '<ignore>';

keywordLabel = '<keyword>';

macroLabel = '<macro>';

nilLabel = 'nil';

userPureFunctionLabel = '<function>';

module.exports = serialize;
