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


var createErlList   = __webpack_require__(/*! ./type-utilities */ "./src/lisp/type-utilities.js").createErlList;
var createErlString = __webpack_require__(/*! ./type-utilities */ "./src/lisp/type-utilities.js").createErlString;
var serialize       = __webpack_require__(/*! ./serialize */ "./src/lisp/serialize.js");
var toArray         = __webpack_require__(/*! ./linked-list */ "./src/lisp/linked-list.js").toArray;

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
        Object(_type_utilities__WEBPACK_IMPORTED_MODULE_0__["createErlCoreEffectfulFunction"])(function(erlArgs) {
          return represent(fn(erlArgs));
        }));
    }
    return _results;
  };
};

var displayEffectsOnErlValues = {
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
    if (unquotedExpr(item)) {
        return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["createErlList"])(_evaluate(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["next"])(item), envs, addResult), memo);
    } else if (spliceUnquotedExpr(item)) {
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
        case expandMacro:
          return expandMacro(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(arg1), Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["cdr"])(arg1), envs, addResult);
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
            erlExpr = expandMacro(head, tailList, envs, addResult);
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

var expandMacro = function(erlMacroSymbol, erlArgs, envs, addResult) {
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

var spliceUnquote = function(erlValue) {
  return spliceUnquote === (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(erlValue));
};

var spliceUnquotedExpr = function(erlValue) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlList"])(erlValue) && (spliceUnquote(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(erlValue)));
};

var undefineValue = function(erlList, envs) {
  var jsKey = Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(erlList));
  return Object(_env_utilities__WEBPACK_IMPORTED_MODULE_0__["unsetMainEnv"])(envs, jsKey);
};

var unquote = function(erlValue) {
  return unquote === (Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["extractJsValue"])(erlValue));
};

