import { getEnvironment as setEnv0 } from './env0';
import { getEnvironment as setEnv1 } from './env1';
import { getEnvironment as setEnv2 } from './env2';
import { getEnvironment as setEnv3 } from './env3';
import { getEnvironment as setEnv4 } from './env4';

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
  setEnv4(config);
  return environment;
};

export { getLispEnvironment };
