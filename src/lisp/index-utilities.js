var createErlIndex = require('./type-utilities').createErlIndex;
var isJsString     = require('./js-utilities').isJsString;

var __slice   = [].slice;
var __hasProp = {}.hasOwnProperty;

var fromErlIndex = function(erlIndex) {
  var result = {};
  var jsValue = erlIndex.jsValue;
  for (var key in jsValue) {
    if (!__hasProp.call(jsValue, key)) continue;
    var value = jsValue[key];
    if (isJsString(key)) {
      var newKey = (function() {
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

var fromJsObjects = function() {
  var jsObjects = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  var copy = {};
  var len = jsObjects.length;
  for (var i = 0;  i < len; i++) {
    var jsObject = jsObjects[i];
    for (var key in jsObject) {
      if (!__hasProp.call(jsObject, key)) continue;
      var val = jsObject[key];
      if (isJsString(key)) {
        copy[':' + key] = val;
      } else {
        copy[key] = val;
      }
    }
  }
  return createErlIndex(copy);
};

module.exports = {
  fromJsObjects: fromJsObjects,
  fromErlIndex: fromErlIndex
};
