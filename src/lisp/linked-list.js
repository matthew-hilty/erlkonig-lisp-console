var EOL, car, cdr, concat, cons, copy, createErlList, createNode, drop, empty_question_, equal_question_, erlListType, erlTypes, filter, forEach, fromArray, last, lastTail, map, next, recurse, reduce, reduceBy2, reverse, take, toArray, toPartialArray, zip, _EOL,
  __slice = [].slice;

erlTypes = require('./types').erlTypes;

erlListType = erlTypes[6];

car = function(erlList) {
  if (empty_question_(erlList)) {
    return EOL;
  } else {
    return erlList.value;
  }
};

cdr = function(erlList) {
  if (empty_question_(erlList)) {
    return EOL;
  } else {
    return erlList.next;
  }
};

concat = function() {
  var erlList, erlLists, result, tail, _copy, _i, _len, _ref;
  erlLists = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  if (erlLists.length === 0) {
    return EOL;
  }
  result = copy(erlLists[0]);
  tail = lastTail(result);
  _ref = erlLists.slice(1);
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    erlList = _ref[_i];
    _copy = copy(erlList);
    if (empty_question_(tail)) {
      result = _copy;
      tail = lastTail(result);
      continue;
    }
    if (!empty_question_(_copy)) {
      tail.next = _copy;
      tail = lastTail(_copy);
    }
  }
  return result;
};

cons = function(erlArgs) {
  return createErlList(car(erlArgs), next(erlArgs));
};

copy = function(erlList) {
  return map((function(x) {
    return x;
  }), erlList);
};

createErlList = function(value, nextNode) {
  if (value == null) {
    return EOL;
  }
  return createNode(value, nextNode != null ? nextNode : EOL);
};

createNode = function(value, nextNode) {
  return {
    type: erlListType,
    value: value,
    next: nextNode
  };
};

drop = function(nbr, erlList) {
  while (nbr !== 0) {
    erlList = cdr(erlList);
    nbr = nbr - 1;
  }
  return erlList;
};

empty_question_ = function(value) {
  return value === EOL;
};

equal_question_ = function(list0, list1, equivalent_question_) {
  while (!(empty_question_(list0) || empty_question_(list1))) {
    if (!equivalent_question_(list0.value, list1.value)) {
      return false;
    }
    list0 = cdr(list0);
    list1 = cdr(list1);
  }
  return empty_question_(list0) && empty_question_(list1);
};

filter = function(predicate, list) {
  var _reduce;
  _reduce = function(list, value) {
    if (predicate(value)) {
      return createErlList(value, list);
    } else {
      return list;
    }
  };
  return reverse(reduce(EOL, _reduce, list));
};

forEach = function(fn, list) {
  var result;
  result = list;
  while (!empty_question_(list)) {
    result = fn(list.value);
    list = recurse(list);
  }
  return result;
};

last = function(erlList) {
  return car(lastTail(erlList));
};

lastTail = function(erlList) {
  var current, prior;
  if (empty_question_(erlList)) {
    return erlList;
  }
  prior = erlList;
  current = cdr(erlList);
  while (!empty_question_(current)) {
    prior = cdr(prior);
    current = cdr(current);
  }
  return prior;
};

map = function(fn, list) {
  var _reduce;
  _reduce = function(list, value) {
    return createErlList(fn(value), list);
  };
  return reverse(reduce(EOL, _reduce, list));
};

next = function(erlList) {
  return car(cdr(erlList));
};

recurse = function(list) {
  if (empty_question_(list)) {
    return list;
  } else {
    return list.next;
  }
};

reduce = function(seed, fn, list) {
  while (!empty_question_(list)) {
    seed = fn(seed, list.value);
    list = recurse(list);
  }
  return seed;
};

reduceBy2 = function(seed, fn, list) {
  var value0, value1;
  while (!empty_question_(list)) {
    value0 = list.value;
    list = recurse(list);
    value1 = list.value;
    seed = fn(seed, value0, value1);
    list = recurse(list);
  }
  return seed;
};

reverse = function(list) {
  var result;
  result = EOL;
  while (!empty_question_(list)) {
    result = createErlList(list.value, result);
    list = list.next;
  }
  return result;
};

take = function(nbr, erlList) {
  var node, result;
  result = createErlList();
  while (nbr !== 0) {
    node = car(erlList);
    erlList = cdr(erlList);
    result = createErlList(node, result);
    nbr = nbr - 1;
  }
  return reverse(result);
};

toArray = function(list) {
  var _reduce;
  _reduce = function(jsArray, value) {
    jsArray.push(value);
    return jsArray;
  };
  return reduce([], _reduce, list);
};

fromArray = function(array) {
  var _reduce;
  _reduce = function(list, value) {
    return createErlList(value, list);
  };
  return array.reverse().reduce(_reduce, createErlList());
};

toPartialArray = function(nbr, list) {
  var node, result;
  result = [];
  while (nbr !== 0) {
    node = car(list);
    list = cdr(list);
    result.push(node);
    nbr = nbr - 1;
  }
  result.push(list);
  return result;
};

zip = function(seed, fn, list0, list1) {
  var value0, value1;
  while (!(empty_question_(list0) || empty_question_(list1))) {
    value0 = car(list0);
    list0 = cdr(list0);
    value1 = car(list1);
    list1 = cdr(list1);
    seed = fn(seed, value0, value1);
  }
  return seed;
};

_EOL = {};

EOL = createNode(_EOL, _EOL);

module.exports = {
  car: car,
  cdr: cdr,
  concat: concat,
  cons: cons,
  copy: copy,
  createErlList: createErlList,
  drop: drop,
  empty_question_: empty_question_,
  equal_question_: equal_question_,
  filter: filter,
  forEach: forEach,
  fromArray: fromArray,
  last: last,
  map: map,
  next: next,
  recurse: recurse,
  reduce: reduce,
  reduceBy2: reduceBy2,
  reverse: reverse,
  take: take,
  toArray: toArray,
  toPartialArray: toPartialArray
};
