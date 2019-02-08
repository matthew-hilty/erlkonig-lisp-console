import { createErlCoreEffectfulFunction } from './type-utilities';
import { createErlList }                  from './type-utilities';
import { createErlString }                from './type-utilities';
import { serialize }                      from './serialize';
import { toArray }                        from './linked-list';

const __hasProp = {}.hasOwnProperty;

const getEnvironment = function(config) {
  const display = config.display;
  const environment = config.environment;
  setCoreEffectfulFnsOnErlValues(display)(environment, displayEffectsOnErlValues);
  return environment;
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

const _prStr = function(erlArgs, shouldBeReadable) {
  return ((toArray(erlArgs)).map(function(erlArg) {
    return serialize(erlArg, shouldBeReadable);
  })).join('');
};

const _quit_ = function() {
  if (isNode()) {
    return process.exit(0);
  } else {
    return _prStr(
      createErlList(
        createErlString(
          "\"'Erlkönig Lisp Console' is not permitted to close this window.\"")),
          false);
  }
};

const setCoreEffectfulFnsOnErlValues = function(represent) {
  return function(env, fns) {
    const _results = [];
    for (let fnName in fns) {
      if (!__hasProp.call(fns, fnName)) continue;
      const fn = fns[fnName];
      env[fnName] = createErlCoreEffectfulFunction(function(erlArgs) {
        return represent(fn(erlArgs));
      });
      _results.push(env[fnName]);
    }
    return _results;
  };
};

const displayEffectsOnErlValues = {
  'print': function(erlArgs) {
    return _prStr(erlArgs, false);
  },
  'pretty-print': function(erlArgs) {
    return _prStr(erlArgs, true);
  },
  '-quit-': _quit_,
};

export { getEnvironment };
