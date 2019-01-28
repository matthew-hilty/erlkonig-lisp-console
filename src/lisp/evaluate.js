var addEnv                     = require('./env-utilities').addEnv;
var car                        = require('./linked-list').car;
var catchStar                  = require('./keyTokens').catchStar;
var cdr                        = require('./linked-list').cdr;
var circumpendQuotes           = require('./js-utilities').circumpendQuotes;
var commentSignal              = require('./commentSignal');
var createErlIndex             = require('./type-utilities').createErlIndex;
var createErlKeyword           = require('./type-utilities').createErlKeyword;
var createErlList              = require('./type-utilities').createErlList;
var createErlMacro             = require('./type-utilities').createErlMacro;
var createErlNumber            = require('./type-utilities').createErlNumber;
var createErlString            = require('./type-utilities').createErlString;
var createErlSymbol            = require('./type-utilities').createErlSymbol;
var createErlUserPureFunction  = require('./type-utilities').createErlUserPureFunction;
var defBang                    = require('./keyTokens').defBang;
var _do                        = require('./keyTokens')._do;
var erlNil                     = require('./type-utilities').erlNil;
var _eval                      = require('./keyTokens')._eval;
var _evalWithEnv               = require('./keyTokens')._evalWithEnv;
var expandMacro                = require('./keyTokens').expandMacro;
var extractJsValue             = require('./type-utilities').extractJsValue;
var filter                     = require('./linked-list').filter;
var fnStar                     = require('./keyTokens').fnStar;
var forEach                    = require('./linked-list').forEach;
var fromArray                  = require('./linked-list').fromArray;
var fromErlIndex               = require('./index-utilities').fromErlIndex;
var fromJsObjects              = require('./index-utilities').fromJsObjects;
var _getCurrentEnv             = require('./keyTokens')._getCurrentEnv;
var _getDefaultEnv             = require('./keyTokens')._getDefaultEnv;
var _if                        = require('./keyTokens')._if;
var isEmpty                    = require('./linked-list').isEmpty;
var isErlCoreEffectfulFunction = require('./type-utilities').isErlCoreEffectfulFunction;
var isErlCorePureFunction      = require('./type-utilities').isErlCorePureFunction;
var isErlIgnore                = require('./type-utilities').isErlIgnore;
var isErlIndex                 = require('./type-utilities').isErlIndex;
var isErlKeyword               = require('./type-utilities').isErlKeyword;
var isErlList                  = require('./type-utilities').isErlList;
var isErlMacro                 = require('./type-utilities').isErlMacro;
var isErlSymbol                = require('./type-utilities').isErlSymbol;
var isErlUserPureFunction      = require('./type-utilities').isErlUserPureFunction;
var isJsString                 = require('./js-utilities').isJsString;
var isKeyword                  = require('./keyTokens').isKeyword;
var letStar                    = require('./keyTokens').letStar;
var letrecStar                 = require('./keyTokens').letrecStar;
var lookup                     = require('./env-utilities').lookup;
var macroStar                  = require('./keyTokens').macroStar;
var map                        = require('./linked-list').map;
var next                       = require('./linked-list').next;
var quasiquote                 = require('./keyTokens').quasiquote;
var quote                      = require('./keyTokens').quote;
var spliceUnquote              = require('./keyTokens').spliceUnquote;
var unquote                    = require('./keyTokens').unquote;
var recurse                    = require('./linked-list').recurse;
var reduce                     = require('./linked-list').reduce;
var reduceBy2                  = require('./linked-list').reduceBy2;
var reverse                    = require('./linked-list').reverse;
var setMainEnv                 = require('./env-utilities').setMainEnv;
var splat                      = require('./keyTokens').splat;
var toPartialArray             = require('./linked-list').toPartialArray;
var tryStar                    = require('./keyTokens').tryStar;
var undefBang                  = require('./keyTokens').undefBang;
var unsetMainEnv               = require('./env-utilities').unsetMainEnv;

var __hasProp = {}.hasOwnProperty;

var createFn = function(erlList, envs) {
  return createErlUserPureFunction({
    localEnvs: envs.slice(0),
    erlExpression: next(erlList),
    erlParameters: car(erlList)
  });
};

var createLocalEnv = function(erlParams, erlArgs) {
  var env = {};
  while (!isEmpty(erlParams)) {
    var jsParam = extractJsValue(car(erlParams));
    if (jsParam === splat) {
      env[extractJsValue(next(erlParams))] = erlArgs;
      return env;
    } else {
      env[jsParam] = car(erlArgs);
      erlParams = cdr(erlParams);
      erlArgs = cdr(erlArgs);
    }
  }
  return env;
};

