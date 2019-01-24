var car, createErlCorePureFunction, createErlList, createErlSymbol, erlList_question_, extractJsValue, fromArray, fromErlIndex, getEnvironment, setCoreFnsOnErlValues_bang_, stripQuotes, toArray, toPartialArray, tokenizeAndParse, _process, _process_,
  __hasProp = {}.hasOwnProperty;

car = require('./linked-list').car;

createErlCorePureFunction = require('./type-utilities').createErlCorePureFunction;

createErlList = require('./type-utilities').createErlList;

createErlSymbol = require('./type-utilities').createErlSymbol;

extractJsValue = require('./type-utilities').extractJsValue;

fromArray = require('./linked-list').fromArray;

fromErlIndex = require('./index-utilities').fromErlIndex;

erlList_question_ = require('./type-utilities').erlList_question_;

_process = require('./_process');

toArray = require('./linked-list').toArray;

tokenizeAndParse = require('./tokenizeAndParse');

toPartialArray = require('./linked-list').toPartialArray;

getEnvironment = function(config) {
  var apply, call, environment, evalString, evalWithBareEnv, evalWithEnv, functionsOnErlValues, parse, _eval, _evalListHead;
  environment = config.environment;
  apply = function(erlArgs) {
    var erlArgList, erlFn, _ref;
    _ref = toArray(erlArgs), erlFn = _ref[0], erlArgList = _ref[1];
    return _eval(createErlList(erlFn, erlArgList));
  };
  call = function(erlArgs) {
    return _eval(erlArgs);
  };
  _eval = function(erlVal) {
    return _process_([environment])(erlVal);
  };
  _evalListHead = function(erlArgs) {
    return _eval(car(erlArgs));
  };
  evalString = function(erlArgs) {
    return (function(__i) {
      return _eval(tokenizeAndParse(stripQuotes(extractJsValue(car(__i)))));
    })(erlArgs);
  };
  evalWithBareEnv = function(erlArgs) {
    var expr, localEnv, _ref;
    _ref = toPartialArray(2, erlArgs), expr = _ref[0], localEnv = _ref[1];
    return _process_([fromErlIndex(localEnv)])(expr);
  };
  evalWithEnv = function(erlArgs) {
    var expr, localEnv, _ref;
    _ref = toPartialArray(2, erlArgs), expr = _ref[0], localEnv = _ref[1];
    return _process_([fromErlIndex(localEnv), environment])(expr);
  };
  parse = function(erlArgs) {
    return tokenizeAndParse(stripQuotes(extractJsValue(car(erlArgs))));
  };
  functionsOnErlValues = {
    parse: parse
  };
  setCoreFnsOnErlValues_bang_(environment, functionsOnErlValues);
  return environment;
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

_process_ = _process(function(erlVal) {
  return erlVal;
});

module.exports = getEnvironment;
