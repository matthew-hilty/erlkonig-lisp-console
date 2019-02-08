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

const __hasProp = {}.hasOwnProperty;

const getEnvironment = function(config) {
  const environment = config.environment;
  const parse = function(erlArgs) {
    return tokenizeAndParse(stripQuotes(extractJsValue(car(erlArgs))));
  };
  const functionsOnErlValues = { parse: parse };
  setCoreFnsOnErlValues(environment, functionsOnErlValues);
  return environment;
};

const _process_ = _process(function(erlVal) {
  return erlVal;
});

const setCoreFnsOnErlValues = function(env, fns) {
  const _results = [];
  for (let fnName in fns) {
    if (!__hasProp.call(fns, fnName)) {
      continue;
    }
    const fn = fns[fnName];
    _results.push(env[fnName] = createErlCorePureFunction(fn));
  }
  return _results;
};

const stripQuotes = function(jsString) {
  return jsString.slice(1, -1);
};

export { getEnvironment };
