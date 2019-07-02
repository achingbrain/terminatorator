(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["terminatorator"] = factory();
	else
		root["terminatorator"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/terminal.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/asyncIterator.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncIterator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _asyncIterator(iterable) {
  var method;

  if (typeof Symbol !== "undefined") {
    if (Symbol.asyncIterator) {
      method = iterable[Symbol.asyncIterator];
      if (method != null) return method.call(iterable);
    }

    if (Symbol.iterator) {
      method = iterable[Symbol.iterator];
      if (method != null) return method.call(iterable);
    }
  }

  throw new TypeError("Object is not async iterable");
}

module.exports = _asyncIterator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const preserveCamelCase = string => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
		}
	}

	return string;
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = Object.assign({
		pascalCase: false
	}, options);

	const postProcess = x => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	if (input.length === 1) {
		return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
	}

	const hasUpperCase = input !== input.toLowerCase();

	if (hasUpperCase) {
		input = preserveCamelCase(input);
	}

	input = input
		.replace(/^[_.\- ]+/, '')
		.toLowerCase()
		.replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase())
		.replace(/\d+(\w|$)/g, m => m.toUpperCase());

	return postProcess(input);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports.default = camelCase;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./src/terminal.less":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/less-loader/dist/cjs.js??ref--5-2!./src/terminal.less ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Inconsolata&display=swap);", ""]);
