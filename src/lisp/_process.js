var commentSignal, evaluate, _process;

commentSignal = require('./commentSignal');

evaluate = require('./evaluate');

_process = function(transform) {
  return function(envs) {
    return function(sourceCode) {
      var addResult, result, results, value;
      results = [];
      addResult = function(result) {
        return results.push(result);
      };
      value = evaluate(envs, addResult)(transform(sourceCode));
      result = value === commentSignal ? {
        effect: {
          type: 'comment'
        }
      } : {
        effect: false,
        value: value
      };
      addResult(result);
      return results;
    };
  };
};

module.exports = _process;
