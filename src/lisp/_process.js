import { commentSignal } from './commentSignal';
import { evaluate } from './evaluate';

const _process = function(transform) {
  return function(envs) {
    return function(sourceCode) {
      const results = [];
      const addResult = function(result) {
        return results.push(result);
      };
      const value = evaluate(envs, addResult)(transform(sourceCode));
      const result = (value === commentSignal)
        ? { effect: { type: 'comment' } }
        : { effect: false, value: value };
      addResult(result);
      return results;
    };
  };
};

export { _process };