// Module
exports.push([module.i, "html,\nbody {\n  margin: 0;\n  height: 100%;\n}\n.terminal ::selection {\n  background: #0080ff;\n  text-shadow: none !important;\n}\n.terminal {\n  min-height: 100%;\n  position: relative;\n  width: 100%;\n}\n.terminal .container {\n  padding: 1em 1.5em 1em 1em;\n  position: relative;\n  text-shadow: 0 0 5px #C8C8C8;\n}\n.terminal .container output {\n  clear: both;\n  width: 100%;\n}\n.terminal .container output pre {\n  margin: 0;\n}\n.terminal .cmdline {\n  background-color: transparent;\n  border: none;\n  color: inherit;\n  font: inherit;\n  margin: 0;\n  outline: none;\n  width: 100%;\n}\n.terminal .hidden {\n  display: none;\n}\n.terminal output table.input-line td:last-child {\n  padding-left: 1px;\n}\n.terminal .prompt {\n  line-height: 20px;\n  margin-right: 7px;\n  white-space: nowrap;\n}\n.terminal table.input-line {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n.terminal table.input-line td {\n  margin: 0;\n  padding: 0;\n}\n/* Interlaced theme */\n.terminal-interlaced {\n  color: white;\n  font-family: Inconsolata, monospace;\n}\n.terminal-interlaced a {\n  color: #fff;\n}\n.terminal-interlaced a.external {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA9QTFRFzs7OqKio0NDQ////////DlgqrAAAAAV0Uk5T/////wD7tg5TAAAAN0lEQVR42izLyQ0AMAgDQYPpv+b4yD7QEBGcYoI0yN454Sqy9KnfTUufQpB7c/9AM1RlE58AAwBEcAE4zo3mOAAAAABJRU5ErkJggg==\") no-repeat scroll right center transparent;\n  padding-right: 13px;\n  outline: none;\n}\n.terminal-interlaced .background {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAMAAACuX0YVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFAAAA////pdmf3QAAAAJ0Uk5T/wDltzBKAAAADklEQVR42mJgYGAECDAAAAUAAoeC334AAAAASUVORK5CYII=\") top left repeat, rgba(0, 0, 0, 0.9);\n  height: 100%;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.terminal-interlaced .background .interlace {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAMAAACuX0YVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFAAAA////pdmf3QAAAAJ0Uk5T/wDltzBKAAAADklEQVR42mJgYGAECDAAAAUAAoeC334AAAAASUVORK5CYII=\") top left repeat, transparent;\n  height: 100%;\n  left: 0;\n  opacity: 0.15;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 10;\n}\n.terminal-interlaced .container output pre {\n  color: white;\n  font-family: Inconsolata, monospace;\n}\n.terminal-interlaced .prompt {\n  color: #fc0;\n}\n/* Modern theme */\n.terminal-modern {\n  color: white;\n  font-family: Inconsolata, monospace;\n}\n.terminal-modern a {\n  color: #fff;\n}\n.terminal-modern a.external {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA9QTFRFzs7OqKio0NDQ////////DlgqrAAAAAV0Uk5T/////wD7tg5TAAAAN0lEQVR42izLyQ0AMAgDQYPpv+b4yD7QEBGcYoI0yN454Sqy9KnfTUufQpB7c/9AM1RlE58AAwBEcAE4zo3mOAAAAABJRU5ErkJggg==\") no-repeat scroll right center transparent;\n  padding-right: 13px;\n  outline: none;\n}\n.terminal-modern .background {\n  background: #000;\n  height: 100%;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.terminal-modern .background .interlace {\n  display: none;\n}\n.terminal-modern .container {\n  text-shadow: none;\n}\n.terminal-modern .container output pre {\n  color: white;\n  font-family: Inconsolata, monospace;\n}\n.terminal-modern .prompt {\n  color: #fc0;\n}\n/* White theme */\n.terminal-white {\n  color: black;\n  font-family: Inconsolata, monospace;\n}\n.terminal-white a {\n  color: #000;\n}\n.terminal-white .background {\n  background: #fff;\n  height: 100%;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.terminal-white .background .interlace {\n  display: none;\n}\n.terminal-white .container {\n  text-shadow: none;\n}\n.terminal-white .container output pre {\n  color: black;\n  font-family: Inconsolata, monospace;\n}\n.terminal-white .prompt {\n  color: #02f;\n}\n", "",{"version":3,"sources":["/Users/alex/Documents/Workspaces/achingbrain/terminatorator/src/terminal.less","terminal.less"],"names":[],"mappings":"AAGA;;EACE,SAAA;EACA,YAAA;ACAF;ADGA;EACE,mBAAA;EACA,4BAAA;ACDF;ADIA;EACE,gBAAA;EACA,kBAAA;EACA,WAAA;ACFF;ADKA;EACE,0BAAA;EACA,kBAAA;EACA,4BAAA;ACHF;ADMA;EACE,WAAA;EACA,WAAA;ACJF;ADOA;EACE,SAAA;ACLF;ADQA;EACE,6BAAA;EACA,YAAA;EACA,cAAA;EACA,aAAA;EACA,SAAA;EACA,aAAA;EACA,WAAA;ACNF;ADSA;EACE,aAAA;ACPF;ADUA;EACE,iBAAA;ACRF;ADWA;EACE,iBAAA;EACA,iBAAA;EACA,mBAAA;ACTF;ADYA;EACE,yBAAA;EACA,iBAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;ACVF;ADaA;EACE,SAAA;EACA,UAAA;ACXF;AACA,qBAAqB;ADerB;EACE,YAAA;EACA,mCAAA;ACbF;ADgBA;EACE,WAAA;ACdF;ADiBA;EACE,uVAAA;EACA,mBAAA;EACA,aAAA;ACfF;ADkBA;EACE,yQAAA;EACA,YAAA;EACA,OAAA;EACA,oBAAA;EACA,kBAAA;EACA,MAAA;EACA,WAAA;AChBF;ADmBA;EACE,kQAAA;EACA,YAAA;EACA,OAAA;EACA,aAAA;EACA,oBAAA;EACA,kBAAA;EACA,MAAA;EACA,WAAA;EACA,WAAA;ACjBF;ADoBA;EACE,YAAA;EACA,mCAAA;AClBF;ADqBA;EACE,WAAA;ACnBF;AACA,iBAAiB;ADuBjB;EACE,YAAA;EACA,mCAAA;ACrBF;ADwBA;EACE,WAAA;ACtBF;ADyBA;EACE,uVAAA;EACA,mBAAA;EACA,aAAA;ACvBF;AD0BA;EACE,gBAAA;EACA,YAAA;EACA,OAAA;EACA,oBAAA;EACA,kBAAA;EACA,MAAA;EACA,WAAA;ACxBF;AD2BA;EACE,aAAA;ACzBF;AD4BA;EACE,iBAAA;AC1BF;AD6BA;EACE,YAAA;EACA,mCAAA;AC3BF;AD8BA;EACE,WAAA;AC5BF;AACA,gBAAgB;ADgChB;EACE,YAAA;EACA,mCAAA;AC9BF;ADiCA;EACE,WAAA;AC/BF;ADkCA;EACE,gBAAA;EACA,YAAA;EACA,OAAA;EACA,oBAAA;EACA,kBAAA;EACA,MAAA;EACA,WAAA;AChCF;ADmCA;EACE,aAAA;ACjCF;ADoCA;EACE,iBAAA;AClCF;ADqCA;EACE,YAAA;EACA,mCAAA;ACnCF;ADsCA;EACE,WAAA;ACpCF","file":"terminal.less","sourcesContent":["\n@import (css) url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');\n\nhtml, body {\n  margin: 0;\n  height: 100%;\n}\n\n.terminal ::selection {\n  background: #0080ff;\n  text-shadow: none !important;\n}\n\n.terminal {\n  min-height: 100%;\n  position: relative;\n  width: 100%;\n}\n\n.terminal .container {\n  padding: 1em 1.5em 1em 1em;\n  position: relative;\n  text-shadow: 0 0 5px #C8C8C8;\n}\n\n.terminal .container output {\n  clear: both;\n  width: 100%;\n}\n\n.terminal .container output pre {\n  margin: 0;\n}\n\n.terminal .cmdline {\n  background-color: transparent;\n  border: none;\n  color: inherit;\n  font: inherit;\n  margin: 0;\n  outline: none;\n  width: 100%;\n}\n\n.terminal .hidden {\n  display: none;\n}\n\n.terminal output table.input-line td:last-child {\n  padding-left: 1px;\n}\n\n.terminal .prompt {\n  line-height: 20px;\n  margin-right: 7px;\n  white-space: nowrap;\n}\n\n.terminal table.input-line {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\n.terminal table.input-line td {\n  margin: 0;\n  padding: 0;\n}\n\n/* Interlaced theme */\n\n.terminal-interlaced {\n  color: white;\n  font-family: Inconsolata, monospace;\n}\n\n.terminal-interlaced a {\n  color: #fff;\n}\n\n.terminal-interlaced a.external {\n  background: data-uri(\"external.png\") no-repeat scroll right center transparent;\n  padding-right: 13px;\n  outline: none;\n}\n\n.terminal-interlaced .background {\n  background: data-uri(\"interlace.png\") top left repeat, rgba(0, 0, 0, 0.9);\n  height: 100%;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.terminal-interlaced .background .interlace {\n  background: data-uri(\"interlace.png\") top left repeat, transparent;\n  height: 100%;\n  left: 0;\n  opacity: 0.15;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 10;\n}\n\n.terminal-interlaced .container output pre {\n  color: white;\n  font-family: Inconsolata, monospace;\n}\n\n.terminal-interlaced .prompt {\n  color: #fc0;\n}\n\n/* Modern theme */\n\n.terminal-modern {\n  color: white;\n  font-family: Inconsolata, monospace;\n}\n\n.terminal-modern a {\n  color: #fff;\n}\n\n.terminal-modern a.external {\n  background: data-uri(\"external.png\") no-repeat scroll right center transparent;\n  padding-right: 13px;\n  outline: none;\n}\n\n.terminal-modern .background {\n  background: #000;\n  height: 100%;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.terminal-modern .background .interlace {\n  display: none;\n}\n\n.terminal-modern .container {\n  text-shadow: none;\n}\n\n.terminal-modern .container output pre {\n  color: white;\n  font-family: Inconsolata, monospace;\n}\n\n.terminal-modern .prompt {\n  color: #fc0;\n}\n\n/* White theme */\n\n.terminal-white {\n  color: black;\n  font-family: Inconsolata, monospace;\n}\n\n.terminal-white a {\n  color: #000;\n}\n\n.terminal-white .background {\n  background: #fff;\n  height: 100%;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.terminal-white .background .interlace {\n  display: none;\n}\n\n.terminal-white .container {\n  text-shadow: none;\n}\n\n.terminal-white .container output pre {\n  color: black;\n  font-family: Inconsolata, monospace;\n}\n\n.terminal-white .prompt {\n  color: #02f;\n}\n","@import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');\nhtml,\nbody {\n  margin: 0;\n  height: 100%;\n}\n.terminal ::selection {\n  background: #0080ff;\n  text-shadow: none !important;\n}\n.terminal {\n  min-height: 100%;\n  position: relative;\n  width: 100%;\n}\n.terminal .container {\n  padding: 1em 1.5em 1em 1em;\n  position: relative;\n  text-shadow: 0 0 5px #C8C8C8;\n}\n.terminal .container output {\n  clear: both;\n  width: 100%;\n}\n.terminal .container output pre {\n  margin: 0;\n}\n.terminal .cmdline {\n  background-color: transparent;\n  border: none;\n  color: inherit;\n  font: inherit;\n  margin: 0;\n  outline: none;\n  width: 100%;\n}\n.terminal .hidden {\n  display: none;\n}\n.terminal output table.input-line td:last-child {\n  padding-left: 1px;\n}\n.terminal .prompt {\n  line-height: 20px;\n  margin-right: 7px;\n  white-space: nowrap;\n}\n.terminal table.input-line {\n  border-collapse: collapse;\n  border-spacing: 0;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n.terminal table.input-line td {\n  margin: 0;\n  padding: 0;\n}\n/* Interlaced theme */\n.terminal-interlaced {\n  color: white;\n  font-family: Inconsolata, monospace;\n}\n.terminal-interlaced a {\n  color: #fff;\n}\n.terminal-interlaced a.external {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA9QTFRFzs7OqKio0NDQ////////DlgqrAAAAAV0Uk5T/////wD7tg5TAAAAN0lEQVR42izLyQ0AMAgDQYPpv+b4yD7QEBGcYoI0yN454Sqy9KnfTUufQpB7c/9AM1RlE58AAwBEcAE4zo3mOAAAAABJRU5ErkJggg==\") no-repeat scroll right center transparent;\n  padding-right: 13px;\n  outline: none;\n}\n.terminal-interlaced .background {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAMAAACuX0YVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFAAAA////pdmf3QAAAAJ0Uk5T/wDltzBKAAAADklEQVR42mJgYGAECDAAAAUAAoeC334AAAAASUVORK5CYII=\") top left repeat, rgba(0, 0, 0, 0.9);\n  height: 100%;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.terminal-interlaced .background .interlace {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAMAAACuX0YVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRFAAAA////pdmf3QAAAAJ0Uk5T/wDltzBKAAAADklEQVR42mJgYGAECDAAAAUAAoeC334AAAAASUVORK5CYII=\") top left repeat, transparent;\n  height: 100%;\n  left: 0;\n  opacity: 0.15;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 10;\n}\n.terminal-interlaced .container output pre {\n  color: white;\n  font-family: Inconsolata, monospace;\n}\n.terminal-interlaced .prompt {\n  color: #fc0;\n}\n/* Modern theme */\n.terminal-modern {\n  color: white;\n  font-family: Inconsolata, monospace;\n}\n.terminal-modern a {\n  color: #fff;\n}\n.terminal-modern a.external {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA9QTFRFzs7OqKio0NDQ////////DlgqrAAAAAV0Uk5T/////wD7tg5TAAAAN0lEQVR42izLyQ0AMAgDQYPpv+b4yD7QEBGcYoI0yN454Sqy9KnfTUufQpB7c/9AM1RlE58AAwBEcAE4zo3mOAAAAABJRU5ErkJggg==\") no-repeat scroll right center transparent;\n  padding-right: 13px;\n  outline: none;\n}\n.terminal-modern .background {\n  background: #000;\n  height: 100%;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.terminal-modern .background .interlace {\n  display: none;\n}\n.terminal-modern .container {\n  text-shadow: none;\n}\n.terminal-modern .container output pre {\n  color: white;\n  font-family: Inconsolata, monospace;\n}\n.terminal-modern .prompt {\n  color: #fc0;\n}\n/* White theme */\n.terminal-white {\n  color: black;\n  font-family: Inconsolata, monospace;\n}\n.terminal-white a {\n  color: #000;\n}\n.terminal-white .background {\n  background: #fff;\n  height: 100%;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.terminal-white .background .interlace {\n  display: none;\n}\n.terminal-white .container {\n  text-shadow: none;\n}\n.terminal-white .container output pre {\n  color: black;\n  font-family: Inconsolata, monospace;\n}\n.terminal-white .prompt {\n  color: #02f;\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/decamelize/index.js":
/*!******************************************!*\
  !*** ./node_modules/decamelize/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str, sep) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	sep = typeof sep === 'undefined' ? '_' : sep;

	return str
		.replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2')
		.replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2')
		.toLowerCase();
};


/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

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

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/yargs-parser sync recursive":
/*!****************************************!*\
  !*** ./node_modules/yargs-parser sync ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/yargs-parser sync recursive";

/***/ }),

/***/ "./node_modules/yargs-parser/index.js":
/*!********************************************!*\
  !*** ./node_modules/yargs-parser/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var camelCase = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js")
var decamelize = __webpack_require__(/*! decamelize */ "./node_modules/decamelize/index.js")
var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js")
var tokenizeArgString = __webpack_require__(/*! ./lib/tokenize-arg-string */ "./node_modules/yargs-parser/lib/tokenize-arg-string.js")
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js")

function parse (args, opts) {
  if (!opts) opts = {}
  // allow a string argument to be passed in rather
  // than an argv array.
  args = tokenizeArgString(args)

  // aliases might have transitive relationships, normalize this.
  var aliases = combineAliases(opts.alias || {})
  var configuration = Object.assign({
    'short-option-groups': true,
    'camel-case-expansion': true,
    'dot-notation': true,
    'parse-numbers': true,
    'boolean-negation': true,
    'negation-prefix': 'no-',
    'duplicate-arguments-array': true,
    'flatten-duplicate-arrays': true,
    'populate--': false,
    'combine-arrays': false,
    'set-placeholder-key': false,
    'halt-at-non-option': false,
    'strip-aliased': false,
    'strip-dashed': false
  }, opts.configuration)
  var defaults = opts.default || {}
  var configObjects = opts.configObjects || []
  var envPrefix = opts.envPrefix
  var notFlagsOption = configuration['populate--']
  var notFlagsArgv = notFlagsOption ? '--' : '_'
  var newAliases = {}
  // allow a i18n handler to be passed in, default to a fake one (util.format).
  var __ = opts.__ || util.format
  var error = null
  var flags = {
    aliases: {},
    arrays: {},
    bools: {},
    strings: {},
    numbers: {},
    counts: {},
    normalize: {},
    configs: {},
    defaulted: {},
    nargs: {},
    coercions: {},
    keys: []
  }
  var negative = /^-[0-9]+(\.[0-9]+)?/
  var negatedBoolean = new RegExp('^--' + configuration['negation-prefix'] + '(.+)')

  ;[].concat(opts.array).filter(Boolean).forEach(function (opt) {
    var key = opt.key || opt

    // assign to flags[bools|strings|numbers]
    const assignment = Object.keys(opt).map(function (key) {
      return ({
        boolean: 'bools',
        string: 'strings',
        number: 'numbers'
      })[key]
    }).filter(Boolean).pop()

    // assign key to be coerced
    if (assignment) {
      flags[assignment][key] = true
    }

    flags.arrays[key] = true
    flags.keys.push(key)
  })

  ;[].concat(opts.boolean).filter(Boolean).forEach(function (key) {
    flags.bools[key] = true
    flags.keys.push(key)
  })

  ;[].concat(opts.string).filter(Boolean).forEach(function (key) {
    flags.strings[key] = true
    flags.keys.push(key)
  })

  ;[].concat(opts.number).filter(Boolean).forEach(function (key) {
    flags.numbers[key] = true
    flags.keys.push(key)
  })

  ;[].concat(opts.count).filter(Boolean).forEach(function (key) {
    flags.counts[key] = true
    flags.keys.push(key)
  })

  ;[].concat(opts.normalize).filter(Boolean).forEach(function (key) {
    flags.normalize[key] = true
    flags.keys.push(key)
  })

  Object.keys(opts.narg || {}).forEach(function (k) {
    flags.nargs[k] = opts.narg[k]
    flags.keys.push(k)
  })

  Object.keys(opts.coerce || {}).forEach(function (k) {
    flags.coercions[k] = opts.coerce[k]
    flags.keys.push(k)
  })

  if (Array.isArray(opts.config) || typeof opts.config === 'string') {
    ;[].concat(opts.config).filter(Boolean).forEach(function (key) {
      flags.configs[key] = true
    })
  } else {
    Object.keys(opts.config || {}).forEach(function (k) {
      flags.configs[k] = opts.config[k]
    })
  }

  // create a lookup table that takes into account all
  // combinations of aliases: {f: ['foo'], foo: ['f']}
  extendAliases(opts.key, aliases, opts.default, flags.arrays)

  // apply default values to all aliases.
  Object.keys(defaults).forEach(function (key) {
    (flags.aliases[key] || []).forEach(function (alias) {
      defaults[alias] = defaults[key]
    })
  })

  var argv = { _: [] }

  Object.keys(flags.bools).forEach(function (key) {
    if (Object.prototype.hasOwnProperty.call(defaults, key)) {
      setArg(key, defaults[key])
      setDefaulted(key)
    }
  })

  var notFlags = []

  for (var i = 0; i < args.length; i++) {
    var arg = args[i]
    var broken
    var key
    var letters
    var m
    var next
    var value

    // -- separated by =
    if (arg.match(/^--.+=/) || (
      !configuration['short-option-groups'] && arg.match(/^-.+=/)
    )) {
      // Using [\s\S] instead of . because js doesn't support the
      // 'dotall' regex modifier. See:
      // http://stackoverflow.com/a/1068308/13216
      m = arg.match(/^--?([^=]+)=([\s\S]*)$/)

      // nargs format = '--f=monkey washing cat'
      if (checkAllAliases(m[1], flags.nargs)) {
        args.splice(i + 1, 0, m[2])
        i = eatNargs(i, m[1], args)
      // arrays format = '--f=a b c'
      } else if (checkAllAliases(m[1], flags.arrays) && args.length > i + 1) {
        args.splice(i + 1, 0, m[2])
        i = eatArray(i, m[1], args)
      } else {
        setArg(m[1], m[2])
      }
    } else if (arg.match(negatedBoolean) && configuration['boolean-negation']) {
      key = arg.match(negatedBoolean)[1]
      setArg(key, false)

    // -- seperated by space.
    } else if (arg.match(/^--.+/) || (
      !configuration['short-option-groups'] && arg.match(/^-[^-]+/)
    )) {
      key = arg.match(/^--?(.+)/)[1]

      // nargs format = '--foo a b c'
      if (checkAllAliases(key, flags.nargs)) {
        i = eatNargs(i, key, args)
      // array format = '--foo a b c'
      } else if (checkAllAliases(key, flags.arrays) && args.length > i + 1) {
        i = eatArray(i, key, args)
      } else {
        next = flags.nargs[key] === 0 ? undefined : args[i + 1]

        if (next !== undefined && (!next.match(/^-/) ||
          next.match(negative)) &&
          !checkAllAliases(key, flags.bools) &&
          !checkAllAliases(key, flags.counts)) {
          setArg(key, next)
          i++
        } else if (/^(true|false)$/.test(next)) {
          setArg(key, next)
          i++
        } else {
          setArg(key, defaultValue(key))
        }
      }

    // dot-notation flag seperated by '='.
    } else if (arg.match(/^-.\..+=/)) {
      m = arg.match(/^-([^=]+)=([\s\S]*)$/)
      setArg(m[1], m[2])

    // dot-notation flag seperated by space.
    } else if (arg.match(/^-.\..+/)) {
      next = args[i + 1]
      key = arg.match(/^-(.\..+)/)[1]

      if (next !== undefined && !next.match(/^-/) &&
        !checkAllAliases(key, flags.bools) &&
        !checkAllAliases(key, flags.counts)) {
        setArg(key, next)
        i++
      } else {
        setArg(key, defaultValue(key))
      }
    } else if (arg.match(/^-[^-]+/) && !arg.match(negative)) {
      letters = arg.slice(1, -1).split('')
      broken = false

      for (var j = 0; j < letters.length; j++) {
        next = arg.slice(j + 2)

        if (letters[j + 1] && letters[j + 1] === '=') {
          value = arg.slice(j + 3)
          key = letters[j]

          // nargs format = '-f=monkey washing cat'
          if (checkAllAliases(key, flags.nargs)) {
            args.splice(i + 1, 0, value)
            i = eatNargs(i, key, args)
          // array format = '-f=a b c'
          } else if (checkAllAliases(key, flags.arrays) && args.length > i + 1) {
            args.splice(i + 1, 0, value)
            i = eatArray(i, key, args)
          } else {
            setArg(key, value)
          }

          broken = true
          break
        }

        if (next === '-') {
          setArg(letters[j], next)
          continue
        }

        // current letter is an alphabetic character and next value is a number
        if (/[A-Za-z]/.test(letters[j]) &&
          /^-?\d+(\.\d*)?(e-?\d+)?$/.test(next)) {
          setArg(letters[j], next)
          broken = true
          break
        }

        if (letters[j + 1] && letters[j + 1].match(/\W/)) {
          setArg(letters[j], next)
          broken = true
          break
        } else {
          setArg(letters[j], defaultValue(letters[j]))
        }
      }

      key = arg.slice(-1)[0]

      if (!broken && key !== '-') {
        // nargs format = '-f a b c'
        if (checkAllAliases(key, flags.nargs)) {
          i = eatNargs(i, key, args)
        // array format = '-f a b c'
        } else if (checkAllAliases(key, flags.arrays) && args.length > i + 1) {
          i = eatArray(i, key, args)
        } else {
          next = args[i + 1]

          if (next !== undefined && (!/^(-|--)[^-]/.test(next) ||
            next.match(negative)) &&
            !checkAllAliases(key, flags.bools) &&
            !checkAllAliases(key, flags.counts)) {
            setArg(key, next)
            i++
          } else if (/^(true|false)$/.test(next)) {
            setArg(key, next)
            i++
          } else {
            setArg(key, defaultValue(key))
          }
        }
      }
    } else if (arg === '--') {
      notFlags = args.slice(i + 1)
      break
    } else if (configuration['halt-at-non-option']) {
      notFlags = args.slice(i)
      break
    } else {
      argv._.push(maybeCoerceNumber('_', arg))
    }
  }

  // order of precedence:
  // 1. command line arg
  // 2. value from env var
  // 3. value from config file
  // 4. value from config objects
  // 5. configured default value
  applyEnvVars(argv, true) // special case: check env vars that point to config file
  applyEnvVars(argv, false)
  setConfig(argv)
  setConfigObjects()
  applyDefaultsAndAliases(argv, flags.aliases, defaults)
  applyCoercions(argv)
  if (configuration['set-placeholder-key']) setPlaceholderKeys(argv)

  // for any counts either not in args or without an explicit default, set to 0
  Object.keys(flags.counts).forEach(function (key) {
    if (!hasKey(argv, key.split('.'))) setArg(key, 0)
  })

  // '--' defaults to undefined.
  if (notFlagsOption && notFlags.length) argv[notFlagsArgv] = []
  notFlags.forEach(function (key) {
    argv[notFlagsArgv].push(key)
  })

  if (configuration['camel-case-expansion'] && configuration['strip-dashed']) {
    Object.keys(argv).filter(key => key !== '--' && key.includes('-')).forEach(key => {
      delete argv[key]
    })
  }

  if (configuration['strip-aliased']) {
    // XXX Switch to [].concat(...Object.values(aliases)) once node.js 6 is dropped
    ;[].concat(...Object.keys(aliases).map(k => aliases[k])).forEach(alias => {
      if (configuration['camel-case-expansion']) {
        delete argv[alias.split('.').map(prop => camelCase(prop)).join('.')]
      }

      delete argv[alias]
    })
  }

  // how many arguments should we consume, based
  // on the nargs option?
  function eatNargs (i, key, args) {
    var ii
    const toEat = checkAllAliases(key, flags.nargs)

    // nargs will not consume flag arguments, e.g., -abc, --foo,
    // and terminates when one is observed.
    var available = 0
    for (ii = i + 1; ii < args.length; ii++) {
      if (!args[ii].match(/^-[^0-9]/)) available++
      else break
    }

    if (available < toEat) error = Error(__('Not enough arguments following: %s', key))

    const consumed = Math.min(available, toEat)
    for (ii = i + 1; ii < (consumed + i + 1); ii++) {
      setArg(key, args[ii])
    }

    return (i + consumed)
  }

  // if an option is an array, eat all non-hyphenated arguments
  // following it... YUM!
  // e.g., --foo apple banana cat becomes ["apple", "banana", "cat"]
  function eatArray (i, key, args) {
    var start = i + 1
    var argsToSet = []
    var multipleArrayFlag = i > 0
    for (var ii = i + 1; ii < args.length; ii++) {
      if (/^-/.test(args[ii]) && !negative.test(args[ii])) {
        if (ii === start) {
          setArg(key, defaultForType('array'))
        }
        multipleArrayFlag = true
        break
      }
      i = ii
      argsToSet.push(args[ii])
    }
    if (multipleArrayFlag) {
      setArg(key, argsToSet.map(function (arg) {
        return processValue(key, arg)
      }))
    } else {
      argsToSet.forEach(function (arg) {
        setArg(key, arg)
      })
    }

    return i
  }

  function setArg (key, val) {
    unsetDefaulted(key)

    if (/-/.test(key) && configuration['camel-case-expansion']) {
      var alias = key.split('.').map(function (prop) {
        return camelCase(prop)
      }).join('.')
      addNewAlias(key, alias)
    }

    var value = processValue(key, val)

    var splitKey = key.split('.')
    setKey(argv, splitKey, value)

    // handle populating aliases of the full key
    if (flags.aliases[key]) {
      flags.aliases[key].forEach(function (x) {
        x = x.split('.')
        setKey(argv, x, value)
      })
    }

    // handle populating aliases of the first element of the dot-notation key
    if (splitKey.length > 1 && configuration['dot-notation']) {
      ;(flags.aliases[splitKey[0]] || []).forEach(function (x) {
        x = x.split('.')

        // expand alias with nested objects in key
        var a = [].concat(splitKey)
        a.shift() // nuke the old key.
        x = x.concat(a)

        setKey(argv, x, value)
      })
    }

    // Set normalize getter and setter when key is in 'normalize' but isn't an array
    if (checkAllAliases(key, flags.normalize) && !checkAllAliases(key, flags.arrays)) {
      var keys = [key].concat(flags.aliases[key] || [])
      keys.forEach(function (key) {
        argv.__defineSetter__(key, function (v) {
          val = path.normalize(v)
        })

        argv.__defineGetter__(key, function () {
          return typeof val === 'string' ? path.normalize(val) : val
        })
      })
    }
  }

  function addNewAlias (key, alias) {
    if (!(flags.aliases[key] && flags.aliases[key].length)) {
      flags.aliases[key] = [alias]
      newAliases[alias] = true
    }
    if (!(flags.aliases[alias] && flags.aliases[alias].length)) {
      addNewAlias(alias, key)
    }
  }

  function processValue (key, val) {
    // strings may be quoted, clean this up as we assign values.
    if (typeof val === 'string' &&
      (val[0] === "'" || val[0] === '"') &&
      val[val.length - 1] === val[0]
    ) {
      val = val.substring(1, val.length - 1)
    }

    // handle parsing boolean arguments --foo=true --bar false.
    if (checkAllAliases(key, flags.bools) || checkAllAliases(key, flags.counts)) {
      if (typeof val === 'string') val = val === 'true'
    }

    var value = maybeCoerceNumber(key, val)

    // increment a count given as arg (either no value or value parsed as boolean)
    if (checkAllAliases(key, flags.counts) && (isUndefined(value) || typeof value === 'boolean')) {
      value = increment
    }

    // Set normalized value when key is in 'normalize' and in 'arrays'
    if (checkAllAliases(key, flags.normalize) && checkAllAliases(key, flags.arrays)) {
      if (Array.isArray(val)) value = val.map(path.normalize)
      else value = path.normalize(val)
    }
    return value
  }

  function maybeCoerceNumber (key, value) {
    if (!checkAllAliases(key, flags.strings) && !checkAllAliases(key, flags.coercions)) {
      const shouldCoerceNumber = isNumber(value) && configuration['parse-numbers'] && (
        Number.isSafeInteger(Math.floor(value))
      )
      if (shouldCoerceNumber || (!isUndefined(value) && checkAllAliases(key, flags.numbers))) value = Number(value)
    }
    return value
  }

  // set args from config.json file, this should be
  // applied last so that defaults can be applied.
  function setConfig (argv) {
    var configLookup = {}

    // expand defaults/aliases, in-case any happen to reference
    // the config.json file.
    applyDefaultsAndAliases(configLookup, flags.aliases, defaults)

    Object.keys(flags.configs).forEach(function (configKey) {
      var configPath = argv[configKey] || configLookup[configKey]
      if (configPath) {
        try {
          var config = null
          var resolvedConfigPath = path.resolve(process.cwd(), configPath)

          if (typeof flags.configs[configKey] === 'function') {
            try {
              config = flags.configs[configKey](resolvedConfigPath)
            } catch (e) {
              config = e
            }
            if (config instanceof Error) {
              error = config
              return
            }
          } else {
            config = __webpack_require__("./node_modules/yargs-parser sync recursive")(resolvedConfigPath)
          }

          setConfigObject(config)
        } catch (ex) {
          if (argv[configKey]) error = Error(__('Invalid JSON config file: %s', configPath))
        }
      }
    })
  }

  // set args from config object.
  // it recursively checks nested objects.
  function setConfigObject (config, prev) {
    Object.keys(config).forEach(function (key) {
      var value = config[key]
      var fullKey = prev ? prev + '.' + key : key

      // if the value is an inner object and we have dot-notation
      // enabled, treat inner objects in config the same as
      // heavily nested dot notations (foo.bar.apple).
      if (typeof value === 'object' && value !== null && !Array.isArray(value) && configuration['dot-notation']) {
        // if the value is an object but not an array, check nested object
        setConfigObject(value, fullKey)
      } else {
        // setting arguments via CLI takes precedence over
        // values within the config file.
        if (!hasKey(argv, fullKey.split('.')) || (flags.defaulted[fullKey]) || (flags.arrays[fullKey] && configuration['combine-arrays'])) {
          setArg(fullKey, value)
        }
      }
    })
  }

  // set all config objects passed in opts
  function setConfigObjects () {
    if (typeof configObjects === 'undefined') return
    configObjects.forEach(function (configObject) {
      setConfigObject(configObject)
    })
  }

  function applyEnvVars (argv, configOnly) {
    if (typeof envPrefix === 'undefined') return

    var prefix = typeof envPrefix === 'string' ? envPrefix : ''
    Object.keys(process.env).forEach(function (envVar) {
      if (prefix === '' || envVar.lastIndexOf(prefix, 0) === 0) {
        // get array of nested keys and convert them to camel case
        var keys = envVar.split('__').map(function (key, i) {
          if (i === 0) {
            key = key.substring(prefix.length)
          }
          return camelCase(key)
        })

        if (((configOnly && flags.configs[keys.join('.')]) || !configOnly) && (!hasKey(argv, keys) || flags.defaulted[keys.join('.')])) {
          setArg(keys.join('.'), process.env[envVar])
        }
      }
    })
  }

  function applyCoercions (argv) {
    var coerce
    var applied = {}
    Object.keys(argv).forEach(function (key) {
      if (!applied.hasOwnProperty(key)) { // If we haven't already coerced this option via one of its aliases
        coerce = checkAllAliases(key, flags.coercions)
        if (typeof coerce === 'function') {
          try {
            var value = coerce(argv[key])
            ;([].concat(flags.aliases[key] || [], key)).forEach(ali => {
              applied[ali] = argv[ali] = value
            })
          } catch (err) {
            error = err
          }
        }
      }
    })
  }

  function setPlaceholderKeys (argv) {
    flags.keys.forEach((key) => {
      // don't set placeholder keys for dot notation options 'foo.bar'.
      if (~key.indexOf('.')) return
      if (typeof argv[key] === 'undefined') argv[key] = undefined
    })
    return argv
  }

  function applyDefaultsAndAliases (obj, aliases, defaults) {
    Object.keys(defaults).forEach(function (key) {
      if (!hasKey(obj, key.split('.'))) {
        setKey(obj, key.split('.'), defaults[key])

        ;(aliases[key] || []).forEach(function (x) {
          if (hasKey(obj, x.split('.'))) return
          setKey(obj, x.split('.'), defaults[key])
        })
      }
    })
  }

  function hasKey (obj, keys) {
    var o = obj

    if (!configuration['dot-notation']) keys = [keys.join('.')]

    keys.slice(0, -1).forEach(function (key) {
      o = (o[key] || {})
    })

    var key = keys[keys.length - 1]

    if (typeof o !== 'object') return false
    else return key in o
  }

  function setKey (obj, keys, value) {
    var o = obj

    if (!configuration['dot-notation']) keys = [keys.join('.')]

    keys.slice(0, -1).forEach(function (key, index) {
      if (typeof o === 'object' && o[key] === undefined) {
        o[key] = {}
      }

      if (typeof o[key] !== 'object' || Array.isArray(o[key])) {
        // ensure that o[key] is an array, and that the last item is an empty object.
        if (Array.isArray(o[key])) {
          o[key].push({})
        } else {
          o[key] = [o[key], {}]
        }

        // we want to update the empty object at the end of the o[key] array, so set o to that object
        o = o[key][o[key].length - 1]
      } else {
        o = o[key]
      }
    })

    var key = keys[keys.length - 1]

    var isTypeArray = checkAllAliases(keys.join('.'), flags.arrays)
    var isValueArray = Array.isArray(value)
    var duplicate = configuration['duplicate-arguments-array']

    // nargs has higher priority than duplicate
    if (!duplicate && checkAllAliases(key, flags.nargs)) {
      duplicate = true
      if ((!isUndefined(o[key]) && flags.nargs[key] === 1) || (Array.isArray(o[key]) && o[key].length === flags.nargs[key])) {
        o[key] = undefined
      }
    }

    if (value === increment) {
      o[key] = increment(o[key])
    } else if (Array.isArray(o[key])) {
      if (duplicate && isTypeArray && isValueArray) {
        o[key] = configuration['flatten-duplicate-arrays'] ? o[key].concat(value) : (Array.isArray(o[key][0]) ? o[key] : [o[key]]).concat([value])
      } else if (!duplicate && Boolean(isTypeArray) === Boolean(isValueArray)) {
        o[key] = value
      } else {
        o[key] = o[key].concat([value])
      }
    } else if (o[key] === undefined && isTypeArray) {
      o[key] = isValueArray ? value : [value]
    } else if (duplicate && !(o[key] === undefined || checkAllAliases(key, flags.bools) || checkAllAliases(keys.join('.'), flags.bools) || checkAllAliases(key, flags.counts))) {
      o[key] = [ o[key], value ]
    } else {
      o[key] = value
    }
  }

  // extend the aliases list with inferred aliases.
  function extendAliases (...args) {
    args.forEach(function (obj) {
      Object.keys(obj || {}).forEach(function (key) {
        // short-circuit if we've already added a key
        // to the aliases array, for example it might
        // exist in both 'opts.default' and 'opts.key'.
        if (flags.aliases[key]) return

        flags.aliases[key] = [].concat(aliases[key] || [])
        // For "--option-name", also set argv.optionName
        flags.aliases[key].concat(key).forEach(function (x) {
          if (/-/.test(x) && configuration['camel-case-expansion']) {
            var c = camelCase(x)
            if (c !== key && flags.aliases[key].indexOf(c) === -1) {
              flags.aliases[key].push(c)
              newAliases[c] = true
            }
          }
        })
        // For "--optionName", also set argv['option-name']
        flags.aliases[key].concat(key).forEach(function (x) {
          if (x.length > 1 && /[A-Z]/.test(x) && configuration['camel-case-expansion']) {
            var c = decamelize(x, '-')
            if (c !== key && flags.aliases[key].indexOf(c) === -1) {
              flags.aliases[key].push(c)
              newAliases[c] = true
            }
          }
        })
        flags.aliases[key].forEach(function (x) {
          flags.aliases[x] = [key].concat(flags.aliases[key].filter(function (y) {
            return x !== y
          }))
        })
      })
    })
  }

  // check if a flag is set for any of a key's aliases.
  function checkAllAliases (key, flag) {
    var isSet = false
    var toCheck = [].concat(flags.aliases[key] || [], key)

    toCheck.forEach(function (key) {
      if (flag[key]) isSet = flag[key]
    })

    return isSet
  }

  function setDefaulted (key) {
    [].concat(flags.aliases[key] || [], key).forEach(function (k) {
      flags.defaulted[k] = true
    })
  }

  function unsetDefaulted (key) {
    [].concat(flags.aliases[key] || [], key).forEach(function (k) {
      delete flags.defaulted[k]
    })
  }

  // make a best effor to pick a default value
  // for an option based on name and type.
  function defaultValue (key) {
    if (!checkAllAliases(key, flags.bools) &&
        !checkAllAliases(key, flags.counts) &&
        `${key}` in defaults) {
      return defaults[key]
    } else {
      return defaultForType(guessType(key))
    }
  }

  // return a default value, given the type of a flag.,
  // e.g., key of type 'string' will default to '', rather than 'true'.
  function defaultForType (type) {
    var def = {
      boolean: true,
      string: '',
      number: undefined,
      array: []
    }

    return def[type]
  }

  // given a flag, enforce a default type.
  function guessType (key) {
    var type = 'boolean'

    if (checkAllAliases(key, flags.strings)) type = 'string'
    else if (checkAllAliases(key, flags.numbers)) type = 'number'
    else if (checkAllAliases(key, flags.arrays)) type = 'array'

    return type
  }

  function isNumber (x) {
    if (x === null || x === undefined) return false
    // if loaded from config, may already be a number.
    if (typeof x === 'number') return true
    // hexadecimal.
    if (/^0x[0-9a-f]+$/i.test(x)) return true
    // don't treat 0123 as a number; as it drops the leading '0'.
    if (x.length > 1 && x[0] === '0') return false
    return /^[-]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x)
  }

  function isUndefined (num) {
    return num === undefined
  }

  return {
    argv: argv,
    error: error,
    aliases: flags.aliases,
    newAliases: newAliases,
    configuration: configuration
  }
}

