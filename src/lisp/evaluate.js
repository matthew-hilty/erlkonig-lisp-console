var addEnv                             = require('./env-utilities').addEnv;
var car                                = require('./linked-list').car;
var catch_asterisk_                    = require('./keyTokens').catch_asterisk_;
var cdr                                = require('./linked-list').cdr;
var circumpendQuotes                   = require('./js-utilities').circumpendQuotes;
var commentSignal                      = require('./commentSignal');
var createErlIndex                     = require('./type-utilities').createErlIndex;
var createErlKeyword                   = require('./type-utilities').createErlKeyword;
var createErlList                      = require('./type-utilities').createErlList;
var createErlMacro                     = require('./type-utilities').createErlMacro;
var createErlNumber                    = require('./type-utilities').createErlNumber;
var createErlString                    = require('./type-utilities').createErlString;
var createErlSymbol                    = require('./type-utilities').createErlSymbol;
var createErlUserPureFunction          = require('./type-utilities').createErlUserPureFunction;
var def_bang_                          = require('./keyTokens').def_bang_;
var _do                                = require('./keyTokens')._do;
var empty_question_                    = require('./linked-list').empty_question_;
var _eval                              = require('./keyTokens')._eval;
var _evalWithEnv                       = require('./keyTokens')._evalWithEnv;
var expand_hyphen_macro                = require('./keyTokens').expand_hyphen_macro;
var extractJsValue                     = require('./type-utilities').extractJsValue;
var filter                             = require('./linked-list').filter;
var fn_asterisk_                       = require('./keyTokens').fn_asterisk_;
var forEach                            = require('./linked-list').forEach;
var fromArray                          = require('./linked-list').fromArray;
var fromJsObjects                      = require('./index-utilities').fromJsObjects;
var fromErlIndex                       = require('./index-utilities').fromErlIndex;
var _getCurrentEnv                     = require('./keyTokens')._getCurrentEnv;
var _getDefaultEnv                     = require('./keyTokens')._getDefaultEnv;
var _if                                = require('./keyTokens')._if;
var jsString_question_                 = require('./js-utilities').jsString_question_;
var keyword_question_                  = require('./keyTokens').keyword_question_;
var let_asterisk_                      = require('./keyTokens').let_asterisk_;
var letrec_asterisk_                   = require('./keyTokens').letrec_asterisk_;
var lookup                             = require('./env-utilities').lookup;
var macro_asterisk_                    = require('./keyTokens').macro_asterisk_;
var erlCoreEffectfulFunction_question_ = require('./type-utilities').erlCoreEffectfulFunction_question_;
var erlCorePureFunction_question_      = require('./type-utilities').erlCorePureFunction_question_;
var erlIgnore_question_                = require('./type-utilities').erlIgnore_question_;
var erlIndex_question_                 = require('./type-utilities').erlIndex_question_;
var erlKeyword_question_               = require('./type-utilities').erlKeyword_question_;
var erlList_question_                  = require('./type-utilities').erlList_question_;
var erlMacro_question_                 = require('./type-utilities').erlMacro_question_;
var erlNil                             = require('./type-utilities').erlNil;
var erlSymbol_question_                = require('./type-utilities').erlSymbol_question_;
var erlUserPureFunction_question_      = require('./type-utilities').erlUserPureFunction_question_;
var map                                = require('./linked-list').map;
var next                               = require('./linked-list').next;
var quasiquote                         = require('./keyTokens').quasiquote;
var quote                              = require('./keyTokens').quote;
var spliceUnquote                      = require('./keyTokens').spliceUnquote;
var unquote                            = require('./keyTokens').unquote;
var recurse                            = require('./linked-list').recurse;
var reduce                             = require('./linked-list').reduce;
var reduceBy2                          = require('./linked-list').reduceBy2;
var reverse                            = require('./linked-list').reverse;
var setMainEnv                         = require('./env-utilities').setMainEnv;
var splat                              = require('./keyTokens').splat;
var toPartialArray                     = require('./linked-list').toPartialArray;
var try_asterisk_                      = require('./keyTokens').try_asterisk_;
var undef_bang_                        = require('./keyTokens').undef_bang_;
var unsetMainEnv                       = require('./env-utilities').unsetMainEnv;

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
  while (!empty_question_(erlParams)) {
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
  if (!erlList_question_(expr)) {
    return expr;
  }
  var manageItem = function(memo, item) {
    if (unquotedExpr_question_(item)) {
        return createErlList(_evaluate(next(item), envs, addResult), memo);
    } else if (spliceUnquotedExpr_question_(item)) {
        var _manageItem = function(_memo, _item) {
          return createErlList(_item, _memo);
        };
        return reduce(memo, _manageItem, _evaluate(next(item), envs, addResult));
    } else if (erlList_question_(item)) {
        return createErlList(evalQuasiquotedExpr(item, envs, addResult), memo);
    } else {
        return createErlList(item, memo);
    }
  };
  return reverse(reduce(createErlList(), manageItem, expr));
};

