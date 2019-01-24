var createErlCorePureFunction, extractJsValue, fromErlIndex, getEnvironment, toPartialArray, _process,
  __hasProp = {}.hasOwnProperty;

createErlCorePureFunction = require('./type-utilities').createErlCorePureFunction;

extractJsValue = require('./type-utilities').extractJsValue;

fromErlIndex = require('./index-utilities').fromErlIndex;

_process = require('./_process');

toPartialArray = require('./linked-list').toPartialArray;

getEnvironment = function(config) {
  var environment, functionsOnErlValues, get_jsFileName_and_localEnv, load, loadWithBareEnv, loadWithEnv, readFile, setCoreFnsOnErlValues_bang_, stripQuotes, _processFileAndEnv, _process_, _read;
  environment = config.environment;
  get_jsFileName_and_localEnv = function(erlArgs) {
    var erlFileName, jsFileName, localEnv, _ref;
    _ref = toPartialArray(2, erlArgs), erlFileName = _ref[0], localEnv = _ref[1];
    jsFileName = stripQuotes(extractJsValue(erlFileName));
    return [jsFileName, localEnv];
  };
  load = function(erlArgs) {
    return _process_(_read(erlArgs));
  };
  loadWithBareEnv = function(erlArgs) {
    var jsFileName, localEnv, _ref;
    _ref = get_jsFileName_and_localEnv(erlArgs), jsFileName = _ref[0], localEnv = _ref[1];
    return _processFileAndEnv(readFile(jsFileName), [fromErlIndex(localEnv)]);
  };
  loadWithEnv = function(erlArgs) {
    var jsFileName, localEnv, _ref;
    _ref = get_jsFileName_and_localEnv(erlArgs), jsFileName = _ref[0], localEnv = _ref[1];
    return _processFileAndEnv(readFile(jsFileName), [fromErlIndex(localEnv), environment]);
  };
  _process_ = function(jsString) {
    return _process([environment])(jsString);
  };
  _processFileAndEnv = function(file, envStack) {
    return _process(envStack)(file);
  };
  _read = function(erlArgs) {
    var jsFileName;
    jsFileName = get_jsFileName_and_localEnv(erlArgs)[0];
    return readFile(jsFileName);
  };
  readFile = function(jsFileName) {
    return require('fs').readFileSync(jsFileName).toString();
  };
  setCoreFnsOnErlValues_bang_ = function(env, fns) {
    var fn, fnName, _results;
    _results = [];
    for (fnName in fns) {
      if (!__hasProp.call(fns, fnName)) continue;
      fn = fns[fnName];
      _results.push(env[fnName] = createErlCorePureFunction(fn));
    }
    return _results;
  };
  stripQuotes = function(jsString) {
    return jsString.slice(1, -1);
  };
  functionsOnErlValues = {
    'load': load,
    'load-with-env': loadWithEnv,
    'load-with-bare-env': loadWithBareEnv
  };
  setCoreFnsOnErlValues_bang_(environment, functionsOnErlValues);
  return environment;
};

module.exports = getEnvironment;
