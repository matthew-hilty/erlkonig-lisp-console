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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2dldEFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2dldEtleUNob3JkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbnRyb2wvY2hhcnMvaW50ZXJwcmV0S2V5ZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2tleUNvZGVDaGFydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29udHJvbC9jaGFycy9rZXlJZGVudGlmaWVyQ2hhcnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbnRyb2wvZ2V0Vmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29udHJvbC9pbml0aWFsaXplQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9kZXRlY3RDc3NTY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvaW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy9mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy90ZXJtaW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy92aWV3cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvZ2V0SW5pdGlhbE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL21vZGVscy90eXBlcy9jcmVhdGVGcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvdHlwZXMvY3JlYXRlUHJvbXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL21vZGVscy90eXBlcy9jcmVhdGVUZXJtaW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvdHlwZXMvY3JlYXRlVmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL3N1YnNjcmliZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvdmlldy9pbml0aWFsaXplVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L3JlY3JlYXRlQ29uc29sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZUVybGtvbmlnTGlzcENvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvX3Byb2Nlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvY29tbWVudFNpZ25hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9lbnYtdXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2VudjAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvZW52MS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9lbnYyLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2VudjMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvZW52NC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9ldmFsdWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9nZXRMaXNwRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvaW5kZXgtdXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2ludGVycHJldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9qcy11dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3Ava2V5VG9rZW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2xpbmtlZC1saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3BhcnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3NlcmlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9zdGFuZGFyZC1mbnMtYW5kLW1hY3Jvcy5saXNwIiwid2VicGFjazovLy8uL3NyYy9saXNwL3Rva2VuaXplLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3Rva2VuaXplQW5kUGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvdHlwZS11dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JpYm9zb21lL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JpYm9zb21lL2VsZW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9yaWJvc29tZS9pbnRlcnByZXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixJQUFJLEtBQUs7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRXFCOzs7Ozs7Ozs7Ozs7O0FDcEdyQjtBQUFBO0FBQUE7QUFBQTtBQUFnRDtBQUNZOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsNkJBQTZCLHdFQUFtQjtBQUNoRCxHQUFHO0FBQ0g7QUFDQSw2QkFBNkIsNERBQWE7QUFDMUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFdUI7Ozs7Ozs7Ozs7Ozs7QUNsRHZCO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ0k7O0FBRTVDO0FBQ0EsU0FBUyw0REFBUyxDQUFDLGdFQUFXO0FBQzlCOztBQUU0Qjs7Ozs7Ozs7Ozs7OztBQ1A1QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7QUN2SHpCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFK0I7Ozs7Ozs7Ozs7Ozs7QUN6SC9CO0FBQUE7QUFBQTtBQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaUVBQVE7QUFDckI7QUFDQSxhQUFhLGlFQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaUVBQVE7QUFDckI7QUFDQSxhQUFhLGlFQUFRO0FBQ3JCO0FBQ0E7O0FBRXVCOzs7Ozs7Ozs7Ozs7O0FDbkJ2QjtBQUFBO0FBQUE7QUFBQTtBQUE0QztBQUNnQjs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0EsYUFBYSxnRUFBVztBQUN4QjtBQUNBOztBQUVBLG1DQUFtQyx3RUFBZ0I7QUFDbkQ7O0FBRTZCOzs7Ozs7Ozs7Ozs7O0FDYjdCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLGdCQUFnQixXQUFXLGFBQWE7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFOEI7Ozs7Ozs7Ozs7Ozs7QUNsRjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQ0k7QUFDRjtBQUNLO0FBQ047QUFDYjtBQUNLO0FBQ0Y7O0FBRWxEO0FBQ0E7QUFDQSxxQkFBcUIsK0VBQWU7QUFDcEM7QUFDQSxnQkFBZ0I7QUFDaEIsa0JBQWtCLHFFQUFPOztBQUV6QixFQUFFLDJFQUFjOztBQUVoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLDhFQUFrQjs7QUFFL0M7O0FBRUEsZ0JBQWdCLDJEQUFNOztBQUV0QixFQUFFLG9GQUFpQjtBQUNuQixJQUFJLG9EQUFTO0FBQ2IsSUFBSSxzREFBTTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHc0I7Ozs7Ozs7Ozs7Ozs7QUMvQ3RCO0FBQUE7QUFBQTtBQUFtRDs7QUFFbkQ7QUFDQSxTQUFTLHNFQUFXO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyxzRUFBVztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLHNFQUFXO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyxzRUFBVztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFBQTtBQUFBO0FBQXlEO0FBQ0o7O0FBRXJEO0FBQ0EsU0FBUyw0RUFBYztBQUN2QjtBQUNBO0FBQ0EsSUFBSSx3RUFBWTtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOEJBQThCLEdBQUc7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWEsd0VBQVk7QUFDekI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLFFBQVEsMERBQTBEO0FBQ2xFLFFBQVEsa0RBQWtEO0FBQzFEO0FBQ0E7O0FBRUEsU0FBUyw0RUFBYztBQUN2Qjs7QUFFQTtBQUNBLFNBQVMsNEVBQWM7QUFDdkI7QUFDQTtBQUNBLElBQUksd0VBQVk7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyw0RUFBYztBQUN2QjtBQUNBO0FBQ0EsSUFBSSx3RUFBWTtBQUNoQjs7QUFFQTtBQUNBLFNBQVMsNEVBQWM7QUFDdkI7QUFDQTtBQUNBLElBQUksd0VBQVk7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLDRFQUFjO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJLHdFQUFZO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLFdBQVcsNEVBQWM7QUFDekI7QUFDQTtBQUNBLE1BQU0sd0VBQVk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxXQUFXLDRFQUFjO0FBQ3pCO0FBQ0E7QUFDQSxNQUFNLHdFQUFZO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLDRFQUFjO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJLHdFQUFZO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQSxTQUFTLDRFQUFjO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJLHdFQUFZO0FBQ2hCOztBQUVBO0FBQ0EsU0FBUyx3RUFBWTtBQUNyQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4QkFBOEIsR0FBRztBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHlDQUF5QyxFQUFFO0FBQzFFLDZCQUE2QixTQUFTLHlDQUF5Qzs7QUFFL0U7QUFDQTtBQUNBLFFBQVEsNENBQTRDO0FBQ3BEOztBQUVBLGlCQUFpQjtBQUNqQjs7QUFFQSxTQUFTLDRFQUFjO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJLHdFQUFZO0FBQ2hCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0xBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlEO0FBQ047QUFDTTtBQUN6QjtBQUNNOztBQUV0QztBQUNBLFNBQVMsNEVBQWM7QUFDdkIsSUFBSSxrREFBUTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBUTtBQUNaO0FBQ0EsU0FBUyw0RUFBYztBQUN2QjtBQUNBLElBQUksc0VBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyw0RUFBYztBQUN2QjtBQUNBLElBQUksNENBQUs7QUFDVDs7QUFFQTtBQUNBLFNBQVMsNEVBQWM7QUFDdkI7QUFDQSxJQUFJLDRDQUFLO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLFdBQVcsNEVBQWM7QUFDekIsTUFBTSxrREFBUTtBQUNkLE1BQU0sNENBQUs7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLDRFQUFjO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQSxTQUFTLDRFQUFjO0FBQ3ZCO0FBQ0EsSUFBSSw0Q0FBSztBQUNUOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isa0RBQVE7QUFDNUI7QUFDQSxTQUFTLDRFQUFjO0FBQ3ZCO0FBQ0EsSUFBSSxzRUFBVztBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNFO0FBQ0k7QUFDQTs7QUFFeEQ7QUFDQSxTQUFTLDRFQUFjO0FBQ3ZCLElBQUksNEVBQWMsU0FBUyx3RUFBWTtBQUN2QyxJQUFJLHNFQUFXO0FBQ2Y7O0FBRTJCOzs7Ozs7Ozs7Ozs7O0FDWDNCO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0M7QUFDUztBQUNPOztBQUV4RDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsdUJBQXVCLHFFQUFPO0FBQzlCLElBQUksMkVBQWEsWUFBWSwyREFBSTs7QUFFakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWtCOzs7Ozs7Ozs7Ozs7O0FDbEJsQjtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7QUNYckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQzs7QUFFL0M7QUFDQSxTQUFTLCtEQUFJO0FBQ2I7O0FBRUE7QUFDQSxTQUFTLCtEQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUywrREFBSTtBQUNiOztBQUVBO0FBQ0EsU0FBUywrREFBSTtBQUNiOztBQUVBO0FBQ0EsU0FBUywrREFBSTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQiwrREFBSTtBQUNyQjtBQUNBO0FBQ0EsY0FBYyx5Q0FBeUM7QUFDdkQsR0FBRztBQUNIOztBQUVBO0FBQ0EsWUFBWSxzQ0FBc0M7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxtQkFBbUI7QUFDL0IsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFTRTs7Ozs7Ozs7Ozs7OztBQ3ZFRjtBQUFBO0FBQUE7QUFBb0U7O0FBRXBFO0FBQ0EsRUFBRSxvRkFBc0I7QUFDeEI7O0FBRTBCOzs7Ozs7Ozs7Ozs7O0FDTjFCO0FBQUE7QUFBQTtBQUFBO0FBT3NCOztBQVFXOztBQUVqQyxpQkFBaUIsa0VBQU87QUFDeEI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0wsSUFBSSw2REFBRTtBQUNOLElBQUksNkRBQUU7O0FBRU47O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUyw4REFBRztBQUNaO0FBQ0EsSUFBSSw4REFBRztBQUNQO0FBQ0E7QUFDQSxNQUFNLDhEQUFHO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4REFBRztBQUNYO0FBQ0E7QUFDQSxVQUFVLDZEQUFTO0FBQ25COztBQUVBLGtCQUFrQiw4REFBRztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSw4REFBRztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILGtCQUFrQiw4REFBRztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSw4REFBRztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNkRBQVM7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLHNCQUFzQjtBQUN0Qix1QkFBdUIsV0FBVztBQUNsQywwQkFBMEIsV0FBVzs7QUFFbEI7Ozs7Ozs7Ozs7Ozs7QUN4SW5CO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQ0FBa0MsT0FBTztBQUN6QztBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBaURFOzs7Ozs7Ozs7Ozs7O0FDdkxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQzs7QUFFbkMsa0JBQWtCLCtDQUFROztBQUUxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0Msa0NBQWtDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLG1DQUFtQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsa0NBQWtDLGtDQUFrQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxrQ0FBa0Msa0NBQWtDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLGlDQUFpQztBQUMvRDs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLFFBQVE7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFLRSIsImZpbGUiOiJlcmxrb25pZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luaXRpYWxpemVFcmxrb25pZ0xpc3BDb25zb2xlLmpzXCIpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBhID0gJ2EnO1xudmFyIGUgPSAnZSc7XG52YXIgaCA9ICdoJztcbnZhciBsID0gJ2wnO1xudmFyIHUgPSAndSc7XG52YXIgdyA9ICd3JztcblxudmFyIEEgPSAnQSc7XG52YXIgRSA9ICdFJztcbnZhciBIID0gJ0gnO1xudmFyIEwgPSAnTCc7XG52YXIgVSA9ICdVJztcbnZhciBXID0gJ1cnO1xuXG52YXIgYmFja3NwYWNlID0gJ0JhY2tzcGFjZSc7XG52YXIgX2RlbGV0ZSAgID0gJ0RlbGV0ZSc7XG52YXIgZG93biAgICAgID0gJ0Fycm93RG93bic7XG52YXIgZW50ZXIgICAgID0gJ0VudGVyJztcbnZhciBsZWZ0ICAgICAgPSAnQXJyb3dMZWZ0JztcbnZhciByaWdodCAgICAgPSAnQXJyb3dSaWdodCc7XG52YXIgc3BhY2UgICAgID0gJyAnO1xudmFyIHNwYWNlYmFyICA9ICdTcGFjZWJhcic7XG52YXIgdGFiICAgICAgID0gJ1RhYic7XG52YXIgdXAgICAgICAgID0gJ0Fycm93VXAnO1xuXG52YXIgY2hhcmFjdGVycyA9IFtcbiAgc3BhY2UsXG4gICdgJywgJzEnLCAnMicsICAnMycsICc0JywgICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMCcsICctJywgJz0nLFxuICAnficsICchJywgJ0AnLCAgJyMnLCAnJCcsICAnJScsICdeJywgJyYnLCAnKicsICcoJywgJyknLCAnXycsICcrJyxcbiAgJ2EnLCAnYicsICdjJywgICdkJywgJ2UnLCAgJ2YnLCAnZycsICdoJywgJ2knLCAnaicsICdrJywgJ2wnLCAnbScsXG4gICduJywgJ28nLCAncCcsICAncScsICdyJywgICdzJywgJ3QnLCAndScsICd2JywgJ3cnLCAneCcsICd5JywgJ3onLFxuICAnQScsICdCJywgJ0MnLCAgJ0QnLCAnRScsICAnRicsICdHJywgJ0gnLCAnSScsICdKJywgJ0snLCAnTCcsICdNJyxcbiAgJ04nLCAnTycsICdQJywgICdRJywgJ1InLCAgJ1MnLCAnVCcsICdVJywgJ1YnLCAnVycsICdYJywgJ1knLCAnWicsXG4gICdbJywgJ10nLCAnXFxcXCcsICc7JywgJ1xcJycsICcsJywgJy4nLCAnLycsXG4gICd7JywgJ30nLCAnfCcsICAnOicsICdcIicsICAnPCcsICc+JywgJz8nXG5dO1xuXG5mdW5jdGlvbiBnZXRBY3Rpb24oa2V5Q2hvcmQpIHtcbiAgdmFyIHZhbHVlID0ga2V5Q2hvcmQudmFsdWU7XG5cbiAgaWYgKGtleUNob3JkLmN0cmxLZXkpIHtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlIGE6XG4gICAgICBjYXNlIEE6XG4gICAgICAgIHJldHVybiB3cmFwKCdtb3ZlQ3Vyc29yVG9TdGFydCcpO1xuICAgICAgY2FzZSBlOlxuICAgICAgY2FzZSBFOlxuICAgICAgICByZXR1cm4gd3JhcCgnbW92ZUN1cnNvclRvRW5kJyk7XG4gICAgICBjYXNlIGg6XG4gICAgICBjYXNlIEg6XG4gICAgICAgIHJldHVybiB3cmFwKCdkZWxldGVMZWZ0Q2hhcicpO1xuICAgICAgY2FzZSBsOlxuICAgICAgY2FzZSBMOlxuICAgICAgICByZXR1cm4gd3JhcCgnY2xlYXInKTtcbiAgICAgIGNhc2UgdTpcbiAgICAgIGNhc2UgVTpcbiAgICAgICAgcmV0dXJuIHdyYXAoJ2RlbGV0ZVByZUN1cnNvcicpO1xuICAgICAgY2FzZSB3OlxuICAgICAgY2FzZSBXOlxuICAgICAgICByZXR1cm4gd3JhcCgnZGVsZXRlV29yZCcpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHdyYXAoJ25vT3AnKTtcbiAgICB9XG4gIH1cblxuICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgY2FzZSBlbnRlcjpcbiAgICAgIHJldHVybiB3cmFwKCdzdWJtaXQnKTtcbiAgICBjYXNlIGJhY2tzcGFjZTpcbiAgICAgIHJldHVybiB3cmFwKCdkZWxldGVMZWZ0Q2hhcicpO1xuICAgIGNhc2UgbGVmdDpcbiAgICAgIHJldHVybiB3cmFwKCdtb3ZlQ3Vyc29yTGVmdCcpO1xuICAgIGNhc2UgcmlnaHQ6XG4gICAgICByZXR1cm4gd3JhcCgnbW92ZUN1cnNvclJpZ2h0Jyk7XG4gICAgY2FzZSB1cDpcbiAgICAgIHJldHVybiB3cmFwKCdyZXdpbmQnKTtcbiAgICBjYXNlIGRvd246XG4gICAgICByZXR1cm4gd3JhcCgnZmFzdEZvcndhcmQnKTtcbiAgICBjYXNlIF9kZWxldGU6XG4gICAgICByZXR1cm4gd3JhcCgnZGVsZXRlUmlnaHRDaGFyJyk7XG4gICAgY2FzZSB0YWI6XG4gICAgICByZXR1cm4gd3JhcCgnY29tcGxldGVXb3JkJyk7XG4gICAgY2FzZSBzcGFjZTpcbiAgICBjYXNlIHNwYWNlYmFyOlxuICAgICAgcmV0dXJuIHsgbmFtZTogJ2FkZENoYXInLCBjaGFyOiAnICcgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGlzQ2hhcmFjdGVyKHZhbHVlKVxuICAgICAgICA/IHsgbmFtZTogJ2FkZENoYXInLCBjaGFyOiB2YWx1ZSB9XG4gICAgICAgIDogd3JhcCgnbm9PcCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzQ2hhcmFjdGVyKHZhbHVlKSB7XG4gIHJldHVybiBjaGFyYWN0ZXJzLmluZGV4T2YodmFsdWUpID49IDA7XG59XG5cbmZ1bmN0aW9uIHdyYXAoYWN0aW9uTmFtZSkge1xuICByZXR1cm4geyBuYW1lOiBhY3Rpb25OYW1lIH07XG59XG5cbmV4cG9ydCB7IGdldEFjdGlvbiB9O1xuIiwiaW1wb3J0IHsga2V5Q29kZUNoYXJ0cyB9IGZyb20gJy4va2V5Q29kZUNoYXJ0cyc7XG5pbXBvcnQgeyBrZXlJZGVudGlmaWVyQ2hhcnRzIH0gZnJvbSAnLi9rZXlJZGVudGlmaWVyQ2hhcnRzJztcblxuZnVuY3Rpb24gZ2V0RXZlbnRQcm94eShraW5kLCBldmVudCkge1xuICByZXR1cm4ge1xuICAgIHZhbHVlOiBldmVudFtraW5kXSxcbiAgICBhbHRLZXk6IGV2ZW50LmFsdEtleSxcbiAgICBjdHJsS2V5OiBldmVudC5jdHJsS2V5LFxuICAgIHNoaWZ0S2V5OiBldmVudC5zaGlmdEtleVxuICB9O1xufTtcblxuZnVuY3Rpb24gaWRlbnRpdHkoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50O1xufVxuXG5mdW5jdGlvbiBnZXRLZXlDaG9yZChldmVudCkge1xuICB2YXIgbm9ybWFsaXplO1xuICB2YXIgcHJvcGVydHk7XG5cbiAgaWYgKGV2ZW50LmtleSAhPSBudWxsKSB7XG4gICAgcHJvcGVydHkgPSAna2V5JztcbiAgICBub3JtYWxpemUgPSBpZGVudGl0eTtcbiAgfSBlbHNlIGlmIChldmVudC5rZXlJZGVudGlmaWVyICE9IG51bGwpIHtcbiAgICBwcm9wZXJ0eSA9ICdrZXlJZGVudGlmaWVyJztcbiAgICBub3JtYWxpemUgPSBfZ2V0S2V5Q2hvcmQoa2V5SWRlbnRpZmllckNoYXJ0cyk7XG4gIH0gZWxzZSB7XG4gICAgcHJvcGVydHkgPSAna2V5Q29kZSc7XG4gICAgbm9ybWFsaXplID0gX2dldEtleUNob3JkKGtleUNvZGVDaGFydHMpO1xuICB9XG5cbiAgcmV0dXJuIG5vcm1hbGl6ZShnZXRFdmVudFByb3h5KHByb3BlcnR5LCBldmVudCkpO1xufVxuXG5mdW5jdGlvbiBfZ2V0S2V5Q2hvcmQoY29udmVyc2lvbkNoYXJ0cykge1xuICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBnZXRLZXlDaG9yZFZhbHVlKGNvbnZlcnNpb25DaGFydHMsIGV2ZW50LnZhbHVlLCBldmVudC5zaGlmdEtleSksXG4gICAgICBhbHRLZXk6IGV2ZW50LmFsdEtleSxcbiAgICAgIGN0cmxLZXk6IGV2ZW50LmN0cmxLZXksXG4gICAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXlcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRLZXlDaG9yZFZhbHVlKGNvbnZlcnNpb25DaGFydHMsIHZhbHVlLCBzaGlmdEtleSkge1xuICB2YXIga2V5ID0gc2hpZnRLZXkgPyAnd2l0aFNoaWZ0JyA6ICd3aXRob3V0U2hpZnQnO1xuICByZXR1cm4gY29udmVyc2lvbkNoYXJ0c1trZXldW3ZhbHVlXTtcbn1cblxuZXhwb3J0IHsgZ2V0S2V5Q2hvcmQgfTtcbiIsImltcG9ydCB7IGdldEFjdGlvbiB9IGZyb20gJy4vZ2V0QWN0aW9uJztcbmltcG9ydCB7IGdldEtleUNob3JkIH0gZnJvbSAnLi9nZXRLZXlDaG9yZCc7XG5cbmZ1bmN0aW9uIGludGVycHJldEtleWRvd24oZXZlbnQpIHtcbiAgcmV0dXJuIGdldEFjdGlvbihnZXRLZXlDaG9yZChldmVudCkpO1xufVxuXG5leHBvcnQgeyBpbnRlcnByZXRLZXlkb3duIH07XG4iLCJ2YXIga2V5Q29kZUNoYXJ0cyA9IHtcbiAgd2l0aFNoaWZ0OiB7XG4gICAgOCAgOiAnQmFja3NwYWNlJyxcbiAgICA5ICA6ICdUYWInLFxuICAgIDEzIDogJ0VudGVyJyxcbiAgICAzMiA6ICcgJyxcbiAgICAzNyA6ICdBcnJvd0xlZnQnLFxuICAgIDM4IDogJ0Fycm93VXAnLFxuICAgIDM5IDogJ0Fycm93UmlnaHQnLFxuICAgIDQwIDogJ0Fycm93RG93bicsXG4gICAgNDYgOiAnRGVsZXRlJyxcbiAgICA0OCA6ICcpJyxcbiAgICA0OSA6ICchJyxcbiAgICA1MCA6ICdAJyxcbiAgICA1MSA6ICcjJyxcbiAgICA1MiA6ICckJyxcbiAgICA1MyA6ICclJyxcbiAgICA1NCA6ICdeJyxcbiAgICA1NSA6ICcmJyxcbiAgICA1NiA6ICcqJyxcbiAgICA1NyA6ICcoJyxcbiAgICA1OSA6ICc6JyxcbiAgICA2MSA6ICcrJyxcbiAgICA2NSA6ICdBJyxcbiAgICA2NiA6ICdCJyxcbiAgICA2NyA6ICdDJyxcbiAgICA2OCA6ICdEJyxcbiAgICA2OSA6ICdFJyxcbiAgICA3MCA6ICdGJyxcbiAgICA3MSA6ICdHJyxcbiAgICA3MiA6ICdIJyxcbiAgICA3MyA6ICdJJyxcbiAgICA3NCA6ICdKJyxcbiAgICA3NSA6ICdLJyxcbiAgICA3NiA6ICdMJyxcbiAgICA3NyA6ICdNJyxcbiAgICA3OCA6ICdOJyxcbiAgICA3OSA6ICdPJyxcbiAgICA4MCA6ICdQJyxcbiAgICA4MSA6ICdRJyxcbiAgICA4MiA6ICdSJyxcbiAgICA4MyA6ICdTJyxcbiAgICA4NCA6ICdUJyxcbiAgICA4NSA6ICdVJyxcbiAgICA4NiA6ICdWJyxcbiAgICA4NyA6ICdXJyxcbiAgICA4OCA6ICdYJyxcbiAgICA4OSA6ICdZJyxcbiAgICA5MCA6ICdaJyxcbiAgICAxNzM6ICdfJyxcbiAgICAxODg6ICc8JyxcbiAgICAxOTA6ICc+JyxcbiAgICAxOTE6ICc/JyxcbiAgICAxOTI6ICd+JyxcbiAgICAyMTk6ICd7JyxcbiAgICAyMjA6ICd8JyxcbiAgICAyMjE6ICd9JyxcbiAgICAyMjI6ICdcIidcbiAgfSxcbiAgd2l0aG91dFNoaWZ0OiB7XG4gICAgOCAgOiAnQmFja3NwYWNlJyxcbiAgICA5ICA6ICdUYWInLFxuICAgIDEzIDogJ0VudGVyJyxcbiAgICAzMiA6ICcgJyxcbiAgICAzNyA6ICdBcnJvd0xlZnQnLFxuICAgIDM4IDogJ0Fycm93VXAnLFxuICAgIDM5IDogJ0Fycm93UmlnaHQnLFxuICAgIDQwIDogJ0Fycm93RG93bicsXG4gICAgNDYgOiAnRGVsZXRlJyxcbiAgICA0ODogJzAnLFxuICAgIDQ5OiAnMScsXG4gICAgNTA6ICcyJyxcbiAgICA1MTogJzMnLFxuICAgIDUyOiAnNCcsXG4gICAgNTM6ICc1JyxcbiAgICA1NDogJzYnLFxuICAgIDU1OiAnNycsXG4gICAgNTY6ICc4JyxcbiAgICA1NzogJzknLFxuICAgIDU5OiAnOycsXG4gICAgNjE6ICc9JyxcbiAgICA2NTogJ2EnLFxuICAgIDY2OiAnYicsXG4gICAgNjc6ICdjJyxcbiAgICA2ODogJ2QnLFxuICAgIDY5OiAnZScsXG4gICAgNzA6ICdmJyxcbiAgICA3MTogJ2cnLFxuICAgIDcyOiAnaCcsXG4gICAgNzM6ICdpJyxcbiAgICA3NDogJ2onLFxuICAgIDc1OiAnaycsXG4gICAgNzY6ICdsJyxcbiAgICA3NzogJ20nLFxuICAgIDc4OiAnbicsXG4gICAgNzk6ICdvJyxcbiAgICA4MDogJ3AnLFxuICAgIDgxOiAncScsXG4gICAgODI6ICdyJyxcbiAgICA4MzogJ3MnLFxuICAgIDg0OiAndCcsXG4gICAgODU6ICd1JyxcbiAgICA4NjogJ3YnLFxuICAgIDg3OiAndycsXG4gICAgODg6ICd4JyxcbiAgICA4OTogJ3knLFxuICAgIDkwOiAneicsXG4gICAgMTczOiAnLScsXG4gICAgMTg4OiAnLCcsXG4gICAgMTkwOiAnLicsXG4gICAgMTkxOiAnLycsXG4gICAgMTkyOiAnYCcsXG4gICAgMjE5OiAnWycsXG4gICAgMjIwOiAnXFxcXCcsXG4gICAgMjIxOiAnXScsXG4gICAgMjIyOiAnXFwnJ1xuICB9XG59O1xuXG5leHBvcnQgeyBrZXlDb2RlQ2hhcnRzIH07XG4iLCJ2YXIga2V5SWRlbnRpZmllckNoYXJ0cyA9IHtcbiAgd2l0aG91dFNoaWZ0OiB7XG4gICAgJ1UrMDA0MSc6ICdhJyxcbiAgICAnVSswMDQyJzogJ2InLFxuICAgICdVKzAwNDMnOiAnYycsXG4gICAgJ1UrMDA0NCc6ICdkJyxcbiAgICAnVSswMDQ1JzogJ2UnLFxuICAgICdVKzAwNDYnOiAnZicsXG4gICAgJ1UrMDA0Nyc6ICdnJyxcbiAgICAnVSswMDQ4JzogJ2gnLFxuICAgICdVKzAwNDknOiAnaScsXG4gICAgJ1UrMDA0QSc6ICdqJyxcbiAgICAnVSswMDRCJzogJ2snLFxuICAgICdVKzAwNEMnOiAnbCcsXG4gICAgJ1UrMDA0RCc6ICdtJyxcbiAgICAnVSswMDRFJzogJ24nLFxuICAgICdVKzAwNEYnOiAnbycsXG4gICAgJ1UrMDA1MCc6ICdwJyxcbiAgICAnVSswMDUxJzogJ3EnLFxuICAgICdVKzAwNTInOiAncicsXG4gICAgJ1UrMDA1Myc6ICdzJyxcbiAgICAnVSswMDU0JzogJ3QnLFxuICAgICdVKzAwNTUnOiAndScsXG4gICAgJ1UrMDA1Nic6ICd2JyxcbiAgICAnVSswMDU3JzogJ3cnLFxuICAgICdVKzAwNTgnOiAneCcsXG4gICAgJ1UrMDA1OSc6ICd5JyxcbiAgICAnVSswMDVBJzogJ3onLFxuICAgICdVKzAwMzAnOiAnMCcsXG4gICAgJ1UrMDAzMSc6ICcxJyxcbiAgICAnVSswMDMyJzogJzInLFxuICAgICdVKzAwMzMnOiAnMycsXG4gICAgJ1UrMDAzNCc6ICc0JyxcbiAgICAnVSswMDM1JzogJzUnLFxuICAgICdVKzAwMzYnOiAnNicsXG4gICAgJ1UrMDAzNyc6ICc3JyxcbiAgICAnVSswMDM4JzogJzgnLFxuICAgICdVKzAwMzknOiAnOScsXG4gICAgJ1UrMDBDMCc6ICdgJyxcbiAgICAnVSswMEJEJzogJy0nLFxuICAgICdVKzAwQkInOiAnPScsXG4gICAgJ1UrMDBEQic6ICdbJyxcbiAgICAnVSswMEREJzogJ10nLFxuICAgICdVKzAwREMnOiAnXFxcXCcsXG4gICAgJ1UrMDBCQSc6ICc7JyxcbiAgICAnVSswMERFJzogJ1xcJycsXG4gICAgJ1UrMDBCQyc6ICcsJyxcbiAgICAnVSswMEJFJzogJy4nLFxuICAgICdVKzAwQkYnOiAnLycsXG4gICAgJ1UrMDAyMCc6ICcgJyxcbiAgICAnVSswMDA4JzogJ0JhY2tzcGFjZScsXG4gICAgJ1UrMDA3NSc6ICdEZWxldGUnLFxuICAgICdEb3duJyAgOiAnQXJyb3dEb3duJyxcbiAgICAnRW50ZXInIDogJ0VudGVyJyxcbiAgICAnTGVmdCcgIDogJ0Fycm93TGVmdCcsXG4gICAgJ1JpZ2h0JyA6ICdBcnJvd1JpZ2h0JyxcbiAgICAnVSswMDIwJzogJyAnLFxuICAgICdVKzAwMDknOiAnVGFiJyxcbiAgICAnVXAnICAgIDogJ0Fycm93VXAnXG4gIH0sXG4gIHdpdGhTaGlmdDoge1xuICAgICdVKzAwNDEnOiAnQScsXG4gICAgJ1UrMDA0Mic6ICdCJyxcbiAgICAnVSswMDQzJzogJ0MnLFxuICAgICdVKzAwNDQnOiAnRCcsXG4gICAgJ1UrMDA0NSc6ICdFJyxcbiAgICAnVSswMDQ2JzogJ0YnLFxuICAgICdVKzAwNDcnOiAnRycsXG4gICAgJ1UrMDA0OCc6ICdIJyxcbiAgICAnVSswMDQ5JzogJ0knLFxuICAgICdVKzAwNEEnOiAnSicsXG4gICAgJ1UrMDA0Qic6ICdLJyxcbiAgICAnVSswMDRDJzogJ0wnLFxuICAgICdVKzAwNEQnOiAnTScsXG4gICAgJ1UrMDA0RSc6ICdOJyxcbiAgICAnVSswMDRGJzogJ08nLFxuICAgICdVKzAwNTAnOiAnUCcsXG4gICAgJ1UrMDA1MSc6ICdRJyxcbiAgICAnVSswMDUyJzogJ1InLFxuICAgICdVKzAwNTMnOiAnUycsXG4gICAgJ1UrMDA1NCc6ICdUJyxcbiAgICAnVSswMDU1JzogJ1UnLFxuICAgICdVKzAwNTYnOiAnVicsXG4gICAgJ1UrMDA1Nyc6ICdXJyxcbiAgICAnVSswMDU4JzogJ1gnLFxuICAgICdVKzAwNTknOiAnWScsXG4gICAgJ1UrMDA1QSc6ICdaJyxcbiAgICAnVSswMDMwJzogJyknLFxuICAgICdVKzAwMzEnOiAnIScsXG4gICAgJ1UrMDAzMic6ICdAJyxcbiAgICAnVSswMDMzJzogJyMnLFxuICAgICdVKzAwMzQnOiAnJCcsXG4gICAgJ1UrMDAzNSc6ICclJyxcbiAgICAnVSswMDM2JzogJ14nLFxuICAgICdVKzAwMzcnOiAnJicsXG4gICAgJ1UrMDAzOCc6ICcqJyxcbiAgICAnVSswMDM5JzogJygnLFxuICAgICdVKzAwQzAnOiAnficsXG4gICAgJ1UrMDBCRCc6ICdfJyxcbiAgICAnVSswMEJCJzogJysnLFxuICAgICdVKzAwREInOiAneycsXG4gICAgJ1UrMDBERCc6ICd9JyxcbiAgICAnVSswMERDJzogJ3wnLFxuICAgICdVKzAwQkEnOiAnOicsXG4gICAgJ1UrMDBERSc6ICdcIicsXG4gICAgJ1UrMDBCQyc6ICc8JyxcbiAgICAnVSswMEJFJzogJz4nLFxuICAgICdVKzAwQkYnOiAnPycsXG4gICAgJ1UrMDAyMCc6ICcgJyxcbiAgICAnVSswMDA4JzogJ0JhY2tzcGFjZScsXG4gICAgJ1UrMDA3NSc6ICdEZWxldGUnLFxuICAgICdEb3duJyAgOiAnQXJyb3dEb3duJyxcbiAgICAnRW50ZXInIDogJ0VudGVyJyxcbiAgICAnTGVmdCcgIDogJ0Fycm93TGVmdCcsXG4gICAgJ1JpZ2h0JyA6ICdBcnJvd1JpZ2h0JyxcbiAgICAnVSswMDIwJzogJyAnLFxuICAgICdVKzAwMDknOiAnVGFiJyxcbiAgICAnVXAnICAgIDogJ0Fycm93VXAnXG4gIH1cbn07XG5cbmV4cG9ydCB7IGtleUlkZW50aWZpZXJDaGFydHMgfTtcbiIsImltcG9ydCB7IFZpZXdwb3J0IH0gZnJvbSAnLi4vbW9kZWxzL2FjdGlvbnMvdmlld3BvcnQnO1xuXG5mdW5jdGlvbiBnZXRWaWV3cG9ydChhY3Rpb24sIGNvbmZpZykge1xuICB2YXIgY29tbWFuZCA9IGFjdGlvbi5uYW1lO1xuICB2YXIgdmlld3BvcnQgPSBjb25maWcudmlld3BvcnQ7XG4gIHN3aXRjaCAoY29tbWFuZCkge1xuICAgIGNhc2UgJ2FkZENoYXInOlxuICAgICAgcmV0dXJuIFZpZXdwb3J0LmFkZENoYXIodmlld3BvcnQsIGFjdGlvbi5jaGFyKTtcbiAgICBjYXNlICdjb21wbGV0ZVdvcmQnOlxuICAgICAgcmV0dXJuIFZpZXdwb3J0LmNvbXBsZXRlV29yZCh2aWV3cG9ydCwgY29uZmlnLmdldENhbmRpZGF0ZXMpO1xuICAgIGNhc2UgJ25vT3AnOlxuICAgICAgcmV0dXJuIHZpZXdwb3J0O1xuICAgIGNhc2UgJ3N1Ym1pdCc6XG4gICAgICByZXR1cm4gVmlld3BvcnQuc3VibWl0KHZpZXdwb3J0LCBjb25maWcudHJhbnNmb3JtKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFZpZXdwb3J0W2NvbW1hbmRdKHZpZXdwb3J0KTtcbiAgfVxufVxuXG5leHBvcnQgeyBnZXRWaWV3cG9ydCB9O1xuIiwiaW1wb3J0IHsgZ2V0Vmlld3BvcnQgfSBmcm9tICcuL2dldFZpZXdwb3J0JztcbmltcG9ydCB7IGludGVycHJldEtleWRvd24gfSBmcm9tICcuL2NoYXJzL2ludGVycHJldEtleWRvd24nO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplQ29udHJvbChzdWJzY3JpYmUsIHJlbmRlciwgY29uZmlnKSB7XG4gIHZhciBoYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChnZXRBY3Rpb24pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZW5kZXIoZ2V0Vmlld3BvcnQoZ2V0QWN0aW9uKGV2ZW50KSwgY29uZmlnKSk7XG4gICAgfTtcbiAgfVxuXG4gIHN1YnNjcmliZSgna2V5ZG93bicsIGhhbmRsZUV2ZW50KGludGVycHJldEtleWRvd24pKTtcbn1cblxuZXhwb3J0IHsgaW5pdGlhbGl6ZUNvbnRyb2wgfTtcbiIsInZhciBfbm9kZUlkICAgICA9ICcjZXJsLWNzcy1zY3JvbGxiYXItdGVzdC1kaXYnO1xudmFyIF9wcmVmaXhlcyAgID0gWyctd2Via2l0LScsICctbW96LScsICctby0nLCAnLW1zLSddO1xudmFyIF9wc2V1ZG8gICAgID0gJzo6JztcbnZhciBfc2Nyb2xsYmFyICA9ICdzY3JvbGxiYXInO1xudmFyIF93aWR0aDEwcHggID0gJ3t3aWR0aDoxMHB4O30nO1xuXG5mdW5jdGlvbiBjcmVhdGVSdWxlKHByZWZpeCkge1xuICByZXR1cm4gX25vZGVJZCArIF9wc2V1ZG8gKyBwcmVmaXggKyBfc2Nyb2xsYmFyICsgX3dpZHRoMTBweDtcbn1cblxuZnVuY3Rpb24gX2RldGVjdENzc1Njcm9sbGJhcihzdHlsZVJ1bGUpIHtcbiAgdmFyIGJvZHkgPSBnZXRCb2R5KCk7XG4gIHZhciBkb2NFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5vZGUuaWQgPSAnZXJsLWNzcy1zY3JvbGxiYXItdGVzdC1kaXYnO1xuICBkaXYuYXBwZW5kQ2hpbGQobm9kZSk7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuICBzdHlsZS5pZCA9ICdlcmwtY3NzLXNjcm9sbGJhci10ZXN0LXN0eWxlJztcbiAgdmFyIG5vbmNlTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGxiYXItbm9uY2UnKTtcbiAgdmFyIG5vbmNlID0gbm9uY2VOb2RlLmRhdGFzZXRbJ3Njcm9sbGJhck5vbmNlJ107XG4gIHN0eWxlLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBub25jZSk7XG5cbiAgKGJvZHkuZmFrZSA/IGJvZHkgOiBkaXYpLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBzdHlsZVJ1bGU7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3R5bGVSdWxlKSk7XG4gIH1cblxuICBkaXYuaWQgPSAnZXJsLWNzcy1zY3JvbGwtdGVzdCc7XG5cbiAgaWYgKGJvZHkuZmFrZSkge1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB2YXIgZG9jT3ZlcmZsb3cgPSBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93O1xuICAgIGRvY0VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBkb2NFbGVtZW50LmFwcGVuZENoaWxkKGJvZHkpO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IGhhc0Nzc1Njcm9sbGJhcihub2RlLCAzMCk7XG5cbiAgaWYgKGJvZHkuZmFrZSkge1xuICAgIGJvZHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChib2R5KTtcbiAgICBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gZG9jT3ZlcmZsb3c7XG4gICAgZG9jRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gIH0gZWxzZSB7XG4gICAgZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGRldGVjdENzc1Njcm9sbGJhcigpIHtcbiAgdmFyIGNzc1Njcm9sbGJhciA9XG4gICAgX25vZGVJZCArICd7b3ZlcmZsb3c6c2Nyb2xsO3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHg7fScgK1xuICAgIF9wcmVmaXhlcy5tYXAoY3JlYXRlUnVsZSkuam9pbignJykgK1xuICAgIGNyZWF0ZVJ1bGUoJycpO1xuXG4gIHJldHVybiBfZGV0ZWN0Q3NzU2Nyb2xsYmFyKGNzc1Njcm9sbGJhcik7XG59XG5cbmZ1bmN0aW9uIGdldEJvZHkoKSB7XG4gIHZhciBfYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgaWYgKCFfYm9keSkge1xuICAgIHZhciBpc1N2ZyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJztcbiAgICBfYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXNTdmcgPyAnc3ZnJyA6ICdib2R5Jyk7XG4gICAgX2JvZHkuZmFrZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX2JvZHk7XG59XG5cbmZ1bmN0aW9uIGhhc0Nzc1Njcm9sbGJhcihub2RlLCBleHBlY3RlZFdpZHRoKSB7XG4gIHJldHVybiAnc2Nyb2xsV2lkdGgnIGluIG5vZGUgJiYgbm9kZS5zY3JvbGxXaWR0aCA9PT0gZXhwZWN0ZWRXaWR0aDtcbn1cblxuZXhwb3J0IHsgZGV0ZWN0Q3NzU2Nyb2xsYmFyIH07XG4iLCJpbXBvcnQgeyBkZXRlY3RDc3NTY3JvbGxiYXIgfSAgZnJvbSAnLi9kZXRlY3RDc3NTY3JvbGxiYXInO1xuaW1wb3J0IHsgZ2V0SW5pdGlhbE1vZGVsIH0gICAgIGZyb20gJy4vbW9kZWxzL2dldEluaXRpYWxNb2RlbCc7XG5pbXBvcnQgeyBFUkxLSU5HIH0gICAgICAgICAgICAgZnJvbSAnLi92aWV3L3JlY3JlYXRlQ29uc29sZSc7XG5pbXBvcnQgeyBpbml0aWFsaXplQ29udHJvbCB9ICAgZnJvbSAnLi9jb250cm9sL2luaXRpYWxpemVDb250cm9sJztcbmltcG9ydCB7IGluaXRpYWxpemVWaWV3IH0gICAgICBmcm9tICcuL3ZpZXcvaW5pdGlhbGl6ZVZpZXcnO1xuaW1wb3J0IHsgcmVuZGVyIH0gICAgICAgICAgICAgIGZyb20gJy4vcmVuZGVyJztcbmltcG9ydCB7IHNjcm9sbCB9ICAgICAgICAgICAgICBmcm9tICcuL3ZpZXcvc2Nyb2xsJztcbmltcG9ydCB7IHN1YnNjcmliZSB9ICAgICAgICAgICBmcm9tICcuL3N1YnNjcmliZSc7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoY29uZmlnKSB7XG4gIHZhciByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLm5vZGVJZCk7XG4gIHZhciBpbml0aWFsTW9kZWwgPSBnZXRJbml0aWFsTW9kZWwoKTtcbiAgdmFyIHByb21wdExhYmVsID0gY29uZmlnLnByb21wdExhYmVsO1xuICB2YXIgbGFiZWxzID0geyBwcm9tcHRMYWJlbDogcHJvbXB0TGFiZWwgfTtcbiAgdmFyIHZpZXdNb2RlbCA9IEVSTEtJTkcobGFiZWxzLCBpbml0aWFsTW9kZWwpO1xuXG4gIGluaXRpYWxpemVWaWV3KHJvb3QsIHZpZXdNb2RlbCk7XG5cbiAgdmFyIHJvb3RDaGlsZCA9IHJvb3QuY2hpbGROb2Rlc1swXTtcblxuICB2YXIgY29udHJvbENvbmZpZyA9IHtcbiAgICBnZXRDYW5kaWRhdGVzOiBjb25maWcuZ2V0Q2FuZGlkYXRlcyxcbiAgICBwcm9tcHRMYWJlbDogcHJvbXB0TGFiZWwsXG4gICAgdHJhbnNmb3JtOiBjb25maWcudHJhbnNmb3JtLFxuICAgIHZpZXdwb3J0OiBpbml0aWFsTW9kZWxcbiAgfTtcblxuICB2YXIgY3NzU2Nyb2xsYmFyRGV0ZWN0ZWQgPSBkZXRlY3RDc3NTY3JvbGxiYXIoKTtcblxuICBzZXRTY3JvbGxiYXJWaXNpYmlsaXR5KGNzc1Njcm9sbGJhckRldGVjdGVkKTtcblxuICB2YXIgX3Njcm9sbCA9IHNjcm9sbChjc3NTY3JvbGxiYXJEZXRlY3RlZCk7XG5cbiAgaW5pdGlhbGl6ZUNvbnRyb2woXG4gICAgc3Vic2NyaWJlLFxuICAgIHJlbmRlcih2aWV3TW9kZWwsIHJvb3RDaGlsZCwgY29udHJvbENvbmZpZywgX3Njcm9sbCksXG4gICAgY29udHJvbENvbmZpZyk7XG59XG5cbmZ1bmN0aW9uIHNldFNjcm9sbGJhclZpc2liaWxpdHkoY3NzU2Nyb2xsYmFyRGV0ZWN0ZWQpIHtcbiAgaWYgKCFjc3NTY3JvbGxiYXJEZXRlY3RlZCkge1xuICAgIHZhciB2aWV3cG9ydCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VybC12aWV3cG9ydCcpWzBdXG4gICAgdmlld3BvcnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgfVxufVxuXG5cbmV4cG9ydCB7IGluaXRpYWxpemUgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUZyYW1lIH0gZnJvbSAnLi4vdHlwZXMvY3JlYXRlRnJhbWUnO1xuXG5mdW5jdGlvbiBjbGVhcihmcmFtZSwgdGVybWluYWwpIHtcbiAgcmV0dXJuIGNyZWF0ZUZyYW1lKFxuICAgIDAsXG4gICAgdGVybWluYWwuZW50cmllcy5sZW5ndGgsXG4gICAgZnJhbWUucHJvbXB0SW5kZXgpO1xufVxuXG5mdW5jdGlvbiBmYXN0Rm9yd2FyZChmcmFtZSkge1xuICByZXR1cm4gY3JlYXRlRnJhbWUoXG4gICAgZnJhbWUub2Zmc2V0LFxuICAgIGZyYW1lLnN0YXJ0LFxuICAgIGZyYW1lLnByb21wdEluZGV4ID4gMFxuICAgICAgPyBmcmFtZS5wcm9tcHRJbmRleCAtIDFcbiAgICAgIDogZnJhbWUucHJvbXB0SW5kZXgpO1xufVxuXG5mdW5jdGlvbiByZXNldFByb21wdEluZGV4KGZyYW1lKSB7XG4gIHJldHVybiBjcmVhdGVGcmFtZShcbiAgICBmcmFtZS5vZmZzZXQsXG4gICAgZnJhbWUuc3RhcnQsXG4gICAgMCk7XG59XG5cbmZ1bmN0aW9uIHJld2luZChmcmFtZSwgdGVybWluYWwpIHtcbiAgcmV0dXJuIGNyZWF0ZUZyYW1lKFxuICAgIGZyYW1lLm9mZnNldCxcbiAgICBmcmFtZS5zdGFydCxcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLmxlbmd0aCA+IGZyYW1lLnByb21wdEluZGV4XG4gICAgICA/IGZyYW1lLnByb21wdEluZGV4ICsgMVxuICAgICAgOiBmcmFtZS5wcm9tcHRJbmRleCk7XG59XG5cbmV4cG9ydCBjb25zdCBGcmFtZSA9IHtcbiAgY2xlYXIsXG4gIGZhc3RGb3J3YXJkLFxuICByZXNldFByb21wdEluZGV4LFxuICByZXdpbmRcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVUZXJtaW5hbCB9IGZyb20gJy4uL3R5cGVzL2NyZWF0ZVRlcm1pbmFsJztcbmltcG9ydCB7IGNyZWF0ZVByb21wdCB9IGZyb20gJy4uL3R5cGVzL2NyZWF0ZVByb21wdCc7XG5cbmZ1bmN0aW9uIGFkZENoYXIodGVybWluYWwsIGNoYXIpIHtcbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgIHRlcm1pbmFsLmVudHJpZXMsXG4gICAgdGVybWluYWwucHJvbXB0cyxcbiAgICBjcmVhdGVQcm9tcHQoXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucHJlQ3Vyc29yICsgY2hhcixcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlV29yZCh0ZXJtaW5hbCwgZ2V0Q2FuZGlkYXRlcykge1xuICBpZiAoZ2V0Q2FuZGlkYXRlcyA9PSBudWxsKSB7XG4gICAgZ2V0Q2FuZGlkYXRlcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIHJlc3VsdHM7XG4gICAgICByZXR1cm4gKHJlc3VsdHMgPSBbeyBlZmZlY3Q6IGZhbHNlLCB2YWx1ZTogdmFsdWUgfV0pOyAvLyBjb3VwbGluZyB0byBsaXNwIGltcGxlbWVudGF0aW9uXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjb21tYW5kVGV4dCA9IHRlcm1pbmFsLnByb21wdC5wcmVDdXJzb3I7XG4gIHZhciBzcGxpdENvbW1hbmQgPSBnZXRQcmVmaXgoY29tbWFuZFRleHQpO1xuICB2YXIgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXMoc3BsaXRDb21tYW5kWzFdKTtcbiAgdmFyIGxlbmd0aCA9IGNhbmRpZGF0ZXMubGVuZ3RoO1xuXG4gIGlmIChsZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdGVybWluYWw7XG4gIH1cblxuICB2YXIgZW50cmllcywgcHJvbXB0O1xuXG4gIGlmIChsZW5ndGggPT09IDEpIHtcbiAgICBlbnRyaWVzID0gdGVybWluYWwuZW50cmllcztcbiAgICBwcm9tcHQgPSBjcmVhdGVQcm9tcHQoXG4gICAgICBzcGxpdENvbW1hbmRbMF0gKyBjYW5kaWRhdGVzWzBdICsgJyAnICsgdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3IsXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcik7XG4gIH0gZWxzZSB7XG4gICAgZW50cmllcyA9IHRlcm1pbmFsLmVudHJpZXMuY29uY2F0KFxuICAgICAgW3sgdHlwZTogJ2NvbW1hbmQnLCB2YWx1ZTogZXh0cmFjdENvbW1hbmQodGVybWluYWwucHJvbXB0KSB9XSxcbiAgICAgIFt7IHR5cGU6ICdjb21wbGV0aW9uJywgdmFsdWU6IGNhbmRpZGF0ZXMuam9pbignICcpIH1dKTtcbiAgICBwcm9tcHQgPSB0ZXJtaW5hbC5wcm9tcHQ7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlVGVybWluYWwoZW50cmllcywgdGVybWluYWwucHJvbXB0cywgcHJvbXB0KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlTGVmdENoYXIodGVybWluYWwpIHtcbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgIHRlcm1pbmFsLmVudHJpZXMsIFxuICAgIHRlcm1pbmFsLnByb21wdHMsXG4gICAgY3JlYXRlUHJvbXB0KFxuICAgICAgdGVybWluYWwucHJvbXB0LnByZUN1cnNvci5zbGljZSgwLCAtMSksXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcikpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcmVDdXJzb3IodGVybWluYWwpIHtcbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgIHRlcm1pbmFsLmVudHJpZXMsIFxuICAgIHRlcm1pbmFsLnByb21wdHMsIFxuICAgIGNyZWF0ZVByb21wdCgnJywgdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3IpKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUmlnaHRDaGFyKHRlcm1pbmFsKSB7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLCBcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLCBcbiAgICBjcmVhdGVQcm9tcHQoXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucHJlQ3Vyc29yLFxuICAgICAgdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3Iuc2xpY2UoMSkpKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlV29yZCh0ZXJtaW5hbCkge1xuICB2YXIgcHJlQ3Vyc29yID0gdGVybWluYWwucHJvbXB0LnByZUN1cnNvcjtcbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgIHRlcm1pbmFsLmVudHJpZXMsIFxuICAgIHRlcm1pbmFsLnByb21wdHMsIFxuICAgIGNyZWF0ZVByb21wdChcbiAgICAgIHByZUN1cnNvci5zbGljZSgwLCBwcmVDdXJzb3Iuc2xpY2UoMCwgLTEpLmxhc3RJbmRleE9mKCcgJykgKyAxKSxcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yKSk7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RDb21tYW5kKHByb21wdCkge1xuICByZXR1cm4gKHByb21wdC5wcmVDdXJzb3IgKyBwcm9tcHQucG9zdEN1cnNvcikudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBnZXRQcmVmaXgoY29tbWFuZCkge1xuICB2YXIgcmVnZXggPSAvXiguKltcXHNcXChcXClcXFtcXF1dKShbXlxcKFxcKVxcW1xcXV0qKS87XG4gIHZhciBtYXRjaCA9IHJlZ2V4LmV4ZWMoY29tbWFuZCk7XG4gIHJldHVybiBtYXRjaCA9PSBudWxsXG4gICAgPyBbJycsIGNvbW1hbmRdXG4gICAgOiBbbWF0Y2hbMV0sIG1hdGNoWzJdXTtcbn1cblxuZnVuY3Rpb24gbW92ZUN1cnNvckxlZnQodGVybWluYWwpIHtcbiAgdmFyIHByZUN1cnNvciA9IHRlcm1pbmFsLnByb21wdC5wcmVDdXJzb3I7XG4gIHZhciBwcmVDdXJzb3JMZW5ndGggPSBwcmVDdXJzb3IubGVuZ3RoO1xuICBpZiAocHJlQ3Vyc29yTGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRlcm1pbmFsO1xuICB9IGVsc2Uge1xuICAgIHZhciBwb3N0Q3Vyc29yID0gdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3I7XG4gICAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgICAgdGVybWluYWwuZW50cmllcyxcbiAgICAgIHRlcm1pbmFsLnByb21wdHMsXG4gICAgICBjcmVhdGVQcm9tcHQoXG4gICAgICAgIHByZUN1cnNvci5zbGljZSgwLCAtMSksXG4gICAgICAgIHByZUN1cnNvcltwcmVDdXJzb3JMZW5ndGggLSAxXSArIHBvc3RDdXJzb3IpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3ZlQ3Vyc29yUmlnaHQodGVybWluYWwpIHtcbiAgdmFyIHBvc3RDdXJzb3IgPSB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcjtcbiAgaWYgKHBvc3RDdXJzb3IubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRlcm1pbmFsO1xuICB9IGVsc2Uge1xuICAgIHZhciBwcmVDdXJzb3IgPSB0ZXJtaW5hbC5wcm9tcHQucHJlQ3Vyc29yO1xuICAgIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICAgIHRlcm1pbmFsLmVudHJpZXMsXG4gICAgICB0ZXJtaW5hbC5wcm9tcHRzLFxuICAgICAgY3JlYXRlUHJvbXB0KFxuICAgICAgICBwcmVDdXJzb3IgKyBwb3N0Q3Vyc29yWzBdLFxuICAgICAgICBwb3N0Q3Vyc29yLnNsaWNlKDEpKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW92ZUN1cnNvclRvRW5kKHRlcm1pbmFsKSB7XG4gIHZhciBwcm9tcHQgPSB0ZXJtaW5hbC5wcm9tcHQ7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLFxuICAgIHRlcm1pbmFsLnByb21wdHMsXG4gICAgY3JlYXRlUHJvbXB0KHByb21wdC5wcmVDdXJzb3IgKyBwcm9tcHQucG9zdEN1cnNvciwgJycpKTtcbn1cblxuZnVuY3Rpb24gbW92ZUN1cnNvclRvU3RhcnQodGVybWluYWwpIHtcbiAgdmFyIHByb21wdCA9IHRlcm1pbmFsLnByb21wdDtcbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKFxuICAgIHRlcm1pbmFsLmVudHJpZXMsXG4gICAgdGVybWluYWwucHJvbXB0cyxcbiAgICBjcmVhdGVQcm9tcHQoJycsIHByb21wdC5wcmVDdXJzb3IgKyBwcm9tcHQucG9zdEN1cnNvcikpO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQcm9tcHQocHJvbXB0KSB7XG4gIHJldHVybiBjcmVhdGVQcm9tcHQoZXh0cmFjdENvbW1hbmQocHJvbXB0KSwgJycpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXQodGVybWluYWwsIHRyYW5zZm9ybSkge1xuICB2YXIgbmV3Q2FjaGVkUHJvbXB0TWF5YmUsIG5ld0Z1dHVyZTtcblxuICBpZiAodHJhbnNmb3JtID09IG51bGwpIHtcbiAgICB0cmFuc2Zvcm0gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciByZXN1bHRzO1xuICAgICAgcmV0dXJuIChyZXN1bHRzID0gW3sgZWZmZWN0OiBmYWxzZSwgdmFsdWU6IHZhbHVlIH1dKTsgLy8gY291cGxpbmcgdG8gbGlzcCBpbXBsZW1lbnRhdGlvblxuICAgIH07XG4gIH1cblxuICB2YXIgY29tbWFuZFRleHQgPSBleHRyYWN0Q29tbWFuZCh0ZXJtaW5hbC5wcm9tcHQpO1xuICB2YXIgcmVzdWx0cyA9IHRyYW5zZm9ybShjb21tYW5kVGV4dCk7XG4gIHZhciBkaXNwbGF5RW50cmllcyA9IHJlc3VsdHNcbiAgICAuc2xpY2UoMCwgLTEpXG4gICAgLmZpbHRlcihmdW5jdGlvbiAocmVzdWx0KSB7IHJldHVybiByZXN1bHQuZWZmZWN0LnR5cGUgPT09ICdkaXNwbGF5JzsgfSlcbiAgICAubWFwKGZ1bmN0aW9uIChkaXNwbGF5KSB7IHJldHVybiB7IHR5cGU6ICdkaXNwbGF5JywgdmFsdWU6IGRpc3BsYXkudmFsdWUgfX0pO1xuXG4gIHZhciBsYXN0UmVzdWx0ID0gcmVzdWx0c1tyZXN1bHRzLmxlbmd0aCAtIDFdO1xuICB2YXIgcmVzcG9uc2UgPSBsYXN0UmVzdWx0LnZhbHVlICE9IG51bGxcbiAgICA/IFt7IHR5cGU6ICdyZXNwb25zZScsIHZhbHVlOiBsYXN0UmVzdWx0LnZhbHVlIH1dXG4gICAgOiBbXTtcblxuICB2YXIgY29tbWFuZCA9IHsgdHlwZTogJ2NvbW1hbmQnLCB2YWx1ZTogY29tbWFuZFRleHQgfTtcbiAgdmFyIHByb21wdCA9IG5vcm1hbGl6ZVByb21wdCh0ZXJtaW5hbC5wcm9tcHQpO1xuXG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLmNvbmNhdChbY29tbWFuZF0sIGRpc3BsYXlFbnRyaWVzLCByZXNwb25zZSksXG4gICAgW3Byb21wdF0uY29uY2F0KHRlcm1pbmFsLnByb21wdHMpLFxuICAgIGNyZWF0ZVByb21wdCgnJywgJycpKTtcbn1cblxuZXhwb3J0IGNvbnN0IFRlcm1pbmFsID0ge1xuICBhZGRDaGFyLFxuICBjb21wbGV0ZVdvcmQsXG4gIGRlbGV0ZUxlZnRDaGFyLFxuICBkZWxldGVQcmVDdXJzb3IsXG4gIGRlbGV0ZVJpZ2h0Q2hhcixcbiAgZGVsZXRlV29yZCxcbiAgbW92ZUN1cnNvckxlZnQsXG4gIG1vdmVDdXJzb3JSaWdodCxcbiAgbW92ZUN1cnNvclRvRW5kLFxuICBtb3ZlQ3Vyc29yVG9TdGFydCxcbiAgc3VibWl0XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlVmlld3BvcnQgfSBmcm9tICcuLi90eXBlcy9jcmVhdGVWaWV3cG9ydCc7XG5pbXBvcnQgeyBjcmVhdGVGcmFtZSB9IGZyb20gJy4uL3R5cGVzL2NyZWF0ZUZyYW1lJztcbmltcG9ydCB7IGNyZWF0ZVRlcm1pbmFsIH0gZnJvbSAnLi4vdHlwZXMvY3JlYXRlVGVybWluYWwnO1xuaW1wb3J0IHsgRnJhbWUgfSBmcm9tICcuL2ZyYW1lJztcbmltcG9ydCB7IFRlcm1pbmFsIH0gZnJvbSAnLi90ZXJtaW5hbCc7XG5cbmZ1bmN0aW9uIGFkZENoYXIodmlld3BvcnQsIGNoYXIpIHtcbiAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgIFRlcm1pbmFsLmFkZENoYXIodmlld3BvcnQudGVybWluYWwsIGNoYXIpLFxuICAgIHZpZXdwb3J0LmZyYW1lKTtcbn1cblxuZnVuY3Rpb24gY29tcGxldGVXb3JkKHZpZXdwb3J0LCBnZXRDYW5kaWRhdGVzKSB7XG4gIHZhciBmcmFtZSA9IHZpZXdwb3J0LmZyYW1lO1xuICB2YXIgbmV3VGVybWluYWwgPVxuICAgIFRlcm1pbmFsLmNvbXBsZXRlV29yZChyZWZyZXNoVGVybWluYWwodmlld3BvcnQpLCBnZXRDYW5kaWRhdGVzKTtcbiAgdmFyIGRpZmYgPSBuZXdUZXJtaW5hbC5lbnRyaWVzLmxlbmd0aCAtIHZpZXdwb3J0LnRlcm1pbmFsLmVudHJpZXMubGVuZ3RoO1xuICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgbmV3VGVybWluYWwsXG4gICAgY3JlYXRlRnJhbWUoXG4gICAgICBmcmFtZS5vZmZzZXQgKyBkaWZmLFxuICAgICAgZnJhbWUuc3RhcnQsXG4gICAgICAwKSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyKHZpZXdwb3J0KSB7XG4gIHZhciB0ZXJtaW5hbCA9IHZpZXdwb3J0LnRlcm1pbmFsO1xuICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgdGVybWluYWwsXG4gICAgRnJhbWUuY2xlYXIodmlld3BvcnQuZnJhbWUsIHRlcm1pbmFsKSk7XG59XG5cbmZ1bmN0aW9uIGZhc3RGb3J3YXJkKHZpZXdwb3J0KSB7XG4gIHJldHVybiBjcmVhdGVWaWV3cG9ydChcbiAgICB2aWV3cG9ydC50ZXJtaW5hbCxcbiAgICBGcmFtZS5mYXN0Rm9yd2FyZCh2aWV3cG9ydC5mcmFtZSkpO1xufVxuXG5mdW5jdGlvbiBtb2RpZnlUZXJtaW5hbChmbk5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2aWV3cG9ydCkge1xuICAgIHJldHVybiBjcmVhdGVWaWV3cG9ydChcbiAgICAgIFRlcm1pbmFsW2ZuTmFtZV0ocmVmcmVzaFRlcm1pbmFsKHZpZXdwb3J0KSksXG4gICAgICBGcmFtZS5yZXNldFByb21wdEluZGV4KHZpZXdwb3J0LmZyYW1lKSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlZnJlc2hUZXJtaW5hbCh2aWV3cG9ydCkge1xuICB2YXIgdGVybWluYWwgPSB2aWV3cG9ydC50ZXJtaW5hbDtcbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKHRlcm1pbmFsLmVudHJpZXMsIHRlcm1pbmFsLnByb21wdHMsIHZpZXdwb3J0LnByb21wdCk7XG59XG5cbmZ1bmN0aW9uIHJld2luZCh2aWV3cG9ydCkge1xuICB2YXIgdGVybWluYWwgPSB2aWV3cG9ydC50ZXJtaW5hbDtcbiAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgIHRlcm1pbmFsLFxuICAgIEZyYW1lLnJld2luZCh2aWV3cG9ydC5mcmFtZSwgdGVybWluYWwpKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0KHZpZXdwb3J0LCB0cmFuc2Zvcm0pIHtcbiAgdmFyIGZyYW1lID0gdmlld3BvcnQuZnJhbWU7XG4gIHZhciBuZXdUZXJtaW5hbCA9IFRlcm1pbmFsLnN1Ym1pdChyZWZyZXNoVGVybWluYWwodmlld3BvcnQpLCB0cmFuc2Zvcm0pO1xuICB2YXIgZGlmZiA9IG5ld1Rlcm1pbmFsLmVudHJpZXMubGVuZ3RoIC0gdmlld3BvcnQudGVybWluYWwuZW50cmllcy5sZW5ndGg7XG4gIHJldHVybiBjcmVhdGVWaWV3cG9ydChcbiAgICBuZXdUZXJtaW5hbCxcbiAgICBjcmVhdGVGcmFtZShcbiAgICAgIGZyYW1lLm9mZnNldCArIGRpZmYsXG4gICAgICBmcmFtZS5zdGFydCxcbiAgICAgIDApKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZpZXdwb3J0ID0ge1xuICBhZGRDaGFyLFxuICBjbGVhcixcbiAgY29tcGxldGVXb3JkLFxuICBkZWxldGVMZWZ0Q2hhcjogbW9kaWZ5VGVybWluYWwoJ2RlbGV0ZUxlZnRDaGFyJyksXG4gIGRlbGV0ZVByZUN1cnNvcjogbW9kaWZ5VGVybWluYWwoJ2RlbGV0ZVByZUN1cnNvcicpLFxuICBkZWxldGVSaWdodENoYXI6IG1vZGlmeVRlcm1pbmFsKCdkZWxldGVSaWdodENoYXInKSxcbiAgZGVsZXRlV29yZDogbW9kaWZ5VGVybWluYWwoJ2RlbGV0ZVdvcmQnKSxcbiAgZmFzdEZvcndhcmQsXG4gIG1vdmVDdXJzb3JMZWZ0OiBtb2RpZnlUZXJtaW5hbCgnbW92ZUN1cnNvckxlZnQnKSxcbiAgbW92ZUN1cnNvclJpZ2h0OiBtb2RpZnlUZXJtaW5hbCgnbW92ZUN1cnNvclJpZ2h0JyksXG4gIG1vdmVDdXJzb3JUb0VuZDogbW9kaWZ5VGVybWluYWwoJ21vdmVDdXJzb3JUb0VuZCcpLFxuICBtb3ZlQ3Vyc29yVG9TdGFydDogbW9kaWZ5VGVybWluYWwoJ21vdmVDdXJzb3JUb1N0YXJ0JyksXG4gIHJld2luZCxcbiAgc3VibWl0XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVGcmFtZSB9IGZyb20gJy4vdHlwZXMvY3JlYXRlRnJhbWUnO1xuaW1wb3J0IHsgY3JlYXRlUHJvbXB0IH0gZnJvbSAnLi90eXBlcy9jcmVhdGVQcm9tcHQnO1xuaW1wb3J0IHsgY3JlYXRlVGVybWluYWwgfSBmcm9tICcuL3R5cGVzL2NyZWF0ZVRlcm1pbmFsJztcbmltcG9ydCB7IGNyZWF0ZVZpZXdwb3J0IH0gZnJvbSAnLi90eXBlcy9jcmVhdGVWaWV3cG9ydCc7XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxNb2RlbCgpIHtcbiAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgIGNyZWF0ZVRlcm1pbmFsKFtdLCBbXSwgY3JlYXRlUHJvbXB0KCcnLCAnJykpLFxuICAgIGNyZWF0ZUZyYW1lKDAsIDAsIDApKTtcbn1cblxuZXhwb3J0IHsgZ2V0SW5pdGlhbE1vZGVsIH07XG4iLCJleHBvcnQgY29uc3QgY3JlYXRlRnJhbWUgPSBmdW5jdGlvbiAob2Zmc2V0LCBzdGFydCwgcHJvbXB0SW5kZXgpIHtcbiAgcmV0dXJuIHtcbiAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICBzdGFydDogc3RhcnQsXG4gICAgcHJvbXB0SW5kZXg6IHByb21wdEluZGV4XG4gIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZVByb21wdCA9IGZ1bmN0aW9uIChwcmVDdXJzb3IsIHBvc3RDdXJzb3IpIHtcbiAgcmV0dXJuIHtcbiAgICBwcmVDdXJzb3I6IHByZUN1cnNvcixcbiAgICBwb3N0Q3Vyc29yOiBwb3N0Q3Vyc29yXG4gIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZVRlcm1pbmFsID0gIGZ1bmN0aW9uIChlbnRyaWVzLCBwcm9tcHRzLCBjdXJyZW50UHJvbXB0KSB7XG4gIHJldHVybiAge1xuICAgIGVudHJpZXM6IGVudHJpZXMsXG4gICAgcHJvbXB0czogcHJvbXB0cyxcbiAgICBwcm9tcHQ6IGN1cnJlbnRQcm9tcHRcbiAgfTtcbn07XG4iLCJmdW5jdGlvbiBnZXRQcm9tcHQodGVybWluYWwsIGZyYW1lKSB7XG4gIHJldHVybiBmcmFtZS5wcm9tcHRJbmRleCA9PT0gMFxuICAgID8gdGVybWluYWwucHJvbXB0XG4gICAgOiB0ZXJtaW5hbC5wcm9tcHRzW2ZyYW1lLnByb21wdEluZGV4IC0gMV07XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVWaWV3cG9ydCA9IGZ1bmN0aW9uICh0ZXJtaW5hbCwgZnJhbWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0ZXJtaW5hbDogdGVybWluYWwsXG4gICAgZnJhbWU6IGZyYW1lLFxuICAgIHByb21wdDogZ2V0UHJvbXB0KHRlcm1pbmFsLCBmcmFtZSlcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBkaWZmIH0gZnJvbSAnLi4vcmlib3NvbWUvZGlmZic7XG5pbXBvcnQgeyBFUkxLSU5HIH0gZnJvbSAnLi92aWV3L3JlY3JlYXRlQ29uc29sZSc7XG5pbXBvcnQgeyBtb2RpZnlFbGVtZW50IH0gZnJvbSAnLi4vcmlib3NvbWUvaW50ZXJwcmV0ZXInO1xuXG5mdW5jdGlvbiByZW5kZXIoX3ZpZXdNb2RlbCwgcm9vdENoaWxkLCBjb250cm9sQ29uZmlnLCBzY3JvbGwpIHtcbiAgdmFyIHZpZXdNb2RlbCA9IF92aWV3TW9kZWw7XG4gIHJldHVybiBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICB2YXIgbGFiZWxzID0geyBwcm9tcHRMYWJlbDogY29udHJvbENvbmZpZy5wcm9tcHRMYWJlbCB9O1xuICAgIHZhciBuZXdWaWV3TW9kZWwgPSBFUkxLSU5HKGxhYmVscywgbW9kZWwpO1xuICAgIG1vZGlmeUVsZW1lbnQocm9vdENoaWxkLCBkaWZmKG5ld1ZpZXdNb2RlbCwgdmlld01vZGVsKSk7XG5cbiAgICBjb250cm9sQ29uZmlnLnZpZXdwb3J0ID0gbW9kZWw7XG4gICAgdmlld01vZGVsID0gbmV3Vmlld01vZGVsO1xuXG4gICAgc2Nyb2xsKCk7XG4gIH07XG59XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50VHlwZSwgZXZlbnRIYW5kbGVyKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgc3VwcmVzc0RlZmF1bHQoZXZlbnRIYW5kbGVyKSk7XG59XG5cbmZ1bmN0aW9uIHN1cHJlc3NEZWZhdWx0KGhhbmRsZUV2ZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgfTtcbn1cblxuZXhwb3J0IHsgc3Vic2NyaWJlIH07XG4iLCJpbXBvcnQgeyBTUEFOIH0gZnJvbSAnLi4vLi4vcmlib3NvbWUvZWxlbWVudHMnO1xuXG5mdW5jdGlvbiBFUkxfRU5UUlkodGV4dCkge1xuICByZXR1cm4gU1BBTihfZW50cnlDb25maWcsIHRleHQgKyBuZXdsaW5lKTtcbn1cblxuZnVuY3Rpb24gRVJMX0lOUFVUKHByb21wdFRleHQsIHByZVRleHQsIHBvc3RUZXh0KSB7XG4gIHJldHVybiBTUEFOKFxuICAgIF9pbnB1dENvbmZpZyxcbiAgICBFUkxfUFJPTVBUKHByb21wdFRleHQpLFxuICAgIEVSTF9QUkUocHJlVGV4dCksXG4gICAgRVJMX0NVUlNPUixcbiAgICBFUkxfUE9TVChwb3N0VGV4dCkpO1xufVxuXG5mdW5jdGlvbiBFUkxfUE9TVCh0ZXh0KSB7XG4gIHJldHVybiBTUEFOKF9wb3N0Q29uZmlnLCB0ZXh0KTtcbn1cblxuZnVuY3Rpb24gRVJMX1BSRSh0ZXh0KSB7XG4gIHJldHVybiBTUEFOKF9wcmVDb25maWcsIHRleHQpO1xufVxuXG5mdW5jdGlvbiBFUkxfUFJPTVBUKHRleHQpIHtcbiAgcmV0dXJuIFNQQU4oX3Byb21wdENvbmZpZywgdGV4dCk7XG59XG5cbnZhciBlbXB0eVN0cmluZyA9ICcnO1xudmFyIG5ld2xpbmUgPSAnXFxuJztcbnZhciBzcGFjZSA9ICcgJztcbnZhciB1bmRlcnNjb3JlID0gJ18nO1xuXG52YXIgRVJMX0NVUlNPUiA9IFNQQU4oXG4gIHtcbiAgICBpZDogJ2VybC1jdXJzb3InLFxuICAgIGNsYXNzZXM6IHsgJ2VybC1jdXJzb3InOiB0cnVlLCAnZXJsLWN1cnNvcic6IHRydWUgfSxcbiAgfSxcbiAgdW5kZXJzY29yZSk7XG5cbnZhciBfZW50cnlDb25maWcgPSB7XG4gIGNsYXNzZXM6IHsgJ2VybC1lbnRyeSc6IHRydWUsICdlcmwtbGluZSc6IHRydWUgfSxcbn07XG5cbnZhciBfaW5wdXRDb25maWcgPSB7XG4gIGlkOiAnZXJsLWlucHV0JyxcbiAgY2xhc3NlczogeyAnZXJsLWlucHV0JzogdHJ1ZSwgJ2VybC1saW5lJzogdHJ1ZSB9XG59O1xuXG52YXIgX3Bvc3RDb25maWcgPSB7XG4gIGlkOiAnZXJsLXBvc3QnLFxuICBjbGFzc2VzOiB7ICdlcmwtcG9zdCc6IHRydWUgfSxcbiAgc3R5bGU6IHsgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJyB9XG59O1xuXG52YXIgX3ByZUNvbmZpZyA9IHtcbiAgIGlkOiAnZXJsLXByZScsXG4gICBjbGFzc2VzOiB7ICdlcmwtcHJlJzogdHJ1ZSB9XG59O1xuXG52YXIgX3Byb21wdENvbmZpZyA9IHtcbiAgaWQ6ICdlcmwtcHJvbXB0JyxcbiAgY2xhc3NlczogeyAnZXJsLXByb21wdCc6IHRydWUsICdlcmwtcHJvbXB0JzogdHJ1ZSB9XG59O1xuXG5leHBvcnQge1xuICBFUkxfQ1VSU09SLFxuICBFUkxfRU5UUlksXG4gIEVSTF9JTlBVVCxcbiAgRVJMX1BPU1QsXG4gIEVSTF9QUkUsXG4gIEVSTF9QUk9NUFRcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVBbmRBdHRhY2hFbGVtZW50IH0gZnJvbSAnLi4vLi4vcmlib3NvbWUvaW50ZXJwcmV0ZXInO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplVmlldyhyb290LCB2aWV3TW9kZWwpIHtcbiAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudChyb290LCB2aWV3TW9kZWwpO1xufVxuXG5leHBvcnQgeyBpbml0aWFsaXplVmlldyB9O1xuIiwiaW1wb3J0IHtcbiAgRVJMX0NVUlNPUixcbiAgRVJMX0VOVFJZLFxuICBFUkxfSU5QVVQsXG4gIEVSTF9QT1NULFxuICBFUkxfUFJFLFxuICBFUkxfUFJPTVBUXG59IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmltcG9ydCB7XG4gIERJVixcbiAgSDEsXG4gIEg0LFxuICBTRUNUSU9OLFxuICBTUEFOXG59IGZyb20gJy4uLy4uL3JpYm9zb21lL2VsZW1lbnRzJztcblxudmFyIEVSTF9IRUFERVIgPSBTRUNUSU9OKFxuICAgIHtcbiAgICAgIGlkOiAnZXJsLWhlYWRlcicsXG4gICAgICBjbGFzc2VzOiB7ICdoZWFkJzogdHJ1ZSB9XG4gICAgfSxcbiAgICBIMShudWxsLCAnRXJsa8O2bmlnIExpc3AgQ29uc29sZVxcbicpLFxuICAgIEg0KG51bGwsICdBIHRlcm1pbmFsIGVtdWxhdG9yIGFuZCBsaXNwIGludGVycHJldGVyXFxuJykpO1xuXG52YXIgZW1wdHlTdHJpbmcgPSAnJztcblxuZnVuY3Rpb24gRVJMS0lORyhwcmVmaXhlcywgdmlld3BvcnQpIHtcbiAgdmFyIHByb21wdExhYmVsID0gcHJlZml4ZXMucHJvbXB0TGFiZWw7XG4gIHZhciBwcm9tcHQgPSB2aWV3cG9ydC5wcm9tcHQ7XG4gIHZhciBmcmFtZSA9IHZpZXdwb3J0LmZyYW1lO1xuXG4gIHZhciBlbnRyaWVzID0gdmlld3BvcnQudGVybWluYWwuZW50cmllc1xuICAgIC5zbGljZShmcmFtZS5zdGFydCwgZnJhbWUuc3RhcnQgKyBmcmFtZS5vZmZzZXQpXG4gICAgLm1hcChzcGVjaWZ5RW50cnkuYmluZChudWxsLCBwcmVmaXhlcykpO1xuXG4gIHZhciBwcmVDdXJzb3IgPSBwcm9tcHQucHJlQ3Vyc29yICE9IG51bGwgPyBwcm9tcHQucHJlQ3Vyc29yIDogZW1wdHlTdHJpbmc7XG4gIHZhciBwb3N0Q3Vyc29yID0gcHJvbXB0LnBvc3RDdXJzb3IgIT0gbnVsbCA/IHByb21wdC5wb3N0Q3Vyc29yIDogZW1wdHlTdHJpbmc7XG5cbiAgcmV0dXJuIERJVihcbiAgICBfZXJsa29uaWdDb25maWcsXG4gICAgRElWKFxuICAgICAgbnVsbCxcbiAgICAgIEVSTF9IRUFERVIsXG4gICAgICBESVYoXG4gICAgICAgIF90ZXJtaW5hbENvbmZpZyxcbiAgICAgICAgWF9TQ1JPTExCQVIsXG4gICAgICAgIFlfU0NST0xMQkFSLFxuICAgICAgICBESVYoXG4gICAgICAgICAgX2VybFZpZXdwb3J0Q29uZmlnLFxuICAgICAgICAgIGVudHJpZXMsXG4gICAgICAgICAgRVJMX0lOUFVUKHByb21wdExhYmVsLCBwcm9tcHQucHJlQ3Vyc29yLCBwcm9tcHQucG9zdEN1cnNvcikpKSkpO1xufVxuXG52YXIgWF9TQ1JPTExCQVIgPSBESVYoXG4gIHtcbiAgICBpZDogJ2VybC14LXNjcm9sbC10cmFjaycsXG4gICAgY2xhc3Nlczoge1xuICAgICAgJ2VybC14LXNjcm9sbC10cmFjayc6IHRydWUsXG4gICAgICAnZXJsLXNjcm9sbC10cmFjayc6IHRydWVcbiAgICB9XG4gIH0sXG4gIERJVih7XG4gICAgaWQ6ICdlcmwteC1zY3JvbGwtdGh1bWInLFxuICAgIGNsYXNzZXM6IHtcbiAgICAgICdlcmwteC1zY3JvbGwtdGh1bWInOiB0cnVlLFxuICAgICAgJ2VybC1zY3JvbGwtdGh1bWInOiB0cnVlXG4gICAgfVxuICB9KSk7XG5cbnZhciBZX1NDUk9MTEJBUiA9IERJVihcbiAge1xuICAgIGlkOiAnZXJsLXktc2Nyb2xsLXRyYWNrJyxcbiAgICBjbGFzc2VzOiB7XG4gICAgICAnZXJsLXktc2Nyb2xsLXRyYWNrJzogdHJ1ZSxcbiAgICAgICdlcmwtc2Nyb2xsLXRyYWNrJzogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgRElWKHtcbiAgICBpZDogJ2VybC15LXNjcm9sbC10aHVtYicsXG4gICAgY2xhc3Nlczoge1xuICAgICAgJ2VybC15LXNjcm9sbC10aHVtYic6IHRydWUsXG4gICAgICAnZXJsLXNjcm9sbC10aHVtYic6IHRydWVcbiAgICB9XG4gIH0pKTtcblxudmFyIGRlZmF1bHRDb21wbGV0aW9uTGFiZWwgPSAnICAnO1xudmFyIGRlZmF1bHREaXNwbGF5TGFiZWwgPSAnJztcbnZhciBkZWZhdWx0RXJyb3JMYWJlbCA9ICcuLi4+ICc7XG52YXIgZGVmYXVsdFByb21wdExhYmVsID0gJz4gJztcbnZhciBkZWZhdWx0UmVzcG9uc2VMYWJlbCA9ICc9PT4gJztcblxudmFyIGRlZmF1bHRDb21wbGV0aW9uTGFiZWwgPSAnICAnO1xudmFyIGRlZmF1bHREaXNwbGF5TGFiZWwgPSAnJztcbnZhciBkZWZhdWx0RXJyb3JMYWJlbCA9ICcuLi4+ICc7XG52YXIgZGVmYXVsdFByb21wdExhYmVsID0gJz4gJztcbnZhciBkZWZhdWx0UmVzcG9uc2VMYWJlbCA9ICc9PT4gJztcblxuZnVuY3Rpb24gc3BlY2lmeUVudHJ5KHByZWZpeGVzLCBjb21wb25lbnQpIHtcbiAgdmFyIGNvbXBsZXRpb25MYWJlbCA9IHByZWZpeGVzLmNvbXBsZXRpb25MYWJlbCB8fCBkZWZhdWx0Q29tcGxldGlvbkxhYmVsO1xuICB2YXIgZGlzcGxheUxhYmVsID0gcHJlZml4ZXMuZGlzcGxheUxhYmVsIHx8IGRlZmF1bHREaXNwbGF5TGFiZWw7XG4gIHZhciBlcnJvckxhYmVsID0gcHJlZml4ZXMuZXJyb3JMYWJlbCB8fCBkZWZhdWx0RXJyb3JMYWJlbDtcbiAgdmFyIHByb21wdExhYmVsID0gcHJlZml4ZXMucHJvbXB0TGFiZWwgfHwgZGVmYXVsdFByb21wdExhYmVsO1xuICB2YXIgcmVzcG9uc2VMYWJlbCA9IHByZWZpeGVzLnJlc3BvbnNlTGFiZWwgfHwgZGVmYXVsdFJlc3BvbnNlTGFiZWw7XG5cbiAgdmFyIGVudHJ5O1xuICBzd2l0Y2ggKGNvbXBvbmVudC50eXBlKSB7XG4gICAgY2FzZSAnY29tbWFuZCc6XG4gICAgICBlbnRyeSA9IHByb21wdExhYmVsICsgY29tcG9uZW50LnZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmVzcG9uc2UnOlxuICAgICAgZW50cnkgPSByZXNwb25zZUxhYmVsICsgY29tcG9uZW50LnZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZGlzcGxheSc6XG4gICAgICBlbnRyeSA9IGRpc3BsYXlMYWJlbCArIGNvbXBvbmVudC52YWx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NvbXBsZXRpb24nOlxuICAgICAgZW50cnkgPSBjb21wbGV0aW9uTGFiZWwgKyBjb21wb25lbnQudmFsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdlcnJvcic6XG4gICAgICBlbnRyeSA9IGVycm9yTGFiZWwgKyBjb21wb25lbnQudmFsdWU7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGNvbXBvbmVudCB0eXBlJyk7XG4gIH1cbiAgcmV0dXJuIEVSTF9FTlRSWShlbnRyeSk7XG59XG5cbnZhciBfZXJsa29uaWdDb25maWcgPSB7XG4gIGlkOiAnZXJsa29uaWcnLFxuICBjbGFzc2VzOiB7ICdlcmxrb25pZyc6IHRydWUsICdjb250YWluZXInOiB0cnVlIH1cbn07XG52YXIgX2NvbnNvbGVDb25maWcgPSB7IGlkOiAnZXJsLWNvbnNvbGUnIH07XG52YXIgX3Rlcm1pbmFsQ29uZmlnID0geyBjbGFzc2VzOiB7ICd0ZXJtaW5hbCc6IHRydWUgfX07XG52YXIgX2VybFZpZXdwb3J0Q29uZmlnID0geyBjbGFzc2VzOiB7ICdlcmwtdmlld3BvcnQnOiB0cnVlIH19O1xuXG5leHBvcnQgeyBFUkxLSU5HIH07XG4iLCJmdW5jdGlvbiBnZXRDdXJzb3JPZmZzZXQoY3Vyc29yLCBub2RlKSB7XG4gIHZhciBtYXJnaW4gPSA1O1xuICByZXR1cm4gY3Vyc29yLm9mZnNldExlZnQgKyBjdXJzb3Iub2Zmc2V0V2lkdGggKyBtYXJnaW4gLSBub2RlLm9mZnNldFdpZHRoO1xufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50KGlkKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG59XG5cbmZ1bmN0aW9uIGdldFBlcmNlbnRhZ2UobnVtYmVyKSB7XG4gIHJldHVybiAoMTAwICogbnVtYmVyKSArICclJztcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnQoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlcmwtdmlld3BvcnQnKVswXTtcbn1cblxuZnVuY3Rpb24gb25FdmVudChldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIF9zY3JvbGwobm9kZSwgY3Vyc29yKSB7XG4gIG5vZGUuc2Nyb2xsVG9wID0gbm9kZS5zY3JvbGxIZWlnaHQgLSBub2RlLmNsaWVudEhlaWdodDtcbiAgbm9kZS5zY3JvbGxMZWZ0ID0gZ2V0Q3Vyc29yT2Zmc2V0KGN1cnNvciwgbm9kZSk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbChjc3NTY3JvbGxiYXJEZXRlY3RlZCkge1xuICBpZiAoY3NzU2Nyb2xsYmFyRGV0ZWN0ZWQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGN1cnNvciA9IGdldEVsZW1lbnQoJ2VybC1jdXJzb3InKTtcbiAgICAgIF9zY3JvbGwoZ2V0Vmlld3BvcnQoKSwgY3Vyc29yKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmlld3BvcnQgPSBnZXRWaWV3cG9ydCgpO1xuICAgIHZhciBjdXJzb3IgPSBnZXRFbGVtZW50KCdlcmwtY3Vyc29yJyk7XG4gICAgdmFyIHhUcmFjayA9IGdldEVsZW1lbnQoJ2VybC14LXNjcm9sbC10cmFjaycpO1xuICAgIHZhciB4VGh1bWIgPSBnZXRFbGVtZW50KCdlcmwteC1zY3JvbGwtdGh1bWInKTtcbiAgICB2YXIgeVRyYWNrID0gZ2V0RWxlbWVudCgnZXJsLXktc2Nyb2xsLXRyYWNrJyk7XG4gICAgdmFyIHlUaHVtYiA9IGdldEVsZW1lbnQoJ2VybC15LXNjcm9sbC10aHVtYicpO1xuICAgIHZhciBwcm9tcHQgPSBnZXRFbGVtZW50KCdlcmwtcHJvbXB0Jyk7XG5cbiAgICB2YXIgdmlld3BvcnRXaWR0aCA9IHZpZXdwb3J0Lm9mZnNldFdpZHRoO1xuICAgIHZhciB2aWV3cG9ydEhlaWdodCA9IHZpZXdwb3J0Lm9mZnNldEhlaWdodDtcblxuICAgIHNldFhUaHVtYlZpc2liaWxpdHkodmlld3BvcnQsIHZpZXdwb3J0V2lkdGgsIHhUcmFjaywgeFRodW1iLCBjdXJzb3IsIHByb21wdCk7XG4gICAgc2V0WVRodW1iVmlzaWJpbGl0eSh2aWV3cG9ydCwgdmlld3BvcnRIZWlnaHQsIHlUcmFjaywgeVRodW1iLCBjdXJzb3IpO1xuICAgIHNjcm9sbEhvcml6b250YWxseSh2aWV3cG9ydCwgdmlld3BvcnRXaWR0aCwgeFRyYWNrLCB4VGh1bWIpO1xuICAgIHNjcm9sbFZlcnRpY2FsbHkodmlld3BvcnQsIHZpZXdwb3J0SGVpZ2h0LCB5VHJhY2ssIHlUaHVtYik7XG5cbiAgICBfc2Nyb2xsKHZpZXdwb3J0LCBjdXJzb3IpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzY3JvbGxCYXJIb3Jpem9udGFsbHkoeFRodW1iLCBsZWZ0UmF0aW8pIHtcbiAgeFRodW1iLnN0eWxlLmxlZnQgPSBnZXRQZXJjZW50YWdlKGxlZnRSYXRpbyk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbEJhclZlcnRpY2FsbHkoeVRodW1iLCB0b3BSYXRpbykge1xuICB5VGh1bWIuc3R5bGUudG9wID0gZ2V0UGVyY2VudGFnZSh0b3BSYXRpbyk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbENvbnRlbnRIb3Jpem9udGFsbHkodmlld3BvcnQsIGxlZnRSYXRpbykge1xuICB2aWV3cG9ydC5zY3JvbGxMZWZ0ID0gbGVmdFJhdGlvICogdmlld3BvcnQuc2Nyb2xsV2lkdGg7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbENvbnRlbnRWZXJ0aWNhbGx5KHZpZXdwb3J0LCB0b3BSYXRpbykge1xuICB2aWV3cG9ydC5zY3JvbGxUb3AgPSB0b3BSYXRpbyAqIHZpZXdwb3J0LnNjcm9sbEhlaWdodDtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsVmVydGljYWxseSh2aWV3cG9ydCwgdmlld3BvcnRIZWlnaHQsIHlUcmFjaywgeVRodW1iKSB7XG4gIHZhciB5VGh1bWJIZWlnaHQgPSB5VGh1bWIub2Zmc2V0SGVpZ2h0O1xuICB2YXIgeVRyYWNrSGVpZ2h0ID0geVRyYWNrLm9mZnNldEhlaWdodDtcbiAgdmFyIHVsbGFnZSA9IHlUcmFja0hlaWdodCAtIHlUaHVtYkhlaWdodDtcblxuICBmdW5jdGlvbiBtb3VzZU1vdmVfdmVydGljYWwoZXZlbnQpIHtcbiAgICB2YXIgX3RvcCA9IGV2ZW50LmNsaWVudFkgLSB5VHJhY2suZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIHZhciB0b3AgPSBfdG9wIDwgMCA/IDAgOiBfdG9wID4gdWxsYWdlID8gdWxsYWdlIDogX3RvcDtcbiAgICB2YXIgdG9wUmF0aW8gPSB0b3AgLyB5VHJhY2tIZWlnaHQ7XG4gICAgc2Nyb2xsQmFyVmVydGljYWxseSh5VGh1bWIsIHRvcFJhdGlvKTtcbiAgICBzY3JvbGxDb250ZW50VmVydGljYWxseSh2aWV3cG9ydCwgdG9wUmF0aW8pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1vdXNlRG93bl92ZXJ0aWNhbChldmVudCkge1xuICAgIHlUaHVtYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDAsIDgwLCAwKSc7XG4gICAgb25FdmVudCgnbW91c2Vtb3ZlJywgbW91c2VNb3ZlX3ZlcnRpY2FsKTtcbiAgICBvbkV2ZW50KCdtb3VzZXVwJywgbW91c2VVcF92ZXJ0aWNhbCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbW91c2VVcF92ZXJ0aWNhbChldmVudCkge1xuICAgIHlUaHVtYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSg1NSwgNTMsIDUwLCAwLjUpJztcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVfdmVydGljYWwpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwX3ZlcnRpY2FsKTtcbiAgfTtcblxuICB5VGh1bWIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duX3ZlcnRpY2FsKTtcbiAgeVRodW1iLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bl92ZXJ0aWNhbCk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbEhvcml6b250YWxseSh2aWV3cG9ydCwgdmlld3BvcnRXaWR0aCwgeFRyYWNrLCB4VGh1bWIpIHtcbiAgdmFyIHhUaHVtYldpZHRoID0geFRodW1iLm9mZnNldFdpZHRoO1xuICB2YXIgeFRyYWNrV2lkdGggPSB4VHJhY2sub2Zmc2V0V2lkdGg7XG4gIHZhciB1bGxhZ2UgPSB4VHJhY2tXaWR0aCAtIHhUaHVtYldpZHRoO1xuXG4gIGZ1bmN0aW9uIG1vdXNlTW92ZV9ob3Jpem9udGFsKGV2ZW50KSB7XG4gICAgdmFyIF9sZWZ0ID0gZXZlbnQuY2xpZW50WCAtIHhUcmFjay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgIHZhciBsZWZ0ID0gX2xlZnQgPCAwID8gMCA6IF9sZWZ0ID4gdWxsYWdlID8gdWxsYWdlIDogX2xlZnQ7XG4gICAgdmFyIGxlZnRSYXRpbyA9IGxlZnQgLyB4VHJhY2tXaWR0aDtcbiAgICBzY3JvbGxCYXJIb3Jpem9udGFsbHkoeFRodW1iLCBsZWZ0UmF0aW8pO1xuICAgIHNjcm9sbENvbnRlbnRIb3Jpem9udGFsbHkodmlld3BvcnQsIGxlZnRSYXRpbyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbW91c2VVcF9ob3Jpem9udGFsKGV2ZW50KSB7XG4gICAgeFRodW1iLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDU1LCA1MywgNTAsIDAuNSknO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZV9ob3Jpem9udGFsKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcF9ob3Jpem9udGFsKTtcbiAgfTtcblxuICBmdW5jdGlvbiBtb3VzZURvd25faG9yaXpvbnRhbChldmVudCkge1xuICAgIHhUaHVtYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDAsIDgwLCAwKSc7XG4gICAgb25FdmVudCgnbW91c2Vtb3ZlJywgbW91c2VNb3ZlX2hvcml6b250YWwpO1xuICAgIG9uRXZlbnQoJ21vdXNldXAnLCBtb3VzZVVwX2hvcml6b250YWwpO1xuICB9O1xuXG4gIHhUaHVtYi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25faG9yaXpvbnRhbCk7XG4gIHhUaHVtYi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25faG9yaXpvbnRhbCk7XG59XG5cbmZ1bmN0aW9uIHNldFhUaHVtYlZpc2liaWxpdHkodmlld3BvcnQsIHZpZXdwb3J0V2lkdGgsIHhUcmFjaywgeFRodW1iLCBjdXJzb3IsIHByb21wdCkge1xuICB2YXIgeFRyYWNrV2lkdGggPSB4VHJhY2sub2Zmc2V0V2lkdGg7XG4gIHZhciB0ZXJtaW5hbFdpZHRoID0gdmlld3BvcnQuc2Nyb2xsV2lkdGg7XG4gIHZhciB4VGh1bWJTdHlsZSA9IHhUaHVtYi5zdHlsZTtcblxuICBpZiAodmlld3BvcnRXaWR0aCA8IHRlcm1pbmFsV2lkdGgpIHtcbiAgICB2YXIgZnVsbFByb21wdE9mZnNldFdpZHRoID0gcHJvbXB0Lm9mZnNldExlZnQgKyBwcm9tcHQub2Zmc2V0V2lkdGg7XG4gICAgdmFyIHN0YXJ0ID0gZnVsbFByb21wdE9mZnNldFdpZHRoO1xuICAgIHZhciB2aWV3cG9ydFJhdGlvID0gdmlld3BvcnRXaWR0aCAvIHRlcm1pbmFsV2lkdGg7XG4gICAgdmFyIHhUaHVtYldpZHRoID0gdmlld3BvcnRSYXRpbyAqIHhUcmFja1dpZHRoO1xuICAgIHZhciB2aWV3cG9ydFBlcmNlbnRhZ2UgPSBnZXRQZXJjZW50YWdlKHZpZXdwb3J0UmF0aW8pO1xuICAgIHZhciB1bGxhZ2UgPSB4VHJhY2tXaWR0aCAtIHhUaHVtYldpZHRoO1xuICAgIHZhciB4UG9zaXRpb24gPSBjdXJzb3Iub2Zmc2V0TGVmdCArIGN1cnNvci5vZmZzZXRXaWR0aCAtIHN0YXJ0O1xuICAgIHZhciBjdXJzb3JSYXRpbyA9ICh4UG9zaXRpb24gLyB0ZXJtaW5hbFdpZHRoKSAqICh1bGxhZ2UgLyB4VHJhY2tXaWR0aCk7XG4gICAgdmFyIGN1cnNvclBlcmNlbnRhZ2UgPSBnZXRQZXJjZW50YWdlKGN1cnNvclJhdGlvKTtcblxuICAgIHhUaHVtYlN0eWxlLmxlZnQgPSBjdXJzb3JQZXJjZW50YWdlO1xuICAgIHhUaHVtYlN0eWxlLndpZHRoID0gdmlld3BvcnRQZXJjZW50YWdlO1xuICAgIHhUaHVtYlN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH0gZWxzZSB7XG4gICAgeFRodW1iU3R5bGUubGVmdCA9IDA7XG4gICAgeFRodW1iU3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgeFRodW1iU3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFlUaHVtYlZpc2liaWxpdHkodmlld3BvcnQsIHZpZXdwb3J0SGVpZ2h0LCB5VHJhY2ssIHlUaHVtYiwgY3Vyc29yKSB7XG4gIHZhciB5VHJhY2tIZWlnaHQgPSB5VHJhY2sub2Zmc2V0SGVpZ2h0O1xuICB2YXIgdGVybWluYWxIZWlnaHQgPSB2aWV3cG9ydC5zY3JvbGxIZWlnaHQ7XG4gIHZhciB5VGh1bWJTdHlsZSA9IHlUaHVtYi5zdHlsZTtcblxuICBpZiAodmlld3BvcnRIZWlnaHQgPCB0ZXJtaW5hbEhlaWdodCkge1xuICAgIHZhciBzdGFydCA9IHZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB2YXIgdmlld3BvcnRSYXRpbyA9IHZpZXdwb3J0SGVpZ2h0IC8gdGVybWluYWxIZWlnaHQ7XG4gICAgdmFyIHlUaHVtYkhlaWdodCA9IHZpZXdwb3J0UmF0aW8gKiB5VHJhY2tIZWlnaHQ7XG4gICAgdmFyIHZpZXdwb3J0UGVyY2VudGFnZSA9IGdldFBlcmNlbnRhZ2Uodmlld3BvcnRSYXRpbyk7XG4gICAgdmFyIHVsbGFnZSA9IHlUcmFja0hlaWdodCAtIHlUaHVtYkhlaWdodDtcbiAgICB2YXIgeVBvc2l0aW9uID0gY3Vyc29yLm9mZnNldFRvcCArIGN1cnNvci5vZmZzZXRIZWlnaHQgLSBzdGFydDtcbiAgICB2YXIgY3Vyc29yUmF0aW8gPSAoeVBvc2l0aW9uIC8gdGVybWluYWxIZWlnaHQpICogKHVsbGFnZSAvIHlUcmFja0hlaWdodCk7XG4gICAgdmFyIGN1cnNvclBlcmNlbnRhZ2UgPSBnZXRQZXJjZW50YWdlKGN1cnNvclJhdGlvKTtcblxuICAgIHlUaHVtYlN0eWxlLnRvcCA9IGN1cnNvclBlcmNlbnRhZ2U7XG4gICAgeVRodW1iU3R5bGUuaGVpZ2h0ID0gdmlld3BvcnRQZXJjZW50YWdlO1xuICAgIHlUaHVtYlN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH0gZWxzZSB7XG4gICAgeVRodW1iU3R5bGUudG9wID0gMDtcbiAgICB5VGh1bWJTdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgeVRodW1iU3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICB9XG59XG5cbmV4cG9ydCB7IHNjcm9sbCB9O1xuIiwiaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4vY29uc29sZS9pbml0aWFsaXplJztcbmltcG9ydCB7IGludGVycHJldCB9ICBmcm9tICcuL2xpc3AvaW50ZXJwcmV0JztcbmltcG9ydCB7IGtleVRva2VucyB9ICBmcm9tICcuL2xpc3Ava2V5VG9rZW5zJztcblxudmFyIF9rZXlUb2tlbnMgPSAga2V5VG9rZW5zLm1hcChmdW5jdGlvbiAoa2V5VG9rZW4pIHtcbiAgcmV0dXJuICc6JyArIGtleVRva2VuO1xufSk7XG5cbnZhciBwcm9tcHRMYWJlbCA9ICdMaXNwPiAnO1xuXG5mdW5jdGlvbiBnZXRDYW5kaWRhdGVzKHByZWZpeCkge1xuICB2YXIgZW52S2V5cyA9IGludGVycHJldChcIihrZXlzICgtZ2V0LWN1cnJlbnQtZW52LSkpXCIpWzBdXG4gICAgICAudmFsdWVcbiAgICAgIC5zbGljZSgxLCAtMSlcbiAgICAgIC5zcGxpdCgnICcpO1xuICByZXR1cm4gZ2V0TWF0Y2hlcyhwcmVmaXgsIF9rZXlUb2tlbnMuY29uY2F0KGVudktleXMpKTtcbn1cblxuZnVuY3Rpb24gZ2V0TWF0Y2hlcyhwcmVmaXgsIHdvcmRzKSB7XG4gIGlmICghL15bLWEtekEtWjAtOV0rJC8udGVzdChwcmVmaXgpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciByZWdleCA9IFJlZ0V4cCgnKF58XFxXKTonICsgcHJlZml4KTtcbiAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgZm9yICh2YXIgaW5kZXggaW4gd29yZHMpIHtcbiAgICB2YXIgd29yZCA9IHdvcmRzW2luZGV4XTtcbiAgICBpZiAocmVnZXgudGVzdCh3b3JkKSkge1xuICAgICAgbWF0Y2hlcy5wdXNoKHdvcmQuc2xpY2UoMSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuaW5pdGlhbGl6ZSh7XG4gIG5vZGVJZDogJ3ZpZXdwb3J0JyxcbiAgcHJvbXB0TGFiZWw6IHByb21wdExhYmVsLFxuICB0cmFuc2Zvcm06IGludGVycHJldCxcbiAgZ2V0Q2FuZGlkYXRlczogZ2V0Q2FuZGlkYXRlc1xufSk7XG4iLCJpbXBvcnQgeyBjb21tZW50U2lnbmFsIH0gZnJvbSAnLi9jb21tZW50U2lnbmFsJztcbmltcG9ydCB7IGV2YWx1YXRlIH0gZnJvbSAnLi9ldmFsdWF0ZSc7XG5cbnZhciBfcHJvY2VzcyA9IGZ1bmN0aW9uKHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oZW52cykge1xuICAgIHJldHVybiBmdW5jdGlvbihzb3VyY2VDb2RlKSB7XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgdmFyIGFkZFJlc3VsdCA9IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICB9O1xuICAgICAgdmFyIHZhbHVlID0gZXZhbHVhdGUoZW52cywgYWRkUmVzdWx0KSh0cmFuc2Zvcm0oc291cmNlQ29kZSkpO1xuICAgICAgdmFyIHJlc3VsdCA9ICh2YWx1ZSA9PT0gY29tbWVudFNpZ25hbClcbiAgICAgICAgPyB7IGVmZmVjdDogeyB0eXBlOiAnY29tbWVudCcgfSB9XG4gICAgICAgIDogeyBlZmZlY3Q6IGZhbHNlLCB2YWx1ZTogdmFsdWUgfTtcbiAgICAgIGFkZFJlc3VsdChyZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydCB7IF9wcm9jZXNzIH07XG4iLCJ2YXIgY29tbWVudFNpZ25hbCA9IHt9O1xuXG5leHBvcnQgeyBjb21tZW50U2lnbmFsIH07XG4iLCJ2YXIgYWRkRW52ID0gZnVuY3Rpb24gKGVudlN0YWNrLCBuZXdFbnYpIHtcbiAgdmFyIGNvcHkgPSBlbnZTdGFjay5zbGljZSgwKTtcbiAgY29weS51bnNoaWZ0KG5ld0Vudik7XG4gIHJldHVybiBjb3B5O1xufTtcblxudmFyIGdldExhc3QgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xufTtcblxudmFyIGxvb2t1cCA9IGZ1bmN0aW9uIChlbnZTdGFjaywga2V5KSB7XG4gIHZhciBjb3B5ID0gZW52U3RhY2suc2xpY2UoMCk7XG4gIHdoaWxlIChjb3B5Lmxlbmd0aCAhPT0gMCkge1xuICAgIHZhciBlbnYgPSBjb3B5WzBdO1xuICAgIHZhciB2YWx1ZSA9IGVudltrZXldO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvcHkuc2hpZnQoKTtcbiAgfVxuICB0aHJvdyBcIlZBTFVFIENPUlJFU1BPTkRJTkcgVE8gXFxcIlwiICsga2V5ICsgXCJcXFwiIERPRVMgTk9UIEVYSVNUIElOIEVOVi1TVEFDS1wiO1xufTtcblxudmFyIHNldCA9IGZ1bmN0aW9uIChlbnYsIGtleSwgdmFsdWUpIHtcbiAgZW52W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxudmFyIHNldE1haW5FbnYgPSBmdW5jdGlvbiAoZW52U3RhY2ssIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHNldChnZXRMYXN0KGVudlN0YWNrKSwga2V5LCB2YWx1ZSk7XG59O1xuXG52YXIgdW5zZXQgPSBmdW5jdGlvbiAoZW52LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZW52W2tleV07XG4gIGRlbGV0ZSBlbnZba2V5XTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxudmFyIHVuc2V0TWFpbkVudiA9IGZ1bmN0aW9uIChlbnZTdGFjaywga2V5KSB7XG4gIHJldHVybiB1bnNldChnZXRMYXN0KGVudlN0YWNrKSwga2V5KTtcbn07XG5cbmV4cG9ydCB7XG4gIGFkZEVudixcbiAgbG9va3VwLFxuICBzZXRNYWluRW52LFxuICB1bnNldE1haW5FbnZcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFcmxCb29sZWFuIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxJZGVudGlmaWVyIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTnVtYmVyIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxTdHJpbmcgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGVybE5pbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXh0cmFjdEpzVmFsdWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGZyb21BcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgaXNKc05hTiB9IGZyb20gJy4vanMtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzSnNOdW1iZXIgfSBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0pzU3RyaW5nIH0gZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyB0b0FycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5cbnZhciAgX19zbGljZSAgPSBbXS5zbGljZTtcbnZhciBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGFkZCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIobmJycy5yZWR1Y2UoZnVuY3Rpb24oeCwgbmJyKSB7XG4gICAgcmV0dXJuIHggKz0gbmJyO1xuICB9KSk7XG59O1xuXG52YXIgY29udGFpbnMgPSBmdW5jdGlvbihpbmRleCwga2V5KSB7XG4gIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKGtleSBpbiBpbmRleCk7XG59O1xuXG52YXIgZGlzc29jID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpbmRleCA9IGFyZ3VtZW50c1swXTtcbiAgdmFyIGtleXMgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICB2YXIgbGVuID0ga2V5cy5sZW5ndGg7XG4gIHZhciBjb3B5ID0ge307XG4gIGZvciAodmFyIGtleSBpbiBpbmRleCkge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoaW5kZXgsIGtleSkpIGNvbnRpbnVlO1xuICAgIHZhciB2YWx1ZSA9IGluZGV4W2tleV07XG4gICAgY29weVtrZXldID0gdmFsdWU7XG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGRlbGV0ZSBjb3B5W2tleV07XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUVybEluZGV4KGNvcHkpO1xufTtcblxudmFyIGRpdmlkZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIobmJycy5yZWR1Y2UoZnVuY3Rpb24oeCwgbmJyKSB7XG4gICAgcmV0dXJuIHggLz0gbmJyO1xuICB9KSk7XG59O1xuXG52YXIgZXhwb25lbnRpYXRlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihuYnJzLnJlZHVjZShmdW5jdGlvbih4LCBuYnIpIHtcbiAgICByZXR1cm4gTWF0aC5wb3coeCwgbmJyKTtcbiAgfSkpO1xufTtcblxudmFyIGdldCA9IGZ1bmN0aW9uKGpzSW5kZXgsIGpzS2V5KSB7XG4gIHJldHVybiBqc0luZGV4W2pzS2V5XTtcbn07XG5cbnZhciBnZXRFbnZpcm9ubWVudCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICB2YXIgZW52aXJvbm1lbnQgPSBjb25maWcuZW52aXJvbm1lbnQ7XG4gIHNldENvcmVGbnNPbkpzVmFsdWVzX2JhbmdfKGVudmlyb25tZW50LCBmdW5jdGlvbnNPbkpzVmFsdWVzKTtcbiAgcmV0dXJuIGVudmlyb25tZW50O1xufTtcblxudmFyIGdyZWF0ZXJUaGFuT3JFcXVhbCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKG5icnNbMF0gPj0gbmJyc1sxXSk7XG59O1xuXG52YXIgZ3JlYXRlclRoYW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsQm9vbGVhbihuYnJzWzBdID4gbmJyc1sxXSk7XG59O1xuXG52YXIgaW5kZXggPSBmdW5jdGlvbigpIHtcbiAgdmFyIGFyZ3MgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBfaW5kZXggPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBrID0gYXJnc1tpXTtcbiAgICBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgIF9pbmRleFtrXSA9IGFyZ3NbaSArIDFdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY3JlYXRlRXJsSW5kZXgoX2luZGV4KTtcbn07XG5cbnZhciBrZXlzID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgdmFyIF9rZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBpbmRleCkge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoaW5kZXgsIGtleSkpIGNvbnRpbnVlO1xuICAgIHZhciB2YWx1ZSA9IGluZGV4W2tleV07XG4gICAgdmFyIGpzTmJyID0gcGFyc2VGbG9hdChrZXksIDEwKTtcbiAgICB2YXIgX2tleSA9IGlzSnNOYU4oanNOYnIpXG4gICAgICAgID8gKGtleVswXSA9PT0gJzonID8gY3JlYXRlRXJsSWRlbnRpZmllciA6IGNyZWF0ZUVybFN0cmluZykoa2V5KVxuICAgICAgICA6IGNyZWF0ZUVybE51bWJlcihqc05icik7XG4gICAgX2tleXMucHVzaChfa2V5KTtcbiAgfVxuICByZXR1cm4gZnJvbUFycmF5KF9rZXlzKTtcbn07XG5cbnZhciBsZW5ndGhTdHJpbmcgPSBmdW5jdGlvbihqc1ZhbCkge1xuICBpZiAoIWlzSnNTdHJpbmcoanNWYWwpKSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKGpzVmFsLmxlbmd0aCAtIDIpO1xufTtcblxudmFyIGxlc3NUaGFuID0gZnVuY3Rpb24oKSB7XG4gIHZhciBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4obmJyc1swXSA8IG5icnNbMV0pO1xufTtcblxudmFyIGxlc3NUaGFuT3JFcXVhbCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKG5icnNbMF0gPD0gbmJyc1sxXSk7XG59O1xuXG52YXIgbGlmdCA9IGZ1bmN0aW9uKGZuT25Kc1ZhbHVlcykge1xuICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWVMaXN0KSB7XG4gICAgcmV0dXJuIGZuT25Kc1ZhbHVlcy5hcHBseShudWxsLCAodG9BcnJheShlcmxWYWx1ZUxpc3QpKS5tYXAoZXh0cmFjdEpzVmFsdWUpKTtcbiAgfTtcbn07XG5cbnZhciBtYXggPSBmdW5jdGlvbigpIHtcbiAgdmFyIG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKE1hdGgubWF4LmFwcGx5KE1hdGgsIG5icnMpKTtcbn07XG5cbnZhciBtaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKE1hdGgubWluLmFwcGx5KE1hdGgsIG5icnMpKTtcbn07XG5cbnZhciBtb2QgPSBmdW5jdGlvbihuYnIwLCBuYnIxKSB7XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIobmJyMCAlIG5icjEpO1xufTtcblxudmFyIG11bHRpcGx5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihuYnJzLnJlZHVjZShmdW5jdGlvbih4LCBuYnIpIHtcbiAgICByZXR1cm4geCAqPSBuYnI7XG4gIH0pKTtcbn07XG5cbnZhciBuZWdhdGUgPSBmdW5jdGlvbihuYnIpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcigtMSAqIG5icik7XG59O1xuXG52YXIgcGFyc2VOdW1iZXIgPSBmdW5jdGlvbihqc1ZhbCkge1xuICBpZiAoaXNKc051bWJlcihqc1ZhbCkpIHtcbiAgICByZXR1cm4ganNWYWw7XG4gIH1cbiAgaWYgKCFpc0pzU3RyaW5nKGpzVmFsKSkge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbiAgdmFyIGpzTmJyID0gcGFyc2VGbG9hdChzdHJpcFF1b3Rlcyhqc1ZhbCksIDEwKTtcbiAgaWYgKGlzSnNOYU4oanNOYnIpKSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKGpzTmJyKTtcbiAgfVxufTtcblxudmFyIHNldENvcmVGbnNPbkpzVmFsdWVzX2JhbmdfID0gZnVuY3Rpb24oZW52LCBmbnMpIHtcbiAgdmFyIF9yZXN1bHRzID0gW107XG4gIGZvciAodmFyIGZuTmFtZSBpbiBmbnMpIHtcbiAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGZucywgZm5OYW1lKSkgY29udGludWU7XG4gICAgdmFyIGZuID0gZm5zW2ZuTmFtZV07XG4gICAgZW52W2ZuTmFtZV0gPSBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uKGxpZnQoZm4pKTtcbiAgICBfcmVzdWx0cy5wdXNoKGVudltmbk5hbWVdKTtcbiAgfVxuICByZXR1cm4gX3Jlc3VsdHM7XG59O1xuXG52YXIgc3VidHJhY3QgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKG5icnMucmVkdWNlKGZ1bmN0aW9uKHgsIG5icikge1xuICAgIHJldHVybiB4IC09IG5icjtcbiAgfSkpO1xufTtcblxudmFyIHZhbHMgPSBmdW5jdGlvbihpbmRleCkge1xuICB2YXIgdmFsdWVzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBpbmRleCkge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoaW5kZXgsIGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgdmFsdWUgPSBpbmRleFtrZXldO1xuICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZnJvbUFycmF5KHZhbHVlcyk7XG59O1xuXG52YXIgZnVuY3Rpb25zT25Kc1ZhbHVlcyA9IHtcbiAgJysnOiBhZGQsXG4gICdjb250YWlucz8nOiBjb250YWlucyxcbiAgJ2Rpc3NvYyc6IGRpc3NvYyxcbiAgJy8nOiBkaXZpZGUsXG4gICcqKic6IGV4cG9uZW50aWF0ZSxcbiAgJ2dldCc6IGdldCxcbiAgJz4nOiBncmVhdGVyVGhhbixcbiAgJz49JzogZ3JlYXRlclRoYW5PckVxdWFsLFxuICAnaW5kZXgnOiBpbmRleCxcbiAgJ2tleXMnOiBrZXlzLFxuICAnbGVuZ3RoLXN0cmluZyc6IGxlbmd0aFN0cmluZyxcbiAgJ21heCc6IG1heCxcbiAgJ21pbic6IG1pbixcbiAgJzwnOiBsZXNzVGhhbixcbiAgJzw9JzogbGVzc1RoYW5PckVxdWFsLFxuICAnJSc6IG1vZCxcbiAgJyonOiBtdWx0aXBseSxcbiAgJ25lZ2F0ZSc6IG5lZ2F0ZSxcbiAgJ3BhcnNlLW51bWJlcic6IHBhcnNlTnVtYmVyLFxuICAnLSc6IHN1YnRyYWN0LFxuICAndmFscyc6IHZhbHNcbn07XG5cbmV4cG9ydCB7IGdldEVudmlyb25tZW50IH07XG4iLCJpbXBvcnQgeyBhcmVFcXVhbCB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgY2FyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBjZHIgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGNpcmN1bXBlbmRRdW90ZXMgfSBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjb25jYXQgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGNyZWF0ZUVybEF0b20gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybEJvb2xlYW4gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybEluZGV4IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxOdW1iZXIgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3ltYm9sIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBkcm9wIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBlcmxGYWxzZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXJsSWdub3JlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBlcmxOaWwgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGVybFRydWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGV4dHJhY3RKc1ZhbHVlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBmcm9tQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGludGVycHJldCB9IGZyb20gJy4vaW50ZXJwcmV0JztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGlzRXJsQXRvbSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxDb3JlUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybEJvb2xlYW4gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsRmFsc2UgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTGlzdCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxNYWNybyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxOaWwgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTnVtYmVyIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxTeW1ib2wgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsVHJ1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBsYXN0IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBuZXh0IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyByZWN1cnNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyByZWR1Y2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHJldmVyc2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gJy4vc2VyaWFsaXplJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHRvQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHRvUGFydGlhbEFycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5cbnZhciBfX3NsaWNlICAgPSBbXS5zbGljZTtcbnZhciBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGFwcGVuZCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIGVybEFyZ3NBcnJheSA9IHRvQXJyYXkoZXJsQXJncyk7XG4gIHZhciBlcmxMaXN0ID0gZXJsQXJnc0FycmF5WzBdO1xuICB2YXIgZXJsVmFsdWVzID0gMiA8PSBlcmxBcmdzQXJyYXkubGVuZ3RoID8gX19zbGljZS5jYWxsKGVybEFyZ3NBcnJheSwgMSkgOiBbXTtcbiAgcmV0dXJuIGNvbmNhdChlcmxMaXN0LCBmcm9tQXJyYXkoZXJsVmFsdWVzKSk7XG59O1xuXG52YXIgX2FyZUVxdWFsID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIHZhciBlcmxWYWx1ZTAgPSBwYXJ0aWFsQXJyYXlbMF07XG4gIHZhciBlcmxWYWx1ZTEgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIHZhciBfX2FyZUVxdWFsID0gZnVuY3Rpb24oZXJsVmFsdWUwLCBlcmxWYWx1ZTEpIHtcbiAgICBpZiAoaXNFcmxMaXN0KGVybFZhbHVlMCkgJiYgaXNFcmxMaXN0KGVybFZhbHVlMSkpIHtcbiAgICAgIHJldHVybiBhcmVFcXVhbChlcmxWYWx1ZTAsIGVybFZhbHVlMSwgX19hcmVFcXVhbCk7XG4gICAgfSBlbHNlIGlmIChpc0VybEluZGV4KGVybFZhbHVlMCkgJiYgaXNFcmxJbmRleChlcmxWYWx1ZTEpKSB7XG4gICAgICB2YXIganNJbmRleDAgPSBlcmxWYWx1ZTAuanNWYWx1ZTtcbiAgICAgIHZhciBqc0luZGV4MSA9IGVybFZhbHVlMS5qc1ZhbHVlO1xuICAgICAgcmV0dXJuIChfX2FyZUVxdWFsKGtleXMoanNJbmRleDApLCBrZXlzKGpzSW5kZXgxKSkpXG4gICAgICAgICYmIChfX2FyZUVxdWFsKHZhbHMoanNJbmRleDApLCB2YWxzKGpzSW5kZXgxKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXJsVmFsdWUwLmpzVmFsdWUgPT09IGVybFZhbHVlMS5qc1ZhbHVlO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4oX19hcmVFcXVhbChlcmxWYWx1ZTAsIGVybFZhbHVlMSkpO1xufTtcblxudmFyIGFzc29jID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgYXJncztcbiAgdmFyIGpzSW5kZXggPSBleHRyYWN0SnNWYWx1ZShjYXIoZXJsQXJncykpO1xuICBhcmdzID0gY2RyKGVybEFyZ3MpO1xuICB2YXIgY29weSA9IHt9O1xuICBmb3IgKHZhciBrZXkgaW4ganNJbmRleCkge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoanNJbmRleCwga2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHZhciB2YWx1ZSA9IGpzSW5kZXhba2V5XTtcbiAgICBjb3B5W2tleV0gPSB2YWx1ZTtcbiAgfVxuICB3aGlsZSAoIWlzRW1wdHkoYXJncykpIHtcbiAgICB2YXIgayA9IGNhcihhcmdzKTtcbiAgICB2YXIgdiA9IG5leHQoYXJncyk7XG4gICAgYXJncyA9IHJlY3Vyc2UocmVjdXJzZShhcmdzKSk7XG4gICAgY29weVtleHRyYWN0SnNWYWx1ZShrKV0gPSB2O1xuICB9XG4gIHJldHVybiBjcmVhdGVFcmxJbmRleChjb3B5KTtcbn07XG5cbnZhciBhdG9tID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY3JlYXRlRXJsQXRvbShjYXIoZXJsQXJncykpO1xufTtcblxudmFyIF9jYXIgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBhcmcgPSBjYXIoZXJsQXJncyk7XG4gIGlmIChpc0VybExpc3QoYXJnKSkge1xuICAgIHJldHVybiBjYXIoYXJnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG52YXIgX2NkciA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIGFyZyA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKGlzRXJsTGlzdChhcmcpKSB7XG4gICAgcmV0dXJuIGNkcihhcmcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbnZhciBfY29uY2F0ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgZXJsTGlzdHMgPSB0b0FycmF5KGVybEFyZ3MpO1xuICByZXR1cm4gY29uY2F0LmFwcGx5KG51bGwsIGVybExpc3RzKTtcbn07XG5cbnZhciBjb25zID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY3JlYXRlRXJsTGlzdChjYXIoZXJsQXJncyksIG5leHQoZXJsQXJncykpO1xufTtcblxudmFyIGNvdW50ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgZXJsTGlzdCA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKCFpc0VybExpc3QoZXJsTGlzdCkpIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG4gIHZhciBfcmVkdWNlID0gZnVuY3Rpb24oc3VtLCB2YWx1ZSkge1xuICAgIHJldHVybiBzdW0gKyAxO1xuICB9O1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKHJlZHVjZSgwLCBfcmVkdWNlLCBjYXIoZXJsQXJncykpKTtcbn07XG5cbnZhciBjcmVhdGVQcmVkaWNhdGUgPSBmdW5jdGlvbihwcmVkKSB7XG4gIHJldHVybiBmdW5jdGlvbihqc0xpc3QpIHtcbiAgICB2YXIgZXJsVmFsdWUgPSBqc0xpc3QudmFsdWU7XG4gICAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4ocHJlZChlcmxWYWx1ZSkpO1xuICB9O1xufTtcblxudmFyIGRlcmVmID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gKGNhcihlcmxBcmdzKSkuZXJsVmFsdWU7XG59O1xuXG52YXIgX2Ryb3AgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgdmFyIGVybE51bWJlciA9IHBhcnRpYWxBcnJheVswXTtcbiAgdmFyIGVybExpc3QgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIHJldHVybiBkcm9wKGV4dHJhY3RKc1ZhbHVlKGVybE51bWJlciksIGVybExpc3QpO1xufTtcblxudmFyIGZpcnN0ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY2FyKGNhcihlcmxBcmdzKSk7XG59O1xuXG52YXIgZ2V0RW52aXJvbm1lbnQgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgdmFyIGVudmlyb25tZW50ID0gY29uZmlnLmVudmlyb25tZW50O1xuICBzZXRDb3JlRm5zT25FcmxWYWx1ZXMoZW52aXJvbm1lbnQsIGZ1bmN0aW9uc09uRXJsVmFsdWVzKTtcbiAgcmV0dXJuIGVudmlyb25tZW50O1xufTtcblxudmFyIGhhc1Byb2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJztcbn1cblxudmFyIGhhc1Byb2Nlc3NXZWJwYWNrU2hpbSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ocHJvY2Vzcy50aXRsZSA9PT0gJ2Jyb3dzZXInICYmIHByb2Nlc3MuYnJvd3Nlcik7XG59XG5cbnZhciBpZ25vcmUgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBlcmxJZ25vcmU7XG59O1xuXG52YXIgaWdub3JlSWZUcnVlID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIHZhciBlcmxCb29sID0gcGFydGlhbEFycmF5WzBdO1xuICB2YXIgZXJsVmFsdWUgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIGlmIChleHRyYWN0SnNWYWx1ZShlcmxCb29sKSkge1xuICAgIHJldHVybiBlcmxJZ25vcmU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybFZhbHVlO1xuICB9XG59O1xuXG52YXIgaWdub3JlVW5sZXNzVHJ1ZSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEFyZ3MpO1xuICB2YXIgZXJsQm9vbCA9IHBhcnRpYWxBcnJheVswXTtcbiAgdmFyIGVybFZhbHVlID0gcGFydGlhbEFycmF5WzFdO1xuICBpZiAoZXh0cmFjdEpzVmFsdWUoZXJsQm9vbCkpIHtcbiAgICByZXR1cm4gZXJsVmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybElnbm9yZTtcbiAgfVxufTtcblxudmFyIF9pbnRlcnByZXQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBpbnRlcnByZXQoc3RyaXBRdW90ZXMoZXh0cmFjdEpzVmFsdWUoY2FyKGVybEFyZ3MpKSkpO1xufTtcblxudmFyIF9pc0VtcHR5ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBpZiAoaXNFbXB0eShlcmxBcmdzKSkge1xuICAgIHJldHVybiBlcmxGYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoaXNFbXB0eShjYXIoZXJsQXJncykpKSB7XG4gICAgICByZXR1cm4gZXJsVHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVybEZhbHNlO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbihqc0xpc3QpIHtcbiAgdmFyIGVybFZhbHVlID0ganNMaXN0LnZhbHVlO1xuICByZXR1cm4gY3JlYXRlRXJsQm9vbGVhbihpc0VybENvcmVQdXJlRnVuY3Rpb24oZXJsVmFsdWUpXG4gICAgfHwgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uKGVybFZhbHVlKSk7XG59O1xuXG52YXIgaXNOb2RlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBoYXNQcm9jZXNzKCkgJiYgIWhhc1Byb2Nlc3NXZWJwYWNrU2hpbSgpO1xufVxuXG52YXIgX2xhc3QgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBhcmcgPSBjYXIoZXJsQXJncyk7XG4gIGlmIChpc0VybExpc3QoYXJnKSkge1xuICAgIHJldHVybiBsYXN0KGFyZyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxudmFyIGxpc3QgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBlcmxBcmdzO1xufTtcblxudmFyIG1ldGEgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBlcmxNZXRhID0gKGNhcihlcmxBcmdzKSkubWV0YTtcbiAgaWYgKGVybE1ldGEgIT0gbnVsbCkge1xuICAgIHJldHVybiBlcmxNZXRhO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbnZhciBfbm90ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgZXJsVmFsID0gY2FyKGVybEFyZ3MpO1xuICBpZiAoaXNFcmxOaWwoZXJsVmFsKSB8fCBpc0VybEZhbHNlKGVybFZhbCkpIHtcbiAgICByZXR1cm4gZXJsVHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsRmFsc2U7XG4gIH1cbn07XG5cbnZhciBudGggPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgdmFyIGVybE51bWJlciA9IHBhcnRpYWxBcnJheVswXTtcbiAgdmFyIGVybExpc3QgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIHZhciB0YXJnZXQgPSBleHRyYWN0SnNWYWx1ZShlcmxOdW1iZXIpO1xuICBpZiAodGFyZ2V0ID49IDApIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhcmdldDsgaSsrKSB7XG4gICAgICBlcmxMaXN0ID0gY2RyKGVybExpc3QpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA+IHRhcmdldDsgaS0tKSB7XG4gICAgICBlcmxMaXN0ID0gY2RyKGVybExpc3QpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2FyKGVybExpc3QpO1xufTtcblxudmFyIHByZXBlbmQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBlcmxBcmdzQXJyYXkgPSB0b0FycmF5KGVybEFyZ3MpO1xuICB2YXIgZXJsTGlzdCA9IGVybEFyZ3NBcnJheVswXTtcbiAgdmFyIGVybFZhbHVlcyA9IDIgPD0gZXJsQXJnc0FycmF5Lmxlbmd0aCA/IF9fc2xpY2UuY2FsbChlcmxBcmdzQXJyYXksIDEpIDogW107XG4gIHZhciBfcmVkdWNlID0gZnVuY3Rpb24obGlzdCwgdmFsKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVybExpc3QodmFsLCBsaXN0KTtcbiAgfTtcbiAgcmV0dXJuIGVybFZhbHVlcy5yZWR1Y2UoX3JlZHVjZSwgZXJsTGlzdCk7XG59O1xuXG52YXIgX3ByU3RyID0gZnVuY3Rpb24oZXJsQXJncywgcHJpbnRSZWFkYWJseSkge1xuICByZXR1cm4gKCh0b0FycmF5KGVybEFyZ3MpKS5tYXAoZnVuY3Rpb24oZXJsQXJnKSB7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZShlcmxBcmcsIHByaW50UmVhZGFibHkpO1xuICB9KSkuam9pbignJyk7XG59O1xuXG52YXIgcHJldHR5U3RyaW5nID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY3JlYXRlRXJsU3RyaW5nKGNpcmN1bXBlbmRRdW90ZXMoX3ByU3RyKGVybEFyZ3MsIHRydWUpKSk7XG59O1xuXG52YXIgcmVhZCA9IGZ1bmN0aW9uKGpzTGlzdCkge1xuICBpZiAoaXNOb2RlKCkpIHtcbiAgICB2YXIgX3JlYWQgPSBmdW5jdGlvbihfanNMaXN0KSB7XG4gICAgICB2YXIganNGaWxlTmFtZSA9IHN0cmlwUXVvdGVzKGV4dHJhY3RKc1ZhbHVlKGNhcihfanNMaXN0KSkpO1xuICAgICAgLy9yZXR1cm4gcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoanNGaWxlTmFtZSkudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhfcmVhZChqc0xpc3QpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG52YXIgcmVzZXQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgdmFyIGF0b20gPSBwYXJ0aWFsQXJyYXlbMF07XG4gIHZhciB2YWx1ZSA9IHBhcnRpYWxBcnJheVsxXTtcbiAgYXRvbS5lcmxWYWx1ZSA9IHZhbHVlO1xuICByZXR1cm4gYXRvbTtcbn07XG5cbnZhciByZXN0ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgYXJnID0gY2FyKGVybEFyZ3MpO1xuICBpZiAoaXNFcmxMaXN0KGFyZykpIHtcbiAgICByZXR1cm4gY2RyKGFyZyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxudmFyIF9yZXZlcnNlID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgYXJnID0gY2FyKGVybEFyZ3MpO1xuICBpZiAoaXNFcmxMaXN0KGFyZykpIHtcbiAgICByZXR1cm4gcmV2ZXJzZShhcmcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbnZhciBzZXQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgzLCBlcmxBcmdzKTtcbiAgdmFyIGluZGV4ID0gcGFydGlhbEFycmF5WzBdO1xuICB2YXIga2V5ID0gcGFydGlhbEFycmF5WzFdO1xuICB2YXIgdmFsID0gcGFydGlhbEFycmF5WzJdO1xuICAoZXh0cmFjdEpzVmFsdWUoaW5kZXgpKVtleHRyYWN0SnNWYWx1ZShrZXkpXSA9IHZhbDtcbiAgcmV0dXJuIGluZGV4O1xufTtcblxudmFyIHNldENvcmVGbnNPbkVybFZhbHVlcyA9IGZ1bmN0aW9uKGVudiwgZm5zKSB7XG4gIHZhciBfcmVzdWx0cyA9IFtdO1xuICBmb3IgKHZhciBmbk5hbWUgaW4gZm5zKSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChmbnMsIGZuTmFtZSkpIGNvbnRpbnVlO1xuICAgIHZhciBmbiA9IGZuc1tmbk5hbWVdO1xuICAgIF9yZXN1bHRzLnB1c2goZW52W2ZuTmFtZV0gPSBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uKGZuKSk7XG4gIH1cbiAgcmV0dXJuIF9yZXN1bHRzO1xufTtcblxudmFyIHNsdXJwID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBpZiAoaXNOb2RlKCkpIHtcbiAgICB2YXIganNGaWxlTmFtZSA9IHN0cmlwUXVvdGVzKGV4dHJhY3RKc1ZhbHVlKGNhcihlcmxBcmdzKSkpO1xuICAgIC8vdmFyIF9mc18gPSByZXF1aXJlKCdmcycpO1xuICAgIC8vcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhjaXJjdW1wZW5kUXVvdGVzKF9mc18ucmVhZEZpbGVTeW5jKGpzRmlsZU5hbWUpLnRvU3RyaW5nKCkpKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG52YXIgc3RyaW5nID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY3JlYXRlRXJsU3RyaW5nKGNpcmN1bXBlbmRRdW90ZXMoX3ByU3RyKGVybEFyZ3MsIGZhbHNlKSkpO1xufTtcblxudmFyIHN0cmlwUXVvdGVzID0gZnVuY3Rpb24oanNTdHJpbmcpIHtcbiAgcmV0dXJuIGpzU3RyaW5nLnNsaWNlKDEsIC0xKTtcbn07XG5cbnZhciBzeW1ib2wgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBlcmxWYWx1ZSA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKGlzRXJsU3RyaW5nKGVybFZhbHVlKSkge1xuICAgIHZhciBqc1N0ciA9IGV4dHJhY3RKc1ZhbHVlKGVybFZhbHVlKTtcbiAgICByZXR1cm4gY3JlYXRlRXJsU3ltYm9sKGpzU3RyLnNsaWNlKDEsIC0xKSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxudmFyIF90YWtlID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIHZhciBlcmxOdW1iZXIgPSBwYXJ0aWFsQXJyYXlbMF07XG4gIHZhciBlcmxMaXN0ID0gcGFydGlhbEFycmF5WzFdO1xuICByZXR1cm4gdGFrZShleHRyYWN0SnNWYWx1ZShlcmxOdW1iZXIpLCBlcmxMaXN0KTtcbn07XG5cbnZhciB0eXBlT2YgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBlcmxWYWx1ZSA9IGNhcihlcmxBcmdzKTtcbiAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhjaXJjdW1wZW5kUXVvdGVzKGVybFZhbHVlLnR5cGUpKTtcbn07XG5cbnZhciBfdGhyb3cgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHRocm93IGNhcihlcmxBcmdzKTtcbn07XG5cbnZhciB0aW1lTXMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG59O1xuXG52YXIgd2l0aE1ldGEgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgdmFyIGVybFZhbCA9IHBhcnRpYWxBcnJheVswXTtcbiAgdmFyIGVybE1ldGEgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIGlmIChpc0VybEF0b20oZXJsVmFsKSkge1xuICAgIHZhciBlcmxWYWx1ZSA9IGVybFZhbC5lcmxWYWx1ZTtcbiAgICB2YXIgdHlwZSA9IGVybFZhbC50eXBlO1xuICAgIHJldHVybiB7XG4gICAgICBlcmxWYWx1ZTogZXJsVmFsdWUsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgbWV0YTogZXJsTWV0YVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgdmFyIGpzVmFsdWUgPSBlcmxWYWwuanNWYWx1ZTtcbiAgICB2YXIgdHlwZSA9IGVybFZhbC50eXBlO1xuICAgIHJldHVybiB7XG4gICAgICBqc1ZhbHVlOiBqc1ZhbHVlLFxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIG1ldGE6IGVybE1ldGFcbiAgICB9O1xuICB9XG59O1xuXG52YXIgd3JpdGUgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBjcmVhdGVFcmxTdHJpbmcoc2VyaWFsaXplKGNhcihlcmxBcmdzKSkpO1xufTtcblxudmFyIHByZWRpY2F0ZXMgPSBbXG4gIGlzRXJsQXRvbSxcbiAgaXNFcmxCb29sZWFuLFxuICBpc0VybENvcmVQdXJlRnVuY3Rpb24sXG4gIGlzRXJsRmFsc2UsXG4gIGlzRXJsTGlzdCxcbiAgaXNFcmxNYWNybyxcbiAgaXNFcmxOaWwsXG4gIGlzRXJsTnVtYmVyLFxuICBpc0VybFN5bWJvbCxcbiAgaXNFcmxTdHJpbmcsXG4gIGlzRXJsVXNlclB1cmVGdW5jdGlvbixcbiAgaXNFcmxUcnVlXG5dLm1hcChjcmVhdGVQcmVkaWNhdGUpO1xuXG52YXIgaXNBdG9tICAgID0gcHJlZGljYXRlc1swXTtcbnZhciBpc0Jvb2xlYW4gPSBwcmVkaWNhdGVzWzFdO1xudmFyIGlzQ29yZUZuICA9IHByZWRpY2F0ZXNbMl07XG52YXIgaXNGYWxzZSAgID0gcHJlZGljYXRlc1szXTtcbnZhciBpc0xpc3QgICAgPSBwcmVkaWNhdGVzWzRdO1xudmFyIGlzTWFjcm8gICA9IHByZWRpY2F0ZXNbNV07XG52YXIgaXNOaWwgICAgID0gcHJlZGljYXRlc1s2XTtcbnZhciBpc051bWJlciAgPSBwcmVkaWNhdGVzWzddO1xudmFyIGlzU3ltYm9sICA9IHByZWRpY2F0ZXNbOF07XG52YXIgaXNTdHJpbmcgID0gcHJlZGljYXRlc1s5XTtcbnZhciBpc1VzZXJGbiAgPSBwcmVkaWNhdGVzWzEwXTtcbnZhciBpc1RydWUgICAgPSBwcmVkaWNhdGVzWzExXTtcblxudmFyIGZ1bmN0aW9uc09uRXJsVmFsdWVzID0ge1xuICAnPSc6IF9hcmVFcXVhbCxcbiAgJ2FwcGVuZCc6IGFwcGVuZCxcbiAgJ2Fzc29jJzogYXNzb2MsXG4gICdhdG9tJzogYXRvbSxcbiAgJ2F0b20/JzogaXNBdG9tLFxuICAnYm9vbGVhbj8nOiBpc0Jvb2xlYW4sXG4gICdjYXInOiBfY2FyLFxuICAnY2RyJzogX2NkcixcbiAgJ2NvbnMnOiBjb25zLFxuICAnY29uY2F0JzogX2NvbmNhdCxcbiAgJ2NvcmUtZm4/JzogaXNDb3JlRm4sXG4gICdjb3VudCc6IGNvdW50LFxuICAnZGVyZWYnOiBkZXJlZixcbiAgJ2Ryb3AnOiBfZHJvcCxcbiAgJ2VtcHR5Pyc6IF9pc0VtcHR5LFxuICAnZmlyc3QnOiBfY2FyLFxuICAnZmFsc2U/JzogaXNGYWxzZSxcbiAgJ2Z1bmN0aW9uPyc6IGlzRnVuY3Rpb24sXG4gICdpZ25vcmUhJzogaWdub3JlLFxuICAnaWdub3JlSWZUcnVlJzogaWdub3JlSWZUcnVlLFxuICAnaWdub3JlVW5sZXNzVHJ1ZSc6IGlnbm9yZVVubGVzc1RydWUsXG4gICdsYXN0JzogX2xhc3QsXG4gICdsaXN0JzogbGlzdCxcbiAgJ2xpc3Q/JzogaXNMaXN0LFxuICAnbWFjcm8/JzogaXNNYWNybyxcbiAgJ21ldGEnOiBtZXRhLFxuICAnbmlsPyc6IGlzTmlsLFxuICAnbm90JzogX25vdCxcbiAgJ250aCc6IG50aCxcbiAgJ251bWJlcj8nOiBpc051bWJlcixcbiAgJ3BhcnNlJzogX2ludGVycHJldCxcbiAgJ3ByZXBlbmQnOiBwcmVwZW5kLFxuICAncHJldHR5LXN0cmluZyc6IHByZXR0eVN0cmluZyxcbiAgJ3Jlc3QnOiBfY2RyLFxuICAncmV2ZXJzZSc6IF9yZXZlcnNlLFxuICAnc3RyaW5nJzogc3RyaW5nLFxuICAnc3RyaW5nPyc6IGlzU3RyaW5nLFxuICAnc3ltYm9sJzogc3ltYm9sLFxuICAnc3ltYm9sPyc6IGlzU3ltYm9sLFxuICAndGFrZSc6IF90YWtlLFxuICAndGhyb3cnOiBfdGhyb3csXG4gICd0cnVlPyc6IGlzVHJ1ZSxcbiAgJ3R5cGVvZic6IHR5cGVPZixcbiAgJ3VzZXItZm4/JzogaXNVc2VyRm4sXG4gICdyZWFkJzogcmVhZCxcbiAgJ3Jlc2V0ISc6IHJlc2V0LFxuICAnc2V0ISc6IHNldCxcbiAgJ3NsdXJwJzogc2x1cnAsXG4gICd0aW1lLW1zJzogdGltZU1zLFxuICAnd2l0aC1tZXRhJzogd2l0aE1ldGEsXG4gICd3cml0ZSc6IHdyaXRlXG59O1xuXG5leHBvcnQgeyBnZXRFbnZpcm9ubWVudCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5cbnZhciBjcmVhdGVFcmxMaXN0ICAgPSByZXF1aXJlKCcuL3R5cGUtdXRpbGl0aWVzJykuY3JlYXRlRXJsTGlzdDtcbnZhciBjcmVhdGVFcmxTdHJpbmcgPSByZXF1aXJlKCcuL3R5cGUtdXRpbGl0aWVzJykuY3JlYXRlRXJsU3RyaW5nO1xudmFyIHNlcmlhbGl6ZSAgICAgICA9IHJlcXVpcmUoJy4vc2VyaWFsaXplJyk7XG52YXIgdG9BcnJheSAgICAgICAgID0gcmVxdWlyZSgnLi9saW5rZWQtbGlzdCcpLnRvQXJyYXk7XG5cbnZhciBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGdldEVudmlyb25tZW50ID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gIHZhciBkaXNwbGF5ID0gY29uZmlnLmRpc3BsYXk7XG4gIHZhciBlbnZpcm9ubWVudCA9IGNvbmZpZy5lbnZpcm9ubWVudDtcbiAgc2V0Q29yZUVmZmVjdGZ1bEZuc09uRXJsVmFsdWVzKGRpc3BsYXkpKGVudmlyb25tZW50LCBkaXNwbGF5RWZmZWN0c09uRXJsVmFsdWVzKTtcbiAgcmV0dXJuIGVudmlyb25tZW50O1xufTtcblxudmFyIGhhc1Byb2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJztcbn1cblxudmFyIGhhc1Byb2Nlc3NXZWJwYWNrU2hpbSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ocHJvY2Vzcy50aXRsZSA9PT0gJ2Jyb3dzZXInICYmIHByb2Nlc3MuYnJvd3Nlcik7XG59XG5cbnZhciBpc05vZGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGhhc1Byb2Nlc3MoKSAmJiAhaGFzUHJvY2Vzc1dlYnBhY2tTaGltKCk7XG59XG5cbnZhciBfcHJTdHIgPSBmdW5jdGlvbihlcmxBcmdzLCBzaG91bGRCZVJlYWRhYmxlKSB7XG4gIHJldHVybiAoKHRvQXJyYXkoZXJsQXJncykpLm1hcChmdW5jdGlvbihlcmxBcmcpIHtcbiAgICByZXR1cm4gc2VyaWFsaXplKGVybEFyZywgc2hvdWxkQmVSZWFkYWJsZSk7XG4gIH0pKS5qb2luKCcnKTtcbn07XG5cbnZhciBfcXVpdF8gPSBmdW5jdGlvbigpIHtcbiAgaWYgKGlzTm9kZSgpKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZXhpdCgwKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gX3ByU3RyKFxuICAgICAgY3JlYXRlRXJsTGlzdChcbiAgICAgICAgY3JlYXRlRXJsU3RyaW5nKFxuICAgICAgICAgIFwiXFxcIidFcmxrw7ZuaWcgTGlzcCBDb25zb2xlJyBpcyBub3QgcGVybWl0dGVkIHRvIGNsb3NlIHRoaXMgd2luZG93LlxcXCJcIikpLFxuICAgICAgICAgIGZhbHNlKTtcbiAgfVxufTtcblxudmFyIHNldENvcmVFZmZlY3RmdWxGbnNPbkVybFZhbHVlcyA9IGZ1bmN0aW9uKHJlcHJlc2VudCkge1xuICByZXR1cm4gZnVuY3Rpb24oZW52LCBmbnMpIHtcbiAgICB2YXIgX3Jlc3VsdHMgPSBbXTtcbiAgICBmb3IgKHZhciBmbk5hbWUgaW4gZm5zKSB7XG4gICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGZucywgZm5OYW1lKSkgY29udGludWU7XG4gICAgICB2YXIgZm4gPSBmbnNbZm5OYW1lXTtcbiAgICAgIF9yZXN1bHRzLnB1c2goZW52W2ZuTmFtZV0gPVxuICAgICAgICBjcmVhdGVFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24oZnVuY3Rpb24oZXJsQXJncykge1xuICAgICAgICAgIHJldHVybiByZXByZXNlbnQoZm4oZXJsQXJncykpO1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIHJldHVybiBfcmVzdWx0cztcbiAgfTtcbn07XG5cbnZhciBkaXNwbGF5RWZmZWN0c09uRXJsVmFsdWVzID0ge1xuICAncHJpbnQnOiBmdW5jdGlvbihlcmxBcmdzKSB7XG4gICAgcmV0dXJuIF9wclN0cihlcmxBcmdzLCBmYWxzZSk7XG4gIH0sXG4gICdwcmV0dHktcHJpbnQnOiBmdW5jdGlvbihlcmxBcmdzKSB7XG4gICAgcmV0dXJuIF9wclN0cihlcmxBcmdzLCB0cnVlKTtcbiAgfSxcbiAgJy1xdWl0LSc6IF9xdWl0Xyxcbn07XG5cbmV4cG9ydCB7IGdldEVudmlyb25tZW50IH07XG4iLCJpbXBvcnQgeyBjYXIgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybExpc3QgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN5bWJvbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXh0cmFjdEpzVmFsdWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGZyb21BcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgZnJvbUVybEluZGV4IH0gZnJvbSAnLi9pbmRleC11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBfcHJvY2VzcyB9IGZyb20gJy4vX3Byb2Nlc3MnO1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgdG9rZW5pemVBbmRQYXJzZSB9IGZyb20gJy4vdG9rZW5pemVBbmRQYXJzZSc7XG5pbXBvcnQgeyB0b1BhcnRpYWxBcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuXG52YXIgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbnZhciBnZXRFbnZpcm9ubWVudCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICB2YXIgZW52aXJvbm1lbnQgPSBjb25maWcuZW52aXJvbm1lbnQ7XG4gIHZhciBwYXJzZSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgICByZXR1cm4gdG9rZW5pemVBbmRQYXJzZShzdHJpcFF1b3RlcyhleHRyYWN0SnNWYWx1ZShjYXIoZXJsQXJncykpKSk7XG4gIH07XG4gIHZhciBmdW5jdGlvbnNPbkVybFZhbHVlcyA9IHsgcGFyc2U6IHBhcnNlIH07XG4gIHNldENvcmVGbnNPbkVybFZhbHVlcyhlbnZpcm9ubWVudCwgZnVuY3Rpb25zT25FcmxWYWx1ZXMpO1xuICByZXR1cm4gZW52aXJvbm1lbnQ7XG59O1xuXG52YXIgX3Byb2Nlc3NfID0gX3Byb2Nlc3MoZnVuY3Rpb24oZXJsVmFsKSB7XG4gIHJldHVybiBlcmxWYWw7XG59KTtcblxudmFyIHNldENvcmVGbnNPbkVybFZhbHVlcyA9IGZ1bmN0aW9uKGVudiwgZm5zKSB7XG4gIHZhciBfcmVzdWx0cyA9IFtdO1xuICBmb3IgKHZhciBmbk5hbWUgaW4gZm5zKSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChmbnMsIGZuTmFtZSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgZm4gPSBmbnNbZm5OYW1lXTtcbiAgICBfcmVzdWx0cy5wdXNoKGVudltmbk5hbWVdID0gY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbihmbikpO1xuICB9XG4gIHJldHVybiBfcmVzdWx0cztcbn07XG5cbnZhciBzdHJpcFF1b3RlcyA9IGZ1bmN0aW9uKGpzU3RyaW5nKSB7XG4gIHJldHVybiBqc1N0cmluZy5zbGljZSgxLCAtMSk7XG59O1xuXG5leHBvcnQgeyBnZXRFbnZpcm9ubWVudCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBleHRyYWN0SnNWYWx1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZnJvbUVybEluZGV4IH0gZnJvbSAnLi9pbmRleC11dGlsaXRpZXMnO1xuaW1wb3J0IHsgX3Byb2Nlc3MgfSBmcm9tICcuL19wcm9jZXNzJztcbmltcG9ydCB7IHRvUGFydGlhbEFycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5cbnZhciBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGdldEVudmlyb25tZW50ID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gIHZhciBlbnZpcm9ubWVudCA9IGNvbmZpZy5lbnZpcm9ubWVudDtcbiAgdmFyIGZ1bmN0aW9uc09uRXJsVmFsdWVzID0ge1xuICAgICdsb2FkJzogbG9hZCxcbiAgICAnbG9hZC13aXRoLWVudic6IGxvYWRXaXRoRW52LFxuICAgICdsb2FkLXdpdGgtYmFyZS1lbnYnOiBsb2FkV2l0aEJhcmVFbnZcbiAgfTtcbiAgc2V0Q29yZUZuc09uRXJsVmFsdWVzKGVudmlyb25tZW50LCBmdW5jdGlvbnNPbkVybFZhbHVlcyk7XG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn07XG5cbnZhciBnZXRfanNGaWxlTmFtZV9hbmRfbG9jYWxFbnYgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgdmFyIGVybEZpbGVOYW1lID0gcGFydGlhbEFycmF5WzBdO1xuICB2YXIgbG9jYWxFbnYgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIHZhciBqc0ZpbGVOYW1lID0gc3RyaXBRdW90ZXMoZXh0cmFjdEpzVmFsdWUoZXJsRmlsZU5hbWUpKTtcbiAgcmV0dXJuIFtqc0ZpbGVOYW1lLCBsb2NhbEVudl07XG59O1xuXG52YXIgaGFzUHJvY2VzcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnO1xufVxuXG52YXIgaGFzUHJvY2Vzc1dlYnBhY2tTaGltID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybihwcm9jZXNzLnRpdGxlID09PSAnYnJvd3NlcicgJiYgcHJvY2Vzcy5icm93c2VyKTtcbn1cblxudmFyIGlzTm9kZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gaGFzUHJvY2VzcygpICYmICFoYXNQcm9jZXNzV2VicGFja1NoaW0oKTtcbn1cblxudmFyIGxvYWQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGlmIChpc05vZGUoKSkge1xuICAgIHJldHVybiBfcHJvY2Vzc18oX3JlYWQoZXJsQXJncykpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbnZhciBsb2FkV2l0aEJhcmVFbnYgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGlmIChpc05vZGUoKSkge1xuICAgIHZhciB0ZW1wID0gZ2V0X2pzRmlsZU5hbWVfYW5kX2xvY2FsRW52KGVybEFyZ3MpO1xuICAgIHZhciBqc0ZpbGVOYW1lID0gdGVtcFswXTtcbiAgICB2YXIgbG9jYWxFbnYgPSB0ZW1wWzFdO1xuICAgIHJldHVybiBfcHJvY2Vzc0ZpbGVBbmRFbnYoXG4gICAgICByZWFkRmlsZShqc0ZpbGVOYW1lKSxcbiAgICAgIFtmcm9tRXJsSW5kZXgobG9jYWxFbnYpXSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxudmFyIGxvYWRXaXRoRW52ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBpZiAoaXNOb2RlKCkpIHtcbiAgICB2YXIgdGVtcCA9IGdldF9qc0ZpbGVOYW1lX2FuZF9sb2NhbEVudihlcmxBcmdzKTtcbiAgICB2YXIganNGaWxlTmFtZSA9IHRlbXBbMF07XG4gICAgdmFyIGxvY2FsRW52ID0gdGVtcFsxXTtcbiAgICByZXR1cm4gX3Byb2Nlc3NGaWxlQW5kRW52KFxuICAgICAgcmVhZEZpbGUoanNGaWxlTmFtZSksXG4gICAgICBbZnJvbUVybEluZGV4KGxvY2FsRW52KSwgZW52aXJvbm1lbnRdKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG52YXIgX3Byb2Nlc3NfID0gZnVuY3Rpb24oanNTdHJpbmcpIHtcbiAgcmV0dXJuIF9wcm9jZXNzKFtlbnZpcm9ubWVudF0pKGpzU3RyaW5nKTtcbn07XG5cbnZhciBfcHJvY2Vzc0ZpbGVBbmRFbnYgPSBmdW5jdGlvbihmaWxlLCBlbnZTdGFjaykge1xuICByZXR1cm4gX3Byb2Nlc3MoZW52U3RhY2spKGZpbGUpO1xufTtcblxudmFyIF9yZWFkID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIganNGaWxlTmFtZSA9IGdldF9qc0ZpbGVOYW1lX2FuZF9sb2NhbEVudihlcmxBcmdzKVswXTtcbiAgcmV0dXJuIHJlYWRGaWxlKGpzRmlsZU5hbWUpO1xufTtcblxudmFyIHJlYWRGaWxlID0gZnVuY3Rpb24oanNGaWxlTmFtZSkge1xuICAvL3JldHVybiByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYyhqc0ZpbGVOYW1lKS50b1N0cmluZygpO1xuICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciBzZXRDb3JlRm5zT25FcmxWYWx1ZXMgPSBmdW5jdGlvbihlbnYsIGZucykge1xuICB2YXIgX3Jlc3VsdHMgPSBbXTtcbiAgZm9yICh2YXIgZm5OYW1lIGluIGZucykge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoZm5zLCBmbk5hbWUpKSBjb250aW51ZTtcbiAgICB2YXIgZm4gPSBmbnNbZm5OYW1lXTtcbiAgICBfcmVzdWx0cy5wdXNoKGVudltmbk5hbWVdID0gY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbihmbikpO1xuICB9XG4gIHJldHVybiBfcmVzdWx0cztcbn07XG5cbnZhciBzdHJpcFF1b3RlcyA9IGZ1bmN0aW9uKGpzU3RyaW5nKSB7XG4gIHJldHVybiBqc1N0cmluZy5zbGljZSgxLCAtMSk7XG59O1xuXG5leHBvcnQgeyBnZXRFbnZpcm9ubWVudCB9O1xuIiwiaW1wb3J0IHsgYWRkRW52IH0gZnJvbSAnLi9lbnYtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNhciB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgY2F0Y2hTdGFyIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgY2RyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBjaXJjdW1wZW5kUXVvdGVzIH0gZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY29tbWVudFNpZ25hbCB9IGZyb20gJy4vY29tbWVudFNpZ25hbCc7XG5pbXBvcnQgeyBjcmVhdGVFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsS2V5d29yZCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTGlzdCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTWFjcm8gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybE51bWJlciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3RyaW5nIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxTeW1ib2wgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFVzZXJQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGRlZkJhbmcgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBfZG8gfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBlcmxOaWwgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IF9ldmFsIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgX2V2YWxXaXRoRW52IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgZXhwYW5kTWFjcm8gfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBleHRyYWN0SnNWYWx1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBmblN0YXIgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBmb3JFYWNoIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBmcm9tQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGZyb21FcmxJbmRleCB9IGZyb20gJy4vaW5kZXgtdXRpbGl0aWVzJztcbmltcG9ydCB7IGZyb21Kc09iamVjdHMgfSBmcm9tICcuL2luZGV4LXV0aWxpdGllcyc7XG5pbXBvcnQgeyBfZ2V0Q3VycmVudEVudiB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IF9nZXREZWZhdWx0RW52IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgaXNFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsQ29yZVB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxJZ25vcmUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsS2V5d29yZCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybE1hY3JvIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybFN5bWJvbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0pzU3RyaW5nIH0gZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNLZXl3b3JkIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbGV0U3RhciB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGxldHJlY1N0YXIgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBsb29rdXAgfSBmcm9tICcuL2Vudi11dGlsaXRpZXMnO1xuaW1wb3J0IHsgbWFjcm9TdGFyIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBuZXh0IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBxdWFzaXF1b3RlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBzcGxpY2VVbnF1b3RlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgdW5xdW90ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHJlY3Vyc2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHJlZHVjZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgcmVkdWNlQnkyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyByZXZlcnNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBzZXRNYWluRW52IH0gZnJvbSAnLi9lbnYtdXRpbGl0aWVzJztcbmltcG9ydCB7IHNwbGF0IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgdG9QYXJ0aWFsQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHRyeVN0YXIgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyB1bmRlZkJhbmcgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyB1bnNldE1haW5FbnYgfSBmcm9tICcuL2Vudi11dGlsaXRpZXMnO1xuXG52YXIgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbnZhciBjcmVhdGVGbiA9IGZ1bmN0aW9uKGVybExpc3QsIGVudnMpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybFVzZXJQdXJlRnVuY3Rpb24oe1xuICAgIGxvY2FsRW52czogZW52cy5zbGljZSgwKSxcbiAgICBlcmxFeHByZXNzaW9uOiBuZXh0KGVybExpc3QpLFxuICAgIGVybFBhcmFtZXRlcnM6IGNhcihlcmxMaXN0KVxuICB9KTtcbn07XG5cbnZhciBjcmVhdGVMb2NhbEVudiA9IGZ1bmN0aW9uKGVybFBhcmFtcywgZXJsQXJncykge1xuICB2YXIgZW52ID0ge307XG4gIHdoaWxlICghaXNFbXB0eShlcmxQYXJhbXMpKSB7XG4gICAgdmFyIGpzUGFyYW0gPSBleHRyYWN0SnNWYWx1ZShjYXIoZXJsUGFyYW1zKSk7XG4gICAgaWYgKGpzUGFyYW0gPT09IHNwbGF0KSB7XG4gICAgICBlbnZbZXh0cmFjdEpzVmFsdWUobmV4dChlcmxQYXJhbXMpKV0gPSBlcmxBcmdzO1xuICAgICAgcmV0dXJuIGVudjtcbiAgICB9IGVsc2Uge1xuICAgICAgZW52W2pzUGFyYW1dID0gY2FyKGVybEFyZ3MpO1xuICAgICAgZXJsUGFyYW1zID0gY2RyKGVybFBhcmFtcyk7XG4gICAgICBlcmxBcmdzID0gY2RyKGVybEFyZ3MpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZW52O1xufTtcblxudmFyIGNyZWF0ZU1hY3JvID0gZnVuY3Rpb24oZXJsTGlzdCwgZW52cykge1xuICByZXR1cm4gY3JlYXRlRXJsTWFjcm8oe1xuICAgIGxvY2FsRW52czogZW52cy5zbGljZSgwKSxcbiAgICBlcmxFeHByZXNzaW9uOiBuZXh0KGVybExpc3QpLFxuICAgIGVybFBhcmFtZXRlcnM6IGNhcihlcmxMaXN0KVxuICB9KTtcbn07XG5cbnZhciBkZWZpbmVOZXdWYWx1ZSA9IGZ1bmN0aW9uKGVybExpc3QsIGVudnMsIGFkZFJlc3VsdCkge1xuICB2YXIganNLZXkgPSBleHRyYWN0SnNWYWx1ZShjYXIoZXJsTGlzdCkpO1xuICB2YXIgZXJsVmFsdWUgPSBfZXZhbHVhdGUobmV4dChlcmxMaXN0KSwgZW52cywgYWRkUmVzdWx0KTtcbiAgcmV0dXJuIHNldE1haW5FbnYoZW52cywganNLZXksIGVybFZhbHVlKTtcbn07XG5cbnZhciBldmFsUXVhc2lxdW90ZWRFeHByID0gZnVuY3Rpb24oZXhwciwgZW52cywgYWRkUmVzdWx0KSB7XG4gIGlmICghaXNFcmxMaXN0KGV4cHIpKSB7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cbiAgdmFyIG1hbmFnZUl0ZW0gPSBmdW5jdGlvbihtZW1vLCBpdGVtKSB7XG4gICAgaWYgKGlzVW5xdW90ZWRFeHByKGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KF9ldmFsdWF0ZShuZXh0KGl0ZW0pLCBlbnZzLCBhZGRSZXN1bHQpLCBtZW1vKTtcbiAgICB9IGVsc2UgaWYgKGlzU3BsaWNlVW5xdW90ZWRFeHByKGl0ZW0pKSB7XG4gICAgICAgIHZhciBfbWFuYWdlSXRlbSA9IGZ1bmN0aW9uKF9tZW1vLCBfaXRlbSkge1xuICAgICAgICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KF9pdGVtLCBfbWVtbyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZWR1Y2UobWVtbywgX21hbmFnZUl0ZW0sIF9ldmFsdWF0ZShuZXh0KGl0ZW0pLCBlbnZzLCBhZGRSZXN1bHQpKTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsTGlzdChpdGVtKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRXJsTGlzdChldmFsUXVhc2lxdW90ZWRFeHByKGl0ZW0sIGVudnMsIGFkZFJlc3VsdCksIG1lbW8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KGl0ZW0sIG1lbW8pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHJldmVyc2UocmVkdWNlKGNyZWF0ZUVybExpc3QoKSwgbWFuYWdlSXRlbSwgZXhwcikpO1xufTtcblxudmFyIF9ldmFsdWF0ZSA9IGZ1bmN0aW9uKGVybEV4cHIsIGVudnMsIGFkZFJlc3VsdCkge1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIGlmIChpc0VybFN5bWJvbChlcmxFeHByKSkge1xuICAgICAgdmFyIGpzU3RyaW5nID0gZXh0cmFjdEpzVmFsdWUoZXJsRXhwcik7XG4gICAgICBpZiAoaXNLZXl3b3JkKGpzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRXJsS2V5d29yZChqc1N0cmluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9va3VwKGVudnMsIGpzU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzRXJsSW5kZXgoZXJsRXhwcikpIHtcbiAgICAgIHZhciBpbmRleCA9IGV4dHJhY3RKc1ZhbHVlKGVybEV4cHIpO1xuICAgICAgdmFyIG5ld0luZGV4ID0ge307XG4gICAgICBmb3IgKHZhciBrZXkgaW4gaW5kZXgpIHtcbiAgICAgICAgaWYgKCFfX2hhc1Byb3AuY2FsbChpbmRleCwga2V5KSkgY29udGludWU7XG4gICAgICAgIG5ld0luZGV4W2tleV0gPSBfZXZhbHVhdGUoaW5kZXhba2V5XSwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjcmVhdGVFcmxJbmRleChuZXdJbmRleCk7XG4gICAgfSBlbHNlIGlmICghKGlzRXJsTGlzdChlcmxFeHByKSkpIHtcbiAgICAgIHJldHVybiBlcmxFeHByO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcmxFeHByID0gZmlsdGVyKChmdW5jdGlvbih4KSB7XG4gICAgICAgIHJldHVybiAhKGlnbm9yYWJsZSh4LCBlbnZzLCBhZGRSZXN1bHQpKTtcbiAgICAgIH0pLCBlcmxFeHByKTtcbiAgICAgIHZhciBlcmxFeHByQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxFeHByKTtcbiAgICAgIHZhciBoZWFkID0gZXJsRXhwckFycmF5WzBdO1xuICAgICAgdmFyIGFyZzEgPSBlcmxFeHByQXJyYXlbMV07XG4gICAgICB2YXIgcmVtYWluaW5nQXJncyA9IGVybEV4cHJBcnJheVsyXTtcbiAgICAgIHZhciB0YWlsTGlzdCA9IGNkcihlcmxFeHByKTtcbiAgICAgIHN3aXRjaCAoZXh0cmFjdEpzVmFsdWUoaGVhZCkpIHtcbiAgICAgICAgY2FzZSBkZWZCYW5nOlxuICAgICAgICAgIHJldHVybiBkZWZpbmVOZXdWYWx1ZSh0YWlsTGlzdCwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgY2FzZSB1bmRlZkJhbmc6XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lVmFsdWUodGFpbExpc3QsIGVudnMpO1xuICAgICAgICBjYXNlIF9ldmFsOlxuICAgICAgICAgIGVybEV4cHIgPSBfZXZhbHVhdGUoYXJnMSwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBfZXZhbFdpdGhFbnY6XG4gICAgICAgICAgZW52cyA9IFtmcm9tRXJsSW5kZXgoX2V2YWx1YXRlKGFyZzEsIGVudnMsIGFkZFJlc3VsdCkpXTtcbiAgICAgICAgICBlcmxFeHByID0gX2V2YWx1YXRlKGNhcihyZW1haW5pbmdBcmdzKSwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsZXRTdGFyOlxuICAgICAgICAgIGVybEV4cHIgPSBjYXIocmVtYWluaW5nQXJncyk7XG4gICAgICAgICAgZW52cyA9IGFkZEVudihlbnZzLCByZWR1Y2VMZXQoZW52cywgYXJnMSwgYWRkUmVzdWx0KSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbGV0cmVjU3RhcjpcbiAgICAgICAgICBlcmxFeHByID0gY2FyKHJlbWFpbmluZ0FyZ3MpO1xuICAgICAgICAgIGVudnMgPSBhZGRFbnYoZW52cywgcmVkdWNlTGV0cmVjKGVudnMsIGFyZzEsIGFkZFJlc3VsdCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIF9kbzpcbiAgICAgICAgICByZXR1cm4gZm9yRWFjaChldmFsdWF0ZShlbnZzLCBhZGRSZXN1bHQpLCB0YWlsTGlzdCk7XG4gICAgICAgIGNhc2UgX2dldEN1cnJlbnRFbnY6XG4gICAgICAgICAgcmV0dXJuIGZyb21Kc09iamVjdHMuYXBwbHkobnVsbCwgZW52cy5yZXZlcnNlKCkpO1xuICAgICAgICBjYXNlIF9nZXREZWZhdWx0RW52OlxuICAgICAgICAgIHJldHVybiBmcm9tSnNPYmplY3RzKGVudnNbZW52cy5sZW5ndGggLSAxXSk7XG4gICAgICAgIGNhc2UgX2lmOlxuICAgICAgICAgIGlmIChleHRyYWN0SnNWYWx1ZShfZXZhbHVhdGUoYXJnMSwgZW52cywgYWRkUmVzdWx0KSkpIHtcbiAgICAgICAgICAgIGVybEV4cHIgPSBjYXIocmVtYWluaW5nQXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIG90aGVyd2lzZSA9IG5leHQocmVtYWluaW5nQXJncyk7XG4gICAgICAgICAgaWYgKGlzRW1wdHkob3RoZXJ3aXNlKSkge1xuICAgICAgICAgICAgZXJsRXhwciA9IGVybE5pbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJsRXhwciA9IG90aGVyd2lzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZm5TdGFyOlxuICAgICAgICAgIHJldHVybiBjcmVhdGVGbih0YWlsTGlzdCwgZW52cyk7XG4gICAgICAgIGNhc2UgbWFjcm9TdGFyOlxuICAgICAgICAgIHJldHVybiBjcmVhdGVNYWNybyh0YWlsTGlzdCwgZW52cyk7XG4gICAgICAgIGNhc2UgcXVvdGU6XG4gICAgICAgICAgcmV0dXJuIGNhcih0YWlsTGlzdCk7XG4gICAgICAgIGNhc2UgcXVhc2lxdW90ZTpcbiAgICAgICAgICByZXR1cm4gZXZhbFF1YXNpcXVvdGVkRXhwcihjYXIodGFpbExpc3QpLCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICBjYXNlIGV4cGFuZE1hY3JvOlxuICAgICAgICAgIHJldHVybiBfZXhwYW5kTWFjcm8oY2FyKGFyZzEpLCBjZHIoYXJnMSksIGVudnMsIGFkZFJlc3VsdCk7XG4gICAgICAgIGNhc2UgdHJ5U3RhcjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIF9ldmFsdWF0ZShhcmcxLCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICAgIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgICAgICAgICAgdmFyIGV4ID0gX2Vycm9yO1xuICAgICAgICAgICAgaWYgKGlzRW1wdHkocmVtYWluaW5nQXJncykpIHtcbiAgICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgcmVtYWluaW5nQXJnc0FycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMywgY2FyKHJlbWFpbmluZ0FyZ3MpKTtcbiAgICAgICAgICAgICAgdmFyIF9jYXRjaCA9IHJlbWFpbmluZ0FyZ3NBcnJheVswXTtcbiAgICAgICAgICAgICAgdmFyIF9leCA9IHJlbWFpbmluZ0FyZ3NBcnJheVsxXTtcbiAgICAgICAgICAgICAgdmFyIGNhdGNoRXhwciA9IHJlbWFpbmluZ0FyZ3NBcnJheVsyXTtcbiAgICAgICAgICAgICAgaWYgKChleHRyYWN0SnNWYWx1ZShfY2F0Y2gpKSAhPT0gXCJjYXRjaCpcIikge1xuICAgICAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChleCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXggPSBjcmVhdGVFcmxTdHJpbmcoY2lyY3VtcGVuZFF1b3RlcyhleC5tZXNzYWdlKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIG5ld0VudiA9IHt9O1xuICAgICAgICAgICAgICBuZXdFbnZbZXh0cmFjdEpzVmFsdWUoX2V4KV0gPSBleDtcbiAgICAgICAgICAgICAgcmV0dXJuIF9ldmFsdWF0ZShjYXRjaEV4cHIsIGFkZEVudihlbnZzLCBuZXdFbnYpLCBhZGRSZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB2YXIgZXJsU3ltYm9sID0gaGVhZDtcbiAgICAgICAgICBlcmxFeHByID0gdGFpbExpc3Q7XG4gICAgICAgICAgdmFyIGVybEludm9rYWJsZSA9IF9ldmFsdWF0ZShlcmxTeW1ib2wsIGVudnMsIGFkZFJlc3VsdCk7XG4gICAgICAgICAgaWYgKGlzRXJsS2V5d29yZChlcmxJbnZva2FibGUpKSB7XG4gICAgICAgICAgICBlcmxFeHByID0gY3JlYXRlRXJsTGlzdChlcmxJbnZva2FibGUsIHRhaWxMaXN0KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzRXJsTWFjcm8oZXJsSW52b2thYmxlKSkge1xuICAgICAgICAgICAgZXJsRXhwciA9IF9leHBhbmRNYWNybyhoZWFkLCB0YWlsTGlzdCwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzRXJsQ29yZVB1cmVGdW5jdGlvbihlcmxJbnZva2FibGUpKSB7XG4gICAgICAgICAgICB2YXIgZm4gPSBleHRyYWN0SnNWYWx1ZShlcmxJbnZva2FibGUpO1xuICAgICAgICAgICAgdmFyIGVybEFyZ3MgPSBtYXAoZXZhbHVhdGUoZW52cywgYWRkUmVzdWx0KSwgZXJsRXhwcik7XG4gICAgICAgICAgICByZXR1cm4gZm4oZXJsQXJncyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0VybENvcmVFZmZlY3RmdWxGdW5jdGlvbihlcmxJbnZva2FibGUpKSB7XG4gICAgICAgICAgICB2YXIgZm4gPSBleHRyYWN0SnNWYWx1ZShlcmxJbnZva2FibGUpO1xuICAgICAgICAgICAgdmFyIGVybEFyZ3MgPSBtYXAoZXZhbHVhdGUoZW52cywgYWRkUmVzdWx0KSwgZXJsRXhwcik7XG4gICAgICAgICAgICBhZGRSZXN1bHQoZm4oZXJsQXJncykpO1xuICAgICAgICAgICAgcmV0dXJuIGVybE5pbDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzRXJsVXNlclB1cmVGdW5jdGlvbihlcmxJbnZva2FibGUpKSB7XG4gICAgICAgICAgICB2YXIganNWYWx1ZSA9IGV4dHJhY3RKc1ZhbHVlKGVybEludm9rYWJsZSk7XG4gICAgICAgICAgICB2YXIgbG9jYWxFbnZzID0ganNWYWx1ZS5sb2NhbEVudnM7XG4gICAgICAgICAgICB2YXIgZXJsRXhwcmVzc2lvbiA9IGpzVmFsdWUuZXJsRXhwcmVzc2lvbjtcbiAgICAgICAgICAgIHZhciBlcmxQYXJhbWV0ZXJzID0ganNWYWx1ZS5lcmxQYXJhbWV0ZXJzO1xuICAgICAgICAgICAgdmFyIGVybEFyZ3MgPSBtYXAoZXZhbHVhdGUoZW52cywgYWRkUmVzdWx0KSwgZXJsRXhwcik7XG4gICAgICAgICAgICBlcmxFeHByID0gZXJsRXhwcmVzc2lvbjtcbiAgICAgICAgICAgIHZhciBuZXdFbnYgPSBjcmVhdGVMb2NhbEVudihlcmxQYXJhbWV0ZXJzLCBlcmxBcmdzKTtcbiAgICAgICAgICAgIGVudnMgPSBhZGRFbnYobG9jYWxFbnZzLCBuZXdFbnYpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBcIlwiXG4gICAgICAgICAgICAgICsgKGV4dHJhY3RKc1ZhbHVlKGVybFN5bWJvbCkpXG4gICAgICAgICAgICAgICsgXCIgZG9lcyBub3QgZXZhbHVhdGUgdG8gYSBmdW5jdGlvbiwgbWFjcm8sIG9yIGtleXdvcmQuXCI7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudmFyIGV2YWx1YXRlID0gZnVuY3Rpb24oZW52cywgYWRkUmVzdWx0KSB7XG4gIHJldHVybiBmdW5jdGlvbihlcmxFeHByKSB7XG4gICAgaWYgKGVybEV4cHIgPT09IGNvbW1lbnRTaWduYWwpIHtcbiAgICAgIHJldHVybiBjb21tZW50U2lnbmFsO1xuICAgIH1cbiAgICByZXR1cm4gX2V2YWx1YXRlKGVybEV4cHIsIGVudnMsIGFkZFJlc3VsdCk7XG4gIH07XG59O1xuXG52YXIgX2V4cGFuZE1hY3JvID0gZnVuY3Rpb24oZXJsTWFjcm9TeW1ib2wsIGVybEFyZ3MsIGVudnMsIGFkZFJlc3VsdCkge1xuICB2YXIgZXJsTWFjcm8gPSBfZXZhbHVhdGUoZXJsTWFjcm9TeW1ib2wsIGVudnMsIGFkZFJlc3VsdCk7XG4gIHZhciBqc1ZhbHVlID0gZXh0cmFjdEpzVmFsdWUoZXJsTWFjcm8pO1xuICB2YXIgbG9jYWxFbnZzID0ganNWYWx1ZS5sb2NhbEVudnM7XG4gIHZhciBlcmxFeHByZXNzaW9uID0ganNWYWx1ZS5lcmxFeHByZXNzaW9uO1xuICB2YXIgZXJsUGFyYW1ldGVycyA9IGpzVmFsdWUuZXJsUGFyYW1ldGVycztcbiAgdmFyIG5ld0VudiA9IGNyZWF0ZUxvY2FsRW52KGVybFBhcmFtZXRlcnMsIGVybEFyZ3MpO1xuICB2YXIgbmV3RW52U3RhY2sgPSBhZGRFbnYobG9jYWxFbnZzLCBuZXdFbnYpO1xuICByZXR1cm4gX2V2YWx1YXRlKGVybEV4cHJlc3Npb24sIG5ld0VudlN0YWNrLCBhZGRSZXN1bHQpO1xufTtcblxudmFyIGlnbm9yYWJsZSA9IGZ1bmN0aW9uKGVybFZhbCwgZW52cywgYWRkUmVzdWx0KSB7XG4gIGlmIChpc0VybElnbm9yZShlcmxWYWwpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKCFpc0VybExpc3QoZXJsVmFsKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgc3ltYm9sID0gY2FyKGVybFZhbCk7XG4gIGlmICghaXNFcmxTeW1ib2woc3ltYm9sKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIganNTdHJpbmcgPSBleHRyYWN0SnNWYWx1ZShzeW1ib2wpO1xuICBpZiAoanNTdHJpbmcgPT09ICdpZ25vcmUnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGpzU3RyaW5nID09PSAnaWdub3JlSWZUcnVlJykge1xuICAgIHJldHVybiBleHRyYWN0SnNWYWx1ZShfZXZhbHVhdGUobmV4dChlcmxWYWwpLCBlbnZzLCBhZGRSZXN1bHQpKTtcbiAgfVxuICBpZiAoanNTdHJpbmcgPT09ICdpZ25vcmVVbmxlc3NUcnVlJykge1xuICAgIHJldHVybiAhZXh0cmFjdEpzVmFsdWUoX2V2YWx1YXRlKG5leHQoZXJsVmFsKSwgZW52cywgYWRkUmVzdWx0KSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIHJlZHVjZUxldCA9IGZ1bmN0aW9uKGVudnMsIGxpc3QsIGFkZFJlc3VsdCkge1xuICB2YXIgbmV3RW52ID0ge307XG4gIHZhciBfZW52cyA9IGFkZEVudihlbnZzLCBuZXdFbnYpO1xuICB3aGlsZSAoIWlzRW1wdHkobGlzdCkpIHtcbiAgICB2YXIganNLZXkgPSBleHRyYWN0SnNWYWx1ZShsaXN0LnZhbHVlKTtcbiAgICBsaXN0ID0gcmVjdXJzZShsaXN0KTtcbiAgICB2YXIgZW52VmFsdWUgPSBfZXZhbHVhdGUobGlzdC52YWx1ZSwgX2VudnMsIGFkZFJlc3VsdCk7XG4gICAgbmV3RW52W2pzS2V5XSA9IGVudlZhbHVlO1xuICAgIGxpc3QgPSByZWN1cnNlKGxpc3QpO1xuICB9XG4gIHJldHVybiBuZXdFbnY7XG59O1xuXG52YXIgcmVkdWNlTGV0cmVjID0gZnVuY3Rpb24oZW52cywgbGlzdCwgYWRkUmVzdWx0KSB7XG4gIHZhciBuZXdFbnYgPSB7fTtcbiAgdmFyIF9lbnZzID0gYWRkRW52KGVudnMsIG5ld0Vudik7XG4gIHdoaWxlICghaXNFbXB0eShsaXN0KSkge1xuICAgIHZhciBqc0tleSA9IGV4dHJhY3RKc1ZhbHVlKGxpc3QudmFsdWUpO1xuICAgIGxpc3QgPSByZWN1cnNlKGxpc3QpO1xuICAgIHZhciBfZXJsRXhwciA9IGZyb21BcnJheShcbiAgICAgIFsgIGNyZWF0ZUVybFN5bWJvbChcImZpeCpcIiksXG4gICAgICAgICBmcm9tQXJyYXkoW2NyZWF0ZUVybFN5bWJvbChcImZuKlwiKSxcbiAgICAgICAgIGZyb21BcnJheShbanNLZXldKSxcbiAgICAgICAgIGxpc3QudmFsdWVdKVxuICAgICAgXSk7XG4gICAgdmFyIGVudlZhbHVlID0gX2V2YWx1YXRlKF9lcmxFeHByLCBfZW52cywgYWRkUmVzdWx0KTtcbiAgICBuZXdFbnZbanNLZXldID0gZW52VmFsdWU7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gIH1cbiAgcmV0dXJuIG5ld0Vudjtcbn07XG5cbnZhciBpc1NwbGljZVVucXVvdGUgPSBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICByZXR1cm4gKGV4dHJhY3RKc1ZhbHVlKGVybFZhbHVlKSkgPT09IHNwbGljZVVucXVvdGU7XG59O1xuXG52YXIgaXNTcGxpY2VVbnF1b3RlZEV4cHIgPSBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICByZXR1cm4gaXNFcmxMaXN0KGVybFZhbHVlKSAmJiBpc1NwbGljZVVucXVvdGUoY2FyKGVybFZhbHVlKSk7XG59O1xuXG52YXIgdW5kZWZpbmVWYWx1ZSA9IGZ1bmN0aW9uKGVybExpc3QsIGVudnMpIHtcbiAgdmFyIGpzS2V5ID0gZXh0cmFjdEpzVmFsdWUoY2FyKGVybExpc3QpKTtcbiAgcmV0dXJuIHVuc2V0TWFpbkVudihlbnZzLCBqc0tleSk7XG59O1xuXG52YXIgaXNVbnF1b3RlID0gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgcmV0dXJuIGV4dHJhY3RKc1ZhbHVlKGVybFZhbHVlKSA9PT0gdW5xdW90ZTtcbn07XG5cbnZhciBpc1VucXVvdGVkRXhwciA9IGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gIHJldHVybiBpc0VybExpc3QoZXJsVmFsdWUpICYmIGlzVW5xdW90ZShjYXIoZXJsVmFsdWUpKTtcbn07XG5cbmV4cG9ydCB7IGV2YWx1YXRlIH07XG4iLCJpbXBvcnQgeyBnZXRFbnZpcm9ubWVudCBhcyBzZXRFbnYwIH0gZnJvbSAnLi9lbnYwJztcbmltcG9ydCB7IGdldEVudmlyb25tZW50IGFzIHNldEVudjEgfSBmcm9tICcuL2VudjEnO1xuaW1wb3J0IHsgZ2V0RW52aXJvbm1lbnQgYXMgc2V0RW52MiB9IGZyb20gJy4vZW52Mic7XG5pbXBvcnQgeyBnZXRFbnZpcm9ubWVudCBhcyBzZXRFbnYzIH0gZnJvbSAnLi9lbnYzJztcbmltcG9ydCB7IGdldEVudmlyb25tZW50IGFzIHNldEVudjQgfSBmcm9tICcuL2VudjQnO1xuXG52YXIgZ2V0TGlzcEVudmlyb25tZW50ID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gIHZhciBkaXNwbGF5ID0gY29uZmlnLmRpc3BsYXk7XG4gIHZhciBlbnZpcm9ubWVudCA9IHt9O1xuICBjb25maWcgPSB7XG4gICAgZGlzcGxheTogZGlzcGxheSxcbiAgICBlbnZpcm9ubWVudDogZW52aXJvbm1lbnRcbiAgfTtcbiAgc2V0RW52MChjb25maWcpO1xuICBzZXRFbnYxKGNvbmZpZyk7XG4gIHNldEVudjIoY29uZmlnKTtcbiAgc2V0RW52Myhjb25maWcpO1xuICBzZXRFbnY0KGNvbmZpZyk7XG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn07XG5cbmV4cG9ydCB7IGdldExpc3BFbnZpcm9ubWVudCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzSnNTdHJpbmcgfSBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5cbnZhciBfX3NsaWNlICAgPSBbXS5zbGljZTtcbnZhciBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGZyb21FcmxJbmRleCA9IGZ1bmN0aW9uKGVybEluZGV4KSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgdmFyIGpzVmFsdWUgPSBlcmxJbmRleC5qc1ZhbHVlO1xuICBmb3IgKHZhciBrZXkgaW4ganNWYWx1ZSkge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoanNWYWx1ZSwga2V5KSkgY29udGludWU7XG4gICAgdmFyIHZhbHVlID0ganNWYWx1ZVtrZXldO1xuICAgIGlmIChpc0pzU3RyaW5nKGtleSkpIHtcbiAgICAgIHZhciBuZXdLZXkgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHN3aXRjaCAoa2V5WzBdKSB7XG4gICAgICAgICAgY2FzZSAnOic6XG4gICAgICAgICAgICByZXR1cm4ga2V5LnNsaWNlKDEpO1xuICAgICAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgICAgIHJldHVybiBrZXkuc2xpY2UoMSwgLTEpO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICB9KSgpO1xuICAgICAgcmVzdWx0W25ld0tleV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBmcm9tSnNPYmplY3RzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBqc09iamVjdHMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICB2YXIgY29weSA9IHt9O1xuICB2YXIgbGVuID0ganNPYmplY3RzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7ICBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIganNPYmplY3QgPSBqc09iamVjdHNbaV07XG4gICAgZm9yICh2YXIga2V5IGluIGpzT2JqZWN0KSB7XG4gICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGpzT2JqZWN0LCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHZhciB2YWwgPSBqc09iamVjdFtrZXldO1xuICAgICAgaWYgKGlzSnNTdHJpbmcoa2V5KSkge1xuICAgICAgICBjb3B5Wyc6JyArIGtleV0gPSB2YWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3B5W2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjcmVhdGVFcmxJbmRleChjb3B5KTtcbn07XG5cbmV4cG9ydCB7XG4gIGZyb21Kc09iamVjdHMsXG4gIGZyb21FcmxJbmRleFxufTtcbiIsImltcG9ydCB7IGNpcmN1bXBlbmRRdW90ZXMgfSAgIGZyb20gJy4vanMtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN0cmluZyB9ICAgIGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZnJvbUFycmF5IH0gICAgICAgICAgZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBnZXRMaXNwRW52aXJvbm1lbnQgfSBmcm9tICcuL2dldExpc3BFbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBfcHJvY2VzcyB9ICAgICAgICAgICBmcm9tICcuL19wcm9jZXNzJztcbmltcG9ydCB7IHNlcmlhbGl6ZSB9ICAgICAgICAgIGZyb20gJy4vc2VyaWFsaXplJztcbmltcG9ydCBzdGFuZGFyZEZuc0FuZE1hY3JvcyAgIGZyb20gJy4vc3RhbmRhcmQtZm5zLWFuZC1tYWNyb3MubGlzcCc7XG5pbXBvcnQgeyB0b2tlbml6ZUFuZFBhcnNlIH0gICBmcm9tICcuL3Rva2VuaXplQW5kUGFyc2UnO1xuXG52YXIgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbnZhciBfY3JlYXRlRXJsU3RyaW5nID0gZnVuY3Rpb24oanNTdHJpbmcpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhjaXJjdW1wZW5kUXVvdGVzKGpzU3RyaW5nKSk7XG59O1xuXG52YXIgZW5jYXBzdWxhdGUgPSBmdW5jdGlvbih0eXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBlZmZlY3Q6IHtcbiAgICAgICAgdHlwZTogdHlwZVxuICAgICAgfSxcbiAgICAgIHZhbHVlOiBlcmxWYWx1ZVxuICAgIH07XG4gIH07XG59O1xuXG52YXIgZXJyb3IgPSBmdW5jdGlvbihlcnJvck1lc3NhZ2UpIHtcbiAgcmV0dXJuIFtlbmNhcHN1bGF0ZSgnZXJyb3InKShcInJlcGwgZXJyb3I6IChcIiArIGVycm9yTWVzc2FnZSArIFwiKVwiKV07XG59O1xuXG52YXIgZmxhdHRlbklmTmVjZXNzYXJ5ID0gZnVuY3Rpb24oZWZmZWN0cykge1xuICB2YXIgdmFsdWU7XG4gIHZhciByZXN1bHQgPSBlZmZlY3RzO1xuICB3aGlsZSAocmVzdWx0Lmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KHZhbHVlID0gcmVzdWx0WzBdLnZhbHVlKSkge1xuICAgIHJlc3VsdCA9IGZsYXR0ZW5JZk5lY2Vzc2FyeSh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBfaW50ZXJwcmV0ID0gZnVuY3Rpb24oZW52cywganNTdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gX3NlcmlhbGl6ZShcbiAgICAgIGZsYXR0ZW5JZk5lY2Vzc2FyeShcbiAgICAgICAgX3Byb2Nlc3ModG9rZW5pemVBbmRQYXJzZSkoZW52cykoanNTdHJpbmcpKSk7XG4gIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgIHJldHVybiBlcnJvcihfZXJyb3IpO1xuICB9XG59O1xuXG52YXIgaW50ZXJwcmV0ID0gZnVuY3Rpb24oanNTdHJpbmcsIHVzZXJKc0FycmF5KSB7XG4gIGlmICh1c2VySnNBcnJheSAhPSBudWxsKSB7XG4gICAgdmFyIHVzZXJFbnYgPSB7XG4gICAgICAnKkFSR1YqJzogZnJvbUFycmF5KHVzZXJKc0FycmF5Lm1hcChfY3JlYXRlRXJsU3RyaW5nKSlcbiAgICB9O1xuICAgIHJldHVybiBfaW50ZXJwcmV0KFt1c2VyRW52LCBlbnZpcm9ubWVudF0sIGpzU3RyaW5nKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gX2ludGVycHJldChbZW52aXJvbm1lbnRdLCBqc1N0cmluZyk7XG4gIH1cbn07XG5cbnZhciBfc2VyaWFsaXplID0gZnVuY3Rpb24ocmVzdWx0cykge1xuICByZXR1cm4gcmVzdWx0cy5tYXAoZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgdmFyIF9yZXN1bHQgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkgaW4gcmVzdWx0KSB7XG4gICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKHJlc3VsdCwga2V5KSkgY29udGludWU7XG4gICAgICB2YXIgdmFsdWUgPSByZXN1bHRba2V5XTtcbiAgICAgIGlmIChrZXkgPT09ICdlZmZlY3QnKSB7XG4gICAgICAgIF9yZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3Jlc3VsdFtrZXldID0gc2VyaWFsaXplKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF9yZXN1bHQ7XG4gIH0pO1xufTtcblxudmFyIGVudmlyb25tZW50ID0gZ2V0TGlzcEVudmlyb25tZW50KHtcbiAgZGlzcGxheTogZW5jYXBzdWxhdGUoJ2Rpc3BsYXknKVxufSk7XG5cbmludGVycHJldChzdGFuZGFyZEZuc0FuZE1hY3Jvcyk7XG5cbmV4cG9ydCB7IGludGVycHJldCB9O1xuIiwidmFyIGNpcmN1bXBlbmRRdW90ZXMgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4gJ1wiJyArIGpzU3RyaW5nICsgJ1wiJztcbn07XG5cbnZhciBpc0pzTmFOID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiBpc0pzTnVtYmVyKHZhbCkgJiYgdmFsICE9PSB2YWw7XG59O1xuXG52YXIgaXNKc051bWJlciA9IGZ1bmN0aW9uKHZhbCkge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBOdW1iZXJdJztcbn07XG5cbnZhciBpc0pzU3RyaW5nID0gZnVuY3Rpb24oanNWYWwpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChqc1ZhbCkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufTtcblxuZXhwb3J0IHtcbiAgY2lyY3VtcGVuZFF1b3RlcyxcbiAgaXNKc05hTixcbiAgaXNKc051bWJlcixcbiAgaXNKc1N0cmluZ1xufTtcbiIsInZhciBkZXJlZiAgICAgICAgICAgICAgICAgPSAnZGVyZWYnO1xudmFyIGRlcmVmR2x5cGggICAgICAgICAgICA9ICdAJztcbnZhciBjYXRjaFN0YXIgICAgICAgICAgICAgPSAnY2F0Y2gqJztcbnZhciBkZWZCYW5nICAgICAgICAgICAgICAgPSAnZGVmISc7XG52YXIgX2RvICAgICAgICAgICAgICAgICAgID0gJ2RvJztcbnZhciBfZXZhbCAgICAgICAgICAgICAgICAgPSAnZXZhbCc7XG52YXIgX2V2YWxXaXRoRW52ICAgICAgICAgID0gJ2V2YWwtd2l0aC1lbnYnO1xudmFyIGV4cGFuZE1hY3JvICAgICAgICAgICA9ICdleHBhbmQtbWFjcm8nO1xudmFyIF9mYWxzZSAgICAgICAgICAgICAgICA9ICdmYWxzZSc7XG52YXIgZm5TdGFyICAgICAgICAgICAgICAgID0gJ2ZuKic7XG52YXIgX2dldEN1cnJlbnRFbnYgICAgICAgID0gJy1nZXQtY3VycmVudC1lbnYtJztcbnZhciBfZ2V0RGVmYXVsdEVudiAgICAgICAgPSAnLWdldC1kZWZhdWx0LWVudi0nO1xudmFyIF9pZiAgICAgICAgICAgICAgICAgICA9ICdpZic7XG52YXIgaWdub3JlQmFuZyAgICAgICAgICAgID0gJ2lnbm9yZSEnO1xudmFyIGlnbm9yZUJhbmdHbHlwaCAgICAgICA9ICcjISc7XG52YXIgaWdub3JlSWZUcnVlICAgICAgICAgID0gJ2lnbm9yZUlmVHJ1ZSc7XG52YXIgaWdub3JlSWZUcnVlR2x5cGggICAgID0gJyMtJztcbnZhciBpZ25vcmVVbmxlc3NUcnVlICAgICAgPSAnaWdub3JlVW5sZXNzVHJ1ZSc7XG52YXIgaWdub3JlVW5sZXNzVHJ1ZUdseXBoID0gJyMrJztcbnZhciBpZ25vcmUgICAgICAgICAgICAgICAgPSAnaWdub3JlJztcbnZhciBpbmRleEVuZCAgICAgICAgICAgICAgPSAnfSc7XG52YXIgaW5kZXhTdGFydCAgICAgICAgICAgID0gJ3snO1xudmFyIGxldFN0YXIgICAgICAgICAgICAgICA9ICdsZXQqJztcbnZhciBsZXRyZWNTdGFyICAgICAgICAgICAgPSAnbGV0cmVjKic7XG52YXIgbGlzdEVuZCAgICAgICAgICAgICAgID0gJyknO1xudmFyIGxpc3RTdGFydCAgICAgICAgICAgICA9ICcoJztcbnZhciBtYWNyb1N0YXIgICAgICAgICAgICAgPSAnbWFjcm8qJztcbnZhciBuaWwgICAgICAgICAgICAgICAgICAgPSAnbmlsJztcbnZhciBfcHJvY2VzcyAgICAgICAgICAgICAgPSAnLXByb2Nlc3MtJztcbnZhciBxdWFzaXF1b3RlICAgICAgICAgICAgPSAncXVhc2lxdW90ZSc7XG52YXIgcXVhc2lxdW90ZUdseXBoICAgICAgID0gJ2AnO1xudmFyIHF1b3RlICAgICAgICAgICAgICAgICA9ICdxdW90ZSc7XG52YXIgcXVvdGVHbHlwaCAgICAgICAgICAgID0gJ1xcJyc7XG52YXIgc3BsYXQgICAgICAgICAgICAgICAgID0gJyYnO1xudmFyIHNwbGljZVVucXVvdGUgICAgICAgICA9ICdzcGxpY2UtdW5xdW90ZSc7XG52YXIgc3BsaWNlVW5xdW90ZUdseXBoICAgID0gJ35AJztcbnZhciBfdHJ1ZSAgICAgICAgICAgICAgICAgPSAndHJ1ZSc7XG52YXIgdHJ5U3RhciAgICAgICAgICAgICAgID0gJ3RyeSonO1xudmFyIHVuZGVmQmFuZyAgICAgICAgICAgICA9ICd1bmRlZiEnO1xudmFyIHVucXVvdGUgICAgICAgICAgICAgICA9ICd1bnF1b3RlJztcbnZhciB1bnF1b3RlR2x5cGggICAgICAgICAgPSAnfidcblxudmFyIGtleVRva2VucyA9IFtcbiAgZGVyZWYsXG4gIGRlcmVmR2x5cGgsXG4gIGNhdGNoU3RhcixcbiAgZGVmQmFuZyxcbiAgX2RvLFxuICBfZXZhbCxcbiAgX2V2YWxXaXRoRW52LFxuICBleHBhbmRNYWNybyxcbiAgX2ZhbHNlLFxuICBmblN0YXIsXG4gIF9nZXRDdXJyZW50RW52LFxuICBfZ2V0RGVmYXVsdEVudixcbiAgX2lmLFxuICBpZ25vcmVCYW5nLFxuICBpZ25vcmVCYW5nR2x5cGgsXG4gIGlnbm9yZUlmVHJ1ZSxcbiAgaWdub3JlSWZUcnVlR2x5cGgsXG4gIGlnbm9yZVVubGVzc1RydWUsXG4gIGlnbm9yZVVubGVzc1RydWVHbHlwaCxcbiAgaWdub3JlLFxuICBpbmRleEVuZCxcbiAgaW5kZXhTdGFydCxcbiAgbGV0U3RhcixcbiAgbGV0cmVjU3RhcixcbiAgbGlzdEVuZCxcbiAgbGlzdFN0YXJ0LFxuICBtYWNyb1N0YXIsXG4gIG5pbCxcbiAgX3Byb2Nlc3MsXG4gIHF1YXNpcXVvdGUsXG4gIHF1YXNpcXVvdGVHbHlwaCxcbiAgcXVvdGUsXG4gIHF1b3RlR2x5cGgsXG4gIHNwbGF0LFxuICBzcGxpY2VVbnF1b3RlLFxuICBzcGxpY2VVbnF1b3RlR2x5cGgsXG4gIF90cnVlLFxuICB0cnlTdGFyLFxuICB1bmRlZkJhbmcsXG4gIHVucXVvdGUsXG4gIHVucXVvdGVHbHlwaFxuXTtcblxudmFyIGtleXdvcmRzID0gW1xuICBjYXRjaFN0YXIsXG4gIGRlZkJhbmcsXG4gIF9kbyxcbiAgX2V2YWwsXG4gIF9ldmFsV2l0aEVudixcbiAgZXhwYW5kTWFjcm8sXG4gIF9mYWxzZSxcbiAgZm5TdGFyLFxuICBfZ2V0Q3VycmVudEVudixcbiAgX2dldERlZmF1bHRFbnYsXG4gIF9pZixcbiAgaWdub3JlLFxuICBsZXRTdGFyLFxuICBsZXRyZWNTdGFyLFxuICBtYWNyb1N0YXIsXG4gIG5pbCxcbiAgX3Byb2Nlc3MsXG4gIHF1YXNpcXVvdGUsXG4gIHF1b3RlLFxuICBzcGxpY2VVbnF1b3RlLFxuICBfdHJ1ZSxcbiAgdHJ5U3RhcixcbiAgdW5kZWZCYW5nLFxuICB1bnF1b3RlXG5dO1xuXG52YXIgbWFjcm9Ub2tlbnMgPSBbcXVhc2lxdW90ZSwgcXVvdGUsIHNwbGljZVVucXVvdGUsIHVucXVvdGVdO1xuXG52YXIgZ2x5cGhUb2tlbnMgPSBbXG4gIGRlcmVmR2x5cGgsXG4gIGlnbm9yZUJhbmdHbHlwaCxcbiAgcXVhc2lxdW90ZUdseXBoLFxuICBxdW90ZUdseXBoLFxuICBzcGxpY2VVbnF1b3RlR2x5cGgsXG4gIHVucXVvdGVHbHlwaFxuXTtcblxudmFyIGJpbmFyeUdseXBoVG9rZW5zID0gW2lnbm9yZUlmVHJ1ZUdseXBoLCBpZ25vcmVVbmxlc3NUcnVlR2x5cGhdO1xuXG52YXIgX19pbmRleE9mID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICB9IHJldHVybiAtMTtcbn07XG5cbnZhciBpc0tleXdvcmQgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4gX19pbmRleE9mLmNhbGwoa2V5d29yZHMsIGpzU3RyaW5nKSA+PSAwO1xufTtcblxuZXhwb3J0IHtcbiAgYmluYXJ5R2x5cGhUb2tlbnMsXG4gIGRlcmVmLFxuICBkZXJlZkdseXBoLFxuICBjYXRjaFN0YXIsXG4gIGRlZkJhbmcsXG4gIF9kbyxcbiAgX2V2YWwsXG4gIF9ldmFsV2l0aEVudixcbiAgZXhwYW5kTWFjcm8sXG4gIF9mYWxzZSxcbiAgZm5TdGFyLFxuICBfZ2V0Q3VycmVudEVudixcbiAgX2dldERlZmF1bHRFbnYsXG4gIGdseXBoVG9rZW5zLFxuICBfaWYsXG4gIGlnbm9yZUlmVHJ1ZSxcbiAgaWdub3JlSWZUcnVlR2x5cGgsXG4gIGlnbm9yZVVubGVzc1RydWUsXG4gIGlnbm9yZVVubGVzc1RydWVHbHlwaCxcbiAgaWdub3JlLFxuICBpZ25vcmVCYW5nLFxuICBpZ25vcmVCYW5nR2x5cGgsXG4gIGluZGV4RW5kLFxuICBpbmRleFN0YXJ0LFxuICBrZXlUb2tlbnMsXG4gIGlzS2V5d29yZCxcbiAgbGV0U3RhcixcbiAgbGV0cmVjU3RhcixcbiAgbGlzdEVuZCxcbiAgbGlzdFN0YXJ0LFxuICBtYWNyb1N0YXIsXG4gIG1hY3JvVG9rZW5zLFxuICBuaWwsXG4gIF9wcm9jZXNzLFxuICBxdWFzaXF1b3RlLFxuICBxdWFzaXF1b3RlR2x5cGgsXG4gIHF1b3RlLFxuICBxdW90ZUdseXBoLFxuICBzcGxhdCxcbiAgc3BsaWNlVW5xdW90ZSxcbiAgc3BsaWNlVW5xdW90ZUdseXBoLFxuICBfdHJ1ZSxcbiAgdHJ5U3RhcixcbiAgdW5kZWZCYW5nLFxuICB1bnF1b3RlLFxuICB1bnF1b3RlR2x5cGhcbn07XG4iLCJpbXBvcnQgeyBlcmxUeXBlcyB9IGZyb20gJy4vdHlwZXMnO1xuXG52YXIgZXJsTGlzdFR5cGUgPSBlcmxUeXBlc1s2XTtcblxudmFyIF9fc2xpY2UgPSBbXS5zbGljZTtcblxudmFyIGNhciA9IGZ1bmN0aW9uKGVybExpc3QpIHtcbiAgaWYgKGlzRW1wdHkoZXJsTGlzdCkpIHtcbiAgICByZXR1cm4gRU9MO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxMaXN0LnZhbHVlO1xuICB9XG59O1xuXG52YXIgY2RyID0gZnVuY3Rpb24oZXJsTGlzdCkge1xuICBpZiAoaXNFbXB0eShlcmxMaXN0KSkge1xuICAgIHJldHVybiBFT0w7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybExpc3QubmV4dDtcbiAgfVxufTtcblxudmFyIGFyZUVxdWFsID0gZnVuY3Rpb24obGlzdDAsIGxpc3QxLCBfYXJlRXF1YWwpIHtcbiAgd2hpbGUgKCEoaXNFbXB0eShsaXN0MCkgfHwgaXNFbXB0eShsaXN0MSkpKSB7XG4gICAgaWYgKCFfYXJlRXF1YWwobGlzdDAudmFsdWUsIGxpc3QxLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsaXN0MCA9IGNkcihsaXN0MCk7XG4gICAgbGlzdDEgPSBjZHIobGlzdDEpO1xuICB9XG4gIHJldHVybiBpc0VtcHR5KGxpc3QwKSAmJiBpc0VtcHR5KGxpc3QxKTtcbn07XG5cbnZhciBjb25jYXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGVybExpc3RzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgaWYgKGVybExpc3RzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBFT0w7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IGNvcHkoZXJsTGlzdHNbMF0pO1xuICB2YXIgdGFpbCA9IGxhc3RUYWlsKHJlc3VsdCk7XG4gIHZhciByZW1haW5pbmcgPSBlcmxMaXN0cy5zbGljZSgxKTtcbiAgdmFyIGxlbiA9IHJlbWFpbmluZy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgZXJsTGlzdCA9IHJlbWFpbmluZ1tpXTtcbiAgICB2YXIgX2NvcHkgPSBjb3B5KGVybExpc3QpO1xuICAgIGlmIChpc0VtcHR5KHRhaWwpKSB7XG4gICAgICByZXN1bHQgPSBfY29weTtcbiAgICAgIHRhaWwgPSBsYXN0VGFpbChyZXN1bHQpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghaXNFbXB0eShfY29weSkpIHtcbiAgICAgIHRhaWwubmV4dCA9IF9jb3B5O1xuICAgICAgdGFpbCA9IGxhc3RUYWlsKF9jb3B5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciBjb25zID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY3JlYXRlRXJsTGlzdChjYXIoZXJsQXJncyksIG5leHQoZXJsQXJncykpO1xufTtcblxudmFyIGNvcHkgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIHJldHVybiBtYXAoKGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfSksIGVybExpc3QpO1xufTtcblxudmFyIGNyZWF0ZUVybExpc3QgPSBmdW5jdGlvbih2YWx1ZSwgbmV4dE5vZGUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gRU9MO1xuICB9XG4gIHJldHVybiBjcmVhdGVOb2RlKHZhbHVlLCBuZXh0Tm9kZSAhPSBudWxsID8gbmV4dE5vZGUgOiBFT0wpO1xufTtcblxudmFyIGNyZWF0ZU5vZGUgPSBmdW5jdGlvbih2YWx1ZSwgbmV4dE5vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBlcmxMaXN0VHlwZSxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgbmV4dDogbmV4dE5vZGVcbiAgfTtcbn07XG5cbnZhciBkcm9wID0gZnVuY3Rpb24obmJyLCBlcmxMaXN0KSB7XG4gIHdoaWxlIChuYnIgIT09IDApIHtcbiAgICBlcmxMaXN0ID0gY2RyKGVybExpc3QpO1xuICAgIG5iciA9IG5iciAtIDE7XG4gIH1cbiAgcmV0dXJuIGVybExpc3Q7XG59O1xuXG52YXIgaXNFbXB0eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gRU9MO1xufTtcblxudmFyIGZpbHRlciA9IGZ1bmN0aW9uKHByZWRpY2F0ZSwgbGlzdCkge1xuICB2YXIgX3JlZHVjZSA9IGZ1bmN0aW9uKGxpc3QsIHZhbHVlKSB7XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KHZhbHVlLCBsaXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICB9O1xuICByZXR1cm4gcmV2ZXJzZShyZWR1Y2UoRU9MLCBfcmVkdWNlLCBsaXN0KSk7XG59O1xuXG52YXIgZm9yRWFjaCA9IGZ1bmN0aW9uKGZuLCBsaXN0KSB7XG4gIHZhciByZXN1bHQgPSBsaXN0O1xuICB3aGlsZSAoIWlzRW1wdHkobGlzdCkpIHtcbiAgICByZXN1bHQgPSBmbihsaXN0LnZhbHVlKTtcbiAgICBsaXN0ID0gcmVjdXJzZShsaXN0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIGZyb21BcnJheSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gIHZhciBfcmVkdWNlID0gZnVuY3Rpb24obGlzdCwgdmFsdWUpIHtcbiAgICByZXR1cm4gY3JlYXRlRXJsTGlzdCh2YWx1ZSwgbGlzdCk7XG4gIH07XG4gIHJldHVybiBhcnJheS5yZXZlcnNlKCkucmVkdWNlKF9yZWR1Y2UsIGNyZWF0ZUVybExpc3QoKSk7XG59O1xuXG52YXIgbGFzdCA9IGZ1bmN0aW9uKGVybExpc3QpIHtcbiAgcmV0dXJuIGNhcihsYXN0VGFpbChlcmxMaXN0KSk7XG59O1xuXG52YXIgbGFzdFRhaWwgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIGlmIChpc0VtcHR5KGVybExpc3QpKSB7XG4gICAgcmV0dXJuIGVybExpc3Q7XG4gIH1cbiAgdmFyIHByaW9yID0gZXJsTGlzdDtcbiAgdmFyIGN1cnJlbnQgPSBjZHIoZXJsTGlzdCk7XG4gIHdoaWxlICghaXNFbXB0eShjdXJyZW50KSkge1xuICAgIHByaW9yID0gY2RyKHByaW9yKTtcbiAgICBjdXJyZW50ID0gY2RyKGN1cnJlbnQpO1xuICB9XG4gIHJldHVybiBwcmlvcjtcbn07XG5cbnZhciBtYXAgPSBmdW5jdGlvbihmbiwgbGlzdCkge1xuICB2YXIgX3JlZHVjZSA9IGZ1bmN0aW9uKGxpc3QsIHZhbHVlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVybExpc3QoZm4odmFsdWUpLCBsaXN0KTtcbiAgfTtcbiAgcmV0dXJuIHJldmVyc2UocmVkdWNlKEVPTCwgX3JlZHVjZSwgbGlzdCkpO1xufTtcblxudmFyIG5leHQgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIHJldHVybiBjYXIoY2RyKGVybExpc3QpKTtcbn07XG5cbnZhciByZWN1cnNlID0gZnVuY3Rpb24obGlzdCkge1xuICBpZiAoaXNFbXB0eShsaXN0KSkge1xuICAgIHJldHVybiBsaXN0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0Lm5leHQ7XG4gIH1cbn07XG5cbnZhciByZWR1Y2UgPSBmdW5jdGlvbihzZWVkLCBmbiwgbGlzdCkge1xuICB3aGlsZSAoIWlzRW1wdHkobGlzdCkpIHtcbiAgICBzZWVkID0gZm4oc2VlZCwgbGlzdC52YWx1ZSk7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gIH1cbiAgcmV0dXJuIHNlZWQ7XG59O1xuXG52YXIgcmVkdWNlQnkyID0gZnVuY3Rpb24oc2VlZCwgZm4sIGxpc3QpIHtcbiAgd2hpbGUgKCFpc0VtcHR5KGxpc3QpKSB7XG4gICAgdmFyIHZhbHVlMCA9IGxpc3QudmFsdWU7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gICAgdmFyIHZhbHVlMSA9IGxpc3QudmFsdWU7XG4gICAgc2VlZCA9IGZuKHNlZWQsIHZhbHVlMCwgdmFsdWUxKTtcbiAgICBsaXN0ID0gcmVjdXJzZShsaXN0KTtcbiAgfVxuICByZXR1cm4gc2VlZDtcbn07XG5cbnZhciByZXZlcnNlID0gZnVuY3Rpb24obGlzdCkge1xuICB2YXIgcmVzdWx0ID0gRU9MO1xuICB3aGlsZSAoIWlzRW1wdHkobGlzdCkpIHtcbiAgICByZXN1bHQgPSBjcmVhdGVFcmxMaXN0KGxpc3QudmFsdWUsIHJlc3VsdCk7XG4gICAgbGlzdCA9IGxpc3QubmV4dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIHRha2UgPSBmdW5jdGlvbihuYnIsIGVybExpc3QpIHtcbiAgdmFyIHJlc3VsdCA9IGNyZWF0ZUVybExpc3QoKTtcbiAgd2hpbGUgKG5iciAhPT0gMCkge1xuICAgIHZhciBub2RlID0gY2FyKGVybExpc3QpO1xuICAgIGVybExpc3QgPSBjZHIoZXJsTGlzdCk7XG4gICAgcmVzdWx0ID0gY3JlYXRlRXJsTGlzdChub2RlLCByZXN1bHQpO1xuICAgIG5iciA9IG5iciAtIDE7XG4gIH1cbiAgcmV0dXJuIHJldmVyc2UocmVzdWx0KTtcbn07XG5cbnZhciB0b0FycmF5ID0gZnVuY3Rpb24obGlzdCkge1xuICB2YXIgX3JlZHVjZSA9IGZ1bmN0aW9uKGpzQXJyYXksIHZhbHVlKSB7XG4gICAganNBcnJheS5wdXNoKHZhbHVlKTtcbiAgICByZXR1cm4ganNBcnJheTtcbiAgfTtcbiAgcmV0dXJuIHJlZHVjZShbXSwgX3JlZHVjZSwgbGlzdCk7XG59O1xuXG52YXIgdG9QYXJ0aWFsQXJyYXkgPSBmdW5jdGlvbihuYnIsIGxpc3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB3aGlsZSAobmJyICE9PSAwKSB7XG4gICAgdmFyIG5vZGUgPSBjYXIobGlzdCk7XG4gICAgbGlzdCA9IGNkcihsaXN0KTtcbiAgICByZXN1bHQucHVzaChub2RlKTtcbiAgICBuYnIgPSBuYnIgLSAxO1xuICB9XG4gIHJlc3VsdC5wdXNoKGxpc3QpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIHppcCA9IGZ1bmN0aW9uKHNlZWQsIGZuLCBsaXN0MCwgbGlzdDEpIHtcbiAgd2hpbGUgKCEoaXNFbXB0eShsaXN0MCkgfHwgaXNFbXB0eShsaXN0MSkpKSB7XG4gICAgdmFyIHZhbHVlMCA9IGNhcihsaXN0MCk7XG4gICAgbGlzdDAgPSBjZHIobGlzdDApO1xuICAgIHZhciB2YWx1ZTEgPSBjYXIobGlzdDEpO1xuICAgIGxpc3QxID0gY2RyKGxpc3QxKTtcbiAgICBzZWVkID0gZm4oc2VlZCwgdmFsdWUwLCB2YWx1ZTEpO1xuICB9XG4gIHJldHVybiBzZWVkO1xufTtcblxudmFyIF9FT0wgPSB7fTtcblxudmFyIEVPTCA9IGNyZWF0ZU5vZGUoX0VPTCwgX0VPTCk7XG5cbmV4cG9ydCB7XG4gIGFyZUVxdWFsLFxuICBjYXIsXG4gIGNkcixcbiAgY29uY2F0LFxuICBjb25zLFxuICBjb3B5LFxuICBjcmVhdGVFcmxMaXN0LFxuICBkcm9wLFxuICBpc0VtcHR5LFxuICBmaWx0ZXIsXG4gIGZvckVhY2gsXG4gIGZyb21BcnJheSxcbiAgbGFzdCxcbiAgbWFwLFxuICBuZXh0LFxuICByZWN1cnNlLFxuICByZWR1Y2UsXG4gIHJlZHVjZUJ5MixcbiAgcmV2ZXJzZSxcbiAgdGFrZSxcbiAgdG9BcnJheSxcbiAgdG9QYXJ0aWFsQXJyYXlcbn07XG4iLCJpbXBvcnQgeyBiaW5hcnlHbHlwaFRva2VucyB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGNvbW1lbnRTaWduYWwgfSBmcm9tICcuL2NvbW1lbnRTaWduYWwnO1xuaW1wb3J0IHsgY3JlYXRlRXJsQm9vbGVhbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsSWRlbnRpZmllciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsSWdub3JlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTGlzdCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxOdW1iZXIgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3ltYm9sIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBkZXJlZiB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGRlcmVmR2x5cGggfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBleHRyYWN0SnNWYWx1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgX2ZhbHNlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgZ2x5cGhUb2tlbnMgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmVCYW5nIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlQmFuZ0dseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlSWZUcnVlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlSWZUcnVlR2x5cGggfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmVVbmxlc3NUcnVlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaWdub3JlVW5sZXNzVHJ1ZUdseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaW5kZXhFbmQgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpbmRleFN0YXJ0IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsga2V5VG9rZW5zIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbGlzdEVuZCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGxpc3RTdGFydCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IG5pbCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHF1YXNpcXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBxdW90ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHNwbGljZVVucXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyB1bnF1b3RlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcXVhc2lxdW90ZUdseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcXVvdGVHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHNwbGljZVVucXVvdGVHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHVucXVvdGVHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHJldmVyc2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IF90cnVlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuXG52YXIgIF9faW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgfSByZXR1cm4gLTE7XG59O1xuXG52YXIgYXRvbWl6ZSA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHZhciBjcmVhdGVFcmxWYWx1ZSA9IChmdW5jdGlvbigpIHtcbiAgICBpZiAoaXNOaWwodG9rZW4pKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRXJsTmlsO1xuICAgIH0gZWxzZSBpZiAoaXNJZ25vcmUodG9rZW4pKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRXJsSWdub3JlO1xuICAgIH0gZWxzZSBpZiAoaXNCb29sZWFuKHRva2VuKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKHBhcnNlQm9vbGVhbih0b2tlbikpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKHRva2VuKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZztcbiAgICB9IGVsc2UgaWYgKGlzSWRlbnRpZmllcih0b2tlbikpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFcmxJZGVudGlmaWVyO1xuICAgIH0gZWxzZSBpZiAoaXNJbnRlZ2VyKHRva2VuKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxOdW1iZXIocGFyc2VJbnQxMCh0b2tlbikpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRmxvYXQodG9rZW4pKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihwYXJzZUZsb2F0MTAodG9rZW4pKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjcmVhdGVFcmxTeW1ib2w7XG4gICAgfVxuICB9KSgpO1xuICByZXR1cm4gY3JlYXRlRXJsVmFsdWUodG9rZW4pO1xufTtcblxudmFyIGlzQm9vbGVhbiA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbiA9PT0gX2ZhbHNlIHx8IHRva2VuID09PSBfdHJ1ZTtcbn07XG5cbnZhciBpc0Zsb2F0ID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIC9eKC18XFwrKT9bMC05XShffFxcZCkqXFwuKFxcZHwoXFxkKF98XFxkKSpcXGQpKSQvLnRlc3QodG9rZW4pO1xufTtcblxudmFyIGlzQmluYXJ5R2x5cGggPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gX19pbmRleE9mLmNhbGwoYmluYXJ5R2x5cGhUb2tlbnMsIHRva2VuKSA+PSAwO1xufTtcblxudmFyIGlzR2x5cGggPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gX19pbmRleE9mLmNhbGwoZ2x5cGhUb2tlbnMsIHRva2VuKSA+PSAwO1xufTtcblxudmFyIGlzSWdub3JlID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuID09PSBpZ25vcmU7XG59O1xuXG52YXIgaXNJbmRleFN0YXJ0ID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuID09PSBpbmRleFN0YXJ0O1xufTtcblxudmFyIGlzSW50ZWdlciA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiAvXigwKD8hXFwuKXwoKC18XFwrKT9bMS05XShffFxcZCkqJCkpLy50ZXN0KHRva2VuKTtcbn07XG5cbnZhciBpc0xpc3RTdGFydCA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbiA9PT0gbGlzdFN0YXJ0O1xufTtcblxudmFyIGlzTmlsID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuID09PSBuaWw7XG59O1xuXG52YXIgX3BhcnNlID0gZnVuY3Rpb24odG9rZW4sIHRva2Vucykge1xuICBpZiAoaXNMaXN0U3RhcnQodG9rZW4pKSB7XG4gICAgcmV0dXJuIHBhcnNlTGlzdCh0b2tlbnMpO1xuICB9IGVsc2UgaWYgKGlzSW5kZXhTdGFydCh0b2tlbikpIHtcbiAgICByZXR1cm4gcGFyc2VJbmRleCh0b2tlbnMpO1xuICB9IGVsc2UgaWYgKGlzR2x5cGgodG9rZW4pKSB7XG4gICAgcmV0dXJuIHBhcnNlR2x5cGgoZ2x5cGhJbmRleFt0b2tlbl0sIHRva2Vucyk7XG4gIH0gZWxzZSBpZiAoaXNCaW5hcnlHbHlwaCh0b2tlbikpIHtcbiAgICByZXR1cm4gcGFyc2VCaW5hcnlHbHlwaChiaW5hcnlHbHlwaEluZGV4W3Rva2VuXSwgdG9rZW5zKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXRvbWl6ZSh0b2tlbik7XG4gIH1cbn07XG5cbnZhciBwYXJzZSA9IGZ1bmN0aW9uKHRva2Vucykge1xuICBpZiAodG9rZW5zID09PSBjb21tZW50U2lnbmFsKSB7XG4gICAgcmV0dXJuIGNvbW1lbnRTaWduYWw7XG4gIH1cbiAgcmV0dXJuIF9wYXJzZSh0b2tlbnMuc2hpZnQoKSwgdG9rZW5zKTtcbn07XG5cbnZhciBwYXJzZUJpbmFyeUdseXBoID0gZnVuY3Rpb24oa2V5d29yZCwgdG9rZW5zKSB7XG4gIHJldHVybiBjcmVhdGVFcmxMaXN0KFxuICAgIGNyZWF0ZUVybFN5bWJvbChrZXl3b3JkKSxcbiAgICBjcmVhdGVFcmxMaXN0KFxuICAgICAgcGFyc2UodG9rZW5zKSxcbiAgICAgIGNyZWF0ZUVybExpc3QocGFyc2UodG9rZW5zKSkpKTtcbn07XG5cbnZhciBwYXJzZUJvb2xlYW4gPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gdG9rZW4gPT09IF90cnVlO1xufTtcblxudmFyIHBhcnNlRmxvYXQxMCA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiBwYXJzZUZsb2F0KHN0cmlwVW5kZXJzY29yZXModG9rZW4pLCAxMCk7XG59O1xuXG52YXIgcGFyc2VHbHlwaCA9IGZ1bmN0aW9uKGtleXdvcmQsIHRva2Vucykge1xuICByZXR1cm4gY3JlYXRlRXJsTGlzdChcbiAgICBjcmVhdGVFcmxTeW1ib2woa2V5d29yZCksXG4gICAgY3JlYXRlRXJsTGlzdChwYXJzZSh0b2tlbnMpKSk7XG59O1xuXG52YXIgcGFyc2VJbmRleCA9IGZ1bmN0aW9uKHRva2Vucykge1xuICB2YXIgdG9rZW47XG4gIHZhciBqc0luZGV4ID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgaXNLZXlTdGVwID0gdHJ1ZTtcbiAgd2hpbGUgKCh0b2tlbiA9IHRva2Vucy5zaGlmdCgpKSAhPT0gaW5kZXhFbmQpIHtcbiAgICBpZiAoaXNLZXlTdGVwKSB7XG4gICAgICBrZXkgPSBfcGFyc2UodG9rZW4sIHRva2Vucyk7XG4gICAgICBpc0tleVN0ZXAgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAganNJbmRleFtleHRyYWN0SnNWYWx1ZShrZXkpXSA9IF9wYXJzZSh0b2tlbiwgdG9rZW5zKTtcbiAgICAgIGlzS2V5U3RlcCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBjcmVhdGVFcmxJbmRleChqc0luZGV4KTtcbn07XG5cbnZhciBwYXJzZUludDEwID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHBhcnNlSW50KHN0cmlwVW5kZXJzY29yZXModG9rZW4pLCAxMCk7XG59O1xuXG52YXIgcGFyc2VMaXN0ID0gZnVuY3Rpb24odG9rZW5zKSB7XG4gIHZhciB0b2tlbjtcbiAgdmFyIGVybExpc3QgPSBjcmVhdGVFcmxMaXN0KCk7XG4gIHdoaWxlICgodG9rZW4gPSB0b2tlbnMuc2hpZnQoKSkgIT09IGxpc3RFbmQpIHtcbiAgICBlcmxMaXN0ID0gY3JlYXRlRXJsTGlzdChfcGFyc2UodG9rZW4sIHRva2VucyksIGVybExpc3QpO1xuICB9XG4gIHJldHVybiByZXZlcnNlKGVybExpc3QpO1xufTtcblxudmFyIHN0YXJ0c1dpdGggPSBmdW5jdGlvbihjaGFyKSB7XG4gIHJldHVybiBmdW5jdGlvbih0b2tlbikge1xuICAgIHJldHVybiB0b2tlblswXSA9PT0gY2hhcjtcbiAgfTtcbn07XG5cbnZhciBzdHJpcFVuZGVyc2NvcmVzID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuLnJlcGxhY2UoL18vZywgJycpO1xufTtcblxudmFyIGdseXBoSW5kZXggPSB7fTtcblxuZ2x5cGhJbmRleFtkZXJlZkdseXBoXSAgICAgICAgID0gZGVyZWY7XG5nbHlwaEluZGV4W2lnbm9yZUJhbmdHbHlwaF0gICAgPSBpZ25vcmVCYW5nO1xuZ2x5cGhJbmRleFtxdWFzaXF1b3RlR2x5cGhdICAgID0gcXVhc2lxdW90ZTtcbmdseXBoSW5kZXhbcXVvdGVHbHlwaF0gICAgICAgICA9IHF1b3RlO1xuZ2x5cGhJbmRleFtzcGxpY2VVbnF1b3RlR2x5cGhdID0gc3BsaWNlVW5xdW90ZTtcbmdseXBoSW5kZXhbdW5xdW90ZUdseXBoXSAgICAgICA9IHVucXVvdGU7XG5cbnZhciBiaW5hcnlHbHlwaEluZGV4ID0ge307XG5cbmJpbmFyeUdseXBoSW5kZXhbaWdub3JlSWZUcnVlR2x5cGhdICAgICA9IGlnbm9yZUlmVHJ1ZTtcbmJpbmFyeUdseXBoSW5kZXhbaWdub3JlVW5sZXNzVHJ1ZUdseXBoXSA9IGlnbm9yZVVubGVzc1RydWU7XG5cbnZhciBpc1N0cmluZyA9IHN0YXJ0c1dpdGgoJ1wiJyk7XG5cbnZhciBpc0lkZW50aWZpZXIgPSBzdGFydHNXaXRoKCc6Jyk7XG5cbmV4cG9ydCB7IHBhcnNlIH07XG4iLCJpbXBvcnQgeyBjb21tZW50U2lnbmFsIH0gZnJvbSAnLi9jb21tZW50U2lnbmFsJztcbmltcG9ydCB7IGV4dHJhY3RKc1ZhbHVlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpbmRleEVuZCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGluZGV4U3RhcnQgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpc0VybEF0b20gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsSWRlbnRpZmllciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxJZ25vcmUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsS2V5d29yZCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybE1hY3JvIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybE5pbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxTdHJpbmcgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsVXNlclB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgbGlzdEVuZCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGxpc3RTdGFydCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHJlZHVjZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuXG52YXIgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbnZhciBhZGpvaW5FcmxWYWx1ZSA9IGZ1bmN0aW9uKHNob3VsZEJlUmVhZGFibGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG1lbW8sIGVybFZhbHVlKSB7XG4gICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemUoZXJsVmFsdWUsIHNob3VsZEJlUmVhZGFibGUpO1xuICAgIGlmIChtZW1vLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlwiICsgbWVtbyArIFwiIFwiICsgc2VyaWFsaXplZDtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgc2VyaWFsaXplID0gZnVuY3Rpb24oZXJsRXhwciwgc2hvdWxkQmVSZWFkYWJsZSkge1xuICBpZiAoZXJsRXhwciA9PT0gY29tbWVudFNpZ25hbCkge1xuICAgIHJldHVybiBjb21tZW50U2lnbmFsO1xuICB9XG4gIHZhciBfc2VyaWFsaXplID0gKGZ1bmN0aW9uKCkge1xuICAgIGlmIChpc0VybExpc3QoZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBzZXJpYWxpemVMaXN0O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxJZ25vcmUoZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gaWdub3JlTGFiZWw7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxJbmRleChlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUluZGV4O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxLZXl3b3JkKGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGtleXdvcmRMYWJlbDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc0VybENvcmVFZmZlY3RmdWxGdW5jdGlvbihlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBjb3JlRWZmZWN0ZnVsRnVuY3Rpb25MYWJlbDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc0VybENvcmVQdXJlRnVuY3Rpb24oZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gY29yZVB1cmVGdW5jdGlvbkxhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsVXNlclB1cmVGdW5jdGlvbihlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB1c2VyUHVyZUZ1bmN0aW9uTGFiZWw7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxNYWNybyhlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBtYWNyb0xhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsTmlsKGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5pbExhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsSWRlbnRpZmllcihlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUlkZW50aWZpZXI7XG4gICAgfSBlbHNlIGlmIChpc0VybFN0cmluZyhlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZVN0cmluZztcbiAgICB9IGVsc2UgaWYgKGlzRXJsQXRvbShlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUF0b207XG4gICAgfSBlbHNlIGlmIChlcmxFeHByLmpzVmFsdWUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGV4dHJhY3RKc1ZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGVybFZhbHVlO1xuICAgICAgfTtcbiAgICB9XG4gIH0pKCk7XG4gIHJldHVybiBfc2VyaWFsaXplKGVybEV4cHIsIHNob3VsZEJlUmVhZGFibGUpO1xufTtcblxudmFyIHNlcmlhbGl6ZUF0b20gPSBmdW5jdGlvbihlcmxBdG9tLCBzaG91bGRCZVJlYWRhYmxlKSB7XG4gIHJldHVybiBcIihhdG9tIFwiICsgKHNlcmlhbGl6ZShlcmxBdG9tLmVybFZhbHVlLCBzaG91bGRCZVJlYWRhYmxlKSkgKyBcIilcIjtcbn07XG5cbnZhciBzZXJpYWxpemVJZGVudGlmaWVyID0gZnVuY3Rpb24oZXJsU3RyaW5nLCBzaG91bGRCZVJlYWRhYmxlKSB7XG4gIHJldHVybiBleHRyYWN0SnNWYWx1ZShlcmxTdHJpbmcpO1xufTtcblxudmFyIHNlcmlhbGl6ZUluZGV4ID0gZnVuY3Rpb24oZXJsSW5kZXgsIHNob3VsZEJlUmVhZGFibGUpIHtcbiAgdmFyIGpzSW5kZXggPSBlcmxJbmRleC5qc1ZhbHVlO1xuICB2YXIgbWVtbyA9ICcnO1xuICBmb3IgKHZhciBrZXkgaW4ganNJbmRleCkge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoanNJbmRleCwga2V5KSkgY29udGludWU7XG4gICAgdmFyIGVybFZhbHVlID0ganNJbmRleFtrZXldO1xuICAgIGlmIChtZW1vID09PSAnJykge1xuICAgICAgbWVtbyA9IFwiXCJcbiAgICAgICAgKyBrZXlcbiAgICAgICAgKyBcIiBcIlxuICAgICAgICArIChzZXJpYWxpemUoZXJsVmFsdWUsIHNob3VsZEJlUmVhZGFibGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVtbyA9IFwiXCJcbiAgICAgICAgKyBtZW1vXG4gICAgICAgICsgXCIsIFwiXG4gICAgICAgICsga2V5XG4gICAgICAgICsgXCIgXCJcbiAgICAgICAgKyAoc2VyaWFsaXplKGVybFZhbHVlLCBzaG91bGRCZVJlYWRhYmxlKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmRleFN0YXJ0ICsgbWVtbyArIGluZGV4RW5kO1xufTtcblxudmFyIHNlcmlhbGl6ZUxpc3QgPSBmdW5jdGlvbihlcmxMaXN0LCBzaG91bGRCZVJlYWRhYmxlKSB7XG4gIHZhciBzZXJpYWxpemVkTGlzdCA9IHJlZHVjZShcbiAgICBcIlwiLFxuICAgIGFkam9pbkVybFZhbHVlKHNob3VsZEJlUmVhZGFibGUpLFxuICAgIGVybExpc3QpO1xuICByZXR1cm4gbGlzdFN0YXJ0ICsgc2VyaWFsaXplZExpc3QgKyBsaXN0RW5kO1xufTtcblxudmFyIHNlcmlhbGl6ZVN0cmluZyA9IGZ1bmN0aW9uKGVybFN0cmluZywgc2hvdWxkQmVSZWFkYWJsZSkge1xuICB2YXIganNTdHJpbmcgPSBzdHJpcFF1b3RlcyhleHRyYWN0SnNWYWx1ZShlcmxTdHJpbmcpKTtcbiAgaWYgKCFzaG91bGRCZVJlYWRhYmxlKSB7XG4gICAgcmV0dXJuIGpzU3RyaW5nO1xuICB9XG4gIHJldHVybiBqc1N0cmluZ1xuICAgIC5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpXG4gICAgLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuICAgIC5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyk7XG59O1xuXG52YXIgc3RyaXBRdW90ZXMgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4ganNTdHJpbmcuc2xpY2UoMSwgLTEpO1xufTtcblxudmFyIGNvcmVFZmZlY3RmdWxGdW5jdGlvbkxhYmVsID0gJzxlZmZlY3RmdWwgY29yZSBmdW5jdGlvbj4nO1xudmFyIGNvcmVQdXJlRnVuY3Rpb25MYWJlbCAgICAgID0gJzxjb3JlIGZ1bmN0aW9uPic7XG52YXIgaWdub3JlTGFiZWwgICAgICAgICAgICAgICAgPSAnPGlnbm9yZT4nO1xudmFyIGtleXdvcmRMYWJlbCAgICAgICAgICAgICAgID0gJzxrZXl3b3JkPic7XG52YXIgbWFjcm9MYWJlbCAgICAgICAgICAgICAgICAgPSAnPG1hY3JvPic7XG52YXIgbmlsTGFiZWwgICAgICAgICAgICAgICAgICAgPSAnbmlsJztcbnZhciB1c2VyUHVyZUZ1bmN0aW9uTGFiZWwgICAgICA9ICc8ZnVuY3Rpb24+JztcblxuZXhwb3J0IHsgc2VyaWFsaXplIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiKGRvXFxuICAoZGVmISBmaXgqIChcXG4gICAgZm4qIChmKSAoXFxuICAgICAgKGZuKiAoeCkgKGYgKGZuKiAoJiB5cykgKGFwcGx5ICh4IHgpIHlzKSkpKVxcbiAgICAgIChmbiogKHgpIChmIChmbiogKCYgeXMpIChhcHBseSAoeCB4KSB5cykpKSkpKSlcXG5cXG4gIChkZWYhIG1lbWZpeCogKFxcbiAgICBmbiogKGYpIChcXG4gICAgICBsZXQqIChjYWNoZSB7fSkgKFxcbiAgICAgICAgKGZuKiAoeCBjYWNoZSkgKFxcbiAgICAgICAgICBmXFxuICAgICAgICAgICAgKGZuKiAoeikgKFxcbiAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zPyBjYWNoZSB6KVxcbiAgICAgICAgICAgICAgICAoZ2V0IGNhY2hlIHopXFxuICAgICAgICAgICAgICAgIChsZXQqIChyZXN1bHQgKChmbiogKHkpICgoeCB4IGNhY2hlKSB5KSkgeikpIChcXG4gICAgICAgICAgICAgICAgICBkb1xcbiAgICAgICAgICAgICAgICAgICAgKHNldCEgY2FjaGUgeiByZXN1bHQpXFxuICAgICAgICAgICAgICAgICAgICByZXN1bHQpKSkpXFxuICAgICAgICAgICAgY2FjaGUpKVxcbiAgICAgICAgKGZuKiAoeCBjYWNoZSkgKFxcbiAgICAgICAgICBmXFxuICAgICAgICAgICAgKGZuKiAoeikgKFxcbiAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zPyBjYWNoZSB6KVxcbiAgICAgICAgICAgICAgICAoZ2V0IGNhY2hlIHopXFxuICAgICAgICAgICAgICAgIChsZXQqIChyZXN1bHQgKChmbiogKHkpICgoeCB4IGNhY2hlKSB5KSkgeikpIChcXG4gICAgICAgICAgICAgICAgICBkb1xcbiAgICAgICAgICAgICAgICAgICAgKHNldCEgY2FjaGUgeiByZXN1bHQpXFxuICAgICAgICAgICAgICAgICAgICByZXN1bHQpKSkpXFxuICAgICAgICAgICAgY2FjaGUpKVxcbiAgICAgICAgY2FjaGUpKSkpXFxuXFxuICAoZGVmISBfMCBjYXIpXFxuXFxuICAoZGVmISBfMSAoZm4qICh4cykgKG50aCAxIHhzKSkpXFxuXFxuICAoZGVmISBfMiAoZm4qICh4cykgKG50aCAyIHhzKSkpXFxuXFxuICAoZGVmISBzd2FwISAoXFxuICAgIG1hY3JvKiAoYXRvbSAmIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIGF0b21cXG4gICAgICAgIGAobGV0KiAoLWF0b20tIH5hdG9tKSAoXFxuICAgICAgICAgIGRvXFxuICAgICAgICAgICAgKHJlc2V0ISAtYXRvbS0gKH4oY2FyIHhzKSAoZGVyZWYgLWF0b20tKSB+QChjZHIgeHMpKSlcXG4gICAgICAgICAgICAoZGVyZWYgLWF0b20tKSkpKSkpXFxuXFxuICAoZGVmISAqZ2Vuc3ltLWNvdW50ZXIqIChhdG9tIDApKVxcblxcbiAgKGRlZiEgZ2Vuc3ltIChcXG4gICAgICBmbiogKCkgKHN5bWJvbCAoc3RyaW5nIFxcXCJHX19cXFwiIChzd2FwISAqZ2Vuc3ltLWNvdW50ZXIqIGluY3IpKSkpKVxcblxcbiAgKGRlZiEgb3IgKFxcbiAgICBtYWNybyogKCYgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgZmFsc2VcXG4gICAgICAgIChsZXQqICgtcXVlcnktIChnZW5zeW0pKVxcbiAgICAgICAgICBgKGxldCogKH4tcXVlcnktIH4oY2FyIHhzKSkgKFxcbiAgICAgICAgICAgIGlmIH4tcXVlcnktXFxuICAgICAgICAgICAgICB+LXF1ZXJ5LVxcbiAgICAgICAgICAgICAgKG9yIH5AKGNkciB4cykpKSkpKSkpXFxuXFxuICAoZGVmISBhbmQgKFxcbiAgICBtYWNybyogKCYgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgdHJ1ZVxcbiAgICAgICAgKGxldCogKC1xdWVyeS0gKGdlbnN5bSkpXFxuICAgICAgICAgIGAobGV0KiAofi1xdWVyeS0gfihjYXIgeHMpKSAoXFxuICAgICAgICAgICAgaWYgfi1xdWVyeS1cXG4gICAgICAgICAgICAgIChhbmQgfkAoY2RyIHhzKSlcXG4gICAgICAgICAgICAgIGZhbHNlKSkpKSkpXFxuXFxuICAoZGVmISBjb25kIChcXG4gICAgbWFjcm8qICgmIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIG5pbFxcbiAgICAgICAgKGlmIChlbXB0eT8gKGNkciB4cykpXFxuICAgICAgICAgICh0aHJvdyBcXFwiYGNvbmRgIHJlcXVpcmVzIGFuIGV2ZW4gbnVtYmVyIG9mIGZvcm1zLlxcXCIpXFxuICAgICAgICAgIChsZXQqICgtcXVlcnktIChnZW5zeW0pKVxcbiAgICAgICAgICAgIGAobGV0KiAofi1xdWVyeS0gfihjYXIgeHMpKSAoXFxuICAgICAgICAgICAgICBpZiB+LXF1ZXJ5LVxcbiAgICAgICAgICAgICAgICB+KF8xIHhzKVxcbiAgICAgICAgICAgICAgICAoY29uZCB+QChjZHIgKGNkciB4cykpKSkpKSkpKSlcXG5cXG4gIChkZWYhIGxvb3AgKFxcbiAgICBtYWNybyogKGZvcm0wIGZvcm0xKVxcbiAgICAgIGAobGV0KiAobG9vcCAobWVtZml4KiAoZm4qIChsb29wKSAoZm4qICh+KF8wIGZvcm0wKSkgfmZvcm0xKSkpKSAoXFxuICAgICAgICBsb29wIH4oXzEgZm9ybTApKSkpKVxcblxcbiAgKGRlZiEgLT4gKFxcbiAgICBtYWNybyogKCYgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgbmlsXFxuICAgICAgICAobGV0KiAoeCAoY2FyIHhzKSB4cyAoY2RyIHhzKSkgKFxcbiAgICAgICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgICAgIHhcXG4gICAgICAgICAgICAobGV0KiAoZm9ybSAoY2FyIHhzKSBmb3JtcyAoY2RyIHhzKSkgKFxcbiAgICAgICAgICAgICAgaWYgKGVtcHR5PyBmb3JtcylcXG4gICAgICAgICAgICAgICAgKGlmIChsaXN0PyBmb3JtKVxcbiAgICAgICAgICAgICAgICAgIChpZiAoPSAoc3ltYm9sIFxcXCJmbipcXFwiKSAoY2FyIGZvcm0pKVxcbiAgICAgICAgICAgICAgICAgICAgYCh+Zm9ybSB+eClcXG4gICAgICAgICAgICAgICAgICAgIGAofihjYXIgZm9ybSkgfnggfkAoY2RyIGZvcm0pKSlcXG4gICAgICAgICAgICAgICAgICAobGlzdCBmb3JtIHgpKVxcbiAgICAgICAgICAgICAgICBgKC0+ICgtPiB+eCB+Zm9ybSkgfkBmb3JtcykpKSkpKSkpXFxuXFxuICAoZGVmISAtPj4gKFxcbiAgICBtYWNybyogKCYgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgbmlsXFxuICAgICAgICAobGV0KiAoeCAoY2FyIHhzKSB4cyAoY2RyIHhzKSkgKFxcbiAgICAgICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgICAgIHhcXG4gICAgICAgICAgICAobGV0KiAoZm9ybSAoY2FyIHhzKSBmb3JtcyAoY2RyIHhzKSkgKFxcbiAgICAgICAgICAgICAgaWYgKGVtcHR5PyBmb3JtcylcXG4gICAgICAgICAgICAgICAgKGlmIChsaXN0PyBmb3JtKVxcbiAgICAgICAgICAgICAgICAgIChpZiAoPSAoc3ltYm9sIFxcXCJmbipcXFwiKSAoY2FyIGZvcm0pKVxcbiAgICAgICAgICAgICAgICAgICAgYCh+Zm9ybSB+eClcXG4gICAgICAgICAgICAgICAgICAgIGAofkBmb3JtIH54KSlcXG4gICAgICAgICAgICAgICAgICAobGlzdCBmb3JtIHgpKVxcbiAgICAgICAgICAgICAgICBgKC0+PiAoLT4+IH54IH5mb3JtKSB+QGZvcm1zKSkpKSkpKSlcXG5cXG4gIChkZWYhIC0+KiAobWFjcm8qICgmIHhzKSBgKGZuKiAoLXgtKSAoLT4gLXgtIH5AeHMpKSkpXFxuXFxuICAoZGVmISAtPj4qIChtYWNybyogKCYgeHMpIGAoZm4qICgteC0pICgtPj4gLXgtIH5AeHMpKSkpXFxuXFxuICAoZGVmISBub3QgKGZuKiAoeCkgKGlmIHggZmFsc2UgdHJ1ZSkpKVxcblxcbiAgKGRlZiEgaW5jciAoLT4qICgrIDEpKSlcXG5cXG4gIChkZWYhIGRlY3IgKC0+KiAoLSAxKSkpXFxuXFxuICAoZGVmISB6ZXJvPyAoLT4qICg9IDApKSlcXG5cXG4gIChkZWYhIGlkZW50aXR5IChmbiogKHgpIHgpKVxcblxcbiAgKGRlZiEgY29uc3RhbnQtZm4gKGZuKiAoeCkgKGZuKiAoeSkgeCkpKVxcblxcbiAgKGRlZiEgY2FsbC1vbiAoZm4qICgmIHhzKSAoZm4qIChmbikgKGFwcGx5IGZuIHhzKSkpKVxcblxcbiAgKGRlZiEgc3RlcC1pbnRvLWxpc3QgKFxcbiAgICBmbiogKHhzIGZuMCBmbjEpIChcXG4gICAgICBsZXQqICh4IChjYXIgeHMpIC14cy0gKGNkciB4cykpIChcXG4gICAgICAgIGlmIChlbXB0eT8gLXhzLSlcXG4gICAgICAgICAgKGZuMSB4KVxcbiAgICAgICAgICAoZm4wIHggLXhzLSkpKSkpXFxuXFxuICAoZGVmISBhcHBseS1vbiAoXFxuICAgIGZuKiAoJiB4cykgKFxcbiAgICAgIHN0ZXAtaW50by1saXN0XFxuICAgICAgICB4c1xcbiAgICAgICAgKGZuKiAoYXJndW1lbnRzIC14cy0pIChhcHBseSAoY2FyIC14cy0pIGFyZ3VtZW50cykpXFxuICAgICAgICAoZm4qIChhcmd1bWVudHMpIChmbiogKGYpIChhcHBseSBmIGFyZ3VtZW50cykpKSkpKVxcblxcbiAgKGRlZiEgcmVkdWNlIChcXG4gICAgZm4qIChmIHNlZWQgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgc2VlZFxcbiAgICAgICAgKHJlZHVjZSBmIChmIHNlZWQgKGNhciB4cykpIChjZHIgeHMpKSkpKVxcblxcbiAgKGRlZiEgZmlsdGVyIChcXG4gICAgZm4qIChwcmVkaWNhdGUgeHMpIChcXG4gICAgICByZXZlcnNlIChcXG4gICAgICAgIHJlZHVjZVxcbiAgICAgICAgICAoZm4qIChtZW1vIHgpIChpZiAocHJlZGljYXRlIHgpIChjb25zIHggbWVtbykgbWVtbykpXFxuICAgICAgICAgICcoKVxcbiAgICAgICAgICB4cykpKSlcXG5cXG4gIChkZWYhIG1hcCAoXFxuICAgIGZuKiAoZiB4cykgKFxcbiAgICAgIHJldmVyc2UgKFxcbiAgICAgICAgcmVkdWNlXFxuICAgICAgICAgIChmbiogKG1lbW8geCkgKGNvbnMgKGYgeCkgbWVtbykpXFxuICAgICAgICAgICcoKVxcbiAgICAgICAgICB4cykpKSlcXG5cXG4gIChkZWYhIGV2ZXJ5PyAoXFxuICAgIGZuKiAocHJlZCB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICB0cnVlXFxuICAgICAgICAoaWYgKHByZWQgKGNhciB4cykpIChldmVyeT8gcHJlZCAoY2RyIHhzKSkgZmFsc2UpKSkpXFxuXFxuICAoZGVmISBzb21lPyAoXFxuICAgIGZuKiAocHJlZCB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBmYWxzZVxcbiAgICAgICAgKGlmIChwcmVkIChjYXIgeHMpKSB0cnVlIChzb21lPyBwcmVkIChjZHIgeHMpKSkpKSlcXG5cXG4gIChkZWYhIGxldG1lbXJlYyogKFxcbiAgICBtYWNybyogKGFsaWFzIGV4cHIpXFxuICAgICAgYChsZXQqIChcXG4gICAgICAgIH4oY2FyIGFsaWFzKVxcbiAgICAgICAgKG1lbWZpeCogKGZuKiAofihjYXIgYWxpYXMpKSB+KF8xIGFsaWFzKSkpKVxcbiAgICAgICAgICB+ZXhwcikpKVxcblxcbiAgKGRlZiEgc2tpcCAoXFxuICAgIGZuKiAobmJyIHhzKSAoXFxuICAgICAgbGV0cmVjKiAoXFxuICAgICAgICAtc2tpcC1cXG4gICAgICAgIChmbiogKHlzKSAoXFxuICAgICAgICAgIGxldCogKG5iciAoY2FyIHlzKSB4cyAoXzEgeXMpKSAoXFxuICAgICAgICAgICAgY29uZFxcbiAgICAgICAgICAgICAgKD0gMCBuYnIpIHhzXFxuICAgICAgICAgICAgICAoPSAxIG5icikgKGNkciB4cylcXG4gICAgICAgICAgICAgIFxcXCJkZWZhdWx0XFxcIiAoLXNraXAtIChsaXN0IChkZWNyIG5icikgKGNkciB4cykpKSkpKSkgKFxcbiAgICAgICAgICAtc2tpcC0gKGxpc3QgbmJyIHhzKSkpKSlcXG5cXG4gIChkZWYhIGludm9rYWJsZT8gKGZuKiAoeCkgKG9yIChmdW5jdGlvbj8geCkgKG1hY3JvPyB4KSkpKVxcblxcbiAgKGRlZiEgLiAoXFxuICAgIG1hY3JvKiAoeCBrZXkgJiB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBgKGdldCB+eCB+a2V5KVxcbiAgICAgICAgYCgoZ2V0IH54IH5rZXkpIH5AeHMpKSkpXFxuXFxuICAoZGVmISAuLiAoXFxuICAgIGZuKiAobG8gaGkpIChcXG4gICAgICBsZXRyZWMqIChcXG4gICAgICAgIC0uLi1cXG4gICAgICAgIChmbiogKHhzKSAoXFxuICAgICAgICAgIGxldCogKGxvIChfMCB4cykgaGkgKF8xIHhzKSAtbGlzdC0gKF8yIHhzKSkgKFxcbiAgICAgICAgICAgIGlmICg9IGxvIGhpKVxcbiAgICAgICAgICAgICAgKGNvbnMgaGkgLWxpc3QtKVxcbiAgICAgICAgICAgICAgKC0uLi0gKGxpc3QgbG8gKGRlY3IgaGkpIChjb25zIGhpIC1saXN0LSkpKSkpKSkgKFxcbiAgICAgICAgICAtLi4tIChsaXN0IGxvIGhpICcoKSkpKSkpXFxuXFxuICAoZGVmISBkZWZyZWMhIChcXG4gICAgbWFjcm8qIChmbi1uYW1lIGZuLWJvZHkpXFxuICAgICAgYChkZWYhIH5mbi1uYW1lIChsZXRyZWMqICh+Zm4tbmFtZSB+Zm4tYm9keSkgfmZuLW5hbWUpKSkpXFxuXFxuICAoZGVmISBmb3IqIChcXG4gICAgbWFjcm8qIChsb29wLXBhcmFtZXRlcnMgYm9keSlcXG4gICAgICBgKGxvb3BcXG4gICAgICAgICB+KF8wIGxvb3AtcGFyYW1ldGVycylcXG4gICAgICAgICAoaWYgfihfMSBsb29wLXBhcmFtZXRlcnMpXFxuICAgICAgICAgICAoZG8gfmJvZHkgKGxvb3AgfihfMiBsb29wLXBhcmFtZXRlcnMpKSlcXG4gICAgICAgICAgIG5pbCkpKSlcXG5cXG4gIChkZWYhIGZvci1lYWNoIChcXG4gICAgZm4qIChmIHhzKSAoXFxuICAgICAgcmVkdWNlIChmbiogKG1lbW8geCkgKGRvIChmIHgpIG1lbW8pKSBuaWwgeHMpKSlcXG5cXG4gIChkZWYhIG4tdGltZXMgKFxcbiAgICBmbiogKG4gZikgKFxcbiAgICAgIGxvb3BcXG4gICAgICAgIChpIDApXFxuICAgICAgICAoaWYgKD0gaSBuKVxcbiAgICAgICAgICBuaWxcXG4gICAgICAgICAgKGRvIChmIGkpIChsb29wICgrIGkgMSkpKSkpKSlcXG5cXG4gIChkZWYhIHRhcCAoZm4qIChmIHgpIChkbyAoZiB4KSB4KSkpXFxuXFxuICAoZGVmISB3aXRoLXNpZGUtZWZmZWN0IChmbiogKHRodW5rIHgpIChkbyAodGh1bmspIHgpKSlcXG5cXG4gIChkZWYhIHRodW5rIChtYWNybyogKGZvcm0pIGAoZm4qICgpIH5mb3JtKSkpXFxuXFxuICAoZGVmISBjYWxsIChtYWNybyogKGYgJiB4cykgYCh+ZiB+QHhzKSkpXFxuXFxuICAoZGVmISBhcHBseSAobWFjcm8qIChmIHhzKSBgKGV2YWwgKGNvbnMgfmYgfnhzKSkpKVxcblxcbiAgKGRlZiEgZXZhbC1zdHJpbmcgKGZuKiAoZXJsU3RyaW5nKSAoZXZhbCAocGFyc2UgZXJsU3RyaW5nKSkpKVxcbilcXG5cIiIsImltcG9ydCB7IGNvbW1lbnRTaWduYWwgfSBmcm9tICcuL2NvbW1lbnRTaWduYWwnO1xuXG52YXIgY3JlYXRlVG9rZW5SZWdleCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gL1tcXHMsXSoofkB8XFwjXFwrfFxcI1xcLXxcXCNcXCF8W1xcW1xcXSgpe30nYH5AXl18XCIoPzpcXFxcLnxbXlxcXFxcIl0pKlwifDsuKnxbXlxcc1xcW1xcXSgpe30nXCJgLDtdKikvZztcbn07XG5cbnZhciBpc0NvbW1lbnQgPSBmdW5jdGlvbihtYXRjaCkge1xuICByZXR1cm4gbWF0Y2hbMF0gPT09ICc7Jztcbn07XG5cbnZhciBpc01lYW5pbmdmdWwgPSBmdW5jdGlvbihtYXRjaCkge1xuICByZXR1cm4gbWF0Y2ggIT09ICcnO1xufTtcblxudmFyIHRva2VuaXplID0gZnVuY3Rpb24oc291cmNlQ29kZSkge1xuICB2YXIgbWF0Y2g7XG4gIHZhciB0b2tlblJlZ2V4ID0gY3JlYXRlVG9rZW5SZWdleCgpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChpc01lYW5pbmdmdWwobWF0Y2ggPSB0b2tlblJlZ2V4LmV4ZWMoc291cmNlQ29kZSlbMV0pKSB7XG4gICAgaWYgKGlzQ29tbWVudChtYXRjaCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICByZXN1bHQucHVzaChtYXRjaCk7XG4gIH1cbiAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gY29tbWVudFNpZ25hbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuXG5leHBvcnQgeyB0b2tlbml6ZSB9O1xuIiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tICcuL3BhcnNlJztcbmltcG9ydCB7IHRva2VuaXplIH0gZnJvbSAnLi90b2tlbml6ZSc7XG5cbmV4cG9ydCBjb25zdCB0b2tlbml6ZUFuZFBhcnNlID0gZnVuY3Rpb24oc291cmNlQ29kZSkge1xuICByZXR1cm4gcGFyc2UodG9rZW5pemUoc291cmNlQ29kZSkpO1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUVybExpc3QgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGVybEF0b21UeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBlcmxUeXBlcyB9IGZyb20gJy4vdHlwZXMnO1xuXG52YXIgY3JlYXRlRXJsQXRvbSA9IGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZXJsVmFsdWU6IGVybFZhbHVlLFxuICAgIHR5cGU6IGVybEF0b21UeXBlXG4gIH07XG59O1xuXG52YXIgY3JlYXRlRXJsQm9vbGVhbiA9IGZ1bmN0aW9uKGpzQm9vbGVhbikge1xuICBpZiAoanNCb29sZWFuKSB7XG4gICAgcmV0dXJuIGVybFRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybEZhbHNlO1xuICB9XG59O1xuXG52YXIgY3JlYXRlRXJsSWdub3JlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBlcmxJZ25vcmU7XG59O1xuXG52YXIgY3JlYXRlRXJsTmlsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBlcmxOaWw7XG59O1xuXG52YXIgY3JlYXRlRXJsVmFsdWUgPSBmdW5jdGlvbihqc1ZhbHVlLCBlcmxUeXBlKSB7XG4gIHJldHVybiB7XG4gICAganNWYWx1ZToganNWYWx1ZSxcbiAgICB0eXBlOiBlcmxUeXBlXG4gIH07XG59O1xuXG52YXIgY3JlYXRlRmFjdG9yeUFuZFByZWRpY2F0ZSA9IGZ1bmN0aW9uKGVybFR5cGUpIHtcbiAgdmFyIGZhY3RvcnkgPSBmdW5jdGlvbihqc1ZhbHVlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVybFZhbHVlKGpzVmFsdWUsIGVybFR5cGUpO1xuICB9O1xuICB2YXIgcHJlZGljYXRlID0gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICByZXR1cm4gZXJsVmFsdWUudHlwZSA9PT0gZXJsVHlwZTtcbiAgfTtcbiAgcmV0dXJuIFtmYWN0b3J5LCBwcmVkaWNhdGVdO1xufTtcblxudmFyIGNyZWF0ZVByZWRpY2F0ZSA9IGZ1bmN0aW9uKGNvbnN0YW50KSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gY29uc3RhbnQ7XG4gIH07XG59O1xuXG52YXIgZXh0cmFjdEpzVmFsdWUgPSBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICByZXR1cm4gZXJsVmFsdWUuanNWYWx1ZTtcbn07XG5cbnZhciBfZXJsVHlwZXMgPSBlcmxUeXBlcy5tYXAoY3JlYXRlRmFjdG9yeUFuZFByZWRpY2F0ZSk7XG5cbnZhciBfY3JlYXRlRXJsQm9vbGVhbiAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMF1bMF07XG52YXIgaXNFcmxCb29sZWFuICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzBdWzFdO1xudmFyIGNyZWF0ZUVybENvcmVFZmZlY3RmdWxGdW5jdGlvbiA9IF9lcmxUeXBlc1sxXVswXTtcbnZhciBpc0VybENvcmVFZmZlY3RmdWxGdW5jdGlvbiAgICAgPSBfZXJsVHlwZXNbMV1bMV07XG52YXIgY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbiAgICAgID0gX2VybFR5cGVzWzJdWzBdO1xudmFyIGlzRXJsQ29yZVB1cmVGdW5jdGlvbiAgICAgICAgICA9IF9lcmxUeXBlc1syXVsxXTtcbnZhciBjcmVhdGVFcmxJZGVudGlmaWVyICAgICAgICAgICAgPSBfZXJsVHlwZXNbM11bMF07XG52YXIgaXNFcmxJZGVudGlmaWVyICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzNdWzFdO1xudmFyIGNyZWF0ZUVybEluZGV4ICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s0XVswXTtcbnZhciBpc0VybEluZGV4ICAgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbNF1bMV07XG52YXIgY3JlYXRlRXJsS2V5d29yZCAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzVdWzBdO1xudmFyIGlzRXJsS2V5d29yZCAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s1XVsxXTtcbnZhciBfY3JlYXRlRXJsTGlzdCAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbNl1bMF07XG52YXIgaXNFcmxMaXN0ICAgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzZdWzFdO1xudmFyIGNyZWF0ZUVybE1hY3JvICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s3XVswXTtcbnZhciBpc0VybE1hY3JvICAgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbN11bMV07XG52YXIgY3JlYXRlRXJsTnVtYmVyICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzhdWzBdO1xudmFyIGlzRXJsTnVtYmVyICAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s4XVsxXTtcbnZhciBjcmVhdGVFcmxTcGVjaWFsRm9ybSAgICAgICAgICAgPSBfZXJsVHlwZXNbOV1bMF07XG52YXIgaXNFcmxTcGVjaWFsRm9ybSAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzldWzFdO1xudmFyIGNyZWF0ZUVybFN0cmluZyAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1sxMF1bMF07XG52YXIgaXNFcmxTdHJpbmcgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzEwXVsxXTtcbnZhciBjcmVhdGVFcmxTeW1ib2wgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTFdWzBdO1xudmFyIGlzRXJsU3ltYm9sICAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1sxMV1bMV07XG52YXIgX2NyZWF0ZUVybFVuaXQgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzEyXVswXTtcbnZhciBfaXNFcmxVbml0ICAgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTJdWzFdO1xudmFyIGNyZWF0ZUVybFVzZXJQdXJlRnVuY3Rpb24gICAgICA9IF9lcmxUeXBlc1sxM11bMF07XG52YXIgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uICAgICAgICAgID0gX2VybFR5cGVzWzEzXVsxXTtcbnZhciBfY3JlYXRlRXJsQXRvbSAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTRdWzBdO1xudmFyIGlzRXJsQXRvbSAgICAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1sxNF1bMV07XG5cbnZhciBlcmxJZ25vcmUgPSBfY3JlYXRlRXJsVW5pdChudWxsKTtcblxudmFyIGVybE5pbCA9IF9jcmVhdGVFcmxVbml0KG51bGwpO1xuXG52YXIgZXJsQm9vbGVhbnMgPSBbZmFsc2UsIHRydWVdLm1hcChfY3JlYXRlRXJsQm9vbGVhbik7XG5cbnZhciBlcmxGYWxzZSA9IGVybEJvb2xlYW5zWzBdO1xudmFyIGVybFRydWUgID0gZXJsQm9vbGVhbnNbMV07XG5cbnZhciBwcmVkaWNhdGVzID0gW2VybEZhbHNlLCBlcmxJZ25vcmUsIGVybE5pbCwgZXJsVHJ1ZV0ubWFwKGNyZWF0ZVByZWRpY2F0ZSk7XG5cbnZhciBpc0VybEZhbHNlICA9IHByZWRpY2F0ZXNbMF07XG52YXIgaXNFcmxJZ25vcmUgPSBwcmVkaWNhdGVzWzFdO1xudmFyIGlzRXJsTmlsICAgID0gcHJlZGljYXRlc1syXTtcbnZhciBpc0VybFRydWUgICA9IHByZWRpY2F0ZXNbM107XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUVybEF0b20sXG4gIGNyZWF0ZUVybEJvb2xlYW4sXG4gIGNyZWF0ZUVybENvcmVFZmZlY3RmdWxGdW5jdGlvbixcbiAgY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbixcbiAgY3JlYXRlRXJsSWRlbnRpZmllcixcbiAgY3JlYXRlRXJsSWdub3JlLFxuICBjcmVhdGVFcmxJbmRleCxcbiAgY3JlYXRlRXJsS2V5d29yZCxcbiAgY3JlYXRlRXJsTGlzdCxcbiAgY3JlYXRlRXJsTWFjcm8sXG4gIGNyZWF0ZUVybE5pbCxcbiAgY3JlYXRlRXJsTnVtYmVyLFxuICBjcmVhdGVFcmxTcGVjaWFsRm9ybSxcbiAgY3JlYXRlRXJsU3RyaW5nLFxuICBjcmVhdGVFcmxTeW1ib2wsXG4gIGNyZWF0ZUVybFVzZXJQdXJlRnVuY3Rpb24sXG4gIGV4dHJhY3RKc1ZhbHVlLFxuICBpc0VybEF0b20sXG4gIGlzRXJsQm9vbGVhbixcbiAgaXNFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24sXG4gIGlzRXJsQ29yZVB1cmVGdW5jdGlvbixcbiAgZXJsRmFsc2UsXG4gIGlzRXJsRmFsc2UsXG4gIGlzRXJsSWRlbnRpZmllcixcbiAgZXJsSWdub3JlLFxuICBpc0VybElnbm9yZSxcbiAgaXNFcmxJbmRleCxcbiAgaXNFcmxLZXl3b3JkLFxuICBpc0VybExpc3QsXG4gIGlzRXJsTWFjcm8sXG4gIGVybE5pbCxcbiAgaXNFcmxOaWwsXG4gIGlzRXJsTnVtYmVyLFxuICBpc0VybFNwZWNpYWxGb3JtLFxuICBpc0VybFN0cmluZyxcbiAgaXNFcmxTeW1ib2wsXG4gIGVybFRydWUsXG4gIGlzRXJsVHJ1ZSxcbiAgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uXG59O1xuIiwidmFyIGVybEJvb2xlYW5UeXBlICAgICAgICAgICAgICAgPSAnZXJsQm9vbGVhblR5cGUnO1xudmFyIGVybENvcmVFZmZlY3RmdWxGdW5jdGlvblR5cGUgPSAnZXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uVHlwZSc7XG52YXIgZXJsQ29yZVB1cmVGdW5jdGlvblR5cGUgICAgICA9ICdlcmxDb3JlUHVyZUZ1bmN0aW9uVHlwZSc7XG52YXIgZXJsSWRlbnRpZmllclR5cGUgICAgICAgICAgICA9ICdlcmxJZGVudGlmaWVyVHlwZSc7XG52YXIgZXJsSW5kZXhUeXBlICAgICAgICAgICAgICAgICA9ICdlcmxJbmRleFR5cGUnO1xudmFyIGVybEtleXdvcmRUeXBlICAgICAgICAgICAgICAgPSAnZXJsS2V5d29yZFR5cGUnO1xudmFyIGVybExpc3RUeXBlICAgICAgICAgICAgICAgICAgPSAnZXJsTGlzdFR5cGUnO1xudmFyIGVybE1hY3JvVHlwZSAgICAgICAgICAgICAgICAgPSAnZXJsTWFjcm9UeXBlJztcbnZhciBlcmxOdW1iZXJUeXBlICAgICAgICAgICAgICAgID0gJ2VybE51bWJlclR5cGUnO1xudmFyIGVybFNwZWNpYWxGb3JtVHlwZSAgICAgICAgICAgPSAnZXJsU3BlY2lhbEZvcm1UeXBlJztcbnZhciBlcmxTdHJpbmdUeXBlICAgICAgICAgICAgICAgID0gJ2VybFN0cmluZ1R5cGUnO1xudmFyIGVybFN5bWJvbFR5cGUgICAgICAgICAgICAgICAgPSAnZXJsU3ltYm9sVHlwZSc7XG52YXIgZXJsVW5pdFR5cGUgICAgICAgICAgICAgICAgICA9ICdlcmxVbml0VHlwZSc7XG52YXIgZXJsVXNlclB1cmVGdW5jdGlvblR5cGUgICAgICA9ICdlcmxVc2VyUHVyZUZ1bmN0aW9uVHlwZSc7XG52YXIgZXJsQXRvbVR5cGUgICAgICAgICAgICAgICAgICA9ICdlcmxBdG9tVHlwZSc7XG5cbnZhciBlcmxUeXBlcyA9IFtcbiAgZXJsQm9vbGVhblR5cGUsXG4gIGVybENvcmVFZmZlY3RmdWxGdW5jdGlvblR5cGUsXG4gIGVybENvcmVQdXJlRnVuY3Rpb25UeXBlLFxuICBlcmxJZGVudGlmaWVyVHlwZSxcbiAgZXJsSW5kZXhUeXBlLFxuICBlcmxLZXl3b3JkVHlwZSxcbiAgZXJsTGlzdFR5cGUsXG4gIGVybE1hY3JvVHlwZSxcbiAgZXJsTnVtYmVyVHlwZSxcbiAgZXJsU3BlY2lhbEZvcm1UeXBlLFxuICBlcmxTdHJpbmdUeXBlLFxuICBlcmxTeW1ib2xUeXBlLFxuICBlcmxVbml0VHlwZSxcbiAgZXJsVXNlclB1cmVGdW5jdGlvblR5cGUsXG4gIGVybEF0b21UeXBlXG5dO1xuXG5leHBvcnQge1xuICBlcmxBdG9tVHlwZSxcbiAgZXJsQm9vbGVhblR5cGUsXG4gIGVybENvcmVFZmZlY3RmdWxGdW5jdGlvblR5cGUsXG4gIGVybENvcmVQdXJlRnVuY3Rpb25UeXBlLFxuICBlcmxJZGVudGlmaWVyVHlwZSxcbiAgZXJsSW5kZXhUeXBlLFxuICBlcmxLZXl3b3JkVHlwZSxcbiAgZXJsTGlzdFR5cGUsXG4gIGVybE1hY3JvVHlwZSxcbiAgZXJsTnVtYmVyVHlwZSxcbiAgZXJsU3BlY2lhbEZvcm1UeXBlLFxuICBlcmxTdHJpbmdUeXBlLFxuICBlcmxTeW1ib2xUeXBlLFxuICBlcmxUeXBlcyxcbiAgZXJsVW5pdFR5cGUsXG4gIGVybFVzZXJQdXJlRnVuY3Rpb25UeXBlXG59O1xuIiwiZnVuY3Rpb24gZGlmZkFycmF5KHZhbHVlMSwgdmFsdWUwLCBpbmRleCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUwKSkge1xuICAgIHJldHVybiB7IHRyZWU6IGluZGV4LCBjb21tYW5kczogW1sncmVwbGFjZScsIHZhbHVlMV1dLCBpbmRleDogaW5kZXggKyAxIH07XG4gIH1cblxuICB2YXIgY291bnQgPSAwO1xuICB2YXIgbGVuZ3RoMSA9IHZhbHVlMS5sZW5ndGg7XG4gIHZhciBsZW5ndGgwID0gdmFsdWUwLmxlbmd0aDtcbiAgdmFyIG1pbkxlbmd0aCA9IE1hdGgubWluKGxlbmd0aDEsIGxlbmd0aDApO1xuXG4gIGlmIChtaW5MZW5ndGggPiAxKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBtaW5MZW5ndGg7IGorKykge1xuICAgICAgaWYgKHZhbHVlMVtqXSAhPT0gdmFsdWUwW2pdKSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvdW50ID09PSBtaW5MZW5ndGgpIHtcbiAgICAgIHJldHVybiB7IHRyZWU6IGluZGV4LCBjb21tYW5kczogW1sncmVwbGFjZScsIHZhbHVlMV1dLCBpbmRleDogaW5kZXggKyAxIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIGkgPSAwO1xuICB2YXIgdHJlZSA9IFtdO1xuICB2YXIgY29tbWFuZHMgPSBbXTtcblxuICBmb3IgKDsgaSA8IG1pbkxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHZhbHVlMVtpXSAhPT0gdmFsdWUwW2ldKSB7XG4gICAgICB2YXIgX3BhdGNoID0gX2RpZmYodmFsdWUxW2ldLCB2YWx1ZTBbaV0sIGluZGV4KTtcbiAgICAgIGlmIChfcGF0Y2guY29tbWFuZHMubGVuZ3RoID4gMCkge1xuICAgICAgICB0cmVlLnB1c2goeyBpbmRleDogaSwgdmFsdWU6IF9wYXRjaC50cmVlIH0pO1xuICAgICAgICBjb21tYW5kcyA9IGNvbW1hbmRzLmNvbmNhdChfcGF0Y2guY29tbWFuZHMpO1xuICAgICAgICBpbmRleCA9IGluZGV4ICsgX3BhdGNoLmNvbW1hbmRzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKDsgaSA8IGxlbmd0aDE7IGkrKykge1xuICAgIHRyZWUucHVzaCh7IGluZGV4OiBpLCB2YWx1ZTogaW5kZXggfSk7XG4gICAgY29tbWFuZHMucHVzaChbJ2luc2VydEF0RW5kJywgdmFsdWUxW2ldXSk7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIHZhciByZW1vdmFscyA9IFtdO1xuXG4gIGZvciAoOyBpIDwgbGVuZ3RoMDsgaSsrKSB7XG4gICAgcmVtb3ZhbHMudW5zaGlmdCh7IGluZGV4OiBpLCB2YWx1ZTogaW5kZXggfSk7XG4gICAgY29tbWFuZHMucHVzaChbJ3JlbW92ZSddKTtcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgdHJlZSA9IHRyZWUuY29uY2F0KHJlbW92YWxzKTtcblxuICByZXR1cm4geyB0cmVlOiB0cmVlLCBjb21tYW5kczogY29tbWFuZHMsIGluZGV4OiBpbmRleCB9O1xufVxuXG5mdW5jdGlvbiBkaWZmT2JqZWN0KHZhbHVlMSwgdmFsdWUwLCBpbmRleCkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlMCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJlZTogaW5kZXgsXG4gICAgICBjb21tYW5kczogW1sncmVwbGFjZScsIHZhbHVlMV1dLFxuICAgICAgaW5kZXg6IGluZGV4ICsgMVxuICAgIH07XG4gIH1cblxuICB2YXIga2V5Q291bnQgPSAwO1xuICB2YXIgZGlmZkNvdW50ID0gMDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUwKSB7XG4gICAgaWYgKCF2YWx1ZTAuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XG4gICAga2V5Q291bnQrKztcbiAgICBpZiAoIXZhbHVlMS5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IHZhbHVlMVtrZXldICE9PSB2YWx1ZTBba2V5XSkge1xuICAgICAgZGlmZkNvdW50Kys7XG4gICAgfVxuICB9XG5cbiAgaWYgKGtleUNvdW50ID4gMSAmJiBrZXlDb3VudCA9PT0gZGlmZkNvdW50KSB7XG4gICAgcmV0dXJuIHsgdHJlZTogaW5kZXgsIGNvbW1hbmRzOiBbWydyZXBsYWNlJywgdmFsdWUxXV0sIGluZGV4OiBpbmRleCArIDEgfTtcbiAgfVxuXG4gIHZhciB0cmVlID0gW107XG4gIHZhciBjb21tYW5kcyA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZTEpIHtcbiAgICBpZiAoIXZhbHVlMS5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcbiAgICBpZiAodmFsdWUwLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGlmICh2YWx1ZTFba2V5XSAhPT0gdmFsdWUwW2tleV0pIHtcbiAgICAgICAgdmFyIF9wYXRjaCA9IF9kaWZmKHZhbHVlMVtrZXldLCB2YWx1ZTBba2V5XSwgaW5kZXgpO1xuICAgICAgICBpZiAoX3BhdGNoLmNvbW1hbmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0cmVlLnB1c2goeyBpbmRleDoga2V5LCB2YWx1ZTogX3BhdGNoLnRyZWUgfSk7XG4gICAgICAgICAgY29tbWFuZHMgPSBjb21tYW5kcy5jb25jYXQoX3BhdGNoLmNvbW1hbmRzKTtcbiAgICAgICAgICBpbmRleCA9IGluZGV4ICsgX3BhdGNoLmNvbW1hbmRzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmVlLnB1c2goeyBpbmRleDoga2V5LCB2YWx1ZTogaW5kZXggfSk7XG4gICAgICBjb21tYW5kcy5wdXNoKFsnc2V0QXRLZXknLCB2YWx1ZTFba2V5XV0pO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUwKSB7XG4gICAgaWYgKCF2YWx1ZTEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdHJlZS5wdXNoKHsgaW5kZXg6IGtleSwgdmFsdWU6IGluZGV4IH0pO1xuICAgICAgY29tbWFuZHMucHVzaChbJ2RlbGV0ZSddKTtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgdHJlZTogdHJlZSwgY29tbWFuZHM6IGNvbW1hbmRzLCBpbmRleDogaW5kZXggfTtcbn1cblxuZnVuY3Rpb24gX2RpZmYodmFsdWUxLCB2YWx1ZTAsIGluZGV4KSB7XG4gIGlmICh2YWx1ZTEgPT09IHZhbHVlMCkge1xuICAgIHJldHVybiB7IHRyZWU6IFtdLCBjb21tYW5kczogW10sIGluZGV4OiBpbmRleCB9O1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUxKSkge1xuICAgIHJldHVybiBkaWZmQXJyYXkodmFsdWUxLCB2YWx1ZTAsIGluZGV4KTtcbiAgfVxuXG4gIGlmIChpc09iamVjdCh2YWx1ZTEpKSB7XG4gICAgcmV0dXJuIGRpZmZPYmplY3QodmFsdWUxLCB2YWx1ZTAsIGluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB7IHRyZWU6IGluZGV4LCBjb21tYW5kczogW1sncmVwbGFjZScsIHZhbHVlMV1dLCBpbmRleDogaW5kZXggKyAxIH07XG59XG5cbnZhciBkaWZmID0gZnVuY3Rpb24odmFsdWUxLCB2YWx1ZTApIHtcbiAgdmFyIHBhdGNoID0gX2RpZmYodmFsdWUxLCB2YWx1ZTAsIDApO1xuICByZXR1cm4geyB2YWx1ZTogcGF0Y2gudHJlZSwgY29tbWFuZHM6IHBhdGNoLmNvbW1hbmRzIH07XG59O1xuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG5leHBvcnQgeyBkaWZmIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZykge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHZhciBlbGVtZW50ID0geyB0YWc6IHRhZyB9O1xuXG4gICAgaWYgKGNvbmZpZyAhPSBudWxsKSB7IC8vIGlzT2JqZWN0XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBjb25maWcpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ2lkJykge1xuICAgICAgICAgIGVsZW1lbnQuaWQgPSBjb25maWcuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09PSAnY2xhc3NlcycpIHtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzZXMgPSBjb25maWcuY2xhc3NlcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlID0gY29uZmlnLnN0eWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ2F0dHJpYnMnKSB7XG4gICAgICAgICAgZWxlbWVudC5hdHRyaWJzID0gY29uZmlnLmF0dHJpYnM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgaXNTdHJpbmcoYXJnc1swXSkpIHtcbiAgICAgICAgZWxlbWVudC5jaGlsZHJlbiA9IGFyZ3NbMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmNoaWxkcmVuID0gW10uY29uY2F0LmFwcGx5KFtdLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBTdHJpbmddJztcbn1cblxudmFyIHRhZ3MgPSB7XG4gICdBJzogdHJ1ZSxcbiAgJ0JVVFRPTic6IHRydWUsXG4gICdDQU5WQVMnOiB0cnVlLFxuICAnQ09ERSc6IHRydWUsXG4gICdESVYnOiB0cnVlLFxuICAnRk9PVEVSJzogdHJ1ZSxcbiAgJ0ZPUk0nOiB0cnVlLFxuICAnSDEnOiB0cnVlLFxuICAnSDInOiB0cnVlLFxuICAnSDMnOiB0cnVlLFxuICAnSDQnOiB0cnVlLFxuICAnSDUnOiB0cnVlLFxuICAnSDYnOiB0cnVlLFxuICAnSEVBREVSJzogdHJ1ZSxcbiAgJ0lNRyc6IHRydWUsXG4gICdMQUJFTCc6IHRydWUsXG4gICdMSSc6IHRydWUsXG4gICdMSU5LJzogdHJ1ZSxcbiAgJ05BVic6IHRydWUsXG4gICdOT1NDUklQVCc6IHRydWUsXG4gICdPUFRHUk9VUCc6IHRydWUsXG4gICdPUFRJT04nOiB0cnVlLFxuICAnT1VUUFVUJzogdHJ1ZSxcbiAgJ1AnOiB0cnVlLFxuICAnUEFSQU0nOiB0cnVlLFxuICAnUFJFJzogdHJ1ZSxcbiAgJ1NDUklQVCc6IHRydWUsXG4gICdTRUNUSU9OJzogdHJ1ZSxcbiAgJ1NFTEVDVCc6IHRydWUsXG4gICdTT1VSQ0UnOiB0cnVlLFxuICAnU1BBTic6IHRydWUsXG4gICdTVFlMRSc6IHRydWUsXG4gICdURVhUQVJFQSc6IHRydWVcbn07XG5cbnZhciBlbGVtZW50RmFjdG9yaWVzID0ge307XG5cbmZvciAodmFyIHRhZ05hbWUgaW4gdGFncykge1xuICBlbGVtZW50RmFjdG9yaWVzW3RhZ05hbWVdID0gY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbn1cblxuZXhwb3J0IGNvbnN0IEEgPSBlbGVtZW50RmFjdG9yaWVzLkE7XG5leHBvcnQgY29uc3QgQlVUVE9OID0gZWxlbWVudEZhY3Rvcmllcy5CVVRUT047XG5leHBvcnQgY29uc3QgQ0FOVkFTID0gZWxlbWVudEZhY3Rvcmllcy5DQU5WQVM7XG5leHBvcnQgY29uc3QgQ09ERSA9IGVsZW1lbnRGYWN0b3JpZXMuQ09ERTtcbmV4cG9ydCBjb25zdCBESVYgPSBlbGVtZW50RmFjdG9yaWVzLkRJVjtcbmV4cG9ydCBjb25zdCBGT09URVIgPSBlbGVtZW50RmFjdG9yaWVzLkZPT1RFUjtcbmV4cG9ydCBjb25zdCBGT1JNID0gZWxlbWVudEZhY3Rvcmllcy5GT1JNO1xuZXhwb3J0IGNvbnN0IEgxID0gZWxlbWVudEZhY3Rvcmllcy5IMTtcbmV4cG9ydCBjb25zdCBIMiA9IGVsZW1lbnRGYWN0b3JpZXMuSDI7XG5leHBvcnQgY29uc3QgSDMgPSBlbGVtZW50RmFjdG9yaWVzLkgzO1xuZXhwb3J0IGNvbnN0IEg0ID0gZWxlbWVudEZhY3Rvcmllcy5INDtcbmV4cG9ydCBjb25zdCBINSA9IGVsZW1lbnRGYWN0b3JpZXMuSDU7XG5leHBvcnQgY29uc3QgSDYgPSBlbGVtZW50RmFjdG9yaWVzLkg2O1xuZXhwb3J0IGNvbnN0IEhFQURFUiA9IGVsZW1lbnRGYWN0b3JpZXMuSEVBREVSO1xuZXhwb3J0IGNvbnN0IElNRyA9IGVsZW1lbnRGYWN0b3JpZXMuSU1HO1xuZXhwb3J0IGNvbnN0IExBQkVMID0gZWxlbWVudEZhY3Rvcmllcy5MQUJFTDtcbmV4cG9ydCBjb25zdCBMSSA9IGVsZW1lbnRGYWN0b3JpZXMuTEk7XG5leHBvcnQgY29uc3QgTElOSyA9IGVsZW1lbnRGYWN0b3JpZXMuTElOSztcbmV4cG9ydCBjb25zdCBOQVYgPSBlbGVtZW50RmFjdG9yaWVzLk5BVjtcbmV4cG9ydCBjb25zdCBOT1NDUklQVCA9IGVsZW1lbnRGYWN0b3JpZXMuTk9TQ1JJUFQ7XG5leHBvcnQgY29uc3QgT1BUR1JPVVAgPSBlbGVtZW50RmFjdG9yaWVzLk9QVEdST1VQO1xuZXhwb3J0IGNvbnN0IE9QVElPTiA9IGVsZW1lbnRGYWN0b3JpZXMuT1BUSU9OO1xuZXhwb3J0IGNvbnN0IE9VVFBVVCA9IGVsZW1lbnRGYWN0b3JpZXMuT1VUUFVUO1xuZXhwb3J0IGNvbnN0IFAgPSBlbGVtZW50RmFjdG9yaWVzLlA7XG5leHBvcnQgY29uc3QgUEFSQU0gPSBlbGVtZW50RmFjdG9yaWVzLlBBUkFNO1xuZXhwb3J0IGNvbnN0IFBSRSA9IGVsZW1lbnRGYWN0b3JpZXMuUFJFO1xuZXhwb3J0IGNvbnN0IFNDUklQVCA9IGVsZW1lbnRGYWN0b3JpZXMuU0NSSVBUO1xuZXhwb3J0IGNvbnN0IFNFQ1RJT04gPSBlbGVtZW50RmFjdG9yaWVzLlNFQ1RJT047XG5leHBvcnQgY29uc3QgU0VMRUNUID0gZWxlbWVudEZhY3Rvcmllcy5TRUxFQ1Q7XG5leHBvcnQgY29uc3QgU09VUkNFID0gZWxlbWVudEZhY3Rvcmllcy5TT1VSQ0U7XG5leHBvcnQgY29uc3QgU1BBTiA9IGVsZW1lbnRGYWN0b3JpZXMuU1BBTjtcbmV4cG9ydCBjb25zdCBTVFlMRSA9IGVsZW1lbnRGYWN0b3JpZXMuU1RZTEU7XG5leHBvcnQgY29uc3QgVEVYVEFSRUEgPSBlbGVtZW50RmFjdG9yaWVzLlRFWFRBUkVBO1xuIiwiZnVuY3Rpb24gYXR0YWNoRWxlbWVudChwYXJlbnQsIGVsZW1lbnQpIHtcbiAgaWYgKGlzU3RyaW5nKGVsZW1lbnQpKSB7XG4gICAgcGFyZW50LmlubmVyVGV4dCA9IGVsZW1lbnQ7IC8vID9cbiAgfSBlbHNlIHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQocGFyZW50LCBuZXdFbGVtZW50LCBvbGRFbGVtZW50KSB7XG4gIGlmIChpc1N0cmluZyhuZXdFbGVtZW50KSkge1xuICAgIHBhcmVudC5pbm5lclRleHQgPSBuZXdFbGVtZW50OyAvLyA/XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50LnJlcGxhY2VDaGlsZChuZXdFbGVtZW50LCBvbGRFbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRBdHRhY2hFbGVtZW50KHBhcmVudCwgY29uZmlnKSB7XG4gIGF0dGFjaEVsZW1lbnQocGFyZW50LCBjcmVhdGVFbGVtZW50KGNvbmZpZykpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRTdWJzdGl0dXRlRWxlbWVudChwYXJlbnQsIGNvbmZpZywgb2xkRWxlbWVudEluZGV4KSB7XG4gIHJlcGxhY2VFbGVtZW50KFxuICAgIHBhcmVudCxcbiAgICBjcmVhdGVFbGVtZW50KGNvbmZpZyksXG4gICAgZmluZENoaWxkKHBhcmVudCwgeyBtb2RlOiAnaW5kZXgnLCBrZXk6IG9sZEVsZW1lbnRJbmRleCB9KSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnRzKG5vZGUsIGVsZW1lbnRzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBjcmVhdGVBbmRBdHRhY2hFbGVtZW50KG5vZGUsIGVsZW1lbnRzW2ldKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGNvbmZpZykge1xuICBpZiAoaXNTdHJpbmcoY29uZmlnKSkge1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cbiAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNvbmZpZy50YWcpO1xuICBpZiAoY29uZmlnLmlkICE9IG51bGwpIHtcbiAgICBub2RlLmlkID0gY29uZmlnLmlkO1xuICB9XG4gIGlmIChjb25maWcuY2xhc3NlcyAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2xhc3MgaW4gY29uZmlnLmNsYXNzZXMpIHtcbiAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChrbGFzcyk7XG4gICAgfVxuICB9XG4gIGlmIChjb25maWcuYXR0cmlicyAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIgYXR0cmliS2V5IGluIGNvbmZpZy5hdHRyaWJzKSB7XG4gICAgICBpZiAoYXR0cmliS2V5ICE9PSAnc3R5bGUnKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYktleSwgY29uZmlnLmF0dHJpYnNbYXR0cmliS2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChjb25maWcuc3R5bGUgIT0gbnVsbCkge1xuICAgIGZvciAodmFyIHN0eWxlS2V5IGluIGNvbmZpZy5zdHlsZSkge1xuICAgICAgbm9kZS5zdHlsZVtzdHlsZUtleV0gPSBjb25maWcuc3R5bGVbc3R5bGVLZXldO1xuICAgIH1cbiAgfVxuICBpZiAoY29uZmlnLmNoaWxkcmVuICE9IG51bGwpIHtcbiAgICBpZiAoaXNTdHJpbmcoY29uZmlnLmNoaWxkcmVuKSkge1xuICAgICAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudChub2RlLCBjb25maWcuY2hpbGRyZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAobmV3Q29uZmlnLCBpbmRleCkgeyBcbiAgICAgICAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudChub2RlLCBuZXdDb25maWcpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBmaW5kQ2hpbGQocGFyZW50LCBjb25maWcpIHtcbiAgc3dpdGNoIChjb25maWcubW9kZSkge1xuICAgIGNhc2UgJ2lkJzpcbiAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcua2V5KTtcbiAgICBjYXNlICdjbGFzcyc6XG4gICAgICByZXR1cm4gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY29uZmlnLmtleS5jbGFzcylbY29uZmlnLmtleS5pbmRleF07XG4gICAgY2FzZSAndGFnJzpcbiAgICAgIHJldHVybiBwYXJlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoY29uZmlnLmtleS50YWcpW2NvbmZpZy5rZXkuaW5kZXhdO1xuICAgIGNhc2UgJ3F1ZXJ5JzpcbiAgICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChjb25maWcua2V5LnF1ZXJ5KVtjb25maWcua2V5LmluZGV4XTtcbiAgICBjYXNlICdpbmRleCc6XG4gICAgICByZXR1cm4gcGFyZW50LmNoaWxkTm9kZXNbY29uZmlnLmtleV07XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcXFwiZmluZENoaWxkXFxcIiBtb2RlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZENoaWxkcmVuKHBhcmVudCwgY29uZmlnKSB7XG4gIHZhciBodG1sQ29sbGVjdGlvbjtcbiAgc3dpdGNoIChjb25maWcubW9kZSkge1xuICAgIGNhc2UgJ2NsYXNzJzpcbiAgICAgIGh0bWxDb2xsZWN0aW9uID0gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY29uZmlnLmtleS5jbGFzcyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0YWcnOlxuICAgICAgaHRtbENvbGxlY3Rpb24gPSBwYXJlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoY29uZmlnLmtleS50YWcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncXVlcnknOlxuICAgICAgaHRtbENvbGxlY3Rpb24gPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChjb25maWcua2V5LnF1ZXJ5KTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXFxcImZpbmRDaGlsZFxcXCIgbW9kZScpO1xuICB9XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChodG1sQ29sbGVjdGlvbik7XG59XG5cbmZ1bmN0aW9uIGlzQ29tbWFuZEluZGV4KHZhbHVlKSB7XG4gIHJldHVybiBpc051bWJlcih2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59XG5cbmZ1bmN0aW9uIG1vZGlmeUVsZW1lbnQobm9kZSwgcGF0Y2gpIHtcbiAgX21vZGlmeUVsZW1lbnQobm9kZSwgcGF0Y2gudmFsdWUsIHBhdGNoLmNvbW1hbmRzKTtcbn1cblxuZnVuY3Rpb24gX21vZGlmeUVsZW1lbnQobm9kZSwgdHJlZSwgY29tbWFuZHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IHRyZWVbaV0uaW5kZXg7XG4gICAgdmFyIGNvbnRpbnVhdGlvbiA9IHRyZWVbaV0udmFsdWU7XG5cbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSAnaWQnOlxuICAgICAgICB2YXIgY29tbWFuZCA9IGNvbW1hbmRzW2NvbnRpbnVhdGlvbl07XG4gICAgICAgIHN3aXRjaCAoY29tbWFuZFswXSkge1xuICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAgIGNhc2UgJ3NldEF0S2V5JzpcbiAgICAgICAgICAgIG5vZGUuaWQgPSBjb21tYW5kWzFdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3RhZyc6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgIGZvciAodmFyIHN0eWxlSW5kZXggPSAwOyBzdHlsZUluZGV4IDwgY29udGludWF0aW9uLmxlbmd0aDsgc3R5bGVJbmRleCsrKSB7XG4gICAgICAgICAgdmFyIHN0eWxlID0gY29udGludWF0aW9uW3N0eWxlSW5kZXhdLmluZGV4O1xuICAgICAgICAgIHZhciBjb21tYW5kID0gY29tbWFuZHNbY29udGludWF0aW9uW3N0eWxlSW5kZXhdLnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmRbMF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICAgIG5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoc3R5bGUpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAgICAgY2FzZSAnc2V0QXRLZXknOlxuICAgICAgICAgICAgICBub2RlLnN0eWxlW3N0eWxlXSA9IGNvbW1hbmRbMV07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnYXR0cmlicyc6XG4gICAgICAgIGZvciAodmFyIGF0dHJpYkluZGV4ID0gMDsgYXR0cmliSW5kZXggPCBjb250aW51YXRpb24ubGVuZ3RoOyBhdHRyaWJJbmRleCsrKSB7XG4gICAgICAgICAgdmFyIGF0dHJpYiA9IGNvbnRpbnVhdGlvblthdHRyaWJJbmRleF0uaW5kZXg7XG4gICAgICAgICAgdmFyIGNvbW1hbmQgPSBjb21tYW5kc1tjb250aW51YXRpb25bYXR0cmliSW5kZXhdLnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmRbMF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICAgIG5vZGUuYXR0cmlidXRlcy5yZW1vdmVOYW1lZEl0ZW0oYXR0cmliKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgICAgIGNhc2UgJ3NldEF0S2V5JzpcbiAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmliLCBjb21tYW5kWzFdKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjbGFzc2VzJzpcbiAgICAgICAgaWYgKGlzQ29tbWFuZEluZGV4KGNvbnRpbnVhdGlvbikpIHtcbiAgICAgICAgICB2YXIgY29tbWFuZCA9IGNvbW1hbmRzWzBdO1xuICAgICAgICAgIHN3aXRjaCAoY29tbWFuZFswXSkge1xuICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgICAgZm9yICh2YXIgX2NsYXNzIGluIGNvbW1hbmRbMV0pIHtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoX2NsYXNzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NldEF0S2V5JzpcbiAgICAgICAgICAgICAgZm9yICh2YXIgX2NsYXNzIGluIGNvbW1hbmRbMV0pIHtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoX2NsYXNzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yICh2YXIgY2xhc3NJbmRleCA9IDA7IGNsYXNzSW5kZXggPCBjb250aW51YXRpb24ubGVuZ3RoOyBjbGFzc0luZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBfY2xhc3MgPSBjb250aW51YXRpb25bY2xhc3NJbmRleF0uaW5kZXg7XG4gICAgICAgICAgICB2YXIgY29tbWFuZCA9IGNvbW1hbmRzW2NvbnRpbnVhdGlvbltjbGFzc0luZGV4XS52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmRbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoX2NsYXNzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnc2V0QXRLZXknOlxuICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChfY2xhc3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnY2hpbGRyZW4nOlxuICAgICAgICBpZiAoaXNDb21tYW5kSW5kZXgoY29udGludWF0aW9uKSkge1xuICAgICAgICAgIHZhciBjb21tYW5kID0gY29tbWFuZHNbY29udGludWF0aW9uXVxuICAgICAgICAgIHN3aXRjaCAoY29tbWFuZFswXSkge1xuICAgICAgICAgICAgY2FzZSAncmVtb3ZlJzpcbiAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGRyZW4obm9kZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVwbGFjZSc6ICAgICAvLyA/XG4gICAgICAgICAgICAgIGlmIChpc1N0cmluZyhjb21tYW5kWzFdKSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICBub2RlLmlubmVyVGV4dCA9IGNvbW1hbmRbMV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJUZXh0ID0gY29tbWFuZFsxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGRyZW4obm9kZSk7XG4gICAgICAgICAgICAgICAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudHMobm9kZSwgY29tbWFuZFsxXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpbnNlcnRBdEVuZCc6XG4gICAgICAgICAgICAgIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQobm9kZSwgY29tbWFuZFsxXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKHZhciBjaGlsZEluZGV4ID0gMDsgY2hpbGRJbmRleCA8IGNvbnRpbnVhdGlvbi5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gY29udGludWF0aW9uW2NoaWxkSW5kZXhdLmluZGV4O1xuICAgICAgICAgICAgdmFyIGNoaWxkQ29udGludWF0aW9uID0gY29udGludWF0aW9uW2NoaWxkSW5kZXhdLnZhbHVlO1xuICAgICAgICAgICAgaWYgKGlzQ29tbWFuZEluZGV4KGNoaWxkQ29udGludWF0aW9uKSkge1xuICAgICAgICAgICAgICB2YXIgY29tbWFuZCA9IGNvbW1hbmRzW2NoaWxkQ29udGludWF0aW9uXVxuICAgICAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmRbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdyZW1vdmUnOlxuICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2hpbGQobm9kZSwgY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncmVwbGFjZSc6XG4gICAgICAgICAgICAgICAgICBjcmVhdGVBbmRTdWJzdGl0dXRlRWxlbWVudChub2RlLCBjb21tYW5kWzFdLCBjaGlsZCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdpbnNlcnRBdEVuZCc6XG4gICAgICAgICAgICAgICAgICBjcmVhdGVBbmRBdHRhY2hFbGVtZW50KG5vZGUsIGNvbW1hbmRbMV0pO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF9tb2RpZnlFbGVtZW50KG5vZGUuY2hpbGROb2Rlc1tjaGlsZF0sIGNoaWxkQ29udGludWF0aW9uLCBjb21tYW5kcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZChub2RlLCBjaGlsZEluZGV4KSB7XG4gIHJlbW92ZU5vZGUoZmluZENoaWxkKG5vZGUsIHsgbW9kZTogJ2luZGV4Jywga2V5OiBjaGlsZEluZGV4IH0pKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4obm9kZSkge1xuICB2YXIgY2hpbGRDb3VudCA9IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSBjaGlsZENvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUuY2hpbGROb2Rlc1tpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XG4gIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudCxcbiAgbW9kaWZ5RWxlbWVudFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=