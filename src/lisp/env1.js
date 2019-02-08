import { areEqual } from './linked-list';
import { car } from './linked-list';
import { cdr } from './linked-list';
import { circumpendQuotes } from './js-utilities';
import { concat } from './linked-list';
import { createErlAtom } from './type-utilities';
import { createErlBoolean } from './type-utilities';
import { createErlCorePureFunction } from './type-utilities';
import { createErlIndex } from './type-utilities';
import { createErlList } from './type-utilities';
import { createErlNumber } from './type-utilities';
import { createErlString } from './type-utilities';
import { createErlSymbol } from './type-utilities';
import { drop } from './linked-list';
import { erlFalse } from './type-utilities';
import { erlIgnore } from './type-utilities';
import { erlNil } from './type-utilities';
import { erlTrue } from './type-utilities';
import { extractJsValue } from './type-utilities';
import { fromArray } from './linked-list';
import { interpret } from './interpret';
import { isEmpty } from './linked-list';
import { isErlAtom } from './type-utilities';
import { isErlCorePureFunction } from './type-utilities';
import { isErlBoolean } from './type-utilities';
import { isErlFalse } from './type-utilities';
import { isErlIndex } from './type-utilities';
import { isErlList } from './type-utilities';
import { isErlMacro } from './type-utilities';
import { isErlNil } from './type-utilities';
import { isErlNumber } from './type-utilities';
import { isErlString } from './type-utilities';
import { isErlSymbol } from './type-utilities';
import { isErlTrue } from './type-utilities';
import { isErlUserPureFunction } from './type-utilities';
import { last } from './linked-list';
import { next } from './linked-list';
import { recurse } from './linked-list';
import { reduce } from './linked-list';
import { reverse } from './linked-list';
import { serialize } from './serialize';
import { take } from './linked-list';
import { toArray } from './linked-list';
import { toPartialArray } from './linked-list';

const __slice   = [].slice;
const __hasProp = {}.hasOwnProperty;

const append = function(erlArgs) {
  const erlArgsArray = toArray(erlArgs);
  const erlList = erlArgsArray[0];
  const erlValues = 2 <= erlArgsArray.length ? __slice.call(erlArgsArray, 1) : [];
  return concat(erlList, fromArray(erlValues));
};

const _areEqual = function(erlArgs) {
  const partialArray = toPartialArray(2, erlArgs);
  const erlValue0 = partialArray[0];
  const erlValue1 = partialArray[1];
  const __areEqual = function(erlValue0, erlValue1) {
    if (isErlList(erlValue0) && isErlList(erlValue1)) {
      return areEqual(erlValue0, erlValue1, __areEqual);
    } else if (isErlIndex(erlValue0) && isErlIndex(erlValue1)) {
      const jsIndex0 = erlValue0.jsValue;
      const jsIndex1 = erlValue1.jsValue;
      return (__areEqual(keys(jsIndex0), keys(jsIndex1)))
        && (__areEqual(vals(jsIndex0), vals(jsIndex1)));
    } else {
      return erlValue0.jsValue === erlValue1.jsValue;
    }
  };
  return createErlBoolean(__areEqual(erlValue0, erlValue1));
};

const assoc = function(erlArgs) {
  let args;
  const jsIndex = extractJsValue(car(erlArgs));
  args = cdr(erlArgs);
  const copy = {};
  for (let key in jsIndex) {
    if (!__hasProp.call(jsIndex, key)) {
      continue;
    }
    const value = jsIndex[key];
    copy[key] = value;
  }
  while (!isEmpty(args)) {
    const k = car(args);
    const v = next(args);
    args = recurse(recurse(args));
    copy[extractJsValue(k)] = v;
  }
  return createErlIndex(copy);
};

const atom = function(erlArgs) {
  return createErlAtom(car(erlArgs));
};

const _car = function(erlArgs) {
  const arg = car(erlArgs);
  if (isErlList(arg)) {
    return car(arg);
  } else {
    return erlNil;
  }
};

const _cdr = function(erlArgs) {
  const arg = car(erlArgs);
  if (isErlList(arg)) {
    return cdr(arg);
  } else {
    return erlNil;
  }
};

const _concat = function(erlArgs) {
  const erlLists = toArray(erlArgs);
  return concat.apply(null, erlLists);
};

const cons = function(erlArgs) {
  return createErlList(car(erlArgs), next(erlArgs));
};

const count = function(erlArgs) {
  const erlList = car(erlArgs);
  if (!isErlList(erlList)) {
    return erlNil;
  }
  const _reduce = function(sum, value) {
    return sum + 1;
  };
  return createErlNumber(reduce(0, _reduce, car(erlArgs)));
};

const createPredicate = function(pred) {
  return function(jsList) {
    const erlValue = jsList.value;
    return createErlBoolean(pred(erlValue));
  };
};

