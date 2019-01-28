var createErlBoolean          = require('./type-utilities').createErlBoolean;
var createErlCorePureFunction = require('./type-utilities').createErlCorePureFunction;
var createErlIdentifier       = require('./type-utilities').createErlIdentifier;
var createErlIndex            = require('./type-utilities').createErlIndex;
var createErlNumber           = require('./type-utilities').createErlNumber;
var createErlString           = require('./type-utilities').createErlString;
var extractJsValue            = require('./type-utilities').extractJsValue;
var fromArray                 = require('./linked-list').fromArray;
var isJsNaN           = require('./js-utilities').isJsNaN;
var isJsNumber        = require('./js-utilities').isJsNumber;
var isJsString        = require('./js-utilities').isJsString;
var erlNil                    = require('./type-utilities').erlNil;
var reduce                    = require('./linked-list').reduce;
var toArray                   = require('./linked-list').toArray;

var  __slice  = [].slice;
var __hasProp = {}.hasOwnProperty;

var add = function() {
  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlNumber(nbrs.reduce(function(x, nbr) {
    return x += nbr;
  }));
};

var contains = function(index, key) {
  return createErlBoolean(key in index);
};

var dissoc = function() {
  var index = arguments[0];
  var keys = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  var len = keys.length;
  var copy = {};
  for (var key in index) {
    if (!__hasProp.call(index, key)) continue;
    var value = index[key];
    copy[key] = value;
  }
  for (var i = 0; i < len; i++) {
    var key = keys[i];
    delete copy[key];
  }
  return createErlIndex(copy);
};

var divide = function() {
  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlNumber(nbrs.reduce(function(x, nbr) {
    return x /= nbr;
  }));
};

var exponentiate = function() {
  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlNumber(nbrs.reduce(function(x, nbr) {
    return Math.pow(x, nbr);
  }));
};

var get = function(jsIndex, jsKey) {
  return jsIndex[jsKey];
};

var getEnvironment = function(config) {
  var environment = config.environment;
  setCoreFnsOnJsValues_bang_(environment, functionsOnJsValues);
  return environment;
};

var greaterThanOrEqual = function() {
  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlBoolean(nbrs[0] >= nbrs[1]);
};

var greaterThan = function() {
  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlBoolean(nbrs[0] > nbrs[1]);
};

var index = function() {
  var args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  var len = args.length;
  var _index = {};
  for (var i = 0; i < len; i++) {
    var k = args[i];
    if (i % 2 === 0) {
      _index[k] = args[i + 1];
    }
  }
  return createErlIndex(_index);
};

var keys = function(index) {
  var _keys = [];
  for (var key in index) {
    if (!__hasProp.call(index, key)) continue;
    var value = index[key];
    var jsNbr = parseFloat(key, 10);
    var _key = isJsNaN(jsNbr)
        ? (key[0] === ':' ? createErlIdentifier : createErlString)(key)
        : createErlNumber(jsNbr);
    _keys.push(_key);
  }
  return fromArray(_keys);
};

var length = function(jsVal) {
  if (!isJsString(jsVal)) {
    return erlNil;
  }
  return createErlNumber(jsVal.length - 2);
};

var lessThan = function() {
  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlBoolean(nbrs[0] < nbrs[1]);
};

var lessThanOrEqual = function() {
  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlBoolean(nbrs[0] <= nbrs[1]);
};

var lift = function(fnOnJsValues) {
  return function(erlValueList) {
    return fnOnJsValues.apply(null, (toArray(erlValueList)).map(extractJsValue));
  };
};

var max = function() {
  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlNumber(Math.max.apply(Math, nbrs));
};

var min = function() {
  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlNumber(Math.min.apply(Math, nbrs));
};

var mod = function(nbr0, nbr1) {
  return createErlNumber(nbr0 % nbr1);
};

var multiply = function() {
  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlNumber(nbrs.reduce(function(x, nbr) {
    return x *= nbr;
  }));
};

var negate = function(nbr) {
  return createErlNumber(-1 * nbr);
};

var parseNumber = function(jsVal) {
  if (isJsNumber(jsVal)) {
    return jsVal;
  }
  if (!isJsString(jsVal)) {
    return erlNil;
  }
  var jsNbr = parseFloat(stripQuotes(jsVal), 10);
  if (isJsNaN(jsNbr)) {
    return erlNil;
  } else {
    return createErlNumber(jsNbr);
  }
};

var setCoreFnsOnJsValues_bang_ = function(env, fns) {
  var _results = [];
  for (var fnName in fns) {
    if (!__hasProp.call(fns, fnName)) continue;
    var fn = fns[fnName];
    env[fnName] = createErlCorePureFunction(lift(fn));
    _results.push(env[fnName]);
  }
  return _results;
};

var subtract = function() {
  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return createErlNumber(nbrs.reduce(function(x, nbr) {
    return x -= nbr;
  }));
};

var vals = function(index) {
  var values = [];
  for (var key in index) {
    if (!__hasProp.call(index, key)) {
      continue;
    }
    var value = index[key];
    values.push(value);
  }
  return fromArray(values);
};

var functionsOnJsValues = {
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
