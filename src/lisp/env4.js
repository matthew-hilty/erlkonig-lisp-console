import { createErlCorePureFunction } from './type-utilities';
import { erlNil } from './type-utilities';
import { extractJsValue } from './type-utilities';
import { fromErlIndex } from './index-utilities';
import { _process } from './_process';
import { toPartialArray } from './linked-list';

const __hasProp = {}.hasOwnProperty;

const getEnvironment = function(config) {
  const environment = config.environment;
  const functionsOnErlValues = {
    'load': load,
    'load-with-env': loadWithEnv,
    'load-with-bare-env': loadWithBareEnv
  };
  setCoreFnsOnErlValues(environment, functionsOnErlValues);
  return environment;
};

const get_jsFileName_and_localEnv = function(erlArgs) {
  const partialArray = toPartialArray(2, erlArgs);
  const erlFileName = partialArray[0];
  const localEnv = partialArray[1];
  const jsFileName = stripQuotes(extractJsValue(erlFileName));
  return [jsFileName, localEnv];
};

const hasProcess = function() {
  return typeof process !== 'undefined';
}

const hasProcessWebpackShim = function() {
  return(process.title === 'browser' && process.browser);
}

const isNode = function() {
  return hasProcess() && !hasProcessWebpackShim();
}

const load = function(erlArgs) {
  if (isNode()) {
    return _process_(_read(erlArgs));
  } else {
    return erlNil;
  }
};

const loadWithBareEnv = function(erlArgs) {
  if (isNode()) {
    const temp = get_jsFileName_and_localEnv(erlArgs);
    const jsFileName = temp[0];
    const localEnv = temp[1];
    return _processFileAndEnv(
      readFile(jsFileName),
      [fromErlIndex(localEnv)]);
  } else {
    return erlNil;
  }
};

const loadWithEnv = function(erlArgs) {
  if (isNode()) {
    const temp = get_jsFileName_and_localEnv(erlArgs);
    const jsFileName = temp[0];
    const localEnv = temp[1];
    return _processFileAndEnv(
      readFile(jsFileName),
      [fromErlIndex(localEnv), environment]);
  } else {
    return erlNil;
  }
};

const _process_ = function(jsString) {
  return _process([environment])(jsString);
};

const _processFileAndEnv = function(file, envStack) {
  return _process(envStack)(file);
};

const _read = function(erlArgs) {
  const jsFileName = get_jsFileName_and_localEnv(erlArgs)[0];
  return readFile(jsFileName);
};

const readFile = function(jsFileName) {
  //return require('fs').readFileSync(jsFileName).toString();
  return null;
};

const setCoreFnsOnErlValues = function(env, fns) {
  const _results = [];
  for (let fnName in fns) {
    if (!__hasProp.call(fns, fnName)) continue;
    const fn = fns[fnName];
    _results.push(env[fnName] = createErlCorePureFunction(fn));
  }
  return _results;
};

const stripQuotes = function(jsString) {
  return jsString.slice(1, -1);
};

export { getEnvironment };
