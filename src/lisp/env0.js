import { createErlBoolean } from './type-utilities';
import { createErlCorePureFunction } from './type-utilities';
import { createErlIdentifier } from './type-utilities';
import { createErlIndex } from './type-utilities';
import { createErlNumber } from './type-utilities';
import { createErlString } from './type-utilities';
import { erlNil } from './type-utilities';
import { extractJsValue } from './type-utilities';
import { fromArray } from './linked-list';
import { isJsNaN } from './js-utilities';
import { isJsNumber } from './js-utilities';
import { isJsString } from './js-utilities';
import { reduce } from './linked-list';
import { toArray } from './linked-list';

const  __slice  = [].slice;
const __hasProp = {}.hasOwnProperty;

const add = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlNumber(nbrs.reduce(function(x, nbr) {
    return x += nbr;
  }));
};

const contains = function(index, key) {
  return createErlBoolean(key in index);
};

const dissoc = function() {
  const index = arguments[0];
  const keys = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  const len = keys.length;
  const copy = {};
  for (let key in index) {
    if (!__hasProp.call(index, key)) continue;
    const value = index[key];
    copy[key] = value;
  }
  for (let i = 0; i < len; i++) {
    const key = keys[i];
    delete copy[key];
  }
  return createErlIndex(copy);
};

const divide = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlNumber(nbrs.reduce(function(x, nbr) {
    return x /= nbr;
  }));
};

const exponentiate = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlNumber(nbrs.reduce(function(x, nbr) {
    return Math.pow(x, nbr);
  }));
};

const get = function(jsIndex, jsKey) {
  return jsIndex[jsKey];
};

const getEnvironment = function(config) {
  const environment = config.environment;
  setCoreFnsOnJsValuesBang(environment, functionsOnJsValues);
  return environment;
};

const greaterThanOrEqual = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlBoolean(nbrs[0] >= nbrs[1]);
};

const greaterThan = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlBoolean(nbrs[0] > nbrs[1]);
};

const index = function() {
  const args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  const len = args.length;
  const _index = {};
  for (let i = 0; i < len; i++) {
    const k = args[i];
    if (i % 2 === 0) {
      _index[k] = args[i + 1];
    }
  }
  return createErlIndex(_index);
};

const keys = function(index) {
  const _keys = [];
  for (let key in index) {
    if (!__hasProp.call(index, key)) continue;
    const value = index[key];
    const jsNbr = parseFloat(key, 10);
    const _key = isJsNaN(jsNbr)
        ? (key[0] === ':' ? createErlIdentifier : createErlString)(key)
        : createErlNumber(jsNbr);
    _keys.push(_key);
  }
  return fromArray(_keys);
};

const lengthString = function(jsVal) {
  if (!isJsString(jsVal)) {
    return erlNil;
  }
  return createErlNumber(jsVal.length - 2);
};

const lessThan = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlBoolean(nbrs[0] < nbrs[1]);
};

const lessThanOrEqual = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlBoolean(nbrs[0] <= nbrs[1]);
};

const lift = function(fnOnJsValues) {
  return function(erlValueList) {
    return fnOnJsValues.apply(null, (toArray(erlValueList)).map(extractJsValue));
  };
};

const max = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlNumber(Math.max.apply(Math, nbrs));
};

const min = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlNumber(Math.min.apply(Math, nbrs));
};

const mod = function(nbr0, nbr1) {
  return createErlNumber(nbr0 % nbr1);
};

const multiply = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlNumber(nbrs.reduce(function(x, nbr) {
    return x *= nbr;
  }));
};

const negate = function(nbr) {
  return createErlNumber(-1 * nbr);
};

const parseNumber = function(jsVal) {
  if (isJsNumber(jsVal)) {
    return jsVal;
  }
  if (!isJsString(jsVal)) {
    return erlNil;
  }
  const jsNbr = parseFloat(stripQuotes(jsVal), 10);
  if (isJsNaN(jsNbr)) {
    return erlNil;
  } else {
    return createErlNumber(jsNbr);
  }
};

const setCoreFnsOnJsValuesBang = function(env, fns) {
  const _results = [];
  for (let fnName in fns) {
    if (!__hasProp.call(fns, fnName)) continue;
    const fn = fns[fnName];
    env[fnName] = createErlCorePureFunction(lift(fn));
    _results.push(env[fnName]);
  }
  return _results;
};

const subtract = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlNumber(nbrs.reduce(function(x, nbr) {
    return x -= nbr;
  }));
};

const vals = function(index) {
  const values = [];
  for (let key in index) {
    if (!__hasProp.call(index, key)) {
      continue;
    }
    const value = index[key];
    values.push(value);
  }
  return fromArray(values);
};

const functionsOnJsValues = {
  '+': add,
  'contains?': contains,
  'dissoc': dissoc,
  '/': divide,
  '**': exponentiate,
  'get': get,
  '>': greaterThan,
  '>=': greaterThanOrEqual,
  'index': index,
  'keys': keys,
  'length-string': lengthString,
  'max': max,
  'min': min,
  '<': lessThan,
  '<=': lessThanOrEqual,
  '%': mod,
  '*': multiply,
  'negate': negate,
  'parse-number': parseNumber,
  '-': subtract,
  'vals': vals
};

export { getEnvironment };