var createMacro = function(erlList, envs) {
  return createErlMacro({
    localEnvs: envs.slice(0),
    erlExpression: next(erlList),
    erlParameters: car(erlList)
  });
};

var defineNewValue = function(erlList, envs, addResult) {
  var jsKey = extractJsValue(car(erlList));
  var erlValue = _evaluate(next(erlList), envs, addResult);
  return setMainEnv(envs, jsKey, erlValue);
};

var evalQuasiquotedExpr = function(expr, envs, addResult) {
  if (!isErlList(expr)) {
    return expr;
  }
  var manageItem = function(memo, item) {
    if (unquotedExpr(item)) {
        return createErlList(_evaluate(next(item), envs, addResult), memo);
    } else if (spliceUnquotedExpr(item)) {
        var _manageItem = function(_memo, _item) {
          return createErlList(_item, _memo);
        };
        return reduce(memo, _manageItem, _evaluate(next(item), envs, addResult));
    } else if (isErlList(item)) {
        return createErlList(evalQuasiquotedExpr(item, envs, addResult), memo);
    } else {
        return createErlList(item, memo);
    }
  };
  return reverse(reduce(createErlList(), manageItem, expr));
};

var _evaluate = function(erlExpr, envs, addResult) {
  while (true) {
    if (isErlSymbol(erlExpr)) {
      var jsString = extractJsValue(erlExpr);
      if (isKeyword(jsString)) {
        return createErlKeyword(jsString);
      } else {
        return lookup(envs, jsString);
      }
    } else if (isErlIndex(erlExpr)) {
      var index = extractJsValue(erlExpr);
      var newIndex = {};
      for (var key in index) {
        if (!__hasProp.call(index, key)) continue;
        newIndex[key] = _evaluate(index[key], envs, addResult);
      }
      return createErlIndex(newIndex);
    } else if (!(isErlList(erlExpr))) {
      return erlExpr;
    } else {
      erlExpr = filter((function(x) {
        return !(ignorable(x, envs, addResult));
      }), erlExpr);
      var erlExprArray = toPartialArray(2, erlExpr);
      var head = erlExprArray[0];
      var arg1 = erlExprArray[1];
      var remainingArgs = erlExprArray[2];
      var tailList = cdr(erlExpr);
      switch (extractJsValue(head)) {
        case defBang:
          return defineNewValue(tailList, envs, addResult);
        case undefBang:
          return undefineValue(tailList, envs);
        case _eval:
          erlExpr = _evaluate(arg1, envs, addResult);
          break;
        case _evalWithEnv:
          envs = [fromErlIndex(_evaluate(arg1, envs, addResult))];
          erlExpr = _evaluate(car(remainingArgs), envs, addResult);
          break;
        case letStar:
          erlExpr = car(remainingArgs);
          envs = addEnv(envs, reduceLet(envs, arg1, addResult));
          break;
        case letrecStar:
          erlExpr = car(remainingArgs);
          envs = addEnv(envs, reduceLetrec(envs, arg1, addResult));
          break;
        case _do:
          return forEach(evaluate(envs, addResult), tailList);
        case _getCurrentEnv:
          return fromJsObjects.apply(null, envs.reverse());
        case _getDefaultEnv:
          return fromJsObjects(envs[envs.length - 1]);
        case _if:
          if (extractJsValue(_evaluate(arg1, envs, addResult))) {
            erlExpr = car(remainingArgs);
            break;
          }
          var otherwise = next(remainingArgs);
          if (isEmpty(otherwise)) {
            erlExpr = erlNil;
          } else {
            erlExpr = otherwise;
          }
          break;
        case fnStar:
          return createFn(tailList, envs);
        case macroStar:
          return createMacro(tailList, envs);
        case quote:
          return car(tailList);
        case quasiquote:
          return evalQuasiquotedExpr(car(tailList), envs, addResult);
        case expandMacro:
          return expandMacro(car(arg1), cdr(arg1), envs, addResult);
        case tryStar:
          try {
            return _evaluate(arg1, envs, addResult);
          } catch (_error) {
            var ex = _error;
            if (isEmpty(remainingArgs)) {
              throw ex;
            } else {
              var remainingArgsArray = toPartialArray(3, car(remainingArgs));
              var _catch = remainingArgsArray[0];
              var _ex = remainingArgsArray[1];
              var catchExpr = remainingArgsArray[2];
              if ((extractJsValue(_catch)) !== "catch*") {
                throw ex;
              }
              if (ex instanceof Error) {
                ex = createErlString(circumpendQuotes(ex.message));
              }
              var newEnv = {};
              newEnv[extractJsValue(_ex)] = ex;
              return _evaluate(catchExpr, addEnv(envs, newEnv), addResult);
            }
          }
          break;
        default:
          var erlSymbol = head;
          erlExpr = tailList;
          var erlInvokable = _evaluate(erlSymbol, envs, addResult);
          if (isErlKeyword(erlInvokable)) {
            erlExpr = createErlList(erlInvokable, tailList);
          } else if (isErlMacro(erlInvokable)) {
            erlExpr = expandMacro(head, tailList, envs, addResult);
          } else if (isErlCorePureFunction(erlInvokable)) {
            var fn = extractJsValue(erlInvokable);
            var erlArgs = map(evaluate(envs, addResult), erlExpr);
            return fn(erlArgs);
          } else if (isErlCoreEffectfulFunction(erlInvokable)) {
            var fn = extractJsValue(erlInvokable);
            var erlArgs = map(evaluate(envs, addResult), erlExpr);
            addResult(fn(erlArgs));
            return erlNil;
          } else if (isErlUserPureFunction(erlInvokable)) {
            var jsValue = extractJsValue(erlInvokable);
            var localEnvs = jsValue.localEnvs;
            var erlExpression = jsValue.erlExpression;
            var erlParameters = jsValue.erlParameters;
            var erlArgs = map(evaluate(envs, addResult), erlExpr);
            erlExpr = erlExpression;
            var newEnv = createLocalEnv(erlParameters, erlArgs);
            envs = addEnv(localEnvs, newEnv);
          } else {
            throw ""
              + (extractJsValue(erlSymbol))
              + " does not evaluate to a function, macro, or keyword.";
          }
      }
    }
  }
};

