var append, areEqual, assoc, atom, atom_question_, boolean_question_, car, cdr, circumpendQuotes, concat, cons, coreFn_question_, count, createErlAtom, createErlBoolean, createErlCorePureFunction, createErlIndex, createErlList, createErlNumber, createErlString, createErlSymbol, createPredicate, deref, drop, empty_question_, equal_question_, erlAtom_question_, erlBoolean_question_, erlCorePureFunction_question_, erlFalse, erlFalse_question_, erlIgnore, erlIndex_question_, erlList_question_, erlMacro_question_, erlNil, erlNil_question_, erlNumber_question_, erlString_question_, erlSymbol_question_, erlTrue, erlTrue_question_, erlUserPureFunction_question_, extractJsValue, false_question_, first, fromArray, function_question_, functionsOnErlValues, getEnvironment, hasProcess, hasProcessWebpackShim, ignoreIfTrue, ignoreUnlessTrue, ignore_bang_, interpret, isNode, last, list, list_question_, macro_question_, meta, next, nil_question_, nth, number_question_, prepend, prettyString, read, recurse, reduce, reset, rest, reverse, serialize, set, setCoreFnsOnErlValues_bang_, slurp, string, string_question_, stripQuotes, symbol, symbol_question_, take, time_hyphen_ms, toArray, toPartialArray, true_question_, typeOf, userFn_question_, withMeta, write, _car, _cdr, _concat, _drop, _empty_question_, _interpret, _last, _not, _prStr, _quit_, _ref, _reverse, _take, _throw,
  __slice = [].slice,
  __hasProp = {}.hasOwnProperty;

car = require('./linked-list').car;

cdr = require('./linked-list').cdr;

circumpendQuotes = require('./js-utilities').circumpendQuotes;

concat = require('./linked-list').concat;

createErlAtom = require('./type-utilities').createErlAtom;

createErlBoolean = require('./type-utilities').createErlBoolean;

createErlCorePureFunction = require('./type-utilities').createErlCorePureFunction;

createErlIndex = require('./type-utilities').createErlIndex;

createErlList = require('./type-utilities').createErlList;

createErlNumber = require('./type-utilities').createErlNumber;

createErlString = require('./type-utilities').createErlString;

createErlSymbol = require('./type-utilities').createErlSymbol;

drop = require('./linked-list').drop;

empty_question_ = require('./linked-list').empty_question_;

equal_question_ = require('./linked-list').equal_question_;

extractJsValue = require('./type-utilities').extractJsValue;

fromArray = require('./linked-list').fromArray;

interpret = require('./interpret');

last = require('./linked-list').last;

erlAtom_question_ = require('./type-utilities').erlAtom_question_;

erlCorePureFunction_question_ = require('./type-utilities').erlCorePureFunction_question_;

erlBoolean_question_ = require('./type-utilities').erlBoolean_question_;

erlFalse = require('./type-utilities').erlFalse;

erlFalse_question_ = require('./type-utilities').erlFalse_question_;

erlIgnore = require('./type-utilities').erlIgnore;

erlIndex_question_ = require('./type-utilities').erlIndex_question_;

erlList_question_ = require('./type-utilities').erlList_question_;

erlMacro_question_ = require('./type-utilities').erlMacro_question_;

erlNil = require('./type-utilities').erlNil;

erlNil_question_ = require('./type-utilities').erlNil_question_;

erlNumber_question_ = require('./type-utilities').erlNumber_question_;

erlString_question_ = require('./type-utilities').erlString_question_;

erlSymbol_question_ = require('./type-utilities').erlSymbol_question_;

erlTrue = require('./type-utilities').erlTrue;

erlTrue_question_ = require('./type-utilities').erlTrue_question_;

erlUserPureFunction_question_ = require('./type-utilities').erlUserPureFunction_question_;

next = require('./linked-list').next;

recurse = require('./linked-list').recurse;

reduce = require('./linked-list').reduce;

