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

module.exports = "(do\n  (def! fix* (\n    fn* (f) (\n      (fn* (x) (f (fn* (& ys) (apply (x x) ys))))\n      (fn* (x) (f (fn* (& ys) (apply (x x) ys)))))))\n\n  (def! memfix* (\n    fn* (f) (\n      let* (cache {}) (\n        (fn* (x cache) (\n          f\n            (fn* (z) (\n              if (contains? cache z)\n                (get cache z)\n                (let* (result ((fn* (y) ((x x cache) y)) z)) (\n                  do\n                    (set! cache z result)\n                    result))))\n            cache))\n        (fn* (x cache) (\n          f\n            (fn* (z) (\n              if (contains? cache z)\n                (get cache z)\n                (let* (result ((fn* (y) ((x x cache) y)) z)) (\n                  do\n                    (set! cache z result)\n                    result))))\n            cache))\n        cache))))\n\n  (def! _0 car)\n\n  (def! _1 (fn* (xs) (nth 1 xs)))\n\n  (def! _2 (fn* (xs) (nth 2 xs)))\n\n  (def! swap! (\n    macro* (atom & xs) (\n      if (empty? xs)\n        atom\n        `(let* (-atom- ~atom) (\n          do\n            (reset! -atom- (~(car xs) (deref -atom-) ~@(cdr xs)))\n            (deref -atom-))))))\n\n  (def! *gensym-counter* (atom 0))\n\n  (def! gensym (\n      fn* () (symbol (string \"G__\" (swap! *gensym-counter* incr)))))\n\n  (def! or (\n    macro* (& xs) (\n      if (empty? xs)\n        false\n        (let* (-query- (gensym))\n          `(let* (~-query- ~(car xs)) (\n            if ~-query-\n              ~-query-\n              (or ~@(cdr xs))))))))\n\n  (def! and (\n    macro* (& xs) (\n      if (empty? xs)\n        true\n        (let* (-query- (gensym))\n          `(let* (~-query- ~(car xs)) (\n            if ~-query-\n              (and ~@(cdr xs))\n              false))))))\n\n  (def! cond (\n    macro* (& xs) (\n      if (empty? xs)\n        nil\n        (if (empty? (cdr xs))\n          (throw \"`cond` requires an even number of forms.\")\n          (let* (-query- (gensym))\n            `(let* (~-query- ~(car xs)) (\n              if ~-query-\n                ~(_1 xs)\n                (cond ~@(cdr (cdr xs))))))))))\n\n  (def! loop (\n    macro* (form0 form1)\n      `(let* (loop (memfix* (fn* (loop) (fn* (~(_0 form0)) ~form1)))) (\n        loop ~(_1 form0)))))\n\n  (def! -> (\n    macro* (& xs) (\n      if (empty? xs)\n        nil\n        (let* (x (car xs), xs (cdr xs)) (\n          if (empty? xs)\n            x\n            (let* (form (car xs), forms (cdr xs)) (\n              if (empty? forms)\n                (if (list? form)\n                  (if (= (symbol \"fn*\") (car form))\n                    `(~form ~x)\n                    `(~(car form) ~x ~@(cdr form)))\n                  (list form x))\n                `(-> (-> ~x ~form) ~@forms))))))))\n\n  (def! ->> (\n    macro* (& xs) (\n      if (empty? xs)\n        nil\n        (let* (x (car xs), xs (cdr xs)) (\n          if (empty? xs)\n            x\n            (let* (form (car xs), forms (cdr xs)) (\n              if (empty? forms)\n                (if (list? form)\n                  (if (= (symbol \"fn*\") (car form))\n                    `(~form ~x)\n                    `(~@form ~x))\n                  (list form x))\n                `(->> (->> ~x ~form) ~@forms))))))))\n\n  (def! ->* (macro* (& xs) (\n    let* (x (gensym))\n      `(fn* (~x) (-> ~x ~@xs)))))\n\n  (def! ->>* (macro* (& xs) (\n    let* (x (gensym))\n      `(fn* (~x) (->> ~x ~@xs)))))\n\n  (def! not (fn* (x) (if x false true)))\n\n  (def! incr (->* (+ 1)))\n\n  (def! decr (->* (- 1)))\n\n  (def! zero? (->* (= 0)))\n\n  (def! identity (fn* (x) x))\n\n  (def! constant-fn (fn* (x) (fn* (y) x)))\n\n  (def! call-on (fn* (& xs) (fn* (fn) (apply fn xs))))\n\n  (def! step-into-list (\n    fn* (xs fn0 fn1) (\n      let* (x (car xs), -xs- (cdr xs)) (\n        if (empty? -xs-)\n          (fn1 x)\n          (fn0 x -xs-)))))\n\n  (def! apply-on (\n    fn* (& xs) (\n      step-into-list\n        xs\n        (fn* (arguments -xs-) (apply (car -xs-) arguments))\n        (fn* (arguments) (fn* (f) (apply f arguments))))))\n\n  (def! reduce (\n    fn* (f seed xs) (\n      if (empty? xs)\n        seed\n        (reduce f (f seed (car xs)) (cdr xs)))))\n\n  (def! filter (\n    fn* (predicate xs) (\n      reverse (\n        reduce\n          (fn* (memo x) (if (predicate x) (cons x memo) memo))\n          '()\n          xs))))\n\n  (def! map (\n    fn* (f xs) (\n      reverse (\n        reduce\n          (fn* (memo x) (cons (f x) memo))\n          '()\n          xs))))\n\n  (def! every? (\n    fn* (pred xs) (\n      if (empty? xs)\n        true\n        (if (pred (car xs)) (every? pred (cdr xs)) false))))\n\n  (def! some? (\n    fn* (pred xs) (\n      if (empty? xs)\n        false\n        (if (pred (car xs)) true (some? pred (cdr xs))))))\n\n  (def! letmemrec* (\n    macro* (alias expr)\n      `(let* (\n        ~(car alias)\n        (memfix* (fn* (~(car alias)) ~(_1 alias))))\n          ~expr)))\n\n  (def! skip (\n    fn* (nbr xs) (\n      letrec* (\n        -skip-\n        (fn* (ys) (\n          let* (nbr (car ys), xs (_1 ys)) (\n            cond\n              (= 0 nbr) xs\n              (= 1 nbr) (cdr xs)\n              \"default\" (-skip- (list (decr nbr) (cdr xs))))))) (\n          -skip- (list nbr xs)))))\n\n  (def! invokable? (fn* (x) (or (function? x) (macro? x))))\n\n  (def! . (\n    macro* (x key & xs) (\n      if (empty? xs)\n        `(get ~x ~key)\n        `((get ~x ~key) ~@xs))))\n\n  (def! .. (\n    fn* (lo hi) (\n      letrec* (\n        -..-\n        (fn* (xs) (\n          let* (lo (_0 xs), hi (_1 xs), -list- (_2 xs)) (\n            if (= lo hi)\n              (cons hi -list-)\n              (-..- (list lo (decr hi) (cons hi -list-))))))) (\n          -..- (list lo hi '())))))\n\n  (def! defrec! (\n    macro* (fn-name fn-body)\n      `(def! ~fn-name (letrec* (~fn-name ~fn-body) ~fn-name))))\n\n  (def! for* (\n    macro* (loop-parameters body)\n      `(loop\n         ~(_0 loop-parameters)\n         (if ~(_1 loop-parameters)\n           (do ~body (loop ~(_2 loop-parameters)))\n           nil))))\n\n  (def! for-each (\n    fn* (f xs) (\n      reduce (fn* (memo x) (do (f x) memo)) nil xs)))\n\n  (def! n-times (\n    fn* (n f) (\n      loop\n        (i 0)\n        (if (= i n)\n          nil\n          (do (f i) (loop (+ i 1)))))))\n\n  (def! tap (fn* (f x) (do (f x) x)))\n\n  (def! with-side-effect (fn* (thunk x) (do (thunk) x)))\n\n  (def! thunk (macro* (form) `(fn* () ~form)))\n\n  (def! call (macro* (f & xs) `(~f ~@xs)))\n\n  (def! apply (macro* (f xs) `(eval (cons ~f ~xs))))\n\n  (def! eval-string (fn* (erlString) (eval (parse erlString))))\n)\n"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2dldEFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2dldEtleUNob3JkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbnRyb2wvY2hhcnMvaW50ZXJwcmV0S2V5ZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2tleUNvZGVDaGFydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29udHJvbC9jaGFycy9rZXlJZGVudGlmaWVyQ2hhcnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbnRyb2wvZ2V0Vmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29udHJvbC9pbml0aWFsaXplQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9kZXRlY3RDc3NTY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvaW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy9mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy90ZXJtaW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy92aWV3cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvZ2V0SW5pdGlhbE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL21vZGVscy90eXBlcy9jcmVhdGVGcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvdHlwZXMvY3JlYXRlUHJvbXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL21vZGVscy90eXBlcy9jcmVhdGVUZXJtaW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvdHlwZXMvY3JlYXRlVmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL3N1YnNjcmliZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvdmlldy9pbml0aWFsaXplVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L3JlY3JlYXRlQ29uc29sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZUVybGtvbmlnTGlzcENvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvX3Byb2Nlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvY29tbWVudFNpZ25hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9lbnYtdXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2VudjAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvZW52MS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9lbnYyLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2VudjMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvZW52NC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9ldmFsdWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9nZXRMaXNwRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvaW5kZXgtdXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2ludGVycHJldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9qcy11dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3Ava2V5VG9rZW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2xpbmtlZC1saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3BhcnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3NlcmlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9zdGFuZGFyZC1mbnMtYW5kLW1hY3Jvcy5saXNwIiwid2VicGFjazovLy8uL3NyYy9saXNwL3Rva2VuaXplLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3Rva2VuaXplQW5kUGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvdHlwZS11dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JpYm9zb21lL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JpYm9zb21lL2VsZW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9yaWJvc29tZS9pbnRlcnByZXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixJQUFJLEtBQUs7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRXFCOzs7Ozs7Ozs7Ozs7O0FDcEdyQjtBQUFBO0FBQUE7QUFBQTtBQUFnRDtBQUNZOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsNkJBQTZCLHdFQUFtQjtBQUNoRCxHQUFHO0FBQ0g7QUFDQSw2QkFBNkIsNERBQWE7QUFDMUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFdUI7Ozs7Ozs7Ozs7Ozs7QUNsRHZCO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ0k7O0FBRTVDO0FBQ0EsU0FBUyw0REFBUyxDQUFDLGdFQUFXO0FBQzlCOztBQUU0Qjs7Ozs7Ozs7Ozs7OztBQ1A1QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7QUN2SHpCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQXlCRTs7Ozs7Ozs7Ozs7OztBQy9QRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0Q7QUFDQTtBQUNJO0FBQ0c7QUFDSjtBQUNEO0FBQ0Q7QUFDRDtBQUNHO0FBQ0E7QUFDQTtBQUNmO0FBQ0s7QUFDUztBQUNiO0FBQ0s7QUFDTDtBQUNJO0FBQ0s7QUFDSDtBQUNLO0FBQ0Q7QUFDSztBQUNiO0FBQ0U7QUFDRDtBQUNGO0FBQ0U7QUFDTjtBQUNPO0FBQ0w7QUFDUTtBQUNOO0FBQ1E7QUFDTDtBQUNRO0FBQ047QUFDSDtBQUNKOztBQUVwQztBQUNBLGtDQUFrQyxPQUFPO0FBQ3pDO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNERBQVk7QUFDekIsS0FBSztBQUNMLGFBQWEsK0RBQWU7QUFDNUIsS0FBSztBQUNMO0FBQ0EsZUFBZSx3RUFBZ0I7QUFDL0I7QUFDQSxLQUFLO0FBQ0wsYUFBYSwrREFBZTtBQUM1QixLQUFLO0FBQ0wsYUFBYSxtRUFBbUI7QUFDaEMsS0FBSztBQUNMO0FBQ0EsZUFBZSx1RUFBZTtBQUM5QjtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUsdUVBQWU7QUFDOUI7QUFDQSxLQUFLO0FBQ0wsYUFBYSwrREFBZTtBQUM1QjtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGlEQUFNLGNBQWMsZ0RBQUs7QUFDNUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDREQUFpQjtBQUN6Qzs7QUFFQTtBQUNBLHdCQUF3QixzREFBVztBQUNuQzs7QUFFQTtBQUNBLG1CQUFtQixpREFBTTtBQUN6Qjs7QUFFQTtBQUNBLG1CQUFtQixxREFBVTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsb0RBQVM7QUFDNUI7O0FBRUE7QUFDQSxtQkFBbUIsOENBQUc7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiw0REFBYTtBQUM5QixXQUFXLDREQUFhO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMscUVBQWE7QUFDdEIsSUFBSSx1RUFBZTtBQUNuQixJQUFJLHFFQUFhO0FBQ2pCO0FBQ0EsTUFBTSxxRUFBYTtBQUNuQjs7QUFFQTtBQUNBLG1CQUFtQixnREFBSztBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLHFFQUFhO0FBQ3RCLElBQUksdUVBQWU7QUFDbkIsSUFBSSxxRUFBYTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLG1EQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxjQUFjLHNFQUFjO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLFNBQVMsc0VBQWM7QUFDdkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IscUVBQWE7QUFDN0Isc0NBQXNDLGtEQUFPO0FBQzdDLGNBQWMscUVBQWE7QUFDM0I7QUFDQSxTQUFTLDREQUFPO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLFdBQVcscURBQVUsWUFBWSxnREFBSztBQUN0QyxXQUFXLDBEQUFlLE9BQU8scURBQVU7QUFDM0MsV0FBVywwREFBZSxPQUFPLHFEQUFVO0FBQzNDLFdBQVcscURBQVUsWUFBWSxnREFBSztBQUN0QyxXQUFXLDZEQUFrQixJQUFJLHdEQUFhO0FBQzlDLFdBQVcsdURBQVksVUFBVSxrREFBTzs7QUFFeEM7O0FBRUEsaUJBQWlCLDREQUFpQixRQUFRLHVEQUFZO0FBQ3RELGlCQUFpQixnRUFBcUIsSUFBSSwyREFBZ0I7O0FBRTFEOztBQUVBOztBQUVpQjs7Ozs7Ozs7Ozs7OztBQ3BOakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdEO0FBQ0U7QUFDWDtBQUNFO0FBQ0k7QUFDaUI7QUFDTDtBQUNOO0FBQ0o7QUFDRDtBQUNFO0FBQ0g7QUFDQztBQUNGO0FBQ0c7QUFDVTtBQUNuQjtBQUNFO0FBQ0Q7O0FBRXZDLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQiw0REFBYTtBQUMvQixXQUFXLDREQUFhO0FBQ3hCO0FBQ0E7QUFDQSxRQUFRLGlFQUFTO0FBQ2pCO0FBQ0EsS0FBSyxVQUFVLG1FQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLEtBQUssVUFBVSxrRUFBVTtBQUN6QjtBQUNBLEtBQUssVUFBVSxvRUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxLQUFLLFVBQVUsa0ZBQTBCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLEtBQUssVUFBVSw2RUFBcUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsS0FBSyxVQUFVLDZFQUFxQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxLQUFLLFVBQVUsa0VBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0EsS0FBSyxVQUFVLGdFQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLEtBQUssVUFBVSx1RUFBZTtBQUM5QjtBQUNBLEtBQUssVUFBVSxtRUFBVztBQUMxQjtBQUNBLEtBQUssVUFBVSxpRUFBUztBQUN4QjtBQUNBLEtBQUs7QUFDTCxhQUFhLDhEQUFjO0FBQzNCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMsc0VBQWM7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxREFBVSxVQUFVLG1EQUFRO0FBQ3JDOztBQUVBO0FBQ0EseUJBQXlCLDJEQUFNO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0RBQVMsb0JBQW9CLGtEQUFPO0FBQzdDOztBQUVBO0FBQ0EsK0JBQStCLHNFQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxQjs7Ozs7Ozs7Ozs7O0FDckpyQix1TkFBdU4sc3pNOzs7Ozs7Ozs7Ozs7QUNBdk47QUFBQTtBQUFBO0FBQWdEOztBQUVoRDtBQUNBLDRDQUE0QywwQkFBMEIsZUFBZSxLQUFLO0FBQzFGOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0REFBYTtBQUN4QixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVvQjs7Ozs7Ozs7Ozs7OztBQy9CcEI7QUFBQTtBQUFBO0FBQUE7QUFBZ0M7QUFDTTs7QUFFL0I7QUFDUCxTQUFTLG9EQUFLLENBQUMsMERBQVE7QUFDdkI7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QztBQUNSO0FBQ0g7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLFVBQVUsa0RBQVc7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsK0NBQVE7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQTBDRTs7Ozs7Ozs7Ozs7OztBQy9JRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBbUJFOzs7Ozs7Ozs7Ozs7O0FDbkRGO0FBQUE7QUFBQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrQkFBK0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsYUFBYTtBQUM5QixlQUFlLHlCQUF5QjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLGFBQWE7QUFDOUIsc0JBQXNCLHlCQUF5QjtBQUMvQztBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQ0FBaUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVnQjs7Ozs7Ozs7Ozs7OztBQ3RJaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQix5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNySFA7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0NBQXNDO0FBQzdEOztBQUVBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxrQ0FBa0M7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsbUNBQW1DO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxrQ0FBa0Msa0NBQWtDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGtDQUFrQyxrQ0FBa0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsaUNBQWlDO0FBQy9EOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUTtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUtFIiwiZmlsZSI6ImVybGtvbmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5pdGlhbGl6ZUVybGtvbmlnTGlzcENvbnNvbGUuanNcIik7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiY29uc3QgYSA9ICdhJztcbmNvbnN0IGUgPSAnZSc7XG5jb25zdCBoID0gJ2gnO1xuY29uc3QgbCA9ICdsJztcbmNvbnN0IHUgPSAndSc7XG5jb25zdCB3ID0gJ3cnO1xuXG5jb25zdCBBID0gJ0EnO1xuY29uc3QgRSA9ICdFJztcbmNvbnN0IEggPSAnSCc7XG5jb25zdCBMID0gJ0wnO1xuY29uc3QgVSA9ICdVJztcbmNvbnN0IFcgPSAnVyc7XG5cbmNvbnN0IGJhY2tzcGFjZSA9ICdCYWNrc3BhY2UnO1xuY29uc3QgX2RlbGV0ZSAgID0gJ0RlbGV0ZSc7XG5jb25zdCBkb3duICAgICAgPSAnQXJyb3dEb3duJztcbmNvbnN0IGVudGVyICAgICA9ICdFbnRlcic7XG5jb25zdCBsZWZ0ICAgICAgPSAnQXJyb3dMZWZ0JztcbmNvbnN0IHJpZ2h0ICAgICA9ICdBcnJvd1JpZ2h0JztcbmNvbnN0IHNwYWNlICAgICA9ICcgJztcbmNvbnN0IHNwYWNlYmFyICA9ICdTcGFjZWJhcic7XG5jb25zdCB0YWIgICAgICAgPSAnVGFiJztcbmNvbnN0IHVwICAgICAgICA9ICdBcnJvd1VwJztcblxuY29uc3QgY2hhcmFjdGVycyA9IFtcbiAgc3BhY2UsXG4gICdgJywgJzEnLCAnMicsICAnMycsICc0JywgICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMCcsICctJywgJz0nLFxuICAnficsICchJywgJ0AnLCAgJyMnLCAnJCcsICAnJScsICdeJywgJyYnLCAnKicsICcoJywgJyknLCAnXycsICcrJyxcbiAgJ2EnLCAnYicsICdjJywgICdkJywgJ2UnLCAgJ2YnLCAnZycsICdoJywgJ2knLCAnaicsICdrJywgJ2wnLCAnbScsXG4gICduJywgJ28nLCAncCcsICAncScsICdyJywgICdzJywgJ3QnLCAndScsICd2JywgJ3cnLCAneCcsICd5JywgJ3onLFxuICAnQScsICdCJywgJ0MnLCAgJ0QnLCAnRScsICAnRicsICdHJywgJ0gnLCAnSScsICdKJywgJ0snLCAnTCcsICdNJyxcbiAgJ04nLCAnTycsICdQJywgICdRJywgJ1InLCAgJ1MnLCAnVCcsICdVJywgJ1YnLCAnVycsICdYJywgJ1knLCAnWicsXG4gICdbJywgJ10nLCAnXFxcXCcsICc7JywgJ1xcJycsICcsJywgJy4nLCAnLycsXG4gICd7JywgJ30nLCAnfCcsICAnOicsICdcIicsICAnPCcsICc+JywgJz8nXG5dO1xuXG5mdW5jdGlvbiBnZXRBY3Rpb24oa2V5Q2hvcmQpIHtcbiAgY29uc3QgdmFsdWUgPSBrZXlDaG9yZC52YWx1ZTtcblxuICBpZiAoa2V5Q2hvcmQuY3RybEtleSkge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgYTpcbiAgICAgIGNhc2UgQTpcbiAgICAgICAgcmV0dXJuIHdyYXAoJ21vdmVDdXJzb3JUb1N0YXJ0Jyk7XG4gICAgICBjYXNlIGU6XG4gICAgICBjYXNlIEU6XG4gICAgICAgIHJldHVybiB3cmFwKCdtb3ZlQ3Vyc29yVG9FbmQnKTtcbiAgICAgIGNhc2UgaDpcbiAgICAgIGNhc2UgSDpcbiAgICAgICAgcmV0dXJuIHdyYXAoJ2RlbGV0ZUxlZnRDaGFyJyk7XG4gICAgICBjYXNlIGw6XG4gICAgICBjYXNlIEw6XG4gICAgICAgIHJldHVybiB3cmFwKCdjbGVhcicpO1xuICAgICAgY2FzZSB1OlxuICAgICAgY2FzZSBVOlxuICAgICAgICByZXR1cm4gd3JhcCgnZGVsZXRlUHJlQ3Vyc29yJyk7XG4gICAgICBjYXNlIHc6XG4gICAgICBjYXNlIFc6XG4gICAgICAgIHJldHVybiB3cmFwKCdkZWxldGVXb3JkJyk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gd3JhcCgnbm9PcCcpO1xuICAgIH1cbiAgfVxuXG4gIHN3aXRjaCAodmFsdWUpIHtcbiAgICBjYXNlIGVudGVyOlxuICAgICAgcmV0dXJuIHdyYXAoJ3N1Ym1pdCcpO1xuICAgIGNhc2UgYmFja3NwYWNlOlxuICAgICAgcmV0dXJuIHdyYXAoJ2RlbGV0ZUxlZnRDaGFyJyk7XG4gICAgY2FzZSBsZWZ0OlxuICAgICAgcmV0dXJuIHdyYXAoJ21vdmVDdXJzb3JMZWZ0Jyk7XG4gICAgY2FzZSByaWdodDpcbiAgICAgIHJldHVybiB3cmFwKCdtb3ZlQ3Vyc29yUmlnaHQnKTtcbiAgICBjYXNlIHVwOlxuICAgICAgcmV0dXJuIHdyYXAoJ3Jld2luZCcpO1xuICAgIGNhc2UgZG93bjpcbiAgICAgIHJldHVybiB3cmFwKCdmYXN0Rm9yd2FyZCcpO1xuICAgIGNhc2UgX2RlbGV0ZTpcbiAgICAgIHJldHVybiB3cmFwKCdkZWxldGVSaWdodENoYXInKTtcbiAgICBjYXNlIHRhYjpcbiAgICAgIHJldHVybiB3cmFwKCdjb21wbGV0ZVdvcmQnKTtcbiAgICBjYXNlIHNwYWNlOlxuICAgIGNhc2Ugc3BhY2ViYXI6XG4gICAgICByZXR1cm4geyBuYW1lOiAnYWRkQ2hhcicsIGNoYXI6ICcgJyB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gaXNDaGFyYWN0ZXIodmFsdWUpXG4gICAgICAgID8geyBuYW1lOiAnYWRkQ2hhcicsIGNoYXI6IHZhbHVlIH1cbiAgICAgICAgOiB3cmFwKCdub09wJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNDaGFyYWN0ZXIodmFsdWUpIHtcbiAgcmV0dXJuIGNoYXJhY3RlcnMuaW5kZXhPZih2YWx1ZSkgPj0gMDtcbn1cblxuZnVuY3Rpb24gd3JhcChhY3Rpb25OYW1lKSB7XG4gIHJldHVybiB7IG5hbWU6IGFjdGlvbk5hbWUgfTtcbn1cblxuZXhwb3J0IHsgZ2V0QWN0aW9uIH07XG4iLCJpbXBvcnQgeyBrZXlDb2RlQ2hhcnRzIH0gZnJvbSAnLi9rZXlDb2RlQ2hhcnRzJztcbmltcG9ydCB7IGtleUlkZW50aWZpZXJDaGFydHMgfSBmcm9tICcuL2tleUlkZW50aWZpZXJDaGFydHMnO1xuXG5mdW5jdGlvbiBnZXRFdmVudFByb3h5KGtpbmQsIGV2ZW50KSB7XG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGV2ZW50W2tpbmRdLFxuICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgIGN0cmxLZXk6IGV2ZW50LmN0cmxLZXksXG4gICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5XG4gIH07XG59O1xuXG5mdW5jdGlvbiBpZGVudGl0eShldmVudCkge1xuICByZXR1cm4gZXZlbnQ7XG59XG5cbmZ1bmN0aW9uIGdldEtleUNob3JkKGV2ZW50KSB7XG4gIGxldCBub3JtYWxpemU7XG4gIGxldCBwcm9wZXJ0eTtcblxuICBpZiAoZXZlbnQua2V5ICE9IG51bGwpIHtcbiAgICBwcm9wZXJ0eSA9ICdrZXknO1xuICAgIG5vcm1hbGl6ZSA9IGlkZW50aXR5O1xuICB9IGVsc2UgaWYgKGV2ZW50LmtleUlkZW50aWZpZXIgIT0gbnVsbCkge1xuICAgIHByb3BlcnR5ID0gJ2tleUlkZW50aWZpZXInO1xuICAgIG5vcm1hbGl6ZSA9IF9nZXRLZXlDaG9yZChrZXlJZGVudGlmaWVyQ2hhcnRzKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9wZXJ0eSA9ICdrZXlDb2RlJztcbiAgICBub3JtYWxpemUgPSBfZ2V0S2V5Q2hvcmQoa2V5Q29kZUNoYXJ0cyk7XG4gIH1cblxuICByZXR1cm4gbm9ybWFsaXplKGdldEV2ZW50UHJveHkocHJvcGVydHksIGV2ZW50KSk7XG59XG5cbmZ1bmN0aW9uIF9nZXRLZXlDaG9yZChjb252ZXJzaW9uQ2hhcnRzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGdldEtleUNob3JkVmFsdWUoY29udmVyc2lvbkNoYXJ0cywgZXZlbnQudmFsdWUsIGV2ZW50LnNoaWZ0S2V5KSxcbiAgICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgICAgY3RybEtleTogZXZlbnQuY3RybEtleSxcbiAgICAgIHNoaWZ0S2V5OiBldmVudC5zaGlmdEtleVxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEtleUNob3JkVmFsdWUoY29udmVyc2lvbkNoYXJ0cywgdmFsdWUsIHNoaWZ0S2V5KSB7XG4gIGNvbnN0IGtleSA9IHNoaWZ0S2V5ID8gJ3dpdGhTaGlmdCcgOiAnd2l0aG91dFNoaWZ0JztcbiAgcmV0dXJuIGNvbnZlcnNpb25DaGFydHNba2V5XVt2YWx1ZV07XG59XG5cbmV4cG9ydCB7IGdldEtleUNob3JkIH07XG4iLCJpbXBvcnQgeyBnZXRBY3Rpb24gfSBmcm9tICcuL2dldEFjdGlvbic7XG5pbXBvcnQgeyBnZXRLZXlDaG9yZCB9IGZyb20gJy4vZ2V0S2V5Q2hvcmQnO1xuXG5mdW5jdGlvbiBpbnRlcnByZXRLZXlkb3duKGV2ZW50KSB7XG4gIHJldHVybiBnZXRBY3Rpb24oZ2V0S2V5Q2hvcmQoZXZlbnQpKTtcbn1cblxuZXhwb3J0IHsgaW50ZXJwcmV0S2V5ZG93biB9O1xuIiwiY29uc3Qga2V5Q29kZUNoYXJ0cyA9IHtcbiAgd2l0aFNoaWZ0OiB7XG4gICAgOCAgOiAnQmFja3NwYWNlJyxcbiAgICA5ICA6ICdUYWInLFxuICAgIDEzIDogJ0VudGVyJyxcbiAgICAzMiA6ICcgJyxcbiAgICAzNyA6ICdBcnJvd0xlZnQnLFxuICAgIDM4IDogJ0Fycm93VXAnLFxuICAgIDM5IDogJ0Fycm93UmlnaHQnLFxuICAgIDQwIDogJ0Fycm93RG93bicsXG4gICAgNDYgOiAnRGVsZXRlJyxcbiAgICA0OCA6ICcpJyxcbiAgICA0OSA6ICchJyxcbiAgICA1MCA6ICdAJyxcbiAgICA1MSA6ICcjJyxcbiAgICA1MiA6ICckJyxcbiAgICA1MyA6ICclJyxcbiAgICA1NCA6ICdeJyxcbiAgICA1NSA6ICcmJyxcbiAgICA1NiA6ICcqJyxcbiAgICA1NyA6ICcoJyxcbiAgICA1OSA6ICc6JyxcbiAgICA2MSA6ICcrJyxcbiAgICA2NSA6ICdBJyxcbiAgICA2NiA6ICdCJyxcbiAgICA2NyA6ICdDJyxcbiAgICA2OCA6ICdEJyxcbiAgICA2OSA6ICdFJyxcbiAgICA3MCA6ICdGJyxcbiAgICA3MSA6ICdHJyxcbiAgICA3MiA6ICdIJyxcbiAgICA3MyA6ICdJJyxcbiAgICA3NCA6ICdKJyxcbiAgICA3NSA6ICdLJyxcbiAgICA3NiA6ICdMJyxcbiAgICA3NyA6ICdNJyxcbiAgICA3OCA6ICdOJyxcbiAgICA3OSA6ICdPJyxcbiAgICA4MCA6ICdQJyxcbiAgICA4MSA6ICdRJyxcbiAgICA4MiA6ICdSJyxcbiAgICA4MyA6ICdTJyxcbiAgICA4NCA6ICdUJyxcbiAgICA4NSA6ICdVJyxcbiAgICA4NiA6ICdWJyxcbiAgICA4NyA6ICdXJyxcbiAgICA4OCA6ICdYJyxcbiAgICA4OSA6ICdZJyxcbiAgICA5MCA6ICdaJyxcbiAgICAxNzM6ICdfJyxcbiAgICAxODg6ICc8JyxcbiAgICAxOTA6ICc+JyxcbiAgICAxOTE6ICc/JyxcbiAgICAxOTI6ICd+JyxcbiAgICAyMTk6ICd7JyxcbiAgICAyMjA6ICd8JyxcbiAgICAyMjE6ICd9JyxcbiAgICAyMjI6ICdcIidcbiAgfSxcbiAgd2l0aG91dFNoaWZ0OiB7XG4gICAgOCAgOiAnQmFja3NwYWNlJyxcbiAgICA5ICA6ICdUYWInLFxuICAgIDEzIDogJ0VudGVyJyxcbiAgICAzMiA6ICcgJyxcbiAgICAzNyA6ICdBcnJvd0xlZnQnLFxuICAgIDM4IDogJ0Fycm93VXAnLFxuICAgIDM5IDogJ0Fycm93UmlnaHQnLFxuICAgIDQwIDogJ0Fycm93RG93bicsXG4gICAgNDYgOiAnRGVsZXRlJyxcbiAgICA0ODogJzAnLFxuICAgIDQ5OiAnMScsXG4gICAgNTA6ICcyJyxcbiAgICA1MTogJzMnLFxuICAgIDUyOiAnNCcsXG4gICAgNTM6ICc1JyxcbiAgICA1NDogJzYnLFxuICAgIDU1OiAnNycsXG4gICAgNTY6ICc4JyxcbiAgICA1NzogJzknLFxuICAgIDU5OiAnOycsXG4gICAgNjE6ICc9JyxcbiAgICA2NTogJ2EnLFxuICAgIDY2OiAnYicsXG4gICAgNjc6ICdjJyxcbiAgICA2ODogJ2QnLFxuICAgIDY5OiAnZScsXG4gICAgNzA6ICdmJyxcbiAgICA3MTogJ2cnLFxuICAgIDcyOiAnaCcsXG4gICAgNzM6ICdpJyxcbiAgICA3NDogJ2onLFxuICAgIDc1OiAnaycsXG4gICAgNzY6ICdsJyxcbiAgICA3NzogJ20nLFxuICAgIDc4OiAnbicsXG4gICAgNzk6ICdvJyxcbiAgICA4MDogJ3AnLFxuICAgIDgxOiAncScsXG4gICAgODI6ICdyJyxcbiAgICA4MzogJ3MnLFxuICAgIDg0OiAndCcsXG4gICAgODU6ICd1JyxcbiAgICA4NjogJ3YnLFxuICAgIDg3OiAndycsXG4gICAgODg6ICd4JyxcbiAgICA4OTogJ3knLFxuICAgIDkwOiAneicsXG4gICAgMTczOiAnLScsXG4gICAgMTg4OiAnLCcsXG4gICAgMTkwOiAnLicsXG4gICAgMTkxOiAnLycsXG4gICAgMTkyOiAnYCcsXG4gICAgMjE5OiAnWycsXG4gICAgMjIwOiAnXFxcXCcsXG4gICAgMjIxOiAnXScsXG4gICAgMjIyOiAnXFwnJ1xuICB9XG59O1xuXG5leHBvcnQgeyBrZXlDb2RlQ2hhcnRzIH07XG4iLCJjb25zdCBrZXlJZGVudGlmaWVyQ2hhcnRzID0ge1xuICB3aXRob3V0U2hpZnQ6IHtcbiAgICAnVSswMDQxJzogJ2EnLFxuICAgICdVKzAwNDInOiAnYicsXG4gICAgJ1UrMDA0Myc6ICdjJyxcbiAgICAnVSswMDQ0JzogJ2QnLFxuICAgICdVKzAwNDUnOiAnZScsXG4gICAgJ1UrMDA0Nic6ICdmJyxcbiAgICAnVSswMDQ3JzogJ2cnLFxuICAgICdVKzAwNDgnOiAnaCcsXG4gICAgJ1UrMDA0OSc6ICdpJyxcbiAgICAnVSswMDRBJzogJ2onLFxuICAgICdVKzAwNEInOiAnaycsXG4gICAgJ1UrMDA0Qyc6ICdsJyxcbiAgICAnVSswMDREJzogJ20nLFxuICAgICdVKzAwNEUnOiAnbicsXG4gICAgJ1UrMDA0Ric6ICdvJyxcbiAgICAnVSswMDUwJzogJ3AnLFxuICAgICdVKzAwNTEnOiAncScsXG4gICAgJ1UrMDA1Mic6ICdyJyxcbiAgICAnVSswMDUzJzogJ3MnLFxuICAgICdVKzAwNTQnOiAndCcsXG4gICAgJ1UrMDA1NSc6ICd1JyxcbiAgICAnVSswMDU2JzogJ3YnLFxuICAgICdVKzAwNTcnOiAndycsXG4gICAgJ1UrMDA1OCc6ICd4JyxcbiAgICAnVSswMDU5JzogJ3knLFxuICAgICdVKzAwNUEnOiAneicsXG4gICAgJ1UrMDAzMCc6ICcwJyxcbiAgICAnVSswMDMxJzogJzEnLFxuICAgICdVKzAwMzInOiAnMicsXG4gICAgJ1UrMDAzMyc6ICczJyxcbiAgICAnVSswMDM0JzogJzQnLFxuICAgICdVKzAwMzUnOiAnNScsXG4gICAgJ1UrMDAzNic6ICc2JyxcbiAgICAnVSswMDM3JzogJzcnLFxuICAgICdVKzAwMzgnOiAnOCcsXG4gICAgJ1UrMDAzOSc6ICc5JyxcbiAgICAnVSswMEMwJzogJ2AnLFxuICAgICdVKzAwQkQnOiAnLScsXG4gICAgJ1UrMDBCQic6ICc9JyxcbiAgICAnVSswMERCJzogJ1snLFxuICAgICdVKzAwREQnOiAnXScsXG4gICAgJ1UrMDBEQyc6ICdcXFxcJyxcbiAgICAnVSswMEJBJzogJzsnLFxuICAgICdVKzAwREUnOiAnXFwnJyxcbiAgICAnVSswMEJDJzogJywnLFxuICAgICdVKzAwQkUnOiAnLicsXG4gICAgJ1UrMDBCRic6ICcvJyxcbiAgICAnVSswMDIwJzogJyAnLFxuICAgICdVKzAwMDgnOiAnQmFja3NwYWNlJyxcbiAgICAnVSswMDc1JzogJ0RlbGV0ZScsXG4gICAgJ0Rvd24nICA6ICdBcnJvd0Rvd24nLFxuICAgICdFbnRlcicgOiAnRW50ZXInLFxuICAgICdMZWZ0JyAgOiAnQXJyb3dMZWZ0JyxcbiAgICAnUmlnaHQnIDogJ0Fycm93UmlnaHQnLFxuICAgICdVKzAwMjAnOiAnICcsXG4gICAgJ1UrMDAwOSc6ICdUYWInLFxuICAgICdVcCcgICAgOiAnQXJyb3dVcCdcbiAgfSxcbiAgd2l0aFNoaWZ0OiB7XG4gICAgJ1UrMDA0MSc6ICdBJyxcbiAgICAnVSswMDQyJzogJ0InLFxuICAgICdVKzAwNDMnOiAnQycsXG4gICAgJ1UrMDA0NCc6ICdEJyxcbiAgICAnVSswMDQ1JzogJ0UnLFxuICAgICdVKzAwNDYnOiAnRicsXG4gICAgJ1UrMDA0Nyc6ICdHJyxcbiAgICAnVSswMDQ4JzogJ0gnLFxuICAgICdVKzAwNDknOiAnSScsXG4gICAgJ1UrMDA0QSc6ICdKJyxcbiAgICAnVSswMDRCJzogJ0snLFxuICAgICdVKzAwNEMnOiAnTCcsXG4gICAgJ1UrMDA0RCc6ICdNJyxcbiAgICAnVSswMDRFJzogJ04nLFxuICAgICdVKzAwNEYnOiAnTycsXG4gICAgJ1UrMDA1MCc6ICdQJyxcbiAgICAnVSswMDUxJzogJ1EnLFxuICAgICdVKzAwNTInOiAnUicsXG4gICAgJ1UrMDA1Myc6ICdTJyxcbiAgICAnVSswMDU0JzogJ1QnLFxuICAgICdVKzAwNTUnOiAnVScsXG4gICAgJ1UrMDA1Nic6ICdWJyxcbiAgICAnVSswMDU3JzogJ1cnLFxuICAgICdVKzAwNTgnOiAnWCcsXG4gICAgJ1UrMDA1OSc6ICdZJyxcbiAgICAnVSswMDVBJzogJ1onLFxuICAgICdVKzAwMzAnOiAnKScsXG4gICAgJ1UrMDAzMSc6ICchJyxcbiAgICAnVSswMDMyJzogJ0AnLFxuICAgICdVKzAwMzMnOiAnIycsXG4gICAgJ1UrMDAzNCc6ICckJyxcbiAgICAnVSswMDM1JzogJyUnLFxuICAgICdVKzAwMzYnOiAnXicsXG4gICAgJ1UrMDAzNyc6ICcmJyxcbiAgICAnVSswMDM4JzogJyonLFxuICAgICdVKzAwMzknOiAnKCcsXG4gICAgJ1UrMDBDMCc6ICd+JyxcbiAgICAnVSswMEJEJzogJ18nLFxuICAgICdVKzAwQkInOiAnKycsXG4gICAgJ1UrMDBEQic6ICd7JyxcbiAgICAnVSswMEREJzogJ30nLFxuICAgICdVKzAwREMnOiAnfCcsXG4gICAgJ1UrMDBCQSc6ICc6JyxcbiAgICAnVSswMERFJzogJ1wiJyxcbiAgICAnVSswMEJDJzogJzwnLFxuICAgICdVKzAwQkUnOiAnPicsXG4gICAgJ1UrMDBCRic6ICc/JyxcbiAgICAnVSswMDIwJzogJyAnLFxuICAgICdVKzAwMDgnOiAnQmFja3NwYWNlJyxcbiAgICAnVSswMDc1JzogJ0RlbGV0ZScsXG4gICAgJ0Rvd24nICA6ICdBcnJvd0Rvd24nLFxuICAgICdFbnRlcicgOiAnRW50ZXInLFxuICAgICdMZWZ0JyAgOiAnQXJyb3dMZWZ0JyxcbiAgICAnUmlnaHQnIDogJ0Fycm93UmlnaHQnLFxuICAgICdVKzAwMjAnOiAnICcsXG4gICAgJ1UrMDAwOSc6ICdUYWInLFxuICAgICdVcCcgICAgOiAnQXJyb3dVcCdcbiAgfVxufTtcblxuZXhwb3J0IHsga2V5SWRlbnRpZmllckNoYXJ0cyB9O1xuIiwiaW1wb3J0IHsgVmlld3BvcnQgfSBmcm9tICcuLi9tb2RlbHMvYWN0aW9ucy92aWV3cG9ydCc7XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0KGFjdGlvbiwgY29uZmlnKSB7XG4gIGNvbnN0IGNvbW1hbmQgPSBhY3Rpb24ubmFtZTtcbiAgY29uc3Qgdmlld3BvcnQgPSBjb25maWcudmlld3BvcnQ7XG4gIHN3aXRjaCAoY29tbWFuZCkge1xuICAgIGNhc2UgJ2FkZENoYXInOlxuICAgICAgcmV0dXJuIFZpZXdwb3J0LmFkZENoYXIodmlld3BvcnQsIGFjdGlvbi5jaGFyKTtcbiAgICBjYXNlICdjb21wbGV0ZVdvcmQnOlxuICAgICAgcmV0dXJuIFZpZXdwb3J0LmNvbXBsZXRlV29yZCh2aWV3cG9ydCwgY29uZmlnLmdldENhbmRpZGF0ZXMpO1xuICAgIGNhc2UgJ25vT3AnOlxuICAgICAgcmV0dXJuIHZpZXdwb3J0O1xuICAgIGNhc2UgJ3N1Ym1pdCc6XG4gICAgICByZXR1cm4gVmlld3BvcnQuc3VibWl0KHZpZXdwb3J0LCBjb25maWcudHJhbnNmb3JtKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFZpZXdwb3J0W2NvbW1hbmRdKHZpZXdwb3J0KTtcbiAgfVxufVxuXG5leHBvcnQgeyBnZXRWaWV3cG9ydCB9O1xuIiwiaW1wb3J0IHsgZ2V0Vmlld3BvcnQgfSBmcm9tICcuL2dldFZpZXdwb3J0JztcbmltcG9ydCB7IGludGVycHJldEtleWRvd24gfSBmcm9tICcuL2NoYXJzL2ludGVycHJldEtleWRvd24nO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplQ29udHJvbChzdWJzY3JpYmUsIHJlbmRlciwgY29uZmlnKSB7XG4gIGNvbnN0IGhhbmRsZUV2ZW50ID0gZnVuY3Rpb24gKGdldEFjdGlvbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJlbmRlcihnZXRWaWV3cG9ydChnZXRBY3Rpb24oZXZlbnQpLCBjb25maWcpKTtcbiAgICB9O1xuICB9XG5cbiAgc3Vic2NyaWJlKCdrZXlkb3duJywgaGFuZGxlRXZlbnQoaW50ZXJwcmV0S2V5ZG93bikpO1xufVxuXG5leHBvcnQgeyBpbml0aWFsaXplQ29udHJvbCB9O1xuIiwiY29uc3QgX25vZGVJZCAgICAgPSAnI2VybC1jc3Mtc2Nyb2xsYmFyLXRlc3QtZGl2JztcbmNvbnN0IF9wcmVmaXhlcyAgID0gWyctd2Via2l0LScsICctbW96LScsICctby0nLCAnLW1zLSddO1xuY29uc3QgX3BzZXVkbyAgICAgPSAnOjonO1xuY29uc3QgX3Njcm9sbGJhciAgPSAnc2Nyb2xsYmFyJztcbmNvbnN0IF93aWR0aDEwcHggID0gJ3t3aWR0aDoxMHB4O30nO1xuXG5mdW5jdGlvbiBjcmVhdGVSdWxlKHByZWZpeCkge1xuICByZXR1cm4gX25vZGVJZCArIF9wc2V1ZG8gKyBwcmVmaXggKyBfc2Nyb2xsYmFyICsgX3dpZHRoMTBweDtcbn1cblxuZnVuY3Rpb24gX2RldGVjdENzc1Njcm9sbGJhcihzdHlsZVJ1bGUpIHtcbiAgY29uc3QgYm9keSA9IGdldEJvZHkoKTtcbiAgY29uc3QgZG9jRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9kZS5pZCA9ICdlcmwtY3NzLXNjcm9sbGJhci10ZXN0LWRpdic7XG4gIGRpdi5hcHBlbmRDaGlsZChub2RlKTtcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbiAgc3R5bGUuaWQgPSAnZXJsLWNzcy1zY3JvbGxiYXItdGVzdC1zdHlsZSc7XG4gIGNvbnN0IG5vbmNlTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGxiYXItbm9uY2UnKTtcbiAgY29uc3Qgbm9uY2UgPSBub25jZU5vZGUuZGF0YXNldFsnc2Nyb2xsYmFyTm9uY2UnXTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKTtcblxuICAoYm9keS5mYWtlID8gYm9keSA6IGRpdikuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHN0eWxlUnVsZTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHlsZVJ1bGUpKTtcbiAgfVxuXG4gIGRpdi5pZCA9ICdlcmwtY3NzLXNjcm9sbC10ZXN0JztcblxuICBpZiAoYm9keS5mYWtlKSB7XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIGNvbnN0IGRvY092ZXJmbG93ID0gZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdztcbiAgICBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgZG9jRWxlbWVudC5hcHBlbmRDaGlsZChib2R5KTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IGhhc0Nzc1Njcm9sbGJhcihub2RlLCAzMCk7XG5cbiAgaWYgKGJvZHkuZmFrZSkge1xuICAgIGJvZHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChib2R5KTtcbiAgICBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gZG9jT3ZlcmZsb3c7XG4gICAgZG9jRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gIH0gZWxzZSB7XG4gICAgZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGRldGVjdENzc1Njcm9sbGJhcigpIHtcbiAgY29uc3QgY3NzU2Nyb2xsYmFyID1cbiAgICBfbm9kZUlkICsgJ3tvdmVyZmxvdzpzY3JvbGw7d2lkdGg6NDBweDtoZWlnaHQ6NDBweDt9JyArXG4gICAgX3ByZWZpeGVzLm1hcChjcmVhdGVSdWxlKS5qb2luKCcnKSArXG4gICAgY3JlYXRlUnVsZSgnJyk7XG5cbiAgcmV0dXJuIF9kZXRlY3RDc3NTY3JvbGxiYXIoY3NzU2Nyb2xsYmFyKTtcbn1cblxuZnVuY3Rpb24gZ2V0Qm9keSgpIHtcbiAgbGV0IF9ib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICBpZiAoIV9ib2R5KSB7XG4gICAgY29uc3QgaXNTdmcgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2Zyc7XG4gICAgX2JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGlzU3ZnID8gJ3N2ZycgOiAnYm9keScpO1xuICAgIF9ib2R5LmZha2UgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF9ib2R5O1xufVxuXG5mdW5jdGlvbiBoYXNDc3NTY3JvbGxiYXIobm9kZSwgZXhwZWN0ZWRXaWR0aCkge1xuICByZXR1cm4gJ3Njcm9sbFdpZHRoJyBpbiBub2RlICYmIG5vZGUuc2Nyb2xsV2lkdGggPT09IGV4cGVjdGVkV2lkdGg7XG59XG5cbmV4cG9ydCB7IGRldGVjdENzc1Njcm9sbGJhciB9O1xuIiwiaW1wb3J0IHsgZGV0ZWN0Q3NzU2Nyb2xsYmFyIH0gIGZyb20gJy4vZGV0ZWN0Q3NzU2Nyb2xsYmFyJztcbmltcG9ydCB7IGdldEluaXRpYWxNb2RlbCB9ICAgICBmcm9tICcuL21vZGVscy9nZXRJbml0aWFsTW9kZWwnO1xuaW1wb3J0IHsgRVJMS0lORyB9ICAgICAgICAgICAgIGZyb20gJy4vdmlldy9yZWNyZWF0ZUNvbnNvbGUnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUNvbnRyb2wgfSAgIGZyb20gJy4vY29udHJvbC9pbml0aWFsaXplQ29udHJvbCc7XG5pbXBvcnQgeyBpbml0aWFsaXplVmlldyB9ICAgICAgZnJvbSAnLi92aWV3L2luaXRpYWxpemVWaWV3JztcbmltcG9ydCB7IHJlbmRlciB9ICAgICAgICAgICAgICBmcm9tICcuL3JlbmRlcic7XG5pbXBvcnQgeyBzY3JvbGwgfSAgICAgICAgICAgICAgZnJvbSAnLi92aWV3L3Njcm9sbCc7XG5pbXBvcnQgeyBzdWJzY3JpYmUgfSAgICAgICAgICAgZnJvbSAnLi9zdWJzY3JpYmUnO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplKGNvbmZpZykge1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLm5vZGVJZCk7XG4gIGNvbnN0IGluaXRpYWxNb2RlbCA9IGdldEluaXRpYWxNb2RlbCgpO1xuICBjb25zdCBwcm9tcHRMYWJlbCA9IGNvbmZpZy5wcm9tcHRMYWJlbDtcbiAgY29uc3QgbGFiZWxzID0geyBwcm9tcHRMYWJlbDogcHJvbXB0TGFiZWwgfTtcbiAgY29uc3Qgdmlld01vZGVsID0gRVJMS0lORyhsYWJlbHMsIGluaXRpYWxNb2RlbCk7XG5cbiAgaW5pdGlhbGl6ZVZpZXcocm9vdCwgdmlld01vZGVsKTtcblxuICBjb25zdCByb290Q2hpbGQgPSByb290LmNoaWxkTm9kZXNbMF07XG5cbiAgY29uc3QgY29udHJvbENvbmZpZyA9IHtcbiAgICBnZXRDYW5kaWRhdGVzOiBjb25maWcuZ2V0Q2FuZGlkYXRlcyxcbiAgICBwcm9tcHRMYWJlbDogcHJvbXB0TGFiZWwsXG4gICAgdHJhbnNmb3JtOiBjb25maWcudHJhbnNmb3JtLFxuICAgIHZpZXdwb3J0OiBpbml0aWFsTW9kZWxcbiAgfTtcblxuICBjb25zdCBjc3NTY3JvbGxiYXJEZXRlY3RlZCA9IGRldGVjdENzc1Njcm9sbGJhcigpO1xuXG4gIHNldFNjcm9sbGJhclZpc2liaWxpdHkoY3NzU2Nyb2xsYmFyRGV0ZWN0ZWQpO1xuXG4gIGNvbnN0IF9zY3JvbGwgPSBzY3JvbGwoY3NzU2Nyb2xsYmFyRGV0ZWN0ZWQpO1xuXG4gIGluaXRpYWxpemVDb250cm9sKFxuICAgIHN1YnNjcmliZSxcbiAgICByZW5kZXIodmlld01vZGVsLCByb290Q2hpbGQsIGNvbnRyb2xDb25maWcsIF9zY3JvbGwpLFxuICAgIGNvbnRyb2xDb25maWcpO1xufVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxiYXJWaXNpYmlsaXR5KGNzc1Njcm9sbGJhckRldGVjdGVkKSB7XG4gIGlmICghY3NzU2Nyb2xsYmFyRGV0ZWN0ZWQpIHtcbiAgICBjb25zdCB2aWV3cG9ydCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VybC12aWV3cG9ydCcpWzBdXG4gICAgdmlld3BvcnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgfVxufVxuXG5cbmV4cG9ydCB7IGluaXRpYWxpemUgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUZyYW1lIH0gZnJvbSAnLi4vdHlwZXMvY3JlYXRlRnJhbWUnO1xuXG5mdW5jdGlvbiBjbGVhcihmcmFtZSwgdGVybWluYWwpIHtcbiAgcmV0dXJuIGNyZWF0ZUZyYW1lKFxuICAgIDAsXG4gICAgdGVybWluYWwuZW50cmllcy5sZW5ndGgsXG4gICAgZnJhbWUucHJvbXB0SW5kZXgpO1xufVxuXG5mdW5jdGlvbiBmYXN0Rm9yd2FyZChmcmFtZSkge1xuICByZXR1cm4gY3JlYXRlRnJhbWUoXG4gICAgZnJhbWUub2Zmc2V0LFxuICAgIGZyYW1lLnN0YXJ0LFxuICAgIGZyYW1lLnByb21wdEluZGV4ID4gMFxuICAgICAgPyBmcmFtZS5wcm9tcHRJbmRleCAtIDFcbiAgICAgIDogZnJhbWUucHJvbXB0SW5kZXgpO1xufVxuXG5mdW5jdGlvbiByZXNldFByb21wdEluZGV4KGZyYW1lKSB7XG4gIHJldHVybiBjcmVhdGVGcmFtZShcbiAgICBmcmFtZS5vZmZzZXQsXG4gICAgZnJhbWUuc3RhcnQsXG4gICAgMCk7XG59XG5cbmZ1bmN0aW9uIHJld2luZChmcmFtZSwgdGVybWluYWwpIHtcbiAgcmV0dXJuIGNyZWF0ZUZyYW1lKFxuICAgIGZyYW1lLm9mZnNldCxcbiAgICBmcmFtZS5zdGFydCxcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLmxlbmd0aCA+IGZyYW1lLnByb21wdEluZGV4XG4gICAgICA/IGZyYW1lLnByb21wdEluZGV4ICsgMVxuICAgICAgOiBmcmFtZS5wcm9tcHRJbmRleCk7XG59XG5cbmV4cG9ydCBjb25zdCBGcmFtZSA9IHtcbiAgY2xlYXIsXG4gIGZhc3RGb3J3YXJkLFxuICByZXNldFByb21wdEluZGV4LFxuICByZXdpbmRcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVUZXJtaW5hbCB9IGZyb20gJy4uL3R5cGVzL2NyZWF0ZVRlcm1pbmFsJztcbmltcG9ydCB7IGNyZWF0ZVByb21wdCB9IGZyb20gJy4uL3R5cGVzL2NyZWF0ZVByb21wdCc7XG5cbmZ1bmN0aW9uIGFkZENoYXIodGVybWluYWwsIGNoYXIpIHtcbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgIHRlcm1pbmFsLmVudHJpZXMsXG4gICAgdGVybWluYWwucHJvbXB0cyxcbiAgICBjcmVhdGVQcm9tcHQoXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucHJlQ3Vyc29yICsgY2hhcixcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlV29yZCh0ZXJtaW5hbCwgZ2V0Q2FuZGlkYXRlcykge1xuICBjb25zdCBfZ2V0Q2FuZGlkYXRlcyA9IChnZXRDYW5kaWRhdGVzID09IG51bGwpXG4gICAgPyBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8gY291cGxpbmcgdG8gbGlzcCBpbXBsZW1lbnRhdGlvblxuICAgICAgICByZXR1cm4gW3sgZWZmZWN0OiBmYWxzZSwgdmFsdWU6IHZhbHVlIH1dO1xuICAgICAgfVxuICAgIDogZ2V0Q2FuZGlkYXRlcztcblxuICBjb25zdCBjb21tYW5kVGV4dCA9IHRlcm1pbmFsLnByb21wdC5wcmVDdXJzb3I7XG4gIGNvbnN0IHNwbGl0Q29tbWFuZCA9IGdldFByZWZpeChjb21tYW5kVGV4dCk7XG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBfZ2V0Q2FuZGlkYXRlcyhzcGxpdENvbW1hbmRbMV0pO1xuICBjb25zdCBsZW5ndGggPSBjYW5kaWRhdGVzLmxlbmd0aDtcblxuICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRlcm1pbmFsO1xuICB9XG5cbiAgbGV0IGVudHJpZXM7XG4gIGxldCBwcm9tcHQ7XG5cbiAgaWYgKGxlbmd0aCA9PT0gMSkge1xuICAgIGVudHJpZXMgPSB0ZXJtaW5hbC5lbnRyaWVzO1xuICAgIHByb21wdCA9IGNyZWF0ZVByb21wdChcbiAgICAgIHNwbGl0Q29tbWFuZFswXSArIGNhbmRpZGF0ZXNbMF0gKyAnICcgKyB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcixcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yKTtcbiAgfSBlbHNlIHtcbiAgICBlbnRyaWVzID0gdGVybWluYWwuZW50cmllcy5jb25jYXQoXG4gICAgICBbeyB0eXBlOiAnY29tbWFuZCcsIHZhbHVlOiBleHRyYWN0Q29tbWFuZCh0ZXJtaW5hbC5wcm9tcHQpIH1dLFxuICAgICAgW3sgdHlwZTogJ2NvbXBsZXRpb24nLCB2YWx1ZTogY2FuZGlkYXRlcy5qb2luKCcgJykgfV0pO1xuICAgIHByb21wdCA9IHRlcm1pbmFsLnByb21wdDtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChlbnRyaWVzLCB0ZXJtaW5hbC5wcm9tcHRzLCBwcm9tcHQpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVMZWZ0Q2hhcih0ZXJtaW5hbCkge1xuICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgdGVybWluYWwuZW50cmllcywgXG4gICAgdGVybWluYWwucHJvbXB0cyxcbiAgICBjcmVhdGVQcm9tcHQoXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucHJlQ3Vyc29yLnNsaWNlKDAsIC0xKSxcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByZUN1cnNvcih0ZXJtaW5hbCkge1xuICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgdGVybWluYWwuZW50cmllcywgXG4gICAgdGVybWluYWwucHJvbXB0cywgXG4gICAgY3JlYXRlUHJvbXB0KCcnLCB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcikpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVSaWdodENoYXIodGVybWluYWwpIHtcbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgIHRlcm1pbmFsLmVudHJpZXMsIFxuICAgIHRlcm1pbmFsLnByb21wdHMsIFxuICAgIGNyZWF0ZVByb21wdChcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wcmVDdXJzb3IsXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvci5zbGljZSgxKSkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVXb3JkKHRlcm1pbmFsKSB7XG4gIGNvbnN0IHByZUN1cnNvciA9IHRlcm1pbmFsLnByb21wdC5wcmVDdXJzb3I7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLCBcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLCBcbiAgICBjcmVhdGVQcm9tcHQoXG4gICAgICBwcmVDdXJzb3Iuc2xpY2UoMCwgcHJlQ3Vyc29yLnNsaWNlKDAsIC0xKS5sYXN0SW5kZXhPZignICcpICsgMSksXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcikpO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0Q29tbWFuZChwcm9tcHQpIHtcbiAgcmV0dXJuIChwcm9tcHQucHJlQ3Vyc29yICsgcHJvbXB0LnBvc3RDdXJzb3IpLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbkFycmF5KGFycmF5KSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcnJheSk7XG59XG5cbmZ1bmN0aW9uIGdldFByZWZpeChjb21tYW5kKSB7XG4gIGNvbnN0IHJlZ2V4ID0gL14oLipbXFxzXFwoXFwpXFxbXFxdXSkoW15cXChcXClcXFtcXF1dKikvO1xuICBjb25zdCBtYXRjaCA9IHJlZ2V4LmV4ZWMoY29tbWFuZCk7XG4gIHJldHVybiBtYXRjaCA9PSBudWxsXG4gICAgPyBbJycsIGNvbW1hbmRdXG4gICAgOiBbbWF0Y2hbMV0sIG1hdGNoWzJdXTtcbn1cblxuZnVuY3Rpb24gbW92ZUN1cnNvckxlZnQodGVybWluYWwpIHtcbiAgY29uc3QgcHJlQ3Vyc29yID0gdGVybWluYWwucHJvbXB0LnByZUN1cnNvcjtcbiAgY29uc3QgcHJlQ3Vyc29yTGVuZ3RoID0gcHJlQ3Vyc29yLmxlbmd0aDtcbiAgaWYgKHByZUN1cnNvckxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0ZXJtaW5hbDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwb3N0Q3Vyc29yID0gdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3I7XG4gICAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgICAgdGVybWluYWwuZW50cmllcyxcbiAgICAgIHRlcm1pbmFsLnByb21wdHMsXG4gICAgICBjcmVhdGVQcm9tcHQoXG4gICAgICAgIHByZUN1cnNvci5zbGljZSgwLCAtMSksXG4gICAgICAgIHByZUN1cnNvcltwcmVDdXJzb3JMZW5ndGggLSAxXSArIHBvc3RDdXJzb3IpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlQ3Vyc29yUmlnaHQodGVybWluYWwpIHtcbiAgY29uc3QgcG9zdEN1cnNvciA9IHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yO1xuICBpZiAocG9zdEN1cnNvci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdGVybWluYWw7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcHJlQ3Vyc29yID0gdGVybWluYWwucHJvbXB0LnByZUN1cnNvcjtcbiAgICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgICB0ZXJtaW5hbC5lbnRyaWVzLFxuICAgICAgdGVybWluYWwucHJvbXB0cyxcbiAgICAgIGNyZWF0ZVByb21wdChcbiAgICAgICAgcHJlQ3Vyc29yICsgcG9zdEN1cnNvclswXSxcbiAgICAgICAgcG9zdEN1cnNvci5zbGljZSgxKSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdmVDdXJzb3JUb0VuZCh0ZXJtaW5hbCkge1xuICBjb25zdCBwcm9tcHQgPSB0ZXJtaW5hbC5wcm9tcHQ7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLFxuICAgIHRlcm1pbmFsLnByb21wdHMsXG4gICAgY3JlYXRlUHJvbXB0KHByb21wdC5wcmVDdXJzb3IgKyBwcm9tcHQucG9zdEN1cnNvciwgJycpKTtcbn1cblxuZnVuY3Rpb24gbW92ZUN1cnNvclRvU3RhcnQodGVybWluYWwpIHtcbiAgY29uc3QgcHJvbXB0ID0gdGVybWluYWwucHJvbXB0O1xuICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgdGVybWluYWwuZW50cmllcyxcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLFxuICAgIGNyZWF0ZVByb21wdCgnJywgcHJvbXB0LnByZUN1cnNvciArIHByb21wdC5wb3N0Q3Vyc29yKSk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb21wdChwcm9tcHQpIHtcbiAgcmV0dXJuIGNyZWF0ZVByb21wdChleHRyYWN0Q29tbWFuZChwcm9tcHQpLCAnJyk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdCh0ZXJtaW5hbCwgdHJhbnNmb3JtKSB7XG4gIGxldCBuZXdDYWNoZWRQcm9tcHRNYXliZTtcbiAgbGV0IG5ld0Z1dHVyZTtcblxuICBjb25zdCBfdHJhbnNmb3JtID0gKHRyYW5zZm9ybSA9PSBudWxsKVxuICAgID8gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIGNvdXBsaW5nIHRvIGxpc3AgaW1wbGVtZW50YXRpb25cbiAgICAgICAgcmV0dXJuIFt7IGVmZmVjdDogZmFsc2UsIHZhbHVlOiB2YWx1ZSB9XTtcbiAgICAgIH1cbiAgICA6IHRyYW5zZm9ybTtcblxuICBjb25zdCBjb21tYW5kVGV4dCA9IGV4dHJhY3RDb21tYW5kKHRlcm1pbmFsLnByb21wdCk7XG4gIGNvbnN0IHJlc3VsdHMgPSBfdHJhbnNmb3JtKGNvbW1hbmRUZXh0KTtcbiAgY29uc3QgX2Rpc3BsYXlFbnRyaWVzID0gcmVzdWx0c1xuICAgIC5zbGljZSgwLCAtMSlcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIChyZXN1bHQpIHsgcmV0dXJuIHJlc3VsdC5lZmZlY3QudHlwZSA9PT0gJ2Rpc3BsYXknOyB9KVxuICAgIC5tYXAoZnVuY3Rpb24gKGRpc3BsYXkpIHtcbiAgICAgIHJldHVybiBkaXNwbGF5LnZhbHVlLnNwbGl0KFwiXFxcXFxcXFxuXCIpLm1hcChmdW5jdGlvbiAobGluZSkge1xuICAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2Rpc3BsYXknLCB2YWx1ZTogbGluZSB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gIGNvbnN0IGRpc3BsYXlFbnRyaWVzID0gZmxhdHRlbkFycmF5KF9kaXNwbGF5RW50cmllcyk7XG5cbiAgY29uc3QgbGFzdFJlc3VsdCA9IHJlc3VsdHNbcmVzdWx0cy5sZW5ndGggLSAxXTtcbiAgY29uc3QgcmVzcG9uc2UgPSAobGFzdFJlc3VsdC52YWx1ZSAhPSBudWxsKVxuICAgID8gW3sgdHlwZTogJ3Jlc3BvbnNlJywgdmFsdWU6IGxhc3RSZXN1bHQudmFsdWUgfV1cbiAgICA6IFtdO1xuXG4gIGNvbnN0IGNvbW1hbmQgPSB7IHR5cGU6ICdjb21tYW5kJywgdmFsdWU6IGNvbW1hbmRUZXh0IH07XG4gIGNvbnN0IHByb21wdCA9IG5vcm1hbGl6ZVByb21wdCh0ZXJtaW5hbC5wcm9tcHQpO1xuXG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLmNvbmNhdChbY29tbWFuZF0sIGRpc3BsYXlFbnRyaWVzLCByZXNwb25zZSksXG4gICAgW3Byb21wdF0uY29uY2F0KHRlcm1pbmFsLnByb21wdHMpLFxuICAgIGNyZWF0ZVByb21wdCgnJywgJycpKTtcbn1cblxuZXhwb3J0IGNvbnN0IFRlcm1pbmFsID0ge1xuICBhZGRDaGFyLFxuICBjb21wbGV0ZVdvcmQsXG4gIGRlbGV0ZUxlZnRDaGFyLFxuICBkZWxldGVQcmVDdXJzb3IsXG4gIGRlbGV0ZVJpZ2h0Q2hhcixcbiAgZGVsZXRlV29yZCxcbiAgbW92ZUN1cnNvckxlZnQsXG4gIG1vdmVDdXJzb3JSaWdodCxcbiAgbW92ZUN1cnNvclRvRW5kLFxuICBtb3ZlQ3Vyc29yVG9TdGFydCxcbiAgc3VibWl0XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlVmlld3BvcnQgfSBmcm9tICcuLi90eXBlcy9jcmVhdGVWaWV3cG9ydCc7XG5pbXBvcnQgeyBjcmVhdGVGcmFtZSB9IGZyb20gJy4uL3R5cGVzL2NyZWF0ZUZyYW1lJztcbmltcG9ydCB7IGNyZWF0ZVRlcm1pbmFsIH0gZnJvbSAnLi4vdHlwZXMvY3JlYXRlVGVybWluYWwnO1xuaW1wb3J0IHsgRnJhbWUgfSBmcm9tICcuL2ZyYW1lJztcbmltcG9ydCB7IFRlcm1pbmFsIH0gZnJvbSAnLi90ZXJtaW5hbCc7XG5cbmZ1bmN0aW9uIGFkZENoYXIodmlld3BvcnQsIGNoYXIpIHtcbiAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgIFRlcm1pbmFsLmFkZENoYXIodmlld3BvcnQudGVybWluYWwsIGNoYXIpLFxuICAgIHZpZXdwb3J0LmZyYW1lKTtcbn1cblxuZnVuY3Rpb24gY29tcGxldGVXb3JkKHZpZXdwb3J0LCBnZXRDYW5kaWRhdGVzKSB7XG4gIGNvbnN0IGZyYW1lID0gdmlld3BvcnQuZnJhbWU7XG4gIGNvbnN0IG5ld1Rlcm1pbmFsID1cbiAgICBUZXJtaW5hbC5jb21wbGV0ZVdvcmQocmVmcmVzaFRlcm1pbmFsKHZpZXdwb3J0KSwgZ2V0Q2FuZGlkYXRlcyk7XG4gIGNvbnN0IGRpZmYgPSBuZXdUZXJtaW5hbC5lbnRyaWVzLmxlbmd0aCAtIHZpZXdwb3J0LnRlcm1pbmFsLmVudHJpZXMubGVuZ3RoO1xuICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgbmV3VGVybWluYWwsXG4gICAgY3JlYXRlRnJhbWUoXG4gICAgICBmcmFtZS5vZmZzZXQgKyBkaWZmLFxuICAgICAgZnJhbWUuc3RhcnQsXG4gICAgICAwKSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyKHZpZXdwb3J0KSB7XG4gIGNvbnN0IHRlcm1pbmFsID0gdmlld3BvcnQudGVybWluYWw7XG4gIHJldHVybiBjcmVhdGVWaWV3cG9ydChcbiAgICB0ZXJtaW5hbCxcbiAgICBGcmFtZS5jbGVhcih2aWV3cG9ydC5mcmFtZSwgdGVybWluYWwpKTtcbn1cblxuZnVuY3Rpb24gZmFzdEZvcndhcmQodmlld3BvcnQpIHtcbiAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgIHZpZXdwb3J0LnRlcm1pbmFsLFxuICAgIEZyYW1lLmZhc3RGb3J3YXJkKHZpZXdwb3J0LmZyYW1lKSk7XG59XG5cbmZ1bmN0aW9uIG1vZGlmeVRlcm1pbmFsKGZuTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHZpZXdwb3J0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgICAgVGVybWluYWxbZm5OYW1lXShyZWZyZXNoVGVybWluYWwodmlld3BvcnQpKSxcbiAgICAgIEZyYW1lLnJlc2V0UHJvbXB0SW5kZXgodmlld3BvcnQuZnJhbWUpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVmcmVzaFRlcm1pbmFsKHZpZXdwb3J0KSB7XG4gIGNvbnN0IHRlcm1pbmFsID0gdmlld3BvcnQudGVybWluYWw7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbCh0ZXJtaW5hbC5lbnRyaWVzLCB0ZXJtaW5hbC5wcm9tcHRzLCB2aWV3cG9ydC5wcm9tcHQpO1xufVxuXG5mdW5jdGlvbiByZXdpbmQodmlld3BvcnQpIHtcbiAgY29uc3QgdGVybWluYWwgPSB2aWV3cG9ydC50ZXJtaW5hbDtcbiAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgIHRlcm1pbmFsLFxuICAgIEZyYW1lLnJld2luZCh2aWV3cG9ydC5mcmFtZSwgdGVybWluYWwpKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0KHZpZXdwb3J0LCB0cmFuc2Zvcm0pIHtcbiAgY29uc3QgZnJhbWUgPSB2aWV3cG9ydC5mcmFtZTtcbiAgY29uc3QgbmV3VGVybWluYWwgPSBUZXJtaW5hbC5zdWJtaXQocmVmcmVzaFRlcm1pbmFsKHZpZXdwb3J0KSwgdHJhbnNmb3JtKTtcbiAgY29uc3QgZGlmZiA9IG5ld1Rlcm1pbmFsLmVudHJpZXMubGVuZ3RoIC0gdmlld3BvcnQudGVybWluYWwuZW50cmllcy5sZW5ndGg7XG4gIHJldHVybiBjcmVhdGVWaWV3cG9ydChcbiAgICBuZXdUZXJtaW5hbCxcbiAgICBjcmVhdGVGcmFtZShcbiAgICAgIGZyYW1lLm9mZnNldCArIGRpZmYsXG4gICAgICBmcmFtZS5zdGFydCxcbiAgICAgIDApKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZpZXdwb3J0ID0ge1xuICBhZGRDaGFyLFxuICBjbGVhcixcbiAgY29tcGxldGVXb3JkLFxuICBkZWxldGVMZWZ0Q2hhcjogbW9kaWZ5VGVybWluYWwoJ2RlbGV0ZUxlZnRDaGFyJyksXG4gIGRlbGV0ZVByZUN1cnNvcjogbW9kaWZ5VGVybWluYWwoJ2RlbGV0ZVByZUN1cnNvcicpLFxuICBkZWxldGVSaWdodENoYXI6IG1vZGlmeVRlcm1pbmFsKCdkZWxldGVSaWdodENoYXInKSxcbiAgZGVsZXRlV29yZDogbW9kaWZ5VGVybWluYWwoJ2RlbGV0ZVdvcmQnKSxcbiAgZmFzdEZvcndhcmQsXG4gIG1vdmVDdXJzb3JMZWZ0OiBtb2RpZnlUZXJtaW5hbCgnbW92ZUN1cnNvckxlZnQnKSxcbiAgbW92ZUN1cnNvclJpZ2h0OiBtb2RpZnlUZXJtaW5hbCgnbW92ZUN1cnNvclJpZ2h0JyksXG4gIG1vdmVDdXJzb3JUb0VuZDogbW9kaWZ5VGVybWluYWwoJ21vdmVDdXJzb3JUb0VuZCcpLFxuICBtb3ZlQ3Vyc29yVG9TdGFydDogbW9kaWZ5VGVybWluYWwoJ21vdmVDdXJzb3JUb1N0YXJ0JyksXG4gIHJld2luZCxcbiAgc3VibWl0XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVGcmFtZSB9IGZyb20gJy4vdHlwZXMvY3JlYXRlRnJhbWUnO1xuaW1wb3J0IHsgY3JlYXRlUHJvbXB0IH0gZnJvbSAnLi90eXBlcy9jcmVhdGVQcm9tcHQnO1xuaW1wb3J0IHsgY3JlYXRlVGVybWluYWwgfSBmcm9tICcuL3R5cGVzL2NyZWF0ZVRlcm1pbmFsJztcbmltcG9ydCB7IGNyZWF0ZVZpZXdwb3J0IH0gZnJvbSAnLi90eXBlcy9jcmVhdGVWaWV3cG9ydCc7XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxNb2RlbCgpIHtcbiAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgIGNyZWF0ZVRlcm1pbmFsKFtdLCBbXSwgY3JlYXRlUHJvbXB0KCcnLCAnJykpLFxuICAgIGNyZWF0ZUZyYW1lKDAsIDAsIDApKTtcbn1cblxuZXhwb3J0IHsgZ2V0SW5pdGlhbE1vZGVsIH07XG4iLCJleHBvcnQgY29uc3QgY3JlYXRlRnJhbWUgPSBmdW5jdGlvbiAob2Zmc2V0LCBzdGFydCwgcHJvbXB0SW5kZXgpIHtcbiAgcmV0dXJuIHtcbiAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICBzdGFydDogc3RhcnQsXG4gICAgcHJvbXB0SW5kZXg6IHByb21wdEluZGV4XG4gIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZVByb21wdCA9IGZ1bmN0aW9uIChwcmVDdXJzb3IsIHBvc3RDdXJzb3IpIHtcbiAgcmV0dXJuIHtcbiAgICBwcmVDdXJzb3I6IHByZUN1cnNvcixcbiAgICBwb3N0Q3Vyc29yOiBwb3N0Q3Vyc29yXG4gIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZVRlcm1pbmFsID0gIGZ1bmN0aW9uIChlbnRyaWVzLCBwcm9tcHRzLCBjdXJyZW50UHJvbXB0KSB7XG4gIHJldHVybiAge1xuICAgIGVudHJpZXM6IGVudHJpZXMsXG4gICAgcHJvbXB0czogcHJvbXB0cyxcbiAgICBwcm9tcHQ6IGN1cnJlbnRQcm9tcHRcbiAgfTtcbn07XG4iLCJmdW5jdGlvbiBnZXRQcm9tcHQodGVybWluYWwsIGZyYW1lKSB7XG4gIHJldHVybiBmcmFtZS5wcm9tcHRJbmRleCA9PT0gMFxuICAgID8gdGVybWluYWwucHJvbXB0XG4gICAgOiB0ZXJtaW5hbC5wcm9tcHRzW2ZyYW1lLnByb21wdEluZGV4IC0gMV07XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVWaWV3cG9ydCA9IGZ1bmN0aW9uICh0ZXJtaW5hbCwgZnJhbWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0ZXJtaW5hbDogdGVybWluYWwsXG4gICAgZnJhbWU6IGZyYW1lLFxuICAgIHByb21wdDogZ2V0UHJvbXB0KHRlcm1pbmFsLCBmcmFtZSlcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBkaWZmIH0gZnJvbSAnLi4vcmlib3NvbWUvZGlmZic7XG5pbXBvcnQgeyBFUkxLSU5HIH0gZnJvbSAnLi92aWV3L3JlY3JlYXRlQ29uc29sZSc7XG5pbXBvcnQgeyBtb2RpZnlFbGVtZW50IH0gZnJvbSAnLi4vcmlib3NvbWUvaW50ZXJwcmV0ZXInO1xuXG5mdW5jdGlvbiByZW5kZXIoX3ZpZXdNb2RlbCwgcm9vdENoaWxkLCBjb250cm9sQ29uZmlnLCBzY3JvbGwpIHtcbiAgbGV0IHZpZXdNb2RlbCA9IF92aWV3TW9kZWw7XG4gIHJldHVybiBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB7IHByb21wdExhYmVsOiBjb250cm9sQ29uZmlnLnByb21wdExhYmVsIH07XG4gICAgY29uc3QgbmV3Vmlld01vZGVsID0gRVJMS0lORyhsYWJlbHMsIG1vZGVsKTtcbiAgICBtb2RpZnlFbGVtZW50KHJvb3RDaGlsZCwgZGlmZihuZXdWaWV3TW9kZWwsIHZpZXdNb2RlbCkpO1xuXG4gICAgY29udHJvbENvbmZpZy52aWV3cG9ydCA9IG1vZGVsO1xuICAgIHZpZXdNb2RlbCA9IG5ld1ZpZXdNb2RlbDtcblxuICAgIHNjcm9sbCgpO1xuICB9O1xufVxuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImZ1bmN0aW9uIHN1YnNjcmliZShldmVudFR5cGUsIGV2ZW50SGFuZGxlcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIHN1cHJlc3NEZWZhdWx0KGV2ZW50SGFuZGxlcikpO1xufVxuXG5mdW5jdGlvbiBzdXByZXNzRGVmYXVsdChoYW5kbGVFdmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBoYW5kbGVFdmVudChldmVudCk7XG4gIH07XG59XG5cbmV4cG9ydCB7IHN1YnNjcmliZSB9O1xuIiwiaW1wb3J0IHsgU1BBTiB9IGZyb20gJy4uLy4uL3JpYm9zb21lL2VsZW1lbnRzJztcblxuZnVuY3Rpb24gRVJMX0VOVFJZKHRleHQpIHtcbiAgcmV0dXJuIFNQQU4oX2VudHJ5Q29uZmlnLCB0ZXh0ICsgbmV3bGluZSk7XG59XG5cbmZ1bmN0aW9uIEVSTF9JTlBVVChwcm9tcHRUZXh0LCBwcmVUZXh0LCBwb3N0VGV4dCkge1xuICByZXR1cm4gU1BBTihcbiAgICBfaW5wdXRDb25maWcsXG4gICAgRVJMX1BST01QVChwcm9tcHRUZXh0KSxcbiAgICBFUkxfUFJFKHByZVRleHQpLFxuICAgIEVSTF9DVVJTT1IsXG4gICAgRVJMX1BPU1QocG9zdFRleHQpKTtcbn1cblxuZnVuY3Rpb24gRVJMX1BPU1QodGV4dCkge1xuICByZXR1cm4gU1BBTihfcG9zdENvbmZpZywgdGV4dCk7XG59XG5cbmZ1bmN0aW9uIEVSTF9QUkUodGV4dCkge1xuICByZXR1cm4gU1BBTihfcHJlQ29uZmlnLCB0ZXh0KTtcbn1cblxuZnVuY3Rpb24gRVJMX1BST01QVCh0ZXh0KSB7XG4gIHJldHVybiBTUEFOKF9wcm9tcHRDb25maWcsIHRleHQpO1xufVxuXG5jb25zdCBlbXB0eVN0cmluZyA9ICcnO1xuY29uc3QgbmV3bGluZSA9ICdcXG4nO1xuY29uc3Qgc3BhY2UgPSAnICc7XG5jb25zdCB1bmRlcnNjb3JlID0gJ18nO1xuXG5jb25zdCBFUkxfQ1VSU09SID0gU1BBTihcbiAge1xuICAgIGlkOiAnZXJsLWN1cnNvcicsXG4gICAgY2xhc3NlczogeyAnZXJsLWN1cnNvcic6IHRydWUsICdlcmwtY3Vyc29yJzogdHJ1ZSB9LFxuICB9LFxuICB1bmRlcnNjb3JlKTtcblxuY29uc3QgX2VudHJ5Q29uZmlnID0ge1xuICBjbGFzc2VzOiB7ICdlcmwtZW50cnknOiB0cnVlLCAnZXJsLWxpbmUnOiB0cnVlIH0sXG59O1xuXG5jb25zdCBfaW5wdXRDb25maWcgPSB7XG4gIGlkOiAnZXJsLWlucHV0JyxcbiAgY2xhc3NlczogeyAnZXJsLWlucHV0JzogdHJ1ZSwgJ2VybC1saW5lJzogdHJ1ZSB9XG59O1xuXG5jb25zdCBfcG9zdENvbmZpZyA9IHtcbiAgaWQ6ICdlcmwtcG9zdCcsXG4gIGNsYXNzZXM6IHsgJ2VybC1wb3N0JzogdHJ1ZSB9LFxuICBzdHlsZTogeyAncG9zaXRpb24nOiAncmVsYXRpdmUnIH1cbn07XG5cbmNvbnN0IF9wcmVDb25maWcgPSB7XG4gICBpZDogJ2VybC1wcmUnLFxuICAgY2xhc3NlczogeyAnZXJsLXByZSc6IHRydWUgfVxufTtcblxuY29uc3QgX3Byb21wdENvbmZpZyA9IHtcbiAgaWQ6ICdlcmwtcHJvbXB0JyxcbiAgY2xhc3NlczogeyAnZXJsLXByb21wdCc6IHRydWUsICdlcmwtcHJvbXB0JzogdHJ1ZSB9XG59O1xuXG5leHBvcnQge1xuICBFUkxfQ1VSU09SLFxuICBFUkxfRU5UUlksXG4gIEVSTF9JTlBVVCxcbiAgRVJMX1BPU1QsXG4gIEVSTF9QUkUsXG4gIEVSTF9QUk9NUFRcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVBbmRBdHRhY2hFbGVtZW50IH0gZnJvbSAnLi4vLi4vcmlib3NvbWUvaW50ZXJwcmV0ZXInO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplVmlldyhyb290LCB2aWV3TW9kZWwpIHtcbiAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudChyb290LCB2aWV3TW9kZWwpO1xufVxuXG5leHBvcnQgeyBpbml0aWFsaXplVmlldyB9O1xuIiwiaW1wb3J0IHtcbiAgRVJMX0NVUlNPUixcbiAgRVJMX0VOVFJZLFxuICBFUkxfSU5QVVQsXG4gIEVSTF9QT1NULFxuICBFUkxfUFJFLFxuICBFUkxfUFJPTVBUXG59IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmltcG9ydCB7XG4gIERJVixcbiAgSDEsXG4gIEg0LFxuICBTRUNUSU9OLFxuICBTUEFOXG59IGZyb20gJy4uLy4uL3JpYm9zb21lL2VsZW1lbnRzJztcblxuY29uc3QgRVJMX0hFQURFUiA9IFNFQ1RJT04oXG4gICAge1xuICAgICAgaWQ6ICdlcmwtaGVhZGVyJyxcbiAgICAgIGNsYXNzZXM6IHsgJ2hlYWQnOiB0cnVlIH1cbiAgICB9LFxuICAgIEgxKG51bGwsICdFcmxrw7ZuaWcgTGlzcCBDb25zb2xlXFxuJyksXG4gICAgSDQobnVsbCwgJ0EgdGVybWluYWwgZW11bGF0b3IgYW5kIGxpc3AgaW50ZXJwcmV0ZXJcXG4nKSk7XG5cbmNvbnN0IGVtcHR5U3RyaW5nID0gJyc7XG5cbmZ1bmN0aW9uIEVSTEtJTkcocHJlZml4ZXMsIHZpZXdwb3J0KSB7XG4gIGNvbnN0IHByb21wdExhYmVsID0gcHJlZml4ZXMucHJvbXB0TGFiZWw7XG4gIGNvbnN0IHByb21wdCA9IHZpZXdwb3J0LnByb21wdDtcbiAgY29uc3QgZnJhbWUgPSB2aWV3cG9ydC5mcmFtZTtcblxuICBjb25zdCBlbnRyaWVzID0gdmlld3BvcnQudGVybWluYWwuZW50cmllc1xuICAgIC5zbGljZShmcmFtZS5zdGFydCwgZnJhbWUuc3RhcnQgKyBmcmFtZS5vZmZzZXQpXG4gICAgLm1hcChzcGVjaWZ5RW50cnkuYmluZChudWxsLCBwcmVmaXhlcykpO1xuXG4gIGNvbnN0IHByZUN1cnNvciA9IHByb21wdC5wcmVDdXJzb3IgIT0gbnVsbCA/IHByb21wdC5wcmVDdXJzb3IgOiBlbXB0eVN0cmluZztcbiAgY29uc3QgcG9zdEN1cnNvciA9IHByb21wdC5wb3N0Q3Vyc29yICE9IG51bGwgPyBwcm9tcHQucG9zdEN1cnNvciA6IGVtcHR5U3RyaW5nO1xuXG4gIHJldHVybiBESVYoXG4gICAgX2VybGtvbmlnQ29uZmlnLFxuICAgIERJVihcbiAgICAgIG51bGwsXG4gICAgICBFUkxfSEVBREVSLFxuICAgICAgRElWKFxuICAgICAgICBfdGVybWluYWxDb25maWcsXG4gICAgICAgIFhfU0NST0xMQkFSLFxuICAgICAgICBZX1NDUk9MTEJBUixcbiAgICAgICAgRElWKFxuICAgICAgICAgIF9lcmxWaWV3cG9ydENvbmZpZyxcbiAgICAgICAgICBlbnRyaWVzLFxuICAgICAgICAgIEVSTF9JTlBVVChwcm9tcHRMYWJlbCwgcHJvbXB0LnByZUN1cnNvciwgcHJvbXB0LnBvc3RDdXJzb3IpKSkpKTtcbn1cblxuY29uc3QgWF9TQ1JPTExCQVIgPSBESVYoXG4gIHtcbiAgICBpZDogJ2VybC14LXNjcm9sbC10cmFjaycsXG4gICAgY2xhc3Nlczoge1xuICAgICAgJ2VybC14LXNjcm9sbC10cmFjayc6IHRydWUsXG4gICAgICAnZXJsLXNjcm9sbC10cmFjayc6IHRydWVcbiAgICB9XG4gIH0sXG4gIERJVih7XG4gICAgaWQ6ICdlcmwteC1zY3JvbGwtdGh1bWInLFxuICAgIGNsYXNzZXM6IHtcbiAgICAgICdlcmwteC1zY3JvbGwtdGh1bWInOiB0cnVlLFxuICAgICAgJ2VybC1zY3JvbGwtdGh1bWInOiB0cnVlXG4gICAgfVxuICB9KSk7XG5cbmNvbnN0IFlfU0NST0xMQkFSID0gRElWKFxuICB7XG4gICAgaWQ6ICdlcmwteS1zY3JvbGwtdHJhY2snLFxuICAgIGNsYXNzZXM6IHtcbiAgICAgICdlcmwteS1zY3JvbGwtdHJhY2snOiB0cnVlLFxuICAgICAgJ2VybC1zY3JvbGwtdHJhY2snOiB0cnVlXG4gICAgfVxuICB9LFxuICBESVYoe1xuICAgIGlkOiAnZXJsLXktc2Nyb2xsLXRodW1iJyxcbiAgICBjbGFzc2VzOiB7XG4gICAgICAnZXJsLXktc2Nyb2xsLXRodW1iJzogdHJ1ZSxcbiAgICAgICdlcmwtc2Nyb2xsLXRodW1iJzogdHJ1ZVxuICAgIH1cbiAgfSkpO1xuXG5jb25zdCBkZWZhdWx0Q29tcGxldGlvbkxhYmVsID0gJyAgJztcbmNvbnN0IGRlZmF1bHREaXNwbGF5TGFiZWwgPSAnJztcbmNvbnN0IGRlZmF1bHRFcnJvckxhYmVsID0gJy4uLj4gJztcbmNvbnN0IGRlZmF1bHRQcm9tcHRMYWJlbCA9ICc+ICc7XG5jb25zdCBkZWZhdWx0UmVzcG9uc2VMYWJlbCA9ICc9PT4gJztcblxuZnVuY3Rpb24gc3BlY2lmeUVudHJ5KHByZWZpeGVzLCBjb21wb25lbnQpIHtcbiAgY29uc3QgY29tcGxldGlvbkxhYmVsID0gcHJlZml4ZXMuY29tcGxldGlvbkxhYmVsIHx8IGRlZmF1bHRDb21wbGV0aW9uTGFiZWw7XG4gIGNvbnN0IGRpc3BsYXlMYWJlbCA9IHByZWZpeGVzLmRpc3BsYXlMYWJlbCB8fCBkZWZhdWx0RGlzcGxheUxhYmVsO1xuICBjb25zdCBlcnJvckxhYmVsID0gcHJlZml4ZXMuZXJyb3JMYWJlbCB8fCBkZWZhdWx0RXJyb3JMYWJlbDtcbiAgY29uc3QgcHJvbXB0TGFiZWwgPSBwcmVmaXhlcy5wcm9tcHRMYWJlbCB8fCBkZWZhdWx0UHJvbXB0TGFiZWw7XG4gIGNvbnN0IHJlc3BvbnNlTGFiZWwgPSBwcmVmaXhlcy5yZXNwb25zZUxhYmVsIHx8IGRlZmF1bHRSZXNwb25zZUxhYmVsO1xuXG4gIGxldCBlbnRyeTtcbiAgc3dpdGNoIChjb21wb25lbnQudHlwZSkge1xuICAgIGNhc2UgJ2NvbW1hbmQnOlxuICAgICAgZW50cnkgPSBwcm9tcHRMYWJlbCArIGNvbXBvbmVudC52YWx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Jlc3BvbnNlJzpcbiAgICAgIGVudHJ5ID0gcmVzcG9uc2VMYWJlbCArIGNvbXBvbmVudC52YWx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Rpc3BsYXknOlxuICAgICAgZW50cnkgPSBkaXNwbGF5TGFiZWwgKyBjb21wb25lbnQudmFsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjb21wbGV0aW9uJzpcbiAgICAgIGVudHJ5ID0gY29tcGxldGlvbkxhYmVsICsgY29tcG9uZW50LnZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgZW50cnkgPSBlcnJvckxhYmVsICsgY29tcG9uZW50LnZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBjb21wb25lbnQgdHlwZScpO1xuICB9XG4gIHJldHVybiBFUkxfRU5UUlkoZW50cnkpO1xufVxuXG5jb25zdCBfZXJsa29uaWdDb25maWcgPSB7XG4gIGlkOiAnZXJsa29uaWcnLFxuICBjbGFzc2VzOiB7ICdlcmxrb25pZyc6IHRydWUsICdjb250YWluZXInOiB0cnVlIH1cbn07XG5jb25zdCBfY29uc29sZUNvbmZpZyA9IHsgaWQ6ICdlcmwtY29uc29sZScgfTtcbmNvbnN0IF90ZXJtaW5hbENvbmZpZyA9IHsgY2xhc3NlczogeyAndGVybWluYWwnOiB0cnVlIH19O1xuY29uc3QgX2VybFZpZXdwb3J0Q29uZmlnID0geyBjbGFzc2VzOiB7ICdlcmwtdmlld3BvcnQnOiB0cnVlIH19O1xuXG5leHBvcnQgeyBFUkxLSU5HIH07XG4iLCJmdW5jdGlvbiBnZXRDdXJzb3JPZmZzZXQoY3Vyc29yLCBub2RlKSB7XG4gIGNvbnN0IG1hcmdpbiA9IDU7XG4gIHJldHVybiBjdXJzb3Iub2Zmc2V0TGVmdCArIGN1cnNvci5vZmZzZXRXaWR0aCArIG1hcmdpbiAtIG5vZGUub2Zmc2V0V2lkdGg7XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnQoaWQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGVyY2VudGFnZShudW1iZXIpIHtcbiAgcmV0dXJuICgxMDAgKiBudW1iZXIpICsgJyUnO1xufVxuXG5mdW5jdGlvbiBnZXRWaWV3cG9ydCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VybC12aWV3cG9ydCcpWzBdO1xufVxuXG5mdW5jdGlvbiBvbkV2ZW50KGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gX3Njcm9sbChub2RlLCBjdXJzb3IpIHtcbiAgbm9kZS5zY3JvbGxUb3AgPSBub2RlLnNjcm9sbEhlaWdodCAtIG5vZGUuY2xpZW50SGVpZ2h0O1xuICBub2RlLnNjcm9sbExlZnQgPSBnZXRDdXJzb3JPZmZzZXQoY3Vyc29yLCBub2RlKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsKGNzc1Njcm9sbGJhckRldGVjdGVkKSB7XG4gIGlmIChjc3NTY3JvbGxiYXJEZXRlY3RlZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBjdXJzb3IgPSBnZXRFbGVtZW50KCdlcmwtY3Vyc29yJyk7XG4gICAgICBfc2Nyb2xsKGdldFZpZXdwb3J0KCksIGN1cnNvcik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgdmlld3BvcnQgPSBnZXRWaWV3cG9ydCgpO1xuICAgIGNvbnN0IGN1cnNvciA9IGdldEVsZW1lbnQoJ2VybC1jdXJzb3InKTtcbiAgICBjb25zdCB4VHJhY2sgPSBnZXRFbGVtZW50KCdlcmwteC1zY3JvbGwtdHJhY2snKTtcbiAgICBjb25zdCB4VGh1bWIgPSBnZXRFbGVtZW50KCdlcmwteC1zY3JvbGwtdGh1bWInKTtcbiAgICBjb25zdCB5VHJhY2sgPSBnZXRFbGVtZW50KCdlcmwteS1zY3JvbGwtdHJhY2snKTtcbiAgICBjb25zdCB5VGh1bWIgPSBnZXRFbGVtZW50KCdlcmwteS1zY3JvbGwtdGh1bWInKTtcbiAgICBjb25zdCBwcm9tcHQgPSBnZXRFbGVtZW50KCdlcmwtcHJvbXB0Jyk7XG5cbiAgICBjb25zdCB2aWV3cG9ydFdpZHRoID0gdmlld3BvcnQub2Zmc2V0V2lkdGg7XG4gICAgY29uc3Qgdmlld3BvcnRIZWlnaHQgPSB2aWV3cG9ydC5vZmZzZXRIZWlnaHQ7XG5cbiAgICBzZXRYVGh1bWJWaXNpYmlsaXR5KHZpZXdwb3J0LCB2aWV3cG9ydFdpZHRoLCB4VHJhY2ssIHhUaHVtYiwgY3Vyc29yLCBwcm9tcHQpO1xuICAgIHNldFlUaHVtYlZpc2liaWxpdHkodmlld3BvcnQsIHZpZXdwb3J0SGVpZ2h0LCB5VHJhY2ssIHlUaHVtYiwgY3Vyc29yKTtcbiAgICBzY3JvbGxIb3Jpem9udGFsbHkodmlld3BvcnQsIHZpZXdwb3J0V2lkdGgsIHhUcmFjaywgeFRodW1iKTtcbiAgICBzY3JvbGxWZXJ0aWNhbGx5KHZpZXdwb3J0LCB2aWV3cG9ydEhlaWdodCwgeVRyYWNrLCB5VGh1bWIpO1xuXG4gICAgX3Njcm9sbCh2aWV3cG9ydCwgY3Vyc29yKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsQmFySG9yaXpvbnRhbGx5KHhUaHVtYiwgbGVmdFJhdGlvKSB7XG4gIHhUaHVtYi5zdHlsZS5sZWZ0ID0gZ2V0UGVyY2VudGFnZShsZWZ0UmF0aW8pO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxCYXJWZXJ0aWNhbGx5KHlUaHVtYiwgdG9wUmF0aW8pIHtcbiAgeVRodW1iLnN0eWxlLnRvcCA9IGdldFBlcmNlbnRhZ2UodG9wUmF0aW8pO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxDb250ZW50SG9yaXpvbnRhbGx5KHZpZXdwb3J0LCBsZWZ0UmF0aW8pIHtcbiAgdmlld3BvcnQuc2Nyb2xsTGVmdCA9IGxlZnRSYXRpbyAqIHZpZXdwb3J0LnNjcm9sbFdpZHRoO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxDb250ZW50VmVydGljYWxseSh2aWV3cG9ydCwgdG9wUmF0aW8pIHtcbiAgdmlld3BvcnQuc2Nyb2xsVG9wID0gdG9wUmF0aW8gKiB2aWV3cG9ydC5zY3JvbGxIZWlnaHQ7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbFZlcnRpY2FsbHkodmlld3BvcnQsIHZpZXdwb3J0SGVpZ2h0LCB5VHJhY2ssIHlUaHVtYikge1xuICBjb25zdCB5VGh1bWJIZWlnaHQgPSB5VGh1bWIub2Zmc2V0SGVpZ2h0O1xuICBjb25zdCB5VHJhY2tIZWlnaHQgPSB5VHJhY2sub2Zmc2V0SGVpZ2h0O1xuICBjb25zdCB1bGxhZ2UgPSB5VHJhY2tIZWlnaHQgLSB5VGh1bWJIZWlnaHQ7XG5cbiAgZnVuY3Rpb24gbW91c2VNb3ZlX3ZlcnRpY2FsKGV2ZW50KSB7XG4gICAgY29uc3QgX3RvcCA9IGV2ZW50LmNsaWVudFkgLSB5VHJhY2suZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGNvbnN0IHRvcCA9IF90b3AgPCAwID8gMCA6IF90b3AgPiB1bGxhZ2UgPyB1bGxhZ2UgOiBfdG9wO1xuICAgIGNvbnN0IHRvcFJhdGlvID0gdG9wIC8geVRyYWNrSGVpZ2h0O1xuICAgIHNjcm9sbEJhclZlcnRpY2FsbHkoeVRodW1iLCB0b3BSYXRpbyk7XG4gICAgc2Nyb2xsQ29udGVudFZlcnRpY2FsbHkodmlld3BvcnQsIHRvcFJhdGlvKTtcbiAgfTtcblxuICBmdW5jdGlvbiBtb3VzZURvd25fdmVydGljYWwoZXZlbnQpIHtcbiAgICB5VGh1bWIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigwLCA4MCwgMCknO1xuICAgIG9uRXZlbnQoJ21vdXNlbW92ZScsIG1vdXNlTW92ZV92ZXJ0aWNhbCk7XG4gICAgb25FdmVudCgnbW91c2V1cCcsIG1vdXNlVXBfdmVydGljYWwpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1vdXNlVXBfdmVydGljYWwoZXZlbnQpIHtcbiAgICB5VGh1bWIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoNTUsIDUzLCA1MCwgMC41KSc7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlX3ZlcnRpY2FsKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcF92ZXJ0aWNhbCk7XG4gIH07XG5cbiAgeVRodW1iLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bl92ZXJ0aWNhbCk7XG4gIHlUaHVtYi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25fdmVydGljYWwpO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxIb3Jpem9udGFsbHkodmlld3BvcnQsIHZpZXdwb3J0V2lkdGgsIHhUcmFjaywgeFRodW1iKSB7XG4gIGNvbnN0IHhUaHVtYldpZHRoID0geFRodW1iLm9mZnNldFdpZHRoO1xuICBjb25zdCB4VHJhY2tXaWR0aCA9IHhUcmFjay5vZmZzZXRXaWR0aDtcbiAgY29uc3QgdWxsYWdlID0geFRyYWNrV2lkdGggLSB4VGh1bWJXaWR0aDtcblxuICBmdW5jdGlvbiBtb3VzZU1vdmVfaG9yaXpvbnRhbChldmVudCkge1xuICAgIGNvbnN0IF9sZWZ0ID0gZXZlbnQuY2xpZW50WCAtIHhUcmFjay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgIGNvbnN0IGxlZnQgPSBfbGVmdCA8IDAgPyAwIDogX2xlZnQgPiB1bGxhZ2UgPyB1bGxhZ2UgOiBfbGVmdDtcbiAgICBjb25zdCBsZWZ0UmF0aW8gPSBsZWZ0IC8geFRyYWNrV2lkdGg7XG4gICAgc2Nyb2xsQmFySG9yaXpvbnRhbGx5KHhUaHVtYiwgbGVmdFJhdGlvKTtcbiAgICBzY3JvbGxDb250ZW50SG9yaXpvbnRhbGx5KHZpZXdwb3J0LCBsZWZ0UmF0aW8pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1vdXNlVXBfaG9yaXpvbnRhbChldmVudCkge1xuICAgIHhUaHVtYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSg1NSwgNTMsIDUwLCAwLjUpJztcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVfaG9yaXpvbnRhbCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBfaG9yaXpvbnRhbCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbW91c2VEb3duX2hvcml6b250YWwoZXZlbnQpIHtcbiAgICB4VGh1bWIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigwLCA4MCwgMCknO1xuICAgIG9uRXZlbnQoJ21vdXNlbW92ZScsIG1vdXNlTW92ZV9ob3Jpem9udGFsKTtcbiAgICBvbkV2ZW50KCdtb3VzZXVwJywgbW91c2VVcF9ob3Jpem9udGFsKTtcbiAgfTtcblxuICB4VGh1bWIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duX2hvcml6b250YWwpO1xuICB4VGh1bWIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duX2hvcml6b250YWwpO1xufVxuXG5mdW5jdGlvbiBzZXRYVGh1bWJWaXNpYmlsaXR5KHZpZXdwb3J0LCB2aWV3cG9ydFdpZHRoLCB4VHJhY2ssIHhUaHVtYiwgY3Vyc29yLCBwcm9tcHQpIHtcbiAgY29uc3QgeFRyYWNrV2lkdGggPSB4VHJhY2sub2Zmc2V0V2lkdGg7XG4gIGNvbnN0IHRlcm1pbmFsV2lkdGggPSB2aWV3cG9ydC5zY3JvbGxXaWR0aDtcbiAgY29uc3QgeFRodW1iU3R5bGUgPSB4VGh1bWIuc3R5bGU7XG5cbiAgaWYgKHZpZXdwb3J0V2lkdGggPCB0ZXJtaW5hbFdpZHRoKSB7XG4gICAgY29uc3QgZnVsbFByb21wdE9mZnNldFdpZHRoID0gcHJvbXB0Lm9mZnNldExlZnQgKyBwcm9tcHQub2Zmc2V0V2lkdGg7XG4gICAgY29uc3Qgc3RhcnQgPSBmdWxsUHJvbXB0T2Zmc2V0V2lkdGg7XG4gICAgY29uc3Qgdmlld3BvcnRSYXRpbyA9IHZpZXdwb3J0V2lkdGggLyB0ZXJtaW5hbFdpZHRoO1xuICAgIGNvbnN0IHhUaHVtYldpZHRoID0gdmlld3BvcnRSYXRpbyAqIHhUcmFja1dpZHRoO1xuICAgIGNvbnN0IHZpZXdwb3J0UGVyY2VudGFnZSA9IGdldFBlcmNlbnRhZ2Uodmlld3BvcnRSYXRpbyk7XG4gICAgY29uc3QgdWxsYWdlID0geFRyYWNrV2lkdGggLSB4VGh1bWJXaWR0aDtcbiAgICBjb25zdCB4UG9zaXRpb24gPSBjdXJzb3Iub2Zmc2V0TGVmdCArIGN1cnNvci5vZmZzZXRXaWR0aCAtIHN0YXJ0O1xuICAgIGNvbnN0IGN1cnNvclJhdGlvID0gKHhQb3NpdGlvbiAvIHRlcm1pbmFsV2lkdGgpICogKHVsbGFnZSAvIHhUcmFja1dpZHRoKTtcbiAgICBjb25zdCBjdXJzb3JQZXJjZW50YWdlID0gZ2V0UGVyY2VudGFnZShjdXJzb3JSYXRpbyk7XG5cbiAgICB4VGh1bWJTdHlsZS5sZWZ0ID0gY3Vyc29yUGVyY2VudGFnZTtcbiAgICB4VGh1bWJTdHlsZS53aWR0aCA9IHZpZXdwb3J0UGVyY2VudGFnZTtcbiAgICB4VGh1bWJTdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICB9IGVsc2Uge1xuICAgIHhUaHVtYlN0eWxlLmxlZnQgPSAwO1xuICAgIHhUaHVtYlN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIHhUaHVtYlN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRZVGh1bWJWaXNpYmlsaXR5KHZpZXdwb3J0LCB2aWV3cG9ydEhlaWdodCwgeVRyYWNrLCB5VGh1bWIsIGN1cnNvcikge1xuICBjb25zdCB5VHJhY2tIZWlnaHQgPSB5VHJhY2sub2Zmc2V0SGVpZ2h0O1xuICBjb25zdCB0ZXJtaW5hbEhlaWdodCA9IHZpZXdwb3J0LnNjcm9sbEhlaWdodDtcbiAgY29uc3QgeVRodW1iU3R5bGUgPSB5VGh1bWIuc3R5bGU7XG5cbiAgaWYgKHZpZXdwb3J0SGVpZ2h0IDwgdGVybWluYWxIZWlnaHQpIHtcbiAgICBjb25zdCBzdGFydCA9IHZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICBjb25zdCB2aWV3cG9ydFJhdGlvID0gdmlld3BvcnRIZWlnaHQgLyB0ZXJtaW5hbEhlaWdodDtcbiAgICBjb25zdCB5VGh1bWJIZWlnaHQgPSB2aWV3cG9ydFJhdGlvICogeVRyYWNrSGVpZ2h0O1xuICAgIGNvbnN0IHZpZXdwb3J0UGVyY2VudGFnZSA9IGdldFBlcmNlbnRhZ2Uodmlld3BvcnRSYXRpbyk7XG4gICAgY29uc3QgdWxsYWdlID0geVRyYWNrSGVpZ2h0IC0geVRodW1iSGVpZ2h0O1xuICAgIGNvbnN0IHlQb3NpdGlvbiA9IGN1cnNvci5vZmZzZXRUb3AgKyBjdXJzb3Iub2Zmc2V0SGVpZ2h0IC0gc3RhcnQ7XG4gICAgY29uc3QgY3Vyc29yUmF0aW8gPSAoeVBvc2l0aW9uIC8gdGVybWluYWxIZWlnaHQpICogKHVsbGFnZSAvIHlUcmFja0hlaWdodCk7XG4gICAgY29uc3QgY3Vyc29yUGVyY2VudGFnZSA9IGdldFBlcmNlbnRhZ2UoY3Vyc29yUmF0aW8pO1xuXG4gICAgeVRodW1iU3R5bGUudG9wID0gY3Vyc29yUGVyY2VudGFnZTtcbiAgICB5VGh1bWJTdHlsZS5oZWlnaHQgPSB2aWV3cG9ydFBlcmNlbnRhZ2U7XG4gICAgeVRodW1iU3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgfSBlbHNlIHtcbiAgICB5VGh1bWJTdHlsZS50b3AgPSAwO1xuICAgIHlUaHVtYlN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICB5VGh1bWJTdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIH1cbn1cblxuZXhwb3J0IHsgc2Nyb2xsIH07XG4iLCJpbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi9jb25zb2xlL2luaXRpYWxpemUnO1xuaW1wb3J0IHsgaW50ZXJwcmV0IH0gIGZyb20gJy4vbGlzcC9pbnRlcnByZXQnO1xuaW1wb3J0IHsga2V5VG9rZW5zIH0gIGZyb20gJy4vbGlzcC9rZXlUb2tlbnMnO1xuXG5jb25zdCBfa2V5VG9rZW5zID0gIGtleVRva2Vucy5tYXAoZnVuY3Rpb24gKGtleVRva2VuKSB7XG4gIHJldHVybiAnOicgKyBrZXlUb2tlbjtcbn0pO1xuXG5jb25zdCBwcm9tcHRMYWJlbCA9ICdMaXNwPiAnO1xuXG5mdW5jdGlvbiBnZXRDYW5kaWRhdGVzKHByZWZpeCkge1xuICBjb25zdCBlbnZLZXlzID0gaW50ZXJwcmV0KFwiKGtleXMgKC1nZXQtY3VycmVudC1lbnYtKSlcIilbMF1cbiAgICAgIC52YWx1ZVxuICAgICAgLnNsaWNlKDEsIC0xKVxuICAgICAgLnNwbGl0KCcgJyk7XG4gIHJldHVybiBnZXRNYXRjaGVzKHByZWZpeCwgX2tleVRva2Vucy5jb25jYXQoZW52S2V5cykpO1xufVxuXG5mdW5jdGlvbiBnZXRNYXRjaGVzKHByZWZpeCwgd29yZHMpIHtcbiAgaWYgKCEvXlstYS16QS1aMC05XSskLy50ZXN0KHByZWZpeCkpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgY29uc3QgcmVnZXggPSBSZWdFeHAoJyhefFxcVyk6JyArIHByZWZpeCk7XG4gIGNvbnN0IG1hdGNoZXMgPSBbXTtcbiAgZm9yIChsZXQgaW5kZXggaW4gd29yZHMpIHtcbiAgICBjb25zdCB3b3JkID0gd29yZHNbaW5kZXhdO1xuICAgIGlmIChyZWdleC50ZXN0KHdvcmQpKSB7XG4gICAgICBtYXRjaGVzLnB1c2god29yZC5zbGljZSgxKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXRjaGVzO1xufVxuXG5pbml0aWFsaXplKHtcbiAgbm9kZUlkOiAndmlld3BvcnQnLFxuICBwcm9tcHRMYWJlbDogcHJvbXB0TGFiZWwsXG4gIHRyYW5zZm9ybTogaW50ZXJwcmV0LFxuICBnZXRDYW5kaWRhdGVzOiBnZXRDYW5kaWRhdGVzXG59KTtcbiIsImltcG9ydCB7IGNvbW1lbnRTaWduYWwgfSBmcm9tICcuL2NvbW1lbnRTaWduYWwnO1xuaW1wb3J0IHsgZXZhbHVhdGUgfSBmcm9tICcuL2V2YWx1YXRlJztcblxuY29uc3QgX3Byb2Nlc3MgPSBmdW5jdGlvbih0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGVudnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oc291cmNlQ29kZSkge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgICAgY29uc3QgYWRkUmVzdWx0ID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgIH07XG4gICAgICBjb25zdCB2YWx1ZSA9IGV2YWx1YXRlKGVudnMsIGFkZFJlc3VsdCkodHJhbnNmb3JtKHNvdXJjZUNvZGUpKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9ICh2YWx1ZSA9PT0gY29tbWVudFNpZ25hbClcbiAgICAgICAgPyB7IGVmZmVjdDogeyB0eXBlOiAnY29tbWVudCcgfSB9XG4gICAgICAgIDogeyBlZmZlY3Q6IGZhbHNlLCB2YWx1ZTogdmFsdWUgfTtcbiAgICAgIGFkZFJlc3VsdChyZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydCB7IF9wcm9jZXNzIH07XG4iLCJjb25zdCBjb21tZW50U2lnbmFsID0ge307XG5cbmV4cG9ydCB7IGNvbW1lbnRTaWduYWwgfTtcbiIsImNvbnN0IGFkZEVudiA9IGZ1bmN0aW9uIChlbnZTdGFjaywgbmV3RW52KSB7XG4gIGNvbnN0IGNvcHkgPSBlbnZTdGFjay5zbGljZSgwKTtcbiAgY29weS51bnNoaWZ0KG5ld0Vudik7XG4gIHJldHVybiBjb3B5O1xufTtcblxuY29uc3QgZ2V0TGFzdCA9IGZ1bmN0aW9uIChhcnJheSkge1xuICByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG59O1xuXG5jb25zdCBsb29rdXAgPSBmdW5jdGlvbiAoZW52U3RhY2ssIGtleSkge1xuICBjb25zdCBjb3B5ID0gZW52U3RhY2suc2xpY2UoMCk7XG4gIHdoaWxlIChjb3B5Lmxlbmd0aCAhPT0gMCkge1xuICAgIGNvbnN0IGVudiA9IGNvcHlbMF07XG4gICAgY29uc3QgdmFsdWUgPSBlbnZba2V5XTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb3B5LnNoaWZ0KCk7XG4gIH1cbiAgdGhyb3cgXCJWQUxVRSBDT1JSRVNQT05ESU5HIFRPIFxcXCJcIiArIGtleSArIFwiXFxcIiBET0VTIE5PVCBFWElTVCBJTiBFTlYtU1RBQ0tcIjtcbn07XG5cbmNvbnN0IHNldCA9IGZ1bmN0aW9uIChlbnYsIGtleSwgdmFsdWUpIHtcbiAgZW52W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuY29uc3Qgc2V0TWFpbkVudiA9IGZ1bmN0aW9uIChlbnZTdGFjaywga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc2V0KGdldExhc3QoZW52U3RhY2spLCBrZXksIHZhbHVlKTtcbn07XG5cbmNvbnN0IHVuc2V0ID0gZnVuY3Rpb24gKGVudiwga2V5KSB7XG4gIGNvbnN0IHZhbHVlID0gZW52W2tleV07XG4gIGRlbGV0ZSBlbnZba2V5XTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuY29uc3QgdW5zZXRNYWluRW52ID0gZnVuY3Rpb24gKGVudlN0YWNrLCBrZXkpIHtcbiAgcmV0dXJuIHVuc2V0KGdldExhc3QoZW52U3RhY2spLCBrZXkpO1xufTtcblxuZXhwb3J0IHtcbiAgYWRkRW52LFxuICBsb29rdXAsXG4gIHNldE1haW5FbnYsXG4gIHVuc2V0TWFpbkVudlxufTtcbiIsImltcG9ydCB7IGNyZWF0ZUVybEJvb2xlYW4gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybElkZW50aWZpZXIgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybEluZGV4IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxOdW1iZXIgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBleHRyYWN0SnNWYWx1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZnJvbUFycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBpc0pzTmFOIH0gZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNKc051bWJlciB9IGZyb20gJy4vanMtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzSnNTdHJpbmcgfSBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5pbXBvcnQgeyByZWR1Y2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHRvQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcblxuY29uc3QgIF9fc2xpY2UgID0gW10uc2xpY2U7XG5jb25zdCBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuY29uc3QgYWRkID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKG5icnMucmVkdWNlKGZ1bmN0aW9uKHgsIG5icikge1xuICAgIHJldHVybiB4ICs9IG5icjtcbiAgfSkpO1xufTtcblxuY29uc3QgY29udGFpbnMgPSBmdW5jdGlvbihpbmRleCwga2V5KSB7XG4gIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKGtleSBpbiBpbmRleCk7XG59O1xuXG5jb25zdCBkaXNzb2MgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgaW5kZXggPSBhcmd1bWVudHNbMF07XG4gIGNvbnN0IGtleXMgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICBjb25zdCBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgY29uc3QgY29weSA9IHt9O1xuICBmb3IgKGxldCBrZXkgaW4gaW5kZXgpIHtcbiAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGluZGV4LCBrZXkpKSBjb250aW51ZTtcbiAgICBjb25zdCB2YWx1ZSA9IGluZGV4W2tleV07XG4gICAgY29weVtrZXldID0gdmFsdWU7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgZGVsZXRlIGNvcHlba2V5XTtcbiAgfVxuICByZXR1cm4gY3JlYXRlRXJsSW5kZXgoY29weSk7XG59O1xuXG5jb25zdCBkaXZpZGUgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIobmJycy5yZWR1Y2UoZnVuY3Rpb24oeCwgbmJyKSB7XG4gICAgcmV0dXJuIHggLz0gbmJyO1xuICB9KSk7XG59O1xuXG5jb25zdCBleHBvbmVudGlhdGUgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIobmJycy5yZWR1Y2UoZnVuY3Rpb24oeCwgbmJyKSB7XG4gICAgcmV0dXJuIE1hdGgucG93KHgsIG5icik7XG4gIH0pKTtcbn07XG5cbmNvbnN0IGdldCA9IGZ1bmN0aW9uKGpzSW5kZXgsIGpzS2V5KSB7XG4gIHJldHVybiBqc0luZGV4W2pzS2V5XTtcbn07XG5cbmNvbnN0IGdldEVudmlyb25tZW50ID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gIGNvbnN0IGVudmlyb25tZW50ID0gY29uZmlnLmVudmlyb25tZW50O1xuICBzZXRDb3JlRm5zT25Kc1ZhbHVlc0JhbmcoZW52aXJvbm1lbnQsIGZ1bmN0aW9uc09uSnNWYWx1ZXMpO1xuICByZXR1cm4gZW52aXJvbm1lbnQ7XG59O1xuXG5jb25zdCBncmVhdGVyVGhhbk9yRXF1YWwgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKG5icnNbMF0gPj0gbmJyc1sxXSk7XG59O1xuXG5jb25zdCBncmVhdGVyVGhhbiA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4obmJyc1swXSA+IG5icnNbMV0pO1xufTtcblxuY29uc3QgaW5kZXggPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgYXJncyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIGNvbnN0IGxlbiA9IGFyZ3MubGVuZ3RoO1xuICBjb25zdCBfaW5kZXggPSB7fTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGsgPSBhcmdzW2ldO1xuICAgIGlmIChpICUgMiA9PT0gMCkge1xuICAgICAgX2luZGV4W2tdID0gYXJnc1tpICsgMV07XG4gICAgfVxuICB9XG4gIHJldHVybiBjcmVhdGVFcmxJbmRleChfaW5kZXgpO1xufTtcblxuY29uc3Qga2V5cyA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gIGNvbnN0IF9rZXlzID0gW107XG4gIGZvciAobGV0IGtleSBpbiBpbmRleCkge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoaW5kZXgsIGtleSkpIGNvbnRpbnVlO1xuICAgIGNvbnN0IHZhbHVlID0gaW5kZXhba2V5XTtcbiAgICBjb25zdCBqc05iciA9IHBhcnNlRmxvYXQoa2V5LCAxMCk7XG4gICAgY29uc3QgX2tleSA9IGlzSnNOYU4oanNOYnIpXG4gICAgICAgID8gKGtleVswXSA9PT0gJzonID8gY3JlYXRlRXJsSWRlbnRpZmllciA6IGNyZWF0ZUVybFN0cmluZykoa2V5KVxuICAgICAgICA6IGNyZWF0ZUVybE51bWJlcihqc05icik7XG4gICAgX2tleXMucHVzaChfa2V5KTtcbiAgfVxuICByZXR1cm4gZnJvbUFycmF5KF9rZXlzKTtcbn07XG5cbmNvbnN0IGxlbmd0aFN0cmluZyA9IGZ1bmN0aW9uKGpzVmFsKSB7XG4gIGlmICghaXNKc1N0cmluZyhqc1ZhbCkpIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIoanNWYWwubGVuZ3RoIC0gMik7XG59O1xuXG5jb25zdCBsZXNzVGhhbiA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4obmJyc1swXSA8IG5icnNbMV0pO1xufTtcblxuY29uc3QgbGVzc1RoYW5PckVxdWFsID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsQm9vbGVhbihuYnJzWzBdIDw9IG5icnNbMV0pO1xufTtcblxuY29uc3QgbGlmdCA9IGZ1bmN0aW9uKGZuT25Kc1ZhbHVlcykge1xuICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWVMaXN0KSB7XG4gICAgcmV0dXJuIGZuT25Kc1ZhbHVlcy5hcHBseShudWxsLCAodG9BcnJheShlcmxWYWx1ZUxpc3QpKS5tYXAoZXh0cmFjdEpzVmFsdWUpKTtcbiAgfTtcbn07XG5cbmNvbnN0IG1heCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihNYXRoLm1heC5hcHBseShNYXRoLCBuYnJzKSk7XG59O1xuXG5jb25zdCBtaW4gPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIoTWF0aC5taW4uYXBwbHkoTWF0aCwgbmJycykpO1xufTtcblxuY29uc3QgbW9kID0gZnVuY3Rpb24obmJyMCwgbmJyMSkge1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKG5icjAgJSBuYnIxKTtcbn07XG5cbmNvbnN0IG11bHRpcGx5ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKG5icnMucmVkdWNlKGZ1bmN0aW9uKHgsIG5icikge1xuICAgIHJldHVybiB4ICo9IG5icjtcbiAgfSkpO1xufTtcblxuY29uc3QgbmVnYXRlID0gZnVuY3Rpb24obmJyKSB7XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIoLTEgKiBuYnIpO1xufTtcblxuY29uc3QgcGFyc2VOdW1iZXIgPSBmdW5jdGlvbihqc1ZhbCkge1xuICBpZiAoaXNKc051bWJlcihqc1ZhbCkpIHtcbiAgICByZXR1cm4ganNWYWw7XG4gIH1cbiAgaWYgKCFpc0pzU3RyaW5nKGpzVmFsKSkge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbiAgY29uc3QganNOYnIgPSBwYXJzZUZsb2F0KHN0cmlwUXVvdGVzKGpzVmFsKSwgMTApO1xuICBpZiAoaXNKc05hTihqc05icikpIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjcmVhdGVFcmxOdW1iZXIoanNOYnIpO1xuICB9XG59O1xuXG5jb25zdCBzZXRDb3JlRm5zT25Kc1ZhbHVlc0JhbmcgPSBmdW5jdGlvbihlbnYsIGZucykge1xuICBjb25zdCBfcmVzdWx0cyA9IFtdO1xuICBmb3IgKGxldCBmbk5hbWUgaW4gZm5zKSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChmbnMsIGZuTmFtZSkpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGZuID0gZm5zW2ZuTmFtZV07XG4gICAgZW52W2ZuTmFtZV0gPSBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uKGxpZnQoZm4pKTtcbiAgICBfcmVzdWx0cy5wdXNoKGVudltmbk5hbWVdKTtcbiAgfVxuICByZXR1cm4gX3Jlc3VsdHM7XG59O1xuXG5jb25zdCBzdWJ0cmFjdCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihuYnJzLnJlZHVjZShmdW5jdGlvbih4LCBuYnIpIHtcbiAgICByZXR1cm4geCAtPSBuYnI7XG4gIH0pKTtcbn07XG5cbmNvbnN0IHZhbHMgPSBmdW5jdGlvbihpbmRleCkge1xuICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgZm9yIChsZXQga2V5IGluIGluZGV4KSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChpbmRleCwga2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gaW5kZXhba2V5XTtcbiAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZyb21BcnJheSh2YWx1ZXMpO1xufTtcblxuY29uc3QgZnVuY3Rpb25zT25Kc1ZhbHVlcyA9IHtcbiAgJysnOiBhZGQsXG4gICdjb250YWlucz8nOiBjb250YWlucyxcbiAgJ2Rpc3NvYyc6IGRpc3NvYyxcbiAgJy8nOiBkaXZpZGUsXG4gICcqKic6IGV4cG9uZW50aWF0ZSxcbiAgJ2dldCc6IGdldCxcbiAgJz4nOiBncmVhdGVyVGhhbixcbiAgJz49JzogZ3JlYXRlclRoYW5PckVxdWFsLFxuICAnaW5kZXgnOiBpbmRleCxcbiAgJ2tleXMnOiBrZXlzLFxuICAnbGVuZ3RoLXN0cmluZyc6IGxlbmd0aFN0cmluZyxcbiAgJ21heCc6IG1heCxcbiAgJ21pbic6IG1pbixcbiAgJzwnOiBsZXNzVGhhbixcbiAgJzw9JzogbGVzc1RoYW5PckVxdWFsLFxuICAnJSc6IG1vZCxcbiAgJyonOiBtdWx0aXBseSxcbiAgJ25lZ2F0ZSc6IG5lZ2F0ZSxcbiAgJ3BhcnNlLW51bWJlcic6IHBhcnNlTnVtYmVyLFxuICAnLSc6IHN1YnRyYWN0LFxuICAndmFscyc6IHZhbHNcbn07XG5cbmV4cG9ydCB7IGdldEVudmlyb25tZW50IH07XG4iLCJpbXBvcnQgeyBhcmVFcXVhbCB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgY2FyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBjZHIgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGNpcmN1bXBlbmRRdW90ZXMgfSBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjb25jYXQgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGNyZWF0ZUVybEF0b20gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybEJvb2xlYW4gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybEluZGV4IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxOdW1iZXIgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3ltYm9sIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBkcm9wIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBlcmxGYWxzZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXJsSWdub3JlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBlcmxOaWwgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGVybFRydWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGV4dHJhY3RKc1ZhbHVlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBmcm9tQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGludGVycHJldCB9IGZyb20gJy4vaW50ZXJwcmV0JztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGlzRXJsQXRvbSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxDb3JlUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybEJvb2xlYW4gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsRmFsc2UgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTGlzdCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxNYWNybyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxOaWwgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTnVtYmVyIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxTeW1ib2wgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsVHJ1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBsYXN0IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBuZXh0IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyByZWN1cnNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyByZWR1Y2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHJldmVyc2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gJy4vc2VyaWFsaXplJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHRvQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHRvUGFydGlhbEFycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5cbmNvbnN0IF9fc2xpY2UgICA9IFtdLnNsaWNlO1xuY29uc3QgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbmNvbnN0IGFwcGVuZCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgZXJsQXJnc0FycmF5ID0gdG9BcnJheShlcmxBcmdzKTtcbiAgY29uc3QgZXJsTGlzdCA9IGVybEFyZ3NBcnJheVswXTtcbiAgY29uc3QgZXJsVmFsdWVzID0gMiA8PSBlcmxBcmdzQXJyYXkubGVuZ3RoID8gX19zbGljZS5jYWxsKGVybEFyZ3NBcnJheSwgMSkgOiBbXTtcbiAgcmV0dXJuIGNvbmNhdChlcmxMaXN0LCBmcm9tQXJyYXkoZXJsVmFsdWVzKSk7XG59O1xuXG5jb25zdCBfYXJlRXF1YWwgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEFyZ3MpO1xuICBjb25zdCBlcmxWYWx1ZTAgPSBwYXJ0aWFsQXJyYXlbMF07XG4gIGNvbnN0IGVybFZhbHVlMSA9IHBhcnRpYWxBcnJheVsxXTtcbiAgY29uc3QgX19hcmVFcXVhbCA9IGZ1bmN0aW9uKGVybFZhbHVlMCwgZXJsVmFsdWUxKSB7XG4gICAgaWYgKGlzRXJsTGlzdChlcmxWYWx1ZTApICYmIGlzRXJsTGlzdChlcmxWYWx1ZTEpKSB7XG4gICAgICByZXR1cm4gYXJlRXF1YWwoZXJsVmFsdWUwLCBlcmxWYWx1ZTEsIF9fYXJlRXF1YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNFcmxJbmRleChlcmxWYWx1ZTApICYmIGlzRXJsSW5kZXgoZXJsVmFsdWUxKSkge1xuICAgICAgY29uc3QganNJbmRleDAgPSBlcmxWYWx1ZTAuanNWYWx1ZTtcbiAgICAgIGNvbnN0IGpzSW5kZXgxID0gZXJsVmFsdWUxLmpzVmFsdWU7XG4gICAgICByZXR1cm4gKF9fYXJlRXF1YWwoa2V5cyhqc0luZGV4MCksIGtleXMoanNJbmRleDEpKSlcbiAgICAgICAgJiYgKF9fYXJlRXF1YWwodmFscyhqc0luZGV4MCksIHZhbHMoanNJbmRleDEpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlcmxWYWx1ZTAuanNWYWx1ZSA9PT0gZXJsVmFsdWUxLmpzVmFsdWU7XG4gICAgfVxuICB9O1xuICByZXR1cm4gY3JlYXRlRXJsQm9vbGVhbihfX2FyZUVxdWFsKGVybFZhbHVlMCwgZXJsVmFsdWUxKSk7XG59O1xuXG5jb25zdCBhc3NvYyA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgbGV0IGFyZ3M7XG4gIGNvbnN0IGpzSW5kZXggPSBleHRyYWN0SnNWYWx1ZShjYXIoZXJsQXJncykpO1xuICBhcmdzID0gY2RyKGVybEFyZ3MpO1xuICBjb25zdCBjb3B5ID0ge307XG4gIGZvciAobGV0IGtleSBpbiBqc0luZGV4KSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChqc0luZGV4LCBrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSBqc0luZGV4W2tleV07XG4gICAgY29weVtrZXldID0gdmFsdWU7XG4gIH1cbiAgd2hpbGUgKCFpc0VtcHR5KGFyZ3MpKSB7XG4gICAgY29uc3QgayA9IGNhcihhcmdzKTtcbiAgICBjb25zdCB2ID0gbmV4dChhcmdzKTtcbiAgICBhcmdzID0gcmVjdXJzZShyZWN1cnNlKGFyZ3MpKTtcbiAgICBjb3B5W2V4dHJhY3RKc1ZhbHVlKGspXSA9IHY7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUVybEluZGV4KGNvcHkpO1xufTtcblxuY29uc3QgYXRvbSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybEF0b20oY2FyKGVybEFyZ3MpKTtcbn07XG5cbmNvbnN0IF9jYXIgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGFyZyA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKGlzRXJsTGlzdChhcmcpKSB7XG4gICAgcmV0dXJuIGNhcihhcmcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbmNvbnN0IF9jZHIgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGFyZyA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKGlzRXJsTGlzdChhcmcpKSB7XG4gICAgcmV0dXJuIGNkcihhcmcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbmNvbnN0IF9jb25jYXQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGVybExpc3RzID0gdG9BcnJheShlcmxBcmdzKTtcbiAgcmV0dXJuIGNvbmNhdC5hcHBseShudWxsLCBlcmxMaXN0cyk7XG59O1xuXG5jb25zdCBjb25zID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY3JlYXRlRXJsTGlzdChjYXIoZXJsQXJncyksIG5leHQoZXJsQXJncykpO1xufTtcblxuY29uc3QgY291bnQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGVybExpc3QgPSBjYXIoZXJsQXJncyk7XG4gIGlmICghaXNFcmxMaXN0KGVybExpc3QpKSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxuICBjb25zdCBfcmVkdWNlID0gZnVuY3Rpb24oc3VtLCB2YWx1ZSkge1xuICAgIHJldHVybiBzdW0gKyAxO1xuICB9O1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKHJlZHVjZSgwLCBfcmVkdWNlLCBjYXIoZXJsQXJncykpKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVByZWRpY2F0ZSA9IGZ1bmN0aW9uKHByZWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGpzTGlzdCkge1xuICAgIGNvbnN0IGVybFZhbHVlID0ganNMaXN0LnZhbHVlO1xuICAgIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKHByZWQoZXJsVmFsdWUpKTtcbiAgfTtcbn07XG5cbmNvbnN0IGRlcmVmID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gKGNhcihlcmxBcmdzKSkuZXJsVmFsdWU7XG59O1xuXG5jb25zdCBfZHJvcCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIGNvbnN0IGVybE51bWJlciA9IHBhcnRpYWxBcnJheVswXTtcbiAgY29uc3QgZXJsTGlzdCA9IHBhcnRpYWxBcnJheVsxXTtcbiAgcmV0dXJuIGRyb3AoZXh0cmFjdEpzVmFsdWUoZXJsTnVtYmVyKSwgZXJsTGlzdCk7XG59O1xuXG5jb25zdCBmaXJzdCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGNhcihjYXIoZXJsQXJncykpO1xufTtcblxuY29uc3QgZ2V0RW52aXJvbm1lbnQgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgY29uc3QgZW52aXJvbm1lbnQgPSBjb25maWcuZW52aXJvbm1lbnQ7XG4gIHNldENvcmVGbnNPbkVybFZhbHVlcyhlbnZpcm9ubWVudCwgZnVuY3Rpb25zT25FcmxWYWx1ZXMpO1xuICByZXR1cm4gZW52aXJvbm1lbnQ7XG59O1xuXG5jb25zdCBoYXNQcm9jZXNzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbmNvbnN0IGhhc1Byb2Nlc3NXZWJwYWNrU2hpbSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ocHJvY2Vzcy50aXRsZSA9PT0gJ2Jyb3dzZXInICYmIHByb2Nlc3MuYnJvd3Nlcik7XG59XG5cbmNvbnN0IGlnbm9yZSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGVybElnbm9yZTtcbn07XG5cbmNvbnN0IGlnbm9yZUlmVHJ1ZSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIGNvbnN0IGVybEJvb2wgPSBwYXJ0aWFsQXJyYXlbMF07XG4gIGNvbnN0IGVybFZhbHVlID0gcGFydGlhbEFycmF5WzFdO1xuICBpZiAoZXh0cmFjdEpzVmFsdWUoZXJsQm9vbCkpIHtcbiAgICByZXR1cm4gZXJsSWdub3JlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxWYWx1ZTtcbiAgfVxufTtcblxuY29uc3QgaWdub3JlVW5sZXNzVHJ1ZSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIGNvbnN0IGVybEJvb2wgPSBwYXJ0aWFsQXJyYXlbMF07XG4gIGNvbnN0IGVybFZhbHVlID0gcGFydGlhbEFycmF5WzFdO1xuICBpZiAoZXh0cmFjdEpzVmFsdWUoZXJsQm9vbCkpIHtcbiAgICByZXR1cm4gZXJsVmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybElnbm9yZTtcbiAgfVxufTtcblxuY29uc3QgX2ludGVycHJldCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGludGVycHJldChzdHJpcFF1b3RlcyhleHRyYWN0SnNWYWx1ZShjYXIoZXJsQXJncykpKSk7XG59O1xuXG5jb25zdCBfaXNFbXB0eSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgaWYgKGlzRW1wdHkoZXJsQXJncykpIHtcbiAgICByZXR1cm4gZXJsRmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzRW1wdHkoY2FyKGVybEFyZ3MpKSkge1xuICAgICAgcmV0dXJuIGVybFRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlcmxGYWxzZTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGlzRnVuY3Rpb24gPSBmdW5jdGlvbihqc0xpc3QpIHtcbiAgY29uc3QgZXJsVmFsdWUgPSBqc0xpc3QudmFsdWU7XG4gIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKGlzRXJsQ29yZVB1cmVGdW5jdGlvbihlcmxWYWx1ZSlcbiAgICB8fCBpc0VybFVzZXJQdXJlRnVuY3Rpb24oZXJsVmFsdWUpKTtcbn07XG5cbmNvbnN0IGlzTm9kZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gaGFzUHJvY2VzcygpICYmICFoYXNQcm9jZXNzV2VicGFja1NoaW0oKTtcbn1cblxuY29uc3QgX2xhc3QgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGFyZyA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKGlzRXJsTGlzdChhcmcpKSB7XG4gICAgcmV0dXJuIGxhc3QoYXJnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG5jb25zdCBsaXN0ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gZXJsQXJncztcbn07XG5cbmNvbnN0IG1ldGEgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGVybE1ldGEgPSAoY2FyKGVybEFyZ3MpKS5tZXRhO1xuICBpZiAoZXJsTWV0YSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGVybE1ldGE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxuY29uc3QgX25vdCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgZXJsVmFsID0gY2FyKGVybEFyZ3MpO1xuICBpZiAoaXNFcmxOaWwoZXJsVmFsKSB8fCBpc0VybEZhbHNlKGVybFZhbCkpIHtcbiAgICByZXR1cm4gZXJsVHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsRmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IG50aCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIGNvbnN0IGVybE51bWJlciA9IHBhcnRpYWxBcnJheVswXTtcbiAgbGV0IGVybExpc3QgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIGNvbnN0IHRhcmdldCA9IGV4dHJhY3RKc1ZhbHVlKGVybE51bWJlcik7XG4gIGlmICh0YXJnZXQgPj0gMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0OyBpKyspIHtcbiAgICAgIGVybExpc3QgPSBjZHIoZXJsTGlzdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpID4gdGFyZ2V0OyBpLS0pIHtcbiAgICAgIGVybExpc3QgPSBjZHIoZXJsTGlzdCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBjYXIoZXJsTGlzdCk7XG59O1xuXG5jb25zdCBwcmVwZW5kID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBlcmxBcmdzQXJyYXkgPSB0b0FycmF5KGVybEFyZ3MpO1xuICBjb25zdCBlcmxMaXN0ID0gZXJsQXJnc0FycmF5WzBdO1xuICBjb25zdCBlcmxWYWx1ZXMgPSAyIDw9IGVybEFyZ3NBcnJheS5sZW5ndGggPyBfX3NsaWNlLmNhbGwoZXJsQXJnc0FycmF5LCAxKSA6IFtdO1xuICBjb25zdCBfcmVkdWNlID0gZnVuY3Rpb24obGlzdCwgdmFsKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVybExpc3QodmFsLCBsaXN0KTtcbiAgfTtcbiAgcmV0dXJuIGVybFZhbHVlcy5yZWR1Y2UoX3JlZHVjZSwgZXJsTGlzdCk7XG59O1xuXG5jb25zdCBfcHJTdHIgPSBmdW5jdGlvbihlcmxBcmdzLCBwcmludFJlYWRhYmx5KSB7XG4gIHJldHVybiAoKHRvQXJyYXkoZXJsQXJncykpLm1hcChmdW5jdGlvbihlcmxBcmcpIHtcbiAgICByZXR1cm4gc2VyaWFsaXplKGVybEFyZywgcHJpbnRSZWFkYWJseSk7XG4gIH0pKS5qb2luKCcnKTtcbn07XG5cbmNvbnN0IHByZXR0eVN0cmluZyA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhjaXJjdW1wZW5kUXVvdGVzKF9wclN0cihlcmxBcmdzLCB0cnVlKSkpO1xufTtcblxuY29uc3QgcmVhZCA9IGZ1bmN0aW9uKGpzTGlzdCkge1xuICBpZiAoaXNOb2RlKCkpIHtcbiAgICBjb25zdCBfcmVhZCA9IGZ1bmN0aW9uKF9qc0xpc3QpIHtcbiAgICAgIGNvbnN0IGpzRmlsZU5hbWUgPSBzdHJpcFF1b3RlcyhleHRyYWN0SnNWYWx1ZShjYXIoX2pzTGlzdCkpKTtcbiAgICAgIC8vcmV0dXJuIHJlcXVpcmUoJ2ZzJykucmVhZEZpbGVTeW5jKGpzRmlsZU5hbWUpLnRvU3RyaW5nKCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBjcmVhdGVFcmxTdHJpbmcoX3JlYWQoanNMaXN0KSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxuY29uc3QgcmVzZXQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEFyZ3MpO1xuICBjb25zdCBhdG9tID0gcGFydGlhbEFycmF5WzBdO1xuICBjb25zdCB2YWx1ZSA9IHBhcnRpYWxBcnJheVsxXTtcbiAgYXRvbS5lcmxWYWx1ZSA9IHZhbHVlO1xuICByZXR1cm4gYXRvbTtcbn07XG5cbmNvbnN0IHJlc3QgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGFyZyA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKGlzRXJsTGlzdChhcmcpKSB7XG4gICAgcmV0dXJuIGNkcihhcmcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbmNvbnN0IF9yZXZlcnNlID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBhcmcgPSBjYXIoZXJsQXJncyk7XG4gIGlmIChpc0VybExpc3QoYXJnKSkge1xuICAgIHJldHVybiByZXZlcnNlKGFyZyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxuY29uc3Qgc2V0ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgzLCBlcmxBcmdzKTtcbiAgY29uc3QgaW5kZXggPSBwYXJ0aWFsQXJyYXlbMF07XG4gIGNvbnN0IGtleSA9IHBhcnRpYWxBcnJheVsxXTtcbiAgY29uc3QgdmFsID0gcGFydGlhbEFycmF5WzJdO1xuICAoZXh0cmFjdEpzVmFsdWUoaW5kZXgpKVtleHRyYWN0SnNWYWx1ZShrZXkpXSA9IHZhbDtcbiAgcmV0dXJuIGluZGV4O1xufTtcblxuY29uc3Qgc2V0Q29yZUZuc09uRXJsVmFsdWVzID0gZnVuY3Rpb24oZW52LCBmbnMpIHtcbiAgY29uc3QgX3Jlc3VsdHMgPSBbXTtcbiAgZm9yIChsZXQgZm5OYW1lIGluIGZucykge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoZm5zLCBmbk5hbWUpKSBjb250aW51ZTtcbiAgICBjb25zdCBmbiA9IGZuc1tmbk5hbWVdO1xuICAgIF9yZXN1bHRzLnB1c2goZW52W2ZuTmFtZV0gPSBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uKGZuKSk7XG4gIH1cbiAgcmV0dXJuIF9yZXN1bHRzO1xufTtcblxuY29uc3Qgc2x1cnAgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGlmIChpc05vZGUoKSkge1xuICAgIGNvbnN0IGpzRmlsZU5hbWUgPSBzdHJpcFF1b3RlcyhleHRyYWN0SnNWYWx1ZShjYXIoZXJsQXJncykpKTtcbiAgICAvL2NvbnN0IF9mc18gPSByZXF1aXJlKCdmcycpO1xuICAgIC8vcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhjaXJjdW1wZW5kUXVvdGVzKF9mc18ucmVhZEZpbGVTeW5jKGpzRmlsZU5hbWUpLnRvU3RyaW5nKCkpKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG5jb25zdCBzdHJpbmcgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBjcmVhdGVFcmxTdHJpbmcoY2lyY3VtcGVuZFF1b3RlcyhfcHJTdHIoZXJsQXJncywgZmFsc2UpKSk7XG59O1xuXG5jb25zdCBzdHJpcFF1b3RlcyA9IGZ1bmN0aW9uKGpzU3RyaW5nKSB7XG4gIHJldHVybiBqc1N0cmluZy5zbGljZSgxLCAtMSk7XG59O1xuXG5jb25zdCBzeW1ib2wgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGVybFZhbHVlID0gY2FyKGVybEFyZ3MpO1xuICBpZiAoaXNFcmxTdHJpbmcoZXJsVmFsdWUpKSB7XG4gICAgY29uc3QganNTdHIgPSBleHRyYWN0SnNWYWx1ZShlcmxWYWx1ZSk7XG4gICAgcmV0dXJuIGNyZWF0ZUVybFN5bWJvbChqc1N0ci5zbGljZSgxLCAtMSkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbmNvbnN0IF90YWtlID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgY29uc3QgZXJsTnVtYmVyID0gcGFydGlhbEFycmF5WzBdO1xuICBjb25zdCBlcmxMaXN0ID0gcGFydGlhbEFycmF5WzFdO1xuICByZXR1cm4gdGFrZShleHRyYWN0SnNWYWx1ZShlcmxOdW1iZXIpLCBlcmxMaXN0KTtcbn07XG5cbmNvbnN0IHR5cGVPZiA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgY29uc3QgZXJsVmFsdWUgPSBjYXIoZXJsQXJncyk7XG4gIHJldHVybiBjcmVhdGVFcmxTdHJpbmcoY2lyY3VtcGVuZFF1b3RlcyhlcmxWYWx1ZS50eXBlKSk7XG59O1xuXG5jb25zdCBfdGhyb3cgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHRocm93IGNhcihlcmxBcmdzKTtcbn07XG5cbmNvbnN0IHRpbWVNcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbn07XG5cbmNvbnN0IHdpdGhNZXRhID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBjb25zdCBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgY29uc3QgZXJsVmFsID0gcGFydGlhbEFycmF5WzBdO1xuICBjb25zdCBlcmxNZXRhID0gcGFydGlhbEFycmF5WzFdO1xuICBpZiAoaXNFcmxBdG9tKGVybFZhbCkpIHtcbiAgICBjb25zdCBlcmxWYWx1ZSA9IGVybFZhbC5lcmxWYWx1ZTtcbiAgICBjb25zdCB0eXBlID0gZXJsVmFsLnR5cGU7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVybFZhbHVlOiBlcmxWYWx1ZSxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBtZXRhOiBlcmxNZXRhXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBqc1ZhbHVlID0gZXJsVmFsLmpzVmFsdWU7XG4gICAgY29uc3QgdHlwZSA9IGVybFZhbC50eXBlO1xuICAgIHJldHVybiB7XG4gICAgICBqc1ZhbHVlOiBqc1ZhbHVlLFxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIG1ldGE6IGVybE1ldGFcbiAgICB9O1xuICB9XG59O1xuXG5jb25zdCB3cml0ZSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhzZXJpYWxpemUoY2FyKGVybEFyZ3MpKSk7XG59O1xuXG5jb25zdCBwcmVkaWNhdGVzID0gW1xuICBpc0VybEF0b20sXG4gIGlzRXJsQm9vbGVhbixcbiAgaXNFcmxDb3JlUHVyZUZ1bmN0aW9uLFxuICBpc0VybEZhbHNlLFxuICBpc0VybExpc3QsXG4gIGlzRXJsTWFjcm8sXG4gIGlzRXJsTmlsLFxuICBpc0VybE51bWJlcixcbiAgaXNFcmxTeW1ib2wsXG4gIGlzRXJsU3RyaW5nLFxuICBpc0VybFVzZXJQdXJlRnVuY3Rpb24sXG4gIGlzRXJsVHJ1ZVxuXS5tYXAoY3JlYXRlUHJlZGljYXRlKTtcblxuY29uc3QgaXNBdG9tICAgID0gcHJlZGljYXRlc1swXTtcbmNvbnN0IGlzQm9vbGVhbiA9IHByZWRpY2F0ZXNbMV07XG5jb25zdCBpc0NvcmVGbiAgPSBwcmVkaWNhdGVzWzJdO1xuY29uc3QgaXNGYWxzZSAgID0gcHJlZGljYXRlc1szXTtcbmNvbnN0IGlzTGlzdCAgICA9IHByZWRpY2F0ZXNbNF07XG5jb25zdCBpc01hY3JvICAgPSBwcmVkaWNhdGVzWzVdO1xuY29uc3QgaXNOaWwgICAgID0gcHJlZGljYXRlc1s2XTtcbmNvbnN0IGlzTnVtYmVyICA9IHByZWRpY2F0ZXNbN107XG5jb25zdCBpc1N5bWJvbCAgPSBwcmVkaWNhdGVzWzhdO1xuY29uc3QgaXNTdHJpbmcgID0gcHJlZGljYXRlc1s5XTtcbmNvbnN0IGlzVXNlckZuICA9IHByZWRpY2F0ZXNbMTBdO1xuY29uc3QgaXNUcnVlICAgID0gcHJlZGljYXRlc1sxMV07XG5cbmNvbnN0IGZ1bmN0aW9uc09uRXJsVmFsdWVzID0ge1xuICAnPSc6IF9hcmVFcXVhbCxcbiAgJ2FwcGVuZCc6IGFwcGVuZCxcbiAgJ2Fzc29jJzogYXNzb2MsXG4gICdhdG9tJzogYXRvbSxcbiAgJ2F0b20/JzogaXNBdG9tLFxuICAnYm9vbGVhbj8nOiBpc0Jvb2xlYW4sXG4gICdjYXInOiBfY2FyLFxuICAnY2RyJzogX2NkcixcbiAgJ2NvbnMnOiBjb25zLFxuICAnY29uY2F0JzogX2NvbmNhdCxcbiAgJ2NvcmUtZm4/JzogaXNDb3JlRm4sXG4gICdjb3VudCc6IGNvdW50LFxuICAnZGVyZWYnOiBkZXJlZixcbiAgJ2Ryb3AnOiBfZHJvcCxcbiAgJ2VtcHR5Pyc6IF9pc0VtcHR5LFxuICAnZmlyc3QnOiBfY2FyLFxuICAnZmFsc2U/JzogaXNGYWxzZSxcbiAgJ2Z1bmN0aW9uPyc6IGlzRnVuY3Rpb24sXG4gICdpZ25vcmUhJzogaWdub3JlLFxuICAnaWdub3JlSWZUcnVlJzogaWdub3JlSWZUcnVlLFxuICAnaWdub3JlVW5sZXNzVHJ1ZSc6IGlnbm9yZVVubGVzc1RydWUsXG4gICdsYXN0JzogX2xhc3QsXG4gICdsaXN0JzogbGlzdCxcbiAgJ2xpc3Q/JzogaXNMaXN0LFxuICAnbWFjcm8/JzogaXNNYWNybyxcbiAgJ21ldGEnOiBtZXRhLFxuICAnbmlsPyc6IGlzTmlsLFxuICAnbm90JzogX25vdCxcbiAgJ250aCc6IG50aCxcbiAgJ251bWJlcj8nOiBpc051bWJlcixcbiAgJ3BhcnNlJzogX2ludGVycHJldCxcbiAgJ3ByZXBlbmQnOiBwcmVwZW5kLFxuICAncHJldHR5LXN0cmluZyc6IHByZXR0eVN0cmluZyxcbiAgJ3Jlc3QnOiBfY2RyLFxuICAncmV2ZXJzZSc6IF9yZXZlcnNlLFxuICAnc3RyaW5nJzogc3RyaW5nLFxuICAnc3RyaW5nPyc6IGlzU3RyaW5nLFxuICAnc3ltYm9sJzogc3ltYm9sLFxuICAnc3ltYm9sPyc6IGlzU3ltYm9sLFxuICAndGFrZSc6IF90YWtlLFxuICAndGhyb3cnOiBfdGhyb3csXG4gICd0cnVlPyc6IGlzVHJ1ZSxcbiAgJ3R5cGVvZic6IHR5cGVPZixcbiAgJ3VzZXItZm4/JzogaXNVc2VyRm4sXG4gICdyZWFkJzogcmVhZCxcbiAgJ3Jlc2V0ISc6IHJlc2V0LFxuICAnc2V0ISc6IHNldCxcbiAgJ3NsdXJwJzogc2x1cnAsXG4gICd0aW1lLW1zJzogdGltZU1zLFxuICAnd2l0aC1tZXRhJzogd2l0aE1ldGEsXG4gICd3cml0ZSc6IHdyaXRlXG59O1xuXG5leHBvcnQgeyBnZXRFbnZpcm9ubWVudCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxMaXN0IH0gICAgICAgICAgICAgICAgICBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN0cmluZyB9ICAgICAgICAgICAgICAgIGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgc2VyaWFsaXplIH0gICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9zZXJpYWxpemUnO1xuaW1wb3J0IHsgdG9BcnJheSB9ICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5cbmNvbnN0IF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5jb25zdCBnZXRFbnZpcm9ubWVudCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICBjb25zdCBkaXNwbGF5ID0gY29uZmlnLmRpc3BsYXk7XG4gIGNvbnN0IGVudmlyb25tZW50ID0gY29uZmlnLmVudmlyb25tZW50O1xuICBzZXRDb3JlRWZmZWN0ZnVsRm5zT25FcmxWYWx1ZXMoZGlzcGxheSkoZW52aXJvbm1lbnQsIGRpc3BsYXlFZmZlY3RzT25FcmxWYWx1ZXMpO1xuICByZXR1cm4gZW52aXJvbm1lbnQ7XG59O1xuXG5jb25zdCBoYXNQcm9jZXNzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbmNvbnN0IGhhc1Byb2Nlc3NXZWJwYWNrU2hpbSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ocHJvY2Vzcy50aXRsZSA9PT0gJ2Jyb3dzZXInICYmIHByb2Nlc3MuYnJvd3Nlcik7XG59XG5cbmNvbnN0IGlzTm9kZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gaGFzUHJvY2VzcygpICYmICFoYXNQcm9jZXNzV2VicGFja1NoaW0oKTtcbn1cblxuY29uc3QgX3ByU3RyID0gZnVuY3Rpb24oZXJsQXJncywgc2hvdWxkQmVSZWFkYWJsZSkge1xuICByZXR1cm4gKCh0b0FycmF5KGVybEFyZ3MpKS5tYXAoZnVuY3Rpb24oZXJsQXJnKSB7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZShlcmxBcmcsIHNob3VsZEJlUmVhZGFibGUpO1xuICB9KSkuam9pbignJyk7XG59O1xuXG5jb25zdCBfcXVpdF8gPSBmdW5jdGlvbigpIHtcbiAgaWYgKGlzTm9kZSgpKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZXhpdCgwKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gX3ByU3RyKFxuICAgICAgY3JlYXRlRXJsTGlzdChcbiAgICAgICAgY3JlYXRlRXJsU3RyaW5nKFxuICAgICAgICAgIFwiXFxcIidFcmxrw7ZuaWcgTGlzcCBDb25zb2xlJyBpcyBub3QgcGVybWl0dGVkIHRvIGNsb3NlIHRoaXMgd2luZG93LlxcXCJcIikpLFxuICAgICAgICAgIGZhbHNlKTtcbiAgfVxufTtcblxuY29uc3Qgc2V0Q29yZUVmZmVjdGZ1bEZuc09uRXJsVmFsdWVzID0gZnVuY3Rpb24ocmVwcmVzZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbihlbnYsIGZucykge1xuICAgIGNvbnN0IF9yZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgZm5OYW1lIGluIGZucykge1xuICAgICAgaWYgKCFfX2hhc1Byb3AuY2FsbChmbnMsIGZuTmFtZSkpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgZm4gPSBmbnNbZm5OYW1lXTtcbiAgICAgIGVudltmbk5hbWVdID0gY3JlYXRlRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uKGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHJlcHJlc2VudChmbihlcmxBcmdzKSk7XG4gICAgICB9KTtcbiAgICAgIF9yZXN1bHRzLnB1c2goZW52W2ZuTmFtZV0pO1xuICAgIH1cbiAgICByZXR1cm4gX3Jlc3VsdHM7XG4gIH07XG59O1xuXG5jb25zdCBkaXNwbGF5RWZmZWN0c09uRXJsVmFsdWVzID0ge1xuICAncHJpbnQnOiBmdW5jdGlvbihlcmxBcmdzKSB7XG4gICAgcmV0dXJuIF9wclN0cihlcmxBcmdzLCBmYWxzZSk7XG4gIH0sXG4gICdwcmV0dHktcHJpbnQnOiBmdW5jdGlvbihlcmxBcmdzKSB7XG4gICAgcmV0dXJuIF9wclN0cihlcmxBcmdzLCB0cnVlKTtcbiAgfSxcbiAgJy1xdWl0LSc6IF9xdWl0Xyxcbn07XG5cbmV4cG9ydCB7IGdldEVudmlyb25tZW50IH07XG4iLCJpbXBvcnQgeyBjYXIgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybExpc3QgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN5bWJvbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXh0cmFjdEpzVmFsdWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGZyb21BcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgZnJvbUVybEluZGV4IH0gZnJvbSAnLi9pbmRleC11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBfcHJvY2VzcyB9IGZyb20gJy4vX3Byb2Nlc3MnO1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgdG9rZW5pemVBbmRQYXJzZSB9IGZyb20gJy4vdG9rZW5pemVBbmRQYXJzZSc7XG5pbXBvcnQgeyB0b1BhcnRpYWxBcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuXG5jb25zdCBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuY29uc3QgZ2V0RW52aXJvbm1lbnQgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgY29uc3QgZW52aXJvbm1lbnQgPSBjb25maWcuZW52aXJvbm1lbnQ7XG4gIGNvbnN0IHBhcnNlID0gZnVuY3Rpb24oZXJsQXJncykge1xuICAgIHJldHVybiB0b2tlbml6ZUFuZFBhcnNlKHN0cmlwUXVvdGVzKGV4dHJhY3RKc1ZhbHVlKGNhcihlcmxBcmdzKSkpKTtcbiAgfTtcbiAgY29uc3QgZnVuY3Rpb25zT25FcmxWYWx1ZXMgPSB7IHBhcnNlOiBwYXJzZSB9O1xuICBzZXRDb3JlRm5zT25FcmxWYWx1ZXMoZW52aXJvbm1lbnQsIGZ1bmN0aW9uc09uRXJsVmFsdWVzKTtcbiAgcmV0dXJuIGVudmlyb25tZW50O1xufTtcblxuY29uc3QgX3Byb2Nlc3NfID0gX3Byb2Nlc3MoZnVuY3Rpb24oZXJsVmFsKSB7XG4gIHJldHVybiBlcmxWYWw7XG59KTtcblxuY29uc3Qgc2V0Q29yZUZuc09uRXJsVmFsdWVzID0gZnVuY3Rpb24oZW52LCBmbnMpIHtcbiAgY29uc3QgX3Jlc3VsdHMgPSBbXTtcbiAgZm9yIChsZXQgZm5OYW1lIGluIGZucykge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoZm5zLCBmbk5hbWUpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3QgZm4gPSBmbnNbZm5OYW1lXTtcbiAgICBfcmVzdWx0cy5wdXNoKGVudltmbk5hbWVdID0gY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbihmbikpO1xuICB9XG4gIHJldHVybiBfcmVzdWx0cztcbn07XG5cbmNvbnN0IHN0cmlwUXVvdGVzID0gZnVuY3Rpb24oanNTdHJpbmcpIHtcbiAgcmV0dXJuIGpzU3RyaW5nLnNsaWNlKDEsIC0xKTtcbn07XG5cbmV4cG9ydCB7IGdldEVudmlyb25tZW50IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBlcmxOaWwgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGV4dHJhY3RKc1ZhbHVlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBmcm9tRXJsSW5kZXggfSBmcm9tICcuL2luZGV4LXV0aWxpdGllcyc7XG5pbXBvcnQgeyBfcHJvY2VzcyB9IGZyb20gJy4vX3Byb2Nlc3MnO1xuaW1wb3J0IHsgdG9QYXJ0aWFsQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcblxuY29uc3QgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbmNvbnN0IGdldEVudmlyb25tZW50ID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gIGNvbnN0IGVudmlyb25tZW50ID0gY29uZmlnLmVudmlyb25tZW50O1xuICBjb25zdCBmdW5jdGlvbnNPbkVybFZhbHVlcyA9IHtcbiAgICAnbG9hZCc6IGxvYWQsXG4gICAgJ2xvYWQtd2l0aC1lbnYnOiBsb2FkV2l0aEVudixcbiAgICAnbG9hZC13aXRoLWJhcmUtZW52JzogbG9hZFdpdGhCYXJlRW52XG4gIH07XG4gIHNldENvcmVGbnNPbkVybFZhbHVlcyhlbnZpcm9ubWVudCwgZnVuY3Rpb25zT25FcmxWYWx1ZXMpO1xuICByZXR1cm4gZW52aXJvbm1lbnQ7XG59O1xuXG5jb25zdCBnZXRfanNGaWxlTmFtZV9hbmRfbG9jYWxFbnYgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEFyZ3MpO1xuICBjb25zdCBlcmxGaWxlTmFtZSA9IHBhcnRpYWxBcnJheVswXTtcbiAgY29uc3QgbG9jYWxFbnYgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIGNvbnN0IGpzRmlsZU5hbWUgPSBzdHJpcFF1b3RlcyhleHRyYWN0SnNWYWx1ZShlcmxGaWxlTmFtZSkpO1xuICByZXR1cm4gW2pzRmlsZU5hbWUsIGxvY2FsRW52XTtcbn07XG5cbmNvbnN0IGhhc1Byb2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJztcbn1cblxuY29uc3QgaGFzUHJvY2Vzc1dlYnBhY2tTaGltID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybihwcm9jZXNzLnRpdGxlID09PSAnYnJvd3NlcicgJiYgcHJvY2Vzcy5icm93c2VyKTtcbn1cblxuY29uc3QgaXNOb2RlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBoYXNQcm9jZXNzKCkgJiYgIWhhc1Byb2Nlc3NXZWJwYWNrU2hpbSgpO1xufVxuXG5jb25zdCBsb2FkID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBpZiAoaXNOb2RlKCkpIHtcbiAgICByZXR1cm4gX3Byb2Nlc3NfKF9yZWFkKGVybEFyZ3MpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG5jb25zdCBsb2FkV2l0aEJhcmVFbnYgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGlmIChpc05vZGUoKSkge1xuICAgIGNvbnN0IHRlbXAgPSBnZXRfanNGaWxlTmFtZV9hbmRfbG9jYWxFbnYoZXJsQXJncyk7XG4gICAgY29uc3QganNGaWxlTmFtZSA9IHRlbXBbMF07XG4gICAgY29uc3QgbG9jYWxFbnYgPSB0ZW1wWzFdO1xuICAgIHJldHVybiBfcHJvY2Vzc0ZpbGVBbmRFbnYoXG4gICAgICByZWFkRmlsZShqc0ZpbGVOYW1lKSxcbiAgICAgIFtmcm9tRXJsSW5kZXgobG9jYWxFbnYpXSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxuY29uc3QgbG9hZFdpdGhFbnYgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGlmIChpc05vZGUoKSkge1xuICAgIGNvbnN0IHRlbXAgPSBnZXRfanNGaWxlTmFtZV9hbmRfbG9jYWxFbnYoZXJsQXJncyk7XG4gICAgY29uc3QganNGaWxlTmFtZSA9IHRlbXBbMF07XG4gICAgY29uc3QgbG9jYWxFbnYgPSB0ZW1wWzFdO1xuICAgIHJldHVybiBfcHJvY2Vzc0ZpbGVBbmRFbnYoXG4gICAgICByZWFkRmlsZShqc0ZpbGVOYW1lKSxcbiAgICAgIFtmcm9tRXJsSW5kZXgobG9jYWxFbnYpLCBlbnZpcm9ubWVudF0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbmNvbnN0IF9wcm9jZXNzXyA9IGZ1bmN0aW9uKGpzU3RyaW5nKSB7XG4gIHJldHVybiBfcHJvY2VzcyhbZW52aXJvbm1lbnRdKShqc1N0cmluZyk7XG59O1xuXG5jb25zdCBfcHJvY2Vzc0ZpbGVBbmRFbnYgPSBmdW5jdGlvbihmaWxlLCBlbnZTdGFjaykge1xuICByZXR1cm4gX3Byb2Nlc3MoZW52U3RhY2spKGZpbGUpO1xufTtcblxuY29uc3QgX3JlYWQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGNvbnN0IGpzRmlsZU5hbWUgPSBnZXRfanNGaWxlTmFtZV9hbmRfbG9jYWxFbnYoZXJsQXJncylbMF07XG4gIHJldHVybiByZWFkRmlsZShqc0ZpbGVOYW1lKTtcbn07XG5cbmNvbnN0IHJlYWRGaWxlID0gZnVuY3Rpb24oanNGaWxlTmFtZSkge1xuICAvL3JldHVybiByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYyhqc0ZpbGVOYW1lKS50b1N0cmluZygpO1xuICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IHNldENvcmVGbnNPbkVybFZhbHVlcyA9IGZ1bmN0aW9uKGVudiwgZm5zKSB7XG4gIGNvbnN0IF9yZXN1bHRzID0gW107XG4gIGZvciAobGV0IGZuTmFtZSBpbiBmbnMpIHtcbiAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGZucywgZm5OYW1lKSkgY29udGludWU7XG4gICAgY29uc3QgZm4gPSBmbnNbZm5OYW1lXTtcbiAgICBfcmVzdWx0cy5wdXNoKGVudltmbk5hbWVdID0gY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbihmbikpO1xuICB9XG4gIHJldHVybiBfcmVzdWx0cztcbn07XG5cbmNvbnN0IHN0cmlwUXVvdGVzID0gZnVuY3Rpb24oanNTdHJpbmcpIHtcbiAgcmV0dXJuIGpzU3RyaW5nLnNsaWNlKDEsIC0xKTtcbn07XG5cbmV4cG9ydCB7IGdldEVudmlyb25tZW50IH07XG4iLCJpbXBvcnQgeyBhZGRFbnYgfSBmcm9tICcuL2Vudi11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY2FyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBjYXRjaFN0YXIgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBjZHIgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGNpcmN1bXBlbmRRdW90ZXMgfSBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjb21tZW50U2lnbmFsIH0gZnJvbSAnLi9jb21tZW50U2lnbmFsJztcbmltcG9ydCB7IGNyZWF0ZUVybEluZGV4IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxLZXl3b3JkIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxNYWNybyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTnVtYmVyIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxTdHJpbmcgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN5bWJvbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsVXNlclB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZGVmQmFuZyB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IF9kbyB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGVybE5pbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgX2V2YWwgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBfZXZhbFdpdGhFbnYgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBleHBhbmRNYWNybyB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGV4dHJhY3RKc1ZhbHVlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGZuU3RhciB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGZyb21BcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgZnJvbUVybEluZGV4IH0gZnJvbSAnLi9pbmRleC11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZnJvbUpzT2JqZWN0cyB9IGZyb20gJy4vaW5kZXgtdXRpbGl0aWVzJztcbmltcG9ydCB7IF9nZXRDdXJyZW50RW52IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgX2dldERlZmF1bHRFbnYgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBfaWYgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBpc0VybENvcmVFZmZlY3RmdWxGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxDb3JlUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybElnbm9yZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxLZXl3b3JkIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybExpc3QgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTWFjcm8gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsU3ltYm9sIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybFVzZXJQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzSnNTdHJpbmcgfSBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0tleXdvcmQgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBsZXRTdGFyIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbGV0cmVjU3RhciB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGxvb2t1cCB9IGZyb20gJy4vZW52LXV0aWxpdGllcyc7XG5pbXBvcnQgeyBtYWNyb1N0YXIgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IG5leHQgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHF1YXNpcXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBxdW90ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHNwbGljZVVucXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyB1bnF1b3RlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcmVjdXJzZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyByZWR1Y2VCeTIgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHJldmVyc2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHNldE1haW5FbnYgfSBmcm9tICcuL2Vudi11dGlsaXRpZXMnO1xuaW1wb3J0IHsgc3BsYXQgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyB0b1BhcnRpYWxBcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgdHJ5U3RhciB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHVuZGVmQmFuZyB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHVuc2V0TWFpbkVudiB9IGZyb20gJy4vZW52LXV0aWxpdGllcyc7XG5cbmNvbnN0IF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5jb25zdCBjcmVhdGVGbiA9IGZ1bmN0aW9uKGVybExpc3QsIGVudnMpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybFVzZXJQdXJlRnVuY3Rpb24oe1xuICAgIGxvY2FsRW52czogZW52cy5zbGljZSgwKSxcbiAgICBlcmxFeHByZXNzaW9uOiBuZXh0KGVybExpc3QpLFxuICAgIGVybFBhcmFtZXRlcnM6IGNhcihlcmxMaXN0KVxuICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxvY2FsRW52ID0gZnVuY3Rpb24oZXJsUGFyYW1zLCBlcmxBcmdzKSB7XG4gIGNvbnN0IGVudiA9IHt9O1xuICB3aGlsZSAoIWlzRW1wdHkoZXJsUGFyYW1zKSkge1xuICAgIGNvbnN0IGpzUGFyYW0gPSBleHRyYWN0SnNWYWx1ZShjYXIoZXJsUGFyYW1zKSk7XG4gICAgaWYgKGpzUGFyYW0gPT09IHNwbGF0KSB7XG4gICAgICBlbnZbZXh0cmFjdEpzVmFsdWUobmV4dChlcmxQYXJhbXMpKV0gPSBlcmxBcmdzO1xuICAgICAgcmV0dXJuIGVudjtcbiAgICB9IGVsc2Uge1xuICAgICAgZW52W2pzUGFyYW1dID0gY2FyKGVybEFyZ3MpO1xuICAgICAgZXJsUGFyYW1zID0gY2RyKGVybFBhcmFtcyk7XG4gICAgICBlcmxBcmdzID0gY2RyKGVybEFyZ3MpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZW52O1xufTtcblxuY29uc3QgY3JlYXRlTWFjcm8gPSBmdW5jdGlvbihlcmxMaXN0LCBlbnZzKSB7XG4gIHJldHVybiBjcmVhdGVFcmxNYWNybyh7XG4gICAgbG9jYWxFbnZzOiBlbnZzLnNsaWNlKDApLFxuICAgIGVybEV4cHJlc3Npb246IG5leHQoZXJsTGlzdCksXG4gICAgZXJsUGFyYW1ldGVyczogY2FyKGVybExpc3QpXG4gIH0pO1xufTtcblxuY29uc3QgZGVmaW5lTmV3VmFsdWUgPSBmdW5jdGlvbihlcmxMaXN0LCBlbnZzLCBhZGRSZXN1bHQpIHtcbiAgY29uc3QganNLZXkgPSBleHRyYWN0SnNWYWx1ZShjYXIoZXJsTGlzdCkpO1xuICBjb25zdCBlcmxWYWx1ZSA9IF9ldmFsdWF0ZShuZXh0KGVybExpc3QpLCBlbnZzLCBhZGRSZXN1bHQpO1xuICByZXR1cm4gc2V0TWFpbkVudihlbnZzLCBqc0tleSwgZXJsVmFsdWUpO1xufTtcblxuY29uc3QgZXZhbFF1YXNpcXVvdGVkRXhwciA9IGZ1bmN0aW9uKGV4cHIsIGVudnMsIGFkZFJlc3VsdCkge1xuICBpZiAoIWlzRXJsTGlzdChleHByKSkge1xuICAgIHJldHVybiBleHByO1xuICB9XG4gIGNvbnN0IG1hbmFnZUl0ZW0gPSBmdW5jdGlvbihtZW1vLCBpdGVtKSB7XG4gICAgaWYgKGlzVW5xdW90ZWRFeHByKGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KF9ldmFsdWF0ZShuZXh0KGl0ZW0pLCBlbnZzLCBhZGRSZXN1bHQpLCBtZW1vKTtcbiAgICB9IGVsc2UgaWYgKGlzU3BsaWNlVW5xdW90ZWRFeHByKGl0ZW0pKSB7XG4gICAgICAgIGNvbnN0IF9tYW5hZ2VJdGVtID0gZnVuY3Rpb24oX21lbW8sIF9pdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUVybExpc3QoX2l0ZW0sIF9tZW1vKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlZHVjZShtZW1vLCBfbWFuYWdlSXRlbSwgX2V2YWx1YXRlKG5leHQoaXRlbSksIGVudnMsIGFkZFJlc3VsdCkpO1xuICAgIH0gZWxzZSBpZiAoaXNFcmxMaXN0KGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KGV2YWxRdWFzaXF1b3RlZEV4cHIoaXRlbSwgZW52cywgYWRkUmVzdWx0KSwgbWVtbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVybExpc3QoaXRlbSwgbWVtbyk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gcmV2ZXJzZShyZWR1Y2UoY3JlYXRlRXJsTGlzdCgpLCBtYW5hZ2VJdGVtLCBleHByKSk7XG59O1xuXG5jb25zdCBfZXZhbHVhdGUgPSBmdW5jdGlvbihlcmxFeHByLCBlbnZzLCBhZGRSZXN1bHQpIHtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAoaXNFcmxTeW1ib2woZXJsRXhwcikpIHtcbiAgICAgIGNvbnN0IGpzU3RyaW5nID0gZXh0cmFjdEpzVmFsdWUoZXJsRXhwcik7XG4gICAgICBpZiAoaXNLZXl3b3JkKGpzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRXJsS2V5d29yZChqc1N0cmluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9va3VwKGVudnMsIGpzU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzRXJsSW5kZXgoZXJsRXhwcikpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZXh0cmFjdEpzVmFsdWUoZXJsRXhwcik7XG4gICAgICBjb25zdCBuZXdJbmRleCA9IHt9O1xuICAgICAgZm9yIChsZXQga2V5IGluIGluZGV4KSB7XG4gICAgICAgIGlmICghX19oYXNQcm9wLmNhbGwoaW5kZXgsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICBuZXdJbmRleFtrZXldID0gX2V2YWx1YXRlKGluZGV4W2tleV0sIGVudnMsIGFkZFJlc3VsdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3JlYXRlRXJsSW5kZXgobmV3SW5kZXgpO1xuICAgIH0gZWxzZSBpZiAoIShpc0VybExpc3QoZXJsRXhwcikpKSB7XG4gICAgICByZXR1cm4gZXJsRXhwcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJsRXhwciA9IGZpbHRlcigoZnVuY3Rpb24oeCkge1xuICAgICAgICByZXR1cm4gIShpZ25vcmFibGUoeCwgZW52cywgYWRkUmVzdWx0KSk7XG4gICAgICB9KSwgZXJsRXhwcik7XG4gICAgICBjb25zdCBlcmxFeHByQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxFeHByKTtcbiAgICAgIGNvbnN0IGhlYWQgPSBlcmxFeHByQXJyYXlbMF07XG4gICAgICBjb25zdCBhcmcxID0gZXJsRXhwckFycmF5WzFdO1xuICAgICAgY29uc3QgcmVtYWluaW5nQXJncyA9IGVybEV4cHJBcnJheVsyXTtcbiAgICAgIGNvbnN0IHRhaWxMaXN0ID0gY2RyKGVybEV4cHIpO1xuICAgICAgc3dpdGNoIChleHRyYWN0SnNWYWx1ZShoZWFkKSkge1xuICAgICAgICBjYXNlIGRlZkJhbmc6XG4gICAgICAgICAgcmV0dXJuIGRlZmluZU5ld1ZhbHVlKHRhaWxMaXN0LCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICBjYXNlIHVuZGVmQmFuZzpcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVWYWx1ZSh0YWlsTGlzdCwgZW52cyk7XG4gICAgICAgIGNhc2UgX2V2YWw6XG4gICAgICAgICAgZXJsRXhwciA9IF9ldmFsdWF0ZShhcmcxLCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIF9ldmFsV2l0aEVudjpcbiAgICAgICAgICBlbnZzID0gW2Zyb21FcmxJbmRleChfZXZhbHVhdGUoYXJnMSwgZW52cywgYWRkUmVzdWx0KSldO1xuICAgICAgICAgIGVybEV4cHIgPSBfZXZhbHVhdGUoY2FyKHJlbWFpbmluZ0FyZ3MpLCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxldFN0YXI6XG4gICAgICAgICAgZXJsRXhwciA9IGNhcihyZW1haW5pbmdBcmdzKTtcbiAgICAgICAgICBlbnZzID0gYWRkRW52KGVudnMsIHJlZHVjZUxldChlbnZzLCBhcmcxLCBhZGRSZXN1bHQpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsZXRyZWNTdGFyOlxuICAgICAgICAgIGVybEV4cHIgPSBjYXIocmVtYWluaW5nQXJncyk7XG4gICAgICAgICAgZW52cyA9IGFkZEVudihlbnZzLCByZWR1Y2VMZXRyZWMoZW52cywgYXJnMSwgYWRkUmVzdWx0KSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgX2RvOlxuICAgICAgICAgIHJldHVybiBmb3JFYWNoKGV2YWx1YXRlKGVudnMsIGFkZFJlc3VsdCksIHRhaWxMaXN0KTtcbiAgICAgICAgY2FzZSBfZ2V0Q3VycmVudEVudjpcbiAgICAgICAgICByZXR1cm4gZnJvbUpzT2JqZWN0cy5hcHBseShudWxsLCBlbnZzLnJldmVyc2UoKSk7XG4gICAgICAgIGNhc2UgX2dldERlZmF1bHRFbnY6XG4gICAgICAgICAgcmV0dXJuIGZyb21Kc09iamVjdHMoZW52c1tlbnZzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgY2FzZSBfaWY6XG4gICAgICAgICAgaWYgKGV4dHJhY3RKc1ZhbHVlKF9ldmFsdWF0ZShhcmcxLCBlbnZzLCBhZGRSZXN1bHQpKSkge1xuICAgICAgICAgICAgZXJsRXhwciA9IGNhcihyZW1haW5pbmdBcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBvdGhlcndpc2UgPSBuZXh0KHJlbWFpbmluZ0FyZ3MpO1xuICAgICAgICAgIGlmIChpc0VtcHR5KG90aGVyd2lzZSkpIHtcbiAgICAgICAgICAgIGVybEV4cHIgPSBlcmxOaWw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVybEV4cHIgPSBvdGhlcndpc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGZuU3RhcjpcbiAgICAgICAgICByZXR1cm4gY3JlYXRlRm4odGFpbExpc3QsIGVudnMpO1xuICAgICAgICBjYXNlIG1hY3JvU3RhcjpcbiAgICAgICAgICByZXR1cm4gY3JlYXRlTWFjcm8odGFpbExpc3QsIGVudnMpO1xuICAgICAgICBjYXNlIHF1b3RlOlxuICAgICAgICAgIHJldHVybiBjYXIodGFpbExpc3QpO1xuICAgICAgICBjYXNlIHF1YXNpcXVvdGU6XG4gICAgICAgICAgcmV0dXJuIGV2YWxRdWFzaXF1b3RlZEV4cHIoY2FyKHRhaWxMaXN0KSwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgY2FzZSBleHBhbmRNYWNybzpcbiAgICAgICAgICByZXR1cm4gX2V4cGFuZE1hY3JvKGNhcihhcmcxKSwgY2RyKGFyZzEpLCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICBjYXNlIHRyeVN0YXI6XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBfZXZhbHVhdGUoYXJnMSwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICAgICAgICAgIGxldCBleCA9IF9lcnJvcjtcbiAgICAgICAgICAgIGlmIChpc0VtcHR5KHJlbWFpbmluZ0FyZ3MpKSB7XG4gICAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nQXJnc0FycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMywgY2FyKHJlbWFpbmluZ0FyZ3MpKTtcbiAgICAgICAgICAgICAgY29uc3QgX2NhdGNoID0gcmVtYWluaW5nQXJnc0FycmF5WzBdO1xuICAgICAgICAgICAgICBjb25zdCBfZXggPSByZW1haW5pbmdBcmdzQXJyYXlbMV07XG4gICAgICAgICAgICAgIGNvbnN0IGNhdGNoRXhwciA9IHJlbWFpbmluZ0FyZ3NBcnJheVsyXTtcbiAgICAgICAgICAgICAgaWYgKChleHRyYWN0SnNWYWx1ZShfY2F0Y2gpKSAhPT0gXCJjYXRjaCpcIikge1xuICAgICAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChleCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXggPSBjcmVhdGVFcmxTdHJpbmcoY2lyY3VtcGVuZFF1b3RlcyhleC5tZXNzYWdlKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc3QgbmV3RW52ID0ge307XG4gICAgICAgICAgICAgIG5ld0VudltleHRyYWN0SnNWYWx1ZShfZXgpXSA9IGV4O1xuICAgICAgICAgICAgICByZXR1cm4gX2V2YWx1YXRlKGNhdGNoRXhwciwgYWRkRW52KGVudnMsIG5ld0VudiksIGFkZFJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnN0IGVybFN5bWJvbCA9IGhlYWQ7XG4gICAgICAgICAgZXJsRXhwciA9IHRhaWxMaXN0O1xuICAgICAgICAgIGNvbnN0IGVybEludm9rYWJsZSA9IF9ldmFsdWF0ZShlcmxTeW1ib2wsIGVudnMsIGFkZFJlc3VsdCk7XG4gICAgICAgICAgaWYgKGlzRXJsS2V5d29yZChlcmxJbnZva2FibGUpKSB7XG4gICAgICAgICAgICBlcmxFeHByID0gY3JlYXRlRXJsTGlzdChlcmxJbnZva2FibGUsIHRhaWxMaXN0KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzRXJsTWFjcm8oZXJsSW52b2thYmxlKSkge1xuICAgICAgICAgICAgZXJsRXhwciA9IF9leHBhbmRNYWNybyhoZWFkLCB0YWlsTGlzdCwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzRXJsQ29yZVB1cmVGdW5jdGlvbihlcmxJbnZva2FibGUpKSB7XG4gICAgICAgICAgICBjb25zdCBmbiA9IGV4dHJhY3RKc1ZhbHVlKGVybEludm9rYWJsZSk7XG4gICAgICAgICAgICBjb25zdCBlcmxBcmdzID0gbWFwKGV2YWx1YXRlKGVudnMsIGFkZFJlc3VsdCksIGVybEV4cHIpO1xuICAgICAgICAgICAgcmV0dXJuIGZuKGVybEFyZ3MpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24oZXJsSW52b2thYmxlKSkge1xuICAgICAgICAgICAgY29uc3QgZm4gPSBleHRyYWN0SnNWYWx1ZShlcmxJbnZva2FibGUpO1xuICAgICAgICAgICAgY29uc3QgZXJsQXJncyA9IG1hcChldmFsdWF0ZShlbnZzLCBhZGRSZXN1bHQpLCBlcmxFeHByKTtcbiAgICAgICAgICAgIGFkZFJlc3VsdChmbihlcmxBcmdzKSk7XG4gICAgICAgICAgICByZXR1cm4gZXJsTmlsO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNFcmxVc2VyUHVyZUZ1bmN0aW9uKGVybEludm9rYWJsZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGpzVmFsdWUgPSBleHRyYWN0SnNWYWx1ZShlcmxJbnZva2FibGUpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxFbnZzID0ganNWYWx1ZS5sb2NhbEVudnM7XG4gICAgICAgICAgICBjb25zdCBlcmxFeHByZXNzaW9uID0ganNWYWx1ZS5lcmxFeHByZXNzaW9uO1xuICAgICAgICAgICAgY29uc3QgZXJsUGFyYW1ldGVycyA9IGpzVmFsdWUuZXJsUGFyYW1ldGVycztcbiAgICAgICAgICAgIGNvbnN0IGVybEFyZ3MgPSBtYXAoZXZhbHVhdGUoZW52cywgYWRkUmVzdWx0KSwgZXJsRXhwcik7XG4gICAgICAgICAgICBlcmxFeHByID0gZXJsRXhwcmVzc2lvbjtcbiAgICAgICAgICAgIGNvbnN0IG5ld0VudiA9IGNyZWF0ZUxvY2FsRW52KGVybFBhcmFtZXRlcnMsIGVybEFyZ3MpO1xuICAgICAgICAgICAgZW52cyA9IGFkZEVudihsb2NhbEVudnMsIG5ld0Vudik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IFwiXCJcbiAgICAgICAgICAgICAgKyAoZXh0cmFjdEpzVmFsdWUoZXJsU3ltYm9sKSlcbiAgICAgICAgICAgICAgKyBcIiBkb2VzIG5vdCBldmFsdWF0ZSB0byBhIGZ1bmN0aW9uLCBtYWNybywgb3Iga2V5d29yZC5cIjtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBldmFsdWF0ZSA9IGZ1bmN0aW9uKGVudnMsIGFkZFJlc3VsdCkge1xuICByZXR1cm4gZnVuY3Rpb24oZXJsRXhwcikge1xuICAgIGlmIChlcmxFeHByID09PSBjb21tZW50U2lnbmFsKSB7XG4gICAgICByZXR1cm4gY29tbWVudFNpZ25hbDtcbiAgICB9XG4gICAgcmV0dXJuIF9ldmFsdWF0ZShlcmxFeHByLCBlbnZzLCBhZGRSZXN1bHQpO1xuICB9O1xufTtcblxuY29uc3QgX2V4cGFuZE1hY3JvID0gZnVuY3Rpb24oZXJsTWFjcm9TeW1ib2wsIGVybEFyZ3MsIGVudnMsIGFkZFJlc3VsdCkge1xuICBjb25zdCBlcmxNYWNybyA9IF9ldmFsdWF0ZShlcmxNYWNyb1N5bWJvbCwgZW52cywgYWRkUmVzdWx0KTtcbiAgY29uc3QganNWYWx1ZSA9IGV4dHJhY3RKc1ZhbHVlKGVybE1hY3JvKTtcbiAgY29uc3QgbG9jYWxFbnZzID0ganNWYWx1ZS5sb2NhbEVudnM7XG4gIGNvbnN0IGVybEV4cHJlc3Npb24gPSBqc1ZhbHVlLmVybEV4cHJlc3Npb247XG4gIGNvbnN0IGVybFBhcmFtZXRlcnMgPSBqc1ZhbHVlLmVybFBhcmFtZXRlcnM7XG4gIGNvbnN0IG5ld0VudiA9IGNyZWF0ZUxvY2FsRW52KGVybFBhcmFtZXRlcnMsIGVybEFyZ3MpO1xuICBjb25zdCBuZXdFbnZTdGFjayA9IGFkZEVudihsb2NhbEVudnMsIG5ld0Vudik7XG4gIHJldHVybiBfZXZhbHVhdGUoZXJsRXhwcmVzc2lvbiwgbmV3RW52U3RhY2ssIGFkZFJlc3VsdCk7XG59O1xuXG5jb25zdCBpZ25vcmFibGUgPSBmdW5jdGlvbihlcmxWYWwsIGVudnMsIGFkZFJlc3VsdCkge1xuICBpZiAoaXNFcmxJZ25vcmUoZXJsVmFsKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICghaXNFcmxMaXN0KGVybFZhbCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qgc3ltYm9sID0gY2FyKGVybFZhbCk7XG4gIGlmICghaXNFcmxTeW1ib2woc3ltYm9sKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBqc1N0cmluZyA9IGV4dHJhY3RKc1ZhbHVlKHN5bWJvbCk7XG4gIGlmIChqc1N0cmluZyA9PT0gJ2lnbm9yZScpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoanNTdHJpbmcgPT09ICdpZ25vcmVJZlRydWUnKSB7XG4gICAgcmV0dXJuIGV4dHJhY3RKc1ZhbHVlKF9ldmFsdWF0ZShuZXh0KGVybFZhbCksIGVudnMsIGFkZFJlc3VsdCkpO1xuICB9XG4gIGlmIChqc1N0cmluZyA9PT0gJ2lnbm9yZVVubGVzc1RydWUnKSB7XG4gICAgcmV0dXJuICFleHRyYWN0SnNWYWx1ZShfZXZhbHVhdGUobmV4dChlcmxWYWwpLCBlbnZzLCBhZGRSZXN1bHQpKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCByZWR1Y2VMZXQgPSBmdW5jdGlvbihlbnZzLCBsaXN0LCBhZGRSZXN1bHQpIHtcbiAgY29uc3QgbmV3RW52ID0ge307XG4gIGNvbnN0IF9lbnZzID0gYWRkRW52KGVudnMsIG5ld0Vudik7XG4gIHdoaWxlICghaXNFbXB0eShsaXN0KSkge1xuICAgIGNvbnN0IGpzS2V5ID0gZXh0cmFjdEpzVmFsdWUobGlzdC52YWx1ZSk7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gICAgY29uc3QgZW52VmFsdWUgPSBfZXZhbHVhdGUobGlzdC52YWx1ZSwgX2VudnMsIGFkZFJlc3VsdCk7XG4gICAgbmV3RW52W2pzS2V5XSA9IGVudlZhbHVlO1xuICAgIGxpc3QgPSByZWN1cnNlKGxpc3QpO1xuICB9XG4gIHJldHVybiBuZXdFbnY7XG59O1xuXG5jb25zdCByZWR1Y2VMZXRyZWMgPSBmdW5jdGlvbihlbnZzLCBsaXN0LCBhZGRSZXN1bHQpIHtcbiAgY29uc3QgbmV3RW52ID0ge307XG4gIGNvbnN0IF9lbnZzID0gYWRkRW52KGVudnMsIG5ld0Vudik7XG4gIHdoaWxlICghaXNFbXB0eShsaXN0KSkge1xuICAgIGNvbnN0IGpzS2V5ID0gZXh0cmFjdEpzVmFsdWUobGlzdC52YWx1ZSk7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gICAgY29uc3QgX2VybEV4cHIgPSBmcm9tQXJyYXkoXG4gICAgICBbICBjcmVhdGVFcmxTeW1ib2woXCJmaXgqXCIpLFxuICAgICAgICAgZnJvbUFycmF5KFtjcmVhdGVFcmxTeW1ib2woXCJmbipcIiksXG4gICAgICAgICBmcm9tQXJyYXkoW2pzS2V5XSksXG4gICAgICAgICBsaXN0LnZhbHVlXSlcbiAgICAgIF0pO1xuICAgIGNvbnN0IGVudlZhbHVlID0gX2V2YWx1YXRlKF9lcmxFeHByLCBfZW52cywgYWRkUmVzdWx0KTtcbiAgICBuZXdFbnZbanNLZXldID0gZW52VmFsdWU7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gIH1cbiAgcmV0dXJuIG5ld0Vudjtcbn07XG5cbmNvbnN0IGlzU3BsaWNlVW5xdW90ZSA9IGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gIHJldHVybiAoZXh0cmFjdEpzVmFsdWUoZXJsVmFsdWUpKSA9PT0gc3BsaWNlVW5xdW90ZTtcbn07XG5cbmNvbnN0IGlzU3BsaWNlVW5xdW90ZWRFeHByID0gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgcmV0dXJuIGlzRXJsTGlzdChlcmxWYWx1ZSkgJiYgaXNTcGxpY2VVbnF1b3RlKGNhcihlcmxWYWx1ZSkpO1xufTtcblxuY29uc3QgdW5kZWZpbmVWYWx1ZSA9IGZ1bmN0aW9uKGVybExpc3QsIGVudnMpIHtcbiAgY29uc3QganNLZXkgPSBleHRyYWN0SnNWYWx1ZShjYXIoZXJsTGlzdCkpO1xuICByZXR1cm4gdW5zZXRNYWluRW52KGVudnMsIGpzS2V5KTtcbn07XG5cbmNvbnN0IGlzVW5xdW90ZSA9IGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gIHJldHVybiBleHRyYWN0SnNWYWx1ZShlcmxWYWx1ZSkgPT09IHVucXVvdGU7XG59O1xuXG5jb25zdCBpc1VucXVvdGVkRXhwciA9IGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gIHJldHVybiBpc0VybExpc3QoZXJsVmFsdWUpICYmIGlzVW5xdW90ZShjYXIoZXJsVmFsdWUpKTtcbn07XG5cbmV4cG9ydCB7IGV2YWx1YXRlIH07XG4iLCJpbXBvcnQgeyBnZXRFbnZpcm9ubWVudCBhcyBzZXRFbnYwIH0gZnJvbSAnLi9lbnYwJztcbmltcG9ydCB7IGdldEVudmlyb25tZW50IGFzIHNldEVudjEgfSBmcm9tICcuL2VudjEnO1xuaW1wb3J0IHsgZ2V0RW52aXJvbm1lbnQgYXMgc2V0RW52MiB9IGZyb20gJy4vZW52Mic7XG5pbXBvcnQgeyBnZXRFbnZpcm9ubWVudCBhcyBzZXRFbnYzIH0gZnJvbSAnLi9lbnYzJztcbmltcG9ydCB7IGdldEVudmlyb25tZW50IGFzIHNldEVudjQgfSBmcm9tICcuL2VudjQnO1xuXG5jb25zdCBnZXRMaXNwRW52aXJvbm1lbnQgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgY29uc3QgZGlzcGxheSA9IGNvbmZpZy5kaXNwbGF5O1xuICBjb25zdCBlbnZpcm9ubWVudCA9IHt9O1xuICBjb25zdCBfY29uZmlnID0ge1xuICAgIGRpc3BsYXk6IGRpc3BsYXksXG4gICAgZW52aXJvbm1lbnQ6IGVudmlyb25tZW50XG4gIH07XG4gIHNldEVudjAoX2NvbmZpZyk7XG4gIHNldEVudjEoX2NvbmZpZyk7XG4gIHNldEVudjIoX2NvbmZpZyk7XG4gIHNldEVudjMoX2NvbmZpZyk7XG4gIHNldEVudjQoX2NvbmZpZyk7XG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn07XG5cbmV4cG9ydCB7IGdldExpc3BFbnZpcm9ubWVudCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzSnNTdHJpbmcgfSBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5cbmNvbnN0IF9fc2xpY2UgICA9IFtdLnNsaWNlO1xuY29uc3QgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbmNvbnN0IGZyb21FcmxJbmRleCA9IGZ1bmN0aW9uKGVybEluZGV4KSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBjb25zdCBqc1ZhbHVlID0gZXJsSW5kZXguanNWYWx1ZTtcbiAgZm9yIChsZXQga2V5IGluIGpzVmFsdWUpIHtcbiAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGpzVmFsdWUsIGtleSkpIGNvbnRpbnVlO1xuICAgIGNvbnN0IHZhbHVlID0ganNWYWx1ZVtrZXldO1xuICAgIGlmIChpc0pzU3RyaW5nKGtleSkpIHtcbiAgICAgIGNvbnN0IG5ld0tleSA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgc3dpdGNoIChrZXlbMF0pIHtcbiAgICAgICAgICBjYXNlICc6JzpcbiAgICAgICAgICAgIHJldHVybiBrZXkuc2xpY2UoMSk7XG4gICAgICAgICAgY2FzZSAnXCInOlxuICAgICAgICAgICAgcmV0dXJuIGtleS5zbGljZSgxLCAtMSk7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgIH0pKCk7XG4gICAgICByZXN1bHRbbmV3S2V5XSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgZnJvbUpzT2JqZWN0cyA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBqc09iamVjdHMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICBjb25zdCBjb3B5ID0ge307XG4gIGNvbnN0IGxlbiA9IGpzT2JqZWN0cy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyAgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QganNPYmplY3QgPSBqc09iamVjdHNbaV07XG4gICAgZm9yIChsZXQga2V5IGluIGpzT2JqZWN0KSB7XG4gICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGpzT2JqZWN0LCBrZXkpKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IHZhbCA9IGpzT2JqZWN0W2tleV07XG4gICAgICBpZiAoaXNKc1N0cmluZyhrZXkpKSB7XG4gICAgICAgIGNvcHlbJzonICsga2V5XSA9IHZhbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvcHlba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUVybEluZGV4KGNvcHkpO1xufTtcblxuZXhwb3J0IHtcbiAgZnJvbUpzT2JqZWN0cyxcbiAgZnJvbUVybEluZGV4XG59O1xuIiwiaW1wb3J0IHsgY2lyY3VtcGVuZFF1b3RlcyB9ICAgZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3RyaW5nIH0gICAgZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBmcm9tQXJyYXkgfSAgICAgICAgICBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGdldExpc3BFbnZpcm9ubWVudCB9IGZyb20gJy4vZ2V0TGlzcEVudmlyb25tZW50JztcbmltcG9ydCB7IF9wcm9jZXNzIH0gICAgICAgICAgIGZyb20gJy4vX3Byb2Nlc3MnO1xuaW1wb3J0IHsgc2VyaWFsaXplIH0gICAgICAgICAgZnJvbSAnLi9zZXJpYWxpemUnO1xuaW1wb3J0IHN0YW5kYXJkRm5zQW5kTWFjcm9zICAgZnJvbSAnLi9zdGFuZGFyZC1mbnMtYW5kLW1hY3Jvcy5saXNwJztcbmltcG9ydCB7IHRva2VuaXplQW5kUGFyc2UgfSAgIGZyb20gJy4vdG9rZW5pemVBbmRQYXJzZSc7XG5cbmNvbnN0IF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5jb25zdCBfY3JlYXRlRXJsU3RyaW5nID0gZnVuY3Rpb24oanNTdHJpbmcpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhjaXJjdW1wZW5kUXVvdGVzKGpzU3RyaW5nKSk7XG59O1xuXG5jb25zdCBlbmNhcHN1bGF0ZSA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVmZmVjdDoge1xuICAgICAgICB0eXBlOiB0eXBlXG4gICAgICB9LFxuICAgICAgdmFsdWU6IGVybFZhbHVlXG4gICAgfTtcbiAgfTtcbn07XG5cbmNvbnN0IGVycm9yID0gZnVuY3Rpb24oZXJyb3JNZXNzYWdlKSB7XG4gIHJldHVybiBbZW5jYXBzdWxhdGUoJ2Vycm9yJykoXCJyZXBsIGVycm9yOiAoXCIgKyBlcnJvck1lc3NhZ2UgKyBcIilcIildO1xufTtcblxuY29uc3QgZmxhdHRlbklmTmVjZXNzYXJ5ID0gZnVuY3Rpb24oZWZmZWN0cykge1xuICBsZXQgdmFsdWU7XG4gIGxldCByZXN1bHRzID0gZWZmZWN0cztcbiAgd2hpbGUgKHJlc3VsdHMubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkodmFsdWUgPSByZXN1bHRzWzBdLnZhbHVlKSkge1xuICAgIHJlc3VsdHMgPSBmbGF0dGVuSWZOZWNlc3NhcnkodmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHRzO1xufTtcblxuY29uc3QgX2ludGVycHJldCA9IGZ1bmN0aW9uKGVudnMsIGpzU3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIF9zZXJpYWxpemUoXG4gICAgICBmbGF0dGVuSWZOZWNlc3NhcnkoXG4gICAgICAgIF9wcm9jZXNzKHRva2VuaXplQW5kUGFyc2UpKGVudnMpKGpzU3RyaW5nKSkpO1xuICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IoX2Vycm9yKTtcbiAgfVxufTtcblxuY29uc3QgaW50ZXJwcmV0ID0gZnVuY3Rpb24oanNTdHJpbmcsIHVzZXJKc0FycmF5KSB7XG4gIGlmICh1c2VySnNBcnJheSAhPSBudWxsKSB7XG4gICAgY29uc3QgdXNlckVudiA9IHtcbiAgICAgICcqQVJHVionOiBmcm9tQXJyYXkodXNlckpzQXJyYXkubWFwKF9jcmVhdGVFcmxTdHJpbmcpKVxuICAgIH07XG4gICAgcmV0dXJuIF9pbnRlcnByZXQoW3VzZXJFbnYsIGVudmlyb25tZW50XSwganNTdHJpbmcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBfaW50ZXJwcmV0KFtlbnZpcm9ubWVudF0sIGpzU3RyaW5nKTtcbiAgfVxufTtcblxuY29uc3QgX3NlcmlhbGl6ZSA9IGZ1bmN0aW9uKHJlc3VsdHMpIHtcbiAgcmV0dXJuIHJlc3VsdHMubWFwKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgIGNvbnN0IF9yZXN1bHQgPSB7fTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKHJlc3VsdCwga2V5KSkgY29udGludWU7XG4gICAgICBjb25zdCB2YWx1ZSA9IHJlc3VsdFtrZXldO1xuICAgICAgaWYgKGtleSA9PT0gJ2VmZmVjdCcpIHtcbiAgICAgICAgX3Jlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfcmVzdWx0W2tleV0gPSBzZXJpYWxpemUodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX3Jlc3VsdDtcbiAgfSk7XG59O1xuXG5jb25zdCBlbnZpcm9ubWVudCA9IGdldExpc3BFbnZpcm9ubWVudCh7XG4gIGRpc3BsYXk6IGVuY2Fwc3VsYXRlKCdkaXNwbGF5Jylcbn0pO1xuXG5pbnRlcnByZXQoc3RhbmRhcmRGbnNBbmRNYWNyb3MpO1xuXG5leHBvcnQgeyBpbnRlcnByZXQgfTtcbiIsImNvbnN0IGNpcmN1bXBlbmRRdW90ZXMgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4gJ1wiJyArIGpzU3RyaW5nICsgJ1wiJztcbn07XG5cbmNvbnN0IGlzSnNOYU4gPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIGlzSnNOdW1iZXIodmFsKSAmJiB2YWwgIT09IHZhbDtcbn07XG5cbmNvbnN0IGlzSnNOdW1iZXIgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59O1xuXG5jb25zdCBpc0pzU3RyaW5nID0gZnVuY3Rpb24oanNWYWwpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChqc1ZhbCkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufTtcblxuZXhwb3J0IHtcbiAgY2lyY3VtcGVuZFF1b3RlcyxcbiAgaXNKc05hTixcbiAgaXNKc051bWJlcixcbiAgaXNKc1N0cmluZ1xufTtcbiIsImNvbnN0IGRlcmVmICAgICAgICAgICAgICAgICA9ICdkZXJlZic7XG5jb25zdCBkZXJlZkdseXBoICAgICAgICAgICAgPSAnQCc7XG5jb25zdCBjYXRjaFN0YXIgICAgICAgICAgICAgPSAnY2F0Y2gqJztcbmNvbnN0IGRlZkJhbmcgICAgICAgICAgICAgICA9ICdkZWYhJztcbmNvbnN0IF9kbyAgICAgICAgICAgICAgICAgICA9ICdkbyc7XG5jb25zdCBfZXZhbCAgICAgICAgICAgICAgICAgPSAnZXZhbCc7XG5jb25zdCBfZXZhbFdpdGhFbnYgICAgICAgICAgPSAnZXZhbC13aXRoLWVudic7XG5jb25zdCBleHBhbmRNYWNybyAgICAgICAgICAgPSAnZXhwYW5kLW1hY3JvJztcbmNvbnN0IF9mYWxzZSAgICAgICAgICAgICAgICA9ICdmYWxzZSc7XG5jb25zdCBmblN0YXIgICAgICAgICAgICAgICAgPSAnZm4qJztcbmNvbnN0IF9nZXRDdXJyZW50RW52ICAgICAgICA9ICctZ2V0LWN1cnJlbnQtZW52LSc7XG5jb25zdCBfZ2V0RGVmYXVsdEVudiAgICAgICAgPSAnLWdldC1kZWZhdWx0LWVudi0nO1xuY29uc3QgX2lmICAgICAgICAgICAgICAgICAgID0gJ2lmJztcbmNvbnN0IGlnbm9yZUJhbmcgICAgICAgICAgICA9ICdpZ25vcmUhJztcbmNvbnN0IGlnbm9yZUJhbmdHbHlwaCAgICAgICA9ICcjISc7XG5jb25zdCBpZ25vcmVJZlRydWUgICAgICAgICAgPSAnaWdub3JlSWZUcnVlJztcbmNvbnN0IGlnbm9yZUlmVHJ1ZUdseXBoICAgICA9ICcjLSc7XG5jb25zdCBpZ25vcmVVbmxlc3NUcnVlICAgICAgPSAnaWdub3JlVW5sZXNzVHJ1ZSc7XG5jb25zdCBpZ25vcmVVbmxlc3NUcnVlR2x5cGggPSAnIysnO1xuY29uc3QgaWdub3JlICAgICAgICAgICAgICAgID0gJ2lnbm9yZSc7XG5jb25zdCBpbmRleEVuZCAgICAgICAgICAgICAgPSAnfSc7XG5jb25zdCBpbmRleFN0YXJ0ICAgICAgICAgICAgPSAneyc7XG5jb25zdCBsZXRTdGFyICAgICAgICAgICAgICAgPSAnbGV0Kic7XG5jb25zdCBsZXRyZWNTdGFyICAgICAgICAgICAgPSAnbGV0cmVjKic7XG5jb25zdCBsaXN0RW5kICAgICAgICAgICAgICAgPSAnKSc7XG5jb25zdCBsaXN0U3RhcnQgICAgICAgICAgICAgPSAnKCc7XG5jb25zdCBtYWNyb1N0YXIgICAgICAgICAgICAgPSAnbWFjcm8qJztcbmNvbnN0IG5pbCAgICAgICAgICAgICAgICAgICA9ICduaWwnO1xuY29uc3QgX3Byb2Nlc3MgICAgICAgICAgICAgID0gJy1wcm9jZXNzLSc7XG5jb25zdCBxdWFzaXF1b3RlICAgICAgICAgICAgPSAncXVhc2lxdW90ZSc7XG5jb25zdCBxdWFzaXF1b3RlR2x5cGggICAgICAgPSAnYCc7XG5jb25zdCBxdW90ZSAgICAgICAgICAgICAgICAgPSAncXVvdGUnO1xuY29uc3QgcXVvdGVHbHlwaCAgICAgICAgICAgID0gJ1xcJyc7XG5jb25zdCBzcGxhdCAgICAgICAgICAgICAgICAgPSAnJic7XG5jb25zdCBzcGxpY2VVbnF1b3RlICAgICAgICAgPSAnc3BsaWNlLXVucXVvdGUnO1xuY29uc3Qgc3BsaWNlVW5xdW90ZUdseXBoICAgID0gJ35AJztcbmNvbnN0IF90cnVlICAgICAgICAgICAgICAgICA9ICd0cnVlJztcbmNvbnN0IHRyeVN0YXIgICAgICAgICAgICAgICA9ICd0cnkqJztcbmNvbnN0IHVuZGVmQmFuZyAgICAgICAgICAgICA9ICd1bmRlZiEnO1xuY29uc3QgdW5xdW90ZSAgICAgICAgICAgICAgID0gJ3VucXVvdGUnO1xuY29uc3QgdW5xdW90ZUdseXBoICAgICAgICAgID0gJ34nXG5cbmNvbnN0IGtleVRva2VucyA9IFtcbiAgZGVyZWYsXG4gIGRlcmVmR2x5cGgsXG4gIGNhdGNoU3RhcixcbiAgZGVmQmFuZyxcbiAgX2RvLFxuICBfZXZhbCxcbiAgX2V2YWxXaXRoRW52LFxuICBleHBhbmRNYWNybyxcbiAgX2ZhbHNlLFxuICBmblN0YXIsXG4gIF9nZXRDdXJyZW50RW52LFxuICBfZ2V0RGVmYXVsdEVudixcbiAgX2lmLFxuICBpZ25vcmVCYW5nLFxuICBpZ25vcmVCYW5nR2x5cGgsXG4gIGlnbm9yZUlmVHJ1ZSxcbiAgaWdub3JlSWZUcnVlR2x5cGgsXG4gIGlnbm9yZVVubGVzc1RydWUsXG4gIGlnbm9yZVVubGVzc1RydWVHbHlwaCxcbiAgaWdub3JlLFxuICBpbmRleEVuZCxcbiAgaW5kZXhTdGFydCxcbiAgbGV0U3RhcixcbiAgbGV0cmVjU3RhcixcbiAgbGlzdEVuZCxcbiAgbGlzdFN0YXJ0LFxuICBtYWNyb1N0YXIsXG4gIG5pbCxcbiAgX3Byb2Nlc3MsXG4gIHF1YXNpcXVvdGUsXG4gIHF1YXNpcXVvdGVHbHlwaCxcbiAgcXVvdGUsXG4gIHF1b3RlR2x5cGgsXG4gIHNwbGF0LFxuICBzcGxpY2VVbnF1b3RlLFxuICBzcGxpY2VVbnF1b3RlR2x5cGgsXG4gIF90cnVlLFxuICB0cnlTdGFyLFxuICB1bmRlZkJhbmcsXG4gIHVucXVvdGUsXG4gIHVucXVvdGVHbHlwaFxuXTtcblxuY29uc3Qga2V5d29yZHMgPSBbXG4gIGNhdGNoU3RhcixcbiAgZGVmQmFuZyxcbiAgX2RvLFxuICBfZXZhbCxcbiAgX2V2YWxXaXRoRW52LFxuICBleHBhbmRNYWNybyxcbiAgX2ZhbHNlLFxuICBmblN0YXIsXG4gIF9nZXRDdXJyZW50RW52LFxuICBfZ2V0RGVmYXVsdEVudixcbiAgX2lmLFxuICBpZ25vcmUsXG4gIGxldFN0YXIsXG4gIGxldHJlY1N0YXIsXG4gIG1hY3JvU3RhcixcbiAgbmlsLFxuICBfcHJvY2VzcyxcbiAgcXVhc2lxdW90ZSxcbiAgcXVvdGUsXG4gIHNwbGljZVVucXVvdGUsXG4gIF90cnVlLFxuICB0cnlTdGFyLFxuICB1bmRlZkJhbmcsXG4gIHVucXVvdGVcbl07XG5cbmNvbnN0IG1hY3JvVG9rZW5zID0gW3F1YXNpcXVvdGUsIHF1b3RlLCBzcGxpY2VVbnF1b3RlLCB1bnF1b3RlXTtcblxuY29uc3QgZ2x5cGhUb2tlbnMgPSBbXG4gIGRlcmVmR2x5cGgsXG4gIGlnbm9yZUJhbmdHbHlwaCxcbiAgcXVhc2lxdW90ZUdseXBoLFxuICBxdW90ZUdseXBoLFxuICBzcGxpY2VVbnF1b3RlR2x5cGgsXG4gIHVucXVvdGVHbHlwaFxuXTtcblxuY29uc3QgYmluYXJ5R2x5cGhUb2tlbnMgPSBbaWdub3JlSWZUcnVlR2x5cGgsIGlnbm9yZVVubGVzc1RydWVHbHlwaF07XG5cbmNvbnN0IF9faW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgfSByZXR1cm4gLTE7XG59O1xuXG5jb25zdCBpc0tleXdvcmQgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4gX19pbmRleE9mLmNhbGwoa2V5d29yZHMsIGpzU3RyaW5nKSA+PSAwO1xufTtcblxuZXhwb3J0IHtcbiAgYmluYXJ5R2x5cGhUb2tlbnMsXG4gIGRlcmVmLFxuICBkZXJlZkdseXBoLFxuICBjYXRjaFN0YXIsXG4gIGRlZkJhbmcsXG4gIF9kbyxcbiAgX2V2YWwsXG4gIF9ldmFsV2l0aEVudixcbiAgZXhwYW5kTWFjcm8sXG4gIF9mYWxzZSxcbiAgZm5TdGFyLFxuICBfZ2V0Q3VycmVudEVudixcbiAgX2dldERlZmF1bHRFbnYsXG4gIGdseXBoVG9rZW5zLFxuICBfaWYsXG4gIGlnbm9yZUlmVHJ1ZSxcbiAgaWdub3JlSWZUcnVlR2x5cGgsXG4gIGlnbm9yZVVubGVzc1RydWUsXG4gIGlnbm9yZVVubGVzc1RydWVHbHlwaCxcbiAgaWdub3JlLFxuICBpZ25vcmVCYW5nLFxuICBpZ25vcmVCYW5nR2x5cGgsXG4gIGluZGV4RW5kLFxuICBpbmRleFN0YXJ0LFxuICBrZXlUb2tlbnMsXG4gIGlzS2V5d29yZCxcbiAgbGV0U3RhcixcbiAgbGV0cmVjU3RhcixcbiAgbGlzdEVuZCxcbiAgbGlzdFN0YXJ0LFxuICBtYWNyb1N0YXIsXG4gIG1hY3JvVG9rZW5zLFxuICBuaWwsXG4gIF9wcm9jZXNzLFxuICBxdWFzaXF1b3RlLFxuICBxdWFzaXF1b3RlR2x5cGgsXG4gIHF1b3RlLFxuICBxdW90ZUdseXBoLFxuICBzcGxhdCxcbiAgc3BsaWNlVW5xdW90ZSxcbiAgc3BsaWNlVW5xdW90ZUdseXBoLFxuICBfdHJ1ZSxcbiAgdHJ5U3RhcixcbiAgdW5kZWZCYW5nLFxuICB1bnF1b3RlLFxuICB1bnF1b3RlR2x5cGhcbn07XG4iLCJpbXBvcnQgeyBlcmxUeXBlcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBlcmxMaXN0VHlwZSA9IGVybFR5cGVzWzZdO1xuXG5jb25zdCBfX3NsaWNlID0gW10uc2xpY2U7XG5cbmNvbnN0IGNhciA9IGZ1bmN0aW9uKGVybExpc3QpIHtcbiAgaWYgKGlzRW1wdHkoZXJsTGlzdCkpIHtcbiAgICByZXR1cm4gRU9MO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxMaXN0LnZhbHVlO1xuICB9XG59O1xuXG5jb25zdCBjZHIgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIGlmIChpc0VtcHR5KGVybExpc3QpKSB7XG4gICAgcmV0dXJuIEVPTDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTGlzdC5uZXh0O1xuICB9XG59O1xuXG5jb25zdCBhcmVFcXVhbCA9IGZ1bmN0aW9uKGxpc3QwLCBsaXN0MSwgX2FyZUVxdWFsKSB7XG4gIHdoaWxlICghKGlzRW1wdHkobGlzdDApIHx8IGlzRW1wdHkobGlzdDEpKSkge1xuICAgIGlmICghX2FyZUVxdWFsKGxpc3QwLnZhbHVlLCBsaXN0MS52YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGlzdDAgPSBjZHIobGlzdDApO1xuICAgIGxpc3QxID0gY2RyKGxpc3QxKTtcbiAgfVxuICByZXR1cm4gaXNFbXB0eShsaXN0MCkgJiYgaXNFbXB0eShsaXN0MSk7XG59O1xuXG5jb25zdCBjb25jYXQgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgZXJsTGlzdHMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICBpZiAoZXJsTGlzdHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEVPTDtcbiAgfVxuICBsZXQgcmVzdWx0ID0gY29weShlcmxMaXN0c1swXSk7XG4gIGxldCB0YWlsID0gbGFzdFRhaWwocmVzdWx0KTtcbiAgY29uc3QgcmVtYWluaW5nID0gZXJsTGlzdHMuc2xpY2UoMSk7XG4gIGNvbnN0IGxlbiA9IHJlbWFpbmluZy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBlcmxMaXN0ID0gcmVtYWluaW5nW2ldO1xuICAgIGNvbnN0IF9jb3B5ID0gY29weShlcmxMaXN0KTtcbiAgICBpZiAoaXNFbXB0eSh0YWlsKSkge1xuICAgICAgcmVzdWx0ID0gX2NvcHk7XG4gICAgICB0YWlsID0gbGFzdFRhaWwocmVzdWx0KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWlzRW1wdHkoX2NvcHkpKSB7XG4gICAgICB0YWlsLm5leHQgPSBfY29weTtcbiAgICAgIHRhaWwgPSBsYXN0VGFpbChfY29weSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBjb25zID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY3JlYXRlRXJsTGlzdChjYXIoZXJsQXJncyksIG5leHQoZXJsQXJncykpO1xufTtcblxuY29uc3QgY29weSA9IGZ1bmN0aW9uKGVybExpc3QpIHtcbiAgcmV0dXJuIG1hcCgoZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiB4O1xuICB9KSwgZXJsTGlzdCk7XG59O1xuXG5jb25zdCBjcmVhdGVFcmxMaXN0ID0gZnVuY3Rpb24odmFsdWUsIG5leHROb2RlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIEVPTDtcbiAgfVxuICByZXR1cm4gY3JlYXRlTm9kZSh2YWx1ZSwgbmV4dE5vZGUgIT0gbnVsbCA/IG5leHROb2RlIDogRU9MKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5vZGUgPSBmdW5jdGlvbih2YWx1ZSwgbmV4dE5vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBlcmxMaXN0VHlwZSxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgbmV4dDogbmV4dE5vZGVcbiAgfTtcbn07XG5cbmNvbnN0IGRyb3AgPSBmdW5jdGlvbihuYnIsIGVybExpc3QpIHtcbiAgd2hpbGUgKG5iciAhPT0gMCkge1xuICAgIGVybExpc3QgPSBjZHIoZXJsTGlzdCk7XG4gICAgbmJyID0gbmJyIC0gMTtcbiAgfVxuICByZXR1cm4gZXJsTGlzdDtcbn07XG5cbmNvbnN0IGlzRW1wdHkgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IEVPTDtcbn07XG5cbmNvbnN0IGZpbHRlciA9IGZ1bmN0aW9uKHByZWRpY2F0ZSwgbGlzdCkge1xuICBjb25zdCBfcmVkdWNlID0gZnVuY3Rpb24obGlzdCwgdmFsdWUpIHtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVybExpc3QodmFsdWUsIGxpc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG4gIH07XG4gIHJldHVybiByZXZlcnNlKHJlZHVjZShFT0wsIF9yZWR1Y2UsIGxpc3QpKTtcbn07XG5cbmNvbnN0IGZvckVhY2ggPSBmdW5jdGlvbihmbiwgbGlzdCkge1xuICBsZXQgcmVzdWx0ID0gbGlzdDtcbiAgd2hpbGUgKCFpc0VtcHR5KGxpc3QpKSB7XG4gICAgcmVzdWx0ID0gZm4obGlzdC52YWx1ZSk7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGZyb21BcnJheSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gIGNvbnN0IF9yZWR1Y2UgPSBmdW5jdGlvbihsaXN0LCB2YWx1ZSkge1xuICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KHZhbHVlLCBsaXN0KTtcbiAgfTtcbiAgcmV0dXJuIGFycmF5LnJldmVyc2UoKS5yZWR1Y2UoX3JlZHVjZSwgY3JlYXRlRXJsTGlzdCgpKTtcbn07XG5cbmNvbnN0IGxhc3QgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIHJldHVybiBjYXIobGFzdFRhaWwoZXJsTGlzdCkpO1xufTtcblxuY29uc3QgbGFzdFRhaWwgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIGlmIChpc0VtcHR5KGVybExpc3QpKSB7XG4gICAgcmV0dXJuIGVybExpc3Q7XG4gIH1cbiAgbGV0IHByaW9yID0gZXJsTGlzdDtcbiAgbGV0IGN1cnJlbnQgPSBjZHIoZXJsTGlzdCk7XG4gIHdoaWxlICghaXNFbXB0eShjdXJyZW50KSkge1xuICAgIHByaW9yID0gY2RyKHByaW9yKTtcbiAgICBjdXJyZW50ID0gY2RyKGN1cnJlbnQpO1xuICB9XG4gIHJldHVybiBwcmlvcjtcbn07XG5cbmNvbnN0IG1hcCA9IGZ1bmN0aW9uKGZuLCBsaXN0KSB7XG4gIGNvbnN0IF9yZWR1Y2UgPSBmdW5jdGlvbihsaXN0LCB2YWx1ZSkge1xuICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KGZuKHZhbHVlKSwgbGlzdCk7XG4gIH07XG4gIHJldHVybiByZXZlcnNlKHJlZHVjZShFT0wsIF9yZWR1Y2UsIGxpc3QpKTtcbn07XG5cbmNvbnN0IG5leHQgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIHJldHVybiBjYXIoY2RyKGVybExpc3QpKTtcbn07XG5cbmNvbnN0IHJlY3Vyc2UgPSBmdW5jdGlvbihsaXN0KSB7XG4gIGlmIChpc0VtcHR5KGxpc3QpKSB7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3QubmV4dDtcbiAgfVxufTtcblxuY29uc3QgcmVkdWNlID0gZnVuY3Rpb24oc2VlZCwgZm4sIGxpc3QpIHtcbiAgd2hpbGUgKCFpc0VtcHR5KGxpc3QpKSB7XG4gICAgc2VlZCA9IGZuKHNlZWQsIGxpc3QudmFsdWUpO1xuICAgIGxpc3QgPSByZWN1cnNlKGxpc3QpO1xuICB9XG4gIHJldHVybiBzZWVkO1xufTtcblxuY29uc3QgcmVkdWNlQnkyID0gZnVuY3Rpb24oc2VlZCwgZm4sIGxpc3QpIHtcbiAgd2hpbGUgKCFpc0VtcHR5KGxpc3QpKSB7XG4gICAgY29uc3QgdmFsdWUwID0gbGlzdC52YWx1ZTtcbiAgICBsaXN0ID0gcmVjdXJzZShsaXN0KTtcbiAgICBjb25zdCB2YWx1ZTEgPSBsaXN0LnZhbHVlO1xuICAgIHNlZWQgPSBmbihzZWVkLCB2YWx1ZTAsIHZhbHVlMSk7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gIH1cbiAgcmV0dXJuIHNlZWQ7XG59O1xuXG5jb25zdCByZXZlcnNlID0gZnVuY3Rpb24obGlzdCkge1xuICBsZXQgcmVzdWx0ID0gRU9MO1xuICB3aGlsZSAoIWlzRW1wdHkobGlzdCkpIHtcbiAgICByZXN1bHQgPSBjcmVhdGVFcmxMaXN0KGxpc3QudmFsdWUsIHJlc3VsdCk7XG4gICAgbGlzdCA9IGxpc3QubmV4dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgdGFrZSA9IGZ1bmN0aW9uKG5iciwgZXJsTGlzdCkge1xuICBsZXQgcmVzdWx0ID0gY3JlYXRlRXJsTGlzdCgpO1xuICB3aGlsZSAobmJyICE9PSAwKSB7XG4gICAgY29uc3Qgbm9kZSA9IGNhcihlcmxMaXN0KTtcbiAgICBlcmxMaXN0ID0gY2RyKGVybExpc3QpO1xuICAgIHJlc3VsdCA9IGNyZWF0ZUVybExpc3Qobm9kZSwgcmVzdWx0KTtcbiAgICBuYnIgPSBuYnIgLSAxO1xuICB9XG4gIHJldHVybiByZXZlcnNlKHJlc3VsdCk7XG59O1xuXG5jb25zdCB0b0FycmF5ID0gZnVuY3Rpb24obGlzdCkge1xuICBjb25zdCBfcmVkdWNlID0gZnVuY3Rpb24oanNBcnJheSwgdmFsdWUpIHtcbiAgICBqc0FycmF5LnB1c2godmFsdWUpO1xuICAgIHJldHVybiBqc0FycmF5O1xuICB9O1xuICByZXR1cm4gcmVkdWNlKFtdLCBfcmVkdWNlLCBsaXN0KTtcbn07XG5cbmNvbnN0IHRvUGFydGlhbEFycmF5ID0gZnVuY3Rpb24obmJyLCBsaXN0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICB3aGlsZSAobmJyICE9PSAwKSB7XG4gICAgY29uc3Qgbm9kZSA9IGNhcihsaXN0KTtcbiAgICBsaXN0ID0gY2RyKGxpc3QpO1xuICAgIHJlc3VsdC5wdXNoKG5vZGUpO1xuICAgIG5iciA9IG5iciAtIDE7XG4gIH1cbiAgcmVzdWx0LnB1c2gobGlzdCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCB6aXAgPSBmdW5jdGlvbihzZWVkLCBmbiwgbGlzdDAsIGxpc3QxKSB7XG4gIHdoaWxlICghKGlzRW1wdHkobGlzdDApIHx8IGlzRW1wdHkobGlzdDEpKSkge1xuICAgIGNvbnN0IHZhbHVlMCA9IGNhcihsaXN0MCk7XG4gICAgbGlzdDAgPSBjZHIobGlzdDApO1xuICAgIGNvbnN0IHZhbHVlMSA9IGNhcihsaXN0MSk7XG4gICAgbGlzdDEgPSBjZHIobGlzdDEpO1xuICAgIHNlZWQgPSBmbihzZWVkLCB2YWx1ZTAsIHZhbHVlMSk7XG4gIH1cbiAgcmV0dXJuIHNlZWQ7XG59O1xuXG5jb25zdCBfRU9MID0ge307XG5cbmNvbnN0IEVPTCA9IGNyZWF0ZU5vZGUoX0VPTCwgX0VPTCk7XG5cbmV4cG9ydCB7XG4gIGFyZUVxdWFsLFxuICBjYXIsXG4gIGNkcixcbiAgY29uY2F0LFxuICBjb25zLFxuICBjb3B5LFxuICBjcmVhdGVFcmxMaXN0LFxuICBkcm9wLFxuICBpc0VtcHR5LFxuICBmaWx0ZXIsXG4gIGZvckVhY2gsXG4gIGZyb21BcnJheSxcbiAgbGFzdCxcbiAgbWFwLFxuICBuZXh0LFxuICByZWN1cnNlLFxuICByZWR1Y2UsXG4gIHJlZHVjZUJ5MixcbiAgcmV2ZXJzZSxcbiAgdGFrZSxcbiAgdG9BcnJheSxcbiAgdG9QYXJ0aWFsQXJyYXlcbn07XG4iLCJpbXBvcnQgeyBiaW5hcnlHbHlwaFRva2VucyB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGNvbW1lbnRTaWduYWwgfSBmcm9tICcuL2NvbW1lbnRTaWduYWwnO1xuaW1wb3J0IHsgY3JlYXRlRXJsQm9vbGVhbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsSWRlbnRpZmllciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsSWdub3JlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTGlzdCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxOdW1iZXIgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3ltYm9sIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBkZXJlZiB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGRlcmVmR2x5cGggfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBleHRyYWN0SnNWYWx1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgX2ZhbHNlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgZ2x5cGhUb2tlbnMgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmVCYW5nIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlQmFuZ0dseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlSWZUcnVlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlSWZUcnVlR2x5cGggfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmVVbmxlc3NUcnVlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlVW5sZXNzVHJ1ZUdseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaW5kZXhFbmQgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpbmRleFN0YXJ0IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsga2V5VG9rZW5zIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbGlzdEVuZCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGxpc3RTdGFydCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IG5pbCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHF1YXNpcXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBxdW90ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHNwbGljZVVucXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyB1bnF1b3RlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcXVhc2lxdW90ZUdseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcXVvdGVHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHNwbGljZVVucXVvdGVHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHVucXVvdGVHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHJldmVyc2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IF90cnVlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuXG5jb25zdCAgX19pbmRleE9mID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICB9IHJldHVybiAtMTtcbn07XG5cbmNvbnN0IGF0b21pemUgPSBmdW5jdGlvbih0b2tlbikge1xuICBjb25zdCBjcmVhdGVFcmxWYWx1ZSA9IChmdW5jdGlvbigpIHtcbiAgICBpZiAoaXNOaWwodG9rZW4pKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRXJsTmlsO1xuICAgIH0gZWxzZSBpZiAoaXNJZ25vcmUodG9rZW4pKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRXJsSWdub3JlO1xuICAgIH0gZWxzZSBpZiAoaXNCb29sZWFuKHRva2VuKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKHBhcnNlQm9vbGVhbih0b2tlbikpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKHRva2VuKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZztcbiAgICB9IGVsc2UgaWYgKGlzSWRlbnRpZmllcih0b2tlbikpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFcmxJZGVudGlmaWVyO1xuICAgIH0gZWxzZSBpZiAoaXNJbnRlZ2VyKHRva2VuKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxOdW1iZXIocGFyc2VJbnQxMCh0b2tlbikpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRmxvYXQodG9rZW4pKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihwYXJzZUZsb2F0MTAodG9rZW4pKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjcmVhdGVFcmxTeW1ib2w7XG4gICAgfVxuICB9KSgpO1xuICByZXR1cm4gY3JlYXRlRXJsVmFsdWUodG9rZW4pO1xufTtcblxuY29uc3QgaXNCb29sZWFuID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuID09PSBfZmFsc2UgfHwgdG9rZW4gPT09IF90cnVlO1xufTtcblxuY29uc3QgaXNGbG9hdCA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiAvXigtfFxcKyk/WzAtOV0oX3xcXGQpKlxcLihcXGR8KFxcZChffFxcZCkqXFxkKSkkLy50ZXN0KHRva2VuKTtcbn07XG5cbmNvbnN0IGlzQmluYXJ5R2x5cGggPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gX19pbmRleE9mLmNhbGwoYmluYXJ5R2x5cGhUb2tlbnMsIHRva2VuKSA+PSAwO1xufTtcblxuY29uc3QgaXNHbHlwaCA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiBfX2luZGV4T2YuY2FsbChnbHlwaFRva2VucywgdG9rZW4pID49IDA7XG59O1xuXG5jb25zdCBpc0lnbm9yZSA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbiA9PT0gaWdub3JlO1xufTtcblxuY29uc3QgaXNJbmRleFN0YXJ0ID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuID09PSBpbmRleFN0YXJ0O1xufTtcblxuY29uc3QgaXNJbnRlZ2VyID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIC9eKDAoPyFcXC4pfCgoLXxcXCspP1sxLTldKF98XFxkKSokKSkvLnRlc3QodG9rZW4pO1xufTtcblxuY29uc3QgaXNMaXN0U3RhcnQgPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gdG9rZW4gPT09IGxpc3RTdGFydDtcbn07XG5cbmNvbnN0IGlzTmlsID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuID09PSBuaWw7XG59O1xuXG5jb25zdCBfcGFyc2UgPSBmdW5jdGlvbih0b2tlbiwgdG9rZW5zKSB7XG4gIGlmIChpc0xpc3RTdGFydCh0b2tlbikpIHtcbiAgICByZXR1cm4gcGFyc2VMaXN0KHRva2Vucyk7XG4gIH0gZWxzZSBpZiAoaXNJbmRleFN0YXJ0KHRva2VuKSkge1xuICAgIHJldHVybiBwYXJzZUluZGV4KHRva2Vucyk7XG4gIH0gZWxzZSBpZiAoaXNHbHlwaCh0b2tlbikpIHtcbiAgICByZXR1cm4gcGFyc2VHbHlwaChnbHlwaEluZGV4W3Rva2VuXSwgdG9rZW5zKTtcbiAgfSBlbHNlIGlmIChpc0JpbmFyeUdseXBoKHRva2VuKSkge1xuICAgIHJldHVybiBwYXJzZUJpbmFyeUdseXBoKGJpbmFyeUdseXBoSW5kZXhbdG9rZW5dLCB0b2tlbnMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhdG9taXplKHRva2VuKTtcbiAgfVxufTtcblxuY29uc3QgcGFyc2UgPSBmdW5jdGlvbih0b2tlbnMpIHtcbiAgaWYgKHRva2VucyA9PT0gY29tbWVudFNpZ25hbCkge1xuICAgIHJldHVybiBjb21tZW50U2lnbmFsO1xuICB9XG4gIHJldHVybiBfcGFyc2UodG9rZW5zLnNoaWZ0KCksIHRva2Vucyk7XG59O1xuXG5jb25zdCBwYXJzZUJpbmFyeUdseXBoID0gZnVuY3Rpb24oa2V5d29yZCwgdG9rZW5zKSB7XG4gIHJldHVybiBjcmVhdGVFcmxMaXN0KFxuICAgIGNyZWF0ZUVybFN5bWJvbChrZXl3b3JkKSxcbiAgICBjcmVhdGVFcmxMaXN0KFxuICAgICAgcGFyc2UodG9rZW5zKSxcbiAgICAgIGNyZWF0ZUVybExpc3QocGFyc2UodG9rZW5zKSkpKTtcbn07XG5cbmNvbnN0IHBhcnNlQm9vbGVhbiA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbiA9PT0gX3RydWU7XG59O1xuXG5jb25zdCBwYXJzZUZsb2F0MTAgPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gcGFyc2VGbG9hdChzdHJpcFVuZGVyc2NvcmVzKHRva2VuKSwgMTApO1xufTtcblxuY29uc3QgcGFyc2VHbHlwaCA9IGZ1bmN0aW9uKGtleXdvcmQsIHRva2Vucykge1xuICByZXR1cm4gY3JlYXRlRXJsTGlzdChcbiAgICBjcmVhdGVFcmxTeW1ib2woa2V5d29yZCksXG4gICAgY3JlYXRlRXJsTGlzdChwYXJzZSh0b2tlbnMpKSk7XG59O1xuXG5jb25zdCBwYXJzZUluZGV4ID0gZnVuY3Rpb24odG9rZW5zKSB7XG4gIGxldCB0b2tlbjtcbiAgY29uc3QganNJbmRleCA9IHt9O1xuICBsZXQga2V5ID0gbnVsbDtcbiAgbGV0IGlzS2V5U3RlcCA9IHRydWU7XG4gIHdoaWxlICgodG9rZW4gPSB0b2tlbnMuc2hpZnQoKSkgIT09IGluZGV4RW5kKSB7XG4gICAgaWYgKGlzS2V5U3RlcCkge1xuICAgICAga2V5ID0gX3BhcnNlKHRva2VuLCB0b2tlbnMpO1xuICAgICAgaXNLZXlTdGVwID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGpzSW5kZXhbZXh0cmFjdEpzVmFsdWUoa2V5KV0gPSBfcGFyc2UodG9rZW4sIHRva2Vucyk7XG4gICAgICBpc0tleVN0ZXAgPSB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY3JlYXRlRXJsSW5kZXgoanNJbmRleCk7XG59O1xuXG5jb25zdCBwYXJzZUludDEwID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHBhcnNlSW50KHN0cmlwVW5kZXJzY29yZXModG9rZW4pLCAxMCk7XG59O1xuXG5jb25zdCBwYXJzZUxpc3QgPSBmdW5jdGlvbih0b2tlbnMpIHtcbiAgbGV0IHRva2VuO1xuICBsZXQgZXJsTGlzdCA9IGNyZWF0ZUVybExpc3QoKTtcbiAgd2hpbGUgKCh0b2tlbiA9IHRva2Vucy5zaGlmdCgpKSAhPT0gbGlzdEVuZCkge1xuICAgIGVybExpc3QgPSBjcmVhdGVFcmxMaXN0KF9wYXJzZSh0b2tlbiwgdG9rZW5zKSwgZXJsTGlzdCk7XG4gIH1cbiAgcmV0dXJuIHJldmVyc2UoZXJsTGlzdCk7XG59O1xuXG5jb25zdCBzdGFydHNXaXRoID0gZnVuY3Rpb24oY2hhcikge1xuICByZXR1cm4gZnVuY3Rpb24odG9rZW4pIHtcbiAgICByZXR1cm4gdG9rZW5bMF0gPT09IGNoYXI7XG4gIH07XG59O1xuXG5jb25zdCBzdHJpcFVuZGVyc2NvcmVzID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuLnJlcGxhY2UoL18vZywgJycpO1xufTtcblxuY29uc3QgZ2x5cGhJbmRleCA9IHt9O1xuXG5nbHlwaEluZGV4W2RlcmVmR2x5cGhdICAgICAgICAgPSBkZXJlZjtcbmdseXBoSW5kZXhbaWdub3JlQmFuZ0dseXBoXSAgICA9IGlnbm9yZUJhbmc7XG5nbHlwaEluZGV4W3F1YXNpcXVvdGVHbHlwaF0gICAgPSBxdWFzaXF1b3RlO1xuZ2x5cGhJbmRleFtxdW90ZUdseXBoXSAgICAgICAgID0gcXVvdGU7XG5nbHlwaEluZGV4W3NwbGljZVVucXVvdGVHbHlwaF0gPSBzcGxpY2VVbnF1b3RlO1xuZ2x5cGhJbmRleFt1bnF1b3RlR2x5cGhdICAgICAgID0gdW5xdW90ZTtcblxuY29uc3QgYmluYXJ5R2x5cGhJbmRleCA9IHt9O1xuXG5iaW5hcnlHbHlwaEluZGV4W2lnbm9yZUlmVHJ1ZUdseXBoXSAgICAgPSBpZ25vcmVJZlRydWU7XG5iaW5hcnlHbHlwaEluZGV4W2lnbm9yZVVubGVzc1RydWVHbHlwaF0gPSBpZ25vcmVVbmxlc3NUcnVlO1xuXG5jb25zdCBpc1N0cmluZyA9IHN0YXJ0c1dpdGgoJ1wiJyk7XG5cbmNvbnN0IGlzSWRlbnRpZmllciA9IHN0YXJ0c1dpdGgoJzonKTtcblxuZXhwb3J0IHsgcGFyc2UgfTtcbiIsImltcG9ydCB7IGNvbW1lbnRTaWduYWwgfSBmcm9tICcuL2NvbW1lbnRTaWduYWwnO1xuaW1wb3J0IHsgZXh0cmFjdEpzVmFsdWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGluZGV4RW5kIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaW5kZXhTdGFydCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGlzRXJsQXRvbSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsQ29yZVB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxJZGVudGlmaWVyIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybElnbm9yZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxLZXl3b3JkIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybExpc3QgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTWFjcm8gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBsaXN0RW5kIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbGlzdFN0YXJ0IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5cbmNvbnN0IF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5jb25zdCBhZGpvaW5FcmxWYWx1ZSA9IGZ1bmN0aW9uKHNob3VsZEJlUmVhZGFibGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG1lbW8sIGVybFZhbHVlKSB7XG4gICAgY29uc3Qgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZShlcmxWYWx1ZSwgc2hvdWxkQmVSZWFkYWJsZSk7XG4gICAgaWYgKG1lbW8ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gc2VyaWFsaXplZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiXCIgKyBtZW1vICsgXCIgXCIgKyBzZXJpYWxpemVkO1xuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IHNlcmlhbGl6ZSA9IGZ1bmN0aW9uKGVybEV4cHIsIHNob3VsZEJlUmVhZGFibGUpIHtcbiAgaWYgKGVybEV4cHIgPT09IGNvbW1lbnRTaWduYWwpIHtcbiAgICByZXR1cm4gY29tbWVudFNpZ25hbDtcbiAgfVxuICBjb25zdCBfc2VyaWFsaXplID0gKGZ1bmN0aW9uKCkge1xuICAgIGlmIChpc0VybExpc3QoZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBzZXJpYWxpemVMaXN0O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxJZ25vcmUoZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gaWdub3JlTGFiZWw7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxJbmRleChlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUluZGV4O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxLZXl3b3JkKGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGtleXdvcmRMYWJlbDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc0VybENvcmVFZmZlY3RmdWxGdW5jdGlvbihlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBjb3JlRWZmZWN0ZnVsRnVuY3Rpb25MYWJlbDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc0VybENvcmVQdXJlRnVuY3Rpb24oZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gY29yZVB1cmVGdW5jdGlvbkxhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsVXNlclB1cmVGdW5jdGlvbihlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB1c2VyUHVyZUZ1bmN0aW9uTGFiZWw7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxNYWNybyhlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBtYWNyb0xhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsTmlsKGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5pbExhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsSWRlbnRpZmllcihlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUlkZW50aWZpZXI7XG4gICAgfSBlbHNlIGlmIChpc0VybFN0cmluZyhlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZVN0cmluZztcbiAgICB9IGVsc2UgaWYgKGlzRXJsQXRvbShlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUF0b207XG4gICAgfSBlbHNlIGlmIChlcmxFeHByLmpzVmFsdWUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGV4dHJhY3RKc1ZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGVybFZhbHVlO1xuICAgICAgfTtcbiAgICB9XG4gIH0pKCk7XG4gIHJldHVybiBfc2VyaWFsaXplKGVybEV4cHIsIHNob3VsZEJlUmVhZGFibGUpO1xufTtcblxuY29uc3Qgc2VyaWFsaXplQXRvbSA9IGZ1bmN0aW9uKGVybEF0b20sIHNob3VsZEJlUmVhZGFibGUpIHtcbiAgcmV0dXJuIFwiKGF0b20gXCIgKyAoc2VyaWFsaXplKGVybEF0b20uZXJsVmFsdWUsIHNob3VsZEJlUmVhZGFibGUpKSArIFwiKVwiO1xufTtcblxuY29uc3Qgc2VyaWFsaXplSWRlbnRpZmllciA9IGZ1bmN0aW9uKGVybFN0cmluZywgc2hvdWxkQmVSZWFkYWJsZSkge1xuICByZXR1cm4gZXh0cmFjdEpzVmFsdWUoZXJsU3RyaW5nKTtcbn07XG5cbmNvbnN0IHNlcmlhbGl6ZUluZGV4ID0gZnVuY3Rpb24oZXJsSW5kZXgsIHNob3VsZEJlUmVhZGFibGUpIHtcbiAgY29uc3QganNJbmRleCA9IGVybEluZGV4LmpzVmFsdWU7XG4gIGxldCBtZW1vID0gJyc7XG4gIGZvciAobGV0IGtleSBpbiBqc0luZGV4KSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChqc0luZGV4LCBrZXkpKSBjb250aW51ZTtcbiAgICBjb25zdCBlcmxWYWx1ZSA9IGpzSW5kZXhba2V5XTtcbiAgICBpZiAobWVtbyA9PT0gJycpIHtcbiAgICAgIG1lbW8gPSBcIlwiXG4gICAgICAgICsga2V5XG4gICAgICAgICsgXCIgXCJcbiAgICAgICAgKyAoc2VyaWFsaXplKGVybFZhbHVlLCBzaG91bGRCZVJlYWRhYmxlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbW8gPSBcIlwiXG4gICAgICAgICsgbWVtb1xuICAgICAgICArIFwiLCBcIlxuICAgICAgICArIGtleVxuICAgICAgICArIFwiIFwiXG4gICAgICAgICsgKHNlcmlhbGl6ZShlcmxWYWx1ZSwgc2hvdWxkQmVSZWFkYWJsZSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5kZXhTdGFydCArIG1lbW8gKyBpbmRleEVuZDtcbn07XG5cbmNvbnN0IHNlcmlhbGl6ZUxpc3QgPSBmdW5jdGlvbihlcmxMaXN0LCBzaG91bGRCZVJlYWRhYmxlKSB7XG4gIGNvbnN0IHNlcmlhbGl6ZWRMaXN0ID0gcmVkdWNlKFxuICAgIFwiXCIsXG4gICAgYWRqb2luRXJsVmFsdWUoc2hvdWxkQmVSZWFkYWJsZSksXG4gICAgZXJsTGlzdCk7XG4gIHJldHVybiBsaXN0U3RhcnQgKyBzZXJpYWxpemVkTGlzdCArIGxpc3RFbmQ7XG59O1xuXG5jb25zdCBzZXJpYWxpemVTdHJpbmcgPSBmdW5jdGlvbihlcmxTdHJpbmcsIHNob3VsZEJlUmVhZGFibGUpIHtcbiAgY29uc3QganNTdHJpbmcgPSBzdHJpcFF1b3RlcyhleHRyYWN0SnNWYWx1ZShlcmxTdHJpbmcpKTtcbiAgaWYgKCFzaG91bGRCZVJlYWRhYmxlKSB7XG4gICAgcmV0dXJuIGpzU3RyaW5nO1xuICB9XG4gIHJldHVybiBqc1N0cmluZ1xuICAgIC5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpXG4gICAgLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuICAgIC5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyk7XG59O1xuXG5jb25zdCBzdHJpcFF1b3RlcyA9IGZ1bmN0aW9uKGpzU3RyaW5nKSB7XG4gIHJldHVybiBqc1N0cmluZy5zbGljZSgxLCAtMSk7XG59O1xuXG5jb25zdCBjb3JlRWZmZWN0ZnVsRnVuY3Rpb25MYWJlbCA9ICc8ZWZmZWN0ZnVsIGNvcmUgZnVuY3Rpb24+JztcbmNvbnN0IGNvcmVQdXJlRnVuY3Rpb25MYWJlbCAgICAgID0gJzxjb3JlIGZ1bmN0aW9uPic7XG5jb25zdCBpZ25vcmVMYWJlbCAgICAgICAgICAgICAgICA9ICc8aWdub3JlPic7XG5jb25zdCBrZXl3b3JkTGFiZWwgICAgICAgICAgICAgICA9ICc8a2V5d29yZD4nO1xuY29uc3QgbWFjcm9MYWJlbCAgICAgICAgICAgICAgICAgPSAnPG1hY3JvPic7XG5jb25zdCBuaWxMYWJlbCAgICAgICAgICAgICAgICAgICA9ICduaWwnO1xuY29uc3QgdXNlclB1cmVGdW5jdGlvbkxhYmVsICAgICAgPSAnPGZ1bmN0aW9uPic7XG5cbmV4cG9ydCB7IHNlcmlhbGl6ZSB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIihkb1xcbiAgKGRlZiEgZml4KiAoXFxuICAgIGZuKiAoZikgKFxcbiAgICAgIChmbiogKHgpIChmIChmbiogKCYgeXMpIChhcHBseSAoeCB4KSB5cykpKSlcXG4gICAgICAoZm4qICh4KSAoZiAoZm4qICgmIHlzKSAoYXBwbHkgKHggeCkgeXMpKSkpKSkpXFxuXFxuICAoZGVmISBtZW1maXgqIChcXG4gICAgZm4qIChmKSAoXFxuICAgICAgbGV0KiAoY2FjaGUge30pIChcXG4gICAgICAgIChmbiogKHggY2FjaGUpIChcXG4gICAgICAgICAgZlxcbiAgICAgICAgICAgIChmbiogKHopIChcXG4gICAgICAgICAgICAgIGlmIChjb250YWlucz8gY2FjaGUgeilcXG4gICAgICAgICAgICAgICAgKGdldCBjYWNoZSB6KVxcbiAgICAgICAgICAgICAgICAobGV0KiAocmVzdWx0ICgoZm4qICh5KSAoKHggeCBjYWNoZSkgeSkpIHopKSAoXFxuICAgICAgICAgICAgICAgICAgZG9cXG4gICAgICAgICAgICAgICAgICAgIChzZXQhIGNhY2hlIHogcmVzdWx0KVxcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0KSkpKVxcbiAgICAgICAgICAgIGNhY2hlKSlcXG4gICAgICAgIChmbiogKHggY2FjaGUpIChcXG4gICAgICAgICAgZlxcbiAgICAgICAgICAgIChmbiogKHopIChcXG4gICAgICAgICAgICAgIGlmIChjb250YWlucz8gY2FjaGUgeilcXG4gICAgICAgICAgICAgICAgKGdldCBjYWNoZSB6KVxcbiAgICAgICAgICAgICAgICAobGV0KiAocmVzdWx0ICgoZm4qICh5KSAoKHggeCBjYWNoZSkgeSkpIHopKSAoXFxuICAgICAgICAgICAgICAgICAgZG9cXG4gICAgICAgICAgICAgICAgICAgIChzZXQhIGNhY2hlIHogcmVzdWx0KVxcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0KSkpKVxcbiAgICAgICAgICAgIGNhY2hlKSlcXG4gICAgICAgIGNhY2hlKSkpKVxcblxcbiAgKGRlZiEgXzAgY2FyKVxcblxcbiAgKGRlZiEgXzEgKGZuKiAoeHMpIChudGggMSB4cykpKVxcblxcbiAgKGRlZiEgXzIgKGZuKiAoeHMpIChudGggMiB4cykpKVxcblxcbiAgKGRlZiEgc3dhcCEgKFxcbiAgICBtYWNybyogKGF0b20gJiB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBhdG9tXFxuICAgICAgICBgKGxldCogKC1hdG9tLSB+YXRvbSkgKFxcbiAgICAgICAgICBkb1xcbiAgICAgICAgICAgIChyZXNldCEgLWF0b20tICh+KGNhciB4cykgKGRlcmVmIC1hdG9tLSkgfkAoY2RyIHhzKSkpXFxuICAgICAgICAgICAgKGRlcmVmIC1hdG9tLSkpKSkpKVxcblxcbiAgKGRlZiEgKmdlbnN5bS1jb3VudGVyKiAoYXRvbSAwKSlcXG5cXG4gIChkZWYhIGdlbnN5bSAoXFxuICAgICAgZm4qICgpIChzeW1ib2wgKHN0cmluZyBcXFwiR19fXFxcIiAoc3dhcCEgKmdlbnN5bS1jb3VudGVyKiBpbmNyKSkpKSlcXG5cXG4gIChkZWYhIG9yIChcXG4gICAgbWFjcm8qICgmIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIGZhbHNlXFxuICAgICAgICAobGV0KiAoLXF1ZXJ5LSAoZ2Vuc3ltKSlcXG4gICAgICAgICAgYChsZXQqICh+LXF1ZXJ5LSB+KGNhciB4cykpIChcXG4gICAgICAgICAgICBpZiB+LXF1ZXJ5LVxcbiAgICAgICAgICAgICAgfi1xdWVyeS1cXG4gICAgICAgICAgICAgIChvciB+QChjZHIgeHMpKSkpKSkpKVxcblxcbiAgKGRlZiEgYW5kIChcXG4gICAgbWFjcm8qICgmIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIHRydWVcXG4gICAgICAgIChsZXQqICgtcXVlcnktIChnZW5zeW0pKVxcbiAgICAgICAgICBgKGxldCogKH4tcXVlcnktIH4oY2FyIHhzKSkgKFxcbiAgICAgICAgICAgIGlmIH4tcXVlcnktXFxuICAgICAgICAgICAgICAoYW5kIH5AKGNkciB4cykpXFxuICAgICAgICAgICAgICBmYWxzZSkpKSkpKVxcblxcbiAgKGRlZiEgY29uZCAoXFxuICAgIG1hY3JvKiAoJiB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBuaWxcXG4gICAgICAgIChpZiAoZW1wdHk/IChjZHIgeHMpKVxcbiAgICAgICAgICAodGhyb3cgXFxcImBjb25kYCByZXF1aXJlcyBhbiBldmVuIG51bWJlciBvZiBmb3Jtcy5cXFwiKVxcbiAgICAgICAgICAobGV0KiAoLXF1ZXJ5LSAoZ2Vuc3ltKSlcXG4gICAgICAgICAgICBgKGxldCogKH4tcXVlcnktIH4oY2FyIHhzKSkgKFxcbiAgICAgICAgICAgICAgaWYgfi1xdWVyeS1cXG4gICAgICAgICAgICAgICAgfihfMSB4cylcXG4gICAgICAgICAgICAgICAgKGNvbmQgfkAoY2RyIChjZHIgeHMpKSkpKSkpKSkpXFxuXFxuICAoZGVmISBsb29wIChcXG4gICAgbWFjcm8qIChmb3JtMCBmb3JtMSlcXG4gICAgICBgKGxldCogKGxvb3AgKG1lbWZpeCogKGZuKiAobG9vcCkgKGZuKiAofihfMCBmb3JtMCkpIH5mb3JtMSkpKSkgKFxcbiAgICAgICAgbG9vcCB+KF8xIGZvcm0wKSkpKSlcXG5cXG4gIChkZWYhIC0+IChcXG4gICAgbWFjcm8qICgmIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIG5pbFxcbiAgICAgICAgKGxldCogKHggKGNhciB4cyksIHhzIChjZHIgeHMpKSAoXFxuICAgICAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICAgICAgeFxcbiAgICAgICAgICAgIChsZXQqIChmb3JtIChjYXIgeHMpLCBmb3JtcyAoY2RyIHhzKSkgKFxcbiAgICAgICAgICAgICAgaWYgKGVtcHR5PyBmb3JtcylcXG4gICAgICAgICAgICAgICAgKGlmIChsaXN0PyBmb3JtKVxcbiAgICAgICAgICAgICAgICAgIChpZiAoPSAoc3ltYm9sIFxcXCJmbipcXFwiKSAoY2FyIGZvcm0pKVxcbiAgICAgICAgICAgICAgICAgICAgYCh+Zm9ybSB+eClcXG4gICAgICAgICAgICAgICAgICAgIGAofihjYXIgZm9ybSkgfnggfkAoY2RyIGZvcm0pKSlcXG4gICAgICAgICAgICAgICAgICAobGlzdCBmb3JtIHgpKVxcbiAgICAgICAgICAgICAgICBgKC0+ICgtPiB+eCB+Zm9ybSkgfkBmb3JtcykpKSkpKSkpXFxuXFxuICAoZGVmISAtPj4gKFxcbiAgICBtYWNybyogKCYgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgbmlsXFxuICAgICAgICAobGV0KiAoeCAoY2FyIHhzKSwgeHMgKGNkciB4cykpIChcXG4gICAgICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgICAgICB4XFxuICAgICAgICAgICAgKGxldCogKGZvcm0gKGNhciB4cyksIGZvcm1zIChjZHIgeHMpKSAoXFxuICAgICAgICAgICAgICBpZiAoZW1wdHk/IGZvcm1zKVxcbiAgICAgICAgICAgICAgICAoaWYgKGxpc3Q/IGZvcm0pXFxuICAgICAgICAgICAgICAgICAgKGlmICg9IChzeW1ib2wgXFxcImZuKlxcXCIpIChjYXIgZm9ybSkpXFxuICAgICAgICAgICAgICAgICAgICBgKH5mb3JtIH54KVxcbiAgICAgICAgICAgICAgICAgICAgYCh+QGZvcm0gfngpKVxcbiAgICAgICAgICAgICAgICAgIChsaXN0IGZvcm0geCkpXFxuICAgICAgICAgICAgICAgIGAoLT4+ICgtPj4gfnggfmZvcm0pIH5AZm9ybXMpKSkpKSkpKVxcblxcbiAgKGRlZiEgLT4qIChtYWNybyogKCYgeHMpIChcXG4gICAgbGV0KiAoeCAoZ2Vuc3ltKSlcXG4gICAgICBgKGZuKiAofngpICgtPiB+eCB+QHhzKSkpKSlcXG5cXG4gIChkZWYhIC0+PiogKG1hY3JvKiAoJiB4cykgKFxcbiAgICBsZXQqICh4IChnZW5zeW0pKVxcbiAgICAgIGAoZm4qICh+eCkgKC0+PiB+eCB+QHhzKSkpKSlcXG5cXG4gIChkZWYhIG5vdCAoZm4qICh4KSAoaWYgeCBmYWxzZSB0cnVlKSkpXFxuXFxuICAoZGVmISBpbmNyICgtPiogKCsgMSkpKVxcblxcbiAgKGRlZiEgZGVjciAoLT4qICgtIDEpKSlcXG5cXG4gIChkZWYhIHplcm8/ICgtPiogKD0gMCkpKVxcblxcbiAgKGRlZiEgaWRlbnRpdHkgKGZuKiAoeCkgeCkpXFxuXFxuICAoZGVmISBjb25zdGFudC1mbiAoZm4qICh4KSAoZm4qICh5KSB4KSkpXFxuXFxuICAoZGVmISBjYWxsLW9uIChmbiogKCYgeHMpIChmbiogKGZuKSAoYXBwbHkgZm4geHMpKSkpXFxuXFxuICAoZGVmISBzdGVwLWludG8tbGlzdCAoXFxuICAgIGZuKiAoeHMgZm4wIGZuMSkgKFxcbiAgICAgIGxldCogKHggKGNhciB4cyksIC14cy0gKGNkciB4cykpIChcXG4gICAgICAgIGlmIChlbXB0eT8gLXhzLSlcXG4gICAgICAgICAgKGZuMSB4KVxcbiAgICAgICAgICAoZm4wIHggLXhzLSkpKSkpXFxuXFxuICAoZGVmISBhcHBseS1vbiAoXFxuICAgIGZuKiAoJiB4cykgKFxcbiAgICAgIHN0ZXAtaW50by1saXN0XFxuICAgICAgICB4c1xcbiAgICAgICAgKGZuKiAoYXJndW1lbnRzIC14cy0pIChhcHBseSAoY2FyIC14cy0pIGFyZ3VtZW50cykpXFxuICAgICAgICAoZm4qIChhcmd1bWVudHMpIChmbiogKGYpIChhcHBseSBmIGFyZ3VtZW50cykpKSkpKVxcblxcbiAgKGRlZiEgcmVkdWNlIChcXG4gICAgZm4qIChmIHNlZWQgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgc2VlZFxcbiAgICAgICAgKHJlZHVjZSBmIChmIHNlZWQgKGNhciB4cykpIChjZHIgeHMpKSkpKVxcblxcbiAgKGRlZiEgZmlsdGVyIChcXG4gICAgZm4qIChwcmVkaWNhdGUgeHMpIChcXG4gICAgICByZXZlcnNlIChcXG4gICAgICAgIHJlZHVjZVxcbiAgICAgICAgICAoZm4qIChtZW1vIHgpIChpZiAocHJlZGljYXRlIHgpIChjb25zIHggbWVtbykgbWVtbykpXFxuICAgICAgICAgICcoKVxcbiAgICAgICAgICB4cykpKSlcXG5cXG4gIChkZWYhIG1hcCAoXFxuICAgIGZuKiAoZiB4cykgKFxcbiAgICAgIHJldmVyc2UgKFxcbiAgICAgICAgcmVkdWNlXFxuICAgICAgICAgIChmbiogKG1lbW8geCkgKGNvbnMgKGYgeCkgbWVtbykpXFxuICAgICAgICAgICcoKVxcbiAgICAgICAgICB4cykpKSlcXG5cXG4gIChkZWYhIGV2ZXJ5PyAoXFxuICAgIGZuKiAocHJlZCB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICB0cnVlXFxuICAgICAgICAoaWYgKHByZWQgKGNhciB4cykpIChldmVyeT8gcHJlZCAoY2RyIHhzKSkgZmFsc2UpKSkpXFxuXFxuICAoZGVmISBzb21lPyAoXFxuICAgIGZuKiAocHJlZCB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBmYWxzZVxcbiAgICAgICAgKGlmIChwcmVkIChjYXIgeHMpKSB0cnVlIChzb21lPyBwcmVkIChjZHIgeHMpKSkpKSlcXG5cXG4gIChkZWYhIGxldG1lbXJlYyogKFxcbiAgICBtYWNybyogKGFsaWFzIGV4cHIpXFxuICAgICAgYChsZXQqIChcXG4gICAgICAgIH4oY2FyIGFsaWFzKVxcbiAgICAgICAgKG1lbWZpeCogKGZuKiAofihjYXIgYWxpYXMpKSB+KF8xIGFsaWFzKSkpKVxcbiAgICAgICAgICB+ZXhwcikpKVxcblxcbiAgKGRlZiEgc2tpcCAoXFxuICAgIGZuKiAobmJyIHhzKSAoXFxuICAgICAgbGV0cmVjKiAoXFxuICAgICAgICAtc2tpcC1cXG4gICAgICAgIChmbiogKHlzKSAoXFxuICAgICAgICAgIGxldCogKG5iciAoY2FyIHlzKSwgeHMgKF8xIHlzKSkgKFxcbiAgICAgICAgICAgIGNvbmRcXG4gICAgICAgICAgICAgICg9IDAgbmJyKSB4c1xcbiAgICAgICAgICAgICAgKD0gMSBuYnIpIChjZHIgeHMpXFxuICAgICAgICAgICAgICBcXFwiZGVmYXVsdFxcXCIgKC1za2lwLSAobGlzdCAoZGVjciBuYnIpIChjZHIgeHMpKSkpKSkpIChcXG4gICAgICAgICAgLXNraXAtIChsaXN0IG5iciB4cykpKSkpXFxuXFxuICAoZGVmISBpbnZva2FibGU/IChmbiogKHgpIChvciAoZnVuY3Rpb24/IHgpIChtYWNybz8geCkpKSlcXG5cXG4gIChkZWYhIC4gKFxcbiAgICBtYWNybyogKHgga2V5ICYgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgYChnZXQgfnggfmtleSlcXG4gICAgICAgIGAoKGdldCB+eCB+a2V5KSB+QHhzKSkpKVxcblxcbiAgKGRlZiEgLi4gKFxcbiAgICBmbiogKGxvIGhpKSAoXFxuICAgICAgbGV0cmVjKiAoXFxuICAgICAgICAtLi4tXFxuICAgICAgICAoZm4qICh4cykgKFxcbiAgICAgICAgICBsZXQqIChsbyAoXzAgeHMpLCBoaSAoXzEgeHMpLCAtbGlzdC0gKF8yIHhzKSkgKFxcbiAgICAgICAgICAgIGlmICg9IGxvIGhpKVxcbiAgICAgICAgICAgICAgKGNvbnMgaGkgLWxpc3QtKVxcbiAgICAgICAgICAgICAgKC0uLi0gKGxpc3QgbG8gKGRlY3IgaGkpIChjb25zIGhpIC1saXN0LSkpKSkpKSkgKFxcbiAgICAgICAgICAtLi4tIChsaXN0IGxvIGhpICcoKSkpKSkpXFxuXFxuICAoZGVmISBkZWZyZWMhIChcXG4gICAgbWFjcm8qIChmbi1uYW1lIGZuLWJvZHkpXFxuICAgICAgYChkZWYhIH5mbi1uYW1lIChsZXRyZWMqICh+Zm4tbmFtZSB+Zm4tYm9keSkgfmZuLW5hbWUpKSkpXFxuXFxuICAoZGVmISBmb3IqIChcXG4gICAgbWFjcm8qIChsb29wLXBhcmFtZXRlcnMgYm9keSlcXG4gICAgICBgKGxvb3BcXG4gICAgICAgICB+KF8wIGxvb3AtcGFyYW1ldGVycylcXG4gICAgICAgICAoaWYgfihfMSBsb29wLXBhcmFtZXRlcnMpXFxuICAgICAgICAgICAoZG8gfmJvZHkgKGxvb3AgfihfMiBsb29wLXBhcmFtZXRlcnMpKSlcXG4gICAgICAgICAgIG5pbCkpKSlcXG5cXG4gIChkZWYhIGZvci1lYWNoIChcXG4gICAgZm4qIChmIHhzKSAoXFxuICAgICAgcmVkdWNlIChmbiogKG1lbW8geCkgKGRvIChmIHgpIG1lbW8pKSBuaWwgeHMpKSlcXG5cXG4gIChkZWYhIG4tdGltZXMgKFxcbiAgICBmbiogKG4gZikgKFxcbiAgICAgIGxvb3BcXG4gICAgICAgIChpIDApXFxuICAgICAgICAoaWYgKD0gaSBuKVxcbiAgICAgICAgICBuaWxcXG4gICAgICAgICAgKGRvIChmIGkpIChsb29wICgrIGkgMSkpKSkpKSlcXG5cXG4gIChkZWYhIHRhcCAoZm4qIChmIHgpIChkbyAoZiB4KSB4KSkpXFxuXFxuICAoZGVmISB3aXRoLXNpZGUtZWZmZWN0IChmbiogKHRodW5rIHgpIChkbyAodGh1bmspIHgpKSlcXG5cXG4gIChkZWYhIHRodW5rIChtYWNybyogKGZvcm0pIGAoZm4qICgpIH5mb3JtKSkpXFxuXFxuICAoZGVmISBjYWxsIChtYWNybyogKGYgJiB4cykgYCh+ZiB+QHhzKSkpXFxuXFxuICAoZGVmISBhcHBseSAobWFjcm8qIChmIHhzKSBgKGV2YWwgKGNvbnMgfmYgfnhzKSkpKVxcblxcbiAgKGRlZiEgZXZhbC1zdHJpbmcgKGZuKiAoZXJsU3RyaW5nKSAoZXZhbCAocGFyc2UgZXJsU3RyaW5nKSkpKVxcbilcXG5cIiIsImltcG9ydCB7IGNvbW1lbnRTaWduYWwgfSBmcm9tICcuL2NvbW1lbnRTaWduYWwnO1xuXG5jb25zdCBjcmVhdGVUb2tlblJlZ2V4ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvW1xccyxdKih+QHxcXCNcXCt8XFwjXFwtfFxcI1xcIXxbXFxbXFxdKCl7fSdgfkBeXXxcIig/OlxcXFwufFteXFxcXFwiXSkqXCJ8Oy4qfFteXFxzXFxbXFxdKCl7fSdcImAsO10qKS9nO1xufTtcblxuY29uc3QgaXNDb21tZW50ID0gZnVuY3Rpb24obWF0Y2gpIHtcbiAgcmV0dXJuIG1hdGNoWzBdID09PSAnOyc7XG59O1xuXG5jb25zdCBpc01lYW5pbmdmdWwgPSBmdW5jdGlvbihtYXRjaCkge1xuICByZXR1cm4gbWF0Y2ggIT09ICcnO1xufTtcblxuY29uc3QgdG9rZW5pemUgPSBmdW5jdGlvbihzb3VyY2VDb2RlKSB7XG4gIGxldCBtYXRjaDtcbiAgY29uc3QgdG9rZW5SZWdleCA9IGNyZWF0ZVRva2VuUmVnZXgoKTtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIHdoaWxlIChpc01lYW5pbmdmdWwobWF0Y2ggPSB0b2tlblJlZ2V4LmV4ZWMoc291cmNlQ29kZSlbMV0pKSB7XG4gICAgaWYgKGlzQ29tbWVudChtYXRjaCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICByZXN1bHQucHVzaChtYXRjaCk7XG4gIH1cbiAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gY29tbWVudFNpZ25hbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuXG5leHBvcnQgeyB0b2tlbml6ZSB9O1xuIiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tICcuL3BhcnNlJztcbmltcG9ydCB7IHRva2VuaXplIH0gZnJvbSAnLi90b2tlbml6ZSc7XG5cbmV4cG9ydCBjb25zdCB0b2tlbml6ZUFuZFBhcnNlID0gZnVuY3Rpb24oc291cmNlQ29kZSkge1xuICByZXR1cm4gcGFyc2UodG9rZW5pemUoc291cmNlQ29kZSkpO1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUVybExpc3QgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGVybEF0b21UeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBlcmxUeXBlcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBjcmVhdGVFcmxBdG9tID0gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlcmxWYWx1ZTogZXJsVmFsdWUsXG4gICAgdHlwZTogZXJsQXRvbVR5cGVcbiAgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZUVybEJvb2xlYW4gPSBmdW5jdGlvbihqc0Jvb2xlYW4pIHtcbiAgaWYgKGpzQm9vbGVhbikge1xuICAgIHJldHVybiBlcmxUcnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxGYWxzZTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlRXJsSWdub3JlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBlcmxJZ25vcmU7XG59O1xuXG5jb25zdCBjcmVhdGVFcmxOaWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGVybE5pbDtcbn07XG5cbmNvbnN0IGNyZWF0ZUVybFZhbHVlID0gZnVuY3Rpb24oanNWYWx1ZSwgZXJsVHlwZSkge1xuICByZXR1cm4ge1xuICAgIGpzVmFsdWU6IGpzVmFsdWUsXG4gICAgdHlwZTogZXJsVHlwZVxuICB9O1xufTtcblxuY29uc3QgY3JlYXRlRmFjdG9yeUFuZFByZWRpY2F0ZSA9IGZ1bmN0aW9uKGVybFR5cGUpIHtcbiAgY29uc3QgZmFjdG9yeSA9IGZ1bmN0aW9uKGpzVmFsdWUpIHtcbiAgICByZXR1cm4gY3JlYXRlRXJsVmFsdWUoanNWYWx1ZSwgZXJsVHlwZSk7XG4gIH07XG4gIGNvbnN0IHByZWRpY2F0ZSA9IGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgcmV0dXJuIGVybFZhbHVlLnR5cGUgPT09IGVybFR5cGU7XG4gIH07XG4gIHJldHVybiBbZmFjdG9yeSwgcHJlZGljYXRlXTtcbn07XG5cbmNvbnN0IGNyZWF0ZVByZWRpY2F0ZSA9IGZ1bmN0aW9uKGNvbnN0YW50KSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gY29uc3RhbnQ7XG4gIH07XG59O1xuXG5jb25zdCBleHRyYWN0SnNWYWx1ZSA9IGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gIHJldHVybiBlcmxWYWx1ZS5qc1ZhbHVlO1xufTtcblxuY29uc3QgX2VybFR5cGVzID0gZXJsVHlwZXMubWFwKGNyZWF0ZUZhY3RvcnlBbmRQcmVkaWNhdGUpO1xuXG5jb25zdCBfY3JlYXRlRXJsQm9vbGVhbiAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMF1bMF07XG5jb25zdCBpc0VybEJvb2xlYW4gICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMF1bMV07XG5jb25zdCBjcmVhdGVFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24gPSBfZXJsVHlwZXNbMV1bMF07XG5jb25zdCBpc0VybENvcmVFZmZlY3RmdWxGdW5jdGlvbiAgICAgPSBfZXJsVHlwZXNbMV1bMV07XG5jb25zdCBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uICAgICAgPSBfZXJsVHlwZXNbMl1bMF07XG5jb25zdCBpc0VybENvcmVQdXJlRnVuY3Rpb24gICAgICAgICAgPSBfZXJsVHlwZXNbMl1bMV07XG5jb25zdCBjcmVhdGVFcmxJZGVudGlmaWVyICAgICAgICAgICAgPSBfZXJsVHlwZXNbM11bMF07XG5jb25zdCBpc0VybElkZW50aWZpZXIgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbM11bMV07XG5jb25zdCBjcmVhdGVFcmxJbmRleCAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbNF1bMF07XG5jb25zdCBpc0VybEluZGV4ICAgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbNF1bMV07XG5jb25zdCBjcmVhdGVFcmxLZXl3b3JkICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbNV1bMF07XG5jb25zdCBpc0VybEtleXdvcmQgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbNV1bMV07XG5jb25zdCBfY3JlYXRlRXJsTGlzdCAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbNl1bMF07XG5jb25zdCBpc0VybExpc3QgICAgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbNl1bMV07XG5jb25zdCBjcmVhdGVFcmxNYWNybyAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbN11bMF07XG5jb25zdCBpc0VybE1hY3JvICAgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbN11bMV07XG5jb25zdCBjcmVhdGVFcmxOdW1iZXIgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbOF1bMF07XG5jb25zdCBpc0VybE51bWJlciAgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbOF1bMV07XG5jb25zdCBjcmVhdGVFcmxTcGVjaWFsRm9ybSAgICAgICAgICAgPSBfZXJsVHlwZXNbOV1bMF07XG5jb25zdCBpc0VybFNwZWNpYWxGb3JtICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbOV1bMV07XG5jb25zdCBjcmVhdGVFcmxTdHJpbmcgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTBdWzBdO1xuY29uc3QgaXNFcmxTdHJpbmcgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzEwXVsxXTtcbmNvbnN0IGNyZWF0ZUVybFN5bWJvbCAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1sxMV1bMF07XG5jb25zdCBpc0VybFN5bWJvbCAgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTFdWzFdO1xuY29uc3QgX2NyZWF0ZUVybFVuaXQgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzEyXVswXTtcbmNvbnN0IF9pc0VybFVuaXQgICAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1sxMl1bMV07XG5jb25zdCBjcmVhdGVFcmxVc2VyUHVyZUZ1bmN0aW9uICAgICAgPSBfZXJsVHlwZXNbMTNdWzBdO1xuY29uc3QgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uICAgICAgICAgID0gX2VybFR5cGVzWzEzXVsxXTtcbmNvbnN0IF9jcmVhdGVFcmxBdG9tICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1sxNF1bMF07XG5jb25zdCBpc0VybEF0b20gICAgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTRdWzFdO1xuXG5jb25zdCBlcmxJZ25vcmUgPSBfY3JlYXRlRXJsVW5pdChudWxsKTtcblxuY29uc3QgZXJsTmlsID0gX2NyZWF0ZUVybFVuaXQobnVsbCk7XG5cbmNvbnN0IGVybEJvb2xlYW5zID0gW2ZhbHNlLCB0cnVlXS5tYXAoX2NyZWF0ZUVybEJvb2xlYW4pO1xuXG5jb25zdCBlcmxGYWxzZSA9IGVybEJvb2xlYW5zWzBdO1xuY29uc3QgZXJsVHJ1ZSAgPSBlcmxCb29sZWFuc1sxXTtcblxuY29uc3QgcHJlZGljYXRlcyA9IFtlcmxGYWxzZSwgZXJsSWdub3JlLCBlcmxOaWwsIGVybFRydWVdLm1hcChjcmVhdGVQcmVkaWNhdGUpO1xuXG5jb25zdCBpc0VybEZhbHNlICA9IHByZWRpY2F0ZXNbMF07XG5jb25zdCBpc0VybElnbm9yZSA9IHByZWRpY2F0ZXNbMV07XG5jb25zdCBpc0VybE5pbCAgICA9IHByZWRpY2F0ZXNbMl07XG5jb25zdCBpc0VybFRydWUgICA9IHByZWRpY2F0ZXNbM107XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUVybEF0b20sXG4gIGNyZWF0ZUVybEJvb2xlYW4sXG4gIGNyZWF0ZUVybENvcmVFZmZlY3RmdWxGdW5jdGlvbixcbiAgY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbixcbiAgY3JlYXRlRXJsSWRlbnRpZmllcixcbiAgY3JlYXRlRXJsSWdub3JlLFxuICBjcmVhdGVFcmxJbmRleCxcbiAgY3JlYXRlRXJsS2V5d29yZCxcbiAgY3JlYXRlRXJsTGlzdCxcbiAgY3JlYXRlRXJsTWFjcm8sXG4gIGNyZWF0ZUVybE5pbCxcbiAgY3JlYXRlRXJsTnVtYmVyLFxuICBjcmVhdGVFcmxTcGVjaWFsRm9ybSxcbiAgY3JlYXRlRXJsU3RyaW5nLFxuICBjcmVhdGVFcmxTeW1ib2wsXG4gIGNyZWF0ZUVybFVzZXJQdXJlRnVuY3Rpb24sXG4gIGV4dHJhY3RKc1ZhbHVlLFxuICBpc0VybEF0b20sXG4gIGlzRXJsQm9vbGVhbixcbiAgaXNFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24sXG4gIGlzRXJsQ29yZVB1cmVGdW5jdGlvbixcbiAgZXJsRmFsc2UsXG4gIGlzRXJsRmFsc2UsXG4gIGlzRXJsSWRlbnRpZmllcixcbiAgZXJsSWdub3JlLFxuICBpc0VybElnbm9yZSxcbiAgaXNFcmxJbmRleCxcbiAgaXNFcmxLZXl3b3JkLFxuICBpc0VybExpc3QsXG4gIGlzRXJsTWFjcm8sXG4gIGVybE5pbCxcbiAgaXNFcmxOaWwsXG4gIGlzRXJsTnVtYmVyLFxuICBpc0VybFNwZWNpYWxGb3JtLFxuICBpc0VybFN0cmluZyxcbiAgaXNFcmxTeW1ib2wsXG4gIGVybFRydWUsXG4gIGlzRXJsVHJ1ZSxcbiAgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uXG59O1xuIiwiY29uc3QgZXJsQm9vbGVhblR5cGUgICAgICAgICAgICAgICA9ICdlcmxCb29sZWFuVHlwZSc7XG5jb25zdCBlcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb25UeXBlID0gJ2VybENvcmVFZmZlY3RmdWxGdW5jdGlvblR5cGUnO1xuY29uc3QgZXJsQ29yZVB1cmVGdW5jdGlvblR5cGUgICAgICA9ICdlcmxDb3JlUHVyZUZ1bmN0aW9uVHlwZSc7XG5jb25zdCBlcmxJZGVudGlmaWVyVHlwZSAgICAgICAgICAgID0gJ2VybElkZW50aWZpZXJUeXBlJztcbmNvbnN0IGVybEluZGV4VHlwZSAgICAgICAgICAgICAgICAgPSAnZXJsSW5kZXhUeXBlJztcbmNvbnN0IGVybEtleXdvcmRUeXBlICAgICAgICAgICAgICAgPSAnZXJsS2V5d29yZFR5cGUnO1xuY29uc3QgZXJsTGlzdFR5cGUgICAgICAgICAgICAgICAgICA9ICdlcmxMaXN0VHlwZSc7XG5jb25zdCBlcmxNYWNyb1R5cGUgICAgICAgICAgICAgICAgID0gJ2VybE1hY3JvVHlwZSc7XG5jb25zdCBlcmxOdW1iZXJUeXBlICAgICAgICAgICAgICAgID0gJ2VybE51bWJlclR5cGUnO1xuY29uc3QgZXJsU3BlY2lhbEZvcm1UeXBlICAgICAgICAgICA9ICdlcmxTcGVjaWFsRm9ybVR5cGUnO1xuY29uc3QgZXJsU3RyaW5nVHlwZSAgICAgICAgICAgICAgICA9ICdlcmxTdHJpbmdUeXBlJztcbmNvbnN0IGVybFN5bWJvbFR5cGUgICAgICAgICAgICAgICAgPSAnZXJsU3ltYm9sVHlwZSc7XG5jb25zdCBlcmxVbml0VHlwZSAgICAgICAgICAgICAgICAgID0gJ2VybFVuaXRUeXBlJztcbmNvbnN0IGVybFVzZXJQdXJlRnVuY3Rpb25UeXBlICAgICAgPSAnZXJsVXNlclB1cmVGdW5jdGlvblR5cGUnO1xuY29uc3QgZXJsQXRvbVR5cGUgICAgICAgICAgICAgICAgICA9ICdlcmxBdG9tVHlwZSc7XG5cbmNvbnN0IGVybFR5cGVzID0gW1xuICBlcmxCb29sZWFuVHlwZSxcbiAgZXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uVHlwZSxcbiAgZXJsQ29yZVB1cmVGdW5jdGlvblR5cGUsXG4gIGVybElkZW50aWZpZXJUeXBlLFxuICBlcmxJbmRleFR5cGUsXG4gIGVybEtleXdvcmRUeXBlLFxuICBlcmxMaXN0VHlwZSxcbiAgZXJsTWFjcm9UeXBlLFxuICBlcmxOdW1iZXJUeXBlLFxuICBlcmxTcGVjaWFsRm9ybVR5cGUsXG4gIGVybFN0cmluZ1R5cGUsXG4gIGVybFN5bWJvbFR5cGUsXG4gIGVybFVuaXRUeXBlLFxuICBlcmxVc2VyUHVyZUZ1bmN0aW9uVHlwZSxcbiAgZXJsQXRvbVR5cGVcbl07XG5cbmV4cG9ydCB7XG4gIGVybEF0b21UeXBlLFxuICBlcmxCb29sZWFuVHlwZSxcbiAgZXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uVHlwZSxcbiAgZXJsQ29yZVB1cmVGdW5jdGlvblR5cGUsXG4gIGVybElkZW50aWZpZXJUeXBlLFxuICBlcmxJbmRleFR5cGUsXG4gIGVybEtleXdvcmRUeXBlLFxuICBlcmxMaXN0VHlwZSxcbiAgZXJsTWFjcm9UeXBlLFxuICBlcmxOdW1iZXJUeXBlLFxuICBlcmxTcGVjaWFsRm9ybVR5cGUsXG4gIGVybFN0cmluZ1R5cGUsXG4gIGVybFN5bWJvbFR5cGUsXG4gIGVybFR5cGVzLFxuICBlcmxVbml0VHlwZSxcbiAgZXJsVXNlclB1cmVGdW5jdGlvblR5cGVcbn07XG4iLCJmdW5jdGlvbiBkaWZmQXJyYXkodmFsdWUxLCB2YWx1ZTAsIGluZGV4KSB7XG4gIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZTApKSB7XG4gICAgcmV0dXJuIHsgdHJlZTogaW5kZXgsIGNvbW1hbmRzOiBbWydyZXBsYWNlJywgdmFsdWUxXV0sIGluZGV4OiBpbmRleCArIDEgfTtcbiAgfVxuXG4gIGxldCBjb3VudCA9IDA7XG4gIGNvbnN0IGxlbmd0aDEgPSB2YWx1ZTEubGVuZ3RoO1xuICBjb25zdCBsZW5ndGgwID0gdmFsdWUwLmxlbmd0aDtcbiAgY29uc3QgbWluTGVuZ3RoID0gTWF0aC5taW4obGVuZ3RoMSwgbGVuZ3RoMCk7XG5cbiAgaWYgKG1pbkxlbmd0aCA+IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1pbkxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAodmFsdWUxW2pdICE9PSB2YWx1ZTBbal0pIHtcbiAgICAgICAgY291bnQrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY291bnQgPT09IG1pbkxlbmd0aCkge1xuICAgICAgcmV0dXJuIHsgdHJlZTogaW5kZXgsIGNvbW1hbmRzOiBbWydyZXBsYWNlJywgdmFsdWUxXV0sIGluZGV4OiBpbmRleCArIDEgfTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB0cmVlID0gW107XG4gIGxldCBjb21tYW5kcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWluTGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodmFsdWUxW2ldICE9PSB2YWx1ZTBbaV0pIHtcbiAgICAgIGNvbnN0IF9wYXRjaCA9IF9kaWZmKHZhbHVlMVtpXSwgdmFsdWUwW2ldLCBpbmRleCk7XG4gICAgICBpZiAoX3BhdGNoLmNvbW1hbmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdHJlZS5wdXNoKHsgaW5kZXg6IGksIHZhbHVlOiBfcGF0Y2gudHJlZSB9KTtcbiAgICAgICAgY29tbWFuZHMgPSBjb21tYW5kcy5jb25jYXQoX3BhdGNoLmNvbW1hbmRzKTtcbiAgICAgICAgaW5kZXggPSBpbmRleCArIF9wYXRjaC5jb21tYW5kcy5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGgxOyBpKyspIHtcbiAgICB0cmVlLnB1c2goeyBpbmRleDogaSwgdmFsdWU6IGluZGV4IH0pO1xuICAgIGNvbW1hbmRzLnB1c2goWydpbnNlcnRBdEVuZCcsIHZhbHVlMVtpXV0pO1xuICAgIGluZGV4Kys7XG4gIH1cblxuICBjb25zdCByZW1vdmFscyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoMDsgaSsrKSB7XG4gICAgcmVtb3ZhbHMudW5zaGlmdCh7IGluZGV4OiBpLCB2YWx1ZTogaW5kZXggfSk7XG4gICAgY29tbWFuZHMucHVzaChbJ3JlbW92ZSddKTtcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgcmV0dXJuIHsgdHJlZTogdHJlZS5jb25jYXQocmVtb3ZhbHMpLCBjb21tYW5kczogY29tbWFuZHMsIGluZGV4OiBpbmRleCB9O1xufVxuXG5mdW5jdGlvbiBkaWZmT2JqZWN0KHZhbHVlMSwgdmFsdWUwLCBpbmRleCkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlMCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJlZTogaW5kZXgsXG4gICAgICBjb21tYW5kczogW1sncmVwbGFjZScsIHZhbHVlMV1dLFxuICAgICAgaW5kZXg6IGluZGV4ICsgMVxuICAgIH07XG4gIH1cblxuICBsZXQga2V5Q291bnQgPSAwO1xuICBsZXQgZGlmZkNvdW50ID0gMDtcblxuICBmb3IgKGxldCBrZXkgaW4gdmFsdWUwKSB7XG4gICAgaWYgKCF2YWx1ZTAuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XG4gICAga2V5Q291bnQrKztcbiAgICBpZiAoIXZhbHVlMS5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IHZhbHVlMVtrZXldICE9PSB2YWx1ZTBba2V5XSkge1xuICAgICAgZGlmZkNvdW50Kys7XG4gICAgfVxuICB9XG5cbiAgaWYgKGtleUNvdW50ID4gMSAmJiBrZXlDb3VudCA9PT0gZGlmZkNvdW50KSB7XG4gICAgcmV0dXJuIHsgdHJlZTogaW5kZXgsIGNvbW1hbmRzOiBbWydyZXBsYWNlJywgdmFsdWUxXV0sIGluZGV4OiBpbmRleCArIDEgfTtcbiAgfVxuXG4gIGNvbnN0IHRyZWUgPSBbXTtcbiAgbGV0IGNvbW1hbmRzID0gW107XG5cbiAgZm9yIChsZXQga2V5IGluIHZhbHVlMSkge1xuICAgIGlmICghdmFsdWUxLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xuICAgIGlmICh2YWx1ZTAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKHZhbHVlMVtrZXldICE9PSB2YWx1ZTBba2V5XSkge1xuICAgICAgICBjb25zdCBfcGF0Y2ggPSBfZGlmZih2YWx1ZTFba2V5XSwgdmFsdWUwW2tleV0sIGluZGV4KTtcbiAgICAgICAgaWYgKF9wYXRjaC5jb21tYW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdHJlZS5wdXNoKHsgaW5kZXg6IGtleSwgdmFsdWU6IF9wYXRjaC50cmVlIH0pO1xuICAgICAgICAgIGNvbW1hbmRzID0gY29tbWFuZHMuY29uY2F0KF9wYXRjaC5jb21tYW5kcyk7XG4gICAgICAgICAgaW5kZXggPSBpbmRleCArIF9wYXRjaC5jb21tYW5kcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJlZS5wdXNoKHsgaW5kZXg6IGtleSwgdmFsdWU6IGluZGV4IH0pO1xuICAgICAgY29tbWFuZHMucHVzaChbJ3NldEF0S2V5JywgdmFsdWUxW2tleV1dKTtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIHZhbHVlMCkge1xuICAgIGlmICghdmFsdWUxLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHRyZWUucHVzaCh7IGluZGV4OiBrZXksIHZhbHVlOiBpbmRleCB9KTtcbiAgICAgIGNvbW1hbmRzLnB1c2goWydkZWxldGUnXSk7XG4gICAgICBpbmRleCsrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHRyZWU6IHRyZWUsIGNvbW1hbmRzOiBjb21tYW5kcywgaW5kZXg6IGluZGV4IH07XG59XG5cbmZ1bmN0aW9uIF9kaWZmKHZhbHVlMSwgdmFsdWUwLCBpbmRleCkge1xuICBpZiAodmFsdWUxID09PSB2YWx1ZTApIHtcbiAgICByZXR1cm4geyB0cmVlOiBbXSwgY29tbWFuZHM6IFtdLCBpbmRleDogaW5kZXggfTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlMSkpIHtcbiAgICByZXR1cm4gZGlmZkFycmF5KHZhbHVlMSwgdmFsdWUwLCBpbmRleCk7XG4gIH1cblxuICBpZiAoaXNPYmplY3QodmFsdWUxKSkge1xuICAgIHJldHVybiBkaWZmT2JqZWN0KHZhbHVlMSwgdmFsdWUwLCBpbmRleCk7XG4gIH1cblxuICByZXR1cm4geyB0cmVlOiBpbmRleCwgY29tbWFuZHM6IFtbJ3JlcGxhY2UnLCB2YWx1ZTFdXSwgaW5kZXg6IGluZGV4ICsgMSB9O1xufVxuXG5jb25zdCBkaWZmID0gZnVuY3Rpb24odmFsdWUxLCB2YWx1ZTApIHtcbiAgY29uc3QgcGF0Y2ggPSBfZGlmZih2YWx1ZTEsIHZhbHVlMCwgMCk7XG4gIHJldHVybiB7IHZhbHVlOiBwYXRjaC50cmVlLCBjb21tYW5kczogcGF0Y2guY29tbWFuZHMgfTtcbn07XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbmV4cG9ydCB7IGRpZmYgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHsgdGFnOiB0YWcgfTtcblxuICAgIGlmIChjb25maWcgIT0gbnVsbCkgeyAvLyBpc09iamVjdFxuXG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29uZmlnKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdpZCcpIHtcbiAgICAgICAgICBlbGVtZW50LmlkID0gY29uZmlnLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ2NsYXNzZXMnKSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc2VzID0gY29uZmlnLmNsYXNzZXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZSA9IGNvbmZpZy5zdHlsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT09ICdhdHRyaWJzJykge1xuICAgICAgICAgIGVsZW1lbnQuYXR0cmlicyA9IGNvbmZpZy5hdHRyaWJzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgaXNTdHJpbmcoYXJnc1swXSkpIHtcbiAgICAgICAgZWxlbWVudC5jaGlsZHJlbiA9IGFyZ3NbMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmNoaWxkcmVuID0gW10uY29uY2F0LmFwcGx5KFtdLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBTdHJpbmddJztcbn1cblxuY29uc3QgdGFncyA9IHtcbiAgJ0EnOiB0cnVlLFxuICAnQlVUVE9OJzogdHJ1ZSxcbiAgJ0NBTlZBUyc6IHRydWUsXG4gICdDT0RFJzogdHJ1ZSxcbiAgJ0RJVic6IHRydWUsXG4gICdGT09URVInOiB0cnVlLFxuICAnRk9STSc6IHRydWUsXG4gICdIMSc6IHRydWUsXG4gICdIMic6IHRydWUsXG4gICdIMyc6IHRydWUsXG4gICdINCc6IHRydWUsXG4gICdINSc6IHRydWUsXG4gICdINic6IHRydWUsXG4gICdIRUFERVInOiB0cnVlLFxuICAnSU1HJzogdHJ1ZSxcbiAgJ0xBQkVMJzogdHJ1ZSxcbiAgJ0xJJzogdHJ1ZSxcbiAgJ0xJTksnOiB0cnVlLFxuICAnTkFWJzogdHJ1ZSxcbiAgJ05PU0NSSVBUJzogdHJ1ZSxcbiAgJ09QVEdST1VQJzogdHJ1ZSxcbiAgJ09QVElPTic6IHRydWUsXG4gICdPVVRQVVQnOiB0cnVlLFxuICAnUCc6IHRydWUsXG4gICdQQVJBTSc6IHRydWUsXG4gICdQUkUnOiB0cnVlLFxuICAnU0NSSVBUJzogdHJ1ZSxcbiAgJ1NFQ1RJT04nOiB0cnVlLFxuICAnU0VMRUNUJzogdHJ1ZSxcbiAgJ1NPVVJDRSc6IHRydWUsXG4gICdTUEFOJzogdHJ1ZSxcbiAgJ1NUWUxFJzogdHJ1ZSxcbiAgJ1RFWFRBUkVBJzogdHJ1ZVxufTtcblxuY29uc3QgZWxlbWVudEZhY3RvcmllcyA9IHt9O1xuXG5mb3IgKGxldCB0YWdOYW1lIGluIHRhZ3MpIHtcbiAgZWxlbWVudEZhY3Rvcmllc1t0YWdOYW1lXSA9IGNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG59XG5cbmV4cG9ydCBjb25zdCBBID0gZWxlbWVudEZhY3Rvcmllcy5BO1xuZXhwb3J0IGNvbnN0IEJVVFRPTiA9IGVsZW1lbnRGYWN0b3JpZXMuQlVUVE9OO1xuZXhwb3J0IGNvbnN0IENBTlZBUyA9IGVsZW1lbnRGYWN0b3JpZXMuQ0FOVkFTO1xuZXhwb3J0IGNvbnN0IENPREUgPSBlbGVtZW50RmFjdG9yaWVzLkNPREU7XG5leHBvcnQgY29uc3QgRElWID0gZWxlbWVudEZhY3Rvcmllcy5ESVY7XG5leHBvcnQgY29uc3QgRk9PVEVSID0gZWxlbWVudEZhY3Rvcmllcy5GT09URVI7XG5leHBvcnQgY29uc3QgRk9STSA9IGVsZW1lbnRGYWN0b3JpZXMuRk9STTtcbmV4cG9ydCBjb25zdCBIMSA9IGVsZW1lbnRGYWN0b3JpZXMuSDE7XG5leHBvcnQgY29uc3QgSDIgPSBlbGVtZW50RmFjdG9yaWVzLkgyO1xuZXhwb3J0IGNvbnN0IEgzID0gZWxlbWVudEZhY3Rvcmllcy5IMztcbmV4cG9ydCBjb25zdCBINCA9IGVsZW1lbnRGYWN0b3JpZXMuSDQ7XG5leHBvcnQgY29uc3QgSDUgPSBlbGVtZW50RmFjdG9yaWVzLkg1O1xuZXhwb3J0IGNvbnN0IEg2ID0gZWxlbWVudEZhY3Rvcmllcy5INjtcbmV4cG9ydCBjb25zdCBIRUFERVIgPSBlbGVtZW50RmFjdG9yaWVzLkhFQURFUjtcbmV4cG9ydCBjb25zdCBJTUcgPSBlbGVtZW50RmFjdG9yaWVzLklNRztcbmV4cG9ydCBjb25zdCBMQUJFTCA9IGVsZW1lbnRGYWN0b3JpZXMuTEFCRUw7XG5leHBvcnQgY29uc3QgTEkgPSBlbGVtZW50RmFjdG9yaWVzLkxJO1xuZXhwb3J0IGNvbnN0IExJTksgPSBlbGVtZW50RmFjdG9yaWVzLkxJTks7XG5leHBvcnQgY29uc3QgTkFWID0gZWxlbWVudEZhY3Rvcmllcy5OQVY7XG5leHBvcnQgY29uc3QgTk9TQ1JJUFQgPSBlbGVtZW50RmFjdG9yaWVzLk5PU0NSSVBUO1xuZXhwb3J0IGNvbnN0IE9QVEdST1VQID0gZWxlbWVudEZhY3Rvcmllcy5PUFRHUk9VUDtcbmV4cG9ydCBjb25zdCBPUFRJT04gPSBlbGVtZW50RmFjdG9yaWVzLk9QVElPTjtcbmV4cG9ydCBjb25zdCBPVVRQVVQgPSBlbGVtZW50RmFjdG9yaWVzLk9VVFBVVDtcbmV4cG9ydCBjb25zdCBQID0gZWxlbWVudEZhY3Rvcmllcy5QO1xuZXhwb3J0IGNvbnN0IFBBUkFNID0gZWxlbWVudEZhY3Rvcmllcy5QQVJBTTtcbmV4cG9ydCBjb25zdCBQUkUgPSBlbGVtZW50RmFjdG9yaWVzLlBSRTtcbmV4cG9ydCBjb25zdCBTQ1JJUFQgPSBlbGVtZW50RmFjdG9yaWVzLlNDUklQVDtcbmV4cG9ydCBjb25zdCBTRUNUSU9OID0gZWxlbWVudEZhY3Rvcmllcy5TRUNUSU9OO1xuZXhwb3J0IGNvbnN0IFNFTEVDVCA9IGVsZW1lbnRGYWN0b3JpZXMuU0VMRUNUO1xuZXhwb3J0IGNvbnN0IFNPVVJDRSA9IGVsZW1lbnRGYWN0b3JpZXMuU09VUkNFO1xuZXhwb3J0IGNvbnN0IFNQQU4gPSBlbGVtZW50RmFjdG9yaWVzLlNQQU47XG5leHBvcnQgY29uc3QgU1RZTEUgPSBlbGVtZW50RmFjdG9yaWVzLlNUWUxFO1xuZXhwb3J0IGNvbnN0IFRFWFRBUkVBID0gZWxlbWVudEZhY3Rvcmllcy5URVhUQVJFQTtcbiIsImZ1bmN0aW9uIGF0dGFjaEVsZW1lbnQocGFyZW50LCBlbGVtZW50KSB7XG4gIGlmIChpc1N0cmluZyhlbGVtZW50KSkge1xuICAgIHBhcmVudC5pbm5lclRleHQgPSBlbGVtZW50OyAvLyA/XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VFbGVtZW50KHBhcmVudCwgbmV3RWxlbWVudCwgb2xkRWxlbWVudCkge1xuICBpZiAoaXNTdHJpbmcobmV3RWxlbWVudCkpIHtcbiAgICBwYXJlbnQuaW5uZXJUZXh0ID0gbmV3RWxlbWVudDsgLy8gP1xuICB9IGVsc2Uge1xuICAgIHBhcmVudC5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgb2xkRWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kQXR0YWNoRWxlbWVudChwYXJlbnQsIGNvbmZpZykge1xuICBhdHRhY2hFbGVtZW50KHBhcmVudCwgY3JlYXRlRWxlbWVudChjb25maWcpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kU3Vic3RpdHV0ZUVsZW1lbnQocGFyZW50LCBjb25maWcsIG9sZEVsZW1lbnRJbmRleCkge1xuICByZXBsYWNlRWxlbWVudChcbiAgICBwYXJlbnQsXG4gICAgY3JlYXRlRWxlbWVudChjb25maWcpLFxuICAgIGZpbmRDaGlsZChwYXJlbnQsIHsgbW9kZTogJ2luZGV4Jywga2V5OiBvbGRFbGVtZW50SW5kZXggfSkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRBdHRhY2hFbGVtZW50cyhub2RlLCBlbGVtZW50cykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudChub2RlLCBlbGVtZW50c1tpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChjb25maWcpIHtcbiAgaWYgKGlzU3RyaW5nKGNvbmZpZykpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNvbmZpZy50YWcpO1xuICBpZiAoY29uZmlnLmlkICE9IG51bGwpIHtcbiAgICBub2RlLmlkID0gY29uZmlnLmlkO1xuICB9XG4gIGlmIChjb25maWcuY2xhc3NlcyAhPSBudWxsKSB7XG4gICAgZm9yIChsZXQga2xhc3MgaW4gY29uZmlnLmNsYXNzZXMpIHtcbiAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChrbGFzcyk7XG4gICAgfVxuICB9XG4gIGlmIChjb25maWcuYXR0cmlicyAhPSBudWxsKSB7XG4gICAgZm9yIChsZXQgYXR0cmliS2V5IGluIGNvbmZpZy5hdHRyaWJzKSB7XG4gICAgICBpZiAoYXR0cmliS2V5ICE9PSAnc3R5bGUnKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYktleSwgY29uZmlnLmF0dHJpYnNbYXR0cmliS2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChjb25maWcuc3R5bGUgIT0gbnVsbCkge1xuICAgIGZvciAobGV0IHN0eWxlS2V5IGluIGNvbmZpZy5zdHlsZSkge1xuICAgICAgbm9kZS5zdHlsZVtzdHlsZUtleV0gPSBjb25maWcuc3R5bGVbc3R5bGVLZXldO1xuICAgIH1cbiAgfVxuICBpZiAoY29uZmlnLmNoaWxkcmVuICE9IG51bGwpIHtcbiAgICBpZiAoaXNTdHJpbmcoY29uZmlnLmNoaWxkcmVuKSkge1xuICAgICAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudChub2RlLCBjb25maWcuY2hpbGRyZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAobmV3Q29uZmlnLCBpbmRleCkgeyBcbiAgICAgICAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudChub2RlLCBuZXdDb25maWcpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBmaW5kQ2hpbGQocGFyZW50LCBjb25maWcpIHtcbiAgc3dpdGNoIChjb25maWcubW9kZSkge1xuICAgIGNhc2UgJ2lkJzpcbiAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcua2V5KTtcbiAgICBjYXNlICdjbGFzcyc6XG4gICAgICByZXR1cm4gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY29uZmlnLmtleS5jbGFzcylbY29uZmlnLmtleS5pbmRleF07XG4gICAgY2FzZSAndGFnJzpcbiAgICAgIHJldHVybiBwYXJlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoY29uZmlnLmtleS50YWcpW2NvbmZpZy5rZXkuaW5kZXhdO1xuICAgIGNhc2UgJ3F1ZXJ5JzpcbiAgICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChjb25maWcua2V5LnF1ZXJ5KVtjb25maWcua2V5LmluZGV4XTtcbiAgICBjYXNlICdpbmRleCc6XG4gICAgICByZXR1cm4gcGFyZW50LmNoaWxkTm9kZXNbY29uZmlnLmtleV07XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcXFwiZmluZENoaWxkXFxcIiBtb2RlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZENoaWxkcmVuKHBhcmVudCwgY29uZmlnKSB7XG4gIGxldCBodG1sQ29sbGVjdGlvbjtcbiAgc3dpdGNoIChjb25maWcubW9kZSkge1xuICAgIGNhc2UgJ2NsYXNzJzpcbiAgICAgIGh0bWxDb2xsZWN0aW9uID0gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY29uZmlnLmtleS5jbGFzcyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0YWcnOlxuICAgICAgaHRtbENvbGxlY3Rpb24gPSBwYXJlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoY29uZmlnLmtleS50YWcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncXVlcnknOlxuICAgICAgaHRtbENvbGxlY3Rpb24gPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChjb25maWcua2V5LnF1ZXJ5KTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXFxcImZpbmRDaGlsZFxcXCIgbW9kZScpO1xuICB9XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChodG1sQ29sbGVjdGlvbik7XG59XG5cbmZ1bmN0aW9uIGlzQ29tbWFuZEluZGV4KHZhbHVlKSB7XG4gIHJldHVybiBpc051bWJlcih2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59XG5cbmZ1bmN0aW9uIG1vZGlmeUVsZW1lbnQobm9kZSwgcGF0Y2gpIHtcbiAgX21vZGlmeUVsZW1lbnQobm9kZSwgcGF0Y2gudmFsdWUsIHBhdGNoLmNvbW1hbmRzKTtcbn1cblxuZnVuY3Rpb24gX21vZGlmeUVsZW1lbnQobm9kZSwgdHJlZSwgY29tbWFuZHMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gdHJlZVtpXS5pbmRleDtcbiAgICBjb25zdCBjb250aW51YXRpb24gPSB0cmVlW2ldLnZhbHVlO1xuXG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgJ2lkJzpcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IGNvbW1hbmRzW2NvbnRpbnVhdGlvbl07XG4gICAgICAgIHN3aXRjaCAoY29tbWFuZFswXSkge1xuICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAgIGNhc2UgJ3NldEF0S2V5JzpcbiAgICAgICAgICAgIG5vZGUuaWQgPSBjb21tYW5kWzFdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3RhZyc6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgIGZvciAobGV0IHN0eWxlSW5kZXggPSAwOyBzdHlsZUluZGV4IDwgY29udGludWF0aW9uLmxlbmd0aDsgc3R5bGVJbmRleCsrKSB7XG4gICAgICAgICAgY29uc3Qgc3R5bGUgPSBjb250aW51YXRpb25bc3R5bGVJbmRleF0uaW5kZXg7XG4gICAgICAgICAgY29uc3QgY29tbWFuZCA9IGNvbW1hbmRzW2NvbnRpbnVhdGlvbltzdHlsZUluZGV4XS52YWx1ZV07XG4gICAgICAgICAgc3dpdGNoIChjb21tYW5kWzBdKSB7XG4gICAgICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgICBub2RlLnN0eWxlLnJlbW92ZVByb3BlcnR5KHN0eWxlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgICAgIGNhc2UgJ3NldEF0S2V5JzpcbiAgICAgICAgICAgICAgbm9kZS5zdHlsZVtzdHlsZV0gPSBjb21tYW5kWzFdO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2F0dHJpYnMnOlxuICAgICAgICBmb3IgKGxldCBhdHRyaWJJbmRleCA9IDA7IGF0dHJpYkluZGV4IDwgY29udGludWF0aW9uLmxlbmd0aDsgYXR0cmliSW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IGF0dHJpYiA9IGNvbnRpbnVhdGlvblthdHRyaWJJbmRleF0uaW5kZXg7XG4gICAgICAgICAgY29uc3QgY29tbWFuZCA9IGNvbW1hbmRzW2NvbnRpbnVhdGlvblthdHRyaWJJbmRleF0udmFsdWVdO1xuICAgICAgICAgIHN3aXRjaCAoY29tbWFuZFswXSkge1xuICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgICAgbm9kZS5hdHRyaWJ1dGVzLnJlbW92ZU5hbWVkSXRlbShhdHRyaWIpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAgICAgY2FzZSAnc2V0QXRLZXknOlxuICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWIsIGNvbW1hbmRbMV0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2NsYXNzZXMnOlxuICAgICAgICBpZiAoaXNDb21tYW5kSW5kZXgoY29udGludWF0aW9uKSkge1xuICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kc1swXTtcbiAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmRbMF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICAgIGZvciAobGV0IF9jbGFzcyBpbiBjb21tYW5kWzFdKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKF9jbGFzcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzZXRBdEtleSc6XG4gICAgICAgICAgICAgIGZvciAobGV0IF9jbGFzcyBpbiBjb21tYW5kWzFdKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKF9jbGFzcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAobGV0IGNsYXNzSW5kZXggPSAwOyBjbGFzc0luZGV4IDwgY29udGludWF0aW9uLmxlbmd0aDsgY2xhc3NJbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBfY2xhc3MgPSBjb250aW51YXRpb25bY2xhc3NJbmRleF0uaW5kZXg7XG4gICAgICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZHNbY29udGludWF0aW9uW2NsYXNzSW5kZXhdLnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAoY29tbWFuZFswXSkge1xuICAgICAgICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShfY2xhc3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdzZXRBdEtleSc6XG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKF9jbGFzcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjaGlsZHJlbic6XG4gICAgICAgIGlmIChpc0NvbW1hbmRJbmRleChjb250aW51YXRpb24pKSB7XG4gICAgICAgICAgY29uc3QgY29tbWFuZCA9IGNvbW1hbmRzW2NvbnRpbnVhdGlvbl1cbiAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmRbMF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ3JlbW92ZSc6XG4gICAgICAgICAgICAgIHJlbW92ZUNoaWxkcmVuKG5vZGUpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlcGxhY2UnOiAgICAgLy8gP1xuICAgICAgICAgICAgICBpZiAoaXNTdHJpbmcoY29tbWFuZFsxXSkpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lclRleHQgPSBjb21tYW5kWzFdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBub2RlLmlubmVyVGV4dCA9IGNvbW1hbmRbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNoaWxkcmVuKG5vZGUpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnRzKG5vZGUsIGNvbW1hbmRbMV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaW5zZXJ0QXRFbmQnOlxuICAgICAgICAgICAgICBjcmVhdGVBbmRBdHRhY2hFbGVtZW50KG5vZGUsIGNvbW1hbmRbMV0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChsZXQgY2hpbGRJbmRleCA9IDA7IGNoaWxkSW5kZXggPCBjb250aW51YXRpb24ubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY29udGludWF0aW9uW2NoaWxkSW5kZXhdLmluZGV4O1xuICAgICAgICAgICAgY29uc3QgY2hpbGRDb250aW51YXRpb24gPSBjb250aW51YXRpb25bY2hpbGRJbmRleF0udmFsdWU7XG4gICAgICAgICAgICBpZiAoaXNDb21tYW5kSW5kZXgoY2hpbGRDb250aW51YXRpb24pKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBjb21tYW5kc1tjaGlsZENvbnRpbnVhdGlvbl1cbiAgICAgICAgICAgICAgc3dpdGNoIChjb21tYW5kWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncmVtb3ZlJzpcbiAgICAgICAgICAgICAgICAgIHJlbW92ZUNoaWxkKG5vZGUsIGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAgICAgICAgICAgY3JlYXRlQW5kU3Vic3RpdHV0ZUVsZW1lbnQobm9kZSwgY29tbWFuZFsxXSwgY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaW5zZXJ0QXRFbmQnOlxuICAgICAgICAgICAgICAgICAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudChub2RlLCBjb21tYW5kWzFdKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfbW9kaWZ5RWxlbWVudChub2RlLmNoaWxkTm9kZXNbY2hpbGRdLCBjaGlsZENvbnRpbnVhdGlvbiwgY29tbWFuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQobm9kZSwgY2hpbGRJbmRleCkge1xuICByZW1vdmVOb2RlKGZpbmRDaGlsZChub2RlLCB7IG1vZGU6ICdpbmRleCcsIGtleTogY2hpbGRJbmRleCB9KSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkcmVuKG5vZGUpIHtcbiAgY29uc3QgY2hpbGRDb3VudCA9IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSBjaGlsZENvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUuY2hpbGROb2Rlc1tpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XG4gIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudCxcbiAgbW9kaWZ5RWxlbWVudFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=