const circumpendQuotes = function(jsString) {
  return '"' + jsString + '"';
};

const isJsNaN = function(val) {
  return isJsNumber(val) && val !== val;
};

const isJsNumber = function(val) {
  return {}.toString.call(val) === '[object Number]';
};

const isJsString = function(jsVal) {
  return Object.prototype.toString.call(jsVal) === '[object String]';
};

export {
  circumpendQuotes,
  isJsNaN,
  isJsNumber,
  isJsString
};
