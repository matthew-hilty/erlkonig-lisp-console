var car                       = require('./linked-list').car;
var createErlCorePureFunction = require('./type-utilities').createErlCorePureFunction;
var createErlList             = require('./type-utilities').createErlList;
var createErlSymbol           = require('./type-utilities').createErlSymbol;
var extractJsValue            = require('./type-utilities').extractJsValue;
var fromArray                 = require('./linked-list').fromArray;
var fromErlIndex              = require('./index-utilities').fromErlIndex;
var isErlList                 = require('./type-utilities').isErlList;
var _process                  = require('./_process');
var toArray                   = require('./linked-list').toArray;
var tokenizeAndParse          = require('./tokenizeAndParse');
var toPartialArray            = require('./linked-list').toPartialArray;

var __hasProp = {}.hasOwnProperty;

var getEnvironment = function(config) {
  var environment = config.environment;
  var parse = function(erlArgs) {
    return tokenizeAndParse(stripQuotes(extractJsValue(car(erlArgs))));
  };
  var functionsOnErlValues = { parse: parse };
  setCoreFnsOnErlValues(environment, functionsOnErlValues);
  return environment;
};

var _process_ = _process(function(erlVal) {
  return erlVal;
});

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

module.exports = getEnvironment;
