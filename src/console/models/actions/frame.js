var create = require('../types/createFrame');

function clear(frame, terminal) {
  return create(
    0,
    terminal.entries.length,
    frame.promptIndex);
}

function fastForward(frame) {
  return create(
    frame.offset,
    frame.start,
    frame.promptIndex > 0
      ? frame.promptIndex - 1
      : frame.promptIndex);
}

function resetPromptIndex(frame) {
  return create(
    frame.offset,
    frame.start,
    0);
}

function rewind(frame, terminal) {
  return create(
    frame.offset,
    frame.start,
    terminal.prompts.length > frame.promptIndex
      ? frame.promptIndex + 1
      : frame.promptIndex);
}

module.exports = {
  clear: clear,
  fastForward: fastForward,
  resetPromptIndex: resetPromptIndex,
  rewind: rewind,
};
