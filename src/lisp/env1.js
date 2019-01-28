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
var empty_question_               = require('./linked-list').empty_question_;
var equal_question_               = require('./linked-list').equal_question_;
var extractJsValue                = require('./type-utilities').extractJsValue;
var fromArray                     = require('./linked-list').fromArray;
var interpret                     = require('./interpret');
var last                          = require('./linked-list').last;
var erlAtom_question_             = require('./type-utilities').erlAtom_question_;
var erlCorePureFunction_question_ = require('./type-utilities').erlCorePureFunction_question_;
var erlBoolean_question_          = require('./type-utilities').erlBoolean_question_;
var erlFalse                      = require('./type-utilities').erlFalse;
var erlFalse_question_            = require('./type-utilities').erlFalse_question_;
var erlIgnore                     = require('./type-utilities').erlIgnore;
var erlIndex_question_            = require('./type-utilities').erlIndex_question_;
var erlList_question_             = require('./type-utilities').erlList_question_;
var erlMacro_question_            = require('./type-utilities').erlMacro_question_;
var erlNil                        = require('./type-utilities').erlNil;
var erlNil_question_              = require('./type-utilities').erlNil_question_;
var erlNumber_question_           = require('./type-utilities').erlNumber_question_;
var erlString_question_           = require('./type-utilities').erlString_question_;
var erlSymbol_question_           = require('./type-utilities').erlSymbol_question_;
var erlTrue                       = require('./type-utilities').erlTrue;
var erlTrue_question_             = require('./type-utilities').erlTrue_question_;
var erlUserPureFunction_question_ = require('./type-utilities').erlUserPureFunction_question_;
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

var areEqual = function(erlArgs) {
  var partialArray = toPartialArray(2, erlArgs);
  var erlValue0 = partialArray[0];
  var erlValue1 = partialArray[1];
  var _areEqual = function(erlValue0, erlValue1) {
    if (erlList_question_(erlValue0) && erlList_question_(erlValue1)) {
      return equal_question_(erlValue0, erlValue1, _areEqual);
    } else if (erlIndex_question_(erlValue0) && erlIndex_question_(erlValue1)) {
      var jsIndex0 = erlValue0.jsValue;
      var jsIndex1 = erlValue1.jsValue;
      return (_areEqual(keys(jsIndex0), keys(jsIndex1)))
        && (_areEqual(vals(jsIndex0), vals(jsIndex1)));
    } else {
      return erlValue0.jsValue === erlValue1.jsValue;
    }
  };
  return createErlBoolean(_areEqual(erlValue0, erlValue1));
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
  while (!empty_question_(args)) {
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
  if (erlList_question_(arg)) {
    return car(arg);
  } else {
    return erlNil;
  }
};

var _cdr = function(erlArgs) {
  var arg = car(erlArgs);
  if (erlList_question_(arg)) {
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
  if (!erlList_question_(erlList)) {
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

var _empty_question_ = function(erlArgs) {
  if (empty_question_(erlArgs)) {
    return erlFalse;
  } else {
    if (empty_question_(car(erlArgs))) {
      return erlTrue;
    } else {
      return erlFalse;
    }
  }
};

var first = function(erlArgs) {
  return car(car(erlArgs));
};

var function_question_ = function(jsList) {
  var erlValue = jsList.value;
  return createErlBoolean(erlCorePureFunction_question_(erlValue) || erlUserPureFunction_question_(erlValue));
};

var getEnvironment = function(config) {
  var environment = config.environment;
  setCoreFnsOnErlValues_bang_(environment, functionsOnErlValues);
  return environment;
};

var ignore_bang_ = function(erlArgs) {
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
  if (erlList_question_(arg)) {
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
  if (erlNil_question_(erlVal) || erlFalse_question_(erlVal)) {
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
  if (erlList_question_(arg)) {
    return cdr(arg);
  } else {
    return erlNil;
  }
};

var _reverse = function(erlArgs) {
  var arg = car(erlArgs);
  if (erlList_question_(arg)) {
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

var setCoreFnsOnErlValues_bang_ = function(env, fns) {
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
  if (erlString_question_(erlValue)) {
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

var time_hyphen_ms = function() {
  return createErlNumber(new Date().getTime());
};

var withMeta = function(erlArgs) {
  var partialArray = toPartialArray(2, erlArgs);
  var erlVal = partialArray[0];
  var erlMeta = partialArray[1];
  if (erlAtom_question_(erlVal)) {
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
  erlAtom_question_,
  erlBoolean_question_,
  erlCorePureFunction_question_,
  erlFalse_question_,
  erlList_question_,
  erlMacro_question_,
  erlNil_question_,
  erlNumber_question_,
  erlSymbol_question_,
  erlString_question_,
  erlUserPureFunction_question_,
  erlTrue_question_
].map(createPredicate);

var atom_question_    = predicates[0];
var boolean_question_ = predicates[1];
var coreFn_question_  = predicates[2];
var false_question_   = predicates[3];
var list_question_    = predicates[4];
var macro_question_   = predicates[5];
var nil_question_     = predicates[6];
var number_question_  = predicates[7];
var symbol_question_  = predicates[8];
var string_question_  = predicates[9];
var userFn_question_  = predicates[10];
var true_question_    = predicates[11];

var functionsOnErlValues = {
  '=': areEqual,
  'append': append,
  'assoc': assoc,
  'atom': atom,
  'atom?': atom_question_,
  'boolean?': boolean_question_,
  'car': _car,
  'cdr': _cdr,
  'cons': cons,
  'concat': _concat,
  'core-fn?': coreFn_question_,
  'count': count,
  'deref': deref,
  'drop': _drop,
  'empty?': _empty_question_,
  'first': _car,
  'false?': false_question_,
  'function?': function_question_,
  'ignore!': ignore_bang_,
  'ignoreIfTrue': ignoreIfTrue,
  'ignoreUnlessTrue': ignoreUnlessTrue,
  'last': _last,
  'list': list,
  'list?': list_question_,
  'macro?': macro_question_,
  'meta': meta,
  'nil?': nil_question_,
  'not': _not,
  'nth': nth,
  'number?': number_question_,
  'parse': _interpret,
  'prepend': prepend,
  'pretty-string': prettyString,
  'rest': _cdr,
  'reverse': _reverse,
  'string': string,
  'string?': string_question_,
  'symbol': symbol,
  'symbol?': symbol_question_,
  'take': _take,
  'throw': _throw,
  'true?': true_question_,
  'typeof': typeOf,
  'user-fn?': userFn_question_,
  'read': read,
  'reset!': reset,
  'set!': set,
  'slurp': slurp,
  'time-ms': time_hyphen_ms,
  'with-meta': withMeta,
  'write': write
};

module.exports = getEnvironment;
