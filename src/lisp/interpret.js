var circumpendQuotes     = require('./js-utilities').circumpendQuotes;
var createErlString      = require('./type-utilities').createErlString;
var fromArray            = require('./linked-list').fromArray;
var getLispEnvironment   = require('./getLispEnvironment');
var _process             = require('./_process');
var _serialize           = require('./serialize');
var standardFnsAndMacros = require('./standard-fns-and-macros');
var tokenizeAndParse     = require('./tokenizeAndParse');

var  __hasProp = {}.hasOwnProperty;

var _createErlString = function(jsString) {
  return createErlString(circumpendQuotes(jsString));
};

var encapsulate = function(type) {
  return function(erlValue) {
    return {
      effect: {
        type: type
      },
      value: erlValue
    };
  };
};

var error = function(errorMessage) {
  return [encapsulate('error')("repl error: (" + errorMessage + ")")];
};

var flattenIfNecessary = function(effects) {
  var value;
  var result = effects;
  while (result.length === 1 && Array.isArray(value = result[0].value)) {
    result = flattenIfNecessary(value);
  }
  return result;
};

var _interpret = function(envs, jsString) {
  try {
    return serialize(
      flattenIfNecessary(
        _process(tokenizeAndParse)(envs)(jsString)));
  } catch (_error) {
    return error(_error);
  }
};

var interpret = function(jsString, userJsArray) {
  if (userJsArray != null) {
    var userEnv = {
      '*ARGV*': fromArray(userJsArray.map(_createErlString))
    };
    return _interpret([userEnv, environment], jsString);
  } else {
    return _interpret([environment], jsString);
  }
};

var serialize = function(results) {
  return results.map(function(result) {
    var _result = {};
    for (var key in result) {
      if (!__hasProp.call(result, key)) continue;
      var value = result[key];
      if (key === 'effect') {
        _result[key] = value;
      } else {
        _result[key] = _serialize(value);
      }
    }
    return _result;
  });
};

var environment = getLispEnvironment({
  display: encapsulate('display')
});

interpret(standardFnsAndMacros);

module.exports = interpret;