// if any aliases reference each other, we should
// merge them together.
function combineAliases (aliases) {
  var aliasArrays = []
  var change = true
  var combined = {}

  // turn alias lookup hash {key: ['alias1', 'alias2']} into
  // a simple array ['key', 'alias1', 'alias2']
  Object.keys(aliases).forEach(function (key) {
    aliasArrays.push(
      [].concat(aliases[key], key)
    )
  })

  // combine arrays until zero changes are
  // made in an iteration.
  while (change) {
    change = false
    for (var i = 0; i < aliasArrays.length; i++) {
      for (var ii = i + 1; ii < aliasArrays.length; ii++) {
        var intersect = aliasArrays[i].filter(function (v) {
          return aliasArrays[ii].indexOf(v) !== -1
        })

        if (intersect.length) {
          aliasArrays[i] = aliasArrays[i].concat(aliasArrays[ii])
          aliasArrays.splice(ii, 1)
          change = true
          break
        }
      }
    }
  }

  // map arrays back to the hash-lookup (de-dupe while
  // we're at it).
  aliasArrays.forEach(function (aliasArray) {
    aliasArray = aliasArray.filter(function (v, i, self) {
      return self.indexOf(v) === i
    })
    combined[aliasArray.pop()] = aliasArray
  })

  return combined
}

