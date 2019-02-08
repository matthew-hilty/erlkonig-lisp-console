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
  var normalize;
  var property;

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
  var key = shiftKey ? 'withShift' : 'withoutShift';
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
  var command = action.name;
  var viewport = config.viewport;
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
  var handleEvent = function (getAction) {
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
  var root = document.getElementById(config.nodeId);
  var initialModel = Object(_models_getInitialModel__WEBPACK_IMPORTED_MODULE_1__["getInitialModel"])();
  var promptLabel = config.promptLabel;
  var labels = { promptLabel: promptLabel };
  var viewModel = Object(_view_recreateConsole__WEBPACK_IMPORTED_MODULE_2__["ERLKING"])(labels, initialModel);

  Object(_view_initializeView__WEBPACK_IMPORTED_MODULE_4__["initializeView"])(root, viewModel);

  var rootChild = root.childNodes[0];

  var controlConfig = {
    getCandidates: config.getCandidates,
    promptLabel: promptLabel,
    transform: config.transform,
    viewport: initialModel
  };

  var cssScrollbarDetected = Object(_detectCssScrollbar__WEBPACK_IMPORTED_MODULE_0__["detectCssScrollbar"])();

  setScrollbarVisibility(cssScrollbarDetected);

  var _scroll = Object(_view_scroll__WEBPACK_IMPORTED_MODULE_6__["scroll"])(cssScrollbarDetected);

  Object(_control_initializeControl__WEBPACK_IMPORTED_MODULE_3__["initializeControl"])(
    _subscribe__WEBPACK_IMPORTED_MODULE_7__["subscribe"],
    Object(_render__WEBPACK_IMPORTED_MODULE_5__["render"])(viewModel, rootChild, controlConfig, _scroll),
    controlConfig);
}

function setScrollbarVisibility(cssScrollbarDetected) {
  if (!cssScrollbarDetected) {
    var viewport = document.getElementsByClassName('erl-viewport')[0]
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
  var preCursor = terminal.prompt.preCursor;
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
    return Object(_types_createTerminal__WEBPACK_IMPORTED_MODULE_0__["createTerminal"])(
      terminal.entries,
      terminal.prompts,
      Object(_types_createPrompt__WEBPACK_IMPORTED_MODULE_1__["createPrompt"])(
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
    return Object(_types_createTerminal__WEBPACK_IMPORTED_MODULE_0__["createTerminal"])(
      terminal.entries,
      terminal.prompts,
      Object(_types_createPrompt__WEBPACK_IMPORTED_MODULE_1__["createPrompt"])(
        preCursor + postCursor[0],
        postCursor.slice(1)));
  }
}

function moveCursorToEnd(terminal) {
  var prompt = terminal.prompt;
  return Object(_types_createTerminal__WEBPACK_IMPORTED_MODULE_0__["createTerminal"])(
    terminal.entries,
    terminal.prompts,
    Object(_types_createPrompt__WEBPACK_IMPORTED_MODULE_1__["createPrompt"])(prompt.preCursor + prompt.postCursor, ''));
}

function moveCursorToStart(terminal) {
  var prompt = terminal.prompt;
  return Object(_types_createTerminal__WEBPACK_IMPORTED_MODULE_0__["createTerminal"])(
    terminal.entries,
    terminal.prompts,
    Object(_types_createPrompt__WEBPACK_IMPORTED_MODULE_1__["createPrompt"])('', prompt.preCursor + prompt.postCursor));
}

function normalizePrompt(prompt) {
  return Object(_types_createPrompt__WEBPACK_IMPORTED_MODULE_1__["createPrompt"])(extractCommand(prompt), '');
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
  var frame = viewport.frame;
  var newTerminal =
    _terminal__WEBPACK_IMPORTED_MODULE_4__["Terminal"].completeWord(refreshTerminal(viewport), getCandidates);
  var diff = newTerminal.entries.length - viewport.terminal.entries.length;
  return Object(_types_createViewport__WEBPACK_IMPORTED_MODULE_0__["createViewport"])(
    newTerminal,
    Object(_types_createFrame__WEBPACK_IMPORTED_MODULE_1__["createFrame"])(
      frame.offset + diff,
      frame.start,
      0));
}

function clear(viewport) {
  var terminal = viewport.terminal;
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
  var terminal = viewport.terminal;
  return Object(_types_createTerminal__WEBPACK_IMPORTED_MODULE_2__["createTerminal"])(terminal.entries, terminal.prompts, viewport.prompt);
}

function rewind(viewport) {
  var terminal = viewport.terminal;
  return Object(_types_createViewport__WEBPACK_IMPORTED_MODULE_0__["createViewport"])(
    terminal,
    _frame__WEBPACK_IMPORTED_MODULE_3__["Frame"].rewind(viewport.frame, terminal));
}

function submit(viewport, transform) {
  var frame = viewport.frame;
  var newTerminal = _terminal__WEBPACK_IMPORTED_MODULE_4__["Terminal"].submit(refreshTerminal(viewport), transform);
  var diff = newTerminal.entries.length - viewport.terminal.entries.length;
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
  var viewModel = _viewModel;
  return function (model) {
    var labels = { promptLabel: controlConfig.promptLabel };
    var newViewModel = Object(_view_recreateConsole__WEBPACK_IMPORTED_MODULE_1__["ERLKING"])(labels, model);
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

var emptyString = '';
var newline = '\n';
var space = ' ';
var underscore = '_';

var ERL_CURSOR = Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_0__["SPAN"])(
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




var ERL_HEADER = Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_1__["SECTION"])(
    {
      id: 'erl-header',
      classes: { 'head': true }
    },
    Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_1__["H1"])(null, 'Erlkönig Lisp Console\n'),
    Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_1__["H4"])(null, 'A terminal emulator and lisp interpreter\n'));

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

var X_SCROLLBAR = Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_1__["DIV"])(
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

var Y_SCROLLBAR = Object(_ribosome_elements__WEBPACK_IMPORTED_MODULE_1__["DIV"])(
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
  return Object(_components__WEBPACK_IMPORTED_MODULE_0__["ERL_ENTRY"])(entry);
}

var _erlkonigConfig = {
  id: 'erlkonig',
  classes: { 'erlkonig': true, 'container': true }
};
var _consoleConfig = { id: 'erl-console' };
var _terminalConfig = { classes: { 'terminal': true }};
var _erlViewportConfig = { classes: { 'erl-viewport': true }};




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




var _keyTokens =  _lisp_keyTokens__WEBPACK_IMPORTED_MODULE_2__["keyTokens"].map(function (keyToken) {
  return ':' + keyToken;
});

var promptLabel = 'Lisp> ';

function getCandidates(prefix) {
  var envKeys = Object(_lisp_interpret__WEBPACK_IMPORTED_MODULE_1__["interpret"])("(keys (-get-current-env-))")[0]
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



var _process = function(transform) {
  return function(envs) {
    return function(sourceCode) {
      var results = [];
      var addResult = function(result) {
        return results.push(result);
      };
      var value = Object(_evaluate__WEBPACK_IMPORTED_MODULE_1__["evaluate"])(envs, addResult)(transform(sourceCode));
      var result = (value === _commentSignal__WEBPACK_IMPORTED_MODULE_0__["commentSignal"])
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
var commentSignal = {};




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















var  __slice  = [].slice;
var __hasProp = {}.hasOwnProperty;

var add = function() {
  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(nbrs.reduce(function(x, nbr) {
    return x += nbr;
  }));
};

var contains = function(index, key) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlBoolean"])(key in index);
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
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlIndex"])(copy);
};

var divide = function() {
  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(nbrs.reduce(function(x, nbr) {
    return x /= nbr;
  }));
};

var exponentiate = function() {
  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(nbrs.reduce(function(x, nbr) {
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
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlBoolean"])(nbrs[0] >= nbrs[1]);
};

var greaterThan = function() {
  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlBoolean"])(nbrs[0] > nbrs[1]);
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
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlIndex"])(_index);
};

var keys = function(index) {
  var _keys = [];
  for (var key in index) {
    if (!__hasProp.call(index, key)) continue;
    var value = index[key];
    var jsNbr = parseFloat(key, 10);
    var _key = Object(_js_utilities__WEBPACK_IMPORTED_MODULE_2__["isJsNaN"])(jsNbr)
        ? (key[0] === ':' ? _type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlIdentifier"] : _type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlString"])(key)
        : Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(jsNbr);
    _keys.push(_key);
  }
  return Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(_keys);
};

var lengthString = function(jsVal) {
  if (!Object(_js_utilities__WEBPACK_IMPORTED_MODULE_2__["isJsString"])(jsVal)) {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_0__["erlNil"];
  }
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(jsVal.length - 2);
};

var lessThan = function() {
  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlBoolean"])(nbrs[0] < nbrs[1]);
};

var lessThanOrEqual = function() {
  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlBoolean"])(nbrs[0] <= nbrs[1]);
};

var lift = function(fnOnJsValues) {
  return function(erlValueList) {
    return fnOnJsValues.apply(null, (Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["toArray"])(erlValueList)).map(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["extractJsValue"]));
  };
};

var max = function() {
  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(Math.max.apply(Math, nbrs));
};

var min = function() {
  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(Math.min.apply(Math, nbrs));
};

var mod = function(nbr0, nbr1) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(nbr0 % nbr1);
};

var multiply = function() {
  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(nbrs.reduce(function(x, nbr) {
    return x *= nbr;
  }));
};

var negate = function(nbr) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(-1 * nbr);
};

var parseNumber = function(jsVal) {
  if (Object(_js_utilities__WEBPACK_IMPORTED_MODULE_2__["isJsNumber"])(jsVal)) {
    return jsVal;
  }
  if (!Object(_js_utilities__WEBPACK_IMPORTED_MODULE_2__["isJsString"])(jsVal)) {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_0__["erlNil"];
  }
  var jsNbr = parseFloat(stripQuotes(jsVal), 10);
  if (Object(_js_utilities__WEBPACK_IMPORTED_MODULE_2__["isJsNaN"])(jsNbr)) {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_0__["erlNil"];
  } else {
    return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(jsNbr);
  }
};

var setCoreFnsOnJsValues_bang_ = function(env, fns) {
  var _results = [];
  for (var fnName in fns) {
    if (!__hasProp.call(fns, fnName)) continue;
    var fn = fns[fnName];
    env[fnName] = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlCorePureFunction"])(lift(fn));
    _results.push(env[fnName]);
  }
  return _results;
};

var subtract = function() {
  var nbrs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlNumber"])(nbrs.reduce(function(x, nbr) {
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
  return Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(values);
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













































var __slice   = [].slice;
var __hasProp = {}.hasOwnProperty;

var append = function(erlArgs) {
  var erlArgsArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toArray"])(erlArgs);
  var erlList = erlArgsArray[0];
  var erlValues = 2 <= erlArgsArray.length ? __slice.call(erlArgsArray, 1) : [];
  return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["concat"])(erlList, Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["fromArray"])(erlValues));
};

var _areEqual = function(erlArgs) {
  var partialArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toPartialArray"])(2, erlArgs);
  var erlValue0 = partialArray[0];
  var erlValue1 = partialArray[1];
  var __areEqual = function(erlValue0, erlValue1) {
    if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlList"])(erlValue0) && Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlList"])(erlValue1)) {
      return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["areEqual"])(erlValue0, erlValue1, __areEqual);
    } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlIndex"])(erlValue0) && Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlIndex"])(erlValue1)) {
      var jsIndex0 = erlValue0.jsValue;
      var jsIndex1 = erlValue1.jsValue;
      return (__areEqual(keys(jsIndex0), keys(jsIndex1)))
        && (__areEqual(vals(jsIndex0), vals(jsIndex1)));
    } else {
      return erlValue0.jsValue === erlValue1.jsValue;
    }
  };
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlBoolean"])(__areEqual(erlValue0, erlValue1));
};

var assoc = function(erlArgs) {
  var args;
  var jsIndex = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs));
  args = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["cdr"])(erlArgs);
  var copy = {};
  for (var key in jsIndex) {
    if (!__hasProp.call(jsIndex, key)) {
      continue;
    }
    var value = jsIndex[key];
    copy[key] = value;
  }
  while (!Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(args)) {
    var k = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(args);
    var v = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["next"])(args);
    args = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["recurse"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["recurse"])(args));
    copy[Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(k)] = v;
  }
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlIndex"])(copy);
};

var atom = function(erlArgs) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlAtom"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs));
};

var _car = function(erlArgs) {
  var arg = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs);
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlList"])(arg)) {
    return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(arg);
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlNil"];
  }
};

var _cdr = function(erlArgs) {
  var arg = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs);
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlList"])(arg)) {
    return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["cdr"])(arg);
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlNil"];
  }
};

var _concat = function(erlArgs) {
  var erlLists = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toArray"])(erlArgs);
  return _linked_list__WEBPACK_IMPORTED_MODULE_0__["concat"].apply(null, erlLists);
};

var cons = function(erlArgs) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlList"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs), Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["next"])(erlArgs));
};

var count = function(erlArgs) {
  var erlList = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs);
  if (!Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlList"])(erlList)) {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlNil"];
  }
  var _reduce = function(sum, value) {
    return sum + 1;
  };
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlNumber"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["reduce"])(0, _reduce, Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs)));
};

var createPredicate = function(pred) {
  return function(jsList) {
    var erlValue = jsList.value;
    return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlBoolean"])(pred(erlValue));
  };
};

var deref = function(erlArgs) {
  return (Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs)).erlValue;
};

var _drop = function(erlArgs) {
  var partialArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toPartialArray"])(2, erlArgs);
  var erlNumber = partialArray[0];
  var erlList = partialArray[1];
  return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["drop"])(Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(erlNumber), erlList);
};

var first = function(erlArgs) {
  return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs));
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
  return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlIgnore"];
};

var ignoreIfTrue = function(erlArgs) {
  var partialArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toPartialArray"])(2, erlArgs);
  var erlBool = partialArray[0];
  var erlValue = partialArray[1];
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(erlBool)) {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlIgnore"];
  } else {
    return erlValue;
  }
};

var ignoreUnlessTrue = function(erlArgs) {
  var partialArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toPartialArray"])(2, erlArgs);
  var erlBool = partialArray[0];
  var erlValue = partialArray[1];
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(erlBool)) {
    return erlValue;
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlIgnore"];
  }
};

var _interpret = function(erlArgs) {
  return Object(_interpret__WEBPACK_IMPORTED_MODULE_3__["interpret"])(stripQuotes(Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs))));
};

var _isEmpty = function(erlArgs) {
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

var isFunction = function(jsList) {
  var erlValue = jsList.value;
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlBoolean"])(Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlCorePureFunction"])(erlValue)
    || Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlUserPureFunction"])(erlValue));
};

var isNode = function() {
  return hasProcess() && !hasProcessWebpackShim();
}

var _last = function(erlArgs) {
  var arg = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs);
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlList"])(arg)) {
    return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["last"])(arg);
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlNil"];
  }
};

var list = function(erlArgs) {
  return erlArgs;
};

var meta = function(erlArgs) {
  var erlMeta = (Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs)).meta;
  if (erlMeta != null) {
    return erlMeta;
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlNil"];
  }
};

var _not = function(erlArgs) {
  var erlVal = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs);
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlNil"])(erlVal) || Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlFalse"])(erlVal)) {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlTrue"];
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlFalse"];
  }
};

var nth = function(erlArgs) {
  var partialArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toPartialArray"])(2, erlArgs);
  var erlNumber = partialArray[0];
  var erlList = partialArray[1];
  var target = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(erlNumber);
  if (target >= 0) {
    for (var i = 0; i < target; i++) {
      erlList = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["cdr"])(erlList);
    }
  } else {
    for (var i = 0; i > target; i--) {
      erlList = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["cdr"])(erlList);
    }
  }
  return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlList);
};

var prepend = function(erlArgs) {
  var erlArgsArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toArray"])(erlArgs);
  var erlList = erlArgsArray[0];
  var erlValues = 2 <= erlArgsArray.length ? __slice.call(erlArgsArray, 1) : [];
  var _reduce = function(list, val) {
    return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlList"])(val, list);
  };
  return erlValues.reduce(_reduce, erlList);
};

var _prStr = function(erlArgs, printReadably) {
  return ((Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toArray"])(erlArgs)).map(function(erlArg) {
    return Object(_serialize__WEBPACK_IMPORTED_MODULE_4__["serialize"])(erlArg, printReadably);
  })).join('');
};

var prettyString = function(erlArgs) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlString"])(Object(_js_utilities__WEBPACK_IMPORTED_MODULE_1__["circumpendQuotes"])(_prStr(erlArgs, true)));
};

var read = function(jsList) {
  if (isNode()) {
    var _read = function(_jsList) {
      var jsFileName = stripQuotes(Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(_jsList)));
      //return require('fs').readFileSync(jsFileName).toString();
      return null;
    };
    return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlString"])(_read(jsList));
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlNil"];
  }
};

var reset = function(erlArgs) {
  var partialArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toPartialArray"])(2, erlArgs);
  var atom = partialArray[0];
  var value = partialArray[1];
  atom.erlValue = value;
  return atom;
};

var rest = function(erlArgs) {
  var arg = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs);
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlList"])(arg)) {
    return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["cdr"])(arg);
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlNil"];
  }
};

var _reverse = function(erlArgs) {
  var arg = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs);
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlList"])(arg)) {
    return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["reverse"])(arg);
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlNil"];
  }
};

var set = function(erlArgs) {
  var partialArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toPartialArray"])(3, erlArgs);
  var index = partialArray[0];
  var key = partialArray[1];
  var val = partialArray[2];
  (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(index))[Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(key)] = val;
  return index;
};

var setCoreFnsOnErlValues = function(env, fns) {
  var _results = [];
  for (var fnName in fns) {
    if (!__hasProp.call(fns, fnName)) continue;
    var fn = fns[fnName];
    _results.push(env[fnName] = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlCorePureFunction"])(fn));
  }
  return _results;
};

var slurp = function(erlArgs) {
  if (isNode()) {
    var jsFileName = stripQuotes(Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs)));
    //var _fs_ = require('fs');
    //return createErlString(circumpendQuotes(_fs_.readFileSync(jsFileName).toString()));
    return null;
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlNil"];
  }
};

var string = function(erlArgs) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlString"])(Object(_js_utilities__WEBPACK_IMPORTED_MODULE_1__["circumpendQuotes"])(_prStr(erlArgs, false)));
};

var stripQuotes = function(jsString) {
  return jsString.slice(1, -1);
};

var symbol = function(erlArgs) {
  var erlValue = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs);
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlString"])(erlValue)) {
    var jsStr = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(erlValue);
    return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlSymbol"])(jsStr.slice(1, -1));
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_2__["erlNil"];
  }
};

var _take = function(erlArgs) {
  var partialArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toPartialArray"])(2, erlArgs);
  var erlNumber = partialArray[0];
  var erlList = partialArray[1];
  return Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["take"])(Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["extractJsValue"])(erlNumber), erlList);
};

var typeOf = function(erlArgs) {
  var erlValue = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs);
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlString"])(Object(_js_utilities__WEBPACK_IMPORTED_MODULE_1__["circumpendQuotes"])(erlValue.type));
};

var _throw = function(erlArgs) {
  throw Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs);
};

var timeMs = function() {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlNumber"])(new Date().getTime());
};

var withMeta = function(erlArgs) {
  var partialArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["toPartialArray"])(2, erlArgs);
  var erlVal = partialArray[0];
  var erlMeta = partialArray[1];
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["isErlAtom"])(erlVal)) {
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
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlString"])(Object(_serialize__WEBPACK_IMPORTED_MODULE_4__["serialize"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs)));
};

var predicates = [
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






let __hasProp = {}.hasOwnProperty;

let getEnvironment = function(config) {
  let display = config.display;
  let environment = config.environment;
  setCoreEffectfulFnsOnErlValues(display)(environment, displayEffectsOnErlValues);
  return environment;
};

let hasProcess = function() {
  return typeof process !== 'undefined';
}

let hasProcessWebpackShim = function() {
  return(process.title === 'browser' && process.browser);
}

let isNode = function() {
  return hasProcess() && !hasProcessWebpackShim();
}

let _prStr = function(erlArgs, shouldBeReadable) {
  return ((Object(_linked_list__WEBPACK_IMPORTED_MODULE_2__["toArray"])(erlArgs)).map(function(erlArg) {
    return Object(_serialize__WEBPACK_IMPORTED_MODULE_1__["serialize"])(erlArg, shouldBeReadable);
  })).join('');
};

let _quit_ = function() {
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

let setCoreEffectfulFnsOnErlValues = function(represent) {
  return function(env, fns) {
    let _results = [];
    for (let fnName in fns) {
      if (!__hasProp.call(fns, fnName)) continue;
      let fn = fns[fnName];
      env[fnName] = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlCoreEffectfulFunction"])(function(erlArgs) {
        return represent(fn(erlArgs));
      });
      _results.push(env[fnName]);
    }
    return _results;
  };
};

let displayEffectsOnErlValues = {
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













var __hasProp = {}.hasOwnProperty;

var getEnvironment = function(config) {
  var environment = config.environment;
  var parse = function(erlArgs) {
    return Object(_tokenizeAndParse__WEBPACK_IMPORTED_MODULE_4__["tokenizeAndParse"])(stripQuotes(Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["extractJsValue"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_0__["car"])(erlArgs))));
  };
  var functionsOnErlValues = { parse: parse };
  setCoreFnsOnErlValues(environment, functionsOnErlValues);
  return environment;
};

var _process_ = Object(_process__WEBPACK_IMPORTED_MODULE_3__["_process"])(function(erlVal) {
  return erlVal;
});

var setCoreFnsOnErlValues = function(env, fns) {
  var _results = [];
  for (var fnName in fns) {
    if (!__hasProp.call(fns, fnName)) {
      continue;
    }
    var fn = fns[fnName];
    _results.push(env[fnName] = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["createErlCorePureFunction"])(fn));
  }
  return _results;
};

var stripQuotes = function(jsString) {
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
  var partialArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_3__["toPartialArray"])(2, erlArgs);
  var erlFileName = partialArray[0];
  var localEnv = partialArray[1];
  var jsFileName = stripQuotes(Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["extractJsValue"])(erlFileName));
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
    return _type_utilities__WEBPACK_IMPORTED_MODULE_0__["erlNil"];
  }
};

var loadWithBareEnv = function(erlArgs) {
  if (isNode()) {
    var temp = get_jsFileName_and_localEnv(erlArgs);
    var jsFileName = temp[0];
    var localEnv = temp[1];
    return _processFileAndEnv(
      readFile(jsFileName),
      [Object(_index_utilities__WEBPACK_IMPORTED_MODULE_1__["fromErlIndex"])(localEnv)]);
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_0__["erlNil"];
  }
};

var loadWithEnv = function(erlArgs) {
  if (isNode()) {
    var temp = get_jsFileName_and_localEnv(erlArgs);
    var jsFileName = temp[0];
    var localEnv = temp[1];
    return _processFileAndEnv(
      readFile(jsFileName),
      [Object(_index_utilities__WEBPACK_IMPORTED_MODULE_1__["fromErlIndex"])(localEnv), environment]);
  } else {
    return _type_utilities__WEBPACK_IMPORTED_MODULE_0__["erlNil"];
  }
};

var _process_ = function(jsString) {
  return Object(_process__WEBPACK_IMPORTED_MODULE_2__["_process"])([environment])(jsString);
};

var _processFileAndEnv = function(file, envStack) {
  return Object(_process__WEBPACK_IMPORTED_MODULE_2__["_process"])(envStack)(file);
};

var _read = function(erlArgs) {
  var jsFileName = get_jsFileName_and_localEnv(erlArgs)[0];
  return readFile(jsFileName);
};

var readFile = function(jsFileName) {
  //return require('fs').readFileSync(jsFileName).toString();
  return null;
};

var setCoreFnsOnErlValues = function(env, fns) {
  var _results = [];
  for (var fnName in fns) {
    if (!__hasProp.call(fns, fnName)) continue;
    var fn = fns[fnName];
    _results.push(env[fnName] = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlCorePureFunction"])(fn));
  }
  return _results;
};

var stripQuotes = function(jsString) {
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































































var __hasProp = {}.hasOwnProperty;

var createFn = function(erlList, envs) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlUserPureFunction"])({
    localEnvs: envs.slice(0),
    erlExpression: Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["next"])(erlList),
    erlParameters: Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(erlList)
  });
};

var createLocalEnv = function(erlParams, erlArgs) {
  var env = {};
  while (!Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(erlParams)) {
    var jsParam = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(erlParams));
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

var createMacro = function(erlList, envs) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlMacro"])({
    localEnvs: envs.slice(0),
    erlExpression: Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["next"])(erlList),
    erlParameters: Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(erlList)
  });
};

var defineNewValue = function(erlList, envs, addResult) {
  var jsKey = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(erlList));
  var erlValue = _evaluate(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["next"])(erlList), envs, addResult);
  return Object(_env_utilities__WEBPACK_IMPORTED_MODULE_0__["setMainEnv"])(envs, jsKey, erlValue);
};

var evalQuasiquotedExpr = function(expr, envs, addResult) {
  if (!Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlList"])(expr)) {
    return expr;
  }
  var manageItem = function(memo, item) {
    if (isUnquotedExpr(item)) {
        return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlList"])(_evaluate(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["next"])(item), envs, addResult), memo);
    } else if (isSpliceUnquotedExpr(item)) {
        var _manageItem = function(_memo, _item) {
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

var _evaluate = function(erlExpr, envs, addResult) {
  while (true) {
    if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlSymbol"])(erlExpr)) {
      var jsString = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(erlExpr);
      if (Object(_keyTokens__WEBPACK_IMPORTED_MODULE_2__["isKeyword"])(jsString)) {
        return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlKeyword"])(jsString);
      } else {
        return Object(_env_utilities__WEBPACK_IMPORTED_MODULE_0__["lookup"])(envs, jsString);
      }
    } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlIndex"])(erlExpr)) {
      var index = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(erlExpr);
      var newIndex = {};
      for (var key in index) {
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
      var erlExprArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["toPartialArray"])(2, erlExpr);
      var head = erlExprArray[0];
      var arg1 = erlExprArray[1];
      var remainingArgs = erlExprArray[2];
      var tailList = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["cdr"])(erlExpr);
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
          var otherwise = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["next"])(remainingArgs);
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
            var ex = _error;
            if (Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(remainingArgs)) {
              throw ex;
            } else {
              var remainingArgsArray = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["toPartialArray"])(3, Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(remainingArgs));
              var _catch = remainingArgsArray[0];
              var _ex = remainingArgsArray[1];
              var catchExpr = remainingArgsArray[2];
              if ((Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(_catch)) !== "catch*") {
                throw ex;
              }
              if (ex instanceof Error) {
                ex = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlString"])(Object(_js_utilities__WEBPACK_IMPORTED_MODULE_3__["circumpendQuotes"])(ex.message));
              }
              var newEnv = {};
              newEnv[Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(_ex)] = ex;
              return _evaluate(catchExpr, Object(_env_utilities__WEBPACK_IMPORTED_MODULE_0__["addEnv"])(envs, newEnv), addResult);
            }
          }
          break;
        default:
          var erlSymbol = head;
          erlExpr = tailList;
          var erlInvokable = _evaluate(erlSymbol, envs, addResult);
          if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlKeyword"])(erlInvokable)) {
            erlExpr = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlList"])(erlInvokable, tailList);
          } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlMacro"])(erlInvokable)) {
            erlExpr = _expandMacro(head, tailList, envs, addResult);
          } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlCorePureFunction"])(erlInvokable)) {
            var fn = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(erlInvokable);
            var erlArgs = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["map"])(evaluate(envs, addResult), erlExpr);
            return fn(erlArgs);
          } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlCoreEffectfulFunction"])(erlInvokable)) {
            var fn = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(erlInvokable);
            var erlArgs = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["map"])(evaluate(envs, addResult), erlExpr);
            addResult(fn(erlArgs));
            return _type_utilities__WEBPACK_IMPORTED_MODULE_5__["erlNil"];
          } else if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlUserPureFunction"])(erlInvokable)) {
            var jsValue = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(erlInvokable);
            var localEnvs = jsValue.localEnvs;
            var erlExpression = jsValue.erlExpression;
            var erlParameters = jsValue.erlParameters;
            var erlArgs = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["map"])(evaluate(envs, addResult), erlExpr);
            erlExpr = erlExpression;
            var newEnv = createLocalEnv(erlParameters, erlArgs);
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

var evaluate = function(envs, addResult) {
  return function(erlExpr) {
    if (erlExpr === _commentSignal__WEBPACK_IMPORTED_MODULE_4__["commentSignal"]) {
      return _commentSignal__WEBPACK_IMPORTED_MODULE_4__["commentSignal"];
    }
    return _evaluate(erlExpr, envs, addResult);
  };
};

var _expandMacro = function(erlMacroSymbol, erlArgs, envs, addResult) {
  var erlMacro = _evaluate(erlMacroSymbol, envs, addResult);
  var jsValue = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(erlMacro);
  var localEnvs = jsValue.localEnvs;
  var erlExpression = jsValue.erlExpression;
  var erlParameters = jsValue.erlParameters;
  var newEnv = createLocalEnv(erlParameters, erlArgs);
  var newEnvStack = Object(_env_utilities__WEBPACK_IMPORTED_MODULE_0__["addEnv"])(localEnvs, newEnv);
  return _evaluate(erlExpression, newEnvStack, addResult);
};

var ignorable = function(erlVal, envs, addResult) {
  if (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlIgnore"])(erlVal)) {
    return true;
  }
  if (!Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlList"])(erlVal)) {
    return false;
  }
  var symbol = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(erlVal);
  if (!Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlSymbol"])(symbol)) {
    return false;
  }
  var jsString = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(symbol);
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

var reduceLet = function(envs, list, addResult) {
  var newEnv = {};
  var _envs = Object(_env_utilities__WEBPACK_IMPORTED_MODULE_0__["addEnv"])(envs, newEnv);
  while (!Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(list)) {
    var jsKey = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(list.value);
    list = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["recurse"])(list);
    var envValue = _evaluate(list.value, _envs, addResult);
    newEnv[jsKey] = envValue;
    list = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["recurse"])(list);
  }
  return newEnv;
};

var reduceLetrec = function(envs, list, addResult) {
  var newEnv = {};
  var _envs = Object(_env_utilities__WEBPACK_IMPORTED_MODULE_0__["addEnv"])(envs, newEnv);
  while (!Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(list)) {
    var jsKey = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(list.value);
    list = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["recurse"])(list);
    var _erlExpr = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(
      [  Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlSymbol"])("fix*"),
         Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["fromArray"])([Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlSymbol"])("fn*"),
         Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["fromArray"])([jsKey]),
         list.value])
      ]);
    var envValue = _evaluate(_erlExpr, _envs, addResult);
    newEnv[jsKey] = envValue;
    list = Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["recurse"])(list);
  }
  return newEnv;
};

var isSpliceUnquote = function(erlValue) {
  return (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(erlValue)) === _keyTokens__WEBPACK_IMPORTED_MODULE_2__["spliceUnquote"];
};

var isSpliceUnquotedExpr = function(erlValue) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlList"])(erlValue) && isSpliceUnquote(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(erlValue));
};

var undefineValue = function(erlList, envs) {
  var jsKey = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(erlList));
  return Object(_env_utilities__WEBPACK_IMPORTED_MODULE_0__["unsetMainEnv"])(envs, jsKey);
};

var isUnquote = function(erlValue) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(erlValue) === _keyTokens__WEBPACK_IMPORTED_MODULE_2__["unquote"];
};

var isUnquotedExpr = function(erlValue) {
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






var getLispEnvironment = function(config) {
  var display = config.display;
  var environment = {};
  config = {
    display: display,
    environment: environment
  };
  Object(_env0__WEBPACK_IMPORTED_MODULE_0__["getEnvironment"])(config);
  Object(_env1__WEBPACK_IMPORTED_MODULE_1__["getEnvironment"])(config);
  Object(_env2__WEBPACK_IMPORTED_MODULE_2__["getEnvironment"])(config);
  Object(_env3__WEBPACK_IMPORTED_MODULE_3__["getEnvironment"])(config);
  Object(_env4__WEBPACK_IMPORTED_MODULE_4__["getEnvironment"])(config);
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



var __slice   = [].slice;
var __hasProp = {}.hasOwnProperty;

var fromErlIndex = function(erlIndex) {
  var result = {};
  var jsValue = erlIndex.jsValue;
  for (var key in jsValue) {
    if (!__hasProp.call(jsValue, key)) continue;
    var value = jsValue[key];
    if (Object(_js_utilities__WEBPACK_IMPORTED_MODULE_1__["isJsString"])(key)) {
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









var __hasProp = {}.hasOwnProperty;

var _createErlString = function(jsString) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["createErlString"])(Object(_js_utilities__WEBPACK_IMPORTED_MODULE_0__["circumpendQuotes"])(jsString));
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
    return _serialize(
      flattenIfNecessary(
        Object(_process__WEBPACK_IMPORTED_MODULE_4__["_process"])(_tokenizeAndParse__WEBPACK_IMPORTED_MODULE_7__["tokenizeAndParse"])(envs)(jsString)));
  } catch (_error) {
    return error(_error);
  }
};

var interpret = function(jsString, userJsArray) {
  if (userJsArray != null) {
    var userEnv = {
      '*ARGV*': Object(_linked_list__WEBPACK_IMPORTED_MODULE_2__["fromArray"])(userJsArray.map(_createErlString))
    };
    return _interpret([userEnv, environment], jsString);
  } else {
    return _interpret([environment], jsString);
  }
};

var _serialize = function(results) {
  return results.map(function(result) {
    var _result = {};
    for (var key in result) {
      if (!__hasProp.call(result, key)) continue;
      var value = result[key];
      if (key === 'effect') {
        _result[key] = value;
      } else {
        _result[key] = Object(_serialize__WEBPACK_IMPORTED_MODULE_5__["serialize"])(value);
      }
    }
    return _result;
  });
};

var environment = Object(_getLispEnvironment__WEBPACK_IMPORTED_MODULE_3__["getLispEnvironment"])({
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


var erlListType = _types__WEBPACK_IMPORTED_MODULE_0__["erlTypes"][6];

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








































var  __indexOf = [].indexOf || function(item) {
  for (var i = 0, l = this.length; i < l; i++) {
    if (i in this && this[i] === item) return i;
  } return -1;
};

var atomize = function(token) {
  var createErlValue = (function() {
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

var isBoolean = function(token) {
  return token === _keyTokens__WEBPACK_IMPORTED_MODULE_0__["_false"] || token === _keyTokens__WEBPACK_IMPORTED_MODULE_0__["_true"];
};

var isFloat = function(token) {
  return /^(-|\+)?[0-9](_|\d)*\.(\d|(\d(_|\d)*\d))$/.test(token);
};

var isBinaryGlyph = function(token) {
  return __indexOf.call(_keyTokens__WEBPACK_IMPORTED_MODULE_0__["binaryGlyphTokens"], token) >= 0;
};

var isGlyph = function(token) {
  return __indexOf.call(_keyTokens__WEBPACK_IMPORTED_MODULE_0__["glyphTokens"], token) >= 0;
};

var isIgnore = function(token) {
  return token === _keyTokens__WEBPACK_IMPORTED_MODULE_0__["ignore"];
};

var isIndexStart = function(token) {
  return token === _keyTokens__WEBPACK_IMPORTED_MODULE_0__["indexStart"];
};

var isInteger = function(token) {
  return /^(0(?!\.)|((-|\+)?[1-9](_|\d)*$))/.test(token);
};

var isListStart = function(token) {
  return token === _keyTokens__WEBPACK_IMPORTED_MODULE_0__["listStart"];
};

var isNil = function(token) {
  return token === _keyTokens__WEBPACK_IMPORTED_MODULE_0__["nil"];
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
  if (tokens === _commentSignal__WEBPACK_IMPORTED_MODULE_1__["commentSignal"]) {
    return _commentSignal__WEBPACK_IMPORTED_MODULE_1__["commentSignal"];
  }
  return _parse(tokens.shift(), tokens);
};

var parseBinaryGlyph = function(keyword, tokens) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlList"])(
    Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlSymbol"])(keyword),
    Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlList"])(
      parse(tokens),
      Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlList"])(parse(tokens))));
};

var parseBoolean = function(token) {
  return token === _keyTokens__WEBPACK_IMPORTED_MODULE_0__["_true"];
};

var parseFloat10 = function(token) {
  return parseFloat(stripUnderscores(token), 10);
};

var parseGlyph = function(keyword, tokens) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlList"])(
    Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlSymbol"])(keyword),
    Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlList"])(parse(tokens)));
};

var parseIndex = function(tokens) {
  var token;
  var jsIndex = {};
  var key = null;
  var isKeyStep = true;
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

var parseInt10 = function(token) {
  return parseInt(stripUnderscores(token), 10);
};

var parseList = function(tokens) {
  var token;
  var erlList = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlList"])();
  while ((token = tokens.shift()) !== _keyTokens__WEBPACK_IMPORTED_MODULE_0__["listEnd"]) {
    erlList = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_2__["createErlList"])(_parse(token, tokens), erlList);
  }
  return Object(_linked_list__WEBPACK_IMPORTED_MODULE_3__["reverse"])(erlList);
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

glyphIndex[_keyTokens__WEBPACK_IMPORTED_MODULE_0__["derefGlyph"]]         = _keyTokens__WEBPACK_IMPORTED_MODULE_0__["deref"];
glyphIndex[_keyTokens__WEBPACK_IMPORTED_MODULE_0__["ignoreBangGlyph"]]    = _keyTokens__WEBPACK_IMPORTED_MODULE_0__["ignoreBang"];
glyphIndex[_keyTokens__WEBPACK_IMPORTED_MODULE_0__["quasiquoteGlyph"]]    = _keyTokens__WEBPACK_IMPORTED_MODULE_0__["quasiquote"];
glyphIndex[_keyTokens__WEBPACK_IMPORTED_MODULE_0__["quoteGlyph"]]         = _keyTokens__WEBPACK_IMPORTED_MODULE_0__["quote"];
glyphIndex[_keyTokens__WEBPACK_IMPORTED_MODULE_0__["spliceUnquoteGlyph"]] = _keyTokens__WEBPACK_IMPORTED_MODULE_0__["spliceUnquote"];
glyphIndex[_keyTokens__WEBPACK_IMPORTED_MODULE_0__["unquoteGlyph"]]       = _keyTokens__WEBPACK_IMPORTED_MODULE_0__["unquote"];

var binaryGlyphIndex = {};

binaryGlyphIndex[_keyTokens__WEBPACK_IMPORTED_MODULE_0__["ignoreIfTrueGlyph"]]     = _keyTokens__WEBPACK_IMPORTED_MODULE_0__["ignoreIfTrue"];
binaryGlyphIndex[_keyTokens__WEBPACK_IMPORTED_MODULE_0__["ignoreUnlessTrueGlyph"]] = _keyTokens__WEBPACK_IMPORTED_MODULE_0__["ignoreUnlessTrue"];

var isString = startsWith('"');

var isIdentifier = startsWith(':');




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
  if (erlExpr === _commentSignal__WEBPACK_IMPORTED_MODULE_0__["commentSignal"]) {
    return _commentSignal__WEBPACK_IMPORTED_MODULE_0__["commentSignal"];
  }
  var _serialize = (function() {
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

var serializeAtom = function(erlAtom, shouldBeReadable) {
  return "(atom " + (serialize(erlAtom.erlValue, shouldBeReadable)) + ")";
};

var serializeIdentifier = function(erlString, shouldBeReadable) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["extractJsValue"])(erlString);
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
  return _keyTokens__WEBPACK_IMPORTED_MODULE_2__["indexStart"] + memo + _keyTokens__WEBPACK_IMPORTED_MODULE_2__["indexEnd"];
};

var serializeList = function(erlList, shouldBeReadable) {
  var serializedList = Object(_linked_list__WEBPACK_IMPORTED_MODULE_3__["reduce"])(
    "",
    adjoinErlValue(shouldBeReadable),
    erlList);
  return _keyTokens__WEBPACK_IMPORTED_MODULE_2__["listStart"] + serializedList + _keyTokens__WEBPACK_IMPORTED_MODULE_2__["listEnd"];
};

var serializeString = function(erlString, shouldBeReadable) {
  var jsString = stripQuotes(Object(_type_utilities__WEBPACK_IMPORTED_MODULE_1__["extractJsValue"])(erlString));
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




var createErlAtom = function(erlValue) {
  return {
    erlValue: erlValue,
    type: _types__WEBPACK_IMPORTED_MODULE_1__["erlAtomType"]
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

var _erlTypes = _types__WEBPACK_IMPORTED_MODULE_1__["erlTypes"].map(createFactoryAndPredicate);

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




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2dldEFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2dldEtleUNob3JkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbnRyb2wvY2hhcnMvaW50ZXJwcmV0S2V5ZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2tleUNvZGVDaGFydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29udHJvbC9jaGFycy9rZXlJZGVudGlmaWVyQ2hhcnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbnRyb2wvZ2V0Vmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29udHJvbC9pbml0aWFsaXplQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9kZXRlY3RDc3NTY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvaW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy9mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy90ZXJtaW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy92aWV3cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvZ2V0SW5pdGlhbE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL21vZGVscy90eXBlcy9jcmVhdGVGcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvdHlwZXMvY3JlYXRlUHJvbXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL21vZGVscy90eXBlcy9jcmVhdGVUZXJtaW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvdHlwZXMvY3JlYXRlVmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL3N1YnNjcmliZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvdmlldy9pbml0aWFsaXplVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L3JlY3JlYXRlQ29uc29sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZUVybGtvbmlnTGlzcENvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvX3Byb2Nlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvY29tbWVudFNpZ25hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9lbnYtdXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2VudjAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvZW52MS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9lbnYyLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2VudjMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvZW52NC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9ldmFsdWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9nZXRMaXNwRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvaW5kZXgtdXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2ludGVycHJldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9qcy11dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3Ava2V5VG9rZW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2xpbmtlZC1saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3BhcnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3NlcmlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9zdGFuZGFyZC1mbnMtYW5kLW1hY3Jvcy5saXNwIiwid2VicGFjazovLy8uL3NyYy9saXNwL3Rva2VuaXplLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3Rva2VuaXplQW5kUGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvdHlwZS11dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JpYm9zb21lL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JpYm9zb21lL2VsZW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9yaWJvc29tZS9pbnRlcnByZXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixJQUFJLEtBQUs7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRXFCOzs7Ozs7Ozs7Ozs7O0FDcEdyQjtBQUFBO0FBQUE7QUFBQTtBQUFnRDtBQUNZOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsNkJBQTZCLHdFQUFtQjtBQUNoRCxHQUFHO0FBQ0g7QUFDQSw2QkFBNkIsNERBQWE7QUFDMUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFdUI7Ozs7Ozs7Ozs7Ozs7QUNsRHZCO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ0k7O0FBRTVDO0FBQ0EsU0FBUyw0REFBUyxDQUFDLGdFQUFXO0FBQzlCOztBQUU0Qjs7Ozs7Ozs7Ozs7OztBQ1A1QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7QUN2SHpCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSw4REFBRztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILGtCQUFrQiw4REFBRztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSw4REFBRztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNkRBQVM7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLHNCQUFzQjtBQUN0Qix1QkFBdUIsV0FBVztBQUNsQywwQkFBMEIsV0FBVzs7QUFFbEI7Ozs7Ozs7Ozs7Ozs7QUN4SW5CO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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QUFDQSw4QkFBOEIsaUNBQWlDO0FBQy9EOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUTtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUtFIiwiZmlsZSI6ImVybGtvbmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5pdGlhbGl6ZUVybGtvbmlnTGlzcENvbnNvbGUuanNcIik7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIGEgPSAnYSc7XG52YXIgZSA9ICdlJztcbnZhciBoID0gJ2gnO1xudmFyIGwgPSAnbCc7XG52YXIgdSA9ICd1JztcbnZhciB3ID0gJ3cnO1xuXG52YXIgQSA9ICdBJztcbnZhciBFID0gJ0UnO1xudmFyIEggPSAnSCc7XG52YXIgTCA9ICdMJztcbnZhciBVID0gJ1UnO1xudmFyIFcgPSAnVyc7XG5cbnZhciBiYWNrc3BhY2UgPSAnQmFja3NwYWNlJztcbnZhciBfZGVsZXRlICAgPSAnRGVsZXRlJztcbnZhciBkb3duICAgICAgPSAnQXJyb3dEb3duJztcbnZhciBlbnRlciAgICAgPSAnRW50ZXInO1xudmFyIGxlZnQgICAgICA9ICdBcnJvd0xlZnQnO1xudmFyIHJpZ2h0ICAgICA9ICdBcnJvd1JpZ2h0JztcbnZhciBzcGFjZSAgICAgPSAnICc7XG52YXIgc3BhY2ViYXIgID0gJ1NwYWNlYmFyJztcbnZhciB0YWIgICAgICAgPSAnVGFiJztcbnZhciB1cCAgICAgICAgPSAnQXJyb3dVcCc7XG5cbnZhciBjaGFyYWN0ZXJzID0gW1xuICBzcGFjZSxcbiAgJ2AnLCAnMScsICcyJywgICczJywgJzQnLCAgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcwJywgJy0nLCAnPScsXG4gICd+JywgJyEnLCAnQCcsICAnIycsICckJywgICclJywgJ14nLCAnJicsICcqJywgJygnLCAnKScsICdfJywgJysnLFxuICAnYScsICdiJywgJ2MnLCAgJ2QnLCAnZScsICAnZicsICdnJywgJ2gnLCAnaScsICdqJywgJ2snLCAnbCcsICdtJyxcbiAgJ24nLCAnbycsICdwJywgICdxJywgJ3InLCAgJ3MnLCAndCcsICd1JywgJ3YnLCAndycsICd4JywgJ3knLCAneicsXG4gICdBJywgJ0InLCAnQycsICAnRCcsICdFJywgICdGJywgJ0cnLCAnSCcsICdJJywgJ0onLCAnSycsICdMJywgJ00nLFxuICAnTicsICdPJywgJ1AnLCAgJ1EnLCAnUicsICAnUycsICdUJywgJ1UnLCAnVicsICdXJywgJ1gnLCAnWScsICdaJyxcbiAgJ1snLCAnXScsICdcXFxcJywgJzsnLCAnXFwnJywgJywnLCAnLicsICcvJyxcbiAgJ3snLCAnfScsICd8JywgICc6JywgJ1wiJywgICc8JywgJz4nLCAnPydcbl07XG5cbmZ1bmN0aW9uIGdldEFjdGlvbihrZXlDaG9yZCkge1xuICB2YXIgdmFsdWUgPSBrZXlDaG9yZC52YWx1ZTtcblxuICBpZiAoa2V5Q2hvcmQuY3RybEtleSkge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgYTpcbiAgICAgIGNhc2UgQTpcbiAgICAgICAgcmV0dXJuIHdyYXAoJ21vdmVDdXJzb3JUb1N0YXJ0Jyk7XG4gICAgICBjYXNlIGU6XG4gICAgICBjYXNlIEU6XG4gICAgICAgIHJldHVybiB3cmFwKCdtb3ZlQ3Vyc29yVG9FbmQnKTtcbiAgICAgIGNhc2UgaDpcbiAgICAgIGNhc2UgSDpcbiAgICAgICAgcmV0dXJuIHdyYXAoJ2RlbGV0ZUxlZnRDaGFyJyk7XG4gICAgICBjYXNlIGw6XG4gICAgICBjYXNlIEw6XG4gICAgICAgIHJldHVybiB3cmFwKCdjbGVhcicpO1xuICAgICAgY2FzZSB1OlxuICAgICAgY2FzZSBVOlxuICAgICAgICByZXR1cm4gd3JhcCgnZGVsZXRlUHJlQ3Vyc29yJyk7XG4gICAgICBjYXNlIHc6XG4gICAgICBjYXNlIFc6XG4gICAgICAgIHJldHVybiB3cmFwKCdkZWxldGVXb3JkJyk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gd3JhcCgnbm9PcCcpO1xuICAgIH1cbiAgfVxuXG4gIHN3aXRjaCAodmFsdWUpIHtcbiAgICBjYXNlIGVudGVyOlxuICAgICAgcmV0dXJuIHdyYXAoJ3N1Ym1pdCcpO1xuICAgIGNhc2UgYmFja3NwYWNlOlxuICAgICAgcmV0dXJuIHdyYXAoJ2RlbGV0ZUxlZnRDaGFyJyk7XG4gICAgY2FzZSBsZWZ0OlxuICAgICAgcmV0dXJuIHdyYXAoJ21vdmVDdXJzb3JMZWZ0Jyk7XG4gICAgY2FzZSByaWdodDpcbiAgICAgIHJldHVybiB3cmFwKCdtb3ZlQ3Vyc29yUmlnaHQnKTtcbiAgICBjYXNlIHVwOlxuICAgICAgcmV0dXJuIHdyYXAoJ3Jld2luZCcpO1xuICAgIGNhc2UgZG93bjpcbiAgICAgIHJldHVybiB3cmFwKCdmYXN0Rm9yd2FyZCcpO1xuICAgIGNhc2UgX2RlbGV0ZTpcbiAgICAgIHJldHVybiB3cmFwKCdkZWxldGVSaWdodENoYXInKTtcbiAgICBjYXNlIHRhYjpcbiAgICAgIHJldHVybiB3cmFwKCdjb21wbGV0ZVdvcmQnKTtcbiAgICBjYXNlIHNwYWNlOlxuICAgIGNhc2Ugc3BhY2ViYXI6XG4gICAgICByZXR1cm4geyBuYW1lOiAnYWRkQ2hhcicsIGNoYXI6ICcgJyB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gaXNDaGFyYWN0ZXIodmFsdWUpXG4gICAgICAgID8geyBuYW1lOiAnYWRkQ2hhcicsIGNoYXI6IHZhbHVlIH1cbiAgICAgICAgOiB3cmFwKCdub09wJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNDaGFyYWN0ZXIodmFsdWUpIHtcbiAgcmV0dXJuIGNoYXJhY3RlcnMuaW5kZXhPZih2YWx1ZSkgPj0gMDtcbn1cblxuZnVuY3Rpb24gd3JhcChhY3Rpb25OYW1lKSB7XG4gIHJldHVybiB7IG5hbWU6IGFjdGlvbk5hbWUgfTtcbn1cblxuZXhwb3J0IHsgZ2V0QWN0aW9uIH07XG4iLCJpbXBvcnQgeyBrZXlDb2RlQ2hhcnRzIH0gZnJvbSAnLi9rZXlDb2RlQ2hhcnRzJztcbmltcG9ydCB7IGtleUlkZW50aWZpZXJDaGFydHMgfSBmcm9tICcuL2tleUlkZW50aWZpZXJDaGFydHMnO1xuXG5mdW5jdGlvbiBnZXRFdmVudFByb3h5KGtpbmQsIGV2ZW50KSB7XG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGV2ZW50W2tpbmRdLFxuICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgIGN0cmxLZXk6IGV2ZW50LmN0cmxLZXksXG4gICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5XG4gIH07XG59O1xuXG5mdW5jdGlvbiBpZGVudGl0eShldmVudCkge1xuICByZXR1cm4gZXZlbnQ7XG59XG5cbmZ1bmN0aW9uIGdldEtleUNob3JkKGV2ZW50KSB7XG4gIHZhciBub3JtYWxpemU7XG4gIHZhciBwcm9wZXJ0eTtcblxuICBpZiAoZXZlbnQua2V5ICE9IG51bGwpIHtcbiAgICBwcm9wZXJ0eSA9ICdrZXknO1xuICAgIG5vcm1hbGl6ZSA9IGlkZW50aXR5O1xuICB9IGVsc2UgaWYgKGV2ZW50LmtleUlkZW50aWZpZXIgIT0gbnVsbCkge1xuICAgIHByb3BlcnR5ID0gJ2tleUlkZW50aWZpZXInO1xuICAgIG5vcm1hbGl6ZSA9IF9nZXRLZXlDaG9yZChrZXlJZGVudGlmaWVyQ2hhcnRzKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9wZXJ0eSA9ICdrZXlDb2RlJztcbiAgICBub3JtYWxpemUgPSBfZ2V0S2V5Q2hvcmQoa2V5Q29kZUNoYXJ0cyk7XG4gIH1cblxuICByZXR1cm4gbm9ybWFsaXplKGdldEV2ZW50UHJveHkocHJvcGVydHksIGV2ZW50KSk7XG59XG5cbmZ1bmN0aW9uIF9nZXRLZXlDaG9yZChjb252ZXJzaW9uQ2hhcnRzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGdldEtleUNob3JkVmFsdWUoY29udmVyc2lvbkNoYXJ0cywgZXZlbnQudmFsdWUsIGV2ZW50LnNoaWZ0S2V5KSxcbiAgICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgICAgY3RybEtleTogZXZlbnQuY3RybEtleSxcbiAgICAgIHNoaWZ0S2V5OiBldmVudC5zaGlmdEtleVxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEtleUNob3JkVmFsdWUoY29udmVyc2lvbkNoYXJ0cywgdmFsdWUsIHNoaWZ0S2V5KSB7XG4gIHZhciBrZXkgPSBzaGlmdEtleSA/ICd3aXRoU2hpZnQnIDogJ3dpdGhvdXRTaGlmdCc7XG4gIHJldHVybiBjb252ZXJzaW9uQ2hhcnRzW2tleV1bdmFsdWVdO1xufVxuXG5leHBvcnQgeyBnZXRLZXlDaG9yZCB9O1xuIiwiaW1wb3J0IHsgZ2V0QWN0aW9uIH0gZnJvbSAnLi9nZXRBY3Rpb24nO1xuaW1wb3J0IHsgZ2V0S2V5Q2hvcmQgfSBmcm9tICcuL2dldEtleUNob3JkJztcblxuZnVuY3Rpb24gaW50ZXJwcmV0S2V5ZG93bihldmVudCkge1xuICByZXR1cm4gZ2V0QWN0aW9uKGdldEtleUNob3JkKGV2ZW50KSk7XG59XG5cbmV4cG9ydCB7IGludGVycHJldEtleWRvd24gfTtcbiIsInZhciBrZXlDb2RlQ2hhcnRzID0ge1xuICB3aXRoU2hpZnQ6IHtcbiAgICA4ICA6ICdCYWNrc3BhY2UnLFxuICAgIDkgIDogJ1RhYicsXG4gICAgMTMgOiAnRW50ZXInLFxuICAgIDMyIDogJyAnLFxuICAgIDM3IDogJ0Fycm93TGVmdCcsXG4gICAgMzggOiAnQXJyb3dVcCcsXG4gICAgMzkgOiAnQXJyb3dSaWdodCcsXG4gICAgNDAgOiAnQXJyb3dEb3duJyxcbiAgICA0NiA6ICdEZWxldGUnLFxuICAgIDQ4IDogJyknLFxuICAgIDQ5IDogJyEnLFxuICAgIDUwIDogJ0AnLFxuICAgIDUxIDogJyMnLFxuICAgIDUyIDogJyQnLFxuICAgIDUzIDogJyUnLFxuICAgIDU0IDogJ14nLFxuICAgIDU1IDogJyYnLFxuICAgIDU2IDogJyonLFxuICAgIDU3IDogJygnLFxuICAgIDU5IDogJzonLFxuICAgIDYxIDogJysnLFxuICAgIDY1IDogJ0EnLFxuICAgIDY2IDogJ0InLFxuICAgIDY3IDogJ0MnLFxuICAgIDY4IDogJ0QnLFxuICAgIDY5IDogJ0UnLFxuICAgIDcwIDogJ0YnLFxuICAgIDcxIDogJ0cnLFxuICAgIDcyIDogJ0gnLFxuICAgIDczIDogJ0knLFxuICAgIDc0IDogJ0onLFxuICAgIDc1IDogJ0snLFxuICAgIDc2IDogJ0wnLFxuICAgIDc3IDogJ00nLFxuICAgIDc4IDogJ04nLFxuICAgIDc5IDogJ08nLFxuICAgIDgwIDogJ1AnLFxuICAgIDgxIDogJ1EnLFxuICAgIDgyIDogJ1InLFxuICAgIDgzIDogJ1MnLFxuICAgIDg0IDogJ1QnLFxuICAgIDg1IDogJ1UnLFxuICAgIDg2IDogJ1YnLFxuICAgIDg3IDogJ1cnLFxuICAgIDg4IDogJ1gnLFxuICAgIDg5IDogJ1knLFxuICAgIDkwIDogJ1onLFxuICAgIDE3MzogJ18nLFxuICAgIDE4ODogJzwnLFxuICAgIDE5MDogJz4nLFxuICAgIDE5MTogJz8nLFxuICAgIDE5MjogJ34nLFxuICAgIDIxOTogJ3snLFxuICAgIDIyMDogJ3wnLFxuICAgIDIyMTogJ30nLFxuICAgIDIyMjogJ1wiJ1xuICB9LFxuICB3aXRob3V0U2hpZnQ6IHtcbiAgICA4ICA6ICdCYWNrc3BhY2UnLFxuICAgIDkgIDogJ1RhYicsXG4gICAgMTMgOiAnRW50ZXInLFxuICAgIDMyIDogJyAnLFxuICAgIDM3IDogJ0Fycm93TGVmdCcsXG4gICAgMzggOiAnQXJyb3dVcCcsXG4gICAgMzkgOiAnQXJyb3dSaWdodCcsXG4gICAgNDAgOiAnQXJyb3dEb3duJyxcbiAgICA0NiA6ICdEZWxldGUnLFxuICAgIDQ4OiAnMCcsXG4gICAgNDk6ICcxJyxcbiAgICA1MDogJzInLFxuICAgIDUxOiAnMycsXG4gICAgNTI6ICc0JyxcbiAgICA1MzogJzUnLFxuICAgIDU0OiAnNicsXG4gICAgNTU6ICc3JyxcbiAgICA1NjogJzgnLFxuICAgIDU3OiAnOScsXG4gICAgNTk6ICc7JyxcbiAgICA2MTogJz0nLFxuICAgIDY1OiAnYScsXG4gICAgNjY6ICdiJyxcbiAgICA2NzogJ2MnLFxuICAgIDY4OiAnZCcsXG4gICAgNjk6ICdlJyxcbiAgICA3MDogJ2YnLFxuICAgIDcxOiAnZycsXG4gICAgNzI6ICdoJyxcbiAgICA3MzogJ2knLFxuICAgIDc0OiAnaicsXG4gICAgNzU6ICdrJyxcbiAgICA3NjogJ2wnLFxuICAgIDc3OiAnbScsXG4gICAgNzg6ICduJyxcbiAgICA3OTogJ28nLFxuICAgIDgwOiAncCcsXG4gICAgODE6ICdxJyxcbiAgICA4MjogJ3InLFxuICAgIDgzOiAncycsXG4gICAgODQ6ICd0JyxcbiAgICA4NTogJ3UnLFxuICAgIDg2OiAndicsXG4gICAgODc6ICd3JyxcbiAgICA4ODogJ3gnLFxuICAgIDg5OiAneScsXG4gICAgOTA6ICd6JyxcbiAgICAxNzM6ICctJyxcbiAgICAxODg6ICcsJyxcbiAgICAxOTA6ICcuJyxcbiAgICAxOTE6ICcvJyxcbiAgICAxOTI6ICdgJyxcbiAgICAyMTk6ICdbJyxcbiAgICAyMjA6ICdcXFxcJyxcbiAgICAyMjE6ICddJyxcbiAgICAyMjI6ICdcXCcnXG4gIH1cbn07XG5cbmV4cG9ydCB7IGtleUNvZGVDaGFydHMgfTtcbiIsInZhciBrZXlJZGVudGlmaWVyQ2hhcnRzID0ge1xuICB3aXRob3V0U2hpZnQ6IHtcbiAgICAnVSswMDQxJzogJ2EnLFxuICAgICdVKzAwNDInOiAnYicsXG4gICAgJ1UrMDA0Myc6ICdjJyxcbiAgICAnVSswMDQ0JzogJ2QnLFxuICAgICdVKzAwNDUnOiAnZScsXG4gICAgJ1UrMDA0Nic6ICdmJyxcbiAgICAnVSswMDQ3JzogJ2cnLFxuICAgICdVKzAwNDgnOiAnaCcsXG4gICAgJ1UrMDA0OSc6ICdpJyxcbiAgICAnVSswMDRBJzogJ2onLFxuICAgICdVKzAwNEInOiAnaycsXG4gICAgJ1UrMDA0Qyc6ICdsJyxcbiAgICAnVSswMDREJzogJ20nLFxuICAgICdVKzAwNEUnOiAnbicsXG4gICAgJ1UrMDA0Ric6ICdvJyxcbiAgICAnVSswMDUwJzogJ3AnLFxuICAgICdVKzAwNTEnOiAncScsXG4gICAgJ1UrMDA1Mic6ICdyJyxcbiAgICAnVSswMDUzJzogJ3MnLFxuICAgICdVKzAwNTQnOiAndCcsXG4gICAgJ1UrMDA1NSc6ICd1JyxcbiAgICAnVSswMDU2JzogJ3YnLFxuICAgICdVKzAwNTcnOiAndycsXG4gICAgJ1UrMDA1OCc6ICd4JyxcbiAgICAnVSswMDU5JzogJ3knLFxuICAgICdVKzAwNUEnOiAneicsXG4gICAgJ1UrMDAzMCc6ICcwJyxcbiAgICAnVSswMDMxJzogJzEnLFxuICAgICdVKzAwMzInOiAnMicsXG4gICAgJ1UrMDAzMyc6ICczJyxcbiAgICAnVSswMDM0JzogJzQnLFxuICAgICdVKzAwMzUnOiAnNScsXG4gICAgJ1UrMDAzNic6ICc2JyxcbiAgICAnVSswMDM3JzogJzcnLFxuICAgICdVKzAwMzgnOiAnOCcsXG4gICAgJ1UrMDAzOSc6ICc5JyxcbiAgICAnVSswMEMwJzogJ2AnLFxuICAgICdVKzAwQkQnOiAnLScsXG4gICAgJ1UrMDBCQic6ICc9JyxcbiAgICAnVSswMERCJzogJ1snLFxuICAgICdVKzAwREQnOiAnXScsXG4gICAgJ1UrMDBEQyc6ICdcXFxcJyxcbiAgICAnVSswMEJBJzogJzsnLFxuICAgICdVKzAwREUnOiAnXFwnJyxcbiAgICAnVSswMEJDJzogJywnLFxuICAgICdVKzAwQkUnOiAnLicsXG4gICAgJ1UrMDBCRic6ICcvJyxcbiAgICAnVSswMDIwJzogJyAnLFxuICAgICdVKzAwMDgnOiAnQmFja3NwYWNlJyxcbiAgICAnVSswMDc1JzogJ0RlbGV0ZScsXG4gICAgJ0Rvd24nICA6ICdBcnJvd0Rvd24nLFxuICAgICdFbnRlcicgOiAnRW50ZXInLFxuICAgICdMZWZ0JyAgOiAnQXJyb3dMZWZ0JyxcbiAgICAnUmlnaHQnIDogJ0Fycm93UmlnaHQnLFxuICAgICdVKzAwMjAnOiAnICcsXG4gICAgJ1UrMDAwOSc6ICdUYWInLFxuICAgICdVcCcgICAgOiAnQXJyb3dVcCdcbiAgfSxcbiAgd2l0aFNoaWZ0OiB7XG4gICAgJ1UrMDA0MSc6ICdBJyxcbiAgICAnVSswMDQyJzogJ0InLFxuICAgICdVKzAwNDMnOiAnQycsXG4gICAgJ1UrMDA0NCc6ICdEJyxcbiAgICAnVSswMDQ1JzogJ0UnLFxuICAgICdVKzAwNDYnOiAnRicsXG4gICAgJ1UrMDA0Nyc6ICdHJyxcbiAgICAnVSswMDQ4JzogJ0gnLFxuICAgICdVKzAwNDknOiAnSScsXG4gICAgJ1UrMDA0QSc6ICdKJyxcbiAgICAnVSswMDRCJzogJ0snLFxuICAgICdVKzAwNEMnOiAnTCcsXG4gICAgJ1UrMDA0RCc6ICdNJyxcbiAgICAnVSswMDRFJzogJ04nLFxuICAgICdVKzAwNEYnOiAnTycsXG4gICAgJ1UrMDA1MCc6ICdQJyxcbiAgICAnVSswMDUxJzogJ1EnLFxuICAgICdVKzAwNTInOiAnUicsXG4gICAgJ1UrMDA1Myc6ICdTJyxcbiAgICAnVSswMDU0JzogJ1QnLFxuICAgICdVKzAwNTUnOiAnVScsXG4gICAgJ1UrMDA1Nic6ICdWJyxcbiAgICAnVSswMDU3JzogJ1cnLFxuICAgICdVKzAwNTgnOiAnWCcsXG4gICAgJ1UrMDA1OSc6ICdZJyxcbiAgICAnVSswMDVBJzogJ1onLFxuICAgICdVKzAwMzAnOiAnKScsXG4gICAgJ1UrMDAzMSc6ICchJyxcbiAgICAnVSswMDMyJzogJ0AnLFxuICAgICdVKzAwMzMnOiAnIycsXG4gICAgJ1UrMDAzNCc6ICckJyxcbiAgICAnVSswMDM1JzogJyUnLFxuICAgICdVKzAwMzYnOiAnXicsXG4gICAgJ1UrMDAzNyc6ICcmJyxcbiAgICAnVSswMDM4JzogJyonLFxuICAgICdVKzAwMzknOiAnKCcsXG4gICAgJ1UrMDBDMCc6ICd+JyxcbiAgICAnVSswMEJEJzogJ18nLFxuICAgICdVKzAwQkInOiAnKycsXG4gICAgJ1UrMDBEQic6ICd7JyxcbiAgICAnVSswMEREJzogJ30nLFxuICAgICdVKzAwREMnOiAnfCcsXG4gICAgJ1UrMDBCQSc6ICc6JyxcbiAgICAnVSswMERFJzogJ1wiJyxcbiAgICAnVSswMEJDJzogJzwnLFxuICAgICdVKzAwQkUnOiAnPicsXG4gICAgJ1UrMDBCRic6ICc/JyxcbiAgICAnVSswMDIwJzogJyAnLFxuICAgICdVKzAwMDgnOiAnQmFja3NwYWNlJyxcbiAgICAnVSswMDc1JzogJ0RlbGV0ZScsXG4gICAgJ0Rvd24nICA6ICdBcnJvd0Rvd24nLFxuICAgICdFbnRlcicgOiAnRW50ZXInLFxuICAgICdMZWZ0JyAgOiAnQXJyb3dMZWZ0JyxcbiAgICAnUmlnaHQnIDogJ0Fycm93UmlnaHQnLFxuICAgICdVKzAwMjAnOiAnICcsXG4gICAgJ1UrMDAwOSc6ICdUYWInLFxuICAgICdVcCcgICAgOiAnQXJyb3dVcCdcbiAgfVxufTtcblxuZXhwb3J0IHsga2V5SWRlbnRpZmllckNoYXJ0cyB9O1xuIiwiaW1wb3J0IHsgVmlld3BvcnQgfSBmcm9tICcuLi9tb2RlbHMvYWN0aW9ucy92aWV3cG9ydCc7XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0KGFjdGlvbiwgY29uZmlnKSB7XG4gIHZhciBjb21tYW5kID0gYWN0aW9uLm5hbWU7XG4gIHZhciB2aWV3cG9ydCA9IGNvbmZpZy52aWV3cG9ydDtcbiAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgY2FzZSAnYWRkQ2hhcic6XG4gICAgICByZXR1cm4gVmlld3BvcnQuYWRkQ2hhcih2aWV3cG9ydCwgYWN0aW9uLmNoYXIpO1xuICAgIGNhc2UgJ2NvbXBsZXRlV29yZCc6XG4gICAgICByZXR1cm4gVmlld3BvcnQuY29tcGxldGVXb3JkKHZpZXdwb3J0LCBjb25maWcuZ2V0Q2FuZGlkYXRlcyk7XG4gICAgY2FzZSAnbm9PcCc6XG4gICAgICByZXR1cm4gdmlld3BvcnQ7XG4gICAgY2FzZSAnc3VibWl0JzpcbiAgICAgIHJldHVybiBWaWV3cG9ydC5zdWJtaXQodmlld3BvcnQsIGNvbmZpZy50cmFuc2Zvcm0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gVmlld3BvcnRbY29tbWFuZF0odmlld3BvcnQpO1xuICB9XG59XG5cbmV4cG9ydCB7IGdldFZpZXdwb3J0IH07XG4iLCJpbXBvcnQgeyBnZXRWaWV3cG9ydCB9IGZyb20gJy4vZ2V0Vmlld3BvcnQnO1xuaW1wb3J0IHsgaW50ZXJwcmV0S2V5ZG93biB9IGZyb20gJy4vY2hhcnMvaW50ZXJwcmV0S2V5ZG93bic7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVDb250cm9sKHN1YnNjcmliZSwgcmVuZGVyLCBjb25maWcpIHtcbiAgdmFyIGhhbmRsZUV2ZW50ID0gZnVuY3Rpb24gKGdldEFjdGlvbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHJlbmRlcihnZXRWaWV3cG9ydChnZXRBY3Rpb24oZXZlbnQpLCBjb25maWcpKTtcbiAgICB9O1xuICB9XG5cbiAgc3Vic2NyaWJlKCdrZXlkb3duJywgaGFuZGxlRXZlbnQoaW50ZXJwcmV0S2V5ZG93bikpO1xufVxuXG5leHBvcnQgeyBpbml0aWFsaXplQ29udHJvbCB9O1xuIiwidmFyIF9ub2RlSWQgICAgID0gJyNlcmwtY3NzLXNjcm9sbGJhci10ZXN0LWRpdic7XG52YXIgX3ByZWZpeGVzICAgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJy1vLScsICctbXMtJ107XG52YXIgX3BzZXVkbyAgICAgPSAnOjonO1xudmFyIF9zY3JvbGxiYXIgID0gJ3Njcm9sbGJhcic7XG52YXIgX3dpZHRoMTBweCAgPSAne3dpZHRoOjEwcHg7fSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVJ1bGUocHJlZml4KSB7XG4gIHJldHVybiBfbm9kZUlkICsgX3BzZXVkbyArIHByZWZpeCArIF9zY3JvbGxiYXIgKyBfd2lkdGgxMHB4O1xufVxuXG5mdW5jdGlvbiBfZGV0ZWN0Q3NzU2Nyb2xsYmFyKHN0eWxlUnVsZSkge1xuICB2YXIgYm9keSA9IGdldEJvZHkoKTtcbiAgdmFyIGRvY0VsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbm9kZS5pZCA9ICdlcmwtY3NzLXNjcm9sbGJhci10ZXN0LWRpdic7XG4gIGRpdi5hcHBlbmRDaGlsZChub2RlKTtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gIHN0eWxlLmlkID0gJ2VybC1jc3Mtc2Nyb2xsYmFyLXRlc3Qtc3R5bGUnO1xuICB2YXIgbm9uY2VOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njcm9sbGJhci1ub25jZScpO1xuICB2YXIgbm9uY2UgPSBub25jZU5vZGUuZGF0YXNldFsnc2Nyb2xsYmFyTm9uY2UnXTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKTtcblxuICAoYm9keS5mYWtlID8gYm9keSA6IGRpdikuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHN0eWxlUnVsZTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHlsZVJ1bGUpKTtcbiAgfVxuXG4gIGRpdi5pZCA9ICdlcmwtY3NzLXNjcm9sbC10ZXN0JztcblxuICBpZiAoYm9keS5mYWtlKSB7XG4gICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIHZhciBkb2NPdmVyZmxvdyA9IGRvY0VsZW1lbnQuc3R5bGUub3ZlcmZsb3c7XG4gICAgZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIGRvY0VsZW1lbnQuYXBwZW5kQ2hpbGQoYm9keSk7XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gaGFzQ3NzU2Nyb2xsYmFyKG5vZGUsIDMwKTtcblxuICBpZiAoYm9keS5mYWtlKSB7XG4gICAgYm9keS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJvZHkpO1xuICAgIGRvY0VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBkb2NPdmVyZmxvdztcbiAgICBkb2NFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgfSBlbHNlIHtcbiAgICBkaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXYpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZGV0ZWN0Q3NzU2Nyb2xsYmFyKCkge1xuICB2YXIgY3NzU2Nyb2xsYmFyID1cbiAgICBfbm9kZUlkICsgJ3tvdmVyZmxvdzpzY3JvbGw7d2lkdGg6NDBweDtoZWlnaHQ6NDBweDt9JyArXG4gICAgX3ByZWZpeGVzLm1hcChjcmVhdGVSdWxlKS5qb2luKCcnKSArXG4gICAgY3JlYXRlUnVsZSgnJyk7XG5cbiAgcmV0dXJuIF9kZXRlY3RDc3NTY3JvbGxiYXIoY3NzU2Nyb2xsYmFyKTtcbn1cblxuZnVuY3Rpb24gZ2V0Qm9keSgpIHtcbiAgdmFyIF9ib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICBpZiAoIV9ib2R5KSB7XG4gICAgdmFyIGlzU3ZnID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnO1xuICAgIF9ib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpc1N2ZyA/ICdzdmcnIDogJ2JvZHknKTtcbiAgICBfYm9keS5mYWtlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfYm9keTtcbn1cblxuZnVuY3Rpb24gaGFzQ3NzU2Nyb2xsYmFyKG5vZGUsIGV4cGVjdGVkV2lkdGgpIHtcbiAgcmV0dXJuICdzY3JvbGxXaWR0aCcgaW4gbm9kZSAmJiBub2RlLnNjcm9sbFdpZHRoID09PSBleHBlY3RlZFdpZHRoO1xufVxuXG5leHBvcnQgeyBkZXRlY3RDc3NTY3JvbGxiYXIgfTtcbiIsImltcG9ydCB7IGRldGVjdENzc1Njcm9sbGJhciB9ICBmcm9tICcuL2RldGVjdENzc1Njcm9sbGJhcic7XG5pbXBvcnQgeyBnZXRJbml0aWFsTW9kZWwgfSAgICAgZnJvbSAnLi9tb2RlbHMvZ2V0SW5pdGlhbE1vZGVsJztcbmltcG9ydCB7IEVSTEtJTkcgfSAgICAgICAgICAgICBmcm9tICcuL3ZpZXcvcmVjcmVhdGVDb25zb2xlJztcbmltcG9ydCB7IGluaXRpYWxpemVDb250cm9sIH0gICBmcm9tICcuL2NvbnRyb2wvaW5pdGlhbGl6ZUNvbnRyb2wnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVZpZXcgfSAgICAgIGZyb20gJy4vdmlldy9pbml0aWFsaXplVmlldyc7XG5pbXBvcnQgeyByZW5kZXIgfSAgICAgICAgICAgICAgZnJvbSAnLi9yZW5kZXInO1xuaW1wb3J0IHsgc2Nyb2xsIH0gICAgICAgICAgICAgIGZyb20gJy4vdmlldy9zY3JvbGwnO1xuaW1wb3J0IHsgc3Vic2NyaWJlIH0gICAgICAgICAgIGZyb20gJy4vc3Vic2NyaWJlJztcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZShjb25maWcpIHtcbiAgdmFyIHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcubm9kZUlkKTtcbiAgdmFyIGluaXRpYWxNb2RlbCA9IGdldEluaXRpYWxNb2RlbCgpO1xuICB2YXIgcHJvbXB0TGFiZWwgPSBjb25maWcucHJvbXB0TGFiZWw7XG4gIHZhciBsYWJlbHMgPSB7IHByb21wdExhYmVsOiBwcm9tcHRMYWJlbCB9O1xuICB2YXIgdmlld01vZGVsID0gRVJMS0lORyhsYWJlbHMsIGluaXRpYWxNb2RlbCk7XG5cbiAgaW5pdGlhbGl6ZVZpZXcocm9vdCwgdmlld01vZGVsKTtcblxuICB2YXIgcm9vdENoaWxkID0gcm9vdC5jaGlsZE5vZGVzWzBdO1xuXG4gIHZhciBjb250cm9sQ29uZmlnID0ge1xuICAgIGdldENhbmRpZGF0ZXM6IGNvbmZpZy5nZXRDYW5kaWRhdGVzLFxuICAgIHByb21wdExhYmVsOiBwcm9tcHRMYWJlbCxcbiAgICB0cmFuc2Zvcm06IGNvbmZpZy50cmFuc2Zvcm0sXG4gICAgdmlld3BvcnQ6IGluaXRpYWxNb2RlbFxuICB9O1xuXG4gIHZhciBjc3NTY3JvbGxiYXJEZXRlY3RlZCA9IGRldGVjdENzc1Njcm9sbGJhcigpO1xuXG4gIHNldFNjcm9sbGJhclZpc2liaWxpdHkoY3NzU2Nyb2xsYmFyRGV0ZWN0ZWQpO1xuXG4gIHZhciBfc2Nyb2xsID0gc2Nyb2xsKGNzc1Njcm9sbGJhckRldGVjdGVkKTtcblxuICBpbml0aWFsaXplQ29udHJvbChcbiAgICBzdWJzY3JpYmUsXG4gICAgcmVuZGVyKHZpZXdNb2RlbCwgcm9vdENoaWxkLCBjb250cm9sQ29uZmlnLCBfc2Nyb2xsKSxcbiAgICBjb250cm9sQ29uZmlnKTtcbn1cblxuZnVuY3Rpb24gc2V0U2Nyb2xsYmFyVmlzaWJpbGl0eShjc3NTY3JvbGxiYXJEZXRlY3RlZCkge1xuICBpZiAoIWNzc1Njcm9sbGJhckRldGVjdGVkKSB7XG4gICAgdmFyIHZpZXdwb3J0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZXJsLXZpZXdwb3J0JylbMF1cbiAgICB2aWV3cG9ydC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICB9XG59XG5cblxuZXhwb3J0IHsgaW5pdGlhbGl6ZSB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRnJhbWUgfSBmcm9tICcuLi90eXBlcy9jcmVhdGVGcmFtZSc7XG5cbmZ1bmN0aW9uIGNsZWFyKGZyYW1lLCB0ZXJtaW5hbCkge1xuICByZXR1cm4gY3JlYXRlRnJhbWUoXG4gICAgMCxcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLmxlbmd0aCxcbiAgICBmcmFtZS5wcm9tcHRJbmRleCk7XG59XG5cbmZ1bmN0aW9uIGZhc3RGb3J3YXJkKGZyYW1lKSB7XG4gIHJldHVybiBjcmVhdGVGcmFtZShcbiAgICBmcmFtZS5vZmZzZXQsXG4gICAgZnJhbWUuc3RhcnQsXG4gICAgZnJhbWUucHJvbXB0SW5kZXggPiAwXG4gICAgICA/IGZyYW1lLnByb21wdEluZGV4IC0gMVxuICAgICAgOiBmcmFtZS5wcm9tcHRJbmRleCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UHJvbXB0SW5kZXgoZnJhbWUpIHtcbiAgcmV0dXJuIGNyZWF0ZUZyYW1lKFxuICAgIGZyYW1lLm9mZnNldCxcbiAgICBmcmFtZS5zdGFydCxcbiAgICAwKTtcbn1cblxuZnVuY3Rpb24gcmV3aW5kKGZyYW1lLCB0ZXJtaW5hbCkge1xuICByZXR1cm4gY3JlYXRlRnJhbWUoXG4gICAgZnJhbWUub2Zmc2V0LFxuICAgIGZyYW1lLnN0YXJ0LFxuICAgIHRlcm1pbmFsLnByb21wdHMubGVuZ3RoID4gZnJhbWUucHJvbXB0SW5kZXhcbiAgICAgID8gZnJhbWUucHJvbXB0SW5kZXggKyAxXG4gICAgICA6IGZyYW1lLnByb21wdEluZGV4KTtcbn1cblxuZXhwb3J0IGNvbnN0IEZyYW1lID0ge1xuICBjbGVhcixcbiAgZmFzdEZvcndhcmQsXG4gIHJlc2V0UHJvbXB0SW5kZXgsXG4gIHJld2luZFxufTtcbiIsImltcG9ydCB7IGNyZWF0ZVRlcm1pbmFsIH0gZnJvbSAnLi4vdHlwZXMvY3JlYXRlVGVybWluYWwnO1xuaW1wb3J0IHsgY3JlYXRlUHJvbXB0IH0gZnJvbSAnLi4vdHlwZXMvY3JlYXRlUHJvbXB0JztcblxuZnVuY3Rpb24gYWRkQ2hhcih0ZXJtaW5hbCwgY2hhcikge1xuICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgdGVybWluYWwuZW50cmllcyxcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLFxuICAgIGNyZWF0ZVByb21wdChcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wcmVDdXJzb3IgKyBjaGFyLFxuICAgICAgdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3IpKTtcbn1cblxuZnVuY3Rpb24gY29tcGxldGVXb3JkKHRlcm1pbmFsLCBnZXRDYW5kaWRhdGVzKSB7XG4gIGlmIChnZXRDYW5kaWRhdGVzID09IG51bGwpIHtcbiAgICBnZXRDYW5kaWRhdGVzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgcmVzdWx0cztcbiAgICAgIHJldHVybiAocmVzdWx0cyA9IFt7IGVmZmVjdDogZmFsc2UsIHZhbHVlOiB2YWx1ZSB9XSk7IC8vIGNvdXBsaW5nIHRvIGxpc3AgaW1wbGVtZW50YXRpb25cbiAgICB9O1xuICB9XG5cbiAgdmFyIGNvbW1hbmRUZXh0ID0gdGVybWluYWwucHJvbXB0LnByZUN1cnNvcjtcbiAgdmFyIHNwbGl0Q29tbWFuZCA9IGdldFByZWZpeChjb21tYW5kVGV4dCk7XG4gIHZhciBjYW5kaWRhdGVzID0gZ2V0Q2FuZGlkYXRlcyhzcGxpdENvbW1hbmRbMV0pO1xuICB2YXIgbGVuZ3RoID0gY2FuZGlkYXRlcy5sZW5ndGg7XG5cbiAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0ZXJtaW5hbDtcbiAgfVxuXG4gIHZhciBlbnRyaWVzLCBwcm9tcHQ7XG5cbiAgaWYgKGxlbmd0aCA9PT0gMSkge1xuICAgIGVudHJpZXMgPSB0ZXJtaW5hbC5lbnRyaWVzO1xuICAgIHByb21wdCA9IGNyZWF0ZVByb21wdChcbiAgICAgIHNwbGl0Q29tbWFuZFswXSArIGNhbmRpZGF0ZXNbMF0gKyAnICcgKyB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcixcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yKTtcbiAgfSBlbHNlIHtcbiAgICBlbnRyaWVzID0gdGVybWluYWwuZW50cmllcy5jb25jYXQoXG4gICAgICBbeyB0eXBlOiAnY29tbWFuZCcsIHZhbHVlOiBleHRyYWN0Q29tbWFuZCh0ZXJtaW5hbC5wcm9tcHQpIH1dLFxuICAgICAgW3sgdHlwZTogJ2NvbXBsZXRpb24nLCB2YWx1ZTogY2FuZGlkYXRlcy5qb2luKCcgJykgfV0pO1xuICAgIHByb21wdCA9IHRlcm1pbmFsLnByb21wdDtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChlbnRyaWVzLCB0ZXJtaW5hbC5wcm9tcHRzLCBwcm9tcHQpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVMZWZ0Q2hhcih0ZXJtaW5hbCkge1xuICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgdGVybWluYWwuZW50cmllcywgXG4gICAgdGVybWluYWwucHJvbXB0cyxcbiAgICBjcmVhdGVQcm9tcHQoXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucHJlQ3Vyc29yLnNsaWNlKDAsIC0xKSxcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByZUN1cnNvcih0ZXJtaW5hbCkge1xuICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgdGVybWluYWwuZW50cmllcywgXG4gICAgdGVybWluYWwucHJvbXB0cywgXG4gICAgY3JlYXRlUHJvbXB0KCcnLCB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcikpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVSaWdodENoYXIodGVybWluYWwpIHtcbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgIHRlcm1pbmFsLmVudHJpZXMsIFxuICAgIHRlcm1pbmFsLnByb21wdHMsIFxuICAgIGNyZWF0ZVByb21wdChcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wcmVDdXJzb3IsXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvci5zbGljZSgxKSkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVXb3JkKHRlcm1pbmFsKSB7XG4gIHZhciBwcmVDdXJzb3IgPSB0ZXJtaW5hbC5wcm9tcHQucHJlQ3Vyc29yO1xuICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgdGVybWluYWwuZW50cmllcywgXG4gICAgdGVybWluYWwucHJvbXB0cywgXG4gICAgY3JlYXRlUHJvbXB0KFxuICAgICAgcHJlQ3Vyc29yLnNsaWNlKDAsIHByZUN1cnNvci5zbGljZSgwLCAtMSkubGFzdEluZGV4T2YoJyAnKSArIDEpLFxuICAgICAgdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3IpKTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdENvbW1hbmQocHJvbXB0KSB7XG4gIHJldHVybiAocHJvbXB0LnByZUN1cnNvciArIHByb21wdC5wb3N0Q3Vyc29yKS50cmltKCk7XG59XG5cbmZ1bmN0aW9uIGdldFByZWZpeChjb21tYW5kKSB7XG4gIHZhciByZWdleCA9IC9eKC4qW1xcc1xcKFxcKVxcW1xcXV0pKFteXFwoXFwpXFxbXFxdXSopLztcbiAgdmFyIG1hdGNoID0gcmVnZXguZXhlYyhjb21tYW5kKTtcbiAgcmV0dXJuIG1hdGNoID09IG51bGxcbiAgICA/IFsnJywgY29tbWFuZF1cbiAgICA6IFttYXRjaFsxXSwgbWF0Y2hbMl1dO1xufVxuXG5mdW5jdGlvbiBtb3ZlQ3Vyc29yTGVmdCh0ZXJtaW5hbCkge1xuICB2YXIgcHJlQ3Vyc29yID0gdGVybWluYWwucHJvbXB0LnByZUN1cnNvcjtcbiAgdmFyIHByZUN1cnNvckxlbmd0aCA9IHByZUN1cnNvci5sZW5ndGg7XG4gIGlmIChwcmVDdXJzb3JMZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdGVybWluYWw7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBvc3RDdXJzb3IgPSB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcjtcbiAgICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgICB0ZXJtaW5hbC5lbnRyaWVzLFxuICAgICAgdGVybWluYWwucHJvbXB0cyxcbiAgICAgIGNyZWF0ZVByb21wdChcbiAgICAgICAgcHJlQ3Vyc29yLnNsaWNlKDAsIC0xKSxcbiAgICAgICAgcHJlQ3Vyc29yW3ByZUN1cnNvckxlbmd0aCAtIDFdICsgcG9zdEN1cnNvcikpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdmVDdXJzb3JSaWdodCh0ZXJtaW5hbCkge1xuICB2YXIgcG9zdEN1cnNvciA9IHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yO1xuICBpZiAocG9zdEN1cnNvci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdGVybWluYWw7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHByZUN1cnNvciA9IHRlcm1pbmFsLnByb21wdC5wcmVDdXJzb3I7XG4gICAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgICAgdGVybWluYWwuZW50cmllcyxcbiAgICAgIHRlcm1pbmFsLnByb21wdHMsXG4gICAgICBjcmVhdGVQcm9tcHQoXG4gICAgICAgIHByZUN1cnNvciArIHBvc3RDdXJzb3JbMF0sXG4gICAgICAgIHBvc3RDdXJzb3Iuc2xpY2UoMSkpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlQ3Vyc29yVG9FbmQodGVybWluYWwpIHtcbiAgdmFyIHByb21wdCA9IHRlcm1pbmFsLnByb21wdDtcbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgIHRlcm1pbmFsLmVudHJpZXMsXG4gICAgdGVybWluYWwucHJvbXB0cyxcbiAgICBjcmVhdGVQcm9tcHQocHJvbXB0LnByZUN1cnNvciArIHByb21wdC5wb3N0Q3Vyc29yLCAnJykpO1xufVxuXG5mdW5jdGlvbiBtb3ZlQ3Vyc29yVG9TdGFydCh0ZXJtaW5hbCkge1xuICB2YXIgcHJvbXB0ID0gdGVybWluYWwucHJvbXB0O1xuICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgdGVybWluYWwuZW50cmllcyxcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLFxuICAgIGNyZWF0ZVByb21wdCgnJywgcHJvbXB0LnByZUN1cnNvciArIHByb21wdC5wb3N0Q3Vyc29yKSk7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb21wdChwcm9tcHQpIHtcbiAgcmV0dXJuIGNyZWF0ZVByb21wdChleHRyYWN0Q29tbWFuZChwcm9tcHQpLCAnJyk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdCh0ZXJtaW5hbCwgdHJhbnNmb3JtKSB7XG4gIHZhciBuZXdDYWNoZWRQcm9tcHRNYXliZSwgbmV3RnV0dXJlO1xuXG4gIGlmICh0cmFuc2Zvcm0gPT0gbnVsbCkge1xuICAgIHRyYW5zZm9ybSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIHJlc3VsdHM7XG4gICAgICByZXR1cm4gKHJlc3VsdHMgPSBbeyBlZmZlY3Q6IGZhbHNlLCB2YWx1ZTogdmFsdWUgfV0pOyAvLyBjb3VwbGluZyB0byBsaXNwIGltcGxlbWVudGF0aW9uXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjb21tYW5kVGV4dCA9IGV4dHJhY3RDb21tYW5kKHRlcm1pbmFsLnByb21wdCk7XG4gIHZhciByZXN1bHRzID0gdHJhbnNmb3JtKGNvbW1hbmRUZXh0KTtcbiAgdmFyIGRpc3BsYXlFbnRyaWVzID0gcmVzdWx0c1xuICAgIC5zbGljZSgwLCAtMSlcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIChyZXN1bHQpIHsgcmV0dXJuIHJlc3VsdC5lZmZlY3QudHlwZSA9PT0gJ2Rpc3BsYXknOyB9KVxuICAgIC5tYXAoZnVuY3Rpb24gKGRpc3BsYXkpIHsgcmV0dXJuIHsgdHlwZTogJ2Rpc3BsYXknLCB2YWx1ZTogZGlzcGxheS52YWx1ZSB9fSk7XG5cbiAgdmFyIGxhc3RSZXN1bHQgPSByZXN1bHRzW3Jlc3VsdHMubGVuZ3RoIC0gMV07XG4gIHZhciByZXNwb25zZSA9IGxhc3RSZXN1bHQudmFsdWUgIT0gbnVsbFxuICAgID8gW3sgdHlwZTogJ3Jlc3BvbnNlJywgdmFsdWU6IGxhc3RSZXN1bHQudmFsdWUgfV1cbiAgICA6IFtdO1xuXG4gIHZhciBjb21tYW5kID0geyB0eXBlOiAnY29tbWFuZCcsIHZhbHVlOiBjb21tYW5kVGV4dCB9O1xuICB2YXIgcHJvbXB0ID0gbm9ybWFsaXplUHJvbXB0KHRlcm1pbmFsLnByb21wdCk7XG5cbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgIHRlcm1pbmFsLmVudHJpZXMuY29uY2F0KFtjb21tYW5kXSwgZGlzcGxheUVudHJpZXMsIHJlc3BvbnNlKSxcbiAgICBbcHJvbXB0XS5jb25jYXQodGVybWluYWwucHJvbXB0cyksXG4gICAgY3JlYXRlUHJvbXB0KCcnLCAnJykpO1xufVxuXG5leHBvcnQgY29uc3QgVGVybWluYWwgPSB7XG4gIGFkZENoYXIsXG4gIGNvbXBsZXRlV29yZCxcbiAgZGVsZXRlTGVmdENoYXIsXG4gIGRlbGV0ZVByZUN1cnNvcixcbiAgZGVsZXRlUmlnaHRDaGFyLFxuICBkZWxldGVXb3JkLFxuICBtb3ZlQ3Vyc29yTGVmdCxcbiAgbW92ZUN1cnNvclJpZ2h0LFxuICBtb3ZlQ3Vyc29yVG9FbmQsXG4gIG1vdmVDdXJzb3JUb1N0YXJ0LFxuICBzdWJtaXRcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVWaWV3cG9ydCB9IGZyb20gJy4uL3R5cGVzL2NyZWF0ZVZpZXdwb3J0JztcbmltcG9ydCB7IGNyZWF0ZUZyYW1lIH0gZnJvbSAnLi4vdHlwZXMvY3JlYXRlRnJhbWUnO1xuaW1wb3J0IHsgY3JlYXRlVGVybWluYWwgfSBmcm9tICcuLi90eXBlcy9jcmVhdGVUZXJtaW5hbCc7XG5pbXBvcnQgeyBGcmFtZSB9IGZyb20gJy4vZnJhbWUnO1xuaW1wb3J0IHsgVGVybWluYWwgfSBmcm9tICcuL3Rlcm1pbmFsJztcblxuZnVuY3Rpb24gYWRkQ2hhcih2aWV3cG9ydCwgY2hhcikge1xuICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgVGVybWluYWwuYWRkQ2hhcih2aWV3cG9ydC50ZXJtaW5hbCwgY2hhciksXG4gICAgdmlld3BvcnQuZnJhbWUpO1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZVdvcmQodmlld3BvcnQsIGdldENhbmRpZGF0ZXMpIHtcbiAgdmFyIGZyYW1lID0gdmlld3BvcnQuZnJhbWU7XG4gIHZhciBuZXdUZXJtaW5hbCA9XG4gICAgVGVybWluYWwuY29tcGxldGVXb3JkKHJlZnJlc2hUZXJtaW5hbCh2aWV3cG9ydCksIGdldENhbmRpZGF0ZXMpO1xuICB2YXIgZGlmZiA9IG5ld1Rlcm1pbmFsLmVudHJpZXMubGVuZ3RoIC0gdmlld3BvcnQudGVybWluYWwuZW50cmllcy5sZW5ndGg7XG4gIHJldHVybiBjcmVhdGVWaWV3cG9ydChcbiAgICBuZXdUZXJtaW5hbCxcbiAgICBjcmVhdGVGcmFtZShcbiAgICAgIGZyYW1lLm9mZnNldCArIGRpZmYsXG4gICAgICBmcmFtZS5zdGFydCxcbiAgICAgIDApKTtcbn1cblxuZnVuY3Rpb24gY2xlYXIodmlld3BvcnQpIHtcbiAgdmFyIHRlcm1pbmFsID0gdmlld3BvcnQudGVybWluYWw7XG4gIHJldHVybiBjcmVhdGVWaWV3cG9ydChcbiAgICB0ZXJtaW5hbCxcbiAgICBGcmFtZS5jbGVhcih2aWV3cG9ydC5mcmFtZSwgdGVybWluYWwpKTtcbn1cblxuZnVuY3Rpb24gZmFzdEZvcndhcmQodmlld3BvcnQpIHtcbiAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgIHZpZXdwb3J0LnRlcm1pbmFsLFxuICAgIEZyYW1lLmZhc3RGb3J3YXJkKHZpZXdwb3J0LmZyYW1lKSk7XG59XG5cbmZ1bmN0aW9uIG1vZGlmeVRlcm1pbmFsKGZuTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHZpZXdwb3J0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgICAgVGVybWluYWxbZm5OYW1lXShyZWZyZXNoVGVybWluYWwodmlld3BvcnQpKSxcbiAgICAgIEZyYW1lLnJlc2V0UHJvbXB0SW5kZXgodmlld3BvcnQuZnJhbWUpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVmcmVzaFRlcm1pbmFsKHZpZXdwb3J0KSB7XG4gIHZhciB0ZXJtaW5hbCA9IHZpZXdwb3J0LnRlcm1pbmFsO1xuICByZXR1cm4gY3JlYXRlVGVybWluYWwodGVybWluYWwuZW50cmllcywgdGVybWluYWwucHJvbXB0cywgdmlld3BvcnQucHJvbXB0KTtcbn1cblxuZnVuY3Rpb24gcmV3aW5kKHZpZXdwb3J0KSB7XG4gIHZhciB0ZXJtaW5hbCA9IHZpZXdwb3J0LnRlcm1pbmFsO1xuICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgdGVybWluYWwsXG4gICAgRnJhbWUucmV3aW5kKHZpZXdwb3J0LmZyYW1lLCB0ZXJtaW5hbCkpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXQodmlld3BvcnQsIHRyYW5zZm9ybSkge1xuICB2YXIgZnJhbWUgPSB2aWV3cG9ydC5mcmFtZTtcbiAgdmFyIG5ld1Rlcm1pbmFsID0gVGVybWluYWwuc3VibWl0KHJlZnJlc2hUZXJtaW5hbCh2aWV3cG9ydCksIHRyYW5zZm9ybSk7XG4gIHZhciBkaWZmID0gbmV3VGVybWluYWwuZW50cmllcy5sZW5ndGggLSB2aWV3cG9ydC50ZXJtaW5hbC5lbnRyaWVzLmxlbmd0aDtcbiAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgIG5ld1Rlcm1pbmFsLFxuICAgIGNyZWF0ZUZyYW1lKFxuICAgICAgZnJhbWUub2Zmc2V0ICsgZGlmZixcbiAgICAgIGZyYW1lLnN0YXJ0LFxuICAgICAgMCkpO1xufVxuXG5leHBvcnQgY29uc3QgVmlld3BvcnQgPSB7XG4gIGFkZENoYXIsXG4gIGNsZWFyLFxuICBjb21wbGV0ZVdvcmQsXG4gIGRlbGV0ZUxlZnRDaGFyOiBtb2RpZnlUZXJtaW5hbCgnZGVsZXRlTGVmdENoYXInKSxcbiAgZGVsZXRlUHJlQ3Vyc29yOiBtb2RpZnlUZXJtaW5hbCgnZGVsZXRlUHJlQ3Vyc29yJyksXG4gIGRlbGV0ZVJpZ2h0Q2hhcjogbW9kaWZ5VGVybWluYWwoJ2RlbGV0ZVJpZ2h0Q2hhcicpLFxuICBkZWxldGVXb3JkOiBtb2RpZnlUZXJtaW5hbCgnZGVsZXRlV29yZCcpLFxuICBmYXN0Rm9yd2FyZCxcbiAgbW92ZUN1cnNvckxlZnQ6IG1vZGlmeVRlcm1pbmFsKCdtb3ZlQ3Vyc29yTGVmdCcpLFxuICBtb3ZlQ3Vyc29yUmlnaHQ6IG1vZGlmeVRlcm1pbmFsKCdtb3ZlQ3Vyc29yUmlnaHQnKSxcbiAgbW92ZUN1cnNvclRvRW5kOiBtb2RpZnlUZXJtaW5hbCgnbW92ZUN1cnNvclRvRW5kJyksXG4gIG1vdmVDdXJzb3JUb1N0YXJ0OiBtb2RpZnlUZXJtaW5hbCgnbW92ZUN1cnNvclRvU3RhcnQnKSxcbiAgcmV3aW5kLFxuICBzdWJtaXRcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUZyYW1lIH0gZnJvbSAnLi90eXBlcy9jcmVhdGVGcmFtZSc7XG5pbXBvcnQgeyBjcmVhdGVQcm9tcHQgfSBmcm9tICcuL3R5cGVzL2NyZWF0ZVByb21wdCc7XG5pbXBvcnQgeyBjcmVhdGVUZXJtaW5hbCB9IGZyb20gJy4vdHlwZXMvY3JlYXRlVGVybWluYWwnO1xuaW1wb3J0IHsgY3JlYXRlVmlld3BvcnQgfSBmcm9tICcuL3R5cGVzL2NyZWF0ZVZpZXdwb3J0JztcblxuZnVuY3Rpb24gZ2V0SW5pdGlhbE1vZGVsKCkge1xuICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgY3JlYXRlVGVybWluYWwoW10sIFtdLCBjcmVhdGVQcm9tcHQoJycsICcnKSksXG4gICAgY3JlYXRlRnJhbWUoMCwgMCwgMCkpO1xufVxuXG5leHBvcnQgeyBnZXRJbml0aWFsTW9kZWwgfTtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVGcmFtZSA9IGZ1bmN0aW9uIChvZmZzZXQsIHN0YXJ0LCBwcm9tcHRJbmRleCkge1xuICByZXR1cm4ge1xuICAgIG9mZnNldDogb2Zmc2V0LFxuICAgIHN0YXJ0OiBzdGFydCxcbiAgICBwcm9tcHRJbmRleDogcHJvbXB0SW5kZXhcbiAgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgY3JlYXRlUHJvbXB0ID0gZnVuY3Rpb24gKHByZUN1cnNvciwgcG9zdEN1cnNvcikge1xuICByZXR1cm4ge1xuICAgIHByZUN1cnNvcjogcHJlQ3Vyc29yLFxuICAgIHBvc3RDdXJzb3I6IHBvc3RDdXJzb3JcbiAgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgY3JlYXRlVGVybWluYWwgPSAgZnVuY3Rpb24gKGVudHJpZXMsIHByb21wdHMsIGN1cnJlbnRQcm9tcHQpIHtcbiAgcmV0dXJuICB7XG4gICAgZW50cmllczogZW50cmllcyxcbiAgICBwcm9tcHRzOiBwcm9tcHRzLFxuICAgIHByb21wdDogY3VycmVudFByb21wdFxuICB9O1xufTtcbiIsImZ1bmN0aW9uIGdldFByb21wdCh0ZXJtaW5hbCwgZnJhbWUpIHtcbiAgcmV0dXJuIGZyYW1lLnByb21wdEluZGV4ID09PSAwXG4gICAgPyB0ZXJtaW5hbC5wcm9tcHRcbiAgICA6IHRlcm1pbmFsLnByb21wdHNbZnJhbWUucHJvbXB0SW5kZXggLSAxXTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVZpZXdwb3J0ID0gZnVuY3Rpb24gKHRlcm1pbmFsLCBmcmFtZSkge1xuICByZXR1cm4ge1xuICAgIHRlcm1pbmFsOiB0ZXJtaW5hbCxcbiAgICBmcmFtZTogZnJhbWUsXG4gICAgcHJvbXB0OiBnZXRQcm9tcHQodGVybWluYWwsIGZyYW1lKVxuICB9O1xufTtcbiIsImltcG9ydCB7IGRpZmYgfSBmcm9tICcuLi9yaWJvc29tZS9kaWZmJztcbmltcG9ydCB7IEVSTEtJTkcgfSBmcm9tICcuL3ZpZXcvcmVjcmVhdGVDb25zb2xlJztcbmltcG9ydCB7IG1vZGlmeUVsZW1lbnQgfSBmcm9tICcuLi9yaWJvc29tZS9pbnRlcnByZXRlcic7XG5cbmZ1bmN0aW9uIHJlbmRlcihfdmlld01vZGVsLCByb290Q2hpbGQsIGNvbnRyb2xDb25maWcsIHNjcm9sbCkge1xuICB2YXIgdmlld01vZGVsID0gX3ZpZXdNb2RlbDtcbiAgcmV0dXJuIGZ1bmN0aW9uIChtb2RlbCkge1xuICAgIHZhciBsYWJlbHMgPSB7IHByb21wdExhYmVsOiBjb250cm9sQ29uZmlnLnByb21wdExhYmVsIH07XG4gICAgdmFyIG5ld1ZpZXdNb2RlbCA9IEVSTEtJTkcobGFiZWxzLCBtb2RlbCk7XG4gICAgbW9kaWZ5RWxlbWVudChyb290Q2hpbGQsIGRpZmYobmV3Vmlld01vZGVsLCB2aWV3TW9kZWwpKTtcblxuICAgIGNvbnRyb2xDb25maWcudmlld3BvcnQgPSBtb2RlbDtcbiAgICB2aWV3TW9kZWwgPSBuZXdWaWV3TW9kZWw7XG5cbiAgICBzY3JvbGwoKTtcbiAgfTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnRUeXBlLCBldmVudEhhbmRsZXIpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBzdXByZXNzRGVmYXVsdChldmVudEhhbmRsZXIpKTtcbn1cblxuZnVuY3Rpb24gc3VwcmVzc0RlZmF1bHQoaGFuZGxlRXZlbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGFuZGxlRXZlbnQoZXZlbnQpO1xuICB9O1xufVxuXG5leHBvcnQgeyBzdWJzY3JpYmUgfTtcbiIsImltcG9ydCB7IFNQQU4gfSBmcm9tICcuLi8uLi9yaWJvc29tZS9lbGVtZW50cyc7XG5cbmZ1bmN0aW9uIEVSTF9FTlRSWSh0ZXh0KSB7XG4gIHJldHVybiBTUEFOKF9lbnRyeUNvbmZpZywgdGV4dCArIG5ld2xpbmUpO1xufVxuXG5mdW5jdGlvbiBFUkxfSU5QVVQocHJvbXB0VGV4dCwgcHJlVGV4dCwgcG9zdFRleHQpIHtcbiAgcmV0dXJuIFNQQU4oXG4gICAgX2lucHV0Q29uZmlnLFxuICAgIEVSTF9QUk9NUFQocHJvbXB0VGV4dCksXG4gICAgRVJMX1BSRShwcmVUZXh0KSxcbiAgICBFUkxfQ1VSU09SLFxuICAgIEVSTF9QT1NUKHBvc3RUZXh0KSk7XG59XG5cbmZ1bmN0aW9uIEVSTF9QT1NUKHRleHQpIHtcbiAgcmV0dXJuIFNQQU4oX3Bvc3RDb25maWcsIHRleHQpO1xufVxuXG5mdW5jdGlvbiBFUkxfUFJFKHRleHQpIHtcbiAgcmV0dXJuIFNQQU4oX3ByZUNvbmZpZywgdGV4dCk7XG59XG5cbmZ1bmN0aW9uIEVSTF9QUk9NUFQodGV4dCkge1xuICByZXR1cm4gU1BBTihfcHJvbXB0Q29uZmlnLCB0ZXh0KTtcbn1cblxudmFyIGVtcHR5U3RyaW5nID0gJyc7XG52YXIgbmV3bGluZSA9ICdcXG4nO1xudmFyIHNwYWNlID0gJyAnO1xudmFyIHVuZGVyc2NvcmUgPSAnXyc7XG5cbnZhciBFUkxfQ1VSU09SID0gU1BBTihcbiAge1xuICAgIGlkOiAnZXJsLWN1cnNvcicsXG4gICAgY2xhc3NlczogeyAnZXJsLWN1cnNvcic6IHRydWUsICdlcmwtY3Vyc29yJzogdHJ1ZSB9LFxuICB9LFxuICB1bmRlcnNjb3JlKTtcblxudmFyIF9lbnRyeUNvbmZpZyA9IHtcbiAgY2xhc3NlczogeyAnZXJsLWVudHJ5JzogdHJ1ZSwgJ2VybC1saW5lJzogdHJ1ZSB9LFxufTtcblxudmFyIF9pbnB1dENvbmZpZyA9IHtcbiAgaWQ6ICdlcmwtaW5wdXQnLFxuICBjbGFzc2VzOiB7ICdlcmwtaW5wdXQnOiB0cnVlLCAnZXJsLWxpbmUnOiB0cnVlIH1cbn07XG5cbnZhciBfcG9zdENvbmZpZyA9IHtcbiAgaWQ6ICdlcmwtcG9zdCcsXG4gIGNsYXNzZXM6IHsgJ2VybC1wb3N0JzogdHJ1ZSB9LFxuICBzdHlsZTogeyAncG9zaXRpb24nOiAncmVsYXRpdmUnIH1cbn07XG5cbnZhciBfcHJlQ29uZmlnID0ge1xuICAgaWQ6ICdlcmwtcHJlJyxcbiAgIGNsYXNzZXM6IHsgJ2VybC1wcmUnOiB0cnVlIH1cbn07XG5cbnZhciBfcHJvbXB0Q29uZmlnID0ge1xuICBpZDogJ2VybC1wcm9tcHQnLFxuICBjbGFzc2VzOiB7ICdlcmwtcHJvbXB0JzogdHJ1ZSwgJ2VybC1wcm9tcHQnOiB0cnVlIH1cbn07XG5cbmV4cG9ydCB7XG4gIEVSTF9DVVJTT1IsXG4gIEVSTF9FTlRSWSxcbiAgRVJMX0lOUFVULFxuICBFUkxfUE9TVCxcbiAgRVJMX1BSRSxcbiAgRVJMX1BST01QVFxufTtcbiIsImltcG9ydCB7IGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQgfSBmcm9tICcuLi8uLi9yaWJvc29tZS9pbnRlcnByZXRlcic7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVWaWV3KHJvb3QsIHZpZXdNb2RlbCkge1xuICBjcmVhdGVBbmRBdHRhY2hFbGVtZW50KHJvb3QsIHZpZXdNb2RlbCk7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxpemVWaWV3IH07XG4iLCJpbXBvcnQge1xuICBFUkxfQ1VSU09SLFxuICBFUkxfRU5UUlksXG4gIEVSTF9JTlBVVCxcbiAgRVJMX1BPU1QsXG4gIEVSTF9QUkUsXG4gIEVSTF9QUk9NUFRcbn0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuaW1wb3J0IHtcbiAgRElWLFxuICBIMSxcbiAgSDQsXG4gIFNFQ1RJT04sXG4gIFNQQU5cbn0gZnJvbSAnLi4vLi4vcmlib3NvbWUvZWxlbWVudHMnO1xuXG52YXIgRVJMX0hFQURFUiA9IFNFQ1RJT04oXG4gICAge1xuICAgICAgaWQ6ICdlcmwtaGVhZGVyJyxcbiAgICAgIGNsYXNzZXM6IHsgJ2hlYWQnOiB0cnVlIH1cbiAgICB9LFxuICAgIEgxKG51bGwsICdFcmxrw7ZuaWcgTGlzcCBDb25zb2xlXFxuJyksXG4gICAgSDQobnVsbCwgJ0EgdGVybWluYWwgZW11bGF0b3IgYW5kIGxpc3AgaW50ZXJwcmV0ZXJcXG4nKSk7XG5cbnZhciBlbXB0eVN0cmluZyA9ICcnO1xuXG5mdW5jdGlvbiBFUkxLSU5HKHByZWZpeGVzLCB2aWV3cG9ydCkge1xuICB2YXIgcHJvbXB0TGFiZWwgPSBwcmVmaXhlcy5wcm9tcHRMYWJlbDtcbiAgdmFyIHByb21wdCA9IHZpZXdwb3J0LnByb21wdDtcbiAgdmFyIGZyYW1lID0gdmlld3BvcnQuZnJhbWU7XG5cbiAgdmFyIGVudHJpZXMgPSB2aWV3cG9ydC50ZXJtaW5hbC5lbnRyaWVzXG4gICAgLnNsaWNlKGZyYW1lLnN0YXJ0LCBmcmFtZS5zdGFydCArIGZyYW1lLm9mZnNldClcbiAgICAubWFwKHNwZWNpZnlFbnRyeS5iaW5kKG51bGwsIHByZWZpeGVzKSk7XG5cbiAgdmFyIHByZUN1cnNvciA9IHByb21wdC5wcmVDdXJzb3IgIT0gbnVsbCA/IHByb21wdC5wcmVDdXJzb3IgOiBlbXB0eVN0cmluZztcbiAgdmFyIHBvc3RDdXJzb3IgPSBwcm9tcHQucG9zdEN1cnNvciAhPSBudWxsID8gcHJvbXB0LnBvc3RDdXJzb3IgOiBlbXB0eVN0cmluZztcblxuICByZXR1cm4gRElWKFxuICAgIF9lcmxrb25pZ0NvbmZpZyxcbiAgICBESVYoXG4gICAgICBudWxsLFxuICAgICAgRVJMX0hFQURFUixcbiAgICAgIERJVihcbiAgICAgICAgX3Rlcm1pbmFsQ29uZmlnLFxuICAgICAgICBYX1NDUk9MTEJBUixcbiAgICAgICAgWV9TQ1JPTExCQVIsXG4gICAgICAgIERJVihcbiAgICAgICAgICBfZXJsVmlld3BvcnRDb25maWcsXG4gICAgICAgICAgZW50cmllcyxcbiAgICAgICAgICBFUkxfSU5QVVQocHJvbXB0TGFiZWwsIHByb21wdC5wcmVDdXJzb3IsIHByb21wdC5wb3N0Q3Vyc29yKSkpKSk7XG59XG5cbnZhciBYX1NDUk9MTEJBUiA9IERJVihcbiAge1xuICAgIGlkOiAnZXJsLXgtc2Nyb2xsLXRyYWNrJyxcbiAgICBjbGFzc2VzOiB7XG4gICAgICAnZXJsLXgtc2Nyb2xsLXRyYWNrJzogdHJ1ZSxcbiAgICAgICdlcmwtc2Nyb2xsLXRyYWNrJzogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgRElWKHtcbiAgICBpZDogJ2VybC14LXNjcm9sbC10aHVtYicsXG4gICAgY2xhc3Nlczoge1xuICAgICAgJ2VybC14LXNjcm9sbC10aHVtYic6IHRydWUsXG4gICAgICAnZXJsLXNjcm9sbC10aHVtYic6IHRydWVcbiAgICB9XG4gIH0pKTtcblxudmFyIFlfU0NST0xMQkFSID0gRElWKFxuICB7XG4gICAgaWQ6ICdlcmwteS1zY3JvbGwtdHJhY2snLFxuICAgIGNsYXNzZXM6IHtcbiAgICAgICdlcmwteS1zY3JvbGwtdHJhY2snOiB0cnVlLFxuICAgICAgJ2VybC1zY3JvbGwtdHJhY2snOiB0cnVlXG4gICAgfVxuICB9LFxuICBESVYoe1xuICAgIGlkOiAnZXJsLXktc2Nyb2xsLXRodW1iJyxcbiAgICBjbGFzc2VzOiB7XG4gICAgICAnZXJsLXktc2Nyb2xsLXRodW1iJzogdHJ1ZSxcbiAgICAgICdlcmwtc2Nyb2xsLXRodW1iJzogdHJ1ZVxuICAgIH1cbiAgfSkpO1xuXG52YXIgZGVmYXVsdENvbXBsZXRpb25MYWJlbCA9ICcgICc7XG52YXIgZGVmYXVsdERpc3BsYXlMYWJlbCA9ICcnO1xudmFyIGRlZmF1bHRFcnJvckxhYmVsID0gJy4uLj4gJztcbnZhciBkZWZhdWx0UHJvbXB0TGFiZWwgPSAnPiAnO1xudmFyIGRlZmF1bHRSZXNwb25zZUxhYmVsID0gJz09PiAnO1xuXG52YXIgZGVmYXVsdENvbXBsZXRpb25MYWJlbCA9ICcgICc7XG52YXIgZGVmYXVsdERpc3BsYXlMYWJlbCA9ICcnO1xudmFyIGRlZmF1bHRFcnJvckxhYmVsID0gJy4uLj4gJztcbnZhciBkZWZhdWx0UHJvbXB0TGFiZWwgPSAnPiAnO1xudmFyIGRlZmF1bHRSZXNwb25zZUxhYmVsID0gJz09PiAnO1xuXG5mdW5jdGlvbiBzcGVjaWZ5RW50cnkocHJlZml4ZXMsIGNvbXBvbmVudCkge1xuICB2YXIgY29tcGxldGlvbkxhYmVsID0gcHJlZml4ZXMuY29tcGxldGlvbkxhYmVsIHx8IGRlZmF1bHRDb21wbGV0aW9uTGFiZWw7XG4gIHZhciBkaXNwbGF5TGFiZWwgPSBwcmVmaXhlcy5kaXNwbGF5TGFiZWwgfHwgZGVmYXVsdERpc3BsYXlMYWJlbDtcbiAgdmFyIGVycm9yTGFiZWwgPSBwcmVmaXhlcy5lcnJvckxhYmVsIHx8IGRlZmF1bHRFcnJvckxhYmVsO1xuICB2YXIgcHJvbXB0TGFiZWwgPSBwcmVmaXhlcy5wcm9tcHRMYWJlbCB8fCBkZWZhdWx0UHJvbXB0TGFiZWw7XG4gIHZhciByZXNwb25zZUxhYmVsID0gcHJlZml4ZXMucmVzcG9uc2VMYWJlbCB8fCBkZWZhdWx0UmVzcG9uc2VMYWJlbDtcblxuICB2YXIgZW50cnk7XG4gIHN3aXRjaCAoY29tcG9uZW50LnR5cGUpIHtcbiAgICBjYXNlICdjb21tYW5kJzpcbiAgICAgIGVudHJ5ID0gcHJvbXB0TGFiZWwgKyBjb21wb25lbnQudmFsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyZXNwb25zZSc6XG4gICAgICBlbnRyeSA9IHJlc3BvbnNlTGFiZWwgKyBjb21wb25lbnQudmFsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkaXNwbGF5JzpcbiAgICAgIGVudHJ5ID0gZGlzcGxheUxhYmVsICsgY29tcG9uZW50LnZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY29tcGxldGlvbic6XG4gICAgICBlbnRyeSA9IGNvbXBsZXRpb25MYWJlbCArIGNvbXBvbmVudC52YWx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgIGVudHJ5ID0gZXJyb3JMYWJlbCArIGNvbXBvbmVudC52YWx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgY29tcG9uZW50IHR5cGUnKTtcbiAgfVxuICByZXR1cm4gRVJMX0VOVFJZKGVudHJ5KTtcbn1cblxudmFyIF9lcmxrb25pZ0NvbmZpZyA9IHtcbiAgaWQ6ICdlcmxrb25pZycsXG4gIGNsYXNzZXM6IHsgJ2VybGtvbmlnJzogdHJ1ZSwgJ2NvbnRhaW5lcic6IHRydWUgfVxufTtcbnZhciBfY29uc29sZUNvbmZpZyA9IHsgaWQ6ICdlcmwtY29uc29sZScgfTtcbnZhciBfdGVybWluYWxDb25maWcgPSB7IGNsYXNzZXM6IHsgJ3Rlcm1pbmFsJzogdHJ1ZSB9fTtcbnZhciBfZXJsVmlld3BvcnRDb25maWcgPSB7IGNsYXNzZXM6IHsgJ2VybC12aWV3cG9ydCc6IHRydWUgfX07XG5cbmV4cG9ydCB7IEVSTEtJTkcgfTtcbiIsImZ1bmN0aW9uIGdldEN1cnNvck9mZnNldChjdXJzb3IsIG5vZGUpIHtcbiAgdmFyIG1hcmdpbiA9IDU7XG4gIHJldHVybiBjdXJzb3Iub2Zmc2V0TGVmdCArIGN1cnNvci5vZmZzZXRXaWR0aCArIG1hcmdpbiAtIG5vZGUub2Zmc2V0V2lkdGg7XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnQoaWQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGVyY2VudGFnZShudW1iZXIpIHtcbiAgcmV0dXJuICgxMDAgKiBudW1iZXIpICsgJyUnO1xufVxuXG5mdW5jdGlvbiBnZXRWaWV3cG9ydCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VybC12aWV3cG9ydCcpWzBdO1xufVxuXG5mdW5jdGlvbiBvbkV2ZW50KGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gX3Njcm9sbChub2RlLCBjdXJzb3IpIHtcbiAgbm9kZS5zY3JvbGxUb3AgPSBub2RlLnNjcm9sbEhlaWdodCAtIG5vZGUuY2xpZW50SGVpZ2h0O1xuICBub2RlLnNjcm9sbExlZnQgPSBnZXRDdXJzb3JPZmZzZXQoY3Vyc29yLCBub2RlKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsKGNzc1Njcm9sbGJhckRldGVjdGVkKSB7XG4gIGlmIChjc3NTY3JvbGxiYXJEZXRlY3RlZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY3Vyc29yID0gZ2V0RWxlbWVudCgnZXJsLWN1cnNvcicpO1xuICAgICAgX3Njcm9sbChnZXRWaWV3cG9ydCgpLCBjdXJzb3IpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciB2aWV3cG9ydCA9IGdldFZpZXdwb3J0KCk7XG4gICAgdmFyIGN1cnNvciA9IGdldEVsZW1lbnQoJ2VybC1jdXJzb3InKTtcbiAgICB2YXIgeFRyYWNrID0gZ2V0RWxlbWVudCgnZXJsLXgtc2Nyb2xsLXRyYWNrJyk7XG4gICAgdmFyIHhUaHVtYiA9IGdldEVsZW1lbnQoJ2VybC14LXNjcm9sbC10aHVtYicpO1xuICAgIHZhciB5VHJhY2sgPSBnZXRFbGVtZW50KCdlcmwteS1zY3JvbGwtdHJhY2snKTtcbiAgICB2YXIgeVRodW1iID0gZ2V0RWxlbWVudCgnZXJsLXktc2Nyb2xsLXRodW1iJyk7XG4gICAgdmFyIHByb21wdCA9IGdldEVsZW1lbnQoJ2VybC1wcm9tcHQnKTtcblxuICAgIHZhciB2aWV3cG9ydFdpZHRoID0gdmlld3BvcnQub2Zmc2V0V2lkdGg7XG4gICAgdmFyIHZpZXdwb3J0SGVpZ2h0ID0gdmlld3BvcnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgc2V0WFRodW1iVmlzaWJpbGl0eSh2aWV3cG9ydCwgdmlld3BvcnRXaWR0aCwgeFRyYWNrLCB4VGh1bWIsIGN1cnNvciwgcHJvbXB0KTtcbiAgICBzZXRZVGh1bWJWaXNpYmlsaXR5KHZpZXdwb3J0LCB2aWV3cG9ydEhlaWdodCwgeVRyYWNrLCB5VGh1bWIsIGN1cnNvcik7XG4gICAgc2Nyb2xsSG9yaXpvbnRhbGx5KHZpZXdwb3J0LCB2aWV3cG9ydFdpZHRoLCB4VHJhY2ssIHhUaHVtYik7XG4gICAgc2Nyb2xsVmVydGljYWxseSh2aWV3cG9ydCwgdmlld3BvcnRIZWlnaHQsIHlUcmFjaywgeVRodW1iKTtcblxuICAgIF9zY3JvbGwodmlld3BvcnQsIGN1cnNvcik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNjcm9sbEJhckhvcml6b250YWxseSh4VGh1bWIsIGxlZnRSYXRpbykge1xuICB4VGh1bWIuc3R5bGUubGVmdCA9IGdldFBlcmNlbnRhZ2UobGVmdFJhdGlvKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsQmFyVmVydGljYWxseSh5VGh1bWIsIHRvcFJhdGlvKSB7XG4gIHlUaHVtYi5zdHlsZS50b3AgPSBnZXRQZXJjZW50YWdlKHRvcFJhdGlvKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsQ29udGVudEhvcml6b250YWxseSh2aWV3cG9ydCwgbGVmdFJhdGlvKSB7XG4gIHZpZXdwb3J0LnNjcm9sbExlZnQgPSBsZWZ0UmF0aW8gKiB2aWV3cG9ydC5zY3JvbGxXaWR0aDtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsQ29udGVudFZlcnRpY2FsbHkodmlld3BvcnQsIHRvcFJhdGlvKSB7XG4gIHZpZXdwb3J0LnNjcm9sbFRvcCA9IHRvcFJhdGlvICogdmlld3BvcnQuc2Nyb2xsSGVpZ2h0O1xufVxuXG5mdW5jdGlvbiBzY3JvbGxWZXJ0aWNhbGx5KHZpZXdwb3J0LCB2aWV3cG9ydEhlaWdodCwgeVRyYWNrLCB5VGh1bWIpIHtcbiAgdmFyIHlUaHVtYkhlaWdodCA9IHlUaHVtYi5vZmZzZXRIZWlnaHQ7XG4gIHZhciB5VHJhY2tIZWlnaHQgPSB5VHJhY2sub2Zmc2V0SGVpZ2h0O1xuICB2YXIgdWxsYWdlID0geVRyYWNrSGVpZ2h0IC0geVRodW1iSGVpZ2h0O1xuXG4gIGZ1bmN0aW9uIG1vdXNlTW92ZV92ZXJ0aWNhbChldmVudCkge1xuICAgIHZhciBfdG9wID0gZXZlbnQuY2xpZW50WSAtIHlUcmFjay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgdmFyIHRvcCA9IF90b3AgPCAwID8gMCA6IF90b3AgPiB1bGxhZ2UgPyB1bGxhZ2UgOiBfdG9wO1xuICAgIHZhciB0b3BSYXRpbyA9IHRvcCAvIHlUcmFja0hlaWdodDtcbiAgICBzY3JvbGxCYXJWZXJ0aWNhbGx5KHlUaHVtYiwgdG9wUmF0aW8pO1xuICAgIHNjcm9sbENvbnRlbnRWZXJ0aWNhbGx5KHZpZXdwb3J0LCB0b3BSYXRpbyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbW91c2VEb3duX3ZlcnRpY2FsKGV2ZW50KSB7XG4gICAgeVRodW1iLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMCwgODAsIDApJztcbiAgICBvbkV2ZW50KCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVfdmVydGljYWwpO1xuICAgIG9uRXZlbnQoJ21vdXNldXAnLCBtb3VzZVVwX3ZlcnRpY2FsKTtcbiAgfTtcblxuICBmdW5jdGlvbiBtb3VzZVVwX3ZlcnRpY2FsKGV2ZW50KSB7XG4gICAgeVRodW1iLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDU1LCA1MywgNTAsIDAuNSknO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZV92ZXJ0aWNhbCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBfdmVydGljYWwpO1xuICB9O1xuXG4gIHlUaHVtYi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25fdmVydGljYWwpO1xuICB5VGh1bWIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duX3ZlcnRpY2FsKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsSG9yaXpvbnRhbGx5KHZpZXdwb3J0LCB2aWV3cG9ydFdpZHRoLCB4VHJhY2ssIHhUaHVtYikge1xuICB2YXIgeFRodW1iV2lkdGggPSB4VGh1bWIub2Zmc2V0V2lkdGg7XG4gIHZhciB4VHJhY2tXaWR0aCA9IHhUcmFjay5vZmZzZXRXaWR0aDtcbiAgdmFyIHVsbGFnZSA9IHhUcmFja1dpZHRoIC0geFRodW1iV2lkdGg7XG5cbiAgZnVuY3Rpb24gbW91c2VNb3ZlX2hvcml6b250YWwoZXZlbnQpIHtcbiAgICB2YXIgX2xlZnQgPSBldmVudC5jbGllbnRYIC0geFRyYWNrLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgdmFyIGxlZnQgPSBfbGVmdCA8IDAgPyAwIDogX2xlZnQgPiB1bGxhZ2UgPyB1bGxhZ2UgOiBfbGVmdDtcbiAgICB2YXIgbGVmdFJhdGlvID0gbGVmdCAvIHhUcmFja1dpZHRoO1xuICAgIHNjcm9sbEJhckhvcml6b250YWxseSh4VGh1bWIsIGxlZnRSYXRpbyk7XG4gICAgc2Nyb2xsQ29udGVudEhvcml6b250YWxseSh2aWV3cG9ydCwgbGVmdFJhdGlvKTtcbiAgfTtcblxuICBmdW5jdGlvbiBtb3VzZVVwX2hvcml6b250YWwoZXZlbnQpIHtcbiAgICB4VGh1bWIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoNTUsIDUzLCA1MCwgMC41KSc7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlX2hvcml6b250YWwpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwX2hvcml6b250YWwpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1vdXNlRG93bl9ob3Jpem9udGFsKGV2ZW50KSB7XG4gICAgeFRodW1iLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMCwgODAsIDApJztcbiAgICBvbkV2ZW50KCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVfaG9yaXpvbnRhbCk7XG4gICAgb25FdmVudCgnbW91c2V1cCcsIG1vdXNlVXBfaG9yaXpvbnRhbCk7XG4gIH07XG5cbiAgeFRodW1iLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bl9ob3Jpem9udGFsKTtcbiAgeFRodW1iLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bl9ob3Jpem9udGFsKTtcbn1cblxuZnVuY3Rpb24gc2V0WFRodW1iVmlzaWJpbGl0eSh2aWV3cG9ydCwgdmlld3BvcnRXaWR0aCwgeFRyYWNrLCB4VGh1bWIsIGN1cnNvciwgcHJvbXB0KSB7XG4gIHZhciB4VHJhY2tXaWR0aCA9IHhUcmFjay5vZmZzZXRXaWR0aDtcbiAgdmFyIHRlcm1pbmFsV2lkdGggPSB2aWV3cG9ydC5zY3JvbGxXaWR0aDtcbiAgdmFyIHhUaHVtYlN0eWxlID0geFRodW1iLnN0eWxlO1xuXG4gIGlmICh2aWV3cG9ydFdpZHRoIDwgdGVybWluYWxXaWR0aCkge1xuICAgIHZhciBmdWxsUHJvbXB0T2Zmc2V0V2lkdGggPSBwcm9tcHQub2Zmc2V0TGVmdCArIHByb21wdC5vZmZzZXRXaWR0aDtcbiAgICB2YXIgc3RhcnQgPSBmdWxsUHJvbXB0T2Zmc2V0V2lkdGg7XG4gICAgdmFyIHZpZXdwb3J0UmF0aW8gPSB2aWV3cG9ydFdpZHRoIC8gdGVybWluYWxXaWR0aDtcbiAgICB2YXIgeFRodW1iV2lkdGggPSB2aWV3cG9ydFJhdGlvICogeFRyYWNrV2lkdGg7XG4gICAgdmFyIHZpZXdwb3J0UGVyY2VudGFnZSA9IGdldFBlcmNlbnRhZ2Uodmlld3BvcnRSYXRpbyk7XG4gICAgdmFyIHVsbGFnZSA9IHhUcmFja1dpZHRoIC0geFRodW1iV2lkdGg7XG4gICAgdmFyIHhQb3NpdGlvbiA9IGN1cnNvci5vZmZzZXRMZWZ0ICsgY3Vyc29yLm9mZnNldFdpZHRoIC0gc3RhcnQ7XG4gICAgdmFyIGN1cnNvclJhdGlvID0gKHhQb3NpdGlvbiAvIHRlcm1pbmFsV2lkdGgpICogKHVsbGFnZSAvIHhUcmFja1dpZHRoKTtcbiAgICB2YXIgY3Vyc29yUGVyY2VudGFnZSA9IGdldFBlcmNlbnRhZ2UoY3Vyc29yUmF0aW8pO1xuXG4gICAgeFRodW1iU3R5bGUubGVmdCA9IGN1cnNvclBlcmNlbnRhZ2U7XG4gICAgeFRodW1iU3R5bGUud2lkdGggPSB2aWV3cG9ydFBlcmNlbnRhZ2U7XG4gICAgeFRodW1iU3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgfSBlbHNlIHtcbiAgICB4VGh1bWJTdHlsZS5sZWZ0ID0gMDtcbiAgICB4VGh1bWJTdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICB4VGh1bWJTdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0WVRodW1iVmlzaWJpbGl0eSh2aWV3cG9ydCwgdmlld3BvcnRIZWlnaHQsIHlUcmFjaywgeVRodW1iLCBjdXJzb3IpIHtcbiAgdmFyIHlUcmFja0hlaWdodCA9IHlUcmFjay5vZmZzZXRIZWlnaHQ7XG4gIHZhciB0ZXJtaW5hbEhlaWdodCA9IHZpZXdwb3J0LnNjcm9sbEhlaWdodDtcbiAgdmFyIHlUaHVtYlN0eWxlID0geVRodW1iLnN0eWxlO1xuXG4gIGlmICh2aWV3cG9ydEhlaWdodCA8IHRlcm1pbmFsSGVpZ2h0KSB7XG4gICAgdmFyIHN0YXJ0ID0gdmlld3BvcnQub2Zmc2V0VG9wO1xuICAgIHZhciB2aWV3cG9ydFJhdGlvID0gdmlld3BvcnRIZWlnaHQgLyB0ZXJtaW5hbEhlaWdodDtcbiAgICB2YXIgeVRodW1iSGVpZ2h0ID0gdmlld3BvcnRSYXRpbyAqIHlUcmFja0hlaWdodDtcbiAgICB2YXIgdmlld3BvcnRQZXJjZW50YWdlID0gZ2V0UGVyY2VudGFnZSh2aWV3cG9ydFJhdGlvKTtcbiAgICB2YXIgdWxsYWdlID0geVRyYWNrSGVpZ2h0IC0geVRodW1iSGVpZ2h0O1xuICAgIHZhciB5UG9zaXRpb24gPSBjdXJzb3Iub2Zmc2V0VG9wICsgY3Vyc29yLm9mZnNldEhlaWdodCAtIHN0YXJ0O1xuICAgIHZhciBjdXJzb3JSYXRpbyA9ICh5UG9zaXRpb24gLyB0ZXJtaW5hbEhlaWdodCkgKiAodWxsYWdlIC8geVRyYWNrSGVpZ2h0KTtcbiAgICB2YXIgY3Vyc29yUGVyY2VudGFnZSA9IGdldFBlcmNlbnRhZ2UoY3Vyc29yUmF0aW8pO1xuXG4gICAgeVRodW1iU3R5bGUudG9wID0gY3Vyc29yUGVyY2VudGFnZTtcbiAgICB5VGh1bWJTdHlsZS5oZWlnaHQgPSB2aWV3cG9ydFBlcmNlbnRhZ2U7XG4gICAgeVRodW1iU3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgfSBlbHNlIHtcbiAgICB5VGh1bWJTdHlsZS50b3AgPSAwO1xuICAgIHlUaHVtYlN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICB5VGh1bWJTdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIH1cbn1cblxuZXhwb3J0IHsgc2Nyb2xsIH07XG4iLCJpbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi9jb25zb2xlL2luaXRpYWxpemUnO1xuaW1wb3J0IHsgaW50ZXJwcmV0IH0gIGZyb20gJy4vbGlzcC9pbnRlcnByZXQnO1xuaW1wb3J0IHsga2V5VG9rZW5zIH0gIGZyb20gJy4vbGlzcC9rZXlUb2tlbnMnO1xuXG52YXIgX2tleVRva2VucyA9ICBrZXlUb2tlbnMubWFwKGZ1bmN0aW9uIChrZXlUb2tlbikge1xuICByZXR1cm4gJzonICsga2V5VG9rZW47XG59KTtcblxudmFyIHByb21wdExhYmVsID0gJ0xpc3A+ICc7XG5cbmZ1bmN0aW9uIGdldENhbmRpZGF0ZXMocHJlZml4KSB7XG4gIHZhciBlbnZLZXlzID0gaW50ZXJwcmV0KFwiKGtleXMgKC1nZXQtY3VycmVudC1lbnYtKSlcIilbMF1cbiAgICAgIC52YWx1ZVxuICAgICAgLnNsaWNlKDEsIC0xKVxuICAgICAgLnNwbGl0KCcgJyk7XG4gIHJldHVybiBnZXRNYXRjaGVzKHByZWZpeCwgX2tleVRva2Vucy5jb25jYXQoZW52S2V5cykpO1xufVxuXG5mdW5jdGlvbiBnZXRNYXRjaGVzKHByZWZpeCwgd29yZHMpIHtcbiAgaWYgKCEvXlstYS16QS1aMC05XSskLy50ZXN0KHByZWZpeCkpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIHJlZ2V4ID0gUmVnRXhwKCcoXnxcXFcpOicgKyBwcmVmaXgpO1xuICB2YXIgbWF0Y2hlcyA9IFtdO1xuICBmb3IgKHZhciBpbmRleCBpbiB3b3Jkcykge1xuICAgIHZhciB3b3JkID0gd29yZHNbaW5kZXhdO1xuICAgIGlmIChyZWdleC50ZXN0KHdvcmQpKSB7XG4gICAgICBtYXRjaGVzLnB1c2god29yZC5zbGljZSgxKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXRjaGVzO1xufVxuXG5pbml0aWFsaXplKHtcbiAgbm9kZUlkOiAndmlld3BvcnQnLFxuICBwcm9tcHRMYWJlbDogcHJvbXB0TGFiZWwsXG4gIHRyYW5zZm9ybTogaW50ZXJwcmV0LFxuICBnZXRDYW5kaWRhdGVzOiBnZXRDYW5kaWRhdGVzXG59KTtcbiIsImltcG9ydCB7IGNvbW1lbnRTaWduYWwgfSBmcm9tICcuL2NvbW1lbnRTaWduYWwnO1xuaW1wb3J0IHsgZXZhbHVhdGUgfSBmcm9tICcuL2V2YWx1YXRlJztcblxudmFyIF9wcm9jZXNzID0gZnVuY3Rpb24odHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihlbnZzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHNvdXJjZUNvZGUpIHtcbiAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICB2YXIgYWRkUmVzdWx0ID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgIH07XG4gICAgICB2YXIgdmFsdWUgPSBldmFsdWF0ZShlbnZzLCBhZGRSZXN1bHQpKHRyYW5zZm9ybShzb3VyY2VDb2RlKSk7XG4gICAgICB2YXIgcmVzdWx0ID0gKHZhbHVlID09PSBjb21tZW50U2lnbmFsKVxuICAgICAgICA/IHsgZWZmZWN0OiB7IHR5cGU6ICdjb21tZW50JyB9IH1cbiAgICAgICAgOiB7IGVmZmVjdDogZmFsc2UsIHZhbHVlOiB2YWx1ZSB9O1xuICAgICAgYWRkUmVzdWx0KHJlc3VsdCk7XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9O1xuICB9O1xufTtcblxuZXhwb3J0IHsgX3Byb2Nlc3MgfTtcbiIsInZhciBjb21tZW50U2lnbmFsID0ge307XG5cbmV4cG9ydCB7IGNvbW1lbnRTaWduYWwgfTtcbiIsInZhciBhZGRFbnYgPSBmdW5jdGlvbiAoZW52U3RhY2ssIG5ld0Vudikge1xuICB2YXIgY29weSA9IGVudlN0YWNrLnNsaWNlKDApO1xuICBjb3B5LnVuc2hpZnQobmV3RW52KTtcbiAgcmV0dXJuIGNvcHk7XG59O1xuXG52YXIgZ2V0TGFzdCA9IGZ1bmN0aW9uIChhcnJheSkge1xuICByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07XG59O1xuXG52YXIgbG9va3VwID0gZnVuY3Rpb24gKGVudlN0YWNrLCBrZXkpIHtcbiAgdmFyIGNvcHkgPSBlbnZTdGFjay5zbGljZSgwKTtcbiAgd2hpbGUgKGNvcHkubGVuZ3RoICE9PSAwKSB7XG4gICAgdmFyIGVudiA9IGNvcHlbMF07XG4gICAgdmFyIHZhbHVlID0gZW52W2tleV07XG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29weS5zaGlmdCgpO1xuICB9XG4gIHRocm93IFwiVkFMVUUgQ09SUkVTUE9ORElORyBUTyBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgRE9FUyBOT1QgRVhJU1QgSU4gRU5WLVNUQUNLXCI7XG59O1xuXG52YXIgc2V0ID0gZnVuY3Rpb24gKGVudiwga2V5LCB2YWx1ZSkge1xuICBlbnZba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG52YXIgc2V0TWFpbkVudiA9IGZ1bmN0aW9uIChlbnZTdGFjaywga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc2V0KGdldExhc3QoZW52U3RhY2spLCBrZXksIHZhbHVlKTtcbn07XG5cbnZhciB1bnNldCA9IGZ1bmN0aW9uIChlbnYsIGtleSkge1xuICB2YXIgdmFsdWUgPSBlbnZba2V5XTtcbiAgZGVsZXRlIGVudltrZXldO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG52YXIgdW5zZXRNYWluRW52ID0gZnVuY3Rpb24gKGVudlN0YWNrLCBrZXkpIHtcbiAgcmV0dXJuIHVuc2V0KGdldExhc3QoZW52U3RhY2spLCBrZXkpO1xufTtcblxuZXhwb3J0IHtcbiAgYWRkRW52LFxuICBsb29rdXAsXG4gIHNldE1haW5FbnYsXG4gIHVuc2V0TWFpbkVudlxufTtcbiIsImltcG9ydCB7IGNyZWF0ZUVybEJvb2xlYW4gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybElkZW50aWZpZXIgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybEluZGV4IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxOdW1iZXIgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBleHRyYWN0SnNWYWx1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZnJvbUFycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBpc0pzTmFOIH0gZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNKc051bWJlciB9IGZyb20gJy4vanMtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzSnNTdHJpbmcgfSBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5pbXBvcnQgeyByZWR1Y2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHRvQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcblxudmFyICBfX3NsaWNlICA9IFtdLnNsaWNlO1xudmFyIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG52YXIgYWRkID0gZnVuY3Rpb24oKSB7XG4gIHZhciBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihuYnJzLnJlZHVjZShmdW5jdGlvbih4LCBuYnIpIHtcbiAgICByZXR1cm4geCArPSBuYnI7XG4gIH0pKTtcbn07XG5cbnZhciBjb250YWlucyA9IGZ1bmN0aW9uKGluZGV4LCBrZXkpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4oa2V5IGluIGluZGV4KTtcbn07XG5cbnZhciBkaXNzb2MgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGluZGV4ID0gYXJndW1lbnRzWzBdO1xuICB2YXIga2V5cyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gIHZhciBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGNvcHkgPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIGluZGV4KSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChpbmRleCwga2V5KSkgY29udGludWU7XG4gICAgdmFyIHZhbHVlID0gaW5kZXhba2V5XTtcbiAgICBjb3B5W2tleV0gPSB2YWx1ZTtcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgZGVsZXRlIGNvcHlba2V5XTtcbiAgfVxuICByZXR1cm4gY3JlYXRlRXJsSW5kZXgoY29weSk7XG59O1xuXG52YXIgZGl2aWRlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihuYnJzLnJlZHVjZShmdW5jdGlvbih4LCBuYnIpIHtcbiAgICByZXR1cm4geCAvPSBuYnI7XG4gIH0pKTtcbn07XG5cbnZhciBleHBvbmVudGlhdGUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKG5icnMucmVkdWNlKGZ1bmN0aW9uKHgsIG5icikge1xuICAgIHJldHVybiBNYXRoLnBvdyh4LCBuYnIpO1xuICB9KSk7XG59O1xuXG52YXIgZ2V0ID0gZnVuY3Rpb24oanNJbmRleCwganNLZXkpIHtcbiAgcmV0dXJuIGpzSW5kZXhbanNLZXldO1xufTtcblxudmFyIGdldEVudmlyb25tZW50ID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gIHZhciBlbnZpcm9ubWVudCA9IGNvbmZpZy5lbnZpcm9ubWVudDtcbiAgc2V0Q29yZUZuc09uSnNWYWx1ZXNfYmFuZ18oZW52aXJvbm1lbnQsIGZ1bmN0aW9uc09uSnNWYWx1ZXMpO1xuICByZXR1cm4gZW52aXJvbm1lbnQ7XG59O1xuXG52YXIgZ3JlYXRlclRoYW5PckVxdWFsID0gZnVuY3Rpb24oKSB7XG4gIHZhciBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4obmJyc1swXSA+PSBuYnJzWzFdKTtcbn07XG5cbnZhciBncmVhdGVyVGhhbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKG5icnNbMF0gPiBuYnJzWzFdKTtcbn07XG5cbnZhciBpbmRleCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYXJncyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIF9pbmRleCA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGsgPSBhcmdzW2ldO1xuICAgIGlmIChpICUgMiA9PT0gMCkge1xuICAgICAgX2luZGV4W2tdID0gYXJnc1tpICsgMV07XG4gICAgfVxuICB9XG4gIHJldHVybiBjcmVhdGVFcmxJbmRleChfaW5kZXgpO1xufTtcblxudmFyIGtleXMgPSBmdW5jdGlvbihpbmRleCkge1xuICB2YXIgX2tleXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIGluZGV4KSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChpbmRleCwga2V5KSkgY29udGludWU7XG4gICAgdmFyIHZhbHVlID0gaW5kZXhba2V5XTtcbiAgICB2YXIganNOYnIgPSBwYXJzZUZsb2F0KGtleSwgMTApO1xuICAgIHZhciBfa2V5ID0gaXNKc05hTihqc05icilcbiAgICAgICAgPyAoa2V5WzBdID09PSAnOicgPyBjcmVhdGVFcmxJZGVudGlmaWVyIDogY3JlYXRlRXJsU3RyaW5nKShrZXkpXG4gICAgICAgIDogY3JlYXRlRXJsTnVtYmVyKGpzTmJyKTtcbiAgICBfa2V5cy5wdXNoKF9rZXkpO1xuICB9XG4gIHJldHVybiBmcm9tQXJyYXkoX2tleXMpO1xufTtcblxudmFyIGxlbmd0aFN0cmluZyA9IGZ1bmN0aW9uKGpzVmFsKSB7XG4gIGlmICghaXNKc1N0cmluZyhqc1ZhbCkpIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIoanNWYWwubGVuZ3RoIC0gMik7XG59O1xuXG52YXIgbGVzc1RoYW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsQm9vbGVhbihuYnJzWzBdIDwgbmJyc1sxXSk7XG59O1xuXG52YXIgbGVzc1RoYW5PckVxdWFsID0gZnVuY3Rpb24oKSB7XG4gIHZhciBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4obmJyc1swXSA8PSBuYnJzWzFdKTtcbn07XG5cbnZhciBsaWZ0ID0gZnVuY3Rpb24oZm5PbkpzVmFsdWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZUxpc3QpIHtcbiAgICByZXR1cm4gZm5PbkpzVmFsdWVzLmFwcGx5KG51bGwsICh0b0FycmF5KGVybFZhbHVlTGlzdCkpLm1hcChleHRyYWN0SnNWYWx1ZSkpO1xuICB9O1xufTtcblxudmFyIG1heCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIoTWF0aC5tYXguYXBwbHkoTWF0aCwgbmJycykpO1xufTtcblxudmFyIG1pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIoTWF0aC5taW4uYXBwbHkoTWF0aCwgbmJycykpO1xufTtcblxudmFyIG1vZCA9IGZ1bmN0aW9uKG5icjAsIG5icjEpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihuYnIwICUgbmJyMSk7XG59O1xuXG52YXIgbXVsdGlwbHkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKG5icnMucmVkdWNlKGZ1bmN0aW9uKHgsIG5icikge1xuICAgIHJldHVybiB4ICo9IG5icjtcbiAgfSkpO1xufTtcblxudmFyIG5lZ2F0ZSA9IGZ1bmN0aW9uKG5icikge1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKC0xICogbmJyKTtcbn07XG5cbnZhciBwYXJzZU51bWJlciA9IGZ1bmN0aW9uKGpzVmFsKSB7XG4gIGlmIChpc0pzTnVtYmVyKGpzVmFsKSkge1xuICAgIHJldHVybiBqc1ZhbDtcbiAgfVxuICBpZiAoIWlzSnNTdHJpbmcoanNWYWwpKSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxuICB2YXIganNOYnIgPSBwYXJzZUZsb2F0KHN0cmlwUXVvdGVzKGpzVmFsKSwgMTApO1xuICBpZiAoaXNKc05hTihqc05icikpIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjcmVhdGVFcmxOdW1iZXIoanNOYnIpO1xuICB9XG59O1xuXG52YXIgc2V0Q29yZUZuc09uSnNWYWx1ZXNfYmFuZ18gPSBmdW5jdGlvbihlbnYsIGZucykge1xuICB2YXIgX3Jlc3VsdHMgPSBbXTtcbiAgZm9yICh2YXIgZm5OYW1lIGluIGZucykge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoZm5zLCBmbk5hbWUpKSBjb250aW51ZTtcbiAgICB2YXIgZm4gPSBmbnNbZm5OYW1lXTtcbiAgICBlbnZbZm5OYW1lXSA9IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24obGlmdChmbikpO1xuICAgIF9yZXN1bHRzLnB1c2goZW52W2ZuTmFtZV0pO1xuICB9XG4gIHJldHVybiBfcmVzdWx0cztcbn07XG5cbnZhciBzdWJ0cmFjdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIobmJycy5yZWR1Y2UoZnVuY3Rpb24oeCwgbmJyKSB7XG4gICAgcmV0dXJuIHggLT0gbmJyO1xuICB9KSk7XG59O1xuXG52YXIgdmFscyA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gIHZhciB2YWx1ZXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIGluZGV4KSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChpbmRleCwga2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHZhciB2YWx1ZSA9IGluZGV4W2tleV07XG4gICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICB9XG4gIHJldHVybiBmcm9tQXJyYXkodmFsdWVzKTtcbn07XG5cbnZhciBmdW5jdGlvbnNPbkpzVmFsdWVzID0ge1xuICAnKyc6IGFkZCxcbiAgJ2NvbnRhaW5zPyc6IGNvbnRhaW5zLFxuICAnZGlzc29jJzogZGlzc29jLFxuICAnLyc6IGRpdmlkZSxcbiAgJyoqJzogZXhwb25lbnRpYXRlLFxuICAnZ2V0JzogZ2V0LFxuICAnPic6IGdyZWF0ZXJUaGFuLFxuICAnPj0nOiBncmVhdGVyVGhhbk9yRXF1YWwsXG4gICdpbmRleCc6IGluZGV4LFxuICAna2V5cyc6IGtleXMsXG4gICdsZW5ndGgtc3RyaW5nJzogbGVuZ3RoU3RyaW5nLFxuICAnbWF4JzogbWF4LFxuICAnbWluJzogbWluLFxuICAnPCc6IGxlc3NUaGFuLFxuICAnPD0nOiBsZXNzVGhhbk9yRXF1YWwsXG4gICclJzogbW9kLFxuICAnKic6IG11bHRpcGx5LFxuICAnbmVnYXRlJzogbmVnYXRlLFxuICAncGFyc2UtbnVtYmVyJzogcGFyc2VOdW1iZXIsXG4gICctJzogc3VidHJhY3QsXG4gICd2YWxzJzogdmFsc1xufTtcblxuZXhwb3J0IHsgZ2V0RW52aXJvbm1lbnQgfTtcbiIsImltcG9ydCB7IGFyZUVxdWFsIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBjYXIgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGNkciB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgY2lyY3VtcGVuZFF1b3RlcyB9IGZyb20gJy4vanMtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNvbmNhdCB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgY3JlYXRlRXJsQXRvbSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsQm9vbGVhbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybExpc3QgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybE51bWJlciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3RyaW5nIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxTeW1ib2wgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGRyb3AgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGVybEZhbHNlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBlcmxJZ25vcmUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGVybE5pbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXJsVHJ1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXh0cmFjdEpzVmFsdWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGZyb21BcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgaW50ZXJwcmV0IH0gZnJvbSAnLi9pbnRlcnByZXQnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgaXNFcmxBdG9tIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsQm9vbGVhbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxGYWxzZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybE1hY3JvIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybE5pbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxOdW1iZXIgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsU3RyaW5nIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybFN5bWJvbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxUcnVlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybFVzZXJQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGxhc3QgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IG5leHQgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHJlY3Vyc2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHJlZHVjZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgcmV2ZXJzZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSAnLi9zZXJpYWxpemUnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgdG9QYXJ0aWFsQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcblxudmFyIF9fc2xpY2UgICA9IFtdLnNsaWNlO1xudmFyIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG52YXIgYXBwZW5kID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgZXJsQXJnc0FycmF5ID0gdG9BcnJheShlcmxBcmdzKTtcbiAgdmFyIGVybExpc3QgPSBlcmxBcmdzQXJyYXlbMF07XG4gIHZhciBlcmxWYWx1ZXMgPSAyIDw9IGVybEFyZ3NBcnJheS5sZW5ndGggPyBfX3NsaWNlLmNhbGwoZXJsQXJnc0FycmF5LCAxKSA6IFtdO1xuICByZXR1cm4gY29uY2F0KGVybExpc3QsIGZyb21BcnJheShlcmxWYWx1ZXMpKTtcbn07XG5cbnZhciBfYXJlRXF1YWwgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgdmFyIGVybFZhbHVlMCA9IHBhcnRpYWxBcnJheVswXTtcbiAgdmFyIGVybFZhbHVlMSA9IHBhcnRpYWxBcnJheVsxXTtcbiAgdmFyIF9fYXJlRXF1YWwgPSBmdW5jdGlvbihlcmxWYWx1ZTAsIGVybFZhbHVlMSkge1xuICAgIGlmIChpc0VybExpc3QoZXJsVmFsdWUwKSAmJiBpc0VybExpc3QoZXJsVmFsdWUxKSkge1xuICAgICAgcmV0dXJuIGFyZUVxdWFsKGVybFZhbHVlMCwgZXJsVmFsdWUxLCBfX2FyZUVxdWFsKTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsSW5kZXgoZXJsVmFsdWUwKSAmJiBpc0VybEluZGV4KGVybFZhbHVlMSkpIHtcbiAgICAgIHZhciBqc0luZGV4MCA9IGVybFZhbHVlMC5qc1ZhbHVlO1xuICAgICAgdmFyIGpzSW5kZXgxID0gZXJsVmFsdWUxLmpzVmFsdWU7XG4gICAgICByZXR1cm4gKF9fYXJlRXF1YWwoa2V5cyhqc0luZGV4MCksIGtleXMoanNJbmRleDEpKSlcbiAgICAgICAgJiYgKF9fYXJlRXF1YWwodmFscyhqc0luZGV4MCksIHZhbHMoanNJbmRleDEpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlcmxWYWx1ZTAuanNWYWx1ZSA9PT0gZXJsVmFsdWUxLmpzVmFsdWU7XG4gICAgfVxuICB9O1xuICByZXR1cm4gY3JlYXRlRXJsQm9vbGVhbihfX2FyZUVxdWFsKGVybFZhbHVlMCwgZXJsVmFsdWUxKSk7XG59O1xuXG52YXIgYXNzb2MgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBhcmdzO1xuICB2YXIganNJbmRleCA9IGV4dHJhY3RKc1ZhbHVlKGNhcihlcmxBcmdzKSk7XG4gIGFyZ3MgPSBjZHIoZXJsQXJncyk7XG4gIHZhciBjb3B5ID0ge307XG4gIGZvciAodmFyIGtleSBpbiBqc0luZGV4KSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChqc0luZGV4LCBrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIHZhbHVlID0ganNJbmRleFtrZXldO1xuICAgIGNvcHlba2V5XSA9IHZhbHVlO1xuICB9XG4gIHdoaWxlICghaXNFbXB0eShhcmdzKSkge1xuICAgIHZhciBrID0gY2FyKGFyZ3MpO1xuICAgIHZhciB2ID0gbmV4dChhcmdzKTtcbiAgICBhcmdzID0gcmVjdXJzZShyZWN1cnNlKGFyZ3MpKTtcbiAgICBjb3B5W2V4dHJhY3RKc1ZhbHVlKGspXSA9IHY7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUVybEluZGV4KGNvcHkpO1xufTtcblxudmFyIGF0b20gPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBjcmVhdGVFcmxBdG9tKGNhcihlcmxBcmdzKSk7XG59O1xuXG52YXIgX2NhciA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIGFyZyA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKGlzRXJsTGlzdChhcmcpKSB7XG4gICAgcmV0dXJuIGNhcihhcmcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbnZhciBfY2RyID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgYXJnID0gY2FyKGVybEFyZ3MpO1xuICBpZiAoaXNFcmxMaXN0KGFyZykpIHtcbiAgICByZXR1cm4gY2RyKGFyZyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxudmFyIF9jb25jYXQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBlcmxMaXN0cyA9IHRvQXJyYXkoZXJsQXJncyk7XG4gIHJldHVybiBjb25jYXQuYXBwbHkobnVsbCwgZXJsTGlzdHMpO1xufTtcblxudmFyIGNvbnMgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBjcmVhdGVFcmxMaXN0KGNhcihlcmxBcmdzKSwgbmV4dChlcmxBcmdzKSk7XG59O1xuXG52YXIgY291bnQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBlcmxMaXN0ID0gY2FyKGVybEFyZ3MpO1xuICBpZiAoIWlzRXJsTGlzdChlcmxMaXN0KSkge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbiAgdmFyIF9yZWR1Y2UgPSBmdW5jdGlvbihzdW0sIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN1bSArIDE7XG4gIH07XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIocmVkdWNlKDAsIF9yZWR1Y2UsIGNhcihlcmxBcmdzKSkpO1xufTtcblxudmFyIGNyZWF0ZVByZWRpY2F0ZSA9IGZ1bmN0aW9uKHByZWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGpzTGlzdCkge1xuICAgIHZhciBlcmxWYWx1ZSA9IGpzTGlzdC52YWx1ZTtcbiAgICByZXR1cm4gY3JlYXRlRXJsQm9vbGVhbihwcmVkKGVybFZhbHVlKSk7XG4gIH07XG59O1xuXG52YXIgZGVyZWYgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiAoY2FyKGVybEFyZ3MpKS5lcmxWYWx1ZTtcbn07XG5cbnZhciBfZHJvcCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEFyZ3MpO1xuICB2YXIgZXJsTnVtYmVyID0gcGFydGlhbEFycmF5WzBdO1xuICB2YXIgZXJsTGlzdCA9IHBhcnRpYWxBcnJheVsxXTtcbiAgcmV0dXJuIGRyb3AoZXh0cmFjdEpzVmFsdWUoZXJsTnVtYmVyKSwgZXJsTGlzdCk7XG59O1xuXG52YXIgZmlyc3QgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBjYXIoY2FyKGVybEFyZ3MpKTtcbn07XG5cbnZhciBnZXRFbnZpcm9ubWVudCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICB2YXIgZW52aXJvbm1lbnQgPSBjb25maWcuZW52aXJvbm1lbnQ7XG4gIHNldENvcmVGbnNPbkVybFZhbHVlcyhlbnZpcm9ubWVudCwgZnVuY3Rpb25zT25FcmxWYWx1ZXMpO1xuICByZXR1cm4gZW52aXJvbm1lbnQ7XG59O1xuXG52YXIgaGFzUHJvY2VzcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnO1xufVxuXG52YXIgaGFzUHJvY2Vzc1dlYnBhY2tTaGltID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybihwcm9jZXNzLnRpdGxlID09PSAnYnJvd3NlcicgJiYgcHJvY2Vzcy5icm93c2VyKTtcbn1cblxudmFyIGlnbm9yZSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGVybElnbm9yZTtcbn07XG5cbnZhciBpZ25vcmVJZlRydWUgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgdmFyIGVybEJvb2wgPSBwYXJ0aWFsQXJyYXlbMF07XG4gIHZhciBlcmxWYWx1ZSA9IHBhcnRpYWxBcnJheVsxXTtcbiAgaWYgKGV4dHJhY3RKc1ZhbHVlKGVybEJvb2wpKSB7XG4gICAgcmV0dXJuIGVybElnbm9yZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsVmFsdWU7XG4gIH1cbn07XG5cbnZhciBpZ25vcmVVbmxlc3NUcnVlID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIHZhciBlcmxCb29sID0gcGFydGlhbEFycmF5WzBdO1xuICB2YXIgZXJsVmFsdWUgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIGlmIChleHRyYWN0SnNWYWx1ZShlcmxCb29sKSkge1xuICAgIHJldHVybiBlcmxWYWx1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsSWdub3JlO1xuICB9XG59O1xuXG52YXIgX2ludGVycHJldCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGludGVycHJldChzdHJpcFF1b3RlcyhleHRyYWN0SnNWYWx1ZShjYXIoZXJsQXJncykpKSk7XG59O1xuXG52YXIgX2lzRW1wdHkgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGlmIChpc0VtcHR5KGVybEFyZ3MpKSB7XG4gICAgcmV0dXJuIGVybEZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGlmIChpc0VtcHR5KGNhcihlcmxBcmdzKSkpIHtcbiAgICAgIHJldHVybiBlcmxUcnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXJsRmFsc2U7XG4gICAgfVxuICB9XG59O1xuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKGpzTGlzdCkge1xuICB2YXIgZXJsVmFsdWUgPSBqc0xpc3QudmFsdWU7XG4gIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKGlzRXJsQ29yZVB1cmVGdW5jdGlvbihlcmxWYWx1ZSlcbiAgICB8fCBpc0VybFVzZXJQdXJlRnVuY3Rpb24oZXJsVmFsdWUpKTtcbn07XG5cbnZhciBpc05vZGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGhhc1Byb2Nlc3MoKSAmJiAhaGFzUHJvY2Vzc1dlYnBhY2tTaGltKCk7XG59XG5cbnZhciBfbGFzdCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIGFyZyA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKGlzRXJsTGlzdChhcmcpKSB7XG4gICAgcmV0dXJuIGxhc3QoYXJnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG52YXIgbGlzdCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGVybEFyZ3M7XG59O1xuXG52YXIgbWV0YSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIGVybE1ldGEgPSAoY2FyKGVybEFyZ3MpKS5tZXRhO1xuICBpZiAoZXJsTWV0YSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGVybE1ldGE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxudmFyIF9ub3QgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBlcmxWYWwgPSBjYXIoZXJsQXJncyk7XG4gIGlmIChpc0VybE5pbChlcmxWYWwpIHx8IGlzRXJsRmFsc2UoZXJsVmFsKSkge1xuICAgIHJldHVybiBlcmxUcnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxGYWxzZTtcbiAgfVxufTtcblxudmFyIG50aCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEFyZ3MpO1xuICB2YXIgZXJsTnVtYmVyID0gcGFydGlhbEFycmF5WzBdO1xuICB2YXIgZXJsTGlzdCA9IHBhcnRpYWxBcnJheVsxXTtcbiAgdmFyIHRhcmdldCA9IGV4dHJhY3RKc1ZhbHVlKGVybE51bWJlcik7XG4gIGlmICh0YXJnZXQgPj0gMCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0OyBpKyspIHtcbiAgICAgIGVybExpc3QgPSBjZHIoZXJsTGlzdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGkgPSAwOyBpID4gdGFyZ2V0OyBpLS0pIHtcbiAgICAgIGVybExpc3QgPSBjZHIoZXJsTGlzdCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBjYXIoZXJsTGlzdCk7XG59O1xuXG52YXIgcHJlcGVuZCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIGVybEFyZ3NBcnJheSA9IHRvQXJyYXkoZXJsQXJncyk7XG4gIHZhciBlcmxMaXN0ID0gZXJsQXJnc0FycmF5WzBdO1xuICB2YXIgZXJsVmFsdWVzID0gMiA8PSBlcmxBcmdzQXJyYXkubGVuZ3RoID8gX19zbGljZS5jYWxsKGVybEFyZ3NBcnJheSwgMSkgOiBbXTtcbiAgdmFyIF9yZWR1Y2UgPSBmdW5jdGlvbihsaXN0LCB2YWwpIHtcbiAgICByZXR1cm4gY3JlYXRlRXJsTGlzdCh2YWwsIGxpc3QpO1xuICB9O1xuICByZXR1cm4gZXJsVmFsdWVzLnJlZHVjZShfcmVkdWNlLCBlcmxMaXN0KTtcbn07XG5cbnZhciBfcHJTdHIgPSBmdW5jdGlvbihlcmxBcmdzLCBwcmludFJlYWRhYmx5KSB7XG4gIHJldHVybiAoKHRvQXJyYXkoZXJsQXJncykpLm1hcChmdW5jdGlvbihlcmxBcmcpIHtcbiAgICByZXR1cm4gc2VyaWFsaXplKGVybEFyZywgcHJpbnRSZWFkYWJseSk7XG4gIH0pKS5qb2luKCcnKTtcbn07XG5cbnZhciBwcmV0dHlTdHJpbmcgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBjcmVhdGVFcmxTdHJpbmcoY2lyY3VtcGVuZFF1b3RlcyhfcHJTdHIoZXJsQXJncywgdHJ1ZSkpKTtcbn07XG5cbnZhciByZWFkID0gZnVuY3Rpb24oanNMaXN0KSB7XG4gIGlmIChpc05vZGUoKSkge1xuICAgIHZhciBfcmVhZCA9IGZ1bmN0aW9uKF9qc0xpc3QpIHtcbiAgICAgIHZhciBqc0ZpbGVOYW1lID0gc3RyaXBRdW90ZXMoZXh0cmFjdEpzVmFsdWUoY2FyKF9qc0xpc3QpKSk7XG4gICAgICAvL3JldHVybiByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYyhqc0ZpbGVOYW1lKS50b1N0cmluZygpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gY3JlYXRlRXJsU3RyaW5nKF9yZWFkKGpzTGlzdCkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbnZhciByZXNldCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEFyZ3MpO1xuICB2YXIgYXRvbSA9IHBhcnRpYWxBcnJheVswXTtcbiAgdmFyIHZhbHVlID0gcGFydGlhbEFycmF5WzFdO1xuICBhdG9tLmVybFZhbHVlID0gdmFsdWU7XG4gIHJldHVybiBhdG9tO1xufTtcblxudmFyIHJlc3QgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBhcmcgPSBjYXIoZXJsQXJncyk7XG4gIGlmIChpc0VybExpc3QoYXJnKSkge1xuICAgIHJldHVybiBjZHIoYXJnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG52YXIgX3JldmVyc2UgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBhcmcgPSBjYXIoZXJsQXJncyk7XG4gIGlmIChpc0VybExpc3QoYXJnKSkge1xuICAgIHJldHVybiByZXZlcnNlKGFyZyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxudmFyIHNldCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDMsIGVybEFyZ3MpO1xuICB2YXIgaW5kZXggPSBwYXJ0aWFsQXJyYXlbMF07XG4gIHZhciBrZXkgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIHZhciB2YWwgPSBwYXJ0aWFsQXJyYXlbMl07XG4gIChleHRyYWN0SnNWYWx1ZShpbmRleCkpW2V4dHJhY3RKc1ZhbHVlKGtleSldID0gdmFsO1xuICByZXR1cm4gaW5kZXg7XG59O1xuXG52YXIgc2V0Q29yZUZuc09uRXJsVmFsdWVzID0gZnVuY3Rpb24oZW52LCBmbnMpIHtcbiAgdmFyIF9yZXN1bHRzID0gW107XG4gIGZvciAodmFyIGZuTmFtZSBpbiBmbnMpIHtcbiAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGZucywgZm5OYW1lKSkgY29udGludWU7XG4gICAgdmFyIGZuID0gZm5zW2ZuTmFtZV07XG4gICAgX3Jlc3VsdHMucHVzaChlbnZbZm5OYW1lXSA9IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24oZm4pKTtcbiAgfVxuICByZXR1cm4gX3Jlc3VsdHM7XG59O1xuXG52YXIgc2x1cnAgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGlmIChpc05vZGUoKSkge1xuICAgIHZhciBqc0ZpbGVOYW1lID0gc3RyaXBRdW90ZXMoZXh0cmFjdEpzVmFsdWUoY2FyKGVybEFyZ3MpKSk7XG4gICAgLy92YXIgX2ZzXyA9IHJlcXVpcmUoJ2ZzJyk7XG4gICAgLy9yZXR1cm4gY3JlYXRlRXJsU3RyaW5nKGNpcmN1bXBlbmRRdW90ZXMoX2ZzXy5yZWFkRmlsZVN5bmMoanNGaWxlTmFtZSkudG9TdHJpbmcoKSkpO1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbnZhciBzdHJpbmcgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBjcmVhdGVFcmxTdHJpbmcoY2lyY3VtcGVuZFF1b3RlcyhfcHJTdHIoZXJsQXJncywgZmFsc2UpKSk7XG59O1xuXG52YXIgc3RyaXBRdW90ZXMgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4ganNTdHJpbmcuc2xpY2UoMSwgLTEpO1xufTtcblxudmFyIHN5bWJvbCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIGVybFZhbHVlID0gY2FyKGVybEFyZ3MpO1xuICBpZiAoaXNFcmxTdHJpbmcoZXJsVmFsdWUpKSB7XG4gICAgdmFyIGpzU3RyID0gZXh0cmFjdEpzVmFsdWUoZXJsVmFsdWUpO1xuICAgIHJldHVybiBjcmVhdGVFcmxTeW1ib2woanNTdHIuc2xpY2UoMSwgLTEpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG52YXIgX3Rha2UgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgdmFyIGVybE51bWJlciA9IHBhcnRpYWxBcnJheVswXTtcbiAgdmFyIGVybExpc3QgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIHJldHVybiB0YWtlKGV4dHJhY3RKc1ZhbHVlKGVybE51bWJlciksIGVybExpc3QpO1xufTtcblxudmFyIHR5cGVPZiA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIGVybFZhbHVlID0gY2FyKGVybEFyZ3MpO1xuICByZXR1cm4gY3JlYXRlRXJsU3RyaW5nKGNpcmN1bXBlbmRRdW90ZXMoZXJsVmFsdWUudHlwZSkpO1xufTtcblxudmFyIF90aHJvdyA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdGhyb3cgY2FyKGVybEFyZ3MpO1xufTtcblxudmFyIHRpbWVNcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbn07XG5cbnZhciB3aXRoTWV0YSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEFyZ3MpO1xuICB2YXIgZXJsVmFsID0gcGFydGlhbEFycmF5WzBdO1xuICB2YXIgZXJsTWV0YSA9IHBhcnRpYWxBcnJheVsxXTtcbiAgaWYgKGlzRXJsQXRvbShlcmxWYWwpKSB7XG4gICAgdmFyIGVybFZhbHVlID0gZXJsVmFsLmVybFZhbHVlO1xuICAgIHZhciB0eXBlID0gZXJsVmFsLnR5cGU7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVybFZhbHVlOiBlcmxWYWx1ZSxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBtZXRhOiBlcmxNZXRhXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB2YXIganNWYWx1ZSA9IGVybFZhbC5qc1ZhbHVlO1xuICAgIHZhciB0eXBlID0gZXJsVmFsLnR5cGU7XG4gICAgcmV0dXJuIHtcbiAgICAgIGpzVmFsdWU6IGpzVmFsdWUsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgbWV0YTogZXJsTWV0YVxuICAgIH07XG4gIH1cbn07XG5cbnZhciB3cml0ZSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhzZXJpYWxpemUoY2FyKGVybEFyZ3MpKSk7XG59O1xuXG52YXIgcHJlZGljYXRlcyA9IFtcbiAgaXNFcmxBdG9tLFxuICBpc0VybEJvb2xlYW4sXG4gIGlzRXJsQ29yZVB1cmVGdW5jdGlvbixcbiAgaXNFcmxGYWxzZSxcbiAgaXNFcmxMaXN0LFxuICBpc0VybE1hY3JvLFxuICBpc0VybE5pbCxcbiAgaXNFcmxOdW1iZXIsXG4gIGlzRXJsU3ltYm9sLFxuICBpc0VybFN0cmluZyxcbiAgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uLFxuICBpc0VybFRydWVcbl0ubWFwKGNyZWF0ZVByZWRpY2F0ZSk7XG5cbnZhciBpc0F0b20gICAgPSBwcmVkaWNhdGVzWzBdO1xudmFyIGlzQm9vbGVhbiA9IHByZWRpY2F0ZXNbMV07XG52YXIgaXNDb3JlRm4gID0gcHJlZGljYXRlc1syXTtcbnZhciBpc0ZhbHNlICAgPSBwcmVkaWNhdGVzWzNdO1xudmFyIGlzTGlzdCAgICA9IHByZWRpY2F0ZXNbNF07XG52YXIgaXNNYWNybyAgID0gcHJlZGljYXRlc1s1XTtcbnZhciBpc05pbCAgICAgPSBwcmVkaWNhdGVzWzZdO1xudmFyIGlzTnVtYmVyICA9IHByZWRpY2F0ZXNbN107XG52YXIgaXNTeW1ib2wgID0gcHJlZGljYXRlc1s4XTtcbnZhciBpc1N0cmluZyAgPSBwcmVkaWNhdGVzWzldO1xudmFyIGlzVXNlckZuICA9IHByZWRpY2F0ZXNbMTBdO1xudmFyIGlzVHJ1ZSAgICA9IHByZWRpY2F0ZXNbMTFdO1xuXG52YXIgZnVuY3Rpb25zT25FcmxWYWx1ZXMgPSB7XG4gICc9JzogX2FyZUVxdWFsLFxuICAnYXBwZW5kJzogYXBwZW5kLFxuICAnYXNzb2MnOiBhc3NvYyxcbiAgJ2F0b20nOiBhdG9tLFxuICAnYXRvbT8nOiBpc0F0b20sXG4gICdib29sZWFuPyc6IGlzQm9vbGVhbixcbiAgJ2Nhcic6IF9jYXIsXG4gICdjZHInOiBfY2RyLFxuICAnY29ucyc6IGNvbnMsXG4gICdjb25jYXQnOiBfY29uY2F0LFxuICAnY29yZS1mbj8nOiBpc0NvcmVGbixcbiAgJ2NvdW50JzogY291bnQsXG4gICdkZXJlZic6IGRlcmVmLFxuICAnZHJvcCc6IF9kcm9wLFxuICAnZW1wdHk/JzogX2lzRW1wdHksXG4gICdmaXJzdCc6IF9jYXIsXG4gICdmYWxzZT8nOiBpc0ZhbHNlLFxuICAnZnVuY3Rpb24/JzogaXNGdW5jdGlvbixcbiAgJ2lnbm9yZSEnOiBpZ25vcmUsXG4gICdpZ25vcmVJZlRydWUnOiBpZ25vcmVJZlRydWUsXG4gICdpZ25vcmVVbmxlc3NUcnVlJzogaWdub3JlVW5sZXNzVHJ1ZSxcbiAgJ2xhc3QnOiBfbGFzdCxcbiAgJ2xpc3QnOiBsaXN0LFxuICAnbGlzdD8nOiBpc0xpc3QsXG4gICdtYWNybz8nOiBpc01hY3JvLFxuICAnbWV0YSc6IG1ldGEsXG4gICduaWw/JzogaXNOaWwsXG4gICdub3QnOiBfbm90LFxuICAnbnRoJzogbnRoLFxuICAnbnVtYmVyPyc6IGlzTnVtYmVyLFxuICAncGFyc2UnOiBfaW50ZXJwcmV0LFxuICAncHJlcGVuZCc6IHByZXBlbmQsXG4gICdwcmV0dHktc3RyaW5nJzogcHJldHR5U3RyaW5nLFxuICAncmVzdCc6IF9jZHIsXG4gICdyZXZlcnNlJzogX3JldmVyc2UsXG4gICdzdHJpbmcnOiBzdHJpbmcsXG4gICdzdHJpbmc/JzogaXNTdHJpbmcsXG4gICdzeW1ib2wnOiBzeW1ib2wsXG4gICdzeW1ib2w/JzogaXNTeW1ib2wsXG4gICd0YWtlJzogX3Rha2UsXG4gICd0aHJvdyc6IF90aHJvdyxcbiAgJ3RydWU/JzogaXNUcnVlLFxuICAndHlwZW9mJzogdHlwZU9mLFxuICAndXNlci1mbj8nOiBpc1VzZXJGbixcbiAgJ3JlYWQnOiByZWFkLFxuICAncmVzZXQhJzogcmVzZXQsXG4gICdzZXQhJzogc2V0LFxuICAnc2x1cnAnOiBzbHVycCxcbiAgJ3RpbWUtbXMnOiB0aW1lTXMsXG4gICd3aXRoLW1ldGEnOiB3aXRoTWV0YSxcbiAgJ3dyaXRlJzogd3JpdGVcbn07XG5cbmV4cG9ydCB7IGdldEVudmlyb25tZW50IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybExpc3QgfSAgICAgICAgICAgICAgICAgIGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3RyaW5nIH0gICAgICAgICAgICAgICAgZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBzZXJpYWxpemUgfSAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL3NlcmlhbGl6ZSc7XG5pbXBvcnQgeyB0b0FycmF5IH0gICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL2xpbmtlZC1saXN0JztcblxubGV0IF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5sZXQgZ2V0RW52aXJvbm1lbnQgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgbGV0IGRpc3BsYXkgPSBjb25maWcuZGlzcGxheTtcbiAgbGV0IGVudmlyb25tZW50ID0gY29uZmlnLmVudmlyb25tZW50O1xuICBzZXRDb3JlRWZmZWN0ZnVsRm5zT25FcmxWYWx1ZXMoZGlzcGxheSkoZW52aXJvbm1lbnQsIGRpc3BsYXlFZmZlY3RzT25FcmxWYWx1ZXMpO1xuICByZXR1cm4gZW52aXJvbm1lbnQ7XG59O1xuXG5sZXQgaGFzUHJvY2VzcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnO1xufVxuXG5sZXQgaGFzUHJvY2Vzc1dlYnBhY2tTaGltID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybihwcm9jZXNzLnRpdGxlID09PSAnYnJvd3NlcicgJiYgcHJvY2Vzcy5icm93c2VyKTtcbn1cblxubGV0IGlzTm9kZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gaGFzUHJvY2VzcygpICYmICFoYXNQcm9jZXNzV2VicGFja1NoaW0oKTtcbn1cblxubGV0IF9wclN0ciA9IGZ1bmN0aW9uKGVybEFyZ3MsIHNob3VsZEJlUmVhZGFibGUpIHtcbiAgcmV0dXJuICgodG9BcnJheShlcmxBcmdzKSkubWFwKGZ1bmN0aW9uKGVybEFyZykge1xuICAgIHJldHVybiBzZXJpYWxpemUoZXJsQXJnLCBzaG91bGRCZVJlYWRhYmxlKTtcbiAgfSkpLmpvaW4oJycpO1xufTtcblxubGV0IF9xdWl0XyA9IGZ1bmN0aW9uKCkge1xuICBpZiAoaXNOb2RlKCkpIHtcbiAgICByZXR1cm4gcHJvY2Vzcy5leGl0KDApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBfcHJTdHIoXG4gICAgICBjcmVhdGVFcmxMaXN0KFxuICAgICAgICBjcmVhdGVFcmxTdHJpbmcoXG4gICAgICAgICAgXCJcXFwiJ0VybGvDtm5pZyBMaXNwIENvbnNvbGUnIGlzIG5vdCBwZXJtaXR0ZWQgdG8gY2xvc2UgdGhpcyB3aW5kb3cuXFxcIlwiKSksXG4gICAgICAgICAgZmFsc2UpO1xuICB9XG59O1xuXG5sZXQgc2V0Q29yZUVmZmVjdGZ1bEZuc09uRXJsVmFsdWVzID0gZnVuY3Rpb24ocmVwcmVzZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbihlbnYsIGZucykge1xuICAgIGxldCBfcmVzdWx0cyA9IFtdO1xuICAgIGZvciAobGV0IGZuTmFtZSBpbiBmbnMpIHtcbiAgICAgIGlmICghX19oYXNQcm9wLmNhbGwoZm5zLCBmbk5hbWUpKSBjb250aW51ZTtcbiAgICAgIGxldCBmbiA9IGZuc1tmbk5hbWVdO1xuICAgICAgZW52W2ZuTmFtZV0gPSBjcmVhdGVFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24oZnVuY3Rpb24oZXJsQXJncykge1xuICAgICAgICByZXR1cm4gcmVwcmVzZW50KGZuKGVybEFyZ3MpKTtcbiAgICAgIH0pO1xuICAgICAgX3Jlc3VsdHMucHVzaChlbnZbZm5OYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiBfcmVzdWx0cztcbiAgfTtcbn07XG5cbmxldCBkaXNwbGF5RWZmZWN0c09uRXJsVmFsdWVzID0ge1xuICAncHJpbnQnOiBmdW5jdGlvbihlcmxBcmdzKSB7XG4gICAgcmV0dXJuIF9wclN0cihlcmxBcmdzLCBmYWxzZSk7XG4gIH0sXG4gICdwcmV0dHktcHJpbnQnOiBmdW5jdGlvbihlcmxBcmdzKSB7XG4gICAgcmV0dXJuIF9wclN0cihlcmxBcmdzLCB0cnVlKTtcbiAgfSxcbiAgJy1xdWl0LSc6IF9xdWl0Xyxcbn07XG5cbmV4cG9ydCB7IGdldEVudmlyb25tZW50IH07XG4iLCJpbXBvcnQgeyBjYXIgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybExpc3QgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN5bWJvbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXh0cmFjdEpzVmFsdWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGZyb21BcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgZnJvbUVybEluZGV4IH0gZnJvbSAnLi9pbmRleC11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBfcHJvY2VzcyB9IGZyb20gJy4vX3Byb2Nlc3MnO1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgdG9rZW5pemVBbmRQYXJzZSB9IGZyb20gJy4vdG9rZW5pemVBbmRQYXJzZSc7XG5pbXBvcnQgeyB0b1BhcnRpYWxBcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuXG52YXIgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbnZhciBnZXRFbnZpcm9ubWVudCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICB2YXIgZW52aXJvbm1lbnQgPSBjb25maWcuZW52aXJvbm1lbnQ7XG4gIHZhciBwYXJzZSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgICByZXR1cm4gdG9rZW5pemVBbmRQYXJzZShzdHJpcFF1b3RlcyhleHRyYWN0SnNWYWx1ZShjYXIoZXJsQXJncykpKSk7XG4gIH07XG4gIHZhciBmdW5jdGlvbnNPbkVybFZhbHVlcyA9IHsgcGFyc2U6IHBhcnNlIH07XG4gIHNldENvcmVGbnNPbkVybFZhbHVlcyhlbnZpcm9ubWVudCwgZnVuY3Rpb25zT25FcmxWYWx1ZXMpO1xuICByZXR1cm4gZW52aXJvbm1lbnQ7XG59O1xuXG52YXIgX3Byb2Nlc3NfID0gX3Byb2Nlc3MoZnVuY3Rpb24oZXJsVmFsKSB7XG4gIHJldHVybiBlcmxWYWw7XG59KTtcblxudmFyIHNldENvcmVGbnNPbkVybFZhbHVlcyA9IGZ1bmN0aW9uKGVudiwgZm5zKSB7XG4gIHZhciBfcmVzdWx0cyA9IFtdO1xuICBmb3IgKHZhciBmbk5hbWUgaW4gZm5zKSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChmbnMsIGZuTmFtZSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgZm4gPSBmbnNbZm5OYW1lXTtcbiAgICBfcmVzdWx0cy5wdXNoKGVudltmbk5hbWVdID0gY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbihmbikpO1xuICB9XG4gIHJldHVybiBfcmVzdWx0cztcbn07XG5cbnZhciBzdHJpcFF1b3RlcyA9IGZ1bmN0aW9uKGpzU3RyaW5nKSB7XG4gIHJldHVybiBqc1N0cmluZy5zbGljZSgxLCAtMSk7XG59O1xuXG5leHBvcnQgeyBnZXRFbnZpcm9ubWVudCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBleHRyYWN0SnNWYWx1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZnJvbUVybEluZGV4IH0gZnJvbSAnLi9pbmRleC11dGlsaXRpZXMnO1xuaW1wb3J0IHsgX3Byb2Nlc3MgfSBmcm9tICcuL19wcm9jZXNzJztcbmltcG9ydCB7IHRvUGFydGlhbEFycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5cbnZhciBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGdldEVudmlyb25tZW50ID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gIHZhciBlbnZpcm9ubWVudCA9IGNvbmZpZy5lbnZpcm9ubWVudDtcbiAgdmFyIGZ1bmN0aW9uc09uRXJsVmFsdWVzID0ge1xuICAgICdsb2FkJzogbG9hZCxcbiAgICAnbG9hZC13aXRoLWVudic6IGxvYWRXaXRoRW52LFxuICAgICdsb2FkLXdpdGgtYmFyZS1lbnYnOiBsb2FkV2l0aEJhcmVFbnZcbiAgfTtcbiAgc2V0Q29yZUZuc09uRXJsVmFsdWVzKGVudmlyb25tZW50LCBmdW5jdGlvbnNPbkVybFZhbHVlcyk7XG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn07XG5cbnZhciBnZXRfanNGaWxlTmFtZV9hbmRfbG9jYWxFbnYgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgdmFyIGVybEZpbGVOYW1lID0gcGFydGlhbEFycmF5WzBdO1xuICB2YXIgbG9jYWxFbnYgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIHZhciBqc0ZpbGVOYW1lID0gc3RyaXBRdW90ZXMoZXh0cmFjdEpzVmFsdWUoZXJsRmlsZU5hbWUpKTtcbiAgcmV0dXJuIFtqc0ZpbGVOYW1lLCBsb2NhbEVudl07XG59O1xuXG52YXIgaGFzUHJvY2VzcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnO1xufVxuXG52YXIgaGFzUHJvY2Vzc1dlYnBhY2tTaGltID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybihwcm9jZXNzLnRpdGxlID09PSAnYnJvd3NlcicgJiYgcHJvY2Vzcy5icm93c2VyKTtcbn1cblxudmFyIGlzTm9kZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gaGFzUHJvY2VzcygpICYmICFoYXNQcm9jZXNzV2VicGFja1NoaW0oKTtcbn1cblxudmFyIGxvYWQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGlmIChpc05vZGUoKSkge1xuICAgIHJldHVybiBfcHJvY2Vzc18oX3JlYWQoZXJsQXJncykpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbnZhciBsb2FkV2l0aEJhcmVFbnYgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGlmIChpc05vZGUoKSkge1xuICAgIHZhciB0ZW1wID0gZ2V0X2pzRmlsZU5hbWVfYW5kX2xvY2FsRW52KGVybEFyZ3MpO1xuICAgIHZhciBqc0ZpbGVOYW1lID0gdGVtcFswXTtcbiAgICB2YXIgbG9jYWxFbnYgPSB0ZW1wWzFdO1xuICAgIHJldHVybiBfcHJvY2Vzc0ZpbGVBbmRFbnYoXG4gICAgICByZWFkRmlsZShqc0ZpbGVOYW1lKSxcbiAgICAgIFtmcm9tRXJsSW5kZXgobG9jYWxFbnYpXSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxudmFyIGxvYWRXaXRoRW52ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBpZiAoaXNOb2RlKCkpIHtcbiAgICB2YXIgdGVtcCA9IGdldF9qc0ZpbGVOYW1lX2FuZF9sb2NhbEVudihlcmxBcmdzKTtcbiAgICB2YXIganNGaWxlTmFtZSA9IHRlbXBbMF07XG4gICAgdmFyIGxvY2FsRW52ID0gdGVtcFsxXTtcbiAgICByZXR1cm4gX3Byb2Nlc3NGaWxlQW5kRW52KFxuICAgICAgcmVhZEZpbGUoanNGaWxlTmFtZSksXG4gICAgICBbZnJvbUVybEluZGV4KGxvY2FsRW52KSwgZW52aXJvbm1lbnRdKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG52YXIgX3Byb2Nlc3NfID0gZnVuY3Rpb24oanNTdHJpbmcpIHtcbiAgcmV0dXJuIF9wcm9jZXNzKFtlbnZpcm9ubWVudF0pKGpzU3RyaW5nKTtcbn07XG5cbnZhciBfcHJvY2Vzc0ZpbGVBbmRFbnYgPSBmdW5jdGlvbihmaWxlLCBlbnZTdGFjaykge1xuICByZXR1cm4gX3Byb2Nlc3MoZW52U3RhY2spKGZpbGUpO1xufTtcblxudmFyIF9yZWFkID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIganNGaWxlTmFtZSA9IGdldF9qc0ZpbGVOYW1lX2FuZF9sb2NhbEVudihlcmxBcmdzKVswXTtcbiAgcmV0dXJuIHJlYWRGaWxlKGpzRmlsZU5hbWUpO1xufTtcblxudmFyIHJlYWRGaWxlID0gZnVuY3Rpb24oanNGaWxlTmFtZSkge1xuICAvL3JldHVybiByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYyhqc0ZpbGVOYW1lKS50b1N0cmluZygpO1xuICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciBzZXRDb3JlRm5zT25FcmxWYWx1ZXMgPSBmdW5jdGlvbihlbnYsIGZucykge1xuICB2YXIgX3Jlc3VsdHMgPSBbXTtcbiAgZm9yICh2YXIgZm5OYW1lIGluIGZucykge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoZm5zLCBmbk5hbWUpKSBjb250aW51ZTtcbiAgICB2YXIgZm4gPSBmbnNbZm5OYW1lXTtcbiAgICBfcmVzdWx0cy5wdXNoKGVudltmbk5hbWVdID0gY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbihmbikpO1xuICB9XG4gIHJldHVybiBfcmVzdWx0cztcbn07XG5cbnZhciBzdHJpcFF1b3RlcyA9IGZ1bmN0aW9uKGpzU3RyaW5nKSB7XG4gIHJldHVybiBqc1N0cmluZy5zbGljZSgxLCAtMSk7XG59O1xuXG5leHBvcnQgeyBnZXRFbnZpcm9ubWVudCB9O1xuIiwiaW1wb3J0IHsgYWRkRW52IH0gZnJvbSAnLi9lbnYtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNhciB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgY2F0Y2hTdGFyIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgY2RyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBjaXJjdW1wZW5kUXVvdGVzIH0gZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY29tbWVudFNpZ25hbCB9IGZyb20gJy4vY29tbWVudFNpZ25hbCc7XG5pbXBvcnQgeyBjcmVhdGVFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsS2V5d29yZCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTGlzdCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTWFjcm8gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybE51bWJlciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3RyaW5nIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxTeW1ib2wgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFVzZXJQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGRlZkJhbmcgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBfZG8gfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBlcmxOaWwgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IF9ldmFsIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgX2V2YWxXaXRoRW52IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgZXhwYW5kTWFjcm8gfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBleHRyYWN0SnNWYWx1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBmblN0YXIgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBmb3JFYWNoIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBmcm9tQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGZyb21FcmxJbmRleCB9IGZyb20gJy4vaW5kZXgtdXRpbGl0aWVzJztcbmltcG9ydCB7IGZyb21Kc09iamVjdHMgfSBmcm9tICcuL2luZGV4LXV0aWxpdGllcyc7XG5pbXBvcnQgeyBfZ2V0Q3VycmVudEVudiB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IF9nZXREZWZhdWx0RW52IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgaXNFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsQ29yZVB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxJZ25vcmUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsS2V5d29yZCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybE1hY3JvIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybFN5bWJvbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0pzU3RyaW5nIH0gZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNLZXl3b3JkIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbGV0U3RhciB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGxldHJlY1N0YXIgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBsb29rdXAgfSBmcm9tICcuL2Vudi11dGlsaXRpZXMnO1xuaW1wb3J0IHsgbWFjcm9TdGFyIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBuZXh0IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBxdWFzaXF1b3RlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBzcGxpY2VVbnF1b3RlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgdW5xdW90ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHJlY3Vyc2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHJlZHVjZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgcmVkdWNlQnkyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyByZXZlcnNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBzZXRNYWluRW52IH0gZnJvbSAnLi9lbnYtdXRpbGl0aWVzJztcbmltcG9ydCB7IHNwbGF0IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgdG9QYXJ0aWFsQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHRyeVN0YXIgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyB1bmRlZkJhbmcgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyB1bnNldE1haW5FbnYgfSBmcm9tICcuL2Vudi11dGlsaXRpZXMnO1xuXG52YXIgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbnZhciBjcmVhdGVGbiA9IGZ1bmN0aW9uKGVybExpc3QsIGVudnMpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybFVzZXJQdXJlRnVuY3Rpb24oe1xuICAgIGxvY2FsRW52czogZW52cy5zbGljZSgwKSxcbiAgICBlcmxFeHByZXNzaW9uOiBuZXh0KGVybExpc3QpLFxuICAgIGVybFBhcmFtZXRlcnM6IGNhcihlcmxMaXN0KVxuICB9KTtcbn07XG5cbnZhciBjcmVhdGVMb2NhbEVudiA9IGZ1bmN0aW9uKGVybFBhcmFtcywgZXJsQXJncykge1xuICB2YXIgZW52ID0ge307XG4gIHdoaWxlICghaXNFbXB0eShlcmxQYXJhbXMpKSB7XG4gICAgdmFyIGpzUGFyYW0gPSBleHRyYWN0SnNWYWx1ZShjYXIoZXJsUGFyYW1zKSk7XG4gICAgaWYgKGpzUGFyYW0gPT09IHNwbGF0KSB7XG4gICAgICBlbnZbZXh0cmFjdEpzVmFsdWUobmV4dChlcmxQYXJhbXMpKV0gPSBlcmxBcmdzO1xuICAgICAgcmV0dXJuIGVudjtcbiAgICB9IGVsc2Uge1xuICAgICAgZW52W2pzUGFyYW1dID0gY2FyKGVybEFyZ3MpO1xuICAgICAgZXJsUGFyYW1zID0gY2RyKGVybFBhcmFtcyk7XG4gICAgICBlcmxBcmdzID0gY2RyKGVybEFyZ3MpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZW52O1xufTtcblxudmFyIGNyZWF0ZU1hY3JvID0gZnVuY3Rpb24oZXJsTGlzdCwgZW52cykge1xuICByZXR1cm4gY3JlYXRlRXJsTWFjcm8oe1xuICAgIGxvY2FsRW52czogZW52cy5zbGljZSgwKSxcbiAgICBlcmxFeHByZXNzaW9uOiBuZXh0KGVybExpc3QpLFxuICAgIGVybFBhcmFtZXRlcnM6IGNhcihlcmxMaXN0KVxuICB9KTtcbn07XG5cbnZhciBkZWZpbmVOZXdWYWx1ZSA9IGZ1bmN0aW9uKGVybExpc3QsIGVudnMsIGFkZFJlc3VsdCkge1xuICB2YXIganNLZXkgPSBleHRyYWN0SnNWYWx1ZShjYXIoZXJsTGlzdCkpO1xuICB2YXIgZXJsVmFsdWUgPSBfZXZhbHVhdGUobmV4dChlcmxMaXN0KSwgZW52cywgYWRkUmVzdWx0KTtcbiAgcmV0dXJuIHNldE1haW5FbnYoZW52cywganNLZXksIGVybFZhbHVlKTtcbn07XG5cbnZhciBldmFsUXVhc2lxdW90ZWRFeHByID0gZnVuY3Rpb24oZXhwciwgZW52cywgYWRkUmVzdWx0KSB7XG4gIGlmICghaXNFcmxMaXN0KGV4cHIpKSB7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cbiAgdmFyIG1hbmFnZUl0ZW0gPSBmdW5jdGlvbihtZW1vLCBpdGVtKSB7XG4gICAgaWYgKGlzVW5xdW90ZWRFeHByKGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KF9ldmFsdWF0ZShuZXh0KGl0ZW0pLCBlbnZzLCBhZGRSZXN1bHQpLCBtZW1vKTtcbiAgICB9IGVsc2UgaWYgKGlzU3BsaWNlVW5xdW90ZWRFeHByKGl0ZW0pKSB7XG4gICAgICAgIHZhciBfbWFuYWdlSXRlbSA9IGZ1bmN0aW9uKF9tZW1vLCBfaXRlbSkge1xuICAgICAgICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KF9pdGVtLCBfbWVtbyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZWR1Y2UobWVtbywgX21hbmFnZUl0ZW0sIF9ldmFsdWF0ZShuZXh0KGl0ZW0pLCBlbnZzLCBhZGRSZXN1bHQpKTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsTGlzdChpdGVtKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRXJsTGlzdChldmFsUXVhc2lxdW90ZWRFeHByKGl0ZW0sIGVudnMsIGFkZFJlc3VsdCksIG1lbW8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KGl0ZW0sIG1lbW8pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHJldmVyc2UocmVkdWNlKGNyZWF0ZUVybExpc3QoKSwgbWFuYWdlSXRlbSwgZXhwcikpO1xufTtcblxudmFyIF9ldmFsdWF0ZSA9IGZ1bmN0aW9uKGVybEV4cHIsIGVudnMsIGFkZFJlc3VsdCkge1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIGlmIChpc0VybFN5bWJvbChlcmxFeHByKSkge1xuICAgICAgdmFyIGpzU3RyaW5nID0gZXh0cmFjdEpzVmFsdWUoZXJsRXhwcik7XG4gICAgICBpZiAoaXNLZXl3b3JkKGpzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRXJsS2V5d29yZChqc1N0cmluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9va3VwKGVudnMsIGpzU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzRXJsSW5kZXgoZXJsRXhwcikpIHtcbiAgICAgIHZhciBpbmRleCA9IGV4dHJhY3RKc1ZhbHVlKGVybEV4cHIpO1xuICAgICAgdmFyIG5ld0luZGV4ID0ge307XG4gICAgICBmb3IgKHZhciBrZXkgaW4gaW5kZXgpIHtcbiAgICAgICAgaWYgKCFfX2hhc1Byb3AuY2FsbChpbmRleCwga2V5KSkgY29udGludWU7XG4gICAgICAgIG5ld0luZGV4W2tleV0gPSBfZXZhbHVhdGUoaW5kZXhba2V5XSwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjcmVhdGVFcmxJbmRleChuZXdJbmRleCk7XG4gICAgfSBlbHNlIGlmICghKGlzRXJsTGlzdChlcmxFeHByKSkpIHtcbiAgICAgIHJldHVybiBlcmxFeHByO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcmxFeHByID0gZmlsdGVyKChmdW5jdGlvbih4KSB7XG4gICAgICAgIHJldHVybiAhKGlnbm9yYWJsZSh4LCBlbnZzLCBhZGRSZXN1bHQpKTtcbiAgICAgIH0pLCBlcmxFeHByKTtcbiAgICAgIHZhciBlcmxFeHByQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxFeHByKTtcbiAgICAgIHZhciBoZWFkID0gZXJsRXhwckFycmF5WzBdO1xuICAgICAgdmFyIGFyZzEgPSBlcmxFeHByQXJyYXlbMV07XG4gICAgICB2YXIgcmVtYWluaW5nQXJncyA9IGVybEV4cHJBcnJheVsyXTtcbiAgICAgIHZhciB0YWlsTGlzdCA9IGNkcihlcmxFeHByKTtcbiAgICAgIHN3aXRjaCAoZXh0cmFjdEpzVmFsdWUoaGVhZCkpIHtcbiAgICAgICAgY2FzZSBkZWZCYW5nOlxuICAgICAgICAgIHJldHVybiBkZWZpbmVOZXdWYWx1ZSh0YWlsTGlzdCwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgY2FzZSB1bmRlZkJhbmc6XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lVmFsdWUodGFpbExpc3QsIGVudnMpO1xuICAgICAgICBjYXNlIF9ldmFsOlxuICAgICAgICAgIGVybEV4cHIgPSBfZXZhbHVhdGUoYXJnMSwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBfZXZhbFdpdGhFbnY6XG4gICAgICAgICAgZW52cyA9IFtmcm9tRXJsSW5kZXgoX2V2YWx1YXRlKGFyZzEsIGVudnMsIGFkZFJlc3VsdCkpXTtcbiAgICAgICAgICBlcmxFeHByID0gX2V2YWx1YXRlKGNhcihyZW1haW5pbmdBcmdzKSwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsZXRTdGFyOlxuICAgICAgICAgIGVybEV4cHIgPSBjYXIocmVtYWluaW5nQXJncyk7XG4gICAgICAgICAgZW52cyA9IGFkZEVudihlbnZzLCByZWR1Y2VMZXQoZW52cywgYXJnMSwgYWRkUmVzdWx0KSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGV0cmVjU3RhcjpcbiAgICAgICAgICBlcmxFeHByID0gY2FyKHJlbWFpbmluZ0FyZ3MpO1xuICAgICAgICAgIGVudnMgPSBhZGRFbnYoZW52cywgcmVkdWNlTGV0cmVjKGVudnMsIGFyZzEsIGFkZFJlc3VsdCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIF9kbzpcbiAgICAgICAgICByZXR1cm4gZm9yRWFjaChldmFsdWF0ZShlbnZzLCBhZGRSZXN1bHQpLCB0YWlsTGlzdCk7XG4gICAgICAgIGNhc2UgX2dldEN1cnJlbnRFbnY6XG4gICAgICAgICAgcmV0dXJuIGZyb21Kc09iamVjdHMuYXBwbHkobnVsbCwgZW52cy5yZXZlcnNlKCkpO1xuICAgICAgICBjYXNlIF9nZXREZWZhdWx0RW52OlxuICAgICAgICAgIHJldHVybiBmcm9tSnNPYmplY3RzKGVudnNbZW52cy5sZW5ndGggLSAxXSk7XG4gICAgICAgIGNhc2UgX2lmOlxuICAgICAgICAgIGlmIChleHRyYWN0SnNWYWx1ZShfZXZhbHVhdGUoYXJnMSwgZW52cywgYWRkUmVzdWx0KSkpIHtcbiAgICAgICAgICAgIGVybEV4cHIgPSBjYXIocmVtYWluaW5nQXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIG90aGVyd2lzZSA9IG5leHQocmVtYWluaW5nQXJncyk7XG4gICAgICAgICAgaWYgKGlzRW1wdHkob3RoZXJ3aXNlKSkge1xuICAgICAgICAgICAgZXJsRXhwciA9IGVybE5pbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJsRXhwciA9IG90aGVyd2lzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZm5TdGFyOlxuICAgICAgICAgIHJldHVybiBjcmVhdGVGbih0YWlsTGlzdCwgZW52cyk7XG4gICAgICAgIGNhc2UgbWFjcm9TdGFyOlxuICAgICAgICAgIHJldHVybiBjcmVhdGVNYWNybyh0YWlsTGlzdCwgZW52cyk7XG4gICAgICAgIGNhc2UgcXVvdGU6XG4gICAgICAgICAgcmV0dXJuIGNhcih0YWlsTGlzdCk7XG4gICAgICAgIGNhc2UgcXVhc2lxdW90ZTpcbiAgICAgICAgICByZXR1cm4gZXZhbFF1YXNpcXVvdGVkRXhwcihjYXIodGFpbExpc3QpLCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICBjYXNlIGV4cGFuZE1hY3JvOlxuICAgICAgICAgIHJldHVybiBfZXhwYW5kTWFjcm8oY2FyKGFyZzEpLCBjZHIoYXJnMSksIGVudnMsIGFkZFJlc3VsdCk7XG4gICAgICAgIGNhc2UgdHJ5U3RhcjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIF9ldmFsdWF0ZShhcmcxLCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICAgIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgICAgICAgICAgdmFyIGV4ID0gX2Vycm9yO1xuICAgICAgICAgICAgaWYgKGlzRW1wdHkocmVtYWluaW5nQXJncykpIHtcbiAgICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgcmVtYWluaW5nQXJnc0FycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMywgY2FyKHJlbWFpbmluZ0FyZ3MpKTtcbiAgICAgICAgICAgICAgdmFyIF9jYXRjaCA9IHJlbWFpbmluZ0FyZ3NBcnJheVswXTtcbiAgICAgICAgICAgICAgdmFyIF9leCA9IHJlbWFpbmluZ0FyZ3NBcnJheVsxXTtcbiAgICAgICAgICAgICAgdmFyIGNhdGNoRXhwciA9IHJlbWFpbmluZ0FyZ3NBcnJheVsyXTtcbiAgICAgICAgICAgICAgaWYgKChleHRyYWN0SnNWYWx1ZShfY2F0Y2gpKSAhPT0gXCJjYXRjaCpcIikge1xuICAgICAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChleCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXggPSBjcmVhdGVFcmxTdHJpbmcoY2lyY3VtcGVuZFF1b3RlcyhleC5tZXNzYWdlKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIG5ld0VudiA9IHt9O1xuICAgICAgICAgICAgICBuZXdFbnZbZXh0cmFjdEpzVmFsdWUoX2V4KV0gPSBleDtcbiAgICAgICAgICAgICAgcmV0dXJuIF9ldmFsdWF0ZShjYXRjaEV4cHIsIGFkZEVudihlbnZzLCBuZXdFbnYpLCBhZGRSZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB2YXIgZXJsU3ltYm9sID0gaGVhZDtcbiAgICAgICAgICBlcmxFeHByID0gdGFpbExpc3Q7XG4gICAgICAgICAgdmFyIGVybEludm9rYWJsZSA9IF9ldmFsdWF0ZShlcmxTeW1ib2wsIGVudnMsIGFkZFJlc3VsdCk7XG4gICAgICAgICAgaWYgKGlzRXJsS2V5d29yZChlcmxJbnZva2FibGUpKSB7XG4gICAgICAgICAgICBlcmxFeHByID0gY3JlYXRlRXJsTGlzdChlcmxJbnZva2FibGUsIHRhaWxMaXN0KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzRXJsTWFjcm8oZXJsSW52b2thYmxlKSkge1xuICAgICAgICAgICAgZXJsRXhwciA9IF9leHBhbmRNYWNybyhoZWFkLCB0YWlsTGlzdCwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzRXJsQ29yZVB1cmVGdW5jdGlvbihlcmxJbnZva2FibGUpKSB7XG4gICAgICAgICAgICB2YXIgZm4gPSBleHRyYWN0SnNWYWx1ZShlcmxJbnZva2FibGUpO1xuICAgICAgICAgICAgdmFyIGVybEFyZ3MgPSBtYXAoZXZhbHVhdGUoZW52cywgYWRkUmVzdWx0KSwgZXJsRXhwcik7XG4gICAgICAgICAgICByZXR1cm4gZm4oZXJsQXJncyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0VybENvcmVFZmZlY3RmdWxGdW5jdGlvbihlcmxJbnZva2FibGUpKSB7XG4gICAgICAgICAgICB2YXIgZm4gPSBleHRyYWN0SnNWYWx1ZShlcmxJbnZva2FibGUpO1xuICAgICAgICAgICAgdmFyIGVybEFyZ3MgPSBtYXAoZXZhbHVhdGUoZW52cywgYWRkUmVzdWx0KSwgZXJsRXhwcik7XG4gICAgICAgICAgICBhZGRSZXN1bHQoZm4oZXJsQXJncykpO1xuICAgICAgICAgICAgcmV0dXJuIGVybE5pbDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzRXJsVXNlclB1cmVGdW5jdGlvbihlcmxJbnZva2FibGUpKSB7XG4gICAgICAgICAgICB2YXIganNWYWx1ZSA9IGV4dHJhY3RKc1ZhbHVlKGVybEludm9rYWJsZSk7XG4gICAgICAgICAgICB2YXIgbG9jYWxFbnZzID0ganNWYWx1ZS5sb2NhbEVudnM7XG4gICAgICAgICAgICB2YXIgZXJsRXhwcmVzc2lvbiA9IGpzVmFsdWUuZXJsRXhwcmVzc2lvbjtcbiAgICAgICAgICAgIHZhciBlcmxQYXJhbWV0ZXJzID0ganNWYWx1ZS5lcmxQYXJhbWV0ZXJzO1xuICAgICAgICAgICAgdmFyIGVybEFyZ3MgPSBtYXAoZXZhbHVhdGUoZW52cywgYWRkUmVzdWx0KSwgZXJsRXhwcik7XG4gICAgICAgICAgICBlcmxFeHByID0gZXJsRXhwcmVzc2lvbjtcbiAgICAgICAgICAgIHZhciBuZXdFbnYgPSBjcmVhdGVMb2NhbEVudihlcmxQYXJhbWV0ZXJzLCBlcmxBcmdzKTtcbiAgICAgICAgICAgIGVudnMgPSBhZGRFbnYobG9jYWxFbnZzLCBuZXdFbnYpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBcIlwiXG4gICAgICAgICAgICAgICsgKGV4dHJhY3RKc1ZhbHVlKGVybFN5bWJvbCkpXG4gICAgICAgICAgICAgICsgXCIgZG9lcyBub3QgZXZhbHVhdGUgdG8gYSBmdW5jdGlvbiwgbWFjcm8sIG9yIGtleXdvcmQuXCI7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudmFyIGV2YWx1YXRlID0gZnVuY3Rpb24oZW52cywgYWRkUmVzdWx0KSB7XG4gIHJldHVybiBmdW5jdGlvbihlcmxFeHByKSB7XG4gICAgaWYgKGVybEV4cHIgPT09IGNvbW1lbnRTaWduYWwpIHtcbiAgICAgIHJldHVybiBjb21tZW50U2lnbmFsO1xuICAgIH1cbiAgICByZXR1cm4gX2V2YWx1YXRlKGVybEV4cHIsIGVudnMsIGFkZFJlc3VsdCk7XG4gIH07XG59O1xuXG52YXIgX2V4cGFuZE1hY3JvID0gZnVuY3Rpb24oZXJsTWFjcm9TeW1ib2wsIGVybEFyZ3MsIGVudnMsIGFkZFJlc3VsdCkge1xuICB2YXIgZXJsTWFjcm8gPSBfZXZhbHVhdGUoZXJsTWFjcm9TeW1ib2wsIGVudnMsIGFkZFJlc3VsdCk7XG4gIHZhciBqc1ZhbHVlID0gZXh0cmFjdEpzVmFsdWUoZXJsTWFjcm8pO1xuICB2YXIgbG9jYWxFbnZzID0ganNWYWx1ZS5sb2NhbEVudnM7XG4gIHZhciBlcmxFeHByZXNzaW9uID0ganNWYWx1ZS5lcmxFeHByZXNzaW9uO1xuICB2YXIgZXJsUGFyYW1ldGVycyA9IGpzVmFsdWUuZXJsUGFyYW1ldGVycztcbiAgdmFyIG5ld0VudiA9IGNyZWF0ZUxvY2FsRW52KGVybFBhcmFtZXRlcnMsIGVybEFyZ3MpO1xuICB2YXIgbmV3RW52U3RhY2sgPSBhZGRFbnYobG9jYWxFbnZzLCBuZXdFbnYpO1xuICByZXR1cm4gX2V2YWx1YXRlKGVybEV4cHJlc3Npb24sIG5ld0VudlN0YWNrLCBhZGRSZXN1bHQpO1xufTtcblxudmFyIGlnbm9yYWJsZSA9IGZ1bmN0aW9uKGVybFZhbCwgZW52cywgYWRkUmVzdWx0KSB7XG4gIGlmIChpc0VybElnbm9yZShlcmxWYWwpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKCFpc0VybExpc3QoZXJsVmFsKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgc3ltYm9sID0gY2FyKGVybFZhbCk7XG4gIGlmICghaXNFcmxTeW1ib2woc3ltYm9sKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIganNTdHJpbmcgPSBleHRyYWN0SnNWYWx1ZShzeW1ib2wpO1xuICBpZiAoanNTdHJpbmcgPT09ICdpZ25vcmUnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGpzU3RyaW5nID09PSAnaWdub3JlSWZUcnVlJykge1xuICAgIHJldHVybiBleHRyYWN0SnNWYWx1ZShfZXZhbHVhdGUobmV4dChlcmxWYWwpLCBlbnZzLCBhZGRSZXN1bHQpKTtcbiAgfVxuICBpZiAoanNTdHJpbmcgPT09ICdpZ25vcmVVbmxlc3NUcnVlJykge1xuICAgIHJldHVybiAhZXh0cmFjdEpzVmFsdWUoX2V2YWx1YXRlKG5leHQoZXJsVmFsKSwgZW52cywgYWRkUmVzdWx0KSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIHJlZHVjZUxldCA9IGZ1bmN0aW9uKGVudnMsIGxpc3QsIGFkZFJlc3VsdCkge1xuICB2YXIgbmV3RW52ID0ge307XG4gIHZhciBfZW52cyA9IGFkZEVudihlbnZzLCBuZXdFbnYpO1xuICB3aGlsZSAoIWlzRW1wdHkobGlzdCkpIHtcbiAgICB2YXIganNLZXkgPSBleHRyYWN0SnNWYWx1ZShsaXN0LnZhbHVlKTtcbiAgICBsaXN0ID0gcmVjdXJzZShsaXN0KTtcbiAgICB2YXIgZW52VmFsdWUgPSBfZXZhbHVhdGUobGlzdC52YWx1ZSwgX2VudnMsIGFkZFJlc3VsdCk7XG4gICAgbmV3RW52W2pzS2V5XSA9IGVudlZhbHVlO1xuICAgIGxpc3QgPSByZWN1cnNlKGxpc3QpO1xuICB9XG4gIHJldHVybiBuZXdFbnY7XG59O1xuXG52YXIgcmVkdWNlTGV0cmVjID0gZnVuY3Rpb24oZW52cywgbGlzdCwgYWRkUmVzdWx0KSB7XG4gIHZhciBuZXdFbnYgPSB7fTtcbiAgdmFyIF9lbnZzID0gYWRkRW52KGVudnMsIG5ld0Vudik7XG4gIHdoaWxlICghaXNFbXB0eShsaXN0KSkge1xuICAgIHZhciBqc0tleSA9IGV4dHJhY3RKc1ZhbHVlKGxpc3QudmFsdWUpO1xuICAgIGxpc3QgPSByZWN1cnNlKGxpc3QpO1xuICAgIHZhciBfZXJsRXhwciA9IGZyb21BcnJheShcbiAgICAgIFsgIGNyZWF0ZUVybFN5bWJvbChcImZpeCpcIiksXG4gICAgICAgICBmcm9tQXJyYXkoW2NyZWF0ZUVybFN5bWJvbChcImZuKlwiKSxcbiAgICAgICAgIGZyb21BcnJheShbanNLZXldKSxcbiAgICAgICAgIGxpc3QudmFsdWVdKVxuICAgICAgXSk7XG4gICAgdmFyIGVudlZhbHVlID0gX2V2YWx1YXRlKF9lcmxFeHByLCBfZW52cywgYWRkUmVzdWx0KTtcbiAgICBuZXdFbnZbanNLZXldID0gZW52VmFsdWU7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gIH1cbiAgcmV0dXJuIG5ld0Vudjtcbn07XG5cbnZhciBpc1NwbGljZVVucXVvdGUgPSBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICByZXR1cm4gKGV4dHJhY3RKc1ZhbHVlKGVybFZhbHVlKSkgPT09IHNwbGljZVVucXVvdGU7XG59O1xuXG52YXIgaXNTcGxpY2VVbnF1b3RlZEV4cHIgPSBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICByZXR1cm4gaXNFcmxMaXN0KGVybFZhbHVlKSAmJiBpc1NwbGljZVVucXVvdGUoY2FyKGVybFZhbHVlKSk7XG59O1xuXG52YXIgdW5kZWZpbmVWYWx1ZSA9IGZ1bmN0aW9uKGVybExpc3QsIGVudnMpIHtcbiAgdmFyIGpzS2V5ID0gZXh0cmFjdEpzVmFsdWUoY2FyKGVybExpc3QpKTtcbiAgcmV0dXJuIHVuc2V0TWFpbkVudihlbnZzLCBqc0tleSk7XG59O1xuXG52YXIgaXNVbnF1b3RlID0gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgcmV0dXJuIGV4dHJhY3RKc1ZhbHVlKGVybFZhbHVlKSA9PT0gdW5xdW90ZTtcbn07XG5cbnZhciBpc1VucXVvdGVkRXhwciA9IGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gIHJldHVybiBpc0VybExpc3QoZXJsVmFsdWUpICYmIGlzVW5xdW90ZShjYXIoZXJsVmFsdWUpKTtcbn07XG5cbmV4cG9ydCB7IGV2YWx1YXRlIH07XG4iLCJpbXBvcnQgeyBnZXRFbnZpcm9ubWVudCBhcyBzZXRFbnYwIH0gZnJvbSAnLi9lbnYwJztcbmltcG9ydCB7IGdldEVudmlyb25tZW50IGFzIHNldEVudjEgfSBmcm9tICcuL2VudjEnO1xuaW1wb3J0IHsgZ2V0RW52aXJvbm1lbnQgYXMgc2V0RW52MiB9IGZyb20gJy4vZW52Mic7XG5pbXBvcnQgeyBnZXRFbnZpcm9ubWVudCBhcyBzZXRFbnYzIH0gZnJvbSAnLi9lbnYzJztcbmltcG9ydCB7IGdldEVudmlyb25tZW50IGFzIHNldEVudjQgfSBmcm9tICcuL2VudjQnO1xuXG52YXIgZ2V0TGlzcEVudmlyb25tZW50ID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gIHZhciBkaXNwbGF5ID0gY29uZmlnLmRpc3BsYXk7XG4gIHZhciBlbnZpcm9ubWVudCA9IHt9O1xuICBjb25maWcgPSB7XG4gICAgZGlzcGxheTogZGlzcGxheSxcbiAgICBlbnZpcm9ubWVudDogZW52aXJvbm1lbnRcbiAgfTtcbiAgc2V0RW52MChjb25maWcpO1xuICBzZXRFbnYxKGNvbmZpZyk7XG4gIHNldEVudjIoY29uZmlnKTtcbiAgc2V0RW52Myhjb25maWcpO1xuICBzZXRFbnY0KGNvbmZpZyk7XG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn07XG5cbmV4cG9ydCB7IGdldExpc3BFbnZpcm9ubWVudCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzSnNTdHJpbmcgfSBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5cbnZhciBfX3NsaWNlICAgPSBbXS5zbGljZTtcbnZhciBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGZyb21FcmxJbmRleCA9IGZ1bmN0aW9uKGVybEluZGV4KSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgdmFyIGpzVmFsdWUgPSBlcmxJbmRleC5qc1ZhbHVlO1xuICBmb3IgKHZhciBrZXkgaW4ganNWYWx1ZSkge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoanNWYWx1ZSwga2V5KSkgY29udGludWU7XG4gICAgdmFyIHZhbHVlID0ganNWYWx1ZVtrZXldO1xuICAgIGlmIChpc0pzU3RyaW5nKGtleSkpIHtcbiAgICAgIHZhciBuZXdLZXkgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHN3aXRjaCAoa2V5WzBdKSB7XG4gICAgICAgICAgY2FzZSAnOic6XG4gICAgICAgICAgICByZXR1cm4ga2V5LnNsaWNlKDEpO1xuICAgICAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgICAgIHJldHVybiBrZXkuc2xpY2UoMSwgLTEpO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICB9KSgpO1xuICAgICAgcmVzdWx0W25ld0tleV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBmcm9tSnNPYmplY3RzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBqc09iamVjdHMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICB2YXIgY29weSA9IHt9O1xuICB2YXIgbGVuID0ganNPYmplY3RzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7ICBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIganNPYmplY3QgPSBqc09iamVjdHNbaV07XG4gICAgZm9yICh2YXIga2V5IGluIGpzT2JqZWN0KSB7XG4gICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGpzT2JqZWN0LCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHZhciB2YWwgPSBqc09iamVjdFtrZXldO1xuICAgICAgaWYgKGlzSnNTdHJpbmcoa2V5KSkge1xuICAgICAgICBjb3B5Wyc6JyArIGtleV0gPSB2YWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3B5W2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjcmVhdGVFcmxJbmRleChjb3B5KTtcbn07XG5cbmV4cG9ydCB7XG4gIGZyb21Kc09iamVjdHMsXG4gIGZyb21FcmxJbmRleFxufTtcbiIsImltcG9ydCB7IGNpcmN1bXBlbmRRdW90ZXMgfSAgIGZyb20gJy4vanMtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN0cmluZyB9ICAgIGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZnJvbUFycmF5IH0gICAgICAgICAgZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBnZXRMaXNwRW52aXJvbm1lbnQgfSBmcm9tICcuL2dldExpc3BFbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBfcHJvY2VzcyB9ICAgICAgICAgICBmcm9tICcuL19wcm9jZXNzJztcbmltcG9ydCB7IHNlcmlhbGl6ZSB9ICAgICAgICAgIGZyb20gJy4vc2VyaWFsaXplJztcbmltcG9ydCBzdGFuZGFyZEZuc0FuZE1hY3JvcyAgIGZyb20gJy4vc3RhbmRhcmQtZm5zLWFuZC1tYWNyb3MubGlzcCc7XG5pbXBvcnQgeyB0b2tlbml6ZUFuZFBhcnNlIH0gICBmcm9tICcuL3Rva2VuaXplQW5kUGFyc2UnO1xuXG52YXIgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbnZhciBfY3JlYXRlRXJsU3RyaW5nID0gZnVuY3Rpb24oanNTdHJpbmcpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhjaXJjdW1wZW5kUXVvdGVzKGpzU3RyaW5nKSk7XG59O1xuXG52YXIgZW5jYXBzdWxhdGUgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBlZmZlY3Q6IHtcbiAgICAgICAgdHlwZTogdHlwZVxuICAgICAgfSxcbiAgICAgIHZhbHVlOiBlcmxWYWx1ZVxuICAgIH07XG4gIH07XG59O1xuXG52YXIgZXJyb3IgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UpIHtcbiAgcmV0dXJuIFtlbmNhcHN1bGF0ZSgnZXJyb3InKShcInJlcGwgZXJyb3I6IChcIiArIGVycm9yTWVzc2FnZSArIFwiKVwiKV07XG59O1xuXG52YXIgZmxhdHRlbklmTmVjZXNzYXJ5ID0gZnVuY3Rpb24oZWZmZWN0cykge1xuICB2YXIgdmFsdWU7XG4gIHZhciByZXN1bHQgPSBlZmZlY3RzO1xuICB3aGlsZSAocmVzdWx0Lmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KHZhbHVlID0gcmVzdWx0WzBdLnZhbHVlKSkge1xuICAgIHJlc3VsdCA9IGZsYXR0ZW5JZk5lY2Vzc2FyeSh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBfaW50ZXJwcmV0ID0gZnVuY3Rpb24oZW52cywganNTdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gX3NlcmlhbGl6ZShcbiAgICAgIGZsYXR0ZW5JZk5lY2Vzc2FyeShcbiAgICAgICAgX3Byb2Nlc3ModG9rZW5pemVBbmRQYXJzZSkoZW52cykoanNTdHJpbmcpKSk7XG4gIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgIHJldHVybiBlcnJvcihfZXJyb3IpO1xuICB9XG59O1xuXG52YXIgaW50ZXJwcmV0ID0gZnVuY3Rpb24oanNTdHJpbmcsIHVzZXJKc0FycmF5KSB7XG4gIGlmICh1c2VySnNBcnJheSAhPSBudWxsKSB7XG4gICAgdmFyIHVzZXJFbnYgPSB7XG4gICAgICAnKkFSR1YqJzogZnJvbUFycmF5KHVzZXJKc0FycmF5Lm1hcChfY3JlYXRlRXJsU3RyaW5nKSlcbiAgICB9O1xuICAgIHJldHVybiBfaW50ZXJwcmV0KFt1c2VyRW52LCBlbnZpcm9ubWVudF0sIGpzU3RyaW5nKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gX2ludGVycHJldChbZW52aXJvbm1lbnRdLCBqc1N0cmluZyk7XG4gIH1cbn07XG5cbnZhciBfc2VyaWFsaXplID0gZnVuY3Rpb24ocmVzdWx0cykge1xuICByZXR1cm4gcmVzdWx0cy5tYXAoZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgdmFyIF9yZXN1bHQgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKHJlc3VsdCwga2V5KSkgY29udGludWU7XG4gICAgICB2YXIgdmFsdWUgPSByZXN1bHRba2V5XTtcbiAgICAgIGlmIChrZXkgPT09ICdlZmZlY3QnKSB7XG4gICAgICAgIF9yZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3Jlc3VsdFtrZXldID0gc2VyaWFsaXplKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF9yZXN1bHQ7XG4gIH0pO1xufTtcblxudmFyIGVudmlyb25tZW50ID0gZ2V0TGlzcEVudmlyb25tZW50KHtcbiAgZGlzcGxheTogZW5jYXBzdWxhdGUoJ2Rpc3BsYXknKVxufSk7XG5cbmludGVycHJldChzdGFuZGFyZEZuc0FuZE1hY3Jvcyk7XG5cbmV4cG9ydCB7IGludGVycHJldCB9O1xuIiwidmFyIGNpcmN1bXBlbmRRdW90ZXMgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4gJ1wiJyArIGpzU3RyaW5nICsgJ1wiJztcbn07XG5cbnZhciBpc0pzTmFOID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiBpc0pzTnVtYmVyKHZhbCkgJiYgdmFsICE9PSB2YWw7XG59O1xuXG52YXIgaXNKc051bWJlciA9IGZ1bmN0aW9uKHZhbCkge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBOdW1iZXJdJztcbn07XG5cbnZhciBpc0pzU3RyaW5nID0gZnVuY3Rpb24oanNWYWwpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChqc1ZhbCkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufTtcblxuZXhwb3J0IHtcbiAgY2lyY3VtcGVuZFF1b3RlcyxcbiAgaXNKc05hTixcbiAgaXNKc051bWJlcixcbiAgaXNKc1N0cmluZ1xufTtcbiIsInZhciBkZXJlZiAgICAgICAgICAgICAgICAgPSAnZGVyZWYnO1xudmFyIGRlcmVmR2x5cGggICAgICAgICAgICA9ICdAJztcbnZhciBjYXRjaFN0YXIgICAgICAgICAgICAgPSAnY2F0Y2gqJztcbnZhciBkZWZCYW5nICAgICAgICAgICAgICAgPSAnZGVmISc7XG52YXIgX2RvICAgICAgICAgICAgICAgICAgID0gJ2RvJztcbnZhciBfZXZhbCAgICAgICAgICAgICAgICAgPSAnZXZhbCc7XG52YXIgX2V2YWxXaXRoRW52ICAgICAgICAgID0gJ2V2YWwtd2l0aC1lbnYnO1xudmFyIGV4cGFuZE1hY3JvICAgICAgICAgICA9ICdleHBhbmQtbWFjcm8nO1xudmFyIF9mYWxzZSAgICAgICAgICAgICAgICA9ICdmYWxzZSc7XG52YXIgZm5TdGFyICAgICAgICAgICAgICAgID0gJ2ZuKic7XG52YXIgX2dldEN1cnJlbnRFbnYgICAgICAgID0gJy1nZXQtY3VycmVudC1lbnYtJztcbnZhciBfZ2V0RGVmYXVsdEVudiAgICAgICAgPSAnLWdldC1kZWZhdWx0LWVudi0nO1xudmFyIF9pZiAgICAgICAgICAgICAgICAgICA9ICdpZic7XG52YXIgaWdub3JlQmFuZyAgICAgICAgICAgID0gJ2lnbm9yZSEnO1xudmFyIGlnbm9yZUJhbmdHbHlwaCAgICAgICA9ICcjISc7XG52YXIgaWdub3JlSWZUcnVlICAgICAgICAgID0gJ2lnbm9yZUlmVHJ1ZSc7XG52YXIgaWdub3JlSWZUcnVlR2x5cGggICAgID0gJyMtJztcbnZhciBpZ25vcmVVbmxlc3NUcnVlICAgICAgPSAnaWdub3JlVW5sZXNzVHJ1ZSc7XG52YXIgaWdub3JlVW5sZXNzVHJ1ZUdseXBoID0gJyMrJztcbnZhciBpZ25vcmUgICAgICAgICAgICAgICAgPSAnaWdub3JlJztcbnZhciBpbmRleEVuZCAgICAgICAgICAgICAgPSAnfSc7XG52YXIgaW5kZXhTdGFydCAgICAgICAgICAgID0gJ3snO1xudmFyIGxldFN0YXIgICAgICAgICAgICAgICA9ICdsZXQqJztcbnZhciBsZXRyZWNTdGFyICAgICAgICAgICAgPSAnbGV0cmVjKic7XG52YXIgbGlzdEVuZCAgICAgICAgICAgICAgID0gJyknO1xudmFyIGxpc3RTdGFydCAgICAgICAgICAgICA9ICcoJztcbnZhciBtYWNyb1N0YXIgICAgICAgICAgICAgPSAnbWFjcm8qJztcbnZhciBuaWwgICAgICAgICAgICAgICAgICAgPSAnbmlsJztcbnZhciBfcHJvY2VzcyAgICAgICAgICAgICAgPSAnLXByb2Nlc3MtJztcbnZhciBxdWFzaXF1b3RlICAgICAgICAgICAgPSAncXVhc2lxdW90ZSc7XG52YXIgcXVhc2lxdW90ZUdseXBoICAgICAgID0gJ2AnO1xudmFyIHF1b3RlICAgICAgICAgICAgICAgICA9ICdxdW90ZSc7XG52YXIgcXVvdGVHbHlwaCAgICAgICAgICAgID0gJ1xcJyc7XG52YXIgc3BsYXQgICAgICAgICAgICAgICAgID0gJyYnO1xudmFyIHNwbGljZVVucXVvdGUgICAgICAgICA9ICdzcGxpY2UtdW5xdW90ZSc7XG52YXIgc3BsaWNlVW5xdW90ZUdseXBoICAgID0gJ35AJztcbnZhciBfdHJ1ZSAgICAgICAgICAgICAgICAgPSAndHJ1ZSc7XG52YXIgdHJ5U3RhciAgICAgICAgICAgICAgID0gJ3RyeSonO1xudmFyIHVuZGVmQmFuZyAgICAgICAgICAgICA9ICd1bmRlZiEnO1xudmFyIHVucXVvdGUgICAgICAgICAgICAgICA9ICd1bnF1b3RlJztcbnZhciB1bnF1b3RlR2x5cGggICAgICAgICAgPSAnfidcblxudmFyIGtleVRva2VucyA9IFtcbiAgZGVyZWYsXG4gIGRlcmVmR2x5cGgsXG4gIGNhdGNoU3RhcixcbiAgZGVmQmFuZyxcbiAgX2RvLFxuICBfZXZhbCxcbiAgX2V2YWxXaXRoRW52LFxuICBleHBhbmRNYWNybyxcbiAgX2ZhbHNlLFxuICBmblN0YXIsXG4gIF9nZXRDdXJyZW50RW52LFxuICBfZ2V0RGVmYXVsdEVudixcbiAgX2lmLFxuICBpZ25vcmVCYW5nLFxuICBpZ25vcmVCYW5nR2x5cGgsXG4gIGlnbm9yZUlmVHJ1ZSxcbiAgaWdub3JlSWZUcnVlR2x5cGgsXG4gIGlnbm9yZVVubGVzc1RydWUsXG4gIGlnbm9yZVVubGVzc1RydWVHbHlwaCxcbiAgaWdub3JlLFxuICBpbmRleEVuZCxcbiAgaW5kZXhTdGFydCxcbiAgbGV0U3RhcixcbiAgbGV0cmVjU3RhcixcbiAgbGlzdEVuZCxcbiAgbGlzdFN0YXJ0LFxuICBtYWNyb1N0YXIsXG4gIG5pbCxcbiAgX3Byb2Nlc3MsXG4gIHF1YXNpcXVvdGUsXG4gIHF1YXNpcXVvdGVHbHlwaCxcbiAgcXVvdGUsXG4gIHF1b3RlR2x5cGgsXG4gIHNwbGF0LFxuICBzcGxpY2VVbnF1b3RlLFxuICBzcGxpY2VVbnF1b3RlR2x5cGgsXG4gIF90cnVlLFxuICB0cnlTdGFyLFxuICB1bmRlZkJhbmcsXG4gIHVucXVvdGUsXG4gIHVucXVvdGVHbHlwaFxuXTtcblxudmFyIGtleXdvcmRzID0gW1xuICBjYXRjaFN0YXIsXG4gIGRlZkJhbmcsXG4gIF9kbyxcbiAgX2V2YWwsXG4gIF9ldmFsV2l0aEVudixcbiAgZXhwYW5kTWFjcm8sXG4gIF9mYWxzZSxcbiAgZm5TdGFyLFxuICBfZ2V0Q3VycmVudEVudixcbiAgX2dldERlZmF1bHRFbnYsXG4gIF9pZixcbiAgaWdub3JlLFxuICBsZXRTdGFyLFxuICBsZXRyZWNTdGFyLFxuICBtYWNyb1N0YXIsXG4gIG5pbCxcbiAgX3Byb2Nlc3MsXG4gIHF1YXNpcXVvdGUsXG4gIHF1b3RlLFxuICBzcGxpY2VVbnF1b3RlLFxuICBfdHJ1ZSxcbiAgdHJ5U3RhcixcbiAgdW5kZWZCYW5nLFxuICB1bnF1b3RlXG5dO1xuXG52YXIgbWFjcm9Ub2tlbnMgPSBbcXVhc2lxdW90ZSwgcXVvdGUsIHNwbGljZVVucXVvdGUsIHVucXVvdGVdO1xuXG52YXIgZ2x5cGhUb2tlbnMgPSBbXG4gIGRlcmVmR2x5cGgsXG4gIGlnbm9yZUJhbmdHbHlwaCxcbiAgcXVhc2lxdW90ZUdseXBoLFxuICBxdW90ZUdseXBoLFxuICBzcGxpY2VVbnF1b3RlR2x5cGgsXG4gIHVucXVvdGVHbHlwaFxuXTtcblxudmFyIGJpbmFyeUdseXBoVG9rZW5zID0gW2lnbm9yZUlmVHJ1ZUdseXBoLCBpZ25vcmVVbmxlc3NUcnVlR2x5cGhdO1xuXG52YXIgX19pbmRleE9mID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICB9IHJldHVybiAtMTtcbn07XG5cbnZhciBpc0tleXdvcmQgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4gX19pbmRleE9mLmNhbGwoa2V5d29yZHMsIGpzU3RyaW5nKSA+PSAwO1xufTtcblxuZXhwb3J0IHtcbiAgYmluYXJ5R2x5cGhUb2tlbnMsXG4gIGRlcmVmLFxuICBkZXJlZkdseXBoLFxuICBjYXRjaFN0YXIsXG4gIGRlZkJhbmcsXG4gIF9kbyxcbiAgX2V2YWwsXG4gIF9ldmFsV2l0aEVudixcbiAgZXhwYW5kTWFjcm8sXG4gIF9mYWxzZSxcbiAgZm5TdGFyLFxuICBfZ2V0Q3VycmVudEVudixcbiAgX2dldERlZmF1bHRFbnYsXG4gIGdseXBoVG9rZW5zLFxuICBfaWYsXG4gIGlnbm9yZUlmVHJ1ZSxcbiAgaWdub3JlSWZUcnVlR2x5cGgsXG4gIGlnbm9yZVVubGVzc1RydWUsXG4gIGlnbm9yZVVubGVzc1RydWVHbHlwaCxcbiAgaWdub3JlLFxuICBpZ25vcmVCYW5nLFxuICBpZ25vcmVCYW5nR2x5cGgsXG4gIGluZGV4RW5kLFxuICBpbmRleFN0YXJ0LFxuICBrZXlUb2tlbnMsXG4gIGlzS2V5d29yZCxcbiAgbGV0U3RhcixcbiAgbGV0cmVjU3RhcixcbiAgbGlzdEVuZCxcbiAgbGlzdFN0YXJ0LFxuICBtYWNyb1N0YXIsXG4gIG1hY3JvVG9rZW5zLFxuICBuaWwsXG4gIF9wcm9jZXNzLFxuICBxdWFzaXF1b3RlLFxuICBxdWFzaXF1b3RlR2x5cGgsXG4gIHF1b3RlLFxuICBxdW90ZUdseXBoLFxuICBzcGxhdCxcbiAgc3BsaWNlVW5xdW90ZSxcbiAgc3BsaWNlVW5xdW90ZUdseXBoLFxuICBfdHJ1ZSxcbiAgdHJ5U3RhcixcbiAgdW5kZWZCYW5nLFxuICB1bnF1b3RlLFxuICB1bnF1b3RlR2x5cGhcbn07XG4iLCJpbXBvcnQgeyBlcmxUeXBlcyB9IGZyb20gJy4vdHlwZXMnO1xuXG52YXIgZXJsTGlzdFR5cGUgPSBlcmxUeXBlc1s2XTtcblxudmFyIF9fc2xpY2UgPSBbXS5zbGljZTtcblxudmFyIGNhciA9IGZ1bmN0aW9uKGVybExpc3QpIHtcbiAgaWYgKGlzRW1wdHkoZXJsTGlzdCkpIHtcbiAgICByZXR1cm4gRU9MO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxMaXN0LnZhbHVlO1xuICB9XG59O1xuXG52YXIgY2RyID0gZnVuY3Rpb24oZXJsTGlzdCkge1xuICBpZiAoaXNFbXB0eShlcmxMaXN0KSkge1xuICAgIHJldHVybiBFT0w7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybExpc3QubmV4dDtcbiAgfVxufTtcblxudmFyIGFyZUVxdWFsID0gZnVuY3Rpb24obGlzdDAsIGxpc3QxLCBfYXJlRXF1YWwpIHtcbiAgd2hpbGUgKCEoaXNFbXB0eShsaXN0MCkgfHwgaXNFbXB0eShsaXN0MSkpKSB7XG4gICAgaWYgKCFfYXJlRXF1YWwobGlzdDAudmFsdWUsIGxpc3QxLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsaXN0MCA9IGNkcihsaXN0MCk7XG4gICAgbGlzdDEgPSBjZHIobGlzdDEpO1xuICB9XG4gIHJldHVybiBpc0VtcHR5KGxpc3QwKSAmJiBpc0VtcHR5KGxpc3QxKTtcbn07XG5cbnZhciBjb25jYXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGVybExpc3RzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgaWYgKGVybExpc3RzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBFT0w7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IGNvcHkoZXJsTGlzdHNbMF0pO1xuICB2YXIgdGFpbCA9IGxhc3RUYWlsKHJlc3VsdCk7XG4gIHZhciByZW1haW5pbmcgPSBlcmxMaXN0cy5zbGljZSgxKTtcbiAgdmFyIGxlbiA9IHJlbWFpbmluZy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgZXJsTGlzdCA9IHJlbWFpbmluZ1tpXTtcbiAgICB2YXIgX2NvcHkgPSBjb3B5KGVybExpc3QpO1xuICAgIGlmIChpc0VtcHR5KHRhaWwpKSB7XG4gICAgICByZXN1bHQgPSBfY29weTtcbiAgICAgIHRhaWwgPSBsYXN0VGFpbChyZXN1bHQpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghaXNFbXB0eShfY29weSkpIHtcbiAgICAgIHRhaWwubmV4dCA9IF9jb3B5O1xuICAgICAgdGFpbCA9IGxhc3RUYWlsKF9jb3B5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBjb25zID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY3JlYXRlRXJsTGlzdChjYXIoZXJsQXJncyksIG5leHQoZXJsQXJncykpO1xufTtcblxudmFyIGNvcHkgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIHJldHVybiBtYXAoKGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfSksIGVybExpc3QpO1xufTtcblxudmFyIGNyZWF0ZUVybExpc3QgPSBmdW5jdGlvbih2YWx1ZSwgbmV4dE5vZGUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gRU9MO1xuICB9XG4gIHJldHVybiBjcmVhdGVOb2RlKHZhbHVlLCBuZXh0Tm9kZSAhPSBudWxsID8gbmV4dE5vZGUgOiBFT0wpO1xufTtcblxudmFyIGNyZWF0ZU5vZGUgPSBmdW5jdGlvbih2YWx1ZSwgbmV4dE5vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBlcmxMaXN0VHlwZSxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgbmV4dDogbmV4dE5vZGVcbiAgfTtcbn07XG5cbnZhciBkcm9wID0gZnVuY3Rpb24obmJyLCBlcmxMaXN0KSB7XG4gIHdoaWxlIChuYnIgIT09IDApIHtcbiAgICBlcmxMaXN0ID0gY2RyKGVybExpc3QpO1xuICAgIG5iciA9IG5iciAtIDE7XG4gIH1cbiAgcmV0dXJuIGVybExpc3Q7XG59O1xuXG52YXIgaXNFbXB0eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gRU9MO1xufTtcblxudmFyIGZpbHRlciA9IGZ1bmN0aW9uKHByZWRpY2F0ZSwgbGlzdCkge1xuICB2YXIgX3JlZHVjZSA9IGZ1bmN0aW9uKGxpc3QsIHZhbHVlKSB7XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KHZhbHVlLCBsaXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICB9O1xuICByZXR1cm4gcmV2ZXJzZShyZWR1Y2UoRU9MLCBfcmVkdWNlLCBsaXN0KSk7XG59O1xuXG52YXIgZm9yRWFjaCA9IGZ1bmN0aW9uKGZuLCBsaXN0KSB7XG4gIHZhciByZXN1bHQgPSBsaXN0O1xuICB3aGlsZSAoIWlzRW1wdHkobGlzdCkpIHtcbiAgICByZXN1bHQgPSBmbihsaXN0LnZhbHVlKTtcbiAgICBsaXN0ID0gcmVjdXJzZShsaXN0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIGZyb21BcnJheSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gIHZhciBfcmVkdWNlID0gZnVuY3Rpb24obGlzdCwgdmFsdWUpIHtcbiAgICByZXR1cm4gY3JlYXRlRXJsTGlzdCh2YWx1ZSwgbGlzdCk7XG4gIH07XG4gIHJldHVybiBhcnJheS5yZXZlcnNlKCkucmVkdWNlKF9yZWR1Y2UsIGNyZWF0ZUVybExpc3QoKSk7XG59O1xuXG52YXIgbGFzdCA9IGZ1bmN0aW9uKGVybExpc3QpIHtcbiAgcmV0dXJuIGNhcihsYXN0VGFpbChlcmxMaXN0KSk7XG59O1xuXG52YXIgbGFzdFRhaWwgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIGlmIChpc0VtcHR5KGVybExpc3QpKSB7XG4gICAgcmV0dXJuIGVybExpc3Q7XG4gIH1cbiAgdmFyIHByaW9yID0gZXJsTGlzdDtcbiAgdmFyIGN1cnJlbnQgPSBjZHIoZXJsTGlzdCk7XG4gIHdoaWxlICghaXNFbXB0eShjdXJyZW50KSkge1xuICAgIHByaW9yID0gY2RyKHByaW9yKTtcbiAgICBjdXJyZW50ID0gY2RyKGN1cnJlbnQpO1xuICB9XG4gIHJldHVybiBwcmlvcjtcbn07XG5cbnZhciBtYXAgPSBmdW5jdGlvbihmbiwgbGlzdCkge1xuICB2YXIgX3JlZHVjZSA9IGZ1bmN0aW9uKGxpc3QsIHZhbHVlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVybExpc3QoZm4odmFsdWUpLCBsaXN0KTtcbiAgfTtcbiAgcmV0dXJuIHJldmVyc2UocmVkdWNlKEVPTCwgX3JlZHVjZSwgbGlzdCkpO1xufTtcblxudmFyIG5leHQgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIHJldHVybiBjYXIoY2RyKGVybExpc3QpKTtcbn07XG5cbnZhciByZWN1cnNlID0gZnVuY3Rpb24obGlzdCkge1xuICBpZiAoaXNFbXB0eShsaXN0KSkge1xuICAgIHJldHVybiBsaXN0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0Lm5leHQ7XG4gIH1cbn07XG5cbnZhciByZWR1Y2UgPSBmdW5jdGlvbihzZWVkLCBmbiwgbGlzdCkge1xuICB3aGlsZSAoIWlzRW1wdHkobGlzdCkpIHtcbiAgICBzZWVkID0gZm4oc2VlZCwgbGlzdC52YWx1ZSk7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gIH1cbiAgcmV0dXJuIHNlZWQ7XG59O1xuXG52YXIgcmVkdWNlQnkyID0gZnVuY3Rpb24oc2VlZCwgZm4sIGxpc3QpIHtcbiAgd2hpbGUgKCFpc0VtcHR5KGxpc3QpKSB7XG4gICAgdmFyIHZhbHVlMCA9IGxpc3QudmFsdWU7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gICAgdmFyIHZhbHVlMSA9IGxpc3QudmFsdWU7XG4gICAgc2VlZCA9IGZuKHNlZWQsIHZhbHVlMCwgdmFsdWUxKTtcbiAgICBsaXN0ID0gcmVjdXJzZShsaXN0KTtcbiAgfVxuICByZXR1cm4gc2VlZDtcbn07XG5cbnZhciByZXZlcnNlID0gZnVuY3Rpb24obGlzdCkge1xuICB2YXIgcmVzdWx0ID0gRU9MO1xuICB3aGlsZSAoIWlzRW1wdHkobGlzdCkpIHtcbiAgICByZXN1bHQgPSBjcmVhdGVFcmxMaXN0KGxpc3QudmFsdWUsIHJlc3VsdCk7XG4gICAgbGlzdCA9IGxpc3QubmV4dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIHRha2UgPSBmdW5jdGlvbihuYnIsIGVybExpc3QpIHtcbiAgdmFyIHJlc3VsdCA9IGNyZWF0ZUVybExpc3QoKTtcbiAgd2hpbGUgKG5iciAhPT0gMCkge1xuICAgIHZhciBub2RlID0gY2FyKGVybExpc3QpO1xuICAgIGVybExpc3QgPSBjZHIoZXJsTGlzdCk7XG4gICAgcmVzdWx0ID0gY3JlYXRlRXJsTGlzdChub2RlLCByZXN1bHQpO1xuICAgIG5iciA9IG5iciAtIDE7XG4gIH1cbiAgcmV0dXJuIHJldmVyc2UocmVzdWx0KTtcbn07XG5cbnZhciB0b0FycmF5ID0gZnVuY3Rpb24obGlzdCkge1xuICB2YXIgX3JlZHVjZSA9IGZ1bmN0aW9uKGpzQXJyYXksIHZhbHVlKSB7XG4gICAganNBcnJheS5wdXNoKHZhbHVlKTtcbiAgICByZXR1cm4ganNBcnJheTtcbiAgfTtcbiAgcmV0dXJuIHJlZHVjZShbXSwgX3JlZHVjZSwgbGlzdCk7XG59O1xuXG52YXIgdG9QYXJ0aWFsQXJyYXkgPSBmdW5jdGlvbihuYnIsIGxpc3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB3aGlsZSAobmJyICE9PSAwKSB7XG4gICAgdmFyIG5vZGUgPSBjYXIobGlzdCk7XG4gICAgbGlzdCA9IGNkcihsaXN0KTtcbiAgICByZXN1bHQucHVzaChub2RlKTtcbiAgICBuYnIgPSBuYnIgLSAxO1xuICB9XG4gIHJlc3VsdC5wdXNoKGxpc3QpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIHppcCA9IGZ1bmN0aW9uKHNlZWQsIGZuLCBsaXN0MCwgbGlzdDEpIHtcbiAgd2hpbGUgKCEoaXNFbXB0eShsaXN0MCkgfHwgaXNFbXB0eShsaXN0MSkpKSB7XG4gICAgdmFyIHZhbHVlMCA9IGNhcihsaXN0MCk7XG4gICAgbGlzdDAgPSBjZHIobGlzdDApO1xuICAgIHZhciB2YWx1ZTEgPSBjYXIobGlzdDEpO1xuICAgIGxpc3QxID0gY2RyKGxpc3QxKTtcbiAgICBzZWVkID0gZm4oc2VlZCwgdmFsdWUwLCB2YWx1ZTEpO1xuICB9XG4gIHJldHVybiBzZWVkO1xufTtcblxudmFyIF9FT0wgPSB7fTtcblxudmFyIEVPTCA9IGNyZWF0ZU5vZGUoX0VPTCwgX0VPTCk7XG5cbmV4cG9ydCB7XG4gIGFyZUVxdWFsLFxuICBjYXIsXG4gIGNkcixcbiAgY29uY2F0LFxuICBjb25zLFxuICBjb3B5LFxuICBjcmVhdGVFcmxMaXN0LFxuICBkcm9wLFxuICBpc0VtcHR5LFxuICBmaWx0ZXIsXG4gIGZvckVhY2gsXG4gIGZyb21BcnJheSxcbiAgbGFzdCxcbiAgbWFwLFxuICBuZXh0LFxuICByZWN1cnNlLFxuICByZWR1Y2UsXG4gIHJlZHVjZUJ5MixcbiAgcmV2ZXJzZSxcbiAgdGFrZSxcbiAgdG9BcnJheSxcbiAgdG9QYXJ0aWFsQXJyYXlcbn07XG4iLCJpbXBvcnQgeyBiaW5hcnlHbHlwaFRva2VucyB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGNvbW1lbnRTaWduYWwgfSBmcm9tICcuL2NvbW1lbnRTaWduYWwnO1xuaW1wb3J0IHsgY3JlYXRlRXJsQm9vbGVhbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsSWRlbnRpZmllciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsSWdub3JlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTGlzdCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxOdW1iZXIgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3ltYm9sIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBkZXJlZiB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGRlcmVmR2x5cGggfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBleHRyYWN0SnNWYWx1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgX2ZhbHNlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgZ2x5cGhUb2tlbnMgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmVCYW5nIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlQmFuZ0dseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlSWZUcnVlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlSWZUcnVlR2x5cGggfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmVVbmxlc3NUcnVlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlVW5sZXNzVHJ1ZUdseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaW5kZXhFbmQgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpbmRleFN0YXJ0IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsga2V5VG9rZW5zIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbGlzdEVuZCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGxpc3RTdGFydCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IG5pbCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHF1YXNpcXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBxdW90ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHNwbGljZVVucXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyB1bnF1b3RlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcXVhc2lxdW90ZUdseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcXVvdGVHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHNwbGljZVVucXVvdGVHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHVucXVvdGVHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHJldmVyc2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IF90cnVlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuXG52YXIgIF9faW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgfSByZXR1cm4gLTE7XG59O1xuXG52YXIgYXRvbWl6ZSA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHZhciBjcmVhdGVFcmxWYWx1ZSA9IChmdW5jdGlvbigpIHtcbiAgICBpZiAoaXNOaWwodG9rZW4pKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRXJsTmlsO1xuICAgIH0gZWxzZSBpZiAoaXNJZ25vcmUodG9rZW4pKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRXJsSWdub3JlO1xuICAgIH0gZWxzZSBpZiAoaXNCb29sZWFuKHRva2VuKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKHBhcnNlQm9vbGVhbih0b2tlbikpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKHRva2VuKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZztcbiAgICB9IGVsc2UgaWYgKGlzSWRlbnRpZmllcih0b2tlbikpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFcmxJZGVudGlmaWVyO1xuICAgIH0gZWxzZSBpZiAoaXNJbnRlZ2VyKHRva2VuKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxOdW1iZXIocGFyc2VJbnQxMCh0b2tlbikpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRmxvYXQodG9rZW4pKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihwYXJzZUZsb2F0MTAodG9rZW4pKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjcmVhdGVFcmxTeW1ib2w7XG4gICAgfVxuICB9KSgpO1xuICByZXR1cm4gY3JlYXRlRXJsVmFsdWUodG9rZW4pO1xufTtcblxudmFyIGlzQm9vbGVhbiA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbiA9PT0gX2ZhbHNlIHx8IHRva2VuID09PSBfdHJ1ZTtcbn07XG5cbnZhciBpc0Zsb2F0ID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIC9eKC18XFwrKT9bMC05XShffFxcZCkqXFwuKFxcZHwoXFxkKF98XFxkKSpcXGQpKSQvLnRlc3QodG9rZW4pO1xufTtcblxudmFyIGlzQmluYXJ5R2x5cGggPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gX19pbmRleE9mLmNhbGwoYmluYXJ5R2x5cGhUb2tlbnMsIHRva2VuKSA+PSAwO1xufTtcblxudmFyIGlzR2x5cGggPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gX19pbmRleE9mLmNhbGwoZ2x5cGhUb2tlbnMsIHRva2VuKSA+PSAwO1xufTtcblxudmFyIGlzSWdub3JlID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuID09PSBpZ25vcmU7XG59O1xuXG52YXIgaXNJbmRleFN0YXJ0ID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuID09PSBpbmRleFN0YXJ0O1xufTtcblxudmFyIGlzSW50ZWdlciA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiAvXigwKD8hXFwuKXwoKC18XFwrKT9bMS05XShffFxcZCkqJCkpLy50ZXN0KHRva2VuKTtcbn07XG5cbnZhciBpc0xpc3RTdGFydCA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbiA9PT0gbGlzdFN0YXJ0O1xufTtcblxudmFyIGlzTmlsID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuID09PSBuaWw7XG59O1xuXG52YXIgX3BhcnNlID0gZnVuY3Rpb24odG9rZW4sIHRva2Vucykge1xuICBpZiAoaXNMaXN0U3RhcnQodG9rZW4pKSB7XG4gICAgcmV0dXJuIHBhcnNlTGlzdCh0b2tlbnMpO1xuICB9IGVsc2UgaWYgKGlzSW5kZXhTdGFydCh0b2tlbikpIHtcbiAgICByZXR1cm4gcGFyc2VJbmRleCh0b2tlbnMpO1xuICB9IGVsc2UgaWYgKGlzR2x5cGgodG9rZW4pKSB7XG4gICAgcmV0dXJuIHBhcnNlR2x5cGgoZ2x5cGhJbmRleFt0b2tlbl0sIHRva2Vucyk7XG4gIH0gZWxzZSBpZiAoaXNCaW5hcnlHbHlwaCh0b2tlbikpIHtcbiAgICByZXR1cm4gcGFyc2VCaW5hcnlHbHlwaChiaW5hcnlHbHlwaEluZGV4W3Rva2VuXSwgdG9rZW5zKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXRvbWl6ZSh0b2tlbik7XG4gIH1cbn07XG5cbnZhciBwYXJzZSA9IGZ1bmN0aW9uKHRva2Vucykge1xuICBpZiAodG9rZW5zID09PSBjb21tZW50U2lnbmFsKSB7XG4gICAgcmV0dXJuIGNvbW1lbnRTaWduYWw7XG4gIH1cbiAgcmV0dXJuIF9wYXJzZSh0b2tlbnMuc2hpZnQoKSwgdG9rZW5zKTtcbn07XG5cbnZhciBwYXJzZUJpbmFyeUdseXBoID0gZnVuY3Rpb24oa2V5d29yZCwgdG9rZW5zKSB7XG4gIHJldHVybiBjcmVhdGVFcmxMaXN0KFxuICAgIGNyZWF0ZUVybFN5bWJvbChrZXl3b3JkKSxcbiAgICBjcmVhdGVFcmxMaXN0KFxuICAgICAgcGFyc2UodG9rZW5zKSxcbiAgICAgIGNyZWF0ZUVybExpc3QocGFyc2UodG9rZW5zKSkpKTtcbn07XG5cbnZhciBwYXJzZUJvb2xlYW4gPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gdG9rZW4gPT09IF90cnVlO1xufTtcblxudmFyIHBhcnNlRmxvYXQxMCA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiBwYXJzZUZsb2F0KHN0cmlwVW5kZXJzY29yZXModG9rZW4pLCAxMCk7XG59O1xuXG52YXIgcGFyc2VHbHlwaCA9IGZ1bmN0aW9uKGtleXdvcmQsIHRva2Vucykge1xuICByZXR1cm4gY3JlYXRlRXJsTGlzdChcbiAgICBjcmVhdGVFcmxTeW1ib2woa2V5d29yZCksXG4gICAgY3JlYXRlRXJsTGlzdChwYXJzZSh0b2tlbnMpKSk7XG59O1xuXG52YXIgcGFyc2VJbmRleCA9IGZ1bmN0aW9uKHRva2Vucykge1xuICB2YXIgdG9rZW47XG4gIHZhciBqc0luZGV4ID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgaXNLZXlTdGVwID0gdHJ1ZTtcbiAgd2hpbGUgKCh0b2tlbiA9IHRva2Vucy5zaGlmdCgpKSAhPT0gaW5kZXhFbmQpIHtcbiAgICBpZiAoaXNLZXlTdGVwKSB7XG4gICAgICBrZXkgPSBfcGFyc2UodG9rZW4sIHRva2Vucyk7XG4gICAgICBpc0tleVN0ZXAgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAganNJbmRleFtleHRyYWN0SnNWYWx1ZShrZXkpXSA9IF9wYXJzZSh0b2tlbiwgdG9rZW5zKTtcbiAgICAgIGlzS2V5U3RlcCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBjcmVhdGVFcmxJbmRleChqc0luZGV4KTtcbn07XG5cbnZhciBwYXJzZUludDEwID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHBhcnNlSW50KHN0cmlwVW5kZXJzY29yZXModG9rZW4pLCAxMCk7XG59O1xuXG52YXIgcGFyc2VMaXN0ID0gZnVuY3Rpb24odG9rZW5zKSB7XG4gIHZhciB0b2tlbjtcbiAgdmFyIGVybExpc3QgPSBjcmVhdGVFcmxMaXN0KCk7XG4gIHdoaWxlICgodG9rZW4gPSB0b2tlbnMuc2hpZnQoKSkgIT09IGxpc3RFbmQpIHtcbiAgICBlcmxMaXN0ID0gY3JlYXRlRXJsTGlzdChfcGFyc2UodG9rZW4sIHRva2VucyksIGVybExpc3QpO1xuICB9XG4gIHJldHVybiByZXZlcnNlKGVybExpc3QpO1xufTtcblxudmFyIHN0YXJ0c1dpdGggPSBmdW5jdGlvbihjaGFyKSB7XG4gIHJldHVybiBmdW5jdGlvbih0b2tlbikge1xuICAgIHJldHVybiB0b2tlblswXSA9PT0gY2hhcjtcbiAgfTtcbn07XG5cbnZhciBzdHJpcFVuZGVyc2NvcmVzID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuLnJlcGxhY2UoL18vZywgJycpO1xufTtcblxudmFyIGdseXBoSW5kZXggPSB7fTtcblxuZ2x5cGhJbmRleFtkZXJlZkdseXBoXSAgICAgICAgID0gZGVyZWY7XG5nbHlwaEluZGV4W2lnbm9yZUJhbmdHbHlwaF0gICAgPSBpZ25vcmVCYW5nO1xuZ2x5cGhJbmRleFtxdWFzaXF1b3RlR2x5cGhdICAgID0gcXVhc2lxdW90ZTtcbmdseXBoSW5kZXhbcXVvdGVHbHlwaF0gICAgICAgICA9IHF1b3RlO1xuZ2x5cGhJbmRleFtzcGxpY2VVbnF1b3RlR2x5cGhdID0gc3BsaWNlVW5xdW90ZTtcbmdseXBoSW5kZXhbdW5xdW90ZUdseXBoXSAgICAgICA9IHVucXVvdGU7XG5cbnZhciBiaW5hcnlHbHlwaEluZGV4ID0ge307XG5cbmJpbmFyeUdseXBoSW5kZXhbaWdub3JlSWZUcnVlR2x5cGhdICAgICA9IGlnbm9yZUlmVHJ1ZTtcbmJpbmFyeUdseXBoSW5kZXhbaWdub3JlVW5sZXNzVHJ1ZUdseXBoXSA9IGlnbm9yZVVubGVzc1RydWU7XG5cbnZhciBpc1N0cmluZyA9IHN0YXJ0c1dpdGgoJ1wiJyk7XG5cbnZhciBpc0lkZW50aWZpZXIgPSBzdGFydHNXaXRoKCc6Jyk7XG5cbmV4cG9ydCB7IHBhcnNlIH07XG4iLCJpbXBvcnQgeyBjb21tZW50U2lnbmFsIH0gZnJvbSAnLi9jb21tZW50U2lnbmFsJztcbmltcG9ydCB7IGV4dHJhY3RKc1ZhbHVlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpbmRleEVuZCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGluZGV4U3RhcnQgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpc0VybEF0b20gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsSWRlbnRpZmllciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxJZ25vcmUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsS2V5d29yZCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybE1hY3JvIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybE5pbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxTdHJpbmcgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsVXNlclB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgbGlzdEVuZCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGxpc3RTdGFydCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHJlZHVjZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuXG52YXIgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbnZhciBhZGpvaW5FcmxWYWx1ZSA9IGZ1bmN0aW9uKHNob3VsZEJlUmVhZGFibGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG1lbW8sIGVybFZhbHVlKSB7XG4gICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemUoZXJsVmFsdWUsIHNob3VsZEJlUmVhZGFibGUpO1xuICAgIGlmIChtZW1vLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlwiICsgbWVtbyArIFwiIFwiICsgc2VyaWFsaXplZDtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgc2VyaWFsaXplID0gZnVuY3Rpb24oZXJsRXhwciwgc2hvdWxkQmVSZWFkYWJsZSkge1xuICBpZiAoZXJsRXhwciA9PT0gY29tbWVudFNpZ25hbCkge1xuICAgIHJldHVybiBjb21tZW50U2lnbmFsO1xuICB9XG4gIHZhciBfc2VyaWFsaXplID0gKGZ1bmN0aW9uKCkge1xuICAgIGlmIChpc0VybExpc3QoZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBzZXJpYWxpemVMaXN0O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxJZ25vcmUoZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gaWdub3JlTGFiZWw7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxJbmRleChlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUluZGV4O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxLZXl3b3JkKGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGtleXdvcmRMYWJlbDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc0VybENvcmVFZmZlY3RmdWxGdW5jdGlvbihlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBjb3JlRWZmZWN0ZnVsRnVuY3Rpb25MYWJlbDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc0VybENvcmVQdXJlRnVuY3Rpb24oZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gY29yZVB1cmVGdW5jdGlvbkxhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsVXNlclB1cmVGdW5jdGlvbihlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB1c2VyUHVyZUZ1bmN0aW9uTGFiZWw7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxNYWNybyhlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBtYWNyb0xhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsTmlsKGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5pbExhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsSWRlbnRpZmllcihlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUlkZW50aWZpZXI7XG4gICAgfSBlbHNlIGlmIChpc0VybFN0cmluZyhlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZVN0cmluZztcbiAgICB9IGVsc2UgaWYgKGlzRXJsQXRvbShlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUF0b207XG4gICAgfSBlbHNlIGlmIChlcmxFeHByLmpzVmFsdWUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGV4dHJhY3RKc1ZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGVybFZhbHVlO1xuICAgICAgfTtcbiAgICB9XG4gIH0pKCk7XG4gIHJldHVybiBfc2VyaWFsaXplKGVybEV4cHIsIHNob3VsZEJlUmVhZGFibGUpO1xufTtcblxudmFyIHNlcmlhbGl6ZUF0b20gPSBmdW5jdGlvbihlcmxBdG9tLCBzaG91bGRCZVJlYWRhYmxlKSB7XG4gIHJldHVybiBcIihhdG9tIFwiICsgKHNlcmlhbGl6ZShlcmxBdG9tLmVybFZhbHVlLCBzaG91bGRCZVJlYWRhYmxlKSkgKyBcIilcIjtcbn07XG5cbnZhciBzZXJpYWxpemVJZGVudGlmaWVyID0gZnVuY3Rpb24oZXJsU3RyaW5nLCBzaG91bGRCZVJlYWRhYmxlKSB7XG4gIHJldHVybiBleHRyYWN0SnNWYWx1ZShlcmxTdHJpbmcpO1xufTtcblxudmFyIHNlcmlhbGl6ZUluZGV4ID0gZnVuY3Rpb24oZXJsSW5kZXgsIHNob3VsZEJlUmVhZGFibGUpIHtcbiAgdmFyIGpzSW5kZXggPSBlcmxJbmRleC5qc1ZhbHVlO1xuICB2YXIgbWVtbyA9ICcnO1xuICBmb3IgKHZhciBrZXkgaW4ganNJbmRleCkge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoanNJbmRleCwga2V5KSkgY29udGludWU7XG4gICAgdmFyIGVybFZhbHVlID0ganNJbmRleFtrZXldO1xuICAgIGlmIChtZW1vID09PSAnJykge1xuICAgICAgbWVtbyA9IFwiXCJcbiAgICAgICAgKyBrZXlcbiAgICAgICAgKyBcIiBcIlxuICAgICAgICArIChzZXJpYWxpemUoZXJsVmFsdWUsIHNob3VsZEJlUmVhZGFibGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVtbyA9IFwiXCJcbiAgICAgICAgKyBtZW1vXG4gICAgICAgICsgXCIsIFwiXG4gICAgICAgICsga2V5XG4gICAgICAgICsgXCIgXCJcbiAgICAgICAgKyAoc2VyaWFsaXplKGVybFZhbHVlLCBzaG91bGRCZVJlYWRhYmxlKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmRleFN0YXJ0ICsgbWVtbyArIGluZGV4RW5kO1xufTtcblxudmFyIHNlcmlhbGl6ZUxpc3QgPSBmdW5jdGlvbihlcmxMaXN0LCBzaG91bGRCZVJlYWRhYmxlKSB7XG4gIHZhciBzZXJpYWxpemVkTGlzdCA9IHJlZHVjZShcbiAgICBcIlwiLFxuICAgIGFkam9pbkVybFZhbHVlKHNob3VsZEJlUmVhZGFibGUpLFxuICAgIGVybExpc3QpO1xuICByZXR1cm4gbGlzdFN0YXJ0ICsgc2VyaWFsaXplZExpc3QgKyBsaXN0RW5kO1xufTtcblxudmFyIHNlcmlhbGl6ZVN0cmluZyA9IGZ1bmN0aW9uKGVybFN0cmluZywgc2hvdWxkQmVSZWFkYWJsZSkge1xuICB2YXIganNTdHJpbmcgPSBzdHJpcFF1b3RlcyhleHRyYWN0SnNWYWx1ZShlcmxTdHJpbmcpKTtcbiAgaWYgKCFzaG91bGRCZVJlYWRhYmxlKSB7XG4gICAgcmV0dXJuIGpzU3RyaW5nO1xuICB9XG4gIHJldHVybiBqc1N0cmluZ1xuICAgIC5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpXG4gICAgLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuICAgIC5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyk7XG59O1xuXG52YXIgc3RyaXBRdW90ZXMgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4ganNTdHJpbmcuc2xpY2UoMSwgLTEpO1xufTtcblxudmFyIGNvcmVFZmZlY3RmdWxGdW5jdGlvbkxhYmVsID0gJzxlZmZlY3RmdWwgY29yZSBmdW5jdGlvbj4nO1xudmFyIGNvcmVQdXJlRnVuY3Rpb25MYWJlbCAgICAgID0gJzxjb3JlIGZ1bmN0aW9uPic7XG52YXIgaWdub3JlTGFiZWwgICAgICAgICAgICAgICAgPSAnPGlnbm9yZT4nO1xudmFyIGtleXdvcmRMYWJlbCAgICAgICAgICAgICAgID0gJzxrZXl3b3JkPic7XG52YXIgbWFjcm9MYWJlbCAgICAgICAgICAgICAgICAgPSAnPG1hY3JvPic7XG52YXIgbmlsTGFiZWwgICAgICAgICAgICAgICAgICAgPSAnbmlsJztcbnZhciB1c2VyUHVyZUZ1bmN0aW9uTGFiZWwgICAgICA9ICc8ZnVuY3Rpb24+JztcblxuZXhwb3J0IHsgc2VyaWFsaXplIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiKGRvXFxuICAoZGVmISBmaXgqIChcXG4gICAgZm4qIChmKSAoXFxuICAgICAgKGZuKiAoeCkgKGYgKGZuKiAoJiB5cykgKGFwcGx5ICh4IHgpIHlzKSkpKVxcbiAgICAgIChmbiogKHgpIChmIChmbiogKCYgeXMpIChhcHBseSAoeCB4KSB5cykpKSkpKSlcXG5cXG4gIChkZWYhIG1lbWZpeCogKFxcbiAgICBmbiogKGYpIChcXG4gICAgICBsZXQqIChjYWNoZSB7fSkgKFxcbiAgICAgICAgKGZuKiAoeCBjYWNoZSkgKFxcbiAgICAgICAgICBmXFxuICAgICAgICAgICAgKGZuKiAoeikgKFxcbiAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zPyBjYWNoZSB6KVxcbiAgICAgICAgICAgICAgICAoZ2V0IGNhY2hlIHopXFxuICAgICAgICAgICAgICAgIChsZXQqIChyZXN1bHQgKChmbiogKHkpICgoeCB4IGNhY2hlKSB5KSkgeikpIChcXG4gICAgICAgICAgICAgICAgICBkb1xcbiAgICAgICAgICAgICAgICAgICAgKHNldCEgY2FjaGUgeiByZXN1bHQpXFxuICAgICAgICAgICAgICAgICAgICByZXN1bHQpKSkpXFxuICAgICAgICAgICAgY2FjaGUpKVxcbiAgICAgICAgKGZuKiAoeCBjYWNoZSkgKFxcbiAgICAgICAgICBmXFxuICAgICAgICAgICAgKGZuKiAoeikgKFxcbiAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zPyBjYWNoZSB6KVxcbiAgICAgICAgICAgICAgICAoZ2V0IGNhY2hlIHopXFxuICAgICAgICAgICAgICAgIChsZXQqIChyZXN1bHQgKChmbiogKHkpICgoeCB4IGNhY2hlKSB5KSkgeikpIChcXG4gICAgICAgICAgICAgICAgICBkb1xcbiAgICAgICAgICAgICAgICAgICAgKHNldCEgY2FjaGUgeiByZXN1bHQpXFxuICAgICAgICAgICAgICAgICAgICByZXN1bHQpKSkpXFxuICAgICAgICAgICAgY2FjaGUpKVxcbiAgICAgICAgY2FjaGUpKSkpXFxuXFxuICAoZGVmISBfMCBjYXIpXFxuXFxuICAoZGVmISBfMSAoZm4qICh4cykgKG50aCAxIHhzKSkpXFxuXFxuICAoZGVmISBfMiAoZm4qICh4cykgKG50aCAyIHhzKSkpXFxuXFxuICAoZGVmISBzd2FwISAoXFxuICAgIG1hY3JvKiAoYXRvbSAmIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIGF0b21cXG4gICAgICAgIGAobGV0KiAoLWF0b20tIH5hdG9tKSAoXFxuICAgICAgICAgIGRvXFxuICAgICAgICAgICAgKHJlc2V0ISAtYXRvbS0gKH4oY2FyIHhzKSAoZGVyZWYgLWF0b20tKSB+QChjZHIgeHMpKSlcXG4gICAgICAgICAgICAoZGVyZWYgLWF0b20tKSkpKSkpXFxuXFxuICAoZGVmISAqZ2Vuc3ltLWNvdW50ZXIqIChhdG9tIDApKVxcblxcbiAgKGRlZiEgZ2Vuc3ltIChcXG4gICAgICBmbiogKCkgKHN5bWJvbCAoc3RyaW5nIFxcXCJHX19cXFwiIChzd2FwISAqZ2Vuc3ltLWNvdW50ZXIqIGluY3IpKSkpKVxcblxcbiAgKGRlZiEgb3IgKFxcbiAgICBtYWNybyogKCYgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgZmFsc2VcXG4gICAgICAgIChsZXQqICgtcXVlcnktIChnZW5zeW0pKVxcbiAgICAgICAgICBgKGxldCogKH4tcXVlcnktIH4oY2FyIHhzKSkgKFxcbiAgICAgICAgICAgIGlmIH4tcXVlcnktXFxuICAgICAgICAgICAgICB+LXF1ZXJ5LVxcbiAgICAgICAgICAgICAgKG9yIH5AKGNkciB4cykpKSkpKSkpXFxuXFxuICAoZGVmISBhbmQgKFxcbiAgICBtYWNybyogKCYgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgdHJ1ZVxcbiAgICAgICAgKGxldCogKC1xdWVyeS0gKGdlbnN5bSkpXFxuICAgICAgICAgIGAobGV0KiAofi1xdWVyeS0gfihjYXIgeHMpKSAoXFxuICAgICAgICAgICAgaWYgfi1xdWVyeS1cXG4gICAgICAgICAgICAgIChhbmQgfkAoY2RyIHhzKSlcXG4gICAgICAgICAgICAgIGZhbHNlKSkpKSkpXFxuXFxuICAoZGVmISBjb25kIChcXG4gICAgbWFjcm8qICgmIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIG5pbFxcbiAgICAgICAgKGlmIChlbXB0eT8gKGNkciB4cykpXFxuICAgICAgICAgICh0aHJvdyBcXFwiYGNvbmRgIHJlcXVpcmVzIGFuIGV2ZW4gbnVtYmVyIG9mIGZvcm1zLlxcXCIpXFxuICAgICAgICAgIChsZXQqICgtcXVlcnktIChnZW5zeW0pKVxcbiAgICAgICAgICAgIGAobGV0KiAofi1xdWVyeS0gfihjYXIgeHMpKSAoXFxuICAgICAgICAgICAgICBpZiB+LXF1ZXJ5LVxcbiAgICAgICAgICAgICAgICB+KF8xIHhzKVxcbiAgICAgICAgICAgICAgICAoY29uZCB+QChjZHIgKGNkciB4cykpKSkpKSkpKSlcXG5cXG4gIChkZWYhIGxvb3AgKFxcbiAgICBtYWNybyogKGZvcm0wIGZvcm0xKVxcbiAgICAgIGAobGV0KiAobG9vcCAobWVtZml4KiAoZm4qIChsb29wKSAoZm4qICh+KF8wIGZvcm0wKSkgfmZvcm0xKSkpKSAoXFxuICAgICAgICBsb29wIH4oXzEgZm9ybTApKSkpKVxcblxcbiAgKGRlZiEgLT4gKFxcbiAgICBtYWNybyogKCYgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgbmlsXFxuICAgICAgICAobGV0KiAoeCAoY2FyIHhzKSB4cyAoY2RyIHhzKSkgKFxcbiAgICAgICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgICAgIHhcXG4gICAgICAgICAgICAobGV0KiAoZm9ybSAoY2FyIHhzKSBmb3JtcyAoY2RyIHhzKSkgKFxcbiAgICAgICAgICAgICAgaWYgKGVtcHR5PyBmb3JtcylcXG4gICAgICAgICAgICAgICAgKGlmIChsaXN0PyBmb3JtKVxcbiAgICAgICAgICAgICAgICAgIChpZiAoPSAoc3ltYm9sIFxcXCJmbipcXFwiKSAoY2FyIGZvcm0pKVxcbiAgICAgICAgICAgICAgICAgICAgYCh+Zm9ybSB+eClcXG4gICAgICAgICAgICAgICAgICAgIGAofihjYXIgZm9ybSkgfnggfkAoY2RyIGZvcm0pKSlcXG4gICAgICAgICAgICAgICAgICAobGlzdCBmb3JtIHgpKVxcbiAgICAgICAgICAgICAgICBgKC0+ICgtPiB+eCB+Zm9ybSkgfkBmb3JtcykpKSkpKSkpXFxuXFxuICAoZGVmISAtPj4gKFxcbiAgICBtYWNybyogKCYgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgbmlsXFxuICAgICAgICAobGV0KiAoeCAoY2FyIHhzKSB4cyAoY2RyIHhzKSkgKFxcbiAgICAgICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgICAgIHhcXG4gICAgICAgICAgICAobGV0KiAoZm9ybSAoY2FyIHhzKSBmb3JtcyAoY2RyIHhzKSkgKFxcbiAgICAgICAgICAgICAgaWYgKGVtcHR5PyBmb3JtcylcXG4gICAgICAgICAgICAgICAgKGlmIChsaXN0PyBmb3JtKVxcbiAgICAgICAgICAgICAgICAgIChpZiAoPSAoc3ltYm9sIFxcXCJmbipcXFwiKSAoY2FyIGZvcm0pKVxcbiAgICAgICAgICAgICAgICAgICAgYCh+Zm9ybSB+eClcXG4gICAgICAgICAgICAgICAgICAgIGAofkBmb3JtIH54KSlcXG4gICAgICAgICAgICAgICAgICAobGlzdCBmb3JtIHgpKVxcbiAgICAgICAgICAgICAgICBgKC0+PiAoLT4+IH54IH5mb3JtKSB+QGZvcm1zKSkpKSkpKSlcXG5cXG4gIChkZWYhIC0+KiAobWFjcm8qICgmIHhzKSBgKGZuKiAoLXgtKSAoLT4gLXgtIH5AeHMpKSkpXFxuXFxuICAoZGVmISAtPj4qIChtYWNybyogKCYgeHMpIGAoZm4qICgteC0pICgtPj4gLXgtIH5AeHMpKSkpXFxuXFxuICAoZGVmISBub3QgKGZuKiAoeCkgKGlmIHggZmFsc2UgdHJ1ZSkpKVxcblxcbiAgKGRlZiEgaW5jciAoLT4qICgrIDEpKSlcXG5cXG4gIChkZWYhIGRlY3IgKC0+KiAoLSAxKSkpXFxuXFxuICAoZGVmISB6ZXJvPyAoLT4qICg9IDApKSlcXG5cXG4gIChkZWYhIGlkZW50aXR5IChmbiogKHgpIHgpKVxcblxcbiAgKGRlZiEgY29uc3RhbnQtZm4gKGZuKiAoeCkgKGZuKiAoeSkgeCkpKVxcblxcbiAgKGRlZiEgY2FsbC1vbiAoZm4qICgmIHhzKSAoZm4qIChmbikgKGFwcGx5IGZuIHhzKSkpKVxcblxcbiAgKGRlZiEgc3RlcC1pbnRvLWxpc3QgKFxcbiAgICBmbiogKHhzIGZuMCBmbjEpIChcXG4gICAgICBsZXQqICh4IChjYXIgeHMpIC14cy0gKGNkciB4cykpIChcXG4gICAgICAgIGlmIChlbXB0eT8gLXhzLSlcXG4gICAgICAgICAgKGZuMSB4KVxcbiAgICAgICAgICAoZm4wIHggLXhzLSkpKSkpXFxuXFxuICAoZGVmISBhcHBseS1vbiAoXFxuICAgIGZuKiAoJiB4cykgKFxcbiAgICAgIHN0ZXAtaW50by1saXN0XFxuICAgICAgICB4c1xcbiAgICAgICAgKGZuKiAoYXJndW1lbnRzIC14cy0pIChhcHBseSAoY2FyIC14cy0pIGFyZ3VtZW50cykpXFxuICAgICAgICAoZm4qIChhcmd1bWVudHMpIChmbiogKGYpIChhcHBseSBmIGFyZ3VtZW50cykpKSkpKVxcblxcbiAgKGRlZiEgcmVkdWNlIChcXG4gICAgZm4qIChmIHNlZWQgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgc2VlZFxcbiAgICAgICAgKHJlZHVjZSBmIChmIHNlZWQgKGNhciB4cykpIChjZHIgeHMpKSkpKVxcblxcbiAgKGRlZiEgZmlsdGVyIChcXG4gICAgZm4qIChwcmVkaWNhdGUgeHMpIChcXG4gICAgICByZXZlcnNlIChcXG4gICAgICAgIHJlZHVjZVxcbiAgICAgICAgICAoZm4qIChtZW1vIHgpIChpZiAocHJlZGljYXRlIHgpIChjb25zIHggbWVtbykgbWVtbykpXFxuICAgICAgICAgICcoKVxcbiAgICAgICAgICB4cykpKSlcXG5cXG4gIChkZWYhIG1hcCAoXFxuICAgIGZuKiAoZiB4cykgKFxcbiAgICAgIHJldmVyc2UgKFxcbiAgICAgICAgcmVkdWNlXFxuICAgICAgICAgIChmbiogKG1lbW8geCkgKGNvbnMgKGYgeCkgbWVtbykpXFxuICAgICAgICAgICcoKVxcbiAgICAgICAgICB4cykpKSlcXG5cXG4gIChkZWYhIGV2ZXJ5PyAoXFxuICAgIGZuKiAocHJlZCB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICB0cnVlXFxuICAgICAgICAoaWYgKHByZWQgKGNhciB4cykpIChldmVyeT8gcHJlZCAoY2RyIHhzKSkgZmFsc2UpKSkpXFxuXFxuICAoZGVmISBzb21lPyAoXFxuICAgIGZuKiAocHJlZCB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBmYWxzZVxcbiAgICAgICAgKGlmIChwcmVkIChjYXIgeHMpKSB0cnVlIChzb21lPyBwcmVkIChjZHIgeHMpKSkpKSlcXG5cXG4gIChkZWYhIGxldG1lbXJlYyogKFxcbiAgICBtYWNybyogKGFsaWFzIGV4cHIpXFxuICAgICAgYChsZXQqIChcXG4gICAgICAgIH4oY2FyIGFsaWFzKVxcbiAgICAgICAgKG1lbWZpeCogKGZuKiAofihjYXIgYWxpYXMpKSB+KF8xIGFsaWFzKSkpKVxcbiAgICAgICAgICB+ZXhwcikpKVxcblxcbiAgKGRlZiEgc2tpcCAoXFxuICAgIGZuKiAobmJyIHhzKSAoXFxuICAgICAgbGV0cmVjKiAoXFxuICAgICAgICAtc2tpcC1cXG4gICAgICAgIChmbiogKHlzKSAoXFxuICAgICAgICAgIGxldCogKG5iciAoY2FyIHlzKSB4cyAoXzEgeXMpKSAoXFxuICAgICAgICAgICAgY29uZFxcbiAgICAgICAgICAgICAgKD0gMCBuYnIpIHhzXFxuICAgICAgICAgICAgICAoPSAxIG5icikgKGNkciB4cylcXG4gICAgICAgICAgICAgIFxcXCJkZWZhdWx0XFxcIiAoLXNraXAtIChsaXN0IChkZWNyIG5icikgKGNkciB4cykpKSkpKSkgKFxcbiAgICAgICAgICAtc2tpcC0gKGxpc3QgbmJyIHhzKSkpKSlcXG5cXG4gIChkZWYhIGludm9rYWJsZT8gKGZuKiAoeCkgKG9yIChmdW5jdGlvbj8geCkgKG1hY3JvPyB4KSkpKVxcblxcbiAgKGRlZiEgLiAoXFxuICAgIG1hY3JvKiAoeCBrZXkgJiB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBgKGdldCB+eCB+a2V5KVxcbiAgICAgICAgYCgoZ2V0IH54IH5rZXkpIH5AeHMpKSkpXFxuXFxuICAoZGVmISAuLiAoXFxuICAgIGZuKiAobG8gaGkpIChcXG4gICAgICBsZXRyZWMqIChcXG4gICAgICAgIC0uLi1cXG4gICAgICAgIChmbiogKHhzKSAoXFxuICAgICAgICAgIGxldCogKGxvIChfMCB4cykgaGkgKF8xIHhzKSAtbGlzdC0gKF8yIHhzKSkgKFxcbiAgICAgICAgICAgIGlmICg9IGxvIGhpKVxcbiAgICAgICAgICAgICAgKGNvbnMgaGkgLWxpc3QtKVxcbiAgICAgICAgICAgICAgKC0uLi0gKGxpc3QgbG8gKGRlY3IgaGkpIChjb25zIGhpIC1saXN0LSkpKSkpKSkgKFxcbiAgICAgICAgICAtLi4tIChsaXN0IGxvIGhpICcoKSkpKSkpXFxuXFxuICAoZGVmISBkZWZyZWMhIChcXG4gICAgbWFjcm8qIChmbi1uYW1lIGZuLWJvZHkpXFxuICAgICAgYChkZWYhIH5mbi1uYW1lIChsZXRyZWMqICh+Zm4tbmFtZSB+Zm4tYm9keSkgfmZuLW5hbWUpKSkpXFxuXFxuICAoZGVmISBmb3IqIChcXG4gICAgbWFjcm8qIChsb29wLXBhcmFtZXRlcnMgYm9keSlcXG4gICAgICBgKGxvb3BcXG4gICAgICAgICB+KF8wIGxvb3AtcGFyYW1ldGVycylcXG4gICAgICAgICAoaWYgfihfMSBsb29wLXBhcmFtZXRlcnMpXFxuICAgICAgICAgICAoZG8gfmJvZHkgKGxvb3AgfihfMiBsb29wLXBhcmFtZXRlcnMpKSlcXG4gICAgICAgICAgIG5pbCkpKSlcXG5cXG4gIChkZWYhIGZvci1lYWNoIChcXG4gICAgZm4qIChmIHhzKSAoXFxuICAgICAgcmVkdWNlIChmbiogKG1lbW8geCkgKGRvIChmIHgpIG1lbW8pKSBuaWwgeHMpKSlcXG5cXG4gIChkZWYhIG4tdGltZXMgKFxcbiAgICBmbiogKG4gZikgKFxcbiAgICAgIGxvb3BcXG4gICAgICAgIChpIDApXFxuICAgICAgICAoaWYgKD0gaSBuKVxcbiAgICAgICAgICBuaWxcXG4gICAgICAgICAgKGRvIChmIGkpIChsb29wICgrIGkgMSkpKSkpKSlcXG5cXG4gIChkZWYhIHRhcCAoZm4qIChmIHgpIChkbyAoZiB4KSB4KSkpXFxuXFxuICAoZGVmISB3aXRoLXNpZGUtZWZmZWN0IChmbiogKHRodW5rIHgpIChkbyAodGh1bmspIHgpKSlcXG5cXG4gIChkZWYhIHRodW5rIChtYWNybyogKGZvcm0pIGAoZm4qICgpIH5mb3JtKSkpXFxuXFxuICAoZGVmISBjYWxsIChtYWNybyogKGYgJiB4cykgYCh+ZiB+QHhzKSkpXFxuXFxuICAoZGVmISBhcHBseSAobWFjcm8qIChmIHhzKSBgKGV2YWwgKGNvbnMgfmYgfnhzKSkpKVxcblxcbiAgKGRlZiEgZXZhbC1zdHJpbmcgKGZuKiAoZXJsU3RyaW5nKSAoZXZhbCAocGFyc2UgZXJsU3RyaW5nKSkpKVxcbilcXG5cIiIsImltcG9ydCB7IGNvbW1lbnRTaWduYWwgfSBmcm9tICcuL2NvbW1lbnRTaWduYWwnO1xuXG52YXIgY3JlYXRlVG9rZW5SZWdleCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gL1tcXHMsXSoofkB8XFwjXFwrfFxcI1xcLXxcXCNcXCF8W1xcW1xcXSgpe30nYH5AXl18XCIoPzpcXFxcLnxbXlxcXFxcIl0pKlwifDsuKnxbXlxcc1xcW1xcXSgpe30nXCJgLDtdKikvZztcbn07XG5cbnZhciBpc0NvbW1lbnQgPSBmdW5jdGlvbihtYXRjaCkge1xuICByZXR1cm4gbWF0Y2hbMF0gPT09ICc7Jztcbn07XG5cbnZhciBpc01lYW5pbmdmdWwgPSBmdW5jdGlvbihtYXRjaCkge1xuICByZXR1cm4gbWF0Y2ggIT09ICcnO1xufTtcblxudmFyIHRva2VuaXplID0gZnVuY3Rpb24oc291cmNlQ29kZSkge1xuICB2YXIgbWF0Y2g7XG4gIHZhciB0b2tlblJlZ2V4ID0gY3JlYXRlVG9rZW5SZWdleCgpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChpc01lYW5pbmdmdWwobWF0Y2ggPSB0b2tlblJlZ2V4LmV4ZWMoc291cmNlQ29kZSlbMV0pKSB7XG4gICAgaWYgKGlzQ29tbWVudChtYXRjaCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICByZXN1bHQucHVzaChtYXRjaCk7XG4gIH1cbiAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gY29tbWVudFNpZ25hbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuXG5leHBvcnQgeyB0b2tlbml6ZSB9O1xuIiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tICcuL3BhcnNlJztcbmltcG9ydCB7IHRva2VuaXplIH0gZnJvbSAnLi90b2tlbml6ZSc7XG5cbmV4cG9ydCBjb25zdCB0b2tlbml6ZUFuZFBhcnNlID0gZnVuY3Rpb24oc291cmNlQ29kZSkge1xuICByZXR1cm4gcGFyc2UodG9rZW5pemUoc291cmNlQ29kZSkpO1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUVybExpc3QgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGVybEF0b21UeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBlcmxUeXBlcyB9IGZyb20gJy4vdHlwZXMnO1xuXG52YXIgY3JlYXRlRXJsQXRvbSA9IGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZXJsVmFsdWU6IGVybFZhbHVlLFxuICAgIHR5cGU6IGVybEF0b21UeXBlXG4gIH07XG59O1xuXG52YXIgY3JlYXRlRXJsQm9vbGVhbiA9IGZ1bmN0aW9uKGpzQm9vbGVhbikge1xuICBpZiAoanNCb29sZWFuKSB7XG4gICAgcmV0dXJuIGVybFRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybEZhbHNlO1xuICB9XG59O1xuXG52YXIgY3JlYXRlRXJsSWdub3JlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBlcmxJZ25vcmU7XG59O1xuXG52YXIgY3JlYXRlRXJsTmlsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBlcmxOaWw7XG59O1xuXG52YXIgY3JlYXRlRXJsVmFsdWUgPSBmdW5jdGlvbihqc1ZhbHVlLCBlcmxUeXBlKSB7XG4gIHJldHVybiB7XG4gICAganNWYWx1ZToganNWYWx1ZSxcbiAgICB0eXBlOiBlcmxUeXBlXG4gIH07XG59O1xuXG52YXIgY3JlYXRlRmFjdG9yeUFuZFByZWRpY2F0ZSA9IGZ1bmN0aW9uKGVybFR5cGUpIHtcbiAgdmFyIGZhY3RvcnkgPSBmdW5jdGlvbihqc1ZhbHVlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVybFZhbHVlKGpzVmFsdWUsIGVybFR5cGUpO1xuICB9O1xuICB2YXIgcHJlZGljYXRlID0gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICByZXR1cm4gZXJsVmFsdWUudHlwZSA9PT0gZXJsVHlwZTtcbiAgfTtcbiAgcmV0dXJuIFtmYWN0b3J5LCBwcmVkaWNhdGVdO1xufTtcblxudmFyIGNyZWF0ZVByZWRpY2F0ZSA9IGZ1bmN0aW9uKGNvbnN0YW50KSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gY29uc3RhbnQ7XG4gIH07XG59O1xuXG52YXIgZXh0cmFjdEpzVmFsdWUgPSBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICByZXR1cm4gZXJsVmFsdWUuanNWYWx1ZTtcbn07XG5cbnZhciBfZXJsVHlwZXMgPSBlcmxUeXBlcy5tYXAoY3JlYXRlRmFjdG9yeUFuZFByZWRpY2F0ZSk7XG5cbnZhciBfY3JlYXRlRXJsQm9vbGVhbiAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMF1bMF07XG52YXIgaXNFcmxCb29sZWFuICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzBdWzFdO1xudmFyIGNyZWF0ZUVybENvcmVFZmZlY3RmdWxGdW5jdGlvbiA9IF9lcmxUeXBlc1sxXVswXTtcbnZhciBpc0VybENvcmVFZmZlY3RmdWxGdW5jdGlvbiAgICAgPSBfZXJsVHlwZXNbMV1bMV07XG52YXIgY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbiAgICAgID0gX2VybFR5cGVzWzJdWzBdO1xudmFyIGlzRXJsQ29yZVB1cmVGdW5jdGlvbiAgICAgICAgICA9IF9lcmxUeXBlc1syXVsxXTtcbnZhciBjcmVhdGVFcmxJZGVudGlmaWVyICAgICAgICAgICAgPSBfZXJsVHlwZXNbM11bMF07XG52YXIgaXNFcmxJZGVudGlmaWVyICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzNdWzFdO1xudmFyIGNyZWF0ZUVybEluZGV4ICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s0XVswXTtcbnZhciBpc0VybEluZGV4ICAgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbNF1bMV07XG52YXIgY3JlYXRlRXJsS2V5d29yZCAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzVdWzBdO1xudmFyIGlzRXJsS2V5d29yZCAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s1XVsxXTtcbnZhciBfY3JlYXRlRXJsTGlzdCAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbNl1bMF07XG52YXIgaXNFcmxMaXN0ICAgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzZdWzFdO1xudmFyIGNyZWF0ZUVybE1hY3JvICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s3XVswXTtcbnZhciBpc0VybE1hY3JvICAgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbN11bMV07XG52YXIgY3JlYXRlRXJsTnVtYmVyICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzhdWzBdO1xudmFyIGlzRXJsTnVtYmVyICAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s4XVsxXTtcbnZhciBjcmVhdGVFcmxTcGVjaWFsRm9ybSAgICAgICAgICAgPSBfZXJsVHlwZXNbOV1bMF07XG52YXIgaXNFcmxTcGVjaWFsRm9ybSAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzldWzFdO1xudmFyIGNyZWF0ZUVybFN0cmluZyAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1sxMF1bMF07XG52YXIgaXNFcmxTdHJpbmcgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzEwXVsxXTtcbnZhciBjcmVhdGVFcmxTeW1ib2wgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTFdWzBdO1xudmFyIGlzRXJsU3ltYm9sICAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1sxMV1bMV07XG52YXIgX2NyZWF0ZUVybFVuaXQgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzEyXVswXTtcbnZhciBfaXNFcmxVbml0ICAgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTJdWzFdO1xudmFyIGNyZWF0ZUVybFVzZXJQdXJlRnVuY3Rpb24gICAgICA9IF9lcmxUeXBlc1sxM11bMF07XG52YXIgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uICAgICAgICAgID0gX2VybFR5cGVzWzEzXVsxXTtcbnZhciBfY3JlYXRlRXJsQXRvbSAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTRdWzBdO1xudmFyIGlzRXJsQXRvbSAgICAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1sxNF1bMV07XG5cbnZhciBlcmxJZ25vcmUgPSBfY3JlYXRlRXJsVW5pdChudWxsKTtcblxudmFyIGVybE5pbCA9IF9jcmVhdGVFcmxVbml0KG51bGwpO1xuXG52YXIgZXJsQm9vbGVhbnMgPSBbZmFsc2UsIHRydWVdLm1hcChfY3JlYXRlRXJsQm9vbGVhbik7XG5cbnZhciBlcmxGYWxzZSA9IGVybEJvb2xlYW5zWzBdO1xudmFyIGVybFRydWUgID0gZXJsQm9vbGVhbnNbMV07XG5cbnZhciBwcmVkaWNhdGVzID0gW2VybEZhbHNlLCBlcmxJZ25vcmUsIGVybE5pbCwgZXJsVHJ1ZV0ubWFwKGNyZWF0ZVByZWRpY2F0ZSk7XG5cbnZhciBpc0VybEZhbHNlICA9IHByZWRpY2F0ZXNbMF07XG52YXIgaXNFcmxJZ25vcmUgPSBwcmVkaWNhdGVzWzFdO1xudmFyIGlzRXJsTmlsICAgID0gcHJlZGljYXRlc1syXTtcbnZhciBpc0VybFRydWUgICA9IHByZWRpY2F0ZXNbM107XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUVybEF0b20sXG4gIGNyZWF0ZUVybEJvb2xlYW4sXG4gIGNyZWF0ZUVybENvcmVFZmZlY3RmdWxGdW5jdGlvbixcbiAgY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbixcbiAgY3JlYXRlRXJsSWRlbnRpZmllcixcbiAgY3JlYXRlRXJsSWdub3JlLFxuICBjcmVhdGVFcmxJbmRleCxcbiAgY3JlYXRlRXJsS2V5d29yZCxcbiAgY3JlYXRlRXJsTGlzdCxcbiAgY3JlYXRlRXJsTWFjcm8sXG4gIGNyZWF0ZUVybE5pbCxcbiAgY3JlYXRlRXJsTnVtYmVyLFxuICBjcmVhdGVFcmxTcGVjaWFsRm9ybSxcbiAgY3JlYXRlRXJsU3RyaW5nLFxuICBjcmVhdGVFcmxTeW1ib2wsXG4gIGNyZWF0ZUVybFVzZXJQdXJlRnVuY3Rpb24sXG4gIGV4dHJhY3RKc1ZhbHVlLFxuICBpc0VybEF0b20sXG4gIGlzRXJsQm9vbGVhbixcbiAgaXNFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24sXG4gIGlzRXJsQ29yZVB1cmVGdW5jdGlvbixcbiAgZXJsRmFsc2UsXG4gIGlzRXJsRmFsc2UsXG4gIGlzRXJsSWRlbnRpZmllcixcbiAgZXJsSWdub3JlLFxuICBpc0VybElnbm9yZSxcbiAgaXNFcmxJbmRleCxcbiAgaXNFcmxLZXl3b3JkLFxuICBpc0VybExpc3QsXG4gIGlzRXJsTWFjcm8sXG4gIGVybE5pbCxcbiAgaXNFcmxOaWwsXG4gIGlzRXJsTnVtYmVyLFxuICBpc0VybFNwZWNpYWxGb3JtLFxuICBpc0VybFN0cmluZyxcbiAgaXNFcmxTeW1ib2wsXG4gIGVybFRydWUsXG4gIGlzRXJsVHJ1ZSxcbiAgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uXG59O1xuIiwidmFyIGVybEJvb2xlYW5UeXBlICAgICAgICAgICAgICAgPSAnZXJsQm9vbGVhblR5cGUnO1xudmFyIGVybENvcmVFZmZlY3RmdWxGdW5jdGlvblR5cGUgPSAnZXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uVHlwZSc7XG52YXIgZXJsQ29yZVB1cmVGdW5jdGlvblR5cGUgICAgICA9ICdlcmxDb3JlUHVyZUZ1bmN0aW9uVHlwZSc7XG52YXIgZXJsSWRlbnRpZmllclR5cGUgICAgICAgICAgICA9ICdlcmxJZGVudGlmaWVyVHlwZSc7XG52YXIgZXJsSW5kZXhUeXBlICAgICAgICAgICAgICAgICA9ICdlcmxJbmRleFR5cGUnO1xudmFyIGVybEtleXdvcmRUeXBlICAgICAgICAgICAgICAgPSAnZXJsS2V5d29yZFR5cGUnO1xudmFyIGVybExpc3RUeXBlICAgICAgICAgICAgICAgICAgPSAnZXJsTGlzdFR5cGUnO1xudmFyIGVybE1hY3JvVHlwZSAgICAgICAgICAgICAgICAgPSAnZXJsTWFjcm9UeXBlJztcbnZhciBlcmxOdW1iZXJUeXBlICAgICAgICAgICAgICAgID0gJ2VybE51bWJlclR5cGUnO1xudmFyIGVybFNwZWNpYWxGb3JtVHlwZSAgICAgICAgICAgPSAnZXJsU3BlY2lhbEZvcm1UeXBlJztcbnZhciBlcmxTdHJpbmdUeXBlICAgICAgICAgICAgICAgID0gJ2VybFN0cmluZ1R5cGUnO1xudmFyIGVybFN5bWJvbFR5cGUgICAgICAgICAgICAgICAgPSAnZXJsU3ltYm9sVHlwZSc7XG52YXIgZXJsVW5pdFR5cGUgICAgICAgICAgICAgICAgICA9ICdlcmxVbml0VHlwZSc7XG52YXIgZXJsVXNlclB1cmVGdW5jdGlvblR5cGUgICAgICA9ICdlcmxVc2VyUHVyZUZ1bmN0aW9uVHlwZSc7XG52YXIgZXJsQXRvbVR5cGUgICAgICAgICAgICAgICAgICA9ICdlcmxBdG9tVHlwZSc7XG5cbnZhciBlcmxUeXBlcyA9IFtcbiAgZXJsQm9vbGVhblR5cGUsXG4gIGVybENvcmVFZmZlY3RmdWxGdW5jdGlvblR5cGUsXG4gIGVybENvcmVQdXJlRnVuY3Rpb25UeXBlLFxuICBlcmxJZGVudGlmaWVyVHlwZSxcbiAgZXJsSW5kZXhUeXBlLFxuICBlcmxLZXl3b3JkVHlwZSxcbiAgZXJsTGlzdFR5cGUsXG4gIGVybE1hY3JvVHlwZSxcbiAgZXJsTnVtYmVyVHlwZSxcbiAgZXJsU3BlY2lhbEZvcm1UeXBlLFxuICBlcmxTdHJpbmdUeXBlLFxuICBlcmxTeW1ib2xUeXBlLFxuICBlcmxVbml0VHlwZSxcbiAgZXJsVXNlclB1cmVGdW5jdGlvblR5cGUsXG4gIGVybEF0b21UeXBlXG5dO1xuXG5leHBvcnQge1xuICBlcmxBdG9tVHlwZSxcbiAgZXJsQm9vbGVhblR5cGUsXG4gIGVybENvcmVFZmZlY3RmdWxGdW5jdGlvblR5cGUsXG4gIGVybENvcmVQdXJlRnVuY3Rpb25UeXBlLFxuICBlcmxJZGVudGlmaWVyVHlwZSxcbiAgZXJsSW5kZXhUeXBlLFxuICBlcmxLZXl3b3JkVHlwZSxcbiAgZXJsTGlzdFR5cGUsXG4gIGVybE1hY3JvVHlwZSxcbiAgZXJsTnVtYmVyVHlwZSxcbiAgZXJsU3BlY2lhbEZvcm1UeXBlLFxuICBlcmxTdHJpbmdUeXBlLFxuICBlcmxTeW1ib2xUeXBlLFxuICBlcmxUeXBlcyxcbiAgZXJsVW5pdFR5cGUsXG4gIGVybFVzZXJQdXJlRnVuY3Rpb25UeXBlXG59O1xuIiwiZnVuY3Rpb24gZGlmZkFycmF5KHZhbHVlMSwgdmFsdWUwLCBpbmRleCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUwKSkge1xuICAgIHJldHVybiB7IHRyZWU6IGluZGV4LCBjb21tYW5kczogW1sncmVwbGFjZScsIHZhbHVlMV1dLCBpbmRleDogaW5kZXggKyAxIH07XG4gIH1cblxuICB2YXIgY291bnQgPSAwO1xuICB2YXIgbGVuZ3RoMSA9IHZhbHVlMS5sZW5ndGg7XG4gIHZhciBsZW5ndGgwID0gdmFsdWUwLmxlbmd0aDtcbiAgdmFyIG1pbkxlbmd0aCA9IE1hdGgubWluKGxlbmd0aDEsIGxlbmd0aDApO1xuXG4gIGlmIChtaW5MZW5ndGggPiAxKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBtaW5MZW5ndGg7IGorKykge1xuICAgICAgaWYgKHZhbHVlMVtqXSAhPT0gdmFsdWUwW2pdKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvdW50ID09PSBtaW5MZW5ndGgpIHtcbiAgICAgIHJldHVybiB7IHRyZWU6IGluZGV4LCBjb21tYW5kczogW1sncmVwbGFjZScsIHZhbHVlMV1dLCBpbmRleDogaW5kZXggKyAxIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIGkgPSAwO1xuICB2YXIgdHJlZSA9IFtdO1xuICB2YXIgY29tbWFuZHMgPSBbXTtcblxuICBmb3IgKDsgaSA8IG1pbkxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHZhbHVlMVtpXSAhPT0gdmFsdWUwW2ldKSB7XG4gICAgICB2YXIgX3BhdGNoID0gX2RpZmYodmFsdWUxW2ldLCB2YWx1ZTBbaV0sIGluZGV4KTtcbiAgICAgIGlmIChfcGF0Y2guY29tbWFuZHMubGVuZ3RoID4gMCkge1xuICAgICAgICB0cmVlLnB1c2goeyBpbmRleDogaSwgdmFsdWU6IF9wYXRjaC50cmVlIH0pO1xuICAgICAgICBjb21tYW5kcyA9IGNvbW1hbmRzLmNvbmNhdChfcGF0Y2guY29tbWFuZHMpO1xuICAgICAgICBpbmRleCA9IGluZGV4ICsgX3BhdGNoLmNvbW1hbmRzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKDsgaSA8IGxlbmd0aDE7IGkrKykge1xuICAgIHRyZWUucHVzaCh7IGluZGV4OiBpLCB2YWx1ZTogaW5kZXggfSk7XG4gICAgY29tbWFuZHMucHVzaChbJ2luc2VydEF0RW5kJywgdmFsdWUxW2ldXSk7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIHZhciByZW1vdmFscyA9IFtdO1xuXG4gIGZvciAoOyBpIDwgbGVuZ3RoMDsgaSsrKSB7XG4gICAgcmVtb3ZhbHMudW5zaGlmdCh7IGluZGV4OiBpLCB2YWx1ZTogaW5kZXggfSk7XG4gICAgY29tbWFuZHMucHVzaChbJ3JlbW92ZSddKTtcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgdHJlZSA9IHRyZWUuY29uY2F0KHJlbW92YWxzKTtcblxuICByZXR1cm4geyB0cmVlOiB0cmVlLCBjb21tYW5kczogY29tbWFuZHMsIGluZGV4OiBpbmRleCB9O1xufVxuXG5mdW5jdGlvbiBkaWZmT2JqZWN0KHZhbHVlMSwgdmFsdWUwLCBpbmRleCkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlMCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJlZTogaW5kZXgsXG4gICAgICBjb21tYW5kczogW1sncmVwbGFjZScsIHZhbHVlMV1dLFxuICAgICAgaW5kZXg6IGluZGV4ICsgMVxuICAgIH07XG4gIH1cblxuICB2YXIga2V5Q291bnQgPSAwO1xuICB2YXIgZGlmZkNvdW50ID0gMDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUwKSB7XG4gICAgaWYgKCF2YWx1ZTAuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XG4gICAga2V5Q291bnQrKztcbiAgICBpZiAoIXZhbHVlMS5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IHZhbHVlMVtrZXldICE9PSB2YWx1ZTBba2V5XSkge1xuICAgICAgZGlmZkNvdW50Kys7XG4gICAgfVxuICB9XG5cbiAgaWYgKGtleUNvdW50ID4gMSAmJiBrZXlDb3VudCA9PT0gZGlmZkNvdW50KSB7XG4gICAgcmV0dXJuIHsgdHJlZTogaW5kZXgsIGNvbW1hbmRzOiBbWydyZXBsYWNlJywgdmFsdWUxXV0sIGluZGV4OiBpbmRleCArIDEgfTtcbiAgfVxuXG4gIHZhciB0cmVlID0gW107XG4gIHZhciBjb21tYW5kcyA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZTEpIHtcbiAgICBpZiAoIXZhbHVlMS5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcbiAgICBpZiAodmFsdWUwLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGlmICh2YWx1ZTFba2V5XSAhPT0gdmFsdWUwW2tleV0pIHtcbiAgICAgICAgdmFyIF9wYXRjaCA9IF9kaWZmKHZhbHVlMVtrZXldLCB2YWx1ZTBba2V5XSwgaW5kZXgpO1xuICAgICAgICBpZiAoX3BhdGNoLmNvbW1hbmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0cmVlLnB1c2goeyBpbmRleDoga2V5LCB2YWx1ZTogX3BhdGNoLnRyZWUgfSk7XG4gICAgICAgICAgY29tbWFuZHMgPSBjb21tYW5kcy5jb25jYXQoX3BhdGNoLmNvbW1hbmRzKTtcbiAgICAgICAgICBpbmRleCA9IGluZGV4ICsgX3BhdGNoLmNvbW1hbmRzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmVlLnB1c2goeyBpbmRleDoga2V5LCB2YWx1ZTogaW5kZXggfSk7XG4gICAgICBjb21tYW5kcy5wdXNoKFsnc2V0QXRLZXknLCB2YWx1ZTFba2V5XV0pO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUwKSB7XG4gICAgaWYgKCF2YWx1ZTEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdHJlZS5wdXNoKHsgaW5kZXg6IGtleSwgdmFsdWU6IGluZGV4IH0pO1xuICAgICAgY29tbWFuZHMucHVzaChbJ2RlbGV0ZSddKTtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgdHJlZTogdHJlZSwgY29tbWFuZHM6IGNvbW1hbmRzLCBpbmRleDogaW5kZXggfTtcbn1cblxuZnVuY3Rpb24gX2RpZmYodmFsdWUxLCB2YWx1ZTAsIGluZGV4KSB7XG4gIGlmICh2YWx1ZTEgPT09IHZhbHVlMCkge1xuICAgIHJldHVybiB7IHRyZWU6IFtdLCBjb21tYW5kczogW10sIGluZGV4OiBpbmRleCB9O1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUxKSkge1xuICAgIHJldHVybiBkaWZmQXJyYXkodmFsdWUxLCB2YWx1ZTAsIGluZGV4KTtcbiAgfVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZTEpKSB7XG4gICAgcmV0dXJuIGRpZmZPYmplY3QodmFsdWUxLCB2YWx1ZTAsIGluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB7IHRyZWU6IGluZGV4LCBjb21tYW5kczogW1sncmVwbGFjZScsIHZhbHVlMV1dLCBpbmRleDogaW5kZXggKyAxIH07XG59XG5cbnZhciBkaWZmID0gZnVuY3Rpb24odmFsdWUxLCB2YWx1ZTApIHtcbiAgdmFyIHBhdGNoID0gX2RpZmYodmFsdWUxLCB2YWx1ZTAsIDApO1xuICByZXR1cm4geyB2YWx1ZTogcGF0Y2gudHJlZSwgY29tbWFuZHM6IHBhdGNoLmNvbW1hbmRzIH07XG59O1xuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5leHBvcnQgeyBkaWZmIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZykge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHZhciBlbGVtZW50ID0geyB0YWc6IHRhZyB9O1xuXG4gICAgaWYgKGNvbmZpZyAhPSBudWxsKSB7IC8vIGlzT2JqZWN0XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBjb25maWcpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ2lkJykge1xuICAgICAgICAgIGVsZW1lbnQuaWQgPSBjb25maWcuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09PSAnY2xhc3NlcycpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzZXMgPSBjb25maWcuY2xhc3NlcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlID0gY29uZmlnLnN0eWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ2F0dHJpYnMnKSB7XG4gICAgICAgICAgZWxlbWVudC5hdHRyaWJzID0gY29uZmlnLmF0dHJpYnM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgaXNTdHJpbmcoYXJnc1swXSkpIHtcbiAgICAgICAgZWxlbWVudC5jaGlsZHJlbiA9IGFyZ3NbMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmNoaWxkcmVuID0gW10uY29uY2F0LmFwcGx5KFtdLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBTdHJpbmddJztcbn1cblxudmFyIHRhZ3MgPSB7XG4gICdBJzogdHJ1ZSxcbiAgJ0JVVFRPTic6IHRydWUsXG4gICdDQU5WQVMnOiB0cnVlLFxuICAnQ09ERSc6IHRydWUsXG4gICdESVYnOiB0cnVlLFxuICAnRk9PVEVSJzogdHJ1ZSxcbiAgJ0ZPUk0nOiB0cnVlLFxuICAnSDEnOiB0cnVlLFxuICAnSDInOiB0cnVlLFxuICAnSDMnOiB0cnVlLFxuICAnSDQnOiB0cnVlLFxuICAnSDUnOiB0cnVlLFxuICAnSDYnOiB0cnVlLFxuICAnSEVBREVSJzogdHJ1ZSxcbiAgJ0lNRyc6IHRydWUsXG4gICdMQUJFTCc6IHRydWUsXG4gICdMSSc6IHRydWUsXG4gICdMSU5LJzogdHJ1ZSxcbiAgJ05BVic6IHRydWUsXG4gICdOT1NDUklQVCc6IHRydWUsXG4gICdPUFRHUk9VUCc6IHRydWUsXG4gICdPUFRJT04nOiB0cnVlLFxuICAnT1VUUFVUJzogdHJ1ZSxcbiAgJ1AnOiB0cnVlLFxuICAnUEFSQU0nOiB0cnVlLFxuICAnUFJFJzogdHJ1ZSxcbiAgJ1NDUklQVCc6IHRydWUsXG4gICdTRUNUSU9OJzogdHJ1ZSxcbiAgJ1NFTEVDVCc6IHRydWUsXG4gICdTT1VSQ0UnOiB0cnVlLFxuICAnU1BBTic6IHRydWUsXG4gICdTVFlMRSc6IHRydWUsXG4gICdURVhUQVJFQSc6IHRydWVcbn07XG5cbnZhciBlbGVtZW50RmFjdG9yaWVzID0ge307XG5cbmZvciAodmFyIHRhZ05hbWUgaW4gdGFncykge1xuICBlbGVtZW50RmFjdG9yaWVzW3RhZ05hbWVdID0gY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbn1cblxuZXhwb3J0IGNvbnN0IEEgPSBlbGVtZW50RmFjdG9yaWVzLkE7XG5leHBvcnQgY29uc3QgQlVUVE9OID0gZWxlbWVudEZhY3Rvcmllcy5CVVRUT047XG5leHBvcnQgY29uc3QgQ0FOVkFTID0gZWxlbWVudEZhY3Rvcmllcy5DQU5WQVM7XG5leHBvcnQgY29uc3QgQ09ERSA9IGVsZW1lbnRGYWN0b3JpZXMuQ09ERTtcbmV4cG9ydCBjb25zdCBESVYgPSBlbGVtZW50RmFjdG9yaWVzLkRJVjtcbmV4cG9ydCBjb25zdCBGT09URVIgPSBlbGVtZW50RmFjdG9yaWVzLkZPT1RFUjtcbmV4cG9ydCBjb25zdCBGT1JNID0gZWxlbWVudEZhY3Rvcmllcy5GT1JNO1xuZXhwb3J0IGNvbnN0IEgxID0gZWxlbWVudEZhY3Rvcmllcy5IMTtcbmV4cG9ydCBjb25zdCBIMiA9IGVsZW1lbnRGYWN0b3JpZXMuSDI7XG5leHBvcnQgY29uc3QgSDMgPSBlbGVtZW50RmFjdG9yaWVzLkgzO1xuZXhwb3J0IGNvbnN0IEg0ID0gZWxlbWVudEZhY3Rvcmllcy5INDtcbmV4cG9ydCBjb25zdCBINSA9IGVsZW1lbnRGYWN0b3JpZXMuSDU7XG5leHBvcnQgY29uc3QgSDYgPSBlbGVtZW50RmFjdG9yaWVzLkg2O1xuZXhwb3J0IGNvbnN0IEhFQURFUiA9IGVsZW1lbnRGYWN0b3JpZXMuSEVBREVSO1xuZXhwb3J0IGNvbnN0IElNRyA9IGVsZW1lbnRGYWN0b3JpZXMuSU1HO1xuZXhwb3J0IGNvbnN0IExBQkVMID0gZWxlbWVudEZhY3Rvcmllcy5MQUJFTDtcbmV4cG9ydCBjb25zdCBMSSA9IGVsZW1lbnRGYWN0b3JpZXMuTEk7XG5leHBvcnQgY29uc3QgTElOSyA9IGVsZW1lbnRGYWN0b3JpZXMuTElOSztcbmV4cG9ydCBjb25zdCBOQVYgPSBlbGVtZW50RmFjdG9yaWVzLk5BVjtcbmV4cG9ydCBjb25zdCBOT1NDUklQVCA9IGVsZW1lbnRGYWN0b3JpZXMuTk9TQ1JJUFQ7XG5leHBvcnQgY29uc3QgT1BUR1JPVVAgPSBlbGVtZW50RmFjdG9yaWVzLk9QVEdST1VQO1xuZXhwb3J0IGNvbnN0IE9QVElPTiA9IGVsZW1lbnRGYWN0b3JpZXMuT1BUSU9OO1xuZXhwb3J0IGNvbnN0IE9VVFBVVCA9IGVsZW1lbnRGYWN0b3JpZXMuT1VUUFVUO1xuZXhwb3J0IGNvbnN0IFAgPSBlbGVtZW50RmFjdG9yaWVzLlA7XG5leHBvcnQgY29uc3QgUEFSQU0gPSBlbGVtZW50RmFjdG9yaWVzLlBBUkFNO1xuZXhwb3J0IGNvbnN0IFBSRSA9IGVsZW1lbnRGYWN0b3JpZXMuUFJFO1xuZXhwb3J0IGNvbnN0IFNDUklQVCA9IGVsZW1lbnRGYWN0b3JpZXMuU0NSSVBUO1xuZXhwb3J0IGNvbnN0IFNFQ1RJT04gPSBlbGVtZW50RmFjdG9yaWVzLlNFQ1RJT047XG5leHBvcnQgY29uc3QgU0VMRUNUID0gZWxlbWVudEZhY3Rvcmllcy5TRUxFQ1Q7XG5leHBvcnQgY29uc3QgU09VUkNFID0gZWxlbWVudEZhY3Rvcmllcy5TT1VSQ0U7XG5leHBvcnQgY29uc3QgU1BBTiA9IGVsZW1lbnRGYWN0b3JpZXMuU1BBTjtcbmV4cG9ydCBjb25zdCBTVFlMRSA9IGVsZW1lbnRGYWN0b3JpZXMuU1RZTEU7XG5leHBvcnQgY29uc3QgVEVYVEFSRUEgPSBlbGVtZW50RmFjdG9yaWVzLlRFWFRBUkVBO1xuIiwiZnVuY3Rpb24gYXR0YWNoRWxlbWVudChwYXJlbnQsIGVsZW1lbnQpIHtcbiAgaWYgKGlzU3RyaW5nKGVsZW1lbnQpKSB7XG4gICAgcGFyZW50LmlubmVyVGV4dCA9IGVsZW1lbnQ7IC8vID9cbiAgfSBlbHNlIHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQocGFyZW50LCBuZXdFbGVtZW50LCBvbGRFbGVtZW50KSB7XG4gIGlmIChpc1N0cmluZyhuZXdFbGVtZW50KSkge1xuICAgIHBhcmVudC5pbm5lclRleHQgPSBuZXdFbGVtZW50OyAvLyA/XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50LnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LCBvbGRFbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRBdHRhY2hFbGVtZW50KHBhcmVudCwgY29uZmlnKSB7XG4gIGF0dGFjaEVsZW1lbnQocGFyZW50LCBjcmVhdGVFbGVtZW50KGNvbmZpZykpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRTdWJzdGl0dXRlRWxlbWVudChwYXJlbnQsIGNvbmZpZywgb2xkRWxlbWVudEluZGV4KSB7XG4gIHJlcGxhY2VFbGVtZW50KFxuICAgIHBhcmVudCxcbiAgICBjcmVhdGVFbGVtZW50KGNvbmZpZyksXG4gICAgZmluZENoaWxkKHBhcmVudCwgeyBtb2RlOiAnaW5kZXgnLCBrZXk6IG9sZEVsZW1lbnRJbmRleCB9KSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnRzKG5vZGUsIGVsZW1lbnRzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBjcmVhdGVBbmRBdHRhY2hFbGVtZW50KG5vZGUsIGVsZW1lbnRzW2ldKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGNvbmZpZykge1xuICBpZiAoaXNTdHJpbmcoY29uZmlnKSkge1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cbiAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNvbmZpZy50YWcpO1xuICBpZiAoY29uZmlnLmlkICE9IG51bGwpIHtcbiAgICBub2RlLmlkID0gY29uZmlnLmlkO1xuICB9XG4gIGlmIChjb25maWcuY2xhc3NlcyAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2xhc3MgaW4gY29uZmlnLmNsYXNzZXMpIHtcbiAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChrbGFzcyk7XG4gICAgfVxuICB9XG4gIGlmIChjb25maWcuYXR0cmlicyAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIgYXR0cmliS2V5IGluIGNvbmZpZy5hdHRyaWJzKSB7XG4gICAgICBpZiAoYXR0cmliS2V5ICE9PSAnc3R5bGUnKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYktleSwgY29uZmlnLmF0dHJpYnNbYXR0cmliS2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChjb25maWcuc3R5bGUgIT0gbnVsbCkge1xuICAgIGZvciAodmFyIHN0eWxlS2V5IGluIGNvbmZpZy5zdHlsZSkge1xuICAgICAgbm9kZS5zdHlsZVtzdHlsZUtleV0gPSBjb25maWcuc3R5bGVbc3R5bGVLZXldO1xuICAgIH1cbiAgfVxuICBpZiAoY29uZmlnLmNoaWxkcmVuICE9IG51bGwpIHtcbiAgICBpZiAoaXNTdHJpbmcoY29uZmlnLmNoaWxkcmVuKSkge1xuICAgICAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudChub2RlLCBjb25maWcuY2hpbGRyZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAobmV3Q29uZmlnLCBpbmRleCkgeyBcbiAgICAgICAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudChub2RlLCBuZXdDb25maWcpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBmaW5kQ2hpbGQocGFyZW50LCBjb25maWcpIHtcbiAgc3dpdGNoIChjb25maWcubW9kZSkge1xuICAgIGNhc2UgJ2lkJzpcbiAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcua2V5KTtcbiAgICBjYXNlICdjbGFzcyc6XG4gICAgICByZXR1cm4gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY29uZmlnLmtleS5jbGFzcylbY29uZmlnLmtleS5pbmRleF07XG4gICAgY2FzZSAndGFnJzpcbiAgICAgIHJldHVybiBwYXJlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoY29uZmlnLmtleS50YWcpW2NvbmZpZy5rZXkuaW5kZXhdO1xuICAgIGNhc2UgJ3F1ZXJ5JzpcbiAgICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChjb25maWcua2V5LnF1ZXJ5KVtjb25maWcua2V5LmluZGV4XTtcbiAgICBjYXNlICdpbmRleCc6XG4gICAgICByZXR1cm4gcGFyZW50LmNoaWxkTm9kZXNbY29uZmlnLmtleV07XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcXFwiZmluZENoaWxkXFxcIiBtb2RlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZENoaWxkcmVuKHBhcmVudCwgY29uZmlnKSB7XG4gIHZhciBodG1sQ29sbGVjdGlvbjtcbiAgc3dpdGNoIChjb25maWcubW9kZSkge1xuICAgIGNhc2UgJ2NsYXNzJzpcbiAgICAgIGh0bWxDb2xsZWN0aW9uID0gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY29uZmlnLmtleS5jbGFzcyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0YWcnOlxuICAgICAgaHRtbENvbGxlY3Rpb24gPSBwYXJlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoY29uZmlnLmtleS50YWcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncXVlcnknOlxuICAgICAgaHRtbENvbGxlY3Rpb24gPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChjb25maWcua2V5LnF1ZXJ5KTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXFxcImZpbmRDaGlsZFxcXCIgbW9kZScpO1xuICB9XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChodG1sQ29sbGVjdGlvbik7XG59XG5cbmZ1bmN0aW9uIGlzQ29tbWFuZEluZGV4KHZhbHVlKSB7XG4gIHJldHVybiBpc051bWJlcih2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59XG5cbmZ1bmN0aW9uIG1vZGlmeUVsZW1lbnQobm9kZSwgcGF0Y2gpIHtcbiAgX21vZGlmeUVsZW1lbnQobm9kZSwgcGF0Y2gudmFsdWUsIHBhdGNoLmNvbW1hbmRzKTtcbn1cblxuZnVuY3Rpb24gX21vZGlmeUVsZW1lbnQobm9kZSwgdHJlZSwgY29tbWFuZHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IHRyZWVbaV0uaW5kZXg7XG4gICAgdmFyIGNvbnRpbnVhdGlvbiA9IHRyZWVbaV0udmFsdWU7XG5cbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSAnaWQnOlxuICAgICAgICB2YXIgY29tbWFuZCA9IGNvbW1hbmRzW2NvbnRpbnVhdGlvbl07XG4gICAgICAgIHN3aXRjaCAoY29tbWFuZFswXSkge1xuICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAgIGNhc2UgJ3NldEF0S2V5JzpcbiAgICAgICAgICAgIG5vZGUuaWQgPSBjb21tYW5kWzFdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3RhZyc6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgIGZvciAodmFyIHN0eWxlSW5kZXggPSAwOyBzdHlsZUluZGV4IDwgY29udGludWF0aW9uLmxlbmd0aDsgc3R5bGVJbmRleCsrKSB7XG4gICAgICAgICAgdmFyIHN0eWxlID0gY29udGludWF0aW9uW3N0eWxlSW5kZXhdLmluZGV4O1xuICAgICAgICAgIHZhciBjb21tYW5kID0gY29tbWFuZHNbY29udGludWF0aW9uW3N0eWxlSW5kZXhdLnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmRbMF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICAgIG5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGUpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAgICAgY2FzZSAnc2V0QXRLZXknOlxuICAgICAgICAgICAgICBub2RlLnN0eWxlW3N0eWxlXSA9IGNvbW1hbmRbMV07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnYXR0cmlicyc6XG4gICAgICAgIGZvciAodmFyIGF0dHJpYkluZGV4ID0gMDsgYXR0cmliSW5kZXggPCBjb250aW51YXRpb24ubGVuZ3RoOyBhdHRyaWJJbmRleCsrKSB7XG4gICAgICAgICAgdmFyIGF0dHJpYiA9IGNvbnRpbnVhdGlvblthdHRyaWJJbmRleF0uaW5kZXg7XG4gICAgICAgICAgdmFyIGNvbW1hbmQgPSBjb21tYW5kc1tjb250aW51YXRpb25bYXR0cmliSW5kZXhdLnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmRbMF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICAgIG5vZGUuYXR0cmlidXRlcy5yZW1vdmVOYW1lZEl0ZW0oYXR0cmliKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgICAgIGNhc2UgJ3NldEF0S2V5JzpcbiAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmliLCBjb21tYW5kWzFdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjbGFzc2VzJzpcbiAgICAgICAgaWYgKGlzQ29tbWFuZEluZGV4KGNvbnRpbnVhdGlvbikpIHtcbiAgICAgICAgICB2YXIgY29tbWFuZCA9IGNvbW1hbmRzWzBdO1xuICAgICAgICAgIHN3aXRjaCAoY29tbWFuZFswXSkge1xuICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgICAgZm9yICh2YXIgX2NsYXNzIGluIGNvbW1hbmRbMV0pIHtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoX2NsYXNzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NldEF0S2V5JzpcbiAgICAgICAgICAgICAgZm9yICh2YXIgX2NsYXNzIGluIGNvbW1hbmRbMV0pIHtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoX2NsYXNzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yICh2YXIgY2xhc3NJbmRleCA9IDA7IGNsYXNzSW5kZXggPCBjb250aW51YXRpb24ubGVuZ3RoOyBjbGFzc0luZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBfY2xhc3MgPSBjb250aW51YXRpb25bY2xhc3NJbmRleF0uaW5kZXg7XG4gICAgICAgICAgICB2YXIgY29tbWFuZCA9IGNvbW1hbmRzW2NvbnRpbnVhdGlvbltjbGFzc0luZGV4XS52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmRbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoX2NsYXNzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnc2V0QXRLZXknOlxuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChfY2xhc3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnY2hpbGRyZW4nOlxuICAgICAgICBpZiAoaXNDb21tYW5kSW5kZXgoY29udGludWF0aW9uKSkge1xuICAgICAgICAgIHZhciBjb21tYW5kID0gY29tbWFuZHNbY29udGludWF0aW9uXVxuICAgICAgICAgIHN3aXRjaCAoY29tbWFuZFswXSkge1xuICAgICAgICAgICAgY2FzZSAncmVtb3ZlJzpcbiAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGRyZW4obm9kZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVwbGFjZSc6ICAgICAvLyA/XG4gICAgICAgICAgICAgIGlmIChpc1N0cmluZyhjb21tYW5kWzFdKSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICBub2RlLmlubmVyVGV4dCA9IGNvbW1hbmRbMV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJUZXh0ID0gY29tbWFuZFsxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGRyZW4obm9kZSk7XG4gICAgICAgICAgICAgICAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudHMobm9kZSwgY29tbWFuZFsxXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpbnNlcnRBdEVuZCc6XG4gICAgICAgICAgICAgIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQobm9kZSwgY29tbWFuZFsxXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKHZhciBjaGlsZEluZGV4ID0gMDsgY2hpbGRJbmRleCA8IGNvbnRpbnVhdGlvbi5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gY29udGludWF0aW9uW2NoaWxkSW5kZXhdLmluZGV4O1xuICAgICAgICAgICAgdmFyIGNoaWxkQ29udGludWF0aW9uID0gY29udGludWF0aW9uW2NoaWxkSW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgaWYgKGlzQ29tbWFuZEluZGV4KGNoaWxkQ29udGludWF0aW9uKSkge1xuICAgICAgICAgICAgICB2YXIgY29tbWFuZCA9IGNvbW1hbmRzW2NoaWxkQ29udGludWF0aW9uXVxuICAgICAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmRbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdyZW1vdmUnOlxuICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGQobm9kZSwgY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncmVwbGFjZSc6XG4gICAgICAgICAgICAgICAgICBjcmVhdGVBbmRTdWJzdGl0dXRlRWxlbWVudChub2RlLCBjb21tYW5kWzFdLCBjaGlsZCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdpbnNlcnRBdEVuZCc6XG4gICAgICAgICAgICAgICAgICBjcmVhdGVBbmRBdHRhY2hFbGVtZW50KG5vZGUsIGNvbW1hbmRbMV0pO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF9tb2RpZnlFbGVtZW50KG5vZGUuY2hpbGROb2Rlc1tjaGlsZF0sIGNoaWxkQ29udGludWF0aW9uLCBjb21tYW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZChub2RlLCBjaGlsZEluZGV4KSB7XG4gIHJlbW92ZU5vZGUoZmluZENoaWxkKG5vZGUsIHsgbW9kZTogJ2luZGV4Jywga2V5OiBjaGlsZEluZGV4IH0pKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4obm9kZSkge1xuICB2YXIgY2hpbGRDb3VudCA9IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSBjaGlsZENvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUuY2hpbGROb2Rlc1tpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XG4gIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudCxcbiAgbW9kaWZ5RWxlbWVudFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=