reverse = require('./linked-list').reverse;

serialize = require('./serialize');

take = require('./linked-list').take;

toArray = require('./linked-list').toArray;

toPartialArray = require('./linked-list').toPartialArray;

append = function(erlArgs) {
  var erlList, erlValues, _ref;
  _ref = toArray(erlArgs), erlList = _ref[0], erlValues = 2 <= _ref.length ? __slice.call(_ref, 1) : [];
  return concat(erlList, fromArray(erlValues));
};

areEqual = function(erlArgs) {
  var erlValue0, erlValue1, _areEqual, _ref;
  _ref = toPartialArray(2, erlArgs), erlValue0 = _ref[0], erlValue1 = _ref[1];
  _areEqual = function(erlValue0, erlValue1) {
    var jsIndex0, jsIndex1;
    if (erlList_question_(erlValue0) && erlList_question_(erlValue1)) {
      return equal_question_(erlValue0, erlValue1, _areEqual);
    } else if (erlIndex_question_(erlValue0) && erlIndex_question_(erlValue1)) {
      jsIndex0 = erlValue0.jsValue;
      jsIndex1 = erlValue1.jsValue;
      return (_areEqual(keys(jsIndex0), keys(jsIndex1))) && (_areEqual(vals(jsIndex0), vals(jsIndex1)));
    } else {
      return erlValue0.jsValue === erlValue1.jsValue;
    }
  };
  return createErlBoolean(_areEqual(erlValue0, erlValue1));
};

assoc = function(erlArgs) {
  var args, copy, jsIndex, k, key, v, value;
  jsIndex = extractJsValue(car(erlArgs));
  args = cdr(erlArgs);
  copy = {};
  for (key in jsIndex) {
    if (!__hasProp.call(jsIndex, key)) continue;
    value = jsIndex[key];
    copy[key] = value;
  }
  while (!empty_question_(args)) {
    k = car(args);
    v = next(args);
    args = recurse(recurse(args));
    copy[extractJsValue(k)] = v;
  }
  return createErlIndex(copy);
};

atom = function(erlArgs) {
  return createErlAtom(car(erlArgs));
};

_car = function(erlArgs) {
  var arg;
  arg = car(erlArgs);
  if (erlList_question_(arg)) {
    return car(arg);
  } else {
    return erlNil;
  }
};

_cdr = function(erlArgs) {
  var arg;
  arg = car(erlArgs);
  if (erlList_question_(arg)) {
    return cdr(arg);
  } else {
    return erlNil;
  }
};

_concat = function(erlArgs) {
  var erlLists;
  erlLists = toArray(erlArgs);
  return concat.apply(null, erlLists);
};

cons = function(erlArgs) {
  return createErlList(car(erlArgs), next(erlArgs));
};

count = function(erlArgs) {
  var erlList, _reduce;
  erlList = car(erlArgs);
  if (!erlList_question_(erlList)) {
    return erlNil;
  }
  _reduce = function(sum, value) {
    return sum + 1;
  };
  return createErlNumber(reduce(0, _reduce, car(erlArgs)));
};

createPredicate = function(pred) {
  return function(jsList) {
    var erlValue;
    erlValue = jsList.value;
    return createErlBoolean(pred(erlValue));
  };
};

deref = function(erlArgs) {
  return (car(erlArgs)).erlValue;
};

_drop = function(erlArgs) {
  var erlList, erlNumber, _ref;
  _ref = toPartialArray(2, erlArgs), erlNumber = _ref[0], erlList = _ref[1];
  return drop(extractJsValue(erlNumber), erlList);
};

