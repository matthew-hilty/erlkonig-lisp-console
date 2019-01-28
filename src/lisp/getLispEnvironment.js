var setEnv0 = require('./env0');
var setEnv1 = require('./env1');
var setEnv2 = require('./env2');
var setEnv3 = require('./env3');

var getLispEnvironment = function(config) {
  var display = config.display;
  var environment = {};
  config = {
    display: display,
    environment: environment
  };
  setEnv0(config);
  setEnv1(config);
  setEnv2(config);
  setEnv3(config);
  return environment;
};

module.exports = getLispEnvironment;
