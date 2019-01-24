var addEnv, car, catch_asterisk_, cdr, circumpendQuotes, commentSignal, createErlIndex, createErlKeyword, createErlList, createErlMacro, createErlNumber, createErlString, createErlSymbol, createErlUserPureFunction, createFn, createLocalEnv, createMacro, def_bang_, defineNewValue, empty_question_, erlCoreEffectfulFunction_question_, erlCorePureFunction_question_, erlIgnore_question_, erlIndex_question_, erlKeyword_question_, erlList_question_, erlMacro_question_, erlNil, erlSymbol_question_, erlUserPureFunction_question_, evalQuasiquotedExpr, evaluate, expandMacro, expand_hyphen_macro, extractJsValue, filter, fn_asterisk_, forEach, fromArray, fromErlIndex, fromJsObjects, ignorable_question_, jsString_question_, keyword_question_, let_asterisk_, letrec_asterisk_, lookup, macro_asterisk_, map, next, quasiquote, quote, recurse, reduce, reduceBy2, reduceLet_asterisk_, reduceLetrec_asterisk_, reverse, setMainEnv, splat, spliceUnquote, spliceUnquote_question_, spliceUnquotedExpr_question_, toPartialArray, try_asterisk_, undef_bang_, undefineValue, unquote, unquote_question_, unquotedExpr_question_, unsetMainEnv, _do, _eval, _evalWithEnv, _evaluate, _getCurrentEnv, _getDefaultEnv, _if,
  __hasProp = {}.hasOwnProperty;

addEnv = require('./env-utilities').addEnv;

car = require('./linked-list').car;

catch_asterisk_ = require('./keyTokens').catch_asterisk_;

cdr = require('./linked-list').cdr;

circumpendQuotes = require('./js-utilities').circumpendQuotes;

commentSignal = require('./commentSignal');

createErlIndex = require('./type-utilities').createErlIndex;

createErlKeyword = require('./type-utilities').createErlKeyword;

createErlList = require('./type-utilities').createErlList;

createErlMacro = require('./type-utilities').createErlMacro;

createErlNumber = require('./type-utilities').createErlNumber;

createErlString = require('./type-utilities').createErlString;

createErlSymbol = require('./type-utilities').createErlSymbol;

createErlUserPureFunction = require('./type-utilities').createErlUserPureFunction;

def_bang_ = require('./keyTokens').def_bang_;

_do = require('./keyTokens')._do;

empty_question_ = require('./linked-list').empty_question_;

_eval = require('./keyTokens')._eval;

_evalWithEnv = require('./keyTokens')._evalWithEnv;

expand_hyphen_macro = require('./keyTokens').expand_hyphen_macro;

extractJsValue = require('./type-utilities').extractJsValue;

filter = require('./linked-list').filter;

fn_asterisk_ = require('./keyTokens').fn_asterisk_;

forEach = require('./linked-list').forEach;

fromArray = require('./linked-list').fromArray;

fromJsObjects = require('./index-utilities').fromJsObjects;

fromErlIndex = require('./index-utilities').fromErlIndex;

_getCurrentEnv = require('./keyTokens')._getCurrentEnv;

_getDefaultEnv = require('./keyTokens')._getDefaultEnv;

_if = require('./keyTokens')._if;

jsString_question_ = require('./js-utilities').jsString_question_;

keyword_question_ = require('./keyTokens').keyword_question_;

let_asterisk_ = require('./keyTokens').let_asterisk_;

letrec_asterisk_ = require('./keyTokens').letrec_asterisk_;

lookup = require('./env-utilities').lookup;

macro_asterisk_ = require('./keyTokens').macro_asterisk_;

erlCoreEffectfulFunction_question_ = require('./type-utilities').erlCoreEffectfulFunction_question_;

erlCorePureFunction_question_ = require('./type-utilities').erlCorePureFunction_question_;

erlIgnore_question_ = require('./type-utilities').erlIgnore_question_;

erlIndex_question_ = require('./type-utilities').erlIndex_question_;

erlKeyword_question_ = require('./type-utilities').erlKeyword_question_;

erlList_question_ = require('./type-utilities').erlList_question_;

erlMacro_question_ = require('./type-utilities').erlMacro_question_;

erlNil = require('./type-utilities').erlNil;

erlSymbol_question_ = require('./type-utilities').erlSymbol_question_;

erlUserPureFunction_question_ = require('./type-utilities').erlUserPureFunction_question_;

map = require('./linked-list').map;

next = require('./linked-list').next;

quasiquote = require('./keyTokens').quasiquote;

quote = require('./keyTokens').quote;

