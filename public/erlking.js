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
	module.exports = __webpack_require__(52);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var initialize    = __webpack_require__(2);
	var interpretLisp = __webpack_require__(28);
	var keyTokens     = __webpack_require__(39).keyTokens;

	var _keyTokens =  keyTokens.map(function (keyToken) {
	  return ':' + keyToken;
	});

	var promptLabel = 'Lisp> ';

	function getCandidates(prefix) {
	  var envKeys = interpretLisp("(keys (-get-current-env-))")[0]
	      .value
	      .slice(1, -1)
	      .split(' ');
	  return getMatches(prefix, _keyTokens.concat(envKeys));
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

	var circumpendQuotes     = __webpack_require__(29).circumpendQuotes;
	var createErlString      = __webpack_require__(30).createErlString;
	var fromArray            = __webpack_require__(31).fromArray;
	var getLispEnvironment   = __webpack_require__(33);
	var _process             = __webpack_require__(44);
	var _serialize           = __webpack_require__(37);
	var standardFnsAndMacros = __webpack_require__(51);
	var tokenizeAndParse     = __webpack_require__(47);

	var __hasProp = {}.hasOwnProperty;

	var _createErlString = function(jsString) {
	  return createErlString(circumpendQuotes(jsString));
	};

	var encapsulate = function(type) {
	  return function(erlValue) {
	    return {
	      effect: {
	        type: type
	      },
	      value: erlValue
	    };
	  };
	};

	var error = function(errorMessage) {
	  return [encapsulate('error')("repl error: (" + errorMessage + ")")];
	};

	var flattenIfNecessary = function(effects) {
	  var value;
	  var result = effects;
	  while (result.length === 1 && Array.isArray(value = result[0].value)) {
	    result = flattenIfNecessary(value);
	  }
	  return result;
	};

	var _interpret = function(envs, jsString) {
	  try {
	    return serialize(
	      flattenIfNecessary(
	        _process(tokenizeAndParse)(envs)(jsString)));
	  } catch (_error) {
	    return error(_error);
	  }
	};

	var interpret = function(jsString, userJsArray) {
	  if (userJsArray != null) {
	    var userEnv = {
	      '*ARGV*': fromArray(userJsArray.map(_createErlString))
	    };
	    return _interpret([userEnv, environment], jsString);
	  } else {
	    return _interpret([environment], jsString);
	  }
	};

	var serialize = function(results) {
	  return results.map(function(result) {
	    var _result = {};
	    for (var key in result) {
	      if (!__hasProp.call(result, key)) continue;
	      var value = result[key];
	      if (key === 'effect') {
	        _result[key] = value;
	      } else {
	        _result[key] = _serialize(value);
	      }
	    }
	    return _result;
	  });
	};

	var environment = getLispEnvironment({
	  display: encapsulate('display')
	});

	interpret(standardFnsAndMacros);

	module.exports = interpret;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	var circumpendQuotes = function(jsString) {
	  return '"' + jsString + '"';
	};

	var isJsNaN = function(val) {
	  return isJsNumber(val) && val !== val;
	};

	var isJsNumber = function(val) {
	  return {}.toString.call(val) === '[object Number]';
	};

	var isJsString = function(jsVal) {
	  return Object.prototype.toString.call(jsVal) === '[object String]';
	};

	module.exports = {
	  circumpendQuotes: circumpendQuotes,
	  isJsNaN: isJsNaN,
	  isJsNumber: isJsNumber,
	  isJsString: isJsString
	};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var createErlList = __webpack_require__(31).createErlList;
	var erlAtomType   = __webpack_require__(32).erlAtomType;
	var erlTypes      = __webpack_require__(32).erlTypes;

	var createErlAtom = function(erlValue) {
	  return {
	    erlValue: erlValue,
	    type: erlAtomType
	  };
	};

	var createErlBoolean = function(jsBoolean) {
	  if (jsBoolean) {
	    return erlTrue;
	  } else {
	    return erlFalse;
	  }
	};

	var createErlIgnore = function() {
	  return erlIgnore;
	};

	var createErlNil = function() {
	  return erlNil;
	};

	var createErlValue = function(jsValue, erlType) {
	  return {
	    jsValue: jsValue,
	    type: erlType
	  };
	};

	var createFactoryAndPredicate = function(erlType) {
	  var factory = function(jsValue) {
	    return createErlValue(jsValue, erlType);
	  };
	  var predicate = function(erlValue) {
	    return erlValue.type === erlType;
	  };
	  return [factory, predicate];
	};

	var createPredicate = function(constant) {
	  return function(value) {
	    return value === constant;
	  };
	};

	var extractJsValue = function(erlValue) {
	  return erlValue.jsValue;
	};

	var _erlTypes = erlTypes.map(createFactoryAndPredicate);

	var _createErlBoolean              = _erlTypes[0][0];
	var isErlBoolean                   = _erlTypes[0][1];
	var createErlCoreEffectfulFunction = _erlTypes[1][0];
	var isErlCoreEffectfulFunction     = _erlTypes[1][1];
	var createErlCorePureFunction      = _erlTypes[2][0];
	var isErlCorePureFunction          = _erlTypes[2][1];
	var createErlIdentifier            = _erlTypes[3][0];
	var isErlIdentifier                = _erlTypes[3][1];
	var createErlIndex                 = _erlTypes[4][0];
	var isErlIndex                     = _erlTypes[4][1];
	var createErlKeyword               = _erlTypes[5][0];
	var isErlKeyword                   = _erlTypes[5][1];
	var _createErlList                 = _erlTypes[6][0];
	var isErlList                      = _erlTypes[6][1];
	var createErlMacro                 = _erlTypes[7][0];
	var isErlMacro                     = _erlTypes[7][1];
	var createErlNumber                = _erlTypes[8][0];
	var isErlNumber                    = _erlTypes[8][1];
	var createErlSpecialForm           = _erlTypes[9][0];
	var isErlSpecialForm               = _erlTypes[9][1];
	var createErlString                = _erlTypes[10][0];
	var isErlString                    = _erlTypes[10][1];
	var createErlSymbol                = _erlTypes[11][0];
	var isErlSymbol                    = _erlTypes[11][1];
	var _createErlUnit                 = _erlTypes[12][0];
	var _isErlUnit                     = _erlTypes[12][1];
	var createErlUserPureFunction      = _erlTypes[13][0];
	var isErlUserPureFunction          = _erlTypes[13][1];
	var _createErlAtom                 = _erlTypes[14][0];
	var isErlAtom                      = _erlTypes[14][1];

	var erlIgnore = _createErlUnit(null);

	var erlNil = _createErlUnit(null);

	var erlBooleans = [false, true].map(_createErlBoolean);

	var erlFalse = erlBooleans[0];
	var erlTrue  = erlBooleans[1];

	var predicates = [erlFalse, erlIgnore, erlNil, erlTrue].map(createPredicate);

	var isErlFalse  = predicates[0];
	var isErlIgnore = predicates[1];
	var isErlNil    = predicates[2];
	var isErlTrue   = predicates[3];

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
	  isErlAtom: isErlAtom,
	  isErlBoolean: isErlBoolean,
	  isErlCoreEffectfulFunction: isErlCoreEffectfulFunction,
	  isErlCorePureFunction: isErlCorePureFunction,
	  erlFalse: erlFalse,
	  isErlFalse: isErlFalse,
	  isErlIdentifier: isErlIdentifier,
	  erlIgnore: erlIgnore,
	  isErlIgnore: isErlIgnore,
	  isErlIndex: isErlIndex,
	  isErlKeyword: isErlKeyword,
	  isErlList: isErlList,
	  isErlMacro: isErlMacro,
	  erlNil: erlNil,
	  isErlNil: isErlNil,
	  isErlNumber: isErlNumber,
	  isErlSpecialForm: isErlSpecialForm,
	  isErlString: isErlString,
	  isErlSymbol: isErlSymbol,
	  erlTrue: erlTrue,
	  isErlTrue: isErlTrue,
	  isErlUserPureFunction: isErlUserPureFunction
	};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var erlTypes = __webpack_require__(32).erlTypes;

	var erlListType = erlTypes[6];

	var __slice = [].slice;

	var car = function(erlList) {
	  if (isEmpty(erlList)) {
	    return EOL;
	  } else {
	    return erlList.value;
	  }
	};

	var cdr = function(erlList) {
	  if (isEmpty(erlList)) {
	    return EOL;
	  } else {
	    return erlList.next;
	  }
	};

	var areEqual = function(list0, list1, _areEqual) {
	  while (!(isEmpty(list0) || isEmpty(list1))) {
	    if (!_areEqual(list0.value, list1.value)) {
	      return false;
	    }
	    list0 = cdr(list0);
	    list1 = cdr(list1);
	  }
	  return isEmpty(list0) && isEmpty(list1);
	};

	var concat = function() {
	  var erlLists = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  if (erlLists.length === 0) {
	    return EOL;
	  }
	  var result = copy(erlLists[0]);
	  var tail = lastTail(result);
	  var remaining = erlLists.slice(1);
	  var len = remaining.length;
	  for (var i = 0; i < len; i++) {
	    var erlList = remaining[i];
	    var _copy = copy(erlList);
	    if (isEmpty(tail)) {
	      result = _copy;
	      tail = lastTail(result);
	      continue;
	    }
	    if (!isEmpty(_copy)) {
	      tail.next = _copy;
	      tail = lastTail(_copy);
	    }
	  }
	  return result;
	};

	var cons = function(erlArgs) {
	  return createErlList(car(erlArgs), next(erlArgs));
	};

	var copy = function(erlList) {
	  return map((function(x) {
	    return x;
	  }), erlList);
	};

	var createErlList = function(value, nextNode) {
	  if (value == null) {
	    return EOL;
	  }
	  return createNode(value, nextNode != null ? nextNode : EOL);
	};

	var createNode = function(value, nextNode) {
	  return {
	    type: erlListType,
	    value: value,
	    next: nextNode
	  };
	};

	var drop = function(nbr, erlList) {
	  while (nbr !== 0) {
	    erlList = cdr(erlList);
	    nbr = nbr - 1;
	  }
	  return erlList;
	};

	var isEmpty = function(value) {
	  return value === EOL;
	};

	var filter = function(predicate, list) {
	  var _reduce = function(list, value) {
	    if (predicate(value)) {
	      return createErlList(value, list);
	    } else {
	      return list;
	    }
	  };
	  return reverse(reduce(EOL, _reduce, list));
	};

	var forEach = function(fn, list) {
	  var result = list;
	  while (!isEmpty(list)) {
	    result = fn(list.value);
	    list = recurse(list);
	  }
	  return result;
	};

	var fromArray = function(array) {
	  var _reduce = function(list, value) {
	    return createErlList(value, list);
	  };
	  return array.reverse().reduce(_reduce, createErlList());
	};

	var last = function(erlList) {
	  return car(lastTail(erlList));
	};

	var lastTail = function(erlList) {
	  if (isEmpty(erlList)) {
	    return erlList;
	  }
	  var prior = erlList;
	  var current = cdr(erlList);
	  while (!isEmpty(current)) {
	    prior = cdr(prior);
	    current = cdr(current);
	  }
	  return prior;
	};

	var map = function(fn, list) {
	  var _reduce = function(list, value) {
	    return createErlList(fn(value), list);
	  };
	  return reverse(reduce(EOL, _reduce, list));
	};

	var next = function(erlList) {
	  return car(cdr(erlList));
	};

	var recurse = function(list) {
	  if (isEmpty(list)) {
	    return list;
	  } else {
	    return list.next;
	  }
	};

	var reduce = function(seed, fn, list) {
	  while (!isEmpty(list)) {
	    seed = fn(seed, list.value);
	    list = recurse(list);
	  }
	  return seed;
	};

	var reduceBy2 = function(seed, fn, list) {
	  while (!isEmpty(list)) {
	    var value0 = list.value;
	    list = recurse(list);
	    var value1 = list.value;
	    seed = fn(seed, value0, value1);
	    list = recurse(list);
	  }
	  return seed;
	};

	var reverse = function(list) {
	  var result = EOL;
	  while (!isEmpty(list)) {
	    result = createErlList(list.value, result);
	    list = list.next;
	  }
	  return result;
	};

	var take = function(nbr, erlList) {
	  var result = createErlList();
	  while (nbr !== 0) {
	    var node = car(erlList);
	    erlList = cdr(erlList);
	    result = createErlList(node, result);
	    nbr = nbr - 1;
	  }
	  return reverse(result);
	};

	var toArray = function(list) {
	  var _reduce = function(jsArray, value) {
	    jsArray.push(value);
	    return jsArray;
	  };
	  return reduce([], _reduce, list);
	};

	var toPartialArray = function(nbr, list) {
	  var result = [];
	  while (nbr !== 0) {
	    var node = car(list);
	    list = cdr(list);
	    result.push(node);
	    nbr = nbr - 1;
	  }
	  result.push(list);
	  return result;
	};

	var zip = function(seed, fn, list0, list1) {
	  while (!(isEmpty(list0) || isEmpty(list1))) {
	    var value0 = car(list0);
	    list0 = cdr(list0);
	    var value1 = car(list1);
	    list1 = cdr(list1);
	    seed = fn(seed, value0, value1);
	  }
	  return seed;
	};

	var _EOL = {};

	var EOL = createNode(_EOL, _EOL);

	module.exports = {
	  areEqual: areEqual,
	  car: car,
	  cdr: cdr,
	  concat: concat,
	  cons: cons,
	  copy: copy,
	  createErlList: createErlList,
	  drop: drop,
	  isEmpty: isEmpty,
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

	var erlBooleanType               = 'erlBooleanType';
	var erlCoreEffectfulFunctionType = 'erlCoreEffectfulFunctionType';
	var erlCorePureFunctionType      = 'erlCorePureFunctionType';
	var erlIdentifierType            = 'erlIdentifierType';
	var erlIndexType                 = 'erlIndexType';
	var erlKeywordType               = 'erlKeywordType';
	var erlListType                  = 'erlListType';
	var erlMacroType                 = 'erlMacroType';
	var erlNumberType                = 'erlNumberType';
	var erlSpecialFormType           = 'erlSpecialFormType';
	var erlStringType                = 'erlStringType';
	var erlSymbolType                = 'erlSymbolType';
	var erlUnitType                  = 'erlUnitType';
	var erlUserPureFunctionType      = 'erlUserPureFunctionType';
	var erlAtomType                  = 'erlAtomType';

	var erlTypes = [
	  erlBooleanType,
	  erlCoreEffectfulFunctionType,
	  erlCorePureFunctionType,
	  erlIdentifierType,
	  erlIndexType,
	  erlKeywordType,
	  erlListType,
	  erlMacroType,
	  erlNumberType,
	  erlSpecialFormType,
	  erlStringType,
	  erlSymbolType,
	  erlUnitType,
	  erlUserPureFunctionType,
	  erlAtomType
	];

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

	var setEnv0 = __webpack_require__(34);
	var setEnv1 = __webpack_require__(35);
	var setEnv2 = __webpack_require__(41);
	var setEnv3 = __webpack_require__(42);
	var setEnv4 = __webpack_require__(50);

	var getLispEnvironment = function(config) {
	  var display = config.display;
	  var environment = {};
	  config = {
	    display: display,
	    environment: environment
	  };
	  setEnv0(config);
	  setEnv1(config);
	  setEnv2(config);
	  setEnv3(config);
	  setEnv4(config);
	  return environment;
	};

	module.exports = getLispEnvironment;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var createErlBoolean          = __webpack_require__(30).createErlBoolean;
	var createErlCorePureFunction = __webpack_require__(30).createErlCorePureFunction;
	var createErlIdentifier       = __webpack_require__(30).createErlIdentifier;
	var createErlIndex            = __webpack_require__(30).createErlIndex;
	var createErlNumber           = __webpack_require__(30).createErlNumber;
	var createErlString           = __webpack_require__(30).createErlString;
	var erlNil                    = __webpack_require__(30).erlNil;
	var extractJsValue            = __webpack_require__(30).extractJsValue;
	var fromArray                 = __webpack_require__(31).fromArray;
	var isJsNaN                   = __webpack_require__(29).isJsNaN;
	var isJsNumber                = __webpack_require__(29).isJsNumber;
	var isJsString                = __webpack_require__(29).isJsString;
	var reduce                    = __webpack_require__(31).reduce;
	var toArray                   = __webpack_require__(31).toArray;

	var  __slice  = [].slice;
	var __hasProp = {}.hasOwnProperty;

	var add = function() {
	  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlNumber(nbrs.reduce(function(x, nbr) {
	    return x += nbr;
	  }));
	};

	var contains = function(index, key) {
	  return createErlBoolean(key in index);
	};

	var dissoc = function() {
	  var index = arguments[0];
	  var keys = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
	  var len = keys.length;
	  var copy = {};
	  for (var key in index) {
	    if (!__hasProp.call(index, key)) continue;
	    var value = index[key];
	    copy[key] = value;
	  }
	  for (var i = 0; i < len; i++) {
	    var key = keys[i];
	    delete copy[key];
	  }
	  return createErlIndex(copy);
	};

	var divide = function() {
	  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlNumber(nbrs.reduce(function(x, nbr) {
	    return x /= nbr;
	  }));
	};

	var exponentiate = function() {
	  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlNumber(nbrs.reduce(function(x, nbr) {
	    return Math.pow(x, nbr);
	  }));
	};

	var get = function(jsIndex, jsKey) {
	  return jsIndex[jsKey];
	};

	var getEnvironment = function(config) {
	  var environment = config.environment;
	  setCoreFnsOnJsValues_bang_(environment, functionsOnJsValues);
	  return environment;
	};

	var greaterThanOrEqual = function() {
	  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlBoolean(nbrs[0] >= nbrs[1]);
	};

	var greaterThan = function() {
	  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlBoolean(nbrs[0] > nbrs[1]);
	};

	var index = function() {
	  var args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  var len = args.length;
	  var _index = {};
	  for (var i = 0; i < len; i++) {
	    var k = args[i];
	    if (i % 2 === 0) {
	      _index[k] = args[i + 1];
	    }
	  }
	  return createErlIndex(_index);
	};

	var keys = function(index) {
	  var _keys = [];
	  for (var key in index) {
	    if (!__hasProp.call(index, key)) continue;
	    var value = index[key];
	    var jsNbr = parseFloat(key, 10);
	    var _key = isJsNaN(jsNbr)
	        ? (key[0] === ':' ? createErlIdentifier : createErlString)(key)
	        : createErlNumber(jsNbr);
	    _keys.push(_key);
	  }
	  return fromArray(_keys);
	};

	var lengthString = function(jsVal) {
	  if (!isJsString(jsVal)) {
	    return erlNil;
	  }
	  return createErlNumber(jsVal.length - 2);
	};

	var lessThan = function() {
	  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlBoolean(nbrs[0] < nbrs[1]);
	};

	var lessThanOrEqual = function() {
	  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlBoolean(nbrs[0] <= nbrs[1]);
	};

	var lift = function(fnOnJsValues) {
	  return function(erlValueList) {
	    return fnOnJsValues.apply(null, (toArray(erlValueList)).map(extractJsValue));
	  };
	};

	var max = function() {
	  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlNumber(Math.max.apply(Math, nbrs));
	};

	var min = function() {
	  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlNumber(Math.min.apply(Math, nbrs));
	};

	var mod = function(nbr0, nbr1) {
	  return createErlNumber(nbr0 % nbr1);
	};

	var multiply = function() {
	  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlNumber(nbrs.reduce(function(x, nbr) {
	    return x *= nbr;
	  }));
	};

	var negate = function(nbr) {
	  return createErlNumber(-1 * nbr);
	};

	var parseNumber = function(jsVal) {
	  if (isJsNumber(jsVal)) {
	    return jsVal;
	  }
	  if (!isJsString(jsVal)) {
	    return erlNil;
	  }
	  var jsNbr = parseFloat(stripQuotes(jsVal), 10);
	  if (isJsNaN(jsNbr)) {
	    return erlNil;
	  } else {
	    return createErlNumber(jsNbr);
	  }
	};

	var setCoreFnsOnJsValues_bang_ = function(env, fns) {
	  var _results = [];
	  for (var fnName in fns) {
	    if (!__hasProp.call(fns, fnName)) continue;
	    var fn = fns[fnName];
	    env[fnName] = createErlCorePureFunction(lift(fn));
	    _results.push(env[fnName]);
	  }
	  return _results;
	};

	var subtract = function() {
	  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  return createErlNumber(nbrs.reduce(function(x, nbr) {
	    return x -= nbr;
	  }));
	};

	var vals = function(index) {
	  var values = [];
	  for (var key in index) {
	    if (!__hasProp.call(index, key)) {
	      continue;
	    }
	    var value = index[key];
	    values.push(value);
	  }
	  return fromArray(values);
	};

	var functionsOnJsValues = {
	  '+': add,
	  'contains?': contains,
	  'dissoc': dissoc,
	  '/': divide,
	  '**': exponentiate,
	  'get': get,
	  '>': greaterThan,
	  '>=': greaterThanOrEqual,
	  'index': index,
	  'keys': keys,
	  'length-string': lengthString,
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

	/* WEBPACK VAR INJECTION */(function(process) {var areEqual                  = __webpack_require__(31).areEqual;
	var car                       = __webpack_require__(31).car;
	var cdr                       = __webpack_require__(31).cdr;
	var circumpendQuotes          = __webpack_require__(29).circumpendQuotes;
	var concat                    = __webpack_require__(31).concat;
	var createErlAtom             = __webpack_require__(30).createErlAtom;
	var createErlBoolean          = __webpack_require__(30).createErlBoolean;
	var createErlCorePureFunction = __webpack_require__(30).createErlCorePureFunction;
	var createErlIndex            = __webpack_require__(30).createErlIndex;
	var createErlList             = __webpack_require__(30).createErlList;
	var createErlNumber           = __webpack_require__(30).createErlNumber;
	var createErlString           = __webpack_require__(30).createErlString;
	var createErlSymbol           = __webpack_require__(30).createErlSymbol;
	var drop                      = __webpack_require__(31).drop;
	var erlFalse                  = __webpack_require__(30).erlFalse;
	var erlIgnore                 = __webpack_require__(30).erlIgnore;
	var erlNil                    = __webpack_require__(30).erlNil;
	var erlTrue                   = __webpack_require__(30).erlTrue;
	var extractJsValue            = __webpack_require__(30).extractJsValue;
	var fromArray                 = __webpack_require__(31).fromArray;
	var interpret                 = __webpack_require__(28);
	var isEmpty                   = __webpack_require__(31).isEmpty;
	var isErlAtom                 = __webpack_require__(30).isErlAtom;
	var isErlCorePureFunction     = __webpack_require__(30).isErlCorePureFunction;
	var isErlBoolean              = __webpack_require__(30).isErlBoolean;
	var isErlFalse                = __webpack_require__(30).isErlFalse;
	var isErlIndex                = __webpack_require__(30).isErlIndex;
	var isErlList                 = __webpack_require__(30).isErlList;
	var isErlMacro                = __webpack_require__(30).isErlMacro;
	var isErlNil                  = __webpack_require__(30).isErlNil;
	var isErlNumber               = __webpack_require__(30).isErlNumber;
	var isErlString               = __webpack_require__(30).isErlString;
	var isErlSymbol               = __webpack_require__(30).isErlSymbol;
	var isErlTrue                 = __webpack_require__(30).isErlTrue;
	var isErlUserPureFunction     = __webpack_require__(30).isErlUserPureFunction;
	var last                      = __webpack_require__(31).last;
	var next                      = __webpack_require__(31).next;
	var recurse                   = __webpack_require__(31).recurse;
	var reduce                    = __webpack_require__(31).reduce;
	var reverse                   = __webpack_require__(31).reverse;
	var serialize                 = __webpack_require__(37);
	var take                      = __webpack_require__(31).take;
	var toArray                   = __webpack_require__(31).toArray;
	var toPartialArray            = __webpack_require__(31).toPartialArray;

	var __slice   = [].slice;
	var __hasProp = {}.hasOwnProperty;

	var append = function(erlArgs) {
	  var erlArgsArray = toArray(erlArgs);
	  var erlList = erlArgsArray[0];
	  var erlValues = 2 <= erlArgsArray.length ? __slice.call(erlArgsArray, 1) : [];
	  return concat(erlList, fromArray(erlValues));
	};

	var _areEqual = function(erlArgs) {
	  var partialArray = toPartialArray(2, erlArgs);
	  var erlValue0 = partialArray[0];
	  var erlValue1 = partialArray[1];
	  var __areEqual = function(erlValue0, erlValue1) {
	    if (isErlList(erlValue0) && isErlList(erlValue1)) {
	      return areEqual(erlValue0, erlValue1, __areEqual);
	    } else if (isErlIndex(erlValue0) && isErlIndex(erlValue1)) {
	      var jsIndex0 = erlValue0.jsValue;
	      var jsIndex1 = erlValue1.jsValue;
	      return (__areEqual(keys(jsIndex0), keys(jsIndex1)))
	        && (__areEqual(vals(jsIndex0), vals(jsIndex1)));
	    } else {
	      return erlValue0.jsValue === erlValue1.jsValue;
	    }
	  };
	  return createErlBoolean(__areEqual(erlValue0, erlValue1));
	};

	var assoc = function(erlArgs) {
	  var args;
	  var jsIndex = extractJsValue(car(erlArgs));
	  args = cdr(erlArgs);
	  var copy = {};
	  for (var key in jsIndex) {
	    if (!__hasProp.call(jsIndex, key)) {
	      continue;
	    }
	    var value = jsIndex[key];
	    copy[key] = value;
	  }
	  while (!isEmpty(args)) {
	    var k = car(args);
	    var v = next(args);
	    args = recurse(recurse(args));
	    copy[extractJsValue(k)] = v;
	  }
	  return createErlIndex(copy);
	};

	var atom = function(erlArgs) {
	  return createErlAtom(car(erlArgs));
	};

	var _car = function(erlArgs) {
	  var arg = car(erlArgs);
	  if (isErlList(arg)) {
	    return car(arg);
	  } else {
	    return erlNil;
	  }
	};

	var _cdr = function(erlArgs) {
	  var arg = car(erlArgs);
	  if (isErlList(arg)) {
	    return cdr(arg);
	  } else {
	    return erlNil;
	  }
	};

	var _concat = function(erlArgs) {
	  var erlLists = toArray(erlArgs);
	  return concat.apply(null, erlLists);
	};

	var cons = function(erlArgs) {
	  return createErlList(car(erlArgs), next(erlArgs));
	};

	var count = function(erlArgs) {
	  var erlList = car(erlArgs);
	  if (!isErlList(erlList)) {
	    return erlNil;
	  }
	  var _reduce = function(sum, value) {
	    return sum + 1;
	  };
	  return createErlNumber(reduce(0, _reduce, car(erlArgs)));
	};

	var createPredicate = function(pred) {
	  return function(jsList) {
	    var erlValue = jsList.value;
	    return createErlBoolean(pred(erlValue));
	  };
	};

	var deref = function(erlArgs) {
	  return (car(erlArgs)).erlValue;
	};

	var _drop = function(erlArgs) {
	  var partialArray = toPartialArray(2, erlArgs);
	  var erlNumber = partialArray[0];
	  var erlList = partialArray[1];
	  return drop(extractJsValue(erlNumber), erlList);
	};

	var first = function(erlArgs) {
	  return car(car(erlArgs));
	};

	var getEnvironment = function(config) {
	  var environment = config.environment;
	  setCoreFnsOnErlValues(environment, functionsOnErlValues);
	  return environment;
	};

	var hasProcess = function() {
	  return typeof process !== 'undefined';
	}

	var hasProcessWebpackShim = function() {
	  return(process.title === 'browser' && process.browser);
	}

	var ignore = function(erlArgs) {
	  return erlIgnore;
	};

	var ignoreIfTrue = function(erlArgs) {
	  var partialArray = toPartialArray(2, erlArgs);
	  var erlBool = partialArray[0];
	  var erlValue = partialArray[1];
	  if (extractJsValue(erlBool)) {
	    return erlIgnore;
	  } else {
	    return erlValue;
	  }
	};

	var ignoreUnlessTrue = function(erlArgs) {
	  var partialArray = toPartialArray(2, erlArgs);
	  var erlBool = partialArray[0];
	  var erlValue = partialArray[1];
	  if (extractJsValue(erlBool)) {
	    return erlValue;
	  } else {
	    return erlIgnore;
	  }
	};

	var _interpret = function(erlArgs) {
	  return interpret(stripQuotes(extractJsValue(car(erlArgs))));
	};

	var _isEmpty = function(erlArgs) {
	  if (isEmpty(erlArgs)) {
	    return erlFalse;
	  } else {
	    if (isEmpty(car(erlArgs))) {
	      return erlTrue;
	    } else {
	      return erlFalse;
	    }
	  }
	};

	var isFunction = function(jsList) {
	  var erlValue = jsList.value;
	  return createErlBoolean(isErlCorePureFunction(erlValue)
	    || isErlUserPureFunction(erlValue));
	};

	var isNode = function() {
	  return hasProcess() && !hasProcessWebpackShim();
	}

	var _last = function(erlArgs) {
	  var arg = car(erlArgs);
	  if (isErlList(arg)) {
	    return last(arg);
	  } else {
	    return erlNil;
	  }
	};

	var list = function(erlArgs) {
	  return erlArgs;
	};

	var meta = function(erlArgs) {
	  var erlMeta = (car(erlArgs)).meta;
	  if (erlMeta != null) {
	    return erlMeta;
	  } else {
	    return erlNil;
	  }
	};

	var _not = function(erlArgs) {
	  var erlVal = car(erlArgs);
	  if (isErlNil(erlVal) || isErlFalse(erlVal)) {
	    return erlTrue;
	  } else {
	    return erlFalse;
	  }
	};

	var nth = function(erlArgs) {
	  var partialArray = toPartialArray(2, erlArgs);
	  var erlNumber = partialArray[0];
	  var erlList = partialArray[1];
	  var target = extractJsValue(erlNumber);
	  if (target >= 0) {
	    for (var i = 0; i < target; i++) {
	      erlList = cdr(erlList);
	    }
	  } else {
	    for (var i = 0; i > target; i--) {
	      erlList = cdr(erlList);
	    }
	  }
	  return car(erlList);
	};

	var prepend = function(erlArgs) {
	  var erlArgsArray = toArray(erlArgs);
	  var erlList = erlArgsArray[0];
	  var erlValues = 2 <= erlArgsArray.length ? __slice.call(erlArgsArray, 1) : [];
	  var _reduce = function(list, val) {
	    return createErlList(val, list);
	  };
	  return erlValues.reduce(_reduce, erlList);
	};

	var _prStr = function(erlArgs, printReadably) {
	  return ((toArray(erlArgs)).map(function(erlArg) {
	    return serialize(erlArg, printReadably);
	  })).join('');
	};

	var prettyString = function(erlArgs) {
	  return createErlString(circumpendQuotes(_prStr(erlArgs, true)));
	};

	var read = function(jsList) {
	  if (isNode()) {
	    var _read = function(_jsList) {
	      var jsFileName = stripQuotes(extractJsValue(car(_jsList)));
	      return __webpack_require__(40).readFileSync(jsFileName).toString();
	    };
	    return createErlString(_read(jsList));
	  } else {
	    return erlNil;
	  }
	};

	var reset = function(erlArgs) {
	  var partialArray = toPartialArray(2, erlArgs);
	  var atom = partialArray[0];
	  var value = partialArray[1];
	  atom.erlValue = value;
	  return atom;
	};

	var rest = function(erlArgs) {
	  var arg = car(erlArgs);
	  if (isErlList(arg)) {
	    return cdr(arg);
	  } else {
	    return erlNil;
	  }
	};

	var _reverse = function(erlArgs) {
	  var arg = car(erlArgs);
	  if (isErlList(arg)) {
	    return reverse(arg);
	  } else {
	    return erlNil;
	  }
	};

	var set = function(erlArgs) {
	  var partialArray = toPartialArray(3, erlArgs);
	  var index = partialArray[0];
	  var key = partialArray[1];
	  var val = partialArray[2];
	  (extractJsValue(index))[extractJsValue(key)] = val;
	  return index;
	};

	var setCoreFnsOnErlValues = function(env, fns) {
	  var _results = [];
	  for (var fnName in fns) {
	    if (!__hasProp.call(fns, fnName)) continue;
	    var fn = fns[fnName];
	    _results.push(env[fnName] = createErlCorePureFunction(fn));
	  }
	  return _results;
	};

	var slurp = function(erlArgs) {
	  if (isNode()) {
	    var jsFileName = stripQuotes(extractJsValue(car(erlArgs)));
	    var _fs_ = __webpack_require__(40);
	    return createErlString(circumpendQuotes(_fs_.readFileSync(jsFileName).toString()));
	  } else {
	    return erlNil;
	  }
	};

	var string = function(erlArgs) {
	  return createErlString(circumpendQuotes(_prStr(erlArgs, false)));
	};

	var stripQuotes = function(jsString) {
	  return jsString.slice(1, -1);
	};

	var symbol = function(erlArgs) {
	  var erlValue = car(erlArgs);
	  if (isErlString(erlValue)) {
	    var jsStr = extractJsValue(erlValue);
	    return createErlSymbol(jsStr.slice(1, -1));
	  } else {
	    return erlNil;
	  }
	};

	var _take = function(erlArgs) {
	  var partialArray = toPartialArray(2, erlArgs);
	  var erlNumber = partialArray[0];
	  var erlList = partialArray[1];
	  return take(extractJsValue(erlNumber), erlList);
	};

	var typeOf = function(erlArgs) {
	  var erlValue = car(erlArgs);
	  return createErlString(circumpendQuotes(erlValue.type));
	};

	var _throw = function(erlArgs) {
	  throw car(erlArgs);
	};

	var timeMs = function() {
	  return createErlNumber(new Date().getTime());
	};

	var withMeta = function(erlArgs) {
	  var partialArray = toPartialArray(2, erlArgs);
	  var erlVal = partialArray[0];
	  var erlMeta = partialArray[1];
	  if (isErlAtom(erlVal)) {
	    var erlValue = erlVal.erlValue;
	    var type = erlVal.type;
	    return {
	      erlValue: erlValue,
	      type: type,
	      meta: erlMeta
	    };
	  } else {
	    var jsValue = erlVal.jsValue;
	    var type = erlVal.type;
	    return {
	      jsValue: jsValue,
	      type: type,
	      meta: erlMeta
	    };
	  }
	};

	var write = function(erlArgs) {
	  return createErlString(serialize(car(erlArgs)));
	};

	var predicates = [
	  isErlAtom,
	  isErlBoolean,
	  isErlCorePureFunction,
	  isErlFalse,
	  isErlList,
	  isErlMacro,
	  isErlNil,
	  isErlNumber,
	  isErlSymbol,
	  isErlString,
	  isErlUserPureFunction,
	  isErlTrue
	].map(createPredicate);

	var isAtom    = predicates[0];
	var isBoolean = predicates[1];
	var isCoreFn  = predicates[2];
	var isFalse   = predicates[3];
	var isList    = predicates[4];
	var isMacro   = predicates[5];
	var isNil     = predicates[6];
	var isNumber  = predicates[7];
	var isSymbol  = predicates[8];
	var isString  = predicates[9];
	var isUserFn  = predicates[10];
	var isTrue    = predicates[11];

	var functionsOnErlValues = {
	  '=': _areEqual,
	  'append': append,
	  'assoc': assoc,
	  'atom': atom,
	  'atom?': isAtom,
	  'boolean?': isBoolean,
	  'car': _car,
	  'cdr': _cdr,
	  'cons': cons,
	  'concat': _concat,
	  'core-fn?': isCoreFn,
	  'count': count,
	  'deref': deref,
	  'drop': _drop,
	  'empty?': _isEmpty,
	  'first': _car,
	  'false?': isFalse,
	  'function?': isFunction,
	  'ignore!': ignore,
	  'ignoreIfTrue': ignoreIfTrue,
	  'ignoreUnlessTrue': ignoreUnlessTrue,
	  'last': _last,
	  'list': list,
	  'list?': isList,
	  'macro?': isMacro,
	  'meta': meta,
	  'nil?': isNil,
	  'not': _not,
	  'nth': nth,
	  'number?': isNumber,
	  'parse': _interpret,
	  'prepend': prepend,
	  'pretty-string': prettyString,
	  'rest': _cdr,
	  'reverse': _reverse,
	  'string': string,
	  'string?': isString,
	  'symbol': symbol,
	  'symbol?': isSymbol,
	  'take': _take,
	  'throw': _throw,
	  'true?': isTrue,
	  'typeof': typeOf,
	  'user-fn?': isUserFn,
	  'read': read,
	  'reset!': reset,
	  'set!': set,
	  'slurp': slurp,
	  'time-ms': timeMs,
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

	var commentSignal              = __webpack_require__(38);
	var extractJsValue             = __webpack_require__(30).extractJsValue;
	var indexEnd                   = __webpack_require__(39).indexEnd;
	var indexStart                 = __webpack_require__(39).indexStart;
	var isErlAtom                  = __webpack_require__(30).isErlAtom;
	var isErlCoreEffectfulFunction = __webpack_require__(30).isErlCoreEffectfulFunction;
	var isErlCorePureFunction      = __webpack_require__(30).isErlCorePureFunction;
	var isErlIdentifier            = __webpack_require__(30).isErlIdentifier;
	var isErlIgnore                = __webpack_require__(30).isErlIgnore;
	var isErlIndex                 = __webpack_require__(30).isErlIndex;
	var isErlKeyword               = __webpack_require__(30).isErlKeyword;
	var isErlList                  = __webpack_require__(30).isErlList;
	var isErlMacro                 = __webpack_require__(30).isErlMacro;
	var isErlNil                   = __webpack_require__(30).isErlNil;
	var isErlString                = __webpack_require__(30).isErlString;
	var isErlUserPureFunction      = __webpack_require__(30).isErlUserPureFunction;
	var listEnd                    = __webpack_require__(39).listEnd;
	var listStart                  = __webpack_require__(39).listStart;
	var reduce                     = __webpack_require__(31).reduce;

	var __hasProp = {}.hasOwnProperty;

	var adjoinErlValue = function(shouldBeReadable) {
	  return function(memo, erlValue) {
	    var serialized = serialize(erlValue, shouldBeReadable);
	    if (memo.length === 0) {
	      return serialized;
	    } else {
	      return "" + memo + " " + serialized;
	    }
	  };
	};

	var serialize = function(erlExpr, shouldBeReadable) {
	  if (erlExpr === commentSignal) {
	    return commentSignal;
	  }
	  var _serialize = (function() {
	    if (isErlList(erlExpr)) {
	      return serializeList;
	    } else if (isErlIgnore(erlExpr)) {
	      return function(erlValue) {
	        return ignoreLabel;
	      };
	    } else if (isErlIndex(erlExpr)) {
	      return serializeIndex;
	    } else if (isErlKeyword(erlExpr)) {
	      return function(erlValue) {
	        return keywordLabel;
	      };
	    } else if (isErlCoreEffectfulFunction(erlExpr)) {
	      return function(erlValue) {
	        return coreEffectfulFunctionLabel;
	      };
	    } else if (isErlCorePureFunction(erlExpr)) {
	      return function(erlValue) {
	        return corePureFunctionLabel;
	      };
	    } else if (isErlUserPureFunction(erlExpr)) {
	      return function(erlValue) {
	        return userPureFunctionLabel;
	      };
	    } else if (isErlMacro(erlExpr)) {
	      return function(erlValue) {
	        return macroLabel;
	      };
	    } else if (isErlNil(erlExpr)) {
	      return function(erlValue) {
	        return nilLabel;
	      };
	    } else if (isErlIdentifier(erlExpr)) {
	      return serializeIdentifier;
	    } else if (isErlString(erlExpr)) {
	      return serializeString;
	    } else if (isErlAtom(erlExpr)) {
	      return serializeAtom;
	    } else if (erlExpr.jsValue != null) {
	      return extractJsValue;
	    } else {
	      return function(erlValue) {
	        return erlValue;
	      };
	    }
	  })();
	  return _serialize(erlExpr, shouldBeReadable);
	};

	var serializeAtom = function(erlAtom, shouldBeReadable) {
	  return "(atom " + (serialize(erlAtom.erlValue, shouldBeReadable)) + ")";
	};

	var serializeIdentifier = function(erlString, shouldBeReadable) {
	  return extractJsValue(erlString);
	};

	var serializeIndex = function(erlIndex, shouldBeReadable) {
	  var jsIndex = erlIndex.jsValue;
	  var memo = '';
	  for (var key in jsIndex) {
	    if (!__hasProp.call(jsIndex, key)) continue;
	    var erlValue = jsIndex[key];
	    if (memo === '') {
	      memo = ""
	        + key
	        + " "
	        + (serialize(erlValue, shouldBeReadable));
	    } else {
	      memo = ""
	        + memo
	        + ", "
	        + key
	        + " "
	        + (serialize(erlValue, shouldBeReadable));
	    }
	  }
	  return indexStart + memo + indexEnd;
	};

	var serializeList = function(erlList, shouldBeReadable) {
	  var serializedList = reduce(
	    "",
	    adjoinErlValue(shouldBeReadable),
	    erlList);
	  return listStart + serializedList + listEnd;
	};

	var serializeString = function(erlString, shouldBeReadable) {
	  var jsString = stripQuotes(extractJsValue(erlString));
	  if (!shouldBeReadable) {
	    return jsString;
	  }
	  return jsString
	    .replace(/\\/g, '\\\\')
	    .replace(/"/g, '\\"')
	    .replace(/\n/g, '\\n');
	};

	var stripQuotes = function(jsString) {
	  return jsString.slice(1, -1);
	};

	var coreEffectfulFunctionLabel = '<effectful core function>';
	var corePureFunctionLabel      = '<core function>';
	var ignoreLabel                = '<ignore>';
	var keywordLabel               = '<keyword>';
	var macroLabel                 = '<macro>';
	var nilLabel                   = 'nil';
	var userPureFunctionLabel      = '<function>';

	module.exports = serialize;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	var comment = {};

	module.exports = comment;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

	var deref                 = 'deref';
	var derefGlyph            = '@';
	var catchStar             = 'catch*';
	var defBang               = 'def!';
	var _do                   = 'do';
	var _eval                 = 'eval';
	var _evalWithEnv          = 'eval-with-env';
	var expandMacro           = 'expand-macro';
	var _false                = 'false';
	var fnStar                = 'fn*';
	var _getCurrentEnv        = '-get-current-env-';
	var _getDefaultEnv        = '-get-default-env-';
	var _if                   = 'if';
	var ignoreBang            = 'ignore!';
	var ignoreBangGlyph       = '#!';
	var ignoreIfTrue          = 'ignoreIfTrue';
	var ignoreIfTrueGlyph     = '#-';
	var ignoreUnlessTrue      = 'ignoreUnlessTrue';
	var ignoreUnlessTrueGlyph = '#+';
	var ignore                = 'ignore';
	var indexEnd              = '}';
	var indexStart            = '{';
	var letStar               = 'let*';
	var letrecStar            = 'letrec*';
	var listEnd               = ')';
	var listStart             = '(';
	var macroStar             = 'macro*';
	var nil                   = 'nil';
	var _process              = '-process-';
	var quasiquote            = 'quasiquote';
	var quasiquoteGlyph       = '`';
	var quote                 = 'quote';
	var quoteGlyph            = '\'';
	var splat                 = '&';
	var spliceUnquote         = 'splice-unquote';
	var spliceUnquoteGlyph    = '~@';
	var _true                 = 'true';
	var tryStar               = 'try*';
	var undefBang             = 'undef!';
	var unquote               = 'unquote';
	var unquoteGlyph          = '~'

	var keyTokens = [
	  deref,
	  derefGlyph,
	  catchStar,
	  defBang,
	  _do,
	  _eval,
	  _evalWithEnv,
	  expandMacro,
	  _false,
	  fnStar,
	  _getCurrentEnv,
	  _getDefaultEnv,
	  _if,
	  ignoreBang,
	  ignoreBangGlyph,
	  ignoreIfTrue,
	  ignoreIfTrueGlyph,
	  ignoreUnlessTrue,
	  ignoreUnlessTrueGlyph,
	  ignore,
	  indexEnd,
	  indexStart,
	  letStar,
	  letrecStar,
	  listEnd,
	  listStart,
	  macroStar,
	  nil,
	  _process,
	  quasiquote,
	  quasiquoteGlyph,
	  quote,
	  quoteGlyph,
	  splat,
	  spliceUnquote,
	  spliceUnquoteGlyph,
	  _true,
	  tryStar,
	  undefBang,
	  unquote,
	  unquoteGlyph
	];

	var keywords = [
	  catchStar,
	  defBang,
	  _do,
	  _eval,
	  _evalWithEnv,
	  expandMacro,
	  _false,
	  fnStar,
	  _getCurrentEnv,
	  _getDefaultEnv,
	  _if,
	  ignore,
	  letStar,
	  letrecStar,
	  macroStar,
	  nil,
	  _process,
	  quasiquote,
	  quote,
	  spliceUnquote,
	  _true,
	  tryStar,
	  undefBang,
	  unquote
	];

	var macroTokens = [quasiquote, quote, spliceUnquote, unquote];

	var glyphTokens = [
	  derefGlyph,
	  ignoreBangGlyph,
	  quasiquoteGlyph,
	  quoteGlyph,
	  spliceUnquoteGlyph,
	  unquoteGlyph
	];

	var binaryGlyphTokens = [ignoreIfTrueGlyph, ignoreUnlessTrueGlyph];

	var __indexOf = [].indexOf || function(item) {
	  for (var i = 0, l = this.length; i < l; i++) {
	    if (i in this && this[i] === item) return i;
	  } return -1;
	};

	var isKeyword = function(jsString) {
	  return __indexOf.call(keywords, jsString) >= 0;
	};

	module.exports = {
	  binaryGlyphTokens: binaryGlyphTokens,
	  deref: deref,
	  derefGlyph: derefGlyph,
	  catchStar: catchStar,
	  defBang: defBang,
	  _do: _do,
	  _eval: _eval,
	  _evalWithEnv: _evalWithEnv,
	  expandMacro: expandMacro,
	  _false: _false,
	  fnStar: fnStar,
	  _getCurrentEnv: _getCurrentEnv,
	  _getDefaultEnv: _getDefaultEnv,
	  glyphTokens: glyphTokens,
	  _if: _if,
	  ignoreIfTrue: ignoreIfTrue,
	  ignoreIfTrueGlyph: ignoreIfTrueGlyph,
	  ignoreUnlessTrue: ignoreUnlessTrue,
	  ignoreUnlessTrueGlyph: ignoreUnlessTrueGlyph,
	  ignore: ignore,
	  ignoreBang: ignoreBang,
	  ignoreBangGlyph: ignoreBangGlyph,
	  indexEnd: indexEnd,
	  indexStart: indexStart,
	  keyTokens: keyTokens,
	  isKeyword: isKeyword,
	  letStar: letStar,
	  letrecStar: letrecStar,
	  listEnd: listEnd,
	  listStart: listStart,
	  macroStar: macroStar,
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
	  tryStar: tryStar,
	  undefBang: undefBang,
	  unquote: unquote,
	  unquoteGlyph: unquoteGlyph
	};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var createErlCoreEffectfulFunction =
	  __webpack_require__(30).createErlCoreEffectfulFunction;

	var createErlList   = __webpack_require__(30).createErlList;
	var createErlString = __webpack_require__(30).createErlString;
	var serialize       = __webpack_require__(37);
	var toArray         = __webpack_require__(31).toArray;

	var __hasProp = {}.hasOwnProperty;

	var getEnvironment = function(config) {
	  var display = config.display;
	  var environment = config.environment;
	  setCoreEffectfulFnsOnErlValues(display)(environment, displayEffectsOnErlValues);
	  return environment;
	};

	var hasProcess = function() {
	  return typeof process !== 'undefined';
	}

	var hasProcessWebpackShim = function() {
	  return(process.title === 'browser' && process.browser);
	}

	var isNode = function() {
	  return hasProcess() && !hasProcessWebpackShim();
	}

	var _prStr = function(erlArgs, shouldBeReadable) {
	  return ((toArray(erlArgs)).map(function(erlArg) {
	    return serialize(erlArg, shouldBeReadable);
	  })).join('');
	};

	var _quit_ = function() {
	  if (isNode()) {
	    return process.exit(0);
	  } else {
	    return _prStr(
	      createErlList(
	        createErlString(
	          "\"'Erlkönig Lisp Console' is not permitted to close this window.\"")),
	          false);
	  }
	};

	var setCoreEffectfulFnsOnErlValues = function(represent) {
	  return function(env, fns) {
	    var _results = [];
	    for (var fnName in fns) {
	      if (!__hasProp.call(fns, fnName)) continue;
	      var fn = fns[fnName];
	      _results.push(env[fnName] =
	        createErlCoreEffectfulFunction(function(erlArgs) {
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
	  '-quit-': _quit_,
	};

	module.exports = getEnvironment;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var car                       = __webpack_require__(31).car;
	var createErlCorePureFunction = __webpack_require__(30).createErlCorePureFunction;
	var createErlList             = __webpack_require__(30).createErlList;
	var createErlSymbol           = __webpack_require__(30).createErlSymbol;
	var extractJsValue            = __webpack_require__(30).extractJsValue;
	var fromArray                 = __webpack_require__(31).fromArray;
	var fromErlIndex              = __webpack_require__(43).fromErlIndex;
	var isErlList                 = __webpack_require__(30).isErlList;
	var _process                  = __webpack_require__(44);
	var toArray                   = __webpack_require__(31).toArray;
	var tokenizeAndParse          = __webpack_require__(47);
	var toPartialArray            = __webpack_require__(31).toPartialArray;

	var __hasProp = {}.hasOwnProperty;

	var getEnvironment = function(config) {
	  var environment = config.environment;
	  var parse = function(erlArgs) {
	    return tokenizeAndParse(stripQuotes(extractJsValue(car(erlArgs))));
	  };
	  var functionsOnErlValues = { parse: parse };
	  setCoreFnsOnErlValues(environment, functionsOnErlValues);
	  return environment;
	};

	var _process_ = _process(function(erlVal) {
	  return erlVal;
	});

	var setCoreFnsOnErlValues = function(env, fns) {
	  var _results = [];
	  for (var fnName in fns) {
	    if (!__hasProp.call(fns, fnName)) {
	      continue;
	    }
	    var fn = fns[fnName];
	    _results.push(env[fnName] = createErlCorePureFunction(fn));
	  }
	  return _results;
	};

	var stripQuotes = function(jsString) {
	  return jsString.slice(1, -1);
	};

	module.exports = getEnvironment;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var createErlIndex = __webpack_require__(30).createErlIndex;
	var isJsString     = __webpack_require__(29).isJsString;

	var __slice   = [].slice;
	var __hasProp = {}.hasOwnProperty;

	var fromErlIndex = function(erlIndex) {
	  var result = {};
	  var jsValue = erlIndex.jsValue;
	  for (var key in jsValue) {
	    if (!__hasProp.call(jsValue, key)) continue;
	    var value = jsValue[key];
	    if (isJsString(key)) {
	      var newKey = (function() {
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

	var fromJsObjects = function() {
	  var jsObjects = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
	  var copy = {};
	  var len = jsObjects.length;
	  for (var i = 0;  i < len; i++) {
	    var jsObject = jsObjects[i];
	    for (var key in jsObject) {
	      if (!__hasProp.call(jsObject, key)) continue;
	      var val = jsObject[key];
	      if (isJsString(key)) {
	        copy[':' + key] = val;
	      } else {
	        copy[key] = val;
	      }
	    }
	  }
	  return createErlIndex(copy);
	};

	module.exports = {
	  fromJsObjects: fromJsObjects,
	  fromErlIndex: fromErlIndex
	};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var commentSignal = __webpack_require__(38);
	var evaluate      = __webpack_require__(45);

	var _process = function(transform) {
	  return function(envs) {
	    return function(sourceCode) {
	      var results = [];
	      var addResult = function(result) {
	        return results.push(result);
	      };
	      var value = evaluate(envs, addResult)(transform(sourceCode));
	      var result = (value === commentSignal)
	        ? { effect: { type: 'comment' } }
	        : { effect: false, value: value };
	      addResult(result);
	      return results;
	    };
	  };
	};

	module.exports = _process;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var addEnv                     = __webpack_require__(46).addEnv;
	var car                        = __webpack_require__(31).car;
	var catchStar                  = __webpack_require__(39).catchStar;
	var cdr                        = __webpack_require__(31).cdr;
	var circumpendQuotes           = __webpack_require__(29).circumpendQuotes;
	var commentSignal              = __webpack_require__(38);
	var createErlIndex             = __webpack_require__(30).createErlIndex;
	var createErlKeyword           = __webpack_require__(30).createErlKeyword;
	var createErlList              = __webpack_require__(30).createErlList;
	var createErlMacro             = __webpack_require__(30).createErlMacro;
	var createErlNumber            = __webpack_require__(30).createErlNumber;
	var createErlString            = __webpack_require__(30).createErlString;
	var createErlSymbol            = __webpack_require__(30).createErlSymbol;
	var createErlUserPureFunction  = __webpack_require__(30).createErlUserPureFunction;
	var defBang                    = __webpack_require__(39).defBang;
	var _do                        = __webpack_require__(39)._do;
	var erlNil                     = __webpack_require__(30).erlNil;
	var _eval                      = __webpack_require__(39)._eval;
	var _evalWithEnv               = __webpack_require__(39)._evalWithEnv;
	var expandMacro                = __webpack_require__(39).expandMacro;
	var extractJsValue             = __webpack_require__(30).extractJsValue;
	var filter                     = __webpack_require__(31).filter;
	var fnStar                     = __webpack_require__(39).fnStar;
	var forEach                    = __webpack_require__(31).forEach;
	var fromArray                  = __webpack_require__(31).fromArray;
	var fromErlIndex               = __webpack_require__(43).fromErlIndex;
	var fromJsObjects              = __webpack_require__(43).fromJsObjects;
	var _getCurrentEnv             = __webpack_require__(39)._getCurrentEnv;
	var _getDefaultEnv             = __webpack_require__(39)._getDefaultEnv;
	var _if                        = __webpack_require__(39)._if;
	var isEmpty                    = __webpack_require__(31).isEmpty;
	var isErlCoreEffectfulFunction = __webpack_require__(30).isErlCoreEffectfulFunction;
	var isErlCorePureFunction      = __webpack_require__(30).isErlCorePureFunction;
	var isErlIgnore                = __webpack_require__(30).isErlIgnore;
	var isErlIndex                 = __webpack_require__(30).isErlIndex;
	var isErlKeyword               = __webpack_require__(30).isErlKeyword;
	var isErlList                  = __webpack_require__(30).isErlList;
	var isErlMacro                 = __webpack_require__(30).isErlMacro;
	var isErlSymbol                = __webpack_require__(30).isErlSymbol;
	var isErlUserPureFunction      = __webpack_require__(30).isErlUserPureFunction;
	var isJsString                 = __webpack_require__(29).isJsString;
	var isKeyword                  = __webpack_require__(39).isKeyword;
	var letStar                    = __webpack_require__(39).letStar;
	var letrecStar                 = __webpack_require__(39).letrecStar;
	var lookup                     = __webpack_require__(46).lookup;
	var macroStar                  = __webpack_require__(39).macroStar;
	var map                        = __webpack_require__(31).map;
	var next                       = __webpack_require__(31).next;
	var quasiquote                 = __webpack_require__(39).quasiquote;
	var quote                      = __webpack_require__(39).quote;
	var spliceUnquote              = __webpack_require__(39).spliceUnquote;
	var unquote                    = __webpack_require__(39).unquote;
	var recurse                    = __webpack_require__(31).recurse;
	var reduce                     = __webpack_require__(31).reduce;
	var reduceBy2                  = __webpack_require__(31).reduceBy2;
	var reverse                    = __webpack_require__(31).reverse;
	var setMainEnv                 = __webpack_require__(46).setMainEnv;
	var splat                      = __webpack_require__(39).splat;
	var toPartialArray             = __webpack_require__(31).toPartialArray;
	var tryStar                    = __webpack_require__(39).tryStar;
	var undefBang                  = __webpack_require__(39).undefBang;
	var unsetMainEnv               = __webpack_require__(46).unsetMainEnv;

	var __hasProp = {}.hasOwnProperty;

	var createFn = function(erlList, envs) {
	  return createErlUserPureFunction({
	    localEnvs: envs.slice(0),
	    erlExpression: next(erlList),
	    erlParameters: car(erlList)
	  });
	};

	var createLocalEnv = function(erlParams, erlArgs) {
	  var env = {};
	  while (!isEmpty(erlParams)) {
	    var jsParam = extractJsValue(car(erlParams));
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

	var createMacro = function(erlList, envs) {
	  return createErlMacro({
	    localEnvs: envs.slice(0),
	    erlExpression: next(erlList),
	    erlParameters: car(erlList)
	  });
	};

	var defineNewValue = function(erlList, envs, addResult) {
	  var jsKey = extractJsValue(car(erlList));
	  var erlValue = _evaluate(next(erlList), envs, addResult);
	  return setMainEnv(envs, jsKey, erlValue);
	};

	var evalQuasiquotedExpr = function(expr, envs, addResult) {
	  if (!isErlList(expr)) {
	    return expr;
	  }
	  var manageItem = function(memo, item) {
	    if (unquotedExpr(item)) {
	        return createErlList(_evaluate(next(item), envs, addResult), memo);
	    } else if (spliceUnquotedExpr(item)) {
	        var _manageItem = function(_memo, _item) {
	          return createErlList(_item, _memo);
	        };
	        return reduce(memo, _manageItem, _evaluate(next(item), envs, addResult));
	    } else if (isErlList(item)) {
	        return createErlList(evalQuasiquotedExpr(item, envs, addResult), memo);
	    } else {
	        return createErlList(item, memo);
	    }
	  };
	  return reverse(reduce(createErlList(), manageItem, expr));
	};

	var _evaluate = function(erlExpr, envs, addResult) {
	  while (true) {
	    if (isErlSymbol(erlExpr)) {
	      var jsString = extractJsValue(erlExpr);
	      if (isKeyword(jsString)) {
	        return createErlKeyword(jsString);
	      } else {
	        return lookup(envs, jsString);
	      }
	    } else if (isErlIndex(erlExpr)) {
	      var index = extractJsValue(erlExpr);
	      var newIndex = {};
	      for (var key in index) {
	        if (!__hasProp.call(index, key)) continue;
	        newIndex[key] = _evaluate(index[key], envs, addResult);
	      }
	      return createErlIndex(newIndex);
	    } else if (!(isErlList(erlExpr))) {
	      return erlExpr;
	    } else {
	      erlExpr = filter((function(x) {
	        return !(ignorable(x, envs, addResult));
	      }), erlExpr);
	      var erlExprArray = toPartialArray(2, erlExpr);
	      var head = erlExprArray[0];
	      var arg1 = erlExprArray[1];
	      var remainingArgs = erlExprArray[2];
	      var tailList = cdr(erlExpr);
	      switch (extractJsValue(head)) {
	        case defBang:
	          return defineNewValue(tailList, envs, addResult);
	        case undefBang:
	          return undefineValue(tailList, envs);
	        case _eval:
	          erlExpr = _evaluate(arg1, envs, addResult);
	          break;
	        case _evalWithEnv:
	          envs = [fromErlIndex(_evaluate(arg1, envs, addResult))];
	          erlExpr = _evaluate(car(remainingArgs), envs, addResult);
	          break;
	        case letStar:
	          erlExpr = car(remainingArgs);
	          envs = addEnv(envs, reduceLet(envs, arg1, addResult));
	          break;
	        case letrecStar:
	          erlExpr = car(remainingArgs);
	          envs = addEnv(envs, reduceLetrec(envs, arg1, addResult));
	          break;
	        case _do:
	          return forEach(evaluate(envs, addResult), tailList);
	        case _getCurrentEnv:
	          return fromJsObjects.apply(null, envs.reverse());
	        case _getDefaultEnv:
	          return fromJsObjects(envs[envs.length - 1]);
	        case _if:
	          if (extractJsValue(_evaluate(arg1, envs, addResult))) {
	            erlExpr = car(remainingArgs);
	            break;
	          }
	          var otherwise = next(remainingArgs);
	          if (isEmpty(otherwise)) {
	            erlExpr = erlNil;
	          } else {
	            erlExpr = otherwise;
	          }
	          break;
	        case fnStar:
	          return createFn(tailList, envs);
	        case macroStar:
	          return createMacro(tailList, envs);
	        case quote:
	          return car(tailList);
	        case quasiquote:
	          return evalQuasiquotedExpr(car(tailList), envs, addResult);
	        case expandMacro:
	          return expandMacro(car(arg1), cdr(arg1), envs, addResult);
	        case tryStar:
	          try {
	            return _evaluate(arg1, envs, addResult);
	          } catch (_error) {
	            var ex = _error;
	            if (isEmpty(remainingArgs)) {
	              throw ex;
	            } else {
	              var remainingArgsArray = toPartialArray(3, car(remainingArgs));
	              var _catch = remainingArgsArray[0];
	              var _ex = remainingArgsArray[1];
	              var catchExpr = remainingArgsArray[2];
	              if ((extractJsValue(_catch)) !== "catch*") {
	                throw ex;
	              }
	              if (ex instanceof Error) {
	                ex = createErlString(circumpendQuotes(ex.message));
	              }
	              var newEnv = {};
	              newEnv[extractJsValue(_ex)] = ex;
	              return _evaluate(catchExpr, addEnv(envs, newEnv), addResult);
	            }
	          }
	          break;
	        default:
	          var erlSymbol = head;
	          erlExpr = tailList;
	          var erlInvokable = _evaluate(erlSymbol, envs, addResult);
	          if (isErlKeyword(erlInvokable)) {
	            erlExpr = createErlList(erlInvokable, tailList);
	          } else if (isErlMacro(erlInvokable)) {
	            erlExpr = expandMacro(head, tailList, envs, addResult);
	          } else if (isErlCorePureFunction(erlInvokable)) {
	            var fn = extractJsValue(erlInvokable);
	            var erlArgs = map(evaluate(envs, addResult), erlExpr);
	            return fn(erlArgs);
	          } else if (isErlCoreEffectfulFunction(erlInvokable)) {
	            var fn = extractJsValue(erlInvokable);
	            var erlArgs = map(evaluate(envs, addResult), erlExpr);
	            addResult(fn(erlArgs));
	            return erlNil;
	          } else if (isErlUserPureFunction(erlInvokable)) {
	            var jsValue = extractJsValue(erlInvokable);
	            var localEnvs = jsValue.localEnvs;
	            var erlExpression = jsValue.erlExpression;
	            var erlParameters = jsValue.erlParameters;
	            var erlArgs = map(evaluate(envs, addResult), erlExpr);
	            erlExpr = erlExpression;
	            var newEnv = createLocalEnv(erlParameters, erlArgs);
	            envs = addEnv(localEnvs, newEnv);
	          } else {
	            throw ""
	              + (extractJsValue(erlSymbol))
	              + " does not evaluate to a function, macro, or keyword.";
	          }
	      }
	    }
	  }
	};

	var evaluate = function(envs, addResult) {
	  return function(erlExpr) {
	    if (erlExpr === commentSignal) {
	      return commentSignal;
	    }
	    return _evaluate(erlExpr, envs, addResult);
	  };
	};

	var expandMacro = function(erlMacroSymbol, erlArgs, envs, addResult) {
	  var erlMacro = _evaluate(erlMacroSymbol, envs, addResult);
	  var jsValue = extractJsValue(erlMacro);
	  var localEnvs = jsValue.localEnvs;
	  var erlExpression = jsValue.erlExpression;
	  var erlParameters = jsValue.erlParameters;
	  var newEnv = createLocalEnv(erlParameters, erlArgs);
	  var newEnvStack = addEnv(localEnvs, newEnv);
	  return _evaluate(erlExpression, newEnvStack, addResult);
	};

	var ignorable = function(erlVal, envs, addResult) {
	  if (isErlIgnore(erlVal)) {
	    return true;
	  }
	  if (!isErlList(erlVal)) {
	    return false;
	  }
	  var symbol = car(erlVal);
	  if (!isErlSymbol(symbol)) {
	    return false;
	  }
	  var jsString = extractJsValue(symbol);
	  if (jsString === 'ignore') {
	    return true;
	  }
	  if (jsString === 'ignoreIfTrue') {
	    return extractJsValue(_evaluate(next(erlVal), envs, addResult));
	  }
	  if (jsString === 'ignoreUnlessTrue') {
	    return !extractJsValue(_evaluate(next(erlVal), envs, addResult));
	  }
	  return false;
	};

	var reduceLet = function(envs, list, addResult) {
	  var newEnv = {};
	  var _envs = addEnv(envs, newEnv);
	  while (!isEmpty(list)) {
	    var jsKey = extractJsValue(list.value);
	    list = recurse(list);
	    var envValue = _evaluate(list.value, _envs, addResult);
	    newEnv[jsKey] = envValue;
	    list = recurse(list);
	  }
	  return newEnv;
	};

	var reduceLetrec = function(envs, list, addResult) {
	  var newEnv = {};
	  var _envs = addEnv(envs, newEnv);
	  while (!isEmpty(list)) {
	    var jsKey = extractJsValue(list.value);
	    list = recurse(list);
	    var _erlExpr = fromArray(
	      [  createErlSymbol("fix*"),
	         fromArray([createErlSymbol("fn*"),
	         fromArray([jsKey]),
	         list.value])
	      ]);
	    var envValue = _evaluate(_erlExpr, _envs, addResult);
	    newEnv[jsKey] = envValue;
	    list = recurse(list);
	  }
	  return newEnv;
	};

	var spliceUnquote = function(erlValue) {
	  return spliceUnquote === (extractJsValue(erlValue));
	};

	var spliceUnquotedExpr = function(erlValue) {
	  return isErlList(erlValue) && (spliceUnquote(car(erlValue)));
	};

	var undefineValue = function(erlList, envs) {
	  var jsKey = extractJsValue(car(erlList));
	  return unsetMainEnv(envs, jsKey);
	};

	var unquote = function(erlValue) {
	  return unquote === (extractJsValue(erlValue));
	};

	var unquotedExpr = function(erlValue) {
	  return isErlList(erlValue) && (unquote(car(erlValue)));
	};

	module.exports = evaluate;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

	var addEnv = function (envStack, newEnv) {
	  var copy = envStack.slice(0);
	  copy.unshift(newEnv);
	  return copy;
	};

	var getLast = function (array) {
	  return array[array.length - 1];
	};

	var lookup = function (envStack, key) {
	  var copy = envStack.slice(0);
	  while (copy.length !== 0) {
	    var env = copy[0];
	    var value = env[key];
	    if (value != null) {
	      return value;
	    }
	    copy.shift();
	  }
	  throw "VALUE CORRESPONDING TO \"" + key + "\" DOES NOT EXIST IN ENV-STACK";
	};

	var set = function (env, key, value) {
	  env[key] = value;
	  return value;
	};

	var setMainEnv = function (envStack, key, value) {
	  return set(getLast(envStack), key, value);
	};

	var unset = function (env, key) {
	  var value = env[key];
	  delete env[key];
	  return value;
	};

	var unsetMainEnv = function (envStack, key) {
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

	var parse    = __webpack_require__(48);
	var tokenize = __webpack_require__(49);

	module.exports = function(sourceCode) {
	  return parse(tokenize(sourceCode));
	};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var binaryGlyphTokens     = __webpack_require__(39).binaryGlyphTokens;
	var comment               = __webpack_require__(38);
	var createErlBoolean      = __webpack_require__(30).createErlBoolean;
	var createErlIdentifier   = __webpack_require__(30).createErlIdentifier;
	var createErlIgnore       = __webpack_require__(30).createErlIgnore;
	var createErlIndex        = __webpack_require__(30).createErlIndex;
	var createErlList         = __webpack_require__(30).createErlList;
	var createErlNil          = __webpack_require__(30).createErlNil;
	var createErlNumber       = __webpack_require__(30).createErlNumber;
	var createErlString       = __webpack_require__(30).createErlString;
	var createErlSymbol       = __webpack_require__(30).createErlSymbol;
	var deref                 = __webpack_require__(39).deref;
	var derefGlyph            = __webpack_require__(39).derefGlyph;
	var extractJsValue        = __webpack_require__(30).extractJsValue;
	var _false                = __webpack_require__(39)._false;
	var glyphTokens           = __webpack_require__(39).glyphTokens;
	var ignore                = __webpack_require__(39).ignore;
	var ignoreBang            = __webpack_require__(39).ignoreBang;
	var ignoreBangGlyph       = __webpack_require__(39).ignoreBangGlyph;
	var ignoreIfTrue          = __webpack_require__(39).ignoreIfTrue;
	var ignoreIfTrueGlyph     = __webpack_require__(39).ignoreIfTrueGlyph;
	var ignoreUnlessTrue      = __webpack_require__(39).ignoreUnlessTrue;
	var ignoreUnlessTrueGlyph = __webpack_require__(39).ignoreUnlessTrueGlyph;
	var indexEnd              = __webpack_require__(39).indexEnd;
	var indexStart            = __webpack_require__(39).indexStart;
	var keyTokens             = __webpack_require__(39).keyTokens;
	var listEnd               = __webpack_require__(39).listEnd;
	var listStart             = __webpack_require__(39).listStart;
	var nil                   = __webpack_require__(39).nil;
	var quasiquote            = __webpack_require__(39).quasiquote;
	var quote                 = __webpack_require__(39).quote;
	var spliceUnquote         = __webpack_require__(39).spliceUnquote;
	var unquote               = __webpack_require__(39).unquote;
	var quasiquoteGlyph       = __webpack_require__(39).quasiquoteGlyph;
	var quoteGlyph            = __webpack_require__(39).quoteGlyph;
	var spliceUnquoteGlyph    = __webpack_require__(39).spliceUnquoteGlyph;
	var unquoteGlyph          = __webpack_require__(39).unquoteGlyph;
	var reverse               = __webpack_require__(31).reverse;
	var _true                 = __webpack_require__(39)._true;

	var  __indexOf = [].indexOf || function(item) {
	  for (var i = 0, l = this.length; i < l; i++) {
	    if (i in this && this[i] === item) return i;
	  } return -1;
	};

	var atomize = function(token) {
	  var createErlValue = (function() {
	    if (isNil(token)) {
	      return createErlNil;
	    } else if (isIgnore(token)) {
	      return createErlIgnore;
	    } else if (isBoolean(token)) {
	      return function(token) {
	        return createErlBoolean(parseBoolean(token));
	      };
	    } else if (isString(token)) {
	      return createErlString;
	    } else if (isIdentifier(token)) {
	      return createErlIdentifier;
	    } else if (isInteger(token)) {
	      return function(token) {
	        return createErlNumber(parseInt10(token));
	      };
	    } else if (isFloat(token)) {
	      return function(token) {
	        return createErlNumber(parseFloat10(token));
	      };
	    } else {
	      return createErlSymbol;
	    }
	  })();
	  return createErlValue(token);
	};

	var isBoolean = function(token) {
	  return token === _false || token === _true;
	};

	var isFloat = function(token) {
	  return /^(-|\+)?[0-9](_|\d)*\.(\d|(\d(_|\d)*\d))$/.test(token);
	};

	var isBinaryGlyph = function(token) {
	  return __indexOf.call(binaryGlyphTokens, token) >= 0;
	};

	var isGlyph = function(token) {
	  return __indexOf.call(glyphTokens, token) >= 0;
	};

	var isIgnore = function(token) {
	  return token === ignore;
	};

	var isIndexStart = function(token) {
	  return token === indexStart;
	};

	var isInteger = function(token) {
	  return /^(0(?!\.)|((-|\+)?[1-9](_|\d)*$))/.test(token);
	};

	var isListStart = function(token) {
	  return token === listStart;
	};

	var isNil = function(token) {
	  return token === nil;
	};

	var _parse = function(token, tokens) {
	  if (isListStart(token)) {
	    return parseList(tokens);
	  } else if (isIndexStart(token)) {
	    return parseIndex(tokens);
	  } else if (isGlyph(token)) {
	    return parseGlyph(glyphIndex[token], tokens);
	  } else if (isBinaryGlyph(token)) {
	    return parseBinaryGlyph(binaryGlyphIndex[token], tokens);
	  } else {
	    return atomize(token);
	  }
	};

	var parse = function(tokens) {
	  if (tokens === comment) {
	    return comment;
	  }
	  return _parse(tokens.shift(), tokens);
	};

	var parseBinaryGlyph = function(keyword, tokens) {
	  return createErlList(
	    createErlSymbol(keyword),
	    createErlList(
	      parse(tokens),
	      createErlList(parse(tokens))));
	};

	var parseBoolean = function(token) {
	  return token === _true;
	};

	var parseFloat10 = function(token) {
	  return parseFloat(stripUnderscores(token), 10);
	};

	var parseGlyph = function(keyword, tokens) {
	  return createErlList(
	    createErlSymbol(keyword),
	    createErlList(parse(tokens)));
	};

	var parseIndex = function(tokens) {
	  var token;
	  var jsIndex = {};
	  var key = null;
	  var isKeyStep = true;
	  while ((token = tokens.shift()) !== indexEnd) {
	    if (isKeyStep) {
	      key = _parse(token, tokens);
	      isKeyStep = false;
	    } else {
	      jsIndex[extractJsValue(key)] = _parse(token, tokens);
	      isKeyStep = true;
	    }
	  }
	  return createErlIndex(jsIndex);
	};

	var parseInt10 = function(token) {
	  return parseInt(stripUnderscores(token), 10);
	};

	var parseList = function(tokens) {
	  var token;
	  var erlList = createErlList();
	  while ((token = tokens.shift()) !== listEnd) {
	    erlList = createErlList(_parse(token, tokens), erlList);
	  }
	  return reverse(erlList);
	};

	var startsWith = function(char) {
	  return function(token) {
	    return token[0] === char;
	  };
	};

	var stripUnderscores = function(token) {
	  return token.replace(/_/g, '');
	};

	var glyphIndex = {};

	glyphIndex[derefGlyph]         = deref;
	glyphIndex[ignoreBangGlyph]    = ignoreBang;
	glyphIndex[quasiquoteGlyph]    = quasiquote;
	glyphIndex[quoteGlyph]         = quote;
	glyphIndex[spliceUnquoteGlyph] = spliceUnquote;
	glyphIndex[unquoteGlyph]       = unquote;

	var binaryGlyphIndex = {};

	binaryGlyphIndex[ignoreIfTrueGlyph]     = ignoreIfTrue;
	binaryGlyphIndex[ignoreUnlessTrueGlyph] = ignoreUnlessTrue;

	var isString = startsWith('"');

	var isIdentifier = startsWith(':');

	module.exports = parse;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var commentSignal = __webpack_require__(38);

	var createTokenRegex = function() {
	  return /[\s,]*(~@|\#\+|\#\-|\#\!|[\[\](){}'`~@^]|"(?:\\.|[^\\"])*"|;.*|[^\s\[\](){}'"`,;]*)/g;
	};

	var isComment = function(match) {
	  return match[0] === ';';
	};

	var isMeaningful = function(match) {
	  return match !== '';
	};

	var tokenize = function(sourceCode) {
	  var match;
	  var tokenRegex = createTokenRegex();
	  var result = [];
	  while (isMeaningful(match = tokenRegex.exec(sourceCode)[1])) {
	    if (isComment(match)) {
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
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var createErlCorePureFunction = __webpack_require__(30).createErlCorePureFunction;
	var erlNil                    = __webpack_require__(30).erlNil;
	var extractJsValue            = __webpack_require__(30).extractJsValue;
	var fromErlIndex              = __webpack_require__(43).fromErlIndex;
	var _process                  = __webpack_require__(44);
	var toPartialArray            = __webpack_require__(31).toPartialArray;

	var __hasProp = {}.hasOwnProperty;

	var getEnvironment = function(config) {
	  var environment = config.environment;
	  var functionsOnErlValues = {
	    'load': load,
	    'load-with-env': loadWithEnv,
	    'load-with-bare-env': loadWithBareEnv
	  };
	  setCoreFnsOnErlValues(environment, functionsOnErlValues);
	  return environment;
	};

	var get_jsFileName_and_localEnv = function(erlArgs) {
	  var partialArray = toPartialArray(2, erlArgs);
	  var erlFileName = partialArray[0];
	  var localEnv = partialArray[1];
	  var jsFileName = stripQuotes(extractJsValue(erlFileName));
	  return [jsFileName, localEnv];
	};

	var hasProcess = function() {
	  return typeof process !== 'undefined';
	}

	var hasProcessWebpackShim = function() {
	  return(process.title === 'browser' && process.browser);
	}

	var isNode = function() {
	  return hasProcess() && !hasProcessWebpackShim();
	}

	var load = function(erlArgs) {
	  if (isNode()) {
	    return _process_(_read(erlArgs));
	  } else {
	    return erlNil;
	  }
	};

	var loadWithBareEnv = function(erlArgs) {
	  if (isNode()) {
	    var temp = get_jsFileName_and_localEnv(erlArgs);
	    var jsFileName = temp[0];
	    var localEnv = temp[1];
	    return _processFileAndEnv(
	      readFile(jsFileName),
	      [fromErlIndex(localEnv)]);
	  } else {
	    return erlNil;
	  }
	};

	var loadWithEnv = function(erlArgs) {
	  if (isNode()) {
	    var temp = get_jsFileName_and_localEnv(erlArgs);
	    var jsFileName = temp[0];
	    var localEnv = temp[1];
	    return _processFileAndEnv(
	      readFile(jsFileName),
	      [fromErlIndex(localEnv), environment]);
	  } else {
	    return erlNil;
	  }
	};

	var _process_ = function(jsString) {
	  return _process([environment])(jsString);
	};

	var _processFileAndEnv = function(file, envStack) {
	  return _process(envStack)(file);
	};

	var _read = function(erlArgs) {
	  var jsFileName = get_jsFileName_and_localEnv(erlArgs)[0];
	  return readFile(jsFileName);
	};

	var readFile = function(jsFileName) {
	  return __webpack_require__(40).readFileSync(jsFileName).toString();
	};

	var setCoreFnsOnErlValues = function(env, fns) {
	  var _results = [];
	  for (var fnName in fns) {
	    if (!__hasProp.call(fns, fnName)) continue;
	    var fn = fns[fnName];
	    _results.push(env[fnName] = createErlCorePureFunction(fn));
	  }
	  return _results;
	};

	var stripQuotes = function(jsString) {
	  return jsString.slice(1, -1);
	};

	module.exports = getEnvironment;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(36)))

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	module.exports = "(do\n (def! fix*\n (fn* (f)\n ( (fn* (x) (f (fn* (& ys) (apply (x x) ys))))\n (fn* (x) (f (fn* (& ys) (apply (x x) ys)))))))\n\n (def! memfix*\n (fn* (f)\n (let* (cache {})\n (\n (fn* (x cache)\n (f\n (fn* (z)\n (if (contains? cache z)\n (get cache z)\n (let* (result ((fn* (y) ((x x cache) y)) z))\n (do (set! cache z result) result))))\n cache))\n (fn* (x cache)\n (f\n (fn* (z)\n (if (contains? cache z)\n (get cache z)\n (let* (result ((fn* (y) ((x x cache) y)) z))\n (do (set! cache z result) result))))\n cache))\n cache))))\n\n (def! _0 car)\n (def! _1 (fn* (xs) (nth 1 xs)))\n (def! _2 (fn* (xs) (nth 2 xs)))\n\n (def! swap! (macro* (atom & xs)\n (if (empty? xs)\n atom\n `(let* (-atom- ~atom)\n (do\n (reset! -atom- (~(car xs) (deref -atom-) ~@(cdr xs)))\n (deref -atom-))))))\n\n (def! *gensym-counter* (atom 0))\n\n (def! gensym (fn* ()\n (symbol (string \"G__\" (swap! *gensym-counter* incr)))))\n\n (def! or (macro* (& xs)\n (if (empty? xs)\n false\n (let* (-query- (gensym))\n `(let* (~-query- ~(car xs))\n (if ~-query- \n ~-query-\n (or ~@(cdr xs))))))))\n\n (def! and (macro* (& xs)\n (if (empty? xs)\n true\n (let* (-query- (gensym))\n `(let* (~-query- ~(car xs))\n (if ~-query-\n (and ~@(cdr xs))\n false))))))\n\n (def! cond (macro* (& xs)\n (if (empty? xs)\n nil\n (if (empty? (cdr xs))\n (throw \"`cond` requires an even number of forms.\")\n (let* (-query- (gensym))\n `(let* (~-query- ~(car xs))\n (if ~-query-\n ~(_1 xs)\n (cond ~@(cdr (cdr xs))))))))))\n\n (def! loop (macro* (form0 form1)\n `(let* (loop (memfix* (fn* (loop) (fn* (~(_0 form0)) ~form1)))) (loop ~(_1 form0)))))\n\n (def! -> (macro* (& xs)\n (if (empty? xs)\n nil\n (let* (x (car xs)\n xs (cdr xs))\n (if (empty? xs)\n x\n (let* (form (car xs)\n forms (cdr xs))\n (if (empty? forms)\n (if (list? form)\n (if (= (symbol \"fn*\") (car form))\n `(~form ~x)\n `(~(car form) ~x ~@(cdr form)))\n (list form x))\n `(-> (-> ~x ~form) ~@forms))))))))\n\n (def! ->> (macro* (& xs)\n (if (empty? xs)\n nil\n (let* (x (car xs)\n xs (cdr xs))\n (if (empty? xs)\n x\n (let* (form (car xs)\n forms (cdr xs))\n (if (empty? forms)\n (if (list? form)\n (if (= (symbol \"fn*\") (car form))\n `(~form ~x)\n `(~@form ~x))\n (list form x))\n `(->> (->> ~x ~form) ~@forms))))))))\n\n (def! ->* (macro* (& xs) `(fn* (-x-) (-> -x- ~@xs))))\n\n (def! ->>* (macro* (& xs) `(fn* (-x-) (->> -x- ~@xs))))\n\n (def! not (fn* (x) (if x false true)))\n (def! incr (->* (+ 1)))\n (def! decr (->* (- 1)))\n (def! zero? (->* (= 0)))\n\n (def! identity (fn* (x) x))\n\n (def! constant-fn (fn* (x) (fn* (y) x)))\n\n (def! call-on (fn* (& xs) (fn* (fn) (apply fn xs))))\n\n (def! step-into-list (fn* (xs fn0 fn1)\n (let* (x (car xs)\n -xs- (cdr xs))\n (if (empty? -xs-)\n (fn1 x)\n (fn0 x -xs-)))))\n\n (def! apply-on (fn* (& xs)\n (step-into-list\n xs\n (fn* (arguments -xs-) (apply (car -xs-) arguments))\n (fn* (arguments) (fn* (f) (apply f arguments))))))\n\n (def! reduce (fn* (f seed xs)\n (if (empty? xs)\n seed\n (reduce f (f seed (car xs)) (cdr xs)))))\n\n (def! filter (fn* (predicate xs)\n (reverse\n (reduce\n (fn* (memo x)\n (if (predicate x)\n (cons x memo)\n memo))\n '()\n xs))))\n\n (def! map (fn* (f xs)\n (reverse (reduce (fn* (memo x) (cons (f x) memo)) '() xs))))\n\n (def! every? (fn* (pred xs)\n (if (empty? xs)\n true\n (if (pred (car xs))\n (every? pred (cdr xs))\n false))))\n\n (def! some? (fn* (pred xs)\n (if (empty? xs)\n false\n (if (pred (car xs))\n true\n (some? pred (cdr xs))))))\n\n (def! letmemrec* (macro* (alias expr)\n `(let* (~(car alias) (memfix* (fn* (~(car alias)) ~(_1 alias)))) ~expr)))\n\n (def! skip (fn* (nbr xs)\n (letrec* (-skip- (fn* (ys)\n (let* (nbr (car ys)\n xs (_1 ys))\n (cond\n (= 0 nbr) xs\n (= 1 nbr) (cdr xs)\n \"default\" (-skip- (list (decr nbr) (cdr xs)))))))\n (-skip- (list nbr xs)))))\n\n (def! invokable? (fn* (x) (or (function? x) (macro? x))))\n\n (def! . (macro* (x key & xs)\n (if (empty? xs)\n `(get ~x ~key)\n `((get ~x ~key) ~@xs))))\n\n (def! .. (fn* (lo hi)\n (letrec* (-..- (fn* (xs)\n (let* (lo (_0 xs)\n hi (_1 xs)\n -list- (_2 xs))\n (if (= lo hi)\n (cons hi -list-)\n (-..- (list lo (decr hi) (cons hi -list-)))))))\n (-..- (list lo hi '())))))\n\n (def! defrec! (macro* (fn-name fn-body)\n `(def! ~fn-name (letrec* (~fn-name ~fn-body) ~fn-name))))\n\n (def! for* (macro* (loop-parameters body)\n `(loop\n ~(_0 loop-parameters)\n (if ~(_1 loop-parameters)\n (do ~body (loop ~(_2 loop-parameters)))\n nil))))\n\n (def! for-each (fn* (f xs)\n (reduce\n (fn* (memo x) (do (f x) memo))\n nil\n xs)))\n\n (def! n-times (fn* (n f)\n (loop (i 0)\n (if (= i n)\n nil\n (do (f i) (loop (+ i 1)))))))\n\n (def! tap (fn* (f x) (do (f x) x)))\n\n (def! with-side-effect (fn* (thunk x)\n (do (thunk) x)))\n\n (def! thunk (macro* (form)\n `(fn* () ~form)))\n\n (def! call (macro* (f & xs) `(~f ~@xs)))\n\n (def! apply (macro* (f xs) `(eval (cons ~f ~xs))))\n\n (def! eval-string (fn* (erlString) (eval (parse erlString))))\n\n)";


/***/ }),
/* 52 */
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