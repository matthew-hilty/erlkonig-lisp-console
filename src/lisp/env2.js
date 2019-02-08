import { createErlCoreEffectfulFunction } from './type-utilities';
import { createErlList }                  from './type-utilities';
import { createErlString }                from './type-utilities';
import { serialize }                      from './serialize';
import { toArray }                        from './linked-list';

let __hasProp = {}.hasOwnProperty;

let getEnvironment = function(config) {
  let display = config.display;
  let environment = config.environment;
  setCoreEffectfulFnsOnErlValues(display)(environment, displayEffectsOnErlValues);
  return environment;
};

let hasProcess = function() {
  return typeof process !== 'undefined';
}

let hasProcessWebpackShim = function() {
  return(process.title === 'browser' && process.browser);
}

let isNode = function() {
  return hasProcess() && !hasProcessWebpackShim();
}

let _prStr = function(erlArgs, shouldBeReadable) {
  return ((toArray(erlArgs)).map(function(erlArg) {
    return serialize(erlArg, shouldBeReadable);
  })).join('');
};

let _quit_ = function() {
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

let setCoreEffectfulFnsOnErlValues = function(represent) {
  return function(env, fns) {
    let _results = [];
    for (let fnName in fns) {
      if (!__hasProp.call(fns, fnName)) continue;
      let fn = fns[fnName];
      env[fnName] = createErlCoreEffectfulFunction(function(erlArgs) {
        return represent(fn(erlArgs));
      });
      _results.push(env[fnName]);
    }
    return _results;
  };
};

let displayEffectsOnErlValues = {
  'print': function(erlArgs) {
    return _prStr(erlArgs, false);
  },
  'pretty-print': function(erlArgs) {
    return _prStr(erlArgs, true);
  },
  '-quit-': _quit_,
};

export { getEnvironment };
