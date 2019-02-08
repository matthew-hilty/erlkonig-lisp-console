import {
  ERL_CURSOR,
  ERL_ENTRY,
  ERL_INPUT,
  ERL_POST,
  ERL_PRE,
  ERL_PROMPT
} from './components';

import {
  DIV,
  H1,
  H4,
  SECTION,
  SPAN
} from '../../ribosome/elements';

const ERL_HEADER = SECTION(
    {
      id: 'erl-header',
      classes: { 'head': true }
    },
    H1(null, 'Erlkönig Lisp Console\n'),
    H4(null, 'A terminal emulator and lisp interpreter\n'));

const emptyString = '';

function ERLKING(prefixes, viewport) {
  const promptLabel = prefixes.promptLabel;
  const prompt = viewport.prompt;
  const frame = viewport.frame;

  const entries = viewport.terminal.entries
    .slice(frame.start, frame.start + frame.offset)
    .map(specifyEntry.bind(null, prefixes));

  const preCursor = prompt.preCursor != null ? prompt.preCursor : emptyString;
  const postCursor = prompt.postCursor != null ? prompt.postCursor : emptyString;

  return DIV(
    _erlkonigConfig,
    DIV(
      null,
      ERL_HEADER,
      DIV(
        _terminalConfig,
        X_SCROLLBAR,
        Y_SCROLLBAR,
        DIV(
          _erlViewportConfig,
          entries,
          ERL_INPUT(promptLabel, prompt.preCursor, prompt.postCursor)))));
}

const X_SCROLLBAR = DIV(
  {
    id: 'erl-x-scroll-track',
    classes: {
      'erl-x-scroll-track': true,
      'erl-scroll-track': true
    }
  },
  DIV({
    id: 'erl-x-scroll-thumb',
    classes: {
      'erl-x-scroll-thumb': true,
      'erl-scroll-thumb': true
    }
  }));

const Y_SCROLLBAR = DIV(
  {
    id: 'erl-y-scroll-track',
    classes: {
      'erl-y-scroll-track': true,
      'erl-scroll-track': true
    }
  },
  DIV({
    id: 'erl-y-scroll-thumb',
    classes: {
      'erl-y-scroll-thumb': true,
      'erl-scroll-thumb': true
    }
  }));

const defaultCompletionLabel = '  ';
const defaultDisplayLabel = '';
const defaultErrorLabel = '...> ';
const defaultPromptLabel = '> ';
const defaultResponseLabel = '==> ';

function specifyEntry(prefixes, component) {
  const completionLabel = prefixes.completionLabel || defaultCompletionLabel;
  const displayLabel = prefixes.displayLabel || defaultDisplayLabel;
  const errorLabel = prefixes.errorLabel || defaultErrorLabel;
  const promptLabel = prefixes.promptLabel || defaultPromptLabel;
  const responseLabel = prefixes.responseLabel || defaultResponseLabel;

  let entry;
  switch (component.type) {
    case 'command':
      entry = promptLabel + component.value;
      break;
    case 'response':
      entry = responseLabel + component.value;
      break;
    case 'display':
      entry = displayLabel + component.value;
      break;
    case 'completion':
      entry = completionLabel + component.value;
      break;
    case 'error':
      entry = errorLabel + component.value;
      break;
    default:
      throw new Error('invalid component type');
  }
  return ERL_ENTRY(entry);
}

const _erlkonigConfig = {
  id: 'erlkonig',
  classes: { 'erlkonig': true, 'container': true }
};
const _consoleConfig = { id: 'erl-console' };
const _terminalConfig = { classes: { 'terminal': true }};
const _erlViewportConfig = { classes: { 'erl-viewport': true }};

export { ERLKING };