const deref = function(erlArgs) {
  return (car(erlArgs)).erlValue;
};

const _drop = function(erlArgs) {
  const partialArray = toPartialArray(2, erlArgs);
  const erlNumber = partialArray[0];
  const erlList = partialArray[1];
  return drop(extractJsValue(erlNumber), erlList);
};

const first = function(erlArgs) {
  return car(car(erlArgs));
};

const getEnvironment = function(config) {
  const environment = config.environment;
  setCoreFnsOnErlValues(environment, functionsOnErlValues);
  return environment;
};

const hasProcess = function() {
  return typeof process !== 'undefined';
}

const hasProcessWebpackShim = function() {
  return(process.title === 'browser' && process.browser);
}

const ignore = function(erlArgs) {
  return erlIgnore;
};

const ignoreIfTrue = function(erlArgs) {
  const partialArray = toPartialArray(2, erlArgs);
  const erlBool = partialArray[0];
  const erlValue = partialArray[1];
  if (extractJsValue(erlBool)) {
    return erlIgnore;
  } else {
    return erlValue;
  }
};

const ignoreUnlessTrue = function(erlArgs) {
  const partialArray = toPartialArray(2, erlArgs);
  const erlBool = partialArray[0];
  const erlValue = partialArray[1];
  if (extractJsValue(erlBool)) {
    return erlValue;
  } else {
    return erlIgnore;
  }
};

const _interpret = function(erlArgs) {
  return interpret(stripQuotes(extractJsValue(car(erlArgs))));
};

const _isEmpty = function(erlArgs) {
  if (isEmpty(erlArgs)) {
    return erlFalse;
  } else {
    if (isEmpty(car(erlArgs))) {
      return erlTrue;
    } else {
      return erlFalse;
    }
  }
};

const isFunction = function(jsList) {
  const erlValue = jsList.value;
  return createErlBoolean(isErlCorePureFunction(erlValue)
    || isErlUserPureFunction(erlValue));
};

const isNode = function() {
  return hasProcess() && !hasProcessWebpackShim();
}

const _last = function(erlArgs) {
  const arg = car(erlArgs);
  if (isErlList(arg)) {
    return last(arg);
  } else {
    return erlNil;
  }
};

const list = function(erlArgs) {
  return erlArgs;
};

const meta = function(erlArgs) {
  const erlMeta = (car(erlArgs)).meta;
  if (erlMeta != null) {
    return erlMeta;
  } else {
    return erlNil;
  }
};

const _not = function(erlArgs) {
  const erlVal = car(erlArgs);
  if (isErlNil(erlVal) || isErlFalse(erlVal)) {
    return erlTrue;
  } else {
    return erlFalse;
  }
};

const nth = function(erlArgs) {
  const partialArray = toPartialArray(2, erlArgs);
  const erlNumber = partialArray[0];
  let erlList = partialArray[1];
  const target = extractJsValue(erlNumber);
  if (target >= 0) {
    for (let i = 0; i < target; i++) {
      erlList = cdr(erlList);
    }
  } else {
    for (let i = 0; i > target; i--) {
      erlList = cdr(erlList);
    }
  }
  return car(erlList);
};

const prepend = function(erlArgs) {
  const erlArgsArray = toArray(erlArgs);
  const erlList = erlArgsArray[0];
  const erlValues = 2 <= erlArgsArray.length ? __slice.call(erlArgsArray, 1) : [];
  const _reduce = function(list, val) {
    return createErlList(val, list);
  };
  return erlValues.reduce(_reduce, erlList);
};

const _prStr = function(erlArgs, printReadably) {
  return ((toArray(erlArgs)).map(function(erlArg) {
    return serialize(erlArg, printReadably);
  })).join('');
};

const prettyString = function(erlArgs) {
  return createErlString(circumpendQuotes(_prStr(erlArgs, true)));
};

const read = function(jsList) {
  if (isNode()) {
    const _read = function(_jsList) {
      const jsFileName = stripQuotes(extractJsValue(car(_jsList)));
      //return require('fs').readFileSync(jsFileName).toString();
      return null;
    };
    return createErlString(_read(jsList));
  } else {
    return erlNil;
  }
};

const reset = function(erlArgs) {
  const partialArray = toPartialArray(2, erlArgs);
  const atom = partialArray[0];
  const value = partialArray[1];
  atom.erlValue = value;
  return atom;
};

const rest = function(erlArgs) {
  const arg = car(erlArgs);
  if (isErlList(arg)) {
    return cdr(arg);
  } else {
    return erlNil;
  }
};

const _reverse = function(erlArgs) {
  const arg = car(erlArgs);
  if (isErlList(arg)) {
    return reverse(arg);
  } else {
    return erlNil;
  }
};

