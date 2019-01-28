var car                           = require('./linked-list').car;
var cdr                           = require('./linked-list').cdr;
var circumpendQuotes              = require('./js-utilities').circumpendQuotes;
var concat                        = require('./linked-list').concat;
var createErlAtom                 = require('./type-utilities').createErlAtom;
var createErlBoolean              = require('./type-utilities').createErlBoolean;
var createErlCorePureFunction     = require('./type-utilities').createErlCorePureFunction;
var createErlIndex                = require('./type-utilities').createErlIndex;
var createErlList                 = require('./type-utilities').createErlList;
var createErlNumber               = require('./type-utilities').createErlNumber;
var createErlString               = require('./type-utilities').createErlString;
var createErlSymbol               = require('./type-utilities').createErlSymbol;
var drop                          = require('./linked-list').drop;
var isEmpty               = require('./linked-list').isEmpty;
var areEqual               = require('./linked-list').areEqual;
var extractJsValue                = require('./type-utilities').extractJsValue;
var fromArray                     = require('./linked-list').fromArray;
var interpret                     = require('./interpret');
var last                          = require('./linked-list').last;
var isErlAtom             = require('./type-utilities').isErlAtom;
var isErlCorePureFunction = require('./type-utilities').isErlCorePureFunction;
var isErlBoolean          = require('./type-utilities').isErlBoolean;
var erlFalse                      = require('./type-utilities').erlFalse;
var isErlFalse            = require('./type-utilities').isErlFalse;
var erlIgnore                     = require('./type-utilities').erlIgnore;
var isErlIndex            = require('./type-utilities').isErlIndex;
var isErlList             = require('./type-utilities').isErlList;
var isErlMacro            = require('./type-utilities').isErlMacro;
var erlNil                        = require('./type-utilities').erlNil;
var isErlNil              = require('./type-utilities').isErlNil;
var isErlNumber           = require('./type-utilities').isErlNumber;
var isErlString           = require('./type-utilities').isErlString;
var isErlSymbol           = require('./type-utilities').isErlSymbol;
var erlTrue                       = require('./type-utilities').erlTrue;
var isErlTrue             = require('./type-utilities').isErlTrue;
var isErlUserPureFunction = require('./type-utilities').isErlUserPureFunction;
var next                          = require('./linked-list').next;
var recurse                       = require('./linked-list').recurse;
var reduce                        = require('./linked-list').reduce;
var reverse                       = require('./linked-list').reverse;
var serialize                     = require('./serialize');
var take                          = require('./linked-list').take;
var toArray                       = require('./linked-list').toArray;
var toPartialArray                = require('./linked-list').toPartialArray;

var __slice   = [].slice;
var __hasProp = {}.hasOwnProperty;

var append = function(erlArgs) {
  var erlArgsArray = toArray(erlArgs);
  var erlList = erlArgsArray[0];
  var erlValues = 2 <= erlArgsArray.length ? __slice.call(erlArgsArray, 1) : [];
  return concat(erlList, fromArray(erlValues));
};

var _areEqual = function(erlArgs) {
  var partialArray = toPartialArray(2, erlArgs);
  var erlValue0 = partialArray[0];
  var erlValue1 = partialArray[1];
  var __areEqual = function(erlValue0, erlValue1) {
    if (isErlList(erlValue0) && isErlList(erlValue1)) {
      return areEqual(erlValue0, erlValue1, __areEqual);
    } else if (isErlIndex(erlValue0) && isErlIndex(erlValue1)) {
      var jsIndex0 = erlValue0.jsValue;
      var jsIndex1 = erlValue1.jsValue;
      return (__areEqual(keys(jsIndex0), keys(jsIndex1)))
        && (__areEqual(vals(jsIndex0), vals(jsIndex1)));
    } else {
      return erlValue0.jsValue === erlValue1.jsValue;
    }
  };
  return createErlBoolean(__areEqual(erlValue0, erlValue1));
};

var assoc = function(erlArgs) {
  var args;
  var jsIndex = extractJsValue(car(erlArgs));
  args = cdr(erlArgs);
  var copy = {};
  for (var key in jsIndex) {
    if (!__hasProp.call(jsIndex, key)) {
      continue;
    }
    var value = jsIndex[key];
    copy[key] = value;
  }
  while (!isEmpty(args)) {
    var k = car(args);
    var v = next(args);
    args = recurse(recurse(args));
    copy[extractJsValue(k)] = v;
  }
  return createErlIndex(copy);
};

var atom = function(erlArgs) {
  return createErlAtom(car(erlArgs));
};

var _car = function(erlArgs) {
  var arg = car(erlArgs);
  if (isErlList(arg)) {
    return car(arg);
  } else {
    return erlNil;
  }
};

var _cdr = function(erlArgs) {
  var arg = car(erlArgs);
  if (isErlList(arg)) {
    return cdr(arg);
  } else {
    return erlNil;
  }
};