// this function should only be called when a count is given as an arg
// it is NOT called to set a default value
// thus we can start the count at 1 instead of 0
function increment (orig) {
  return orig !== undefined ? orig + 1 : 1
}

function Parser (args, opts) {
  var result = parse(args.slice(), opts)

  return result.argv
}

// parse arguments and return detailed
// meta information, aliases, etc.
Parser.detailed = function (args, opts) {
  return parse(args.slice(), opts)
}

module.exports = Parser

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/yargs-parser/lib/tokenize-arg-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/yargs-parser/lib/tokenize-arg-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// take an un-split argv string and tokenize it.
module.exports = function (argString) {
  if (Array.isArray(argString)) {
    return argString.map(e => typeof e !== 'string' ? e + '' : e)
  }

  argString = argString.trim()

  var i = 0
  var prevC = null
  var c = null
  var opening = null
  var args = []

  for (var ii = 0; ii < argString.length; ii++) {
    prevC = c
    c = argString.charAt(ii)

    // split on spaces unless we're in quotes.
    if (c === ' ' && !opening) {
      if (!(prevC === ' ')) {
        i++
      }
      continue
    }

    // don't split the string if we're in matching
    // opening or closing single and double quotes.
    if (c === opening) {
      opening = null
    } else if ((c === "'" || c === '"') && !opening) {
      opening = c
    }

    if (!args[i]) args[i] = ''
    args[i] += c
  }

  return args
}


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, description, version, keywords, homepage, author, bugs, license, repository, scripts, main, devDependencies, dependencies, default */
/***/ (function(module) {

module.exports = {"name":"terminatorator","description":"A terminal emulator for your browser","version":"0.0.6","keywords":["javascript","terminal","console","shell"],"homepage":"https://github.com/achingbrain/terminatorator","author":"Alex Potsides <alex@achingbrain.net","bugs":{"url":"https://github.com/achingbrain/terminatorator/issues"},"license":"MIT","repository":{"type":"git","url":"https://github.com/achingbrain/terminatorator.git"},"scripts":{"clean":"rm -rf dist","build":"webpack","prepublish":"npm run clean && npm run build","test":"node test/index.js","start":"webpack-dev-server","lint":"standard","deploy":"npm run prepublish && gh-pages -d dist"},"main":"dist/main.js","devDependencies":{"@babel/core":"^7.4.5","@babel/plugin-proposal-object-rest-spread":"^7.4.4","@babel/plugin-transform-runtime":"^7.4.4","@babel/preset-env":"^7.4.5","babel-loader":"^8.0.6","css-loader":"^3.0.0","express":"^4.17.1","express-less":"^0.1.0","file-loader":"^4.0.0","fs-extra":">= 0.0.4","gh-pages":"^2.0.1","html-webpack-plugin":"^3.2.0","less":"^3.9.0","less-loader":"^5.0.0","mime":"^2.4.4","mini-css-extract-plugin":"^0.7.0","opn":"^6.0.0","qunit":"^2.9.2","standard":"^12.0.1","style-loader":"^0.23.1","webpack":"^4.35.0","webpack-cli":"^3.3.5","webpack-dev-server":"^3.7.2"},"dependencies":{"@babel/runtime":"^7.4.5","yargs-parser":"^13.1.1"}};

/***/ }),

