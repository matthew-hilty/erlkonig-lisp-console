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
  const initialModel = Object(_models_getInitialModel__WEBPACK_IMPORTED_MODULE_1__["getInitialModel"])(config.initialModelData);
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
  const _displayEntries = results
    .slice(0, -1)
    .filter(function (result) { return result.effect.type === 'display'; })
    .map(function (display) {
      return display.value.split("\\\\n").map(function (line) {
         return {
           type: 'display',
           value: line
             .replace(/\\"/g, '"')
             .replace(/\\\\/g, '\\')
         };
      });
    });
  const displayEntries = flattenArray(_displayEntries);

  const lastResult = results[results.length - 1];
  const response = (lastResult.value != null)
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





function getInitialModel(initialPrompt) {
  return Object(_types_createViewport__WEBPACK_IMPORTED_MODULE_3__["createViewport"])(
    Object(_types_createTerminal__WEBPACK_IMPORTED_MODULE_2__["createTerminal"])([], [], Object(_types_createPrompt__WEBPACK_IMPORTED_MODULE_1__["createPrompt"])(initialPrompt, '')),
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

function hideFirefoxScrollbars(viewport) {
  viewport.style.overflowX = 'hidden';
  viewport.style.overflowY = 'hidden';
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

    hideFirefoxScrollbars(viewport);
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
/* harmony import */ var _introduction_lisp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./introduction.lisp */ "./src/introduction.lisp");
/* harmony import */ var _introduction_lisp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_introduction_lisp__WEBPACK_IMPORTED_MODULE_3__);





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

Object(_lisp_interpret__WEBPACK_IMPORTED_MODULE_1__["interpret"])(_introduction_lisp__WEBPACK_IMPORTED_MODULE_3___default.a);

Object(_console_initialize__WEBPACK_IMPORTED_MODULE_0__["initialize"])({
  getCandidates: getCandidates,
  initialModelData: '(help) ; Press enter for help.',
  nodeId: 'viewport',
  promptLabel: promptLabel,
  transform: _lisp_interpret__WEBPACK_IMPORTED_MODULE_1__["interpret"],
});


/***/ }),

/***/ "./src/introduction.lisp":
/*!*******************************!*\
  !*** ./src/introduction.lisp ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "(do\n  (def! help (fn* () (pretty-print (\n    string\n    \"  This is a terminal emulator running a lisp interpreter.\"\n    \"\\n\"\n    \"\\n  Press <tab> for completion of keywords and defined identifers.\"\n    \"\\n  Press <Ctrl-a> to move the cursor to the begining of the line.\"\n    \"\\n  Press <Ctrl-e> to move the cursor to the end of the line.\"\n    \"\\n  Press <Ctrl-h> to delete the character preceding the cursor.\"\n    \"\\n  Press <Ctrl-l> to clear the console.\"\n    \"\\n  Press <Ctrl-u> to clear the portion of the line preceding the cursor.\"\n    \"\\n\"\n    \"\\n  Execute `(keys (-get-current-env-))` to see a list of available, defined identifiers.\"\n    \"\\n  Execute `(example-1)` and `(example-2)` to see introductory examples.\"))))\n\n  (def! example-1 (fn* () (do\n    (def! time! (fn* (form) (\n      let* (start (time-ms)) (\n        let* (result (eval form))\n          { :result result, :time (- (time-ms) start) }))))\n    (def! fib (fix* (fn* (k) (\n      fn* (n) (\n        cond\n          (= n 0) 1\n          (= n 1) 1\n          :else (+ (k (- n 2)) (k (- n 1))))))))\n    (def! memfib (memfix* (fn* (k) (\n      fn* (n) (\n        cond\n          (= n 0) 1\n          (= n 1) 1\n          :else (+ (k (- n 2)) (k (- n 1))))))))\n    (pretty-print (\n      string\n        \"; `time!`, a simple profiling function\"\n        \"\\n(def! time! (fn* (form) (\"\n        \"\\n  let* (start (time-ms)) (\"\n        \"\\n    let* (result (eval form))\"\n        \"\\n      { :result result, :time (- (time-ms) start) }))))\"\n        \"\\n\"\n        \"\\n; `fib`, a function that recursively determines the nth Fibonacci number\"\n        \"\\n(def! fib (fix* (fn* (k) (\"\n        \"\\n  fn* (n) (\"\n        \"\\n    cond\"\n        \"\\n      (= n 0) 1\"\n        \"\\n      (= n 1) 1\"\n        \"\\n      :else (+ (k (- n 2)) (k (- n 1))))))))\"\n        \"\\n\"\n        \"\\n; `memfib`, a memoized function that determines the nth Fibonacci number\"\n        \"\\n(def! memfib (memfix* (fn* (k) (\"\n        \"\\n  fn* (n) (\"\n        \"\\n    cond\"\n        \"\\n      (= n 0) 1\"\n        \"\\n      (= n 1) 1\"\n        \"\\n      :else (+ (k (- n 2)) (k (- n 1))))))))\"\n        \"\\n\"\n        \"\\n(time! '(map fib (.. 0 15)))\"\n        \"\\n(time! '(map memfib (.. 0 15)))\")))))\n\n  (def! example-2 (fn* () (do\n    (def! _0 (with-meta (\\ f x x) 0))\n    (def! _1 (with-meta (\\ f x (f x)) 1))\n    (def! _2 (with-meta (\\ f x (f (f x))) 2))\n    (def! times10 (fn* (n) (* n 10)))\n    (def! succ (fn* (n) (\n      with-meta \n        (\\ f x (f ((n f) x)))\n        (+ (meta n) 1))))\n    (def! pred (fn* (n) (\n      with-meta\n        (\\ f x (((n (\\ g h (h (g f)))) (\\ u x)) (\\ u u)))\n        (- (meta n) 1))))\n    (def! _4 (succ (succ _2)))\n    (def! _3 (pred _4))\n    (pretty-print (\n      string\n        \"; Church numbers\"\n        \"\\n(def! _0 (with-meta (\\ f x x) 0))\"\n        \"\\n(def! _1 (with-meta (\\ f x (f x)) 1))\"\n        \"\\n(def! _2 (with-meta (\\ f x (f (f x))) 2))\"\n        \"\\n\"\n        \"\\n(meta _0)\"\n        \"\\n(meta _1)\"\n        \"\\n(meta _2)\"\n        \"\\n\"\n        \"\\n; `times10`, a simple function to test the above Church numbers\"\n        \"\\n(def! times10 (fn* (n) (* n 10)))\"\n        \"\\n\"\n        \"\\n((_0 times10) 1)\"\n        \"\\n((_1 times10) 1)\"\n        \"\\n((_2 times10) 1)\"\n        \"\\n\"\n        \"\\n; successor function\"\n        \"\\n(def! succ (fn* (n) (\"\n        \"\\n  with-meta \"\n        \"\\n    (\\ f x (f ((n f) x)))\"\n        \"\\n    (+ (meta n) 1))))\"\n        \"\\n\"\n        \"\\n; predecessor function\"\n        \"\\n(def! pred (fn* (n) (\"\n        \"\\n  with-meta\"\n        \"\\n    (\\ f x (((n (\\ g h (h (g f)))) (\\ u x)) (\\ u u)))\"\n        \"\\n    (- (meta n) 1))))\"\n        \"\\n\"\n        \"\\n(def! _4 (succ (succ _2)))\"\n        \"\\n(meta _4)\"\n        \"\\n((_4 times10) 1)\"\n        \"\\n\"\n        \"\\n(def! _3 (pred _4))\"\n        \"\\n(meta _3)\"\n        \"\\n((_3 times10) 1)\")))))\n)\n"

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
  let results = effects;
  while (results.length === 1 && Array.isArray(value = results[0].value)) {
    results = flattenIfNecessary(value);
  }
  return results;
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

module.exports = "(do\n  (def! fix* (\n    fn* (f) (\n      (fn* (x) (f (fn* (& ys) (apply (x x) ys))))\n      (fn* (x) (f (fn* (& ys) (apply (x x) ys)))))))\n\n  (def! memfix* (\n    fn* (f) (\n      let* (cache {}) (\n        (fn* (x cache) (\n          f\n            (fn* (z) (\n              if (contains? cache z)\n                (get cache z)\n                (let* (result ((fn* (y) ((x x cache) y)) z)) (\n                  do\n                    (set! cache z result)\n                    result))))\n            cache))\n        (fn* (x cache) (\n          f\n            (fn* (z) (\n              if (contains? cache z)\n                (get cache z)\n                (let* (result ((fn* (y) ((x x cache) y)) z)) (\n                  do\n                    (set! cache z result)\n                    result))))\n            cache))\n        cache))))\n\n  (def! _0 car)\n\n  (def! _1 (fn* (xs) (nth 1 xs)))\n\n  (def! _2 (fn* (xs) (nth 2 xs)))\n\n  (def! swap! (\n    macro* (atom & xs) (\n      if (empty? xs)\n        atom\n        `(let* (-atom- ~atom) (\n          do\n            (reset! -atom- (~(car xs) (deref -atom-) ~@(cdr xs)))\n            (deref -atom-))))))\n\n  (def! *gensym-counter* (atom 0))\n\n  (def! gensym (\n      fn* () (symbol (\n        string\n          \"G__\"\n          (swap! *gensym-counter* (fn* (n) (+ n 1)))))))\n\n  (def! or (\n    macro* (& xs) (\n      if (empty? xs)\n        false\n        (let* (-query- (gensym))\n          `(let* (~-query- ~(car xs)) (\n            if ~-query-\n              ~-query-\n              (or ~@(cdr xs))))))))\n\n  (def! and (\n    macro* (& xs) (\n      if (empty? xs)\n        true\n        (let* (-query- (gensym))\n          `(let* (~-query- ~(car xs)) (\n            if ~-query-\n              (and ~@(cdr xs))\n              false))))))\n\n  (def! cond (\n    macro* (& xs) (\n      if (empty? xs)\n        nil\n        (if (empty? (cdr xs))\n          (throw \"`cond` requires an even number of forms.\")\n          (let* (-query- (gensym))\n            `(let* (~-query- ~(car xs)) (\n              if ~-query-\n                ~(_1 xs)\n                (cond ~@(cdr (cdr xs))))))))))\n\n  (def! loop (\n    macro* (form0 form1)\n      `(let* (loop (memfix* (fn* (loop) (fn* (~(_0 form0)) ~form1)))) (\n        loop ~(_1 form0)))))\n\n  (def! -> (\n    macro* (& xs) (\n      if (empty? xs)\n        nil\n        (let* (x (car xs), xs (cdr xs)) (\n          if (empty? xs)\n            x\n            (let* (form (car xs), forms (cdr xs)) (\n              if (empty? forms)\n                (if (list? form)\n                  (if (= (symbol \"fn*\") (car form))\n                    `(~form ~x)\n                    `(~(car form) ~x ~@(cdr form)))\n                  (list form x))\n                `(-> (-> ~x ~form) ~@forms))))))))\n\n  (def! ->> (\n    macro* (& xs) (\n      if (empty? xs)\n        nil\n        (let* (x (car xs), xs (cdr xs)) (\n          if (empty? xs)\n            x\n            (let* (form (car xs), forms (cdr xs)) (\n              if (empty? forms)\n                (if (list? form)\n                  (if (= (symbol \"fn*\") (car form))\n                    `(~form ~x)\n                    `(~@form ~x))\n                  (list form x))\n                `(->> (->> ~x ~form) ~@forms))))))))\n\n  (def! ->* (macro* (& xs) (\n    let* (x (gensym))\n      `(fn* (~x) (-> ~x ~@xs)))))\n\n  (def! ->>* (macro* (& xs) (\n    let* (x (gensym))\n      `(fn* (~x) (->> ~x ~@xs)))))\n\n  (def! not (fn* (x) (if x false true)))\n\n  (def! identity (fn* (x) x))\n\n  (def! constant-fn (fn* (x) (fn* (y) x)))\n\n  (def! call-on (fn* (& xs) (fn* (fn) (apply fn xs))))\n\n  (def! step-into-list (\n    fn* (xs fn0 fn1) (\n      let* (x (car xs), -xs- (cdr xs)) (\n        if (empty? -xs-)\n          (fn1 x)\n          (fn0 x -xs-)))))\n\n  (def! apply-on (\n    fn* (& xs) (\n      step-into-list\n        xs\n        (fn* (arguments -xs-) (apply (car -xs-) arguments))\n        (fn* (arguments) (fn* (f) (apply f arguments))))))\n\n  (def! reduce (\n    fn* (f seed xs) (\n      if (empty? xs)\n        seed\n        (reduce f (f seed (car xs)) (cdr xs)))))\n\n  (def! filter (\n    fn* (predicate xs) (\n      reverse (\n        reduce\n          (fn* (memo x) (if (predicate x) (cons x memo) memo))\n          '()\n          xs))))\n\n  (def! map (\n    fn* (f xs) (\n      reverse (\n        reduce\n          (fn* (memo x) (cons (f x) memo))\n          '()\n          xs))))\n\n  (def! every? (\n    fn* (pred xs) (\n      if (empty? xs)\n        true\n        (if (pred (car xs)) (every? pred (cdr xs)) false))))\n\n  (def! some? (\n    fn* (pred xs) (\n      if (empty? xs)\n        false\n        (if (pred (car xs)) true (some? pred (cdr xs))))))\n\n  (def! letmemrec* (\n    macro* (alias expr)\n      `(let* (\n        ~(car alias)\n        (memfix* (fn* (~(car alias)) ~(_1 alias))))\n          ~expr)))\n\n  (def! skip (\n    fn* (nbr xs) (\n      letrec* (\n        -skip-\n        (fn* (ys) (\n          let* (nbr (car ys), xs (_1 ys)) (\n            cond\n              (= 0 nbr) xs\n              (= 1 nbr) (cdr xs)\n              \"default\" (-skip- (list (decr nbr) (cdr xs))))))) (\n          -skip- (list nbr xs)))))\n\n  (def! invokable? (fn* (x) (or (function? x) (macro? x))))\n\n  (def! . (\n    macro* (x key & xs) (\n      if (empty? xs)\n        `(get ~x ~key)\n        `((get ~x ~key) ~@xs))))\n\n  (def! .. (\n    fn* (lo hi) (\n      letrec* (\n        -..-\n        (fn* (xs) (\n          let* (lo (_0 xs), hi (_1 xs), -list- (_2 xs)) (\n            if (= lo hi)\n              (cons hi -list-)\n              (-..- (list lo (decr hi) (cons hi -list-))))))) (\n          -..- (list lo hi '())))))\n\n  (def! defrec! (\n    macro* (fn-name fn-body)\n      `(def! ~fn-name (letrec* (~fn-name ~fn-body) ~fn-name))))\n\n  (def! for* (\n    macro* (loop-parameters body)\n      `(loop\n         ~(_0 loop-parameters)\n         (if ~(_1 loop-parameters)\n           (do ~body (loop ~(_2 loop-parameters)))\n           nil))))\n\n  (def! for-each (\n    fn* (f xs) (\n      reduce (fn* (memo x) (do (f x) memo)) nil xs)))\n\n  (def! n-times (\n    fn* (n f) (\n      loop\n        (i 0)\n        (if (= i n)\n          nil\n          (do (f i) (loop (+ i 1)))))))\n\n  (def! tap (fn* (f x) (do (f x) x)))\n\n  (def! with-side-effect (fn* (thunk x) (do (thunk) x)))\n\n  (def! thunk (macro* (form) `(fn* () ~form)))\n\n  (def! call (macro* (f & xs) `(~f ~@xs)))\n\n  (def! apply (macro* (f xs) `(eval (cons ~f ~xs))))\n\n  (def! eval-string (fn* (erlString) (eval (parse erlString))))\n\n  (def! incr (->* (+ 1)))\n\n  (def! decr (->* (- 1)))\n\n  (def! zero? (->* (= 0)))\n\n  (def! defined? (fn* (id) (contains? (-get-current-env-) id)))\n\n  (def! \\ (macro* (& xs) (\n    if (empty? xs)\n      nil\n      (let* (x (car xs), xs (cdr xs)) (\n        if (empty? xs)\n          x\n          `(fn* (~x) (\\ ~@xs)))))))\n)\n"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2dldEFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2dldEtleUNob3JkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbnRyb2wvY2hhcnMvaW50ZXJwcmV0S2V5ZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2tleUNvZGVDaGFydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29udHJvbC9jaGFycy9rZXlJZGVudGlmaWVyQ2hhcnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbnRyb2wvZ2V0Vmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29udHJvbC9pbml0aWFsaXplQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9kZXRlY3RDc3NTY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvaW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy9mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy90ZXJtaW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy92aWV3cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvZ2V0SW5pdGlhbE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL21vZGVscy90eXBlcy9jcmVhdGVGcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvdHlwZXMvY3JlYXRlUHJvbXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL21vZGVscy90eXBlcy9jcmVhdGVUZXJtaW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvdHlwZXMvY3JlYXRlVmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL3N1YnNjcmliZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvdmlldy9pbml0aWFsaXplVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L3JlY3JlYXRlQ29uc29sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZUVybGtvbmlnTGlzcENvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludHJvZHVjdGlvbi5saXNwIiwid2VicGFjazovLy8uL3NyYy9saXNwL19wcm9jZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2NvbW1lbnRTaWduYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvZW52LXV0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9lbnYwLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2VudjEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvZW52Mi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9lbnYzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2VudjQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvZXZhbHVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvZ2V0TGlzcEVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2luZGV4LXV0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9pbnRlcnByZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvanMtdXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2tleVRva2Vucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9saW5rZWQtbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9wYXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9zZXJpYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3Avc3RhbmRhcmQtZm5zLWFuZC1tYWNyb3MubGlzcCIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC90b2tlbml6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC90b2tlbml6ZUFuZFBhcnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3R5cGUtdXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3R5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yaWJvc29tZS9kaWZmLmpzIiwid2VicGFjazovLy8uL3NyYy9yaWJvc29tZS9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmlib3NvbWUvaW50ZXJwcmV0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7Ozs7QUN2THRDO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsSUFBSSxLQUFLO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVxQjs7Ozs7Ozs7Ozs7OztBQ3BHckI7QUFBQTtBQUFBO0FBQUE7QUFBZ0Q7QUFDWTs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLDZCQUE2Qix3RUFBbUI7QUFD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Q0E7QUFDQTs7QUFPRTs7Ozs7Ozs7Ozs7OztBQ3JCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0NBQWtD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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QztBQUNSO0FBQ0g7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLFVBQVUsa0RBQVc7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsK0NBQVE7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQTBDRTs7Ozs7Ozs7Ozs7OztBQy9JRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBbUJFOzs7Ozs7Ozs7Ozs7O0FDbkRGO0FBQUE7QUFBQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrQkFBK0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsYUFBYTtBQUM5QixlQUFlLHlCQUF5QjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLGFBQWE7QUFDOUIsc0JBQXNCLHlCQUF5QjtBQUMvQztBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQ0FBaUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVnQjs7Ozs7Ozs7Ozs7OztBQ3RJaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQix5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNySFA7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0NBQXNDO0FBQzdEOztBQUVBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxrQ0FBa0M7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsbUNBQW1DO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxrQ0FBa0Msa0NBQWtDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGtDQUFrQyxrQ0FBa0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsaUNBQWlDO0FBQy9EOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUTtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUtFIiwiZmlsZSI6ImVybGtvbmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5pdGlhbGl6ZUVybGtvbmlnTGlzcENvbnNvbGUuanNcIik7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiY29uc3QgYSA9ICdhJztcbmNvbnN0IGUgPSAnZSc7XG5jb25zdCBoID0gJ2gnO1xuY29uc3QgbCA9ICdsJztcbmNvbnN0IHUgPSAndSc7XG5jb25zdCB3ID0gJ3cnO1xuXG5jb25zdCBBID0gJ0EnO1xuY29uc3QgRSA9ICdFJztcbmNvbnN0IEggPSAnSCc7XG5jb25zdCBMID0gJ0wnO1xuY29uc3QgVSA9ICdVJztcbmNvbnN0IFcgPSAnVyc7XG5cbmNvbnN0IGJhY2tzcGFjZSA9ICdCYWNrc3BhY2UnO1xuY29uc3QgX2RlbGV0ZSAgID0gJ0RlbGV0ZSc7XG5jb25zdCBkb3duICAgICAgPSAnQXJyb3dEb3duJztcbmNvbnN0IGVudGVyICAgICA9ICdFbnRlcic7XG5jb25zdCBsZWZ0ICAgICAgPSAnQXJyb3dMZWZ0JztcbmNvbnN0IHJpZ2h0ICAgICA9ICdBcnJvd1JpZ2h0JztcbmNvbnN0IHNwYWNlICAgICA9ICcgJztcbmNvbnN0IHNwYWNlYmFyICA9ICdTcGFjZWJhcic7XG5jb25zdCB0YWIgICAgICAgPSAnVGFiJztcbmNvbnN0IHVwICAgICAgICA9ICdBcnJvd1VwJztcblxuY29uc3QgY2hhcmFjdGVycyA9IFtcbiAgc3BhY2UsXG4gICdgJywgJzEnLCAnMicsICAnMycsICc0JywgICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMCcsICctJywgJz0nLFxuICAnficsICchJywgJ0AnLCAgJyMnLCAnJCcsICAnJScsICdeJywgJyYnLCAnKicsICcoJywgJyknLCAnXycsICcrJyxcbiAgJ2EnLCAnYicsICdjJywgICdkJywgJ2UnLCAgJ2YnLCAnZycsICdoJywgJ2knLCAnaicsICdrJywgJ2wnLCAnbScsXG4gICduJywgJ28nLCAncCcsICAncScsICdyJywgICdzJywgJ3QnLCAndScsICd2JywgJ3cnLCAneCcsICd5JywgJ3onLFxuICAnQScsICdCJywgJ0MnLCAgJ0QnLCAnRScsICAnRicsICdHJywgJ0gnLCAnSScsICdKJywgJ0snLCAnTCcsICdNJyxcbiAgJ04nLCAnTycsICdQJywgICdRJywgJ1InLCAgJ1MnLCAnVCcsICdVJywgJ1YnLCAnVycsICdYJywgJ1knLCAnWicsXG4gICdbJywgJ10nLCAnXFxcXCcsICc7JywgJ1xcJycsICcsJywgJy4nLCAnLycsXG4gICd7JywgJ30nLCAnfCcsICAnOicsICdcIicsICAnPCcsICc+JywgJz8nXG5dO1xuXG5mdW5jdGlvbiBnZXRBY3Rpb24oa2V5Q2hvcmQpIHtcbiAgY29uc3QgdmFsdWUgPSBrZXlDaG9yZC52YWx1ZTtcblxuICBpZiAoa2V5Q2hvcmQuY3RybEtleSkge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgYTpcbiAgICAgIGNhc2UgQTpcbiAgICAgICAgcmV0dXJuIHdyYXAoJ21vdmVDdXJzb3JUb1N0YXJ0Jyk7XG4gICAgICBjYXNlIGU6XG4gICAgICBjYXNlIEU6XG4gICAgICAgIHJldHVybiB3cmFwKCdtb3ZlQ3Vyc29yVG9FbmQnKTtcbiAgICAgIGNhc2UgaDpcbiAgICAgIGNhc2UgSDpcbiAgICAgICAgcmV0dXJuIHdyYXAoJ2RlbGV0ZUxlZnRDaGFyJyk7XG4gICAgICBjYXNlIGw6XG4gICAgICBjYXNlIEw6XG4gICAgICAgIHJldHVybiB3cmFwKCdjbGVhcicpO1xuICAgICAgY2FzZSB1OlxuICAgICAgY2FzZSBVOlxuICAgICAgICByZXR1cm4gd3JhcCgnZGVsZXRlUHJlQ3Vyc29yJyk7XG4gICAgICBjYXNlIHc6XG4gICAgICBjYXNlIFc6XG4gICAgICAgIHJldHVybiB3cmFwKCdkZWxldGVXb3JkJyk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gd3JhcCgnbm9PcCcpO1xuICAgIH1cbiAgfVxuXG4gIHN3aXRjaCAodmFsdWUpIHtcbiAgICBjYXNlIGVudGVyOlxuICAgICAgcmV0dXJuIHdyYXAoJ3N1Ym1pdCcpO1xuICAgIGNhc2UgYmFja3NwYWNlOlxuICAgICAgcmV0dXJuIHdyYXAoJ2RlbGV0ZUxlZnRDaGFyJyk7XG4gICAgY2FzZSBsZWZ0OlxuICAgICAgcmV0dXJuIHdyYXAoJ21vdmVDdXJzb3JMZWZ0Jyk7XG4gICAgY2FzZSByaWdodDpcbiAgICAgIHJldHVybiB3cmFwKCdtb3ZlQ3Vyc29yUmlnaHQnKTtcbiAgICBjYXNlIHVwOlxuICAgICAgcmV0dXJuIHdyYXAoJ3Jld2luZCcpO1xuICAgIGNhc2UgZG93bjpcbiAgICAgIHJldHVybiB3cmFwKCdmYXN0Rm9yd2FyZCcpO1xuICAgIGNhc2UgX2RlbGV0ZTpcbiAgICAgIHJldHVybiB3cmFwKCdkZWxldGVSaWdodENoYXInKTtcbiAgICBjYXNlIHRhYjpcbiAgICAgIHJldHVybiB3cmFwKCdjb21wbGV0ZVdvcmQnKTtcbiAgICBjYXNlIHNwYWNlOlxuICAgIGNhc2Ugc3BhY2ViYXI6XG4gICAgICByZXR1cm4geyBuYW1lOiAnYWRkQ2hhcicsIGNoYXI6ICcgJyB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gaXNDaGFyYWN0ZXIodmFsdWUpXG4gICAgICAgID8geyBuYW1lOiAnYWRkQ2hhcicsIGNoYXI6IHZhbHVlIH1cbiAgICAgICAgOiB3cmFwKCdub09wJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNDaGFyYWN0ZXIodmFsdWUpIHtcbiAgcmV0dXJuIGNoYXJhY3RlcnMuaW5kZXhPZih2YWx1ZSkgPj0gMDtcbn1cblxuZnVuY3Rpb24gd3JhcChhY3Rpb25OYW1lKSB7XG4gIHJldHVybiB7IG5hbWU6IGFjdGlvbk5hbWUgfTtcbn1cblxuZXhwb3J0IHsgZ2V0QWN0aW9uIH07XG4iLCJpbXBvcnQgeyBrZXlDb2RlQ2hhcnRzIH0gZnJvbSAnLi9rZXlDb2RlQ2hhcnRzJztcbmltcG9ydCB7IGtleUlkZW50aWZpZXJDaGFydHMgfSBmcm9tICcuL2tleUlkZW50aWZpZXJDaGFydHMnO1xuXG5mdW5jdGlvbiBnZXRFdmVudFByb3h5KGtpbmQsIGV2ZW50KSB7XG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGV2ZW50W2tpbmRdLFxuICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgIGN0cmxLZXk6IGV2ZW50LmN0cmxLZXksXG4gICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5XG4gIH07XG59O1xuXG5mdW5jdGlvbiBpZGVudGl0eShldmVudCkge1xuICByZXR1cm4gZXZlbnQ7XG59XG5cbmZ1bmN0aW9uIGdldEtleUNob3JkKGV2ZW50KSB7XG4gIGxldCBub3JtYWxpemU7XG4gIGxldCBwcm9wZXJ0eTtcblxuICBpZiAoZXZlbnQua2V5ICE9IG51bGwpIHtcbiAgICBwcm9wZXJ0eSA9ICdrZXknO1xuICAgIG5vcm1hbGl6ZSA9IGlkZW50aXR5O1xuICB9IGVsc2UgaWYgKGV2ZW50LmtleUlkZW50aWZpZXIgIT0gbnVsbCkge1xuICAgIHByb3BlcnR5ID0gJ2tleUlkZW50aWZpZXInO1xuICAgIG5vcm1hbGl6ZSA9IF9nZXRLZXlDaG9yZChrZXlJZGVudGlmaWVyQ2hhcnRzKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9wZXJ0eSA9ICdrZXlDb2RlJztcbiAgICBub3JtYWxpemUgPSBfZ2V0S2V5Q2hvcmQoa2V5Q29kZUNoYXJ0cyk7XG4gIH1cblxuICByZXR1cm4gbm9ybWFsaXplKGdldEV2ZW50UHJveHkocHJvcGVydHksIGV2ZW50KSk7XG59XG5cbmZ1bmN0aW9uIF9nZXRLZXlDaG9yZChjb252ZXJzaW9uQ2hhcnRzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGdldEtleUNob3JkVmFsdWUoY29udmVyc2lvbkNoYXJ0cywgZXZlbnQudmFsdWUsIGV2ZW50LnNoaWZ0S2V5KSxcbiAgICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgICAgY3RybEtleTogZXZlbnQuY3RybEtleSxcbiAgICAgIHNoaWZ0S2V5OiBldmVudC5zaGlmdEtleVxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEtleUNob3JkVmFsdWUoY29udmVyc2lvbkNoYXJ0cywgdmFsdWUsIHNoaWZ0S2V5KSB7XG4gIGNvbnN0IGtleSA9IHNoaWZ0S2V5ID8gJ3dpdGhTaGlmdCcgOiAnd2l0aG91dFNoaWZ0JztcbiAgcmV0dXJuIGNvbnZlcnNpb25DaGFydHNba2V5XVt2YWx1ZV07XG59XG5cbmV4cG9ydCB7IGdldEtleUNob3JkIH07XG4iLCJpbXBvcnQgeyBnZXRBY3Rpb24gfSBmcm9tICcuL2dldEFjdGlvbic7XG5pbXBvcnQgeyBnZXRLZXlDaG9yZCB9IGZyb20gJy4vZ2V0S2V5Q2hvcmQnO1xuXG5mdW5jdGlvbiBpbnRlcnByZXRLZXlkb3duKGV2ZW50KSB7XG4gIHJldHVybiBnZXRBY3Rpb24oZ2V0S2V5Q2hvcmQoZXZlbnQpKTtcbn1cblxuZXhwb3J0IHsgaW50ZXJwcmV0S2V5ZG93biB9O1xuIiwiY29uc3Qga2V5Q29kZUNoYXJ0cyA9IHtcbiAgd2l0aFNoaWZ0OiB7XG4gICAgOCAgOiAnQmFja3NwYWNlJyxcbiAgICA5ICA6ICdUYWInLFxuICAgIDEzIDogJ0VudGVyJyxcbiAgICAzMiA6ICcgJyxcbiAgICAzNyA6ICdBcnJvd0xlZnQnLFxuICAgIDM4IDogJ0Fycm93VXAnLFxuICAgIDM5IDogJ0Fycm93UmlnaHQnLFxuICAgIDQwIDogJ0Fycm93RG93bicsXG4gICAgNDYgOiAnRGVsZXRlJyxcbiAgICA0OCA6ICcpJyxcbiAgICA0OSA6ICchJyxcbiAgICA1MCA6ICdAJyxcbiAgICA1MSA6ICcjJyxcbiAgICA1MiA6ICckJyxcbiAgICA1MyA6ICclJyxcbiAgICA1NCA6ICdeJyxcbiAgICA1NSA6ICcmJyxcbiAgICA1NiA6ICcqJyxcbiAgICA1NyA6ICcoJyxcbiAgICA1OSA6ICc6JyxcbiAgICA2MSA6ICcrJyxcbiAgICA2NSA6ICdBJyxcbiAgICA2NiA6ICdCJyxcbiAgICA2NyA6ICdDJyxcbiAgICA2OCA6ICdEJyxcbiAgICA2OSA6ICdFJyxcbiAgICA3MCA6ICdGJyxcbiAgICA3MSA6ICdHJyxcbiAgICA3MiA6ICdIJyxcbiAgICA3MyA6ICdJJyxcbiAgICA3NCA6ICdKJyxcbiAgICA3NSA6ICdLJyxcbiAgICA3NiA6ICdMJyxcbiAgICA3NyA6ICdNJyxcbiAgICA3OCA6ICdOJyxcbiAgICA3OSA6ICdPJyxcbiAgICA4MCA6ICdQJyxcbiAgICA4MSA6ICdRJyxcbiAgICA4MiA6ICdSJyxcbiAgICA4MyA6ICdTJyxcbiAgICA4NCA6ICdUJyxcbiAgICA4NSA6ICdVJyxcbiAgICA4NiA6ICdWJyxcbiAgICA4NyA6ICdXJyxcbiAgICA4OCA6ICdYJyxcbiAgICA4OSA6ICdZJyxcbiAgICA5MCA6ICdaJyxcbiAgICAxNzM6ICdfJyxcbiAgICAxODg6ICc8JyxcbiAgICAxOTA6ICc+JyxcbiAgICAxOTE6ICc/JyxcbiAgICAxOTI6ICd+JyxcbiAgICAyMTk6ICd7JyxcbiAgICAyMjA6ICd8JyxcbiAgICAyMjE6ICd9JyxcbiAgICAyMjI6ICdcIidcbiAgfSxcbiAgd2l0aG91dFNoaWZ0OiB7XG4gICAgOCAgOiAnQmFja3NwYWNlJyxcbiAgICA5ICA6ICdUYWInLFxuICAgIDEzIDogJ0VudGVyJyxcbiAgICAzMiA6ICcgJyxcbiAgICAzNyA6ICdBcnJvd0xlZnQnLFxuICAgIDM4IDogJ0Fycm93VXAnLFxuICAgIDM5IDogJ0Fycm93UmlnaHQnLFxuICAgIDQwIDogJ0Fycm93RG93bicsXG4gICAgNDYgOiAnRGVsZXRlJyxcbiAgICA0ODogJzAnLFxuICAgIDQ5OiAnMScsXG4gICAgNTA6ICcyJyxcbiAgICA1MTogJzMnLFxuICAgIDUyOiAnNCcsXG4gICAgNTM6ICc1JyxcbiAgICA1NDogJzYnLFxuICAgIDU1OiAnNycsXG4gICAgNTY6ICc4JyxcbiAgICA1NzogJzknLFxuICAgIDU5OiAnOycsXG4gICAgNjE6ICc9JyxcbiAgICA2NTogJ2EnLFxuICAgIDY2OiAnYicsXG4gICAgNjc6ICdjJyxcbiAgICA2ODogJ2QnLFxuICAgIDY5OiAnZScsXG4gICAgNzA6ICdmJyxcbiAgICA3MTogJ2cnLFxuICAgIDcyOiAnaCcsXG4gICAgNzM6ICdpJyxcbiAgICA3NDogJ2onLFxuICAgIDc1OiAnaycsXG4gICAgNzY6ICdsJyxcbiAgICA3NzogJ20nLFxuICAgIDc4OiAnbicsXG4gICAgNzk6ICdvJyxcbiAgICA4MDogJ3AnLFxuICAgIDgxOiAncScsXG4gICAgODI6ICdyJyxcbiAgICA4MzogJ3MnLFxuICAgIDg0OiAndCcsXG4gICAgODU6ICd1JyxcbiAgICA4NjogJ3YnLFxuICAgIDg3OiAndycsXG4gICAgODg6ICd4JyxcbiAgICA4OTogJ3knLFxuICAgIDkwOiAneicsXG4gICAgMTczOiAnLScsXG4gICAgMTg4OiAnLCcsXG4gICAgMTkwOiAnLicsXG4gICAgMTkxOiAnLycsXG4gICAgMTkyOiAnYCcsXG4gICAgMjE5OiAnWycsXG4gICAgMjIwOiAnXFxcXCcsXG4gICAgMjIxOiAnXScsXG4gICAgMjIyOiAnXFwnJ1xuICB9XG59O1xuXG5leHBvcnQgeyBrZXlDb2RlQ2hhcnRzIH07XG4iLCJjb25zdCBrZXlJZGVudGlmaWVyQ2hhcnRzID0ge1xuICB3aXRob3V0U2hpZnQ6IHtcbiAgICAnVSswMDQxJzogJ2EnLFxuICAgICdVKzAwNDInOiAnYicsXG4gICAgJ1UrMDA0Myc6ICdjJyxcbiAgICAnVSswMDQ0JzogJ2QnLFxuICAgICdVKzAwNDUnOiAnZScsXG4gICAgJ1UrMDA0Nic6ICdmJyxcbiAgICAnVSswMDQ3JzogJ2cnLFxuICAgICdVKzAwNDgnOiAnaCcsXG4gICAgJ1UrMDA0OSc6ICdpJyxcbiAgICAnVSswMDRBJzogJ2onLFxuICAgICdVKzAwNEInOiAnaycsXG4gICAgJ1UrMDA0Qyc6ICdsJyxcbiAgICAnVSswMDREJzogJ20nLFxuICAgICdVKzAwNEUnOiAnbicsXG4gICAgJ1UrMDA0Ric6ICdvJyxcbiAgICAnVSswMDUwJzogJ3AnLFxuICAgICdVKzAwNTEnOiAncScsXG4gICAgJ1UrMDA1Mic6ICdyJyxcbiAgICAnVSswMDUzJzogJ3MnLFxuICAgICdVKzAwNTQnOiAndCcsXG4gICAgJ1UrMDA1NSc6ICd1JyxcbiAgICAnVSswMDU2JzogJ3YnLFxuICAgICdVKzAwNTcnOiAndycsXG4gICAgJ1UrMDA1OCc6ICd4JyxcbiAgICAnVSswMDU5JzogJ3knLFxuICAgICdVKzAwNUEnOiAneicsXG4gICAgJ1UrMDAzMCc6ICcwJyxcbiAgICAnVSswMDMxJzogJzEnLFxuICAgICdVKzAwMzInOiAnMicsXG4gICAgJ1UrMDAzMyc6ICczJyxcbiAgICAnVSswMDM0JzogJzQnLFxuICAgICdVKzAwMzUnOiAnNScsXG4gICAgJ1UrMDAzNic6ICc2JyxcbiAgICAnVSswMDM3JzogJzcnLFxuICAgICdVKzAwMzgnOiAnOCcsXG4gICAgJ1UrMDAzOSc6ICc5JyxcbiAgICAnVSswMEMwJzogJ2AnLFxuICAgICdVKzAwQkQnOiAnLScsXG4gICAgJ1UrMDBCQic6ICc9JyxcbiAgICAnVSswMERCJzogJ1snLFxuICAgICdVKzAwREQnOiAnXScsXG4gICAgJ1UrMDBEQyc6ICdcXFxcJyxcbiAgICAnVSswMEJBJzogJzsnLFxuICAgICdVKzAwREUnOiAnXFwnJyxcbiAgICAnVSswMEJDJzogJywnLFxuICAgICdVKzAwQkUnOiAnLicsXG4gICAgJ1UrMDBCRic6ICcvJyxcbiAgICAnVSswMDIwJzogJyAnLFxuICAgICdVKzAwMDgnOiAnQmFja3NwYWNlJyxcbiAgICAnVSswMDc1JzogJ0RlbGV0ZScsXG4gICAgJ0Rvd24nICA6ICdBcnJvd0Rvd24nLFxuICAgICdFbnRlcicgOiAnRW50ZXInLFxuICAgICdMZWZ0JyAgOiAnQXJyb3dMZWZ0JyxcbiAgICAnUmlnaHQnIDogJ0Fycm93UmlnaHQnLFxuICAgICdVKzAwMjAnOiAnICcsXG4gICAgJ1UrMDAwOSc6ICdUYWInLFxuICAgICdVcCcgICAgOiAnQXJyb3dVcCdcbiAgfSxcbiAgd2l0aFNoaWZ0OiB7XG4gICAgJ1UrMDA0MSc6ICdBJyxcbiAgICAnVSswMDQyJzogJ0InLFxuICAgICdVKzAwNDMnOiAnQycsXG4gICAgJ1UrMDA0NCc6ICdEJyxcbiAgICAnVSswMDQ1JzogJ0UnLFxuICAgICdVKzAwNDYnOiAnRicsXG4gICAgJ1UrMDA0Nyc6ICdHJyxcbiAgICAnVSswMDQ4JzogJ0gnLFxuICAgICdVKzAwNDknOiAnSScsXG4gICAgJ1UrMDA0QSc6ICdKJyxcbiAgICAnVSswMDRCJzogJ0snLFxuICAgICdVKzAwNEMnOiAnTCcsXG4gICAgJ1UrMDA0RCc6ICdNJyxcbiAgICAnVSswMDRFJzogJ04nLFxuICAgICdVKzAwNEYnOiAnTycsXG4gICAgJ1UrMDA1MCc6ICdQJyxcbiAgICAnVSswMDUxJzogJ1EnLFxuICAgICdVKzAwNTInOiAnUicsXG4gICAgJ1UrMDA1Myc6ICdTJyxcbiAgICAnVSswMDU0JzogJ1QnLFxuICAgICdVKzAwNTUnOiAnVScsXG4gICAgJ1UrMDA1Nic6ICdWJyxcbiAgICAnVSswMDU3JzogJ1cnLFxuICAgICdVKzAwNTgnOiAnWCcsXG4gICAgJ1UrMDA1OSc6ICdZJyxcbiAgICAnVSswMDVBJzogJ1onLFxuICAgICdVKzAwMzAnOiAnKScsXG4gICAgJ1UrMDAzMSc6ICchJyxcbiAgICAnVSswMDMyJzogJ0AnLFxuICAgICdVKzAwMzMnOiAnIycsXG4gICAgJ1UrMDAzNCc6ICckJyxcbiAgICAnVSswMDM1JzogJyUnLFxuICAgICdVKzAwMzYnOiAnXicsXG4gICAgJ1UrMDAzNyc6ICcmJyxcbiAgICAnVSswMDM4JzogJyonLFxuICAgICdVKzAwMzknOiAnKCcsXG4gICAgJ1UrMDBDMCc6ICd+JyxcbiAgICAnVSswMEJEJzogJ18nLFxuICAgICdVKzAwQkInOiAnKycsXG4gICAgJ1UrMDBEQic6ICd7JyxcbiAgICAnVSswMEREJzogJ30nLFxuICAgICdVKzAwREMnOiAnfCcsXG4gICAgJ1UrMDBCQSc6ICc6JyxcbiAgICAnVSswMERFJzogJ1wiJyxcbiAgICAnVSswMEJDJzogJzwnLFxuICAgICdVKzAwQkUnOiAnPicsXG4gICAgJ1UrMDBCRic6ICc/JyxcbiAgICAnVSswMDIwJzogJyAnLFxuICAgICdVKzAwMDgnOiAnQmFja3NwYWNlJyxcbiAgICAnVSswMDc1JzogJ0RlbGV0ZScsXG4gICAgJ0Rvd24nICA6ICdBcnJvd0Rvd24nLFxuICAgICdFbnRlcicgOiAnRW50ZXInLFxuICAgICdMZWZ0JyAgOiAnQXJyb3dMZWZ0JyxcbiAgICAnUmlnaHQnIDogJ0Fycm93UmlnaHQnLFxuICAgICdVKzAwMjAnOiAnICcsXG4gICAgJ1UrMDAwOSc6ICdUYWInLFxuICAgICdVcCcgICAgOiAnQXJyb3dVcCdcbiAgfVxufTtcblxuZXhwb3J0IHsga2V5SWRlbnRpZmllckNoYXJ0cyB9O1xuIiwiaW1wb3J0IHsgVmlld3BvcnQgfSBmcm9tICcuLi9tb2RlbHMvYWN0aW9ucy92aWV3cG9ydCc7XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0KGFjdGlvbiwgY29uZmlnKSB7XG4gIGNvbnN0IGNvbW1hbmQgPSBhY3Rpb24ubmFtZTtcbiAgY29uc3Qgdmlld3BvcnQgPSBjb25maWcudmlld3BvcnQ7XG4gIHN3aXRjaCAoY29tbWFuZCkge1xuICAgIGNhc2UgJ2FkZENoYXInOlxuICAgICAgcmV0dXJuIFZpZXdwb3J0LmFkZENoYXIodmlld3BvcnQsIGFjdGlvbi5jaGFyKTtcbiAgICBjYXNlICdjb21wbGV0ZVdvcmQnOlxuICAgICAgcmV0dXJuIFZpZXdwb3J0LmNvbXBsZXRlV29yZCh2aWV3cG9ydCwgY29uZmlnLmdldENhbmRpZGF0ZXMpO1xuICAgIGNhc2UgJ25vT3AnOlxuICAgICAgcmV0dXJuIHZpZXdwb3J0O1xuICAgIGNhc2UgJ3N1Ym1pdCc6XG4gICAgICByZXR1cm4gVmlld3BvcnQuc3VibWl0KHZpZXdwb3J0LCBjb25maWcudHJhbnNmb3JtKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFZpZXdwb3J0W2NvbW1hbmRdKHZpZXdwb3J0KTtcbiAgfVxufVxuXG5leHBvcnQgeyBnZXRWaWV3cG9ydCB9O1xuIiwiaW1wb3J0IHsgZ2V0Vmlld3BvcnQgfSBmcm9tICcuL2dldFZpZXdwb3J0JztcbmltcG9ydCB7IGludGVycHJldEtleWRvd24gfSBmcm9tICcuL2NoYXJzL2ludGVycHJldEtleWRvd24nO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplQ29udHJvbChzdWJzY3JpYmUsIHJlbmRlciwgY29uZmlnKSB7XG4gIGNvbnN0IGhhbmRsZUV2ZW50ID0gZnVuY3Rpb24gKGdldEFjdGlvbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJlbmRlcihnZXRWaWV3cG9ydChnZXRBY3Rpb24oZXZlbnQpLCBjb25maWcpKTtcbiAgICB9O1xuICB9XG5cbiAgc3Vic2NyaWJlKCdrZXlkb3duJywgaGFuZGxlRXZlbnQoaW50ZXJwcmV0S2V5ZG93bikpO1xufVxuXG5leHBvcnQgeyBpbml0aWFsaXplQ29udHJvbCB9O1xuIiwiY29uc3QgX25vZGVJZCAgICAgPSAnI2VybC1jc3Mtc2Nyb2xsYmFyLXRlc3QtZGl2JztcbmNvbnN0IF9wcmVmaXhlcyAgID0gWyctd2Via2l0LScsICctbW96LScsICctby0nLCAnLW1zLSddO1xuY29uc3QgX3BzZXVkbyAgICAgPSAnOjonO1xuY29uc3QgX3Njcm9sbGJhciAgPSAnc2Nyb2xsYmFyJztcbmNvbnN0IF93aWR0aDEwcHggID0gJ3t3aWR0aDoxMHB4O30nO1xuXG5mdW5jdGlvbiBjcmVhdGVSdWxlKHByZWZpeCkge1xuICByZXR1cm4gX25vZGVJZCArIF9wc2V1ZG8gKyBwcmVmaXggKyBfc2Nyb2xsYmFyICsgX3dpZHRoMTBweDtcbn1cblxuZnVuY3Rpb24gX2RldGVjdENzc1Njcm9sbGJhcihzdHlsZVJ1bGUpIHtcbiAgY29uc3QgYm9keSA9IGdldEJvZHkoKTtcbiAgY29uc3QgZG9jRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9kZS5pZCA9ICdlcmwtY3NzLXNjcm9sbGJhci10ZXN0LWRpdic7XG4gIGRpdi5hcHBlbmRDaGlsZChub2RlKTtcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbiAgc3R5bGUuaWQgPSAnZXJsLWNzcy1zY3JvbGxiYXItdGVzdC1zdHlsZSc7XG4gIGNvbnN0IG5vbmNlTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGxiYXItbm9uY2UnKTtcbiAgY29uc3Qgbm9uY2UgPSBub25jZU5vZGUuZGF0YXNldFsnc2Nyb2xsYmFyTm9uY2UnXTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKTtcblxuICAoYm9keS5mYWtlID8gYm9keSA6IGRpdikuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHN0eWxlUnVsZTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHlsZVJ1bGUpKTtcbiAgfVxuXG4gIGRpdi5pZCA9ICdlcmwtY3NzLXNjcm9sbC10ZXN0JztcblxuICBpZiAoYm9keS5mYWtlKSB7XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIGNvbnN0IGRvY092ZXJmbG93ID0gZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdztcbiAgICBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgZG9jRWxlbWVudC5hcHBlbmRDaGlsZChib2R5KTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IGhhc0Nzc1Njcm9sbGJhcihub2RlLCAzMCk7XG5cbiAgaWYgKGJvZHkuZmFrZSkge1xuICAgIGJvZHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChib2R5KTtcbiAgICBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gZG9jT3ZlcmZsb3c7XG4gICAgZG9jRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gIH0gZWxzZSB7XG4gICAgZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGRldGVjdENzc1Njcm9sbGJhcigpIHtcbiAgY29uc3QgY3NzU2Nyb2xsYmFyID1cbiAgICBfbm9kZUlkICsgJ3tvdmVyZmxvdzpzY3JvbGw7d2lkdGg6NDBweDtoZWlnaHQ6NDBweDt9JyArXG4gICAgX3ByZWZpeGVzLm1hcChjcmVhdGVSdWxlKS5qb2luKCcnKSArXG4gICAgY3JlYXRlUnVsZSgnJyk7XG5cbiAgcmV0dXJuIF9kZXRlY3RDc3NTY3JvbGxiYXIoY3NzU2Nyb2xsYmFyKTtcbn1cblxuZnVuY3Rpb24gZ2V0Qm9keSgpIHtcbiAgbGV0IF9ib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICBpZiAoIV9ib2R5KSB7XG4gICAgY29uc3QgaXNTdmcgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2Zyc7XG4gICAgX2JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGlzU3ZnID8gJ3N2ZycgOiAnYm9keScpO1xuICAgIF9ib2R5LmZha2UgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF9ib2R5O1xufVxuXG5mdW5jdGlvbiBoYXNDc3NTY3JvbGxiYXIobm9kZSwgZXhwZWN0ZWRXaWR0aCkge1xuICByZXR1cm4gJ3Njcm9sbFdpZHRoJyBpbiBub2RlICYmIG5vZGUuc2Nyb2xsV2lkdGggPT09IGV4cGVjdGVkV2lkdGg7XG59XG5cbmV4cG9ydCB7IGRldGVjdENzc1Njcm9sbGJhciB9O1xuIiwiaW1wb3J0IHsgZGV0ZWN0Q3NzU2Nyb2xsYmFyIH0gIGZyb20gJy4vZGV0ZWN0Q3NzU2Nyb2xsYmFyJztcbmltcG9ydCB7IGdldEluaXRpYWxNb2RlbCB9ICAgICBmcm9tICcuL21vZGVscy9nZXRJbml0aWFsTW9kZWwnO1xuaW1wb3J0IHsgRVJMS0lORyB9ICAgICAgICAgICAgIGZyb20gJy4vdmlldy9yZWNyZWF0ZUNvbnNvbGUnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUNvbnRyb2wgfSAgIGZyb20gJy4vY29udHJvbC9pbml0aWFsaXplQ29udHJvbCc7XG5pbXBvcnQgeyBpbml0aWFsaXplVmlldyB9ICAgICAgZnJvbSAnLi92aWV3L2luaXRpYWxpemVWaWV3JztcbmltcG9ydCB7IHJlbmRlciB9ICAgICAgICAgICAgICBmcm9tICcuL3JlbmRlcic7XG5pbXBvcnQgeyBzY3JvbGwgfSAgICAgICAgICAgICAgZnJvbSAnLi92aWV3L3Njcm9sbCc7XG5pbXBvcnQgeyBzdWJzY3JpYmUgfSAgICAgICAgICAgZnJvbSAnLi9zdWJzY3JpYmUnO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplKGNvbmZpZykge1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLm5vZGVJZCk7XG4gIGNvbnN0IGluaXRpYWxNb2RlbCA9IGdldEluaXRpYWxNb2RlbChjb25maWcuaW5pdGlhbE1vZGVsRGF0YSk7XG4gIGNvbnN0IHByb21wdExhYmVsID0gY29uZmlnLnByb21wdExhYmVsO1xuICBjb25zdCBsYWJlbHMgPSB7IHByb21wdExhYmVsOiBwcm9tcHRMYWJlbCB9O1xuICBjb25zdCB2aWV3TW9kZWwgPSBFUkxLSU5HKGxhYmVscywgaW5pdGlhbE1vZGVsKTtcblxuICBpbml0aWFsaXplVmlldyhyb290LCB2aWV3TW9kZWwpO1xuXG4gIGNvbnN0IHJvb3RDaGlsZCA9IHJvb3QuY2hpbGROb2Rlc1swXTtcblxuICBjb25zdCBjb250cm9sQ29uZmlnID0ge1xuICAgIGdldENhbmRpZGF0ZXM6IGNvbmZpZy5nZXRDYW5kaWRhdGVzLFxuICAgIHByb21wdExhYmVsOiBwcm9tcHRMYWJlbCxcbiAgICB0cmFuc2Zvcm06IGNvbmZpZy50cmFuc2Zvcm0sXG4gICAgdmlld3BvcnQ6IGluaXRpYWxNb2RlbFxuICB9O1xuXG4gIGNvbnN0IGNzc1Njcm9sbGJhckRldGVjdGVkID0gZGV0ZWN0Q3NzU2Nyb2xsYmFyKCk7XG5cbiAgc2V0U2Nyb2xsYmFyVmlzaWJpbGl0eShjc3NTY3JvbGxiYXJEZXRlY3RlZCk7XG5cbiAgY29uc3QgX3Njcm9sbCA9IHNjcm9sbChjc3NTY3JvbGxiYXJEZXRlY3RlZCk7XG5cbiAgaW5pdGlhbGl6ZUNvbnRyb2woXG4gICAgc3Vic2NyaWJlLFxuICAgIHJlbmRlcih2aWV3TW9kZWwsIHJvb3RDaGlsZCwgY29udHJvbENvbmZpZywgX3Njcm9sbCksXG4gICAgY29udHJvbENvbmZpZyk7XG59XG5cbmZ1bmN0aW9uIHNldFNjcm9sbGJhclZpc2liaWxpdHkoY3NzU2Nyb2xsYmFyRGV0ZWN0ZWQpIHtcbiAgaWYgKCFjc3NTY3JvbGxiYXJEZXRlY3RlZCkge1xuICAgIGNvbnN0IHZpZXdwb3J0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZXJsLXZpZXdwb3J0JylbMF1cbiAgICB2aWV3cG9ydC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICB9XG59XG5cblxuZXhwb3J0IHsgaW5pdGlhbGl6ZSB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRnJhbWUgfSBmcm9tICcuLi90eXBlcy9jcmVhdGVGcmFtZSc7XG5cbmZ1bmN0aW9uIGNsZWFyKGZyYW1lLCB0ZXJtaW5hbCkge1xuICByZXR1cm4gY3JlYXRlRnJhbWUoXG4gICAgMCxcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLmxlbmd0aCxcbiAgICBmcmFtZS5wcm9tcHRJbmRleCk7XG59XG5cbmZ1bmN0aW9uIGZhc3RGb3J3YXJkKGZyYW1lKSB7XG4gIHJldHVybiBjcmVhdGVGcmFtZShcbiAgICBmcmFtZS5vZmZzZXQsXG4gICAgZnJhbWUuc3RhcnQsXG4gICAgZnJhbWUucHJvbXB0SW5kZXggPiAwXG4gICAgICA/IGZyYW1lLnByb21wdEluZGV4IC0gMVxuICAgICAgOiBmcmFtZS5wcm9tcHRJbmRleCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UHJvbXB0SW5kZXgoZnJhbWUpIHtcbiAgcmV0dXJuIGNyZWF0ZUZyYW1lKFxuICAgIGZyYW1lLm9mZnNldCxcbiAgICBmcmFtZS5zdGFydCxcbiAgICAwKTtcbn1cblxuZnVuY3Rpb24gcmV3aW5kKGZyYW1lLCB0ZXJtaW5hbCkge1xuICByZXR1cm4gY3JlYXRlRnJhbWUoXG4gICAgZnJhbWUub2Zmc2V0LFxuICAgIGZyYW1lLnN0YXJ0LFxuICAgIHRlcm1pbmFsLnByb21wdHMubGVuZ3RoID4gZnJhbWUucHJvbXB0SW5kZXhcbiAgICAgID8gZnJhbWUucHJvbXB0SW5kZXggKyAxXG4gICAgICA6IGZyYW1lLnByb21wdEluZGV4KTtcbn1cblxuZXhwb3J0IGNvbnN0IEZyYW1lID0ge1xuICBjbGVhcixcbiAgZmFzdEZvcndhcmQsXG4gIHJlc2V0UHJvbXB0SW5kZXgsXG4gIHJld2luZFxufTtcbiIsImltcG9ydCB7IGNyZWF0ZVRlcm1pbmFsIH0gZnJvbSAnLi4vdHlwZXMvY3JlYXRlVGVybWluYWwnO1xuaW1wb3J0IHsgY3JlYXRlUHJvbXB0IH0gZnJvbSAnLi4vdHlwZXMvY3JlYXRlUHJvbXB0JztcblxuZnVuY3Rpb24gYWRkQ2hhcih0ZXJtaW5hbCwgY2hhcikge1xuICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgdGVybWluYWwuZW50cmllcyxcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLFxuICAgIGNyZWF0ZVByb21wdChcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wcmVDdXJzb3IgKyBjaGFyLFxuICAgICAgdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3IpKTtcbn1cblxuZnVuY3Rpb24gY29tcGxldGVXb3JkKHRlcm1pbmFsLCBnZXRDYW5kaWRhdGVzKSB7XG4gIGNvbnN0IF9nZXRDYW5kaWRhdGVzID0gKGdldENhbmRpZGF0ZXMgPT0gbnVsbClcbiAgICA/IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBjb3VwbGluZyB0byBsaXNwIGltcGxlbWVudGF0aW9uXG4gICAgICAgIHJldHVybiBbeyBlZmZlY3Q6IGZhbHNlLCB2YWx1ZTogdmFsdWUgfV07XG4gICAgICB9XG4gICAgOiBnZXRDYW5kaWRhdGVzO1xuXG4gIGNvbnN0IGNvbW1hbmRUZXh0ID0gdGVybWluYWwucHJvbXB0LnByZUN1cnNvcjtcbiAgY29uc3Qgc3BsaXRDb21tYW5kID0gZ2V0UHJlZml4KGNvbW1hbmRUZXh0KTtcbiAgY29uc3QgY2FuZGlkYXRlcyA9IF9nZXRDYW5kaWRhdGVzKHNwbGl0Q29tbWFuZFsxXSk7XG4gIGNvbnN0IGxlbmd0aCA9IGNhbmRpZGF0ZXMubGVuZ3RoO1xuXG4gIGlmIChsZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdGVybWluYWw7XG4gIH1cblxuICBsZXQgZW50cmllcztcbiAgbGV0IHByb21wdDtcblxuICBpZiAobGVuZ3RoID09PSAxKSB7XG4gICAgZW50cmllcyA9IHRlcm1pbmFsLmVudHJpZXM7XG4gICAgcHJvbXB0ID0gY3JlYXRlUHJvbXB0KFxuICAgICAgc3BsaXRDb21tYW5kWzBdICsgY2FuZGlkYXRlc1swXSArICcgJyArIHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yLFxuICAgICAgdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3IpO1xuICB9IGVsc2Uge1xuICAgIGVudHJpZXMgPSB0ZXJtaW5hbC5lbnRyaWVzLmNvbmNhdChcbiAgICAgIFt7IHR5cGU6ICdjb21tYW5kJywgdmFsdWU6IGV4dHJhY3RDb21tYW5kKHRlcm1pbmFsLnByb21wdCkgfV0sXG4gICAgICBbeyB0eXBlOiAnY29tcGxldGlvbicsIHZhbHVlOiBjYW5kaWRhdGVzLmpvaW4oJyAnKSB9XSk7XG4gICAgcHJvbXB0ID0gdGVybWluYWwucHJvbXB0O1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKGVudHJpZXMsIHRlcm1pbmFsLnByb21wdHMsIHByb21wdCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUxlZnRDaGFyKHRlcm1pbmFsKSB7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLCBcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLFxuICAgIGNyZWF0ZVByb21wdChcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wcmVDdXJzb3Iuc2xpY2UoMCwgLTEpLFxuICAgICAgdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3IpKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJlQ3Vyc29yKHRlcm1pbmFsKSB7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLCBcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLCBcbiAgICBjcmVhdGVQcm9tcHQoJycsIHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVJpZ2h0Q2hhcih0ZXJtaW5hbCkge1xuICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgdGVybWluYWwuZW50cmllcywgXG4gICAgdGVybWluYWwucHJvbXB0cywgXG4gICAgY3JlYXRlUHJvbXB0KFxuICAgICAgdGVybWluYWwucHJvbXB0LnByZUN1cnNvcixcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yLnNsaWNlKDEpKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVdvcmQodGVybWluYWwpIHtcbiAgY29uc3QgcHJlQ3Vyc29yID0gdGVybWluYWwucHJvbXB0LnByZUN1cnNvcjtcbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgIHRlcm1pbmFsLmVudHJpZXMsIFxuICAgIHRlcm1pbmFsLnByb21wdHMsIFxuICAgIGNyZWF0ZVByb21wdChcbiAgICAgIHByZUN1cnNvci5zbGljZSgwLCBwcmVDdXJzb3Iuc2xpY2UoMCwgLTEpLmxhc3RJbmRleE9mKCcgJykgKyAxKSxcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yKSk7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RDb21tYW5kKHByb21wdCkge1xuICByZXR1cm4gKHByb21wdC5wcmVDdXJzb3IgKyBwcm9tcHQucG9zdEN1cnNvcikudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuQXJyYXkoYXJyYXkpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGFycmF5KTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJlZml4KGNvbW1hbmQpIHtcbiAgY29uc3QgcmVnZXggPSAvXiguKltcXHNcXChcXClcXFtcXF1dKShbXlxcKFxcKVxcW1xcXV0qKS87XG4gIGNvbnN0IG1hdGNoID0gcmVnZXguZXhlYyhjb21tYW5kKTtcbiAgcmV0dXJuIG1hdGNoID09IG51bGxcbiAgICA/IFsnJywgY29tbWFuZF1cbiAgICA6IFttYXRjaFsxXSwgbWF0Y2hbMl1dO1xufVxuXG5mdW5jdGlvbiBtb3ZlQ3Vyc29yTGVmdCh0ZXJtaW5hbCkge1xuICBjb25zdCBwcmVDdXJzb3IgPSB0ZXJtaW5hbC5wcm9tcHQucHJlQ3Vyc29yO1xuICBjb25zdCBwcmVDdXJzb3JMZW5ndGggPSBwcmVDdXJzb3IubGVuZ3RoO1xuICBpZiAocHJlQ3Vyc29yTGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRlcm1pbmFsO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBvc3RDdXJzb3IgPSB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcjtcbiAgICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgICB0ZXJtaW5hbC5lbnRyaWVzLFxuICAgICAgdGVybWluYWwucHJvbXB0cyxcbiAgICAgIGNyZWF0ZVByb21wdChcbiAgICAgICAgcHJlQ3Vyc29yLnNsaWNlKDAsIC0xKSxcbiAgICAgICAgcHJlQ3Vyc29yW3ByZUN1cnNvckxlbmd0aCAtIDFdICsgcG9zdEN1cnNvcikpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdmVDdXJzb3JSaWdodCh0ZXJtaW5hbCkge1xuICBjb25zdCBwb3N0Q3Vyc29yID0gdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3I7XG4gIGlmIChwb3N0Q3Vyc29yLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0ZXJtaW5hbDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwcmVDdXJzb3IgPSB0ZXJtaW5hbC5wcm9tcHQucHJlQ3Vyc29yO1xuICAgIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICAgIHRlcm1pbmFsLmVudHJpZXMsXG4gICAgICB0ZXJtaW5hbC5wcm9tcHRzLFxuICAgICAgY3JlYXRlUHJvbXB0KFxuICAgICAgICBwcmVDdXJzb3IgKyBwb3N0Q3Vyc29yWzBdLFxuICAgICAgICBwb3N0Q3Vyc29yLnNsaWNlKDEpKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW92ZUN1cnNvclRvRW5kKHRlcm1pbmFsKSB7XG4gIGNvbnN0IHByb21wdCA9IHRlcm1pbmFsLnByb21wdDtcbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgIHRlcm1pbmFsLmVudHJpZXMsXG4gICAgdGVybWluYWwucHJvbXB0cyxcbiAgICBjcmVhdGVQcm9tcHQocHJvbXB0LnByZUN1cnNvciArIHByb21wdC5wb3N0Q3Vyc29yLCAnJykpO1xufVxuXG5mdW5jdGlvbiBtb3ZlQ3Vyc29yVG9TdGFydCh0ZXJtaW5hbCkge1xuICBjb25zdCBwcm9tcHQgPSB0ZXJtaW5hbC5wcm9tcHQ7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLFxuICAgIHRlcm1pbmFsLnByb21wdHMsXG4gICAgY3JlYXRlUHJvbXB0KCcnLCBwcm9tcHQucHJlQ3Vyc29yICsgcHJvbXB0LnBvc3RDdXJzb3IpKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUHJvbXB0KHByb21wdCkge1xuICByZXR1cm4gY3JlYXRlUHJvbXB0KGV4dHJhY3RDb21tYW5kKHByb21wdCksICcnKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0KHRlcm1pbmFsLCB0cmFuc2Zvcm0pIHtcbiAgbGV0IG5ld0NhY2hlZFByb21wdE1heWJlO1xuICBsZXQgbmV3RnV0dXJlO1xuXG4gIGNvbnN0IF90cmFuc2Zvcm0gPSAodHJhbnNmb3JtID09IG51bGwpXG4gICAgPyBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gY291cGxpbmcgdG8gbGlzcCBpbXBsZW1lbnRhdGlvblxuICAgICAgICByZXR1cm4gW3sgZWZmZWN0OiBmYWxzZSwgdmFsdWU6IHZhbHVlIH1dO1xuICAgICAgfVxuICAgIDogdHJhbnNmb3JtO1xuXG4gIGNvbnN0IGNvbW1hbmRUZXh0ID0gZXh0cmFjdENvbW1hbmQodGVybWluYWwucHJvbXB0KTtcbiAgY29uc3QgcmVzdWx0cyA9IF90cmFuc2Zvcm0oY29tbWFuZFRleHQpO1xuICBjb25zdCBfZGlzcGxheUVudHJpZXMgPSByZXN1bHRzXG4gICAgLnNsaWNlKDAsIC0xKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gKHJlc3VsdCkgeyByZXR1cm4gcmVzdWx0LmVmZmVjdC50eXBlID09PSAnZGlzcGxheSc7IH0pXG4gICAgLm1hcChmdW5jdGlvbiAoZGlzcGxheSkge1xuICAgICAgcmV0dXJuIGRpc3BsYXkudmFsdWUuc3BsaXQoXCJcXFxcXFxcXG5cIikubWFwKGZ1bmN0aW9uIChsaW5lKSB7XG4gICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICB0eXBlOiAnZGlzcGxheScsXG4gICAgICAgICAgIHZhbHVlOiBsaW5lXG4gICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXFxcXC9nLCAnXFxcXCcpXG4gICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gIGNvbnN0IGRpc3BsYXlFbnRyaWVzID0gZmxhdHRlbkFycmF5KF9kaXNwbGF5RW50cmllcyk7XG5cbiAgY29uc3QgbGFzdFJlc3VsdCA9IHJlc3VsdHNbcmVzdWx0cy5sZW5ndGggLSAxXTtcbiAgY29uc3QgcmVzcG9uc2UgPSAobGFzdFJlc3VsdC52YWx1ZSAhPSBudWxsKVxuICAgID8gW3sgdHlwZTogJ3Jlc3BvbnNlJywgdmFsdWU6IGxhc3RSZXN1bHQudmFsdWUgfV1cbiAgICA6IFtdO1xuXG4gIGNvbnN0IGNvbW1hbmQgPSB7IHR5cGU6ICdjb21tYW5kJywgdmFsdWU6IGNvbW1hbmRUZXh0IH07XG4gIGNvbnN0IHByb21wdCA9IG5vcm1hbGl6ZVByb21wdCh0ZXJtaW5hbC5wcm9tcHQpO1xuXG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLmNvbmNhdChbY29tbWFuZF0sIGRpc3BsYXlFbnRyaWVzLCByZXNwb25zZSksXG4gICAgW3Byb21wdF0uY29uY2F0KHRlcm1pbmFsLnByb21wdHMpLFxuICAgIGNyZWF0ZVByb21wdCgnJywgJycpKTtcbn1cblxuZXhwb3J0IGNvbnN0IFRlcm1pbmFsID0ge1xuICBhZGRDaGFyLFxuICBjb21wbGV0ZVdvcmQsXG4gIGRlbGV0ZUxlZnRDaGFyLFxuICBkZWxldGVQcmVDdXJzb3IsXG4gIGRlbGV0ZVJpZ2h0Q2hhcixcbiAgZGVsZXRlV29yZCxcbiAgbW92ZUN1cnNvckxlZnQsXG4gIG1vdmVDdXJzb3JSaWdodCxcbiAgbW92ZUN1cnNvclRvRW5kLFxuICBtb3ZlQ3Vyc29yVG9TdGFydCxcbiAgc3VibWl0XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlVmlld3BvcnQgfSBmcm9tICcuLi90eXBlcy9jcmVhdGVWaWV3cG9ydCc7XG5pbXBvcnQgeyBjcmVhdGVGcmFtZSB9IGZyb20gJy4uL3R5cGVzL2NyZWF0ZUZyYW1lJztcbmltcG9ydCB7IGNyZWF0ZVRlcm1pbmFsIH0gZnJvbSAnLi4vdHlwZXMvY3JlYXRlVGVybWluYWwnO1xuaW1wb3J0IHsgRnJhbWUgfSBmcm9tICcuL2ZyYW1lJztcbmltcG9ydCB7IFRlcm1pbmFsIH0gZnJvbSAnLi90ZXJtaW5hbCc7XG5cbmZ1bmN0aW9uIGFkZENoYXIodmlld3BvcnQsIGNoYXIpIHtcbiAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgIFRlcm1pbmFsLmFkZENoYXIodmlld3BvcnQudGVybWluYWwsIGNoYXIpLFxuICAgIHZpZXdwb3J0LmZyYW1lKTtcbn1cblxuZnVuY3Rpb24gY29tcGxldGVXb3JkKHZpZXdwb3J0LCBnZXRDYW5kaWRhdGVzKSB7XG4gIGNvbnN0IGZyYW1lID0gdmlld3BvcnQuZnJhbWU7XG4gIGNvbnN0IG5ld1Rlcm1pbmFsID1cbiAgICBUZXJtaW5hbC5jb21wbGV0ZVdvcmQocmVmcmVzaFRlcm1pbmFsKHZpZXdwb3J0KSwgZ2V0Q2FuZGlkYXRlcyk7XG4gIGNvbnN0IGRpZmYgPSBuZXdUZXJtaW5hbC5lbnRyaWVzLmxlbmd0aCAtIHZpZXdwb3J0LnRlcm1pbmFsLmVudHJpZXMubGVuZ3RoO1xuICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgbmV3VGVybWluYWwsXG4gICAgY3JlYXRlRnJhbWUoXG4gICAgICBmcmFtZS5vZmZzZXQgKyBkaWZmLFxuICAgICAgZnJhbWUuc3RhcnQsXG4gICAgICAwKSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyKHZpZXdwb3J0KSB7XG4gIGNvbnN0IHRlcm1pbmFsID0gdmlld3BvcnQudGVybWluYWw7XG4gIHJldHVybiBjcmVhdGVWaWV3cG9ydChcbiAgICB0ZXJtaW5hbCxcbiAgICBGcmFtZS5jbGVhcih2aWV3cG9ydC5mcmFtZSwgdGVybWluYWwpKTtcbn1cblxuZnVuY3Rpb24gZmFzdEZvcndhcmQodmlld3BvcnQpIHtcbiAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgIHZpZXdwb3J0LnRlcm1pbmFsLFxuICAgIEZyYW1lLmZhc3RGb3J3YXJkKHZpZXdwb3J0LmZyYW1lKSk7XG59XG5cbmZ1bmN0aW9uIG1vZGlmeVRlcm1pbmFsKGZuTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHZpZXdwb3J0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgICAgVGVybWluYWxbZm5OYW1lXShyZWZyZXNoVGVybWluYWwodmlld3BvcnQpKSxcbiAgICAgIEZyYW1lLnJlc2V0UHJvbXB0SW5kZXgodmlld3BvcnQuZnJhbWUpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVmcmVzaFRlcm1pbmFsKHZpZXdwb3J0KSB7XG4gIGNvbnN0IHRlcm1pbmFsID0gdmlld3BvcnQudGVybWluYWw7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbCh0ZXJtaW5hbC5lbnRyaWVzLCB0ZXJtaW5hbC5wcm9tcHRzLCB2aWV3cG9ydC5wcm9tcHQpO1xufVxuXG5mdW5jdGlvbiByZXdpbmQodmlld3BvcnQpIHtcbiAgY29uc3QgdGVybWluYWwgPSB2aWV3cG9ydC50ZXJtaW5hbDtcbiAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgIHRlcm1pbmFsLFxuICAgIEZyYW1lLnJld2luZCh2aWV3cG9ydC5mcmFtZSwgdGVybWluYWwpKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0KHZpZXdwb3J0LCB0cmFuc2Zvcm0pIHtcbiAgY29uc3QgZnJhbWUgPSB2aWV3cG9ydC5mcmFtZTtcbiAgY29uc3QgbmV3VGVybWluYWwgPSBUZXJtaW5hbC5zdWJtaXQocmVmcmVzaFRlcm1pbmFsKHZpZXdwb3J0KSwgdHJhbnNmb3JtKTtcbiAgY29uc3QgZGlmZiA9IG5ld1Rlcm1pbmFsLmVudHJpZXMubGVuZ3RoIC0gdmlld3BvcnQudGVybWluYWwuZW50cmllcy5sZW5ndGg7XG4gIHJldHVybiBjcmVhdGVWaWV3cG9ydChcbiAgICBuZXdUZXJtaW5hbCxcbiAgICBjcmVhdGVGcmFtZShcbiAgICAgIGZyYW1lLm9mZnNldCArIGRpZmYsXG4gICAgICBmcmFtZS5zdGFydCxcbiAgICAgIDApKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZpZXdwb3J0ID0ge1xuICBhZGRDaGFyLFxuICBjbGVhcixcbiAgY29tcGxldGVXb3JkLFxuICBkZWxldGVMZWZ0Q2hhcjogbW9kaWZ5VGVybWluYWwoJ2RlbGV0ZUxlZnRDaGFyJyksXG4gIGRlbGV0ZVByZUN1cnNvcjogbW9kaWZ5VGVybWluYWwoJ2RlbGV0ZVByZUN1cnNvcicpLFxuICBkZWxldGVSaWdodENoYXI6IG1vZGlmeVRlcm1pbmFsKCdkZWxldGVSaWdodENoYXInKSxcbiAgZGVsZXRlV29yZDogbW9kaWZ5VGVybWluYWwoJ2RlbGV0ZVdvcmQnKSxcbiAgZmFzdEZvcndhcmQsXG4gIG1vdmVDdXJzb3JMZWZ0OiBtb2RpZnlUZXJtaW5hbCgnbW92ZUN1cnNvckxlZnQnKSxcbiAgbW92ZUN1cnNvclJpZ2h0OiBtb2RpZnlUZXJtaW5hbCgnbW92ZUN1cnNvclJpZ2h0JyksXG4gIG1vdmVDdXJzb3JUb0VuZDogbW9kaWZ5VGVybWluYWwoJ21vdmVDdXJzb3JUb0VuZCcpLFxuICBtb3ZlQ3Vyc29yVG9TdGFydDogbW9kaWZ5VGVybWluYWwoJ21vdmVDdXJzb3JUb1N0YXJ0JyksXG4gIHJld2luZCxcbiAgc3VibWl0XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVGcmFtZSB9IGZyb20gJy4vdHlwZXMvY3JlYXRlRnJhbWUnO1xuaW1wb3J0IHsgY3JlYXRlUHJvbXB0IH0gZnJvbSAnLi90eXBlcy9jcmVhdGVQcm9tcHQnO1xuaW1wb3J0IHsgY3JlYXRlVGVybWluYWwgfSBmcm9tICcuL3R5cGVzL2NyZWF0ZVRlcm1pbmFsJztcbmltcG9ydCB7IGNyZWF0ZVZpZXdwb3J0IH0gZnJvbSAnLi90eXBlcy9jcmVhdGVWaWV3cG9ydCc7XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxNb2RlbChpbml0aWFsUHJvbXB0KSB7XG4gIHJldHVybiBjcmVhdGVWaWV3cG9ydChcbiAgICBjcmVhdGVUZXJtaW5hbChbXSwgW10sIGNyZWF0ZVByb21wdChpbml0aWFsUHJvbXB0LCAnJykpLFxuICAgIGNyZWF0ZUZyYW1lKDAsIDAsIDApKTtcbn1cblxuZXhwb3J0IHsgZ2V0SW5pdGlhbE1vZGVsIH07XG4iLCJleHBvcnQgY29uc3QgY3JlYXRlRnJhbWUgPSBmdW5jdGlvbiAob2Zmc2V0LCBzdGFydCwgcHJvbXB0SW5kZXgpIHtcbiAgcmV0dXJuIHtcbiAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICBzdGFydDogc3RhcnQsXG4gICAgcHJvbXB0SW5kZXg6IHByb21wdEluZGV4XG4gIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZVByb21wdCA9IGZ1bmN0aW9uIChwcmVDdXJzb3IsIHBvc3RDdXJzb3IpIHtcbiAgcmV0dXJuIHtcbiAgICBwcmVDdXJzb3I6IHByZUN1cnNvcixcbiAgICBwb3N0Q3Vyc29yOiBwb3N0Q3Vyc29yXG4gIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZVRlcm1pbmFsID0gIGZ1bmN0aW9uIChlbnRyaWVzLCBwcm9tcHRzLCBjdXJyZW50UHJvbXB0KSB7XG4gIHJldHVybiAge1xuICAgIGVudHJpZXM6IGVudHJpZXMsXG4gICAgcHJvbXB0czogcHJvbXB0cyxcbiAgICBwcm9tcHQ6IGN1cnJlbnRQcm9tcHRcbiAgfTtcbn07XG4iLCJmdW5jdGlvbiBnZXRQcm9tcHQodGVybWluYWwsIGZyYW1lKSB7XG4gIHJldHVybiBmcmFtZS5wcm9tcHRJbmRleCA9PT0gMFxuICAgID8gdGVybWluYWwucHJvbXB0XG4gICAgOiB0ZXJtaW5hbC5wcm9tcHRzW2ZyYW1lLnByb21wdEluZGV4IC0gMV07XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVWaWV3cG9ydCA9IGZ1bmN0aW9uICh0ZXJtaW5hbCwgZnJhbWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0ZXJtaW5hbDogdGVybWluYWwsXG4gICAgZnJhbWU6IGZyYW1lLFxuICAgIHByb21wdDogZ2V0UHJvbXB0KHRlcm1pbmFsLCBmcmFtZSlcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBkaWZmIH0gZnJvbSAnLi4vcmlib3NvbWUvZGlmZic7XG5pbXBvcnQgeyBFUkxLSU5HIH0gZnJvbSAnLi92aWV3L3JlY3JlYXRlQ29uc29sZSc7XG5pbXBvcnQgeyBtb2RpZnlFbGVtZW50IH0gZnJvbSAnLi4vcmlib3NvbWUvaW50ZXJwcmV0ZXInO1xuXG5mdW5jdGlvbiByZW5kZXIoX3ZpZXdNb2RlbCwgcm9vdENoaWxkLCBjb250cm9sQ29uZmlnLCBzY3JvbGwpIHtcbiAgbGV0IHZpZXdNb2RlbCA9IF92aWV3TW9kZWw7XG4gIHJldHVybiBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB7IHByb21wdExhYmVsOiBjb250cm9sQ29uZmlnLnByb21wdExhYmVsIH07XG4gICAgY29uc3QgbmV3Vmlld01vZGVsID0gRVJMS0lORyhsYWJlbHMsIG1vZGVsKTtcbiAgICBtb2RpZnlFbGVtZW50KHJvb3RDaGlsZCwgZGlmZihuZXdWaWV3TW9kZWwsIHZpZXdNb2RlbCkpO1xuXG4gICAgY29udHJvbENvbmZpZy52aWV3cG9ydCA9IG1vZGVsO1xuICAgIHZpZXdNb2RlbCA9IG5ld1ZpZXdNb2RlbDtcblxuICAgIHNjcm9sbCgpO1xuICB9O1xufVxuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImZ1bmN0aW9uIHN1YnNjcmliZShldmVudFR5cGUsIGV2ZW50SGFuZGxlcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIHN1cHJlc3NEZWZhdWx0KGV2ZW50SGFuZGxlcikpO1xufVxuXG5mdW5jdGlvbiBzdXByZXNzRGVmYXVsdChoYW5kbGVFdmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBoYW5kbGVFdmVudChldmVudCk7XG4gIH07XG59XG5cbmV4cG9ydCB7IHN1YnNjcmliZSB9O1xuIiwiaW1wb3J0IHsgU1BBTiB9IGZyb20gJy4uLy4uL3JpYm9zb21lL2VsZW1lbnRzJztcblxuZnVuY3Rpb24gRVJMX0VOVFJZKHRleHQpIHtcbiAgcmV0dXJuIFNQQU4oX2VudHJ5Q29uZmlnLCB0ZXh0ICsgbmV3bGluZSk7XG59XG5cbmZ1bmN0aW9uIEVSTF9JTlBVVChwcm9tcHRUZXh0LCBwcmVUZXh0LCBwb3N0VGV4dCkge1xuICByZXR1cm4gU1BBTihcbiAgICBfaW5wdXRDb25maWcsXG4gICAgRVJMX1BST01QVChwcm9tcHRUZXh0KSxcbiAgICBFUkxfUFJFKHByZVRleHQpLFxuICAgIEVSTF9DVVJTT1IsXG4gICAgRVJMX1BPU1QocG9zdFRleHQpKTtcbn1cblxuZnVuY3Rpb24gRVJMX1BPU1QodGV4dCkge1xuICByZXR1cm4gU1BBTihfcG9zdENvbmZpZywgdGV4dCk7XG59XG5cbmZ1bmN0aW9uIEVSTF9QUkUodGV4dCkge1xuICByZXR1cm4gU1BBTihfcHJlQ29uZmlnLCB0ZXh0KTtcbn1cblxuZnVuY3Rpb24gRVJMX1BST01QVCh0ZXh0KSB7XG4gIHJldHVybiBTUEFOKF9wcm9tcHRDb25maWcsIHRleHQpO1xufVxuXG5jb25zdCBlbXB0eVN0cmluZyA9ICcnO1xuY29uc3QgbmV3bGluZSA9ICdcXG4nO1xuY29uc3Qgc3BhY2UgPSAnICc7XG5jb25zdCB1bmRlcnNjb3JlID0gJ18nO1xuXG5jb25zdCBFUkxfQ1VSU09SID0gU1BBTihcbiAge1xuICAgIGlkOiAnZXJsLWN1cnNvcicsXG4gICAgY2xhc3NlczogeyAnZXJsLWN1cnNvcic6IHRydWUsICdlcmwtY3Vyc29yJzogdHJ1ZSB9LFxuICB9LFxuICB1bmRlcnNjb3JlKTtcblxuY29uc3QgX2VudHJ5Q29uZmlnID0ge1xuICBjbGFzc2VzOiB7ICdlcmwtZW50cnknOiB0cnVlLCAnZXJsLWxpbmUnOiB0cnVlIH0sXG59O1xuXG5jb25zdCBfaW5wdXRDb25maWcgPSB7XG4gIGlkOiAnZXJsLWlucHV0JyxcbiAgY2xhc3NlczogeyAnZXJsLWlucHV0JzogdHJ1ZSwgJ2VybC1saW5lJzogdHJ1ZSB9XG59O1xuXG5jb25zdCBfcG9zdENvbmZpZyA9IHtcbiAgaWQ6ICdlcmwtcG9zdCcsXG4gIGNsYXNzZXM6IHsgJ2VybC1wb3N0JzogdHJ1ZSB9LFxuICBzdHlsZTogeyAncG9zaXRpb24nOiAncmVsYXRpdmUnIH1cbn07XG5cbmNvbnN0IF9wcmVDb25maWcgPSB7XG4gICBpZDogJ2VybC1wcmUnLFxuICAgY2xhc3NlczogeyAnZXJsLXByZSc6IHRydWUgfVxufTtcblxuY29uc3QgX3Byb21wdENvbmZpZyA9IHtcbiAgaWQ6ICdlcmwtcHJvbXB0JyxcbiAgY2xhc3NlczogeyAnZXJsLXByb21wdCc6IHRydWUsICdlcmwtcHJvbXB0JzogdHJ1ZSB9XG59O1xuXG5leHBvcnQge1xuICBFUkxfQ1VSU09SLFxuICBFUkxfRU5UUlksXG4gIEVSTF9JTlBVVCxcbiAgRVJMX1BPU1QsXG4gIEVSTF9QUkUsXG4gIEVSTF9QUk9NUFRcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVBbmRBdHRhY2hFbGVtZW50IH0gZnJvbSAnLi4vLi4vcmlib3NvbWUvaW50ZXJwcmV0ZXInO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplVmlldyhyb290LCB2aWV3TW9kZWwpIHtcbiAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudChyb290LCB2aWV3TW9kZWwpO1xufVxuXG5leHBvcnQgeyBpbml0aWFsaXplVmlldyB9O1xuIiwiaW1wb3J0IHtcbiAgRVJMX0NVUlNPUixcbiAgRVJMX0VOVFJZLFxuICBFUkxfSU5QVVQsXG4gIEVSTF9QT1NULFxuICBFUkxfUFJFLFxuICBFUkxfUFJPTVBUXG59IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmltcG9ydCB7XG4gIERJVixcbiAgSDEsXG4gIEg0LFxuICBTRUNUSU9OLFxuICBTUEFOXG59IGZyb20gJy4uLy4uL3JpYm9zb21lL2VsZW1lbnRzJztcblxuY29uc3QgRVJMX0hFQURFUiA9IFNFQ1RJT04oXG4gICAge1xuICAgICAgaWQ6ICdlcmwtaGVhZGVyJyxcbiAgICAgIGNsYXNzZXM6IHsgJ2hlYWQnOiB0cnVlIH1cbiAgICB9LFxuICAgIEgxKG51bGwsICdFcmxrw7ZuaWcgTGlzcCBDb25zb2xlXFxuJyksXG4gICAgSDQobnVsbCwgJ0EgdGVybWluYWwgZW11bGF0b3IgYW5kIGxpc3AgaW50ZXJwcmV0ZXJcXG4nKSk7XG5cbmNvbnN0IGVtcHR5U3RyaW5nID0gJyc7XG5cbmZ1bmN0aW9uIEVSTEtJTkcocHJlZml4ZXMsIHZpZXdwb3J0KSB7XG4gIGNvbnN0IHByb21wdExhYmVsID0gcHJlZml4ZXMucHJvbXB0TGFiZWw7XG4gIGNvbnN0IHByb21wdCA9IHZpZXdwb3J0LnByb21wdDtcbiAgY29uc3QgZnJhbWUgPSB2aWV3cG9ydC5mcmFtZTtcblxuICBjb25zdCBlbnRyaWVzID0gdmlld3BvcnQudGVybWluYWwuZW50cmllc1xuICAgIC5zbGljZShmcmFtZS5zdGFydCwgZnJhbWUuc3RhcnQgKyBmcmFtZS5vZmZzZXQpXG4gICAgLm1hcChzcGVjaWZ5RW50cnkuYmluZChudWxsLCBwcmVmaXhlcykpO1xuXG4gIGNvbnN0IHByZUN1cnNvciA9IHByb21wdC5wcmVDdXJzb3IgIT0gbnVsbCA/IHByb21wdC5wcmVDdXJzb3IgOiBlbXB0eVN0cmluZztcbiAgY29uc3QgcG9zdEN1cnNvciA9IHByb21wdC5wb3N0Q3Vyc29yICE9IG51bGwgPyBwcm9tcHQucG9zdEN1cnNvciA6IGVtcHR5U3RyaW5nO1xuXG4gIHJldHVybiBESVYoXG4gICAgX2VybGtvbmlnQ29uZmlnLFxuICAgIERJVihcbiAgICAgIG51bGwsXG4gICAgICBFUkxfSEVBREVSLFxuICAgICAgRElWKFxuICAgICAgICBfdGVybWluYWxDb25maWcsXG4gICAgICAgIFhfU0NST0xMQkFSLFxuICAgICAgICBZX1NDUk9MTEJBUixcbiAgICAgICAgRElWKFxuICAgICAgICAgIF9lcmxWaWV3cG9ydENvbmZpZyxcbiAgICAgICAgICBlbnRyaWVzLFxuICAgICAgICAgIEVSTF9JTlBVVChwcm9tcHRMYWJlbCwgcHJvbXB0LnByZUN1cnNvciwgcHJvbXB0LnBvc3RDdXJzb3IpKSkpKTtcbn1cblxuY29uc3QgWF9TQ1JPTExCQVIgPSBESVYoXG4gIHtcbiAgICBpZDogJ2VybC14LXNjcm9sbC10cmFjaycsXG4gICAgY2xhc3Nlczoge1xuICAgICAgJ2VybC14LXNjcm9sbC10cmFjayc6IHRydWUsXG4gICAgICAnZXJsLXNjcm9sbC10cmFjayc6IHRydWVcbiAgICB9XG4gIH0sXG4gIERJVih7XG4gICAgaWQ6ICdlcmwteC1zY3JvbGwtdGh1bWInLFxuICAgIGNsYXNzZXM6IHtcbiAgICAgICdlcmwteC1zY3JvbGwtdGh1bWInOiB0cnVlLFxuICAgICAgJ2VybC1zY3JvbGwtdGh1bWInOiB0cnVlXG4gICAgfVxuICB9KSk7XG5cbmNvbnN0IFlfU0NST0xMQkFSID0gRElWKFxuICB7XG4gICAgaWQ6ICdlcmwteS1zY3JvbGwtdHJhY2snLFxuICAgIGNsYXNzZXM6IHtcbiAgICAgICdlcmwteS1zY3JvbGwtdHJhY2snOiB0cnVlLFxuICAgICAgJ2VybC1zY3JvbGwtdHJhY2snOiB0cnVlXG4gICAgfVxuICB9LFxuICBESVYoe1xuICAgIGlkOiAnZXJsLXktc2Nyb2xsLXRodW1iJyxcbiAgICBjbGFzc2VzOiB7XG4gICAgICAnZXJsLXktc2Nyb2xsLXRodW1iJzogdHJ1ZSxcbiAgICAgICdlcmwtc2Nyb2xsLXRodW1iJzogdHJ1ZVxuICAgIH1cbiAgfSkpO1xuXG5jb25zdCBkZWZhdWx0Q29tcGxldGlvbkxhYmVsID0gJyAgJztcbmNvbnN0IGRlZmF1bHREaXNwbGF5TGFiZWwgPSAnJztcbmNvbnN0IGRlZmF1bHRFcnJvckxhYmVsID0gJy4uLj4gJztcbmNvbnN0IGRlZmF1bHRQcm9tcHRMYWJlbCA9ICc+ICc7XG5jb25zdCBkZWZhdWx0UmVzcG9uc2VMYWJlbCA9ICc9PT4gJztcblxuZnVuY3Rpb24gc3BlY2lmeUVudHJ5KHByZWZpeGVzLCBjb21wb25lbnQpIHtcbiAgY29uc3QgY29tcGxldGlvbkxhYmVsID0gcHJlZml4ZXMuY29tcGxldGlvbkxhYmVsIHx8IGRlZmF1bHRDb21wbGV0aW9uTGFiZWw7XG4gIGNvbnN0IGRpc3BsYXlMYWJlbCA9IHByZWZpeGVzLmRpc3BsYXlMYWJlbCB8fCBkZWZhdWx0RGlzcGxheUxhYmVsO1xuICBjb25zdCBlcnJvckxhYmVsID0gcHJlZml4ZXMuZXJyb3JMYWJlbCB8fCBkZWZhdWx0RXJyb3JMYWJlbDtcbiAgY29uc3QgcHJvbXB0TGFiZWwgPSBwcmVmaXhlcy5wcm9tcHRMYWJlbCB8fCBkZWZhdWx0UHJvbXB0TGFiZWw7XG4gIGNvbnN0IHJlc3BvbnNlTGFiZWwgPSBwcmVmaXhlcy5yZXNwb25zZUxhYmVsIHx8IGRlZmF1bHRSZXNwb25zZUxhYmVsO1xuXG4gIGxldCBlbnRyeTtcbiAgc3dpdGNoIChjb21wb25lbnQudHlwZSkge1xuICAgIGNhc2UgJ2NvbW1hbmQnOlxuICAgICAgZW50cnkgPSBwcm9tcHRMYWJlbCArIGNvbXBvbmVudC52YWx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Jlc3BvbnNlJzpcbiAgICAgIGVudHJ5ID0gcmVzcG9uc2VMYWJlbCArIGNvbXBvbmVudC52YWx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Rpc3BsYXknOlxuICAgICAgZW50cnkgPSBkaXNwbGF5TGFiZWwgKyBjb21wb25lbnQudmFsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjb21wbGV0aW9uJzpcbiAgICAgIGVudHJ5ID0gY29tcGxldGlvbkxhYmVsICsgY29tcG9uZW50LnZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgZW50cnkgPSBlcnJvckxhYmVsICsgY29tcG9uZW50LnZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBjb21wb25lbnQgdHlwZScpO1xuICB9XG4gIHJldHVybiBFUkxfRU5UUlkoZW50cnkpO1xufVxuXG5jb25zdCBfZXJsa29uaWdDb25maWcgPSB7XG4gIGlkOiAnZXJsa29uaWcnLFxuICBjbGFzc2VzOiB7ICdlcmxrb25pZyc6IHRydWUsICdjb250YWluZXInOiB0cnVlIH1cbn07XG5jb25zdCBfY29uc29sZUNvbmZpZyA9IHsgaWQ6ICdlcmwtY29uc29sZScgfTtcbmNvbnN0IF90ZXJtaW5hbENvbmZpZyA9IHsgY2xhc3NlczogeyAndGVybWluYWwnOiB0cnVlIH19O1xuY29uc3QgX2VybFZpZXdwb3J0Q29uZmlnID0geyBjbGFzc2VzOiB7ICdlcmwtdmlld3BvcnQnOiB0cnVlIH19O1xuXG5leHBvcnQgeyBFUkxLSU5HIH07XG4iLCJmdW5jdGlvbiBnZXRDdXJzb3JPZmZzZXQoY3Vyc29yLCBub2RlKSB7XG4gIGNvbnN0IG1hcmdpbiA9IDU7XG4gIHJldHVybiBjdXJzb3Iub2Zmc2V0TGVmdCArIGN1cnNvci5vZmZzZXRXaWR0aCArIG1hcmdpbiAtIG5vZGUub2Zmc2V0V2lkdGg7XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnQoaWQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGVyY2VudGFnZShudW1iZXIpIHtcbiAgcmV0dXJuICgxMDAgKiBudW1iZXIpICsgJyUnO1xufVxuXG5mdW5jdGlvbiBnZXRWaWV3cG9ydCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VybC12aWV3cG9ydCcpWzBdO1xufVxuXG5mdW5jdGlvbiBoaWRlRmlyZWZveFNjcm9sbGJhcnModmlld3BvcnQpIHtcbiAgdmlld3BvcnQuc3R5bGUub3ZlcmZsb3dYID0gJ2hpZGRlbic7XG4gIHZpZXdwb3J0LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xufVxuXG5mdW5jdGlvbiBvbkV2ZW50KGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gX3Njcm9sbChub2RlLCBjdXJzb3IpIHtcbiAgbm9kZS5zY3JvbGxUb3AgPSBub2RlLnNjcm9sbEhlaWdodCAtIG5vZGUuY2xpZW50SGVpZ2h0O1xuICBub2RlLnNjcm9sbExlZnQgPSBnZXRDdXJzb3JPZmZzZXQoY3Vyc29yLCBub2RlKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsKGNzc1Njcm9sbGJhckRldGVjdGVkKSB7XG4gIGlmIChjc3NTY3JvbGxiYXJEZXRlY3RlZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBjdXJzb3IgPSBnZXRFbGVtZW50KCdlcmwtY3Vyc29yJyk7XG4gICAgICBfc2Nyb2xsKGdldFZpZXdwb3J0KCksIGN1cnNvcik7XG4gICAgfTtcbiAgfVxuXG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB2aWV3cG9ydCA9IGdldFZpZXdwb3J0KCk7XG4gICAgY29uc3QgY3Vyc29yID0gZ2V0RWxlbWVudCgnZXJsLWN1cnNvcicpO1xuICAgIGNvbnN0IHhUcmFjayA9IGdldEVsZW1lbnQoJ2VybC14LXNjcm9sbC10cmFjaycpO1xuICAgIGNvbnN0IHhUaHVtYiA9IGdldEVsZW1lbnQoJ2VybC14LXNjcm9sbC10aHVtYicpO1xuICAgIGNvbnN0IHlUcmFjayA9IGdldEVsZW1lbnQoJ2VybC15LXNjcm9sbC10cmFjaycpO1xuICAgIGNvbnN0IHlUaHVtYiA9IGdldEVsZW1lbnQoJ2VybC15LXNjcm9sbC10aHVtYicpO1xuICAgIGNvbnN0IHByb21wdCA9IGdldEVsZW1lbnQoJ2VybC1wcm9tcHQnKTtcblxuICAgIGNvbnN0IHZpZXdwb3J0V2lkdGggPSB2aWV3cG9ydC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IHZpZXdwb3J0Lm9mZnNldEhlaWdodDtcblxuICAgIGhpZGVGaXJlZm94U2Nyb2xsYmFycyh2aWV3cG9ydCk7XG4gICAgc2V0WFRodW1iVmlzaWJpbGl0eSh2aWV3cG9ydCwgdmlld3BvcnRXaWR0aCwgeFRyYWNrLCB4VGh1bWIsIGN1cnNvciwgcHJvbXB0KTtcbiAgICBzZXRZVGh1bWJWaXNpYmlsaXR5KHZpZXdwb3J0LCB2aWV3cG9ydEhlaWdodCwgeVRyYWNrLCB5VGh1bWIsIGN1cnNvcik7XG4gICAgc2Nyb2xsSG9yaXpvbnRhbGx5KHZpZXdwb3J0LCB2aWV3cG9ydFdpZHRoLCB4VHJhY2ssIHhUaHVtYik7XG4gICAgc2Nyb2xsVmVydGljYWxseSh2aWV3cG9ydCwgdmlld3BvcnRIZWlnaHQsIHlUcmFjaywgeVRodW1iKTtcblxuICAgIF9zY3JvbGwodmlld3BvcnQsIGN1cnNvcik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNjcm9sbEJhckhvcml6b250YWxseSh4VGh1bWIsIGxlZnRSYXRpbykge1xuICB4VGh1bWIuc3R5bGUubGVmdCA9IGdldFBlcmNlbnRhZ2UobGVmdFJhdGlvKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsQmFyVmVydGljYWxseSh5VGh1bWIsIHRvcFJhdGlvKSB7XG4gIHlUaHVtYi5zdHlsZS50b3AgPSBnZXRQZXJjZW50YWdlKHRvcFJhdGlvKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsQ29udGVudEhvcml6b250YWxseSh2aWV3cG9ydCwgbGVmdFJhdGlvKSB7XG4gIHZpZXdwb3J0LnNjcm9sbExlZnQgPSBsZWZ0UmF0aW8gKiB2aWV3cG9ydC5zY3JvbGxXaWR0aDtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsQ29udGVudFZlcnRpY2FsbHkodmlld3BvcnQsIHRvcFJhdGlvKSB7XG4gIHZpZXdwb3J0LnNjcm9sbFRvcCA9IHRvcFJhdGlvICogdmlld3BvcnQuc2Nyb2xsSGVpZ2h0O1xufVxuXG5mdW5jdGlvbiBzY3JvbGxWZXJ0aWNhbGx5KHZpZXdwb3J0LCB2aWV3cG9ydEhlaWdodCwgeVRyYWNrLCB5VGh1bWIpIHtcbiAgY29uc3QgeVRodW1iSGVpZ2h0ID0geVRodW1iLm9mZnNldEhlaWdodDtcbiAgY29uc3QgeVRyYWNrSGVpZ2h0ID0geVRyYWNrLm9mZnNldEhlaWdodDtcbiAgY29uc3QgdWxsYWdlID0geVRyYWNrSGVpZ2h0IC0geVRodW1iSGVpZ2h0O1xuXG4gIGZ1bmN0aW9uIG1vdXNlTW92ZV92ZXJ0aWNhbChldmVudCkge1xuICAgIGNvbnN0IF90b3AgPSBldmVudC5jbGllbnRZIC0geVRyYWNrLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICBjb25zdCB0b3AgPSBfdG9wIDwgMCA/IDAgOiBfdG9wID4gdWxsYWdlID8gdWxsYWdlIDogX3RvcDtcbiAgICBjb25zdCB0b3BSYXRpbyA9IHRvcCAvIHlUcmFja0hlaWdodDtcbiAgICBzY3JvbGxCYXJWZXJ0aWNhbGx5KHlUaHVtYiwgdG9wUmF0aW8pO1xuICAgIHNjcm9sbENvbnRlbnRWZXJ0aWNhbGx5KHZpZXdwb3J0LCB0b3BSYXRpbyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbW91c2VEb3duX3ZlcnRpY2FsKGV2ZW50KSB7XG4gICAgeVRodW1iLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMCwgODAsIDApJztcbiAgICBvbkV2ZW50KCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVfdmVydGljYWwpO1xuICAgIG9uRXZlbnQoJ21vdXNldXAnLCBtb3VzZVVwX3ZlcnRpY2FsKTtcbiAgfTtcblxuICBmdW5jdGlvbiBtb3VzZVVwX3ZlcnRpY2FsKGV2ZW50KSB7XG4gICAgeVRodW1iLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDU1LCA1MywgNTAsIDAuNSknO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZV92ZXJ0aWNhbCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBfdmVydGljYWwpO1xuICB9O1xuXG4gIHlUaHVtYi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25fdmVydGljYWwpO1xuICB5VGh1bWIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duX3ZlcnRpY2FsKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsSG9yaXpvbnRhbGx5KHZpZXdwb3J0LCB2aWV3cG9ydFdpZHRoLCB4VHJhY2ssIHhUaHVtYikge1xuICBjb25zdCB4VGh1bWJXaWR0aCA9IHhUaHVtYi5vZmZzZXRXaWR0aDtcbiAgY29uc3QgeFRyYWNrV2lkdGggPSB4VHJhY2sub2Zmc2V0V2lkdGg7XG4gIGNvbnN0IHVsbGFnZSA9IHhUcmFja1dpZHRoIC0geFRodW1iV2lkdGg7XG5cbiAgZnVuY3Rpb24gbW91c2VNb3ZlX2hvcml6b250YWwoZXZlbnQpIHtcbiAgICBjb25zdCBfbGVmdCA9IGV2ZW50LmNsaWVudFggLSB4VHJhY2suZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICBjb25zdCBsZWZ0ID0gX2xlZnQgPCAwID8gMCA6IF9sZWZ0ID4gdWxsYWdlID8gdWxsYWdlIDogX2xlZnQ7XG4gICAgY29uc3QgbGVmdFJhdGlvID0gbGVmdCAvIHhUcmFja1dpZHRoO1xuICAgIHNjcm9sbEJhckhvcml6b250YWxseSh4VGh1bWIsIGxlZnRSYXRpbyk7XG4gICAgc2Nyb2xsQ29udGVudEhvcml6b250YWxseSh2aWV3cG9ydCwgbGVmdFJhdGlvKTtcbiAgfTtcblxuICBmdW5jdGlvbiBtb3VzZVVwX2hvcml6b250YWwoZXZlbnQpIHtcbiAgICB4VGh1bWIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoNTUsIDUzLCA1MCwgMC41KSc7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlX2hvcml6b250YWwpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwX2hvcml6b250YWwpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1vdXNlRG93bl9ob3Jpem9udGFsKGV2ZW50KSB7XG4gICAgeFRodW1iLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMCwgODAsIDApJztcbiAgICBvbkV2ZW50KCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVfaG9yaXpvbnRhbCk7XG4gICAgb25FdmVudCgnbW91c2V1cCcsIG1vdXNlVXBfaG9yaXpvbnRhbCk7XG4gIH07XG5cbiAgeFRodW1iLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bl9ob3Jpem9udGFsKTtcbiAgeFRodW1iLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bl9ob3Jpem9udGFsKTtcbn1cblxuZnVuY3Rpb24gc2V0WFRodW1iVmlzaWJpbGl0eSh2aWV3cG9ydCwgdmlld3BvcnRXaWR0aCwgeFRyYWNrLCB4VGh1bWIsIGN1cnNvciwgcHJvbXB0KSB7XG4gIGNvbnN0IHhUcmFja1dpZHRoID0geFRyYWNrLm9mZnNldFdpZHRoO1xuICBjb25zdCB0ZXJtaW5hbFdpZHRoID0gdmlld3BvcnQuc2Nyb2xsV2lkdGg7XG4gIGNvbnN0IHhUaHVtYlN0eWxlID0geFRodW1iLnN0eWxlO1xuXG4gIGlmICh2aWV3cG9ydFdpZHRoIDwgdGVybWluYWxXaWR0aCkge1xuICAgIGNvbnN0IGZ1bGxQcm9tcHRPZmZzZXRXaWR0aCA9IHByb21wdC5vZmZzZXRMZWZ0ICsgcHJvbXB0Lm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IHN0YXJ0ID0gZnVsbFByb21wdE9mZnNldFdpZHRoO1xuICAgIGNvbnN0IHZpZXdwb3J0UmF0aW8gPSB2aWV3cG9ydFdpZHRoIC8gdGVybWluYWxXaWR0aDtcbiAgICBjb25zdCB4VGh1bWJXaWR0aCA9IHZpZXdwb3J0UmF0aW8gKiB4VHJhY2tXaWR0aDtcbiAgICBjb25zdCB2aWV3cG9ydFBlcmNlbnRhZ2UgPSBnZXRQZXJjZW50YWdlKHZpZXdwb3J0UmF0aW8pO1xuICAgIGNvbnN0IHVsbGFnZSA9IHhUcmFja1dpZHRoIC0geFRodW1iV2lkdGg7XG4gICAgY29uc3QgeFBvc2l0aW9uID0gY3Vyc29yLm9mZnNldExlZnQgKyBjdXJzb3Iub2Zmc2V0V2lkdGggLSBzdGFydDtcbiAgICBjb25zdCBjdXJzb3JSYXRpbyA9ICh4UG9zaXRpb24gLyB0ZXJtaW5hbFdpZHRoKSAqICh1bGxhZ2UgLyB4VHJhY2tXaWR0aCk7XG4gICAgY29uc3QgY3Vyc29yUGVyY2VudGFnZSA9IGdldFBlcmNlbnRhZ2UoY3Vyc29yUmF0aW8pO1xuXG4gICAgeFRodW1iU3R5bGUubGVmdCA9IGN1cnNvclBlcmNlbnRhZ2U7XG4gICAgeFRodW1iU3R5bGUud2lkdGggPSB2aWV3cG9ydFBlcmNlbnRhZ2U7XG4gICAgeFRodW1iU3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgfSBlbHNlIHtcbiAgICB4VGh1bWJTdHlsZS5sZWZ0ID0gMDtcbiAgICB4VGh1bWJTdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICB4VGh1bWJTdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0WVRodW1iVmlzaWJpbGl0eSh2aWV3cG9ydCwgdmlld3BvcnRIZWlnaHQsIHlUcmFjaywgeVRodW1iLCBjdXJzb3IpIHtcbiAgY29uc3QgeVRyYWNrSGVpZ2h0ID0geVRyYWNrLm9mZnNldEhlaWdodDtcbiAgY29uc3QgdGVybWluYWxIZWlnaHQgPSB2aWV3cG9ydC5zY3JvbGxIZWlnaHQ7XG4gIGNvbnN0IHlUaHVtYlN0eWxlID0geVRodW1iLnN0eWxlO1xuXG4gIGlmICh2aWV3cG9ydEhlaWdodCA8IHRlcm1pbmFsSGVpZ2h0KSB7XG4gICAgY29uc3Qgc3RhcnQgPSB2aWV3cG9ydC5vZmZzZXRUb3A7XG4gICAgY29uc3Qgdmlld3BvcnRSYXRpbyA9IHZpZXdwb3J0SGVpZ2h0IC8gdGVybWluYWxIZWlnaHQ7XG4gICAgY29uc3QgeVRodW1iSGVpZ2h0ID0gdmlld3BvcnRSYXRpbyAqIHlUcmFja0hlaWdodDtcbiAgICBjb25zdCB2aWV3cG9ydFBlcmNlbnRhZ2UgPSBnZXRQZXJjZW50YWdlKHZpZXdwb3J0UmF0aW8pO1xuICAgIGNvbnN0IHVsbGFnZSA9IHlUcmFja0hlaWdodCAtIHlUaHVtYkhlaWdodDtcbiAgICBjb25zdCB5UG9zaXRpb24gPSBjdXJzb3Iub2Zmc2V0VG9wICsgY3Vyc29yLm9mZnNldEhlaWdodCAtIHN0YXJ0O1xuICAgIGNvbnN0IGN1cnNvclJhdGlvID0gKHlQb3NpdGlvbiAvIHRlcm1pbmFsSGVpZ2h0KSAqICh1bGxhZ2UgLyB5VHJhY2tIZWlnaHQpO1xuICAgIGNvbnN0IGN1cnNvclBlcmNlbnRhZ2UgPSBnZXRQZXJjZW50YWdlKGN1cnNvclJhdGlvKTtcblxuICAgIHlUaHVtYlN0eWxlLnRvcCA9IGN1cnNvclBlcmNlbnRhZ2U7XG4gICAgeVRodW1iU3R5bGUuaGVpZ2h0ID0gdmlld3BvcnRQZXJjZW50YWdlO1xuICAgIHlUaHVtYlN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH0gZWxzZSB7XG4gICAgeVRodW1iU3R5bGUudG9wID0gMDtcbiAgICB5VGh1bWJTdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgeVRodW1iU3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICB9XG59XG5cbmV4cG9ydCB7IHNjcm9sbCB9O1xuIiwiaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4vY29uc29sZS9pbml0aWFsaXplJztcbmltcG9ydCB7IGludGVycHJldCB9ICBmcm9tICcuL2xpc3AvaW50ZXJwcmV0JztcbmltcG9ydCB7IGtleVRva2VucyB9ICBmcm9tICcuL2xpc3Ava2V5VG9rZW5zJztcbmltcG9ydCBpbnRyb2R1Y3Rpb24gICBmcm9tICcuL2ludHJvZHVjdGlvbi5saXNwJztcblxuY29uc3QgX2tleVRva2VucyA9ICBrZXlUb2tlbnMubWFwKGZ1bmN0aW9uIChrZXlUb2tlbikge1xuICByZXR1cm4gJzonICsga2V5VG9rZW47XG59KTtcblxuY29uc3QgcHJvbXB0TGFiZWwgPSAnTGlzcD4gJztcblxuZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlcyhwcmVmaXgpIHtcbiAgY29uc3QgZW52S2V5cyA9IGludGVycHJldChcIihrZXlzICgtZ2V0LWN1cnJlbnQtZW52LSkpXCIpWzBdXG4gICAgICAudmFsdWVcbiAgICAgIC5zbGljZSgxLCAtMSlcbiAgICAgIC5zcGxpdCgnICcpO1xuICByZXR1cm4gZ2V0TWF0Y2hlcyhwcmVmaXgsIF9rZXlUb2tlbnMuY29uY2F0KGVudktleXMpKTtcbn1cblxuZnVuY3Rpb24gZ2V0TWF0Y2hlcyhwcmVmaXgsIHdvcmRzKSB7XG4gIGlmICghL15bLWEtekEtWjAtOV0rJC8udGVzdChwcmVmaXgpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGNvbnN0IHJlZ2V4ID0gUmVnRXhwKCcoXnxcXFcpOicgKyBwcmVmaXgpO1xuICBjb25zdCBtYXRjaGVzID0gW107XG4gIGZvciAobGV0IGluZGV4IGluIHdvcmRzKSB7XG4gICAgY29uc3Qgd29yZCA9IHdvcmRzW2luZGV4XTtcbiAgICBpZiAocmVnZXgudGVzdCh3b3JkKSkge1xuICAgICAgbWF0Y2hlcy5wdXNoKHdvcmQuc2xpY2UoMSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuaW50ZXJwcmV0KGludHJvZHVjdGlvbik7XG5cbmluaXRpYWxpemUoe1xuICBnZXRDYW5kaWRhdGVzOiBnZXRDYW5kaWRhdGVzLFxuICBpbml0aWFsTW9kZWxEYXRhOiAnKGhlbHApIDsgUHJlc3MgZW50ZXIgZm9yIGhlbHAuJyxcbiAgbm9kZUlkOiAndmlld3BvcnQnLFxuICBwcm9tcHRMYWJlbDogcHJvbXB0TGFiZWwsXG4gIHRyYW5zZm9ybTogaW50ZXJwcmV0LFxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiKGRvXFxuICAoZGVmISBoZWxwIChmbiogKCkgKHByZXR0eS1wcmludCAoXFxuICAgIHN0cmluZ1xcbiAgICBcXFwiICBUaGlzIGlzIGEgdGVybWluYWwgZW11bGF0b3IgcnVubmluZyBhIGxpc3AgaW50ZXJwcmV0ZXIuXFxcIlxcbiAgICBcXFwiXFxcXG5cXFwiXFxuICAgIFxcXCJcXFxcbiAgUHJlc3MgPHRhYj4gZm9yIGNvbXBsZXRpb24gb2Yga2V5d29yZHMgYW5kIGRlZmluZWQgaWRlbnRpZmVycy5cXFwiXFxuICAgIFxcXCJcXFxcbiAgUHJlc3MgPEN0cmwtYT4gdG8gbW92ZSB0aGUgY3Vyc29yIHRvIHRoZSBiZWdpbmluZyBvZiB0aGUgbGluZS5cXFwiXFxuICAgIFxcXCJcXFxcbiAgUHJlc3MgPEN0cmwtZT4gdG8gbW92ZSB0aGUgY3Vyc29yIHRvIHRoZSBlbmQgb2YgdGhlIGxpbmUuXFxcIlxcbiAgICBcXFwiXFxcXG4gIFByZXNzIDxDdHJsLWg+IHRvIGRlbGV0ZSB0aGUgY2hhcmFjdGVyIHByZWNlZGluZyB0aGUgY3Vyc29yLlxcXCJcXG4gICAgXFxcIlxcXFxuICBQcmVzcyA8Q3RybC1sPiB0byBjbGVhciB0aGUgY29uc29sZS5cXFwiXFxuICAgIFxcXCJcXFxcbiAgUHJlc3MgPEN0cmwtdT4gdG8gY2xlYXIgdGhlIHBvcnRpb24gb2YgdGhlIGxpbmUgcHJlY2VkaW5nIHRoZSBjdXJzb3IuXFxcIlxcbiAgICBcXFwiXFxcXG5cXFwiXFxuICAgIFxcXCJcXFxcbiAgRXhlY3V0ZSBgKGtleXMgKC1nZXQtY3VycmVudC1lbnYtKSlgIHRvIHNlZSBhIGxpc3Qgb2YgYXZhaWxhYmxlLCBkZWZpbmVkIGlkZW50aWZpZXJzLlxcXCJcXG4gICAgXFxcIlxcXFxuICBFeGVjdXRlIGAoZXhhbXBsZS0xKWAgYW5kIGAoZXhhbXBsZS0yKWAgdG8gc2VlIGludHJvZHVjdG9yeSBleGFtcGxlcy5cXFwiKSkpKVxcblxcbiAgKGRlZiEgZXhhbXBsZS0xIChmbiogKCkgKGRvXFxuICAgIChkZWYhIHRpbWUhIChmbiogKGZvcm0pIChcXG4gICAgICBsZXQqIChzdGFydCAodGltZS1tcykpIChcXG4gICAgICAgIGxldCogKHJlc3VsdCAoZXZhbCBmb3JtKSlcXG4gICAgICAgICAgeyA6cmVzdWx0IHJlc3VsdCwgOnRpbWUgKC0gKHRpbWUtbXMpIHN0YXJ0KSB9KSkpKVxcbiAgICAoZGVmISBmaWIgKGZpeCogKGZuKiAoaykgKFxcbiAgICAgIGZuKiAobikgKFxcbiAgICAgICAgY29uZFxcbiAgICAgICAgICAoPSBuIDApIDFcXG4gICAgICAgICAgKD0gbiAxKSAxXFxuICAgICAgICAgIDplbHNlICgrIChrICgtIG4gMikpIChrICgtIG4gMSkpKSkpKSkpXFxuICAgIChkZWYhIG1lbWZpYiAobWVtZml4KiAoZm4qIChrKSAoXFxuICAgICAgZm4qIChuKSAoXFxuICAgICAgICBjb25kXFxuICAgICAgICAgICg9IG4gMCkgMVxcbiAgICAgICAgICAoPSBuIDEpIDFcXG4gICAgICAgICAgOmVsc2UgKCsgKGsgKC0gbiAyKSkgKGsgKC0gbiAxKSkpKSkpKSlcXG4gICAgKHByZXR0eS1wcmludCAoXFxuICAgICAgc3RyaW5nXFxuICAgICAgICBcXFwiOyBgdGltZSFgLCBhIHNpbXBsZSBwcm9maWxpbmcgZnVuY3Rpb25cXFwiXFxuICAgICAgICBcXFwiXFxcXG4oZGVmISB0aW1lISAoZm4qIChmb3JtKSAoXFxcIlxcbiAgICAgICAgXFxcIlxcXFxuICBsZXQqIChzdGFydCAodGltZS1tcykpIChcXFwiXFxuICAgICAgICBcXFwiXFxcXG4gICAgbGV0KiAocmVzdWx0IChldmFsIGZvcm0pKVxcXCJcXG4gICAgICAgIFxcXCJcXFxcbiAgICAgIHsgOnJlc3VsdCByZXN1bHQsIDp0aW1lICgtICh0aW1lLW1zKSBzdGFydCkgfSkpKSlcXFwiXFxuICAgICAgICBcXFwiXFxcXG5cXFwiXFxuICAgICAgICBcXFwiXFxcXG47IGBmaWJgLCBhIGZ1bmN0aW9uIHRoYXQgcmVjdXJzaXZlbHkgZGV0ZXJtaW5lcyB0aGUgbnRoIEZpYm9uYWNjaSBudW1iZXJcXFwiXFxuICAgICAgICBcXFwiXFxcXG4oZGVmISBmaWIgKGZpeCogKGZuKiAoaykgKFxcXCJcXG4gICAgICAgIFxcXCJcXFxcbiAgZm4qIChuKSAoXFxcIlxcbiAgICAgICAgXFxcIlxcXFxuICAgIGNvbmRcXFwiXFxuICAgICAgICBcXFwiXFxcXG4gICAgICAoPSBuIDApIDFcXFwiXFxuICAgICAgICBcXFwiXFxcXG4gICAgICAoPSBuIDEpIDFcXFwiXFxuICAgICAgICBcXFwiXFxcXG4gICAgICA6ZWxzZSAoKyAoayAoLSBuIDIpKSAoayAoLSBuIDEpKSkpKSkpKVxcXCJcXG4gICAgICAgIFxcXCJcXFxcblxcXCJcXG4gICAgICAgIFxcXCJcXFxcbjsgYG1lbWZpYmAsIGEgbWVtb2l6ZWQgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHRoZSBudGggRmlib25hY2NpIG51bWJlclxcXCJcXG4gICAgICAgIFxcXCJcXFxcbihkZWYhIG1lbWZpYiAobWVtZml4KiAoZm4qIChrKSAoXFxcIlxcbiAgICAgICAgXFxcIlxcXFxuICBmbiogKG4pIChcXFwiXFxuICAgICAgICBcXFwiXFxcXG4gICAgY29uZFxcXCJcXG4gICAgICAgIFxcXCJcXFxcbiAgICAgICg9IG4gMCkgMVxcXCJcXG4gICAgICAgIFxcXCJcXFxcbiAgICAgICg9IG4gMSkgMVxcXCJcXG4gICAgICAgIFxcXCJcXFxcbiAgICAgIDplbHNlICgrIChrICgtIG4gMikpIChrICgtIG4gMSkpKSkpKSkpXFxcIlxcbiAgICAgICAgXFxcIlxcXFxuXFxcIlxcbiAgICAgICAgXFxcIlxcXFxuKHRpbWUhICcobWFwIGZpYiAoLi4gMCAxNSkpKVxcXCJcXG4gICAgICAgIFxcXCJcXFxcbih0aW1lISAnKG1hcCBtZW1maWIgKC4uIDAgMTUpKSlcXFwiKSkpKSlcXG5cXG4gIChkZWYhIGV4YW1wbGUtMiAoZm4qICgpIChkb1xcbiAgICAoZGVmISBfMCAod2l0aC1tZXRhIChcXFxcIGYgeCB4KSAwKSlcXG4gICAgKGRlZiEgXzEgKHdpdGgtbWV0YSAoXFxcXCBmIHggKGYgeCkpIDEpKVxcbiAgICAoZGVmISBfMiAod2l0aC1tZXRhIChcXFxcIGYgeCAoZiAoZiB4KSkpIDIpKVxcbiAgICAoZGVmISB0aW1lczEwIChmbiogKG4pICgqIG4gMTApKSlcXG4gICAgKGRlZiEgc3VjYyAoZm4qIChuKSAoXFxuICAgICAgd2l0aC1tZXRhIFxcbiAgICAgICAgKFxcXFwgZiB4IChmICgobiBmKSB4KSkpXFxuICAgICAgICAoKyAobWV0YSBuKSAxKSkpKVxcbiAgICAoZGVmISBwcmVkIChmbiogKG4pIChcXG4gICAgICB3aXRoLW1ldGFcXG4gICAgICAgIChcXFxcIGYgeCAoKChuIChcXFxcIGcgaCAoaCAoZyBmKSkpKSAoXFxcXCB1IHgpKSAoXFxcXCB1IHUpKSlcXG4gICAgICAgICgtIChtZXRhIG4pIDEpKSkpXFxuICAgIChkZWYhIF80IChzdWNjIChzdWNjIF8yKSkpXFxuICAgIChkZWYhIF8zIChwcmVkIF80KSlcXG4gICAgKHByZXR0eS1wcmludCAoXFxuICAgICAgc3RyaW5nXFxuICAgICAgICBcXFwiOyBDaHVyY2ggbnVtYmVyc1xcXCJcXG4gICAgICAgIFxcXCJcXFxcbihkZWYhIF8wICh3aXRoLW1ldGEgKFxcXFwgZiB4IHgpIDApKVxcXCJcXG4gICAgICAgIFxcXCJcXFxcbihkZWYhIF8xICh3aXRoLW1ldGEgKFxcXFwgZiB4IChmIHgpKSAxKSlcXFwiXFxuICAgICAgICBcXFwiXFxcXG4oZGVmISBfMiAod2l0aC1tZXRhIChcXFxcIGYgeCAoZiAoZiB4KSkpIDIpKVxcXCJcXG4gICAgICAgIFxcXCJcXFxcblxcXCJcXG4gICAgICAgIFxcXCJcXFxcbihtZXRhIF8wKVxcXCJcXG4gICAgICAgIFxcXCJcXFxcbihtZXRhIF8xKVxcXCJcXG4gICAgICAgIFxcXCJcXFxcbihtZXRhIF8yKVxcXCJcXG4gICAgICAgIFxcXCJcXFxcblxcXCJcXG4gICAgICAgIFxcXCJcXFxcbjsgYHRpbWVzMTBgLCBhIHNpbXBsZSBmdW5jdGlvbiB0byB0ZXN0IHRoZSBhYm92ZSBDaHVyY2ggbnVtYmVyc1xcXCJcXG4gICAgICAgIFxcXCJcXFxcbihkZWYhIHRpbWVzMTAgKGZuKiAobikgKCogbiAxMCkpKVxcXCJcXG4gICAgICAgIFxcXCJcXFxcblxcXCJcXG4gICAgICAgIFxcXCJcXFxcbigoXzAgdGltZXMxMCkgMSlcXFwiXFxuICAgICAgICBcXFwiXFxcXG4oKF8xIHRpbWVzMTApIDEpXFxcIlxcbiAgICAgICAgXFxcIlxcXFxuKChfMiB0aW1lczEwKSAxKVxcXCJcXG4gICAgICAgIFxcXCJcXFxcblxcXCJcXG4gICAgICAgIFxcXCJcXFxcbjsgc3VjY2Vzc29yIGZ1bmN0aW9uXFxcIlxcbiAgICAgICAgXFxcIlxcXFxuKGRlZiEgc3VjYyAoZm4qIChuKSAoXFxcIlxcbiAgICAgICAgXFxcIlxcXFxuICB3aXRoLW1ldGEgXFxcIlxcbiAgICAgICAgXFxcIlxcXFxuICAgIChcXFxcIGYgeCAoZiAoKG4gZikgeCkpKVxcXCJcXG4gICAgICAgIFxcXCJcXFxcbiAgICAoKyAobWV0YSBuKSAxKSkpKVxcXCJcXG4gICAgICAgIFxcXCJcXFxcblxcXCJcXG4gICAgICAgIFxcXCJcXFxcbjsgcHJlZGVjZXNzb3IgZnVuY3Rpb25cXFwiXFxuICAgICAgICBcXFwiXFxcXG4oZGVmISBwcmVkIChmbiogKG4pIChcXFwiXFxuICAgICAgICBcXFwiXFxcXG4gIHdpdGgtbWV0YVxcXCJcXG4gICAgICAgIFxcXCJcXFxcbiAgICAoXFxcXCBmIHggKCgobiAoXFxcXCBnIGggKGggKGcgZikpKSkgKFxcXFwgdSB4KSkgKFxcXFwgdSB1KSkpXFxcIlxcbiAgICAgICAgXFxcIlxcXFxuICAgICgtIChtZXRhIG4pIDEpKSkpXFxcIlxcbiAgICAgICAgXFxcIlxcXFxuXFxcIlxcbiAgICAgICAgXFxcIlxcXFxuKGRlZiEgXzQgKHN1Y2MgKHN1Y2MgXzIpKSlcXFwiXFxuICAgICAgICBcXFwiXFxcXG4obWV0YSBfNClcXFwiXFxuICAgICAgICBcXFwiXFxcXG4oKF80IHRpbWVzMTApIDEpXFxcIlxcbiAgICAgICAgXFxcIlxcXFxuXFxcIlxcbiAgICAgICAgXFxcIlxcXFxuKGRlZiEgXzMgKHByZWQgXzQpKVxcXCJcXG4gICAgICAgIFxcXCJcXFxcbihtZXRhIF8zKVxcXCJcXG4gICAgICAgIFxcXCJcXFxcbigoXzMgdGltZXMxMCkgMSlcXFwiKSkpKSlcXG4pXFxuXCIiLCJpbXBvcnQgeyBjb21tZW50U2lnbmFsIH0gZnJvbSAnLi9jb21tZW50U2lnbmFsJztcbmltcG9ydCB7IGV2YWx1YXRlIH0gZnJvbSAnLi9ldmFsdWF0ZSc7XG5cbmNvbnN0IF9wcm9jZXNzID0gZnVuY3Rpb24odHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihlbnZzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHNvdXJjZUNvZGUpIHtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICAgIGNvbnN0IGFkZFJlc3VsdCA9IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICB9O1xuICAgICAgY29uc3QgdmFsdWUgPSBldmFsdWF0ZShlbnZzLCBhZGRSZXN1bHQpKHRyYW5zZm9ybShzb3VyY2VDb2RlKSk7XG4gICAgICBjb25zdCByZXN1bHQgPSAodmFsdWUgPT09IGNvbW1lbnRTaWduYWwpXG4gICAgICAgID8geyBlZmZlY3Q6IHsgdHlwZTogJ2NvbW1lbnQnIH0gfVxuICAgICAgICA6IHsgZWZmZWN0OiBmYWxzZSwgdmFsdWU6IHZhbHVlIH07XG4gICAgICBhZGRSZXN1bHQocmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH07XG4gIH07XG59O1xuXG5leHBvcnQgeyBfcHJvY2VzcyB9O1xuIiwiY29uc3QgY29tbWVudFNpZ25hbCA9IHt9O1xuXG5leHBvcnQgeyBjb21tZW50U2lnbmFsIH07XG4iLCJjb25zdCBhZGRFbnYgPSBmdW5jdGlvbiAoZW52U3RhY2ssIG5ld0Vudikge1xuICBjb25zdCBjb3B5ID0gZW52U3RhY2suc2xpY2UoMCk7XG4gIGNvcHkudW5zaGlmdChuZXdFbnYpO1xuICByZXR1cm4gY29weTtcbn07XG5cbmNvbnN0IGdldExhc3QgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xufTtcblxuY29uc3QgbG9va3VwID0gZnVuY3Rpb24gKGVudlN0YWNrLCBrZXkpIHtcbiAgY29uc3QgY29weSA9IGVudlN0YWNrLnNsaWNlKDApO1xuICB3aGlsZSAoY29weS5sZW5ndGggIT09IDApIHtcbiAgICBjb25zdCBlbnYgPSBjb3B5WzBdO1xuICAgIGNvbnN0IHZhbHVlID0gZW52W2tleV07XG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29weS5zaGlmdCgpO1xuICB9XG4gIHRocm93IFwiVkFMVUUgQ09SUkVTUE9ORElORyBUTyBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgRE9FUyBOT1QgRVhJU1QgSU4gRU5WLVNUQUNLXCI7XG59O1xuXG5jb25zdCBzZXQgPSBmdW5jdGlvbiAoZW52LCBrZXksIHZhbHVlKSB7XG4gIGVudltrZXldID0gdmFsdWU7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmNvbnN0IHNldE1haW5FbnYgPSBmdW5jdGlvbiAoZW52U3RhY2ssIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHNldChnZXRMYXN0KGVudlN0YWNrKSwga2V5LCB2YWx1ZSk7XG59O1xuXG5jb25zdCB1bnNldCA9IGZ1bmN0aW9uIChlbnYsIGtleSkge1xuICBjb25zdCB2YWx1ZSA9IGVudltrZXldO1xuICBkZWxldGUgZW52W2tleV07XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmNvbnN0IHVuc2V0TWFpbkVudiA9IGZ1bmN0aW9uIChlbnZTdGFjaywga2V5KSB7XG4gIHJldHVybiB1bnNldChnZXRMYXN0KGVudlN0YWNrKSwga2V5KTtcbn07XG5cbmV4cG9ydCB7XG4gIGFkZEVudixcbiAgbG9va3VwLFxuICBzZXRNYWluRW52LFxuICB1bnNldE1haW5FbnZcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFcmxCb29sZWFuIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxJZGVudGlmaWVyIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTnVtYmVyIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxTdHJpbmcgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGVybE5pbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXh0cmFjdEpzVmFsdWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGZyb21BcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgaXNKc05hTiB9IGZyb20gJy4vanMtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzSnNOdW1iZXIgfSBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0pzU3RyaW5nIH0gZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyB0b0FycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5cbmNvbnN0ICBfX3NsaWNlICA9IFtdLnNsaWNlO1xuY29uc3QgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbmNvbnN0IGFkZCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihuYnJzLnJlZHVjZShmdW5jdGlvbih4LCBuYnIpIHtcbiAgICByZXR1cm4geCArPSBuYnI7XG4gIH0pKTtcbn07XG5cbmNvbnN0IGNvbnRhaW5zID0gZnVuY3Rpb24oaW5kZXgsIGtleSkge1xuICByZXR1cm4gY3JlYXRlRXJsQm9vbGVhbihrZXkgaW4gaW5kZXgpO1xufTtcblxuY29uc3QgZGlzc29jID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGluZGV4ID0gYXJndW1lbnRzWzBdO1xuICBjb25zdCBrZXlzID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgOiBbXTtcbiAgY29uc3QgbGVuID0ga2V5cy5sZW5ndGg7XG4gIGNvbnN0IGNvcHkgPSB7fTtcbiAgZm9yIChsZXQga2V5IGluIGluZGV4KSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChpbmRleCwga2V5KSkgY29udGludWU7XG4gICAgY29uc3QgdmFsdWUgPSBpbmRleFtrZXldO1xuICAgIGNvcHlba2V5XSA9IHZhbHVlO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgIGRlbGV0ZSBjb3B5W2tleV07XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUVybEluZGV4KGNvcHkpO1xufTtcblxuY29uc3QgZGl2aWRlID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKG5icnMucmVkdWNlKGZ1bmN0aW9uKHgsIG5icikge1xuICAgIHJldHVybiB4IC89IG5icjtcbiAgfSkpO1xufTtcblxuY29uc3QgZXhwb25lbnRpYXRlID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKG5icnMucmVkdWNlKGZ1bmN0aW9uKHgsIG5icikge1xuICAgIHJldHVybiBNYXRoLnBvdyh4LCBuYnIpO1xuICB9KSk7XG59O1xuXG5jb25zdCBnZXQgPSBmdW5jdGlvbihqc0luZGV4LCBqc0tleSkge1xuICByZXR1cm4ganNJbmRleFtqc0tleV07XG59O1xuXG5jb25zdCBnZXRFbnZpcm9ubWVudCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICBjb25zdCBlbnZpcm9ubWVudCA9IGNvbmZpZy5lbnZpcm9ubWVudDtcbiAgc2V0Q29yZUZuc09uSnNWYWx1ZXNCYW5nKGVudmlyb25tZW50LCBmdW5jdGlvbnNPbkpzVmFsdWVzKTtcbiAgcmV0dXJuIGVudmlyb25tZW50O1xufTtcblxuY29uc3QgZ3JlYXRlclRoYW5PckVxdWFsID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsQm9vbGVhbihuYnJzWzBdID49IG5icnNbMV0pO1xufTtcblxuY29uc3QgZ3JlYXRlclRoYW4gPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKG5icnNbMF0gPiBuYnJzWzFdKTtcbn07XG5cbmNvbnN0IGluZGV4ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGFyZ3MgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICBjb25zdCBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgY29uc3QgX2luZGV4ID0ge307XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBrID0gYXJnc1tpXTtcbiAgICBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgIF9pbmRleFtrXSA9IGFyZ3NbaSArIDFdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY3JlYXRlRXJsSW5kZXgoX2luZGV4KTtcbn07XG5cbmNvbnN0IGtleXMgPSBmdW5jdGlvbihpbmRleCkge1xuICBjb25zdCBfa2V5cyA9IFtdO1xuICBmb3IgKGxldCBrZXkgaW4gaW5kZXgpIHtcbiAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGluZGV4LCBrZXkpKSBjb250aW51ZTtcbiAgICBjb25zdCB2YWx1ZSA9IGluZGV4W2tleV07XG4gICAgY29uc3QganNOYnIgPSBwYXJzZUZsb2F0KGtleSwgMTApO1xuICAgIGNvbnN0IF9rZXkgPSBpc0pzTmFOKGpzTmJyKVxuICAgICAgICA/IChrZXlbMF0gPT09ICc6JyA/IGNyZWF0ZUVybElkZW50aWZpZXIgOiBjcmVhdGVFcmxTdHJpbmcpKGtleSlcbiAgICAgICAgOiBjcmVhdGVFcmxOdW1iZXIoanNOYnIpO1xuICAgIF9rZXlzLnB1c2goX2tleSk7XG4gIH1cbiAgcmV0dXJuIGZyb21BcnJheShfa2V5cyk7XG59O1xuXG5jb25zdCBsZW5ndGhTdHJpbmcgPSBmdW5jdGlvbihqc1ZhbCkge1xuICBpZiAoIWlzSnNTdHJpbmcoanNWYWwpKSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKGpzVmFsLmxlbmd0aCAtIDIpO1xufTtcblxuY29uc3QgbGVzc1RoYW4gPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKG5icnNbMF0gPCBuYnJzWzFdKTtcbn07XG5cbmNvbnN0IGxlc3NUaGFuT3JFcXVhbCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4obmJyc1swXSA8PSBuYnJzWzFdKTtcbn07XG5cbmNvbnN0IGxpZnQgPSBmdW5jdGlvbihmbk9uSnNWYWx1ZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlTGlzdCkge1xuICAgIHJldHVybiBmbk9uSnNWYWx1ZXMuYXBwbHkobnVsbCwgKHRvQXJyYXkoZXJsVmFsdWVMaXN0KSkubWFwKGV4dHJhY3RKc1ZhbHVlKSk7XG4gIH07XG59O1xuXG5jb25zdCBtYXggPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIoTWF0aC5tYXguYXBwbHkoTWF0aCwgbmJycykpO1xufTtcblxuY29uc3QgbWluID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKE1hdGgubWluLmFwcGx5KE1hdGgsIG5icnMpKTtcbn07XG5cbmNvbnN0IG1vZCA9IGZ1bmN0aW9uKG5icjAsIG5icjEpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihuYnIwICUgbmJyMSk7XG59O1xuXG5jb25zdCBtdWx0aXBseSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihuYnJzLnJlZHVjZShmdW5jdGlvbih4LCBuYnIpIHtcbiAgICByZXR1cm4geCAqPSBuYnI7XG4gIH0pKTtcbn07XG5cbmNvbnN0IG5lZ2F0ZSA9IGZ1bmN0aW9uKG5icikge1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKC0xICogbmJyKTtcbn07XG5cbmNvbnN0IHBhcnNlTnVtYmVyID0gZnVuY3Rpb24oanNWYWwpIHtcbiAgaWYgKGlzSnNOdW1iZXIoanNWYWwpKSB7XG4gICAgcmV0dXJuIGpzVmFsO1xuICB9XG4gIGlmICghaXNKc1N0cmluZyhqc1ZhbCkpIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG4gIGNvbnN0IGpzTmJyID0gcGFyc2VGbG9hdChzdHJpcFF1b3Rlcyhqc1ZhbCksIDEwKTtcbiAgaWYgKGlzSnNOYU4oanNOYnIpKSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKGpzTmJyKTtcbiAgfVxufTtcblxuY29uc3Qgc2V0Q29yZUZuc09uSnNWYWx1ZXNCYW5nID0gZnVuY3Rpb24oZW52LCBmbnMpIHtcbiAgY29uc3QgX3Jlc3VsdHMgPSBbXTtcbiAgZm9yIChsZXQgZm5OYW1lIGluIGZucykge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoZm5zLCBmbk5hbWUpKSBjb250aW51ZTtcbiAgICBjb25zdCBmbiA9IGZuc1tmbk5hbWVdO1xuICAgIGVudltmbk5hbWVdID0gY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbihsaWZ0KGZuKSk7XG4gICAgX3Jlc3VsdHMucHVzaChlbnZbZm5OYW1lXSk7XG4gIH1cbiAgcmV0dXJuIF9yZXN1bHRzO1xufTtcblxuY29uc3Qgc3VidHJhY3QgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIobmJycy5yZWR1Y2UoZnVuY3Rpb24oeCwgbmJyKSB7XG4gICAgcmV0dXJuIHggLT0gbmJyO1xuICB9KSk7XG59O1xuXG5jb25zdCB2YWxzID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgY29uc3QgdmFsdWVzID0gW107XG4gIGZvciAobGV0IGtleSBpbiBpbmRleCkge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoaW5kZXgsIGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IGluZGV4W2tleV07XG4gICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICB9XG4gIHJldHVybiBmcm9tQXJyYXkodmFsdWVzKTtcbn07XG5cbmNvbnN0IGZ1bmN0aW9uc09uSnNWYWx1ZXMgPSB7XG4gICcrJzogYWRkLFxuICAnY29udGFpbnM/JzogY29udGFpbnMsXG4gICdkaXNzb2MnOiBkaXNzb2MsXG4gICcvJzogZGl2aWRlLFxuICAnKionOiBleHBvbmVudGlhdGUsXG4gICdnZXQnOiBnZXQsXG4gICc+JzogZ3JlYXRlclRoYW4sXG4gICc+PSc6IGdyZWF0ZXJUaGFuT3JFcXVhbCxcbiAgJ2luZGV4JzogaW5kZXgsXG4gICdrZXlzJzoga2V5cyxcbiAgJ2xlbmd0aC1zdHJpbmcnOiBsZW5ndGhTdHJpbmcsXG4gICdtYXgnOiBtYXgsXG4gICdtaW4nOiBtaW4sXG4gICc8JzogbGVzc1RoYW4sXG4gICc8PSc6IGxlc3NUaGFuT3JFcXVhbCxcbiAgJyUnOiBtb2QsXG4gICcqJzogbXVsdGlwbHksXG4gICduZWdhdGUnOiBuZWdhdGUsXG4gICdwYXJzZS1udW1iZXInOiBwYXJzZU51bWJlcixcbiAgJy0nOiBzdWJ0cmFjdCxcbiAgJ3ZhbHMnOiB2YWxzXG59O1xuXG5leHBvcnQgeyBnZXRFbnZpcm9ubWVudCB9O1xuIiwiaW1wb3J0IHsgYXJlRXF1YWwgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGNhciB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgY2RyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBjaXJjdW1wZW5kUXVvdGVzIH0gZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY29uY2F0IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBjcmVhdGVFcmxBdG9tIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxCb29sZWFuIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTGlzdCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTnVtYmVyIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxTdHJpbmcgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN5bWJvbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZHJvcCB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgZXJsRmFsc2UgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGVybElnbm9yZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBlcmxUcnVlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBleHRyYWN0SnNWYWx1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZnJvbUFycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBpbnRlcnByZXQgfSBmcm9tICcuL2ludGVycHJldCc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBpc0VybEF0b20gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsQ29yZVB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxCb29sZWFuIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybEZhbHNlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybEluZGV4IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybExpc3QgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTWFjcm8gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybE51bWJlciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxTdHJpbmcgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsU3ltYm9sIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybFRydWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsVXNlclB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgbGFzdCB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgbmV4dCB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgcmVjdXJzZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyByZXZlcnNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tICcuL3NlcmlhbGl6ZSc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyB0b0FycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyB0b1BhcnRpYWxBcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuXG5jb25zdCBfX3NsaWNlICAgPSBbXS5zbGljZTtcbmNvbnN0IF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5jb25zdCBhcHBlbmQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGVybEFyZ3NBcnJheSA9IHRvQXJyYXkoZXJsQXJncyk7XG4gIGNvbnN0IGVybExpc3QgPSBlcmxBcmdzQXJyYXlbMF07XG4gIGNvbnN0IGVybFZhbHVlcyA9IDIgPD0gZXJsQXJnc0FycmF5Lmxlbmd0aCA/IF9fc2xpY2UuY2FsbChlcmxBcmdzQXJyYXksIDEpIDogW107XG4gIHJldHVybiBjb25jYXQoZXJsTGlzdCwgZnJvbUFycmF5KGVybFZhbHVlcykpO1xufTtcblxuY29uc3QgX2FyZUVxdWFsID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgY29uc3QgZXJsVmFsdWUwID0gcGFydGlhbEFycmF5WzBdO1xuICBjb25zdCBlcmxWYWx1ZTEgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIGNvbnN0IF9fYXJlRXF1YWwgPSBmdW5jdGlvbihlcmxWYWx1ZTAsIGVybFZhbHVlMSkge1xuICAgIGlmIChpc0VybExpc3QoZXJsVmFsdWUwKSAmJiBpc0VybExpc3QoZXJsVmFsdWUxKSkge1xuICAgICAgcmV0dXJuIGFyZUVxdWFsKGVybFZhbHVlMCwgZXJsVmFsdWUxLCBfX2FyZUVxdWFsKTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsSW5kZXgoZXJsVmFsdWUwKSAmJiBpc0VybEluZGV4KGVybFZhbHVlMSkpIHtcbiAgICAgIGNvbnN0IGpzSW5kZXgwID0gZXJsVmFsdWUwLmpzVmFsdWU7XG4gICAgICBjb25zdCBqc0luZGV4MSA9IGVybFZhbHVlMS5qc1ZhbHVlO1xuICAgICAgcmV0dXJuIChfX2FyZUVxdWFsKGtleXMoanNJbmRleDApLCBrZXlzKGpzSW5kZXgxKSkpXG4gICAgICAgICYmIChfX2FyZUVxdWFsKHZhbHMoanNJbmRleDApLCB2YWxzKGpzSW5kZXgxKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXJsVmFsdWUwLmpzVmFsdWUgPT09IGVybFZhbHVlMS5qc1ZhbHVlO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4oX19hcmVFcXVhbChlcmxWYWx1ZTAsIGVybFZhbHVlMSkpO1xufTtcblxuY29uc3QgYXNzb2MgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGxldCBhcmdzO1xuICBjb25zdCBqc0luZGV4ID0gZXh0cmFjdEpzVmFsdWUoY2FyKGVybEFyZ3MpKTtcbiAgYXJncyA9IGNkcihlcmxBcmdzKTtcbiAgY29uc3QgY29weSA9IHt9O1xuICBmb3IgKGxldCBrZXkgaW4ganNJbmRleCkge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoanNJbmRleCwga2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0ganNJbmRleFtrZXldO1xuICAgIGNvcHlba2V5XSA9IHZhbHVlO1xuICB9XG4gIHdoaWxlICghaXNFbXB0eShhcmdzKSkge1xuICAgIGNvbnN0IGsgPSBjYXIoYXJncyk7XG4gICAgY29uc3QgdiA9IG5leHQoYXJncyk7XG4gICAgYXJncyA9IHJlY3Vyc2UocmVjdXJzZShhcmdzKSk7XG4gICAgY29weVtleHRyYWN0SnNWYWx1ZShrKV0gPSB2O1xuICB9XG4gIHJldHVybiBjcmVhdGVFcmxJbmRleChjb3B5KTtcbn07XG5cbmNvbnN0IGF0b20gPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBjcmVhdGVFcmxBdG9tKGNhcihlcmxBcmdzKSk7XG59O1xuXG5jb25zdCBfY2FyID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBhcmcgPSBjYXIoZXJsQXJncyk7XG4gIGlmIChpc0VybExpc3QoYXJnKSkge1xuICAgIHJldHVybiBjYXIoYXJnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG5jb25zdCBfY2RyID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBhcmcgPSBjYXIoZXJsQXJncyk7XG4gIGlmIChpc0VybExpc3QoYXJnKSkge1xuICAgIHJldHVybiBjZHIoYXJnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG5jb25zdCBfY29uY2F0ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBlcmxMaXN0cyA9IHRvQXJyYXkoZXJsQXJncyk7XG4gIHJldHVybiBjb25jYXQuYXBwbHkobnVsbCwgZXJsTGlzdHMpO1xufTtcblxuY29uc3QgY29ucyA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybExpc3QoY2FyKGVybEFyZ3MpLCBuZXh0KGVybEFyZ3MpKTtcbn07XG5cbmNvbnN0IGNvdW50ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBlcmxMaXN0ID0gY2FyKGVybEFyZ3MpO1xuICBpZiAoIWlzRXJsTGlzdChlcmxMaXN0KSkge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbiAgY29uc3QgX3JlZHVjZSA9IGZ1bmN0aW9uKHN1bSwgdmFsdWUpIHtcbiAgICByZXR1cm4gc3VtICsgMTtcbiAgfTtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihyZWR1Y2UoMCwgX3JlZHVjZSwgY2FyKGVybEFyZ3MpKSk7XG59O1xuXG5jb25zdCBjcmVhdGVQcmVkaWNhdGUgPSBmdW5jdGlvbihwcmVkKSB7XG4gIHJldHVybiBmdW5jdGlvbihqc0xpc3QpIHtcbiAgICBjb25zdCBlcmxWYWx1ZSA9IGpzTGlzdC52YWx1ZTtcbiAgICByZXR1cm4gY3JlYXRlRXJsQm9vbGVhbihwcmVkKGVybFZhbHVlKSk7XG4gIH07XG59O1xuXG5jb25zdCBkZXJlZiA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIChjYXIoZXJsQXJncykpLmVybFZhbHVlO1xufTtcblxuY29uc3QgX2Ryb3AgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEFyZ3MpO1xuICBjb25zdCBlcmxOdW1iZXIgPSBwYXJ0aWFsQXJyYXlbMF07XG4gIGNvbnN0IGVybExpc3QgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIHJldHVybiBkcm9wKGV4dHJhY3RKc1ZhbHVlKGVybE51bWJlciksIGVybExpc3QpO1xufTtcblxuY29uc3QgZmlyc3QgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBjYXIoY2FyKGVybEFyZ3MpKTtcbn07XG5cbmNvbnN0IGdldEVudmlyb25tZW50ID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gIGNvbnN0IGVudmlyb25tZW50ID0gY29uZmlnLmVudmlyb25tZW50O1xuICBzZXRDb3JlRm5zT25FcmxWYWx1ZXMoZW52aXJvbm1lbnQsIGZ1bmN0aW9uc09uRXJsVmFsdWVzKTtcbiAgcmV0dXJuIGVudmlyb25tZW50O1xufTtcblxuY29uc3QgaGFzUHJvY2VzcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnO1xufVxuXG5jb25zdCBoYXNQcm9jZXNzV2VicGFja1NoaW0gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuKHByb2Nlc3MudGl0bGUgPT09ICdicm93c2VyJyAmJiBwcm9jZXNzLmJyb3dzZXIpO1xufVxuXG5jb25zdCBpZ25vcmUgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBlcmxJZ25vcmU7XG59O1xuXG5jb25zdCBpZ25vcmVJZlRydWUgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEFyZ3MpO1xuICBjb25zdCBlcmxCb29sID0gcGFydGlhbEFycmF5WzBdO1xuICBjb25zdCBlcmxWYWx1ZSA9IHBhcnRpYWxBcnJheVsxXTtcbiAgaWYgKGV4dHJhY3RKc1ZhbHVlKGVybEJvb2wpKSB7XG4gICAgcmV0dXJuIGVybElnbm9yZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsVmFsdWU7XG4gIH1cbn07XG5cbmNvbnN0IGlnbm9yZVVubGVzc1RydWUgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEFyZ3MpO1xuICBjb25zdCBlcmxCb29sID0gcGFydGlhbEFycmF5WzBdO1xuICBjb25zdCBlcmxWYWx1ZSA9IHBhcnRpYWxBcnJheVsxXTtcbiAgaWYgKGV4dHJhY3RKc1ZhbHVlKGVybEJvb2wpKSB7XG4gICAgcmV0dXJuIGVybFZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxJZ25vcmU7XG4gIH1cbn07XG5cbmNvbnN0IF9pbnRlcnByZXQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBpbnRlcnByZXQoc3RyaXBRdW90ZXMoZXh0cmFjdEpzVmFsdWUoY2FyKGVybEFyZ3MpKSkpO1xufTtcblxuY29uc3QgX2lzRW1wdHkgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGlmIChpc0VtcHR5KGVybEFyZ3MpKSB7XG4gICAgcmV0dXJuIGVybEZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGlmIChpc0VtcHR5KGNhcihlcmxBcmdzKSkpIHtcbiAgICAgIHJldHVybiBlcmxUcnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXJsRmFsc2U7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBpc0Z1bmN0aW9uID0gZnVuY3Rpb24oanNMaXN0KSB7XG4gIGNvbnN0IGVybFZhbHVlID0ganNMaXN0LnZhbHVlO1xuICByZXR1cm4gY3JlYXRlRXJsQm9vbGVhbihpc0VybENvcmVQdXJlRnVuY3Rpb24oZXJsVmFsdWUpXG4gICAgfHwgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uKGVybFZhbHVlKSk7XG59O1xuXG5jb25zdCBpc05vZGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGhhc1Byb2Nlc3MoKSAmJiAhaGFzUHJvY2Vzc1dlYnBhY2tTaGltKCk7XG59XG5cbmNvbnN0IF9sYXN0ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBhcmcgPSBjYXIoZXJsQXJncyk7XG4gIGlmIChpc0VybExpc3QoYXJnKSkge1xuICAgIHJldHVybiBsYXN0KGFyZyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxuY29uc3QgbGlzdCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGVybEFyZ3M7XG59O1xuXG5jb25zdCBtZXRhID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBlcmxNZXRhID0gKGNhcihlcmxBcmdzKSkubWV0YTtcbiAgaWYgKGVybE1ldGEgIT0gbnVsbCkge1xuICAgIHJldHVybiBlcmxNZXRhO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbmNvbnN0IF9ub3QgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGVybFZhbCA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKGlzRXJsTmlsKGVybFZhbCkgfHwgaXNFcmxGYWxzZShlcmxWYWwpKSB7XG4gICAgcmV0dXJuIGVybFRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybEZhbHNlO1xuICB9XG59O1xuXG5jb25zdCBudGggPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEFyZ3MpO1xuICBjb25zdCBlcmxOdW1iZXIgPSBwYXJ0aWFsQXJyYXlbMF07XG4gIGxldCBlcmxMaXN0ID0gcGFydGlhbEFycmF5WzFdO1xuICBjb25zdCB0YXJnZXQgPSBleHRyYWN0SnNWYWx1ZShlcmxOdW1iZXIpO1xuICBpZiAodGFyZ2V0ID49IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhcmdldDsgaSsrKSB7XG4gICAgICBlcmxMaXN0ID0gY2RyKGVybExpc3QpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA+IHRhcmdldDsgaS0tKSB7XG4gICAgICBlcmxMaXN0ID0gY2RyKGVybExpc3QpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2FyKGVybExpc3QpO1xufTtcblxuY29uc3QgcHJlcGVuZCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgZXJsQXJnc0FycmF5ID0gdG9BcnJheShlcmxBcmdzKTtcbiAgY29uc3QgZXJsTGlzdCA9IGVybEFyZ3NBcnJheVswXTtcbiAgY29uc3QgZXJsVmFsdWVzID0gMiA8PSBlcmxBcmdzQXJyYXkubGVuZ3RoID8gX19zbGljZS5jYWxsKGVybEFyZ3NBcnJheSwgMSkgOiBbXTtcbiAgY29uc3QgX3JlZHVjZSA9IGZ1bmN0aW9uKGxpc3QsIHZhbCkge1xuICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KHZhbCwgbGlzdCk7XG4gIH07XG4gIHJldHVybiBlcmxWYWx1ZXMucmVkdWNlKF9yZWR1Y2UsIGVybExpc3QpO1xufTtcblxuY29uc3QgX3ByU3RyID0gZnVuY3Rpb24oZXJsQXJncywgcHJpbnRSZWFkYWJseSkge1xuICByZXR1cm4gKCh0b0FycmF5KGVybEFyZ3MpKS5tYXAoZnVuY3Rpb24oZXJsQXJnKSB7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZShlcmxBcmcsIHByaW50UmVhZGFibHkpO1xuICB9KSkuam9pbignJyk7XG59O1xuXG5jb25zdCBwcmV0dHlTdHJpbmcgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBjcmVhdGVFcmxTdHJpbmcoY2lyY3VtcGVuZFF1b3RlcyhfcHJTdHIoZXJsQXJncywgdHJ1ZSkpKTtcbn07XG5cbmNvbnN0IHJlYWQgPSBmdW5jdGlvbihqc0xpc3QpIHtcbiAgaWYgKGlzTm9kZSgpKSB7XG4gICAgY29uc3QgX3JlYWQgPSBmdW5jdGlvbihfanNMaXN0KSB7XG4gICAgICBjb25zdCBqc0ZpbGVOYW1lID0gc3RyaXBRdW90ZXMoZXh0cmFjdEpzVmFsdWUoY2FyKF9qc0xpc3QpKSk7XG4gICAgICAvL3JldHVybiByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYyhqc0ZpbGVOYW1lKS50b1N0cmluZygpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gY3JlYXRlRXJsU3RyaW5nKF9yZWFkKGpzTGlzdCkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbmNvbnN0IHJlc2V0ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgY29uc3QgYXRvbSA9IHBhcnRpYWxBcnJheVswXTtcbiAgY29uc3QgdmFsdWUgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIGF0b20uZXJsVmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIGF0b207XG59O1xuXG5jb25zdCByZXN0ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBhcmcgPSBjYXIoZXJsQXJncyk7XG4gIGlmIChpc0VybExpc3QoYXJnKSkge1xuICAgIHJldHVybiBjZHIoYXJnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG5jb25zdCBfcmV2ZXJzZSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgYXJnID0gY2FyKGVybEFyZ3MpO1xuICBpZiAoaXNFcmxMaXN0KGFyZykpIHtcbiAgICByZXR1cm4gcmV2ZXJzZShhcmcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbmNvbnN0IHNldCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMywgZXJsQXJncyk7XG4gIGNvbnN0IGluZGV4ID0gcGFydGlhbEFycmF5WzBdO1xuICBjb25zdCBrZXkgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIGNvbnN0IHZhbCA9IHBhcnRpYWxBcnJheVsyXTtcbiAgKGV4dHJhY3RKc1ZhbHVlKGluZGV4KSlbZXh0cmFjdEpzVmFsdWUoa2V5KV0gPSB2YWw7XG4gIHJldHVybiBpbmRleDtcbn07XG5cbmNvbnN0IHNldENvcmVGbnNPbkVybFZhbHVlcyA9IGZ1bmN0aW9uKGVudiwgZm5zKSB7XG4gIGNvbnN0IF9yZXN1bHRzID0gW107XG4gIGZvciAobGV0IGZuTmFtZSBpbiBmbnMpIHtcbiAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGZucywgZm5OYW1lKSkgY29udGludWU7XG4gICAgY29uc3QgZm4gPSBmbnNbZm5OYW1lXTtcbiAgICBfcmVzdWx0cy5wdXNoKGVudltmbk5hbWVdID0gY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbihmbikpO1xuICB9XG4gIHJldHVybiBfcmVzdWx0cztcbn07XG5cbmNvbnN0IHNsdXJwID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBpZiAoaXNOb2RlKCkpIHtcbiAgICBjb25zdCBqc0ZpbGVOYW1lID0gc3RyaXBRdW90ZXMoZXh0cmFjdEpzVmFsdWUoY2FyKGVybEFyZ3MpKSk7XG4gICAgLy9jb25zdCBfZnNfID0gcmVxdWlyZSgnZnMnKTtcbiAgICAvL3JldHVybiBjcmVhdGVFcmxTdHJpbmcoY2lyY3VtcGVuZFF1b3RlcyhfZnNfLnJlYWRGaWxlU3luYyhqc0ZpbGVOYW1lKS50b1N0cmluZygpKSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxuY29uc3Qgc3RyaW5nID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY3JlYXRlRXJsU3RyaW5nKGNpcmN1bXBlbmRRdW90ZXMoX3ByU3RyKGVybEFyZ3MsIGZhbHNlKSkpO1xufTtcblxuY29uc3Qgc3RyaXBRdW90ZXMgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4ganNTdHJpbmcuc2xpY2UoMSwgLTEpO1xufTtcblxuY29uc3Qgc3ltYm9sID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBlcmxWYWx1ZSA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKGlzRXJsU3RyaW5nKGVybFZhbHVlKSkge1xuICAgIGNvbnN0IGpzU3RyID0gZXh0cmFjdEpzVmFsdWUoZXJsVmFsdWUpO1xuICAgIHJldHVybiBjcmVhdGVFcmxTeW1ib2woanNTdHIuc2xpY2UoMSwgLTEpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG5jb25zdCBfdGFrZSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIGNvbnN0IGVybE51bWJlciA9IHBhcnRpYWxBcnJheVswXTtcbiAgY29uc3QgZXJsTGlzdCA9IHBhcnRpYWxBcnJheVsxXTtcbiAgcmV0dXJuIHRha2UoZXh0cmFjdEpzVmFsdWUoZXJsTnVtYmVyKSwgZXJsTGlzdCk7XG59O1xuXG5jb25zdCB0eXBlT2YgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGVybFZhbHVlID0gY2FyKGVybEFyZ3MpO1xuICByZXR1cm4gY3JlYXRlRXJsU3RyaW5nKGNpcmN1bXBlbmRRdW90ZXMoZXJsVmFsdWUudHlwZSkpO1xufTtcblxuY29uc3QgX3Rocm93ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB0aHJvdyBjYXIoZXJsQXJncyk7XG59O1xuXG5jb25zdCB0aW1lTXMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG59O1xuXG5jb25zdCB3aXRoTWV0YSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIGNvbnN0IGVybFZhbCA9IHBhcnRpYWxBcnJheVswXTtcbiAgY29uc3QgZXJsTWV0YSA9IHBhcnRpYWxBcnJheVsxXTtcbiAgaWYgKGlzRXJsQXRvbShlcmxWYWwpKSB7XG4gICAgY29uc3QgZXJsVmFsdWUgPSBlcmxWYWwuZXJsVmFsdWU7XG4gICAgY29uc3QgdHlwZSA9IGVybFZhbC50eXBlO1xuICAgIHJldHVybiB7XG4gICAgICBlcmxWYWx1ZTogZXJsVmFsdWUsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgbWV0YTogZXJsTWV0YVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgY29uc3QganNWYWx1ZSA9IGVybFZhbC5qc1ZhbHVlO1xuICAgIGNvbnN0IHR5cGUgPSBlcmxWYWwudHlwZTtcbiAgICByZXR1cm4ge1xuICAgICAganNWYWx1ZToganNWYWx1ZSxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBtZXRhOiBlcmxNZXRhXG4gICAgfTtcbiAgfVxufTtcblxuY29uc3Qgd3JpdGUgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBjcmVhdGVFcmxTdHJpbmcoc2VyaWFsaXplKGNhcihlcmxBcmdzKSkpO1xufTtcblxuY29uc3QgcHJlZGljYXRlcyA9IFtcbiAgaXNFcmxBdG9tLFxuICBpc0VybEJvb2xlYW4sXG4gIGlzRXJsQ29yZVB1cmVGdW5jdGlvbixcbiAgaXNFcmxGYWxzZSxcbiAgaXNFcmxMaXN0LFxuICBpc0VybE1hY3JvLFxuICBpc0VybE5pbCxcbiAgaXNFcmxOdW1iZXIsXG4gIGlzRXJsU3ltYm9sLFxuICBpc0VybFN0cmluZyxcbiAgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uLFxuICBpc0VybFRydWVcbl0ubWFwKGNyZWF0ZVByZWRpY2F0ZSk7XG5cbmNvbnN0IGlzQXRvbSAgICA9IHByZWRpY2F0ZXNbMF07XG5jb25zdCBpc0Jvb2xlYW4gPSBwcmVkaWNhdGVzWzFdO1xuY29uc3QgaXNDb3JlRm4gID0gcHJlZGljYXRlc1syXTtcbmNvbnN0IGlzRmFsc2UgICA9IHByZWRpY2F0ZXNbM107XG5jb25zdCBpc0xpc3QgICAgPSBwcmVkaWNhdGVzWzRdO1xuY29uc3QgaXNNYWNybyAgID0gcHJlZGljYXRlc1s1XTtcbmNvbnN0IGlzTmlsICAgICA9IHByZWRpY2F0ZXNbNl07XG5jb25zdCBpc051bWJlciAgPSBwcmVkaWNhdGVzWzddO1xuY29uc3QgaXNTeW1ib2wgID0gcHJlZGljYXRlc1s4XTtcbmNvbnN0IGlzU3RyaW5nICA9IHByZWRpY2F0ZXNbOV07XG5jb25zdCBpc1VzZXJGbiAgPSBwcmVkaWNhdGVzWzEwXTtcbmNvbnN0IGlzVHJ1ZSAgICA9IHByZWRpY2F0ZXNbMTFdO1xuXG5jb25zdCBmdW5jdGlvbnNPbkVybFZhbHVlcyA9IHtcbiAgJz0nOiBfYXJlRXF1YWwsXG4gICdhcHBlbmQnOiBhcHBlbmQsXG4gICdhc3NvYyc6IGFzc29jLFxuICAnYXRvbSc6IGF0b20sXG4gICdhdG9tPyc6IGlzQXRvbSxcbiAgJ2Jvb2xlYW4/JzogaXNCb29sZWFuLFxuICAnY2FyJzogX2NhcixcbiAgJ2Nkcic6IF9jZHIsXG4gICdjb25zJzogY29ucyxcbiAgJ2NvbmNhdCc6IF9jb25jYXQsXG4gICdjb3JlLWZuPyc6IGlzQ29yZUZuLFxuICAnY291bnQnOiBjb3VudCxcbiAgJ2RlcmVmJzogZGVyZWYsXG4gICdkcm9wJzogX2Ryb3AsXG4gICdlbXB0eT8nOiBfaXNFbXB0eSxcbiAgJ2ZpcnN0JzogX2NhcixcbiAgJ2ZhbHNlPyc6IGlzRmFsc2UsXG4gICdmdW5jdGlvbj8nOiBpc0Z1bmN0aW9uLFxuICAnaWdub3JlISc6IGlnbm9yZSxcbiAgJ2lnbm9yZUlmVHJ1ZSc6IGlnbm9yZUlmVHJ1ZSxcbiAgJ2lnbm9yZVVubGVzc1RydWUnOiBpZ25vcmVVbmxlc3NUcnVlLFxuICAnbGFzdCc6IF9sYXN0LFxuICAnbGlzdCc6IGxpc3QsXG4gICdsaXN0Pyc6IGlzTGlzdCxcbiAgJ21hY3JvPyc6IGlzTWFjcm8sXG4gICdtZXRhJzogbWV0YSxcbiAgJ25pbD8nOiBpc05pbCxcbiAgJ25vdCc6IF9ub3QsXG4gICdudGgnOiBudGgsXG4gICdudW1iZXI/JzogaXNOdW1iZXIsXG4gICdwYXJzZSc6IF9pbnRlcnByZXQsXG4gICdwcmVwZW5kJzogcHJlcGVuZCxcbiAgJ3ByZXR0eS1zdHJpbmcnOiBwcmV0dHlTdHJpbmcsXG4gICdyZXN0JzogX2NkcixcbiAgJ3JldmVyc2UnOiBfcmV2ZXJzZSxcbiAgJ3N0cmluZyc6IHN0cmluZyxcbiAgJ3N0cmluZz8nOiBpc1N0cmluZyxcbiAgJ3N5bWJvbCc6IHN5bWJvbCxcbiAgJ3N5bWJvbD8nOiBpc1N5bWJvbCxcbiAgJ3Rha2UnOiBfdGFrZSxcbiAgJ3Rocm93JzogX3Rocm93LFxuICAndHJ1ZT8nOiBpc1RydWUsXG4gICd0eXBlb2YnOiB0eXBlT2YsXG4gICd1c2VyLWZuPyc6IGlzVXNlckZuLFxuICAncmVhZCc6IHJlYWQsXG4gICdyZXNldCEnOiByZXNldCxcbiAgJ3NldCEnOiBzZXQsXG4gICdzbHVycCc6IHNsdXJwLFxuICAndGltZS1tcyc6IHRpbWVNcyxcbiAgJ3dpdGgtbWV0YSc6IHdpdGhNZXRhLFxuICAnd3JpdGUnOiB3cml0ZVxufTtcblxuZXhwb3J0IHsgZ2V0RW52aXJvbm1lbnQgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUVybENvcmVFZmZlY3RmdWxGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTGlzdCB9ICAgICAgICAgICAgICAgICAgZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxTdHJpbmcgfSAgICAgICAgICAgICAgICBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IHNlcmlhbGl6ZSB9ICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vc2VyaWFsaXplJztcbmltcG9ydCB7IHRvQXJyYXkgfSAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vbGlua2VkLWxpc3QnO1xuXG5jb25zdCBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuY29uc3QgZ2V0RW52aXJvbm1lbnQgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgY29uc3QgZGlzcGxheSA9IGNvbmZpZy5kaXNwbGF5O1xuICBjb25zdCBlbnZpcm9ubWVudCA9IGNvbmZpZy5lbnZpcm9ubWVudDtcbiAgc2V0Q29yZUVmZmVjdGZ1bEZuc09uRXJsVmFsdWVzKGRpc3BsYXkpKGVudmlyb25tZW50LCBkaXNwbGF5RWZmZWN0c09uRXJsVmFsdWVzKTtcbiAgcmV0dXJuIGVudmlyb25tZW50O1xufTtcblxuY29uc3QgaGFzUHJvY2VzcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnO1xufVxuXG5jb25zdCBoYXNQcm9jZXNzV2VicGFja1NoaW0gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuKHByb2Nlc3MudGl0bGUgPT09ICdicm93c2VyJyAmJiBwcm9jZXNzLmJyb3dzZXIpO1xufVxuXG5jb25zdCBpc05vZGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGhhc1Byb2Nlc3MoKSAmJiAhaGFzUHJvY2Vzc1dlYnBhY2tTaGltKCk7XG59XG5cbmNvbnN0IF9wclN0ciA9IGZ1bmN0aW9uKGVybEFyZ3MsIHNob3VsZEJlUmVhZGFibGUpIHtcbiAgcmV0dXJuICgodG9BcnJheShlcmxBcmdzKSkubWFwKGZ1bmN0aW9uKGVybEFyZykge1xuICAgIHJldHVybiBzZXJpYWxpemUoZXJsQXJnLCBzaG91bGRCZVJlYWRhYmxlKTtcbiAgfSkpLmpvaW4oJycpO1xufTtcblxuY29uc3QgX3F1aXRfID0gZnVuY3Rpb24oKSB7XG4gIGlmIChpc05vZGUoKSkge1xuICAgIHJldHVybiBwcm9jZXNzLmV4aXQoMCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIF9wclN0cihcbiAgICAgIGNyZWF0ZUVybExpc3QoXG4gICAgICAgIGNyZWF0ZUVybFN0cmluZyhcbiAgICAgICAgICBcIlxcXCInRXJsa8O2bmlnIExpc3AgQ29uc29sZScgaXMgbm90IHBlcm1pdHRlZCB0byBjbG9zZSB0aGlzIHdpbmRvdy5cXFwiXCIpKSxcbiAgICAgICAgICBmYWxzZSk7XG4gIH1cbn07XG5cbmNvbnN0IHNldENvcmVFZmZlY3RmdWxGbnNPbkVybFZhbHVlcyA9IGZ1bmN0aW9uKHJlcHJlc2VudCkge1xuICByZXR1cm4gZnVuY3Rpb24oZW52LCBmbnMpIHtcbiAgICBjb25zdCBfcmVzdWx0cyA9IFtdO1xuICAgIGZvciAobGV0IGZuTmFtZSBpbiBmbnMpIHtcbiAgICAgIGlmICghX19oYXNQcm9wLmNhbGwoZm5zLCBmbk5hbWUpKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGZuID0gZm5zW2ZuTmFtZV07XG4gICAgICBlbnZbZm5OYW1lXSA9IGNyZWF0ZUVybENvcmVFZmZlY3RmdWxGdW5jdGlvbihmdW5jdGlvbihlcmxBcmdzKSB7XG4gICAgICAgIHJldHVybiByZXByZXNlbnQoZm4oZXJsQXJncykpO1xuICAgICAgfSk7XG4gICAgICBfcmVzdWx0cy5wdXNoKGVudltmbk5hbWVdKTtcbiAgICB9XG4gICAgcmV0dXJuIF9yZXN1bHRzO1xuICB9O1xufTtcblxuY29uc3QgZGlzcGxheUVmZmVjdHNPbkVybFZhbHVlcyA9IHtcbiAgJ3ByaW50JzogZnVuY3Rpb24oZXJsQXJncykge1xuICAgIHJldHVybiBfcHJTdHIoZXJsQXJncywgZmFsc2UpO1xuICB9LFxuICAncHJldHR5LXByaW50JzogZnVuY3Rpb24oZXJsQXJncykge1xuICAgIHJldHVybiBfcHJTdHIoZXJsQXJncywgdHJ1ZSk7XG4gIH0sXG4gICctcXVpdC0nOiBfcXVpdF8sXG59O1xuXG5leHBvcnQgeyBnZXRFbnZpcm9ubWVudCB9O1xuIiwiaW1wb3J0IHsgY2FyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxTeW1ib2wgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGV4dHJhY3RKc1ZhbHVlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBmcm9tQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGZyb21FcmxJbmRleCB9IGZyb20gJy4vaW5kZXgtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTGlzdCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgX3Byb2Nlc3MgfSBmcm9tICcuL19wcm9jZXNzJztcbmltcG9ydCB7IHRvQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHRva2VuaXplQW5kUGFyc2UgfSBmcm9tICcuL3Rva2VuaXplQW5kUGFyc2UnO1xuaW1wb3J0IHsgdG9QYXJ0aWFsQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcblxuY29uc3QgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbmNvbnN0IGdldEVudmlyb25tZW50ID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gIGNvbnN0IGVudmlyb25tZW50ID0gY29uZmlnLmVudmlyb25tZW50O1xuICBjb25zdCBwYXJzZSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgICByZXR1cm4gdG9rZW5pemVBbmRQYXJzZShzdHJpcFF1b3RlcyhleHRyYWN0SnNWYWx1ZShjYXIoZXJsQXJncykpKSk7XG4gIH07XG4gIGNvbnN0IGZ1bmN0aW9uc09uRXJsVmFsdWVzID0geyBwYXJzZTogcGFyc2UgfTtcbiAgc2V0Q29yZUZuc09uRXJsVmFsdWVzKGVudmlyb25tZW50LCBmdW5jdGlvbnNPbkVybFZhbHVlcyk7XG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn07XG5cbmNvbnN0IF9wcm9jZXNzXyA9IF9wcm9jZXNzKGZ1bmN0aW9uKGVybFZhbCkge1xuICByZXR1cm4gZXJsVmFsO1xufSk7XG5cbmNvbnN0IHNldENvcmVGbnNPbkVybFZhbHVlcyA9IGZ1bmN0aW9uKGVudiwgZm5zKSB7XG4gIGNvbnN0IF9yZXN1bHRzID0gW107XG4gIGZvciAobGV0IGZuTmFtZSBpbiBmbnMpIHtcbiAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGZucywgZm5OYW1lKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IGZuID0gZm5zW2ZuTmFtZV07XG4gICAgX3Jlc3VsdHMucHVzaChlbnZbZm5OYW1lXSA9IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24oZm4pKTtcbiAgfVxuICByZXR1cm4gX3Jlc3VsdHM7XG59O1xuXG5jb25zdCBzdHJpcFF1b3RlcyA9IGZ1bmN0aW9uKGpzU3RyaW5nKSB7XG4gIHJldHVybiBqc1N0cmluZy5zbGljZSgxLCAtMSk7XG59O1xuXG5leHBvcnQgeyBnZXRFbnZpcm9ubWVudCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBleHRyYWN0SnNWYWx1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZnJvbUVybEluZGV4IH0gZnJvbSAnLi9pbmRleC11dGlsaXRpZXMnO1xuaW1wb3J0IHsgX3Byb2Nlc3MgfSBmcm9tICcuL19wcm9jZXNzJztcbmltcG9ydCB7IHRvUGFydGlhbEFycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5cbmNvbnN0IF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5jb25zdCBnZXRFbnZpcm9ubWVudCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICBjb25zdCBlbnZpcm9ubWVudCA9IGNvbmZpZy5lbnZpcm9ubWVudDtcbiAgY29uc3QgZnVuY3Rpb25zT25FcmxWYWx1ZXMgPSB7XG4gICAgJ2xvYWQnOiBsb2FkLFxuICAgICdsb2FkLXdpdGgtZW52JzogbG9hZFdpdGhFbnYsXG4gICAgJ2xvYWQtd2l0aC1iYXJlLWVudic6IGxvYWRXaXRoQmFyZUVudlxuICB9O1xuICBzZXRDb3JlRm5zT25FcmxWYWx1ZXMoZW52aXJvbm1lbnQsIGZ1bmN0aW9uc09uRXJsVmFsdWVzKTtcbiAgcmV0dXJuIGVudmlyb25tZW50O1xufTtcblxuY29uc3QgZ2V0X2pzRmlsZU5hbWVfYW5kX2xvY2FsRW52ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgY29uc3QgZXJsRmlsZU5hbWUgPSBwYXJ0aWFsQXJyYXlbMF07XG4gIGNvbnN0IGxvY2FsRW52ID0gcGFydGlhbEFycmF5WzFdO1xuICBjb25zdCBqc0ZpbGVOYW1lID0gc3RyaXBRdW90ZXMoZXh0cmFjdEpzVmFsdWUoZXJsRmlsZU5hbWUpKTtcbiAgcmV0dXJuIFtqc0ZpbGVOYW1lLCBsb2NhbEVudl07XG59O1xuXG5jb25zdCBoYXNQcm9jZXNzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbmNvbnN0IGhhc1Byb2Nlc3NXZWJwYWNrU2hpbSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ocHJvY2Vzcy50aXRsZSA9PT0gJ2Jyb3dzZXInICYmIHByb2Nlc3MuYnJvd3Nlcik7XG59XG5cbmNvbnN0IGlzTm9kZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gaGFzUHJvY2VzcygpICYmICFoYXNQcm9jZXNzV2VicGFja1NoaW0oKTtcbn1cblxuY29uc3QgbG9hZCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgaWYgKGlzTm9kZSgpKSB7XG4gICAgcmV0dXJuIF9wcm9jZXNzXyhfcmVhZChlcmxBcmdzKSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxuY29uc3QgbG9hZFdpdGhCYXJlRW52ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBpZiAoaXNOb2RlKCkpIHtcbiAgICBjb25zdCB0ZW1wID0gZ2V0X2pzRmlsZU5hbWVfYW5kX2xvY2FsRW52KGVybEFyZ3MpO1xuICAgIGNvbnN0IGpzRmlsZU5hbWUgPSB0ZW1wWzBdO1xuICAgIGNvbnN0IGxvY2FsRW52ID0gdGVtcFsxXTtcbiAgICByZXR1cm4gX3Byb2Nlc3NGaWxlQW5kRW52KFxuICAgICAgcmVhZEZpbGUoanNGaWxlTmFtZSksXG4gICAgICBbZnJvbUVybEluZGV4KGxvY2FsRW52KV0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbmNvbnN0IGxvYWRXaXRoRW52ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBpZiAoaXNOb2RlKCkpIHtcbiAgICBjb25zdCB0ZW1wID0gZ2V0X2pzRmlsZU5hbWVfYW5kX2xvY2FsRW52KGVybEFyZ3MpO1xuICAgIGNvbnN0IGpzRmlsZU5hbWUgPSB0ZW1wWzBdO1xuICAgIGNvbnN0IGxvY2FsRW52ID0gdGVtcFsxXTtcbiAgICByZXR1cm4gX3Byb2Nlc3NGaWxlQW5kRW52KFxuICAgICAgcmVhZEZpbGUoanNGaWxlTmFtZSksXG4gICAgICBbZnJvbUVybEluZGV4KGxvY2FsRW52KSwgZW52aXJvbm1lbnRdKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG5jb25zdCBfcHJvY2Vzc18gPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4gX3Byb2Nlc3MoW2Vudmlyb25tZW50XSkoanNTdHJpbmcpO1xufTtcblxuY29uc3QgX3Byb2Nlc3NGaWxlQW5kRW52ID0gZnVuY3Rpb24oZmlsZSwgZW52U3RhY2spIHtcbiAgcmV0dXJuIF9wcm9jZXNzKGVudlN0YWNrKShmaWxlKTtcbn07XG5cbmNvbnN0IF9yZWFkID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBqc0ZpbGVOYW1lID0gZ2V0X2pzRmlsZU5hbWVfYW5kX2xvY2FsRW52KGVybEFyZ3MpWzBdO1xuICByZXR1cm4gcmVhZEZpbGUoanNGaWxlTmFtZSk7XG59O1xuXG5jb25zdCByZWFkRmlsZSA9IGZ1bmN0aW9uKGpzRmlsZU5hbWUpIHtcbiAgLy9yZXR1cm4gcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoanNGaWxlTmFtZSkudG9TdHJpbmcoKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBzZXRDb3JlRm5zT25FcmxWYWx1ZXMgPSBmdW5jdGlvbihlbnYsIGZucykge1xuICBjb25zdCBfcmVzdWx0cyA9IFtdO1xuICBmb3IgKGxldCBmbk5hbWUgaW4gZm5zKSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChmbnMsIGZuTmFtZSkpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGZuID0gZm5zW2ZuTmFtZV07XG4gICAgX3Jlc3VsdHMucHVzaChlbnZbZm5OYW1lXSA9IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24oZm4pKTtcbiAgfVxuICByZXR1cm4gX3Jlc3VsdHM7XG59O1xuXG5jb25zdCBzdHJpcFF1b3RlcyA9IGZ1bmN0aW9uKGpzU3RyaW5nKSB7XG4gIHJldHVybiBqc1N0cmluZy5zbGljZSgxLCAtMSk7XG59O1xuXG5leHBvcnQgeyBnZXRFbnZpcm9ubWVudCB9O1xuIiwiaW1wb3J0IHsgYWRkRW52IH0gZnJvbSAnLi9lbnYtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNhciB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgY2F0Y2hTdGFyIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgY2RyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBjaXJjdW1wZW5kUXVvdGVzIH0gZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY29tbWVudFNpZ25hbCB9IGZyb20gJy4vY29tbWVudFNpZ25hbCc7XG5pbXBvcnQgeyBjcmVhdGVFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsS2V5d29yZCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTGlzdCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTWFjcm8gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybE51bWJlciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3RyaW5nIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxTeW1ib2wgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFVzZXJQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGRlZkJhbmcgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBfZG8gfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBlcmxOaWwgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IF9ldmFsIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgX2V2YWxXaXRoRW52IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgZXhwYW5kTWFjcm8gfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBleHRyYWN0SnNWYWx1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBmblN0YXIgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBmb3JFYWNoIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBmcm9tQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGZyb21FcmxJbmRleCB9IGZyb20gJy4vaW5kZXgtdXRpbGl0aWVzJztcbmltcG9ydCB7IGZyb21Kc09iamVjdHMgfSBmcm9tICcuL2luZGV4LXV0aWxpdGllcyc7XG5pbXBvcnQgeyBfZ2V0Q3VycmVudEVudiB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IF9nZXREZWZhdWx0RW52IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgaXNFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsQ29yZVB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxJZ25vcmUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsS2V5d29yZCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybE1hY3JvIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybFN5bWJvbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0pzU3RyaW5nIH0gZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNLZXl3b3JkIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbGV0U3RhciB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGxldHJlY1N0YXIgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBsb29rdXAgfSBmcm9tICcuL2Vudi11dGlsaXRpZXMnO1xuaW1wb3J0IHsgbWFjcm9TdGFyIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBuZXh0IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBxdWFzaXF1b3RlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBzcGxpY2VVbnF1b3RlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgdW5xdW90ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHJlY3Vyc2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHJlZHVjZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgcmVkdWNlQnkyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyByZXZlcnNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBzZXRNYWluRW52IH0gZnJvbSAnLi9lbnYtdXRpbGl0aWVzJztcbmltcG9ydCB7IHNwbGF0IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgdG9QYXJ0aWFsQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHRyeVN0YXIgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyB1bmRlZkJhbmcgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyB1bnNldE1haW5FbnYgfSBmcm9tICcuL2Vudi11dGlsaXRpZXMnO1xuXG5jb25zdCBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuY29uc3QgY3JlYXRlRm4gPSBmdW5jdGlvbihlcmxMaXN0LCBlbnZzKSB7XG4gIHJldHVybiBjcmVhdGVFcmxVc2VyUHVyZUZ1bmN0aW9uKHtcbiAgICBsb2NhbEVudnM6IGVudnMuc2xpY2UoMCksXG4gICAgZXJsRXhwcmVzc2lvbjogbmV4dChlcmxMaXN0KSxcbiAgICBlcmxQYXJhbWV0ZXJzOiBjYXIoZXJsTGlzdClcbiAgfSk7XG59O1xuXG5jb25zdCBjcmVhdGVMb2NhbEVudiA9IGZ1bmN0aW9uKGVybFBhcmFtcywgZXJsQXJncykge1xuICBjb25zdCBlbnYgPSB7fTtcbiAgd2hpbGUgKCFpc0VtcHR5KGVybFBhcmFtcykpIHtcbiAgICBjb25zdCBqc1BhcmFtID0gZXh0cmFjdEpzVmFsdWUoY2FyKGVybFBhcmFtcykpO1xuICAgIGlmIChqc1BhcmFtID09PSBzcGxhdCkge1xuICAgICAgZW52W2V4dHJhY3RKc1ZhbHVlKG5leHQoZXJsUGFyYW1zKSldID0gZXJsQXJncztcbiAgICAgIHJldHVybiBlbnY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudltqc1BhcmFtXSA9IGNhcihlcmxBcmdzKTtcbiAgICAgIGVybFBhcmFtcyA9IGNkcihlcmxQYXJhbXMpO1xuICAgICAgZXJsQXJncyA9IGNkcihlcmxBcmdzKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVudjtcbn07XG5cbmNvbnN0IGNyZWF0ZU1hY3JvID0gZnVuY3Rpb24oZXJsTGlzdCwgZW52cykge1xuICByZXR1cm4gY3JlYXRlRXJsTWFjcm8oe1xuICAgIGxvY2FsRW52czogZW52cy5zbGljZSgwKSxcbiAgICBlcmxFeHByZXNzaW9uOiBuZXh0KGVybExpc3QpLFxuICAgIGVybFBhcmFtZXRlcnM6IGNhcihlcmxMaXN0KVxuICB9KTtcbn07XG5cbmNvbnN0IGRlZmluZU5ld1ZhbHVlID0gZnVuY3Rpb24oZXJsTGlzdCwgZW52cywgYWRkUmVzdWx0KSB7XG4gIGNvbnN0IGpzS2V5ID0gZXh0cmFjdEpzVmFsdWUoY2FyKGVybExpc3QpKTtcbiAgY29uc3QgZXJsVmFsdWUgPSBfZXZhbHVhdGUobmV4dChlcmxMaXN0KSwgZW52cywgYWRkUmVzdWx0KTtcbiAgcmV0dXJuIHNldE1haW5FbnYoZW52cywganNLZXksIGVybFZhbHVlKTtcbn07XG5cbmNvbnN0IGV2YWxRdWFzaXF1b3RlZEV4cHIgPSBmdW5jdGlvbihleHByLCBlbnZzLCBhZGRSZXN1bHQpIHtcbiAgaWYgKCFpc0VybExpc3QoZXhwcikpIHtcbiAgICByZXR1cm4gZXhwcjtcbiAgfVxuICBjb25zdCBtYW5hZ2VJdGVtID0gZnVuY3Rpb24obWVtbywgaXRlbSkge1xuICAgIGlmIChpc1VucXVvdGVkRXhwcihpdGVtKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRXJsTGlzdChfZXZhbHVhdGUobmV4dChpdGVtKSwgZW52cywgYWRkUmVzdWx0KSwgbWVtbyk7XG4gICAgfSBlbHNlIGlmIChpc1NwbGljZVVucXVvdGVkRXhwcihpdGVtKSkge1xuICAgICAgICBjb25zdCBfbWFuYWdlSXRlbSA9IGZ1bmN0aW9uKF9tZW1vLCBfaXRlbSkge1xuICAgICAgICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KF9pdGVtLCBfbWVtbyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZWR1Y2UobWVtbywgX21hbmFnZUl0ZW0sIF9ldmFsdWF0ZShuZXh0KGl0ZW0pLCBlbnZzLCBhZGRSZXN1bHQpKTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsTGlzdChpdGVtKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRXJsTGlzdChldmFsUXVhc2lxdW90ZWRFeHByKGl0ZW0sIGVudnMsIGFkZFJlc3VsdCksIG1lbW8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KGl0ZW0sIG1lbW8pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHJldmVyc2UocmVkdWNlKGNyZWF0ZUVybExpc3QoKSwgbWFuYWdlSXRlbSwgZXhwcikpO1xufTtcblxuY29uc3QgX2V2YWx1YXRlID0gZnVuY3Rpb24oZXJsRXhwciwgZW52cywgYWRkUmVzdWx0KSB7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaWYgKGlzRXJsU3ltYm9sKGVybEV4cHIpKSB7XG4gICAgICBjb25zdCBqc1N0cmluZyA9IGV4dHJhY3RKc1ZhbHVlKGVybEV4cHIpO1xuICAgICAgaWYgKGlzS2V5d29yZChqc1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVybEtleXdvcmQoanNTdHJpbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvb2t1cChlbnZzLCBqc1N0cmluZyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc0VybEluZGV4KGVybEV4cHIpKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGV4dHJhY3RKc1ZhbHVlKGVybEV4cHIpO1xuICAgICAgY29uc3QgbmV3SW5kZXggPSB7fTtcbiAgICAgIGZvciAobGV0IGtleSBpbiBpbmRleCkge1xuICAgICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGluZGV4LCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgbmV3SW5kZXhba2V5XSA9IF9ldmFsdWF0ZShpbmRleFtrZXldLCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNyZWF0ZUVybEluZGV4KG5ld0luZGV4KTtcbiAgICB9IGVsc2UgaWYgKCEoaXNFcmxMaXN0KGVybEV4cHIpKSkge1xuICAgICAgcmV0dXJuIGVybEV4cHI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVybEV4cHIgPSBmaWx0ZXIoKGZ1bmN0aW9uKHgpIHtcbiAgICAgICAgcmV0dXJuICEoaWdub3JhYmxlKHgsIGVudnMsIGFkZFJlc3VsdCkpO1xuICAgICAgfSksIGVybEV4cHIpO1xuICAgICAgY29uc3QgZXJsRXhwckFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsRXhwcik7XG4gICAgICBjb25zdCBoZWFkID0gZXJsRXhwckFycmF5WzBdO1xuICAgICAgY29uc3QgYXJnMSA9IGVybEV4cHJBcnJheVsxXTtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0FyZ3MgPSBlcmxFeHByQXJyYXlbMl07XG4gICAgICBjb25zdCB0YWlsTGlzdCA9IGNkcihlcmxFeHByKTtcbiAgICAgIHN3aXRjaCAoZXh0cmFjdEpzVmFsdWUoaGVhZCkpIHtcbiAgICAgICAgY2FzZSBkZWZCYW5nOlxuICAgICAgICAgIHJldHVybiBkZWZpbmVOZXdWYWx1ZSh0YWlsTGlzdCwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgY2FzZSB1bmRlZkJhbmc6XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lVmFsdWUodGFpbExpc3QsIGVudnMpO1xuICAgICAgICBjYXNlIF9ldmFsOlxuICAgICAgICAgIGVybEV4cHIgPSBfZXZhbHVhdGUoYXJnMSwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBfZXZhbFdpdGhFbnY6XG4gICAgICAgICAgZW52cyA9IFtmcm9tRXJsSW5kZXgoX2V2YWx1YXRlKGFyZzEsIGVudnMsIGFkZFJlc3VsdCkpXTtcbiAgICAgICAgICBlcmxFeHByID0gX2V2YWx1YXRlKGNhcihyZW1haW5pbmdBcmdzKSwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsZXRTdGFyOlxuICAgICAgICAgIGVybEV4cHIgPSBjYXIocmVtYWluaW5nQXJncyk7XG4gICAgICAgICAgZW52cyA9IGFkZEVudihlbnZzLCByZWR1Y2VMZXQoZW52cywgYXJnMSwgYWRkUmVzdWx0KSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGV0cmVjU3RhcjpcbiAgICAgICAgICBlcmxFeHByID0gY2FyKHJlbWFpbmluZ0FyZ3MpO1xuICAgICAgICAgIGVudnMgPSBhZGRFbnYoZW52cywgcmVkdWNlTGV0cmVjKGVudnMsIGFyZzEsIGFkZFJlc3VsdCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIF9kbzpcbiAgICAgICAgICByZXR1cm4gZm9yRWFjaChldmFsdWF0ZShlbnZzLCBhZGRSZXN1bHQpLCB0YWlsTGlzdCk7XG4gICAgICAgIGNhc2UgX2dldEN1cnJlbnRFbnY6XG4gICAgICAgICAgcmV0dXJuIGZyb21Kc09iamVjdHMuYXBwbHkobnVsbCwgZW52cy5yZXZlcnNlKCkpO1xuICAgICAgICBjYXNlIF9nZXREZWZhdWx0RW52OlxuICAgICAgICAgIHJldHVybiBmcm9tSnNPYmplY3RzKGVudnNbZW52cy5sZW5ndGggLSAxXSk7XG4gICAgICAgIGNhc2UgX2lmOlxuICAgICAgICAgIGlmIChleHRyYWN0SnNWYWx1ZShfZXZhbHVhdGUoYXJnMSwgZW52cywgYWRkUmVzdWx0KSkpIHtcbiAgICAgICAgICAgIGVybEV4cHIgPSBjYXIocmVtYWluaW5nQXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgb3RoZXJ3aXNlID0gbmV4dChyZW1haW5pbmdBcmdzKTtcbiAgICAgICAgICBpZiAoaXNFbXB0eShvdGhlcndpc2UpKSB7XG4gICAgICAgICAgICBlcmxFeHByID0gZXJsTmlsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcmxFeHByID0gb3RoZXJ3aXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBmblN0YXI6XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUZuKHRhaWxMaXN0LCBlbnZzKTtcbiAgICAgICAgY2FzZSBtYWNyb1N0YXI6XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZU1hY3JvKHRhaWxMaXN0LCBlbnZzKTtcbiAgICAgICAgY2FzZSBxdW90ZTpcbiAgICAgICAgICByZXR1cm4gY2FyKHRhaWxMaXN0KTtcbiAgICAgICAgY2FzZSBxdWFzaXF1b3RlOlxuICAgICAgICAgIHJldHVybiBldmFsUXVhc2lxdW90ZWRFeHByKGNhcih0YWlsTGlzdCksIGVudnMsIGFkZFJlc3VsdCk7XG4gICAgICAgIGNhc2UgZXhwYW5kTWFjcm86XG4gICAgICAgICAgcmV0dXJuIF9leHBhbmRNYWNybyhjYXIoYXJnMSksIGNkcihhcmcxKSwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgY2FzZSB0cnlTdGFyOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gX2V2YWx1YXRlKGFyZzEsIGVudnMsIGFkZFJlc3VsdCk7XG4gICAgICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICAgICAgICBsZXQgZXggPSBfZXJyb3I7XG4gICAgICAgICAgICBpZiAoaXNFbXB0eShyZW1haW5pbmdBcmdzKSkge1xuICAgICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ0FyZ3NBcnJheSA9IHRvUGFydGlhbEFycmF5KDMsIGNhcihyZW1haW5pbmdBcmdzKSk7XG4gICAgICAgICAgICAgIGNvbnN0IF9jYXRjaCA9IHJlbWFpbmluZ0FyZ3NBcnJheVswXTtcbiAgICAgICAgICAgICAgY29uc3QgX2V4ID0gcmVtYWluaW5nQXJnc0FycmF5WzFdO1xuICAgICAgICAgICAgICBjb25zdCBjYXRjaEV4cHIgPSByZW1haW5pbmdBcmdzQXJyYXlbMl07XG4gICAgICAgICAgICAgIGlmICgoZXh0cmFjdEpzVmFsdWUoX2NhdGNoKSkgIT09IFwiY2F0Y2gqXCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoZXggaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGV4ID0gY3JlYXRlRXJsU3RyaW5nKGNpcmN1bXBlbmRRdW90ZXMoZXgubWVzc2FnZSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnN0IG5ld0VudiA9IHt9O1xuICAgICAgICAgICAgICBuZXdFbnZbZXh0cmFjdEpzVmFsdWUoX2V4KV0gPSBleDtcbiAgICAgICAgICAgICAgcmV0dXJuIF9ldmFsdWF0ZShjYXRjaEV4cHIsIGFkZEVudihlbnZzLCBuZXdFbnYpLCBhZGRSZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zdCBlcmxTeW1ib2wgPSBoZWFkO1xuICAgICAgICAgIGVybEV4cHIgPSB0YWlsTGlzdDtcbiAgICAgICAgICBjb25zdCBlcmxJbnZva2FibGUgPSBfZXZhbHVhdGUoZXJsU3ltYm9sLCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICAgIGlmIChpc0VybEtleXdvcmQoZXJsSW52b2thYmxlKSkge1xuICAgICAgICAgICAgZXJsRXhwciA9IGNyZWF0ZUVybExpc3QoZXJsSW52b2thYmxlLCB0YWlsTGlzdCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0VybE1hY3JvKGVybEludm9rYWJsZSkpIHtcbiAgICAgICAgICAgIGVybEV4cHIgPSBfZXhwYW5kTWFjcm8oaGVhZCwgdGFpbExpc3QsIGVudnMsIGFkZFJlc3VsdCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0VybENvcmVQdXJlRnVuY3Rpb24oZXJsSW52b2thYmxlKSkge1xuICAgICAgICAgICAgY29uc3QgZm4gPSBleHRyYWN0SnNWYWx1ZShlcmxJbnZva2FibGUpO1xuICAgICAgICAgICAgY29uc3QgZXJsQXJncyA9IG1hcChldmFsdWF0ZShlbnZzLCBhZGRSZXN1bHQpLCBlcmxFeHByKTtcbiAgICAgICAgICAgIHJldHVybiBmbihlcmxBcmdzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uKGVybEludm9rYWJsZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGZuID0gZXh0cmFjdEpzVmFsdWUoZXJsSW52b2thYmxlKTtcbiAgICAgICAgICAgIGNvbnN0IGVybEFyZ3MgPSBtYXAoZXZhbHVhdGUoZW52cywgYWRkUmVzdWx0KSwgZXJsRXhwcik7XG4gICAgICAgICAgICBhZGRSZXN1bHQoZm4oZXJsQXJncykpO1xuICAgICAgICAgICAgcmV0dXJuIGVybE5pbDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzRXJsVXNlclB1cmVGdW5jdGlvbihlcmxJbnZva2FibGUpKSB7XG4gICAgICAgICAgICBjb25zdCBqc1ZhbHVlID0gZXh0cmFjdEpzVmFsdWUoZXJsSW52b2thYmxlKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsRW52cyA9IGpzVmFsdWUubG9jYWxFbnZzO1xuICAgICAgICAgICAgY29uc3QgZXJsRXhwcmVzc2lvbiA9IGpzVmFsdWUuZXJsRXhwcmVzc2lvbjtcbiAgICAgICAgICAgIGNvbnN0IGVybFBhcmFtZXRlcnMgPSBqc1ZhbHVlLmVybFBhcmFtZXRlcnM7XG4gICAgICAgICAgICBjb25zdCBlcmxBcmdzID0gbWFwKGV2YWx1YXRlKGVudnMsIGFkZFJlc3VsdCksIGVybEV4cHIpO1xuICAgICAgICAgICAgZXJsRXhwciA9IGVybEV4cHJlc3Npb247XG4gICAgICAgICAgICBjb25zdCBuZXdFbnYgPSBjcmVhdGVMb2NhbEVudihlcmxQYXJhbWV0ZXJzLCBlcmxBcmdzKTtcbiAgICAgICAgICAgIGVudnMgPSBhZGRFbnYobG9jYWxFbnZzLCBuZXdFbnYpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBcIlwiXG4gICAgICAgICAgICAgICsgKGV4dHJhY3RKc1ZhbHVlKGVybFN5bWJvbCkpXG4gICAgICAgICAgICAgICsgXCIgZG9lcyBub3QgZXZhbHVhdGUgdG8gYSBmdW5jdGlvbiwgbWFjcm8sIG9yIGtleXdvcmQuXCI7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZXZhbHVhdGUgPSBmdW5jdGlvbihlbnZzLCBhZGRSZXN1bHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGVybEV4cHIpIHtcbiAgICBpZiAoZXJsRXhwciA9PT0gY29tbWVudFNpZ25hbCkge1xuICAgICAgcmV0dXJuIGNvbW1lbnRTaWduYWw7XG4gICAgfVxuICAgIHJldHVybiBfZXZhbHVhdGUoZXJsRXhwciwgZW52cywgYWRkUmVzdWx0KTtcbiAgfTtcbn07XG5cbmNvbnN0IF9leHBhbmRNYWNybyA9IGZ1bmN0aW9uKGVybE1hY3JvU3ltYm9sLCBlcmxBcmdzLCBlbnZzLCBhZGRSZXN1bHQpIHtcbiAgY29uc3QgZXJsTWFjcm8gPSBfZXZhbHVhdGUoZXJsTWFjcm9TeW1ib2wsIGVudnMsIGFkZFJlc3VsdCk7XG4gIGNvbnN0IGpzVmFsdWUgPSBleHRyYWN0SnNWYWx1ZShlcmxNYWNybyk7XG4gIGNvbnN0IGxvY2FsRW52cyA9IGpzVmFsdWUubG9jYWxFbnZzO1xuICBjb25zdCBlcmxFeHByZXNzaW9uID0ganNWYWx1ZS5lcmxFeHByZXNzaW9uO1xuICBjb25zdCBlcmxQYXJhbWV0ZXJzID0ganNWYWx1ZS5lcmxQYXJhbWV0ZXJzO1xuICBjb25zdCBuZXdFbnYgPSBjcmVhdGVMb2NhbEVudihlcmxQYXJhbWV0ZXJzLCBlcmxBcmdzKTtcbiAgY29uc3QgbmV3RW52U3RhY2sgPSBhZGRFbnYobG9jYWxFbnZzLCBuZXdFbnYpO1xuICByZXR1cm4gX2V2YWx1YXRlKGVybEV4cHJlc3Npb24sIG5ld0VudlN0YWNrLCBhZGRSZXN1bHQpO1xufTtcblxuY29uc3QgaWdub3JhYmxlID0gZnVuY3Rpb24oZXJsVmFsLCBlbnZzLCBhZGRSZXN1bHQpIHtcbiAgaWYgKGlzRXJsSWdub3JlKGVybFZhbCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoIWlzRXJsTGlzdChlcmxWYWwpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHN5bWJvbCA9IGNhcihlcmxWYWwpO1xuICBpZiAoIWlzRXJsU3ltYm9sKHN5bWJvbCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QganNTdHJpbmcgPSBleHRyYWN0SnNWYWx1ZShzeW1ib2wpO1xuICBpZiAoanNTdHJpbmcgPT09ICdpZ25vcmUnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGpzU3RyaW5nID09PSAnaWdub3JlSWZUcnVlJykge1xuICAgIHJldHVybiBleHRyYWN0SnNWYWx1ZShfZXZhbHVhdGUobmV4dChlcmxWYWwpLCBlbnZzLCBhZGRSZXN1bHQpKTtcbiAgfVxuICBpZiAoanNTdHJpbmcgPT09ICdpZ25vcmVVbmxlc3NUcnVlJykge1xuICAgIHJldHVybiAhZXh0cmFjdEpzVmFsdWUoX2V2YWx1YXRlKG5leHQoZXJsVmFsKSwgZW52cywgYWRkUmVzdWx0KSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgcmVkdWNlTGV0ID0gZnVuY3Rpb24oZW52cywgbGlzdCwgYWRkUmVzdWx0KSB7XG4gIGNvbnN0IG5ld0VudiA9IHt9O1xuICBjb25zdCBfZW52cyA9IGFkZEVudihlbnZzLCBuZXdFbnYpO1xuICB3aGlsZSAoIWlzRW1wdHkobGlzdCkpIHtcbiAgICBjb25zdCBqc0tleSA9IGV4dHJhY3RKc1ZhbHVlKGxpc3QudmFsdWUpO1xuICAgIGxpc3QgPSByZWN1cnNlKGxpc3QpO1xuICAgIGNvbnN0IGVudlZhbHVlID0gX2V2YWx1YXRlKGxpc3QudmFsdWUsIF9lbnZzLCBhZGRSZXN1bHQpO1xuICAgIG5ld0Vudltqc0tleV0gPSBlbnZWYWx1ZTtcbiAgICBsaXN0ID0gcmVjdXJzZShsaXN0KTtcbiAgfVxuICByZXR1cm4gbmV3RW52O1xufTtcblxuY29uc3QgcmVkdWNlTGV0cmVjID0gZnVuY3Rpb24oZW52cywgbGlzdCwgYWRkUmVzdWx0KSB7XG4gIGNvbnN0IG5ld0VudiA9IHt9O1xuICBjb25zdCBfZW52cyA9IGFkZEVudihlbnZzLCBuZXdFbnYpO1xuICB3aGlsZSAoIWlzRW1wdHkobGlzdCkpIHtcbiAgICBjb25zdCBqc0tleSA9IGV4dHJhY3RKc1ZhbHVlKGxpc3QudmFsdWUpO1xuICAgIGxpc3QgPSByZWN1cnNlKGxpc3QpO1xuICAgIGNvbnN0IF9lcmxFeHByID0gZnJvbUFycmF5KFxuICAgICAgWyAgY3JlYXRlRXJsU3ltYm9sKFwiZml4KlwiKSxcbiAgICAgICAgIGZyb21BcnJheShbY3JlYXRlRXJsU3ltYm9sKFwiZm4qXCIpLFxuICAgICAgICAgZnJvbUFycmF5KFtqc0tleV0pLFxuICAgICAgICAgbGlzdC52YWx1ZV0pXG4gICAgICBdKTtcbiAgICBjb25zdCBlbnZWYWx1ZSA9IF9ldmFsdWF0ZShfZXJsRXhwciwgX2VudnMsIGFkZFJlc3VsdCk7XG4gICAgbmV3RW52W2pzS2V5XSA9IGVudlZhbHVlO1xuICAgIGxpc3QgPSByZWN1cnNlKGxpc3QpO1xuICB9XG4gIHJldHVybiBuZXdFbnY7XG59O1xuXG5jb25zdCBpc1NwbGljZVVucXVvdGUgPSBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICByZXR1cm4gKGV4dHJhY3RKc1ZhbHVlKGVybFZhbHVlKSkgPT09IHNwbGljZVVucXVvdGU7XG59O1xuXG5jb25zdCBpc1NwbGljZVVucXVvdGVkRXhwciA9IGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gIHJldHVybiBpc0VybExpc3QoZXJsVmFsdWUpICYmIGlzU3BsaWNlVW5xdW90ZShjYXIoZXJsVmFsdWUpKTtcbn07XG5cbmNvbnN0IHVuZGVmaW5lVmFsdWUgPSBmdW5jdGlvbihlcmxMaXN0LCBlbnZzKSB7XG4gIGNvbnN0IGpzS2V5ID0gZXh0cmFjdEpzVmFsdWUoY2FyKGVybExpc3QpKTtcbiAgcmV0dXJuIHVuc2V0TWFpbkVudihlbnZzLCBqc0tleSk7XG59O1xuXG5jb25zdCBpc1VucXVvdGUgPSBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICByZXR1cm4gZXh0cmFjdEpzVmFsdWUoZXJsVmFsdWUpID09PSB1bnF1b3RlO1xufTtcblxuY29uc3QgaXNVbnF1b3RlZEV4cHIgPSBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICByZXR1cm4gaXNFcmxMaXN0KGVybFZhbHVlKSAmJiBpc1VucXVvdGUoY2FyKGVybFZhbHVlKSk7XG59O1xuXG5leHBvcnQgeyBldmFsdWF0ZSB9O1xuIiwiaW1wb3J0IHsgZ2V0RW52aXJvbm1lbnQgYXMgc2V0RW52MCB9IGZyb20gJy4vZW52MCc7XG5pbXBvcnQgeyBnZXRFbnZpcm9ubWVudCBhcyBzZXRFbnYxIH0gZnJvbSAnLi9lbnYxJztcbmltcG9ydCB7IGdldEVudmlyb25tZW50IGFzIHNldEVudjIgfSBmcm9tICcuL2VudjInO1xuaW1wb3J0IHsgZ2V0RW52aXJvbm1lbnQgYXMgc2V0RW52MyB9IGZyb20gJy4vZW52Myc7XG5pbXBvcnQgeyBnZXRFbnZpcm9ubWVudCBhcyBzZXRFbnY0IH0gZnJvbSAnLi9lbnY0JztcblxuY29uc3QgZ2V0TGlzcEVudmlyb25tZW50ID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gIGNvbnN0IGRpc3BsYXkgPSBjb25maWcuZGlzcGxheTtcbiAgY29uc3QgZW52aXJvbm1lbnQgPSB7fTtcbiAgY29uc3QgX2NvbmZpZyA9IHtcbiAgICBkaXNwbGF5OiBkaXNwbGF5LFxuICAgIGVudmlyb25tZW50OiBlbnZpcm9ubWVudFxuICB9O1xuICBzZXRFbnYwKF9jb25maWcpO1xuICBzZXRFbnYxKF9jb25maWcpO1xuICBzZXRFbnYyKF9jb25maWcpO1xuICBzZXRFbnYzKF9jb25maWcpO1xuICBzZXRFbnY0KF9jb25maWcpO1xuICByZXR1cm4gZW52aXJvbm1lbnQ7XG59O1xuXG5leHBvcnQgeyBnZXRMaXNwRW52aXJvbm1lbnQgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUVybEluZGV4IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0pzU3RyaW5nIH0gZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuXG5jb25zdCBfX3NsaWNlICAgPSBbXS5zbGljZTtcbmNvbnN0IF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5jb25zdCBmcm9tRXJsSW5kZXggPSBmdW5jdGlvbihlcmxJbmRleCkge1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgY29uc3QganNWYWx1ZSA9IGVybEluZGV4LmpzVmFsdWU7XG4gIGZvciAobGV0IGtleSBpbiBqc1ZhbHVlKSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChqc1ZhbHVlLCBrZXkpKSBjb250aW51ZTtcbiAgICBjb25zdCB2YWx1ZSA9IGpzVmFsdWVba2V5XTtcbiAgICBpZiAoaXNKc1N0cmluZyhrZXkpKSB7XG4gICAgICBjb25zdCBuZXdLZXkgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHN3aXRjaCAoa2V5WzBdKSB7XG4gICAgICAgICAgY2FzZSAnOic6XG4gICAgICAgICAgICByZXR1cm4ga2V5LnNsaWNlKDEpO1xuICAgICAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgICAgIHJldHVybiBrZXkuc2xpY2UoMSwgLTEpO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICB9KSgpO1xuICAgICAgcmVzdWx0W25ld0tleV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGZyb21Kc09iamVjdHMgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QganNPYmplY3RzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgY29uc3QgY29weSA9IHt9O1xuICBjb25zdCBsZW4gPSBqc09iamVjdHMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgIGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGpzT2JqZWN0ID0ganNPYmplY3RzW2ldO1xuICAgIGZvciAobGV0IGtleSBpbiBqc09iamVjdCkge1xuICAgICAgaWYgKCFfX2hhc1Byb3AuY2FsbChqc09iamVjdCwga2V5KSkgY29udGludWU7XG4gICAgICBjb25zdCB2YWwgPSBqc09iamVjdFtrZXldO1xuICAgICAgaWYgKGlzSnNTdHJpbmcoa2V5KSkge1xuICAgICAgICBjb3B5Wyc6JyArIGtleV0gPSB2YWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3B5W2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjcmVhdGVFcmxJbmRleChjb3B5KTtcbn07XG5cbmV4cG9ydCB7XG4gIGZyb21Kc09iamVjdHMsXG4gIGZyb21FcmxJbmRleFxufTtcbiIsImltcG9ydCB7IGNpcmN1bXBlbmRRdW90ZXMgfSAgIGZyb20gJy4vanMtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN0cmluZyB9ICAgIGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZnJvbUFycmF5IH0gICAgICAgICAgZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBnZXRMaXNwRW52aXJvbm1lbnQgfSBmcm9tICcuL2dldExpc3BFbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBfcHJvY2VzcyB9ICAgICAgICAgICBmcm9tICcuL19wcm9jZXNzJztcbmltcG9ydCB7IHNlcmlhbGl6ZSB9ICAgICAgICAgIGZyb20gJy4vc2VyaWFsaXplJztcbmltcG9ydCBzdGFuZGFyZEZuc0FuZE1hY3JvcyAgIGZyb20gJy4vc3RhbmRhcmQtZm5zLWFuZC1tYWNyb3MubGlzcCc7XG5pbXBvcnQgeyB0b2tlbml6ZUFuZFBhcnNlIH0gICBmcm9tICcuL3Rva2VuaXplQW5kUGFyc2UnO1xuXG5jb25zdCBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuY29uc3QgX2NyZWF0ZUVybFN0cmluZyA9IGZ1bmN0aW9uKGpzU3RyaW5nKSB7XG4gIHJldHVybiBjcmVhdGVFcmxTdHJpbmcoY2lyY3VtcGVuZFF1b3Rlcyhqc1N0cmluZykpO1xufTtcblxuY29uc3QgZW5jYXBzdWxhdGUgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBlZmZlY3Q6IHtcbiAgICAgICAgdHlwZTogdHlwZVxuICAgICAgfSxcbiAgICAgIHZhbHVlOiBlcmxWYWx1ZVxuICAgIH07XG4gIH07XG59O1xuXG5jb25zdCBlcnJvciA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSkge1xuICByZXR1cm4gW2VuY2Fwc3VsYXRlKCdlcnJvcicpKFwicmVwbCBlcnJvcjogKFwiICsgZXJyb3JNZXNzYWdlICsgXCIpXCIpXTtcbn07XG5cbmNvbnN0IGZsYXR0ZW5JZk5lY2Vzc2FyeSA9IGZ1bmN0aW9uKGVmZmVjdHMpIHtcbiAgbGV0IHZhbHVlO1xuICBsZXQgcmVzdWx0cyA9IGVmZmVjdHM7XG4gIHdoaWxlIChyZXN1bHRzLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KHZhbHVlID0gcmVzdWx0c1swXS52YWx1ZSkpIHtcbiAgICByZXN1bHRzID0gZmxhdHRlbklmTmVjZXNzYXJ5KHZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cztcbn07XG5cbmNvbnN0IF9pbnRlcnByZXQgPSBmdW5jdGlvbihlbnZzLCBqc1N0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBfc2VyaWFsaXplKFxuICAgICAgZmxhdHRlbklmTmVjZXNzYXJ5KFxuICAgICAgICBfcHJvY2Vzcyh0b2tlbml6ZUFuZFBhcnNlKShlbnZzKShqc1N0cmluZykpKTtcbiAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yKF9lcnJvcik7XG4gIH1cbn07XG5cbmNvbnN0IGludGVycHJldCA9IGZ1bmN0aW9uKGpzU3RyaW5nLCB1c2VySnNBcnJheSkge1xuICBpZiAodXNlckpzQXJyYXkgIT0gbnVsbCkge1xuICAgIGNvbnN0IHVzZXJFbnYgPSB7XG4gICAgICAnKkFSR1YqJzogZnJvbUFycmF5KHVzZXJKc0FycmF5Lm1hcChfY3JlYXRlRXJsU3RyaW5nKSlcbiAgICB9O1xuICAgIHJldHVybiBfaW50ZXJwcmV0KFt1c2VyRW52LCBlbnZpcm9ubWVudF0sIGpzU3RyaW5nKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gX2ludGVycHJldChbZW52aXJvbm1lbnRdLCBqc1N0cmluZyk7XG4gIH1cbn07XG5cbmNvbnN0IF9zZXJpYWxpemUgPSBmdW5jdGlvbihyZXN1bHRzKSB7XG4gIHJldHVybiByZXN1bHRzLm1hcChmdW5jdGlvbihyZXN1bHQpIHtcbiAgICBjb25zdCBfcmVzdWx0ID0ge307XG4gICAgZm9yIChsZXQga2V5IGluIHJlc3VsdCkge1xuICAgICAgaWYgKCFfX2hhc1Byb3AuY2FsbChyZXN1bHQsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHRba2V5XTtcbiAgICAgIGlmIChrZXkgPT09ICdlZmZlY3QnKSB7XG4gICAgICAgIF9yZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3Jlc3VsdFtrZXldID0gc2VyaWFsaXplKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF9yZXN1bHQ7XG4gIH0pO1xufTtcblxuY29uc3QgZW52aXJvbm1lbnQgPSBnZXRMaXNwRW52aXJvbm1lbnQoe1xuICBkaXNwbGF5OiBlbmNhcHN1bGF0ZSgnZGlzcGxheScpXG59KTtcblxuaW50ZXJwcmV0KHN0YW5kYXJkRm5zQW5kTWFjcm9zKTtcblxuZXhwb3J0IHsgaW50ZXJwcmV0IH07XG4iLCJjb25zdCBjaXJjdW1wZW5kUXVvdGVzID0gZnVuY3Rpb24oanNTdHJpbmcpIHtcbiAgcmV0dXJuICdcIicgKyBqc1N0cmluZyArICdcIic7XG59O1xuXG5jb25zdCBpc0pzTmFOID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiBpc0pzTnVtYmVyKHZhbCkgJiYgdmFsICE9PSB2YWw7XG59O1xuXG5jb25zdCBpc0pzTnVtYmVyID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IE51bWJlcl0nO1xufTtcblxuY29uc3QgaXNKc1N0cmluZyA9IGZ1bmN0aW9uKGpzVmFsKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoanNWYWwpID09PSAnW29iamVjdCBTdHJpbmddJztcbn07XG5cbmV4cG9ydCB7XG4gIGNpcmN1bXBlbmRRdW90ZXMsXG4gIGlzSnNOYU4sXG4gIGlzSnNOdW1iZXIsXG4gIGlzSnNTdHJpbmdcbn07XG4iLCJjb25zdCBkZXJlZiAgICAgICAgICAgICAgICAgPSAnZGVyZWYnO1xuY29uc3QgZGVyZWZHbHlwaCAgICAgICAgICAgID0gJ0AnO1xuY29uc3QgY2F0Y2hTdGFyICAgICAgICAgICAgID0gJ2NhdGNoKic7XG5jb25zdCBkZWZCYW5nICAgICAgICAgICAgICAgPSAnZGVmISc7XG5jb25zdCBfZG8gICAgICAgICAgICAgICAgICAgPSAnZG8nO1xuY29uc3QgX2V2YWwgICAgICAgICAgICAgICAgID0gJ2V2YWwnO1xuY29uc3QgX2V2YWxXaXRoRW52ICAgICAgICAgID0gJ2V2YWwtd2l0aC1lbnYnO1xuY29uc3QgZXhwYW5kTWFjcm8gICAgICAgICAgID0gJ2V4cGFuZC1tYWNybyc7XG5jb25zdCBfZmFsc2UgICAgICAgICAgICAgICAgPSAnZmFsc2UnO1xuY29uc3QgZm5TdGFyICAgICAgICAgICAgICAgID0gJ2ZuKic7XG5jb25zdCBfZ2V0Q3VycmVudEVudiAgICAgICAgPSAnLWdldC1jdXJyZW50LWVudi0nO1xuY29uc3QgX2dldERlZmF1bHRFbnYgICAgICAgID0gJy1nZXQtZGVmYXVsdC1lbnYtJztcbmNvbnN0IF9pZiAgICAgICAgICAgICAgICAgICA9ICdpZic7XG5jb25zdCBpZ25vcmVCYW5nICAgICAgICAgICAgPSAnaWdub3JlISc7XG5jb25zdCBpZ25vcmVCYW5nR2x5cGggICAgICAgPSAnIyEnO1xuY29uc3QgaWdub3JlSWZUcnVlICAgICAgICAgID0gJ2lnbm9yZUlmVHJ1ZSc7XG5jb25zdCBpZ25vcmVJZlRydWVHbHlwaCAgICAgPSAnIy0nO1xuY29uc3QgaWdub3JlVW5sZXNzVHJ1ZSAgICAgID0gJ2lnbm9yZVVubGVzc1RydWUnO1xuY29uc3QgaWdub3JlVW5sZXNzVHJ1ZUdseXBoID0gJyMrJztcbmNvbnN0IGlnbm9yZSAgICAgICAgICAgICAgICA9ICdpZ25vcmUnO1xuY29uc3QgaW5kZXhFbmQgICAgICAgICAgICAgID0gJ30nO1xuY29uc3QgaW5kZXhTdGFydCAgICAgICAgICAgID0gJ3snO1xuY29uc3QgbGV0U3RhciAgICAgICAgICAgICAgID0gJ2xldConO1xuY29uc3QgbGV0cmVjU3RhciAgICAgICAgICAgID0gJ2xldHJlYyonO1xuY29uc3QgbGlzdEVuZCAgICAgICAgICAgICAgID0gJyknO1xuY29uc3QgbGlzdFN0YXJ0ICAgICAgICAgICAgID0gJygnO1xuY29uc3QgbWFjcm9TdGFyICAgICAgICAgICAgID0gJ21hY3JvKic7XG5jb25zdCBuaWwgICAgICAgICAgICAgICAgICAgPSAnbmlsJztcbmNvbnN0IF9wcm9jZXNzICAgICAgICAgICAgICA9ICctcHJvY2Vzcy0nO1xuY29uc3QgcXVhc2lxdW90ZSAgICAgICAgICAgID0gJ3F1YXNpcXVvdGUnO1xuY29uc3QgcXVhc2lxdW90ZUdseXBoICAgICAgID0gJ2AnO1xuY29uc3QgcXVvdGUgICAgICAgICAgICAgICAgID0gJ3F1b3RlJztcbmNvbnN0IHF1b3RlR2x5cGggICAgICAgICAgICA9ICdcXCcnO1xuY29uc3Qgc3BsYXQgICAgICAgICAgICAgICAgID0gJyYnO1xuY29uc3Qgc3BsaWNlVW5xdW90ZSAgICAgICAgID0gJ3NwbGljZS11bnF1b3RlJztcbmNvbnN0IHNwbGljZVVucXVvdGVHbHlwaCAgICA9ICd+QCc7XG5jb25zdCBfdHJ1ZSAgICAgICAgICAgICAgICAgPSAndHJ1ZSc7XG5jb25zdCB0cnlTdGFyICAgICAgICAgICAgICAgPSAndHJ5Kic7XG5jb25zdCB1bmRlZkJhbmcgICAgICAgICAgICAgPSAndW5kZWYhJztcbmNvbnN0IHVucXVvdGUgICAgICAgICAgICAgICA9ICd1bnF1b3RlJztcbmNvbnN0IHVucXVvdGVHbHlwaCAgICAgICAgICA9ICd+J1xuXG5jb25zdCBrZXlUb2tlbnMgPSBbXG4gIGRlcmVmLFxuICBkZXJlZkdseXBoLFxuICBjYXRjaFN0YXIsXG4gIGRlZkJhbmcsXG4gIF9kbyxcbiAgX2V2YWwsXG4gIF9ldmFsV2l0aEVudixcbiAgZXhwYW5kTWFjcm8sXG4gIF9mYWxzZSxcbiAgZm5TdGFyLFxuICBfZ2V0Q3VycmVudEVudixcbiAgX2dldERlZmF1bHRFbnYsXG4gIF9pZixcbiAgaWdub3JlQmFuZyxcbiAgaWdub3JlQmFuZ0dseXBoLFxuICBpZ25vcmVJZlRydWUsXG4gIGlnbm9yZUlmVHJ1ZUdseXBoLFxuICBpZ25vcmVVbmxlc3NUcnVlLFxuICBpZ25vcmVVbmxlc3NUcnVlR2x5cGgsXG4gIGlnbm9yZSxcbiAgaW5kZXhFbmQsXG4gIGluZGV4U3RhcnQsXG4gIGxldFN0YXIsXG4gIGxldHJlY1N0YXIsXG4gIGxpc3RFbmQsXG4gIGxpc3RTdGFydCxcbiAgbWFjcm9TdGFyLFxuICBuaWwsXG4gIF9wcm9jZXNzLFxuICBxdWFzaXF1b3RlLFxuICBxdWFzaXF1b3RlR2x5cGgsXG4gIHF1b3RlLFxuICBxdW90ZUdseXBoLFxuICBzcGxhdCxcbiAgc3BsaWNlVW5xdW90ZSxcbiAgc3BsaWNlVW5xdW90ZUdseXBoLFxuICBfdHJ1ZSxcbiAgdHJ5U3RhcixcbiAgdW5kZWZCYW5nLFxuICB1bnF1b3RlLFxuICB1bnF1b3RlR2x5cGhcbl07XG5cbmNvbnN0IGtleXdvcmRzID0gW1xuICBjYXRjaFN0YXIsXG4gIGRlZkJhbmcsXG4gIF9kbyxcbiAgX2V2YWwsXG4gIF9ldmFsV2l0aEVudixcbiAgZXhwYW5kTWFjcm8sXG4gIF9mYWxzZSxcbiAgZm5TdGFyLFxuICBfZ2V0Q3VycmVudEVudixcbiAgX2dldERlZmF1bHRFbnYsXG4gIF9pZixcbiAgaWdub3JlLFxuICBsZXRTdGFyLFxuICBsZXRyZWNTdGFyLFxuICBtYWNyb1N0YXIsXG4gIG5pbCxcbiAgX3Byb2Nlc3MsXG4gIHF1YXNpcXVvdGUsXG4gIHF1b3RlLFxuICBzcGxpY2VVbnF1b3RlLFxuICBfdHJ1ZSxcbiAgdHJ5U3RhcixcbiAgdW5kZWZCYW5nLFxuICB1bnF1b3RlXG5dO1xuXG5jb25zdCBtYWNyb1Rva2VucyA9IFtxdWFzaXF1b3RlLCBxdW90ZSwgc3BsaWNlVW5xdW90ZSwgdW5xdW90ZV07XG5cbmNvbnN0IGdseXBoVG9rZW5zID0gW1xuICBkZXJlZkdseXBoLFxuICBpZ25vcmVCYW5nR2x5cGgsXG4gIHF1YXNpcXVvdGVHbHlwaCxcbiAgcXVvdGVHbHlwaCxcbiAgc3BsaWNlVW5xdW90ZUdseXBoLFxuICB1bnF1b3RlR2x5cGhcbl07XG5cbmNvbnN0IGJpbmFyeUdseXBoVG9rZW5zID0gW2lnbm9yZUlmVHJ1ZUdseXBoLCBpZ25vcmVVbmxlc3NUcnVlR2x5cGhdO1xuXG5jb25zdCBfX2luZGV4T2YgPSBbXS5pbmRleE9mIHx8IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gIH0gcmV0dXJuIC0xO1xufTtcblxuY29uc3QgaXNLZXl3b3JkID0gZnVuY3Rpb24oanNTdHJpbmcpIHtcbiAgcmV0dXJuIF9faW5kZXhPZi5jYWxsKGtleXdvcmRzLCBqc1N0cmluZykgPj0gMDtcbn07XG5cbmV4cG9ydCB7XG4gIGJpbmFyeUdseXBoVG9rZW5zLFxuICBkZXJlZixcbiAgZGVyZWZHbHlwaCxcbiAgY2F0Y2hTdGFyLFxuICBkZWZCYW5nLFxuICBfZG8sXG4gIF9ldmFsLFxuICBfZXZhbFdpdGhFbnYsXG4gIGV4cGFuZE1hY3JvLFxuICBfZmFsc2UsXG4gIGZuU3RhcixcbiAgX2dldEN1cnJlbnRFbnYsXG4gIF9nZXREZWZhdWx0RW52LFxuICBnbHlwaFRva2VucyxcbiAgX2lmLFxuICBpZ25vcmVJZlRydWUsXG4gIGlnbm9yZUlmVHJ1ZUdseXBoLFxuICBpZ25vcmVVbmxlc3NUcnVlLFxuICBpZ25vcmVVbmxlc3NUcnVlR2x5cGgsXG4gIGlnbm9yZSxcbiAgaWdub3JlQmFuZyxcbiAgaWdub3JlQmFuZ0dseXBoLFxuICBpbmRleEVuZCxcbiAgaW5kZXhTdGFydCxcbiAga2V5VG9rZW5zLFxuICBpc0tleXdvcmQsXG4gIGxldFN0YXIsXG4gIGxldHJlY1N0YXIsXG4gIGxpc3RFbmQsXG4gIGxpc3RTdGFydCxcbiAgbWFjcm9TdGFyLFxuICBtYWNyb1Rva2VucyxcbiAgbmlsLFxuICBfcHJvY2VzcyxcbiAgcXVhc2lxdW90ZSxcbiAgcXVhc2lxdW90ZUdseXBoLFxuICBxdW90ZSxcbiAgcXVvdGVHbHlwaCxcbiAgc3BsYXQsXG4gIHNwbGljZVVucXVvdGUsXG4gIHNwbGljZVVucXVvdGVHbHlwaCxcbiAgX3RydWUsXG4gIHRyeVN0YXIsXG4gIHVuZGVmQmFuZyxcbiAgdW5xdW90ZSxcbiAgdW5xdW90ZUdseXBoXG59O1xuIiwiaW1wb3J0IHsgZXJsVHlwZXMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgZXJsTGlzdFR5cGUgPSBlcmxUeXBlc1s2XTtcblxuY29uc3QgX19zbGljZSA9IFtdLnNsaWNlO1xuXG5jb25zdCBjYXIgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIGlmIChpc0VtcHR5KGVybExpc3QpKSB7XG4gICAgcmV0dXJuIEVPTDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTGlzdC52YWx1ZTtcbiAgfVxufTtcblxuY29uc3QgY2RyID0gZnVuY3Rpb24oZXJsTGlzdCkge1xuICBpZiAoaXNFbXB0eShlcmxMaXN0KSkge1xuICAgIHJldHVybiBFT0w7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybExpc3QubmV4dDtcbiAgfVxufTtcblxuY29uc3QgYXJlRXF1YWwgPSBmdW5jdGlvbihsaXN0MCwgbGlzdDEsIF9hcmVFcXVhbCkge1xuICB3aGlsZSAoIShpc0VtcHR5KGxpc3QwKSB8fCBpc0VtcHR5KGxpc3QxKSkpIHtcbiAgICBpZiAoIV9hcmVFcXVhbChsaXN0MC52YWx1ZSwgbGlzdDEudmFsdWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxpc3QwID0gY2RyKGxpc3QwKTtcbiAgICBsaXN0MSA9IGNkcihsaXN0MSk7XG4gIH1cbiAgcmV0dXJuIGlzRW1wdHkobGlzdDApICYmIGlzRW1wdHkobGlzdDEpO1xufTtcblxuY29uc3QgY29uY2F0ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGVybExpc3RzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgaWYgKGVybExpc3RzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBFT0w7XG4gIH1cbiAgbGV0IHJlc3VsdCA9IGNvcHkoZXJsTGlzdHNbMF0pO1xuICBsZXQgdGFpbCA9IGxhc3RUYWlsKHJlc3VsdCk7XG4gIGNvbnN0IHJlbWFpbmluZyA9IGVybExpc3RzLnNsaWNlKDEpO1xuICBjb25zdCBsZW4gPSByZW1haW5pbmcubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgZXJsTGlzdCA9IHJlbWFpbmluZ1tpXTtcbiAgICBjb25zdCBfY29weSA9IGNvcHkoZXJsTGlzdCk7XG4gICAgaWYgKGlzRW1wdHkodGFpbCkpIHtcbiAgICAgIHJlc3VsdCA9IF9jb3B5O1xuICAgICAgdGFpbCA9IGxhc3RUYWlsKHJlc3VsdCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFpc0VtcHR5KF9jb3B5KSkge1xuICAgICAgdGFpbC5uZXh0ID0gX2NvcHk7XG4gICAgICB0YWlsID0gbGFzdFRhaWwoX2NvcHkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgY29ucyA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybExpc3QoY2FyKGVybEFyZ3MpLCBuZXh0KGVybEFyZ3MpKTtcbn07XG5cbmNvbnN0IGNvcHkgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIHJldHVybiBtYXAoKGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfSksIGVybExpc3QpO1xufTtcblxuY29uc3QgY3JlYXRlRXJsTGlzdCA9IGZ1bmN0aW9uKHZhbHVlLCBuZXh0Tm9kZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBFT0w7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZU5vZGUodmFsdWUsIG5leHROb2RlICE9IG51bGwgPyBuZXh0Tm9kZSA6IEVPTCk7XG59O1xuXG5jb25zdCBjcmVhdGVOb2RlID0gZnVuY3Rpb24odmFsdWUsIG5leHROb2RlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogZXJsTGlzdFR5cGUsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIG5leHQ6IG5leHROb2RlXG4gIH07XG59O1xuXG5jb25zdCBkcm9wID0gZnVuY3Rpb24obmJyLCBlcmxMaXN0KSB7XG4gIHdoaWxlIChuYnIgIT09IDApIHtcbiAgICBlcmxMaXN0ID0gY2RyKGVybExpc3QpO1xuICAgIG5iciA9IG5iciAtIDE7XG4gIH1cbiAgcmV0dXJuIGVybExpc3Q7XG59O1xuXG5jb25zdCBpc0VtcHR5ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBFT0w7XG59O1xuXG5jb25zdCBmaWx0ZXIgPSBmdW5jdGlvbihwcmVkaWNhdGUsIGxpc3QpIHtcbiAgY29uc3QgX3JlZHVjZSA9IGZ1bmN0aW9uKGxpc3QsIHZhbHVlKSB7XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KHZhbHVlLCBsaXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICB9O1xuICByZXR1cm4gcmV2ZXJzZShyZWR1Y2UoRU9MLCBfcmVkdWNlLCBsaXN0KSk7XG59O1xuXG5jb25zdCBmb3JFYWNoID0gZnVuY3Rpb24oZm4sIGxpc3QpIHtcbiAgbGV0IHJlc3VsdCA9IGxpc3Q7XG4gIHdoaWxlICghaXNFbXB0eShsaXN0KSkge1xuICAgIHJlc3VsdCA9IGZuKGxpc3QudmFsdWUpO1xuICAgIGxpc3QgPSByZWN1cnNlKGxpc3QpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBmcm9tQXJyYXkgPSBmdW5jdGlvbihhcnJheSkge1xuICBjb25zdCBfcmVkdWNlID0gZnVuY3Rpb24obGlzdCwgdmFsdWUpIHtcbiAgICByZXR1cm4gY3JlYXRlRXJsTGlzdCh2YWx1ZSwgbGlzdCk7XG4gIH07XG4gIHJldHVybiBhcnJheS5yZXZlcnNlKCkucmVkdWNlKF9yZWR1Y2UsIGNyZWF0ZUVybExpc3QoKSk7XG59O1xuXG5jb25zdCBsYXN0ID0gZnVuY3Rpb24oZXJsTGlzdCkge1xuICByZXR1cm4gY2FyKGxhc3RUYWlsKGVybExpc3QpKTtcbn07XG5cbmNvbnN0IGxhc3RUYWlsID0gZnVuY3Rpb24oZXJsTGlzdCkge1xuICBpZiAoaXNFbXB0eShlcmxMaXN0KSkge1xuICAgIHJldHVybiBlcmxMaXN0O1xuICB9XG4gIGxldCBwcmlvciA9IGVybExpc3Q7XG4gIGxldCBjdXJyZW50ID0gY2RyKGVybExpc3QpO1xuICB3aGlsZSAoIWlzRW1wdHkoY3VycmVudCkpIHtcbiAgICBwcmlvciA9IGNkcihwcmlvcik7XG4gICAgY3VycmVudCA9IGNkcihjdXJyZW50KTtcbiAgfVxuICByZXR1cm4gcHJpb3I7XG59O1xuXG5jb25zdCBtYXAgPSBmdW5jdGlvbihmbiwgbGlzdCkge1xuICBjb25zdCBfcmVkdWNlID0gZnVuY3Rpb24obGlzdCwgdmFsdWUpIHtcbiAgICByZXR1cm4gY3JlYXRlRXJsTGlzdChmbih2YWx1ZSksIGxpc3QpO1xuICB9O1xuICByZXR1cm4gcmV2ZXJzZShyZWR1Y2UoRU9MLCBfcmVkdWNlLCBsaXN0KSk7XG59O1xuXG5jb25zdCBuZXh0ID0gZnVuY3Rpb24oZXJsTGlzdCkge1xuICByZXR1cm4gY2FyKGNkcihlcmxMaXN0KSk7XG59O1xuXG5jb25zdCByZWN1cnNlID0gZnVuY3Rpb24obGlzdCkge1xuICBpZiAoaXNFbXB0eShsaXN0KSkge1xuICAgIHJldHVybiBsaXN0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0Lm5leHQ7XG4gIH1cbn07XG5cbmNvbnN0IHJlZHVjZSA9IGZ1bmN0aW9uKHNlZWQsIGZuLCBsaXN0KSB7XG4gIHdoaWxlICghaXNFbXB0eShsaXN0KSkge1xuICAgIHNlZWQgPSBmbihzZWVkLCBsaXN0LnZhbHVlKTtcbiAgICBsaXN0ID0gcmVjdXJzZShsaXN0KTtcbiAgfVxuICByZXR1cm4gc2VlZDtcbn07XG5cbmNvbnN0IHJlZHVjZUJ5MiA9IGZ1bmN0aW9uKHNlZWQsIGZuLCBsaXN0KSB7XG4gIHdoaWxlICghaXNFbXB0eShsaXN0KSkge1xuICAgIGNvbnN0IHZhbHVlMCA9IGxpc3QudmFsdWU7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gICAgY29uc3QgdmFsdWUxID0gbGlzdC52YWx1ZTtcbiAgICBzZWVkID0gZm4oc2VlZCwgdmFsdWUwLCB2YWx1ZTEpO1xuICAgIGxpc3QgPSByZWN1cnNlKGxpc3QpO1xuICB9XG4gIHJldHVybiBzZWVkO1xufTtcblxuY29uc3QgcmV2ZXJzZSA9IGZ1bmN0aW9uKGxpc3QpIHtcbiAgbGV0IHJlc3VsdCA9IEVPTDtcbiAgd2hpbGUgKCFpc0VtcHR5KGxpc3QpKSB7XG4gICAgcmVzdWx0ID0gY3JlYXRlRXJsTGlzdChsaXN0LnZhbHVlLCByZXN1bHQpO1xuICAgIGxpc3QgPSBsaXN0Lm5leHQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IHRha2UgPSBmdW5jdGlvbihuYnIsIGVybExpc3QpIHtcbiAgbGV0IHJlc3VsdCA9IGNyZWF0ZUVybExpc3QoKTtcbiAgd2hpbGUgKG5iciAhPT0gMCkge1xuICAgIGNvbnN0IG5vZGUgPSBjYXIoZXJsTGlzdCk7XG4gICAgZXJsTGlzdCA9IGNkcihlcmxMaXN0KTtcbiAgICByZXN1bHQgPSBjcmVhdGVFcmxMaXN0KG5vZGUsIHJlc3VsdCk7XG4gICAgbmJyID0gbmJyIC0gMTtcbiAgfVxuICByZXR1cm4gcmV2ZXJzZShyZXN1bHQpO1xufTtcblxuY29uc3QgdG9BcnJheSA9IGZ1bmN0aW9uKGxpc3QpIHtcbiAgY29uc3QgX3JlZHVjZSA9IGZ1bmN0aW9uKGpzQXJyYXksIHZhbHVlKSB7XG4gICAganNBcnJheS5wdXNoKHZhbHVlKTtcbiAgICByZXR1cm4ganNBcnJheTtcbiAgfTtcbiAgcmV0dXJuIHJlZHVjZShbXSwgX3JlZHVjZSwgbGlzdCk7XG59O1xuXG5jb25zdCB0b1BhcnRpYWxBcnJheSA9IGZ1bmN0aW9uKG5iciwgbGlzdCkge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgd2hpbGUgKG5iciAhPT0gMCkge1xuICAgIGNvbnN0IG5vZGUgPSBjYXIobGlzdCk7XG4gICAgbGlzdCA9IGNkcihsaXN0KTtcbiAgICByZXN1bHQucHVzaChub2RlKTtcbiAgICBuYnIgPSBuYnIgLSAxO1xuICB9XG4gIHJlc3VsdC5wdXNoKGxpc3QpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgemlwID0gZnVuY3Rpb24oc2VlZCwgZm4sIGxpc3QwLCBsaXN0MSkge1xuICB3aGlsZSAoIShpc0VtcHR5KGxpc3QwKSB8fCBpc0VtcHR5KGxpc3QxKSkpIHtcbiAgICBjb25zdCB2YWx1ZTAgPSBjYXIobGlzdDApO1xuICAgIGxpc3QwID0gY2RyKGxpc3QwKTtcbiAgICBjb25zdCB2YWx1ZTEgPSBjYXIobGlzdDEpO1xuICAgIGxpc3QxID0gY2RyKGxpc3QxKTtcbiAgICBzZWVkID0gZm4oc2VlZCwgdmFsdWUwLCB2YWx1ZTEpO1xuICB9XG4gIHJldHVybiBzZWVkO1xufTtcblxuY29uc3QgX0VPTCA9IHt9O1xuXG5jb25zdCBFT0wgPSBjcmVhdGVOb2RlKF9FT0wsIF9FT0wpO1xuXG5leHBvcnQge1xuICBhcmVFcXVhbCxcbiAgY2FyLFxuICBjZHIsXG4gIGNvbmNhdCxcbiAgY29ucyxcbiAgY29weSxcbiAgY3JlYXRlRXJsTGlzdCxcbiAgZHJvcCxcbiAgaXNFbXB0eSxcbiAgZmlsdGVyLFxuICBmb3JFYWNoLFxuICBmcm9tQXJyYXksXG4gIGxhc3QsXG4gIG1hcCxcbiAgbmV4dCxcbiAgcmVjdXJzZSxcbiAgcmVkdWNlLFxuICByZWR1Y2VCeTIsXG4gIHJldmVyc2UsXG4gIHRha2UsXG4gIHRvQXJyYXksXG4gIHRvUGFydGlhbEFycmF5XG59O1xuIiwiaW1wb3J0IHsgYmluYXJ5R2x5cGhUb2tlbnMgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBjb21tZW50U2lnbmFsIH0gZnJvbSAnLi9jb21tZW50U2lnbmFsJztcbmltcG9ydCB7IGNyZWF0ZUVybEJvb2xlYW4gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybElkZW50aWZpZXIgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybElnbm9yZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybExpc3QgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybE5pbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTnVtYmVyIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxTdHJpbmcgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN5bWJvbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZGVyZWYgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBkZXJlZkdseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgZXh0cmFjdEpzVmFsdWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IF9mYWxzZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGdseXBoVG9rZW5zIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlQmFuZyB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGlnbm9yZUJhbmdHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGlnbm9yZUlmVHJ1ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGlnbm9yZUlmVHJ1ZUdseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlVW5sZXNzVHJ1ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGlnbm9yZVVubGVzc1RydWVHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGluZGV4RW5kIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaW5kZXhTdGFydCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGtleVRva2VucyB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGxpc3RFbmQgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBsaXN0U3RhcnQgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBuaWwgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBxdWFzaXF1b3RlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBzcGxpY2VVbnF1b3RlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgdW5xdW90ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHF1YXNpcXVvdGVHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHF1b3RlR2x5cGggfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBzcGxpY2VVbnF1b3RlR2x5cGggfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyB1bnF1b3RlR2x5cGggfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyByZXZlcnNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBfdHJ1ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcblxuY29uc3QgIF9faW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgfSByZXR1cm4gLTE7XG59O1xuXG5jb25zdCBhdG9taXplID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgY29uc3QgY3JlYXRlRXJsVmFsdWUgPSAoZnVuY3Rpb24oKSB7XG4gICAgaWYgKGlzTmlsKHRva2VuKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVybE5pbDtcbiAgICB9IGVsc2UgaWYgKGlzSWdub3JlKHRva2VuKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVybElnbm9yZTtcbiAgICB9IGVsc2UgaWYgKGlzQm9vbGVhbih0b2tlbikpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbih0b2tlbikge1xuICAgICAgICByZXR1cm4gY3JlYXRlRXJsQm9vbGVhbihwYXJzZUJvb2xlYW4odG9rZW4pKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyh0b2tlbikpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFcmxTdHJpbmc7XG4gICAgfSBlbHNlIGlmIChpc0lkZW50aWZpZXIodG9rZW4pKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRXJsSWRlbnRpZmllcjtcbiAgICB9IGVsc2UgaWYgKGlzSW50ZWdlcih0b2tlbikpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbih0b2tlbikge1xuICAgICAgICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKHBhcnNlSW50MTAodG9rZW4pKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc0Zsb2F0KHRva2VuKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxOdW1iZXIocGFyc2VGbG9hdDEwKHRva2VuKSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3JlYXRlRXJsU3ltYm9sO1xuICAgIH1cbiAgfSkoKTtcbiAgcmV0dXJuIGNyZWF0ZUVybFZhbHVlKHRva2VuKTtcbn07XG5cbmNvbnN0IGlzQm9vbGVhbiA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbiA9PT0gX2ZhbHNlIHx8IHRva2VuID09PSBfdHJ1ZTtcbn07XG5cbmNvbnN0IGlzRmxvYXQgPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gL14oLXxcXCspP1swLTldKF98XFxkKSpcXC4oXFxkfChcXGQoX3xcXGQpKlxcZCkpJC8udGVzdCh0b2tlbik7XG59O1xuXG5jb25zdCBpc0JpbmFyeUdseXBoID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIF9faW5kZXhPZi5jYWxsKGJpbmFyeUdseXBoVG9rZW5zLCB0b2tlbikgPj0gMDtcbn07XG5cbmNvbnN0IGlzR2x5cGggPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gX19pbmRleE9mLmNhbGwoZ2x5cGhUb2tlbnMsIHRva2VuKSA+PSAwO1xufTtcblxuY29uc3QgaXNJZ25vcmUgPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gdG9rZW4gPT09IGlnbm9yZTtcbn07XG5cbmNvbnN0IGlzSW5kZXhTdGFydCA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbiA9PT0gaW5kZXhTdGFydDtcbn07XG5cbmNvbnN0IGlzSW50ZWdlciA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiAvXigwKD8hXFwuKXwoKC18XFwrKT9bMS05XShffFxcZCkqJCkpLy50ZXN0KHRva2VuKTtcbn07XG5cbmNvbnN0IGlzTGlzdFN0YXJ0ID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuID09PSBsaXN0U3RhcnQ7XG59O1xuXG5jb25zdCBpc05pbCA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbiA9PT0gbmlsO1xufTtcblxuY29uc3QgX3BhcnNlID0gZnVuY3Rpb24odG9rZW4sIHRva2Vucykge1xuICBpZiAoaXNMaXN0U3RhcnQodG9rZW4pKSB7XG4gICAgcmV0dXJuIHBhcnNlTGlzdCh0b2tlbnMpO1xuICB9IGVsc2UgaWYgKGlzSW5kZXhTdGFydCh0b2tlbikpIHtcbiAgICByZXR1cm4gcGFyc2VJbmRleCh0b2tlbnMpO1xuICB9IGVsc2UgaWYgKGlzR2x5cGgodG9rZW4pKSB7XG4gICAgcmV0dXJuIHBhcnNlR2x5cGgoZ2x5cGhJbmRleFt0b2tlbl0sIHRva2Vucyk7XG4gIH0gZWxzZSBpZiAoaXNCaW5hcnlHbHlwaCh0b2tlbikpIHtcbiAgICByZXR1cm4gcGFyc2VCaW5hcnlHbHlwaChiaW5hcnlHbHlwaEluZGV4W3Rva2VuXSwgdG9rZW5zKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXRvbWl6ZSh0b2tlbik7XG4gIH1cbn07XG5cbmNvbnN0IHBhcnNlID0gZnVuY3Rpb24odG9rZW5zKSB7XG4gIGlmICh0b2tlbnMgPT09IGNvbW1lbnRTaWduYWwpIHtcbiAgICByZXR1cm4gY29tbWVudFNpZ25hbDtcbiAgfVxuICByZXR1cm4gX3BhcnNlKHRva2Vucy5zaGlmdCgpLCB0b2tlbnMpO1xufTtcblxuY29uc3QgcGFyc2VCaW5hcnlHbHlwaCA9IGZ1bmN0aW9uKGtleXdvcmQsIHRva2Vucykge1xuICByZXR1cm4gY3JlYXRlRXJsTGlzdChcbiAgICBjcmVhdGVFcmxTeW1ib2woa2V5d29yZCksXG4gICAgY3JlYXRlRXJsTGlzdChcbiAgICAgIHBhcnNlKHRva2VucyksXG4gICAgICBjcmVhdGVFcmxMaXN0KHBhcnNlKHRva2VucykpKSk7XG59O1xuXG5jb25zdCBwYXJzZUJvb2xlYW4gPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gdG9rZW4gPT09IF90cnVlO1xufTtcblxuY29uc3QgcGFyc2VGbG9hdDEwID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQoc3RyaXBVbmRlcnNjb3Jlcyh0b2tlbiksIDEwKTtcbn07XG5cbmNvbnN0IHBhcnNlR2x5cGggPSBmdW5jdGlvbihrZXl3b3JkLCB0b2tlbnMpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybExpc3QoXG4gICAgY3JlYXRlRXJsU3ltYm9sKGtleXdvcmQpLFxuICAgIGNyZWF0ZUVybExpc3QocGFyc2UodG9rZW5zKSkpO1xufTtcblxuY29uc3QgcGFyc2VJbmRleCA9IGZ1bmN0aW9uKHRva2Vucykge1xuICBsZXQgdG9rZW47XG4gIGNvbnN0IGpzSW5kZXggPSB7fTtcbiAgbGV0IGtleSA9IG51bGw7XG4gIGxldCBpc0tleVN0ZXAgPSB0cnVlO1xuICB3aGlsZSAoKHRva2VuID0gdG9rZW5zLnNoaWZ0KCkpICE9PSBpbmRleEVuZCkge1xuICAgIGlmIChpc0tleVN0ZXApIHtcbiAgICAgIGtleSA9IF9wYXJzZSh0b2tlbiwgdG9rZW5zKTtcbiAgICAgIGlzS2V5U3RlcCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBqc0luZGV4W2V4dHJhY3RKc1ZhbHVlKGtleSldID0gX3BhcnNlKHRva2VuLCB0b2tlbnMpO1xuICAgICAgaXNLZXlTdGVwID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUVybEluZGV4KGpzSW5kZXgpO1xufTtcblxuY29uc3QgcGFyc2VJbnQxMCA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiBwYXJzZUludChzdHJpcFVuZGVyc2NvcmVzKHRva2VuKSwgMTApO1xufTtcblxuY29uc3QgcGFyc2VMaXN0ID0gZnVuY3Rpb24odG9rZW5zKSB7XG4gIGxldCB0b2tlbjtcbiAgbGV0IGVybExpc3QgPSBjcmVhdGVFcmxMaXN0KCk7XG4gIHdoaWxlICgodG9rZW4gPSB0b2tlbnMuc2hpZnQoKSkgIT09IGxpc3RFbmQpIHtcbiAgICBlcmxMaXN0ID0gY3JlYXRlRXJsTGlzdChfcGFyc2UodG9rZW4sIHRva2VucyksIGVybExpc3QpO1xuICB9XG4gIHJldHVybiByZXZlcnNlKGVybExpc3QpO1xufTtcblxuY29uc3Qgc3RhcnRzV2l0aCA9IGZ1bmN0aW9uKGNoYXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgcmV0dXJuIHRva2VuWzBdID09PSBjaGFyO1xuICB9O1xufTtcblxuY29uc3Qgc3RyaXBVbmRlcnNjb3JlcyA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbi5yZXBsYWNlKC9fL2csICcnKTtcbn07XG5cbmNvbnN0IGdseXBoSW5kZXggPSB7fTtcblxuZ2x5cGhJbmRleFtkZXJlZkdseXBoXSAgICAgICAgID0gZGVyZWY7XG5nbHlwaEluZGV4W2lnbm9yZUJhbmdHbHlwaF0gICAgPSBpZ25vcmVCYW5nO1xuZ2x5cGhJbmRleFtxdWFzaXF1b3RlR2x5cGhdICAgID0gcXVhc2lxdW90ZTtcbmdseXBoSW5kZXhbcXVvdGVHbHlwaF0gICAgICAgICA9IHF1b3RlO1xuZ2x5cGhJbmRleFtzcGxpY2VVbnF1b3RlR2x5cGhdID0gc3BsaWNlVW5xdW90ZTtcbmdseXBoSW5kZXhbdW5xdW90ZUdseXBoXSAgICAgICA9IHVucXVvdGU7XG5cbmNvbnN0IGJpbmFyeUdseXBoSW5kZXggPSB7fTtcblxuYmluYXJ5R2x5cGhJbmRleFtpZ25vcmVJZlRydWVHbHlwaF0gICAgID0gaWdub3JlSWZUcnVlO1xuYmluYXJ5R2x5cGhJbmRleFtpZ25vcmVVbmxlc3NUcnVlR2x5cGhdID0gaWdub3JlVW5sZXNzVHJ1ZTtcblxuY29uc3QgaXNTdHJpbmcgPSBzdGFydHNXaXRoKCdcIicpO1xuXG5jb25zdCBpc0lkZW50aWZpZXIgPSBzdGFydHNXaXRoKCc6Jyk7XG5cbmV4cG9ydCB7IHBhcnNlIH07XG4iLCJpbXBvcnQgeyBjb21tZW50U2lnbmFsIH0gZnJvbSAnLi9jb21tZW50U2lnbmFsJztcbmltcG9ydCB7IGV4dHJhY3RKc1ZhbHVlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpbmRleEVuZCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGluZGV4U3RhcnQgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpc0VybEF0b20gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsSWRlbnRpZmllciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxJZ25vcmUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsS2V5d29yZCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybE1hY3JvIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybE5pbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxTdHJpbmcgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsVXNlclB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgbGlzdEVuZCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGxpc3RTdGFydCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHJlZHVjZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuXG5jb25zdCBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuY29uc3QgYWRqb2luRXJsVmFsdWUgPSBmdW5jdGlvbihzaG91bGRCZVJlYWRhYmxlKSB7XG4gIHJldHVybiBmdW5jdGlvbihtZW1vLCBlcmxWYWx1ZSkge1xuICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSBzZXJpYWxpemUoZXJsVmFsdWUsIHNob3VsZEJlUmVhZGFibGUpO1xuICAgIGlmIChtZW1vLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlwiICsgbWVtbyArIFwiIFwiICsgc2VyaWFsaXplZDtcbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBzZXJpYWxpemUgPSBmdW5jdGlvbihlcmxFeHByLCBzaG91bGRCZVJlYWRhYmxlKSB7XG4gIGlmIChlcmxFeHByID09PSBjb21tZW50U2lnbmFsKSB7XG4gICAgcmV0dXJuIGNvbW1lbnRTaWduYWw7XG4gIH1cbiAgY29uc3QgX3NlcmlhbGl6ZSA9IChmdW5jdGlvbigpIHtcbiAgICBpZiAoaXNFcmxMaXN0KGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gc2VyaWFsaXplTGlzdDtcbiAgICB9IGVsc2UgaWYgKGlzRXJsSWdub3JlKGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGlnbm9yZUxhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsSW5kZXgoZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBzZXJpYWxpemVJbmRleDtcbiAgICB9IGVsc2UgaWYgKGlzRXJsS2V5d29yZChlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBrZXl3b3JkTGFiZWw7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24oZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gY29yZUVmZmVjdGZ1bEZ1bmN0aW9uTGFiZWw7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxDb3JlUHVyZUZ1bmN0aW9uKGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGNvcmVQdXJlRnVuY3Rpb25MYWJlbDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc0VybFVzZXJQdXJlRnVuY3Rpb24oZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdXNlclB1cmVGdW5jdGlvbkxhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsTWFjcm8oZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gbWFjcm9MYWJlbDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc0VybE5pbChlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBuaWxMYWJlbDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc0VybElkZW50aWZpZXIoZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBzZXJpYWxpemVJZGVudGlmaWVyO1xuICAgIH0gZWxzZSBpZiAoaXNFcmxTdHJpbmcoZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBzZXJpYWxpemVTdHJpbmc7XG4gICAgfSBlbHNlIGlmIChpc0VybEF0b20oZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBzZXJpYWxpemVBdG9tO1xuICAgIH0gZWxzZSBpZiAoZXJsRXhwci5qc1ZhbHVlICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBleHRyYWN0SnNWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBlcmxWYWx1ZTtcbiAgICAgIH07XG4gICAgfVxuICB9KSgpO1xuICByZXR1cm4gX3NlcmlhbGl6ZShlcmxFeHByLCBzaG91bGRCZVJlYWRhYmxlKTtcbn07XG5cbmNvbnN0IHNlcmlhbGl6ZUF0b20gPSBmdW5jdGlvbihlcmxBdG9tLCBzaG91bGRCZVJlYWRhYmxlKSB7XG4gIHJldHVybiBcIihhdG9tIFwiICsgKHNlcmlhbGl6ZShlcmxBdG9tLmVybFZhbHVlLCBzaG91bGRCZVJlYWRhYmxlKSkgKyBcIilcIjtcbn07XG5cbmNvbnN0IHNlcmlhbGl6ZUlkZW50aWZpZXIgPSBmdW5jdGlvbihlcmxTdHJpbmcsIHNob3VsZEJlUmVhZGFibGUpIHtcbiAgcmV0dXJuIGV4dHJhY3RKc1ZhbHVlKGVybFN0cmluZyk7XG59O1xuXG5jb25zdCBzZXJpYWxpemVJbmRleCA9IGZ1bmN0aW9uKGVybEluZGV4LCBzaG91bGRCZVJlYWRhYmxlKSB7XG4gIGNvbnN0IGpzSW5kZXggPSBlcmxJbmRleC5qc1ZhbHVlO1xuICBsZXQgbWVtbyA9ICcnO1xuICBmb3IgKGxldCBrZXkgaW4ganNJbmRleCkge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoanNJbmRleCwga2V5KSkgY29udGludWU7XG4gICAgY29uc3QgZXJsVmFsdWUgPSBqc0luZGV4W2tleV07XG4gICAgaWYgKG1lbW8gPT09ICcnKSB7XG4gICAgICBtZW1vID0gXCJcIlxuICAgICAgICArIGtleVxuICAgICAgICArIFwiIFwiXG4gICAgICAgICsgKHNlcmlhbGl6ZShlcmxWYWx1ZSwgc2hvdWxkQmVSZWFkYWJsZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW1vID0gXCJcIlxuICAgICAgICArIG1lbW9cbiAgICAgICAgKyBcIiwgXCJcbiAgICAgICAgKyBrZXlcbiAgICAgICAgKyBcIiBcIlxuICAgICAgICArIChzZXJpYWxpemUoZXJsVmFsdWUsIHNob3VsZEJlUmVhZGFibGUpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluZGV4U3RhcnQgKyBtZW1vICsgaW5kZXhFbmQ7XG59O1xuXG5jb25zdCBzZXJpYWxpemVMaXN0ID0gZnVuY3Rpb24oZXJsTGlzdCwgc2hvdWxkQmVSZWFkYWJsZSkge1xuICBjb25zdCBzZXJpYWxpemVkTGlzdCA9IHJlZHVjZShcbiAgICBcIlwiLFxuICAgIGFkam9pbkVybFZhbHVlKHNob3VsZEJlUmVhZGFibGUpLFxuICAgIGVybExpc3QpO1xuICByZXR1cm4gbGlzdFN0YXJ0ICsgc2VyaWFsaXplZExpc3QgKyBsaXN0RW5kO1xufTtcblxuY29uc3Qgc2VyaWFsaXplU3RyaW5nID0gZnVuY3Rpb24oZXJsU3RyaW5nLCBzaG91bGRCZVJlYWRhYmxlKSB7XG4gIGNvbnN0IGpzU3RyaW5nID0gc3RyaXBRdW90ZXMoZXh0cmFjdEpzVmFsdWUoZXJsU3RyaW5nKSk7XG4gIGlmICghc2hvdWxkQmVSZWFkYWJsZSkge1xuICAgIHJldHVybiBqc1N0cmluZztcbiAgfVxuICByZXR1cm4ganNTdHJpbmdcbiAgICAucmVwbGFjZSgvXFxcXC9nLCAnXFxcXFxcXFwnKVxuICAgIC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJylcbiAgICAucmVwbGFjZSgvXFxuL2csICdcXFxcbicpO1xufTtcblxuY29uc3Qgc3RyaXBRdW90ZXMgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4ganNTdHJpbmcuc2xpY2UoMSwgLTEpO1xufTtcblxuY29uc3QgY29yZUVmZmVjdGZ1bEZ1bmN0aW9uTGFiZWwgPSAnPGVmZmVjdGZ1bCBjb3JlIGZ1bmN0aW9uPic7XG5jb25zdCBjb3JlUHVyZUZ1bmN0aW9uTGFiZWwgICAgICA9ICc8Y29yZSBmdW5jdGlvbj4nO1xuY29uc3QgaWdub3JlTGFiZWwgICAgICAgICAgICAgICAgPSAnPGlnbm9yZT4nO1xuY29uc3Qga2V5d29yZExhYmVsICAgICAgICAgICAgICAgPSAnPGtleXdvcmQ+JztcbmNvbnN0IG1hY3JvTGFiZWwgICAgICAgICAgICAgICAgID0gJzxtYWNybz4nO1xuY29uc3QgbmlsTGFiZWwgICAgICAgICAgICAgICAgICAgPSAnbmlsJztcbmNvbnN0IHVzZXJQdXJlRnVuY3Rpb25MYWJlbCAgICAgID0gJzxmdW5jdGlvbj4nO1xuXG5leHBvcnQgeyBzZXJpYWxpemUgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIoZG9cXG4gIChkZWYhIGZpeCogKFxcbiAgICBmbiogKGYpIChcXG4gICAgICAoZm4qICh4KSAoZiAoZm4qICgmIHlzKSAoYXBwbHkgKHggeCkgeXMpKSkpXFxuICAgICAgKGZuKiAoeCkgKGYgKGZuKiAoJiB5cykgKGFwcGx5ICh4IHgpIHlzKSkpKSkpKVxcblxcbiAgKGRlZiEgbWVtZml4KiAoXFxuICAgIGZuKiAoZikgKFxcbiAgICAgIGxldCogKGNhY2hlIHt9KSAoXFxuICAgICAgICAoZm4qICh4IGNhY2hlKSAoXFxuICAgICAgICAgIGZcXG4gICAgICAgICAgICAoZm4qICh6KSAoXFxuICAgICAgICAgICAgICBpZiAoY29udGFpbnM/IGNhY2hlIHopXFxuICAgICAgICAgICAgICAgIChnZXQgY2FjaGUgeilcXG4gICAgICAgICAgICAgICAgKGxldCogKHJlc3VsdCAoKGZuKiAoeSkgKCh4IHggY2FjaGUpIHkpKSB6KSkgKFxcbiAgICAgICAgICAgICAgICAgIGRvXFxuICAgICAgICAgICAgICAgICAgICAoc2V0ISBjYWNoZSB6IHJlc3VsdClcXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCkpKSlcXG4gICAgICAgICAgICBjYWNoZSkpXFxuICAgICAgICAoZm4qICh4IGNhY2hlKSAoXFxuICAgICAgICAgIGZcXG4gICAgICAgICAgICAoZm4qICh6KSAoXFxuICAgICAgICAgICAgICBpZiAoY29udGFpbnM/IGNhY2hlIHopXFxuICAgICAgICAgICAgICAgIChnZXQgY2FjaGUgeilcXG4gICAgICAgICAgICAgICAgKGxldCogKHJlc3VsdCAoKGZuKiAoeSkgKCh4IHggY2FjaGUpIHkpKSB6KSkgKFxcbiAgICAgICAgICAgICAgICAgIGRvXFxuICAgICAgICAgICAgICAgICAgICAoc2V0ISBjYWNoZSB6IHJlc3VsdClcXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCkpKSlcXG4gICAgICAgICAgICBjYWNoZSkpXFxuICAgICAgICBjYWNoZSkpKSlcXG5cXG4gIChkZWYhIF8wIGNhcilcXG5cXG4gIChkZWYhIF8xIChmbiogKHhzKSAobnRoIDEgeHMpKSlcXG5cXG4gIChkZWYhIF8yIChmbiogKHhzKSAobnRoIDIgeHMpKSlcXG5cXG4gIChkZWYhIHN3YXAhIChcXG4gICAgbWFjcm8qIChhdG9tICYgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgYXRvbVxcbiAgICAgICAgYChsZXQqICgtYXRvbS0gfmF0b20pIChcXG4gICAgICAgICAgZG9cXG4gICAgICAgICAgICAocmVzZXQhIC1hdG9tLSAofihjYXIgeHMpIChkZXJlZiAtYXRvbS0pIH5AKGNkciB4cykpKVxcbiAgICAgICAgICAgIChkZXJlZiAtYXRvbS0pKSkpKSlcXG5cXG4gIChkZWYhICpnZW5zeW0tY291bnRlciogKGF0b20gMCkpXFxuXFxuICAoZGVmISBnZW5zeW0gKFxcbiAgICAgIGZuKiAoKSAoc3ltYm9sIChcXG4gICAgICAgIHN0cmluZ1xcbiAgICAgICAgICBcXFwiR19fXFxcIlxcbiAgICAgICAgICAoc3dhcCEgKmdlbnN5bS1jb3VudGVyKiAoZm4qIChuKSAoKyBuIDEpKSkpKSkpXFxuXFxuICAoZGVmISBvciAoXFxuICAgIG1hY3JvKiAoJiB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBmYWxzZVxcbiAgICAgICAgKGxldCogKC1xdWVyeS0gKGdlbnN5bSkpXFxuICAgICAgICAgIGAobGV0KiAofi1xdWVyeS0gfihjYXIgeHMpKSAoXFxuICAgICAgICAgICAgaWYgfi1xdWVyeS1cXG4gICAgICAgICAgICAgIH4tcXVlcnktXFxuICAgICAgICAgICAgICAob3IgfkAoY2RyIHhzKSkpKSkpKSlcXG5cXG4gIChkZWYhIGFuZCAoXFxuICAgIG1hY3JvKiAoJiB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICB0cnVlXFxuICAgICAgICAobGV0KiAoLXF1ZXJ5LSAoZ2Vuc3ltKSlcXG4gICAgICAgICAgYChsZXQqICh+LXF1ZXJ5LSB+KGNhciB4cykpIChcXG4gICAgICAgICAgICBpZiB+LXF1ZXJ5LVxcbiAgICAgICAgICAgICAgKGFuZCB+QChjZHIgeHMpKVxcbiAgICAgICAgICAgICAgZmFsc2UpKSkpKSlcXG5cXG4gIChkZWYhIGNvbmQgKFxcbiAgICBtYWNybyogKCYgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgbmlsXFxuICAgICAgICAoaWYgKGVtcHR5PyAoY2RyIHhzKSlcXG4gICAgICAgICAgKHRocm93IFxcXCJgY29uZGAgcmVxdWlyZXMgYW4gZXZlbiBudW1iZXIgb2YgZm9ybXMuXFxcIilcXG4gICAgICAgICAgKGxldCogKC1xdWVyeS0gKGdlbnN5bSkpXFxuICAgICAgICAgICAgYChsZXQqICh+LXF1ZXJ5LSB+KGNhciB4cykpIChcXG4gICAgICAgICAgICAgIGlmIH4tcXVlcnktXFxuICAgICAgICAgICAgICAgIH4oXzEgeHMpXFxuICAgICAgICAgICAgICAgIChjb25kIH5AKGNkciAoY2RyIHhzKSkpKSkpKSkpKVxcblxcbiAgKGRlZiEgbG9vcCAoXFxuICAgIG1hY3JvKiAoZm9ybTAgZm9ybTEpXFxuICAgICAgYChsZXQqIChsb29wIChtZW1maXgqIChmbiogKGxvb3ApIChmbiogKH4oXzAgZm9ybTApKSB+Zm9ybTEpKSkpIChcXG4gICAgICAgIGxvb3AgfihfMSBmb3JtMCkpKSkpXFxuXFxuICAoZGVmISAtPiAoXFxuICAgIG1hY3JvKiAoJiB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBuaWxcXG4gICAgICAgIChsZXQqICh4IChjYXIgeHMpLCB4cyAoY2RyIHhzKSkgKFxcbiAgICAgICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgICAgIHhcXG4gICAgICAgICAgICAobGV0KiAoZm9ybSAoY2FyIHhzKSwgZm9ybXMgKGNkciB4cykpIChcXG4gICAgICAgICAgICAgIGlmIChlbXB0eT8gZm9ybXMpXFxuICAgICAgICAgICAgICAgIChpZiAobGlzdD8gZm9ybSlcXG4gICAgICAgICAgICAgICAgICAoaWYgKD0gKHN5bWJvbCBcXFwiZm4qXFxcIikgKGNhciBmb3JtKSlcXG4gICAgICAgICAgICAgICAgICAgIGAofmZvcm0gfngpXFxuICAgICAgICAgICAgICAgICAgICBgKH4oY2FyIGZvcm0pIH54IH5AKGNkciBmb3JtKSkpXFxuICAgICAgICAgICAgICAgICAgKGxpc3QgZm9ybSB4KSlcXG4gICAgICAgICAgICAgICAgYCgtPiAoLT4gfnggfmZvcm0pIH5AZm9ybXMpKSkpKSkpKVxcblxcbiAgKGRlZiEgLT4+IChcXG4gICAgbWFjcm8qICgmIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIG5pbFxcbiAgICAgICAgKGxldCogKHggKGNhciB4cyksIHhzIChjZHIgeHMpKSAoXFxuICAgICAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICAgICAgeFxcbiAgICAgICAgICAgIChsZXQqIChmb3JtIChjYXIgeHMpLCBmb3JtcyAoY2RyIHhzKSkgKFxcbiAgICAgICAgICAgICAgaWYgKGVtcHR5PyBmb3JtcylcXG4gICAgICAgICAgICAgICAgKGlmIChsaXN0PyBmb3JtKVxcbiAgICAgICAgICAgICAgICAgIChpZiAoPSAoc3ltYm9sIFxcXCJmbipcXFwiKSAoY2FyIGZvcm0pKVxcbiAgICAgICAgICAgICAgICAgICAgYCh+Zm9ybSB+eClcXG4gICAgICAgICAgICAgICAgICAgIGAofkBmb3JtIH54KSlcXG4gICAgICAgICAgICAgICAgICAobGlzdCBmb3JtIHgpKVxcbiAgICAgICAgICAgICAgICBgKC0+PiAoLT4+IH54IH5mb3JtKSB+QGZvcm1zKSkpKSkpKSlcXG5cXG4gIChkZWYhIC0+KiAobWFjcm8qICgmIHhzKSAoXFxuICAgIGxldCogKHggKGdlbnN5bSkpXFxuICAgICAgYChmbiogKH54KSAoLT4gfnggfkB4cykpKSkpXFxuXFxuICAoZGVmISAtPj4qIChtYWNybyogKCYgeHMpIChcXG4gICAgbGV0KiAoeCAoZ2Vuc3ltKSlcXG4gICAgICBgKGZuKiAofngpICgtPj4gfnggfkB4cykpKSkpXFxuXFxuICAoZGVmISBub3QgKGZuKiAoeCkgKGlmIHggZmFsc2UgdHJ1ZSkpKVxcblxcbiAgKGRlZiEgaWRlbnRpdHkgKGZuKiAoeCkgeCkpXFxuXFxuICAoZGVmISBjb25zdGFudC1mbiAoZm4qICh4KSAoZm4qICh5KSB4KSkpXFxuXFxuICAoZGVmISBjYWxsLW9uIChmbiogKCYgeHMpIChmbiogKGZuKSAoYXBwbHkgZm4geHMpKSkpXFxuXFxuICAoZGVmISBzdGVwLWludG8tbGlzdCAoXFxuICAgIGZuKiAoeHMgZm4wIGZuMSkgKFxcbiAgICAgIGxldCogKHggKGNhciB4cyksIC14cy0gKGNkciB4cykpIChcXG4gICAgICAgIGlmIChlbXB0eT8gLXhzLSlcXG4gICAgICAgICAgKGZuMSB4KVxcbiAgICAgICAgICAoZm4wIHggLXhzLSkpKSkpXFxuXFxuICAoZGVmISBhcHBseS1vbiAoXFxuICAgIGZuKiAoJiB4cykgKFxcbiAgICAgIHN0ZXAtaW50by1saXN0XFxuICAgICAgICB4c1xcbiAgICAgICAgKGZuKiAoYXJndW1lbnRzIC14cy0pIChhcHBseSAoY2FyIC14cy0pIGFyZ3VtZW50cykpXFxuICAgICAgICAoZm4qIChhcmd1bWVudHMpIChmbiogKGYpIChhcHBseSBmIGFyZ3VtZW50cykpKSkpKVxcblxcbiAgKGRlZiEgcmVkdWNlIChcXG4gICAgZm4qIChmIHNlZWQgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgc2VlZFxcbiAgICAgICAgKHJlZHVjZSBmIChmIHNlZWQgKGNhciB4cykpIChjZHIgeHMpKSkpKVxcblxcbiAgKGRlZiEgZmlsdGVyIChcXG4gICAgZm4qIChwcmVkaWNhdGUgeHMpIChcXG4gICAgICByZXZlcnNlIChcXG4gICAgICAgIHJlZHVjZVxcbiAgICAgICAgICAoZm4qIChtZW1vIHgpIChpZiAocHJlZGljYXRlIHgpIChjb25zIHggbWVtbykgbWVtbykpXFxuICAgICAgICAgICcoKVxcbiAgICAgICAgICB4cykpKSlcXG5cXG4gIChkZWYhIG1hcCAoXFxuICAgIGZuKiAoZiB4cykgKFxcbiAgICAgIHJldmVyc2UgKFxcbiAgICAgICAgcmVkdWNlXFxuICAgICAgICAgIChmbiogKG1lbW8geCkgKGNvbnMgKGYgeCkgbWVtbykpXFxuICAgICAgICAgICcoKVxcbiAgICAgICAgICB4cykpKSlcXG5cXG4gIChkZWYhIGV2ZXJ5PyAoXFxuICAgIGZuKiAocHJlZCB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICB0cnVlXFxuICAgICAgICAoaWYgKHByZWQgKGNhciB4cykpIChldmVyeT8gcHJlZCAoY2RyIHhzKSkgZmFsc2UpKSkpXFxuXFxuICAoZGVmISBzb21lPyAoXFxuICAgIGZuKiAocHJlZCB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBmYWxzZVxcbiAgICAgICAgKGlmIChwcmVkIChjYXIgeHMpKSB0cnVlIChzb21lPyBwcmVkIChjZHIgeHMpKSkpKSlcXG5cXG4gIChkZWYhIGxldG1lbXJlYyogKFxcbiAgICBtYWNybyogKGFsaWFzIGV4cHIpXFxuICAgICAgYChsZXQqIChcXG4gICAgICAgIH4oY2FyIGFsaWFzKVxcbiAgICAgICAgKG1lbWZpeCogKGZuKiAofihjYXIgYWxpYXMpKSB+KF8xIGFsaWFzKSkpKVxcbiAgICAgICAgICB+ZXhwcikpKVxcblxcbiAgKGRlZiEgc2tpcCAoXFxuICAgIGZuKiAobmJyIHhzKSAoXFxuICAgICAgbGV0cmVjKiAoXFxuICAgICAgICAtc2tpcC1cXG4gICAgICAgIChmbiogKHlzKSAoXFxuICAgICAgICAgIGxldCogKG5iciAoY2FyIHlzKSwgeHMgKF8xIHlzKSkgKFxcbiAgICAgICAgICAgIGNvbmRcXG4gICAgICAgICAgICAgICg9IDAgbmJyKSB4c1xcbiAgICAgICAgICAgICAgKD0gMSBuYnIpIChjZHIgeHMpXFxuICAgICAgICAgICAgICBcXFwiZGVmYXVsdFxcXCIgKC1za2lwLSAobGlzdCAoZGVjciBuYnIpIChjZHIgeHMpKSkpKSkpIChcXG4gICAgICAgICAgLXNraXAtIChsaXN0IG5iciB4cykpKSkpXFxuXFxuICAoZGVmISBpbnZva2FibGU/IChmbiogKHgpIChvciAoZnVuY3Rpb24/IHgpIChtYWNybz8geCkpKSlcXG5cXG4gIChkZWYhIC4gKFxcbiAgICBtYWNybyogKHgga2V5ICYgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgYChnZXQgfnggfmtleSlcXG4gICAgICAgIGAoKGdldCB+eCB+a2V5KSB+QHhzKSkpKVxcblxcbiAgKGRlZiEgLi4gKFxcbiAgICBmbiogKGxvIGhpKSAoXFxuICAgICAgbGV0cmVjKiAoXFxuICAgICAgICAtLi4tXFxuICAgICAgICAoZm4qICh4cykgKFxcbiAgICAgICAgICBsZXQqIChsbyAoXzAgeHMpLCBoaSAoXzEgeHMpLCAtbGlzdC0gKF8yIHhzKSkgKFxcbiAgICAgICAgICAgIGlmICg9IGxvIGhpKVxcbiAgICAgICAgICAgICAgKGNvbnMgaGkgLWxpc3QtKVxcbiAgICAgICAgICAgICAgKC0uLi0gKGxpc3QgbG8gKGRlY3IgaGkpIChjb25zIGhpIC1saXN0LSkpKSkpKSkgKFxcbiAgICAgICAgICAtLi4tIChsaXN0IGxvIGhpICcoKSkpKSkpXFxuXFxuICAoZGVmISBkZWZyZWMhIChcXG4gICAgbWFjcm8qIChmbi1uYW1lIGZuLWJvZHkpXFxuICAgICAgYChkZWYhIH5mbi1uYW1lIChsZXRyZWMqICh+Zm4tbmFtZSB+Zm4tYm9keSkgfmZuLW5hbWUpKSkpXFxuXFxuICAoZGVmISBmb3IqIChcXG4gICAgbWFjcm8qIChsb29wLXBhcmFtZXRlcnMgYm9keSlcXG4gICAgICBgKGxvb3BcXG4gICAgICAgICB+KF8wIGxvb3AtcGFyYW1ldGVycylcXG4gICAgICAgICAoaWYgfihfMSBsb29wLXBhcmFtZXRlcnMpXFxuICAgICAgICAgICAoZG8gfmJvZHkgKGxvb3AgfihfMiBsb29wLXBhcmFtZXRlcnMpKSlcXG4gICAgICAgICAgIG5pbCkpKSlcXG5cXG4gIChkZWYhIGZvci1lYWNoIChcXG4gICAgZm4qIChmIHhzKSAoXFxuICAgICAgcmVkdWNlIChmbiogKG1lbW8geCkgKGRvIChmIHgpIG1lbW8pKSBuaWwgeHMpKSlcXG5cXG4gIChkZWYhIG4tdGltZXMgKFxcbiAgICBmbiogKG4gZikgKFxcbiAgICAgIGxvb3BcXG4gICAgICAgIChpIDApXFxuICAgICAgICAoaWYgKD0gaSBuKVxcbiAgICAgICAgICBuaWxcXG4gICAgICAgICAgKGRvIChmIGkpIChsb29wICgrIGkgMSkpKSkpKSlcXG5cXG4gIChkZWYhIHRhcCAoZm4qIChmIHgpIChkbyAoZiB4KSB4KSkpXFxuXFxuICAoZGVmISB3aXRoLXNpZGUtZWZmZWN0IChmbiogKHRodW5rIHgpIChkbyAodGh1bmspIHgpKSlcXG5cXG4gIChkZWYhIHRodW5rIChtYWNybyogKGZvcm0pIGAoZm4qICgpIH5mb3JtKSkpXFxuXFxuICAoZGVmISBjYWxsIChtYWNybyogKGYgJiB4cykgYCh+ZiB+QHhzKSkpXFxuXFxuICAoZGVmISBhcHBseSAobWFjcm8qIChmIHhzKSBgKGV2YWwgKGNvbnMgfmYgfnhzKSkpKVxcblxcbiAgKGRlZiEgZXZhbC1zdHJpbmcgKGZuKiAoZXJsU3RyaW5nKSAoZXZhbCAocGFyc2UgZXJsU3RyaW5nKSkpKVxcblxcbiAgKGRlZiEgaW5jciAoLT4qICgrIDEpKSlcXG5cXG4gIChkZWYhIGRlY3IgKC0+KiAoLSAxKSkpXFxuXFxuICAoZGVmISB6ZXJvPyAoLT4qICg9IDApKSlcXG5cXG4gIChkZWYhIGRlZmluZWQ/IChmbiogKGlkKSAoY29udGFpbnM/ICgtZ2V0LWN1cnJlbnQtZW52LSkgaWQpKSlcXG5cXG4gIChkZWYhIFxcXFwgKG1hY3JvKiAoJiB4cykgKFxcbiAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgIG5pbFxcbiAgICAgIChsZXQqICh4IChjYXIgeHMpLCB4cyAoY2RyIHhzKSkgKFxcbiAgICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgICAgeFxcbiAgICAgICAgICBgKGZuKiAofngpIChcXFxcIH5AeHMpKSkpKSkpXFxuKVxcblwiIiwiaW1wb3J0IHsgY29tbWVudFNpZ25hbCB9IGZyb20gJy4vY29tbWVudFNpZ25hbCc7XG5cbmNvbnN0IGNyZWF0ZVRva2VuUmVnZXggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC9bXFxzLF0qKH5AfFxcI1xcK3xcXCNcXC18XFwjXFwhfFtcXFtcXF0oKXt9J2B+QF5dfFwiKD86XFxcXC58W15cXFxcXCJdKSpcInw7Lip8W15cXHNcXFtcXF0oKXt9J1wiYCw7XSopL2c7XG59O1xuXG5jb25zdCBpc0NvbW1lbnQgPSBmdW5jdGlvbihtYXRjaCkge1xuICByZXR1cm4gbWF0Y2hbMF0gPT09ICc7Jztcbn07XG5cbmNvbnN0IGlzTWVhbmluZ2Z1bCA9IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIHJldHVybiBtYXRjaCAhPT0gJyc7XG59O1xuXG5jb25zdCB0b2tlbml6ZSA9IGZ1bmN0aW9uKHNvdXJjZUNvZGUpIHtcbiAgbGV0IG1hdGNoO1xuICBjb25zdCB0b2tlblJlZ2V4ID0gY3JlYXRlVG9rZW5SZWdleCgpO1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgd2hpbGUgKGlzTWVhbmluZ2Z1bChtYXRjaCA9IHRva2VuUmVnZXguZXhlYyhzb3VyY2VDb2RlKVsxXSkpIHtcbiAgICBpZiAoaXNDb21tZW50KG1hdGNoKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKG1hdGNoKTtcbiAgfVxuICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBjb21tZW50U2lnbmFsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHRva2VuaXplIH07XG4iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJy4vcGFyc2UnO1xuaW1wb3J0IHsgdG9rZW5pemUgfSBmcm9tICcuL3Rva2VuaXplJztcblxuZXhwb3J0IGNvbnN0IHRva2VuaXplQW5kUGFyc2UgPSBmdW5jdGlvbihzb3VyY2VDb2RlKSB7XG4gIHJldHVybiBwYXJzZSh0b2tlbml6ZShzb3VyY2VDb2RlKSk7XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlRXJsTGlzdCB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgZXJsQXRvbVR5cGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGVybFR5cGVzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IGNyZWF0ZUVybEF0b20gPSBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVybFZhbHVlOiBlcmxWYWx1ZSxcbiAgICB0eXBlOiBlcmxBdG9tVHlwZVxuICB9O1xufTtcblxuY29uc3QgY3JlYXRlRXJsQm9vbGVhbiA9IGZ1bmN0aW9uKGpzQm9vbGVhbikge1xuICBpZiAoanNCb29sZWFuKSB7XG4gICAgcmV0dXJuIGVybFRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybEZhbHNlO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVFcmxJZ25vcmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGVybElnbm9yZTtcbn07XG5cbmNvbnN0IGNyZWF0ZUVybE5pbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZXJsTmlsO1xufTtcblxuY29uc3QgY3JlYXRlRXJsVmFsdWUgPSBmdW5jdGlvbihqc1ZhbHVlLCBlcmxUeXBlKSB7XG4gIHJldHVybiB7XG4gICAganNWYWx1ZToganNWYWx1ZSxcbiAgICB0eXBlOiBlcmxUeXBlXG4gIH07XG59O1xuXG5jb25zdCBjcmVhdGVGYWN0b3J5QW5kUHJlZGljYXRlID0gZnVuY3Rpb24oZXJsVHlwZSkge1xuICBjb25zdCBmYWN0b3J5ID0gZnVuY3Rpb24oanNWYWx1ZSkge1xuICAgIHJldHVybiBjcmVhdGVFcmxWYWx1ZShqc1ZhbHVlLCBlcmxUeXBlKTtcbiAgfTtcbiAgY29uc3QgcHJlZGljYXRlID0gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICByZXR1cm4gZXJsVmFsdWUudHlwZSA9PT0gZXJsVHlwZTtcbiAgfTtcbiAgcmV0dXJuIFtmYWN0b3J5LCBwcmVkaWNhdGVdO1xufTtcblxuY29uc3QgY3JlYXRlUHJlZGljYXRlID0gZnVuY3Rpb24oY29uc3RhbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBjb25zdGFudDtcbiAgfTtcbn07XG5cbmNvbnN0IGV4dHJhY3RKc1ZhbHVlID0gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgcmV0dXJuIGVybFZhbHVlLmpzVmFsdWU7XG59O1xuXG5jb25zdCBfZXJsVHlwZXMgPSBlcmxUeXBlcy5tYXAoY3JlYXRlRmFjdG9yeUFuZFByZWRpY2F0ZSk7XG5cbmNvbnN0IF9jcmVhdGVFcmxCb29sZWFuICAgICAgICAgICAgICA9IF9lcmxUeXBlc1swXVswXTtcbmNvbnN0IGlzRXJsQm9vbGVhbiAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1swXVsxXTtcbmNvbnN0IGNyZWF0ZUVybENvcmVFZmZlY3RmdWxGdW5jdGlvbiA9IF9lcmxUeXBlc1sxXVswXTtcbmNvbnN0IGlzRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uICAgICA9IF9lcmxUeXBlc1sxXVsxXTtcbmNvbnN0IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24gICAgICA9IF9lcmxUeXBlc1syXVswXTtcbmNvbnN0IGlzRXJsQ29yZVB1cmVGdW5jdGlvbiAgICAgICAgICA9IF9lcmxUeXBlc1syXVsxXTtcbmNvbnN0IGNyZWF0ZUVybElkZW50aWZpZXIgICAgICAgICAgICA9IF9lcmxUeXBlc1szXVswXTtcbmNvbnN0IGlzRXJsSWRlbnRpZmllciAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1szXVsxXTtcbmNvbnN0IGNyZWF0ZUVybEluZGV4ICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s0XVswXTtcbmNvbnN0IGlzRXJsSW5kZXggICAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s0XVsxXTtcbmNvbnN0IGNyZWF0ZUVybEtleXdvcmQgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s1XVswXTtcbmNvbnN0IGlzRXJsS2V5d29yZCAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s1XVsxXTtcbmNvbnN0IF9jcmVhdGVFcmxMaXN0ICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s2XVswXTtcbmNvbnN0IGlzRXJsTGlzdCAgICAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s2XVsxXTtcbmNvbnN0IGNyZWF0ZUVybE1hY3JvICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s3XVswXTtcbmNvbnN0IGlzRXJsTWFjcm8gICAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s3XVsxXTtcbmNvbnN0IGNyZWF0ZUVybE51bWJlciAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s4XVswXTtcbmNvbnN0IGlzRXJsTnVtYmVyICAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s4XVsxXTtcbmNvbnN0IGNyZWF0ZUVybFNwZWNpYWxGb3JtICAgICAgICAgICA9IF9lcmxUeXBlc1s5XVswXTtcbmNvbnN0IGlzRXJsU3BlY2lhbEZvcm0gICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s5XVsxXTtcbmNvbnN0IGNyZWF0ZUVybFN0cmluZyAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1sxMF1bMF07XG5jb25zdCBpc0VybFN0cmluZyAgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTBdWzFdO1xuY29uc3QgY3JlYXRlRXJsU3ltYm9sICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzExXVswXTtcbmNvbnN0IGlzRXJsU3ltYm9sICAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1sxMV1bMV07XG5jb25zdCBfY3JlYXRlRXJsVW5pdCAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTJdWzBdO1xuY29uc3QgX2lzRXJsVW5pdCAgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzEyXVsxXTtcbmNvbnN0IGNyZWF0ZUVybFVzZXJQdXJlRnVuY3Rpb24gICAgICA9IF9lcmxUeXBlc1sxM11bMF07XG5jb25zdCBpc0VybFVzZXJQdXJlRnVuY3Rpb24gICAgICAgICAgPSBfZXJsVHlwZXNbMTNdWzFdO1xuY29uc3QgX2NyZWF0ZUVybEF0b20gICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzE0XVswXTtcbmNvbnN0IGlzRXJsQXRvbSAgICAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1sxNF1bMV07XG5cbmNvbnN0IGVybElnbm9yZSA9IF9jcmVhdGVFcmxVbml0KG51bGwpO1xuXG5jb25zdCBlcmxOaWwgPSBfY3JlYXRlRXJsVW5pdChudWxsKTtcblxuY29uc3QgZXJsQm9vbGVhbnMgPSBbZmFsc2UsIHRydWVdLm1hcChfY3JlYXRlRXJsQm9vbGVhbik7XG5cbmNvbnN0IGVybEZhbHNlID0gZXJsQm9vbGVhbnNbMF07XG5jb25zdCBlcmxUcnVlICA9IGVybEJvb2xlYW5zWzFdO1xuXG5jb25zdCBwcmVkaWNhdGVzID0gW2VybEZhbHNlLCBlcmxJZ25vcmUsIGVybE5pbCwgZXJsVHJ1ZV0ubWFwKGNyZWF0ZVByZWRpY2F0ZSk7XG5cbmNvbnN0IGlzRXJsRmFsc2UgID0gcHJlZGljYXRlc1swXTtcbmNvbnN0IGlzRXJsSWdub3JlID0gcHJlZGljYXRlc1sxXTtcbmNvbnN0IGlzRXJsTmlsICAgID0gcHJlZGljYXRlc1syXTtcbmNvbnN0IGlzRXJsVHJ1ZSAgID0gcHJlZGljYXRlc1szXTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlRXJsQXRvbSxcbiAgY3JlYXRlRXJsQm9vbGVhbixcbiAgY3JlYXRlRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uLFxuICBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uLFxuICBjcmVhdGVFcmxJZGVudGlmaWVyLFxuICBjcmVhdGVFcmxJZ25vcmUsXG4gIGNyZWF0ZUVybEluZGV4LFxuICBjcmVhdGVFcmxLZXl3b3JkLFxuICBjcmVhdGVFcmxMaXN0LFxuICBjcmVhdGVFcmxNYWNybyxcbiAgY3JlYXRlRXJsTmlsLFxuICBjcmVhdGVFcmxOdW1iZXIsXG4gIGNyZWF0ZUVybFNwZWNpYWxGb3JtLFxuICBjcmVhdGVFcmxTdHJpbmcsXG4gIGNyZWF0ZUVybFN5bWJvbCxcbiAgY3JlYXRlRXJsVXNlclB1cmVGdW5jdGlvbixcbiAgZXh0cmFjdEpzVmFsdWUsXG4gIGlzRXJsQXRvbSxcbiAgaXNFcmxCb29sZWFuLFxuICBpc0VybENvcmVFZmZlY3RmdWxGdW5jdGlvbixcbiAgaXNFcmxDb3JlUHVyZUZ1bmN0aW9uLFxuICBlcmxGYWxzZSxcbiAgaXNFcmxGYWxzZSxcbiAgaXNFcmxJZGVudGlmaWVyLFxuICBlcmxJZ25vcmUsXG4gIGlzRXJsSWdub3JlLFxuICBpc0VybEluZGV4LFxuICBpc0VybEtleXdvcmQsXG4gIGlzRXJsTGlzdCxcbiAgaXNFcmxNYWNybyxcbiAgZXJsTmlsLFxuICBpc0VybE5pbCxcbiAgaXNFcmxOdW1iZXIsXG4gIGlzRXJsU3BlY2lhbEZvcm0sXG4gIGlzRXJsU3RyaW5nLFxuICBpc0VybFN5bWJvbCxcbiAgZXJsVHJ1ZSxcbiAgaXNFcmxUcnVlLFxuICBpc0VybFVzZXJQdXJlRnVuY3Rpb25cbn07XG4iLCJjb25zdCBlcmxCb29sZWFuVHlwZSAgICAgICAgICAgICAgID0gJ2VybEJvb2xlYW5UeXBlJztcbmNvbnN0IGVybENvcmVFZmZlY3RmdWxGdW5jdGlvblR5cGUgPSAnZXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uVHlwZSc7XG5jb25zdCBlcmxDb3JlUHVyZUZ1bmN0aW9uVHlwZSAgICAgID0gJ2VybENvcmVQdXJlRnVuY3Rpb25UeXBlJztcbmNvbnN0IGVybElkZW50aWZpZXJUeXBlICAgICAgICAgICAgPSAnZXJsSWRlbnRpZmllclR5cGUnO1xuY29uc3QgZXJsSW5kZXhUeXBlICAgICAgICAgICAgICAgICA9ICdlcmxJbmRleFR5cGUnO1xuY29uc3QgZXJsS2V5d29yZFR5cGUgICAgICAgICAgICAgICA9ICdlcmxLZXl3b3JkVHlwZSc7XG5jb25zdCBlcmxMaXN0VHlwZSAgICAgICAgICAgICAgICAgID0gJ2VybExpc3RUeXBlJztcbmNvbnN0IGVybE1hY3JvVHlwZSAgICAgICAgICAgICAgICAgPSAnZXJsTWFjcm9UeXBlJztcbmNvbnN0IGVybE51bWJlclR5cGUgICAgICAgICAgICAgICAgPSAnZXJsTnVtYmVyVHlwZSc7XG5jb25zdCBlcmxTcGVjaWFsRm9ybVR5cGUgICAgICAgICAgID0gJ2VybFNwZWNpYWxGb3JtVHlwZSc7XG5jb25zdCBlcmxTdHJpbmdUeXBlICAgICAgICAgICAgICAgID0gJ2VybFN0cmluZ1R5cGUnO1xuY29uc3QgZXJsU3ltYm9sVHlwZSAgICAgICAgICAgICAgICA9ICdlcmxTeW1ib2xUeXBlJztcbmNvbnN0IGVybFVuaXRUeXBlICAgICAgICAgICAgICAgICAgPSAnZXJsVW5pdFR5cGUnO1xuY29uc3QgZXJsVXNlclB1cmVGdW5jdGlvblR5cGUgICAgICA9ICdlcmxVc2VyUHVyZUZ1bmN0aW9uVHlwZSc7XG5jb25zdCBlcmxBdG9tVHlwZSAgICAgICAgICAgICAgICAgID0gJ2VybEF0b21UeXBlJztcblxuY29uc3QgZXJsVHlwZXMgPSBbXG4gIGVybEJvb2xlYW5UeXBlLFxuICBlcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb25UeXBlLFxuICBlcmxDb3JlUHVyZUZ1bmN0aW9uVHlwZSxcbiAgZXJsSWRlbnRpZmllclR5cGUsXG4gIGVybEluZGV4VHlwZSxcbiAgZXJsS2V5d29yZFR5cGUsXG4gIGVybExpc3RUeXBlLFxuICBlcmxNYWNyb1R5cGUsXG4gIGVybE51bWJlclR5cGUsXG4gIGVybFNwZWNpYWxGb3JtVHlwZSxcbiAgZXJsU3RyaW5nVHlwZSxcbiAgZXJsU3ltYm9sVHlwZSxcbiAgZXJsVW5pdFR5cGUsXG4gIGVybFVzZXJQdXJlRnVuY3Rpb25UeXBlLFxuICBlcmxBdG9tVHlwZVxuXTtcblxuZXhwb3J0IHtcbiAgZXJsQXRvbVR5cGUsXG4gIGVybEJvb2xlYW5UeXBlLFxuICBlcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb25UeXBlLFxuICBlcmxDb3JlUHVyZUZ1bmN0aW9uVHlwZSxcbiAgZXJsSWRlbnRpZmllclR5cGUsXG4gIGVybEluZGV4VHlwZSxcbiAgZXJsS2V5d29yZFR5cGUsXG4gIGVybExpc3RUeXBlLFxuICBlcmxNYWNyb1R5cGUsXG4gIGVybE51bWJlclR5cGUsXG4gIGVybFNwZWNpYWxGb3JtVHlwZSxcbiAgZXJsU3RyaW5nVHlwZSxcbiAgZXJsU3ltYm9sVHlwZSxcbiAgZXJsVHlwZXMsXG4gIGVybFVuaXRUeXBlLFxuICBlcmxVc2VyUHVyZUZ1bmN0aW9uVHlwZVxufTtcbiIsImZ1bmN0aW9uIGRpZmZBcnJheSh2YWx1ZTEsIHZhbHVlMCwgaW5kZXgpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlMCkpIHtcbiAgICByZXR1cm4geyB0cmVlOiBpbmRleCwgY29tbWFuZHM6IFtbJ3JlcGxhY2UnLCB2YWx1ZTFdXSwgaW5kZXg6IGluZGV4ICsgMSB9O1xuICB9XG5cbiAgbGV0IGNvdW50ID0gMDtcbiAgY29uc3QgbGVuZ3RoMSA9IHZhbHVlMS5sZW5ndGg7XG4gIGNvbnN0IGxlbmd0aDAgPSB2YWx1ZTAubGVuZ3RoO1xuICBjb25zdCBtaW5MZW5ndGggPSBNYXRoLm1pbihsZW5ndGgxLCBsZW5ndGgwKTtcblxuICBpZiAobWluTGVuZ3RoID4gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWluTGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmICh2YWx1ZTFbal0gIT09IHZhbHVlMFtqXSkge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb3VudCA9PT0gbWluTGVuZ3RoKSB7XG4gICAgICByZXR1cm4geyB0cmVlOiBpbmRleCwgY29tbWFuZHM6IFtbJ3JlcGxhY2UnLCB2YWx1ZTFdXSwgaW5kZXg6IGluZGV4ICsgMSB9O1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRyZWUgPSBbXTtcbiAgbGV0IGNvbW1hbmRzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaW5MZW5ndGg7IGkrKykge1xuICAgIGlmICh2YWx1ZTFbaV0gIT09IHZhbHVlMFtpXSkge1xuICAgICAgY29uc3QgX3BhdGNoID0gX2RpZmYodmFsdWUxW2ldLCB2YWx1ZTBbaV0sIGluZGV4KTtcbiAgICAgIGlmIChfcGF0Y2guY29tbWFuZHMubGVuZ3RoID4gMCkge1xuICAgICAgICB0cmVlLnB1c2goeyBpbmRleDogaSwgdmFsdWU6IF9wYXRjaC50cmVlIH0pO1xuICAgICAgICBjb21tYW5kcyA9IGNvbW1hbmRzLmNvbmNhdChfcGF0Y2guY29tbWFuZHMpO1xuICAgICAgICBpbmRleCA9IGluZGV4ICsgX3BhdGNoLmNvbW1hbmRzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDE7IGkrKykge1xuICAgIHRyZWUucHVzaCh7IGluZGV4OiBpLCB2YWx1ZTogaW5kZXggfSk7XG4gICAgY29tbWFuZHMucHVzaChbJ2luc2VydEF0RW5kJywgdmFsdWUxW2ldXSk7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGNvbnN0IHJlbW92YWxzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGgwOyBpKyspIHtcbiAgICByZW1vdmFscy51bnNoaWZ0KHsgaW5kZXg6IGksIHZhbHVlOiBpbmRleCB9KTtcbiAgICBjb21tYW5kcy5wdXNoKFsncmVtb3ZlJ10pO1xuICAgIGluZGV4Kys7XG4gIH1cblxuICByZXR1cm4geyB0cmVlOiB0cmVlLmNvbmNhdChyZW1vdmFscyksIGNvbW1hbmRzOiBjb21tYW5kcywgaW5kZXg6IGluZGV4IH07XG59XG5cbmZ1bmN0aW9uIGRpZmZPYmplY3QodmFsdWUxLCB2YWx1ZTAsIGluZGV4KSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUwKSkge1xuICAgIHJldHVybiB7XG4gICAgICB0cmVlOiBpbmRleCxcbiAgICAgIGNvbW1hbmRzOiBbWydyZXBsYWNlJywgdmFsdWUxXV0sXG4gICAgICBpbmRleDogaW5kZXggKyAxXG4gICAgfTtcbiAgfVxuXG4gIGxldCBrZXlDb3VudCA9IDA7XG4gIGxldCBkaWZmQ291bnQgPSAwO1xuXG4gIGZvciAobGV0IGtleSBpbiB2YWx1ZTApIHtcbiAgICBpZiAoIXZhbHVlMC5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcbiAgICBrZXlDb3VudCsrO1xuICAgIGlmICghdmFsdWUxLmhhc093blByb3BlcnR5KGtleSkgfHwgdmFsdWUxW2tleV0gIT09IHZhbHVlMFtrZXldKSB7XG4gICAgICBkaWZmQ291bnQrKztcbiAgICB9XG4gIH1cblxuICBpZiAoa2V5Q291bnQgPiAxICYmIGtleUNvdW50ID09PSBkaWZmQ291bnQpIHtcbiAgICByZXR1cm4geyB0cmVlOiBpbmRleCwgY29tbWFuZHM6IFtbJ3JlcGxhY2UnLCB2YWx1ZTFdXSwgaW5kZXg6IGluZGV4ICsgMSB9O1xuICB9XG5cbiAgY29uc3QgdHJlZSA9IFtdO1xuICBsZXQgY29tbWFuZHMgPSBbXTtcblxuICBmb3IgKGxldCBrZXkgaW4gdmFsdWUxKSB7XG4gICAgaWYgKCF2YWx1ZTEuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XG4gICAgaWYgKHZhbHVlMC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAodmFsdWUxW2tleV0gIT09IHZhbHVlMFtrZXldKSB7XG4gICAgICAgIGNvbnN0IF9wYXRjaCA9IF9kaWZmKHZhbHVlMVtrZXldLCB2YWx1ZTBba2V5XSwgaW5kZXgpO1xuICAgICAgICBpZiAoX3BhdGNoLmNvbW1hbmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0cmVlLnB1c2goeyBpbmRleDoga2V5LCB2YWx1ZTogX3BhdGNoLnRyZWUgfSk7XG4gICAgICAgICAgY29tbWFuZHMgPSBjb21tYW5kcy5jb25jYXQoX3BhdGNoLmNvbW1hbmRzKTtcbiAgICAgICAgICBpbmRleCA9IGluZGV4ICsgX3BhdGNoLmNvbW1hbmRzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmVlLnB1c2goeyBpbmRleDoga2V5LCB2YWx1ZTogaW5kZXggfSk7XG4gICAgICBjb21tYW5kcy5wdXNoKFsnc2V0QXRLZXknLCB2YWx1ZTFba2V5XV0pO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBrZXkgaW4gdmFsdWUwKSB7XG4gICAgaWYgKCF2YWx1ZTEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdHJlZS5wdXNoKHsgaW5kZXg6IGtleSwgdmFsdWU6IGluZGV4IH0pO1xuICAgICAgY29tbWFuZHMucHVzaChbJ2RlbGV0ZSddKTtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgdHJlZTogdHJlZSwgY29tbWFuZHM6IGNvbW1hbmRzLCBpbmRleDogaW5kZXggfTtcbn1cblxuZnVuY3Rpb24gX2RpZmYodmFsdWUxLCB2YWx1ZTAsIGluZGV4KSB7XG4gIGlmICh2YWx1ZTEgPT09IHZhbHVlMCkge1xuICAgIHJldHVybiB7IHRyZWU6IFtdLCBjb21tYW5kczogW10sIGluZGV4OiBpbmRleCB9O1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUxKSkge1xuICAgIHJldHVybiBkaWZmQXJyYXkodmFsdWUxLCB2YWx1ZTAsIGluZGV4KTtcbiAgfVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZTEpKSB7XG4gICAgcmV0dXJuIGRpZmZPYmplY3QodmFsdWUxLCB2YWx1ZTAsIGluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB7IHRyZWU6IGluZGV4LCBjb21tYW5kczogW1sncmVwbGFjZScsIHZhbHVlMV1dLCBpbmRleDogaW5kZXggKyAxIH07XG59XG5cbmNvbnN0IGRpZmYgPSBmdW5jdGlvbih2YWx1ZTEsIHZhbHVlMCkge1xuICBjb25zdCBwYXRjaCA9IF9kaWZmKHZhbHVlMSwgdmFsdWUwLCAwKTtcbiAgcmV0dXJuIHsgdmFsdWU6IHBhdGNoLnRyZWUsIGNvbW1hbmRzOiBwYXRjaC5jb21tYW5kcyB9O1xufTtcblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuZXhwb3J0IHsgZGlmZiB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCBlbGVtZW50ID0geyB0YWc6IHRhZyB9O1xuXG4gICAgaWYgKGNvbmZpZyAhPSBudWxsKSB7IC8vIGlzT2JqZWN0XG5cbiAgICAgIGZvciAobGV0IGtleSBpbiBjb25maWcpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ2lkJykge1xuICAgICAgICAgIGVsZW1lbnQuaWQgPSBjb25maWcuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09PSAnY2xhc3NlcycpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzZXMgPSBjb25maWcuY2xhc3NlcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlID0gY29uZmlnLnN0eWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ2F0dHJpYnMnKSB7XG4gICAgICAgICAgZWxlbWVudC5hdHRyaWJzID0gY29uZmlnLmF0dHJpYnM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiBpc1N0cmluZyhhcmdzWzBdKSkge1xuICAgICAgICBlbGVtZW50LmNoaWxkcmVuID0gYXJnc1swXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2hpbGRyZW4gPSBbXS5jb25jYXQuYXBwbHkoW10sIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufVxuXG5jb25zdCB0YWdzID0ge1xuICAnQSc6IHRydWUsXG4gICdCVVRUT04nOiB0cnVlLFxuICAnQ0FOVkFTJzogdHJ1ZSxcbiAgJ0NPREUnOiB0cnVlLFxuICAnRElWJzogdHJ1ZSxcbiAgJ0ZPT1RFUic6IHRydWUsXG4gICdGT1JNJzogdHJ1ZSxcbiAgJ0gxJzogdHJ1ZSxcbiAgJ0gyJzogdHJ1ZSxcbiAgJ0gzJzogdHJ1ZSxcbiAgJ0g0JzogdHJ1ZSxcbiAgJ0g1JzogdHJ1ZSxcbiAgJ0g2JzogdHJ1ZSxcbiAgJ0hFQURFUic6IHRydWUsXG4gICdJTUcnOiB0cnVlLFxuICAnTEFCRUwnOiB0cnVlLFxuICAnTEknOiB0cnVlLFxuICAnTElOSyc6IHRydWUsXG4gICdOQVYnOiB0cnVlLFxuICAnTk9TQ1JJUFQnOiB0cnVlLFxuICAnT1BUR1JPVVAnOiB0cnVlLFxuICAnT1BUSU9OJzogdHJ1ZSxcbiAgJ09VVFBVVCc6IHRydWUsXG4gICdQJzogdHJ1ZSxcbiAgJ1BBUkFNJzogdHJ1ZSxcbiAgJ1BSRSc6IHRydWUsXG4gICdTQ1JJUFQnOiB0cnVlLFxuICAnU0VDVElPTic6IHRydWUsXG4gICdTRUxFQ1QnOiB0cnVlLFxuICAnU09VUkNFJzogdHJ1ZSxcbiAgJ1NQQU4nOiB0cnVlLFxuICAnU1RZTEUnOiB0cnVlLFxuICAnVEVYVEFSRUEnOiB0cnVlXG59O1xuXG5jb25zdCBlbGVtZW50RmFjdG9yaWVzID0ge307XG5cbmZvciAobGV0IHRhZ05hbWUgaW4gdGFncykge1xuICBlbGVtZW50RmFjdG9yaWVzW3RhZ05hbWVdID0gY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbn1cblxuZXhwb3J0IGNvbnN0IEEgPSBlbGVtZW50RmFjdG9yaWVzLkE7XG5leHBvcnQgY29uc3QgQlVUVE9OID0gZWxlbWVudEZhY3Rvcmllcy5CVVRUT047XG5leHBvcnQgY29uc3QgQ0FOVkFTID0gZWxlbWVudEZhY3Rvcmllcy5DQU5WQVM7XG5leHBvcnQgY29uc3QgQ09ERSA9IGVsZW1lbnRGYWN0b3JpZXMuQ09ERTtcbmV4cG9ydCBjb25zdCBESVYgPSBlbGVtZW50RmFjdG9yaWVzLkRJVjtcbmV4cG9ydCBjb25zdCBGT09URVIgPSBlbGVtZW50RmFjdG9yaWVzLkZPT1RFUjtcbmV4cG9ydCBjb25zdCBGT1JNID0gZWxlbWVudEZhY3Rvcmllcy5GT1JNO1xuZXhwb3J0IGNvbnN0IEgxID0gZWxlbWVudEZhY3Rvcmllcy5IMTtcbmV4cG9ydCBjb25zdCBIMiA9IGVsZW1lbnRGYWN0b3JpZXMuSDI7XG5leHBvcnQgY29uc3QgSDMgPSBlbGVtZW50RmFjdG9yaWVzLkgzO1xuZXhwb3J0IGNvbnN0IEg0ID0gZWxlbWVudEZhY3Rvcmllcy5INDtcbmV4cG9ydCBjb25zdCBINSA9IGVsZW1lbnRGYWN0b3JpZXMuSDU7XG5leHBvcnQgY29uc3QgSDYgPSBlbGVtZW50RmFjdG9yaWVzLkg2O1xuZXhwb3J0IGNvbnN0IEhFQURFUiA9IGVsZW1lbnRGYWN0b3JpZXMuSEVBREVSO1xuZXhwb3J0IGNvbnN0IElNRyA9IGVsZW1lbnRGYWN0b3JpZXMuSU1HO1xuZXhwb3J0IGNvbnN0IExBQkVMID0gZWxlbWVudEZhY3Rvcmllcy5MQUJFTDtcbmV4cG9ydCBjb25zdCBMSSA9IGVsZW1lbnRGYWN0b3JpZXMuTEk7XG5leHBvcnQgY29uc3QgTElOSyA9IGVsZW1lbnRGYWN0b3JpZXMuTElOSztcbmV4cG9ydCBjb25zdCBOQVYgPSBlbGVtZW50RmFjdG9yaWVzLk5BVjtcbmV4cG9ydCBjb25zdCBOT1NDUklQVCA9IGVsZW1lbnRGYWN0b3JpZXMuTk9TQ1JJUFQ7XG5leHBvcnQgY29uc3QgT1BUR1JPVVAgPSBlbGVtZW50RmFjdG9yaWVzLk9QVEdST1VQO1xuZXhwb3J0IGNvbnN0IE9QVElPTiA9IGVsZW1lbnRGYWN0b3JpZXMuT1BUSU9OO1xuZXhwb3J0IGNvbnN0IE9VVFBVVCA9IGVsZW1lbnRGYWN0b3JpZXMuT1VUUFVUO1xuZXhwb3J0IGNvbnN0IFAgPSBlbGVtZW50RmFjdG9yaWVzLlA7XG5leHBvcnQgY29uc3QgUEFSQU0gPSBlbGVtZW50RmFjdG9yaWVzLlBBUkFNO1xuZXhwb3J0IGNvbnN0IFBSRSA9IGVsZW1lbnRGYWN0b3JpZXMuUFJFO1xuZXhwb3J0IGNvbnN0IFNDUklQVCA9IGVsZW1lbnRGYWN0b3JpZXMuU0NSSVBUO1xuZXhwb3J0IGNvbnN0IFNFQ1RJT04gPSBlbGVtZW50RmFjdG9yaWVzLlNFQ1RJT047XG5leHBvcnQgY29uc3QgU0VMRUNUID0gZWxlbWVudEZhY3Rvcmllcy5TRUxFQ1Q7XG5leHBvcnQgY29uc3QgU09VUkNFID0gZWxlbWVudEZhY3Rvcmllcy5TT1VSQ0U7XG5leHBvcnQgY29uc3QgU1BBTiA9IGVsZW1lbnRGYWN0b3JpZXMuU1BBTjtcbmV4cG9ydCBjb25zdCBTVFlMRSA9IGVsZW1lbnRGYWN0b3JpZXMuU1RZTEU7XG5leHBvcnQgY29uc3QgVEVYVEFSRUEgPSBlbGVtZW50RmFjdG9yaWVzLlRFWFRBUkVBO1xuIiwiZnVuY3Rpb24gYXR0YWNoRWxlbWVudChwYXJlbnQsIGVsZW1lbnQpIHtcbiAgaWYgKGlzU3RyaW5nKGVsZW1lbnQpKSB7XG4gICAgcGFyZW50LmlubmVyVGV4dCA9IGVsZW1lbnQ7IC8vID9cbiAgfSBlbHNlIHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQocGFyZW50LCBuZXdFbGVtZW50LCBvbGRFbGVtZW50KSB7XG4gIGlmIChpc1N0cmluZyhuZXdFbGVtZW50KSkge1xuICAgIHBhcmVudC5pbm5lclRleHQgPSBuZXdFbGVtZW50OyAvLyA/XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50LnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LCBvbGRFbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRBdHRhY2hFbGVtZW50KHBhcmVudCwgY29uZmlnKSB7XG4gIGF0dGFjaEVsZW1lbnQocGFyZW50LCBjcmVhdGVFbGVtZW50KGNvbmZpZykpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRTdWJzdGl0dXRlRWxlbWVudChwYXJlbnQsIGNvbmZpZywgb2xkRWxlbWVudEluZGV4KSB7XG4gIHJlcGxhY2VFbGVtZW50KFxuICAgIHBhcmVudCxcbiAgICBjcmVhdGVFbGVtZW50KGNvbmZpZyksXG4gICAgZmluZENoaWxkKHBhcmVudCwgeyBtb2RlOiAnaW5kZXgnLCBrZXk6IG9sZEVsZW1lbnRJbmRleCB9KSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnRzKG5vZGUsIGVsZW1lbnRzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBjcmVhdGVBbmRBdHRhY2hFbGVtZW50KG5vZGUsIGVsZW1lbnRzW2ldKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGNvbmZpZykge1xuICBpZiAoaXNTdHJpbmcoY29uZmlnKSkge1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY29uZmlnLnRhZyk7XG4gIGlmIChjb25maWcuaWQgIT0gbnVsbCkge1xuICAgIG5vZGUuaWQgPSBjb25maWcuaWQ7XG4gIH1cbiAgaWYgKGNvbmZpZy5jbGFzc2VzICE9IG51bGwpIHtcbiAgICBmb3IgKGxldCBrbGFzcyBpbiBjb25maWcuY2xhc3Nlcykge1xuICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGtsYXNzKTtcbiAgICB9XG4gIH1cbiAgaWYgKGNvbmZpZy5hdHRyaWJzICE9IG51bGwpIHtcbiAgICBmb3IgKGxldCBhdHRyaWJLZXkgaW4gY29uZmlnLmF0dHJpYnMpIHtcbiAgICAgIGlmIChhdHRyaWJLZXkgIT09ICdzdHlsZScpIHtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmliS2V5LCBjb25maWcuYXR0cmlic1thdHRyaWJLZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGNvbmZpZy5zdHlsZSAhPSBudWxsKSB7XG4gICAgZm9yIChsZXQgc3R5bGVLZXkgaW4gY29uZmlnLnN0eWxlKSB7XG4gICAgICBub2RlLnN0eWxlW3N0eWxlS2V5XSA9IGNvbmZpZy5zdHlsZVtzdHlsZUtleV07XG4gICAgfVxuICB9XG4gIGlmIChjb25maWcuY2hpbGRyZW4gIT0gbnVsbCkge1xuICAgIGlmIChpc1N0cmluZyhjb25maWcuY2hpbGRyZW4pKSB7XG4gICAgICBjcmVhdGVBbmRBdHRhY2hFbGVtZW50KG5vZGUsIGNvbmZpZy5jaGlsZHJlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChuZXdDb25maWcsIGluZGV4KSB7IFxuICAgICAgICBjcmVhdGVBbmRBdHRhY2hFbGVtZW50KG5vZGUsIG5ld0NvbmZpZyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGZpbmRDaGlsZChwYXJlbnQsIGNvbmZpZykge1xuICBzd2l0Y2ggKGNvbmZpZy5tb2RlKSB7XG4gICAgY2FzZSAnaWQnOlxuICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5rZXkpO1xuICAgIGNhc2UgJ2NsYXNzJzpcbiAgICAgIHJldHVybiBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjb25maWcua2V5LmNsYXNzKVtjb25maWcua2V5LmluZGV4XTtcbiAgICBjYXNlICd0YWcnOlxuICAgICAgcmV0dXJuIHBhcmVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShjb25maWcua2V5LnRhZylbY29uZmlnLmtleS5pbmRleF07XG4gICAgY2FzZSAncXVlcnknOlxuICAgICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZy5rZXkucXVlcnkpW2NvbmZpZy5rZXkuaW5kZXhdO1xuICAgIGNhc2UgJ2luZGV4JzpcbiAgICAgIHJldHVybiBwYXJlbnQuY2hpbGROb2Rlc1tjb25maWcua2V5XTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFxcXCJmaW5kQ2hpbGRcXFwiIG1vZGUnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kQ2hpbGRyZW4ocGFyZW50LCBjb25maWcpIHtcbiAgbGV0IGh0bWxDb2xsZWN0aW9uO1xuICBzd2l0Y2ggKGNvbmZpZy5tb2RlKSB7XG4gICAgY2FzZSAnY2xhc3MnOlxuICAgICAgaHRtbENvbGxlY3Rpb24gPSBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjb25maWcua2V5LmNsYXNzKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RhZyc6XG4gICAgICBodG1sQ29sbGVjdGlvbiA9IHBhcmVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShjb25maWcua2V5LnRhZyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdxdWVyeSc6XG4gICAgICBodG1sQ29sbGVjdGlvbiA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZy5rZXkucXVlcnkpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcXFwiZmluZENoaWxkXFxcIiBtb2RlJyk7XG4gIH1cbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGh0bWxDb2xsZWN0aW9uKTtcbn1cblxuZnVuY3Rpb24gaXNDb21tYW5kSW5kZXgodmFsdWUpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBOdW1iZXJdJztcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBTdHJpbmddJztcbn1cblxuZnVuY3Rpb24gbW9kaWZ5RWxlbWVudChub2RlLCBwYXRjaCkge1xuICBfbW9kaWZ5RWxlbWVudChub2RlLCBwYXRjaC52YWx1ZSwgcGF0Y2guY29tbWFuZHMpO1xufVxuXG5mdW5jdGlvbiBfbW9kaWZ5RWxlbWVudChub2RlLCB0cmVlLCBjb21tYW5kcykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSB0cmVlW2ldLmluZGV4O1xuICAgIGNvbnN0IGNvbnRpbnVhdGlvbiA9IHRyZWVbaV0udmFsdWU7XG5cbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSAnaWQnOlxuICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZHNbY29udGludWF0aW9uXTtcbiAgICAgICAgc3dpdGNoIChjb21tYW5kWzBdKSB7XG4gICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncmVwbGFjZSc6XG4gICAgICAgICAgY2FzZSAnc2V0QXRLZXknOlxuICAgICAgICAgICAgbm9kZS5pZCA9IGNvbW1hbmRbMV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAndGFnJzpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgZm9yIChsZXQgc3R5bGVJbmRleCA9IDA7IHN0eWxlSW5kZXggPCBjb250aW51YXRpb24ubGVuZ3RoOyBzdHlsZUluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBzdHlsZSA9IGNvbnRpbnVhdGlvbltzdHlsZUluZGV4XS5pbmRleDtcbiAgICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZHNbY29udGludWF0aW9uW3N0eWxlSW5kZXhdLnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmRbMF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICAgIG5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGUpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAgICAgY2FzZSAnc2V0QXRLZXknOlxuICAgICAgICAgICAgICBub2RlLnN0eWxlW3N0eWxlXSA9IGNvbW1hbmRbMV07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnYXR0cmlicyc6XG4gICAgICAgIGZvciAobGV0IGF0dHJpYkluZGV4ID0gMDsgYXR0cmliSW5kZXggPCBjb250aW51YXRpb24ubGVuZ3RoOyBhdHRyaWJJbmRleCsrKSB7XG4gICAgICAgICAgY29uc3QgYXR0cmliID0gY29udGludWF0aW9uW2F0dHJpYkluZGV4XS5pbmRleDtcbiAgICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZHNbY29udGludWF0aW9uW2F0dHJpYkluZGV4XS52YWx1ZV07XG4gICAgICAgICAgc3dpdGNoIChjb21tYW5kWzBdKSB7XG4gICAgICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgICBub2RlLmF0dHJpYnV0ZXMucmVtb3ZlTmFtZWRJdGVtKGF0dHJpYik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVwbGFjZSc6XG4gICAgICAgICAgICBjYXNlICdzZXRBdEtleSc6XG4gICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYiwgY29tbWFuZFsxXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnY2xhc3Nlcyc6XG4gICAgICAgIGlmIChpc0NvbW1hbmRJbmRleChjb250aW51YXRpb24pKSB7XG4gICAgICAgICAgY29uc3QgY29tbWFuZCA9IGNvbW1hbmRzWzBdO1xuICAgICAgICAgIHN3aXRjaCAoY29tbWFuZFswXSkge1xuICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgICAgZm9yIChsZXQgX2NsYXNzIGluIGNvbW1hbmRbMV0pIHtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoX2NsYXNzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NldEF0S2V5JzpcbiAgICAgICAgICAgICAgZm9yIChsZXQgX2NsYXNzIGluIGNvbW1hbmRbMV0pIHtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoX2NsYXNzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChsZXQgY2xhc3NJbmRleCA9IDA7IGNsYXNzSW5kZXggPCBjb250aW51YXRpb24ubGVuZ3RoOyBjbGFzc0luZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IF9jbGFzcyA9IGNvbnRpbnVhdGlvbltjbGFzc0luZGV4XS5pbmRleDtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kc1tjb250aW51YXRpb25bY2xhc3NJbmRleF0udmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChjb21tYW5kWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKF9jbGFzcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ3NldEF0S2V5JzpcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoX2NsYXNzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2NoaWxkcmVuJzpcbiAgICAgICAgaWYgKGlzQ29tbWFuZEluZGV4KGNvbnRpbnVhdGlvbikpIHtcbiAgICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZHNbY29udGludWF0aW9uXVxuICAgICAgICAgIHN3aXRjaCAoY29tbWFuZFswXSkge1xuICAgICAgICAgICAgY2FzZSAncmVtb3ZlJzpcbiAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGRyZW4obm9kZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVwbGFjZSc6ICAgICAvLyA/XG4gICAgICAgICAgICAgIGlmIChpc1N0cmluZyhjb21tYW5kWzFdKSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICBub2RlLmlubmVyVGV4dCA9IGNvbW1hbmRbMV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJUZXh0ID0gY29tbWFuZFsxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGRyZW4obm9kZSk7XG4gICAgICAgICAgICAgICAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudHMobm9kZSwgY29tbWFuZFsxXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpbnNlcnRBdEVuZCc6XG4gICAgICAgICAgICAgIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQobm9kZSwgY29tbWFuZFsxXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBjaGlsZEluZGV4ID0gMDsgY2hpbGRJbmRleCA8IGNvbnRpbnVhdGlvbi5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBjb250aW51YXRpb25bY2hpbGRJbmRleF0uaW5kZXg7XG4gICAgICAgICAgICBjb25zdCBjaGlsZENvbnRpbnVhdGlvbiA9IGNvbnRpbnVhdGlvbltjaGlsZEluZGV4XS52YWx1ZTtcbiAgICAgICAgICAgIGlmIChpc0NvbW1hbmRJbmRleChjaGlsZENvbnRpbnVhdGlvbikpIHtcbiAgICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IGNvbW1hbmRzW2NoaWxkQ29udGludWF0aW9uXVxuICAgICAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmRbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdyZW1vdmUnOlxuICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGQobm9kZSwgY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncmVwbGFjZSc6XG4gICAgICAgICAgICAgICAgICBjcmVhdGVBbmRTdWJzdGl0dXRlRWxlbWVudChub2RlLCBjb21tYW5kWzFdLCBjaGlsZCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdpbnNlcnRBdEVuZCc6XG4gICAgICAgICAgICAgICAgICBjcmVhdGVBbmRBdHRhY2hFbGVtZW50KG5vZGUsIGNvbW1hbmRbMV0pO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF9tb2RpZnlFbGVtZW50KG5vZGUuY2hpbGROb2Rlc1tjaGlsZF0sIGNoaWxkQ29udGludWF0aW9uLCBjb21tYW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZChub2RlLCBjaGlsZEluZGV4KSB7XG4gIHJlbW92ZU5vZGUoZmluZENoaWxkKG5vZGUsIHsgbW9kZTogJ2luZGV4Jywga2V5OiBjaGlsZEluZGV4IH0pKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4obm9kZSkge1xuICBjb25zdCBjaGlsZENvdW50ID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IGNoaWxkQ291bnQgLSAxOyBpID49IDA7IGktLSkge1xuICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5jaGlsZE5vZGVzW2ldKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcbiAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVBbmRBdHRhY2hFbGVtZW50LFxuICBtb2RpZnlFbGVtZW50XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==