var _concat = function(erlArgs) {
  var erlLists = toArray(erlArgs);
  return concat.apply(null, erlLists);
};

var cons = function(erlArgs) {
  return createErlList(car(erlArgs), next(erlArgs));
};

var count = function(erlArgs) {
  var erlList = car(erlArgs);
  if (!isErlList(erlList)) {
    return erlNil;
  }
  var _reduce = function(sum, value) {
    return sum + 1;
  };
  return createErlNumber(reduce(0, _reduce, car(erlArgs)));
};

var createPredicate = function(pred) {
  return function(jsList) {
    var erlValue = jsList.value;
    return createErlBoolean(pred(erlValue));
  };
};

var deref = function(erlArgs) {
  return (car(erlArgs)).erlValue;
};

var _drop = function(erlArgs) {
  var partialArray = toPartialArray(2, erlArgs);
  var erlNumber = partialArray[0];
  var erlList = partialArray[1];
  return drop(extractJsValue(erlNumber), erlList);
};

var _isEmpty = function(erlArgs) {
  if (isEmpty(erlArgs)) {
    return erlFalse;
  } else {
    if (isEmpty(car(erlArgs))) {
      return erlTrue;
    } else {
      return erlFalse;
    }
  }
};

var first = function(erlArgs) {
  return car(car(erlArgs));
};

var isFunction = function(jsList) {
  var erlValue = jsList.value;
  return createErlBoolean(isErlCorePureFunction(erlValue)
    || isErlUserPureFunction(erlValue));
};

var getEnvironment = function(config) {
  var environment = config.environment;
  setCoreFnsOnErlValues(environment, functionsOnErlValues);
  return environment;
};

var ignore = function(erlArgs) {
  return erlIgnore;
};

var ignoreIfTrue = function(erlArgs) {
  var partialArray = toPartialArray(2, erlArgs);
  var erlBool = partialArray[0];
  var erlValue = partialArray[1];
  if (extractJsValue(erlBool)) {
    return erlIgnore;
  } else {
    return erlValue;
  }
};

var ignoreUnlessTrue = function(erlArgs) {
  var partialArray = toPartialArray(2, erlArgs);
  var erlBool = partialArray[0];
  var erlValue = partialArray[1];
  if (extractJsValue(erlBool)) {
    return erlValue;
  } else {
    return erlIgnore;
  }
};

var _interpret = function(erlArgs) {
  return interpret(stripQuotes(extractJsValue(car(erlArgs))));
};

var _last = function(erlArgs) {
  var arg = car(erlArgs);
  if (isErlList(arg)) {
    return last(arg);
  } else {
    return erlNil;
  }
};

var list = function(erlArgs) {
  return erlArgs;
};

var meta = function(erlArgs) {
  var erlMeta = (car(erlArgs)).meta;
  if (erlMeta != null) {
    return erlMeta;
  } else {
    return erlNil;
  }
};

var _not = function(erlArgs) {
  var erlVal = car(erlArgs);
  if (isErlNil(erlVal) || isErlFalse(erlVal)) {
    return erlTrue;
  } else {
    return erlFalse;
  }
};

var nth = function(erlArgs) {
  var partialArray = toPartialArray(2, erlArgs);
  var erlNumber = partialArray[0];
  var erlList = partialArray[1];
  var target = extractJsValue(erlNumber);
  if (target >= 0) {
    for (var i = 0; i < target; i++) {
      erlList = cdr(erlList);
    }
  } else {
    for (var i = 0; i > target; i--) {
      erlList = cdr(erlList);
    }
  }
  return car(erlList);
};

var prepend = function(erlArgs) {
  var erlArgsArray = toArray(erlArgs);
  var erlList = erlArgsArray[0];
  var erlValues = 2 <= erlArgsArray.length ? __slice.call(erlArgsArray, 1) : [];
  var _reduce = function(list, val) {
    return createErlList(val, list);
  };
  return erlValues.reduce(_reduce, erlList);
};

var _prStr = function(erlArgs, printReadably) {
  return ((toArray(erlArgs)).map(function(erlArg) {
    return serialize(erlArg, printReadably);
  })).join('');
};

var prettyString = function(erlArgs) {
  return createErlString(circumpendQuotes(_prStr(erlArgs, true)));
};

var read = function(jsList) {
  var _read = function(erlArgs) {
    var jsFileName = stripQuotes(extractJsValue(car(erlArgs)));
    return require('fs').readFileSync(jsFileName).toString();
  };
  return createErlString(_read(jsList));
};

var reset = function(erlArgs) {
  var partialArray = toPartialArray(2, erlArgs);
  var atom = partialArray[0];
  var value = partialArray[1];
  atom.erlValue = value;
  return atom;
};

var rest = function(erlArgs) {
  var arg = car(erlArgs);
  if (isErlList(arg)) {
    return cdr(arg);
  } else {
    return erlNil;
  }
};