spliceUnquote = require('./keyTokens').spliceUnquote;

unquote = require('./keyTokens').unquote;

recurse = require('./linked-list').recurse;

reduce = require('./linked-list').reduce;

reduceBy2 = require('./linked-list').reduceBy2;

reverse = require('./linked-list').reverse;

setMainEnv = require('./env-utilities').setMainEnv;

splat = require('./keyTokens').splat;

toPartialArray = require('./linked-list').toPartialArray;

try_asterisk_ = require('./keyTokens').try_asterisk_;

undef_bang_ = require('./keyTokens').undef_bang_;

unsetMainEnv = require('./env-utilities').unsetMainEnv;

createFn = function(erlList, envs) {
  return createErlUserPureFunction({
    localEnvs: envs.slice(0),
    erlExpression: next(erlList),
    erlParameters: car(erlList)
  });
};

createLocalEnv = function(erlParams, erlArgs) {
  var env, jsParam;
  env = {};
  while (!empty_question_(erlParams)) {
    jsParam = extractJsValue(car(erlParams));
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

createMacro = function(erlList, envs) {
  return createErlMacro({
    localEnvs: envs.slice(0),
    erlExpression: next(erlList),
    erlParameters: car(erlList)
  });
};

defineNewValue = function(erlList, envs, addResult) {
  var erlValue, jsKey;
  jsKey = extractJsValue(car(erlList));
  erlValue = _evaluate(next(erlList), envs, addResult);
  return setMainEnv(envs, jsKey, erlValue);
};

evalQuasiquotedExpr = function(expr, envs, addResult) {
  var manageItem;
  if (!erlList_question_(expr)) {
    return expr;
  }
  manageItem = function(memo, item) {
    var _manageItem;
    switch (false) {
      case !unquotedExpr_question_(item):
        return createErlList(_evaluate(next(item), envs, addResult), memo);
      case !spliceUnquotedExpr_question_(item):
        _manageItem = function(_memo, _item) {
          return createErlList(_item, _memo);
        };
        return reduce(memo, _manageItem, _evaluate(next(item), envs, addResult));
      case !erlList_question_(item):
        return createErlList(evalQuasiquotedExpr(item, envs, addResult), memo);
      default:
        return createErlList(item, memo);
    }
  };
  return reverse(reduce(createErlList(), manageItem, expr));
};

_evaluate = function(erlExpr, envs, addResult) {
  var arg1, catchExpr, erlArgs, erlExpression, erlInvokable, erlParameters, erlSymbol, ex, fn, head, index, jsString, key, localEnvs, newEnv, newIndex, otherwise, remainingArgs, tailList, value, _catch, _ex, _ref, _ref1, _ref2;
  while (true) {
    switch (false) {
      case !erlSymbol_question_(erlExpr):
        jsString = extractJsValue(erlExpr);
        if (keyword_question_(jsString)) {
          return createErlKeyword(jsString);
        } else {
          return lookup(envs, jsString);
        }
        break;
      case !erlIndex_question_(erlExpr):
        index = extractJsValue(erlExpr);
        newIndex = {};
        for (key in index) {
          if (!__hasProp.call(index, key)) continue;
          value = index[key];
          newIndex[key] = _evaluate(index[key], envs, addResult);
        }
        return createErlIndex(newIndex);
      case !!(erlList_question_(erlExpr)):
        return erlExpr;
      default:
        erlExpr = filter((function(x) {
          return !(ignorable_question_(x, envs, addResult));
        }), erlExpr);
        _ref = toPartialArray(2, erlExpr), head = _ref[0], arg1 = _ref[1], remainingArgs = _ref[2];
        tailList = cdr(erlExpr);
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
            erlExpr = extractJsValue(_evaluate(arg1, envs, addResult)) ? car(remainingArgs) : empty_question_(otherwise = next(remainingArgs)) ? erlNil : otherwise;
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
              ex = _error;
              if (empty_question_(remainingArgs)) {
                throw ex;
              } else {
                _ref1 = toPartialArray(3, car(remainingArgs)), _catch = _ref1[0], _ex = _ref1[1], catchExpr = _ref1[2];
                if ((extractJsValue(_catch)) !== "catch*") {
                  throw ex;
                }
                if (ex instanceof Error) {
                  ex = createErlString(circumpendQuotes(ex.message));
                }
                newEnv = {};
                newEnv[extractJsValue(_ex)] = ex;
                return _evaluate(catchExpr, addEnv(envs, newEnv), addResult);
              }
            }
            break;
          default:
            erlSymbol = head;
            erlExpr = tailList;
            erlInvokable = _evaluate(erlSymbol, envs, addResult);
            switch (false) {
              case !erlKeyword_question_(erlInvokable):
                erlExpr = createErlList(erlInvokable, tailList);
                break;
              case !erlMacro_question_(erlInvokable):
                erlExpr = expandMacro(head, tailList, envs, addResult);
                break;
              case !erlCorePureFunction_question_(erlInvokable):
                fn = extractJsValue(erlInvokable);
                erlArgs = map(evaluate(envs, addResult), erlExpr);
                return fn(erlArgs);
              case !erlCoreEffectfulFunction_question_(erlInvokable):
                fn = extractJsValue(erlInvokable);
                erlArgs = map(evaluate(envs, addResult), erlExpr);
                addResult(fn(erlArgs));
                return erlNil;
              case !erlUserPureFunction_question_(erlInvokable):
                _ref2 = extractJsValue(erlInvokable), localEnvs = _ref2.localEnvs, erlExpression = _ref2.erlExpression, erlParameters = _ref2.erlParameters;
                erlArgs = map(evaluate(envs, addResult), erlExpr);
                erlExpr = erlExpression;
                newEnv = createLocalEnv(erlParameters, erlArgs);
                envs = addEnv(localEnvs, newEnv);
                break;
              default:
                throw "" + (extractJsValue(erlSymbol)) + " does not evaluate to a function, macro, or keyword.";
            }
        }
    }
  }
};

