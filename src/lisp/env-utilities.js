var addEnv = function (envStack, newEnv) {
  var copy = envStack.slice(0);
  copy.unshift(newEnv);
  return copy;
};

var getLast = function (array) {
  return array[array.length - 1];
};

var lookup = function (envStack, key) {
  var copy = envStack.slice(0);
  while (copy.length !== 0) {
    var env = copy[0];
    var value = env[key];
    if (value != null) {
      return value;
    }
    copy.shift();
  }
  throw "VALUE CORRESPONDING TO \"" + key + "\" DOES NOT EXIST IN ENV-STACK";
};

var set = function (env, key, value) {
  env[key] = value;
  return value;
};

var setMainEnv = function (envStack, key, value) {
  return set(getLast(envStack), key, value);
};

var unset = function (env, key) {
  var value = env[key];
  delete env[key];
  return value;
};

var unsetMainEnv = function (envStack, key) {
  return unset(getLast(envStack), key);
};

module.exports = {
  addEnv: addEnv,
  lookup: lookup,
  setMainEnv: setMainEnv,
  unsetMainEnv: unsetMainEnv
};
