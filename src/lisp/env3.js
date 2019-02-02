import { car } from './linked-list';
import { createErlCorePureFunction } from './type-utilities';
import { createErlList } from './type-utilities';
import { createErlSymbol } from './type-utilities';
import { extractJsValue } from './type-utilities';
import { fromArray } from './linked-list';
import { fromErlIndex } from './index-utilities';
import { isErlList } from './type-utilities';
import { _process } from './_process';
import { toArray } from './linked-list';
import { tokenizeAndParse } from './tokenizeAndParse';
import { toPartialArray } from './linked-list';

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

export { getEnvironment };
