var circumpendQuotes = function(jsString) {
  return '"' + jsString + '"';
};

var isJsNaN = function(val) {
  return isJsNumber(val) && val !== val;
};

var isJsNumber = function(val) {
  return {}.toString.call(val) === '[object Number]';
};

var isJsString = function(jsVal) {
  return Object.prototype.toString.call(jsVal) === '[object String]';
};

export {
  circumpendQuotes,
  isJsNaN,
  isJsNumber,
  isJsString
};
