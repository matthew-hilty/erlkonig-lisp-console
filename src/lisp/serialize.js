import { commentSignal } from './commentSignal';
import { extractJsValue } from './type-utilities';
import { indexEnd } from './keyTokens';
import { indexStart } from './keyTokens';
import { isErlAtom } from './type-utilities';
import { isErlCoreEffectfulFunction } from './type-utilities';
import { isErlCorePureFunction } from './type-utilities';
import { isErlIdentifier } from './type-utilities';
import { isErlIgnore } from './type-utilities';
import { isErlIndex } from './type-utilities';
import { isErlKeyword } from './type-utilities';
import { isErlList } from './type-utilities';
import { isErlMacro } from './type-utilities';
import { isErlNil } from './type-utilities';
import { isErlString } from './type-utilities';
import { isErlUserPureFunction } from './type-utilities';
import { listEnd } from './keyTokens';
import { listStart } from './keyTokens';
import { reduce } from './linked-list';

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

export { serialize };