_empty_question_ = function(erlArgs) {
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

first = function(erlArgs) {
  return car(car(erlArgs));
};

function_question_ = function(jsList) {
  var erlValue;
  erlValue = jsList.value;
  return createErlBoolean(erlCorePureFunction_question_(erlValue) || erlUserPureFunction_question_(erlValue));
};

getEnvironment = function(config) {
  var environment;
  environment = config.environment;
  setCoreFnsOnErlValues_bang_(environment, functionsOnErlValues);
  return environment;
};

hasProcess = function() {
  return typeof process !== 'undefined';
}

hasProcessWebpackShim = function() {
  return(process.title === 'browser' && process.browser);
}

ignore_bang_ = function(erlArgs) {
  return erlIgnore;
};

ignoreIfTrue = function(erlArgs) {
  var erlBool, erlValue, _ref;
  _ref = toPartialArray(2, erlArgs), erlBool = _ref[0], erlValue = _ref[1];
  if (extractJsValue(erlBool)) {
    return erlIgnore;
  } else {
    return erlValue;
  }
};

ignoreUnlessTrue = function(erlArgs) {
  var erlBool, erlValue, _ref;
  _ref = toPartialArray(2, erlArgs), erlBool = _ref[0], erlValue = _ref[1];
  if (extractJsValue(erlBool)) {
    return erlValue;
  } else {
    return erlIgnore;
  }
};

_interpret = function(erlArgs) {
  return interpret(stripQuotes(extractJsValue(car(erlArgs))));
};

isNode = function() {
  return hasProcess() && !hasProcessWebpackShim();
}

_last = function(erlArgs) {
  var arg;
  arg = car(erlArgs);
  if (erlList_question_(arg)) {
    return last(arg);
  } else {
    return erlNil;
  }
};

list = function(erlArgs) {
  return erlArgs;
};

meta = function(erlArgs) {
  var erlMeta;
  erlMeta = (car(erlArgs)).meta;
  if (erlMeta != null) {
    return erlMeta;
  } else {
    return erlNil;
  }
};

_not = function(erlArgs) {
  var erlVal;
  erlVal = car(erlArgs);
  if (erlNil_question_(erlVal) || erlFalse_question_(erlVal)) {
    return erlTrue;
  } else {
    return erlFalse;
  }
};

nth = function(erlArgs) {
  var erlList, erlNumber, i, _i, _ref, _ref1;
  _ref = toPartialArray(2, erlArgs), erlNumber = _ref[0], erlList = _ref[1];
  for (i = _i = 0, _ref1 = extractJsValue(erlNumber); 0 <= _ref1 ? _i < _ref1 : _i > _ref1; i = 0 <= _ref1 ? ++_i : --_i) {
    erlList = cdr(erlList);
  }
  return car(erlList);
};

prepend = function(erlArgs) {
  var erlList, erlValues, _reduce, _ref;
  _ref = toArray(erlArgs), erlList = _ref[0], erlValues = 2 <= _ref.length ? __slice.call(_ref, 1) : [];
  _reduce = function(list, val) {
    return createErlList(val, list);
  };
  return erlValues.reduce(_reduce, erlList);
};

_prStr = function(erlArgs, printReadably_question_) {
  return ((toArray(erlArgs)).map(function(erlArg) {
    return serialize(erlArg, printReadably_question_);
  })).join('');
};

prettyString = function(erlArgs) {
  return createErlString(circumpendQuotes(_prStr(erlArgs, true)));
};

_quit_ = function() {
  if (isNode()) {
    return process.exit(0);
  } else {
  alert("The 'Erlkönig Lisp Console' program is not permitted to close this window.");
  }
};

read = function(jsList) {
  var _read;
  _read = function(erlArgs) {
    var jsFileName;
    jsFileName = stripQuotes(extractJsValue(car(erlArgs)));
    return require('fs').readFileSync(jsFileName).toString();
  };
  return createErlString(_read(jsList));
};

reset = function(erlArgs) {
  var value, _ref;
  _ref = toPartialArray(2, erlArgs), atom = _ref[0], value = _ref[1];
  atom.erlValue = value;
  return atom;
};

rest = function(erlArgs) {
  var arg;
  arg = car(erlArgs);
  if (erlList_question_(arg)) {
    return cdr(arg);
  } else {
    return erlNil;
  }
};

_reverse = function(erlArgs) {
  var arg;
  arg = car(erlArgs);
  if (erlList_question_(arg)) {
    return reverse(arg);
  } else {
    return erlNil;
  }
};

set = function(erlArgs) {
  var index, key, val, _ref;
  _ref = toPartialArray(3, erlArgs), index = _ref[0], key = _ref[1], val = _ref[2];
  (extractJsValue(index))[extractJsValue(key)] = val;
  return index;
};

setCoreFnsOnErlValues_bang_ = function(env, fns) {
  var fn, fnName, _results;
  _results = [];
  for (fnName in fns) {
    if (!__hasProp.call(fns, fnName)) continue;
    fn = fns[fnName];
    _results.push(env[fnName] = createErlCorePureFunction(fn));
  }
  return _results;
};

slurp = function(erlArgs) {
  var jsFileName;
  jsFileName = stripQuotes(extractJsValue(car(erlArgs)));
  var _fs_ = require('fs');
  return createErlString(circumpendQuotes(_fs_.readFileSync(jsFileName).toString()));
};

string = function(erlArgs) {
  return createErlString(circumpendQuotes(_prStr(erlArgs, false)));
};

stripQuotes = function(jsString) {
  return jsString.slice(1, -1);
};

symbol = function(erlArgs) {
  var erlValue, jsStr;
  erlValue = car(erlArgs);
  if (erlString_question_(erlValue)) {
    jsStr = extractJsValue(erlValue);
    return createErlSymbol(jsStr.slice(1, -1));
  } else {
    return erlNil;
  }
};

_take = function(erlArgs) {
  var erlList, erlNumber, _ref;
  _ref = toPartialArray(2, erlArgs), erlNumber = _ref[0], erlList = _ref[1];
  return take(extractJsValue(erlNumber), erlList);
};

typeOf = function(erlArgs) {
  var erlValue;
  erlValue = car(erlArgs);
  return createErlString(circumpendQuotes(erlValue.type));
};

_throw = function(erlArgs) {
  throw car(erlArgs);
};

time_hyphen_ms = function() {
  return createErlNumber(new Date().getTime());
};

withMeta = function(erlArgs) {
  var erlMeta, erlVal, erlValue, jsValue, type, _ref;
  _ref = toPartialArray(2, erlArgs), erlVal = _ref[0], erlMeta = _ref[1];
  if (erlAtom_question_(erlVal)) {
    erlValue = erlVal.erlValue, type = erlVal.type;
    return {
      erlValue: erlValue,
      type: type,
      meta: erlMeta
    };
  } else {
    jsValue = erlVal.jsValue, type = erlVal.type;
    return {
      jsValue: jsValue,
      type: type,
      meta: erlMeta
    };
  }
};

write = function(erlArgs) {
  return createErlString(serialize(car(erlArgs)));
};

_ref = [erlAtom_question_, erlBoolean_question_, erlCorePureFunction_question_, erlFalse_question_, erlList_question_, erlMacro_question_, erlNil_question_, erlNumber_question_, erlSymbol_question_, erlString_question_, erlUserPureFunction_question_, erlTrue_question_].map(createPredicate), atom_question_ = _ref[0], boolean_question_ = _ref[1], coreFn_question_ = _ref[2], false_question_ = _ref[3], list_question_ = _ref[4], macro_question_ = _ref[5], nil_question_ = _ref[6], number_question_ = _ref[7], symbol_question_ = _ref[8], string_question_ = _ref[9], userFn_question_ = _ref[10], true_question_ = _ref[11];

functionsOnErlValues = {
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
  '-quit-': _quit_,
  'read': read,
  'reset!': reset,
  'set!': set,
  'slurp': slurp,
  'time-ms': time_hyphen_ms,
  'with-meta': withMeta,
  'write': write
};

module.exports = getEnvironment;
