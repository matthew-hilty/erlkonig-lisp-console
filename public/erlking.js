/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(51);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var initialize    = __webpack_require__(2);
	var interpretLisp = __webpack_require__(28);

	var promptLabel = 'Lisp> ';

	function getCandidates(prefix) {
	  return getMatches(
	    prefix,
	    interpretLisp("(keys (-get-current-env-))")[0]
	      .value
	      .slice(1, -1)
	      .split(' '));
	}

	function getMatches(prefix, words) {
	  if (!/^[-a-zA-Z0-9]+$/.test(prefix)) {
	    return [];
	  }
	  var regex = RegExp('(^|\W):' + prefix);
	  var matches = [];
	  for (var index in words) {
	    var word = words[index];
	    if (regex.test(word)) {
	      matches.push(word.slice(1));
	    }
	  }
	  return matches;
	}

	initialize({
	  nodeId: 'viewport',
	  promptLabel: promptLabel,
	  transform: interpretLisp,
	  getCandidates: getCandidates
	});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var detectCssScrollbar  = __webpack_require__(3);
	var getInitialModel     = __webpack_require__(4);
	var getInitialViewModel = __webpack_require__(9);
	var initializeControl   = __webpack_require__(12);
	var initializeView      = __webpack_require__(22);
	var render              = __webpack_require__(24);
	var scroll              = __webpack_require__(26);
	var subscribe           = __webpack_require__(27);

	function initialize(config) {
	  var root = document.getElementById(config.nodeId);
	  var initialModel = getInitialModel();
	  var promptLabel = config.promptLabel;
	  var labels = { promptLabel: promptLabel };
	  var viewModel = getInitialViewModel(labels, initialModel);

	  initializeView(root, viewModel);

	  var rootChild = root.childNodes[0];

	  var controlConfig = {
	    getCandidates: config.getCandidates,
	    promptLabel: promptLabel,
	    transform: config.transform,
	    viewport: initialModel
	  };

	  var cssScrollbarDetected = detectCssScrollbar();

	  setScrollbarVisibility(cssScrollbarDetected);

	  var _scroll = scroll(cssScrollbarDetected);

	  initializeControl(
	    subscribe,
	    render(viewModel, rootChild, controlConfig, _scroll),
	    controlConfig);
	}

	function setScrollbarVisibility(cssScrollbarDetected) {
	  if (!cssScrollbarDetected) {
	    var viewport = document.getElementsByClassName('erl-viewport')[0]
	    viewport.style.overflow = 'hidden';
	  }
	}


	module.exports = initialize;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	var _nodeId     = '#erl-css-scrollbar-test-div';
	var _prefixes   = ['-webkit-', '-moz-', '-o-', '-ms-'];
	var _pseudo     = '::';
	var _scrollbar  = 'scrollbar';
	var _width10px  = '{width:10px;}';

	function createRule(prefix) {
	  return _nodeId + _pseudo + prefix + _scrollbar + _width10px;
	}

	function _detectCssScrollbar(styleRule) {
	  var body = getBody();
	  var docElement = document.documentElement;
	  var div = document.createElement('div');
	  var node = document.createElement('div');
	  node.id = 'erl-css-scrollbar-test-div';
	  div.appendChild(node);
	  var style = document.createElement('style');
	  style.type = 'text/css';
	  style.id = 'erl-css-scrollbar-test-style';
	  var nonceNode = document.getElementById('scrollbar-nonce');
	  var nonce = nonceNode.dataset['scrollbarNonce'];
	  style.setAttribute('nonce', nonce);

	  (body.fake ? body : div).appendChild(style);

	  body.appendChild(div);

	  if (style.styleSheet) {
	    style.styleSheet.cssText = styleRule;
	  } else {
	    style.appendChild(document.createTextNode(styleRule));
	  }

	  div.id = 'erl-css-scroll-test';

	  if (body.fake) {
	    body.style.background = '';
	    body.style.overflow = 'hidden';
	    var docOverflow = docElement.style.overflow;
	    docElement.style.overflow = 'hidden';
	    docElement.appendChild(body);
	  }

	  var result = hasCssScrollbar(node, 30);

	  if (body.fake) {
	    body.parentNode.removeChild(body);
	    docElement.style.overflow = docOverflow;
	    docElement.offsetHeight;
	  } else {
	    div.parentNode.removeChild(div);
	  }

	  return result;
	}

	function detectCssScrollbar() {
	  var cssScrollbar =
	    _nodeId + '{overflow:scroll;width:40px;height:40px;}' +
	    _prefixes.map(createRule).join('') +
	    createRule('');

	  return _detectCssScrollbar(cssScrollbar);
	}

	function getBody() {
	  var _body = document.body;

	  if (!_body) {
	    var isSvg = document.documentElement.nodeName.toLowerCase() === 'svg';
	    _body = document.createElement(isSvg ? 'svg' : 'body');
	    _body.fake = true;
	  }

	  return _body;
	}

	function hasCssScrollbar(node, expectedWidth) {
	  return 'scrollWidth' in node && node.scrollWidth === expectedWidth;
	}

	module.exports = detectCssScrollbar;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var createFrame    = __webpack_require__(5);
	var createPrompt   = __webpack_require__(6);
	var createTerminal = __webpack_require__(7);
	var createViewport = __webpack_require__(8);

	function getInitialModel() {
	  return createViewport(
	    createTerminal([], [], createPrompt('', '')),
	    createFrame(0, 0, 0));
	}

	module.exports = getInitialModel;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = function (offset, start, promptIndex) {
	  return {
	    offset: offset,
	    start: start,
	    promptIndex: promptIndex
	  };
	};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = function (preCursor, postCursor) {
	  return {
	    preCursor: preCursor,
	    postCursor: postCursor
	  };
	};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = function (entries, prompts, currentPrompt) {
	  return  {
	    entries: entries,
	    prompts: prompts,
	    prompt: currentPrompt
	  };
	};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	function getPrompt(terminal, frame) {
	  return frame.promptIndex === 0
	    ? terminal.prompt
	    : terminal.prompts[frame.promptIndex - 1];
	}

	module.exports = function (terminal, frame) {
	  return {
	    terminal: terminal,
	    frame: frame,
	    prompt: getPrompt(terminal, frame)
	  };
	};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var components = __webpack_require__(10);
	var ERL_CURSOR = components.ERL_CURSOR;
	var ERL_INPUT  = components.ERL_INPUT;
	var ERL_ENTRY  = components.ERL_ENTRY;
	var ERL_POST   = components.ERL_POST;
	var ERL_PRE    = components.ERL_PRE;
	var ERL_PROMPT = components.ERL_PROMPT;

	var elements   = __webpack_require__(11);
	var DIV        = elements.DIV;
	var SECTION    = elements.SECTION;
	var SPAN       = elements.SPAN;
	var H1         = elements.H1;
	var H4         = elements.H4;

	var ERL_HEADER = SECTION(
	    {
	      id: 'erl-header',
	      classes: { 'head': true }
	    },
	    H1(null, 'Erlkönig Lisp Console\n'),
	    H4(null, 'A terminal emulator and lisp interpreter\n'));

	var emptyString = '';

	function ERLKING(prefixes, viewport) {
	  var promptLabel = prefixes.promptLabel;
	  var prompt = viewport.prompt;
	  var frame = viewport.frame;

	  var entries = viewport.terminal.entries
	    .slice(frame.start, frame.start + frame.offset)
	    .map(specifyEntry.bind(null, prefixes));

	  var preCursor = prompt.preCursor != null ? prompt.preCursor : emptyString;
	  var postCursor = prompt.postCursor != null ? prompt.postCursor : emptyString;

	  return DIV(
	    _erlkingConfig,
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

	var X_SCROLLBAR = DIV(
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

	var Y_SCROLLBAR = DIV(
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

	var defaultCompletionLabel = '  ';
	var defaultDisplayLabel = '';
	var defaultErrorLabel = '...> ';
	var defaultPromptLabel = '> ';
	var defaultResponseLabel = '==> ';

	var defaultCompletionLabel = '  ';
	var defaultDisplayLabel = '';
	var defaultErrorLabel = '...> ';
	var defaultPromptLabel = '> ';
	var defaultResponseLabel = '==> ';

	function specifyEntry(prefixes, component) {
	  var completionLabel = prefixes.completionLabel || defaultCompletionLabel;
	  var displayLabel = prefixes.displayLabel || defaultDisplayLabel;
	  var errorLabel = prefixes.errorLabel || defaultErrorLabel;
	  var promptLabel = prefixes.promptLabel || defaultPromptLabel;
	  var responseLabel = prefixes.responseLabel || defaultResponseLabel;

	  var entry;
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

	var _erlkingConfig = {
	  id: 'erlking',
	  classes: { 'erlking': true, 'container': true }
	};
	var _consoleConfig = { id: 'erl-console' };
	var _terminalConfig = { classes: { 'terminal': true }};
	var _erlViewportConfig = { classes: { 'erl-viewport': true }};

	module.exports = ERLKING;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var SPAN = __webpack_require__(11).SPAN;

	function ERL_ENTRY(text) {
	  return SPAN(_entryConfig, text + newline);
	}

	function ERL_INPUT(promptText, preText, postText) {
	  return SPAN(
	    _inputConfig,
	    ERL_PROMPT(promptText),
	    ERL_PRE(preText),
	    ERL_CURSOR,
	    ERL_POST(postText));
	}

	function ERL_POST(text) {
	  return SPAN(_postConfig, text);
	}

	function ERL_PRE(text) {
	  return SPAN(_preConfig, text);
	}

	function ERL_PROMPT(text) {
	  return SPAN(_promptConfig, text);
	}

	var emptyString = '';
	var newline = '\n';
	var space = ' ';
	var underscore = '_';

	var ERL_CURSOR = SPAN(
	  {
	    id: 'erl-cursor',
	    classes: { 'erl-cursor': true, 'erl-cursor': true },
	  },
	  underscore);

	var _entryConfig = {
	  classes: { 'erl-entry': true, 'erl-line': true },
	};

	var _inputConfig = {
	  id: 'erl-input',
	  classes: { 'erl-input': true, 'erl-line': true }
	};

	var _postConfig = {
	  id: 'erl-post',
	  classes: { 'erl-post': true },
	  style: { 'position': 'relative' }
	};

	var _preConfig = {
	   id: 'erl-pre',
	   classes: { 'erl-pre': true }
	};

	var _promptConfig = {
	  id: 'erl-prompt',
	  classes: { 'erl-prompt': true, 'erl-prompt': true }
	};

	module.exports = {
	  ERL_CURSOR : ERL_CURSOR,
	  ERL_ENTRY  : ERL_ENTRY,
	  ERL_INPUT  : ERL_INPUT,
	  ERL_POST   : ERL_POST,
	  ERL_PRE    : ERL_PRE,
	  ERL_PROMPT : ERL_PROMPT
	};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	function createElement(tag) {
	  return function (config) {
	    var element = { tag: tag };

	    if (config != null) { // isObject

	      for (var key in config) {
	        if (key === 'id') {
	          element.id = config.id;
	        }

	        if (key === 'classes') {
	          element.classes = config.classes;
	        }

	        if (key === 'style') {
	          element.style = config.style;
	        }

	        if (key === 'attribs') {
	          element.attribs = config.attribs;
	        }
	      }
	    }

	    if (arguments.length > 1) {
	      var args = [].slice.call(arguments, 1);

	      if (args.length === 1 && isString(args[0])) {
	        element.children = args[0];
	      } else {
	        element.children = [].concat.apply([], args);
	      }
	    }

	    return element;
	  };
	}

	function isString(value) {
	  return {}.toString.call(value) === '[object String]';
	}

	var tags = {
	  'A': true,
	  'BUTTON': true,
	  'CANVAS': true,
	  'CODE': true,
	  'DIV': true,
	  'FOOTER': true,
	  'FORM': true,
	  'H1': true,
	  'H2': true,
	  'H3': true,
	  'H4': true,
	  'H5': true,
	  'H6': true,
	  'HEADER': true,
	  'IMG': true,
	  'LABEL': true,
	  'LI': true,
	  'LINK': true,
	  'NAV': true,
	  'NOSCRIPT': true,
	  'OPTGROUP': true,
	  'OPTION': true,
	  'OUTPUT': true,
	  'P': true,
	  'PARAM': true,
	  'PRE': true,
	  'SCRIPT': true,
	  'SECTION': true,
	  'SELECT': true,
	  'SOURCE': true,
	  'SPAN': true,
	  'STYLE': true,
	  'TEXTAREA': true
	};

	var elementFactories = {};

	for (var tagName in tags) {
	  elementFactories[tagName] = createElement(tagName);
	}

	module.exports = elementFactories;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var getViewport      = __webpack_require__(13);
	var interpretKeydown = __webpack_require__(17);

	function initializeControl(subscribe, render, config) {
	  var handleEvent = function (getAction) {
	    return function (event) {
	      render(getViewport(getAction(event), config));
	    };
	  }

	  subscribe('keydown', handleEvent(interpretKeydown));
	}

	module.exports = initializeControl;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var Viewport = __webpack_require__(14);

	function getViewport(action, config) {
	  var command = action.name;
	  var viewport = config.viewport;
	  switch (command) {
	    case 'addChar':
	      return Viewport.addChar(viewport, action.char);
	    case 'completeWord':
	      return Viewport.completeWord(viewport, config.getCandidates);
	    case 'noOp':
	      return viewport;
	    case 'submit':
	      return Viewport.submit(viewport, config.transform);
	    default:
	      return Viewport[command](viewport);
	  }
	}

	module.exports = getViewport;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var create         = __webpack_require__(8);
	var createFrame    = __webpack_require__(5);
	var createTerminal = __webpack_require__(7);
	var Frame          = __webpack_require__(15);
	var Terminal       = __webpack_require__(16);

	function addChar(viewport, char) {
	  return create(
	    Terminal.addChar(viewport.terminal, char),
	    viewport.frame);
	}

	function completeWord(viewport, getCandidates) {
	  var frame = viewport.frame;
	  var newTerminal =
	    Terminal.completeWord(refreshTerminal(viewport), getCandidates);
	  var diff = newTerminal.entries.length - viewport.terminal.entries.length;
	  return create(
	    newTerminal,
	    createFrame(
	      frame.offset + diff,
	      frame.start,
	      0));
	}

	function clear(viewport) {
	  var terminal = viewport.terminal;
	  return create(
	    terminal,
	    Frame.clear(viewport.frame, terminal));
	}

	function fastForward(viewport) {
	  return create(
	    viewport.terminal,
	    Frame.fastForward(viewport.frame));
	}

	function modifyTerminal(fnName) {
	  return function (viewport) {
	    return create(
	      Terminal[fnName](refreshTerminal(viewport)),
	      Frame.resetPromptIndex(viewport.frame));
	  };
	}

	function refreshTerminal(viewport) {
	  var terminal = viewport.terminal;
	  return createTerminal(terminal.entries, terminal.prompts, viewport.prompt);
	}

	function rewind(viewport) {
	  var terminal = viewport.terminal;
	  return create(
	    terminal,
	    Frame.rewind(viewport.frame, terminal));
	}

	function submit(viewport, transform) {
	  var frame = viewport.frame;
	  var newTerminal = Terminal.submit(refreshTerminal(viewport), transform);
	  var diff = newTerminal.entries.length - viewport.terminal.entries.length;
	  return create(
	    newTerminal,
	    createFrame(
	      frame.offset + diff,
	      frame.start,
	      0));
	}

	module.exports = {
	  addChar             : addChar,
	  clear               : clear,
	  completeWord        : completeWord,
	  deleteLeftChar      : modifyTerminal('deleteLeftChar'),
	  deletePreCursor     : modifyTerminal('deletePreCursor'),
	  deleteRightChar     : modifyTerminal('deleteRightChar'),
	  deleteWord          : modifyTerminal('deleteWord'),
	  fastForward         : fastForward,
	  moveCursorLeft      : modifyTerminal('moveCursorLeft'),
	  moveCursorRight     : modifyTerminal('moveCursorRight'),
	  moveCursorToEnd     : modifyTerminal('moveCursorToEnd'),
	  moveCursorToStart   : modifyTerminal('moveCursorToStart'),
	  rewind              : rewind,
	  submit              : submit
	};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var create = __webpack_require__(5);

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


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var create       = __webpack_require__(7);
	var createPrompt = __webpack_require__(6);

	function addChar(terminal, char) {
	  return create(
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

	  return create(entries, terminal.prompts, prompt);
	}

	function deleteLeftChar(terminal) {
	  return create(
	    terminal.entries, 
	    terminal.prompts,
	    createPrompt(
	      terminal.prompt.preCursor.slice(0, -1),
	      terminal.prompt.postCursor));
	}

	function deletePreCursor(terminal) {
	  return create(
	    terminal.entries, 
	    terminal.prompts, 
	    createPrompt('', terminal.prompt.postCursor));
	}

	function deleteRightChar(terminal) {
	  return create(
	    terminal.entries, 
	    terminal.prompts, 
	    createPrompt(
	      terminal.prompt.preCursor,
	      terminal.prompt.postCursor.slice(1)));
	}

	function deleteWord(terminal) {
	  var preCursor = terminal.prompt.preCursor;
	  return create(
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
	    return create(
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
	    return create(
	      terminal.entries,
	      terminal.prompts,
	      createPrompt(
	        preCursor + postCursor[0],
	        postCursor.slice(1)));
	  }
	}

	function moveCursorToEnd(terminal) {
	  var prompt = terminal.prompt;
	  return create(
	    terminal.entries,
	    terminal.prompts,
	    createPrompt(prompt.preCursor + prompt.postCursor, ''));
	}

	function moveCursorToStart(terminal) {
	  var prompt = terminal.prompt;
	  return create(
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

	  return create(
	    terminal.entries.concat([command], displayEntries, response),
	    [prompt].concat(terminal.prompts),
	    createPrompt('', ''));
	}

	module.exports = {
	  addChar: addChar,
	  completeWord: completeWord,
	  deleteLeftChar: deleteLeftChar,
	  deletePreCursor: deletePreCursor,
	  deleteRightChar: deleteRightChar,
	  deleteWord: deleteWord,
	  moveCursorLeft: moveCursorLeft,
	  moveCursorRight: moveCursorRight,
	  moveCursorToEnd: moveCursorToEnd,
	  moveCursorToStart: moveCursorToStart,
	  submit: submit
	};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var getAction   = __webpack_require__(18);
	var getKeyChord = __webpack_require__(19);

	function interpretKeydown(event) {
	  return getAction(getKeyChord(event));
	}

	module.exports = interpretKeydown;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	var a = 'a';
	var e = 'e';
	var h = 'h';
	var l = 'l';
	var u = 'u';
	var w = 'w';

	var A = 'A';
	var E = 'E';
	var H = 'H';
	var L = 'L';
	var U = 'U';
	var W = 'W';

	var backspace = 'Backspace';
	var _delete   = 'Delete';
	var down      = 'ArrowDown';
	var enter     = 'Enter';
	var left      = 'ArrowLeft';
	var right     = 'ArrowRight';
	var space     = ' ';
	var spacebar  = 'Spacebar';
	var tab       = 'Tab';
	var up        = 'ArrowUp';

	var characters = [
	  space,
	  '`', '1', '2',  '3', '4',  '5', '6', '7', '8', '9', '0', '-', '=',
	  '~', '!', '@',  '#', '$',  '%', '^', '&', '*', '(', ')', '_', '+',
	  'a', 'b', 'c',  'd', 'e',  'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
	  'n', 'o', 'p',  'q', 'r',  's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
	  'A', 'B', 'C',  'D', 'E',  'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
	  'N', 'O', 'P',  'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
	  '[', ']', '\\', ';', '\'', ',', '.', '/',
	  '{', '}', '|',  ':', '"',  '<', '>', '?'
	];

	function getAction(keyChord) {
	  var value = keyChord.value;

	  if (keyChord.ctrlKey) {
	    switch (value) {
	      case a:
	      case A:
	        return wrap('moveCursorToStart');
	      case e:
	      case E:
	        return wrap('moveCursorToEnd');
	      case h:
	      case H:
	        return wrap('deleteLeftChar');
	      case l:
	      case L:
	        return wrap('clear');
	      case u:
	      case U:
	        return wrap('deletePreCursor');
	      case w:
	      case W:
	        return wrap('deleteWord');
	      default:
	        return wrap('noOp');
	    }
	  }

	  switch (value) {
	    case enter:
	      return wrap('submit');
	    case backspace:
	      return wrap('deleteLeftChar');
	    case left:
	      return wrap('moveCursorLeft');
	    case right:
	      return wrap('moveCursorRight');
	    case up:
	      return wrap('rewind');
	    case down:
	      return wrap('fastForward');
	    case _delete:
	      return wrap('deleteRightChar');
	    case tab:
	      return wrap('completeWord');
	    case space:
	    case spacebar:
	      return { name: 'addChar', char: ' ' };
	    default:
	      return isCharacter(value)
	        ? { name: 'addChar', char: value }
	        : wrap('noOp');
	  }
	}

	function isCharacter(value) {
	  return characters.indexOf(value) >= 0;
	}

	function wrap(actionName) {
	  return { name: actionName };
	}

	module.exports = getAction;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var keyCodeCharts       = __webpack_require__(20);
	var keyIdentifierCharts = __webpack_require__(21);

	function getEventProxy(kind, event) {
	  return {
	    value: event[kind],
	    altKey: event.altKey,
	    ctrlKey: event.ctrlKey,
	    shiftKey: event.shiftKey
	  };
	};

	function identity(event) {
	  return event;
	}

	function getKeyChord(event) {
	  var normalize;
	  var property;

	  if (event.key != null) {
	    property = 'key';
	    normalize = identity;
	  } else if (event.keyIdentifier != null) {
	    property = 'keyIdentifier';
	    normalize = _getKeyChord(keyIdentifierCharts);
	  } else {
	    property = 'keyCode';
	    normalize = _getKeyChord(keyCodeCharts);
	  }

	  return normalize(getEventProxy(property, event));
	}

	function _getKeyChord(conversionCharts) {
	  return function (event) {
	    return {
	      value: getKeyChordValue(conversionCharts, event.value, event.shiftKey),
	      altKey: event.altKey,
	      ctrlKey: event.ctrlKey,
	      shiftKey: event.shiftKey
	    };
	  };
	}

	function getKeyChordValue(conversionCharts, value, shiftKey) {
	  var key = shiftKey ? 'withShift' : 'withoutShift';
	  return conversionCharts[key][value];
	}

	module.exports = getKeyChord;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	var keyCodeCharts = {
	  withShift: {
	    8  : 'Backspace',
	    9  : 'Tab',
	    13 : 'Enter',
	    32 : ' ',
	    37 : 'ArrowLeft',
	    38 : 'ArrowUp',
	    39 : 'ArrowRight',
	    40 : 'ArrowDown',
	    46 : 'Delete',
	    48 : ')',
	    49 : '!',
	    50 : '@',
	    51 : '#',
	    52 : '$',
	    53 : '%',
	    54 : '^',
	    55 : '&',
	    56 : '*',
	    57 : '(',
	    59 : ':',
	    61 : '+',
	    65 : 'A',
	    66 : 'B',
	    67 : 'C',
	    68 : 'D',
	    69 : 'E',
	    70 : 'F',
	    71 : 'G',
	    72 : 'H',
	    73 : 'I',
	    74 : 'J',
	    75 : 'K',
	    76 : 'L',
	    77 : 'M',
	    78 : 'N',
	    79 : 'O',
	    80 : 'P',
	    81 : 'Q',
	    82 : 'R',
	    83 : 'S',
	    84 : 'T',
	    85 : 'U',
	    86 : 'V',
	    87 : 'W',
	    88 : 'X',
	    89 : 'Y',
	    90 : 'Z',
	    173: '_',
	    188: '<',
	    190: '>',
	    191: '?',
	    192: '~',
	    219: '{',
	    220: '|',
	    221: '}',
	    222: '"'
	  },
	  withoutShift: {
	    8  : 'Backspace',
	    9  : 'Tab',
	    13 : 'Enter',
	    32 : ' ',
	    37 : 'ArrowLeft',
	    38 : 'ArrowUp',
	    39 : 'ArrowRight',
	    40 : 'ArrowDown',
	    46 : 'Delete',
	    48: '0',
	    49: '1',
	    50: '2',
	    51: '3',
	    52: '4',
	    53: '5',
	    54: '6',
	    55: '7',
	    56: '8',
	    57: '9',
	    59: ';',
	    61: '=',
	    65: 'a',
	    66: 'b',
	    67: 'c',
	    68: 'd',
	    69: 'e',
	    70: 'f',
	    71: 'g',
	    72: 'h',
	    73: 'i',
	    74: 'j',
	    75: 'k',
	    76: 'l',
	    77: 'm',
	    78: 'n',
	    79: 'o',
	    80: 'p',
	    81: 'q',
	    82: 'r',
	    83: 's',
	    84: 't',
	    85: 'u',
	    86: 'v',
	    87: 'w',
	    88: 'x',
	    89: 'y',
	    90: 'z',
	    173: '-',
	    188: ',',
	    190: '.',
	    191: '/',
	    192: '`',
	    219: '[',
	    220: '\\',
	    221: ']',
	    222: '\''
	  }
	};

	module.exports = keyCodeCharts;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	var keyIdentifierCharts = {
	  withoutShift: {
	    'U+0041': 'a',
	    'U+0042': 'b',
	    'U+0043': 'c',
	    'U+0044': 'd',
	    'U+0045': 'e',
	    'U+0046': 'f',
	    'U+0047': 'g',
	    'U+0048': 'h',
	    'U+0049': 'i',
	    'U+004A': 'j',
	    'U+004B': 'k',
	    'U+004C': 'l',
	    'U+004D': 'm',
	    'U+004E': 'n',
	    'U+004F': 'o',
	    'U+0050': 'p',
	    'U+0051': 'q',
	    'U+0052': 'r',
	    'U+0053': 's',
	    'U+0054': 't',
	    'U+0055': 'u',
	    'U+0056': 'v',
	    'U+0057': 'w',
	    'U+0058': 'x',
	    'U+0059': 'y',
	    'U+005A': 'z',
	    'U+0030': '0',
	    'U+0031': '1',
	    'U+0032': '2',
	    'U+0033': '3',
	    'U+0034': '4',
	    'U+0035': '5',
	    'U+0036': '6',
	    'U+0037': '7',
	    'U+0038': '8',
	    'U+0039': '9',
	    'U+00C0': '`',
	    'U+00BD': '-',
	    'U+00BB': '=',
	    'U+00DB': '[',
	    'U+00DD': ']',
	    'U+00DC': '\\',
	    'U+00BA': ';',
	    'U+00DE': '\'',
	    'U+00BC': ',',
	    'U+00BE': '.',
	    'U+00BF': '/',
	    'U+0020': ' ',
	    'U+0008': 'Backspace',
	    'U+0075': 'Delete',
	    'Down'  : 'ArrowDown',
	    'Enter' : 'Enter',
	    'Left'  : 'ArrowLeft',
	    'Right' : 'ArrowRight',
	    'U+0020': ' ',
	    'U+0009': 'Tab',
	    'Up'    : 'ArrowUp'
	  },
	  withShift: {
	    'U+0041': 'A',
	    'U+0042': 'B',
	    'U+0043': 'C',
	    'U+0044': 'D',
	    'U+0045': 'E',
	    'U+0046': 'F',
	    'U+0047': 'G',
	    'U+0048': 'H',
	    'U+0049': 'I',
	    'U+004A': 'J',
	    'U+004B': 'K',
	    'U+004C': 'L',
	    'U+004D': 'M',
	    'U+004E': 'N',
	    'U+004F': 'O',
	    'U+0050': 'P',
	    'U+0051': 'Q',
	    'U+0052': 'R',
	    'U+0053': 'S',
	    'U+0054': 'T',
	    'U+0055': 'U',
	    'U+0056': 'V',
	    'U+0057': 'W',
	    'U+0058': 'X',
	    'U+0059': 'Y',
	    'U+005A': 'Z',
	    'U+0030': ')',
	    'U+0031': '!',
	    'U+0032': '@',
	    'U+0033': '#',
	    'U+0034': '$',
	    'U+0035': '%',
	    'U+0036': '^',
	    'U+0037': '&',
	    'U+0038': '*',
	    'U+0039': '(',
	    'U+00C0': '~',
	    'U+00BD': '_',
	    'U+00BB': '+',
	    'U+00DB': '{',
	    'U+00DD': '}',
	    'U+00DC': '|',
	    'U+00BA': ':',
	    'U+00DE': '"',
	    'U+00BC': '<',
	    'U+00BE': '>',
	    'U+00BF': '?',
	    'U+0020': ' ',
	    'U+0008': 'Backspace',
	    'U+0075': 'Delete',
	    'Down'  : 'ArrowDown',
	    'Enter' : 'Enter',
	    'Left'  : 'ArrowLeft',
	    'Right' : 'ArrowRight',
	    'U+0020': ' ',
	    'U+0009': 'Tab',
	    'Up'    : 'ArrowUp'
	  }
	};

	module.exports = keyIdentifierCharts


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var createAndAttachElement =
	  __webpack_require__(23).createAndAttachElement;

	function initializeView(root, viewModel) {
	  createAndAttachElement(root, viewModel);
	}

	module.exports = initializeView;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	function attachElement(parent, element) {
	  if (isString(element)) {
	    parent.innerText = element; // ?
	  } else {
	    parent.appendChild(element);
	  }
	}

	function replaceElement(parent, newElement, oldElement) {
	  if (isString(newElement)) {
	    parent.innerText = newElement; // ?
	  } else {
	    parent.replaceChild(newElement, oldElement);
	  }
	}

	function createAndAttachElement(parent, config) {
	  attachElement(parent, createElement(config));
	}

	function createAndSubstituteElement(parent, config, oldElementIndex) {
	  replaceElement(
	    parent,
	    createElement(config),
	    findChild(parent, { mode: 'index', key: oldElementIndex }));
	}

	function createAndAttachElements(node, elements) {
	  for (var i = 0; i < elements.length; i++) {
	    createAndAttachElement(node, elements[i]);
	  }
	}

	function createElement(config) {
	  if (isString(config)) {
	    return config;
	  }
	  var node = document.createElement(config.tag);
	  if (config.id != null) {
	    node.id = config.id;
	  }
	  if (config.classes != null) {
	    for (var klass in config.classes) {
	      node.classList.add(klass);
	    }
	  }
	  if (config.attribs != null) {
	    for (var attribKey in config.attribs) {
	      if (attribKey !== 'style') {
	        node.setAttribute(attribKey, config.attribs[attribKey]);
	      }
	    }
	  }
	  if (config.style != null) {
	    for (var styleKey in config.style) {
	      node.style[styleKey] = config.style[styleKey];
	    }
	  }
	  if (config.children != null) {
	    if (isString(config.children)) {
	      createAndAttachElement(node, config.children);
	    } else {
	      config.children.forEach(function (newConfig, index) { 
	        createAndAttachElement(node, newConfig);
	      });
	    }
	  }
	  return node;
	}

	function findChild(parent, config) {
	  switch (config.mode) {
	    case 'id':
	      return document.getElementById(config.key);
	    case 'class':
	      return parent.getElementsByClassName(config.key.class)[config.key.index];
	    case 'tag':
	      return parent.getElementsByTagName(config.key.tag)[config.key.index];
	    case 'query':
	      return parent.querySelectorAll(config.key.query)[config.key.index];
	    case 'index':
	      return parent.childNodes[config.key];
	    default:
	      throw new Error('Invalid \"findChild\" mode');
	  }
	}

	function findChildren(parent, config) {
	  var htmlCollection;
	  switch (config.mode) {
	    case 'class':
	      htmlCollection = parent.getElementsByClassName(config.key.class);
	      break;
	    case 'tag':
	      htmlCollection = parent.getElementsByTagName(config.key.tag);
	      break;
	    case 'query':
	      htmlCollection = parent.querySelectorAll(config.key.query);
	      break;
	    default:
	      throw new Error('Invalid \"findChild\" mode');
	  }
	  return Array.prototype.slice.call(htmlCollection);
	}

	function isCommandIndex(value) {
	  return isNumber(value);
	}

	function isNumber(value) {
	  return {}.toString.call(value) === '[object Number]';
	}

	function isString(value) {
	  return {}.toString.call(value) === '[object String]';
	}

	function modifyElement(node, patch) {
	  _modifyElement(node, patch.value, patch.commands);
	}

	function _modifyElement(node, tree, commands) {
	  for (var i = 0; i < tree.length; i++) {
	    var key = tree[i].index;
	    var continuation = tree[i].value;

	    switch (key) {
	      case 'id':
	        var command = commands[continuation];
	        switch (command[0]) {
	          case 'delete':
	            node.removeAttribute('id');
	            break;
	          case 'replace':
	          case 'setAtKey':
	            node.id = command[1];
	            break;
	        }
	        break;

	      case 'tag':
	        break;

	      case 'style':
	        for (var styleIndex = 0; styleIndex < continuation.length; styleIndex++) {
	          var style = continuation[styleIndex].index;
	          var command = commands[continuation[styleIndex].value];
	          switch (command[0]) {
	            case 'delete':
	              node.style.removeProperty(style);
	              break;
	            case 'replace':
	            case 'setAtKey':
	              node.style[style] = command[1];
	              break;
	          }
	        }
	        break;

	      case 'attribs':
	        for (var attribIndex = 0; attribIndex < continuation.length; attribIndex++) {
	          var attrib = continuation[attribIndex].index;
	          var command = commands[continuation[attribIndex].value];
	          switch (command[0]) {
	            case 'delete':
	              node.attributes.removeNamedItem(attrib);
	              break;
	            case 'replace':
	            case 'setAtKey':
	              node.setAttribute(attrib, command[1]);
	              break;
	          }
	        }
	        break;

	      case 'classes':
	        if (isCommandIndex(continuation)) {
	          var command = commands[0];
	          switch (command[0]) {
	            case 'delete':
	              for (var _class in command[1]) {
	                node.classList.remove(_class);
	              }
	              break;
	            case 'setAtKey':
	              for (var _class in command[1]) {
	                node.classList.add(_class);
	              }
	              break;
	          }
	        } else {
	          for (var classIndex = 0; classIndex < continuation.length; classIndex++) {
	            var _class = continuation[classIndex].index;
	            var command = commands[continuation[classIndex].value];
	            switch (command[0]) {
	              case 'delete':
	                node.classList.remove(_class);
	                break;
	              case 'setAtKey':
	                node.classList.add(_class);
	                break;
	            }
	          }
	        }
	        break;

	      case 'children':
	        if (isCommandIndex(continuation)) {
	          var command = commands[continuation]
	          switch (command[0]) {
	            case 'remove':
	              removeChildren(node);
	              break;
	            case 'replace':     // ?
	              if (isString(command[1])) {
	                if (node.childElementCount === 0) {
	                  node.innerText = command[1];
	                } else {
	                  node.innerText = command[1];
	                }
	              } else {
	                removeChildren(node);
	                createAndAttachElements(node, command[1]);
	              }
	              break;
	            case 'insertAtEnd':
	              createAndAttachElement(node, command[1]);
	              break;
	          }
	        } else {
	          for (var childIndex = 0; childIndex < continuation.length; childIndex++) {
	            var child = continuation[childIndex].index;
	            var childContinuation = continuation[childIndex].value;
	            if (isCommandIndex(childContinuation)) {
	              var command = commands[childContinuation]
	              switch (command[0]) {
	                case 'remove':
	                  removeChild(node, child);
	                  break;
	                case 'replace':
	                  createAndSubstituteElement(node, command[1], child);
	                  break;
	                case 'insertAtEnd':
	                  createAndAttachElement(node, command[1]);
	                  break;
	              }
	            } else {
	              _modifyElement(node.childNodes[child], childContinuation, commands);
	            }
	          }
	        }
	        break;
	    }
	  }
	}

	function removeChild(node, childIndex) {
	  removeNode(findChild(node, { mode: 'index', key: childIndex }));
	}

	function removeChildren(node) {
	  var childCount = node.childNodes.length;
	  for (var i = childCount - 1; i >= 0; i--) {
	    node.removeChild(node.childNodes[i]);
	  }
	}

	function removeNode(node) {
	  node.parentNode.removeChild(node);
	}

	module.exports = {
	  createAndAttachElement: createAndAttachElement,
	  modifyElement: modifyElement,
	};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var diff          = __webpack_require__(25);
	var getViewModel  = __webpack_require__(9);
	var modifyElement = __webpack_require__(23).modifyElement;

	function render(_viewModel, rootChild, controlConfig, scroll) {
	  var viewModel = _viewModel;
	  return function (model) {
	    var labels = { promptLabel: controlConfig.promptLabel };
	    var newViewModel = getViewModel(labels, model);
	    modifyElement(rootChild, diff(newViewModel, viewModel));

	    controlConfig.viewport = model;
	    viewModel = newViewModel;

	    scroll();
	  };
	}

	module.exports = render;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	function diffArray(value1, value0, index) {
	  if (!Array.isArray(value0)) {
	    return { tree: index, commands: [['replace', value1]], index: index + 1 };
	  }

	  var count = 0;
	  var length1 = value1.length;
	  var length0 = value0.length;
	  var minLength = Math.min(length1, length0);

	  if (minLength > 1) {
	    for (var j = 0; j < minLength; j++) {
	      if (value1[j] !== value0[j]) {
	        count++;
	      }
	    }

	    if (count === minLength) {
	      return { tree: index, commands: [['replace', value1]], index: index + 1 };
	    }
	  }

	  var i = 0;
	  var tree = [];
	  var commands = [];

	  for (; i < minLength; i++) {
	    if (value1[i] !== value0[i]) {
	      var _patch = _diff(value1[i], value0[i], index);
	      if (_patch.commands.length > 0) {
	        tree.push({ index: i, value: _patch.tree });
	        commands = commands.concat(_patch.commands);
	        index = index + _patch.commands.length;
	      }
	    }
	  }

	  for (; i < length1; i++) {
	    tree.push({ index: i, value: index });
	    commands.push(['insertAtEnd', value1[i]]);
	    index++;
	  }

	  var removals = [];

	  for (; i < length0; i++) {
	    removals.unshift({ index: i, value: index });
	    commands.push(['remove']);
	    index++;
	  }

	  tree = tree.concat(removals);

	  return { tree: tree, commands: commands, index: index };
	}

	function diffObject(value1, value0, index) {
	  if (!isObject(value0)) {
	    return {
	      tree: index,
	      commands: [['replace', value1]],
	      index: index + 1
	    };
	  }

	  var keyCount = 0;
	  var diffCount = 0;

	  for (var key in value0) {
	    if (!value0.hasOwnProperty(key)) continue;
	    keyCount++;
	    if (!value1.hasOwnProperty(key) || value1[key] !== value0[key]) {
	      diffCount++;
	    }
	  }

	  if (keyCount > 1 && keyCount === diffCount) {
	    return { tree: index, commands: [['replace', value1]], index: index + 1 };
	  }

	  var tree = [];
	  var commands = [];

	  for (var key in value1) {
	    if (!value1.hasOwnProperty(key)) continue;
	    if (value0.hasOwnProperty(key)) {
	      if (value1[key] !== value0[key]) {
	        var _patch = _diff(value1[key], value0[key], index);
	        if (_patch.commands.length > 0) {
	          tree.push({ index: key, value: _patch.tree });
	          commands = commands.concat(_patch.commands);
	          index = index + _patch.commands.length;
	        }
	      }
	    } else {
	      tree.push({ index: key, value: index });
	      commands.push(['setAtKey', value1[key]]);
	      index++;
	    }
	  }

	  for (var key in value0) {
	    if (!value1.hasOwnProperty(key)) {
	      tree.push({ index: key, value: index });
	      commands.push(['delete']);
	      index++;
	    }
	  }

	  return { tree: tree, commands: commands, index: index };
	}

	function _diff(value1, value0, index) {
	  if (value1 === value0) {
	    return { tree: [], commands: [], index: index };
	  }

	  if (Array.isArray(value1)) {
	    return diffArray(value1, value0, index);
	  }

	  if (isObject(value1)) {
	    return diffObject(value1, value0, index);
	  }

	  return { tree: index, commands: [['replace', value1]], index: index + 1 };
	}

	var diff = function(value1, value0) {
	  var patch = _diff(value1, value0, 0);
	  return { value: patch.tree, commands: patch.commands };
	};

	function isObject(value) {
	  return {}.toString.call(value) === '[object Object]';
	}

	module.exports = diff;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	function getCursorOffset(cursor, node) {
	  var margin = 5;
	  return cursor.offsetLeft + cursor.offsetWidth + margin - node.offsetWidth;
	}

	function getElement(id) {
	  return document.getElementById(id);
	}

	function getPercentage(number) {
	  return (100 * number) + '%';
	}

	function getViewport() {
	  return document.getElementsByClassName('erl-viewport')[0];
	}

	function onEvent(eventName, callback) {
	  document.addEventListener(eventName, callback);
	}

	function _scroll(node, cursor) {
	  node.scrollTop = node.scrollHeight - node.clientHeight;
	  node.scrollLeft = getCursorOffset(cursor, node);
	}

	function scroll(cssScrollbarDetected) {
	  if (cssScrollbarDetected) {
	    return function () {
	      var cursor = getElement('erl-cursor');
	      _scroll(getViewport(), cursor);
	    };
	  }

	  return function () {
	    var viewport = getViewport();
	    var cursor = getElement('erl-cursor');
	    var xTrack = getElement('erl-x-scroll-track');
	    var xThumb = getElement('erl-x-scroll-thumb');
	    var yTrack = getElement('erl-y-scroll-track');
	    var yThumb = getElement('erl-y-scroll-thumb');
	    var prompt = getElement('erl-prompt');

	    var viewportWidth = viewport.offsetWidth;
	    var viewportHeight = viewport.offsetHeight;

	    setXThumbVisibility(viewport, viewportWidth, xTrack, xThumb, cursor, prompt);
	    setYThumbVisibility(viewport, viewportHeight, yTrack, yThumb, cursor);
	    scrollHorizontally(viewport, viewportWidth, xTrack, xThumb);
	    scrollVertically(viewport, viewportHeight, yTrack, yThumb);

	    _scroll(viewport, cursor);
	  };
	}

	function scrollBarHorizontally(xThumb, leftRatio) {
	  xThumb.style.left = getPercentage(leftRatio);
	}

	function scrollBarVertically(yThumb, topRatio) {
	  yThumb.style.top = getPercentage(topRatio);
	}

	function scrollContentHorizontally(viewport, leftRatio) {
	  viewport.scrollLeft = leftRatio * viewport.scrollWidth;
	}

	function scrollContentVertically(viewport, topRatio) {
	  viewport.scrollTop = topRatio * viewport.scrollHeight;
	}

	function scrollVertically(viewport, viewportHeight, yTrack, yThumb) {
	  var yThumbHeight = yThumb.offsetHeight;
	  var yTrackHeight = yTrack.offsetHeight;
	  var ullage = yTrackHeight - yThumbHeight;

	  function mouseMove_vertical(event) {
	    var _top = event.clientY - yTrack.getBoundingClientRect().top;
	    var top = _top < 0 ? 0 : _top > ullage ? ullage : _top;
	    var topRatio = top / yTrackHeight;
	    scrollBarVertically(yThumb, topRatio);
	    scrollContentVertically(viewport, topRatio);
	  };

	  function mouseDown_vertical(event) {
	    yThumb.style.backgroundColor = 'rgb(0, 80, 0)';
	    onEvent('mousemove', mouseMove_vertical);
	    onEvent('mouseup', mouseUp_vertical);
	  };

	  function mouseUp_vertical(event) {
	    yThumb.style.backgroundColor = 'rgba(55, 53, 50, 0.5)';
	    document.removeEventListener('mousemove', mouseMove_vertical);
	    document.removeEventListener('mouseup', mouseUp_vertical);
	  };

	  yThumb.removeEventListener('mousedown', mouseDown_vertical);
	  yThumb.addEventListener('mousedown', mouseDown_vertical);
	}

	function scrollHorizontally(viewport, viewportWidth, xTrack, xThumb) {
	  var xThumbWidth = xThumb.offsetWidth;
	  var xTrackWidth = xTrack.offsetWidth;
	  var ullage = xTrackWidth - xThumbWidth;

	  function mouseMove_horizontal(event) {
	    var _left = event.clientX - xTrack.getBoundingClientRect().left;
	    var left = _left < 0 ? 0 : _left > ullage ? ullage : _left;
	    var leftRatio = left / xTrackWidth;
	    scrollBarHorizontally(xThumb, leftRatio);
	    scrollContentHorizontally(viewport, leftRatio);
	  };

	  function mouseUp_horizontal(event) {
	    xThumb.style.backgroundColor = 'rgba(55, 53, 50, 0.5)';
	    document.removeEventListener('mousemove', mouseMove_horizontal);
	    document.removeEventListener('mouseup', mouseUp_horizontal);
	  };

	  function mouseDown_horizontal(event) {
	    xThumb.style.backgroundColor = 'rgb(0, 80, 0)';
	    onEvent('mousemove', mouseMove_horizontal);
	    onEvent('mouseup', mouseUp_horizontal);
	  };

	  xThumb.removeEventListener('mousedown', mouseDown_horizontal);
	  xThumb.addEventListener('mousedown', mouseDown_horizontal);
	}

	function setXThumbVisibility(viewport, viewportWidth, xTrack, xThumb, cursor, prompt) {
	  var xTrackWidth = xTrack.offsetWidth;
	  var terminalWidth = viewport.scrollWidth;
	  var xThumbStyle = xThumb.style;

	  if (viewportWidth < terminalWidth) {
	    var fullPromptOffsetWidth = prompt.offsetLeft + prompt.offsetWidth;
	    var start = fullPromptOffsetWidth;
	    var viewportRatio = viewportWidth / terminalWidth;
	    var xThumbWidth = viewportRatio * xTrackWidth;
	    var viewportPercentage = getPercentage(viewportRatio);
	    var ullage = xTrackWidth - xThumbWidth;
	    var xPosition = cursor.offsetLeft + cursor.offsetWidth - start;
	    var cursorRatio = (xPosition / terminalWidth) * (ullage / xTrackWidth);
	    var cursorPercentage = getPercentage(cursorRatio);

	    xThumbStyle.left = cursorPercentage;
	    xThumbStyle.width = viewportPercentage;
	    xThumbStyle.visibility = 'visible';
	  } else {
	    xThumbStyle.left = 0;
	    xThumbStyle.width = '100%';
	    xThumbStyle.visibility = 'hidden';
	  }
	}

	function setYThumbVisibility(viewport, viewportHeight, yTrack, yThumb, cursor) {
	  var yTrackHeight = yTrack.offsetHeight;
	  var terminalHeight = viewport.scrollHeight;
	  var yThumbStyle = yThumb.style;

	  if (viewportHeight < terminalHeight) {
	    var start = viewport.offsetTop;
	    var viewportRatio = viewportHeight / terminalHeight;
	    var yThumbHeight = viewportRatio * yTrackHeight;
	    var viewportPercentage = getPercentage(viewportRatio);
	    var ullage = yTrackHeight - yThumbHeight;
	    var yPosition = cursor.offsetTop + cursor.offsetHeight - start;
	    var cursorRatio = (yPosition / terminalHeight) * (ullage / yTrackHeight);
	    var cursorPercentage = getPercentage(cursorRatio);

	    yThumbStyle.top = cursorPercentage;
	    yThumbStyle.height = viewportPercentage;
	    yThumbStyle.visibility = 'visible';
	  } else {
	    yThumbStyle.top = 0;
	    yThumbStyle.height = '100%';
	    yThumbStyle.visibility = 'hidden';
	  }
	}

	module.exports = scroll;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	function subscribe(eventType, eventHandler) {
	  window.addEventListener(eventType, supressDefault(eventHandler));
	}

	function supressDefault(handleEvent) {
	  return function (event) {
	    event.preventDefault();
	    handleEvent(event);
	  };
	}

	module.exports = subscribe;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var circumpendQuotes, createErlString, encapsulate, environment, error, flattenIfNecessary, fromArray, getLispEnvironment, interpret, serialize, standardFnsAndMacros, tokenizeAndParse, _createErlString, _interpret, _process, _serialize,
	  __hasProp = {}.hasOwnProperty;

	circumpendQuotes = __webpack_require__(29).circumpendQuotes;

	createErlString = __webpack_require__(30).createErlString;

	fromArray = __webpack_require__(31).fromArray;

	getLispEnvironment = __webpack_require__(33);

	_process = __webpack_require__(44);

	_serialize = __webpack_require__(37);

	standardFnsAndMacros = __webpack_require__(50);

	tokenizeAndParse = __webpack_require__(47);

	_createErlString = function(jsString) {
	  return createErlString(circumpendQuotes(jsString));
	};

	encapsulate = function(type) {
	  return function(erlValue) {
	    return {
	      effect: {
	        type: type
	      },
	      value: erlValue
	    };
	  };
	};

	error = function(errorMessage) {
	  return [encapsulate('error')("repl error: (" + errorMessage + ")")];
	};

	flattenIfNecessary = function(effects) {
	  var result, value;
	  result = effects;
	  while (result.length === 1 && Array.isArray(value = result[0].value)) {
	    result = flattenIfNecessary(value);
	  }
	  return result;
	};

	_interpret = function(envs, jsString) {
	  var e;
	  try {
	    return serialize(flattenIfNecessary(_process(tokenizeAndParse)(envs)(jsString)));
	  } catch (_error) {
	    e = _error;
	    return error(e);
	  }
	};

	interpret = function(jsString, userJsArray) {
	  var userEnv;
	  if (userJsArray != null) {
	    userEnv = {
	      '*ARGV*': fromArray(userJsArray.map(_createErlString))
	    };
	    return _interpret([userEnv, environment], jsString);
	  } else {
	    return _interpret([environment], jsString);
	  }
	};

	serialize = function(results) {
	  return results.map(function(result) {
	    var key, value, _result;
	    _result = {};
	    for (key in result) {
	      if (!__hasProp.call(result, key)) continue;
	      value = result[key];
	      if (key === 'effect') {
	        _result[key] = value;
	      } else {
	        _result[key] = _serialize(value);
	      }
	    }
	    return _result;
	  });
	};

	environment = getLispEnvironment({
	  display: encapsulate('display')
	});

	interpret(standardFnsAndMacros);

	module.exports = interpret;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	var circumpendQuotes, jsNaN_question_, jsNumber_question_, jsString_question_;

	circumpendQuotes = function(jsString) {
	  return '"' + jsString + '"';
	};

	jsNaN_question_ = function(val) {
	  return jsNumber_question_(val) && val !== val;
	};

	jsNumber_question_ = function(val) {
	  return {}.toString.call(val) === '[object Number]';
	};

	jsString_question_ = function(jsVal) {
	  return Object.prototype.toString.call(jsVal) === '[object String]';
	};

	module.exports = {
	  circumpendQuotes: circumpendQuotes,
	  jsNaN_question_: jsNaN_question_,
	  jsNumber_question_: jsNumber_question_,
	  jsString_question_: jsString_question_
	};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var createErlAtom, createErlBoolean, createErlCoreEffectfulFunction, createErlCorePureFunction, createErlIdentifier, createErlIgnore, createErlIndex, createErlKeyword, createErlList, createErlMacro, createErlNil, createErlNumber, createErlSpecialForm, createErlString, createErlSymbol, createErlUserPureFunction, createErlValue, createPredicate, create_hyphen_factory_hyphen__ampersand__hyphen_predicate, erlAtomType, erlAtom_question_, erlBoolean_question_, erlCoreEffectfulFunction_question_, erlCorePureFunction_question_, erlFalse, erlFalse_question_, erlIdentifier_question_, erlIgnore, erlIgnore_question_, erlIndex_question_, erlKeyword_question_, erlList_question_, erlMacro_question_, erlNil, erlNil_question_, erlNumber_question_, erlSpecialForm_question_, erlString_question_, erlSymbol_question_, erlTrue, erlTrue_question_, erlTypes, erlUserPureFunction_question_, extractJsValue, _createErlAtom, _createErlBoolean, _createErlList, _createErlUnit, _erlUnit_question_, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;

	createErlList = __webpack_require__(31).createErlList;

	erlAtomType = __webpack_require__(32).erlAtomType;

	erlTypes = __webpack_require__(32).erlTypes;

	create_hyphen_factory_hyphen__ampersand__hyphen_predicate = function(erlType) {
	  var factory, predicate;
	  factory = function(jsValue) {
	    return createErlValue(jsValue, erlType);
	  };
	  predicate = function(erlValue) {
	    return erlValue.type === erlType;
	  };
	  return [factory, predicate];
	};

	createErlAtom = function(erlValue) {
	  return {
	    erlValue: erlValue,
	    type: erlAtomType
	  };
	};

	createErlBoolean = function(jsBoolean) {
	  if (jsBoolean) {
	    return erlTrue;
	  } else {
	    return erlFalse;
	  }
	};

	createErlIgnore = function() {
	  return erlIgnore;
	};

	createErlNil = function() {
	  return erlNil;
	};

	createErlValue = function(jsValue, erlType) {
	  return {
	    jsValue: jsValue,
	    type: erlType
	  };
	};

	createPredicate = function(constant) {
	  return function(value) {
	    return value === constant;
	  };
	};

	extractJsValue = function(erlValue) {
	  return erlValue.jsValue;
	};

	_ref = erlTypes.map(create_hyphen_factory_hyphen__ampersand__hyphen_predicate), (_ref1 = _ref[0], _createErlBoolean = _ref1[0], erlBoolean_question_ = _ref1[1]), (_ref2 = _ref[1], createErlCoreEffectfulFunction = _ref2[0], erlCoreEffectfulFunction_question_ = _ref2[1]), (_ref3 = _ref[2], createErlCorePureFunction = _ref3[0], erlCorePureFunction_question_ = _ref3[1]), (_ref4 = _ref[3], createErlIdentifier = _ref4[0], erlIdentifier_question_ = _ref4[1]), (_ref5 = _ref[4], createErlIndex = _ref5[0], erlIndex_question_ = _ref5[1]), (_ref6 = _ref[5], createErlKeyword = _ref6[0], erlKeyword_question_ = _ref6[1]), (_ref7 = _ref[6], _createErlList = _ref7[0], erlList_question_ = _ref7[1]), (_ref8 = _ref[7], createErlMacro = _ref8[0], erlMacro_question_ = _ref8[1]), (_ref9 = _ref[8], createErlNumber = _ref9[0], erlNumber_question_ = _ref9[1]), (_ref10 = _ref[9], createErlSpecialForm = _ref10[0], erlSpecialForm_question_ = _ref10[1]), (_ref11 = _ref[10], createErlString = _ref11[0], erlString_question_ = _ref11[1]), (_ref12 = _ref[11], createErlSymbol = _ref12[0], erlSymbol_question_ = _ref12[1]), (_ref13 = _ref[12], _createErlUnit = _ref13[0], _erlUnit_question_ = _ref13[1]), (_ref14 = _ref[13], createErlUserPureFunction = _ref14[0], erlUserPureFunction_question_ = _ref14[1]), (_ref15 = _ref[14], _createErlAtom = _ref15[0], erlAtom_question_ = _ref15[1]);

	erlIgnore = _createErlUnit(null);

	erlNil = _createErlUnit(null);

	_ref16 = [false, true].map(_createErlBoolean), erlFalse = _ref16[0], erlTrue = _ref16[1];

	_ref17 = [erlFalse, erlIgnore, erlNil, erlTrue].map(createPredicate), erlFalse_question_ = _ref17[0], erlIgnore_question_ = _ref17[1], erlNil_question_ = _ref17[2], erlTrue_question_ = _ref17[3];

	module.exports = {
	  createErlAtom: createErlAtom,
	  createErlBoolean: createErlBoolean,
	  createErlCoreEffectfulFunction: createErlCoreEffectfulFunction,
	  createErlCorePureFunction: createErlCorePureFunction,
	  createErlIdentifier: createErlIdentifier,
	  createErlIgnore: createErlIgnore,
	  createErlIndex: createErlIndex,
	  createErlKeyword: createErlKeyword,
	  createErlList: createErlList,
	  createErlMacro: createErlMacro,
	  createErlNil: createErlNil,
	  createErlNumber: createErlNumber,
	  createErlSpecialForm: createErlSpecialForm,
	  createErlString: createErlString,
	  createErlSymbol: createErlSymbol,
	  createErlUserPureFunction: createErlUserPureFunction,
	  extractJsValue: extractJsValue,
	  erlAtom_question_: erlAtom_question_,
	  erlBoolean_question_: erlBoolean_question_,
	  erlCoreEffectfulFunction_question_: erlCoreEffectfulFunction_question_,
	  erlCorePureFunction_question_: erlCorePureFunction_question_,
	  erlFalse: erlFalse,
	  erlFalse_question_: erlFalse_question_,
	  erlIdentifier_question_: erlIdentifier_question_,
	  erlIgnore: erlIgnore,
	  erlIgnore_question_: erlIgnore_question_,
	  erlIndex_question_: erlIndex_question_,
	  erlKeyword_question_: erlKeyword_question_,
	  erlList_question_: erlList_question_,
	  erlMacro_question_: erlMacro_question_,
	  erlNil: erlNil,
	  erlNil_question_: erlNil_question_,
	  erlNumber_question_: erlNumber_question_,
	  erlSpecialForm_question_: erlSpecialForm_question_,
	  erlString_question_: erlString_question_,
	  erlSymbol_question_: erlSymbol_question_,
	  erlTrue: erlTrue,
	  erlTrue_question_: erlTrue_question_,
	  erlUserPureFunction_question_: erlUserPureFunction_question_
	};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var EOL, car, cdr, concat, cons, copy, createErlList, createNode, drop, empty_question_, equal_question_, erlListType, erlTypes, filter, forEach, fromArray, last, lastTail, map, next, recurse, reduce, reduceBy2, reverse, take, toArray, toPartialArray, zip, _EOL,
	  __slice = [].slice;

	erlTypes = __webpack_require__(32).erlTypes;

	erlListType = erlTypes[6];

	car = function(erlList) {
	  if (empty_question_(erlList)) {
	    return EOL;
	  } else {
	    return erlList.value;
	  }
	};

	cdr = function(erlList) {
	  if (empty_question_(erlList)) {
	    return EOL;
	  } else {
	    return erlList.next;
	  }
	};

	concat = function() {
	  var erlList, erlLists, result, tail, _copy, _i, _len, _ref;
	  erlLists = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  if (erlLists.length === 0) {
	    return EOL;
	  }
	  result = copy(erlLists[0]);
	  tail = lastTail(result);
	  _ref = erlLists.slice(1);
	  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	    erlList = _ref[_i];
	    _copy = copy(erlList);
	    if (empty_question_(tail)) {
	      result = _copy;
	      tail = lastTail(result);
	      continue;
	    }
	    if (!empty_question_(_copy)) {
	      tail.next = _copy;
	      tail = lastTail(_copy);
	    }
	  }
	  return result;
	};

	cons = function(erlArgs) {
	  return createErlList(car(erlArgs), next(erlArgs));
	};

	copy = function(erlList) {
	  return map((function(x) {
	    return x;
	  }), erlList);
	};

	createErlList = function(value, nextNode) {
	  if (value == null) {
	    return EOL;
	  }
	  return createNode(value, nextNode != null ? nextNode : EOL);
	};

	createNode = function(value, nextNode) {
	  return {
	    type: erlListType,
	    value: value,
	    next: nextNode
	  };
	};

	drop = function(nbr, erlList) {
	  while (nbr !== 0) {
	    erlList = cdr(erlList);
	    nbr = nbr - 1;
	  }
	  return erlList;
	};

	empty_question_ = function(value) {
	  return value === EOL;
	};

	equal_question_ = function(list0, list1, equivalent_question_) {
	  while (!(empty_question_(list0) || empty_question_(list1))) {
	    if (!equivalent_question_(list0.value, list1.value)) {
	      return false;
	    }
	    list0 = cdr(list0);
	    list1 = cdr(list1);
	  }
	  return empty_question_(list0) && empty_question_(list1);
	};

	filter = function(predicate, list) {
	  var _reduce;
	  _reduce = function(list, value) {
	    if (predicate(value)) {
	      return createErlList(value, list);
	    } else {
	      return list;
	    }
	  };
	  return reverse(reduce(EOL, _reduce, list));
	};

	forEach = function(fn, list) {
	  var result;
	  result = list;
	  while (!empty_question_(list)) {
	    result = fn(list.value);
	    list = recurse(list);
	  }
	  return result;
	};

	last = function(erlList) {
	  return car(lastTail(erlList));
	};

	lastTail = function(erlList) {
	  var current, prior;
	  if (empty_question_(erlList)) {
	    return erlList;
	  }
	  prior = erlList;
	  current = cdr(erlList);
	  while (!empty_question_(current)) {
	    prior = cdr(prior);
	    current = cdr(current);
	  }
	  return prior;
	};

	map = function(fn, list) {
	  var _reduce;
	  _reduce = function(list, value) {
	    return createErlList(fn(value), list);
	  };
	  return reverse(reduce(EOL, _reduce, list));
	};

	next = function(erlList) {
	  return car(cdr(erlList));
	};

	recurse = function(list) {
	  if (empty_question_(list)) {
	    return list;
	  } else {
	    return list.next;
	  }
	};

	reduce = function(seed, fn, list) {
	  while (!empty_question_(list)) {
	    seed = fn(seed, list.value);
	    list = recurse(list);
	  }
	  return seed;
	};

	reduceBy2 = function(seed, fn, list) {
	  var value0, value1;
	  while (!empty_question_(list)) {
	    value0 = list.value;
	    list = recurse(list);
	    value1 = list.value;
	    seed = fn(seed, value0, value1);
	    list = recurse(list);
	  }
	  return seed;
	};

	reverse = function(list) {
	  var result;
	  result = EOL;
	  while (!empty_question_(list)) {
	    result = createErlList(list.value, result);
	    list = list.next;
	  }
	  return result;
	};

	take = function(nbr, erlList) {
	  var node, result;
	  result = createErlList();
	  while (nbr !== 0) {
	    node = car(erlList);
	    erlList = cdr(erlList);
	    result = createErlList(node, result);
	    nbr = nbr - 1;
	  }
	  return reverse(result);
	};

	toArray = function(list) {
	  var _reduce;
	  _reduce = function(jsArray, value) {
	    jsArray.push(value);
	    return jsArray;
	  };
	  return reduce([], _reduce, list);
	};

	fromArray = function(array) {
	  var _reduce;
	  _reduce = function(list, value) {
	    return createErlList(value, list);
	  };
	  return array.reverse().reduce(_reduce, createErlList());
	};

	toPartialArray = function(nbr, list) {
	  var node, result;
	  result = [];
	  while (nbr !== 0) {
	    node = car(list);
	    list = cdr(list);
	    result.push(node);
	    nbr = nbr - 1;
	  }
	  result.push(list);
	  return result;
	};

	zip = function(seed, fn, list0, list1) {
	  var value0, value1;
	  while (!(empty_question_(list0) || empty_question_(list1))) {
	    value0 = car(list0);
	    list0 = cdr(list0);
	    value1 = car(list1);
	    list1 = cdr(list1);
	    seed = fn(seed, value0, value1);
	  }
	  return seed;
	};

	_EOL = {};

	EOL = createNode(_EOL, _EOL);

	module.exports = {
	  car: car,
	  cdr: cdr,
	  concat: concat,
	  cons: cons,
	  copy: copy,
	  createErlList: createErlList,
	  drop: drop,
	  empty_question_: empty_question_,
	  equal_question_: equal_question_,
	  filter: filter,
	  forEach: forEach,
	  fromArray: fromArray,
	  last: last,
	  map: map,
	  next: next,
	  recurse: recurse,
	  reduce: reduce,
	  reduceBy2: reduceBy2,
	  reverse: reverse,
	  take: take,
	  toArray: toArray,
	  toPartialArray: toPartialArray
	};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

	var erlAtomType, erlBooleanType, erlCoreEffectfulFunctionType, erlCorePureFunctionType, erlIdentifierType, erlIndexType, erlKeywordType, erlListType, erlMacroType, erlNumberType, erlSpecialFormType, erlStringType, erlSymbolType, erlTypes, erlUnitType, erlUserPureFunctionType;

	erlTypes = [erlBooleanType = 'erlBooleanType', erlCoreEffectfulFunctionType = 'erlCoreEffectfulFunctionType', erlCorePureFunctionType = 'erlCorePureFunctionType', erlIdentifierType = 'erlIdentifierType', erlIndexType = 'erlIndexType', erlKeywordType = 'erlKeywordType', erlListType = 'erlListType', erlMacroType = 'erlMacroType', erlNumberType = 'erlNumberType', erlSpecialFormType = 'erlSpecialFormType', erlStringType = 'erlStringType', erlSymbolType = 'erlSymbolType', erlUnitType = 'erlUnitType', erlUserPureFunctionType = 'erlUserPureFunctionType', erlAtomType = 'erlAtomType'];

	module.exports = {
	  erlAtomType: erlAtomType,
	  erlBooleanType: erlBooleanType,
	  erlCoreEffectfulFunctionType: erlCoreEffectfulFunctionType,
	  erlCorePureFunctionType: erlCorePureFunctionType,
	  erlIdentifierType: erlIdentifierType,
	  erlIndexType: erlIndexType,
	  erlKeywordType: erlKeywordType,
	  erlListType: erlListType,
	  erlMacroType: erlMacroType,
	  erlNumberType: erlNumberType,
	  erlSpecialFormType: erlSpecialFormType,
	  erlStringType: erlStringType,
	  erlSymbolType: erlSymbolType,
	  erlTypes: erlTypes,
	  erlUnitType: erlUnitType,
	  erlUserPureFunctionType: erlUserPureFunctionType
	};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var getLispEnvironment, setEnv0_bang_, setEnv1_bang_, setEnv2_bang_, setEnv3_bang_;

	setEnv0_bang_ = __webpack_require__(34);

	setEnv1_bang_ = __webpack_require__(35);

	setEnv2_bang_ = __webpack_require__(41);

	setEnv3_bang_ = __webpack_require__(42);

	getLispEnvironment = function(config) {
	  var display, environment;
	  display = config.display;
	  environment = {};
	  config = {
	    display: display,
	    environment: environment
	  };
	  setEnv0_bang_(config);
	  setEnv1_bang_(config);
	  setEnv2_bang_(config);
	  setEnv3_bang_(config);
	  return environment;
	};

	module.exports = getLispEnvironment;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var add, contains_question_, createErlBoolean, createErlCorePureFunction, createErlIdentifier, createErlIndex, createErlNumber, createErlString, dissoc, divide, erlNil, exponentiate, extractJsValue, fromArray, functionsOnJsValues, get, getEnvironment, greaterThan, greaterThanOrEqual, index, jsNaN_question_, jsNumber_question_, jsString_question_, keys, length, lessThan, lessThanOrEqual, lift, max, min, mod, multiply, negate, parseNumber, reduce, setCoreFnsOnJsValues_bang_, subtract, toArray, vals,
	  __slice = [].slice,
	  __hasProp = {}.hasOwnProperty;

	createErlBoolean = __webpack_require__(30).createErlBoolean;

	createErlCorePureFunction = __webpack_require__(30).createErlCorePureFunction;

	createErlIdentifier = __webpack_require__(30).createErlIdentifier;

	createErlIndex = __webpack_require__(30).createErlIndex;

	createErlNumber = __webpack_require__(30).createErlNumber;

	createErlString = __webpack_require__(30).createErlString;

	extractJsValue = __webpack_require__(30).extractJsValue;

	fromArray = __webpack_require__(31).fromArray;

	jsNaN_question_ = __webpack_require__(29).jsNaN_question_;

	jsNumber_question_ = __webpack_require__(29).jsNumber_question_;

	jsString_question_ = __webpack_require__(29).jsString_question_;

	erlNil = __webpack_require__(30).erlNil;

	reduce = __webpack_require__(31).reduce;

	toArray = __webpack_require__(31).toArray;

	add = function() {
	  var nbrs;
	  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlNumber(nbrs.reduce(function(x, nbr) {
	    return x += nbr;
	  }));
	};

	contains_question_ = function(index, key) {
	  return createErlBoolean(key in index);
	};

	dissoc = function() {
	  var copy, index, key, keys, value, _i, _len;
	  index = arguments[0], keys = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
	  copy = {};
	  for (key in index) {
	    if (!__hasProp.call(index, key)) continue;
	    value = index[key];
	    copy[key] = value;
	  }
	  for (_i = 0, _len = keys.length; _i < _len; _i++) {
	    key = keys[_i];
	    delete copy[key];
	  }
	  return createErlIndex(copy);
	};

	divide = function() {
	  var nbrs;
	  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlNumber(nbrs.reduce(function(x, nbr) {
	    return x /= nbr;
	  }));
	};

	exponentiate = function() {
	  var nbrs;
	  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlNumber(nbrs.reduce(function(x, nbr) {
	    return Math.pow(x, nbr);
	  }));
	};

	get = function(jsIndex, jsKey) {
	  return jsIndex[jsKey];
	};

	getEnvironment = function(config) {
	  var environment;
	  environment = config.environment;
	  setCoreFnsOnJsValues_bang_(environment, functionsOnJsValues);
	  return environment;
	};

	greaterThanOrEqual = function() {
	  var nbrs;
	  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlBoolean(nbrs[0] >= nbrs[1]);
	};

	greaterThan = function() {
	  var nbrs;
	  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlBoolean(nbrs[0] > nbrs[1]);
	};

	index = function() {
	  var args, i, k, _i, _len;
	  args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  index = {};
	  for (i = _i = 0, _len = args.length; _i < _len; i = ++_i) {
	    k = args[i];
	    if (i % 2 === 0) {
	      index[k] = args[i + 1];
	    }
	  }
	  return createErlIndex(index);
	};

	keys = function(index) {
	  var jsNbr, key, value, _keys;
	  _keys = [];
	  for (key in index) {
	    if (!__hasProp.call(index, key)) continue;
	    value = index[key];
	    _keys.push(jsNaN_question_(jsNbr = parseFloat(key, 10)) ? (key[0] === ':' ? createErlIdentifier : createErlString)(key) : createErlNumber(jsNbr));
	  }
	  return fromArray(_keys);
	};

	length = function(jsVal) {
	  if (!jsString_question_(jsVal)) {
	    return erlNil;
	  }
	  return createErlNumber(jsVal.length - 2);
	};

	lessThan = function() {
	  var nbrs;
	  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlBoolean(nbrs[0] < nbrs[1]);
	};

	lessThanOrEqual = function() {
	  var nbrs;
	  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlBoolean(nbrs[0] <= nbrs[1]);
	};

	lift = function(fnOnJsValues) {
	  return function(erlValueList) {
	    return fnOnJsValues.apply(null, (toArray(erlValueList)).map(extractJsValue));
	  };
	};

	max = function() {
	  var nbrs;
	  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlNumber(Math.max.apply(Math, nbrs));
	};

	min = function() {
	  var nbrs;
	  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlNumber(Math.min.apply(Math, nbrs));
	};

	mod = function(nbr0, nbr1) {
	  return createErlNumber(nbr0 % nbr1);
	};

	multiply = function() {
	  var nbrs;
	  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlNumber(nbrs.reduce(function(x, nbr) {
	    return x *= nbr;
	  }));
	};

	negate = function(nbr) {
	  return createErlNumber(-1 * nbr);
	};

	parseNumber = function(jsVal) {
	  var jsNbr;
	  if (jsNumber_question_(jsVal)) {
	    return jsVal;
	  }
	  if (!jsString_question_(jsVal)) {
	    return erlNil;
	  }
	  jsNbr = parseFloat(stripQuotes(jsVal), 10);
	  if (jsNaN_question_(jsNbr)) {
	    return erlNil;
	  } else {
	    return createErlNumber(jsNbr);
	  }
	};

	setCoreFnsOnJsValues_bang_ = function(env, fns) {
	  var fn, fnName, _results;
	  _results = [];
	  for (fnName in fns) {
	    if (!__hasProp.call(fns, fnName)) continue;
	    fn = fns[fnName];
	    _results.push(env[fnName] = createErlCorePureFunction(lift(fn)));
	  }
	  return _results;
	};

	subtract = function() {
	  var nbrs;
	  nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlNumber(nbrs.reduce(function(x, nbr) {
	    return x -= nbr;
	  }));
	};

	vals = function(index) {
	  var key, value, values;
	  values = [];
	  for (key in index) {
	    if (!__hasProp.call(index, key)) continue;
	    value = index[key];
	    values.push(value);
	  }
	  return fromArray(values);
	};

	functionsOnJsValues = {
	  '+': add,
	  'contains?': contains_question_,
	  'dissoc': dissoc,
	  '/': divide,
	  '**': exponentiate,
	  'get': get,
	  '>': greaterThan,
	  '>=': greaterThanOrEqual,
	  'index': index,
	  'keys': keys,
	  'length': length,
	  'max': max,
	  'min': min,
	  '<': lessThan,
	  '<=': lessThanOrEqual,
	  '%': mod,
	  '*': multiply,
	  'negate': negate,
	  'parse-number': parseNumber,
	  '-': subtract,
	  'vals': vals
	};

	module.exports = getEnvironment;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var append, areEqual, assoc, atom, atom_question_, boolean_question_, car, cdr, circumpendQuotes, concat, cons, coreFn_question_, count, createErlAtom, createErlBoolean, createErlCorePureFunction, createErlIndex, createErlList, createErlNumber, createErlString, createErlSymbol, createPredicate, deref, drop, empty_question_, equal_question_, erlAtom_question_, erlBoolean_question_, erlCorePureFunction_question_, erlFalse, erlFalse_question_, erlIgnore, erlIndex_question_, erlList_question_, erlMacro_question_, erlNil, erlNil_question_, erlNumber_question_, erlString_question_, erlSymbol_question_, erlTrue, erlTrue_question_, erlUserPureFunction_question_, extractJsValue, false_question_, first, fromArray, function_question_, functionsOnErlValues, getEnvironment, hasProcess, hasProcessWebpackShim, ignoreIfTrue, ignoreUnlessTrue, ignore_bang_, interpret, isNode, last, list, list_question_, macro_question_, meta, next, nil_question_, nth, number_question_, prepend, prettyString, read, recurse, reduce, reset, rest, reverse, serialize, set, setCoreFnsOnErlValues_bang_, slurp, string, string_question_, stripQuotes, symbol, symbol_question_, take, time_hyphen_ms, toArray, toPartialArray, true_question_, typeOf, userFn_question_, withMeta, write, _car, _cdr, _concat, _drop, _empty_question_, _interpret, _last, _not, _prStr, _quit_, _ref, _reverse, _take, _throw,
	  __slice = [].slice,
	  __hasProp = {}.hasOwnProperty;

	car = __webpack_require__(31).car;

	cdr = __webpack_require__(31).cdr;

	circumpendQuotes = __webpack_require__(29).circumpendQuotes;

	concat = __webpack_require__(31).concat;

	createErlAtom = __webpack_require__(30).createErlAtom;

	createErlBoolean = __webpack_require__(30).createErlBoolean;

	createErlCorePureFunction = __webpack_require__(30).createErlCorePureFunction;

	createErlIndex = __webpack_require__(30).createErlIndex;

	createErlList = __webpack_require__(30).createErlList;

	createErlNumber = __webpack_require__(30).createErlNumber;

	createErlString = __webpack_require__(30).createErlString;

	createErlSymbol = __webpack_require__(30).createErlSymbol;

	drop = __webpack_require__(31).drop;

	empty_question_ = __webpack_require__(31).empty_question_;

	equal_question_ = __webpack_require__(31).equal_question_;

	extractJsValue = __webpack_require__(30).extractJsValue;

	fromArray = __webpack_require__(31).fromArray;

	interpret = __webpack_require__(28);

	last = __webpack_require__(31).last;

	erlAtom_question_ = __webpack_require__(30).erlAtom_question_;

	erlCorePureFunction_question_ = __webpack_require__(30).erlCorePureFunction_question_;

	erlBoolean_question_ = __webpack_require__(30).erlBoolean_question_;

	erlFalse = __webpack_require__(30).erlFalse;

	erlFalse_question_ = __webpack_require__(30).erlFalse_question_;

	erlIgnore = __webpack_require__(30).erlIgnore;

	erlIndex_question_ = __webpack_require__(30).erlIndex_question_;

	erlList_question_ = __webpack_require__(30).erlList_question_;

	erlMacro_question_ = __webpack_require__(30).erlMacro_question_;

	erlNil = __webpack_require__(30).erlNil;

	erlNil_question_ = __webpack_require__(30).erlNil_question_;

	erlNumber_question_ = __webpack_require__(30).erlNumber_question_;

	erlString_question_ = __webpack_require__(30).erlString_question_;

	erlSymbol_question_ = __webpack_require__(30).erlSymbol_question_;

	erlTrue = __webpack_require__(30).erlTrue;

	erlTrue_question_ = __webpack_require__(30).erlTrue_question_;

	erlUserPureFunction_question_ = __webpack_require__(30).erlUserPureFunction_question_;

	next = __webpack_require__(31).next;

	recurse = __webpack_require__(31).recurse;

	reduce = __webpack_require__(31).reduce;

	reverse = __webpack_require__(31).reverse;

	serialize = __webpack_require__(37);

	take = __webpack_require__(31).take;

	toArray = __webpack_require__(31).toArray;

	toPartialArray = __webpack_require__(31).toPartialArray;

	append = function(erlArgs) {
	  var erlList, erlValues, _ref;
	  _ref = toArray(erlArgs), erlList = _ref[0], erlValues = 2 <= _ref.length ? __slice.call(_ref, 1) : [];
	  return concat(erlList, fromArray(erlValues));
	};

	areEqual = function(erlArgs) {
	  var erlValue0, erlValue1, _areEqual, _ref;
	  _ref = toPartialArray(2, erlArgs), erlValue0 = _ref[0], erlValue1 = _ref[1];
	  _areEqual = function(erlValue0, erlValue1) {
	    var jsIndex0, jsIndex1;
	    if (erlList_question_(erlValue0) && erlList_question_(erlValue1)) {
	      return equal_question_(erlValue0, erlValue1, _areEqual);
	    } else if (erlIndex_question_(erlValue0) && erlIndex_question_(erlValue1)) {
	      jsIndex0 = erlValue0.jsValue;
	      jsIndex1 = erlValue1.jsValue;
	      return (_areEqual(keys(jsIndex0), keys(jsIndex1))) && (_areEqual(vals(jsIndex0), vals(jsIndex1)));
	    } else {
	      return erlValue0.jsValue === erlValue1.jsValue;
	    }
	  };
	  return createErlBoolean(_areEqual(erlValue0, erlValue1));
	};

	assoc = function(erlArgs) {
	  var args, copy, jsIndex, k, key, v, value;
	  jsIndex = extractJsValue(car(erlArgs));
	  args = cdr(erlArgs);
	  copy = {};
	  for (key in jsIndex) {
	    if (!__hasProp.call(jsIndex, key)) continue;
	    value = jsIndex[key];
	    copy[key] = value;
	  }
	  while (!empty_question_(args)) {
	    k = car(args);
	    v = next(args);
	    args = recurse(recurse(args));
	    copy[extractJsValue(k)] = v;
	  }
	  return createErlIndex(copy);
	};

	atom = function(erlArgs) {
	  return createErlAtom(car(erlArgs));
	};

	_car = function(erlArgs) {
	  var arg;
	  arg = car(erlArgs);
	  if (erlList_question_(arg)) {
	    return car(arg);
	  } else {
	    return erlNil;
	  }
	};

	_cdr = function(erlArgs) {
	  var arg;
	  arg = car(erlArgs);
	  if (erlList_question_(arg)) {
	    return cdr(arg);
	  } else {
	    return erlNil;
	  }
	};

	_concat = function(erlArgs) {
	  var erlLists;
	  erlLists = toArray(erlArgs);
	  return concat.apply(null, erlLists);
	};

	cons = function(erlArgs) {
	  return createErlList(car(erlArgs), next(erlArgs));
	};

	count = function(erlArgs) {
	  var erlList, _reduce;
	  erlList = car(erlArgs);
	  if (!erlList_question_(erlList)) {
	    return erlNil;
	  }
	  _reduce = function(sum, value) {
	    return sum + 1;
	  };
	  return createErlNumber(reduce(0, _reduce, car(erlArgs)));
	};

	createPredicate = function(pred) {
	  return function(jsList) {
	    var erlValue;
	    erlValue = jsList.value;
	    return createErlBoolean(pred(erlValue));
	  };
	};

	deref = function(erlArgs) {
	  return (car(erlArgs)).erlValue;
	};

	_drop = function(erlArgs) {
	  var erlList, erlNumber, _ref;
	  _ref = toPartialArray(2, erlArgs), erlNumber = _ref[0], erlList = _ref[1];
	  return drop(extractJsValue(erlNumber), erlList);
	};

	_empty_question_ = function(erlArgs) {
	  if (empty_question_(erlArgs)) {
	    return erlFalse;
	  } else {
	    if (empty_question_(car(erlArgs))) {
	      return erlTrue;
	    } else {
	      return erlFalse;
	    }
	  }
	};

	first = function(erlArgs) {
	  return car(car(erlArgs));
	};

	function_question_ = function(jsList) {
	  var erlValue;
	  erlValue = jsList.value;
	  return createErlBoolean(erlCorePureFunction_question_(erlValue) || erlUserPureFunction_question_(erlValue));
	};

	getEnvironment = function(config) {
	  var environment;
	  environment = config.environment;
	  setCoreFnsOnErlValues_bang_(environment, functionsOnErlValues);
	  return environment;
	};

	hasProcess = function() {
	  return typeof process !== 'undefined';
	}

	hasProcessWebpackShim = function() {
	  return(process.title === 'browser' && process.browser);
	}

	ignore_bang_ = function(erlArgs) {
	  return erlIgnore;
	};

	ignoreIfTrue = function(erlArgs) {
	  var erlBool, erlValue, _ref;
	  _ref = toPartialArray(2, erlArgs), erlBool = _ref[0], erlValue = _ref[1];
	  if (extractJsValue(erlBool)) {
	    return erlIgnore;
	  } else {
	    return erlValue;
	  }
	};

	ignoreUnlessTrue = function(erlArgs) {
	  var erlBool, erlValue, _ref;
	  _ref = toPartialArray(2, erlArgs), erlBool = _ref[0], erlValue = _ref[1];
	  if (extractJsValue(erlBool)) {
	    return erlValue;
	  } else {
	    return erlIgnore;
	  }
	};

	_interpret = function(erlArgs) {
	  return interpret(stripQuotes(extractJsValue(car(erlArgs))));
	};

	isNode = function() {
	  return hasProcess() && !hasProcessWebpackShim();
	}

	_last = function(erlArgs) {
	  var arg;
	  arg = car(erlArgs);
	  if (erlList_question_(arg)) {
	    return last(arg);
	  } else {
	    return erlNil;
	  }
	};

	list = function(erlArgs) {
	  return erlArgs;
	};

	meta = function(erlArgs) {
	  var erlMeta;
	  erlMeta = (car(erlArgs)).meta;
	  if (erlMeta != null) {
	    return erlMeta;
	  } else {
	    return erlNil;
	  }
	};

	_not = function(erlArgs) {
	  var erlVal;
	  erlVal = car(erlArgs);
	  if (erlNil_question_(erlVal) || erlFalse_question_(erlVal)) {
	    return erlTrue;
	  } else {
	    return erlFalse;
	  }
	};

	nth = function(erlArgs) {
	  var erlList, erlNumber, i, _i, _ref, _ref1;
	  _ref = toPartialArray(2, erlArgs), erlNumber = _ref[0], erlList = _ref[1];
	  for (i = _i = 0, _ref1 = extractJsValue(erlNumber); 0 <= _ref1 ? _i < _ref1 : _i > _ref1; i = 0 <= _ref1 ? ++_i : --_i) {
	    erlList = cdr(erlList);
	  }
	  return car(erlList);
	};

	prepend = function(erlArgs) {
	  var erlList, erlValues, _reduce, _ref;
	  _ref = toArray(erlArgs), erlList = _ref[0], erlValues = 2 <= _ref.length ? __slice.call(_ref, 1) : [];
	  _reduce = function(list, val) {
	    return createErlList(val, list);
	  };
	  return erlValues.reduce(_reduce, erlList);
	};

	_prStr = function(erlArgs, printReadably_question_) {
	  return ((toArray(erlArgs)).map(function(erlArg) {
	    return serialize(erlArg, printReadably_question_);
	  })).join('');
	};

	prettyString = function(erlArgs) {
	  return createErlString(circumpendQuotes(_prStr(erlArgs, true)));
	};

	_quit_ = function() {
	  if (isNode()) {
	    return process.exit(0);
	  } else {
	  alert("The 'Erlkönig Lisp Console' program is not permitted to close this window.");
	  }
	};

	read = function(jsList) {
	  var _read;
	  _read = function(erlArgs) {
	    var jsFileName;
	    jsFileName = stripQuotes(extractJsValue(car(erlArgs)));
	    return __webpack_require__(40).readFileSync(jsFileName).toString();
	  };
	  return createErlString(_read(jsList));
	};

	reset = function(erlArgs) {
	  var value, _ref;
	  _ref = toPartialArray(2, erlArgs), atom = _ref[0], value = _ref[1];
	  atom.erlValue = value;
	  return atom;
	};

	rest = function(erlArgs) {
	  var arg;
	  arg = car(erlArgs);
	  if (erlList_question_(arg)) {
	    return cdr(arg);
	  } else {
	    return erlNil;
	  }
	};

	_reverse = function(erlArgs) {
	  var arg;
	  arg = car(erlArgs);
	  if (erlList_question_(arg)) {
	    return reverse(arg);
	  } else {
	    return erlNil;
	  }
	};

	set = function(erlArgs) {
	  var index, key, val, _ref;
	  _ref = toPartialArray(3, erlArgs), index = _ref[0], key = _ref[1], val = _ref[2];
	  (extractJsValue(index))[extractJsValue(key)] = val;
	  return index;
	};

	setCoreFnsOnErlValues_bang_ = function(env, fns) {
	  var fn, fnName, _results;
	  _results = [];
	  for (fnName in fns) {
	    if (!__hasProp.call(fns, fnName)) continue;
	    fn = fns[fnName];
	    _results.push(env[fnName] = createErlCorePureFunction(fn));
	  }
	  return _results;
	};

	slurp = function(erlArgs) {
	  var jsFileName;
	  jsFileName = stripQuotes(extractJsValue(car(erlArgs)));
	  var _fs_ = __webpack_require__(40);
	  return createErlString(circumpendQuotes(_fs_.readFileSync(jsFileName).toString()));
	};

	string = function(erlArgs) {
	  return createErlString(circumpendQuotes(_prStr(erlArgs, false)));
	};

	stripQuotes = function(jsString) {
	  return jsString.slice(1, -1);
	};

	symbol = function(erlArgs) {
	  var erlValue, jsStr;
	  erlValue = car(erlArgs);
	  if (erlString_question_(erlValue)) {
	    jsStr = extractJsValue(erlValue);
	    return createErlSymbol(jsStr.slice(1, -1));
	  } else {
	    return erlNil;
	  }
	};

	_take = function(erlArgs) {
	  var erlList, erlNumber, _ref;
	  _ref = toPartialArray(2, erlArgs), erlNumber = _ref[0], erlList = _ref[1];
	  return take(extractJsValue(erlNumber), erlList);
	};

	typeOf = function(erlArgs) {
	  var erlValue;
	  erlValue = car(erlArgs);
	  return createErlString(circumpendQuotes(erlValue.type));
	};

	_throw = function(erlArgs) {
	  throw car(erlArgs);
	};

	time_hyphen_ms = function() {
	  return createErlNumber(new Date().getTime());
	};

	withMeta = function(erlArgs) {
	  var erlMeta, erlVal, erlValue, jsValue, type, _ref;
	  _ref = toPartialArray(2, erlArgs), erlVal = _ref[0], erlMeta = _ref[1];
	  if (erlAtom_question_(erlVal)) {
	    erlValue = erlVal.erlValue, type = erlVal.type;
	    return {
	      erlValue: erlValue,
	      type: type,
	      meta: erlMeta
	    };
	  } else {
	    jsValue = erlVal.jsValue, type = erlVal.type;
	    return {
	      jsValue: jsValue,
	      type: type,
	      meta: erlMeta
	    };
	  }
	};

	write = function(erlArgs) {
	  return createErlString(serialize(car(erlArgs)));
	};

	_ref = [erlAtom_question_, erlBoolean_question_, erlCorePureFunction_question_, erlFalse_question_, erlList_question_, erlMacro_question_, erlNil_question_, erlNumber_question_, erlSymbol_question_, erlString_question_, erlUserPureFunction_question_, erlTrue_question_].map(createPredicate), atom_question_ = _ref[0], boolean_question_ = _ref[1], coreFn_question_ = _ref[2], false_question_ = _ref[3], list_question_ = _ref[4], macro_question_ = _ref[5], nil_question_ = _ref[6], number_question_ = _ref[7], symbol_question_ = _ref[8], string_question_ = _ref[9], userFn_question_ = _ref[10], true_question_ = _ref[11];

	functionsOnErlValues = {
	  '=': areEqual,
	  'append': append,
	  'assoc': assoc,
	  'atom': atom,
	  'atom?': atom_question_,
	  'boolean?': boolean_question_,
	  'car': _car,
	  'cdr': _cdr,
	  'cons': cons,
	  'concat': _concat,
	  'core-fn?': coreFn_question_,
	  'count': count,
	  'deref': deref,
	  'drop': _drop,
	  'empty?': _empty_question_,
	  'first': _car,
	  'false?': false_question_,
	  'function?': function_question_,
	  'ignore!': ignore_bang_,
	  'ignoreIfTrue': ignoreIfTrue,
	  'ignoreUnlessTrue': ignoreUnlessTrue,
	  'last': _last,
	  'list': list,
	  'list?': list_question_,
	  'macro?': macro_question_,
	  'meta': meta,
	  'nil?': nil_question_,
	  'not': _not,
	  'nth': nth,
	  'number?': number_question_,
	  'parse': _interpret,
	  'prepend': prepend,
	  'pretty-string': prettyString,
	  'rest': _cdr,
	  'reverse': _reverse,
	  'string': string,
	  'string?': string_question_,
	  'symbol': symbol,
	  'symbol?': symbol_question_,
	  'take': _take,
	  'throw': _throw,
	  'true?': true_question_,
	  'typeof': typeOf,
	  'user-fn?': userFn_question_,
	  '-quit-': _quit_,
	  'read': read,
	  'reset!': reset,
	  'set!': set,
	  'slurp': slurp,
	  'time-ms': time_hyphen_ms,
	  'with-meta': withMeta,
	  'write': write
	};

	module.exports = getEnvironment;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36)))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var adjoinErlValue, commentSignal, coreEffectfulFunctionLabel, corePureFunctionLabel, erlAtom_question_, erlCoreEffectfulFunction_question_, erlCorePureFunction_question_, erlIdentifier_question_, erlIgnore_question_, erlIndex_question_, erlKeyword_question_, erlList_question_, erlMacro_question_, erlNil_question_, erlString_question_, erlUserPureFunction_question_, extractJsValue, ignoreLabel, indexEnd, indexStart, keywordLabel, listEnd, listStart, macroLabel, nilLabel, reduce, serialize, serializeAtom, serializeIdentifier, serializeIndex, serializeList, serializeString, stripQuotes, userPureFunctionLabel,
	  __hasProp = {}.hasOwnProperty;

	commentSignal = __webpack_require__(38);

	extractJsValue = __webpack_require__(30).extractJsValue;

	indexEnd = __webpack_require__(39).indexEnd;

	indexStart = __webpack_require__(39).indexStart;

	listEnd = __webpack_require__(39).listEnd;

	listStart = __webpack_require__(39).listStart;

	erlAtom_question_ = __webpack_require__(30).erlAtom_question_;

	erlCoreEffectfulFunction_question_ = __webpack_require__(30).erlCoreEffectfulFunction_question_;

	erlCorePureFunction_question_ = __webpack_require__(30).erlCorePureFunction_question_;

	erlIdentifier_question_ = __webpack_require__(30).erlIdentifier_question_;

	erlIgnore_question_ = __webpack_require__(30).erlIgnore_question_;

	erlIndex_question_ = __webpack_require__(30).erlIndex_question_;

	erlKeyword_question_ = __webpack_require__(30).erlKeyword_question_;

	erlList_question_ = __webpack_require__(30).erlList_question_;

	erlMacro_question_ = __webpack_require__(30).erlMacro_question_;

	erlNil_question_ = __webpack_require__(30).erlNil_question_;

	erlString_question_ = __webpack_require__(30).erlString_question_;

	erlUserPureFunction_question_ = __webpack_require__(30).erlUserPureFunction_question_;

	reduce = __webpack_require__(31).reduce;

	adjoinErlValue = function(printReadably_question_) {
	  return function(memo, erlValue) {
	    var serialized;
	    serialized = serialize(erlValue, printReadably_question_);
	    if (memo.length === 0) {
	      return serialized;
	    } else {
	      return "" + memo + " " + serialized;
	    }
	  };
	};

	serialize = function(erlExpr, printReadably_question_) {
	  var _serialize;
	  if (erlExpr === commentSignal) {
	    return commentSignal;
	  }
	  _serialize = (function() {
	    switch (false) {
	      case !erlList_question_(erlExpr):
	        return serializeList;
	      case !erlIgnore_question_(erlExpr):
	        return function(x) {
	          return ignoreLabel;
	        };
	      case !erlIndex_question_(erlExpr):
	        return serializeIndex;
	      case !erlKeyword_question_(erlExpr):
	        return function(x) {
	          return keywordLabel;
	        };
	      case !erlCoreEffectfulFunction_question_(erlExpr):
	        return function(x) {
	          return coreEffectfulFunctionLabel;
	        };
	      case !erlCorePureFunction_question_(erlExpr):
	        return function(x) {
	          return corePureFunctionLabel;
	        };
	      case !erlUserPureFunction_question_(erlExpr):
	        return function(x) {
	          return userPureFunctionLabel;
	        };
	      case !erlMacro_question_(erlExpr):
	        return function(x) {
	          return macroLabel;
	        };
	      case !erlNil_question_(erlExpr):
	        return function(x) {
	          return nilLabel;
	        };
	      case !erlIdentifier_question_(erlExpr):
	        return serializeIdentifier;
	      case !erlString_question_(erlExpr):
	        return serializeString;
	      case !erlAtom_question_(erlExpr):
	        return serializeAtom;
	      case erlExpr.jsValue == null:
	        return extractJsValue;
	      default:
	        return function(x) {
	          return x;
	        };
	    }
	  })();
	  return _serialize(erlExpr, printReadably_question_);
	};

	serializeAtom = function(erlAtom, printReadably_question_) {
	  return "(atom " + (serialize(erlAtom.erlValue, printReadably_question_)) + ")";
	};

	serializeIdentifier = function(erlString, printReadably_question_) {
	  return extractJsValue(erlString);
	};

	serializeIndex = function(erlIndex, printReadably_question_) {
	  var erlValue, jsIndex, key, memo;
	  jsIndex = erlIndex.jsValue;
	  memo = '';
	  for (key in jsIndex) {
	    if (!__hasProp.call(jsIndex, key)) continue;
	    erlValue = jsIndex[key];
	    memo = memo === '' ? "" + key + " " + (serialize(erlValue, printReadably_question_)) : "" + memo + ", " + key + " " + (serialize(erlValue, printReadably_question_));
	  }
	  return indexStart + memo + indexEnd;
	};

	serializeList = function(erlList, printReadably_question_) {
	  var serializedList;
	  serializedList = reduce("", adjoinErlValue(printReadably_question_), erlList);
	  return listStart + serializedList + listEnd;
	};

	serializeString = function(erlString, printReadably_question_) {
	  var jsString;
	  jsString = stripQuotes(extractJsValue(erlString));
	  if (!printReadably_question_) {
	    return jsString;
	  }
	  return jsString.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
	};

	stripQuotes = function(jsString) {
	  return jsString.slice(1, -1);
	};

	coreEffectfulFunctionLabel = '<effectful core function>';

	corePureFunctionLabel = '<core function>';

	ignoreLabel = '<ignore>';

	keywordLabel = '<keyword>';

	macroLabel = '<macro>';

	nilLabel = 'nil';

	userPureFunctionLabel = '<function>';

	module.exports = serialize;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	var comment;

	comment = {};

	module.exports = comment;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

	var binaryGlyphTokens, catch_asterisk_, def_bang_, deref, derefGlyph, expand_hyphen_macro, fn_asterisk_, glyphTokens, ignore, ignoreIfTrue, ignoreIfTrueGlyph, ignoreUnlessTrue, ignoreUnlessTrueGlyph, ignore_bang_, ignore_bang_Glyph, indexEnd, indexStart, keyTokens, keyword_question_, keywords, let_asterisk_, letrec_asterisk_, listEnd, listStart, macroTokens, macro_asterisk_, nil, quasiquote, quasiquoteGlyph, quote, quoteGlyph, splat, spliceUnquote, spliceUnquoteGlyph, try_asterisk_, undef_bang_, unquote, unquoteGlyph, _do, _eval, _evalWithEnv, _false, _getCurrentEnv, _getDefaultEnv, _if, _process, _true,
	  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	keyword_question_ = function(jsString) {
	  return __indexOf.call(keywords, jsString) >= 0;
	};

	keyTokens = [deref = 'deref', derefGlyph = '@', catch_asterisk_ = 'catch*', def_bang_ = 'def!', _do = 'do', _eval = 'eval', _evalWithEnv = 'eval-with-env', expand_hyphen_macro = 'expand-macro', _false = 'false', fn_asterisk_ = 'fn*', _getCurrentEnv = '-get-current-env-', _getDefaultEnv = '-get-default-env-', _if = 'if', ignore_bang_ = 'ignore!', ignore_bang_Glyph = '#!', ignoreIfTrue = 'ignoreIfTrue', ignoreIfTrueGlyph = '#-', ignoreUnlessTrue = 'ignoreUnlessTrue', ignoreUnlessTrueGlyph = '#+', ignore = 'ignore', indexEnd = '}', indexStart = '{', let_asterisk_ = 'let*', letrec_asterisk_ = 'letrec*', listEnd = ')', listStart = '(', macro_asterisk_ = 'macro*', nil = 'nil', _process = '-process-', quasiquote = 'quasiquote', quasiquoteGlyph = '`', quote = 'quote', quoteGlyph = '\'', splat = '&', spliceUnquote = 'splice-unquote', spliceUnquoteGlyph = '~@', _true = 'true', try_asterisk_ = 'try*', undef_bang_ = 'undef!', unquote = 'unquote', unquoteGlyph = '~'];

	keywords = [catch_asterisk_, def_bang_, _do, _eval, _evalWithEnv, expand_hyphen_macro, _false, fn_asterisk_, _getCurrentEnv, _getDefaultEnv, _if, ignore, let_asterisk_, letrec_asterisk_, macro_asterisk_, nil, _process, quasiquote, quote, spliceUnquote, _true, try_asterisk_, undef_bang_, unquote];

	macroTokens = [quasiquote, quote, spliceUnquote, unquote];

	glyphTokens = [derefGlyph, ignore_bang_Glyph, quasiquoteGlyph, quoteGlyph, spliceUnquoteGlyph, unquoteGlyph];

	binaryGlyphTokens = [ignoreIfTrueGlyph, ignoreUnlessTrueGlyph];

	module.exports = {
	  binaryGlyphTokens: binaryGlyphTokens,
	  deref: deref,
	  derefGlyph: derefGlyph,
	  catch_asterisk_: catch_asterisk_,
	  def_bang_: def_bang_,
	  _do: _do,
	  _eval: _eval,
	  _evalWithEnv: _evalWithEnv,
	  expand_hyphen_macro: expand_hyphen_macro,
	  _false: _false,
	  fn_asterisk_: fn_asterisk_,
	  _getCurrentEnv: _getCurrentEnv,
	  _getDefaultEnv: _getDefaultEnv,
	  glyphTokens: glyphTokens,
	  _if: _if,
	  ignoreIfTrue: ignoreIfTrue,
	  ignoreIfTrueGlyph: ignoreIfTrueGlyph,
	  ignoreUnlessTrue: ignoreUnlessTrue,
	  ignoreUnlessTrueGlyph: ignoreUnlessTrueGlyph,
	  ignore: ignore,
	  ignore_bang_: ignore_bang_,
	  ignore_bang_Glyph: ignore_bang_Glyph,
	  indexEnd: indexEnd,
	  indexStart: indexStart,
	  keyTokens: keyTokens,
	  keyword_question_: keyword_question_,
	  let_asterisk_: let_asterisk_,
	  letrec_asterisk_: letrec_asterisk_,
	  listEnd: listEnd,
	  listStart: listStart,
	  macro_asterisk_: macro_asterisk_,
	  macroTokens: macroTokens,
	  nil: nil,
	  _process: _process,
	  quasiquote: quasiquote,
	  quasiquoteGlyph: quasiquoteGlyph,
	  quote: quote,
	  quoteGlyph: quoteGlyph,
	  splat: splat,
	  spliceUnquote: spliceUnquote,
	  spliceUnquoteGlyph: spliceUnquoteGlyph,
	  _true: _true,
	  try_asterisk_: try_asterisk_,
	  undef_bang_: undef_bang_,
	  unquote: unquote,
	  unquoteGlyph: unquoteGlyph
	};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var createErlCoreEffectfulFunction, createErlList, createErlString, displayEffectsOnErlValues, getEnvironment, serialize, setCoreEffectfulFnsOnErlValues_bang_, toArray, _prStr,
	  __hasProp = {}.hasOwnProperty;

	createErlCoreEffectfulFunction = __webpack_require__(30).createErlCoreEffectfulFunction;

	createErlList = __webpack_require__(30).createErlList;

	createErlString = __webpack_require__(30).createErlString;

	serialize = __webpack_require__(37);

	toArray = __webpack_require__(31).toArray;

	getEnvironment = function(config) {
	  var display, environment;
	  display = config.display, environment = config.environment;
	  setCoreEffectfulFnsOnErlValues_bang_(display)(environment, displayEffectsOnErlValues);
	  return environment;
	};

	_prStr = function(erlArgs, printReadably_question_) {
	  return ((toArray(erlArgs)).map(function(erlArg) {
	    return serialize(erlArg, printReadably_question_);
	  })).join('');
	};

	setCoreEffectfulFnsOnErlValues_bang_ = function(represent) {
	  return function(env, fns) {
	    var fn, fnName, _results;
	    _results = [];
	    for (fnName in fns) {
	      if (!__hasProp.call(fns, fnName)) continue;
	      fn = fns[fnName];
	      _results.push(env[fnName] = createErlCoreEffectfulFunction(function(erlArgs) {
	        return represent(fn(erlArgs));
	      }));
	    }
	    return _results;
	  };
	};

	displayEffectsOnErlValues = {
	  'print': function(erlArgs) {
	    return _prStr(erlArgs, false);
	  },
	  'pretty-print': function(erlArgs) {
	    return _prStr(erlArgs, true);
	  },
	  '--quit--': function() {
	    return _prStr(createErlList(createErlString("\"'Erlkönig Lisp Console' is not permitted to close this window.\"")), false);
	  }
	};

	module.exports = getEnvironment;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var car, createErlCorePureFunction, createErlList, createErlSymbol, erlList_question_, extractJsValue, fromArray, fromErlIndex, getEnvironment, setCoreFnsOnErlValues_bang_, stripQuotes, toArray, toPartialArray, tokenizeAndParse, _process, _process_,
	  __hasProp = {}.hasOwnProperty;

	car = __webpack_require__(31).car;

	createErlCorePureFunction = __webpack_require__(30).createErlCorePureFunction;

	createErlList = __webpack_require__(30).createErlList;

	createErlSymbol = __webpack_require__(30).createErlSymbol;

	extractJsValue = __webpack_require__(30).extractJsValue;

	fromArray = __webpack_require__(31).fromArray;

	fromErlIndex = __webpack_require__(43).fromErlIndex;

	erlList_question_ = __webpack_require__(30).erlList_question_;

	_process = __webpack_require__(44);

	toArray = __webpack_require__(31).toArray;

	tokenizeAndParse = __webpack_require__(47);

	toPartialArray = __webpack_require__(31).toPartialArray;

	getEnvironment = function(config) {
	  var apply, call, environment, evalString, evalWithBareEnv, evalWithEnv, functionsOnErlValues, parse, _eval, _evalListHead;
	  environment = config.environment;
	  apply = function(erlArgs) {
	    var erlArgList, erlFn, _ref;
	    _ref = toArray(erlArgs), erlFn = _ref[0], erlArgList = _ref[1];
	    return _eval(createErlList(erlFn, erlArgList));
	  };
	  call = function(erlArgs) {
	    return _eval(erlArgs);
	  };
	  _eval = function(erlVal) {
	    return _process_([environment])(erlVal);
	  };
	  _evalListHead = function(erlArgs) {
	    return _eval(car(erlArgs));
	  };
	  evalString = function(erlArgs) {
	    return (function(__i) {
	      return _eval(tokenizeAndParse(stripQuotes(extractJsValue(car(__i)))));
	    })(erlArgs);
	  };
	  evalWithBareEnv = function(erlArgs) {
	    var expr, localEnv, _ref;
	    _ref = toPartialArray(2, erlArgs), expr = _ref[0], localEnv = _ref[1];
	    return _process_([fromErlIndex(localEnv)])(expr);
	  };
	  evalWithEnv = function(erlArgs) {
	    var expr, localEnv, _ref;
	    _ref = toPartialArray(2, erlArgs), expr = _ref[0], localEnv = _ref[1];
	    return _process_([fromErlIndex(localEnv), environment])(expr);
	  };
	  parse = function(erlArgs) {
	    return tokenizeAndParse(stripQuotes(extractJsValue(car(erlArgs))));
	  };
	  functionsOnErlValues = {
	    parse: parse
	  };
	  setCoreFnsOnErlValues_bang_(environment, functionsOnErlValues);
	  return environment;
	};

	setCoreFnsOnErlValues_bang_ = function(env, fns) {
	  var fn, fnName, _results;
	  _results = [];
	  for (fnName in fns) {
	    if (!__hasProp.call(fns, fnName)) continue;
	    fn = fns[fnName];
	    _results.push(env[fnName] = createErlCorePureFunction(fn));
	  }
	  return _results;
	};

	stripQuotes = function(jsString) {
	  return jsString.slice(1, -1);
	};

	_process_ = _process(function(erlVal) {
	  return erlVal;
	});

	module.exports = getEnvironment;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var createErlIndex, fromErlIndex, fromJsObjects, jsString_question_,
	  __slice = [].slice,
	  __hasProp = {}.hasOwnProperty;

	createErlIndex = __webpack_require__(30).createErlIndex;

	jsString_question_ = __webpack_require__(29).jsString_question_;

	fromJsObjects = function() {
	  var copy, jsObject, jsObjects, key, val, _i, _len;
	  jsObjects = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  copy = {};
	  for (_i = 0, _len = jsObjects.length; _i < _len; _i++) {
	    jsObject = jsObjects[_i];
	    for (key in jsObject) {
	      if (!__hasProp.call(jsObject, key)) continue;
	      val = jsObject[key];
	      if (jsString_question_(key)) {
	        copy[':' + key] = val;
	      } else {
	        copy[key] = val;
	      }
	    }
	  }
	  return createErlIndex(copy);
	};

	fromErlIndex = function(erlIndex) {
	  var key, newKey, result, value, _ref;
	  result = {};
	  _ref = erlIndex.jsValue;
	  for (key in _ref) {
	    if (!__hasProp.call(_ref, key)) continue;
	    value = _ref[key];
	    if (jsString_question_(key)) {
	      newKey = (function() {
	        switch (key[0]) {
	          case ':':
	            return key.slice(1);
	          case '"':
	            return key.slice(1, -1);
	          default:
	            return key;
	        }
	      })();
	      result[newKey] = value;
	    } else {
	      result[key] = value;
	    }
	  }
	  return result;
	};

	module.exports = {
	  fromJsObjects: fromJsObjects,
	  fromErlIndex: fromErlIndex
	};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var commentSignal, evaluate, _process;

	commentSignal = __webpack_require__(38);

	evaluate = __webpack_require__(45);

	_process = function(transform) {
	  return function(envs) {
	    return function(sourceCode) {
	      var addResult, result, results, value;
	      results = [];
	      addResult = function(result) {
	        return results.push(result);
	      };
	      value = evaluate(envs, addResult)(transform(sourceCode));
	      result = value === commentSignal ? {
	        effect: {
	          type: 'comment'
	        }
	      } : {
	        effect: false,
	        value: value
	      };
	      addResult(result);
	      return results;
	    };
	  };
	};

	module.exports = _process;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var addEnv, car, catch_asterisk_, cdr, circumpendQuotes, commentSignal, createErlIndex, createErlKeyword, createErlList, createErlMacro, createErlNumber, createErlString, createErlSymbol, createErlUserPureFunction, createFn, createLocalEnv, createMacro, def_bang_, defineNewValue, empty_question_, erlCoreEffectfulFunction_question_, erlCorePureFunction_question_, erlIgnore_question_, erlIndex_question_, erlKeyword_question_, erlList_question_, erlMacro_question_, erlNil, erlSymbol_question_, erlUserPureFunction_question_, evalQuasiquotedExpr, evaluate, expandMacro, expand_hyphen_macro, extractJsValue, filter, fn_asterisk_, forEach, fromArray, fromErlIndex, fromJsObjects, ignorable_question_, jsString_question_, keyword_question_, let_asterisk_, letrec_asterisk_, lookup, macro_asterisk_, map, next, quasiquote, quote, recurse, reduce, reduceBy2, reduceLet_asterisk_, reduceLetrec_asterisk_, reverse, setMainEnv, splat, spliceUnquote, spliceUnquote_question_, spliceUnquotedExpr_question_, toPartialArray, try_asterisk_, undef_bang_, undefineValue, unquote, unquote_question_, unquotedExpr_question_, unsetMainEnv, _do, _eval, _evalWithEnv, _evaluate, _getCurrentEnv, _getDefaultEnv, _if,
	  __hasProp = {}.hasOwnProperty;

	addEnv = __webpack_require__(46).addEnv;

	car = __webpack_require__(31).car;

	catch_asterisk_ = __webpack_require__(39).catch_asterisk_;

	cdr = __webpack_require__(31).cdr;

	circumpendQuotes = __webpack_require__(29).circumpendQuotes;

	commentSignal = __webpack_require__(38);

	createErlIndex = __webpack_require__(30).createErlIndex;

	createErlKeyword = __webpack_require__(30).createErlKeyword;

	createErlList = __webpack_require__(30).createErlList;

	createErlMacro = __webpack_require__(30).createErlMacro;

	createErlNumber = __webpack_require__(30).createErlNumber;

	createErlString = __webpack_require__(30).createErlString;

	createErlSymbol = __webpack_require__(30).createErlSymbol;

	createErlUserPureFunction = __webpack_require__(30).createErlUserPureFunction;

	def_bang_ = __webpack_require__(39).def_bang_;

	_do = __webpack_require__(39)._do;

	empty_question_ = __webpack_require__(31).empty_question_;

	_eval = __webpack_require__(39)._eval;

	_evalWithEnv = __webpack_require__(39)._evalWithEnv;

	expand_hyphen_macro = __webpack_require__(39).expand_hyphen_macro;

	extractJsValue = __webpack_require__(30).extractJsValue;

	filter = __webpack_require__(31).filter;

	fn_asterisk_ = __webpack_require__(39).fn_asterisk_;

	forEach = __webpack_require__(31).forEach;

	fromArray = __webpack_require__(31).fromArray;

	fromJsObjects = __webpack_require__(43).fromJsObjects;

	fromErlIndex = __webpack_require__(43).fromErlIndex;

	_getCurrentEnv = __webpack_require__(39)._getCurrentEnv;

	_getDefaultEnv = __webpack_require__(39)._getDefaultEnv;

	_if = __webpack_require__(39)._if;

	jsString_question_ = __webpack_require__(29).jsString_question_;

	keyword_question_ = __webpack_require__(39).keyword_question_;

	let_asterisk_ = __webpack_require__(39).let_asterisk_;

	letrec_asterisk_ = __webpack_require__(39).letrec_asterisk_;

	lookup = __webpack_require__(46).lookup;

	macro_asterisk_ = __webpack_require__(39).macro_asterisk_;

	erlCoreEffectfulFunction_question_ = __webpack_require__(30).erlCoreEffectfulFunction_question_;

	erlCorePureFunction_question_ = __webpack_require__(30).erlCorePureFunction_question_;

	erlIgnore_question_ = __webpack_require__(30).erlIgnore_question_;

	erlIndex_question_ = __webpack_require__(30).erlIndex_question_;

	erlKeyword_question_ = __webpack_require__(30).erlKeyword_question_;

	erlList_question_ = __webpack_require__(30).erlList_question_;

	erlMacro_question_ = __webpack_require__(30).erlMacro_question_;

	erlNil = __webpack_require__(30).erlNil;

	erlSymbol_question_ = __webpack_require__(30).erlSymbol_question_;

	erlUserPureFunction_question_ = __webpack_require__(30).erlUserPureFunction_question_;

	map = __webpack_require__(31).map;

	next = __webpack_require__(31).next;

	quasiquote = __webpack_require__(39).quasiquote;

	quote = __webpack_require__(39).quote;

	spliceUnquote = __webpack_require__(39).spliceUnquote;

	unquote = __webpack_require__(39).unquote;

	recurse = __webpack_require__(31).recurse;

	reduce = __webpack_require__(31).reduce;

	reduceBy2 = __webpack_require__(31).reduceBy2;

	reverse = __webpack_require__(31).reverse;

	setMainEnv = __webpack_require__(46).setMainEnv;

	splat = __webpack_require__(39).splat;

	toPartialArray = __webpack_require__(31).toPartialArray;

	try_asterisk_ = __webpack_require__(39).try_asterisk_;

	undef_bang_ = __webpack_require__(39).undef_bang_;

	unsetMainEnv = __webpack_require__(46).unsetMainEnv;

	createFn = function(erlList, envs) {
	  return createErlUserPureFunction({
	    localEnvs: envs.slice(0),
	    erlExpression: next(erlList),
	    erlParameters: car(erlList)
	  });
	};

	createLocalEnv = function(erlParams, erlArgs) {
	  var env, jsParam;
	  env = {};
	  while (!empty_question_(erlParams)) {
	    jsParam = extractJsValue(car(erlParams));
	    if (jsParam === splat) {
	      env[extractJsValue(next(erlParams))] = erlArgs;
	      return env;
	    } else {
	      env[jsParam] = car(erlArgs);
	      erlParams = cdr(erlParams);
	      erlArgs = cdr(erlArgs);
	    }
	  }
	  return env;
	};

	createMacro = function(erlList, envs) {
	  return createErlMacro({
	    localEnvs: envs.slice(0),
	    erlExpression: next(erlList),
	    erlParameters: car(erlList)
	  });
	};

	defineNewValue = function(erlList, envs, addResult) {
	  var erlValue, jsKey;
	  jsKey = extractJsValue(car(erlList));
	  erlValue = _evaluate(next(erlList), envs, addResult);
	  return setMainEnv(envs, jsKey, erlValue);
	};

	evalQuasiquotedExpr = function(expr, envs, addResult) {
	  var manageItem;
	  if (!erlList_question_(expr)) {
	    return expr;
	  }
	  manageItem = function(memo, item) {
	    var _manageItem;
	    switch (false) {
	      case !unquotedExpr_question_(item):
	        return createErlList(_evaluate(next(item), envs, addResult), memo);
	      case !spliceUnquotedExpr_question_(item):
	        _manageItem = function(_memo, _item) {
	          return createErlList(_item, _memo);
	        };
	        return reduce(memo, _manageItem, _evaluate(next(item), envs, addResult));
	      case !erlList_question_(item):
	        return createErlList(evalQuasiquotedExpr(item, envs, addResult), memo);
	      default:
	        return createErlList(item, memo);
	    }
	  };
	  return reverse(reduce(createErlList(), manageItem, expr));
	};

	_evaluate = function(erlExpr, envs, addResult) {
	  var arg1, catchExpr, erlArgs, erlExpression, erlInvokable, erlParameters, erlSymbol, ex, fn, head, index, jsString, key, localEnvs, newEnv, newIndex, otherwise, remainingArgs, tailList, value, _catch, _ex, _ref, _ref1, _ref2;
	  while (true) {
	    switch (false) {
	      case !erlSymbol_question_(erlExpr):
	        jsString = extractJsValue(erlExpr);
	        if (keyword_question_(jsString)) {
	          return createErlKeyword(jsString);
	        } else {
	          return lookup(envs, jsString);
	        }
	        break;
	      case !erlIndex_question_(erlExpr):
	        index = extractJsValue(erlExpr);
	        newIndex = {};
	        for (key in index) {
	          if (!__hasProp.call(index, key)) continue;
	          value = index[key];
	          newIndex[key] = _evaluate(index[key], envs, addResult);
	        }
	        return createErlIndex(newIndex);
	      case !!(erlList_question_(erlExpr)):
	        return erlExpr;
	      default:
	        erlExpr = filter((function(x) {
	          return !(ignorable_question_(x, envs, addResult));
	        }), erlExpr);
	        _ref = toPartialArray(2, erlExpr), head = _ref[0], arg1 = _ref[1], remainingArgs = _ref[2];
	        tailList = cdr(erlExpr);
	        switch (extractJsValue(head)) {
	          case def_bang_:
	            return defineNewValue(tailList, envs, addResult);
	          case undef_bang_:
	            return undefineValue(tailList, envs);
	          case _eval:
	            erlExpr = _evaluate(arg1, envs, addResult);
	            break;
	          case _evalWithEnv:
	            envs = [fromErlIndex(_evaluate(arg1, envs, addResult))];
	            erlExpr = _evaluate(car(remainingArgs), envs, addResult);
	            break;
	          case let_asterisk_:
	            erlExpr = car(remainingArgs);
	            envs = addEnv(envs, reduceLet_asterisk_(envs, arg1, addResult));
	            break;
	          case letrec_asterisk_:
	            erlExpr = car(remainingArgs);
	            envs = addEnv(envs, reduceLetrec_asterisk_(envs, arg1, addResult));
	            break;
	          case _do:
	            return forEach(evaluate(envs, addResult), tailList);
	          case _getCurrentEnv:
	            return fromJsObjects.apply(null, envs.reverse());
	          case _getDefaultEnv:
	            return fromJsObjects(envs[envs.length - 1]);
	          case _if:
	            erlExpr = extractJsValue(_evaluate(arg1, envs, addResult)) ? car(remainingArgs) : empty_question_(otherwise = next(remainingArgs)) ? erlNil : otherwise;
	            break;
	          case fn_asterisk_:
	            return createFn(tailList, envs);
	          case macro_asterisk_:
	            return createMacro(tailList, envs);
	          case quote:
	            return car(tailList);
	          case quasiquote:
	            return evalQuasiquotedExpr(car(tailList), envs, addResult);
	          case expand_hyphen_macro:
	            return expandMacro(car(arg1), cdr(arg1), envs, addResult);
	          case try_asterisk_:
	            try {
	              return _evaluate(arg1, envs, addResult);
	            } catch (_error) {
	              ex = _error;
	              if (empty_question_(remainingArgs)) {
	                throw ex;
	              } else {
	                _ref1 = toPartialArray(3, car(remainingArgs)), _catch = _ref1[0], _ex = _ref1[1], catchExpr = _ref1[2];
	                if ((extractJsValue(_catch)) !== "catch*") {
	                  throw ex;
	                }
	                if (ex instanceof Error) {
	                  ex = createErlString(circumpendQuotes(ex.message));
	                }
	                newEnv = {};
	                newEnv[extractJsValue(_ex)] = ex;
	                return _evaluate(catchExpr, addEnv(envs, newEnv), addResult);
	              }
	            }
	            break;
	          default:
	            erlSymbol = head;
	            erlExpr = tailList;
	            erlInvokable = _evaluate(erlSymbol, envs, addResult);
	            switch (false) {
	              case !erlKeyword_question_(erlInvokable):
	                erlExpr = createErlList(erlInvokable, tailList);
	                break;
	              case !erlMacro_question_(erlInvokable):
	                erlExpr = expandMacro(head, tailList, envs, addResult);
	                break;
	              case !erlCorePureFunction_question_(erlInvokable):
	                fn = extractJsValue(erlInvokable);
	                erlArgs = map(evaluate(envs, addResult), erlExpr);
	                return fn(erlArgs);
	              case !erlCoreEffectfulFunction_question_(erlInvokable):
	                fn = extractJsValue(erlInvokable);
	                erlArgs = map(evaluate(envs, addResult), erlExpr);
	                addResult(fn(erlArgs));
	                return erlNil;
	              case !erlUserPureFunction_question_(erlInvokable):
	                _ref2 = extractJsValue(erlInvokable), localEnvs = _ref2.localEnvs, erlExpression = _ref2.erlExpression, erlParameters = _ref2.erlParameters;
	                erlArgs = map(evaluate(envs, addResult), erlExpr);
	                erlExpr = erlExpression;
	                newEnv = createLocalEnv(erlParameters, erlArgs);
	                envs = addEnv(localEnvs, newEnv);
	                break;
	              default:
	                throw "" + (extractJsValue(erlSymbol)) + " does not evaluate to a function, macro, or keyword.";
	            }
	        }
	    }
	  }
	};

	evaluate = function(envs, addResult) {
	  return function(erlExpr) {
	    if (erlExpr === commentSignal) {
	      return commentSignal;
	    }
	    return _evaluate(erlExpr, envs, addResult);
	  };
	};

	expandMacro = function(erlMacroSymbol, erlArgs, envs, addResult) {
	  var erlExpression, erlMacro, erlParameters, localEnvs, newEnv, newEnvStack, _ref;
	  erlMacro = _evaluate(erlMacroSymbol, envs, addResult);
	  _ref = extractJsValue(erlMacro), localEnvs = _ref.localEnvs, erlExpression = _ref.erlExpression, erlParameters = _ref.erlParameters;
	  newEnv = createLocalEnv(erlParameters, erlArgs);
	  newEnvStack = addEnv(localEnvs, newEnv);
	  return _evaluate(erlExpression, newEnvStack, addResult);
	};

	ignorable_question_ = function(erlVal, envs, addResult) {
	  var jsString, symbol;
	  return erlIgnore_question_(erlVal) || (erlList_question_(erlVal) && erlSymbol_question_(symbol = car(erlVal)) && (((jsString = extractJsValue(symbol)) === 'ignore!') || ((jsString === 'ignoreIfTrue') && (extractJsValue(_evaluate(next(erlVal), envs, addResult)))) || ((jsString === 'ignoreUnlessTrue') && !(extractJsValue(_evaluate(next(erlVal), envs, addResult))))));
	};

	reduceLet_asterisk_ = function(envs, list, addResult) {
	  var envValue, jsKey, newEnv, _envs;
	  newEnv = {};
	  _envs = addEnv(envs, newEnv);
	  while (!empty_question_(list)) {
	    jsKey = extractJsValue(list.value);
	    list = recurse(list);
	    envValue = _evaluate(list.value, _envs, addResult);
	    newEnv[jsKey] = envValue;
	    list = recurse(list);
	  }
	  return newEnv;
	};

	reduceLetrec_asterisk_ = function(envs, list, addResult) {
	  var envValue, jsKey, newEnv, _envs, _erlExpr;
	  newEnv = {};
	  _envs = addEnv(envs, newEnv);
	  while (!empty_question_(list)) {
	    jsKey = extractJsValue(list.value);
	    list = recurse(list);
	    _erlExpr = fromArray([createErlSymbol("fix*"), fromArray([createErlSymbol("fn*"), fromArray([jsKey]), list.value])]);
	    envValue = _evaluate(_erlExpr, _envs, addResult);
	    newEnv[jsKey] = envValue;
	    list = recurse(list);
	  }
	  return newEnv;
	};

	spliceUnquote_question_ = function(erlValue) {
	  return spliceUnquote === (extractJsValue(erlValue));
	};

	spliceUnquotedExpr_question_ = function(erlValue) {
	  return erlList_question_(erlValue) && (spliceUnquote_question_(car(erlValue)));
	};

	undefineValue = function(erlList, envs) {
	  var jsKey;
	  jsKey = extractJsValue(car(erlList));
	  return unsetMainEnv(envs, jsKey);
	};

	unquote_question_ = function(erlValue) {
	  return unquote === (extractJsValue(erlValue));
	};

	unquotedExpr_question_ = function(erlValue) {
	  return erlList_question_(erlValue) && (unquote_question_(car(erlValue)));
	};

	module.exports = evaluate;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

	var addEnv, getLast, lookup, set, setMainEnv, unset, unsetMainEnv;

	addEnv = function(envStack, newEnv) {
	  var copy;
	  copy = envStack.slice(0);
	  copy.unshift(newEnv);
	  return copy;
	};

	getLast = function(array) {
	  return array[array.length - 1];
	};

	lookup = function(envStack, key) {
	  var copy, env, value;
	  copy = envStack.slice(0);
	  while (copy.length !== 0) {
	    env = copy[0];
	    value = env[key];
	    if (value != null) {
	      return value;
	    }
	    copy.shift();
	  }
	  throw "VALUE CORRESPONDING TO \"" + key + "\" DOES NOT EXIST IN ENV-STACK";
	};

	set = function(env, key, value) {
	  env[key] = value;
	  return value;
	};

	setMainEnv = function(envStack, key, value) {
	  return set(getLast(envStack), key, value);
	};

	unset = function(env, key) {
	  var value;
	  value = env[key];
	  delete env[key];
	  return value;
	};

	unsetMainEnv = function(envStack, key) {
	  return unset(getLast(envStack), key);
	};

	module.exports = {
	  addEnv: addEnv,
	  lookup: lookup,
	  setMainEnv: setMainEnv,
	  unsetMainEnv: unsetMainEnv
	};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var parse, tokenize;

	parse = __webpack_require__(48);

	tokenize = __webpack_require__(49);

	module.exports = function(sourceCode) {
	  return parse(tokenize(sourceCode));
	};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var atomize, binaryGlyphIndex, binaryGlyphTokens, binaryGlyph_question_, boolean_question_, comment, createErlBoolean, createErlIdentifier, createErlIgnore, createErlIndex, createErlList, createErlNil, createErlNumber, createErlString, createErlSymbol, deref, derefGlyph, extractJsValue, float_question_, glyphIndex, glyphTokens, glyph_question_, identifer_question_, ignore, ignoreIfTrue, ignoreIfTrueGlyph, ignoreUnlessTrue, ignoreUnlessTrueGlyph, ignore_bang_, ignore_bang_Glyph, ignore_question_, indexEnd, indexStart, indexStart_question_, integer_question_, keyTokens, listEnd, listStart, listStart_question_, nil, nil_question_, parse, parseBinaryGlyph, parseBoolean, parseFloat10, parseGlyph, parseIndex, parseInt10, parseList, quasiquote, quasiquoteGlyph, quote, quoteGlyph, reverse, spliceUnquote, spliceUnquoteGlyph, startsWith_question_, string_question_, stripUnderscores, unquote, unquoteGlyph, _false, _parse, _true,
	  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	binaryGlyphTokens = __webpack_require__(39).binaryGlyphTokens;

	comment = __webpack_require__(38);

	createErlBoolean = __webpack_require__(30).createErlBoolean;

	createErlIdentifier = __webpack_require__(30).createErlIdentifier;

	createErlIgnore = __webpack_require__(30).createErlIgnore;

	createErlIndex = __webpack_require__(30).createErlIndex;

	createErlList = __webpack_require__(30).createErlList;

	createErlNil = __webpack_require__(30).createErlNil;

	createErlNumber = __webpack_require__(30).createErlNumber;

	createErlString = __webpack_require__(30).createErlString;

	createErlSymbol = __webpack_require__(30).createErlSymbol;

	deref = __webpack_require__(39).deref;

	derefGlyph = __webpack_require__(39).derefGlyph;

	extractJsValue = __webpack_require__(30).extractJsValue;

	_false = __webpack_require__(39)._false;

	glyphTokens = __webpack_require__(39).glyphTokens;

	ignore = __webpack_require__(39).ignore;

	ignore_bang_ = __webpack_require__(39).ignore_bang_;

	ignore_bang_Glyph = __webpack_require__(39).ignore_bang_Glyph;

	ignoreIfTrue = __webpack_require__(39).ignoreIfTrue;

	ignoreIfTrueGlyph = __webpack_require__(39).ignoreIfTrueGlyph;

	ignoreUnlessTrue = __webpack_require__(39).ignoreUnlessTrue;

	ignoreUnlessTrueGlyph = __webpack_require__(39).ignoreUnlessTrueGlyph;

	indexEnd = __webpack_require__(39).indexEnd;

	indexStart = __webpack_require__(39).indexStart;

	keyTokens = __webpack_require__(39).keyTokens;

	listEnd = __webpack_require__(39).listEnd;

	listStart = __webpack_require__(39).listStart;

	nil = __webpack_require__(39).nil;

	quasiquote = __webpack_require__(39).quasiquote;

	quote = __webpack_require__(39).quote;

	spliceUnquote = __webpack_require__(39).spliceUnquote;

	unquote = __webpack_require__(39).unquote;

	quasiquoteGlyph = __webpack_require__(39).quasiquoteGlyph;

	quoteGlyph = __webpack_require__(39).quoteGlyph;

	spliceUnquoteGlyph = __webpack_require__(39).spliceUnquoteGlyph;

	unquoteGlyph = __webpack_require__(39).unquoteGlyph;

	reverse = __webpack_require__(31).reverse;

	_true = __webpack_require__(39)._true;

	atomize = function(token) {
	  var createErlValue;
	  createErlValue = (function() {
	    switch (false) {
	      case !nil_question_(token):
	        return createErlNil;
	      case !ignore_question_(token):
	        return createErlIgnore;
	      case !boolean_question_(token):
	        return function(__i) {
	          return createErlBoolean(parseBoolean(__i));
	        };
	      case !string_question_(token):
	        return createErlString;
	      case !identifer_question_(token):
	        return createErlIdentifier;
	      case !integer_question_(token):
	        return function(__i) {
	          return createErlNumber(parseInt10(__i));
	        };
	      case !float_question_(token):
	        return function(__i) {
	          return createErlNumber(parseFloat10(__i));
	        };
	      default:
	        return createErlSymbol;
	    }
	  })();
	  return createErlValue(token);
	};

	boolean_question_ = function(token) {
	  return token === _false || token === _true;
	};

	float_question_ = function(token) {
	  return /^(-|\+)?[0-9](_|\d)*\.(\d|(\d(_|\d)*\d))$/.test(token);
	};

	binaryGlyph_question_ = function(token) {
	  return __indexOf.call(binaryGlyphTokens, token) >= 0;
	};

	glyph_question_ = function(token) {
	  return __indexOf.call(glyphTokens, token) >= 0;
	};

	ignore_question_ = function(token) {
	  return token === ignore;
	};

	indexStart_question_ = function(token) {
	  return token === indexStart;
	};

	integer_question_ = function(token) {
	  return /^(0(?!\.)|((-|\+)?[1-9](_|\d)*$))/.test(token);
	};

	listStart_question_ = function(token) {
	  return token === listStart;
	};

	nil_question_ = function(token) {
	  return token === nil;
	};

	_parse = function(token, tokens) {
	  switch (false) {
	    case !listStart_question_(token):
	      return parseList(tokens);
	    case !indexStart_question_(token):
	      return parseIndex(tokens);
	    case !glyph_question_(token):
	      return parseGlyph(glyphIndex[token], tokens);
	    case !binaryGlyph_question_(token):
	      return parseBinaryGlyph(binaryGlyphIndex[token], tokens);
	    default:
	      return atomize(token);
	  }
	};

	parse = function(tokens) {
	  if (tokens === comment) {
	    return comment;
	  }
	  return _parse(tokens.shift(), tokens);
	};

	parseBinaryGlyph = function(keyword, tokens) {
	  return createErlList(createErlSymbol(keyword), createErlList(parse(tokens), createErlList(parse(tokens))));
	};

	parseBoolean = function(token) {
	  return token === _true;
	};

	parseFloat10 = function(token) {
	  return parseFloat(stripUnderscores(token), 10);
	};

	parseGlyph = function(keyword, tokens) {
	  return createErlList(createErlSymbol(keyword), createErlList(parse(tokens)));
	};

	parseIndex = function(tokens) {
	  var jsIndex, key, keyStep_question_, token;
	  jsIndex = {};
	  key = null;
	  keyStep_question_ = true;
	  while ((token = tokens.shift()) !== indexEnd) {
	    if (keyStep_question_) {
	      key = _parse(token, tokens);
	      keyStep_question_ = false;
	    } else {
	      jsIndex[extractJsValue(key)] = _parse(token, tokens);
	      keyStep_question_ = true;
	    }
	  }
	  return createErlIndex(jsIndex);
	};

	parseInt10 = function(token) {
	  return parseInt(stripUnderscores(token), 10);
	};

	parseList = function(tokens) {
	  var erlList, token;
	  erlList = createErlList();
	  while ((token = tokens.shift()) !== listEnd) {
	    erlList = createErlList(_parse(token, tokens), erlList);
	  }
	  return reverse(erlList);
	};

	startsWith_question_ = function(char) {
	  return function(token) {
	    return token[0] === char;
	  };
	};

	stripUnderscores = function(token) {
	  return token.replace(/_/g, '');
	};

	glyphIndex = {};

	glyphIndex[derefGlyph] = deref;

	glyphIndex[ignore_bang_Glyph] = ignore_bang_;

	glyphIndex[quasiquoteGlyph] = quasiquote;

	glyphIndex[quoteGlyph] = quote;

	glyphIndex[spliceUnquoteGlyph] = spliceUnquote;

	glyphIndex[unquoteGlyph] = unquote;

	binaryGlyphIndex = {};

	binaryGlyphIndex[ignoreIfTrueGlyph] = ignoreIfTrue;

	binaryGlyphIndex[ignoreUnlessTrueGlyph] = ignoreUnlessTrue;

	string_question_ = startsWith_question_('"');

	identifer_question_ = startsWith_question_(':');

	module.exports = parse;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var commentSignal, comment_question_, createTokenRegex, meaningful_question_, tokenize;

	commentSignal = __webpack_require__(38);

	comment_question_ = function(match) {
	  return match[0] === ';';
	};

	createTokenRegex = function() {
	  return /[\s,]*(~@|\#\+|\#\-|\#\!|[\[\](){}'`~@^]|"(?:\\.|[^\\"])*"|;.*|[^\s\[\](){}'"`,;]*)/g;
	};

	meaningful_question_ = function(match) {
	  return match !== '';
	};

	tokenize = function(sourceCode) {
	  var match, result, tokenRegex;
	  tokenRegex = createTokenRegex();
	  result = [];
	  while (meaningful_question_(match = tokenRegex.exec(sourceCode)[1])) {
	    if (comment_question_(match)) {
	      continue;
	    }
	    result.push(match);
	  }
	  if (result.length === 0) {
	    return commentSignal;
	  } else {
	    return result;
	  }
	};

	module.exports = tokenize;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

	module.exports = "(do\n (def! fix*\n (fn* (f)\n ( (fn* (x) (f (fn* (& ys) (apply (x x) ys))))\n (fn* (x) (f (fn* (& ys) (apply (x x) ys)))))))\n\n (def! memfix*\n (fn* (f)\n (let* (cache {})\n (\n (fn* (x cache)\n (f\n (fn* (z)\n (if (contains? cache z)\n (get cache z)\n (let* (result ((fn* (y) ((x x cache) y)) z))\n (do (set! cache z result) result))))\n cache))\n (fn* (x cache)\n (f\n (fn* (z)\n (if (contains? cache z)\n (get cache z)\n (let* (result ((fn* (y) ((x x cache) y)) z))\n (do (set! cache z result) result))))\n cache))\n cache))))\n\n (def! _0 car)\n (def! _1 (fn* (xs) (nth 1 xs)))\n (def! _2 (fn* (xs) (nth 2 xs)))\n\n (def! swap! (macro* (atom & xs)\n (if (empty? xs)\n atom\n `(let* (-atom- ~atom)\n (do\n (reset! -atom- (~(car xs) (deref -atom-) ~@(cdr xs)))\n (deref -atom-))))))\n\n (def! *gensym-counter* (atom 0))\n\n (def! gensym (fn* ()\n (symbol (string \"G__\" (swap! *gensym-counter* incr)))))\n\n (def! or (macro* (& xs)\n (if (empty? xs)\n false\n (let* (-query- (gensym))\n `(let* (~-query- ~(car xs))\n (if ~-query- \n ~-query-\n (or ~@(cdr xs))))))))\n\n (def! and (macro* (& xs)\n (if (empty? xs)\n true\n (let* (-query- (gensym))\n `(let* (~-query- ~(car xs))\n (if ~-query-\n (and ~@(cdr xs))\n false))))))\n\n (def! cond (macro* (& xs)\n (if (empty? xs)\n nil\n (if (empty? (cdr xs))\n (throw \"`cond` requires an even number of forms.\")\n (let* (-query- (gensym))\n `(let* (~-query- ~(car xs))\n (if ~-query-\n ~(_1 xs)\n (cond ~@(cdr (cdr xs))))))))))\n\n (def! loop (macro* (form0 form1)\n `(let* (loop (memfix* (fn* (loop) (fn* (~(_0 form0)) ~form1)))) (loop ~(_1 form0)))))\n\n (def! -> (macro* (& xs)\n (if (empty? xs)\n nil\n (let* (x (car xs)\n xs (cdr xs))\n (if (empty? xs)\n x\n (let* (form (car xs)\n forms (cdr xs))\n (if (empty? forms)\n (if (list? form)\n (if (= (symbol \"fn*\") (car form))\n `(~form ~x)\n `(~(car form) ~x ~@(cdr form)))\n (list form x))\n `(-> (-> ~x ~form) ~@forms))))))))\n\n (def! ->> (macro* (& xs)\n (if (empty? xs)\n nil\n (let* (x (car xs)\n xs (cdr xs))\n (if (empty? xs)\n x\n (let* (form (car xs)\n forms (cdr xs))\n (if (empty? forms)\n (if (list? form)\n (if (= (symbol \"fn*\") (car form))\n `(~form ~x)\n `(~@form ~x))\n (list form x))\n `(->> (->> ~x ~form) ~@forms))))))))\n\n (def! ->* (macro* (& xs) `(fn* (-x-) (-> -x- ~@xs))))\n\n (def! ->>* (macro* (& xs) `(fn* (-x-) (->> -x- ~@xs))))\n\n (def! not (fn* (x) (if x false true)))\n (def! incr (->* (+ 1)))\n (def! decr (->* (- 1)))\n (def! zero? (->* (= 0)))\n\n (def! identity (fn* (x) x))\n\n (def! constant-fn (fn* (x) (fn* (y) x)))\n\n (def! call-on (fn* (& xs) (fn* (fn) (apply fn xs))))\n\n (def! step-into-list (fn* (xs fn0 fn1)\n (let* (x (car xs)\n -xs- (cdr xs))\n (if (empty? -xs-)\n (fn1 x)\n (fn0 x -xs-)))))\n\n (def! apply-on (fn* (& xs)\n (step-into-list\n xs\n (fn* (arguments -xs-) (apply (car -xs-) arguments))\n (fn* (arguments) (fn* (f) (apply f arguments))))))\n\n (def! reduce (fn* (f seed xs)\n (if (empty? xs)\n seed\n (reduce f (f seed (car xs)) (cdr xs)))))\n\n (def! filter (fn* (predicate xs)\n (reverse\n (reduce\n (fn* (memo x)\n (if (predicate x)\n (cons x memo)\n memo))\n '()\n xs))))\n\n (def! map (fn* (f xs)\n (reverse (reduce (fn* (memo x) (cons (f x) memo)) '() xs))))\n\n (def! every? (fn* (pred xs)\n (if (empty? xs)\n true\n (if (pred (car xs))\n (every? pred (cdr xs))\n false))))\n\n (def! some? (fn* (pred xs)\n (if (empty? xs)\n false\n (if (pred (car xs))\n true\n (some? pred (cdr xs))))))\n\n (def! letmemrec* (macro* (alias expr)\n `(let* (~(car alias) (memfix* (fn* (~(car alias)) ~(_1 alias)))) ~expr)))\n\n (def! skip (fn* (nbr xs)\n (letrec* (-skip- (fn* (ys)\n (let* (nbr (car ys)\n xs (_1 ys))\n (cond\n (= 0 nbr) xs\n (= 1 nbr) (cdr xs)\n \"default\" (-skip- (list (decr nbr) (cdr xs)))))))\n (-skip- (list nbr xs)))))\n\n (def! invokable? (fn* (x) (or (function? x) (macro? x))))\n\n (def! . (macro* (x key & xs)\n (if (empty? xs)\n `(get ~x ~key)\n `((get ~x ~key) ~@xs))))\n\n (def! .. (fn* (lo hi)\n (letrec* (-..- (fn* (xs)\n (let* (lo (_0 xs)\n hi (_1 xs)\n -list- (_2 xs))\n (if (= lo hi)\n (cons hi -list-)\n (-..- (list lo (decr hi) (cons hi -list-)))))))\n (-..- (list lo hi '())))))\n\n (def! defrec! (macro* (fn-name fn-body)\n `(def! ~fn-name (letrec* (~fn-name ~fn-body) ~fn-name))))\n\n (def! for* (macro* (loop-parameters body)\n `(loop\n ~(_0 loop-parameters)\n (if ~(_1 loop-parameters)\n (do ~body (loop ~(_2 loop-parameters)))\n nil))))\n\n (def! for-each (fn* (f xs)\n (reduce\n (fn* (memo x) (do (f x) memo))\n nil\n xs)))\n\n (def! n-times (fn* (n f)\n (loop (i 0)\n (if (= i n)\n nil\n (do (f i) (loop (+ i 1)))))))\n\n (def! tap (fn* (f x) (do (f x) x)))\n\n (def! with-side-effect (fn* (thunk x)\n (do (thunk) x)))\n\n (def! thunk (macro* (form)\n `(fn* () ~form)))\n\n (def! call (macro* (f & xs) `(~f ~@xs)))\n\n (def! apply (macro* (f xs) `(eval (cons ~f ~xs))))\n\n (def! eval-string (fn* (erlString) (eval (parse erlString))))\n\n)";


/***/ }),
/* 51 */
/***/ (function(module, exports) {

	module.exports = {
	  entry: './src/initializeErlkingLispConsole.js',
	  output: {
	    path: 'public',
	    filename: 'erlking.js'
	  },
	  node: {
	    fs: "empty"
	  }
	};


/***/ })
/******/ ]);