import { createFrame } from '../types/createFrame';

function clear(frame, terminal) {
  return createFrame(
    0,
    terminal.entries.length,
    frame.promptIndex);
}

function fastForward(frame) {
  return createFrame(
    frame.offset,
    frame.start,
    frame.promptIndex > 0
      ? frame.promptIndex - 1
      : frame.promptIndex);
}

function resetPromptIndex(frame) {
  return createFrame(
    frame.offset,
    frame.start,
    0);
}

function rewind(frame, terminal) {
  return createFrame(
    frame.offset,
    frame.start,
    terminal.prompts.length > frame.promptIndex
      ? frame.promptIndex + 1
      : frame.promptIndex);
}

export const Frame = {
  clear,
  fastForward,
  resetPromptIndex,
  rewind
};
