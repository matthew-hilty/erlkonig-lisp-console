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

module.exports = "(do\n  (def! help (fn* () (pretty-print (\n    string\n    \"  This is a virtual terminal running a lisp interpreter.\"\n    \"\\n\"\n    \"\\n  Press <tab> for completion of keywords and defined identifers.\"\n    \"\\n  Press <Ctrl-a> to move the cursor to the begining of the line.\"\n    \"\\n  Press <Ctrl-e> to move the cursor to the end of the line.\"\n    \"\\n  Press <Ctrl-h> to delete the character preceding the cursor.\"\n    \"\\n  Press <Ctrl-l> to clear the console.\"\n    \"\\n  Press <Ctrl-u> to clear the portion of the line preceding the cursor.\"\n    \"\\n  Press <Ctrl-w> to delete the portion of a word preceding the cursor.\"\n    \"\\n      (NOTE: in Chrome, <Ctrl-w> closes the window.)\"\n    \"\\n\"\n    \"\\n  Execute `(keys (-get-current-env-))` to see a list of available, defined identifiers.\"\n    \"\\n  Execute `(example-1)` and `(example-2)` to see introductory examples.\"))))\n\n  (def! example-1 (fn* () (pretty-print (\n    string\n      \"; `time`, a simple profiling function\"\n      \"\\n(def! time! (fn* (form) (\"\n      \"\\n  let* (start (time-ms)) (\"\n      \"\\n    (let* (result (eval form))\"\n      \"\\n      { :result result, :time (- (time-ms) start) })))))\"\n      \"\\n\"\n      \"\\n; `fib`, a function that recursively determines the nth Fibonacci number\"\n      \"\\n(def! fib (fix* (fn* (k) (\"\n      \"\\n  fn* (n) (\"\n      \"\\n    cond\"\n      \"\\n      (= n 0) 1\"\n      \"\\n      (= n 1) 1\"\n      \"\\n      :else (+ (k (- n 2)) (k (- n 1))))))))\"\n      \"\\n\"\n      \"\\n; `memfib`, a memoized function that determines the nth Fibonacci number\"\n      \"\\n(def! memfib (memfix* (fn* (k) (\"\n      \"\\n  fn* (n) (\"\n      \"\\n    cond\"\n      \"\\n      (= n 0) 1\"\n      \"\\n      (= n 1) 1\"\n      \"\\n      :else (+ (k (- n 2)) (k (- n 1))))))))\"\n      \"\\n\"\n      \"\\n(time! '(map fib (.. 0 15)))\"\n      \"\\n(time! '(map memfib (.. 0 15)))\"))))\n\n  (def! example-2 (fn* () (pretty-print (\n    string\n      \"; Church numbers\"\n      \"\\n(def! _0 (with-meta (\\ f x x) 0)\"\n      \"\\n(def! _1 (with-meta (\\ f x (f x)) 1)\"\n      \"\\n(def! _2 (with-meta (\\ f x (f (f x))) 2)\"\n      \"\\n\"\n      \"\\n(meta _0)\"\n      \"\\n(meta _1)\"\n      \"\\n(meta _2)\"\n      \"\\n\"\n      \"\\n; `times10`, a simple function to test the above Church numbers\"\n      \"\\n(def! times10 (fn* (n) (* n 10)))\"\n      \"\\n\"\n      \"\\n((_0 times10) 1)\"\n      \"\\n((_1 times10) 1)\"\n      \"\\n((_2 times10) 1)\"\n      \"\\n\"\n      \"\\n; successor function\"\n      \"\\n(def! succ (fn* (n) (\"\n      \"\\n  with-meta \"\n      \"\\n    (\\ f x (f ((n f) x)))\"\n      \"\\n    (+ (meta n) 1))))\"\n      \"\\n\"\n      \"\\n; predecessor function\"\n      \"\\n(def! pred (fn* (n) (\"\n      \"\\n  with-meta\"\n      \"\\n    (\\ f x (((n (\\ g h (h (g f)))) (\\ u x)) (\\ u u)))\"\n      \"\\n    (- (meta n) 1))))\"\n      \"\\n\"\n      \"\\n(def! _4 (succ (succ _2)))\"\n      \"\\n(meta _4)\"\n      \"\\n((_4 times10) 1)\"\n      \"\\n\"\n      \"\\n(def! _3 (pred _4))\"\n      \"\\n(meta _3)\"\n      \"\\n((_3 times10) 1)\"\n    ))))\n)\n"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2dldEFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2dldEtleUNob3JkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbnRyb2wvY2hhcnMvaW50ZXJwcmV0S2V5ZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2tleUNvZGVDaGFydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29udHJvbC9jaGFycy9rZXlJZGVudGlmaWVyQ2hhcnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbnRyb2wvZ2V0Vmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29udHJvbC9pbml0aWFsaXplQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9kZXRlY3RDc3NTY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvaW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy9mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy90ZXJtaW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy92aWV3cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvZ2V0SW5pdGlhbE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL21vZGVscy90eXBlcy9jcmVhdGVGcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvdHlwZXMvY3JlYXRlUHJvbXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL21vZGVscy90eXBlcy9jcmVhdGVUZXJtaW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvdHlwZXMvY3JlYXRlVmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL3N1YnNjcmliZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvdmlldy9pbml0aWFsaXplVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L3JlY3JlYXRlQ29uc29sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZUVybGtvbmlnTGlzcENvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludHJvZHVjdGlvbi5saXNwIiwid2VicGFjazovLy8uL3NyYy9saXNwL19wcm9jZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2NvbW1lbnRTaWduYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvZW52LXV0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9lbnYwLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2VudjEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvZW52Mi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9lbnYzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2VudjQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvZXZhbHVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvZ2V0TGlzcEVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2luZGV4LXV0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9pbnRlcnByZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvanMtdXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2tleVRva2Vucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9saW5rZWQtbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9wYXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9zZXJpYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3Avc3RhbmRhcmQtZm5zLWFuZC1tYWNyb3MubGlzcCIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC90b2tlbml6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC90b2tlbml6ZUFuZFBhcnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3R5cGUtdXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3R5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yaWJvc29tZS9kaWZmLmpzIiwid2VicGFjazovLy8uL3NyYy9yaWJvc29tZS9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmlib3NvbWUvaW50ZXJwcmV0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7Ozs7QUN2THRDO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsSUFBSSxLQUFLO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVxQjs7Ozs7Ozs7Ozs7OztBQ3BHckI7QUFBQTtBQUFBO0FBQUE7QUFBZ0Q7QUFDWTs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLDZCQUE2Qix3RUFBbUI7QUFD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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQ0FBa0MsT0FBTztBQUN6QztBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBaURFOzs7Ozs7Ozs7Ozs7O0FDdkxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQzs7QUFFbkMsb0JBQW9CLCtDQUFROztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThDO0FBQ1I7QUFDSDs7QUFFbkM7QUFDQTtBQUNBO0FBQ0EsVUFBVSxrREFBVztBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQiwrQ0FBUTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBMENFOzs7Ozs7Ozs7Ozs7O0FDL0lGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFtQkU7Ozs7Ozs7Ozs7Ozs7QUNuREY7QUFBQTtBQUFBO0FBQ0E7QUFDQSxZ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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCwyRDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLGtDQUFrQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyxtQ0FBbUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGtDQUFrQyxrQ0FBa0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsa0NBQWtDLGtDQUFrQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixpQ0FBaUM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixRQUFRO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBS0UiLCJmaWxlIjoiZXJsa29uaWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbml0aWFsaXplRXJsa29uaWdMaXNwQ29uc29sZS5qc1wiKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJjb25zdCBhID0gJ2EnO1xuY29uc3QgZSA9ICdlJztcbmNvbnN0IGggPSAnaCc7XG5jb25zdCBsID0gJ2wnO1xuY29uc3QgdSA9ICd1JztcbmNvbnN0IHcgPSAndyc7XG5cbmNvbnN0IEEgPSAnQSc7XG5jb25zdCBFID0gJ0UnO1xuY29uc3QgSCA9ICdIJztcbmNvbnN0IEwgPSAnTCc7XG5jb25zdCBVID0gJ1UnO1xuY29uc3QgVyA9ICdXJztcblxuY29uc3QgYmFja3NwYWNlID0gJ0JhY2tzcGFjZSc7XG5jb25zdCBfZGVsZXRlICAgPSAnRGVsZXRlJztcbmNvbnN0IGRvd24gICAgICA9ICdBcnJvd0Rvd24nO1xuY29uc3QgZW50ZXIgICAgID0gJ0VudGVyJztcbmNvbnN0IGxlZnQgICAgICA9ICdBcnJvd0xlZnQnO1xuY29uc3QgcmlnaHQgICAgID0gJ0Fycm93UmlnaHQnO1xuY29uc3Qgc3BhY2UgICAgID0gJyAnO1xuY29uc3Qgc3BhY2ViYXIgID0gJ1NwYWNlYmFyJztcbmNvbnN0IHRhYiAgICAgICA9ICdUYWInO1xuY29uc3QgdXAgICAgICAgID0gJ0Fycm93VXAnO1xuXG5jb25zdCBjaGFyYWN0ZXJzID0gW1xuICBzcGFjZSxcbiAgJ2AnLCAnMScsICcyJywgICczJywgJzQnLCAgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcwJywgJy0nLCAnPScsXG4gICd+JywgJyEnLCAnQCcsICAnIycsICckJywgICclJywgJ14nLCAnJicsICcqJywgJygnLCAnKScsICdfJywgJysnLFxuICAnYScsICdiJywgJ2MnLCAgJ2QnLCAnZScsICAnZicsICdnJywgJ2gnLCAnaScsICdqJywgJ2snLCAnbCcsICdtJyxcbiAgJ24nLCAnbycsICdwJywgICdxJywgJ3InLCAgJ3MnLCAndCcsICd1JywgJ3YnLCAndycsICd4JywgJ3knLCAneicsXG4gICdBJywgJ0InLCAnQycsICAnRCcsICdFJywgICdGJywgJ0cnLCAnSCcsICdJJywgJ0onLCAnSycsICdMJywgJ00nLFxuICAnTicsICdPJywgJ1AnLCAgJ1EnLCAnUicsICAnUycsICdUJywgJ1UnLCAnVicsICdXJywgJ1gnLCAnWScsICdaJyxcbiAgJ1snLCAnXScsICdcXFxcJywgJzsnLCAnXFwnJywgJywnLCAnLicsICcvJyxcbiAgJ3snLCAnfScsICd8JywgICc6JywgJ1wiJywgICc8JywgJz4nLCAnPydcbl07XG5cbmZ1bmN0aW9uIGdldEFjdGlvbihrZXlDaG9yZCkge1xuICBjb25zdCB2YWx1ZSA9IGtleUNob3JkLnZhbHVlO1xuXG4gIGlmIChrZXlDaG9yZC5jdHJsS2V5KSB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSBhOlxuICAgICAgY2FzZSBBOlxuICAgICAgICByZXR1cm4gd3JhcCgnbW92ZUN1cnNvclRvU3RhcnQnKTtcbiAgICAgIGNhc2UgZTpcbiAgICAgIGNhc2UgRTpcbiAgICAgICAgcmV0dXJuIHdyYXAoJ21vdmVDdXJzb3JUb0VuZCcpO1xuICAgICAgY2FzZSBoOlxuICAgICAgY2FzZSBIOlxuICAgICAgICByZXR1cm4gd3JhcCgnZGVsZXRlTGVmdENoYXInKTtcbiAgICAgIGNhc2UgbDpcbiAgICAgIGNhc2UgTDpcbiAgICAgICAgcmV0dXJuIHdyYXAoJ2NsZWFyJyk7XG4gICAgICBjYXNlIHU6XG4gICAgICBjYXNlIFU6XG4gICAgICAgIHJldHVybiB3cmFwKCdkZWxldGVQcmVDdXJzb3InKTtcbiAgICAgIGNhc2UgdzpcbiAgICAgIGNhc2UgVzpcbiAgICAgICAgcmV0dXJuIHdyYXAoJ2RlbGV0ZVdvcmQnKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB3cmFwKCdub09wJyk7XG4gICAgfVxuICB9XG5cbiAgc3dpdGNoICh2YWx1ZSkge1xuICAgIGNhc2UgZW50ZXI6XG4gICAgICByZXR1cm4gd3JhcCgnc3VibWl0Jyk7XG4gICAgY2FzZSBiYWNrc3BhY2U6XG4gICAgICByZXR1cm4gd3JhcCgnZGVsZXRlTGVmdENoYXInKTtcbiAgICBjYXNlIGxlZnQ6XG4gICAgICByZXR1cm4gd3JhcCgnbW92ZUN1cnNvckxlZnQnKTtcbiAgICBjYXNlIHJpZ2h0OlxuICAgICAgcmV0dXJuIHdyYXAoJ21vdmVDdXJzb3JSaWdodCcpO1xuICAgIGNhc2UgdXA6XG4gICAgICByZXR1cm4gd3JhcCgncmV3aW5kJyk7XG4gICAgY2FzZSBkb3duOlxuICAgICAgcmV0dXJuIHdyYXAoJ2Zhc3RGb3J3YXJkJyk7XG4gICAgY2FzZSBfZGVsZXRlOlxuICAgICAgcmV0dXJuIHdyYXAoJ2RlbGV0ZVJpZ2h0Q2hhcicpO1xuICAgIGNhc2UgdGFiOlxuICAgICAgcmV0dXJuIHdyYXAoJ2NvbXBsZXRlV29yZCcpO1xuICAgIGNhc2Ugc3BhY2U6XG4gICAgY2FzZSBzcGFjZWJhcjpcbiAgICAgIHJldHVybiB7IG5hbWU6ICdhZGRDaGFyJywgY2hhcjogJyAnIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBpc0NoYXJhY3Rlcih2YWx1ZSlcbiAgICAgICAgPyB7IG5hbWU6ICdhZGRDaGFyJywgY2hhcjogdmFsdWUgfVxuICAgICAgICA6IHdyYXAoJ25vT3AnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0NoYXJhY3Rlcih2YWx1ZSkge1xuICByZXR1cm4gY2hhcmFjdGVycy5pbmRleE9mKHZhbHVlKSA+PSAwO1xufVxuXG5mdW5jdGlvbiB3cmFwKGFjdGlvbk5hbWUpIHtcbiAgcmV0dXJuIHsgbmFtZTogYWN0aW9uTmFtZSB9O1xufVxuXG5leHBvcnQgeyBnZXRBY3Rpb24gfTtcbiIsImltcG9ydCB7IGtleUNvZGVDaGFydHMgfSBmcm9tICcuL2tleUNvZGVDaGFydHMnO1xuaW1wb3J0IHsga2V5SWRlbnRpZmllckNoYXJ0cyB9IGZyb20gJy4va2V5SWRlbnRpZmllckNoYXJ0cyc7XG5cbmZ1bmN0aW9uIGdldEV2ZW50UHJveHkoa2luZCwgZXZlbnQpIHtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogZXZlbnRba2luZF0sXG4gICAgYWx0S2V5OiBldmVudC5hbHRLZXksXG4gICAgY3RybEtleTogZXZlbnQuY3RybEtleSxcbiAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXlcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGlkZW50aXR5KGV2ZW50KSB7XG4gIHJldHVybiBldmVudDtcbn1cblxuZnVuY3Rpb24gZ2V0S2V5Q2hvcmQoZXZlbnQpIHtcbiAgbGV0IG5vcm1hbGl6ZTtcbiAgbGV0IHByb3BlcnR5O1xuXG4gIGlmIChldmVudC5rZXkgIT0gbnVsbCkge1xuICAgIHByb3BlcnR5ID0gJ2tleSc7XG4gICAgbm9ybWFsaXplID0gaWRlbnRpdHk7XG4gIH0gZWxzZSBpZiAoZXZlbnQua2V5SWRlbnRpZmllciAhPSBudWxsKSB7XG4gICAgcHJvcGVydHkgPSAna2V5SWRlbnRpZmllcic7XG4gICAgbm9ybWFsaXplID0gX2dldEtleUNob3JkKGtleUlkZW50aWZpZXJDaGFydHMpO1xuICB9IGVsc2Uge1xuICAgIHByb3BlcnR5ID0gJ2tleUNvZGUnO1xuICAgIG5vcm1hbGl6ZSA9IF9nZXRLZXlDaG9yZChrZXlDb2RlQ2hhcnRzKTtcbiAgfVxuXG4gIHJldHVybiBub3JtYWxpemUoZ2V0RXZlbnRQcm94eShwcm9wZXJ0eSwgZXZlbnQpKTtcbn1cblxuZnVuY3Rpb24gX2dldEtleUNob3JkKGNvbnZlcnNpb25DaGFydHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogZ2V0S2V5Q2hvcmRWYWx1ZShjb252ZXJzaW9uQ2hhcnRzLCBldmVudC52YWx1ZSwgZXZlbnQuc2hpZnRLZXkpLFxuICAgICAgYWx0S2V5OiBldmVudC5hbHRLZXksXG4gICAgICBjdHJsS2V5OiBldmVudC5jdHJsS2V5LFxuICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0S2V5Q2hvcmRWYWx1ZShjb252ZXJzaW9uQ2hhcnRzLCB2YWx1ZSwgc2hpZnRLZXkpIHtcbiAgY29uc3Qga2V5ID0gc2hpZnRLZXkgPyAnd2l0aFNoaWZ0JyA6ICd3aXRob3V0U2hpZnQnO1xuICByZXR1cm4gY29udmVyc2lvbkNoYXJ0c1trZXldW3ZhbHVlXTtcbn1cblxuZXhwb3J0IHsgZ2V0S2V5Q2hvcmQgfTtcbiIsImltcG9ydCB7IGdldEFjdGlvbiB9IGZyb20gJy4vZ2V0QWN0aW9uJztcbmltcG9ydCB7IGdldEtleUNob3JkIH0gZnJvbSAnLi9nZXRLZXlDaG9yZCc7XG5cbmZ1bmN0aW9uIGludGVycHJldEtleWRvd24oZXZlbnQpIHtcbiAgcmV0dXJuIGdldEFjdGlvbihnZXRLZXlDaG9yZChldmVudCkpO1xufVxuXG5leHBvcnQgeyBpbnRlcnByZXRLZXlkb3duIH07XG4iLCJjb25zdCBrZXlDb2RlQ2hhcnRzID0ge1xuICB3aXRoU2hpZnQ6IHtcbiAgICA4ICA6ICdCYWNrc3BhY2UnLFxuICAgIDkgIDogJ1RhYicsXG4gICAgMTMgOiAnRW50ZXInLFxuICAgIDMyIDogJyAnLFxuICAgIDM3IDogJ0Fycm93TGVmdCcsXG4gICAgMzggOiAnQXJyb3dVcCcsXG4gICAgMzkgOiAnQXJyb3dSaWdodCcsXG4gICAgNDAgOiAnQXJyb3dEb3duJyxcbiAgICA0NiA6ICdEZWxldGUnLFxuICAgIDQ4IDogJyknLFxuICAgIDQ5IDogJyEnLFxuICAgIDUwIDogJ0AnLFxuICAgIDUxIDogJyMnLFxuICAgIDUyIDogJyQnLFxuICAgIDUzIDogJyUnLFxuICAgIDU0IDogJ14nLFxuICAgIDU1IDogJyYnLFxuICAgIDU2IDogJyonLFxuICAgIDU3IDogJygnLFxuICAgIDU5IDogJzonLFxuICAgIDYxIDogJysnLFxuICAgIDY1IDogJ0EnLFxuICAgIDY2IDogJ0InLFxuICAgIDY3IDogJ0MnLFxuICAgIDY4IDogJ0QnLFxuICAgIDY5IDogJ0UnLFxuICAgIDcwIDogJ0YnLFxuICAgIDcxIDogJ0cnLFxuICAgIDcyIDogJ0gnLFxuICAgIDczIDogJ0knLFxuICAgIDc0IDogJ0onLFxuICAgIDc1IDogJ0snLFxuICAgIDc2IDogJ0wnLFxuICAgIDc3IDogJ00nLFxuICAgIDc4IDogJ04nLFxuICAgIDc5IDogJ08nLFxuICAgIDgwIDogJ1AnLFxuICAgIDgxIDogJ1EnLFxuICAgIDgyIDogJ1InLFxuICAgIDgzIDogJ1MnLFxuICAgIDg0IDogJ1QnLFxuICAgIDg1IDogJ1UnLFxuICAgIDg2IDogJ1YnLFxuICAgIDg3IDogJ1cnLFxuICAgIDg4IDogJ1gnLFxuICAgIDg5IDogJ1knLFxuICAgIDkwIDogJ1onLFxuICAgIDE3MzogJ18nLFxuICAgIDE4ODogJzwnLFxuICAgIDE5MDogJz4nLFxuICAgIDE5MTogJz8nLFxuICAgIDE5MjogJ34nLFxuICAgIDIxOTogJ3snLFxuICAgIDIyMDogJ3wnLFxuICAgIDIyMTogJ30nLFxuICAgIDIyMjogJ1wiJ1xuICB9LFxuICB3aXRob3V0U2hpZnQ6IHtcbiAgICA4ICA6ICdCYWNrc3BhY2UnLFxuICAgIDkgIDogJ1RhYicsXG4gICAgMTMgOiAnRW50ZXInLFxuICAgIDMyIDogJyAnLFxuICAgIDM3IDogJ0Fycm93TGVmdCcsXG4gICAgMzggOiAnQXJyb3dVcCcsXG4gICAgMzkgOiAnQXJyb3dSaWdodCcsXG4gICAgNDAgOiAnQXJyb3dEb3duJyxcbiAgICA0NiA6ICdEZWxldGUnLFxuICAgIDQ4OiAnMCcsXG4gICAgNDk6ICcxJyxcbiAgICA1MDogJzInLFxuICAgIDUxOiAnMycsXG4gICAgNTI6ICc0JyxcbiAgICA1MzogJzUnLFxuICAgIDU0OiAnNicsXG4gICAgNTU6ICc3JyxcbiAgICA1NjogJzgnLFxuICAgIDU3OiAnOScsXG4gICAgNTk6ICc7JyxcbiAgICA2MTogJz0nLFxuICAgIDY1OiAnYScsXG4gICAgNjY6ICdiJyxcbiAgICA2NzogJ2MnLFxuICAgIDY4OiAnZCcsXG4gICAgNjk6ICdlJyxcbiAgICA3MDogJ2YnLFxuICAgIDcxOiAnZycsXG4gICAgNzI6ICdoJyxcbiAgICA3MzogJ2knLFxuICAgIDc0OiAnaicsXG4gICAgNzU6ICdrJyxcbiAgICA3NjogJ2wnLFxuICAgIDc3OiAnbScsXG4gICAgNzg6ICduJyxcbiAgICA3OTogJ28nLFxuICAgIDgwOiAncCcsXG4gICAgODE6ICdxJyxcbiAgICA4MjogJ3InLFxuICAgIDgzOiAncycsXG4gICAgODQ6ICd0JyxcbiAgICA4NTogJ3UnLFxuICAgIDg2OiAndicsXG4gICAgODc6ICd3JyxcbiAgICA4ODogJ3gnLFxuICAgIDg5OiAneScsXG4gICAgOTA6ICd6JyxcbiAgICAxNzM6ICctJyxcbiAgICAxODg6ICcsJyxcbiAgICAxOTA6ICcuJyxcbiAgICAxOTE6ICcvJyxcbiAgICAxOTI6ICdgJyxcbiAgICAyMTk6ICdbJyxcbiAgICAyMjA6ICdcXFxcJyxcbiAgICAyMjE6ICddJyxcbiAgICAyMjI6ICdcXCcnXG4gIH1cbn07XG5cbmV4cG9ydCB7IGtleUNvZGVDaGFydHMgfTtcbiIsImNvbnN0IGtleUlkZW50aWZpZXJDaGFydHMgPSB7XG4gIHdpdGhvdXRTaGlmdDoge1xuICAgICdVKzAwNDEnOiAnYScsXG4gICAgJ1UrMDA0Mic6ICdiJyxcbiAgICAnVSswMDQzJzogJ2MnLFxuICAgICdVKzAwNDQnOiAnZCcsXG4gICAgJ1UrMDA0NSc6ICdlJyxcbiAgICAnVSswMDQ2JzogJ2YnLFxuICAgICdVKzAwNDcnOiAnZycsXG4gICAgJ1UrMDA0OCc6ICdoJyxcbiAgICAnVSswMDQ5JzogJ2knLFxuICAgICdVKzAwNEEnOiAnaicsXG4gICAgJ1UrMDA0Qic6ICdrJyxcbiAgICAnVSswMDRDJzogJ2wnLFxuICAgICdVKzAwNEQnOiAnbScsXG4gICAgJ1UrMDA0RSc6ICduJyxcbiAgICAnVSswMDRGJzogJ28nLFxuICAgICdVKzAwNTAnOiAncCcsXG4gICAgJ1UrMDA1MSc6ICdxJyxcbiAgICAnVSswMDUyJzogJ3InLFxuICAgICdVKzAwNTMnOiAncycsXG4gICAgJ1UrMDA1NCc6ICd0JyxcbiAgICAnVSswMDU1JzogJ3UnLFxuICAgICdVKzAwNTYnOiAndicsXG4gICAgJ1UrMDA1Nyc6ICd3JyxcbiAgICAnVSswMDU4JzogJ3gnLFxuICAgICdVKzAwNTknOiAneScsXG4gICAgJ1UrMDA1QSc6ICd6JyxcbiAgICAnVSswMDMwJzogJzAnLFxuICAgICdVKzAwMzEnOiAnMScsXG4gICAgJ1UrMDAzMic6ICcyJyxcbiAgICAnVSswMDMzJzogJzMnLFxuICAgICdVKzAwMzQnOiAnNCcsXG4gICAgJ1UrMDAzNSc6ICc1JyxcbiAgICAnVSswMDM2JzogJzYnLFxuICAgICdVKzAwMzcnOiAnNycsXG4gICAgJ1UrMDAzOCc6ICc4JyxcbiAgICAnVSswMDM5JzogJzknLFxuICAgICdVKzAwQzAnOiAnYCcsXG4gICAgJ1UrMDBCRCc6ICctJyxcbiAgICAnVSswMEJCJzogJz0nLFxuICAgICdVKzAwREInOiAnWycsXG4gICAgJ1UrMDBERCc6ICddJyxcbiAgICAnVSswMERDJzogJ1xcXFwnLFxuICAgICdVKzAwQkEnOiAnOycsXG4gICAgJ1UrMDBERSc6ICdcXCcnLFxuICAgICdVKzAwQkMnOiAnLCcsXG4gICAgJ1UrMDBCRSc6ICcuJyxcbiAgICAnVSswMEJGJzogJy8nLFxuICAgICdVKzAwMjAnOiAnICcsXG4gICAgJ1UrMDAwOCc6ICdCYWNrc3BhY2UnLFxuICAgICdVKzAwNzUnOiAnRGVsZXRlJyxcbiAgICAnRG93bicgIDogJ0Fycm93RG93bicsXG4gICAgJ0VudGVyJyA6ICdFbnRlcicsXG4gICAgJ0xlZnQnICA6ICdBcnJvd0xlZnQnLFxuICAgICdSaWdodCcgOiAnQXJyb3dSaWdodCcsXG4gICAgJ1UrMDAyMCc6ICcgJyxcbiAgICAnVSswMDA5JzogJ1RhYicsXG4gICAgJ1VwJyAgICA6ICdBcnJvd1VwJ1xuICB9LFxuICB3aXRoU2hpZnQ6IHtcbiAgICAnVSswMDQxJzogJ0EnLFxuICAgICdVKzAwNDInOiAnQicsXG4gICAgJ1UrMDA0Myc6ICdDJyxcbiAgICAnVSswMDQ0JzogJ0QnLFxuICAgICdVKzAwNDUnOiAnRScsXG4gICAgJ1UrMDA0Nic6ICdGJyxcbiAgICAnVSswMDQ3JzogJ0cnLFxuICAgICdVKzAwNDgnOiAnSCcsXG4gICAgJ1UrMDA0OSc6ICdJJyxcbiAgICAnVSswMDRBJzogJ0onLFxuICAgICdVKzAwNEInOiAnSycsXG4gICAgJ1UrMDA0Qyc6ICdMJyxcbiAgICAnVSswMDREJzogJ00nLFxuICAgICdVKzAwNEUnOiAnTicsXG4gICAgJ1UrMDA0Ric6ICdPJyxcbiAgICAnVSswMDUwJzogJ1AnLFxuICAgICdVKzAwNTEnOiAnUScsXG4gICAgJ1UrMDA1Mic6ICdSJyxcbiAgICAnVSswMDUzJzogJ1MnLFxuICAgICdVKzAwNTQnOiAnVCcsXG4gICAgJ1UrMDA1NSc6ICdVJyxcbiAgICAnVSswMDU2JzogJ1YnLFxuICAgICdVKzAwNTcnOiAnVycsXG4gICAgJ1UrMDA1OCc6ICdYJyxcbiAgICAnVSswMDU5JzogJ1knLFxuICAgICdVKzAwNUEnOiAnWicsXG4gICAgJ1UrMDAzMCc6ICcpJyxcbiAgICAnVSswMDMxJzogJyEnLFxuICAgICdVKzAwMzInOiAnQCcsXG4gICAgJ1UrMDAzMyc6ICcjJyxcbiAgICAnVSswMDM0JzogJyQnLFxuICAgICdVKzAwMzUnOiAnJScsXG4gICAgJ1UrMDAzNic6ICdeJyxcbiAgICAnVSswMDM3JzogJyYnLFxuICAgICdVKzAwMzgnOiAnKicsXG4gICAgJ1UrMDAzOSc6ICcoJyxcbiAgICAnVSswMEMwJzogJ34nLFxuICAgICdVKzAwQkQnOiAnXycsXG4gICAgJ1UrMDBCQic6ICcrJyxcbiAgICAnVSswMERCJzogJ3snLFxuICAgICdVKzAwREQnOiAnfScsXG4gICAgJ1UrMDBEQyc6ICd8JyxcbiAgICAnVSswMEJBJzogJzonLFxuICAgICdVKzAwREUnOiAnXCInLFxuICAgICdVKzAwQkMnOiAnPCcsXG4gICAgJ1UrMDBCRSc6ICc+JyxcbiAgICAnVSswMEJGJzogJz8nLFxuICAgICdVKzAwMjAnOiAnICcsXG4gICAgJ1UrMDAwOCc6ICdCYWNrc3BhY2UnLFxuICAgICdVKzAwNzUnOiAnRGVsZXRlJyxcbiAgICAnRG93bicgIDogJ0Fycm93RG93bicsXG4gICAgJ0VudGVyJyA6ICdFbnRlcicsXG4gICAgJ0xlZnQnICA6ICdBcnJvd0xlZnQnLFxuICAgICdSaWdodCcgOiAnQXJyb3dSaWdodCcsXG4gICAgJ1UrMDAyMCc6ICcgJyxcbiAgICAnVSswMDA5JzogJ1RhYicsXG4gICAgJ1VwJyAgICA6ICdBcnJvd1VwJ1xuICB9XG59O1xuXG5leHBvcnQgeyBrZXlJZGVudGlmaWVyQ2hhcnRzIH07XG4iLCJpbXBvcnQgeyBWaWV3cG9ydCB9IGZyb20gJy4uL21vZGVscy9hY3Rpb25zL3ZpZXdwb3J0JztcblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnQoYWN0aW9uLCBjb25maWcpIHtcbiAgY29uc3QgY29tbWFuZCA9IGFjdGlvbi5uYW1lO1xuICBjb25zdCB2aWV3cG9ydCA9IGNvbmZpZy52aWV3cG9ydDtcbiAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgY2FzZSAnYWRkQ2hhcic6XG4gICAgICByZXR1cm4gVmlld3BvcnQuYWRkQ2hhcih2aWV3cG9ydCwgYWN0aW9uLmNoYXIpO1xuICAgIGNhc2UgJ2NvbXBsZXRlV29yZCc6XG4gICAgICByZXR1cm4gVmlld3BvcnQuY29tcGxldGVXb3JkKHZpZXdwb3J0LCBjb25maWcuZ2V0Q2FuZGlkYXRlcyk7XG4gICAgY2FzZSAnbm9PcCc6XG4gICAgICByZXR1cm4gdmlld3BvcnQ7XG4gICAgY2FzZSAnc3VibWl0JzpcbiAgICAgIHJldHVybiBWaWV3cG9ydC5zdWJtaXQodmlld3BvcnQsIGNvbmZpZy50cmFuc2Zvcm0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gVmlld3BvcnRbY29tbWFuZF0odmlld3BvcnQpO1xuICB9XG59XG5cbmV4cG9ydCB7IGdldFZpZXdwb3J0IH07XG4iLCJpbXBvcnQgeyBnZXRWaWV3cG9ydCB9IGZyb20gJy4vZ2V0Vmlld3BvcnQnO1xuaW1wb3J0IHsgaW50ZXJwcmV0S2V5ZG93biB9IGZyb20gJy4vY2hhcnMvaW50ZXJwcmV0S2V5ZG93bic7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVDb250cm9sKHN1YnNjcmliZSwgcmVuZGVyLCBjb25maWcpIHtcbiAgY29uc3QgaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZ2V0QWN0aW9uKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmVuZGVyKGdldFZpZXdwb3J0KGdldEFjdGlvbihldmVudCksIGNvbmZpZykpO1xuICAgIH07XG4gIH1cblxuICBzdWJzY3JpYmUoJ2tleWRvd24nLCBoYW5kbGVFdmVudChpbnRlcnByZXRLZXlkb3duKSk7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxpemVDb250cm9sIH07XG4iLCJjb25zdCBfbm9kZUlkICAgICA9ICcjZXJsLWNzcy1zY3JvbGxiYXItdGVzdC1kaXYnO1xuY29uc3QgX3ByZWZpeGVzICAgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJy1vLScsICctbXMtJ107XG5jb25zdCBfcHNldWRvICAgICA9ICc6Oic7XG5jb25zdCBfc2Nyb2xsYmFyICA9ICdzY3JvbGxiYXInO1xuY29uc3QgX3dpZHRoMTBweCAgPSAne3dpZHRoOjEwcHg7fSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVJ1bGUocHJlZml4KSB7XG4gIHJldHVybiBfbm9kZUlkICsgX3BzZXVkbyArIHByZWZpeCArIF9zY3JvbGxiYXIgKyBfd2lkdGgxMHB4O1xufVxuXG5mdW5jdGlvbiBfZGV0ZWN0Q3NzU2Nyb2xsYmFyKHN0eWxlUnVsZSkge1xuICBjb25zdCBib2R5ID0gZ2V0Qm9keSgpO1xuICBjb25zdCBkb2NFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub2RlLmlkID0gJ2VybC1jc3Mtc2Nyb2xsYmFyLXRlc3QtZGl2JztcbiAgZGl2LmFwcGVuZENoaWxkKG5vZGUpO1xuICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuICBzdHlsZS5pZCA9ICdlcmwtY3NzLXNjcm9sbGJhci10ZXN0LXN0eWxlJztcbiAgY29uc3Qgbm9uY2VOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njcm9sbGJhci1ub25jZScpO1xuICBjb25zdCBub25jZSA9IG5vbmNlTm9kZS5kYXRhc2V0WydzY3JvbGxiYXJOb25jZSddO1xuICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgbm9uY2UpO1xuXG4gIChib2R5LmZha2UgPyBib2R5IDogZGl2KS5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gc3R5bGVSdWxlO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlUnVsZSkpO1xuICB9XG5cbiAgZGl2LmlkID0gJ2VybC1jc3Mtc2Nyb2xsLXRlc3QnO1xuXG4gIGlmIChib2R5LmZha2UpIHtcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgY29uc3QgZG9jT3ZlcmZsb3cgPSBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93O1xuICAgIGRvY0VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBkb2NFbGVtZW50LmFwcGVuZENoaWxkKGJvZHkpO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gaGFzQ3NzU2Nyb2xsYmFyKG5vZGUsIDMwKTtcblxuICBpZiAoYm9keS5mYWtlKSB7XG4gICAgYm9keS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJvZHkpO1xuICAgIGRvY0VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBkb2NPdmVyZmxvdztcbiAgICBkb2NFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgfSBlbHNlIHtcbiAgICBkaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXYpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZGV0ZWN0Q3NzU2Nyb2xsYmFyKCkge1xuICBjb25zdCBjc3NTY3JvbGxiYXIgPVxuICAgIF9ub2RlSWQgKyAne292ZXJmbG93OnNjcm9sbDt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O30nICtcbiAgICBfcHJlZml4ZXMubWFwKGNyZWF0ZVJ1bGUpLmpvaW4oJycpICtcbiAgICBjcmVhdGVSdWxlKCcnKTtcblxuICByZXR1cm4gX2RldGVjdENzc1Njcm9sbGJhcihjc3NTY3JvbGxiYXIpO1xufVxuXG5mdW5jdGlvbiBnZXRCb2R5KCkge1xuICBsZXQgX2JvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4gIGlmICghX2JvZHkpIHtcbiAgICBjb25zdCBpc1N2ZyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJztcbiAgICBfYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXNTdmcgPyAnc3ZnJyA6ICdib2R5Jyk7XG4gICAgX2JvZHkuZmFrZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX2JvZHk7XG59XG5cbmZ1bmN0aW9uIGhhc0Nzc1Njcm9sbGJhcihub2RlLCBleHBlY3RlZFdpZHRoKSB7XG4gIHJldHVybiAnc2Nyb2xsV2lkdGgnIGluIG5vZGUgJiYgbm9kZS5zY3JvbGxXaWR0aCA9PT0gZXhwZWN0ZWRXaWR0aDtcbn1cblxuZXhwb3J0IHsgZGV0ZWN0Q3NzU2Nyb2xsYmFyIH07XG4iLCJpbXBvcnQgeyBkZXRlY3RDc3NTY3JvbGxiYXIgfSAgZnJvbSAnLi9kZXRlY3RDc3NTY3JvbGxiYXInO1xuaW1wb3J0IHsgZ2V0SW5pdGlhbE1vZGVsIH0gICAgIGZyb20gJy4vbW9kZWxzL2dldEluaXRpYWxNb2RlbCc7XG5pbXBvcnQgeyBFUkxLSU5HIH0gICAgICAgICAgICAgZnJvbSAnLi92aWV3L3JlY3JlYXRlQ29uc29sZSc7XG5pbXBvcnQgeyBpbml0aWFsaXplQ29udHJvbCB9ICAgZnJvbSAnLi9jb250cm9sL2luaXRpYWxpemVDb250cm9sJztcbmltcG9ydCB7IGluaXRpYWxpemVWaWV3IH0gICAgICBmcm9tICcuL3ZpZXcvaW5pdGlhbGl6ZVZpZXcnO1xuaW1wb3J0IHsgcmVuZGVyIH0gICAgICAgICAgICAgIGZyb20gJy4vcmVuZGVyJztcbmltcG9ydCB7IHNjcm9sbCB9ICAgICAgICAgICAgICBmcm9tICcuL3ZpZXcvc2Nyb2xsJztcbmltcG9ydCB7IHN1YnNjcmliZSB9ICAgICAgICAgICBmcm9tICcuL3N1YnNjcmliZSc7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoY29uZmlnKSB7XG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcubm9kZUlkKTtcbiAgY29uc3QgaW5pdGlhbE1vZGVsID0gZ2V0SW5pdGlhbE1vZGVsKGNvbmZpZy5pbml0aWFsTW9kZWxEYXRhKTtcbiAgY29uc3QgcHJvbXB0TGFiZWwgPSBjb25maWcucHJvbXB0TGFiZWw7XG4gIGNvbnN0IGxhYmVscyA9IHsgcHJvbXB0TGFiZWw6IHByb21wdExhYmVsIH07XG4gIGNvbnN0IHZpZXdNb2RlbCA9IEVSTEtJTkcobGFiZWxzLCBpbml0aWFsTW9kZWwpO1xuXG4gIGluaXRpYWxpemVWaWV3KHJvb3QsIHZpZXdNb2RlbCk7XG5cbiAgY29uc3Qgcm9vdENoaWxkID0gcm9vdC5jaGlsZE5vZGVzWzBdO1xuXG4gIGNvbnN0IGNvbnRyb2xDb25maWcgPSB7XG4gICAgZ2V0Q2FuZGlkYXRlczogY29uZmlnLmdldENhbmRpZGF0ZXMsXG4gICAgcHJvbXB0TGFiZWw6IHByb21wdExhYmVsLFxuICAgIHRyYW5zZm9ybTogY29uZmlnLnRyYW5zZm9ybSxcbiAgICB2aWV3cG9ydDogaW5pdGlhbE1vZGVsXG4gIH07XG5cbiAgY29uc3QgY3NzU2Nyb2xsYmFyRGV0ZWN0ZWQgPSBkZXRlY3RDc3NTY3JvbGxiYXIoKTtcblxuICBzZXRTY3JvbGxiYXJWaXNpYmlsaXR5KGNzc1Njcm9sbGJhckRldGVjdGVkKTtcblxuICBjb25zdCBfc2Nyb2xsID0gc2Nyb2xsKGNzc1Njcm9sbGJhckRldGVjdGVkKTtcblxuICBpbml0aWFsaXplQ29udHJvbChcbiAgICBzdWJzY3JpYmUsXG4gICAgcmVuZGVyKHZpZXdNb2RlbCwgcm9vdENoaWxkLCBjb250cm9sQ29uZmlnLCBfc2Nyb2xsKSxcbiAgICBjb250cm9sQ29uZmlnKTtcbn1cblxuZnVuY3Rpb24gc2V0U2Nyb2xsYmFyVmlzaWJpbGl0eShjc3NTY3JvbGxiYXJEZXRlY3RlZCkge1xuICBpZiAoIWNzc1Njcm9sbGJhckRldGVjdGVkKSB7XG4gICAgY29uc3Qgdmlld3BvcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlcmwtdmlld3BvcnQnKVswXVxuICAgIHZpZXdwb3J0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gIH1cbn1cblxuXG5leHBvcnQgeyBpbml0aWFsaXplIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVGcmFtZSB9IGZyb20gJy4uL3R5cGVzL2NyZWF0ZUZyYW1lJztcblxuZnVuY3Rpb24gY2xlYXIoZnJhbWUsIHRlcm1pbmFsKSB7XG4gIHJldHVybiBjcmVhdGVGcmFtZShcbiAgICAwLFxuICAgIHRlcm1pbmFsLmVudHJpZXMubGVuZ3RoLFxuICAgIGZyYW1lLnByb21wdEluZGV4KTtcbn1cblxuZnVuY3Rpb24gZmFzdEZvcndhcmQoZnJhbWUpIHtcbiAgcmV0dXJuIGNyZWF0ZUZyYW1lKFxuICAgIGZyYW1lLm9mZnNldCxcbiAgICBmcmFtZS5zdGFydCxcbiAgICBmcmFtZS5wcm9tcHRJbmRleCA+IDBcbiAgICAgID8gZnJhbWUucHJvbXB0SW5kZXggLSAxXG4gICAgICA6IGZyYW1lLnByb21wdEluZGV4KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRQcm9tcHRJbmRleChmcmFtZSkge1xuICByZXR1cm4gY3JlYXRlRnJhbWUoXG4gICAgZnJhbWUub2Zmc2V0LFxuICAgIGZyYW1lLnN0YXJ0LFxuICAgIDApO1xufVxuXG5mdW5jdGlvbiByZXdpbmQoZnJhbWUsIHRlcm1pbmFsKSB7XG4gIHJldHVybiBjcmVhdGVGcmFtZShcbiAgICBmcmFtZS5vZmZzZXQsXG4gICAgZnJhbWUuc3RhcnQsXG4gICAgdGVybWluYWwucHJvbXB0cy5sZW5ndGggPiBmcmFtZS5wcm9tcHRJbmRleFxuICAgICAgPyBmcmFtZS5wcm9tcHRJbmRleCArIDFcbiAgICAgIDogZnJhbWUucHJvbXB0SW5kZXgpO1xufVxuXG5leHBvcnQgY29uc3QgRnJhbWUgPSB7XG4gIGNsZWFyLFxuICBmYXN0Rm9yd2FyZCxcbiAgcmVzZXRQcm9tcHRJbmRleCxcbiAgcmV3aW5kXG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlVGVybWluYWwgfSBmcm9tICcuLi90eXBlcy9jcmVhdGVUZXJtaW5hbCc7XG5pbXBvcnQgeyBjcmVhdGVQcm9tcHQgfSBmcm9tICcuLi90eXBlcy9jcmVhdGVQcm9tcHQnO1xuXG5mdW5jdGlvbiBhZGRDaGFyKHRlcm1pbmFsLCBjaGFyKSB7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLFxuICAgIHRlcm1pbmFsLnByb21wdHMsXG4gICAgY3JlYXRlUHJvbXB0KFxuICAgICAgdGVybWluYWwucHJvbXB0LnByZUN1cnNvciArIGNoYXIsXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcikpO1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZVdvcmQodGVybWluYWwsIGdldENhbmRpZGF0ZXMpIHtcbiAgY29uc3QgX2dldENhbmRpZGF0ZXMgPSAoZ2V0Q2FuZGlkYXRlcyA9PSBudWxsKVxuICAgID8gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIGNvdXBsaW5nIHRvIGxpc3AgaW1wbGVtZW50YXRpb25cbiAgICAgICAgcmV0dXJuIFt7IGVmZmVjdDogZmFsc2UsIHZhbHVlOiB2YWx1ZSB9XTtcbiAgICAgIH1cbiAgICA6IGdldENhbmRpZGF0ZXM7XG5cbiAgY29uc3QgY29tbWFuZFRleHQgPSB0ZXJtaW5hbC5wcm9tcHQucHJlQ3Vyc29yO1xuICBjb25zdCBzcGxpdENvbW1hbmQgPSBnZXRQcmVmaXgoY29tbWFuZFRleHQpO1xuICBjb25zdCBjYW5kaWRhdGVzID0gX2dldENhbmRpZGF0ZXMoc3BsaXRDb21tYW5kWzFdKTtcbiAgY29uc3QgbGVuZ3RoID0gY2FuZGlkYXRlcy5sZW5ndGg7XG5cbiAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0ZXJtaW5hbDtcbiAgfVxuXG4gIGxldCBlbnRyaWVzO1xuICBsZXQgcHJvbXB0O1xuXG4gIGlmIChsZW5ndGggPT09IDEpIHtcbiAgICBlbnRyaWVzID0gdGVybWluYWwuZW50cmllcztcbiAgICBwcm9tcHQgPSBjcmVhdGVQcm9tcHQoXG4gICAgICBzcGxpdENvbW1hbmRbMF0gKyBjYW5kaWRhdGVzWzBdICsgJyAnICsgdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3IsXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcik7XG4gIH0gZWxzZSB7XG4gICAgZW50cmllcyA9IHRlcm1pbmFsLmVudHJpZXMuY29uY2F0KFxuICAgICAgW3sgdHlwZTogJ2NvbW1hbmQnLCB2YWx1ZTogZXh0cmFjdENvbW1hbmQodGVybWluYWwucHJvbXB0KSB9XSxcbiAgICAgIFt7IHR5cGU6ICdjb21wbGV0aW9uJywgdmFsdWU6IGNhbmRpZGF0ZXMuam9pbignICcpIH1dKTtcbiAgICBwcm9tcHQgPSB0ZXJtaW5hbC5wcm9tcHQ7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlVGVybWluYWwoZW50cmllcywgdGVybWluYWwucHJvbXB0cywgcHJvbXB0KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlTGVmdENoYXIodGVybWluYWwpIHtcbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgIHRlcm1pbmFsLmVudHJpZXMsIFxuICAgIHRlcm1pbmFsLnByb21wdHMsXG4gICAgY3JlYXRlUHJvbXB0KFxuICAgICAgdGVybWluYWwucHJvbXB0LnByZUN1cnNvci5zbGljZSgwLCAtMSksXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcikpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcmVDdXJzb3IodGVybWluYWwpIHtcbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgIHRlcm1pbmFsLmVudHJpZXMsIFxuICAgIHRlcm1pbmFsLnByb21wdHMsIFxuICAgIGNyZWF0ZVByb21wdCgnJywgdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3IpKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUmlnaHRDaGFyKHRlcm1pbmFsKSB7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLCBcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLCBcbiAgICBjcmVhdGVQcm9tcHQoXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucHJlQ3Vyc29yLFxuICAgICAgdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3Iuc2xpY2UoMSkpKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlV29yZCh0ZXJtaW5hbCkge1xuICBjb25zdCBwcmVDdXJzb3IgPSB0ZXJtaW5hbC5wcm9tcHQucHJlQ3Vyc29yO1xuICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgdGVybWluYWwuZW50cmllcywgXG4gICAgdGVybWluYWwucHJvbXB0cywgXG4gICAgY3JlYXRlUHJvbXB0KFxuICAgICAgcHJlQ3Vyc29yLnNsaWNlKDAsIHByZUN1cnNvci5zbGljZSgwLCAtMSkubGFzdEluZGV4T2YoJyAnKSArIDEpLFxuICAgICAgdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3IpKTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdENvbW1hbmQocHJvbXB0KSB7XG4gIHJldHVybiAocHJvbXB0LnByZUN1cnNvciArIHByb21wdC5wb3N0Q3Vyc29yKS50cmltKCk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5BcnJheShhcnJheSkge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJyYXkpO1xufVxuXG5mdW5jdGlvbiBnZXRQcmVmaXgoY29tbWFuZCkge1xuICBjb25zdCByZWdleCA9IC9eKC4qW1xcc1xcKFxcKVxcW1xcXV0pKFteXFwoXFwpXFxbXFxdXSopLztcbiAgY29uc3QgbWF0Y2ggPSByZWdleC5leGVjKGNvbW1hbmQpO1xuICByZXR1cm4gbWF0Y2ggPT0gbnVsbFxuICAgID8gWycnLCBjb21tYW5kXVxuICAgIDogW21hdGNoWzFdLCBtYXRjaFsyXV07XG59XG5cbmZ1bmN0aW9uIG1vdmVDdXJzb3JMZWZ0KHRlcm1pbmFsKSB7XG4gIGNvbnN0IHByZUN1cnNvciA9IHRlcm1pbmFsLnByb21wdC5wcmVDdXJzb3I7XG4gIGNvbnN0IHByZUN1cnNvckxlbmd0aCA9IHByZUN1cnNvci5sZW5ndGg7XG4gIGlmIChwcmVDdXJzb3JMZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdGVybWluYWw7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcG9zdEN1cnNvciA9IHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yO1xuICAgIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICAgIHRlcm1pbmFsLmVudHJpZXMsXG4gICAgICB0ZXJtaW5hbC5wcm9tcHRzLFxuICAgICAgY3JlYXRlUHJvbXB0KFxuICAgICAgICBwcmVDdXJzb3Iuc2xpY2UoMCwgLTEpLFxuICAgICAgICBwcmVDdXJzb3JbcHJlQ3Vyc29yTGVuZ3RoIC0gMV0gKyBwb3N0Q3Vyc29yKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW92ZUN1cnNvclJpZ2h0KHRlcm1pbmFsKSB7XG4gIGNvbnN0IHBvc3RDdXJzb3IgPSB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcjtcbiAgaWYgKHBvc3RDdXJzb3IubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRlcm1pbmFsO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHByZUN1cnNvciA9IHRlcm1pbmFsLnByb21wdC5wcmVDdXJzb3I7XG4gICAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgICAgdGVybWluYWwuZW50cmllcyxcbiAgICAgIHRlcm1pbmFsLnByb21wdHMsXG4gICAgICBjcmVhdGVQcm9tcHQoXG4gICAgICAgIHByZUN1cnNvciArIHBvc3RDdXJzb3JbMF0sXG4gICAgICAgIHBvc3RDdXJzb3Iuc2xpY2UoMSkpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlQ3Vyc29yVG9FbmQodGVybWluYWwpIHtcbiAgY29uc3QgcHJvbXB0ID0gdGVybWluYWwucHJvbXB0O1xuICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgdGVybWluYWwuZW50cmllcyxcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLFxuICAgIGNyZWF0ZVByb21wdChwcm9tcHQucHJlQ3Vyc29yICsgcHJvbXB0LnBvc3RDdXJzb3IsICcnKSk7XG59XG5cbmZ1bmN0aW9uIG1vdmVDdXJzb3JUb1N0YXJ0KHRlcm1pbmFsKSB7XG4gIGNvbnN0IHByb21wdCA9IHRlcm1pbmFsLnByb21wdDtcbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgIHRlcm1pbmFsLmVudHJpZXMsXG4gICAgdGVybWluYWwucHJvbXB0cyxcbiAgICBjcmVhdGVQcm9tcHQoJycsIHByb21wdC5wcmVDdXJzb3IgKyBwcm9tcHQucG9zdEN1cnNvcikpO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQcm9tcHQocHJvbXB0KSB7XG4gIHJldHVybiBjcmVhdGVQcm9tcHQoZXh0cmFjdENvbW1hbmQocHJvbXB0KSwgJycpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXQodGVybWluYWwsIHRyYW5zZm9ybSkge1xuICBsZXQgbmV3Q2FjaGVkUHJvbXB0TWF5YmU7XG4gIGxldCBuZXdGdXR1cmU7XG5cbiAgY29uc3QgX3RyYW5zZm9ybSA9ICh0cmFuc2Zvcm0gPT0gbnVsbClcbiAgICA/IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyBjb3VwbGluZyB0byBsaXNwIGltcGxlbWVudGF0aW9uXG4gICAgICAgIHJldHVybiBbeyBlZmZlY3Q6IGZhbHNlLCB2YWx1ZTogdmFsdWUgfV07XG4gICAgICB9XG4gICAgOiB0cmFuc2Zvcm07XG5cbiAgY29uc3QgY29tbWFuZFRleHQgPSBleHRyYWN0Q29tbWFuZCh0ZXJtaW5hbC5wcm9tcHQpO1xuICBjb25zdCByZXN1bHRzID0gX3RyYW5zZm9ybShjb21tYW5kVGV4dCk7XG4gIGNvbnN0IF9kaXNwbGF5RW50cmllcyA9IHJlc3VsdHNcbiAgICAuc2xpY2UoMCwgLTEpXG4gICAgLmZpbHRlcihmdW5jdGlvbiAocmVzdWx0KSB7IHJldHVybiByZXN1bHQuZWZmZWN0LnR5cGUgPT09ICdkaXNwbGF5JzsgfSlcbiAgICAubWFwKGZ1bmN0aW9uIChkaXNwbGF5KSB7XG4gICAgICByZXR1cm4gZGlzcGxheS52YWx1ZS5zcGxpdChcIlxcXFxcXFxcblwiKS5tYXAoZnVuY3Rpb24gKGxpbmUpIHtcbiAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgIHR5cGU6ICdkaXNwbGF5JyxcbiAgICAgICAgICAgdmFsdWU6IGxpbmVcbiAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG4gICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcXFxcL2csICdcXFxcJylcbiAgICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgY29uc3QgZGlzcGxheUVudHJpZXMgPSBmbGF0dGVuQXJyYXkoX2Rpc3BsYXlFbnRyaWVzKTtcblxuICBjb25zdCBsYXN0UmVzdWx0ID0gcmVzdWx0c1tyZXN1bHRzLmxlbmd0aCAtIDFdO1xuICBjb25zdCByZXNwb25zZSA9IChsYXN0UmVzdWx0LnZhbHVlICE9IG51bGwpXG4gICAgPyBbeyB0eXBlOiAncmVzcG9uc2UnLCB2YWx1ZTogbGFzdFJlc3VsdC52YWx1ZSB9XVxuICAgIDogW107XG5cbiAgY29uc3QgY29tbWFuZCA9IHsgdHlwZTogJ2NvbW1hbmQnLCB2YWx1ZTogY29tbWFuZFRleHQgfTtcbiAgY29uc3QgcHJvbXB0ID0gbm9ybWFsaXplUHJvbXB0KHRlcm1pbmFsLnByb21wdCk7XG5cbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgIHRlcm1pbmFsLmVudHJpZXMuY29uY2F0KFtjb21tYW5kXSwgZGlzcGxheUVudHJpZXMsIHJlc3BvbnNlKSxcbiAgICBbcHJvbXB0XS5jb25jYXQodGVybWluYWwucHJvbXB0cyksXG4gICAgY3JlYXRlUHJvbXB0KCcnLCAnJykpO1xufVxuXG5leHBvcnQgY29uc3QgVGVybWluYWwgPSB7XG4gIGFkZENoYXIsXG4gIGNvbXBsZXRlV29yZCxcbiAgZGVsZXRlTGVmdENoYXIsXG4gIGRlbGV0ZVByZUN1cnNvcixcbiAgZGVsZXRlUmlnaHRDaGFyLFxuICBkZWxldGVXb3JkLFxuICBtb3ZlQ3Vyc29yTGVmdCxcbiAgbW92ZUN1cnNvclJpZ2h0LFxuICBtb3ZlQ3Vyc29yVG9FbmQsXG4gIG1vdmVDdXJzb3JUb1N0YXJ0LFxuICBzdWJtaXRcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVWaWV3cG9ydCB9IGZyb20gJy4uL3R5cGVzL2NyZWF0ZVZpZXdwb3J0JztcbmltcG9ydCB7IGNyZWF0ZUZyYW1lIH0gZnJvbSAnLi4vdHlwZXMvY3JlYXRlRnJhbWUnO1xuaW1wb3J0IHsgY3JlYXRlVGVybWluYWwgfSBmcm9tICcuLi90eXBlcy9jcmVhdGVUZXJtaW5hbCc7XG5pbXBvcnQgeyBGcmFtZSB9IGZyb20gJy4vZnJhbWUnO1xuaW1wb3J0IHsgVGVybWluYWwgfSBmcm9tICcuL3Rlcm1pbmFsJztcblxuZnVuY3Rpb24gYWRkQ2hhcih2aWV3cG9ydCwgY2hhcikge1xuICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgVGVybWluYWwuYWRkQ2hhcih2aWV3cG9ydC50ZXJtaW5hbCwgY2hhciksXG4gICAgdmlld3BvcnQuZnJhbWUpO1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZVdvcmQodmlld3BvcnQsIGdldENhbmRpZGF0ZXMpIHtcbiAgY29uc3QgZnJhbWUgPSB2aWV3cG9ydC5mcmFtZTtcbiAgY29uc3QgbmV3VGVybWluYWwgPVxuICAgIFRlcm1pbmFsLmNvbXBsZXRlV29yZChyZWZyZXNoVGVybWluYWwodmlld3BvcnQpLCBnZXRDYW5kaWRhdGVzKTtcbiAgY29uc3QgZGlmZiA9IG5ld1Rlcm1pbmFsLmVudHJpZXMubGVuZ3RoIC0gdmlld3BvcnQudGVybWluYWwuZW50cmllcy5sZW5ndGg7XG4gIHJldHVybiBjcmVhdGVWaWV3cG9ydChcbiAgICBuZXdUZXJtaW5hbCxcbiAgICBjcmVhdGVGcmFtZShcbiAgICAgIGZyYW1lLm9mZnNldCArIGRpZmYsXG4gICAgICBmcmFtZS5zdGFydCxcbiAgICAgIDApKTtcbn1cblxuZnVuY3Rpb24gY2xlYXIodmlld3BvcnQpIHtcbiAgY29uc3QgdGVybWluYWwgPSB2aWV3cG9ydC50ZXJtaW5hbDtcbiAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgIHRlcm1pbmFsLFxuICAgIEZyYW1lLmNsZWFyKHZpZXdwb3J0LmZyYW1lLCB0ZXJtaW5hbCkpO1xufVxuXG5mdW5jdGlvbiBmYXN0Rm9yd2FyZCh2aWV3cG9ydCkge1xuICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgdmlld3BvcnQudGVybWluYWwsXG4gICAgRnJhbWUuZmFzdEZvcndhcmQodmlld3BvcnQuZnJhbWUpKTtcbn1cblxuZnVuY3Rpb24gbW9kaWZ5VGVybWluYWwoZm5OYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmlld3BvcnQpIHtcbiAgICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgICBUZXJtaW5hbFtmbk5hbWVdKHJlZnJlc2hUZXJtaW5hbCh2aWV3cG9ydCkpLFxuICAgICAgRnJhbWUucmVzZXRQcm9tcHRJbmRleCh2aWV3cG9ydC5mcmFtZSkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZWZyZXNoVGVybWluYWwodmlld3BvcnQpIHtcbiAgY29uc3QgdGVybWluYWwgPSB2aWV3cG9ydC50ZXJtaW5hbDtcbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKHRlcm1pbmFsLmVudHJpZXMsIHRlcm1pbmFsLnByb21wdHMsIHZpZXdwb3J0LnByb21wdCk7XG59XG5cbmZ1bmN0aW9uIHJld2luZCh2aWV3cG9ydCkge1xuICBjb25zdCB0ZXJtaW5hbCA9IHZpZXdwb3J0LnRlcm1pbmFsO1xuICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgdGVybWluYWwsXG4gICAgRnJhbWUucmV3aW5kKHZpZXdwb3J0LmZyYW1lLCB0ZXJtaW5hbCkpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXQodmlld3BvcnQsIHRyYW5zZm9ybSkge1xuICBjb25zdCBmcmFtZSA9IHZpZXdwb3J0LmZyYW1lO1xuICBjb25zdCBuZXdUZXJtaW5hbCA9IFRlcm1pbmFsLnN1Ym1pdChyZWZyZXNoVGVybWluYWwodmlld3BvcnQpLCB0cmFuc2Zvcm0pO1xuICBjb25zdCBkaWZmID0gbmV3VGVybWluYWwuZW50cmllcy5sZW5ndGggLSB2aWV3cG9ydC50ZXJtaW5hbC5lbnRyaWVzLmxlbmd0aDtcbiAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgIG5ld1Rlcm1pbmFsLFxuICAgIGNyZWF0ZUZyYW1lKFxuICAgICAgZnJhbWUub2Zmc2V0ICsgZGlmZixcbiAgICAgIGZyYW1lLnN0YXJ0LFxuICAgICAgMCkpO1xufVxuXG5leHBvcnQgY29uc3QgVmlld3BvcnQgPSB7XG4gIGFkZENoYXIsXG4gIGNsZWFyLFxuICBjb21wbGV0ZVdvcmQsXG4gIGRlbGV0ZUxlZnRDaGFyOiBtb2RpZnlUZXJtaW5hbCgnZGVsZXRlTGVmdENoYXInKSxcbiAgZGVsZXRlUHJlQ3Vyc29yOiBtb2RpZnlUZXJtaW5hbCgnZGVsZXRlUHJlQ3Vyc29yJyksXG4gIGRlbGV0ZVJpZ2h0Q2hhcjogbW9kaWZ5VGVybWluYWwoJ2RlbGV0ZVJpZ2h0Q2hhcicpLFxuICBkZWxldGVXb3JkOiBtb2RpZnlUZXJtaW5hbCgnZGVsZXRlV29yZCcpLFxuICBmYXN0Rm9yd2FyZCxcbiAgbW92ZUN1cnNvckxlZnQ6IG1vZGlmeVRlcm1pbmFsKCdtb3ZlQ3Vyc29yTGVmdCcpLFxuICBtb3ZlQ3Vyc29yUmlnaHQ6IG1vZGlmeVRlcm1pbmFsKCdtb3ZlQ3Vyc29yUmlnaHQnKSxcbiAgbW92ZUN1cnNvclRvRW5kOiBtb2RpZnlUZXJtaW5hbCgnbW92ZUN1cnNvclRvRW5kJyksXG4gIG1vdmVDdXJzb3JUb1N0YXJ0OiBtb2RpZnlUZXJtaW5hbCgnbW92ZUN1cnNvclRvU3RhcnQnKSxcbiAgcmV3aW5kLFxuICBzdWJtaXRcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUZyYW1lIH0gZnJvbSAnLi90eXBlcy9jcmVhdGVGcmFtZSc7XG5pbXBvcnQgeyBjcmVhdGVQcm9tcHQgfSBmcm9tICcuL3R5cGVzL2NyZWF0ZVByb21wdCc7XG5pbXBvcnQgeyBjcmVhdGVUZXJtaW5hbCB9IGZyb20gJy4vdHlwZXMvY3JlYXRlVGVybWluYWwnO1xuaW1wb3J0IHsgY3JlYXRlVmlld3BvcnQgfSBmcm9tICcuL3R5cGVzL2NyZWF0ZVZpZXdwb3J0JztcblxuZnVuY3Rpb24gZ2V0SW5pdGlhbE1vZGVsKGluaXRpYWxQcm9tcHQpIHtcbiAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgIGNyZWF0ZVRlcm1pbmFsKFtdLCBbXSwgY3JlYXRlUHJvbXB0KGluaXRpYWxQcm9tcHQsICcnKSksXG4gICAgY3JlYXRlRnJhbWUoMCwgMCwgMCkpO1xufVxuXG5leHBvcnQgeyBnZXRJbml0aWFsTW9kZWwgfTtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVGcmFtZSA9IGZ1bmN0aW9uIChvZmZzZXQsIHN0YXJ0LCBwcm9tcHRJbmRleCkge1xuICByZXR1cm4ge1xuICAgIG9mZnNldDogb2Zmc2V0LFxuICAgIHN0YXJ0OiBzdGFydCxcbiAgICBwcm9tcHRJbmRleDogcHJvbXB0SW5kZXhcbiAgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgY3JlYXRlUHJvbXB0ID0gZnVuY3Rpb24gKHByZUN1cnNvciwgcG9zdEN1cnNvcikge1xuICByZXR1cm4ge1xuICAgIHByZUN1cnNvcjogcHJlQ3Vyc29yLFxuICAgIHBvc3RDdXJzb3I6IHBvc3RDdXJzb3JcbiAgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgY3JlYXRlVGVybWluYWwgPSAgZnVuY3Rpb24gKGVudHJpZXMsIHByb21wdHMsIGN1cnJlbnRQcm9tcHQpIHtcbiAgcmV0dXJuICB7XG4gICAgZW50cmllczogZW50cmllcyxcbiAgICBwcm9tcHRzOiBwcm9tcHRzLFxuICAgIHByb21wdDogY3VycmVudFByb21wdFxuICB9O1xufTtcbiIsImZ1bmN0aW9uIGdldFByb21wdCh0ZXJtaW5hbCwgZnJhbWUpIHtcbiAgcmV0dXJuIGZyYW1lLnByb21wdEluZGV4ID09PSAwXG4gICAgPyB0ZXJtaW5hbC5wcm9tcHRcbiAgICA6IHRlcm1pbmFsLnByb21wdHNbZnJhbWUucHJvbXB0SW5kZXggLSAxXTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVZpZXdwb3J0ID0gZnVuY3Rpb24gKHRlcm1pbmFsLCBmcmFtZSkge1xuICByZXR1cm4ge1xuICAgIHRlcm1pbmFsOiB0ZXJtaW5hbCxcbiAgICBmcmFtZTogZnJhbWUsXG4gICAgcHJvbXB0OiBnZXRQcm9tcHQodGVybWluYWwsIGZyYW1lKVxuICB9O1xufTtcbiIsImltcG9ydCB7IGRpZmYgfSBmcm9tICcuLi9yaWJvc29tZS9kaWZmJztcbmltcG9ydCB7IEVSTEtJTkcgfSBmcm9tICcuL3ZpZXcvcmVjcmVhdGVDb25zb2xlJztcbmltcG9ydCB7IG1vZGlmeUVsZW1lbnQgfSBmcm9tICcuLi9yaWJvc29tZS9pbnRlcnByZXRlcic7XG5cbmZ1bmN0aW9uIHJlbmRlcihfdmlld01vZGVsLCByb290Q2hpbGQsIGNvbnRyb2xDb25maWcsIHNjcm9sbCkge1xuICBsZXQgdmlld01vZGVsID0gX3ZpZXdNb2RlbDtcbiAgcmV0dXJuIGZ1bmN0aW9uIChtb2RlbCkge1xuICAgIGNvbnN0IGxhYmVscyA9IHsgcHJvbXB0TGFiZWw6IGNvbnRyb2xDb25maWcucHJvbXB0TGFiZWwgfTtcbiAgICBjb25zdCBuZXdWaWV3TW9kZWwgPSBFUkxLSU5HKGxhYmVscywgbW9kZWwpO1xuICAgIG1vZGlmeUVsZW1lbnQocm9vdENoaWxkLCBkaWZmKG5ld1ZpZXdNb2RlbCwgdmlld01vZGVsKSk7XG5cbiAgICBjb250cm9sQ29uZmlnLnZpZXdwb3J0ID0gbW9kZWw7XG4gICAgdmlld01vZGVsID0gbmV3Vmlld01vZGVsO1xuXG4gICAgc2Nyb2xsKCk7XG4gIH07XG59XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50VHlwZSwgZXZlbnRIYW5kbGVyKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgc3VwcmVzc0RlZmF1bHQoZXZlbnRIYW5kbGVyKSk7XG59XG5cbmZ1bmN0aW9uIHN1cHJlc3NEZWZhdWx0KGhhbmRsZUV2ZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgfTtcbn1cblxuZXhwb3J0IHsgc3Vic2NyaWJlIH07XG4iLCJpbXBvcnQgeyBTUEFOIH0gZnJvbSAnLi4vLi4vcmlib3NvbWUvZWxlbWVudHMnO1xuXG5mdW5jdGlvbiBFUkxfRU5UUlkodGV4dCkge1xuICByZXR1cm4gU1BBTihfZW50cnlDb25maWcsIHRleHQgKyBuZXdsaW5lKTtcbn1cblxuZnVuY3Rpb24gRVJMX0lOUFVUKHByb21wdFRleHQsIHByZVRleHQsIHBvc3RUZXh0KSB7XG4gIHJldHVybiBTUEFOKFxuICAgIF9pbnB1dENvbmZpZyxcbiAgICBFUkxfUFJPTVBUKHByb21wdFRleHQpLFxuICAgIEVSTF9QUkUocHJlVGV4dCksXG4gICAgRVJMX0NVUlNPUixcbiAgICBFUkxfUE9TVChwb3N0VGV4dCkpO1xufVxuXG5mdW5jdGlvbiBFUkxfUE9TVCh0ZXh0KSB7XG4gIHJldHVybiBTUEFOKF9wb3N0Q29uZmlnLCB0ZXh0KTtcbn1cblxuZnVuY3Rpb24gRVJMX1BSRSh0ZXh0KSB7XG4gIHJldHVybiBTUEFOKF9wcmVDb25maWcsIHRleHQpO1xufVxuXG5mdW5jdGlvbiBFUkxfUFJPTVBUKHRleHQpIHtcbiAgcmV0dXJuIFNQQU4oX3Byb21wdENvbmZpZywgdGV4dCk7XG59XG5cbmNvbnN0IGVtcHR5U3RyaW5nID0gJyc7XG5jb25zdCBuZXdsaW5lID0gJ1xcbic7XG5jb25zdCBzcGFjZSA9ICcgJztcbmNvbnN0IHVuZGVyc2NvcmUgPSAnXyc7XG5cbmNvbnN0IEVSTF9DVVJTT1IgPSBTUEFOKFxuICB7XG4gICAgaWQ6ICdlcmwtY3Vyc29yJyxcbiAgICBjbGFzc2VzOiB7ICdlcmwtY3Vyc29yJzogdHJ1ZSwgJ2VybC1jdXJzb3InOiB0cnVlIH0sXG4gIH0sXG4gIHVuZGVyc2NvcmUpO1xuXG5jb25zdCBfZW50cnlDb25maWcgPSB7XG4gIGNsYXNzZXM6IHsgJ2VybC1lbnRyeSc6IHRydWUsICdlcmwtbGluZSc6IHRydWUgfSxcbn07XG5cbmNvbnN0IF9pbnB1dENvbmZpZyA9IHtcbiAgaWQ6ICdlcmwtaW5wdXQnLFxuICBjbGFzc2VzOiB7ICdlcmwtaW5wdXQnOiB0cnVlLCAnZXJsLWxpbmUnOiB0cnVlIH1cbn07XG5cbmNvbnN0IF9wb3N0Q29uZmlnID0ge1xuICBpZDogJ2VybC1wb3N0JyxcbiAgY2xhc3NlczogeyAnZXJsLXBvc3QnOiB0cnVlIH0sXG4gIHN0eWxlOiB7ICdwb3NpdGlvbic6ICdyZWxhdGl2ZScgfVxufTtcblxuY29uc3QgX3ByZUNvbmZpZyA9IHtcbiAgIGlkOiAnZXJsLXByZScsXG4gICBjbGFzc2VzOiB7ICdlcmwtcHJlJzogdHJ1ZSB9XG59O1xuXG5jb25zdCBfcHJvbXB0Q29uZmlnID0ge1xuICBpZDogJ2VybC1wcm9tcHQnLFxuICBjbGFzc2VzOiB7ICdlcmwtcHJvbXB0JzogdHJ1ZSwgJ2VybC1wcm9tcHQnOiB0cnVlIH1cbn07XG5cbmV4cG9ydCB7XG4gIEVSTF9DVVJTT1IsXG4gIEVSTF9FTlRSWSxcbiAgRVJMX0lOUFVULFxuICBFUkxfUE9TVCxcbiAgRVJMX1BSRSxcbiAgRVJMX1BST01QVFxufTtcbiIsImltcG9ydCB7IGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQgfSBmcm9tICcuLi8uLi9yaWJvc29tZS9pbnRlcnByZXRlcic7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVWaWV3KHJvb3QsIHZpZXdNb2RlbCkge1xuICBjcmVhdGVBbmRBdHRhY2hFbGVtZW50KHJvb3QsIHZpZXdNb2RlbCk7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxpemVWaWV3IH07XG4iLCJpbXBvcnQge1xuICBFUkxfQ1VSU09SLFxuICBFUkxfRU5UUlksXG4gIEVSTF9JTlBVVCxcbiAgRVJMX1BPU1QsXG4gIEVSTF9QUkUsXG4gIEVSTF9QUk9NUFRcbn0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuaW1wb3J0IHtcbiAgRElWLFxuICBIMSxcbiAgSDQsXG4gIFNFQ1RJT04sXG4gIFNQQU5cbn0gZnJvbSAnLi4vLi4vcmlib3NvbWUvZWxlbWVudHMnO1xuXG5jb25zdCBFUkxfSEVBREVSID0gU0VDVElPTihcbiAgICB7XG4gICAgICBpZDogJ2VybC1oZWFkZXInLFxuICAgICAgY2xhc3NlczogeyAnaGVhZCc6IHRydWUgfVxuICAgIH0sXG4gICAgSDEobnVsbCwgJ0VybGvDtm5pZyBMaXNwIENvbnNvbGVcXG4nKSxcbiAgICBINChudWxsLCAnQSB0ZXJtaW5hbCBlbXVsYXRvciBhbmQgbGlzcCBpbnRlcnByZXRlclxcbicpKTtcblxuY29uc3QgZW1wdHlTdHJpbmcgPSAnJztcblxuZnVuY3Rpb24gRVJMS0lORyhwcmVmaXhlcywgdmlld3BvcnQpIHtcbiAgY29uc3QgcHJvbXB0TGFiZWwgPSBwcmVmaXhlcy5wcm9tcHRMYWJlbDtcbiAgY29uc3QgcHJvbXB0ID0gdmlld3BvcnQucHJvbXB0O1xuICBjb25zdCBmcmFtZSA9IHZpZXdwb3J0LmZyYW1lO1xuXG4gIGNvbnN0IGVudHJpZXMgPSB2aWV3cG9ydC50ZXJtaW5hbC5lbnRyaWVzXG4gICAgLnNsaWNlKGZyYW1lLnN0YXJ0LCBmcmFtZS5zdGFydCArIGZyYW1lLm9mZnNldClcbiAgICAubWFwKHNwZWNpZnlFbnRyeS5iaW5kKG51bGwsIHByZWZpeGVzKSk7XG5cbiAgY29uc3QgcHJlQ3Vyc29yID0gcHJvbXB0LnByZUN1cnNvciAhPSBudWxsID8gcHJvbXB0LnByZUN1cnNvciA6IGVtcHR5U3RyaW5nO1xuICBjb25zdCBwb3N0Q3Vyc29yID0gcHJvbXB0LnBvc3RDdXJzb3IgIT0gbnVsbCA/IHByb21wdC5wb3N0Q3Vyc29yIDogZW1wdHlTdHJpbmc7XG5cbiAgcmV0dXJuIERJVihcbiAgICBfZXJsa29uaWdDb25maWcsXG4gICAgRElWKFxuICAgICAgbnVsbCxcbiAgICAgIEVSTF9IRUFERVIsXG4gICAgICBESVYoXG4gICAgICAgIF90ZXJtaW5hbENvbmZpZyxcbiAgICAgICAgWF9TQ1JPTExCQVIsXG4gICAgICAgIFlfU0NST0xMQkFSLFxuICAgICAgICBESVYoXG4gICAgICAgICAgX2VybFZpZXdwb3J0Q29uZmlnLFxuICAgICAgICAgIGVudHJpZXMsXG4gICAgICAgICAgRVJMX0lOUFVUKHByb21wdExhYmVsLCBwcm9tcHQucHJlQ3Vyc29yLCBwcm9tcHQucG9zdEN1cnNvcikpKSkpO1xufVxuXG5jb25zdCBYX1NDUk9MTEJBUiA9IERJVihcbiAge1xuICAgIGlkOiAnZXJsLXgtc2Nyb2xsLXRyYWNrJyxcbiAgICBjbGFzc2VzOiB7XG4gICAgICAnZXJsLXgtc2Nyb2xsLXRyYWNrJzogdHJ1ZSxcbiAgICAgICdlcmwtc2Nyb2xsLXRyYWNrJzogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgRElWKHtcbiAgICBpZDogJ2VybC14LXNjcm9sbC10aHVtYicsXG4gICAgY2xhc3Nlczoge1xuICAgICAgJ2VybC14LXNjcm9sbC10aHVtYic6IHRydWUsXG4gICAgICAnZXJsLXNjcm9sbC10aHVtYic6IHRydWVcbiAgICB9XG4gIH0pKTtcblxuY29uc3QgWV9TQ1JPTExCQVIgPSBESVYoXG4gIHtcbiAgICBpZDogJ2VybC15LXNjcm9sbC10cmFjaycsXG4gICAgY2xhc3Nlczoge1xuICAgICAgJ2VybC15LXNjcm9sbC10cmFjayc6IHRydWUsXG4gICAgICAnZXJsLXNjcm9sbC10cmFjayc6IHRydWVcbiAgICB9XG4gIH0sXG4gIERJVih7XG4gICAgaWQ6ICdlcmwteS1zY3JvbGwtdGh1bWInLFxuICAgIGNsYXNzZXM6IHtcbiAgICAgICdlcmwteS1zY3JvbGwtdGh1bWInOiB0cnVlLFxuICAgICAgJ2VybC1zY3JvbGwtdGh1bWInOiB0cnVlXG4gICAgfVxuICB9KSk7XG5cbmNvbnN0IGRlZmF1bHRDb21wbGV0aW9uTGFiZWwgPSAnICAnO1xuY29uc3QgZGVmYXVsdERpc3BsYXlMYWJlbCA9ICcnO1xuY29uc3QgZGVmYXVsdEVycm9yTGFiZWwgPSAnLi4uPiAnO1xuY29uc3QgZGVmYXVsdFByb21wdExhYmVsID0gJz4gJztcbmNvbnN0IGRlZmF1bHRSZXNwb25zZUxhYmVsID0gJz09PiAnO1xuXG5mdW5jdGlvbiBzcGVjaWZ5RW50cnkocHJlZml4ZXMsIGNvbXBvbmVudCkge1xuICBjb25zdCBjb21wbGV0aW9uTGFiZWwgPSBwcmVmaXhlcy5jb21wbGV0aW9uTGFiZWwgfHwgZGVmYXVsdENvbXBsZXRpb25MYWJlbDtcbiAgY29uc3QgZGlzcGxheUxhYmVsID0gcHJlZml4ZXMuZGlzcGxheUxhYmVsIHx8IGRlZmF1bHREaXNwbGF5TGFiZWw7XG4gIGNvbnN0IGVycm9yTGFiZWwgPSBwcmVmaXhlcy5lcnJvckxhYmVsIHx8IGRlZmF1bHRFcnJvckxhYmVsO1xuICBjb25zdCBwcm9tcHRMYWJlbCA9IHByZWZpeGVzLnByb21wdExhYmVsIHx8IGRlZmF1bHRQcm9tcHRMYWJlbDtcbiAgY29uc3QgcmVzcG9uc2VMYWJlbCA9IHByZWZpeGVzLnJlc3BvbnNlTGFiZWwgfHwgZGVmYXVsdFJlc3BvbnNlTGFiZWw7XG5cbiAgbGV0IGVudHJ5O1xuICBzd2l0Y2ggKGNvbXBvbmVudC50eXBlKSB7XG4gICAgY2FzZSAnY29tbWFuZCc6XG4gICAgICBlbnRyeSA9IHByb21wdExhYmVsICsgY29tcG9uZW50LnZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmVzcG9uc2UnOlxuICAgICAgZW50cnkgPSByZXNwb25zZUxhYmVsICsgY29tcG9uZW50LnZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZGlzcGxheSc6XG4gICAgICBlbnRyeSA9IGRpc3BsYXlMYWJlbCArIGNvbXBvbmVudC52YWx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NvbXBsZXRpb24nOlxuICAgICAgZW50cnkgPSBjb21wbGV0aW9uTGFiZWwgKyBjb21wb25lbnQudmFsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdlcnJvcic6XG4gICAgICBlbnRyeSA9IGVycm9yTGFiZWwgKyBjb21wb25lbnQudmFsdWU7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGNvbXBvbmVudCB0eXBlJyk7XG4gIH1cbiAgcmV0dXJuIEVSTF9FTlRSWShlbnRyeSk7XG59XG5cbmNvbnN0IF9lcmxrb25pZ0NvbmZpZyA9IHtcbiAgaWQ6ICdlcmxrb25pZycsXG4gIGNsYXNzZXM6IHsgJ2VybGtvbmlnJzogdHJ1ZSwgJ2NvbnRhaW5lcic6IHRydWUgfVxufTtcbmNvbnN0IF9jb25zb2xlQ29uZmlnID0geyBpZDogJ2VybC1jb25zb2xlJyB9O1xuY29uc3QgX3Rlcm1pbmFsQ29uZmlnID0geyBjbGFzc2VzOiB7ICd0ZXJtaW5hbCc6IHRydWUgfX07XG5jb25zdCBfZXJsVmlld3BvcnRDb25maWcgPSB7IGNsYXNzZXM6IHsgJ2VybC12aWV3cG9ydCc6IHRydWUgfX07XG5cbmV4cG9ydCB7IEVSTEtJTkcgfTtcbiIsImZ1bmN0aW9uIGdldEN1cnNvck9mZnNldChjdXJzb3IsIG5vZGUpIHtcbiAgY29uc3QgbWFyZ2luID0gNTtcbiAgcmV0dXJuIGN1cnNvci5vZmZzZXRMZWZ0ICsgY3Vyc29yLm9mZnNldFdpZHRoICsgbWFyZ2luIC0gbm9kZS5vZmZzZXRXaWR0aDtcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudChpZCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xufVxuXG5mdW5jdGlvbiBnZXRQZXJjZW50YWdlKG51bWJlcikge1xuICByZXR1cm4gKDEwMCAqIG51bWJlcikgKyAnJSc7XG59XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZXJsLXZpZXdwb3J0JylbMF07XG59XG5cbmZ1bmN0aW9uIG9uRXZlbnQoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBfc2Nyb2xsKG5vZGUsIGN1cnNvcikge1xuICBub2RlLnNjcm9sbFRvcCA9IG5vZGUuc2Nyb2xsSGVpZ2h0IC0gbm9kZS5jbGllbnRIZWlnaHQ7XG4gIG5vZGUuc2Nyb2xsTGVmdCA9IGdldEN1cnNvck9mZnNldChjdXJzb3IsIG5vZGUpO1xufVxuXG5mdW5jdGlvbiBzY3JvbGwoY3NzU2Nyb2xsYmFyRGV0ZWN0ZWQpIHtcbiAgaWYgKGNzc1Njcm9sbGJhckRldGVjdGVkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGN1cnNvciA9IGdldEVsZW1lbnQoJ2VybC1jdXJzb3InKTtcbiAgICAgIF9zY3JvbGwoZ2V0Vmlld3BvcnQoKSwgY3Vyc29yKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB2aWV3cG9ydCA9IGdldFZpZXdwb3J0KCk7XG4gICAgY29uc3QgY3Vyc29yID0gZ2V0RWxlbWVudCgnZXJsLWN1cnNvcicpO1xuICAgIGNvbnN0IHhUcmFjayA9IGdldEVsZW1lbnQoJ2VybC14LXNjcm9sbC10cmFjaycpO1xuICAgIGNvbnN0IHhUaHVtYiA9IGdldEVsZW1lbnQoJ2VybC14LXNjcm9sbC10aHVtYicpO1xuICAgIGNvbnN0IHlUcmFjayA9IGdldEVsZW1lbnQoJ2VybC15LXNjcm9sbC10cmFjaycpO1xuICAgIGNvbnN0IHlUaHVtYiA9IGdldEVsZW1lbnQoJ2VybC15LXNjcm9sbC10aHVtYicpO1xuICAgIGNvbnN0IHByb21wdCA9IGdldEVsZW1lbnQoJ2VybC1wcm9tcHQnKTtcblxuICAgIGNvbnN0IHZpZXdwb3J0V2lkdGggPSB2aWV3cG9ydC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IHZpZXdwb3J0Lm9mZnNldEhlaWdodDtcblxuICAgIHNldFhUaHVtYlZpc2liaWxpdHkodmlld3BvcnQsIHZpZXdwb3J0V2lkdGgsIHhUcmFjaywgeFRodW1iLCBjdXJzb3IsIHByb21wdCk7XG4gICAgc2V0WVRodW1iVmlzaWJpbGl0eSh2aWV3cG9ydCwgdmlld3BvcnRIZWlnaHQsIHlUcmFjaywgeVRodW1iLCBjdXJzb3IpO1xuICAgIHNjcm9sbEhvcml6b250YWxseSh2aWV3cG9ydCwgdmlld3BvcnRXaWR0aCwgeFRyYWNrLCB4VGh1bWIpO1xuICAgIHNjcm9sbFZlcnRpY2FsbHkodmlld3BvcnQsIHZpZXdwb3J0SGVpZ2h0LCB5VHJhY2ssIHlUaHVtYik7XG5cbiAgICBfc2Nyb2xsKHZpZXdwb3J0LCBjdXJzb3IpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzY3JvbGxCYXJIb3Jpem9udGFsbHkoeFRodW1iLCBsZWZ0UmF0aW8pIHtcbiAgeFRodW1iLnN0eWxlLmxlZnQgPSBnZXRQZXJjZW50YWdlKGxlZnRSYXRpbyk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbEJhclZlcnRpY2FsbHkoeVRodW1iLCB0b3BSYXRpbykge1xuICB5VGh1bWIuc3R5bGUudG9wID0gZ2V0UGVyY2VudGFnZSh0b3BSYXRpbyk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbENvbnRlbnRIb3Jpem9udGFsbHkodmlld3BvcnQsIGxlZnRSYXRpbykge1xuICB2aWV3cG9ydC5zY3JvbGxMZWZ0ID0gbGVmdFJhdGlvICogdmlld3BvcnQuc2Nyb2xsV2lkdGg7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbENvbnRlbnRWZXJ0aWNhbGx5KHZpZXdwb3J0LCB0b3BSYXRpbykge1xuICB2aWV3cG9ydC5zY3JvbGxUb3AgPSB0b3BSYXRpbyAqIHZpZXdwb3J0LnNjcm9sbEhlaWdodDtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsVmVydGljYWxseSh2aWV3cG9ydCwgdmlld3BvcnRIZWlnaHQsIHlUcmFjaywgeVRodW1iKSB7XG4gIGNvbnN0IHlUaHVtYkhlaWdodCA9IHlUaHVtYi5vZmZzZXRIZWlnaHQ7XG4gIGNvbnN0IHlUcmFja0hlaWdodCA9IHlUcmFjay5vZmZzZXRIZWlnaHQ7XG4gIGNvbnN0IHVsbGFnZSA9IHlUcmFja0hlaWdodCAtIHlUaHVtYkhlaWdodDtcblxuICBmdW5jdGlvbiBtb3VzZU1vdmVfdmVydGljYWwoZXZlbnQpIHtcbiAgICBjb25zdCBfdG9wID0gZXZlbnQuY2xpZW50WSAtIHlUcmFjay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgY29uc3QgdG9wID0gX3RvcCA8IDAgPyAwIDogX3RvcCA+IHVsbGFnZSA/IHVsbGFnZSA6IF90b3A7XG4gICAgY29uc3QgdG9wUmF0aW8gPSB0b3AgLyB5VHJhY2tIZWlnaHQ7XG4gICAgc2Nyb2xsQmFyVmVydGljYWxseSh5VGh1bWIsIHRvcFJhdGlvKTtcbiAgICBzY3JvbGxDb250ZW50VmVydGljYWxseSh2aWV3cG9ydCwgdG9wUmF0aW8pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1vdXNlRG93bl92ZXJ0aWNhbChldmVudCkge1xuICAgIHlUaHVtYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDAsIDgwLCAwKSc7XG4gICAgb25FdmVudCgnbW91c2Vtb3ZlJywgbW91c2VNb3ZlX3ZlcnRpY2FsKTtcbiAgICBvbkV2ZW50KCdtb3VzZXVwJywgbW91c2VVcF92ZXJ0aWNhbCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbW91c2VVcF92ZXJ0aWNhbChldmVudCkge1xuICAgIHlUaHVtYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSg1NSwgNTMsIDUwLCAwLjUpJztcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVfdmVydGljYWwpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwX3ZlcnRpY2FsKTtcbiAgfTtcblxuICB5VGh1bWIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duX3ZlcnRpY2FsKTtcbiAgeVRodW1iLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bl92ZXJ0aWNhbCk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbEhvcml6b250YWxseSh2aWV3cG9ydCwgdmlld3BvcnRXaWR0aCwgeFRyYWNrLCB4VGh1bWIpIHtcbiAgY29uc3QgeFRodW1iV2lkdGggPSB4VGh1bWIub2Zmc2V0V2lkdGg7XG4gIGNvbnN0IHhUcmFja1dpZHRoID0geFRyYWNrLm9mZnNldFdpZHRoO1xuICBjb25zdCB1bGxhZ2UgPSB4VHJhY2tXaWR0aCAtIHhUaHVtYldpZHRoO1xuXG4gIGZ1bmN0aW9uIG1vdXNlTW92ZV9ob3Jpem9udGFsKGV2ZW50KSB7XG4gICAgY29uc3QgX2xlZnQgPSBldmVudC5jbGllbnRYIC0geFRyYWNrLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgY29uc3QgbGVmdCA9IF9sZWZ0IDwgMCA/IDAgOiBfbGVmdCA+IHVsbGFnZSA/IHVsbGFnZSA6IF9sZWZ0O1xuICAgIGNvbnN0IGxlZnRSYXRpbyA9IGxlZnQgLyB4VHJhY2tXaWR0aDtcbiAgICBzY3JvbGxCYXJIb3Jpem9udGFsbHkoeFRodW1iLCBsZWZ0UmF0aW8pO1xuICAgIHNjcm9sbENvbnRlbnRIb3Jpem9udGFsbHkodmlld3BvcnQsIGxlZnRSYXRpbyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbW91c2VVcF9ob3Jpem9udGFsKGV2ZW50KSB7XG4gICAgeFRodW1iLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDU1LCA1MywgNTAsIDAuNSknO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZV9ob3Jpem9udGFsKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcF9ob3Jpem9udGFsKTtcbiAgfTtcblxuICBmdW5jdGlvbiBtb3VzZURvd25faG9yaXpvbnRhbChldmVudCkge1xuICAgIHhUaHVtYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDAsIDgwLCAwKSc7XG4gICAgb25FdmVudCgnbW91c2Vtb3ZlJywgbW91c2VNb3ZlX2hvcml6b250YWwpO1xuICAgIG9uRXZlbnQoJ21vdXNldXAnLCBtb3VzZVVwX2hvcml6b250YWwpO1xuICB9O1xuXG4gIHhUaHVtYi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25faG9yaXpvbnRhbCk7XG4gIHhUaHVtYi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25faG9yaXpvbnRhbCk7XG59XG5cbmZ1bmN0aW9uIHNldFhUaHVtYlZpc2liaWxpdHkodmlld3BvcnQsIHZpZXdwb3J0V2lkdGgsIHhUcmFjaywgeFRodW1iLCBjdXJzb3IsIHByb21wdCkge1xuICBjb25zdCB4VHJhY2tXaWR0aCA9IHhUcmFjay5vZmZzZXRXaWR0aDtcbiAgY29uc3QgdGVybWluYWxXaWR0aCA9IHZpZXdwb3J0LnNjcm9sbFdpZHRoO1xuICBjb25zdCB4VGh1bWJTdHlsZSA9IHhUaHVtYi5zdHlsZTtcblxuICBpZiAodmlld3BvcnRXaWR0aCA8IHRlcm1pbmFsV2lkdGgpIHtcbiAgICBjb25zdCBmdWxsUHJvbXB0T2Zmc2V0V2lkdGggPSBwcm9tcHQub2Zmc2V0TGVmdCArIHByb21wdC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBzdGFydCA9IGZ1bGxQcm9tcHRPZmZzZXRXaWR0aDtcbiAgICBjb25zdCB2aWV3cG9ydFJhdGlvID0gdmlld3BvcnRXaWR0aCAvIHRlcm1pbmFsV2lkdGg7XG4gICAgY29uc3QgeFRodW1iV2lkdGggPSB2aWV3cG9ydFJhdGlvICogeFRyYWNrV2lkdGg7XG4gICAgY29uc3Qgdmlld3BvcnRQZXJjZW50YWdlID0gZ2V0UGVyY2VudGFnZSh2aWV3cG9ydFJhdGlvKTtcbiAgICBjb25zdCB1bGxhZ2UgPSB4VHJhY2tXaWR0aCAtIHhUaHVtYldpZHRoO1xuICAgIGNvbnN0IHhQb3NpdGlvbiA9IGN1cnNvci5vZmZzZXRMZWZ0ICsgY3Vyc29yLm9mZnNldFdpZHRoIC0gc3RhcnQ7XG4gICAgY29uc3QgY3Vyc29yUmF0aW8gPSAoeFBvc2l0aW9uIC8gdGVybWluYWxXaWR0aCkgKiAodWxsYWdlIC8geFRyYWNrV2lkdGgpO1xuICAgIGNvbnN0IGN1cnNvclBlcmNlbnRhZ2UgPSBnZXRQZXJjZW50YWdlKGN1cnNvclJhdGlvKTtcblxuICAgIHhUaHVtYlN0eWxlLmxlZnQgPSBjdXJzb3JQZXJjZW50YWdlO1xuICAgIHhUaHVtYlN0eWxlLndpZHRoID0gdmlld3BvcnRQZXJjZW50YWdlO1xuICAgIHhUaHVtYlN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH0gZWxzZSB7XG4gICAgeFRodW1iU3R5bGUubGVmdCA9IDA7XG4gICAgeFRodW1iU3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgeFRodW1iU3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFlUaHVtYlZpc2liaWxpdHkodmlld3BvcnQsIHZpZXdwb3J0SGVpZ2h0LCB5VHJhY2ssIHlUaHVtYiwgY3Vyc29yKSB7XG4gIGNvbnN0IHlUcmFja0hlaWdodCA9IHlUcmFjay5vZmZzZXRIZWlnaHQ7XG4gIGNvbnN0IHRlcm1pbmFsSGVpZ2h0ID0gdmlld3BvcnQuc2Nyb2xsSGVpZ2h0O1xuICBjb25zdCB5VGh1bWJTdHlsZSA9IHlUaHVtYi5zdHlsZTtcblxuICBpZiAodmlld3BvcnRIZWlnaHQgPCB0ZXJtaW5hbEhlaWdodCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gdmlld3BvcnQub2Zmc2V0VG9wO1xuICAgIGNvbnN0IHZpZXdwb3J0UmF0aW8gPSB2aWV3cG9ydEhlaWdodCAvIHRlcm1pbmFsSGVpZ2h0O1xuICAgIGNvbnN0IHlUaHVtYkhlaWdodCA9IHZpZXdwb3J0UmF0aW8gKiB5VHJhY2tIZWlnaHQ7XG4gICAgY29uc3Qgdmlld3BvcnRQZXJjZW50YWdlID0gZ2V0UGVyY2VudGFnZSh2aWV3cG9ydFJhdGlvKTtcbiAgICBjb25zdCB1bGxhZ2UgPSB5VHJhY2tIZWlnaHQgLSB5VGh1bWJIZWlnaHQ7XG4gICAgY29uc3QgeVBvc2l0aW9uID0gY3Vyc29yLm9mZnNldFRvcCArIGN1cnNvci5vZmZzZXRIZWlnaHQgLSBzdGFydDtcbiAgICBjb25zdCBjdXJzb3JSYXRpbyA9ICh5UG9zaXRpb24gLyB0ZXJtaW5hbEhlaWdodCkgKiAodWxsYWdlIC8geVRyYWNrSGVpZ2h0KTtcbiAgICBjb25zdCBjdXJzb3JQZXJjZW50YWdlID0gZ2V0UGVyY2VudGFnZShjdXJzb3JSYXRpbyk7XG5cbiAgICB5VGh1bWJTdHlsZS50b3AgPSBjdXJzb3JQZXJjZW50YWdlO1xuICAgIHlUaHVtYlN0eWxlLmhlaWdodCA9IHZpZXdwb3J0UGVyY2VudGFnZTtcbiAgICB5VGh1bWJTdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICB9IGVsc2Uge1xuICAgIHlUaHVtYlN0eWxlLnRvcCA9IDA7XG4gICAgeVRodW1iU3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIHlUaHVtYlN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgfVxufVxuXG5leHBvcnQgeyBzY3JvbGwgfTtcbiIsImltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuL2NvbnNvbGUvaW5pdGlhbGl6ZSc7XG5pbXBvcnQgeyBpbnRlcnByZXQgfSAgZnJvbSAnLi9saXNwL2ludGVycHJldCc7XG5pbXBvcnQgeyBrZXlUb2tlbnMgfSAgZnJvbSAnLi9saXNwL2tleVRva2Vucyc7XG5pbXBvcnQgaW50cm9kdWN0aW9uICAgZnJvbSAnLi9pbnRyb2R1Y3Rpb24ubGlzcCc7XG5cbmNvbnN0IF9rZXlUb2tlbnMgPSAga2V5VG9rZW5zLm1hcChmdW5jdGlvbiAoa2V5VG9rZW4pIHtcbiAgcmV0dXJuICc6JyArIGtleVRva2VuO1xufSk7XG5cbmNvbnN0IHByb21wdExhYmVsID0gJ0xpc3A+ICc7XG5cbmZ1bmN0aW9uIGdldENhbmRpZGF0ZXMocHJlZml4KSB7XG4gIGNvbnN0IGVudktleXMgPSBpbnRlcnByZXQoXCIoa2V5cyAoLWdldC1jdXJyZW50LWVudi0pKVwiKVswXVxuICAgICAgLnZhbHVlXG4gICAgICAuc2xpY2UoMSwgLTEpXG4gICAgICAuc3BsaXQoJyAnKTtcbiAgcmV0dXJuIGdldE1hdGNoZXMocHJlZml4LCBfa2V5VG9rZW5zLmNvbmNhdChlbnZLZXlzKSk7XG59XG5cbmZ1bmN0aW9uIGdldE1hdGNoZXMocHJlZml4LCB3b3Jkcykge1xuICBpZiAoIS9eWy1hLXpBLVowLTldKyQvLnRlc3QocHJlZml4KSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBjb25zdCByZWdleCA9IFJlZ0V4cCgnKF58XFxXKTonICsgcHJlZml4KTtcbiAgY29uc3QgbWF0Y2hlcyA9IFtdO1xuICBmb3IgKGxldCBpbmRleCBpbiB3b3Jkcykge1xuICAgIGNvbnN0IHdvcmQgPSB3b3Jkc1tpbmRleF07XG4gICAgaWYgKHJlZ2V4LnRlc3Qod29yZCkpIHtcbiAgICAgIG1hdGNoZXMucHVzaCh3b3JkLnNsaWNlKDEpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5cbmludGVycHJldChpbnRyb2R1Y3Rpb24pO1xuXG5pbml0aWFsaXplKHtcbiAgZ2V0Q2FuZGlkYXRlczogZ2V0Q2FuZGlkYXRlcyxcbiAgaW5pdGlhbE1vZGVsRGF0YTogJyhoZWxwKSA7IFByZXNzIGVudGVyIGZvciBoZWxwLicsXG4gIG5vZGVJZDogJ3ZpZXdwb3J0JyxcbiAgcHJvbXB0TGFiZWw6IHByb21wdExhYmVsLFxuICB0cmFuc2Zvcm06IGludGVycHJldCxcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIihkb1xcbiAgKGRlZiEgaGVscCAoZm4qICgpIChwcmV0dHktcHJpbnQgKFxcbiAgICBzdHJpbmdcXG4gICAgXFxcIiAgVGhpcyBpcyBhIHZpcnR1YWwgdGVybWluYWwgcnVubmluZyBhIGxpc3AgaW50ZXJwcmV0ZXIuXFxcIlxcbiAgICBcXFwiXFxcXG5cXFwiXFxuICAgIFxcXCJcXFxcbiAgUHJlc3MgPHRhYj4gZm9yIGNvbXBsZXRpb24gb2Yga2V5d29yZHMgYW5kIGRlZmluZWQgaWRlbnRpZmVycy5cXFwiXFxuICAgIFxcXCJcXFxcbiAgUHJlc3MgPEN0cmwtYT4gdG8gbW92ZSB0aGUgY3Vyc29yIHRvIHRoZSBiZWdpbmluZyBvZiB0aGUgbGluZS5cXFwiXFxuICAgIFxcXCJcXFxcbiAgUHJlc3MgPEN0cmwtZT4gdG8gbW92ZSB0aGUgY3Vyc29yIHRvIHRoZSBlbmQgb2YgdGhlIGxpbmUuXFxcIlxcbiAgICBcXFwiXFxcXG4gIFByZXNzIDxDdHJsLWg+IHRvIGRlbGV0ZSB0aGUgY2hhcmFjdGVyIHByZWNlZGluZyB0aGUgY3Vyc29yLlxcXCJcXG4gICAgXFxcIlxcXFxuICBQcmVzcyA8Q3RybC1sPiB0byBjbGVhciB0aGUgY29uc29sZS5cXFwiXFxuICAgIFxcXCJcXFxcbiAgUHJlc3MgPEN0cmwtdT4gdG8gY2xlYXIgdGhlIHBvcnRpb24gb2YgdGhlIGxpbmUgcHJlY2VkaW5nIHRoZSBjdXJzb3IuXFxcIlxcbiAgICBcXFwiXFxcXG4gIFByZXNzIDxDdHJsLXc+IHRvIGRlbGV0ZSB0aGUgcG9ydGlvbiBvZiBhIHdvcmQgcHJlY2VkaW5nIHRoZSBjdXJzb3IuXFxcIlxcbiAgICBcXFwiXFxcXG4gICAgICAoTk9URTogaW4gQ2hyb21lLCA8Q3RybC13PiBjbG9zZXMgdGhlIHdpbmRvdy4pXFxcIlxcbiAgICBcXFwiXFxcXG5cXFwiXFxuICAgIFxcXCJcXFxcbiAgRXhlY3V0ZSBgKGtleXMgKC1nZXQtY3VycmVudC1lbnYtKSlgIHRvIHNlZSBhIGxpc3Qgb2YgYXZhaWxhYmxlLCBkZWZpbmVkIGlkZW50aWZpZXJzLlxcXCJcXG4gICAgXFxcIlxcXFxuICBFeGVjdXRlIGAoZXhhbXBsZS0xKWAgYW5kIGAoZXhhbXBsZS0yKWAgdG8gc2VlIGludHJvZHVjdG9yeSBleGFtcGxlcy5cXFwiKSkpKVxcblxcbiAgKGRlZiEgZXhhbXBsZS0xIChmbiogKCkgKHByZXR0eS1wcmludCAoXFxuICAgIHN0cmluZ1xcbiAgICAgIFxcXCI7IGB0aW1lYCwgYSBzaW1wbGUgcHJvZmlsaW5nIGZ1bmN0aW9uXFxcIlxcbiAgICAgIFxcXCJcXFxcbihkZWYhIHRpbWUhIChmbiogKGZvcm0pIChcXFwiXFxuICAgICAgXFxcIlxcXFxuICBsZXQqIChzdGFydCAodGltZS1tcykpIChcXFwiXFxuICAgICAgXFxcIlxcXFxuICAgIChsZXQqIChyZXN1bHQgKGV2YWwgZm9ybSkpXFxcIlxcbiAgICAgIFxcXCJcXFxcbiAgICAgIHsgOnJlc3VsdCByZXN1bHQsIDp0aW1lICgtICh0aW1lLW1zKSBzdGFydCkgfSkpKSkpXFxcIlxcbiAgICAgIFxcXCJcXFxcblxcXCJcXG4gICAgICBcXFwiXFxcXG47IGBmaWJgLCBhIGZ1bmN0aW9uIHRoYXQgcmVjdXJzaXZlbHkgZGV0ZXJtaW5lcyB0aGUgbnRoIEZpYm9uYWNjaSBudW1iZXJcXFwiXFxuICAgICAgXFxcIlxcXFxuKGRlZiEgZmliIChmaXgqIChmbiogKGspIChcXFwiXFxuICAgICAgXFxcIlxcXFxuICBmbiogKG4pIChcXFwiXFxuICAgICAgXFxcIlxcXFxuICAgIGNvbmRcXFwiXFxuICAgICAgXFxcIlxcXFxuICAgICAgKD0gbiAwKSAxXFxcIlxcbiAgICAgIFxcXCJcXFxcbiAgICAgICg9IG4gMSkgMVxcXCJcXG4gICAgICBcXFwiXFxcXG4gICAgICA6ZWxzZSAoKyAoayAoLSBuIDIpKSAoayAoLSBuIDEpKSkpKSkpKVxcXCJcXG4gICAgICBcXFwiXFxcXG5cXFwiXFxuICAgICAgXFxcIlxcXFxuOyBgbWVtZmliYCwgYSBtZW1vaXplZCBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgdGhlIG50aCBGaWJvbmFjY2kgbnVtYmVyXFxcIlxcbiAgICAgIFxcXCJcXFxcbihkZWYhIG1lbWZpYiAobWVtZml4KiAoZm4qIChrKSAoXFxcIlxcbiAgICAgIFxcXCJcXFxcbiAgZm4qIChuKSAoXFxcIlxcbiAgICAgIFxcXCJcXFxcbiAgICBjb25kXFxcIlxcbiAgICAgIFxcXCJcXFxcbiAgICAgICg9IG4gMCkgMVxcXCJcXG4gICAgICBcXFwiXFxcXG4gICAgICAoPSBuIDEpIDFcXFwiXFxuICAgICAgXFxcIlxcXFxuICAgICAgOmVsc2UgKCsgKGsgKC0gbiAyKSkgKGsgKC0gbiAxKSkpKSkpKSlcXFwiXFxuICAgICAgXFxcIlxcXFxuXFxcIlxcbiAgICAgIFxcXCJcXFxcbih0aW1lISAnKG1hcCBmaWIgKC4uIDAgMTUpKSlcXFwiXFxuICAgICAgXFxcIlxcXFxuKHRpbWUhICcobWFwIG1lbWZpYiAoLi4gMCAxNSkpKVxcXCIpKSkpXFxuXFxuICAoZGVmISBleGFtcGxlLTIgKGZuKiAoKSAocHJldHR5LXByaW50IChcXG4gICAgc3RyaW5nXFxuICAgICAgXFxcIjsgQ2h1cmNoIG51bWJlcnNcXFwiXFxuICAgICAgXFxcIlxcXFxuKGRlZiEgXzAgKHdpdGgtbWV0YSAoXFxcXCBmIHggeCkgMClcXFwiXFxuICAgICAgXFxcIlxcXFxuKGRlZiEgXzEgKHdpdGgtbWV0YSAoXFxcXCBmIHggKGYgeCkpIDEpXFxcIlxcbiAgICAgIFxcXCJcXFxcbihkZWYhIF8yICh3aXRoLW1ldGEgKFxcXFwgZiB4IChmIChmIHgpKSkgMilcXFwiXFxuICAgICAgXFxcIlxcXFxuXFxcIlxcbiAgICAgIFxcXCJcXFxcbihtZXRhIF8wKVxcXCJcXG4gICAgICBcXFwiXFxcXG4obWV0YSBfMSlcXFwiXFxuICAgICAgXFxcIlxcXFxuKG1ldGEgXzIpXFxcIlxcbiAgICAgIFxcXCJcXFxcblxcXCJcXG4gICAgICBcXFwiXFxcXG47IGB0aW1lczEwYCwgYSBzaW1wbGUgZnVuY3Rpb24gdG8gdGVzdCB0aGUgYWJvdmUgQ2h1cmNoIG51bWJlcnNcXFwiXFxuICAgICAgXFxcIlxcXFxuKGRlZiEgdGltZXMxMCAoZm4qIChuKSAoKiBuIDEwKSkpXFxcIlxcbiAgICAgIFxcXCJcXFxcblxcXCJcXG4gICAgICBcXFwiXFxcXG4oKF8wIHRpbWVzMTApIDEpXFxcIlxcbiAgICAgIFxcXCJcXFxcbigoXzEgdGltZXMxMCkgMSlcXFwiXFxuICAgICAgXFxcIlxcXFxuKChfMiB0aW1lczEwKSAxKVxcXCJcXG4gICAgICBcXFwiXFxcXG5cXFwiXFxuICAgICAgXFxcIlxcXFxuOyBzdWNjZXNzb3IgZnVuY3Rpb25cXFwiXFxuICAgICAgXFxcIlxcXFxuKGRlZiEgc3VjYyAoZm4qIChuKSAoXFxcIlxcbiAgICAgIFxcXCJcXFxcbiAgd2l0aC1tZXRhIFxcXCJcXG4gICAgICBcXFwiXFxcXG4gICAgKFxcXFwgZiB4IChmICgobiBmKSB4KSkpXFxcIlxcbiAgICAgIFxcXCJcXFxcbiAgICAoKyAobWV0YSBuKSAxKSkpKVxcXCJcXG4gICAgICBcXFwiXFxcXG5cXFwiXFxuICAgICAgXFxcIlxcXFxuOyBwcmVkZWNlc3NvciBmdW5jdGlvblxcXCJcXG4gICAgICBcXFwiXFxcXG4oZGVmISBwcmVkIChmbiogKG4pIChcXFwiXFxuICAgICAgXFxcIlxcXFxuICB3aXRoLW1ldGFcXFwiXFxuICAgICAgXFxcIlxcXFxuICAgIChcXFxcIGYgeCAoKChuIChcXFxcIGcgaCAoaCAoZyBmKSkpKSAoXFxcXCB1IHgpKSAoXFxcXCB1IHUpKSlcXFwiXFxuICAgICAgXFxcIlxcXFxuICAgICgtIChtZXRhIG4pIDEpKSkpXFxcIlxcbiAgICAgIFxcXCJcXFxcblxcXCJcXG4gICAgICBcXFwiXFxcXG4oZGVmISBfNCAoc3VjYyAoc3VjYyBfMikpKVxcXCJcXG4gICAgICBcXFwiXFxcXG4obWV0YSBfNClcXFwiXFxuICAgICAgXFxcIlxcXFxuKChfNCB0aW1lczEwKSAxKVxcXCJcXG4gICAgICBcXFwiXFxcXG5cXFwiXFxuICAgICAgXFxcIlxcXFxuKGRlZiEgXzMgKHByZWQgXzQpKVxcXCJcXG4gICAgICBcXFwiXFxcXG4obWV0YSBfMylcXFwiXFxuICAgICAgXFxcIlxcXFxuKChfMyB0aW1lczEwKSAxKVxcXCJcXG4gICAgKSkpKVxcbilcXG5cIiIsImltcG9ydCB7IGNvbW1lbnRTaWduYWwgfSBmcm9tICcuL2NvbW1lbnRTaWduYWwnO1xuaW1wb3J0IHsgZXZhbHVhdGUgfSBmcm9tICcuL2V2YWx1YXRlJztcblxuY29uc3QgX3Byb2Nlc3MgPSBmdW5jdGlvbih0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGVudnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oc291cmNlQ29kZSkge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgICAgY29uc3QgYWRkUmVzdWx0ID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgIH07XG4gICAgICBjb25zdCB2YWx1ZSA9IGV2YWx1YXRlKGVudnMsIGFkZFJlc3VsdCkodHJhbnNmb3JtKHNvdXJjZUNvZGUpKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9ICh2YWx1ZSA9PT0gY29tbWVudFNpZ25hbClcbiAgICAgICAgPyB7IGVmZmVjdDogeyB0eXBlOiAnY29tbWVudCcgfSB9XG4gICAgICAgIDogeyBlZmZlY3Q6IGZhbHNlLCB2YWx1ZTogdmFsdWUgfTtcbiAgICAgIGFkZFJlc3VsdChyZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydCB7IF9wcm9jZXNzIH07XG4iLCJjb25zdCBjb21tZW50U2lnbmFsID0ge307XG5cbmV4cG9ydCB7IGNvbW1lbnRTaWduYWwgfTtcbiIsImNvbnN0IGFkZEVudiA9IGZ1bmN0aW9uIChlbnZTdGFjaywgbmV3RW52KSB7XG4gIGNvbnN0IGNvcHkgPSBlbnZTdGFjay5zbGljZSgwKTtcbiAgY29weS51bnNoaWZ0KG5ld0Vudik7XG4gIHJldHVybiBjb3B5O1xufTtcblxuY29uc3QgZ2V0TGFzdCA9IGZ1bmN0aW9uIChhcnJheSkge1xuICByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG59O1xuXG5jb25zdCBsb29rdXAgPSBmdW5jdGlvbiAoZW52U3RhY2ssIGtleSkge1xuICBjb25zdCBjb3B5ID0gZW52U3RhY2suc2xpY2UoMCk7XG4gIHdoaWxlIChjb3B5Lmxlbmd0aCAhPT0gMCkge1xuICAgIGNvbnN0IGVudiA9IGNvcHlbMF07XG4gICAgY29uc3QgdmFsdWUgPSBlbnZba2V5XTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb3B5LnNoaWZ0KCk7XG4gIH1cbiAgdGhyb3cgXCJWQUxVRSBDT1JSRVNQT05ESU5HIFRPIFxcXCJcIiArIGtleSArIFwiXFxcIiBET0VTIE5PVCBFWElTVCBJTiBFTlYtU1RBQ0tcIjtcbn07XG5cbmNvbnN0IHNldCA9IGZ1bmN0aW9uIChlbnYsIGtleSwgdmFsdWUpIHtcbiAgZW52W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuY29uc3Qgc2V0TWFpbkVudiA9IGZ1bmN0aW9uIChlbnZTdGFjaywga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc2V0KGdldExhc3QoZW52U3RhY2spLCBrZXksIHZhbHVlKTtcbn07XG5cbmNvbnN0IHVuc2V0ID0gZnVuY3Rpb24gKGVudiwga2V5KSB7XG4gIGNvbnN0IHZhbHVlID0gZW52W2tleV07XG4gIGRlbGV0ZSBlbnZba2V5XTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuY29uc3QgdW5zZXRNYWluRW52ID0gZnVuY3Rpb24gKGVudlN0YWNrLCBrZXkpIHtcbiAgcmV0dXJuIHVuc2V0KGdldExhc3QoZW52U3RhY2spLCBrZXkpO1xufTtcblxuZXhwb3J0IHtcbiAgYWRkRW52LFxuICBsb29rdXAsXG4gIHNldE1haW5FbnYsXG4gIHVuc2V0TWFpbkVudlxufTtcbiIsImltcG9ydCB7IGNyZWF0ZUVybEJvb2xlYW4gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybElkZW50aWZpZXIgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybEluZGV4IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxOdW1iZXIgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBleHRyYWN0SnNWYWx1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZnJvbUFycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBpc0pzTmFOIH0gZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNKc051bWJlciB9IGZyb20gJy4vanMtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzSnNTdHJpbmcgfSBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5pbXBvcnQgeyByZWR1Y2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHRvQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcblxuY29uc3QgIF9fc2xpY2UgID0gW10uc2xpY2U7XG5jb25zdCBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuY29uc3QgYWRkID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKG5icnMucmVkdWNlKGZ1bmN0aW9uKHgsIG5icikge1xuICAgIHJldHVybiB4ICs9IG5icjtcbiAgfSkpO1xufTtcblxuY29uc3QgY29udGFpbnMgPSBmdW5jdGlvbihpbmRleCwga2V5KSB7XG4gIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKGtleSBpbiBpbmRleCk7XG59O1xuXG5jb25zdCBkaXNzb2MgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgaW5kZXggPSBhcmd1bWVudHNbMF07XG4gIGNvbnN0IGtleXMgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICBjb25zdCBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgY29uc3QgY29weSA9IHt9O1xuICBmb3IgKGxldCBrZXkgaW4gaW5kZXgpIHtcbiAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGluZGV4LCBrZXkpKSBjb250aW51ZTtcbiAgICBjb25zdCB2YWx1ZSA9IGluZGV4W2tleV07XG4gICAgY29weVtrZXldID0gdmFsdWU7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgZGVsZXRlIGNvcHlba2V5XTtcbiAgfVxuICByZXR1cm4gY3JlYXRlRXJsSW5kZXgoY29weSk7XG59O1xuXG5jb25zdCBkaXZpZGUgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIobmJycy5yZWR1Y2UoZnVuY3Rpb24oeCwgbmJyKSB7XG4gICAgcmV0dXJuIHggLz0gbmJyO1xuICB9KSk7XG59O1xuXG5jb25zdCBleHBvbmVudGlhdGUgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIobmJycy5yZWR1Y2UoZnVuY3Rpb24oeCwgbmJyKSB7XG4gICAgcmV0dXJuIE1hdGgucG93KHgsIG5icik7XG4gIH0pKTtcbn07XG5cbmNvbnN0IGdldCA9IGZ1bmN0aW9uKGpzSW5kZXgsIGpzS2V5KSB7XG4gIHJldHVybiBqc0luZGV4W2pzS2V5XTtcbn07XG5cbmNvbnN0IGdldEVudmlyb25tZW50ID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gIGNvbnN0IGVudmlyb25tZW50ID0gY29uZmlnLmVudmlyb25tZW50O1xuICBzZXRDb3JlRm5zT25Kc1ZhbHVlc0JhbmcoZW52aXJvbm1lbnQsIGZ1bmN0aW9uc09uSnNWYWx1ZXMpO1xuICByZXR1cm4gZW52aXJvbm1lbnQ7XG59O1xuXG5jb25zdCBncmVhdGVyVGhhbk9yRXF1YWwgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKG5icnNbMF0gPj0gbmJyc1sxXSk7XG59O1xuXG5jb25zdCBncmVhdGVyVGhhbiA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4obmJyc1swXSA+IG5icnNbMV0pO1xufTtcblxuY29uc3QgaW5kZXggPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgYXJncyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIGNvbnN0IGxlbiA9IGFyZ3MubGVuZ3RoO1xuICBjb25zdCBfaW5kZXggPSB7fTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGsgPSBhcmdzW2ldO1xuICAgIGlmIChpICUgMiA9PT0gMCkge1xuICAgICAgX2luZGV4W2tdID0gYXJnc1tpICsgMV07XG4gICAgfVxuICB9XG4gIHJldHVybiBjcmVhdGVFcmxJbmRleChfaW5kZXgpO1xufTtcblxuY29uc3Qga2V5cyA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gIGNvbnN0IF9rZXlzID0gW107XG4gIGZvciAobGV0IGtleSBpbiBpbmRleCkge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoaW5kZXgsIGtleSkpIGNvbnRpbnVlO1xuICAgIGNvbnN0IHZhbHVlID0gaW5kZXhba2V5XTtcbiAgICBjb25zdCBqc05iciA9IHBhcnNlRmxvYXQoa2V5LCAxMCk7XG4gICAgY29uc3QgX2tleSA9IGlzSnNOYU4oanNOYnIpXG4gICAgICAgID8gKGtleVswXSA9PT0gJzonID8gY3JlYXRlRXJsSWRlbnRpZmllciA6IGNyZWF0ZUVybFN0cmluZykoa2V5KVxuICAgICAgICA6IGNyZWF0ZUVybE51bWJlcihqc05icik7XG4gICAgX2tleXMucHVzaChfa2V5KTtcbiAgfVxuICByZXR1cm4gZnJvbUFycmF5KF9rZXlzKTtcbn07XG5cbmNvbnN0IGxlbmd0aFN0cmluZyA9IGZ1bmN0aW9uKGpzVmFsKSB7XG4gIGlmICghaXNKc1N0cmluZyhqc1ZhbCkpIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIoanNWYWwubGVuZ3RoIC0gMik7XG59O1xuXG5jb25zdCBsZXNzVGhhbiA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4obmJyc1swXSA8IG5icnNbMV0pO1xufTtcblxuY29uc3QgbGVzc1RoYW5PckVxdWFsID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsQm9vbGVhbihuYnJzWzBdIDw9IG5icnNbMV0pO1xufTtcblxuY29uc3QgbGlmdCA9IGZ1bmN0aW9uKGZuT25Kc1ZhbHVlcykge1xuICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWVMaXN0KSB7XG4gICAgcmV0dXJuIGZuT25Kc1ZhbHVlcy5hcHBseShudWxsLCAodG9BcnJheShlcmxWYWx1ZUxpc3QpKS5tYXAoZXh0cmFjdEpzVmFsdWUpKTtcbiAgfTtcbn07XG5cbmNvbnN0IG1heCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihNYXRoLm1heC5hcHBseShNYXRoLCBuYnJzKSk7XG59O1xuXG5jb25zdCBtaW4gPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIoTWF0aC5taW4uYXBwbHkoTWF0aCwgbmJycykpO1xufTtcblxuY29uc3QgbW9kID0gZnVuY3Rpb24obmJyMCwgbmJyMSkge1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKG5icjAgJSBuYnIxKTtcbn07XG5cbmNvbnN0IG11bHRpcGx5ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKG5icnMucmVkdWNlKGZ1bmN0aW9uKHgsIG5icikge1xuICAgIHJldHVybiB4ICo9IG5icjtcbiAgfSkpO1xufTtcblxuY29uc3QgbmVnYXRlID0gZnVuY3Rpb24obmJyKSB7XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIoLTEgKiBuYnIpO1xufTtcblxuY29uc3QgcGFyc2VOdW1iZXIgPSBmdW5jdGlvbihqc1ZhbCkge1xuICBpZiAoaXNKc051bWJlcihqc1ZhbCkpIHtcbiAgICByZXR1cm4ganNWYWw7XG4gIH1cbiAgaWYgKCFpc0pzU3RyaW5nKGpzVmFsKSkge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbiAgY29uc3QganNOYnIgPSBwYXJzZUZsb2F0KHN0cmlwUXVvdGVzKGpzVmFsKSwgMTApO1xuICBpZiAoaXNKc05hTihqc05icikpIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjcmVhdGVFcmxOdW1iZXIoanNOYnIpO1xuICB9XG59O1xuXG5jb25zdCBzZXRDb3JlRm5zT25Kc1ZhbHVlc0JhbmcgPSBmdW5jdGlvbihlbnYsIGZucykge1xuICBjb25zdCBfcmVzdWx0cyA9IFtdO1xuICBmb3IgKGxldCBmbk5hbWUgaW4gZm5zKSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChmbnMsIGZuTmFtZSkpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGZuID0gZm5zW2ZuTmFtZV07XG4gICAgZW52W2ZuTmFtZV0gPSBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uKGxpZnQoZm4pKTtcbiAgICBfcmVzdWx0cy5wdXNoKGVudltmbk5hbWVdKTtcbiAgfVxuICByZXR1cm4gX3Jlc3VsdHM7XG59O1xuXG5jb25zdCBzdWJ0cmFjdCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihuYnJzLnJlZHVjZShmdW5jdGlvbih4LCBuYnIpIHtcbiAgICByZXR1cm4geCAtPSBuYnI7XG4gIH0pKTtcbn07XG5cbmNvbnN0IHZhbHMgPSBmdW5jdGlvbihpbmRleCkge1xuICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgZm9yIChsZXQga2V5IGluIGluZGV4KSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChpbmRleCwga2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gaW5kZXhba2V5XTtcbiAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZyb21BcnJheSh2YWx1ZXMpO1xufTtcblxuY29uc3QgZnVuY3Rpb25zT25Kc1ZhbHVlcyA9IHtcbiAgJysnOiBhZGQsXG4gICdjb250YWlucz8nOiBjb250YWlucyxcbiAgJ2Rpc3NvYyc6IGRpc3NvYyxcbiAgJy8nOiBkaXZpZGUsXG4gICcqKic6IGV4cG9uZW50aWF0ZSxcbiAgJ2dldCc6IGdldCxcbiAgJz4nOiBncmVhdGVyVGhhbixcbiAgJz49JzogZ3JlYXRlclRoYW5PckVxdWFsLFxuICAnaW5kZXgnOiBpbmRleCxcbiAgJ2tleXMnOiBrZXlzLFxuICAnbGVuZ3RoLXN0cmluZyc6IGxlbmd0aFN0cmluZyxcbiAgJ21heCc6IG1heCxcbiAgJ21pbic6IG1pbixcbiAgJzwnOiBsZXNzVGhhbixcbiAgJzw9JzogbGVzc1RoYW5PckVxdWFsLFxuICAnJSc6IG1vZCxcbiAgJyonOiBtdWx0aXBseSxcbiAgJ25lZ2F0ZSc6IG5lZ2F0ZSxcbiAgJ3BhcnNlLW51bWJlcic6IHBhcnNlTnVtYmVyLFxuICAnLSc6IHN1YnRyYWN0LFxuICAndmFscyc6IHZhbHNcbn07XG5cbmV4cG9ydCB7IGdldEVudmlyb25tZW50IH07XG4iLCJpbXBvcnQgeyBhcmVFcXVhbCB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgY2FyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBjZHIgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGNpcmN1bXBlbmRRdW90ZXMgfSBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjb25jYXQgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGNyZWF0ZUVybEF0b20gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybEJvb2xlYW4gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybEluZGV4IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxOdW1iZXIgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3ltYm9sIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBkcm9wIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBlcmxGYWxzZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXJsSWdub3JlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBlcmxOaWwgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGVybFRydWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGV4dHJhY3RKc1ZhbHVlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBmcm9tQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGludGVycHJldCB9IGZyb20gJy4vaW50ZXJwcmV0JztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGlzRXJsQXRvbSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxDb3JlUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybEJvb2xlYW4gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsRmFsc2UgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTGlzdCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxNYWNybyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxOaWwgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTnVtYmVyIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxTeW1ib2wgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsVHJ1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBsYXN0IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBuZXh0IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyByZWN1cnNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyByZWR1Y2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHJldmVyc2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gJy4vc2VyaWFsaXplJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHRvQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHRvUGFydGlhbEFycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5cbmNvbnN0IF9fc2xpY2UgICA9IFtdLnNsaWNlO1xuY29uc3QgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbmNvbnN0IGFwcGVuZCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgZXJsQXJnc0FycmF5ID0gdG9BcnJheShlcmxBcmdzKTtcbiAgY29uc3QgZXJsTGlzdCA9IGVybEFyZ3NBcnJheVswXTtcbiAgY29uc3QgZXJsVmFsdWVzID0gMiA8PSBlcmxBcmdzQXJyYXkubGVuZ3RoID8gX19zbGljZS5jYWxsKGVybEFyZ3NBcnJheSwgMSkgOiBbXTtcbiAgcmV0dXJuIGNvbmNhdChlcmxMaXN0LCBmcm9tQXJyYXkoZXJsVmFsdWVzKSk7XG59O1xuXG5jb25zdCBfYXJlRXF1YWwgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEFyZ3MpO1xuICBjb25zdCBlcmxWYWx1ZTAgPSBwYXJ0aWFsQXJyYXlbMF07XG4gIGNvbnN0IGVybFZhbHVlMSA9IHBhcnRpYWxBcnJheVsxXTtcbiAgY29uc3QgX19hcmVFcXVhbCA9IGZ1bmN0aW9uKGVybFZhbHVlMCwgZXJsVmFsdWUxKSB7XG4gICAgaWYgKGlzRXJsTGlzdChlcmxWYWx1ZTApICYmIGlzRXJsTGlzdChlcmxWYWx1ZTEpKSB7XG4gICAgICByZXR1cm4gYXJlRXF1YWwoZXJsVmFsdWUwLCBlcmxWYWx1ZTEsIF9fYXJlRXF1YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNFcmxJbmRleChlcmxWYWx1ZTApICYmIGlzRXJsSW5kZXgoZXJsVmFsdWUxKSkge1xuICAgICAgY29uc3QganNJbmRleDAgPSBlcmxWYWx1ZTAuanNWYWx1ZTtcbiAgICAgIGNvbnN0IGpzSW5kZXgxID0gZXJsVmFsdWUxLmpzVmFsdWU7XG4gICAgICByZXR1cm4gKF9fYXJlRXF1YWwoa2V5cyhqc0luZGV4MCksIGtleXMoanNJbmRleDEpKSlcbiAgICAgICAgJiYgKF9fYXJlRXF1YWwodmFscyhqc0luZGV4MCksIHZhbHMoanNJbmRleDEpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlcmxWYWx1ZTAuanNWYWx1ZSA9PT0gZXJsVmFsdWUxLmpzVmFsdWU7XG4gICAgfVxuICB9O1xuICByZXR1cm4gY3JlYXRlRXJsQm9vbGVhbihfX2FyZUVxdWFsKGVybFZhbHVlMCwgZXJsVmFsdWUxKSk7XG59O1xuXG5jb25zdCBhc3NvYyA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgbGV0IGFyZ3M7XG4gIGNvbnN0IGpzSW5kZXggPSBleHRyYWN0SnNWYWx1ZShjYXIoZXJsQXJncykpO1xuICBhcmdzID0gY2RyKGVybEFyZ3MpO1xuICBjb25zdCBjb3B5ID0ge307XG4gIGZvciAobGV0IGtleSBpbiBqc0luZGV4KSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChqc0luZGV4LCBrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSBqc0luZGV4W2tleV07XG4gICAgY29weVtrZXldID0gdmFsdWU7XG4gIH1cbiAgd2hpbGUgKCFpc0VtcHR5KGFyZ3MpKSB7XG4gICAgY29uc3QgayA9IGNhcihhcmdzKTtcbiAgICBjb25zdCB2ID0gbmV4dChhcmdzKTtcbiAgICBhcmdzID0gcmVjdXJzZShyZWN1cnNlKGFyZ3MpKTtcbiAgICBjb3B5W2V4dHJhY3RKc1ZhbHVlKGspXSA9IHY7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUVybEluZGV4KGNvcHkpO1xufTtcblxuY29uc3QgYXRvbSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybEF0b20oY2FyKGVybEFyZ3MpKTtcbn07XG5cbmNvbnN0IF9jYXIgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGFyZyA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKGlzRXJsTGlzdChhcmcpKSB7XG4gICAgcmV0dXJuIGNhcihhcmcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbmNvbnN0IF9jZHIgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGFyZyA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKGlzRXJsTGlzdChhcmcpKSB7XG4gICAgcmV0dXJuIGNkcihhcmcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbmNvbnN0IF9jb25jYXQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGVybExpc3RzID0gdG9BcnJheShlcmxBcmdzKTtcbiAgcmV0dXJuIGNvbmNhdC5hcHBseShudWxsLCBlcmxMaXN0cyk7XG59O1xuXG5jb25zdCBjb25zID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY3JlYXRlRXJsTGlzdChjYXIoZXJsQXJncyksIG5leHQoZXJsQXJncykpO1xufTtcblxuY29uc3QgY291bnQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGVybExpc3QgPSBjYXIoZXJsQXJncyk7XG4gIGlmICghaXNFcmxMaXN0KGVybExpc3QpKSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxuICBjb25zdCBfcmVkdWNlID0gZnVuY3Rpb24oc3VtLCB2YWx1ZSkge1xuICAgIHJldHVybiBzdW0gKyAxO1xuICB9O1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKHJlZHVjZSgwLCBfcmVkdWNlLCBjYXIoZXJsQXJncykpKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVByZWRpY2F0ZSA9IGZ1bmN0aW9uKHByZWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGpzTGlzdCkge1xuICAgIGNvbnN0IGVybFZhbHVlID0ganNMaXN0LnZhbHVlO1xuICAgIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKHByZWQoZXJsVmFsdWUpKTtcbiAgfTtcbn07XG5cbmNvbnN0IGRlcmVmID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gKGNhcihlcmxBcmdzKSkuZXJsVmFsdWU7XG59O1xuXG5jb25zdCBfZHJvcCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIGNvbnN0IGVybE51bWJlciA9IHBhcnRpYWxBcnJheVswXTtcbiAgY29uc3QgZXJsTGlzdCA9IHBhcnRpYWxBcnJheVsxXTtcbiAgcmV0dXJuIGRyb3AoZXh0cmFjdEpzVmFsdWUoZXJsTnVtYmVyKSwgZXJsTGlzdCk7XG59O1xuXG5jb25zdCBmaXJzdCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGNhcihjYXIoZXJsQXJncykpO1xufTtcblxuY29uc3QgZ2V0RW52aXJvbm1lbnQgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgY29uc3QgZW52aXJvbm1lbnQgPSBjb25maWcuZW52aXJvbm1lbnQ7XG4gIHNldENvcmVGbnNPbkVybFZhbHVlcyhlbnZpcm9ubWVudCwgZnVuY3Rpb25zT25FcmxWYWx1ZXMpO1xuICByZXR1cm4gZW52aXJvbm1lbnQ7XG59O1xuXG5jb25zdCBoYXNQcm9jZXNzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbmNvbnN0IGhhc1Byb2Nlc3NXZWJwYWNrU2hpbSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ocHJvY2Vzcy50aXRsZSA9PT0gJ2Jyb3dzZXInICYmIHByb2Nlc3MuYnJvd3Nlcik7XG59XG5cbmNvbnN0IGlnbm9yZSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGVybElnbm9yZTtcbn07XG5cbmNvbnN0IGlnbm9yZUlmVHJ1ZSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIGNvbnN0IGVybEJvb2wgPSBwYXJ0aWFsQXJyYXlbMF07XG4gIGNvbnN0IGVybFZhbHVlID0gcGFydGlhbEFycmF5WzFdO1xuICBpZiAoZXh0cmFjdEpzVmFsdWUoZXJsQm9vbCkpIHtcbiAgICByZXR1cm4gZXJsSWdub3JlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxWYWx1ZTtcbiAgfVxufTtcblxuY29uc3QgaWdub3JlVW5sZXNzVHJ1ZSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIGNvbnN0IGVybEJvb2wgPSBwYXJ0aWFsQXJyYXlbMF07XG4gIGNvbnN0IGVybFZhbHVlID0gcGFydGlhbEFycmF5WzFdO1xuICBpZiAoZXh0cmFjdEpzVmFsdWUoZXJsQm9vbCkpIHtcbiAgICByZXR1cm4gZXJsVmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybElnbm9yZTtcbiAgfVxufTtcblxuY29uc3QgX2ludGVycHJldCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGludGVycHJldChzdHJpcFF1b3RlcyhleHRyYWN0SnNWYWx1ZShjYXIoZXJsQXJncykpKSk7XG59O1xuXG5jb25zdCBfaXNFbXB0eSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgaWYgKGlzRW1wdHkoZXJsQXJncykpIHtcbiAgICByZXR1cm4gZXJsRmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzRW1wdHkoY2FyKGVybEFyZ3MpKSkge1xuICAgICAgcmV0dXJuIGVybFRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlcmxGYWxzZTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGlzRnVuY3Rpb24gPSBmdW5jdGlvbihqc0xpc3QpIHtcbiAgY29uc3QgZXJsVmFsdWUgPSBqc0xpc3QudmFsdWU7XG4gIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKGlzRXJsQ29yZVB1cmVGdW5jdGlvbihlcmxWYWx1ZSlcbiAgICB8fCBpc0VybFVzZXJQdXJlRnVuY3Rpb24oZXJsVmFsdWUpKTtcbn07XG5cbmNvbnN0IGlzTm9kZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gaGFzUHJvY2VzcygpICYmICFoYXNQcm9jZXNzV2VicGFja1NoaW0oKTtcbn1cblxuY29uc3QgX2xhc3QgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGFyZyA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKGlzRXJsTGlzdChhcmcpKSB7XG4gICAgcmV0dXJuIGxhc3QoYXJnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG5jb25zdCBsaXN0ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gZXJsQXJncztcbn07XG5cbmNvbnN0IG1ldGEgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGVybE1ldGEgPSAoY2FyKGVybEFyZ3MpKS5tZXRhO1xuICBpZiAoZXJsTWV0YSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGVybE1ldGE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxuY29uc3QgX25vdCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgZXJsVmFsID0gY2FyKGVybEFyZ3MpO1xuICBpZiAoaXNFcmxOaWwoZXJsVmFsKSB8fCBpc0VybEZhbHNlKGVybFZhbCkpIHtcbiAgICByZXR1cm4gZXJsVHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsRmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IG50aCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIGNvbnN0IGVybE51bWJlciA9IHBhcnRpYWxBcnJheVswXTtcbiAgbGV0IGVybExpc3QgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIGNvbnN0IHRhcmdldCA9IGV4dHJhY3RKc1ZhbHVlKGVybE51bWJlcik7XG4gIGlmICh0YXJnZXQgPj0gMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0OyBpKyspIHtcbiAgICAgIGVybExpc3QgPSBjZHIoZXJsTGlzdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpID4gdGFyZ2V0OyBpLS0pIHtcbiAgICAgIGVybExpc3QgPSBjZHIoZXJsTGlzdCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBjYXIoZXJsTGlzdCk7XG59O1xuXG5jb25zdCBwcmVwZW5kID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBlcmxBcmdzQXJyYXkgPSB0b0FycmF5KGVybEFyZ3MpO1xuICBjb25zdCBlcmxMaXN0ID0gZXJsQXJnc0FycmF5WzBdO1xuICBjb25zdCBlcmxWYWx1ZXMgPSAyIDw9IGVybEFyZ3NBcnJheS5sZW5ndGggPyBfX3NsaWNlLmNhbGwoZXJsQXJnc0FycmF5LCAxKSA6IFtdO1xuICBjb25zdCBfcmVkdWNlID0gZnVuY3Rpb24obGlzdCwgdmFsKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVybExpc3QodmFsLCBsaXN0KTtcbiAgfTtcbiAgcmV0dXJuIGVybFZhbHVlcy5yZWR1Y2UoX3JlZHVjZSwgZXJsTGlzdCk7XG59O1xuXG5jb25zdCBfcHJTdHIgPSBmdW5jdGlvbihlcmxBcmdzLCBwcmludFJlYWRhYmx5KSB7XG4gIHJldHVybiAoKHRvQXJyYXkoZXJsQXJncykpLm1hcChmdW5jdGlvbihlcmxBcmcpIHtcbiAgICByZXR1cm4gc2VyaWFsaXplKGVybEFyZywgcHJpbnRSZWFkYWJseSk7XG4gIH0pKS5qb2luKCcnKTtcbn07XG5cbmNvbnN0IHByZXR0eVN0cmluZyA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhjaXJjdW1wZW5kUXVvdGVzKF9wclN0cihlcmxBcmdzLCB0cnVlKSkpO1xufTtcblxuY29uc3QgcmVhZCA9IGZ1bmN0aW9uKGpzTGlzdCkge1xuICBpZiAoaXNOb2RlKCkpIHtcbiAgICBjb25zdCBfcmVhZCA9IGZ1bmN0aW9uKF9qc0xpc3QpIHtcbiAgICAgIGNvbnN0IGpzRmlsZU5hbWUgPSBzdHJpcFF1b3RlcyhleHRyYWN0SnNWYWx1ZShjYXIoX2pzTGlzdCkpKTtcbiAgICAgIC8vcmV0dXJuIHJlcXVpcmUoJ2ZzJykucmVhZEZpbGVTeW5jKGpzRmlsZU5hbWUpLnRvU3RyaW5nKCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBjcmVhdGVFcmxTdHJpbmcoX3JlYWQoanNMaXN0KSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxuY29uc3QgcmVzZXQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEFyZ3MpO1xuICBjb25zdCBhdG9tID0gcGFydGlhbEFycmF5WzBdO1xuICBjb25zdCB2YWx1ZSA9IHBhcnRpYWxBcnJheVsxXTtcbiAgYXRvbS5lcmxWYWx1ZSA9IHZhbHVlO1xuICByZXR1cm4gYXRvbTtcbn07XG5cbmNvbnN0IHJlc3QgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGFyZyA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKGlzRXJsTGlzdChhcmcpKSB7XG4gICAgcmV0dXJuIGNkcihhcmcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbmNvbnN0IF9yZXZlcnNlID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBhcmcgPSBjYXIoZXJsQXJncyk7XG4gIGlmIChpc0VybExpc3QoYXJnKSkge1xuICAgIHJldHVybiByZXZlcnNlKGFyZyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxuY29uc3Qgc2V0ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgzLCBlcmxBcmdzKTtcbiAgY29uc3QgaW5kZXggPSBwYXJ0aWFsQXJyYXlbMF07XG4gIGNvbnN0IGtleSA9IHBhcnRpYWxBcnJheVsxXTtcbiAgY29uc3QgdmFsID0gcGFydGlhbEFycmF5WzJdO1xuICAoZXh0cmFjdEpzVmFsdWUoaW5kZXgpKVtleHRyYWN0SnNWYWx1ZShrZXkpXSA9IHZhbDtcbiAgcmV0dXJuIGluZGV4O1xufTtcblxuY29uc3Qgc2V0Q29yZUZuc09uRXJsVmFsdWVzID0gZnVuY3Rpb24oZW52LCBmbnMpIHtcbiAgY29uc3QgX3Jlc3VsdHMgPSBbXTtcbiAgZm9yIChsZXQgZm5OYW1lIGluIGZucykge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoZm5zLCBmbk5hbWUpKSBjb250aW51ZTtcbiAgICBjb25zdCBmbiA9IGZuc1tmbk5hbWVdO1xuICAgIF9yZXN1bHRzLnB1c2goZW52W2ZuTmFtZV0gPSBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uKGZuKSk7XG4gIH1cbiAgcmV0dXJuIF9yZXN1bHRzO1xufTtcblxuY29uc3Qgc2x1cnAgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGlmIChpc05vZGUoKSkge1xuICAgIGNvbnN0IGpzRmlsZU5hbWUgPSBzdHJpcFF1b3RlcyhleHRyYWN0SnNWYWx1ZShjYXIoZXJsQXJncykpKTtcbiAgICAvL2NvbnN0IF9mc18gPSByZXF1aXJlKCdmcycpO1xuICAgIC8vcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhjaXJjdW1wZW5kUXVvdGVzKF9mc18ucmVhZEZpbGVTeW5jKGpzRmlsZU5hbWUpLnRvU3RyaW5nKCkpKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG5jb25zdCBzdHJpbmcgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBjcmVhdGVFcmxTdHJpbmcoY2lyY3VtcGVuZFF1b3RlcyhfcHJTdHIoZXJsQXJncywgZmFsc2UpKSk7XG59O1xuXG5jb25zdCBzdHJpcFF1b3RlcyA9IGZ1bmN0aW9uKGpzU3RyaW5nKSB7XG4gIHJldHVybiBqc1N0cmluZy5zbGljZSgxLCAtMSk7XG59O1xuXG5jb25zdCBzeW1ib2wgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGVybFZhbHVlID0gY2FyKGVybEFyZ3MpO1xuICBpZiAoaXNFcmxTdHJpbmcoZXJsVmFsdWUpKSB7XG4gICAgY29uc3QganNTdHIgPSBleHRyYWN0SnNWYWx1ZShlcmxWYWx1ZSk7XG4gICAgcmV0dXJuIGNyZWF0ZUVybFN5bWJvbChqc1N0ci5zbGljZSgxLCAtMSkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbmNvbnN0IF90YWtlID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgY29uc3QgZXJsTnVtYmVyID0gcGFydGlhbEFycmF5WzBdO1xuICBjb25zdCBlcmxMaXN0ID0gcGFydGlhbEFycmF5WzFdO1xuICByZXR1cm4gdGFrZShleHRyYWN0SnNWYWx1ZShlcmxOdW1iZXIpLCBlcmxMaXN0KTtcbn07XG5cbmNvbnN0IHR5cGVPZiA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgZXJsVmFsdWUgPSBjYXIoZXJsQXJncyk7XG4gIHJldHVybiBjcmVhdGVFcmxTdHJpbmcoY2lyY3VtcGVuZFF1b3RlcyhlcmxWYWx1ZS50eXBlKSk7XG59O1xuXG5jb25zdCBfdGhyb3cgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHRocm93IGNhcihlcmxBcmdzKTtcbn07XG5cbmNvbnN0IHRpbWVNcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbn07XG5cbmNvbnN0IHdpdGhNZXRhID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgY29uc3QgZXJsVmFsID0gcGFydGlhbEFycmF5WzBdO1xuICBjb25zdCBlcmxNZXRhID0gcGFydGlhbEFycmF5WzFdO1xuICBpZiAoaXNFcmxBdG9tKGVybFZhbCkpIHtcbiAgICBjb25zdCBlcmxWYWx1ZSA9IGVybFZhbC5lcmxWYWx1ZTtcbiAgICBjb25zdCB0eXBlID0gZXJsVmFsLnR5cGU7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVybFZhbHVlOiBlcmxWYWx1ZSxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBtZXRhOiBlcmxNZXRhXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBqc1ZhbHVlID0gZXJsVmFsLmpzVmFsdWU7XG4gICAgY29uc3QgdHlwZSA9IGVybFZhbC50eXBlO1xuICAgIHJldHVybiB7XG4gICAgICBqc1ZhbHVlOiBqc1ZhbHVlLFxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIG1ldGE6IGVybE1ldGFcbiAgICB9O1xuICB9XG59O1xuXG5jb25zdCB3cml0ZSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhzZXJpYWxpemUoY2FyKGVybEFyZ3MpKSk7XG59O1xuXG5jb25zdCBwcmVkaWNhdGVzID0gW1xuICBpc0VybEF0b20sXG4gIGlzRXJsQm9vbGVhbixcbiAgaXNFcmxDb3JlUHVyZUZ1bmN0aW9uLFxuICBpc0VybEZhbHNlLFxuICBpc0VybExpc3QsXG4gIGlzRXJsTWFjcm8sXG4gIGlzRXJsTmlsLFxuICBpc0VybE51bWJlcixcbiAgaXNFcmxTeW1ib2wsXG4gIGlzRXJsU3RyaW5nLFxuICBpc0VybFVzZXJQdXJlRnVuY3Rpb24sXG4gIGlzRXJsVHJ1ZVxuXS5tYXAoY3JlYXRlUHJlZGljYXRlKTtcblxuY29uc3QgaXNBdG9tICAgID0gcHJlZGljYXRlc1swXTtcbmNvbnN0IGlzQm9vbGVhbiA9IHByZWRpY2F0ZXNbMV07XG5jb25zdCBpc0NvcmVGbiAgPSBwcmVkaWNhdGVzWzJdO1xuY29uc3QgaXNGYWxzZSAgID0gcHJlZGljYXRlc1szXTtcbmNvbnN0IGlzTGlzdCAgICA9IHByZWRpY2F0ZXNbNF07XG5jb25zdCBpc01hY3JvICAgPSBwcmVkaWNhdGVzWzVdO1xuY29uc3QgaXNOaWwgICAgID0gcHJlZGljYXRlc1s2XTtcbmNvbnN0IGlzTnVtYmVyICA9IHByZWRpY2F0ZXNbN107XG5jb25zdCBpc1N5bWJvbCAgPSBwcmVkaWNhdGVzWzhdO1xuY29uc3QgaXNTdHJpbmcgID0gcHJlZGljYXRlc1s5XTtcbmNvbnN0IGlzVXNlckZuICA9IHByZWRpY2F0ZXNbMTBdO1xuY29uc3QgaXNUcnVlICAgID0gcHJlZGljYXRlc1sxMV07XG5cbmNvbnN0IGZ1bmN0aW9uc09uRXJsVmFsdWVzID0ge1xuICAnPSc6IF9hcmVFcXVhbCxcbiAgJ2FwcGVuZCc6IGFwcGVuZCxcbiAgJ2Fzc29jJzogYXNzb2MsXG4gICdhdG9tJzogYXRvbSxcbiAgJ2F0b20/JzogaXNBdG9tLFxuICAnYm9vbGVhbj8nOiBpc0Jvb2xlYW4sXG4gICdjYXInOiBfY2FyLFxuICAnY2RyJzogX2NkcixcbiAgJ2NvbnMnOiBjb25zLFxuICAnY29uY2F0JzogX2NvbmNhdCxcbiAgJ2NvcmUtZm4/JzogaXNDb3JlRm4sXG4gICdjb3VudCc6IGNvdW50LFxuICAnZGVyZWYnOiBkZXJlZixcbiAgJ2Ryb3AnOiBfZHJvcCxcbiAgJ2VtcHR5Pyc6IF9pc0VtcHR5LFxuICAnZmlyc3QnOiBfY2FyLFxuICAnZmFsc2U/JzogaXNGYWxzZSxcbiAgJ2Z1bmN0aW9uPyc6IGlzRnVuY3Rpb24sXG4gICdpZ25vcmUhJzogaWdub3JlLFxuICAnaWdub3JlSWZUcnVlJzogaWdub3JlSWZUcnVlLFxuICAnaWdub3JlVW5sZXNzVHJ1ZSc6IGlnbm9yZVVubGVzc1RydWUsXG4gICdsYXN0JzogX2xhc3QsXG4gICdsaXN0JzogbGlzdCxcbiAgJ2xpc3Q/JzogaXNMaXN0LFxuICAnbWFjcm8/JzogaXNNYWNybyxcbiAgJ21ldGEnOiBtZXRhLFxuICAnbmlsPyc6IGlzTmlsLFxuICAnbm90JzogX25vdCxcbiAgJ250aCc6IG50aCxcbiAgJ251bWJlcj8nOiBpc051bWJlcixcbiAgJ3BhcnNlJzogX2ludGVycHJldCxcbiAgJ3ByZXBlbmQnOiBwcmVwZW5kLFxuICAncHJldHR5LXN0cmluZyc6IHByZXR0eVN0cmluZyxcbiAgJ3Jlc3QnOiBfY2RyLFxuICAncmV2ZXJzZSc6IF9yZXZlcnNlLFxuICAnc3RyaW5nJzogc3RyaW5nLFxuICAnc3RyaW5nPyc6IGlzU3RyaW5nLFxuICAnc3ltYm9sJzogc3ltYm9sLFxuICAnc3ltYm9sPyc6IGlzU3ltYm9sLFxuICAndGFrZSc6IF90YWtlLFxuICAndGhyb3cnOiBfdGhyb3csXG4gICd0cnVlPyc6IGlzVHJ1ZSxcbiAgJ3R5cGVvZic6IHR5cGVPZixcbiAgJ3VzZXItZm4/JzogaXNVc2VyRm4sXG4gICdyZWFkJzogcmVhZCxcbiAgJ3Jlc2V0ISc6IHJlc2V0LFxuICAnc2V0ISc6IHNldCxcbiAgJ3NsdXJwJzogc2x1cnAsXG4gICd0aW1lLW1zJzogdGltZU1zLFxuICAnd2l0aC1tZXRhJzogd2l0aE1ldGEsXG4gICd3cml0ZSc6IHdyaXRlXG59O1xuXG5leHBvcnQgeyBnZXRFbnZpcm9ubWVudCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxMaXN0IH0gICAgICAgICAgICAgICAgICBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN0cmluZyB9ICAgICAgICAgICAgICAgIGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgc2VyaWFsaXplIH0gICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9zZXJpYWxpemUnO1xuaW1wb3J0IHsgdG9BcnJheSB9ICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5cbmNvbnN0IF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5jb25zdCBnZXRFbnZpcm9ubWVudCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICBjb25zdCBkaXNwbGF5ID0gY29uZmlnLmRpc3BsYXk7XG4gIGNvbnN0IGVudmlyb25tZW50ID0gY29uZmlnLmVudmlyb25tZW50O1xuICBzZXRDb3JlRWZmZWN0ZnVsRm5zT25FcmxWYWx1ZXMoZGlzcGxheSkoZW52aXJvbm1lbnQsIGRpc3BsYXlFZmZlY3RzT25FcmxWYWx1ZXMpO1xuICByZXR1cm4gZW52aXJvbm1lbnQ7XG59O1xuXG5jb25zdCBoYXNQcm9jZXNzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbmNvbnN0IGhhc1Byb2Nlc3NXZWJwYWNrU2hpbSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ocHJvY2Vzcy50aXRsZSA9PT0gJ2Jyb3dzZXInICYmIHByb2Nlc3MuYnJvd3Nlcik7XG59XG5cbmNvbnN0IGlzTm9kZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gaGFzUHJvY2VzcygpICYmICFoYXNQcm9jZXNzV2VicGFja1NoaW0oKTtcbn1cblxuY29uc3QgX3ByU3RyID0gZnVuY3Rpb24oZXJsQXJncywgc2hvdWxkQmVSZWFkYWJsZSkge1xuICByZXR1cm4gKCh0b0FycmF5KGVybEFyZ3MpKS5tYXAoZnVuY3Rpb24oZXJsQXJnKSB7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZShlcmxBcmcsIHNob3VsZEJlUmVhZGFibGUpO1xuICB9KSkuam9pbignJyk7XG59O1xuXG5jb25zdCBfcXVpdF8gPSBmdW5jdGlvbigpIHtcbiAgaWYgKGlzTm9kZSgpKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZXhpdCgwKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gX3ByU3RyKFxuICAgICAgY3JlYXRlRXJsTGlzdChcbiAgICAgICAgY3JlYXRlRXJsU3RyaW5nKFxuICAgICAgICAgIFwiXFxcIidFcmxrw7ZuaWcgTGlzcCBDb25zb2xlJyBpcyBub3QgcGVybWl0dGVkIHRvIGNsb3NlIHRoaXMgd2luZG93LlxcXCJcIikpLFxuICAgICAgICAgIGZhbHNlKTtcbiAgfVxufTtcblxuY29uc3Qgc2V0Q29yZUVmZmVjdGZ1bEZuc09uRXJsVmFsdWVzID0gZnVuY3Rpb24ocmVwcmVzZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbihlbnYsIGZucykge1xuICAgIGNvbnN0IF9yZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgZm5OYW1lIGluIGZucykge1xuICAgICAgaWYgKCFfX2hhc1Byb3AuY2FsbChmbnMsIGZuTmFtZSkpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgZm4gPSBmbnNbZm5OYW1lXTtcbiAgICAgIGVudltmbk5hbWVdID0gY3JlYXRlRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uKGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHJlcHJlc2VudChmbihlcmxBcmdzKSk7XG4gICAgICB9KTtcbiAgICAgIF9yZXN1bHRzLnB1c2goZW52W2ZuTmFtZV0pO1xuICAgIH1cbiAgICByZXR1cm4gX3Jlc3VsdHM7XG4gIH07XG59O1xuXG5jb25zdCBkaXNwbGF5RWZmZWN0c09uRXJsVmFsdWVzID0ge1xuICAncHJpbnQnOiBmdW5jdGlvbihlcmxBcmdzKSB7XG4gICAgcmV0dXJuIF9wclN0cihlcmxBcmdzLCBmYWxzZSk7XG4gIH0sXG4gICdwcmV0dHktcHJpbnQnOiBmdW5jdGlvbihlcmxBcmdzKSB7XG4gICAgcmV0dXJuIF9wclN0cihlcmxBcmdzLCB0cnVlKTtcbiAgfSxcbiAgJy1xdWl0LSc6IF9xdWl0Xyxcbn07XG5cbmV4cG9ydCB7IGdldEVudmlyb25tZW50IH07XG4iLCJpbXBvcnQgeyBjYXIgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybExpc3QgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN5bWJvbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXh0cmFjdEpzVmFsdWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGZyb21BcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgZnJvbUVybEluZGV4IH0gZnJvbSAnLi9pbmRleC11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBfcHJvY2VzcyB9IGZyb20gJy4vX3Byb2Nlc3MnO1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgdG9rZW5pemVBbmRQYXJzZSB9IGZyb20gJy4vdG9rZW5pemVBbmRQYXJzZSc7XG5pbXBvcnQgeyB0b1BhcnRpYWxBcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuXG5jb25zdCBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuY29uc3QgZ2V0RW52aXJvbm1lbnQgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgY29uc3QgZW52aXJvbm1lbnQgPSBjb25maWcuZW52aXJvbm1lbnQ7XG4gIGNvbnN0IHBhcnNlID0gZnVuY3Rpb24oZXJsQXJncykge1xuICAgIHJldHVybiB0b2tlbml6ZUFuZFBhcnNlKHN0cmlwUXVvdGVzKGV4dHJhY3RKc1ZhbHVlKGNhcihlcmxBcmdzKSkpKTtcbiAgfTtcbiAgY29uc3QgZnVuY3Rpb25zT25FcmxWYWx1ZXMgPSB7IHBhcnNlOiBwYXJzZSB9O1xuICBzZXRDb3JlRm5zT25FcmxWYWx1ZXMoZW52aXJvbm1lbnQsIGZ1bmN0aW9uc09uRXJsVmFsdWVzKTtcbiAgcmV0dXJuIGVudmlyb25tZW50O1xufTtcblxuY29uc3QgX3Byb2Nlc3NfID0gX3Byb2Nlc3MoZnVuY3Rpb24oZXJsVmFsKSB7XG4gIHJldHVybiBlcmxWYWw7XG59KTtcblxuY29uc3Qgc2V0Q29yZUZuc09uRXJsVmFsdWVzID0gZnVuY3Rpb24oZW52LCBmbnMpIHtcbiAgY29uc3QgX3Jlc3VsdHMgPSBbXTtcbiAgZm9yIChsZXQgZm5OYW1lIGluIGZucykge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoZm5zLCBmbk5hbWUpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3QgZm4gPSBmbnNbZm5OYW1lXTtcbiAgICBfcmVzdWx0cy5wdXNoKGVudltmbk5hbWVdID0gY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbihmbikpO1xuICB9XG4gIHJldHVybiBfcmVzdWx0cztcbn07XG5cbmNvbnN0IHN0cmlwUXVvdGVzID0gZnVuY3Rpb24oanNTdHJpbmcpIHtcbiAgcmV0dXJuIGpzU3RyaW5nLnNsaWNlKDEsIC0xKTtcbn07XG5cbmV4cG9ydCB7IGdldEVudmlyb25tZW50IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBlcmxOaWwgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGV4dHJhY3RKc1ZhbHVlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBmcm9tRXJsSW5kZXggfSBmcm9tICcuL2luZGV4LXV0aWxpdGllcyc7XG5pbXBvcnQgeyBfcHJvY2VzcyB9IGZyb20gJy4vX3Byb2Nlc3MnO1xuaW1wb3J0IHsgdG9QYXJ0aWFsQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcblxuY29uc3QgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbmNvbnN0IGdldEVudmlyb25tZW50ID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gIGNvbnN0IGVudmlyb25tZW50ID0gY29uZmlnLmVudmlyb25tZW50O1xuICBjb25zdCBmdW5jdGlvbnNPbkVybFZhbHVlcyA9IHtcbiAgICAnbG9hZCc6IGxvYWQsXG4gICAgJ2xvYWQtd2l0aC1lbnYnOiBsb2FkV2l0aEVudixcbiAgICAnbG9hZC13aXRoLWJhcmUtZW52JzogbG9hZFdpdGhCYXJlRW52XG4gIH07XG4gIHNldENvcmVGbnNPbkVybFZhbHVlcyhlbnZpcm9ubWVudCwgZnVuY3Rpb25zT25FcmxWYWx1ZXMpO1xuICByZXR1cm4gZW52aXJvbm1lbnQ7XG59O1xuXG5jb25zdCBnZXRfanNGaWxlTmFtZV9hbmRfbG9jYWxFbnYgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEFyZ3MpO1xuICBjb25zdCBlcmxGaWxlTmFtZSA9IHBhcnRpYWxBcnJheVswXTtcbiAgY29uc3QgbG9jYWxFbnYgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIGNvbnN0IGpzRmlsZU5hbWUgPSBzdHJpcFF1b3RlcyhleHRyYWN0SnNWYWx1ZShlcmxGaWxlTmFtZSkpO1xuICByZXR1cm4gW2pzRmlsZU5hbWUsIGxvY2FsRW52XTtcbn07XG5cbmNvbnN0IGhhc1Byb2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJztcbn1cblxuY29uc3QgaGFzUHJvY2Vzc1dlYnBhY2tTaGltID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybihwcm9jZXNzLnRpdGxlID09PSAnYnJvd3NlcicgJiYgcHJvY2Vzcy5icm93c2VyKTtcbn1cblxuY29uc3QgaXNOb2RlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBoYXNQcm9jZXNzKCkgJiYgIWhhc1Byb2Nlc3NXZWJwYWNrU2hpbSgpO1xufVxuXG5jb25zdCBsb2FkID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBpZiAoaXNOb2RlKCkpIHtcbiAgICByZXR1cm4gX3Byb2Nlc3NfKF9yZWFkKGVybEFyZ3MpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG5jb25zdCBsb2FkV2l0aEJhcmVFbnYgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGlmIChpc05vZGUoKSkge1xuICAgIGNvbnN0IHRlbXAgPSBnZXRfanNGaWxlTmFtZV9hbmRfbG9jYWxFbnYoZXJsQXJncyk7XG4gICAgY29uc3QganNGaWxlTmFtZSA9IHRlbXBbMF07XG4gICAgY29uc3QgbG9jYWxFbnYgPSB0ZW1wWzFdO1xuICAgIHJldHVybiBfcHJvY2Vzc0ZpbGVBbmRFbnYoXG4gICAgICByZWFkRmlsZShqc0ZpbGVOYW1lKSxcbiAgICAgIFtmcm9tRXJsSW5kZXgobG9jYWxFbnYpXSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxuY29uc3QgbG9hZFdpdGhFbnYgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGlmIChpc05vZGUoKSkge1xuICAgIGNvbnN0IHRlbXAgPSBnZXRfanNGaWxlTmFtZV9hbmRfbG9jYWxFbnYoZXJsQXJncyk7XG4gICAgY29uc3QganNGaWxlTmFtZSA9IHRlbXBbMF07XG4gICAgY29uc3QgbG9jYWxFbnYgPSB0ZW1wWzFdO1xuICAgIHJldHVybiBfcHJvY2Vzc0ZpbGVBbmRFbnYoXG4gICAgICByZWFkRmlsZShqc0ZpbGVOYW1lKSxcbiAgICAgIFtmcm9tRXJsSW5kZXgobG9jYWxFbnYpLCBlbnZpcm9ubWVudF0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbmNvbnN0IF9wcm9jZXNzXyA9IGZ1bmN0aW9uKGpzU3RyaW5nKSB7XG4gIHJldHVybiBfcHJvY2VzcyhbZW52aXJvbm1lbnRdKShqc1N0cmluZyk7XG59O1xuXG5jb25zdCBfcHJvY2Vzc0ZpbGVBbmRFbnYgPSBmdW5jdGlvbihmaWxlLCBlbnZTdGFjaykge1xuICByZXR1cm4gX3Byb2Nlc3MoZW52U3RhY2spKGZpbGUpO1xufTtcblxuY29uc3QgX3JlYWQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGpzRmlsZU5hbWUgPSBnZXRfanNGaWxlTmFtZV9hbmRfbG9jYWxFbnYoZXJsQXJncylbMF07XG4gIHJldHVybiByZWFkRmlsZShqc0ZpbGVOYW1lKTtcbn07XG5cbmNvbnN0IHJlYWRGaWxlID0gZnVuY3Rpb24oanNGaWxlTmFtZSkge1xuICAvL3JldHVybiByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYyhqc0ZpbGVOYW1lKS50b1N0cmluZygpO1xuICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IHNldENvcmVGbnNPbkVybFZhbHVlcyA9IGZ1bmN0aW9uKGVudiwgZm5zKSB7XG4gIGNvbnN0IF9yZXN1bHRzID0gW107XG4gIGZvciAobGV0IGZuTmFtZSBpbiBmbnMpIHtcbiAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGZucywgZm5OYW1lKSkgY29udGludWU7XG4gICAgY29uc3QgZm4gPSBmbnNbZm5OYW1lXTtcbiAgICBfcmVzdWx0cy5wdXNoKGVudltmbk5hbWVdID0gY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbihmbikpO1xuICB9XG4gIHJldHVybiBfcmVzdWx0cztcbn07XG5cbmNvbnN0IHN0cmlwUXVvdGVzID0gZnVuY3Rpb24oanNTdHJpbmcpIHtcbiAgcmV0dXJuIGpzU3RyaW5nLnNsaWNlKDEsIC0xKTtcbn07XG5cbmV4cG9ydCB7IGdldEVudmlyb25tZW50IH07XG4iLCJpbXBvcnQgeyBhZGRFbnYgfSBmcm9tICcuL2Vudi11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY2FyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBjYXRjaFN0YXIgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBjZHIgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGNpcmN1bXBlbmRRdW90ZXMgfSBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjb21tZW50U2lnbmFsIH0gZnJvbSAnLi9jb21tZW50U2lnbmFsJztcbmltcG9ydCB7IGNyZWF0ZUVybEluZGV4IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxLZXl3b3JkIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxNYWNybyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTnVtYmVyIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxTdHJpbmcgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN5bWJvbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsVXNlclB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZGVmQmFuZyB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IF9kbyB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGVybE5pbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgX2V2YWwgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBfZXZhbFdpdGhFbnYgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBleHBhbmRNYWNybyB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGV4dHJhY3RKc1ZhbHVlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGZuU3RhciB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGZyb21BcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgZnJvbUVybEluZGV4IH0gZnJvbSAnLi9pbmRleC11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZnJvbUpzT2JqZWN0cyB9IGZyb20gJy4vaW5kZXgtdXRpbGl0aWVzJztcbmltcG9ydCB7IF9nZXRDdXJyZW50RW52IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgX2dldERlZmF1bHRFbnYgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBpc0VybENvcmVFZmZlY3RmdWxGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxDb3JlUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybElnbm9yZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxLZXl3b3JkIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybExpc3QgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTWFjcm8gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsU3ltYm9sIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybFVzZXJQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzSnNTdHJpbmcgfSBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0tleXdvcmQgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBsZXRTdGFyIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbGV0cmVjU3RhciB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGxvb2t1cCB9IGZyb20gJy4vZW52LXV0aWxpdGllcyc7XG5pbXBvcnQgeyBtYWNyb1N0YXIgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IG5leHQgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHF1YXNpcXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBxdW90ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHNwbGljZVVucXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyB1bnF1b3RlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcmVjdXJzZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyByZWR1Y2VCeTIgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHJldmVyc2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHNldE1haW5FbnYgfSBmcm9tICcuL2Vudi11dGlsaXRpZXMnO1xuaW1wb3J0IHsgc3BsYXQgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyB0b1BhcnRpYWxBcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgdHJ5U3RhciB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHVuZGVmQmFuZyB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHVuc2V0TWFpbkVudiB9IGZyb20gJy4vZW52LXV0aWxpdGllcyc7XG5cbmNvbnN0IF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5jb25zdCBjcmVhdGVGbiA9IGZ1bmN0aW9uKGVybExpc3QsIGVudnMpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybFVzZXJQdXJlRnVuY3Rpb24oe1xuICAgIGxvY2FsRW52czogZW52cy5zbGljZSgwKSxcbiAgICBlcmxFeHByZXNzaW9uOiBuZXh0KGVybExpc3QpLFxuICAgIGVybFBhcmFtZXRlcnM6IGNhcihlcmxMaXN0KVxuICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxvY2FsRW52ID0gZnVuY3Rpb24oZXJsUGFyYW1zLCBlcmxBcmdzKSB7XG4gIGNvbnN0IGVudiA9IHt9O1xuICB3aGlsZSAoIWlzRW1wdHkoZXJsUGFyYW1zKSkge1xuICAgIGNvbnN0IGpzUGFyYW0gPSBleHRyYWN0SnNWYWx1ZShjYXIoZXJsUGFyYW1zKSk7XG4gICAgaWYgKGpzUGFyYW0gPT09IHNwbGF0KSB7XG4gICAgICBlbnZbZXh0cmFjdEpzVmFsdWUobmV4dChlcmxQYXJhbXMpKV0gPSBlcmxBcmdzO1xuICAgICAgcmV0dXJuIGVudjtcbiAgICB9IGVsc2Uge1xuICAgICAgZW52W2pzUGFyYW1dID0gY2FyKGVybEFyZ3MpO1xuICAgICAgZXJsUGFyYW1zID0gY2RyKGVybFBhcmFtcyk7XG4gICAgICBlcmxBcmdzID0gY2RyKGVybEFyZ3MpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZW52O1xufTtcblxuY29uc3QgY3JlYXRlTWFjcm8gPSBmdW5jdGlvbihlcmxMaXN0LCBlbnZzKSB7XG4gIHJldHVybiBjcmVhdGVFcmxNYWNybyh7XG4gICAgbG9jYWxFbnZzOiBlbnZzLnNsaWNlKDApLFxuICAgIGVybEV4cHJlc3Npb246IG5leHQoZXJsTGlzdCksXG4gICAgZXJsUGFyYW1ldGVyczogY2FyKGVybExpc3QpXG4gIH0pO1xufTtcblxuY29uc3QgZGVmaW5lTmV3VmFsdWUgPSBmdW5jdGlvbihlcmxMaXN0LCBlbnZzLCBhZGRSZXN1bHQpIHtcbiAgY29uc3QganNLZXkgPSBleHRyYWN0SnNWYWx1ZShjYXIoZXJsTGlzdCkpO1xuICBjb25zdCBlcmxWYWx1ZSA9IF9ldmFsdWF0ZShuZXh0KGVybExpc3QpLCBlbnZzLCBhZGRSZXN1bHQpO1xuICByZXR1cm4gc2V0TWFpbkVudihlbnZzLCBqc0tleSwgZXJsVmFsdWUpO1xufTtcblxuY29uc3QgZXZhbFF1YXNpcXVvdGVkRXhwciA9IGZ1bmN0aW9uKGV4cHIsIGVudnMsIGFkZFJlc3VsdCkge1xuICBpZiAoIWlzRXJsTGlzdChleHByKSkge1xuICAgIHJldHVybiBleHByO1xuICB9XG4gIGNvbnN0IG1hbmFnZUl0ZW0gPSBmdW5jdGlvbihtZW1vLCBpdGVtKSB7XG4gICAgaWYgKGlzVW5xdW90ZWRFeHByKGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KF9ldmFsdWF0ZShuZXh0KGl0ZW0pLCBlbnZzLCBhZGRSZXN1bHQpLCBtZW1vKTtcbiAgICB9IGVsc2UgaWYgKGlzU3BsaWNlVW5xdW90ZWRFeHByKGl0ZW0pKSB7XG4gICAgICAgIGNvbnN0IF9tYW5hZ2VJdGVtID0gZnVuY3Rpb24oX21lbW8sIF9pdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUVybExpc3QoX2l0ZW0sIF9tZW1vKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlZHVjZShtZW1vLCBfbWFuYWdlSXRlbSwgX2V2YWx1YXRlKG5leHQoaXRlbSksIGVudnMsIGFkZFJlc3VsdCkpO1xuICAgIH0gZWxzZSBpZiAoaXNFcmxMaXN0KGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KGV2YWxRdWFzaXF1b3RlZEV4cHIoaXRlbSwgZW52cywgYWRkUmVzdWx0KSwgbWVtbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVybExpc3QoaXRlbSwgbWVtbyk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gcmV2ZXJzZShyZWR1Y2UoY3JlYXRlRXJsTGlzdCgpLCBtYW5hZ2VJdGVtLCBleHByKSk7XG59O1xuXG5jb25zdCBfZXZhbHVhdGUgPSBmdW5jdGlvbihlcmxFeHByLCBlbnZzLCBhZGRSZXN1bHQpIHtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAoaXNFcmxTeW1ib2woZXJsRXhwcikpIHtcbiAgICAgIGNvbnN0IGpzU3RyaW5nID0gZXh0cmFjdEpzVmFsdWUoZXJsRXhwcik7XG4gICAgICBpZiAoaXNLZXl3b3JkKGpzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRXJsS2V5d29yZChqc1N0cmluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9va3VwKGVudnMsIGpzU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzRXJsSW5kZXgoZXJsRXhwcikpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZXh0cmFjdEpzVmFsdWUoZXJsRXhwcik7XG4gICAgICBjb25zdCBuZXdJbmRleCA9IHt9O1xuICAgICAgZm9yIChsZXQga2V5IGluIGluZGV4KSB7XG4gICAgICAgIGlmICghX19oYXNQcm9wLmNhbGwoaW5kZXgsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICBuZXdJbmRleFtrZXldID0gX2V2YWx1YXRlKGluZGV4W2tleV0sIGVudnMsIGFkZFJlc3VsdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3JlYXRlRXJsSW5kZXgobmV3SW5kZXgpO1xuICAgIH0gZWxzZSBpZiAoIShpc0VybExpc3QoZXJsRXhwcikpKSB7XG4gICAgICByZXR1cm4gZXJsRXhwcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJsRXhwciA9IGZpbHRlcigoZnVuY3Rpb24oeCkge1xuICAgICAgICByZXR1cm4gIShpZ25vcmFibGUoeCwgZW52cywgYWRkUmVzdWx0KSk7XG4gICAgICB9KSwgZXJsRXhwcik7XG4gICAgICBjb25zdCBlcmxFeHByQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxFeHByKTtcbiAgICAgIGNvbnN0IGhlYWQgPSBlcmxFeHByQXJyYXlbMF07XG4gICAgICBjb25zdCBhcmcxID0gZXJsRXhwckFycmF5WzFdO1xuICAgICAgY29uc3QgcmVtYWluaW5nQXJncyA9IGVybEV4cHJBcnJheVsyXTtcbiAgICAgIGNvbnN0IHRhaWxMaXN0ID0gY2RyKGVybEV4cHIpO1xuICAgICAgc3dpdGNoIChleHRyYWN0SnNWYWx1ZShoZWFkKSkge1xuICAgICAgICBjYXNlIGRlZkJhbmc6XG4gICAgICAgICAgcmV0dXJuIGRlZmluZU5ld1ZhbHVlKHRhaWxMaXN0LCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICBjYXNlIHVuZGVmQmFuZzpcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVWYWx1ZSh0YWlsTGlzdCwgZW52cyk7XG4gICAgICAgIGNhc2UgX2V2YWw6XG4gICAgICAgICAgZXJsRXhwciA9IF9ldmFsdWF0ZShhcmcxLCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIF9ldmFsV2l0aEVudjpcbiAgICAgICAgICBlbnZzID0gW2Zyb21FcmxJbmRleChfZXZhbHVhdGUoYXJnMSwgZW52cywgYWRkUmVzdWx0KSldO1xuICAgICAgICAgIGVybEV4cHIgPSBfZXZhbHVhdGUoY2FyKHJlbWFpbmluZ0FyZ3MpLCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxldFN0YXI6XG4gICAgICAgICAgZXJsRXhwciA9IGNhcihyZW1haW5pbmdBcmdzKTtcbiAgICAgICAgICBlbnZzID0gYWRkRW52KGVudnMsIHJlZHVjZUxldChlbnZzLCBhcmcxLCBhZGRSZXN1bHQpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsZXRyZWNTdGFyOlxuICAgICAgICAgIGVybEV4cHIgPSBjYXIocmVtYWluaW5nQXJncyk7XG4gICAgICAgICAgZW52cyA9IGFkZEVudihlbnZzLCByZWR1Y2VMZXRyZWMoZW52cywgYXJnMSwgYWRkUmVzdWx0KSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgX2RvOlxuICAgICAgICAgIHJldHVybiBmb3JFYWNoKGV2YWx1YXRlKGVudnMsIGFkZFJlc3VsdCksIHRhaWxMaXN0KTtcbiAgICAgICAgY2FzZSBfZ2V0Q3VycmVudEVudjpcbiAgICAgICAgICByZXR1cm4gZnJvbUpzT2JqZWN0cy5hcHBseShudWxsLCBlbnZzLnJldmVyc2UoKSk7XG4gICAgICAgIGNhc2UgX2dldERlZmF1bHRFbnY6XG4gICAgICAgICAgcmV0dXJuIGZyb21Kc09iamVjdHMoZW52c1tlbnZzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgY2FzZSBfaWY6XG4gICAgICAgICAgaWYgKGV4dHJhY3RKc1ZhbHVlKF9ldmFsdWF0ZShhcmcxLCBlbnZzLCBhZGRSZXN1bHQpKSkge1xuICAgICAgICAgICAgZXJsRXhwciA9IGNhcihyZW1haW5pbmdBcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBvdGhlcndpc2UgPSBuZXh0KHJlbWFpbmluZ0FyZ3MpO1xuICAgICAgICAgIGlmIChpc0VtcHR5KG90aGVyd2lzZSkpIHtcbiAgICAgICAgICAgIGVybEV4cHIgPSBlcmxOaWw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVybEV4cHIgPSBvdGhlcndpc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGZuU3RhcjpcbiAgICAgICAgICByZXR1cm4gY3JlYXRlRm4odGFpbExpc3QsIGVudnMpO1xuICAgICAgICBjYXNlIG1hY3JvU3RhcjpcbiAgICAgICAgICByZXR1cm4gY3JlYXRlTWFjcm8odGFpbExpc3QsIGVudnMpO1xuICAgICAgICBjYXNlIHF1b3RlOlxuICAgICAgICAgIHJldHVybiBjYXIodGFpbExpc3QpO1xuICAgICAgICBjYXNlIHF1YXNpcXVvdGU6XG4gICAgICAgICAgcmV0dXJuIGV2YWxRdWFzaXF1b3RlZEV4cHIoY2FyKHRhaWxMaXN0KSwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgY2FzZSBleHBhbmRNYWNybzpcbiAgICAgICAgICByZXR1cm4gX2V4cGFuZE1hY3JvKGNhcihhcmcxKSwgY2RyKGFyZzEpLCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICBjYXNlIHRyeVN0YXI6XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBfZXZhbHVhdGUoYXJnMSwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICAgICAgICAgIGxldCBleCA9IF9lcnJvcjtcbiAgICAgICAgICAgIGlmIChpc0VtcHR5KHJlbWFpbmluZ0FyZ3MpKSB7XG4gICAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nQXJnc0FycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMywgY2FyKHJlbWFpbmluZ0FyZ3MpKTtcbiAgICAgICAgICAgICAgY29uc3QgX2NhdGNoID0gcmVtYWluaW5nQXJnc0FycmF5WzBdO1xuICAgICAgICAgICAgICBjb25zdCBfZXggPSByZW1haW5pbmdBcmdzQXJyYXlbMV07XG4gICAgICAgICAgICAgIGNvbnN0IGNhdGNoRXhwciA9IHJlbWFpbmluZ0FyZ3NBcnJheVsyXTtcbiAgICAgICAgICAgICAgaWYgKChleHRyYWN0SnNWYWx1ZShfY2F0Y2gpKSAhPT0gXCJjYXRjaCpcIikge1xuICAgICAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChleCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXggPSBjcmVhdGVFcmxTdHJpbmcoY2lyY3VtcGVuZFF1b3RlcyhleC5tZXNzYWdlKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc3QgbmV3RW52ID0ge307XG4gICAgICAgICAgICAgIG5ld0VudltleHRyYWN0SnNWYWx1ZShfZXgpXSA9IGV4O1xuICAgICAgICAgICAgICByZXR1cm4gX2V2YWx1YXRlKGNhdGNoRXhwciwgYWRkRW52KGVudnMsIG5ld0VudiksIGFkZFJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnN0IGVybFN5bWJvbCA9IGhlYWQ7XG4gICAgICAgICAgZXJsRXhwciA9IHRhaWxMaXN0O1xuICAgICAgICAgIGNvbnN0IGVybEludm9rYWJsZSA9IF9ldmFsdWF0ZShlcmxTeW1ib2wsIGVudnMsIGFkZFJlc3VsdCk7XG4gICAgICAgICAgaWYgKGlzRXJsS2V5d29yZChlcmxJbnZva2FibGUpKSB7XG4gICAgICAgICAgICBlcmxFeHByID0gY3JlYXRlRXJsTGlzdChlcmxJbnZva2FibGUsIHRhaWxMaXN0KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzRXJsTWFjcm8oZXJsSW52b2thYmxlKSkge1xuICAgICAgICAgICAgZXJsRXhwciA9IF9leHBhbmRNYWNybyhoZWFkLCB0YWlsTGlzdCwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzRXJsQ29yZVB1cmVGdW5jdGlvbihlcmxJbnZva2FibGUpKSB7XG4gICAgICAgICAgICBjb25zdCBmbiA9IGV4dHJhY3RKc1ZhbHVlKGVybEludm9rYWJsZSk7XG4gICAgICAgICAgICBjb25zdCBlcmxBcmdzID0gbWFwKGV2YWx1YXRlKGVudnMsIGFkZFJlc3VsdCksIGVybEV4cHIpO1xuICAgICAgICAgICAgcmV0dXJuIGZuKGVybEFyZ3MpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24oZXJsSW52b2thYmxlKSkge1xuICAgICAgICAgICAgY29uc3QgZm4gPSBleHRyYWN0SnNWYWx1ZShlcmxJbnZva2FibGUpO1xuICAgICAgICAgICAgY29uc3QgZXJsQXJncyA9IG1hcChldmFsdWF0ZShlbnZzLCBhZGRSZXN1bHQpLCBlcmxFeHByKTtcbiAgICAgICAgICAgIGFkZFJlc3VsdChmbihlcmxBcmdzKSk7XG4gICAgICAgICAgICByZXR1cm4gZXJsTmlsO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNFcmxVc2VyUHVyZUZ1bmN0aW9uKGVybEludm9rYWJsZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGpzVmFsdWUgPSBleHRyYWN0SnNWYWx1ZShlcmxJbnZva2FibGUpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxFbnZzID0ganNWYWx1ZS5sb2NhbEVudnM7XG4gICAgICAgICAgICBjb25zdCBlcmxFeHByZXNzaW9uID0ganNWYWx1ZS5lcmxFeHByZXNzaW9uO1xuICAgICAgICAgICAgY29uc3QgZXJsUGFyYW1ldGVycyA9IGpzVmFsdWUuZXJsUGFyYW1ldGVycztcbiAgICAgICAgICAgIGNvbnN0IGVybEFyZ3MgPSBtYXAoZXZhbHVhdGUoZW52cywgYWRkUmVzdWx0KSwgZXJsRXhwcik7XG4gICAgICAgICAgICBlcmxFeHByID0gZXJsRXhwcmVzc2lvbjtcbiAgICAgICAgICAgIGNvbnN0IG5ld0VudiA9IGNyZWF0ZUxvY2FsRW52KGVybFBhcmFtZXRlcnMsIGVybEFyZ3MpO1xuICAgICAgICAgICAgZW52cyA9IGFkZEVudihsb2NhbEVudnMsIG5ld0Vudik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IFwiXCJcbiAgICAgICAgICAgICAgKyAoZXh0cmFjdEpzVmFsdWUoZXJsU3ltYm9sKSlcbiAgICAgICAgICAgICAgKyBcIiBkb2VzIG5vdCBldmFsdWF0ZSB0byBhIGZ1bmN0aW9uLCBtYWNybywgb3Iga2V5d29yZC5cIjtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBldmFsdWF0ZSA9IGZ1bmN0aW9uKGVudnMsIGFkZFJlc3VsdCkge1xuICByZXR1cm4gZnVuY3Rpb24oZXJsRXhwcikge1xuICAgIGlmIChlcmxFeHByID09PSBjb21tZW50U2lnbmFsKSB7XG4gICAgICByZXR1cm4gY29tbWVudFNpZ25hbDtcbiAgICB9XG4gICAgcmV0dXJuIF9ldmFsdWF0ZShlcmxFeHByLCBlbnZzLCBhZGRSZXN1bHQpO1xuICB9O1xufTtcblxuY29uc3QgX2V4cGFuZE1hY3JvID0gZnVuY3Rpb24oZXJsTWFjcm9TeW1ib2wsIGVybEFyZ3MsIGVudnMsIGFkZFJlc3VsdCkge1xuICBjb25zdCBlcmxNYWNybyA9IF9ldmFsdWF0ZShlcmxNYWNyb1N5bWJvbCwgZW52cywgYWRkUmVzdWx0KTtcbiAgY29uc3QganNWYWx1ZSA9IGV4dHJhY3RKc1ZhbHVlKGVybE1hY3JvKTtcbiAgY29uc3QgbG9jYWxFbnZzID0ganNWYWx1ZS5sb2NhbEVudnM7XG4gIGNvbnN0IGVybEV4cHJlc3Npb24gPSBqc1ZhbHVlLmVybEV4cHJlc3Npb247XG4gIGNvbnN0IGVybFBhcmFtZXRlcnMgPSBqc1ZhbHVlLmVybFBhcmFtZXRlcnM7XG4gIGNvbnN0IG5ld0VudiA9IGNyZWF0ZUxvY2FsRW52KGVybFBhcmFtZXRlcnMsIGVybEFyZ3MpO1xuICBjb25zdCBuZXdFbnZTdGFjayA9IGFkZEVudihsb2NhbEVudnMsIG5ld0Vudik7XG4gIHJldHVybiBfZXZhbHVhdGUoZXJsRXhwcmVzc2lvbiwgbmV3RW52U3RhY2ssIGFkZFJlc3VsdCk7XG59O1xuXG5jb25zdCBpZ25vcmFibGUgPSBmdW5jdGlvbihlcmxWYWwsIGVudnMsIGFkZFJlc3VsdCkge1xuICBpZiAoaXNFcmxJZ25vcmUoZXJsVmFsKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICghaXNFcmxMaXN0KGVybFZhbCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qgc3ltYm9sID0gY2FyKGVybFZhbCk7XG4gIGlmICghaXNFcmxTeW1ib2woc3ltYm9sKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBqc1N0cmluZyA9IGV4dHJhY3RKc1ZhbHVlKHN5bWJvbCk7XG4gIGlmIChqc1N0cmluZyA9PT0gJ2lnbm9yZScpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoanNTdHJpbmcgPT09ICdpZ25vcmVJZlRydWUnKSB7XG4gICAgcmV0dXJuIGV4dHJhY3RKc1ZhbHVlKF9ldmFsdWF0ZShuZXh0KGVybFZhbCksIGVudnMsIGFkZFJlc3VsdCkpO1xuICB9XG4gIGlmIChqc1N0cmluZyA9PT0gJ2lnbm9yZVVubGVzc1RydWUnKSB7XG4gICAgcmV0dXJuICFleHRyYWN0SnNWYWx1ZShfZXZhbHVhdGUobmV4dChlcmxWYWwpLCBlbnZzLCBhZGRSZXN1bHQpKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCByZWR1Y2VMZXQgPSBmdW5jdGlvbihlbnZzLCBsaXN0LCBhZGRSZXN1bHQpIHtcbiAgY29uc3QgbmV3RW52ID0ge307XG4gIGNvbnN0IF9lbnZzID0gYWRkRW52KGVudnMsIG5ld0Vudik7XG4gIHdoaWxlICghaXNFbXB0eShsaXN0KSkge1xuICAgIGNvbnN0IGpzS2V5ID0gZXh0cmFjdEpzVmFsdWUobGlzdC52YWx1ZSk7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gICAgY29uc3QgZW52VmFsdWUgPSBfZXZhbHVhdGUobGlzdC52YWx1ZSwgX2VudnMsIGFkZFJlc3VsdCk7XG4gICAgbmV3RW52W2pzS2V5XSA9IGVudlZhbHVlO1xuICAgIGxpc3QgPSByZWN1cnNlKGxpc3QpO1xuICB9XG4gIHJldHVybiBuZXdFbnY7XG59O1xuXG5jb25zdCByZWR1Y2VMZXRyZWMgPSBmdW5jdGlvbihlbnZzLCBsaXN0LCBhZGRSZXN1bHQpIHtcbiAgY29uc3QgbmV3RW52ID0ge307XG4gIGNvbnN0IF9lbnZzID0gYWRkRW52KGVudnMsIG5ld0Vudik7XG4gIHdoaWxlICghaXNFbXB0eShsaXN0KSkge1xuICAgIGNvbnN0IGpzS2V5ID0gZXh0cmFjdEpzVmFsdWUobGlzdC52YWx1ZSk7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gICAgY29uc3QgX2VybEV4cHIgPSBmcm9tQXJyYXkoXG4gICAgICBbICBjcmVhdGVFcmxTeW1ib2woXCJmaXgqXCIpLFxuICAgICAgICAgZnJvbUFycmF5KFtjcmVhdGVFcmxTeW1ib2woXCJmbipcIiksXG4gICAgICAgICBmcm9tQXJyYXkoW2pzS2V5XSksXG4gICAgICAgICBsaXN0LnZhbHVlXSlcbiAgICAgIF0pO1xuICAgIGNvbnN0IGVudlZhbHVlID0gX2V2YWx1YXRlKF9lcmxFeHByLCBfZW52cywgYWRkUmVzdWx0KTtcbiAgICBuZXdFbnZbanNLZXldID0gZW52VmFsdWU7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gIH1cbiAgcmV0dXJuIG5ld0Vudjtcbn07XG5cbmNvbnN0IGlzU3BsaWNlVW5xdW90ZSA9IGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gIHJldHVybiAoZXh0cmFjdEpzVmFsdWUoZXJsVmFsdWUpKSA9PT0gc3BsaWNlVW5xdW90ZTtcbn07XG5cbmNvbnN0IGlzU3BsaWNlVW5xdW90ZWRFeHByID0gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgcmV0dXJuIGlzRXJsTGlzdChlcmxWYWx1ZSkgJiYgaXNTcGxpY2VVbnF1b3RlKGNhcihlcmxWYWx1ZSkpO1xufTtcblxuY29uc3QgdW5kZWZpbmVWYWx1ZSA9IGZ1bmN0aW9uKGVybExpc3QsIGVudnMpIHtcbiAgY29uc3QganNLZXkgPSBleHRyYWN0SnNWYWx1ZShjYXIoZXJsTGlzdCkpO1xuICByZXR1cm4gdW5zZXRNYWluRW52KGVudnMsIGpzS2V5KTtcbn07XG5cbmNvbnN0IGlzVW5xdW90ZSA9IGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gIHJldHVybiBleHRyYWN0SnNWYWx1ZShlcmxWYWx1ZSkgPT09IHVucXVvdGU7XG59O1xuXG5jb25zdCBpc1VucXVvdGVkRXhwciA9IGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gIHJldHVybiBpc0VybExpc3QoZXJsVmFsdWUpICYmIGlzVW5xdW90ZShjYXIoZXJsVmFsdWUpKTtcbn07XG5cbmV4cG9ydCB7IGV2YWx1YXRlIH07XG4iLCJpbXBvcnQgeyBnZXRFbnZpcm9ubWVudCBhcyBzZXRFbnYwIH0gZnJvbSAnLi9lbnYwJztcbmltcG9ydCB7IGdldEVudmlyb25tZW50IGFzIHNldEVudjEgfSBmcm9tICcuL2VudjEnO1xuaW1wb3J0IHsgZ2V0RW52aXJvbm1lbnQgYXMgc2V0RW52MiB9IGZyb20gJy4vZW52Mic7XG5pbXBvcnQgeyBnZXRFbnZpcm9ubWVudCBhcyBzZXRFbnYzIH0gZnJvbSAnLi9lbnYzJztcbmltcG9ydCB7IGdldEVudmlyb25tZW50IGFzIHNldEVudjQgfSBmcm9tICcuL2VudjQnO1xuXG5jb25zdCBnZXRMaXNwRW52aXJvbm1lbnQgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgY29uc3QgZGlzcGxheSA9IGNvbmZpZy5kaXNwbGF5O1xuICBjb25zdCBlbnZpcm9ubWVudCA9IHt9O1xuICBjb25zdCBfY29uZmlnID0ge1xuICAgIGRpc3BsYXk6IGRpc3BsYXksXG4gICAgZW52aXJvbm1lbnQ6IGVudmlyb25tZW50XG4gIH07XG4gIHNldEVudjAoX2NvbmZpZyk7XG4gIHNldEVudjEoX2NvbmZpZyk7XG4gIHNldEVudjIoX2NvbmZpZyk7XG4gIHNldEVudjMoX2NvbmZpZyk7XG4gIHNldEVudjQoX2NvbmZpZyk7XG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn07XG5cbmV4cG9ydCB7IGdldExpc3BFbnZpcm9ubWVudCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzSnNTdHJpbmcgfSBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5cbmNvbnN0IF9fc2xpY2UgICA9IFtdLnNsaWNlO1xuY29uc3QgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbmNvbnN0IGZyb21FcmxJbmRleCA9IGZ1bmN0aW9uKGVybEluZGV4KSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBjb25zdCBqc1ZhbHVlID0gZXJsSW5kZXguanNWYWx1ZTtcbiAgZm9yIChsZXQga2V5IGluIGpzVmFsdWUpIHtcbiAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGpzVmFsdWUsIGtleSkpIGNvbnRpbnVlO1xuICAgIGNvbnN0IHZhbHVlID0ganNWYWx1ZVtrZXldO1xuICAgIGlmIChpc0pzU3RyaW5nKGtleSkpIHtcbiAgICAgIGNvbnN0IG5ld0tleSA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgc3dpdGNoIChrZXlbMF0pIHtcbiAgICAgICAgICBjYXNlICc6JzpcbiAgICAgICAgICAgIHJldHVybiBrZXkuc2xpY2UoMSk7XG4gICAgICAgICAgY2FzZSAnXCInOlxuICAgICAgICAgICAgcmV0dXJuIGtleS5zbGljZSgxLCAtMSk7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgIH0pKCk7XG4gICAgICByZXN1bHRbbmV3S2V5XSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgZnJvbUpzT2JqZWN0cyA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBqc09iamVjdHMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICBjb25zdCBjb3B5ID0ge307XG4gIGNvbnN0IGxlbiA9IGpzT2JqZWN0cy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyAgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QganNPYmplY3QgPSBqc09iamVjdHNbaV07XG4gICAgZm9yIChsZXQga2V5IGluIGpzT2JqZWN0KSB7XG4gICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGpzT2JqZWN0LCBrZXkpKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IHZhbCA9IGpzT2JqZWN0W2tleV07XG4gICAgICBpZiAoaXNKc1N0cmluZyhrZXkpKSB7XG4gICAgICAgIGNvcHlbJzonICsga2V5XSA9IHZhbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvcHlba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUVybEluZGV4KGNvcHkpO1xufTtcblxuZXhwb3J0IHtcbiAgZnJvbUpzT2JqZWN0cyxcbiAgZnJvbUVybEluZGV4XG59O1xuIiwiaW1wb3J0IHsgY2lyY3VtcGVuZFF1b3RlcyB9ICAgZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3RyaW5nIH0gICAgZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBmcm9tQXJyYXkgfSAgICAgICAgICBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGdldExpc3BFbnZpcm9ubWVudCB9IGZyb20gJy4vZ2V0TGlzcEVudmlyb25tZW50JztcbmltcG9ydCB7IF9wcm9jZXNzIH0gICAgICAgICAgIGZyb20gJy4vX3Byb2Nlc3MnO1xuaW1wb3J0IHsgc2VyaWFsaXplIH0gICAgICAgICAgZnJvbSAnLi9zZXJpYWxpemUnO1xuaW1wb3J0IHN0YW5kYXJkRm5zQW5kTWFjcm9zICAgZnJvbSAnLi9zdGFuZGFyZC1mbnMtYW5kLW1hY3Jvcy5saXNwJztcbmltcG9ydCB7IHRva2VuaXplQW5kUGFyc2UgfSAgIGZyb20gJy4vdG9rZW5pemVBbmRQYXJzZSc7XG5cbmNvbnN0IF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5jb25zdCBfY3JlYXRlRXJsU3RyaW5nID0gZnVuY3Rpb24oanNTdHJpbmcpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhjaXJjdW1wZW5kUXVvdGVzKGpzU3RyaW5nKSk7XG59O1xuXG5jb25zdCBlbmNhcHN1bGF0ZSA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVmZmVjdDoge1xuICAgICAgICB0eXBlOiB0eXBlXG4gICAgICB9LFxuICAgICAgdmFsdWU6IGVybFZhbHVlXG4gICAgfTtcbiAgfTtcbn07XG5cbmNvbnN0IGVycm9yID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlKSB7XG4gIHJldHVybiBbZW5jYXBzdWxhdGUoJ2Vycm9yJykoXCJyZXBsIGVycm9yOiAoXCIgKyBlcnJvck1lc3NhZ2UgKyBcIilcIildO1xufTtcblxuY29uc3QgZmxhdHRlbklmTmVjZXNzYXJ5ID0gZnVuY3Rpb24oZWZmZWN0cykge1xuICBsZXQgdmFsdWU7XG4gIGxldCByZXN1bHRzID0gZWZmZWN0cztcbiAgd2hpbGUgKHJlc3VsdHMubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkodmFsdWUgPSByZXN1bHRzWzBdLnZhbHVlKSkge1xuICAgIHJlc3VsdHMgPSBmbGF0dGVuSWZOZWNlc3NhcnkodmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHRzO1xufTtcblxuY29uc3QgX2ludGVycHJldCA9IGZ1bmN0aW9uKGVudnMsIGpzU3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIF9zZXJpYWxpemUoXG4gICAgICBmbGF0dGVuSWZOZWNlc3NhcnkoXG4gICAgICAgIF9wcm9jZXNzKHRva2VuaXplQW5kUGFyc2UpKGVudnMpKGpzU3RyaW5nKSkpO1xuICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IoX2Vycm9yKTtcbiAgfVxufTtcblxuY29uc3QgaW50ZXJwcmV0ID0gZnVuY3Rpb24oanNTdHJpbmcsIHVzZXJKc0FycmF5KSB7XG4gIGlmICh1c2VySnNBcnJheSAhPSBudWxsKSB7XG4gICAgY29uc3QgdXNlckVudiA9IHtcbiAgICAgICcqQVJHVionOiBmcm9tQXJyYXkodXNlckpzQXJyYXkubWFwKF9jcmVhdGVFcmxTdHJpbmcpKVxuICAgIH07XG4gICAgcmV0dXJuIF9pbnRlcnByZXQoW3VzZXJFbnYsIGVudmlyb25tZW50XSwganNTdHJpbmcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBfaW50ZXJwcmV0KFtlbnZpcm9ubWVudF0sIGpzU3RyaW5nKTtcbiAgfVxufTtcblxuY29uc3QgX3NlcmlhbGl6ZSA9IGZ1bmN0aW9uKHJlc3VsdHMpIHtcbiAgcmV0dXJuIHJlc3VsdHMubWFwKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgIGNvbnN0IF9yZXN1bHQgPSB7fTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKHJlc3VsdCwga2V5KSkgY29udGludWU7XG4gICAgICBjb25zdCB2YWx1ZSA9IHJlc3VsdFtrZXldO1xuICAgICAgaWYgKGtleSA9PT0gJ2VmZmVjdCcpIHtcbiAgICAgICAgX3Jlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfcmVzdWx0W2tleV0gPSBzZXJpYWxpemUodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX3Jlc3VsdDtcbiAgfSk7XG59O1xuXG5jb25zdCBlbnZpcm9ubWVudCA9IGdldExpc3BFbnZpcm9ubWVudCh7XG4gIGRpc3BsYXk6IGVuY2Fwc3VsYXRlKCdkaXNwbGF5Jylcbn0pO1xuXG5pbnRlcnByZXQoc3RhbmRhcmRGbnNBbmRNYWNyb3MpO1xuXG5leHBvcnQgeyBpbnRlcnByZXQgfTtcbiIsImNvbnN0IGNpcmN1bXBlbmRRdW90ZXMgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4gJ1wiJyArIGpzU3RyaW5nICsgJ1wiJztcbn07XG5cbmNvbnN0IGlzSnNOYU4gPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIGlzSnNOdW1iZXIodmFsKSAmJiB2YWwgIT09IHZhbDtcbn07XG5cbmNvbnN0IGlzSnNOdW1iZXIgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59O1xuXG5jb25zdCBpc0pzU3RyaW5nID0gZnVuY3Rpb24oanNWYWwpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChqc1ZhbCkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufTtcblxuZXhwb3J0IHtcbiAgY2lyY3VtcGVuZFF1b3RlcyxcbiAgaXNKc05hTixcbiAgaXNKc051bWJlcixcbiAgaXNKc1N0cmluZ1xufTtcbiIsImNvbnN0IGRlcmVmICAgICAgICAgICAgICAgICA9ICdkZXJlZic7XG5jb25zdCBkZXJlZkdseXBoICAgICAgICAgICAgPSAnQCc7XG5jb25zdCBjYXRjaFN0YXIgICAgICAgICAgICAgPSAnY2F0Y2gqJztcbmNvbnN0IGRlZkJhbmcgICAgICAgICAgICAgICA9ICdkZWYhJztcbmNvbnN0IF9kbyAgICAgICAgICAgICAgICAgICA9ICdkbyc7XG5jb25zdCBfZXZhbCAgICAgICAgICAgICAgICAgPSAnZXZhbCc7XG5jb25zdCBfZXZhbFdpdGhFbnYgICAgICAgICAgPSAnZXZhbC13aXRoLWVudic7XG5jb25zdCBleHBhbmRNYWNybyAgICAgICAgICAgPSAnZXhwYW5kLW1hY3JvJztcbmNvbnN0IF9mYWxzZSAgICAgICAgICAgICAgICA9ICdmYWxzZSc7XG5jb25zdCBmblN0YXIgICAgICAgICAgICAgICAgPSAnZm4qJztcbmNvbnN0IF9nZXRDdXJyZW50RW52ICAgICAgICA9ICctZ2V0LWN1cnJlbnQtZW52LSc7XG5jb25zdCBfZ2V0RGVmYXVsdEVudiAgICAgICAgPSAnLWdldC1kZWZhdWx0LWVudi0nO1xuY29uc3QgX2lmICAgICAgICAgICAgICAgICAgID0gJ2lmJztcbmNvbnN0IGlnbm9yZUJhbmcgICAgICAgICAgICA9ICdpZ25vcmUhJztcbmNvbnN0IGlnbm9yZUJhbmdHbHlwaCAgICAgICA9ICcjISc7XG5jb25zdCBpZ25vcmVJZlRydWUgICAgICAgICAgPSAnaWdub3JlSWZUcnVlJztcbmNvbnN0IGlnbm9yZUlmVHJ1ZUdseXBoICAgICA9ICcjLSc7XG5jb25zdCBpZ25vcmVVbmxlc3NUcnVlICAgICAgPSAnaWdub3JlVW5sZXNzVHJ1ZSc7XG5jb25zdCBpZ25vcmVVbmxlc3NUcnVlR2x5cGggPSAnIysnO1xuY29uc3QgaWdub3JlICAgICAgICAgICAgICAgID0gJ2lnbm9yZSc7XG5jb25zdCBpbmRleEVuZCAgICAgICAgICAgICAgPSAnfSc7XG5jb25zdCBpbmRleFN0YXJ0ICAgICAgICAgICAgPSAneyc7XG5jb25zdCBsZXRTdGFyICAgICAgICAgICAgICAgPSAnbGV0Kic7XG5jb25zdCBsZXRyZWNTdGFyICAgICAgICAgICAgPSAnbGV0cmVjKic7XG5jb25zdCBsaXN0RW5kICAgICAgICAgICAgICAgPSAnKSc7XG5jb25zdCBsaXN0U3RhcnQgICAgICAgICAgICAgPSAnKCc7XG5jb25zdCBtYWNyb1N0YXIgICAgICAgICAgICAgPSAnbWFjcm8qJztcbmNvbnN0IG5pbCAgICAgICAgICAgICAgICAgICA9ICduaWwnO1xuY29uc3QgX3Byb2Nlc3MgICAgICAgICAgICAgID0gJy1wcm9jZXNzLSc7XG5jb25zdCBxdWFzaXF1b3RlICAgICAgICAgICAgPSAncXVhc2lxdW90ZSc7XG5jb25zdCBxdWFzaXF1b3RlR2x5cGggICAgICAgPSAnYCc7XG5jb25zdCBxdW90ZSAgICAgICAgICAgICAgICAgPSAncXVvdGUnO1xuY29uc3QgcXVvdGVHbHlwaCAgICAgICAgICAgID0gJ1xcJyc7XG5jb25zdCBzcGxhdCAgICAgICAgICAgICAgICAgPSAnJic7XG5jb25zdCBzcGxpY2VVbnF1b3RlICAgICAgICAgPSAnc3BsaWNlLXVucXVvdGUnO1xuY29uc3Qgc3BsaWNlVW5xdW90ZUdseXBoICAgID0gJ35AJztcbmNvbnN0IF90cnVlICAgICAgICAgICAgICAgICA9ICd0cnVlJztcbmNvbnN0IHRyeVN0YXIgICAgICAgICAgICAgICA9ICd0cnkqJztcbmNvbnN0IHVuZGVmQmFuZyAgICAgICAgICAgICA9ICd1bmRlZiEnO1xuY29uc3QgdW5xdW90ZSAgICAgICAgICAgICAgID0gJ3VucXVvdGUnO1xuY29uc3QgdW5xdW90ZUdseXBoICAgICAgICAgID0gJ34nXG5cbmNvbnN0IGtleVRva2VucyA9IFtcbiAgZGVyZWYsXG4gIGRlcmVmR2x5cGgsXG4gIGNhdGNoU3RhcixcbiAgZGVmQmFuZyxcbiAgX2RvLFxuICBfZXZhbCxcbiAgX2V2YWxXaXRoRW52LFxuICBleHBhbmRNYWNybyxcbiAgX2ZhbHNlLFxuICBmblN0YXIsXG4gIF9nZXRDdXJyZW50RW52LFxuICBfZ2V0RGVmYXVsdEVudixcbiAgX2lmLFxuICBpZ25vcmVCYW5nLFxuICBpZ25vcmVCYW5nR2x5cGgsXG4gIGlnbm9yZUlmVHJ1ZSxcbiAgaWdub3JlSWZUcnVlR2x5cGgsXG4gIGlnbm9yZVVubGVzc1RydWUsXG4gIGlnbm9yZVVubGVzc1RydWVHbHlwaCxcbiAgaWdub3JlLFxuICBpbmRleEVuZCxcbiAgaW5kZXhTdGFydCxcbiAgbGV0U3RhcixcbiAgbGV0cmVjU3RhcixcbiAgbGlzdEVuZCxcbiAgbGlzdFN0YXJ0LFxuICBtYWNyb1N0YXIsXG4gIG5pbCxcbiAgX3Byb2Nlc3MsXG4gIHF1YXNpcXVvdGUsXG4gIHF1YXNpcXVvdGVHbHlwaCxcbiAgcXVvdGUsXG4gIHF1b3RlR2x5cGgsXG4gIHNwbGF0LFxuICBzcGxpY2VVbnF1b3RlLFxuICBzcGxpY2VVbnF1b3RlR2x5cGgsXG4gIF90cnVlLFxuICB0cnlTdGFyLFxuICB1bmRlZkJhbmcsXG4gIHVucXVvdGUsXG4gIHVucXVvdGVHbHlwaFxuXTtcblxuY29uc3Qga2V5d29yZHMgPSBbXG4gIGNhdGNoU3RhcixcbiAgZGVmQmFuZyxcbiAgX2RvLFxuICBfZXZhbCxcbiAgX2V2YWxXaXRoRW52LFxuICBleHBhbmRNYWNybyxcbiAgX2ZhbHNlLFxuICBmblN0YXIsXG4gIF9nZXRDdXJyZW50RW52LFxuICBfZ2V0RGVmYXVsdEVudixcbiAgX2lmLFxuICBpZ25vcmUsXG4gIGxldFN0YXIsXG4gIGxldHJlY1N0YXIsXG4gIG1hY3JvU3RhcixcbiAgbmlsLFxuICBfcHJvY2VzcyxcbiAgcXVhc2lxdW90ZSxcbiAgcXVvdGUsXG4gIHNwbGljZVVucXVvdGUsXG4gIF90cnVlLFxuICB0cnlTdGFyLFxuICB1bmRlZkJhbmcsXG4gIHVucXVvdGVcbl07XG5cbmNvbnN0IG1hY3JvVG9rZW5zID0gW3F1YXNpcXVvdGUsIHF1b3RlLCBzcGxpY2VVbnF1b3RlLCB1bnF1b3RlXTtcblxuY29uc3QgZ2x5cGhUb2tlbnMgPSBbXG4gIGRlcmVmR2x5cGgsXG4gIGlnbm9yZUJhbmdHbHlwaCxcbiAgcXVhc2lxdW90ZUdseXBoLFxuICBxdW90ZUdseXBoLFxuICBzcGxpY2VVbnF1b3RlR2x5cGgsXG4gIHVucXVvdGVHbHlwaFxuXTtcblxuY29uc3QgYmluYXJ5R2x5cGhUb2tlbnMgPSBbaWdub3JlSWZUcnVlR2x5cGgsIGlnbm9yZVVubGVzc1RydWVHbHlwaF07XG5cbmNvbnN0IF9faW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgfSByZXR1cm4gLTE7XG59O1xuXG5jb25zdCBpc0tleXdvcmQgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4gX19pbmRleE9mLmNhbGwoa2V5d29yZHMsIGpzU3RyaW5nKSA+PSAwO1xufTtcblxuZXhwb3J0IHtcbiAgYmluYXJ5R2x5cGhUb2tlbnMsXG4gIGRlcmVmLFxuICBkZXJlZkdseXBoLFxuICBjYXRjaFN0YXIsXG4gIGRlZkJhbmcsXG4gIF9kbyxcbiAgX2V2YWwsXG4gIF9ldmFsV2l0aEVudixcbiAgZXhwYW5kTWFjcm8sXG4gIF9mYWxzZSxcbiAgZm5TdGFyLFxuICBfZ2V0Q3VycmVudEVudixcbiAgX2dldERlZmF1bHRFbnYsXG4gIGdseXBoVG9rZW5zLFxuICBfaWYsXG4gIGlnbm9yZUlmVHJ1ZSxcbiAgaWdub3JlSWZUcnVlR2x5cGgsXG4gIGlnbm9yZVVubGVzc1RydWUsXG4gIGlnbm9yZVVubGVzc1RydWVHbHlwaCxcbiAgaWdub3JlLFxuICBpZ25vcmVCYW5nLFxuICBpZ25vcmVCYW5nR2x5cGgsXG4gIGluZGV4RW5kLFxuICBpbmRleFN0YXJ0LFxuICBrZXlUb2tlbnMsXG4gIGlzS2V5d29yZCxcbiAgbGV0U3RhcixcbiAgbGV0cmVjU3RhcixcbiAgbGlzdEVuZCxcbiAgbGlzdFN0YXJ0LFxuICBtYWNyb1N0YXIsXG4gIG1hY3JvVG9rZW5zLFxuICBuaWwsXG4gIF9wcm9jZXNzLFxuICBxdWFzaXF1b3RlLFxuICBxdWFzaXF1b3RlR2x5cGgsXG4gIHF1b3RlLFxuICBxdW90ZUdseXBoLFxuICBzcGxhdCxcbiAgc3BsaWNlVW5xdW90ZSxcbiAgc3BsaWNlVW5xdW90ZUdseXBoLFxuICBfdHJ1ZSxcbiAgdHJ5U3RhcixcbiAgdW5kZWZCYW5nLFxuICB1bnF1b3RlLFxuICB1bnF1b3RlR2x5cGhcbn07XG4iLCJpbXBvcnQgeyBlcmxUeXBlcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBlcmxMaXN0VHlwZSA9IGVybFR5cGVzWzZdO1xuXG5jb25zdCBfX3NsaWNlID0gW10uc2xpY2U7XG5cbmNvbnN0IGNhciA9IGZ1bmN0aW9uKGVybExpc3QpIHtcbiAgaWYgKGlzRW1wdHkoZXJsTGlzdCkpIHtcbiAgICByZXR1cm4gRU9MO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxMaXN0LnZhbHVlO1xuICB9XG59O1xuXG5jb25zdCBjZHIgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIGlmIChpc0VtcHR5KGVybExpc3QpKSB7XG4gICAgcmV0dXJuIEVPTDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTGlzdC5uZXh0O1xuICB9XG59O1xuXG5jb25zdCBhcmVFcXVhbCA9IGZ1bmN0aW9uKGxpc3QwLCBsaXN0MSwgX2FyZUVxdWFsKSB7XG4gIHdoaWxlICghKGlzRW1wdHkobGlzdDApIHx8IGlzRW1wdHkobGlzdDEpKSkge1xuICAgIGlmICghX2FyZUVxdWFsKGxpc3QwLnZhbHVlLCBsaXN0MS52YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGlzdDAgPSBjZHIobGlzdDApO1xuICAgIGxpc3QxID0gY2RyKGxpc3QxKTtcbiAgfVxuICByZXR1cm4gaXNFbXB0eShsaXN0MCkgJiYgaXNFbXB0eShsaXN0MSk7XG59O1xuXG5jb25zdCBjb25jYXQgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgZXJsTGlzdHMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICBpZiAoZXJsTGlzdHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEVPTDtcbiAgfVxuICBsZXQgcmVzdWx0ID0gY29weShlcmxMaXN0c1swXSk7XG4gIGxldCB0YWlsID0gbGFzdFRhaWwocmVzdWx0KTtcbiAgY29uc3QgcmVtYWluaW5nID0gZXJsTGlzdHMuc2xpY2UoMSk7XG4gIGNvbnN0IGxlbiA9IHJlbWFpbmluZy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBlcmxMaXN0ID0gcmVtYWluaW5nW2ldO1xuICAgIGNvbnN0IF9jb3B5ID0gY29weShlcmxMaXN0KTtcbiAgICBpZiAoaXNFbXB0eSh0YWlsKSkge1xuICAgICAgcmVzdWx0ID0gX2NvcHk7XG4gICAgICB0YWlsID0gbGFzdFRhaWwocmVzdWx0KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWlzRW1wdHkoX2NvcHkpKSB7XG4gICAgICB0YWlsLm5leHQgPSBfY29weTtcbiAgICAgIHRhaWwgPSBsYXN0VGFpbChfY29weSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBjb25zID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY3JlYXRlRXJsTGlzdChjYXIoZXJsQXJncyksIG5leHQoZXJsQXJncykpO1xufTtcblxuY29uc3QgY29weSA9IGZ1bmN0aW9uKGVybExpc3QpIHtcbiAgcmV0dXJuIG1hcCgoZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiB4O1xuICB9KSwgZXJsTGlzdCk7XG59O1xuXG5jb25zdCBjcmVhdGVFcmxMaXN0ID0gZnVuY3Rpb24odmFsdWUsIG5leHROb2RlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIEVPTDtcbiAgfVxuICByZXR1cm4gY3JlYXRlTm9kZSh2YWx1ZSwgbmV4dE5vZGUgIT0gbnVsbCA/IG5leHROb2RlIDogRU9MKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5vZGUgPSBmdW5jdGlvbih2YWx1ZSwgbmV4dE5vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBlcmxMaXN0VHlwZSxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgbmV4dDogbmV4dE5vZGVcbiAgfTtcbn07XG5cbmNvbnN0IGRyb3AgPSBmdW5jdGlvbihuYnIsIGVybExpc3QpIHtcbiAgd2hpbGUgKG5iciAhPT0gMCkge1xuICAgIGVybExpc3QgPSBjZHIoZXJsTGlzdCk7XG4gICAgbmJyID0gbmJyIC0gMTtcbiAgfVxuICByZXR1cm4gZXJsTGlzdDtcbn07XG5cbmNvbnN0IGlzRW1wdHkgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IEVPTDtcbn07XG5cbmNvbnN0IGZpbHRlciA9IGZ1bmN0aW9uKHByZWRpY2F0ZSwgbGlzdCkge1xuICBjb25zdCBfcmVkdWNlID0gZnVuY3Rpb24obGlzdCwgdmFsdWUpIHtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVybExpc3QodmFsdWUsIGxpc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG4gIH07XG4gIHJldHVybiByZXZlcnNlKHJlZHVjZShFT0wsIF9yZWR1Y2UsIGxpc3QpKTtcbn07XG5cbmNvbnN0IGZvckVhY2ggPSBmdW5jdGlvbihmbiwgbGlzdCkge1xuICBsZXQgcmVzdWx0ID0gbGlzdDtcbiAgd2hpbGUgKCFpc0VtcHR5KGxpc3QpKSB7XG4gICAgcmVzdWx0ID0gZm4obGlzdC52YWx1ZSk7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGZyb21BcnJheSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gIGNvbnN0IF9yZWR1Y2UgPSBmdW5jdGlvbihsaXN0LCB2YWx1ZSkge1xuICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KHZhbHVlLCBsaXN0KTtcbiAgfTtcbiAgcmV0dXJuIGFycmF5LnJldmVyc2UoKS5yZWR1Y2UoX3JlZHVjZSwgY3JlYXRlRXJsTGlzdCgpKTtcbn07XG5cbmNvbnN0IGxhc3QgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIHJldHVybiBjYXIobGFzdFRhaWwoZXJsTGlzdCkpO1xufTtcblxuY29uc3QgbGFzdFRhaWwgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIGlmIChpc0VtcHR5KGVybExpc3QpKSB7XG4gICAgcmV0dXJuIGVybExpc3Q7XG4gIH1cbiAgbGV0IHByaW9yID0gZXJsTGlzdDtcbiAgbGV0IGN1cnJlbnQgPSBjZHIoZXJsTGlzdCk7XG4gIHdoaWxlICghaXNFbXB0eShjdXJyZW50KSkge1xuICAgIHByaW9yID0gY2RyKHByaW9yKTtcbiAgICBjdXJyZW50ID0gY2RyKGN1cnJlbnQpO1xuICB9XG4gIHJldHVybiBwcmlvcjtcbn07XG5cbmNvbnN0IG1hcCA9IGZ1bmN0aW9uKGZuLCBsaXN0KSB7XG4gIGNvbnN0IF9yZWR1Y2UgPSBmdW5jdGlvbihsaXN0LCB2YWx1ZSkge1xuICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KGZuKHZhbHVlKSwgbGlzdCk7XG4gIH07XG4gIHJldHVybiByZXZlcnNlKHJlZHVjZShFT0wsIF9yZWR1Y2UsIGxpc3QpKTtcbn07XG5cbmNvbnN0IG5leHQgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIHJldHVybiBjYXIoY2RyKGVybExpc3QpKTtcbn07XG5cbmNvbnN0IHJlY3Vyc2UgPSBmdW5jdGlvbihsaXN0KSB7XG4gIGlmIChpc0VtcHR5KGxpc3QpKSB7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3QubmV4dDtcbiAgfVxufTtcblxuY29uc3QgcmVkdWNlID0gZnVuY3Rpb24oc2VlZCwgZm4sIGxpc3QpIHtcbiAgd2hpbGUgKCFpc0VtcHR5KGxpc3QpKSB7XG4gICAgc2VlZCA9IGZuKHNlZWQsIGxpc3QudmFsdWUpO1xuICAgIGxpc3QgPSByZWN1cnNlKGxpc3QpO1xuICB9XG4gIHJldHVybiBzZWVkO1xufTtcblxuY29uc3QgcmVkdWNlQnkyID0gZnVuY3Rpb24oc2VlZCwgZm4sIGxpc3QpIHtcbiAgd2hpbGUgKCFpc0VtcHR5KGxpc3QpKSB7XG4gICAgY29uc3QgdmFsdWUwID0gbGlzdC52YWx1ZTtcbiAgICBsaXN0ID0gcmVjdXJzZShsaXN0KTtcbiAgICBjb25zdCB2YWx1ZTEgPSBsaXN0LnZhbHVlO1xuICAgIHNlZWQgPSBmbihzZWVkLCB2YWx1ZTAsIHZhbHVlMSk7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gIH1cbiAgcmV0dXJuIHNlZWQ7XG59O1xuXG5jb25zdCByZXZlcnNlID0gZnVuY3Rpb24obGlzdCkge1xuICBsZXQgcmVzdWx0ID0gRU9MO1xuICB3aGlsZSAoIWlzRW1wdHkobGlzdCkpIHtcbiAgICByZXN1bHQgPSBjcmVhdGVFcmxMaXN0KGxpc3QudmFsdWUsIHJlc3VsdCk7XG4gICAgbGlzdCA9IGxpc3QubmV4dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgdGFrZSA9IGZ1bmN0aW9uKG5iciwgZXJsTGlzdCkge1xuICBsZXQgcmVzdWx0ID0gY3JlYXRlRXJsTGlzdCgpO1xuICB3aGlsZSAobmJyICE9PSAwKSB7XG4gICAgY29uc3Qgbm9kZSA9IGNhcihlcmxMaXN0KTtcbiAgICBlcmxMaXN0ID0gY2RyKGVybExpc3QpO1xuICAgIHJlc3VsdCA9IGNyZWF0ZUVybExpc3Qobm9kZSwgcmVzdWx0KTtcbiAgICBuYnIgPSBuYnIgLSAxO1xuICB9XG4gIHJldHVybiByZXZlcnNlKHJlc3VsdCk7XG59O1xuXG5jb25zdCB0b0FycmF5ID0gZnVuY3Rpb24obGlzdCkge1xuICBjb25zdCBfcmVkdWNlID0gZnVuY3Rpb24oanNBcnJheSwgdmFsdWUpIHtcbiAgICBqc0FycmF5LnB1c2godmFsdWUpO1xuICAgIHJldHVybiBqc0FycmF5O1xuICB9O1xuICByZXR1cm4gcmVkdWNlKFtdLCBfcmVkdWNlLCBsaXN0KTtcbn07XG5cbmNvbnN0IHRvUGFydGlhbEFycmF5ID0gZnVuY3Rpb24obmJyLCBsaXN0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICB3aGlsZSAobmJyICE9PSAwKSB7XG4gICAgY29uc3Qgbm9kZSA9IGNhcihsaXN0KTtcbiAgICBsaXN0ID0gY2RyKGxpc3QpO1xuICAgIHJlc3VsdC5wdXNoKG5vZGUpO1xuICAgIG5iciA9IG5iciAtIDE7XG4gIH1cbiAgcmVzdWx0LnB1c2gobGlzdCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCB6aXAgPSBmdW5jdGlvbihzZWVkLCBmbiwgbGlzdDAsIGxpc3QxKSB7XG4gIHdoaWxlICghKGlzRW1wdHkobGlzdDApIHx8IGlzRW1wdHkobGlzdDEpKSkge1xuICAgIGNvbnN0IHZhbHVlMCA9IGNhcihsaXN0MCk7XG4gICAgbGlzdDAgPSBjZHIobGlzdDApO1xuICAgIGNvbnN0IHZhbHVlMSA9IGNhcihsaXN0MSk7XG4gICAgbGlzdDEgPSBjZHIobGlzdDEpO1xuICAgIHNlZWQgPSBmbihzZWVkLCB2YWx1ZTAsIHZhbHVlMSk7XG4gIH1cbiAgcmV0dXJuIHNlZWQ7XG59O1xuXG5jb25zdCBfRU9MID0ge307XG5cbmNvbnN0IEVPTCA9IGNyZWF0ZU5vZGUoX0VPTCwgX0VPTCk7XG5cbmV4cG9ydCB7XG4gIGFyZUVxdWFsLFxuICBjYXIsXG4gIGNkcixcbiAgY29uY2F0LFxuICBjb25zLFxuICBjb3B5LFxuICBjcmVhdGVFcmxMaXN0LFxuICBkcm9wLFxuICBpc0VtcHR5LFxuICBmaWx0ZXIsXG4gIGZvckVhY2gsXG4gIGZyb21BcnJheSxcbiAgbGFzdCxcbiAgbWFwLFxuICBuZXh0LFxuICByZWN1cnNlLFxuICByZWR1Y2UsXG4gIHJlZHVjZUJ5MixcbiAgcmV2ZXJzZSxcbiAgdGFrZSxcbiAgdG9BcnJheSxcbiAgdG9QYXJ0aWFsQXJyYXlcbn07XG4iLCJpbXBvcnQgeyBiaW5hcnlHbHlwaFRva2VucyB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGNvbW1lbnRTaWduYWwgfSBmcm9tICcuL2NvbW1lbnRTaWduYWwnO1xuaW1wb3J0IHsgY3JlYXRlRXJsQm9vbGVhbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsSWRlbnRpZmllciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsSWdub3JlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTGlzdCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxOdW1iZXIgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3ltYm9sIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBkZXJlZiB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGRlcmVmR2x5cGggfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBleHRyYWN0SnNWYWx1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgX2ZhbHNlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgZ2x5cGhUb2tlbnMgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmVCYW5nIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlQmFuZ0dseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlSWZUcnVlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlSWZUcnVlR2x5cGggfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmVVbmxlc3NUcnVlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlVW5sZXNzVHJ1ZUdseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaW5kZXhFbmQgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpbmRleFN0YXJ0IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsga2V5VG9rZW5zIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbGlzdEVuZCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGxpc3RTdGFydCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IG5pbCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHF1YXNpcXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBxdW90ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHNwbGljZVVucXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyB1bnF1b3RlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcXVhc2lxdW90ZUdseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcXVvdGVHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHNwbGljZVVucXVvdGVHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHVucXVvdGVHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHJldmVyc2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IF90cnVlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuXG5jb25zdCAgX19pbmRleE9mID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICB9IHJldHVybiAtMTtcbn07XG5cbmNvbnN0IGF0b21pemUgPSBmdW5jdGlvbih0b2tlbikge1xuICBjb25zdCBjcmVhdGVFcmxWYWx1ZSA9IChmdW5jdGlvbigpIHtcbiAgICBpZiAoaXNOaWwodG9rZW4pKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRXJsTmlsO1xuICAgIH0gZWxzZSBpZiAoaXNJZ25vcmUodG9rZW4pKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRXJsSWdub3JlO1xuICAgIH0gZWxzZSBpZiAoaXNCb29sZWFuKHRva2VuKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKHBhcnNlQm9vbGVhbih0b2tlbikpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKHRva2VuKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZztcbiAgICB9IGVsc2UgaWYgKGlzSWRlbnRpZmllcih0b2tlbikpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFcmxJZGVudGlmaWVyO1xuICAgIH0gZWxzZSBpZiAoaXNJbnRlZ2VyKHRva2VuKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxOdW1iZXIocGFyc2VJbnQxMCh0b2tlbikpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRmxvYXQodG9rZW4pKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihwYXJzZUZsb2F0MTAodG9rZW4pKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjcmVhdGVFcmxTeW1ib2w7XG4gICAgfVxuICB9KSgpO1xuICByZXR1cm4gY3JlYXRlRXJsVmFsdWUodG9rZW4pO1xufTtcblxuY29uc3QgaXNCb29sZWFuID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuID09PSBfZmFsc2UgfHwgdG9rZW4gPT09IF90cnVlO1xufTtcblxuY29uc3QgaXNGbG9hdCA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiAvXigtfFxcKyk/WzAtOV0oX3xcXGQpKlxcLihcXGR8KFxcZChffFxcZCkqXFxkKSkkLy50ZXN0KHRva2VuKTtcbn07XG5cbmNvbnN0IGlzQmluYXJ5R2x5cGggPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gX19pbmRleE9mLmNhbGwoYmluYXJ5R2x5cGhUb2tlbnMsIHRva2VuKSA+PSAwO1xufTtcblxuY29uc3QgaXNHbHlwaCA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiBfX2luZGV4T2YuY2FsbChnbHlwaFRva2VucywgdG9rZW4pID49IDA7XG59O1xuXG5jb25zdCBpc0lnbm9yZSA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbiA9PT0gaWdub3JlO1xufTtcblxuY29uc3QgaXNJbmRleFN0YXJ0ID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuID09PSBpbmRleFN0YXJ0O1xufTtcblxuY29uc3QgaXNJbnRlZ2VyID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIC9eKDAoPyFcXC4pfCgoLXxcXCspP1sxLTldKF98XFxkKSokKSkvLnRlc3QodG9rZW4pO1xufTtcblxuY29uc3QgaXNMaXN0U3RhcnQgPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gdG9rZW4gPT09IGxpc3RTdGFydDtcbn07XG5cbmNvbnN0IGlzTmlsID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuID09PSBuaWw7XG59O1xuXG5jb25zdCBfcGFyc2UgPSBmdW5jdGlvbih0b2tlbiwgdG9rZW5zKSB7XG4gIGlmIChpc0xpc3RTdGFydCh0b2tlbikpIHtcbiAgICByZXR1cm4gcGFyc2VMaXN0KHRva2Vucyk7XG4gIH0gZWxzZSBpZiAoaXNJbmRleFN0YXJ0KHRva2VuKSkge1xuICAgIHJldHVybiBwYXJzZUluZGV4KHRva2Vucyk7XG4gIH0gZWxzZSBpZiAoaXNHbHlwaCh0b2tlbikpIHtcbiAgICByZXR1cm4gcGFyc2VHbHlwaChnbHlwaEluZGV4W3Rva2VuXSwgdG9rZW5zKTtcbiAgfSBlbHNlIGlmIChpc0JpbmFyeUdseXBoKHRva2VuKSkge1xuICAgIHJldHVybiBwYXJzZUJpbmFyeUdseXBoKGJpbmFyeUdseXBoSW5kZXhbdG9rZW5dLCB0b2tlbnMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhdG9taXplKHRva2VuKTtcbiAgfVxufTtcblxuY29uc3QgcGFyc2UgPSBmdW5jdGlvbih0b2tlbnMpIHtcbiAgaWYgKHRva2VucyA9PT0gY29tbWVudFNpZ25hbCkge1xuICAgIHJldHVybiBjb21tZW50U2lnbmFsO1xuICB9XG4gIHJldHVybiBfcGFyc2UodG9rZW5zLnNoaWZ0KCksIHRva2Vucyk7XG59O1xuXG5jb25zdCBwYXJzZUJpbmFyeUdseXBoID0gZnVuY3Rpb24oa2V5d29yZCwgdG9rZW5zKSB7XG4gIHJldHVybiBjcmVhdGVFcmxMaXN0KFxuICAgIGNyZWF0ZUVybFN5bWJvbChrZXl3b3JkKSxcbiAgICBjcmVhdGVFcmxMaXN0KFxuICAgICAgcGFyc2UodG9rZW5zKSxcbiAgICAgIGNyZWF0ZUVybExpc3QocGFyc2UodG9rZW5zKSkpKTtcbn07XG5cbmNvbnN0IHBhcnNlQm9vbGVhbiA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbiA9PT0gX3RydWU7XG59O1xuXG5jb25zdCBwYXJzZUZsb2F0MTAgPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gcGFyc2VGbG9hdChzdHJpcFVuZGVyc2NvcmVzKHRva2VuKSwgMTApO1xufTtcblxuY29uc3QgcGFyc2VHbHlwaCA9IGZ1bmN0aW9uKGtleXdvcmQsIHRva2Vucykge1xuICByZXR1cm4gY3JlYXRlRXJsTGlzdChcbiAgICBjcmVhdGVFcmxTeW1ib2woa2V5d29yZCksXG4gICAgY3JlYXRlRXJsTGlzdChwYXJzZSh0b2tlbnMpKSk7XG59O1xuXG5jb25zdCBwYXJzZUluZGV4ID0gZnVuY3Rpb24odG9rZW5zKSB7XG4gIGxldCB0b2tlbjtcbiAgY29uc3QganNJbmRleCA9IHt9O1xuICBsZXQga2V5ID0gbnVsbDtcbiAgbGV0IGlzS2V5U3RlcCA9IHRydWU7XG4gIHdoaWxlICgodG9rZW4gPSB0b2tlbnMuc2hpZnQoKSkgIT09IGluZGV4RW5kKSB7XG4gICAgaWYgKGlzS2V5U3RlcCkge1xuICAgICAga2V5ID0gX3BhcnNlKHRva2VuLCB0b2tlbnMpO1xuICAgICAgaXNLZXlTdGVwID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpzSW5kZXhbZXh0cmFjdEpzVmFsdWUoa2V5KV0gPSBfcGFyc2UodG9rZW4sIHRva2Vucyk7XG4gICAgICBpc0tleVN0ZXAgPSB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY3JlYXRlRXJsSW5kZXgoanNJbmRleCk7XG59O1xuXG5jb25zdCBwYXJzZUludDEwID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHBhcnNlSW50KHN0cmlwVW5kZXJzY29yZXModG9rZW4pLCAxMCk7XG59O1xuXG5jb25zdCBwYXJzZUxpc3QgPSBmdW5jdGlvbih0b2tlbnMpIHtcbiAgbGV0IHRva2VuO1xuICBsZXQgZXJsTGlzdCA9IGNyZWF0ZUVybExpc3QoKTtcbiAgd2hpbGUgKCh0b2tlbiA9IHRva2Vucy5zaGlmdCgpKSAhPT0gbGlzdEVuZCkge1xuICAgIGVybExpc3QgPSBjcmVhdGVFcmxMaXN0KF9wYXJzZSh0b2tlbiwgdG9rZW5zKSwgZXJsTGlzdCk7XG4gIH1cbiAgcmV0dXJuIHJldmVyc2UoZXJsTGlzdCk7XG59O1xuXG5jb25zdCBzdGFydHNXaXRoID0gZnVuY3Rpb24oY2hhcikge1xuICByZXR1cm4gZnVuY3Rpb24odG9rZW4pIHtcbiAgICByZXR1cm4gdG9rZW5bMF0gPT09IGNoYXI7XG4gIH07XG59O1xuXG5jb25zdCBzdHJpcFVuZGVyc2NvcmVzID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuLnJlcGxhY2UoL18vZywgJycpO1xufTtcblxuY29uc3QgZ2x5cGhJbmRleCA9IHt9O1xuXG5nbHlwaEluZGV4W2RlcmVmR2x5cGhdICAgICAgICAgPSBkZXJlZjtcbmdseXBoSW5kZXhbaWdub3JlQmFuZ0dseXBoXSAgICA9IGlnbm9yZUJhbmc7XG5nbHlwaEluZGV4W3F1YXNpcXVvdGVHbHlwaF0gICAgPSBxdWFzaXF1b3RlO1xuZ2x5cGhJbmRleFtxdW90ZUdseXBoXSAgICAgICAgID0gcXVvdGU7XG5nbHlwaEluZGV4W3NwbGljZVVucXVvdGVHbHlwaF0gPSBzcGxpY2VVbnF1b3RlO1xuZ2x5cGhJbmRleFt1bnF1b3RlR2x5cGhdICAgICAgID0gdW5xdW90ZTtcblxuY29uc3QgYmluYXJ5R2x5cGhJbmRleCA9IHt9O1xuXG5iaW5hcnlHbHlwaEluZGV4W2lnbm9yZUlmVHJ1ZUdseXBoXSAgICAgPSBpZ25vcmVJZlRydWU7XG5iaW5hcnlHbHlwaEluZGV4W2lnbm9yZVVubGVzc1RydWVHbHlwaF0gPSBpZ25vcmVVbmxlc3NUcnVlO1xuXG5jb25zdCBpc1N0cmluZyA9IHN0YXJ0c1dpdGgoJ1wiJyk7XG5cbmNvbnN0IGlzSWRlbnRpZmllciA9IHN0YXJ0c1dpdGgoJzonKTtcblxuZXhwb3J0IHsgcGFyc2UgfTtcbiIsImltcG9ydCB7IGNvbW1lbnRTaWduYWwgfSBmcm9tICcuL2NvbW1lbnRTaWduYWwnO1xuaW1wb3J0IHsgZXh0cmFjdEpzVmFsdWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGluZGV4RW5kIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaW5kZXhTdGFydCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGlzRXJsQXRvbSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsQ29yZVB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxJZGVudGlmaWVyIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybElnbm9yZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxLZXl3b3JkIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybExpc3QgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTWFjcm8gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBsaXN0RW5kIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbGlzdFN0YXJ0IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5cbmNvbnN0IF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5jb25zdCBhZGpvaW5FcmxWYWx1ZSA9IGZ1bmN0aW9uKHNob3VsZEJlUmVhZGFibGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG1lbW8sIGVybFZhbHVlKSB7XG4gICAgY29uc3Qgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZShlcmxWYWx1ZSwgc2hvdWxkQmVSZWFkYWJsZSk7XG4gICAgaWYgKG1lbW8ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gc2VyaWFsaXplZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiXCIgKyBtZW1vICsgXCIgXCIgKyBzZXJpYWxpemVkO1xuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IHNlcmlhbGl6ZSA9IGZ1bmN0aW9uKGVybEV4cHIsIHNob3VsZEJlUmVhZGFibGUpIHtcbiAgaWYgKGVybEV4cHIgPT09IGNvbW1lbnRTaWduYWwpIHtcbiAgICByZXR1cm4gY29tbWVudFNpZ25hbDtcbiAgfVxuICBjb25zdCBfc2VyaWFsaXplID0gKGZ1bmN0aW9uKCkge1xuICAgIGlmIChpc0VybExpc3QoZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBzZXJpYWxpemVMaXN0O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxJZ25vcmUoZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gaWdub3JlTGFiZWw7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxJbmRleChlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUluZGV4O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxLZXl3b3JkKGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGtleXdvcmRMYWJlbDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc0VybENvcmVFZmZlY3RmdWxGdW5jdGlvbihlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBjb3JlRWZmZWN0ZnVsRnVuY3Rpb25MYWJlbDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc0VybENvcmVQdXJlRnVuY3Rpb24oZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gY29yZVB1cmVGdW5jdGlvbkxhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsVXNlclB1cmVGdW5jdGlvbihlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB1c2VyUHVyZUZ1bmN0aW9uTGFiZWw7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxNYWNybyhlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBtYWNyb0xhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsTmlsKGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5pbExhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsSWRlbnRpZmllcihlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUlkZW50aWZpZXI7XG4gICAgfSBlbHNlIGlmIChpc0VybFN0cmluZyhlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZVN0cmluZztcbiAgICB9IGVsc2UgaWYgKGlzRXJsQXRvbShlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUF0b207XG4gICAgfSBlbHNlIGlmIChlcmxFeHByLmpzVmFsdWUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGV4dHJhY3RKc1ZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGVybFZhbHVlO1xuICAgICAgfTtcbiAgICB9XG4gIH0pKCk7XG4gIHJldHVybiBfc2VyaWFsaXplKGVybEV4cHIsIHNob3VsZEJlUmVhZGFibGUpO1xufTtcblxuY29uc3Qgc2VyaWFsaXplQXRvbSA9IGZ1bmN0aW9uKGVybEF0b20sIHNob3VsZEJlUmVhZGFibGUpIHtcbiAgcmV0dXJuIFwiKGF0b20gXCIgKyAoc2VyaWFsaXplKGVybEF0b20uZXJsVmFsdWUsIHNob3VsZEJlUmVhZGFibGUpKSArIFwiKVwiO1xufTtcblxuY29uc3Qgc2VyaWFsaXplSWRlbnRpZmllciA9IGZ1bmN0aW9uKGVybFN0cmluZywgc2hvdWxkQmVSZWFkYWJsZSkge1xuICByZXR1cm4gZXh0cmFjdEpzVmFsdWUoZXJsU3RyaW5nKTtcbn07XG5cbmNvbnN0IHNlcmlhbGl6ZUluZGV4ID0gZnVuY3Rpb24oZXJsSW5kZXgsIHNob3VsZEJlUmVhZGFibGUpIHtcbiAgY29uc3QganNJbmRleCA9IGVybEluZGV4LmpzVmFsdWU7XG4gIGxldCBtZW1vID0gJyc7XG4gIGZvciAobGV0IGtleSBpbiBqc0luZGV4KSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChqc0luZGV4LCBrZXkpKSBjb250aW51ZTtcbiAgICBjb25zdCBlcmxWYWx1ZSA9IGpzSW5kZXhba2V5XTtcbiAgICBpZiAobWVtbyA9PT0gJycpIHtcbiAgICAgIG1lbW8gPSBcIlwiXG4gICAgICAgICsga2V5XG4gICAgICAgICsgXCIgXCJcbiAgICAgICAgKyAoc2VyaWFsaXplKGVybFZhbHVlLCBzaG91bGRCZVJlYWRhYmxlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbW8gPSBcIlwiXG4gICAgICAgICsgbWVtb1xuICAgICAgICArIFwiLCBcIlxuICAgICAgICArIGtleVxuICAgICAgICArIFwiIFwiXG4gICAgICAgICsgKHNlcmlhbGl6ZShlcmxWYWx1ZSwgc2hvdWxkQmVSZWFkYWJsZSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5kZXhTdGFydCArIG1lbW8gKyBpbmRleEVuZDtcbn07XG5cbmNvbnN0IHNlcmlhbGl6ZUxpc3QgPSBmdW5jdGlvbihlcmxMaXN0LCBzaG91bGRCZVJlYWRhYmxlKSB7XG4gIGNvbnN0IHNlcmlhbGl6ZWRMaXN0ID0gcmVkdWNlKFxuICAgIFwiXCIsXG4gICAgYWRqb2luRXJsVmFsdWUoc2hvdWxkQmVSZWFkYWJsZSksXG4gICAgZXJsTGlzdCk7XG4gIHJldHVybiBsaXN0U3RhcnQgKyBzZXJpYWxpemVkTGlzdCArIGxpc3RFbmQ7XG59O1xuXG5jb25zdCBzZXJpYWxpemVTdHJpbmcgPSBmdW5jdGlvbihlcmxTdHJpbmcsIHNob3VsZEJlUmVhZGFibGUpIHtcbiAgY29uc3QganNTdHJpbmcgPSBzdHJpcFF1b3RlcyhleHRyYWN0SnNWYWx1ZShlcmxTdHJpbmcpKTtcbiAgaWYgKCFzaG91bGRCZVJlYWRhYmxlKSB7XG4gICAgcmV0dXJuIGpzU3RyaW5nO1xuICB9XG4gIHJldHVybiBqc1N0cmluZ1xuICAgIC5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpXG4gICAgLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuICAgIC5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyk7XG59O1xuXG5jb25zdCBzdHJpcFF1b3RlcyA9IGZ1bmN0aW9uKGpzU3RyaW5nKSB7XG4gIHJldHVybiBqc1N0cmluZy5zbGljZSgxLCAtMSk7XG59O1xuXG5jb25zdCBjb3JlRWZmZWN0ZnVsRnVuY3Rpb25MYWJlbCA9ICc8ZWZmZWN0ZnVsIGNvcmUgZnVuY3Rpb24+JztcbmNvbnN0IGNvcmVQdXJlRnVuY3Rpb25MYWJlbCAgICAgID0gJzxjb3JlIGZ1bmN0aW9uPic7XG5jb25zdCBpZ25vcmVMYWJlbCAgICAgICAgICAgICAgICA9ICc8aWdub3JlPic7XG5jb25zdCBrZXl3b3JkTGFiZWwgICAgICAgICAgICAgICA9ICc8a2V5d29yZD4nO1xuY29uc3QgbWFjcm9MYWJlbCAgICAgICAgICAgICAgICAgPSAnPG1hY3JvPic7XG5jb25zdCBuaWxMYWJlbCAgICAgICAgICAgICAgICAgICA9ICduaWwnO1xuY29uc3QgdXNlclB1cmVGdW5jdGlvbkxhYmVsICAgICAgPSAnPGZ1bmN0aW9uPic7XG5cbmV4cG9ydCB7IHNlcmlhbGl6ZSB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIihkb1xcbiAgKGRlZiEgZml4KiAoXFxuICAgIGZuKiAoZikgKFxcbiAgICAgIChmbiogKHgpIChmIChmbiogKCYgeXMpIChhcHBseSAoeCB4KSB5cykpKSlcXG4gICAgICAoZm4qICh4KSAoZiAoZm4qICgmIHlzKSAoYXBwbHkgKHggeCkgeXMpKSkpKSkpXFxuXFxuICAoZGVmISBtZW1maXgqIChcXG4gICAgZm4qIChmKSAoXFxuICAgICAgbGV0KiAoY2FjaGUge30pIChcXG4gICAgICAgIChmbiogKHggY2FjaGUpIChcXG4gICAgICAgICAgZlxcbiAgICAgICAgICAgIChmbiogKHopIChcXG4gICAgICAgICAgICAgIGlmIChjb250YWlucz8gY2FjaGUgeilcXG4gICAgICAgICAgICAgICAgKGdldCBjYWNoZSB6KVxcbiAgICAgICAgICAgICAgICAobGV0KiAocmVzdWx0ICgoZm4qICh5KSAoKHggeCBjYWNoZSkgeSkpIHopKSAoXFxuICAgICAgICAgICAgICAgICAgZG9cXG4gICAgICAgICAgICAgICAgICAgIChzZXQhIGNhY2hlIHogcmVzdWx0KVxcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0KSkpKVxcbiAgICAgICAgICAgIGNhY2hlKSlcXG4gICAgICAgIChmbiogKHggY2FjaGUpIChcXG4gICAgICAgICAgZlxcbiAgICAgICAgICAgIChmbiogKHopIChcXG4gICAgICAgICAgICAgIGlmIChjb250YWlucz8gY2FjaGUgeilcXG4gICAgICAgICAgICAgICAgKGdldCBjYWNoZSB6KVxcbiAgICAgICAgICAgICAgICAobGV0KiAocmVzdWx0ICgoZm4qICh5KSAoKHggeCBjYWNoZSkgeSkpIHopKSAoXFxuICAgICAgICAgICAgICAgICAgZG9cXG4gICAgICAgICAgICAgICAgICAgIChzZXQhIGNhY2hlIHogcmVzdWx0KVxcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0KSkpKVxcbiAgICAgICAgICAgIGNhY2hlKSlcXG4gICAgICAgIGNhY2hlKSkpKVxcblxcbiAgKGRlZiEgXzAgY2FyKVxcblxcbiAgKGRlZiEgXzEgKGZuKiAoeHMpIChudGggMSB4cykpKVxcblxcbiAgKGRlZiEgXzIgKGZuKiAoeHMpIChudGggMiB4cykpKVxcblxcbiAgKGRlZiEgc3dhcCEgKFxcbiAgICBtYWNybyogKGF0b20gJiB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBhdG9tXFxuICAgICAgICBgKGxldCogKC1hdG9tLSB+YXRvbSkgKFxcbiAgICAgICAgICBkb1xcbiAgICAgICAgICAgIChyZXNldCEgLWF0b20tICh+KGNhciB4cykgKGRlcmVmIC1hdG9tLSkgfkAoY2RyIHhzKSkpXFxuICAgICAgICAgICAgKGRlcmVmIC1hdG9tLSkpKSkpKVxcblxcbiAgKGRlZiEgKmdlbnN5bS1jb3VudGVyKiAoYXRvbSAwKSlcXG5cXG4gIChkZWYhIGdlbnN5bSAoXFxuICAgICAgZm4qICgpIChzeW1ib2wgKFxcbiAgICAgICAgc3RyaW5nXFxuICAgICAgICAgIFxcXCJHX19cXFwiXFxuICAgICAgICAgIChzd2FwISAqZ2Vuc3ltLWNvdW50ZXIqIChmbiogKG4pICgrIG4gMSkpKSkpKSlcXG5cXG4gIChkZWYhIG9yIChcXG4gICAgbWFjcm8qICgmIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIGZhbHNlXFxuICAgICAgICAobGV0KiAoLXF1ZXJ5LSAoZ2Vuc3ltKSlcXG4gICAgICAgICAgYChsZXQqICh+LXF1ZXJ5LSB+KGNhciB4cykpIChcXG4gICAgICAgICAgICBpZiB+LXF1ZXJ5LVxcbiAgICAgICAgICAgICAgfi1xdWVyeS1cXG4gICAgICAgICAgICAgIChvciB+QChjZHIgeHMpKSkpKSkpKVxcblxcbiAgKGRlZiEgYW5kIChcXG4gICAgbWFjcm8qICgmIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIHRydWVcXG4gICAgICAgIChsZXQqICgtcXVlcnktIChnZW5zeW0pKVxcbiAgICAgICAgICBgKGxldCogKH4tcXVlcnktIH4oY2FyIHhzKSkgKFxcbiAgICAgICAgICAgIGlmIH4tcXVlcnktXFxuICAgICAgICAgICAgICAoYW5kIH5AKGNkciB4cykpXFxuICAgICAgICAgICAgICBmYWxzZSkpKSkpKVxcblxcbiAgKGRlZiEgY29uZCAoXFxuICAgIG1hY3JvKiAoJiB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBuaWxcXG4gICAgICAgIChpZiAoZW1wdHk/IChjZHIgeHMpKVxcbiAgICAgICAgICAodGhyb3cgXFxcImBjb25kYCByZXF1aXJlcyBhbiBldmVuIG51bWJlciBvZiBmb3Jtcy5cXFwiKVxcbiAgICAgICAgICAobGV0KiAoLXF1ZXJ5LSAoZ2Vuc3ltKSlcXG4gICAgICAgICAgICBgKGxldCogKH4tcXVlcnktIH4oY2FyIHhzKSkgKFxcbiAgICAgICAgICAgICAgaWYgfi1xdWVyeS1cXG4gICAgICAgICAgICAgICAgfihfMSB4cylcXG4gICAgICAgICAgICAgICAgKGNvbmQgfkAoY2RyIChjZHIgeHMpKSkpKSkpKSkpXFxuXFxuICAoZGVmISBsb29wIChcXG4gICAgbWFjcm8qIChmb3JtMCBmb3JtMSlcXG4gICAgICBgKGxldCogKGxvb3AgKG1lbWZpeCogKGZuKiAobG9vcCkgKGZuKiAofihfMCBmb3JtMCkpIH5mb3JtMSkpKSkgKFxcbiAgICAgICAgbG9vcCB+KF8xIGZvcm0wKSkpKSlcXG5cXG4gIChkZWYhIC0+IChcXG4gICAgbWFjcm8qICgmIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIG5pbFxcbiAgICAgICAgKGxldCogKHggKGNhciB4cyksIHhzIChjZHIgeHMpKSAoXFxuICAgICAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICAgICAgeFxcbiAgICAgICAgICAgIChsZXQqIChmb3JtIChjYXIgeHMpLCBmb3JtcyAoY2RyIHhzKSkgKFxcbiAgICAgICAgICAgICAgaWYgKGVtcHR5PyBmb3JtcylcXG4gICAgICAgICAgICAgICAgKGlmIChsaXN0PyBmb3JtKVxcbiAgICAgICAgICAgICAgICAgIChpZiAoPSAoc3ltYm9sIFxcXCJmbipcXFwiKSAoY2FyIGZvcm0pKVxcbiAgICAgICAgICAgICAgICAgICAgYCh+Zm9ybSB+eClcXG4gICAgICAgICAgICAgICAgICAgIGAofihjYXIgZm9ybSkgfnggfkAoY2RyIGZvcm0pKSlcXG4gICAgICAgICAgICAgICAgICAobGlzdCBmb3JtIHgpKVxcbiAgICAgICAgICAgICAgICBgKC0+ICgtPiB+eCB+Zm9ybSkgfkBmb3JtcykpKSkpKSkpXFxuXFxuICAoZGVmISAtPj4gKFxcbiAgICBtYWNybyogKCYgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgbmlsXFxuICAgICAgICAobGV0KiAoeCAoY2FyIHhzKSwgeHMgKGNkciB4cykpIChcXG4gICAgICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgICAgICB4XFxuICAgICAgICAgICAgKGxldCogKGZvcm0gKGNhciB4cyksIGZvcm1zIChjZHIgeHMpKSAoXFxuICAgICAgICAgICAgICBpZiAoZW1wdHk/IGZvcm1zKVxcbiAgICAgICAgICAgICAgICAoaWYgKGxpc3Q/IGZvcm0pXFxuICAgICAgICAgICAgICAgICAgKGlmICg9IChzeW1ib2wgXFxcImZuKlxcXCIpIChjYXIgZm9ybSkpXFxuICAgICAgICAgICAgICAgICAgICBgKH5mb3JtIH54KVxcbiAgICAgICAgICAgICAgICAgICAgYCh+QGZvcm0gfngpKVxcbiAgICAgICAgICAgICAgICAgIChsaXN0IGZvcm0geCkpXFxuICAgICAgICAgICAgICAgIGAoLT4+ICgtPj4gfnggfmZvcm0pIH5AZm9ybXMpKSkpKSkpKVxcblxcbiAgKGRlZiEgLT4qIChtYWNybyogKCYgeHMpIChcXG4gICAgbGV0KiAoeCAoZ2Vuc3ltKSlcXG4gICAgICBgKGZuKiAofngpICgtPiB+eCB+QHhzKSkpKSlcXG5cXG4gIChkZWYhIC0+PiogKG1hY3JvKiAoJiB4cykgKFxcbiAgICBsZXQqICh4IChnZW5zeW0pKVxcbiAgICAgIGAoZm4qICh+eCkgKC0+PiB+eCB+QHhzKSkpKSlcXG5cXG4gIChkZWYhIG5vdCAoZm4qICh4KSAoaWYgeCBmYWxzZSB0cnVlKSkpXFxuXFxuICAoZGVmISBpZGVudGl0eSAoZm4qICh4KSB4KSlcXG5cXG4gIChkZWYhIGNvbnN0YW50LWZuIChmbiogKHgpIChmbiogKHkpIHgpKSlcXG5cXG4gIChkZWYhIGNhbGwtb24gKGZuKiAoJiB4cykgKGZuKiAoZm4pIChhcHBseSBmbiB4cykpKSlcXG5cXG4gIChkZWYhIHN0ZXAtaW50by1saXN0IChcXG4gICAgZm4qICh4cyBmbjAgZm4xKSAoXFxuICAgICAgbGV0KiAoeCAoY2FyIHhzKSwgLXhzLSAoY2RyIHhzKSkgKFxcbiAgICAgICAgaWYgKGVtcHR5PyAteHMtKVxcbiAgICAgICAgICAoZm4xIHgpXFxuICAgICAgICAgIChmbjAgeCAteHMtKSkpKSlcXG5cXG4gIChkZWYhIGFwcGx5LW9uIChcXG4gICAgZm4qICgmIHhzKSAoXFxuICAgICAgc3RlcC1pbnRvLWxpc3RcXG4gICAgICAgIHhzXFxuICAgICAgICAoZm4qIChhcmd1bWVudHMgLXhzLSkgKGFwcGx5IChjYXIgLXhzLSkgYXJndW1lbnRzKSlcXG4gICAgICAgIChmbiogKGFyZ3VtZW50cykgKGZuKiAoZikgKGFwcGx5IGYgYXJndW1lbnRzKSkpKSkpXFxuXFxuICAoZGVmISByZWR1Y2UgKFxcbiAgICBmbiogKGYgc2VlZCB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBzZWVkXFxuICAgICAgICAocmVkdWNlIGYgKGYgc2VlZCAoY2FyIHhzKSkgKGNkciB4cykpKSkpXFxuXFxuICAoZGVmISBmaWx0ZXIgKFxcbiAgICBmbiogKHByZWRpY2F0ZSB4cykgKFxcbiAgICAgIHJldmVyc2UgKFxcbiAgICAgICAgcmVkdWNlXFxuICAgICAgICAgIChmbiogKG1lbW8geCkgKGlmIChwcmVkaWNhdGUgeCkgKGNvbnMgeCBtZW1vKSBtZW1vKSlcXG4gICAgICAgICAgJygpXFxuICAgICAgICAgIHhzKSkpKVxcblxcbiAgKGRlZiEgbWFwIChcXG4gICAgZm4qIChmIHhzKSAoXFxuICAgICAgcmV2ZXJzZSAoXFxuICAgICAgICByZWR1Y2VcXG4gICAgICAgICAgKGZuKiAobWVtbyB4KSAoY29ucyAoZiB4KSBtZW1vKSlcXG4gICAgICAgICAgJygpXFxuICAgICAgICAgIHhzKSkpKVxcblxcbiAgKGRlZiEgZXZlcnk/IChcXG4gICAgZm4qIChwcmVkIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIHRydWVcXG4gICAgICAgIChpZiAocHJlZCAoY2FyIHhzKSkgKGV2ZXJ5PyBwcmVkIChjZHIgeHMpKSBmYWxzZSkpKSlcXG5cXG4gIChkZWYhIHNvbWU/IChcXG4gICAgZm4qIChwcmVkIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIGZhbHNlXFxuICAgICAgICAoaWYgKHByZWQgKGNhciB4cykpIHRydWUgKHNvbWU/IHByZWQgKGNkciB4cykpKSkpKVxcblxcbiAgKGRlZiEgbGV0bWVtcmVjKiAoXFxuICAgIG1hY3JvKiAoYWxpYXMgZXhwcilcXG4gICAgICBgKGxldCogKFxcbiAgICAgICAgfihjYXIgYWxpYXMpXFxuICAgICAgICAobWVtZml4KiAoZm4qICh+KGNhciBhbGlhcykpIH4oXzEgYWxpYXMpKSkpXFxuICAgICAgICAgIH5leHByKSkpXFxuXFxuICAoZGVmISBza2lwIChcXG4gICAgZm4qIChuYnIgeHMpIChcXG4gICAgICBsZXRyZWMqIChcXG4gICAgICAgIC1za2lwLVxcbiAgICAgICAgKGZuKiAoeXMpIChcXG4gICAgICAgICAgbGV0KiAobmJyIChjYXIgeXMpLCB4cyAoXzEgeXMpKSAoXFxuICAgICAgICAgICAgY29uZFxcbiAgICAgICAgICAgICAgKD0gMCBuYnIpIHhzXFxuICAgICAgICAgICAgICAoPSAxIG5icikgKGNkciB4cylcXG4gICAgICAgICAgICAgIFxcXCJkZWZhdWx0XFxcIiAoLXNraXAtIChsaXN0IChkZWNyIG5icikgKGNkciB4cykpKSkpKSkgKFxcbiAgICAgICAgICAtc2tpcC0gKGxpc3QgbmJyIHhzKSkpKSlcXG5cXG4gIChkZWYhIGludm9rYWJsZT8gKGZuKiAoeCkgKG9yIChmdW5jdGlvbj8geCkgKG1hY3JvPyB4KSkpKVxcblxcbiAgKGRlZiEgLiAoXFxuICAgIG1hY3JvKiAoeCBrZXkgJiB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBgKGdldCB+eCB+a2V5KVxcbiAgICAgICAgYCgoZ2V0IH54IH5rZXkpIH5AeHMpKSkpXFxuXFxuICAoZGVmISAuLiAoXFxuICAgIGZuKiAobG8gaGkpIChcXG4gICAgICBsZXRyZWMqIChcXG4gICAgICAgIC0uLi1cXG4gICAgICAgIChmbiogKHhzKSAoXFxuICAgICAgICAgIGxldCogKGxvIChfMCB4cyksIGhpIChfMSB4cyksIC1saXN0LSAoXzIgeHMpKSAoXFxuICAgICAgICAgICAgaWYgKD0gbG8gaGkpXFxuICAgICAgICAgICAgICAoY29ucyBoaSAtbGlzdC0pXFxuICAgICAgICAgICAgICAoLS4uLSAobGlzdCBsbyAoZGVjciBoaSkgKGNvbnMgaGkgLWxpc3QtKSkpKSkpKSAoXFxuICAgICAgICAgIC0uLi0gKGxpc3QgbG8gaGkgJygpKSkpKSlcXG5cXG4gIChkZWYhIGRlZnJlYyEgKFxcbiAgICBtYWNybyogKGZuLW5hbWUgZm4tYm9keSlcXG4gICAgICBgKGRlZiEgfmZuLW5hbWUgKGxldHJlYyogKH5mbi1uYW1lIH5mbi1ib2R5KSB+Zm4tbmFtZSkpKSlcXG5cXG4gIChkZWYhIGZvciogKFxcbiAgICBtYWNybyogKGxvb3AtcGFyYW1ldGVycyBib2R5KVxcbiAgICAgIGAobG9vcFxcbiAgICAgICAgIH4oXzAgbG9vcC1wYXJhbWV0ZXJzKVxcbiAgICAgICAgIChpZiB+KF8xIGxvb3AtcGFyYW1ldGVycylcXG4gICAgICAgICAgIChkbyB+Ym9keSAobG9vcCB+KF8yIGxvb3AtcGFyYW1ldGVycykpKVxcbiAgICAgICAgICAgbmlsKSkpKVxcblxcbiAgKGRlZiEgZm9yLWVhY2ggKFxcbiAgICBmbiogKGYgeHMpIChcXG4gICAgICByZWR1Y2UgKGZuKiAobWVtbyB4KSAoZG8gKGYgeCkgbWVtbykpIG5pbCB4cykpKVxcblxcbiAgKGRlZiEgbi10aW1lcyAoXFxuICAgIGZuKiAobiBmKSAoXFxuICAgICAgbG9vcFxcbiAgICAgICAgKGkgMClcXG4gICAgICAgIChpZiAoPSBpIG4pXFxuICAgICAgICAgIG5pbFxcbiAgICAgICAgICAoZG8gKGYgaSkgKGxvb3AgKCsgaSAxKSkpKSkpKVxcblxcbiAgKGRlZiEgdGFwIChmbiogKGYgeCkgKGRvIChmIHgpIHgpKSlcXG5cXG4gIChkZWYhIHdpdGgtc2lkZS1lZmZlY3QgKGZuKiAodGh1bmsgeCkgKGRvICh0aHVuaykgeCkpKVxcblxcbiAgKGRlZiEgdGh1bmsgKG1hY3JvKiAoZm9ybSkgYChmbiogKCkgfmZvcm0pKSlcXG5cXG4gIChkZWYhIGNhbGwgKG1hY3JvKiAoZiAmIHhzKSBgKH5mIH5AeHMpKSlcXG5cXG4gIChkZWYhIGFwcGx5IChtYWNybyogKGYgeHMpIGAoZXZhbCAoY29ucyB+ZiB+eHMpKSkpXFxuXFxuICAoZGVmISBldmFsLXN0cmluZyAoZm4qIChlcmxTdHJpbmcpIChldmFsIChwYXJzZSBlcmxTdHJpbmcpKSkpXFxuXFxuICAoZGVmISBpbmNyICgtPiogKCsgMSkpKVxcblxcbiAgKGRlZiEgZGVjciAoLT4qICgtIDEpKSlcXG5cXG4gIChkZWYhIHplcm8/ICgtPiogKD0gMCkpKVxcblxcbiAgKGRlZiEgZGVmaW5lZD8gKGZuKiAoaWQpIChjb250YWlucz8gKC1nZXQtY3VycmVudC1lbnYtKSBpZCkpKVxcblxcbiAgKGRlZiEgXFxcXCAobWFjcm8qICgmIHhzKSAoXFxuICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgbmlsXFxuICAgICAgKGxldCogKHggKGNhciB4cyksIHhzIChjZHIgeHMpKSAoXFxuICAgICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgICB4XFxuICAgICAgICAgIGAoZm4qICh+eCkgKFxcXFwgfkB4cykpKSkpKSlcXG4pXFxuXCIiLCJpbXBvcnQgeyBjb21tZW50U2lnbmFsIH0gZnJvbSAnLi9jb21tZW50U2lnbmFsJztcblxuY29uc3QgY3JlYXRlVG9rZW5SZWdleCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gL1tcXHMsXSoofkB8XFwjXFwrfFxcI1xcLXxcXCNcXCF8W1xcW1xcXSgpe30nYH5AXl18XCIoPzpcXFxcLnxbXlxcXFxcIl0pKlwifDsuKnxbXlxcc1xcW1xcXSgpe30nXCJgLDtdKikvZztcbn07XG5cbmNvbnN0IGlzQ29tbWVudCA9IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIHJldHVybiBtYXRjaFswXSA9PT0gJzsnO1xufTtcblxuY29uc3QgaXNNZWFuaW5nZnVsID0gZnVuY3Rpb24obWF0Y2gpIHtcbiAgcmV0dXJuIG1hdGNoICE9PSAnJztcbn07XG5cbmNvbnN0IHRva2VuaXplID0gZnVuY3Rpb24oc291cmNlQ29kZSkge1xuICBsZXQgbWF0Y2g7XG4gIGNvbnN0IHRva2VuUmVnZXggPSBjcmVhdGVUb2tlblJlZ2V4KCk7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICB3aGlsZSAoaXNNZWFuaW5nZnVsKG1hdGNoID0gdG9rZW5SZWdleC5leGVjKHNvdXJjZUNvZGUpWzFdKSkge1xuICAgIGlmIChpc0NvbW1lbnQobWF0Y2gpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2gobWF0Y2gpO1xuICB9XG4gIGlmIChyZXN1bHQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGNvbW1lbnRTaWduYWw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcblxuZXhwb3J0IHsgdG9rZW5pemUgfTtcbiIsImltcG9ydCB7IHBhcnNlIH0gZnJvbSAnLi9wYXJzZSc7XG5pbXBvcnQgeyB0b2tlbml6ZSB9IGZyb20gJy4vdG9rZW5pemUnO1xuXG5leHBvcnQgY29uc3QgdG9rZW5pemVBbmRQYXJzZSA9IGZ1bmN0aW9uKHNvdXJjZUNvZGUpIHtcbiAgcmV0dXJuIHBhcnNlKHRva2VuaXplKHNvdXJjZUNvZGUpKTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFcmxMaXN0IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBlcmxBdG9tVHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZXJsVHlwZXMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgY3JlYXRlRXJsQXRvbSA9IGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZXJsVmFsdWU6IGVybFZhbHVlLFxuICAgIHR5cGU6IGVybEF0b21UeXBlXG4gIH07XG59O1xuXG5jb25zdCBjcmVhdGVFcmxCb29sZWFuID0gZnVuY3Rpb24oanNCb29sZWFuKSB7XG4gIGlmIChqc0Jvb2xlYW4pIHtcbiAgICByZXR1cm4gZXJsVHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsRmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUVybElnbm9yZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZXJsSWdub3JlO1xufTtcblxuY29uc3QgY3JlYXRlRXJsTmlsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBlcmxOaWw7XG59O1xuXG5jb25zdCBjcmVhdGVFcmxWYWx1ZSA9IGZ1bmN0aW9uKGpzVmFsdWUsIGVybFR5cGUpIHtcbiAgcmV0dXJuIHtcbiAgICBqc1ZhbHVlOiBqc1ZhbHVlLFxuICAgIHR5cGU6IGVybFR5cGVcbiAgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZUZhY3RvcnlBbmRQcmVkaWNhdGUgPSBmdW5jdGlvbihlcmxUeXBlKSB7XG4gIGNvbnN0IGZhY3RvcnkgPSBmdW5jdGlvbihqc1ZhbHVlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVybFZhbHVlKGpzVmFsdWUsIGVybFR5cGUpO1xuICB9O1xuICBjb25zdCBwcmVkaWNhdGUgPSBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgIHJldHVybiBlcmxWYWx1ZS50eXBlID09PSBlcmxUeXBlO1xuICB9O1xuICByZXR1cm4gW2ZhY3RvcnksIHByZWRpY2F0ZV07XG59O1xuXG5jb25zdCBjcmVhdGVQcmVkaWNhdGUgPSBmdW5jdGlvbihjb25zdGFudCkge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IGNvbnN0YW50O1xuICB9O1xufTtcblxuY29uc3QgZXh0cmFjdEpzVmFsdWUgPSBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICByZXR1cm4gZXJsVmFsdWUuanNWYWx1ZTtcbn07XG5cbmNvbnN0IF9lcmxUeXBlcyA9IGVybFR5cGVzLm1hcChjcmVhdGVGYWN0b3J5QW5kUHJlZGljYXRlKTtcblxuY29uc3QgX2NyZWF0ZUVybEJvb2xlYW4gICAgICAgICAgICAgID0gX2VybFR5cGVzWzBdWzBdO1xuY29uc3QgaXNFcmxCb29sZWFuICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzBdWzFdO1xuY29uc3QgY3JlYXRlRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uID0gX2VybFR5cGVzWzFdWzBdO1xuY29uc3QgaXNFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24gICAgID0gX2VybFR5cGVzWzFdWzFdO1xuY29uc3QgY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbiAgICAgID0gX2VybFR5cGVzWzJdWzBdO1xuY29uc3QgaXNFcmxDb3JlUHVyZUZ1bmN0aW9uICAgICAgICAgID0gX2VybFR5cGVzWzJdWzFdO1xuY29uc3QgY3JlYXRlRXJsSWRlbnRpZmllciAgICAgICAgICAgID0gX2VybFR5cGVzWzNdWzBdO1xuY29uc3QgaXNFcmxJZGVudGlmaWVyICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzNdWzFdO1xuY29uc3QgY3JlYXRlRXJsSW5kZXggICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzRdWzBdO1xuY29uc3QgaXNFcmxJbmRleCAgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzRdWzFdO1xuY29uc3QgY3JlYXRlRXJsS2V5d29yZCAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzVdWzBdO1xuY29uc3QgaXNFcmxLZXl3b3JkICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzVdWzFdO1xuY29uc3QgX2NyZWF0ZUVybExpc3QgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzZdWzBdO1xuY29uc3QgaXNFcmxMaXN0ICAgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzZdWzFdO1xuY29uc3QgY3JlYXRlRXJsTWFjcm8gICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzddWzBdO1xuY29uc3QgaXNFcmxNYWNybyAgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzddWzFdO1xuY29uc3QgY3JlYXRlRXJsTnVtYmVyICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzhdWzBdO1xuY29uc3QgaXNFcmxOdW1iZXIgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzhdWzFdO1xuY29uc3QgY3JlYXRlRXJsU3BlY2lhbEZvcm0gICAgICAgICAgID0gX2VybFR5cGVzWzldWzBdO1xuY29uc3QgaXNFcmxTcGVjaWFsRm9ybSAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzldWzFdO1xuY29uc3QgY3JlYXRlRXJsU3RyaW5nICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzEwXVswXTtcbmNvbnN0IGlzRXJsU3RyaW5nICAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1sxMF1bMV07XG5jb25zdCBjcmVhdGVFcmxTeW1ib2wgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTFdWzBdO1xuY29uc3QgaXNFcmxTeW1ib2wgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzExXVsxXTtcbmNvbnN0IF9jcmVhdGVFcmxVbml0ICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1sxMl1bMF07XG5jb25zdCBfaXNFcmxVbml0ICAgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTJdWzFdO1xuY29uc3QgY3JlYXRlRXJsVXNlclB1cmVGdW5jdGlvbiAgICAgID0gX2VybFR5cGVzWzEzXVswXTtcbmNvbnN0IGlzRXJsVXNlclB1cmVGdW5jdGlvbiAgICAgICAgICA9IF9lcmxUeXBlc1sxM11bMV07XG5jb25zdCBfY3JlYXRlRXJsQXRvbSAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTRdWzBdO1xuY29uc3QgaXNFcmxBdG9tICAgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzE0XVsxXTtcblxuY29uc3QgZXJsSWdub3JlID0gX2NyZWF0ZUVybFVuaXQobnVsbCk7XG5cbmNvbnN0IGVybE5pbCA9IF9jcmVhdGVFcmxVbml0KG51bGwpO1xuXG5jb25zdCBlcmxCb29sZWFucyA9IFtmYWxzZSwgdHJ1ZV0ubWFwKF9jcmVhdGVFcmxCb29sZWFuKTtcblxuY29uc3QgZXJsRmFsc2UgPSBlcmxCb29sZWFuc1swXTtcbmNvbnN0IGVybFRydWUgID0gZXJsQm9vbGVhbnNbMV07XG5cbmNvbnN0IHByZWRpY2F0ZXMgPSBbZXJsRmFsc2UsIGVybElnbm9yZSwgZXJsTmlsLCBlcmxUcnVlXS5tYXAoY3JlYXRlUHJlZGljYXRlKTtcblxuY29uc3QgaXNFcmxGYWxzZSAgPSBwcmVkaWNhdGVzWzBdO1xuY29uc3QgaXNFcmxJZ25vcmUgPSBwcmVkaWNhdGVzWzFdO1xuY29uc3QgaXNFcmxOaWwgICAgPSBwcmVkaWNhdGVzWzJdO1xuY29uc3QgaXNFcmxUcnVlICAgPSBwcmVkaWNhdGVzWzNdO1xuXG5leHBvcnQge1xuICBjcmVhdGVFcmxBdG9tLFxuICBjcmVhdGVFcmxCb29sZWFuLFxuICBjcmVhdGVFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24sXG4gIGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24sXG4gIGNyZWF0ZUVybElkZW50aWZpZXIsXG4gIGNyZWF0ZUVybElnbm9yZSxcbiAgY3JlYXRlRXJsSW5kZXgsXG4gIGNyZWF0ZUVybEtleXdvcmQsXG4gIGNyZWF0ZUVybExpc3QsXG4gIGNyZWF0ZUVybE1hY3JvLFxuICBjcmVhdGVFcmxOaWwsXG4gIGNyZWF0ZUVybE51bWJlcixcbiAgY3JlYXRlRXJsU3BlY2lhbEZvcm0sXG4gIGNyZWF0ZUVybFN0cmluZyxcbiAgY3JlYXRlRXJsU3ltYm9sLFxuICBjcmVhdGVFcmxVc2VyUHVyZUZ1bmN0aW9uLFxuICBleHRyYWN0SnNWYWx1ZSxcbiAgaXNFcmxBdG9tLFxuICBpc0VybEJvb2xlYW4sXG4gIGlzRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uLFxuICBpc0VybENvcmVQdXJlRnVuY3Rpb24sXG4gIGVybEZhbHNlLFxuICBpc0VybEZhbHNlLFxuICBpc0VybElkZW50aWZpZXIsXG4gIGVybElnbm9yZSxcbiAgaXNFcmxJZ25vcmUsXG4gIGlzRXJsSW5kZXgsXG4gIGlzRXJsS2V5d29yZCxcbiAgaXNFcmxMaXN0LFxuICBpc0VybE1hY3JvLFxuICBlcmxOaWwsXG4gIGlzRXJsTmlsLFxuICBpc0VybE51bWJlcixcbiAgaXNFcmxTcGVjaWFsRm9ybSxcbiAgaXNFcmxTdHJpbmcsXG4gIGlzRXJsU3ltYm9sLFxuICBlcmxUcnVlLFxuICBpc0VybFRydWUsXG4gIGlzRXJsVXNlclB1cmVGdW5jdGlvblxufTtcbiIsImNvbnN0IGVybEJvb2xlYW5UeXBlICAgICAgICAgICAgICAgPSAnZXJsQm9vbGVhblR5cGUnO1xuY29uc3QgZXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uVHlwZSA9ICdlcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb25UeXBlJztcbmNvbnN0IGVybENvcmVQdXJlRnVuY3Rpb25UeXBlICAgICAgPSAnZXJsQ29yZVB1cmVGdW5jdGlvblR5cGUnO1xuY29uc3QgZXJsSWRlbnRpZmllclR5cGUgICAgICAgICAgICA9ICdlcmxJZGVudGlmaWVyVHlwZSc7XG5jb25zdCBlcmxJbmRleFR5cGUgICAgICAgICAgICAgICAgID0gJ2VybEluZGV4VHlwZSc7XG5jb25zdCBlcmxLZXl3b3JkVHlwZSAgICAgICAgICAgICAgID0gJ2VybEtleXdvcmRUeXBlJztcbmNvbnN0IGVybExpc3RUeXBlICAgICAgICAgICAgICAgICAgPSAnZXJsTGlzdFR5cGUnO1xuY29uc3QgZXJsTWFjcm9UeXBlICAgICAgICAgICAgICAgICA9ICdlcmxNYWNyb1R5cGUnO1xuY29uc3QgZXJsTnVtYmVyVHlwZSAgICAgICAgICAgICAgICA9ICdlcmxOdW1iZXJUeXBlJztcbmNvbnN0IGVybFNwZWNpYWxGb3JtVHlwZSAgICAgICAgICAgPSAnZXJsU3BlY2lhbEZvcm1UeXBlJztcbmNvbnN0IGVybFN0cmluZ1R5cGUgICAgICAgICAgICAgICAgPSAnZXJsU3RyaW5nVHlwZSc7XG5jb25zdCBlcmxTeW1ib2xUeXBlICAgICAgICAgICAgICAgID0gJ2VybFN5bWJvbFR5cGUnO1xuY29uc3QgZXJsVW5pdFR5cGUgICAgICAgICAgICAgICAgICA9ICdlcmxVbml0VHlwZSc7XG5jb25zdCBlcmxVc2VyUHVyZUZ1bmN0aW9uVHlwZSAgICAgID0gJ2VybFVzZXJQdXJlRnVuY3Rpb25UeXBlJztcbmNvbnN0IGVybEF0b21UeXBlICAgICAgICAgICAgICAgICAgPSAnZXJsQXRvbVR5cGUnO1xuXG5jb25zdCBlcmxUeXBlcyA9IFtcbiAgZXJsQm9vbGVhblR5cGUsXG4gIGVybENvcmVFZmZlY3RmdWxGdW5jdGlvblR5cGUsXG4gIGVybENvcmVQdXJlRnVuY3Rpb25UeXBlLFxuICBlcmxJZGVudGlmaWVyVHlwZSxcbiAgZXJsSW5kZXhUeXBlLFxuICBlcmxLZXl3b3JkVHlwZSxcbiAgZXJsTGlzdFR5cGUsXG4gIGVybE1hY3JvVHlwZSxcbiAgZXJsTnVtYmVyVHlwZSxcbiAgZXJsU3BlY2lhbEZvcm1UeXBlLFxuICBlcmxTdHJpbmdUeXBlLFxuICBlcmxTeW1ib2xUeXBlLFxuICBlcmxVbml0VHlwZSxcbiAgZXJsVXNlclB1cmVGdW5jdGlvblR5cGUsXG4gIGVybEF0b21UeXBlXG5dO1xuXG5leHBvcnQge1xuICBlcmxBdG9tVHlwZSxcbiAgZXJsQm9vbGVhblR5cGUsXG4gIGVybENvcmVFZmZlY3RmdWxGdW5jdGlvblR5cGUsXG4gIGVybENvcmVQdXJlRnVuY3Rpb25UeXBlLFxuICBlcmxJZGVudGlmaWVyVHlwZSxcbiAgZXJsSW5kZXhUeXBlLFxuICBlcmxLZXl3b3JkVHlwZSxcbiAgZXJsTGlzdFR5cGUsXG4gIGVybE1hY3JvVHlwZSxcbiAgZXJsTnVtYmVyVHlwZSxcbiAgZXJsU3BlY2lhbEZvcm1UeXBlLFxuICBlcmxTdHJpbmdUeXBlLFxuICBlcmxTeW1ib2xUeXBlLFxuICBlcmxUeXBlcyxcbiAgZXJsVW5pdFR5cGUsXG4gIGVybFVzZXJQdXJlRnVuY3Rpb25UeXBlXG59O1xuIiwiZnVuY3Rpb24gZGlmZkFycmF5KHZhbHVlMSwgdmFsdWUwLCBpbmRleCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUwKSkge1xuICAgIHJldHVybiB7IHRyZWU6IGluZGV4LCBjb21tYW5kczogW1sncmVwbGFjZScsIHZhbHVlMV1dLCBpbmRleDogaW5kZXggKyAxIH07XG4gIH1cblxuICBsZXQgY291bnQgPSAwO1xuICBjb25zdCBsZW5ndGgxID0gdmFsdWUxLmxlbmd0aDtcbiAgY29uc3QgbGVuZ3RoMCA9IHZhbHVlMC5sZW5ndGg7XG4gIGNvbnN0IG1pbkxlbmd0aCA9IE1hdGgubWluKGxlbmd0aDEsIGxlbmd0aDApO1xuXG4gIGlmIChtaW5MZW5ndGggPiAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtaW5MZW5ndGg7IGorKykge1xuICAgICAgaWYgKHZhbHVlMVtqXSAhPT0gdmFsdWUwW2pdKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvdW50ID09PSBtaW5MZW5ndGgpIHtcbiAgICAgIHJldHVybiB7IHRyZWU6IGluZGV4LCBjb21tYW5kczogW1sncmVwbGFjZScsIHZhbHVlMV1dLCBpbmRleDogaW5kZXggKyAxIH07XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdHJlZSA9IFtdO1xuICBsZXQgY29tbWFuZHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1pbkxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHZhbHVlMVtpXSAhPT0gdmFsdWUwW2ldKSB7XG4gICAgICBjb25zdCBfcGF0Y2ggPSBfZGlmZih2YWx1ZTFbaV0sIHZhbHVlMFtpXSwgaW5kZXgpO1xuICAgICAgaWYgKF9wYXRjaC5jb21tYW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRyZWUucHVzaCh7IGluZGV4OiBpLCB2YWx1ZTogX3BhdGNoLnRyZWUgfSk7XG4gICAgICAgIGNvbW1hbmRzID0gY29tbWFuZHMuY29uY2F0KF9wYXRjaC5jb21tYW5kcyk7XG4gICAgICAgIGluZGV4ID0gaW5kZXggKyBfcGF0Y2guY29tbWFuZHMubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoMTsgaSsrKSB7XG4gICAgdHJlZS5wdXNoKHsgaW5kZXg6IGksIHZhbHVlOiBpbmRleCB9KTtcbiAgICBjb21tYW5kcy5wdXNoKFsnaW5zZXJ0QXRFbmQnLCB2YWx1ZTFbaV1dKTtcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgY29uc3QgcmVtb3ZhbHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDA7IGkrKykge1xuICAgIHJlbW92YWxzLnVuc2hpZnQoeyBpbmRleDogaSwgdmFsdWU6IGluZGV4IH0pO1xuICAgIGNvbW1hbmRzLnB1c2goWydyZW1vdmUnXSk7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIHJldHVybiB7IHRyZWU6IHRyZWUuY29uY2F0KHJlbW92YWxzKSwgY29tbWFuZHM6IGNvbW1hbmRzLCBpbmRleDogaW5kZXggfTtcbn1cblxuZnVuY3Rpb24gZGlmZk9iamVjdCh2YWx1ZTEsIHZhbHVlMCwgaW5kZXgpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZTApKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyZWU6IGluZGV4LFxuICAgICAgY29tbWFuZHM6IFtbJ3JlcGxhY2UnLCB2YWx1ZTFdXSxcbiAgICAgIGluZGV4OiBpbmRleCArIDFcbiAgICB9O1xuICB9XG5cbiAgbGV0IGtleUNvdW50ID0gMDtcbiAgbGV0IGRpZmZDb3VudCA9IDA7XG5cbiAgZm9yIChsZXQga2V5IGluIHZhbHVlMCkge1xuICAgIGlmICghdmFsdWUwLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xuICAgIGtleUNvdW50Kys7XG4gICAgaWYgKCF2YWx1ZTEuaGFzT3duUHJvcGVydHkoa2V5KSB8fCB2YWx1ZTFba2V5XSAhPT0gdmFsdWUwW2tleV0pIHtcbiAgICAgIGRpZmZDb3VudCsrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrZXlDb3VudCA+IDEgJiYga2V5Q291bnQgPT09IGRpZmZDb3VudCkge1xuICAgIHJldHVybiB7IHRyZWU6IGluZGV4LCBjb21tYW5kczogW1sncmVwbGFjZScsIHZhbHVlMV1dLCBpbmRleDogaW5kZXggKyAxIH07XG4gIH1cblxuICBjb25zdCB0cmVlID0gW107XG4gIGxldCBjb21tYW5kcyA9IFtdO1xuXG4gIGZvciAobGV0IGtleSBpbiB2YWx1ZTEpIHtcbiAgICBpZiAoIXZhbHVlMS5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcbiAgICBpZiAodmFsdWUwLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGlmICh2YWx1ZTFba2V5XSAhPT0gdmFsdWUwW2tleV0pIHtcbiAgICAgICAgY29uc3QgX3BhdGNoID0gX2RpZmYodmFsdWUxW2tleV0sIHZhbHVlMFtrZXldLCBpbmRleCk7XG4gICAgICAgIGlmIChfcGF0Y2guY29tbWFuZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRyZWUucHVzaCh7IGluZGV4OiBrZXksIHZhbHVlOiBfcGF0Y2gudHJlZSB9KTtcbiAgICAgICAgICBjb21tYW5kcyA9IGNvbW1hbmRzLmNvbmNhdChfcGF0Y2guY29tbWFuZHMpO1xuICAgICAgICAgIGluZGV4ID0gaW5kZXggKyBfcGF0Y2guY29tbWFuZHMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyZWUucHVzaCh7IGluZGV4OiBrZXksIHZhbHVlOiBpbmRleCB9KTtcbiAgICAgIGNvbW1hbmRzLnB1c2goWydzZXRBdEtleScsIHZhbHVlMVtrZXldXSk7XG4gICAgICBpbmRleCsrO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGtleSBpbiB2YWx1ZTApIHtcbiAgICBpZiAoIXZhbHVlMS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB0cmVlLnB1c2goeyBpbmRleDoga2V5LCB2YWx1ZTogaW5kZXggfSk7XG4gICAgICBjb21tYW5kcy5wdXNoKFsnZGVsZXRlJ10pO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyB0cmVlOiB0cmVlLCBjb21tYW5kczogY29tbWFuZHMsIGluZGV4OiBpbmRleCB9O1xufVxuXG5mdW5jdGlvbiBfZGlmZih2YWx1ZTEsIHZhbHVlMCwgaW5kZXgpIHtcbiAgaWYgKHZhbHVlMSA9PT0gdmFsdWUwKSB7XG4gICAgcmV0dXJuIHsgdHJlZTogW10sIGNvbW1hbmRzOiBbXSwgaW5kZXg6IGluZGV4IH07XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZTEpKSB7XG4gICAgcmV0dXJuIGRpZmZBcnJheSh2YWx1ZTEsIHZhbHVlMCwgaW5kZXgpO1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlMSkpIHtcbiAgICByZXR1cm4gZGlmZk9iamVjdCh2YWx1ZTEsIHZhbHVlMCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHsgdHJlZTogaW5kZXgsIGNvbW1hbmRzOiBbWydyZXBsYWNlJywgdmFsdWUxXV0sIGluZGV4OiBpbmRleCArIDEgfTtcbn1cblxuY29uc3QgZGlmZiA9IGZ1bmN0aW9uKHZhbHVlMSwgdmFsdWUwKSB7XG4gIGNvbnN0IHBhdGNoID0gX2RpZmYodmFsdWUxLCB2YWx1ZTAsIDApO1xuICByZXR1cm4geyB2YWx1ZTogcGF0Y2gudHJlZSwgY29tbWFuZHM6IHBhdGNoLmNvbW1hbmRzIH07XG59O1xuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5leHBvcnQgeyBkaWZmIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZykge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB7IHRhZzogdGFnIH07XG5cbiAgICBpZiAoY29uZmlnICE9IG51bGwpIHsgLy8gaXNPYmplY3RcblxuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZykge1xuICAgICAgICBpZiAoa2V5ID09PSAnaWQnKSB7XG4gICAgICAgICAgZWxlbWVudC5pZCA9IGNvbmZpZy5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT09ICdjbGFzc2VzJykge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NlcyA9IGNvbmZpZy5jbGFzc2VzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUgPSBjb25maWcuc3R5bGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09PSAnYXR0cmlicycpIHtcbiAgICAgICAgICBlbGVtZW50LmF0dHJpYnMgPSBjb25maWcuYXR0cmlicztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIGlzU3RyaW5nKGFyZ3NbMF0pKSB7XG4gICAgICAgIGVsZW1lbnQuY2hpbGRyZW4gPSBhcmdzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5jaGlsZHJlbiA9IFtdLmNvbmNhdC5hcHBseShbXSwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59XG5cbmNvbnN0IHRhZ3MgPSB7XG4gICdBJzogdHJ1ZSxcbiAgJ0JVVFRPTic6IHRydWUsXG4gICdDQU5WQVMnOiB0cnVlLFxuICAnQ09ERSc6IHRydWUsXG4gICdESVYnOiB0cnVlLFxuICAnRk9PVEVSJzogdHJ1ZSxcbiAgJ0ZPUk0nOiB0cnVlLFxuICAnSDEnOiB0cnVlLFxuICAnSDInOiB0cnVlLFxuICAnSDMnOiB0cnVlLFxuICAnSDQnOiB0cnVlLFxuICAnSDUnOiB0cnVlLFxuICAnSDYnOiB0cnVlLFxuICAnSEVBREVSJzogdHJ1ZSxcbiAgJ0lNRyc6IHRydWUsXG4gICdMQUJFTCc6IHRydWUsXG4gICdMSSc6IHRydWUsXG4gICdMSU5LJzogdHJ1ZSxcbiAgJ05BVic6IHRydWUsXG4gICdOT1NDUklQVCc6IHRydWUsXG4gICdPUFRHUk9VUCc6IHRydWUsXG4gICdPUFRJT04nOiB0cnVlLFxuICAnT1VUUFVUJzogdHJ1ZSxcbiAgJ1AnOiB0cnVlLFxuICAnUEFSQU0nOiB0cnVlLFxuICAnUFJFJzogdHJ1ZSxcbiAgJ1NDUklQVCc6IHRydWUsXG4gICdTRUNUSU9OJzogdHJ1ZSxcbiAgJ1NFTEVDVCc6IHRydWUsXG4gICdTT1VSQ0UnOiB0cnVlLFxuICAnU1BBTic6IHRydWUsXG4gICdTVFlMRSc6IHRydWUsXG4gICdURVhUQVJFQSc6IHRydWVcbn07XG5cbmNvbnN0IGVsZW1lbnRGYWN0b3JpZXMgPSB7fTtcblxuZm9yIChsZXQgdGFnTmFtZSBpbiB0YWdzKSB7XG4gIGVsZW1lbnRGYWN0b3JpZXNbdGFnTmFtZV0gPSBjcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xufVxuXG5leHBvcnQgY29uc3QgQSA9IGVsZW1lbnRGYWN0b3JpZXMuQTtcbmV4cG9ydCBjb25zdCBCVVRUT04gPSBlbGVtZW50RmFjdG9yaWVzLkJVVFRPTjtcbmV4cG9ydCBjb25zdCBDQU5WQVMgPSBlbGVtZW50RmFjdG9yaWVzLkNBTlZBUztcbmV4cG9ydCBjb25zdCBDT0RFID0gZWxlbWVudEZhY3Rvcmllcy5DT0RFO1xuZXhwb3J0IGNvbnN0IERJViA9IGVsZW1lbnRGYWN0b3JpZXMuRElWO1xuZXhwb3J0IGNvbnN0IEZPT1RFUiA9IGVsZW1lbnRGYWN0b3JpZXMuRk9PVEVSO1xuZXhwb3J0IGNvbnN0IEZPUk0gPSBlbGVtZW50RmFjdG9yaWVzLkZPUk07XG5leHBvcnQgY29uc3QgSDEgPSBlbGVtZW50RmFjdG9yaWVzLkgxO1xuZXhwb3J0IGNvbnN0IEgyID0gZWxlbWVudEZhY3Rvcmllcy5IMjtcbmV4cG9ydCBjb25zdCBIMyA9IGVsZW1lbnRGYWN0b3JpZXMuSDM7XG5leHBvcnQgY29uc3QgSDQgPSBlbGVtZW50RmFjdG9yaWVzLkg0O1xuZXhwb3J0IGNvbnN0IEg1ID0gZWxlbWVudEZhY3Rvcmllcy5INTtcbmV4cG9ydCBjb25zdCBINiA9IGVsZW1lbnRGYWN0b3JpZXMuSDY7XG5leHBvcnQgY29uc3QgSEVBREVSID0gZWxlbWVudEZhY3Rvcmllcy5IRUFERVI7XG5leHBvcnQgY29uc3QgSU1HID0gZWxlbWVudEZhY3Rvcmllcy5JTUc7XG5leHBvcnQgY29uc3QgTEFCRUwgPSBlbGVtZW50RmFjdG9yaWVzLkxBQkVMO1xuZXhwb3J0IGNvbnN0IExJID0gZWxlbWVudEZhY3Rvcmllcy5MSTtcbmV4cG9ydCBjb25zdCBMSU5LID0gZWxlbWVudEZhY3Rvcmllcy5MSU5LO1xuZXhwb3J0IGNvbnN0IE5BViA9IGVsZW1lbnRGYWN0b3JpZXMuTkFWO1xuZXhwb3J0IGNvbnN0IE5PU0NSSVBUID0gZWxlbWVudEZhY3Rvcmllcy5OT1NDUklQVDtcbmV4cG9ydCBjb25zdCBPUFRHUk9VUCA9IGVsZW1lbnRGYWN0b3JpZXMuT1BUR1JPVVA7XG5leHBvcnQgY29uc3QgT1BUSU9OID0gZWxlbWVudEZhY3Rvcmllcy5PUFRJT047XG5leHBvcnQgY29uc3QgT1VUUFVUID0gZWxlbWVudEZhY3Rvcmllcy5PVVRQVVQ7XG5leHBvcnQgY29uc3QgUCA9IGVsZW1lbnRGYWN0b3JpZXMuUDtcbmV4cG9ydCBjb25zdCBQQVJBTSA9IGVsZW1lbnRGYWN0b3JpZXMuUEFSQU07XG5leHBvcnQgY29uc3QgUFJFID0gZWxlbWVudEZhY3Rvcmllcy5QUkU7XG5leHBvcnQgY29uc3QgU0NSSVBUID0gZWxlbWVudEZhY3Rvcmllcy5TQ1JJUFQ7XG5leHBvcnQgY29uc3QgU0VDVElPTiA9IGVsZW1lbnRGYWN0b3JpZXMuU0VDVElPTjtcbmV4cG9ydCBjb25zdCBTRUxFQ1QgPSBlbGVtZW50RmFjdG9yaWVzLlNFTEVDVDtcbmV4cG9ydCBjb25zdCBTT1VSQ0UgPSBlbGVtZW50RmFjdG9yaWVzLlNPVVJDRTtcbmV4cG9ydCBjb25zdCBTUEFOID0gZWxlbWVudEZhY3Rvcmllcy5TUEFOO1xuZXhwb3J0IGNvbnN0IFNUWUxFID0gZWxlbWVudEZhY3Rvcmllcy5TVFlMRTtcbmV4cG9ydCBjb25zdCBURVhUQVJFQSA9IGVsZW1lbnRGYWN0b3JpZXMuVEVYVEFSRUE7XG4iLCJmdW5jdGlvbiBhdHRhY2hFbGVtZW50KHBhcmVudCwgZWxlbWVudCkge1xuICBpZiAoaXNTdHJpbmcoZWxlbWVudCkpIHtcbiAgICBwYXJlbnQuaW5uZXJUZXh0ID0gZWxlbWVudDsgLy8gP1xuICB9IGVsc2Uge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlRWxlbWVudChwYXJlbnQsIG5ld0VsZW1lbnQsIG9sZEVsZW1lbnQpIHtcbiAgaWYgKGlzU3RyaW5nKG5ld0VsZW1lbnQpKSB7XG4gICAgcGFyZW50LmlubmVyVGV4dCA9IG5ld0VsZW1lbnQ7IC8vID9cbiAgfSBlbHNlIHtcbiAgICBwYXJlbnQucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQsIG9sZEVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQocGFyZW50LCBjb25maWcpIHtcbiAgYXR0YWNoRWxlbWVudChwYXJlbnQsIGNyZWF0ZUVsZW1lbnQoY29uZmlnKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZFN1YnN0aXR1dGVFbGVtZW50KHBhcmVudCwgY29uZmlnLCBvbGRFbGVtZW50SW5kZXgpIHtcbiAgcmVwbGFjZUVsZW1lbnQoXG4gICAgcGFyZW50LFxuICAgIGNyZWF0ZUVsZW1lbnQoY29uZmlnKSxcbiAgICBmaW5kQ2hpbGQocGFyZW50LCB7IG1vZGU6ICdpbmRleCcsIGtleTogb2xkRWxlbWVudEluZGV4IH0pKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kQXR0YWNoRWxlbWVudHMobm9kZSwgZWxlbWVudHMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQobm9kZSwgZWxlbWVudHNbaV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoY29uZmlnKSB7XG4gIGlmIChpc1N0cmluZyhjb25maWcpKSB7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjb25maWcudGFnKTtcbiAgaWYgKGNvbmZpZy5pZCAhPSBudWxsKSB7XG4gICAgbm9kZS5pZCA9IGNvbmZpZy5pZDtcbiAgfVxuICBpZiAoY29uZmlnLmNsYXNzZXMgIT0gbnVsbCkge1xuICAgIGZvciAobGV0IGtsYXNzIGluIGNvbmZpZy5jbGFzc2VzKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5hZGQoa2xhc3MpO1xuICAgIH1cbiAgfVxuICBpZiAoY29uZmlnLmF0dHJpYnMgIT0gbnVsbCkge1xuICAgIGZvciAobGV0IGF0dHJpYktleSBpbiBjb25maWcuYXR0cmlicykge1xuICAgICAgaWYgKGF0dHJpYktleSAhPT0gJ3N0eWxlJykge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJLZXksIGNvbmZpZy5hdHRyaWJzW2F0dHJpYktleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoY29uZmlnLnN0eWxlICE9IG51bGwpIHtcbiAgICBmb3IgKGxldCBzdHlsZUtleSBpbiBjb25maWcuc3R5bGUpIHtcbiAgICAgIG5vZGUuc3R5bGVbc3R5bGVLZXldID0gY29uZmlnLnN0eWxlW3N0eWxlS2V5XTtcbiAgICB9XG4gIH1cbiAgaWYgKGNvbmZpZy5jaGlsZHJlbiAhPSBudWxsKSB7XG4gICAgaWYgKGlzU3RyaW5nKGNvbmZpZy5jaGlsZHJlbikpIHtcbiAgICAgIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQobm9kZSwgY29uZmlnLmNoaWxkcmVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKG5ld0NvbmZpZywgaW5kZXgpIHsgXG4gICAgICAgIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQobm9kZSwgbmV3Q29uZmlnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gZmluZENoaWxkKHBhcmVudCwgY29uZmlnKSB7XG4gIHN3aXRjaCAoY29uZmlnLm1vZGUpIHtcbiAgICBjYXNlICdpZCc6XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLmtleSk7XG4gICAgY2FzZSAnY2xhc3MnOlxuICAgICAgcmV0dXJuIHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNvbmZpZy5rZXkuY2xhc3MpW2NvbmZpZy5rZXkuaW5kZXhdO1xuICAgIGNhc2UgJ3RhZyc6XG4gICAgICByZXR1cm4gcGFyZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKGNvbmZpZy5rZXkudGFnKVtjb25maWcua2V5LmluZGV4XTtcbiAgICBjYXNlICdxdWVyeSc6XG4gICAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLmtleS5xdWVyeSlbY29uZmlnLmtleS5pbmRleF07XG4gICAgY2FzZSAnaW5kZXgnOlxuICAgICAgcmV0dXJuIHBhcmVudC5jaGlsZE5vZGVzW2NvbmZpZy5rZXldO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXFxcImZpbmRDaGlsZFxcXCIgbW9kZScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRDaGlsZHJlbihwYXJlbnQsIGNvbmZpZykge1xuICBsZXQgaHRtbENvbGxlY3Rpb247XG4gIHN3aXRjaCAoY29uZmlnLm1vZGUpIHtcbiAgICBjYXNlICdjbGFzcyc6XG4gICAgICBodG1sQ29sbGVjdGlvbiA9IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNvbmZpZy5rZXkuY2xhc3MpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndGFnJzpcbiAgICAgIGh0bWxDb2xsZWN0aW9uID0gcGFyZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKGNvbmZpZy5rZXkudGFnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3F1ZXJ5JzpcbiAgICAgIGh0bWxDb2xsZWN0aW9uID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLmtleS5xdWVyeSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFxcXCJmaW5kQ2hpbGRcXFwiIG1vZGUnKTtcbiAgfVxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoaHRtbENvbGxlY3Rpb24pO1xufVxuXG5mdW5jdGlvbiBpc0NvbW1hbmRJbmRleCh2YWx1ZSkge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE51bWJlcl0nO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufVxuXG5mdW5jdGlvbiBtb2RpZnlFbGVtZW50KG5vZGUsIHBhdGNoKSB7XG4gIF9tb2RpZnlFbGVtZW50KG5vZGUsIHBhdGNoLnZhbHVlLCBwYXRjaC5jb21tYW5kcyk7XG59XG5cbmZ1bmN0aW9uIF9tb2RpZnlFbGVtZW50KG5vZGUsIHRyZWUsIGNvbW1hbmRzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IHRyZWVbaV0uaW5kZXg7XG4gICAgY29uc3QgY29udGludWF0aW9uID0gdHJlZVtpXS52YWx1ZTtcblxuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICdpZCc6XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kc1tjb250aW51YXRpb25dO1xuICAgICAgICBzd2l0Y2ggKGNvbW1hbmRbMF0pIHtcbiAgICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgICBjYXNlICdzZXRBdEtleSc6XG4gICAgICAgICAgICBub2RlLmlkID0gY29tbWFuZFsxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd0YWcnOlxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICBmb3IgKGxldCBzdHlsZUluZGV4ID0gMDsgc3R5bGVJbmRleCA8IGNvbnRpbnVhdGlvbi5sZW5ndGg7IHN0eWxlSW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IHN0eWxlID0gY29udGludWF0aW9uW3N0eWxlSW5kZXhdLmluZGV4O1xuICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kc1tjb250aW51YXRpb25bc3R5bGVJbmRleF0udmFsdWVdO1xuICAgICAgICAgIHN3aXRjaCAoY29tbWFuZFswXSkge1xuICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgICAgbm9kZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVwbGFjZSc6XG4gICAgICAgICAgICBjYXNlICdzZXRBdEtleSc6XG4gICAgICAgICAgICAgIG5vZGUuc3R5bGVbc3R5bGVdID0gY29tbWFuZFsxXTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdhdHRyaWJzJzpcbiAgICAgICAgZm9yIChsZXQgYXR0cmliSW5kZXggPSAwOyBhdHRyaWJJbmRleCA8IGNvbnRpbnVhdGlvbi5sZW5ndGg7IGF0dHJpYkluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBhdHRyaWIgPSBjb250aW51YXRpb25bYXR0cmliSW5kZXhdLmluZGV4O1xuICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kc1tjb250aW51YXRpb25bYXR0cmliSW5kZXhdLnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmRbMF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICAgIG5vZGUuYXR0cmlidXRlcy5yZW1vdmVOYW1lZEl0ZW0oYXR0cmliKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgICAgIGNhc2UgJ3NldEF0S2V5JzpcbiAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmliLCBjb21tYW5kWzFdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjbGFzc2VzJzpcbiAgICAgICAgaWYgKGlzQ29tbWFuZEluZGV4KGNvbnRpbnVhdGlvbikpIHtcbiAgICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZHNbMF07XG4gICAgICAgICAgc3dpdGNoIChjb21tYW5kWzBdKSB7XG4gICAgICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgICBmb3IgKGxldCBfY2xhc3MgaW4gY29tbWFuZFsxXSkge1xuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShfY2xhc3MpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2V0QXRLZXknOlxuICAgICAgICAgICAgICBmb3IgKGxldCBfY2xhc3MgaW4gY29tbWFuZFsxXSkge1xuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChfY2xhc3MpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBjbGFzc0luZGV4ID0gMDsgY2xhc3NJbmRleCA8IGNvbnRpbnVhdGlvbi5sZW5ndGg7IGNsYXNzSW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgX2NsYXNzID0gY29udGludWF0aW9uW2NsYXNzSW5kZXhdLmluZGV4O1xuICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IGNvbW1hbmRzW2NvbnRpbnVhdGlvbltjbGFzc0luZGV4XS52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmRbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoX2NsYXNzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnc2V0QXRLZXknOlxuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChfY2xhc3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnY2hpbGRyZW4nOlxuICAgICAgICBpZiAoaXNDb21tYW5kSW5kZXgoY29udGludWF0aW9uKSkge1xuICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kc1tjb250aW51YXRpb25dXG4gICAgICAgICAgc3dpdGNoIChjb21tYW5kWzBdKSB7XG4gICAgICAgICAgICBjYXNlICdyZW1vdmUnOlxuICAgICAgICAgICAgICByZW1vdmVDaGlsZHJlbihub2RlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZXBsYWNlJzogICAgIC8vID9cbiAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKGNvbW1hbmRbMV0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJUZXh0ID0gY29tbWFuZFsxXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lclRleHQgPSBjb21tYW5kWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDaGlsZHJlbihub2RlKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVBbmRBdHRhY2hFbGVtZW50cyhub2RlLCBjb21tYW5kWzFdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2luc2VydEF0RW5kJzpcbiAgICAgICAgICAgICAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudChub2RlLCBjb21tYW5kWzFdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAobGV0IGNoaWxkSW5kZXggPSAwOyBjaGlsZEluZGV4IDwgY29udGludWF0aW9uLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGNvbnRpbnVhdGlvbltjaGlsZEluZGV4XS5pbmRleDtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkQ29udGludWF0aW9uID0gY29udGludWF0aW9uW2NoaWxkSW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgaWYgKGlzQ29tbWFuZEluZGV4KGNoaWxkQ29udGludWF0aW9uKSkge1xuICAgICAgICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZHNbY2hpbGRDb250aW51YXRpb25dXG4gICAgICAgICAgICAgIHN3aXRjaCAoY29tbWFuZFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JlbW92ZSc6XG4gICAgICAgICAgICAgICAgICByZW1vdmVDaGlsZChub2RlLCBjaGlsZCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZUFuZFN1YnN0aXR1dGVFbGVtZW50KG5vZGUsIGNvbW1hbmRbMV0sIGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2luc2VydEF0RW5kJzpcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQobm9kZSwgY29tbWFuZFsxXSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgX21vZGlmeUVsZW1lbnQobm9kZS5jaGlsZE5vZGVzW2NoaWxkXSwgY2hpbGRDb250aW51YXRpb24sIGNvbW1hbmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkKG5vZGUsIGNoaWxkSW5kZXgpIHtcbiAgcmVtb3ZlTm9kZShmaW5kQ2hpbGQobm9kZSwgeyBtb2RlOiAnaW5kZXgnLCBrZXk6IGNoaWxkSW5kZXggfSkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZHJlbihub2RlKSB7XG4gIGNvbnN0IGNoaWxkQ291bnQgPSBub2RlLmNoaWxkTm9kZXMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gY2hpbGRDb3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmNoaWxkTm9kZXNbaV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQsXG4gIG1vZGlmeUVsZW1lbnRcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9