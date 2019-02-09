import { createTerminal } from '../types/createTerminal';
import { createPrompt } from '../types/createPrompt';

function addChar(terminal, char) {
  return createTerminal(
    terminal.entries,
    terminal.prompts,
    createPrompt(
      terminal.prompt.preCursor + char,
      terminal.prompt.postCursor));
}

function completeWord(terminal, getCandidates) {
  const _getCandidates = (getCandidates == null)
    ? function (value) {
        // coupling to lisp implementation
        return [{ effect: false, value: value }];
      }
    : getCandidates;

  const commandText = terminal.prompt.preCursor;
  const splitCommand = getPrefix(commandText);
  const candidates = _getCandidates(splitCommand[1]);
  const length = candidates.length;

  if (length === 0) {
    return terminal;
  }

  let entries;
  let prompt;

  if (length === 1) {
    entries = terminal.entries;
    prompt = createPrompt(
      splitCommand[0] + candidates[0] + ' ' + terminal.prompt.postCursor,
      terminal.prompt.postCursor);
  } else {
    entries = terminal.entries.concat(
      [{ type: 'command', value: extractCommand(terminal.prompt) }],
      [{ type: 'completion', value: candidates.join(' ') }]);
    prompt = terminal.prompt;
  }

  return createTerminal(entries, terminal.prompts, prompt);
}

function deleteLeftChar(terminal) {
  return createTerminal(
    terminal.entries, 
    terminal.prompts,
    createPrompt(
      terminal.prompt.preCursor.slice(0, -1),
      terminal.prompt.postCursor));
}

function deletePreCursor(terminal) {
  return createTerminal(
    terminal.entries, 
    terminal.prompts, 
    createPrompt('', terminal.prompt.postCursor));
}

function deleteRightChar(terminal) {
  return createTerminal(
    terminal.entries, 
    terminal.prompts, 
    createPrompt(
      terminal.prompt.preCursor,
      terminal.prompt.postCursor.slice(1)));
}

function deleteWord(terminal) {
  const preCursor = terminal.prompt.preCursor;
  return createTerminal(
    terminal.entries, 
    terminal.prompts, 
    createPrompt(
      preCursor.slice(0, preCursor.slice(0, -1).lastIndexOf(' ') + 1),
      terminal.prompt.postCursor));
}

function extractCommand(prompt) {
  return (prompt.preCursor + prompt.postCursor).trim();
}

function flattenArray(array) {
  return Array.prototype.concat.apply([], array);
}

function getPrefix(command) {
  const regex = /^(.*[\s\(\)\[\]])([^\(\)\[\]]*)/;
  const match = regex.exec(command);
  return match == null
    ? ['', command]
    : [match[1], match[2]];
}

function moveCursorLeft(terminal) {
  const preCursor = terminal.prompt.preCursor;
  const preCursorLength = preCursor.length;
  if (preCursorLength === 0) {
    return terminal;
  } else {
    const postCursor = terminal.prompt.postCursor;
    return createTerminal(
      terminal.entries,
      terminal.prompts,
      createPrompt(
        preCursor.slice(0, -1),
        preCursor[preCursorLength - 1] + postCursor));
  }
}

function moveCursorRight(terminal) {
  const postCursor = terminal.prompt.postCursor;
  if (postCursor.length === 0) {
    return terminal;
  } else {
    const preCursor = terminal.prompt.preCursor;
    return createTerminal(
      terminal.entries,
      terminal.prompts,
      createPrompt(
        preCursor + postCursor[0],
        postCursor.slice(1)));
  }
}

function moveCursorToEnd(terminal) {
  const prompt = terminal.prompt;
  return createTerminal(
    terminal.entries,
    terminal.prompts,
    createPrompt(prompt.preCursor + prompt.postCursor, ''));
}

function moveCursorToStart(terminal) {
  const prompt = terminal.prompt;
  return createTerminal(
    terminal.entries,
    terminal.prompts,
    createPrompt('', prompt.preCursor + prompt.postCursor));
}

function normalizePrompt(prompt) {
  return createPrompt(extractCommand(prompt), '');
}

function submit(terminal, transform) {
  let newCachedPromptMaybe;
  let newFuture;

  const _transform = (transform == null)
    ? function (value) {
        // coupling to lisp implementation
        return [{ effect: false, value: value }];
      }
    : transform;

  const commandText = extractCommand(terminal.prompt);
  const results = _transform(commandText);
  const _displayEntries = results
    .slice(0, -1)
    .filter(function (result) { return result.effect.type === 'display'; })
    .map(function (display) {
      return display.value.split("\\\\n").map(function (line) {
         return { type: 'display', value: line };
      });
    });
  const displayEntries = flattenArray(_displayEntries);

  const lastResult = results[results.length - 1];
  const response = (lastResult.value != null)
    ? [{ type: 'response', value: lastResult.value }]
    : [];

  const command = { type: 'command', value: commandText };
  const prompt = normalizePrompt(terminal.prompt);

  return createTerminal(
    terminal.entries.concat([command], displayEntries, response),
    [prompt].concat(terminal.prompts),
    createPrompt('', ''));
}

export const Terminal = {
  addChar,
  completeWord,
  deleteLeftChar,
  deletePreCursor,
  deleteRightChar,
  deleteWord,
  moveCursorLeft,
  moveCursorRight,
  moveCursorToEnd,
  moveCursorToStart,
  submit
};