evaluate = function(envs, addResult) {
  return function(erlExpr) {
    if (erlExpr === commentSignal) {
      return commentSignal;
    }
    return _evaluate(erlExpr, envs, addResult);
  };
};

expandMacro = function(erlMacroSymbol, erlArgs, envs, addResult) {
  var erlExpression, erlMacro, erlParameters, localEnvs, newEnv, newEnvStack, _ref;
  erlMacro = _evaluate(erlMacroSymbol, envs, addResult);
  _ref = extractJsValue(erlMacro), localEnvs = _ref.localEnvs, erlExpression = _ref.erlExpression, erlParameters = _ref.erlParameters;
  newEnv = createLocalEnv(erlParameters, erlArgs);
  newEnvStack = addEnv(localEnvs, newEnv);
  return _evaluate(erlExpression, newEnvStack, addResult);
};

ignorable_question_ = function(erlVal, envs, addResult) {
  var jsString, symbol;
  return erlIgnore_question_(erlVal) || (erlList_question_(erlVal) && erlSymbol_question_(symbol = car(erlVal)) && (((jsString = extractJsValue(symbol)) === 'ignore!') || ((jsString === 'ignoreIfTrue') && (extractJsValue(_evaluate(next(erlVal), envs, addResult)))) || ((jsString === 'ignoreUnlessTrue') && !(extractJsValue(_evaluate(next(erlVal), envs, addResult))))));
};

reduceLet_asterisk_ = function(envs, list, addResult) {
  var envValue, jsKey, newEnv, _envs;
  newEnv = {};
  _envs = addEnv(envs, newEnv);
  while (!empty_question_(list)) {
    jsKey = extractJsValue(list.value);
    list = recurse(list);
    envValue = _evaluate(list.value, _envs, addResult);
    newEnv[jsKey] = envValue;
    list = recurse(list);
  }
  return newEnv;
};

reduceLetrec_asterisk_ = function(envs, list, addResult) {
  var envValue, jsKey, newEnv, _envs, _erlExpr;
  newEnv = {};
  _envs = addEnv(envs, newEnv);
  while (!empty_question_(list)) {
    jsKey = extractJsValue(list.value);
    list = recurse(list);
    _erlExpr = fromArray([createErlSymbol("fix*"), fromArray([createErlSymbol("fn*"), fromArray([jsKey]), list.value])]);
    envValue = _evaluate(_erlExpr, _envs, addResult);
    newEnv[jsKey] = envValue;
    list = recurse(list);
  }
  return newEnv;
};

spliceUnquote_question_ = function(erlValue) {
  return spliceUnquote === (extractJsValue(erlValue));
};

spliceUnquotedExpr_question_ = function(erlValue) {
  return erlList_question_(erlValue) && (spliceUnquote_question_(car(erlValue)));
};

undefineValue = function(erlList, envs) {
  var jsKey;
  jsKey = extractJsValue(car(erlList));
  return unsetMainEnv(envs, jsKey);
};

unquote_question_ = function(erlValue) {
  return unquote === (extractJsValue(erlValue));
};

unquotedExpr_question_ = function(erlValue) {
  return erlList_question_(erlValue) && (unquote_question_(car(erlValue)));
};

module.exports = evaluate;
