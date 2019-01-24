var addEnv, getLast, lookup, set, setMainEnv, unset, unsetMainEnv;

addEnv = function(envStack, newEnv) {
  var copy;
  copy = envStack.slice(0);
  copy.unshift(newEnv);
  return copy;
};

getLast = function(array) {
  return array[array.length - 1];
};

lookup = function(envStack, key) {
  var copy, env, value;
  copy = envStack.slice(0);
  while (copy.length !== 0) {
    env = copy[0];
    value = env[key];
    if (value != null) {
      return value;
    }
    copy.shift();
  }
  throw "VALUE CORRESPONDING TO \"" + key + "\" DOES NOT EXIST IN ENV-STACK";
};

set = function(env, key, value) {
  env[key] = value;
  return value;
};

setMainEnv = function(envStack, key, value) {
  return set(getLast(envStack), key, value);
};

unset = function(env, key) {
  var value;
  value = env[key];
  delete env[key];
  return value;
};

unsetMainEnv = function(envStack, key) {
  return unset(getLast(envStack), key);
};

module.exports = {
  addEnv: addEnv,
  lookup: lookup,
  setMainEnv: setMainEnv,
  unsetMainEnv: unsetMainEnv
};