const set = function(erlArgs) {
  const partialArray = toPartialArray(3, erlArgs);
  const index = partialArray[0];
  const key = partialArray[1];
  const val = partialArray[2];
  (extractJsValue(index))[extractJsValue(key)] = val;
  return index;
};

const setCoreFnsOnErlValues = function(env, fns) {
  const _results = [];
  for (let fnName in fns) {
    if (!__hasProp.call(fns, fnName)) continue;
    const fn = fns[fnName];
    _results.push(env[fnName] = createErlCorePureFunction(fn));
  }
  return _results;
};

const slurp = function(erlArgs) {
  if (isNode()) {
    const jsFileName = stripQuotes(extractJsValue(car(erlArgs)));
    //const _fs_ = require('fs');
    //return createErlString(circumpendQuotes(_fs_.readFileSync(jsFileName).toString()));
    return null;
  } else {
    return erlNil;
  }
};

const string = function(erlArgs) {
  return createErlString(circumpendQuotes(_prStr(erlArgs, false)));
};

const stripQuotes = function(jsString) {
  return jsString.slice(1, -1);
};

const symbol = function(erlArgs) {
  const erlValue = car(erlArgs);
  if (isErlString(erlValue)) {
    const jsStr = extractJsValue(erlValue);
    return createErlSymbol(jsStr.slice(1, -1));
  } else {
    return erlNil;
  }
};

const _take = function(erlArgs) {
  const partialArray = toPartialArray(2, erlArgs);
  const erlNumber = partialArray[0];
  const erlList = partialArray[1];
  return take(extractJsValue(erlNumber), erlList);
};

const typeOf = function(erlArgs) {
  const erlValue = car(erlArgs);
  return createErlString(circumpendQuotes(erlValue.type));
};

const _throw = function(erlArgs) {
  throw car(erlArgs);
};

const timeMs = function() {
  return createErlNumber(new Date().getTime());
};

const withMeta = function(erlArgs) {
  const partialArray = toPartialArray(2, erlArgs);
  const erlVal = partialArray[0];
  const erlMeta = partialArray[1];
  if (isErlAtom(erlVal)) {
    const erlValue = erlVal.erlValue;
    const type = erlVal.type;
    return {
      erlValue: erlValue,
      type: type,
      meta: erlMeta
    };
  } else {
    const jsValue = erlVal.jsValue;
    const type = erlVal.type;
    return {
      jsValue: jsValue,
      type: type,
      meta: erlMeta
    };
  }
};

const write = function(erlArgs) {
  return createErlString(serialize(car(erlArgs)));
};

const predicates = [
  isErlAtom,
  isErlBoolean,
  isErlCorePureFunction,
  isErlFalse,
  isErlList,
  isErlMacro,
  isErlNil,
  isErlNumber,
  isErlSymbol,
  isErlString,
  isErlUserPureFunction,
  isErlTrue
].map(createPredicate);

const isAtom    = predicates[0];
const isBoolean = predicates[1];
const isCoreFn  = predicates[2];
const isFalse   = predicates[3];
const isList    = predicates[4];
const isMacro   = predicates[5];
const isNil     = predicates[6];
const isNumber  = predicates[7];
const isSymbol  = predicates[8];
const isString  = predicates[9];
const isUserFn  = predicates[10];
const isTrue    = predicates[11];

const functionsOnErlValues = {
  '=': _areEqual,
  'append': append,
  'assoc': assoc,
  'atom': atom,
  'atom?': isAtom,
  'boolean?': isBoolean,
  'car': _car,
  'cdr': _cdr,
  'cons': cons,
  'concat': _concat,
  'core-fn?': isCoreFn,
  'count': count,
  'deref': deref,
  'drop': _drop,
  'empty?': _isEmpty,
  'first': _car,
  'false?': isFalse,
  'function?': isFunction,
  'ignore!': ignore,
  'ignoreIfTrue': ignoreIfTrue,
  'ignoreUnlessTrue': ignoreUnlessTrue,
  'last': _last,
  'list': list,
  'list?': isList,
  'macro?': isMacro,
  'meta': meta,
  'nil?': isNil,
  'not': _not,
  'nth': nth,
  'number?': isNumber,
  'parse': _interpret,
  'prepend': prepend,
  'pretty-string': prettyString,
  'rest': _cdr,
  'reverse': _reverse,
  'string': string,
  'string?': isString,
  'symbol': symbol,
  'symbol?': isSymbol,
  'take': _take,
  'throw': _throw,
  'true?': isTrue,
  'typeof': typeOf,
  'user-fn?': isUserFn,
  'read': read,
  'reset!': reset,
  'set!': set,
  'slurp': slurp,
  'time-ms': timeMs,
  'with-meta': withMeta,
  'write': write
};

export { getEnvironment };