var _evaluate = function(erlExpr, envs, addResult) {
  while (true) {
    if (erlSymbol_question_(erlExpr)) {
      var jsString = extractJsValue(erlExpr);
      if (keyword_question_(jsString)) {
        return createErlKeyword(jsString);
      } else {
        return lookup(envs, jsString);
      }
    } else if (erlIndex_question_(erlExpr)) {
      var index = extractJsValue(erlExpr);
      var newIndex = {};
      for (var key in index) {
        if (!__hasProp.call(index, key)) continue;
        newIndex[key] = _evaluate(index[key], envs, addResult);
      }
      return createErlIndex(newIndex);
    } else if (!(erlList_question_(erlExpr))) {
      return erlExpr;
    } else {
      erlExpr = filter((function(x) {
        return !(ignorable_question_(x, envs, addResult));
      }), erlExpr);
      var erlExprArray = toPartialArray(2, erlExpr);
      var head = erlExprArray[0];
      var arg1 = erlExprArray[1];
      var remainingArgs = erlExprArray[2];
      var tailList = cdr(erlExpr);
      switch (extractJsValue(head)) {
        case def_bang_:
          return defineNewValue(tailList, envs, addResult);
        case undef_bang_:
          return undefineValue(tailList, envs);
        case _eval:
          erlExpr = _evaluate(arg1, envs, addResult);
          break;
        case _evalWithEnv:
          envs = [fromErlIndex(_evaluate(arg1, envs, addResult))];
          erlExpr = _evaluate(car(remainingArgs), envs, addResult);
          break;
        case let_asterisk_:
          erlExpr = car(remainingArgs);
          envs = addEnv(envs, reduceLet_asterisk_(envs, arg1, addResult));
          break;
        case letrec_asterisk_:
          erlExpr = car(remainingArgs);
          envs = addEnv(envs, reduceLetrec_asterisk_(envs, arg1, addResult));
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
          if (empty_question_(otherwise)) {
            erlExpr = erlNil;
          } else {
            erlExpr = otherwise;
          }
          break;
        case fn_asterisk_:
          return createFn(tailList, envs);
        case macro_asterisk_:
          return createMacro(tailList, envs);
        case quote:
          return car(tailList);
        case quasiquote:
          return evalQuasiquotedExpr(car(tailList), envs, addResult);
        case expand_hyphen_macro:
          return expandMacro(car(arg1), cdr(arg1), envs, addResult);
        case try_asterisk_:
          try {
            return _evaluate(arg1, envs, addResult);
          } catch (_error) {
            var ex = _error;
            if (empty_question_(remainingArgs)) {
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
          if (erlKeyword_question_(erlInvokable)) {
            erlExpr = createErlList(erlInvokable, tailList);
          } else if (erlMacro_question_(erlInvokable)) {
            erlExpr = expandMacro(head, tailList, envs, addResult);
          } else if (erlCorePureFunction_question_(erlInvokable)) {
            var fn = extractJsValue(erlInvokable);
            var erlArgs = map(evaluate(envs, addResult), erlExpr);
            return fn(erlArgs);
          } else if (erlCoreEffectfulFunction_question_(erlInvokable)) {
            var fn = extractJsValue(erlInvokable);
            var erlArgs = map(evaluate(envs, addResult), erlExpr);
            addResult(fn(erlArgs));
            return erlNil;
          } else if (erlUserPureFunction_question_(erlInvokable)) {
            var jsValue = extractJsValue(erlInvokable);
            var localEnvs = jsValue.localEnvs;
            var erlExpression = jsValue.erlExpression;
            var erlParameters = jsValue.erlParameters;
            var erlArgs = map(evaluate(envs, addResult), erlExpr);
            erlExpr = erlExpression;
            var newEnv = createLocalEnv(erlParameters, erlArgs);
            envs = addEnv(localEnvs, newEnv);
          } else {
            throw "" + (extractJsValue(erlSymbol)) + " does not evaluate to a function, macro, or keyword.";
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

var ignorable_question_ = function(erlVal, envs, addResult) {
  if (erlIgnore_question_(erlVal)) {
    return true;
  }
  if (!erlList_question_(erlVal)) {
    return false;
  }
  var symbol = car(erlVal);
  if (!erlSymbol_question_(symbol)) {
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

var reduceLet_asterisk_ = function(envs, list, addResult) {
  var newEnv = {};
  var _envs = addEnv(envs, newEnv);
  while (!empty_question_(list)) {
    var jsKey = extractJsValue(list.value);
    list = recurse(list);
    var envValue = _evaluate(list.value, _envs, addResult);
    newEnv[jsKey] = envValue;
    list = recurse(list);
  }
  return newEnv;
};

var reduceLetrec_asterisk_ = function(envs, list, addResult) {
  var newEnv = {};
  var _envs = addEnv(envs, newEnv);
  while (!empty_question_(list)) {
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

var spliceUnquote_question_ = function(erlValue) {
  return spliceUnquote === (extractJsValue(erlValue));
};

var spliceUnquotedExpr_question_ = function(erlValue) {
  return erlList_question_(erlValue) && (spliceUnquote_question_(car(erlValue)));
};

var undefineValue = function(erlList, envs) {
  var jsKey = extractJsValue(car(erlList));
  return unsetMainEnv(envs, jsKey);
};

var unquote_question_ = function(erlValue) {
  return unquote === (extractJsValue(erlValue));
};

var unquotedExpr_question_ = function(erlValue) {
  return erlList_question_(erlValue) && (unquote_question_(car(erlValue)));
};

module.exports = evaluate;
