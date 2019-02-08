import { erlTypes } from './types';

const erlListType = erlTypes[6];

const __slice = [].slice;

const car = function(erlList) {
  if (isEmpty(erlList)) {
    return EOL;
  } else {
    return erlList.value;
  }
};

const cdr = function(erlList) {
  if (isEmpty(erlList)) {
    return EOL;
  } else {
    return erlList.next;
  }
};

const areEqual = function(list0, list1, _areEqual) {
  while (!(isEmpty(list0) || isEmpty(list1))) {
    if (!_areEqual(list0.value, list1.value)) {
      return false;
    }
    list0 = cdr(list0);
    list1 = cdr(list1);
  }
  return isEmpty(list0) && isEmpty(list1);
};

const concat = function() {
  const erlLists = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  if (erlLists.length === 0) {
    return EOL;
  }
  let result = copy(erlLists[0]);
  let tail = lastTail(result);
  const remaining = erlLists.slice(1);
  const len = remaining.length;
  for (let i = 0; i < len; i++) {
    const erlList = remaining[i];
    const _copy = copy(erlList);
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

const cons = function(erlArgs) {
  return createErlList(car(erlArgs), next(erlArgs));
};

const copy = function(erlList) {
  return map((function(x) {
    return x;
  }), erlList);
};

const createErlList = function(value, nextNode) {
  if (value == null) {
    return EOL;
  }
  return createNode(value, nextNode != null ? nextNode : EOL);
};

const createNode = function(value, nextNode) {
  return {
    type: erlListType,
    value: value,
    next: nextNode
  };
};

const drop = function(nbr, erlList) {
  while (nbr !== 0) {
    erlList = cdr(erlList);
    nbr = nbr - 1;
  }
  return erlList;
};

const isEmpty = function(value) {
  return value === EOL;
};

const filter = function(predicate, list) {
  const _reduce = function(list, value) {
    if (predicate(value)) {
      return createErlList(value, list);
    } else {
      return list;
    }
  };
  return reverse(reduce(EOL, _reduce, list));
};

const forEach = function(fn, list) {
  let result = list;
  while (!isEmpty(list)) {
    result = fn(list.value);
    list = recurse(list);
  }
  return result;
};

const fromArray = function(array) {
  const _reduce = function(list, value) {
    return createErlList(value, list);
  };
  return array.reverse().reduce(_reduce, createErlList());
};

const last = function(erlList) {
  return car(lastTail(erlList));
};

const lastTail = function(erlList) {
  if (isEmpty(erlList)) {
    return erlList;
  }
  let prior = erlList;
  let current = cdr(erlList);
  while (!isEmpty(current)) {
    prior = cdr(prior);
    current = cdr(current);
  }
  return prior;
};

const map = function(fn, list) {
  const _reduce = function(list, value) {
    return createErlList(fn(value), list);
  };
  return reverse(reduce(EOL, _reduce, list));
};

const next = function(erlList) {
  return car(cdr(erlList));
};

const recurse = function(list) {
  if (isEmpty(list)) {
    return list;
  } else {
    return list.next;
  }
};

const reduce = function(seed, fn, list) {
  while (!isEmpty(list)) {
    seed = fn(seed, list.value);
    list = recurse(list);
  }
  return seed;
};

const reduceBy2 = function(seed, fn, list) {
  while (!isEmpty(list)) {
    const value0 = list.value;
    list = recurse(list);
    const value1 = list.value;
    seed = fn(seed, value0, value1);
    list = recurse(list);
  }
  return seed;
};

const reverse = function(list) {
  let result = EOL;
  while (!isEmpty(list)) {
    result = createErlList(list.value, result);
    list = list.next;
  }
  return result;
};

const take = function(nbr, erlList) {
  let result = createErlList();
  while (nbr !== 0) {
    const node = car(erlList);
    erlList = cdr(erlList);
    result = createErlList(node, result);
    nbr = nbr - 1;
  }
  return reverse(result);
};

const toArray = function(list) {
  const _reduce = function(jsArray, value) {
    jsArray.push(value);
    return jsArray;
  };
  return reduce([], _reduce, list);
};

const toPartialArray = function(nbr, list) {
  const result = [];
  while (nbr !== 0) {
    const node = car(list);
    list = cdr(list);
    result.push(node);
    nbr = nbr - 1;
  }
  result.push(list);
  return result;
};

const zip = function(seed, fn, list0, list1) {
  while (!(isEmpty(list0) || isEmpty(list1))) {
    const value0 = car(list0);
    list0 = cdr(list0);
    const value1 = car(list1);
    list1 = cdr(list1);
    seed = fn(seed, value0, value1);
  }
  return seed;
};

const _EOL = {};

const EOL = createNode(_EOL, _EOL);

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