/***/ "./src/commands/cat.js":
/*!*****************************!*\
  !*** ./src/commands/cat.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _system_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../system/fs */ "./src/system/fs.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  handler: function handler(args, session) {
    var node = _system_fs__WEBPACK_IMPORTED_MODULE_0__["default"].getNode(args._[0], session);

    if (!node) {
      throw new Error("cat: ".concat(args._[0], ": No such file or directory"));
    }

    if (node.children) {
      throw new Error("cat: ".concat(args._[0], ": Is a directory"));
    }

    return "<pre>".concat(node.content, "</pre>");
  }
});

/***/ }),

/***/ "./src/commands/cd.js":
/*!****************************!*\
  !*** ./src/commands/cd.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _system_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../system/fs */ "./src/system/fs.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  handler: function handler(_ref, session) {
    var _ = _ref._;
    var path = _[0] || session.env.HOME;
    var node = _system_fs__WEBPACK_IMPORTED_MODULE_0__["default"].getNode(path, session);

    if (!node) {
      throw new Error("cd: ".concat(path, ": No such file or directory"));
    }

    session.env.PWD = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["normalisePath"])(path, session);
  }
});

/***/ }),

/***/ "./src/commands/chmod.js":
/*!*******************************!*\
  !*** ./src/commands/chmod.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _system_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../system/fs */ "./src/system/fs.js");


var setPerms = function setPerms(node, perms) {
  node.perms = perms;
  Object.keys(node.children || {}).forEach(function (key) {
    setPerms(node.children[key], perms);
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  handler: function handler(args, session) {
    if (args._.length !== 2) {
      throw new Error('usage: chmod [-fhv] [-R [-H | -L | -P]] [-a | +a | =a  [i][# [ n]]] mode|entry file ...');
    }

    var mode = args._[0];
    var path = args._[1];
    var perms = parseInt(mode, 8);

    if (isNaN(perms) || perms === 0 && !"".concat(mode).match(/^(0)+$/) || perms > parseInt('0777', 8)) {
      throw new Error("chmod: chmod: Invalid file mode: ".concat(mode));
    }

    var node = _system_fs__WEBPACK_IMPORTED_MODULE_0__["default"].getNode(path, session);

    if (!node) {
      throw new Error("chmod: ".concat(path, ": No such file or directory"));
    }

    node.perms = perms;

    if (args.R) {
      setPerms(node, perms);
    }
  },
  args: {
    "boolean": ['R'],
    string: [0]
  }
});

/***/ }),

/***/ "./src/commands/echo.js":
/*!******************************!*\
  !*** ./src/commands/echo.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  handler: function handler(args, session) {
    var echo = args._[0];

    if (!echo) {
      return ' ';
    }

    if (echo.substring(0, 1) === '$') {
      var envVar = session.env[echo.substring(1)];
      return envVar || ' ';
    }

    return echo;
  }
});

/***/ }),

/***/ "./src/commands/env.js":
/*!*****************************!*\
  !*** ./src/commands/env.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  handler: function handler(args, session) {
    return Object.keys(session.env).map(function (key) {
      return "".concat(key, "=").concat(session.env[key]);
    });
  }
});

/***/ }),

/***/ "./src/commands/groupadd.js":
/*!**********************************!*\
  !*** ./src/commands/groupadd.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _system_groups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../system/groups */ "./src/system/groups.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  handler: function handler(args, session) {
    if (!args._.length) {
      throw new Error('groupadd: args required');
    }

    _system_groups__WEBPACK_IMPORTED_MODULE_0__["default"].add(args._[0]);
  }
});

/***/ }),

/***/ "./src/commands/help.js":
/*!******************************!*\
  !*** ./src/commands/help.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);

/* harmony default export */ __webpack_exports__["default"] = ({
  handler: function handler() {
    return ["".concat(_package_json__WEBPACK_IMPORTED_MODULE_0__.name, "@").concat(_package_json__WEBPACK_IMPORTED_MODULE_0__.version, " - ").concat(_package_json__WEBPACK_IMPORTED_MODULE_0__.description), ' ', 'Run `echo $PATH` and `ls` some of the paths for available commands'];
  }
});

/***/ }),

/***/ "./src/commands/ls.js":
/*!****************************!*\
  !*** ./src/commands/ls.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _system_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../system/fs */ "./src/system/fs.js");
/* harmony import */ var _system_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../system/users */ "./src/system/users.js");
/* harmony import */ var _system_groups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../system/groups */ "./src/system/groups.js");




function calculatePerms(perms, position) {
  var calc = {
    world: function world(perm) {
      return "000".concat(perm);
    },
    group: function group(perm) {
      return "00".concat(perm, "0");
    },
    user: function user(perm) {
      return "0".concat(perm, "00");
    }
  };

  if ((perms & parseInt(calc[position]('7'), 8)) === parseInt(calc[position]('7'), 8)) {
    return 'rwx';
  } else if ((perms & parseInt(calc[position]('6'), 8)) === parseInt(calc[position]('6'), 8)) {
    return 'rw-';
  } else if ((perms & parseInt(calc[position]('5'), 8)) === parseInt(calc[position]('5'), 8)) {
    return 'r-x';
  } else if ((perms & parseInt(calc[position]('4'), 8)) === parseInt(calc[position]('4'), 8)) {
    return 'r--';
  } else if ((perms & parseInt(calc[position]('3'), 8)) === parseInt(calc[position]('3'), 8)) {
    return '-wx';
  } else if ((perms & parseInt(calc[position]('2'), 8)) === parseInt(calc[position]('2'), 8)) {
    return '-w-';
  } else if ((perms & parseInt(calc[position]('1'), 8)) === parseInt(calc[position]('1'), 8)) {
    return '--x';
  }

  return '---';
}

/* harmony default export */ __webpack_exports__["default"] = ({
  handler: function handler(args, session) {
    var node = _system_fs__WEBPACK_IMPORTED_MODULE_0__["default"].getNode(args._[0] || session.env.PWD, session);

    if (!node) {
      throw new Error("read: ".concat(args._[0], ": No such file or directory"));
    }

    var files;

    if (node.content !== undefined) {
      files = [{
        name: path.split('/').pop(),
        node: node
      }];
    } else {
      files = Object.keys(node.children).map(function (name) {
        return {
          name: name,
          node: node.children[name]
        };
      });
    }

    files = files.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });

    if (!args.a) {
      files = files.filter(function (file) {
        return file.name.substring(0, 1) !== '.';
      });
    }

    if (args.l) {
      return "\n      <table><tbody>\n        ".concat(files.map(function (child) {
        var node = child.node;
        var date = node.mtime.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          hour: '2-digit',
          minute: '2-digit'
        });
        var perms = '';

        if (node.children) {
          perms += 'd';
        } else {
          perms += '-';
        }

        perms += calculatePerms(node.perms, 'user');
        perms += calculatePerms(node.perms, 'group');
        perms += calculatePerms(node.perms, 'world');
        return "<tr>\n              <td>".concat(perms, "&nbsp;</td>\n              <td>").concat(_system_users__WEBPACK_IMPORTED_MODULE_1__["default"].find(node.uid).name, "&nbsp;</td>\n              <td>").concat(_system_groups__WEBPACK_IMPORTED_MODULE_2__["default"].find(node.gid).name, "&nbsp;</td>\n              <td>").concat(node.size(), "&nbsp;</td>\n              <td>").concat(date, "&nbsp;</td>\n              <td>").concat(child.name, "</td>\n            </tr>");
      }).join(''), "\n      <tbody></table>");
    }

    return files.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    }).map(function (file) {
      return file.name;
    }).join(' ');
  },
  args: {
    "boolean": ['l', 'a']
  }
});

/***/ }),

/***/ "./src/commands/mkdir.js":
/*!*******************************!*\
  !*** ./src/commands/mkdir.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _system_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../system/fs */ "./src/system/fs.js");