var evaluate = function(envs, addResult) {
  return function(erlExpr) {
    if (erlExpr === commentSignal) {
      return commentSignal;
    }
    return _evaluate(erlExpr, envs, addResult);
  };
};

var expandMacro = function(erlMacroSymbol, erlArgs, envs, addResult) {
  var erlMacro = _evaluate(erlMacroSymbol, envs, addResult);
  var jsValue = extractJsValue(erlMacro);
  var localEnvs = jsValue.localEnvs;
  var erlExpression = jsValue.erlExpression;
  var erlParameters = jsValue.erlParameters;
  var newEnv = createLocalEnv(erlParameters, erlArgs);
  var newEnvStack = addEnv(localEnvs, newEnv);
  return _evaluate(erlExpression, newEnvStack, addResult);
};

var ignorable = function(erlVal, envs, addResult) {
  if (isErlIgnore(erlVal)) {
    return true;
  }
  if (!isErlList(erlVal)) {
    return false;
  }
  var symbol = car(erlVal);
  if (!isErlSymbol(symbol)) {
    return false;
  }
  var jsString = extractJsValue(symbol);
  if (jsString === 'ignore') {
    return true;
  }
  if (jsString === 'ignoreIfTrue') {
    return extractJsValue(_evaluate(next(erlVal), envs, addResult));
  }
  if (jsString === 'ignoreUnlessTrue') {
    return !extractJsValue(_evaluate(next(erlVal), envs, addResult));
  }
  return false;
};

var reduceLet = function(envs, list, addResult) {
  var newEnv = {};
  var _envs = addEnv(envs, newEnv);
  while (!isEmpty(list)) {
    var jsKey = extractJsValue(list.value);
    list = recurse(list);
    var envValue = _evaluate(list.value, _envs, addResult);
    newEnv[jsKey] = envValue;
    list = recurse(list);
  }
  return newEnv;
};

var reduceLetrec = function(envs, list, addResult) {
  var newEnv = {};
  var _envs = addEnv(envs, newEnv);
  while (!isEmpty(list)) {
    var jsKey = extractJsValue(list.value);
    list = recurse(list);
    var _erlExpr = fromArray(
      [  createErlSymbol("fix*"),
         fromArray([createErlSymbol("fn*"),
         fromArray([jsKey]),
         list.value])
      ]);
    var envValue = _evaluate(_erlExpr, _envs, addResult);
    newEnv[jsKey] = envValue;
    list = recurse(list);
  }
  return newEnv;
};

var spliceUnquote = function(erlValue) {
  return spliceUnquote === (extractJsValue(erlValue));
};

var spliceUnquotedExpr = function(erlValue) {
  return isErlList(erlValue) && (spliceUnquote(car(erlValue)));
};

var undefineValue = function(erlList, envs) {
  var jsKey = extractJsValue(car(erlList));
  return unsetMainEnv(envs, jsKey);
};

var unquote = function(erlValue) {
  return unquote === (extractJsValue(erlValue));
};

var unquotedExpr = function(erlValue) {
  return isErlList(erlValue) && (unquote(car(erlValue)));
};

module.exports = evaluate;
