import { circumpendQuotes }   from './js-utilities';
import { createErlString }    from './type-utilities';
import { fromArray }          from './linked-list';
import { getLispEnvironment } from './getLispEnvironment';
import { _process }           from './_process';
import { serialize }          from './serialize';
import standardFnsAndMacros   from './standard-fns-and-macros.lisp';
import { tokenizeAndParse }   from './tokenizeAndParse';

var __hasProp = {}.hasOwnProperty;

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
    return _serialize(
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

var _serialize = function(results) {
  return results.map(function(result) {
    var _result = {};
    for (var key in result) {
      if (!__hasProp.call(result, key)) continue;
      var value = result[key];
      if (key === 'effect') {
        _result[key] = value;
      } else {
        _result[key] = serialize(value);
      }
    }
    return _result;
  });
};

var environment = getLispEnvironment({
  display: encapsulate('display')
});

interpret(standardFnsAndMacros);

export { interpret };
