var setEnv0_bang_ = require('./env0');
var setEnv1_bang_ = require('./env1');
var setEnv2_bang_ = require('./env2');
var setEnv3_bang_ = require('./env3');

var getLispEnvironment = function(config) {
  var display = config.display;
  var environment = {};
  config = {
    display: display,
    environment: environment
  };
  setEnv0_bang_(config);
  setEnv1_bang_(config);
  setEnv2_bang_(config);
  setEnv3_bang_(config);
  return environment;
};

module.exports = getLispEnvironment;
