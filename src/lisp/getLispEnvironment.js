import { getEnvironment as setEnv0 } from './env0';
import { getEnvironment as setEnv1 } from './env1';
import { getEnvironment as setEnv2 } from './env2';
import { getEnvironment as setEnv3 } from './env3';
import { getEnvironment as setEnv4 } from './env4';

const getLispEnvironment = function(config) {
  const display = config.display;
  const environment = {};
  const _config = {
    display: display,
    environment: environment
  };
  setEnv0(_config);
  setEnv1(_config);
  setEnv2(_config);
  setEnv3(_config);
  setEnv4(_config);
  return environment;
};

export { getLispEnvironment };