/* harmony import */ var _system_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../system/users */ "./src/system/users.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  handler: function handler(args, session) {
    var _ = args._;

    if (!_.length) {
      throw new Error('usage: mkdir [-pv] [-m mode] directory ...');
    }

    for (var i = 0; i < _.length; i++) {
      _system_fs__WEBPACK_IMPORTED_MODULE_0__["default"].mkdir(_[i], session, {
        uid: _system_users__WEBPACK_IMPORTED_MODULE_1__["default"].find(session.env.USER).uid,
        gid: _system_users__WEBPACK_IMPORTED_MODULE_1__["default"].find(session.env.USER).gid,
        parents: args.parents
      });
    }

    return '';
  },
  args: {
    "boolean": ['p'],
    alias: {
      parents: ['p']
    }
  }
});

/***/ }),

/***/ "./src/commands/pwd.js":
/*!*****************************!*\
  !*** ./src/commands/pwd.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  handler: function handler(args, session) {
    return session.env.PWD;
  }
});

/***/ }),

/***/ "./src/commands/rm.js":
/*!****************************!*\
  !*** ./src/commands/rm.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _system_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../system/fs */ "./src/system/fs.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  handler: function handler(args, session) {
    var _ = args._;

    if (!_.length) {
      throw new Error('usage: rm [-f | -i] [-dPRrvW] file ... unlink file');
    }

    for (var i = 0; i < _.length; i++) {
      _system_fs__WEBPACK_IMPORTED_MODULE_0__["default"].rm(_[i], session, args);
    }

    return '';
  },
  args: {
    "boolean": ['r', 'f'],
    alias: {
      recursive: ['r'],
      force: ['f']
    }
  }
});

/***/ }),

/***/ "./src/commands/su.js":
/*!****************************!*\
  !*** ./src/commands/su.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _system_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../system/users */ "./src/system/users.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  handler: function handler(args, session) {
    if (!args._.length) {
      throw new Error('su: Args required');
    }

    var user = _system_users__WEBPACK_IMPORTED_MODULE_0__["default"].find(args._[0]);

    if (!user) {
      throw new Error('su: Unknown user');
    }

    session.env.USER = user.name;
    session.env.HOME = user.home;
    return session.api.exec("cd ".concat(user.home), {
      hidden: true
    });
  }
});

/***/ }),

/***/ "./src/commands/terminatorator.js":
/*!****************************************!*\
  !*** ./src/commands/terminatorator.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  handler: function handler(args, session) {
    session.api.clear();
  }
});

/***/ }),

/***/ "./src/commands/theme.js":
/*!*******************************!*\
  !*** ./src/commands/theme.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  handler: function handler(args, session) {
    if (!args._.length) {
      session.api.getTheme();
      return;
    }

    if (args._[0].match(/^interlaced|modern|white$/)) {
      session.api.setTheme(args[0]);
      return;
    }

    throw new Error('theme: Invalid theme');
  }
});

/***/ }),

/***/ "./src/commands/touch.js":
/*!*******************************!*\
  !*** ./src/commands/touch.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _system_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../system/fs */ "./src/system/fs.js");
/* harmony import */ var _system_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../system/users */ "./src/system/users.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  handler: function handler(args, session) {
    var _ = args._;

    if (!_.length) {
      throw new Error('usage: touch [-A [-][[hh]mm]SS] [-acfhm] [-r file] [-t [[CC]YY]MMDDhhmm[.SS]] file ...');
    }

    _system_fs__WEBPACK_IMPORTED_MODULE_0__["default"].write(_[0], '', session, {
      uid: _system_users__WEBPACK_IMPORTED_MODULE_1__["default"].find(session.USER).uid,
      gid: _system_users__WEBPACK_IMPORTED_MODULE_1__["default"].find(session.USER).gid
    });
    return '';
  }
});

/***/ }),

/***/ "./src/commands/useradd.js":
/*!*********************************!*\
  !*** ./src/commands/useradd.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _system_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../system/fs */ "./src/system/fs.js");
/* harmony import */ var _system_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../system/users */ "./src/system/users.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  handler: function handler(args, session) {
    var name = args._[0];
    var home = args.home,
        group = args.group,
        supplementalGroups = args.supplementalGroups;
    _system_users__WEBPACK_IMPORTED_MODULE_1__["default"].add(name, home, group, supplementalGroups.split(','));
    _system_fs__WEBPACK_IMPORTED_MODULE_0__["default"].mkdir(home, session, _system_users__WEBPACK_IMPORTED_MODULE_1__["default"].ids(name));
    _system_fs__WEBPACK_IMPORTED_MODULE_0__["default"].mkdir("".concat(home, "/Documents"), session, _system_users__WEBPACK_IMPORTED_MODULE_1__["default"].ids(name));
    _system_fs__WEBPACK_IMPORTED_MODULE_0__["default"].mkdir("".concat(home, "/Code"), session, _system_users__WEBPACK_IMPORTED_MODULE_1__["default"].ids(name));
    _system_fs__WEBPACK_IMPORTED_MODULE_0__["default"].write("".concat(home, "/.bash_history"), '', session, _system_users__WEBPACK_IMPORTED_MODULE_1__["default"].ids(name));
    _system_fs__WEBPACK_IMPORTED_MODULE_0__["default"].write("".concat(home, "/.bash_profile"), "source /etc/profile\n\n    export NVM_DIR=\"/".concat(home, "}/.nvm\"\n    [ -s \"$NVM_DIR/nvm.sh\" ] && . \"$NVM_DIR/nvm.sh\"  # This loads nvm\n\n    nvm use 10"), session, _system_users__WEBPACK_IMPORTED_MODULE_1__["default"].ids(name));
  },
  args: {
    alias: {
      'home': ['h'],
      'group': ['g'],
      'supplementalGroups': ['G']
    }
  }
});

/***/ }),

/***/ "./src/commands/version.js":
/*!*********************************!*\
  !*** ./src/commands/version.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);

/* harmony default export */ __webpack_exports__["default"] = ({
  handler: function handler(args, session) {
    return _package_json__WEBPACK_IMPORTED_MODULE_0__.version;
  }
});

/***/ }),

/***/ "./src/commands/which.js":
/*!*******************************!*\
  !*** ./src/commands/which.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  handler: function handler(_ref, session) {
    var _ = _ref._;
    var cmd = _[0];
    var prefix = session.env.PATH.split(':').find(function (prefix) {
      if (session.commands["".concat(prefix, "/").concat(cmd)]) {
        return true;
      }
    });
    cmd = "".concat(prefix, "/").concat(cmd);

    if (session.commands[cmd]) {
      return cmd;
    }
  }
});

/***/ }),

/***/ "./src/commands/whoami.js":
/*!********************************!*\
  !*** ./src/commands/whoami.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  handler: function handler(args, session) {
    return session.env.USER;
  }
});

/***/ }),

/***/ "./src/system/boot.js":
/*!****************************!*\
  !*** ./src/system/boot.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return boot; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users */ "./src/system/users.js");
/* harmony import */ var _fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fs */ "./src/system/fs.js");





function boot(_x, _x2) {
  return _boot.apply(this, arguments);
}

function _boot() {
  _boot = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(session, options) {
    var execOpts;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            execOpts = {
              hidden: true
            };
            _context.next = 3;
            return session.api.exec('groupadd root', execOpts);

          case 3:
            _context.next = 5;
            return session.api.exec('groupadd wheel', execOpts);

          case 5:
            _context.next = 7;
            return session.api.exec('groupadd staff', execOpts);

          case 7:
            _context.next = 9;
            return session.api.exec("groupadd ".concat(options.user), execOpts);

          case 9:
            _context.next = 11;
            return session.api.exec('useradd root -g root -G wheel,staff -h /root', execOpts);

          case 11:
            _context.next = 13;
            return session.api.exec("su root", execOpts);

          case 13:
            _context.next = 15;
            return session.api.exec('mkdir /home', execOpts);

          case 15:
            _context.next = 17;
            return session.api.exec("useradd ".concat(options.user, " -g ").concat(options.user, " -G wheel,staff -h /home/").concat(options.user), execOpts);

          case 17:
            _context.next = 19;
            return session.api.exec('mkdir /bin', execOpts);

          case 19:
            _context.next = 21;
            return session.api.exec('mkdir /boot', execOpts);

          case 21:
            _context.next = 23;
            return session.api.exec('mkdir /dev', execOpts);

          case 23:
            _context.next = 25;
            return session.api.exec('mkdir /etc', execOpts);

          case 25:
            _context.next = 27;
            return session.api.exec('mkdir /lib', execOpts);

          case 27:
            _context.next = 29;
            return session.api.exec('mkdir /mnt', execOpts);

          case 29:
            _context.next = 31;
            return session.api.exec('mkdir /opt', execOpts);

          case 31:
            _context.next = 33;
            return session.api.exec('mkdir /opt/local', execOpts);

          case 33:
            _context.next = 35;
            return session.api.exec('mkdir /opt/local/bin', execOpts);

          case 35:
            _context.next = 37;
            return session.api.exec('mkdir /proc', execOpts);

          case 37:
            _context.next = 39;
            return session.api.exec('mkdir /sbin', execOpts);

          case 39:
            _context.next = 41;
            return session.api.exec('mkdir /tmp', execOpts);

          case 41:
            _context.next = 43;
            return session.api.exec('mkdir -p /usr/include', execOpts);

          case 43:
            _context.next = 45;
            return session.api.exec('mkdir /usr/lib', execOpts);

          case 45:
            _context.next = 47;
            return session.api.exec('mkdir /usr/libexec', execOpts);

          case 47:
            _context.next = 49;
            return session.api.exec('mkdir -p /usr/local/src', execOpts);

          case 49:
            _context.next = 51;
            return session.api.exec('mkdir -p /usr/share', execOpts);

          case 51:
            _context.next = 53;
            return session.api.exec('mkdir -p /var/log', execOpts);

          case 53:
            _context.next = 55;
            return session.api.exec('mkdir -p /var/mail', execOpts);

          case 55:
            _context.next = 57;
            return session.api.exec('mkdir -p /var/spool', execOpts);

          case 57:
            _context.next = 59;
            return session.api.exec('mkdir -p /var/src', execOpts);

          case 59:
            _context.next = 61;
            return session.api.exec('mkdir -p /var/tmp', execOpts);

          case 61:
            Object.keys(options.commands).forEach(function (command) {
              _fs__WEBPACK_IMPORTED_MODULE_4__["default"].write(command, options.commands[command].toString(), session, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, _users__WEBPACK_IMPORTED_MODULE_3__["default"].ids('root'), {
                parents: true
              }));
            });
            _context.next = 64;
            return session.api.exec("cd /home/".concat(options.user), execOpts);

          case 64:
            _context.next = 66;
            return session.api.exec("su ".concat(options.user), execOpts);

          case 66:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _boot.apply(this, arguments);
}

/***/ }),

