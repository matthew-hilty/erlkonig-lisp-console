const addEnv = function (envStack, newEnv) {
  const copy = envStack.slice(0);
  copy.unshift(newEnv);
  return copy;
};

const getLast = function (array) {
  return array[array.length - 1];
};

const lookup = function (envStack, key) {
  const copy = envStack.slice(0);
  while (copy.length !== 0) {
    const env = copy[0];
    const value = env[key];
    if (value != null) {
      return value;
    }
    copy.shift();
  }
  throw "VALUE CORRESPONDING TO \"" + key + "\" DOES NOT EXIST IN ENV-STACK";
};

const set = function (env, key, value) {
  env[key] = value;
  return value;
};

const setMainEnv = function (envStack, key, value) {
  return set(getLast(envStack), key, value);
};

const unset = function (env, key) {
  const value = env[key];
  delete env[key];
  return value;
};

const unsetMainEnv = function (envStack, key) {
  return unset(getLast(envStack), key);
};

export {
  addEnv,
  lookup,
  setMainEnv,
  unsetMainEnv
};
