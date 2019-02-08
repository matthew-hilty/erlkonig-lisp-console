import { createErlIndex } from './type-utilities';
import { isJsString } from './js-utilities';

const __slice   = [].slice;
const __hasProp = {}.hasOwnProperty;

const fromErlIndex = function(erlIndex) {
  const result = {};
  const jsValue = erlIndex.jsValue;
  for (let key in jsValue) {
    if (!__hasProp.call(jsValue, key)) continue;
    const value = jsValue[key];
    if (isJsString(key)) {
      const newKey = (function() {
        switch (key[0]) {
          case ':':
            return key.slice(1);
          case '"':
            return key.slice(1, -1);
          default:
            return key;
        }
      })();
      result[newKey] = value;
    } else {
      result[key] = value;
    }
  }
  return result;
};

const fromJsObjects = function() {
  const jsObjects = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  const copy = {};
  const len = jsObjects.length;
  for (let i = 0;  i < len; i++) {
    const jsObject = jsObjects[i];
    for (let key in jsObject) {
      if (!__hasProp.call(jsObject, key)) continue;
      const val = jsObject[key];
      if (isJsString(key)) {
        copy[':' + key] = val;
      } else {
        copy[key] = val;
      }
    }
  }
  return createErlIndex(copy);
};

export {
  fromJsObjects,
  fromErlIndex
};