/***/ "./src/system/fs.js":
/*!**************************!*\
  !*** ./src/system/fs.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


var createDir = function createDir() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      uid = _ref.uid,
      gid = _ref.gid,
      perms = _ref.perms;

  return {
    uid: uid || 0,
    gid: gid || 0,
    perms: perms || parseInt('0755', 8),
    size: function size() {
      var _this = this;

      return Object.keys(this.children).reduce(function (acc, curr) {
        return acc + _this.children[curr].size();
      }, 0);
    },
    mtime: new Date(),
    children: {}
  };
};

var createFile = function createFile() {
  var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      uid = _ref2.uid,
      gid = _ref2.gid,
      perms = _ref2.perms;

  return {
    uid: uid || 0,
    gid: gid || 0,
    perms: perms || parseInt('0755', 8),
    size: function size() {
      return this.content.length;
    },
    mtime: new Date(),
    content: content
  };
};

var fileSystem = createDir({
  uid: 0,
  gid: 0
});
var fs = {
  getNode: function getNode(input, session) {
    var path = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["normalisePath"])(input, session);

    if (path === '/') {
      return fileSystem;
    }

    path = path.replace(/^\/+/g, '').replace(/\/+$/g, '');
    var parts = path.split('/');
    var node = fileSystem.children[parts[0]];

    if (!node) {
      return;
    }

    for (var i = 1; i < parts.length; i++) {
      if (!node.children[parts[i]]) {
        return;
      }

      node = node.children[parts[i]];
    }

    return node;
  },
  mkdir: function mkdir(input, session) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var path = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["normalisePath"])(input, session);
    path = path.replace(/^\/+/g, '').replace(/\/+$/g, '');
    var parts = path.split('/');
    var node = fileSystem;

    for (var i = 0; i < parts.length; i++) {
      var child = node.children[parts[i]];

      if (child) {
        node = child;
        continue;
      }

      if (opts.parents || i === parts.length - 1) {
        node = node.children[parts[i]] = createDir(opts);
        continue;
      }

      throw new Error("mkdir: ".concat(input, ": No such file or directory"));
    }
  },
  write: function write(input, content, session) {
    var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var path = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["normalisePath"])(input, session);
    path = path.replace(/^\/+/g, '').replace(/\/+$/g, '');
    var parts = path.split('/');
    var node = fileSystem;
    var file = parts.pop();

    for (var i = 0; i < parts.length; i++) {
      var child = node.children[parts[i]];

      if (child) {
        node = child;
        continue;
      }

      if (opts.parents) {
        node = node.children[parts[i]] = createDir(opts);
        continue;
      }

      throw new Error("write: ".concat(input, ": No such file or directory"));
    }

    node.children[file] = createFile(content, opts);
  },
  read: function read(input, session) {
    var path = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["normalisePath"])(input, session);
    var node = fs.getNode(path, session);

    if (!node) {
      throw new Error("read: ".concat(input, ": No such file or directory"));
    }

    return node.content;
  },
  rm: function rm(input, session) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var path = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["normalisePath"])(input, session);
    path = path.replace(/^\/+/g, '').replace(/\/+$/g, '');
    var parts = path.split('/');
    var node = fileSystem;
    var file = parts.pop();

    for (var i = 0; i < parts.length; i++) {
      var child = node.children[parts[i]];

      if (child) {
        node = child;
        continue;
      }

      throw new Error("rm: ".concat(input, ": No such file or directory"));
    }

    if (!node.children[file]) {
      throw new Error("rm: ".concat(input, ": No such file or directory"));
    }

    if (node.children[file].children && !opts.recursive) {
      throw new Error("rm: ".concat(input, ": is a directory"));
    }

    delete node.children[file];
  }
};
/* harmony default export */ __webpack_exports__["default"] = (fs);

/***/ }),

/***/ "./src/system/groups.js":
/*!******************************!*\
  !*** ./src/system/groups.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var nextGid = 0;
var groups = {};
var groupApi = {
  add: function add(name) {
    groups[nextGid] = {
      gid: nextGid,
      name: name
    };
    nextGid++;
  },
  find: function find(id) {
    if (typeof id === 'string' || id instanceof String) {
      return Object.values(groups).find(function (g) {
        return g.name === id;
      });
    }

    return groups[id];
  }
};
/* harmony default export */ __webpack_exports__["default"] = (groupApi);

/***/ }),

/***/ "./src/system/users.js":
/*!*****************************!*\
  !*** ./src/system/users.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _groups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groups */ "./src/system/groups.js");

var nextUid = 0;
var users = {};
var userApi = {
  add: function add(name, home, group, supplementaryGroups) {
    users[nextUid] = {
      uid: nextUid,
      gid: _groups__WEBPACK_IMPORTED_MODULE_0__["default"].find(group).gid,
      name: name,
      home: home,
      groups: supplementaryGroups.map(function (group) {
        return _groups__WEBPACK_IMPORTED_MODULE_0__["default"].find(group).gid;
      })
    };
    nextUid++;
  },
  find: function find(id) {
    if (typeof id === 'string' || id instanceof String) {
      return Object.values(users).find(function (user) {
        return user.name === id;
      });
    }

    return users[id];
  },
  ids: function ids(id) {
    var result = userApi.find(id);

    if (result) {
      return {
        uid: result.uid,
        gid: result.gid
      };
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (userApi);

/***/ }),

/***/ "./src/terminal.js":
/*!*************************!*\
  !*** ./src/terminal.js ***!
  \*************************/
/*! exports provided: createTerminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTerminal", function() { return createTerminal; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/asyncIterator */ "./node_modules/@babel/runtime/helpers/asyncIterator.js");
/* harmony import */ var _babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _terminal_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terminal.less */ "./src/terminal.less");
/* harmony import */ var _terminal_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_terminal_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var yargs_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yargs-parser */ "./node_modules/yargs-parser/index.js");
/* harmony import */ var yargs_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yargs_parser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _system_boot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./system/boot */ "./src/system/boot.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "./package.json", 1);
/* harmony import */ var _system_fs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./system/fs */ "./src/system/fs.js");












var KEYS = {
  ENTER: 13,
  ESCAPE: 27,
  TAB: 9,
  K: 75,
  ARROW_UP: 38,
  ARROW_DOWN: 40
};

var commands = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({
  '/usr/bin/cat': __webpack_require__(/*! ./commands/cat */ "./src/commands/cat.js")["default"],
  '/usr/bin/cd': __webpack_require__(/*! ./commands/cd */ "./src/commands/cd.js")["default"],
  '/bin/chmod': __webpack_require__(/*! ./commands/chmod */ "./src/commands/chmod.js")["default"],
  '/usr/bin/env': __webpack_require__(/*! ./commands/env */ "./src/commands/env.js")["default"],
  '/bin/groupadd': __webpack_require__(/*! ./commands/groupadd */ "./src/commands/groupadd.js")["default"],
  '/usr/local/bin/help': __webpack_require__(/*! ./commands/help */ "./src/commands/help.js")["default"],
  '/bin/ls': __webpack_require__(/*! ./commands/ls */ "./src/commands/ls.js")["default"],
  '/bin/mkdir': __webpack_require__(/*! ./commands/mkdir */ "./src/commands/mkdir.js")["default"],
  '/bin/pwd': __webpack_require__(/*! ./commands/pwd */ "./src/commands/pwd.js")["default"],
  '/bin/rm': __webpack_require__(/*! ./commands/rm */ "./src/commands/rm.js")["default"],
  '/usr/bin/su': __webpack_require__(/*! ./commands/su */ "./src/commands/su.js")["default"],
  '/usr/local/bin/theme': __webpack_require__(/*! ./commands/theme */ "./src/commands/theme.js")["default"],
  '/usr/bin/touch': __webpack_require__(/*! ./commands/touch */ "./src/commands/touch.js")["default"],
  '/bin/useradd': __webpack_require__(/*! ./commands/useradd */ "./src/commands/useradd.js")["default"],
  '/usr/local/bin/version': __webpack_require__(/*! ./commands/version */ "./src/commands/version.js")["default"],
  '/usr/bin/which': __webpack_require__(/*! ./commands/which */ "./src/commands/which.js")["default"],
  '/usr/bin/whoami': __webpack_require__(/*! ./commands/whoami */ "./src/commands/whoami.js")["default"],
  '/bin/echo': __webpack_require__(/*! ./commands/echo */ "./src/commands/echo.js")["default"]
}, "/bin/".concat(_package_json__WEBPACK_IMPORTED_MODULE_8__.name), __webpack_require__(/*! ./commands/terminatorator */ "./src/commands/terminatorator.js")["default"]);

var motd = "<pre>\n _______                  _             _                  _\n|__   __|                (_)           | |                | |\n   | | ___ _ __ _ __ ___  _ _ __   __ _| |_ ___  _ __ __ _| |_ ___  _ __\n   | |/ _ | '__| '_ ` _ \\| | '_ \\ / _` | __/ _ \\| '__/ _` | __/ _ \\| '__|\n   | |  __| |  | | | | | | | | | | (_| | || (_) | | | (_| | || (_) | |\n   |_|____|_|  |_| |_| |_|_|_| |_|\\__,_|\\__\\___/|_|  \\__,_|\\__\\___/|_|\n</pre>\n<br/>\nType `help` for help\n<br/>\n<br/>";
function createTerminal(_x, _x2) {
  return _createTerminal.apply(this, arguments);
}

