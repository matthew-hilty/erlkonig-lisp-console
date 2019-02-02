import { erlTypes } from './types';

var erlListType = erlTypes[6];

var __slice = [].slice;

var car = function(erlList) {
  if (isEmpty(erlList)) {
    return EOL;
  } else {
    return erlList.value;
  }
};

var cdr = function(erlList) {
  if (isEmpty(erlList)) {
    return EOL;
  } else {
    return erlList.next;
  }
};

var areEqual = function(list0, list1, _areEqual) {
  while (!(isEmpty(list0) || isEmpty(list1))) {
    if (!_areEqual(list0.value, list1.value)) {
      return false;
    }
    list0 = cdr(list0);
    list1 = cdr(list1);
  }
  return isEmpty(list0) && isEmpty(list1);
};

var concat = function() {
  var erlLists = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  if (erlLists.length === 0) {
    return EOL;
  }
  var result = copy(erlLists[0]);
  var tail = lastTail(result);
  var remaining = erlLists.slice(1);
  var len = remaining.length;
  for (var i = 0; i < len; i++) {
    var erlList = remaining[i];
    var _copy = copy(erlList);
    if (isEmpty(tail)) {
      result = _copy;
      tail = lastTail(result);
      continue;
    }
    if (!isEmpty(_copy)) {
      tail.next = _copy;
      tail = lastTail(_copy);
    }
  }
  return result;
};

var cons = function(erlArgs) {
  return createErlList(car(erlArgs), next(erlArgs));
};

var copy = function(erlList) {
  return map((function(x) {
    return x;
  }), erlList);
};

var createErlList = function(value, nextNode) {
  if (value == null) {
    return EOL;
  }
  return createNode(value, nextNode != null ? nextNode : EOL);
};

var createNode = function(value, nextNode) {
  return {
    type: erlListType,
    value: value,
    next: nextNode
  };
};

var drop = function(nbr, erlList) {
  while (nbr !== 0) {
    erlList = cdr(erlList);
    nbr = nbr - 1;
  }
  return erlList;
};

var isEmpty = function(value) {
  return value === EOL;
};

var filter = function(predicate, list) {
  var _reduce = function(list, value) {
    if (predicate(value)) {
      return createErlList(value, list);
    } else {
      return list;
    }
  };
  return reverse(reduce(EOL, _reduce, list));
};

var forEach = function(fn, list) {
  var result = list;
  while (!isEmpty(list)) {
    result = fn(list.value);
    list = recurse(list);
  }
  return result;
};

var fromArray = function(array) {
  var _reduce = function(list, value) {
    return createErlList(value, list);
  };
  return array.reverse().reduce(_reduce, createErlList());
};

var last = function(erlList) {
  return car(lastTail(erlList));
};

var lastTail = function(erlList) {
  if (isEmpty(erlList)) {
    return erlList;
  }
  var prior = erlList;
  var current = cdr(erlList);
  while (!isEmpty(current)) {
    prior = cdr(prior);
    current = cdr(current);
  }
  return prior;
};

var map = function(fn, list) {
  var _reduce = function(list, value) {
    return createErlList(fn(value), list);
  };
  return reverse(reduce(EOL, _reduce, list));
};

var next = function(erlList) {
  return car(cdr(erlList));
};

var recurse = function(list) {
  if (isEmpty(list)) {
    return list;
  } else {
    return list.next;
  }
};

var reduce = function(seed, fn, list) {
  while (!isEmpty(list)) {
    seed = fn(seed, list.value);
    list = recurse(list);
  }
  return seed;
};

var reduceBy2 = function(seed, fn, list) {
  while (!isEmpty(list)) {
    var value0 = list.value;
    list = recurse(list);
    var value1 = list.value;
    seed = fn(seed, value0, value1);
    list = recurse(list);
  }
  return seed;
};

var reverse = function(list) {
  var result = EOL;
  while (!isEmpty(list)) {
    result = createErlList(list.value, result);
    list = list.next;
  }
  return result;
};

var take = function(nbr, erlList) {
  var result = createErlList();
  while (nbr !== 0) {
    var node = car(erlList);
    erlList = cdr(erlList);
    result = createErlList(node, result);
    nbr = nbr - 1;
  }
  return reverse(result);
};

var toArray = function(list) {
  var _reduce = function(jsArray, value) {
    jsArray.push(value);
    return jsArray;
  };
  return reduce([], _reduce, list);
};

var toPartialArray = function(nbr, list) {
  var result = [];
  while (nbr !== 0) {
    var node = car(list);
    list = cdr(list);
    result.push(node);
    nbr = nbr - 1;
  }
  result.push(list);
  return result;
};

var zip = function(seed, fn, list0, list1) {
  while (!(isEmpty(list0) || isEmpty(list1))) {
    var value0 = car(list0);
    list0 = cdr(list0);
    var value1 = car(list1);
    list1 = cdr(list1);
    seed = fn(seed, value0, value1);
  }
  return seed;
};

var _EOL = {};

var EOL = createNode(_EOL, _EOL);

export {
  areEqual,
  car,
  cdr,
  concat,
  cons,
  copy,
  createErlList,
  drop,
  isEmpty,
  filter,
  forEach,
  fromArray,
  last,
  map,
  next,
  recurse,
  reduce,
  reduceBy2,
  reverse,
  take,
  toArray,
  toPartialArray
};
