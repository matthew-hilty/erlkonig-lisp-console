var createErlCoreEffectfulFunction, createErlList, createErlString, displayEffectsOnErlValues, getEnvironment, isNode, hasProcess, hasProcessWebpackShim, serialize, setCoreEffectfulFnsOnErlValues_bang_, toArray, _prStr, _quit_,
  __hasProp = {}.hasOwnProperty;

createErlCoreEffectfulFunction = require('./type-utilities').createErlCoreEffectfulFunction;

createErlList = require('./type-utilities').createErlList;

createErlString = require('./type-utilities').createErlString;

serialize = require('./serialize');

toArray = require('./linked-list').toArray;

getEnvironment = function(config) {
  var display, environment;
  display = config.display, environment = config.environment;
  setCoreEffectfulFnsOnErlValues_bang_(display)(environment, displayEffectsOnErlValues);
  return environment;
};

hasProcess = function() {
  return typeof process !== 'undefined';
}

hasProcessWebpackShim = function() {
  return(process.title === 'browser' && process.browser);
}

isNode = function() {
  return hasProcess() && !hasProcessWebpackShim();
}

_prStr = function(erlArgs, printReadably_question_) {
  return ((toArray(erlArgs)).map(function(erlArg) {
    return serialize(erlArg, printReadably_question_);
  })).join('');
};

_quit_ = function() {
  if (isNode()) {
    return process.exit(0);
  } else {
    return _prStr(createErlList(createErlString("\"'Erlkönig Lisp Console' is not permitted to close this window.\"")), false);
  }
};

setCoreEffectfulFnsOnErlValues_bang_ = function(represent) {
  return function(env, fns) {
    var fn, fnName, _results;
    _results = [];
    for (fnName in fns) {
      if (!__hasProp.call(fns, fnName)) continue;
      fn = fns[fnName];
      _results.push(env[fnName] = createErlCoreEffectfulFunction(function(erlArgs) {
        return represent(fn(erlArgs));
      }));
    }
    return _results;
  };
};

displayEffectsOnErlValues = {
  'print': function(erlArgs) {
    return _prStr(erlArgs, false);
  },
  'pretty-print': function(erlArgs) {
    return _prStr(erlArgs, true);
  },
  '-quit-': _quit_,
};

module.exports = getEnvironment;
