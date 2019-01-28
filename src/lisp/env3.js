var car                       = require('./linked-list').car;
var createErlCorePureFunction = require('./type-utilities').createErlCorePureFunction;
var createErlList             = require('./type-utilities').createErlList;
var createErlSymbol           = require('./type-utilities').createErlSymbol;
var extractJsValue            = require('./type-utilities').extractJsValue;
var fromArray                 = require('./linked-list').fromArray;
var fromErlIndex              = require('./index-utilities').fromErlIndex;
var isErlList         = require('./type-utilities').isErlList;
var _process                  = require('./_process');
var toArray                   = require('./linked-list').toArray;
var tokenizeAndParse          = require('./tokenizeAndParse');
var toPartialArray            = require('./linked-list').toPartialArray;

var __hasProp = {}.hasOwnProperty;

var getEnvironment = function(config) {
  var environment = config.environment;
  var apply = function(erlArgs) {
    var erlArgsArray = toArray(erlArgs);
    var erlFn = erlArgsArray[0];
    var erlArgList = erlArgsArray[1];
    return _eval(createErlList(erlFn, erlArgList));
  };
  var call = function(erlArgs) {
    return _eval(erlArgs);
  };
  var _eval = function(erlVal) {
    return _process_([environment])(erlVal);
  };
  var _evalListHead = function(erlArgs) {
    return _eval(car(erlArgs));
  };
  var evalString = function(erlArgs) {
    return (function(_erlArgs) {
      return _eval(tokenizeAndParse(stripQuotes(extractJsValue(car(_erlArgs)))));
    })(erlArgs);
  };
  var evalWithBareEnv = function(erlArgs) {
    var partialArray = toPartialArray(2, erlArgs);
    var expr = partialArray[0];
    var localEnv = partialArray[1];
    return _process_([fromErlIndex(localEnv)])(expr);
  };
  var evalWithEnv = function(erlArgs) {
    var partialArray = toPartialArray(2, erlArgs);
    var expr = partialArray[0];
    var localEnv = partialArray[1];
    return _process_([fromErlIndex(localEnv), environment])(expr);
  };
  var parse = function(erlArgs) {
    return tokenizeAndParse(stripQuotes(extractJsValue(car(erlArgs))));
  };
  var functionsOnErlValues = { parse: parse };
  setCoreFnsOnErlValues(environment, functionsOnErlValues);
  return environment;
};

var setCoreFnsOnErlValues = function(env, fns) {
  var _results = [];
  for (var fnName in fns) {
    if (!__hasProp.call(fns, fnName)) {
      continue;
    }
    var fn = fns[fnName];
    _results.push(env[fnName] = createErlCorePureFunction(fn));
  }
  return _results;
};

var stripQuotes = function(jsString) {
  return jsString.slice(1, -1);
};

var _process_ = _process(function(erlVal) {
  return erlVal;
});

module.exports = getEnvironment;
