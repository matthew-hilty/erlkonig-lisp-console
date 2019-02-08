import { getViewport } from './getViewport';
import { interpretKeydown } from './chars/interpretKeydown';

function initializeControl(subscribe, render, config) {
  const handleEvent = function (getAction) {
    return function (event) {
      render(getViewport(getAction(event), config));
    };
  }

  subscribe('keydown', handleEvent(interpretKeydown));
}

export { initializeControl };
