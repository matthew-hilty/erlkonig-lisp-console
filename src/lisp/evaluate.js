import { addEnv } from './env-utilities';
import { car } from './linked-list';
import { catchStar } from './keyTokens';
import { cdr } from './linked-list';
import { circumpendQuotes } from './js-utilities';
import { commentSignal } from './commentSignal';
import { createErlIndex } from './type-utilities';
import { createErlKeyword } from './type-utilities';
import { createErlList } from './type-utilities';
import { createErlMacro } from './type-utilities';
import { createErlNumber } from './type-utilities';
import { createErlString } from './type-utilities';
import { createErlSymbol } from './type-utilities';
import { createErlUserPureFunction } from './type-utilities';
import { defBang } from './keyTokens';
import { _do } from './keyTokens';
import { erlNil } from './type-utilities';
import { _eval } from './keyTokens';
import { _evalWithEnv } from './keyTokens';
import { expandMacro } from './keyTokens';
import { extractJsValue } from './type-utilities';
import { filter } from './linked-list';
import { fnStar } from './keyTokens';
import { forEach } from './linked-list';
import { fromArray } from './linked-list';
import { fromErlIndex } from './index-utilities';
import { fromJsObjects } from './index-utilities';
import { _getCurrentEnv } from './keyTokens';
import { _getDefaultEnv } from './keyTokens';
import { _if } from './keyTokens';
import { isEmpty } from './linked-list';
import { isErlCoreEffectfulFunction } from './type-utilities';
import { isErlCorePureFunction } from './type-utilities';
import { isErlIgnore } from './type-utilities';
import { isErlIndex } from './type-utilities';
import { isErlKeyword } from './type-utilities';
import { isErlList } from './type-utilities';
import { isErlMacro } from './type-utilities';
import { isErlSymbol } from './type-utilities';
import { isErlUserPureFunction } from './type-utilities';
import { isJsString } from './js-utilities';
import { isKeyword } from './keyTokens';
import { letStar } from './keyTokens';
import { letrecStar } from './keyTokens';
import { lookup } from './env-utilities';
import { macroStar } from './keyTokens';
import { map } from './linked-list';
import { next } from './linked-list';
import { quasiquote } from './keyTokens';
import { quote } from './keyTokens';
import { spliceUnquote } from './keyTokens';
import { unquote } from './keyTokens';
import { recurse } from './linked-list';
import { reduce } from './linked-list';
import { reduceBy2 } from './linked-list';
import { reverse } from './linked-list';
import { setMainEnv } from './env-utilities';
import { splat } from './keyTokens';
import { toPartialArray } from './linked-list';
import { tryStar } from './keyTokens';
import { undefBang } from './keyTokens';
import { unsetMainEnv } from './env-utilities';

const __hasProp = {}.hasOwnProperty;

const createFn = function(erlList, envs) {
  return createErlUserPureFunction({
    localEnvs: envs.slice(0),
    erlExpression: next(erlList),
    erlParameters: car(erlList)
  });
};

