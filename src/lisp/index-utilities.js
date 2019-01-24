var createErlIndex, fromErlIndex, fromJsObjects, jsString_question_,
  __slice = [].slice,
  __hasProp = {}.hasOwnProperty;

createErlIndex = require('./type-utilities').createErlIndex;

jsString_question_ = require('./js-utilities').jsString_question_;

fromJsObjects = function() {
  var copy, jsObject, jsObjects, key, val, _i, _len;
  jsObjects = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  copy = {};
  for (_i = 0, _len = jsObjects.length; _i < _len; _i++) {
    jsObject = jsObjects[_i];
    for (key in jsObject) {
      if (!__hasProp.call(jsObject, key)) continue;
      val = jsObject[key];
      if (jsString_question_(key)) {
        copy[':' + key] = val;
      } else {
        copy[key] = val;
      }
    }
  }
  return createErlIndex(copy);
};

fromErlIndex = function(erlIndex) {
  var key, newKey, result, value, _ref;
  result = {};
  _ref = erlIndex.jsValue;
  for (key in _ref) {
    if (!__hasProp.call(_ref, key)) continue;
    value = _ref[key];
    if (jsString_question_(key)) {
      newKey = (function() {
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

module.exports = {
  fromJsObjects: fromJsObjects,
  fromErlIndex: fromErlIndex
};
