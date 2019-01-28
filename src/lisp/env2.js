var createErlCoreEffectfulFunction = require('./type-utilities').createErlCoreEffectfulFunction;
var createErlList                  = require('./type-utilities').createErlList;
var createErlString                = require('./type-utilities').createErlString;
var serialize                      = require('./serialize');
var toArray                        = require('./linked-list').toArray;

var __hasProp = {}.hasOwnProperty;

var getEnvironment = function(config) {
  var display = config.display;
  var environment = config.environment;
  setCoreEffectfulFnsOnErlValues(display)(environment, displayEffectsOnErlValues);
  return environment;
};

var hasProcess = function() {
  return typeof process !== 'undefined';
}

var hasProcessWebpackShim = function() {
  return(process.title === 'browser' && process.browser);
}

var isNode = function() {
  return hasProcess() && !hasProcessWebpackShim();
}

var _prStr = function(erlArgs, printReadably_question_) {
  return ((toArray(erlArgs)).map(function(erlArg) {
    return serialize(erlArg, printReadably_question_);
  })).join('');
};

var _quit_ = function() {
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

var setCoreEffectfulFnsOnErlValues = function(represent) {
  return function(env, fns) {
    var _results = [];
    for (var fnName in fns) {
      if (!__hasProp.call(fns, fnName)) continue;
      var fn = fns[fnName];
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
