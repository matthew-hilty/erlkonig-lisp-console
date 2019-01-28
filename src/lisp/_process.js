var commentSignal = require('./commentSignal');
var evaluate      = require('./evaluate');

var _process = function(transform) {
  return function(envs) {
    return function(sourceCode) {
      var results = [];
      var addResult = function(result) {
        return results.push(result);
      };
      var value = evaluate(envs, addResult)(transform(sourceCode));
      var result = (value === commentSignal)
        ? { effect: { type: 'comment' } }
        : { effect: false, value: value };
      addResult(result);
      return results;
    };
  };
};

module.exports = _process;
