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
    _erlkingConfig,
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

var _erlkingConfig = {
  id: 'erlking',
  classes: { 'erlking': true, 'container': true }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2dldEFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2dldEtleUNob3JkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbnRyb2wvY2hhcnMvaW50ZXJwcmV0S2V5ZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb250cm9sL2NoYXJzL2tleUNvZGVDaGFydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29udHJvbC9jaGFycy9rZXlJZGVudGlmaWVyQ2hhcnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbnRyb2wvZ2V0Vmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29udHJvbC9pbml0aWFsaXplQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9kZXRlY3RDc3NTY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvaW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy9mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy90ZXJtaW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvYWN0aW9ucy92aWV3cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvZ2V0SW5pdGlhbE1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL21vZGVscy90eXBlcy9jcmVhdGVGcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvdHlwZXMvY3JlYXRlUHJvbXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL21vZGVscy90eXBlcy9jcmVhdGVUZXJtaW5hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9tb2RlbHMvdHlwZXMvY3JlYXRlVmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL3N1YnNjcmliZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvdmlldy9pbml0aWFsaXplVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L3JlY3JlYXRlQ29uc29sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS92aWV3L3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdGlhbGl6ZUVybGtvbmlnTGlzcENvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvX3Byb2Nlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvY29tbWVudFNpZ25hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9lbnYtdXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2VudjAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvZW52MS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9lbnYyLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2VudjMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvZW52NC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9ldmFsdWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9nZXRMaXNwRW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvaW5kZXgtdXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2ludGVycHJldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9qcy11dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3Ava2V5VG9rZW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL2xpbmtlZC1saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3BhcnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3NlcmlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlzcC9zdGFuZGFyZC1mbnMtYW5kLW1hY3Jvcy5saXNwIiwid2VicGFjazovLy8uL3NyYy9saXNwL3Rva2VuaXplLmpzIiwid2VicGFjazovLy8uL3NyYy9saXNwL3Rva2VuaXplQW5kUGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvdHlwZS11dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3AvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JpYm9zb21lL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JpYm9zb21lL2VsZW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9yaWJvc29tZS9pbnRlcnByZXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixJQUFJLEtBQUs7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRXFCOzs7Ozs7Ozs7Ozs7O0FDcEdyQjtBQUFBO0FBQUE7QUFBQTtBQUFnRDtBQUNZOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsNkJBQTZCLHdFQUFtQjtBQUNoRCxHQUFHO0FBQ0g7QUFDQSw2QkFBNkIsNERBQWE7QUFDMUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFdUI7Ozs7Ozs7Ozs7Ozs7QUNsRHZCO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ0k7O0FBRTVDO0FBQ0EsU0FBUyw0REFBUyxDQUFDLGdFQUFXO0FBQzlCOztBQUU0Qjs7Ozs7Ozs7Ozs7OztBQ1A1QjtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7QUN2SHpCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSw4REFBRztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILGtCQUFrQiw4REFBRztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSw4REFBRztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNkRBQVM7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLHNCQUFzQjtBQUN0Qix1QkFBdUIsV0FBVztBQUNsQywwQkFBMEIsV0FBVzs7QUFFbEI7Ozs7Ozs7Ozs7Ozs7QUN4SW5CO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7QUNwTGxCO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ0o7QUFDQTs7QUFFOUMsa0JBQWtCLHlEQUFTO0FBQzNCO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBLGdCQUFnQixpRUFBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0VBQVU7QUFDVjtBQUNBO0FBQ0EsYUFBYSx5REFBUztBQUN0QjtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN0Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBZ0Q7QUFDVjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMERBQVE7QUFDMUIsOEJBQThCLDREQUFhO0FBQzNDLFdBQVcsVUFBVSxrQkFBa0I7QUFDdkMsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9COzs7Ozs7Ozs7Ozs7O0FDcEJwQjtBQUFBO0FBQUE7O0FBRXlCOzs7Ozs7Ozs7Ozs7O0FDRnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQU9FOzs7Ozs7Ozs7Ozs7O0FDL0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0Q7QUFDUztBQUNOO0FBQ0w7QUFDQztBQUNBO0FBQ1Q7QUFDUTtBQUNSO0FBQ0Q7QUFDRztBQUNBO0FBQ0w7QUFDQzs7QUFFeEM7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQSxTQUFTLHVFQUFlO0FBQ3hCO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsU0FBUyx3RUFBZ0I7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNFQUFjO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQSxTQUFTLHVFQUFlO0FBQ3hCO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxTQUFTLHVFQUFlO0FBQ3hCO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLHdFQUFnQjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0EsU0FBUyx3RUFBZ0I7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzRUFBYztBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZEQUFPO0FBQ3RCLDRCQUE0QixtRUFBbUIsR0FBRywrREFBZTtBQUNqRSxVQUFVLHVFQUFlO0FBQ3pCO0FBQ0E7QUFDQSxTQUFTLDhEQUFTO0FBQ2xCOztBQUVBO0FBQ0EsT0FBTyxnRUFBVTtBQUNqQixXQUFXLHNEQUFNO0FBQ2pCO0FBQ0EsU0FBUyx1RUFBZTtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0EsU0FBUyx3RUFBZ0I7QUFDekI7O0FBRUE7QUFDQTtBQUNBLFNBQVMsd0VBQWdCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsNERBQU8sb0JBQW9CLDhEQUFjO0FBQzlFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsdUVBQWU7QUFDeEI7O0FBRUE7QUFDQTtBQUNBLFNBQVMsdUVBQWU7QUFDeEI7O0FBRUE7QUFDQSxTQUFTLHVFQUFlO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQSxTQUFTLHVFQUFlO0FBQ3hCO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsU0FBUyx1RUFBZTtBQUN4Qjs7QUFFQTtBQUNBLE1BQU0sZ0VBQVU7QUFDaEI7QUFDQTtBQUNBLE9BQU8sZ0VBQVU7QUFDakIsV0FBVyxzREFBTTtBQUNqQjtBQUNBO0FBQ0EsTUFBTSw2REFBTztBQUNiLFdBQVcsc0RBQU07QUFDakIsR0FBRztBQUNILFdBQVcsdUVBQWU7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlGQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyx1RUFBZTtBQUN4QjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhEQUFTO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBCOzs7Ozs7Ozs7Ozs7O0FDaE8xQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUNMO0FBQ0E7QUFDYztBQUNYO0FBQ1U7QUFDRztBQUNTO0FBQ1g7QUFDRDtBQUNFO0FBQ0E7QUFDQTtBQUNkO0FBQ087QUFDQztBQUNIO0FBQ0M7QUFDTztBQUNSO0FBQ0Y7QUFDQTtBQUNLO0FBQ1k7QUFDVDtBQUNGO0FBQ0E7QUFDRDtBQUNDO0FBQ0Y7QUFDRztBQUNBO0FBQ0E7QUFDRjtBQUNZO0FBQ3BCO0FBQ0E7QUFDRztBQUNEO0FBQ0M7QUFDQTtBQUNIO0FBQ0c7QUFDTzs7QUFFL0M7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0EscUJBQXFCLDREQUFPO0FBQzVCO0FBQ0E7QUFDQSxTQUFTLDJEQUFNLFVBQVUsOERBQVM7QUFDbEM7O0FBRUE7QUFDQSxxQkFBcUIsbUVBQWM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBUyxlQUFlLGlFQUFTO0FBQ3pDLGFBQWEsNkRBQVE7QUFDckIsS0FBSyxVQUFVLGtFQUFVLGVBQWUsa0VBQVU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUyx3RUFBZ0I7QUFDekI7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixzRUFBYyxDQUFDLHdEQUFHO0FBQ2xDLFNBQVMsd0RBQUc7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw0REFBTztBQUNqQixZQUFZLHdEQUFHO0FBQ2YsWUFBWSx5REFBSTtBQUNoQixXQUFXLDREQUFPLENBQUMsNERBQU87QUFDMUIsU0FBUyxzRUFBYztBQUN2QjtBQUNBLFNBQVMsc0VBQWM7QUFDdkI7O0FBRUE7QUFDQSxTQUFTLHFFQUFhLENBQUMsd0RBQUc7QUFDMUI7O0FBRUE7QUFDQSxZQUFZLHdEQUFHO0FBQ2YsTUFBTSxpRUFBUztBQUNmLFdBQVcsd0RBQUc7QUFDZCxHQUFHO0FBQ0gsV0FBVyxzREFBTTtBQUNqQjtBQUNBOztBQUVBO0FBQ0EsWUFBWSx3REFBRztBQUNmLE1BQU0saUVBQVM7QUFDZixXQUFXLHdEQUFHO0FBQ2QsR0FBRztBQUNILFdBQVcsc0RBQU07QUFDakI7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiw0REFBTztBQUN4QixTQUFTLG1EQUFNO0FBQ2Y7O0FBRUE7QUFDQSxTQUFTLHFFQUFhLENBQUMsd0RBQUcsV0FBVyx5REFBSTtBQUN6Qzs7QUFFQTtBQUNBLGdCQUFnQix3REFBRztBQUNuQixPQUFPLGlFQUFTO0FBQ2hCLFdBQVcsc0RBQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHVFQUFlLENBQUMsMkRBQU0sYUFBYSx3REFBRztBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHdFQUFnQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0EsVUFBVSx3REFBRztBQUNiOztBQUVBO0FBQ0EscUJBQXFCLG1FQUFjO0FBQ25DO0FBQ0E7QUFDQSxTQUFTLHlEQUFJLENBQUMsc0VBQWM7QUFDNUI7O0FBRUE7QUFDQSxTQUFTLHdEQUFHLENBQUMsd0RBQUc7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyx5REFBUztBQUNsQjs7QUFFQTtBQUNBLHFCQUFxQixtRUFBYztBQUNuQztBQUNBO0FBQ0EsTUFBTSxzRUFBYztBQUNwQixXQUFXLHlEQUFTO0FBQ3BCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsbUVBQWM7QUFDbkM7QUFDQTtBQUNBLE1BQU0sc0VBQWM7QUFDcEI7QUFDQSxHQUFHO0FBQ0gsV0FBVyx5REFBUztBQUNwQjtBQUNBOztBQUVBO0FBQ0EsU0FBUyw0REFBUyxhQUFhLHNFQUFjLENBQUMsd0RBQUc7QUFDakQ7O0FBRUE7QUFDQSxNQUFNLDREQUFPO0FBQ2IsV0FBVyx3REFBUTtBQUNuQixHQUFHO0FBQ0gsUUFBUSw0REFBTyxDQUFDLHdEQUFHO0FBQ25CLGFBQWEsdURBQU87QUFDcEIsS0FBSztBQUNMLGFBQWEsd0RBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLHdFQUFnQixDQUFDLDZFQUFxQjtBQUMvQyxPQUFPLDZFQUFxQjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLHdEQUFHO0FBQ2YsTUFBTSxpRUFBUztBQUNmLFdBQVcseURBQUk7QUFDZixHQUFHO0FBQ0gsV0FBVyxzREFBTTtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQix3REFBRztBQUNwQjtBQUNBO0FBQ0EsR0FBRztBQUNILFdBQVcsc0RBQU07QUFDakI7QUFDQTs7QUFFQTtBQUNBLGVBQWUsd0RBQUc7QUFDbEIsTUFBTSxnRUFBUSxZQUFZLGtFQUFVO0FBQ3BDLFdBQVcsdURBQU87QUFDbEIsR0FBRztBQUNILFdBQVcsd0RBQVE7QUFDbkI7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixtRUFBYztBQUNuQztBQUNBO0FBQ0EsZUFBZSxzRUFBYztBQUM3QjtBQUNBLG1CQUFtQixZQUFZO0FBQy9CLGdCQUFnQix3REFBRztBQUNuQjtBQUNBLEdBQUc7QUFDSCxtQkFBbUIsWUFBWTtBQUMvQixnQkFBZ0Isd0RBQUc7QUFDbkI7QUFDQTtBQUNBLFNBQVMsd0RBQUc7QUFDWjs7QUFFQTtBQUNBLHFCQUFxQiw0REFBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFhO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsNERBQU87QUFDbEIsV0FBVyw0REFBUztBQUNwQixHQUFHO0FBQ0g7O0FBRUE7QUFDQSxTQUFTLHVFQUFlLENBQUMsc0VBQWdCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxzRUFBYyxDQUFDLHdEQUFHO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdUVBQWU7QUFDMUIsR0FBRztBQUNILFdBQVcsc0RBQU07QUFDakI7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixtRUFBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSx3REFBRztBQUNmLE1BQU0saUVBQVM7QUFDZixXQUFXLHdEQUFHO0FBQ2QsR0FBRztBQUNILFdBQVcsc0RBQU07QUFDakI7QUFDQTs7QUFFQTtBQUNBLFlBQVksd0RBQUc7QUFDZixNQUFNLGlFQUFTO0FBQ2YsV0FBVyw0REFBTztBQUNsQixHQUFHO0FBQ0gsV0FBVyxzREFBTTtBQUNqQjtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLG1FQUFjO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLEdBQUcsc0VBQWMsU0FBUyxzRUFBYztBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUZBQXlCO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLHNFQUFjLENBQUMsd0RBQUc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFdBQVcsc0RBQU07QUFDakI7QUFDQTs7QUFFQTtBQUNBLFNBQVMsdUVBQWUsQ0FBQyxzRUFBZ0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHdEQUFHO0FBQ3BCLE1BQU0sbUVBQVc7QUFDakIsZ0JBQWdCLHNFQUFjO0FBQzlCLFdBQVcsdUVBQWU7QUFDMUIsR0FBRztBQUNILFdBQVcsc0RBQU07QUFDakI7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixtRUFBYztBQUNuQztBQUNBO0FBQ0EsU0FBUyx5REFBSSxDQUFDLHNFQUFjO0FBQzVCOztBQUVBO0FBQ0EsaUJBQWlCLHdEQUFHO0FBQ3BCLFNBQVMsdUVBQWUsQ0FBQyxzRUFBZ0I7QUFDekM7O0FBRUE7QUFDQSxRQUFRLHdEQUFHO0FBQ1g7O0FBRUE7QUFDQSxTQUFTLHVFQUFlO0FBQ3hCOztBQUVBO0FBQ0EscUJBQXFCLG1FQUFjO0FBQ25DO0FBQ0E7QUFDQSxNQUFNLGlFQUFTO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyx1RUFBZSxDQUFDLDREQUFTLENBQUMsd0RBQUc7QUFDdEM7O0FBRUE7QUFDQSxFQUFFLHlEQUFTO0FBQ1gsRUFBRSw0REFBWTtBQUNkLEVBQUUscUVBQXFCO0FBQ3ZCLEVBQUUsMERBQVU7QUFDWixFQUFFLHlEQUFTO0FBQ1gsRUFBRSwwREFBVTtBQUNaLEVBQUUsd0RBQVE7QUFDVixFQUFFLDJEQUFXO0FBQ2IsRUFBRSwyREFBVztBQUNiLEVBQUUsMkRBQVc7QUFDYixFQUFFLHFFQUFxQjtBQUN2QixFQUFFLHlEQUFTO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBCOzs7Ozs7Ozs7Ozs7OztBQzdmMUI7QUFBQTtBQUFBO0FBQWtFOztBQUVsRSxzQkFBc0IsbUJBQU8sQ0FBQyxzREFBa0I7QUFDaEQsc0JBQXNCLG1CQUFPLENBQUMsc0RBQWtCO0FBQ2hELHNCQUFzQixtQkFBTyxDQUFDLDRDQUFhO0FBQzNDLHNCQUFzQixtQkFBTyxDQUFDLGdEQUFlOztBQUU3QyxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzRkFBOEI7QUFDdEM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFMEI7Ozs7Ozs7Ozs7Ozs7O0FDdkUxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQztBQUN5QjtBQUNaO0FBQ0U7QUFDRDtBQUNSO0FBQ087QUFDSjtBQUNQO0FBQ0U7QUFDYztBQUNQOztBQUUvQyxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMEVBQWdCLGFBQWEsc0VBQWMsQ0FBQyx3REFBRztBQUMxRDtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLHlEQUFRO0FBQ3hCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpRkFBeUI7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFMEI7Ozs7Ozs7Ozs7Ozs7QUM3QzFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2RDtBQUNuQjtBQUNRO0FBQ0Q7QUFDWDtBQUNTOztBQUUvQyxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLG1FQUFjO0FBQ25DO0FBQ0E7QUFDQSwrQkFBK0Isc0VBQWM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsV0FBVyxzREFBTTtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxxRUFBWTtBQUNuQixHQUFHO0FBQ0gsV0FBVyxzREFBTTtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxxRUFBWTtBQUNuQixHQUFHO0FBQ0gsV0FBVyxzREFBTTtBQUNqQjtBQUNBOztBQUVBO0FBQ0EsU0FBUyx5REFBUTtBQUNqQjs7QUFFQTtBQUNBLFNBQVMseURBQVE7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpRkFBeUI7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFMEI7Ozs7Ozs7Ozs7Ozs7O0FDMUcxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDTDtBQUNJO0FBQ0o7QUFDYztBQUNGO0FBQ0U7QUFDRTtBQUNIO0FBQ0M7QUFDQztBQUNBO0FBQ0E7QUFDVTtBQUN2QjtBQUNKO0FBQ1E7QUFDTjtBQUNPO0FBQ0Q7QUFDUTtBQUNYO0FBQ0Y7QUFDRztBQUNFO0FBQ087QUFDQztBQUNMO0FBQ0E7QUFDWDtBQUNNO0FBQ3NCO0FBQ0w7QUFDVjtBQUNEO0FBQ0U7QUFDSDtBQUNDO0FBQ0M7QUFDVTtBQUNiO0FBQ0o7QUFDRjtBQUNHO0FBQ0E7QUFDRDtBQUNKO0FBQ0M7QUFDSTtBQUNMO0FBQ1E7QUFDTjtBQUNFO0FBQ0Q7QUFDRztBQUNGO0FBQ0s7QUFDVDtBQUNXO0FBQ1Q7QUFDRTtBQUNPOztBQUUvQyxrQkFBa0I7O0FBRWxCO0FBQ0EsU0FBUyxpRkFBeUI7QUFDbEM7QUFDQSxtQkFBbUIseURBQUk7QUFDdkIsbUJBQW1CLHdEQUFHO0FBQ3RCLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsVUFBVSw0REFBTztBQUNqQixrQkFBa0Isc0VBQWMsQ0FBQyx3REFBRztBQUNwQyxvQkFBb0IsZ0RBQUs7QUFDekIsVUFBVSxzRUFBYyxDQUFDLHlEQUFJO0FBQzdCO0FBQ0EsS0FBSztBQUNMLHFCQUFxQix3REFBRztBQUN4QixrQkFBa0Isd0RBQUc7QUFDckIsZ0JBQWdCLHdEQUFHO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyxzRUFBYztBQUN2QjtBQUNBLG1CQUFtQix5REFBSTtBQUN2QixtQkFBbUIsd0RBQUc7QUFDdEIsR0FBRztBQUNIOztBQUVBO0FBQ0EsY0FBYyxzRUFBYyxDQUFDLHdEQUFHO0FBQ2hDLDJCQUEyQix5REFBSTtBQUMvQixTQUFTLGlFQUFVO0FBQ25COztBQUVBO0FBQ0EsT0FBTyxpRUFBUztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWEsV0FBVyx5REFBSTtBQUMzQyxLQUFLO0FBQ0w7QUFDQSxpQkFBaUIscUVBQWE7QUFDOUI7QUFDQSxlQUFlLDJEQUFNLDhCQUE4Qix5REFBSTtBQUN2RCxLQUFLLFVBQVUsaUVBQVM7QUFDeEIsZUFBZSxxRUFBYTtBQUM1QixLQUFLO0FBQ0wsZUFBZSxxRUFBYTtBQUM1QjtBQUNBO0FBQ0EsU0FBUyw0REFBTyxDQUFDLDJEQUFNLENBQUMscUVBQWE7QUFDckM7O0FBRUE7QUFDQTtBQUNBLFFBQVEsbUVBQVc7QUFDbkIscUJBQXFCLHNFQUFjO0FBQ25DLFVBQVUsNERBQVM7QUFDbkIsZUFBZSx3RUFBZ0I7QUFDL0IsT0FBTztBQUNQLGVBQWUsNkRBQU07QUFDckI7QUFDQSxLQUFLLFVBQVUsa0VBQVU7QUFDekIsa0JBQWtCLHNFQUFjO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNFQUFjO0FBQzNCLEtBQUssWUFBWSxpRUFBUztBQUMxQjtBQUNBLEtBQUs7QUFDTCxnQkFBZ0IsMkRBQU07QUFDdEI7QUFDQSxPQUFPO0FBQ1AseUJBQXlCLG1FQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3REFBRztBQUN4QixjQUFjLHNFQUFjO0FBQzVCLGFBQWEsa0RBQU87QUFDcEI7QUFDQSxhQUFhLG9EQUFTO0FBQ3RCO0FBQ0EsYUFBYSxnREFBSztBQUNsQjtBQUNBO0FBQ0EsYUFBYSx1REFBWTtBQUN6QixrQkFBa0IscUVBQVk7QUFDOUIsOEJBQThCLHdEQUFHO0FBQ2pDO0FBQ0EsYUFBYSxrREFBTztBQUNwQixvQkFBb0Isd0RBQUc7QUFDdkIsaUJBQWlCLDZEQUFNO0FBQ3ZCO0FBQ0EsYUFBYSxxREFBVTtBQUN2QixvQkFBb0Isd0RBQUc7QUFDdkIsaUJBQWlCLDZEQUFNO0FBQ3ZCO0FBQ0EsYUFBYSw4Q0FBRztBQUNoQixpQkFBaUIsNERBQU87QUFDeEIsYUFBYSx5REFBYztBQUMzQixpQkFBaUIsOERBQWE7QUFDOUIsYUFBYSx5REFBYztBQUMzQixpQkFBaUIsc0VBQWE7QUFDOUIsYUFBYSw4Q0FBRztBQUNoQixjQUFjLHNFQUFjO0FBQzVCLHNCQUFzQix3REFBRztBQUN6QjtBQUNBO0FBQ0EsMEJBQTBCLHlEQUFJO0FBQzlCLGNBQWMsNERBQU87QUFDckIsc0JBQXNCLHNEQUFNO0FBQzVCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlEQUFNO0FBQ25CO0FBQ0EsYUFBYSxvREFBUztBQUN0QjtBQUNBLGFBQWEsZ0RBQUs7QUFDbEIsaUJBQWlCLHdEQUFHO0FBQ3BCLGFBQWEscURBQVU7QUFDdkIscUNBQXFDLHdEQUFHO0FBQ3hDO0FBQ0EsNkJBQTZCLHdEQUFHLFFBQVEsd0RBQUc7QUFDM0MsYUFBYSxrREFBTztBQUNwQjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsZ0JBQWdCLDREQUFPO0FBQ3ZCO0FBQ0EsYUFBYTtBQUNiLHVDQUF1QyxtRUFBYyxJQUFJLHdEQUFHO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzRUFBYztBQUNqQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdUVBQWUsQ0FBQyxzRUFBZ0I7QUFDckQ7QUFDQTtBQUNBLHFCQUFxQixzRUFBYztBQUNuQywwQ0FBMEMsNkRBQU07QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG9FQUFZO0FBQzFCLHNCQUFzQixxRUFBYTtBQUNuQyxXQUFXLFVBQVUsa0VBQVU7QUFDL0I7QUFDQSxXQUFXLFVBQVUsNkVBQXFCO0FBQzFDLHFCQUFxQixzRUFBYztBQUNuQywwQkFBMEIsd0RBQUc7QUFDN0I7QUFDQSxXQUFXLFVBQVUsa0ZBQTBCO0FBQy9DLHFCQUFxQixzRUFBYztBQUNuQywwQkFBMEIsd0RBQUc7QUFDN0I7QUFDQSxtQkFBbUIsc0RBQU07QUFDekIsV0FBVyxVQUFVLDZFQUFxQjtBQUMxQywwQkFBMEIsc0VBQWM7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdEQUFHO0FBQzdCO0FBQ0E7QUFDQSxtQkFBbUIsNkRBQU07QUFDekIsV0FBVztBQUNYO0FBQ0EsaUJBQWlCLHNFQUFjO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLDREQUFhO0FBQ2pDLGFBQWEsNERBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixzRUFBYztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2REFBTTtBQUMxQjtBQUNBOztBQUVBO0FBQ0EsTUFBTSxtRUFBVztBQUNqQjtBQUNBO0FBQ0EsT0FBTyxpRUFBUztBQUNoQjtBQUNBO0FBQ0EsZUFBZSx3REFBRztBQUNsQixPQUFPLG1FQUFXO0FBQ2xCO0FBQ0E7QUFDQSxpQkFBaUIsc0VBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNFQUFjLFdBQVcseURBQUk7QUFDeEM7QUFDQTtBQUNBLFlBQVksc0VBQWMsV0FBVyx5REFBSTtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsNkRBQU07QUFDcEIsVUFBVSw0REFBTztBQUNqQixnQkFBZ0Isc0VBQWM7QUFDOUIsV0FBVyw0REFBTztBQUNsQjtBQUNBO0FBQ0EsV0FBVyw0REFBTztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsNkRBQU07QUFDcEIsVUFBVSw0REFBTztBQUNqQixnQkFBZ0Isc0VBQWM7QUFDOUIsV0FBVyw0REFBTztBQUNsQixtQkFBbUIsOERBQVM7QUFDNUIsU0FBUyx1RUFBZTtBQUN4QixTQUFTLDhEQUFTLEVBQUUsdUVBQWU7QUFDbkMsU0FBUyw4REFBUztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNERBQU87QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLHNFQUFjO0FBQzFDOztBQUVBO0FBQ0EsU0FBUyxpRUFBUyw2QkFBNkIsd0RBQUc7QUFDbEQ7O0FBRUE7QUFDQSxjQUFjLHNFQUFjLENBQUMsd0RBQUc7QUFDaEMsU0FBUyxtRUFBWTtBQUNyQjs7QUFFQTtBQUNBLHNCQUFzQixzRUFBYztBQUNwQzs7QUFFQTtBQUNBLFNBQVMsaUVBQVMsdUJBQXVCLHdEQUFHO0FBQzVDOztBQUVvQjs7Ozs7Ozs7Ozs7OztBQ3JXcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDREQUFPO0FBQ1QsRUFBRSw0REFBTztBQUNULEVBQUUsNERBQU87QUFDVCxFQUFFLDREQUFPO0FBQ1QsRUFBRSw0REFBTztBQUNUO0FBQ0E7O0FBRThCOzs7Ozs7Ozs7Ozs7O0FDckI5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ047O0FBRTVDO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdFQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFVBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGdFQUFVO0FBQ3BCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzRUFBYztBQUN2Qjs7QUFLRTs7Ozs7Ozs7Ozs7OztBQ3JERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9EO0FBQ0U7QUFDSDtBQUNPO0FBQ1Y7QUFDQztBQUNtQjtBQUNaOztBQUV4RCxrQkFBa0I7O0FBRWxCO0FBQ0EsU0FBUyx1RUFBZSxDQUFDLHNFQUFnQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBUSxDQUFDLGtFQUFnQjtBQUNqQyxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4REFBUztBQUN6QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLHVCQUF1Qiw0REFBUztBQUNoQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsa0JBQWtCLDhFQUFrQjtBQUNwQztBQUNBLENBQUM7O0FBRUQsVUFBVSxvRUFBb0I7O0FBRVQ7Ozs7Ozs7Ozs7Ozs7QUNsRnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTs7QUFPRTs7Ozs7Ozs7Ozs7OztBQ3JCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0NBQWtDLE9BQU87QUFDekM7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQWlERTs7Ozs7Ozs7Ozs7OztBQ3ZMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7O0FBRW5DLGtCQUFrQiwrQ0FBUTs7QUFFMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixpQ0FBaUM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixRQUFRO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBS0UiLCJmaWxlIjoiZXJsa29uaWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbml0aWFsaXplRXJsa29uaWdMaXNwQ29uc29sZS5qc1wiKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgYSA9ICdhJztcbnZhciBlID0gJ2UnO1xudmFyIGggPSAnaCc7XG52YXIgbCA9ICdsJztcbnZhciB1ID0gJ3UnO1xudmFyIHcgPSAndyc7XG5cbnZhciBBID0gJ0EnO1xudmFyIEUgPSAnRSc7XG52YXIgSCA9ICdIJztcbnZhciBMID0gJ0wnO1xudmFyIFUgPSAnVSc7XG52YXIgVyA9ICdXJztcblxudmFyIGJhY2tzcGFjZSA9ICdCYWNrc3BhY2UnO1xudmFyIF9kZWxldGUgICA9ICdEZWxldGUnO1xudmFyIGRvd24gICAgICA9ICdBcnJvd0Rvd24nO1xudmFyIGVudGVyICAgICA9ICdFbnRlcic7XG52YXIgbGVmdCAgICAgID0gJ0Fycm93TGVmdCc7XG52YXIgcmlnaHQgICAgID0gJ0Fycm93UmlnaHQnO1xudmFyIHNwYWNlICAgICA9ICcgJztcbnZhciBzcGFjZWJhciAgPSAnU3BhY2ViYXInO1xudmFyIHRhYiAgICAgICA9ICdUYWInO1xudmFyIHVwICAgICAgICA9ICdBcnJvd1VwJztcblxudmFyIGNoYXJhY3RlcnMgPSBbXG4gIHNwYWNlLFxuICAnYCcsICcxJywgJzInLCAgJzMnLCAnNCcsICAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJzAnLCAnLScsICc9JyxcbiAgJ34nLCAnIScsICdAJywgICcjJywgJyQnLCAgJyUnLCAnXicsICcmJywgJyonLCAnKCcsICcpJywgJ18nLCAnKycsXG4gICdhJywgJ2InLCAnYycsICAnZCcsICdlJywgICdmJywgJ2cnLCAnaCcsICdpJywgJ2onLCAnaycsICdsJywgJ20nLFxuICAnbicsICdvJywgJ3AnLCAgJ3EnLCAncicsICAncycsICd0JywgJ3UnLCAndicsICd3JywgJ3gnLCAneScsICd6JyxcbiAgJ0EnLCAnQicsICdDJywgICdEJywgJ0UnLCAgJ0YnLCAnRycsICdIJywgJ0knLCAnSicsICdLJywgJ0wnLCAnTScsXG4gICdOJywgJ08nLCAnUCcsICAnUScsICdSJywgICdTJywgJ1QnLCAnVScsICdWJywgJ1cnLCAnWCcsICdZJywgJ1onLFxuICAnWycsICddJywgJ1xcXFwnLCAnOycsICdcXCcnLCAnLCcsICcuJywgJy8nLFxuICAneycsICd9JywgJ3wnLCAgJzonLCAnXCInLCAgJzwnLCAnPicsICc/J1xuXTtcblxuZnVuY3Rpb24gZ2V0QWN0aW9uKGtleUNob3JkKSB7XG4gIHZhciB2YWx1ZSA9IGtleUNob3JkLnZhbHVlO1xuXG4gIGlmIChrZXlDaG9yZC5jdHJsS2V5KSB7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSBhOlxuICAgICAgY2FzZSBBOlxuICAgICAgICByZXR1cm4gd3JhcCgnbW92ZUN1cnNvclRvU3RhcnQnKTtcbiAgICAgIGNhc2UgZTpcbiAgICAgIGNhc2UgRTpcbiAgICAgICAgcmV0dXJuIHdyYXAoJ21vdmVDdXJzb3JUb0VuZCcpO1xuICAgICAgY2FzZSBoOlxuICAgICAgY2FzZSBIOlxuICAgICAgICByZXR1cm4gd3JhcCgnZGVsZXRlTGVmdENoYXInKTtcbiAgICAgIGNhc2UgbDpcbiAgICAgIGNhc2UgTDpcbiAgICAgICAgcmV0dXJuIHdyYXAoJ2NsZWFyJyk7XG4gICAgICBjYXNlIHU6XG4gICAgICBjYXNlIFU6XG4gICAgICAgIHJldHVybiB3cmFwKCdkZWxldGVQcmVDdXJzb3InKTtcbiAgICAgIGNhc2UgdzpcbiAgICAgIGNhc2UgVzpcbiAgICAgICAgcmV0dXJuIHdyYXAoJ2RlbGV0ZVdvcmQnKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB3cmFwKCdub09wJyk7XG4gICAgfVxuICB9XG5cbiAgc3dpdGNoICh2YWx1ZSkge1xuICAgIGNhc2UgZW50ZXI6XG4gICAgICByZXR1cm4gd3JhcCgnc3VibWl0Jyk7XG4gICAgY2FzZSBiYWNrc3BhY2U6XG4gICAgICByZXR1cm4gd3JhcCgnZGVsZXRlTGVmdENoYXInKTtcbiAgICBjYXNlIGxlZnQ6XG4gICAgICByZXR1cm4gd3JhcCgnbW92ZUN1cnNvckxlZnQnKTtcbiAgICBjYXNlIHJpZ2h0OlxuICAgICAgcmV0dXJuIHdyYXAoJ21vdmVDdXJzb3JSaWdodCcpO1xuICAgIGNhc2UgdXA6XG4gICAgICByZXR1cm4gd3JhcCgncmV3aW5kJyk7XG4gICAgY2FzZSBkb3duOlxuICAgICAgcmV0dXJuIHdyYXAoJ2Zhc3RGb3J3YXJkJyk7XG4gICAgY2FzZSBfZGVsZXRlOlxuICAgICAgcmV0dXJuIHdyYXAoJ2RlbGV0ZVJpZ2h0Q2hhcicpO1xuICAgIGNhc2UgdGFiOlxuICAgICAgcmV0dXJuIHdyYXAoJ2NvbXBsZXRlV29yZCcpO1xuICAgIGNhc2Ugc3BhY2U6XG4gICAgY2FzZSBzcGFjZWJhcjpcbiAgICAgIHJldHVybiB7IG5hbWU6ICdhZGRDaGFyJywgY2hhcjogJyAnIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBpc0NoYXJhY3Rlcih2YWx1ZSlcbiAgICAgICAgPyB7IG5hbWU6ICdhZGRDaGFyJywgY2hhcjogdmFsdWUgfVxuICAgICAgICA6IHdyYXAoJ25vT3AnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0NoYXJhY3Rlcih2YWx1ZSkge1xuICByZXR1cm4gY2hhcmFjdGVycy5pbmRleE9mKHZhbHVlKSA+PSAwO1xufVxuXG5mdW5jdGlvbiB3cmFwKGFjdGlvbk5hbWUpIHtcbiAgcmV0dXJuIHsgbmFtZTogYWN0aW9uTmFtZSB9O1xufVxuXG5leHBvcnQgeyBnZXRBY3Rpb24gfTtcbiIsImltcG9ydCB7IGtleUNvZGVDaGFydHMgfSBmcm9tICcuL2tleUNvZGVDaGFydHMnO1xuaW1wb3J0IHsga2V5SWRlbnRpZmllckNoYXJ0cyB9IGZyb20gJy4va2V5SWRlbnRpZmllckNoYXJ0cyc7XG5cbmZ1bmN0aW9uIGdldEV2ZW50UHJveHkoa2luZCwgZXZlbnQpIHtcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogZXZlbnRba2luZF0sXG4gICAgYWx0S2V5OiBldmVudC5hbHRLZXksXG4gICAgY3RybEtleTogZXZlbnQuY3RybEtleSxcbiAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXlcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGlkZW50aXR5KGV2ZW50KSB7XG4gIHJldHVybiBldmVudDtcbn1cblxuZnVuY3Rpb24gZ2V0S2V5Q2hvcmQoZXZlbnQpIHtcbiAgdmFyIG5vcm1hbGl6ZTtcbiAgdmFyIHByb3BlcnR5O1xuXG4gIGlmIChldmVudC5rZXkgIT0gbnVsbCkge1xuICAgIHByb3BlcnR5ID0gJ2tleSc7XG4gICAgbm9ybWFsaXplID0gaWRlbnRpdHk7XG4gIH0gZWxzZSBpZiAoZXZlbnQua2V5SWRlbnRpZmllciAhPSBudWxsKSB7XG4gICAgcHJvcGVydHkgPSAna2V5SWRlbnRpZmllcic7XG4gICAgbm9ybWFsaXplID0gX2dldEtleUNob3JkKGtleUlkZW50aWZpZXJDaGFydHMpO1xuICB9IGVsc2Uge1xuICAgIHByb3BlcnR5ID0gJ2tleUNvZGUnO1xuICAgIG5vcm1hbGl6ZSA9IF9nZXRLZXlDaG9yZChrZXlDb2RlQ2hhcnRzKTtcbiAgfVxuXG4gIHJldHVybiBub3JtYWxpemUoZ2V0RXZlbnRQcm94eShwcm9wZXJ0eSwgZXZlbnQpKTtcbn1cblxuZnVuY3Rpb24gX2dldEtleUNob3JkKGNvbnZlcnNpb25DaGFydHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogZ2V0S2V5Q2hvcmRWYWx1ZShjb252ZXJzaW9uQ2hhcnRzLCBldmVudC52YWx1ZSwgZXZlbnQuc2hpZnRLZXkpLFxuICAgICAgYWx0S2V5OiBldmVudC5hbHRLZXksXG4gICAgICBjdHJsS2V5OiBldmVudC5jdHJsS2V5LFxuICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0S2V5Q2hvcmRWYWx1ZShjb252ZXJzaW9uQ2hhcnRzLCB2YWx1ZSwgc2hpZnRLZXkpIHtcbiAgdmFyIGtleSA9IHNoaWZ0S2V5ID8gJ3dpdGhTaGlmdCcgOiAnd2l0aG91dFNoaWZ0JztcbiAgcmV0dXJuIGNvbnZlcnNpb25DaGFydHNba2V5XVt2YWx1ZV07XG59XG5cbmV4cG9ydCB7IGdldEtleUNob3JkIH07XG4iLCJpbXBvcnQgeyBnZXRBY3Rpb24gfSBmcm9tICcuL2dldEFjdGlvbic7XG5pbXBvcnQgeyBnZXRLZXlDaG9yZCB9IGZyb20gJy4vZ2V0S2V5Q2hvcmQnO1xuXG5mdW5jdGlvbiBpbnRlcnByZXRLZXlkb3duKGV2ZW50KSB7XG4gIHJldHVybiBnZXRBY3Rpb24oZ2V0S2V5Q2hvcmQoZXZlbnQpKTtcbn1cblxuZXhwb3J0IHsgaW50ZXJwcmV0S2V5ZG93biB9O1xuIiwidmFyIGtleUNvZGVDaGFydHMgPSB7XG4gIHdpdGhTaGlmdDoge1xuICAgIDggIDogJ0JhY2tzcGFjZScsXG4gICAgOSAgOiAnVGFiJyxcbiAgICAxMyA6ICdFbnRlcicsXG4gICAgMzIgOiAnICcsXG4gICAgMzcgOiAnQXJyb3dMZWZ0JyxcbiAgICAzOCA6ICdBcnJvd1VwJyxcbiAgICAzOSA6ICdBcnJvd1JpZ2h0JyxcbiAgICA0MCA6ICdBcnJvd0Rvd24nLFxuICAgIDQ2IDogJ0RlbGV0ZScsXG4gICAgNDggOiAnKScsXG4gICAgNDkgOiAnIScsXG4gICAgNTAgOiAnQCcsXG4gICAgNTEgOiAnIycsXG4gICAgNTIgOiAnJCcsXG4gICAgNTMgOiAnJScsXG4gICAgNTQgOiAnXicsXG4gICAgNTUgOiAnJicsXG4gICAgNTYgOiAnKicsXG4gICAgNTcgOiAnKCcsXG4gICAgNTkgOiAnOicsXG4gICAgNjEgOiAnKycsXG4gICAgNjUgOiAnQScsXG4gICAgNjYgOiAnQicsXG4gICAgNjcgOiAnQycsXG4gICAgNjggOiAnRCcsXG4gICAgNjkgOiAnRScsXG4gICAgNzAgOiAnRicsXG4gICAgNzEgOiAnRycsXG4gICAgNzIgOiAnSCcsXG4gICAgNzMgOiAnSScsXG4gICAgNzQgOiAnSicsXG4gICAgNzUgOiAnSycsXG4gICAgNzYgOiAnTCcsXG4gICAgNzcgOiAnTScsXG4gICAgNzggOiAnTicsXG4gICAgNzkgOiAnTycsXG4gICAgODAgOiAnUCcsXG4gICAgODEgOiAnUScsXG4gICAgODIgOiAnUicsXG4gICAgODMgOiAnUycsXG4gICAgODQgOiAnVCcsXG4gICAgODUgOiAnVScsXG4gICAgODYgOiAnVicsXG4gICAgODcgOiAnVycsXG4gICAgODggOiAnWCcsXG4gICAgODkgOiAnWScsXG4gICAgOTAgOiAnWicsXG4gICAgMTczOiAnXycsXG4gICAgMTg4OiAnPCcsXG4gICAgMTkwOiAnPicsXG4gICAgMTkxOiAnPycsXG4gICAgMTkyOiAnficsXG4gICAgMjE5OiAneycsXG4gICAgMjIwOiAnfCcsXG4gICAgMjIxOiAnfScsXG4gICAgMjIyOiAnXCInXG4gIH0sXG4gIHdpdGhvdXRTaGlmdDoge1xuICAgIDggIDogJ0JhY2tzcGFjZScsXG4gICAgOSAgOiAnVGFiJyxcbiAgICAxMyA6ICdFbnRlcicsXG4gICAgMzIgOiAnICcsXG4gICAgMzcgOiAnQXJyb3dMZWZ0JyxcbiAgICAzOCA6ICdBcnJvd1VwJyxcbiAgICAzOSA6ICdBcnJvd1JpZ2h0JyxcbiAgICA0MCA6ICdBcnJvd0Rvd24nLFxuICAgIDQ2IDogJ0RlbGV0ZScsXG4gICAgNDg6ICcwJyxcbiAgICA0OTogJzEnLFxuICAgIDUwOiAnMicsXG4gICAgNTE6ICczJyxcbiAgICA1MjogJzQnLFxuICAgIDUzOiAnNScsXG4gICAgNTQ6ICc2JyxcbiAgICA1NTogJzcnLFxuICAgIDU2OiAnOCcsXG4gICAgNTc6ICc5JyxcbiAgICA1OTogJzsnLFxuICAgIDYxOiAnPScsXG4gICAgNjU6ICdhJyxcbiAgICA2NjogJ2InLFxuICAgIDY3OiAnYycsXG4gICAgNjg6ICdkJyxcbiAgICA2OTogJ2UnLFxuICAgIDcwOiAnZicsXG4gICAgNzE6ICdnJyxcbiAgICA3MjogJ2gnLFxuICAgIDczOiAnaScsXG4gICAgNzQ6ICdqJyxcbiAgICA3NTogJ2snLFxuICAgIDc2OiAnbCcsXG4gICAgNzc6ICdtJyxcbiAgICA3ODogJ24nLFxuICAgIDc5OiAnbycsXG4gICAgODA6ICdwJyxcbiAgICA4MTogJ3EnLFxuICAgIDgyOiAncicsXG4gICAgODM6ICdzJyxcbiAgICA4NDogJ3QnLFxuICAgIDg1OiAndScsXG4gICAgODY6ICd2JyxcbiAgICA4NzogJ3cnLFxuICAgIDg4OiAneCcsXG4gICAgODk6ICd5JyxcbiAgICA5MDogJ3onLFxuICAgIDE3MzogJy0nLFxuICAgIDE4ODogJywnLFxuICAgIDE5MDogJy4nLFxuICAgIDE5MTogJy8nLFxuICAgIDE5MjogJ2AnLFxuICAgIDIxOTogJ1snLFxuICAgIDIyMDogJ1xcXFwnLFxuICAgIDIyMTogJ10nLFxuICAgIDIyMjogJ1xcJydcbiAgfVxufTtcblxuZXhwb3J0IHsga2V5Q29kZUNoYXJ0cyB9O1xuIiwidmFyIGtleUlkZW50aWZpZXJDaGFydHMgPSB7XG4gIHdpdGhvdXRTaGlmdDoge1xuICAgICdVKzAwNDEnOiAnYScsXG4gICAgJ1UrMDA0Mic6ICdiJyxcbiAgICAnVSswMDQzJzogJ2MnLFxuICAgICdVKzAwNDQnOiAnZCcsXG4gICAgJ1UrMDA0NSc6ICdlJyxcbiAgICAnVSswMDQ2JzogJ2YnLFxuICAgICdVKzAwNDcnOiAnZycsXG4gICAgJ1UrMDA0OCc6ICdoJyxcbiAgICAnVSswMDQ5JzogJ2knLFxuICAgICdVKzAwNEEnOiAnaicsXG4gICAgJ1UrMDA0Qic6ICdrJyxcbiAgICAnVSswMDRDJzogJ2wnLFxuICAgICdVKzAwNEQnOiAnbScsXG4gICAgJ1UrMDA0RSc6ICduJyxcbiAgICAnVSswMDRGJzogJ28nLFxuICAgICdVKzAwNTAnOiAncCcsXG4gICAgJ1UrMDA1MSc6ICdxJyxcbiAgICAnVSswMDUyJzogJ3InLFxuICAgICdVKzAwNTMnOiAncycsXG4gICAgJ1UrMDA1NCc6ICd0JyxcbiAgICAnVSswMDU1JzogJ3UnLFxuICAgICdVKzAwNTYnOiAndicsXG4gICAgJ1UrMDA1Nyc6ICd3JyxcbiAgICAnVSswMDU4JzogJ3gnLFxuICAgICdVKzAwNTknOiAneScsXG4gICAgJ1UrMDA1QSc6ICd6JyxcbiAgICAnVSswMDMwJzogJzAnLFxuICAgICdVKzAwMzEnOiAnMScsXG4gICAgJ1UrMDAzMic6ICcyJyxcbiAgICAnVSswMDMzJzogJzMnLFxuICAgICdVKzAwMzQnOiAnNCcsXG4gICAgJ1UrMDAzNSc6ICc1JyxcbiAgICAnVSswMDM2JzogJzYnLFxuICAgICdVKzAwMzcnOiAnNycsXG4gICAgJ1UrMDAzOCc6ICc4JyxcbiAgICAnVSswMDM5JzogJzknLFxuICAgICdVKzAwQzAnOiAnYCcsXG4gICAgJ1UrMDBCRCc6ICctJyxcbiAgICAnVSswMEJCJzogJz0nLFxuICAgICdVKzAwREInOiAnWycsXG4gICAgJ1UrMDBERCc6ICddJyxcbiAgICAnVSswMERDJzogJ1xcXFwnLFxuICAgICdVKzAwQkEnOiAnOycsXG4gICAgJ1UrMDBERSc6ICdcXCcnLFxuICAgICdVKzAwQkMnOiAnLCcsXG4gICAgJ1UrMDBCRSc6ICcuJyxcbiAgICAnVSswMEJGJzogJy8nLFxuICAgICdVKzAwMjAnOiAnICcsXG4gICAgJ1UrMDAwOCc6ICdCYWNrc3BhY2UnLFxuICAgICdVKzAwNzUnOiAnRGVsZXRlJyxcbiAgICAnRG93bicgIDogJ0Fycm93RG93bicsXG4gICAgJ0VudGVyJyA6ICdFbnRlcicsXG4gICAgJ0xlZnQnICA6ICdBcnJvd0xlZnQnLFxuICAgICdSaWdodCcgOiAnQXJyb3dSaWdodCcsXG4gICAgJ1UrMDAyMCc6ICcgJyxcbiAgICAnVSswMDA5JzogJ1RhYicsXG4gICAgJ1VwJyAgICA6ICdBcnJvd1VwJ1xuICB9LFxuICB3aXRoU2hpZnQ6IHtcbiAgICAnVSswMDQxJzogJ0EnLFxuICAgICdVKzAwNDInOiAnQicsXG4gICAgJ1UrMDA0Myc6ICdDJyxcbiAgICAnVSswMDQ0JzogJ0QnLFxuICAgICdVKzAwNDUnOiAnRScsXG4gICAgJ1UrMDA0Nic6ICdGJyxcbiAgICAnVSswMDQ3JzogJ0cnLFxuICAgICdVKzAwNDgnOiAnSCcsXG4gICAgJ1UrMDA0OSc6ICdJJyxcbiAgICAnVSswMDRBJzogJ0onLFxuICAgICdVKzAwNEInOiAnSycsXG4gICAgJ1UrMDA0Qyc6ICdMJyxcbiAgICAnVSswMDREJzogJ00nLFxuICAgICdVKzAwNEUnOiAnTicsXG4gICAgJ1UrMDA0Ric6ICdPJyxcbiAgICAnVSswMDUwJzogJ1AnLFxuICAgICdVKzAwNTEnOiAnUScsXG4gICAgJ1UrMDA1Mic6ICdSJyxcbiAgICAnVSswMDUzJzogJ1MnLFxuICAgICdVKzAwNTQnOiAnVCcsXG4gICAgJ1UrMDA1NSc6ICdVJyxcbiAgICAnVSswMDU2JzogJ1YnLFxuICAgICdVKzAwNTcnOiAnVycsXG4gICAgJ1UrMDA1OCc6ICdYJyxcbiAgICAnVSswMDU5JzogJ1knLFxuICAgICdVKzAwNUEnOiAnWicsXG4gICAgJ1UrMDAzMCc6ICcpJyxcbiAgICAnVSswMDMxJzogJyEnLFxuICAgICdVKzAwMzInOiAnQCcsXG4gICAgJ1UrMDAzMyc6ICcjJyxcbiAgICAnVSswMDM0JzogJyQnLFxuICAgICdVKzAwMzUnOiAnJScsXG4gICAgJ1UrMDAzNic6ICdeJyxcbiAgICAnVSswMDM3JzogJyYnLFxuICAgICdVKzAwMzgnOiAnKicsXG4gICAgJ1UrMDAzOSc6ICcoJyxcbiAgICAnVSswMEMwJzogJ34nLFxuICAgICdVKzAwQkQnOiAnXycsXG4gICAgJ1UrMDBCQic6ICcrJyxcbiAgICAnVSswMERCJzogJ3snLFxuICAgICdVKzAwREQnOiAnfScsXG4gICAgJ1UrMDBEQyc6ICd8JyxcbiAgICAnVSswMEJBJzogJzonLFxuICAgICdVKzAwREUnOiAnXCInLFxuICAgICdVKzAwQkMnOiAnPCcsXG4gICAgJ1UrMDBCRSc6ICc+JyxcbiAgICAnVSswMEJGJzogJz8nLFxuICAgICdVKzAwMjAnOiAnICcsXG4gICAgJ1UrMDAwOCc6ICdCYWNrc3BhY2UnLFxuICAgICdVKzAwNzUnOiAnRGVsZXRlJyxcbiAgICAnRG93bicgIDogJ0Fycm93RG93bicsXG4gICAgJ0VudGVyJyA6ICdFbnRlcicsXG4gICAgJ0xlZnQnICA6ICdBcnJvd0xlZnQnLFxuICAgICdSaWdodCcgOiAnQXJyb3dSaWdodCcsXG4gICAgJ1UrMDAyMCc6ICcgJyxcbiAgICAnVSswMDA5JzogJ1RhYicsXG4gICAgJ1VwJyAgICA6ICdBcnJvd1VwJ1xuICB9XG59O1xuXG5leHBvcnQgeyBrZXlJZGVudGlmaWVyQ2hhcnRzIH07XG4iLCJpbXBvcnQgeyBWaWV3cG9ydCB9IGZyb20gJy4uL21vZGVscy9hY3Rpb25zL3ZpZXdwb3J0JztcblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnQoYWN0aW9uLCBjb25maWcpIHtcbiAgdmFyIGNvbW1hbmQgPSBhY3Rpb24ubmFtZTtcbiAgdmFyIHZpZXdwb3J0ID0gY29uZmlnLnZpZXdwb3J0O1xuICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICBjYXNlICdhZGRDaGFyJzpcbiAgICAgIHJldHVybiBWaWV3cG9ydC5hZGRDaGFyKHZpZXdwb3J0LCBhY3Rpb24uY2hhcik7XG4gICAgY2FzZSAnY29tcGxldGVXb3JkJzpcbiAgICAgIHJldHVybiBWaWV3cG9ydC5jb21wbGV0ZVdvcmQodmlld3BvcnQsIGNvbmZpZy5nZXRDYW5kaWRhdGVzKTtcbiAgICBjYXNlICdub09wJzpcbiAgICAgIHJldHVybiB2aWV3cG9ydDtcbiAgICBjYXNlICdzdWJtaXQnOlxuICAgICAgcmV0dXJuIFZpZXdwb3J0LnN1Ym1pdCh2aWV3cG9ydCwgY29uZmlnLnRyYW5zZm9ybSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBWaWV3cG9ydFtjb21tYW5kXSh2aWV3cG9ydCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgZ2V0Vmlld3BvcnQgfTtcbiIsImltcG9ydCB7IGdldFZpZXdwb3J0IH0gZnJvbSAnLi9nZXRWaWV3cG9ydCc7XG5pbXBvcnQgeyBpbnRlcnByZXRLZXlkb3duIH0gZnJvbSAnLi9jaGFycy9pbnRlcnByZXRLZXlkb3duJztcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUNvbnRyb2woc3Vic2NyaWJlLCByZW5kZXIsIGNvbmZpZykge1xuICB2YXIgaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZ2V0QWN0aW9uKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmVuZGVyKGdldFZpZXdwb3J0KGdldEFjdGlvbihldmVudCksIGNvbmZpZykpO1xuICAgIH07XG4gIH1cblxuICBzdWJzY3JpYmUoJ2tleWRvd24nLCBoYW5kbGVFdmVudChpbnRlcnByZXRLZXlkb3duKSk7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxpemVDb250cm9sIH07XG4iLCJ2YXIgX25vZGVJZCAgICAgPSAnI2VybC1jc3Mtc2Nyb2xsYmFyLXRlc3QtZGl2JztcbnZhciBfcHJlZml4ZXMgICA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnLW8tJywgJy1tcy0nXTtcbnZhciBfcHNldWRvICAgICA9ICc6Oic7XG52YXIgX3Njcm9sbGJhciAgPSAnc2Nyb2xsYmFyJztcbnZhciBfd2lkdGgxMHB4ICA9ICd7d2lkdGg6MTBweDt9JztcblxuZnVuY3Rpb24gY3JlYXRlUnVsZShwcmVmaXgpIHtcbiAgcmV0dXJuIF9ub2RlSWQgKyBfcHNldWRvICsgcHJlZml4ICsgX3Njcm9sbGJhciArIF93aWR0aDEwcHg7XG59XG5cbmZ1bmN0aW9uIF9kZXRlY3RDc3NTY3JvbGxiYXIoc3R5bGVSdWxlKSB7XG4gIHZhciBib2R5ID0gZ2V0Qm9keSgpO1xuICB2YXIgZG9jRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBub2RlLmlkID0gJ2VybC1jc3Mtc2Nyb2xsYmFyLXRlc3QtZGl2JztcbiAgZGl2LmFwcGVuZENoaWxkKG5vZGUpO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbiAgc3R5bGUuaWQgPSAnZXJsLWNzcy1zY3JvbGxiYXItdGVzdC1zdHlsZSc7XG4gIHZhciBub25jZU5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Nyb2xsYmFyLW5vbmNlJyk7XG4gIHZhciBub25jZSA9IG5vbmNlTm9kZS5kYXRhc2V0WydzY3JvbGxiYXJOb25jZSddO1xuICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgbm9uY2UpO1xuXG4gIChib2R5LmZha2UgPyBib2R5IDogZGl2KS5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gc3R5bGVSdWxlO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlUnVsZSkpO1xuICB9XG5cbiAgZGl2LmlkID0gJ2VybC1jc3Mtc2Nyb2xsLXRlc3QnO1xuXG4gIGlmIChib2R5LmZha2UpIHtcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgdmFyIGRvY092ZXJmbG93ID0gZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdztcbiAgICBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgZG9jRWxlbWVudC5hcHBlbmRDaGlsZChib2R5KTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBoYXNDc3NTY3JvbGxiYXIobm9kZSwgMzApO1xuXG4gIGlmIChib2R5LmZha2UpIHtcbiAgICBib2R5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYm9keSk7XG4gICAgZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IGRvY092ZXJmbG93O1xuICAgIGRvY0VsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICB9IGVsc2Uge1xuICAgIGRpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdik7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBkZXRlY3RDc3NTY3JvbGxiYXIoKSB7XG4gIHZhciBjc3NTY3JvbGxiYXIgPVxuICAgIF9ub2RlSWQgKyAne292ZXJmbG93OnNjcm9sbDt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O30nICtcbiAgICBfcHJlZml4ZXMubWFwKGNyZWF0ZVJ1bGUpLmpvaW4oJycpICtcbiAgICBjcmVhdGVSdWxlKCcnKTtcblxuICByZXR1cm4gX2RldGVjdENzc1Njcm9sbGJhcihjc3NTY3JvbGxiYXIpO1xufVxuXG5mdW5jdGlvbiBnZXRCb2R5KCkge1xuICB2YXIgX2JvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4gIGlmICghX2JvZHkpIHtcbiAgICB2YXIgaXNTdmcgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2Zyc7XG4gICAgX2JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGlzU3ZnID8gJ3N2ZycgOiAnYm9keScpO1xuICAgIF9ib2R5LmZha2UgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF9ib2R5O1xufVxuXG5mdW5jdGlvbiBoYXNDc3NTY3JvbGxiYXIobm9kZSwgZXhwZWN0ZWRXaWR0aCkge1xuICByZXR1cm4gJ3Njcm9sbFdpZHRoJyBpbiBub2RlICYmIG5vZGUuc2Nyb2xsV2lkdGggPT09IGV4cGVjdGVkV2lkdGg7XG59XG5cbmV4cG9ydCB7IGRldGVjdENzc1Njcm9sbGJhciB9O1xuIiwiaW1wb3J0IHsgZGV0ZWN0Q3NzU2Nyb2xsYmFyIH0gIGZyb20gJy4vZGV0ZWN0Q3NzU2Nyb2xsYmFyJztcbmltcG9ydCB7IGdldEluaXRpYWxNb2RlbCB9ICAgICBmcm9tICcuL21vZGVscy9nZXRJbml0aWFsTW9kZWwnO1xuaW1wb3J0IHsgRVJMS0lORyB9ICAgICAgICAgICAgIGZyb20gJy4vdmlldy9yZWNyZWF0ZUNvbnNvbGUnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUNvbnRyb2wgfSAgIGZyb20gJy4vY29udHJvbC9pbml0aWFsaXplQ29udHJvbCc7XG5pbXBvcnQgeyBpbml0aWFsaXplVmlldyB9ICAgICAgZnJvbSAnLi92aWV3L2luaXRpYWxpemVWaWV3JztcbmltcG9ydCB7IHJlbmRlciB9ICAgICAgICAgICAgICBmcm9tICcuL3JlbmRlcic7XG5pbXBvcnQgeyBzY3JvbGwgfSAgICAgICAgICAgICAgZnJvbSAnLi92aWV3L3Njcm9sbCc7XG5pbXBvcnQgeyBzdWJzY3JpYmUgfSAgICAgICAgICAgZnJvbSAnLi9zdWJzY3JpYmUnO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplKGNvbmZpZykge1xuICB2YXIgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5ub2RlSWQpO1xuICB2YXIgaW5pdGlhbE1vZGVsID0gZ2V0SW5pdGlhbE1vZGVsKCk7XG4gIHZhciBwcm9tcHRMYWJlbCA9IGNvbmZpZy5wcm9tcHRMYWJlbDtcbiAgdmFyIGxhYmVscyA9IHsgcHJvbXB0TGFiZWw6IHByb21wdExhYmVsIH07XG4gIHZhciB2aWV3TW9kZWwgPSBFUkxLSU5HKGxhYmVscywgaW5pdGlhbE1vZGVsKTtcblxuICBpbml0aWFsaXplVmlldyhyb290LCB2aWV3TW9kZWwpO1xuXG4gIHZhciByb290Q2hpbGQgPSByb290LmNoaWxkTm9kZXNbMF07XG5cbiAgdmFyIGNvbnRyb2xDb25maWcgPSB7XG4gICAgZ2V0Q2FuZGlkYXRlczogY29uZmlnLmdldENhbmRpZGF0ZXMsXG4gICAgcHJvbXB0TGFiZWw6IHByb21wdExhYmVsLFxuICAgIHRyYW5zZm9ybTogY29uZmlnLnRyYW5zZm9ybSxcbiAgICB2aWV3cG9ydDogaW5pdGlhbE1vZGVsXG4gIH07XG5cbiAgdmFyIGNzc1Njcm9sbGJhckRldGVjdGVkID0gZGV0ZWN0Q3NzU2Nyb2xsYmFyKCk7XG5cbiAgc2V0U2Nyb2xsYmFyVmlzaWJpbGl0eShjc3NTY3JvbGxiYXJEZXRlY3RlZCk7XG5cbiAgdmFyIF9zY3JvbGwgPSBzY3JvbGwoY3NzU2Nyb2xsYmFyRGV0ZWN0ZWQpO1xuXG4gIGluaXRpYWxpemVDb250cm9sKFxuICAgIHN1YnNjcmliZSxcbiAgICByZW5kZXIodmlld01vZGVsLCByb290Q2hpbGQsIGNvbnRyb2xDb25maWcsIF9zY3JvbGwpLFxuICAgIGNvbnRyb2xDb25maWcpO1xufVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxiYXJWaXNpYmlsaXR5KGNzc1Njcm9sbGJhckRldGVjdGVkKSB7XG4gIGlmICghY3NzU2Nyb2xsYmFyRGV0ZWN0ZWQpIHtcbiAgICB2YXIgdmlld3BvcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlcmwtdmlld3BvcnQnKVswXVxuICAgIHZpZXdwb3J0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gIH1cbn1cblxuXG5leHBvcnQgeyBpbml0aWFsaXplIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVGcmFtZSB9IGZyb20gJy4uL3R5cGVzL2NyZWF0ZUZyYW1lJztcblxuZnVuY3Rpb24gY2xlYXIoZnJhbWUsIHRlcm1pbmFsKSB7XG4gIHJldHVybiBjcmVhdGVGcmFtZShcbiAgICAwLFxuICAgIHRlcm1pbmFsLmVudHJpZXMubGVuZ3RoLFxuICAgIGZyYW1lLnByb21wdEluZGV4KTtcbn1cblxuZnVuY3Rpb24gZmFzdEZvcndhcmQoZnJhbWUpIHtcbiAgcmV0dXJuIGNyZWF0ZUZyYW1lKFxuICAgIGZyYW1lLm9mZnNldCxcbiAgICBmcmFtZS5zdGFydCxcbiAgICBmcmFtZS5wcm9tcHRJbmRleCA+IDBcbiAgICAgID8gZnJhbWUucHJvbXB0SW5kZXggLSAxXG4gICAgICA6IGZyYW1lLnByb21wdEluZGV4KTtcbn1cblxuZnVuY3Rpb24gcmVzZXRQcm9tcHRJbmRleChmcmFtZSkge1xuICByZXR1cm4gY3JlYXRlRnJhbWUoXG4gICAgZnJhbWUub2Zmc2V0LFxuICAgIGZyYW1lLnN0YXJ0LFxuICAgIDApO1xufVxuXG5mdW5jdGlvbiByZXdpbmQoZnJhbWUsIHRlcm1pbmFsKSB7XG4gIHJldHVybiBjcmVhdGVGcmFtZShcbiAgICBmcmFtZS5vZmZzZXQsXG4gICAgZnJhbWUuc3RhcnQsXG4gICAgdGVybWluYWwucHJvbXB0cy5sZW5ndGggPiBmcmFtZS5wcm9tcHRJbmRleFxuICAgICAgPyBmcmFtZS5wcm9tcHRJbmRleCArIDFcbiAgICAgIDogZnJhbWUucHJvbXB0SW5kZXgpO1xufVxuXG5leHBvcnQgY29uc3QgRnJhbWUgPSB7XG4gIGNsZWFyLFxuICBmYXN0Rm9yd2FyZCxcbiAgcmVzZXRQcm9tcHRJbmRleCxcbiAgcmV3aW5kXG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlVGVybWluYWwgfSBmcm9tICcuLi90eXBlcy9jcmVhdGVUZXJtaW5hbCc7XG5pbXBvcnQgeyBjcmVhdGVQcm9tcHQgfSBmcm9tICcuLi90eXBlcy9jcmVhdGVQcm9tcHQnO1xuXG5mdW5jdGlvbiBhZGRDaGFyKHRlcm1pbmFsLCBjaGFyKSB7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLFxuICAgIHRlcm1pbmFsLnByb21wdHMsXG4gICAgY3JlYXRlUHJvbXB0KFxuICAgICAgdGVybWluYWwucHJvbXB0LnByZUN1cnNvciArIGNoYXIsXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcikpO1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZVdvcmQodGVybWluYWwsIGdldENhbmRpZGF0ZXMpIHtcbiAgaWYgKGdldENhbmRpZGF0ZXMgPT0gbnVsbCkge1xuICAgIGdldENhbmRpZGF0ZXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciByZXN1bHRzO1xuICAgICAgcmV0dXJuIChyZXN1bHRzID0gW3sgZWZmZWN0OiBmYWxzZSwgdmFsdWU6IHZhbHVlIH1dKTsgLy8gY291cGxpbmcgdG8gbGlzcCBpbXBsZW1lbnRhdGlvblxuICAgIH07XG4gIH1cblxuICB2YXIgY29tbWFuZFRleHQgPSB0ZXJtaW5hbC5wcm9tcHQucHJlQ3Vyc29yO1xuICB2YXIgc3BsaXRDb21tYW5kID0gZ2V0UHJlZml4KGNvbW1hbmRUZXh0KTtcbiAgdmFyIGNhbmRpZGF0ZXMgPSBnZXRDYW5kaWRhdGVzKHNwbGl0Q29tbWFuZFsxXSk7XG4gIHZhciBsZW5ndGggPSBjYW5kaWRhdGVzLmxlbmd0aDtcblxuICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRlcm1pbmFsO1xuICB9XG5cbiAgdmFyIGVudHJpZXMsIHByb21wdDtcblxuICBpZiAobGVuZ3RoID09PSAxKSB7XG4gICAgZW50cmllcyA9IHRlcm1pbmFsLmVudHJpZXM7XG4gICAgcHJvbXB0ID0gY3JlYXRlUHJvbXB0KFxuICAgICAgc3BsaXRDb21tYW5kWzBdICsgY2FuZGlkYXRlc1swXSArICcgJyArIHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yLFxuICAgICAgdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3IpO1xuICB9IGVsc2Uge1xuICAgIGVudHJpZXMgPSB0ZXJtaW5hbC5lbnRyaWVzLmNvbmNhdChcbiAgICAgIFt7IHR5cGU6ICdjb21tYW5kJywgdmFsdWU6IGV4dHJhY3RDb21tYW5kKHRlcm1pbmFsLnByb21wdCkgfV0sXG4gICAgICBbeyB0eXBlOiAnY29tcGxldGlvbicsIHZhbHVlOiBjYW5kaWRhdGVzLmpvaW4oJyAnKSB9XSk7XG4gICAgcHJvbXB0ID0gdGVybWluYWwucHJvbXB0O1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVRlcm1pbmFsKGVudHJpZXMsIHRlcm1pbmFsLnByb21wdHMsIHByb21wdCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUxlZnRDaGFyKHRlcm1pbmFsKSB7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLCBcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLFxuICAgIGNyZWF0ZVByb21wdChcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wcmVDdXJzb3Iuc2xpY2UoMCwgLTEpLFxuICAgICAgdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3IpKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJlQ3Vyc29yKHRlcm1pbmFsKSB7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLCBcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLCBcbiAgICBjcmVhdGVQcm9tcHQoJycsIHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVJpZ2h0Q2hhcih0ZXJtaW5hbCkge1xuICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgdGVybWluYWwuZW50cmllcywgXG4gICAgdGVybWluYWwucHJvbXB0cywgXG4gICAgY3JlYXRlUHJvbXB0KFxuICAgICAgdGVybWluYWwucHJvbXB0LnByZUN1cnNvcixcbiAgICAgIHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yLnNsaWNlKDEpKSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVdvcmQodGVybWluYWwpIHtcbiAgdmFyIHByZUN1cnNvciA9IHRlcm1pbmFsLnByb21wdC5wcmVDdXJzb3I7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLCBcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLCBcbiAgICBjcmVhdGVQcm9tcHQoXG4gICAgICBwcmVDdXJzb3Iuc2xpY2UoMCwgcHJlQ3Vyc29yLnNsaWNlKDAsIC0xKS5sYXN0SW5kZXhPZignICcpICsgMSksXG4gICAgICB0ZXJtaW5hbC5wcm9tcHQucG9zdEN1cnNvcikpO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0Q29tbWFuZChwcm9tcHQpIHtcbiAgcmV0dXJuIChwcm9tcHQucHJlQ3Vyc29yICsgcHJvbXB0LnBvc3RDdXJzb3IpLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJlZml4KGNvbW1hbmQpIHtcbiAgdmFyIHJlZ2V4ID0gL14oLipbXFxzXFwoXFwpXFxbXFxdXSkoW15cXChcXClcXFtcXF1dKikvO1xuICB2YXIgbWF0Y2ggPSByZWdleC5leGVjKGNvbW1hbmQpO1xuICByZXR1cm4gbWF0Y2ggPT0gbnVsbFxuICAgID8gWycnLCBjb21tYW5kXVxuICAgIDogW21hdGNoWzFdLCBtYXRjaFsyXV07XG59XG5cbmZ1bmN0aW9uIG1vdmVDdXJzb3JMZWZ0KHRlcm1pbmFsKSB7XG4gIHZhciBwcmVDdXJzb3IgPSB0ZXJtaW5hbC5wcm9tcHQucHJlQ3Vyc29yO1xuICB2YXIgcHJlQ3Vyc29yTGVuZ3RoID0gcHJlQ3Vyc29yLmxlbmd0aDtcbiAgaWYgKHByZUN1cnNvckxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0ZXJtaW5hbDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcG9zdEN1cnNvciA9IHRlcm1pbmFsLnByb21wdC5wb3N0Q3Vyc29yO1xuICAgIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICAgIHRlcm1pbmFsLmVudHJpZXMsXG4gICAgICB0ZXJtaW5hbC5wcm9tcHRzLFxuICAgICAgY3JlYXRlUHJvbXB0KFxuICAgICAgICBwcmVDdXJzb3Iuc2xpY2UoMCwgLTEpLFxuICAgICAgICBwcmVDdXJzb3JbcHJlQ3Vyc29yTGVuZ3RoIC0gMV0gKyBwb3N0Q3Vyc29yKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW92ZUN1cnNvclJpZ2h0KHRlcm1pbmFsKSB7XG4gIHZhciBwb3N0Q3Vyc29yID0gdGVybWluYWwucHJvbXB0LnBvc3RDdXJzb3I7XG4gIGlmIChwb3N0Q3Vyc29yLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0ZXJtaW5hbDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcHJlQ3Vyc29yID0gdGVybWluYWwucHJvbXB0LnByZUN1cnNvcjtcbiAgICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgICB0ZXJtaW5hbC5lbnRyaWVzLFxuICAgICAgdGVybWluYWwucHJvbXB0cyxcbiAgICAgIGNyZWF0ZVByb21wdChcbiAgICAgICAgcHJlQ3Vyc29yICsgcG9zdEN1cnNvclswXSxcbiAgICAgICAgcG9zdEN1cnNvci5zbGljZSgxKSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdmVDdXJzb3JUb0VuZCh0ZXJtaW5hbCkge1xuICB2YXIgcHJvbXB0ID0gdGVybWluYWwucHJvbXB0O1xuICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgdGVybWluYWwuZW50cmllcyxcbiAgICB0ZXJtaW5hbC5wcm9tcHRzLFxuICAgIGNyZWF0ZVByb21wdChwcm9tcHQucHJlQ3Vyc29yICsgcHJvbXB0LnBvc3RDdXJzb3IsICcnKSk7XG59XG5cbmZ1bmN0aW9uIG1vdmVDdXJzb3JUb1N0YXJ0KHRlcm1pbmFsKSB7XG4gIHZhciBwcm9tcHQgPSB0ZXJtaW5hbC5wcm9tcHQ7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbChcbiAgICB0ZXJtaW5hbC5lbnRyaWVzLFxuICAgIHRlcm1pbmFsLnByb21wdHMsXG4gICAgY3JlYXRlUHJvbXB0KCcnLCBwcm9tcHQucHJlQ3Vyc29yICsgcHJvbXB0LnBvc3RDdXJzb3IpKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUHJvbXB0KHByb21wdCkge1xuICByZXR1cm4gY3JlYXRlUHJvbXB0KGV4dHJhY3RDb21tYW5kKHByb21wdCksICcnKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0KHRlcm1pbmFsLCB0cmFuc2Zvcm0pIHtcbiAgdmFyIG5ld0NhY2hlZFByb21wdE1heWJlLCBuZXdGdXR1cmU7XG5cbiAgaWYgKHRyYW5zZm9ybSA9PSBudWxsKSB7XG4gICAgdHJhbnNmb3JtID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgcmVzdWx0cztcbiAgICAgIHJldHVybiAocmVzdWx0cyA9IFt7IGVmZmVjdDogZmFsc2UsIHZhbHVlOiB2YWx1ZSB9XSk7IC8vIGNvdXBsaW5nIHRvIGxpc3AgaW1wbGVtZW50YXRpb25cbiAgICB9O1xuICB9XG5cbiAgdmFyIGNvbW1hbmRUZXh0ID0gZXh0cmFjdENvbW1hbmQodGVybWluYWwucHJvbXB0KTtcbiAgdmFyIHJlc3VsdHMgPSB0cmFuc2Zvcm0oY29tbWFuZFRleHQpO1xuICB2YXIgZGlzcGxheUVudHJpZXMgPSByZXN1bHRzXG4gICAgLnNsaWNlKDAsIC0xKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gKHJlc3VsdCkgeyByZXR1cm4gcmVzdWx0LmVmZmVjdC50eXBlID09PSAnZGlzcGxheSc7IH0pXG4gICAgLm1hcChmdW5jdGlvbiAoZGlzcGxheSkgeyByZXR1cm4geyB0eXBlOiAnZGlzcGxheScsIHZhbHVlOiBkaXNwbGF5LnZhbHVlIH19KTtcblxuICB2YXIgbGFzdFJlc3VsdCA9IHJlc3VsdHNbcmVzdWx0cy5sZW5ndGggLSAxXTtcbiAgdmFyIHJlc3BvbnNlID0gbGFzdFJlc3VsdC52YWx1ZSAhPSBudWxsXG4gICAgPyBbeyB0eXBlOiAncmVzcG9uc2UnLCB2YWx1ZTogbGFzdFJlc3VsdC52YWx1ZSB9XVxuICAgIDogW107XG5cbiAgdmFyIGNvbW1hbmQgPSB7IHR5cGU6ICdjb21tYW5kJywgdmFsdWU6IGNvbW1hbmRUZXh0IH07XG4gIHZhciBwcm9tcHQgPSBub3JtYWxpemVQcm9tcHQodGVybWluYWwucHJvbXB0KTtcblxuICByZXR1cm4gY3JlYXRlVGVybWluYWwoXG4gICAgdGVybWluYWwuZW50cmllcy5jb25jYXQoW2NvbW1hbmRdLCBkaXNwbGF5RW50cmllcywgcmVzcG9uc2UpLFxuICAgIFtwcm9tcHRdLmNvbmNhdCh0ZXJtaW5hbC5wcm9tcHRzKSxcbiAgICBjcmVhdGVQcm9tcHQoJycsICcnKSk7XG59XG5cbmV4cG9ydCBjb25zdCBUZXJtaW5hbCA9IHtcbiAgYWRkQ2hhcixcbiAgY29tcGxldGVXb3JkLFxuICBkZWxldGVMZWZ0Q2hhcixcbiAgZGVsZXRlUHJlQ3Vyc29yLFxuICBkZWxldGVSaWdodENoYXIsXG4gIGRlbGV0ZVdvcmQsXG4gIG1vdmVDdXJzb3JMZWZ0LFxuICBtb3ZlQ3Vyc29yUmlnaHQsXG4gIG1vdmVDdXJzb3JUb0VuZCxcbiAgbW92ZUN1cnNvclRvU3RhcnQsXG4gIHN1Ym1pdFxufTtcbiIsImltcG9ydCB7IGNyZWF0ZVZpZXdwb3J0IH0gZnJvbSAnLi4vdHlwZXMvY3JlYXRlVmlld3BvcnQnO1xuaW1wb3J0IHsgY3JlYXRlRnJhbWUgfSBmcm9tICcuLi90eXBlcy9jcmVhdGVGcmFtZSc7XG5pbXBvcnQgeyBjcmVhdGVUZXJtaW5hbCB9IGZyb20gJy4uL3R5cGVzL2NyZWF0ZVRlcm1pbmFsJztcbmltcG9ydCB7IEZyYW1lIH0gZnJvbSAnLi9mcmFtZSc7XG5pbXBvcnQgeyBUZXJtaW5hbCB9IGZyb20gJy4vdGVybWluYWwnO1xuXG5mdW5jdGlvbiBhZGRDaGFyKHZpZXdwb3J0LCBjaGFyKSB7XG4gIHJldHVybiBjcmVhdGVWaWV3cG9ydChcbiAgICBUZXJtaW5hbC5hZGRDaGFyKHZpZXdwb3J0LnRlcm1pbmFsLCBjaGFyKSxcbiAgICB2aWV3cG9ydC5mcmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlV29yZCh2aWV3cG9ydCwgZ2V0Q2FuZGlkYXRlcykge1xuICB2YXIgZnJhbWUgPSB2aWV3cG9ydC5mcmFtZTtcbiAgdmFyIG5ld1Rlcm1pbmFsID1cbiAgICBUZXJtaW5hbC5jb21wbGV0ZVdvcmQocmVmcmVzaFRlcm1pbmFsKHZpZXdwb3J0KSwgZ2V0Q2FuZGlkYXRlcyk7XG4gIHZhciBkaWZmID0gbmV3VGVybWluYWwuZW50cmllcy5sZW5ndGggLSB2aWV3cG9ydC50ZXJtaW5hbC5lbnRyaWVzLmxlbmd0aDtcbiAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgIG5ld1Rlcm1pbmFsLFxuICAgIGNyZWF0ZUZyYW1lKFxuICAgICAgZnJhbWUub2Zmc2V0ICsgZGlmZixcbiAgICAgIGZyYW1lLnN0YXJ0LFxuICAgICAgMCkpO1xufVxuXG5mdW5jdGlvbiBjbGVhcih2aWV3cG9ydCkge1xuICB2YXIgdGVybWluYWwgPSB2aWV3cG9ydC50ZXJtaW5hbDtcbiAgcmV0dXJuIGNyZWF0ZVZpZXdwb3J0KFxuICAgIHRlcm1pbmFsLFxuICAgIEZyYW1lLmNsZWFyKHZpZXdwb3J0LmZyYW1lLCB0ZXJtaW5hbCkpO1xufVxuXG5mdW5jdGlvbiBmYXN0Rm9yd2FyZCh2aWV3cG9ydCkge1xuICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgdmlld3BvcnQudGVybWluYWwsXG4gICAgRnJhbWUuZmFzdEZvcndhcmQodmlld3BvcnQuZnJhbWUpKTtcbn1cblxuZnVuY3Rpb24gbW9kaWZ5VGVybWluYWwoZm5OYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmlld3BvcnQpIHtcbiAgICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgICBUZXJtaW5hbFtmbk5hbWVdKHJlZnJlc2hUZXJtaW5hbCh2aWV3cG9ydCkpLFxuICAgICAgRnJhbWUucmVzZXRQcm9tcHRJbmRleCh2aWV3cG9ydC5mcmFtZSkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZWZyZXNoVGVybWluYWwodmlld3BvcnQpIHtcbiAgdmFyIHRlcm1pbmFsID0gdmlld3BvcnQudGVybWluYWw7XG4gIHJldHVybiBjcmVhdGVUZXJtaW5hbCh0ZXJtaW5hbC5lbnRyaWVzLCB0ZXJtaW5hbC5wcm9tcHRzLCB2aWV3cG9ydC5wcm9tcHQpO1xufVxuXG5mdW5jdGlvbiByZXdpbmQodmlld3BvcnQpIHtcbiAgdmFyIHRlcm1pbmFsID0gdmlld3BvcnQudGVybWluYWw7XG4gIHJldHVybiBjcmVhdGVWaWV3cG9ydChcbiAgICB0ZXJtaW5hbCxcbiAgICBGcmFtZS5yZXdpbmQodmlld3BvcnQuZnJhbWUsIHRlcm1pbmFsKSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdCh2aWV3cG9ydCwgdHJhbnNmb3JtKSB7XG4gIHZhciBmcmFtZSA9IHZpZXdwb3J0LmZyYW1lO1xuICB2YXIgbmV3VGVybWluYWwgPSBUZXJtaW5hbC5zdWJtaXQocmVmcmVzaFRlcm1pbmFsKHZpZXdwb3J0KSwgdHJhbnNmb3JtKTtcbiAgdmFyIGRpZmYgPSBuZXdUZXJtaW5hbC5lbnRyaWVzLmxlbmd0aCAtIHZpZXdwb3J0LnRlcm1pbmFsLmVudHJpZXMubGVuZ3RoO1xuICByZXR1cm4gY3JlYXRlVmlld3BvcnQoXG4gICAgbmV3VGVybWluYWwsXG4gICAgY3JlYXRlRnJhbWUoXG4gICAgICBmcmFtZS5vZmZzZXQgKyBkaWZmLFxuICAgICAgZnJhbWUuc3RhcnQsXG4gICAgICAwKSk7XG59XG5cbmV4cG9ydCBjb25zdCBWaWV3cG9ydCA9IHtcbiAgYWRkQ2hhcixcbiAgY2xlYXIsXG4gIGNvbXBsZXRlV29yZCxcbiAgZGVsZXRlTGVmdENoYXI6IG1vZGlmeVRlcm1pbmFsKCdkZWxldGVMZWZ0Q2hhcicpLFxuICBkZWxldGVQcmVDdXJzb3I6IG1vZGlmeVRlcm1pbmFsKCdkZWxldGVQcmVDdXJzb3InKSxcbiAgZGVsZXRlUmlnaHRDaGFyOiBtb2RpZnlUZXJtaW5hbCgnZGVsZXRlUmlnaHRDaGFyJyksXG4gIGRlbGV0ZVdvcmQ6IG1vZGlmeVRlcm1pbmFsKCdkZWxldGVXb3JkJyksXG4gIGZhc3RGb3J3YXJkLFxuICBtb3ZlQ3Vyc29yTGVmdDogbW9kaWZ5VGVybWluYWwoJ21vdmVDdXJzb3JMZWZ0JyksXG4gIG1vdmVDdXJzb3JSaWdodDogbW9kaWZ5VGVybWluYWwoJ21vdmVDdXJzb3JSaWdodCcpLFxuICBtb3ZlQ3Vyc29yVG9FbmQ6IG1vZGlmeVRlcm1pbmFsKCdtb3ZlQ3Vyc29yVG9FbmQnKSxcbiAgbW92ZUN1cnNvclRvU3RhcnQ6IG1vZGlmeVRlcm1pbmFsKCdtb3ZlQ3Vyc29yVG9TdGFydCcpLFxuICByZXdpbmQsXG4gIHN1Ym1pdFxufVxuIiwiaW1wb3J0IHsgY3JlYXRlRnJhbWUgfSBmcm9tICcuL3R5cGVzL2NyZWF0ZUZyYW1lJztcbmltcG9ydCB7IGNyZWF0ZVByb21wdCB9IGZyb20gJy4vdHlwZXMvY3JlYXRlUHJvbXB0JztcbmltcG9ydCB7IGNyZWF0ZVRlcm1pbmFsIH0gZnJvbSAnLi90eXBlcy9jcmVhdGVUZXJtaW5hbCc7XG5pbXBvcnQgeyBjcmVhdGVWaWV3cG9ydCB9IGZyb20gJy4vdHlwZXMvY3JlYXRlVmlld3BvcnQnO1xuXG5mdW5jdGlvbiBnZXRJbml0aWFsTW9kZWwoKSB7XG4gIHJldHVybiBjcmVhdGVWaWV3cG9ydChcbiAgICBjcmVhdGVUZXJtaW5hbChbXSwgW10sIGNyZWF0ZVByb21wdCgnJywgJycpKSxcbiAgICBjcmVhdGVGcmFtZSgwLCAwLCAwKSk7XG59XG5cbmV4cG9ydCB7IGdldEluaXRpYWxNb2RlbCB9O1xuIiwiZXhwb3J0IGNvbnN0IGNyZWF0ZUZyYW1lID0gZnVuY3Rpb24gKG9mZnNldCwgc3RhcnQsIHByb21wdEluZGV4KSB7XG4gIHJldHVybiB7XG4gICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgc3RhcnQ6IHN0YXJ0LFxuICAgIHByb21wdEluZGV4OiBwcm9tcHRJbmRleFxuICB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVQcm9tcHQgPSBmdW5jdGlvbiAocHJlQ3Vyc29yLCBwb3N0Q3Vyc29yKSB7XG4gIHJldHVybiB7XG4gICAgcHJlQ3Vyc29yOiBwcmVDdXJzb3IsXG4gICAgcG9zdEN1cnNvcjogcG9zdEN1cnNvclxuICB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVUZXJtaW5hbCA9ICBmdW5jdGlvbiAoZW50cmllcywgcHJvbXB0cywgY3VycmVudFByb21wdCkge1xuICByZXR1cm4gIHtcbiAgICBlbnRyaWVzOiBlbnRyaWVzLFxuICAgIHByb21wdHM6IHByb21wdHMsXG4gICAgcHJvbXB0OiBjdXJyZW50UHJvbXB0XG4gIH07XG59O1xuIiwiZnVuY3Rpb24gZ2V0UHJvbXB0KHRlcm1pbmFsLCBmcmFtZSkge1xuICByZXR1cm4gZnJhbWUucHJvbXB0SW5kZXggPT09IDBcbiAgICA/IHRlcm1pbmFsLnByb21wdFxuICAgIDogdGVybWluYWwucHJvbXB0c1tmcmFtZS5wcm9tcHRJbmRleCAtIDFdO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlVmlld3BvcnQgPSBmdW5jdGlvbiAodGVybWluYWwsIGZyYW1lKSB7XG4gIHJldHVybiB7XG4gICAgdGVybWluYWw6IHRlcm1pbmFsLFxuICAgIGZyYW1lOiBmcmFtZSxcbiAgICBwcm9tcHQ6IGdldFByb21wdCh0ZXJtaW5hbCwgZnJhbWUpXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgZGlmZiB9IGZyb20gJy4uL3JpYm9zb21lL2RpZmYnO1xuaW1wb3J0IHsgRVJMS0lORyB9IGZyb20gJy4vdmlldy9yZWNyZWF0ZUNvbnNvbGUnO1xuaW1wb3J0IHsgbW9kaWZ5RWxlbWVudCB9IGZyb20gJy4uL3JpYm9zb21lL2ludGVycHJldGVyJztcblxuZnVuY3Rpb24gcmVuZGVyKF92aWV3TW9kZWwsIHJvb3RDaGlsZCwgY29udHJvbENvbmZpZywgc2Nyb2xsKSB7XG4gIHZhciB2aWV3TW9kZWwgPSBfdmlld01vZGVsO1xuICByZXR1cm4gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgdmFyIGxhYmVscyA9IHsgcHJvbXB0TGFiZWw6IGNvbnRyb2xDb25maWcucHJvbXB0TGFiZWwgfTtcbiAgICB2YXIgbmV3Vmlld01vZGVsID0gRVJMS0lORyhsYWJlbHMsIG1vZGVsKTtcbiAgICBtb2RpZnlFbGVtZW50KHJvb3RDaGlsZCwgZGlmZihuZXdWaWV3TW9kZWwsIHZpZXdNb2RlbCkpO1xuXG4gICAgY29udHJvbENvbmZpZy52aWV3cG9ydCA9IG1vZGVsO1xuICAgIHZpZXdNb2RlbCA9IG5ld1ZpZXdNb2RlbDtcblxuICAgIHNjcm9sbCgpO1xuICB9O1xufVxuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImZ1bmN0aW9uIHN1YnNjcmliZShldmVudFR5cGUsIGV2ZW50SGFuZGxlcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIHN1cHJlc3NEZWZhdWx0KGV2ZW50SGFuZGxlcikpO1xufVxuXG5mdW5jdGlvbiBzdXByZXNzRGVmYXVsdChoYW5kbGVFdmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBoYW5kbGVFdmVudChldmVudCk7XG4gIH07XG59XG5cbmV4cG9ydCB7IHN1YnNjcmliZSB9O1xuIiwiaW1wb3J0IHsgU1BBTiB9IGZyb20gJy4uLy4uL3JpYm9zb21lL2VsZW1lbnRzJztcblxuZnVuY3Rpb24gRVJMX0VOVFJZKHRleHQpIHtcbiAgcmV0dXJuIFNQQU4oX2VudHJ5Q29uZmlnLCB0ZXh0ICsgbmV3bGluZSk7XG59XG5cbmZ1bmN0aW9uIEVSTF9JTlBVVChwcm9tcHRUZXh0LCBwcmVUZXh0LCBwb3N0VGV4dCkge1xuICByZXR1cm4gU1BBTihcbiAgICBfaW5wdXRDb25maWcsXG4gICAgRVJMX1BST01QVChwcm9tcHRUZXh0KSxcbiAgICBFUkxfUFJFKHByZVRleHQpLFxuICAgIEVSTF9DVVJTT1IsXG4gICAgRVJMX1BPU1QocG9zdFRleHQpKTtcbn1cblxuZnVuY3Rpb24gRVJMX1BPU1QodGV4dCkge1xuICByZXR1cm4gU1BBTihfcG9zdENvbmZpZywgdGV4dCk7XG59XG5cbmZ1bmN0aW9uIEVSTF9QUkUodGV4dCkge1xuICByZXR1cm4gU1BBTihfcHJlQ29uZmlnLCB0ZXh0KTtcbn1cblxuZnVuY3Rpb24gRVJMX1BST01QVCh0ZXh0KSB7XG4gIHJldHVybiBTUEFOKF9wcm9tcHRDb25maWcsIHRleHQpO1xufVxuXG52YXIgZW1wdHlTdHJpbmcgPSAnJztcbnZhciBuZXdsaW5lID0gJ1xcbic7XG52YXIgc3BhY2UgPSAnICc7XG52YXIgdW5kZXJzY29yZSA9ICdfJztcblxudmFyIEVSTF9DVVJTT1IgPSBTUEFOKFxuICB7XG4gICAgaWQ6ICdlcmwtY3Vyc29yJyxcbiAgICBjbGFzc2VzOiB7ICdlcmwtY3Vyc29yJzogdHJ1ZSwgJ2VybC1jdXJzb3InOiB0cnVlIH0sXG4gIH0sXG4gIHVuZGVyc2NvcmUpO1xuXG52YXIgX2VudHJ5Q29uZmlnID0ge1xuICBjbGFzc2VzOiB7ICdlcmwtZW50cnknOiB0cnVlLCAnZXJsLWxpbmUnOiB0cnVlIH0sXG59O1xuXG52YXIgX2lucHV0Q29uZmlnID0ge1xuICBpZDogJ2VybC1pbnB1dCcsXG4gIGNsYXNzZXM6IHsgJ2VybC1pbnB1dCc6IHRydWUsICdlcmwtbGluZSc6IHRydWUgfVxufTtcblxudmFyIF9wb3N0Q29uZmlnID0ge1xuICBpZDogJ2VybC1wb3N0JyxcbiAgY2xhc3NlczogeyAnZXJsLXBvc3QnOiB0cnVlIH0sXG4gIHN0eWxlOiB7ICdwb3NpdGlvbic6ICdyZWxhdGl2ZScgfVxufTtcblxudmFyIF9wcmVDb25maWcgPSB7XG4gICBpZDogJ2VybC1wcmUnLFxuICAgY2xhc3NlczogeyAnZXJsLXByZSc6IHRydWUgfVxufTtcblxudmFyIF9wcm9tcHRDb25maWcgPSB7XG4gIGlkOiAnZXJsLXByb21wdCcsXG4gIGNsYXNzZXM6IHsgJ2VybC1wcm9tcHQnOiB0cnVlLCAnZXJsLXByb21wdCc6IHRydWUgfVxufTtcblxuZXhwb3J0IHtcbiAgRVJMX0NVUlNPUixcbiAgRVJMX0VOVFJZLFxuICBFUkxfSU5QVVQsXG4gIEVSTF9QT1NULFxuICBFUkxfUFJFLFxuICBFUkxfUFJPTVBUXG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlQW5kQXR0YWNoRWxlbWVudCB9IGZyb20gJy4uLy4uL3JpYm9zb21lL2ludGVycHJldGVyJztcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVZpZXcocm9vdCwgdmlld01vZGVsKSB7XG4gIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQocm9vdCwgdmlld01vZGVsKTtcbn1cblxuZXhwb3J0IHsgaW5pdGlhbGl6ZVZpZXcgfTtcbiIsImltcG9ydCB7XG4gIEVSTF9DVVJTT1IsXG4gIEVSTF9FTlRSWSxcbiAgRVJMX0lOUFVULFxuICBFUkxfUE9TVCxcbiAgRVJMX1BSRSxcbiAgRVJMX1BST01QVFxufSBmcm9tICcuL2NvbXBvbmVudHMnO1xuXG5pbXBvcnQge1xuICBESVYsXG4gIEgxLFxuICBINCxcbiAgU0VDVElPTixcbiAgU1BBTlxufSBmcm9tICcuLi8uLi9yaWJvc29tZS9lbGVtZW50cyc7XG5cbnZhciBFUkxfSEVBREVSID0gU0VDVElPTihcbiAgICB7XG4gICAgICBpZDogJ2VybC1oZWFkZXInLFxuICAgICAgY2xhc3NlczogeyAnaGVhZCc6IHRydWUgfVxuICAgIH0sXG4gICAgSDEobnVsbCwgJ0VybGvDtm5pZyBMaXNwIENvbnNvbGVcXG4nKSxcbiAgICBINChudWxsLCAnQSB0ZXJtaW5hbCBlbXVsYXRvciBhbmQgbGlzcCBpbnRlcnByZXRlclxcbicpKTtcblxudmFyIGVtcHR5U3RyaW5nID0gJyc7XG5cbmZ1bmN0aW9uIEVSTEtJTkcocHJlZml4ZXMsIHZpZXdwb3J0KSB7XG4gIHZhciBwcm9tcHRMYWJlbCA9IHByZWZpeGVzLnByb21wdExhYmVsO1xuICB2YXIgcHJvbXB0ID0gdmlld3BvcnQucHJvbXB0O1xuICB2YXIgZnJhbWUgPSB2aWV3cG9ydC5mcmFtZTtcblxuICB2YXIgZW50cmllcyA9IHZpZXdwb3J0LnRlcm1pbmFsLmVudHJpZXNcbiAgICAuc2xpY2UoZnJhbWUuc3RhcnQsIGZyYW1lLnN0YXJ0ICsgZnJhbWUub2Zmc2V0KVxuICAgIC5tYXAoc3BlY2lmeUVudHJ5LmJpbmQobnVsbCwgcHJlZml4ZXMpKTtcblxuICB2YXIgcHJlQ3Vyc29yID0gcHJvbXB0LnByZUN1cnNvciAhPSBudWxsID8gcHJvbXB0LnByZUN1cnNvciA6IGVtcHR5U3RyaW5nO1xuICB2YXIgcG9zdEN1cnNvciA9IHByb21wdC5wb3N0Q3Vyc29yICE9IG51bGwgPyBwcm9tcHQucG9zdEN1cnNvciA6IGVtcHR5U3RyaW5nO1xuXG4gIHJldHVybiBESVYoXG4gICAgX2VybGtpbmdDb25maWcsXG4gICAgRElWKFxuICAgICAgbnVsbCxcbiAgICAgIEVSTF9IRUFERVIsXG4gICAgICBESVYoXG4gICAgICAgIF90ZXJtaW5hbENvbmZpZyxcbiAgICAgICAgWF9TQ1JPTExCQVIsXG4gICAgICAgIFlfU0NST0xMQkFSLFxuICAgICAgICBESVYoXG4gICAgICAgICAgX2VybFZpZXdwb3J0Q29uZmlnLFxuICAgICAgICAgIGVudHJpZXMsXG4gICAgICAgICAgRVJMX0lOUFVUKHByb21wdExhYmVsLCBwcm9tcHQucHJlQ3Vyc29yLCBwcm9tcHQucG9zdEN1cnNvcikpKSkpO1xufVxuXG52YXIgWF9TQ1JPTExCQVIgPSBESVYoXG4gIHtcbiAgICBpZDogJ2VybC14LXNjcm9sbC10cmFjaycsXG4gICAgY2xhc3Nlczoge1xuICAgICAgJ2VybC14LXNjcm9sbC10cmFjayc6IHRydWUsXG4gICAgICAnZXJsLXNjcm9sbC10cmFjayc6IHRydWVcbiAgICB9XG4gIH0sXG4gIERJVih7XG4gICAgaWQ6ICdlcmwteC1zY3JvbGwtdGh1bWInLFxuICAgIGNsYXNzZXM6IHtcbiAgICAgICdlcmwteC1zY3JvbGwtdGh1bWInOiB0cnVlLFxuICAgICAgJ2VybC1zY3JvbGwtdGh1bWInOiB0cnVlXG4gICAgfVxuICB9KSk7XG5cbnZhciBZX1NDUk9MTEJBUiA9IERJVihcbiAge1xuICAgIGlkOiAnZXJsLXktc2Nyb2xsLXRyYWNrJyxcbiAgICBjbGFzc2VzOiB7XG4gICAgICAnZXJsLXktc2Nyb2xsLXRyYWNrJzogdHJ1ZSxcbiAgICAgICdlcmwtc2Nyb2xsLXRyYWNrJzogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgRElWKHtcbiAgICBpZDogJ2VybC15LXNjcm9sbC10aHVtYicsXG4gICAgY2xhc3Nlczoge1xuICAgICAgJ2VybC15LXNjcm9sbC10aHVtYic6IHRydWUsXG4gICAgICAnZXJsLXNjcm9sbC10aHVtYic6IHRydWVcbiAgICB9XG4gIH0pKTtcblxudmFyIGRlZmF1bHRDb21wbGV0aW9uTGFiZWwgPSAnICAnO1xudmFyIGRlZmF1bHREaXNwbGF5TGFiZWwgPSAnJztcbnZhciBkZWZhdWx0RXJyb3JMYWJlbCA9ICcuLi4+ICc7XG52YXIgZGVmYXVsdFByb21wdExhYmVsID0gJz4gJztcbnZhciBkZWZhdWx0UmVzcG9uc2VMYWJlbCA9ICc9PT4gJztcblxudmFyIGRlZmF1bHRDb21wbGV0aW9uTGFiZWwgPSAnICAnO1xudmFyIGRlZmF1bHREaXNwbGF5TGFiZWwgPSAnJztcbnZhciBkZWZhdWx0RXJyb3JMYWJlbCA9ICcuLi4+ICc7XG52YXIgZGVmYXVsdFByb21wdExhYmVsID0gJz4gJztcbnZhciBkZWZhdWx0UmVzcG9uc2VMYWJlbCA9ICc9PT4gJztcblxuZnVuY3Rpb24gc3BlY2lmeUVudHJ5KHByZWZpeGVzLCBjb21wb25lbnQpIHtcbiAgdmFyIGNvbXBsZXRpb25MYWJlbCA9IHByZWZpeGVzLmNvbXBsZXRpb25MYWJlbCB8fCBkZWZhdWx0Q29tcGxldGlvbkxhYmVsO1xuICB2YXIgZGlzcGxheUxhYmVsID0gcHJlZml4ZXMuZGlzcGxheUxhYmVsIHx8IGRlZmF1bHREaXNwbGF5TGFiZWw7XG4gIHZhciBlcnJvckxhYmVsID0gcHJlZml4ZXMuZXJyb3JMYWJlbCB8fCBkZWZhdWx0RXJyb3JMYWJlbDtcbiAgdmFyIHByb21wdExhYmVsID0gcHJlZml4ZXMucHJvbXB0TGFiZWwgfHwgZGVmYXVsdFByb21wdExhYmVsO1xuICB2YXIgcmVzcG9uc2VMYWJlbCA9IHByZWZpeGVzLnJlc3BvbnNlTGFiZWwgfHwgZGVmYXVsdFJlc3BvbnNlTGFiZWw7XG5cbiAgdmFyIGVudHJ5O1xuICBzd2l0Y2ggKGNvbXBvbmVudC50eXBlKSB7XG4gICAgY2FzZSAnY29tbWFuZCc6XG4gICAgICBlbnRyeSA9IHByb21wdExhYmVsICsgY29tcG9uZW50LnZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmVzcG9uc2UnOlxuICAgICAgZW50cnkgPSByZXNwb25zZUxhYmVsICsgY29tcG9uZW50LnZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZGlzcGxheSc6XG4gICAgICBlbnRyeSA9IGRpc3BsYXlMYWJlbCArIGNvbXBvbmVudC52YWx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NvbXBsZXRpb24nOlxuICAgICAgZW50cnkgPSBjb21wbGV0aW9uTGFiZWwgKyBjb21wb25lbnQudmFsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdlcnJvcic6XG4gICAgICBlbnRyeSA9IGVycm9yTGFiZWwgKyBjb21wb25lbnQudmFsdWU7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGNvbXBvbmVudCB0eXBlJyk7XG4gIH1cbiAgcmV0dXJuIEVSTF9FTlRSWShlbnRyeSk7XG59XG5cbnZhciBfZXJsa2luZ0NvbmZpZyA9IHtcbiAgaWQ6ICdlcmxraW5nJyxcbiAgY2xhc3NlczogeyAnZXJsa2luZyc6IHRydWUsICdjb250YWluZXInOiB0cnVlIH1cbn07XG52YXIgX2NvbnNvbGVDb25maWcgPSB7IGlkOiAnZXJsLWNvbnNvbGUnIH07XG52YXIgX3Rlcm1pbmFsQ29uZmlnID0geyBjbGFzc2VzOiB7ICd0ZXJtaW5hbCc6IHRydWUgfX07XG52YXIgX2VybFZpZXdwb3J0Q29uZmlnID0geyBjbGFzc2VzOiB7ICdlcmwtdmlld3BvcnQnOiB0cnVlIH19O1xuXG5leHBvcnQgeyBFUkxLSU5HIH07XG4iLCJmdW5jdGlvbiBnZXRDdXJzb3JPZmZzZXQoY3Vyc29yLCBub2RlKSB7XG4gIHZhciBtYXJnaW4gPSA1O1xuICByZXR1cm4gY3Vyc29yLm9mZnNldExlZnQgKyBjdXJzb3Iub2Zmc2V0V2lkdGggKyBtYXJnaW4gLSBub2RlLm9mZnNldFdpZHRoO1xufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50KGlkKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG59XG5cbmZ1bmN0aW9uIGdldFBlcmNlbnRhZ2UobnVtYmVyKSB7XG4gIHJldHVybiAoMTAwICogbnVtYmVyKSArICclJztcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnQoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlcmwtdmlld3BvcnQnKVswXTtcbn1cblxuZnVuY3Rpb24gb25FdmVudChldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIF9zY3JvbGwobm9kZSwgY3Vyc29yKSB7XG4gIG5vZGUuc2Nyb2xsVG9wID0gbm9kZS5zY3JvbGxIZWlnaHQgLSBub2RlLmNsaWVudEhlaWdodDtcbiAgbm9kZS5zY3JvbGxMZWZ0ID0gZ2V0Q3Vyc29yT2Zmc2V0KGN1cnNvciwgbm9kZSk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbChjc3NTY3JvbGxiYXJEZXRlY3RlZCkge1xuICBpZiAoY3NzU2Nyb2xsYmFyRGV0ZWN0ZWQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGN1cnNvciA9IGdldEVsZW1lbnQoJ2VybC1jdXJzb3InKTtcbiAgICAgIF9zY3JvbGwoZ2V0Vmlld3BvcnQoKSwgY3Vyc29yKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmlld3BvcnQgPSBnZXRWaWV3cG9ydCgpO1xuICAgIHZhciBjdXJzb3IgPSBnZXRFbGVtZW50KCdlcmwtY3Vyc29yJyk7XG4gICAgdmFyIHhUcmFjayA9IGdldEVsZW1lbnQoJ2VybC14LXNjcm9sbC10cmFjaycpO1xuICAgIHZhciB4VGh1bWIgPSBnZXRFbGVtZW50KCdlcmwteC1zY3JvbGwtdGh1bWInKTtcbiAgICB2YXIgeVRyYWNrID0gZ2V0RWxlbWVudCgnZXJsLXktc2Nyb2xsLXRyYWNrJyk7XG4gICAgdmFyIHlUaHVtYiA9IGdldEVsZW1lbnQoJ2VybC15LXNjcm9sbC10aHVtYicpO1xuICAgIHZhciBwcm9tcHQgPSBnZXRFbGVtZW50KCdlcmwtcHJvbXB0Jyk7XG5cbiAgICB2YXIgdmlld3BvcnRXaWR0aCA9IHZpZXdwb3J0Lm9mZnNldFdpZHRoO1xuICAgIHZhciB2aWV3cG9ydEhlaWdodCA9IHZpZXdwb3J0Lm9mZnNldEhlaWdodDtcblxuICAgIHNldFhUaHVtYlZpc2liaWxpdHkodmlld3BvcnQsIHZpZXdwb3J0V2lkdGgsIHhUcmFjaywgeFRodW1iLCBjdXJzb3IsIHByb21wdCk7XG4gICAgc2V0WVRodW1iVmlzaWJpbGl0eSh2aWV3cG9ydCwgdmlld3BvcnRIZWlnaHQsIHlUcmFjaywgeVRodW1iLCBjdXJzb3IpO1xuICAgIHNjcm9sbEhvcml6b250YWxseSh2aWV3cG9ydCwgdmlld3BvcnRXaWR0aCwgeFRyYWNrLCB4VGh1bWIpO1xuICAgIHNjcm9sbFZlcnRpY2FsbHkodmlld3BvcnQsIHZpZXdwb3J0SGVpZ2h0LCB5VHJhY2ssIHlUaHVtYik7XG5cbiAgICBfc2Nyb2xsKHZpZXdwb3J0LCBjdXJzb3IpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzY3JvbGxCYXJIb3Jpem9udGFsbHkoeFRodW1iLCBsZWZ0UmF0aW8pIHtcbiAgeFRodW1iLnN0eWxlLmxlZnQgPSBnZXRQZXJjZW50YWdlKGxlZnRSYXRpbyk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbEJhclZlcnRpY2FsbHkoeVRodW1iLCB0b3BSYXRpbykge1xuICB5VGh1bWIuc3R5bGUudG9wID0gZ2V0UGVyY2VudGFnZSh0b3BSYXRpbyk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbENvbnRlbnRIb3Jpem9udGFsbHkodmlld3BvcnQsIGxlZnRSYXRpbykge1xuICB2aWV3cG9ydC5zY3JvbGxMZWZ0ID0gbGVmdFJhdGlvICogdmlld3BvcnQuc2Nyb2xsV2lkdGg7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbENvbnRlbnRWZXJ0aWNhbGx5KHZpZXdwb3J0LCB0b3BSYXRpbykge1xuICB2aWV3cG9ydC5zY3JvbGxUb3AgPSB0b3BSYXRpbyAqIHZpZXdwb3J0LnNjcm9sbEhlaWdodDtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsVmVydGljYWxseSh2aWV3cG9ydCwgdmlld3BvcnRIZWlnaHQsIHlUcmFjaywgeVRodW1iKSB7XG4gIHZhciB5VGh1bWJIZWlnaHQgPSB5VGh1bWIub2Zmc2V0SGVpZ2h0O1xuICB2YXIgeVRyYWNrSGVpZ2h0ID0geVRyYWNrLm9mZnNldEhlaWdodDtcbiAgdmFyIHVsbGFnZSA9IHlUcmFja0hlaWdodCAtIHlUaHVtYkhlaWdodDtcblxuICBmdW5jdGlvbiBtb3VzZU1vdmVfdmVydGljYWwoZXZlbnQpIHtcbiAgICB2YXIgX3RvcCA9IGV2ZW50LmNsaWVudFkgLSB5VHJhY2suZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIHZhciB0b3AgPSBfdG9wIDwgMCA/IDAgOiBfdG9wID4gdWxsYWdlID8gdWxsYWdlIDogX3RvcDtcbiAgICB2YXIgdG9wUmF0aW8gPSB0b3AgLyB5VHJhY2tIZWlnaHQ7XG4gICAgc2Nyb2xsQmFyVmVydGljYWxseSh5VGh1bWIsIHRvcFJhdGlvKTtcbiAgICBzY3JvbGxDb250ZW50VmVydGljYWxseSh2aWV3cG9ydCwgdG9wUmF0aW8pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1vdXNlRG93bl92ZXJ0aWNhbChldmVudCkge1xuICAgIHlUaHVtYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDAsIDgwLCAwKSc7XG4gICAgb25FdmVudCgnbW91c2Vtb3ZlJywgbW91c2VNb3ZlX3ZlcnRpY2FsKTtcbiAgICBvbkV2ZW50KCdtb3VzZXVwJywgbW91c2VVcF92ZXJ0aWNhbCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbW91c2VVcF92ZXJ0aWNhbChldmVudCkge1xuICAgIHlUaHVtYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSg1NSwgNTMsIDUwLCAwLjUpJztcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVfdmVydGljYWwpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwX3ZlcnRpY2FsKTtcbiAgfTtcblxuICB5VGh1bWIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duX3ZlcnRpY2FsKTtcbiAgeVRodW1iLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bl92ZXJ0aWNhbCk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbEhvcml6b250YWxseSh2aWV3cG9ydCwgdmlld3BvcnRXaWR0aCwgeFRyYWNrLCB4VGh1bWIpIHtcbiAgdmFyIHhUaHVtYldpZHRoID0geFRodW1iLm9mZnNldFdpZHRoO1xuICB2YXIgeFRyYWNrV2lkdGggPSB4VHJhY2sub2Zmc2V0V2lkdGg7XG4gIHZhciB1bGxhZ2UgPSB4VHJhY2tXaWR0aCAtIHhUaHVtYldpZHRoO1xuXG4gIGZ1bmN0aW9uIG1vdXNlTW92ZV9ob3Jpem9udGFsKGV2ZW50KSB7XG4gICAgdmFyIF9sZWZ0ID0gZXZlbnQuY2xpZW50WCAtIHhUcmFjay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgIHZhciBsZWZ0ID0gX2xlZnQgPCAwID8gMCA6IF9sZWZ0ID4gdWxsYWdlID8gdWxsYWdlIDogX2xlZnQ7XG4gICAgdmFyIGxlZnRSYXRpbyA9IGxlZnQgLyB4VHJhY2tXaWR0aDtcbiAgICBzY3JvbGxCYXJIb3Jpem9udGFsbHkoeFRodW1iLCBsZWZ0UmF0aW8pO1xuICAgIHNjcm9sbENvbnRlbnRIb3Jpem9udGFsbHkodmlld3BvcnQsIGxlZnRSYXRpbyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbW91c2VVcF9ob3Jpem9udGFsKGV2ZW50KSB7XG4gICAgeFRodW1iLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDU1LCA1MywgNTAsIDAuNSknO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZV9ob3Jpem9udGFsKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcF9ob3Jpem9udGFsKTtcbiAgfTtcblxuICBmdW5jdGlvbiBtb3VzZURvd25faG9yaXpvbnRhbChldmVudCkge1xuICAgIHhUaHVtYi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDAsIDgwLCAwKSc7XG4gICAgb25FdmVudCgnbW91c2Vtb3ZlJywgbW91c2VNb3ZlX2hvcml6b250YWwpO1xuICAgIG9uRXZlbnQoJ21vdXNldXAnLCBtb3VzZVVwX2hvcml6b250YWwpO1xuICB9O1xuXG4gIHhUaHVtYi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25faG9yaXpvbnRhbCk7XG4gIHhUaHVtYi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25faG9yaXpvbnRhbCk7XG59XG5cbmZ1bmN0aW9uIHNldFhUaHVtYlZpc2liaWxpdHkodmlld3BvcnQsIHZpZXdwb3J0V2lkdGgsIHhUcmFjaywgeFRodW1iLCBjdXJzb3IsIHByb21wdCkge1xuICB2YXIgeFRyYWNrV2lkdGggPSB4VHJhY2sub2Zmc2V0V2lkdGg7XG4gIHZhciB0ZXJtaW5hbFdpZHRoID0gdmlld3BvcnQuc2Nyb2xsV2lkdGg7XG4gIHZhciB4VGh1bWJTdHlsZSA9IHhUaHVtYi5zdHlsZTtcblxuICBpZiAodmlld3BvcnRXaWR0aCA8IHRlcm1pbmFsV2lkdGgpIHtcbiAgICB2YXIgZnVsbFByb21wdE9mZnNldFdpZHRoID0gcHJvbXB0Lm9mZnNldExlZnQgKyBwcm9tcHQub2Zmc2V0V2lkdGg7XG4gICAgdmFyIHN0YXJ0ID0gZnVsbFByb21wdE9mZnNldFdpZHRoO1xuICAgIHZhciB2aWV3cG9ydFJhdGlvID0gdmlld3BvcnRXaWR0aCAvIHRlcm1pbmFsV2lkdGg7XG4gICAgdmFyIHhUaHVtYldpZHRoID0gdmlld3BvcnRSYXRpbyAqIHhUcmFja1dpZHRoO1xuICAgIHZhciB2aWV3cG9ydFBlcmNlbnRhZ2UgPSBnZXRQZXJjZW50YWdlKHZpZXdwb3J0UmF0aW8pO1xuICAgIHZhciB1bGxhZ2UgPSB4VHJhY2tXaWR0aCAtIHhUaHVtYldpZHRoO1xuICAgIHZhciB4UG9zaXRpb24gPSBjdXJzb3Iub2Zmc2V0TGVmdCArIGN1cnNvci5vZmZzZXRXaWR0aCAtIHN0YXJ0O1xuICAgIHZhciBjdXJzb3JSYXRpbyA9ICh4UG9zaXRpb24gLyB0ZXJtaW5hbFdpZHRoKSAqICh1bGxhZ2UgLyB4VHJhY2tXaWR0aCk7XG4gICAgdmFyIGN1cnNvclBlcmNlbnRhZ2UgPSBnZXRQZXJjZW50YWdlKGN1cnNvclJhdGlvKTtcblxuICAgIHhUaHVtYlN0eWxlLmxlZnQgPSBjdXJzb3JQZXJjZW50YWdlO1xuICAgIHhUaHVtYlN0eWxlLndpZHRoID0gdmlld3BvcnRQZXJjZW50YWdlO1xuICAgIHhUaHVtYlN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH0gZWxzZSB7XG4gICAgeFRodW1iU3R5bGUubGVmdCA9IDA7XG4gICAgeFRodW1iU3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgeFRodW1iU3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFlUaHVtYlZpc2liaWxpdHkodmlld3BvcnQsIHZpZXdwb3J0SGVpZ2h0LCB5VHJhY2ssIHlUaHVtYiwgY3Vyc29yKSB7XG4gIHZhciB5VHJhY2tIZWlnaHQgPSB5VHJhY2sub2Zmc2V0SGVpZ2h0O1xuICB2YXIgdGVybWluYWxIZWlnaHQgPSB2aWV3cG9ydC5zY3JvbGxIZWlnaHQ7XG4gIHZhciB5VGh1bWJTdHlsZSA9IHlUaHVtYi5zdHlsZTtcblxuICBpZiAodmlld3BvcnRIZWlnaHQgPCB0ZXJtaW5hbEhlaWdodCkge1xuICAgIHZhciBzdGFydCA9IHZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB2YXIgdmlld3BvcnRSYXRpbyA9IHZpZXdwb3J0SGVpZ2h0IC8gdGVybWluYWxIZWlnaHQ7XG4gICAgdmFyIHlUaHVtYkhlaWdodCA9IHZpZXdwb3J0UmF0aW8gKiB5VHJhY2tIZWlnaHQ7XG4gICAgdmFyIHZpZXdwb3J0UGVyY2VudGFnZSA9IGdldFBlcmNlbnRhZ2Uodmlld3BvcnRSYXRpbyk7XG4gICAgdmFyIHVsbGFnZSA9IHlUcmFja0hlaWdodCAtIHlUaHVtYkhlaWdodDtcbiAgICB2YXIgeVBvc2l0aW9uID0gY3Vyc29yLm9mZnNldFRvcCArIGN1cnNvci5vZmZzZXRIZWlnaHQgLSBzdGFydDtcbiAgICB2YXIgY3Vyc29yUmF0aW8gPSAoeVBvc2l0aW9uIC8gdGVybWluYWxIZWlnaHQpICogKHVsbGFnZSAvIHlUcmFja0hlaWdodCk7XG4gICAgdmFyIGN1cnNvclBlcmNlbnRhZ2UgPSBnZXRQZXJjZW50YWdlKGN1cnNvclJhdGlvKTtcblxuICAgIHlUaHVtYlN0eWxlLnRvcCA9IGN1cnNvclBlcmNlbnRhZ2U7XG4gICAgeVRodW1iU3R5bGUuaGVpZ2h0ID0gdmlld3BvcnRQZXJjZW50YWdlO1xuICAgIHlUaHVtYlN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIH0gZWxzZSB7XG4gICAgeVRodW1iU3R5bGUudG9wID0gMDtcbiAgICB5VGh1bWJTdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgeVRodW1iU3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICB9XG59XG5cbmV4cG9ydCB7IHNjcm9sbCB9O1xuIiwiaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4vY29uc29sZS9pbml0aWFsaXplJztcbmltcG9ydCB7IGludGVycHJldCB9ICBmcm9tICcuL2xpc3AvaW50ZXJwcmV0JztcbmltcG9ydCB7IGtleVRva2VucyB9ICBmcm9tICcuL2xpc3Ava2V5VG9rZW5zJztcblxudmFyIF9rZXlUb2tlbnMgPSAga2V5VG9rZW5zLm1hcChmdW5jdGlvbiAoa2V5VG9rZW4pIHtcbiAgcmV0dXJuICc6JyArIGtleVRva2VuO1xufSk7XG5cbnZhciBwcm9tcHRMYWJlbCA9ICdMaXNwPiAnO1xuXG5mdW5jdGlvbiBnZXRDYW5kaWRhdGVzKHByZWZpeCkge1xuICB2YXIgZW52S2V5cyA9IGludGVycHJldChcIihrZXlzICgtZ2V0LWN1cnJlbnQtZW52LSkpXCIpWzBdXG4gICAgICAudmFsdWVcbiAgICAgIC5zbGljZSgxLCAtMSlcbiAgICAgIC5zcGxpdCgnICcpO1xuICByZXR1cm4gZ2V0TWF0Y2hlcyhwcmVmaXgsIF9rZXlUb2tlbnMuY29uY2F0KGVudktleXMpKTtcbn1cblxuZnVuY3Rpb24gZ2V0TWF0Y2hlcyhwcmVmaXgsIHdvcmRzKSB7XG4gIGlmICghL15bLWEtekEtWjAtOV0rJC8udGVzdChwcmVmaXgpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciByZWdleCA9IFJlZ0V4cCgnKF58XFxXKTonICsgcHJlZml4KTtcbiAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgZm9yICh2YXIgaW5kZXggaW4gd29yZHMpIHtcbiAgICB2YXIgd29yZCA9IHdvcmRzW2luZGV4XTtcbiAgICBpZiAocmVnZXgudGVzdCh3b3JkKSkge1xuICAgICAgbWF0Y2hlcy5wdXNoKHdvcmQuc2xpY2UoMSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWF0Y2hlcztcbn1cblxuaW5pdGlhbGl6ZSh7XG4gIG5vZGVJZDogJ3ZpZXdwb3J0JyxcbiAgcHJvbXB0TGFiZWw6IHByb21wdExhYmVsLFxuICB0cmFuc2Zvcm06IGludGVycHJldCxcbiAgZ2V0Q2FuZGlkYXRlczogZ2V0Q2FuZGlkYXRlc1xufSk7XG4iLCJpbXBvcnQgeyBjb21tZW50U2lnbmFsIH0gZnJvbSAnLi9jb21tZW50U2lnbmFsJztcbmltcG9ydCB7IGV2YWx1YXRlIH0gZnJvbSAnLi9ldmFsdWF0ZSc7XG5cbnZhciBfcHJvY2VzcyA9IGZ1bmN0aW9uKHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oZW52cykge1xuICAgIHJldHVybiBmdW5jdGlvbihzb3VyY2VDb2RlKSB7XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgdmFyIGFkZFJlc3VsdCA9IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICB9O1xuICAgICAgdmFyIHZhbHVlID0gZXZhbHVhdGUoZW52cywgYWRkUmVzdWx0KSh0cmFuc2Zvcm0oc291cmNlQ29kZSkpO1xuICAgICAgdmFyIHJlc3VsdCA9ICh2YWx1ZSA9PT0gY29tbWVudFNpZ25hbClcbiAgICAgICAgPyB7IGVmZmVjdDogeyB0eXBlOiAnY29tbWVudCcgfSB9XG4gICAgICAgIDogeyBlZmZlY3Q6IGZhbHNlLCB2YWx1ZTogdmFsdWUgfTtcbiAgICAgIGFkZFJlc3VsdChyZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydCB7IF9wcm9jZXNzIH07XG4iLCJ2YXIgY29tbWVudFNpZ25hbCA9IHt9O1xuXG5leHBvcnQgeyBjb21tZW50U2lnbmFsIH07XG4iLCJ2YXIgYWRkRW52ID0gZnVuY3Rpb24gKGVudlN0YWNrLCBuZXdFbnYpIHtcbiAgdmFyIGNvcHkgPSBlbnZTdGFjay5zbGljZSgwKTtcbiAgY29weS51bnNoaWZ0KG5ld0Vudik7XG4gIHJldHVybiBjb3B5O1xufTtcblxudmFyIGdldExhc3QgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xufTtcblxudmFyIGxvb2t1cCA9IGZ1bmN0aW9uIChlbnZTdGFjaywga2V5KSB7XG4gIHZhciBjb3B5ID0gZW52U3RhY2suc2xpY2UoMCk7XG4gIHdoaWxlIChjb3B5Lmxlbmd0aCAhPT0gMCkge1xuICAgIHZhciBlbnYgPSBjb3B5WzBdO1xuICAgIHZhciB2YWx1ZSA9IGVudltrZXldO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvcHkuc2hpZnQoKTtcbiAgfVxuICB0aHJvdyBcIlZBTFVFIENPUlJFU1BPTkRJTkcgVE8gXFxcIlwiICsga2V5ICsgXCJcXFwiIERPRVMgTk9UIEVYSVNUIElOIEVOVi1TVEFDS1wiO1xufTtcblxudmFyIHNldCA9IGZ1bmN0aW9uIChlbnYsIGtleSwgdmFsdWUpIHtcbiAgZW52W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxudmFyIHNldE1haW5FbnYgPSBmdW5jdGlvbiAoZW52U3RhY2ssIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHNldChnZXRMYXN0KGVudlN0YWNrKSwga2V5LCB2YWx1ZSk7XG59O1xuXG52YXIgdW5zZXQgPSBmdW5jdGlvbiAoZW52LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZW52W2tleV07XG4gIGRlbGV0ZSBlbnZba2V5XTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxudmFyIHVuc2V0TWFpbkVudiA9IGZ1bmN0aW9uIChlbnZTdGFjaywga2V5KSB7XG4gIHJldHVybiB1bnNldChnZXRMYXN0KGVudlN0YWNrKSwga2V5KTtcbn07XG5cbmV4cG9ydCB7XG4gIGFkZEVudixcbiAgbG9va3VwLFxuICBzZXRNYWluRW52LFxuICB1bnNldE1haW5FbnZcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFcmxCb29sZWFuIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxJZGVudGlmaWVyIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTnVtYmVyIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxTdHJpbmcgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGVybE5pbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXh0cmFjdEpzVmFsdWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGZyb21BcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgaXNKc05hTiB9IGZyb20gJy4vanMtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzSnNOdW1iZXIgfSBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0pzU3RyaW5nIH0gZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyB0b0FycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5cbnZhciAgX19zbGljZSAgPSBbXS5zbGljZTtcbnZhciBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGFkZCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIobmJycy5yZWR1Y2UoZnVuY3Rpb24oeCwgbmJyKSB7XG4gICAgcmV0dXJuIHggKz0gbmJyO1xuICB9KSk7XG59O1xuXG52YXIgY29udGFpbnMgPSBmdW5jdGlvbihpbmRleCwga2V5KSB7XG4gIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKGtleSBpbiBpbmRleCk7XG59O1xuXG52YXIgZGlzc29jID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpbmRleCA9IGFyZ3VtZW50c1swXTtcbiAgdmFyIGtleXMgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICB2YXIgbGVuID0ga2V5cy5sZW5ndGg7XG4gIHZhciBjb3B5ID0ge307XG4gIGZvciAodmFyIGtleSBpbiBpbmRleCkge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoaW5kZXgsIGtleSkpIGNvbnRpbnVlO1xuICAgIHZhciB2YWx1ZSA9IGluZGV4W2tleV07XG4gICAgY29weVtrZXldID0gdmFsdWU7XG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGRlbGV0ZSBjb3B5W2tleV07XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUVybEluZGV4KGNvcHkpO1xufTtcblxudmFyIGRpdmlkZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIobmJycy5yZWR1Y2UoZnVuY3Rpb24oeCwgbmJyKSB7XG4gICAgcmV0dXJuIHggLz0gbmJyO1xuICB9KSk7XG59O1xuXG52YXIgZXhwb25lbnRpYXRlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihuYnJzLnJlZHVjZShmdW5jdGlvbih4LCBuYnIpIHtcbiAgICByZXR1cm4gTWF0aC5wb3coeCwgbmJyKTtcbiAgfSkpO1xufTtcblxudmFyIGdldCA9IGZ1bmN0aW9uKGpzSW5kZXgsIGpzS2V5KSB7XG4gIHJldHVybiBqc0luZGV4W2pzS2V5XTtcbn07XG5cbnZhciBnZXRFbnZpcm9ubWVudCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICB2YXIgZW52aXJvbm1lbnQgPSBjb25maWcuZW52aXJvbm1lbnQ7XG4gIHNldENvcmVGbnNPbkpzVmFsdWVzX2JhbmdfKGVudmlyb25tZW50LCBmdW5jdGlvbnNPbkpzVmFsdWVzKTtcbiAgcmV0dXJuIGVudmlyb25tZW50O1xufTtcblxudmFyIGdyZWF0ZXJUaGFuT3JFcXVhbCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKG5icnNbMF0gPj0gbmJyc1sxXSk7XG59O1xuXG52YXIgZ3JlYXRlclRoYW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsQm9vbGVhbihuYnJzWzBdID4gbmJyc1sxXSk7XG59O1xuXG52YXIgaW5kZXggPSBmdW5jdGlvbigpIHtcbiAgdmFyIGFyZ3MgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBfaW5kZXggPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBrID0gYXJnc1tpXTtcbiAgICBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgIF9pbmRleFtrXSA9IGFyZ3NbaSArIDFdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY3JlYXRlRXJsSW5kZXgoX2luZGV4KTtcbn07XG5cbnZhciBrZXlzID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgdmFyIF9rZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBpbmRleCkge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoaW5kZXgsIGtleSkpIGNvbnRpbnVlO1xuICAgIHZhciB2YWx1ZSA9IGluZGV4W2tleV07XG4gICAgdmFyIGpzTmJyID0gcGFyc2VGbG9hdChrZXksIDEwKTtcbiAgICB2YXIgX2tleSA9IGlzSnNOYU4oanNOYnIpXG4gICAgICAgID8gKGtleVswXSA9PT0gJzonID8gY3JlYXRlRXJsSWRlbnRpZmllciA6IGNyZWF0ZUVybFN0cmluZykoa2V5KVxuICAgICAgICA6IGNyZWF0ZUVybE51bWJlcihqc05icik7XG4gICAgX2tleXMucHVzaChfa2V5KTtcbiAgfVxuICByZXR1cm4gZnJvbUFycmF5KF9rZXlzKTtcbn07XG5cbnZhciBsZW5ndGhTdHJpbmcgPSBmdW5jdGlvbihqc1ZhbCkge1xuICBpZiAoIWlzSnNTdHJpbmcoanNWYWwpKSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKGpzVmFsLmxlbmd0aCAtIDIpO1xufTtcblxudmFyIGxlc3NUaGFuID0gZnVuY3Rpb24oKSB7XG4gIHZhciBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4obmJyc1swXSA8IG5icnNbMV0pO1xufTtcblxudmFyIGxlc3NUaGFuT3JFcXVhbCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbmJycyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHJldHVybiBjcmVhdGVFcmxCb29sZWFuKG5icnNbMF0gPD0gbmJyc1sxXSk7XG59O1xuXG52YXIgbGlmdCA9IGZ1bmN0aW9uKGZuT25Kc1ZhbHVlcykge1xuICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWVMaXN0KSB7XG4gICAgcmV0dXJuIGZuT25Kc1ZhbHVlcy5hcHBseShudWxsLCAodG9BcnJheShlcmxWYWx1ZUxpc3QpKS5tYXAoZXh0cmFjdEpzVmFsdWUpKTtcbiAgfTtcbn07XG5cbnZhciBtYXggPSBmdW5jdGlvbigpIHtcbiAgdmFyIG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKE1hdGgubWF4LmFwcGx5KE1hdGgsIG5icnMpKTtcbn07XG5cbnZhciBtaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKE1hdGgubWluLmFwcGx5KE1hdGgsIG5icnMpKTtcbn07XG5cbnZhciBtb2QgPSBmdW5jdGlvbihuYnIwLCBuYnIxKSB7XG4gIHJldHVybiBjcmVhdGVFcmxOdW1iZXIobmJyMCAlIG5icjEpO1xufTtcblxudmFyIG11bHRpcGx5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBuYnJzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihuYnJzLnJlZHVjZShmdW5jdGlvbih4LCBuYnIpIHtcbiAgICByZXR1cm4geCAqPSBuYnI7XG4gIH0pKTtcbn07XG5cbnZhciBuZWdhdGUgPSBmdW5jdGlvbihuYnIpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcigtMSAqIG5icik7XG59O1xuXG52YXIgcGFyc2VOdW1iZXIgPSBmdW5jdGlvbihqc1ZhbCkge1xuICBpZiAoaXNKc051bWJlcihqc1ZhbCkpIHtcbiAgICByZXR1cm4ganNWYWw7XG4gIH1cbiAgaWYgKCFpc0pzU3RyaW5nKGpzVmFsKSkge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbiAgdmFyIGpzTmJyID0gcGFyc2VGbG9hdChzdHJpcFF1b3Rlcyhqc1ZhbCksIDEwKTtcbiAgaWYgKGlzSnNOYU4oanNOYnIpKSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKGpzTmJyKTtcbiAgfVxufTtcblxudmFyIHNldENvcmVGbnNPbkpzVmFsdWVzX2JhbmdfID0gZnVuY3Rpb24oZW52LCBmbnMpIHtcbiAgdmFyIF9yZXN1bHRzID0gW107XG4gIGZvciAodmFyIGZuTmFtZSBpbiBmbnMpIHtcbiAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGZucywgZm5OYW1lKSkgY29udGludWU7XG4gICAgdmFyIGZuID0gZm5zW2ZuTmFtZV07XG4gICAgZW52W2ZuTmFtZV0gPSBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uKGxpZnQoZm4pKTtcbiAgICBfcmVzdWx0cy5wdXNoKGVudltmbk5hbWVdKTtcbiAgfVxuICByZXR1cm4gX3Jlc3VsdHM7XG59O1xuXG52YXIgc3VidHJhY3QgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG5icnMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKG5icnMucmVkdWNlKGZ1bmN0aW9uKHgsIG5icikge1xuICAgIHJldHVybiB4IC09IG5icjtcbiAgfSkpO1xufTtcblxudmFyIHZhbHMgPSBmdW5jdGlvbihpbmRleCkge1xuICB2YXIgdmFsdWVzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBpbmRleCkge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoaW5kZXgsIGtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgdmFsdWUgPSBpbmRleFtrZXldO1xuICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZnJvbUFycmF5KHZhbHVlcyk7XG59O1xuXG52YXIgZnVuY3Rpb25zT25Kc1ZhbHVlcyA9IHtcbiAgJysnOiBhZGQsXG4gICdjb250YWlucz8nOiBjb250YWlucyxcbiAgJ2Rpc3NvYyc6IGRpc3NvYyxcbiAgJy8nOiBkaXZpZGUsXG4gICcqKic6IGV4cG9uZW50aWF0ZSxcbiAgJ2dldCc6IGdldCxcbiAgJz4nOiBncmVhdGVyVGhhbixcbiAgJz49JzogZ3JlYXRlclRoYW5PckVxdWFsLFxuICAnaW5kZXgnOiBpbmRleCxcbiAgJ2tleXMnOiBrZXlzLFxuICAnbGVuZ3RoLXN0cmluZyc6IGxlbmd0aFN0cmluZyxcbiAgJ21heCc6IG1heCxcbiAgJ21pbic6IG1pbixcbiAgJzwnOiBsZXNzVGhhbixcbiAgJzw9JzogbGVzc1RoYW5PckVxdWFsLFxuICAnJSc6IG1vZCxcbiAgJyonOiBtdWx0aXBseSxcbiAgJ25lZ2F0ZSc6IG5lZ2F0ZSxcbiAgJ3BhcnNlLW51bWJlcic6IHBhcnNlTnVtYmVyLFxuICAnLSc6IHN1YnRyYWN0LFxuICAndmFscyc6IHZhbHNcbn07XG5cbmV4cG9ydCB7IGdldEVudmlyb25tZW50IH07XG4iLCJpbXBvcnQgeyBhcmVFcXVhbCB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgY2FyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBjZHIgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGNpcmN1bXBlbmRRdW90ZXMgfSBmcm9tICcuL2pzLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjb25jYXQgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGNyZWF0ZUVybEF0b20gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybEJvb2xlYW4gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybEluZGV4IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxOdW1iZXIgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3ltYm9sIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBkcm9wIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBlcmxGYWxzZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXJsSWdub3JlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBlcmxOaWwgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGVybFRydWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGV4dHJhY3RKc1ZhbHVlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBmcm9tQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGludGVycHJldCB9IGZyb20gJy4vaW50ZXJwcmV0JztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGlzRXJsQXRvbSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxDb3JlUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybEJvb2xlYW4gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsRmFsc2UgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTGlzdCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxNYWNybyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxOaWwgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTnVtYmVyIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxTeW1ib2wgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsVHJ1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBsYXN0IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBuZXh0IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyByZWN1cnNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyByZWR1Y2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHJldmVyc2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gJy4vc2VyaWFsaXplJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHRvQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHRvUGFydGlhbEFycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5cbnZhciBfX3NsaWNlICAgPSBbXS5zbGljZTtcbnZhciBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGFwcGVuZCA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIGVybEFyZ3NBcnJheSA9IHRvQXJyYXkoZXJsQXJncyk7XG4gIHZhciBlcmxMaXN0ID0gZXJsQXJnc0FycmF5WzBdO1xuICB2YXIgZXJsVmFsdWVzID0gMiA8PSBlcmxBcmdzQXJyYXkubGVuZ3RoID8gX19zbGljZS5jYWxsKGVybEFyZ3NBcnJheSwgMSkgOiBbXTtcbiAgcmV0dXJuIGNvbmNhdChlcmxMaXN0LCBmcm9tQXJyYXkoZXJsVmFsdWVzKSk7XG59O1xuXG52YXIgX2FyZUVxdWFsID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIHZhciBlcmxWYWx1ZTAgPSBwYXJ0aWFsQXJyYXlbMF07XG4gIHZhciBlcmxWYWx1ZTEgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIHZhciBfX2FyZUVxdWFsID0gZnVuY3Rpb24oZXJsVmFsdWUwLCBlcmxWYWx1ZTEpIHtcbiAgICBpZiAoaXNFcmxMaXN0KGVybFZhbHVlMCkgJiYgaXNFcmxMaXN0KGVybFZhbHVlMSkpIHtcbiAgICAgIHJldHVybiBhcmVFcXVhbChlcmxWYWx1ZTAsIGVybFZhbHVlMSwgX19hcmVFcXVhbCk7XG4gICAgfSBlbHNlIGlmIChpc0VybEluZGV4KGVybFZhbHVlMCkgJiYgaXNFcmxJbmRleChlcmxWYWx1ZTEpKSB7XG4gICAgICB2YXIganNJbmRleDAgPSBlcmxWYWx1ZTAuanNWYWx1ZTtcbiAgICAgIHZhciBqc0luZGV4MSA9IGVybFZhbHVlMS5qc1ZhbHVlO1xuICAgICAgcmV0dXJuIChfX2FyZUVxdWFsKGtleXMoanNJbmRleDApLCBrZXlzKGpzSW5kZXgxKSkpXG4gICAgICAgICYmIChfX2FyZUVxdWFsKHZhbHMoanNJbmRleDApLCB2YWxzKGpzSW5kZXgxKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXJsVmFsdWUwLmpzVmFsdWUgPT09IGVybFZhbHVlMS5qc1ZhbHVlO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4oX19hcmVFcXVhbChlcmxWYWx1ZTAsIGVybFZhbHVlMSkpO1xufTtcblxudmFyIGFzc29jID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgYXJncztcbiAgdmFyIGpzSW5kZXggPSBleHRyYWN0SnNWYWx1ZShjYXIoZXJsQXJncykpO1xuICBhcmdzID0gY2RyKGVybEFyZ3MpO1xuICB2YXIgY29weSA9IHt9O1xuICBmb3IgKHZhciBrZXkgaW4ganNJbmRleCkge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoanNJbmRleCwga2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHZhciB2YWx1ZSA9IGpzSW5kZXhba2V5XTtcbiAgICBjb3B5W2tleV0gPSB2YWx1ZTtcbiAgfVxuICB3aGlsZSAoIWlzRW1wdHkoYXJncykpIHtcbiAgICB2YXIgayA9IGNhcihhcmdzKTtcbiAgICB2YXIgdiA9IG5leHQoYXJncyk7XG4gICAgYXJncyA9IHJlY3Vyc2UocmVjdXJzZShhcmdzKSk7XG4gICAgY29weVtleHRyYWN0SnNWYWx1ZShrKV0gPSB2O1xuICB9XG4gIHJldHVybiBjcmVhdGVFcmxJbmRleChjb3B5KTtcbn07XG5cbnZhciBhdG9tID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY3JlYXRlRXJsQXRvbShjYXIoZXJsQXJncykpO1xufTtcblxudmFyIF9jYXIgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBhcmcgPSBjYXIoZXJsQXJncyk7XG4gIGlmIChpc0VybExpc3QoYXJnKSkge1xuICAgIHJldHVybiBjYXIoYXJnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG52YXIgX2NkciA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIGFyZyA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKGlzRXJsTGlzdChhcmcpKSB7XG4gICAgcmV0dXJuIGNkcihhcmcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbnZhciBfY29uY2F0ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgZXJsTGlzdHMgPSB0b0FycmF5KGVybEFyZ3MpO1xuICByZXR1cm4gY29uY2F0LmFwcGx5KG51bGwsIGVybExpc3RzKTtcbn07XG5cbnZhciBjb25zID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY3JlYXRlRXJsTGlzdChjYXIoZXJsQXJncyksIG5leHQoZXJsQXJncykpO1xufTtcblxudmFyIGNvdW50ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgZXJsTGlzdCA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKCFpc0VybExpc3QoZXJsTGlzdCkpIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG4gIHZhciBfcmVkdWNlID0gZnVuY3Rpb24oc3VtLCB2YWx1ZSkge1xuICAgIHJldHVybiBzdW0gKyAxO1xuICB9O1xuICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKHJlZHVjZSgwLCBfcmVkdWNlLCBjYXIoZXJsQXJncykpKTtcbn07XG5cbnZhciBjcmVhdGVQcmVkaWNhdGUgPSBmdW5jdGlvbihwcmVkKSB7XG4gIHJldHVybiBmdW5jdGlvbihqc0xpc3QpIHtcbiAgICB2YXIgZXJsVmFsdWUgPSBqc0xpc3QudmFsdWU7XG4gICAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4ocHJlZChlcmxWYWx1ZSkpO1xuICB9O1xufTtcblxudmFyIGRlcmVmID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gKGNhcihlcmxBcmdzKSkuZXJsVmFsdWU7XG59O1xuXG52YXIgX2Ryb3AgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgdmFyIGVybE51bWJlciA9IHBhcnRpYWxBcnJheVswXTtcbiAgdmFyIGVybExpc3QgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIHJldHVybiBkcm9wKGV4dHJhY3RKc1ZhbHVlKGVybE51bWJlciksIGVybExpc3QpO1xufTtcblxudmFyIGZpcnN0ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY2FyKGNhcihlcmxBcmdzKSk7XG59O1xuXG52YXIgZ2V0RW52aXJvbm1lbnQgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgdmFyIGVudmlyb25tZW50ID0gY29uZmlnLmVudmlyb25tZW50O1xuICBzZXRDb3JlRm5zT25FcmxWYWx1ZXMoZW52aXJvbm1lbnQsIGZ1bmN0aW9uc09uRXJsVmFsdWVzKTtcbiAgcmV0dXJuIGVudmlyb25tZW50O1xufTtcblxudmFyIGhhc1Byb2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJztcbn1cblxudmFyIGhhc1Byb2Nlc3NXZWJwYWNrU2hpbSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ocHJvY2Vzcy50aXRsZSA9PT0gJ2Jyb3dzZXInICYmIHByb2Nlc3MuYnJvd3Nlcik7XG59XG5cbnZhciBpZ25vcmUgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBlcmxJZ25vcmU7XG59O1xuXG52YXIgaWdub3JlSWZUcnVlID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIHZhciBlcmxCb29sID0gcGFydGlhbEFycmF5WzBdO1xuICB2YXIgZXJsVmFsdWUgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIGlmIChleHRyYWN0SnNWYWx1ZShlcmxCb29sKSkge1xuICAgIHJldHVybiBlcmxJZ25vcmU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybFZhbHVlO1xuICB9XG59O1xuXG52YXIgaWdub3JlVW5sZXNzVHJ1ZSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgdmFyIHBhcnRpYWxBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEFyZ3MpO1xuICB2YXIgZXJsQm9vbCA9IHBhcnRpYWxBcnJheVswXTtcbiAgdmFyIGVybFZhbHVlID0gcGFydGlhbEFycmF5WzFdO1xuICBpZiAoZXh0cmFjdEpzVmFsdWUoZXJsQm9vbCkpIHtcbiAgICByZXR1cm4gZXJsVmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybElnbm9yZTtcbiAgfVxufTtcblxudmFyIF9pbnRlcnByZXQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBpbnRlcnByZXQoc3RyaXBRdW90ZXMoZXh0cmFjdEpzVmFsdWUoY2FyKGVybEFyZ3MpKSkpO1xufTtcblxudmFyIF9pc0VtcHR5ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBpZiAoaXNFbXB0eShlcmxBcmdzKSkge1xuICAgIHJldHVybiBlcmxGYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoaXNFbXB0eShjYXIoZXJsQXJncykpKSB7XG4gICAgICByZXR1cm4gZXJsVHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVybEZhbHNlO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbihqc0xpc3QpIHtcbiAgdmFyIGVybFZhbHVlID0ganNMaXN0LnZhbHVlO1xuICByZXR1cm4gY3JlYXRlRXJsQm9vbGVhbihpc0VybENvcmVQdXJlRnVuY3Rpb24oZXJsVmFsdWUpXG4gICAgfHwgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uKGVybFZhbHVlKSk7XG59O1xuXG52YXIgaXNOb2RlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBoYXNQcm9jZXNzKCkgJiYgIWhhc1Byb2Nlc3NXZWJwYWNrU2hpbSgpO1xufVxuXG52YXIgX2xhc3QgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBhcmcgPSBjYXIoZXJsQXJncyk7XG4gIGlmIChpc0VybExpc3QoYXJnKSkge1xuICAgIHJldHVybiBsYXN0KGFyZyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxudmFyIGxpc3QgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBlcmxBcmdzO1xufTtcblxudmFyIG1ldGEgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBlcmxNZXRhID0gKGNhcihlcmxBcmdzKSkubWV0YTtcbiAgaWYgKGVybE1ldGEgIT0gbnVsbCkge1xuICAgIHJldHVybiBlcmxNZXRhO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbnZhciBfbm90ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgZXJsVmFsID0gY2FyKGVybEFyZ3MpO1xuICBpZiAoaXNFcmxOaWwoZXJsVmFsKSB8fCBpc0VybEZhbHNlKGVybFZhbCkpIHtcbiAgICByZXR1cm4gZXJsVHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsRmFsc2U7XG4gIH1cbn07XG5cbnZhciBudGggPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgdmFyIGVybE51bWJlciA9IHBhcnRpYWxBcnJheVswXTtcbiAgdmFyIGVybExpc3QgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIHZhciB0YXJnZXQgPSBleHRyYWN0SnNWYWx1ZShlcmxOdW1iZXIpO1xuICBpZiAodGFyZ2V0ID49IDApIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhcmdldDsgaSsrKSB7XG4gICAgICBlcmxMaXN0ID0gY2RyKGVybExpc3QpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA+IHRhcmdldDsgaS0tKSB7XG4gICAgICBlcmxMaXN0ID0gY2RyKGVybExpc3QpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2FyKGVybExpc3QpO1xufTtcblxudmFyIHByZXBlbmQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBlcmxBcmdzQXJyYXkgPSB0b0FycmF5KGVybEFyZ3MpO1xuICB2YXIgZXJsTGlzdCA9IGVybEFyZ3NBcnJheVswXTtcbiAgdmFyIGVybFZhbHVlcyA9IDIgPD0gZXJsQXJnc0FycmF5Lmxlbmd0aCA/IF9fc2xpY2UuY2FsbChlcmxBcmdzQXJyYXksIDEpIDogW107XG4gIHZhciBfcmVkdWNlID0gZnVuY3Rpb24obGlzdCwgdmFsKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVybExpc3QodmFsLCBsaXN0KTtcbiAgfTtcbiAgcmV0dXJuIGVybFZhbHVlcy5yZWR1Y2UoX3JlZHVjZSwgZXJsTGlzdCk7XG59O1xuXG52YXIgX3ByU3RyID0gZnVuY3Rpb24oZXJsQXJncywgcHJpbnRSZWFkYWJseSkge1xuICByZXR1cm4gKCh0b0FycmF5KGVybEFyZ3MpKS5tYXAoZnVuY3Rpb24oZXJsQXJnKSB7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZShlcmxBcmcsIHByaW50UmVhZGFibHkpO1xuICB9KSkuam9pbignJyk7XG59O1xuXG52YXIgcHJldHR5U3RyaW5nID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY3JlYXRlRXJsU3RyaW5nKGNpcmN1bXBlbmRRdW90ZXMoX3ByU3RyKGVybEFyZ3MsIHRydWUpKSk7XG59O1xuXG52YXIgcmVhZCA9IGZ1bmN0aW9uKGpzTGlzdCkge1xuICBpZiAoaXNOb2RlKCkpIHtcbiAgICB2YXIgX3JlYWQgPSBmdW5jdGlvbihfanNMaXN0KSB7XG4gICAgICB2YXIganNGaWxlTmFtZSA9IHN0cmlwUXVvdGVzKGV4dHJhY3RKc1ZhbHVlKGNhcihfanNMaXN0KSkpO1xuICAgICAgLy9yZXR1cm4gcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoanNGaWxlTmFtZSkudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhfcmVhZChqc0xpc3QpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG52YXIgcmVzZXQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgdmFyIGF0b20gPSBwYXJ0aWFsQXJyYXlbMF07XG4gIHZhciB2YWx1ZSA9IHBhcnRpYWxBcnJheVsxXTtcbiAgYXRvbS5lcmxWYWx1ZSA9IHZhbHVlO1xuICByZXR1cm4gYXRvbTtcbn07XG5cbnZhciByZXN0ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgYXJnID0gY2FyKGVybEFyZ3MpO1xuICBpZiAoaXNFcmxMaXN0KGFyZykpIHtcbiAgICByZXR1cm4gY2RyKGFyZyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxudmFyIF9yZXZlcnNlID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgYXJnID0gY2FyKGVybEFyZ3MpO1xuICBpZiAoaXNFcmxMaXN0KGFyZykpIHtcbiAgICByZXR1cm4gcmV2ZXJzZShhcmcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbnZhciBzZXQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgzLCBlcmxBcmdzKTtcbiAgdmFyIGluZGV4ID0gcGFydGlhbEFycmF5WzBdO1xuICB2YXIga2V5ID0gcGFydGlhbEFycmF5WzFdO1xuICB2YXIgdmFsID0gcGFydGlhbEFycmF5WzJdO1xuICAoZXh0cmFjdEpzVmFsdWUoaW5kZXgpKVtleHRyYWN0SnNWYWx1ZShrZXkpXSA9IHZhbDtcbiAgcmV0dXJuIGluZGV4O1xufTtcblxudmFyIHNldENvcmVGbnNPbkVybFZhbHVlcyA9IGZ1bmN0aW9uKGVudiwgZm5zKSB7XG4gIHZhciBfcmVzdWx0cyA9IFtdO1xuICBmb3IgKHZhciBmbk5hbWUgaW4gZm5zKSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChmbnMsIGZuTmFtZSkpIGNvbnRpbnVlO1xuICAgIHZhciBmbiA9IGZuc1tmbk5hbWVdO1xuICAgIF9yZXN1bHRzLnB1c2goZW52W2ZuTmFtZV0gPSBjcmVhdGVFcmxDb3JlUHVyZUZ1bmN0aW9uKGZuKSk7XG4gIH1cbiAgcmV0dXJuIF9yZXN1bHRzO1xufTtcblxudmFyIHNsdXJwID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBpZiAoaXNOb2RlKCkpIHtcbiAgICB2YXIganNGaWxlTmFtZSA9IHN0cmlwUXVvdGVzKGV4dHJhY3RKc1ZhbHVlKGNhcihlcmxBcmdzKSkpO1xuICAgIC8vdmFyIF9mc18gPSByZXF1aXJlKCdmcycpO1xuICAgIC8vcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhjaXJjdW1wZW5kUXVvdGVzKF9mc18ucmVhZEZpbGVTeW5jKGpzRmlsZU5hbWUpLnRvU3RyaW5nKCkpKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG52YXIgc3RyaW5nID0gZnVuY3Rpb24oZXJsQXJncykge1xuICByZXR1cm4gY3JlYXRlRXJsU3RyaW5nKGNpcmN1bXBlbmRRdW90ZXMoX3ByU3RyKGVybEFyZ3MsIGZhbHNlKSkpO1xufTtcblxudmFyIHN0cmlwUXVvdGVzID0gZnVuY3Rpb24oanNTdHJpbmcpIHtcbiAgcmV0dXJuIGpzU3RyaW5nLnNsaWNlKDEsIC0xKTtcbn07XG5cbnZhciBzeW1ib2wgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBlcmxWYWx1ZSA9IGNhcihlcmxBcmdzKTtcbiAgaWYgKGlzRXJsU3RyaW5nKGVybFZhbHVlKSkge1xuICAgIHZhciBqc1N0ciA9IGV4dHJhY3RKc1ZhbHVlKGVybFZhbHVlKTtcbiAgICByZXR1cm4gY3JlYXRlRXJsU3ltYm9sKGpzU3RyLnNsaWNlKDEsIC0xKSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxudmFyIF90YWtlID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIgcGFydGlhbEFycmF5ID0gdG9QYXJ0aWFsQXJyYXkoMiwgZXJsQXJncyk7XG4gIHZhciBlcmxOdW1iZXIgPSBwYXJ0aWFsQXJyYXlbMF07XG4gIHZhciBlcmxMaXN0ID0gcGFydGlhbEFycmF5WzFdO1xuICByZXR1cm4gdGFrZShleHRyYWN0SnNWYWx1ZShlcmxOdW1iZXIpLCBlcmxMaXN0KTtcbn07XG5cbnZhciB0eXBlT2YgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBlcmxWYWx1ZSA9IGNhcihlcmxBcmdzKTtcbiAgcmV0dXJuIGNyZWF0ZUVybFN0cmluZyhjaXJjdW1wZW5kUXVvdGVzKGVybFZhbHVlLnR5cGUpKTtcbn07XG5cbnZhciBfdGhyb3cgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHRocm93IGNhcihlcmxBcmdzKTtcbn07XG5cbnZhciB0aW1lTXMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG59O1xuXG52YXIgd2l0aE1ldGEgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgdmFyIGVybFZhbCA9IHBhcnRpYWxBcnJheVswXTtcbiAgdmFyIGVybE1ldGEgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIGlmIChpc0VybEF0b20oZXJsVmFsKSkge1xuICAgIHZhciBlcmxWYWx1ZSA9IGVybFZhbC5lcmxWYWx1ZTtcbiAgICB2YXIgdHlwZSA9IGVybFZhbC50eXBlO1xuICAgIHJldHVybiB7XG4gICAgICBlcmxWYWx1ZTogZXJsVmFsdWUsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgbWV0YTogZXJsTWV0YVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgdmFyIGpzVmFsdWUgPSBlcmxWYWwuanNWYWx1ZTtcbiAgICB2YXIgdHlwZSA9IGVybFZhbC50eXBlO1xuICAgIHJldHVybiB7XG4gICAgICBqc1ZhbHVlOiBqc1ZhbHVlLFxuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIG1ldGE6IGVybE1ldGFcbiAgICB9O1xuICB9XG59O1xuXG52YXIgd3JpdGUgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBjcmVhdGVFcmxTdHJpbmcoc2VyaWFsaXplKGNhcihlcmxBcmdzKSkpO1xufTtcblxudmFyIHByZWRpY2F0ZXMgPSBbXG4gIGlzRXJsQXRvbSxcbiAgaXNFcmxCb29sZWFuLFxuICBpc0VybENvcmVQdXJlRnVuY3Rpb24sXG4gIGlzRXJsRmFsc2UsXG4gIGlzRXJsTGlzdCxcbiAgaXNFcmxNYWNybyxcbiAgaXNFcmxOaWwsXG4gIGlzRXJsTnVtYmVyLFxuICBpc0VybFN5bWJvbCxcbiAgaXNFcmxTdHJpbmcsXG4gIGlzRXJsVXNlclB1cmVGdW5jdGlvbixcbiAgaXNFcmxUcnVlXG5dLm1hcChjcmVhdGVQcmVkaWNhdGUpO1xuXG52YXIgaXNBdG9tICAgID0gcHJlZGljYXRlc1swXTtcbnZhciBpc0Jvb2xlYW4gPSBwcmVkaWNhdGVzWzFdO1xudmFyIGlzQ29yZUZuICA9IHByZWRpY2F0ZXNbMl07XG52YXIgaXNGYWxzZSAgID0gcHJlZGljYXRlc1szXTtcbnZhciBpc0xpc3QgICAgPSBwcmVkaWNhdGVzWzRdO1xudmFyIGlzTWFjcm8gICA9IHByZWRpY2F0ZXNbNV07XG52YXIgaXNOaWwgICAgID0gcHJlZGljYXRlc1s2XTtcbnZhciBpc051bWJlciAgPSBwcmVkaWNhdGVzWzddO1xudmFyIGlzU3ltYm9sICA9IHByZWRpY2F0ZXNbOF07XG52YXIgaXNTdHJpbmcgID0gcHJlZGljYXRlc1s5XTtcbnZhciBpc1VzZXJGbiAgPSBwcmVkaWNhdGVzWzEwXTtcbnZhciBpc1RydWUgICAgPSBwcmVkaWNhdGVzWzExXTtcblxudmFyIGZ1bmN0aW9uc09uRXJsVmFsdWVzID0ge1xuICAnPSc6IF9hcmVFcXVhbCxcbiAgJ2FwcGVuZCc6IGFwcGVuZCxcbiAgJ2Fzc29jJzogYXNzb2MsXG4gICdhdG9tJzogYXRvbSxcbiAgJ2F0b20/JzogaXNBdG9tLFxuICAnYm9vbGVhbj8nOiBpc0Jvb2xlYW4sXG4gICdjYXInOiBfY2FyLFxuICAnY2RyJzogX2NkcixcbiAgJ2NvbnMnOiBjb25zLFxuICAnY29uY2F0JzogX2NvbmNhdCxcbiAgJ2NvcmUtZm4/JzogaXNDb3JlRm4sXG4gICdjb3VudCc6IGNvdW50LFxuICAnZGVyZWYnOiBkZXJlZixcbiAgJ2Ryb3AnOiBfZHJvcCxcbiAgJ2VtcHR5Pyc6IF9pc0VtcHR5LFxuICAnZmlyc3QnOiBfY2FyLFxuICAnZmFsc2U/JzogaXNGYWxzZSxcbiAgJ2Z1bmN0aW9uPyc6IGlzRnVuY3Rpb24sXG4gICdpZ25vcmUhJzogaWdub3JlLFxuICAnaWdub3JlSWZUcnVlJzogaWdub3JlSWZUcnVlLFxuICAnaWdub3JlVW5sZXNzVHJ1ZSc6IGlnbm9yZVVubGVzc1RydWUsXG4gICdsYXN0JzogX2xhc3QsXG4gICdsaXN0JzogbGlzdCxcbiAgJ2xpc3Q/JzogaXNMaXN0LFxuICAnbWFjcm8/JzogaXNNYWNybyxcbiAgJ21ldGEnOiBtZXRhLFxuICAnbmlsPyc6IGlzTmlsLFxuICAnbm90JzogX25vdCxcbiAgJ250aCc6IG50aCxcbiAgJ251bWJlcj8nOiBpc051bWJlcixcbiAgJ3BhcnNlJzogX2ludGVycHJldCxcbiAgJ3ByZXBlbmQnOiBwcmVwZW5kLFxuICAncHJldHR5LXN0cmluZyc6IHByZXR0eVN0cmluZyxcbiAgJ3Jlc3QnOiBfY2RyLFxuICAncmV2ZXJzZSc6IF9yZXZlcnNlLFxuICAnc3RyaW5nJzogc3RyaW5nLFxuICAnc3RyaW5nPyc6IGlzU3RyaW5nLFxuICAnc3ltYm9sJzogc3ltYm9sLFxuICAnc3ltYm9sPyc6IGlzU3ltYm9sLFxuICAndGFrZSc6IF90YWtlLFxuICAndGhyb3cnOiBfdGhyb3csXG4gICd0cnVlPyc6IGlzVHJ1ZSxcbiAgJ3R5cGVvZic6IHR5cGVPZixcbiAgJ3VzZXItZm4/JzogaXNVc2VyRm4sXG4gICdyZWFkJzogcmVhZCxcbiAgJ3Jlc2V0ISc6IHJlc2V0LFxuICAnc2V0ISc6IHNldCxcbiAgJ3NsdXJwJzogc2x1cnAsXG4gICd0aW1lLW1zJzogdGltZU1zLFxuICAnd2l0aC1tZXRhJzogd2l0aE1ldGEsXG4gICd3cml0ZSc6IHdyaXRlXG59O1xuXG5leHBvcnQgeyBnZXRFbnZpcm9ubWVudCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5cbnZhciBjcmVhdGVFcmxMaXN0ICAgPSByZXF1aXJlKCcuL3R5cGUtdXRpbGl0aWVzJykuY3JlYXRlRXJsTGlzdDtcbnZhciBjcmVhdGVFcmxTdHJpbmcgPSByZXF1aXJlKCcuL3R5cGUtdXRpbGl0aWVzJykuY3JlYXRlRXJsU3RyaW5nO1xudmFyIHNlcmlhbGl6ZSAgICAgICA9IHJlcXVpcmUoJy4vc2VyaWFsaXplJyk7XG52YXIgdG9BcnJheSAgICAgICAgID0gcmVxdWlyZSgnLi9saW5rZWQtbGlzdCcpLnRvQXJyYXk7XG5cbnZhciBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGdldEVudmlyb25tZW50ID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gIHZhciBkaXNwbGF5ID0gY29uZmlnLmRpc3BsYXk7XG4gIHZhciBlbnZpcm9ubWVudCA9IGNvbmZpZy5lbnZpcm9ubWVudDtcbiAgc2V0Q29yZUVmZmVjdGZ1bEZuc09uRXJsVmFsdWVzKGRpc3BsYXkpKGVudmlyb25tZW50LCBkaXNwbGF5RWZmZWN0c09uRXJsVmFsdWVzKTtcbiAgcmV0dXJuIGVudmlyb25tZW50O1xufTtcblxudmFyIGhhc1Byb2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJztcbn1cblxudmFyIGhhc1Byb2Nlc3NXZWJwYWNrU2hpbSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ocHJvY2Vzcy50aXRsZSA9PT0gJ2Jyb3dzZXInICYmIHByb2Nlc3MuYnJvd3Nlcik7XG59XG5cbnZhciBpc05vZGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGhhc1Byb2Nlc3MoKSAmJiAhaGFzUHJvY2Vzc1dlYnBhY2tTaGltKCk7XG59XG5cbnZhciBfcHJTdHIgPSBmdW5jdGlvbihlcmxBcmdzLCBzaG91bGRCZVJlYWRhYmxlKSB7XG4gIHJldHVybiAoKHRvQXJyYXkoZXJsQXJncykpLm1hcChmdW5jdGlvbihlcmxBcmcpIHtcbiAgICByZXR1cm4gc2VyaWFsaXplKGVybEFyZywgc2hvdWxkQmVSZWFkYWJsZSk7XG4gIH0pKS5qb2luKCcnKTtcbn07XG5cbnZhciBfcXVpdF8gPSBmdW5jdGlvbigpIHtcbiAgaWYgKGlzTm9kZSgpKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZXhpdCgwKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gX3ByU3RyKFxuICAgICAgY3JlYXRlRXJsTGlzdChcbiAgICAgICAgY3JlYXRlRXJsU3RyaW5nKFxuICAgICAgICAgIFwiXFxcIidFcmxrw7ZuaWcgTGlzcCBDb25zb2xlJyBpcyBub3QgcGVybWl0dGVkIHRvIGNsb3NlIHRoaXMgd2luZG93LlxcXCJcIikpLFxuICAgICAgICAgIGZhbHNlKTtcbiAgfVxufTtcblxudmFyIHNldENvcmVFZmZlY3RmdWxGbnNPbkVybFZhbHVlcyA9IGZ1bmN0aW9uKHJlcHJlc2VudCkge1xuICByZXR1cm4gZnVuY3Rpb24oZW52LCBmbnMpIHtcbiAgICB2YXIgX3Jlc3VsdHMgPSBbXTtcbiAgICBmb3IgKHZhciBmbk5hbWUgaW4gZm5zKSB7XG4gICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGZucywgZm5OYW1lKSkgY29udGludWU7XG4gICAgICB2YXIgZm4gPSBmbnNbZm5OYW1lXTtcbiAgICAgIF9yZXN1bHRzLnB1c2goZW52W2ZuTmFtZV0gPVxuICAgICAgICBjcmVhdGVFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24oZnVuY3Rpb24oZXJsQXJncykge1xuICAgICAgICAgIHJldHVybiByZXByZXNlbnQoZm4oZXJsQXJncykpO1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIHJldHVybiBfcmVzdWx0cztcbiAgfTtcbn07XG5cbnZhciBkaXNwbGF5RWZmZWN0c09uRXJsVmFsdWVzID0ge1xuICAncHJpbnQnOiBmdW5jdGlvbihlcmxBcmdzKSB7XG4gICAgcmV0dXJuIF9wclN0cihlcmxBcmdzLCBmYWxzZSk7XG4gIH0sXG4gICdwcmV0dHktcHJpbnQnOiBmdW5jdGlvbihlcmxBcmdzKSB7XG4gICAgcmV0dXJuIF9wclN0cihlcmxBcmdzLCB0cnVlKTtcbiAgfSxcbiAgJy1xdWl0LSc6IF9xdWl0Xyxcbn07XG5cbmV4cG9ydCB7IGdldEVudmlyb25tZW50IH07XG4iLCJpbXBvcnQgeyBjYXIgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybExpc3QgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFN5bWJvbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXh0cmFjdEpzVmFsdWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGZyb21BcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgZnJvbUVybEluZGV4IH0gZnJvbSAnLi9pbmRleC11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBfcHJvY2VzcyB9IGZyb20gJy4vX3Byb2Nlc3MnO1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgdG9rZW5pemVBbmRQYXJzZSB9IGZyb20gJy4vdG9rZW5pemVBbmRQYXJzZSc7XG5pbXBvcnQgeyB0b1BhcnRpYWxBcnJheSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuXG52YXIgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbnZhciBnZXRFbnZpcm9ubWVudCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICB2YXIgZW52aXJvbm1lbnQgPSBjb25maWcuZW52aXJvbm1lbnQ7XG4gIHZhciBwYXJzZSA9IGZ1bmN0aW9uKGVybEFyZ3MpIHtcbiAgICByZXR1cm4gdG9rZW5pemVBbmRQYXJzZShzdHJpcFF1b3RlcyhleHRyYWN0SnNWYWx1ZShjYXIoZXJsQXJncykpKSk7XG4gIH07XG4gIHZhciBmdW5jdGlvbnNPbkVybFZhbHVlcyA9IHsgcGFyc2U6IHBhcnNlIH07XG4gIHNldENvcmVGbnNPbkVybFZhbHVlcyhlbnZpcm9ubWVudCwgZnVuY3Rpb25zT25FcmxWYWx1ZXMpO1xuICByZXR1cm4gZW52aXJvbm1lbnQ7XG59O1xuXG52YXIgX3Byb2Nlc3NfID0gX3Byb2Nlc3MoZnVuY3Rpb24oZXJsVmFsKSB7XG4gIHJldHVybiBlcmxWYWw7XG59KTtcblxudmFyIHNldENvcmVGbnNPbkVybFZhbHVlcyA9IGZ1bmN0aW9uKGVudiwgZm5zKSB7XG4gIHZhciBfcmVzdWx0cyA9IFtdO1xuICBmb3IgKHZhciBmbk5hbWUgaW4gZm5zKSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChmbnMsIGZuTmFtZSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgZm4gPSBmbnNbZm5OYW1lXTtcbiAgICBfcmVzdWx0cy5wdXNoKGVudltmbk5hbWVdID0gY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbihmbikpO1xuICB9XG4gIHJldHVybiBfcmVzdWx0cztcbn07XG5cbnZhciBzdHJpcFF1b3RlcyA9IGZ1bmN0aW9uKGpzU3RyaW5nKSB7XG4gIHJldHVybiBqc1N0cmluZy5zbGljZSgxLCAtMSk7XG59O1xuXG5leHBvcnQgeyBnZXRFbnZpcm9ubWVudCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBleHRyYWN0SnNWYWx1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZnJvbUVybEluZGV4IH0gZnJvbSAnLi9pbmRleC11dGlsaXRpZXMnO1xuaW1wb3J0IHsgX3Byb2Nlc3MgfSBmcm9tICcuL19wcm9jZXNzJztcbmltcG9ydCB7IHRvUGFydGlhbEFycmF5IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5cbnZhciBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGdldEVudmlyb25tZW50ID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gIHZhciBlbnZpcm9ubWVudCA9IGNvbmZpZy5lbnZpcm9ubWVudDtcbiAgdmFyIGZ1bmN0aW9uc09uRXJsVmFsdWVzID0ge1xuICAgICdsb2FkJzogbG9hZCxcbiAgICAnbG9hZC13aXRoLWVudic6IGxvYWRXaXRoRW52LFxuICAgICdsb2FkLXdpdGgtYmFyZS1lbnYnOiBsb2FkV2l0aEJhcmVFbnZcbiAgfTtcbiAgc2V0Q29yZUZuc09uRXJsVmFsdWVzKGVudmlyb25tZW50LCBmdW5jdGlvbnNPbkVybFZhbHVlcyk7XG4gIHJldHVybiBlbnZpcm9ubWVudDtcbn07XG5cbnZhciBnZXRfanNGaWxlTmFtZV9hbmRfbG9jYWxFbnYgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHZhciBwYXJ0aWFsQXJyYXkgPSB0b1BhcnRpYWxBcnJheSgyLCBlcmxBcmdzKTtcbiAgdmFyIGVybEZpbGVOYW1lID0gcGFydGlhbEFycmF5WzBdO1xuICB2YXIgbG9jYWxFbnYgPSBwYXJ0aWFsQXJyYXlbMV07XG4gIHZhciBqc0ZpbGVOYW1lID0gc3RyaXBRdW90ZXMoZXh0cmFjdEpzVmFsdWUoZXJsRmlsZU5hbWUpKTtcbiAgcmV0dXJuIFtqc0ZpbGVOYW1lLCBsb2NhbEVudl07XG59O1xuXG52YXIgaGFzUHJvY2VzcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnO1xufVxuXG52YXIgaGFzUHJvY2Vzc1dlYnBhY2tTaGltID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybihwcm9jZXNzLnRpdGxlID09PSAnYnJvd3NlcicgJiYgcHJvY2Vzcy5icm93c2VyKTtcbn1cblxudmFyIGlzTm9kZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gaGFzUHJvY2VzcygpICYmICFoYXNQcm9jZXNzV2VicGFja1NoaW0oKTtcbn1cblxudmFyIGxvYWQgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGlmIChpc05vZGUoKSkge1xuICAgIHJldHVybiBfcHJvY2Vzc18oX3JlYWQoZXJsQXJncykpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxOaWw7XG4gIH1cbn07XG5cbnZhciBsb2FkV2l0aEJhcmVFbnYgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIGlmIChpc05vZGUoKSkge1xuICAgIHZhciB0ZW1wID0gZ2V0X2pzRmlsZU5hbWVfYW5kX2xvY2FsRW52KGVybEFyZ3MpO1xuICAgIHZhciBqc0ZpbGVOYW1lID0gdGVtcFswXTtcbiAgICB2YXIgbG9jYWxFbnYgPSB0ZW1wWzFdO1xuICAgIHJldHVybiBfcHJvY2Vzc0ZpbGVBbmRFbnYoXG4gICAgICByZWFkRmlsZShqc0ZpbGVOYW1lKSxcbiAgICAgIFtmcm9tRXJsSW5kZXgobG9jYWxFbnYpXSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybE5pbDtcbiAgfVxufTtcblxudmFyIGxvYWRXaXRoRW52ID0gZnVuY3Rpb24oZXJsQXJncykge1xuICBpZiAoaXNOb2RlKCkpIHtcbiAgICB2YXIgdGVtcCA9IGdldF9qc0ZpbGVOYW1lX2FuZF9sb2NhbEVudihlcmxBcmdzKTtcbiAgICB2YXIganNGaWxlTmFtZSA9IHRlbXBbMF07XG4gICAgdmFyIGxvY2FsRW52ID0gdGVtcFsxXTtcbiAgICByZXR1cm4gX3Byb2Nlc3NGaWxlQW5kRW52KFxuICAgICAgcmVhZEZpbGUoanNGaWxlTmFtZSksXG4gICAgICBbZnJvbUVybEluZGV4KGxvY2FsRW52KSwgZW52aXJvbm1lbnRdKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTmlsO1xuICB9XG59O1xuXG52YXIgX3Byb2Nlc3NfID0gZnVuY3Rpb24oanNTdHJpbmcpIHtcbiAgcmV0dXJuIF9wcm9jZXNzKFtlbnZpcm9ubWVudF0pKGpzU3RyaW5nKTtcbn07XG5cbnZhciBfcHJvY2Vzc0ZpbGVBbmRFbnYgPSBmdW5jdGlvbihmaWxlLCBlbnZTdGFjaykge1xuICByZXR1cm4gX3Byb2Nlc3MoZW52U3RhY2spKGZpbGUpO1xufTtcblxudmFyIF9yZWFkID0gZnVuY3Rpb24oZXJsQXJncykge1xuICB2YXIganNGaWxlTmFtZSA9IGdldF9qc0ZpbGVOYW1lX2FuZF9sb2NhbEVudihlcmxBcmdzKVswXTtcbiAgcmV0dXJuIHJlYWRGaWxlKGpzRmlsZU5hbWUpO1xufTtcblxudmFyIHJlYWRGaWxlID0gZnVuY3Rpb24oanNGaWxlTmFtZSkge1xuICAvL3JldHVybiByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYyhqc0ZpbGVOYW1lKS50b1N0cmluZygpO1xuICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciBzZXRDb3JlRm5zT25FcmxWYWx1ZXMgPSBmdW5jdGlvbihlbnYsIGZucykge1xuICB2YXIgX3Jlc3VsdHMgPSBbXTtcbiAgZm9yICh2YXIgZm5OYW1lIGluIGZucykge1xuICAgIGlmICghX19oYXNQcm9wLmNhbGwoZm5zLCBmbk5hbWUpKSBjb250aW51ZTtcbiAgICB2YXIgZm4gPSBmbnNbZm5OYW1lXTtcbiAgICBfcmVzdWx0cy5wdXNoKGVudltmbk5hbWVdID0gY3JlYXRlRXJsQ29yZVB1cmVGdW5jdGlvbihmbikpO1xuICB9XG4gIHJldHVybiBfcmVzdWx0cztcbn07XG5cbnZhciBzdHJpcFF1b3RlcyA9IGZ1bmN0aW9uKGpzU3RyaW5nKSB7XG4gIHJldHVybiBqc1N0cmluZy5zbGljZSgxLCAtMSk7XG59O1xuXG5leHBvcnQgeyBnZXRFbnZpcm9ubWVudCB9O1xuIiwiaW1wb3J0IHsgYWRkRW52IH0gZnJvbSAnLi9lbnYtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNhciB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgY2F0Y2hTdGFyIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgY2RyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBjaXJjdW1wZW5kUXVvdGVzIH0gZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY29tbWVudFNpZ25hbCB9IGZyb20gJy4vY29tbWVudFNpZ25hbCc7XG5pbXBvcnQgeyBjcmVhdGVFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsS2V5d29yZCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTGlzdCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsTWFjcm8gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybE51bWJlciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3RyaW5nIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxTeW1ib2wgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybFVzZXJQdXJlRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGRlZkJhbmcgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBfZG8gfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBlcmxOaWwgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IF9ldmFsIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgX2V2YWxXaXRoRW52IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgZXhwYW5kTWFjcm8gfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBleHRyYWN0SnNWYWx1ZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBmblN0YXIgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBmb3JFYWNoIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBmcm9tQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGZyb21FcmxJbmRleCB9IGZyb20gJy4vaW5kZXgtdXRpbGl0aWVzJztcbmltcG9ydCB7IGZyb21Kc09iamVjdHMgfSBmcm9tICcuL2luZGV4LXV0aWxpdGllcyc7XG5pbXBvcnQgeyBfZ2V0Q3VycmVudEVudiB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IF9nZXREZWZhdWx0RW52IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgX2lmIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgaXNFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsQ29yZVB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxJZ25vcmUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsSW5kZXggfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsS2V5d29yZCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybE1hY3JvIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybFN5bWJvbCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0pzU3RyaW5nIH0gZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNLZXl3b3JkIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbGV0U3RhciB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGxldHJlY1N0YXIgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBsb29rdXAgfSBmcm9tICcuL2Vudi11dGlsaXRpZXMnO1xuaW1wb3J0IHsgbWFjcm9TdGFyIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBuZXh0IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBxdWFzaXF1b3RlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBzcGxpY2VVbnF1b3RlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgdW5xdW90ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHJlY3Vyc2UgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHJlZHVjZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgcmVkdWNlQnkyIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyByZXZlcnNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBzZXRNYWluRW52IH0gZnJvbSAnLi9lbnYtdXRpbGl0aWVzJztcbmltcG9ydCB7IHNwbGF0IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgdG9QYXJ0aWFsQXJyYXkgfSBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IHRyeVN0YXIgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyB1bmRlZkJhbmcgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyB1bnNldE1haW5FbnYgfSBmcm9tICcuL2Vudi11dGlsaXRpZXMnO1xuXG52YXIgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbnZhciBjcmVhdGVGbiA9IGZ1bmN0aW9uKGVybExpc3QsIGVudnMpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybFVzZXJQdXJlRnVuY3Rpb24oe1xuICAgIGxvY2FsRW52czogZW52cy5zbGljZSgwKSxcbiAgICBlcmxFeHByZXNzaW9uOiBuZXh0KGVybExpc3QpLFxuICAgIGVybFBhcmFtZXRlcnM6IGNhcihlcmxMaXN0KVxuICB9KTtcbn07XG5cbnZhciBjcmVhdGVMb2NhbEVudiA9IGZ1bmN0aW9uKGVybFBhcmFtcywgZXJsQXJncykge1xuICB2YXIgZW52ID0ge307XG4gIHdoaWxlICghaXNFbXB0eShlcmxQYXJhbXMpKSB7XG4gICAgdmFyIGpzUGFyYW0gPSBleHRyYWN0SnNWYWx1ZShjYXIoZXJsUGFyYW1zKSk7XG4gICAgaWYgKGpzUGFyYW0gPT09IHNwbGF0KSB7XG4gICAgICBlbnZbZXh0cmFjdEpzVmFsdWUobmV4dChlcmxQYXJhbXMpKV0gPSBlcmxBcmdzO1xuICAgICAgcmV0dXJuIGVudjtcbiAgICB9IGVsc2Uge1xuICAgICAgZW52W2pzUGFyYW1dID0gY2FyKGVybEFyZ3MpO1xuICAgICAgZXJsUGFyYW1zID0gY2RyKGVybFBhcmFtcyk7XG4gICAgICBlcmxBcmdzID0gY2RyKGVybEFyZ3MpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZW52O1xufTtcblxudmFyIGNyZWF0ZU1hY3JvID0gZnVuY3Rpb24oZXJsTGlzdCwgZW52cykge1xuICByZXR1cm4gY3JlYXRlRXJsTWFjcm8oe1xuICAgIGxvY2FsRW52czogZW52cy5zbGljZSgwKSxcbiAgICBlcmxFeHByZXNzaW9uOiBuZXh0KGVybExpc3QpLFxuICAgIGVybFBhcmFtZXRlcnM6IGNhcihlcmxMaXN0KVxuICB9KTtcbn07XG5cbnZhciBkZWZpbmVOZXdWYWx1ZSA9IGZ1bmN0aW9uKGVybExpc3QsIGVudnMsIGFkZFJlc3VsdCkge1xuICB2YXIganNLZXkgPSBleHRyYWN0SnNWYWx1ZShjYXIoZXJsTGlzdCkpO1xuICB2YXIgZXJsVmFsdWUgPSBfZXZhbHVhdGUobmV4dChlcmxMaXN0KSwgZW52cywgYWRkUmVzdWx0KTtcbiAgcmV0dXJuIHNldE1haW5FbnYoZW52cywganNLZXksIGVybFZhbHVlKTtcbn07XG5cbnZhciBldmFsUXVhc2lxdW90ZWRFeHByID0gZnVuY3Rpb24oZXhwciwgZW52cywgYWRkUmVzdWx0KSB7XG4gIGlmICghaXNFcmxMaXN0KGV4cHIpKSB7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cbiAgdmFyIG1hbmFnZUl0ZW0gPSBmdW5jdGlvbihtZW1vLCBpdGVtKSB7XG4gICAgaWYgKHVucXVvdGVkRXhwcihpdGVtKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRXJsTGlzdChfZXZhbHVhdGUobmV4dChpdGVtKSwgZW52cywgYWRkUmVzdWx0KSwgbWVtbyk7XG4gICAgfSBlbHNlIGlmIChzcGxpY2VVbnF1b3RlZEV4cHIoaXRlbSkpIHtcbiAgICAgICAgdmFyIF9tYW5hZ2VJdGVtID0gZnVuY3Rpb24oX21lbW8sIF9pdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUVybExpc3QoX2l0ZW0sIF9tZW1vKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlZHVjZShtZW1vLCBfbWFuYWdlSXRlbSwgX2V2YWx1YXRlKG5leHQoaXRlbSksIGVudnMsIGFkZFJlc3VsdCkpO1xuICAgIH0gZWxzZSBpZiAoaXNFcmxMaXN0KGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KGV2YWxRdWFzaXF1b3RlZEV4cHIoaXRlbSwgZW52cywgYWRkUmVzdWx0KSwgbWVtbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVybExpc3QoaXRlbSwgbWVtbyk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gcmV2ZXJzZShyZWR1Y2UoY3JlYXRlRXJsTGlzdCgpLCBtYW5hZ2VJdGVtLCBleHByKSk7XG59O1xuXG52YXIgX2V2YWx1YXRlID0gZnVuY3Rpb24oZXJsRXhwciwgZW52cywgYWRkUmVzdWx0KSB7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaWYgKGlzRXJsU3ltYm9sKGVybEV4cHIpKSB7XG4gICAgICB2YXIganNTdHJpbmcgPSBleHRyYWN0SnNWYWx1ZShlcmxFeHByKTtcbiAgICAgIGlmIChpc0tleXdvcmQoanNTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFcmxLZXl3b3JkKGpzU3RyaW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb29rdXAoZW52cywganNTdHJpbmcpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNFcmxJbmRleChlcmxFeHByKSkge1xuICAgICAgdmFyIGluZGV4ID0gZXh0cmFjdEpzVmFsdWUoZXJsRXhwcik7XG4gICAgICB2YXIgbmV3SW5kZXggPSB7fTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBpbmRleCkge1xuICAgICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKGluZGV4LCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgbmV3SW5kZXhba2V5XSA9IF9ldmFsdWF0ZShpbmRleFtrZXldLCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNyZWF0ZUVybEluZGV4KG5ld0luZGV4KTtcbiAgICB9IGVsc2UgaWYgKCEoaXNFcmxMaXN0KGVybEV4cHIpKSkge1xuICAgICAgcmV0dXJuIGVybEV4cHI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVybEV4cHIgPSBmaWx0ZXIoKGZ1bmN0aW9uKHgpIHtcbiAgICAgICAgcmV0dXJuICEoaWdub3JhYmxlKHgsIGVudnMsIGFkZFJlc3VsdCkpO1xuICAgICAgfSksIGVybEV4cHIpO1xuICAgICAgdmFyIGVybEV4cHJBcnJheSA9IHRvUGFydGlhbEFycmF5KDIsIGVybEV4cHIpO1xuICAgICAgdmFyIGhlYWQgPSBlcmxFeHByQXJyYXlbMF07XG4gICAgICB2YXIgYXJnMSA9IGVybEV4cHJBcnJheVsxXTtcbiAgICAgIHZhciByZW1haW5pbmdBcmdzID0gZXJsRXhwckFycmF5WzJdO1xuICAgICAgdmFyIHRhaWxMaXN0ID0gY2RyKGVybEV4cHIpO1xuICAgICAgc3dpdGNoIChleHRyYWN0SnNWYWx1ZShoZWFkKSkge1xuICAgICAgICBjYXNlIGRlZkJhbmc6XG4gICAgICAgICAgcmV0dXJuIGRlZmluZU5ld1ZhbHVlKHRhaWxMaXN0LCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICBjYXNlIHVuZGVmQmFuZzpcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVWYWx1ZSh0YWlsTGlzdCwgZW52cyk7XG4gICAgICAgIGNhc2UgX2V2YWw6XG4gICAgICAgICAgZXJsRXhwciA9IF9ldmFsdWF0ZShhcmcxLCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIF9ldmFsV2l0aEVudjpcbiAgICAgICAgICBlbnZzID0gW2Zyb21FcmxJbmRleChfZXZhbHVhdGUoYXJnMSwgZW52cywgYWRkUmVzdWx0KSldO1xuICAgICAgICAgIGVybEV4cHIgPSBfZXZhbHVhdGUoY2FyKHJlbWFpbmluZ0FyZ3MpLCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGxldFN0YXI6XG4gICAgICAgICAgZXJsRXhwciA9IGNhcihyZW1haW5pbmdBcmdzKTtcbiAgICAgICAgICBlbnZzID0gYWRkRW52KGVudnMsIHJlZHVjZUxldChlbnZzLCBhcmcxLCBhZGRSZXN1bHQpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBsZXRyZWNTdGFyOlxuICAgICAgICAgIGVybEV4cHIgPSBjYXIocmVtYWluaW5nQXJncyk7XG4gICAgICAgICAgZW52cyA9IGFkZEVudihlbnZzLCByZWR1Y2VMZXRyZWMoZW52cywgYXJnMSwgYWRkUmVzdWx0KSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgX2RvOlxuICAgICAgICAgIHJldHVybiBmb3JFYWNoKGV2YWx1YXRlKGVudnMsIGFkZFJlc3VsdCksIHRhaWxMaXN0KTtcbiAgICAgICAgY2FzZSBfZ2V0Q3VycmVudEVudjpcbiAgICAgICAgICByZXR1cm4gZnJvbUpzT2JqZWN0cy5hcHBseShudWxsLCBlbnZzLnJldmVyc2UoKSk7XG4gICAgICAgIGNhc2UgX2dldERlZmF1bHRFbnY6XG4gICAgICAgICAgcmV0dXJuIGZyb21Kc09iamVjdHMoZW52c1tlbnZzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgY2FzZSBfaWY6XG4gICAgICAgICAgaWYgKGV4dHJhY3RKc1ZhbHVlKF9ldmFsdWF0ZShhcmcxLCBlbnZzLCBhZGRSZXN1bHQpKSkge1xuICAgICAgICAgICAgZXJsRXhwciA9IGNhcihyZW1haW5pbmdBcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgb3RoZXJ3aXNlID0gbmV4dChyZW1haW5pbmdBcmdzKTtcbiAgICAgICAgICBpZiAoaXNFbXB0eShvdGhlcndpc2UpKSB7XG4gICAgICAgICAgICBlcmxFeHByID0gZXJsTmlsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcmxFeHByID0gb3RoZXJ3aXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBmblN0YXI6XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUZuKHRhaWxMaXN0LCBlbnZzKTtcbiAgICAgICAgY2FzZSBtYWNyb1N0YXI6XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZU1hY3JvKHRhaWxMaXN0LCBlbnZzKTtcbiAgICAgICAgY2FzZSBxdW90ZTpcbiAgICAgICAgICByZXR1cm4gY2FyKHRhaWxMaXN0KTtcbiAgICAgICAgY2FzZSBxdWFzaXF1b3RlOlxuICAgICAgICAgIHJldHVybiBldmFsUXVhc2lxdW90ZWRFeHByKGNhcih0YWlsTGlzdCksIGVudnMsIGFkZFJlc3VsdCk7XG4gICAgICAgIGNhc2UgZXhwYW5kTWFjcm86XG4gICAgICAgICAgcmV0dXJuIGV4cGFuZE1hY3JvKGNhcihhcmcxKSwgY2RyKGFyZzEpLCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICBjYXNlIHRyeVN0YXI6XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBfZXZhbHVhdGUoYXJnMSwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBleCA9IF9lcnJvcjtcbiAgICAgICAgICAgIGlmIChpc0VtcHR5KHJlbWFpbmluZ0FyZ3MpKSB7XG4gICAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIHJlbWFpbmluZ0FyZ3NBcnJheSA9IHRvUGFydGlhbEFycmF5KDMsIGNhcihyZW1haW5pbmdBcmdzKSk7XG4gICAgICAgICAgICAgIHZhciBfY2F0Y2ggPSByZW1haW5pbmdBcmdzQXJyYXlbMF07XG4gICAgICAgICAgICAgIHZhciBfZXggPSByZW1haW5pbmdBcmdzQXJyYXlbMV07XG4gICAgICAgICAgICAgIHZhciBjYXRjaEV4cHIgPSByZW1haW5pbmdBcmdzQXJyYXlbMl07XG4gICAgICAgICAgICAgIGlmICgoZXh0cmFjdEpzVmFsdWUoX2NhdGNoKSkgIT09IFwiY2F0Y2gqXCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoZXggaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGV4ID0gY3JlYXRlRXJsU3RyaW5nKGNpcmN1bXBlbmRRdW90ZXMoZXgubWVzc2FnZSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBuZXdFbnYgPSB7fTtcbiAgICAgICAgICAgICAgbmV3RW52W2V4dHJhY3RKc1ZhbHVlKF9leCldID0gZXg7XG4gICAgICAgICAgICAgIHJldHVybiBfZXZhbHVhdGUoY2F0Y2hFeHByLCBhZGRFbnYoZW52cywgbmV3RW52KSwgYWRkUmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdmFyIGVybFN5bWJvbCA9IGhlYWQ7XG4gICAgICAgICAgZXJsRXhwciA9IHRhaWxMaXN0O1xuICAgICAgICAgIHZhciBlcmxJbnZva2FibGUgPSBfZXZhbHVhdGUoZXJsU3ltYm9sLCBlbnZzLCBhZGRSZXN1bHQpO1xuICAgICAgICAgIGlmIChpc0VybEtleXdvcmQoZXJsSW52b2thYmxlKSkge1xuICAgICAgICAgICAgZXJsRXhwciA9IGNyZWF0ZUVybExpc3QoZXJsSW52b2thYmxlLCB0YWlsTGlzdCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0VybE1hY3JvKGVybEludm9rYWJsZSkpIHtcbiAgICAgICAgICAgIGVybEV4cHIgPSBleHBhbmRNYWNybyhoZWFkLCB0YWlsTGlzdCwgZW52cywgYWRkUmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzRXJsQ29yZVB1cmVGdW5jdGlvbihlcmxJbnZva2FibGUpKSB7XG4gICAgICAgICAgICB2YXIgZm4gPSBleHRyYWN0SnNWYWx1ZShlcmxJbnZva2FibGUpO1xuICAgICAgICAgICAgdmFyIGVybEFyZ3MgPSBtYXAoZXZhbHVhdGUoZW52cywgYWRkUmVzdWx0KSwgZXJsRXhwcik7XG4gICAgICAgICAgICByZXR1cm4gZm4oZXJsQXJncyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0VybENvcmVFZmZlY3RmdWxGdW5jdGlvbihlcmxJbnZva2FibGUpKSB7XG4gICAgICAgICAgICB2YXIgZm4gPSBleHRyYWN0SnNWYWx1ZShlcmxJbnZva2FibGUpO1xuICAgICAgICAgICAgdmFyIGVybEFyZ3MgPSBtYXAoZXZhbHVhdGUoZW52cywgYWRkUmVzdWx0KSwgZXJsRXhwcik7XG4gICAgICAgICAgICBhZGRSZXN1bHQoZm4oZXJsQXJncykpO1xuICAgICAgICAgICAgcmV0dXJuIGVybE5pbDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzRXJsVXNlclB1cmVGdW5jdGlvbihlcmxJbnZva2FibGUpKSB7XG4gICAgICAgICAgICB2YXIganNWYWx1ZSA9IGV4dHJhY3RKc1ZhbHVlKGVybEludm9rYWJsZSk7XG4gICAgICAgICAgICB2YXIgbG9jYWxFbnZzID0ganNWYWx1ZS5sb2NhbEVudnM7XG4gICAgICAgICAgICB2YXIgZXJsRXhwcmVzc2lvbiA9IGpzVmFsdWUuZXJsRXhwcmVzc2lvbjtcbiAgICAgICAgICAgIHZhciBlcmxQYXJhbWV0ZXJzID0ganNWYWx1ZS5lcmxQYXJhbWV0ZXJzO1xuICAgICAgICAgICAgdmFyIGVybEFyZ3MgPSBtYXAoZXZhbHVhdGUoZW52cywgYWRkUmVzdWx0KSwgZXJsRXhwcik7XG4gICAgICAgICAgICBlcmxFeHByID0gZXJsRXhwcmVzc2lvbjtcbiAgICAgICAgICAgIHZhciBuZXdFbnYgPSBjcmVhdGVMb2NhbEVudihlcmxQYXJhbWV0ZXJzLCBlcmxBcmdzKTtcbiAgICAgICAgICAgIGVudnMgPSBhZGRFbnYobG9jYWxFbnZzLCBuZXdFbnYpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBcIlwiXG4gICAgICAgICAgICAgICsgKGV4dHJhY3RKc1ZhbHVlKGVybFN5bWJvbCkpXG4gICAgICAgICAgICAgICsgXCIgZG9lcyBub3QgZXZhbHVhdGUgdG8gYSBmdW5jdGlvbiwgbWFjcm8sIG9yIGtleXdvcmQuXCI7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudmFyIGV2YWx1YXRlID0gZnVuY3Rpb24oZW52cywgYWRkUmVzdWx0KSB7XG4gIHJldHVybiBmdW5jdGlvbihlcmxFeHByKSB7XG4gICAgaWYgKGVybEV4cHIgPT09IGNvbW1lbnRTaWduYWwpIHtcbiAgICAgIHJldHVybiBjb21tZW50U2lnbmFsO1xuICAgIH1cbiAgICByZXR1cm4gX2V2YWx1YXRlKGVybEV4cHIsIGVudnMsIGFkZFJlc3VsdCk7XG4gIH07XG59O1xuXG52YXIgZXhwYW5kTWFjcm8gPSBmdW5jdGlvbihlcmxNYWNyb1N5bWJvbCwgZXJsQXJncywgZW52cywgYWRkUmVzdWx0KSB7XG4gIHZhciBlcmxNYWNybyA9IF9ldmFsdWF0ZShlcmxNYWNyb1N5bWJvbCwgZW52cywgYWRkUmVzdWx0KTtcbiAgdmFyIGpzVmFsdWUgPSBleHRyYWN0SnNWYWx1ZShlcmxNYWNybyk7XG4gIHZhciBsb2NhbEVudnMgPSBqc1ZhbHVlLmxvY2FsRW52cztcbiAgdmFyIGVybEV4cHJlc3Npb24gPSBqc1ZhbHVlLmVybEV4cHJlc3Npb247XG4gIHZhciBlcmxQYXJhbWV0ZXJzID0ganNWYWx1ZS5lcmxQYXJhbWV0ZXJzO1xuICB2YXIgbmV3RW52ID0gY3JlYXRlTG9jYWxFbnYoZXJsUGFyYW1ldGVycywgZXJsQXJncyk7XG4gIHZhciBuZXdFbnZTdGFjayA9IGFkZEVudihsb2NhbEVudnMsIG5ld0Vudik7XG4gIHJldHVybiBfZXZhbHVhdGUoZXJsRXhwcmVzc2lvbiwgbmV3RW52U3RhY2ssIGFkZFJlc3VsdCk7XG59O1xuXG52YXIgaWdub3JhYmxlID0gZnVuY3Rpb24oZXJsVmFsLCBlbnZzLCBhZGRSZXN1bHQpIHtcbiAgaWYgKGlzRXJsSWdub3JlKGVybFZhbCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoIWlzRXJsTGlzdChlcmxWYWwpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBzeW1ib2wgPSBjYXIoZXJsVmFsKTtcbiAgaWYgKCFpc0VybFN5bWJvbChzeW1ib2wpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBqc1N0cmluZyA9IGV4dHJhY3RKc1ZhbHVlKHN5bWJvbCk7XG4gIGlmIChqc1N0cmluZyA9PT0gJ2lnbm9yZScpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoanNTdHJpbmcgPT09ICdpZ25vcmVJZlRydWUnKSB7XG4gICAgcmV0dXJuIGV4dHJhY3RKc1ZhbHVlKF9ldmFsdWF0ZShuZXh0KGVybFZhbCksIGVudnMsIGFkZFJlc3VsdCkpO1xuICB9XG4gIGlmIChqc1N0cmluZyA9PT0gJ2lnbm9yZVVubGVzc1RydWUnKSB7XG4gICAgcmV0dXJuICFleHRyYWN0SnNWYWx1ZShfZXZhbHVhdGUobmV4dChlcmxWYWwpLCBlbnZzLCBhZGRSZXN1bHQpKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgcmVkdWNlTGV0ID0gZnVuY3Rpb24oZW52cywgbGlzdCwgYWRkUmVzdWx0KSB7XG4gIHZhciBuZXdFbnYgPSB7fTtcbiAgdmFyIF9lbnZzID0gYWRkRW52KGVudnMsIG5ld0Vudik7XG4gIHdoaWxlICghaXNFbXB0eShsaXN0KSkge1xuICAgIHZhciBqc0tleSA9IGV4dHJhY3RKc1ZhbHVlKGxpc3QudmFsdWUpO1xuICAgIGxpc3QgPSByZWN1cnNlKGxpc3QpO1xuICAgIHZhciBlbnZWYWx1ZSA9IF9ldmFsdWF0ZShsaXN0LnZhbHVlLCBfZW52cywgYWRkUmVzdWx0KTtcbiAgICBuZXdFbnZbanNLZXldID0gZW52VmFsdWU7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gIH1cbiAgcmV0dXJuIG5ld0Vudjtcbn07XG5cbnZhciByZWR1Y2VMZXRyZWMgPSBmdW5jdGlvbihlbnZzLCBsaXN0LCBhZGRSZXN1bHQpIHtcbiAgdmFyIG5ld0VudiA9IHt9O1xuICB2YXIgX2VudnMgPSBhZGRFbnYoZW52cywgbmV3RW52KTtcbiAgd2hpbGUgKCFpc0VtcHR5KGxpc3QpKSB7XG4gICAgdmFyIGpzS2V5ID0gZXh0cmFjdEpzVmFsdWUobGlzdC52YWx1ZSk7XG4gICAgbGlzdCA9IHJlY3Vyc2UobGlzdCk7XG4gICAgdmFyIF9lcmxFeHByID0gZnJvbUFycmF5KFxuICAgICAgWyAgY3JlYXRlRXJsU3ltYm9sKFwiZml4KlwiKSxcbiAgICAgICAgIGZyb21BcnJheShbY3JlYXRlRXJsU3ltYm9sKFwiZm4qXCIpLFxuICAgICAgICAgZnJvbUFycmF5KFtqc0tleV0pLFxuICAgICAgICAgbGlzdC52YWx1ZV0pXG4gICAgICBdKTtcbiAgICB2YXIgZW52VmFsdWUgPSBfZXZhbHVhdGUoX2VybEV4cHIsIF9lbnZzLCBhZGRSZXN1bHQpO1xuICAgIG5ld0Vudltqc0tleV0gPSBlbnZWYWx1ZTtcbiAgICBsaXN0ID0gcmVjdXJzZShsaXN0KTtcbiAgfVxuICByZXR1cm4gbmV3RW52O1xufTtcblxudmFyIHNwbGljZVVucXVvdGUgPSBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICByZXR1cm4gc3BsaWNlVW5xdW90ZSA9PT0gKGV4dHJhY3RKc1ZhbHVlKGVybFZhbHVlKSk7XG59O1xuXG52YXIgc3BsaWNlVW5xdW90ZWRFeHByID0gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgcmV0dXJuIGlzRXJsTGlzdChlcmxWYWx1ZSkgJiYgKHNwbGljZVVucXVvdGUoY2FyKGVybFZhbHVlKSkpO1xufTtcblxudmFyIHVuZGVmaW5lVmFsdWUgPSBmdW5jdGlvbihlcmxMaXN0LCBlbnZzKSB7XG4gIHZhciBqc0tleSA9IGV4dHJhY3RKc1ZhbHVlKGNhcihlcmxMaXN0KSk7XG4gIHJldHVybiB1bnNldE1haW5FbnYoZW52cywganNLZXkpO1xufTtcblxudmFyIHVucXVvdGUgPSBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICByZXR1cm4gdW5xdW90ZSA9PT0gKGV4dHJhY3RKc1ZhbHVlKGVybFZhbHVlKSk7XG59O1xuXG52YXIgdW5xdW90ZWRFeHByID0gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgcmV0dXJuIGlzRXJsTGlzdChlcmxWYWx1ZSkgJiYgKHVucXVvdGUoY2FyKGVybFZhbHVlKSkpO1xufTtcblxuZXhwb3J0IHsgZXZhbHVhdGUgfTtcbiIsImltcG9ydCB7IGdldEVudmlyb25tZW50IGFzIHNldEVudjAgfSBmcm9tICcuL2VudjAnO1xuaW1wb3J0IHsgZ2V0RW52aXJvbm1lbnQgYXMgc2V0RW52MSB9IGZyb20gJy4vZW52MSc7XG5pbXBvcnQgeyBnZXRFbnZpcm9ubWVudCBhcyBzZXRFbnYyIH0gZnJvbSAnLi9lbnYyJztcbmltcG9ydCB7IGdldEVudmlyb25tZW50IGFzIHNldEVudjMgfSBmcm9tICcuL2VudjMnO1xuaW1wb3J0IHsgZ2V0RW52aXJvbm1lbnQgYXMgc2V0RW52NCB9IGZyb20gJy4vZW52NCc7XG5cbnZhciBnZXRMaXNwRW52aXJvbm1lbnQgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgdmFyIGRpc3BsYXkgPSBjb25maWcuZGlzcGxheTtcbiAgdmFyIGVudmlyb25tZW50ID0ge307XG4gIGNvbmZpZyA9IHtcbiAgICBkaXNwbGF5OiBkaXNwbGF5LFxuICAgIGVudmlyb25tZW50OiBlbnZpcm9ubWVudFxuICB9O1xuICBzZXRFbnYwKGNvbmZpZyk7XG4gIHNldEVudjEoY29uZmlnKTtcbiAgc2V0RW52Mihjb25maWcpO1xuICBzZXRFbnYzKGNvbmZpZyk7XG4gIHNldEVudjQoY29uZmlnKTtcbiAgcmV0dXJuIGVudmlyb25tZW50O1xufTtcblxuZXhwb3J0IHsgZ2V0TGlzcEVudmlyb25tZW50IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNKc1N0cmluZyB9IGZyb20gJy4vanMtdXRpbGl0aWVzJztcblxudmFyIF9fc2xpY2UgICA9IFtdLnNsaWNlO1xudmFyIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG52YXIgZnJvbUVybEluZGV4ID0gZnVuY3Rpb24oZXJsSW5kZXgpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICB2YXIganNWYWx1ZSA9IGVybEluZGV4LmpzVmFsdWU7XG4gIGZvciAodmFyIGtleSBpbiBqc1ZhbHVlKSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChqc1ZhbHVlLCBrZXkpKSBjb250aW51ZTtcbiAgICB2YXIgdmFsdWUgPSBqc1ZhbHVlW2tleV07XG4gICAgaWYgKGlzSnNTdHJpbmcoa2V5KSkge1xuICAgICAgdmFyIG5ld0tleSA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgc3dpdGNoIChrZXlbMF0pIHtcbiAgICAgICAgICBjYXNlICc6JzpcbiAgICAgICAgICAgIHJldHVybiBrZXkuc2xpY2UoMSk7XG4gICAgICAgICAgY2FzZSAnXCInOlxuICAgICAgICAgICAgcmV0dXJuIGtleS5zbGljZSgxLCAtMSk7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cbiAgICAgIH0pKCk7XG4gICAgICByZXN1bHRbbmV3S2V5XSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIGZyb21Kc09iamVjdHMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGpzT2JqZWN0cyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gIHZhciBjb3B5ID0ge307XG4gIHZhciBsZW4gPSBqc09iamVjdHMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgIGkgPCBsZW47IGkrKykge1xuICAgIHZhciBqc09iamVjdCA9IGpzT2JqZWN0c1tpXTtcbiAgICBmb3IgKHZhciBrZXkgaW4ganNPYmplY3QpIHtcbiAgICAgIGlmICghX19oYXNQcm9wLmNhbGwoanNPYmplY3QsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdmFyIHZhbCA9IGpzT2JqZWN0W2tleV07XG4gICAgICBpZiAoaXNKc1N0cmluZyhrZXkpKSB7XG4gICAgICAgIGNvcHlbJzonICsga2V5XSA9IHZhbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvcHlba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUVybEluZGV4KGNvcHkpO1xufTtcblxuZXhwb3J0IHtcbiAgZnJvbUpzT2JqZWN0cyxcbiAgZnJvbUVybEluZGV4XG59O1xuIiwiaW1wb3J0IHsgY2lyY3VtcGVuZFF1b3RlcyB9ICAgZnJvbSAnLi9qcy11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3RyaW5nIH0gICAgZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBmcm9tQXJyYXkgfSAgICAgICAgICBmcm9tICcuL2xpbmtlZC1saXN0JztcbmltcG9ydCB7IGdldExpc3BFbnZpcm9ubWVudCB9IGZyb20gJy4vZ2V0TGlzcEVudmlyb25tZW50JztcbmltcG9ydCB7IF9wcm9jZXNzIH0gICAgICAgICAgIGZyb20gJy4vX3Byb2Nlc3MnO1xuaW1wb3J0IHsgc2VyaWFsaXplIH0gICAgICAgICAgZnJvbSAnLi9zZXJpYWxpemUnO1xuaW1wb3J0IHN0YW5kYXJkRm5zQW5kTWFjcm9zICAgZnJvbSAnLi9zdGFuZGFyZC1mbnMtYW5kLW1hY3Jvcy5saXNwJztcbmltcG9ydCB7IHRva2VuaXplQW5kUGFyc2UgfSAgIGZyb20gJy4vdG9rZW5pemVBbmRQYXJzZSc7XG5cbnZhciBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIF9jcmVhdGVFcmxTdHJpbmcgPSBmdW5jdGlvbihqc1N0cmluZykge1xuICByZXR1cm4gY3JlYXRlRXJsU3RyaW5nKGNpcmN1bXBlbmRRdW90ZXMoanNTdHJpbmcpKTtcbn07XG5cbnZhciBlbmNhcHN1bGF0ZSA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVmZmVjdDoge1xuICAgICAgICB0eXBlOiB0eXBlXG4gICAgICB9LFxuICAgICAgdmFsdWU6IGVybFZhbHVlXG4gICAgfTtcbiAgfTtcbn07XG5cbnZhciBlcnJvciA9IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSkge1xuICByZXR1cm4gW2VuY2Fwc3VsYXRlKCdlcnJvcicpKFwicmVwbCBlcnJvcjogKFwiICsgZXJyb3JNZXNzYWdlICsgXCIpXCIpXTtcbn07XG5cbnZhciBmbGF0dGVuSWZOZWNlc3NhcnkgPSBmdW5jdGlvbihlZmZlY3RzKSB7XG4gIHZhciB2YWx1ZTtcbiAgdmFyIHJlc3VsdCA9IGVmZmVjdHM7XG4gIHdoaWxlIChyZXN1bHQubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkodmFsdWUgPSByZXN1bHRbMF0udmFsdWUpKSB7XG4gICAgcmVzdWx0ID0gZmxhdHRlbklmTmVjZXNzYXJ5KHZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIF9pbnRlcnByZXQgPSBmdW5jdGlvbihlbnZzLCBqc1N0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBfc2VyaWFsaXplKFxuICAgICAgZmxhdHRlbklmTmVjZXNzYXJ5KFxuICAgICAgICBfcHJvY2Vzcyh0b2tlbml6ZUFuZFBhcnNlKShlbnZzKShqc1N0cmluZykpKTtcbiAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yKF9lcnJvcik7XG4gIH1cbn07XG5cbnZhciBpbnRlcnByZXQgPSBmdW5jdGlvbihqc1N0cmluZywgdXNlckpzQXJyYXkpIHtcbiAgaWYgKHVzZXJKc0FycmF5ICE9IG51bGwpIHtcbiAgICB2YXIgdXNlckVudiA9IHtcbiAgICAgICcqQVJHVionOiBmcm9tQXJyYXkodXNlckpzQXJyYXkubWFwKF9jcmVhdGVFcmxTdHJpbmcpKVxuICAgIH07XG4gICAgcmV0dXJuIF9pbnRlcnByZXQoW3VzZXJFbnYsIGVudmlyb25tZW50XSwganNTdHJpbmcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBfaW50ZXJwcmV0KFtlbnZpcm9ubWVudF0sIGpzU3RyaW5nKTtcbiAgfVxufTtcblxudmFyIF9zZXJpYWxpemUgPSBmdW5jdGlvbihyZXN1bHRzKSB7XG4gIHJldHVybiByZXN1bHRzLm1hcChmdW5jdGlvbihyZXN1bHQpIHtcbiAgICB2YXIgX3Jlc3VsdCA9IHt9O1xuICAgIGZvciAodmFyIGtleSBpbiByZXN1bHQpIHtcbiAgICAgIGlmICghX19oYXNQcm9wLmNhbGwocmVzdWx0LCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdFtrZXldO1xuICAgICAgaWYgKGtleSA9PT0gJ2VmZmVjdCcpIHtcbiAgICAgICAgX3Jlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfcmVzdWx0W2tleV0gPSBzZXJpYWxpemUodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX3Jlc3VsdDtcbiAgfSk7XG59O1xuXG52YXIgZW52aXJvbm1lbnQgPSBnZXRMaXNwRW52aXJvbm1lbnQoe1xuICBkaXNwbGF5OiBlbmNhcHN1bGF0ZSgnZGlzcGxheScpXG59KTtcblxuaW50ZXJwcmV0KHN0YW5kYXJkRm5zQW5kTWFjcm9zKTtcblxuZXhwb3J0IHsgaW50ZXJwcmV0IH07XG4iLCJ2YXIgY2lyY3VtcGVuZFF1b3RlcyA9IGZ1bmN0aW9uKGpzU3RyaW5nKSB7XG4gIHJldHVybiAnXCInICsganNTdHJpbmcgKyAnXCInO1xufTtcblxudmFyIGlzSnNOYU4gPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIGlzSnNOdW1iZXIodmFsKSAmJiB2YWwgIT09IHZhbDtcbn07XG5cbnZhciBpc0pzTnVtYmVyID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IE51bWJlcl0nO1xufTtcblxudmFyIGlzSnNTdHJpbmcgPSBmdW5jdGlvbihqc1ZhbCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGpzVmFsKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59O1xuXG5leHBvcnQge1xuICBjaXJjdW1wZW5kUXVvdGVzLFxuICBpc0pzTmFOLFxuICBpc0pzTnVtYmVyLFxuICBpc0pzU3RyaW5nXG59O1xuIiwidmFyIGRlcmVmICAgICAgICAgICAgICAgICA9ICdkZXJlZic7XG52YXIgZGVyZWZHbHlwaCAgICAgICAgICAgID0gJ0AnO1xudmFyIGNhdGNoU3RhciAgICAgICAgICAgICA9ICdjYXRjaConO1xudmFyIGRlZkJhbmcgICAgICAgICAgICAgICA9ICdkZWYhJztcbnZhciBfZG8gICAgICAgICAgICAgICAgICAgPSAnZG8nO1xudmFyIF9ldmFsICAgICAgICAgICAgICAgICA9ICdldmFsJztcbnZhciBfZXZhbFdpdGhFbnYgICAgICAgICAgPSAnZXZhbC13aXRoLWVudic7XG52YXIgZXhwYW5kTWFjcm8gICAgICAgICAgID0gJ2V4cGFuZC1tYWNybyc7XG52YXIgX2ZhbHNlICAgICAgICAgICAgICAgID0gJ2ZhbHNlJztcbnZhciBmblN0YXIgICAgICAgICAgICAgICAgPSAnZm4qJztcbnZhciBfZ2V0Q3VycmVudEVudiAgICAgICAgPSAnLWdldC1jdXJyZW50LWVudi0nO1xudmFyIF9nZXREZWZhdWx0RW52ICAgICAgICA9ICctZ2V0LWRlZmF1bHQtZW52LSc7XG52YXIgX2lmICAgICAgICAgICAgICAgICAgID0gJ2lmJztcbnZhciBpZ25vcmVCYW5nICAgICAgICAgICAgPSAnaWdub3JlISc7XG52YXIgaWdub3JlQmFuZ0dseXBoICAgICAgID0gJyMhJztcbnZhciBpZ25vcmVJZlRydWUgICAgICAgICAgPSAnaWdub3JlSWZUcnVlJztcbnZhciBpZ25vcmVJZlRydWVHbHlwaCAgICAgPSAnIy0nO1xudmFyIGlnbm9yZVVubGVzc1RydWUgICAgICA9ICdpZ25vcmVVbmxlc3NUcnVlJztcbnZhciBpZ25vcmVVbmxlc3NUcnVlR2x5cGggPSAnIysnO1xudmFyIGlnbm9yZSAgICAgICAgICAgICAgICA9ICdpZ25vcmUnO1xudmFyIGluZGV4RW5kICAgICAgICAgICAgICA9ICd9JztcbnZhciBpbmRleFN0YXJ0ICAgICAgICAgICAgPSAneyc7XG52YXIgbGV0U3RhciAgICAgICAgICAgICAgID0gJ2xldConO1xudmFyIGxldHJlY1N0YXIgICAgICAgICAgICA9ICdsZXRyZWMqJztcbnZhciBsaXN0RW5kICAgICAgICAgICAgICAgPSAnKSc7XG52YXIgbGlzdFN0YXJ0ICAgICAgICAgICAgID0gJygnO1xudmFyIG1hY3JvU3RhciAgICAgICAgICAgICA9ICdtYWNybyonO1xudmFyIG5pbCAgICAgICAgICAgICAgICAgICA9ICduaWwnO1xudmFyIF9wcm9jZXNzICAgICAgICAgICAgICA9ICctcHJvY2Vzcy0nO1xudmFyIHF1YXNpcXVvdGUgICAgICAgICAgICA9ICdxdWFzaXF1b3RlJztcbnZhciBxdWFzaXF1b3RlR2x5cGggICAgICAgPSAnYCc7XG52YXIgcXVvdGUgICAgICAgICAgICAgICAgID0gJ3F1b3RlJztcbnZhciBxdW90ZUdseXBoICAgICAgICAgICAgPSAnXFwnJztcbnZhciBzcGxhdCAgICAgICAgICAgICAgICAgPSAnJic7XG52YXIgc3BsaWNlVW5xdW90ZSAgICAgICAgID0gJ3NwbGljZS11bnF1b3RlJztcbnZhciBzcGxpY2VVbnF1b3RlR2x5cGggICAgPSAnfkAnO1xudmFyIF90cnVlICAgICAgICAgICAgICAgICA9ICd0cnVlJztcbnZhciB0cnlTdGFyICAgICAgICAgICAgICAgPSAndHJ5Kic7XG52YXIgdW5kZWZCYW5nICAgICAgICAgICAgID0gJ3VuZGVmISc7XG52YXIgdW5xdW90ZSAgICAgICAgICAgICAgID0gJ3VucXVvdGUnO1xudmFyIHVucXVvdGVHbHlwaCAgICAgICAgICA9ICd+J1xuXG52YXIga2V5VG9rZW5zID0gW1xuICBkZXJlZixcbiAgZGVyZWZHbHlwaCxcbiAgY2F0Y2hTdGFyLFxuICBkZWZCYW5nLFxuICBfZG8sXG4gIF9ldmFsLFxuICBfZXZhbFdpdGhFbnYsXG4gIGV4cGFuZE1hY3JvLFxuICBfZmFsc2UsXG4gIGZuU3RhcixcbiAgX2dldEN1cnJlbnRFbnYsXG4gIF9nZXREZWZhdWx0RW52LFxuICBfaWYsXG4gIGlnbm9yZUJhbmcsXG4gIGlnbm9yZUJhbmdHbHlwaCxcbiAgaWdub3JlSWZUcnVlLFxuICBpZ25vcmVJZlRydWVHbHlwaCxcbiAgaWdub3JlVW5sZXNzVHJ1ZSxcbiAgaWdub3JlVW5sZXNzVHJ1ZUdseXBoLFxuICBpZ25vcmUsXG4gIGluZGV4RW5kLFxuICBpbmRleFN0YXJ0LFxuICBsZXRTdGFyLFxuICBsZXRyZWNTdGFyLFxuICBsaXN0RW5kLFxuICBsaXN0U3RhcnQsXG4gIG1hY3JvU3RhcixcbiAgbmlsLFxuICBfcHJvY2VzcyxcbiAgcXVhc2lxdW90ZSxcbiAgcXVhc2lxdW90ZUdseXBoLFxuICBxdW90ZSxcbiAgcXVvdGVHbHlwaCxcbiAgc3BsYXQsXG4gIHNwbGljZVVucXVvdGUsXG4gIHNwbGljZVVucXVvdGVHbHlwaCxcbiAgX3RydWUsXG4gIHRyeVN0YXIsXG4gIHVuZGVmQmFuZyxcbiAgdW5xdW90ZSxcbiAgdW5xdW90ZUdseXBoXG5dO1xuXG52YXIga2V5d29yZHMgPSBbXG4gIGNhdGNoU3RhcixcbiAgZGVmQmFuZyxcbiAgX2RvLFxuICBfZXZhbCxcbiAgX2V2YWxXaXRoRW52LFxuICBleHBhbmRNYWNybyxcbiAgX2ZhbHNlLFxuICBmblN0YXIsXG4gIF9nZXRDdXJyZW50RW52LFxuICBfZ2V0RGVmYXVsdEVudixcbiAgX2lmLFxuICBpZ25vcmUsXG4gIGxldFN0YXIsXG4gIGxldHJlY1N0YXIsXG4gIG1hY3JvU3RhcixcbiAgbmlsLFxuICBfcHJvY2VzcyxcbiAgcXVhc2lxdW90ZSxcbiAgcXVvdGUsXG4gIHNwbGljZVVucXVvdGUsXG4gIF90cnVlLFxuICB0cnlTdGFyLFxuICB1bmRlZkJhbmcsXG4gIHVucXVvdGVcbl07XG5cbnZhciBtYWNyb1Rva2VucyA9IFtxdWFzaXF1b3RlLCBxdW90ZSwgc3BsaWNlVW5xdW90ZSwgdW5xdW90ZV07XG5cbnZhciBnbHlwaFRva2VucyA9IFtcbiAgZGVyZWZHbHlwaCxcbiAgaWdub3JlQmFuZ0dseXBoLFxuICBxdWFzaXF1b3RlR2x5cGgsXG4gIHF1b3RlR2x5cGgsXG4gIHNwbGljZVVucXVvdGVHbHlwaCxcbiAgdW5xdW90ZUdseXBoXG5dO1xuXG52YXIgYmluYXJ5R2x5cGhUb2tlbnMgPSBbaWdub3JlSWZUcnVlR2x5cGgsIGlnbm9yZVVubGVzc1RydWVHbHlwaF07XG5cbnZhciBfX2luZGV4T2YgPSBbXS5pbmRleE9mIHx8IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG4gIH0gcmV0dXJuIC0xO1xufTtcblxudmFyIGlzS2V5d29yZCA9IGZ1bmN0aW9uKGpzU3RyaW5nKSB7XG4gIHJldHVybiBfX2luZGV4T2YuY2FsbChrZXl3b3JkcywganNTdHJpbmcpID49IDA7XG59O1xuXG5leHBvcnQge1xuICBiaW5hcnlHbHlwaFRva2VucyxcbiAgZGVyZWYsXG4gIGRlcmVmR2x5cGgsXG4gIGNhdGNoU3RhcixcbiAgZGVmQmFuZyxcbiAgX2RvLFxuICBfZXZhbCxcbiAgX2V2YWxXaXRoRW52LFxuICBleHBhbmRNYWNybyxcbiAgX2ZhbHNlLFxuICBmblN0YXIsXG4gIF9nZXRDdXJyZW50RW52LFxuICBfZ2V0RGVmYXVsdEVudixcbiAgZ2x5cGhUb2tlbnMsXG4gIF9pZixcbiAgaWdub3JlSWZUcnVlLFxuICBpZ25vcmVJZlRydWVHbHlwaCxcbiAgaWdub3JlVW5sZXNzVHJ1ZSxcbiAgaWdub3JlVW5sZXNzVHJ1ZUdseXBoLFxuICBpZ25vcmUsXG4gIGlnbm9yZUJhbmcsXG4gIGlnbm9yZUJhbmdHbHlwaCxcbiAgaW5kZXhFbmQsXG4gIGluZGV4U3RhcnQsXG4gIGtleVRva2VucyxcbiAgaXNLZXl3b3JkLFxuICBsZXRTdGFyLFxuICBsZXRyZWNTdGFyLFxuICBsaXN0RW5kLFxuICBsaXN0U3RhcnQsXG4gIG1hY3JvU3RhcixcbiAgbWFjcm9Ub2tlbnMsXG4gIG5pbCxcbiAgX3Byb2Nlc3MsXG4gIHF1YXNpcXVvdGUsXG4gIHF1YXNpcXVvdGVHbHlwaCxcbiAgcXVvdGUsXG4gIHF1b3RlR2x5cGgsXG4gIHNwbGF0LFxuICBzcGxpY2VVbnF1b3RlLFxuICBzcGxpY2VVbnF1b3RlR2x5cGgsXG4gIF90cnVlLFxuICB0cnlTdGFyLFxuICB1bmRlZkJhbmcsXG4gIHVucXVvdGUsXG4gIHVucXVvdGVHbHlwaFxufTtcbiIsImltcG9ydCB7IGVybFR5cGVzIH0gZnJvbSAnLi90eXBlcyc7XG5cbnZhciBlcmxMaXN0VHlwZSA9IGVybFR5cGVzWzZdO1xuXG52YXIgX19zbGljZSA9IFtdLnNsaWNlO1xuXG52YXIgY2FyID0gZnVuY3Rpb24oZXJsTGlzdCkge1xuICBpZiAoaXNFbXB0eShlcmxMaXN0KSkge1xuICAgIHJldHVybiBFT0w7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVybExpc3QudmFsdWU7XG4gIH1cbn07XG5cbnZhciBjZHIgPSBmdW5jdGlvbihlcmxMaXN0KSB7XG4gIGlmIChpc0VtcHR5KGVybExpc3QpKSB7XG4gICAgcmV0dXJuIEVPTDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZXJsTGlzdC5uZXh0O1xuICB9XG59O1xuXG52YXIgYXJlRXF1YWwgPSBmdW5jdGlvbihsaXN0MCwgbGlzdDEsIF9hcmVFcXVhbCkge1xuICB3aGlsZSAoIShpc0VtcHR5KGxpc3QwKSB8fCBpc0VtcHR5KGxpc3QxKSkpIHtcbiAgICBpZiAoIV9hcmVFcXVhbChsaXN0MC52YWx1ZSwgbGlzdDEudmFsdWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxpc3QwID0gY2RyKGxpc3QwKTtcbiAgICBsaXN0MSA9IGNkcihsaXN0MSk7XG4gIH1cbiAgcmV0dXJuIGlzRW1wdHkobGlzdDApICYmIGlzRW1wdHkobGlzdDEpO1xufTtcblxudmFyIGNvbmNhdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZXJsTGlzdHMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICBpZiAoZXJsTGlzdHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEVPTDtcbiAgfVxuICB2YXIgcmVzdWx0ID0gY29weShlcmxMaXN0c1swXSk7XG4gIHZhciB0YWlsID0gbGFzdFRhaWwocmVzdWx0KTtcbiAgdmFyIHJlbWFpbmluZyA9IGVybExpc3RzLnNsaWNlKDEpO1xuICB2YXIgbGVuID0gcmVtYWluaW5nLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBlcmxMaXN0ID0gcmVtYWluaW5nW2ldO1xuICAgIHZhciBfY29weSA9IGNvcHkoZXJsTGlzdCk7XG4gICAgaWYgKGlzRW1wdHkodGFpbCkpIHtcbiAgICAgIHJlc3VsdCA9IF9jb3B5O1xuICAgICAgdGFpbCA9IGxhc3RUYWlsKHJlc3VsdCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFpc0VtcHR5KF9jb3B5KSkge1xuICAgICAgdGFpbC5uZXh0ID0gX2NvcHk7XG4gICAgICB0YWlsID0gbGFzdFRhaWwoX2NvcHkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIGNvbnMgPSBmdW5jdGlvbihlcmxBcmdzKSB7XG4gIHJldHVybiBjcmVhdGVFcmxMaXN0KGNhcihlcmxBcmdzKSwgbmV4dChlcmxBcmdzKSk7XG59O1xuXG52YXIgY29weSA9IGZ1bmN0aW9uKGVybExpc3QpIHtcbiAgcmV0dXJuIG1hcCgoZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiB4O1xuICB9KSwgZXJsTGlzdCk7XG59O1xuXG52YXIgY3JlYXRlRXJsTGlzdCA9IGZ1bmN0aW9uKHZhbHVlLCBuZXh0Tm9kZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBFT0w7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZU5vZGUodmFsdWUsIG5leHROb2RlICE9IG51bGwgPyBuZXh0Tm9kZSA6IEVPTCk7XG59O1xuXG52YXIgY3JlYXRlTm9kZSA9IGZ1bmN0aW9uKHZhbHVlLCBuZXh0Tm9kZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGVybExpc3RUeXBlLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBuZXh0OiBuZXh0Tm9kZVxuICB9O1xufTtcblxudmFyIGRyb3AgPSBmdW5jdGlvbihuYnIsIGVybExpc3QpIHtcbiAgd2hpbGUgKG5iciAhPT0gMCkge1xuICAgIGVybExpc3QgPSBjZHIoZXJsTGlzdCk7XG4gICAgbmJyID0gbmJyIC0gMTtcbiAgfVxuICByZXR1cm4gZXJsTGlzdDtcbn07XG5cbnZhciBpc0VtcHR5ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBFT0w7XG59O1xuXG52YXIgZmlsdGVyID0gZnVuY3Rpb24ocHJlZGljYXRlLCBsaXN0KSB7XG4gIHZhciBfcmVkdWNlID0gZnVuY3Rpb24obGlzdCwgdmFsdWUpIHtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVybExpc3QodmFsdWUsIGxpc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG4gIH07XG4gIHJldHVybiByZXZlcnNlKHJlZHVjZShFT0wsIF9yZWR1Y2UsIGxpc3QpKTtcbn07XG5cbnZhciBmb3JFYWNoID0gZnVuY3Rpb24oZm4sIGxpc3QpIHtcbiAgdmFyIHJlc3VsdCA9IGxpc3Q7XG4gIHdoaWxlICghaXNFbXB0eShsaXN0KSkge1xuICAgIHJlc3VsdCA9IGZuKGxpc3QudmFsdWUpO1xuICAgIGxpc3QgPSByZWN1cnNlKGxpc3QpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgZnJvbUFycmF5ID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgdmFyIF9yZWR1Y2UgPSBmdW5jdGlvbihsaXN0LCB2YWx1ZSkge1xuICAgIHJldHVybiBjcmVhdGVFcmxMaXN0KHZhbHVlLCBsaXN0KTtcbiAgfTtcbiAgcmV0dXJuIGFycmF5LnJldmVyc2UoKS5yZWR1Y2UoX3JlZHVjZSwgY3JlYXRlRXJsTGlzdCgpKTtcbn07XG5cbnZhciBsYXN0ID0gZnVuY3Rpb24oZXJsTGlzdCkge1xuICByZXR1cm4gY2FyKGxhc3RUYWlsKGVybExpc3QpKTtcbn07XG5cbnZhciBsYXN0VGFpbCA9IGZ1bmN0aW9uKGVybExpc3QpIHtcbiAgaWYgKGlzRW1wdHkoZXJsTGlzdCkpIHtcbiAgICByZXR1cm4gZXJsTGlzdDtcbiAgfVxuICB2YXIgcHJpb3IgPSBlcmxMaXN0O1xuICB2YXIgY3VycmVudCA9IGNkcihlcmxMaXN0KTtcbiAgd2hpbGUgKCFpc0VtcHR5KGN1cnJlbnQpKSB7XG4gICAgcHJpb3IgPSBjZHIocHJpb3IpO1xuICAgIGN1cnJlbnQgPSBjZHIoY3VycmVudCk7XG4gIH1cbiAgcmV0dXJuIHByaW9yO1xufTtcblxudmFyIG1hcCA9IGZ1bmN0aW9uKGZuLCBsaXN0KSB7XG4gIHZhciBfcmVkdWNlID0gZnVuY3Rpb24obGlzdCwgdmFsdWUpIHtcbiAgICByZXR1cm4gY3JlYXRlRXJsTGlzdChmbih2YWx1ZSksIGxpc3QpO1xuICB9O1xuICByZXR1cm4gcmV2ZXJzZShyZWR1Y2UoRU9MLCBfcmVkdWNlLCBsaXN0KSk7XG59O1xuXG52YXIgbmV4dCA9IGZ1bmN0aW9uKGVybExpc3QpIHtcbiAgcmV0dXJuIGNhcihjZHIoZXJsTGlzdCkpO1xufTtcblxudmFyIHJlY3Vyc2UgPSBmdW5jdGlvbihsaXN0KSB7XG4gIGlmIChpc0VtcHR5KGxpc3QpKSB7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3QubmV4dDtcbiAgfVxufTtcblxudmFyIHJlZHVjZSA9IGZ1bmN0aW9uKHNlZWQsIGZuLCBsaXN0KSB7XG4gIHdoaWxlICghaXNFbXB0eShsaXN0KSkge1xuICAgIHNlZWQgPSBmbihzZWVkLCBsaXN0LnZhbHVlKTtcbiAgICBsaXN0ID0gcmVjdXJzZShsaXN0KTtcbiAgfVxuICByZXR1cm4gc2VlZDtcbn07XG5cbnZhciByZWR1Y2VCeTIgPSBmdW5jdGlvbihzZWVkLCBmbiwgbGlzdCkge1xuICB3aGlsZSAoIWlzRW1wdHkobGlzdCkpIHtcbiAgICB2YXIgdmFsdWUwID0gbGlzdC52YWx1ZTtcbiAgICBsaXN0ID0gcmVjdXJzZShsaXN0KTtcbiAgICB2YXIgdmFsdWUxID0gbGlzdC52YWx1ZTtcbiAgICBzZWVkID0gZm4oc2VlZCwgdmFsdWUwLCB2YWx1ZTEpO1xuICAgIGxpc3QgPSByZWN1cnNlKGxpc3QpO1xuICB9XG4gIHJldHVybiBzZWVkO1xufTtcblxudmFyIHJldmVyc2UgPSBmdW5jdGlvbihsaXN0KSB7XG4gIHZhciByZXN1bHQgPSBFT0w7XG4gIHdoaWxlICghaXNFbXB0eShsaXN0KSkge1xuICAgIHJlc3VsdCA9IGNyZWF0ZUVybExpc3QobGlzdC52YWx1ZSwgcmVzdWx0KTtcbiAgICBsaXN0ID0gbGlzdC5uZXh0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgdGFrZSA9IGZ1bmN0aW9uKG5iciwgZXJsTGlzdCkge1xuICB2YXIgcmVzdWx0ID0gY3JlYXRlRXJsTGlzdCgpO1xuICB3aGlsZSAobmJyICE9PSAwKSB7XG4gICAgdmFyIG5vZGUgPSBjYXIoZXJsTGlzdCk7XG4gICAgZXJsTGlzdCA9IGNkcihlcmxMaXN0KTtcbiAgICByZXN1bHQgPSBjcmVhdGVFcmxMaXN0KG5vZGUsIHJlc3VsdCk7XG4gICAgbmJyID0gbmJyIC0gMTtcbiAgfVxuICByZXR1cm4gcmV2ZXJzZShyZXN1bHQpO1xufTtcblxudmFyIHRvQXJyYXkgPSBmdW5jdGlvbihsaXN0KSB7XG4gIHZhciBfcmVkdWNlID0gZnVuY3Rpb24oanNBcnJheSwgdmFsdWUpIHtcbiAgICBqc0FycmF5LnB1c2godmFsdWUpO1xuICAgIHJldHVybiBqc0FycmF5O1xuICB9O1xuICByZXR1cm4gcmVkdWNlKFtdLCBfcmVkdWNlLCBsaXN0KTtcbn07XG5cbnZhciB0b1BhcnRpYWxBcnJheSA9IGZ1bmN0aW9uKG5iciwgbGlzdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChuYnIgIT09IDApIHtcbiAgICB2YXIgbm9kZSA9IGNhcihsaXN0KTtcbiAgICBsaXN0ID0gY2RyKGxpc3QpO1xuICAgIHJlc3VsdC5wdXNoKG5vZGUpO1xuICAgIG5iciA9IG5iciAtIDE7XG4gIH1cbiAgcmVzdWx0LnB1c2gobGlzdCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgemlwID0gZnVuY3Rpb24oc2VlZCwgZm4sIGxpc3QwLCBsaXN0MSkge1xuICB3aGlsZSAoIShpc0VtcHR5KGxpc3QwKSB8fCBpc0VtcHR5KGxpc3QxKSkpIHtcbiAgICB2YXIgdmFsdWUwID0gY2FyKGxpc3QwKTtcbiAgICBsaXN0MCA9IGNkcihsaXN0MCk7XG4gICAgdmFyIHZhbHVlMSA9IGNhcihsaXN0MSk7XG4gICAgbGlzdDEgPSBjZHIobGlzdDEpO1xuICAgIHNlZWQgPSBmbihzZWVkLCB2YWx1ZTAsIHZhbHVlMSk7XG4gIH1cbiAgcmV0dXJuIHNlZWQ7XG59O1xuXG52YXIgX0VPTCA9IHt9O1xuXG52YXIgRU9MID0gY3JlYXRlTm9kZShfRU9MLCBfRU9MKTtcblxuZXhwb3J0IHtcbiAgYXJlRXF1YWwsXG4gIGNhcixcbiAgY2RyLFxuICBjb25jYXQsXG4gIGNvbnMsXG4gIGNvcHksXG4gIGNyZWF0ZUVybExpc3QsXG4gIGRyb3AsXG4gIGlzRW1wdHksXG4gIGZpbHRlcixcbiAgZm9yRWFjaCxcbiAgZnJvbUFycmF5LFxuICBsYXN0LFxuICBtYXAsXG4gIG5leHQsXG4gIHJlY3Vyc2UsXG4gIHJlZHVjZSxcbiAgcmVkdWNlQnkyLFxuICByZXZlcnNlLFxuICB0YWtlLFxuICB0b0FycmF5LFxuICB0b1BhcnRpYWxBcnJheVxufTtcbiIsImltcG9ydCB7IGJpbmFyeUdseXBoVG9rZW5zIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgY29tbWVudFNpZ25hbCB9IGZyb20gJy4vY29tbWVudFNpZ25hbCc7XG5pbXBvcnQgeyBjcmVhdGVFcmxCb29sZWFuIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxJZGVudGlmaWVyIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxJZ25vcmUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybEluZGV4IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxMaXN0IH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxOaWwgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUVybE51bWJlciB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgY3JlYXRlRXJsU3RyaW5nIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBjcmVhdGVFcmxTeW1ib2wgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGRlcmVmIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgZGVyZWZHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGV4dHJhY3RKc1ZhbHVlIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBfZmFsc2UgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBnbHlwaFRva2VucyB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGlnbm9yZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGlnbm9yZUJhbmcgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmVCYW5nR2x5cGggfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmVJZlRydWUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmVJZlRydWVHbHlwaCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGlnbm9yZVVubGVzc1RydWUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpZ25vcmVVbmxlc3NUcnVlR2x5cGggfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBpbmRleEVuZCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGluZGV4U3RhcnQgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBrZXlUb2tlbnMgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBsaXN0RW5kIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbGlzdFN0YXJ0IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbmlsIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcXVhc2lxdW90ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHF1b3RlIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgc3BsaWNlVW5xdW90ZSB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IHVucXVvdGUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBxdWFzaXF1b3RlR2x5cGggfSBmcm9tICcuL2tleVRva2Vucyc7XG5pbXBvcnQgeyBxdW90ZUdseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgc3BsaWNlVW5xdW90ZUdseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgdW5xdW90ZUdseXBoIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcmV2ZXJzZSB9IGZyb20gJy4vbGlua2VkLWxpc3QnO1xuaW1wb3J0IHsgX3RydWUgfSBmcm9tICcuL2tleVRva2Vucyc7XG5cbnZhciAgX19pbmRleE9mID0gW10uaW5kZXhPZiB8fCBmdW5jdGlvbihpdGVtKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICB9IHJldHVybiAtMTtcbn07XG5cbnZhciBhdG9taXplID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgdmFyIGNyZWF0ZUVybFZhbHVlID0gKGZ1bmN0aW9uKCkge1xuICAgIGlmIChpc05pbCh0b2tlbikpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFcmxOaWw7XG4gICAgfSBlbHNlIGlmIChpc0lnbm9yZSh0b2tlbikpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFcmxJZ25vcmU7XG4gICAgfSBlbHNlIGlmIChpc0Jvb2xlYW4odG9rZW4pKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVybEJvb2xlYW4ocGFyc2VCb29sZWFuKHRva2VuKSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcodG9rZW4pKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRXJsU3RyaW5nO1xuICAgIH0gZWxzZSBpZiAoaXNJZGVudGlmaWVyKHRva2VuKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVybElkZW50aWZpZXI7XG4gICAgfSBlbHNlIGlmIChpc0ludGVnZXIodG9rZW4pKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVybE51bWJlcihwYXJzZUludDEwKHRva2VuKSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNGbG9hdCh0b2tlbikpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbih0b2tlbikge1xuICAgICAgICByZXR1cm4gY3JlYXRlRXJsTnVtYmVyKHBhcnNlRmxvYXQxMCh0b2tlbikpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVybFN5bWJvbDtcbiAgICB9XG4gIH0pKCk7XG4gIHJldHVybiBjcmVhdGVFcmxWYWx1ZSh0b2tlbik7XG59O1xuXG52YXIgaXNCb29sZWFuID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuID09PSBfZmFsc2UgfHwgdG9rZW4gPT09IF90cnVlO1xufTtcblxudmFyIGlzRmxvYXQgPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gL14oLXxcXCspP1swLTldKF98XFxkKSpcXC4oXFxkfChcXGQoX3xcXGQpKlxcZCkpJC8udGVzdCh0b2tlbik7XG59O1xuXG52YXIgaXNCaW5hcnlHbHlwaCA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiBfX2luZGV4T2YuY2FsbChiaW5hcnlHbHlwaFRva2VucywgdG9rZW4pID49IDA7XG59O1xuXG52YXIgaXNHbHlwaCA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiBfX2luZGV4T2YuY2FsbChnbHlwaFRva2VucywgdG9rZW4pID49IDA7XG59O1xuXG52YXIgaXNJZ25vcmUgPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gdG9rZW4gPT09IGlnbm9yZTtcbn07XG5cbnZhciBpc0luZGV4U3RhcnQgPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gdG9rZW4gPT09IGluZGV4U3RhcnQ7XG59O1xuXG52YXIgaXNJbnRlZ2VyID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIC9eKDAoPyFcXC4pfCgoLXxcXCspP1sxLTldKF98XFxkKSokKSkvLnRlc3QodG9rZW4pO1xufTtcblxudmFyIGlzTGlzdFN0YXJ0ID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuID09PSBsaXN0U3RhcnQ7XG59O1xuXG52YXIgaXNOaWwgPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gdG9rZW4gPT09IG5pbDtcbn07XG5cbnZhciBfcGFyc2UgPSBmdW5jdGlvbih0b2tlbiwgdG9rZW5zKSB7XG4gIGlmIChpc0xpc3RTdGFydCh0b2tlbikpIHtcbiAgICByZXR1cm4gcGFyc2VMaXN0KHRva2Vucyk7XG4gIH0gZWxzZSBpZiAoaXNJbmRleFN0YXJ0KHRva2VuKSkge1xuICAgIHJldHVybiBwYXJzZUluZGV4KHRva2Vucyk7XG4gIH0gZWxzZSBpZiAoaXNHbHlwaCh0b2tlbikpIHtcbiAgICByZXR1cm4gcGFyc2VHbHlwaChnbHlwaEluZGV4W3Rva2VuXSwgdG9rZW5zKTtcbiAgfSBlbHNlIGlmIChpc0JpbmFyeUdseXBoKHRva2VuKSkge1xuICAgIHJldHVybiBwYXJzZUJpbmFyeUdseXBoKGJpbmFyeUdseXBoSW5kZXhbdG9rZW5dLCB0b2tlbnMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhdG9taXplKHRva2VuKTtcbiAgfVxufTtcblxudmFyIHBhcnNlID0gZnVuY3Rpb24odG9rZW5zKSB7XG4gIGlmICh0b2tlbnMgPT09IGNvbW1lbnRTaWduYWwpIHtcbiAgICByZXR1cm4gY29tbWVudFNpZ25hbDtcbiAgfVxuICByZXR1cm4gX3BhcnNlKHRva2Vucy5zaGlmdCgpLCB0b2tlbnMpO1xufTtcblxudmFyIHBhcnNlQmluYXJ5R2x5cGggPSBmdW5jdGlvbihrZXl3b3JkLCB0b2tlbnMpIHtcbiAgcmV0dXJuIGNyZWF0ZUVybExpc3QoXG4gICAgY3JlYXRlRXJsU3ltYm9sKGtleXdvcmQpLFxuICAgIGNyZWF0ZUVybExpc3QoXG4gICAgICBwYXJzZSh0b2tlbnMpLFxuICAgICAgY3JlYXRlRXJsTGlzdChwYXJzZSh0b2tlbnMpKSkpO1xufTtcblxudmFyIHBhcnNlQm9vbGVhbiA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbiA9PT0gX3RydWU7XG59O1xuXG52YXIgcGFyc2VGbG9hdDEwID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQoc3RyaXBVbmRlcnNjb3Jlcyh0b2tlbiksIDEwKTtcbn07XG5cbnZhciBwYXJzZUdseXBoID0gZnVuY3Rpb24oa2V5d29yZCwgdG9rZW5zKSB7XG4gIHJldHVybiBjcmVhdGVFcmxMaXN0KFxuICAgIGNyZWF0ZUVybFN5bWJvbChrZXl3b3JkKSxcbiAgICBjcmVhdGVFcmxMaXN0KHBhcnNlKHRva2VucykpKTtcbn07XG5cbnZhciBwYXJzZUluZGV4ID0gZnVuY3Rpb24odG9rZW5zKSB7XG4gIHZhciB0b2tlbjtcbiAgdmFyIGpzSW5kZXggPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciBpc0tleVN0ZXAgPSB0cnVlO1xuICB3aGlsZSAoKHRva2VuID0gdG9rZW5zLnNoaWZ0KCkpICE9PSBpbmRleEVuZCkge1xuICAgIGlmIChpc0tleVN0ZXApIHtcbiAgICAgIGtleSA9IF9wYXJzZSh0b2tlbiwgdG9rZW5zKTtcbiAgICAgIGlzS2V5U3RlcCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBqc0luZGV4W2V4dHJhY3RKc1ZhbHVlKGtleSldID0gX3BhcnNlKHRva2VuLCB0b2tlbnMpO1xuICAgICAgaXNLZXlTdGVwID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUVybEluZGV4KGpzSW5kZXgpO1xufTtcblxudmFyIHBhcnNlSW50MTAgPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gcGFyc2VJbnQoc3RyaXBVbmRlcnNjb3Jlcyh0b2tlbiksIDEwKTtcbn07XG5cbnZhciBwYXJzZUxpc3QgPSBmdW5jdGlvbih0b2tlbnMpIHtcbiAgdmFyIHRva2VuO1xuICB2YXIgZXJsTGlzdCA9IGNyZWF0ZUVybExpc3QoKTtcbiAgd2hpbGUgKCh0b2tlbiA9IHRva2Vucy5zaGlmdCgpKSAhPT0gbGlzdEVuZCkge1xuICAgIGVybExpc3QgPSBjcmVhdGVFcmxMaXN0KF9wYXJzZSh0b2tlbiwgdG9rZW5zKSwgZXJsTGlzdCk7XG4gIH1cbiAgcmV0dXJuIHJldmVyc2UoZXJsTGlzdCk7XG59O1xuXG52YXIgc3RhcnRzV2l0aCA9IGZ1bmN0aW9uKGNoYXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgcmV0dXJuIHRva2VuWzBdID09PSBjaGFyO1xuICB9O1xufTtcblxudmFyIHN0cmlwVW5kZXJzY29yZXMgPSBmdW5jdGlvbih0b2tlbikge1xuICByZXR1cm4gdG9rZW4ucmVwbGFjZSgvXy9nLCAnJyk7XG59O1xuXG52YXIgZ2x5cGhJbmRleCA9IHt9O1xuXG5nbHlwaEluZGV4W2RlcmVmR2x5cGhdICAgICAgICAgPSBkZXJlZjtcbmdseXBoSW5kZXhbaWdub3JlQmFuZ0dseXBoXSAgICA9IGlnbm9yZUJhbmc7XG5nbHlwaEluZGV4W3F1YXNpcXVvdGVHbHlwaF0gICAgPSBxdWFzaXF1b3RlO1xuZ2x5cGhJbmRleFtxdW90ZUdseXBoXSAgICAgICAgID0gcXVvdGU7XG5nbHlwaEluZGV4W3NwbGljZVVucXVvdGVHbHlwaF0gPSBzcGxpY2VVbnF1b3RlO1xuZ2x5cGhJbmRleFt1bnF1b3RlR2x5cGhdICAgICAgID0gdW5xdW90ZTtcblxudmFyIGJpbmFyeUdseXBoSW5kZXggPSB7fTtcblxuYmluYXJ5R2x5cGhJbmRleFtpZ25vcmVJZlRydWVHbHlwaF0gICAgID0gaWdub3JlSWZUcnVlO1xuYmluYXJ5R2x5cGhJbmRleFtpZ25vcmVVbmxlc3NUcnVlR2x5cGhdID0gaWdub3JlVW5sZXNzVHJ1ZTtcblxudmFyIGlzU3RyaW5nID0gc3RhcnRzV2l0aCgnXCInKTtcblxudmFyIGlzSWRlbnRpZmllciA9IHN0YXJ0c1dpdGgoJzonKTtcblxuZXhwb3J0IHsgcGFyc2UgfTtcbiIsImltcG9ydCB7IGNvbW1lbnRTaWduYWwgfSBmcm9tICcuL2NvbW1lbnRTaWduYWwnO1xuaW1wb3J0IHsgZXh0cmFjdEpzVmFsdWUgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGluZGV4RW5kIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgaW5kZXhTdGFydCB9IGZyb20gJy4va2V5VG9rZW5zJztcbmltcG9ydCB7IGlzRXJsQXRvbSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsQ29yZVB1cmVGdW5jdGlvbiB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxJZGVudGlmaWVyIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybElnbm9yZSB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxJbmRleCB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxLZXl3b3JkIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybExpc3QgfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTWFjcm8gfSBmcm9tICcuL3R5cGUtdXRpbGl0aWVzJztcbmltcG9ydCB7IGlzRXJsTmlsIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBpc0VybFN0cmluZyB9IGZyb20gJy4vdHlwZS11dGlsaXRpZXMnO1xuaW1wb3J0IHsgaXNFcmxVc2VyUHVyZUZ1bmN0aW9uIH0gZnJvbSAnLi90eXBlLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBsaXN0RW5kIH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgbGlzdFN0YXJ0IH0gZnJvbSAnLi9rZXlUb2tlbnMnO1xuaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5cbnZhciBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGFkam9pbkVybFZhbHVlID0gZnVuY3Rpb24oc2hvdWxkQmVSZWFkYWJsZSkge1xuICByZXR1cm4gZnVuY3Rpb24obWVtbywgZXJsVmFsdWUpIHtcbiAgICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZShlcmxWYWx1ZSwgc2hvdWxkQmVSZWFkYWJsZSk7XG4gICAgaWYgKG1lbW8ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gc2VyaWFsaXplZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiXCIgKyBtZW1vICsgXCIgXCIgKyBzZXJpYWxpemVkO1xuICAgIH1cbiAgfTtcbn07XG5cbnZhciBzZXJpYWxpemUgPSBmdW5jdGlvbihlcmxFeHByLCBzaG91bGRCZVJlYWRhYmxlKSB7XG4gIGlmIChlcmxFeHByID09PSBjb21tZW50U2lnbmFsKSB7XG4gICAgcmV0dXJuIGNvbW1lbnRTaWduYWw7XG4gIH1cbiAgdmFyIF9zZXJpYWxpemUgPSAoZnVuY3Rpb24oKSB7XG4gICAgaWYgKGlzRXJsTGlzdChlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZUxpc3Q7XG4gICAgfSBlbHNlIGlmIChpc0VybElnbm9yZShlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpZ25vcmVMYWJlbDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc0VybEluZGV4KGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gc2VyaWFsaXplSW5kZXg7XG4gICAgfSBlbHNlIGlmIChpc0VybEtleXdvcmQoZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgICAgICByZXR1cm4ga2V5d29yZExhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uKGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGNvcmVFZmZlY3RmdWxGdW5jdGlvbkxhYmVsO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGlzRXJsQ29yZVB1cmVGdW5jdGlvbihlcmxFeHByKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBjb3JlUHVyZUZ1bmN0aW9uTGFiZWw7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxVc2VyUHVyZUZ1bmN0aW9uKGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHVzZXJQdXJlRnVuY3Rpb25MYWJlbDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChpc0VybE1hY3JvKGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG1hY3JvTGFiZWw7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxOaWwoZXJsRXhwcikpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gbmlsTGFiZWw7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAoaXNFcmxJZGVudGlmaWVyKGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gc2VyaWFsaXplSWRlbnRpZmllcjtcbiAgICB9IGVsc2UgaWYgKGlzRXJsU3RyaW5nKGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gc2VyaWFsaXplU3RyaW5nO1xuICAgIH0gZWxzZSBpZiAoaXNFcmxBdG9tKGVybEV4cHIpKSB7XG4gICAgICByZXR1cm4gc2VyaWFsaXplQXRvbTtcbiAgICB9IGVsc2UgaWYgKGVybEV4cHIuanNWYWx1ZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gZXh0cmFjdEpzVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICAgICAgICByZXR1cm4gZXJsVmFsdWU7XG4gICAgICB9O1xuICAgIH1cbiAgfSkoKTtcbiAgcmV0dXJuIF9zZXJpYWxpemUoZXJsRXhwciwgc2hvdWxkQmVSZWFkYWJsZSk7XG59O1xuXG52YXIgc2VyaWFsaXplQXRvbSA9IGZ1bmN0aW9uKGVybEF0b20sIHNob3VsZEJlUmVhZGFibGUpIHtcbiAgcmV0dXJuIFwiKGF0b20gXCIgKyAoc2VyaWFsaXplKGVybEF0b20uZXJsVmFsdWUsIHNob3VsZEJlUmVhZGFibGUpKSArIFwiKVwiO1xufTtcblxudmFyIHNlcmlhbGl6ZUlkZW50aWZpZXIgPSBmdW5jdGlvbihlcmxTdHJpbmcsIHNob3VsZEJlUmVhZGFibGUpIHtcbiAgcmV0dXJuIGV4dHJhY3RKc1ZhbHVlKGVybFN0cmluZyk7XG59O1xuXG52YXIgc2VyaWFsaXplSW5kZXggPSBmdW5jdGlvbihlcmxJbmRleCwgc2hvdWxkQmVSZWFkYWJsZSkge1xuICB2YXIganNJbmRleCA9IGVybEluZGV4LmpzVmFsdWU7XG4gIHZhciBtZW1vID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiBqc0luZGV4KSB7XG4gICAgaWYgKCFfX2hhc1Byb3AuY2FsbChqc0luZGV4LCBrZXkpKSBjb250aW51ZTtcbiAgICB2YXIgZXJsVmFsdWUgPSBqc0luZGV4W2tleV07XG4gICAgaWYgKG1lbW8gPT09ICcnKSB7XG4gICAgICBtZW1vID0gXCJcIlxuICAgICAgICArIGtleVxuICAgICAgICArIFwiIFwiXG4gICAgICAgICsgKHNlcmlhbGl6ZShlcmxWYWx1ZSwgc2hvdWxkQmVSZWFkYWJsZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW1vID0gXCJcIlxuICAgICAgICArIG1lbW9cbiAgICAgICAgKyBcIiwgXCJcbiAgICAgICAgKyBrZXlcbiAgICAgICAgKyBcIiBcIlxuICAgICAgICArIChzZXJpYWxpemUoZXJsVmFsdWUsIHNob3VsZEJlUmVhZGFibGUpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluZGV4U3RhcnQgKyBtZW1vICsgaW5kZXhFbmQ7XG59O1xuXG52YXIgc2VyaWFsaXplTGlzdCA9IGZ1bmN0aW9uKGVybExpc3QsIHNob3VsZEJlUmVhZGFibGUpIHtcbiAgdmFyIHNlcmlhbGl6ZWRMaXN0ID0gcmVkdWNlKFxuICAgIFwiXCIsXG4gICAgYWRqb2luRXJsVmFsdWUoc2hvdWxkQmVSZWFkYWJsZSksXG4gICAgZXJsTGlzdCk7XG4gIHJldHVybiBsaXN0U3RhcnQgKyBzZXJpYWxpemVkTGlzdCArIGxpc3RFbmQ7XG59O1xuXG52YXIgc2VyaWFsaXplU3RyaW5nID0gZnVuY3Rpb24oZXJsU3RyaW5nLCBzaG91bGRCZVJlYWRhYmxlKSB7XG4gIHZhciBqc1N0cmluZyA9IHN0cmlwUXVvdGVzKGV4dHJhY3RKc1ZhbHVlKGVybFN0cmluZykpO1xuICBpZiAoIXNob3VsZEJlUmVhZGFibGUpIHtcbiAgICByZXR1cm4ganNTdHJpbmc7XG4gIH1cbiAgcmV0dXJuIGpzU3RyaW5nXG4gICAgLnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcJylcbiAgICAucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpXG4gICAgLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKTtcbn07XG5cbnZhciBzdHJpcFF1b3RlcyA9IGZ1bmN0aW9uKGpzU3RyaW5nKSB7XG4gIHJldHVybiBqc1N0cmluZy5zbGljZSgxLCAtMSk7XG59O1xuXG52YXIgY29yZUVmZmVjdGZ1bEZ1bmN0aW9uTGFiZWwgPSAnPGVmZmVjdGZ1bCBjb3JlIGZ1bmN0aW9uPic7XG52YXIgY29yZVB1cmVGdW5jdGlvbkxhYmVsICAgICAgPSAnPGNvcmUgZnVuY3Rpb24+JztcbnZhciBpZ25vcmVMYWJlbCAgICAgICAgICAgICAgICA9ICc8aWdub3JlPic7XG52YXIga2V5d29yZExhYmVsICAgICAgICAgICAgICAgPSAnPGtleXdvcmQ+JztcbnZhciBtYWNyb0xhYmVsICAgICAgICAgICAgICAgICA9ICc8bWFjcm8+JztcbnZhciBuaWxMYWJlbCAgICAgICAgICAgICAgICAgICA9ICduaWwnO1xudmFyIHVzZXJQdXJlRnVuY3Rpb25MYWJlbCAgICAgID0gJzxmdW5jdGlvbj4nO1xuXG5leHBvcnQgeyBzZXJpYWxpemUgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIoZG9cXG4gIChkZWYhIGZpeCogKFxcbiAgICBmbiogKGYpIChcXG4gICAgICAoZm4qICh4KSAoZiAoZm4qICgmIHlzKSAoYXBwbHkgKHggeCkgeXMpKSkpXFxuICAgICAgKGZuKiAoeCkgKGYgKGZuKiAoJiB5cykgKGFwcGx5ICh4IHgpIHlzKSkpKSkpKVxcblxcbiAgKGRlZiEgbWVtZml4KiAoXFxuICAgIGZuKiAoZikgKFxcbiAgICAgIGxldCogKGNhY2hlIHt9KSAoXFxuICAgICAgICAoZm4qICh4IGNhY2hlKSAoXFxuICAgICAgICAgIGZcXG4gICAgICAgICAgICAoZm4qICh6KSAoaWYgKGNvbnRhaW5zPyBjYWNoZSB6KVxcbiAgICAgICAgICAgICAgKGdldCBjYWNoZSB6KVxcbiAgICAgICAgICAgICAgKGxldCogKHJlc3VsdCAoKGZuKiAoeSkgKCh4IHggY2FjaGUpIHkpKSB6KSkgKGRvIChzZXQhIGNhY2hlIHogcmVzdWx0KSByZXN1bHQpKSkpXFxuICAgICAgICAgICAgY2FjaGUpKVxcbiAgICAgICAgKGZuKiAoeCBjYWNoZSkgKFxcbiAgICAgICAgICBmXFxuICAgICAgICAgICAgKGZuKiAoeikgKGlmIChjb250YWlucz8gY2FjaGUgeilcXG4gICAgICAgICAgICAgIChnZXQgY2FjaGUgeilcXG4gICAgICAgICAgICAgIChsZXQqIChyZXN1bHQgKChmbiogKHkpICgoeCB4IGNhY2hlKSB5KSkgeikpIChkbyAoc2V0ISBjYWNoZSB6IHJlc3VsdCkgcmVzdWx0KSkpKVxcbiAgICAgICAgICAgIGNhY2hlKSlcXG4gICAgICAgIGNhY2hlKSkpKVxcblxcbiAgKGRlZiEgXzAgY2FyKVxcblxcbiAgKGRlZiEgXzEgKGZuKiAoeHMpIChudGggMSB4cykpKVxcblxcbiAgKGRlZiEgXzIgKGZuKiAoeHMpIChudGggMiB4cykpKVxcblxcbiAgKGRlZiEgc3dhcCEgKFxcbiAgICBtYWNybyogKGF0b20gJiB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBhdG9tXFxuICAgICAgICBgKGxldCogKC1hdG9tLSB+YXRvbSkgKFxcbiAgICAgICAgICBkb1xcbiAgICAgICAgICAgIChyZXNldCEgLWF0b20tICh+KGNhciB4cykgKGRlcmVmIC1hdG9tLSkgfkAoY2RyIHhzKSkpXFxuICAgICAgICAgICAgKGRlcmVmIC1hdG9tLSkpKSkpKVxcblxcbiAgKGRlZiEgKmdlbnN5bS1jb3VudGVyKiAoYXRvbSAwKSlcXG5cXG4gIChkZWYhIGdlbnN5bSAoXFxuICAgICAgZm4qICgpIChzeW1ib2wgKHN0cmluZyBcXFwiR19fXFxcIiAoc3dhcCEgKmdlbnN5bS1jb3VudGVyKiBpbmNyKSkpKSlcXG5cXG4gIChkZWYhIG9yIChcXG4gICAgbWFjcm8qICgmIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIGZhbHNlXFxuICAgICAgICAobGV0KiAoLXF1ZXJ5LSAoZ2Vuc3ltKSlcXG4gICAgICAgICAgYChsZXQqICh+LXF1ZXJ5LSB+KGNhciB4cykpIChcXG4gICAgICAgICAgICBpZiB+LXF1ZXJ5LVxcbiAgICAgICAgICAgICAgfi1xdWVyeS1cXG4gICAgICAgICAgICAgIChvciB+QChjZHIgeHMpKSkpKSkpKVxcblxcbiAgKGRlZiEgYW5kIChcXG4gICAgbWFjcm8qICgmIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIHRydWVcXG4gICAgICAgIChsZXQqICgtcXVlcnktIChnZW5zeW0pKVxcbiAgICAgICAgICBgKGxldCogKH4tcXVlcnktIH4oY2FyIHhzKSkgKFxcbiAgICAgICAgICAgIGlmIH4tcXVlcnktXFxuICAgICAgICAgICAgICAoYW5kIH5AKGNkciB4cykpXFxuICAgICAgICAgICAgICBmYWxzZSkpKSkpKVxcblxcbiAgKGRlZiEgY29uZCAoXFxuICAgIG1hY3JvKiAoJiB4cykgKFxcbiAgICAgIGlmIChlbXB0eT8geHMpXFxuICAgICAgICBuaWxcXG4gICAgICAgIChpZiAoZW1wdHk/IChjZHIgeHMpKVxcbiAgICAgICAgICAodGhyb3cgXFxcImBjb25kYCByZXF1aXJlcyBhbiBldmVuIG51bWJlciBvZiBmb3Jtcy5cXFwiKVxcbiAgICAgICAgICAobGV0KiAoLXF1ZXJ5LSAoZ2Vuc3ltKSlcXG4gICAgICAgICAgICBgKGxldCogKH4tcXVlcnktIH4oY2FyIHhzKSkgKFxcbiAgICAgICAgICAgICAgaWYgfi1xdWVyeS1cXG4gICAgICAgICAgICAgICAgfihfMSB4cylcXG4gICAgICAgICAgICAgICAgKGNvbmQgfkAoY2RyIChjZHIgeHMpKSkpKSkpKSkpXFxuXFxuICAoZGVmISBsb29wIChcXG4gICAgbWFjcm8qIChmb3JtMCBmb3JtMSlcXG4gICAgICBgKGxldCogKGxvb3AgKG1lbWZpeCogKGZuKiAobG9vcCkgKGZuKiAofihfMCBmb3JtMCkpIH5mb3JtMSkpKSkgKFxcbiAgICAgICAgbG9vcCB+KF8xIGZvcm0wKSkpKSlcXG5cXG4gIChkZWYhIC0+IChcXG4gICAgbWFjcm8qICgmIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIG5pbFxcbiAgICAgICAgKGxldCogKHggKGNhciB4cykgeHMgKGNkciB4cykpIChcXG4gICAgICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgICAgICB4XFxuICAgICAgICAgICAgKGxldCogKGZvcm0gKGNhciB4cykgZm9ybXMgKGNkciB4cykpIChcXG4gICAgICAgICAgICAgIGlmIChlbXB0eT8gZm9ybXMpXFxuICAgICAgICAgICAgICAgIChpZiAobGlzdD8gZm9ybSlcXG4gICAgICAgICAgICAgICAgICAoaWYgKD0gKHN5bWJvbCBcXFwiZm4qXFxcIikgKGNhciBmb3JtKSlcXG4gICAgICAgICAgICAgICAgICAgIGAofmZvcm0gfngpXFxuICAgICAgICAgICAgICAgICAgICBgKH4oY2FyIGZvcm0pIH54IH5AKGNkciBmb3JtKSkpXFxuICAgICAgICAgICAgICAgICAgKGxpc3QgZm9ybSB4KSlcXG4gICAgICAgICAgICAgICAgYCgtPiAoLT4gfnggfmZvcm0pIH5AZm9ybXMpKSkpKSkpKVxcblxcbiAgKGRlZiEgLT4+IChcXG4gICAgbWFjcm8qICgmIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIG5pbFxcbiAgICAgICAgKGxldCogKHggKGNhciB4cykgeHMgKGNkciB4cykpIChcXG4gICAgICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgICAgICB4XFxuICAgICAgICAgICAgKGxldCogKGZvcm0gKGNhciB4cykgZm9ybXMgKGNkciB4cykpIChcXG4gICAgICAgICAgICAgIGlmIChlbXB0eT8gZm9ybXMpXFxuICAgICAgICAgICAgICAgIChpZiAobGlzdD8gZm9ybSlcXG4gICAgICAgICAgICAgICAgICAoaWYgKD0gKHN5bWJvbCBcXFwiZm4qXFxcIikgKGNhciBmb3JtKSlcXG4gICAgICAgICAgICAgICAgICAgIGAofmZvcm0gfngpXFxuICAgICAgICAgICAgICAgICAgICBgKH5AZm9ybSB+eCkpXFxuICAgICAgICAgICAgICAgICAgKGxpc3QgZm9ybSB4KSlcXG4gICAgICAgICAgICAgICAgYCgtPj4gKC0+PiB+eCB+Zm9ybSkgfkBmb3JtcykpKSkpKSkpXFxuXFxuICAoZGVmISAtPiogKG1hY3JvKiAoJiB4cykgYChmbiogKC14LSkgKC0+IC14LSB+QHhzKSkpKVxcblxcbiAgKGRlZiEgLT4+KiAobWFjcm8qICgmIHhzKSBgKGZuKiAoLXgtKSAoLT4+IC14LSB+QHhzKSkpKVxcblxcbiAgKGRlZiEgbm90IChmbiogKHgpIChpZiB4IGZhbHNlIHRydWUpKSlcXG5cXG4gIChkZWYhIGluY3IgKC0+KiAoKyAxKSkpXFxuXFxuICAoZGVmISBkZWNyICgtPiogKC0gMSkpKVxcblxcbiAgKGRlZiEgemVybz8gKC0+KiAoPSAwKSkpXFxuXFxuICAoZGVmISBpZGVudGl0eSAoZm4qICh4KSB4KSlcXG5cXG4gIChkZWYhIGNvbnN0YW50LWZuIChmbiogKHgpIChmbiogKHkpIHgpKSlcXG5cXG4gIChkZWYhIGNhbGwtb24gKGZuKiAoJiB4cykgKGZuKiAoZm4pIChhcHBseSBmbiB4cykpKSlcXG5cXG4gIChkZWYhIHN0ZXAtaW50by1saXN0IChcXG4gICAgZm4qICh4cyBmbjAgZm4xKSAoXFxuICAgICAgbGV0KiAoeCAoY2FyIHhzKSAteHMtIChjZHIgeHMpKSAoXFxuICAgICAgICBpZiAoZW1wdHk/IC14cy0pXFxuICAgICAgICAgIChmbjEgeClcXG4gICAgICAgICAgKGZuMCB4IC14cy0pKSkpKVxcblxcbiAgKGRlZiEgYXBwbHktb24gKFxcbiAgICBmbiogKCYgeHMpIChcXG4gICAgICBzdGVwLWludG8tbGlzdFxcbiAgICAgICAgeHNcXG4gICAgICAgIChmbiogKGFyZ3VtZW50cyAteHMtKSAoYXBwbHkgKGNhciAteHMtKSBhcmd1bWVudHMpKVxcbiAgICAgICAgKGZuKiAoYXJndW1lbnRzKSAoZm4qIChmKSAoYXBwbHkgZiBhcmd1bWVudHMpKSkpKSlcXG5cXG4gIChkZWYhIHJlZHVjZSAoXFxuICAgIGZuKiAoZiBzZWVkIHhzKSAoXFxuICAgICAgaWYgKGVtcHR5PyB4cylcXG4gICAgICAgIHNlZWRcXG4gICAgICAgIChyZWR1Y2UgZiAoZiBzZWVkIChjYXIgeHMpKSAoY2RyIHhzKSkpKSlcXG5cXG4gIChkZWYhIGZpbHRlciAoXFxuICAgIGZuKiAocHJlZGljYXRlIHhzKSAoXFxuICAgICAgcmV2ZXJzZSAoXFxuICAgICAgICByZWR1Y2VcXG4gICAgICAgICAgKGZuKiAobWVtbyB4KSAoaWYgKHByZWRpY2F0ZSB4KSAoY29ucyB4IG1lbW8pIG1lbW8pKVxcbiAgICAgICAgICAnKClcXG4gICAgICAgICAgeHMpKSkpXFxuXFxuICAoZGVmISBtYXAgKFxcbiAgICBmbiogKGYgeHMpIChcXG4gICAgICByZXZlcnNlIChcXG4gICAgICAgIHJlZHVjZVxcbiAgICAgICAgICAoZm4qIChtZW1vIHgpIChjb25zIChmIHgpIG1lbW8pKVxcbiAgICAgICAgICAnKClcXG4gICAgICAgICAgeHMpKSkpXFxuXFxuICAoZGVmISBldmVyeT8gKFxcbiAgICBmbiogKHByZWQgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgdHJ1ZVxcbiAgICAgICAgKGlmIChwcmVkIChjYXIgeHMpKSAoZXZlcnk/IHByZWQgKGNkciB4cykpIGZhbHNlKSkpKVxcblxcbiAgKGRlZiEgc29tZT8gKFxcbiAgICBmbiogKHByZWQgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgZmFsc2VcXG4gICAgICAgIChpZiAocHJlZCAoY2FyIHhzKSkgdHJ1ZSAoc29tZT8gcHJlZCAoY2RyIHhzKSkpKSkpXFxuXFxuICAoZGVmISBsZXRtZW1yZWMqIChcXG4gICAgbWFjcm8qIChhbGlhcyBleHByKVxcbiAgICAgIGAobGV0KiAoXFxuICAgICAgICB+KGNhciBhbGlhcylcXG4gICAgICAgIChtZW1maXgqIChmbiogKH4oY2FyIGFsaWFzKSkgfihfMSBhbGlhcykpKSlcXG4gICAgICAgICAgfmV4cHIpKSlcXG5cXG4gIChkZWYhIHNraXAgKFxcbiAgICBmbiogKG5iciB4cykgKFxcbiAgICAgIGxldHJlYyogKFxcbiAgICAgICAgLXNraXAtXFxuICAgICAgICAoZm4qICh5cykgKFxcbiAgICAgICAgICBsZXQqIChuYnIgKGNhciB5cykgeHMgKF8xIHlzKSkgKFxcbiAgICAgICAgICAgIGNvbmRcXG4gICAgICAgICAgICAgICg9IDAgbmJyKSB4c1xcbiAgICAgICAgICAgICAgKD0gMSBuYnIpIChjZHIgeHMpXFxuICAgICAgICAgICAgICBcXFwiZGVmYXVsdFxcXCIgKC1za2lwLSAobGlzdCAoZGVjciBuYnIpIChjZHIgeHMpKSkpKSkpIChcXG4gICAgICAgICAgLXNraXAtIChsaXN0IG5iciB4cykpKSkpXFxuXFxuICAoZGVmISBpbnZva2FibGU/IChmbiogKHgpIChvciAoZnVuY3Rpb24/IHgpIChtYWNybz8geCkpKSlcXG5cXG4gIChkZWYhIC4gKFxcbiAgICBtYWNybyogKHgga2V5ICYgeHMpIChcXG4gICAgICBpZiAoZW1wdHk/IHhzKVxcbiAgICAgICAgYChnZXQgfnggfmtleSlcXG4gICAgICAgIGAoKGdldCB+eCB+a2V5KSB+QHhzKSkpKVxcblxcbiAgKGRlZiEgLi4gKFxcbiAgICBmbiogKGxvIGhpKSAoXFxuICAgICAgbGV0cmVjKiAoXFxuICAgICAgICAtLi4tXFxuICAgICAgICAoZm4qICh4cykgKFxcbiAgICAgICAgICBsZXQqIChsbyAoXzAgeHMpIGhpIChfMSB4cykgLWxpc3QtIChfMiB4cykpIChcXG4gICAgICAgICAgICBpZiAoPSBsbyBoaSlcXG4gICAgICAgICAgICAgIChjb25zIGhpIC1saXN0LSlcXG4gICAgICAgICAgICAgICgtLi4tIChsaXN0IGxvIChkZWNyIGhpKSAoY29ucyBoaSAtbGlzdC0pKSkpKSkpIChcXG4gICAgICAgICAgLS4uLSAobGlzdCBsbyBoaSAnKCkpKSkpKVxcblxcbiAgKGRlZiEgZGVmcmVjISAoXFxuICAgIG1hY3JvKiAoZm4tbmFtZSBmbi1ib2R5KVxcbiAgICAgIGAoZGVmISB+Zm4tbmFtZSAobGV0cmVjKiAofmZuLW5hbWUgfmZuLWJvZHkpIH5mbi1uYW1lKSkpKVxcblxcbiAgKGRlZiEgZm9yKiAoXFxuICAgIG1hY3JvKiAobG9vcC1wYXJhbWV0ZXJzIGJvZHkpXFxuICAgICAgYChsb29wXFxuICAgICAgICAgfihfMCBsb29wLXBhcmFtZXRlcnMpXFxuICAgICAgICAgKGlmIH4oXzEgbG9vcC1wYXJhbWV0ZXJzKVxcbiAgICAgICAgICAgKGRvIH5ib2R5IChsb29wIH4oXzIgbG9vcC1wYXJhbWV0ZXJzKSkpXFxuICAgICAgICAgICBuaWwpKSkpXFxuXFxuICAoZGVmISBmb3ItZWFjaCAoXFxuICAgIGZuKiAoZiB4cykgKFxcbiAgICAgIHJlZHVjZSAoZm4qIChtZW1vIHgpIChkbyAoZiB4KSBtZW1vKSkgbmlsIHhzKSkpXFxuXFxuICAoZGVmISBuLXRpbWVzIChcXG4gICAgZm4qIChuIGYpIChcXG4gICAgICBsb29wXFxuICAgICAgICAoaSAwKVxcbiAgICAgICAgKGlmICg9IGkgbilcXG4gICAgICAgICAgbmlsXFxuICAgICAgICAgIChkbyAoZiBpKSAobG9vcCAoKyBpIDEpKSkpKSkpXFxuXFxuICAoZGVmISB0YXAgKGZuKiAoZiB4KSAoZG8gKGYgeCkgeCkpKVxcblxcbiAgKGRlZiEgd2l0aC1zaWRlLWVmZmVjdCAoZm4qICh0aHVuayB4KSAoZG8gKHRodW5rKSB4KSkpXFxuXFxuICAoZGVmISB0aHVuayAobWFjcm8qIChmb3JtKSBgKGZuKiAoKSB+Zm9ybSkpKVxcblxcbiAgKGRlZiEgY2FsbCAobWFjcm8qIChmICYgeHMpIGAofmYgfkB4cykpKVxcblxcbiAgKGRlZiEgYXBwbHkgKG1hY3JvKiAoZiB4cykgYChldmFsIChjb25zIH5mIH54cykpKSlcXG5cXG4gIChkZWYhIGV2YWwtc3RyaW5nIChmbiogKGVybFN0cmluZykgKGV2YWwgKHBhcnNlIGVybFN0cmluZykpKSlcXG4pXFxuXCIiLCJpbXBvcnQgeyBjb21tZW50U2lnbmFsIH0gZnJvbSAnLi9jb21tZW50U2lnbmFsJztcblxudmFyIGNyZWF0ZVRva2VuUmVnZXggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC9bXFxzLF0qKH5AfFxcI1xcK3xcXCNcXC18XFwjXFwhfFtcXFtcXF0oKXt9J2B+QF5dfFwiKD86XFxcXC58W15cXFxcXCJdKSpcInw7Lip8W15cXHNcXFtcXF0oKXt9J1wiYCw7XSopL2c7XG59O1xuXG52YXIgaXNDb21tZW50ID0gZnVuY3Rpb24obWF0Y2gpIHtcbiAgcmV0dXJuIG1hdGNoWzBdID09PSAnOyc7XG59O1xuXG52YXIgaXNNZWFuaW5nZnVsID0gZnVuY3Rpb24obWF0Y2gpIHtcbiAgcmV0dXJuIG1hdGNoICE9PSAnJztcbn07XG5cbnZhciB0b2tlbml6ZSA9IGZ1bmN0aW9uKHNvdXJjZUNvZGUpIHtcbiAgdmFyIG1hdGNoO1xuICB2YXIgdG9rZW5SZWdleCA9IGNyZWF0ZVRva2VuUmVnZXgoKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB3aGlsZSAoaXNNZWFuaW5nZnVsKG1hdGNoID0gdG9rZW5SZWdleC5leGVjKHNvdXJjZUNvZGUpWzFdKSkge1xuICAgIGlmIChpc0NvbW1lbnQobWF0Y2gpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2gobWF0Y2gpO1xuICB9XG4gIGlmIChyZXN1bHQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGNvbW1lbnRTaWduYWw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcblxuZXhwb3J0IHsgdG9rZW5pemUgfTtcbiIsImltcG9ydCB7IHBhcnNlIH0gZnJvbSAnLi9wYXJzZSc7XG5pbXBvcnQgeyB0b2tlbml6ZSB9IGZyb20gJy4vdG9rZW5pemUnO1xuXG5leHBvcnQgY29uc3QgdG9rZW5pemVBbmRQYXJzZSA9IGZ1bmN0aW9uKHNvdXJjZUNvZGUpIHtcbiAgcmV0dXJuIHBhcnNlKHRva2VuaXplKHNvdXJjZUNvZGUpKTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFcmxMaXN0IH0gZnJvbSAnLi9saW5rZWQtbGlzdCc7XG5pbXBvcnQgeyBlcmxBdG9tVHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZXJsVHlwZXMgfSBmcm9tICcuL3R5cGVzJztcblxudmFyIGNyZWF0ZUVybEF0b20gPSBmdW5jdGlvbihlcmxWYWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVybFZhbHVlOiBlcmxWYWx1ZSxcbiAgICB0eXBlOiBlcmxBdG9tVHlwZVxuICB9O1xufTtcblxudmFyIGNyZWF0ZUVybEJvb2xlYW4gPSBmdW5jdGlvbihqc0Jvb2xlYW4pIHtcbiAgaWYgKGpzQm9vbGVhbikge1xuICAgIHJldHVybiBlcmxUcnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcmxGYWxzZTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUVybElnbm9yZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZXJsSWdub3JlO1xufTtcblxudmFyIGNyZWF0ZUVybE5pbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZXJsTmlsO1xufTtcblxudmFyIGNyZWF0ZUVybFZhbHVlID0gZnVuY3Rpb24oanNWYWx1ZSwgZXJsVHlwZSkge1xuICByZXR1cm4ge1xuICAgIGpzVmFsdWU6IGpzVmFsdWUsXG4gICAgdHlwZTogZXJsVHlwZVxuICB9O1xufTtcblxudmFyIGNyZWF0ZUZhY3RvcnlBbmRQcmVkaWNhdGUgPSBmdW5jdGlvbihlcmxUeXBlKSB7XG4gIHZhciBmYWN0b3J5ID0gZnVuY3Rpb24oanNWYWx1ZSkge1xuICAgIHJldHVybiBjcmVhdGVFcmxWYWx1ZShqc1ZhbHVlLCBlcmxUeXBlKTtcbiAgfTtcbiAgdmFyIHByZWRpY2F0ZSA9IGZ1bmN0aW9uKGVybFZhbHVlKSB7XG4gICAgcmV0dXJuIGVybFZhbHVlLnR5cGUgPT09IGVybFR5cGU7XG4gIH07XG4gIHJldHVybiBbZmFjdG9yeSwgcHJlZGljYXRlXTtcbn07XG5cbnZhciBjcmVhdGVQcmVkaWNhdGUgPSBmdW5jdGlvbihjb25zdGFudCkge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IGNvbnN0YW50O1xuICB9O1xufTtcblxudmFyIGV4dHJhY3RKc1ZhbHVlID0gZnVuY3Rpb24oZXJsVmFsdWUpIHtcbiAgcmV0dXJuIGVybFZhbHVlLmpzVmFsdWU7XG59O1xuXG52YXIgX2VybFR5cGVzID0gZXJsVHlwZXMubWFwKGNyZWF0ZUZhY3RvcnlBbmRQcmVkaWNhdGUpO1xuXG52YXIgX2NyZWF0ZUVybEJvb2xlYW4gICAgICAgICAgICAgID0gX2VybFR5cGVzWzBdWzBdO1xudmFyIGlzRXJsQm9vbGVhbiAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1swXVsxXTtcbnZhciBjcmVhdGVFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24gPSBfZXJsVHlwZXNbMV1bMF07XG52YXIgaXNFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24gICAgID0gX2VybFR5cGVzWzFdWzFdO1xudmFyIGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24gICAgICA9IF9lcmxUeXBlc1syXVswXTtcbnZhciBpc0VybENvcmVQdXJlRnVuY3Rpb24gICAgICAgICAgPSBfZXJsVHlwZXNbMl1bMV07XG52YXIgY3JlYXRlRXJsSWRlbnRpZmllciAgICAgICAgICAgID0gX2VybFR5cGVzWzNdWzBdO1xudmFyIGlzRXJsSWRlbnRpZmllciAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1szXVsxXTtcbnZhciBjcmVhdGVFcmxJbmRleCAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbNF1bMF07XG52YXIgaXNFcmxJbmRleCAgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzRdWzFdO1xudmFyIGNyZWF0ZUVybEtleXdvcmQgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s1XVswXTtcbnZhciBpc0VybEtleXdvcmQgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbNV1bMV07XG52YXIgX2NyZWF0ZUVybExpc3QgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzZdWzBdO1xudmFyIGlzRXJsTGlzdCAgICAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s2XVsxXTtcbnZhciBjcmVhdGVFcmxNYWNybyAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbN11bMF07XG52YXIgaXNFcmxNYWNybyAgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzddWzFdO1xudmFyIGNyZWF0ZUVybE51bWJlciAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s4XVswXTtcbnZhciBpc0VybE51bWJlciAgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbOF1bMV07XG52YXIgY3JlYXRlRXJsU3BlY2lhbEZvcm0gICAgICAgICAgID0gX2VybFR5cGVzWzldWzBdO1xudmFyIGlzRXJsU3BlY2lhbEZvcm0gICAgICAgICAgICAgICA9IF9lcmxUeXBlc1s5XVsxXTtcbnZhciBjcmVhdGVFcmxTdHJpbmcgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTBdWzBdO1xudmFyIGlzRXJsU3RyaW5nICAgICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1sxMF1bMV07XG52YXIgY3JlYXRlRXJsU3ltYm9sICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzExXVswXTtcbnZhciBpc0VybFN5bWJvbCAgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTFdWzFdO1xudmFyIF9jcmVhdGVFcmxVbml0ICAgICAgICAgICAgICAgICA9IF9lcmxUeXBlc1sxMl1bMF07XG52YXIgX2lzRXJsVW5pdCAgICAgICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzEyXVsxXTtcbnZhciBjcmVhdGVFcmxVc2VyUHVyZUZ1bmN0aW9uICAgICAgPSBfZXJsVHlwZXNbMTNdWzBdO1xudmFyIGlzRXJsVXNlclB1cmVGdW5jdGlvbiAgICAgICAgICA9IF9lcmxUeXBlc1sxM11bMV07XG52YXIgX2NyZWF0ZUVybEF0b20gICAgICAgICAgICAgICAgID0gX2VybFR5cGVzWzE0XVswXTtcbnZhciBpc0VybEF0b20gICAgICAgICAgICAgICAgICAgICAgPSBfZXJsVHlwZXNbMTRdWzFdO1xuXG52YXIgZXJsSWdub3JlID0gX2NyZWF0ZUVybFVuaXQobnVsbCk7XG5cbnZhciBlcmxOaWwgPSBfY3JlYXRlRXJsVW5pdChudWxsKTtcblxudmFyIGVybEJvb2xlYW5zID0gW2ZhbHNlLCB0cnVlXS5tYXAoX2NyZWF0ZUVybEJvb2xlYW4pO1xuXG52YXIgZXJsRmFsc2UgPSBlcmxCb29sZWFuc1swXTtcbnZhciBlcmxUcnVlICA9IGVybEJvb2xlYW5zWzFdO1xuXG52YXIgcHJlZGljYXRlcyA9IFtlcmxGYWxzZSwgZXJsSWdub3JlLCBlcmxOaWwsIGVybFRydWVdLm1hcChjcmVhdGVQcmVkaWNhdGUpO1xuXG52YXIgaXNFcmxGYWxzZSAgPSBwcmVkaWNhdGVzWzBdO1xudmFyIGlzRXJsSWdub3JlID0gcHJlZGljYXRlc1sxXTtcbnZhciBpc0VybE5pbCAgICA9IHByZWRpY2F0ZXNbMl07XG52YXIgaXNFcmxUcnVlICAgPSBwcmVkaWNhdGVzWzNdO1xuXG5leHBvcnQge1xuICBjcmVhdGVFcmxBdG9tLFxuICBjcmVhdGVFcmxCb29sZWFuLFxuICBjcmVhdGVFcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb24sXG4gIGNyZWF0ZUVybENvcmVQdXJlRnVuY3Rpb24sXG4gIGNyZWF0ZUVybElkZW50aWZpZXIsXG4gIGNyZWF0ZUVybElnbm9yZSxcbiAgY3JlYXRlRXJsSW5kZXgsXG4gIGNyZWF0ZUVybEtleXdvcmQsXG4gIGNyZWF0ZUVybExpc3QsXG4gIGNyZWF0ZUVybE1hY3JvLFxuICBjcmVhdGVFcmxOaWwsXG4gIGNyZWF0ZUVybE51bWJlcixcbiAgY3JlYXRlRXJsU3BlY2lhbEZvcm0sXG4gIGNyZWF0ZUVybFN0cmluZyxcbiAgY3JlYXRlRXJsU3ltYm9sLFxuICBjcmVhdGVFcmxVc2VyUHVyZUZ1bmN0aW9uLFxuICBleHRyYWN0SnNWYWx1ZSxcbiAgaXNFcmxBdG9tLFxuICBpc0VybEJvb2xlYW4sXG4gIGlzRXJsQ29yZUVmZmVjdGZ1bEZ1bmN0aW9uLFxuICBpc0VybENvcmVQdXJlRnVuY3Rpb24sXG4gIGVybEZhbHNlLFxuICBpc0VybEZhbHNlLFxuICBpc0VybElkZW50aWZpZXIsXG4gIGVybElnbm9yZSxcbiAgaXNFcmxJZ25vcmUsXG4gIGlzRXJsSW5kZXgsXG4gIGlzRXJsS2V5d29yZCxcbiAgaXNFcmxMaXN0LFxuICBpc0VybE1hY3JvLFxuICBlcmxOaWwsXG4gIGlzRXJsTmlsLFxuICBpc0VybE51bWJlcixcbiAgaXNFcmxTcGVjaWFsRm9ybSxcbiAgaXNFcmxTdHJpbmcsXG4gIGlzRXJsU3ltYm9sLFxuICBlcmxUcnVlLFxuICBpc0VybFRydWUsXG4gIGlzRXJsVXNlclB1cmVGdW5jdGlvblxufTtcbiIsInZhciBlcmxCb29sZWFuVHlwZSAgICAgICAgICAgICAgID0gJ2VybEJvb2xlYW5UeXBlJztcbnZhciBlcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb25UeXBlID0gJ2VybENvcmVFZmZlY3RmdWxGdW5jdGlvblR5cGUnO1xudmFyIGVybENvcmVQdXJlRnVuY3Rpb25UeXBlICAgICAgPSAnZXJsQ29yZVB1cmVGdW5jdGlvblR5cGUnO1xudmFyIGVybElkZW50aWZpZXJUeXBlICAgICAgICAgICAgPSAnZXJsSWRlbnRpZmllclR5cGUnO1xudmFyIGVybEluZGV4VHlwZSAgICAgICAgICAgICAgICAgPSAnZXJsSW5kZXhUeXBlJztcbnZhciBlcmxLZXl3b3JkVHlwZSAgICAgICAgICAgICAgID0gJ2VybEtleXdvcmRUeXBlJztcbnZhciBlcmxMaXN0VHlwZSAgICAgICAgICAgICAgICAgID0gJ2VybExpc3RUeXBlJztcbnZhciBlcmxNYWNyb1R5cGUgICAgICAgICAgICAgICAgID0gJ2VybE1hY3JvVHlwZSc7XG52YXIgZXJsTnVtYmVyVHlwZSAgICAgICAgICAgICAgICA9ICdlcmxOdW1iZXJUeXBlJztcbnZhciBlcmxTcGVjaWFsRm9ybVR5cGUgICAgICAgICAgID0gJ2VybFNwZWNpYWxGb3JtVHlwZSc7XG52YXIgZXJsU3RyaW5nVHlwZSAgICAgICAgICAgICAgICA9ICdlcmxTdHJpbmdUeXBlJztcbnZhciBlcmxTeW1ib2xUeXBlICAgICAgICAgICAgICAgID0gJ2VybFN5bWJvbFR5cGUnO1xudmFyIGVybFVuaXRUeXBlICAgICAgICAgICAgICAgICAgPSAnZXJsVW5pdFR5cGUnO1xudmFyIGVybFVzZXJQdXJlRnVuY3Rpb25UeXBlICAgICAgPSAnZXJsVXNlclB1cmVGdW5jdGlvblR5cGUnO1xudmFyIGVybEF0b21UeXBlICAgICAgICAgICAgICAgICAgPSAnZXJsQXRvbVR5cGUnO1xuXG52YXIgZXJsVHlwZXMgPSBbXG4gIGVybEJvb2xlYW5UeXBlLFxuICBlcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb25UeXBlLFxuICBlcmxDb3JlUHVyZUZ1bmN0aW9uVHlwZSxcbiAgZXJsSWRlbnRpZmllclR5cGUsXG4gIGVybEluZGV4VHlwZSxcbiAgZXJsS2V5d29yZFR5cGUsXG4gIGVybExpc3RUeXBlLFxuICBlcmxNYWNyb1R5cGUsXG4gIGVybE51bWJlclR5cGUsXG4gIGVybFNwZWNpYWxGb3JtVHlwZSxcbiAgZXJsU3RyaW5nVHlwZSxcbiAgZXJsU3ltYm9sVHlwZSxcbiAgZXJsVW5pdFR5cGUsXG4gIGVybFVzZXJQdXJlRnVuY3Rpb25UeXBlLFxuICBlcmxBdG9tVHlwZVxuXTtcblxuZXhwb3J0IHtcbiAgZXJsQXRvbVR5cGUsXG4gIGVybEJvb2xlYW5UeXBlLFxuICBlcmxDb3JlRWZmZWN0ZnVsRnVuY3Rpb25UeXBlLFxuICBlcmxDb3JlUHVyZUZ1bmN0aW9uVHlwZSxcbiAgZXJsSWRlbnRpZmllclR5cGUsXG4gIGVybEluZGV4VHlwZSxcbiAgZXJsS2V5d29yZFR5cGUsXG4gIGVybExpc3RUeXBlLFxuICBlcmxNYWNyb1R5cGUsXG4gIGVybE51bWJlclR5cGUsXG4gIGVybFNwZWNpYWxGb3JtVHlwZSxcbiAgZXJsU3RyaW5nVHlwZSxcbiAgZXJsU3ltYm9sVHlwZSxcbiAgZXJsVHlwZXMsXG4gIGVybFVuaXRUeXBlLFxuICBlcmxVc2VyUHVyZUZ1bmN0aW9uVHlwZVxufTtcbiIsImZ1bmN0aW9uIGRpZmZBcnJheSh2YWx1ZTEsIHZhbHVlMCwgaW5kZXgpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlMCkpIHtcbiAgICByZXR1cm4geyB0cmVlOiBpbmRleCwgY29tbWFuZHM6IFtbJ3JlcGxhY2UnLCB2YWx1ZTFdXSwgaW5kZXg6IGluZGV4ICsgMSB9O1xuICB9XG5cbiAgdmFyIGNvdW50ID0gMDtcbiAgdmFyIGxlbmd0aDEgPSB2YWx1ZTEubGVuZ3RoO1xuICB2YXIgbGVuZ3RoMCA9IHZhbHVlMC5sZW5ndGg7XG4gIHZhciBtaW5MZW5ndGggPSBNYXRoLm1pbihsZW5ndGgxLCBsZW5ndGgwKTtcblxuICBpZiAobWluTGVuZ3RoID4gMSkge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgbWluTGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmICh2YWx1ZTFbal0gIT09IHZhbHVlMFtqXSkge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb3VudCA9PT0gbWluTGVuZ3RoKSB7XG4gICAgICByZXR1cm4geyB0cmVlOiBpbmRleCwgY29tbWFuZHM6IFtbJ3JlcGxhY2UnLCB2YWx1ZTFdXSwgaW5kZXg6IGluZGV4ICsgMSB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBpID0gMDtcbiAgdmFyIHRyZWUgPSBbXTtcbiAgdmFyIGNvbW1hbmRzID0gW107XG5cbiAgZm9yICg7IGkgPCBtaW5MZW5ndGg7IGkrKykge1xuICAgIGlmICh2YWx1ZTFbaV0gIT09IHZhbHVlMFtpXSkge1xuICAgICAgdmFyIF9wYXRjaCA9IF9kaWZmKHZhbHVlMVtpXSwgdmFsdWUwW2ldLCBpbmRleCk7XG4gICAgICBpZiAoX3BhdGNoLmNvbW1hbmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdHJlZS5wdXNoKHsgaW5kZXg6IGksIHZhbHVlOiBfcGF0Y2gudHJlZSB9KTtcbiAgICAgICAgY29tbWFuZHMgPSBjb21tYW5kcy5jb25jYXQoX3BhdGNoLmNvbW1hbmRzKTtcbiAgICAgICAgaW5kZXggPSBpbmRleCArIF9wYXRjaC5jb21tYW5kcy5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IGkgPCBsZW5ndGgxOyBpKyspIHtcbiAgICB0cmVlLnB1c2goeyBpbmRleDogaSwgdmFsdWU6IGluZGV4IH0pO1xuICAgIGNvbW1hbmRzLnB1c2goWydpbnNlcnRBdEVuZCcsIHZhbHVlMVtpXV0pO1xuICAgIGluZGV4Kys7XG4gIH1cblxuICB2YXIgcmVtb3ZhbHMgPSBbXTtcblxuICBmb3IgKDsgaSA8IGxlbmd0aDA7IGkrKykge1xuICAgIHJlbW92YWxzLnVuc2hpZnQoeyBpbmRleDogaSwgdmFsdWU6IGluZGV4IH0pO1xuICAgIGNvbW1hbmRzLnB1c2goWydyZW1vdmUnXSk7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIHRyZWUgPSB0cmVlLmNvbmNhdChyZW1vdmFscyk7XG5cbiAgcmV0dXJuIHsgdHJlZTogdHJlZSwgY29tbWFuZHM6IGNvbW1hbmRzLCBpbmRleDogaW5kZXggfTtcbn1cblxuZnVuY3Rpb24gZGlmZk9iamVjdCh2YWx1ZTEsIHZhbHVlMCwgaW5kZXgpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZTApKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyZWU6IGluZGV4LFxuICAgICAgY29tbWFuZHM6IFtbJ3JlcGxhY2UnLCB2YWx1ZTFdXSxcbiAgICAgIGluZGV4OiBpbmRleCArIDFcbiAgICB9O1xuICB9XG5cbiAgdmFyIGtleUNvdW50ID0gMDtcbiAgdmFyIGRpZmZDb3VudCA9IDA7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlMCkge1xuICAgIGlmICghdmFsdWUwLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xuICAgIGtleUNvdW50Kys7XG4gICAgaWYgKCF2YWx1ZTEuaGFzT3duUHJvcGVydHkoa2V5KSB8fCB2YWx1ZTFba2V5XSAhPT0gdmFsdWUwW2tleV0pIHtcbiAgICAgIGRpZmZDb3VudCsrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrZXlDb3VudCA+IDEgJiYga2V5Q291bnQgPT09IGRpZmZDb3VudCkge1xuICAgIHJldHVybiB7IHRyZWU6IGluZGV4LCBjb21tYW5kczogW1sncmVwbGFjZScsIHZhbHVlMV1dLCBpbmRleDogaW5kZXggKyAxIH07XG4gIH1cblxuICB2YXIgdHJlZSA9IFtdO1xuICB2YXIgY29tbWFuZHMgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUxKSB7XG4gICAgaWYgKCF2YWx1ZTEuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XG4gICAgaWYgKHZhbHVlMC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAodmFsdWUxW2tleV0gIT09IHZhbHVlMFtrZXldKSB7XG4gICAgICAgIHZhciBfcGF0Y2ggPSBfZGlmZih2YWx1ZTFba2V5XSwgdmFsdWUwW2tleV0sIGluZGV4KTtcbiAgICAgICAgaWYgKF9wYXRjaC5jb21tYW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdHJlZS5wdXNoKHsgaW5kZXg6IGtleSwgdmFsdWU6IF9wYXRjaC50cmVlIH0pO1xuICAgICAgICAgIGNvbW1hbmRzID0gY29tbWFuZHMuY29uY2F0KF9wYXRjaC5jb21tYW5kcyk7XG4gICAgICAgICAgaW5kZXggPSBpbmRleCArIF9wYXRjaC5jb21tYW5kcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJlZS5wdXNoKHsgaW5kZXg6IGtleSwgdmFsdWU6IGluZGV4IH0pO1xuICAgICAgY29tbWFuZHMucHVzaChbJ3NldEF0S2V5JywgdmFsdWUxW2tleV1dKTtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlMCkge1xuICAgIGlmICghdmFsdWUxLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHRyZWUucHVzaCh7IGluZGV4OiBrZXksIHZhbHVlOiBpbmRleCB9KTtcbiAgICAgIGNvbW1hbmRzLnB1c2goWydkZWxldGUnXSk7XG4gICAgICBpbmRleCsrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHRyZWU6IHRyZWUsIGNvbW1hbmRzOiBjb21tYW5kcywgaW5kZXg6IGluZGV4IH07XG59XG5cbmZ1bmN0aW9uIF9kaWZmKHZhbHVlMSwgdmFsdWUwLCBpbmRleCkge1xuICBpZiAodmFsdWUxID09PSB2YWx1ZTApIHtcbiAgICByZXR1cm4geyB0cmVlOiBbXSwgY29tbWFuZHM6IFtdLCBpbmRleDogaW5kZXggfTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlMSkpIHtcbiAgICByZXR1cm4gZGlmZkFycmF5KHZhbHVlMSwgdmFsdWUwLCBpbmRleCk7XG4gIH1cblxuICBpZiAoaXNPYmplY3QodmFsdWUxKSkge1xuICAgIHJldHVybiBkaWZmT2JqZWN0KHZhbHVlMSwgdmFsdWUwLCBpbmRleCk7XG4gIH1cblxuICByZXR1cm4geyB0cmVlOiBpbmRleCwgY29tbWFuZHM6IFtbJ3JlcGxhY2UnLCB2YWx1ZTFdXSwgaW5kZXg6IGluZGV4ICsgMSB9O1xufVxuXG52YXIgZGlmZiA9IGZ1bmN0aW9uKHZhbHVlMSwgdmFsdWUwKSB7XG4gIHZhciBwYXRjaCA9IF9kaWZmKHZhbHVlMSwgdmFsdWUwLCAwKTtcbiAgcmV0dXJuIHsgdmFsdWU6IHBhdGNoLnRyZWUsIGNvbW1hbmRzOiBwYXRjaC5jb21tYW5kcyB9O1xufTtcblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuZXhwb3J0IHsgZGlmZiB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICB2YXIgZWxlbWVudCA9IHsgdGFnOiB0YWcgfTtcblxuICAgIGlmIChjb25maWcgIT0gbnVsbCkgeyAvLyBpc09iamVjdFxuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gY29uZmlnKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdpZCcpIHtcbiAgICAgICAgICBlbGVtZW50LmlkID0gY29uZmlnLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PT0gJ2NsYXNzZXMnKSB7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc2VzID0gY29uZmlnLmNsYXNzZXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZSA9IGNvbmZpZy5zdHlsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT09ICdhdHRyaWJzJykge1xuICAgICAgICAgIGVsZW1lbnQuYXR0cmlicyA9IGNvbmZpZy5hdHRyaWJzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIGlzU3RyaW5nKGFyZ3NbMF0pKSB7XG4gICAgICAgIGVsZW1lbnQuY2hpbGRyZW4gPSBhcmdzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5jaGlsZHJlbiA9IFtdLmNvbmNhdC5hcHBseShbXSwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59XG5cbnZhciB0YWdzID0ge1xuICAnQSc6IHRydWUsXG4gICdCVVRUT04nOiB0cnVlLFxuICAnQ0FOVkFTJzogdHJ1ZSxcbiAgJ0NPREUnOiB0cnVlLFxuICAnRElWJzogdHJ1ZSxcbiAgJ0ZPT1RFUic6IHRydWUsXG4gICdGT1JNJzogdHJ1ZSxcbiAgJ0gxJzogdHJ1ZSxcbiAgJ0gyJzogdHJ1ZSxcbiAgJ0gzJzogdHJ1ZSxcbiAgJ0g0JzogdHJ1ZSxcbiAgJ0g1JzogdHJ1ZSxcbiAgJ0g2JzogdHJ1ZSxcbiAgJ0hFQURFUic6IHRydWUsXG4gICdJTUcnOiB0cnVlLFxuICAnTEFCRUwnOiB0cnVlLFxuICAnTEknOiB0cnVlLFxuICAnTElOSyc6IHRydWUsXG4gICdOQVYnOiB0cnVlLFxuICAnTk9TQ1JJUFQnOiB0cnVlLFxuICAnT1BUR1JPVVAnOiB0cnVlLFxuICAnT1BUSU9OJzogdHJ1ZSxcbiAgJ09VVFBVVCc6IHRydWUsXG4gICdQJzogdHJ1ZSxcbiAgJ1BBUkFNJzogdHJ1ZSxcbiAgJ1BSRSc6IHRydWUsXG4gICdTQ1JJUFQnOiB0cnVlLFxuICAnU0VDVElPTic6IHRydWUsXG4gICdTRUxFQ1QnOiB0cnVlLFxuICAnU09VUkNFJzogdHJ1ZSxcbiAgJ1NQQU4nOiB0cnVlLFxuICAnU1RZTEUnOiB0cnVlLFxuICAnVEVYVEFSRUEnOiB0cnVlXG59O1xuXG52YXIgZWxlbWVudEZhY3RvcmllcyA9IHt9O1xuXG5mb3IgKHZhciB0YWdOYW1lIGluIHRhZ3MpIHtcbiAgZWxlbWVudEZhY3Rvcmllc1t0YWdOYW1lXSA9IGNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG59XG5cbmV4cG9ydCBjb25zdCBBID0gZWxlbWVudEZhY3Rvcmllcy5BO1xuZXhwb3J0IGNvbnN0IEJVVFRPTiA9IGVsZW1lbnRGYWN0b3JpZXMuQlVUVE9OO1xuZXhwb3J0IGNvbnN0IENBTlZBUyA9IGVsZW1lbnRGYWN0b3JpZXMuQ0FOVkFTO1xuZXhwb3J0IGNvbnN0IENPREUgPSBlbGVtZW50RmFjdG9yaWVzLkNPREU7XG5leHBvcnQgY29uc3QgRElWID0gZWxlbWVudEZhY3Rvcmllcy5ESVY7XG5leHBvcnQgY29uc3QgRk9PVEVSID0gZWxlbWVudEZhY3Rvcmllcy5GT09URVI7XG5leHBvcnQgY29uc3QgRk9STSA9IGVsZW1lbnRGYWN0b3JpZXMuRk9STTtcbmV4cG9ydCBjb25zdCBIMSA9IGVsZW1lbnRGYWN0b3JpZXMuSDE7XG5leHBvcnQgY29uc3QgSDIgPSBlbGVtZW50RmFjdG9yaWVzLkgyO1xuZXhwb3J0IGNvbnN0IEgzID0gZWxlbWVudEZhY3Rvcmllcy5IMztcbmV4cG9ydCBjb25zdCBINCA9IGVsZW1lbnRGYWN0b3JpZXMuSDQ7XG5leHBvcnQgY29uc3QgSDUgPSBlbGVtZW50RmFjdG9yaWVzLkg1O1xuZXhwb3J0IGNvbnN0IEg2ID0gZWxlbWVudEZhY3Rvcmllcy5INjtcbmV4cG9ydCBjb25zdCBIRUFERVIgPSBlbGVtZW50RmFjdG9yaWVzLkhFQURFUjtcbmV4cG9ydCBjb25zdCBJTUcgPSBlbGVtZW50RmFjdG9yaWVzLklNRztcbmV4cG9ydCBjb25zdCBMQUJFTCA9IGVsZW1lbnRGYWN0b3JpZXMuTEFCRUw7XG5leHBvcnQgY29uc3QgTEkgPSBlbGVtZW50RmFjdG9yaWVzLkxJO1xuZXhwb3J0IGNvbnN0IExJTksgPSBlbGVtZW50RmFjdG9yaWVzLkxJTks7XG5leHBvcnQgY29uc3QgTkFWID0gZWxlbWVudEZhY3Rvcmllcy5OQVY7XG5leHBvcnQgY29uc3QgTk9TQ1JJUFQgPSBlbGVtZW50RmFjdG9yaWVzLk5PU0NSSVBUO1xuZXhwb3J0IGNvbnN0IE9QVEdST1VQID0gZWxlbWVudEZhY3Rvcmllcy5PUFRHUk9VUDtcbmV4cG9ydCBjb25zdCBPUFRJT04gPSBlbGVtZW50RmFjdG9yaWVzLk9QVElPTjtcbmV4cG9ydCBjb25zdCBPVVRQVVQgPSBlbGVtZW50RmFjdG9yaWVzLk9VVFBVVDtcbmV4cG9ydCBjb25zdCBQID0gZWxlbWVudEZhY3Rvcmllcy5QO1xuZXhwb3J0IGNvbnN0IFBBUkFNID0gZWxlbWVudEZhY3Rvcmllcy5QQVJBTTtcbmV4cG9ydCBjb25zdCBQUkUgPSBlbGVtZW50RmFjdG9yaWVzLlBSRTtcbmV4cG9ydCBjb25zdCBTQ1JJUFQgPSBlbGVtZW50RmFjdG9yaWVzLlNDUklQVDtcbmV4cG9ydCBjb25zdCBTRUNUSU9OID0gZWxlbWVudEZhY3Rvcmllcy5TRUNUSU9OO1xuZXhwb3J0IGNvbnN0IFNFTEVDVCA9IGVsZW1lbnRGYWN0b3JpZXMuU0VMRUNUO1xuZXhwb3J0IGNvbnN0IFNPVVJDRSA9IGVsZW1lbnRGYWN0b3JpZXMuU09VUkNFO1xuZXhwb3J0IGNvbnN0IFNQQU4gPSBlbGVtZW50RmFjdG9yaWVzLlNQQU47XG5leHBvcnQgY29uc3QgU1RZTEUgPSBlbGVtZW50RmFjdG9yaWVzLlNUWUxFO1xuZXhwb3J0IGNvbnN0IFRFWFRBUkVBID0gZWxlbWVudEZhY3Rvcmllcy5URVhUQVJFQTtcbiIsImZ1bmN0aW9uIGF0dGFjaEVsZW1lbnQocGFyZW50LCBlbGVtZW50KSB7XG4gIGlmIChpc1N0cmluZyhlbGVtZW50KSkge1xuICAgIHBhcmVudC5pbm5lclRleHQgPSBlbGVtZW50OyAvLyA/XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VFbGVtZW50KHBhcmVudCwgbmV3RWxlbWVudCwgb2xkRWxlbWVudCkge1xuICBpZiAoaXNTdHJpbmcobmV3RWxlbWVudCkpIHtcbiAgICBwYXJlbnQuaW5uZXJUZXh0ID0gbmV3RWxlbWVudDsgLy8gP1xuICB9IGVsc2Uge1xuICAgIHBhcmVudC5yZXBsYWNlQ2hpbGQobmV3RWxlbWVudCwgb2xkRWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kQXR0YWNoRWxlbWVudChwYXJlbnQsIGNvbmZpZykge1xuICBhdHRhY2hFbGVtZW50KHBhcmVudCwgY3JlYXRlRWxlbWVudChjb25maWcpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kU3Vic3RpdHV0ZUVsZW1lbnQocGFyZW50LCBjb25maWcsIG9sZEVsZW1lbnRJbmRleCkge1xuICByZXBsYWNlRWxlbWVudChcbiAgICBwYXJlbnQsXG4gICAgY3JlYXRlRWxlbWVudChjb25maWcpLFxuICAgIGZpbmRDaGlsZChwYXJlbnQsIHsgbW9kZTogJ2luZGV4Jywga2V5OiBvbGRFbGVtZW50SW5kZXggfSkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRBdHRhY2hFbGVtZW50cyhub2RlLCBlbGVtZW50cykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudChub2RlLCBlbGVtZW50c1tpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChjb25maWcpIHtcbiAgaWYgKGlzU3RyaW5nKGNvbmZpZykpIHtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG4gIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjb25maWcudGFnKTtcbiAgaWYgKGNvbmZpZy5pZCAhPSBudWxsKSB7XG4gICAgbm9kZS5pZCA9IGNvbmZpZy5pZDtcbiAgfVxuICBpZiAoY29uZmlnLmNsYXNzZXMgIT0gbnVsbCkge1xuICAgIGZvciAodmFyIGtsYXNzIGluIGNvbmZpZy5jbGFzc2VzKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5hZGQoa2xhc3MpO1xuICAgIH1cbiAgfVxuICBpZiAoY29uZmlnLmF0dHJpYnMgIT0gbnVsbCkge1xuICAgIGZvciAodmFyIGF0dHJpYktleSBpbiBjb25maWcuYXR0cmlicykge1xuICAgICAgaWYgKGF0dHJpYktleSAhPT0gJ3N0eWxlJykge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJLZXksIGNvbmZpZy5hdHRyaWJzW2F0dHJpYktleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoY29uZmlnLnN0eWxlICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBzdHlsZUtleSBpbiBjb25maWcuc3R5bGUpIHtcbiAgICAgIG5vZGUuc3R5bGVbc3R5bGVLZXldID0gY29uZmlnLnN0eWxlW3N0eWxlS2V5XTtcbiAgICB9XG4gIH1cbiAgaWYgKGNvbmZpZy5jaGlsZHJlbiAhPSBudWxsKSB7XG4gICAgaWYgKGlzU3RyaW5nKGNvbmZpZy5jaGlsZHJlbikpIHtcbiAgICAgIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQobm9kZSwgY29uZmlnLmNoaWxkcmVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKG5ld0NvbmZpZywgaW5kZXgpIHsgXG4gICAgICAgIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQobm9kZSwgbmV3Q29uZmlnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gZmluZENoaWxkKHBhcmVudCwgY29uZmlnKSB7XG4gIHN3aXRjaCAoY29uZmlnLm1vZGUpIHtcbiAgICBjYXNlICdpZCc6XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLmtleSk7XG4gICAgY2FzZSAnY2xhc3MnOlxuICAgICAgcmV0dXJuIHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNvbmZpZy5rZXkuY2xhc3MpW2NvbmZpZy5rZXkuaW5kZXhdO1xuICAgIGNhc2UgJ3RhZyc6XG4gICAgICByZXR1cm4gcGFyZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKGNvbmZpZy5rZXkudGFnKVtjb25maWcua2V5LmluZGV4XTtcbiAgICBjYXNlICdxdWVyeSc6XG4gICAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLmtleS5xdWVyeSlbY29uZmlnLmtleS5pbmRleF07XG4gICAgY2FzZSAnaW5kZXgnOlxuICAgICAgcmV0dXJuIHBhcmVudC5jaGlsZE5vZGVzW2NvbmZpZy5rZXldO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXFxcImZpbmRDaGlsZFxcXCIgbW9kZScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRDaGlsZHJlbihwYXJlbnQsIGNvbmZpZykge1xuICB2YXIgaHRtbENvbGxlY3Rpb247XG4gIHN3aXRjaCAoY29uZmlnLm1vZGUpIHtcbiAgICBjYXNlICdjbGFzcyc6XG4gICAgICBodG1sQ29sbGVjdGlvbiA9IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNvbmZpZy5rZXkuY2xhc3MpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndGFnJzpcbiAgICAgIGh0bWxDb2xsZWN0aW9uID0gcGFyZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKGNvbmZpZy5rZXkudGFnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3F1ZXJ5JzpcbiAgICAgIGh0bWxDb2xsZWN0aW9uID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLmtleS5xdWVyeSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFxcXCJmaW5kQ2hpbGRcXFwiIG1vZGUnKTtcbiAgfVxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoaHRtbENvbGxlY3Rpb24pO1xufVxuXG5mdW5jdGlvbiBpc0NvbW1hbmRJbmRleCh2YWx1ZSkge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE51bWJlcl0nO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufVxuXG5mdW5jdGlvbiBtb2RpZnlFbGVtZW50KG5vZGUsIHBhdGNoKSB7XG4gIF9tb2RpZnlFbGVtZW50KG5vZGUsIHBhdGNoLnZhbHVlLCBwYXRjaC5jb21tYW5kcyk7XG59XG5cbmZ1bmN0aW9uIF9tb2RpZnlFbGVtZW50KG5vZGUsIHRyZWUsIGNvbW1hbmRzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSB0cmVlW2ldLmluZGV4O1xuICAgIHZhciBjb250aW51YXRpb24gPSB0cmVlW2ldLnZhbHVlO1xuXG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgJ2lkJzpcbiAgICAgICAgdmFyIGNvbW1hbmQgPSBjb21tYW5kc1tjb250aW51YXRpb25dO1xuICAgICAgICBzd2l0Y2ggKGNvbW1hbmRbMF0pIHtcbiAgICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgICBjYXNlICdzZXRBdEtleSc6XG4gICAgICAgICAgICBub2RlLmlkID0gY29tbWFuZFsxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd0YWcnOlxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICBmb3IgKHZhciBzdHlsZUluZGV4ID0gMDsgc3R5bGVJbmRleCA8IGNvbnRpbnVhdGlvbi5sZW5ndGg7IHN0eWxlSW5kZXgrKykge1xuICAgICAgICAgIHZhciBzdHlsZSA9IGNvbnRpbnVhdGlvbltzdHlsZUluZGV4XS5pbmRleDtcbiAgICAgICAgICB2YXIgY29tbWFuZCA9IGNvbW1hbmRzW2NvbnRpbnVhdGlvbltzdHlsZUluZGV4XS52YWx1ZV07XG4gICAgICAgICAgc3dpdGNoIChjb21tYW5kWzBdKSB7XG4gICAgICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgICBub2RlLnN0eWxlLnJlbW92ZVByb3BlcnR5KHN0eWxlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgICAgIGNhc2UgJ3NldEF0S2V5JzpcbiAgICAgICAgICAgICAgbm9kZS5zdHlsZVtzdHlsZV0gPSBjb21tYW5kWzFdO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2F0dHJpYnMnOlxuICAgICAgICBmb3IgKHZhciBhdHRyaWJJbmRleCA9IDA7IGF0dHJpYkluZGV4IDwgY29udGludWF0aW9uLmxlbmd0aDsgYXR0cmliSW5kZXgrKykge1xuICAgICAgICAgIHZhciBhdHRyaWIgPSBjb250aW51YXRpb25bYXR0cmliSW5kZXhdLmluZGV4O1xuICAgICAgICAgIHZhciBjb21tYW5kID0gY29tbWFuZHNbY29udGludWF0aW9uW2F0dHJpYkluZGV4XS52YWx1ZV07XG4gICAgICAgICAgc3dpdGNoIChjb21tYW5kWzBdKSB7XG4gICAgICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgICBub2RlLmF0dHJpYnV0ZXMucmVtb3ZlTmFtZWRJdGVtKGF0dHJpYik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVwbGFjZSc6XG4gICAgICAgICAgICBjYXNlICdzZXRBdEtleSc6XG4gICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYiwgY29tbWFuZFsxXSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnY2xhc3Nlcyc6XG4gICAgICAgIGlmIChpc0NvbW1hbmRJbmRleChjb250aW51YXRpb24pKSB7XG4gICAgICAgICAgdmFyIGNvbW1hbmQgPSBjb21tYW5kc1swXTtcbiAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmRbMF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICAgIGZvciAodmFyIF9jbGFzcyBpbiBjb21tYW5kWzFdKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKF9jbGFzcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzZXRBdEtleSc6XG4gICAgICAgICAgICAgIGZvciAodmFyIF9jbGFzcyBpbiBjb21tYW5kWzFdKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKF9jbGFzcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAodmFyIGNsYXNzSW5kZXggPSAwOyBjbGFzc0luZGV4IDwgY29udGludWF0aW9uLmxlbmd0aDsgY2xhc3NJbmRleCsrKSB7XG4gICAgICAgICAgICB2YXIgX2NsYXNzID0gY29udGludWF0aW9uW2NsYXNzSW5kZXhdLmluZGV4O1xuICAgICAgICAgICAgdmFyIGNvbW1hbmQgPSBjb21tYW5kc1tjb250aW51YXRpb25bY2xhc3NJbmRleF0udmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChjb21tYW5kWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKF9jbGFzcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ3NldEF0S2V5JzpcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoX2NsYXNzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2NoaWxkcmVuJzpcbiAgICAgICAgaWYgKGlzQ29tbWFuZEluZGV4KGNvbnRpbnVhdGlvbikpIHtcbiAgICAgICAgICB2YXIgY29tbWFuZCA9IGNvbW1hbmRzW2NvbnRpbnVhdGlvbl1cbiAgICAgICAgICBzd2l0Y2ggKGNvbW1hbmRbMF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ3JlbW92ZSc6XG4gICAgICAgICAgICAgIHJlbW92ZUNoaWxkcmVuKG5vZGUpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlcGxhY2UnOiAgICAgLy8gP1xuICAgICAgICAgICAgICBpZiAoaXNTdHJpbmcoY29tbWFuZFsxXSkpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lclRleHQgPSBjb21tYW5kWzFdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBub2RlLmlubmVyVGV4dCA9IGNvbW1hbmRbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNoaWxkcmVuKG5vZGUpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnRzKG5vZGUsIGNvbW1hbmRbMV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaW5zZXJ0QXRFbmQnOlxuICAgICAgICAgICAgICBjcmVhdGVBbmRBdHRhY2hFbGVtZW50KG5vZGUsIGNvbW1hbmRbMV0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yICh2YXIgY2hpbGRJbmRleCA9IDA7IGNoaWxkSW5kZXggPCBjb250aW51YXRpb24ubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IGNvbnRpbnVhdGlvbltjaGlsZEluZGV4XS5pbmRleDtcbiAgICAgICAgICAgIHZhciBjaGlsZENvbnRpbnVhdGlvbiA9IGNvbnRpbnVhdGlvbltjaGlsZEluZGV4XS52YWx1ZTtcbiAgICAgICAgICAgIGlmIChpc0NvbW1hbmRJbmRleChjaGlsZENvbnRpbnVhdGlvbikpIHtcbiAgICAgICAgICAgICAgdmFyIGNvbW1hbmQgPSBjb21tYW5kc1tjaGlsZENvbnRpbnVhdGlvbl1cbiAgICAgICAgICAgICAgc3dpdGNoIChjb21tYW5kWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncmVtb3ZlJzpcbiAgICAgICAgICAgICAgICAgIHJlbW92ZUNoaWxkKG5vZGUsIGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAgICAgICAgICAgY3JlYXRlQW5kU3Vic3RpdHV0ZUVsZW1lbnQobm9kZSwgY29tbWFuZFsxXSwgY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaW5zZXJ0QXRFbmQnOlxuICAgICAgICAgICAgICAgICAgY3JlYXRlQW5kQXR0YWNoRWxlbWVudChub2RlLCBjb21tYW5kWzFdKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfbW9kaWZ5RWxlbWVudChub2RlLmNoaWxkTm9kZXNbY2hpbGRdLCBjaGlsZENvbnRpbnVhdGlvbiwgY29tbWFuZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hpbGQobm9kZSwgY2hpbGRJbmRleCkge1xuICByZW1vdmVOb2RlKGZpbmRDaGlsZChub2RlLCB7IG1vZGU6ICdpbmRleCcsIGtleTogY2hpbGRJbmRleCB9KSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkcmVuKG5vZGUpIHtcbiAgdmFyIGNoaWxkQ291bnQgPSBub2RlLmNoaWxkTm9kZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gY2hpbGRDb3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmNoaWxkTm9kZXNbaV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUFuZEF0dGFjaEVsZW1lbnQsXG4gIG1vZGlmeUVsZW1lbnRcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9