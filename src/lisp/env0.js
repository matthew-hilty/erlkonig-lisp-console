var add, contains_question_, createErlBoolean, createErlCorePureFunction, createErlIdentifier, createErlIndex, createErlNumber, createErlString, dissoc, divide, erlNil, exponentiate, extractJsValue, fromArray, functionsOnJsValues, get, getEnvironment, greaterThan, greaterThanOrEqual, index, jsNaN_question_, jsNumber_question_, jsString_question_, keys, length, lessThan, lessThanOrEqual, lift, max, min, mod, multiply, negate, parseNumber, reduce, setCoreFnsOnJsValues_bang_, subtract, toArray, vals,
  __slice = [].slice,
  __hasProp = {}.hasOwnProperty;

createErlBoolean = require('./type-utilities').createErlBoolean;

createErlCorePureFunction = require('./type-utilities').createErlCorePureFunction;

createErlIdentifier = require('./type-utilities').createErlIdentifier;

createErlIndex = require('./type-utilities').createErlIndex;

createErlNumber = require('./type-utilities').createErlNumber;

createErlString = require('./type-utilities').createErlString;

extractJsValue = require('./type-utilities').extractJsValue;

fromArray = require('./linked-list').fromArray;

jsNaN_question_ = require('./js-utilities').jsNaN_question_;

jsNumber_question_ = require('./js-utilities').jsNumber_question_;

jsString_question_ = require('./js-utilities').jsString_question_;

erlNil = require('./type-utilities').erlNil;

reduce = require('./linked-list').reduce;

toArray = require('./linked-list').toArray;

add = function() {
  var nbrs;
  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlNumber(nbrs.reduce(function(x, nbr) {
    return x += nbr;
  }));
};

contains_question_ = function(index, key) {
  return createErlBoolean(key in index);
};

dissoc = function() {
  var copy, index, key, keys, value, _i, _len;
  index = arguments[0], keys = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  copy = {};
  for (key in index) {
    if (!__hasProp.call(index, key)) continue;
    value = index[key];
    copy[key] = value;
  }
  for (_i = 0, _len = keys.length; _i < _len; _i++) {
    key = keys[_i];
    delete copy[key];
  }
  return createErlIndex(copy);
};

divide = function() {
  var nbrs;
  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlNumber(nbrs.reduce(function(x, nbr) {
    return x /= nbr;
  }));
};

exponentiate = function() {
  var nbrs;
  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlNumber(nbrs.reduce(function(x, nbr) {
    return Math.pow(x, nbr);
  }));
};

get = function(jsIndex, jsKey) {
  return jsIndex[jsKey];
};

getEnvironment = function(config) {
  var environment;
  environment = config.environment;
  setCoreFnsOnJsValues_bang_(environment, functionsOnJsValues);
  return environment;
};

greaterThanOrEqual = function() {
  var nbrs;
  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlBoolean(nbrs[0] >= nbrs[1]);
};

greaterThan = function() {
  var nbrs;
  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlBoolean(nbrs[0] > nbrs[1]);
};

index = function() {
  var args, i, k, _i, _len;
  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  index = {};
  for (i = _i = 0, _len = args.length; _i < _len; i = ++_i) {
    k = args[i];
    if (i % 2 === 0) {
      index[k] = args[i + 1];
    }
  }
  return createErlIndex(index);
};

keys = function(index) {
  var jsNbr, key, value, _keys;
  _keys = [];
  for (key in index) {
    if (!__hasProp.call(index, key)) continue;
    value = index[key];
    _keys.push(jsNaN_question_(jsNbr = parseFloat(key, 10)) ? (key[0] === ':' ? createErlIdentifier : createErlString)(key) : createErlNumber(jsNbr));
  }
  return fromArray(_keys);
};

length = function(jsVal) {
  if (!jsString_question_(jsVal)) {
    return erlNil;
  }
  return createErlNumber(jsVal.length - 2);
};

lessThan = function() {
  var nbrs;
  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlBoolean(nbrs[0] < nbrs[1]);
};

lessThanOrEqual = function() {
  var nbrs;
  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlBoolean(nbrs[0] <= nbrs[1]);
};

lift = function(fnOnJsValues) {
  return function(erlValueList) {
    return fnOnJsValues.apply(null, (toArray(erlValueList)).map(extractJsValue));
  };
};

max = function() {
  var nbrs;
  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlNumber(Math.max.apply(Math, nbrs));
};

min = function() {
  var nbrs;
  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlNumber(Math.min.apply(Math, nbrs));
};

mod = function(nbr0, nbr1) {
  return createErlNumber(nbr0 % nbr1);
};

multiply = function() {
  var nbrs;
  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlNumber(nbrs.reduce(function(x, nbr) {
    return x *= nbr;
  }));
};

negate = function(nbr) {
  return createErlNumber(-1 * nbr);
};

parseNumber = function(jsVal) {
  var jsNbr;
  if (jsNumber_question_(jsVal)) {
    return jsVal;
  }
  if (!jsString_question_(jsVal)) {
    return erlNil;
  }
  jsNbr = parseFloat(stripQuotes(jsVal), 10);
  if (jsNaN_question_(jsNbr)) {
    return erlNil;
  } else {
    return createErlNumber(jsNbr);
  }
};

setCoreFnsOnJsValues_bang_ = function(env, fns) {
  var fn, fnName, _results;
  _results = [];
  for (fnName in fns) {
    if (!__hasProp.call(fns, fnName)) continue;
    fn = fns[fnName];
    _results.push(env[fnName] = createErlCorePureFunction(lift(fn)));
  }
  return _results;
};

subtract = function() {
  var nbrs;
  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlNumber(nbrs.reduce(function(x, nbr) {
    return x -= nbr;
  }));
};

vals = function(index) {
  var key, value, values;
  values = [];
  for (key in index) {
    if (!__hasProp.call(index, key)) continue;
    value = index[key];
    values.push(value);
  }
  return fromArray(values);
};

functionsOnJsValues = {
  '+': add,
  'contains?': contains_question_,
  'dissoc': dissoc,
  '/': divide,
  '**': exponentiate,
  'get': get,
  '>': greaterThan,
  '>=': greaterThanOrEqual,
  'index': index,
  'keys': keys,
  'length': length,
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

module.exports = getEnvironment;
