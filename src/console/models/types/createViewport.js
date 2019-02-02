function getPrompt(terminal, frame) {
  return frame.promptIndex === 0
    ? terminal.prompt
    : terminal.prompts[frame.promptIndex - 1];
}

export const createViewport = function (terminal, frame) {
  return {
    terminal: terminal,
    frame: frame,
    prompt: getPrompt(terminal, frame)
  };
};