var _reverse = function(erlArgs) {
  var arg = car(erlArgs);
  if (isErlList(arg)) {
    return reverse(arg);
  } else {
    return erlNil;
  }
};

var set = function(erlArgs) {
  var partialArray = toPartialArray(3, erlArgs);
  var index = partialArray[0];
  var key = partialArray[1];
  var val = partialArray[2];
  (extractJsValue(index))[extractJsValue(key)] = val;
  return index;
};

var setCoreFnsOnErlValues = function(env, fns) {
  var _results = [];
  for (var fnName in fns) {
    if (!__hasProp.call(fns, fnName)) continue;
    var fn = fns[fnName];
    _results.push(env[fnName] = createErlCorePureFunction(fn));
  }
  return _results;
};

var slurp = function(erlArgs) {
  var jsFileName = stripQuotes(extractJsValue(car(erlArgs)));
  var _fs_ = require('fs');
  return createErlString(circumpendQuotes(_fs_.readFileSync(jsFileName).toString()));
};

var string = function(erlArgs) {
  return createErlString(circumpendQuotes(_prStr(erlArgs, false)));
};

var stripQuotes = function(jsString) {
  return jsString.slice(1, -1);
};

var symbol = function(erlArgs) {
  var erlValue = car(erlArgs);
  if (isErlString(erlValue)) {
    var jsStr = extractJsValue(erlValue);
    return createErlSymbol(jsStr.slice(1, -1));
  } else {
    return erlNil;
  }
};

var _take = function(erlArgs) {
  var partialArray = toPartialArray(2, erlArgs);
  var erlNumber = partialArray[0];
  var erlList = partialArray[1];
  return take(extractJsValue(erlNumber), erlList);
};

var typeOf = function(erlArgs) {
  var erlValue = car(erlArgs);
  return createErlString(circumpendQuotes(erlValue.type));
};

var _throw = function(erlArgs) {
  throw car(erlArgs);
};

var timeMs = function() {
  return createErlNumber(new Date().getTime());
};

var withMeta = function(erlArgs) {
  var partialArray = toPartialArray(2, erlArgs);
  var erlVal = partialArray[0];
  var erlMeta = partialArray[1];
  if (isErlAtom(erlVal)) {
    var erlValue = erlVal.erlValue;
    var type = erlVal.type;
    return {
      erlValue: erlValue,
      type: type,
      meta: erlMeta
    };
  } else {
    var jsValue = erlVal.jsValue;
    var type = erlVal.type;
    return {
      jsValue: jsValue,
      type: type,
      meta: erlMeta
    };
  }
};

var write = function(erlArgs) {
  return createErlString(serialize(car(erlArgs)));
};

var predicates = [
  isErlAtom,
  isErlBoolean,
  isErlCorePureFunction,
  isErlFalse,
  isErlList,
  isErlMacro,
  isErlNil,
  isErlNumber,
  isErlSymbol,
  isErlString,
  isErlUserPureFunction,
  isErlTrue
].map(createPredicate);

var isAtom    = predicates[0];
var isBoolean = predicates[1];
var isCoreFn  = predicates[2];
var isFalse   = predicates[3];
var isList    = predicates[4];
var isMacro   = predicates[5];
var isNil     = predicates[6];
var isNumber  = predicates[7];
var isSymbol  = predicates[8];
var isString  = predicates[9];
var isUserFn  = predicates[10];
var isTrue    = predicates[11];

var functionsOnErlValues = {
  '=': _areEqual,
  'append': append,
  'assoc': assoc,
  'atom': atom,
  'atom?': isAtom,
  'boolean?': isBoolean,
  'car': _car,
  'cdr': _cdr,
  'cons': cons,
  'concat': _concat,
  'core-fn?': isCoreFn,
  'count': count,
  'deref': deref,
  'drop': _drop,
  'empty?': _isEmpty,
  'first': _car,
  'false?': isFalse,
  'function?': isFunction,
  'ignore!': ignore,
  'ignoreIfTrue': ignoreIfTrue,
  'ignoreUnlessTrue': ignoreUnlessTrue,
  'last': _last,
  'list': list,
  'list?': isList,
  'macro?': isMacro,
  'meta': meta,
  'nil?': isNil,
  'not': _not,
  'nth': nth,
  'number?': isNumber,
  'parse': _interpret,
  'prepend': prepend,
  'pretty-string': prettyString,
  'rest': _cdr,
  'reverse': _reverse,
  'string': string,
  'string?': isString,
  'symbol': symbol,
  'symbol?': isSymbol,
  'take': _take,
  'throw': _throw,
  'true?': isTrue,
  'typeof': typeOf,
  'user-fn?': isUserFn,
  'read': read,
  'reset!': reset,
  'set!': set,
  'slurp': slurp,
  'time-ms': timeMs,
  'with-meta': withMeta,
  'write': write
};

module.exports = getEnvironment;
