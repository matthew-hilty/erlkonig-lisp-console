import { createFrame } from './types/createFrame';
import { createPrompt } from './types/createPrompt';
import { createTerminal } from './types/createTerminal';
import { createViewport } from './types/createViewport';

function getInitialModel(initialPrompt) {
  return createViewport(
    createTerminal([], [], createPrompt(initialPrompt, '')),
    createFrame(0, 0, 0));
}

export { getInitialModel };
