import { circumpendQuotes }   from './js-utilities';
import { createErlString }    from './type-utilities';
import { fromArray }          from './linked-list';
import { getLispEnvironment } from './getLispEnvironment';
import { _process }           from './_process';
import { serialize }          from './serialize';
import standardFnsAndMacros   from './standard-fns-and-macros.lisp';
import { tokenizeAndParse }   from './tokenizeAndParse';

const __hasProp = {}.hasOwnProperty;

const _createErlString = function(jsString) {
  return createErlString(circumpendQuotes(jsString));
};

const encapsulate = function(type) {
  return function(erlValue) {
    return {
      effect: {
        type: type
      },
      value: erlValue
    };
  };
};

const error = function(errorMessage) {
  return [encapsulate('error')("repl error: (" + errorMessage + ")")];
};

const flattenIfNecessary = function(effects) {
  let value;
  let result = effects;
  while (result.length === 1 && Array.isArray(value = result[0].value)) {
    result = flattenIfNecessary(value);
  }
  return result;
};

const _interpret = function(envs, jsString) {
  try {
    return _serialize(
      flattenIfNecessary(
        _process(tokenizeAndParse)(envs)(jsString)));
  } catch (_error) {
    return error(_error);
  }
};

const interpret = function(jsString, userJsArray) {
  if (userJsArray != null) {
    const userEnv = {
      '*ARGV*': fromArray(userJsArray.map(_createErlString))
    };
    return _interpret([userEnv, environment], jsString);
  } else {
    return _interpret([environment], jsString);
  }
};

const _serialize = function(results) {
  return results.map(function(result) {
    const _result = {};
    for (let key in result) {
      if (!__hasProp.call(result, key)) continue;
      const value = result[key];
      if (key === 'effect') {
        _result[key] = value;
      } else {
        _result[key] = serialize(value);
      }
    }
    return _result;
  });
};

const environment = getLispEnvironment({
  display: encapsulate('display')
});

interpret(standardFnsAndMacros);

export { interpret };