function _createTerminal() {
  _createTerminal = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(container, options) {
    var defaults, session, _history, _histpos, _histtemp, _terminal, _container, _inputLine, _cmdLine, _output, _prompt, _background, inputTextClick, historyHandler, onKeyDown, clear, output, _output2, _maybeAppendOutput, _maybeAppendOutput2, _appendOutput, cmdLineIsVisible, api, executeCommand, _executeCommand, tabComplete;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            tabComplete = function _ref13() {};

            _executeCommand = function _ref12() {
              _executeCommand = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(cmdline) {
                var opts,
                    args,
                    cmd,
                    prefix,
                    command,
                    ret,
                    result,
                    history,
                    contents,
                    _args3 = arguments;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        opts = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};

                        if (opts.hidden) {
                          _context3.next = 5;
                          break;
                        }

                        // Save shell history.
                        if (cmdline) {
                          _history[_history.length] = cmdline;
                          localStorage[options.history] = JSON.stringify(_history);
                          _histpos = _history.length;
                        } // Duplicate current input and append to output section.


                        _context3.next = 5;
                        return output("".concat(options.prompt, " ").concat(cmdline));

                      case 5:
                        if (cmdline) {
                          _context3.next = 7;
                          break;
                        }

                        return _context3.abrupt("return");

                      case 7:
                        // Parse out command & args
                        args = yargs_parser__WEBPACK_IMPORTED_MODULE_6___default()(cmdline);
                        cmd = args._.shift();
                        prefix = session.env.PATH.split(':').find(function (prefix) {
                          if (options.commands["".concat(prefix, "/").concat(cmd)]) {
                            return true;
                          }
                        });

                        if (prefix) {
                          _context3.next = 12;
                          break;
                        }

                        return _context3.abrupt("return", output(cmd + ': command not found'));

                      case 12:
                        cmd = "".concat(prefix, "/").concat(cmd);
                        command = options.commands[cmd];

                        if (command.args) {
                          // reparse with command args
                          args = yargs_parser__WEBPACK_IMPORTED_MODULE_6___default()(cmdline, command.args); // remove the command again

                          args._.shift();
                        }

                        try {
                          session.env._ = cmdline;
                          result = command.handler(args, session);
                          ret = output(result);
                        } catch (err) {
                          console.error(err);
                          ret = output(err.message);
                        }

                        if (!opts.hidden) {
                          history = '~/.bash_history';
                          contents = '';

                          if (_system_fs__WEBPACK_IMPORTED_MODULE_9__["default"].getNode(history, session)) {
                            contents = _system_fs__WEBPACK_IMPORTED_MODULE_9__["default"].read(history, session);
                            contents += '\n';
                          }

                          contents += cmdline;
                          _system_fs__WEBPACK_IMPORTED_MODULE_9__["default"].write(history, contents, session);
                        }

                        _context3.next = 19;
                        return ret;

                      case 19:
                        options.prompt = "".concat(session.env.USER, " ").concat(session.env.PWD.split('/').pop(), " ").concat(session.env.USER === 'root' ? '#' : '$');
                        _prompt.innerHTML = options.prompt;

                      case 21:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));
              return _executeCommand.apply(this, arguments);
            };

            executeCommand = function _ref11(_x3) {
              return _executeCommand.apply(this, arguments);
            };

            cmdLineIsVisible = function _ref10() {
              var parent = _cmdLine.parentElement;

              while (parent) {
                if ((parent.className || '').includes('active')) {
                  return true;
                }

                parent = parent.parentElement;
              }
            };

            _appendOutput = function _ref9() {
              var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

              _output.insertAdjacentHTML('beforeEnd', val);

              if (val && val.trim().substr(-1) !== '>') {
                _output.insertAdjacentHTML('beforeEnd', '<br/>');
              }

              _cmdLine.scrollIntoView();
            };

            _maybeAppendOutput2 = function _ref8() {
              _maybeAppendOutput2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
                var html,
                    _iteratorNormalCompletion,
                    _didIteratorError,
                    _iteratorError,
                    _iterator,
                    _step,
                    _value,
                    val,
                    _val,
                    _args2 = arguments;

                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        html = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : '';
                        _context2.prev = 1;

                        if (!((html[Symbol.asyncIterator] || html[Symbol.iterator]) && typeof html !== 'string')) {
                          _context2.next = 39;
                          break;
                        }

                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _context2.prev = 5;
                        _iterator = _babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_4___default()(html);

                      case 7:
                        _context2.next = 9;
                        return _iterator.next();

                      case 9:
                        _step = _context2.sent;
                        _iteratorNormalCompletion = _step.done;
                        _context2.next = 13;
                        return _step.value;

                      case 13:
                        _value = _context2.sent;

                        if (_iteratorNormalCompletion) {
                          _context2.next = 21;
                          break;
                        }

                        val = _value;
                        _context2.next = 18;
                        return _maybeAppendOutput(val);

                      case 18:
                        _iteratorNormalCompletion = true;
                        _context2.next = 7;
                        break;

                      case 21:
                        _context2.next = 27;
                        break;

                      case 23:
                        _context2.prev = 23;
                        _context2.t0 = _context2["catch"](5);
                        _didIteratorError = true;
                        _iteratorError = _context2.t0;

                      case 27:
                        _context2.prev = 27;
                        _context2.prev = 28;

                        if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
                          _context2.next = 32;
                          break;
                        }

                        _context2.next = 32;
                        return _iterator["return"]();

                      case 32:
                        _context2.prev = 32;

                        if (!_didIteratorError) {
                          _context2.next = 35;
                          break;
                        }

                        throw _iteratorError;

                      case 35:
                        return _context2.finish(32);

                      case 36:
                        return _context2.finish(27);

                      case 37:
                        _context2.next = 48;
                        break;

                      case 39:
                        if (!html.then) {
                          _context2.next = 47;
                          break;
                        }

                        _context2.next = 42;
                        return html;

                      case 42:
                        _val = _context2.sent;
                        _context2.next = 45;
                        return _maybeAppendOutput(_val);

                      case 45:
                        _context2.next = 48;
                        break;

                      case 47:
                        _appendOutput(html);

                      case 48:
                        _context2.next = 54;
                        break;

                      case 50:
                        _context2.prev = 50;
                        _context2.t1 = _context2["catch"](1);
                        console.error(_context2.t1);

                        _appendOutput(_context2.t1.message);

                      case 54:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[1, 50], [5, 23, 27, 37], [28,, 32, 36]]);
              }));
              return _maybeAppendOutput2.apply(this, arguments);
            };

            _maybeAppendOutput = function _ref7() {
              return _maybeAppendOutput2.apply(this, arguments);
            };

            _output2 = function _ref6() {
              _output2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                var html,
                    _args = arguments;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        html = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';

                        _prompt.classList.add('hidden');

                        _context.next = 4;
                        return _maybeAppendOutput(html);

                      case 4:
                        _prompt.classList.remove('hidden');

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
              return _output2.apply(this, arguments);
            };

            output = function _ref5() {
              return _output2.apply(this, arguments);
            };

            clear = function _ref4() {
              _output.innerHTML = '';
              _cmdLine.value = '';
              _background.style.minHeight = '';
            };

            onKeyDown = function _ref3(e) {
              if (cmdLineIsVisible()) {
                e.stopPropagation();
              }

              if (e.keyCode === KEYS.K && (e.ctrlKey || e.metaKey)) {
                return clear();
              }

              if (e.keyCode === KEYS.TAB) {
                return tabComplete();
              }

              if (e.keyCode === KEYS.ENTER) {
                var line = _cmdLine.value; // Clear/setup line for next input.

                _cmdLine.value = '';
                return executeCommand(line);
              }
            };

            historyHandler = function _ref2(e) {
              // Clear command-line on Escape key.
              if (e.keyCode === KEYS.ESCAPE) {
                _cmdLine.value = '';
                e.stopPropagation();
                e.preventDefault();
              }

              if (_history.length && (e.keyCode === KEYS.ARROW_UP || e.keyCode === KEYS.ARROW_DOWN)) {
                if (_history[_histpos]) {
                  _history[_histpos] = _cmdLine.value;
                } else {
                  _histtemp = _cmdLine.value;
                }

                if (e.keyCode === KEYS.ARROW_UP) {
                  _histpos--;

                  if (_histpos < 0) {
                    _histpos = 0;
                  }
                } else if (e.keyCode === KEYS.ARROW_DOWN) {
                  _histpos++;

                  if (_histpos > _history.length) {
                    _histpos = _history.length;
                  }
                }

                _cmdLine.value = _history[_histpos] ? _history[_histpos] : _histtemp; // Move cursor to end of input.

                _cmdLine.value = _cmdLine.value;
              }
            };

            inputTextClick = function _ref() {
              _cmdLine.value = _cmdLine.value;
            };

            if (container) {
              _context4.next = 15;
              break;
            }

            throw new Error('Container is required');

          case 15:
            defaults = {
              welcome: motd,
              theme: 'interlaced',
              commands: {},
              history: 'cli-history',
              user: 'alex'
            };
            options = options || _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, defaults);
            options.welcome = options.welcome || defaults.welcome;
            options.theme = options.theme || defaults.theme;
            options.commands = options.commands || defaults.commands;
            options.user = options.user || defaults.user;
            Object.keys(commands).forEach(function (key) {
              options.commands[key] = options.commands[key] || commands[key];
            });
            options.commands['/usr/bin/clear'] = {
              handler: clear
            };
            session = {
              env: {
                USER: 'root',
                TERM_PROGRAM: "".concat(_package_json__WEBPACK_IMPORTED_MODULE_8__.name, "@").concat(_package_json__WEBPACK_IMPORTED_MODULE_8__.version),
                SHELL: "/bin/".concat(_package_json__WEBPACK_IMPORTED_MODULE_8__.name),
                TERM: 'webterm',
                TMPDIR: '/tmp',
                PATH: '/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/opt/local/bin',
                PWD: '/root',
                HOME: '/root'
              },
              commands: options.commands,
              fs: _system_fs__WEBPACK_IMPORTED_MODULE_9__["default"]
            };
            _history = localStorage[options.history] ? JSON.parse(localStorage[options.history]) : [];
            _histpos = _history.length;
            _histtemp = ''; // Create terminal and cache DOM nodes

            _terminal = container;

            _terminal.classList.add('terminal');

            _terminal.classList.add('terminal-' + options.theme);

            _terminal.insertAdjacentHTML('beforeEnd', "\n  <div class=\"background\">\n    <div class=\"interlace\"></div>\n  </div>\n  <div class=\"container\">\n    <output></output>\n    <table class=\"input-line\">\n      <tr>\n        <td nowrap>\n          <div class=\"prompt\">".concat(options.prompt, "</div>\n        </td>\n        <td width=\"100%\">\n          <input class=\"cmdline\" spellcheck=\"false\" autofocus />\n        </td>\n      </tr>\n    </table>\n  </div>\n  "));

            _container = _terminal.querySelector('.container');
            _inputLine = _container.querySelector('.input-line');
            _cmdLine = _container.querySelector('.input-line .cmdline');
            _output = _container.querySelector('output');
            _prompt = _container.querySelector('.prompt');
            _background = document.querySelector('.background'); // Hackery to resize the interlace background image as the container grows.

            _output.addEventListener('DOMSubtreeModified', function (e) {
              // Works best with the scroll into view wrapped in a setTimeout.
              setTimeout(function () {
                _cmdLine.scrollIntoView();
              }, 0);
            }, false);

            _terminal.addEventListener('click', function (e) {
              _cmdLine.focus();
            }, false);

            _output.addEventListener('click', function (e) {
              e.stopPropagation();
            }, false); // Always force text cursor to end of input line.


            _cmdLine.addEventListener('click', inputTextClick, false);

            _inputLine.addEventListener('click', function (e) {
              _cmdLine.focus();
            }, false); // Handle up/down key presses for shell history and enter for new command.


            _cmdLine.addEventListener('keyup', historyHandler, false);

            _cmdLine.addEventListener('keydown', onKeyDown, true);

            api = {
              exec: function exec(line, opts) {
                return executeCommand(line, opts);
              },
              print: output
            };
            session.api = api;
            _context4.next = 48;
            return Object(_system_boot__WEBPACK_IMPORTED_MODULE_7__["default"])(session, options);

          case 48:
            _context4.next = 50;
            return output(options.welcome);

          case 50:
            return _context4.abrupt("return", api);

          case 51:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _createTerminal.apply(this, arguments);
}

/***/ }),

/***/ "./src/terminal.less":
/*!***************************!*\
  !*** ./src/terminal.less ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!../node_modules/less-loader/dist/cjs.js??ref--5-2!./terminal.less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./src/terminal.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: normalisePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalisePath", function() { return normalisePath; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);

function normalisePath(input, session) {
  var path = input;

  if (path.substring(0, 2) === '~/') {
    path = "".concat(session.env.HOME, "/").concat(path.substring(2));
  }

  if (path.substring(0, 1) !== '/') {
    path = "".concat(session.env.PWD, "/").concat(path);
  }

  path = path.replace(/\/+/g, '/');
  path = path.replace(/^\/+/g, '').replace(/\/+$/g, '');
  path = "/".concat(path);
  path = Object(path__WEBPACK_IMPORTED_MODULE_0__["resolve"])(path);
  return path;
}

/***/ })

/******/ });
});
//# sourceMappingURL=main.js.map