var unquotedExpr = function(erlValue) {
  return Object(_type_utilities__WEBPACK_IMPORTED_MODULE_5__["isErlList"])(erlValue) && (unquote(Object(_linked_list__WEBPACK_IMPORTED_MODULE_1__["car"])(erlValue)));
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

module.exports = "(do\n  (def! fix* (\n    fn* (f) (\n      (fn* (x) (f (fn* (& ys) (apply (x x) ys))))\n      (fn* (x) (f (fn* (& ys) (apply (x x) ys)))))))\n\n  (def! memfix* (\n    fn* (f) (\n      let* (cache {}) (\n        (fn* (x cache) (\n          f\n            (fn* (z) (if (contains? cache z)\n              (get cache z)\n              (let* (result ((fn* (y) ((x x cache) y)) z)) (do (set! cache z result) result))))\n            cache))\n        (fn* (x cache) (\n          f\n            (fn* (z) (if (contains? cache z)\n              (get cache z)\n              (let* (result ((fn* (y) ((x x cache) y)) z)) (do (set! cache z result) result))))\n            cache))\n        cache))))\n\n  (def! _0 car)\n\n  (def! _1 (fn* (xs) (nth 1 xs)))\n\n  (def! _2 (fn* (xs) (nth 2 xs)))\n\n  (def! swap! (\n    macro* (atom & xs) (\n      if (empty? xs)\n        atom\n        `(let* (-atom- ~atom) (\n          do\n            (reset! -atom- (~(car xs) (deref -atom-) ~@(cdr xs)))\n            (deref -atom-))))))\n\n  (def! *gensym-counter* (atom 0))\n\n  (def! gensym (\n      fn* () (symbol (string \"G__\" (swap! *gensym-counter* incr)))))\n\n  (def! or (\n    macro* (& xs) (\n      if (empty? xs)\n        false\n        (let* (-query- (gensym))\n          `(let* (~-query- ~(car xs)) (\n            if ~-query-\n              ~-query-\n              (or ~@(cdr xs))))))))\n\n  (def! and (\n    macro* (& xs) (\n      if (empty? xs)\n        true\n        (let* (-query- (gensym))\n          `(let* (~-query- ~(car xs)) (\n            if ~-query-\n              (and ~@(cdr xs))\n              false))))))\n\n  (def! cond (\n    macro* (& xs) (\n      if (empty? xs)\n        nil\n        (if (empty? (cdr xs))\n          (throw \"`cond` requires an even number of forms.\")\n          (let* (-query- (gensym))\n            `(let* (~-query- ~(car xs)) (\n              if ~-query-\n                ~(_1 xs)\n                (cond ~@(cdr (cdr xs))))))))))\n\n  (def! loop (\n    macro* (form0 form1)\n      `(let* (loop (memfix* (fn* (loop) (fn* (~(_0 form0)) ~form1)))) (\n        loop ~(_1 form0)))))\n\n  (def! -> (\n    macro* (& xs) (\n      if (empty? xs)\n        nil\n        (let* (x (car xs) xs (cdr xs)) (\n          if (empty? xs)\n            x\n            (let* (form (car xs) forms (cdr xs)) (\n              if (empty? forms)\n                (if (list? form)\n                  (if (= (symbol \"fn*\") (car form))\n                    `(~form ~x)\n                    `(~(car form) ~x ~@(cdr form)))\n                  (list form x))\n                `(-> (-> ~x ~form) ~@forms))))))))\n\n  (def! ->> (\n    macro* (& xs) (\n      if (empty? xs)\n        nil\n        (let* (x (car xs) xs (cdr xs)) (\n          if (empty? xs)\n            x\n            (let* (form (car xs) forms (cdr xs)) (\n              if (empty? forms)\n                (if (list? form)\n                  (if (= (symbol \"fn*\") (car form))\n                    `(~form ~x)\n                    `(~@form ~x))\n                  (list form x))\n                `(->> (->> ~x ~form) ~@forms))))))))\n\n  (def! ->* (macro* (& xs) `(fn* (-x-) (-> -x- ~@xs))))\n\n  (def! ->>* (macro* (& xs) `(fn* (-x-) (->> -x- ~@xs))))\n\n  (def! not (fn* (x) (if x false true)))\n\n  (def! incr (->* (+ 1)))\n\n  (def! decr (->* (- 1)))\n\n  (def! zero? (->* (= 0)))\n\n  (def! identity (fn* (x) x))\n\n  (def! constant-fn (fn* (x) (fn* (y) x)))\n\n  (def! call-on (fn* (& xs) (fn* (fn) (apply fn xs))))\n\n  (def! step-into-list (\n    fn* (xs fn0 fn1) (\n      let* (x (car xs) -xs- (cdr xs)) (\n        if (empty? -xs-)\n          (fn1 x)\n          (fn0 x -xs-)))))\n\n  (def! apply-on (\n    fn* (& xs) (\n      step-into-list\n        xs\n        (fn* (arguments -xs-) (apply (car -xs-) arguments))\n        (fn* (arguments) (fn* (f) (apply f arguments))))))\n\n  (def! reduce (\n    fn* (f seed xs) (\n      if (empty? xs)\n        seed\n        (reduce f (f seed (car xs)) (cdr xs)))))\n\n  (def! filter (\n    fn* (predicate xs) (\n      reverse (\n        reduce\n          (fn* (memo x) (if (predicate x) (cons x memo) memo))\n          '()\n          xs))))\n\n  (def! map (\n    fn* (f xs) (\n      reverse (\n        reduce\n          (fn* (memo x) (cons (f x) memo))\n          '()\n          xs))))\n\n  (def! every? (\n    fn* (pred xs) (\n      if (empty? xs)\n        true\n        (if (pred (car xs)) (every? pred (cdr xs)) false))))\n\n  (def! some? (\n    fn* (pred xs) (\n      if (empty? xs)\n        false\n        (if (pred (car xs)) true (some? pred (cdr xs))))))\n\n  (def! letmemrec* (\n    macro* (alias expr)\n      `(let* (\n        ~(car alias)\n        (memfix* (fn* (~(car alias)) ~(_1 alias))))\n          ~expr)))\n\n  (def! skip (\n    fn* (nbr xs) (\n      letrec* (\n        -skip-\n        (fn* (ys) (\n          let* (nbr (car ys) xs (_1 ys)) (\n            cond\n              (= 0 nbr) xs\n              (= 1 nbr) (cdr xs)\n              \"default\" (-skip- (list (decr nbr) (cdr xs))))))) (\n          -skip- (list nbr xs)))))\n\n  (def! invokable? (fn* (x) (or (function? x) (macro? x))))\n\n  (def! . (\n    macro* (x key & xs) (\n      if (empty? xs)\n        `(get ~x ~key)\n        `((get ~x ~key) ~@xs))))\n\n  (def! .. (\n    fn* (lo hi) (\n      letrec* (\n        -..-\n        (fn* (xs) (\n          let* (lo (_0 xs) hi (_1 xs) -list- (_2 xs)) (\n            if (= lo hi)\n              (cons hi -list-)\n              (-..- (list lo (decr hi) (cons hi -list-))))))) (\n          -..- (list lo hi '())))))\n\n  (def! defrec! (\n    macro* (fn-name fn-body)\n      `(def! ~fn-name (letrec* (~fn-name ~fn-body) ~fn-name))))\n\n  (def! for* (\n    macro* (loop-parameters body)\n      `(loop\n         ~(_0 loop-parameters)\n         (if ~(_1 loop-parameters)\n           (do ~body (loop ~(_2 loop-parameters)))\n           nil))))\n\n  (def! for-each (\n    fn* (f xs) (\n      reduce (fn* (memo x) (do (f x) memo)) nil xs)))\n\n  (def! n-times (\n    fn* (n f) (\n      loop\n        (i 0)\n        (if (= i n)\n          nil\n          (do (f i) (loop (+ i 1)))))))\n\n  (def! tap (fn* (f x) (do (f x) x)))\n\n  (def! with-side-effect (fn* (thunk x) (do (thunk) x)))\n\n  (def! thunk (macro* (form) `(fn* () ~form)))\n\n  (def! call (macro* (f & xs) `(~f ~@xs)))\n\n  (def! apply (macro* (f xs) `(eval (cons ~f ~xs))))\n\n  (def! eval-string (fn* (erlString) (eval (parse erlString))))\n)\n"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2dldEFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2dldEtleUNob3JkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbnRyb2wvY2hhcnMvaW50ZXJwcmV0S2V5ZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2tleUNvZGVDaGFydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29udHJvbC9jaGFycy9rZXlJZGVudGlmaWVyQ2hhcnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbnRyb2wvZ2V0Vmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29udHJvbC9pbml0aWFsaXplQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9kZXRlY3RDc3NTY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvaW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy9mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy90ZXJtaW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy92aWV3cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvZ2V0SW5pdGlhbE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL21vZGVscy90eXBlcy9jcmVhdGVGcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvdHlwZXMvY3JlYXRlUHJvbXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL21vZGVscy90eXBlcy9jcmVhdGVUZXJtaW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvdHlwZXMvY3JlYXRlVmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL3N1YnNjcmliZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvdmlldy9pbml0aWFsaXplVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L3JlY3JlYXRlQ29uc29sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZUVybGtvbmlnTGlzcENvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvX3Byb2Nlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvY29tbWVudFNpZ25hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9lbnYtdXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2VudjAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvZW52MS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9lbnYyLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2VudjMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvZW52NC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9ldmFsdWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9nZXRMaXNwRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvaW5kZXgtdXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2ludGVycHJldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9qcy11dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3Ava2V5VG9rZW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2xpbmtlZC1saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3BhcnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3NlcmlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9zdGFuZGFyZC1mbnMtYW5kLW1hY3Jvcy5saXNwIiwid2VicGFjazovLy8uL3NyYy9saXNwL3Rva2VuaXplLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3Rva2VuaXplQW5kUGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvdHlwZS11dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JpYm9zb21lL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JpYm9zb21lL2VsZW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9yaWJvc29tZS9pbnRlcnByZXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixJQUFJLEtBQUs7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRXFCOzs7Ozs7Ozs7Ozs7O0FDcEdyQjtBQUFBO0FBQUE7QUFBQTtBQUFnRDtBQUNZOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsNkJBQTZCLHdFQUFtQjtBQUNoRCxHQUFHO0FBQ0g7QUFDQSw2QkFBNkIsNERBQWE7QUFDMUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFdUI7Ozs7Ozs7Ozs7Ozs7QUNsRHZCO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ0k7O0FBRTVDO0FBQ0EsU0FBUyw0REFBUyxDQUFDLGdFQUFXO0FBQzlCOztBQUU0Qjs7Ozs7Ozs7Ozs7OztBQ1A1QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7QUN2SHpCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSw4REFBRztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILGtCQUFrQiw4REFBRztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSw4REFBRztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNkRBQVM7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLHNCQUFzQjtBQUN0Qix1QkFBdUIsV0FBVztBQUNsQywwQkFBMEIsV0FBVzs7QUFFbEI7Ozs7Ozs7Ozs7Ozs7QUN4SW5CO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixpQ0FBaUM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixRQUFRO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBS0UiLCJmaWxlIjoiZXJsa29uaWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbml0aWFsaXplRXJsa29uaWdMaXNwQ29uc29sZS5qc1wiKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgYSA9ICdhJztcbnZhciBlID0gJ2UnO1xudmFyIGggPSAnaCc7XG52YXIgbCA9ICdsJztcbnZhciB1ID0gJ3UnO1xudmFyIHcgPSAndyc7XG5cbnZhciBBID0gJ0EnO1xudmFyIEUgPSAnRSc7XG52YXIgSCA9ICdIJztcbnZhciBMID0gJ0wnO1xudmFyIFUgPSAnVSc7XG52YXIgVyA9ICdXJztcblxudmFyIGJhY2tzcGFjZSA9ICdCYWNrc3BhY2UnO1xudmFyIF9kZWxldGUgICA9ICdEZWxldGUnO1xudmFyIGRvd24gICAgICA9ICdBcnJvd0Rvd24nO1xudmFyIGVudGVyICAgICA9ICdFbnRlcic7XG52YXIgbGVmdCAgICAgID0gJ0Fycm93TGVmdCc7XG52YXIgcmlnaHQgICAgID0gJ0Fycm93UmlnaHQnO1xudmFyIHNwYWNlICAgICA9ICcgJztcbnZhciBzcGFjZWJhciAgPSAnU3BhY2ViYXInO1xudmFyIHRhYiAgICAgICA9ICdUYWInO1xudmFyIHVwICAgICAgICA9ICdBcnJvd1VwJztcblxudmFyIGNoYXJhY3RlcnMgPSBbXG4gIHNwYWNlLFxuICAnYCcsICcxJywgJzInLCAgJzMnLCAnNCcsICAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzAnLCAnLScsICc9JyxcbiAgJ34nLCAnIScsICdAJywgICcjJywgJyQnLCAgJyUnLCAnXicsICcmJywgJyonLCAnKCcsICcpJywgJ18nLCAnKycsXG4gICdhJywgJ2InLCAnYycsICAnZCcsICdlJywgICdmJywgJ2cnLCAnaCcsICdpJywgJ2onLCAnaycsICdsJywgJ20nLFxuICAnbicsICdvJywgJ3AnLCAgJ3EnLCAncicsICAncycsICd0JywgJ3UnLCAndicsICd3JywgJ3gnLCAneScsICd6JyxcbiAgJ0EnLCAnQicsICdDJywgICdEJywgJ0UnLCAgJ0YnLCAnRycsICdIJywgJ0knLCAnSicsICdLJywgJ0wnLCAnTScsXG4gICdOJywgJ08nLCAnUCcsICAnUScsICdSJywgICdTJywgJ1QnLCAnVScsICdWJywgJ1cnLCAnWCcsICdZJywgJ1onLFxuICAnWycsICddJywgJ1xcXFwnLCAnOycsICdcXCcnLCAnLCcsICcuJywgJy8nLFxuICAneycsICd9JywgJ3wnLCAgJzonLCAnXCInLCAgJzwnLCAnPicsICc/J1xuXTtcblxuZnVuY3Rpb24gZ2V0QWN0aW9uKGtleUNob3JkKSB7XG4gIHZhciB2YWx1ZSA9IGtleUNob3JkLnZhbHVlO1xuXG4gIGlmIChrZXlDaG9yZC5jdHJsS2V5KSB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSBhOlxuICAgICAgY2FzZSBBOlxuICAgICAgICByZXR1cm4gd3JhcCgnbW92ZUN1cnNvclRvU3RhcnQnKTtcbiAgICAgIGNhc2UgZTpcbiAgICAgIGNhc2UgRTpcbiAgICAgICAgcmV0dXJuIHdyYXAoJ21vdmVDdXJzb3JUb0VuZCcpO1xuICAgICAgY2FzZSBoOlxuICAgICAgY2FzZSBIOlxuICAgICAgICByZXR1cm4gd3JhcCgnZGVsZXRlTGVmdENoYXInKTtcbiAgICAgIGNhc2UgbDpcbiAgICAgIGNhc2UgTDpcbiAgICAgICAgcmV0dXJuIHdyYXAoJ2NsZWFyJyk7XG4gICAgICBjYXNlIHU6XG4gICAgICBjYXNlIFU6XG4gICAgICAgIHJldHVybiB3cmFwKCdkZWxldGVQcmVDdXJzb3InKTtcbiAgICAgIGNhc2UgdzpcbiAgICAgIGNhc2UgVzpcbiAgICAgICAgcmV0dXJuIHdyYXAoJ2RlbGV0ZVdvcmQnKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB3cmFwKCdub09wJyk7XG4gICAgfVxuICB9XG5cbiAgc3dpdGNoICh2YWx1ZSkge1xuICAgIGNhc2UgZW50ZXI6XG4gICAgICByZXR1cm4gd3JhcCgnc3VibWl0Jyk7XG4gICAgY2FzZSBiYWNrc3BhY2U6XG4gICAgICByZXR1cm4gd3JhcCgnZGVsZXRlTGVmdENoYXInKTtcbiAgICBjYXNlIGxlZnQ6XG4gICAgICByZXR1cm4gd3JhcCgnbW92ZUN1cnNvckxlZnQnKTtcbiAgICBjYXNlIHJpZ2h0OlxuICAgICAgcmV0dXJuIHdyYXAoJ21vdmVDdXJzb3JSaWdodCcpO1xuICAgIGNhc2UgdXA6XG4gICAgICByZXR1cm4gd3JhcCgncmV3aW5kJyk7XG4gICAgY2FzZSBkb3duOlxuICAgICAgcmV0dXJuIHdyYXAoJ2Zhc3RGb3J3YXJkJyk7XG4gICAgY2FzZSBfZGVsZXRlOlxuICAgICAgcmV0dXJuIHdyYXAoJ2RlbGV0ZVJpZ2h0Q2hhcicpO1xuICAgIGNhc2UgdGFiOlxuICAgICAgcmV0dXJuIHdyYXAoJ2NvbXBsZXRlV29yZCcpO1xuICAgIGNhc2Ugc3BhY2U6XG4gICAgY2FzZSBzcGFjZWJhcjpcbiAgICAgIHJldHVybiB7IG5hbWU6ICdhZGRDaGFyJywgY2hhcjogJyAnIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBpc0NoYXJhY3Rlcih2YWx1ZSlcbiAgICAgICAgPyB7IG5hbWU6ICdhZGRDaGFyJywgY2hhcjogdmFsdWUgfVxuICAgICAgICA6IHdyYXAoJ25vT3AnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0NoYXJhY3Rlcih2YWx1ZSkge1xuICByZXR1cm4gY2hhcmFjdGVycy5pbmRleE9mKHZhbHVlKSA+PSAwO1xufVxuXG5mdW5jdGlvbiB3cmFwKGFjdGlvbk5hbWUpIHtcbiAgcmV0dXJuIHsgbmFtZTogYWN0aW9uTmFtZSB9O1xufVxuXG5leHBvcnQgeyBnZXRBY3Rpb24gfTtcbiIsImltcG9ydCB7IGtleUNvZGVDaGFydHMgfSBmcm9tICcuL2tleUNvZGVDaGFydHMnO1xuaW1wb3J0IHsga2V5SWRlbnRpZmllckNoYXJ0cyB9IGZyb20gJy4va2V5SWRlbnRpZmllckNoYXJ0cyc7XG5cbmZ1bmN0aW9uIGdldEV2ZW50UHJveHkoa2luZCwgZXZlbnQpIHtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogZXZlbnRba2luZF0sXG4gICAgYWx0S2V5OiBldmVudC5hbHRLZXksXG4gICAgY3RybEtleTogZXZlbnQuY3RybEtleSxcbiAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXlcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGlkZW50aXR5KGV2ZW50KSB7XG4gIHJldHVybiBldmVudDtcbn1cblxuZnVuY3Rpb24gZ2V0S2V5Q2hvcmQoZXZlbnQpIHtcbiAgdmFyIG5vcm1hbGl6ZTtcbiAgdmFyIHByb3BlcnR5O1xuXG4gIGlmIChldmVudC5rZXkgIT0gbnVsbCkge1xuICAgIHByb3BlcnR5ID0gJ2tleSc7XG4gICAgbm9ybWFsaXplID0gaWRlbnRpdHk7XG4gIH0gZWxzZSBpZiAoZXZlbnQua2V5SWRlbnRpZmllciAhPSBudWxsKSB7XG4gICAgcHJvcGVydHkgPSAna2V5SWRlbnRpZmllcic7XG4gICAgbm9ybWFsaXplID0gX2dldEtleUNob3JkKGtleUlkZW50aWZpZXJDaGFydHMpO1xuICB9IGVsc2Uge1xuICAgIHByb3BlcnR5ID0gJ2tleUNvZGUnO1xuICAgIG5vcm1hbGl6ZSA9IF9nZXRLZXlDaG9yZChrZXlDb2RlQ2hhcnRzKTtcbiAgfVxuXG4gIHJldHVybiBub3JtYWxpemUoZ2V0RXZlbnRQcm94eShwcm9wZXJ0eSwgZXZlbnQpKTtcbn1cblxuZnVuY3Rpb24gX2dldEtleUNob3JkKGNvbnZlcnNpb25DaGFydHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogZ2V0S2V5Q2hvcmRWYWx1ZShjb252ZXJzaW9uQ2hhcnRzLCBldmVudC52YWx1ZSwgZXZlbnQuc2hpZnRLZXkpLFxuICAgICAgYWx0S2V5OiBldmVudC5hbHRLZXksXG4gICAgICBjdHJsS2V5OiBldmVudC5jdHJsS2V5LFxuICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0S2V5Q2hvcmRWYWx1ZShjb252ZXJzaW9uQ2hhcnRzLCB2YWx1ZSwgc2hpZnRLZXkpIHtcbiAgdmFyIGtleSA9IHNoaWZ0S2V5ID8gJ3dpdGhTaGlmdCcgOiAnd2l0aG91dFNoaWZ0JztcbiAgcmV0dXJuIGNvbnZlcnNpb25DaGFydHNba2V5XVt2YWx1ZV07XG59XG5cbmV4cG9ydCB7IGdldEtleUNob3JkIH07XG4iLCJpbXBvcnQgeyBnZXRBY3Rpb24gfSBmcm9tICcuL2dldEFjdGlvbic7XG5pbXBvcnQgeyBnZXRLZXlDaG9yZCB9IGZyb20gJy4vZ2V0S2V5Q2hvcmQnO1xuXG5mdW5jdGlvbiBpbnRlcnByZXRLZXlkb3duKGV2ZW50KSB7XG4gIHJldHVybiBnZXRBY3Rpb24oZ2V0S2V5Q2hvcmQoZXZlbnQpKTtcbn1cblxuZXhwb3J0IHsgaW50ZXJwcmV0S2V5ZG93biB9O1xuIiwidmFyIGtleUNvZGVDaGFydHMgPSB7XG4gIHdpdGhTaGlmdDoge1xuICAgIDggIDogJ0JhY2tzcGFjZScsXG4gICAgOSAgOiAnVGFiJyxcbiAgICAxMyA6ICdFbnRlcicsXG4gICAgMzIgOiAnICcsXG4gICAgMzcgOiAnQXJyb3dMZWZ0JyxcbiAgICAzOCA6ICdBcnJvd1VwJyxcbiAgICAzOSA6ICdBcnJvd1JpZ2h0JyxcbiAgICA0MCA6ICdBcnJvd0Rvd24nLFxuICAgIDQ2IDogJ0RlbGV0ZScsXG4gICAgNDggOiAnKScsXG4gICAgNDkgOiAnIScsXG4gICAgNTAgOiAnQCcsXG4gICAgNTEgOiAnIycsXG4gICAgNTIgOiAnJCcsXG4gICAgNTMgOiAnJScsXG4gICAgNTQgOiAnXicsXG4gICAgNTUgOiAnJicsXG4gICAgNTYgOiAnKicsXG4gICAgNTcgOiAnKCcsXG4gICAgNTkgOiAnOicsXG4gICAgNjEgOiAnKycsXG4gICAgNjUgOiAnQScsXG4gICAgNjYgOiAnQicsXG4gICAgNjcgOiAnQycsXG4gICAgNjggOiAnRCcsXG4gICAgNjkgOiAnRScsXG4gICAgNzAgOiAnRicsXG4gICAgNzEgOiAnRycsXG4gICAgNzIgOiAnSCcsXG4gICAgNzMgOiAnSScsXG4gICAgNzQgOiAnSicsXG4gICAgNzUgOiAnSycsXG4gICAgNzYgOiAnTCcsXG4gICAgNzcgOiAnTScsXG4gICAgNzggOiAnTicsXG4gICAgNzkgOiAnTycsXG4gICAgODAgOiAnUCcsXG4gICAgODEgOiAnUScsXG4gICAgODIgOiAnUicsXG4gICAgODMgOiAnUycsXG4gICAgODQgOiAnVCcsXG4gICAgODUgOiAnVScsXG4gICAgODYgOiAnVicsXG4gICAgODcgOiAnVycsXG4gICAgODggOiAnWCcsXG4gICAgODkgOiAnWScsXG4gICAgOTAgOiAnWicsXG4gICAgMTczOiAnXycsXG4gICAgMTg4OiAnPCcsXG4gICAgMTkwOiAnPicsXG4gICAgMTkxOiAnPycsXG4gICAgMTkyOiAnficsXG4gICAgMjE5OiAneycsXG4gICAgMjIwOiAnfCcsXG4gICAgMjIxOiAnfScsXG4gICAgMjIyOiAnXCInXG4gIH0sXG4gIHdpdGhvdXRTaGlmdDoge1xuICAgIDggIDogJ0JhY2tzcGFjZScsXG4gICAgOSAgOiAnVGFiJyxcbiAgICAxMyA6ICdFbnRlcicsXG4gICAgMzIgOiAnICcsXG4gICAgMzcgOiAnQXJyb3dMZWZ0JyxcbiAgICAzOCA6ICdBcnJvd1VwJyxcbiAgICAzOSA6ICdBcnJvd1JpZ2h0JyxcbiAgICA0MCA6ICdBcnJvd0Rvd24nLFxuICAgIDQ2IDogJ0RlbGV0ZScsXG4gICAgNDg6ICcwJyxcbiAgICA0OTogJzEnLFxuICAgIDUwOiAnMicsXG4gICAgNTE6ICczJyxcbiAgICA1MjogJzQnLFxuICAgIDUzOiAnNScsXG4gICAgNTQ6ICc2JyxcbiAgICA1NTogJzcnLFxuICAgIDU2OiAnOCcsXG4gICAgNTc6ICc5JyxcbiAgICA1OTogJzsnLFxuICAgIDYxOiAnPScsXG4gICAgNjU6ICdhJyxcbiAgICA2NjogJ2InLFxuICAgIDY3OiAnYycsXG4gICAgNjg6ICdkJyxcbiAgICA2OTogJ2UnLFxuICAgIDcwOiAnZicsXG4gICAgNzE6ICdnJyxcbiAgICA3MjogJ2gnLFxuICAgIDczOiAnaScsXG4gICAgNzQ6ICdqJyxcbiAgICA3NTogJ2snLFxuICAgIDc2OiAnbCcsXG4gICAgNzc6ICdtJyxcbiAgICA3ODogJ24nLFxuICAgIDc5OiAnbycsXG4gICAgODA6ICdwJyxcbiAgICA4MTogJ3EnLFxuICAgIDgyOiAncicsXG4gICAgODM6ICdzJyxcbiAgICA4NDogJ3QnLFxuICAgIDg1OiAndScsXG4gICAgODY6ICd2JyxcbiAgICA4NzogJ3cnLFxuICAgIDg4OiAneCcsXG4gICAgODk6ICd5JyxcbiAgICA5MDogJ3onLFxuICAgIDE3MzogJy0nLFxuICAgIDE4ODogJywnLFxuICAgIDE5MDogJy4nLFxuICAgIDE5MTogJy8nLFxuICAgIDE5MjogJ2AnLFxuICAgIDIxOTogJ1snLFxuICAgIDIyMDogJ1xcXFwnLFxuICAgIDIyMTogJ10nLFxuICAgIDIyMjogJ1xcJydcbiAgfVxufTtcblxuZXhwb3J0IHsga2V5Q29kZUNoYXJ0cyB9O1xuIiwidmFyIGtleUlkZW50aWZpZXJDaGFydHMgPSB7XG4gIHdpdGhvdXRTaGlmdDoge1xuICAgICdVKzAwNDEnOiAnYScsXG4gICAgJ1UrMDA0Mic6ICdiJyxcbiAgICAnVSswMDQzJzogJ2MnLFxuICAgICdVKzAwNDQnOiAnZCcsXG4gICAgJ1UrMDA0NSc6ICdlJyxcbiAgICAnVSswMDQ2JzogJ2YnLFxuICAgICdVKzAwNDcnOiAnZycsXG4gICAgJ1UrMDA0OCc6ICdoJyxcbiAgICAnVSswMDQ5JzogJ2knLFxuICAgICdVKzAwNEEnOiAnaicsXG4gICAgJ1UrMDA0Qic6ICdrJyxcbiAgICAnVSswMDRDJzogJ2wnLFxuICAgICdVKzAwNEQnOiAnbScsXG4gICAgJ1UrMDA0RSc6ICduJyxcbiAgICAnVSswMDRGJzogJ28nLFxuICAgICdVKzAwNTAnOiAncCcsXG4gICAgJ1UrMDA1MSc6ICdxJyxcbiAgICAnVSswMDUyJzogJ3InLFxuICAgICdVKzAwNTMnOiAncycsXG4gICAgJ1UrMDA1NCc6ICd0JyxcbiAgICAnVSswMDU1JzogJ3UnLFxuICAgICdVKzAwNTYnOiAndicsXG4gICAgJ1UrMDA1Nyc6ICd3JyxcbiAgICAnVSswMDU4JzogJ3gnLFxuICAgICdVKzAwNTknOiAneScsXG4gICAgJ1UrMDA1QSc6ICd6JyxcbiAgICAnVSswMDMwJzogJzAnLFxuICAgICdVKzAwMzEnOiAnMScsXG4gICAgJ1UrMDAzMic6ICcyJyxcbiAgICAnVSswMDMzJzogJzMnLFxuICAgICdVKzAwMzQnOiAnNCcsXG4gICAgJ1UrMDAzNSc6ICc1JyxcbiAgICAnVSswMDM2JzogJzYnLFxuICAgICdVKzAwMzcnOiAnNycsXG4gICAgJ1UrMDAzOCc6ICc4JyxcbiAgICAnVSswMDM5JzogJzknLFxuICAgICdVKzAwQzAnOiAnYCcsXG4gICAgJ1UrMDBCRCc6ICctJyxcbiAgICAnVSswMEJCJzogJz0nLFxuICAgICdVKzAwREInOiAnWycsXG4gICAgJ1UrMDBERCc6ICddJyxcbiAgICAnVSswMERDJzogJ1xcXFwnLFxuICAgICdVKzAwQkEnOiAnOycsXG4gICAgJ1UrMDBERSc6ICdcXCcnLFxuICAgICdVKzAwQkMnOiAnLCcsXG4gICAgJ1UrMDBCRSc6ICcuJyxcbiAgICAnVSswMEJGJzogJy8nLFxuICAgICdVKzAwMjAnOiAnICcsXG4gICAgJ1UrMDAwOCc6ICdCYWNrc3BhY2UnLFxuICAgICdVKzAwNzUnOiAnRGVsZXRlJyxcbiAgICAnRG93bicgIDogJ0Fycm93RG93bicsXG4gICAgJ0VudGVyJyA6ICdFbnRlcicsXG4gICAgJ0xlZnQnICA6ICdBcnJvd0xlZnQnLFxuICAgICdSaWdodCcgOiAnQXJyb3dSaWdodCcsXG4gICAgJ1UrMDAyMCc6ICcgJyxcbiAgICAnVSswMDA5JzogJ1RhYicsXG4gICAgJ1VwJyAgICA6ICdBcnJvd1VwJ1xuICB9LFxuICB3aXRoU2hpZnQ6IHtcbiAgICAnVSswMDQxJzogJ0EnLFxuICAgICdVKzAwNDInOiAnQicsXG4gICAgJ1UrMDA0Myc6ICdDJyxcbiAgICAnVSswMDQ0JzogJ0QnLFxuICAgICdVKzAwNDUnOiAnRScsXG4gICAgJ1UrMDA0Nic6ICdGJyxcbiAgICAnVSswMDQ3JzogJ0cnLFxuICAgICdVKzAwNDgnOiAnSCcsXG4gICAgJ1UrMDA0OSc6ICdJJyxcbiAgICAnVSswMDRBJzogJ0onLFxuICAgICdVKzAwNEInOiAnSycsXG4gICAgJ1UrMDA0Qyc6ICdMJyxcbiAgICAnVSswMDREJzogJ00nLFxuICAgICdVKzAwNEUnOiAnTicsXG4gICAgJ1UrMDA0Ric6ICdPJyxcbiAgICAnVSswMDUwJzogJ1AnLFxuICAgICdVKzAwNTEnOiAnUScsXG4gICAgJ1UrMDA1Mic6ICdSJyxcbiAgICAnVSswMDUzJzogJ1MnLFxuICAgICdVKzAwNTQnOiAnVCcsXG4gICAgJ1UrMDA1NSc6ICdVJyxcbiAgICAnVSswMDU2JzogJ1YnLFxuICAgICdVKzAwNTcnOiAnVycsXG4gICAgJ1UrMDA1OCc6ICdYJyxcbiAgICAnVSswMDU5JzogJ1knLFxuICAgICdVKzAwNUEnOiAnWicsXG4gICAgJ1UrMDAzMCc6ICcpJyxcbiAgICAnVSswMDMxJzogJyEnLFxuICAgICdVKzAwMzInOiAnQCcsXG4gICAgJ1UrMDAzMyc6ICcjJyxcbiAgICAnVSswMDM0JzogJyQnLFxuICAgICdVKzAwMzUnOiAnJScsXG4gICAgJ1UrMDAzNic6ICdeJyxcbiAgICAnVSswMDM3JzogJyYnLFxuICAgICdVKzAwMzgnOiAnKicsXG4gICAgJ1UrMDAzOSc6ICcoJyxcbiAgICAnVSswMEMwJzogJ34nLFxuICAgICdVKzAwQkQnOiAnXycsXG4gICAgJ1UrMDBCQic6ICcrJyxcbiAgICAnVSswMERCJzogJ3snLFxuICAgICdVKzAwREQnOiAnfScsXG4gICAgJ1UrMDBEQyc6ICd8JyxcbiAgICAnVSswMEJBJzogJzonLFxuICAgICdVKzAwREUnOiAnXCInLFxuICAgICdVKzAwQkMnOiAnPCcsXG4gICAgJ1UrMDBCRSc6ICc+JyxcbiAgICAnVSswMEJGJzogJz8nLFxuICAgICdVKzAwMjAnOiAnICcsXG4gICAgJ1UrMDAwOCc6ICdCYWNrc3BhY2UnLFxuICAgICdVKzAwNzUnOiAnRGVsZXRlJyxcbiAgICAnRG93bicgIDogJ0Fycm93RG93bicsXG4gICAgJ0VudGVyJyA6ICdFbnRlcicsXG4gICAgJ0xlZnQnICA6ICdBcnJvd0xlZnQnLFxuICAgICdSaWdodCcgOiAnQXJyb3dSaWdodCcsXG4gICAgJ1UrMDAyMCc6ICcgJyxcbiAgICAnVSswMDA5JzogJ1RhYicsXG4gICAgJ1VwJyAgICA6ICdBcnJvd1VwJ1xuICB9XG59O1xuXG5leHBvcnQgeyBrZXlJZGVudGlmaWVyQ2hhcnRzIH07XG4iLCJpbXBvcnQgeyBWaWV3cG9ydCB9IGZyb20gJy4uL21vZGVscy9hY3Rpb25zL3ZpZXdwb3J0JztcblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnQoYWN0aW9uLCBjb25maWcpIHtcbiAgdmFyIGNvbW1hbmQgPSBhY3Rpb24ubmFtZTtcbiAgdmFyIHZpZXdwb3J0ID0gY29uZmlnLnZpZXdwb3J0O1xuICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICBjYXNlICdhZGRDaGFyJzpcbiAgICAgIHJldHVybiBWaWV3cG9ydC5hZGRDaGFyKHZpZXdwb3J0LCBhY3Rpb24uY2hhcik7XG4gICAgY2FzZSAnY29tcGxldGVXb3JkJzpcbiAgICAgIHJldHVybiBWaWV3cG9ydC5jb21wbGV0ZVdvcmQodmlld3BvcnQsIGNvbmZpZy5nZXRDYW5kaWRhdGVzKTtcbiAgICBjYXNlICdub09wJzpcbiAgICAgIHJldHVybiB2aWV3cG9ydDtcbiAgICBjYXNlICdzdWJtaXQnOlxuICAgICAgcmV0dXJuIFZpZXdwb3J0LnN1Ym1pdCh2aWV3cG9ydCwgY29uZmlnLnRyYW5zZm9ybSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBWaWV3cG9ydFtjb21tYW5kXSh2aWV3cG9ydCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgZ2V0Vmlld3BvcnQgfTtcbiIsImltcG9ydCB7IGdldFZpZXdwb3J0IH0gZnJvbSAnLi9nZXRWaWV3cG9ydCc7XG5pbXBvcnQgeyBpbnRlcnByZXRLZXlkb3duIH0gZnJvbSAnLi9jaGFycy9pbnRlcnByZXRLZXlkb3duJztcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUNvbnRyb2woc3Vic2NyaWJlLCByZW5kZXIsIGNvbmZpZykge1xuICB2YXIgaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZ2V0QWN0aW9uKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmVuZGVyKGdldFZpZXdwb3J0KGdldEFjdGlvbihldmVudCksIGNvbmZpZykpO1xuICAgIH07XG4gIH1cblxuICBzdWJzY3JpYmUoJ2tleWRvd24nLCBoYW5kbGVFdmVudChpbnRlcnByZXRLZXlkb3duKSk7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxpemVDb250cm9sIH07XG4iLCJ2YXIgX25vZGVJZCAgICAgPSAnI2VybC1jc3Mtc2Nyb2xsYmFyLXRlc3QtZGl2JztcbnZhciBfcHJlZml4ZXMgICA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnLW8tJywgJy1tcy0nXTtcbnZhciBfcHNldWRvICAgICA9ICc6Oic7XG52YXIgX3Njcm9sbGJhciAgPSAnc2Nyb2xsYmFyJztcbnZhciBfd2lkdGgxMHB4ICA9ICd7d2lkdGg6MTBweDt9JztcblxuZnVuY3Rpb24gY3JlYXRlUnVsZShwcmVmaXgpIHtcbiAgcmV0dXJuIF9ub2RlSWQgKyBfcHNldWRvICsgcHJlZml4ICsgX3Njcm9sbGJhciArIF93aWR0aDEwcHg7XG59XG5cbmZ1bmN0aW9uIF9kZXRlY3RDc3NTY3JvbGxiYXIoc3R5bGVSdWxlKSB7XG4gIHZhciBib2R5ID0gZ2V0Qm9keSgpO1xuICB2YXIgZG9jRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub2RlLmlkID0gJ2VybC1jc3Mtc2Nyb2xsYmFyLXRlc3QtZGl2JztcbiAgZGl2LmFwcGVuZENoaWxkKG5vZGUpO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbiAgc3R5bGUuaWQgPSAnZXJsLWNzcy1zY3JvbGxiYXItdGVzdC1zdHlsZSc7XG4gIHZhciBub25jZU5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Nyb2xsYmFyLW5vbmNlJyk7XG4gIHZhciBub25jZSA9IG5vbmNlTm9kZS5kYXRhc2V0WydzY3JvbGxiYXJOb25jZSddO1xuICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgbm9uY2UpO1xuXG4gIChib2R5LmZha2UgPyBib2R5IDogZGl2KS5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gc3R5bGVSdWxlO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlUnVsZSkpO1xuICB9XG5cbiAgZGl2LmlkID0gJ2VybC1jc3Mtc2Nyb2xsLXRlc3QnO1xuXG4gIGlmIChib2R5LmZha2UpIHtcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgdmFyIGRvY092ZXJmbG93ID0gZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdztcbiAgICBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgZG9jRWxlbWVudC5hcHBlbmRDaGlsZChib2R5KTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBoYXNDc3NTY3JvbGxiYXIobm9kZSwgMzApO1xuXG4gIGlmIChib2R5LmZha2UpIHtcbiAgICBib2R5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYm9keSk7XG4gICAgZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IGRvY092ZXJmbG93O1xuICAgIGRvY0VsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICB9IGVsc2Uge1xuICAgIGRpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdik7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBkZXRlY3RDc3NTY3JvbGxiYXIoKSB7XG4gIHZhciBjc3NTY3JvbGxiYXIgPVxuICAgIF9ub2RlSWQgKyAne292ZXJmbG93OnNjcm9sbDt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O30nICtcbiAgICBfcHJlZml4ZXMubWFwKGNyZWF0ZVJ1bGUpLmpvaW4oJycpICtcbiAgICBjcmVhdGVSdWxlKCcnKTtcblxuICByZXR1cm4gX2RldGVjdENzc1Njcm9sbGJhcihjc3NTY3JvbGxiYXIpO1xufVxuXG5mdW5jdGlvbiBnZXRCb2R5KCkge1xuICB2YXIgX2JvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4gIGlmICghX2JvZHkpIHtcbiAgICB2YXIgaXNTdmcgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2Zyc7XG4gICAgX2JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGlzU3ZnID8gJ3N2ZycgOiAnYm9keScpO1xuICAgIF9ib2R5LmZha2UgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF9ib2R5O1xufVxuXG5mdW5jdGlvbiBoYXNDc3NTY3JvbGxiYXIobm9kZSwgZXhwZWN0ZWRXaWR0aCkge1xuICByZXR1cm4gJ3Njcm9sbFdpZHRoJyBpbiBub2RlICYmIG5vZGUuc2Nyb2xsV2lkdGggPT09IGV4cGVjdGVkV2lkdGg7XG59XG5cbmV4cG9ydCB7IGRldGVjdENzc1Njcm9sbGJhciB9O1xuIiwiaW1wb3J0IHsgZGV0ZWN0Q3NzU2Nyb2xsYmFyIH0gIGZyb20gJy4vZGV0ZWN0Q3NzU2Nyb2xsYmFyJztcbmltcG9ydCB7IGdldEluaXRpYWxNb2RlbCB9ICAgICBmcm9tICcuL21vZGVscy9nZXRJbml0aWFsTW9kZWwnO1xuaW1wb3J0IHsgRVJMS0lORyB9ICAgICAgICAgICAgIGZyb20gJy4vdmlldy9yZWNyZWF0ZUNvbnNvbGUnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUNvbnRyb2wgfSAgIGZyb20gJy4vY29udHJvbC9pbml0aWFsaXplQ29udHJvbCc7XG5pbXBvcnQgeyBpbml0aWFsaXplVmlldyB9ICAgICAgZnJvbSAnLi92aWV3L2luaXRpYWxpemVWaWV3JztcbmltcG9ydCB7IHJlbmRlciB9ICAgICAgICAgICAgICBmcm9tICcuL3JlbmRlcic7XG5pbXBvcnQgeyBzY3JvbGwgfSAgICAgICAgICAgICAgZnJvbSAnLi92aWV3L3Njcm9sbCc7XG5pbXBvcnQgeyBzdWJzY3JpYmUgfSAgICAgICAgICAgZnJvbSAnLi9zdWJzY3JpYmUnO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplKGNvbmZpZykge1xuICB2YXIgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5ub2RlSWQpO1xuICB2YXIgaW5pdGlhbE1vZGVsID0gZ2V0SW5pdGlhbE1vZGVsKCk7XG4gIHZhciBwcm9tcHRMYWJlbCA9IGNvbmZpZy5wcm9tcHRMYWJlbDtcbiAgdmFyIGxhYmVscyA9IHsgcHJvbXB0TGFiZWw6IHByb21wdExhYmVsIH07XG4gIHZhciB2aWV3TW9kZWwgPSBFUkxLSU5HKGxhYmVscywgaW5pdGlhbE1vZGVsKTtcblxuICBpbml0aWFsaXplVmlldyhyb290LCB2aWV3TW9kZWwpO1xuXG4gIHZhciByb290Q2hpbGQgPSByb290LmNoaWxkTm9kZXNbMF07XG5cbiAgdmFyIGNvbnRyb2xDb25maWcgPSB7XG4gICAgZ2V0Q2FuZGlkYXRlczogY29uZmlnLmdldENhbmRpZGF0ZXMsXG4gICAgcHJvbXB0TGFiZWw6IHByb21wdExhYmVsLFxuICAgIHRyYW5zZm9ybTogY29uZmlnLnRyYW5zZm9ybSxcbiAgICB2aWV3cG9ydDogaW5pdGlhbE1vZGVsXG4gIH07XG5cbiAgdmFyIGNzc1Njcm9sbGJhckRldGVjdGVkID0gZGV0ZWN0Q3NzU2Nyb2xsYmFyKCk7XG5cbiAgc2V0U2Nyb2xsYmFyVmlzaWJpbGl0eShjc3NTY3JvbGxiYXJEZXRlY3RlZCk7XG5cbiAgdmFyIF9zY3JvbGwgPSBzY3JvbGwoY3NzU2Nyb2xsYmFyRGV0ZWN0ZWQpO1xuXG4gIGluaXRpYWxpemVDb250cm9sKFxuICAgIHN1YnNjcmliZSxcbiAgICByZW5kZXIodmlld01vZGVsLCByb290Q2hpbGQsIGNvbnRyb2xDb25maWcsIF9zY3JvbGwpLFxuICAgIGNvbnRyb2xDb25maWcpO1xufVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxiYXJWaXNpYmlsaXR5KGNzc1Njcm9sbGJhckRldGVjdGVkKSB7XG4gIGlmICghY3NzU2Nyb2xsYmFyRGV0ZWN0ZWQpIHtcbiAgICB2YXIgdmlld3BvcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlcmwtdmlld3BvcnQnKVswXVxuICAgIHZpZXdwb3J0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gIH1cbn1cblxuXG5leHBvcnQgeyBpbml0aWFsaXplIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVGcmFtZSB9IGZyb20gJy4uL3R5cGVzL2NyZWF0ZUZyYW1lJztcblxuZnVuY3Rpb24gY2xlYXIoZnJhbWUsIHRlcm1pbmFsKSB7XG4gIHJldHVybiBjcmVhdGVGcmFtZShcbiAgICAwLFxuICAgIHRlcm1pbmFsLmVudHJpZXMubGVuZ3RoLFxuICAgIGZyYW1lLnByb21wdEluZGV4KTtcbn1cblxuZnVuY3Rpb24gZmFzdEZvcndhcmQoZnJhbWUpIHtcbiAgcmV0dXJuIGNyZWF0ZUZyYW1lKFxuICAgIGZyYW1lLm9mZnNldCxcbiAgICBmcmFtZS5zdGFydCxcbiAgICBmcmFtZS5wcm9tcHRJbmRleCA+IDBcbiAgICAgID8gZnJhbWUucHJvbXB0SW5kZXggLSAxXG4gICAgICA6IGZyYW1lLnByb21wdEluZGV4KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRQcm9tcHRJbmRleChmcmFtZSkge1xuICByZXR1cm4gY3JlYXRlRnJhbWUoXG4gICAgZnJhbWUub2Zmc2V0LFxuICAgIGZyYW1lLnN0YXJ0LFxuICAgIDApO1xufVxuXG5mdW5jdGlvbiByZXdpbmQoZnJhbWUsIHRlcm1pbmFsKSB7XG4gIHJldHVybiBjcmVhdGVGcmFtZShcbiAgICBmcmFtZS5vZmZzZXQsXG4gICAgZnJhbWUuc3RhcnQsXG4gICAgdGVybWluYWwucHJvbXB0cy5sZW5ndGggPiBmcmFtZS5wcm9tcHRJbmRleFxuICAgICAgPyBmcmFtZS5wcm9tcHRJbmRleCArIDFcbiAgICAgIDogZnJhbWUucHJvbXB0SW5kZXgpO1xufVxuXG5leHBvcnQgY29uc3QgRnJhbWUgPSB7XG4gIGNsZWFyLFxuICBmYXN0Rm9yd2FyZCxcbiAgcmVzZXRQcm9tcHRJbmRleCxcbiAgcmV3aW5kXG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlVGVybWluYWwgfSBmcm9tICcuLi90eXBlcy9jcmVhdGVUZXJtaW5hbCc7XG5pbXBvcnQgeyBjcmVhdGVQcm9tcHQgfSBmcm9tICcuLi90eXBlcy9jcmVhdGVQcm9tcHQnO1xuXG5mdW5jdGlvbiBhZGRDaGFyKHRlcm1pbmFsLCBjaGFyKSB7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLFxuICAgIHRlcm1pbmFsLnByb21wdHMsXG4gICAgY3JlYXRlUHJvbXB0KFxuICAgICAgdGVybWluYWwucHJvbXB0LnByZUN1cnNvciArIGNoYXIsXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcikpO1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZVdvcmQodGVybWluYWwsIGdldENhbmRpZGF0ZXMpIHtcbiAgaWYgKGdldENhbmRpZGF0ZXMgPT0gbnVsbCkge1xuICAgIGdldENhbmRpZGF0ZXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciByZXN1bHRzO1xuICAgICAgcmV0dXJuIChyZXN1bHRzID0gW3sgZWZmZWN0OiBmYWxzZSwgdmFsdWU6IHZhbHVlIH1dKTsgLy8gY291cGxpbmcgdG8gbGlzcCBpbXBsZW1lbnRhdGlvblxuICAgIH07XG4gIH1cblxuICB2YXIgY29tbWFuZFRleHQgPSB0ZXJtaW5hbC5wcm9tcHQucHJlQ3Vyc29yO1xuICB2YXIgc3BsaXRDb21tYW5kID0gZ2V0UHJlZml4KGNvbW1hbmRUZXh0KTtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKHNwbGl0Q29tbWFuZFsxXSk7XG4gIHZhciBsZW5ndGggPSBjYW5kaWRhdGVzLmxlbmd0aDtcblxuICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRlcm1pbmFsO1xuICB9XG5cbiAgdmFyIGVudHJpZXMsIHByb21wdDtcblxuICBpZiAobGVuZ3RoID09PSAxKSB7XG4gICAgZW50cmllcyA9IHRlcm1pbmFsLmVudHJpZXM7XG4gICAgcHJvbXB0ID0gY3JlYXRlUHJvbXB0KFxuICAgICAgc3BsaXRDb21tYW5kWzBdICsgY2FuZGlkYXRlc1swXSArICcgJyArIHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yLFxuICAgICAgdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3IpO1xuICB9IGVsc2Uge1xuICAgIGVudHJpZXMgPSB0ZXJtaW5hbC5lbnRyaWVzLmNvbmNhdChcbiAgICAgIFt7IHR5cGU6ICdjb21tYW5kJywgdmFsdWU6IGV4dHJhY3RDb21tYW5kKHRlcm1pbmFsLnByb21wdCkgfV0sXG4gICAgICBbeyB0eXBlOiAnY29tcGxldGlvbicsIHZhbHVlOiBjYW5kaWRhdGVzLmpvaW4oJyAnKSB9XSk7XG4gICAgcHJvbXB0ID0gdGVybWluYWwucHJvbXB0O1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKGVudHJpZXMsIHRlcm1pbmFsLnByb21wdHMsIHByb21wdCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUxlZnRDaGFyKHRlcm1pbmFsKSB7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLCBcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLFxuICAgIGNyZWF0ZVByb21wdChcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wcmVDdXJzb3Iuc2xpY2UoMCwgLTEpLFxuICAgICAgdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3IpKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJlQ3Vyc29yKHRlcm1pbmFsKSB7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLCBcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLCBcbiAgICBjcmVhdGVQcm9tcHQoJycsIHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVJpZ2h0Q2hhcih0ZXJtaW5hbCkge1xuICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgdGVybWluYWwuZW50cmllcywgXG4gICAgdGVybWluYWwucHJvbXB0cywgXG4gICAgY3JlYXRlUHJvbXB0KFxuICAgICAgdGVybWluYWwucHJvbXB0LnByZUN1cnNvcixcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yLnNsaWNlKDEpKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVdvcmQodGVybWluYWwpIHtcbiAgdmFyIHByZUN1cnNvciA9IHRlcm1pbmFsLnByb21wdC5wcmVDdXJzb3I7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLCBcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLCBcbiAgICBjcmVhdGVQcm9tcHQoXG4gICAgICBwcmVDdXJzb3Iuc2xpY2UoMCwgcHJlQ3Vyc29yLnNsaWNlKDAsIC0xKS5sYXN0SW5kZXhPZignICcpICsgMSksXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcikpO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0Q29tbWFuZChwcm9tcHQpIHtcbiAgcmV0dXJuIChwcm9tcHQucHJlQ3Vyc29yICsgcHJvbXB0LnBvc3RDdXJzb3IpLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJlZml4KGNvbW1hbmQpIHtcbiAgdmFyIHJlZ2V4ID0gL14oLipbXFxzXFwoXFwpXFxbXFxdXSkoW15cXChcXClcXFtcXF1dKikvO1xuICB2YXIgbWF0Y2ggPSByZWdleC5leGVjKGNvbW1hbmQpO1xuICByZXR1cm4gbWF0Y2ggPT0gbnVsbFxuICAgID8gWycnLCBjb21tYW5kXVxuICAgIDogW21hdGNoWzFdLCBtYXRjaFsyXV07XG59XG5cbmZ1bmN0aW9uIG1vdmVDdXJzb3JMZWZ0KHRlcm1pbmFsKSB7XG4gIHZhciBwcmVDdXJzb3IgPSB0ZXJtaW5hbC5wcm9tcHQucHJlQ3Vyc29yO1xuICB2YXIgcHJlQ3Vyc29yTGVuZ3RoID0gcHJlQ3Vyc29yLmxlbmd0aDtcbiAgaWYgKHByZUN1cnNvckxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0ZXJtaW5hbDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcG9zdEN1cnNvciA9IHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yO1xuICAgIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICAgIHRlcm1pbmFsLmVudHJpZXMsXG4gICAgICB0ZXJtaW5hbC5wcm9tcHRzLFxuICAgICAgY3JlYXRlUHJvbXB0KFxuICAgICAgICBwcmVDdXJzb3Iuc2xpY2UoMCwgLTEpLFxuICAgICAgICBwcmVDdXJzb3JbcHJlQ3Vyc29yTGVuZ3RoIC0gMV0gKyBwb3N0Q3Vyc29yKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW92ZUN1cnNvclJpZ2h0KHRlcm1pbmFsKSB7XG4gIHZhciBwb3N0Q3Vyc29yID0gdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3I7XG4gIGlmIChwb3N0Q3Vyc29yLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0ZXJtaW5hbDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcHJlQ3Vyc29yID0gdGVybWluYWwucHJvbXB0LnByZUN1cnNvcjtcbiAgICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgICB0ZXJtaW5hbC5lbnRyaWVzLFxuICAgICAgdGVybWluYWwucHJvbXB0cyxcbiAgICAgIGNyZWF0ZVByb21wdChcbiAgICAgICAgcHJlQ3Vyc29yICsgcG9zdEN1cnNvclswXSxcbiAgICAgICAgcG9zdEN1cnNvci5zbGljZSgxKSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdmVDdXJzb3JUb0VuZCh0ZXJtaW5hbCkge1xuICB2YXIgcHJvbXB0ID0gdGVybWluYWwucHJvbXB0O1xuICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgdGVybWluYWwuZW50cmllcyxcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLFxuICAgIGNyZWF0ZVByb21wdChwcm9tcHQucHJlQ3Vyc29yICsgcHJvbXB0LnBvc3RDdXJzb3IsICcnKSk7XG59XG5cbmZ1bmN0aW9uIG1vdmVDdXJzb3JUb1N0YXJ0KHRlcm1pbmFsKSB7XG4gIHZhciBwcm9tcHQgPSB0ZXJtaW5hbC5wcm9tcHQ7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLFxuICAgIHRlcm1pbmFsLnByb21wdHMsXG4gICAgY3JlYXRlUHJvbXB0KCcnLCBwcm9tcHQucHJlQ3Vyc29yICsgcHJvbXB0LnBvc3RDdXJzb3IpKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUHJvbXB0KHByb21wdCkge1xuICByZXR1cm4gY3JlYXRlUHJvbXB0KGV4dHJhY3RDb21tYW5kKHByb21wdCksICcnKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0KHRlcm1pbmFsLCB0cmFuc2Zvcm0pIHtcbiAgdmFyIG5ld0NhY2hlZFByb21wdE1heWJlLCBuZXdGdXR1cmU7XG5cbiAgaWYgKHRyYW5zZm9ybSA9PSBudWxsKSB7XG4gICAgdHJhbnNmb3JtID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgcmVzdWx0cztcbiAgICAgIHJldHVybiAocmVzdWx0cyA9IFt7IGVmZmVjdDogZmFsc2UsIHZhbHVlOiB2YWx1ZSB9XSk7IC8vIGNvdXBsaW5nIHRvIGxpc3AgaW1wbGVtZW50YXRpb25cbiAgICB9O1xuICB9XG5cbiAgdmFyIGNvbW1hbmRUZXh0ID0gZXh0cmFjdENvbW1hbmQodGVybWluYWwucHJvbXB0KTtcbiAgdmFyIHJlc3VsdHMgPSB0cmFuc2Zvcm0oY29tbWFuZFRleHQpO1xuICB2YXIgZGlzcGxheUVudHJpZXMgPSByZXN1bHRzXG4gICAgLnNsaWNlKDAsIC0xKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gKHJlc3VsdCkgeyByZXR1cm4gcmVzdWx0LmVmZmVjdC50eXBlID09PSAnZGlzcGxheSc7IH0pXG4gICAgLm1hcChmdW5jdGlvbiAoZGlzcGxheSkgeyByZXR1cm4geyB0eXBlOiAnZGlzcGxheScsIHZhbHVlOiBkaXNwbGF5LnZhbHVlIH19KTtcblxuICB2YXIgbGFzdFJlc3VsdCA9IHJlc3VsdHNbcmVzdWx0cy5sZW5ndGggLSAxXTtcbiAgdmFyIHJlc3BvbnNlID0gbGFzdFJlc3VsdC52YWx1ZSAhPSBudWxsXG4gICAgPyBbeyB0eXBlOiAncmVzcG9uc2UnLCB2YWx1ZTogbGFzdFJlc3VsdC52YWx1ZSB9XVxuICAgIDogW107XG5cbiAgdmFyIGNvbW1hbmQgPSB7IHR5cGU6ICdjb21tYW5kJywgdmFsdWU6IGNvbW1hbmRUZXh0IH07XG4gIHZhciBwcm9tcHQgPSBub3JtYWxpemVQcm9tcHQodGVybWluYWwucHJvbXB0KTtcblxuICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgdGVybWluYWwuZW50cmllcy5jb25jYXQoW2NvbW1hbmRdLCBkaXNwbGF5RW50cmllcywgcmVzcG9uc2UpLFxuICAgIFtwcm9tcHRdLmNvbmNhdCh0ZXJtaW5hbC5wcm9tcHRzKSxcbiAgICBjcmVhdGVQcm9tcHQoJycsICcnKSk7XG59XG5cbmV4cG9ydCBjb25zdCBUZXJtaW5hbCA9IHtcbiAgYWRkQ2hhcixcbiAgY29tcGxldGVXb3JkLFxuICBkZWxldGVMZWZ0Q2hhcixcbiAgZGVsZXRlUHJlQ3Vyc29yLFxuICBkZWxldGVSaWdodENoYXIsXG4gIGRlbGV0ZVdvcmQsXG4gIG1vdmVDdXJzb3JMZWZ0LFxuICBtb3ZlQ3Vyc29yUmlnaHQsXG4gIG1vdmVDdXJzb3JUb0VuZCxcbiAgbW92ZUN1cnNvclRvU3RhcnQsXG4gIHN1Ym1pdFxufTtcbiIsImltcG9ydCB7IGNyZWF0ZVZpZXdwb3J0IH0gZnJvbSAnLi4vdHlwZXMvY3JlYXRlVmlld3BvcnQnO1xuaW1wb3J0IHsgY3JlYXRlRnJhbWUgfSBmcm9tICcuLi90eXBlcy9jcmVhdGVGcmFtZSc7XG5pbXBvcnQgeyBjcmVhdGVUZXJtaW5hbCB9IGZyb20gJy4uL3R5cGVzL2NyZWF0ZVRlcm1pbmFsJztcbmltcG9ydCB7IEZyYW1lIH0gZnJvbSAnLi9mcmFtZSc7XG5pbXBvcnQgeyBUZXJtaW5hbCB9IGZyb20gJy4vdGVybWluYWwnO1xuXG5mdW5jdGlvbiBhZGRDaGFyKHZpZXdwb3J0LCBjaGFyKSB7XG4gIHJldHVybiBjcmVhdGVWaWV3cG9ydChcbiAgICBUZXJtaW5hbC5hZGRDaGFyKHZpZXdwb3J0LnRlcm1pbmFsLCBjaGFyKSxcbiAgICB2aWV3cG9ydC5mcmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlV29yZCh2aWV3cG9ydCwgZ2V0Q2FuZGlkYXRlcykge1xuICB2YXIgZnJhbWUgPSB2aWV3cG9ydC5mcmFtZTtcbiAgdmFyIG5ld1Rlcm1pbmFsID1cbiAgICBUZXJtaW5hbC5jb21wbGV0ZVdvcmQocmVmcmVzaFRlcm1pbmFsKHZpZXdwb3J0KSwgZ2V0Q2FuZGlkYXRlcyk7XG4gIHZhciBkaWZmID0gbmV3VGVybWluYWwuZW50cmllcy5sZW5ndGggLSB2aWV3cG9ydC50ZXJtaW5hbC5lbnRyaWVzLmxlbmd0aDtcbiAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgIG5ld1Rlcm1pbmFsLFxuICAgIGNyZWF0ZUZyYW1lKFxuICAgICAgZnJhbWUub2Zmc2V0ICsgZGlmZixcbiAgICAgIGZyYW1lLnN0YXJ0LFxuICAgICAgMCkpO1xufVxuXG5mdW5jdGlvbiBjbGVhcih2aWV3cG9ydCkge1xuICB2YXIgdGVybWluYWwgPSB2aWV3cG9ydC50ZXJtaW5hbDtcbiAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgIHRlcm1pbmFsLFxuICAgIEZyYW1lLmNsZWFyKHZpZXdwb3J0LmZyYW1lLCB0ZXJtaW5hbCkpO1xufVxuXG5mdW5jdGlvbiBmYXN0Rm9yd2FyZCh2aWV3cG9ydCkge1xuICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgdmlld3BvcnQudGVybWluYWwsXG4gICAgRnJhbWUuZmFzdEZvcndhcmQodmlld3BvcnQuZnJhbWUpKTtcbn1cblxuZnVuY3Rpb24gbW9kaWZ5VGVybWluYWwoZm5OYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmlld3BvcnQpIHtcbiAgICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgICBUZXJtaW5hbFtmbk5hbWVdKHJlZnJlc2hUZXJtaW5hbCh2aWV3cG9ydCkpLFxuICAgICAgRnJhbWUucmVzZXRQcm9tcHRJbmRleCh2aWV3cG9ydC5mcmFtZSkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZWZyZXNoVGVybWluYWwodmlld3BvcnQpIHtcbiAgdmFyIHRlcm1pbmFsID0gdmlld3BvcnQudGVybWluYWw7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbCh0ZXJtaW5hbC5lbnRyaWVzLCB0ZXJtaW5hbC5wcm9tcHRzLCB2aWV3cG9ydC5wcm9tcHQpO1xufVxuXG5mdW5jdGlvbiByZXdpbmQodmlld3BvcnQpIHtcbiAgdmFyIHRlcm1pbmFsID0gdmlld3BvcnQudGVybWluYWw7XG4gIHJldHVybiBjcmVhdGVWaWV3cG9ydChcbiAgICB0ZXJtaW5hbCxcbiAgICBGcmFtZS5yZXdpbmQodmlld3BvcnQuZnJhbWUsIHRlcm1pbmFsKSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdCh2aWV3cG9ydCwgdHJhbnNmb3JtKSB7XG4gIHZhciBmcmFtZSA9IHZpZXdwb3J0LmZyYW1lO1xuICB2YXIgbmV3VGVybWluYWwgPSBUZXJtaW5hbC5zdWJtaXQocmVmcmVzaFRlcm1pbmFsKHZpZXdwb3J0KSwgdHJhbnNmb3JtKTtcbiAgdmFyIGRpZmYgPSBuZXdUZXJtaW5hbC5lbnRyaWVzLmxlbmd0aCAtIHZpZXdwb3J0LnRlcm1pbmFsLmVudHJpZXMubGVuZ3RoO1xuICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgbmV3VGVybWluYWwsXG4gICAgY3JlYXRlRnJhbWUoXG4gICAgICBmcmFtZS5vZmZzZXQgKyBkaWZmLFxuICAgICAgZnJhbWUuc3RhcnQsXG4gICAgICAwKSk7XG59XG5cbmV4cG9ydCBjb25zdCBWaWV3cG9ydCA9IHtcbiAgYWRkQ2hhcixcbiAgY2xlYXIsXG4gIGNvbXBsZXRlV29yZCxcbiAgZGVsZXRlTGVmdENoYXI6IG1vZGlmeVRlcm1pbmFsKCdkZWxldGVMZWZ0Q2hhcicpLFxuICBkZWxldGVQcmVDdXJzb3I6IG1vZGlmeVRlcm1pbmFsKCdkZWxldGVQcmVDdXJzb3InKSxcbiAgZGVsZXRlUmlnaHRDaGFyOiBtb2RpZnlUZXJtaW5hbCgnZGVsZXRlUmlnaHRDaGFyJyksXG4gIGRlbGV0ZVdvcmQ6IG1vZGlmeVRlcm1pbmFsKCdkZWxldGVXb3JkJyksXG4gIGZhc3RGb3J3YXJkLFxuICBtb3ZlQ3Vyc29yTGVmdDogbW9kaWZ5VGVybWluYWwoJ21vdmVDdXJzb3JMZWZ0JyksXG4gIG1vdmVDdXJzb3JSaWdodDogbW9kaWZ5VGVybWluYWwoJ21vdmVDdXJzb3JSaWdodCcpLFxuICBtb3ZlQ3Vyc29yVG9FbmQ6IG1vZGlmeVRlcm1pbmFsKCdtb3ZlQ3Vyc29yVG9FbmQnKSxcbiAgbW92ZUN1cnNvclRvU3RhcnQ6IG1vZGlmeVRlcm1pbmFsKCdtb3ZlQ3Vyc29yVG9TdGFydCcpLFxuICByZXdpbmQsXG4gIHN1Ym1pdFxufVxuIiwiaW1wb3J0IHsgY3JlYXRlRnJhbWUgfSBmcm9tICcuL3R5cGVzL2NyZWF0ZUZyYW1lJztcbmltcG9ydCB7IGNyZWF0ZVByb21wdCB9IGZyb20gJy4vdHlwZXMvY3JlYXRlUHJvbXB0JztcbmltcG9ydCB7IGNyZWF0ZVRlcm1pbmFsIH0gZnJvbSAnLi90eXBlcy9jcmVhdGVUZXJtaW5hbCc7XG5pbXBvcnQgeyBjcmVhdGVWaWV3cG9ydCB9IGZyb20gJy4vdHlwZXMvY3JlYXRlVmlld3BvcnQnO1xuXG5mdW5jdGlvbiBnZXRJbml0aWFsTW9kZWwoKSB7XG4gIHJldHVybiBjcmVhdGVWaWV3cG9ydChcbiAgICBjcmVhdGVUZXJtaW5hbChbXSwgW10sIGNyZWF0ZVByb21wdCgnJywgJycpKSxcbiAgICBjcmVhdGVGcmFtZSgwLCAwLCAwKSk7XG59XG5cbmV4cG9ydCB7IGdldEluaXRpYWxNb2RlbCB9O1xuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZUZyYW1lID0gZnVuY3Rpb24gKG9mZnNldCwgc3RhcnQsIHByb21wdEluZGV4KSB7XG4gIHJldHVybiB7XG4gICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgc3RhcnQ6IHN0YXJ0LFxuICAgIHByb21wdEluZGV4OiBwcm9tcHRJbmRleFxuICB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVQcm9tcHQgPSBmdW5jdGlvbiAocHJlQ3Vyc29yLCBwb3N0Q3Vyc29yKSB7XG4gIHJldHVybiB7XG4gICAgcHJlQ3Vyc29yOiBwcmVDdXJzb3IsXG4gICAgcG9zdEN1cnNvcjogcG9zdEN1cnNvclxuICB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVUZXJtaW5hbCA9ICBmdW5jdGlvbiAoZW50cmllcywgcHJvbXB0cywgY3VycmVudFByb21wdCkge1xuICByZXR1cm4gIHtcbiAgICBlbnRyaWVzOiBlbnRyaWVzLFxuICAgIHByb21wdHM6IHByb21wdHMsXG4gICAgcHJvbXB0OiBjdXJyZW50UHJvbXB0XG4gIH07XG59O1xuIiwiZnVuY3Rpb24gZ2V0UHJvbXB0KHRlcm1pbmFsLCBmcmFtZSkge1xuICByZXR1cm4gZnJhbWUucHJvbXB0SW5kZXggPT09IDBcbiAgICA/IHRlcm1pbmFsLnByb21wdFxuICAgIDogdGVybWluYWwucHJvbXB0c1tmcmFtZS5wcm9tcHRJbmRleCAtIDFdO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlVmlld3BvcnQgPSBmdW5jdGlvbiAodGVybWluYWwsIGZyYW1lKSB7XG4gIHJldHVybiB7XG4gICAgdGVybWluYWw6IHRlcm1pbmFsLFxuICAgIGZyYW1lOiBmcmFtZSxcbiAgICBwcm9tcHQ6IGdldFByb21wdCh0ZXJtaW5hbCwgZnJhbWUpXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgZGlmZiB9IGZyb20gJy4uL3JpYm9zb21lL2RpZmYnO1xuaW1wb3J0IHsgRVJMS0lORyB9IGZyb20gJy4vdmlldy9yZWNyZWF0ZUNvbnNvbGUnO1xuaW1wb3J0IHsgbW9kaWZ5RWxlbWVudCB9IGZyb20gJy4uL3JpYm9zb21lL2ludGVycHJldGVyJztcblxuZnVuY3Rpb24gcmVuZGVyKF92aWV3TW9kZWwsIHJvb3RDaGlsZCwgY29udHJvbENvbmZpZywgc2Nyb2xsKSB7XG4gIHZhciB2aWV3TW9kZWwgPSBfdmlld01vZGVsO1xuICByZXR1cm4gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgdmFyIGxhYmVscyA9IHsgcHJvbXB0TGFiZWw6IGNvbnRyb2xDb25maWcucHJvbXB0TGFiZWwgfTtcbiAgICB2YXIgbmV3Vmlld01vZGVsID0gRVJMS0lORyhsYWJlbHMsIG1vZGVsKTtcbiAgICBtb2RpZnlFbGVtZW50KHJvb3RDaGlsZCwgZGlmZihuZXdWaWV3TW9kZWwsIHZpZXdNb2RlbCkpO1xuXG4gICAgY29udHJvbENvbmZpZy52aWV3cG9ydCA9IG1vZGVsO1xuICAgIHZpZXdNb2RlbCA9IG5ld1ZpZXdNb2RlbDtcblxuICAgIHNjcm9sbCgpO1xuICB9O1xufVxuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImZ1bmN0aW9uIHN1YnNjcmliZShldmVudFR5cGUsIGV2ZW50SGFuZGxlcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIHN1cHJlc3NEZWZhdWx0KGV2ZW50SGFuZGxlcikpO1xufVxuXG5mdW5jdGlvbiBzdXByZXNzRGVmYXVsdChoYW5kbGVFdmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBoYW5kbGVFdmVudChldmVudCk7XG4gIH07XG59XG5cbmV4cG9ydCB7IHN1YnNjcmliZSB9O1xuIiwiaW1wb3J0IHsgU1BBTiB9IGZyb20gJy4uLy4uL3JpYm9zb21lL2VsZW1lbnRzJztcblxuZnVuY3Rpb24gRVJMX0VOVFJZKHRleHQpIHtcbiAgcmV0dXJuIFNQQU4oX2VudHJ5Q29uZmlnLCB0ZXh0ICsgbmV3bGluZSk7XG59XG5cbmZ1bmN0aW9uIEVSTF9JTlBVVChwcm9tcHRUZXh0LCBwcmVUZXh0LCBwb3N0VGV4dCkge1xuICByZXR1cm4gU1BBTihcbiAgICBfaW5wdXRDb25maWcsXG4gICAgRVJMX1BST01QVChwcm9tcHRUZXh0KSxcbiAgICBFUkxfUFJFKHByZVRleHQpLFxuICAgIEVSTF9DVVJTT1IsXG4gICAgRVJMX1BPU1QocG9zdFRleHQpKTtcbn1cblxuZnVuY3Rpb24gRVJMX1BPU1QodGV4dCkge1xuICByZXR1cm4gU1BBTihfcG9zdENvbmZpZywgdGV4dCk7XG59XG5cbmZ1bmN0aW9uIEVSTF9QUkUodGV4dCkge1xuICByZXR1cm4gU1BBTihfcHJlQ29uZmlnLCB0ZXh0KTtcbn1cblxuZnVuY3Rpb24gRVJMX1BST01QVCh0ZXh0KSB7XG4gIHJldHVybiBTUEFOKF9wcm9tcHRDb25maWcsIHRleHQpO1xufVxuXG52YXIgZW1wdHlTdHJpbmcgPSAnJztcbnZhciBuZXdsaW5lID0gJ1xcbic7XG52YXIgc3BhY2UgPSAnICc7XG52YXIgdW5kZXJzY29yZSA9ICdfJztcblxudmFyIEVSTF9DVVJTT1IgPSBTUEFOKFxuICB7XG4gICAgaWQ6ICdlcmwtY3Vyc29yJyxcbiAgICBjbGFzc2VzOiB7ICdlcmwtY3Vyc29yJzogdHJ1ZSwgJ2VybC1jdXJzb3InOiB0cnVlIH0sXG4gIH0sXG4gIHVuZGVyc2NvcmUpO1xuXG52YXIgX2VudHJ5Q29uZmlnID0ge1xuICBjbGFzc2VzOiB7ICdlcmwtZW50cnknOiB0cnVlLCAnZXJsLWxpbmUnOiB0cnVlIH0sXG59O1xuXG52YXIgX2lucHV0Q29uZmlnID0ge1xuICBpZDogJ2VybC1pbnB1dCcsXG4gIGNsYXNzZXM6IHsgJ2VybC1pbnB1dCc6IHRydWUsICdlcmwtbGluZSc6IHRydWUgfVxufTtcblxudmFyIF9wb3N0Q29uZmlnID0ge1xuICBpZDogJ2VybC1wb3N0JyxcbiAgY2xhc3NlczogeyAnZXJsLXBvc3QnOiB0cnVlIH0sXG4gIHN0eWxlOiB7ICdwb3NpdGlvbic6ICdyZWxhdGl2ZScgfVxufTtcblxudmFyIF9wcmVDb25maWcgPSB7XG4gICBpZDogJ2VybC1wcmUnLFxuICAgY2xhc3NlczogeyAnZXJsLXByZSc6IHRydWUgfVxufTtcblxudmFyIF9wcm9tcHRDb25maWcgPSB7XG4gIGlkOiAnZXJsLXByb21wdCcsXG4gIGNsYXNzZXM6IHsgJ2VybC1wcm9tcHQnOiB0cnVlLCAnZXJsLXByb21wdCc6IHRydWUgfVxufTtcblxuZXhwb3J0IHtcbiAgRVJMX0NVUlNPUixcbiAgRVJMX0VOVFJZLFxuICBFUkxfSU5QVVQsXG4gIEVSTF9QT1NULFxuICBFUkxfUFJFLFxuICBFUkxfUFJPTVBUXG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlQW5kQXR0YWNoRWxlbWVudCB9IGZyb20gJy4uLy4uL3JpYm9zb21lL2ludGVycHJldGVyJztcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVZpZXcocm9vdCwgdmlld01vZGVsKSB7XG4gIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQocm9vdCwgdmlld01vZGVsKTtcbn1cblxuZXhwb3J0IHsgaW5pdGlhbGl6ZVZpZXcgfTtcbiIsImltcG9ydCB7XG4gIEVSTF9DVVJTT1IsXG4gIEVSTF9FTlRSWSxcbiAgRVJMX0lOUFVULFxuICBFUkxfUE9TVCxcbiAgRVJMX1BSRSxcbiAgRVJMX1BST01QVFxufSBmcm9tICcuL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQge1xuICBESVYsXG4gIEgxLFxuICBINCxcbiAgU0VDVElPTixcbiAgU1BBTlxufSBmcm9tICcuLi8uLi9yaWJvc29tZS9lbGVtZW50cyc7XG5cbnZhciBFUkxfSEVBREVSID0gU0VDVElPTihcbiAgICB7XG4gICAgICBpZDogJ2VybC1oZWFkZXInLFxuICAgICAgY2xhc3NlczogeyAnaGVhZCc6IHRydWUgfVxuICAgIH0sXG4gICAgSDEobnVsbCwgJ0VybGvDtm5pZyBMaXNwIENvbnNvbGVcXG4nKSxcbiAgICBINChudWxsLCAnQSB0ZXJtaW5hbCBlbXVsYXRvciBhbmQgbGlzcCBpbnRlcnByZXRlclxcbicpKTtcblxudmFyIGVtcHR5U3RyaW5nID0gJyc7XG5cbmZ1bmN0aW9uIEVSTEtJTkcocHJlZml4ZXMsIHZpZXdwb3J0KSB7XG4gIHZhciBwcm9tcHRMYWJlbCA9IHByZWZpeGVzLnByb21wdExhYmVsO1xuICB2YXIgcHJvbXB0ID0gdmlld3BvcnQucHJvbXB0O1xuICB2YXIgZnJhbWUgPSB2aWV3cG9ydC5mcmFtZTtcblxuICB2YXIgZW50cmllcyA9IHZpZXdwb3J0LnRlcm1pbmFsLmVudHJpZXNcbiAgICAuc2xpY2UoZnJhbWUuc3RhcnQsIGZyYW1lLnN0YXJ0ICsgZnJhbWUub2Zmc2V0KVxuICAgIC5tYXAoc3BlY2lmeUVudHJ5LmJpbmQobnVsbCwgcHJlZml4ZXMpKTtcblxuICB2YXIgcHJlQ3Vyc29yID0gcHJvbXB0LnByZUN1cnNvciAhPSBudWxsID8gcHJvbXB0LnByZUN1cnNvciA6IGVtcHR5U3RyaW5nO1xuICB2YXIgcG9zdEN1cnNvciA9IHByb21wdC5wb3N0Q3Vyc29yICE9IG51bGwgPyBwcm9tcHQucG9zdEN1cnNvciA6IGVtcHR5U3RyaW5nO1xuXG4gIHJldHVybiBESVYoXG4gICAgX2VybGtvbmlnQ29uZmlnLFxuICAgIERJVihcbiAgICAgIG51bGwsXG4gICAgICBFUkxfSEVBREVSLFxuICAgICAgRElWKFxuICAgICAgICBfdGVybWluYWxDb25maWcsXG4gICAgICAgIFhfU0NST0xMQkFSLFxuICAgICAgICBZX1NDUk9MTEJBUixcbiAgICAgICAgRElWKFxuICAgICAgICAgIF9lcmxWaWV3cG9ydENvbmZpZyxcbiAgICAgICAgICBlbnRyaWVzLFxuICAgICAgICAgIEVSTF9JTlBVVChwcm9tcHRMYWJlbCwgcHJvbXB0LnByZUN1cnNvciwgcHJvbXB0LnBvc3RDdXJzb3IpKSkpKTtcbn1cblxudmFyIFhfU0NST0xMQkFSID0gRElWKFxuICB7XG4gICAgaWQ6ICdlcmwteC1zY3JvbGwtdHJhY2snLFxuICAgIGNsYXNzZXM6IHtcbiAgICAgICdlcmwteC1zY3JvbGwtdHJhY2snOiB0cnVlLFxuICAgICAgJ2VybC1zY3JvbGwtdHJhY2snOiB0cnVlXG4gICAgfVxuICB9LFxuICBESVYoe1xuICAgIGlkOiAnZXJsLXgtc2Nyb2xsLXRodW1iJyxcbiAgICBjbGFzc2VzOiB7XG4gICAgICAnZXJsLXgtc2Nyb2xsLXRodW1iJzogdHJ1ZSxcbiAgICAgICdlcmwtc2Nyb2xsLXRodW1iJzogdHJ1ZVxuICAgIH1cbiAgfSkpO1xuXG52YXIgWV9TQ1JPTExCQVIgPSBESVYoXG4gIHtcbiAgICBpZDogJ2VybC15LXNjcm9sbC10cmFjaycsXG4gICAgY2xhc3Nlczoge1xuICAgICAgJ2VybC15LXNjcm9sbC10cmFjayc6IHRydWUsXG4gICAgICAnZXJsLXNjcm9sbC10cmFjayc6IHRydWVcbiAgICB9XG4gIH0sXG4gIERJVih7XG4gICAgaWQ6ICdlcmwteS1zY3JvbGwtdGh1bWInLFxuICAgIGNsYXNzZXM6IHtcbiAgICAgICdlcmwteS1zY3JvbGwtdGh1bWInOiB0cnVlLFxuICAgICAgJ2VybC1zY3JvbGwtdGh1bWInOiB0cnVlXG4gICAgfVxuICB9KSk7XG5cbnZhciBkZWZhdWx0Q29tcGxldGlvbkxhYmVsID0gJyAgJztcbnZhciBkZWZhdWx0RGlzcGxheUxhYmVsID0gJyc7XG52YXIgZGVmYXVsdEVycm9yTGFiZWwgPSAnLi4uPiAnO1xudmFyIGRlZmF1bHRQcm9tcHRMYWJlbCA9ICc+ICc7XG52YXIgZGVmYXVsdFJlc3BvbnNlTGFiZWwgPSAnPT0+ICc7XG5cbnZhciBkZWZhdWx0Q29tcGxldGlvbkxhYmVsID0gJyAgJztcbnZhciBkZWZhdWx0RGlzcGxheUxhYmVsID0gJyc7XG52YXIgZGVmYXVsdEVycm9yTGFiZWwgPSAnLi4uPiAnO1xudmFyIGRlZmF1bHRQcm9tcHRMYWJlbCA9ICc+ICc7XG52YXIgZGVmYXVsdFJlc3BvbnNlTGFiZWwgPSAnPT0+ICc7XG5cbmZ1bmN0aW9uIHNwZWNpZnlFbnRyeShwcmVmaXhlcywgY29tcG9uZW50KSB7XG4gIHZhciBjb21wbGV0aW9uTGFiZWwgPSBwcmVmaXhlcy5jb21wbGV0aW9uTGFiZWwgfHwgZGVmYXVsdENvbXBsZXRpb25MYWJlbDtcbiAgdmFyIGRpc3BsYXlMYWJlbCA9IHByZWZpeGVzLmRpc3BsYXlMYWJlbCB8fCBkZWZhdWx0RGlzcGxheUxhYmVsO1xuICB2YXIgZXJyb3JMYWJlbCA9IHByZWZpeGVzLmVycm9yTGFiZWwgfHwgZGVmYXVsdEVycm9yTGFiZWw7XG4gIHZhciBwcm9tcHRMYWJlbCA9IHByZWZpeGVzLnByb21wdExhYmVsIHx8IGRlZmF1bHRQcm9tcHRMYWJlbDtcbiAgdmFyIHJlc3BvbnNlTGFiZWwgPSBwcmVmaXhlcy5yZXNwb25zZUxhYmVsIHx8IGRlZmF1bHRSZXNwb25zZUxhYmVsO1xuXG4gIHZhciBlbnRyeTtcbiAgc3dpdGNoIChjb21wb25lbnQudHlwZSkge1xuICAgIGNhc2UgJ2NvbW1hbmQnOlxuICAgICAgZW50cnkgPSBwcm9tcHRMYWJlbCArIGNvbXBvbmVudC52YWx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Jlc3BvbnNlJzpcbiAgICAgIGVudHJ5ID0gcmVzcG9uc2VMYWJlbCArIGNvbXBvbmVudC52YWx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Rpc3BsYXknOlxuICAgICAgZW50cnkgPSBkaXNwbGF5TGFiZWwgKyBjb21wb25lbnQudmFsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjb21wbGV0aW9uJzpcbiAgICAgIGVudHJ5ID0gY29tcGxldGlvbkxhYmVsICsgY29tcG9uZW50LnZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgZW50cnkgPSBlcnJvckxhYmVsICsgY29tcG9uZW50LnZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBjb21wb25lbnQgdHlwZScpO1xuICB9XG4gIHJldHVybiBFUkxfRU5UUlkoZW50cnkpO1xufVxuXG52YXIgX2VybGtvbmlnQ29uZmlnID0ge1xuICBpZDogJ2VybGtvbmlnJyxcbiAgY2xhc3NlczogeyAnZXJsa29uaWcnOiB0cnVlLCAnY29udGFpbmVyJzogdHJ1ZSB9XG59O1xudmFyIF9jb25zb2xlQ29uZmlnID0geyBpZDogJ2VybC1jb25zb2xlJyB9O1xudmFyIF90ZXJtaW5hbENvbmZpZyA9IHsgY2xhc3NlczogeyAndGVybWluYWwnOiB0cnVlIH19O1xudmFyIF9lcmxWaWV3cG9ydENvbmZpZyA9IHsgY2xhc3NlczogeyAnZXJsLXZpZXdwb3J0JzogdHJ1ZSB9fTtcblxuZXhwb3J0IHsgRVJMS0lORyB9O1xuIiwiZnVuY3Rpb24gZ2V0Q3Vyc29yT2Zmc2V0KGN1cnNvciwgbm9kZSkge1xuICB2YXIgbWFyZ2luID0gNTtcbiAgcmV0dXJuIGN1cnNvci5vZmZzZXRMZWZ0ICsgY3Vyc29yLm9mZnNldFdpZHRoICsgbWFyZ2luIC0gbm9kZS5vZmZzZXRXaWR0aDtcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudChpZCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xufVxuXG5mdW5jdGlvbiBnZXRQZXJjZW50YWdlKG51bWJlcikge1xuICByZXR1cm4gKDEwMCAqIG51bWJlcikgKyAnJSc7XG59XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZXJsLXZpZXdwb3J0JylbMF07XG59XG5cbmZ1bmN0aW9uIG9uRXZlbnQoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBfc2Nyb2xsKG5vZGUsIGN1cnNvcikge1xuICBub2RlLnNjcm9sbFRvcCA9IG5vZGUuc2Nyb2xsSGVpZ2h0IC0gbm9kZS5jbGllbnRIZWlnaHQ7XG4gIG5vZGUuc2Nyb2xsTGVmdCA9IGdldEN1cnNvck9mZnNldChjdXJzb3IsIG5vZGUpO1xufVxuXG5mdW5jdGlvbiBzY3JvbGwoY3NzU2Nyb2xsYmFyRGV0ZWN0ZWQpIHtcbiAgaWYgKGNzc1Njcm9sbGJhckRldGVjdGVkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjdXJzb3IgPSBnZXRFbGVtZW50KCdlcmwtY3Vyc29yJyk7XG4gICAgICBfc2Nyb2xsKGdldFZpZXdwb3J0KCksIGN1cnNvcik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZpZXdwb3J0ID0gZ2V0Vmlld3BvcnQoKTtcbiAgICB2YXIgY3Vyc29yID0gZ2V0RWxlbWVudCgnZXJsLWN1cnNvcicpO1xuICAgIHZhciB4VHJhY2sgPSBnZXRFbGVtZW50KCdlcmwteC1zY3JvbGwtdHJhY2snKTtcbiAgICB2YXIgeFRodW1iID0gZ2V0RWxlbWVudCgnZXJsLXgtc2Nyb2xsLXRodW1iJyk7XG4gICAgdmFyIHlUcmFjayA9IGdldEVsZW1lbnQoJ2VybC15LXNjcm9sbC10cmFjaycpO1xuICAgIHZhciB5VGh1bWIgPSBnZXRFbGVtZW50KCdlcmwteS1zY3JvbGwtdGh1bWInKTtcbiAgICB2YXIgcHJvbXB0ID0gZ2V0RWxlbWVudCgnZXJsLXByb21wdCcpO1xuXG4gICAgdmFyIHZpZXdwb3J0V2lkdGggPSB2aWV3cG9ydC5vZmZzZXRXaWR0aDtcbiAgICB2YXIgdmlld3BvcnRIZWlnaHQgPSB2aWV3cG9ydC5vZmZzZXRIZWlnaHQ7XG5cbiAgICBzZXRYVGh1bWJWaXNpYmlsaXR5KHZpZXdwb3J0LCB2aWV3cG9ydFdpZHRoLCB4VHJhY2ssIHhUaHVtYiwgY3Vyc29yLCBwcm9tcHQpO1xuICAgIHNldFlUaHVtYlZpc2liaWxpdHkodmlld3BvcnQsIHZpZXdwb3J0SGVpZ2h0LCB5VHJhY2ssIHlUaHVtYiwgY3Vyc29yKTtcbiAgICBzY3JvbGxIb3Jpem9udGFsbHkodmlld3BvcnQsIHZpZXdwb3J0V2lkdGgsIHhUcmFjaywgeFRodW1iKTtcbiAgICBzY3JvbGxWZXJ0aWNhbGx5KHZpZXdwb3J0LCB2aWV3cG9ydEhlaWdodCwgeVRyYWNrLCB5VGh1bWIpO1xuXG4gICAgX3Njcm9sbCh2aWV3cG9ydCwgY3Vyc29yKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsQmFySG9yaXpvbnRhbGx5KHhUaHVtYiwgbGVmdFJhdGlvKSB7XG4gIHhUaHVtYi5zdHlsZS5sZWZ0ID0gZ2V0UGVyY2VudGFnZShsZWZ0UmF0aW8pO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxCYXJWZXJ0aWNhbGx5KHlUaHVtYiwgdG9wUmF0aW8pIHtcbiAgeVRodW1iLnN0eWxlLnRvcCA9IGdldFBlcmNlbnRhZ2UodG9wUmF0aW8pO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxDb250ZW50SG9yaXpvbnRhbGx5KHZpZXdwb3J0LCBsZWZ0UmF0aW8pIHtcbiAgdmlld3BvcnQuc2Nyb2xsTGVmdCA9IGxlZnRSYXRpbyAqIHZpZXdwb3J0LnNjcm9sbFdpZHRoO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxDb250ZW50VmVydGljYWxseSh2aWV3cG9ydCwgdG9wUmF0aW8pIHtcbiAgdmlld3BvcnQuc2Nyb2xsVG9wID0gdG9wUmF0aW8gKiB2aWV3cG9ydC5zY3JvbGxIZWlnaHQ7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbFZlcnRpY2FsbHkodmlld3BvcnQsIHZpZXdwb3J0SGVpZ2h0LCB5VHJhY2ssIHlUaHVtYikge1xuICB2YXIgeVRodW1iSGVpZ2h0ID0geVRodW1iLm9mZnNldEhlaWdodDtcbiAgdmFyIHlUcmFja0hlaWdodCA9IHlUcmFjay5vZmZzZXRIZWlnaHQ7XG4gIHZhciB1bGxhZ2UgPSB5VHJhY2tIZWlnaHQgLSB5VGh1bWJIZWlnaHQ7XG5cbiAgZnVuY3Rpb24gbW91c2VNb3ZlX3ZlcnRpY2FsKGV2ZW50KSB7XG4gICAgdmFyIF90b3AgPSBldmVudC5jbGllbnRZIC0geVRyYWNrLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICB2YXIgdG9wID0gX3RvcCA8IDAgPyAwIDogX3RvcCA+IHVsbGFnZSA/IHVsbGFnZSA6IF90b3A7XG4gICAgdmFyIHRvcFJhdGlvID0gdG9wIC8geVRyYWNrSGVpZ2h0O1xuICAgIHNjcm9sbEJhclZlcnRpY2FsbHkoeVRodW1iLCB0b3BSYXRpbyk7XG4gICAgc2Nyb2xsQ29udGVudFZlcnRpY2FsbHkodmlld3BvcnQsIHRvcFJhdGlvKTtcbiAgfTtcblxuICBmdW5jdGlvbiBtb3VzZURvd25fdmVydGljYWwoZXZlbnQpIHtcbiAgICB5VGh1bWIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigwLCA4MCwgMCknO1xuICAgIG9uRXZlbnQoJ21vdXNlbW92ZScsIG1vdXNlTW92ZV92ZXJ0aWNhbCk7XG4gICAgb25FdmVudCgnbW91c2V1cCcsIG1vdXNlVXBfdmVydGljYWwpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1vdXNlVXBfdmVydGljYWwoZXZlbnQpIHtcbiAgICB5VGh1bWIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoNTUsIDUzLCA1MCwgMC41KSc7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlX3ZlcnRpY2FsKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcF92ZXJ0aWNhbCk7XG4gIH07XG5cbiAgeVRodW1iLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bl92ZXJ0aWNhbCk7XG4gIHlUaHVtYi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25fdmVydGljYWwpO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxIb3Jpem9udGFsbHkodmlld3BvcnQsIHZpZXdwb3J0V2lkdGgsIHhUcmFjaywgeFRodW1iKSB7XG4gIHZhciB4VGh1bWJXaWR0aCA9IHhUaHVtYi5vZmZzZXRXaWR0aDtcbiAgdmFyIHhUcmFja1dpZHRoID0geFRyYWNrLm9mZnNldFdpZHRoO1xuICB2YXIgdWxsYWdlID0geFRyYWNrV2lkdGggLSB4VGh1bWJXaWR0aDtcblxuICBmdW5jdGlvbiBtb3VzZU1vdmVfaG9yaXpvbnRhbChldmVudCkge1xuICAgIHZhciBfbGVmdCA9IGV2ZW50LmNsaWVudFggLSB4VHJhY2suZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICB2YXIgbGVmdCA9IF9sZWZ0IDwgMCA/IDAgOiBfbGVmdCA+IHVsbGFnZSA/IHVsbGFnZSA6IF9sZWZ0O1xuICAgIHZhciBsZWZ0UmF0aW8gPSBsZWZ0IC8geFRyYWNrV2lkdGg7XG4gICAgc2Nyb2xsQmFySG9yaXpvbnRhbGx5KHhUaHVtYiwgbGVmdFJhdGlvKTtcbiAgICBzY3JvbGxDb250ZW50SG9yaXpvbnRhbGx5KHZpZXdwb3J0LCBsZWZ0UmF0aW8pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1vdXNlVXBfaG9yaXpvbnRhbChldmVudCkge1xuICAgIHhUaHVtYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSg1NSwgNTMsIDUwLCAwLjUpJztcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVfaG9yaXpvbnRhbCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBfaG9yaXpvbnRhbCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbW91c2VEb3duX2hvcml6b250YWwoZXZlbnQpIHtcbiAgICB4VGh1bWIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigwLCA4MCwgMCknO1xuICAgIG9uRXZlbnQoJ21vdXNlbW92ZScsIG1vdXNlTW92ZV9ob3Jpem9udGFsKTtcbiAgICBvbkV2ZW50KCdtb3VzZXVwJywgbW91c2VVcF9ob3Jpem9udGFsKTtcbiAgfTtcblxuICB4VGh1bWIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duX2hvcml6b250YWwpO1xuICB4VGh1bWIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duX2hvcml6b250YWwpO1xufVxuXG5mdW5jdGlvbiBzZXRYVGh1bWJWaXNpYmlsaXR5KHZpZXdwb3J0LCB2aWV3cG9ydFdpZHRoLCB4VHJhY2ssIHhUaHVtYiwgY3Vyc29yLCBwcm9tcHQpIHtcbiAgdmFyIHhUcmFja1dpZHRoID0geFRyYWNrLm9mZnNldFdpZHRoO1xuICB2YXIgdGVybWluYWxXaWR0aCA9IHZpZXdwb3J0LnNjcm9sbFdpZHRoO1xuICB2YXIgeFRodW1iU3R5bGUgPSB4VGh1bWIuc3R5bGU7XG5cbiAgaWYgKHZpZXdwb3J0V2lkdGggPCB0ZXJtaW5hbFdpZHRoKSB7XG4gICAgdmFyIGZ1bGxQcm9tcHRPZmZzZXRXaWR0aCA9IHByb21wdC5vZmZzZXRMZWZ0ICsgcHJvbXB0Lm9mZnNldFdpZHRoO1xuICAgIHZhciBzdGFydCA9IGZ1bGxQcm9tcHRPZmZzZXRXaWR0aDtcbiAgICB2YXIgdmlld3BvcnRSYXRpbyA9IHZpZXdwb3J0V2lkdGggLyB0ZXJtaW5hbFdpZHRoO1xuICAgIHZhciB4VGh1bWJXaWR0aCA9IHZpZXdwb3J0UmF0aW8gKiB4VHJhY2tXaWR0aDtcbiAgICB2YXIgdmlld3BvcnRQZXJjZW50YWdlID0gZ2V0UGVyY2VudGFnZSh2aWV3cG9ydFJhdGlvKTtcbiAgICB2YXIgdWxsYWdlID0geFRyYWNrV2lkdGggLSB4VGh1bWJXaWR0aDtcbiAgICB2YXIgeFBvc2l0aW9uID0gY3Vyc29yLm9mZnNldExlZnQgKyBjdXJzb3Iub2Zmc2V0V2lkdGggLSBzdGFydDtcbiAgICB2YXIgY3Vyc29yUmF0aW8gPSAoeFBvc2l0aW9uIC8gdGVybWluYWxXaWR0aCkgKiAodWxsYWdlIC8geFRyYWNrV2lkdGgpO1xuICAgIHZhciBjdXJzb3JQZXJjZW50YWdlID0gZ2V0UGVyY2VudGFnZShjdXJzb3JSYXRpbyk7XG5cbiAgICB4VGh1bWJTdHlsZS5sZWZ0ID0gY3Vyc29yUGVyY2VudGFnZTtcbiAgICB4VGh1bWJTdHlsZS53aWR0aCA9IHZpZXdwb3J0UGVyY2VudGFnZTtcbiAgICB4VGh1bWJTdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICB9IGVsc2Uge1xuICAgIHhUaHVtYlN0eWxlLmxlZnQgPSAwO1xuICAgIHhUaHVtYlN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIHhUaHVtYlN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRZVGh1bWJWaXNpYmlsaXR5KHZpZXdwb3J0LCB2aWV3cG9ydEhlaWdodCwgeVRyYWNrLCB5VGh1bWIsIGN1cnNvcikge1xuICB2YXIgeVRyYWNrSGVpZ2h0ID0geVRyYWNrLm9mZnNldEhlaWdodDtcbiAgdmFyIHRlcm1pbmFsSGVpZ2h0ID0gdmlld3BvcnQuc2Nyb2xsSGVpZ2h0O1xuICB2YXIgeVRodW1iU3R5bGUgPSB5VGh1bWIuc3R5bGU7XG5cbiAgaWYgKHZpZXdwb3J0SGVpZ2h0IDwgdGVybWluYWxIZWlnaHQpIHtcbiAgICB2YXIgc3RhcnQgPSB2aWV3cG9ydC5vZmZzZXRUb3A7XG4gICAgdmFyIHZpZXdwb3J0UmF0aW8gPSB2aWV3cG9ydEhlaWdodCAvIHRlcm1pbmFsSGVpZ2h0O1xuICAgIHZhciB5VGh1bWJIZWlnaHQgPSB2aWV3cG9ydFJhdGlvICogeVRyYWNrSGVpZ2h0O1xuICAgIHZhciB2aWV3cG9ydFBlcmNlbnRhZ2UgPSBnZXRQZXJjZW50YWdlKHZpZXdwb3J0UmF0aW8pO1xuICAgIHZhciB1bGxhZ2UgPSB5VHJhY2tIZWlnaHQgLSB5VGh1bWJIZWlnaHQ7XG4gICAgdmFyIHlQb3NpdGlvbiA9IGN1cnNvci5vZmZzZXRUb3AgKyBjdXJzb3Iub2Zmc2V0SGVpZ2h0IC0gc3RhcnQ7XG4gICAgdmFyIGN1cnNvclJhdGlvID0gKHlQb3NpdGlvbiAvIHRlcm1pbmFsSGVpZ2h0KSAqICh1bGxhZ2UgLyB5VHJhY2tIZWlnaHQpO1xuICAgIHZhciBjdXJzb3JQZXJjZW50YWdlID0gZ2V0UGVyY2VudGFnZShjdXJzb3JSYXRpbyk7XG5cbiAgICB5VGh1bWJTdHlsZS50b3AgPSBjdXJzb3JQZXJjZW50YWdlO1xuICAgIHlUaHVtYlN0eWxlLmhlaWdodCA9IHZpZXdwb3J0UGVyY2VudGFnZTtcbiAgICB5VGh1bWJTdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICB9IGVsc2Uge1xuICAgIHlUaHVtYlN0eWxlLnRvcCA9IDA7XG4gICAgeVRodW1iU3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIHlUaHVtYlN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgfVxufVxuXG5leHBvcnQgeyBzY3JvbGwgfTtcbiIsImltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuL2NvbnNvbGUvaW5pdGlhbGl6ZSc7XG5pbXBvcnQgeyBpbnRlcnByZXQgfSAgZnJvbSAnLi9saXNwL2ludGVycHJldCc7XG5pbXBvcnQgeyBrZXlUb2tlbnMgfSAgZnJvbSAnLi9saXNwL2tleVRva2Vucyc7XG5cbnZhciBfa2V5VG9rZW5zID0gIGtleVRva2Vucy5tYXAoZnVuY3Rpb24gKGtleVRva2VuKSB7XG4gIHJldHVybiAnOicgKyBrZXlUb2tlbjtcbn0pO1xuXG52YXIgcHJvbXB0TGFiZWwgPSAnTGlzcD4gJztcblxuZnVuY3Rpb24gZ2V0Q2FuZGlkYXRlcyhwcmVmaXgpIHtcbiAgdmFyIGVudktleXMgPSBpbnRlcnByZXQoXCIoa2V5cyAoLWdldC1jdXJyZW50LWVudi0pKVwiKVswXVxuICAgICAgLnZhbHVlXG4gICAgICAuc2xpY2UoMSwgLTEpXG4gICAgICAuc3BsaXQoJyAnKTtcbiAgcmV0dXJuIGdldE1hdGNoZXMocHJlZml4LCBfa2V5VG9rZW5zLmNvbmNhdChlbnZLZXlzKSk7XG59XG5cbmZ1bmN0aW9uIGdldE1hdGNoZXMocHJlZml4LCB3b3Jkcykge1xuICBpZiAoIS9eWy1hLXpBLVowLTldKyQvLnRlc3QocHJlZml4KSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgcmVnZXggPSBSZWdFeHAoJyhefFxcVyk6JyArIHByZWZpeCk7XG4gIHZhciBtYXRjaGVzID0gW107XG4gIGZvciAodmFyIGluZGV4IGluIHdvcmRzKSB7XG4gICAgdmFyIHdvcmQgPSB3b3Jkc1tpbmRleF07XG4gICAgaWYgKHJlZ2V4LnRlc3Qod29yZCkpIHtcbiAgICAgIG1hdGNoZXMucHVzaCh3b3JkLnNsaWNlKDEpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5cbmluaXRpYWxpemUoe1xuICBub2RlSWQ6ICd2aWV3cG9ydCcsXG4gIHByb21wdExhYmVsOiBwcm9tcHRMYWJlbCxcbiAgdHJhbnNmb3JtOiBpbnRlcnByZXQsXG4gIGdldENhbmRpZGF0ZXM6IGdldENhbmRpZGF0ZXNcbn0pO1xuIiwiaW1wb3J0IHsgY29tbWVudFNpZ25hbCB9IGZyb20gJy4vY29tbWVudFNpZ25hbCc7XG5pbXBvcnQgeyBldmFsdWF0ZSB9IGZyb20gJy4vZXZhbHVhdGUnO1xuXG52YXIgX3Byb2Nlc3MgPSBmdW5jdGlvbih0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGVudnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oc291cmNlQ29kZSkge1xuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgIHZhciBhZGRSZXN1bHQgPSBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgfTtcbiAgICAgIHZhciB2YWx1ZSA9IGV2YWx1YXRlKGVudnMsIGFkZFJlc3VsdCkodHJhbnNmb3JtKHNvdXJjZUNvZGUpKTtcbiAgICAgIHZhciByZXN1bHQgPSAodmFsdWUgPT09IGNvbW1lbnRTaWduYWwpXG4gICAgICAgID8geyBlZmZlY3Q6IHsgdHlwZTogJ2NvbW1lbnQnIH0gfVxuICAgICAgICA6IHsgZWZmZWN0OiBmYWxzZSwgdmFsdWU6IHZhbHVlIH07XG4gICAgICBhZGRSZXN1bHQocmVzdWx0KTtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH07XG4gIH07XG59O1xuXG5leHBvcnQgeyBfcHJvY2VzcyB9O1xuIiwidmFyIGNvbW1lbnRTaWduYWwgPSB7fTtcblxuZXhwb3J0IHsgY29tbWVudFNpZ25hbCB9O1xuIiwidmFyIGFkZEVudiA9IGZ1bmN0aW9uIChlbnZTdGFjaywgbmV3RW52KSB7XG4gIHZhciBjb3B5ID0gZW52U3RhY2suc2xpY2UoMCk7XG4gIGNvcHkudW5zaGlmdChuZXdFbnYpO1xuICByZXR1cm4gY29weTtcbn07XG5cbnZhciBnZXRMYXN0ID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gIHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTtcbn07XG5cbnZhciBsb29rdXAgPSBmdW5jdGlvbiAoZW52U3RhY2ssIGtleSkge1xuICB2YXIgY29weSA9IGVudlN0YWNrLnNsaWNlKDApO1xuICB3aGlsZSAoY29weS5sZW5ndGggIT09IDApIHtcbiAgICB2YXIgZW52ID0gY29weVswXTtcbiAgICB2YXIgdmFsdWUgPSBlbnZba2V5XTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb3B5LnNoaWZ0KCk7XG4gIH1cbiAgdGhyb3cgXCJWQUxVRSBDT1JSRVNQT05ESU5HIFRPIFxcXCJcIiArIGtleSArIFwiXFxcIiBET0VTIE5PVCBFWElTVCBJTiBFTlYtU1RBQ0tcIjtcbn07XG5cbnZhciBzZXQgPSBmdW5jdGlvbiAoZW52LCBrZXksIHZhbHVlKSB7XG4gIGVudltrZXldID0gdmFsdWU7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbnZhciBzZXRNYWluRW52ID0gZnVuY3Rpb24gKGVudlN0YWNrLCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzZXQoZ2V0TGFzdChlbnZTdGFjayksIGtleSwgdmFsdWUpO1xufTtcblxudmFyIHVuc2V0ID0gZnVuY3Rpb24gKGVudiwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGVudltrZXldO1xuICBkZWxldGUgZW52W2tleV07XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbnZhciB1bnNldE1haW5FbnYgPSBmdW5jdGlvbiAoZW52U3RhY2ssIGtleSkge1xuICByZXR1cm4gdW5zZXQoZ2V0TGFzdChlbnZTdGFjayksIGtleSk7XG59O1xuXG5leHBvcnQge1xuICBhZGRFbnYsXG4gIGxvb2t1cCxcbiAgc2V0TWFpbkVudixcbiAgdW5zZXRNYWluRW52XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlRXJsQm9vbGVhbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsSWRlbnRpZmllciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybE51bWJlciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3RyaW5nIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBlcmxOaWwgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGV4dHJhY3RKc1ZhbHVlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBmcm9tQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGlzSnNOYU4gfSBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0pzTnVtYmVyIH0gZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNKc1N0cmluZyB9IGZyb20gJy4vanMtdXRpbGl0aWVzJztcbmltcG9ydCB7IHJlZHVjZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuXG52YXIgIF9fc2xpY2UgID0gW10uc2xpY2U7XG52YXIgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbnZhciBhZGQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKG5icnMucmVkdWNlKGZ1bmN0aW9uKHgsIG5icikge1xuICAgIHJldHVybiB4ICs9IG5icjtcbiAgfSkpO1xufTtcblxudmFyIGNvbnRhaW5zID0gZnVuY3Rpb24oaW5kZXgsIGtleSkge1xuICByZXR1cm4gY3JlYXRlRXJsQm9vbGVhbihrZXkgaW4gaW5kZXgpO1xufTtcblxudmFyIGRpc3NvYyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaW5kZXggPSBhcmd1bWVudHNbMF07XG4gIHZhciBrZXlzID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgOiBbXTtcbiAgdmFyIGxlbiA9IGtleXMubGVuZ3RoO1xuICB2YXIgY29weSA9IHt9O1xuICBmb3IgKHZhciBrZXkgaW4gaW5kZXgpIHtcbiAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGluZGV4LCBrZXkpKSBjb250aW51ZTtcbiAgICB2YXIgdmFsdWUgPSBpbmRleFtrZXldO1xuICAgIGNvcHlba2V5XSA9IHZhbHVlO1xuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBkZWxldGUgY29weVtrZXldO1xuICB9XG4gIHJldHVybiBjcmVhdGVFcmxJbmRleChjb3B5KTtcbn07XG5cbnZhciBkaXZpZGUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKG5icnMucmVkdWNlKGZ1bmN0aW9uKHgsIG5icikge1xuICAgIHJldHVybiB4IC89IG5icjtcbiAgfSkpO1xufTtcblxudmFyIGV4cG9uZW50aWF0ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIobmJycy5yZWR1Y2UoZnVuY3Rpb24oeCwgbmJyKSB7XG4gICAgcmV0dXJuIE1hdGgucG93KHgsIG5icik7XG4gIH0pKTtcbn07XG5cbnZhciBnZXQgPSBmdW5jdGlvbihqc0luZGV4LCBqc0tleSkge1xuICByZXR1cm4ganNJbmRleFtqc0tleV07XG59O1xuXG52YXIgZ2V0RW52aXJvbm1lbnQgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgdmFyIGVudmlyb25tZW50ID0gY29uZmlnLmVudmlyb25tZW50O1xuICBzZXRDb3JlRm5zT25Kc1ZhbHVlc19iYW5nXyhlbnZpcm9ubWVudCwgZnVuY3Rpb25zT25Kc1ZhbHVlcyk7XG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn07XG5cbnZhciBncmVhdGVyVGhhbk9yRXF1YWwgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsQm9vbGVhbihuYnJzWzBdID49IG5icnNbMV0pO1xufTtcblxudmFyIGdyZWF0ZXJUaGFuID0gZnVuY3Rpb24oKSB7XG4gIHZhciBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4obmJyc1swXSA+IG5icnNbMV0pO1xufTtcblxudmFyIGluZGV4ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBhcmdzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgX2luZGV4ID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgayA9IGFyZ3NbaV07XG4gICAgaWYgKGkgJSAyID09PSAwKSB7XG4gICAgICBfaW5kZXhba10gPSBhcmdzW2kgKyAxXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUVybEluZGV4KF9pbmRleCk7XG59O1xuXG52YXIga2V5cyA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gIHZhciBfa2V5cyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gaW5kZXgpIHtcbiAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGluZGV4LCBrZXkpKSBjb250aW51ZTtcbiAgICB2YXIgdmFsdWUgPSBpbmRleFtrZXldO1xuICAgIHZhciBqc05iciA9IHBhcnNlRmxvYXQoa2V5LCAxMCk7XG4gICAgdmFyIF9rZXkgPSBpc0pzTmFOKGpzTmJyKVxuICAgICAgICA/IChrZXlbMF0gPT09ICc6JyA/IGNyZWF0ZUVybElkZW50aWZpZXIgOiBjcmVhdGVFcmxTdHJpbmcpKGtleSlcbiAgICAgICAgOiBjcmVhdGVFcmxOdW1iZXIoanNOYnIpO1xuICAgIF9rZXlzLnB1c2goX2tleSk7XG4gIH1cbiAgcmV0dXJuIGZyb21BcnJheShfa2V5cyk7XG59O1xuXG52YXIgbGVuZ3RoU3RyaW5nID0gZnVuY3Rpb24oanNWYWwpIHtcbiAgaWYgKCFpc0pzU3RyaW5nKGpzVmFsKSkge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihqc1ZhbC5sZW5ndGggLSAyKTtcbn07XG5cbnZhciBsZXNzVGhhbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKG5icnNbMF0gPCBuYnJzWzFdKTtcbn07XG5cbnZhciBsZXNzVGhhbk9yRXF1YWwgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsQm9vbGVhbihuYnJzWzBdIDw9IG5icnNbMV0pO1xufTtcblxudmFyIGxpZnQgPSBmdW5jdGlvbihmbk9uSnNWYWx1ZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlTGlzdCkge1xuICAgIHJldHVybiBmbk9uSnNWYWx1ZXMuYXBwbHkobnVsbCwgKHRvQXJyYXkoZXJsVmFsdWVMaXN0KSkubWFwKGV4dHJhY3RKc1ZhbHVlKSk7XG4gIH07XG59O1xuXG52YXIgbWF4ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihNYXRoLm1heC5hcHBseShNYXRoLCBuYnJzKSk7XG59O1xuXG52YXIgbWluID0gZnVuY3Rpb24oKSB7XG4gIHZhciBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihNYXRoLm1pbi5hcHBseShNYXRoLCBuYnJzKSk7XG59O1xuXG52YXIgbW9kID0gZnVuY3Rpb24obmJyMCwgbmJyMSkge1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKG5icjAgJSBuYnIxKTtcbn07XG5cbnZhciBtdWx0aXBseSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIobmJycy5yZWR1Y2UoZnVuY3Rpb24oeCwgbmJyKSB7XG4gICAgcmV0dXJuIHggKj0gbmJyO1xuICB9KSk7XG59O1xuXG52YXIgbmVnYXRlID0gZnVuY3Rpb24obmJyKSB7XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIoLTEgKiBuYnIpO1xufTtcblxudmFyIHBhcnNlTnVtYmVyID0gZnVuY3Rpb24oanNWYWwpIHtcbiAgaWYgKGlzSnNOdW1iZXIoanNWYWwpKSB7XG4gICAgcmV0dXJuIGpzVmFsO1xuICB9XG4gIGlmICghaXNKc1N0cmluZyhqc1ZhbCkpIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG4gIHZhciBqc05iciA9IHBhcnNlRmxvYXQoc3RyaXBRdW90ZXMoanNWYWwpLCAxMCk7XG4gIGlmIChpc0pzTmFOKGpzTmJyKSkge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihqc05icik7XG4gIH1cbn07XG5cbnZhciBzZXRDb3JlRm5zT25Kc1ZhbHVlc19iYW5nXyA9IGZ1bmN0aW9uKGVudiwgZm5zKSB7XG4gIHZhciBfcmVzdWx0cyA9IFtdO1xuICBmb3IgKHZhciBmbk5hbWUgaW4gZm5zKSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChmbnMsIGZuTmFtZSkpIGNvbnRpbnVlO1xuICAgIHZhciBmbiA9IGZuc1tmbk5hbWVdO1xuICAgIGVudltmbk5hbWVdID0gY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbihsaWZ0KGZuKSk7XG4gICAgX3Jlc3VsdHMucHVzaChlbnZbZm5OYW1lXSk7XG4gIH1cbiAgcmV0dXJuIF9yZXN1bHRzO1xufTtcblxudmFyIHN1YnRyYWN0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihuYnJzLnJlZHVjZShmdW5jdGlvbih4LCBuYnIpIHtcbiAgICByZXR1cm4geCAtPSBuYnI7XG4gIH0pKTtcbn07XG5cbnZhciB2YWxzID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgdmFyIHZhbHVlcyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gaW5kZXgpIHtcbiAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGluZGV4LCBrZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIHZhbHVlID0gaW5kZXhba2V5XTtcbiAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZyb21BcnJheSh2YWx1ZXMpO1xufTtcblxudmFyIGZ1bmN0aW9uc09uSnNWYWx1ZXMgPSB7XG4gICcrJzogYWRkLFxuICAnY29udGFpbnM/JzogY29udGFpbnMsXG4gICdkaXNzb2MnOiBkaXNzb2MsXG4gICcvJzogZGl2aWRlLFxuICAnKionOiBleHBvbmVudGlhdGUsXG4gICdnZXQnOiBnZXQsXG4gICc+JzogZ3JlYXRlclRoYW4sXG4gICc+PSc6IGdyZWF0ZXJUaGFuT3JFcXVhbCxcbiAgJ2luZGV4JzogaW5kZXgsXG4gICdrZXlzJzoga2V5cyxcbiAgJ2xlbmd0aC1zdHJpbmcnOiBsZW5ndGhTdHJpbmcsXG4gICdtYXgnOiBtYXgsXG4gICdtaW4nOiBtaW4sXG4gICc8JzogbGVzc1RoYW4sXG4gICc8PSc6IGxlc3NUaGFuT3JFcXVhbCxcbiAgJyUnOiBtb2QsXG4gICcqJzogbXVsdGlwbHksXG4gICduZWdhdGUnOiBuZWdhdGUsXG4gICdwYXJzZS1udW1iZXInOiBwYXJzZU51bWJlcixcbiAgJy0nOiBzdWJ0cmFjdCxcbiAgJ3ZhbHMnOiB2YWxzXG59O1xuXG5leHBvcnQgeyBnZXRFbnZpcm9ubWVudCB9O1xuIiwiaW1wb3J0IHsgYXJlRXF1YWwgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGNhciB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgY2RyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBjaXJjdW1wZW5kUXVvdGVzIH0gZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY29uY2F0IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBjcmVhdGVFcmxBdG9tIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxCb29sZWFuIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTGlzdCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTnVtYmVyIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxTdHJpbmcgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN5bWJvbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZHJvcCB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgZXJsRmFsc2UgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGVybElnbm9yZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBlcmxUcnVlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBleHRyYWN0SnNWYWx1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZnJvbUFycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBpbnRlcnByZXQgfSBmcm9tICcuL2ludGVycHJldCc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBpc0VybEF0b20gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsQ29yZVB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxCb29sZWFuIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybEZhbHNlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybEluZGV4IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybExpc3QgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTWFjcm8gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybE51bWJlciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxTdHJpbmcgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsU3ltYm9sIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybFRydWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsVXNlclB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgbGFzdCB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgbmV4dCB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgcmVjdXJzZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyByZXZlcnNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBzZXJpYWxpemUgfSBmcm9tICcuL3NlcmlhbGl6ZSc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyB0b0FycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyB0b1BhcnRpYWxBcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuXG52YXIgX19zbGljZSAgID0gW10uc2xpY2U7XG52YXIgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbnZhciBhcHBlbmQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBlcmxBcmdzQXJyYXkgPSB0b0FycmF5KGVybEFyZ3MpO1xuICB2YXIgZXJsTGlzdCA9IGVybEFyZ3NBcnJheVswXTtcbiAgdmFyIGVybFZhbHVlcyA9IDIgPD0gZXJsQXJnc0FycmF5Lmxlbmd0aCA/IF9fc2xpY2UuY2FsbChlcmxBcmdzQXJyYXksIDEpIDogW107XG4gIHJldHVybiBjb25jYXQoZXJsTGlzdCwgZnJvbUFycmF5KGVybFZhbHVlcykpO1xufTtcblxudmFyIF9hcmVFcXVhbCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEFyZ3MpO1xuICB2YXIgZXJsVmFsdWUwID0gcGFydGlhbEFycmF5WzBdO1xuICB2YXIgZXJsVmFsdWUxID0gcGFydGlhbEFycmF5WzFdO1xuICB2YXIgX19hcmVFcXVhbCA9IGZ1bmN0aW9uKGVybFZhbHVlMCwgZXJsVmFsdWUxKSB7XG4gICAgaWYgKGlzRXJsTGlzdChlcmxWYWx1ZTApICYmIGlzRXJsTGlzdChlcmxWYWx1ZTEpKSB7XG4gICAgICByZXR1cm4gYXJlRXF1YWwoZXJsVmFsdWUwLCBlcmxWYWx1ZTEsIF9fYXJlRXF1YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNFcmxJbmRleChlcmxWYWx1ZTApICYmIGlzRXJsSW5kZXgoZXJsVmFsdWUxKSkge1xuICAgICAgdmFyIGpzSW5kZXgwID0gZXJsVmFsdWUwLmpzVmFsdWU7XG4gICAgICB2YXIganNJbmRleDEgPSBlcmxWYWx1ZTEuanNWYWx1ZTtcbiAgICAgIHJldHVybiAoX19hcmVFcXVhbChrZXlzKGpzSW5kZXgwKSwga2V5cyhqc0luZGV4MSkpKVxuICAgICAgICAmJiAoX19hcmVFcXVhbCh2YWxzKGpzSW5kZXgwKSwgdmFscyhqc0luZGV4MSkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVybFZhbHVlMC5qc1ZhbHVlID09PSBlcmxWYWx1ZTEuanNWYWx1ZTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKF9fYXJlRXF1YWwoZXJsVmFsdWUwLCBlcmxWYWx1ZTEpKTtcbn07XG5cbnZhciBhc3NvYyA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIGFyZ3M7XG4gIHZhciBqc0luZGV4ID0gZXh0cmFjdEpzVmFsdWUoY2FyKGVybEFyZ3MpKTtcbiAgYXJncyA9IGNkcihlcmxBcmdzKTtcbiAgdmFyIGNvcHkgPSB7fTtcbiAgZm9yICh2YXIga2V5IGluIGpzSW5kZXgpIHtcbiAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGpzSW5kZXgsIGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgdmFsdWUgPSBqc0luZGV4W2tleV07XG4gICAgY29weVtrZXldID0gdmFsdWU7XG4gIH1cbiAgd2hpbGUgKCFpc0VtcHR5KGFyZ3MpKSB7XG4gICAgdmFyIGsgPSBjYXIoYXJncyk7XG4gICAgdmFyIHYgPSBuZXh0KGFyZ3MpO1xuICAgIGFyZ3MgPSByZWN1cnNlKHJlY3Vyc2UoYXJncykpO1xuICAgIGNvcHlbZXh0cmFjdEpzVmFsdWUoayldID0gdjtcbiAgfVxuICByZXR1cm4gY3JlYXRlRXJsSW5kZXgoY29weSk7XG59O1xuXG52YXIgYXRvbSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybEF0b20oY2FyKGVybEFyZ3MpKTtcbn07XG5cbnZhciBfY2FyID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgYXJnID0gY2FyKGVybEFyZ3MpO1xuICBpZiAoaXNFcmxMaXN0KGFyZykpIHtcbiAgICByZXR1cm4gY2FyKGFyZyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxudmFyIF9jZHIgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBhcmcgPSBjYXIoZXJsQXJncyk7XG4gIGlmIChpc0VybExpc3QoYXJnKSkge1xuICAgIHJldHVybiBjZHIoYXJnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG52YXIgX2NvbmNhdCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIGVybExpc3RzID0gdG9BcnJheShlcmxBcmdzKTtcbiAgcmV0dXJuIGNvbmNhdC5hcHBseShudWxsLCBlcmxMaXN0cyk7XG59O1xuXG52YXIgY29ucyA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybExpc3QoY2FyKGVybEFyZ3MpLCBuZXh0KGVybEFyZ3MpKTtcbn07XG5cbnZhciBjb3VudCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIGVybExpc3QgPSBjYXIoZXJsQXJncyk7XG4gIGlmICghaXNFcmxMaXN0KGVybExpc3QpKSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxuICB2YXIgX3JlZHVjZSA9IGZ1bmN0aW9uKHN1bSwgdmFsdWUpIHtcbiAgICByZXR1cm4gc3VtICsgMTtcbiAgfTtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihyZWR1Y2UoMCwgX3JlZHVjZSwgY2FyKGVybEFyZ3MpKSk7XG59O1xuXG52YXIgY3JlYXRlUHJlZGljYXRlID0gZnVuY3Rpb24ocHJlZCkge1xuICByZXR1cm4gZnVuY3Rpb24oanNMaXN0KSB7XG4gICAgdmFyIGVybFZhbHVlID0ganNMaXN0LnZhbHVlO1xuICAgIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKHByZWQoZXJsVmFsdWUpKTtcbiAgfTtcbn07XG5cbnZhciBkZXJlZiA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIChjYXIoZXJsQXJncykpLmVybFZhbHVlO1xufTtcblxudmFyIF9kcm9wID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIHZhciBlcmxOdW1iZXIgPSBwYXJ0aWFsQXJyYXlbMF07XG4gIHZhciBlcmxMaXN0ID0gcGFydGlhbEFycmF5WzFdO1xuICByZXR1cm4gZHJvcChleHRyYWN0SnNWYWx1ZShlcmxOdW1iZXIpLCBlcmxMaXN0KTtcbn07XG5cbnZhciBmaXJzdCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGNhcihjYXIoZXJsQXJncykpO1xufTtcblxudmFyIGdldEVudmlyb25tZW50ID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gIHZhciBlbnZpcm9ubWVudCA9IGNvbmZpZy5lbnZpcm9ubWVudDtcbiAgc2V0Q29yZUZuc09uRXJsVmFsdWVzKGVudmlyb25tZW50LCBmdW5jdGlvbnNPbkVybFZhbHVlcyk7XG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn07XG5cbnZhciBoYXNQcm9jZXNzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbnZhciBoYXNQcm9jZXNzV2VicGFja1NoaW0gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuKHByb2Nlc3MudGl0bGUgPT09ICdicm93c2VyJyAmJiBwcm9jZXNzLmJyb3dzZXIpO1xufVxuXG52YXIgaWdub3JlID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gZXJsSWdub3JlO1xufTtcblxudmFyIGlnbm9yZUlmVHJ1ZSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEFyZ3MpO1xuICB2YXIgZXJsQm9vbCA9IHBhcnRpYWxBcnJheVswXTtcbiAgdmFyIGVybFZhbHVlID0gcGFydGlhbEFycmF5WzFdO1xuICBpZiAoZXh0cmFjdEpzVmFsdWUoZXJsQm9vbCkpIHtcbiAgICByZXR1cm4gZXJsSWdub3JlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxWYWx1ZTtcbiAgfVxufTtcblxudmFyIGlnbm9yZVVubGVzc1RydWUgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgdmFyIGVybEJvb2wgPSBwYXJ0aWFsQXJyYXlbMF07XG4gIHZhciBlcmxWYWx1ZSA9IHBhcnRpYWxBcnJheVsxXTtcbiAgaWYgKGV4dHJhY3RKc1ZhbHVlKGVybEJvb2wpKSB7XG4gICAgcmV0dXJuIGVybFZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxJZ25vcmU7XG4gIH1cbn07XG5cbnZhciBfaW50ZXJwcmV0ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gaW50ZXJwcmV0KHN0cmlwUXVvdGVzKGV4dHJhY3RKc1ZhbHVlKGNhcihlcmxBcmdzKSkpKTtcbn07XG5cbnZhciBfaXNFbXB0eSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgaWYgKGlzRW1wdHkoZXJsQXJncykpIHtcbiAgICByZXR1cm4gZXJsRmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzRW1wdHkoY2FyKGVybEFyZ3MpKSkge1xuICAgICAgcmV0dXJuIGVybFRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlcmxGYWxzZTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24oanNMaXN0KSB7XG4gIHZhciBlcmxWYWx1ZSA9IGpzTGlzdC52YWx1ZTtcbiAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4oaXNFcmxDb3JlUHVyZUZ1bmN0aW9uKGVybFZhbHVlKVxuICAgIHx8IGlzRXJsVXNlclB1cmVGdW5jdGlvbihlcmxWYWx1ZSkpO1xufTtcblxudmFyIGlzTm9kZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gaGFzUHJvY2VzcygpICYmICFoYXNQcm9jZXNzV2VicGFja1NoaW0oKTtcbn1cblxudmFyIF9sYXN0ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgYXJnID0gY2FyKGVybEFyZ3MpO1xuICBpZiAoaXNFcmxMaXN0KGFyZykpIHtcbiAgICByZXR1cm4gbGFzdChhcmcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbnZhciBsaXN0ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gZXJsQXJncztcbn07XG5cbnZhciBtZXRhID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgZXJsTWV0YSA9IChjYXIoZXJsQXJncykpLm1ldGE7XG4gIGlmIChlcmxNZXRhICE9IG51bGwpIHtcbiAgICByZXR1cm4gZXJsTWV0YTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG52YXIgX25vdCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIGVybFZhbCA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKGlzRXJsTmlsKGVybFZhbCkgfHwgaXNFcmxGYWxzZShlcmxWYWwpKSB7XG4gICAgcmV0dXJuIGVybFRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybEZhbHNlO1xuICB9XG59O1xuXG52YXIgbnRoID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIHZhciBlcmxOdW1iZXIgPSBwYXJ0aWFsQXJyYXlbMF07XG4gIHZhciBlcmxMaXN0ID0gcGFydGlhbEFycmF5WzFdO1xuICB2YXIgdGFyZ2V0ID0gZXh0cmFjdEpzVmFsdWUoZXJsTnVtYmVyKTtcbiAgaWYgKHRhcmdldCA+PSAwKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YXJnZXQ7IGkrKykge1xuICAgICAgZXJsTGlzdCA9IGNkcihlcmxMaXN0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPiB0YXJnZXQ7IGktLSkge1xuICAgICAgZXJsTGlzdCA9IGNkcihlcmxMaXN0KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNhcihlcmxMaXN0KTtcbn07XG5cbnZhciBwcmVwZW5kID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgZXJsQXJnc0FycmF5ID0gdG9BcnJheShlcmxBcmdzKTtcbiAgdmFyIGVybExpc3QgPSBlcmxBcmdzQXJyYXlbMF07XG4gIHZhciBlcmxWYWx1ZXMgPSAyIDw9IGVybEFyZ3NBcnJheS5sZW5ndGggPyBfX3NsaWNlLmNhbGwoZXJsQXJnc0FycmF5LCAxKSA6IFtdO1xuICB2YXIgX3JlZHVjZSA9IGZ1bmN0aW9uKGxpc3QsIHZhbCkge1xuICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KHZhbCwgbGlzdCk7XG4gIH07XG4gIHJldHVybiBlcmxWYWx1ZXMucmVkdWNlKF9yZWR1Y2UsIGVybExpc3QpO1xufTtcblxudmFyIF9wclN0ciA9IGZ1bmN0aW9uKGVybEFyZ3MsIHByaW50UmVhZGFibHkpIHtcbiAgcmV0dXJuICgodG9BcnJheShlcmxBcmdzKSkubWFwKGZ1bmN0aW9uKGVybEFyZykge1xuICAgIHJldHVybiBzZXJpYWxpemUoZXJsQXJnLCBwcmludFJlYWRhYmx5KTtcbiAgfSkpLmpvaW4oJycpO1xufTtcblxudmFyIHByZXR0eVN0cmluZyA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhjaXJjdW1wZW5kUXVvdGVzKF9wclN0cihlcmxBcmdzLCB0cnVlKSkpO1xufTtcblxudmFyIHJlYWQgPSBmdW5jdGlvbihqc0xpc3QpIHtcbiAgaWYgKGlzTm9kZSgpKSB7XG4gICAgdmFyIF9yZWFkID0gZnVuY3Rpb24oX2pzTGlzdCkge1xuICAgICAgdmFyIGpzRmlsZU5hbWUgPSBzdHJpcFF1b3RlcyhleHRyYWN0SnNWYWx1ZShjYXIoX2pzTGlzdCkpKTtcbiAgICAgIC8vcmV0dXJuIHJlcXVpcmUoJ2ZzJykucmVhZEZpbGVTeW5jKGpzRmlsZU5hbWUpLnRvU3RyaW5nKCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBjcmVhdGVFcmxTdHJpbmcoX3JlYWQoanNMaXN0KSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxudmFyIHJlc2V0ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIHZhciBhdG9tID0gcGFydGlhbEFycmF5WzBdO1xuICB2YXIgdmFsdWUgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIGF0b20uZXJsVmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIGF0b207XG59O1xuXG52YXIgcmVzdCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIGFyZyA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKGlzRXJsTGlzdChhcmcpKSB7XG4gICAgcmV0dXJuIGNkcihhcmcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbnZhciBfcmV2ZXJzZSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIGFyZyA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKGlzRXJsTGlzdChhcmcpKSB7XG4gICAgcmV0dXJuIHJldmVyc2UoYXJnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG52YXIgc2V0ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMywgZXJsQXJncyk7XG4gIHZhciBpbmRleCA9IHBhcnRpYWxBcnJheVswXTtcbiAgdmFyIGtleSA9IHBhcnRpYWxBcnJheVsxXTtcbiAgdmFyIHZhbCA9IHBhcnRpYWxBcnJheVsyXTtcbiAgKGV4dHJhY3RKc1ZhbHVlKGluZGV4KSlbZXh0cmFjdEpzVmFsdWUoa2V5KV0gPSB2YWw7XG4gIHJldHVybiBpbmRleDtcbn07XG5cbnZhciBzZXRDb3JlRm5zT25FcmxWYWx1ZXMgPSBmdW5jdGlvbihlbnYsIGZucykge1xuICB2YXIgX3Jlc3VsdHMgPSBbXTtcbiAgZm9yICh2YXIgZm5OYW1lIGluIGZucykge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoZm5zLCBmbk5hbWUpKSBjb250aW51ZTtcbiAgICB2YXIgZm4gPSBmbnNbZm5OYW1lXTtcbiAgICBfcmVzdWx0cy5wdXNoKGVudltmbk5hbWVdID0gY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbihmbikpO1xuICB9XG4gIHJldHVybiBfcmVzdWx0cztcbn07XG5cbnZhciBzbHVycCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgaWYgKGlzTm9kZSgpKSB7XG4gICAgdmFyIGpzRmlsZU5hbWUgPSBzdHJpcFF1b3RlcyhleHRyYWN0SnNWYWx1ZShjYXIoZXJsQXJncykpKTtcbiAgICAvL3ZhciBfZnNfID0gcmVxdWlyZSgnZnMnKTtcbiAgICAvL3JldHVybiBjcmVhdGVFcmxTdHJpbmcoY2lyY3VtcGVuZFF1b3RlcyhfZnNfLnJlYWRGaWxlU3luYyhqc0ZpbGVOYW1lKS50b1N0cmluZygpKSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxudmFyIHN0cmluZyA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhjaXJjdW1wZW5kUXVvdGVzKF9wclN0cihlcmxBcmdzLCBmYWxzZSkpKTtcbn07XG5cbnZhciBzdHJpcFF1b3RlcyA9IGZ1bmN0aW9uKGpzU3RyaW5nKSB7XG4gIHJldHVybiBqc1N0cmluZy5zbGljZSgxLCAtMSk7XG59O1xuXG52YXIgc3ltYm9sID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgZXJsVmFsdWUgPSBjYXIoZXJsQXJncyk7XG4gIGlmIChpc0VybFN0cmluZyhlcmxWYWx1ZSkpIHtcbiAgICB2YXIganNTdHIgPSBleHRyYWN0SnNWYWx1ZShlcmxWYWx1ZSk7XG4gICAgcmV0dXJuIGNyZWF0ZUVybFN5bWJvbChqc1N0ci5zbGljZSgxLCAtMSkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbnZhciBfdGFrZSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEFyZ3MpO1xuICB2YXIgZXJsTnVtYmVyID0gcGFydGlhbEFycmF5WzBdO1xuICB2YXIgZXJsTGlzdCA9IHBhcnRpYWxBcnJheVsxXTtcbiAgcmV0dXJuIHRha2UoZXh0cmFjdEpzVmFsdWUoZXJsTnVtYmVyKSwgZXJsTGlzdCk7XG59O1xuXG52YXIgdHlwZU9mID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgZXJsVmFsdWUgPSBjYXIoZXJsQXJncyk7XG4gIHJldHVybiBjcmVhdGVFcmxTdHJpbmcoY2lyY3VtcGVuZFF1b3RlcyhlcmxWYWx1ZS50eXBlKSk7XG59O1xuXG52YXIgX3Rocm93ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB0aHJvdyBjYXIoZXJsQXJncyk7XG59O1xuXG52YXIgdGltZU1zID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xufTtcblxudmFyIHdpdGhNZXRhID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIHZhciBlcmxWYWwgPSBwYXJ0aWFsQXJyYXlbMF07XG4gIHZhciBlcmxNZXRhID0gcGFydGlhbEFycmF5WzFdO1xuICBpZiAoaXNFcmxBdG9tKGVybFZhbCkpIHtcbiAgICB2YXIgZXJsVmFsdWUgPSBlcmxWYWwuZXJsVmFsdWU7XG4gICAgdmFyIHR5cGUgPSBlcmxWYWwudHlwZTtcbiAgICByZXR1cm4ge1xuICAgICAgZXJsVmFsdWU6IGVybFZhbHVlLFxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIG1ldGE6IGVybE1ldGFcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHZhciBqc1ZhbHVlID0gZXJsVmFsLmpzVmFsdWU7XG4gICAgdmFyIHR5cGUgPSBlcmxWYWwudHlwZTtcbiAgICByZXR1cm4ge1xuICAgICAganNWYWx1ZToganNWYWx1ZSxcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBtZXRhOiBlcmxNZXRhXG4gICAgfTtcbiAgfVxufTtcblxudmFyIHdyaXRlID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY3JlYXRlRXJsU3RyaW5nKHNlcmlhbGl6ZShjYXIoZXJsQXJncykpKTtcbn07XG5cbnZhciBwcmVkaWNhdGVzID0gW1xuICBpc0VybEF0b20sXG4gIGlzRXJsQm9vbGVhbixcbiAgaXNFcmxDb3JlUHVyZUZ1bmN0aW9uLFxuICBpc0VybEZhbHNlLFxuICBpc0VybExpc3QsXG4gIGlzRXJsTWFjcm8sXG4gIGlzRXJsTmlsLFxuICBpc0VybE51bWJlcixcbiAgaXNFcmxTeW1ib2wsXG4gIGlzRXJsU3RyaW5nLFxuICBpc0VybFVzZXJQdXJlRnVuY3Rpb24sXG4gIGlzRXJsVHJ1ZVxuXS5tYXAoY3JlYXRlUHJlZGljYXRlKTtcblxudmFyIGlzQXRvbSAgICA9IHByZWRpY2F0ZXNbMF07XG52YXIgaXNCb29sZWFuID0gcHJlZGljYXRlc1sxXTtcbnZhciBpc0NvcmVGbiAgPSBwcmVkaWNhdGVzWzJdO1xudmFyIGlzRmFsc2UgICA9IHByZWRpY2F0ZXNbM107XG52YXIgaXNMaXN0ICAgID0gcHJlZGljYXRlc1s0XTtcbnZhciBpc01hY3JvICAgPSBwcmVkaWNhdGVzWzVdO1xudmFyIGlzTmlsICAgICA9IHByZWRpY2F0ZXNbNl07XG52YXIgaXNOdW1iZXIgID0gcHJlZGljYXRlc1s3XTtcbnZhciBpc1N5bWJvbCAgPSBwcmVkaWNhdGVzWzhdO1xudmFyIGlzU3RyaW5nICA9IHByZWRpY2F0ZXNbOV07XG52YXIgaXNVc2VyRm4gID0gcHJlZGljYXRlc1sxMF07XG52YXIgaXNUcnVlICAgID0gcHJlZGljYXRlc1sxMV07XG5cbnZhciBmdW5jdGlvbnNPbkVybFZhbHVlcyA9IHtcbiAgJz0nOiBfYXJlRXF1YWwsXG4gICdhcHBlbmQnOiBhcHBlbmQsXG4gICdhc3NvYyc6IGFzc29jLFxuICAnYXRvbSc6IGF0b20sXG4gICdhdG9tPyc6IGlzQXRvbSxcbiAgJ2Jvb2xlYW4/JzogaXNCb29sZWFuLFxuICAnY2FyJzogX2NhcixcbiAgJ2Nkcic6IF9jZHIsXG4gICdjb25zJzogY29ucyxcbiAgJ2NvbmNhdCc6IF9jb25jYXQsXG4gICdjb3JlLWZuPyc6IGlzQ29yZUZuLFxuICAnY291bnQnOiBjb3VudCxcbiAgJ2RlcmVmJzogZGVyZWYsXG4gICdkcm9wJzogX2Ryb3AsXG4gICdlbXB0eT8nOiBfaXNFbXB0eSxcbiAgJ2ZpcnN0JzogX2NhcixcbiAgJ2ZhbHNlPyc6IGlzRmFsc2UsXG4gICdmdW5jdGlvbj8nOiBpc0Z1bmN0aW9uLFxuICAnaWdub3JlISc6IGlnbm9yZSxcbiAgJ2lnbm9yZUlmVHJ1ZSc6IGlnbm9yZUlmVHJ1ZSxcbiAgJ2lnbm9yZVVubGVzc1RydWUnOiBpZ25vcmVVbmxlc3NUcnVlLFxuICAnbGFzdCc6IF9sYXN0LFxuICAnbGlzdCc6IGxpc3QsXG4gICdsaXN0Pyc6IGlzTGlzdCxcbiAgJ21hY3JvPyc6IGlzTWFjcm8sXG4gICdtZXRhJzogbWV0YSxcbiAgJ25pbD8nOiBpc05pbCxcbiAgJ25vdCc6IF9ub3QsXG4gICdudGgnOiBudGgsXG4gICdudW1iZXI/JzogaXNOdW1iZXIsXG4gICdwYXJzZSc6IF9pbnRlcnByZXQsXG4gICdwcmVwZW5kJzogcHJlcGVuZCxcbiAgJ3ByZXR0eS1zdHJpbmcnOiBwcmV0dHlTdHJpbmcsXG4gICdyZXN0JzogX2NkcixcbiAgJ3JldmVyc2UnOiBfcmV2ZXJzZSxcbiAgJ3N0cmluZyc6IHN0cmluZyxcbiAgJ3N0cmluZz8nOiBpc1N0cmluZyxcbiAgJ3N5bWJvbCc6IHN5bWJvbCxcbiAgJ3N5bWJvbD8nOiBpc1N5bWJvbCxcbiAgJ3Rha2UnOiBfdGFrZSxcbiAgJ3Rocm93JzogX3Rocm93LFxuICAndHJ1ZT8nOiBpc1RydWUsXG4gICd0eXBlb2YnOiB0eXBlT2YsXG4gICd1c2VyLWZuPyc6IGlzVXNlckZuLFxuICAncmVhZCc6IHJlYWQsXG4gICdyZXNldCEnOiByZXNldCxcbiAgJ3NldCEnOiBzZXQsXG4gICdzbHVycCc6IHNsdXJwLFxuICAndGltZS1tcyc6IHRpbWVNcyxcbiAgJ3dpdGgtbWV0YSc6IHdpdGhNZXRhLFxuICAnd3JpdGUnOiB3cml0ZVxufTtcblxuZXhwb3J0IHsgZ2V0RW52aXJvbm1lbnQgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUVybENvcmVFZmZlY3RmdWxGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuXG52YXIgY3JlYXRlRXJsTGlzdCAgID0gcmVxdWlyZSgnLi90eXBlLXV0aWxpdGllcycpLmNyZWF0ZUVybExpc3Q7XG52YXIgY3JlYXRlRXJsU3RyaW5nID0gcmVxdWlyZSgnLi90eXBlLXV0aWxpdGllcycpLmNyZWF0ZUVybFN0cmluZztcbnZhciBzZXJpYWxpemUgICAgICAgPSByZXF1aXJlKCcuL3NlcmlhbGl6ZScpO1xudmFyIHRvQXJyYXkgICAgICAgICA9IHJlcXVpcmUoJy4vbGlua2VkLWxpc3QnKS50b0FycmF5O1xuXG52YXIgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbnZhciBnZXRFbnZpcm9ubWVudCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICB2YXIgZGlzcGxheSA9IGNvbmZpZy5kaXNwbGF5O1xuICB2YXIgZW52aXJvbm1lbnQgPSBjb25maWcuZW52aXJvbm1lbnQ7XG4gIHNldENvcmVFZmZlY3RmdWxGbnNPbkVybFZhbHVlcyhkaXNwbGF5KShlbnZpcm9ubWVudCwgZGlzcGxheUVmZmVjdHNPbkVybFZhbHVlcyk7XG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn07XG5cbnZhciBoYXNQcm9jZXNzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbnZhciBoYXNQcm9jZXNzV2VicGFja1NoaW0gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuKHByb2Nlc3MudGl0bGUgPT09ICdicm93c2VyJyAmJiBwcm9jZXNzLmJyb3dzZXIpO1xufVxuXG52YXIgaXNOb2RlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBoYXNQcm9jZXNzKCkgJiYgIWhhc1Byb2Nlc3NXZWJwYWNrU2hpbSgpO1xufVxuXG52YXIgX3ByU3RyID0gZnVuY3Rpb24oZXJsQXJncywgc2hvdWxkQmVSZWFkYWJsZSkge1xuICByZXR1cm4gKCh0b0FycmF5KGVybEFyZ3MpKS5tYXAoZnVuY3Rpb24oZXJsQXJnKSB7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZShlcmxBcmcsIHNob3VsZEJlUmVhZGFibGUpO1xuICB9KSkuam9pbignJyk7XG59O1xuXG52YXIgX3F1aXRfID0gZnVuY3Rpb24oKSB7XG4gIGlmIChpc05vZGUoKSkge1xuICAgIHJldHVybiBwcm9jZXNzLmV4aXQoMCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIF9wclN0cihcbiAgICAgIGNyZWF0ZUVybExpc3QoXG4gICAgICAgIGNyZWF0ZUVybFN0cmluZyhcbiAgICAgICAgICBcIlxcXCInRXJsa8O2bmlnIExpc3AgQ29uc29sZScgaXMgbm90IHBlcm1pdHRlZCB0byBjbG9zZSB0aGlzIHdpbmRvdy5cXFwiXCIpKSxcbiAgICAgICAgICBmYWxzZSk7XG4gIH1cbn07XG5cbnZhciBzZXRDb3JlRWZmZWN0ZnVsRm5zT25FcmxWYWx1ZXMgPSBmdW5jdGlvbihyZXByZXNlbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGVudiwgZm5zKSB7XG4gICAgdmFyIF9yZXN1bHRzID0gW107XG4gICAgZm9yICh2YXIgZm5OYW1lIGluIGZucykge1xuICAgICAgaWYgKCFfX2hhc1Byb3AuY2FsbChmbnMsIGZuTmFtZSkpIGNvbnRpbnVlO1xuICAgICAgdmFyIGZuID0gZm5zW2ZuTmFtZV07XG4gICAgICBfcmVzdWx0cy5wdXNoKGVudltmbk5hbWVdID1cbiAgICAgICAgY3JlYXRlRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uKGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgICAgICAgICByZXR1cm4gcmVwcmVzZW50KGZuKGVybEFyZ3MpKTtcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICByZXR1cm4gX3Jlc3VsdHM7XG4gIH07XG59O1xuXG52YXIgZGlzcGxheUVmZmVjdHNPbkVybFZhbHVlcyA9IHtcbiAgJ3ByaW50JzogZnVuY3Rpb24oZXJsQXJncykge1xuICAgIHJldHVybiBfcHJTdHIoZXJsQXJncywgZmFsc2UpO1xuICB9LFxuICAncHJldHR5LXByaW50JzogZnVuY3Rpb24oZXJsQXJncykge1xuICAgIHJldHVybiBfcHJTdHIoZXJsQXJncywgdHJ1ZSk7XG4gIH0sXG4gICctcXVpdC0nOiBfcXVpdF8sXG59O1xuXG5leHBvcnQgeyBnZXRFbnZpcm9ubWVudCB9O1xuIiwiaW1wb3J0IHsgY2FyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxTeW1ib2wgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGV4dHJhY3RKc1ZhbHVlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBmcm9tQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGZyb21FcmxJbmRleCB9IGZyb20gJy4vaW5kZXgtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTGlzdCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgX3Byb2Nlc3MgfSBmcm9tICcuL19wcm9jZXNzJztcbmltcG9ydCB7IHRvQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHRva2VuaXplQW5kUGFyc2UgfSBmcm9tICcuL3Rva2VuaXplQW5kUGFyc2UnO1xuaW1wb3J0IHsgdG9QYXJ0aWFsQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcblxudmFyIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG52YXIgZ2V0RW52aXJvbm1lbnQgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgdmFyIGVudmlyb25tZW50ID0gY29uZmlnLmVudmlyb25tZW50O1xuICB2YXIgcGFyc2UgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gICAgcmV0dXJuIHRva2VuaXplQW5kUGFyc2Uoc3RyaXBRdW90ZXMoZXh0cmFjdEpzVmFsdWUoY2FyKGVybEFyZ3MpKSkpO1xuICB9O1xuICB2YXIgZnVuY3Rpb25zT25FcmxWYWx1ZXMgPSB7IHBhcnNlOiBwYXJzZSB9O1xuICBzZXRDb3JlRm5zT25FcmxWYWx1ZXMoZW52aXJvbm1lbnQsIGZ1bmN0aW9uc09uRXJsVmFsdWVzKTtcbiAgcmV0dXJuIGVudmlyb25tZW50O1xufTtcblxudmFyIF9wcm9jZXNzXyA9IF9wcm9jZXNzKGZ1bmN0aW9uKGVybFZhbCkge1xuICByZXR1cm4gZXJsVmFsO1xufSk7XG5cbnZhciBzZXRDb3JlRm5zT25FcmxWYWx1ZXMgPSBmdW5jdGlvbihlbnYsIGZucykge1xuICB2YXIgX3Jlc3VsdHMgPSBbXTtcbiAgZm9yICh2YXIgZm5OYW1lIGluIGZucykge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoZm5zLCBmbk5hbWUpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIGZuID0gZm5zW2ZuTmFtZV07XG4gICAgX3Jlc3VsdHMucHVzaChlbnZbZm5OYW1lXSA9IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24oZm4pKTtcbiAgfVxuICByZXR1cm4gX3Jlc3VsdHM7XG59O1xuXG52YXIgc3RyaXBRdW90ZXMgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4ganNTdHJpbmcuc2xpY2UoMSwgLTEpO1xufTtcblxuZXhwb3J0IHsgZ2V0RW52aXJvbm1lbnQgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGVybE5pbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXh0cmFjdEpzVmFsdWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGZyb21FcmxJbmRleCB9IGZyb20gJy4vaW5kZXgtdXRpbGl0aWVzJztcbmltcG9ydCB7IF9wcm9jZXNzIH0gZnJvbSAnLi9fcHJvY2Vzcyc7XG5pbXBvcnQgeyB0b1BhcnRpYWxBcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuXG52YXIgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbnZhciBnZXRFbnZpcm9ubWVudCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICB2YXIgZW52aXJvbm1lbnQgPSBjb25maWcuZW52aXJvbm1lbnQ7XG4gIHZhciBmdW5jdGlvbnNPbkVybFZhbHVlcyA9IHtcbiAgICAnbG9hZCc6IGxvYWQsXG4gICAgJ2xvYWQtd2l0aC1lbnYnOiBsb2FkV2l0aEVudixcbiAgICAnbG9hZC13aXRoLWJhcmUtZW52JzogbG9hZFdpdGhCYXJlRW52XG4gIH07XG4gIHNldENvcmVGbnNPbkVybFZhbHVlcyhlbnZpcm9ubWVudCwgZnVuY3Rpb25zT25FcmxWYWx1ZXMpO1xuICByZXR1cm4gZW52aXJvbm1lbnQ7XG59O1xuXG52YXIgZ2V0X2pzRmlsZU5hbWVfYW5kX2xvY2FsRW52ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIHZhciBlcmxGaWxlTmFtZSA9IHBhcnRpYWxBcnJheVswXTtcbiAgdmFyIGxvY2FsRW52ID0gcGFydGlhbEFycmF5WzFdO1xuICB2YXIganNGaWxlTmFtZSA9IHN0cmlwUXVvdGVzKGV4dHJhY3RKc1ZhbHVlKGVybEZpbGVOYW1lKSk7XG4gIHJldHVybiBbanNGaWxlTmFtZSwgbG9jYWxFbnZdO1xufTtcblxudmFyIGhhc1Byb2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJztcbn1cblxudmFyIGhhc1Byb2Nlc3NXZWJwYWNrU2hpbSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ocHJvY2Vzcy50aXRsZSA9PT0gJ2Jyb3dzZXInICYmIHByb2Nlc3MuYnJvd3Nlcik7XG59XG5cbnZhciBpc05vZGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGhhc1Byb2Nlc3MoKSAmJiAhaGFzUHJvY2Vzc1dlYnBhY2tTaGltKCk7XG59XG5cbnZhciBsb2FkID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBpZiAoaXNOb2RlKCkpIHtcbiAgICByZXR1cm4gX3Byb2Nlc3NfKF9yZWFkKGVybEFyZ3MpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG52YXIgbG9hZFdpdGhCYXJlRW52ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBpZiAoaXNOb2RlKCkpIHtcbiAgICB2YXIgdGVtcCA9IGdldF9qc0ZpbGVOYW1lX2FuZF9sb2NhbEVudihlcmxBcmdzKTtcbiAgICB2YXIganNGaWxlTmFtZSA9IHRlbXBbMF07XG4gICAgdmFyIGxvY2FsRW52ID0gdGVtcFsxXTtcbiAgICByZXR1cm4gX3Byb2Nlc3NGaWxlQW5kRW52KFxuICAgICAgcmVhZEZpbGUoanNGaWxlTmFtZSksXG4gICAgICBbZnJvbUVybEluZGV4KGxvY2FsRW52KV0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbnZhciBsb2FkV2l0aEVudiA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgaWYgKGlzTm9kZSgpKSB7XG4gICAgdmFyIHRlbXAgPSBnZXRfanNGaWxlTmFtZV9hbmRfbG9jYWxFbnYoZXJsQXJncyk7XG4gICAgdmFyIGpzRmlsZU5hbWUgPSB0ZW1wWzBdO1xuICAgIHZhciBsb2NhbEVudiA9IHRlbXBbMV07XG4gICAgcmV0dXJuIF9wcm9jZXNzRmlsZUFuZEVudihcbiAgICAgIHJlYWRGaWxlKGpzRmlsZU5hbWUpLFxuICAgICAgW2Zyb21FcmxJbmRleChsb2NhbEVudiksIGVudmlyb25tZW50XSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxudmFyIF9wcm9jZXNzXyA9IGZ1bmN0aW9uKGpzU3RyaW5nKSB7XG4gIHJldHVybiBfcHJvY2VzcyhbZW52aXJvbm1lbnRdKShqc1N0cmluZyk7XG59O1xuXG52YXIgX3Byb2Nlc3NGaWxlQW5kRW52ID0gZnVuY3Rpb24oZmlsZSwgZW52U3RhY2spIHtcbiAgcmV0dXJuIF9wcm9jZXNzKGVudlN0YWNrKShmaWxlKTtcbn07XG5cbnZhciBfcmVhZCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIGpzRmlsZU5hbWUgPSBnZXRfanNGaWxlTmFtZV9hbmRfbG9jYWxFbnYoZXJsQXJncylbMF07XG4gIHJldHVybiByZWFkRmlsZShqc0ZpbGVOYW1lKTtcbn07XG5cbnZhciByZWFkRmlsZSA9IGZ1bmN0aW9uKGpzRmlsZU5hbWUpIHtcbiAgLy9yZXR1cm4gcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoanNGaWxlTmFtZSkudG9TdHJpbmcoKTtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG52YXIgc2V0Q29yZUZuc09uRXJsVmFsdWVzID0gZnVuY3Rpb24oZW52LCBmbnMpIHtcbiAgdmFyIF9yZXN1bHRzID0gW107XG4gIGZvciAodmFyIGZuTmFtZSBpbiBmbnMpIHtcbiAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGZucywgZm5OYW1lKSkgY29udGludWU7XG4gICAgdmFyIGZuID0gZm5zW2ZuTmFtZV07XG4gICAgX3Jlc3VsdHMucHVzaChlbnZbZm5OYW1lXSA9IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24oZm4pKTtcbiAgfVxuICByZXR1cm4gX3Jlc3VsdHM7XG59O1xuXG52YXIgc3RyaXBRdW90ZXMgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4ganNTdHJpbmcuc2xpY2UoMSwgLTEpO1xufTtcblxuZXhwb3J0IHsgZ2V0RW52aXJvbm1lbnQgfTtcbiIsImltcG9ydCB7IGFkZEVudiB9IGZyb20gJy4vZW52LXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjYXIgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGNhdGNoU3RhciB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGNkciB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgY2lyY3VtcGVuZFF1b3RlcyB9IGZyb20gJy4vanMtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNvbW1lbnRTaWduYWwgfSBmcm9tICcuL2NvbW1lbnRTaWduYWwnO1xuaW1wb3J0IHsgY3JlYXRlRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybEtleXdvcmQgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybExpc3QgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybE1hY3JvIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxOdW1iZXIgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3ltYm9sIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxVc2VyUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBkZWZCYW5nIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgX2RvIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgZXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBfZXZhbCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IF9ldmFsV2l0aEVudiB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGV4cGFuZE1hY3JvIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgZXh0cmFjdEpzVmFsdWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgZm5TdGFyIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgZnJvbUFycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBmcm9tRXJsSW5kZXggfSBmcm9tICcuL2luZGV4LXV0aWxpdGllcyc7XG5pbXBvcnQgeyBmcm9tSnNPYmplY3RzIH0gZnJvbSAnLi9pbmRleC11dGlsaXRpZXMnO1xuaW1wb3J0IHsgX2dldEN1cnJlbnRFbnYgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBfZ2V0RGVmYXVsdEVudiB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IF9pZiB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGlzRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsSWdub3JlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybEluZGV4IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybEtleXdvcmQgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTGlzdCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxNYWNybyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxTeW1ib2wgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsVXNlclB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNKc1N0cmluZyB9IGZyb20gJy4vanMtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzS2V5d29yZCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGxldFN0YXIgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBsZXRyZWNTdGFyIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbG9va3VwIH0gZnJvbSAnLi9lbnYtdXRpbGl0aWVzJztcbmltcG9ydCB7IG1hY3JvU3RhciB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgbmV4dCB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgcXVhc2lxdW90ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHF1b3RlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgc3BsaWNlVW5xdW90ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHVucXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyByZWN1cnNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyByZWR1Y2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHJlZHVjZUJ5MiB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgcmV2ZXJzZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgc2V0TWFpbkVudiB9IGZyb20gJy4vZW52LXV0aWxpdGllcyc7XG5pbXBvcnQgeyBzcGxhdCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHRvUGFydGlhbEFycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyB0cnlTdGFyIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgdW5kZWZCYW5nIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgdW5zZXRNYWluRW52IH0gZnJvbSAnLi9lbnYtdXRpbGl0aWVzJztcblxudmFyIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG52YXIgY3JlYXRlRm4gPSBmdW5jdGlvbihlcmxMaXN0LCBlbnZzKSB7XG4gIHJldHVybiBjcmVhdGVFcmxVc2VyUHVyZUZ1bmN0aW9uKHtcbiAgICBsb2NhbEVudnM6IGVudnMuc2xpY2UoMCksXG4gICAgZXJsRXhwcmVzc2lvbjogbmV4dChlcmxMaXN0KSxcbiAgICBlcmxQYXJhbWV0ZXJzOiBjYXIoZXJsTGlzdClcbiAgfSk7XG59O1xuXG52YXIgY3JlYXRlTG9jYWxFbnYgPSBmdW5jdGlvbihlcmxQYXJhbXMsIGVybEFyZ3MpIHtcbiAgdmFyIGVudiA9IHt9O1xuICB3aGlsZSAoIWlzRW1wdHkoZXJsUGFyYW1zKSkge1xuICAgIHZhciBqc1BhcmFtID0gZXh0cmFjdEpzVmFsdWUoY2FyKGVybFBhcmFtcykpO1xuICAgIGlmIChqc1BhcmFtID09PSBzcGxhdCkge1xuICAgICAgZW52W2V4dHJhY3RKc1ZhbHVlKG5leHQoZXJsUGFyYW1zKSldID0gZXJsQXJncztcbiAgICAgIHJldHVybiBlbnY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudltqc1BhcmFtXSA9IGNhcihlcmxBcmdzKTtcbiAgICAgIGVybFBhcmFtcyA9IGNkcihlcmxQYXJhbXMpO1xuICAgICAgZXJsQXJncyA9IGNkcihlcmxBcmdzKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVudjtcbn07XG5cbnZhciBjcmVhdGVNYWNybyA9IGZ1bmN0aW9uKGVybExpc3QsIGVudnMpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybE1hY3JvKHtcbiAgICBsb2NhbEVudnM6IGVudnMuc2xpY2UoMCksXG4gICAgZXJsRXhwcmVzc2lvbjogbmV4dChlcmxMaXN0KSxcbiAgICBlcmxQYXJhbWV0ZXJzOiBjYXIoZXJsTGlzdClcbiAgfSk7XG59O1xuXG52YXIgZGVmaW5lTmV3VmFsdWUgPSBmdW5jdGlvbihlcmxMaXN0LCBlbnZzLCBhZGRSZXN1bHQpIHtcbiAgdmFyIGpzS2V5ID0gZXh0cmFjdEpzVmFsdWUoY2FyKGVybExpc3QpKTtcbiAgdmFyIGVybFZhbHVlID0gX2V2YWx1YXRlKG5leHQoZXJsTGlzdCksIGVudnMsIGFkZFJlc3VsdCk7XG4gIHJldHVybiBzZXRNYWluRW52KGVudnMsIGpzS2V5LCBlcmxWYWx1ZSk7XG59O1xuXG52YXIgZXZhbFF1YXNpcXVvdGVkRXhwciA9IGZ1bmN0aW9uKGV4cHIsIGVudnMsIGFkZFJlc3VsdCkge1xuICBpZiAoIWlzRXJsTGlzdChleHByKSkge1xuICAgIHJldHVybiBleHByO1xuICB9XG4gIHZhciBtYW5hZ2VJdGVtID0gZnVuY3Rpb24obWVtbywgaXRlbSkge1xuICAgIGlmICh1bnF1b3RlZEV4cHIoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVybExpc3QoX2V2YWx1YXRlKG5leHQoaXRlbSksIGVudnMsIGFkZFJlc3VsdCksIG1lbW8pO1xuICAgIH0gZWxzZSBpZiAoc3BsaWNlVW5xdW90ZWRFeHByKGl0ZW0pKSB7XG4gICAgICAgIHZhciBfbWFuYWdlSXRlbSA9IGZ1bmN0aW9uKF9tZW1vLCBfaXRlbSkge1xuICAgICAgICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KF9pdGVtLCBfbWVtbyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZWR1Y2UobWVtbywgX21hbmFnZUl0ZW0sIF9ldmFsdWF0ZShuZXh0KGl0ZW0pLCBlbnZzLCBhZGRSZXN1bHQpKTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsTGlzdChpdGVtKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRXJsTGlzdChldmFsUXVhc2lxdW90ZWRFeHByKGl0ZW0sIGVudnMsIGFkZFJlc3VsdCksIG1lbW8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KGl0ZW0sIG1lbW8pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHJldmVyc2UocmVkdWNlKGNyZWF0ZUVybExpc3QoKSwgbWFuYWdlSXRlbSwgZXhwcikpO1xufTtcblxudmFyIF9ldmFsdWF0ZSA9IGZ1bmN0aW9uKGVybEV4cHIsIGVudnMsIGFkZFJlc3VsdCkge1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIGlmIChpc0VybFN5bWJvbChlcmxFeHByKSkge1xuICAgICAgdmFyIGpzU3RyaW5nID0gZXh0cmFjdEpzVmFsdWUoZXJsRXhwcik7XG4gICAgICBpZiAoaXNLZXl3b3JkKGpzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRXJsS2V5d29yZChqc1N0cmluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9va3VwKGVudnMsIGpzU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzRXJsSW5kZXgoZXJsRXhwcikpIHtcbiAgICAgIHZhciBpbmRleCA9IGV4dHJhY3RKc1ZhbHVlKGVybEV4cHIpO1xuICAgICAgdmFyIG5ld0luZGV4ID0ge307XG4gICAgICBmb3IgKHZhciBrZXkgaW4gaW5kZXgpIHtcbiAgICAgICAgaWYgKCFfX2hhc1Byb3AuY2FsbChpbmRleCwga2V5KSkgY29udGludWU7XG4gICAgICAgIG5ld0luZGV4W2tleV0gPSBfZXZhbHVhdGUoaW5kZXhba2V5XSwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjcmVhdGVFcmxJbmRleChuZXdJbmRleCk7XG4gICAgfSBlbHNlIGlmICghKGlzRXJsTGlzdChlcmxFeHByKSkpIHtcbiAgICAgIHJldHVybiBlcmxFeHByO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcmxFeHByID0gZmlsdGVyKChmdW5jdGlvbih4KSB7XG4gICAgICAgIHJldHVybiAhKGlnbm9yYWJsZSh4LCBlbnZzLCBhZGRSZXN1bHQpKTtcbiAgICAgIH0pLCBlcmxFeHByKTtcbiAgICAgIHZhciBlcmxFeHByQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxFeHByKTtcbiAgICAgIHZhciBoZWFkID0gZXJsRXhwckFycmF5WzBdO1xuICAgICAgdmFyIGFyZzEgPSBlcmxFeHByQXJyYXlbMV07XG4gICAgICB2YXIgcmVtYWluaW5nQXJncyA9IGVybEV4cHJBcnJheVsyXTtcbiAgICAgIHZhciB0YWlsTGlzdCA9IGNkcihlcmxFeHByKTtcbiAgICAgIHN3aXRjaCAoZXh0cmFjdEpzVmFsdWUoaGVhZCkpIHtcbiAgICAgICAgY2FzZSBkZWZCYW5nOlxuICAgICAgICAgIHJldHVybiBkZWZpbmVOZXdWYWx1ZSh0YWlsTGlzdCwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgY2FzZSB1bmRlZkJhbmc6XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lVmFsdWUodGFpbExpc3QsIGVudnMpO1xuICAgICAgICBjYXNlIF9ldmFsOlxuICAgICAgICAgIGVybEV4cHIgPSBfZXZhbHVhdGUoYXJnMSwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBfZXZhbFdpdGhFbnY6XG4gICAgICAgICAgZW52cyA9IFtmcm9tRXJsSW5kZXgoX2V2YWx1YXRlKGFyZzEsIGVudnMsIGFkZFJlc3VsdCkpXTtcbiAgICAgICAgICBlcmxFeHByID0gX2V2YWx1YXRlKGNhcihyZW1haW5pbmdBcmdzKSwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsZXRTdGFyOlxuICAgICAgICAgIGVybEV4cHIgPSBjYXIocmVtYWluaW5nQXJncyk7XG4gICAgICAgICAgZW52cyA9IGFkZEVudihlbnZzLCByZWR1Y2VMZXQoZW52cywgYXJnMSwgYWRkUmVzdWx0KSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGV0cmVjU3RhcjpcbiAgICAgICAgICBlcmxFeHByID0gY2FyKHJlbWFpbmluZ0FyZ3MpO1xuICAgICAgICAgIGVudnMgPSBhZGRFbnYoZW52cywgcmVkdWNlTGV0cmVjKGVudnMsIGFyZzEsIGFkZFJlc3VsdCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIF9kbzpcbiAgICAgICAgICByZXR1cm4gZm9yRWFjaChldmFsdWF0ZShlbnZzLCBhZGRSZXN1bHQpLCB0YWlsTGlzdCk7XG4gICAgICAgIGNhc2UgX2dldEN1cnJlbnRFbnY6XG4gICAgICAgICAgcmV0dXJuIGZyb21Kc09iamVjdHMuYXBwbHkobnVsbCwgZW52cy5yZXZlcnNlKCkpO1xuICAgICAgICBjYXNlIF9nZXREZWZhdWx0RW52OlxuICAgICAgICAgIHJldHVybiBmcm9tSnNPYmplY3RzKGVudnNbZW52cy5sZW5ndGggLSAxXSk7XG4gICAgICAgIGNhc2UgX2lmOlxuICAgICAgICAgIGlmIChleHRyYWN0SnNWYWx1ZShfZXZhbHVhdGUoYXJnMSwgZW52cywgYWRkUmVzdWx0KSkpIHtcbiAgICAgICAgICAgIGVybEV4cHIgPSBjYXIocmVtYWluaW5nQXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIG90aGVyd2lzZSA9IG5leHQocmVtYWluaW5nQXJncyk7XG4gICAgICAgICAgaWYgKGlzRW1wdHkob3RoZXJ3aXNlKSkge1xuICAgICAgICAgICAgZXJsRXhwciA9IGVybE5pbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJsRXhwciA9IG90aGVyd2lzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZm5TdGFyOlxuICAgICAgICAgIHJldHVybiBjcmVhdGVGbih0YWlsTGlzdCwgZW52cyk7XG4gICAgICAgIGNhc2UgbWFjcm9TdGFyOlxuICAgICAgICAgIHJldHVybiBjcmVhdGVNYWNybyh0YWlsTGlzdCwgZW52cyk7XG4gICAgICAgIGNhc2UgcXVvdGU6XG4gICAgICAgICAgcmV0dXJuIGNhcih0YWlsTGlzdCk7XG4gICAgICAgIGNhc2UgcXVhc2lxdW90ZTpcbiAgICAgICAgICByZXR1cm4gZXZhbFF1YXNpcXVvdGVkRXhwcihjYXIodGFpbExpc3QpLCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICBjYXNlIGV4cGFuZE1hY3JvOlxuICAgICAgICAgIHJldHVybiBleHBhbmRNYWNybyhjYXIoYXJnMSksIGNkcihhcmcxKSwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgY2FzZSB0cnlTdGFyOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gX2V2YWx1YXRlKGFyZzEsIGVudnMsIGFkZFJlc3VsdCk7XG4gICAgICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICAgICAgICB2YXIgZXggPSBfZXJyb3I7XG4gICAgICAgICAgICBpZiAoaXNFbXB0eShyZW1haW5pbmdBcmdzKSkge1xuICAgICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhciByZW1haW5pbmdBcmdzQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgzLCBjYXIocmVtYWluaW5nQXJncykpO1xuICAgICAgICAgICAgICB2YXIgX2NhdGNoID0gcmVtYWluaW5nQXJnc0FycmF5WzBdO1xuICAgICAgICAgICAgICB2YXIgX2V4ID0gcmVtYWluaW5nQXJnc0FycmF5WzFdO1xuICAgICAgICAgICAgICB2YXIgY2F0Y2hFeHByID0gcmVtYWluaW5nQXJnc0FycmF5WzJdO1xuICAgICAgICAgICAgICBpZiAoKGV4dHJhY3RKc1ZhbHVlKF9jYXRjaCkpICE9PSBcImNhdGNoKlwiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGV4IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBleCA9IGNyZWF0ZUVybFN0cmluZyhjaXJjdW1wZW5kUXVvdGVzKGV4Lm1lc3NhZ2UpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgbmV3RW52ID0ge307XG4gICAgICAgICAgICAgIG5ld0VudltleHRyYWN0SnNWYWx1ZShfZXgpXSA9IGV4O1xuICAgICAgICAgICAgICByZXR1cm4gX2V2YWx1YXRlKGNhdGNoRXhwciwgYWRkRW52KGVudnMsIG5ld0VudiksIGFkZFJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHZhciBlcmxTeW1ib2wgPSBoZWFkO1xuICAgICAgICAgIGVybEV4cHIgPSB0YWlsTGlzdDtcbiAgICAgICAgICB2YXIgZXJsSW52b2thYmxlID0gX2V2YWx1YXRlKGVybFN5bWJvbCwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgICBpZiAoaXNFcmxLZXl3b3JkKGVybEludm9rYWJsZSkpIHtcbiAgICAgICAgICAgIGVybEV4cHIgPSBjcmVhdGVFcmxMaXN0KGVybEludm9rYWJsZSwgdGFpbExpc3QpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNFcmxNYWNybyhlcmxJbnZva2FibGUpKSB7XG4gICAgICAgICAgICBlcmxFeHByID0gZXhwYW5kTWFjcm8oaGVhZCwgdGFpbExpc3QsIGVudnMsIGFkZFJlc3VsdCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0VybENvcmVQdXJlRnVuY3Rpb24oZXJsSW52b2thYmxlKSkge1xuICAgICAgICAgICAgdmFyIGZuID0gZXh0cmFjdEpzVmFsdWUoZXJsSW52b2thYmxlKTtcbiAgICAgICAgICAgIHZhciBlcmxBcmdzID0gbWFwKGV2YWx1YXRlKGVudnMsIGFkZFJlc3VsdCksIGVybEV4cHIpO1xuICAgICAgICAgICAgcmV0dXJuIGZuKGVybEFyZ3MpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24oZXJsSW52b2thYmxlKSkge1xuICAgICAgICAgICAgdmFyIGZuID0gZXh0cmFjdEpzVmFsdWUoZXJsSW52b2thYmxlKTtcbiAgICAgICAgICAgIHZhciBlcmxBcmdzID0gbWFwKGV2YWx1YXRlKGVudnMsIGFkZFJlc3VsdCksIGVybEV4cHIpO1xuICAgICAgICAgICAgYWRkUmVzdWx0KGZuKGVybEFyZ3MpKTtcbiAgICAgICAgICAgIHJldHVybiBlcmxOaWw7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0VybFVzZXJQdXJlRnVuY3Rpb24oZXJsSW52b2thYmxlKSkge1xuICAgICAgICAgICAgdmFyIGpzVmFsdWUgPSBleHRyYWN0SnNWYWx1ZShlcmxJbnZva2FibGUpO1xuICAgICAgICAgICAgdmFyIGxvY2FsRW52cyA9IGpzVmFsdWUubG9jYWxFbnZzO1xuICAgICAgICAgICAgdmFyIGVybEV4cHJlc3Npb24gPSBqc1ZhbHVlLmVybEV4cHJlc3Npb247XG4gICAgICAgICAgICB2YXIgZXJsUGFyYW1ldGVycyA9IGpzVmFsdWUuZXJsUGFyYW1ldGVycztcbiAgICAgICAgICAgIHZhciBlcmxBcmdzID0gbWFwKGV2YWx1YXRlKGVudnMsIGFkZFJlc3VsdCksIGVybEV4cHIpO1xuICAgICAgICAgICAgZXJsRXhwciA9IGVybEV4cHJlc3Npb247XG4gICAgICAgICAgICB2YXIgbmV3RW52ID0gY3JlYXRlTG9jYWxFbnYoZXJsUGFyYW1ldGVycywgZXJsQXJncyk7XG4gICAgICAgICAgICBlbnZzID0gYWRkRW52KGxvY2FsRW52cywgbmV3RW52KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgXCJcIlxuICAgICAgICAgICAgICArIChleHRyYWN0SnNWYWx1ZShlcmxTeW1ib2wpKVxuICAgICAgICAgICAgICArIFwiIGRvZXMgbm90IGV2YWx1YXRlIHRvIGEgZnVuY3Rpb24sIG1hY3JvLCBvciBrZXl3b3JkLlwiO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbnZhciBldmFsdWF0ZSA9IGZ1bmN0aW9uKGVudnMsIGFkZFJlc3VsdCkge1xuICByZXR1cm4gZnVuY3Rpb24oZXJsRXhwcikge1xuICAgIGlmIChlcmxFeHByID09PSBjb21tZW50U2lnbmFsKSB7XG4gICAgICByZXR1cm4gY29tbWVudFNpZ25hbDtcbiAgICB9XG4gICAgcmV0dXJuIF9ldmFsdWF0ZShlcmxFeHByLCBlbnZzLCBhZGRSZXN1bHQpO1xuICB9O1xufTtcblxudmFyIGV4cGFuZE1hY3JvID0gZnVuY3Rpb24oZXJsTWFjcm9TeW1ib2wsIGVybEFyZ3MsIGVudnMsIGFkZFJlc3VsdCkge1xuICB2YXIgZXJsTWFjcm8gPSBfZXZhbHVhdGUoZXJsTWFjcm9TeW1ib2wsIGVudnMsIGFkZFJlc3VsdCk7XG4gIHZhciBqc1ZhbHVlID0gZXh0cmFjdEpzVmFsdWUoZXJsTWFjcm8pO1xuICB2YXIgbG9jYWxFbnZzID0ganNWYWx1ZS5sb2NhbEVudnM7XG4gIHZhciBlcmxFeHByZXNzaW9uID0ganNWYWx1ZS5lcmxFeHByZXNzaW9uO1xuICB2YXIgZXJsUGFyYW1ldGVycyA9IGpzVmFsdWUuZXJsUGFyYW1ldGVycztcbiAgdmFyIG5ld0VudiA9IGNyZWF0ZUxvY2FsRW52KGVybFBhcmFtZXRlcnMsIGVybEFyZ3MpO1xuICB2YXIgbmV3RW52U3RhY2sgPSBhZGRFbnYobG9jYWxFbnZzLCBuZXdFbnYpO1xuICByZXR1cm4gX2V2YWx1YXRlKGVybEV4cHJlc3Npb24sIG5ld0VudlN0YWNrLCBhZGRSZXN1bHQpO1xufTtcblxudmFyIGlnbm9yYWJsZSA9IGZ1bmN0aW9uKGVybFZhbCwgZW52cywgYWRkUmVzdWx0KSB7XG4gIGlmIChpc0VybElnbm9yZShlcmxWYWwpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKCFpc0VybExpc3QoZXJsVmFsKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgc3ltYm9sID0gY2FyKGVybFZhbCk7XG4gIGlmICghaXNFcmxTeW1ib2woc3ltYm9sKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIganNTdHJpbmcgPSBleHRyYWN0SnNWYWx1ZShzeW1ib2wpO1xuICBpZiAoanNTdHJpbmcgPT09ICdpZ25vcmUnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGpzU3RyaW5nID09PSAnaWdub3JlSWZUcnVlJykge1xuICAgIHJldHVybiBleHRyYWN0SnNWYWx1ZShfZXZhbHVhdGUobmV4dChlcmxWYWwpLCBlbnZzLCBhZGRSZXN1bHQpKTtcbiAgfVxuICBpZiAoanNTdHJpbmcgPT09ICdpZ25vcmVVbmxlc3NUcnVlJykge1xuICAgIHJldHVybiAhZXh0cmFjdEpzVmFsdWUoX2V2YWx1YXRlKG5leHQoZXJsVmFsKSwgZW52cywgYWRkUmVzdWx0KSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIHJlZHVjZUxldCA9IGZ1bmN0aW9uKGVudnMsIGxpc3QsIGFkZFJlc3VsdCkge1xuICB2YXIgbmV3RW52ID0ge307XG4gIHZhciBfZW52cyA9IGFkZEVudihlbnZzLCBuZXdFbnYpO1xuICB3aGlsZSAoIWlzRW1wdHkobGlzdCkpIHtcbiAgICB2YXIganNLZXkgPSBleHRyYWN0SnNWYWx1ZShsaXN0LnZhbHVlKTtcbiAgICBsaXN0ID0gcmVjdXJzZShsaXN0KTtcbiAgICB2YXIgZW52VmFsdWUgPSBfZXZhbHVhdGUobGlzdC52YWx1ZSwgX2VudnMsIGFkZFJlc3VsdCk7XG4gICAgbmV3RW52W2pzS2V5XSA9IGVudlZhbHVlO1xuICAgIGxpc3QgPSByZWN1cnNlKGxpc3QpO1xuICB9XG4gIHJldHVybiBuZXdFbnY7XG59O1xuXG52YXIgcmVkdWNlTGV0cmVjID0gZnVuY3Rpb24oZW52cywgbGlzdCwgYWRkUmVzdWx0KSB7XG4gIHZhciBuZXdFbnYgPSB7fTtcbiAgdmFyIF9lbnZzID0gYWRkRW52KGVudnMsIG5ld0Vudik7XG4gIHdoaWxlICghaXNFbXB0eShsaXN0KSkge1xuICAgIHZhciBqc0tleSA9IGV4dHJhY3RKc1ZhbHVlKGxpc3QudmFsdWUpO1xuICAgIGxpc3QgPSByZWN1cnNlKGxpc3QpO1xuICAgIHZhciBfZXJsRXhwciA9IGZyb21BcnJheShcbiAgICAgIFsgIGNyZWF0ZUVybFN5bWJvbChcImZpeCpcIiksXG4gICAgICAgICBmcm9tQXJyYXkoW2NyZWF0ZUVybFN5bWJvbChcImZuKlwiKSxcbiAgICAgICAgIGZyb21BcnJheShbanNLZXldKSxcbiAgICAgICAgIGxpc3QudmFsdWVdKVxuICAgICAgXSk7XG4gICAgdmFyIGVudlZhbHVlID0gX2V2YWx1YXRlKF9lcmxFeHByLCBfZW52cywgYWRkUmVzdWx0KTtcbiAgICBuZXdFbnZbanNLZXldID0gZW52VmFsdWU7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gIH1cbiAgcmV0dXJuIG5ld0Vudjtcbn07XG5cbnZhciBzcGxpY2VVbnF1b3RlID0gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgcmV0dXJuIHNwbGljZVVucXVvdGUgPT09IChleHRyYWN0SnNWYWx1ZShlcmxWYWx1ZSkpO1xufTtcblxudmFyIHNwbGljZVVucXVvdGVkRXhwciA9IGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gIHJldHVybiBpc0VybExpc3QoZXJsVmFsdWUpICYmIChzcGxpY2VVbnF1b3RlKGNhcihlcmxWYWx1ZSkpKTtcbn07XG5cbnZhciB1bmRlZmluZVZhbHVlID0gZnVuY3Rpb24oZXJsTGlzdCwgZW52cykge1xuICB2YXIganNLZXkgPSBleHRyYWN0SnNWYWx1ZShjYXIoZXJsTGlzdCkpO1xuICByZXR1cm4gdW5zZXRNYWluRW52KGVudnMsIGpzS2V5KTtcbn07XG5cbnZhciB1bnF1b3RlID0gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgcmV0dXJuIHVucXVvdGUgPT09IChleHRyYWN0SnNWYWx1ZShlcmxWYWx1ZSkpO1xufTtcblxudmFyIHVucXVvdGVkRXhwciA9IGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gIHJldHVybiBpc0VybExpc3QoZXJsVmFsdWUpICYmICh1bnF1b3RlKGNhcihlcmxWYWx1ZSkpKTtcbn07XG5cbmV4cG9ydCB7IGV2YWx1YXRlIH07XG4iLCJpbXBvcnQgeyBnZXRFbnZpcm9ubWVudCBhcyBzZXRFbnYwIH0gZnJvbSAnLi9lbnYwJztcbmltcG9ydCB7IGdldEVudmlyb25tZW50IGFzIHNldEVudjEgfSBmcm9tICcuL2VudjEnO1xuaW1wb3J0IHsgZ2V0RW52aXJvbm1lbnQgYXMgc2V0RW52MiB9IGZyb20gJy4vZW52Mic7XG5pbXBvcnQgeyBnZXRFbnZpcm9ubWVudCBhcyBzZXRFbnYzIH0gZnJvbSAnLi9lbnYzJztcbmltcG9ydCB7IGdldEVudmlyb25tZW50IGFzIHNldEVudjQgfSBmcm9tICcuL2VudjQnO1xuXG52YXIgZ2V0TGlzcEVudmlyb25tZW50ID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gIHZhciBkaXNwbGF5ID0gY29uZmlnLmRpc3BsYXk7XG4gIHZhciBlbnZpcm9ubWVudCA9IHt9O1xuICBjb25maWcgPSB7XG4gICAgZGlzcGxheTogZGlzcGxheSxcbiAgICBlbnZpcm9ubWVudDogZW52aXJvbm1lbnRcbiAgfTtcbiAgc2V0RW52MChjb25maWcpO1xuICBzZXRFbnYxKGNvbmZpZyk7XG4gIHNldEVudjIoY29uZmlnKTtcbiAgc2V0RW52Myhjb25maWcpO1xuICBzZXRFbnY0KGNvbmZpZyk7XG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn07XG5cbmV4cG9ydCB7IGdldExpc3BFbnZpcm9ubWVudCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzSnNTdHJpbmcgfSBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5cbnZhciBfX3NsaWNlICAgPSBbXS5zbGljZTtcbnZhciBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGZyb21FcmxJbmRleCA9IGZ1bmN0aW9uKGVybEluZGV4KSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgdmFyIGpzVmFsdWUgPSBlcmxJbmRleC5qc1ZhbHVlO1xuICBmb3IgKHZhciBrZXkgaW4ganNWYWx1ZSkge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoanNWYWx1ZSwga2V5KSkgY29udGludWU7XG4gICAgdmFyIHZhbHVlID0ganNWYWx1ZVtrZXldO1xuICAgIGlmIChpc0pzU3RyaW5nKGtleSkpIHtcbiAgICAgIHZhciBuZXdLZXkgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHN3aXRjaCAoa2V5WzBdKSB7XG4gICAgICAgICAgY2FzZSAnOic6XG4gICAgICAgICAgICByZXR1cm4ga2V5LnNsaWNlKDEpO1xuICAgICAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgICAgIHJldHVybiBrZXkuc2xpY2UoMSwgLTEpO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICB9KSgpO1xuICAgICAgcmVzdWx0W25ld0tleV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBmcm9tSnNPYmplY3RzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBqc09iamVjdHMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICB2YXIgY29weSA9IHt9O1xuICB2YXIgbGVuID0ganNPYmplY3RzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7ICBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIganNPYmplY3QgPSBqc09iamVjdHNbaV07XG4gICAgZm9yICh2YXIga2V5IGluIGpzT2JqZWN0KSB7XG4gICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGpzT2JqZWN0LCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHZhciB2YWwgPSBqc09iamVjdFtrZXldO1xuICAgICAgaWYgKGlzSnNTdHJpbmcoa2V5KSkge1xuICAgICAgICBjb3B5Wyc6JyArIGtleV0gPSB2YWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3B5W2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjcmVhdGVFcmxJbmRleChjb3B5KTtcbn07XG5cbmV4cG9ydCB7XG4gIGZyb21Kc09iamVjdHMsXG4gIGZyb21FcmxJbmRleFxufTtcbiIsImltcG9ydCB7IGNpcmN1bXBlbmRRdW90ZXMgfSAgIGZyb20gJy4vanMtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN0cmluZyB9ICAgIGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZnJvbUFycmF5IH0gICAgICAgICAgZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBnZXRMaXNwRW52aXJvbm1lbnQgfSBmcm9tICcuL2dldExpc3BFbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBfcHJvY2VzcyB9ICAgICAgICAgICBmcm9tICcuL19wcm9jZXNzJztcbmltcG9ydCB7IHNlcmlhbGl6ZSB9ICAgICAgICAgIGZyb20gJy4vc2VyaWFsaXplJztcbmltcG9ydCBzdGFuZGFyZEZuc0FuZE1hY3JvcyAgIGZyb20gJy4vc3RhbmRhcmQtZm5zLWFuZC1tYWNyb3MubGlzcCc7XG5pbXBvcnQgeyB0b2tlbml6ZUFuZFBhcnNlIH0gICBmcm9tICcuL3Rva2VuaXplQW5kUGFyc2UnO1xuXG52YXIgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbnZhciBfY3JlYXRlRXJsU3RyaW5nID0gZnVuY3Rpb24oanNTdHJpbmcpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhjaXJjdW1wZW5kUXVvdGVzKGpzU3RyaW5nKSk7XG59O1xuXG52YXIgZW5jYXBzdWxhdGUgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBlZmZlY3Q6IHtcbiAgICAgICAgdHlwZTogdHlwZVxuICAgICAgfSxcbiAgICAgIHZhbHVlOiBlcmxWYWx1ZVxuICAgIH07XG4gIH07XG59O1xuXG52YXIgZXJyb3IgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UpIHtcbiAgcmV0dXJuIFtlbmNhcHN1bGF0ZSgnZXJyb3InKShcInJlcGwgZXJyb3I6IChcIiArIGVycm9yTWVzc2FnZSArIFwiKVwiKV07XG59O1xuXG52YXIgZmxhdHRlbklmTmVjZXNzYXJ5ID0gZnVuY3Rpb24oZWZmZWN0cykge1xuICB2YXIgdmFsdWU7XG4gIHZhciByZXN1bHQgPSBlZmZlY3RzO1xuICB3aGlsZSAocmVzdWx0Lmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KHZhbHVlID0gcmVzdWx0WzBdLnZhbHVlKSkge1xuICAgIHJlc3VsdCA9IGZsYXR0ZW5JZk5lY2Vzc2FyeSh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBfaW50ZXJwcmV0ID0gZnVuY3Rpb24oZW52cywganNTdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gX3NlcmlhbGl6ZShcbiAgICAgIGZsYXR0ZW5JZk5lY2Vzc2FyeShcbiAgICAgICAgX3Byb2Nlc3ModG9rZW5pemVBbmRQYXJzZSkoZW52cykoanNTdHJpbmcpKSk7XG4gIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgIHJldHVybiBlcnJvcihfZXJyb3IpO1xuICB9XG59O1xuXG52YXIgaW50ZXJwcmV0ID0gZnVuY3Rpb24oanNTdHJpbmcsIHVzZXJKc0FycmF5KSB7XG4gIGlmICh1c2VySnNBcnJheSAhPSBudWxsKSB7XG4gICAgdmFyIHVzZXJFbnYgPSB7XG4gICAgICAnKkFSR1YqJzogZnJvbUFycmF5KHVzZXJKc0FycmF5Lm1hcChfY3JlYXRlRXJsU3RyaW5nKSlcbiAgICB9O1xuICAgIHJldHVybiBfaW50ZXJwcmV0KFt1c2VyRW52LCBlbnZpcm9ubWVudF0sIGpzU3RyaW5nKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gX2ludGVycHJldChbZW52aXJvbm1lbnRdLCBqc1N0cmluZyk7XG4gIH1cbn07XG5cbnZhciBfc2VyaWFsaXplID0gZnVuY3Rpb24ocmVzdWx0cykge1xuICByZXR1cm4gcmVzdWx0cy5tYXAoZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgdmFyIF9yZXN1bHQgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKHJlc3VsdCwga2V5KSkgY29udGludWU7XG4gICAgICB2YXIgdmFsdWUgPSByZXN1bHRba2V5XTtcbiAgICAgIGlmIChrZXkgPT09ICdlZmZlY3QnKSB7XG4gICAgICAgIF9yZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3Jlc3VsdFtrZXldID0gc2VyaWFsaXplKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF9yZXN1bHQ7XG4gIH0pO1xufTtcblxudmFyIGVudmlyb25tZW50ID0gZ2V0TGlzcEVudmlyb25tZW50KHtcbiAgZGlzcGxheTogZW5jYXBzdWxhdGUoJ2Rpc3BsYXknKVxufSk7XG5cbmludGVycHJldChzdGFuZGFyZEZuc0FuZE1hY3Jvcyk7XG5cbmV4cG9ydCB7IGludGVycHJldCB9O1xuIiwidmFyIGNpcmN1bXBlbmRRdW90ZXMgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4gJ1wiJyArIGpzU3RyaW5nICsgJ1wiJztcbn07XG5cbnZhciBpc0pzTmFOID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiBpc0pzTnVtYmVyKHZhbCkgJiYgdmFsICE9PSB2YWw7XG59O1xuXG52YXIgaXNKc051bWJlciA9IGZ1bmN0aW9uKHZhbCkge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBOdW1iZXJdJztcbn07XG5cbnZhciBpc0pzU3RyaW5nID0gZnVuY3Rpb24oanNWYWwpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChqc1ZhbCkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufTtcblxuZXhwb3J0IHtcbiAgY2lyY3VtcGVuZFF1b3RlcyxcbiAgaXNKc05hTixcbiAgaXNKc051bWJlcixcbiAgaXNKc1N0cmluZ1xufTtcbiIsInZhciBkZXJlZiAgICAgICAgICAgICAgICAgPSAnZGVyZWYnO1xudmFyIGRlcmVmR2x5cGggICAgICAgICAgICA9ICdAJztcbnZhciBjYXRjaFN0YXIgICAgICAgICAgICAgPSAnY2F0Y2gqJztcbnZhciBkZWZCYW5nICAgICAgICAgICAgICAgPSAnZGVmISc7XG52YXIgX2RvICAgICAgICAgICAgICAgICAgID0gJ2RvJztcbnZhciBfZXZhbCAgICAgICAgICAgICAgICAgPSAnZXZhbCc7XG52YXIgX2V2YWxXaXRoRW52ICAgICAgICAgID0gJ2V2YWwtd2l0aC1lbnYnO1xudmFyIGV4cGFuZE1hY3JvICAgICAgICAgICA9ICdleHBhbmQtbWFjcm8nO1xudmFyIF9mYWxzZSAgICAgICAgICAgICAgICA9ICdmYWxzZSc7XG52YXIgZm5TdGFyICAgICAgICAgICAgICAgID0gJ2ZuKic7XG52YXIgX2dldEN1cnJlbnRFbnYgICAgICAgID0gJy1nZXQtY3VycmVudC1lbnYtJztcbnZhciBfZ2V0RGVmYXVsdEVudiAgICAgICAgPSAnLWdldC1kZWZhdWx0LWVudi0nO1xudmFyIF9pZiAgICAgICAgICAgICAgICAgICA9ICdpZic7XG52YXIgaWdub3JlQmFuZyAgICAgICAgICAgID0gJ2lnbm9yZSEnO1xudmFyIGlnbm9yZUJhbmdHbHlwaCAgICAgICA9ICcjISc7XG52YXIgaWdub3JlSWZUcnVlICAgICAgICAgID0gJ2lnbm9yZUlmVHJ1ZSc7XG52YXIgaWdub3JlSWZUcnVlR2x5cGggICAgID0gJyMtJztcbnZhciBpZ25vcmVVbmxlc3NUcnVlICAgICAgPSAnaWdub3JlVW5sZXNzVHJ1ZSc7XG52YXIgaWdub3JlVW5sZXNzVHJ1ZUdseXBoID0gJyMrJztcbnZhciBpZ25vcmUgICAgICAgICAgICAgICAgPSAnaWdub3JlJztcbnZhciBpbmRleEVuZCAgICAgICAgICAgICAgPSAnfSc7XG52YXIgaW5kZXhTdGFydCAgICAgICAgICAgID0gJ3snO1xudmFyIGxldFN0YXIgICAgICAgICAgICAgICA9ICdsZXQqJztcbnZhciBsZXRyZWNTdGFyICAgICAgICAgICAgPSAnbGV0cmVjKic7XG52YXIgbGlzdEVuZCAgICAgICAgICAgICAgID0gJyknO1xudmFyIGxpc3RTdGFydCAgICAgICAgICAgICA9ICcoJztcbnZhciBtYWNyb1N0YXIgICAgICAgICAgICAgPSAnbWFjcm8qJztcbnZhciBuaWwgICAgICAgICAgICAgICAgICAgPSAnbmlsJztcbnZhciBfcHJvY2VzcyAgICAgICAgICAgICAgPSAnLXByb2Nlc3MtJztcbnZhciBxdWFzaXF1b3RlICAgICAgICAgICAgPSAncXVhc2lxdW90ZSc7XG52YXIgcXVhc2lxdW90ZUdseXBoICAgICAgID0gJ2AnO1xudmFyIHF1b3RlICAgICAgICAgICAgICAgICA9ICdxdW90ZSc7XG52YXIgcXVvdGVHbHlwaCAgICAgICAgICAgID0gJ1xcJyc7XG52YXIgc3BsYXQgICAgICAgICAgICAgICAgID0gJyYnO1xudmFyIHNwbGljZVVucXVvdGUgICAgICAgICA9ICdzcGxpY2UtdW5xdW90ZSc7XG52YXIgc3BsaWNlVW5xdW90ZUdseXBoICAgID0gJ35AJztcbnZhciBfdHJ1ZSAgICAgICAgICAgICAgICAgPSAndHJ1ZSc7XG52YXIgdHJ5U3RhciAgICAgICAgICAgICAgID0gJ3RyeSonO1xudmFyIHVuZGVmQmFuZyAgICAgICAgICAgICA9ICd1bmRlZiEnO1xudmFyIHVucXVvdGUgICAgICAgICAgICAgICA9ICd1bnF1b3RlJztcbnZhciB1bnF1b3RlR2x5cGggICAgICAgICAgPSAnfidcblxudmFyIGtleVRva2VucyA9IFtcbiAgZGVyZWYsXG4gIGRlcmVmR2x5cGgsXG4gIGNhdGNoU3RhcixcbiAgZGVmQmFuZyxcbiAgX2RvLFxuICBfZXZhbCxcbiAgX2V2YWxXaXRoRW52LFxuICBleHBhbmRNYWNybyxcbiAgX2ZhbHNlLFxuICBmblN0YXIsXG4gIF9nZXRDdXJyZW50RW52LFxuICBfZ2V0RGVmYXVsdEVudixcbiAgX2lmLFxuICBpZ25vcmVCYW5nLFxuICBpZ25vcmVCYW5nR2x5cGgsXG4gIGlnbm9yZUlmVHJ1ZSxcbiAgaWdub3JlSWZUcnVlR2x5cGgsXG4gIGlnbm9yZVVubGVzc1RydWUsXG4gIGlnbm9yZVVubGVzc1RydWVHbHlwaCxcbiAgaWdub3JlLFxuICBpbmRleEVuZCxcbiAgaW5kZXhTdGFydCxcbiAgbGV0U3RhcixcbiAgbGV0cmVjU3RhcixcbiAgbGlzdEVuZCxcbiAgbGlzdFN0YXJ0LFxuICBtYWNyb1N0YXIsXG4gIG5pbCxcbiAgX3Byb2Nlc3MsXG4gIHF1YXNpcXVvdGUsXG4gIHF1YXNpcXVvdGVHbHlwaCxcbiAgcXVvdGUsXG4gIHF1b3RlR2x5cGgsXG4gIHNwbGF0LFxuICBzcGxpY2VVbnF1b3RlLFxuICBzcGxpY2VVbnF1b3RlR2x5cGgsXG4gIF90cnVlLFxuICB0cnlTdGFyLFxuICB1bmRlZkJhbmcsXG4gIHVucXVvdGUsXG4gIHVucXVvdGVHbHlwaFxuXTtcblxudmFyIGtleXdvcmRzID0gW1xuICBjYXRjaFN0YXIsXG4gIGRlZkJhbmcsXG4gIF9kbyxcbiAgX2V2YWwsXG4gIF9ldmFsV2l0aEVudixcbiAgZXhwYW5kTWFjcm8sXG4gIF9mYWxzZSxcbiAgZm5TdGFyLFxuICBfZ2V0Q3VycmVudEVudixcbiAgX2dldERlZmF1bHRFbnYsXG4gIF9pZixcbiAgaWdub3JlLFxuICBsZXRTdGFyLFxuICBsZXRyZWNTdGFyLFxuICBtYWNyb1N0YXIsXG4gIG5pbCxcbiAgX3Byb2Nlc3MsXG4gIHF1YXNpcXVvdGUsXG4gIHF1b3RlLFxuICBzcGxpY2VVbnF1b3RlLFxuICBfdHJ1ZSxcbiAgdHJ5U3RhcixcbiAgdW5kZWZCYW5nLFxuICB1bnF1b3RlXG5dO1xuXG52YXIgbWFjcm9Ub2tlbnMgPSBbcXVhc2lxdW90ZSwgcXVvdGUsIHNwbGljZVVucXVvdGUsIHVucXVvdGVdO1xuXG52YXIgZ2x5cGhUb2tlbnMgPSBbXG4gIGRlcmVmR2x5cGgsXG4gIGlnbm9yZUJhbmdHbHlwaCxcbiAgcXVhc2lxdW90ZUdseXBoLFxuICBxdW90ZUdseXBoLFxuICBzcGxpY2VVbnF1b3RlR2x5cGgsXG4gIHVucXVvdGVHbHlwaFxuXTtcblxudmFyIGJpbmFyeUdseXBoVG9rZW5zID0gW2lnbm9yZUlmVHJ1ZUdseXBoLCBpZ25vcmVVbmxlc3NUcnVlR2x5cGhdO1xuXG52YXIgX19pbmRleE9mID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICB9IHJldHVybiAtMTtcbn07XG5cbnZhciBpc0tleXdvcmQgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4gX19pbmRleE9mLmNhbGwoa2V5d29yZHMsIGpzU3RyaW5nKSA+PSAwO1xufTtcblxuZXhwb3J0IHtcbiAgYmluYXJ5R2x5cGhUb2tlbnMsXG4gIGRlcmVmLFxuICBkZXJlZkdseXBoLFxuICBjYXRjaFN0YXIsXG4gIGRlZkJhbmcsXG4gIF9kbyxcbiAgX2V2YWwsXG4gIF9ldmFsV2l0aEVudixcbiAgZXhwYW5kTWFjcm8sXG4gIF9mYWxzZSxcbiAgZm5TdGFyLFxuICBfZ2V0Q3VycmVudEVudixcbiAgX2dldERlZmF1bHRFbnYsXG4gIGdseXBoVG9rZW5zLFxuICBfaWYsXG4gIGlnbm9yZUlmVHJ1ZSxcbiAgaWdub3JlSWZUcnVlR2x5cGgsXG4gIGlnbm9yZVVubGVzc1RydWUsXG4gIGlnbm9yZVVubGVzc1RydWVHbHlwaCxcbiAgaWdub3JlLFxuICBpZ25vcmVCYW5nLFxuICBpZ25vcmVCYW5nR2x5cGgsXG4gIGluZGV4RW5kLFxuICBpbmRleFN0YXJ0LFxuICBrZXlUb2tlbnMsXG4gIGlzS2V5d29yZCxcbiAgbGV0U3RhcixcbiAgbGV0cmVjU3RhcixcbiAgbGlzdEVuZCxcbiAgbGlzdFN0YXJ0LFxuICBtYWNyb1N0YXIsXG4gIG1hY3JvVG9rZW5zLFxuICBuaWwsXG4gIF9wcm9jZXNzLFxuICBxdWFzaXF1b3RlLFxuICBxdWFzaXF1b3RlR2x5cGgsXG4gIHF1b3RlLFxuICBxdW90ZUdseXBoLFxuICBzcGxhdCxcbiAgc3BsaWNlVW5xdW90ZSxcbiAgc3BsaWNlVW5xdW90ZUdseXBoLFxuICBfdHJ1ZSxcbiAgdHJ5U3RhcixcbiAgdW5kZWZCYW5nLFxuICB1bnF1b3RlLFxuICB1bnF1b3RlR2x5cGhcbn07XG4iLCJpbXBvcnQgeyBlcmxUeXBlcyB9IGZyb20gJy4vdHlwZXMnO1xuXG52YXIgZXJsTGlzdFR5cGUgPSBlcmxUeXBlc1s2XTtcblxudmFyIF9fc2xpY2UgPSBbXS5zbGljZTtcblxudmFyIGNhciA9IGZ1bmN0aW9uKGVybExpc3QpIHtcbiAgaWYgKGlzRW1wdHkoZXJsTGlzdCkpIHtcbiAgICByZXR1cm4gRU9MO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxMaXN0LnZhbHVlO1xuICB9XG59O1xuXG52YXIgY2RyID0gZnVuY3Rpb24oZXJsTGlzdCkge1xuICBpZiAoaXNFbXB0eShlcmxMaXN0KSkge1xuICAgIHJldHVybiBFT0w7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybExpc3QubmV4dDtcbiAgfVxufTtcblxudmFyIGFyZUVxdWFsID0gZnVuY3Rpb24obGlzdDAsIGxpc3QxLCBfYXJlRXF1YWwpIHtcbiAgd2hpbGUgKCEoaXNFbXB0eShsaXN0MCkgfHwgaXNFbXB0eShsaXN0MSkpKSB7XG4gICAgaWYgKCFfYXJlRXF1YWwobGlzdDAudmFsdWUsIGxpc3QxLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsaXN0MCA9IGNkcihsaXN0MCk7XG4gICAgbGlzdDEgPSBjZHIobGlzdDEpO1xuICB9XG4gIHJldHVybiBpc0VtcHR5KGxpc3QwKSAmJiBpc0VtcHR5KGxpc3QxKTtcbn07XG5cbnZhciBjb25jYXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGVybExpc3RzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgaWYgKGVybExpc3RzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBFT0w7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IGNvcHkoZXJsTGlzdHNbMF0pO1xuICB2YXIgdGFpbCA9IGxhc3RUYWlsKHJlc3VsdCk7XG4gIHZhciByZW1haW5pbmcgPSBlcmxMaXN0cy5zbGljZSgxKTtcbiAgdmFyIGxlbiA9IHJlbWFpbmluZy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgZXJsTGlzdCA9IHJlbWFpbmluZ1tpXTtcbiAgICB2YXIgX2NvcHkgPSBjb3B5KGVybExpc3QpO1xuICAgIGlmIChpc0VtcHR5KHRhaWwpKSB7XG4gICAgICByZXN1bHQgPSBfY29weTtcbiAgICAgIHRhaWwgPSBsYXN0VGFpbChyZXN1bHQpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghaXNFbXB0eShfY29weSkpIHtcbiAgICAgIHRhaWwubmV4dCA9IF9jb3B5O1xuICAgICAgdGFpbCA9IGxhc3RUYWlsKF9jb3B5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBjb25zID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY3JlYXRlRXJsTGlzdChjYXIoZXJsQXJncyksIG5leHQoZXJsQXJncykpO1xufTtcblxudmFyIGNvcHkgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIHJldHVybiBtYXAoKGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfSksIGVybExpc3QpO1xufTtcblxudmFyIGNyZWF0ZUVybExpc3QgPSBmdW5jdGlvbih2YWx1ZSwgbmV4dE5vZGUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gRU9MO1xuICB9XG4gIHJldHVybiBjcmVhdGVOb2RlKHZhbHVlLCBuZXh0Tm9kZSAhPSBudWxsID8gbmV4dE5vZGUgOiBFT0wpO1xufTtcblxudmFyIGNyZWF0ZU5vZGUgPSBmdW5jdGlvbih2YWx1ZSwgbmV4dE5vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBlcmxMaXN0VHlwZSxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgbmV4dDogbmV4dE5vZGVcbiAgfTtcbn07XG5cbnZhciBkcm9wID0gZnVuY3Rpb24obmJyLCBlcmxMaXN0KSB7XG4gIHdoaWxlIChuYnIgIT09IDApIHtcbiAgICBlcmxMaXN0ID0gY2RyKGVybExpc3QpO1xuICAgIG5iciA9IG5iciAtIDE7XG4gIH1cbiAgcmV0dXJuIGVybExpc3Q7XG59O1xuXG52YXIgaXNFbXB0eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gRU9MO1xufTtcblxudmFyIGZpbHRlciA9IGZ1bmN0aW9uKHByZWRpY2F0ZSwgbGlzdCkge1xuICB2YXIgX3JlZHVjZSA9IGZ1bmN0aW9uKGxpc3QsIHZhbHVlKSB7XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KHZhbHVlLCBsaXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICB9O1xuICByZXR1cm4gcmV2ZXJzZShyZWR1Y2UoRU9MLCBfcmVkdWNlLCBsaXN0KSk7XG59O1xuXG52YXIgZm9yRWFjaCA9IGZ1bmN0aW9uKGZuLCBsaXN0KSB7XG4gIHZhciByZXN1bHQgPSBsaXN0O1xuICB3aGlsZSAoIWlzRW1wdHkobGlzdCkpIHtcbiAgICByZXN1bHQgPSBmbihsaXN0LnZhbHVlKTtcbiAgICBsaXN0ID0gcmVjdXJzZShsaXN0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIGZyb21BcnJheSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gIHZhciBfcmVkdWNlID0gZnVuY3Rpb24obGlzdCwgdmFsdWUpIHtcbiAgICByZXR1cm4gY3JlYXRlRXJsTGlzdCh2YWx1ZSwgbGlzdCk7XG4gIH07XG4gIHJldHVybiBhcnJheS5yZXZlcnNlKCkucmVkdWNlKF9yZWR1Y2UsIGNyZWF0ZUVybExpc3QoKSk7XG59O1xuXG52YXIgbGFzdCA9IGZ1bmN0aW9uKGVybExpc3QpIHtcbiAgcmV0dXJuIGNhcihsYXN0VGFpbChlcmxMaXN0KSk7XG59O1xuXG52YXIgbGFzdFRhaWwgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIGlmIChpc0VtcHR5KGVybExpc3QpKSB7XG4gICAgcmV0dXJuIGVybExpc3Q7XG4gIH1cbiAgdmFyIHByaW9yID0gZXJsTGlzdDtcbiAgdmFyIGN1cnJlbnQgPSBjZHIoZXJsTGlzdCk7XG4gIHdoaWxlICghaXNFbXB0eShjdXJyZW50KSkge1xuICAgIHByaW9yID0gY2RyKHByaW9yKTtcbiAgICBjdXJyZW50ID0gY2RyKGN1cnJlbnQpO1xuICB9XG4gIHJldHVybiBwcmlvcjtcbn07XG5cbnZhciBtYXAgPSBmdW5jdGlvbihmbiwgbGlzdCkge1xuICB2YXIgX3JlZHVjZSA9IGZ1bmN0aW9uKGxpc3QsIHZhbHVlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVybExpc3QoZm4odmFsdWUpLCBsaXN0KTtcbiAgfTtcbiAgcmV0dXJuIHJldmVyc2UocmVkdWNlKEVPTCwgX3JlZHVjZSwgbGlzdCkpO1xufTtcblxudmFyIG5leHQgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIHJldHVybiBjYXIoY2RyKGVybExpc3QpKTtcbn07XG5cbnZhciByZWN1cnNlID0gZnVuY3Rpb24obGlzdCkge1xuICBpZiAoaXNFbXB0eShsaXN0KSkge1xuICAgIHJldHVybiBsaXN0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0Lm5leHQ7XG4gIH1cbn07XG5cbnZhciByZWR1Y2UgPSBmdW5jdGlvbihzZWVkLCBmbiwgbGlzdCkge1xuICB3aGlsZSAoIWlzRW1wdHkobGlzdCkpIHtcbiAgICBzZWVkID0gZm4oc2VlZCwgbGlzdC52YWx1ZSk7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gIH1cbiAgcmV0dXJuIHNlZWQ7XG59O1xuXG52YXIgcmVkdWNlQnkyID0gZnVuY3Rpb24oc2VlZCwgZm4sIGxpc3QpIHtcbiAgd2hpbGUgKCFpc0VtcHR5KGxpc3QpKSB7XG4gICAgdmFyIHZhbHVlMCA9IGxpc3QudmFsdWU7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gICAgdmFyIHZhbHVlMSA9IGxpc3QudmFsdWU7XG4gICAgc2VlZCA9IGZuKHNlZWQsIHZhbHVlMCwgdmFsdWUxKTtcbiAgICBsaXN0ID0gcmVjdXJzZShsaXN0KTtcbiAgfVxuICByZXR1cm4gc2VlZDtcbn07XG5cbnZhciByZXZlcnNlID0gZnVuY3Rpb24obGlzdCkge1xuICB2YXIgcmVzdWx0ID0gRU9MO1xuICB3aGlsZSAoIWlzRW1wdHkobGlzdCkpIHtcbiAgICByZXN1bHQgPSBjcmVhdGVFcmxMaXN0KGxpc3QudmFsdWUsIHJlc3VsdCk7XG4gICAgbGlzdCA9IGxpc3QubmV4dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIHRha2UgPSBmdW5jdGlvbihuYnIsIGVybExpc3QpIHtcbiAgdmFyIHJlc3VsdCA9IGNyZWF0ZUVybExpc3QoKTtcbiAgd2hpbGUgKG5iciAhPT0gMCkge1xuICAgIHZhciBub2RlID0gY2FyKGVybExpc3QpO1xuICAgIGVybExpc3QgPSBjZHIoZXJsTGlzdCk7XG4gICAgcmVzdWx0ID0gY3JlYXRlRXJsTGlzdChub2RlLCByZXN1bHQpO1xuICAgIG5iciA9IG5iciAtIDE7XG4gIH1cbiAgcmV0dXJuIHJldmVyc2UocmVzdWx0KTtcbn07XG5cbnZhciB0b0FycmF5ID0gZnVuY3Rpb24obGlzdCkge1xuICB2YXIgX3JlZHVjZSA9IGZ1bmN0aW9uKGpzQXJyYXksIHZhbHVlKSB7XG4gICAganNBcnJheS5wdXNoKHZhbHVlKTtcbiAgICByZXR1cm4ganNBcnJheTtcbiAgfTtcbiAgcmV0dXJuIHJlZHVjZShbXSwgX3JlZHVjZSwgbGlzdCk7XG59O1xuXG52YXIgdG9QYXJ0aWFsQXJyYXkgPSBmdW5jdGlvbihuYnIsIGxpc3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB3aGlsZSAobmJyICE9PSAwKSB7XG4gICAgdmFyIG5vZGUgPSBjYXIobGlzdCk7XG4gICAgbGlzdCA9IGNkcihsaXN0KTtcbiAgICByZXN1bHQucHVzaChub2RlKTtcbiAgICBuYnIgPSBuYnIgLSAxO1xuICB9XG4gIHJlc3VsdC5wdXNoKGxpc3QpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIHppcCA9IGZ1bmN0aW9uKHNlZWQsIGZuLCBsaXN0MCwgbGlzdDEpIHtcbiAgd2hpbGUgKCEoaXNFbXB0eShsaXN0MCkgfHwgaXNFbXB0eShsaXN0MSkpKSB7XG4gICAgdmFyIHZhbHVlMCA9IGNhcihsaXN0MCk7XG4gICAgbGlzdDAgPSBjZHIobGlzdDApO1xuICAgIHZhciB2YWx1ZTEgPSBjYXIobGlzdDEpO1xuICAgIGxpc3QxID0gY2RyKGxpc3QxKTtcbiAgICBzZWVkID0gZm4oc2VlZCwgdmFsdWUwLCB2YWx1ZTEpO1xuICB9XG4gIHJldHVybiBzZWVkO1xufTtcblxudmFyIF9FT0wgPSB7fTtcblxudmFyIEVPTCA9IGNyZWF0ZU5vZGUoX0VPTCwgX0VPTCk7XG5cbmV4cG9ydCB7XG4gIGFyZUVxdWFsLFxuICBjYXIsXG4gIGNkcixcbiAgY29uY2F0LFxuICBjb25zLFxuICBjb3B5LFxuICBjcmVhdGVFcmxMaXN0LFxuICBkcm9wLFxuICBpc0VtcHR5LFxuICBmaWx0ZXIsXG4gIGZvckVhY2gsXG4gIGZyb21BcnJheSxcbiAgbGFzdCxcbiAgbWFwLFxuICBuZXh0LFxuICByZWN1cnNlLFxuICByZWR1Y2UsXG4gIHJlZHVjZUJ5MixcbiAgcmV2ZXJzZSxcbiAgdGFrZSxcbiAgdG9BcnJheSxcbiAgdG9QYXJ0aWFsQXJyYXlcbn07XG4iLCJpbXBvcnQgeyBiaW5hcnlHbHlwaFRva2VucyB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGNvbW1lbnRTaWduYWwgfSBmcm9tICcuL2NvbW1lbnRTaWduYWwnO1xuaW1wb3J0IHsgY3JlYXRlRXJsQm9vbGVhbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsSWRlbnRpZmllciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsSWdub3JlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTGlzdCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxOdW1iZXIgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3ltYm9sIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBkZXJlZiB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGRlcmVmR2x5cGggfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBleHRyYWN0SnNWYWx1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgX2ZhbHNlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgZ2x5cGhUb2tlbnMgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmVCYW5nIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlQmFuZ0dseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlSWZUcnVlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlSWZUcnVlR2x5cGggfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmVVbmxlc3NUcnVlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlVW5sZXNzVHJ1ZUdseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaW5kZXhFbmQgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpbmRleFN0YXJ0IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsga2V5VG9rZW5zIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbGlzdEVuZCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGxpc3RTdGFydCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IG5pbCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHF1YXNpcXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBxdW90ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHNwbGljZVVucXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyB1bnF1b3RlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcXVhc2lxdW90ZUdseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcXVvdGVHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHNwbGljZVVucXVvdGVHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHVucXVvdGVHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHJldmVyc2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IF90cnVlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuXG52YXIgIF9faW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgfSByZXR1cm4gLTE7XG59O1xuXG52YXIgYXRvbWl6ZSA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHZhciBjcmVhdGVFcmxWYWx1ZSA9IChmdW5jdGlvbigpIHtcbiAgICBpZiAoaXNOaWwodG9rZW4pKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRXJsTmlsO1xuICAgIH0gZWxzZSBpZiAoaXNJZ25vcmUodG9rZW4pKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRXJsSWdub3JlO1xuICAgIH0gZWxzZSBpZiAoaXNCb29sZWFuKHRva2VuKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKHBhcnNlQm9vbGVhbih0b2tlbikpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKHRva2VuKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZztcbiAgICB9IGVsc2UgaWYgKGlzSWRlbnRpZmllcih0b2tlbikpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFcmxJZGVudGlmaWVyO1xuICAgIH0gZWxzZSBpZiAoaXNJbnRlZ2VyKHRva2VuKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxOdW1iZXIocGFyc2VJbnQxMCh0b2tlbikpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRmxvYXQodG9rZW4pKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihwYXJzZUZsb2F0MTAodG9rZW4pKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjcmVhdGVFcmxTeW1ib2w7XG4gICAgfVxuICB9KSgpO1xuICByZXR1cm4gY3JlYXRlRXJsVmFsdWUodG9rZW4pO1xufTtcblxudmFyIGlzQm9vbGVhbiA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbiA9PT0gX2ZhbHNlIHx8IHRva2VuID09PSBfdHJ1ZTtcbn07XG5cbnZhciBpc0Zsb2F0ID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIC9eKC18XFwrKT9bMC05XShffFxcZCkqXFwuKFxcZHwoXFxkKF98XFxkKSpcXGQpKSQvLnRlc3QodG9rZW4pO1xufTtcblxudmFyIGlzQmluYXJ5R2x5cGggPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gX19pbmRleE9mLmNhbGwoYmluYXJ5R2x5cGhUb2tlbnMsIHRva2VuKSA+PSAwO1xufTtcblxudmFyIGlzR2x5cGggPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gX19pbmRleE9mLmNhbGwoZ2x5cGhUb2tlbnMsIHRva2VuKSA+PSAwO1xufTtcblxudmFyIGlzSWdub3JlID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuID09PSBpZ25vcmU7XG59O1xuXG52YXIgaXNJbmRleFN0YXJ0ID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuID09PSBpbmRleFN0YXJ0O1xufTtcblxudmFyIGlzSW50ZWdlciA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiAvXigwKD8hXFwuKXwoKC18XFwrKT9bMS05XShffFxcZCkqJCkpLy50ZXN0KHRva2VuKTtcbn07XG5cbnZhciBpc0xpc3RTdGFydCA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbiA9PT0gbGlzdFN0YXJ0O1xufTtcblxudmFyIGlzTmlsID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuID09PSBuaWw7XG59O1xuXG52YXIgX3BhcnNlID0gZnVuY3Rpb24odG9rZW4sIHRva2Vucykge1xuICBpZiAoaXNMaXN0U3RhcnQodG9rZW4pKSB7XG4gICAgcmV0dXJuIHBhcnNlTGlzdCh0b2tlbnMpO1xuICB9IGVsc2UgaWYgKGlzSW5kZXhTdGFydCh0b2tlbikpIHtcbiAgICByZXR1cm4gcGFyc2VJbmRleCh0b2tlbnMpO1xuICB9IGVsc2UgaWYgKGlzR2x5cGgodG9rZW4pKSB7XG4gICAgcmV0dXJuIHBhcnNlR2x5cGgoZ2x5cGhJbmRleFt0b2tlbl0sIHRva2Vucyk7XG4gIH0gZWxzZSBpZiAoaXNCaW5hcnlHbHlwaCh0b2tlbikpIHtcbiAgICByZXR1cm4gcGFyc2VCaW5hcnlHbHlwaChiaW5hcnlHbHlwaEluZGV4W3Rva2VuXSwgdG9rZW5zKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXRvbWl6ZSh0b2tlbik7XG4gIH1cbn07XG5cbnZhciBwYXJzZSA9IGZ1bmN0aW9uKHRva2Vucykge1xuICBpZiAodG9rZW5zID09PSBjb21tZW50U2lnbmFsKSB7XG4gICAgcmV0dXJuIGNvbW1lbnRTaWduYWw7XG4gIH1cbiAgcmV0dXJuIF9wYXJzZSh0b2tlbnMuc2hpZnQoKSwgdG9rZW5zKTtcbn07XG5cbnZhciBwYXJzZUJpbmFyeUdseXBoID0gZnVuY3Rpb24oa2V5d29yZCwgdG9rZW5zKSB7XG4gIHJldHVybiBjcmVhdGVFcmxMaXN0KFxuICAgIGNyZWF0ZUVybFN5bWJvbChrZXl3b3JkKSxcbiAgICBjcmVhdGVFcmxMaXN0KFxuICAgICAgcGFyc2UodG9rZW5zKSxcbiAgICAgIGNyZWF0ZUVybExpc3QocGFyc2UodG9rZW5zKSkpKTtcbn07XG5cbnZhciBwYXJzZUJvb2xlYW4gPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gdG9rZW4gPT09IF90cnVlO1xufTtcblxudmFyIHBhcnNlRmxvYXQxMCA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiBwYXJzZUZsb2F0KHN0cmlwVW5kZXJzY29yZXModG9rZW4pLCAxMCk7XG59O1xuXG52YXIgcGFyc2VHbHlwaCA9IGZ1bmN0aW9uKGtleXdvcmQsIHRva2Vucykge1xuICByZXR1cm4gY3JlYXRlRXJsTGlzdChcbiAgICBjcmVhdGVFcmxTeW1ib2woa2V5d29yZCksXG4gICAgY3JlYXRlRXJsTGlzdChwYXJzZSh0b2tlbnMpKSk7XG59O1xuXG52YXIgcGFyc2VJbmRleCA9IGZ1bmN0aW9uKHRva2Vucykge1xuICB2YXIgdG9rZW47XG4gIHZhciBqc0luZGV4ID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgaXNLZXlTdGVwID0gdHJ1ZTtcbiAgd2hpbGUgKCh0b2tlbiA9IHRva2Vucy5zaGlmdCgpKSAhPT0gaW5kZXhFbmQpIHtcbiAgICBpZiAoaXNLZXlTdGVwKSB7XG4gICAgICBrZXkgPSBfcGFyc2UodG9rZW4sIHRva2Vucyk7XG4gICAgICBpc0tleVN0ZXAgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAganNJbmRleFtleHRyYWN0SnNWYWx1ZShrZXkpXSA9IF9wYXJzZSh0b2tlbiwgdG9rZW5zKTtcbiAgICAgIGlzS2V5U3RlcCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBjcmVhdGVFcmxJbmRleChqc0luZGV4KTtcbn07XG5cbnZhciBwYXJzZUludDEwID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHBhcnNlSW50KHN0cmlwVW5kZXJzY29yZXModG9rZW4pLCAxMCk7XG59O1xuXG52YXIgcGFyc2VMaXN0ID0gZnVuY3Rpb24odG9rZW5zKSB7XG4gIHZhciB0b2tlbjtcbiAgdmFyIGVybExpc3QgPSBjcmVhdGVFcmxMaXN0KCk7XG4gIHdoaWxlICgodG9rZW4gPSB0b2tlbnMuc2hpZnQoKSkgIT09IGxpc3RFbmQpIHtcbiAgICBlcmxMaXN0ID0gY3JlYXRlRXJsTGlzdChfcGFyc2UodG9rZW4sIHRva2VucyksIGVybExpc3QpO1xuICB9XG4gIHJldHVybiByZXZlcnNlKGVybExpc3QpO1xufTtcblxudmFyIHN0YXJ0c1dpdGggPSBmdW5jdGlvbihjaGFyKSB7XG4gIHJldHVybiBmdW5jdGlvbih0b2tlbikge1xuICAgIHJldHVybiB0b2tlblswXSA9PT0gY2hhcjtcbiAgfTtcbn07XG5cbnZhciBzdHJpcFVuZGVyc2NvcmVzID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuLnJlcGxhY2UoL18vZywgJycpO1xufTtcblxudmFyIGdseXBoSW5kZXggPSB7fTtcblxuZ2x5cGhJbmRleFtkZXJlZkdseXBoXSAgICAgICAgID0gZGVyZWY7XG5nbHlwaEluZGV4W2lnbm9yZUJhbmdHbHlwaF0gICAgPSBpZ25vcmVCYW5nO1xuZ2x5cGhJbmRleFtxdWFzaXF1b3RlR2x5cGhdICAgID0gcXVhc2lxdW90ZTtcbmdseXBoSW5kZXhbcXVvdGVHbHlwaF0gICAgICAgICA9IHF1b3RlO1xuZ2x5cGhJbmRleFtzcGxpY2VVbnF1b3RlR2x5cGhdID0gc3BsaWNlVW5xdW90ZTtcbmdseXBoSW5kZXhbdW5xdW90ZUdseXBoXSAgICAgICA9IHVucXVvdGU7XG5cbnZhciBiaW5hcnlHbHlwaEluZGV4ID0ge307XG5cbmJpbmFyeUdseXBoSW5kZXhbaWdub3JlSWZUcnVlR2x5cGhdICAgICA9IGlnbm9yZUlmVHJ1ZTtcbmJpbmFyeUdseXBoSW5kZXhbaWdub3JlVW5sZXNzVHJ1ZUdseXBoXSA9IGlnbm9yZVVubGVzc1RydWU7XG5cbnZhciBpc1N0cmluZyA9IHN0YXJ0c1dpdGgoJ1wiJyk7XG5cbnZhciBpc0lkZW50aWZpZXIgPSBzdGFydHNXaXRoKCc6Jyk7XG5cbmV4cG9ydCB7IHBhcnNlIH07XG4iLCJpbXBvcnQgeyBjb21tZW50U2lnbmFsIH0gZnJvbSAnLi9jb21tZW50U2lnbmFsJztcbmltcG9ydCB7IGV4dHJhY3RKc1ZhbHVlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpbmRleEVuZCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGluZGV4U3RhcnQgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpc0VybEF0b20gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsSWRlbnRpZmllciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxJZ25vcmUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsS2V5d29yZCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybE1hY3JvIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybE5pbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxTdHJpbmcgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsVXNlclB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgbGlzdEVuZCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGxpc3RTdGFydCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHJlZHVjZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuXG52YXIgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbnZhciBhZGpvaW5FcmxWYWx1ZSA9IGZ1bmN0aW9uKHNob3VsZEJlUmVhZGFibGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG1lbW8sIGVybFZhbHVlKSB7XG4gICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemUoZXJsVmFsdWUsIHNob3VsZEJlUmVhZGFibGUpO1xuICAgIGlmIChtZW1vLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlwiICsgbWVtbyArIFwiIFwiICsgc2VyaWFsaXplZDtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgc2VyaWFsaXplID0gZnVuY3Rpb24oZXJsRXhwciwgc2hvdWxkQmVSZWFkYWJsZSkge1xuICBpZiAoZXJsRXhwciA9PT0gY29tbWVudFNpZ25hbCkge1xuICAgIHJldHVybiBjb21tZW50U2lnbmFsO1xuICB9XG4gIHZhciBfc2VyaWFsaXplID0gKGZ1bmN0aW9uKCkge1xuICAgIGlmIChpc0VybExpc3QoZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBzZXJpYWxpemVMaXN0O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxJZ25vcmUoZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gaWdub3JlTGFiZWw7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxJbmRleChlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUluZGV4O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxLZXl3b3JkKGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGtleXdvcmRMYWJlbDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc0VybENvcmVFZmZlY3RmdWxGdW5jdGlvbihlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBjb3JlRWZmZWN0ZnVsRnVuY3Rpb25MYWJlbDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc0VybENvcmVQdXJlRnVuY3Rpb24oZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gY29yZVB1cmVGdW5jdGlvbkxhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsVXNlclB1cmVGdW5jdGlvbihlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB1c2VyUHVyZUZ1bmN0aW9uTGFiZWw7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxNYWNybyhlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBtYWNyb0xhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsTmlsKGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5pbExhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsSWRlbnRpZmllcihlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUlkZW50aWZpZXI7XG4gICAgfSBlbHNlIGlmIChpc0VybFN0cmluZyhlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZVN0cmluZztcbiAgICB9IGVsc2UgaWYgKGlzRXJsQXRvbShlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUF0b207XG4gICAgfSBlbHNlIGlmIChlcmxFeHByLmpzVmFsdWUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGV4dHJhY3RKc1ZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGVybFZhbHVlO1xuICAgICAgfTtcbiAgICB9XG4gIH0pKCk7XG4gIHJldHVybiBfc2VyaWFsaXplKGVybEV4cHIsIHNob3VsZEJlUmVhZGFibGUpO1xufTtcblxudmFyIHNlcmlhbGl6ZUF0b20gPSBmdW5jdGlvbihlcmxBdG9tLCBzaG91bGRCZVJlYWRhYmxlKSB7XG4gIHJldHVybiBcIihhdG9tIFwiICsgKHNlcmlhbGl6ZShlcmxBdG9tLmVybFZhbHVlLCBzaG91bGRCZVJlYWRhYmxlKSkgKyBcIilcIjtcbn07XG5cbnZhciBzZXJpYWxpemVJZGVudGlmaWVyID0gZnVuY3Rpb24oZXJsU3RyaW5nLCBzaG91bGRCZVJlYWRhYmxlKSB7XG4gIHJldHVybiBleHRyYWN0SnNWYWx1ZShlcmxTdHJpbmcpO1xufTtcblxudmFyIHNlcmlhbGl6ZUluZGV4ID0gZnVuY3Rpb24oZXJsSW5kZXgsIHNob3VsZEJlUmVhZGFibGUpIHtcbiAgdmFyIGpzSW5kZXggPSBlcmxJbmRleC5qc1ZhbHVlO1xuICB2YXIgbWVtbyA9ICcnO1xuICBmb3IgKHZhciBrZXkgaW4ganNJbmRleCkge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoanNJbmRleCwga2V5KSkgY29udGludWU7XG4gICAgdmFyIGVybFZhbHVlID0ganNJbmRleFtrZXldO1xuICAgIGlmIChtZW1vID09PSAnJykge1xuICAgICAgbWVtbyA9IFwiXCJcbiAgICAgICAgKyBrZXlcbiAgICAgICAgKyBcIiBcIlxuICAgICAgICArIChzZXJpYWxpemUoZXJsVmFsdWUsIHNob3VsZEJlUmVhZGFibGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVtbyA9IFwiXCJcbiAgICAgICAgKyBtZW1vXG4gICAgICAgICsgXCIsIFwiXG4gICAgICAgICsga2V5XG4gICAgICAgICsgXCIgXCJcbiAgICAgICAgKyAoc2VyaWFsaXplKGVybFZhbHVlLCBzaG91bGRCZVJlYWRhYmxlKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmRleFN0YXJ0ICsgbWVtbyArIGluZGV4RW5kO1xufTtcblxudmFyIHNlcmlhbGl6ZUxpc3QgPSBmdW5jdGlvbihlcmxMaXN0LCBzaG91bGRCZVJlYWRhYmxlKSB7XG4gIHZhciBzZXJpYWxpemVkTGlzdCA9IHJlZHVjZShcbiAgICBcIlwiLFxuICAgIGFkam9pbkVybFZhbHVlKHNob3VsZEJlUmVhZGFibGUpLFxuICAgIGVybExpc3QpO1xuICByZXR1cm4gbGlzdFN0YXJ0ICsgc2VyaWFsaXplZExpc3QgKyBsaXN0RW5kO1xufTtcblxudmFyIHNlcmlhbGl6ZVN0cmluZyA9IGZ1bmN0aW9uKGVybFN0cmluZywgc2hvdWxkQmVSZWFkYWJsZSkge1xuICB2YXIganNTdHJpbmcgPSBzdHJpcFF1b3RlcyhleHRyYWN0SnNWYWx1ZShlcmxTdHJpbmcpKTtcbiAgaWYgKCFzaG91bGRCZVJlYWRhYmxlKSB7XG4gICAgcmV0dXJuIGpzU3RyaW5nO1xuICB9XG4gIHJldHVybiBqc1N0cmluZ1xuICAgIC5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpXG4gICAgLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuICAgIC5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyk7XG59O1xuXG52YXIgc3RyaXBRdW90ZXMgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4ganNTdHJpbmcuc2xpY2UoMSwgLTEpO1xufTtcblxudmFyIGNvcmVFZmZlY3RmdWxGdW5jdGlvbkxhYmVsID0gJzxlZmZlY3RmdWwgY29yZSBmdW5jdGlvbj4nO1xudmFyIGNvcmVQdXJlRnVuY3Rpb25MYWJlbCAgICAgID0gJzxjb3JlIGZ1bmN0aW9uPic7XG52YXIgaWdub3JlTGFiZWwgICAgICAgICAgICAgICAgPSAnPGlnbm9yZT4nO1xudmFyIGtleXdvcmRMYWJlbCAgICAgICAgICAgICAgID0gJzxrZXl3b3JkPic7XG52YXIgbWFjcm9MYWJlbCAgICAgICAgICAgICAgICAgPSAnPG1hY3JvPic7XG52YXIgbmlsTGFiZWwgICAgICAgICAgICAgICAgICAgPSAnbmlsJztcbnZhciB1c2VyUHVyZUZ1bmN0aW9uTGFiZWwgICAgICA9ICc8ZnVuY3Rpb24+JztcblxuZXhwb3J0IHsgc2VyaWFsaXplIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiKGRvXFxuICAoZGVmISBmaXgqIChcXG4gICAgZm4qIChmKSAoXFxuICAgICAgKGZuKiAoeCkgKGYgKGZuKiAoJiB5cykgKGFwcGx5ICh4IHgpIHlzKSkpKVxcbiAgICAgIChmbiogKHgpIChmIChmbiogKCYgeXMpIChhcHBseSAoeCB4KSB5cykpKSkpKSlcXG5cXG4gIChkZWYhIG1lbWZpeCogKFxcbiAgICBmbiogKGYpIChcXG4gICAgICBsZXQqIChjYWNoZSB7fSkgKFxcbiAgICAgICAgKGZuKiAoeCBjYWNoZSkgKFxcbiAgICAgICAgICBmXFxuICAgICAgICAgICAgKGZuKiAoeikgKGlmIChjb250YWlucz8gY2FjaGUgeilcXG4gICAgICAgICAgICAgIChnZXQgY2FjaGUgeilcXG4gICAgICAgICAgICAgIChsZXQqIChyZXN1bHQgKChmbiogKHkpICgoeCB4IGNhY2hlKSB5KSkgeikpIChkbyAoc2V0ISBjYWNoZSB6IHJlc3VsdCkgcmVzdWx0KSkpKVxcbiAgICAgICAgICAgIGNhY2hlKSlcXG4gICAgICAgIChmbiogKHggY2FjaGUpIChcXG4gICAgICAgICAgZlxcbiAgICAgICAgICAgIChmbiogKHopIChpZiAoY29udGFpbnM/IGNhY2hlIHopXFxuICAgICAgICAgICAgICAoZ2V0IGNhY2hlIHopXFxuICAgICAgICAgICAgICAobGV0KiAocmVzdWx0ICgoZm4qICh5KSAoKHggeCBjYWNoZSkgeSkpIHopKSAoZG8gKHNldCEgY2FjaGUgeiByZXN1bHQpIHJlc3VsdCkpKSlcXG4gICAgICAgICAgICBjYWNoZSkpXFxuICAgICAgICBjYWNoZSkpKSlcXG5cXG4gIChkZWYhIF8wIGNhcilcXG5cXG4gIChkZWYhIF8xIChmbiogKHhzKSAobnRoIDEgeHMpKSlcXG5cXG4gIChkZWYhIF8yIChmbiogKHhzKSAobnRoIDIgeHMpKSlcXG5cXG4gIChkZWYhIHN3YXAhIChcXG4gICAgbWFjcm8qIChhdG9tICYgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgYXRvbVxcbiAgICAgICAgYChsZXQqICgtYXRvbS0gfmF0b20pIChcXG4gICAgICAgICAgZG9cXG4gICAgICAgICAgICAocmVzZXQhIC1hdG9tLSAofihjYXIgeHMpIChkZXJlZiAtYXRvbS0pIH5AKGNkciB4cykpKVxcbiAgICAgICAgICAgIChkZXJlZiAtYXRvbS0pKSkpKSlcXG5cXG4gIChkZWYhICpnZW5zeW0tY291bnRlciogKGF0b20gMCkpXFxuXFxuICAoZGVmISBnZW5zeW0gKFxcbiAgICAgIGZuKiAoKSAoc3ltYm9sIChzdHJpbmcgXFxcIkdfX1xcXCIgKHN3YXAhICpnZW5zeW0tY291bnRlciogaW5jcikpKSkpXFxuXFxuICAoZGVmISBvciAoXFxuICAgIG1hY3JvKiAoJiB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBmYWxzZVxcbiAgICAgICAgKGxldCogKC1xdWVyeS0gKGdlbnN5bSkpXFxuICAgICAgICAgIGAobGV0KiAofi1xdWVyeS0gfihjYXIgeHMpKSAoXFxuICAgICAgICAgICAgaWYgfi1xdWVyeS1cXG4gICAgICAgICAgICAgIH4tcXVlcnktXFxuICAgICAgICAgICAgICAob3IgfkAoY2RyIHhzKSkpKSkpKSlcXG5cXG4gIChkZWYhIGFuZCAoXFxuICAgIG1hY3JvKiAoJiB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICB0cnVlXFxuICAgICAgICAobGV0KiAoLXF1ZXJ5LSAoZ2Vuc3ltKSlcXG4gICAgICAgICAgYChsZXQqICh+LXF1ZXJ5LSB+KGNhciB4cykpIChcXG4gICAgICAgICAgICBpZiB+LXF1ZXJ5LVxcbiAgICAgICAgICAgICAgKGFuZCB+QChjZHIgeHMpKVxcbiAgICAgICAgICAgICAgZmFsc2UpKSkpKSlcXG5cXG4gIChkZWYhIGNvbmQgKFxcbiAgICBtYWNybyogKCYgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgbmlsXFxuICAgICAgICAoaWYgKGVtcHR5PyAoY2RyIHhzKSlcXG4gICAgICAgICAgKHRocm93IFxcXCJgY29uZGAgcmVxdWlyZXMgYW4gZXZlbiBudW1iZXIgb2YgZm9ybXMuXFxcIilcXG4gICAgICAgICAgKGxldCogKC1xdWVyeS0gKGdlbnN5bSkpXFxuICAgICAgICAgICAgYChsZXQqICh+LXF1ZXJ5LSB+KGNhciB4cykpIChcXG4gICAgICAgICAgICAgIGlmIH4tcXVlcnktXFxuICAgICAgICAgICAgICAgIH4oXzEgeHMpXFxuICAgICAgICAgICAgICAgIChjb25kIH5AKGNkciAoY2RyIHhzKSkpKSkpKSkpKVxcblxcbiAgKGRlZiEgbG9vcCAoXFxuICAgIG1hY3JvKiAoZm9ybTAgZm9ybTEpXFxuICAgICAgYChsZXQqIChsb29wIChtZW1maXgqIChmbiogKGxvb3ApIChmbiogKH4oXzAgZm9ybTApKSB+Zm9ybTEpKSkpIChcXG4gICAgICAgIGxvb3AgfihfMSBmb3JtMCkpKSkpXFxuXFxuICAoZGVmISAtPiAoXFxuICAgIG1hY3JvKiAoJiB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBuaWxcXG4gICAgICAgIChsZXQqICh4IChjYXIgeHMpIHhzIChjZHIgeHMpKSAoXFxuICAgICAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICAgICAgeFxcbiAgICAgICAgICAgIChsZXQqIChmb3JtIChjYXIgeHMpIGZvcm1zIChjZHIgeHMpKSAoXFxuICAgICAgICAgICAgICBpZiAoZW1wdHk/IGZvcm1zKVxcbiAgICAgICAgICAgICAgICAoaWYgKGxpc3Q/IGZvcm0pXFxuICAgICAgICAgICAgICAgICAgKGlmICg9IChzeW1ib2wgXFxcImZuKlxcXCIpIChjYXIgZm9ybSkpXFxuICAgICAgICAgICAgICAgICAgICBgKH5mb3JtIH54KVxcbiAgICAgICAgICAgICAgICAgICAgYCh+KGNhciBmb3JtKSB+eCB+QChjZHIgZm9ybSkpKVxcbiAgICAgICAgICAgICAgICAgIChsaXN0IGZvcm0geCkpXFxuICAgICAgICAgICAgICAgIGAoLT4gKC0+IH54IH5mb3JtKSB+QGZvcm1zKSkpKSkpKSlcXG5cXG4gIChkZWYhIC0+PiAoXFxuICAgIG1hY3JvKiAoJiB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBuaWxcXG4gICAgICAgIChsZXQqICh4IChjYXIgeHMpIHhzIChjZHIgeHMpKSAoXFxuICAgICAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICAgICAgeFxcbiAgICAgICAgICAgIChsZXQqIChmb3JtIChjYXIgeHMpIGZvcm1zIChjZHIgeHMpKSAoXFxuICAgICAgICAgICAgICBpZiAoZW1wdHk/IGZvcm1zKVxcbiAgICAgICAgICAgICAgICAoaWYgKGxpc3Q/IGZvcm0pXFxuICAgICAgICAgICAgICAgICAgKGlmICg9IChzeW1ib2wgXFxcImZuKlxcXCIpIChjYXIgZm9ybSkpXFxuICAgICAgICAgICAgICAgICAgICBgKH5mb3JtIH54KVxcbiAgICAgICAgICAgICAgICAgICAgYCh+QGZvcm0gfngpKVxcbiAgICAgICAgICAgICAgICAgIChsaXN0IGZvcm0geCkpXFxuICAgICAgICAgICAgICAgIGAoLT4+ICgtPj4gfnggfmZvcm0pIH5AZm9ybXMpKSkpKSkpKVxcblxcbiAgKGRlZiEgLT4qIChtYWNybyogKCYgeHMpIGAoZm4qICgteC0pICgtPiAteC0gfkB4cykpKSlcXG5cXG4gIChkZWYhIC0+PiogKG1hY3JvKiAoJiB4cykgYChmbiogKC14LSkgKC0+PiAteC0gfkB4cykpKSlcXG5cXG4gIChkZWYhIG5vdCAoZm4qICh4KSAoaWYgeCBmYWxzZSB0cnVlKSkpXFxuXFxuICAoZGVmISBpbmNyICgtPiogKCsgMSkpKVxcblxcbiAgKGRlZiEgZGVjciAoLT4qICgtIDEpKSlcXG5cXG4gIChkZWYhIHplcm8/ICgtPiogKD0gMCkpKVxcblxcbiAgKGRlZiEgaWRlbnRpdHkgKGZuKiAoeCkgeCkpXFxuXFxuICAoZGVmISBjb25zdGFudC1mbiAoZm4qICh4KSAoZm4qICh5KSB4KSkpXFxuXFxuICAoZGVmISBjYWxsLW9uIChmbiogKCYgeHMpIChmbiogKGZuKSAoYXBwbHkgZm4geHMpKSkpXFxuXFxuICAoZGVmISBzdGVwLWludG8tbGlzdCAoXFxuICAgIGZuKiAoeHMgZm4wIGZuMSkgKFxcbiAgICAgIGxldCogKHggKGNhciB4cykgLXhzLSAoY2RyIHhzKSkgKFxcbiAgICAgICAgaWYgKGVtcHR5PyAteHMtKVxcbiAgICAgICAgICAoZm4xIHgpXFxuICAgICAgICAgIChmbjAgeCAteHMtKSkpKSlcXG5cXG4gIChkZWYhIGFwcGx5LW9uIChcXG4gICAgZm4qICgmIHhzKSAoXFxuICAgICAgc3RlcC1pbnRvLWxpc3RcXG4gICAgICAgIHhzXFxuICAgICAgICAoZm4qIChhcmd1bWVudHMgLXhzLSkgKGFwcGx5IChjYXIgLXhzLSkgYXJndW1lbnRzKSlcXG4gICAgICAgIChmbiogKGFyZ3VtZW50cykgKGZuKiAoZikgKGFwcGx5IGYgYXJndW1lbnRzKSkpKSkpXFxuXFxuICAoZGVmISByZWR1Y2UgKFxcbiAgICBmbiogKGYgc2VlZCB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBzZWVkXFxuICAgICAgICAocmVkdWNlIGYgKGYgc2VlZCAoY2FyIHhzKSkgKGNkciB4cykpKSkpXFxuXFxuICAoZGVmISBmaWx0ZXIgKFxcbiAgICBmbiogKHByZWRpY2F0ZSB4cykgKFxcbiAgICAgIHJldmVyc2UgKFxcbiAgICAgICAgcmVkdWNlXFxuICAgICAgICAgIChmbiogKG1lbW8geCkgKGlmIChwcmVkaWNhdGUgeCkgKGNvbnMgeCBtZW1vKSBtZW1vKSlcXG4gICAgICAgICAgJygpXFxuICAgICAgICAgIHhzKSkpKVxcblxcbiAgKGRlZiEgbWFwIChcXG4gICAgZm4qIChmIHhzKSAoXFxuICAgICAgcmV2ZXJzZSAoXFxuICAgICAgICByZWR1Y2VcXG4gICAgICAgICAgKGZuKiAobWVtbyB4KSAoY29ucyAoZiB4KSBtZW1vKSlcXG4gICAgICAgICAgJygpXFxuICAgICAgICAgIHhzKSkpKVxcblxcbiAgKGRlZiEgZXZlcnk/IChcXG4gICAgZm4qIChwcmVkIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIHRydWVcXG4gICAgICAgIChpZiAocHJlZCAoY2FyIHhzKSkgKGV2ZXJ5PyBwcmVkIChjZHIgeHMpKSBmYWxzZSkpKSlcXG5cXG4gIChkZWYhIHNvbWU/IChcXG4gICAgZm4qIChwcmVkIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIGZhbHNlXFxuICAgICAgICAoaWYgKHByZWQgKGNhciB4cykpIHRydWUgKHNvbWU/IHByZWQgKGNkciB4cykpKSkpKVxcblxcbiAgKGRlZiEgbGV0bWVtcmVjKiAoXFxuICAgIG1hY3JvKiAoYWxpYXMgZXhwcilcXG4gICAgICBgKGxldCogKFxcbiAgICAgICAgfihjYXIgYWxpYXMpXFxuICAgICAgICAobWVtZml4KiAoZm4qICh+KGNhciBhbGlhcykpIH4oXzEgYWxpYXMpKSkpXFxuICAgICAgICAgIH5leHByKSkpXFxuXFxuICAoZGVmISBza2lwIChcXG4gICAgZm4qIChuYnIgeHMpIChcXG4gICAgICBsZXRyZWMqIChcXG4gICAgICAgIC1za2lwLVxcbiAgICAgICAgKGZuKiAoeXMpIChcXG4gICAgICAgICAgbGV0KiAobmJyIChjYXIgeXMpIHhzIChfMSB5cykpIChcXG4gICAgICAgICAgICBjb25kXFxuICAgICAgICAgICAgICAoPSAwIG5icikgeHNcXG4gICAgICAgICAgICAgICg9IDEgbmJyKSAoY2RyIHhzKVxcbiAgICAgICAgICAgICAgXFxcImRlZmF1bHRcXFwiICgtc2tpcC0gKGxpc3QgKGRlY3IgbmJyKSAoY2RyIHhzKSkpKSkpKSAoXFxuICAgICAgICAgIC1za2lwLSAobGlzdCBuYnIgeHMpKSkpKVxcblxcbiAgKGRlZiEgaW52b2thYmxlPyAoZm4qICh4KSAob3IgKGZ1bmN0aW9uPyB4KSAobWFjcm8/IHgpKSkpXFxuXFxuICAoZGVmISAuIChcXG4gICAgbWFjcm8qICh4IGtleSAmIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIGAoZ2V0IH54IH5rZXkpXFxuICAgICAgICBgKChnZXQgfnggfmtleSkgfkB4cykpKSlcXG5cXG4gIChkZWYhIC4uIChcXG4gICAgZm4qIChsbyBoaSkgKFxcbiAgICAgIGxldHJlYyogKFxcbiAgICAgICAgLS4uLVxcbiAgICAgICAgKGZuKiAoeHMpIChcXG4gICAgICAgICAgbGV0KiAobG8gKF8wIHhzKSBoaSAoXzEgeHMpIC1saXN0LSAoXzIgeHMpKSAoXFxuICAgICAgICAgICAgaWYgKD0gbG8gaGkpXFxuICAgICAgICAgICAgICAoY29ucyBoaSAtbGlzdC0pXFxuICAgICAgICAgICAgICAoLS4uLSAobGlzdCBsbyAoZGVjciBoaSkgKGNvbnMgaGkgLWxpc3QtKSkpKSkpKSAoXFxuICAgICAgICAgIC0uLi0gKGxpc3QgbG8gaGkgJygpKSkpKSlcXG5cXG4gIChkZWYhIGRlZnJlYyEgKFxcbiAgICBtYWNybyogKGZuLW5hbWUgZm4tYm9keSlcXG4gICAgICBgKGRlZiEgfmZuLW5hbWUgKGxldHJlYyogKH5mbi1uYW1lIH5mbi1ib2R5KSB+Zm4tbmFtZSkpKSlcXG5cXG4gIChkZWYhIGZvciogKFxcbiAgICBtYWNybyogKGxvb3AtcGFyYW1ldGVycyBib2R5KVxcbiAgICAgIGAobG9vcFxcbiAgICAgICAgIH4oXzAgbG9vcC1wYXJhbWV0ZXJzKVxcbiAgICAgICAgIChpZiB+KF8xIGxvb3AtcGFyYW1ldGVycylcXG4gICAgICAgICAgIChkbyB+Ym9keSAobG9vcCB+KF8yIGxvb3AtcGFyYW1ldGVycykpKVxcbiAgICAgICAgICAgbmlsKSkpKVxcblxcbiAgKGRlZiEgZm9yLWVhY2ggKFxcbiAgICBmbiogKGYgeHMpIChcXG4gICAgICByZWR1Y2UgKGZuKiAobWVtbyB4KSAoZG8gKGYgeCkgbWVtbykpIG5pbCB4cykpKVxcblxcbiAgKGRlZiEgbi10aW1lcyAoXFxuICAgIGZuKiAobiBmKSAoXFxuICAgICAgbG9vcFxcbiAgICAgICAgKGkgMClcXG4gICAgICAgIChpZiAoPSBpIG4pXFxuICAgICAgICAgIG5pbFxcbiAgICAgICAgICAoZG8gKGYgaSkgKGxvb3AgKCsgaSAxKSkpKSkpKVxcblxcbiAgKGRlZiEgdGFwIChmbiogKGYgeCkgKGRvIChmIHgpIHgpKSlcXG5cXG4gIChkZWYhIHdpdGgtc2lkZS1lZmZlY3QgKGZuKiAodGh1bmsgeCkgKGRvICh0aHVuaykgeCkpKVxcblxcbiAgKGRlZiEgdGh1bmsgKG1hY3JvKiAoZm9ybSkgYChmbiogKCkgfmZvcm0pKSlcXG5cXG4gIChkZWYhIGNhbGwgKG1hY3JvKiAoZiAmIHhzKSBgKH5mIH5AeHMpKSlcXG5cXG4gIChkZWYhIGFwcGx5IChtYWNybyogKGYgeHMpIGAoZXZhbCAoY29ucyB+ZiB+eHMpKSkpXFxuXFxuICAoZGVmISBldmFsLXN0cmluZyAoZm4qIChlcmxTdHJpbmcpIChldmFsIChwYXJzZSBlcmxTdHJpbmcpKSkpXFxuKVxcblwiIiwiaW1wb3J0IHsgY29tbWVudFNpZ25hbCB9IGZyb20gJy4vY29tbWVudFNpZ25hbCc7XG5cbnZhciBjcmVhdGVUb2tlblJlZ2V4ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvW1xccyxdKih+QHxcXCNcXCt8XFwjXFwtfFxcI1xcIXxbXFxbXFxdKCl7fSdgfkBeXXxcIig/OlxcXFwufFteXFxcXFwiXSkqXCJ8Oy4qfFteXFxzXFxbXFxdKCl7fSdcImAsO10qKS9nO1xufTtcblxudmFyIGlzQ29tbWVudCA9IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIHJldHVybiBtYXRjaFswXSA9PT0gJzsnO1xufTtcblxudmFyIGlzTWVhbmluZ2Z1bCA9IGZ1bmN0aW9uKG1hdGNoKSB7XG4gIHJldHVybiBtYXRjaCAhPT0gJyc7XG59O1xuXG52YXIgdG9rZW5pemUgPSBmdW5jdGlvbihzb3VyY2VDb2RlKSB7XG4gIHZhciBtYXRjaDtcbiAgdmFyIHRva2VuUmVnZXggPSBjcmVhdGVUb2tlblJlZ2V4KCk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgd2hpbGUgKGlzTWVhbmluZ2Z1bChtYXRjaCA9IHRva2VuUmVnZXguZXhlYyhzb3VyY2VDb2RlKVsxXSkpIHtcbiAgICBpZiAoaXNDb21tZW50KG1hdGNoKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKG1hdGNoKTtcbiAgfVxuICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBjb21tZW50U2lnbmFsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHRva2VuaXplIH07XG4iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJy4vcGFyc2UnO1xuaW1wb3J0IHsgdG9rZW5pemUgfSBmcm9tICcuL3Rva2VuaXplJztcblxuZXhwb3J0IGNvbnN0IHRva2VuaXplQW5kUGFyc2UgPSBmdW5jdGlvbihzb3VyY2VDb2RlKSB7XG4gIHJldHVybiBwYXJzZSh0b2tlbml6ZShzb3VyY2VDb2RlKSk7XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlRXJsTGlzdCB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgZXJsQXRvbVR5cGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGVybFR5cGVzIH0gZnJvbSAnLi90eXBlcyc7XG5cbnZhciBjcmVhdGVFcmxBdG9tID0gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlcmxWYWx1ZTogZXJsVmFsdWUsXG4gICAgdHlwZTogZXJsQXRvbVR5cGVcbiAgfTtcbn07XG5cbnZhciBjcmVhdGVFcmxCb29sZWFuID0gZnVuY3Rpb24oanNCb29sZWFuKSB7XG4gIGlmIChqc0Jvb2xlYW4pIHtcbiAgICByZXR1cm4gZXJsVHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsRmFsc2U7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVFcmxJZ25vcmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGVybElnbm9yZTtcbn07XG5cbnZhciBjcmVhdGVFcmxOaWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGVybE5pbDtcbn07XG5cbnZhciBjcmVhdGVFcmxWYWx1ZSA9IGZ1bmN0aW9uKGpzVmFsdWUsIGVybFR5cGUpIHtcbiAgcmV0dXJuIHtcbiAgICBqc1ZhbHVlOiBqc1ZhbHVlLFxuICAgIHR5cGU6IGVybFR5cGVcbiAgfTtcbn07XG5cbnZhciBjcmVhdGVGYWN0b3J5QW5kUHJlZGljYXRlID0gZnVuY3Rpb24oZXJsVHlwZSkge1xuICB2YXIgZmFjdG9yeSA9IGZ1bmN0aW9uKGpzVmFsdWUpIHtcbiAgICByZXR1cm4gY3JlYXRlRXJsVmFsdWUoanNWYWx1ZSwgZXJsVHlwZSk7XG4gIH07XG4gIHZhciBwcmVkaWNhdGUgPSBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgIHJldHVybiBlcmxWYWx1ZS50eXBlID09PSBlcmxUeXBlO1xuICB9O1xuICByZXR1cm4gW2ZhY3RvcnksIHByZWRpY2F0ZV07XG59O1xuXG52YXIgY3JlYXRlUHJlZGljYXRlID0gZnVuY3Rpb24oY29uc3RhbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBjb25zdGFudDtcbiAgfTtcbn07XG5cbnZhciBleHRyYWN0SnNWYWx1ZSA9IGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gIHJldHVybiBlcmxWYWx1ZS5qc1ZhbHVlO1xufTtcblxudmFyIF9lcmxUeXBlcyA9IGVybFR5cGVzLm1hcChjcmVhdGVGYWN0b3J5QW5kUHJlZGljYXRlKTtcblxudmFyIF9jcmVhdGVFcmxCb29sZWFuICAgICAgICAgICAgICA9IF9lcmxUeXBlc1swXVswXTtcbnZhciBpc0VybEJvb2xlYW4gICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMF1bMV07XG52YXIgY3JlYXRlRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uID0gX2VybFR5cGVzWzFdWzBdO1xudmFyIGlzRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uICAgICA9IF9lcmxUeXBlc1sxXVsxXTtcbnZhciBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uICAgICAgPSBfZXJsVHlwZXNbMl1bMF07XG52YXIgaXNFcmxDb3JlUHVyZUZ1bmN0aW9uICAgICAgICAgID0gX2VybFR5cGVzWzJdWzFdO1xudmFyIGNyZWF0ZUVybElkZW50aWZpZXIgICAgICAgICAgICA9IF9lcmxUeXBlc1szXVswXTtcbnZhciBpc0VybElkZW50aWZpZXIgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbM11bMV07XG52YXIgY3JlYXRlRXJsSW5kZXggICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzRdWzBdO1xudmFyIGlzRXJsSW5kZXggICAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s0XVsxXTtcbnZhciBjcmVhdGVFcmxLZXl3b3JkICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbNV1bMF07XG52YXIgaXNFcmxLZXl3b3JkICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzVdWzFdO1xudmFyIF9jcmVhdGVFcmxMaXN0ICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s2XVswXTtcbnZhciBpc0VybExpc3QgICAgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbNl1bMV07XG52YXIgY3JlYXRlRXJsTWFjcm8gICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzddWzBdO1xudmFyIGlzRXJsTWFjcm8gICAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s3XVsxXTtcbnZhciBjcmVhdGVFcmxOdW1iZXIgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbOF1bMF07XG52YXIgaXNFcmxOdW1iZXIgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzhdWzFdO1xudmFyIGNyZWF0ZUVybFNwZWNpYWxGb3JtICAgICAgICAgICA9IF9lcmxUeXBlc1s5XVswXTtcbnZhciBpc0VybFNwZWNpYWxGb3JtICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbOV1bMV07XG52YXIgY3JlYXRlRXJsU3RyaW5nICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzEwXVswXTtcbnZhciBpc0VybFN0cmluZyAgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTBdWzFdO1xudmFyIGNyZWF0ZUVybFN5bWJvbCAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1sxMV1bMF07XG52YXIgaXNFcmxTeW1ib2wgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzExXVsxXTtcbnZhciBfY3JlYXRlRXJsVW5pdCAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTJdWzBdO1xudmFyIF9pc0VybFVuaXQgICAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1sxMl1bMV07XG52YXIgY3JlYXRlRXJsVXNlclB1cmVGdW5jdGlvbiAgICAgID0gX2VybFR5cGVzWzEzXVswXTtcbnZhciBpc0VybFVzZXJQdXJlRnVuY3Rpb24gICAgICAgICAgPSBfZXJsVHlwZXNbMTNdWzFdO1xudmFyIF9jcmVhdGVFcmxBdG9tICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1sxNF1bMF07XG52YXIgaXNFcmxBdG9tICAgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzE0XVsxXTtcblxudmFyIGVybElnbm9yZSA9IF9jcmVhdGVFcmxVbml0KG51bGwpO1xuXG52YXIgZXJsTmlsID0gX2NyZWF0ZUVybFVuaXQobnVsbCk7XG5cbnZhciBlcmxCb29sZWFucyA9IFtmYWxzZSwgdHJ1ZV0ubWFwKF9jcmVhdGVFcmxCb29sZWFuKTtcblxudmFyIGVybEZhbHNlID0gZXJsQm9vbGVhbnNbMF07XG52YXIgZXJsVHJ1ZSAgPSBlcmxCb29sZWFuc1sxXTtcblxudmFyIHByZWRpY2F0ZXMgPSBbZXJsRmFsc2UsIGVybElnbm9yZSwgZXJsTmlsLCBlcmxUcnVlXS5tYXAoY3JlYXRlUHJlZGljYXRlKTtcblxudmFyIGlzRXJsRmFsc2UgID0gcHJlZGljYXRlc1swXTtcbnZhciBpc0VybElnbm9yZSA9IHByZWRpY2F0ZXNbMV07XG52YXIgaXNFcmxOaWwgICAgPSBwcmVkaWNhdGVzWzJdO1xudmFyIGlzRXJsVHJ1ZSAgID0gcHJlZGljYXRlc1szXTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlRXJsQXRvbSxcbiAgY3JlYXRlRXJsQm9vbGVhbixcbiAgY3JlYXRlRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uLFxuICBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uLFxuICBjcmVhdGVFcmxJZGVudGlmaWVyLFxuICBjcmVhdGVFcmxJZ25vcmUsXG4gIGNyZWF0ZUVybEluZGV4LFxuICBjcmVhdGVFcmxLZXl3b3JkLFxuICBjcmVhdGVFcmxMaXN0LFxuICBjcmVhdGVFcmxNYWNybyxcbiAgY3JlYXRlRXJsTmlsLFxuICBjcmVhdGVFcmxOdW1iZXIsXG4gIGNyZWF0ZUVybFNwZWNpYWxGb3JtLFxuICBjcmVhdGVFcmxTdHJpbmcsXG4gIGNyZWF0ZUVybFN5bWJvbCxcbiAgY3JlYXRlRXJsVXNlclB1cmVGdW5jdGlvbixcbiAgZXh0cmFjdEpzVmFsdWUsXG4gIGlzRXJsQXRvbSxcbiAgaXNFcmxCb29sZWFuLFxuICBpc0VybENvcmVFZmZlY3RmdWxGdW5jdGlvbixcbiAgaXNFcmxDb3JlUHVyZUZ1bmN0aW9uLFxuICBlcmxGYWxzZSxcbiAgaXNFcmxGYWxzZSxcbiAgaXNFcmxJZGVudGlmaWVyLFxuICBlcmxJZ25vcmUsXG4gIGlzRXJsSWdub3JlLFxuICBpc0VybEluZGV4LFxuICBpc0VybEtleXdvcmQsXG4gIGlzRXJsTGlzdCxcbiAgaXNFcmxNYWNybyxcbiAgZXJsTmlsLFxuICBpc0VybE5pbCxcbiAgaXNFcmxOdW1iZXIsXG4gIGlzRXJsU3BlY2lhbEZvcm0sXG4gIGlzRXJsU3RyaW5nLFxuICBpc0VybFN5bWJvbCxcbiAgZXJsVHJ1ZSxcbiAgaXNFcmxUcnVlLFxuICBpc0VybFVzZXJQdXJlRnVuY3Rpb25cbn07XG4iLCJ2YXIgZXJsQm9vbGVhblR5cGUgICAgICAgICAgICAgICA9ICdlcmxCb29sZWFuVHlwZSc7XG52YXIgZXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uVHlwZSA9ICdlcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb25UeXBlJztcbnZhciBlcmxDb3JlUHVyZUZ1bmN0aW9uVHlwZSAgICAgID0gJ2VybENvcmVQdXJlRnVuY3Rpb25UeXBlJztcbnZhciBlcmxJZGVudGlmaWVyVHlwZSAgICAgICAgICAgID0gJ2VybElkZW50aWZpZXJUeXBlJztcbnZhciBlcmxJbmRleFR5cGUgICAgICAgICAgICAgICAgID0gJ2VybEluZGV4VHlwZSc7XG52YXIgZXJsS2V5d29yZFR5cGUgICAgICAgICAgICAgICA9ICdlcmxLZXl3b3JkVHlwZSc7XG52YXIgZXJsTGlzdFR5cGUgICAgICAgICAgICAgICAgICA9ICdlcmxMaXN0VHlwZSc7XG52YXIgZXJsTWFjcm9UeXBlICAgICAgICAgICAgICAgICA9ICdlcmxNYWNyb1R5cGUnO1xudmFyIGVybE51bWJlclR5cGUgICAgICAgICAgICAgICAgPSAnZXJsTnVtYmVyVHlwZSc7XG52YXIgZXJsU3BlY2lhbEZvcm1UeXBlICAgICAgICAgICA9ICdlcmxTcGVjaWFsRm9ybVR5cGUnO1xudmFyIGVybFN0cmluZ1R5cGUgICAgICAgICAgICAgICAgPSAnZXJsU3RyaW5nVHlwZSc7XG52YXIgZXJsU3ltYm9sVHlwZSAgICAgICAgICAgICAgICA9ICdlcmxTeW1ib2xUeXBlJztcbnZhciBlcmxVbml0VHlwZSAgICAgICAgICAgICAgICAgID0gJ2VybFVuaXRUeXBlJztcbnZhciBlcmxVc2VyUHVyZUZ1bmN0aW9uVHlwZSAgICAgID0gJ2VybFVzZXJQdXJlRnVuY3Rpb25UeXBlJztcbnZhciBlcmxBdG9tVHlwZSAgICAgICAgICAgICAgICAgID0gJ2VybEF0b21UeXBlJztcblxudmFyIGVybFR5cGVzID0gW1xuICBlcmxCb29sZWFuVHlwZSxcbiAgZXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uVHlwZSxcbiAgZXJsQ29yZVB1cmVGdW5jdGlvblR5cGUsXG4gIGVybElkZW50aWZpZXJUeXBlLFxuICBlcmxJbmRleFR5cGUsXG4gIGVybEtleXdvcmRUeXBlLFxuICBlcmxMaXN0VHlwZSxcbiAgZXJsTWFjcm9UeXBlLFxuICBlcmxOdW1iZXJUeXBlLFxuICBlcmxTcGVjaWFsRm9ybVR5cGUsXG4gIGVybFN0cmluZ1R5cGUsXG4gIGVybFN5bWJvbFR5cGUsXG4gIGVybFVuaXRUeXBlLFxuICBlcmxVc2VyUHVyZUZ1bmN0aW9uVHlwZSxcbiAgZXJsQXRvbVR5cGVcbl07XG5cbmV4cG9ydCB7XG4gIGVybEF0b21UeXBlLFxuICBlcmxCb29sZWFuVHlwZSxcbiAgZXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uVHlwZSxcbiAgZXJsQ29yZVB1cmVGdW5jdGlvblR5cGUsXG4gIGVybElkZW50aWZpZXJUeXBlLFxuICBlcmxJbmRleFR5cGUsXG4gIGVybEtleXdvcmRUeXBlLFxuICBlcmxMaXN0VHlwZSxcbiAgZXJsTWFjcm9UeXBlLFxuICBlcmxOdW1iZXJUeXBlLFxuICBlcmxTcGVjaWFsRm9ybVR5cGUsXG4gIGVybFN0cmluZ1R5cGUsXG4gIGVybFN5bWJvbFR5cGUsXG4gIGVybFR5cGVzLFxuICBlcmxVbml0VHlwZSxcbiAgZXJsVXNlclB1cmVGdW5jdGlvblR5cGVcbn07XG4iLCJmdW5jdGlvbiBkaWZmQXJyYXkodmFsdWUxLCB2YWx1ZTAsIGluZGV4KSB7XG4gIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZTApKSB7XG4gICAgcmV0dXJuIHsgdHJlZTogaW5kZXgsIGNvbW1hbmRzOiBbWydyZXBsYWNlJywgdmFsdWUxXV0sIGluZGV4OiBpbmRleCArIDEgfTtcbiAgfVxuXG4gIHZhciBjb3VudCA9IDA7XG4gIHZhciBsZW5ndGgxID0gdmFsdWUxLmxlbmd0aDtcbiAgdmFyIGxlbmd0aDAgPSB2YWx1ZTAubGVuZ3RoO1xuICB2YXIgbWluTGVuZ3RoID0gTWF0aC5taW4obGVuZ3RoMSwgbGVuZ3RoMCk7XG5cbiAgaWYgKG1pbkxlbmd0aCA+IDEpIHtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IG1pbkxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAodmFsdWUxW2pdICE9PSB2YWx1ZTBbal0pIHtcbiAgICAgICAgY291bnQrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY291bnQgPT09IG1pbkxlbmd0aCkge1xuICAgICAgcmV0dXJuIHsgdHJlZTogaW5kZXgsIGNvbW1hbmRzOiBbWydyZXBsYWNlJywgdmFsdWUxXV0sIGluZGV4OiBpbmRleCArIDEgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgaSA9IDA7XG4gIHZhciB0cmVlID0gW107XG4gIHZhciBjb21tYW5kcyA9IFtdO1xuXG4gIGZvciAoOyBpIDwgbWluTGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodmFsdWUxW2ldICE9PSB2YWx1ZTBbaV0pIHtcbiAgICAgIHZhciBfcGF0Y2ggPSBfZGlmZih2YWx1ZTFbaV0sIHZhbHVlMFtpXSwgaW5kZXgpO1xuICAgICAgaWYgKF9wYXRjaC5jb21tYW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRyZWUucHVzaCh7IGluZGV4OiBpLCB2YWx1ZTogX3BhdGNoLnRyZWUgfSk7XG4gICAgICAgIGNvbW1hbmRzID0gY29tbWFuZHMuY29uY2F0KF9wYXRjaC5jb21tYW5kcyk7XG4gICAgICAgIGluZGV4ID0gaW5kZXggKyBfcGF0Y2guY29tbWFuZHMubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBpIDwgbGVuZ3RoMTsgaSsrKSB7XG4gICAgdHJlZS5wdXNoKHsgaW5kZXg6IGksIHZhbHVlOiBpbmRleCB9KTtcbiAgICBjb21tYW5kcy5wdXNoKFsnaW5zZXJ0QXRFbmQnLCB2YWx1ZTFbaV1dKTtcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgdmFyIHJlbW92YWxzID0gW107XG5cbiAgZm9yICg7IGkgPCBsZW5ndGgwOyBpKyspIHtcbiAgICByZW1vdmFscy51bnNoaWZ0KHsgaW5kZXg6IGksIHZhbHVlOiBpbmRleCB9KTtcbiAgICBjb21tYW5kcy5wdXNoKFsncmVtb3ZlJ10pO1xuICAgIGluZGV4Kys7XG4gIH1cblxuICB0cmVlID0gdHJlZS5jb25jYXQocmVtb3ZhbHMpO1xuXG4gIHJldHVybiB7IHRyZWU6IHRyZWUsIGNvbW1hbmRzOiBjb21tYW5kcywgaW5kZXg6IGluZGV4IH07XG59XG5cbmZ1bmN0aW9uIGRpZmZPYmplY3QodmFsdWUxLCB2YWx1ZTAsIGluZGV4KSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUwKSkge1xuICAgIHJldHVybiB7XG4gICAgICB0cmVlOiBpbmRleCxcbiAgICAgIGNvbW1hbmRzOiBbWydyZXBsYWNlJywgdmFsdWUxXV0sXG4gICAgICBpbmRleDogaW5kZXggKyAxXG4gICAgfTtcbiAgfVxuXG4gIHZhciBrZXlDb3VudCA9IDA7XG4gIHZhciBkaWZmQ291bnQgPSAwO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZTApIHtcbiAgICBpZiAoIXZhbHVlMC5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcbiAgICBrZXlDb3VudCsrO1xuICAgIGlmICghdmFsdWUxLmhhc093blByb3BlcnR5KGtleSkgfHwgdmFsdWUxW2tleV0gIT09IHZhbHVlMFtrZXldKSB7XG4gICAgICBkaWZmQ291bnQrKztcbiAgICB9XG4gIH1cblxuICBpZiAoa2V5Q291bnQgPiAxICYmIGtleUNvdW50ID09PSBkaWZmQ291bnQpIHtcbiAgICByZXR1cm4geyB0cmVlOiBpbmRleCwgY29tbWFuZHM6IFtbJ3JlcGxhY2UnLCB2YWx1ZTFdXSwgaW5kZXg6IGluZGV4ICsgMSB9O1xuICB9XG5cbiAgdmFyIHRyZWUgPSBbXTtcbiAgdmFyIGNvbW1hbmRzID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlMSkge1xuICAgIGlmICghdmFsdWUxLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xuICAgIGlmICh2YWx1ZTAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKHZhbHVlMVtrZXldICE9PSB2YWx1ZTBba2V5XSkge1xuICAgICAgICB2YXIgX3BhdGNoID0gX2RpZmYodmFsdWUxW2tleV0sIHZhbHVlMFtrZXldLCBpbmRleCk7XG4gICAgICAgIGlmIChfcGF0Y2guY29tbWFuZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRyZWUucHVzaCh7IGluZGV4OiBrZXksIHZhbHVlOiBfcGF0Y2gudHJlZSB9KTtcbiAgICAgICAgICBjb21tYW5kcyA9IGNvbW1hbmRzLmNvbmNhdChfcGF0Y2guY29tbWFuZHMpO1xuICAgICAgICAgIGluZGV4ID0gaW5kZXggKyBfcGF0Y2guY29tbWFuZHMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyZWUucHVzaCh7IGluZGV4OiBrZXksIHZhbHVlOiBpbmRleCB9KTtcbiAgICAgIGNvbW1hbmRzLnB1c2goWydzZXRBdEtleScsIHZhbHVlMVtrZXldXSk7XG4gICAgICBpbmRleCsrO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZTApIHtcbiAgICBpZiAoIXZhbHVlMS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB0cmVlLnB1c2goeyBpbmRleDoga2V5LCB2YWx1ZTogaW5kZXggfSk7XG4gICAgICBjb21tYW5kcy5wdXNoKFsnZGVsZXRlJ10pO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyB0cmVlOiB0cmVlLCBjb21tYW5kczogY29tbWFuZHMsIGluZGV4OiBpbmRleCB9O1xufVxuXG5mdW5jdGlvbiBfZGlmZih2YWx1ZTEsIHZhbHVlMCwgaW5kZXgpIHtcbiAgaWYgKHZhbHVlMSA9PT0gdmFsdWUwKSB7XG4gICAgcmV0dXJuIHsgdHJlZTogW10sIGNvbW1hbmRzOiBbXSwgaW5kZXg6IGluZGV4IH07XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZTEpKSB7XG4gICAgcmV0dXJuIGRpZmZBcnJheSh2YWx1ZTEsIHZhbHVlMCwgaW5kZXgpO1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KHZhbHVlMSkpIHtcbiAgICByZXR1cm4gZGlmZk9iamVjdCh2YWx1ZTEsIHZhbHVlMCwgaW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHsgdHJlZTogaW5kZXgsIGNvbW1hbmRzOiBbWydyZXBsYWNlJywgdmFsdWUxXV0sIGluZGV4OiBpbmRleCArIDEgfTtcbn1cblxudmFyIGRpZmYgPSBmdW5jdGlvbih2YWx1ZTEsIHZhbHVlMCkge1xuICB2YXIgcGF0Y2ggPSBfZGlmZih2YWx1ZTEsIHZhbHVlMCwgMCk7XG4gIHJldHVybiB7IHZhbHVlOiBwYXRjaC50cmVlLCBjb21tYW5kczogcGF0Y2guY29tbWFuZHMgfTtcbn07XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbmV4cG9ydCB7IGRpZmYgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB7IHRhZzogdGFnIH07XG5cbiAgICBpZiAoY29uZmlnICE9IG51bGwpIHsgLy8gaXNPYmplY3RcblxuICAgICAgZm9yICh2YXIga2V5IGluIGNvbmZpZykge1xuICAgICAgICBpZiAoa2V5ID09PSAnaWQnKSB7XG4gICAgICAgICAgZWxlbWVudC5pZCA9IGNvbmZpZy5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT09ICdjbGFzc2VzJykge1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NlcyA9IGNvbmZpZy5jbGFzc2VzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUgPSBjb25maWcuc3R5bGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09PSAnYXR0cmlicycpIHtcbiAgICAgICAgICBlbGVtZW50LmF0dHJpYnMgPSBjb25maWcuYXR0cmlicztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiBpc1N0cmluZyhhcmdzWzBdKSkge1xuICAgICAgICBlbGVtZW50LmNoaWxkcmVuID0gYXJnc1swXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2hpbGRyZW4gPSBbXS5jb25jYXQuYXBwbHkoW10sIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufVxuXG52YXIgdGFncyA9IHtcbiAgJ0EnOiB0cnVlLFxuICAnQlVUVE9OJzogdHJ1ZSxcbiAgJ0NBTlZBUyc6IHRydWUsXG4gICdDT0RFJzogdHJ1ZSxcbiAgJ0RJVic6IHRydWUsXG4gICdGT09URVInOiB0cnVlLFxuICAnRk9STSc6IHRydWUsXG4gICdIMSc6IHRydWUsXG4gICdIMic6IHRydWUsXG4gICdIMyc6IHRydWUsXG4gICdINCc6IHRydWUsXG4gICdINSc6IHRydWUsXG4gICdINic6IHRydWUsXG4gICdIRUFERVInOiB0cnVlLFxuICAnSU1HJzogdHJ1ZSxcbiAgJ0xBQkVMJzogdHJ1ZSxcbiAgJ0xJJzogdHJ1ZSxcbiAgJ0xJTksnOiB0cnVlLFxuICAnTkFWJzogdHJ1ZSxcbiAgJ05PU0NSSVBUJzogdHJ1ZSxcbiAgJ09QVEdST1VQJzogdHJ1ZSxcbiAgJ09QVElPTic6IHRydWUsXG4gICdPVVRQVVQnOiB0cnVlLFxuICAnUCc6IHRydWUsXG4gICdQQVJBTSc6IHRydWUsXG4gICdQUkUnOiB0cnVlLFxuICAnU0NSSVBUJzogdHJ1ZSxcbiAgJ1NFQ1RJT04nOiB0cnVlLFxuICAnU0VMRUNUJzogdHJ1ZSxcbiAgJ1NPVVJDRSc6IHRydWUsXG4gICdTUEFOJzogdHJ1ZSxcbiAgJ1NUWUxFJzogdHJ1ZSxcbiAgJ1RFWFRBUkVBJzogdHJ1ZVxufTtcblxudmFyIGVsZW1lbnRGYWN0b3JpZXMgPSB7fTtcblxuZm9yICh2YXIgdGFnTmFtZSBpbiB0YWdzKSB7XG4gIGVsZW1lbnRGYWN0b3JpZXNbdGFnTmFtZV0gPSBjcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xufVxuXG5leHBvcnQgY29uc3QgQSA9IGVsZW1lbnRGYWN0b3JpZXMuQTtcbmV4cG9ydCBjb25zdCBCVVRUT04gPSBlbGVtZW50RmFjdG9yaWVzLkJVVFRPTjtcbmV4cG9ydCBjb25zdCBDQU5WQVMgPSBlbGVtZW50RmFjdG9yaWVzLkNBTlZBUztcbmV4cG9ydCBjb25zdCBDT0RFID0gZWxlbWVudEZhY3Rvcmllcy5DT0RFO1xuZXhwb3J0IGNvbnN0IERJViA9IGVsZW1lbnRGYWN0b3JpZXMuRElWO1xuZXhwb3J0IGNvbnN0IEZPT1RFUiA9IGVsZW1lbnRGYWN0b3JpZXMuRk9PVEVSO1xuZXhwb3J0IGNvbnN0IEZPUk0gPSBlbGVtZW50RmFjdG9yaWVzLkZPUk07XG5leHBvcnQgY29uc3QgSDEgPSBlbGVtZW50RmFjdG9yaWVzLkgxO1xuZXhwb3J0IGNvbnN0IEgyID0gZWxlbWVudEZhY3Rvcmllcy5IMjtcbmV4cG9ydCBjb25zdCBIMyA9IGVsZW1lbnRGYWN0b3JpZXMuSDM7XG5leHBvcnQgY29uc3QgSDQgPSBlbGVtZW50RmFjdG9yaWVzLkg0O1xuZXhwb3J0IGNvbnN0IEg1ID0gZWxlbWVudEZhY3Rvcmllcy5INTtcbmV4cG9ydCBjb25zdCBINiA9IGVsZW1lbnRGYWN0b3JpZXMuSDY7XG5leHBvcnQgY29uc3QgSEVBREVSID0gZWxlbWVudEZhY3Rvcmllcy5IRUFERVI7XG5leHBvcnQgY29uc3QgSU1HID0gZWxlbWVudEZhY3Rvcmllcy5JTUc7XG5leHBvcnQgY29uc3QgTEFCRUwgPSBlbGVtZW50RmFjdG9yaWVzLkxBQkVMO1xuZXhwb3J0IGNvbnN0IExJID0gZWxlbWVudEZhY3Rvcmllcy5MSTtcbmV4cG9ydCBjb25zdCBMSU5LID0gZWxlbWVudEZhY3Rvcmllcy5MSU5LO1xuZXhwb3J0IGNvbnN0IE5BViA9IGVsZW1lbnRGYWN0b3JpZXMuTkFWO1xuZXhwb3J0IGNvbnN0IE5PU0NSSVBUID0gZWxlbWVudEZhY3Rvcmllcy5OT1NDUklQVDtcbmV4cG9ydCBjb25zdCBPUFRHUk9VUCA9IGVsZW1lbnRGYWN0b3JpZXMuT1BUR1JPVVA7XG5leHBvcnQgY29uc3QgT1BUSU9OID0gZWxlbWVudEZhY3Rvcmllcy5PUFRJT047XG5leHBvcnQgY29uc3QgT1VUUFVUID0gZWxlbWVudEZhY3Rvcmllcy5PVVRQVVQ7XG5leHBvcnQgY29uc3QgUCA9IGVsZW1lbnRGYWN0b3JpZXMuUDtcbmV4cG9ydCBjb25zdCBQQVJBTSA9IGVsZW1lbnRGYWN0b3JpZXMuUEFSQU07XG5leHBvcnQgY29uc3QgUFJFID0gZWxlbWVudEZhY3Rvcmllcy5QUkU7XG5leHBvcnQgY29uc3QgU0NSSVBUID0gZWxlbWVudEZhY3Rvcmllcy5TQ1JJUFQ7XG5leHBvcnQgY29uc3QgU0VDVElPTiA9IGVsZW1lbnRGYWN0b3JpZXMuU0VDVElPTjtcbmV4cG9ydCBjb25zdCBTRUxFQ1QgPSBlbGVtZW50RmFjdG9yaWVzLlNFTEVDVDtcbmV4cG9ydCBjb25zdCBTT1VSQ0UgPSBlbGVtZW50RmFjdG9yaWVzLlNPVVJDRTtcbmV4cG9ydCBjb25zdCBTUEFOID0gZWxlbWVudEZhY3Rvcmllcy5TUEFOO1xuZXhwb3J0IGNvbnN0IFNUWUxFID0gZWxlbWVudEZhY3Rvcmllcy5TVFlMRTtcbmV4cG9ydCBjb25zdCBURVhUQVJFQSA9IGVsZW1lbnRGYWN0b3JpZXMuVEVYVEFSRUE7XG4iLCJmdW5jdGlvbiBhdHRhY2hFbGVtZW50KHBhcmVudCwgZWxlbWVudCkge1xuICBpZiAoaXNTdHJpbmcoZWxlbWVudCkpIHtcbiAgICBwYXJlbnQuaW5uZXJUZXh0ID0gZWxlbWVudDsgLy8gP1xuICB9IGVsc2Uge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlRWxlbWVudChwYXJlbnQsIG5ld0VsZW1lbnQsIG9sZEVsZW1lbnQpIHtcbiAgaWYgKGlzU3RyaW5nKG5ld0VsZW1lbnQpKSB7XG4gICAgcGFyZW50LmlubmVyVGV4dCA9IG5ld0VsZW1lbnQ7IC8vID9cbiAgfSBlbHNlIHtcbiAgICBwYXJlbnQucmVwbGFjZUNoaWxkKG5ld0VsZW1lbnQsIG9sZEVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQocGFyZW50LCBjb25maWcpIHtcbiAgYXR0YWNoRWxlbWVudChwYXJlbnQsIGNyZWF0ZUVsZW1lbnQoY29uZmlnKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZFN1YnN0aXR1dGVFbGVtZW50KHBhcmVudCwgY29uZmlnLCBvbGRFbGVtZW50SW5kZXgpIHtcbiAgcmVwbGFjZUVsZW1lbnQoXG4gICAgcGFyZW50LFxuICAgIGNyZWF0ZUVsZW1lbnQoY29uZmlnKSxcbiAgICBmaW5kQ2hpbGQocGFyZW50LCB7IG1vZGU6ICdpbmRleCcsIGtleTogb2xkRWxlbWVudEluZGV4IH0pKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kQXR0YWNoRWxlbWVudHMobm9kZSwgZWxlbWVudHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQobm9kZSwgZWxlbWVudHNbaV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoY29uZmlnKSB7XG4gIGlmIChpc1N0cmluZyhjb25maWcpKSB7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY29uZmlnLnRhZyk7XG4gIGlmIChjb25maWcuaWQgIT0gbnVsbCkge1xuICAgIG5vZGUuaWQgPSBjb25maWcuaWQ7XG4gIH1cbiAgaWYgKGNvbmZpZy5jbGFzc2VzICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrbGFzcyBpbiBjb25maWcuY2xhc3Nlcykge1xuICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGtsYXNzKTtcbiAgICB9XG4gIH1cbiAgaWYgKGNvbmZpZy5hdHRyaWJzICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBhdHRyaWJLZXkgaW4gY29uZmlnLmF0dHJpYnMpIHtcbiAgICAgIGlmIChhdHRyaWJLZXkgIT09ICdzdHlsZScpIHtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmliS2V5LCBjb25maWcuYXR0cmlic1thdHRyaWJLZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGNvbmZpZy5zdHlsZSAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIgc3R5bGVLZXkgaW4gY29uZmlnLnN0eWxlKSB7XG4gICAgICBub2RlLnN0eWxlW3N0eWxlS2V5XSA9IGNvbmZpZy5zdHlsZVtzdHlsZUtleV07XG4gICAgfVxuICB9XG4gIGlmIChjb25maWcuY2hpbGRyZW4gIT0gbnVsbCkge1xuICAgIGlmIChpc1N0cmluZyhjb25maWcuY2hpbGRyZW4pKSB7XG4gICAgICBjcmVhdGVBbmRBdHRhY2hFbGVtZW50KG5vZGUsIGNvbmZpZy5jaGlsZHJlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChuZXdDb25maWcsIGluZGV4KSB7IFxuICAgICAgICBjcmVhdGVBbmRBdHRhY2hFbGVtZW50KG5vZGUsIG5ld0NvbmZpZyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGZpbmRDaGlsZChwYXJlbnQsIGNvbmZpZykge1xuICBzd2l0Y2ggKGNvbmZpZy5tb2RlKSB7XG4gICAgY2FzZSAnaWQnOlxuICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5rZXkpO1xuICAgIGNhc2UgJ2NsYXNzJzpcbiAgICAgIHJldHVybiBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjb25maWcua2V5LmNsYXNzKVtjb25maWcua2V5LmluZGV4XTtcbiAgICBjYXNlICd0YWcnOlxuICAgICAgcmV0dXJuIHBhcmVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShjb25maWcua2V5LnRhZylbY29uZmlnLmtleS5pbmRleF07XG4gICAgY2FzZSAncXVlcnknOlxuICAgICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZy5rZXkucXVlcnkpW2NvbmZpZy5rZXkuaW5kZXhdO1xuICAgIGNhc2UgJ2luZGV4JzpcbiAgICAgIHJldHVybiBwYXJlbnQuY2hpbGROb2Rlc1tjb25maWcua2V5XTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFxcXCJmaW5kQ2hpbGRcXFwiIG1vZGUnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kQ2hpbGRyZW4ocGFyZW50LCBjb25maWcpIHtcbiAgdmFyIGh0bWxDb2xsZWN0aW9uO1xuICBzd2l0Y2ggKGNvbmZpZy5tb2RlKSB7XG4gICAgY2FzZSAnY2xhc3MnOlxuICAgICAgaHRtbENvbGxlY3Rpb24gPSBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjb25maWcua2V5LmNsYXNzKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RhZyc6XG4gICAgICBodG1sQ29sbGVjdGlvbiA9IHBhcmVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShjb25maWcua2V5LnRhZyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdxdWVyeSc6XG4gICAgICBodG1sQ29sbGVjdGlvbiA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZy5rZXkucXVlcnkpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcXFwiZmluZENoaWxkXFxcIiBtb2RlJyk7XG4gIH1cbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGh0bWxDb2xsZWN0aW9uKTtcbn1cblxuZnVuY3Rpb24gaXNDb21tYW5kSW5kZXgodmFsdWUpIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBOdW1iZXJdJztcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBTdHJpbmddJztcbn1cblxuZnVuY3Rpb24gbW9kaWZ5RWxlbWVudChub2RlLCBwYXRjaCkge1xuICBfbW9kaWZ5RWxlbWVudChub2RlLCBwYXRjaC52YWx1ZSwgcGF0Y2guY29tbWFuZHMpO1xufVxuXG5mdW5jdGlvbiBfbW9kaWZ5RWxlbWVudChub2RlLCB0cmVlLCBjb21tYW5kcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gdHJlZVtpXS5pbmRleDtcbiAgICB2YXIgY29udGludWF0aW9uID0gdHJlZVtpXS52YWx1ZTtcblxuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICdpZCc6XG4gICAgICAgIHZhciBjb21tYW5kID0gY29tbWFuZHNbY29udGludWF0aW9uXTtcbiAgICAgICAgc3dpdGNoIChjb21tYW5kWzBdKSB7XG4gICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncmVwbGFjZSc6XG4gICAgICAgICAgY2FzZSAnc2V0QXRLZXknOlxuICAgICAgICAgICAgbm9kZS5pZCA9IGNvbW1hbmRbMV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAndGFnJzpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgZm9yICh2YXIgc3R5bGVJbmRleCA9IDA7IHN0eWxlSW5kZXggPCBjb250aW51YXRpb24ubGVuZ3RoOyBzdHlsZUluZGV4KyspIHtcbiAgICAgICAgICB2YXIgc3R5bGUgPSBjb250aW51YXRpb25bc3R5bGVJbmRleF0uaW5kZXg7XG4gICAgICAgICAgdmFyIGNvbW1hbmQgPSBjb21tYW5kc1tjb250aW51YXRpb25bc3R5bGVJbmRleF0udmFsdWVdO1xuICAgICAgICAgIHN3aXRjaCAoY29tbWFuZFswXSkge1xuICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgICAgbm9kZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShzdHlsZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVwbGFjZSc6XG4gICAgICAgICAgICBjYXNlICdzZXRBdEtleSc6XG4gICAgICAgICAgICAgIG5vZGUuc3R5bGVbc3R5bGVdID0gY29tbWFuZFsxXTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdhdHRyaWJzJzpcbiAgICAgICAgZm9yICh2YXIgYXR0cmliSW5kZXggPSAwOyBhdHRyaWJJbmRleCA8IGNvbnRpbnVhdGlvbi5sZW5ndGg7IGF0dHJpYkluZGV4KyspIHtcbiAgICAgICAgICB2YXIgYXR0cmliID0gY29udGludWF0aW9uW2F0dHJpYkluZGV4XS5pbmRleDtcbiAgICAgICAgICB2YXIgY29tbWFuZCA9IGNvbW1hbmRzW2NvbnRpbnVhdGlvblthdHRyaWJJbmRleF0udmFsdWVdO1xuICAgICAgICAgIHN3aXRjaCAoY29tbWFuZFswXSkge1xuICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgICAgbm9kZS5hdHRyaWJ1dGVzLnJlbW92ZU5hbWVkSXRlbShhdHRyaWIpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAgICAgY2FzZSAnc2V0QXRLZXknOlxuICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWIsIGNvbW1hbmRbMV0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2NsYXNzZXMnOlxuICAgICAgICBpZiAoaXNDb21tYW5kSW5kZXgoY29udGludWF0aW9uKSkge1xuICAgICAgICAgIHZhciBjb21tYW5kID0gY29tbWFuZHNbMF07XG4gICAgICAgICAgc3dpdGNoIChjb21tYW5kWzBdKSB7XG4gICAgICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgICBmb3IgKHZhciBfY2xhc3MgaW4gY29tbWFuZFsxXSkge1xuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShfY2xhc3MpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2V0QXRLZXknOlxuICAgICAgICAgICAgICBmb3IgKHZhciBfY2xhc3MgaW4gY29tbWFuZFsxXSkge1xuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChfY2xhc3MpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKHZhciBjbGFzc0luZGV4ID0gMDsgY2xhc3NJbmRleCA8IGNvbnRpbnVhdGlvbi5sZW5ndGg7IGNsYXNzSW5kZXgrKykge1xuICAgICAgICAgICAgdmFyIF9jbGFzcyA9IGNvbnRpbnVhdGlvbltjbGFzc0luZGV4XS5pbmRleDtcbiAgICAgICAgICAgIHZhciBjb21tYW5kID0gY29tbWFuZHNbY29udGludWF0aW9uW2NsYXNzSW5kZXhdLnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAoY29tbWFuZFswXSkge1xuICAgICAgICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZShfY2xhc3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdzZXRBdEtleSc6XG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKF9jbGFzcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjaGlsZHJlbic6XG4gICAgICAgIGlmIChpc0NvbW1hbmRJbmRleChjb250aW51YXRpb24pKSB7XG4gICAgICAgICAgdmFyIGNvbW1hbmQgPSBjb21tYW5kc1tjb250aW51YXRpb25dXG4gICAgICAgICAgc3dpdGNoIChjb21tYW5kWzBdKSB7XG4gICAgICAgICAgICBjYXNlICdyZW1vdmUnOlxuICAgICAgICAgICAgICByZW1vdmVDaGlsZHJlbihub2RlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZXBsYWNlJzogICAgIC8vID9cbiAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKGNvbW1hbmRbMV0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJUZXh0ID0gY29tbWFuZFsxXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lclRleHQgPSBjb21tYW5kWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDaGlsZHJlbihub2RlKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVBbmRBdHRhY2hFbGVtZW50cyhub2RlLCBjb21tYW5kWzFdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2luc2VydEF0RW5kJzpcbiAgICAgICAgICAgICAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudChub2RlLCBjb21tYW5kWzFdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAodmFyIGNoaWxkSW5kZXggPSAwOyBjaGlsZEluZGV4IDwgY29udGludWF0aW9uLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBjb250aW51YXRpb25bY2hpbGRJbmRleF0uaW5kZXg7XG4gICAgICAgICAgICB2YXIgY2hpbGRDb250aW51YXRpb24gPSBjb250aW51YXRpb25bY2hpbGRJbmRleF0udmFsdWU7XG4gICAgICAgICAgICBpZiAoaXNDb21tYW5kSW5kZXgoY2hpbGRDb250aW51YXRpb24pKSB7XG4gICAgICAgICAgICAgIHZhciBjb21tYW5kID0gY29tbWFuZHNbY2hpbGRDb250aW51YXRpb25dXG4gICAgICAgICAgICAgIHN3aXRjaCAoY29tbWFuZFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JlbW92ZSc6XG4gICAgICAgICAgICAgICAgICByZW1vdmVDaGlsZChub2RlLCBjaGlsZCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZUFuZFN1YnN0aXR1dGVFbGVtZW50KG5vZGUsIGNvbW1hbmRbMV0sIGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2luc2VydEF0RW5kJzpcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQobm9kZSwgY29tbWFuZFsxXSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgX21vZGlmeUVsZW1lbnQobm9kZS5jaGlsZE5vZGVzW2NoaWxkXSwgY2hpbGRDb250aW51YXRpb24sIGNvbW1hbmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkKG5vZGUsIGNoaWxkSW5kZXgpIHtcbiAgcmVtb3ZlTm9kZShmaW5kQ2hpbGQobm9kZSwgeyBtb2RlOiAnaW5kZXgnLCBrZXk6IGNoaWxkSW5kZXggfSkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZHJlbihub2RlKSB7XG4gIHZhciBjaGlsZENvdW50ID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IGNoaWxkQ291bnQgLSAxOyBpID49IDA7IGktLSkge1xuICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5jaGlsZE5vZGVzW2ldKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcbiAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVBbmRBdHRhY2hFbGVtZW50LFxuICBtb2RpZnlFbGVtZW50XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==