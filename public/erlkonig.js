/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/initializeErlkonigLispConsole.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
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

/***/ "./src/console/control/chars/getAction.js":
/*!************************************************!*\
  !*** ./src/console/control/chars/getAction.js ***!
  \************************************************/
/*! exports provided: getAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAction", function() { return getAction; });
const a = 'a';
const e = 'e';
const h = 'h';
const l = 'l';
const u = 'u';
const w = 'w';

const A = 'A';
const E = 'E';
const H = 'H';
const L = 'L';
const U = 'U';
const W = 'W';

const backspace = 'Backspace';
const _delete   = 'Delete';
const down      = 'ArrowDown';
const enter     = 'Enter';
const left      = 'ArrowLeft';
const right     = 'ArrowRight';
const space     = ' ';
const spacebar  = 'Spacebar';
const tab       = 'Tab';
const up        = 'ArrowUp';

const characters = [
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
  const value = keyChord.value;

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




/***/ }),

/***/ "./src/console/control/chars/getKeyChord.js":
/*!**************************************************!*\
  !*** ./src/console/control/chars/getKeyChord.js ***!
  \**************************************************/
/*! exports provided: getKeyChord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKeyChord", function() { return getKeyChord; });
/* harmony import */ var _keyCodeCharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyCodeCharts */ "./src/console/control/chars/keyCodeCharts.js");
/* harmony import */ var _keyIdentifierCharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyIdentifierCharts */ "./src/console/control/chars/keyIdentifierCharts.js");



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
  let normalize;
  let property;

  if (event.key != null) {
    property = 'key';
    normalize = identity;
  } else if (event.keyIdentifier != null) {
    property = 'keyIdentifier';
    normalize = _getKeyChord(_keyIdentifierCharts__WEBPACK_IMPORTED_MODULE_1__["keyIdentifierCharts"]);
  } else {
    property = 'keyCode';
    normalize = _getKeyChord(_keyCodeCharts__WEBPACK_IMPORTED_MODULE_0__["keyCodeCharts"]);
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
  const key = shiftKey ? 'withShift' : 'withoutShift';
  return conversionCharts[key][value];
}




/***/ }),

/***/ "./src/console/control/chars/interpretKeydown.js":
/*!*******************************************************!*\
  !*** ./src/console/control/chars/interpretKeydown.js ***!
  \*******************************************************/
/*! exports provided: interpretKeydown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpretKeydown", function() { return interpretKeydown; });
/* harmony import */ var _getAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAction */ "./src/console/control/chars/getAction.js");
/* harmony import */ var _getKeyChord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getKeyChord */ "./src/console/control/chars/getKeyChord.js");



function interpretKeydown(event) {
  return Object(_getAction__WEBPACK_IMPORTED_MODULE_0__["getAction"])(Object(_getKeyChord__WEBPACK_IMPORTED_MODULE_1__["getKeyChord"])(event));
}




/***/ }),

/***/ "./src/console/control/chars/keyCodeCharts.js":
/*!****************************************************!*\
  !*** ./src/console/control/chars/keyCodeCharts.js ***!
  \****************************************************/
/*! exports provided: keyCodeCharts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyCodeCharts", function() { return keyCodeCharts; });
const keyCodeCharts = {
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




/***/ }),

/***/ "./src/console/control/chars/keyIdentifierCharts.js":
/*!**********************************************************!*\
  !*** ./src/console/control/chars/keyIdentifierCharts.js ***!
  \**********************************************************/
/*! exports provided: keyIdentifierCharts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyIdentifierCharts", function() { return keyIdentifierCharts; });
const keyIdentifierCharts = {
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




/***/ }),

/***/ "./src/console/control/getViewport.js":
/*!********************************************!*\
  !*** ./src/console/control/getViewport.js ***!
  \********************************************/
/*! exports provided: getViewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewport", function() { return getViewport; });
/* harmony import */ var _models_actions_viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/actions/viewport */ "./src/console/models/actions/viewport.js");


function getViewport(action, config) {
  const command = action.name;
  const viewport = config.viewport;
  switch (command) {
    case 'addChar':
      return _models_actions_viewport__WEBPACK_IMPORTED_MODULE_0__["Viewport"].addChar(viewport, action.char);
    case 'completeWord':
      return _models_actions_viewport__WEBPACK_IMPORTED_MODULE_0__["Viewport"].completeWord(viewport, config.getCandidates);
    case 'noOp':
      return viewport;
    case 'submit':
      return _models_actions_viewport__WEBPACK_IMPORTED_MODULE_0__["Viewport"].submit(viewport, config.transform);
    default:
      return _models_actions_viewport__WEBPACK_IMPORTED_MODULE_0__["Viewport"][command](viewport);
  }
}




/***/ }),

/***/ "./src/console/control/initializeControl.js":
/*!**************************************************!*\
  !*** ./src/console/control/initializeControl.js ***!
  \**************************************************/
/*! exports provided: initializeControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeControl", function() { return initializeControl; });
/* harmony import */ var _getViewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getViewport */ "./src/console/control/getViewport.js");
/* harmony import */ var _chars_interpretKeydown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chars/interpretKeydown */ "./src/console/control/chars/interpretKeydown.js");



function initializeControl(subscribe, render, config) {
  const handleEvent = function (getAction) {
    return function (event) {
      render(Object(_getViewport__WEBPACK_IMPORTED_MODULE_0__["getViewport"])(getAction(event), config));
    };
  }

  subscribe('keydown', handleEvent(_chars_interpretKeydown__WEBPACK_IMPORTED_MODULE_1__["interpretKeydown"]));
}




/***/ }),

/***/ "./src/console/detectCssScrollbar.js":
/*!*******************************************!*\
  !*** ./src/console/detectCssScrollbar.js ***!
  \*******************************************/
/*! exports provided: detectCssScrollbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectCssScrollbar", function() { return detectCssScrollbar; });
const _nodeId     = '#erl-css-scrollbar-test-div';
const _prefixes   = ['-webkit-', '-moz-', '-o-', '-ms-'];
const _pseudo     = '::';
const _scrollbar  = 'scrollbar';
const _width10px  = '{width:10px;}';

function createRule(prefix) {
  return _nodeId + _pseudo + prefix + _scrollbar + _width10px;
}

function _detectCssScrollbar(styleRule) {
  const body = getBody();
  const docElement = document.documentElement;
  const div = document.createElement('div');
  const node = document.createElement('div');
  node.id = 'erl-css-scrollbar-test-div';
  div.appendChild(node);
  const style = document.createElement('style');
  style.type = 'text/css';
  style.id = 'erl-css-scrollbar-test-style';
  const nonceNode = document.getElementById('scrollbar-nonce');
  const nonce = nonceNode.dataset['scrollbarNonce'];
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
    const docOverflow = docElement.style.overflow;
    docElement.style.overflow = 'hidden';
    docElement.appendChild(body);
  }

  const result = hasCssScrollbar(node, 30);

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
  const cssScrollbar =
    _nodeId + '{overflow:scroll;width:40px;height:40px;}' +
    _prefixes.map(createRule).join('') +
    createRule('');

  return _detectCssScrollbar(cssScrollbar);
}

function getBody() {
  let _body = document.body;

  if (!_body) {
    const isSvg = document.documentElement.nodeName.toLowerCase() === 'svg';
    _body = document.createElement(isSvg ? 'svg' : 'body');
    _body.fake = true;
  }

  return _body;
}

function hasCssScrollbar(node, expectedWidth) {
  return 'scrollWidth' in node && node.scrollWidth === expectedWidth;
}




/***/ }),

/***/ "./src/console/initialize.js":
/*!***********************************!*\
  !*** ./src/console/initialize.js ***!
  \***********************************/
/*! exports provided: initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony import */ var _detectCssScrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detectCssScrollbar */ "./src/console/detectCssScrollbar.js");
/* harmony import */ var _models_getInitialModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/getInitialModel */ "./src/console/models/getInitialModel.js");
/* harmony import */ var _view_recreateConsole__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/recreateConsole */ "./src/console/view/recreateConsole.js");
/* harmony import */ var _control_initializeControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./control/initializeControl */ "./src/console/control/initializeControl.js");
/* harmony import */ var _view_initializeView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/initializeView */ "./src/console/view/initializeView.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./render */ "./src/console/render.js");
/* harmony import */ var _view_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/scroll */ "./src/console/view/scroll.js");
/* harmony import */ var _subscribe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subscribe */ "./src/console/subscribe.js");









function initialize(config) {
  const root = document.getElementById(config.nodeId);
  const initialModel = Object(_models_getInitialModel__WEBPACK_IMPORTED_MODULE_1__["getInitialModel"])();
  const promptLabel = config.promptLabel;
  const labels = { promptLabel: promptLabel };
  const viewModel = Object(_view_recreateConsole__WEBPACK_IMPORTED_MODULE_2__["ERLKING"])(labels, initialModel);

  Object(_view_initializeView__WEBPACK_IMPORTED_MODULE_4__["initializeView"])(root, viewModel);

  const rootChild = root.childNodes[0];

  const controlConfig = {
    getCandidates: config.getCandidates,
    promptLabel: promptLabel,
    transform: config.transform,
    viewport: initialModel
  };

  const cssScrollbarDetected = Object(_detectCssScrollbar__WEBPACK_IMPORTED_MODULE_0__["detectCssScrollbar"])();

  setScrollbarVisibility(cssScrollbarDetected);

  const _scroll = Object(_view_scroll__WEBPACK_IMPORTED_MODULE_6__["scroll"])(cssScrollbarDetected);

  Object(_control_initializeControl__WEBPACK_IMPORTED_MODULE_3__["initializeControl"])(
    _subscribe__WEBPACK_IMPORTED_MODULE_7__["subscribe"],
    Object(_render__WEBPACK_IMPORTED_MODULE_5__["render"])(viewModel, rootChild, controlConfig, _scroll),
    controlConfig);
}

function setScrollbarVisibility(cssScrollbarDetected) {
  if (!cssScrollbarDetected) {
    const viewport = document.getElementsByClassName('erl-viewport')[0]
    viewport.style.overflow = 'hidden';
  }
}





/***/ }),

/***/ "./src/console/models/actions/frame.js":
/*!*********************************************!*\
  !*** ./src/console/models/actions/frame.js ***!
  \*********************************************/
/*! exports provided: Frame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Frame", function() { return Frame; });
/* harmony import */ var _types_createFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/createFrame */ "./src/console/models/types/createFrame.js");


function clear(frame, terminal) {
  return Object(_types_createFrame__WEBPACK_IMPORTED_MODULE_0__["createFrame"])(
    0,
    terminal.entries.length,
    frame.promptIndex);
}

function fastForward(frame) {
  return Object(_types_createFrame__WEBPACK_IMPORTED_MODULE_0__["createFrame"])(
    frame.offset,
    frame.start,
    frame.promptIndex > 0
      ? frame.promptIndex - 1
      : frame.promptIndex);
}

function resetPromptIndex(frame) {
  return Object(_types_createFrame__WEBPACK_IMPORTED_MODULE_0__["createFrame"])(
    frame.offset,
    frame.start,
    0);
}

function rewind(frame, terminal) {
  return Object(_types_createFrame__WEBPACK_IMPORTED_MODULE_0__["createFrame"])(
    frame.offset,
    frame.start,
    terminal.prompts.length > frame.promptIndex
      ? frame.promptIndex + 1
      : frame.promptIndex);
}

const Frame = {
  clear,
  fastForward,
  resetPromptIndex,
  rewind
};


/***/ }),

/***/ "./src/console/models/actions/terminal.js":
/*!************************************************!*\
  !*** ./src/console/models/actions/terminal.js ***!
  \************************************************/
/*! exports provided: Terminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Terminal", function() { return Terminal; });
/* harmony import */ var _types_createTerminal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/createTerminal */ "./src/console/models/types/createTerminal.js");
/* harmony import */ var _types_createPrompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/createPrompt */ "./src/console/models/types/createPrompt.js");



function addChar(terminal, char) {
  return Object(_types_createTerminal__WEBPACK_IMPORTED_MODULE_0__["createTerminal"])(
    terminal.entries,
    terminal.prompts,
    Object(_types_createPrompt__WEBPACK_IMPORTED_MODULE_1__["createPrompt"])(
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
    prompt = Object(_types_createPrompt__WEBPACK_IMPORTED_MODULE_1__["createPrompt"])(
      splitCommand[0] + candidates[0] + ' ' + terminal.prompt.postCursor,
      terminal.prompt.postCursor);
  } else {
    entries = terminal.entries.concat(
      [{ type: 'command', value: extractCommand(terminal.prompt) }],
      [{ type: 'completion', value: candidates.join(' ') }]);
    prompt = terminal.prompt;
  }

  return Object(_types_createTerminal__WEBPACK_IMPORTED_MODULE_0__["createTerminal"])(entries, terminal.prompts, prompt);
}

function deleteLeftChar(terminal) {
  return Object(_types_createTerminal__WEBPACK_IMPORTED_MODULE_0__["createTerminal"])(
    terminal.entries, 
    terminal.prompts,
    Object(_types_createPrompt__WEBPACK_IMPORTED_MODULE_1__["createPrompt"])(
      terminal.prompt.preCursor.slice(0, -1),
      terminal.prompt.postCursor));
}

function deletePreCursor(terminal) {
  return Object(_types_createTerminal__WEBPACK_IMPORTED_MODULE_0__["createTerminal"])(
    terminal.entries, 
    terminal.prompts, 
    Object(_types_createPrompt__WEBPACK_IMPORTED_MODULE_1__["createPrompt"])('', terminal.prompt.postCursor));
}

function deleteRightChar(terminal) {
  return Object(_types_createTerminal__WEBPACK_IMPORTED_MODULE_0__["createTerminal"])(
    terminal.entries, 
    terminal.prompts, 
    Object(_types_createPrompt__WEBPACK_IMPORTED_MODULE_1__["createPrompt"])(
      terminal.prompt.preCursor,
      terminal.prompt.postCursor.slice(1)));
}

function deleteWord(terminal) {
  const preCursor = terminal.prompt.preCursor;
  return Object(_types_createTerminal__WEBPACK_IMPORTED_MODULE_0__["createTerminal"])(
    terminal.entries, 
    terminal.prompts, 
    Object(_types_createPrompt__WEBPACK_IMPORTED_MODULE_1__["createPrompt"])(
      preCursor.slice(0, preCursor.slice(0, -1).lastIndexOf(' ') + 1),
      terminal.prompt.postCursor));
}

function extractCommand(prompt) {
  return (prompt.preCursor + prompt.postCursor).trim();
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
    return Object(_types_createTerminal__WEBPACK_IMPORTED_MODULE_0__["createTerminal"])(
      terminal.entries,
      terminal.prompts,
      Object(_types_createPrompt__WEBPACK_IMPORTED_MODULE_1__["createPrompt"])(
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
    return Object(_types_createTerminal__WEBPACK_IMPORTED_MODULE_0__["createTerminal"])(
      terminal.entries,
      terminal.prompts,
      Object(_types_createPrompt__WEBPACK_IMPORTED_MODULE_1__["createPrompt"])(
        preCursor + postCursor[0],
        postCursor.slice(1)));
  }
}

function moveCursorToEnd(terminal) {
  const prompt = terminal.prompt;
  return Object(_types_createTerminal__WEBPACK_IMPORTED_MODULE_0__["createTerminal"])(
    terminal.entries,
    terminal.prompts,
    Object(_types_createPrompt__WEBPACK_IMPORTED_MODULE_1__["createPrompt"])(prompt.preCursor + prompt.postCursor, ''));
}

function moveCursorToStart(terminal) {
  const prompt = terminal.prompt;
  return Object(_types_createTerminal__WEBPACK_IMPORTED_MODULE_0__["createTerminal"])(
    terminal.entries,
    terminal.prompts,
    Object(_types_createPrompt__WEBPACK_IMPORTED_MODULE_1__["createPrompt"])('', prompt.preCursor + prompt.postCursor));
}

function normalizePrompt(prompt) {
  return Object(_types_createPrompt__WEBPACK_IMPORTED_MODULE_1__["createPrompt"])(extractCommand(prompt), '');
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
  const displayEntries = results
    .slice(0, -1)
    .filter(function (result) { return result.effect.type === 'display'; })
    .map(function (display) { return { type: 'display', value: display.value }});

  const lastResult = results[results.length - 1];
  const response = lastResult.value != null
    ? [{ type: 'response', value: lastResult.value }]
    : [];

  const command = { type: 'command', value: commandText };
  const prompt = normalizePrompt(terminal.prompt);

  return Object(_types_createTerminal__WEBPACK_IMPORTED_MODULE_0__["createTerminal"])(
    terminal.entries.concat([command], displayEntries, response),
    [prompt].concat(terminal.prompts),
    Object(_types_createPrompt__WEBPACK_IMPORTED_MODULE_1__["createPrompt"])('', ''));
}

const Terminal = {
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


/***/ }),

/***/ "./src/console/models/actions/viewport.js":
/*!************************************************!*\
  !*** ./src/console/models/actions/viewport.js ***!
  \************************************************/
/*! exports provided: Viewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Viewport", function() { return Viewport; });
/* harmony import */ var _types_createViewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/createViewport */ "./src/console/models/types/createViewport.js");
/* harmony import */ var _types_createFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/createFrame */ "./src/console/models/types/createFrame.js");
/* harmony import */ var _types_createTerminal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/createTerminal */ "./src/console/models/types/createTerminal.js");
/* harmony import */ var _frame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frame */ "./src/console/models/actions/frame.js");
/* harmony import */ var _terminal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./terminal */ "./src/console/models/actions/terminal.js");






function addChar(viewport, char) {
  return Object(_types_createViewport__WEBPACK_IMPORTED_MODULE_0__["createViewport"])(
    _terminal__WEBPACK_IMPORTED_MODULE_4__["Terminal"].addChar(viewport.terminal, char),
    viewport.frame);
}

function completeWord(viewport, getCandidates) {
  const frame = viewport.frame;
  const newTerminal =
    _terminal__WEBPACK_IMPORTED_MODULE_4__["Terminal"].completeWord(refreshTerminal(viewport), getCandidates);
  const diff = newTerminal.entries.length - viewport.terminal.entries.length;
  return Object(_types_createViewport__WEBPACK_IMPORTED_MODULE_0__["createViewport"])(
    newTerminal,
    Object(_types_createFrame__WEBPACK_IMPORTED_MODULE_1__["createFrame"])(
      frame.offset + diff,
      frame.start,
      0));
}

function clear(viewport) {
  const terminal = viewport.terminal;
  return Object(_types_createViewport__WEBPACK_IMPORTED_MODULE_0__["createViewport"])(
    terminal,
    _frame__WEBPACK_IMPORTED_MODULE_3__["Frame"].clear(viewport.frame, terminal));
}

function fastForward(viewport) {
  return Object(_types_createViewport__WEBPACK_IMPORTED_MODULE_0__["createViewport"])(
    viewport.terminal,
    _frame__WEBPACK_IMPORTED_MODULE_3__["Frame"].fastForward(viewport.frame));
}

function modifyTerminal(fnName) {
  return function (viewport) {
    return Object(_types_createViewport__WEBPACK_IMPORTED_MODULE_0__["createViewport"])(
      _terminal__WEBPACK_IMPORTED_MODULE_4__["Terminal"][fnName](refreshTerminal(viewport)),
      _frame__WEBPACK_IMPORTED_MODULE_3__["Frame"].resetPromptIndex(viewport.frame));
  };
}

function refreshTerminal(viewport) {
  const terminal = viewport.terminal;
  return Object(_types_createTerminal__WEBPACK_IMPORTED_MODULE_2__["createTerminal"])(terminal.entries, terminal.prompts, viewport.prompt);
}

function rewind(viewport) {
  const terminal = viewport.terminal;
  return Object(_types_createViewport__WEBPACK_IMPORTED_MODULE_0__["createViewport"])(
    terminal,
    _frame__WEBPACK_IMPORTED_MODULE_3__["Frame"].rewind(viewport.frame, terminal));
}

function submit(viewport, transform) {
  const frame = viewport.frame;
  const newTerminal = _terminal__WEBPACK_IMPORTED_MODULE_4__["Terminal"].submit(refreshTerminal(viewport), transform);
  const diff = newTerminal.entries.length - viewport.terminal.entries.length;
  return Object(_types_createViewport__WEBPACK_IMPORTED_MODULE_0__["createViewport"])(
    newTerminal,
    Object(_types_createFrame__WEBPACK_IMPORTED_MODULE_1__["createFrame"])(
      frame.offset + diff,
      frame.start,
      0));
}

const Viewport = {
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


/***/ }),

/***/ "./src/console/models/getInitialModel.js":
/*!***********************************************!*\
  !*** ./src/console/models/getInitialModel.js ***!
  \***********************************************/
/*! exports provided: getInitialModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialModel", function() { return getInitialModel; });
/* harmony import */ var _types_createFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/createFrame */ "./src/console/models/types/createFrame.js");
/* harmony import */ var _types_createPrompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/createPrompt */ "./src/console/models/types/createPrompt.js");
/* harmony import */ var _types_createTerminal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/createTerminal */ "./src/console/models/types/createTerminal.js");
/* harmony import */ var _types_createViewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/createViewport */ "./src/console/models/types/createViewport.js");





function getInitialModel() {
  return Object(_types_createViewport__WEBPACK_IMPORTED_MODULE_3__["createViewport"])(
    Object(_types_createTerminal__WEBPACK_IMPORTED_MODULE_2__["createTerminal"])([], [], Object(_types_createPrompt__WEBPACK_IMPORTED_MODULE_1__["createPrompt"])('', '')),
    Object(_types_createFrame__WEBPACK_IMPORTED_MODULE_0__["createFrame"])(0, 0, 0));
}




/***/ }),

/***/ "./src/console/models/types/createFrame.js":
/*!*************************************************!*\
  !*** ./src/console/models/types/createFrame.js ***!
  \*************************************************/
/*! exports provided: createFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFrame", function() { return createFrame; });
const createFrame = function (offset, start, promptIndex) {
  return {
    offset: offset,
    start: start,
    promptIndex: promptIndex
  };
};


/***/ }),

/***/ "./src/console/models/types/createPrompt.js":
/*!**************************************************!*\
  !*** ./src/console/models/types/createPrompt.js ***!
  \**************************************************/
/*! exports provided: createPrompt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPrompt", function() { return createPrompt; });
const createPrompt = function (preCursor, postCursor) {
  return {
    preCursor: preCursor,
    postCursor: postCursor
  };
};


/***/ }),

/***/ "./src/console/models/types/createTerminal.js":
/*!****************************************************!*\
  !*** ./src/console/models/types/createTerminal.js ***!
  \****************************************************/
/*! exports provided: createTerminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTerminal", function() { return createTerminal; });
const createTerminal =  function (entries, prompts, currentPrompt) {
  return  {
    entries: entries,
    prompts: prompts,
    prompt: currentPrompt
  };
};


/***/ }),

/***/ "./src/console/models/types/createViewport.js":
/*!****************************************************!*\
  !*** ./src/console/models/types/createViewport.js ***!
  \****************************************************/
/*! exports provided: createViewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createViewport", function() { return createViewport; });
function getPrompt(terminal, frame) {
  return frame.promptIndex === 0
    ? terminal.prompt
    : terminal.prompts[frame.promptIndex - 1];
}

const createViewport = function (terminal, frame) {
  return {
    terminal: terminal,
    frame: frame,
    prompt: getPrompt(terminal, frame)
  };
};


/***/ }),

/***/ "./src/console/render.js":
/*!*******************************!*\
  !*** ./src/console/render.js ***!
  \*******************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _ribosome_diff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ribosome/diff */ "./src/ribosome/diff.js");
/* harmony import */ var _view_recreateConsole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/recreateConsole */ "./src/console/view/recreateConsole.js");
/* harmony import */ var _ribosome_interpreter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ribosome/interpreter */ "./src/ribosome/interpreter.js");




function render(_viewModel, rootChild, controlConfig, scroll) {
  let viewModel = _viewModel;
  return function (model) {
    const labels = { promptLabel: controlConfig.promptLabel };
    const newViewModel = Object(_view_recreateConsole__WEBPACK_IMPORTED_MODULE_1__["ERLKING"])(labels, model);
    Object(_ribosome_interpreter__WEBPACK_IMPORTED_MODULE_2__["modifyElement"])(rootChild, Object(_ribosome_diff__WEBPACK_IMPORTED_MODULE_0__["diff"])(newViewModel, viewModel));

    controlConfig.viewport = model;
    viewModel = newViewModel;

    scroll();
  };
}




/***/ }),

/***/ "./src/console/subscribe.js":
/*!**********************************!*\
  !*** ./src/console/subscribe.js ***!
  \**********************************/
/*! exports provided: subscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
function subscribe(eventType, eventHandler) {
  window.addEventListener(eventType, supressDefault(eventHandler));
}

function supressDefault(handleEvent) {
  return function (event) {
    event.preventDefault();
    handleEvent(event);
  };
}




/***/ }),

/***/ "./src/console/view/components.js":
/*!****************************************!*\
  !*** ./src/console/view/components.js ***!
  \****************************************/
/*! exports provided: ERL_CURSOR, ERL_ENTRY, ERL_INPUT, ERL_POST, ERL_PRE, ERL_PROMPT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERL_CURSOR", function() { return ERL_CURSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERL_ENTRY", function() { return ERL_ENTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERL_INPUT", function() { return ERL_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERL_POST", function() { return ERL_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERL_PRE", function() { return ERL_PRE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERL_PROMPT", function() { return ERL_PROMPT; });
/* harmony import */ var _ribosome_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ribosome/elements */ "./src/ribosome/elements.js");


function ERL_ENTRY(text) {
  return Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_0__["SPAN"])(_entryConfig, text + newline);
}

function ERL_INPUT(promptText, preText, postText) {
  return Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_0__["SPAN"])(
    _inputConfig,
    ERL_PROMPT(promptText),
    ERL_PRE(preText),
    ERL_CURSOR,
    ERL_POST(postText));
}

function ERL_POST(text) {
  return Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_0__["SPAN"])(_postConfig, text);
}

function ERL_PRE(text) {
  return Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_0__["SPAN"])(_preConfig, text);
}

function ERL_PROMPT(text) {
  return Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_0__["SPAN"])(_promptConfig, text);
}

const emptyString = '';
const newline = '\n';
const space = ' ';
const underscore = '_';

const ERL_CURSOR = Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_0__["SPAN"])(
  {
    id: 'erl-cursor',
    classes: { 'erl-cursor': true, 'erl-cursor': true },
  },
  underscore);

const _entryConfig = {
  classes: { 'erl-entry': true, 'erl-line': true },
};

const _inputConfig = {
  id: 'erl-input',
  classes: { 'erl-input': true, 'erl-line': true }
};

const _postConfig = {
  id: 'erl-post',
  classes: { 'erl-post': true },
  style: { 'position': 'relative' }
};

const _preConfig = {
   id: 'erl-pre',
   classes: { 'erl-pre': true }
};

const _promptConfig = {
  id: 'erl-prompt',
  classes: { 'erl-prompt': true, 'erl-prompt': true }
};




/***/ }),

/***/ "./src/console/view/initializeView.js":
/*!********************************************!*\
  !*** ./src/console/view/initializeView.js ***!
  \********************************************/
/*! exports provided: initializeView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeView", function() { return initializeView; });
/* harmony import */ var _ribosome_interpreter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ribosome/interpreter */ "./src/ribosome/interpreter.js");


function initializeView(root, viewModel) {
  Object(_ribosome_interpreter__WEBPACK_IMPORTED_MODULE_0__["createAndAttachElement"])(root, viewModel);
}




/***/ }),

/***/ "./src/console/view/recreateConsole.js":
/*!*********************************************!*\
  !*** ./src/console/view/recreateConsole.js ***!
  \*********************************************/
/*! exports provided: ERLKING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERLKING", function() { return ERLKING; });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/console/view/components.js");
/* harmony import */ var _ribosome_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ribosome/elements */ "./src/ribosome/elements.js");




const ERL_HEADER = Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_1__["SECTION"])(
    {
      id: 'erl-header',
      classes: { 'head': true }
    },
    Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_1__["H1"])(null, 'Erlkönig Lisp Console\n'),
    Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_1__["H4"])(null, 'A terminal emulator and lisp interpreter\n'));

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

  return Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_1__["DIV"])(
    _erlkonigConfig,
    Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_1__["DIV"])(
      null,
      ERL_HEADER,
      Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_1__["DIV"])(
        _terminalConfig,
        X_SCROLLBAR,
        Y_SCROLLBAR,
        Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_1__["DIV"])(
          _erlViewportConfig,
          entries,
          Object(_components__WEBPACK_IMPORTED_MODULE_0__["ERL_INPUT"])(promptLabel, prompt.preCursor, prompt.postCursor)))));
}

const X_SCROLLBAR = Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_1__["DIV"])(
  {
    id: 'erl-x-scroll-track',
    classes: {
      'erl-x-scroll-track': true,
      'erl-scroll-track': true
    }
  },
  Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_1__["DIV"])({
    id: 'erl-x-scroll-thumb',
    classes: {
      'erl-x-scroll-thumb': true,
      'erl-scroll-thumb': true
    }
  }));

const Y_SCROLLBAR = Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_1__["DIV"])(
  {
    id: 'erl-y-scroll-track',
    classes: {
      'erl-y-scroll-track': true,
      'erl-scroll-track': true
    }
  },
  Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_1__["DIV"])({
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
  return Object(_components__WEBPACK_IMPORTED_MODULE_0__["ERL_ENTRY"])(entry);
}

const _erlkonigConfig = {
  id: 'erlkonig',
  classes: { 'erlkonig': true, 'container': true }
};
const _consoleConfig = { id: 'erl-console' };
const _terminalConfig = { classes: { 'terminal': true }};
const _erlViewportConfig = { classes: { 'erl-viewport': true }};




/***/ }),

/***/ "./src/console/view/scroll.js":
/*!************************************!*\
  !*** ./src/console/view/scroll.js ***!
  \************************************/
/*! exports provided: scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
function getCursorOffset(cursor, node) {
  const margin = 5;
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
      const cursor = getElement('erl-cursor');
      _scroll(getViewport(), cursor);
    };
  }

  return function () {
    const viewport = getViewport();
    const cursor = getElement('erl-cursor');
    const xTrack = getElement('erl-x-scroll-track');
    const xThumb = getElement('erl-x-scroll-thumb');
    const yTrack = getElement('erl-y-scroll-track');
    const yThumb = getElement('erl-y-scroll-thumb');
    const prompt = getElement('erl-prompt');

    const viewportWidth = viewport.offsetWidth;
    const viewportHeight = viewport.offsetHeight;

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
  const yThumbHeight = yThumb.offsetHeight;
  const yTrackHeight = yTrack.offsetHeight;
  const ullage = yTrackHeight - yThumbHeight;

  function mouseMove_vertical(event) {
    const _top = event.clientY - yTrack.getBoundingClientRect().top;
    const top = _top < 0 ? 0 : _top > ullage ? ullage : _top;
    const topRatio = top / yTrackHeight;
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
  const xThumbWidth = xThumb.offsetWidth;
  const xTrackWidth = xTrack.offsetWidth;
  const ullage = xTrackWidth - xThumbWidth;

  function mouseMove_horizontal(event) {
    const _left = event.clientX - xTrack.getBoundingClientRect().left;
    const left = _left < 0 ? 0 : _left > ullage ? ullage : _left;
    const leftRatio = left / xTrackWidth;
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
  const xTrackWidth = xTrack.offsetWidth;
  const terminalWidth = viewport.scrollWidth;
  const xThumbStyle = xThumb.style;

  if (viewportWidth < terminalWidth) {
    const fullPromptOffsetWidth = prompt.offsetLeft + prompt.offsetWidth;
    const start = fullPromptOffsetWidth;
    const viewportRatio = viewportWidth / terminalWidth;
    const xThumbWidth = viewportRatio * xTrackWidth;
    const viewportPercentage = getPercentage(viewportRatio);
    const ullage = xTrackWidth - xThumbWidth;
    const xPosition = cursor.offsetLeft + cursor.offsetWidth - start;
    const cursorRatio = (xPosition / terminalWidth) * (ullage / xTrackWidth);
    const cursorPercentage = getPercentage(cursorRatio);

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
  const yTrackHeight = yTrack.offsetHeight;
  const terminalHeight = viewport.scrollHeight;
  const yThumbStyle = yThumb.style;

  if (viewportHeight < terminalHeight) {
    const start = viewport.offsetTop;
    const viewportRatio = viewportHeight / terminalHeight;
    const yThumbHeight = viewportRatio * yTrackHeight;
    const viewportPercentage = getPercentage(viewportRatio);
    const ullage = yTrackHeight - yThumbHeight;
    const yPosition = cursor.offsetTop + cursor.offsetHeight - start;
    const cursorRatio = (yPosition / terminalHeight) * (ullage / yTrackHeight);
    const cursorPercentage = getPercentage(cursorRatio);

    yThumbStyle.top = cursorPercentage;
    yThumbStyle.height = viewportPercentage;
    yThumbStyle.visibility = 'visible';
  } else {
    yThumbStyle.top = 0;
    yThumbStyle.height = '100%';
    yThumbStyle.visibility = 'hidden';
  }
}




/***/ }),

/***/ "./src/initializeErlkonigLispConsole.js":
/*!**********************************************!*\
  !*** ./src/initializeErlkonigLispConsole.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _console_initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./console/initialize */ "./src/console/initialize.js");
/* harmony import */ var _lisp_interpret__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lisp/interpret */ "./src/lisp/interpret.js");
/* harmony import */ var _lisp_keyTokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lisp/keyTokens */ "./src/lisp/keyTokens.js");




const _keyTokens =  _lisp_keyTokens__WEBPACK_IMPORTED_MODULE_2__["keyTokens"].map(function (keyToken) {
  return ':' + keyToken;
});

const promptLabel = 'Lisp> ';

function getCandidates(prefix) {
  const envKeys = Object(_lisp_interpret__WEBPACK_IMPORTED_MODULE_1__["interpret"])("(keys (-get-current-env-))")[0]
      .value
      .slice(1, -1)
      .split(' ');
  return getMatches(prefix, _keyTokens.concat(envKeys));
}

function getMatches(prefix, words) {
  if (!/^[-a-zA-Z0-9]+$/.test(prefix)) {
    return [];
  }
  const regex = RegExp('(^|\W):' + prefix);
  const matches = [];
  for (let index in words) {
    const word = words[index];
    if (regex.test(word)) {
      matches.push(word.slice(1));
    }
  }
  return matches;
}

Object(_console_initialize__WEBPACK_IMPORTED_MODULE_0__["initialize"])({
  nodeId: 'viewport',
  promptLabel: promptLabel,
  transform: _lisp_interpret__WEBPACK_IMPORTED_MODULE_1__["interpret"],
  getCandidates: getCandidates
});


/***/ }),

/***/ "./src/lisp/_process.js":
/*!******************************!*\
  !*** ./src/lisp/_process.js ***!
  \******************************/
/*! exports provided: _process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_process", function() { return _process; });
/* harmony import */ var _commentSignal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentSignal */ "./src/lisp/commentSignal.js");
/* harmony import */ var _evaluate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluate */ "./src/lisp/evaluate.js");



const _process = function(transform) {
  return function(envs) {
    return function(sourceCode) {
      const results = [];
      const addResult = function(result) {
        return results.push(result);
      };
      const value = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(envs, addResult)(transform(sourceCode));
      const result = (value === _commentSignal__WEBPACK_IMPORTED_MODULE_0__["commentSignal"])
        ? { effect: { type: 'comment' } }
        : { effect: false, value: value };
      addResult(result);
      return results;
    };
  };
};




/***/ }),

/***/ "./src/lisp/commentSignal.js":
/*!***********************************!*\
  !*** ./src/lisp/commentSignal.js ***!
  \***********************************/
/*! exports provided: commentSignal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentSignal", function() { return commentSignal; });
const commentSignal = {};




/***/ }),

/***/ "./src/lisp/env-utilities.js":
/*!***********************************!*\
  !*** ./src/lisp/env-utilities.js ***!
  \***********************************/
/*! exports provided: addEnv, lookup, setMainEnv, unsetMainEnv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEnv", function() { return addEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookup", function() { return lookup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMainEnv", function() { return setMainEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsetMainEnv", function() { return unsetMainEnv; });
const addEnv = function (envStack, newEnv) {
  const copy = envStack.slice(0);
  copy.unshift(newEnv);
  return copy;
};

const getLast = function (array) {
  return array[array.length - 1];
};

const lookup = function (envStack, key) {
  const copy = envStack.slice(0);
  while (copy.length !== 0) {
    const env = copy[0];
    const value = env[key];
    if (value != null) {
      return value;
    }
    copy.shift();
  }
  throw "VALUE CORRESPONDING TO \"" + key + "\" DOES NOT EXIST IN ENV-STACK";
};

const set = function (env, key, value) {
  env[key] = value;
  return value;
};

const setMainEnv = function (envStack, key, value) {
  return set(getLast(envStack), key, value);
};

const unset = function (env, key) {
  const value = env[key];
  delete env[key];
  return value;
};

const unsetMainEnv = function (envStack, key) {
  return unset(getLast(envStack), key);
};




/***/ }),

/***/ "./src/lisp/env0.js":
/*!**************************!*\
  !*** ./src/lisp/env0.js ***!
  \**************************/
/*! exports provided: getEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnvironment", function() { return getEnvironment; });
/* harmony import */ var _type_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type-utilities */ "./src/lisp/type-utilities.js");
/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linked-list */ "./src/lisp/linked-list.js");
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js-utilities */ "./src/lisp/js-utilities.js");















const  __slice  = [].slice;
const __hasProp = {}.hasOwnProperty;

const add = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(nbrs.reduce(function(x, nbr) {
    return x += nbr;
  }));
};

const contains = function(index, key) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlBoolean"])(key in index);
};

const dissoc = function() {
  const index = arguments[0];
  const keys = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  const len = keys.length;
  const copy = {};
  for (let key in index) {
    if (!__hasProp.call(index, key)) continue;
    const value = index[key];
    copy[key] = value;
  }
  for (let i = 0; i < len; i++) {
    const key = keys[i];
    delete copy[key];
  }
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlIndex"])(copy);
};

const divide = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(nbrs.reduce(function(x, nbr) {
    return x /= nbr;
  }));
};

const exponentiate = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(nbrs.reduce(function(x, nbr) {
    return Math.pow(x, nbr);
  }));
};

const get = function(jsIndex, jsKey) {
  return jsIndex[jsKey];
};

const getEnvironment = function(config) {
  const environment = config.environment;
  setCoreFnsOnJsValuesBang(environment, functionsOnJsValues);
  return environment;
};

const greaterThanOrEqual = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlBoolean"])(nbrs[0] >= nbrs[1]);
};

const greaterThan = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlBoolean"])(nbrs[0] > nbrs[1]);
};

const index = function() {
  const args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  const len = args.length;
  const _index = {};
  for (let i = 0; i < len; i++) {
    const k = args[i];
    if (i % 2 === 0) {
      _index[k] = args[i + 1];
    }
  }
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlIndex"])(_index);
};

const keys = function(index) {
  const _keys = [];
  for (let key in index) {
    if (!__hasProp.call(index, key)) continue;
    const value = index[key];
    const jsNbr = parseFloat(key, 10);
    const _key = Object(_js_utilities__WEBPACK_IMPORTED_MODULE_2__["isJsNaN"])(jsNbr)
        ? (key[0] === ':' ? _type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlIdentifier"] : _type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlString"])(key)
        : Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(jsNbr);
    _keys.push(_key);
  }
  return Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(_keys);
};

const lengthString = function(jsVal) {
  if (!Object(_js_utilities__WEBPACK_IMPORTED_MODULE_2__["isJsString"])(jsVal)) {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_0__["erlNil"];
  }
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(jsVal.length - 2);
};

const lessThan = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlBoolean"])(nbrs[0] < nbrs[1]);
};

const lessThanOrEqual = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlBoolean"])(nbrs[0] <= nbrs[1]);
};

const lift = function(fnOnJsValues) {
  return function(erlValueList) {
    return fnOnJsValues.apply(null, (Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["toArray"])(erlValueList)).map(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["extractJsValue"]));
  };
};

const max = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(Math.max.apply(Math, nbrs));
};

const min = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(Math.min.apply(Math, nbrs));
};

const mod = function(nbr0, nbr1) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(nbr0 % nbr1);
};

const multiply = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(nbrs.reduce(function(x, nbr) {
    return x *= nbr;
  }));
};

const negate = function(nbr) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(-1 * nbr);
};

const parseNumber = function(jsVal) {
  if (Object(_js_utilities__WEBPACK_IMPORTED_MODULE_2__["isJsNumber"])(jsVal)) {
    return jsVal;
  }
  if (!Object(_js_utilities__WEBPACK_IMPORTED_MODULE_2__["isJsString"])(jsVal)) {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_0__["erlNil"];
  }
  const jsNbr = parseFloat(stripQuotes(jsVal), 10);
  if (Object(_js_utilities__WEBPACK_IMPORTED_MODULE_2__["isJsNaN"])(jsNbr)) {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_0__["erlNil"];
  } else {
    return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(jsNbr);
  }
};

const setCoreFnsOnJsValuesBang = function(env, fns) {
  const _results = [];
  for (let fnName in fns) {
    if (!__hasProp.call(fns, fnName)) continue;
    const fn = fns[fnName];
    env[fnName] = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlCorePureFunction"])(lift(fn));
    _results.push(env[fnName]);
  }
  return _results;
};

const subtract = function() {
  const nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(nbrs.reduce(function(x, nbr) {
    return x -= nbr;
  }));
};

const vals = function(index) {
  const values = [];
  for (let key in index) {
    if (!__hasProp.call(index, key)) {
      continue;
    }
    const value = index[key];
    values.push(value);
  }
  return Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(values);
};

const functionsOnJsValues = {
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




/***/ }),

/***/ "./src/lisp/env1.js":
/*!**************************!*\
  !*** ./src/lisp/env1.js ***!
  \**************************/
/*! exports provided: getEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnvironment", function() { return getEnvironment; });
/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list */ "./src/lisp/linked-list.js");
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-utilities */ "./src/lisp/js-utilities.js");
/* harmony import */ var _type_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-utilities */ "./src/lisp/type-utilities.js");
/* harmony import */ var _interpret__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interpret */ "./src/lisp/interpret.js");
/* harmony import */ var _serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serialize */ "./src/lisp/serialize.js");













































const __slice   = [].slice;
const __hasProp = {}.hasOwnProperty;

const append = function(erlArgs) {
  const erlArgsArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toArray"])(erlArgs);
  const erlList = erlArgsArray[0];
  const erlValues = 2 <= erlArgsArray.length ? __slice.call(erlArgsArray, 1) : [];
  return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["concat"])(erlList, Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["fromArray"])(erlValues));
};

const _areEqual = function(erlArgs) {
  const partialArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toPartialArray"])(2, erlArgs);
  const erlValue0 = partialArray[0];
  const erlValue1 = partialArray[1];
  const __areEqual = function(erlValue0, erlValue1) {
    if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlList"])(erlValue0) && Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlList"])(erlValue1)) {
      return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["areEqual"])(erlValue0, erlValue1, __areEqual);
    } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlIndex"])(erlValue0) && Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlIndex"])(erlValue1)) {
      const jsIndex0 = erlValue0.jsValue;
      const jsIndex1 = erlValue1.jsValue;
      return (__areEqual(keys(jsIndex0), keys(jsIndex1)))
        && (__areEqual(vals(jsIndex0), vals(jsIndex1)));
    } else {
      return erlValue0.jsValue === erlValue1.jsValue;
    }
  };
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlBoolean"])(__areEqual(erlValue0, erlValue1));
};

const assoc = function(erlArgs) {
  let args;
  const jsIndex = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs));
  args = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["cdr"])(erlArgs);
  const copy = {};
  for (let key in jsIndex) {
    if (!__hasProp.call(jsIndex, key)) {
      continue;
    }
    const value = jsIndex[key];
    copy[key] = value;
  }
  while (!Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(args)) {
    const k = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(args);
    const v = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["next"])(args);
    args = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["recurse"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["recurse"])(args));
    copy[Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(k)] = v;
  }
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlIndex"])(copy);
};

const atom = function(erlArgs) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlAtom"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs));
};

const _car = function(erlArgs) {
  const arg = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs);
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlList"])(arg)) {
    return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(arg);
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlNil"];
  }
};

const _cdr = function(erlArgs) {
  const arg = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs);
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlList"])(arg)) {
    return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["cdr"])(arg);
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlNil"];
  }
};

const _concat = function(erlArgs) {
  const erlLists = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toArray"])(erlArgs);
  return _linked_list__WEBPACK_IMPORTED_MODULE_0__["concat"].apply(null, erlLists);
};

const cons = function(erlArgs) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlList"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs), Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["next"])(erlArgs));
};

const count = function(erlArgs) {
  const erlList = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs);
  if (!Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlList"])(erlList)) {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlNil"];
  }
  const _reduce = function(sum, value) {
    return sum + 1;
  };
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlNumber"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["reduce"])(0, _reduce, Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs)));
};

const createPredicate = function(pred) {
  return function(jsList) {
    const erlValue = jsList.value;
    return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlBoolean"])(pred(erlValue));
  };
};

const deref = function(erlArgs) {
  return (Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs)).erlValue;
};

const _drop = function(erlArgs) {
  const partialArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toPartialArray"])(2, erlArgs);
  const erlNumber = partialArray[0];
  const erlList = partialArray[1];
  return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["drop"])(Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(erlNumber), erlList);
};

const first = function(erlArgs) {
  return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs));
};

const getEnvironment = function(config) {
  const environment = config.environment;
  setCoreFnsOnErlValues(environment, functionsOnErlValues);
  return environment;
};

const hasProcess = function() {
  return typeof process !== 'undefined';
}

const hasProcessWebpackShim = function() {
  return(process.title === 'browser' && process.browser);
}

const ignore = function(erlArgs) {
  return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlIgnore"];
};

const ignoreIfTrue = function(erlArgs) {
  const partialArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toPartialArray"])(2, erlArgs);
  const erlBool = partialArray[0];
  const erlValue = partialArray[1];
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(erlBool)) {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlIgnore"];
  } else {
    return erlValue;
  }
};

const ignoreUnlessTrue = function(erlArgs) {
  const partialArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toPartialArray"])(2, erlArgs);
  const erlBool = partialArray[0];
  const erlValue = partialArray[1];
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(erlBool)) {
    return erlValue;
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlIgnore"];
  }
};

const _interpret = function(erlArgs) {
  return Object(_interpret__WEBPACK_IMPORTED_MODULE_3__["interpret"])(stripQuotes(Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs))));
};

const _isEmpty = function(erlArgs) {
  if (Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(erlArgs)) {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlFalse"];
  } else {
    if (Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs))) {
      return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlTrue"];
    } else {
      return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlFalse"];
    }
  }
};

const isFunction = function(jsList) {
  const erlValue = jsList.value;
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlBoolean"])(Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlCorePureFunction"])(erlValue)
    || Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlUserPureFunction"])(erlValue));
};

const isNode = function() {
  return hasProcess() && !hasProcessWebpackShim();
}

const _last = function(erlArgs) {
  const arg = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs);
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlList"])(arg)) {
    return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["last"])(arg);
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlNil"];
  }
};

const list = function(erlArgs) {
  return erlArgs;
};

const meta = function(erlArgs) {
  const erlMeta = (Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs)).meta;
  if (erlMeta != null) {
    return erlMeta;
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlNil"];
  }
};

const _not = function(erlArgs) {
  const erlVal = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs);
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlNil"])(erlVal) || Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlFalse"])(erlVal)) {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlTrue"];
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlFalse"];
  }
};

const nth = function(erlArgs) {
  const partialArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toPartialArray"])(2, erlArgs);
  const erlNumber = partialArray[0];
  let erlList = partialArray[1];
  const target = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(erlNumber);
  if (target >= 0) {
    for (let i = 0; i < target; i++) {
      erlList = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["cdr"])(erlList);
    }
  } else {
    for (let i = 0; i > target; i--) {
      erlList = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["cdr"])(erlList);
    }
  }
  return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlList);
};

const prepend = function(erlArgs) {
  const erlArgsArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toArray"])(erlArgs);
  const erlList = erlArgsArray[0];
  const erlValues = 2 <= erlArgsArray.length ? __slice.call(erlArgsArray, 1) : [];
  const _reduce = function(list, val) {
    return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlList"])(val, list);
  };
  return erlValues.reduce(_reduce, erlList);
};

const _prStr = function(erlArgs, printReadably) {
  return ((Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toArray"])(erlArgs)).map(function(erlArg) {
    return Object(_serialize__WEBPACK_IMPORTED_MODULE_4__["serialize"])(erlArg, printReadably);
  })).join('');
};

const prettyString = function(erlArgs) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlString"])(Object(_js_utilities__WEBPACK_IMPORTED_MODULE_1__["circumpendQuotes"])(_prStr(erlArgs, true)));
};

const read = function(jsList) {
  if (isNode()) {
    const _read = function(_jsList) {
      const jsFileName = stripQuotes(Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(_jsList)));
      //return require('fs').readFileSync(jsFileName).toString();
      return null;
    };
    return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlString"])(_read(jsList));
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlNil"];
  }
};

const reset = function(erlArgs) {
  const partialArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toPartialArray"])(2, erlArgs);
  const atom = partialArray[0];
  const value = partialArray[1];
  atom.erlValue = value;
  return atom;
};

const rest = function(erlArgs) {
  const arg = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs);
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlList"])(arg)) {
    return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["cdr"])(arg);
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlNil"];
  }
};

const _reverse = function(erlArgs) {
  const arg = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs);
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlList"])(arg)) {
    return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["reverse"])(arg);
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlNil"];
  }
};

const set = function(erlArgs) {
  const partialArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toPartialArray"])(3, erlArgs);
  const index = partialArray[0];
  const key = partialArray[1];
  const val = partialArray[2];
  (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(index))[Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(key)] = val;
  return index;
};

const setCoreFnsOnErlValues = function(env, fns) {
  const _results = [];
  for (let fnName in fns) {
    if (!__hasProp.call(fns, fnName)) continue;
    const fn = fns[fnName];
    _results.push(env[fnName] = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlCorePureFunction"])(fn));
  }
  return _results;
};

const slurp = function(erlArgs) {
  if (isNode()) {
    const jsFileName = stripQuotes(Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs)));
    //const _fs_ = require('fs');
    //return createErlString(circumpendQuotes(_fs_.readFileSync(jsFileName).toString()));
    return null;
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlNil"];
  }
};

const string = function(erlArgs) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlString"])(Object(_js_utilities__WEBPACK_IMPORTED_MODULE_1__["circumpendQuotes"])(_prStr(erlArgs, false)));
};

const stripQuotes = function(jsString) {
  return jsString.slice(1, -1);
};

const symbol = function(erlArgs) {
  const erlValue = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs);
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlString"])(erlValue)) {
    const jsStr = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(erlValue);
    return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlSymbol"])(jsStr.slice(1, -1));
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlNil"];
  }
};

const _take = function(erlArgs) {
  const partialArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toPartialArray"])(2, erlArgs);
  const erlNumber = partialArray[0];
  const erlList = partialArray[1];
  return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["take"])(Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(erlNumber), erlList);
};

const typeOf = function(erlArgs) {
  const erlValue = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs);
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlString"])(Object(_js_utilities__WEBPACK_IMPORTED_MODULE_1__["circumpendQuotes"])(erlValue.type));
};

const _throw = function(erlArgs) {
  throw Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs);
};

const timeMs = function() {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlNumber"])(new Date().getTime());
};

const withMeta = function(erlArgs) {
  const partialArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toPartialArray"])(2, erlArgs);
  const erlVal = partialArray[0];
  const erlMeta = partialArray[1];
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlAtom"])(erlVal)) {
    const erlValue = erlVal.erlValue;
    const type = erlVal.type;
    return {
      erlValue: erlValue,
      type: type,
      meta: erlMeta
    };
  } else {
    const jsValue = erlVal.jsValue;
    const type = erlVal.type;
    return {
      jsValue: jsValue,
      type: type,
      meta: erlMeta
    };
  }
};

const write = function(erlArgs) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlString"])(Object(_serialize__WEBPACK_IMPORTED_MODULE_4__["serialize"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs)));
};

const predicates = [
  _type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlAtom"],
  _type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlBoolean"],
  _type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlCorePureFunction"],
  _type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlFalse"],
  _type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlList"],
  _type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlMacro"],
  _type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlNil"],
  _type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlNumber"],
  _type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlSymbol"],
  _type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlString"],
  _type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlUserPureFunction"],
  _type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlTrue"]
].map(createPredicate);

const isAtom    = predicates[0];
const isBoolean = predicates[1];
const isCoreFn  = predicates[2];
const isFalse   = predicates[3];
const isList    = predicates[4];
const isMacro   = predicates[5];
const isNil     = predicates[6];
const isNumber  = predicates[7];
const isSymbol  = predicates[8];
const isString  = predicates[9];
const isUserFn  = predicates[10];
const isTrue    = predicates[11];

const functionsOnErlValues = {
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



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/lisp/env2.js":
/*!**************************!*\
  !*** ./src/lisp/env2.js ***!
  \**************************/
/*! exports provided: getEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnvironment", function() { return getEnvironment; });
/* harmony import */ var _type_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type-utilities */ "./src/lisp/type-utilities.js");
/* harmony import */ var _serialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serialize */ "./src/lisp/serialize.js");
/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linked-list */ "./src/lisp/linked-list.js");






const __hasProp = {}.hasOwnProperty;

const getEnvironment = function(config) {
  const display = config.display;
  const environment = config.environment;
  setCoreEffectfulFnsOnErlValues(display)(environment, displayEffectsOnErlValues);
  return environment;
};

const hasProcess = function() {
  return typeof process !== 'undefined';
}

const hasProcessWebpackShim = function() {
  return(process.title === 'browser' && process.browser);
}

const isNode = function() {
  return hasProcess() && !hasProcessWebpackShim();
}

const _prStr = function(erlArgs, shouldBeReadable) {
  return ((Object(_linked_list__WEBPACK_IMPORTED_MODULE_2__["toArray"])(erlArgs)).map(function(erlArg) {
    return Object(_serialize__WEBPACK_IMPORTED_MODULE_1__["serialize"])(erlArg, shouldBeReadable);
  })).join('');
};

const _quit_ = function() {
  if (isNode()) {
    return process.exit(0);
  } else {
    return _prStr(
      Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlList"])(
        Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlString"])(
          "\"'Erlkönig Lisp Console' is not permitted to close this window.\"")),
          false);
  }
};

const setCoreEffectfulFnsOnErlValues = function(represent) {
  return function(env, fns) {
    const _results = [];
    for (let fnName in fns) {
      if (!__hasProp.call(fns, fnName)) continue;
      const fn = fns[fnName];
      env[fnName] = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlCoreEffectfulFunction"])(function(erlArgs) {
        return represent(fn(erlArgs));
      });
      _results.push(env[fnName]);
    }
    return _results;
  };
};

const displayEffectsOnErlValues = {
  'print': function(erlArgs) {
    return _prStr(erlArgs, false);
  },
  'pretty-print': function(erlArgs) {
    return _prStr(erlArgs, true);
  },
  '-quit-': _quit_,
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/lisp/env3.js":
/*!**************************!*\
  !*** ./src/lisp/env3.js ***!
  \**************************/
/*! exports provided: getEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnvironment", function() { return getEnvironment; });
/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list */ "./src/lisp/linked-list.js");
/* harmony import */ var _type_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-utilities */ "./src/lisp/type-utilities.js");
/* harmony import */ var _index_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-utilities */ "./src/lisp/index-utilities.js");
/* harmony import */ var _process__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_process */ "./src/lisp/_process.js");
/* harmony import */ var _tokenizeAndParse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tokenizeAndParse */ "./src/lisp/tokenizeAndParse.js");













const __hasProp = {}.hasOwnProperty;

const getEnvironment = function(config) {
  const environment = config.environment;
  const parse = function(erlArgs) {
    return Object(_tokenizeAndParse__WEBPACK_IMPORTED_MODULE_4__["tokenizeAndParse"])(stripQuotes(Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["extractJsValue"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs))));
  };
  const functionsOnErlValues = { parse: parse };
  setCoreFnsOnErlValues(environment, functionsOnErlValues);
  return environment;
};

const _process_ = Object(_process__WEBPACK_IMPORTED_MODULE_3__["_process"])(function(erlVal) {
  return erlVal;
});

const setCoreFnsOnErlValues = function(env, fns) {
  const _results = [];
  for (let fnName in fns) {
    if (!__hasProp.call(fns, fnName)) {
      continue;
    }
    const fn = fns[fnName];
    _results.push(env[fnName] = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["createErlCorePureFunction"])(fn));
  }
  return _results;
};

const stripQuotes = function(jsString) {
  return jsString.slice(1, -1);
};




/***/ }),

/***/ "./src/lisp/env4.js":
/*!**************************!*\
  !*** ./src/lisp/env4.js ***!
  \**************************/
/*! exports provided: getEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnvironment", function() { return getEnvironment; });
/* harmony import */ var _type_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type-utilities */ "./src/lisp/type-utilities.js");
/* harmony import */ var _index_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-utilities */ "./src/lisp/index-utilities.js");
/* harmony import */ var _process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_process */ "./src/lisp/_process.js");
/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linked-list */ "./src/lisp/linked-list.js");







const __hasProp = {}.hasOwnProperty;

const getEnvironment = function(config) {
  const environment = config.environment;
  const functionsOnErlValues = {
    'load': load,
    'load-with-env': loadWithEnv,
    'load-with-bare-env': loadWithBareEnv
  };
  setCoreFnsOnErlValues(environment, functionsOnErlValues);
  return environment;
};

const get_jsFileName_and_localEnv = function(erlArgs) {
  const partialArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_3__["toPartialArray"])(2, erlArgs);
  const erlFileName = partialArray[0];
  const localEnv = partialArray[1];
  const jsFileName = stripQuotes(Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["extractJsValue"])(erlFileName));
  return [jsFileName, localEnv];
};

const hasProcess = function() {
  return typeof process !== 'undefined';
}

const hasProcessWebpackShim = function() {
  return(process.title === 'browser' && process.browser);
}

const isNode = function() {
  return hasProcess() && !hasProcessWebpackShim();
}

const load = function(erlArgs) {
  if (isNode()) {
    return _process_(_read(erlArgs));
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_0__["erlNil"];
  }
};

const loadWithBareEnv = function(erlArgs) {
  if (isNode()) {
    const temp = get_jsFileName_and_localEnv(erlArgs);
    const jsFileName = temp[0];
    const localEnv = temp[1];
    return _processFileAndEnv(
      readFile(jsFileName),
      [Object(_index_utilities__WEBPACK_IMPORTED_MODULE_1__["fromErlIndex"])(localEnv)]);
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_0__["erlNil"];
  }
};

const loadWithEnv = function(erlArgs) {
  if (isNode()) {
    const temp = get_jsFileName_and_localEnv(erlArgs);
    const jsFileName = temp[0];
    const localEnv = temp[1];
    return _processFileAndEnv(
      readFile(jsFileName),
      [Object(_index_utilities__WEBPACK_IMPORTED_MODULE_1__["fromErlIndex"])(localEnv), environment]);
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_0__["erlNil"];
  }
};

const _process_ = function(jsString) {
  return Object(_process__WEBPACK_IMPORTED_MODULE_2__["_process"])([environment])(jsString);
};

const _processFileAndEnv = function(file, envStack) {
  return Object(_process__WEBPACK_IMPORTED_MODULE_2__["_process"])(envStack)(file);
};

const _read = function(erlArgs) {
  const jsFileName = get_jsFileName_and_localEnv(erlArgs)[0];
  return readFile(jsFileName);
};

const readFile = function(jsFileName) {
  //return require('fs').readFileSync(jsFileName).toString();
  return null;
};

const setCoreFnsOnErlValues = function(env, fns) {
  const _results = [];
  for (let fnName in fns) {
    if (!__hasProp.call(fns, fnName)) continue;
    const fn = fns[fnName];
    _results.push(env[fnName] = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlCorePureFunction"])(fn));
  }
  return _results;
};

const stripQuotes = function(jsString) {
  return jsString.slice(1, -1);
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/lisp/evaluate.js":
/*!******************************!*\
  !*** ./src/lisp/evaluate.js ***!
  \******************************/
/*! exports provided: evaluate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evaluate", function() { return evaluate; });
/* harmony import */ var _env_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env-utilities */ "./src/lisp/env-utilities.js");
/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linked-list */ "./src/lisp/linked-list.js");
/* harmony import */ var _keyTokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyTokens */ "./src/lisp/keyTokens.js");
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js-utilities */ "./src/lisp/js-utilities.js");
/* harmony import */ var _commentSignal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commentSignal */ "./src/lisp/commentSignal.js");
/* harmony import */ var _type_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type-utilities */ "./src/lisp/type-utilities.js");
/* harmony import */ var _index_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-utilities */ "./src/lisp/index-utilities.js");































































const __hasProp = {}.hasOwnProperty;

const createFn = function(erlList, envs) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlUserPureFunction"])({
    localEnvs: envs.slice(0),
    erlExpression: Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["next"])(erlList),
    erlParameters: Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(erlList)
  });
};

const createLocalEnv = function(erlParams, erlArgs) {
  const env = {};
  while (!Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(erlParams)) {
    const jsParam = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(erlParams));
    if (jsParam === _keyTokens__WEBPACK_IMPORTED_MODULE_2__["splat"]) {
      env[Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["next"])(erlParams))] = erlArgs;
      return env;
    } else {
      env[jsParam] = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(erlArgs);
      erlParams = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["cdr"])(erlParams);
      erlArgs = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["cdr"])(erlArgs);
    }
  }
  return env;
};

const createMacro = function(erlList, envs) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlMacro"])({
    localEnvs: envs.slice(0),
    erlExpression: Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["next"])(erlList),
    erlParameters: Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(erlList)
  });
};

const defineNewValue = function(erlList, envs, addResult) {
  const jsKey = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(erlList));
  const erlValue = _evaluate(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["next"])(erlList), envs, addResult);
  return Object(_env_utilities__WEBPACK_IMPORTED_MODULE_0__["setMainEnv"])(envs, jsKey, erlValue);
};

const evalQuasiquotedExpr = function(expr, envs, addResult) {
  if (!Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlList"])(expr)) {
    return expr;
  }
  const manageItem = function(memo, item) {
    if (isUnquotedExpr(item)) {
        return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlList"])(_evaluate(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["next"])(item), envs, addResult), memo);
    } else if (isSpliceUnquotedExpr(item)) {
        const _manageItem = function(_memo, _item) {
          return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlList"])(_item, _memo);
        };
        return Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["reduce"])(memo, _manageItem, _evaluate(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["next"])(item), envs, addResult));
    } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlList"])(item)) {
        return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlList"])(evalQuasiquotedExpr(item, envs, addResult), memo);
    } else {
        return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlList"])(item, memo);
    }
  };
  return Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["reverse"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["reduce"])(Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlList"])(), manageItem, expr));
};

const _evaluate = function(erlExpr, envs, addResult) {
  while (true) {
    if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlSymbol"])(erlExpr)) {
      const jsString = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(erlExpr);
      if (Object(_keyTokens__WEBPACK_IMPORTED_MODULE_2__["isKeyword"])(jsString)) {
        return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlKeyword"])(jsString);
      } else {
        return Object(_env_utilities__WEBPACK_IMPORTED_MODULE_0__["lookup"])(envs, jsString);
      }
    } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlIndex"])(erlExpr)) {
      const index = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(erlExpr);
      const newIndex = {};
      for (let key in index) {
        if (!__hasProp.call(index, key)) continue;
        newIndex[key] = _evaluate(index[key], envs, addResult);
      }
      return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlIndex"])(newIndex);
    } else if (!(Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlList"])(erlExpr))) {
      return erlExpr;
    } else {
      erlExpr = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["filter"])((function(x) {
        return !(ignorable(x, envs, addResult));
      }), erlExpr);
      const erlExprArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["toPartialArray"])(2, erlExpr);
      const head = erlExprArray[0];
      const arg1 = erlExprArray[1];
      const remainingArgs = erlExprArray[2];
      const tailList = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["cdr"])(erlExpr);
      switch (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(head)) {
        case _keyTokens__WEBPACK_IMPORTED_MODULE_2__["defBang"]:
          return defineNewValue(tailList, envs, addResult);
        case _keyTokens__WEBPACK_IMPORTED_MODULE_2__["undefBang"]:
          return undefineValue(tailList, envs);
        case _keyTokens__WEBPACK_IMPORTED_MODULE_2__["_eval"]:
          erlExpr = _evaluate(arg1, envs, addResult);
          break;
        case _keyTokens__WEBPACK_IMPORTED_MODULE_2__["_evalWithEnv"]:
          envs = [Object(_index_utilities__WEBPACK_IMPORTED_MODULE_6__["fromErlIndex"])(_evaluate(arg1, envs, addResult))];
          erlExpr = _evaluate(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(remainingArgs), envs, addResult);
          break;
        case _keyTokens__WEBPACK_IMPORTED_MODULE_2__["letStar"]:
          erlExpr = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(remainingArgs);
          envs = Object(_env_utilities__WEBPACK_IMPORTED_MODULE_0__["addEnv"])(envs, reduceLet(envs, arg1, addResult));
          break;
        case _keyTokens__WEBPACK_IMPORTED_MODULE_2__["letrecStar"]:
          erlExpr = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(remainingArgs);
          envs = Object(_env_utilities__WEBPACK_IMPORTED_MODULE_0__["addEnv"])(envs, reduceLetrec(envs, arg1, addResult));
          break;
        case _keyTokens__WEBPACK_IMPORTED_MODULE_2__["_do"]:
          return Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["forEach"])(evaluate(envs, addResult), tailList);
        case _keyTokens__WEBPACK_IMPORTED_MODULE_2__["_getCurrentEnv"]:
          return _index_utilities__WEBPACK_IMPORTED_MODULE_6__["fromJsObjects"].apply(null, envs.reverse());
        case _keyTokens__WEBPACK_IMPORTED_MODULE_2__["_getDefaultEnv"]:
          return Object(_index_utilities__WEBPACK_IMPORTED_MODULE_6__["fromJsObjects"])(envs[envs.length - 1]);
        case _keyTokens__WEBPACK_IMPORTED_MODULE_2__["_if"]:
          if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(_evaluate(arg1, envs, addResult))) {
            erlExpr = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(remainingArgs);
            break;
          }
          const otherwise = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["next"])(remainingArgs);
          if (Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(otherwise)) {
            erlExpr = _type_utilities__WEBPACK_IMPORTED_MODULE_5__["erlNil"];
          } else {
            erlExpr = otherwise;
          }
          break;
        case _keyTokens__WEBPACK_IMPORTED_MODULE_2__["fnStar"]:
          return createFn(tailList, envs);
        case _keyTokens__WEBPACK_IMPORTED_MODULE_2__["macroStar"]:
          return createMacro(tailList, envs);
        case _keyTokens__WEBPACK_IMPORTED_MODULE_2__["quote"]:
          return Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(tailList);
        case _keyTokens__WEBPACK_IMPORTED_MODULE_2__["quasiquote"]:
          return evalQuasiquotedExpr(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(tailList), envs, addResult);
        case _keyTokens__WEBPACK_IMPORTED_MODULE_2__["expandMacro"]:
          return _expandMacro(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(arg1), Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["cdr"])(arg1), envs, addResult);
        case _keyTokens__WEBPACK_IMPORTED_MODULE_2__["tryStar"]:
          try {
            return _evaluate(arg1, envs, addResult);
          } catch (_error) {
            let ex = _error;
            if (Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(remainingArgs)) {
              throw ex;
            } else {
              const remainingArgsArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["toPartialArray"])(3, Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(remainingArgs));
              const _catch = remainingArgsArray[0];
              const _ex = remainingArgsArray[1];
              const catchExpr = remainingArgsArray[2];
              if ((Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(_catch)) !== "catch*") {
                throw ex;
              }
              if (ex instanceof Error) {
                ex = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlString"])(Object(_js_utilities__WEBPACK_IMPORTED_MODULE_3__["circumpendQuotes"])(ex.message));
              }
              const newEnv = {};
              newEnv[Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(_ex)] = ex;
              return _evaluate(catchExpr, Object(_env_utilities__WEBPACK_IMPORTED_MODULE_0__["addEnv"])(envs, newEnv), addResult);
            }
          }
          break;
        default:
          const erlSymbol = head;
          erlExpr = tailList;
          const erlInvokable = _evaluate(erlSymbol, envs, addResult);
          if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlKeyword"])(erlInvokable)) {
            erlExpr = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlList"])(erlInvokable, tailList);
          } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlMacro"])(erlInvokable)) {
            erlExpr = _expandMacro(head, tailList, envs, addResult);
          } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlCorePureFunction"])(erlInvokable)) {
            const fn = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(erlInvokable);
            const erlArgs = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["map"])(evaluate(envs, addResult), erlExpr);
            return fn(erlArgs);
          } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlCoreEffectfulFunction"])(erlInvokable)) {
            const fn = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(erlInvokable);
            const erlArgs = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["map"])(evaluate(envs, addResult), erlExpr);
            addResult(fn(erlArgs));
            return _type_utilities__WEBPACK_IMPORTED_MODULE_5__["erlNil"];
          } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlUserPureFunction"])(erlInvokable)) {
            const jsValue = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(erlInvokable);
            const localEnvs = jsValue.localEnvs;
            const erlExpression = jsValue.erlExpression;
            const erlParameters = jsValue.erlParameters;
            const erlArgs = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["map"])(evaluate(envs, addResult), erlExpr);
            erlExpr = erlExpression;
            const newEnv = createLocalEnv(erlParameters, erlArgs);
            envs = Object(_env_utilities__WEBPACK_IMPORTED_MODULE_0__["addEnv"])(localEnvs, newEnv);
          } else {
            throw ""
              + (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(erlSymbol))
              + " does not evaluate to a function, macro, or keyword.";
          }
      }
    }
  }
};

const evaluate = function(envs, addResult) {
  return function(erlExpr) {
    if (erlExpr === _commentSignal__WEBPACK_IMPORTED_MODULE_4__["commentSignal"]) {
      return _commentSignal__WEBPACK_IMPORTED_MODULE_4__["commentSignal"];
    }
    return _evaluate(erlExpr, envs, addResult);
  };
};

const _expandMacro = function(erlMacroSymbol, erlArgs, envs, addResult) {
  const erlMacro = _evaluate(erlMacroSymbol, envs, addResult);
  const jsValue = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(erlMacro);
  const localEnvs = jsValue.localEnvs;
  const erlExpression = jsValue.erlExpression;
  const erlParameters = jsValue.erlParameters;
  const newEnv = createLocalEnv(erlParameters, erlArgs);
  const newEnvStack = Object(_env_utilities__WEBPACK_IMPORTED_MODULE_0__["addEnv"])(localEnvs, newEnv);
  return _evaluate(erlExpression, newEnvStack, addResult);
};

const ignorable = function(erlVal, envs, addResult) {
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlIgnore"])(erlVal)) {
    return true;
  }
  if (!Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlList"])(erlVal)) {
    return false;
  }
  const symbol = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(erlVal);
  if (!Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlSymbol"])(symbol)) {
    return false;
  }
  const jsString = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(symbol);
  if (jsString === 'ignore') {
    return true;
  }
  if (jsString === 'ignoreIfTrue') {
    return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(_evaluate(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["next"])(erlVal), envs, addResult));
  }
  if (jsString === 'ignoreUnlessTrue') {
    return !Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(_evaluate(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["next"])(erlVal), envs, addResult));
  }
  return false;
};

const reduceLet = function(envs, list, addResult) {
  const newEnv = {};
  const _envs = Object(_env_utilities__WEBPACK_IMPORTED_MODULE_0__["addEnv"])(envs, newEnv);
  while (!Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(list)) {
    const jsKey = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(list.value);
    list = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["recurse"])(list);
    const envValue = _evaluate(list.value, _envs, addResult);
    newEnv[jsKey] = envValue;
    list = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["recurse"])(list);
  }
  return newEnv;
};

const reduceLetrec = function(envs, list, addResult) {
  const newEnv = {};
  const _envs = Object(_env_utilities__WEBPACK_IMPORTED_MODULE_0__["addEnv"])(envs, newEnv);
  while (!Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(list)) {
    const jsKey = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(list.value);
    list = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["recurse"])(list);
    const _erlExpr = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(
      [  Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlSymbol"])("fix*"),
         Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["fromArray"])([Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlSymbol"])("fn*"),
         Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["fromArray"])([jsKey]),
         list.value])
      ]);
    const envValue = _evaluate(_erlExpr, _envs, addResult);
    newEnv[jsKey] = envValue;
    list = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["recurse"])(list);
  }
  return newEnv;
};

const isSpliceUnquote = function(erlValue) {
  return (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(erlValue)) === _keyTokens__WEBPACK_IMPORTED_MODULE_2__["spliceUnquote"];
};

const isSpliceUnquotedExpr = function(erlValue) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlList"])(erlValue) && isSpliceUnquote(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(erlValue));
};

const undefineValue = function(erlList, envs) {
  const jsKey = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(erlList));
  return Object(_env_utilities__WEBPACK_IMPORTED_MODULE_0__["unsetMainEnv"])(envs, jsKey);
};

const isUnquote = function(erlValue) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(erlValue) === _keyTokens__WEBPACK_IMPORTED_MODULE_2__["unquote"];
};

const isUnquotedExpr = function(erlValue) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlList"])(erlValue) && isUnquote(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(erlValue));
};




/***/ }),

/***/ "./src/lisp/getLispEnvironment.js":
/*!****************************************!*\
  !*** ./src/lisp/getLispEnvironment.js ***!
  \****************************************/
/*! exports provided: getLispEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLispEnvironment", function() { return getLispEnvironment; });
/* harmony import */ var _env0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env0 */ "./src/lisp/env0.js");
/* harmony import */ var _env1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env1 */ "./src/lisp/env1.js");
/* harmony import */ var _env2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./env2 */ "./src/lisp/env2.js");
/* harmony import */ var _env3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./env3 */ "./src/lisp/env3.js");
/* harmony import */ var _env4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./env4 */ "./src/lisp/env4.js");






const getLispEnvironment = function(config) {
  const display = config.display;
  const environment = {};
  const _config = {
    display: display,
    environment: environment
  };
  Object(_env0__WEBPACK_IMPORTED_MODULE_0__["getEnvironment"])(_config);
  Object(_env1__WEBPACK_IMPORTED_MODULE_1__["getEnvironment"])(_config);
  Object(_env2__WEBPACK_IMPORTED_MODULE_2__["getEnvironment"])(_config);
  Object(_env3__WEBPACK_IMPORTED_MODULE_3__["getEnvironment"])(_config);
  Object(_env4__WEBPACK_IMPORTED_MODULE_4__["getEnvironment"])(_config);
  return environment;
};




/***/ }),

/***/ "./src/lisp/index-utilities.js":
/*!*************************************!*\
  !*** ./src/lisp/index-utilities.js ***!
  \*************************************/
/*! exports provided: fromJsObjects, fromErlIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJsObjects", function() { return fromJsObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromErlIndex", function() { return fromErlIndex; });
/* harmony import */ var _type_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type-utilities */ "./src/lisp/type-utilities.js");
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-utilities */ "./src/lisp/js-utilities.js");



const __slice   = [].slice;
const __hasProp = {}.hasOwnProperty;

const fromErlIndex = function(erlIndex) {
  const result = {};
  const jsValue = erlIndex.jsValue;
  for (let key in jsValue) {
    if (!__hasProp.call(jsValue, key)) continue;
    const value = jsValue[key];
    if (Object(_js_utilities__WEBPACK_IMPORTED_MODULE_1__["isJsString"])(key)) {
      const newKey = (function() {
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

const fromJsObjects = function() {
  const jsObjects = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  const copy = {};
  const len = jsObjects.length;
  for (let i = 0;  i < len; i++) {
    const jsObject = jsObjects[i];
    for (let key in jsObject) {
      if (!__hasProp.call(jsObject, key)) continue;
      const val = jsObject[key];
      if (Object(_js_utilities__WEBPACK_IMPORTED_MODULE_1__["isJsString"])(key)) {
        copy[':' + key] = val;
      } else {
        copy[key] = val;
      }
    }
  }
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlIndex"])(copy);
};




/***/ }),

/***/ "./src/lisp/interpret.js":
/*!*******************************!*\
  !*** ./src/lisp/interpret.js ***!
  \*******************************/
/*! exports provided: interpret */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpret", function() { return interpret; });
/* harmony import */ var _js_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js-utilities */ "./src/lisp/js-utilities.js");
/* harmony import */ var _type_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-utilities */ "./src/lisp/type-utilities.js");
/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linked-list */ "./src/lisp/linked-list.js");
/* harmony import */ var _getLispEnvironment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getLispEnvironment */ "./src/lisp/getLispEnvironment.js");
/* harmony import */ var _process__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_process */ "./src/lisp/_process.js");
/* harmony import */ var _serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serialize */ "./src/lisp/serialize.js");
/* harmony import */ var _standard_fns_and_macros_lisp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./standard-fns-and-macros.lisp */ "./src/lisp/standard-fns-and-macros.lisp");
/* harmony import */ var _standard_fns_and_macros_lisp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_standard_fns_and_macros_lisp__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tokenizeAndParse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tokenizeAndParse */ "./src/lisp/tokenizeAndParse.js");









const __hasProp = {}.hasOwnProperty;

const _createErlString = function(jsString) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["createErlString"])(Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["circumpendQuotes"])(jsString));
};

const encapsulate = function(type) {
  return function(erlValue) {
    return {
      effect: {
        type: type
      },
      value: erlValue
    };
  };
};

const error = function(errorMessage) {
  return [encapsulate('error')("repl error: (" + errorMessage + ")")];
};

const flattenIfNecessary = function(effects) {
  let value;
  let result = effects;
  while (result.length === 1 && Array.isArray(value = result[0].value)) {
    result = flattenIfNecessary(value);
  }
  return result;
};

const _interpret = function(envs, jsString) {
  try {
    return _serialize(
      flattenIfNecessary(
        Object(_process__WEBPACK_IMPORTED_MODULE_4__["_process"])(_tokenizeAndParse__WEBPACK_IMPORTED_MODULE_7__["tokenizeAndParse"])(envs)(jsString)));
  } catch (_error) {
    return error(_error);
  }
};

const interpret = function(jsString, userJsArray) {
  if (userJsArray != null) {
    const userEnv = {
      '*ARGV*': Object(_linked_list__WEBPACK_IMPORTED_MODULE_2__["fromArray"])(userJsArray.map(_createErlString))
    };
    return _interpret([userEnv, environment], jsString);
  } else {
    return _interpret([environment], jsString);
  }
};

const _serialize = function(results) {
  return results.map(function(result) {
    const _result = {};
    for (let key in result) {
      if (!__hasProp.call(result, key)) continue;
      const value = result[key];
      if (key === 'effect') {
        _result[key] = value;
      } else {
        _result[key] = Object(_serialize__WEBPACK_IMPORTED_MODULE_5__["serialize"])(value);
      }
    }
    return _result;
  });
};

const environment = Object(_getLispEnvironment__WEBPACK_IMPORTED_MODULE_3__["getLispEnvironment"])({
  display: encapsulate('display')
});

interpret(_standard_fns_and_macros_lisp__WEBPACK_IMPORTED_MODULE_6___default.a);




/***/ }),

/***/ "./src/lisp/js-utilities.js":
/*!**********************************!*\
  !*** ./src/lisp/js-utilities.js ***!
  \**********************************/
/*! exports provided: circumpendQuotes, isJsNaN, isJsNumber, isJsString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circumpendQuotes", function() { return circumpendQuotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJsNaN", function() { return isJsNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJsNumber", function() { return isJsNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJsString", function() { return isJsString; });
const circumpendQuotes = function(jsString) {
  return '"' + jsString + '"';
};

const isJsNaN = function(val) {
  return isJsNumber(val) && val !== val;
};

const isJsNumber = function(val) {
  return {}.toString.call(val) === '[object Number]';
};

const isJsString = function(jsVal) {
  return Object.prototype.toString.call(jsVal) === '[object String]';
};




/***/ }),

/***/ "./src/lisp/keyTokens.js":
/*!*******************************!*\
  !*** ./src/lisp/keyTokens.js ***!
  \*******************************/
/*! exports provided: binaryGlyphTokens, deref, derefGlyph, catchStar, defBang, _do, _eval, _evalWithEnv, expandMacro, _false, fnStar, _getCurrentEnv, _getDefaultEnv, glyphTokens, _if, ignoreIfTrue, ignoreIfTrueGlyph, ignoreUnlessTrue, ignoreUnlessTrueGlyph, ignore, ignoreBang, ignoreBangGlyph, indexEnd, indexStart, keyTokens, isKeyword, letStar, letrecStar, listEnd, listStart, macroStar, macroTokens, nil, _process, quasiquote, quasiquoteGlyph, quote, quoteGlyph, splat, spliceUnquote, spliceUnquoteGlyph, _true, tryStar, undefBang, unquote, unquoteGlyph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binaryGlyphTokens", function() { return binaryGlyphTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deref", function() { return deref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "derefGlyph", function() { return derefGlyph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catchStar", function() { return catchStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defBang", function() { return defBang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_do", function() { return _do; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_eval", function() { return _eval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_evalWithEnv", function() { return _evalWithEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandMacro", function() { return expandMacro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_false", function() { return _false; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnStar", function() { return fnStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getCurrentEnv", function() { return _getCurrentEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getDefaultEnv", function() { return _getDefaultEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glyphTokens", function() { return glyphTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_if", function() { return _if; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreIfTrue", function() { return ignoreIfTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreIfTrueGlyph", function() { return ignoreIfTrueGlyph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreUnlessTrue", function() { return ignoreUnlessTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreUnlessTrueGlyph", function() { return ignoreUnlessTrueGlyph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignore", function() { return ignore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreBang", function() { return ignoreBang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreBangGlyph", function() { return ignoreBangGlyph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexEnd", function() { return indexEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexStart", function() { return indexStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyTokens", function() { return keyTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKeyword", function() { return isKeyword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "letStar", function() { return letStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "letrecStar", function() { return letrecStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listEnd", function() { return listEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listStart", function() { return listStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "macroStar", function() { return macroStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "macroTokens", function() { return macroTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nil", function() { return nil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_process", function() { return _process; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quasiquote", function() { return quasiquote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quasiquoteGlyph", function() { return quasiquoteGlyph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quote", function() { return quote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quoteGlyph", function() { return quoteGlyph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splat", function() { return splat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spliceUnquote", function() { return spliceUnquote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spliceUnquoteGlyph", function() { return spliceUnquoteGlyph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_true", function() { return _true; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryStar", function() { return tryStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undefBang", function() { return undefBang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquote", function() { return unquote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquoteGlyph", function() { return unquoteGlyph; });
const deref                 = 'deref';
const derefGlyph            = '@';
const catchStar             = 'catch*';
const defBang               = 'def!';
const _do                   = 'do';
const _eval                 = 'eval';
const _evalWithEnv          = 'eval-with-env';
const expandMacro           = 'expand-macro';
const _false                = 'false';
const fnStar                = 'fn*';
const _getCurrentEnv        = '-get-current-env-';
const _getDefaultEnv        = '-get-default-env-';
const _if                   = 'if';
const ignoreBang            = 'ignore!';
const ignoreBangGlyph       = '#!';
const ignoreIfTrue          = 'ignoreIfTrue';
const ignoreIfTrueGlyph     = '#-';
const ignoreUnlessTrue      = 'ignoreUnlessTrue';
const ignoreUnlessTrueGlyph = '#+';
const ignore                = 'ignore';
const indexEnd              = '}';
const indexStart            = '{';
const letStar               = 'let*';
const letrecStar            = 'letrec*';
const listEnd               = ')';
const listStart             = '(';
const macroStar             = 'macro*';
const nil                   = 'nil';
const _process              = '-process-';
const quasiquote            = 'quasiquote';
const quasiquoteGlyph       = '`';
const quote                 = 'quote';
const quoteGlyph            = '\'';
const splat                 = '&';
const spliceUnquote         = 'splice-unquote';
const spliceUnquoteGlyph    = '~@';
const _true                 = 'true';
const tryStar               = 'try*';
const undefBang             = 'undef!';
const unquote               = 'unquote';
const unquoteGlyph          = '~'

const keyTokens = [
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

const keywords = [
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

const macroTokens = [quasiquote, quote, spliceUnquote, unquote];

const glyphTokens = [
  derefGlyph,
  ignoreBangGlyph,
  quasiquoteGlyph,
  quoteGlyph,
  spliceUnquoteGlyph,
  unquoteGlyph
];

const binaryGlyphTokens = [ignoreIfTrueGlyph, ignoreUnlessTrueGlyph];

const __indexOf = [].indexOf || function(item) {
  for (let i = 0, l = this.length; i < l; i++) {
    if (i in this && this[i] === item) return i;
  } return -1;
};

const isKeyword = function(jsString) {
  return __indexOf.call(keywords, jsString) >= 0;
};




/***/ }),

/***/ "./src/lisp/linked-list.js":
/*!*********************************!*\
  !*** ./src/lisp/linked-list.js ***!
  \*********************************/
/*! exports provided: areEqual, car, cdr, concat, cons, copy, createErlList, drop, isEmpty, filter, forEach, fromArray, last, map, next, recurse, reduce, reduceBy2, reverse, take, toArray, toPartialArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areEqual", function() { return areEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "car", function() { return car; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cdr", function() { return cdr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cons", function() { return cons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErlList", function() { return createErlList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return drop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromArray", function() { return fromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "next", function() { return next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recurse", function() { return recurse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceBy2", function() { return reduceBy2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return reverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPartialArray", function() { return toPartialArray; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/lisp/types.js");


const erlListType = _types__WEBPACK_IMPORTED_MODULE_0__["erlTypes"][6];

const __slice = [].slice;

const car = function(erlList) {
  if (isEmpty(erlList)) {
    return EOL;
  } else {
    return erlList.value;
  }
};

const cdr = function(erlList) {
  if (isEmpty(erlList)) {
    return EOL;
  } else {
    return erlList.next;
  }
};

const areEqual = function(list0, list1, _areEqual) {
  while (!(isEmpty(list0) || isEmpty(list1))) {
    if (!_areEqual(list0.value, list1.value)) {
      return false;
    }
    list0 = cdr(list0);
    list1 = cdr(list1);
  }
  return isEmpty(list0) && isEmpty(list1);
};

const concat = function() {
  const erlLists = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  if (erlLists.length === 0) {
    return EOL;
  }
  let result = copy(erlLists[0]);
  let tail = lastTail(result);
  const remaining = erlLists.slice(1);
  const len = remaining.length;
  for (let i = 0; i < len; i++) {
    const erlList = remaining[i];
    const _copy = copy(erlList);
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

const cons = function(erlArgs) {
  return createErlList(car(erlArgs), next(erlArgs));
};

const copy = function(erlList) {
  return map((function(x) {
    return x;
  }), erlList);
};

const createErlList = function(value, nextNode) {
  if (value == null) {
    return EOL;
  }
  return createNode(value, nextNode != null ? nextNode : EOL);
};

const createNode = function(value, nextNode) {
  return {
    type: erlListType,
    value: value,
    next: nextNode
  };
};

const drop = function(nbr, erlList) {
  while (nbr !== 0) {
    erlList = cdr(erlList);
    nbr = nbr - 1;
  }
  return erlList;
};

const isEmpty = function(value) {
  return value === EOL;
};

const filter = function(predicate, list) {
  const _reduce = function(list, value) {
    if (predicate(value)) {
      return createErlList(value, list);
    } else {
      return list;
    }
  };
  return reverse(reduce(EOL, _reduce, list));
};

const forEach = function(fn, list) {
  let result = list;
  while (!isEmpty(list)) {
    result = fn(list.value);
    list = recurse(list);
  }
  return result;
};

const fromArray = function(array) {
  const _reduce = function(list, value) {
    return createErlList(value, list);
  };
  return array.reverse().reduce(_reduce, createErlList());
};

const last = function(erlList) {
  return car(lastTail(erlList));
};

const lastTail = function(erlList) {
  if (isEmpty(erlList)) {
    return erlList;
  }
  let prior = erlList;
  let current = cdr(erlList);
  while (!isEmpty(current)) {
    prior = cdr(prior);
    current = cdr(current);
  }
  return prior;
};

const map = function(fn, list) {
  const _reduce = function(list, value) {
    return createErlList(fn(value), list);
  };
  return reverse(reduce(EOL, _reduce, list));
};

const next = function(erlList) {
  return car(cdr(erlList));
};

const recurse = function(list) {
  if (isEmpty(list)) {
    return list;
  } else {
    return list.next;
  }
};

const reduce = function(seed, fn, list) {
  while (!isEmpty(list)) {
    seed = fn(seed, list.value);
    list = recurse(list);
  }
  return seed;
};

const reduceBy2 = function(seed, fn, list) {
  while (!isEmpty(list)) {
    const value0 = list.value;
    list = recurse(list);
    const value1 = list.value;
    seed = fn(seed, value0, value1);
    list = recurse(list);
  }
  return seed;
};

const reverse = function(list) {
  let result = EOL;
  while (!isEmpty(list)) {
    result = createErlList(list.value, result);
    list = list.next;
  }
  return result;
};

const take = function(nbr, erlList) {
  let result = createErlList();
  while (nbr !== 0) {
    const node = car(erlList);
    erlList = cdr(erlList);
    result = createErlList(node, result);
    nbr = nbr - 1;
  }
  return reverse(result);
};

const toArray = function(list) {
  const _reduce = function(jsArray, value) {
    jsArray.push(value);
    return jsArray;
  };
  return reduce([], _reduce, list);
};

const toPartialArray = function(nbr, list) {
  const result = [];
  while (nbr !== 0) {
    const node = car(list);
    list = cdr(list);
    result.push(node);
    nbr = nbr - 1;
  }
  result.push(list);
  return result;
};

const zip = function(seed, fn, list0, list1) {
  while (!(isEmpty(list0) || isEmpty(list1))) {
    const value0 = car(list0);
    list0 = cdr(list0);
    const value1 = car(list1);
    list1 = cdr(list1);
    seed = fn(seed, value0, value1);
  }
  return seed;
};

const _EOL = {};

const EOL = createNode(_EOL, _EOL);




/***/ }),

/***/ "./src/lisp/parse.js":
/*!***************************!*\
  !*** ./src/lisp/parse.js ***!
  \***************************/
/*! exports provided: parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony import */ var _keyTokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyTokens */ "./src/lisp/keyTokens.js");
/* harmony import */ var _commentSignal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentSignal */ "./src/lisp/commentSignal.js");
/* harmony import */ var _type_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-utilities */ "./src/lisp/type-utilities.js");
/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linked-list */ "./src/lisp/linked-list.js");








































const  __indexOf = [].indexOf || function(item) {
  for (let i = 0, l = this.length; i < l; i++) {
    if (i in this && this[i] === item) return i;
  } return -1;
};

const atomize = function(token) {
  const createErlValue = (function() {
    if (isNil(token)) {
      return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlNil"];
    } else if (isIgnore(token)) {
      return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlIgnore"];
    } else if (isBoolean(token)) {
      return function(token) {
        return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlBoolean"])(parseBoolean(token));
      };
    } else if (isString(token)) {
      return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlString"];
    } else if (isIdentifier(token)) {
      return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlIdentifier"];
    } else if (isInteger(token)) {
      return function(token) {
        return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlNumber"])(parseInt10(token));
      };
    } else if (isFloat(token)) {
      return function(token) {
        return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlNumber"])(parseFloat10(token));
      };
    } else {
      return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlSymbol"];
    }
  })();
  return createErlValue(token);
};

const isBoolean = function(token) {
  return token === _keyTokens__WEBPACK_IMPORTED_MODULE_0__["_false"] || token === _keyTokens__WEBPACK_IMPORTED_MODULE_0__["_true"];
};

const isFloat = function(token) {
  return /^(-|\+)?[0-9](_|\d)*\.(\d|(\d(_|\d)*\d))$/.test(token);
};

const isBinaryGlyph = function(token) {
  return __indexOf.call(_keyTokens__WEBPACK_IMPORTED_MODULE_0__["binaryGlyphTokens"], token) >= 0;
};

const isGlyph = function(token) {
  return __indexOf.call(_keyTokens__WEBPACK_IMPORTED_MODULE_0__["glyphTokens"], token) >= 0;
};

const isIgnore = function(token) {
  return token === _keyTokens__WEBPACK_IMPORTED_MODULE_0__["ignore"];
};

const isIndexStart = function(token) {
  return token === _keyTokens__WEBPACK_IMPORTED_MODULE_0__["indexStart"];
};

const isInteger = function(token) {
  return /^(0(?!\.)|((-|\+)?[1-9](_|\d)*$))/.test(token);
};

const isListStart = function(token) {
  return token === _keyTokens__WEBPACK_IMPORTED_MODULE_0__["listStart"];
};

const isNil = function(token) {
  return token === _keyTokens__WEBPACK_IMPORTED_MODULE_0__["nil"];
};

const _parse = function(token, tokens) {
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

const parse = function(tokens) {
  if (tokens === _commentSignal__WEBPACK_IMPORTED_MODULE_1__["commentSignal"]) {
    return _commentSignal__WEBPACK_IMPORTED_MODULE_1__["commentSignal"];
  }
  return _parse(tokens.shift(), tokens);
};

const parseBinaryGlyph = function(keyword, tokens) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlList"])(
    Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlSymbol"])(keyword),
    Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlList"])(
      parse(tokens),
      Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlList"])(parse(tokens))));
};

const parseBoolean = function(token) {
  return token === _keyTokens__WEBPACK_IMPORTED_MODULE_0__["_true"];
};

const parseFloat10 = function(token) {
  return parseFloat(stripUnderscores(token), 10);
};

const parseGlyph = function(keyword, tokens) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlList"])(
    Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlSymbol"])(keyword),
    Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlList"])(parse(tokens)));
};

const parseIndex = function(tokens) {
  let token;
  const jsIndex = {};
  let key = null;
  let isKeyStep = true;
  while ((token = tokens.shift()) !== _keyTokens__WEBPACK_IMPORTED_MODULE_0__["indexEnd"]) {
    if (isKeyStep) {
      key = _parse(token, tokens);
      isKeyStep = false;
    } else {
      jsIndex[Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(key)] = _parse(token, tokens);
      isKeyStep = true;
    }
  }
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlIndex"])(jsIndex);
};

const parseInt10 = function(token) {
  return parseInt(stripUnderscores(token), 10);
};

const parseList = function(tokens) {
  let token;
  let erlList = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlList"])();
  while ((token = tokens.shift()) !== _keyTokens__WEBPACK_IMPORTED_MODULE_0__["listEnd"]) {
    erlList = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlList"])(_parse(token, tokens), erlList);
  }
  return Object(_linked_list__WEBPACK_IMPORTED_MODULE_3__["reverse"])(erlList);
};

const startsWith = function(char) {
  return function(token) {
    return token[0] === char;
  };
};

const stripUnderscores = function(token) {
  return token.replace(/_/g, '');
};

const glyphIndex = {};

glyphIndex[_keyTokens__WEBPACK_IMPORTED_MODULE_0__["derefGlyph"]]         = _keyTokens__WEBPACK_IMPORTED_MODULE_0__["deref"];
glyphIndex[_keyTokens__WEBPACK_IMPORTED_MODULE_0__["ignoreBangGlyph"]]    = _keyTokens__WEBPACK_IMPORTED_MODULE_0__["ignoreBang"];
glyphIndex[_keyTokens__WEBPACK_IMPORTED_MODULE_0__["quasiquoteGlyph"]]    = _keyTokens__WEBPACK_IMPORTED_MODULE_0__["quasiquote"];
glyphIndex[_keyTokens__WEBPACK_IMPORTED_MODULE_0__["quoteGlyph"]]         = _keyTokens__WEBPACK_IMPORTED_MODULE_0__["quote"];
glyphIndex[_keyTokens__WEBPACK_IMPORTED_MODULE_0__["spliceUnquoteGlyph"]] = _keyTokens__WEBPACK_IMPORTED_MODULE_0__["spliceUnquote"];
glyphIndex[_keyTokens__WEBPACK_IMPORTED_MODULE_0__["unquoteGlyph"]]       = _keyTokens__WEBPACK_IMPORTED_MODULE_0__["unquote"];

const binaryGlyphIndex = {};

binaryGlyphIndex[_keyTokens__WEBPACK_IMPORTED_MODULE_0__["ignoreIfTrueGlyph"]]     = _keyTokens__WEBPACK_IMPORTED_MODULE_0__["ignoreIfTrue"];
binaryGlyphIndex[_keyTokens__WEBPACK_IMPORTED_MODULE_0__["ignoreUnlessTrueGlyph"]] = _keyTokens__WEBPACK_IMPORTED_MODULE_0__["ignoreUnlessTrue"];

const isString = startsWith('"');

const isIdentifier = startsWith(':');




/***/ }),

/***/ "./src/lisp/serialize.js":
/*!*******************************!*\
  !*** ./src/lisp/serialize.js ***!
  \*******************************/
/*! exports provided: serialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serialize", function() { return serialize; });
/* harmony import */ var _commentSignal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentSignal */ "./src/lisp/commentSignal.js");
/* harmony import */ var _type_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-utilities */ "./src/lisp/type-utilities.js");
/* harmony import */ var _keyTokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyTokens */ "./src/lisp/keyTokens.js");
/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linked-list */ "./src/lisp/linked-list.js");




















const __hasProp = {}.hasOwnProperty;

const adjoinErlValue = function(shouldBeReadable) {
  return function(memo, erlValue) {
    const serialized = serialize(erlValue, shouldBeReadable);
    if (memo.length === 0) {
      return serialized;
    } else {
      return "" + memo + " " + serialized;
    }
  };
};

const serialize = function(erlExpr, shouldBeReadable) {
  if (erlExpr === _commentSignal__WEBPACK_IMPORTED_MODULE_0__["commentSignal"]) {
    return _commentSignal__WEBPACK_IMPORTED_MODULE_0__["commentSignal"];
  }
  const _serialize = (function() {
    if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["isErlList"])(erlExpr)) {
      return serializeList;
    } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["isErlIgnore"])(erlExpr)) {
      return function(erlValue) {
        return ignoreLabel;
      };
    } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["isErlIndex"])(erlExpr)) {
      return serializeIndex;
    } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["isErlKeyword"])(erlExpr)) {
      return function(erlValue) {
        return keywordLabel;
      };
    } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["isErlCoreEffectfulFunction"])(erlExpr)) {
      return function(erlValue) {
        return coreEffectfulFunctionLabel;
      };
    } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["isErlCorePureFunction"])(erlExpr)) {
      return function(erlValue) {
        return corePureFunctionLabel;
      };
    } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["isErlUserPureFunction"])(erlExpr)) {
      return function(erlValue) {
        return userPureFunctionLabel;
      };
    } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["isErlMacro"])(erlExpr)) {
      return function(erlValue) {
        return macroLabel;
      };
    } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["isErlNil"])(erlExpr)) {
      return function(erlValue) {
        return nilLabel;
      };
    } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["isErlIdentifier"])(erlExpr)) {
      return serializeIdentifier;
    } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["isErlString"])(erlExpr)) {
      return serializeString;
    } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["isErlAtom"])(erlExpr)) {
      return serializeAtom;
    } else if (erlExpr.jsValue != null) {
      return _type_utilities__WEBPACK_IMPORTED_MODULE_1__["extractJsValue"];
    } else {
      return function(erlValue) {
        return erlValue;
      };
    }
  })();
  return _serialize(erlExpr, shouldBeReadable);
};

const serializeAtom = function(erlAtom, shouldBeReadable) {
  return "(atom " + (serialize(erlAtom.erlValue, shouldBeReadable)) + ")";
};

const serializeIdentifier = function(erlString, shouldBeReadable) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["extractJsValue"])(erlString);
};

const serializeIndex = function(erlIndex, shouldBeReadable) {
  const jsIndex = erlIndex.jsValue;
  let memo = '';
  for (let key in jsIndex) {
    if (!__hasProp.call(jsIndex, key)) continue;
    const erlValue = jsIndex[key];
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
  return _keyTokens__WEBPACK_IMPORTED_MODULE_2__["indexStart"] + memo + _keyTokens__WEBPACK_IMPORTED_MODULE_2__["indexEnd"];
};

const serializeList = function(erlList, shouldBeReadable) {
  const serializedList = Object(_linked_list__WEBPACK_IMPORTED_MODULE_3__["reduce"])(
    "",
    adjoinErlValue(shouldBeReadable),
    erlList);
  return _keyTokens__WEBPACK_IMPORTED_MODULE_2__["listStart"] + serializedList + _keyTokens__WEBPACK_IMPORTED_MODULE_2__["listEnd"];
};

const serializeString = function(erlString, shouldBeReadable) {
  const jsString = stripQuotes(Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["extractJsValue"])(erlString));
  if (!shouldBeReadable) {
    return jsString;
  }
  return jsString
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n');
};

const stripQuotes = function(jsString) {
  return jsString.slice(1, -1);
};

const coreEffectfulFunctionLabel = '<effectful core function>';
const corePureFunctionLabel      = '<core function>';
const ignoreLabel                = '<ignore>';
const keywordLabel               = '<keyword>';
const macroLabel                 = '<macro>';
const nilLabel                   = 'nil';
const userPureFunctionLabel      = '<function>';




/***/ }),

/***/ "./src/lisp/standard-fns-and-macros.lisp":
/*!***********************************************!*\
  !*** ./src/lisp/standard-fns-and-macros.lisp ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "(do\n  (def! fix* (\n    fn* (f) (\n      (fn* (x) (f (fn* (& ys) (apply (x x) ys))))\n      (fn* (x) (f (fn* (& ys) (apply (x x) ys)))))))\n\n  (def! memfix* (\n    fn* (f) (\n      let* (cache {}) (\n        (fn* (x cache) (\n          f\n            (fn* (z) (\n              if (contains? cache z)\n                (get cache z)\n                (let* (result ((fn* (y) ((x x cache) y)) z)) (\n                  do\n                    (set! cache z result)\n                    result))))\n            cache))\n        (fn* (x cache) (\n          f\n            (fn* (z) (\n              if (contains? cache z)\n                (get cache z)\n                (let* (result ((fn* (y) ((x x cache) y)) z)) (\n                  do\n                    (set! cache z result)\n                    result))))\n            cache))\n        cache))))\n\n  (def! _0 car)\n\n  (def! _1 (fn* (xs) (nth 1 xs)))\n\n  (def! _2 (fn* (xs) (nth 2 xs)))\n\n  (def! swap! (\n    macro* (atom & xs) (\n      if (empty? xs)\n        atom\n        `(let* (-atom- ~atom) (\n          do\n            (reset! -atom- (~(car xs) (deref -atom-) ~@(cdr xs)))\n            (deref -atom-))))))\n\n  (def! *gensym-counter* (atom 0))\n\n  (def! gensym (\n      fn* () (symbol (string \"G__\" (swap! *gensym-counter* incr)))))\n\n  (def! or (\n    macro* (& xs) (\n      if (empty? xs)\n        false\n        (let* (-query- (gensym))\n          `(let* (~-query- ~(car xs)) (\n            if ~-query-\n              ~-query-\n              (or ~@(cdr xs))))))))\n\n  (def! and (\n    macro* (& xs) (\n      if (empty? xs)\n        true\n        (let* (-query- (gensym))\n          `(let* (~-query- ~(car xs)) (\n            if ~-query-\n              (and ~@(cdr xs))\n              false))))))\n\n  (def! cond (\n    macro* (& xs) (\n      if (empty? xs)\n        nil\n        (if (empty? (cdr xs))\n          (throw \"`cond` requires an even number of forms.\")\n          (let* (-query- (gensym))\n            `(let* (~-query- ~(car xs)) (\n              if ~-query-\n                ~(_1 xs)\n                (cond ~@(cdr (cdr xs))))))))))\n\n  (def! loop (\n    macro* (form0 form1)\n      `(let* (loop (memfix* (fn* (loop) (fn* (~(_0 form0)) ~form1)))) (\n        loop ~(_1 form0)))))\n\n  (def! -> (\n    macro* (& xs) (\n      if (empty? xs)\n        nil\n        (let* (x (car xs) xs (cdr xs)) (\n          if (empty? xs)\n            x\n            (let* (form (car xs) forms (cdr xs)) (\n              if (empty? forms)\n                (if (list? form)\n                  (if (= (symbol \"fn*\") (car form))\n                    `(~form ~x)\n                    `(~(car form) ~x ~@(cdr form)))\n                  (list form x))\n                `(-> (-> ~x ~form) ~@forms))))))))\n\n  (def! ->> (\n    macro* (& xs) (\n      if (empty? xs)\n        nil\n        (let* (x (car xs) xs (cdr xs)) (\n          if (empty? xs)\n            x\n            (let* (form (car xs) forms (cdr xs)) (\n              if (empty? forms)\n                (if (list? form)\n                  (if (= (symbol \"fn*\") (car form))\n                    `(~form ~x)\n                    `(~@form ~x))\n                  (list form x))\n                `(->> (->> ~x ~form) ~@forms))))))))\n\n  (def! ->* (macro* (& xs) `(fn* (-x-) (-> -x- ~@xs))))\n\n  (def! ->>* (macro* (& xs) `(fn* (-x-) (->> -x- ~@xs))))\n\n  (def! not (fn* (x) (if x false true)))\n\n  (def! incr (->* (+ 1)))\n\n  (def! decr (->* (- 1)))\n\n  (def! zero? (->* (= 0)))\n\n  (def! identity (fn* (x) x))\n\n  (def! constant-fn (fn* (x) (fn* (y) x)))\n\n  (def! call-on (fn* (& xs) (fn* (fn) (apply fn xs))))\n\n  (def! step-into-list (\n    fn* (xs fn0 fn1) (\n      let* (x (car xs) -xs- (cdr xs)) (\n        if (empty? -xs-)\n          (fn1 x)\n          (fn0 x -xs-)))))\n\n  (def! apply-on (\n    fn* (& xs) (\n      step-into-list\n        xs\n        (fn* (arguments -xs-) (apply (car -xs-) arguments))\n        (fn* (arguments) (fn* (f) (apply f arguments))))))\n\n  (def! reduce (\n    fn* (f seed xs) (\n      if (empty? xs)\n        seed\n        (reduce f (f seed (car xs)) (cdr xs)))))\n\n  (def! filter (\n    fn* (predicate xs) (\n      reverse (\n        reduce\n          (fn* (memo x) (if (predicate x) (cons x memo) memo))\n          '()\n          xs))))\n\n  (def! map (\n    fn* (f xs) (\n      reverse (\n        reduce\n          (fn* (memo x) (cons (f x) memo))\n          '()\n          xs))))\n\n  (def! every? (\n    fn* (pred xs) (\n      if (empty? xs)\n        true\n        (if (pred (car xs)) (every? pred (cdr xs)) false))))\n\n  (def! some? (\n    fn* (pred xs) (\n      if (empty? xs)\n        false\n        (if (pred (car xs)) true (some? pred (cdr xs))))))\n\n  (def! letmemrec* (\n    macro* (alias expr)\n      `(let* (\n        ~(car alias)\n        (memfix* (fn* (~(car alias)) ~(_1 alias))))\n          ~expr)))\n\n  (def! skip (\n    fn* (nbr xs) (\n      letrec* (\n        -skip-\n        (fn* (ys) (\n          let* (nbr (car ys) xs (_1 ys)) (\n            cond\n              (= 0 nbr) xs\n              (= 1 nbr) (cdr xs)\n              \"default\" (-skip- (list (decr nbr) (cdr xs))))))) (\n          -skip- (list nbr xs)))))\n\n  (def! invokable? (fn* (x) (or (function? x) (macro? x))))\n\n  (def! . (\n    macro* (x key & xs) (\n      if (empty? xs)\n        `(get ~x ~key)\n        `((get ~x ~key) ~@xs))))\n\n  (def! .. (\n    fn* (lo hi) (\n      letrec* (\n        -..-\n        (fn* (xs) (\n          let* (lo (_0 xs) hi (_1 xs) -list- (_2 xs)) (\n            if (= lo hi)\n              (cons hi -list-)\n              (-..- (list lo (decr hi) (cons hi -list-))))))) (\n          -..- (list lo hi '())))))\n\n  (def! defrec! (\n    macro* (fn-name fn-body)\n      `(def! ~fn-name (letrec* (~fn-name ~fn-body) ~fn-name))))\n\n  (def! for* (\n    macro* (loop-parameters body)\n      `(loop\n         ~(_0 loop-parameters)\n         (if ~(_1 loop-parameters)\n           (do ~body (loop ~(_2 loop-parameters)))\n           nil))))\n\n  (def! for-each (\n    fn* (f xs) (\n      reduce (fn* (memo x) (do (f x) memo)) nil xs)))\n\n  (def! n-times (\n    fn* (n f) (\n      loop\n        (i 0)\n        (if (= i n)\n          nil\n          (do (f i) (loop (+ i 1)))))))\n\n  (def! tap (fn* (f x) (do (f x) x)))\n\n  (def! with-side-effect (fn* (thunk x) (do (thunk) x)))\n\n  (def! thunk (macro* (form) `(fn* () ~form)))\n\n  (def! call (macro* (f & xs) `(~f ~@xs)))\n\n  (def! apply (macro* (f xs) `(eval (cons ~f ~xs))))\n\n  (def! eval-string (fn* (erlString) (eval (parse erlString))))\n)\n"

/***/ }),

/***/ "./src/lisp/tokenize.js":
/*!******************************!*\
  !*** ./src/lisp/tokenize.js ***!
  \******************************/
/*! exports provided: tokenize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenize", function() { return tokenize; });
/* harmony import */ var _commentSignal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentSignal */ "./src/lisp/commentSignal.js");


const createTokenRegex = function() {
  return /[\s,]*(~@|\#\+|\#\-|\#\!|[\[\](){}'`~@^]|"(?:\\.|[^\\"])*"|;.*|[^\s\[\](){}'"`,;]*)/g;
};

const isComment = function(match) {
  return match[0] === ';';
};

const isMeaningful = function(match) {
  return match !== '';
};

const tokenize = function(sourceCode) {
  let match;
  const tokenRegex = createTokenRegex();
  const result = [];
  while (isMeaningful(match = tokenRegex.exec(sourceCode)[1])) {
    if (isComment(match)) {
      continue;
    }
    result.push(match);
  }
  if (result.length === 0) {
    return _commentSignal__WEBPACK_IMPORTED_MODULE_0__["commentSignal"];
  } else {
    return result;
  }
};




/***/ }),

/***/ "./src/lisp/tokenizeAndParse.js":
/*!**************************************!*\
  !*** ./src/lisp/tokenizeAndParse.js ***!
  \**************************************/
/*! exports provided: tokenizeAndParse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenizeAndParse", function() { return tokenizeAndParse; });
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse */ "./src/lisp/parse.js");
/* harmony import */ var _tokenize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenize */ "./src/lisp/tokenize.js");



const tokenizeAndParse = function(sourceCode) {
  return Object(_parse__WEBPACK_IMPORTED_MODULE_0__["parse"])(Object(_tokenize__WEBPACK_IMPORTED_MODULE_1__["tokenize"])(sourceCode));
};


/***/ }),

/***/ "./src/lisp/type-utilities.js":
/*!************************************!*\
  !*** ./src/lisp/type-utilities.js ***!
  \************************************/
/*! exports provided: createErlAtom, createErlBoolean, createErlCoreEffectfulFunction, createErlCorePureFunction, createErlIdentifier, createErlIgnore, createErlIndex, createErlKeyword, createErlList, createErlMacro, createErlNil, createErlNumber, createErlSpecialForm, createErlString, createErlSymbol, createErlUserPureFunction, extractJsValue, isErlAtom, isErlBoolean, isErlCoreEffectfulFunction, isErlCorePureFunction, erlFalse, isErlFalse, isErlIdentifier, erlIgnore, isErlIgnore, isErlIndex, isErlKeyword, isErlList, isErlMacro, erlNil, isErlNil, isErlNumber, isErlSpecialForm, isErlString, isErlSymbol, erlTrue, isErlTrue, isErlUserPureFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErlAtom", function() { return createErlAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErlBoolean", function() { return createErlBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErlCoreEffectfulFunction", function() { return createErlCoreEffectfulFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErlCorePureFunction", function() { return createErlCorePureFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErlIdentifier", function() { return createErlIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErlIgnore", function() { return createErlIgnore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErlIndex", function() { return createErlIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErlKeyword", function() { return createErlKeyword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErlMacro", function() { return createErlMacro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErlNil", function() { return createErlNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErlNumber", function() { return createErlNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErlSpecialForm", function() { return createErlSpecialForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErlString", function() { return createErlString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErlSymbol", function() { return createErlSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErlUserPureFunction", function() { return createErlUserPureFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractJsValue", function() { return extractJsValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErlAtom", function() { return isErlAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErlBoolean", function() { return isErlBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErlCoreEffectfulFunction", function() { return isErlCoreEffectfulFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErlCorePureFunction", function() { return isErlCorePureFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erlFalse", function() { return erlFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErlFalse", function() { return isErlFalse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErlIdentifier", function() { return isErlIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erlIgnore", function() { return erlIgnore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErlIgnore", function() { return isErlIgnore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErlIndex", function() { return isErlIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErlKeyword", function() { return isErlKeyword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErlList", function() { return isErlList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErlMacro", function() { return isErlMacro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erlNil", function() { return erlNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErlNil", function() { return isErlNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErlNumber", function() { return isErlNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErlSpecialForm", function() { return isErlSpecialForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErlString", function() { return isErlString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErlSymbol", function() { return isErlSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erlTrue", function() { return erlTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErlTrue", function() { return isErlTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErlUserPureFunction", function() { return isErlUserPureFunction; });
/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list */ "./src/lisp/linked-list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createErlList", function() { return _linked_list__WEBPACK_IMPORTED_MODULE_0__["createErlList"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/lisp/types.js");




const createErlAtom = function(erlValue) {
  return {
    erlValue: erlValue,
    type: _types__WEBPACK_IMPORTED_MODULE_1__["erlAtomType"]
  };
};

const createErlBoolean = function(jsBoolean) {
  if (jsBoolean) {
    return erlTrue;
  } else {
    return erlFalse;
  }
};

const createErlIgnore = function() {
  return erlIgnore;
};

const createErlNil = function() {
  return erlNil;
};

const createErlValue = function(jsValue, erlType) {
  return {
    jsValue: jsValue,
    type: erlType
  };
};

const createFactoryAndPredicate = function(erlType) {
  const factory = function(jsValue) {
    return createErlValue(jsValue, erlType);
  };
  const predicate = function(erlValue) {
    return erlValue.type === erlType;
  };
  return [factory, predicate];
};

const createPredicate = function(constant) {
  return function(value) {
    return value === constant;
  };
};

const extractJsValue = function(erlValue) {
  return erlValue.jsValue;
};

const _erlTypes = _types__WEBPACK_IMPORTED_MODULE_1__["erlTypes"].map(createFactoryAndPredicate);

const _createErlBoolean              = _erlTypes[0][0];
const isErlBoolean                   = _erlTypes[0][1];
const createErlCoreEffectfulFunction = _erlTypes[1][0];
const isErlCoreEffectfulFunction     = _erlTypes[1][1];
const createErlCorePureFunction      = _erlTypes[2][0];
const isErlCorePureFunction          = _erlTypes[2][1];
const createErlIdentifier            = _erlTypes[3][0];
const isErlIdentifier                = _erlTypes[3][1];
const createErlIndex                 = _erlTypes[4][0];
const isErlIndex                     = _erlTypes[4][1];
const createErlKeyword               = _erlTypes[5][0];
const isErlKeyword                   = _erlTypes[5][1];
const _createErlList                 = _erlTypes[6][0];
const isErlList                      = _erlTypes[6][1];
const createErlMacro                 = _erlTypes[7][0];
const isErlMacro                     = _erlTypes[7][1];
const createErlNumber                = _erlTypes[8][0];
const isErlNumber                    = _erlTypes[8][1];
const createErlSpecialForm           = _erlTypes[9][0];
const isErlSpecialForm               = _erlTypes[9][1];
const createErlString                = _erlTypes[10][0];
const isErlString                    = _erlTypes[10][1];
const createErlSymbol                = _erlTypes[11][0];
const isErlSymbol                    = _erlTypes[11][1];
const _createErlUnit                 = _erlTypes[12][0];
const _isErlUnit                     = _erlTypes[12][1];
const createErlUserPureFunction      = _erlTypes[13][0];
const isErlUserPureFunction          = _erlTypes[13][1];
const _createErlAtom                 = _erlTypes[14][0];
const isErlAtom                      = _erlTypes[14][1];

const erlIgnore = _createErlUnit(null);

const erlNil = _createErlUnit(null);

const erlBooleans = [false, true].map(_createErlBoolean);

const erlFalse = erlBooleans[0];
const erlTrue  = erlBooleans[1];

const predicates = [erlFalse, erlIgnore, erlNil, erlTrue].map(createPredicate);

const isErlFalse  = predicates[0];
const isErlIgnore = predicates[1];
const isErlNil    = predicates[2];
const isErlTrue   = predicates[3];




/***/ }),

/***/ "./src/lisp/types.js":
/*!***************************!*\
  !*** ./src/lisp/types.js ***!
  \***************************/
/*! exports provided: erlAtomType, erlBooleanType, erlCoreEffectfulFunctionType, erlCorePureFunctionType, erlIdentifierType, erlIndexType, erlKeywordType, erlListType, erlMacroType, erlNumberType, erlSpecialFormType, erlStringType, erlSymbolType, erlTypes, erlUnitType, erlUserPureFunctionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erlAtomType", function() { return erlAtomType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erlBooleanType", function() { return erlBooleanType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erlCoreEffectfulFunctionType", function() { return erlCoreEffectfulFunctionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erlCorePureFunctionType", function() { return erlCorePureFunctionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erlIdentifierType", function() { return erlIdentifierType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erlIndexType", function() { return erlIndexType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erlKeywordType", function() { return erlKeywordType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erlListType", function() { return erlListType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erlMacroType", function() { return erlMacroType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erlNumberType", function() { return erlNumberType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erlSpecialFormType", function() { return erlSpecialFormType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erlStringType", function() { return erlStringType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erlSymbolType", function() { return erlSymbolType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erlTypes", function() { return erlTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erlUnitType", function() { return erlUnitType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erlUserPureFunctionType", function() { return erlUserPureFunctionType; });
const erlBooleanType               = 'erlBooleanType';
const erlCoreEffectfulFunctionType = 'erlCoreEffectfulFunctionType';
const erlCorePureFunctionType      = 'erlCorePureFunctionType';
const erlIdentifierType            = 'erlIdentifierType';
const erlIndexType                 = 'erlIndexType';
const erlKeywordType               = 'erlKeywordType';
const erlListType                  = 'erlListType';
const erlMacroType                 = 'erlMacroType';
const erlNumberType                = 'erlNumberType';
const erlSpecialFormType           = 'erlSpecialFormType';
const erlStringType                = 'erlStringType';
const erlSymbolType                = 'erlSymbolType';
const erlUnitType                  = 'erlUnitType';
const erlUserPureFunctionType      = 'erlUserPureFunctionType';
const erlAtomType                  = 'erlAtomType';

const erlTypes = [
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




/***/ }),

/***/ "./src/ribosome/diff.js":
/*!******************************!*\
  !*** ./src/ribosome/diff.js ***!
  \******************************/
/*! exports provided: diff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diff", function() { return diff; });
function diffArray(value1, value0, index) {
  if (!Array.isArray(value0)) {
    return { tree: index, commands: [['replace', value1]], index: index + 1 };
  }

  let count = 0;
  const length1 = value1.length;
  const length0 = value0.length;
  const minLength = Math.min(length1, length0);

  if (minLength > 1) {
    for (let j = 0; j < minLength; j++) {
      if (value1[j] !== value0[j]) {
        count++;
      }
    }

    if (count === minLength) {
      return { tree: index, commands: [['replace', value1]], index: index + 1 };
    }
  }

  const tree = [];
  let commands = [];

  for (let i = 0; i < minLength; i++) {
    if (value1[i] !== value0[i]) {
      const _patch = _diff(value1[i], value0[i], index);
      if (_patch.commands.length > 0) {
        tree.push({ index: i, value: _patch.tree });
        commands = commands.concat(_patch.commands);
        index = index + _patch.commands.length;
      }
    }
  }

  for (let i = 0; i < length1; i++) {
    tree.push({ index: i, value: index });
    commands.push(['insertAtEnd', value1[i]]);
    index++;
  }

  const removals = [];

  for (let i = 0; i < length0; i++) {
    removals.unshift({ index: i, value: index });
    commands.push(['remove']);
    index++;
  }

  return { tree: tree.concat(removals), commands: commands, index: index };
}

function diffObject(value1, value0, index) {
  if (!isObject(value0)) {
    return {
      tree: index,
      commands: [['replace', value1]],
      index: index + 1
    };
  }

  let keyCount = 0;
  let diffCount = 0;

  for (let key in value0) {
    if (!value0.hasOwnProperty(key)) continue;
    keyCount++;
    if (!value1.hasOwnProperty(key) || value1[key] !== value0[key]) {
      diffCount++;
    }
  }

  if (keyCount > 1 && keyCount === diffCount) {
    return { tree: index, commands: [['replace', value1]], index: index + 1 };
  }

  const tree = [];
  let commands = [];

  for (let key in value1) {
    if (!value1.hasOwnProperty(key)) continue;
    if (value0.hasOwnProperty(key)) {
      if (value1[key] !== value0[key]) {
        const _patch = _diff(value1[key], value0[key], index);
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

  for (let key in value0) {
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

const diff = function(value1, value0) {
  const patch = _diff(value1, value0, 0);
  return { value: patch.tree, commands: patch.commands };
};

function isObject(value) {
  return {}.toString.call(value) === '[object Object]';
}




/***/ }),

/***/ "./src/ribosome/elements.js":
/*!**********************************!*\
  !*** ./src/ribosome/elements.js ***!
  \**********************************/
/*! exports provided: A, BUTTON, CANVAS, CODE, DIV, FOOTER, FORM, H1, H2, H3, H4, H5, H6, HEADER, IMG, LABEL, LI, LINK, NAV, NOSCRIPT, OPTGROUP, OPTION, OUTPUT, P, PARAM, PRE, SCRIPT, SECTION, SELECT, SOURCE, SPAN, STYLE, TEXTAREA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON", function() { return BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANVAS", function() { return CANVAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CODE", function() { return CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIV", function() { return DIV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOOTER", function() { return FOOTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM", function() { return FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return H2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return H3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H4", function() { return H4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H5", function() { return H5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H6", function() { return H6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER", function() { return HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMG", function() { return IMG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABEL", function() { return LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LI", function() { return LI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINK", function() { return LINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV", function() { return NAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOSCRIPT", function() { return NOSCRIPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTGROUP", function() { return OPTGROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTION", function() { return OPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OUTPUT", function() { return OUTPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARAM", function() { return PARAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRE", function() { return PRE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCRIPT", function() { return SCRIPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECTION", function() { return SECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT", function() { return SELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOURCE", function() { return SOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPAN", function() { return SPAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLE", function() { return STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTAREA", function() { return TEXTAREA; });
function createElement(tag) {
  return function (config) {
    const element = { tag: tag };

    if (config != null) { // isObject

      for (let key in config) {
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
      const args = [].slice.call(arguments, 1);

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

const tags = {
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

const elementFactories = {};

for (let tagName in tags) {
  elementFactories[tagName] = createElement(tagName);
}

const A = elementFactories.A;
const BUTTON = elementFactories.BUTTON;
const CANVAS = elementFactories.CANVAS;
const CODE = elementFactories.CODE;
const DIV = elementFactories.DIV;
const FOOTER = elementFactories.FOOTER;
const FORM = elementFactories.FORM;
const H1 = elementFactories.H1;
const H2 = elementFactories.H2;
const H3 = elementFactories.H3;
const H4 = elementFactories.H4;
const H5 = elementFactories.H5;
const H6 = elementFactories.H6;
const HEADER = elementFactories.HEADER;
const IMG = elementFactories.IMG;
const LABEL = elementFactories.LABEL;
const LI = elementFactories.LI;
const LINK = elementFactories.LINK;
const NAV = elementFactories.NAV;
const NOSCRIPT = elementFactories.NOSCRIPT;
const OPTGROUP = elementFactories.OPTGROUP;
const OPTION = elementFactories.OPTION;
const OUTPUT = elementFactories.OUTPUT;
const P = elementFactories.P;
const PARAM = elementFactories.PARAM;
const PRE = elementFactories.PRE;
const SCRIPT = elementFactories.SCRIPT;
const SECTION = elementFactories.SECTION;
const SELECT = elementFactories.SELECT;
const SOURCE = elementFactories.SOURCE;
const SPAN = elementFactories.SPAN;
const STYLE = elementFactories.STYLE;
const TEXTAREA = elementFactories.TEXTAREA;


/***/ }),

/***/ "./src/ribosome/interpreter.js":
/*!*************************************!*\
  !*** ./src/ribosome/interpreter.js ***!
  \*************************************/
/*! exports provided: createAndAttachElement, modifyElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAndAttachElement", function() { return createAndAttachElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyElement", function() { return modifyElement; });
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
  for (let i = 0; i < elements.length; i++) {
    createAndAttachElement(node, elements[i]);
  }
}

function createElement(config) {
  if (isString(config)) {
    return config;
  }
  const node = document.createElement(config.tag);
  if (config.id != null) {
    node.id = config.id;
  }
  if (config.classes != null) {
    for (let klass in config.classes) {
      node.classList.add(klass);
    }
  }
  if (config.attribs != null) {
    for (let attribKey in config.attribs) {
      if (attribKey !== 'style') {
        node.setAttribute(attribKey, config.attribs[attribKey]);
      }
    }
  }
  if (config.style != null) {
    for (let styleKey in config.style) {
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
  let htmlCollection;
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
  for (let i = 0; i < tree.length; i++) {
    const key = tree[i].index;
    const continuation = tree[i].value;

    switch (key) {
      case 'id':
        const command = commands[continuation];
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
        for (let styleIndex = 0; styleIndex < continuation.length; styleIndex++) {
          const style = continuation[styleIndex].index;
          const command = commands[continuation[styleIndex].value];
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
        for (let attribIndex = 0; attribIndex < continuation.length; attribIndex++) {
          const attrib = continuation[attribIndex].index;
          const command = commands[continuation[attribIndex].value];
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
          const command = commands[0];
          switch (command[0]) {
            case 'delete':
              for (let _class in command[1]) {
                node.classList.remove(_class);
              }
              break;
            case 'setAtKey':
              for (let _class in command[1]) {
                node.classList.add(_class);
              }
              break;
          }
        } else {
          for (let classIndex = 0; classIndex < continuation.length; classIndex++) {
            const _class = continuation[classIndex].index;
            const command = commands[continuation[classIndex].value];
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
          const command = commands[continuation]
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
          for (let childIndex = 0; childIndex < continuation.length; childIndex++) {
            const child = continuation[childIndex].index;
            const childContinuation = continuation[childIndex].value;
            if (isCommandIndex(childContinuation)) {
              const command = commands[childContinuation]
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
  const childCount = node.childNodes.length;
  for (let i = childCount - 1; i >= 0; i--) {
    node.removeChild(node.childNodes[i]);
  }
}

function removeNode(node) {
  node.parentNode.removeChild(node);
}




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2dldEFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2dldEtleUNob3JkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbnRyb2wvY2hhcnMvaW50ZXJwcmV0S2V5ZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2tleUNvZGVDaGFydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29udHJvbC9jaGFycy9rZXlJZGVudGlmaWVyQ2hhcnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbnRyb2wvZ2V0Vmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29udHJvbC9pbml0aWFsaXplQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9kZXRlY3RDc3NTY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvaW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy9mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy90ZXJtaW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy92aWV3cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvZ2V0SW5pdGlhbE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL21vZGVscy90eXBlcy9jcmVhdGVGcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvdHlwZXMvY3JlYXRlUHJvbXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL21vZGVscy90eXBlcy9jcmVhdGVUZXJtaW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvdHlwZXMvY3JlYXRlVmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL3N1YnNjcmliZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvdmlldy9pbml0aWFsaXplVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L3JlY3JlYXRlQ29uc29sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZUVybGtvbmlnTGlzcENvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvX3Byb2Nlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvY29tbWVudFNpZ25hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9lbnYtdXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2VudjAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvZW52MS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9lbnYyLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2VudjMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvZW52NC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9ldmFsdWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9nZXRMaXNwRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvaW5kZXgtdXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2ludGVycHJldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9qcy11dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3Ava2V5VG9rZW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2xpbmtlZC1saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3BhcnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3NlcmlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9zdGFuZGFyZC1mbnMtYW5kLW1hY3Jvcy5saXNwIiwid2VicGFjazovLy8uL3NyYy9saXNwL3Rva2VuaXplLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3Rva2VuaXplQW5kUGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvdHlwZS11dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JpYm9zb21lL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JpYm9zb21lL2VsZW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9yaWJvc29tZS9pbnRlcnByZXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixJQUFJLEtBQUs7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRXFCOzs7Ozs7Ozs7Ozs7O0FDcEdyQjtBQUFBO0FBQUE7QUFBQTtBQUFnRDtBQUNZOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsNkJBQTZCLHdFQUFtQjtBQUNoRCxHQUFHO0FBQ0g7QUFDQSw2QkFBNkIsNERBQWE7QUFDMUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFdUI7Ozs7Ozs7Ozs7Ozs7QUNsRHZCO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ0k7O0FBRTVDO0FBQ0EsU0FBUyw0REFBUyxDQUFDLGdFQUFXO0FBQzlCOztBQUU0Qjs7Ozs7Ozs7Ozs7OztBQ1A1QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7QUN2SHpCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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OEIsaUNBQWlDO0FBQy9EOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUTtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUtFIiwiZmlsZSI6ImVybGtvbmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5pdGlhbGl6ZUVybGtvbmlnTGlzcENvbnNvbGUuanNcIik7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiY29uc3QgYSA9ICdhJztcbmNvbnN0IGUgPSAnZSc7XG5jb25zdCBoID0gJ2gnO1xuY29uc3QgbCA9ICdsJztcbmNvbnN0IHUgPSAndSc7XG5jb25zdCB3ID0gJ3cnO1xuXG5jb25zdCBBID0gJ0EnO1xuY29uc3QgRSA9ICdFJztcbmNvbnN0IEggPSAnSCc7XG5jb25zdCBMID0gJ0wnO1xuY29uc3QgVSA9ICdVJztcbmNvbnN0IFcgPSAnVyc7XG5cbmNvbnN0IGJhY2tzcGFjZSA9ICdCYWNrc3BhY2UnO1xuY29uc3QgX2RlbGV0ZSAgID0gJ0RlbGV0ZSc7XG5jb25zdCBkb3duICAgICAgPSAnQXJyb3dEb3duJztcbmNvbnN0IGVudGVyICAgICA9ICdFbnRlcic7XG5jb25zdCBsZWZ0ICAgICAgPSAnQXJyb3dMZWZ0JztcbmNvbnN0IHJpZ2h0ICAgICA9ICdBcnJvd1JpZ2h0JztcbmNvbnN0IHNwYWNlICAgICA9ICcgJztcbmNvbnN0IHNwYWNlYmFyICA9ICdTcGFjZWJhcic7XG5jb25zdCB0YWIgICAgICAgPSAnVGFiJztcbmNvbnN0IHVwICAgICAgICA9ICdBcnJvd1VwJztcblxuY29uc3QgY2hhcmFjdGVycyA9IFtcbiAgc3BhY2UsXG4gICdgJywgJzEnLCAnMicsICAnMycsICc0JywgICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMCcsICctJywgJz0nLFxuICAnficsICchJywgJ0AnLCAgJyMnLCAnJCcsICAnJScsICdeJywgJyYnLCAnKicsICcoJywgJyknLCAnXycsICcrJyxcbiAgJ2EnLCAnYicsICdjJywgICdkJywgJ2UnLCAgJ2YnLCAnZycsICdoJywgJ2knLCAnaicsICdrJywgJ2wnLCAnbScsXG4gICduJywgJ28nLCAncCcsICAncScsICdyJywgICdzJywgJ3QnLCAndScsICd2JywgJ3cnLCAneCcsICd5JywgJ3onLFxuICAnQScsICdCJywgJ0MnLCAgJ0QnLCAnRScsICAnRicsICdHJywgJ0gnLCAnSScsICdKJywgJ0snLCAnTCcsICdNJyxcbiAgJ04nLCAnTycsICdQJywgICdRJywgJ1InLCAgJ1MnLCAnVCcsICdVJywgJ1YnLCAnVycsICdYJywgJ1knLCAnWicsXG4gICdbJywgJ10nLCAnXFxcXCcsICc7JywgJ1xcJycsICcsJywgJy4nLCAnLycsXG4gICd7JywgJ30nLCAnfCcsICAnOicsICdcIicsICAnPCcsICc+JywgJz8nXG5dO1xuXG5mdW5jdGlvbiBnZXRBY3Rpb24oa2V5Q2hvcmQpIHtcbiAgY29uc3QgdmFsdWUgPSBrZXlDaG9yZC52YWx1ZTtcblxuICBpZiAoa2V5Q2hvcmQuY3RybEtleSkge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgYTpcbiAgICAgIGNhc2UgQTpcbiAgICAgICAgcmV0dXJuIHdyYXAoJ21vdmVDdXJzb3JUb1N0YXJ0Jyk7XG4gICAgICBjYXNlIGU6XG4gICAgICBjYXNlIEU6XG4gICAgICAgIHJldHVybiB3cmFwKCdtb3ZlQ3Vyc29yVG9FbmQnKTtcbiAgICAgIGNhc2UgaDpcbiAgICAgIGNhc2UgSDpcbiAgICAgICAgcmV0dXJuIHdyYXAoJ2RlbGV0ZUxlZnRDaGFyJyk7XG4gICAgICBjYXNlIGw6XG4gICAgICBjYXNlIEw6XG4gICAgICAgIHJldHVybiB3cmFwKCdjbGVhcicpO1xuICAgICAgY2FzZSB1OlxuICAgICAgY2FzZSBVOlxuICAgICAgICByZXR1cm4gd3JhcCgnZGVsZXRlUHJlQ3Vyc29yJyk7XG4gICAgICBjYXNlIHc6XG4gICAgICBjYXNlIFc6XG4gICAgICAgIHJldHVybiB3cmFwKCdkZWxldGVXb3JkJyk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gd3JhcCgnbm9PcCcpO1xuICAgIH1cbiAgfVxuXG4gIHN3aXRjaCAodmFsdWUpIHtcbiAgICBjYXNlIGVudGVyOlxuICAgICAgcmV0dXJuIHdyYXAoJ3N1Ym1pdCcpO1xuICAgIGNhc2UgYmFja3NwYWNlOlxuICAgICAgcmV0dXJuIHdyYXAoJ2RlbGV0ZUxlZnRDaGFyJyk7XG4gICAgY2FzZSBsZWZ0OlxuICAgICAgcmV0dXJuIHdyYXAoJ21vdmVDdXJzb3JMZWZ0Jyk7XG4gICAgY2FzZSByaWdodDpcbiAgICAgIHJldHVybiB3cmFwKCdtb3ZlQ3Vyc29yUmlnaHQnKTtcbiAgICBjYXNlIHVwOlxuICAgICAgcmV0dXJuIHdyYXAoJ3Jld2luZCcpO1xuICAgIGNhc2UgZG93bjpcbiAgICAgIHJldHVybiB3cmFwKCdmYXN0Rm9yd2FyZCcpO1xuICAgIGNhc2UgX2RlbGV0ZTpcbiAgICAgIHJldHVybiB3cmFwKCdkZWxldGVSaWdodENoYXInKTtcbiAgICBjYXNlIHRhYjpcbiAgICAgIHJldHVybiB3cmFwKCdjb21wbGV0ZVdvcmQnKTtcbiAgICBjYXNlIHNwYWNlOlxuICAgIGNhc2Ugc3BhY2ViYXI6XG4gICAgICByZXR1cm4geyBuYW1lOiAnYWRkQ2hhcicsIGNoYXI6ICcgJyB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gaXNDaGFyYWN0ZXIodmFsdWUpXG4gICAgICAgID8geyBuYW1lOiAnYWRkQ2hhcicsIGNoYXI6IHZhbHVlIH1cbiAgICAgICAgOiB3cmFwKCdub09wJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNDaGFyYWN0ZXIodmFsdWUpIHtcbiAgcmV0dXJuIGNoYXJhY3RlcnMuaW5kZXhPZih2YWx1ZSkgPj0gMDtcbn1cblxuZnVuY3Rpb24gd3JhcChhY3Rpb25OYW1lKSB7XG4gIHJldHVybiB7IG5hbWU6IGFjdGlvbk5hbWUgfTtcbn1cblxuZXhwb3J0IHsgZ2V0QWN0aW9uIH07XG4iLCJpbXBvcnQgeyBrZXlDb2RlQ2hhcnRzIH0gZnJvbSAnLi9rZXlDb2RlQ2hhcnRzJztcbmltcG9ydCB7IGtleUlkZW50aWZpZXJDaGFydHMgfSBmcm9tICcuL2tleUlkZW50aWZpZXJDaGFydHMnO1xuXG5mdW5jdGlvbiBnZXRFdmVudFByb3h5KGtpbmQsIGV2ZW50KSB7XG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGV2ZW50W2tpbmRdLFxuICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgIGN0cmxLZXk6IGV2ZW50LmN0cmxLZXksXG4gICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5XG4gIH07XG59O1xuXG5mdW5jdGlvbiBpZGVudGl0eShldmVudCkge1xuICByZXR1cm4gZXZlbnQ7XG59XG5cbmZ1bmN0aW9uIGdldEtleUNob3JkKGV2ZW50KSB7XG4gIGxldCBub3JtYWxpemU7XG4gIGxldCBwcm9wZXJ0eTtcblxuICBpZiAoZXZlbnQua2V5ICE9IG51bGwpIHtcbiAgICBwcm9wZXJ0eSA9ICdrZXknO1xuICAgIG5vcm1hbGl6ZSA9IGlkZW50aXR5O1xuICB9IGVsc2UgaWYgKGV2ZW50LmtleUlkZW50aWZpZXIgIT0gbnVsbCkge1xuICAgIHByb3BlcnR5ID0gJ2tleUlkZW50aWZpZXInO1xuICAgIG5vcm1hbGl6ZSA9IF9nZXRLZXlDaG9yZChrZXlJZGVudGlmaWVyQ2hhcnRzKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9wZXJ0eSA9ICdrZXlDb2RlJztcbiAgICBub3JtYWxpemUgPSBfZ2V0S2V5Q2hvcmQoa2V5Q29kZUNoYXJ0cyk7XG4gIH1cblxuICByZXR1cm4gbm9ybWFsaXplKGdldEV2ZW50UHJveHkocHJvcGVydHksIGV2ZW50KSk7XG59XG5cbmZ1bmN0aW9uIF9nZXRLZXlDaG9yZChjb252ZXJzaW9uQ2hhcnRzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGdldEtleUNob3JkVmFsdWUoY29udmVyc2lvbkNoYXJ0cywgZXZlbnQudmFsdWUsIGV2ZW50LnNoaWZ0S2V5KSxcbiAgICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgICAgY3RybEtleTogZXZlbnQuY3RybEtleSxcbiAgICAgIHNoaWZ0S2V5OiBldmVudC5zaGlmdEtleVxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEtleUNob3JkVmFsdWUoY29udmVyc2lvbkNoYXJ0cywgdmFsdWUsIHNoaWZ0S2V5KSB7XG4gIGNvbnN0IGtleSA9IHNoaWZ0S2V5ID8gJ3dpdGhTaGlmdCcgOiAnd2l0aG91dFNoaWZ0JztcbiAgcmV0dXJuIGNvbnZlcnNpb25DaGFydHNba2V5XVt2YWx1ZV07XG59XG5cbmV4cG9ydCB7IGdldEtleUNob3JkIH07XG4iLCJpbXBvcnQgeyBnZXRBY3Rpb24gfSBmcm9tICcuL2dldEFjdGlvbic7XG5pbXBvcnQgeyBnZXRLZXlDaG9yZCB9IGZyb20gJy4vZ2V0S2V5Q2hvcmQnO1xuXG5mdW5jdGlvbiBpbnRlcnByZXRLZXlkb3duKGV2ZW50KSB7XG4gIHJldHVybiBnZXRBY3Rpb24oZ2V0S2V5Q2hvcmQoZXZlbnQpKTtcbn1cblxuZXhwb3J0IHsgaW50ZXJwcmV0S2V5ZG93biB9O1xuIiwiY29uc3Qga2V5Q29kZUNoYXJ0cyA9IHtcbiAgd2l0aFNoaWZ0OiB7XG4gICAgOCAgOiAnQmFja3NwYWNlJyxcbiAgICA5ICA6ICdUYWInLFxuICAgIDEzIDogJ0VudGVyJyxcbiAgICAzMiA6ICcgJyxcbiAgICAzNyA6ICdBcnJvd0xlZnQnLFxuICAgIDM4IDogJ0Fycm93VXAnLFxuICAgIDM5IDogJ0Fycm93UmlnaHQnLFxuICAgIDQwIDogJ0Fycm93RG93bicsXG4gICAgNDYgOiAnRGVsZXRlJyxcbiAgICA0OCA6ICcpJyxcbiAgICA0OSA6ICchJyxcbiAgICA1MCA6ICdAJyxcbiAgICA1MSA6ICcjJyxcbiAgICA1MiA6ICckJyxcbiAgICA1MyA6ICclJyxcbiAgICA1NCA6ICdeJyxcbiAgICA1NSA6ICcmJyxcbiAgICA1NiA6ICcqJyxcbiAgICA1NyA6ICcoJyxcbiAgICA1OSA6ICc6JyxcbiAgICA2MSA6ICcrJyxcbiAgICA2NSA6ICdBJyxcbiAgICA2NiA6ICdCJyxcbiAgICA2NyA6ICdDJyxcbiAgICA2OCA6ICdEJyxcbiAgICA2OSA6ICdFJyxcbiAgICA3MCA6ICdGJyxcbiAgICA3MSA6ICdHJyxcbiAgICA3MiA6ICdIJyxcbiAgICA3MyA6ICdJJyxcbiAgICA3NCA6ICdKJyxcbiAgICA3NSA6ICdLJyxcbiAgICA3NiA6ICdMJyxcbiAgICA3NyA6ICdNJyxcbiAgICA3OCA6ICdOJyxcbiAgICA3OSA6ICdPJyxcbiAgICA4MCA6ICdQJyxcbiAgICA4MSA6ICdRJyxcbiAgICA4MiA6ICdSJyxcbiAgICA4MyA6ICdTJyxcbiAgICA4NCA6ICdUJyxcbiAgICA4NSA6ICdVJyxcbiAgICA4NiA6ICdWJyxcbiAgICA4NyA6ICdXJyxcbiAgICA4OCA6ICdYJyxcbiAgICA4OSA6ICdZJyxcbiAgICA5MCA6ICdaJyxcbiAgICAxNzM6ICdfJyxcbiAgICAxODg6ICc8JyxcbiAgICAxOTA6ICc+JyxcbiAgICAxOTE6ICc/JyxcbiAgICAxOTI6ICd+JyxcbiAgICAyMTk6ICd7JyxcbiAgICAyMjA6ICd8JyxcbiAgICAyMjE6ICd9JyxcbiAgICAyMjI6ICdcIidcbiAgfSxcbiAgd2l0aG91dFNoaWZ0OiB7XG4gICAgOCAgOiAnQmFja3NwYWNlJyxcbiAgICA5ICA6ICdUYWInLFxuICAgIDEzIDogJ0VudGVyJyxcbiAgICAzMiA6ICcgJyxcbiAgICAzNyA6ICdBcnJvd0xlZnQnLFxuICAgIDM4IDogJ0Fycm93VXAnLFxuICAgIDM5IDogJ0Fycm93UmlnaHQnLFxuICAgIDQwIDogJ0Fycm93RG93bicsXG4gICAgNDYgOiAnRGVsZXRlJyxcbiAgICA0ODogJzAnLFxuICAgIDQ5OiAnMScsXG4gICAgNTA6ICcyJyxcbiAgICA1MTogJzMnLFxuICAgIDUyOiAnNCcsXG4gICAgNTM6ICc1JyxcbiAgICA1NDogJzYnLFxuICAgIDU1OiAnNycsXG4gICAgNTY6ICc4JyxcbiAgICA1NzogJzknLFxuICAgIDU5OiAnOycsXG4gICAgNjE6ICc9JyxcbiAgICA2NTogJ2EnLFxuICAgIDY2OiAnYicsXG4gICAgNjc6ICdjJyxcbiAgICA2ODogJ2QnLFxuICAgIDY5OiAnZScsXG4gICAgNzA6ICdmJyxcbiAgICA3MTogJ2cnLFxuICAgIDcyOiAnaCcsXG4gICAgNzM6ICdpJyxcbiAgICA3NDogJ2onLFxuICAgIDc1OiAnaycsXG4gICAgNzY6ICdsJyxcbiAgICA3NzogJ20nLFxuICAgIDc4OiAnbicsXG4gICAgNzk6ICdvJyxcbiAgICA4MDogJ3AnLFxuICAgIDgxOiAncScsXG4gICAgODI6ICdyJyxcbiAgICA4MzogJ3MnLFxuICAgIDg0OiAndCcsXG4gICAgODU6ICd1JyxcbiAgICA4NjogJ3YnLFxuICAgIDg3OiAndycsXG4gICAgODg6ICd4JyxcbiAgICA4OTogJ3knLFxuICAgIDkwOiAneicsXG4gICAgMTczOiAnLScsXG4gICAgMTg4OiAnLCcsXG4gICAgMTkwOiAnLicsXG4gICAgMTkxOiAnLycsXG4gICAgMTkyOiAnYCcsXG4gICAgMjE5OiAnWycsXG4gICAgMjIwOiAnXFxcXCcsXG4gICAgMjIxOiAnXScsXG4gICAgMjIyOiAnXFwnJ1xuICB9XG59O1xuXG5leHBvcnQgeyBrZXlDb2RlQ2hhcnRzIH07XG4iLCJjb25zdCBrZXlJZGVudGlmaWVyQ2hhcnRzID0ge1xuICB3aXRob3V0U2hpZnQ6IHtcbiAgICAnVSswMDQxJzogJ2EnLFxuICAgICdVKzAwNDInOiAnYicsXG4gICAgJ1UrMDA0Myc6ICdjJyxcbiAgICAnVSswMDQ0JzogJ2QnLFxuICAgICdVKzAwNDUnOiAnZScsXG4gICAgJ1UrMDA0Nic6ICdmJyxcbiAgICAnVSswMDQ3JzogJ2cnLFxuICAgICdVKzAwNDgnOiAnaCcsXG4gICAgJ1UrMDA0OSc6ICdpJyxcbiAgICAnVSswMDRBJzogJ2onLFxuICAgICdVKzAwNEInOiAnaycsXG4gICAgJ1UrMDA0Qyc6ICdsJyxcbiAgICAnVSswMDREJzogJ20nLFxuICAgICdVKzAwNEUnOiAnbicsXG4gICAgJ1UrMDA0Ric6ICdvJyxcbiAgICAnVSswMDUwJzogJ3AnLFxuICAgICdVKzAwNTEnOiAncScsXG4gICAgJ1UrMDA1Mic6ICdyJyxcbiAgICAnVSswMDUzJzogJ3MnLFxuICAgICdVKzAwNTQnOiAndCcsXG4gICAgJ1UrMDA1NSc6ICd1JyxcbiAgICAnVSswMDU2JzogJ3YnLFxuICAgICdVKzAwNTcnOiAndycsXG4gICAgJ1UrMDA1OCc6ICd4JyxcbiAgICAnVSswMDU5JzogJ3knLFxuICAgICdVKzAwNUEnOiAneicsXG4gICAgJ1UrMDAzMCc6ICcwJyxcbiAgICAnVSswMDMxJzogJzEnLFxuICAgICdVKzAwMzInOiAnMicsXG4gICAgJ1UrMDAzMyc6ICczJyxcbiAgICAnVSswMDM0JzogJzQnLFxuICAgICdVKzAwMzUnOiAnNScsXG4gICAgJ1UrMDAzNic6ICc2JyxcbiAgICAnVSswMDM3JzogJzcnLFxuICAgICdVKzAwMzgnOiAnOCcsXG4gICAgJ1UrMDAzOSc6ICc5JyxcbiAgICAnVSswMEMwJzogJ2AnLFxuICAgICdVKzAwQkQnOiAnLScsXG4gICAgJ1UrMDBCQic6ICc9JyxcbiAgICAnVSswMERCJzogJ1snLFxuICAgICdVKzAwREQnOiAnXScsXG4gICAgJ1UrMDBEQyc6ICdcXFxcJyxcbiAgICAnVSswMEJBJzogJzsnLFxuICAgICdVKzAwREUnOiAnXFwnJyxcbiAgICAnVSswMEJDJzogJywnLFxuICAgICdVKzAwQkUnOiAnLicsXG4gICAgJ1UrMDBCRic6ICcvJyxcbiAgICAnVSswMDIwJzogJyAnLFxuICAgICdVKzAwMDgnOiAnQmFja3NwYWNlJyxcbiAgICAnVSswMDc1JzogJ0RlbGV0ZScsXG4gICAgJ0Rvd24nICA6ICdBcnJvd0Rvd24nLFxuICAgICdFbnRlcicgOiAnRW50ZXInLFxuICAgICdMZWZ0JyAgOiAnQXJyb3dMZWZ0JyxcbiAgICAnUmlnaHQnIDogJ0Fycm93UmlnaHQnLFxuICAgICdVKzAwMjAnOiAnICcsXG4gICAgJ1UrMDAwOSc6ICdUYWInLFxuICAgICdVcCcgICAgOiAnQXJyb3dVcCdcbiAgfSxcbiAgd2l0aFNoaWZ0OiB7XG4gICAgJ1UrMDA0MSc6ICdBJyxcbiAgICAnVSswMDQyJzogJ0InLFxuICAgICdVKzAwNDMnOiAnQycsXG4gICAgJ1UrMDA0NCc6ICdEJyxcbiAgICAnVSswMDQ1JzogJ0UnLFxuICAgICdVKzAwNDYnOiAnRicsXG4gICAgJ1UrMDA0Nyc6ICdHJyxcbiAgICAnVSswMDQ4JzogJ0gnLFxuICAgICdVKzAwNDknOiAnSScsXG4gICAgJ1UrMDA0QSc6ICdKJyxcbiAgICAnVSswMDRCJzogJ0snLFxuICAgICdVKzAwNEMnOiAnTCcsXG4gICAgJ1UrMDA0RCc6ICdNJyxcbiAgICAnVSswMDRFJzogJ04nLFxuICAgICdVKzAwNEYnOiAnTycsXG4gICAgJ1UrMDA1MCc6ICdQJyxcbiAgICAnVSswMDUxJzogJ1EnLFxuICAgICdVKzAwNTInOiAnUicsXG4gICAgJ1UrMDA1Myc6ICdTJyxcbiAgICAnVSswMDU0JzogJ1QnLFxuICAgICdVKzAwNTUnOiAnVScsXG4gICAgJ1UrMDA1Nic6ICdWJyxcbiAgICAnVSswMDU3JzogJ1cnLFxuICAgICdVKzAwNTgnOiAnWCcsXG4gICAgJ1UrMDA1OSc6ICdZJyxcbiAgICAnVSswMDVBJzogJ1onLFxuICAgICdVKzAwMzAnOiAnKScsXG4gICAgJ1UrMDAzMSc6ICchJyxcbiAgICAnVSswMDMyJzogJ0AnLFxuICAgICdVKzAwMzMnOiAnIycsXG4gICAgJ1UrMDAzNCc6ICckJyxcbiAgICAnVSswMDM1JzogJyUnLFxuICAgICdVKzAwMzYnOiAnXicsXG4gICAgJ1UrMDAzNyc6ICcmJyxcbiAgICAnVSswMDM4JzogJyonLFxuICAgICdVKzAwMzknOiAnKCcsXG4gICAgJ1UrMDBDMCc6ICd+JyxcbiAgICAnVSswMEJEJzogJ18nLFxuICAgICdVKzAwQkInOiAnKycsXG4gICAgJ1UrMDBEQic6ICd7JyxcbiAgICAnVSswMEREJzogJ30nLFxuICAgICdVKzAwREMnOiAnfCcsXG4gICAgJ1UrMDBCQSc6ICc6JyxcbiAgICAnVSswMERFJzogJ1wiJyxcbiAgICAnVSswMEJDJzogJzwnLFxuICAgICdVKzAwQkUnOiAnPicsXG4gICAgJ1UrMDBCRic6ICc/JyxcbiAgICAnVSswMDIwJzogJyAnLFxuICAgICdVKzAwMDgnOiAnQmFja3NwYWNlJyxcbiAgICAnVSswMDc1JzogJ0RlbGV0ZScsXG4gICAgJ0Rvd24nICA6ICdBcnJvd0Rvd24nLFxuICAgICdFbnRlcicgOiAnRW50ZXInLFxuICAgICdMZWZ0JyAgOiAnQXJyb3dMZWZ0JyxcbiAgICAnUmlnaHQnIDogJ0Fycm93UmlnaHQnLFxuICAgICdVKzAwMjAnOiAnICcsXG4gICAgJ1UrMDAwOSc6ICdUYWInLFxuICAgICdVcCcgICAgOiAnQXJyb3dVcCdcbiAgfVxufTtcblxuZXhwb3J0IHsga2V5SWRlbnRpZmllckNoYXJ0cyB9O1xuIiwiaW1wb3J0IHsgVmlld3BvcnQgfSBmcm9tICcuLi9tb2RlbHMvYWN0aW9ucy92aWV3cG9ydCc7XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0KGFjdGlvbiwgY29uZmlnKSB7XG4gIGNvbnN0IGNvbW1hbmQgPSBhY3Rpb24ubmFtZTtcbiAgY29uc3Qgdmlld3BvcnQgPSBjb25maWcudmlld3BvcnQ7XG4gIHN3aXRjaCAoY29tbWFuZCkge1xuICAgIGNhc2UgJ2FkZENoYXInOlxuICAgICAgcmV0dXJuIFZpZXdwb3J0LmFkZENoYXIodmlld3BvcnQsIGFjdGlvbi5jaGFyKTtcbiAgICBjYXNlICdjb21wbGV0ZVdvcmQnOlxuICAgICAgcmV0dXJuIFZpZXdwb3J0LmNvbXBsZXRlV29yZCh2aWV3cG9ydCwgY29uZmlnLmdldENhbmRpZGF0ZXMpO1xuICAgIGNhc2UgJ25vT3AnOlxuICAgICAgcmV0dXJuIHZpZXdwb3J0O1xuICAgIGNhc2UgJ3N1Ym1pdCc6XG4gICAgICByZXR1cm4gVmlld3BvcnQuc3VibWl0KHZpZXdwb3J0LCBjb25maWcudHJhbnNmb3JtKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFZpZXdwb3J0W2NvbW1hbmRdKHZpZXdwb3J0KTtcbiAgfVxufVxuXG5leHBvcnQgeyBnZXRWaWV3cG9ydCB9O1xuIiwiaW1wb3J0IHsgZ2V0Vmlld3BvcnQgfSBmcm9tICcuL2dldFZpZXdwb3J0JztcbmltcG9ydCB7IGludGVycHJldEtleWRvd24gfSBmcm9tICcuL2NoYXJzL2ludGVycHJldEtleWRvd24nO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplQ29udHJvbChzdWJzY3JpYmUsIHJlbmRlciwgY29uZmlnKSB7XG4gIGNvbnN0IGhhbmRsZUV2ZW50ID0gZnVuY3Rpb24gKGdldEFjdGlvbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJlbmRlcihnZXRWaWV3cG9ydChnZXRBY3Rpb24oZXZlbnQpLCBjb25maWcpKTtcbiAgICB9O1xuICB9XG5cbiAgc3Vic2NyaWJlKCdrZXlkb3duJywgaGFuZGxlRXZlbnQoaW50ZXJwcmV0S2V5ZG93bikpO1xufVxuXG5leHBvcnQgeyBpbml0aWFsaXplQ29udHJvbCB9O1xuIiwiY29uc3QgX25vZGVJZCAgICAgPSAnI2VybC1jc3Mtc2Nyb2xsYmFyLXRlc3QtZGl2JztcbmNvbnN0IF9wcmVmaXhlcyAgID0gWyctd2Via2l0LScsICctbW96LScsICctby0nLCAnLW1zLSddO1xuY29uc3QgX3BzZXVkbyAgICAgPSAnOjonO1xuY29uc3QgX3Njcm9sbGJhciAgPSAnc2Nyb2xsYmFyJztcbmNvbnN0IF93aWR0aDEwcHggID0gJ3t3aWR0aDoxMHB4O30nO1xuXG5mdW5jdGlvbiBjcmVhdGVSdWxlKHByZWZpeCkge1xuICByZXR1cm4gX25vZGVJZCArIF9wc2V1ZG8gKyBwcmVmaXggKyBfc2Nyb2xsYmFyICsgX3dpZHRoMTBweDtcbn1cblxuZnVuY3Rpb24gX2RldGVjdENzc1Njcm9sbGJhcihzdHlsZVJ1bGUpIHtcbiAgY29uc3QgYm9keSA9IGdldEJvZHkoKTtcbiAgY29uc3QgZG9jRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9kZS5pZCA9ICdlcmwtY3NzLXNjcm9sbGJhci10ZXN0LWRpdic7XG4gIGRpdi5hcHBlbmRDaGlsZChub2RlKTtcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbiAgc3R5bGUuaWQgPSAnZXJsLWNzcy1zY3JvbGxiYXItdGVzdC1zdHlsZSc7XG4gIGNvbnN0IG5vbmNlTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGxiYXItbm9uY2UnKTtcbiAgY29uc3Qgbm9uY2UgPSBub25jZU5vZGUuZGF0YXNldFsnc2Nyb2xsYmFyTm9uY2UnXTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKTtcblxuICAoYm9keS5mYWtlID8gYm9keSA6IGRpdikuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHN0eWxlUnVsZTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHlsZVJ1bGUpKTtcbiAgfVxuXG4gIGRpdi5pZCA9ICdlcmwtY3NzLXNjcm9sbC10ZXN0JztcblxuICBpZiAoYm9keS5mYWtlKSB7XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIGNvbnN0IGRvY092ZXJmbG93ID0gZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdztcbiAgICBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgZG9jRWxlbWVudC5hcHBlbmRDaGlsZChib2R5KTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IGhhc0Nzc1Njcm9sbGJhcihub2RlLCAzMCk7XG5cbiAgaWYgKGJvZHkuZmFrZSkge1xuICAgIGJvZHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChib2R5KTtcbiAgICBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gZG9jT3ZlcmZsb3c7XG4gICAgZG9jRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gIH0gZWxzZSB7XG4gICAgZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGRldGVjdENzc1Njcm9sbGJhcigpIHtcbiAgY29uc3QgY3NzU2Nyb2xsYmFyID1cbiAgICBfbm9kZUlkICsgJ3tvdmVyZmxvdzpzY3JvbGw7d2lkdGg6NDBweDtoZWlnaHQ6NDBweDt9JyArXG4gICAgX3ByZWZpeGVzLm1hcChjcmVhdGVSdWxlKS5qb2luKCcnKSArXG4gICAgY3JlYXRlUnVsZSgnJyk7XG5cbiAgcmV0dXJuIF9kZXRlY3RDc3NTY3JvbGxiYXIoY3NzU2Nyb2xsYmFyKTtcbn1cblxuZnVuY3Rpb24gZ2V0Qm9keSgpIHtcbiAgbGV0IF9ib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICBpZiAoIV9ib2R5KSB7XG4gICAgY29uc3QgaXNTdmcgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2Zyc7XG4gICAgX2JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGlzU3ZnID8gJ3N2ZycgOiAnYm9keScpO1xuICAgIF9ib2R5LmZha2UgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF9ib2R5O1xufVxuXG5mdW5jdGlvbiBoYXNDc3NTY3JvbGxiYXIobm9kZSwgZXhwZWN0ZWRXaWR0aCkge1xuICByZXR1cm4gJ3Njcm9sbFdpZHRoJyBpbiBub2RlICYmIG5vZGUuc2Nyb2xsV2lkdGggPT09IGV4cGVjdGVkV2lkdGg7XG59XG5cbmV4cG9ydCB7IGRldGVjdENzc1Njcm9sbGJhciB9O1xuIiwiaW1wb3J0IHsgZGV0ZWN0Q3NzU2Nyb2xsYmFyIH0gIGZyb20gJy4vZGV0ZWN0Q3NzU2Nyb2xsYmFyJztcbmltcG9ydCB7IGdldEluaXRpYWxNb2RlbCB9ICAgICBmcm9tICcuL21vZGVscy9nZXRJbml0aWFsTW9kZWwnO1xuaW1wb3J0IHsgRVJMS0lORyB9ICAgICAgICAgICAgIGZyb20gJy4vdmlldy9yZWNyZWF0ZUNvbnNvbGUnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUNvbnRyb2wgfSAgIGZyb20gJy4vY29udHJvbC9pbml0aWFsaXplQ29udHJvbCc7XG5pbXBvcnQgeyBpbml0aWFsaXplVmlldyB9ICAgICAgZnJvbSAnLi92aWV3L2luaXRpYWxpemVWaWV3JztcbmltcG9ydCB7IHJlbmRlciB9ICAgICAgICAgICAgICBmcm9tICcuL3JlbmRlcic7XG5pbXBvcnQgeyBzY3JvbGwgfSAgICAgICAgICAgICAgZnJvbSAnLi92aWV3L3Njcm9sbCc7XG5pbXBvcnQgeyBzdWJzY3JpYmUgfSAgICAgICAgICAgZnJvbSAnLi9zdWJzY3JpYmUnO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplKGNvbmZpZykge1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLm5vZGVJZCk7XG4gIGNvbnN0IGluaXRpYWxNb2RlbCA9IGdldEluaXRpYWxNb2RlbCgpO1xuICBjb25zdCBwcm9tcHRMYWJlbCA9IGNvbmZpZy5wcm9tcHRMYWJlbDtcbiAgY29uc3QgbGFiZWxzID0geyBwcm9tcHRMYWJlbDogcHJvbXB0TGFiZWwgfTtcbiAgY29uc3Qgdmlld01vZGVsID0gRVJMS0lORyhsYWJlbHMsIGluaXRpYWxNb2RlbCk7XG5cbiAgaW5pdGlhbGl6ZVZpZXcocm9vdCwgdmlld01vZGVsKTtcblxuICBjb25zdCByb290Q2hpbGQgPSByb290LmNoaWxkTm9kZXNbMF07XG5cbiAgY29uc3QgY29udHJvbENvbmZpZyA9IHtcbiAgICBnZXRDYW5kaWRhdGVzOiBjb25maWcuZ2V0Q2FuZGlkYXRlcyxcbiAgICBwcm9tcHRMYWJlbDogcHJvbXB0TGFiZWwsXG4gICAgdHJhbnNmb3JtOiBjb25maWcudHJhbnNmb3JtLFxuICAgIHZpZXdwb3J0OiBpbml0aWFsTW9kZWxcbiAgfTtcblxuICBjb25zdCBjc3NTY3JvbGxiYXJEZXRlY3RlZCA9IGRldGVjdENzc1Njcm9sbGJhcigpO1xuXG4gIHNldFNjcm9sbGJhclZpc2liaWxpdHkoY3NzU2Nyb2xsYmFyRGV0ZWN0ZWQpO1xuXG4gIGNvbnN0IF9zY3JvbGwgPSBzY3JvbGwoY3NzU2Nyb2xsYmFyRGV0ZWN0ZWQpO1xuXG4gIGluaXRpYWxpemVDb250cm9sKFxuICAgIHN1YnNjcmliZSxcbiAgICByZW5kZXIodmlld01vZGVsLCByb290Q2hpbGQsIGNvbnRyb2xDb25maWcsIF9zY3JvbGwpLFxuICAgIGNvbnRyb2xDb25maWcpO1xufVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxiYXJWaXNpYmlsaXR5KGNzc1Njcm9sbGJhckRldGVjdGVkKSB7XG4gIGlmICghY3NzU2Nyb2xsYmFyRGV0ZWN0ZWQpIHtcbiAgICBjb25zdCB2aWV3cG9ydCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VybC12aWV3cG9ydCcpWzBdXG4gICAgdmlld3BvcnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgfVxufVxuXG5cbmV4cG9ydCB7IGluaXRpYWxpemUgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUZyYW1lIH0gZnJvbSAnLi4vdHlwZXMvY3JlYXRlRnJhbWUnO1xuXG5mdW5jdGlvbiBjbGVhcihmcmFtZSwgdGVybWluYWwpIHtcbiAgcmV0dXJuIGNyZWF0ZUZyYW1lKFxuICAgIDAsXG4gICAgdGVybWluYWwuZW50cmllcy5sZW5ndGgsXG4gICAgZnJhbWUucHJvbXB0SW5kZXgpO1xufVxuXG5mdW5jdGlvbiBmYXN0Rm9yd2FyZChmcmFtZSkge1xuICByZXR1cm4gY3JlYXRlRnJhbWUoXG4gICAgZnJhbWUub2Zmc2V0LFxuICAgIGZyYW1lLnN0YXJ0LFxuICAgIGZyYW1lLnByb21wdEluZGV4ID4gMFxuICAgICAgPyBmcmFtZS5wcm9tcHRJbmRleCAtIDFcbiAgICAgIDogZnJhbWUucHJvbXB0SW5kZXgpO1xufVxuXG5mdW5jdGlvbiByZXNldFByb21wdEluZGV4KGZyYW1lKSB7XG4gIHJldHVybiBjcmVhdGVGcmFtZShcbiAgICBmcmFtZS5vZmZzZXQsXG4gICAgZnJhbWUuc3RhcnQsXG4gICAgMCk7XG59XG5cbmZ1bmN0aW9uIHJld2luZChmcmFtZSwgdGVybWluYWwpIHtcbiAgcmV0dXJuIGNyZWF0ZUZyYW1lKFxuICAgIGZyYW1lLm9mZnNldCxcbiAgICBmcmFtZS5zdGFydCxcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLmxlbmd0aCA+IGZyYW1lLnByb21wdEluZGV4XG4gICAgICA/IGZyYW1lLnByb21wdEluZGV4ICsgMVxuICAgICAgOiBmcmFtZS5wcm9tcHRJbmRleCk7XG59XG5cbmV4cG9ydCBjb25zdCBGcmFtZSA9IHtcbiAgY2xlYXIsXG4gIGZhc3RGb3J3YXJkLFxuICByZXNldFByb21wdEluZGV4LFxuICByZXdpbmRcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVUZXJtaW5hbCB9IGZyb20gJy4uL3R5cGVzL2NyZWF0ZVRlcm1pbmFsJztcbmltcG9ydCB7IGNyZWF0ZVByb21wdCB9IGZyb20gJy4uL3R5cGVzL2NyZWF0ZVByb21wdCc7XG5cbmZ1bmN0aW9uIGFkZENoYXIodGVybWluYWwsIGNoYXIpIHtcbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgIHRlcm1pbmFsLmVudHJpZXMsXG4gICAgdGVybWluYWwucHJvbXB0cyxcbiAgICBjcmVhdGVQcm9tcHQoXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucHJlQ3Vyc29yICsgY2hhcixcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlV29yZCh0ZXJtaW5hbCwgZ2V0Q2FuZGlkYXRlcykge1xuICBjb25zdCBfZ2V0Q2FuZGlkYXRlcyA9IChnZXRDYW5kaWRhdGVzID09IG51bGwpXG4gICAgPyBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gY291cGxpbmcgdG8gbGlzcCBpbXBsZW1lbnRhdGlvblxuICAgICAgICByZXR1cm4gW3sgZWZmZWN0OiBmYWxzZSwgdmFsdWU6IHZhbHVlIH1dO1xuICAgICAgfVxuICAgIDogZ2V0Q2FuZGlkYXRlcztcblxuICBjb25zdCBjb21tYW5kVGV4dCA9IHRlcm1pbmFsLnByb21wdC5wcmVDdXJzb3I7XG4gIGNvbnN0IHNwbGl0Q29tbWFuZCA9IGdldFByZWZpeChjb21tYW5kVGV4dCk7XG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBfZ2V0Q2FuZGlkYXRlcyhzcGxpdENvbW1hbmRbMV0pO1xuICBjb25zdCBsZW5ndGggPSBjYW5kaWRhdGVzLmxlbmd0aDtcblxuICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRlcm1pbmFsO1xuICB9XG5cbiAgbGV0IGVudHJpZXM7XG4gIGxldCBwcm9tcHQ7XG5cbiAgaWYgKGxlbmd0aCA9PT0gMSkge1xuICAgIGVudHJpZXMgPSB0ZXJtaW5hbC5lbnRyaWVzO1xuICAgIHByb21wdCA9IGNyZWF0ZVByb21wdChcbiAgICAgIHNwbGl0Q29tbWFuZFswXSArIGNhbmRpZGF0ZXNbMF0gKyAnICcgKyB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcixcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yKTtcbiAgfSBlbHNlIHtcbiAgICBlbnRyaWVzID0gdGVybWluYWwuZW50cmllcy5jb25jYXQoXG4gICAgICBbeyB0eXBlOiAnY29tbWFuZCcsIHZhbHVlOiBleHRyYWN0Q29tbWFuZCh0ZXJtaW5hbC5wcm9tcHQpIH1dLFxuICAgICAgW3sgdHlwZTogJ2NvbXBsZXRpb24nLCB2YWx1ZTogY2FuZGlkYXRlcy5qb2luKCcgJykgfV0pO1xuICAgIHByb21wdCA9IHRlcm1pbmFsLnByb21wdDtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChlbnRyaWVzLCB0ZXJtaW5hbC5wcm9tcHRzLCBwcm9tcHQpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVMZWZ0Q2hhcih0ZXJtaW5hbCkge1xuICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgdGVybWluYWwuZW50cmllcywgXG4gICAgdGVybWluYWwucHJvbXB0cyxcbiAgICBjcmVhdGVQcm9tcHQoXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucHJlQ3Vyc29yLnNsaWNlKDAsIC0xKSxcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByZUN1cnNvcih0ZXJtaW5hbCkge1xuICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgdGVybWluYWwuZW50cmllcywgXG4gICAgdGVybWluYWwucHJvbXB0cywgXG4gICAgY3JlYXRlUHJvbXB0KCcnLCB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcikpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVSaWdodENoYXIodGVybWluYWwpIHtcbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgIHRlcm1pbmFsLmVudHJpZXMsIFxuICAgIHRlcm1pbmFsLnByb21wdHMsIFxuICAgIGNyZWF0ZVByb21wdChcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wcmVDdXJzb3IsXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvci5zbGljZSgxKSkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVXb3JkKHRlcm1pbmFsKSB7XG4gIGNvbnN0IHByZUN1cnNvciA9IHRlcm1pbmFsLnByb21wdC5wcmVDdXJzb3I7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLCBcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLCBcbiAgICBjcmVhdGVQcm9tcHQoXG4gICAgICBwcmVDdXJzb3Iuc2xpY2UoMCwgcHJlQ3Vyc29yLnNsaWNlKDAsIC0xKS5sYXN0SW5kZXhPZignICcpICsgMSksXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcikpO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0Q29tbWFuZChwcm9tcHQpIHtcbiAgcmV0dXJuIChwcm9tcHQucHJlQ3Vyc29yICsgcHJvbXB0LnBvc3RDdXJzb3IpLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJlZml4KGNvbW1hbmQpIHtcbiAgY29uc3QgcmVnZXggPSAvXiguKltcXHNcXChcXClcXFtcXF1dKShbXlxcKFxcKVxcW1xcXV0qKS87XG4gIGNvbnN0IG1hdGNoID0gcmVnZXguZXhlYyhjb21tYW5kKTtcbiAgcmV0dXJuIG1hdGNoID09IG51bGxcbiAgICA/IFsnJywgY29tbWFuZF1cbiAgICA6IFttYXRjaFsxXSwgbWF0Y2hbMl1dO1xufVxuXG5mdW5jdGlvbiBtb3ZlQ3Vyc29yTGVmdCh0ZXJtaW5hbCkge1xuICBjb25zdCBwcmVDdXJzb3IgPSB0ZXJtaW5hbC5wcm9tcHQucHJlQ3Vyc29yO1xuICBjb25zdCBwcmVDdXJzb3JMZW5ndGggPSBwcmVDdXJzb3IubGVuZ3RoO1xuICBpZiAocHJlQ3Vyc29yTGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRlcm1pbmFsO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBvc3RDdXJzb3IgPSB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcjtcbiAgICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgICB0ZXJtaW5hbC5lbnRyaWVzLFxuICAgICAgdGVybWluYWwucHJvbXB0cyxcbiAgICAgIGNyZWF0ZVByb21wdChcbiAgICAgICAgcHJlQ3Vyc29yLnNsaWNlKDAsIC0xKSxcbiAgICAgICAgcHJlQ3Vyc29yW3ByZUN1cnNvckxlbmd0aCAtIDFdICsgcG9zdEN1cnNvcikpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdmVDdXJzb3JSaWdodCh0ZXJtaW5hbCkge1xuICBjb25zdCBwb3N0Q3Vyc29yID0gdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3I7XG4gIGlmIChwb3N0Q3Vyc29yLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0ZXJtaW5hbDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwcmVDdXJzb3IgPSB0ZXJtaW5hbC5wcm9tcHQucHJlQ3Vyc29yO1xuICAgIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICAgIHRlcm1pbmFsLmVudHJpZXMsXG4gICAgICB0ZXJtaW5hbC5wcm9tcHRzLFxuICAgICAgY3JlYXRlUHJvbXB0KFxuICAgICAgICBwcmVDdXJzb3IgKyBwb3N0Q3Vyc29yWzBdLFxuICAgICAgICBwb3N0Q3Vyc29yLnNsaWNlKDEpKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW92ZUN1cnNvclRvRW5kKHRlcm1pbmFsKSB7XG4gIGNvbnN0IHByb21wdCA9IHRlcm1pbmFsLnByb21wdDtcbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgIHRlcm1pbmFsLmVudHJpZXMsXG4gICAgdGVybWluYWwucHJvbXB0cyxcbiAgICBjcmVhdGVQcm9tcHQocHJvbXB0LnByZUN1cnNvciArIHByb21wdC5wb3N0Q3Vyc29yLCAnJykpO1xufVxuXG5mdW5jdGlvbiBtb3ZlQ3Vyc29yVG9TdGFydCh0ZXJtaW5hbCkge1xuICBjb25zdCBwcm9tcHQgPSB0ZXJtaW5hbC5wcm9tcHQ7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLFxuICAgIHRlcm1pbmFsLnByb21wdHMsXG4gICAgY3JlYXRlUHJvbXB0KCcnLCBwcm9tcHQucHJlQ3Vyc29yICsgcHJvbXB0LnBvc3RDdXJzb3IpKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUHJvbXB0KHByb21wdCkge1xuICByZXR1cm4gY3JlYXRlUHJvbXB0KGV4dHJhY3RDb21tYW5kKHByb21wdCksICcnKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0KHRlcm1pbmFsLCB0cmFuc2Zvcm0pIHtcbiAgbGV0IG5ld0NhY2hlZFByb21wdE1heWJlO1xuICBsZXQgbmV3RnV0dXJlO1xuXG4gIGNvbnN0IF90cmFuc2Zvcm0gPSAodHJhbnNmb3JtID09IG51bGwpXG4gICAgPyBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gY291cGxpbmcgdG8gbGlzcCBpbXBsZW1lbnRhdGlvblxuICAgICAgICByZXR1cm4gW3sgZWZmZWN0OiBmYWxzZSwgdmFsdWU6IHZhbHVlIH1dO1xuICAgICAgfVxuICAgIDogdHJhbnNmb3JtO1xuXG4gIGNvbnN0IGNvbW1hbmRUZXh0ID0gZXh0cmFjdENvbW1hbmQodGVybWluYWwucHJvbXB0KTtcbiAgY29uc3QgcmVzdWx0cyA9IF90cmFuc2Zvcm0oY29tbWFuZFRleHQpO1xuICBjb25zdCBkaXNwbGF5RW50cmllcyA9IHJlc3VsdHNcbiAgICAuc2xpY2UoMCwgLTEpXG4gICAgLmZpbHRlcihmdW5jdGlvbiAocmVzdWx0KSB7IHJldHVybiByZXN1bHQuZWZmZWN0LnR5cGUgPT09ICdkaXNwbGF5JzsgfSlcbiAgICAubWFwKGZ1bmN0aW9uIChkaXNwbGF5KSB7IHJldHVybiB7IHR5cGU6ICdkaXNwbGF5JywgdmFsdWU6IGRpc3BsYXkudmFsdWUgfX0pO1xuXG4gIGNvbnN0IGxhc3RSZXN1bHQgPSByZXN1bHRzW3Jlc3VsdHMubGVuZ3RoIC0gMV07XG4gIGNvbnN0IHJlc3BvbnNlID0gbGFzdFJlc3VsdC52YWx1ZSAhPSBudWxsXG4gICAgPyBbeyB0eXBlOiAncmVzcG9uc2UnLCB2YWx1ZTogbGFzdFJlc3VsdC52YWx1ZSB9XVxuICAgIDogW107XG5cbiAgY29uc3QgY29tbWFuZCA9IHsgdHlwZTogJ2NvbW1hbmQnLCB2YWx1ZTogY29tbWFuZFRleHQgfTtcbiAgY29uc3QgcHJvbXB0ID0gbm9ybWFsaXplUHJvbXB0KHRlcm1pbmFsLnByb21wdCk7XG5cbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgIHRlcm1pbmFsLmVudHJpZXMuY29uY2F0KFtjb21tYW5kXSwgZGlzcGxheUVudHJpZXMsIHJlc3BvbnNlKSxcbiAgICBbcHJvbXB0XS5jb25jYXQodGVybWluYWwucHJvbXB0cyksXG4gICAgY3JlYXRlUHJvbXB0KCcnLCAnJykpO1xufVxuXG5leHBvcnQgY29uc3QgVGVybWluYWwgPSB7XG4gIGFkZENoYXIsXG4gIGNvbXBsZXRlV29yZCxcbiAgZGVsZXRlTGVmdENoYXIsXG4gIGRlbGV0ZVByZUN1cnNvcixcbiAgZGVsZXRlUmlnaHRDaGFyLFxuICBkZWxldGVXb3JkLFxuICBtb3ZlQ3Vyc29yTGVmdCxcbiAgbW92ZUN1cnNvclJpZ2h0LFxuICBtb3ZlQ3Vyc29yVG9FbmQsXG4gIG1vdmVDdXJzb3JUb1N0YXJ0LFxuICBzdWJtaXRcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVWaWV3cG9ydCB9IGZyb20gJy4uL3R5cGVzL2NyZWF0ZVZpZXdwb3J0JztcbmltcG9ydCB7IGNyZWF0ZUZyYW1lIH0gZnJvbSAnLi4vdHlwZXMvY3JlYXRlRnJhbWUnO1xuaW1wb3J0IHsgY3JlYXRlVGVybWluYWwgfSBmcm9tICcuLi90eXBlcy9jcmVhdGVUZXJtaW5hbCc7XG5pbXBvcnQgeyBGcmFtZSB9IGZyb20gJy4vZnJhbWUnO1xuaW1wb3J0IHsgVGVybWluYWwgfSBmcm9tICcuL3Rlcm1pbmFsJztcblxuZnVuY3Rpb24gYWRkQ2hhcih2aWV3cG9ydCwgY2hhcikge1xuICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgVGVybWluYWwuYWRkQ2hhcih2aWV3cG9ydC50ZXJtaW5hbCwgY2hhciksXG4gICAgdmlld3BvcnQuZnJhbWUpO1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZVdvcmQodmlld3BvcnQsIGdldENhbmRpZGF0ZXMpIHtcbiAgY29uc3QgZnJhbWUgPSB2aWV3cG9ydC5mcmFtZTtcbiAgY29uc3QgbmV3VGVybWluYWwgPVxuICAgIFRlcm1pbmFsLmNvbXBsZXRlV29yZChyZWZyZXNoVGVybWluYWwodmlld3BvcnQpLCBnZXRDYW5kaWRhdGVzKTtcbiAgY29uc3QgZGlmZiA9IG5ld1Rlcm1pbmFsLmVudHJpZXMubGVuZ3RoIC0gdmlld3BvcnQudGVybWluYWwuZW50cmllcy5sZW5ndGg7XG4gIHJldHVybiBjcmVhdGVWaWV3cG9ydChcbiAgICBuZXdUZXJtaW5hbCxcbiAgICBjcmVhdGVGcmFtZShcbiAgICAgIGZyYW1lLm9mZnNldCArIGRpZmYsXG4gICAgICBmcmFtZS5zdGFydCxcbiAgICAgIDApKTtcbn1cblxuZnVuY3Rpb24gY2xlYXIodmlld3BvcnQpIHtcbiAgY29uc3QgdGVybWluYWwgPSB2aWV3cG9ydC50ZXJtaW5hbDtcbiAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgIHRlcm1pbmFsLFxuICAgIEZyYW1lLmNsZWFyKHZpZXdwb3J0LmZyYW1lLCB0ZXJtaW5hbCkpO1xufVxuXG5mdW5jdGlvbiBmYXN0Rm9yd2FyZCh2aWV3cG9ydCkge1xuICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgdmlld3BvcnQudGVybWluYWwsXG4gICAgRnJhbWUuZmFzdEZvcndhcmQodmlld3BvcnQuZnJhbWUpKTtcbn1cblxuZnVuY3Rpb24gbW9kaWZ5VGVybWluYWwoZm5OYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmlld3BvcnQpIHtcbiAgICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgICBUZXJtaW5hbFtmbk5hbWVdKHJlZnJlc2hUZXJtaW5hbCh2aWV3cG9ydCkpLFxuICAgICAgRnJhbWUucmVzZXRQcm9tcHRJbmRleCh2aWV3cG9ydC5mcmFtZSkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZWZyZXNoVGVybWluYWwodmlld3BvcnQpIHtcbiAgY29uc3QgdGVybWluYWwgPSB2aWV3cG9ydC50ZXJtaW5hbDtcbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKHRlcm1pbmFsLmVudHJpZXMsIHRlcm1pbmFsLnByb21wdHMsIHZpZXdwb3J0LnByb21wdCk7XG59XG5cbmZ1bmN0aW9uIHJld2luZCh2aWV3cG9ydCkge1xuICBjb25zdCB0ZXJtaW5hbCA9IHZpZXdwb3J0LnRlcm1pbmFsO1xuICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgdGVybWluYWwsXG4gICAgRnJhbWUucmV3aW5kKHZpZXdwb3J0LmZyYW1lLCB0ZXJtaW5hbCkpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXQodmlld3BvcnQsIHRyYW5zZm9ybSkge1xuICBjb25zdCBmcmFtZSA9IHZpZXdwb3J0LmZyYW1lO1xuICBjb25zdCBuZXdUZXJtaW5hbCA9IFRlcm1pbmFsLnN1Ym1pdChyZWZyZXNoVGVybWluYWwodmlld3BvcnQpLCB0cmFuc2Zvcm0pO1xuICBjb25zdCBkaWZmID0gbmV3VGVybWluYWwuZW50cmllcy5sZW5ndGggLSB2aWV3cG9ydC50ZXJtaW5hbC5lbnRyaWVzLmxlbmd0aDtcbiAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgIG5ld1Rlcm1pbmFsLFxuICAgIGNyZWF0ZUZyYW1lKFxuICAgICAgZnJhbWUub2Zmc2V0ICsgZGlmZixcbiAgICAgIGZyYW1lLnN0YXJ0LFxuICAgICAgMCkpO1xufVxuXG5leHBvcnQgY29uc3QgVmlld3BvcnQgPSB7XG4gIGFkZENoYXIsXG4gIGNsZWFyLFxuICBjb21wbGV0ZVdvcmQsXG4gIGRlbGV0ZUxlZnRDaGFyOiBtb2RpZnlUZXJtaW5hbCgnZGVsZXRlTGVmdENoYXInKSxcbiAgZGVsZXRlUHJlQ3Vyc29yOiBtb2RpZnlUZXJtaW5hbCgnZGVsZXRlUHJlQ3Vyc29yJyksXG4gIGRlbGV0ZVJpZ2h0Q2hhcjogbW9kaWZ5VGVybWluYWwoJ2RlbGV0ZVJpZ2h0Q2hhcicpLFxuICBkZWxldGVXb3JkOiBtb2RpZnlUZXJtaW5hbCgnZGVsZXRlV29yZCcpLFxuICBmYXN0Rm9yd2FyZCxcbiAgbW92ZUN1cnNvckxlZnQ6IG1vZGlmeVRlcm1pbmFsKCdtb3ZlQ3Vyc29yTGVmdCcpLFxuICBtb3ZlQ3Vyc29yUmlnaHQ6IG1vZGlmeVRlcm1pbmFsKCdtb3ZlQ3Vyc29yUmlnaHQnKSxcbiAgbW92ZUN1cnNvclRvRW5kOiBtb2RpZnlUZXJtaW5hbCgnbW92ZUN1cnNvclRvRW5kJyksXG4gIG1vdmVDdXJzb3JUb1N0YXJ0OiBtb2RpZnlUZXJtaW5hbCgnbW92ZUN1cnNvclRvU3RhcnQnKSxcbiAgcmV3aW5kLFxuICBzdWJtaXRcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUZyYW1lIH0gZnJvbSAnLi90eXBlcy9jcmVhdGVGcmFtZSc7XG5pbXBvcnQgeyBjcmVhdGVQcm9tcHQgfSBmcm9tICcuL3R5cGVzL2NyZWF0ZVByb21wdCc7XG5pbXBvcnQgeyBjcmVhdGVUZXJtaW5hbCB9IGZyb20gJy4vdHlwZXMvY3JlYXRlVGVybWluYWwnO1xuaW1wb3J0IHsgY3JlYXRlVmlld3BvcnQgfSBmcm9tICcuL3R5cGVzL2NyZWF0ZVZpZXdwb3J0JztcblxuZnVuY3Rpb24gZ2V0SW5pdGlhbE1vZGVsKCkge1xuICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgY3JlYXRlVGVybWluYWwoW10sIFtdLCBjcmVhdGVQcm9tcHQoJycsICcnKSksXG4gICAgY3JlYXRlRnJhbWUoMCwgMCwgMCkpO1xufVxuXG5leHBvcnQgeyBnZXRJbml0aWFsTW9kZWwgfTtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVGcmFtZSA9IGZ1bmN0aW9uIChvZmZzZXQsIHN0YXJ0LCBwcm9tcHRJbmRleCkge1xuICByZXR1cm4ge1xuICAgIG9mZnNldDogb2Zmc2V0LFxuICAgIHN0YXJ0OiBzdGFydCxcbiAgICBwcm9tcHRJbmRleDogcHJvbXB0SW5kZXhcbiAgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgY3JlYXRlUHJvbXB0ID0gZnVuY3Rpb24gKHByZUN1cnNvciwgcG9zdEN1cnNvcikge1xuICByZXR1cm4ge1xuICAgIHByZUN1cnNvcjogcHJlQ3Vyc29yLFxuICAgIHBvc3RDdXJzb3I6IHBvc3RDdXJzb3JcbiAgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgY3JlYXRlVGVybWluYWwgPSAgZnVuY3Rpb24gKGVudHJpZXMsIHByb21wdHMsIGN1cnJlbnRQcm9tcHQpIHtcbiAgcmV0dXJuICB7XG4gICAgZW50cmllczogZW50cmllcyxcbiAgICBwcm9tcHRzOiBwcm9tcHRzLFxuICAgIHByb21wdDogY3VycmVudFByb21wdFxuICB9O1xufTtcbiIsImZ1bmN0aW9uIGdldFByb21wdCh0ZXJtaW5hbCwgZnJhbWUpIHtcbiAgcmV0dXJuIGZyYW1lLnByb21wdEluZGV4ID09PSAwXG4gICAgPyB0ZXJtaW5hbC5wcm9tcHRcbiAgICA6IHRlcm1pbmFsLnByb21wdHNbZnJhbWUucHJvbXB0SW5kZXggLSAxXTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVZpZXdwb3J0ID0gZnVuY3Rpb24gKHRlcm1pbmFsLCBmcmFtZSkge1xuICByZXR1cm4ge1xuICAgIHRlcm1pbmFsOiB0ZXJtaW5hbCxcbiAgICBmcmFtZTogZnJhbWUsXG4gICAgcHJvbXB0OiBnZXRQcm9tcHQodGVybWluYWwsIGZyYW1lKVxuICB9O1xufTtcbiIsImltcG9ydCB7IGRpZmYgfSBmcm9tICcuLi9yaWJvc29tZS9kaWZmJztcbmltcG9ydCB7IEVSTEtJTkcgfSBmcm9tICcuL3ZpZXcvcmVjcmVhdGVDb25zb2xlJztcbmltcG9ydCB7IG1vZGlmeUVsZW1lbnQgfSBmcm9tICcuLi9yaWJvc29tZS9pbnRlcnByZXRlcic7XG5cbmZ1bmN0aW9uIHJlbmRlcihfdmlld01vZGVsLCByb290Q2hpbGQsIGNvbnRyb2xDb25maWcsIHNjcm9sbCkge1xuICBsZXQgdmlld01vZGVsID0gX3ZpZXdNb2RlbDtcbiAgcmV0dXJuIGZ1bmN0aW9uIChtb2RlbCkge1xuICAgIGNvbnN0IGxhYmVscyA9IHsgcHJvbXB0TGFiZWw6IGNvbnRyb2xDb25maWcucHJvbXB0TGFiZWwgfTtcbiAgICBjb25zdCBuZXdWaWV3TW9kZWwgPSBFUkxLSU5HKGxhYmVscywgbW9kZWwpO1xuICAgIG1vZGlmeUVsZW1lbnQocm9vdENoaWxkLCBkaWZmKG5ld1ZpZXdNb2RlbCwgdmlld01vZGVsKSk7XG5cbiAgICBjb250cm9sQ29uZmlnLnZpZXdwb3J0ID0gbW9kZWw7XG4gICAgdmlld01vZGVsID0gbmV3Vmlld01vZGVsO1xuXG4gICAgc2Nyb2xsKCk7XG4gIH07XG59XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50VHlwZSwgZXZlbnRIYW5kbGVyKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgc3VwcmVzc0RlZmF1bHQoZXZlbnRIYW5kbGVyKSk7XG59XG5cbmZ1bmN0aW9uIHN1cHJlc3NEZWZhdWx0KGhhbmRsZUV2ZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgfTtcbn1cblxuZXhwb3J0IHsgc3Vic2NyaWJlIH07XG4iLCJpbXBvcnQgeyBTUEFOIH0gZnJvbSAnLi4vLi4vcmlib3NvbWUvZWxlbWVudHMnO1xuXG5mdW5jdGlvbiBFUkxfRU5UUlkodGV4dCkge1xuICByZXR1cm4gU1BBTihfZW50cnlDb25maWcsIHRleHQgKyBuZXdsaW5lKTtcbn1cblxuZnVuY3Rpb24gRVJMX0lOUFVUKHByb21wdFRleHQsIHByZVRleHQsIHBvc3RUZXh0KSB7XG4gIHJldHVybiBTUEFOKFxuICAgIF9pbnB1dENvbmZpZyxcbiAgICBFUkxfUFJPTVBUKHByb21wdFRleHQpLFxuICAgIEVSTF9QUkUocHJlVGV4dCksXG4gICAgRVJMX0NVUlNPUixcbiAgICBFUkxfUE9TVChwb3N0VGV4dCkpO1xufVxuXG5mdW5jdGlvbiBFUkxfUE9TVCh0ZXh0KSB7XG4gIHJldHVybiBTUEFOKF9wb3N0Q29uZmlnLCB0ZXh0KTtcbn1cblxuZnVuY3Rpb24gRVJMX1BSRSh0ZXh0KSB7XG4gIHJldHVybiBTUEFOKF9wcmVDb25maWcsIHRleHQpO1xufVxuXG5mdW5jdGlvbiBFUkxfUFJPTVBUKHRleHQpIHtcbiAgcmV0dXJuIFNQQU4oX3Byb21wdENvbmZpZywgdGV4dCk7XG59XG5cbmNvbnN0IGVtcHR5U3RyaW5nID0gJyc7XG5jb25zdCBuZXdsaW5lID0gJ1xcbic7XG5jb25zdCBzcGFjZSA9ICcgJztcbmNvbnN0IHVuZGVyc2NvcmUgPSAnXyc7XG5cbmNvbnN0IEVSTF9DVVJTT1IgPSBTUEFOKFxuICB7XG4gICAgaWQ6ICdlcmwtY3Vyc29yJyxcbiAgICBjbGFzc2VzOiB7ICdlcmwtY3Vyc29yJzogdHJ1ZSwgJ2VybC1jdXJzb3InOiB0cnVlIH0sXG4gIH0sXG4gIHVuZGVyc2NvcmUpO1xuXG5jb25zdCBfZW50cnlDb25maWcgPSB7XG4gIGNsYXNzZXM6IHsgJ2VybC1lbnRyeSc6IHRydWUsICdlcmwtbGluZSc6IHRydWUgfSxcbn07XG5cbmNvbnN0IF9pbnB1dENvbmZpZyA9IHtcbiAgaWQ6ICdlcmwtaW5wdXQnLFxuICBjbGFzc2VzOiB7ICdlcmwtaW5wdXQnOiB0cnVlLCAnZXJsLWxpbmUnOiB0cnVlIH1cbn07XG5cbmNvbnN0IF9wb3N0Q29uZmlnID0ge1xuICBpZDogJ2VybC1wb3N0JyxcbiAgY2xhc3NlczogeyAnZXJsLXBvc3QnOiB0cnVlIH0sXG4gIHN0eWxlOiB7ICdwb3NpdGlvbic6ICdyZWxhdGl2ZScgfVxufTtcblxuY29uc3QgX3ByZUNvbmZpZyA9IHtcbiAgIGlkOiAnZXJsLXByZScsXG4gICBjbGFzc2VzOiB7ICdlcmwtcHJlJzogdHJ1ZSB9XG59O1xuXG5jb25zdCBfcHJvbXB0Q29uZmlnID0ge1xuICBpZDogJ2VybC1wcm9tcHQnLFxuICBjbGFzc2VzOiB7ICdlcmwtcHJvbXB0JzogdHJ1ZSwgJ2VybC1wcm9tcHQnOiB0cnVlIH1cbn07XG5cbmV4cG9ydCB7XG4gIEVSTF9DVVJTT1IsXG4gIEVSTF9FTlRSWSxcbiAgRVJMX0lOUFVULFxuICBFUkxfUE9TVCxcbiAgRVJMX1BSRSxcbiAgRVJMX1BST01QVFxufTtcbiIsImltcG9ydCB7IGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQgfSBmcm9tICcuLi8uLi9yaWJvc29tZS9pbnRlcnByZXRlcic7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVWaWV3KHJvb3QsIHZpZXdNb2RlbCkge1xuICBjcmVhdGVBbmRBdHRhY2hFbGVtZW50KHJvb3QsIHZpZXdNb2RlbCk7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxpemVWaWV3IH07XG4iLCJpbXBvcnQge1xuICBFUkxfQ1VSU09SLFxuICBFUkxfRU5UUlksXG4gIEVSTF9JTlBVVCxcbiAgRVJMX1BPU1QsXG4gIEVSTF9QUkUsXG4gIEVSTF9QUk9NUFRcbn0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuaW1wb3J0IHtcbiAgRElWLFxuICBIMSxcbiAgSDQsXG4gIFNFQ1RJT04sXG4gIFNQQU5cbn0gZnJvbSAnLi4vLi4vcmlib3NvbWUvZWxlbWVudHMnO1xuXG5jb25zdCBFUkxfSEVBREVSID0gU0VDVElPTihcbiAgICB7XG4gICAgICBpZDogJ2VybC1oZWFkZXInLFxuICAgICAgY2xhc3NlczogeyAnaGVhZCc6IHRydWUgfVxuICAgIH0sXG4gICAgSDEobnVsbCwgJ0VybGvDtm5pZyBMaXNwIENvbnNvbGVcXG4nKSxcbiAgICBINChudWxsLCAnQSB0ZXJtaW5hbCBlbXVsYXRvciBhbmQgbGlzcCBpbnRlcnByZXRlclxcbicpKTtcblxuY29uc3QgZW1wdHlTdHJpbmcgPSAnJztcblxuZnVuY3Rpb24gRVJMS0lORyhwcmVmaXhlcywgdmlld3BvcnQpIHtcbiAgY29uc3QgcHJvbXB0TGFiZWwgPSBwcmVmaXhlcy5wcm9tcHRMYWJlbDtcbiAgY29uc3QgcHJvbXB0ID0gdmlld3BvcnQucHJvbXB0O1xuICBjb25zdCBmcmFtZSA9IHZpZXdwb3J0LmZyYW1lO1xuXG4gIGNvbnN0IGVudHJpZXMgPSB2aWV3cG9ydC50ZXJtaW5hbC5lbnRyaWVzXG4gICAgLnNsaWNlKGZyYW1lLnN0YXJ0LCBmcmFtZS5zdGFydCArIGZyYW1lLm9mZnNldClcbiAgICAubWFwKHNwZWNpZnlFbnRyeS5iaW5kKG51bGwsIHByZWZpeGVzKSk7XG5cbiAgY29uc3QgcHJlQ3Vyc29yID0gcHJvbXB0LnByZUN1cnNvciAhPSBudWxsID8gcHJvbXB0LnByZUN1cnNvciA6IGVtcHR5U3RyaW5nO1xuICBjb25zdCBwb3N0Q3Vyc29yID0gcHJvbXB0LnBvc3RDdXJzb3IgIT0gbnVsbCA/IHByb21wdC5wb3N0Q3Vyc29yIDogZW1wdHlTdHJpbmc7XG5cbiAgcmV0dXJuIERJVihcbiAgICBfZXJsa29uaWdDb25maWcsXG4gICAgRElWKFxuICAgICAgbnVsbCxcbiAgICAgIEVSTF9IRUFERVIsXG4gICAgICBESVYoXG4gICAgICAgIF90ZXJtaW5hbENvbmZpZyxcbiAgICAgICAgWF9TQ1JPTExCQVIsXG4gICAgICAgIFlfU0NST0xMQkFSLFxuICAgICAgICBESVYoXG4gICAgICAgICAgX2VybFZpZXdwb3J0Q29uZmlnLFxuICAgICAgICAgIGVudHJpZXMsXG4gICAgICAgICAgRVJMX0lOUFVUKHByb21wdExhYmVsLCBwcm9tcHQucHJlQ3Vyc29yLCBwcm9tcHQucG9zdEN1cnNvcikpKSkpO1xufVxuXG5jb25zdCBYX1NDUk9MTEJBUiA9IERJVihcbiAge1xuICAgIGlkOiAnZXJsLXgtc2Nyb2xsLXRyYWNrJyxcbiAgICBjbGFzc2VzOiB7XG4gICAgICAnZXJsLXgtc2Nyb2xsLXRyYWNrJzogdHJ1ZSxcbiAgICAgICdlcmwtc2Nyb2xsLXRyYWNrJzogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgRElWKHtcbiAgICBpZDogJ2VybC14LXNjcm9sbC10aHVtYicsXG4gICAgY2xhc3Nlczoge1xuICAgICAgJ2VybC14LXNjcm9sbC10aHVtYic6IHRydWUsXG4gICAgICAnZXJsLXNjcm9sbC10aHVtYic6IHRydWVcbiAgICB9XG4gIH0pKTtcblxuY29uc3QgWV9TQ1JPTExCQVIgPSBESVYoXG4gIHtcbiAgICBpZDogJ2VybC15LXNjcm9sbC10cmFjaycsXG4gICAgY2xhc3Nlczoge1xuICAgICAgJ2VybC15LXNjcm9sbC10cmFjayc6IHRydWUsXG4gICAgICAnZXJsLXNjcm9sbC10cmFjayc6IHRydWVcbiAgICB9XG4gIH0sXG4gIERJVih7XG4gICAgaWQ6ICdlcmwteS1zY3JvbGwtdGh1bWInLFxuICAgIGNsYXNzZXM6IHtcbiAgICAgICdlcmwteS1zY3JvbGwtdGh1bWInOiB0cnVlLFxuICAgICAgJ2VybC1zY3JvbGwtdGh1bWInOiB0cnVlXG4gICAgfVxuICB9KSk7XG5cbmNvbnN0IGRlZmF1bHRDb21wbGV0aW9uTGFiZWwgPSAnICAnO1xuY29uc3QgZGVmYXVsdERpc3BsYXlMYWJlbCA9ICcnO1xuY29uc3QgZGVmYXVsdEVycm9yTGFiZWwgPSAnLi4uPiAnO1xuY29uc3QgZGVmYXVsdFByb21wdExhYmVsID0gJz4gJztcbmNvbnN0IGRlZmF1bHRSZXNwb25zZUxhYmVsID0gJz09PiAnO1xuXG5mdW5jdGlvbiBzcGVjaWZ5RW50cnkocHJlZml4ZXMsIGNvbXBvbmVudCkge1xuICBjb25zdCBjb21wbGV0aW9uTGFiZWwgPSBwcmVmaXhlcy5jb21wbGV0aW9uTGFiZWwgfHwgZGVmYXVsdENvbXBsZXRpb25MYWJlbDtcbiAgY29uc3QgZGlzcGxheUxhYmVsID0gcHJlZml4ZXMuZGlzcGxheUxhYmVsIHx8IGRlZmF1bHREaXNwbGF5TGFiZWw7XG4gIGNvbnN0IGVycm9yTGFiZWwgPSBwcmVmaXhlcy5lcnJvckxhYmVsIHx8IGRlZmF1bHRFcnJvckxhYmVsO1xuICBjb25zdCBwcm9tcHRMYWJlbCA9IHByZWZpeGVzLnByb21wdExhYmVsIHx8IGRlZmF1bHRQcm9tcHRMYWJlbDtcbiAgY29uc3QgcmVzcG9uc2VMYWJlbCA9IHByZWZpeGVzLnJlc3BvbnNlTGFiZWwgfHwgZGVmYXVsdFJlc3BvbnNlTGFiZWw7XG5cbiAgbGV0IGVudHJ5O1xuICBzd2l0Y2ggKGNvbXBvbmVudC50eXBlKSB7XG4gICAgY2FzZSAnY29tbWFuZCc6XG4gICAgICBlbnRyeSA9IHByb21wdExhYmVsICsgY29tcG9uZW50LnZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmVzcG9uc2UnOlxuICAgICAgZW50cnkgPSByZXNwb25zZUxhYmVsICsgY29tcG9uZW50LnZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZGlzcGxheSc6XG4gICAgICBlbnRyeSA9IGRpc3BsYXlMYWJlbCArIGNvbXBvbmVudC52YWx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NvbXBsZXRpb24nOlxuICAgICAgZW50cnkgPSBjb21wbGV0aW9uTGFiZWwgKyBjb21wb25lbnQudmFsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdlcnJvcic6XG4gICAgICBlbnRyeSA9IGVycm9yTGFiZWwgKyBjb21wb25lbnQudmFsdWU7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGNvbXBvbmVudCB0eXBlJyk7XG4gIH1cbiAgcmV0dXJuIEVSTF9FTlRSWShlbnRyeSk7XG59XG5cbmNvbnN0IF9lcmxrb25pZ0NvbmZpZyA9IHtcbiAgaWQ6ICdlcmxrb25pZycsXG4gIGNsYXNzZXM6IHsgJ2VybGtvbmlnJzogdHJ1ZSwgJ2NvbnRhaW5lcic6IHRydWUgfVxufTtcbmNvbnN0IF9jb25zb2xlQ29uZmlnID0geyBpZDogJ2VybC1jb25zb2xlJyB9O1xuY29uc3QgX3Rlcm1pbmFsQ29uZmlnID0geyBjbGFzc2VzOiB7ICd0ZXJtaW5hbCc6IHRydWUgfX07XG5jb25zdCBfZXJsVmlld3BvcnRDb25maWcgPSB7IGNsYXNzZXM6IHsgJ2VybC12aWV3cG9ydCc6IHRydWUgfX07XG5cbmV4cG9ydCB7IEVSTEtJTkcgfTtcbiIsImZ1bmN0aW9uIGdldEN1cnNvck9mZnNldChjdXJzb3IsIG5vZGUpIHtcbiAgY29uc3QgbWFyZ2luID0gNTtcbiAgcmV0dXJuIGN1cnNvci5vZmZzZXRMZWZ0ICsgY3Vyc29yLm9mZnNldFdpZHRoICsgbWFyZ2luIC0gbm9kZS5vZmZzZXRXaWR0aDtcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudChpZCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xufVxuXG5mdW5jdGlvbiBnZXRQZXJjZW50YWdlKG51bWJlcikge1xuICByZXR1cm4gKDEwMCAqIG51bWJlcikgKyAnJSc7XG59XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZXJsLXZpZXdwb3J0JylbMF07XG59XG5cbmZ1bmN0aW9uIG9uRXZlbnQoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBfc2Nyb2xsKG5vZGUsIGN1cnNvcikge1xuICBub2RlLnNjcm9sbFRvcCA9IG5vZGUuc2Nyb2xsSGVpZ2h0IC0gbm9kZS5jbGllbnRIZWlnaHQ7XG4gIG5vZGUuc2Nyb2xsTGVmdCA9IGdldEN1cnNvck9mZnNldChjdXJzb3IsIG5vZGUpO1xufVxuXG5mdW5jdGlvbiBzY3JvbGwoY3NzU2Nyb2xsYmFyRGV0ZWN0ZWQpIHtcbiAgaWYgKGNzc1Njcm9sbGJhckRldGVjdGVkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGN1cnNvciA9IGdldEVsZW1lbnQoJ2VybC1jdXJzb3InKTtcbiAgICAgIF9zY3JvbGwoZ2V0Vmlld3BvcnQoKSwgY3Vyc29yKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB2aWV3cG9ydCA9IGdldFZpZXdwb3J0KCk7XG4gICAgY29uc3QgY3Vyc29yID0gZ2V0RWxlbWVudCgnZXJsLWN1cnNvcicpO1xuICAgIGNvbnN0IHhUcmFjayA9IGdldEVsZW1lbnQoJ2VybC14LXNjcm9sbC10cmFjaycpO1xuICAgIGNvbnN0IHhUaHVtYiA9IGdldEVsZW1lbnQoJ2VybC14LXNjcm9sbC10aHVtYicpO1xuICAgIGNvbnN0IHlUcmFjayA9IGdldEVsZW1lbnQoJ2VybC15LXNjcm9sbC10cmFjaycpO1xuICAgIGNvbnN0IHlUaHVtYiA9IGdldEVsZW1lbnQoJ2VybC15LXNjcm9sbC10aHVtYicpO1xuICAgIGNvbnN0IHByb21wdCA9IGdldEVsZW1lbnQoJ2VybC1wcm9tcHQnKTtcblxuICAgIGNvbnN0IHZpZXdwb3J0V2lkdGggPSB2aWV3cG9ydC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IHZpZXdwb3J0Lm9mZnNldEhlaWdodDtcblxuICAgIHNldFhUaHVtYlZpc2liaWxpdHkodmlld3BvcnQsIHZpZXdwb3J0V2lkdGgsIHhUcmFjaywgeFRodW1iLCBjdXJzb3IsIHByb21wdCk7XG4gICAgc2V0WVRodW1iVmlzaWJpbGl0eSh2aWV3cG9ydCwgdmlld3BvcnRIZWlnaHQsIHlUcmFjaywgeVRodW1iLCBjdXJzb3IpO1xuICAgIHNjcm9sbEhvcml6b250YWxseSh2aWV3cG9ydCwgdmlld3BvcnRXaWR0aCwgeFRyYWNrLCB4VGh1bWIpO1xuICAgIHNjcm9sbFZlcnRpY2FsbHkodmlld3BvcnQsIHZpZXdwb3J0SGVpZ2h0LCB5VHJhY2ssIHlUaHVtYik7XG5cbiAgICBfc2Nyb2xsKHZpZXdwb3J0LCBjdXJzb3IpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzY3JvbGxCYXJIb3Jpem9udGFsbHkoeFRodW1iLCBsZWZ0UmF0aW8pIHtcbiAgeFRodW1iLnN0eWxlLmxlZnQgPSBnZXRQZXJjZW50YWdlKGxlZnRSYXRpbyk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbEJhclZlcnRpY2FsbHkoeVRodW1iLCB0b3BSYXRpbykge1xuICB5VGh1bWIuc3R5bGUudG9wID0gZ2V0UGVyY2VudGFnZSh0b3BSYXRpbyk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbENvbnRlbnRIb3Jpem9udGFsbHkodmlld3BvcnQsIGxlZnRSYXRpbykge1xuICB2aWV3cG9ydC5zY3JvbGxMZWZ0ID0gbGVmdFJhdGlvICogdmlld3BvcnQuc2Nyb2xsV2lkdGg7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbENvbnRlbnRWZXJ0aWNhbGx5KHZpZXdwb3J0LCB0b3BSYXRpbykge1xuICB2aWV3cG9ydC5zY3JvbGxUb3AgPSB0b3BSYXRpbyAqIHZpZXdwb3J0LnNjcm9sbEhlaWdodDtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsVmVydGljYWxseSh2aWV3cG9ydCwgdmlld3BvcnRIZWlnaHQsIHlUcmFjaywgeVRodW1iKSB7XG4gIGNvbnN0IHlUaHVtYkhlaWdodCA9IHlUaHVtYi5vZmZzZXRIZWlnaHQ7XG4gIGNvbnN0IHlUcmFja0hlaWdodCA9IHlUcmFjay5vZmZzZXRIZWlnaHQ7XG4gIGNvbnN0IHVsbGFnZSA9IHlUcmFja0hlaWdodCAtIHlUaHVtYkhlaWdodDtcblxuICBmdW5jdGlvbiBtb3VzZU1vdmVfdmVydGljYWwoZXZlbnQpIHtcbiAgICBjb25zdCBfdG9wID0gZXZlbnQuY2xpZW50WSAtIHlUcmFjay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgY29uc3QgdG9wID0gX3RvcCA8IDAgPyAwIDogX3RvcCA+IHVsbGFnZSA/IHVsbGFnZSA6IF90b3A7XG4gICAgY29uc3QgdG9wUmF0aW8gPSB0b3AgLyB5VHJhY2tIZWlnaHQ7XG4gICAgc2Nyb2xsQmFyVmVydGljYWxseSh5VGh1bWIsIHRvcFJhdGlvKTtcbiAgICBzY3JvbGxDb250ZW50VmVydGljYWxseSh2aWV3cG9ydCwgdG9wUmF0aW8pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1vdXNlRG93bl92ZXJ0aWNhbChldmVudCkge1xuICAgIHlUaHVtYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDAsIDgwLCAwKSc7XG4gICAgb25FdmVudCgnbW91c2Vtb3ZlJywgbW91c2VNb3ZlX3ZlcnRpY2FsKTtcbiAgICBvbkV2ZW50KCdtb3VzZXVwJywgbW91c2VVcF92ZXJ0aWNhbCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbW91c2VVcF92ZXJ0aWNhbChldmVudCkge1xuICAgIHlUaHVtYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSg1NSwgNTMsIDUwLCAwLjUpJztcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVfdmVydGljYWwpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwX3ZlcnRpY2FsKTtcbiAgfTtcblxuICB5VGh1bWIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duX3ZlcnRpY2FsKTtcbiAgeVRodW1iLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bl92ZXJ0aWNhbCk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbEhvcml6b250YWxseSh2aWV3cG9ydCwgdmlld3BvcnRXaWR0aCwgeFRyYWNrLCB4VGh1bWIpIHtcbiAgY29uc3QgeFRodW1iV2lkdGggPSB4VGh1bWIub2Zmc2V0V2lkdGg7XG4gIGNvbnN0IHhUcmFja1dpZHRoID0geFRyYWNrLm9mZnNldFdpZHRoO1xuICBjb25zdCB1bGxhZ2UgPSB4VHJhY2tXaWR0aCAtIHhUaHVtYldpZHRoO1xuXG4gIGZ1bmN0aW9uIG1vdXNlTW92ZV9ob3Jpem9udGFsKGV2ZW50KSB7XG4gICAgY29uc3QgX2xlZnQgPSBldmVudC5jbGllbnRYIC0geFRyYWNrLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgY29uc3QgbGVmdCA9IF9sZWZ0IDwgMCA/IDAgOiBfbGVmdCA+IHVsbGFnZSA/IHVsbGFnZSA6IF9sZWZ0O1xuICAgIGNvbnN0IGxlZnRSYXRpbyA9IGxlZnQgLyB4VHJhY2tXaWR0aDtcbiAgICBzY3JvbGxCYXJIb3Jpem9udGFsbHkoeFRodW1iLCBsZWZ0UmF0aW8pO1xuICAgIHNjcm9sbENvbnRlbnRIb3Jpem9udGFsbHkodmlld3BvcnQsIGxlZnRSYXRpbyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbW91c2VVcF9ob3Jpem9udGFsKGV2ZW50KSB7XG4gICAgeFRodW1iLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDU1LCA1MywgNTAsIDAuNSknO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZV9ob3Jpem9udGFsKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcF9ob3Jpem9udGFsKTtcbiAgfTtcblxuICBmdW5jdGlvbiBtb3VzZURvd25faG9yaXpvbnRhbChldmVudCkge1xuICAgIHhUaHVtYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDAsIDgwLCAwKSc7XG4gICAgb25FdmVudCgnbW91c2Vtb3ZlJywgbW91c2VNb3ZlX2hvcml6b250YWwpO1xuICAgIG9uRXZlbnQoJ21vdXNldXAnLCBtb3VzZVVwX2hvcml6b250YWwpO1xuICB9O1xuXG4gIHhUaHVtYi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25faG9yaXpvbnRhbCk7XG4gIHhUaHVtYi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25faG9yaXpvbnRhbCk7XG59XG5cbmZ1bmN0aW9uIHNldFhUaHVtYlZpc2liaWxpdHkodmlld3BvcnQsIHZpZXdwb3J0V2lkdGgsIHhUcmFjaywgeFRodW1iLCBjdXJzb3IsIHByb21wdCkge1xuICBjb25zdCB4VHJhY2tXaWR0aCA9IHhUcmFjay5vZmZzZXRXaWR0aDtcbiAgY29uc3QgdGVybWluYWxXaWR0aCA9IHZpZXdwb3J0LnNjcm9sbFdpZHRoO1xuICBjb25zdCB4VGh1bWJTdHlsZSA9IHhUaHVtYi5zdHlsZTtcblxuICBpZiAodmlld3BvcnRXaWR0aCA8IHRlcm1pbmFsV2lkdGgpIHtcbiAgICBjb25zdCBmdWxsUHJvbXB0T2Zmc2V0V2lkdGggPSBwcm9tcHQub2Zmc2V0TGVmdCArIHByb21wdC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBzdGFydCA9IGZ1bGxQcm9tcHRPZmZzZXRXaWR0aDtcbiAgICBjb25zdCB2aWV3cG9ydFJhdGlvID0gdmlld3BvcnRXaWR0aCAvIHRlcm1pbmFsV2lkdGg7XG4gICAgY29uc3QgeFRodW1iV2lkdGggPSB2aWV3cG9ydFJhdGlvICogeFRyYWNrV2lkdGg7XG4gICAgY29uc3Qgdmlld3BvcnRQZXJjZW50YWdlID0gZ2V0UGVyY2VudGFnZSh2aWV3cG9ydFJhdGlvKTtcbiAgICBjb25zdCB1bGxhZ2UgPSB4VHJhY2tXaWR0aCAtIHhUaHVtYldpZHRoO1xuICAgIGNvbnN0IHhQb3NpdGlvbiA9IGN1cnNvci5vZmZzZXRMZWZ0ICsgY3Vyc29yLm9mZnNldFdpZHRoIC0gc3RhcnQ7XG4gICAgY29uc3QgY3Vyc29yUmF0aW8gPSAoeFBvc2l0aW9uIC8gdGVybWluYWxXaWR0aCkgKiAodWxsYWdlIC8geFRyYWNrV2lkdGgpO1xuICAgIGNvbnN0IGN1cnNvclBlcmNlbnRhZ2UgPSBnZXRQZXJjZW50YWdlKGN1cnNvclJhdGlvKTtcblxuICAgIHhUaHVtYlN0eWxlLmxlZnQgPSBjdXJzb3JQZXJjZW50YWdlO1xuICAgIHhUaHVtYlN0eWxlLndpZHRoID0gdmlld3BvcnRQZXJjZW50YWdlO1xuICAgIHhUaHVtYlN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH0gZWxzZSB7XG4gICAgeFRodW1iU3R5bGUubGVmdCA9IDA7XG4gICAgeFRodW1iU3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgeFRodW1iU3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFlUaHVtYlZpc2liaWxpdHkodmlld3BvcnQsIHZpZXdwb3J0SGVpZ2h0LCB5VHJhY2ssIHlUaHVtYiwgY3Vyc29yKSB7XG4gIGNvbnN0IHlUcmFja0hlaWdodCA9IHlUcmFjay5vZmZzZXRIZWlnaHQ7XG4gIGNvbnN0IHRlcm1pbmFsSGVpZ2h0ID0gdmlld3BvcnQuc2Nyb2xsSGVpZ2h0O1xuICBjb25zdCB5VGh1bWJTdHlsZSA9IHlUaHVtYi5zdHlsZTtcblxuICBpZiAodmlld3BvcnRIZWlnaHQgPCB0ZXJtaW5hbEhlaWdodCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gdmlld3BvcnQub2Zmc2V0VG9wO1xuICAgIGNvbnN0IHZpZXdwb3J0UmF0aW8gPSB2aWV3cG9ydEhlaWdodCAvIHRlcm1pbmFsSGVpZ2h0O1xuICAgIGNvbnN0IHlUaHVtYkhlaWdodCA9IHZpZXdwb3J0UmF0aW8gKiB5VHJhY2tIZWlnaHQ7XG4gICAgY29uc3Qgdmlld3BvcnRQZXJjZW50YWdlID0gZ2V0UGVyY2VudGFnZSh2aWV3cG9ydFJhdGlvKTtcbiAgICBjb25zdCB1bGxhZ2UgPSB5VHJhY2tIZWlnaHQgLSB5VGh1bWJIZWlnaHQ7XG4gICAgY29uc3QgeVBvc2l0aW9uID0gY3Vyc29yLm9mZnNldFRvcCArIGN1cnNvci5vZmZzZXRIZWlnaHQgLSBzdGFydDtcbiAgICBjb25zdCBjdXJzb3JSYXRpbyA9ICh5UG9zaXRpb24gLyB0ZXJtaW5hbEhlaWdodCkgKiAodWxsYWdlIC8geVRyYWNrSGVpZ2h0KTtcbiAgICBjb25zdCBjdXJzb3JQZXJjZW50YWdlID0gZ2V0UGVyY2VudGFnZShjdXJzb3JSYXRpbyk7XG5cbiAgICB5VGh1bWJTdHlsZS50b3AgPSBjdXJzb3JQZXJjZW50YWdlO1xuICAgIHlUaHVtYlN0eWxlLmhlaWdodCA9IHZpZXdwb3J0UGVyY2VudGFnZTtcbiAgICB5VGh1bWJTdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICB9IGVsc2Uge1xuICAgIHlUaHVtYlN0eWxlLnRvcCA9IDA7XG4gICAgeVRodW1iU3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIHlUaHVtYlN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgfVxufVxuXG5leHBvcnQgeyBzY3JvbGwgfTtcbiIsImltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuL2NvbnNvbGUvaW5pdGlhbGl6ZSc7XG5pbXBvcnQgeyBpbnRlcnByZXQgfSAgZnJvbSAnLi9saXNwL2ludGVycHJldCc7XG5pbXBvcnQgeyBrZXlUb2tlbnMgfSAgZnJvbSAnLi9saXNwL2tleVRva2Vucyc7XG5cbmNvbnN0IF9rZXlUb2tlbnMgPSAga2V5VG9rZW5zLm1hcChmdW5jdGlvbiAoa2V5VG9rZW4pIHtcbiAgcmV0dXJuICc6JyArIGtleVRva2VuO1xufSk7XG5cbmNvbnN0IHByb21wdExhYmVsID0gJ0xpc3A+ICc7XG5cbmZ1bmN0aW9uIGdldENhbmRpZGF0ZXMocHJlZml4KSB7XG4gIGNvbnN0IGVudktleXMgPSBpbnRlcnByZXQoXCIoa2V5cyAoLWdldC1jdXJyZW50LWVudi0pKVwiKVswXVxuICAgICAgLnZhbHVlXG4gICAgICAuc2xpY2UoMSwgLTEpXG4gICAgICAuc3BsaXQoJyAnKTtcbiAgcmV0dXJuIGdldE1hdGNoZXMocHJlZml4LCBfa2V5VG9rZW5zLmNvbmNhdChlbnZLZXlzKSk7XG59XG5cbmZ1bmN0aW9uIGdldE1hdGNoZXMocHJlZml4LCB3b3Jkcykge1xuICBpZiAoIS9eWy1hLXpBLVowLTldKyQvLnRlc3QocHJlZml4KSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBjb25zdCByZWdleCA9IFJlZ0V4cCgnKF58XFxXKTonICsgcHJlZml4KTtcbiAgY29uc3QgbWF0Y2hlcyA9IFtdO1xuICBmb3IgKGxldCBpbmRleCBpbiB3b3Jkcykge1xuICAgIGNvbnN0IHdvcmQgPSB3b3Jkc1tpbmRleF07XG4gICAgaWYgKHJlZ2V4LnRlc3Qod29yZCkpIHtcbiAgICAgIG1hdGNoZXMucHVzaCh3b3JkLnNsaWNlKDEpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5cbmluaXRpYWxpemUoe1xuICBub2RlSWQ6ICd2aWV3cG9ydCcsXG4gIHByb21wdExhYmVsOiBwcm9tcHRMYWJlbCxcbiAgdHJhbnNmb3JtOiBpbnRlcnByZXQsXG4gIGdldENhbmRpZGF0ZXM6IGdldENhbmRpZGF0ZXNcbn0pO1xuIiwiaW1wb3J0IHsgY29tbWVudFNpZ25hbCB9IGZyb20gJy4vY29tbWVudFNpZ25hbCc7XG5pbXBvcnQgeyBldmFsdWF0ZSB9IGZyb20gJy4vZXZhbHVhdGUnO1xuXG5jb25zdCBfcHJvY2VzcyA9IGZ1bmN0aW9uKHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oZW52cykge1xuICAgIHJldHVybiBmdW5jdGlvbihzb3VyY2VDb2RlKSB7XG4gICAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgICBjb25zdCBhZGRSZXN1bHQgPSBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHZhbHVlID0gZXZhbHVhdGUoZW52cywgYWRkUmVzdWx0KSh0cmFuc2Zvcm0oc291cmNlQ29kZSkpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gKHZhbHVlID09PSBjb21tZW50U2lnbmFsKVxuICAgICAgICA/IHsgZWZmZWN0OiB7IHR5cGU6ICdjb21tZW50JyB9IH1cbiAgICAgICAgOiB7IGVmZmVjdDogZmFsc2UsIHZhbHVlOiB2YWx1ZSB9O1xuICAgICAgYWRkUmVzdWx0KHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xuICB9O1xufTtcblxuZXhwb3J0IHsgX3Byb2Nlc3MgfTtcbiIsImNvbnN0IGNvbW1lbnRTaWduYWwgPSB7fTtcblxuZXhwb3J0IHsgY29tbWVudFNpZ25hbCB9O1xuIiwiY29uc3QgYWRkRW52ID0gZnVuY3Rpb24gKGVudlN0YWNrLCBuZXdFbnYpIHtcbiAgY29uc3QgY29weSA9IGVudlN0YWNrLnNsaWNlKDApO1xuICBjb3B5LnVuc2hpZnQobmV3RW52KTtcbiAgcmV0dXJuIGNvcHk7XG59O1xuXG5jb25zdCBnZXRMYXN0ID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gIHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcbn07XG5cbmNvbnN0IGxvb2t1cCA9IGZ1bmN0aW9uIChlbnZTdGFjaywga2V5KSB7XG4gIGNvbnN0IGNvcHkgPSBlbnZTdGFjay5zbGljZSgwKTtcbiAgd2hpbGUgKGNvcHkubGVuZ3RoICE9PSAwKSB7XG4gICAgY29uc3QgZW52ID0gY29weVswXTtcbiAgICBjb25zdCB2YWx1ZSA9IGVudltrZXldO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvcHkuc2hpZnQoKTtcbiAgfVxuICB0aHJvdyBcIlZBTFVFIENPUlJFU1BPTkRJTkcgVE8gXFxcIlwiICsga2V5ICsgXCJcXFwiIERPRVMgTk9UIEVYSVNUIElOIEVOVi1TVEFDS1wiO1xufTtcblxuY29uc3Qgc2V0ID0gZnVuY3Rpb24gKGVudiwga2V5LCB2YWx1ZSkge1xuICBlbnZba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG5jb25zdCBzZXRNYWluRW52ID0gZnVuY3Rpb24gKGVudlN0YWNrLCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzZXQoZ2V0TGFzdChlbnZTdGFjayksIGtleSwgdmFsdWUpO1xufTtcblxuY29uc3QgdW5zZXQgPSBmdW5jdGlvbiAoZW52LCBrZXkpIHtcbiAgY29uc3QgdmFsdWUgPSBlbnZba2V5XTtcbiAgZGVsZXRlIGVudltrZXldO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG5jb25zdCB1bnNldE1haW5FbnYgPSBmdW5jdGlvbiAoZW52U3RhY2ssIGtleSkge1xuICByZXR1cm4gdW5zZXQoZ2V0TGFzdChlbnZTdGFjayksIGtleSk7XG59O1xuXG5leHBvcnQge1xuICBhZGRFbnYsXG4gIGxvb2t1cCxcbiAgc2V0TWFpbkVudixcbiAgdW5zZXRNYWluRW52XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlRXJsQm9vbGVhbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsSWRlbnRpZmllciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybE51bWJlciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3RyaW5nIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBlcmxOaWwgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGV4dHJhY3RKc1ZhbHVlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBmcm9tQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGlzSnNOYU4gfSBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0pzTnVtYmVyIH0gZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNKc1N0cmluZyB9IGZyb20gJy4vanMtdXRpbGl0aWVzJztcbmltcG9ydCB7IHJlZHVjZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuXG5jb25zdCAgX19zbGljZSAgPSBbXS5zbGljZTtcbmNvbnN0IF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5jb25zdCBhZGQgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIobmJycy5yZWR1Y2UoZnVuY3Rpb24oeCwgbmJyKSB7XG4gICAgcmV0dXJuIHggKz0gbmJyO1xuICB9KSk7XG59O1xuXG5jb25zdCBjb250YWlucyA9IGZ1bmN0aW9uKGluZGV4LCBrZXkpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4oa2V5IGluIGluZGV4KTtcbn07XG5cbmNvbnN0IGRpc3NvYyA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBpbmRleCA9IGFyZ3VtZW50c1swXTtcbiAgY29uc3Qga2V5cyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gIGNvbnN0IGxlbiA9IGtleXMubGVuZ3RoO1xuICBjb25zdCBjb3B5ID0ge307XG4gIGZvciAobGV0IGtleSBpbiBpbmRleCkge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoaW5kZXgsIGtleSkpIGNvbnRpbnVlO1xuICAgIGNvbnN0IHZhbHVlID0gaW5kZXhba2V5XTtcbiAgICBjb3B5W2tleV0gPSB2YWx1ZTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICBkZWxldGUgY29weVtrZXldO1xuICB9XG4gIHJldHVybiBjcmVhdGVFcmxJbmRleChjb3B5KTtcbn07XG5cbmNvbnN0IGRpdmlkZSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihuYnJzLnJlZHVjZShmdW5jdGlvbih4LCBuYnIpIHtcbiAgICByZXR1cm4geCAvPSBuYnI7XG4gIH0pKTtcbn07XG5cbmNvbnN0IGV4cG9uZW50aWF0ZSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihuYnJzLnJlZHVjZShmdW5jdGlvbih4LCBuYnIpIHtcbiAgICByZXR1cm4gTWF0aC5wb3coeCwgbmJyKTtcbiAgfSkpO1xufTtcblxuY29uc3QgZ2V0ID0gZnVuY3Rpb24oanNJbmRleCwganNLZXkpIHtcbiAgcmV0dXJuIGpzSW5kZXhbanNLZXldO1xufTtcblxuY29uc3QgZ2V0RW52aXJvbm1lbnQgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgY29uc3QgZW52aXJvbm1lbnQgPSBjb25maWcuZW52aXJvbm1lbnQ7XG4gIHNldENvcmVGbnNPbkpzVmFsdWVzQmFuZyhlbnZpcm9ubWVudCwgZnVuY3Rpb25zT25Kc1ZhbHVlcyk7XG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn07XG5cbmNvbnN0IGdyZWF0ZXJUaGFuT3JFcXVhbCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4obmJyc1swXSA+PSBuYnJzWzFdKTtcbn07XG5cbmNvbnN0IGdyZWF0ZXJUaGFuID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsQm9vbGVhbihuYnJzWzBdID4gbmJyc1sxXSk7XG59O1xuXG5jb25zdCBpbmRleCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBhcmdzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgY29uc3QgbGVuID0gYXJncy5sZW5ndGg7XG4gIGNvbnN0IF9pbmRleCA9IHt9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgayA9IGFyZ3NbaV07XG4gICAgaWYgKGkgJSAyID09PSAwKSB7XG4gICAgICBfaW5kZXhba10gPSBhcmdzW2kgKyAxXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUVybEluZGV4KF9pbmRleCk7XG59O1xuXG5jb25zdCBrZXlzID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgY29uc3QgX2tleXMgPSBbXTtcbiAgZm9yIChsZXQga2V5IGluIGluZGV4KSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChpbmRleCwga2V5KSkgY29udGludWU7XG4gICAgY29uc3QgdmFsdWUgPSBpbmRleFtrZXldO1xuICAgIGNvbnN0IGpzTmJyID0gcGFyc2VGbG9hdChrZXksIDEwKTtcbiAgICBjb25zdCBfa2V5ID0gaXNKc05hTihqc05icilcbiAgICAgICAgPyAoa2V5WzBdID09PSAnOicgPyBjcmVhdGVFcmxJZGVudGlmaWVyIDogY3JlYXRlRXJsU3RyaW5nKShrZXkpXG4gICAgICAgIDogY3JlYXRlRXJsTnVtYmVyKGpzTmJyKTtcbiAgICBfa2V5cy5wdXNoKF9rZXkpO1xuICB9XG4gIHJldHVybiBmcm9tQXJyYXkoX2tleXMpO1xufTtcblxuY29uc3QgbGVuZ3RoU3RyaW5nID0gZnVuY3Rpb24oanNWYWwpIHtcbiAgaWYgKCFpc0pzU3RyaW5nKGpzVmFsKSkge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihqc1ZhbC5sZW5ndGggLSAyKTtcbn07XG5cbmNvbnN0IGxlc3NUaGFuID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsQm9vbGVhbihuYnJzWzBdIDwgbmJyc1sxXSk7XG59O1xuXG5jb25zdCBsZXNzVGhhbk9yRXF1YWwgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKG5icnNbMF0gPD0gbmJyc1sxXSk7XG59O1xuXG5jb25zdCBsaWZ0ID0gZnVuY3Rpb24oZm5PbkpzVmFsdWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZUxpc3QpIHtcbiAgICByZXR1cm4gZm5PbkpzVmFsdWVzLmFwcGx5KG51bGwsICh0b0FycmF5KGVybFZhbHVlTGlzdCkpLm1hcChleHRyYWN0SnNWYWx1ZSkpO1xuICB9O1xufTtcblxuY29uc3QgbWF4ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKE1hdGgubWF4LmFwcGx5KE1hdGgsIG5icnMpKTtcbn07XG5cbmNvbnN0IG1pbiA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihNYXRoLm1pbi5hcHBseShNYXRoLCBuYnJzKSk7XG59O1xuXG5jb25zdCBtb2QgPSBmdW5jdGlvbihuYnIwLCBuYnIxKSB7XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIobmJyMCAlIG5icjEpO1xufTtcblxuY29uc3QgbXVsdGlwbHkgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIobmJycy5yZWR1Y2UoZnVuY3Rpb24oeCwgbmJyKSB7XG4gICAgcmV0dXJuIHggKj0gbmJyO1xuICB9KSk7XG59O1xuXG5jb25zdCBuZWdhdGUgPSBmdW5jdGlvbihuYnIpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcigtMSAqIG5icik7XG59O1xuXG5jb25zdCBwYXJzZU51bWJlciA9IGZ1bmN0aW9uKGpzVmFsKSB7XG4gIGlmIChpc0pzTnVtYmVyKGpzVmFsKSkge1xuICAgIHJldHVybiBqc1ZhbDtcbiAgfVxuICBpZiAoIWlzSnNTdHJpbmcoanNWYWwpKSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxuICBjb25zdCBqc05iciA9IHBhcnNlRmxvYXQoc3RyaXBRdW90ZXMoanNWYWwpLCAxMCk7XG4gIGlmIChpc0pzTmFOKGpzTmJyKSkge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihqc05icik7XG4gIH1cbn07XG5cbmNvbnN0IHNldENvcmVGbnNPbkpzVmFsdWVzQmFuZyA9IGZ1bmN0aW9uKGVudiwgZm5zKSB7XG4gIGNvbnN0IF9yZXN1bHRzID0gW107XG4gIGZvciAobGV0IGZuTmFtZSBpbiBmbnMpIHtcbiAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGZucywgZm5OYW1lKSkgY29udGludWU7XG4gICAgY29uc3QgZm4gPSBmbnNbZm5OYW1lXTtcbiAgICBlbnZbZm5OYW1lXSA9IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24obGlmdChmbikpO1xuICAgIF9yZXN1bHRzLnB1c2goZW52W2ZuTmFtZV0pO1xuICB9XG4gIHJldHVybiBfcmVzdWx0cztcbn07XG5cbmNvbnN0IHN1YnRyYWN0ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKG5icnMucmVkdWNlKGZ1bmN0aW9uKHgsIG5icikge1xuICAgIHJldHVybiB4IC09IG5icjtcbiAgfSkpO1xufTtcblxuY29uc3QgdmFscyA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gIGNvbnN0IHZhbHVlcyA9IFtdO1xuICBmb3IgKGxldCBrZXkgaW4gaW5kZXgpIHtcbiAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGluZGV4LCBrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSBpbmRleFtrZXldO1xuICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZnJvbUFycmF5KHZhbHVlcyk7XG59O1xuXG5jb25zdCBmdW5jdGlvbnNPbkpzVmFsdWVzID0ge1xuICAnKyc6IGFkZCxcbiAgJ2NvbnRhaW5zPyc6IGNvbnRhaW5zLFxuICAnZGlzc29jJzogZGlzc29jLFxuICAnLyc6IGRpdmlkZSxcbiAgJyoqJzogZXhwb25lbnRpYXRlLFxuICAnZ2V0JzogZ2V0LFxuICAnPic6IGdyZWF0ZXJUaGFuLFxuICAnPj0nOiBncmVhdGVyVGhhbk9yRXF1YWwsXG4gICdpbmRleCc6IGluZGV4LFxuICAna2V5cyc6IGtleXMsXG4gICdsZW5ndGgtc3RyaW5nJzogbGVuZ3RoU3RyaW5nLFxuICAnbWF4JzogbWF4LFxuICAnbWluJzogbWluLFxuICAnPCc6IGxlc3NUaGFuLFxuICAnPD0nOiBsZXNzVGhhbk9yRXF1YWwsXG4gICclJzogbW9kLFxuICAnKic6IG11bHRpcGx5LFxuICAnbmVnYXRlJzogbmVnYXRlLFxuICAncGFyc2UtbnVtYmVyJzogcGFyc2VOdW1iZXIsXG4gICctJzogc3VidHJhY3QsXG4gICd2YWxzJzogdmFsc1xufTtcblxuZXhwb3J0IHsgZ2V0RW52aXJvbm1lbnQgfTtcbiIsImltcG9ydCB7IGFyZUVxdWFsIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBjYXIgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGNkciB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgY2lyY3VtcGVuZFF1b3RlcyB9IGZyb20gJy4vanMtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNvbmNhdCB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgY3JlYXRlRXJsQXRvbSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsQm9vbGVhbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybExpc3QgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybE51bWJlciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3RyaW5nIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxTeW1ib2wgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGRyb3AgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGVybEZhbHNlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBlcmxJZ25vcmUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGVybE5pbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXJsVHJ1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXh0cmFjdEpzVmFsdWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGZyb21BcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgaW50ZXJwcmV0IH0gZnJvbSAnLi9pbnRlcnByZXQnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgaXNFcmxBdG9tIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsQm9vbGVhbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxGYWxzZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybE1hY3JvIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybE5pbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxOdW1iZXIgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsU3RyaW5nIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybFN5bWJvbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxUcnVlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybFVzZXJQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGxhc3QgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IG5leHQgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHJlY3Vyc2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHJlZHVjZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgcmV2ZXJzZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSAnLi9zZXJpYWxpemUnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgdG9QYXJ0aWFsQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcblxuY29uc3QgX19zbGljZSAgID0gW10uc2xpY2U7XG5jb25zdCBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuY29uc3QgYXBwZW5kID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBlcmxBcmdzQXJyYXkgPSB0b0FycmF5KGVybEFyZ3MpO1xuICBjb25zdCBlcmxMaXN0ID0gZXJsQXJnc0FycmF5WzBdO1xuICBjb25zdCBlcmxWYWx1ZXMgPSAyIDw9IGVybEFyZ3NBcnJheS5sZW5ndGggPyBfX3NsaWNlLmNhbGwoZXJsQXJnc0FycmF5LCAxKSA6IFtdO1xuICByZXR1cm4gY29uY2F0KGVybExpc3QsIGZyb21BcnJheShlcmxWYWx1ZXMpKTtcbn07XG5cbmNvbnN0IF9hcmVFcXVhbCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIGNvbnN0IGVybFZhbHVlMCA9IHBhcnRpYWxBcnJheVswXTtcbiAgY29uc3QgZXJsVmFsdWUxID0gcGFydGlhbEFycmF5WzFdO1xuICBjb25zdCBfX2FyZUVxdWFsID0gZnVuY3Rpb24oZXJsVmFsdWUwLCBlcmxWYWx1ZTEpIHtcbiAgICBpZiAoaXNFcmxMaXN0KGVybFZhbHVlMCkgJiYgaXNFcmxMaXN0KGVybFZhbHVlMSkpIHtcbiAgICAgIHJldHVybiBhcmVFcXVhbChlcmxWYWx1ZTAsIGVybFZhbHVlMSwgX19hcmVFcXVhbCk7XG4gICAgfSBlbHNlIGlmIChpc0VybEluZGV4KGVybFZhbHVlMCkgJiYgaXNFcmxJbmRleChlcmxWYWx1ZTEpKSB7XG4gICAgICBjb25zdCBqc0luZGV4MCA9IGVybFZhbHVlMC5qc1ZhbHVlO1xuICAgICAgY29uc3QganNJbmRleDEgPSBlcmxWYWx1ZTEuanNWYWx1ZTtcbiAgICAgIHJldHVybiAoX19hcmVFcXVhbChrZXlzKGpzSW5kZXgwKSwga2V5cyhqc0luZGV4MSkpKVxuICAgICAgICAmJiAoX19hcmVFcXVhbCh2YWxzKGpzSW5kZXgwKSwgdmFscyhqc0luZGV4MSkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVybFZhbHVlMC5qc1ZhbHVlID09PSBlcmxWYWx1ZTEuanNWYWx1ZTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKF9fYXJlRXF1YWwoZXJsVmFsdWUwLCBlcmxWYWx1ZTEpKTtcbn07XG5cbmNvbnN0IGFzc29jID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBsZXQgYXJncztcbiAgY29uc3QganNJbmRleCA9IGV4dHJhY3RKc1ZhbHVlKGNhcihlcmxBcmdzKSk7XG4gIGFyZ3MgPSBjZHIoZXJsQXJncyk7XG4gIGNvbnN0IGNvcHkgPSB7fTtcbiAgZm9yIChsZXQga2V5IGluIGpzSW5kZXgpIHtcbiAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGpzSW5kZXgsIGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IGpzSW5kZXhba2V5XTtcbiAgICBjb3B5W2tleV0gPSB2YWx1ZTtcbiAgfVxuICB3aGlsZSAoIWlzRW1wdHkoYXJncykpIHtcbiAgICBjb25zdCBrID0gY2FyKGFyZ3MpO1xuICAgIGNvbnN0IHYgPSBuZXh0KGFyZ3MpO1xuICAgIGFyZ3MgPSByZWN1cnNlKHJlY3Vyc2UoYXJncykpO1xuICAgIGNvcHlbZXh0cmFjdEpzVmFsdWUoayldID0gdjtcbiAgfVxuICByZXR1cm4gY3JlYXRlRXJsSW5kZXgoY29weSk7XG59O1xuXG5jb25zdCBhdG9tID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY3JlYXRlRXJsQXRvbShjYXIoZXJsQXJncykpO1xufTtcblxuY29uc3QgX2NhciA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgYXJnID0gY2FyKGVybEFyZ3MpO1xuICBpZiAoaXNFcmxMaXN0KGFyZykpIHtcbiAgICByZXR1cm4gY2FyKGFyZyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxuY29uc3QgX2NkciA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgYXJnID0gY2FyKGVybEFyZ3MpO1xuICBpZiAoaXNFcmxMaXN0KGFyZykpIHtcbiAgICByZXR1cm4gY2RyKGFyZyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxuY29uc3QgX2NvbmNhdCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgZXJsTGlzdHMgPSB0b0FycmF5KGVybEFyZ3MpO1xuICByZXR1cm4gY29uY2F0LmFwcGx5KG51bGwsIGVybExpc3RzKTtcbn07XG5cbmNvbnN0IGNvbnMgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBjcmVhdGVFcmxMaXN0KGNhcihlcmxBcmdzKSwgbmV4dChlcmxBcmdzKSk7XG59O1xuXG5jb25zdCBjb3VudCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgZXJsTGlzdCA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKCFpc0VybExpc3QoZXJsTGlzdCkpIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG4gIGNvbnN0IF9yZWR1Y2UgPSBmdW5jdGlvbihzdW0sIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN1bSArIDE7XG4gIH07XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIocmVkdWNlKDAsIF9yZWR1Y2UsIGNhcihlcmxBcmdzKSkpO1xufTtcblxuY29uc3QgY3JlYXRlUHJlZGljYXRlID0gZnVuY3Rpb24ocHJlZCkge1xuICByZXR1cm4gZnVuY3Rpb24oanNMaXN0KSB7XG4gICAgY29uc3QgZXJsVmFsdWUgPSBqc0xpc3QudmFsdWU7XG4gICAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4ocHJlZChlcmxWYWx1ZSkpO1xuICB9O1xufTtcblxuY29uc3QgZGVyZWYgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiAoY2FyKGVybEFyZ3MpKS5lcmxWYWx1ZTtcbn07XG5cbmNvbnN0IF9kcm9wID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgY29uc3QgZXJsTnVtYmVyID0gcGFydGlhbEFycmF5WzBdO1xuICBjb25zdCBlcmxMaXN0ID0gcGFydGlhbEFycmF5WzFdO1xuICByZXR1cm4gZHJvcChleHRyYWN0SnNWYWx1ZShlcmxOdW1iZXIpLCBlcmxMaXN0KTtcbn07XG5cbmNvbnN0IGZpcnN0ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY2FyKGNhcihlcmxBcmdzKSk7XG59O1xuXG5jb25zdCBnZXRFbnZpcm9ubWVudCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICBjb25zdCBlbnZpcm9ubWVudCA9IGNvbmZpZy5lbnZpcm9ubWVudDtcbiAgc2V0Q29yZUZuc09uRXJsVmFsdWVzKGVudmlyb25tZW50LCBmdW5jdGlvbnNPbkVybFZhbHVlcyk7XG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn07XG5cbmNvbnN0IGhhc1Byb2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJztcbn1cblxuY29uc3QgaGFzUHJvY2Vzc1dlYnBhY2tTaGltID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybihwcm9jZXNzLnRpdGxlID09PSAnYnJvd3NlcicgJiYgcHJvY2Vzcy5icm93c2VyKTtcbn1cblxuY29uc3QgaWdub3JlID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gZXJsSWdub3JlO1xufTtcblxuY29uc3QgaWdub3JlSWZUcnVlID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgY29uc3QgZXJsQm9vbCA9IHBhcnRpYWxBcnJheVswXTtcbiAgY29uc3QgZXJsVmFsdWUgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIGlmIChleHRyYWN0SnNWYWx1ZShlcmxCb29sKSkge1xuICAgIHJldHVybiBlcmxJZ25vcmU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybFZhbHVlO1xuICB9XG59O1xuXG5jb25zdCBpZ25vcmVVbmxlc3NUcnVlID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgY29uc3QgZXJsQm9vbCA9IHBhcnRpYWxBcnJheVswXTtcbiAgY29uc3QgZXJsVmFsdWUgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIGlmIChleHRyYWN0SnNWYWx1ZShlcmxCb29sKSkge1xuICAgIHJldHVybiBlcmxWYWx1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsSWdub3JlO1xuICB9XG59O1xuXG5jb25zdCBfaW50ZXJwcmV0ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gaW50ZXJwcmV0KHN0cmlwUXVvdGVzKGV4dHJhY3RKc1ZhbHVlKGNhcihlcmxBcmdzKSkpKTtcbn07XG5cbmNvbnN0IF9pc0VtcHR5ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBpZiAoaXNFbXB0eShlcmxBcmdzKSkge1xuICAgIHJldHVybiBlcmxGYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoaXNFbXB0eShjYXIoZXJsQXJncykpKSB7XG4gICAgICByZXR1cm4gZXJsVHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVybEZhbHNlO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKGpzTGlzdCkge1xuICBjb25zdCBlcmxWYWx1ZSA9IGpzTGlzdC52YWx1ZTtcbiAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4oaXNFcmxDb3JlUHVyZUZ1bmN0aW9uKGVybFZhbHVlKVxuICAgIHx8IGlzRXJsVXNlclB1cmVGdW5jdGlvbihlcmxWYWx1ZSkpO1xufTtcblxuY29uc3QgaXNOb2RlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBoYXNQcm9jZXNzKCkgJiYgIWhhc1Byb2Nlc3NXZWJwYWNrU2hpbSgpO1xufVxuXG5jb25zdCBfbGFzdCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgYXJnID0gY2FyKGVybEFyZ3MpO1xuICBpZiAoaXNFcmxMaXN0KGFyZykpIHtcbiAgICByZXR1cm4gbGFzdChhcmcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbmNvbnN0IGxpc3QgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBlcmxBcmdzO1xufTtcblxuY29uc3QgbWV0YSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgZXJsTWV0YSA9IChjYXIoZXJsQXJncykpLm1ldGE7XG4gIGlmIChlcmxNZXRhICE9IG51bGwpIHtcbiAgICByZXR1cm4gZXJsTWV0YTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG5jb25zdCBfbm90ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBlcmxWYWwgPSBjYXIoZXJsQXJncyk7XG4gIGlmIChpc0VybE5pbChlcmxWYWwpIHx8IGlzRXJsRmFsc2UoZXJsVmFsKSkge1xuICAgIHJldHVybiBlcmxUcnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxGYWxzZTtcbiAgfVxufTtcblxuY29uc3QgbnRoID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgY29uc3QgZXJsTnVtYmVyID0gcGFydGlhbEFycmF5WzBdO1xuICBsZXQgZXJsTGlzdCA9IHBhcnRpYWxBcnJheVsxXTtcbiAgY29uc3QgdGFyZ2V0ID0gZXh0cmFjdEpzVmFsdWUoZXJsTnVtYmVyKTtcbiAgaWYgKHRhcmdldCA+PSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJnZXQ7IGkrKykge1xuICAgICAgZXJsTGlzdCA9IGNkcihlcmxMaXN0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPiB0YXJnZXQ7IGktLSkge1xuICAgICAgZXJsTGlzdCA9IGNkcihlcmxMaXN0KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNhcihlcmxMaXN0KTtcbn07XG5cbmNvbnN0IHByZXBlbmQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGVybEFyZ3NBcnJheSA9IHRvQXJyYXkoZXJsQXJncyk7XG4gIGNvbnN0IGVybExpc3QgPSBlcmxBcmdzQXJyYXlbMF07XG4gIGNvbnN0IGVybFZhbHVlcyA9IDIgPD0gZXJsQXJnc0FycmF5Lmxlbmd0aCA/IF9fc2xpY2UuY2FsbChlcmxBcmdzQXJyYXksIDEpIDogW107XG4gIGNvbnN0IF9yZWR1Y2UgPSBmdW5jdGlvbihsaXN0LCB2YWwpIHtcbiAgICByZXR1cm4gY3JlYXRlRXJsTGlzdCh2YWwsIGxpc3QpO1xuICB9O1xuICByZXR1cm4gZXJsVmFsdWVzLnJlZHVjZShfcmVkdWNlLCBlcmxMaXN0KTtcbn07XG5cbmNvbnN0IF9wclN0ciA9IGZ1bmN0aW9uKGVybEFyZ3MsIHByaW50UmVhZGFibHkpIHtcbiAgcmV0dXJuICgodG9BcnJheShlcmxBcmdzKSkubWFwKGZ1bmN0aW9uKGVybEFyZykge1xuICAgIHJldHVybiBzZXJpYWxpemUoZXJsQXJnLCBwcmludFJlYWRhYmx5KTtcbiAgfSkpLmpvaW4oJycpO1xufTtcblxuY29uc3QgcHJldHR5U3RyaW5nID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY3JlYXRlRXJsU3RyaW5nKGNpcmN1bXBlbmRRdW90ZXMoX3ByU3RyKGVybEFyZ3MsIHRydWUpKSk7XG59O1xuXG5jb25zdCByZWFkID0gZnVuY3Rpb24oanNMaXN0KSB7XG4gIGlmIChpc05vZGUoKSkge1xuICAgIGNvbnN0IF9yZWFkID0gZnVuY3Rpb24oX2pzTGlzdCkge1xuICAgICAgY29uc3QganNGaWxlTmFtZSA9IHN0cmlwUXVvdGVzKGV4dHJhY3RKc1ZhbHVlKGNhcihfanNMaXN0KSkpO1xuICAgICAgLy9yZXR1cm4gcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoanNGaWxlTmFtZSkudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhfcmVhZChqc0xpc3QpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG5jb25zdCByZXNldCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIGNvbnN0IGF0b20gPSBwYXJ0aWFsQXJyYXlbMF07XG4gIGNvbnN0IHZhbHVlID0gcGFydGlhbEFycmF5WzFdO1xuICBhdG9tLmVybFZhbHVlID0gdmFsdWU7XG4gIHJldHVybiBhdG9tO1xufTtcblxuY29uc3QgcmVzdCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgYXJnID0gY2FyKGVybEFyZ3MpO1xuICBpZiAoaXNFcmxMaXN0KGFyZykpIHtcbiAgICByZXR1cm4gY2RyKGFyZyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxuY29uc3QgX3JldmVyc2UgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGFyZyA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKGlzRXJsTGlzdChhcmcpKSB7XG4gICAgcmV0dXJuIHJldmVyc2UoYXJnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG5jb25zdCBzZXQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDMsIGVybEFyZ3MpO1xuICBjb25zdCBpbmRleCA9IHBhcnRpYWxBcnJheVswXTtcbiAgY29uc3Qga2V5ID0gcGFydGlhbEFycmF5WzFdO1xuICBjb25zdCB2YWwgPSBwYXJ0aWFsQXJyYXlbMl07XG4gIChleHRyYWN0SnNWYWx1ZShpbmRleCkpW2V4dHJhY3RKc1ZhbHVlKGtleSldID0gdmFsO1xuICByZXR1cm4gaW5kZXg7XG59O1xuXG5jb25zdCBzZXRDb3JlRm5zT25FcmxWYWx1ZXMgPSBmdW5jdGlvbihlbnYsIGZucykge1xuICBjb25zdCBfcmVzdWx0cyA9IFtdO1xuICBmb3IgKGxldCBmbk5hbWUgaW4gZm5zKSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChmbnMsIGZuTmFtZSkpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGZuID0gZm5zW2ZuTmFtZV07XG4gICAgX3Jlc3VsdHMucHVzaChlbnZbZm5OYW1lXSA9IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24oZm4pKTtcbiAgfVxuICByZXR1cm4gX3Jlc3VsdHM7XG59O1xuXG5jb25zdCBzbHVycCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgaWYgKGlzTm9kZSgpKSB7XG4gICAgY29uc3QganNGaWxlTmFtZSA9IHN0cmlwUXVvdGVzKGV4dHJhY3RKc1ZhbHVlKGNhcihlcmxBcmdzKSkpO1xuICAgIC8vY29uc3QgX2ZzXyA9IHJlcXVpcmUoJ2ZzJyk7XG4gICAgLy9yZXR1cm4gY3JlYXRlRXJsU3RyaW5nKGNpcmN1bXBlbmRRdW90ZXMoX2ZzXy5yZWFkRmlsZVN5bmMoanNGaWxlTmFtZSkudG9TdHJpbmcoKSkpO1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbmNvbnN0IHN0cmluZyA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhjaXJjdW1wZW5kUXVvdGVzKF9wclN0cihlcmxBcmdzLCBmYWxzZSkpKTtcbn07XG5cbmNvbnN0IHN0cmlwUXVvdGVzID0gZnVuY3Rpb24oanNTdHJpbmcpIHtcbiAgcmV0dXJuIGpzU3RyaW5nLnNsaWNlKDEsIC0xKTtcbn07XG5cbmNvbnN0IHN5bWJvbCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgZXJsVmFsdWUgPSBjYXIoZXJsQXJncyk7XG4gIGlmIChpc0VybFN0cmluZyhlcmxWYWx1ZSkpIHtcbiAgICBjb25zdCBqc1N0ciA9IGV4dHJhY3RKc1ZhbHVlKGVybFZhbHVlKTtcbiAgICByZXR1cm4gY3JlYXRlRXJsU3ltYm9sKGpzU3RyLnNsaWNlKDEsIC0xKSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxuY29uc3QgX3Rha2UgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEFyZ3MpO1xuICBjb25zdCBlcmxOdW1iZXIgPSBwYXJ0aWFsQXJyYXlbMF07XG4gIGNvbnN0IGVybExpc3QgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIHJldHVybiB0YWtlKGV4dHJhY3RKc1ZhbHVlKGVybE51bWJlciksIGVybExpc3QpO1xufTtcblxuY29uc3QgdHlwZU9mID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBlcmxWYWx1ZSA9IGNhcihlcmxBcmdzKTtcbiAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhjaXJjdW1wZW5kUXVvdGVzKGVybFZhbHVlLnR5cGUpKTtcbn07XG5cbmNvbnN0IF90aHJvdyA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdGhyb3cgY2FyKGVybEFyZ3MpO1xufTtcblxuY29uc3QgdGltZU1zID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xufTtcblxuY29uc3Qgd2l0aE1ldGEgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEFyZ3MpO1xuICBjb25zdCBlcmxWYWwgPSBwYXJ0aWFsQXJyYXlbMF07XG4gIGNvbnN0IGVybE1ldGEgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIGlmIChpc0VybEF0b20oZXJsVmFsKSkge1xuICAgIGNvbnN0IGVybFZhbHVlID0gZXJsVmFsLmVybFZhbHVlO1xuICAgIGNvbnN0IHR5cGUgPSBlcmxWYWwudHlwZTtcbiAgICByZXR1cm4ge1xuICAgICAgZXJsVmFsdWU6IGVybFZhbHVlLFxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIG1ldGE6IGVybE1ldGFcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGpzVmFsdWUgPSBlcmxWYWwuanNWYWx1ZTtcbiAgICBjb25zdCB0eXBlID0gZXJsVmFsLnR5cGU7XG4gICAgcmV0dXJuIHtcbiAgICAgIGpzVmFsdWU6IGpzVmFsdWUsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgbWV0YTogZXJsTWV0YVxuICAgIH07XG4gIH1cbn07XG5cbmNvbnN0IHdyaXRlID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY3JlYXRlRXJsU3RyaW5nKHNlcmlhbGl6ZShjYXIoZXJsQXJncykpKTtcbn07XG5cbmNvbnN0IHByZWRpY2F0ZXMgPSBbXG4gIGlzRXJsQXRvbSxcbiAgaXNFcmxCb29sZWFuLFxuICBpc0VybENvcmVQdXJlRnVuY3Rpb24sXG4gIGlzRXJsRmFsc2UsXG4gIGlzRXJsTGlzdCxcbiAgaXNFcmxNYWNybyxcbiAgaXNFcmxOaWwsXG4gIGlzRXJsTnVtYmVyLFxuICBpc0VybFN5bWJvbCxcbiAgaXNFcmxTdHJpbmcsXG4gIGlzRXJsVXNlclB1cmVGdW5jdGlvbixcbiAgaXNFcmxUcnVlXG5dLm1hcChjcmVhdGVQcmVkaWNhdGUpO1xuXG5jb25zdCBpc0F0b20gICAgPSBwcmVkaWNhdGVzWzBdO1xuY29uc3QgaXNCb29sZWFuID0gcHJlZGljYXRlc1sxXTtcbmNvbnN0IGlzQ29yZUZuICA9IHByZWRpY2F0ZXNbMl07XG5jb25zdCBpc0ZhbHNlICAgPSBwcmVkaWNhdGVzWzNdO1xuY29uc3QgaXNMaXN0ICAgID0gcHJlZGljYXRlc1s0XTtcbmNvbnN0IGlzTWFjcm8gICA9IHByZWRpY2F0ZXNbNV07XG5jb25zdCBpc05pbCAgICAgPSBwcmVkaWNhdGVzWzZdO1xuY29uc3QgaXNOdW1iZXIgID0gcHJlZGljYXRlc1s3XTtcbmNvbnN0IGlzU3ltYm9sICA9IHByZWRpY2F0ZXNbOF07XG5jb25zdCBpc1N0cmluZyAgPSBwcmVkaWNhdGVzWzldO1xuY29uc3QgaXNVc2VyRm4gID0gcHJlZGljYXRlc1sxMF07XG5jb25zdCBpc1RydWUgICAgPSBwcmVkaWNhdGVzWzExXTtcblxuY29uc3QgZnVuY3Rpb25zT25FcmxWYWx1ZXMgPSB7XG4gICc9JzogX2FyZUVxdWFsLFxuICAnYXBwZW5kJzogYXBwZW5kLFxuICAnYXNzb2MnOiBhc3NvYyxcbiAgJ2F0b20nOiBhdG9tLFxuICAnYXRvbT8nOiBpc0F0b20sXG4gICdib29sZWFuPyc6IGlzQm9vbGVhbixcbiAgJ2Nhcic6IF9jYXIsXG4gICdjZHInOiBfY2RyLFxuICAnY29ucyc6IGNvbnMsXG4gICdjb25jYXQnOiBfY29uY2F0LFxuICAnY29yZS1mbj8nOiBpc0NvcmVGbixcbiAgJ2NvdW50JzogY291bnQsXG4gICdkZXJlZic6IGRlcmVmLFxuICAnZHJvcCc6IF9kcm9wLFxuICAnZW1wdHk/JzogX2lzRW1wdHksXG4gICdmaXJzdCc6IF9jYXIsXG4gICdmYWxzZT8nOiBpc0ZhbHNlLFxuICAnZnVuY3Rpb24/JzogaXNGdW5jdGlvbixcbiAgJ2lnbm9yZSEnOiBpZ25vcmUsXG4gICdpZ25vcmVJZlRydWUnOiBpZ25vcmVJZlRydWUsXG4gICdpZ25vcmVVbmxlc3NUcnVlJzogaWdub3JlVW5sZXNzVHJ1ZSxcbiAgJ2xhc3QnOiBfbGFzdCxcbiAgJ2xpc3QnOiBsaXN0LFxuICAnbGlzdD8nOiBpc0xpc3QsXG4gICdtYWNybz8nOiBpc01hY3JvLFxuICAnbWV0YSc6IG1ldGEsXG4gICduaWw/JzogaXNOaWwsXG4gICdub3QnOiBfbm90LFxuICAnbnRoJzogbnRoLFxuICAnbnVtYmVyPyc6IGlzTnVtYmVyLFxuICAncGFyc2UnOiBfaW50ZXJwcmV0LFxuICAncHJlcGVuZCc6IHByZXBlbmQsXG4gICdwcmV0dHktc3RyaW5nJzogcHJldHR5U3RyaW5nLFxuICAncmVzdCc6IF9jZHIsXG4gICdyZXZlcnNlJzogX3JldmVyc2UsXG4gICdzdHJpbmcnOiBzdHJpbmcsXG4gICdzdHJpbmc/JzogaXNTdHJpbmcsXG4gICdzeW1ib2wnOiBzeW1ib2wsXG4gICdzeW1ib2w/JzogaXNTeW1ib2wsXG4gICd0YWtlJzogX3Rha2UsXG4gICd0aHJvdyc6IF90aHJvdyxcbiAgJ3RydWU/JzogaXNUcnVlLFxuICAndHlwZW9mJzogdHlwZU9mLFxuICAndXNlci1mbj8nOiBpc1VzZXJGbixcbiAgJ3JlYWQnOiByZWFkLFxuICAncmVzZXQhJzogcmVzZXQsXG4gICdzZXQhJzogc2V0LFxuICAnc2x1cnAnOiBzbHVycCxcbiAgJ3RpbWUtbXMnOiB0aW1lTXMsXG4gICd3aXRoLW1ldGEnOiB3aXRoTWV0YSxcbiAgJ3dyaXRlJzogd3JpdGVcbn07XG5cbmV4cG9ydCB7IGdldEVudmlyb25tZW50IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybExpc3QgfSAgICAgICAgICAgICAgICAgIGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3RyaW5nIH0gICAgICAgICAgICAgICAgZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBzZXJpYWxpemUgfSAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL3NlcmlhbGl6ZSc7XG5pbXBvcnQgeyB0b0FycmF5IH0gICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL2xpbmtlZC1saXN0JztcblxuY29uc3QgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbmNvbnN0IGdldEVudmlyb25tZW50ID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gIGNvbnN0IGRpc3BsYXkgPSBjb25maWcuZGlzcGxheTtcbiAgY29uc3QgZW52aXJvbm1lbnQgPSBjb25maWcuZW52aXJvbm1lbnQ7XG4gIHNldENvcmVFZmZlY3RmdWxGbnNPbkVybFZhbHVlcyhkaXNwbGF5KShlbnZpcm9ubWVudCwgZGlzcGxheUVmZmVjdHNPbkVybFZhbHVlcyk7XG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn07XG5cbmNvbnN0IGhhc1Byb2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJztcbn1cblxuY29uc3QgaGFzUHJvY2Vzc1dlYnBhY2tTaGltID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybihwcm9jZXNzLnRpdGxlID09PSAnYnJvd3NlcicgJiYgcHJvY2Vzcy5icm93c2VyKTtcbn1cblxuY29uc3QgaXNOb2RlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBoYXNQcm9jZXNzKCkgJiYgIWhhc1Byb2Nlc3NXZWJwYWNrU2hpbSgpO1xufVxuXG5jb25zdCBfcHJTdHIgPSBmdW5jdGlvbihlcmxBcmdzLCBzaG91bGRCZVJlYWRhYmxlKSB7XG4gIHJldHVybiAoKHRvQXJyYXkoZXJsQXJncykpLm1hcChmdW5jdGlvbihlcmxBcmcpIHtcbiAgICByZXR1cm4gc2VyaWFsaXplKGVybEFyZywgc2hvdWxkQmVSZWFkYWJsZSk7XG4gIH0pKS5qb2luKCcnKTtcbn07XG5cbmNvbnN0IF9xdWl0XyA9IGZ1bmN0aW9uKCkge1xuICBpZiAoaXNOb2RlKCkpIHtcbiAgICByZXR1cm4gcHJvY2Vzcy5leGl0KDApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBfcHJTdHIoXG4gICAgICBjcmVhdGVFcmxMaXN0KFxuICAgICAgICBjcmVhdGVFcmxTdHJpbmcoXG4gICAgICAgICAgXCJcXFwiJ0VybGvDtm5pZyBMaXNwIENvbnNvbGUnIGlzIG5vdCBwZXJtaXR0ZWQgdG8gY2xvc2UgdGhpcyB3aW5kb3cuXFxcIlwiKSksXG4gICAgICAgICAgZmFsc2UpO1xuICB9XG59O1xuXG5jb25zdCBzZXRDb3JlRWZmZWN0ZnVsRm5zT25FcmxWYWx1ZXMgPSBmdW5jdGlvbihyZXByZXNlbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGVudiwgZm5zKSB7XG4gICAgY29uc3QgX3Jlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGxldCBmbk5hbWUgaW4gZm5zKSB7XG4gICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGZucywgZm5OYW1lKSkgY29udGludWU7XG4gICAgICBjb25zdCBmbiA9IGZuc1tmbk5hbWVdO1xuICAgICAgZW52W2ZuTmFtZV0gPSBjcmVhdGVFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24oZnVuY3Rpb24oZXJsQXJncykge1xuICAgICAgICByZXR1cm4gcmVwcmVzZW50KGZuKGVybEFyZ3MpKTtcbiAgICAgIH0pO1xuICAgICAgX3Jlc3VsdHMucHVzaChlbnZbZm5OYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBfcmVzdWx0cztcbiAgfTtcbn07XG5cbmNvbnN0IGRpc3BsYXlFZmZlY3RzT25FcmxWYWx1ZXMgPSB7XG4gICdwcmludCc6IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgICByZXR1cm4gX3ByU3RyKGVybEFyZ3MsIGZhbHNlKTtcbiAgfSxcbiAgJ3ByZXR0eS1wcmludCc6IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgICByZXR1cm4gX3ByU3RyKGVybEFyZ3MsIHRydWUpO1xuICB9LFxuICAnLXF1aXQtJzogX3F1aXRfLFxufTtcblxuZXhwb3J0IHsgZ2V0RW52aXJvbm1lbnQgfTtcbiIsImltcG9ydCB7IGNhciB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTGlzdCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3ltYm9sIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBleHRyYWN0SnNWYWx1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZnJvbUFycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBmcm9tRXJsSW5kZXggfSBmcm9tICcuL2luZGV4LXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybExpc3QgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IF9wcm9jZXNzIH0gZnJvbSAnLi9fcHJvY2Vzcyc7XG5pbXBvcnQgeyB0b0FycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyB0b2tlbml6ZUFuZFBhcnNlIH0gZnJvbSAnLi90b2tlbml6ZUFuZFBhcnNlJztcbmltcG9ydCB7IHRvUGFydGlhbEFycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5cbmNvbnN0IF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5jb25zdCBnZXRFbnZpcm9ubWVudCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICBjb25zdCBlbnZpcm9ubWVudCA9IGNvbmZpZy5lbnZpcm9ubWVudDtcbiAgY29uc3QgcGFyc2UgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gICAgcmV0dXJuIHRva2VuaXplQW5kUGFyc2Uoc3RyaXBRdW90ZXMoZXh0cmFjdEpzVmFsdWUoY2FyKGVybEFyZ3MpKSkpO1xuICB9O1xuICBjb25zdCBmdW5jdGlvbnNPbkVybFZhbHVlcyA9IHsgcGFyc2U6IHBhcnNlIH07XG4gIHNldENvcmVGbnNPbkVybFZhbHVlcyhlbnZpcm9ubWVudCwgZnVuY3Rpb25zT25FcmxWYWx1ZXMpO1xuICByZXR1cm4gZW52aXJvbm1lbnQ7XG59O1xuXG5jb25zdCBfcHJvY2Vzc18gPSBfcHJvY2VzcyhmdW5jdGlvbihlcmxWYWwpIHtcbiAgcmV0dXJuIGVybFZhbDtcbn0pO1xuXG5jb25zdCBzZXRDb3JlRm5zT25FcmxWYWx1ZXMgPSBmdW5jdGlvbihlbnYsIGZucykge1xuICBjb25zdCBfcmVzdWx0cyA9IFtdO1xuICBmb3IgKGxldCBmbk5hbWUgaW4gZm5zKSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChmbnMsIGZuTmFtZSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCBmbiA9IGZuc1tmbk5hbWVdO1xuICAgIF9yZXN1bHRzLnB1c2goZW52W2ZuTmFtZV0gPSBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uKGZuKSk7XG4gIH1cbiAgcmV0dXJuIF9yZXN1bHRzO1xufTtcblxuY29uc3Qgc3RyaXBRdW90ZXMgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4ganNTdHJpbmcuc2xpY2UoMSwgLTEpO1xufTtcblxuZXhwb3J0IHsgZ2V0RW52aXJvbm1lbnQgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGVybE5pbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXh0cmFjdEpzVmFsdWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGZyb21FcmxJbmRleCB9IGZyb20gJy4vaW5kZXgtdXRpbGl0aWVzJztcbmltcG9ydCB7IF9wcm9jZXNzIH0gZnJvbSAnLi9fcHJvY2Vzcyc7XG5pbXBvcnQgeyB0b1BhcnRpYWxBcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuXG5jb25zdCBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuY29uc3QgZ2V0RW52aXJvbm1lbnQgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgY29uc3QgZW52aXJvbm1lbnQgPSBjb25maWcuZW52aXJvbm1lbnQ7XG4gIGNvbnN0IGZ1bmN0aW9uc09uRXJsVmFsdWVzID0ge1xuICAgICdsb2FkJzogbG9hZCxcbiAgICAnbG9hZC13aXRoLWVudic6IGxvYWRXaXRoRW52LFxuICAgICdsb2FkLXdpdGgtYmFyZS1lbnYnOiBsb2FkV2l0aEJhcmVFbnZcbiAgfTtcbiAgc2V0Q29yZUZuc09uRXJsVmFsdWVzKGVudmlyb25tZW50LCBmdW5jdGlvbnNPbkVybFZhbHVlcyk7XG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn07XG5cbmNvbnN0IGdldF9qc0ZpbGVOYW1lX2FuZF9sb2NhbEVudiA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIGNvbnN0IGVybEZpbGVOYW1lID0gcGFydGlhbEFycmF5WzBdO1xuICBjb25zdCBsb2NhbEVudiA9IHBhcnRpYWxBcnJheVsxXTtcbiAgY29uc3QganNGaWxlTmFtZSA9IHN0cmlwUXVvdGVzKGV4dHJhY3RKc1ZhbHVlKGVybEZpbGVOYW1lKSk7XG4gIHJldHVybiBbanNGaWxlTmFtZSwgbG9jYWxFbnZdO1xufTtcblxuY29uc3QgaGFzUHJvY2VzcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnO1xufVxuXG5jb25zdCBoYXNQcm9jZXNzV2VicGFja1NoaW0gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuKHByb2Nlc3MudGl0bGUgPT09ICdicm93c2VyJyAmJiBwcm9jZXNzLmJyb3dzZXIpO1xufVxuXG5jb25zdCBpc05vZGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGhhc1Byb2Nlc3MoKSAmJiAhaGFzUHJvY2Vzc1dlYnBhY2tTaGltKCk7XG59XG5cbmNvbnN0IGxvYWQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGlmIChpc05vZGUoKSkge1xuICAgIHJldHVybiBfcHJvY2Vzc18oX3JlYWQoZXJsQXJncykpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbmNvbnN0IGxvYWRXaXRoQmFyZUVudiA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgaWYgKGlzTm9kZSgpKSB7XG4gICAgY29uc3QgdGVtcCA9IGdldF9qc0ZpbGVOYW1lX2FuZF9sb2NhbEVudihlcmxBcmdzKTtcbiAgICBjb25zdCBqc0ZpbGVOYW1lID0gdGVtcFswXTtcbiAgICBjb25zdCBsb2NhbEVudiA9IHRlbXBbMV07XG4gICAgcmV0dXJuIF9wcm9jZXNzRmlsZUFuZEVudihcbiAgICAgIHJlYWRGaWxlKGpzRmlsZU5hbWUpLFxuICAgICAgW2Zyb21FcmxJbmRleChsb2NhbEVudildKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG5jb25zdCBsb2FkV2l0aEVudiA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgaWYgKGlzTm9kZSgpKSB7XG4gICAgY29uc3QgdGVtcCA9IGdldF9qc0ZpbGVOYW1lX2FuZF9sb2NhbEVudihlcmxBcmdzKTtcbiAgICBjb25zdCBqc0ZpbGVOYW1lID0gdGVtcFswXTtcbiAgICBjb25zdCBsb2NhbEVudiA9IHRlbXBbMV07XG4gICAgcmV0dXJuIF9wcm9jZXNzRmlsZUFuZEVudihcbiAgICAgIHJlYWRGaWxlKGpzRmlsZU5hbWUpLFxuICAgICAgW2Zyb21FcmxJbmRleChsb2NhbEVudiksIGVudmlyb25tZW50XSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxuY29uc3QgX3Byb2Nlc3NfID0gZnVuY3Rpb24oanNTdHJpbmcpIHtcbiAgcmV0dXJuIF9wcm9jZXNzKFtlbnZpcm9ubWVudF0pKGpzU3RyaW5nKTtcbn07XG5cbmNvbnN0IF9wcm9jZXNzRmlsZUFuZEVudiA9IGZ1bmN0aW9uKGZpbGUsIGVudlN0YWNrKSB7XG4gIHJldHVybiBfcHJvY2VzcyhlbnZTdGFjaykoZmlsZSk7XG59O1xuXG5jb25zdCBfcmVhZCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QganNGaWxlTmFtZSA9IGdldF9qc0ZpbGVOYW1lX2FuZF9sb2NhbEVudihlcmxBcmdzKVswXTtcbiAgcmV0dXJuIHJlYWRGaWxlKGpzRmlsZU5hbWUpO1xufTtcblxuY29uc3QgcmVhZEZpbGUgPSBmdW5jdGlvbihqc0ZpbGVOYW1lKSB7XG4gIC8vcmV0dXJuIHJlcXVpcmUoJ2ZzJykucmVhZEZpbGVTeW5jKGpzRmlsZU5hbWUpLnRvU3RyaW5nKCk7XG4gIHJldHVybiBudWxsO1xufTtcblxuY29uc3Qgc2V0Q29yZUZuc09uRXJsVmFsdWVzID0gZnVuY3Rpb24oZW52LCBmbnMpIHtcbiAgY29uc3QgX3Jlc3VsdHMgPSBbXTtcbiAgZm9yIChsZXQgZm5OYW1lIGluIGZucykge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoZm5zLCBmbk5hbWUpKSBjb250aW51ZTtcbiAgICBjb25zdCBmbiA9IGZuc1tmbk5hbWVdO1xuICAgIF9yZXN1bHRzLnB1c2goZW52W2ZuTmFtZV0gPSBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uKGZuKSk7XG4gIH1cbiAgcmV0dXJuIF9yZXN1bHRzO1xufTtcblxuY29uc3Qgc3RyaXBRdW90ZXMgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4ganNTdHJpbmcuc2xpY2UoMSwgLTEpO1xufTtcblxuZXhwb3J0IHsgZ2V0RW52aXJvbm1lbnQgfTtcbiIsImltcG9ydCB7IGFkZEVudiB9IGZyb20gJy4vZW52LXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjYXIgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGNhdGNoU3RhciB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGNkciB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgY2lyY3VtcGVuZFF1b3RlcyB9IGZyb20gJy4vanMtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNvbW1lbnRTaWduYWwgfSBmcm9tICcuL2NvbW1lbnRTaWduYWwnO1xuaW1wb3J0IHsgY3JlYXRlRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybEtleXdvcmQgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybExpc3QgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybE1hY3JvIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxOdW1iZXIgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3ltYm9sIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxVc2VyUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBkZWZCYW5nIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgX2RvIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgZXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBfZXZhbCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IF9ldmFsV2l0aEVudiB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGV4cGFuZE1hY3JvIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgZXh0cmFjdEpzVmFsdWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgZm5TdGFyIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgZnJvbUFycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBmcm9tRXJsSW5kZXggfSBmcm9tICcuL2luZGV4LXV0aWxpdGllcyc7XG5pbXBvcnQgeyBmcm9tSnNPYmplY3RzIH0gZnJvbSAnLi9pbmRleC11dGlsaXRpZXMnO1xuaW1wb3J0IHsgX2dldEN1cnJlbnRFbnYgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBfZ2V0RGVmYXVsdEVudiB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGlzRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsSWdub3JlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybEluZGV4IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybEtleXdvcmQgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTGlzdCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxNYWNybyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxTeW1ib2wgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsVXNlclB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNKc1N0cmluZyB9IGZyb20gJy4vanMtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzS2V5d29yZCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGxldFN0YXIgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBsZXRyZWNTdGFyIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbG9va3VwIH0gZnJvbSAnLi9lbnYtdXRpbGl0aWVzJztcbmltcG9ydCB7IG1hY3JvU3RhciB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgbmV4dCB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgcXVhc2lxdW90ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHF1b3RlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgc3BsaWNlVW5xdW90ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHVucXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyByZWN1cnNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyByZWR1Y2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHJlZHVjZUJ5MiB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgcmV2ZXJzZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgc2V0TWFpbkVudiB9IGZyb20gJy4vZW52LXV0aWxpdGllcyc7XG5pbXBvcnQgeyBzcGxhdCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHRvUGFydGlhbEFycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyB0cnlTdGFyIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgdW5kZWZCYW5nIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgdW5zZXRNYWluRW52IH0gZnJvbSAnLi9lbnYtdXRpbGl0aWVzJztcblxuY29uc3QgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbmNvbnN0IGNyZWF0ZUZuID0gZnVuY3Rpb24oZXJsTGlzdCwgZW52cykge1xuICByZXR1cm4gY3JlYXRlRXJsVXNlclB1cmVGdW5jdGlvbih7XG4gICAgbG9jYWxFbnZzOiBlbnZzLnNsaWNlKDApLFxuICAgIGVybEV4cHJlc3Npb246IG5leHQoZXJsTGlzdCksXG4gICAgZXJsUGFyYW1ldGVyczogY2FyKGVybExpc3QpXG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlTG9jYWxFbnYgPSBmdW5jdGlvbihlcmxQYXJhbXMsIGVybEFyZ3MpIHtcbiAgY29uc3QgZW52ID0ge307XG4gIHdoaWxlICghaXNFbXB0eShlcmxQYXJhbXMpKSB7XG4gICAgY29uc3QganNQYXJhbSA9IGV4dHJhY3RKc1ZhbHVlKGNhcihlcmxQYXJhbXMpKTtcbiAgICBpZiAoanNQYXJhbSA9PT0gc3BsYXQpIHtcbiAgICAgIGVudltleHRyYWN0SnNWYWx1ZShuZXh0KGVybFBhcmFtcykpXSA9IGVybEFyZ3M7XG4gICAgICByZXR1cm4gZW52O1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnZbanNQYXJhbV0gPSBjYXIoZXJsQXJncyk7XG4gICAgICBlcmxQYXJhbXMgPSBjZHIoZXJsUGFyYW1zKTtcbiAgICAgIGVybEFyZ3MgPSBjZHIoZXJsQXJncyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBlbnY7XG59O1xuXG5jb25zdCBjcmVhdGVNYWNybyA9IGZ1bmN0aW9uKGVybExpc3QsIGVudnMpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybE1hY3JvKHtcbiAgICBsb2NhbEVudnM6IGVudnMuc2xpY2UoMCksXG4gICAgZXJsRXhwcmVzc2lvbjogbmV4dChlcmxMaXN0KSxcbiAgICBlcmxQYXJhbWV0ZXJzOiBjYXIoZXJsTGlzdClcbiAgfSk7XG59O1xuXG5jb25zdCBkZWZpbmVOZXdWYWx1ZSA9IGZ1bmN0aW9uKGVybExpc3QsIGVudnMsIGFkZFJlc3VsdCkge1xuICBjb25zdCBqc0tleSA9IGV4dHJhY3RKc1ZhbHVlKGNhcihlcmxMaXN0KSk7XG4gIGNvbnN0IGVybFZhbHVlID0gX2V2YWx1YXRlKG5leHQoZXJsTGlzdCksIGVudnMsIGFkZFJlc3VsdCk7XG4gIHJldHVybiBzZXRNYWluRW52KGVudnMsIGpzS2V5LCBlcmxWYWx1ZSk7XG59O1xuXG5jb25zdCBldmFsUXVhc2lxdW90ZWRFeHByID0gZnVuY3Rpb24oZXhwciwgZW52cywgYWRkUmVzdWx0KSB7XG4gIGlmICghaXNFcmxMaXN0KGV4cHIpKSB7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cbiAgY29uc3QgbWFuYWdlSXRlbSA9IGZ1bmN0aW9uKG1lbW8sIGl0ZW0pIHtcbiAgICBpZiAoaXNVbnF1b3RlZEV4cHIoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVybExpc3QoX2V2YWx1YXRlKG5leHQoaXRlbSksIGVudnMsIGFkZFJlc3VsdCksIG1lbW8pO1xuICAgIH0gZWxzZSBpZiAoaXNTcGxpY2VVbnF1b3RlZEV4cHIoaXRlbSkpIHtcbiAgICAgICAgY29uc3QgX21hbmFnZUl0ZW0gPSBmdW5jdGlvbihfbWVtbywgX2l0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gY3JlYXRlRXJsTGlzdChfaXRlbSwgX21lbW8pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVkdWNlKG1lbW8sIF9tYW5hZ2VJdGVtLCBfZXZhbHVhdGUobmV4dChpdGVtKSwgZW52cywgYWRkUmVzdWx0KSk7XG4gICAgfSBlbHNlIGlmIChpc0VybExpc3QoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVybExpc3QoZXZhbFF1YXNpcXVvdGVkRXhwcihpdGVtLCBlbnZzLCBhZGRSZXN1bHQpLCBtZW1vKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY3JlYXRlRXJsTGlzdChpdGVtLCBtZW1vKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiByZXZlcnNlKHJlZHVjZShjcmVhdGVFcmxMaXN0KCksIG1hbmFnZUl0ZW0sIGV4cHIpKTtcbn07XG5cbmNvbnN0IF9ldmFsdWF0ZSA9IGZ1bmN0aW9uKGVybEV4cHIsIGVudnMsIGFkZFJlc3VsdCkge1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIGlmIChpc0VybFN5bWJvbChlcmxFeHByKSkge1xuICAgICAgY29uc3QganNTdHJpbmcgPSBleHRyYWN0SnNWYWx1ZShlcmxFeHByKTtcbiAgICAgIGlmIChpc0tleXdvcmQoanNTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxLZXl3b3JkKGpzU3RyaW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb29rdXAoZW52cywganNTdHJpbmcpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNFcmxJbmRleChlcmxFeHByKSkge1xuICAgICAgY29uc3QgaW5kZXggPSBleHRyYWN0SnNWYWx1ZShlcmxFeHByKTtcbiAgICAgIGNvbnN0IG5ld0luZGV4ID0ge307XG4gICAgICBmb3IgKGxldCBrZXkgaW4gaW5kZXgpIHtcbiAgICAgICAgaWYgKCFfX2hhc1Byb3AuY2FsbChpbmRleCwga2V5KSkgY29udGludWU7XG4gICAgICAgIG5ld0luZGV4W2tleV0gPSBfZXZhbHVhdGUoaW5kZXhba2V5XSwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjcmVhdGVFcmxJbmRleChuZXdJbmRleCk7XG4gICAgfSBlbHNlIGlmICghKGlzRXJsTGlzdChlcmxFeHByKSkpIHtcbiAgICAgIHJldHVybiBlcmxFeHByO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcmxFeHByID0gZmlsdGVyKChmdW5jdGlvbih4KSB7XG4gICAgICAgIHJldHVybiAhKGlnbm9yYWJsZSh4LCBlbnZzLCBhZGRSZXN1bHQpKTtcbiAgICAgIH0pLCBlcmxFeHByKTtcbiAgICAgIGNvbnN0IGVybEV4cHJBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEV4cHIpO1xuICAgICAgY29uc3QgaGVhZCA9IGVybEV4cHJBcnJheVswXTtcbiAgICAgIGNvbnN0IGFyZzEgPSBlcmxFeHByQXJyYXlbMV07XG4gICAgICBjb25zdCByZW1haW5pbmdBcmdzID0gZXJsRXhwckFycmF5WzJdO1xuICAgICAgY29uc3QgdGFpbExpc3QgPSBjZHIoZXJsRXhwcik7XG4gICAgICBzd2l0Y2ggKGV4dHJhY3RKc1ZhbHVlKGhlYWQpKSB7XG4gICAgICAgIGNhc2UgZGVmQmFuZzpcbiAgICAgICAgICByZXR1cm4gZGVmaW5lTmV3VmFsdWUodGFpbExpc3QsIGVudnMsIGFkZFJlc3VsdCk7XG4gICAgICAgIGNhc2UgdW5kZWZCYW5nOlxuICAgICAgICAgIHJldHVybiB1bmRlZmluZVZhbHVlKHRhaWxMaXN0LCBlbnZzKTtcbiAgICAgICAgY2FzZSBfZXZhbDpcbiAgICAgICAgICBlcmxFeHByID0gX2V2YWx1YXRlKGFyZzEsIGVudnMsIGFkZFJlc3VsdCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgX2V2YWxXaXRoRW52OlxuICAgICAgICAgIGVudnMgPSBbZnJvbUVybEluZGV4KF9ldmFsdWF0ZShhcmcxLCBlbnZzLCBhZGRSZXN1bHQpKV07XG4gICAgICAgICAgZXJsRXhwciA9IF9ldmFsdWF0ZShjYXIocmVtYWluaW5nQXJncyksIGVudnMsIGFkZFJlc3VsdCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGV0U3RhcjpcbiAgICAgICAgICBlcmxFeHByID0gY2FyKHJlbWFpbmluZ0FyZ3MpO1xuICAgICAgICAgIGVudnMgPSBhZGRFbnYoZW52cywgcmVkdWNlTGV0KGVudnMsIGFyZzEsIGFkZFJlc3VsdCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxldHJlY1N0YXI6XG4gICAgICAgICAgZXJsRXhwciA9IGNhcihyZW1haW5pbmdBcmdzKTtcbiAgICAgICAgICBlbnZzID0gYWRkRW52KGVudnMsIHJlZHVjZUxldHJlYyhlbnZzLCBhcmcxLCBhZGRSZXN1bHQpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBfZG86XG4gICAgICAgICAgcmV0dXJuIGZvckVhY2goZXZhbHVhdGUoZW52cywgYWRkUmVzdWx0KSwgdGFpbExpc3QpO1xuICAgICAgICBjYXNlIF9nZXRDdXJyZW50RW52OlxuICAgICAgICAgIHJldHVybiBmcm9tSnNPYmplY3RzLmFwcGx5KG51bGwsIGVudnMucmV2ZXJzZSgpKTtcbiAgICAgICAgY2FzZSBfZ2V0RGVmYXVsdEVudjpcbiAgICAgICAgICByZXR1cm4gZnJvbUpzT2JqZWN0cyhlbnZzW2VudnMubGVuZ3RoIC0gMV0pO1xuICAgICAgICBjYXNlIF9pZjpcbiAgICAgICAgICBpZiAoZXh0cmFjdEpzVmFsdWUoX2V2YWx1YXRlKGFyZzEsIGVudnMsIGFkZFJlc3VsdCkpKSB7XG4gICAgICAgICAgICBlcmxFeHByID0gY2FyKHJlbWFpbmluZ0FyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG90aGVyd2lzZSA9IG5leHQocmVtYWluaW5nQXJncyk7XG4gICAgICAgICAgaWYgKGlzRW1wdHkob3RoZXJ3aXNlKSkge1xuICAgICAgICAgICAgZXJsRXhwciA9IGVybE5pbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJsRXhwciA9IG90aGVyd2lzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZm5TdGFyOlxuICAgICAgICAgIHJldHVybiBjcmVhdGVGbih0YWlsTGlzdCwgZW52cyk7XG4gICAgICAgIGNhc2UgbWFjcm9TdGFyOlxuICAgICAgICAgIHJldHVybiBjcmVhdGVNYWNybyh0YWlsTGlzdCwgZW52cyk7XG4gICAgICAgIGNhc2UgcXVvdGU6XG4gICAgICAgICAgcmV0dXJuIGNhcih0YWlsTGlzdCk7XG4gICAgICAgIGNhc2UgcXVhc2lxdW90ZTpcbiAgICAgICAgICByZXR1cm4gZXZhbFF1YXNpcXVvdGVkRXhwcihjYXIodGFpbExpc3QpLCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICBjYXNlIGV4cGFuZE1hY3JvOlxuICAgICAgICAgIHJldHVybiBfZXhwYW5kTWFjcm8oY2FyKGFyZzEpLCBjZHIoYXJnMSksIGVudnMsIGFkZFJlc3VsdCk7XG4gICAgICAgIGNhc2UgdHJ5U3RhcjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIF9ldmFsdWF0ZShhcmcxLCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICAgIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgICAgICAgICAgbGV0IGV4ID0gX2Vycm9yO1xuICAgICAgICAgICAgaWYgKGlzRW1wdHkocmVtYWluaW5nQXJncykpIHtcbiAgICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCByZW1haW5pbmdBcmdzQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgzLCBjYXIocmVtYWluaW5nQXJncykpO1xuICAgICAgICAgICAgICBjb25zdCBfY2F0Y2ggPSByZW1haW5pbmdBcmdzQXJyYXlbMF07XG4gICAgICAgICAgICAgIGNvbnN0IF9leCA9IHJlbWFpbmluZ0FyZ3NBcnJheVsxXTtcbiAgICAgICAgICAgICAgY29uc3QgY2F0Y2hFeHByID0gcmVtYWluaW5nQXJnc0FycmF5WzJdO1xuICAgICAgICAgICAgICBpZiAoKGV4dHJhY3RKc1ZhbHVlKF9jYXRjaCkpICE9PSBcImNhdGNoKlwiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGV4IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBleCA9IGNyZWF0ZUVybFN0cmluZyhjaXJjdW1wZW5kUXVvdGVzKGV4Lm1lc3NhZ2UpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb25zdCBuZXdFbnYgPSB7fTtcbiAgICAgICAgICAgICAgbmV3RW52W2V4dHJhY3RKc1ZhbHVlKF9leCldID0gZXg7XG4gICAgICAgICAgICAgIHJldHVybiBfZXZhbHVhdGUoY2F0Y2hFeHByLCBhZGRFbnYoZW52cywgbmV3RW52KSwgYWRkUmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc3QgZXJsU3ltYm9sID0gaGVhZDtcbiAgICAgICAgICBlcmxFeHByID0gdGFpbExpc3Q7XG4gICAgICAgICAgY29uc3QgZXJsSW52b2thYmxlID0gX2V2YWx1YXRlKGVybFN5bWJvbCwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgICBpZiAoaXNFcmxLZXl3b3JkKGVybEludm9rYWJsZSkpIHtcbiAgICAgICAgICAgIGVybEV4cHIgPSBjcmVhdGVFcmxMaXN0KGVybEludm9rYWJsZSwgdGFpbExpc3QpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNFcmxNYWNybyhlcmxJbnZva2FibGUpKSB7XG4gICAgICAgICAgICBlcmxFeHByID0gX2V4cGFuZE1hY3JvKGhlYWQsIHRhaWxMaXN0LCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNFcmxDb3JlUHVyZUZ1bmN0aW9uKGVybEludm9rYWJsZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGZuID0gZXh0cmFjdEpzVmFsdWUoZXJsSW52b2thYmxlKTtcbiAgICAgICAgICAgIGNvbnN0IGVybEFyZ3MgPSBtYXAoZXZhbHVhdGUoZW52cywgYWRkUmVzdWx0KSwgZXJsRXhwcik7XG4gICAgICAgICAgICByZXR1cm4gZm4oZXJsQXJncyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0VybENvcmVFZmZlY3RmdWxGdW5jdGlvbihlcmxJbnZva2FibGUpKSB7XG4gICAgICAgICAgICBjb25zdCBmbiA9IGV4dHJhY3RKc1ZhbHVlKGVybEludm9rYWJsZSk7XG4gICAgICAgICAgICBjb25zdCBlcmxBcmdzID0gbWFwKGV2YWx1YXRlKGVudnMsIGFkZFJlc3VsdCksIGVybEV4cHIpO1xuICAgICAgICAgICAgYWRkUmVzdWx0KGZuKGVybEFyZ3MpKTtcbiAgICAgICAgICAgIHJldHVybiBlcmxOaWw7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0VybFVzZXJQdXJlRnVuY3Rpb24oZXJsSW52b2thYmxlKSkge1xuICAgICAgICAgICAgY29uc3QganNWYWx1ZSA9IGV4dHJhY3RKc1ZhbHVlKGVybEludm9rYWJsZSk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbEVudnMgPSBqc1ZhbHVlLmxvY2FsRW52cztcbiAgICAgICAgICAgIGNvbnN0IGVybEV4cHJlc3Npb24gPSBqc1ZhbHVlLmVybEV4cHJlc3Npb247XG4gICAgICAgICAgICBjb25zdCBlcmxQYXJhbWV0ZXJzID0ganNWYWx1ZS5lcmxQYXJhbWV0ZXJzO1xuICAgICAgICAgICAgY29uc3QgZXJsQXJncyA9IG1hcChldmFsdWF0ZShlbnZzLCBhZGRSZXN1bHQpLCBlcmxFeHByKTtcbiAgICAgICAgICAgIGVybEV4cHIgPSBlcmxFeHByZXNzaW9uO1xuICAgICAgICAgICAgY29uc3QgbmV3RW52ID0gY3JlYXRlTG9jYWxFbnYoZXJsUGFyYW1ldGVycywgZXJsQXJncyk7XG4gICAgICAgICAgICBlbnZzID0gYWRkRW52KGxvY2FsRW52cywgbmV3RW52KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgXCJcIlxuICAgICAgICAgICAgICArIChleHRyYWN0SnNWYWx1ZShlcmxTeW1ib2wpKVxuICAgICAgICAgICAgICArIFwiIGRvZXMgbm90IGV2YWx1YXRlIHRvIGEgZnVuY3Rpb24sIG1hY3JvLCBvciBrZXl3b3JkLlwiO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGV2YWx1YXRlID0gZnVuY3Rpb24oZW52cywgYWRkUmVzdWx0KSB7XG4gIHJldHVybiBmdW5jdGlvbihlcmxFeHByKSB7XG4gICAgaWYgKGVybEV4cHIgPT09IGNvbW1lbnRTaWduYWwpIHtcbiAgICAgIHJldHVybiBjb21tZW50U2lnbmFsO1xuICAgIH1cbiAgICByZXR1cm4gX2V2YWx1YXRlKGVybEV4cHIsIGVudnMsIGFkZFJlc3VsdCk7XG4gIH07XG59O1xuXG5jb25zdCBfZXhwYW5kTWFjcm8gPSBmdW5jdGlvbihlcmxNYWNyb1N5bWJvbCwgZXJsQXJncywgZW52cywgYWRkUmVzdWx0KSB7XG4gIGNvbnN0IGVybE1hY3JvID0gX2V2YWx1YXRlKGVybE1hY3JvU3ltYm9sLCBlbnZzLCBhZGRSZXN1bHQpO1xuICBjb25zdCBqc1ZhbHVlID0gZXh0cmFjdEpzVmFsdWUoZXJsTWFjcm8pO1xuICBjb25zdCBsb2NhbEVudnMgPSBqc1ZhbHVlLmxvY2FsRW52cztcbiAgY29uc3QgZXJsRXhwcmVzc2lvbiA9IGpzVmFsdWUuZXJsRXhwcmVzc2lvbjtcbiAgY29uc3QgZXJsUGFyYW1ldGVycyA9IGpzVmFsdWUuZXJsUGFyYW1ldGVycztcbiAgY29uc3QgbmV3RW52ID0gY3JlYXRlTG9jYWxFbnYoZXJsUGFyYW1ldGVycywgZXJsQXJncyk7XG4gIGNvbnN0IG5ld0VudlN0YWNrID0gYWRkRW52KGxvY2FsRW52cywgbmV3RW52KTtcbiAgcmV0dXJuIF9ldmFsdWF0ZShlcmxFeHByZXNzaW9uLCBuZXdFbnZTdGFjaywgYWRkUmVzdWx0KTtcbn07XG5cbmNvbnN0IGlnbm9yYWJsZSA9IGZ1bmN0aW9uKGVybFZhbCwgZW52cywgYWRkUmVzdWx0KSB7XG4gIGlmIChpc0VybElnbm9yZShlcmxWYWwpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKCFpc0VybExpc3QoZXJsVmFsKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBzeW1ib2wgPSBjYXIoZXJsVmFsKTtcbiAgaWYgKCFpc0VybFN5bWJvbChzeW1ib2wpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGpzU3RyaW5nID0gZXh0cmFjdEpzVmFsdWUoc3ltYm9sKTtcbiAgaWYgKGpzU3RyaW5nID09PSAnaWdub3JlJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChqc1N0cmluZyA9PT0gJ2lnbm9yZUlmVHJ1ZScpIHtcbiAgICByZXR1cm4gZXh0cmFjdEpzVmFsdWUoX2V2YWx1YXRlKG5leHQoZXJsVmFsKSwgZW52cywgYWRkUmVzdWx0KSk7XG4gIH1cbiAgaWYgKGpzU3RyaW5nID09PSAnaWdub3JlVW5sZXNzVHJ1ZScpIHtcbiAgICByZXR1cm4gIWV4dHJhY3RKc1ZhbHVlKF9ldmFsdWF0ZShuZXh0KGVybFZhbCksIGVudnMsIGFkZFJlc3VsdCkpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHJlZHVjZUxldCA9IGZ1bmN0aW9uKGVudnMsIGxpc3QsIGFkZFJlc3VsdCkge1xuICBjb25zdCBuZXdFbnYgPSB7fTtcbiAgY29uc3QgX2VudnMgPSBhZGRFbnYoZW52cywgbmV3RW52KTtcbiAgd2hpbGUgKCFpc0VtcHR5KGxpc3QpKSB7XG4gICAgY29uc3QganNLZXkgPSBleHRyYWN0SnNWYWx1ZShsaXN0LnZhbHVlKTtcbiAgICBsaXN0ID0gcmVjdXJzZShsaXN0KTtcbiAgICBjb25zdCBlbnZWYWx1ZSA9IF9ldmFsdWF0ZShsaXN0LnZhbHVlLCBfZW52cywgYWRkUmVzdWx0KTtcbiAgICBuZXdFbnZbanNLZXldID0gZW52VmFsdWU7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gIH1cbiAgcmV0dXJuIG5ld0Vudjtcbn07XG5cbmNvbnN0IHJlZHVjZUxldHJlYyA9IGZ1bmN0aW9uKGVudnMsIGxpc3QsIGFkZFJlc3VsdCkge1xuICBjb25zdCBuZXdFbnYgPSB7fTtcbiAgY29uc3QgX2VudnMgPSBhZGRFbnYoZW52cywgbmV3RW52KTtcbiAgd2hpbGUgKCFpc0VtcHR5KGxpc3QpKSB7XG4gICAgY29uc3QganNLZXkgPSBleHRyYWN0SnNWYWx1ZShsaXN0LnZhbHVlKTtcbiAgICBsaXN0ID0gcmVjdXJzZShsaXN0KTtcbiAgICBjb25zdCBfZXJsRXhwciA9IGZyb21BcnJheShcbiAgICAgIFsgIGNyZWF0ZUVybFN5bWJvbChcImZpeCpcIiksXG4gICAgICAgICBmcm9tQXJyYXkoW2NyZWF0ZUVybFN5bWJvbChcImZuKlwiKSxcbiAgICAgICAgIGZyb21BcnJheShbanNLZXldKSxcbiAgICAgICAgIGxpc3QudmFsdWVdKVxuICAgICAgXSk7XG4gICAgY29uc3QgZW52VmFsdWUgPSBfZXZhbHVhdGUoX2VybEV4cHIsIF9lbnZzLCBhZGRSZXN1bHQpO1xuICAgIG5ld0Vudltqc0tleV0gPSBlbnZWYWx1ZTtcbiAgICBsaXN0ID0gcmVjdXJzZShsaXN0KTtcbiAgfVxuICByZXR1cm4gbmV3RW52O1xufTtcblxuY29uc3QgaXNTcGxpY2VVbnF1b3RlID0gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgcmV0dXJuIChleHRyYWN0SnNWYWx1ZShlcmxWYWx1ZSkpID09PSBzcGxpY2VVbnF1b3RlO1xufTtcblxuY29uc3QgaXNTcGxpY2VVbnF1b3RlZEV4cHIgPSBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICByZXR1cm4gaXNFcmxMaXN0KGVybFZhbHVlKSAmJiBpc1NwbGljZVVucXVvdGUoY2FyKGVybFZhbHVlKSk7XG59O1xuXG5jb25zdCB1bmRlZmluZVZhbHVlID0gZnVuY3Rpb24oZXJsTGlzdCwgZW52cykge1xuICBjb25zdCBqc0tleSA9IGV4dHJhY3RKc1ZhbHVlKGNhcihlcmxMaXN0KSk7XG4gIHJldHVybiB1bnNldE1haW5FbnYoZW52cywganNLZXkpO1xufTtcblxuY29uc3QgaXNVbnF1b3RlID0gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgcmV0dXJuIGV4dHJhY3RKc1ZhbHVlKGVybFZhbHVlKSA9PT0gdW5xdW90ZTtcbn07XG5cbmNvbnN0IGlzVW5xdW90ZWRFeHByID0gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgcmV0dXJuIGlzRXJsTGlzdChlcmxWYWx1ZSkgJiYgaXNVbnF1b3RlKGNhcihlcmxWYWx1ZSkpO1xufTtcblxuZXhwb3J0IHsgZXZhbHVhdGUgfTtcbiIsImltcG9ydCB7IGdldEVudmlyb25tZW50IGFzIHNldEVudjAgfSBmcm9tICcuL2VudjAnO1xuaW1wb3J0IHsgZ2V0RW52aXJvbm1lbnQgYXMgc2V0RW52MSB9IGZyb20gJy4vZW52MSc7XG5pbXBvcnQgeyBnZXRFbnZpcm9ubWVudCBhcyBzZXRFbnYyIH0gZnJvbSAnLi9lbnYyJztcbmltcG9ydCB7IGdldEVudmlyb25tZW50IGFzIHNldEVudjMgfSBmcm9tICcuL2VudjMnO1xuaW1wb3J0IHsgZ2V0RW52aXJvbm1lbnQgYXMgc2V0RW52NCB9IGZyb20gJy4vZW52NCc7XG5cbmNvbnN0IGdldExpc3BFbnZpcm9ubWVudCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICBjb25zdCBkaXNwbGF5ID0gY29uZmlnLmRpc3BsYXk7XG4gIGNvbnN0IGVudmlyb25tZW50ID0ge307XG4gIGNvbnN0IF9jb25maWcgPSB7XG4gICAgZGlzcGxheTogZGlzcGxheSxcbiAgICBlbnZpcm9ubWVudDogZW52aXJvbm1lbnRcbiAgfTtcbiAgc2V0RW52MChfY29uZmlnKTtcbiAgc2V0RW52MShfY29uZmlnKTtcbiAgc2V0RW52MihfY29uZmlnKTtcbiAgc2V0RW52MyhfY29uZmlnKTtcbiAgc2V0RW52NChfY29uZmlnKTtcbiAgcmV0dXJuIGVudmlyb25tZW50O1xufTtcblxuZXhwb3J0IHsgZ2V0TGlzcEVudmlyb25tZW50IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNKc1N0cmluZyB9IGZyb20gJy4vanMtdXRpbGl0aWVzJztcblxuY29uc3QgX19zbGljZSAgID0gW10uc2xpY2U7XG5jb25zdCBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuY29uc3QgZnJvbUVybEluZGV4ID0gZnVuY3Rpb24oZXJsSW5kZXgpIHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGNvbnN0IGpzVmFsdWUgPSBlcmxJbmRleC5qc1ZhbHVlO1xuICBmb3IgKGxldCBrZXkgaW4ganNWYWx1ZSkge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoanNWYWx1ZSwga2V5KSkgY29udGludWU7XG4gICAgY29uc3QgdmFsdWUgPSBqc1ZhbHVlW2tleV07XG4gICAgaWYgKGlzSnNTdHJpbmcoa2V5KSkge1xuICAgICAgY29uc3QgbmV3S2V5ID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICBzd2l0Y2ggKGtleVswXSkge1xuICAgICAgICAgIGNhc2UgJzonOlxuICAgICAgICAgICAgcmV0dXJuIGtleS5zbGljZSgxKTtcbiAgICAgICAgICBjYXNlICdcIic6XG4gICAgICAgICAgICByZXR1cm4ga2V5LnNsaWNlKDEsIC0xKTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgfSkoKTtcbiAgICAgIHJlc3VsdFtuZXdLZXldID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBmcm9tSnNPYmplY3RzID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGpzT2JqZWN0cyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIGNvbnN0IGNvcHkgPSB7fTtcbiAgY29uc3QgbGVuID0ganNPYmplY3RzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7ICBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBqc09iamVjdCA9IGpzT2JqZWN0c1tpXTtcbiAgICBmb3IgKGxldCBrZXkgaW4ganNPYmplY3QpIHtcbiAgICAgIGlmICghX19oYXNQcm9wLmNhbGwoanNPYmplY3QsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgdmFsID0ganNPYmplY3Rba2V5XTtcbiAgICAgIGlmIChpc0pzU3RyaW5nKGtleSkpIHtcbiAgICAgICAgY29weVsnOicgKyBrZXldID0gdmFsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29weVtrZXldID0gdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY3JlYXRlRXJsSW5kZXgoY29weSk7XG59O1xuXG5leHBvcnQge1xuICBmcm9tSnNPYmplY3RzLFxuICBmcm9tRXJsSW5kZXhcbn07XG4iLCJpbXBvcnQgeyBjaXJjdW1wZW5kUXVvdGVzIH0gICBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxTdHJpbmcgfSAgICBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGZyb21BcnJheSB9ICAgICAgICAgIGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgZ2V0TGlzcEVudmlyb25tZW50IH0gZnJvbSAnLi9nZXRMaXNwRW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgX3Byb2Nlc3MgfSAgICAgICAgICAgZnJvbSAnLi9fcHJvY2Vzcyc7XG5pbXBvcnQgeyBzZXJpYWxpemUgfSAgICAgICAgICBmcm9tICcuL3NlcmlhbGl6ZSc7XG5pbXBvcnQgc3RhbmRhcmRGbnNBbmRNYWNyb3MgICBmcm9tICcuL3N0YW5kYXJkLWZucy1hbmQtbWFjcm9zLmxpc3AnO1xuaW1wb3J0IHsgdG9rZW5pemVBbmRQYXJzZSB9ICAgZnJvbSAnLi90b2tlbml6ZUFuZFBhcnNlJztcblxuY29uc3QgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbmNvbnN0IF9jcmVhdGVFcmxTdHJpbmcgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4gY3JlYXRlRXJsU3RyaW5nKGNpcmN1bXBlbmRRdW90ZXMoanNTdHJpbmcpKTtcbn07XG5cbmNvbnN0IGVuY2Fwc3VsYXRlID0gZnVuY3Rpb24odHlwZSkge1xuICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZWZmZWN0OiB7XG4gICAgICAgIHR5cGU6IHR5cGVcbiAgICAgIH0sXG4gICAgICB2YWx1ZTogZXJsVmFsdWVcbiAgICB9O1xuICB9O1xufTtcblxuY29uc3QgZXJyb3IgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UpIHtcbiAgcmV0dXJuIFtlbmNhcHN1bGF0ZSgnZXJyb3InKShcInJlcGwgZXJyb3I6IChcIiArIGVycm9yTWVzc2FnZSArIFwiKVwiKV07XG59O1xuXG5jb25zdCBmbGF0dGVuSWZOZWNlc3NhcnkgPSBmdW5jdGlvbihlZmZlY3RzKSB7XG4gIGxldCB2YWx1ZTtcbiAgbGV0IHJlc3VsdCA9IGVmZmVjdHM7XG4gIHdoaWxlIChyZXN1bHQubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkodmFsdWUgPSByZXN1bHRbMF0udmFsdWUpKSB7XG4gICAgcmVzdWx0ID0gZmxhdHRlbklmTmVjZXNzYXJ5KHZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgX2ludGVycHJldCA9IGZ1bmN0aW9uKGVudnMsIGpzU3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIF9zZXJpYWxpemUoXG4gICAgICBmbGF0dGVuSWZOZWNlc3NhcnkoXG4gICAgICAgIF9wcm9jZXNzKHRva2VuaXplQW5kUGFyc2UpKGVudnMpKGpzU3RyaW5nKSkpO1xuICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IoX2Vycm9yKTtcbiAgfVxufTtcblxuY29uc3QgaW50ZXJwcmV0ID0gZnVuY3Rpb24oanNTdHJpbmcsIHVzZXJKc0FycmF5KSB7XG4gIGlmICh1c2VySnNBcnJheSAhPSBudWxsKSB7XG4gICAgY29uc3QgdXNlckVudiA9IHtcbiAgICAgICcqQVJHVionOiBmcm9tQXJyYXkodXNlckpzQXJyYXkubWFwKF9jcmVhdGVFcmxTdHJpbmcpKVxuICAgIH07XG4gICAgcmV0dXJuIF9pbnRlcnByZXQoW3VzZXJFbnYsIGVudmlyb25tZW50XSwganNTdHJpbmcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBfaW50ZXJwcmV0KFtlbnZpcm9ubWVudF0sIGpzU3RyaW5nKTtcbiAgfVxufTtcblxuY29uc3QgX3NlcmlhbGl6ZSA9IGZ1bmN0aW9uKHJlc3VsdHMpIHtcbiAgcmV0dXJuIHJlc3VsdHMubWFwKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgIGNvbnN0IF9yZXN1bHQgPSB7fTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKHJlc3VsdCwga2V5KSkgY29udGludWU7XG4gICAgICBjb25zdCB2YWx1ZSA9IHJlc3VsdFtrZXldO1xuICAgICAgaWYgKGtleSA9PT0gJ2VmZmVjdCcpIHtcbiAgICAgICAgX3Jlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfcmVzdWx0W2tleV0gPSBzZXJpYWxpemUodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX3Jlc3VsdDtcbiAgfSk7XG59O1xuXG5jb25zdCBlbnZpcm9ubWVudCA9IGdldExpc3BFbnZpcm9ubWVudCh7XG4gIGRpc3BsYXk6IGVuY2Fwc3VsYXRlKCdkaXNwbGF5Jylcbn0pO1xuXG5pbnRlcnByZXQoc3RhbmRhcmRGbnNBbmRNYWNyb3MpO1xuXG5leHBvcnQgeyBpbnRlcnByZXQgfTtcbiIsImNvbnN0IGNpcmN1bXBlbmRRdW90ZXMgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4gJ1wiJyArIGpzU3RyaW5nICsgJ1wiJztcbn07XG5cbmNvbnN0IGlzSnNOYU4gPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIGlzSnNOdW1iZXIodmFsKSAmJiB2YWwgIT09IHZhbDtcbn07XG5cbmNvbnN0IGlzSnNOdW1iZXIgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59O1xuXG5jb25zdCBpc0pzU3RyaW5nID0gZnVuY3Rpb24oanNWYWwpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChqc1ZhbCkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufTtcblxuZXhwb3J0IHtcbiAgY2lyY3VtcGVuZFF1b3RlcyxcbiAgaXNKc05hTixcbiAgaXNKc051bWJlcixcbiAgaXNKc1N0cmluZ1xufTtcbiIsImNvbnN0IGRlcmVmICAgICAgICAgICAgICAgICA9ICdkZXJlZic7XG5jb25zdCBkZXJlZkdseXBoICAgICAgICAgICAgPSAnQCc7XG5jb25zdCBjYXRjaFN0YXIgICAgICAgICAgICAgPSAnY2F0Y2gqJztcbmNvbnN0IGRlZkJhbmcgICAgICAgICAgICAgICA9ICdkZWYhJztcbmNvbnN0IF9kbyAgICAgICAgICAgICAgICAgICA9ICdkbyc7XG5jb25zdCBfZXZhbCAgICAgICAgICAgICAgICAgPSAnZXZhbCc7XG5jb25zdCBfZXZhbFdpdGhFbnYgICAgICAgICAgPSAnZXZhbC13aXRoLWVudic7XG5jb25zdCBleHBhbmRNYWNybyAgICAgICAgICAgPSAnZXhwYW5kLW1hY3JvJztcbmNvbnN0IF9mYWxzZSAgICAgICAgICAgICAgICA9ICdmYWxzZSc7XG5jb25zdCBmblN0YXIgICAgICAgICAgICAgICAgPSAnZm4qJztcbmNvbnN0IF9nZXRDdXJyZW50RW52ICAgICAgICA9ICctZ2V0LWN1cnJlbnQtZW52LSc7XG5jb25zdCBfZ2V0RGVmYXVsdEVudiAgICAgICAgPSAnLWdldC1kZWZhdWx0LWVudi0nO1xuY29uc3QgX2lmICAgICAgICAgICAgICAgICAgID0gJ2lmJztcbmNvbnN0IGlnbm9yZUJhbmcgICAgICAgICAgICA9ICdpZ25vcmUhJztcbmNvbnN0IGlnbm9yZUJhbmdHbHlwaCAgICAgICA9ICcjISc7XG5jb25zdCBpZ25vcmVJZlRydWUgICAgICAgICAgPSAnaWdub3JlSWZUcnVlJztcbmNvbnN0IGlnbm9yZUlmVHJ1ZUdseXBoICAgICA9ICcjLSc7XG5jb25zdCBpZ25vcmVVbmxlc3NUcnVlICAgICAgPSAnaWdub3JlVW5sZXNzVHJ1ZSc7XG5jb25zdCBpZ25vcmVVbmxlc3NUcnVlR2x5cGggPSAnIysnO1xuY29uc3QgaWdub3JlICAgICAgICAgICAgICAgID0gJ2lnbm9yZSc7XG5jb25zdCBpbmRleEVuZCAgICAgICAgICAgICAgPSAnfSc7XG5jb25zdCBpbmRleFN0YXJ0ICAgICAgICAgICAgPSAneyc7XG5jb25zdCBsZXRTdGFyICAgICAgICAgICAgICAgPSAnbGV0Kic7XG5jb25zdCBsZXRyZWNTdGFyICAgICAgICAgICAgPSAnbGV0cmVjKic7XG5jb25zdCBsaXN0RW5kICAgICAgICAgICAgICAgPSAnKSc7XG5jb25zdCBsaXN0U3RhcnQgICAgICAgICAgICAgPSAnKCc7XG5jb25zdCBtYWNyb1N0YXIgICAgICAgICAgICAgPSAnbWFjcm8qJztcbmNvbnN0IG5pbCAgICAgICAgICAgICAgICAgICA9ICduaWwnO1xuY29uc3QgX3Byb2Nlc3MgICAgICAgICAgICAgID0gJy1wcm9jZXNzLSc7XG5jb25zdCBxdWFzaXF1b3RlICAgICAgICAgICAgPSAncXVhc2lxdW90ZSc7XG5jb25zdCBxdWFzaXF1b3RlR2x5cGggICAgICAgPSAnYCc7XG5jb25zdCBxdW90ZSAgICAgICAgICAgICAgICAgPSAncXVvdGUnO1xuY29uc3QgcXVvdGVHbHlwaCAgICAgICAgICAgID0gJ1xcJyc7XG5jb25zdCBzcGxhdCAgICAgICAgICAgICAgICAgPSAnJic7XG5jb25zdCBzcGxpY2VVbnF1b3RlICAgICAgICAgPSAnc3BsaWNlLXVucXVvdGUnO1xuY29uc3Qgc3BsaWNlVW5xdW90ZUdseXBoICAgID0gJ35AJztcbmNvbnN0IF90cnVlICAgICAgICAgICAgICAgICA9ICd0cnVlJztcbmNvbnN0IHRyeVN0YXIgICAgICAgICAgICAgICA9ICd0cnkqJztcbmNvbnN0IHVuZGVmQmFuZyAgICAgICAgICAgICA9ICd1bmRlZiEnO1xuY29uc3QgdW5xdW90ZSAgICAgICAgICAgICAgID0gJ3VucXVvdGUnO1xuY29uc3QgdW5xdW90ZUdseXBoICAgICAgICAgID0gJ34nXG5cbmNvbnN0IGtleVRva2VucyA9IFtcbiAgZGVyZWYsXG4gIGRlcmVmR2x5cGgsXG4gIGNhdGNoU3RhcixcbiAgZGVmQmFuZyxcbiAgX2RvLFxuICBfZXZhbCxcbiAgX2V2YWxXaXRoRW52LFxuICBleHBhbmRNYWNybyxcbiAgX2ZhbHNlLFxuICBmblN0YXIsXG4gIF9nZXRDdXJyZW50RW52LFxuICBfZ2V0RGVmYXVsdEVudixcbiAgX2lmLFxuICBpZ25vcmVCYW5nLFxuICBpZ25vcmVCYW5nR2x5cGgsXG4gIGlnbm9yZUlmVHJ1ZSxcbiAgaWdub3JlSWZUcnVlR2x5cGgsXG4gIGlnbm9yZVVubGVzc1RydWUsXG4gIGlnbm9yZVVubGVzc1RydWVHbHlwaCxcbiAgaWdub3JlLFxuICBpbmRleEVuZCxcbiAgaW5kZXhTdGFydCxcbiAgbGV0U3RhcixcbiAgbGV0cmVjU3RhcixcbiAgbGlzdEVuZCxcbiAgbGlzdFN0YXJ0LFxuICBtYWNyb1N0YXIsXG4gIG5pbCxcbiAgX3Byb2Nlc3MsXG4gIHF1YXNpcXVvdGUsXG4gIHF1YXNpcXVvdGVHbHlwaCxcbiAgcXVvdGUsXG4gIHF1b3RlR2x5cGgsXG4gIHNwbGF0LFxuICBzcGxpY2VVbnF1b3RlLFxuICBzcGxpY2VVbnF1b3RlR2x5cGgsXG4gIF90cnVlLFxuICB0cnlTdGFyLFxuICB1bmRlZkJhbmcsXG4gIHVucXVvdGUsXG4gIHVucXVvdGVHbHlwaFxuXTtcblxuY29uc3Qga2V5d29yZHMgPSBbXG4gIGNhdGNoU3RhcixcbiAgZGVmQmFuZyxcbiAgX2RvLFxuICBfZXZhbCxcbiAgX2V2YWxXaXRoRW52LFxuICBleHBhbmRNYWNybyxcbiAgX2ZhbHNlLFxuICBmblN0YXIsXG4gIF9nZXRDdXJyZW50RW52LFxuICBfZ2V0RGVmYXVsdEVudixcbiAgX2lmLFxuICBpZ25vcmUsXG4gIGxldFN0YXIsXG4gIGxldHJlY1N0YXIsXG4gIG1hY3JvU3RhcixcbiAgbmlsLFxuICBfcHJvY2VzcyxcbiAgcXVhc2lxdW90ZSxcbiAgcXVvdGUsXG4gIHNwbGljZVVucXVvdGUsXG4gIF90cnVlLFxuICB0cnlTdGFyLFxuICB1bmRlZkJhbmcsXG4gIHVucXVvdGVcbl07XG5cbmNvbnN0IG1hY3JvVG9rZW5zID0gW3F1YXNpcXVvdGUsIHF1b3RlLCBzcGxpY2VVbnF1b3RlLCB1bnF1b3RlXTtcblxuY29uc3QgZ2x5cGhUb2tlbnMgPSBbXG4gIGRlcmVmR2x5cGgsXG4gIGlnbm9yZUJhbmdHbHlwaCxcbiAgcXVhc2lxdW90ZUdseXBoLFxuICBxdW90ZUdseXBoLFxuICBzcGxpY2VVbnF1b3RlR2x5cGgsXG4gIHVucXVvdGVHbHlwaFxuXTtcblxuY29uc3QgYmluYXJ5R2x5cGhUb2tlbnMgPSBbaWdub3JlSWZUcnVlR2x5cGgsIGlnbm9yZVVubGVzc1RydWVHbHlwaF07XG5cbmNvbnN0IF9faW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgfSByZXR1cm4gLTE7XG59O1xuXG5jb25zdCBpc0tleXdvcmQgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4gX19pbmRleE9mLmNhbGwoa2V5d29yZHMsIGpzU3RyaW5nKSA+PSAwO1xufTtcblxuZXhwb3J0IHtcbiAgYmluYXJ5R2x5cGhUb2tlbnMsXG4gIGRlcmVmLFxuICBkZXJlZkdseXBoLFxuICBjYXRjaFN0YXIsXG4gIGRlZkJhbmcsXG4gIF9kbyxcbiAgX2V2YWwsXG4gIF9ldmFsV2l0aEVudixcbiAgZXhwYW5kTWFjcm8sXG4gIF9mYWxzZSxcbiAgZm5TdGFyLFxuICBfZ2V0Q3VycmVudEVudixcbiAgX2dldERlZmF1bHRFbnYsXG4gIGdseXBoVG9rZW5zLFxuICBfaWYsXG4gIGlnbm9yZUlmVHJ1ZSxcbiAgaWdub3JlSWZUcnVlR2x5cGgsXG4gIGlnbm9yZVVubGVzc1RydWUsXG4gIGlnbm9yZVVubGVzc1RydWVHbHlwaCxcbiAgaWdub3JlLFxuICBpZ25vcmVCYW5nLFxuICBpZ25vcmVCYW5nR2x5cGgsXG4gIGluZGV4RW5kLFxuICBpbmRleFN0YXJ0LFxuICBrZXlUb2tlbnMsXG4gIGlzS2V5d29yZCxcbiAgbGV0U3RhcixcbiAgbGV0cmVjU3RhcixcbiAgbGlzdEVuZCxcbiAgbGlzdFN0YXJ0LFxuICBtYWNyb1N0YXIsXG4gIG1hY3JvVG9rZW5zLFxuICBuaWwsXG4gIF9wcm9jZXNzLFxuICBxdWFzaXF1b3RlLFxuICBxdWFzaXF1b3RlR2x5cGgsXG4gIHF1b3RlLFxuICBxdW90ZUdseXBoLFxuICBzcGxhdCxcbiAgc3BsaWNlVW5xdW90ZSxcbiAgc3BsaWNlVW5xdW90ZUdseXBoLFxuICBfdHJ1ZSxcbiAgdHJ5U3RhcixcbiAgdW5kZWZCYW5nLFxuICB1bnF1b3RlLFxuICB1bnF1b3RlR2x5cGhcbn07XG4iLCJpbXBvcnQgeyBlcmxUeXBlcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBlcmxMaXN0VHlwZSA9IGVybFR5cGVzWzZdO1xuXG5jb25zdCBfX3NsaWNlID0gW10uc2xpY2U7XG5cbmNvbnN0IGNhciA9IGZ1bmN0aW9uKGVybExpc3QpIHtcbiAgaWYgKGlzRW1wdHkoZXJsTGlzdCkpIHtcbiAgICByZXR1cm4gRU9MO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxMaXN0LnZhbHVlO1xuICB9XG59O1xuXG5jb25zdCBjZHIgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIGlmIChpc0VtcHR5KGVybExpc3QpKSB7XG4gICAgcmV0dXJuIEVPTDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTGlzdC5uZXh0O1xuICB9XG59O1xuXG5jb25zdCBhcmVFcXVhbCA9IGZ1bmN0aW9uKGxpc3QwLCBsaXN0MSwgX2FyZUVxdWFsKSB7XG4gIHdoaWxlICghKGlzRW1wdHkobGlzdDApIHx8IGlzRW1wdHkobGlzdDEpKSkge1xuICAgIGlmICghX2FyZUVxdWFsKGxpc3QwLnZhbHVlLCBsaXN0MS52YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGlzdDAgPSBjZHIobGlzdDApO1xuICAgIGxpc3QxID0gY2RyKGxpc3QxKTtcbiAgfVxuICByZXR1cm4gaXNFbXB0eShsaXN0MCkgJiYgaXNFbXB0eShsaXN0MSk7XG59O1xuXG5jb25zdCBjb25jYXQgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgZXJsTGlzdHMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICBpZiAoZXJsTGlzdHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEVPTDtcbiAgfVxuICBsZXQgcmVzdWx0ID0gY29weShlcmxMaXN0c1swXSk7XG4gIGxldCB0YWlsID0gbGFzdFRhaWwocmVzdWx0KTtcbiAgY29uc3QgcmVtYWluaW5nID0gZXJsTGlzdHMuc2xpY2UoMSk7XG4gIGNvbnN0IGxlbiA9IHJlbWFpbmluZy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBlcmxMaXN0ID0gcmVtYWluaW5nW2ldO1xuICAgIGNvbnN0IF9jb3B5ID0gY29weShlcmxMaXN0KTtcbiAgICBpZiAoaXNFbXB0eSh0YWlsKSkge1xuICAgICAgcmVzdWx0ID0gX2NvcHk7XG4gICAgICB0YWlsID0gbGFzdFRhaWwocmVzdWx0KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWlzRW1wdHkoX2NvcHkpKSB7XG4gICAgICB0YWlsLm5leHQgPSBfY29weTtcbiAgICAgIHRhaWwgPSBsYXN0VGFpbChfY29weSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBjb25zID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY3JlYXRlRXJsTGlzdChjYXIoZXJsQXJncyksIG5leHQoZXJsQXJncykpO1xufTtcblxuY29uc3QgY29weSA9IGZ1bmN0aW9uKGVybExpc3QpIHtcbiAgcmV0dXJuIG1hcCgoZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiB4O1xuICB9KSwgZXJsTGlzdCk7XG59O1xuXG5jb25zdCBjcmVhdGVFcmxMaXN0ID0gZnVuY3Rpb24odmFsdWUsIG5leHROb2RlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIEVPTDtcbiAgfVxuICByZXR1cm4gY3JlYXRlTm9kZSh2YWx1ZSwgbmV4dE5vZGUgIT0gbnVsbCA/IG5leHROb2RlIDogRU9MKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5vZGUgPSBmdW5jdGlvbih2YWx1ZSwgbmV4dE5vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBlcmxMaXN0VHlwZSxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgbmV4dDogbmV4dE5vZGVcbiAgfTtcbn07XG5cbmNvbnN0IGRyb3AgPSBmdW5jdGlvbihuYnIsIGVybExpc3QpIHtcbiAgd2hpbGUgKG5iciAhPT0gMCkge1xuICAgIGVybExpc3QgPSBjZHIoZXJsTGlzdCk7XG4gICAgbmJyID0gbmJyIC0gMTtcbiAgfVxuICByZXR1cm4gZXJsTGlzdDtcbn07XG5cbmNvbnN0IGlzRW1wdHkgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IEVPTDtcbn07XG5cbmNvbnN0IGZpbHRlciA9IGZ1bmN0aW9uKHByZWRpY2F0ZSwgbGlzdCkge1xuICBjb25zdCBfcmVkdWNlID0gZnVuY3Rpb24obGlzdCwgdmFsdWUpIHtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVybExpc3QodmFsdWUsIGxpc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG4gIH07XG4gIHJldHVybiByZXZlcnNlKHJlZHVjZShFT0wsIF9yZWR1Y2UsIGxpc3QpKTtcbn07XG5cbmNvbnN0IGZvckVhY2ggPSBmdW5jdGlvbihmbiwgbGlzdCkge1xuICBsZXQgcmVzdWx0ID0gbGlzdDtcbiAgd2hpbGUgKCFpc0VtcHR5KGxpc3QpKSB7XG4gICAgcmVzdWx0ID0gZm4obGlzdC52YWx1ZSk7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGZyb21BcnJheSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gIGNvbnN0IF9yZWR1Y2UgPSBmdW5jdGlvbihsaXN0LCB2YWx1ZSkge1xuICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KHZhbHVlLCBsaXN0KTtcbiAgfTtcbiAgcmV0dXJuIGFycmF5LnJldmVyc2UoKS5yZWR1Y2UoX3JlZHVjZSwgY3JlYXRlRXJsTGlzdCgpKTtcbn07XG5cbmNvbnN0IGxhc3QgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIHJldHVybiBjYXIobGFzdFRhaWwoZXJsTGlzdCkpO1xufTtcblxuY29uc3QgbGFzdFRhaWwgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIGlmIChpc0VtcHR5KGVybExpc3QpKSB7XG4gICAgcmV0dXJuIGVybExpc3Q7XG4gIH1cbiAgbGV0IHByaW9yID0gZXJsTGlzdDtcbiAgbGV0IGN1cnJlbnQgPSBjZHIoZXJsTGlzdCk7XG4gIHdoaWxlICghaXNFbXB0eShjdXJyZW50KSkge1xuICAgIHByaW9yID0gY2RyKHByaW9yKTtcbiAgICBjdXJyZW50ID0gY2RyKGN1cnJlbnQpO1xuICB9XG4gIHJldHVybiBwcmlvcjtcbn07XG5cbmNvbnN0IG1hcCA9IGZ1bmN0aW9uKGZuLCBsaXN0KSB7XG4gIGNvbnN0IF9yZWR1Y2UgPSBmdW5jdGlvbihsaXN0LCB2YWx1ZSkge1xuICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KGZuKHZhbHVlKSwgbGlzdCk7XG4gIH07XG4gIHJldHVybiByZXZlcnNlKHJlZHVjZShFT0wsIF9yZWR1Y2UsIGxpc3QpKTtcbn07XG5cbmNvbnN0IG5leHQgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIHJldHVybiBjYXIoY2RyKGVybExpc3QpKTtcbn07XG5cbmNvbnN0IHJlY3Vyc2UgPSBmdW5jdGlvbihsaXN0KSB7XG4gIGlmIChpc0VtcHR5KGxpc3QpKSB7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3QubmV4dDtcbiAgfVxufTtcblxuY29uc3QgcmVkdWNlID0gZnVuY3Rpb24oc2VlZCwgZm4sIGxpc3QpIHtcbiAgd2hpbGUgKCFpc0VtcHR5KGxpc3QpKSB7XG4gICAgc2VlZCA9IGZuKHNlZWQsIGxpc3QudmFsdWUpO1xuICAgIGxpc3QgPSByZWN1cnNlKGxpc3QpO1xuICB9XG4gIHJldHVybiBzZWVkO1xufTtcblxuY29uc3QgcmVkdWNlQnkyID0gZnVuY3Rpb24oc2VlZCwgZm4sIGxpc3QpIHtcbiAgd2hpbGUgKCFpc0VtcHR5KGxpc3QpKSB7XG4gICAgY29uc3QgdmFsdWUwID0gbGlzdC52YWx1ZTtcbiAgICBsaXN0ID0gcmVjdXJzZShsaXN0KTtcbiAgICBjb25zdCB2YWx1ZTEgPSBsaXN0LnZhbHVlO1xuICAgIHNlZWQgPSBmbihzZWVkLCB2YWx1ZTAsIHZhbHVlMSk7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gIH1cbiAgcmV0dXJuIHNlZWQ7XG59O1xuXG5jb25zdCByZXZlcnNlID0gZnVuY3Rpb24obGlzdCkge1xuICBsZXQgcmVzdWx0ID0gRU9MO1xuICB3aGlsZSAoIWlzRW1wdHkobGlzdCkpIHtcbiAgICByZXN1bHQgPSBjcmVhdGVFcmxMaXN0KGxpc3QudmFsdWUsIHJlc3VsdCk7XG4gICAgbGlzdCA9IGxpc3QubmV4dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgdGFrZSA9IGZ1bmN0aW9uKG5iciwgZXJsTGlzdCkge1xuICBsZXQgcmVzdWx0ID0gY3JlYXRlRXJsTGlzdCgpO1xuICB3aGlsZSAobmJyICE9PSAwKSB7XG4gICAgY29uc3Qgbm9kZSA9IGNhcihlcmxMaXN0KTtcbiAgICBlcmxMaXN0ID0gY2RyKGVybExpc3QpO1xuICAgIHJlc3VsdCA9IGNyZWF0ZUVybExpc3Qobm9kZSwgcmVzdWx0KTtcbiAgICBuYnIgPSBuYnIgLSAxO1xuICB9XG4gIHJldHVybiByZXZlcnNlKHJlc3VsdCk7XG59O1xuXG5jb25zdCB0b0FycmF5ID0gZnVuY3Rpb24obGlzdCkge1xuICBjb25zdCBfcmVkdWNlID0gZnVuY3Rpb24oanNBcnJheSwgdmFsdWUpIHtcbiAgICBqc0FycmF5LnB1c2godmFsdWUpO1xuICAgIHJldHVybiBqc0FycmF5O1xuICB9O1xuICByZXR1cm4gcmVkdWNlKFtdLCBfcmVkdWNlLCBsaXN0KTtcbn07XG5cbmNvbnN0IHRvUGFydGlhbEFycmF5ID0gZnVuY3Rpb24obmJyLCBsaXN0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICB3aGlsZSAobmJyICE9PSAwKSB7XG4gICAgY29uc3Qgbm9kZSA9IGNhcihsaXN0KTtcbiAgICBsaXN0ID0gY2RyKGxpc3QpO1xuICAgIHJlc3VsdC5wdXNoKG5vZGUpO1xuICAgIG5iciA9IG5iciAtIDE7XG4gIH1cbiAgcmVzdWx0LnB1c2gobGlzdCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCB6aXAgPSBmdW5jdGlvbihzZWVkLCBmbiwgbGlzdDAsIGxpc3QxKSB7XG4gIHdoaWxlICghKGlzRW1wdHkobGlzdDApIHx8IGlzRW1wdHkobGlzdDEpKSkge1xuICAgIGNvbnN0IHZhbHVlMCA9IGNhcihsaXN0MCk7XG4gICAgbGlzdDAgPSBjZHIobGlzdDApO1xuICAgIGNvbnN0IHZhbHVlMSA9IGNhcihsaXN0MSk7XG4gICAgbGlzdDEgPSBjZHIobGlzdDEpO1xuICAgIHNlZWQgPSBmbihzZWVkLCB2YWx1ZTAsIHZhbHVlMSk7XG4gIH1cbiAgcmV0dXJuIHNlZWQ7XG59O1xuXG5jb25zdCBfRU9MID0ge307XG5cbmNvbnN0IEVPTCA9IGNyZWF0ZU5vZGUoX0VPTCwgX0VPTCk7XG5cbmV4cG9ydCB7XG4gIGFyZUVxdWFsLFxuICBjYXIsXG4gIGNkcixcbiAgY29uY2F0LFxuICBjb25zLFxuICBjb3B5LFxuICBjcmVhdGVFcmxMaXN0LFxuICBkcm9wLFxuICBpc0VtcHR5LFxuICBmaWx0ZXIsXG4gIGZvckVhY2gsXG4gIGZyb21BcnJheSxcbiAgbGFzdCxcbiAgbWFwLFxuICBuZXh0LFxuICByZWN1cnNlLFxuICByZWR1Y2UsXG4gIHJlZHVjZUJ5MixcbiAgcmV2ZXJzZSxcbiAgdGFrZSxcbiAgdG9BcnJheSxcbiAgdG9QYXJ0aWFsQXJyYXlcbn07XG4iLCJpbXBvcnQgeyBiaW5hcnlHbHlwaFRva2VucyB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGNvbW1lbnRTaWduYWwgfSBmcm9tICcuL2NvbW1lbnRTaWduYWwnO1xuaW1wb3J0IHsgY3JlYXRlRXJsQm9vbGVhbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsSWRlbnRpZmllciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsSWdub3JlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTGlzdCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxOdW1iZXIgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3ltYm9sIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBkZXJlZiB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGRlcmVmR2x5cGggfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBleHRyYWN0SnNWYWx1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgX2ZhbHNlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgZ2x5cGhUb2tlbnMgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmVCYW5nIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlQmFuZ0dseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlSWZUcnVlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlSWZUcnVlR2x5cGggfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmVVbmxlc3NUcnVlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlVW5sZXNzVHJ1ZUdseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaW5kZXhFbmQgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpbmRleFN0YXJ0IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsga2V5VG9rZW5zIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbGlzdEVuZCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGxpc3RTdGFydCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IG5pbCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHF1YXNpcXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBxdW90ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHNwbGljZVVucXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyB1bnF1b3RlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcXVhc2lxdW90ZUdseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcXVvdGVHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHNwbGljZVVucXVvdGVHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHVucXVvdGVHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHJldmVyc2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IF90cnVlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuXG5jb25zdCAgX19pbmRleE9mID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICB9IHJldHVybiAtMTtcbn07XG5cbmNvbnN0IGF0b21pemUgPSBmdW5jdGlvbih0b2tlbikge1xuICBjb25zdCBjcmVhdGVFcmxWYWx1ZSA9IChmdW5jdGlvbigpIHtcbiAgICBpZiAoaXNOaWwodG9rZW4pKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRXJsTmlsO1xuICAgIH0gZWxzZSBpZiAoaXNJZ25vcmUodG9rZW4pKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRXJsSWdub3JlO1xuICAgIH0gZWxzZSBpZiAoaXNCb29sZWFuKHRva2VuKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKHBhcnNlQm9vbGVhbih0b2tlbikpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKHRva2VuKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZztcbiAgICB9IGVsc2UgaWYgKGlzSWRlbnRpZmllcih0b2tlbikpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFcmxJZGVudGlmaWVyO1xuICAgIH0gZWxzZSBpZiAoaXNJbnRlZ2VyKHRva2VuKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxOdW1iZXIocGFyc2VJbnQxMCh0b2tlbikpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRmxvYXQodG9rZW4pKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihwYXJzZUZsb2F0MTAodG9rZW4pKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjcmVhdGVFcmxTeW1ib2w7XG4gICAgfVxuICB9KSgpO1xuICByZXR1cm4gY3JlYXRlRXJsVmFsdWUodG9rZW4pO1xufTtcblxuY29uc3QgaXNCb29sZWFuID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuID09PSBfZmFsc2UgfHwgdG9rZW4gPT09IF90cnVlO1xufTtcblxuY29uc3QgaXNGbG9hdCA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiAvXigtfFxcKyk/WzAtOV0oX3xcXGQpKlxcLihcXGR8KFxcZChffFxcZCkqXFxkKSkkLy50ZXN0KHRva2VuKTtcbn07XG5cbmNvbnN0IGlzQmluYXJ5R2x5cGggPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gX19pbmRleE9mLmNhbGwoYmluYXJ5R2x5cGhUb2tlbnMsIHRva2VuKSA+PSAwO1xufTtcblxuY29uc3QgaXNHbHlwaCA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiBfX2luZGV4T2YuY2FsbChnbHlwaFRva2VucywgdG9rZW4pID49IDA7XG59O1xuXG5jb25zdCBpc0lnbm9yZSA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbiA9PT0gaWdub3JlO1xufTtcblxuY29uc3QgaXNJbmRleFN0YXJ0ID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuID09PSBpbmRleFN0YXJ0O1xufTtcblxuY29uc3QgaXNJbnRlZ2VyID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIC9eKDAoPyFcXC4pfCgoLXxcXCspP1sxLTldKF98XFxkKSokKSkvLnRlc3QodG9rZW4pO1xufTtcblxuY29uc3QgaXNMaXN0U3RhcnQgPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gdG9rZW4gPT09IGxpc3RTdGFydDtcbn07XG5cbmNvbnN0IGlzTmlsID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuID09PSBuaWw7XG59O1xuXG5jb25zdCBfcGFyc2UgPSBmdW5jdGlvbih0b2tlbiwgdG9rZW5zKSB7XG4gIGlmIChpc0xpc3RTdGFydCh0b2tlbikpIHtcbiAgICByZXR1cm4gcGFyc2VMaXN0KHRva2Vucyk7XG4gIH0gZWxzZSBpZiAoaXNJbmRleFN0YXJ0KHRva2VuKSkge1xuICAgIHJldHVybiBwYXJzZUluZGV4KHRva2Vucyk7XG4gIH0gZWxzZSBpZiAoaXNHbHlwaCh0b2tlbikpIHtcbiAgICByZXR1cm4gcGFyc2VHbHlwaChnbHlwaEluZGV4W3Rva2VuXSwgdG9rZW5zKTtcbiAgfSBlbHNlIGlmIChpc0JpbmFyeUdseXBoKHRva2VuKSkge1xuICAgIHJldHVybiBwYXJzZUJpbmFyeUdseXBoKGJpbmFyeUdseXBoSW5kZXhbdG9rZW5dLCB0b2tlbnMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhdG9taXplKHRva2VuKTtcbiAgfVxufTtcblxuY29uc3QgcGFyc2UgPSBmdW5jdGlvbih0b2tlbnMpIHtcbiAgaWYgKHRva2VucyA9PT0gY29tbWVudFNpZ25hbCkge1xuICAgIHJldHVybiBjb21tZW50U2lnbmFsO1xuICB9XG4gIHJldHVybiBfcGFyc2UodG9rZW5zLnNoaWZ0KCksIHRva2Vucyk7XG59O1xuXG5jb25zdCBwYXJzZUJpbmFyeUdseXBoID0gZnVuY3Rpb24oa2V5d29yZCwgdG9rZW5zKSB7XG4gIHJldHVybiBjcmVhdGVFcmxMaXN0KFxuICAgIGNyZWF0ZUVybFN5bWJvbChrZXl3b3JkKSxcbiAgICBjcmVhdGVFcmxMaXN0KFxuICAgICAgcGFyc2UodG9rZW5zKSxcbiAgICAgIGNyZWF0ZUVybExpc3QocGFyc2UodG9rZW5zKSkpKTtcbn07XG5cbmNvbnN0IHBhcnNlQm9vbGVhbiA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbiA9PT0gX3RydWU7XG59O1xuXG5jb25zdCBwYXJzZUZsb2F0MTAgPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gcGFyc2VGbG9hdChzdHJpcFVuZGVyc2NvcmVzKHRva2VuKSwgMTApO1xufTtcblxuY29uc3QgcGFyc2VHbHlwaCA9IGZ1bmN0aW9uKGtleXdvcmQsIHRva2Vucykge1xuICByZXR1cm4gY3JlYXRlRXJsTGlzdChcbiAgICBjcmVhdGVFcmxTeW1ib2woa2V5d29yZCksXG4gICAgY3JlYXRlRXJsTGlzdChwYXJzZSh0b2tlbnMpKSk7XG59O1xuXG5jb25zdCBwYXJzZUluZGV4ID0gZnVuY3Rpb24odG9rZW5zKSB7XG4gIGxldCB0b2tlbjtcbiAgY29uc3QganNJbmRleCA9IHt9O1xuICBsZXQga2V5ID0gbnVsbDtcbiAgbGV0IGlzS2V5U3RlcCA9IHRydWU7XG4gIHdoaWxlICgodG9rZW4gPSB0b2tlbnMuc2hpZnQoKSkgIT09IGluZGV4RW5kKSB7XG4gICAgaWYgKGlzS2V5U3RlcCkge1xuICAgICAga2V5ID0gX3BhcnNlKHRva2VuLCB0b2tlbnMpO1xuICAgICAgaXNLZXlTdGVwID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpzSW5kZXhbZXh0cmFjdEpzVmFsdWUoa2V5KV0gPSBfcGFyc2UodG9rZW4sIHRva2Vucyk7XG4gICAgICBpc0tleVN0ZXAgPSB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY3JlYXRlRXJsSW5kZXgoanNJbmRleCk7XG59O1xuXG5jb25zdCBwYXJzZUludDEwID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHBhcnNlSW50KHN0cmlwVW5kZXJzY29yZXModG9rZW4pLCAxMCk7XG59O1xuXG5jb25zdCBwYXJzZUxpc3QgPSBmdW5jdGlvbih0b2tlbnMpIHtcbiAgbGV0IHRva2VuO1xuICBsZXQgZXJsTGlzdCA9IGNyZWF0ZUVybExpc3QoKTtcbiAgd2hpbGUgKCh0b2tlbiA9IHRva2Vucy5zaGlmdCgpKSAhPT0gbGlzdEVuZCkge1xuICAgIGVybExpc3QgPSBjcmVhdGVFcmxMaXN0KF9wYXJzZSh0b2tlbiwgdG9rZW5zKSwgZXJsTGlzdCk7XG4gIH1cbiAgcmV0dXJuIHJldmVyc2UoZXJsTGlzdCk7XG59O1xuXG5jb25zdCBzdGFydHNXaXRoID0gZnVuY3Rpb24oY2hhcikge1xuICByZXR1cm4gZnVuY3Rpb24odG9rZW4pIHtcbiAgICByZXR1cm4gdG9rZW5bMF0gPT09IGNoYXI7XG4gIH07XG59O1xuXG5jb25zdCBzdHJpcFVuZGVyc2NvcmVzID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuLnJlcGxhY2UoL18vZywgJycpO1xufTtcblxuY29uc3QgZ2x5cGhJbmRleCA9IHt9O1xuXG5nbHlwaEluZGV4W2RlcmVmR2x5cGhdICAgICAgICAgPSBkZXJlZjtcbmdseXBoSW5kZXhbaWdub3JlQmFuZ0dseXBoXSAgICA9IGlnbm9yZUJhbmc7XG5nbHlwaEluZGV4W3F1YXNpcXVvdGVHbHlwaF0gICAgPSBxdWFzaXF1b3RlO1xuZ2x5cGhJbmRleFtxdW90ZUdseXBoXSAgICAgICAgID0gcXVvdGU7XG5nbHlwaEluZGV4W3NwbGljZVVucXVvdGVHbHlwaF0gPSBzcGxpY2VVbnF1b3RlO1xuZ2x5cGhJbmRleFt1bnF1b3RlR2x5cGhdICAgICAgID0gdW5xdW90ZTtcblxuY29uc3QgYmluYXJ5R2x5cGhJbmRleCA9IHt9O1xuXG5iaW5hcnlHbHlwaEluZGV4W2lnbm9yZUlmVHJ1ZUdseXBoXSAgICAgPSBpZ25vcmVJZlRydWU7XG5iaW5hcnlHbHlwaEluZGV4W2lnbm9yZVVubGVzc1RydWVHbHlwaF0gPSBpZ25vcmVVbmxlc3NUcnVlO1xuXG5jb25zdCBpc1N0cmluZyA9IHN0YXJ0c1dpdGgoJ1wiJyk7XG5cbmNvbnN0IGlzSWRlbnRpZmllciA9IHN0YXJ0c1dpdGgoJzonKTtcblxuZXhwb3J0IHsgcGFyc2UgfTtcbiIsImltcG9ydCB7IGNvbW1lbnRTaWduYWwgfSBmcm9tICcuL2NvbW1lbnRTaWduYWwnO1xuaW1wb3J0IHsgZXh0cmFjdEpzVmFsdWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGluZGV4RW5kIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaW5kZXhTdGFydCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGlzRXJsQXRvbSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsQ29yZVB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxJZGVudGlmaWVyIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybElnbm9yZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxLZXl3b3JkIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybExpc3QgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTWFjcm8gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBsaXN0RW5kIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbGlzdFN0YXJ0IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5cbmNvbnN0IF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5jb25zdCBhZGpvaW5FcmxWYWx1ZSA9IGZ1bmN0aW9uKHNob3VsZEJlUmVhZGFibGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG1lbW8sIGVybFZhbHVlKSB7XG4gICAgY29uc3Qgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZShlcmxWYWx1ZSwgc2hvdWxkQmVSZWFkYWJsZSk7XG4gICAgaWYgKG1lbW8ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gc2VyaWFsaXplZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiXCIgKyBtZW1vICsgXCIgXCIgKyBzZXJpYWxpemVkO1xuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IHNlcmlhbGl6ZSA9IGZ1bmN0aW9uKGVybEV4cHIsIHNob3VsZEJlUmVhZGFibGUpIHtcbiAgaWYgKGVybEV4cHIgPT09IGNvbW1lbnRTaWduYWwpIHtcbiAgICByZXR1cm4gY29tbWVudFNpZ25hbDtcbiAgfVxuICBjb25zdCBfc2VyaWFsaXplID0gKGZ1bmN0aW9uKCkge1xuICAgIGlmIChpc0VybExpc3QoZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBzZXJpYWxpemVMaXN0O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxJZ25vcmUoZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gaWdub3JlTGFiZWw7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxJbmRleChlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUluZGV4O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxLZXl3b3JkKGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGtleXdvcmRMYWJlbDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc0VybENvcmVFZmZlY3RmdWxGdW5jdGlvbihlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBjb3JlRWZmZWN0ZnVsRnVuY3Rpb25MYWJlbDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc0VybENvcmVQdXJlRnVuY3Rpb24oZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gY29yZVB1cmVGdW5jdGlvbkxhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsVXNlclB1cmVGdW5jdGlvbihlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB1c2VyUHVyZUZ1bmN0aW9uTGFiZWw7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxNYWNybyhlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBtYWNyb0xhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsTmlsKGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5pbExhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsSWRlbnRpZmllcihlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUlkZW50aWZpZXI7XG4gICAgfSBlbHNlIGlmIChpc0VybFN0cmluZyhlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZVN0cmluZztcbiAgICB9IGVsc2UgaWYgKGlzRXJsQXRvbShlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUF0b207XG4gICAgfSBlbHNlIGlmIChlcmxFeHByLmpzVmFsdWUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGV4dHJhY3RKc1ZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGVybFZhbHVlO1xuICAgICAgfTtcbiAgICB9XG4gIH0pKCk7XG4gIHJldHVybiBfc2VyaWFsaXplKGVybEV4cHIsIHNob3VsZEJlUmVhZGFibGUpO1xufTtcblxuY29uc3Qgc2VyaWFsaXplQXRvbSA9IGZ1bmN0aW9uKGVybEF0b20sIHNob3VsZEJlUmVhZGFibGUpIHtcbiAgcmV0dXJuIFwiKGF0b20gXCIgKyAoc2VyaWFsaXplKGVybEF0b20uZXJsVmFsdWUsIHNob3VsZEJlUmVhZGFibGUpKSArIFwiKVwiO1xufTtcblxuY29uc3Qgc2VyaWFsaXplSWRlbnRpZmllciA9IGZ1bmN0aW9uKGVybFN0cmluZywgc2hvdWxkQmVSZWFkYWJsZSkge1xuICByZXR1cm4gZXh0cmFjdEpzVmFsdWUoZXJsU3RyaW5nKTtcbn07XG5cbmNvbnN0IHNlcmlhbGl6ZUluZGV4ID0gZnVuY3Rpb24oZXJsSW5kZXgsIHNob3VsZEJlUmVhZGFibGUpIHtcbiAgY29uc3QganNJbmRleCA9IGVybEluZGV4LmpzVmFsdWU7XG4gIGxldCBtZW1vID0gJyc7XG4gIGZvciAobGV0IGtleSBpbiBqc0luZGV4KSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChqc0luZGV4LCBrZXkpKSBjb250aW51ZTtcbiAgICBjb25zdCBlcmxWYWx1ZSA9IGpzSW5kZXhba2V5XTtcbiAgICBpZiAobWVtbyA9PT0gJycpIHtcbiAgICAgIG1lbW8gPSBcIlwiXG4gICAgICAgICsga2V5XG4gICAgICAgICsgXCIgXCJcbiAgICAgICAgKyAoc2VyaWFsaXplKGVybFZhbHVlLCBzaG91bGRCZVJlYWRhYmxlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbW8gPSBcIlwiXG4gICAgICAgICsgbWVtb1xuICAgICAgICArIFwiLCBcIlxuICAgICAgICArIGtleVxuICAgICAgICArIFwiIFwiXG4gICAgICAgICsgKHNlcmlhbGl6ZShlcmxWYWx1ZSwgc2hvdWxkQmVSZWFkYWJsZSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5kZXhTdGFydCArIG1lbW8gKyBpbmRleEVuZDtcbn07XG5cbmNvbnN0IHNlcmlhbGl6ZUxpc3QgPSBmdW5jdGlvbihlcmxMaXN0LCBzaG91bGRCZVJlYWRhYmxlKSB7XG4gIGNvbnN0IHNlcmlhbGl6ZWRMaXN0ID0gcmVkdWNlKFxuICAgIFwiXCIsXG4gICAgYWRqb2luRXJsVmFsdWUoc2hvdWxkQmVSZWFkYWJsZSksXG4gICAgZXJsTGlzdCk7XG4gIHJldHVybiBsaXN0U3RhcnQgKyBzZXJpYWxpemVkTGlzdCArIGxpc3RFbmQ7XG59O1xuXG5jb25zdCBzZXJpYWxpemVTdHJpbmcgPSBmdW5jdGlvbihlcmxTdHJpbmcsIHNob3VsZEJlUmVhZGFibGUpIHtcbiAgY29uc3QganNTdHJpbmcgPSBzdHJpcFF1b3RlcyhleHRyYWN0SnNWYWx1ZShlcmxTdHJpbmcpKTtcbiAgaWYgKCFzaG91bGRCZVJlYWRhYmxlKSB7XG4gICAgcmV0dXJuIGpzU3RyaW5nO1xuICB9XG4gIHJldHVybiBqc1N0cmluZ1xuICAgIC5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpXG4gICAgLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuICAgIC5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyk7XG59O1xuXG5jb25zdCBzdHJpcFF1b3RlcyA9IGZ1bmN0aW9uKGpzU3RyaW5nKSB7XG4gIHJldHVybiBqc1N0cmluZy5zbGljZSgxLCAtMSk7XG59O1xuXG5jb25zdCBjb3JlRWZmZWN0ZnVsRnVuY3Rpb25MYWJlbCA9ICc8ZWZmZWN0ZnVsIGNvcmUgZnVuY3Rpb24+JztcbmNvbnN0IGNvcmVQdXJlRnVuY3Rpb25MYWJlbCAgICAgID0gJzxjb3JlIGZ1bmN0aW9uPic7XG5jb25zdCBpZ25vcmVMYWJlbCAgICAgICAgICAgICAgICA9ICc8aWdub3JlPic7XG5jb25zdCBrZXl3b3JkTGFiZWwgICAgICAgICAgICAgICA9ICc8a2V5d29yZD4nO1xuY29uc3QgbWFjcm9MYWJlbCAgICAgICAgICAgICAgICAgPSAnPG1hY3JvPic7XG5jb25zdCBuaWxMYWJlbCAgICAgICAgICAgICAgICAgICA9ICduaWwnO1xuY29uc3QgdXNlclB1cmVGdW5jdGlvbkxhYmVsICAgICAgPSAnPGZ1bmN0aW9uPic7XG5cbmV4cG9ydCB7IHNlcmlhbGl6ZSB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIihkb1xcbiAgKGRlZiEgZml4KiAoXFxuICAgIGZuKiAoZikgKFxcbiAgICAgIChmbiogKHgpIChmIChmbiogKCYgeXMpIChhcHBseSAoeCB4KSB5cykpKSlcXG4gICAgICAoZm4qICh4KSAoZiAoZm4qICgmIHlzKSAoYXBwbHkgKHggeCkgeXMpKSkpKSkpXFxuXFxuICAoZGVmISBtZW1maXgqIChcXG4gICAgZm4qIChmKSAoXFxuICAgICAgbGV0KiAoY2FjaGUge30pIChcXG4gICAgICAgIChmbiogKHggY2FjaGUpIChcXG4gICAgICAgICAgZlxcbiAgICAgICAgICAgIChmbiogKHopIChcXG4gICAgICAgICAgICAgIGlmIChjb250YWlucz8gY2FjaGUgeilcXG4gICAgICAgICAgICAgICAgKGdldCBjYWNoZSB6KVxcbiAgICAgICAgICAgICAgICAobGV0KiAocmVzdWx0ICgoZm4qICh5KSAoKHggeCBjYWNoZSkgeSkpIHopKSAoXFxuICAgICAgICAgICAgICAgICAgZG9cXG4gICAgICAgICAgICAgICAgICAgIChzZXQhIGNhY2hlIHogcmVzdWx0KVxcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0KSkpKVxcbiAgICAgICAgICAgIGNhY2hlKSlcXG4gICAgICAgIChmbiogKHggY2FjaGUpIChcXG4gICAgICAgICAgZlxcbiAgICAgICAgICAgIChmbiogKHopIChcXG4gICAgICAgICAgICAgIGlmIChjb250YWlucz8gY2FjaGUgeilcXG4gICAgICAgICAgICAgICAgKGdldCBjYWNoZSB6KVxcbiAgICAgICAgICAgICAgICAobGV0KiAocmVzdWx0ICgoZm4qICh5KSAoKHggeCBjYWNoZSkgeSkpIHopKSAoXFxuICAgICAgICAgICAgICAgICAgZG9cXG4gICAgICAgICAgICAgICAgICAgIChzZXQhIGNhY2hlIHogcmVzdWx0KVxcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0KSkpKVxcbiAgICAgICAgICAgIGNhY2hlKSlcXG4gICAgICAgIGNhY2hlKSkpKVxcblxcbiAgKGRlZiEgXzAgY2FyKVxcblxcbiAgKGRlZiEgXzEgKGZuKiAoeHMpIChudGggMSB4cykpKVxcblxcbiAgKGRlZiEgXzIgKGZuKiAoeHMpIChudGggMiB4cykpKVxcblxcbiAgKGRlZiEgc3dhcCEgKFxcbiAgICBtYWNybyogKGF0b20gJiB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBhdG9tXFxuICAgICAgICBgKGxldCogKC1hdG9tLSB+YXRvbSkgKFxcbiAgICAgICAgICBkb1xcbiAgICAgICAgICAgIChyZXNldCEgLWF0b20tICh+KGNhciB4cykgKGRlcmVmIC1hdG9tLSkgfkAoY2RyIHhzKSkpXFxuICAgICAgICAgICAgKGRlcmVmIC1hdG9tLSkpKSkpKVxcblxcbiAgKGRlZiEgKmdlbnN5bS1jb3VudGVyKiAoYXRvbSAwKSlcXG5cXG4gIChkZWYhIGdlbnN5bSAoXFxuICAgICAgZm4qICgpIChzeW1ib2wgKHN0cmluZyBcXFwiR19fXFxcIiAoc3dhcCEgKmdlbnN5bS1jb3VudGVyKiBpbmNyKSkpKSlcXG5cXG4gIChkZWYhIG9yIChcXG4gICAgbWFjcm8qICgmIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIGZhbHNlXFxuICAgICAgICAobGV0KiAoLXF1ZXJ5LSAoZ2Vuc3ltKSlcXG4gICAgICAgICAgYChsZXQqICh+LXF1ZXJ5LSB+KGNhciB4cykpIChcXG4gICAgICAgICAgICBpZiB+LXF1ZXJ5LVxcbiAgICAgICAgICAgICAgfi1xdWVyeS1cXG4gICAgICAgICAgICAgIChvciB+QChjZHIgeHMpKSkpKSkpKVxcblxcbiAgKGRlZiEgYW5kIChcXG4gICAgbWFjcm8qICgmIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIHRydWVcXG4gICAgICAgIChsZXQqICgtcXVlcnktIChnZW5zeW0pKVxcbiAgICAgICAgICBgKGxldCogKH4tcXVlcnktIH4oY2FyIHhzKSkgKFxcbiAgICAgICAgICAgIGlmIH4tcXVlcnktXFxuICAgICAgICAgICAgICAoYW5kIH5AKGNkciB4cykpXFxuICAgICAgICAgICAgICBmYWxzZSkpKSkpKVxcblxcbiAgKGRlZiEgY29uZCAoXFxuICAgIG1hY3JvKiAoJiB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBuaWxcXG4gICAgICAgIChpZiAoZW1wdHk/IChjZHIgeHMpKVxcbiAgICAgICAgICAodGhyb3cgXFxcImBjb25kYCByZXF1aXJlcyBhbiBldmVuIG51bWJlciBvZiBmb3Jtcy5cXFwiKVxcbiAgICAgICAgICAobGV0KiAoLXF1ZXJ5LSAoZ2Vuc3ltKSlcXG4gICAgICAgICAgICBgKGxldCogKH4tcXVlcnktIH4oY2FyIHhzKSkgKFxcbiAgICAgICAgICAgICAgaWYgfi1xdWVyeS1cXG4gICAgICAgICAgICAgICAgfihfMSB4cylcXG4gICAgICAgICAgICAgICAgKGNvbmQgfkAoY2RyIChjZHIgeHMpKSkpKSkpKSkpXFxuXFxuICAoZGVmISBsb29wIChcXG4gICAgbWFjcm8qIChmb3JtMCBmb3JtMSlcXG4gICAgICBgKGxldCogKGxvb3AgKG1lbWZpeCogKGZuKiAobG9vcCkgKGZuKiAofihfMCBmb3JtMCkpIH5mb3JtMSkpKSkgKFxcbiAgICAgICAgbG9vcCB+KF8xIGZvcm0wKSkpKSlcXG5cXG4gIChkZWYhIC0+IChcXG4gICAgbWFjcm8qICgmIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIG5pbFxcbiAgICAgICAgKGxldCogKHggKGNhciB4cykgeHMgKGNkciB4cykpIChcXG4gICAgICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgICAgICB4XFxuICAgICAgICAgICAgKGxldCogKGZvcm0gKGNhciB4cykgZm9ybXMgKGNkciB4cykpIChcXG4gICAgICAgICAgICAgIGlmIChlbXB0eT8gZm9ybXMpXFxuICAgICAgICAgICAgICAgIChpZiAobGlzdD8gZm9ybSlcXG4gICAgICAgICAgICAgICAgICAoaWYgKD0gKHN5bWJvbCBcXFwiZm4qXFxcIikgKGNhciBmb3JtKSlcXG4gICAgICAgICAgICAgICAgICAgIGAofmZvcm0gfngpXFxuICAgICAgICAgICAgICAgICAgICBgKH4oY2FyIGZvcm0pIH54IH5AKGNkciBmb3JtKSkpXFxuICAgICAgICAgICAgICAgICAgKGxpc3QgZm9ybSB4KSlcXG4gICAgICAgICAgICAgICAgYCgtPiAoLT4gfnggfmZvcm0pIH5AZm9ybXMpKSkpKSkpKVxcblxcbiAgKGRlZiEgLT4+IChcXG4gICAgbWFjcm8qICgmIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIG5pbFxcbiAgICAgICAgKGxldCogKHggKGNhciB4cykgeHMgKGNkciB4cykpIChcXG4gICAgICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgICAgICB4XFxuICAgICAgICAgICAgKGxldCogKGZvcm0gKGNhciB4cykgZm9ybXMgKGNkciB4cykpIChcXG4gICAgICAgICAgICAgIGlmIChlbXB0eT8gZm9ybXMpXFxuICAgICAgICAgICAgICAgIChpZiAobGlzdD8gZm9ybSlcXG4gICAgICAgICAgICAgICAgICAoaWYgKD0gKHN5bWJvbCBcXFwiZm4qXFxcIikgKGNhciBmb3JtKSlcXG4gICAgICAgICAgICAgICAgICAgIGAofmZvcm0gfngpXFxuICAgICAgICAgICAgICAgICAgICBgKH5AZm9ybSB+eCkpXFxuICAgICAgICAgICAgICAgICAgKGxpc3QgZm9ybSB4KSlcXG4gICAgICAgICAgICAgICAgYCgtPj4gKC0+PiB+eCB+Zm9ybSkgfkBmb3JtcykpKSkpKSkpXFxuXFxuICAoZGVmISAtPiogKG1hY3JvKiAoJiB4cykgYChmbiogKC14LSkgKC0+IC14LSB+QHhzKSkpKVxcblxcbiAgKGRlZiEgLT4+KiAobWFjcm8qICgmIHhzKSBgKGZuKiAoLXgtKSAoLT4+IC14LSB+QHhzKSkpKVxcblxcbiAgKGRlZiEgbm90IChmbiogKHgpIChpZiB4IGZhbHNlIHRydWUpKSlcXG5cXG4gIChkZWYhIGluY3IgKC0+KiAoKyAxKSkpXFxuXFxuICAoZGVmISBkZWNyICgtPiogKC0gMSkpKVxcblxcbiAgKGRlZiEgemVybz8gKC0+KiAoPSAwKSkpXFxuXFxuICAoZGVmISBpZGVudGl0eSAoZm4qICh4KSB4KSlcXG5cXG4gIChkZWYhIGNvbnN0YW50LWZuIChmbiogKHgpIChmbiogKHkpIHgpKSlcXG5cXG4gIChkZWYhIGNhbGwtb24gKGZuKiAoJiB4cykgKGZuKiAoZm4pIChhcHBseSBmbiB4cykpKSlcXG5cXG4gIChkZWYhIHN0ZXAtaW50by1saXN0IChcXG4gICAgZm4qICh4cyBmbjAgZm4xKSAoXFxuICAgICAgbGV0KiAoeCAoY2FyIHhzKSAteHMtIChjZHIgeHMpKSAoXFxuICAgICAgICBpZiAoZW1wdHk/IC14cy0pXFxuICAgICAgICAgIChmbjEgeClcXG4gICAgICAgICAgKGZuMCB4IC14cy0pKSkpKVxcblxcbiAgKGRlZiEgYXBwbHktb24gKFxcbiAgICBmbiogKCYgeHMpIChcXG4gICAgICBzdGVwLWludG8tbGlzdFxcbiAgICAgICAgeHNcXG4gICAgICAgIChmbiogKGFyZ3VtZW50cyAteHMtKSAoYXBwbHkgKGNhciAteHMtKSBhcmd1bWVudHMpKVxcbiAgICAgICAgKGZuKiAoYXJndW1lbnRzKSAoZm4qIChmKSAoYXBwbHkgZiBhcmd1bWVudHMpKSkpKSlcXG5cXG4gIChkZWYhIHJlZHVjZSAoXFxuICAgIGZuKiAoZiBzZWVkIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIHNlZWRcXG4gICAgICAgIChyZWR1Y2UgZiAoZiBzZWVkIChjYXIgeHMpKSAoY2RyIHhzKSkpKSlcXG5cXG4gIChkZWYhIGZpbHRlciAoXFxuICAgIGZuKiAocHJlZGljYXRlIHhzKSAoXFxuICAgICAgcmV2ZXJzZSAoXFxuICAgICAgICByZWR1Y2VcXG4gICAgICAgICAgKGZuKiAobWVtbyB4KSAoaWYgKHByZWRpY2F0ZSB4KSAoY29ucyB4IG1lbW8pIG1lbW8pKVxcbiAgICAgICAgICAnKClcXG4gICAgICAgICAgeHMpKSkpXFxuXFxuICAoZGVmISBtYXAgKFxcbiAgICBmbiogKGYgeHMpIChcXG4gICAgICByZXZlcnNlIChcXG4gICAgICAgIHJlZHVjZVxcbiAgICAgICAgICAoZm4qIChtZW1vIHgpIChjb25zIChmIHgpIG1lbW8pKVxcbiAgICAgICAgICAnKClcXG4gICAgICAgICAgeHMpKSkpXFxuXFxuICAoZGVmISBldmVyeT8gKFxcbiAgICBmbiogKHByZWQgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgdHJ1ZVxcbiAgICAgICAgKGlmIChwcmVkIChjYXIgeHMpKSAoZXZlcnk/IHByZWQgKGNkciB4cykpIGZhbHNlKSkpKVxcblxcbiAgKGRlZiEgc29tZT8gKFxcbiAgICBmbiogKHByZWQgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgZmFsc2VcXG4gICAgICAgIChpZiAocHJlZCAoY2FyIHhzKSkgdHJ1ZSAoc29tZT8gcHJlZCAoY2RyIHhzKSkpKSkpXFxuXFxuICAoZGVmISBsZXRtZW1yZWMqIChcXG4gICAgbWFjcm8qIChhbGlhcyBleHByKVxcbiAgICAgIGAobGV0KiAoXFxuICAgICAgICB+KGNhciBhbGlhcylcXG4gICAgICAgIChtZW1maXgqIChmbiogKH4oY2FyIGFsaWFzKSkgfihfMSBhbGlhcykpKSlcXG4gICAgICAgICAgfmV4cHIpKSlcXG5cXG4gIChkZWYhIHNraXAgKFxcbiAgICBmbiogKG5iciB4cykgKFxcbiAgICAgIGxldHJlYyogKFxcbiAgICAgICAgLXNraXAtXFxuICAgICAgICAoZm4qICh5cykgKFxcbiAgICAgICAgICBsZXQqIChuYnIgKGNhciB5cykgeHMgKF8xIHlzKSkgKFxcbiAgICAgICAgICAgIGNvbmRcXG4gICAgICAgICAgICAgICg9IDAgbmJyKSB4c1xcbiAgICAgICAgICAgICAgKD0gMSBuYnIpIChjZHIgeHMpXFxuICAgICAgICAgICAgICBcXFwiZGVmYXVsdFxcXCIgKC1za2lwLSAobGlzdCAoZGVjciBuYnIpIChjZHIgeHMpKSkpKSkpIChcXG4gICAgICAgICAgLXNraXAtIChsaXN0IG5iciB4cykpKSkpXFxuXFxuICAoZGVmISBpbnZva2FibGU/IChmbiogKHgpIChvciAoZnVuY3Rpb24/IHgpIChtYWNybz8geCkpKSlcXG5cXG4gIChkZWYhIC4gKFxcbiAgICBtYWNybyogKHgga2V5ICYgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgYChnZXQgfnggfmtleSlcXG4gICAgICAgIGAoKGdldCB+eCB+a2V5KSB+QHhzKSkpKVxcblxcbiAgKGRlZiEgLi4gKFxcbiAgICBmbiogKGxvIGhpKSAoXFxuICAgICAgbGV0cmVjKiAoXFxuICAgICAgICAtLi4tXFxuICAgICAgICAoZm4qICh4cykgKFxcbiAgICAgICAgICBsZXQqIChsbyAoXzAgeHMpIGhpIChfMSB4cykgLWxpc3QtIChfMiB4cykpIChcXG4gICAgICAgICAgICBpZiAoPSBsbyBoaSlcXG4gICAgICAgICAgICAgIChjb25zIGhpIC1saXN0LSlcXG4gICAgICAgICAgICAgICgtLi4tIChsaXN0IGxvIChkZWNyIGhpKSAoY29ucyBoaSAtbGlzdC0pKSkpKSkpIChcXG4gICAgICAgICAgLS4uLSAobGlzdCBsbyBoaSAnKCkpKSkpKVxcblxcbiAgKGRlZiEgZGVmcmVjISAoXFxuICAgIG1hY3JvKiAoZm4tbmFtZSBmbi1ib2R5KVxcbiAgICAgIGAoZGVmISB+Zm4tbmFtZSAobGV0cmVjKiAofmZuLW5hbWUgfmZuLWJvZHkpIH5mbi1uYW1lKSkpKVxcblxcbiAgKGRlZiEgZm9yKiAoXFxuICAgIG1hY3JvKiAobG9vcC1wYXJhbWV0ZXJzIGJvZHkpXFxuICAgICAgYChsb29wXFxuICAgICAgICAgfihfMCBsb29wLXBhcmFtZXRlcnMpXFxuICAgICAgICAgKGlmIH4oXzEgbG9vcC1wYXJhbWV0ZXJzKVxcbiAgICAgICAgICAgKGRvIH5ib2R5IChsb29wIH4oXzIgbG9vcC1wYXJhbWV0ZXJzKSkpXFxuICAgICAgICAgICBuaWwpKSkpXFxuXFxuICAoZGVmISBmb3ItZWFjaCAoXFxuICAgIGZuKiAoZiB4cykgKFxcbiAgICAgIHJlZHVjZSAoZm4qIChtZW1vIHgpIChkbyAoZiB4KSBtZW1vKSkgbmlsIHhzKSkpXFxuXFxuICAoZGVmISBuLXRpbWVzIChcXG4gICAgZm4qIChuIGYpIChcXG4gICAgICBsb29wXFxuICAgICAgICAoaSAwKVxcbiAgICAgICAgKGlmICg9IGkgbilcXG4gICAgICAgICAgbmlsXFxuICAgICAgICAgIChkbyAoZiBpKSAobG9vcCAoKyBpIDEpKSkpKSkpXFxuXFxuICAoZGVmISB0YXAgKGZuKiAoZiB4KSAoZG8gKGYgeCkgeCkpKVxcblxcbiAgKGRlZiEgd2l0aC1zaWRlLWVmZmVjdCAoZm4qICh0aHVuayB4KSAoZG8gKHRodW5rKSB4KSkpXFxuXFxuICAoZGVmISB0aHVuayAobWFjcm8qIChmb3JtKSBgKGZuKiAoKSB+Zm9ybSkpKVxcblxcbiAgKGRlZiEgY2FsbCAobWFjcm8qIChmICYgeHMpIGAofmYgfkB4cykpKVxcblxcbiAgKGRlZiEgYXBwbHkgKG1hY3JvKiAoZiB4cykgYChldmFsIChjb25zIH5mIH54cykpKSlcXG5cXG4gIChkZWYhIGV2YWwtc3RyaW5nIChmbiogKGVybFN0cmluZykgKGV2YWwgKHBhcnNlIGVybFN0cmluZykpKSlcXG4pXFxuXCIiLCJpbXBvcnQgeyBjb21tZW50U2lnbmFsIH0gZnJvbSAnLi9jb21tZW50U2lnbmFsJztcblxuY29uc3QgY3JlYXRlVG9rZW5SZWdleCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gL1tcXHMsXSoofkB8XFwjXFwrfFxcI1xcLXxcXCNcXCF8W1xcW1xcXSgpe30nYH5AXl18XCIoPzpcXFxcLnxbXlxcXFxcIl0pKlwifDsuKnxbXlxcc1xcW1xcXSgpe30nXCJgLDtdKikvZztcbn07XG5cbmNvbnN0IGlzQ29tbWVudCA9IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIHJldHVybiBtYXRjaFswXSA9PT0gJzsnO1xufTtcblxuY29uc3QgaXNNZWFuaW5nZnVsID0gZnVuY3Rpb24obWF0Y2gpIHtcbiAgcmV0dXJuIG1hdGNoICE9PSAnJztcbn07XG5cbmNvbnN0IHRva2VuaXplID0gZnVuY3Rpb24oc291cmNlQ29kZSkge1xuICBsZXQgbWF0Y2g7XG4gIGNvbnN0IHRva2VuUmVnZXggPSBjcmVhdGVUb2tlblJlZ2V4KCk7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICB3aGlsZSAoaXNNZWFuaW5nZnVsKG1hdGNoID0gdG9rZW5SZWdleC5leGVjKHNvdXJjZUNvZGUpWzFdKSkge1xuICAgIGlmIChpc0NvbW1lbnQobWF0Y2gpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2gobWF0Y2gpO1xuICB9XG4gIGlmIChyZXN1bHQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGNvbW1lbnRTaWduYWw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcblxuZXhwb3J0IHsgdG9rZW5pemUgfTtcbiIsImltcG9ydCB7IHBhcnNlIH0gZnJvbSAnLi9wYXJzZSc7XG5pbXBvcnQgeyB0b2tlbml6ZSB9IGZyb20gJy4vdG9rZW5pemUnO1xuXG5leHBvcnQgY29uc3QgdG9rZW5pemVBbmRQYXJzZSA9IGZ1bmN0aW9uKHNvdXJjZUNvZGUpIHtcbiAgcmV0dXJuIHBhcnNlKHRva2VuaXplKHNvdXJjZUNvZGUpKTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFcmxMaXN0IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBlcmxBdG9tVHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZXJsVHlwZXMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgY3JlYXRlRXJsQXRvbSA9IGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZXJsVmFsdWU6IGVybFZhbHVlLFxuICAgIHR5cGU6IGVybEF0b21UeXBlXG4gIH07XG59O1xuXG5jb25zdCBjcmVhdGVFcmxCb29sZWFuID0gZnVuY3Rpb24oanNCb29sZWFuKSB7XG4gIGlmIChqc0Jvb2xlYW4pIHtcbiAgICByZXR1cm4gZXJsVHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsRmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUVybElnbm9yZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZXJsSWdub3JlO1xufTtcblxuY29uc3QgY3JlYXRlRXJsTmlsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBlcmxOaWw7XG59O1xuXG5jb25zdCBjcmVhdGVFcmxWYWx1ZSA9IGZ1bmN0aW9uKGpzVmFsdWUsIGVybFR5cGUpIHtcbiAgcmV0dXJuIHtcbiAgICBqc1ZhbHVlOiBqc1ZhbHVlLFxuICAgIHR5cGU6IGVybFR5cGVcbiAgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZUZhY3RvcnlBbmRQcmVkaWNhdGUgPSBmdW5jdGlvbihlcmxUeXBlKSB7XG4gIGNvbnN0IGZhY3RvcnkgPSBmdW5jdGlvbihqc1ZhbHVlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVybFZhbHVlKGpzVmFsdWUsIGVybFR5cGUpO1xuICB9O1xuICBjb25zdCBwcmVkaWNhdGUgPSBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgIHJldHVybiBlcmxWYWx1ZS50eXBlID09PSBlcmxUeXBlO1xuICB9O1xuICByZXR1cm4gW2ZhY3RvcnksIHByZWRpY2F0ZV07XG59O1xuXG5jb25zdCBjcmVhdGVQcmVkaWNhdGUgPSBmdW5jdGlvbihjb25zdGFudCkge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IGNvbnN0YW50O1xuICB9O1xufTtcblxuY29uc3QgZXh0cmFjdEpzVmFsdWUgPSBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICByZXR1cm4gZXJsVmFsdWUuanNWYWx1ZTtcbn07XG5cbmNvbnN0IF9lcmxUeXBlcyA9IGVybFR5cGVzLm1hcChjcmVhdGVGYWN0b3J5QW5kUHJlZGljYXRlKTtcblxuY29uc3QgX2NyZWF0ZUVybEJvb2xlYW4gICAgICAgICAgICAgID0gX2VybFR5cGVzWzBdWzBdO1xuY29uc3QgaXNFcmxCb29sZWFuICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzBdWzFdO1xuY29uc3QgY3JlYXRlRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uID0gX2VybFR5cGVzWzFdWzBdO1xuY29uc3QgaXNFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24gICAgID0gX2VybFR5cGVzWzFdWzFdO1xuY29uc3QgY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbiAgICAgID0gX2VybFR5cGVzWzJdWzBdO1xuY29uc3QgaXNFcmxDb3JlUHVyZUZ1bmN0aW9uICAgICAgICAgID0gX2VybFR5cGVzWzJdWzFdO1xuY29uc3QgY3JlYXRlRXJsSWRlbnRpZmllciAgICAgICAgICAgID0gX2VybFR5cGVzWzNdWzBdO1xuY29uc3QgaXNFcmxJZGVudGlmaWVyICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzNdWzFdO1xuY29uc3QgY3JlYXRlRXJsSW5kZXggICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzRdWzBdO1xuY29uc3QgaXNFcmxJbmRleCAgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzRdWzFdO1xuY29uc3QgY3JlYXRlRXJsS2V5d29yZCAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzVdWzBdO1xuY29uc3QgaXNFcmxLZXl3b3JkICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzVdWzFdO1xuY29uc3QgX2NyZWF0ZUVybExpc3QgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzZdWzBdO1xuY29uc3QgaXNFcmxMaXN0ICAgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzZdWzFdO1xuY29uc3QgY3JlYXRlRXJsTWFjcm8gICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzddWzBdO1xuY29uc3QgaXNFcmxNYWNybyAgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzddWzFdO1xuY29uc3QgY3JlYXRlRXJsTnVtYmVyICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzhdWzBdO1xuY29uc3QgaXNFcmxOdW1iZXIgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzhdWzFdO1xuY29uc3QgY3JlYXRlRXJsU3BlY2lhbEZvcm0gICAgICAgICAgID0gX2VybFR5cGVzWzldWzBdO1xuY29uc3QgaXNFcmxTcGVjaWFsRm9ybSAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzldWzFdO1xuY29uc3QgY3JlYXRlRXJsU3RyaW5nICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzEwXVswXTtcbmNvbnN0IGlzRXJsU3RyaW5nICAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1sxMF1bMV07XG5jb25zdCBjcmVhdGVFcmxTeW1ib2wgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTFdWzBdO1xuY29uc3QgaXNFcmxTeW1ib2wgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzExXVsxXTtcbmNvbnN0IF9jcmVhdGVFcmxVbml0ICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1sxMl1bMF07XG5jb25zdCBfaXNFcmxVbml0ICAgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTJdWzFdO1xuY29uc3QgY3JlYXRlRXJsVXNlclB1cmVGdW5jdGlvbiAgICAgID0gX2VybFR5cGVzWzEzXVswXTtcbmNvbnN0IGlzRXJsVXNlclB1cmVGdW5jdGlvbiAgICAgICAgICA9IF9lcmxUeXBlc1sxM11bMV07XG5jb25zdCBfY3JlYXRlRXJsQXRvbSAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTRdWzBdO1xuY29uc3QgaXNFcmxBdG9tICAgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzE0XVsxXTtcblxuY29uc3QgZXJsSWdub3JlID0gX2NyZWF0ZUVybFVuaXQobnVsbCk7XG5cbmNvbnN0IGVybE5pbCA9IF9jcmVhdGVFcmxVbml0KG51bGwpO1xuXG5jb25zdCBlcmxCb29sZWFucyA9IFtmYWxzZSwgdHJ1ZV0ubWFwKF9jcmVhdGVFcmxCb29sZWFuKTtcblxuY29uc3QgZXJsRmFsc2UgPSBlcmxCb29sZWFuc1swXTtcbmNvbnN0IGVybFRydWUgID0gZXJsQm9vbGVhbnNbMV07XG5cbmNvbnN0IHByZWRpY2F0ZXMgPSBbZXJsRmFsc2UsIGVybElnbm9yZSwgZXJsTmlsLCBlcmxUcnVlXS5tYXAoY3JlYXRlUHJlZGljYXRlKTtcblxuY29uc3QgaXNFcmxGYWxzZSAgPSBwcmVkaWNhdGVzWzBdO1xuY29uc3QgaXNFcmxJZ25vcmUgPSBwcmVkaWNhdGVzWzFdO1xuY29uc3QgaXNFcmxOaWwgICAgPSBwcmVkaWNhdGVzWzJdO1xuY29uc3QgaXNFcmxUcnVlICAgPSBwcmVkaWNhdGVzWzNdO1xuXG5leHBvcnQge1xuICBjcmVhdGVFcmxBdG9tLFxuICBjcmVhdGVFcmxCb29sZWFuLFxuICBjcmVhdGVFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24sXG4gIGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24sXG4gIGNyZWF0ZUVybElkZW50aWZpZXIsXG4gIGNyZWF0ZUVybElnbm9yZSxcbiAgY3JlYXRlRXJsSW5kZXgsXG4gIGNyZWF0ZUVybEtleXdvcmQsXG4gIGNyZWF0ZUVybExpc3QsXG4gIGNyZWF0ZUVybE1hY3JvLFxuICBjcmVhdGVFcmxOaWwsXG4gIGNyZWF0ZUVybE51bWJlcixcbiAgY3JlYXRlRXJsU3BlY2lhbEZvcm0sXG4gIGNyZWF0ZUVybFN0cmluZyxcbiAgY3JlYXRlRXJsU3ltYm9sLFxuICBjcmVhdGVFcmxVc2VyUHVyZUZ1bmN0aW9uLFxuICBleHRyYWN0SnNWYWx1ZSxcbiAgaXNFcmxBdG9tLFxuICBpc0VybEJvb2xlYW4sXG4gIGlzRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uLFxuICBpc0VybENvcmVQdXJlRnVuY3Rpb24sXG4gIGVybEZhbHNlLFxuICBpc0VybEZhbHNlLFxuICBpc0VybElkZW50aWZpZXIsXG4gIGVybElnbm9yZSxcbiAgaXNFcmxJZ25vcmUsXG4gIGlzRXJsSW5kZXgsXG4gIGlzRXJsS2V5d29yZCxcbiAgaXNFcmxMaXN0LFxuICBpc0VybE1hY3JvLFxuICBlcmxOaWwsXG4gIGlzRXJsTmlsLFxuICBpc0VybE51bWJlcixcbiAgaXNFcmxTcGVjaWFsRm9ybSxcbiAgaXNFcmxTdHJpbmcsXG4gIGlzRXJsU3ltYm9sLFxuICBlcmxUcnVlLFxuICBpc0VybFRydWUsXG4gIGlzRXJsVXNlclB1cmVGdW5jdGlvblxufTtcbiIsImNvbnN0IGVybEJvb2xlYW5UeXBlICAgICAgICAgICAgICAgPSAnZXJsQm9vbGVhblR5cGUnO1xuY29uc3QgZXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uVHlwZSA9ICdlcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb25UeXBlJztcbmNvbnN0IGVybENvcmVQdXJlRnVuY3Rpb25UeXBlICAgICAgPSAnZXJsQ29yZVB1cmVGdW5jdGlvblR5cGUnO1xuY29uc3QgZXJsSWRlbnRpZmllclR5cGUgICAgICAgICAgICA9ICdlcmxJZGVudGlmaWVyVHlwZSc7XG5jb25zdCBlcmxJbmRleFR5cGUgICAgICAgICAgICAgICAgID0gJ2VybEluZGV4VHlwZSc7XG5jb25zdCBlcmxLZXl3b3JkVHlwZSAgICAgICAgICAgICAgID0gJ2VybEtleXdvcmRUeXBlJztcbmNvbnN0IGVybExpc3RUeXBlICAgICAgICAgICAgICAgICAgPSAnZXJsTGlzdFR5cGUnO1xuY29uc3QgZXJsTWFjcm9UeXBlICAgICAgICAgICAgICAgICA9ICdlcmxNYWNyb1R5cGUnO1xuY29uc3QgZXJsTnVtYmVyVHlwZSAgICAgICAgICAgICAgICA9ICdlcmxOdW1iZXJUeXBlJztcbmNvbnN0IGVybFNwZWNpYWxGb3JtVHlwZSAgICAgICAgICAgPSAnZXJsU3BlY2lhbEZvcm1UeXBlJztcbmNvbnN0IGVybFN0cmluZ1R5cGUgICAgICAgICAgICAgICAgPSAnZXJsU3RyaW5nVHlwZSc7XG5jb25zdCBlcmxTeW1ib2xUeXBlICAgICAgICAgICAgICAgID0gJ2VybFN5bWJvbFR5cGUnO1xuY29uc3QgZXJsVW5pdFR5cGUgICAgICAgICAgICAgICAgICA9ICdlcmxVbml0VHlwZSc7XG5jb25zdCBlcmxVc2VyUHVyZUZ1bmN0aW9uVHlwZSAgICAgID0gJ2VybFVzZXJQdXJlRnVuY3Rpb25UeXBlJztcbmNvbnN0IGVybEF0b21UeXBlICAgICAgICAgICAgICAgICAgPSAnZXJsQXRvbVR5cGUnO1xuXG5jb25zdCBlcmxUeXBlcyA9IFtcbiAgZXJsQm9vbGVhblR5cGUsXG4gIGVybENvcmVFZmZlY3RmdWxGdW5jdGlvblR5cGUsXG4gIGVybENvcmVQdXJlRnVuY3Rpb25UeXBlLFxuICBlcmxJZGVudGlmaWVyVHlwZSxcbiAgZXJsSW5kZXhUeXBlLFxuICBlcmxLZXl3b3JkVHlwZSxcbiAgZXJsTGlzdFR5cGUsXG4gIGVybE1hY3JvVHlwZSxcbiAgZXJsTnVtYmVyVHlwZSxcbiAgZXJsU3BlY2lhbEZvcm1UeXBlLFxuICBlcmxTdHJpbmdUeXBlLFxuICBlcmxTeW1ib2xUeXBlLFxuICBlcmxVbml0VHlwZSxcbiAgZXJsVXNlclB1cmVGdW5jdGlvblR5cGUsXG4gIGVybEF0b21UeXBlXG5dO1xuXG5leHBvcnQge1xuICBlcmxBdG9tVHlwZSxcbiAgZXJsQm9vbGVhblR5cGUsXG4gIGVybENvcmVFZmZlY3RmdWxGdW5jdGlvblR5cGUsXG4gIGVybENvcmVQdXJlRnVuY3Rpb25UeXBlLFxuICBlcmxJZGVudGlmaWVyVHlwZSxcbiAgZXJsSW5kZXhUeXBlLFxuICBlcmxLZXl3b3JkVHlwZSxcbiAgZXJsTGlzdFR5cGUsXG4gIGVybE1hY3JvVHlwZSxcbiAgZXJsTnVtYmVyVHlwZSxcbiAgZXJsU3BlY2lhbEZvcm1UeXBlLFxuICBlcmxTdHJpbmdUeXBlLFxuICBlcmxTeW1ib2xUeXBlLFxuICBlcmxUeXBlcyxcbiAgZXJsVW5pdFR5cGUsXG4gIGVybFVzZXJQdXJlRnVuY3Rpb25UeXBlXG59O1xuIiwiZnVuY3Rpb24gZGlmZkFycmF5KHZhbHVlMSwgdmFsdWUwLCBpbmRleCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUwKSkge1xuICAgIHJldHVybiB7IHRyZWU6IGluZGV4LCBjb21tYW5kczogW1sncmVwbGFjZScsIHZhbHVlMV1dLCBpbmRleDogaW5kZXggKyAxIH07XG4gIH1cblxuICBsZXQgY291bnQgPSAwO1xuICBjb25zdCBsZW5ndGgxID0gdmFsdWUxLmxlbmd0aDtcbiAgY29uc3QgbGVuZ3RoMCA9IHZhbHVlMC5sZW5ndGg7XG4gIGNvbnN0IG1pbkxlbmd0aCA9IE1hdGgubWluKGxlbmd0aDEsIGxlbmd0aDApO1xuXG4gIGlmIChtaW5MZW5ndGggPiAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtaW5MZW5ndGg7IGorKykge1xuICAgICAgaWYgKHZhbHVlMVtqXSAhPT0gdmFsdWUwW2pdKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvdW50ID09PSBtaW5MZW5ndGgpIHtcbiAgICAgIHJldHVybiB7IHRyZWU6IGluZGV4LCBjb21tYW5kczogW1sncmVwbGFjZScsIHZhbHVlMV1dLCBpbmRleDogaW5kZXggKyAxIH07XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdHJlZSA9IFtdO1xuICBsZXQgY29tbWFuZHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1pbkxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHZhbHVlMVtpXSAhPT0gdmFsdWUwW2ldKSB7XG4gICAgICBjb25zdCBfcGF0Y2ggPSBfZGlmZih2YWx1ZTFbaV0sIHZhbHVlMFtpXSwgaW5kZXgpO1xuICAgICAgaWYgKF9wYXRjaC5jb21tYW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRyZWUucHVzaCh7IGluZGV4OiBpLCB2YWx1ZTogX3BhdGNoLnRyZWUgfSk7XG4gICAgICAgIGNvbW1hbmRzID0gY29tbWFuZHMuY29uY2F0KF9wYXRjaC5jb21tYW5kcyk7XG4gICAgICAgIGluZGV4ID0gaW5kZXggKyBfcGF0Y2guY29tbWFuZHMubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoMTsgaSsrKSB7XG4gICAgdHJlZS5wdXNoKHsgaW5kZXg6IGksIHZhbHVlOiBpbmRleCB9KTtcbiAgICBjb21tYW5kcy5wdXNoKFsnaW5zZXJ0QXRFbmQnLCB2YWx1ZTFbaV1dKTtcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgY29uc3QgcmVtb3ZhbHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDA7IGkrKykge1xuICAgIHJlbW92YWxzLnVuc2hpZnQoeyBpbmRleDogaSwgdmFsdWU6IGluZGV4IH0pO1xuICAgIGNvbW1hbmRzLnB1c2goWydyZW1vdmUnXSk7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIHJldHVybiB7IHRyZWU6IHRyZWUuY29uY2F0KHJlbW92YWxzKSwgY29tbWFuZHM6IGNvbW1hbmRzLCBpbmRleDogaW5kZXggfTtcbn1cblxuZnVuY3Rpb24gZGlmZk9iamVjdCh2YWx1ZTEsIHZhbHVlMCwgaW5kZXgpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZTApKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyZWU6IGluZGV4LFxuICAgICAgY29tbWFuZHM6IFtbJ3JlcGxhY2UnLCB2YWx1ZTFdXSxcbiAgICAgIGluZGV4OiBpbmRleCArIDFcbiAgICB9O1xuICB9XG5cbiAgbGV0IGtleUNvdW50ID0gMDtcbiAgbGV0IGRpZmZDb3VudCA9IDA7XG5cbiAgZm9yIChsZXQga2V5IGluIHZhbHVlMCkge1xuICAgIGlmICghdmFsdWUwLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xuICAgIGtleUNvdW50Kys7XG4gICAgaWYgKCF2YWx1ZTEuaGFzT3duUHJvcGVydHkoa2V5KSB8fCB2YWx1ZTFba2V5XSAhPT0gdmFsdWUwW2tleV0pIHtcbiAgICAgIGRpZmZDb3VudCsrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrZXlDb3VudCA+IDEgJiYga2V5Q291bnQgPT09IGRpZmZDb3VudCkge1xuICAgIHJldHVybiB7IHRyZWU6IGluZGV4LCBjb21tYW5kczogW1sncmVwbGFjZScsIHZhbHVlMV1dLCBpbmRleDogaW5kZXggKyAxIH07XG4gIH1cblxuICBjb25zdCB0cmVlID0gW107XG4gIGxldCBjb21tYW5kcyA9IFtdO1xuXG4gIGZvciAobGV0IGtleSBpbiB2YWx1ZTEpIHtcbiAgICBpZiAoIXZhbHVlMS5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcbiAgICBpZiAodmFsdWUwLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGlmICh2YWx1ZTFba2V5XSAhPT0gdmFsdWUwW2tleV0pIHtcbiAgICAgICAgY29uc3QgX3BhdGNoID0gX2RpZmYodmFsdWUxW2tleV0sIHZhbHVlMFtrZXldLCBpbmRleCk7XG4gICAgICAgIGlmIChfcGF0Y2guY29tbWFuZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRyZWUucHVzaCh7IGluZGV4OiBrZXksIHZhbHVlOiBfcGF0Y2gudHJlZSB9KTtcbiAgICAgICAgICBjb21tYW5kcyA9IGNvbW1hbmRzLmNvbmNhdChfcGF0Y2guY29tbWFuZHMpO1xuICAgICAgICAgIGluZGV4ID0gaW5kZXggKyBfcGF0Y2guY29tbWFuZHMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyZWUucHVzaCh7IGluZGV4OiBrZXksIHZhbHVlOiBpbmRleCB9KTtcbiAgICAgIGNvbW1hbmRzLnB1c2goWydzZXRBdEtleScsIHZhbHVlMVtrZXldXSk7XG4gICAgICBpbmRleCsrO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGtleSBpbiB2YWx1ZTApIHtcbiAgICBpZiAoIXZhbHVlMS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB0cmVlLnB1c2goeyBpbmRleDoga2V5LCB2YWx1ZTogaW5kZXggfSk7XG4gICAgICBjb21tYW5kcy5wdXNoKFsnZGVsZXRlJ10pO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyB0cmVlOiB0cmVlLCBjb21tYW5kczogY29tbWFuZHMsIGluZGV4OiBpbmRleCB9O1xufVxuXG5mdW5jdGlvbiBfZGlmZih2YWx1ZTEsIHZhbHVlMCwgaW5kZXgpIHtcbiAgaWYgKHZhbHVlMSA9PT0gdmFsdWUwKSB7XG4gICAgcmV0dXJuIHsgdHJlZTogW10sIGNvbW1hbmRzOiBbXSwgaW5kZXg6IGluZGV4IH07XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZTEpKSB7XG4gICAgcmV0dXJuIGRpZmZBcnJheSh2YWx1ZTEsIHZhbHVlMCwgaW5kZXgpO1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlMSkpIHtcbiAgICByZXR1cm4gZGlmZk9iamVjdCh2YWx1ZTEsIHZhbHVlMCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHsgdHJlZTogaW5kZXgsIGNvbW1hbmRzOiBbWydyZXBsYWNlJywgdmFsdWUxXV0sIGluZGV4OiBpbmRleCArIDEgfTtcbn1cblxuY29uc3QgZGlmZiA9IGZ1bmN0aW9uKHZhbHVlMSwgdmFsdWUwKSB7XG4gIGNvbnN0IHBhdGNoID0gX2RpZmYodmFsdWUxLCB2YWx1ZTAsIDApO1xuICByZXR1cm4geyB2YWx1ZTogcGF0Y2gudHJlZSwgY29tbWFuZHM6IHBhdGNoLmNvbW1hbmRzIH07XG59O1xuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5leHBvcnQgeyBkaWZmIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZykge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB7IHRhZzogdGFnIH07XG5cbiAgICBpZiAoY29uZmlnICE9IG51bGwpIHsgLy8gaXNPYmplY3RcblxuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZykge1xuICAgICAgICBpZiAoa2V5ID09PSAnaWQnKSB7XG4gICAgICAgICAgZWxlbWVudC5pZCA9IGNvbmZpZy5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT09ICdjbGFzc2VzJykge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NlcyA9IGNvbmZpZy5jbGFzc2VzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUgPSBjb25maWcuc3R5bGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09PSAnYXR0cmlicycpIHtcbiAgICAgICAgICBlbGVtZW50LmF0dHJpYnMgPSBjb25maWcuYXR0cmlicztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIGlzU3RyaW5nKGFyZ3NbMF0pKSB7XG4gICAgICAgIGVsZW1lbnQuY2hpbGRyZW4gPSBhcmdzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5jaGlsZHJlbiA9IFtdLmNvbmNhdC5hcHBseShbXSwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59XG5cbmNvbnN0IHRhZ3MgPSB7XG4gICdBJzogdHJ1ZSxcbiAgJ0JVVFRPTic6IHRydWUsXG4gICdDQU5WQVMnOiB0cnVlLFxuICAnQ09ERSc6IHRydWUsXG4gICdESVYnOiB0cnVlLFxuICAnRk9PVEVSJzogdHJ1ZSxcbiAgJ0ZPUk0nOiB0cnVlLFxuICAnSDEnOiB0cnVlLFxuICAnSDInOiB0cnVlLFxuICAnSDMnOiB0cnVlLFxuICAnSDQnOiB0cnVlLFxuICAnSDUnOiB0cnVlLFxuICAnSDYnOiB0cnVlLFxuICAnSEVBREVSJzogdHJ1ZSxcbiAgJ0lNRyc6IHRydWUsXG4gICdMQUJFTCc6IHRydWUsXG4gICdMSSc6IHRydWUsXG4gICdMSU5LJzogdHJ1ZSxcbiAgJ05BVic6IHRydWUsXG4gICdOT1NDUklQVCc6IHRydWUsXG4gICdPUFRHUk9VUCc6IHRydWUsXG4gICdPUFRJT04nOiB0cnVlLFxuICAnT1VUUFVUJzogdHJ1ZSxcbiAgJ1AnOiB0cnVlLFxuICAnUEFSQU0nOiB0cnVlLFxuICAnUFJFJzogdHJ1ZSxcbiAgJ1NDUklQVCc6IHRydWUsXG4gICdTRUNUSU9OJzogdHJ1ZSxcbiAgJ1NFTEVDVCc6IHRydWUsXG4gICdTT1VSQ0UnOiB0cnVlLFxuICAnU1BBTic6IHRydWUsXG4gICdTVFlMRSc6IHRydWUsXG4gICdURVhUQVJFQSc6IHRydWVcbn07XG5cbmNvbnN0IGVsZW1lbnRGYWN0b3JpZXMgPSB7fTtcblxuZm9yIChsZXQgdGFnTmFtZSBpbiB0YWdzKSB7XG4gIGVsZW1lbnRGYWN0b3JpZXNbdGFnTmFtZV0gPSBjcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xufVxuXG5leHBvcnQgY29uc3QgQSA9IGVsZW1lbnRGYWN0b3JpZXMuQTtcbmV4cG9ydCBjb25zdCBCVVRUT04gPSBlbGVtZW50RmFjdG9yaWVzLkJVVFRPTjtcbmV4cG9ydCBjb25zdCBDQU5WQVMgPSBlbGVtZW50RmFjdG9yaWVzLkNBTlZBUztcbmV4cG9ydCBjb25zdCBDT0RFID0gZWxlbWVudEZhY3Rvcmllcy5DT0RFO1xuZXhwb3J0IGNvbnN0IERJViA9IGVsZW1lbnRGYWN0b3JpZXMuRElWO1xuZXhwb3J0IGNvbnN0IEZPT1RFUiA9IGVsZW1lbnRGYWN0b3JpZXMuRk9PVEVSO1xuZXhwb3J0IGNvbnN0IEZPUk0gPSBlbGVtZW50RmFjdG9yaWVzLkZPUk07XG5leHBvcnQgY29uc3QgSDEgPSBlbGVtZW50RmFjdG9yaWVzLkgxO1xuZXhwb3J0IGNvbnN0IEgyID0gZWxlbWVudEZhY3Rvcmllcy5IMjtcbmV4cG9ydCBjb25zdCBIMyA9IGVsZW1lbnRGYWN0b3JpZXMuSDM7XG5leHBvcnQgY29uc3QgSDQgPSBlbGVtZW50RmFjdG9yaWVzLkg0O1xuZXhwb3J0IGNvbnN0IEg1ID0gZWxlbWVudEZhY3Rvcmllcy5INTtcbmV4cG9ydCBjb25zdCBINiA9IGVsZW1lbnRGYWN0b3JpZXMuSDY7XG5leHBvcnQgY29uc3QgSEVBREVSID0gZWxlbWVudEZhY3Rvcmllcy5IRUFERVI7XG5leHBvcnQgY29uc3QgSU1HID0gZWxlbWVudEZhY3Rvcmllcy5JTUc7XG5leHBvcnQgY29uc3QgTEFCRUwgPSBlbGVtZW50RmFjdG9yaWVzLkxBQkVMO1xuZXhwb3J0IGNvbnN0IExJID0gZWxlbWVudEZhY3Rvcmllcy5MSTtcbmV4cG9ydCBjb25zdCBMSU5LID0gZWxlbWVudEZhY3Rvcmllcy5MSU5LO1xuZXhwb3J0IGNvbnN0IE5BViA9IGVsZW1lbnRGYWN0b3JpZXMuTkFWO1xuZXhwb3J0IGNvbnN0IE5PU0NSSVBUID0gZWxlbWVudEZhY3Rvcmllcy5OT1NDUklQVDtcbmV4cG9ydCBjb25zdCBPUFRHUk9VUCA9IGVsZW1lbnRGYWN0b3JpZXMuT1BUR1JPVVA7XG5leHBvcnQgY29uc3QgT1BUSU9OID0gZWxlbWVudEZhY3Rvcmllcy5PUFRJT047XG5leHBvcnQgY29uc3QgT1VUUFVUID0gZWxlbWVudEZhY3Rvcmllcy5PVVRQVVQ7XG5leHBvcnQgY29uc3QgUCA9IGVsZW1lbnRGYWN0b3JpZXMuUDtcbmV4cG9ydCBjb25zdCBQQVJBTSA9IGVsZW1lbnRGYWN0b3JpZXMuUEFSQU07XG5leHBvcnQgY29uc3QgUFJFID0gZWxlbWVudEZhY3Rvcmllcy5QUkU7XG5leHBvcnQgY29uc3QgU0NSSVBUID0gZWxlbWVudEZhY3Rvcmllcy5TQ1JJUFQ7XG5leHBvcnQgY29uc3QgU0VDVElPTiA9IGVsZW1lbnRGYWN0b3JpZXMuU0VDVElPTjtcbmV4cG9ydCBjb25zdCBTRUxFQ1QgPSBlbGVtZW50RmFjdG9yaWVzLlNFTEVDVDtcbmV4cG9ydCBjb25zdCBTT1VSQ0UgPSBlbGVtZW50RmFjdG9yaWVzLlNPVVJDRTtcbmV4cG9ydCBjb25zdCBTUEFOID0gZWxlbWVudEZhY3Rvcmllcy5TUEFOO1xuZXhwb3J0IGNvbnN0IFNUWUxFID0gZWxlbWVudEZhY3Rvcmllcy5TVFlMRTtcbmV4cG9ydCBjb25zdCBURVhUQVJFQSA9IGVsZW1lbnRGYWN0b3JpZXMuVEVYVEFSRUE7XG4iLCJmdW5jdGlvbiBhdHRhY2hFbGVtZW50KHBhcmVudCwgZWxlbWVudCkge1xuICBpZiAoaXNTdHJpbmcoZWxlbWVudCkpIHtcbiAgICBwYXJlbnQuaW5uZXJUZXh0ID0gZWxlbWVudDsgLy8gP1xuICB9IGVsc2Uge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlRWxlbWVudChwYXJlbnQsIG5ld0VsZW1lbnQsIG9sZEVsZW1lbnQpIHtcbiAgaWYgKGlzU3RyaW5nKG5ld0VsZW1lbnQpKSB7XG4gICAgcGFyZW50LmlubmVyVGV4dCA9IG5ld0VsZW1lbnQ7IC8vID9cbiAgfSBlbHNlIHtcbiAgICBwYXJlbnQucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQsIG9sZEVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQocGFyZW50LCBjb25maWcpIHtcbiAgYXR0YWNoRWxlbWVudChwYXJlbnQsIGNyZWF0ZUVsZW1lbnQoY29uZmlnKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZFN1YnN0aXR1dGVFbGVtZW50KHBhcmVudCwgY29uZmlnLCBvbGRFbGVtZW50SW5kZXgpIHtcbiAgcmVwbGFjZUVsZW1lbnQoXG4gICAgcGFyZW50LFxuICAgIGNyZWF0ZUVsZW1lbnQoY29uZmlnKSxcbiAgICBmaW5kQ2hpbGQocGFyZW50LCB7IG1vZGU6ICdpbmRleCcsIGtleTogb2xkRWxlbWVudEluZGV4IH0pKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kQXR0YWNoRWxlbWVudHMobm9kZSwgZWxlbWVudHMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQobm9kZSwgZWxlbWVudHNbaV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoY29uZmlnKSB7XG4gIGlmIChpc1N0cmluZyhjb25maWcpKSB7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjb25maWcudGFnKTtcbiAgaWYgKGNvbmZpZy5pZCAhPSBudWxsKSB7XG4gICAgbm9kZS5pZCA9IGNvbmZpZy5pZDtcbiAgfVxuICBpZiAoY29uZmlnLmNsYXNzZXMgIT0gbnVsbCkge1xuICAgIGZvciAobGV0IGtsYXNzIGluIGNvbmZpZy5jbGFzc2VzKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5hZGQoa2xhc3MpO1xuICAgIH1cbiAgfVxuICBpZiAoY29uZmlnLmF0dHJpYnMgIT0gbnVsbCkge1xuICAgIGZvciAobGV0IGF0dHJpYktleSBpbiBjb25maWcuYXR0cmlicykge1xuICAgICAgaWYgKGF0dHJpYktleSAhPT0gJ3N0eWxlJykge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJLZXksIGNvbmZpZy5hdHRyaWJzW2F0dHJpYktleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoY29uZmlnLnN0eWxlICE9IG51bGwpIHtcbiAgICBmb3IgKGxldCBzdHlsZUtleSBpbiBjb25maWcuc3R5bGUpIHtcbiAgICAgIG5vZGUuc3R5bGVbc3R5bGVLZXldID0gY29uZmlnLnN0eWxlW3N0eWxlS2V5XTtcbiAgICB9XG4gIH1cbiAgaWYgKGNvbmZpZy5jaGlsZHJlbiAhPSBudWxsKSB7XG4gICAgaWYgKGlzU3RyaW5nKGNvbmZpZy5jaGlsZHJlbikpIHtcbiAgICAgIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQobm9kZSwgY29uZmlnLmNoaWxkcmVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKG5ld0NvbmZpZywgaW5kZXgpIHsgXG4gICAgICAgIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQobm9kZSwgbmV3Q29uZmlnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gZmluZENoaWxkKHBhcmVudCwgY29uZmlnKSB7XG4gIHN3aXRjaCAoY29uZmlnLm1vZGUpIHtcbiAgICBjYXNlICdpZCc6XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLmtleSk7XG4gICAgY2FzZSAnY2xhc3MnOlxuICAgICAgcmV0dXJuIHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNvbmZpZy5rZXkuY2xhc3MpW2NvbmZpZy5rZXkuaW5kZXhdO1xuICAgIGNhc2UgJ3RhZyc6XG4gICAgICByZXR1cm4gcGFyZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKGNvbmZpZy5rZXkudGFnKVtjb25maWcua2V5LmluZGV4XTtcbiAgICBjYXNlICdxdWVyeSc6XG4gICAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLmtleS5xdWVyeSlbY29uZmlnLmtleS5pbmRleF07XG4gICAgY2FzZSAnaW5kZXgnOlxuICAgICAgcmV0dXJuIHBhcmVudC5jaGlsZE5vZGVzW2NvbmZpZy5rZXldO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXFxcImZpbmRDaGlsZFxcXCIgbW9kZScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRDaGlsZHJlbihwYXJlbnQsIGNvbmZpZykge1xuICBsZXQgaHRtbENvbGxlY3Rpb247XG4gIHN3aXRjaCAoY29uZmlnLm1vZGUpIHtcbiAgICBjYXNlICdjbGFzcyc6XG4gICAgICBodG1sQ29sbGVjdGlvbiA9IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNvbmZpZy5rZXkuY2xhc3MpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndGFnJzpcbiAgICAgIGh0bWxDb2xsZWN0aW9uID0gcGFyZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKGNvbmZpZy5rZXkudGFnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3F1ZXJ5JzpcbiAgICAgIGh0bWxDb2xsZWN0aW9uID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLmtleS5xdWVyeSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFxcXCJmaW5kQ2hpbGRcXFwiIG1vZGUnKTtcbiAgfVxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoaHRtbENvbGxlY3Rpb24pO1xufVxuXG5mdW5jdGlvbiBpc0NvbW1hbmRJbmRleCh2YWx1ZSkge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE51bWJlcl0nO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufVxuXG5mdW5jdGlvbiBtb2RpZnlFbGVtZW50KG5vZGUsIHBhdGNoKSB7XG4gIF9tb2RpZnlFbGVtZW50KG5vZGUsIHBhdGNoLnZhbHVlLCBwYXRjaC5jb21tYW5kcyk7XG59XG5cbmZ1bmN0aW9uIF9tb2RpZnlFbGVtZW50KG5vZGUsIHRyZWUsIGNvbW1hbmRzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IHRyZWVbaV0uaW5kZXg7XG4gICAgY29uc3QgY29udGludWF0aW9uID0gdHJlZVtpXS52YWx1ZTtcblxuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICdpZCc6XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kc1tjb250aW51YXRpb25dO1xuICAgICAgICBzd2l0Y2ggKGNvbW1hbmRbMF0pIHtcbiAgICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgICBjYXNlICdzZXRBdEtleSc6XG4gICAgICAgICAgICBub2RlLmlkID0gY29tbWFuZFsxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd0YWcnOlxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICBmb3IgKGxldCBzdHlsZUluZGV4ID0gMDsgc3R5bGVJbmRleCA8IGNvbnRpbnVhdGlvbi5sZW5ndGg7IHN0eWxlSW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IHN0eWxlID0gY29udGludWF0aW9uW3N0eWxlSW5kZXhdLmluZGV4O1xuICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kc1tjb250aW51YXRpb25bc3R5bGVJbmRleF0udmFsdWVdO1xuICAgICAgICAgIHN3aXRjaCAoY29tbWFuZFswXSkge1xuICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgICAgbm9kZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVwbGFjZSc6XG4gICAgICAgICAgICBjYXNlICdzZXRBdEtleSc6XG4gICAgICAgICAgICAgIG5vZGUuc3R5bGVbc3R5bGVdID0gY29tbWFuZFsxXTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdhdHRyaWJzJzpcbiAgICAgICAgZm9yIChsZXQgYXR0cmliSW5kZXggPSAwOyBhdHRyaWJJbmRleCA8IGNvbnRpbnVhdGlvbi5sZW5ndGg7IGF0dHJpYkluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBhdHRyaWIgPSBjb250aW51YXRpb25bYXR0cmliSW5kZXhdLmluZGV4O1xuICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kc1tjb250aW51YXRpb25bYXR0cmliSW5kZXhdLnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmRbMF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICAgIG5vZGUuYXR0cmlidXRlcy5yZW1vdmVOYW1lZEl0ZW0oYXR0cmliKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgICAgIGNhc2UgJ3NldEF0S2V5JzpcbiAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmliLCBjb21tYW5kWzFdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjbGFzc2VzJzpcbiAgICAgICAgaWYgKGlzQ29tbWFuZEluZGV4KGNvbnRpbnVhdGlvbikpIHtcbiAgICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZHNbMF07XG4gICAgICAgICAgc3dpdGNoIChjb21tYW5kWzBdKSB7XG4gICAgICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgICBmb3IgKGxldCBfY2xhc3MgaW4gY29tbWFuZFsxXSkge1xuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShfY2xhc3MpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2V0QXRLZXknOlxuICAgICAgICAgICAgICBmb3IgKGxldCBfY2xhc3MgaW4gY29tbWFuZFsxXSkge1xuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChfY2xhc3MpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBjbGFzc0luZGV4ID0gMDsgY2xhc3NJbmRleCA8IGNvbnRpbnVhdGlvbi5sZW5ndGg7IGNsYXNzSW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgX2NsYXNzID0gY29udGludWF0aW9uW2NsYXNzSW5kZXhdLmluZGV4O1xuICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IGNvbW1hbmRzW2NvbnRpbnVhdGlvbltjbGFzc0luZGV4XS52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmRbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoX2NsYXNzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnc2V0QXRLZXknOlxuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChfY2xhc3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnY2hpbGRyZW4nOlxuICAgICAgICBpZiAoaXNDb21tYW5kSW5kZXgoY29udGludWF0aW9uKSkge1xuICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kc1tjb250aW51YXRpb25dXG4gICAgICAgICAgc3dpdGNoIChjb21tYW5kWzBdKSB7XG4gICAgICAgICAgICBjYXNlICdyZW1vdmUnOlxuICAgICAgICAgICAgICByZW1vdmVDaGlsZHJlbihub2RlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZXBsYWNlJzogICAgIC8vID9cbiAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKGNvbW1hbmRbMV0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJUZXh0ID0gY29tbWFuZFsxXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lclRleHQgPSBjb21tYW5kWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDaGlsZHJlbihub2RlKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVBbmRBdHRhY2hFbGVtZW50cyhub2RlLCBjb21tYW5kWzFdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2luc2VydEF0RW5kJzpcbiAgICAgICAgICAgICAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudChub2RlLCBjb21tYW5kWzFdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAobGV0IGNoaWxkSW5kZXggPSAwOyBjaGlsZEluZGV4IDwgY29udGludWF0aW9uLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGNvbnRpbnVhdGlvbltjaGlsZEluZGV4XS5pbmRleDtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkQ29udGludWF0aW9uID0gY29udGludWF0aW9uW2NoaWxkSW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgaWYgKGlzQ29tbWFuZEluZGV4KGNoaWxkQ29udGludWF0aW9uKSkge1xuICAgICAgICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZHNbY2hpbGRDb250aW51YXRpb25dXG4gICAgICAgICAgICAgIHN3aXRjaCAoY29tbWFuZFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JlbW92ZSc6XG4gICAgICAgICAgICAgICAgICByZW1vdmVDaGlsZChub2RlLCBjaGlsZCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZUFuZFN1YnN0aXR1dGVFbGVtZW50KG5vZGUsIGNvbW1hbmRbMV0sIGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2luc2VydEF0RW5kJzpcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQobm9kZSwgY29tbWFuZFsxXSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgX21vZGlmeUVsZW1lbnQobm9kZS5jaGlsZE5vZGVzW2NoaWxkXSwgY2hpbGRDb250aW51YXRpb24sIGNvbW1hbmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkKG5vZGUsIGNoaWxkSW5kZXgpIHtcbiAgcmVtb3ZlTm9kZShmaW5kQ2hpbGQobm9kZSwgeyBtb2RlOiAnaW5kZXgnLCBrZXk6IGNoaWxkSW5kZXggfSkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZHJlbihub2RlKSB7XG4gIGNvbnN0IGNoaWxkQ291bnQgPSBub2RlLmNoaWxkTm9kZXMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gY2hpbGRDb3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmNoaWxkTm9kZXNbaV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQsXG4gIG1vZGlmeUVsZW1lbnRcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9