const createLocalEnv = function(erlParams, erlArgs) {
  const env = {};
  while (!isEmpty(erlParams)) {
    const jsParam = extractJsValue(car(erlParams));
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

const createMacro = function(erlList, envs) {
  return createErlMacro({
    localEnvs: envs.slice(0),
    erlExpression: next(erlList),
    erlParameters: car(erlList)
  });
};

const defineNewValue = function(erlList, envs, addResult) {
  const jsKey = extractJsValue(car(erlList));
  const erlValue = _evaluate(next(erlList), envs, addResult);
  return setMainEnv(envs, jsKey, erlValue);
};

const evalQuasiquotedExpr = function(expr, envs, addResult) {
  if (!isErlList(expr)) {
    return expr;
  }
  const manageItem = function(memo, item) {
    if (isUnquotedExpr(item)) {
        return createErlList(_evaluate(next(item), envs, addResult), memo);
    } else if (isSpliceUnquotedExpr(item)) {
        const _manageItem = function(_memo, _item) {
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

const _evaluate = function(erlExpr, envs, addResult) {
  while (true) {
    if (isErlSymbol(erlExpr)) {
      const jsString = extractJsValue(erlExpr);
      if (isKeyword(jsString)) {
        return createErlKeyword(jsString);
      } else {
        return lookup(envs, jsString);
      }
    } else if (isErlIndex(erlExpr)) {
      const index = extractJsValue(erlExpr);
      const newIndex = {};
      for (let key in index) {
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
      const erlExprArray = toPartialArray(2, erlExpr);
      const head = erlExprArray[0];
      const arg1 = erlExprArray[1];
      const remainingArgs = erlExprArray[2];
      const tailList = cdr(erlExpr);
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
          const otherwise = next(remainingArgs);
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
          return _expandMacro(car(arg1), cdr(arg1), envs, addResult);
        case tryStar:
          try {
            return _evaluate(arg1, envs, addResult);
          } catch (_error) {
            let ex = _error;
            if (isEmpty(remainingArgs)) {
              throw ex;
            } else {
              const remainingArgsArray = toPartialArray(3, car(remainingArgs));
              const _catch = remainingArgsArray[0];
              const _ex = remainingArgsArray[1];
              const catchExpr = remainingArgsArray[2];
              if ((extractJsValue(_catch)) !== "catch*") {
                throw ex;
              }
              if (ex instanceof Error) {
                ex = createErlString(circumpendQuotes(ex.message));
              }
              const newEnv = {};
              newEnv[extractJsValue(_ex)] = ex;
              return _evaluate(catchExpr, addEnv(envs, newEnv), addResult);
            }
          }
          break;
        default:
          const erlSymbol = head;
          erlExpr = tailList;
          const erlInvokable = _evaluate(erlSymbol, envs, addResult);
          if (isErlKeyword(erlInvokable)) {
            erlExpr = createErlList(erlInvokable, tailList);
          } else if (isErlMacro(erlInvokable)) {
            erlExpr = _expandMacro(head, tailList, envs, addResult);
          } else if (isErlCorePureFunction(erlInvokable)) {
            const fn = extractJsValue(erlInvokable);
            const erlArgs = map(evaluate(envs, addResult), erlExpr);
            return fn(erlArgs);
          } else if (isErlCoreEffectfulFunction(erlInvokable)) {
            const fn = extractJsValue(erlInvokable);
            const erlArgs = map(evaluate(envs, addResult), erlExpr);
            addResult(fn(erlArgs));
            return erlNil;
          } else if (isErlUserPureFunction(erlInvokable)) {
            const jsValue = extractJsValue(erlInvokable);
            const localEnvs = jsValue.localEnvs;
            const erlExpression = jsValue.erlExpression;
            const erlParameters = jsValue.erlParameters;
            const erlArgs = map(evaluate(envs, addResult), erlExpr);
            erlExpr = erlExpression;
            const newEnv = createLocalEnv(erlParameters, erlArgs);
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

const evaluate = function(envs, addResult) {
  return function(erlExpr) {
    if (erlExpr === commentSignal) {
      return commentSignal;
    }
    return _evaluate(erlExpr, envs, addResult);
  };
};

const _expandMacro = function(erlMacroSymbol, erlArgs, envs, addResult) {
  const erlMacro = _evaluate(erlMacroSymbol, envs, addResult);
  const jsValue = extractJsValue(erlMacro);
  const localEnvs = jsValue.localEnvs;
  const erlExpression = jsValue.erlExpression;
  const erlParameters = jsValue.erlParameters;
  const newEnv = createLocalEnv(erlParameters, erlArgs);
  const newEnvStack = addEnv(localEnvs, newEnv);
  return _evaluate(erlExpression, newEnvStack, addResult);
};

const ignorable = function(erlVal, envs, addResult) {
  if (isErlIgnore(erlVal)) {
    return true;
  }
  if (!isErlList(erlVal)) {
    return false;
  }
  const symbol = car(erlVal);
  if (!isErlSymbol(symbol)) {
    return false;
  }
  const jsString = extractJsValue(symbol);
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

const reduceLet = function(envs, list, addResult) {
  const newEnv = {};
  const _envs = addEnv(envs, newEnv);
  while (!isEmpty(list)) {
    const jsKey = extractJsValue(list.value);
    list = recurse(list);
    const envValue = _evaluate(list.value, _envs, addResult);
    newEnv[jsKey] = envValue;
    list = recurse(list);
  }
  return newEnv;
};

const reduceLetrec = function(envs, list, addResult) {
  const newEnv = {};
  const _envs = addEnv(envs, newEnv);
  while (!isEmpty(list)) {
    const jsKey = extractJsValue(list.value);
    list = recurse(list);
    const _erlExpr = fromArray(
      [  createErlSymbol("fix*"),
         fromArray([createErlSymbol("fn*"),
         fromArray([jsKey]),
         list.value])
      ]);
    const envValue = _evaluate(_erlExpr, _envs, addResult);
    newEnv[jsKey] = envValue;
    list = recurse(list);
  }
  return newEnv;
};

const isSpliceUnquote = function(erlValue) {
  return (extractJsValue(erlValue)) === spliceUnquote;
};

const isSpliceUnquotedExpr = function(erlValue) {
  return isErlList(erlValue) && isSpliceUnquote(car(erlValue));
};

const undefineValue = function(erlList, envs) {
  const jsKey = extractJsValue(car(erlList));
  return unsetMainEnv(envs, jsKey);
};

const isUnquote = function(erlValue) {
  return extractJsValue(erlValue) === unquote;
};

const isUnquotedExpr = function(erlValue) {
  return isErlList(erlValue) && isUnquote(car(erlValue));
};

export { evaluate };
