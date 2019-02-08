import { createViewport } from '../types/createViewport';
import { createFrame } from '../types/createFrame';
import { createTerminal } from '../types/createTerminal';
import { Frame } from './frame';
import { Terminal } from './terminal';

function addChar(viewport, char) {
  return createViewport(
    Terminal.addChar(viewport.terminal, char),
    viewport.frame);
}

function completeWord(viewport, getCandidates) {
  const frame = viewport.frame;
  const newTerminal =
    Terminal.completeWord(refreshTerminal(viewport), getCandidates);
  const diff = newTerminal.entries.length - viewport.terminal.entries.length;
  return createViewport(
    newTerminal,
    createFrame(
      frame.offset + diff,
      frame.start,
      0));
}

function clear(viewport) {
  const terminal = viewport.terminal;
  return createViewport(
    terminal,
    Frame.clear(viewport.frame, terminal));
}

function fastForward(viewport) {
  return createViewport(
    viewport.terminal,
    Frame.fastForward(viewport.frame));
}

function modifyTerminal(fnName) {
  return function (viewport) {
    return createViewport(
      Terminal[fnName](refreshTerminal(viewport)),
      Frame.resetPromptIndex(viewport.frame));
  };
}

function refreshTerminal(viewport) {
  const terminal = viewport.terminal;
  return createTerminal(terminal.entries, terminal.prompts, viewport.prompt);
}

function rewind(viewport) {
  const terminal = viewport.terminal;
  return createViewport(
    terminal,
    Frame.rewind(viewport.frame, terminal));
}

function submit(viewport, transform) {
  const frame = viewport.frame;
  const newTerminal = Terminal.submit(refreshTerminal(viewport), transform);
  const diff = newTerminal.entries.length - viewport.terminal.entries.length;
  return createViewport(
    newTerminal,
    createFrame(
      frame.offset + diff,
      frame.start,
      0));
}

export const Viewport = {
  addChar,
  clear,
  completeWord,
  deleteLeftChar: modifyTerminal('deleteLeftChar'),
  deletePreCursor: modifyTerminal('deletePreCursor'),
  deleteRightChar: modifyTerminal('deleteRightChar'),
  deleteWord: modifyTerminal('deleteWord'),
  fastForward,
  moveCursorLeft: modifyTerminal('moveCursorLeft'),
  moveCursorRight: modifyTerminal('moveCursorRight'),
  moveCursorToEnd: modifyTerminal('moveCursorToEnd'),
  moveCursorToStart: modifyTerminal('moveCursorToStart'),
  rewind,
  submit
}
