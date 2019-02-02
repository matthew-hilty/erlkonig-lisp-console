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
  if (getCandidates == null) {
    getCandidates = function (value) {
      var results;
      return (results = [{ effect: false, value: value }]); // coupling to lisp implementation
    };
  }

  var commandText = terminal.prompt.preCursor;
  var splitCommand = getPrefix(commandText);
  var candidates = getCandidates(splitCommand[1]);
  var length = candidates.length;

  if (length === 0) {
    return terminal;
  }

  var entries, prompt;

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
  var preCursor = terminal.prompt.preCursor;
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

function getPrefix(command) {
  var regex = /^(.*[\s\(\)\[\]])([^\(\)\[\]]*)/;
  var match = regex.exec(command);
  return match == null
    ? ['', command]
    : [match[1], match[2]];
}

function moveCursorLeft(terminal) {
  var preCursor = terminal.prompt.preCursor;
  var preCursorLength = preCursor.length;
  if (preCursorLength === 0) {
    return terminal;
  } else {
    var postCursor = terminal.prompt.postCursor;
    return createTerminal(
      terminal.entries,
      terminal.prompts,
      createPrompt(
        preCursor.slice(0, -1),
        preCursor[preCursorLength - 1] + postCursor));
  }
}

function moveCursorRight(terminal) {
  var postCursor = terminal.prompt.postCursor;
  if (postCursor.length === 0) {
    return terminal;
  } else {
    var preCursor = terminal.prompt.preCursor;
    return createTerminal(
      terminal.entries,
      terminal.prompts,
      createPrompt(
        preCursor + postCursor[0],
        postCursor.slice(1)));
  }
}

function moveCursorToEnd(terminal) {
  var prompt = terminal.prompt;
  return createTerminal(
    terminal.entries,
    terminal.prompts,
    createPrompt(prompt.preCursor + prompt.postCursor, ''));
}

function moveCursorToStart(terminal) {
  var prompt = terminal.prompt;
  return createTerminal(
    terminal.entries,
    terminal.prompts,
    createPrompt('', prompt.preCursor + prompt.postCursor));
}

function normalizePrompt(prompt) {
  return createPrompt(extractCommand(prompt), '');
}

function submit(terminal, transform) {
  var newCachedPromptMaybe, newFuture;

  if (transform == null) {
    transform = function (value) {
      var results;
      return (results = [{ effect: false, value: value }]); // coupling to lisp implementation
    };
  }

  var commandText = extractCommand(terminal.prompt);
  var results = transform(commandText);
  var displayEntries = results
    .slice(0, -1)
    .filter(function (result) { return result.effect.type === 'display'; })
    .map(function (display) { return { type: 'display', value: display.value }});

  var lastResult = results[results.length - 1];
  var response = lastResult.value != null
    ? [{ type: 'response', value: lastResult.value }]
    : [];

  var command = { type: 'command', value: commandText };
  var prompt = normalizePrompt(terminal.prompt);

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
