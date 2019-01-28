var createErlCorePureFunction = require('./type-utilities').createErlCorePureFunction;
var extractJsValue            = require('./type-utilities').extractJsValue;
var fromErlIndex              = require('./index-utilities').fromErlIndex;
var _process                  = require('./_process');
var toPartialArray            = require('./linked-list').toPartialArray;

var __hasProp = {}.hasOwnProperty;

var getEnvironment = function(config) {
  var environment = config.environment;
  var get_jsFileName_and_localEnv = function(erlArgs) {
    var partialArray = toPartialArray(2, erlArgs);
    var erlFileName = partialArray[0];
    var localEnv = partialArray[1];
    var jsFileName = stripQuotes(extractJsValue(erlFileName));
    return [jsFileName, localEnv];
  };
  var load = function(erlArgs) {
    return _process_(_read(erlArgs));
  };
  var loadWithBareEnv = function(erlArgs) {
    var temp = get_jsFileName_and_localEnv(erlArgs);
    var jsFileName = temp[0];
    var localEnv = temp[1];
    return _processFileAndEnv(
      readFile(jsFileName),
      [fromErlIndex(localEnv)]);
  };
  var loadWithEnv = function(erlArgs) {
    var temp = get_jsFileName_and_localEnv(erlArgs);
    var jsFileName = temp[0];
    var localEnv = temp[1];
    return _processFileAndEnv(
      readFile(jsFileName),
      [fromErlIndex(localEnv), environment]);
  };
  var _process_ = function(jsString) {
    return _process([environment])(jsString);
  };
  var _processFileAndEnv = function(file, envStack) {
    return _process(envStack)(file);
  };
  var _read = function(erlArgs) {
    va jsFileName = get_jsFileName_and_localEnv(erlArgs)[0];
    return readFile(jsFileName);
  };
  var readFile = function(jsFileName) {
    return require('fs').readFileSync(jsFileName).toString();
  };
  var setCoreFnsOnErlValues_bang_ = function(env, fns) {
    var _results = [];
    for (var fnName in fns) {
      if (!__hasProp.call(fns, fnName)) continue;
      var fn = fns[fnName];
      _results.push(env[fnName] = createErlCorePureFunction(fn));
    }
    return _results;
  };
  var stripQuotes = function(jsString) {
    return jsString.slice(1, -1);
  };
  var functionsOnErlValues = {
    'load': load,
    'load-with-env': loadWithEnv,
    'load-with-bare-env': loadWithBareEnv
  };
  setCoreFnsOnErlValues_bang_(environment, functionsOnErlValues);
  return environment;
};

module.exports = getEnvironment;
