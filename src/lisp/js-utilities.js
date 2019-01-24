var circumpendQuotes, jsNaN_question_, jsNumber_question_, jsString_question_;

circumpendQuotes = function(jsString) {
  return '"' + jsString + '"';
};

jsNaN_question_ = function(val) {
  return jsNumber_question_(val) && val !== val;
};

jsNumber_question_ = function(val) {
  return {}.toString.call(val) === '[object Number]';
};

jsString_question_ = function(jsVal) {
  return Object.prototype.toString.call(jsVal) === '[object String]';
};

module.exports = {
  circumpendQuotes: circumpendQuotes,
  jsNaN_question_: jsNaN_question_,
  jsNumber_question_: jsNumber_question_,
  jsString_question_: jsString_question_
};
