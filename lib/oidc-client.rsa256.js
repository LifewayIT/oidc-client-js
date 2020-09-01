(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Log = __webpack_require__(/*! ./src/Log.js */ "./src/Log.js");

var _OidcClient = __webpack_require__(/*! ./src/OidcClient.js */ "./src/OidcClient.js");

var _OidcClientSettings = __webpack_require__(/*! ./src/OidcClientSettings.js */ "./src/OidcClientSettings.js");

var _WebStorageStateStore = __webpack_require__(/*! ./src/WebStorageStateStore.js */ "./src/WebStorageStateStore.js");

var _InMemoryWebStorage = __webpack_require__(/*! ./src/InMemoryWebStorage.js */ "./src/InMemoryWebStorage.js");

var _UserManager = __webpack_require__(/*! ./src/UserManager.js */ "./src/UserManager.js");

var _AccessTokenEvents = __webpack_require__(/*! ./src/AccessTokenEvents.js */ "./src/AccessTokenEvents.js");

var _MetadataService = __webpack_require__(/*! ./src/MetadataService.js */ "./src/MetadataService.js");

var _CordovaPopupNavigator = __webpack_require__(/*! ./src/CordovaPopupNavigator.js */ "./src/CordovaPopupNavigator.js");

var _CordovaIFrameNavigator = __webpack_require__(/*! ./src/CordovaIFrameNavigator.js */ "./src/CordovaIFrameNavigator.js");

var _CheckSessionIFrame = __webpack_require__(/*! ./src/CheckSessionIFrame.js */ "./src/CheckSessionIFrame.js");

var _TokenRevocationClient = __webpack_require__(/*! ./src/TokenRevocationClient.js */ "./src/TokenRevocationClient.js");

var _SessionMonitor = __webpack_require__(/*! ./src/SessionMonitor.js */ "./src/SessionMonitor.js");

var _Global = __webpack_require__(/*! ./src/Global.js */ "./src/Global.js");

var _User = __webpack_require__(/*! ./src/User.js */ "./src/User.js");

var _version = __webpack_require__(/*! ./version.js */ "./version.js");

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

exports.default = {
    Version: _version.Version,
    Log: _Log.Log,
    OidcClient: _OidcClient.OidcClient,
    OidcClientSettings: _OidcClientSettings.OidcClientSettings,
    WebStorageStateStore: _WebStorageStateStore.WebStorageStateStore,
    InMemoryWebStorage: _InMemoryWebStorage.InMemoryWebStorage,
    UserManager: _UserManager.UserManager,
    AccessTokenEvents: _AccessTokenEvents.AccessTokenEvents,
    MetadataService: _MetadataService.MetadataService,
    CordovaPopupNavigator: _CordovaPopupNavigator.CordovaPopupNavigator,
    CordovaIFrameNavigator: _CordovaIFrameNavigator.CordovaIFrameNavigator,
    CheckSessionIFrame: _CheckSessionIFrame.CheckSessionIFrame,
    TokenRevocationClient: _TokenRevocationClient.TokenRevocationClient,
    SessionMonitor: _SessionMonitor.SessionMonitor,
    Global: _Global.Global,
    User: _User.User
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/crypto-js/core.js":
/*!****************************************!*\
  !*** ./node_modules/crypto-js/core.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {
	    /*
	     * Local polyfil of Object.create
	     */
	    var create = Object.create || (function () {
	        function F() {};

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }())

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var i = 0; i < thatSigBytes; i += 4) {
	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            var r = (function (m_w) {
	                var m_w = m_w;
	                var m_z = 0x3ade68b1;
	                var mask = 0xffffffff;

	                return function () {
	                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
	                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
	                    var result = ((m_z << 0x10) + m_w) & mask;
	                    result /= 0x100000000;
	                    result += 0.5;
	                    return result * (Math.random() > .5 ? 1 : -1);
	                }
	            });

	            for (var i = 0, rcache; i < nBytes; i += 4) {
	                var _r = r((rcache || Math.random()) * 0x100000000);

	                rcache = _r() * 0x3ade67b7;
	                words.push((_r() * 0x100000000) | 0);
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                var processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));

/***/ }),

/***/ "./node_modules/crypto-js/sha256.js":
/*!******************************************!*\
  !*** ./node_modules/crypto-js/sha256.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	return CryptoJS.SHA256;

}));

/***/ }),

/***/ "./node_modules/jsbn/index.js":
/*!************************************!*\
  !*** ./node_modules/jsbn/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){

    // Copyright (c) 2005  Tom Wu
    // All Rights Reserved.
    // See "LICENSE" for details.

    // Basic JavaScript BN library - subset useful for RSA encryption.

    // Bits per digit
    var dbits;

    // JavaScript engine analysis
    var canary = 0xdeadbeefcafe;
    var j_lm = ((canary&0xffffff)==0xefcafe);

    // (public) Constructor
    function BigInteger(a,b,c) {
      if(a != null)
        if("number" == typeof a) this.fromNumber(a,b,c);
        else if(b == null && "string" != typeof a) this.fromString(a,256);
        else this.fromString(a,b);
    }

    // return new, unset BigInteger
    function nbi() { return new BigInteger(null); }

    // am: Compute w_j += (x*this_i), propagate carries,
    // c is initial carry, returns final carry.
    // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
    // We need to select the fastest one that works in this environment.

    // am1: use a single mult and divide to get the high bits,
    // max digit bits should be 26 because
    // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
    function am1(i,x,w,j,c,n) {
      while(--n >= 0) {
        var v = x*this[i++]+w[j]+c;
        c = Math.floor(v/0x4000000);
        w[j++] = v&0x3ffffff;
      }
      return c;
    }
    // am2 avoids a big mult-and-extract completely.
    // Max digit bits should be <= 30 because we do bitwise ops
    // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
    function am2(i,x,w,j,c,n) {
      var xl = x&0x7fff, xh = x>>15;
      while(--n >= 0) {
        var l = this[i]&0x7fff;
        var h = this[i++]>>15;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
        c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
        w[j++] = l&0x3fffffff;
      }
      return c;
    }
    // Alternately, set max digit bits to 28 since some
    // browsers slow down when dealing with 32-bit numbers.
    function am3(i,x,w,j,c,n) {
      var xl = x&0x3fff, xh = x>>14;
      while(--n >= 0) {
        var l = this[i]&0x3fff;
        var h = this[i++]>>14;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x3fff)<<14)+w[j]+c;
        c = (l>>28)+(m>>14)+xh*h;
        w[j++] = l&0xfffffff;
      }
      return c;
    }
    var inBrowser = typeof navigator !== "undefined";
    if(inBrowser && j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
      BigInteger.prototype.am = am2;
      dbits = 30;
    }
    else if(inBrowser && j_lm && (navigator.appName != "Netscape")) {
      BigInteger.prototype.am = am1;
      dbits = 26;
    }
    else { // Mozilla/Netscape seems to prefer am3
      BigInteger.prototype.am = am3;
      dbits = 28;
    }

    BigInteger.prototype.DB = dbits;
    BigInteger.prototype.DM = ((1<<dbits)-1);
    BigInteger.prototype.DV = (1<<dbits);

    var BI_FP = 52;
    BigInteger.prototype.FV = Math.pow(2,BI_FP);
    BigInteger.prototype.F1 = BI_FP-dbits;
    BigInteger.prototype.F2 = 2*dbits-BI_FP;

    // Digit conversions
    var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
    var BI_RC = new Array();
    var rr,vv;
    rr = "0".charCodeAt(0);
    for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
    rr = "a".charCodeAt(0);
    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
    rr = "A".charCodeAt(0);
    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

    function int2char(n) { return BI_RM.charAt(n); }
    function intAt(s,i) {
      var c = BI_RC[s.charCodeAt(i)];
      return (c==null)?-1:c;
    }

    // (protected) copy this to r
    function bnpCopyTo(r) {
      for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
      r.t = this.t;
      r.s = this.s;
    }

    // (protected) set from integer value x, -DV <= x < DV
    function bnpFromInt(x) {
      this.t = 1;
      this.s = (x<0)?-1:0;
      if(x > 0) this[0] = x;
      else if(x < -1) this[0] = x+this.DV;
      else this.t = 0;
    }

    // return bigint initialized to value
    function nbv(i) { var r = nbi(); r.fromInt(i); return r; }

    // (protected) set from string and radix
    function bnpFromString(s,b) {
      var k;
      if(b == 16) k = 4;
      else if(b == 8) k = 3;
      else if(b == 256) k = 8; // byte array
      else if(b == 2) k = 1;
      else if(b == 32) k = 5;
      else if(b == 4) k = 2;
      else { this.fromRadix(s,b); return; }
      this.t = 0;
      this.s = 0;
      var i = s.length, mi = false, sh = 0;
      while(--i >= 0) {
        var x = (k==8)?s[i]&0xff:intAt(s,i);
        if(x < 0) {
          if(s.charAt(i) == "-") mi = true;
          continue;
        }
        mi = false;
        if(sh == 0)
          this[this.t++] = x;
        else if(sh+k > this.DB) {
          this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
          this[this.t++] = (x>>(this.DB-sh));
        }
        else
          this[this.t-1] |= x<<sh;
        sh += k;
        if(sh >= this.DB) sh -= this.DB;
      }
      if(k == 8 && (s[0]&0x80) != 0) {
        this.s = -1;
        if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
      }
      this.clamp();
      if(mi) BigInteger.ZERO.subTo(this,this);
    }

    // (protected) clamp off excess high words
    function bnpClamp() {
      var c = this.s&this.DM;
      while(this.t > 0 && this[this.t-1] == c) --this.t;
    }

    // (public) return string representation in given radix
    function bnToString(b) {
      if(this.s < 0) return "-"+this.negate().toString(b);
      var k;
      if(b == 16) k = 4;
      else if(b == 8) k = 3;
      else if(b == 2) k = 1;
      else if(b == 32) k = 5;
      else if(b == 4) k = 2;
      else return this.toRadix(b);
      var km = (1<<k)-1, d, m = false, r = "", i = this.t;
      var p = this.DB-(i*this.DB)%k;
      if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
        while(i >= 0) {
          if(p < k) {
            d = (this[i]&((1<<p)-1))<<(k-p);
            d |= this[--i]>>(p+=this.DB-k);
          }
          else {
            d = (this[i]>>(p-=k))&km;
            if(p <= 0) { p += this.DB; --i; }
          }
          if(d > 0) m = true;
          if(m) r += int2char(d);
        }
      }
      return m?r:"0";
    }

    // (public) -this
    function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }

    // (public) |this|
    function bnAbs() { return (this.s<0)?this.negate():this; }

    // (public) return + if this > a, - if this < a, 0 if equal
    function bnCompareTo(a) {
      var r = this.s-a.s;
      if(r != 0) return r;
      var i = this.t;
      r = i-a.t;
      if(r != 0) return (this.s<0)?-r:r;
      while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
      return 0;
    }

    // returns bit length of the integer x
    function nbits(x) {
      var r = 1, t;
      if((t=x>>>16) != 0) { x = t; r += 16; }
      if((t=x>>8) != 0) { x = t; r += 8; }
      if((t=x>>4) != 0) { x = t; r += 4; }
      if((t=x>>2) != 0) { x = t; r += 2; }
      if((t=x>>1) != 0) { x = t; r += 1; }
      return r;
    }

    // (public) return the number of bits in "this"
    function bnBitLength() {
      if(this.t <= 0) return 0;
      return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
    }

    // (protected) r = this << n*DB
    function bnpDLShiftTo(n,r) {
      var i;
      for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
      for(i = n-1; i >= 0; --i) r[i] = 0;
      r.t = this.t+n;
      r.s = this.s;
    }

    // (protected) r = this >> n*DB
    function bnpDRShiftTo(n,r) {
      for(var i = n; i < this.t; ++i) r[i-n] = this[i];
      r.t = Math.max(this.t-n,0);
      r.s = this.s;
    }

    // (protected) r = this << n
    function bnpLShiftTo(n,r) {
      var bs = n%this.DB;
      var cbs = this.DB-bs;
      var bm = (1<<cbs)-1;
      var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
      for(i = this.t-1; i >= 0; --i) {
        r[i+ds+1] = (this[i]>>cbs)|c;
        c = (this[i]&bm)<<bs;
      }
      for(i = ds-1; i >= 0; --i) r[i] = 0;
      r[ds] = c;
      r.t = this.t+ds+1;
      r.s = this.s;
      r.clamp();
    }

    // (protected) r = this >> n
    function bnpRShiftTo(n,r) {
      r.s = this.s;
      var ds = Math.floor(n/this.DB);
      if(ds >= this.t) { r.t = 0; return; }
      var bs = n%this.DB;
      var cbs = this.DB-bs;
      var bm = (1<<bs)-1;
      r[0] = this[ds]>>bs;
      for(var i = ds+1; i < this.t; ++i) {
        r[i-ds-1] |= (this[i]&bm)<<cbs;
        r[i-ds] = this[i]>>bs;
      }
      if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
      r.t = this.t-ds;
      r.clamp();
    }

    // (protected) r = this - a
    function bnpSubTo(a,r) {
      var i = 0, c = 0, m = Math.min(a.t,this.t);
      while(i < m) {
        c += this[i]-a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      if(a.t < this.t) {
        c -= a.s;
        while(i < this.t) {
          c += this[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += this.s;
      }
      else {
        c += this.s;
        while(i < a.t) {
          c -= a[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c -= a.s;
      }
      r.s = (c<0)?-1:0;
      if(c < -1) r[i++] = this.DV+c;
      else if(c > 0) r[i++] = c;
      r.t = i;
      r.clamp();
    }

    // (protected) r = this * a, r != this,a (HAC 14.12)
    // "this" should be the larger one if appropriate.
    function bnpMultiplyTo(a,r) {
      var x = this.abs(), y = a.abs();
      var i = x.t;
      r.t = i+y.t;
      while(--i >= 0) r[i] = 0;
      for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
      r.s = 0;
      r.clamp();
      if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
    }

    // (protected) r = this^2, r != this (HAC 14.16)
    function bnpSquareTo(r) {
      var x = this.abs();
      var i = r.t = 2*x.t;
      while(--i >= 0) r[i] = 0;
      for(i = 0; i < x.t-1; ++i) {
        var c = x.am(i,x[i],r,2*i,0,1);
        if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
          r[i+x.t] -= x.DV;
          r[i+x.t+1] = 1;
        }
      }
      if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
      r.s = 0;
      r.clamp();
    }

    // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
    // r != q, this != m.  q or r may be null.
    function bnpDivRemTo(m,q,r) {
      var pm = m.abs();
      if(pm.t <= 0) return;
      var pt = this.abs();
      if(pt.t < pm.t) {
        if(q != null) q.fromInt(0);
        if(r != null) this.copyTo(r);
        return;
      }
      if(r == null) r = nbi();
      var y = nbi(), ts = this.s, ms = m.s;
      var nsh = this.DB-nbits(pm[pm.t-1]);   // normalize modulus
      if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
      else { pm.copyTo(y); pt.copyTo(r); }
      var ys = y.t;
      var y0 = y[ys-1];
      if(y0 == 0) return;
      var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
      var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
      var i = r.t, j = i-ys, t = (q==null)?nbi():q;
      y.dlShiftTo(j,t);
      if(r.compareTo(t) >= 0) {
        r[r.t++] = 1;
        r.subTo(t,r);
      }
      BigInteger.ONE.dlShiftTo(ys,t);
      t.subTo(y,y);  // "negative" y so we can replace sub with am later
      while(y.t < ys) y[y.t++] = 0;
      while(--j >= 0) {
        // Estimate quotient digit
        var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
        if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {   // Try it out
          y.dlShiftTo(j,t);
          r.subTo(t,r);
          while(r[i] < --qd) r.subTo(t,r);
        }
      }
      if(q != null) {
        r.drShiftTo(ys,q);
        if(ts != ms) BigInteger.ZERO.subTo(q,q);
      }
      r.t = ys;
      r.clamp();
      if(nsh > 0) r.rShiftTo(nsh,r); // Denormalize remainder
      if(ts < 0) BigInteger.ZERO.subTo(r,r);
    }

    // (public) this mod a
    function bnMod(a) {
      var r = nbi();
      this.abs().divRemTo(a,null,r);
      if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
      return r;
    }

    // Modular reduction using "classic" algorithm
    function Classic(m) { this.m = m; }
    function cConvert(x) {
      if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
      else return x;
    }
    function cRevert(x) { return x; }
    function cReduce(x) { x.divRemTo(this.m,null,x); }
    function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
    function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    Classic.prototype.convert = cConvert;
    Classic.prototype.revert = cRevert;
    Classic.prototype.reduce = cReduce;
    Classic.prototype.mulTo = cMulTo;
    Classic.prototype.sqrTo = cSqrTo;

    // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
    // justification:
    //         xy == 1 (mod m)
    //         xy =  1+km
    //   xy(2-xy) = (1+km)(1-km)
    // x[y(2-xy)] = 1-k^2m^2
    // x[y(2-xy)] == 1 (mod m^2)
    // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
    // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
    // JS multiply "overflows" differently from C/C++, so care is needed here.
    function bnpInvDigit() {
      if(this.t < 1) return 0;
      var x = this[0];
      if((x&1) == 0) return 0;
      var y = x&3;       // y == 1/x mod 2^2
      y = (y*(2-(x&0xf)*y))&0xf; // y == 1/x mod 2^4
      y = (y*(2-(x&0xff)*y))&0xff;   // y == 1/x mod 2^8
      y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;    // y == 1/x mod 2^16
      // last step - calculate inverse mod DV directly;
      // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
      y = (y*(2-x*y%this.DV))%this.DV;       // y == 1/x mod 2^dbits
      // we really want the negative inverse, and -DV < y < DV
      return (y>0)?this.DV-y:-y;
    }

    // Montgomery reduction
    function Montgomery(m) {
      this.m = m;
      this.mp = m.invDigit();
      this.mpl = this.mp&0x7fff;
      this.mph = this.mp>>15;
      this.um = (1<<(m.DB-15))-1;
      this.mt2 = 2*m.t;
    }

    // xR mod m
    function montConvert(x) {
      var r = nbi();
      x.abs().dlShiftTo(this.m.t,r);
      r.divRemTo(this.m,null,r);
      if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
      return r;
    }

    // x/R mod m
    function montRevert(x) {
      var r = nbi();
      x.copyTo(r);
      this.reduce(r);
      return r;
    }

    // x = x/R mod m (HAC 14.32)
    function montReduce(x) {
      while(x.t <= this.mt2) // pad x so am has enough room later
        x[x.t++] = 0;
      for(var i = 0; i < this.m.t; ++i) {
        // faster way of calculating u0 = x[i]*mp mod DV
        var j = x[i]&0x7fff;
        var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
        // use am to combine the multiply-shift-add into one call
        j = i+this.m.t;
        x[j] += this.m.am(0,u0,x,i,0,this.m.t);
        // propagate carry
        while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
      }
      x.clamp();
      x.drShiftTo(this.m.t,x);
      if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
    }

    // r = "x^2/R mod m"; x != r
    function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    // r = "xy/R mod m"; x,y != r
    function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

    Montgomery.prototype.convert = montConvert;
    Montgomery.prototype.revert = montRevert;
    Montgomery.prototype.reduce = montReduce;
    Montgomery.prototype.mulTo = montMulTo;
    Montgomery.prototype.sqrTo = montSqrTo;

    // (protected) true iff this is even
    function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }

    // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
    function bnpExp(e,z) {
      if(e > 0xffffffff || e < 1) return BigInteger.ONE;
      var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
      g.copyTo(r);
      while(--i >= 0) {
        z.sqrTo(r,r2);
        if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
        else { var t = r; r = r2; r2 = t; }
      }
      return z.revert(r);
    }

    // (public) this^e % m, 0 <= e < 2^32
    function bnModPowInt(e,m) {
      var z;
      if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
      return this.exp(e,z);
    }

    // protected
    BigInteger.prototype.copyTo = bnpCopyTo;
    BigInteger.prototype.fromInt = bnpFromInt;
    BigInteger.prototype.fromString = bnpFromString;
    BigInteger.prototype.clamp = bnpClamp;
    BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
    BigInteger.prototype.drShiftTo = bnpDRShiftTo;
    BigInteger.prototype.lShiftTo = bnpLShiftTo;
    BigInteger.prototype.rShiftTo = bnpRShiftTo;
    BigInteger.prototype.subTo = bnpSubTo;
    BigInteger.prototype.multiplyTo = bnpMultiplyTo;
    BigInteger.prototype.squareTo = bnpSquareTo;
    BigInteger.prototype.divRemTo = bnpDivRemTo;
    BigInteger.prototype.invDigit = bnpInvDigit;
    BigInteger.prototype.isEven = bnpIsEven;
    BigInteger.prototype.exp = bnpExp;

    // public
    BigInteger.prototype.toString = bnToString;
    BigInteger.prototype.negate = bnNegate;
    BigInteger.prototype.abs = bnAbs;
    BigInteger.prototype.compareTo = bnCompareTo;
    BigInteger.prototype.bitLength = bnBitLength;
    BigInteger.prototype.mod = bnMod;
    BigInteger.prototype.modPowInt = bnModPowInt;

    // "constants"
    BigInteger.ZERO = nbv(0);
    BigInteger.ONE = nbv(1);

    // Copyright (c) 2005-2009  Tom Wu
    // All Rights Reserved.
    // See "LICENSE" for details.

    // Extended JavaScript BN functions, required for RSA private ops.

    // Version 1.1: new BigInteger("0", 10) returns "proper" zero
    // Version 1.2: square() API, isProbablePrime fix

    // (public)
    function bnClone() { var r = nbi(); this.copyTo(r); return r; }

    // (public) return value as integer
    function bnIntValue() {
      if(this.s < 0) {
        if(this.t == 1) return this[0]-this.DV;
        else if(this.t == 0) return -1;
      }
      else if(this.t == 1) return this[0];
      else if(this.t == 0) return 0;
      // assumes 16 < DB < 32
      return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
    }

    // (public) return value as byte
    function bnByteValue() { return (this.t==0)?this.s:(this[0]<<24)>>24; }

    // (public) return value as short (assumes DB>=16)
    function bnShortValue() { return (this.t==0)?this.s:(this[0]<<16)>>16; }

    // (protected) return x s.t. r^x < DV
    function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }

    // (public) 0 if this == 0, 1 if this > 0
    function bnSigNum() {
      if(this.s < 0) return -1;
      else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
      else return 1;
    }

    // (protected) convert to radix string
    function bnpToRadix(b) {
      if(b == null) b = 10;
      if(this.signum() == 0 || b < 2 || b > 36) return "0";
      var cs = this.chunkSize(b);
      var a = Math.pow(b,cs);
      var d = nbv(a), y = nbi(), z = nbi(), r = "";
      this.divRemTo(d,y,z);
      while(y.signum() > 0) {
        r = (a+z.intValue()).toString(b).substr(1) + r;
        y.divRemTo(d,y,z);
      }
      return z.intValue().toString(b) + r;
    }

    // (protected) convert from radix string
    function bnpFromRadix(s,b) {
      this.fromInt(0);
      if(b == null) b = 10;
      var cs = this.chunkSize(b);
      var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
      for(var i = 0; i < s.length; ++i) {
        var x = intAt(s,i);
        if(x < 0) {
          if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
          continue;
        }
        w = b*w+x;
        if(++j >= cs) {
          this.dMultiply(d);
          this.dAddOffset(w,0);
          j = 0;
          w = 0;
        }
      }
      if(j > 0) {
        this.dMultiply(Math.pow(b,j));
        this.dAddOffset(w,0);
      }
      if(mi) BigInteger.ZERO.subTo(this,this);
    }

    // (protected) alternate constructor
    function bnpFromNumber(a,b,c) {
      if("number" == typeof b) {
        // new BigInteger(int,int,RNG)
        if(a < 2) this.fromInt(1);
        else {
          this.fromNumber(a,c);
          if(!this.testBit(a-1))    // force MSB set
            this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this);
          if(this.isEven()) this.dAddOffset(1,0); // force odd
          while(!this.isProbablePrime(b)) {
            this.dAddOffset(2,0);
            if(this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a-1),this);
          }
        }
      }
      else {
        // new BigInteger(int,RNG)
        var x = new Array(), t = a&7;
        x.length = (a>>3)+1;
        b.nextBytes(x);
        if(t > 0) x[0] &= ((1<<t)-1); else x[0] = 0;
        this.fromString(x,256);
      }
    }

    // (public) convert to bigendian byte array
    function bnToByteArray() {
      var i = this.t, r = new Array();
      r[0] = this.s;
      var p = this.DB-(i*this.DB)%8, d, k = 0;
      if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) != (this.s&this.DM)>>p)
          r[k++] = d|(this.s<<(this.DB-p));
        while(i >= 0) {
          if(p < 8) {
            d = (this[i]&((1<<p)-1))<<(8-p);
            d |= this[--i]>>(p+=this.DB-8);
          }
          else {
            d = (this[i]>>(p-=8))&0xff;
            if(p <= 0) { p += this.DB; --i; }
          }
          if((d&0x80) != 0) d |= -256;
          if(k == 0 && (this.s&0x80) != (d&0x80)) ++k;
          if(k > 0 || d != this.s) r[k++] = d;
        }
      }
      return r;
    }

    function bnEquals(a) { return(this.compareTo(a)==0); }
    function bnMin(a) { return(this.compareTo(a)<0)?this:a; }
    function bnMax(a) { return(this.compareTo(a)>0)?this:a; }

    // (protected) r = this op a (bitwise)
    function bnpBitwiseTo(a,op,r) {
      var i, f, m = Math.min(a.t,this.t);
      for(i = 0; i < m; ++i) r[i] = op(this[i],a[i]);
      if(a.t < this.t) {
        f = a.s&this.DM;
        for(i = m; i < this.t; ++i) r[i] = op(this[i],f);
        r.t = this.t;
      }
      else {
        f = this.s&this.DM;
        for(i = m; i < a.t; ++i) r[i] = op(f,a[i]);
        r.t = a.t;
      }
      r.s = op(this.s,a.s);
      r.clamp();
    }

    // (public) this & a
    function op_and(x,y) { return x&y; }
    function bnAnd(a) { var r = nbi(); this.bitwiseTo(a,op_and,r); return r; }

    // (public) this | a
    function op_or(x,y) { return x|y; }
    function bnOr(a) { var r = nbi(); this.bitwiseTo(a,op_or,r); return r; }

    // (public) this ^ a
    function op_xor(x,y) { return x^y; }
    function bnXor(a) { var r = nbi(); this.bitwiseTo(a,op_xor,r); return r; }

    // (public) this & ~a
    function op_andnot(x,y) { return x&~y; }
    function bnAndNot(a) { var r = nbi(); this.bitwiseTo(a,op_andnot,r); return r; }

    // (public) ~this
    function bnNot() {
      var r = nbi();
      for(var i = 0; i < this.t; ++i) r[i] = this.DM&~this[i];
      r.t = this.t;
      r.s = ~this.s;
      return r;
    }

    // (public) this << n
    function bnShiftLeft(n) {
      var r = nbi();
      if(n < 0) this.rShiftTo(-n,r); else this.lShiftTo(n,r);
      return r;
    }

    // (public) this >> n
    function bnShiftRight(n) {
      var r = nbi();
      if(n < 0) this.lShiftTo(-n,r); else this.rShiftTo(n,r);
      return r;
    }

    // return index of lowest 1-bit in x, x < 2^31
    function lbit(x) {
      if(x == 0) return -1;
      var r = 0;
      if((x&0xffff) == 0) { x >>= 16; r += 16; }
      if((x&0xff) == 0) { x >>= 8; r += 8; }
      if((x&0xf) == 0) { x >>= 4; r += 4; }
      if((x&3) == 0) { x >>= 2; r += 2; }
      if((x&1) == 0) ++r;
      return r;
    }

    // (public) returns index of lowest 1-bit (or -1 if none)
    function bnGetLowestSetBit() {
      for(var i = 0; i < this.t; ++i)
        if(this[i] != 0) return i*this.DB+lbit(this[i]);
      if(this.s < 0) return this.t*this.DB;
      return -1;
    }

    // return number of 1 bits in x
    function cbit(x) {
      var r = 0;
      while(x != 0) { x &= x-1; ++r; }
      return r;
    }

    // (public) return number of set bits
    function bnBitCount() {
      var r = 0, x = this.s&this.DM;
      for(var i = 0; i < this.t; ++i) r += cbit(this[i]^x);
      return r;
    }

    // (public) true iff nth bit is set
    function bnTestBit(n) {
      var j = Math.floor(n/this.DB);
      if(j >= this.t) return(this.s!=0);
      return((this[j]&(1<<(n%this.DB)))!=0);
    }

    // (protected) this op (1<<n)
    function bnpChangeBit(n,op) {
      var r = BigInteger.ONE.shiftLeft(n);
      this.bitwiseTo(r,op,r);
      return r;
    }

    // (public) this | (1<<n)
    function bnSetBit(n) { return this.changeBit(n,op_or); }

    // (public) this & ~(1<<n)
    function bnClearBit(n) { return this.changeBit(n,op_andnot); }

    // (public) this ^ (1<<n)
    function bnFlipBit(n) { return this.changeBit(n,op_xor); }

    // (protected) r = this + a
    function bnpAddTo(a,r) {
      var i = 0, c = 0, m = Math.min(a.t,this.t);
      while(i < m) {
        c += this[i]+a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      if(a.t < this.t) {
        c += a.s;
        while(i < this.t) {
          c += this[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += this.s;
      }
      else {
        c += this.s;
        while(i < a.t) {
          c += a[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += a.s;
      }
      r.s = (c<0)?-1:0;
      if(c > 0) r[i++] = c;
      else if(c < -1) r[i++] = this.DV+c;
      r.t = i;
      r.clamp();
    }

    // (public) this + a
    function bnAdd(a) { var r = nbi(); this.addTo(a,r); return r; }

    // (public) this - a
    function bnSubtract(a) { var r = nbi(); this.subTo(a,r); return r; }

    // (public) this * a
    function bnMultiply(a) { var r = nbi(); this.multiplyTo(a,r); return r; }

    // (public) this^2
    function bnSquare() { var r = nbi(); this.squareTo(r); return r; }

    // (public) this / a
    function bnDivide(a) { var r = nbi(); this.divRemTo(a,r,null); return r; }

    // (public) this % a
    function bnRemainder(a) { var r = nbi(); this.divRemTo(a,null,r); return r; }

    // (public) [this/a,this%a]
    function bnDivideAndRemainder(a) {
      var q = nbi(), r = nbi();
      this.divRemTo(a,q,r);
      return new Array(q,r);
    }

    // (protected) this *= n, this >= 0, 1 < n < DV
    function bnpDMultiply(n) {
      this[this.t] = this.am(0,n-1,this,0,0,this.t);
      ++this.t;
      this.clamp();
    }

    // (protected) this += n << w words, this >= 0
    function bnpDAddOffset(n,w) {
      if(n == 0) return;
      while(this.t <= w) this[this.t++] = 0;
      this[w] += n;
      while(this[w] >= this.DV) {
        this[w] -= this.DV;
        if(++w >= this.t) this[this.t++] = 0;
        ++this[w];
      }
    }

    // A "null" reducer
    function NullExp() {}
    function nNop(x) { return x; }
    function nMulTo(x,y,r) { x.multiplyTo(y,r); }
    function nSqrTo(x,r) { x.squareTo(r); }

    NullExp.prototype.convert = nNop;
    NullExp.prototype.revert = nNop;
    NullExp.prototype.mulTo = nMulTo;
    NullExp.prototype.sqrTo = nSqrTo;

    // (public) this^e
    function bnPow(e) { return this.exp(e,new NullExp()); }

    // (protected) r = lower n words of "this * a", a.t <= n
    // "this" should be the larger one if appropriate.
    function bnpMultiplyLowerTo(a,n,r) {
      var i = Math.min(this.t+a.t,n);
      r.s = 0; // assumes a,this >= 0
      r.t = i;
      while(i > 0) r[--i] = 0;
      var j;
      for(j = r.t-this.t; i < j; ++i) r[i+this.t] = this.am(0,a[i],r,i,0,this.t);
      for(j = Math.min(a.t,n); i < j; ++i) this.am(0,a[i],r,i,0,n-i);
      r.clamp();
    }

    // (protected) r = "this * a" without lower n words, n > 0
    // "this" should be the larger one if appropriate.
    function bnpMultiplyUpperTo(a,n,r) {
      --n;
      var i = r.t = this.t+a.t-n;
      r.s = 0; // assumes a,this >= 0
      while(--i >= 0) r[i] = 0;
      for(i = Math.max(n-this.t,0); i < a.t; ++i)
        r[this.t+i-n] = this.am(n-i,a[i],r,0,0,this.t+i-n);
      r.clamp();
      r.drShiftTo(1,r);
    }

    // Barrett modular reduction
    function Barrett(m) {
      // setup Barrett
      this.r2 = nbi();
      this.q3 = nbi();
      BigInteger.ONE.dlShiftTo(2*m.t,this.r2);
      this.mu = this.r2.divide(m);
      this.m = m;
    }

    function barrettConvert(x) {
      if(x.s < 0 || x.t > 2*this.m.t) return x.mod(this.m);
      else if(x.compareTo(this.m) < 0) return x;
      else { var r = nbi(); x.copyTo(r); this.reduce(r); return r; }
    }

    function barrettRevert(x) { return x; }

    // x = x mod m (HAC 14.42)
    function barrettReduce(x) {
      x.drShiftTo(this.m.t-1,this.r2);
      if(x.t > this.m.t+1) { x.t = this.m.t+1; x.clamp(); }
      this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);
      this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);
      while(x.compareTo(this.r2) < 0) x.dAddOffset(1,this.m.t+1);
      x.subTo(this.r2,x);
      while(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
    }

    // r = x^2 mod m; x != r
    function barrettSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    // r = x*y mod m; x,y != r
    function barrettMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

    Barrett.prototype.convert = barrettConvert;
    Barrett.prototype.revert = barrettRevert;
    Barrett.prototype.reduce = barrettReduce;
    Barrett.prototype.mulTo = barrettMulTo;
    Barrett.prototype.sqrTo = barrettSqrTo;

    // (public) this^e % m (HAC 14.85)
    function bnModPow(e,m) {
      var i = e.bitLength(), k, r = nbv(1), z;
      if(i <= 0) return r;
      else if(i < 18) k = 1;
      else if(i < 48) k = 3;
      else if(i < 144) k = 4;
      else if(i < 768) k = 5;
      else k = 6;
      if(i < 8)
        z = new Classic(m);
      else if(m.isEven())
        z = new Barrett(m);
      else
        z = new Montgomery(m);

      // precomputation
      var g = new Array(), n = 3, k1 = k-1, km = (1<<k)-1;
      g[1] = z.convert(this);
      if(k > 1) {
        var g2 = nbi();
        z.sqrTo(g[1],g2);
        while(n <= km) {
          g[n] = nbi();
          z.mulTo(g2,g[n-2],g[n]);
          n += 2;
        }
      }

      var j = e.t-1, w, is1 = true, r2 = nbi(), t;
      i = nbits(e[j])-1;
      while(j >= 0) {
        if(i >= k1) w = (e[j]>>(i-k1))&km;
        else {
          w = (e[j]&((1<<(i+1))-1))<<(k1-i);
          if(j > 0) w |= e[j-1]>>(this.DB+i-k1);
        }

        n = k;
        while((w&1) == 0) { w >>= 1; --n; }
        if((i -= n) < 0) { i += this.DB; --j; }
        if(is1) {    // ret == 1, don't bother squaring or multiplying it
          g[w].copyTo(r);
          is1 = false;
        }
        else {
          while(n > 1) { z.sqrTo(r,r2); z.sqrTo(r2,r); n -= 2; }
          if(n > 0) z.sqrTo(r,r2); else { t = r; r = r2; r2 = t; }
          z.mulTo(r2,g[w],r);
        }

        while(j >= 0 && (e[j]&(1<<i)) == 0) {
          z.sqrTo(r,r2); t = r; r = r2; r2 = t;
          if(--i < 0) { i = this.DB-1; --j; }
        }
      }
      return z.revert(r);
    }

    // (public) gcd(this,a) (HAC 14.54)
    function bnGCD(a) {
      var x = (this.s<0)?this.negate():this.clone();
      var y = (a.s<0)?a.negate():a.clone();
      if(x.compareTo(y) < 0) { var t = x; x = y; y = t; }
      var i = x.getLowestSetBit(), g = y.getLowestSetBit();
      if(g < 0) return x;
      if(i < g) g = i;
      if(g > 0) {
        x.rShiftTo(g,x);
        y.rShiftTo(g,y);
      }
      while(x.signum() > 0) {
        if((i = x.getLowestSetBit()) > 0) x.rShiftTo(i,x);
        if((i = y.getLowestSetBit()) > 0) y.rShiftTo(i,y);
        if(x.compareTo(y) >= 0) {
          x.subTo(y,x);
          x.rShiftTo(1,x);
        }
        else {
          y.subTo(x,y);
          y.rShiftTo(1,y);
        }
      }
      if(g > 0) y.lShiftTo(g,y);
      return y;
    }

    // (protected) this % n, n < 2^26
    function bnpModInt(n) {
      if(n <= 0) return 0;
      var d = this.DV%n, r = (this.s<0)?n-1:0;
      if(this.t > 0)
        if(d == 0) r = this[0]%n;
        else for(var i = this.t-1; i >= 0; --i) r = (d*r+this[i])%n;
      return r;
    }

    // (public) 1/this % m (HAC 14.61)
    function bnModInverse(m) {
      var ac = m.isEven();
      if((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO;
      var u = m.clone(), v = this.clone();
      var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
      while(u.signum() != 0) {
        while(u.isEven()) {
          u.rShiftTo(1,u);
          if(ac) {
            if(!a.isEven() || !b.isEven()) { a.addTo(this,a); b.subTo(m,b); }
            a.rShiftTo(1,a);
          }
          else if(!b.isEven()) b.subTo(m,b);
          b.rShiftTo(1,b);
        }
        while(v.isEven()) {
          v.rShiftTo(1,v);
          if(ac) {
            if(!c.isEven() || !d.isEven()) { c.addTo(this,c); d.subTo(m,d); }
            c.rShiftTo(1,c);
          }
          else if(!d.isEven()) d.subTo(m,d);
          d.rShiftTo(1,d);
        }
        if(u.compareTo(v) >= 0) {
          u.subTo(v,u);
          if(ac) a.subTo(c,a);
          b.subTo(d,b);
        }
        else {
          v.subTo(u,v);
          if(ac) c.subTo(a,c);
          d.subTo(b,d);
        }
      }
      if(v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
      if(d.compareTo(m) >= 0) return d.subtract(m);
      if(d.signum() < 0) d.addTo(m,d); else return d;
      if(d.signum() < 0) return d.add(m); else return d;
    }

    var lowprimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];
    var lplim = (1<<26)/lowprimes[lowprimes.length-1];

    // (public) test primality with certainty >= 1-.5^t
    function bnIsProbablePrime(t) {
      var i, x = this.abs();
      if(x.t == 1 && x[0] <= lowprimes[lowprimes.length-1]) {
        for(i = 0; i < lowprimes.length; ++i)
          if(x[0] == lowprimes[i]) return true;
        return false;
      }
      if(x.isEven()) return false;
      i = 1;
      while(i < lowprimes.length) {
        var m = lowprimes[i], j = i+1;
        while(j < lowprimes.length && m < lplim) m *= lowprimes[j++];
        m = x.modInt(m);
        while(i < j) if(m%lowprimes[i++] == 0) return false;
      }
      return x.millerRabin(t);
    }

    // (protected) true if probably prime (HAC 4.24, Miller-Rabin)
    function bnpMillerRabin(t) {
      var n1 = this.subtract(BigInteger.ONE);
      var k = n1.getLowestSetBit();
      if(k <= 0) return false;
      var r = n1.shiftRight(k);
      t = (t+1)>>1;
      if(t > lowprimes.length) t = lowprimes.length;
      var a = nbi();
      for(var i = 0; i < t; ++i) {
        //Pick bases at random, instead of starting at 2
        a.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);
        var y = a.modPow(r,this);
        if(y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
          var j = 1;
          while(j++ < k && y.compareTo(n1) != 0) {
            y = y.modPowInt(2,this);
            if(y.compareTo(BigInteger.ONE) == 0) return false;
          }
          if(y.compareTo(n1) != 0) return false;
        }
      }
      return true;
    }

    // protected
    BigInteger.prototype.chunkSize = bnpChunkSize;
    BigInteger.prototype.toRadix = bnpToRadix;
    BigInteger.prototype.fromRadix = bnpFromRadix;
    BigInteger.prototype.fromNumber = bnpFromNumber;
    BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
    BigInteger.prototype.changeBit = bnpChangeBit;
    BigInteger.prototype.addTo = bnpAddTo;
    BigInteger.prototype.dMultiply = bnpDMultiply;
    BigInteger.prototype.dAddOffset = bnpDAddOffset;
    BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
    BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
    BigInteger.prototype.modInt = bnpModInt;
    BigInteger.prototype.millerRabin = bnpMillerRabin;

    // public
    BigInteger.prototype.clone = bnClone;
    BigInteger.prototype.intValue = bnIntValue;
    BigInteger.prototype.byteValue = bnByteValue;
    BigInteger.prototype.shortValue = bnShortValue;
    BigInteger.prototype.signum = bnSigNum;
    BigInteger.prototype.toByteArray = bnToByteArray;
    BigInteger.prototype.equals = bnEquals;
    BigInteger.prototype.min = bnMin;
    BigInteger.prototype.max = bnMax;
    BigInteger.prototype.and = bnAnd;
    BigInteger.prototype.or = bnOr;
    BigInteger.prototype.xor = bnXor;
    BigInteger.prototype.andNot = bnAndNot;
    BigInteger.prototype.not = bnNot;
    BigInteger.prototype.shiftLeft = bnShiftLeft;
    BigInteger.prototype.shiftRight = bnShiftRight;
    BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
    BigInteger.prototype.bitCount = bnBitCount;
    BigInteger.prototype.testBit = bnTestBit;
    BigInteger.prototype.setBit = bnSetBit;
    BigInteger.prototype.clearBit = bnClearBit;
    BigInteger.prototype.flipBit = bnFlipBit;
    BigInteger.prototype.add = bnAdd;
    BigInteger.prototype.subtract = bnSubtract;
    BigInteger.prototype.multiply = bnMultiply;
    BigInteger.prototype.divide = bnDivide;
    BigInteger.prototype.remainder = bnRemainder;
    BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
    BigInteger.prototype.modPow = bnModPow;
    BigInteger.prototype.modInverse = bnModInverse;
    BigInteger.prototype.pow = bnPow;
    BigInteger.prototype.gcd = bnGCD;
    BigInteger.prototype.isProbablePrime = bnIsProbablePrime;

    // JSBN-specific extension
    BigInteger.prototype.square = bnSquare;

    // Expose the Barrett function
    BigInteger.prototype.Barrett = Barrett

    // BigInteger interfaces not implemented in jsbn:

    // BigInteger(int signum, byte[] magnitude)
    // double doubleValue()
    // float floatValue()
    // int hashCode()
    // long longValue()
    // static BigInteger valueOf(long val)

    // Random number generator - requires a PRNG backend, e.g. prng4.js

    // For best results, put code like
    // <body onClick='rng_seed_time();' onKeyPress='rng_seed_time();'>
    // in your main HTML document.

    var rng_state;
    var rng_pool;
    var rng_pptr;

    // Mix in a 32-bit integer into the pool
    function rng_seed_int(x) {
      rng_pool[rng_pptr++] ^= x & 255;
      rng_pool[rng_pptr++] ^= (x >> 8) & 255;
      rng_pool[rng_pptr++] ^= (x >> 16) & 255;
      rng_pool[rng_pptr++] ^= (x >> 24) & 255;
      if(rng_pptr >= rng_psize) rng_pptr -= rng_psize;
    }

    // Mix in the current time (w/milliseconds) into the pool
    function rng_seed_time() {
      rng_seed_int(new Date().getTime());
    }

    // Initialize the pool with junk if needed.
    if(rng_pool == null) {
      rng_pool = new Array();
      rng_pptr = 0;
      var t;
      if(typeof window !== "undefined" && window.crypto) {
        if (window.crypto.getRandomValues) {
          // Use webcrypto if available
          var ua = new Uint8Array(32);
          window.crypto.getRandomValues(ua);
          for(t = 0; t < 32; ++t)
            rng_pool[rng_pptr++] = ua[t];
        }
        else if(navigator.appName == "Netscape" && navigator.appVersion < "5") {
          // Extract entropy (256 bits) from NS4 RNG if available
          var z = window.crypto.random(32);
          for(t = 0; t < z.length; ++t)
            rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
        }
      }
      while(rng_pptr < rng_psize) {  // extract some randomness from Math.random()
        t = Math.floor(65536 * Math.random());
        rng_pool[rng_pptr++] = t >>> 8;
        rng_pool[rng_pptr++] = t & 255;
      }
      rng_pptr = 0;
      rng_seed_time();
      //rng_seed_int(window.screenX);
      //rng_seed_int(window.screenY);
    }

    function rng_get_byte() {
      if(rng_state == null) {
        rng_seed_time();
        rng_state = prng_newstate();
        rng_state.init(rng_pool);
        for(rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
          rng_pool[rng_pptr] = 0;
        rng_pptr = 0;
        //rng_pool = null;
      }
      // TODO: allow reseeding after first request
      return rng_state.next();
    }

    function rng_get_bytes(ba) {
      var i;
      for(i = 0; i < ba.length; ++i) ba[i] = rng_get_byte();
    }

    function SecureRandom() {}

    SecureRandom.prototype.nextBytes = rng_get_bytes;

    // prng4.js - uses Arcfour as a PRNG

    function Arcfour() {
      this.i = 0;
      this.j = 0;
      this.S = new Array();
    }

    // Initialize arcfour context from key, an array of ints, each from [0..255]
    function ARC4init(key) {
      var i, j, t;
      for(i = 0; i < 256; ++i)
        this.S[i] = i;
      j = 0;
      for(i = 0; i < 256; ++i) {
        j = (j + this.S[i] + key[i % key.length]) & 255;
        t = this.S[i];
        this.S[i] = this.S[j];
        this.S[j] = t;
      }
      this.i = 0;
      this.j = 0;
    }

    function ARC4next() {
      var t;
      this.i = (this.i + 1) & 255;
      this.j = (this.j + this.S[this.i]) & 255;
      t = this.S[this.i];
      this.S[this.i] = this.S[this.j];
      this.S[this.j] = t;
      return this.S[(t + this.S[this.i]) & 255];
    }

    Arcfour.prototype.init = ARC4init;
    Arcfour.prototype.next = ARC4next;

    // Plug in your RNG constructor here
    function prng_newstate() {
      return new Arcfour();
    }

    // Pool size must be a multiple of 4 and greater than 32.
    // An array of bytes the size of the pool will be passed to init()
    var rng_psize = 256;

    if (true) {
        exports = module.exports = {
            default: BigInteger,
            BigInteger: BigInteger,
            SecureRandom: SecureRandom,
        };
    } else {}

}).call(this);


/***/ }),

/***/ "./src/AccessTokenEvents.js":
/*!**********************************!*\
  !*** ./src/AccessTokenEvents.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AccessTokenEvents = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Timer = __webpack_require__(/*! ./Timer.js */ "./src/Timer.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var DefaultAccessTokenExpiringNotificationTime = 60; // seconds

var AccessTokenEvents = exports.AccessTokenEvents = function () {
    function AccessTokenEvents() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$accessTokenExpir = _ref.accessTokenExpiringNotificationTime,
            accessTokenExpiringNotificationTime = _ref$accessTokenExpir === undefined ? DefaultAccessTokenExpiringNotificationTime : _ref$accessTokenExpir,
            _ref$accessTokenExpir2 = _ref.accessTokenExpiringTimer,
            accessTokenExpiringTimer = _ref$accessTokenExpir2 === undefined ? new _Timer.Timer("Access token expiring") : _ref$accessTokenExpir2,
            _ref$accessTokenExpir3 = _ref.accessTokenExpiredTimer,
            accessTokenExpiredTimer = _ref$accessTokenExpir3 === undefined ? new _Timer.Timer("Access token expired") : _ref$accessTokenExpir3;

        _classCallCheck(this, AccessTokenEvents);

        this._accessTokenExpiringNotificationTime = accessTokenExpiringNotificationTime;

        this._accessTokenExpiring = accessTokenExpiringTimer;
        this._accessTokenExpired = accessTokenExpiredTimer;
    }

    AccessTokenEvents.prototype.load = function load(container) {
        // only register events if there's an access token and it has an expiration
        if (container.access_token && container.expires_in !== undefined) {
            var duration = container.expires_in;
            _Log.Log.debug("AccessTokenEvents.load: access token present, remaining duration:", duration);

            if (duration > 0) {
                // only register expiring if we still have time
                var expiring = duration - this._accessTokenExpiringNotificationTime;
                if (expiring <= 0) {
                    expiring = 1;
                }

                _Log.Log.debug("AccessTokenEvents.load: registering expiring timer in:", expiring);
                this._accessTokenExpiring.init(expiring);
            } else {
                _Log.Log.debug("AccessTokenEvents.load: canceling existing expiring timer becase we're past expiration.");
                this._accessTokenExpiring.cancel();
            }

            // if it's negative, it will still fire
            var expired = duration + 1;
            _Log.Log.debug("AccessTokenEvents.load: registering expired timer in:", expired);
            this._accessTokenExpired.init(expired);
        } else {
            this._accessTokenExpiring.cancel();
            this._accessTokenExpired.cancel();
        }
    };

    AccessTokenEvents.prototype.unload = function unload() {
        _Log.Log.debug("AccessTokenEvents.unload: canceling existing access token timers");
        this._accessTokenExpiring.cancel();
        this._accessTokenExpired.cancel();
    };

    AccessTokenEvents.prototype.addAccessTokenExpiring = function addAccessTokenExpiring(cb) {
        this._accessTokenExpiring.addHandler(cb);
    };

    AccessTokenEvents.prototype.removeAccessTokenExpiring = function removeAccessTokenExpiring(cb) {
        this._accessTokenExpiring.removeHandler(cb);
    };

    AccessTokenEvents.prototype.addAccessTokenExpired = function addAccessTokenExpired(cb) {
        this._accessTokenExpired.addHandler(cb);
    };

    AccessTokenEvents.prototype.removeAccessTokenExpired = function removeAccessTokenExpired(cb) {
        this._accessTokenExpired.removeHandler(cb);
    };

    return AccessTokenEvents;
}();

/***/ }),

/***/ "./src/CheckSessionIFrame.js":
/*!***********************************!*\
  !*** ./src/CheckSessionIFrame.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CheckSessionIFrame = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var DefaultInterval = 2000;

var CheckSessionIFrame = exports.CheckSessionIFrame = function () {
    function CheckSessionIFrame(callback, client_id, url, interval) {
        var stopOnError = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

        _classCallCheck(this, CheckSessionIFrame);

        this._callback = callback;
        this._client_id = client_id;
        this._url = url;
        this._interval = interval || DefaultInterval;
        this._stopOnError = stopOnError;

        var idx = url.indexOf("/", url.indexOf("//") + 2);
        this._frame_origin = url.substr(0, idx);

        this._frame = window.document.createElement("iframe");

        // shotgun approach
        this._frame.style.visibility = "hidden";
        this._frame.style.position = "absolute";
        this._frame.style.display = "none";
        this._frame.style.width = 0;
        this._frame.style.height = 0;

        this._frame.src = url;
    }

    CheckSessionIFrame.prototype.load = function load() {
        var _this = this;

        return new Promise(function (resolve) {
            _this._frame.onload = function () {
                resolve();
            };

            window.document.body.appendChild(_this._frame);
            _this._boundMessageEvent = _this._message.bind(_this);
            window.addEventListener("message", _this._boundMessageEvent, false);
        });
    };

    CheckSessionIFrame.prototype._message = function _message(e) {
        if (e.origin === this._frame_origin && e.source === this._frame.contentWindow) {
            if (e.data === "error") {
                _Log.Log.error("CheckSessionIFrame: error message from check session op iframe");
                if (this._stopOnError) {
                    this.stop();
                }
            } else if (e.data === "changed") {
                _Log.Log.debug("CheckSessionIFrame: changed message from check session op iframe");
                this.stop();
                this._callback();
            } else {
                _Log.Log.debug("CheckSessionIFrame: " + e.data + " message from check session op iframe");
            }
        }
    };

    CheckSessionIFrame.prototype.start = function start(session_state) {
        var _this2 = this;

        if (this._session_state !== session_state) {
            _Log.Log.debug("CheckSessionIFrame.start");

            this.stop();

            this._session_state = session_state;

            var send = function send() {
                _this2._frame.contentWindow.postMessage(_this2._client_id + " " + _this2._session_state, _this2._frame_origin);
            };

            // trigger now
            send();

            // and setup timer
            this._timer = window.setInterval(send, this._interval);
        }
    };

    CheckSessionIFrame.prototype.stop = function stop() {
        this._session_state = null;

        if (this._timer) {
            _Log.Log.debug("CheckSessionIFrame.stop");

            window.clearInterval(this._timer);
            this._timer = null;
        }
    };

    return CheckSessionIFrame;
}();

/***/ }),

/***/ "./src/CordovaIFrameNavigator.js":
/*!***************************************!*\
  !*** ./src/CordovaIFrameNavigator.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CordovaIFrameNavigator = undefined;

var _CordovaPopupWindow = __webpack_require__(/*! ./CordovaPopupWindow.js */ "./src/CordovaPopupWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var CordovaIFrameNavigator = exports.CordovaIFrameNavigator = function () {
    function CordovaIFrameNavigator() {
        _classCallCheck(this, CordovaIFrameNavigator);
    }

    CordovaIFrameNavigator.prototype.prepare = function prepare(params) {
        params.popupWindowFeatures = 'hidden=yes';
        var popup = new _CordovaPopupWindow.CordovaPopupWindow(params);
        return Promise.resolve(popup);
    };

    return CordovaIFrameNavigator;
}();

/***/ }),

/***/ "./src/CordovaPopupNavigator.js":
/*!**************************************!*\
  !*** ./src/CordovaPopupNavigator.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CordovaPopupNavigator = undefined;

var _CordovaPopupWindow = __webpack_require__(/*! ./CordovaPopupWindow.js */ "./src/CordovaPopupWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var CordovaPopupNavigator = exports.CordovaPopupNavigator = function () {
    function CordovaPopupNavigator() {
        _classCallCheck(this, CordovaPopupNavigator);
    }

    CordovaPopupNavigator.prototype.prepare = function prepare(params) {
        var popup = new _CordovaPopupWindow.CordovaPopupWindow(params);
        return Promise.resolve(popup);
    };

    return CordovaPopupNavigator;
}();

/***/ }),

/***/ "./src/CordovaPopupWindow.js":
/*!***********************************!*\
  !*** ./src/CordovaPopupWindow.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CordovaPopupWindow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultPopupFeatures = 'location=no,toolbar=no,zoom=no';
var DefaultPopupTarget = "_blank";

var CordovaPopupWindow = exports.CordovaPopupWindow = function () {
    function CordovaPopupWindow(params) {
        var _this = this;

        _classCallCheck(this, CordovaPopupWindow);

        this._promise = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });

        this.features = params.popupWindowFeatures || DefaultPopupFeatures;
        this.target = params.popupWindowTarget || DefaultPopupTarget;

        this.redirect_uri = params.startUrl;
        _Log.Log.debug("CordovaPopupWindow.ctor: redirect_uri: " + this.redirect_uri);
    }

    CordovaPopupWindow.prototype._isInAppBrowserInstalled = function _isInAppBrowserInstalled(cordovaMetadata) {
        return ["cordova-plugin-inappbrowser", "cordova-plugin-inappbrowser.inappbrowser", "org.apache.cordova.inappbrowser"].some(function (name) {
            return cordovaMetadata.hasOwnProperty(name);
        });
    };

    CordovaPopupWindow.prototype.navigate = function navigate(params) {
        if (!params || !params.url) {
            this._error("No url provided");
        } else {
            if (!window.cordova) {
                return this._error("cordova is undefined");
            }

            var cordovaMetadata = window.cordova.require("cordova/plugin_list").metadata;
            if (this._isInAppBrowserInstalled(cordovaMetadata) === false) {
                return this._error("InAppBrowser plugin not found");
            }
            this._popup = cordova.InAppBrowser.open(params.url, this.target, this.features);
            if (this._popup) {
                _Log.Log.debug("CordovaPopupWindow.navigate: popup successfully created");

                this._exitCallbackEvent = this._exitCallback.bind(this);
                this._loadStartCallbackEvent = this._loadStartCallback.bind(this);

                this._popup.addEventListener("exit", this._exitCallbackEvent, false);
                this._popup.addEventListener("loadstart", this._loadStartCallbackEvent, false);
            } else {
                this._error("Error opening popup window");
            }
        }
        return this.promise;
    };

    CordovaPopupWindow.prototype._loadStartCallback = function _loadStartCallback(event) {
        if (event.url.indexOf(this.redirect_uri) === 0) {
            this._success({ url: event.url });
        }
    };

    CordovaPopupWindow.prototype._exitCallback = function _exitCallback(message) {
        this._error(message);
    };

    CordovaPopupWindow.prototype._success = function _success(data) {
        this._cleanup();

        _Log.Log.debug("CordovaPopupWindow: Successful response from cordova popup window");
        this._resolve(data);
    };

    CordovaPopupWindow.prototype._error = function _error(message) {
        this._cleanup();

        _Log.Log.error(message);
        this._reject(new Error(message));
    };

    CordovaPopupWindow.prototype.close = function close() {
        this._cleanup();
    };

    CordovaPopupWindow.prototype._cleanup = function _cleanup() {
        if (this._popup) {
            _Log.Log.debug("CordovaPopupWindow: cleaning up popup");
            this._popup.removeEventListener("exit", this._exitCallbackEvent, false);
            this._popup.removeEventListener("loadstart", this._loadStartCallbackEvent, false);
            this._popup.close();
        }
        this._popup = null;
    };

    _createClass(CordovaPopupWindow, [{
        key: 'promise',
        get: function get() {
            return this._promise;
        }
    }]);

    return CordovaPopupWindow;
}();

/***/ }),

/***/ "./src/ErrorResponse.js":
/*!******************************!*\
  !*** ./src/ErrorResponse.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ErrorResponse = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var ErrorResponse = exports.ErrorResponse = function (_Error) {
    _inherits(ErrorResponse, _Error);

    function ErrorResponse() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            error = _ref.error,
            error_description = _ref.error_description,
            error_uri = _ref.error_uri,
            state = _ref.state,
            session_state = _ref.session_state;

        _classCallCheck(this, ErrorResponse);

        if (!error) {
            _Log.Log.error("No error passed to ErrorResponse");
            throw new Error("error");
        }

        var _this = _possibleConstructorReturn(this, _Error.call(this, error_description || error));

        _this.name = "ErrorResponse";

        _this.error = error;
        _this.error_description = error_description;
        _this.error_uri = error_uri;

        _this.state = state;
        _this.session_state = session_state;
        return _this;
    }

    return ErrorResponse;
}(Error);

/***/ }),

/***/ "./src/Event.js":
/*!**********************!*\
  !*** ./src/Event.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Event = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var Event = exports.Event = function () {
    function Event(name) {
        _classCallCheck(this, Event);

        this._name = name;
        this._callbacks = [];
    }

    Event.prototype.addHandler = function addHandler(cb) {
        this._callbacks.push(cb);
    };

    Event.prototype.removeHandler = function removeHandler(cb) {
        var idx = this._callbacks.findIndex(function (item) {
            return item === cb;
        });
        if (idx >= 0) {
            this._callbacks.splice(idx, 1);
        }
    };

    Event.prototype.raise = function raise() {
        _Log.Log.debug("Event: Raising event: " + this._name);
        for (var i = 0; i < this._callbacks.length; i++) {
            var _callbacks;

            (_callbacks = this._callbacks)[i].apply(_callbacks, arguments);
        }
    };

    return Event;
}();

/***/ }),

/***/ "./src/Global.js":
/*!***********************!*\
  !*** ./src/Global.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var timer = {
    setInterval: function (_setInterval) {
        function setInterval(_x, _x2) {
            return _setInterval.apply(this, arguments);
        }

        setInterval.toString = function () {
            return _setInterval.toString();
        };

        return setInterval;
    }(function (cb, duration) {
        return setInterval(cb, duration);
    }),
    clearInterval: function (_clearInterval) {
        function clearInterval(_x3) {
            return _clearInterval.apply(this, arguments);
        }

        clearInterval.toString = function () {
            return _clearInterval.toString();
        };

        return clearInterval;
    }(function (handle) {
        return clearInterval(handle);
    })
};

var testing = false;
var request = null;

var Global = exports.Global = function () {
    function Global() {
        _classCallCheck(this, Global);
    }

    Global._testing = function _testing() {
        testing = true;
    };

    Global.setXMLHttpRequest = function setXMLHttpRequest(newRequest) {
        request = newRequest;
    };

    _createClass(Global, null, [{
        key: 'location',
        get: function get() {
            if (!testing) {
                return location;
            }
        }
    }, {
        key: 'localStorage',
        get: function get() {
            if (!testing && typeof window !== 'undefined') {
                return localStorage;
            }
        }
    }, {
        key: 'sessionStorage',
        get: function get() {
            if (!testing && typeof window !== 'undefined') {
                return sessionStorage;
            }
        }
    }, {
        key: 'XMLHttpRequest',
        get: function get() {
            if (!testing && typeof window !== 'undefined') {
                return request || XMLHttpRequest;
            }
        }
    }, {
        key: 'timer',
        get: function get() {
            if (!testing) {
                return timer;
            }
        }
    }]);

    return Global;
}();

/***/ }),

/***/ "./src/IFrameNavigator.js":
/*!********************************!*\
  !*** ./src/IFrameNavigator.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFrameNavigator = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _IFrameWindow = __webpack_require__(/*! ./IFrameWindow.js */ "./src/IFrameWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var IFrameNavigator = exports.IFrameNavigator = function () {
    function IFrameNavigator() {
        _classCallCheck(this, IFrameNavigator);
    }

    IFrameNavigator.prototype.prepare = function prepare(params) {
        var frame = new _IFrameWindow.IFrameWindow(params);
        return Promise.resolve(frame);
    };

    IFrameNavigator.prototype.callback = function callback(url) {
        _Log.Log.debug("IFrameNavigator.callback");

        try {
            _IFrameWindow.IFrameWindow.notifyParent(url);
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    };

    return IFrameNavigator;
}();

/***/ }),

/***/ "./src/IFrameWindow.js":
/*!*****************************!*\
  !*** ./src/IFrameWindow.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IFrameWindow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultTimeout = 10000;

var IFrameWindow = exports.IFrameWindow = function () {
    function IFrameWindow(params) {
        var _this = this;

        _classCallCheck(this, IFrameWindow);

        this._promise = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });

        this._boundMessageEvent = this._message.bind(this);
        window.addEventListener("message", this._boundMessageEvent, false);

        this._frame = window.document.createElement("iframe");

        // shotgun approach
        this._frame.style.visibility = "hidden";
        this._frame.style.position = "absolute";
        this._frame.style.display = "none";
        this._frame.style.width = 0;
        this._frame.style.height = 0;

        window.document.body.appendChild(this._frame);
    }

    IFrameWindow.prototype.navigate = function navigate(params) {
        if (!params || !params.url) {
            this._error("No url provided");
        } else {
            var timeout = params.silentRequestTimeout || DefaultTimeout;
            _Log.Log.debug("IFrameWindow.navigate: Using timeout of:", timeout);
            this._timer = window.setTimeout(this._timeout.bind(this), timeout);
            this._frame.src = params.url;
        }

        return this.promise;
    };

    IFrameWindow.prototype._success = function _success(data) {
        this._cleanup();

        _Log.Log.debug("IFrameWindow: Successful response from frame window");
        this._resolve(data);
    };

    IFrameWindow.prototype._error = function _error(message) {
        this._cleanup();

        _Log.Log.error(message);
        this._reject(new Error(message));
    };

    IFrameWindow.prototype.close = function close() {
        this._cleanup();
    };

    IFrameWindow.prototype._cleanup = function _cleanup() {
        if (this._frame) {
            _Log.Log.debug("IFrameWindow: cleanup");

            window.removeEventListener("message", this._boundMessageEvent, false);
            window.clearTimeout(this._timer);
            window.document.body.removeChild(this._frame);

            this._timer = null;
            this._frame = null;
            this._boundMessageEvent = null;
        }
    };

    IFrameWindow.prototype._timeout = function _timeout() {
        _Log.Log.debug("IFrameWindow.timeout");
        this._error("Frame window timed out");
    };

    IFrameWindow.prototype._message = function _message(e) {
        _Log.Log.debug("IFrameWindow.message");

        if (this._timer && e.origin === this._origin && e.source === this._frame.contentWindow) {
            var url = e.data;
            if (url) {
                this._success({ url: url });
            } else {
                this._error("Invalid response from frame");
            }
        }
    };

    IFrameWindow.notifyParent = function notifyParent(url) {
        _Log.Log.debug("IFrameWindow.notifyParent");
        url = url || window.location.href;
        if (url) {
            _Log.Log.debug("IFrameWindow.notifyParent: posting url message to parent");
            window.parent.postMessage(url, location.protocol + "//" + location.host);
        }
    };

    _createClass(IFrameWindow, [{
        key: "promise",
        get: function get() {
            return this._promise;
        }
    }, {
        key: "_origin",
        get: function get() {
            return location.protocol + "//" + location.host;
        }
    }]);

    return IFrameWindow;
}();

/***/ }),

/***/ "./src/InMemoryWebStorage.js":
/*!***********************************!*\
  !*** ./src/InMemoryWebStorage.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InMemoryWebStorage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InMemoryWebStorage = exports.InMemoryWebStorage = function () {
    function InMemoryWebStorage() {
        _classCallCheck(this, InMemoryWebStorage);

        this._data = {};
    }

    InMemoryWebStorage.prototype.getItem = function getItem(key) {
        _Log.Log.debug("InMemoryWebStorage.getItem", key);
        return this._data[key];
    };

    InMemoryWebStorage.prototype.setItem = function setItem(key, value) {
        _Log.Log.debug("InMemoryWebStorage.setItem", key);
        this._data[key] = value;
    };

    InMemoryWebStorage.prototype.removeItem = function removeItem(key) {
        _Log.Log.debug("InMemoryWebStorage.removeItem", key);
        delete this._data[key];
    };

    InMemoryWebStorage.prototype.key = function key(index) {
        return Object.getOwnPropertyNames(this._data)[index];
    };

    _createClass(InMemoryWebStorage, [{
        key: "length",
        get: function get() {
            return Object.getOwnPropertyNames(this._data).length;
        }
    }]);

    return InMemoryWebStorage;
}();

/***/ }),

/***/ "./src/JoseUtilImpl.js":
/*!*****************************!*\
  !*** ./src/JoseUtilImpl.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getJoseUtil;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

function getJoseUtil(_ref) {
    var jws = _ref.jws,
        KeyUtil = _ref.KeyUtil,
        X509 = _ref.X509,
        crypto = _ref.crypto,
        hextob64u = _ref.hextob64u,
        b64tohex = _ref.b64tohex,
        AllowedSigningAlgs = _ref.AllowedSigningAlgs;

    return function () {
        function JoseUtil() {
            _classCallCheck(this, JoseUtil);
        }

        JoseUtil.parseJwt = function parseJwt(jwt) {
            _Log.Log.debug("JoseUtil.parseJwt");
            try {
                var token = jws.JWS.parse(jwt);
                return {
                    header: token.headerObj,
                    payload: token.payloadObj
                };
            } catch (e) {
                _Log.Log.error(e);
            }
        };

        JoseUtil.validateJwt = function validateJwt(jwt, key, issuer, audience, clockSkew, now, timeInsensitive, offsetSeconds) {
            _Log.Log.debug("JoseUtil.validateJwt");
            console.log("validateJWT now is", now, offsetSeconds);
            try {
                if (key.kty === "RSA") {
                    if (key.e && key.n) {
                        key = KeyUtil.getKey(key);
                    } else if (key.x5c && key.x5c.length) {
                        var hex = b64tohex(key.x5c[0]);
                        key = X509.getPublicKeyFromCertHex(hex);
                    } else {
                        _Log.Log.error("JoseUtil.validateJwt: RSA key missing key material", key);
                        return Promise.reject(new Error("RSA key missing key material"));
                    }
                } else if (key.kty === "EC") {
                    if (key.crv && key.x && key.y) {
                        key = KeyUtil.getKey(key);
                    } else {
                        _Log.Log.error("JoseUtil.validateJwt: EC key missing key material", key);
                        return Promise.reject(new Error("EC key missing key material"));
                    }
                } else {
                    _Log.Log.error("JoseUtil.validateJwt: Unsupported key type", key && key.kty);
                    return Promise.reject(new Error( true && key.kty));
                }

                return JoseUtil._validateJwt(jwt, key, issuer, audience, clockSkew, now, timeInsensitive);
            } catch (e) {
                _Log.Log.error(e && e.message || e);
                return Promise.reject("JWT validation failed");
            }
        };

        JoseUtil.validateJwtAttributes = function validateJwtAttributes(jwt, issuer, audience, clockSkew, now, timeInsensitive, offsetSeconds) {
            if (!clockSkew) {
                clockSkew = 0;
            }

            if (!now) {
                now = parseInt(Date.now() / 1000);
            }
            console.log("valid attributes now is", now, offsetSeconds);

            var payload = JoseUtil.parseJwt(jwt).payload;

            if (!payload.iss) {
                _Log.Log.error("JoseUtil._validateJwt: issuer was not provided");
                return Promise.reject(new Error("issuer was not provided"));
            }
            if (payload.iss !== issuer) {
                _Log.Log.error("JoseUtil._validateJwt: Invalid issuer in token", payload.iss);
                return Promise.reject(new Error("Invalid issuer in token: " + payload.iss));
            }

            if (!payload.aud) {
                _Log.Log.error("JoseUtil._validateJwt: aud was not provided");
                return Promise.reject(new Error("aud was not provided"));
            }
            var validAudience = payload.aud === audience || Array.isArray(payload.aud) && payload.aud.indexOf(audience) >= 0;
            if (!validAudience) {
                _Log.Log.error("JoseUtil._validateJwt: Invalid audience in token", payload.aud);
                return Promise.reject(new Error("Invalid audience in token: " + payload.aud));
            }
            if (payload.azp && payload.azp !== audience) {
                _Log.Log.error("JoseUtil._validateJwt: Invalid azp in token", payload.azp);
                return Promise.reject(new Error("Invalid azp in token: " + payload.azp));
            }

            if (!timeInsensitive) {
                var lowerNow = now + clockSkew;
                var upperNow = now - clockSkew;

                if (!payload.iat) {
                    _Log.Log.error("JoseUtil._validateJwt: iat was not provided");
                    return Promise.reject(new Error("iat was not provided"));
                }
                if (lowerNow < payload.iat) {
                    _Log.Log.error("JoseUtil._validateJwt: iat is in the future", payload.iat);
                    return Promise.reject(new Error("iat is in the future: " + payload.iat));
                }

                if (payload.nbf && lowerNow < payload.nbf) {
                    _Log.Log.error("JoseUtil._validateJwt: nbf is in the future", payload.nbf);
                    return Promise.reject(new Error("nbf is in the future: " + payload.nbf));
                }

                if (!payload.exp) {
                    _Log.Log.error("JoseUtil._validateJwt: exp was not provided");
                    return Promise.reject(new Error("exp was not provided"));
                }
                if (payload.exp < upperNow) {
                    _Log.Log.error("JoseUtil._validateJwt: exp is in the past", payload.exp);
                    return Promise.reject(new Error("exp is in the past:" + payload.exp));
                }
            }

            return Promise.resolve(payload);
        };

        JoseUtil._validateJwt = function _validateJwt(jwt, key, issuer, audience, clockSkew, now, timeInsensitive) {

            return JoseUtil.validateJwtAttributes(jwt, issuer, audience, clockSkew, now, timeInsensitive).then(function (payload) {
                try {
                    if (!jws.JWS.verify(jwt, key, AllowedSigningAlgs)) {
                        _Log.Log.error("JoseUtil._validateJwt: signature validation failed");
                        return Promise.reject(new Error("signature validation failed"));
                    }

                    return payload;
                } catch (e) {
                    _Log.Log.error(e && e.message || e);
                    return Promise.reject(new Error("signature validation failed"));
                }
            });
        };

        JoseUtil.hashString = function hashString(value, alg) {
            try {
                return crypto.Util.hashString(value, alg);
            } catch (e) {
                _Log.Log.error(e);
            }
        };

        JoseUtil.hexToBase64Url = function hexToBase64Url(value) {
            try {
                return hextob64u(value);
            } catch (e) {
                _Log.Log.error(e);
            }
        };

        return JoseUtil;
    }();
}
module.exports = exports["default"];

/***/ }),

/***/ "./src/JoseUtilRsa.js":
/*!****************************!*\
  !*** ./src/JoseUtilRsa.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JoseUtil = undefined;

var _rsa = __webpack_require__(/*! ./crypto/rsa */ "./src/crypto/rsa.js");

var _JoseUtilImpl = __webpack_require__(/*! ./JoseUtilImpl */ "./src/JoseUtilImpl.js");

var _JoseUtilImpl2 = _interopRequireDefault(_JoseUtilImpl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JoseUtil = exports.JoseUtil = (0, _JoseUtilImpl2.default)({ jws: _rsa.jws, KeyUtil: _rsa.KeyUtil, X509: _rsa.X509, crypto: _rsa.crypto, hextob64u: _rsa.hextob64u, b64tohex: _rsa.b64tohex, AllowedSigningAlgs: _rsa.AllowedSigningAlgs });

/***/ }),

/***/ "./src/JsonService.js":
/*!****************************!*\
  !*** ./src/JsonService.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JsonService = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var JsonService = exports.JsonService = function () {
    function JsonService() {
        var additionalContentTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var XMLHttpRequestCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Global.Global.XMLHttpRequest;
        var jwtHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, JsonService);

        if (additionalContentTypes && Array.isArray(additionalContentTypes)) {
            this._contentTypes = additionalContentTypes.slice();
        } else {
            this._contentTypes = [];
        }
        this._contentTypes.push('application/json');
        if (jwtHandler) {
            this._contentTypes.push('application/jwt');
        }

        this._XMLHttpRequest = XMLHttpRequestCtor;
        this._jwtHandler = jwtHandler;
    }

    JsonService.prototype.getJson = function getJson(url, token) {
        var _this = this;

        if (!url) {
            _Log.Log.error("JsonService.getJson: No url passed");
            throw new Error("url");
        }

        _Log.Log.debug("JsonService.getJson, url: ", url);

        return new Promise(function (resolve, reject) {

            var req = new _this._XMLHttpRequest();
            req.open('GET', url);

            var allowedContentTypes = _this._contentTypes;
            var jwtHandler = _this._jwtHandler;

            req.onload = function () {
                _Log.Log.debug("JsonService.getJson: HTTP response received, status", req.status);

                if (req.status === 200) {

                    var contentType = req.getResponseHeader("Content-Type");
                    if (contentType) {

                        var found = allowedContentTypes.find(function (item) {
                            if (contentType.startsWith(item)) {
                                return true;
                            }
                        });

                        if (found == "application/jwt") {
                            jwtHandler(req).then(resolve, reject);
                            return;
                        }

                        if (found) {
                            try {
                                resolve(JSON.parse(req.responseText));
                                return;
                            } catch (e) {
                                _Log.Log.error("JsonService.getJson: Error parsing JSON response", e.message);
                                reject(e);
                                return;
                            }
                        }
                    }

                    reject(Error("Invalid response Content-Type: " + contentType + ", from URL: " + url));
                } else {
                    reject(Error(req.statusText + " (" + req.status + ")"));
                }
            };

            req.onerror = function () {
                _Log.Log.error("JsonService.getJson: network error");
                reject(Error("Network Error"));
            };

            if (token) {
                _Log.Log.debug("JsonService.getJson: token passed, setting Authorization header");
                req.setRequestHeader("Authorization", "Bearer " + token);
            }

            req.send();
        });
    };

    JsonService.prototype.postForm = function postForm(url, payload) {
        var _this2 = this;

        if (!url) {
            _Log.Log.error("JsonService.postForm: No url passed");
            throw new Error("url");
        }

        _Log.Log.debug("JsonService.postForm, url: ", url);

        return new Promise(function (resolve, reject) {

            var req = new _this2._XMLHttpRequest();
            req.open('POST', url);

            var allowedContentTypes = _this2._contentTypes;

            req.onload = function () {
                _Log.Log.debug("JsonService.postForm: HTTP response received, status", req.status);

                if (req.status === 200) {

                    var contentType = req.getResponseHeader("Content-Type");
                    if (contentType) {

                        var found = allowedContentTypes.find(function (item) {
                            if (contentType.startsWith(item)) {
                                return true;
                            }
                        });

                        if (found) {
                            try {
                                resolve(JSON.parse(req.responseText));
                                return;
                            } catch (e) {
                                _Log.Log.error("JsonService.postForm: Error parsing JSON response", e.message);
                                reject(e);
                                return;
                            }
                        }
                    }

                    reject(Error("Invalid response Content-Type: " + contentType + ", from URL: " + url));
                    return;
                }

                if (req.status === 400) {

                    var contentType = req.getResponseHeader("Content-Type");
                    if (contentType) {

                        var found = allowedContentTypes.find(function (item) {
                            if (contentType.startsWith(item)) {
                                return true;
                            }
                        });

                        if (found) {
                            try {
                                var payload = JSON.parse(req.responseText);
                                if (payload && payload.error) {
                                    _Log.Log.error("JsonService.postForm: Error from server: ", payload.error);
                                    reject(new Error(payload.error));
                                    return;
                                }
                            } catch (e) {
                                _Log.Log.error("JsonService.postForm: Error parsing JSON response", e.message);
                                reject(e);
                                return;
                            }
                        }
                    }
                }

                reject(Error(req.statusText + " (" + req.status + ")"));
            };

            req.onerror = function () {
                _Log.Log.error("JsonService.postForm: network error");
                reject(Error("Network Error"));
            };

            var body = "";
            for (var key in payload) {

                var value = payload[key];

                if (value) {

                    if (body.length > 0) {
                        body += "&";
                    }

                    body += encodeURIComponent(key);
                    body += "=";
                    body += encodeURIComponent(value);
                }
            }

            req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            req.send(body);
        });
    };

    return JsonService;
}();

/***/ }),

/***/ "./src/Log.js":
/*!********************!*\
  !*** ./src/Log.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var nopLogger = {
    debug: function debug() {},
    info: function info() {},
    warn: function warn() {},
    error: function error() {}
};

var NONE = 0;
var ERROR = 1;
var WARN = 2;
var INFO = 3;
var DEBUG = 4;

var logger = void 0;
var level = void 0;

var Log = exports.Log = function () {
    function Log() {
        _classCallCheck(this, Log);
    }

    Log.reset = function reset() {
        level = INFO;
        logger = nopLogger;
    };

    Log.debug = function debug() {
        if (level >= DEBUG) {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            logger.debug.apply(logger, Array.from(args));
        }
    };

    Log.info = function info() {
        if (level >= INFO) {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            logger.info.apply(logger, Array.from(args));
        }
    };

    Log.warn = function warn() {
        if (level >= WARN) {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            logger.warn.apply(logger, Array.from(args));
        }
    };

    Log.error = function error() {
        if (level >= ERROR) {
            for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
            }

            logger.error.apply(logger, Array.from(args));
        }
    };

    _createClass(Log, null, [{
        key: "NONE",
        get: function get() {
            return NONE;
        }
    }, {
        key: "ERROR",
        get: function get() {
            return ERROR;
        }
    }, {
        key: "WARN",
        get: function get() {
            return WARN;
        }
    }, {
        key: "INFO",
        get: function get() {
            return INFO;
        }
    }, {
        key: "DEBUG",
        get: function get() {
            return DEBUG;
        }
    }, {
        key: "level",
        get: function get() {
            return level;
        },
        set: function set(value) {
            if (NONE <= value && value <= DEBUG) {
                level = value;
            } else {
                throw new Error("Invalid log level");
            }
        }
    }, {
        key: "logger",
        get: function get() {
            return logger;
        },
        set: function set(value) {
            if (!value.debug && value.info) {
                // just to stay backwards compat. can remove in 2.0
                value.debug = value.info;
            }

            if (value.debug && value.info && value.warn && value.error) {
                logger = value;
            } else {
                throw new Error("Invalid logger");
            }
        }
    }]);

    return Log;
}();

Log.reset();

/***/ }),

/***/ "./src/MetadataService.js":
/*!********************************!*\
  !*** ./src/MetadataService.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MetadataService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _JsonService = __webpack_require__(/*! ./JsonService.js */ "./src/JsonService.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcMetadataUrlPath = '.well-known/openid-configuration';

var MetadataService = exports.MetadataService = function () {
    function MetadataService(settings) {
        var JsonServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _JsonService.JsonService;

        _classCallCheck(this, MetadataService);

        if (!settings) {
            _Log.Log.error("MetadataService: No settings passed to MetadataService");
            throw new Error("settings");
        }

        this._settings = settings;
        this._jsonService = new JsonServiceCtor(['application/jwk-set+json']);
    }

    MetadataService.prototype.getMetadata = function getMetadata() {
        var _this = this;

        if (this._settings.metadata) {
            _Log.Log.debug("MetadataService.getMetadata: Returning metadata from settings");
            return Promise.resolve(this._settings.metadata);
        }

        if (!this.metadataUrl) {
            _Log.Log.error("MetadataService.getMetadata: No authority or metadataUrl configured on settings");
            return Promise.reject(new Error("No authority or metadataUrl configured on settings"));
        }

        _Log.Log.debug("MetadataService.getMetadata: getting metadata from", this.metadataUrl);

        return this._jsonService.getJson(this.metadataUrl).then(function (metadata) {
            _Log.Log.debug("MetadataService.getMetadata: json received");
            _this._settings.metadata = metadata;
            return metadata;
        });
    };

    MetadataService.prototype.getIssuer = function getIssuer() {
        return this._getMetadataProperty("issuer");
    };

    MetadataService.prototype.getAuthorizationEndpoint = function getAuthorizationEndpoint() {
        return this._getMetadataProperty("authorization_endpoint");
    };

    MetadataService.prototype.getUserInfoEndpoint = function getUserInfoEndpoint() {
        return this._getMetadataProperty("userinfo_endpoint");
    };

    MetadataService.prototype.getTokenEndpoint = function getTokenEndpoint() {
        var optional = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        return this._getMetadataProperty("token_endpoint", optional);
    };

    MetadataService.prototype.getCheckSessionIframe = function getCheckSessionIframe() {
        return this._getMetadataProperty("check_session_iframe", true);
    };

    MetadataService.prototype.getEndSessionEndpoint = function getEndSessionEndpoint() {
        return this._getMetadataProperty("end_session_endpoint", true);
    };

    MetadataService.prototype.getRevocationEndpoint = function getRevocationEndpoint() {
        return this._getMetadataProperty("revocation_endpoint", true);
    };

    MetadataService.prototype.getKeysEndpoint = function getKeysEndpoint() {
        return this._getMetadataProperty("jwks_uri", true);
    };

    MetadataService.prototype._getMetadataProperty = function _getMetadataProperty(name) {
        var optional = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _Log.Log.debug("MetadataService.getMetadataProperty for: " + name);

        return this.getMetadata().then(function (metadata) {
            _Log.Log.debug("MetadataService.getMetadataProperty: metadata recieved");

            if (metadata[name] === undefined) {

                if (optional === true) {
                    _Log.Log.warn("MetadataService.getMetadataProperty: Metadata does not contain optional property " + name);
                    return undefined;
                } else {
                    _Log.Log.error("MetadataService.getMetadataProperty: Metadata does not contain property " + name);
                    throw new Error("Metadata does not contain property " + name);
                }
            }

            return metadata[name];
        });
    };

    MetadataService.prototype.getSigningKeys = function getSigningKeys() {
        var _this2 = this;

        if (this._settings.signingKeys) {
            _Log.Log.debug("MetadataService.getSigningKeys: Returning signingKeys from settings");
            return Promise.resolve(this._settings.signingKeys);
        }

        return this._getMetadataProperty("jwks_uri").then(function (jwks_uri) {
            _Log.Log.debug("MetadataService.getSigningKeys: jwks_uri received", jwks_uri);

            return _this2._jsonService.getJson(jwks_uri).then(function (keySet) {
                _Log.Log.debug("MetadataService.getSigningKeys: key set received", keySet);

                if (!keySet.keys) {
                    _Log.Log.error("MetadataService.getSigningKeys: Missing keys on keyset");
                    throw new Error("Missing keys on keyset");
                }

                _this2._settings.signingKeys = keySet.keys;
                return _this2._settings.signingKeys;
            });
        });
    };

    _createClass(MetadataService, [{
        key: 'metadataUrl',
        get: function get() {
            if (!this._metadataUrl) {
                if (this._settings.metadataUrl) {
                    this._metadataUrl = this._settings.metadataUrl;
                } else {
                    this._metadataUrl = this._settings.authority;

                    if (this._metadataUrl && this._metadataUrl.indexOf(OidcMetadataUrlPath) < 0) {
                        if (this._metadataUrl[this._metadataUrl.length - 1] !== '/') {
                            this._metadataUrl += '/';
                        }
                        this._metadataUrl += OidcMetadataUrlPath;
                    }
                }
            }

            return this._metadataUrl;
        }
    }]);

    return MetadataService;
}();

/***/ }),

/***/ "./src/OidcClient.js":
/*!***************************!*\
  !*** ./src/OidcClient.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OidcClient = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _OidcClientSettings = __webpack_require__(/*! ./OidcClientSettings.js */ "./src/OidcClientSettings.js");

var _ErrorResponse = __webpack_require__(/*! ./ErrorResponse.js */ "./src/ErrorResponse.js");

var _SigninRequest = __webpack_require__(/*! ./SigninRequest.js */ "./src/SigninRequest.js");

var _SigninResponse = __webpack_require__(/*! ./SigninResponse.js */ "./src/SigninResponse.js");

var _SignoutRequest = __webpack_require__(/*! ./SignoutRequest.js */ "./src/SignoutRequest.js");

var _SignoutResponse = __webpack_require__(/*! ./SignoutResponse.js */ "./src/SignoutResponse.js");

var _SigninState = __webpack_require__(/*! ./SigninState.js */ "./src/SigninState.js");

var _State = __webpack_require__(/*! ./State.js */ "./src/State.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcClient = exports.OidcClient = function () {
    function OidcClient() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, OidcClient);

        if (settings instanceof _OidcClientSettings.OidcClientSettings) {
            this._settings = settings;
        } else {
            this._settings = new _OidcClientSettings.OidcClientSettings(settings);
        }
    }

    OidcClient.prototype.createSigninRequest = function createSigninRequest() {
        var _this = this;

        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            response_type = _ref.response_type,
            scope = _ref.scope,
            redirect_uri = _ref.redirect_uri,
            data = _ref.data,
            state = _ref.state,
            prompt = _ref.prompt,
            display = _ref.display,
            max_age = _ref.max_age,
            ui_locales = _ref.ui_locales,
            id_token_hint = _ref.id_token_hint,
            login_hint = _ref.login_hint,
            acr_values = _ref.acr_values,
            resource = _ref.resource,
            request = _ref.request,
            request_uri = _ref.request_uri,
            response_mode = _ref.response_mode,
            extraQueryParams = _ref.extraQueryParams,
            extraTokenParams = _ref.extraTokenParams,
            request_type = _ref.request_type,
            skipUserInfo = _ref.skipUserInfo;

        var stateStore = arguments[1];

        _Log.Log.debug("OidcClient.createSigninRequest");

        var client_id = this._settings.client_id;
        response_type = response_type || this._settings.response_type;
        scope = scope || this._settings.scope;
        redirect_uri = redirect_uri || this._settings.redirect_uri;

        // id_token_hint, login_hint aren't allowed on _settings
        prompt = prompt || this._settings.prompt;
        display = display || this._settings.display;
        max_age = max_age || this._settings.max_age;
        ui_locales = ui_locales || this._settings.ui_locales;
        acr_values = acr_values || this._settings.acr_values;
        resource = resource || this._settings.resource;
        response_mode = response_mode || this._settings.response_mode;
        extraQueryParams = extraQueryParams || this._settings.extraQueryParams;
        extraTokenParams = extraTokenParams || this._settings.extraTokenParams;

        var authority = this._settings.authority;

        if (_SigninRequest.SigninRequest.isCode(response_type) && response_type !== "code") {
            return Promise.reject(new Error("OpenID Connect hybrid flow is not supported"));
        }

        return this._metadataService.getAuthorizationEndpoint().then(function (url) {
            _Log.Log.debug("OidcClient.createSigninRequest: Received authorization endpoint", url);

            var signinRequest = new _SigninRequest.SigninRequest({
                url: url,
                client_id: client_id,
                redirect_uri: redirect_uri,
                response_type: response_type,
                scope: scope,
                data: data || state,
                authority: authority,
                prompt: prompt, display: display, max_age: max_age, ui_locales: ui_locales, id_token_hint: id_token_hint, login_hint: login_hint, acr_values: acr_values,
                resource: resource, request: request, request_uri: request_uri, extraQueryParams: extraQueryParams, extraTokenParams: extraTokenParams, request_type: request_type, response_mode: response_mode,
                client_secret: _this._settings.client_secret,
                skipUserInfo: skipUserInfo
            });

            var signinState = signinRequest.state;
            stateStore = stateStore || _this._stateStore;

            return stateStore.set(signinState.id, signinState.toStorageString()).then(function () {
                return signinRequest;
            });
        });
    };

    OidcClient.prototype.readSigninResponseState = function readSigninResponseState(url, stateStore) {
        var removeState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _Log.Log.debug("OidcClient.readSigninResponseState");

        var useQuery = this._settings.response_mode === "query" || !this._settings.response_mode && _SigninRequest.SigninRequest.isCode(this._settings.response_type);
        var delimiter = useQuery ? "?" : "#";

        var response = new _SigninResponse.SigninResponse(url, delimiter);

        if (!response.state) {
            _Log.Log.error("OidcClient.readSigninResponseState: No state in response");
            return Promise.reject(new Error("No state in response"));
        }

        stateStore = stateStore || this._stateStore;

        var stateApi = removeState ? stateStore.remove.bind(stateStore) : stateStore.get.bind(stateStore);

        return stateApi(response.state).then(function (storedStateString) {
            if (!storedStateString) {
                _Log.Log.error("OidcClient.readSigninResponseState: No matching state found in storage");
                throw new Error("No matching state found in storage");
            }

            var state = _SigninState.SigninState.fromStorageString(storedStateString);
            return { state: state, response: response };
        });
    };

    OidcClient.prototype.processSigninResponse = function processSigninResponse(url, stateStore) {
        var _this2 = this;

        _Log.Log.debug("OidcClient.processSigninResponse");

        return this.readSigninResponseState(url, stateStore, true).then(function (_ref2) {
            var state = _ref2.state,
                response = _ref2.response;

            _Log.Log.debug("OidcClient.processSigninResponse: Received state from storage; validating response");
            return _this2._validator.validateSigninResponse(state, response);
        });
    };

    OidcClient.prototype.createSignoutRequest = function createSignoutRequest() {
        var _this3 = this;

        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            id_token_hint = _ref3.id_token_hint,
            data = _ref3.data,
            state = _ref3.state,
            post_logout_redirect_uri = _ref3.post_logout_redirect_uri,
            extraQueryParams = _ref3.extraQueryParams,
            request_type = _ref3.request_type;

        var stateStore = arguments[1];

        _Log.Log.debug("OidcClient.createSignoutRequest");

        post_logout_redirect_uri = post_logout_redirect_uri || this._settings.post_logout_redirect_uri;
        extraQueryParams = extraQueryParams || this._settings.extraQueryParams;

        return this._metadataService.getEndSessionEndpoint().then(function (url) {
            if (!url) {
                _Log.Log.error("OidcClient.createSignoutRequest: No end session endpoint url returned");
                throw new Error("no end session endpoint");
            }

            _Log.Log.debug("OidcClient.createSignoutRequest: Received end session endpoint", url);

            var request = new _SignoutRequest.SignoutRequest({
                url: url,
                id_token_hint: id_token_hint,
                post_logout_redirect_uri: post_logout_redirect_uri,
                data: data || state,
                extraQueryParams: extraQueryParams,
                request_type: request_type
            });

            var signoutState = request.state;
            if (signoutState) {
                _Log.Log.debug("OidcClient.createSignoutRequest: Signout request has state to persist");

                stateStore = stateStore || _this3._stateStore;
                stateStore.set(signoutState.id, signoutState.toStorageString());
            }

            return request;
        });
    };

    OidcClient.prototype.readSignoutResponseState = function readSignoutResponseState(url, stateStore) {
        var removeState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _Log.Log.debug("OidcClient.readSignoutResponseState");

        var response = new _SignoutResponse.SignoutResponse(url);
        if (!response.state) {
            _Log.Log.debug("OidcClient.readSignoutResponseState: No state in response");

            if (response.error) {
                _Log.Log.warn("OidcClient.readSignoutResponseState: Response was error: ", response.error);
                return Promise.reject(new _ErrorResponse.ErrorResponse(response));
            }

            return Promise.resolve({ state: undefined, response: response });
        }

        var stateKey = response.state;

        stateStore = stateStore || this._stateStore;

        var stateApi = removeState ? stateStore.remove.bind(stateStore) : stateStore.get.bind(stateStore);
        return stateApi(stateKey).then(function (storedStateString) {
            if (!storedStateString) {
                _Log.Log.error("OidcClient.readSignoutResponseState: No matching state found in storage");
                throw new Error("No matching state found in storage");
            }

            var state = _State.State.fromStorageString(storedStateString);

            return { state: state, response: response };
        });
    };

    OidcClient.prototype.processSignoutResponse = function processSignoutResponse(url, stateStore) {
        var _this4 = this;

        _Log.Log.debug("OidcClient.processSignoutResponse");

        return this.readSignoutResponseState(url, stateStore, true).then(function (_ref4) {
            var state = _ref4.state,
                response = _ref4.response;

            if (state) {
                _Log.Log.debug("OidcClient.processSignoutResponse: Received state from storage; validating response");
                return _this4._validator.validateSignoutResponse(state, response);
            } else {
                _Log.Log.debug("OidcClient.processSignoutResponse: No state from storage; skipping validating response");
                return response;
            }
        });
    };

    OidcClient.prototype.clearStaleState = function clearStaleState(stateStore) {
        _Log.Log.debug("OidcClient.clearStaleState");

        stateStore = stateStore || this._stateStore;

        return _State.State.clearStaleState(stateStore, this.settings.staleStateAge);
    };

    _createClass(OidcClient, [{
        key: '_stateStore',
        get: function get() {
            return this.settings.stateStore;
        }
    }, {
        key: '_validator',
        get: function get() {
            return this.settings.validator;
        }
    }, {
        key: '_metadataService',
        get: function get() {
            return this.settings.metadataService;
        }
    }, {
        key: 'settings',
        get: function get() {
            return this._settings;
        }
    }, {
        key: 'metadataService',
        get: function get() {
            return this._metadataService;
        }
    }]);

    return OidcClient;
}();

/***/ }),

/***/ "./src/OidcClientSettings.js":
/*!***********************************!*\
  !*** ./src/OidcClientSettings.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OidcClientSettings = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _WebStorageStateStore = __webpack_require__(/*! ./WebStorageStateStore.js */ "./src/WebStorageStateStore.js");

var _ResponseValidator = __webpack_require__(/*! ./ResponseValidator.js */ "./src/ResponseValidator.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcMetadataUrlPath = '.well-known/openid-configuration';

var DefaultResponseType = "id_token";
var DefaultScope = "openid";
var DefaultStaleStateAge = 60 * 15; // seconds
var DefaultClockSkewInSeconds = 60 * 5;

var OidcClientSettings = exports.OidcClientSettings = function () {
    function OidcClientSettings() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            authority = _ref.authority,
            metadataUrl = _ref.metadataUrl,
            metadata = _ref.metadata,
            signingKeys = _ref.signingKeys,
            client_id = _ref.client_id,
            client_secret = _ref.client_secret,
            _ref$response_type = _ref.response_type,
            response_type = _ref$response_type === undefined ? DefaultResponseType : _ref$response_type,
            _ref$scope = _ref.scope,
            scope = _ref$scope === undefined ? DefaultScope : _ref$scope,
            redirect_uri = _ref.redirect_uri,
            post_logout_redirect_uri = _ref.post_logout_redirect_uri,
            prompt = _ref.prompt,
            display = _ref.display,
            max_age = _ref.max_age,
            ui_locales = _ref.ui_locales,
            acr_values = _ref.acr_values,
            resource = _ref.resource,
            response_mode = _ref.response_mode,
            _ref$filterProtocolCl = _ref.filterProtocolClaims,
            filterProtocolClaims = _ref$filterProtocolCl === undefined ? true : _ref$filterProtocolCl,
            _ref$loadUserInfo = _ref.loadUserInfo,
            loadUserInfo = _ref$loadUserInfo === undefined ? true : _ref$loadUserInfo,
            _ref$staleStateAge = _ref.staleStateAge,
            staleStateAge = _ref$staleStateAge === undefined ? DefaultStaleStateAge : _ref$staleStateAge,
            _ref$clockSkew = _ref.clockSkew,
            clockSkew = _ref$clockSkew === undefined ? DefaultClockSkewInSeconds : _ref$clockSkew,
            _ref$userInfoJwtIssue = _ref.userInfoJwtIssuer,
            userInfoJwtIssuer = _ref$userInfoJwtIssue === undefined ? 'OP' : _ref$userInfoJwtIssue,
            _ref$stateStore = _ref.stateStore,
            stateStore = _ref$stateStore === undefined ? new _WebStorageStateStore.WebStorageStateStore() : _ref$stateStore,
            _ref$ResponseValidato = _ref.ResponseValidatorCtor,
            ResponseValidatorCtor = _ref$ResponseValidato === undefined ? _ResponseValidator.ResponseValidator : _ref$ResponseValidato,
            _ref$MetadataServiceC = _ref.MetadataServiceCtor,
            MetadataServiceCtor = _ref$MetadataServiceC === undefined ? _MetadataService.MetadataService : _ref$MetadataServiceC,
            _ref$extraQueryParams = _ref.extraQueryParams,
            extraQueryParams = _ref$extraQueryParams === undefined ? {} : _ref$extraQueryParams,
            _ref$extraTokenParams = _ref.extraTokenParams,
            extraTokenParams = _ref$extraTokenParams === undefined ? {} : _ref$extraTokenParams;

        _classCallCheck(this, OidcClientSettings);

        this._authority = authority;
        this._metadataUrl = metadataUrl;
        this._metadata = metadata;
        this._signingKeys = signingKeys;

        this._client_id = client_id;
        this._client_secret = client_secret;
        this._response_type = response_type;
        this._scope = scope;
        this._redirect_uri = redirect_uri;
        this._post_logout_redirect_uri = post_logout_redirect_uri;

        this._prompt = prompt;
        this._display = display;
        this._max_age = max_age;
        this._ui_locales = ui_locales;
        this._acr_values = acr_values;
        this._resource = resource;
        this._response_mode = response_mode;

        this._filterProtocolClaims = !!filterProtocolClaims;
        this._loadUserInfo = !!loadUserInfo;
        this._staleStateAge = staleStateAge;
        this._clockSkew = clockSkew;
        this._userInfoJwtIssuer = userInfoJwtIssuer;

        this._stateStore = stateStore;
        this._validator = new ResponseValidatorCtor(this);
        this._metadataService = new MetadataServiceCtor(this);

        this._extraQueryParams = (typeof extraQueryParams === 'undefined' ? 'undefined' : _typeof(extraQueryParams)) === 'object' ? extraQueryParams : {};
        this._extraTokenParams = (typeof extraTokenParams === 'undefined' ? 'undefined' : _typeof(extraTokenParams)) === 'object' ? extraTokenParams : {};
    }

    // client config


    _createClass(OidcClientSettings, [{
        key: 'client_id',
        get: function get() {
            return this._client_id;
        },
        set: function set(value) {
            if (!this._client_id) {
                // one-time set only
                this._client_id = value;
            } else {
                _Log.Log.error("OidcClientSettings.set_client_id: client_id has already been assigned.");
                throw new Error("client_id has already been assigned.");
            }
        }
    }, {
        key: 'client_secret',
        get: function get() {
            return this._client_secret;
        }
    }, {
        key: 'response_type',
        get: function get() {
            return this._response_type;
        }
    }, {
        key: 'scope',
        get: function get() {
            return this._scope;
        }
    }, {
        key: 'redirect_uri',
        get: function get() {
            return this._redirect_uri;
        }
    }, {
        key: 'post_logout_redirect_uri',
        get: function get() {
            return this._post_logout_redirect_uri;
        }

        // optional protocol params

    }, {
        key: 'prompt',
        get: function get() {
            return this._prompt;
        }
    }, {
        key: 'display',
        get: function get() {
            return this._display;
        }
    }, {
        key: 'max_age',
        get: function get() {
            return this._max_age;
        }
    }, {
        key: 'ui_locales',
        get: function get() {
            return this._ui_locales;
        }
    }, {
        key: 'acr_values',
        get: function get() {
            return this._acr_values;
        }
    }, {
        key: 'resource',
        get: function get() {
            return this._resource;
        }
    }, {
        key: 'response_mode',
        get: function get() {
            return this._response_mode;
        }

        // metadata

    }, {
        key: 'authority',
        get: function get() {
            return this._authority;
        },
        set: function set(value) {
            if (!this._authority) {
                // one-time set only
                this._authority = value;
            } else {
                _Log.Log.error("OidcClientSettings.set_authority: authority has already been assigned.");
                throw new Error("authority has already been assigned.");
            }
        }
    }, {
        key: 'metadataUrl',
        get: function get() {
            if (!this._metadataUrl) {
                this._metadataUrl = this.authority;

                if (this._metadataUrl && this._metadataUrl.indexOf(OidcMetadataUrlPath) < 0) {
                    if (this._metadataUrl[this._metadataUrl.length - 1] !== '/') {
                        this._metadataUrl += '/';
                    }
                    this._metadataUrl += OidcMetadataUrlPath;
                }
            }

            return this._metadataUrl;
        }

        // settable/cachable metadata values

    }, {
        key: 'metadata',
        get: function get() {
            return this._metadata;
        },
        set: function set(value) {
            this._metadata = value;
        }
    }, {
        key: 'signingKeys',
        get: function get() {
            return this._signingKeys;
        },
        set: function set(value) {
            this._signingKeys = value;
        }

        // behavior flags

    }, {
        key: 'filterProtocolClaims',
        get: function get() {
            return this._filterProtocolClaims;
        }
    }, {
        key: 'loadUserInfo',
        get: function get() {
            return this._loadUserInfo;
        }
    }, {
        key: 'staleStateAge',
        get: function get() {
            return this._staleStateAge;
        }
    }, {
        key: 'clockSkew',
        get: function get() {
            return this._clockSkew;
        }
    }, {
        key: 'userInfoJwtIssuer',
        get: function get() {
            return this._userInfoJwtIssuer;
        }
    }, {
        key: 'stateStore',
        get: function get() {
            return this._stateStore;
        }
    }, {
        key: 'validator',
        get: function get() {
            return this._validator;
        }
    }, {
        key: 'metadataService',
        get: function get() {
            return this._metadataService;
        }

        // extra query params

    }, {
        key: 'extraQueryParams',
        get: function get() {
            return this._extraQueryParams;
        },
        set: function set(value) {
            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                this._extraQueryParams = value;
            } else {
                this._extraQueryParams = {};
            }
        }

        // extra token params

    }, {
        key: 'extraTokenParams',
        get: function get() {
            return this._extraTokenParams;
        },
        set: function set(value) {
            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                this._extraTokenParams = value;
            } else {
                this._extraTokenParams = {};
            }
        }
    }]);

    return OidcClientSettings;
}();

/***/ }),

/***/ "./src/PopupNavigator.js":
/*!*******************************!*\
  !*** ./src/PopupNavigator.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopupNavigator = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _PopupWindow = __webpack_require__(/*! ./PopupWindow.js */ "./src/PopupWindow.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var PopupNavigator = exports.PopupNavigator = function () {
    function PopupNavigator() {
        _classCallCheck(this, PopupNavigator);
    }

    PopupNavigator.prototype.prepare = function prepare(params) {
        var popup = new _PopupWindow.PopupWindow(params);
        return Promise.resolve(popup);
    };

    PopupNavigator.prototype.callback = function callback(url, keepOpen, delimiter) {
        _Log.Log.debug("PopupNavigator.callback");

        try {
            _PopupWindow.PopupWindow.notifyOpener(url, keepOpen, delimiter);
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    };

    return PopupNavigator;
}();

/***/ }),

/***/ "./src/PopupWindow.js":
/*!****************************!*\
  !*** ./src/PopupWindow.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopupWindow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CheckForPopupClosedInterval = 500;
var DefaultPopupFeatures = 'location=no,toolbar=no,width=500,height=500,left=100,top=100;';
//const DefaultPopupFeatures = 'location=no,toolbar=no,width=500,height=500,left=100,top=100;resizable=yes';

var DefaultPopupTarget = "_blank";

var PopupWindow = exports.PopupWindow = function () {
    function PopupWindow(params) {
        var _this = this;

        _classCallCheck(this, PopupWindow);

        this._promise = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });

        var target = params.popupWindowTarget || DefaultPopupTarget;
        var features = params.popupWindowFeatures || DefaultPopupFeatures;

        this._popup = window.open('', target, features);
        if (this._popup) {
            _Log.Log.debug("PopupWindow.ctor: popup successfully created");
            this._checkForPopupClosedTimer = window.setInterval(this._checkForPopupClosed.bind(this), CheckForPopupClosedInterval);
        }
    }

    PopupWindow.prototype.navigate = function navigate(params) {
        if (!this._popup) {
            this._error("PopupWindow.navigate: Error opening popup window");
        } else if (!params || !params.url) {
            this._error("PopupWindow.navigate: no url provided");
            this._error("No url provided");
        } else {
            _Log.Log.debug("PopupWindow.navigate: Setting URL in popup");

            this._id = params.id;
            if (this._id) {
                window["popupCallback_" + params.id] = this._callback.bind(this);
            }

            this._popup.focus();
            this._popup.window.location = params.url;
        }

        return this.promise;
    };

    PopupWindow.prototype._success = function _success(data) {
        _Log.Log.debug("PopupWindow.callback: Successful response from popup window");

        this._cleanup();
        this._resolve(data);
    };

    PopupWindow.prototype._error = function _error(message) {
        _Log.Log.error("PopupWindow.error: ", message);

        this._cleanup();
        this._reject(new Error(message));
    };

    PopupWindow.prototype.close = function close() {
        this._cleanup(false);
    };

    PopupWindow.prototype._cleanup = function _cleanup(keepOpen) {
        _Log.Log.debug("PopupWindow.cleanup");

        window.clearInterval(this._checkForPopupClosedTimer);
        this._checkForPopupClosedTimer = null;

        delete window["popupCallback_" + this._id];

        if (this._popup && !keepOpen) {
            this._popup.close();
        }
        this._popup = null;
    };

    PopupWindow.prototype._checkForPopupClosed = function _checkForPopupClosed() {
        if (!this._popup || this._popup.closed) {
            this._error("Popup window closed");
        }
    };

    PopupWindow.prototype._callback = function _callback(url, keepOpen) {
        this._cleanup(keepOpen);

        if (url) {
            _Log.Log.debug("PopupWindow.callback success");
            this._success({ url: url });
        } else {
            _Log.Log.debug("PopupWindow.callback: Invalid response from popup");
            this._error("Invalid response from popup");
        }
    };

    PopupWindow.notifyOpener = function notifyOpener(url, keepOpen, delimiter) {
        if (window.opener) {
            url = url || window.location.href;
            if (url) {
                var data = _UrlUtility.UrlUtility.parseUrlFragment(url, delimiter);

                if (data.state) {
                    var name = "popupCallback_" + data.state;
                    var callback = window.opener[name];
                    if (callback) {
                        _Log.Log.debug("PopupWindow.notifyOpener: passing url message to opener");
                        callback(url, keepOpen);
                    } else {
                        _Log.Log.warn("PopupWindow.notifyOpener: no matching callback found on opener");
                    }
                } else {
                    _Log.Log.warn("PopupWindow.notifyOpener: no state found in response url");
                }
            }
        } else {
            _Log.Log.warn("PopupWindow.notifyOpener: no window.opener. Can't complete notification.");
        }
    };

    _createClass(PopupWindow, [{
        key: 'promise',
        get: function get() {
            return this._promise;
        }
    }]);

    return PopupWindow;
}();

/***/ }),

/***/ "./src/RedirectNavigator.js":
/*!**********************************!*\
  !*** ./src/RedirectNavigator.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RedirectNavigator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RedirectNavigator = exports.RedirectNavigator = function () {
    function RedirectNavigator() {
        _classCallCheck(this, RedirectNavigator);
    }

    RedirectNavigator.prototype.prepare = function prepare() {
        return Promise.resolve(this);
    };

    RedirectNavigator.prototype.navigate = function navigate(params) {
        if (!params || !params.url) {
            _Log.Log.error("RedirectNavigator.navigate: No url provided");
            return Promise.reject(new Error("No url provided"));
        }

        if (params.useReplaceToNavigate) {
            window.location.replace(params.url);
        } else {
            window.location = params.url;
        }

        return Promise.resolve();
    };

    _createClass(RedirectNavigator, [{
        key: "url",
        get: function get() {
            return window.location.href;
        }
    }]);

    return RedirectNavigator;
}();

/***/ }),

/***/ "./src/ResponseValidator.js":
/*!**********************************!*\
  !*** ./src/ResponseValidator.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ResponseValidator = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _UserInfoService = __webpack_require__(/*! ./UserInfoService.js */ "./src/UserInfoService.js");

var _TokenClient = __webpack_require__(/*! ./TokenClient.js */ "./src/TokenClient.js");

var _ErrorResponse = __webpack_require__(/*! ./ErrorResponse.js */ "./src/ErrorResponse.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var ProtocolClaims = ["nonce", "at_hash", "iat", "nbf", "exp", "aud", "iss", "c_hash"];

var ResponseValidator = exports.ResponseValidator = function () {
    function ResponseValidator(settings) {
        var MetadataServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _MetadataService.MetadataService;
        var UserInfoServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _UserInfoService.UserInfoService;
        var joseUtil = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _JoseUtil.JoseUtil;
        var TokenClientCtor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _TokenClient.TokenClient;

        _classCallCheck(this, ResponseValidator);

        if (!settings) {
            _Log.Log.error("ResponseValidator.ctor: No settings passed to ResponseValidator");
            throw new Error("settings");
        }

        this._settings = settings;
        this._metadataService = new MetadataServiceCtor(this._settings);
        this._userInfoService = new UserInfoServiceCtor(this._settings);
        this._joseUtil = joseUtil;
        this._tokenClient = new TokenClientCtor(this._settings);
    }

    ResponseValidator.prototype.validateSigninResponse = function validateSigninResponse(state, response) {
        var _this = this;

        _Log.Log.debug("ResponseValidator.validateSigninResponse");

        return this._processSigninParams(state, response).then(function (response) {
            _Log.Log.debug("ResponseValidator.validateSigninResponse: state processed");
            return _this._validateTokens(state, response).then(function (response) {
                _Log.Log.debug("ResponseValidator.validateSigninResponse: tokens validated");
                return _this._processClaims(state, response).then(function (response) {
                    _Log.Log.debug("ResponseValidator.validateSigninResponse: claims processed");
                    return response;
                });
            });
        });
    };

    ResponseValidator.prototype.validateSignoutResponse = function validateSignoutResponse(state, response) {
        if (state.id !== response.state) {
            _Log.Log.error("ResponseValidator.validateSignoutResponse: State does not match");
            return Promise.reject(new Error("State does not match"));
        }

        // now that we know the state matches, take the stored data
        // and set it into the response so callers can get their state
        // this is important for both success & error outcomes
        _Log.Log.debug("ResponseValidator.validateSignoutResponse: state validated");
        response.state = state.data;

        if (response.error) {
            _Log.Log.warn("ResponseValidator.validateSignoutResponse: Response was error", response.error);
            return Promise.reject(new _ErrorResponse.ErrorResponse(response));
        }

        return Promise.resolve(response);
    };

    ResponseValidator.prototype._processSigninParams = function _processSigninParams(state, response) {
        if (state.id !== response.state) {
            _Log.Log.error("ResponseValidator._processSigninParams: State does not match");
            return Promise.reject(new Error("State does not match"));
        }

        if (!state.client_id) {
            _Log.Log.error("ResponseValidator._processSigninParams: No client_id on state");
            return Promise.reject(new Error("No client_id on state"));
        }

        if (!state.authority) {
            _Log.Log.error("ResponseValidator._processSigninParams: No authority on state");
            return Promise.reject(new Error("No authority on state"));
        }

        // this allows the authority to be loaded from the signin state
        if (!this._settings.authority) {
            this._settings.authority = state.authority;
        }
        // ensure we're using the correct authority if the authority is not loaded from signin state
        else if (this._settings.authority && this._settings.authority !== state.authority) {
                _Log.Log.error("ResponseValidator._processSigninParams: authority mismatch on settings vs. signin state");
                return Promise.reject(new Error("authority mismatch on settings vs. signin state"));
            }
        // this allows the client_id to be loaded from the signin state
        if (!this._settings.client_id) {
            this._settings.client_id = state.client_id;
        }
        // ensure we're using the correct client_id if the client_id is not loaded from signin state
        else if (this._settings.client_id && this._settings.client_id !== state.client_id) {
                _Log.Log.error("ResponseValidator._processSigninParams: client_id mismatch on settings vs. signin state");
                return Promise.reject(new Error("client_id mismatch on settings vs. signin state"));
            }

        // now that we know the state matches, take the stored data
        // and set it into the response so callers can get their state
        // this is important for both success & error outcomes
        _Log.Log.debug("ResponseValidator._processSigninParams: state validated");
        response.state = state.data;

        if (response.error) {
            _Log.Log.warn("ResponseValidator._processSigninParams: Response was error", response.error);
            return Promise.reject(new _ErrorResponse.ErrorResponse(response));
        }

        if (state.nonce && !response.id_token) {
            _Log.Log.error("ResponseValidator._processSigninParams: Expecting id_token in response");
            return Promise.reject(new Error("No id_token in response"));
        }

        if (!state.nonce && response.id_token) {
            _Log.Log.error("ResponseValidator._processSigninParams: Not expecting id_token in response");
            return Promise.reject(new Error("Unexpected id_token in response"));
        }

        if (state.code_verifier && !response.code) {
            _Log.Log.error("ResponseValidator._processSigninParams: Expecting code in response");
            return Promise.reject(new Error("No code in response"));
        }

        if (!state.code_verifier && response.code) {
            _Log.Log.error("ResponseValidator._processSigninParams: Not expecting code in response");
            return Promise.reject(new Error("Unexpected code in response"));
        }

        if (!response.scope) {
            // if there's no scope on the response, then assume all scopes granted (per-spec) and copy over scopes from original request
            response.scope = state.scope;
        }

        return Promise.resolve(response);
    };

    ResponseValidator.prototype._processClaims = function _processClaims(state, response) {
        var _this2 = this;

        if (response.isOpenIdConnect) {
            _Log.Log.debug("ResponseValidator._processClaims: response is OIDC, processing claims");

            response.profile = this._filterProtocolClaims(response.profile);

            if (state.skipUserInfo !== true && this._settings.loadUserInfo && response.access_token) {
                _Log.Log.debug("ResponseValidator._processClaims: loading user info");

                return this._userInfoService.getClaims(response.access_token).then(function (claims) {
                    _Log.Log.debug("ResponseValidator._processClaims: user info claims received from user info endpoint");

                    if (claims.sub !== response.profile.sub) {
                        _Log.Log.error("ResponseValidator._processClaims: sub from user info endpoint does not match sub in access_token");
                        return Promise.reject(new Error("sub from user info endpoint does not match sub in access_token"));
                    }

                    response.profile = _this2._mergeClaims(response.profile, claims);
                    _Log.Log.debug("ResponseValidator._processClaims: user info claims received, updated profile:", response.profile);

                    return response;
                });
            } else {
                _Log.Log.debug("ResponseValidator._processClaims: not loading user info");
            }
        } else {
            _Log.Log.debug("ResponseValidator._processClaims: response is not OIDC, not processing claims");
        }

        return Promise.resolve(response);
    };

    ResponseValidator.prototype._mergeClaims = function _mergeClaims(claims1, claims2) {
        var result = Object.assign({}, claims1);

        for (var name in claims2) {
            var values = claims2[name];
            if (!Array.isArray(values)) {
                values = [values];
            }

            for (var i = 0; i < values.length; i++) {
                var value = values[i];
                if (!result[name]) {
                    result[name] = value;
                } else if (Array.isArray(result[name])) {
                    if (result[name].indexOf(value) < 0) {
                        result[name].push(value);
                    }
                } else if (result[name] !== value) {
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                        result[name] = this._mergeClaims(result[name], value);
                    } else {
                        result[name] = [result[name], value];
                    }
                }
            }
        }

        return result;
    };

    ResponseValidator.prototype._filterProtocolClaims = function _filterProtocolClaims(claims) {
        _Log.Log.debug("ResponseValidator._filterProtocolClaims, incoming claims:", claims);

        var result = Object.assign({}, claims);

        if (this._settings._filterProtocolClaims) {
            ProtocolClaims.forEach(function (type) {
                delete result[type];
            });

            _Log.Log.debug("ResponseValidator._filterProtocolClaims: protocol claims filtered", result);
        } else {
            _Log.Log.debug("ResponseValidator._filterProtocolClaims: protocol claims not filtered");
        }

        return result;
    };

    ResponseValidator.prototype._validateTokens = function _validateTokens(state, response) {
        if (response.code) {
            _Log.Log.debug("ResponseValidator._validateTokens: Validating code");
            return this._processCode(state, response);
        }

        if (response.id_token) {
            if (response.access_token) {
                _Log.Log.debug("ResponseValidator._validateTokens: Validating id_token and access_token");
                return this._validateIdTokenAndAccessToken(state, response);
            }

            _Log.Log.debug("ResponseValidator._validateTokens: Validating id_token");
            return this._validateIdToken(state, response);
        }

        _Log.Log.debug("ResponseValidator._validateTokens: No code to process or id_token to validate");
        return Promise.resolve(response);
    };

    ResponseValidator.prototype._processCode = function _processCode(state, response) {
        var _this3 = this;

        var request = {
            client_id: state.client_id,
            client_secret: state.client_secret,
            code: response.code,
            redirect_uri: state.redirect_uri,
            code_verifier: state.code_verifier
        };

        if (state.extraTokenParams && _typeof(state.extraTokenParams) === 'object') {
            Object.assign(request, state.extraTokenParams);
        }

        return this._tokenClient.exchangeCode(request).then(function (tokenResponse) {

            for (var key in tokenResponse) {
                response[key] = tokenResponse[key];
            }

            if (response.id_token) {
                _Log.Log.debug("ResponseValidator._processCode: token response successful, processing id_token");
                return _this3._validateIdTokenAttributes(state, response);
            } else {
                _Log.Log.debug("ResponseValidator._processCode: token response successful, returning response");
            }

            return response;
        });
    };

    ResponseValidator.prototype._validateIdTokenAttributes = function _validateIdTokenAttributes(state, response) {
        var _this4 = this;

        return this._metadataService.getIssuer().then(function (issuer) {

            var audience = state.client_id;
            var clockSkewInSeconds = _this4._settings.clockSkew;
            _Log.Log.debug("ResponseValidator._validateIdTokenAttributes: Validaing JWT attributes; using clock skew (in seconds) of: ", clockSkewInSeconds);

            return _this4._joseUtil.validateJwtAttributes(response.id_token, issuer, audience, clockSkewInSeconds).then(function (payload) {

                if (state.nonce && state.nonce !== payload.nonce) {
                    _Log.Log.error("ResponseValidator._validateIdTokenAttributes: Invalid nonce in id_token");
                    return Promise.reject(new Error("Invalid nonce in id_token"));
                }

                if (!payload.sub) {
                    _Log.Log.error("ResponseValidator._validateIdTokenAttributes: No sub present in id_token");
                    return Promise.reject(new Error("No sub present in id_token"));
                }

                response.profile = payload;
                return response;
            });
        });
    };

    ResponseValidator.prototype._validateIdTokenAndAccessToken = function _validateIdTokenAndAccessToken(state, response) {
        var _this5 = this;

        return this._validateIdToken(state, response).then(function (response) {
            return _this5._validateAccessToken(response);
        });
    };

    ResponseValidator.prototype._validateIdToken = function _validateIdToken(state, response) {
        var _this6 = this;

        if (!state.nonce) {
            _Log.Log.error("ResponseValidator._validateIdToken: No nonce on state");
            return Promise.reject(new Error("No nonce on state"));
        }

        var jwt = this._joseUtil.parseJwt(response.id_token);
        if (!jwt || !jwt.header || !jwt.payload) {
            _Log.Log.error("ResponseValidator._validateIdToken: Failed to parse id_token", jwt);
            return Promise.reject(new Error("Failed to parse id_token"));
        }

        if (state.nonce !== jwt.payload.nonce) {
            _Log.Log.error("ResponseValidator._validateIdToken: Invalid nonce in id_token");
            return Promise.reject(new Error("Invalid nonce in id_token"));
        }

        var kid = jwt.header.kid;

        return this._metadataService.getIssuer().then(function (issuer) {
            _Log.Log.debug("ResponseValidator._validateIdToken: Received issuer");

            return _this6._metadataService.getSigningKeys().then(function (keys) {
                if (!keys) {
                    _Log.Log.error("ResponseValidator._validateIdToken: No signing keys from metadata");
                    return Promise.reject(new Error("No signing keys from metadata"));
                }

                _Log.Log.debug("ResponseValidator._validateIdToken: Received signing keys");
                var key = void 0;
                if (!kid) {
                    keys = _this6._filterByAlg(keys, jwt.header.alg);

                    if (keys.length > 1) {
                        _Log.Log.error("ResponseValidator._validateIdToken: No kid found in id_token and more than one key found in metadata");
                        return Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
                    } else {
                        // kid is mandatory only when there are multiple keys in the referenced JWK Set document
                        // see http://openid.net/specs/openid-connect-core-1_0.html#Signing
                        key = keys[0];
                    }
                } else {
                    key = keys.filter(function (key) {
                        return key.kid === kid;
                    })[0];
                }

                if (!key) {
                    _Log.Log.error("ResponseValidator._validateIdToken: No key matching kid or alg found in signing keys");
                    return Promise.reject(new Error("No key matching kid or alg found in signing keys"));
                }

                var audience = state.client_id;

                var clockSkewInSeconds = _this6._settings.clockSkew;
                _Log.Log.debug("ResponseValidator._validateIdToken: Validaing JWT; using clock skew (in seconds) of: ", clockSkewInSeconds);

                return _this6._joseUtil.validateJwt(response.id_token, key, issuer, audience, clockSkewInSeconds).then(function () {
                    _Log.Log.debug("ResponseValidator._validateIdToken: JWT validation successful");

                    if (!jwt.payload.sub) {
                        _Log.Log.error("ResponseValidator._validateIdToken: No sub present in id_token");
                        return Promise.reject(new Error("No sub present in id_token"));
                    }

                    response.profile = jwt.payload;

                    return response;
                });
            });
        });
    };

    ResponseValidator.prototype._filterByAlg = function _filterByAlg(keys, alg) {
        var kty = null;
        if (alg.startsWith("RS")) {
            kty = "RSA";
        } else if (alg.startsWith("PS")) {
            kty = "PS";
        } else if (alg.startsWith("ES")) {
            kty = "EC";
        } else {
            _Log.Log.debug("ResponseValidator._filterByAlg: alg not supported: ", alg);
            return [];
        }

        _Log.Log.debug("ResponseValidator._filterByAlg: Looking for keys that match kty: ", kty);

        keys = keys.filter(function (key) {
            return key.kty === kty;
        });

        _Log.Log.debug("ResponseValidator._filterByAlg: Number of keys that match kty: ", kty, keys.length);

        return keys;
    };

    ResponseValidator.prototype._validateAccessToken = function _validateAccessToken(response) {
        if (!response.profile) {
            _Log.Log.error("ResponseValidator._validateAccessToken: No profile loaded from id_token");
            return Promise.reject(new Error("No profile loaded from id_token"));
        }

        if (!response.profile.at_hash) {
            _Log.Log.error("ResponseValidator._validateAccessToken: No at_hash in id_token");
            return Promise.reject(new Error("No at_hash in id_token"));
        }

        if (!response.id_token) {
            _Log.Log.error("ResponseValidator._validateAccessToken: No id_token");
            return Promise.reject(new Error("No id_token"));
        }

        var jwt = this._joseUtil.parseJwt(response.id_token);
        if (!jwt || !jwt.header) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Failed to parse id_token", jwt);
            return Promise.reject(new Error("Failed to parse id_token"));
        }

        var hashAlg = jwt.header.alg;
        if (!hashAlg || hashAlg.length !== 5) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", hashAlg);
            return Promise.reject(new Error("Unsupported alg: " + hashAlg));
        }

        var hashBits = hashAlg.substr(2, 3);
        if (!hashBits) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", hashAlg, hashBits);
            return Promise.reject(new Error("Unsupported alg: " + hashAlg));
        }

        hashBits = parseInt(hashBits);
        if (hashBits !== 256 && hashBits !== 384 && hashBits !== 512) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Unsupported alg:", hashAlg, hashBits);
            return Promise.reject(new Error("Unsupported alg: " + hashAlg));
        }

        var sha = "sha" + hashBits;
        var hash = this._joseUtil.hashString(response.access_token, sha);
        if (!hash) {
            _Log.Log.error("ResponseValidator._validateAccessToken: access_token hash failed:", sha);
            return Promise.reject(new Error("Failed to validate at_hash"));
        }

        var left = hash.substr(0, hash.length / 2);
        var left_b64u = this._joseUtil.hexToBase64Url(left);
        if (left_b64u !== response.profile.at_hash) {
            _Log.Log.error("ResponseValidator._validateAccessToken: Failed to validate at_hash", left_b64u, response.profile.at_hash);
            return Promise.reject(new Error("Failed to validate at_hash"));
        }

        _Log.Log.debug("ResponseValidator._validateAccessToken: success");

        return Promise.resolve(response);
    };

    return ResponseValidator;
}();

/***/ }),

/***/ "./src/SessionMonitor.js":
/*!*******************************!*\
  !*** ./src/SessionMonitor.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SessionMonitor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _CheckSessionIFrame = __webpack_require__(/*! ./CheckSessionIFrame.js */ "./src/CheckSessionIFrame.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SessionMonitor = exports.SessionMonitor = function () {
    function SessionMonitor(userManager) {
        var _this = this;

        var CheckSessionIFrameCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _CheckSessionIFrame.CheckSessionIFrame;
        var timer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Global.Global.timer;

        _classCallCheck(this, SessionMonitor);

        if (!userManager) {
            _Log.Log.error("SessionMonitor.ctor: No user manager passed to SessionMonitor");
            throw new Error("userManager");
        }

        this._userManager = userManager;
        this._CheckSessionIFrameCtor = CheckSessionIFrameCtor;
        this._timer = timer;

        this._userManager.events.addUserLoaded(this._start.bind(this));
        this._userManager.events.addUserUnloaded(this._stop.bind(this));

        this._userManager.getUser().then(function (user) {
            // doing this manually here since calling getUser 
            // doesn't trigger load event.
            if (user) {
                _this._start(user);
            } else if (_this._settings.monitorAnonymousSession) {
                _this._userManager.querySessionStatus().then(function (session) {
                    var tmpUser = {
                        session_state: session.session_state
                    };
                    if (session.sub && session.sid) {
                        tmpUser.profile = {
                            sub: session.sub,
                            sid: session.sid
                        };
                    }
                    _this._start(tmpUser);
                }).catch(function (err) {
                    // catch to suppress errors since we're in a ctor
                    _Log.Log.error("SessionMonitor ctor: error from querySessionStatus:", err.message);
                });
            }
        }).catch(function (err) {
            // catch to suppress errors since we're in a ctor
            _Log.Log.error("SessionMonitor ctor: error from getUser:", err.message);
        });
    }

    SessionMonitor.prototype._start = function _start(user) {
        var _this2 = this;

        var session_state = user.session_state;

        if (session_state) {
            if (user.profile) {
                this._sub = user.profile.sub;
                this._sid = user.profile.sid;
                _Log.Log.debug("SessionMonitor._start: session_state:", session_state, ", sub:", this._sub);
            } else {
                this._sub = undefined;
                this._sid = undefined;
                _Log.Log.debug("SessionMonitor._start: session_state:", session_state, ", anonymous user");
            }

            if (!this._checkSessionIFrame) {
                this._metadataService.getCheckSessionIframe().then(function (url) {
                    if (url) {
                        _Log.Log.debug("SessionMonitor._start: Initializing check session iframe");

                        var client_id = _this2._client_id;
                        var interval = _this2._checkSessionInterval;
                        var stopOnError = _this2._stopCheckSessionOnError;

                        _this2._checkSessionIFrame = new _this2._CheckSessionIFrameCtor(_this2._callback.bind(_this2), client_id, url, interval, stopOnError);
                        _this2._checkSessionIFrame.load().then(function () {
                            _this2._checkSessionIFrame.start(session_state);
                        });
                    } else {
                        _Log.Log.warn("SessionMonitor._start: No check session iframe found in the metadata");
                    }
                }).catch(function (err) {
                    // catch to suppress errors since we're in non-promise callback
                    _Log.Log.error("SessionMonitor._start: Error from getCheckSessionIframe:", err.message);
                });
            } else {
                this._checkSessionIFrame.start(session_state);
            }
        }
    };

    SessionMonitor.prototype._stop = function _stop() {
        var _this3 = this;

        this._sub = undefined;
        this._sid = undefined;

        if (this._checkSessionIFrame) {
            _Log.Log.debug("SessionMonitor._stop");
            this._checkSessionIFrame.stop();
        }

        if (this._settings.monitorAnonymousSession) {
            // using a timer to delay re-initialization to avoid race conditions during signout
            var timerHandle = this._timer.setInterval(function () {
                _this3._timer.clearInterval(timerHandle);

                _this3._userManager.querySessionStatus().then(function (session) {
                    var tmpUser = {
                        session_state: session.session_state
                    };
                    if (session.sub && session.sid) {
                        tmpUser.profile = {
                            sub: session.sub,
                            sid: session.sid
                        };
                    }
                    _this3._start(tmpUser);
                }).catch(function (err) {
                    // catch to suppress errors since we're in a callback
                    _Log.Log.error("SessionMonitor: error from querySessionStatus:", err.message);
                });
            }, 1000);
        }
    };

    SessionMonitor.prototype._callback = function _callback() {
        var _this4 = this;

        this._userManager.querySessionStatus().then(function (session) {
            var raiseEvent = true;

            if (session) {
                if (session.sub === _this4._sub) {
                    raiseEvent = false;
                    _this4._checkSessionIFrame.start(session.session_state);

                    if (session.sid === _this4._sid) {
                        _Log.Log.debug("SessionMonitor._callback: Same sub still logged in at OP, restarting check session iframe; session_state:", session.session_state);
                    } else {
                        _Log.Log.debug("SessionMonitor._callback: Same sub still logged in at OP, session state has changed, restarting check session iframe; session_state:", session.session_state);
                        _this4._userManager.events._raiseUserSessionChanged();
                    }
                } else {
                    _Log.Log.debug("SessionMonitor._callback: Different subject signed into OP:", session.sub);
                }
            } else {
                _Log.Log.debug("SessionMonitor._callback: Subject no longer signed into OP");
            }

            if (raiseEvent) {
                if (_this4._sub) {
                    _Log.Log.debug("SessionMonitor._callback: SessionMonitor._callback; raising signed out event");
                    _this4._userManager.events._raiseUserSignedOut();
                } else {
                    _Log.Log.debug("SessionMonitor._callback: SessionMonitor._callback; raising signed in event");
                    _this4._userManager.events._raiseUserSignedIn();
                }
            }
        }).catch(function (err) {
            if (_this4._sub) {
                _Log.Log.debug("SessionMonitor._callback: Error calling queryCurrentSigninSession; raising signed out event", err.message);
                _this4._userManager.events._raiseUserSignedOut();
            }
        });
    };

    _createClass(SessionMonitor, [{
        key: '_settings',
        get: function get() {
            return this._userManager.settings;
        }
    }, {
        key: '_metadataService',
        get: function get() {
            return this._userManager.metadataService;
        }
    }, {
        key: '_client_id',
        get: function get() {
            return this._settings.client_id;
        }
    }, {
        key: '_checkSessionInterval',
        get: function get() {
            return this._settings.checkSessionInterval;
        }
    }, {
        key: '_stopCheckSessionOnError',
        get: function get() {
            return this._settings.stopCheckSessionOnError;
        }
    }]);

    return SessionMonitor;
}();

/***/ }),

/***/ "./src/SigninRequest.js":
/*!******************************!*\
  !*** ./src/SigninRequest.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SigninRequest = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

var _SigninState = __webpack_require__(/*! ./SigninState.js */ "./src/SigninState.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SigninRequest = exports.SigninRequest = function () {
    function SigninRequest(_ref) {
        var url = _ref.url,
            client_id = _ref.client_id,
            redirect_uri = _ref.redirect_uri,
            response_type = _ref.response_type,
            scope = _ref.scope,
            authority = _ref.authority,
            data = _ref.data,
            prompt = _ref.prompt,
            display = _ref.display,
            max_age = _ref.max_age,
            ui_locales = _ref.ui_locales,
            id_token_hint = _ref.id_token_hint,
            login_hint = _ref.login_hint,
            acr_values = _ref.acr_values,
            resource = _ref.resource,
            response_mode = _ref.response_mode,
            request = _ref.request,
            request_uri = _ref.request_uri,
            extraQueryParams = _ref.extraQueryParams,
            request_type = _ref.request_type,
            client_secret = _ref.client_secret,
            extraTokenParams = _ref.extraTokenParams,
            skipUserInfo = _ref.skipUserInfo;

        _classCallCheck(this, SigninRequest);

        if (!url) {
            _Log.Log.error("SigninRequest.ctor: No url passed");
            throw new Error("url");
        }
        if (!client_id) {
            _Log.Log.error("SigninRequest.ctor: No client_id passed");
            throw new Error("client_id");
        }
        if (!redirect_uri) {
            _Log.Log.error("SigninRequest.ctor: No redirect_uri passed");
            throw new Error("redirect_uri");
        }
        if (!response_type) {
            _Log.Log.error("SigninRequest.ctor: No response_type passed");
            throw new Error("response_type");
        }
        if (!scope) {
            _Log.Log.error("SigninRequest.ctor: No scope passed");
            throw new Error("scope");
        }
        if (!authority) {
            _Log.Log.error("SigninRequest.ctor: No authority passed");
            throw new Error("authority");
        }

        var oidc = SigninRequest.isOidc(response_type);
        var code = SigninRequest.isCode(response_type);

        if (!response_mode) {
            response_mode = SigninRequest.isCode(response_type) ? "query" : null;
        }

        this.state = new _SigninState.SigninState({ nonce: oidc,
            data: data, client_id: client_id, authority: authority, redirect_uri: redirect_uri,
            code_verifier: code,
            request_type: request_type, response_mode: response_mode,
            client_secret: client_secret, scope: scope, extraTokenParams: extraTokenParams, skipUserInfo: skipUserInfo });

        url = _UrlUtility.UrlUtility.addQueryParam(url, "client_id", client_id);
        url = _UrlUtility.UrlUtility.addQueryParam(url, "redirect_uri", redirect_uri);
        url = _UrlUtility.UrlUtility.addQueryParam(url, "response_type", response_type);
        url = _UrlUtility.UrlUtility.addQueryParam(url, "scope", scope);

        url = _UrlUtility.UrlUtility.addQueryParam(url, "state", this.state.id);
        if (oidc) {
            url = _UrlUtility.UrlUtility.addQueryParam(url, "nonce", this.state.nonce);
        }
        if (code) {
            url = _UrlUtility.UrlUtility.addQueryParam(url, "code_challenge", this.state.code_challenge);
            url = _UrlUtility.UrlUtility.addQueryParam(url, "code_challenge_method", "S256");
        }

        var optional = { prompt: prompt, display: display, max_age: max_age, ui_locales: ui_locales, id_token_hint: id_token_hint, login_hint: login_hint, acr_values: acr_values, resource: resource, request: request, request_uri: request_uri, response_mode: response_mode };
        for (var key in optional) {
            if (optional[key]) {
                url = _UrlUtility.UrlUtility.addQueryParam(url, key, optional[key]);
            }
        }

        for (var _key in extraQueryParams) {
            url = _UrlUtility.UrlUtility.addQueryParam(url, _key, extraQueryParams[_key]);
        }

        this.url = url;
    }

    SigninRequest.isOidc = function isOidc(response_type) {
        var result = response_type.split(/\s+/g).filter(function (item) {
            return item === "id_token";
        });
        return !!result[0];
    };

    SigninRequest.isOAuth = function isOAuth(response_type) {
        var result = response_type.split(/\s+/g).filter(function (item) {
            return item === "token";
        });
        return !!result[0];
    };

    SigninRequest.isCode = function isCode(response_type) {
        var result = response_type.split(/\s+/g).filter(function (item) {
            return item === "code";
        });
        return !!result[0];
    };

    return SigninRequest;
}();

/***/ }),

/***/ "./src/SigninResponse.js":
/*!*******************************!*\
  !*** ./src/SigninResponse.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SigninResponse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OidcScope = "openid";

var SigninResponse = exports.SigninResponse = function () {
    function SigninResponse(url) {
        var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#";

        _classCallCheck(this, SigninResponse);

        var values = _UrlUtility.UrlUtility.parseUrlFragment(url, delimiter);

        this.error = values.error;
        this.error_description = values.error_description;
        this.error_uri = values.error_uri;

        this.code = values.code;
        this.state = values.state;
        this.id_token = values.id_token;
        this.session_state = values.session_state;
        this.access_token = values.access_token;
        this.token_type = values.token_type;
        this.scope = values.scope;
        this.profile = undefined; // will be set from ResponseValidator

        this.expires_in = values.expires_in;
    }

    _createClass(SigninResponse, [{
        key: "expires_in",
        get: function get() {
            if (this.expires_at) {
                var now = parseInt(Date.now() / 1000);
                return this.expires_at - now;
            }
            return undefined;
        },
        set: function set(value) {
            var expires_in = parseInt(value);
            if (typeof expires_in === 'number' && expires_in > 0) {
                var now = parseInt(Date.now() / 1000);
                this.expires_at = now + expires_in;
            }
        }
    }, {
        key: "expired",
        get: function get() {
            var expires_in = this.expires_in;
            if (expires_in !== undefined) {
                return expires_in <= 0;
            }
            return undefined;
        }
    }, {
        key: "scopes",
        get: function get() {
            return (this.scope || "").split(" ");
        }
    }, {
        key: "isOpenIdConnect",
        get: function get() {
            return this.scopes.indexOf(OidcScope) >= 0 || !!this.id_token;
        }
    }]);

    return SigninResponse;
}();

/***/ }),

/***/ "./src/SigninState.js":
/*!****************************!*\
  !*** ./src/SigninState.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SigninState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _State2 = __webpack_require__(/*! ./State.js */ "./src/State.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");

var _random = __webpack_require__(/*! ./random.js */ "./src/random.js");

var _random2 = _interopRequireDefault(_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SigninState = exports.SigninState = function (_State) {
    _inherits(SigninState, _State);

    function SigninState() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            nonce = _ref.nonce,
            authority = _ref.authority,
            client_id = _ref.client_id,
            redirect_uri = _ref.redirect_uri,
            code_verifier = _ref.code_verifier,
            response_mode = _ref.response_mode,
            client_secret = _ref.client_secret,
            scope = _ref.scope,
            extraTokenParams = _ref.extraTokenParams,
            skipUserInfo = _ref.skipUserInfo;

        _classCallCheck(this, SigninState);

        var _this = _possibleConstructorReturn(this, _State.call(this, arguments[0]));

        if (nonce === true) {
            _this._nonce = (0, _random2.default)();
        } else if (nonce) {
            _this._nonce = nonce;
        }

        if (code_verifier === true) {
            // random() produces 32 length
            _this._code_verifier = (0, _random2.default)() + (0, _random2.default)() + (0, _random2.default)();
        } else if (code_verifier) {
            _this._code_verifier = code_verifier;
        }

        if (_this.code_verifier) {
            var hash = _JoseUtil.JoseUtil.hashString(_this.code_verifier, "SHA256");
            _this._code_challenge = _JoseUtil.JoseUtil.hexToBase64Url(hash);
        }

        _this._redirect_uri = redirect_uri;
        _this._authority = authority;
        _this._client_id = client_id;
        _this._response_mode = response_mode;
        _this._client_secret = client_secret;
        _this._scope = scope;
        _this._extraTokenParams = extraTokenParams;
        _this._skipUserInfo = skipUserInfo;
        return _this;
    }

    SigninState.prototype.toStorageString = function toStorageString() {
        _Log.Log.debug("SigninState.toStorageString");
        return JSON.stringify({
            id: this.id,
            data: this.data,
            created: this.created,
            request_type: this.request_type,
            nonce: this.nonce,
            code_verifier: this.code_verifier,
            redirect_uri: this.redirect_uri,
            authority: this.authority,
            client_id: this.client_id,
            response_mode: this.response_mode,
            client_secret: this.client_secret,
            scope: this.scope,
            extraTokenParams: this.extraTokenParams,
            skipUserInfo: this.skipUserInfo
        });
    };

    SigninState.fromStorageString = function fromStorageString(storageString) {
        _Log.Log.debug("SigninState.fromStorageString");
        var data = JSON.parse(storageString);
        return new SigninState(data);
    };

    _createClass(SigninState, [{
        key: 'nonce',
        get: function get() {
            return this._nonce;
        }
    }, {
        key: 'authority',
        get: function get() {
            return this._authority;
        }
    }, {
        key: 'client_id',
        get: function get() {
            return this._client_id;
        }
    }, {
        key: 'redirect_uri',
        get: function get() {
            return this._redirect_uri;
        }
    }, {
        key: 'code_verifier',
        get: function get() {
            return this._code_verifier;
        }
    }, {
        key: 'code_challenge',
        get: function get() {
            return this._code_challenge;
        }
    }, {
        key: 'response_mode',
        get: function get() {
            return this._response_mode;
        }
    }, {
        key: 'client_secret',
        get: function get() {
            return this._client_secret;
        }
    }, {
        key: 'scope',
        get: function get() {
            return this._scope;
        }
    }, {
        key: 'extraTokenParams',
        get: function get() {
            return this._extraTokenParams;
        }
    }, {
        key: 'skipUserInfo',
        get: function get() {
            return this._skipUserInfo;
        }
    }]);

    return SigninState;
}(_State2.State);

/***/ }),

/***/ "./src/SignoutRequest.js":
/*!*******************************!*\
  !*** ./src/SignoutRequest.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SignoutRequest = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

var _State = __webpack_require__(/*! ./State.js */ "./src/State.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SignoutRequest = exports.SignoutRequest = function SignoutRequest(_ref) {
    var url = _ref.url,
        id_token_hint = _ref.id_token_hint,
        post_logout_redirect_uri = _ref.post_logout_redirect_uri,
        data = _ref.data,
        extraQueryParams = _ref.extraQueryParams,
        request_type = _ref.request_type;

    _classCallCheck(this, SignoutRequest);

    if (!url) {
        _Log.Log.error("SignoutRequest.ctor: No url passed");
        throw new Error("url");
    }

    if (id_token_hint) {
        url = _UrlUtility.UrlUtility.addQueryParam(url, "id_token_hint", id_token_hint);
    }

    if (post_logout_redirect_uri) {
        url = _UrlUtility.UrlUtility.addQueryParam(url, "post_logout_redirect_uri", post_logout_redirect_uri);

        if (data) {
            this.state = new _State.State({ data: data, request_type: request_type });

            url = _UrlUtility.UrlUtility.addQueryParam(url, "state", this.state.id);
        }
    }

    for (var key in extraQueryParams) {
        url = _UrlUtility.UrlUtility.addQueryParam(url, key, extraQueryParams[key]);
    }

    this.url = url;
};

/***/ }),

/***/ "./src/SignoutResponse.js":
/*!********************************!*\
  !*** ./src/SignoutResponse.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SignoutResponse = undefined;

var _UrlUtility = __webpack_require__(/*! ./UrlUtility.js */ "./src/UrlUtility.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SignoutResponse = exports.SignoutResponse = function SignoutResponse(url) {
    _classCallCheck(this, SignoutResponse);

    var values = _UrlUtility.UrlUtility.parseUrlFragment(url, "?");

    this.error = values.error;
    this.error_description = values.error_description;
    this.error_uri = values.error_uri;

    this.state = values.state;
};

/***/ }),

/***/ "./src/SilentRenewService.js":
/*!***********************************!*\
  !*** ./src/SilentRenewService.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SilentRenewService = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var SilentRenewService = exports.SilentRenewService = function () {
    function SilentRenewService(userManager) {
        _classCallCheck(this, SilentRenewService);

        this._userManager = userManager;
    }

    SilentRenewService.prototype.start = function start() {
        if (!this._callback) {
            this._callback = this._tokenExpiring.bind(this);
            this._userManager.events.addAccessTokenExpiring(this._callback);

            // this will trigger loading of the user so the expiring events can be initialized
            this._userManager.getUser().then(function (user) {
                // deliberate nop
            }).catch(function (err) {
                // catch to suppress errors since we're in a ctor
                _Log.Log.error("SilentRenewService.start: Error from getUser:", err.message);
            });
        }
    };

    SilentRenewService.prototype.stop = function stop() {
        if (this._callback) {
            this._userManager.events.removeAccessTokenExpiring(this._callback);
            delete this._callback;
        }
    };

    SilentRenewService.prototype._tokenExpiring = function _tokenExpiring() {
        var _this = this;

        this._userManager.signinSilent().then(function (user) {
            _Log.Log.debug("SilentRenewService._tokenExpiring: Silent token renewal successful");
        }, function (err) {
            _Log.Log.error("SilentRenewService._tokenExpiring: Error from signinSilent:", err.message);
            _this._userManager.events._raiseSilentRenewError(err);
        });
    };

    return SilentRenewService;
}();

/***/ }),

/***/ "./src/State.js":
/*!**********************!*\
  !*** ./src/State.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.State = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _random = __webpack_require__(/*! ./random.js */ "./src/random.js");

var _random2 = _interopRequireDefault(_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var State = exports.State = function () {
    function State() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            id = _ref.id,
            data = _ref.data,
            created = _ref.created,
            request_type = _ref.request_type;

        _classCallCheck(this, State);

        this._id = id || (0, _random2.default)();
        this._data = data;

        if (typeof created === 'number' && created > 0) {
            this._created = created;
        } else {
            this._created = parseInt(Date.now() / 1000);
        }
        this._request_type = request_type;
    }

    State.prototype.toStorageString = function toStorageString() {
        _Log.Log.debug("State.toStorageString");
        return JSON.stringify({
            id: this.id,
            data: this.data,
            created: this.created,
            request_type: this.request_type
        });
    };

    State.fromStorageString = function fromStorageString(storageString) {
        _Log.Log.debug("State.fromStorageString");
        return new State(JSON.parse(storageString));
    };

    State.clearStaleState = function clearStaleState(storage, age) {

        var cutoff = Date.now() / 1000 - age;

        return storage.getAllKeys().then(function (keys) {
            _Log.Log.debug("State.clearStaleState: got keys", keys);

            var promises = [];

            var _loop = function _loop(i) {
                var key = keys[i];
                p = storage.get(key).then(function (item) {
                    var remove = false;

                    if (item) {
                        try {
                            var state = State.fromStorageString(item);

                            _Log.Log.debug("State.clearStaleState: got item from key: ", key, state.created);

                            if (state.created <= cutoff) {
                                remove = true;
                            }
                        } catch (e) {
                            _Log.Log.error("State.clearStaleState: Error parsing state for key", key, e.message);
                            remove = true;
                        }
                    } else {
                        _Log.Log.debug("State.clearStaleState: no item in storage for key: ", key);
                        remove = true;
                    }

                    if (remove) {
                        _Log.Log.debug("State.clearStaleState: removed item for key: ", key);
                        return storage.remove(key);
                    }
                });


                promises.push(p);
            };

            for (var i = 0; i < keys.length; i++) {
                var p;

                _loop(i);
            }

            _Log.Log.debug("State.clearStaleState: waiting on promise count:", promises.length);
            return Promise.all(promises);
        });
    };

    _createClass(State, [{
        key: 'id',
        get: function get() {
            return this._id;
        }
    }, {
        key: 'data',
        get: function get() {
            return this._data;
        }
    }, {
        key: 'created',
        get: function get() {
            return this._created;
        }
    }, {
        key: 'request_type',
        get: function get() {
            return this._request_type;
        }
    }]);

    return State;
}();

/***/ }),

/***/ "./src/Timer.js":
/*!**********************!*\
  !*** ./src/Timer.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Timer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

var _Event2 = __webpack_require__(/*! ./Event.js */ "./src/Event.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var TimerDuration = 5; // seconds

var Timer = exports.Timer = function (_Event) {
    _inherits(Timer, _Event);

    function Timer(name) {
        var timer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Global.Global.timer;
        var nowFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

        _classCallCheck(this, Timer);

        var _this = _possibleConstructorReturn(this, _Event.call(this, name));

        _this._timer = timer;

        if (nowFunc) {
            _this._nowFunc = nowFunc;
        } else {
            _this._nowFunc = function () {
                return Date.now() / 1000;
            };
        }
        return _this;
    }

    Timer.prototype.init = function init(duration) {
        if (duration <= 0) {
            duration = 1;
        }
        duration = parseInt(duration);

        var expiration = this.now + duration;
        if (this.expiration === expiration && this._timerHandle) {
            // no need to reinitialize to same expiration, so bail out
            _Log.Log.debug("Timer.init timer " + this._name + " skipping initialization since already initialized for expiration:", this.expiration);
            return;
        }

        this.cancel();

        _Log.Log.debug("Timer.init timer " + this._name + " for duration:", duration);
        this._expiration = expiration;

        // we're using a fairly short timer and then checking the expiration in the
        // callback to handle scenarios where the browser device sleeps, and then
        // the timers end up getting delayed.
        var timerDuration = TimerDuration;
        if (duration < timerDuration) {
            timerDuration = duration;
        }
        this._timerHandle = this._timer.setInterval(this._callback.bind(this), timerDuration * 1000);
    };

    Timer.prototype.cancel = function cancel() {
        if (this._timerHandle) {
            _Log.Log.debug("Timer.cancel: ", this._name);
            this._timer.clearInterval(this._timerHandle);
            this._timerHandle = null;
        }
    };

    Timer.prototype._callback = function _callback() {
        var diff = this._expiration - this.now;
        _Log.Log.debug("Timer.callback; " + this._name + " timer expires in:", diff);

        if (this._expiration <= this.now) {
            this.cancel();
            _Event.prototype.raise.call(this);
        }
    };

    _createClass(Timer, [{
        key: 'now',
        get: function get() {
            return parseInt(this._nowFunc());
        }
    }, {
        key: 'expiration',
        get: function get() {
            return this._expiration;
        }
    }]);

    return Timer;
}(_Event2.Event);

/***/ }),

/***/ "./src/TokenClient.js":
/*!****************************!*\
  !*** ./src/TokenClient.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TokenClient = undefined;

var _JsonService = __webpack_require__(/*! ./JsonService.js */ "./src/JsonService.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var TokenClient = exports.TokenClient = function () {
    function TokenClient(settings) {
        var JsonServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _JsonService.JsonService;
        var MetadataServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _MetadataService.MetadataService;

        _classCallCheck(this, TokenClient);

        if (!settings) {
            _Log.Log.error("TokenClient.ctor: No settings passed");
            throw new Error("settings");
        }

        this._settings = settings;
        this._jsonService = new JsonServiceCtor();
        this._metadataService = new MetadataServiceCtor(this._settings);
    }

    TokenClient.prototype.exchangeCode = function exchangeCode() {
        var _this = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.grant_type = args.grant_type || "authorization_code";
        args.client_id = args.client_id || this._settings.client_id;
        args.redirect_uri = args.redirect_uri || this._settings.redirect_uri;

        if (!args.code) {
            _Log.Log.error("TokenClient.exchangeCode: No code passed");
            return Promise.reject(new Error("A code is required"));
        }
        if (!args.redirect_uri) {
            _Log.Log.error("TokenClient.exchangeCode: No redirect_uri passed");
            return Promise.reject(new Error("A redirect_uri is required"));
        }
        if (!args.code_verifier) {
            _Log.Log.error("TokenClient.exchangeCode: No code_verifier passed");
            return Promise.reject(new Error("A code_verifier is required"));
        }
        if (!args.client_id) {
            _Log.Log.error("TokenClient.exchangeCode: No client_id passed");
            return Promise.reject(new Error("A client_id is required"));
        }

        return this._metadataService.getTokenEndpoint(false).then(function (url) {
            _Log.Log.debug("TokenClient.exchangeCode: Received token endpoint");

            return _this._jsonService.postForm(url, args).then(function (response) {
                _Log.Log.debug("TokenClient.exchangeCode: response received");
                return response;
            });
        });
    };

    TokenClient.prototype.exchangeRefreshToken = function exchangeRefreshToken() {
        var _this2 = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.grant_type = args.grant_type || "refresh_token";
        args.client_id = args.client_id || this._settings.client_id;
        args.client_secret = args.client_secret || this._settings.client_secret;

        if (!args.refresh_token) {
            _Log.Log.error("TokenClient.exchangeRefreshToken: No refresh_token passed");
            return Promise.reject(new Error("A refresh_token is required"));
        }
        if (!args.client_id) {
            _Log.Log.error("TokenClient.exchangeRefreshToken: No client_id passed");
            return Promise.reject(new Error("A client_id is required"));
        }

        return this._metadataService.getTokenEndpoint(false).then(function (url) {
            _Log.Log.debug("TokenClient.exchangeRefreshToken: Received token endpoint");

            return _this2._jsonService.postForm(url, args).then(function (response) {
                _Log.Log.debug("TokenClient.exchangeRefreshToken: response received");
                return response;
            });
        });
    };

    return TokenClient;
}();

/***/ }),

/***/ "./src/TokenRevocationClient.js":
/*!**************************************!*\
  !*** ./src/TokenRevocationClient.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TokenRevocationClient = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var AccessTokenTypeHint = "access_token";
var RefreshTokenTypeHint = "refresh_token";

var TokenRevocationClient = exports.TokenRevocationClient = function () {
    function TokenRevocationClient(settings) {
        var XMLHttpRequestCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Global.Global.XMLHttpRequest;
        var MetadataServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _MetadataService.MetadataService;

        _classCallCheck(this, TokenRevocationClient);

        if (!settings) {
            _Log.Log.error("TokenRevocationClient.ctor: No settings provided");
            throw new Error("No settings provided.");
        }

        this._settings = settings;
        this._XMLHttpRequestCtor = XMLHttpRequestCtor;
        this._metadataService = new MetadataServiceCtor(this._settings);
    }

    TokenRevocationClient.prototype.revoke = function revoke(token, required) {
        var _this = this;

        var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "access_token";

        if (!token) {
            _Log.Log.error("TokenRevocationClient.revoke: No token provided");
            throw new Error("No token provided.");
        }

        if (type !== AccessTokenTypeHint && type != RefreshTokenTypeHint) {
            _Log.Log.error("TokenRevocationClient.revoke: Invalid token type");
            throw new Error("Invalid token type.");
        }

        return this._metadataService.getRevocationEndpoint().then(function (url) {
            if (!url) {
                if (required) {
                    _Log.Log.error("TokenRevocationClient.revoke: Revocation not supported");
                    throw new Error("Revocation not supported");
                }

                // not required, so don't error and just return
                return;
            }

            _Log.Log.debug("TokenRevocationClient.revoke: Revoking " + type);
            var client_id = _this._settings.client_id;
            var client_secret = _this._settings.client_secret;
            return _this._revoke(url, client_id, client_secret, token, type);
        });
    };

    TokenRevocationClient.prototype._revoke = function _revoke(url, client_id, client_secret, token, type) {
        var _this2 = this;

        return new Promise(function (resolve, reject) {

            var xhr = new _this2._XMLHttpRequestCtor();
            xhr.open("POST", url);

            xhr.onload = function () {
                _Log.Log.debug("TokenRevocationClient.revoke: HTTP response received, status", xhr.status);

                if (xhr.status === 200) {
                    resolve();
                } else {
                    reject(Error(xhr.statusText + " (" + xhr.status + ")"));
                }
            };
            xhr.onerror = function () {
                _Log.Log.debug("TokenRevocationClient.revoke: Network Error.");
                reject("Network Error");
            };

            var body = "client_id=" + encodeURIComponent(client_id);
            if (client_secret) {
                body += "&client_secret=" + encodeURIComponent(client_secret);
            }
            body += "&token_type_hint=" + encodeURIComponent(type);
            body += "&token=" + encodeURIComponent(token);

            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(body);
        });
    };

    return TokenRevocationClient;
}();

/***/ }),

/***/ "./src/UrlUtility.js":
/*!***************************!*\
  !*** ./src/UrlUtility.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UrlUtility = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UrlUtility = exports.UrlUtility = function () {
    function UrlUtility() {
        _classCallCheck(this, UrlUtility);
    }

    UrlUtility.addQueryParam = function addQueryParam(url, name, value) {
        if (url.indexOf('?') < 0) {
            url += "?";
        }

        if (url[url.length - 1] !== "?") {
            url += "&";
        }

        url += encodeURIComponent(name);
        url += "=";
        url += encodeURIComponent(value);

        return url;
    };

    UrlUtility.parseUrlFragment = function parseUrlFragment(value) {
        var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#";
        var global = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Global.Global;

        if (typeof value !== 'string') {
            value = global.location.href;
        }

        var idx = value.lastIndexOf(delimiter);
        if (idx >= 0) {
            value = value.substr(idx + 1);
        }

        if (delimiter === "?") {
            // if we're doing query, then strip off hash fragment before we parse
            idx = value.indexOf('#');
            if (idx >= 0) {
                value = value.substr(0, idx);
            }
        }

        var params = {},
            regex = /([^&=]+)=([^&]*)/g,
            m;

        var counter = 0;
        while (m = regex.exec(value)) {
            params[decodeURIComponent(m[1])] = decodeURIComponent(m[2].replace(/\+/g, ' '));
            if (counter++ > 50) {
                _Log.Log.error("UrlUtility.parseUrlFragment: response exceeded expected number of parameters", value);
                return {
                    error: "Response exceeded expected number of parameters"
                };
            }
        }

        for (var prop in params) {
            return params;
        }

        return {};
    };

    return UrlUtility;
}();

/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.User = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = exports.User = function () {
    function User(_ref) {
        var id_token = _ref.id_token,
            session_state = _ref.session_state,
            access_token = _ref.access_token,
            refresh_token = _ref.refresh_token,
            token_type = _ref.token_type,
            scope = _ref.scope,
            profile = _ref.profile,
            expires_at = _ref.expires_at,
            state = _ref.state;

        _classCallCheck(this, User);

        this.id_token = id_token;
        this.session_state = session_state;
        this.access_token = access_token;
        this.refresh_token = refresh_token;
        this.token_type = token_type;
        this.scope = scope;
        this.profile = profile;
        this.expires_at = expires_at;
        this.state = state;
    }

    User.prototype.toStorageString = function toStorageString() {
        _Log.Log.debug("User.toStorageString");
        return JSON.stringify({
            id_token: this.id_token,
            session_state: this.session_state,
            access_token: this.access_token,
            refresh_token: this.refresh_token,
            token_type: this.token_type,
            scope: this.scope,
            profile: this.profile,
            expires_at: this.expires_at
        });
    };

    User.fromStorageString = function fromStorageString(storageString) {
        _Log.Log.debug("User.fromStorageString");
        return new User(JSON.parse(storageString));
    };

    _createClass(User, [{
        key: 'expires_in',
        get: function get() {
            if (this.expires_at) {
                var now = parseInt(Date.now() / 1000);
                return this.expires_at - now;
            }
            return undefined;
        },
        set: function set(value) {
            var expires_in = parseInt(value);
            if (typeof expires_in === 'number' && expires_in > 0) {
                var now = parseInt(Date.now() / 1000);
                this.expires_at = now + expires_in;
            }
        }
    }, {
        key: 'expired',
        get: function get() {
            var expires_in = this.expires_in;
            if (expires_in !== undefined) {
                return expires_in <= 0;
            }
            return undefined;
        }
    }, {
        key: 'scopes',
        get: function get() {
            return (this.scope || "").split(" ");
        }
    }]);

    return User;
}();

/***/ }),

/***/ "./src/UserInfoService.js":
/*!********************************!*\
  !*** ./src/UserInfoService.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserInfoService = undefined;

var _JsonService = __webpack_require__(/*! ./JsonService.js */ "./src/JsonService.js");

var _MetadataService = __webpack_require__(/*! ./MetadataService.js */ "./src/MetadataService.js");

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UserInfoService = exports.UserInfoService = function () {
    function UserInfoService(settings) {
        var JsonServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _JsonService.JsonService;
        var MetadataServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _MetadataService.MetadataService;
        var joseUtil = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _JoseUtil.JoseUtil;

        _classCallCheck(this, UserInfoService);

        if (!settings) {
            _Log.Log.error("UserInfoService.ctor: No settings passed");
            throw new Error("settings");
        }

        this._settings = settings;
        this._jsonService = new JsonServiceCtor(undefined, undefined, this._getClaimsFromJwt.bind(this));
        this._metadataService = new MetadataServiceCtor(this._settings);
        this._joseUtil = joseUtil;
    }

    UserInfoService.prototype.getClaims = function getClaims(token) {
        var _this = this;

        if (!token) {
            _Log.Log.error("UserInfoService.getClaims: No token passed");
            return Promise.reject(new Error("A token is required"));
        }

        return this._metadataService.getUserInfoEndpoint().then(function (url) {
            _Log.Log.debug("UserInfoService.getClaims: received userinfo url", url);

            return _this._jsonService.getJson(url, token).then(function (claims) {
                _Log.Log.debug("UserInfoService.getClaims: claims received", claims);
                return claims;
            });
        });
    };

    UserInfoService.prototype._getClaimsFromJwt = function _getClaimsFromJwt(req) {
        var _this2 = this;

        try {
            var jwt = this._joseUtil.parseJwt(req.responseText);
            if (!jwt || !jwt.header || !jwt.payload) {
                _Log.Log.error("UserInfoService._getClaimsFromJwt: Failed to parse JWT", jwt);
                return Promise.reject(new Error("Failed to parse id_token"));
            }

            var kid = jwt.header.kid;

            var issuerPromise = void 0;
            switch (this._settings.userInfoJwtIssuer) {
                case 'OP':
                    issuerPromise = this._metadataService.getIssuer();
                    break;
                case 'ANY':
                    issuerPromise = Promise.resolve(jwt.payload.iss);
                    break;
                default:
                    issuerPromise = Promise.resolve(this._settings.userInfoJwtIssuer);
                    break;
            }

            return issuerPromise.then(function (issuer) {
                _Log.Log.debug("UserInfoService._getClaimsFromJwt: Received issuer:" + issuer);

                return _this2._metadataService.getSigningKeys().then(function (keys) {
                    if (!keys) {
                        _Log.Log.error("UserInfoService._getClaimsFromJwt: No signing keys from metadata");
                        return Promise.reject(new Error("No signing keys from metadata"));
                    }

                    _Log.Log.debug("UserInfoService._getClaimsFromJwt: Received signing keys");
                    var key = void 0;
                    if (!kid) {
                        keys = _this2._filterByAlg(keys, jwt.header.alg);

                        if (keys.length > 1) {
                            _Log.Log.error("UserInfoService._getClaimsFromJwt: No kid found in id_token and more than one key found in metadata");
                            return Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
                        } else {
                            // kid is mandatory only when there are multiple keys in the referenced JWK Set document
                            // see http://openid.net/specs/openid-connect-core-1_0.html#Signing
                            key = keys[0];
                        }
                    } else {
                        key = keys.filter(function (key) {
                            return key.kid === kid;
                        })[0];
                    }

                    if (!key) {
                        _Log.Log.error("UserInfoService._getClaimsFromJwt: No key matching kid or alg found in signing keys");
                        return Promise.reject(new Error("No key matching kid or alg found in signing keys"));
                    }

                    var audience = _this2._settings.client_id;

                    var clockSkewInSeconds = _this2._settings.clockSkew;
                    _Log.Log.debug("UserInfoService._getClaimsFromJwt: Validaing JWT; using clock skew (in seconds) of: ", clockSkewInSeconds);

                    return _this2._joseUtil.validateJwt(req.responseText, key, issuer, audience, clockSkewInSeconds, undefined, true).then(function () {
                        _Log.Log.debug("UserInfoService._getClaimsFromJwt: JWT validation successful");
                        return jwt.payload;
                    });
                });
            });
            return;
        } catch (e) {
            _Log.Log.error("UserInfoService._getClaimsFromJwt: Error parsing JWT response", e.message);
            reject(e);
            return;
        }
    };

    UserInfoService.prototype._filterByAlg = function _filterByAlg(keys, alg) {
        var kty = null;
        if (alg.startsWith("RS")) {
            kty = "RSA";
        } else if (alg.startsWith("PS")) {
            kty = "PS";
        } else if (alg.startsWith("ES")) {
            kty = "EC";
        } else {
            _Log.Log.debug("UserInfoService._filterByAlg: alg not supported: ", alg);
            return [];
        }

        _Log.Log.debug("UserInfoService._filterByAlg: Looking for keys that match kty: ", kty);

        keys = keys.filter(function (key) {
            return key.kty === kty;
        });

        _Log.Log.debug("UserInfoService._filterByAlg: Number of keys that match kty: ", kty, keys.length);

        return keys;
    };

    return UserInfoService;
}();

/***/ }),

/***/ "./src/UserManager.js":
/*!****************************!*\
  !*** ./src/UserManager.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _OidcClient2 = __webpack_require__(/*! ./OidcClient.js */ "./src/OidcClient.js");

var _UserManagerSettings = __webpack_require__(/*! ./UserManagerSettings.js */ "./src/UserManagerSettings.js");

var _User = __webpack_require__(/*! ./User.js */ "./src/User.js");

var _UserManagerEvents = __webpack_require__(/*! ./UserManagerEvents.js */ "./src/UserManagerEvents.js");

var _SilentRenewService = __webpack_require__(/*! ./SilentRenewService.js */ "./src/SilentRenewService.js");

var _SessionMonitor = __webpack_require__(/*! ./SessionMonitor.js */ "./src/SessionMonitor.js");

var _TokenRevocationClient = __webpack_require__(/*! ./TokenRevocationClient.js */ "./src/TokenRevocationClient.js");

var _TokenClient = __webpack_require__(/*! ./TokenClient.js */ "./src/TokenClient.js");

var _JoseUtil = __webpack_require__(/*! ./JoseUtil.js */ "./src/JoseUtilRsa.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UserManager = exports.UserManager = function (_OidcClient) {
    _inherits(UserManager, _OidcClient);

    function UserManager() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var SilentRenewServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _SilentRenewService.SilentRenewService;
        var SessionMonitorCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _SessionMonitor.SessionMonitor;
        var TokenRevocationClientCtor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _TokenRevocationClient.TokenRevocationClient;
        var TokenClientCtor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _TokenClient.TokenClient;
        var joseUtil = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _JoseUtil.JoseUtil;

        _classCallCheck(this, UserManager);

        if (!(settings instanceof _UserManagerSettings.UserManagerSettings)) {
            settings = new _UserManagerSettings.UserManagerSettings(settings);
        }

        var _this = _possibleConstructorReturn(this, _OidcClient.call(this, settings));

        _this._events = new _UserManagerEvents.UserManagerEvents(settings);
        _this._silentRenewService = new SilentRenewServiceCtor(_this);

        // order is important for the following properties; these services depend upon the events.
        if (_this.settings.automaticSilentRenew) {
            _Log.Log.debug("UserManager.ctor: automaticSilentRenew is configured, setting up silent renew");
            _this.startSilentRenew();
        }

        if (_this.settings.monitorSession) {
            _Log.Log.debug("UserManager.ctor: monitorSession is configured, setting up session monitor");
            _this._sessionMonitor = new SessionMonitorCtor(_this);
        }

        _this._tokenRevocationClient = new TokenRevocationClientCtor(_this._settings);
        _this._tokenClient = new TokenClientCtor(_this._settings);
        _this._joseUtil = joseUtil;
        return _this;
    }

    UserManager.prototype.getUser = function getUser() {
        var _this2 = this;

        return this._loadUser().then(function (user) {
            if (user) {
                _Log.Log.info("UserManager.getUser: user loaded");

                _this2._events.load(user, false);

                return user;
            } else {
                _Log.Log.info("UserManager.getUser: user not found in storage");
                return null;
            }
        });
    };

    UserManager.prototype.removeUser = function removeUser() {
        var _this3 = this;

        return this.storeUser(null).then(function () {
            _Log.Log.info("UserManager.removeUser: user removed from storage");
            _this3._events.unload();
        });
    };

    UserManager.prototype.signinRedirect = function signinRedirect() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "si:r";
        var navParams = {
            useReplaceToNavigate: args.useReplaceToNavigate
        };
        return this._signinStart(args, this._redirectNavigator, navParams).then(function () {
            _Log.Log.info("UserManager.signinRedirect: successful");
        });
    };

    UserManager.prototype.signinRedirectCallback = function signinRedirectCallback(url) {
        return this._signinEnd(url || this._redirectNavigator.url).then(function (user) {
            if (user.profile && user.profile.sub) {
                _Log.Log.info("UserManager.signinRedirectCallback: successful, signed in sub: ", user.profile.sub);
            } else {
                _Log.Log.info("UserManager.signinRedirectCallback: no sub");
            }

            return user;
        });
    };

    UserManager.prototype.signinPopup = function signinPopup() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "si:p";
        var url = args.redirect_uri || this.settings.popup_redirect_uri || this.settings.redirect_uri;
        if (!url) {
            _Log.Log.error("UserManager.signinPopup: No popup_redirect_uri or redirect_uri configured");
            return Promise.reject(new Error("No popup_redirect_uri or redirect_uri configured"));
        }

        args.redirect_uri = url;
        args.display = "popup";

        return this._signin(args, this._popupNavigator, {
            startUrl: url,
            popupWindowFeatures: args.popupWindowFeatures || this.settings.popupWindowFeatures,
            popupWindowTarget: args.popupWindowTarget || this.settings.popupWindowTarget
        }).then(function (user) {
            if (user) {
                if (user.profile && user.profile.sub) {
                    _Log.Log.info("UserManager.signinPopup: signinPopup successful, signed in sub: ", user.profile.sub);
                } else {
                    _Log.Log.info("UserManager.signinPopup: no sub");
                }
            }

            return user;
        });
    };

    UserManager.prototype.signinPopupCallback = function signinPopupCallback(url) {
        return this._signinCallback(url, this._popupNavigator).then(function (user) {
            if (user) {
                if (user.profile && user.profile.sub) {
                    _Log.Log.info("UserManager.signinPopupCallback: successful, signed in sub: ", user.profile.sub);
                } else {
                    _Log.Log.info("UserManager.signinPopupCallback: no sub");
                }
            }

            return user;
        }).catch(function (err) {
            _Log.Log.error( true && err.message);
        });
    };

    UserManager.prototype.signinSilent = function signinSilent() {
        var _this4 = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "si:s";
        // first determine if we have a refresh token, or need to use iframe
        return this._loadUser().then(function (user) {
            if (user && user.refresh_token) {
                args.refresh_token = user.refresh_token;
                return _this4._useRefreshToken(args);
            } else {
                args.id_token_hint = args.id_token_hint || _this4.settings.includeIdTokenInSilentRenew && user && user.id_token;
                if (user && _this4._settings.validateSubOnSilentRenew) {
                    _Log.Log.debug("UserManager.signinSilent, subject prior to silent renew: ", user.profile.sub);
                    args.current_sub = user.profile.sub;
                }
                return _this4._signinSilentIframe(args);
            }
        });
    };

    UserManager.prototype._useRefreshToken = function _useRefreshToken() {
        var _this5 = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return this._tokenClient.exchangeRefreshToken(args).then(function (result) {
            if (!result) {
                _Log.Log.error("UserManager._useRefreshToken: No response returned from token endpoint");
                return Promise.reject("No response returned from token endpoint");
            }
            if (!result.access_token) {
                _Log.Log.error("UserManager._useRefreshToken: No access token returned from token endpoint");
                return Promise.reject("No access token returned from token endpoint");
            }

            return _this5._loadUser().then(function (user) {
                if (user) {
                    var idTokenValidation = Promise.resolve();
                    if (result.id_token) {
                        idTokenValidation = _this5._validateIdTokenFromTokenRefreshToken(user.profile, result.id_token);
                    }

                    return idTokenValidation.then(function () {
                        _Log.Log.debug("UserManager._useRefreshToken: refresh token response success");
                        user.id_token = result.id_token;
                        user.access_token = result.access_token;
                        user.refresh_token = result.refresh_token || user.refresh_token;
                        user.expires_in = result.expires_in;

                        return _this5.storeUser(user).then(function () {
                            _this5._events.load(user);
                            return user;
                        });
                    });
                } else {
                    return null;
                }
            });
        });
    };

    UserManager.prototype._validateIdTokenFromTokenRefreshToken = function _validateIdTokenFromTokenRefreshToken(profile, id_token) {
        var _this6 = this;

        return this._metadataService.getIssuer().then(function (issuer) {
            return _this6._joseUtil.validateJwtAttributes(id_token, issuer, _this6._settings.client_id, _this6._settings.clockSkew).then(function (payload) {
                if (!payload) {
                    _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: Failed to validate id_token");
                    return Promise.reject(new Error("Failed to validate id_token"));
                }
                if (payload.sub !== profile.sub) {
                    _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: sub in id_token does not match current sub");
                    return Promise.reject(new Error("sub in id_token does not match current sub"));
                }
                if (payload.auth_time && payload.auth_time !== profile.auth_time) {
                    _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: auth_time in id_token does not match original auth_time");
                    return Promise.reject(new Error("auth_time in id_token does not match original auth_time"));
                }
                if (payload.azp && payload.azp !== profile.azp) {
                    _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: azp in id_token does not match original azp");
                    return Promise.reject(new Error("azp in id_token does not match original azp"));
                }
                if (!payload.azp && profile.azp) {
                    _Log.Log.error("UserManager._validateIdTokenFromTokenRefreshToken: azp not in id_token, but present in original id_token");
                    return Promise.reject(new Error("azp not in id_token, but present in original id_token"));
                }
            });
        });
    };

    UserManager.prototype._signinSilentIframe = function _signinSilentIframe() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var url = args.redirect_uri || this.settings.silent_redirect_uri || this.settings.redirect_uri;
        if (!url) {
            _Log.Log.error("UserManager.signinSilent: No silent_redirect_uri configured");
            return Promise.reject(new Error("No silent_redirect_uri configured"));
        }

        args.redirect_uri = url;
        args.prompt = args.prompt || "none";

        return this._signin(args, this._iframeNavigator, {
            startUrl: url,
            silentRequestTimeout: args.silentRequestTimeout || this.settings.silentRequestTimeout
        }).then(function (user) {
            if (user) {
                if (user.profile && user.profile.sub) {
                    _Log.Log.info("UserManager.signinSilent: successful, signed in sub: ", user.profile.sub);
                } else {
                    _Log.Log.info("UserManager.signinSilent: no sub");
                }
            }

            return user;
        });
    };

    UserManager.prototype.signinSilentCallback = function signinSilentCallback(url) {
        return this._signinCallback(url, this._iframeNavigator).then(function (user) {
            if (user) {
                if (user.profile && user.profile.sub) {
                    _Log.Log.info("UserManager.signinSilentCallback: successful, signed in sub: ", user.profile.sub);
                } else {
                    _Log.Log.info("UserManager.signinSilentCallback: no sub");
                }
            }

            return user;
        });
    };

    UserManager.prototype.signinCallback = function signinCallback(url) {
        var _this7 = this;

        return this.readSigninResponseState(url).then(function (_ref) {
            var state = _ref.state,
                response = _ref.response;

            if (state.request_type === "si:r") {
                return _this7.signinRedirectCallback(url);
            }
            if (state.request_type === "si:p") {
                return _this7.signinPopupCallback(url);
            }
            if (state.request_type === "si:s") {
                return _this7.signinSilentCallback(url);
            }
            return Promise.reject(new Error("invalid response_type in state"));
        });
    };

    UserManager.prototype.signoutCallback = function signoutCallback(url, keepOpen) {
        var _this8 = this;

        return this.readSignoutResponseState(url).then(function (_ref2) {
            var state = _ref2.state,
                response = _ref2.response;

            if (state) {
                if (state.request_type === "so:r") {
                    return _this8.signoutRedirectCallback(url);
                }
                if (state.request_type === "so:p") {
                    return _this8.signoutPopupCallback(url, keepOpen);
                }
                return Promise.reject(new Error("invalid response_type in state"));
            }
            return response;
        });
    };

    UserManager.prototype.querySessionStatus = function querySessionStatus() {
        var _this9 = this;

        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "si:s"; // this acts like a signin silent
        var url = args.redirect_uri || this.settings.silent_redirect_uri || this.settings.redirect_uri;
        if (!url) {
            _Log.Log.error("UserManager.querySessionStatus: No silent_redirect_uri configured");
            return Promise.reject(new Error("No silent_redirect_uri configured"));
        }

        args.redirect_uri = url;
        args.prompt = "none";
        args.response_type = args.response_type || this.settings.query_status_response_type;
        args.scope = args.scope || "openid";
        args.skipUserInfo = true;

        return this._signinStart(args, this._iframeNavigator, {
            startUrl: url,
            silentRequestTimeout: args.silentRequestTimeout || this.settings.silentRequestTimeout
        }).then(function (navResponse) {
            return _this9.processSigninResponse(navResponse.url).then(function (signinResponse) {
                _Log.Log.debug("UserManager.querySessionStatus: got signin response");

                if (signinResponse.session_state && signinResponse.profile.sub) {
                    _Log.Log.info("UserManager.querySessionStatus: querySessionStatus success for sub: ", signinResponse.profile.sub);
                    return {
                        session_state: signinResponse.session_state,
                        sub: signinResponse.profile.sub,
                        sid: signinResponse.profile.sid
                    };
                } else {
                    _Log.Log.info("querySessionStatus successful, user not authenticated");
                }
            }).catch(function (err) {
                if (err.session_state && _this9.settings.monitorAnonymousSession) {
                    if (err.message == "login_required" || err.message == "consent_required" || err.message == "interaction_required" || err.message == "account_selection_required") {
                        _Log.Log.info("UserManager.querySessionStatus: querySessionStatus success for anonymous user");
                        return {
                            session_state: err.session_state
                        };
                    }
                }

                throw err;
            });
        });
    };

    UserManager.prototype._signin = function _signin(args, navigator) {
        var _this10 = this;

        var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return this._signinStart(args, navigator, navigatorParams).then(function (navResponse) {
            return _this10._signinEnd(navResponse.url, args);
        });
    };

    UserManager.prototype._signinStart = function _signinStart(args, navigator) {
        var _this11 = this;

        var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


        return navigator.prepare(navigatorParams).then(function (handle) {
            _Log.Log.debug("UserManager._signinStart: got navigator window handle");

            return _this11.createSigninRequest(args).then(function (signinRequest) {
                _Log.Log.debug("UserManager._signinStart: got signin request");

                navigatorParams.url = signinRequest.url;
                navigatorParams.id = signinRequest.state.id;

                return handle.navigate(navigatorParams);
            }).catch(function (err) {
                if (handle.close) {
                    _Log.Log.debug("UserManager._signinStart: Error after preparing navigator, closing navigator window");
                    handle.close();
                }
                throw err;
            });
        });
    };

    UserManager.prototype._signinEnd = function _signinEnd(url) {
        var _this12 = this;

        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return this.processSigninResponse(url).then(function (signinResponse) {
            _Log.Log.debug("UserManager._signinEnd: got signin response");

            var user = new _User.User(signinResponse);

            if (args.current_sub) {
                if (args.current_sub !== user.profile.sub) {
                    _Log.Log.debug("UserManager._signinEnd: current user does not match user returned from signin. sub from signin: ", user.profile.sub);
                    return Promise.reject(new Error("login_required"));
                } else {
                    _Log.Log.debug("UserManager._signinEnd: current user matches user returned from signin");
                }
            }

            return _this12.storeUser(user).then(function () {
                _Log.Log.debug("UserManager._signinEnd: user stored");

                _this12._events.load(user);

                return user;
            });
        });
    };

    UserManager.prototype._signinCallback = function _signinCallback(url, navigator) {
        _Log.Log.debug("UserManager._signinCallback");
        return navigator.callback(url);
    };

    UserManager.prototype.signoutRedirect = function signoutRedirect() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "so:r";
        var postLogoutRedirectUri = args.post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
        if (postLogoutRedirectUri) {
            args.post_logout_redirect_uri = postLogoutRedirectUri;
        }
        var navParams = {
            useReplaceToNavigate: args.useReplaceToNavigate
        };
        return this._signoutStart(args, this._redirectNavigator, navParams).then(function () {
            _Log.Log.info("UserManager.signoutRedirect: successful");
        });
    };

    UserManager.prototype.signoutRedirectCallback = function signoutRedirectCallback(url) {
        return this._signoutEnd(url || this._redirectNavigator.url).then(function (response) {
            _Log.Log.info("UserManager.signoutRedirectCallback: successful");
            return response;
        });
    };

    UserManager.prototype.signoutPopup = function signoutPopup() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        args = Object.assign({}, args);

        args.request_type = "so:p";
        var url = args.post_logout_redirect_uri || this.settings.popup_post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
        args.post_logout_redirect_uri = url;
        args.display = "popup";
        if (args.post_logout_redirect_uri) {
            // we're putting a dummy entry in here because we
            // need a unique id from the state for notification
            // to the parent window, which is necessary if we
            // plan to return back to the client after signout
            // and so we can close the popup after signout
            args.state = args.state || {};
        }

        return this._signout(args, this._popupNavigator, {
            startUrl: url,
            popupWindowFeatures: args.popupWindowFeatures || this.settings.popupWindowFeatures,
            popupWindowTarget: args.popupWindowTarget || this.settings.popupWindowTarget
        }).then(function () {
            _Log.Log.info("UserManager.signoutPopup: successful");
        });
    };

    UserManager.prototype.signoutPopupCallback = function signoutPopupCallback(url, keepOpen) {
        if (typeof keepOpen === 'undefined' && typeof url === 'boolean') {
            keepOpen = url;
            url = null;
        }

        var delimiter = '?';
        return this._popupNavigator.callback(url, keepOpen, delimiter).then(function () {
            _Log.Log.info("UserManager.signoutPopupCallback: successful");
        });
    };

    UserManager.prototype._signout = function _signout(args, navigator) {
        var _this13 = this;

        var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return this._signoutStart(args, navigator, navigatorParams).then(function (navResponse) {
            return _this13._signoutEnd(navResponse.url);
        });
    };

    UserManager.prototype._signoutStart = function _signoutStart() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var _this14 = this;

        var navigator = arguments[1];
        var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return navigator.prepare(navigatorParams).then(function (handle) {
            _Log.Log.debug("UserManager._signoutStart: got navigator window handle");

            return _this14._loadUser().then(function (user) {
                _Log.Log.debug("UserManager._signoutStart: loaded current user from storage");

                var revokePromise = _this14._settings.revokeAccessTokenOnSignout ? _this14._revokeInternal(user) : Promise.resolve();
                return revokePromise.then(function () {

                    var id_token = args.id_token_hint || user && user.id_token;
                    if (id_token) {
                        _Log.Log.debug("UserManager._signoutStart: Setting id_token into signout request");
                        args.id_token_hint = id_token;
                    }

                    return _this14.removeUser().then(function () {
                        _Log.Log.debug("UserManager._signoutStart: user removed, creating signout request");

                        return _this14.createSignoutRequest(args).then(function (signoutRequest) {
                            _Log.Log.debug("UserManager._signoutStart: got signout request");

                            navigatorParams.url = signoutRequest.url;
                            if (signoutRequest.state) {
                                navigatorParams.id = signoutRequest.state.id;
                            }
                            return handle.navigate(navigatorParams);
                        });
                    });
                });
            }).catch(function (err) {
                if (handle.close) {
                    _Log.Log.debug("UserManager._signoutStart: Error after preparing navigator, closing navigator window");
                    handle.close();
                }
                throw err;
            });
        });
    };

    UserManager.prototype._signoutEnd = function _signoutEnd(url) {
        return this.processSignoutResponse(url).then(function (signoutResponse) {
            _Log.Log.debug("UserManager._signoutEnd: got signout response");

            return signoutResponse;
        });
    };

    UserManager.prototype.revokeAccessToken = function revokeAccessToken() {
        var _this15 = this;

        return this._loadUser().then(function (user) {
            return _this15._revokeInternal(user, true).then(function (success) {
                if (success) {
                    _Log.Log.debug("UserManager.revokeAccessToken: removing token properties from user and re-storing");

                    user.access_token = null;
                    user.refresh_token = null;
                    user.expires_at = null;
                    user.token_type = null;

                    return _this15.storeUser(user).then(function () {
                        _Log.Log.debug("UserManager.revokeAccessToken: user stored");
                        _this15._events.load(user);
                    });
                }
            });
        }).then(function () {
            _Log.Log.info("UserManager.revokeAccessToken: access token revoked successfully");
        });
    };

    UserManager.prototype._revokeInternal = function _revokeInternal(user, required) {
        var _this16 = this;

        if (user) {
            var access_token = user.access_token;
            var refresh_token = user.refresh_token;

            return this._revokeAccessTokenInternal(access_token, required).then(function (atSuccess) {
                return _this16._revokeRefreshTokenInternal(refresh_token, required).then(function (rtSuccess) {
                    if (!atSuccess && !rtSuccess) {
                        _Log.Log.debug("UserManager.revokeAccessToken: no need to revoke due to no token(s), or JWT format");
                    }

                    return atSuccess || rtSuccess;
                });
            });
        }

        return Promise.resolve(false);
    };

    UserManager.prototype._revokeAccessTokenInternal = function _revokeAccessTokenInternal(access_token, required) {
        // check for JWT vs. reference token
        if (!access_token || access_token.indexOf('.') >= 0) {
            return Promise.resolve(false);
        }

        return this._tokenRevocationClient.revoke(access_token, required).then(function () {
            return true;
        });
    };

    UserManager.prototype._revokeRefreshTokenInternal = function _revokeRefreshTokenInternal(refresh_token, required) {
        if (!refresh_token) {
            return Promise.resolve(false);
        }

        return this._tokenRevocationClient.revoke(refresh_token, required, "refresh_token").then(function () {
            return true;
        });
    };

    UserManager.prototype.startSilentRenew = function startSilentRenew() {
        this._silentRenewService.start();
    };

    UserManager.prototype.stopSilentRenew = function stopSilentRenew() {
        this._silentRenewService.stop();
    };

    UserManager.prototype._loadUser = function _loadUser() {
        return this._userStore.get(this._userStoreKey).then(function (storageString) {
            if (storageString) {
                _Log.Log.debug("UserManager._loadUser: user storageString loaded");
                return _User.User.fromStorageString(storageString);
            }

            _Log.Log.debug("UserManager._loadUser: no user storageString");
            return null;
        });
    };

    UserManager.prototype.storeUser = function storeUser(user) {
        if (user) {
            _Log.Log.debug("UserManager.storeUser: storing user");

            var storageString = user.toStorageString();
            return this._userStore.set(this._userStoreKey, storageString);
        } else {
            _Log.Log.debug("storeUser.storeUser: removing user");
            return this._userStore.remove(this._userStoreKey);
        }
    };

    _createClass(UserManager, [{
        key: '_redirectNavigator',
        get: function get() {
            return this.settings.redirectNavigator;
        }
    }, {
        key: '_popupNavigator',
        get: function get() {
            return this.settings.popupNavigator;
        }
    }, {
        key: '_iframeNavigator',
        get: function get() {
            return this.settings.iframeNavigator;
        }
    }, {
        key: '_userStore',
        get: function get() {
            return this.settings.userStore;
        }
    }, {
        key: 'events',
        get: function get() {
            return this._events;
        }
    }, {
        key: '_userStoreKey',
        get: function get() {
            return 'user:' + this.settings.authority + ':' + this.settings.client_id;
        }
    }]);

    return UserManager;
}(_OidcClient2.OidcClient);

/***/ }),

/***/ "./src/UserManagerEvents.js":
/*!**********************************!*\
  !*** ./src/UserManagerEvents.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserManagerEvents = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _AccessTokenEvents2 = __webpack_require__(/*! ./AccessTokenEvents.js */ "./src/AccessTokenEvents.js");

var _Event = __webpack_require__(/*! ./Event.js */ "./src/Event.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var UserManagerEvents = exports.UserManagerEvents = function (_AccessTokenEvents) {
    _inherits(UserManagerEvents, _AccessTokenEvents);

    function UserManagerEvents(settings) {
        _classCallCheck(this, UserManagerEvents);

        var _this = _possibleConstructorReturn(this, _AccessTokenEvents.call(this, settings));

        _this._userLoaded = new _Event.Event("User loaded");
        _this._userUnloaded = new _Event.Event("User unloaded");
        _this._silentRenewError = new _Event.Event("Silent renew error");
        _this._userSignedIn = new _Event.Event("User signed in");
        _this._userSignedOut = new _Event.Event("User signed out");
        _this._userSessionChanged = new _Event.Event("User session changed");
        return _this;
    }

    UserManagerEvents.prototype.load = function load(user) {
        var raiseEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        _Log.Log.debug("UserManagerEvents.load");
        _AccessTokenEvents.prototype.load.call(this, user);
        if (raiseEvent) {
            this._userLoaded.raise(user);
        }
    };

    UserManagerEvents.prototype.unload = function unload() {
        _Log.Log.debug("UserManagerEvents.unload");
        _AccessTokenEvents.prototype.unload.call(this);
        this._userUnloaded.raise();
    };

    UserManagerEvents.prototype.addUserLoaded = function addUserLoaded(cb) {
        this._userLoaded.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserLoaded = function removeUserLoaded(cb) {
        this._userLoaded.removeHandler(cb);
    };

    UserManagerEvents.prototype.addUserUnloaded = function addUserUnloaded(cb) {
        this._userUnloaded.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserUnloaded = function removeUserUnloaded(cb) {
        this._userUnloaded.removeHandler(cb);
    };

    UserManagerEvents.prototype.addSilentRenewError = function addSilentRenewError(cb) {
        this._silentRenewError.addHandler(cb);
    };

    UserManagerEvents.prototype.removeSilentRenewError = function removeSilentRenewError(cb) {
        this._silentRenewError.removeHandler(cb);
    };

    UserManagerEvents.prototype._raiseSilentRenewError = function _raiseSilentRenewError(e) {
        _Log.Log.debug("UserManagerEvents._raiseSilentRenewError", e.message);
        this._silentRenewError.raise(e);
    };

    UserManagerEvents.prototype.addUserSignedIn = function addUserSignedIn(cb) {
        this._userSignedIn.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserSignedIn = function removeUserSignedIn(cb) {
        this._userSignedIn.removeHandler(cb);
    };

    UserManagerEvents.prototype._raiseUserSignedIn = function _raiseUserSignedIn() {
        _Log.Log.debug("UserManagerEvents._raiseUserSignedIn");
        this._userSignedIn.raise();
    };

    UserManagerEvents.prototype.addUserSignedOut = function addUserSignedOut(cb) {
        this._userSignedOut.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserSignedOut = function removeUserSignedOut(cb) {
        this._userSignedOut.removeHandler(cb);
    };

    UserManagerEvents.prototype._raiseUserSignedOut = function _raiseUserSignedOut() {
        _Log.Log.debug("UserManagerEvents._raiseUserSignedOut");
        this._userSignedOut.raise();
    };

    UserManagerEvents.prototype.addUserSessionChanged = function addUserSessionChanged(cb) {
        this._userSessionChanged.addHandler(cb);
    };

    UserManagerEvents.prototype.removeUserSessionChanged = function removeUserSessionChanged(cb) {
        this._userSessionChanged.removeHandler(cb);
    };

    UserManagerEvents.prototype._raiseUserSessionChanged = function _raiseUserSessionChanged() {
        _Log.Log.debug("UserManagerEvents._raiseUserSessionChanged");
        this._userSessionChanged.raise();
    };

    return UserManagerEvents;
}(_AccessTokenEvents2.AccessTokenEvents);

/***/ }),

/***/ "./src/UserManagerSettings.js":
/*!************************************!*\
  !*** ./src/UserManagerSettings.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserManagerSettings = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _OidcClientSettings2 = __webpack_require__(/*! ./OidcClientSettings.js */ "./src/OidcClientSettings.js");

var _RedirectNavigator = __webpack_require__(/*! ./RedirectNavigator.js */ "./src/RedirectNavigator.js");

var _PopupNavigator = __webpack_require__(/*! ./PopupNavigator.js */ "./src/PopupNavigator.js");

var _IFrameNavigator = __webpack_require__(/*! ./IFrameNavigator.js */ "./src/IFrameNavigator.js");

var _WebStorageStateStore = __webpack_require__(/*! ./WebStorageStateStore.js */ "./src/WebStorageStateStore.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

var _SigninRequest = __webpack_require__(/*! ./SigninRequest.js */ "./src/SigninRequest.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var DefaultAccessTokenExpiringNotificationTime = 60;
var DefaultCheckSessionInterval = 2000;

var UserManagerSettings = exports.UserManagerSettings = function (_OidcClientSettings) {
    _inherits(UserManagerSettings, _OidcClientSettings);

    function UserManagerSettings() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            popup_redirect_uri = _ref.popup_redirect_uri,
            popup_post_logout_redirect_uri = _ref.popup_post_logout_redirect_uri,
            popupWindowFeatures = _ref.popupWindowFeatures,
            popupWindowTarget = _ref.popupWindowTarget,
            silent_redirect_uri = _ref.silent_redirect_uri,
            silentRequestTimeout = _ref.silentRequestTimeout,
            _ref$automaticSilentR = _ref.automaticSilentRenew,
            automaticSilentRenew = _ref$automaticSilentR === undefined ? false : _ref$automaticSilentR,
            _ref$validateSubOnSil = _ref.validateSubOnSilentRenew,
            validateSubOnSilentRenew = _ref$validateSubOnSil === undefined ? false : _ref$validateSubOnSil,
            _ref$includeIdTokenIn = _ref.includeIdTokenInSilentRenew,
            includeIdTokenInSilentRenew = _ref$includeIdTokenIn === undefined ? true : _ref$includeIdTokenIn,
            _ref$monitorSession = _ref.monitorSession,
            monitorSession = _ref$monitorSession === undefined ? true : _ref$monitorSession,
            _ref$monitorAnonymous = _ref.monitorAnonymousSession,
            monitorAnonymousSession = _ref$monitorAnonymous === undefined ? false : _ref$monitorAnonymous,
            _ref$checkSessionInte = _ref.checkSessionInterval,
            checkSessionInterval = _ref$checkSessionInte === undefined ? DefaultCheckSessionInterval : _ref$checkSessionInte,
            _ref$stopCheckSession = _ref.stopCheckSessionOnError,
            stopCheckSessionOnError = _ref$stopCheckSession === undefined ? true : _ref$stopCheckSession,
            query_status_response_type = _ref.query_status_response_type,
            _ref$revokeAccessToke = _ref.revokeAccessTokenOnSignout,
            revokeAccessTokenOnSignout = _ref$revokeAccessToke === undefined ? false : _ref$revokeAccessToke,
            _ref$accessTokenExpir = _ref.accessTokenExpiringNotificationTime,
            accessTokenExpiringNotificationTime = _ref$accessTokenExpir === undefined ? DefaultAccessTokenExpiringNotificationTime : _ref$accessTokenExpir,
            _ref$redirectNavigato = _ref.redirectNavigator,
            redirectNavigator = _ref$redirectNavigato === undefined ? new _RedirectNavigator.RedirectNavigator() : _ref$redirectNavigato,
            _ref$popupNavigator = _ref.popupNavigator,
            popupNavigator = _ref$popupNavigator === undefined ? new _PopupNavigator.PopupNavigator() : _ref$popupNavigator,
            _ref$iframeNavigator = _ref.iframeNavigator,
            iframeNavigator = _ref$iframeNavigator === undefined ? new _IFrameNavigator.IFrameNavigator() : _ref$iframeNavigator,
            _ref$userStore = _ref.userStore,
            userStore = _ref$userStore === undefined ? new _WebStorageStateStore.WebStorageStateStore({ store: _Global.Global.sessionStorage }) : _ref$userStore;

        _classCallCheck(this, UserManagerSettings);

        var _this = _possibleConstructorReturn(this, _OidcClientSettings.call(this, arguments[0]));

        _this._popup_redirect_uri = popup_redirect_uri;
        _this._popup_post_logout_redirect_uri = popup_post_logout_redirect_uri;
        _this._popupWindowFeatures = popupWindowFeatures;
        _this._popupWindowTarget = popupWindowTarget;

        _this._silent_redirect_uri = silent_redirect_uri;
        _this._silentRequestTimeout = silentRequestTimeout;
        _this._automaticSilentRenew = automaticSilentRenew;
        _this._validateSubOnSilentRenew = validateSubOnSilentRenew;
        _this._includeIdTokenInSilentRenew = includeIdTokenInSilentRenew;
        _this._accessTokenExpiringNotificationTime = accessTokenExpiringNotificationTime;

        _this._monitorSession = monitorSession;
        _this._monitorAnonymousSession = monitorAnonymousSession;
        _this._checkSessionInterval = checkSessionInterval;
        _this._stopCheckSessionOnError = stopCheckSessionOnError;
        if (query_status_response_type) {
            _this._query_status_response_type = query_status_response_type;
        } else if (arguments[0] && arguments[0].response_type) {
            _this._query_status_response_type = _SigninRequest.SigninRequest.isOidc(arguments[0].response_type) ? "id_token" : "code";
        } else {
            _this._query_status_response_type = "id_token";
        }
        _this._revokeAccessTokenOnSignout = revokeAccessTokenOnSignout;

        _this._redirectNavigator = redirectNavigator;
        _this._popupNavigator = popupNavigator;
        _this._iframeNavigator = iframeNavigator;

        _this._userStore = userStore;
        return _this;
    }

    _createClass(UserManagerSettings, [{
        key: 'popup_redirect_uri',
        get: function get() {
            return this._popup_redirect_uri;
        }
    }, {
        key: 'popup_post_logout_redirect_uri',
        get: function get() {
            return this._popup_post_logout_redirect_uri;
        }
    }, {
        key: 'popupWindowFeatures',
        get: function get() {
            return this._popupWindowFeatures;
        }
    }, {
        key: 'popupWindowTarget',
        get: function get() {
            return this._popupWindowTarget;
        }
    }, {
        key: 'silent_redirect_uri',
        get: function get() {
            return this._silent_redirect_uri;
        }
    }, {
        key: 'silentRequestTimeout',
        get: function get() {
            return this._silentRequestTimeout;
        }
    }, {
        key: 'automaticSilentRenew',
        get: function get() {
            return this._automaticSilentRenew;
        }
    }, {
        key: 'validateSubOnSilentRenew',
        get: function get() {
            return this._validateSubOnSilentRenew;
        }
    }, {
        key: 'includeIdTokenInSilentRenew',
        get: function get() {
            return this._includeIdTokenInSilentRenew;
        }
    }, {
        key: 'accessTokenExpiringNotificationTime',
        get: function get() {
            return this._accessTokenExpiringNotificationTime;
        }
    }, {
        key: 'monitorSession',
        get: function get() {
            return this._monitorSession;
        }
    }, {
        key: 'monitorAnonymousSession',
        get: function get() {
            return this._monitorAnonymousSession;
        }
    }, {
        key: 'checkSessionInterval',
        get: function get() {
            return this._checkSessionInterval;
        }
    }, {
        key: 'stopCheckSessionOnError',
        get: function get() {
            return this._stopCheckSessionOnError;
        }
    }, {
        key: 'query_status_response_type',
        get: function get() {
            return this._query_status_response_type;
        }
    }, {
        key: 'revokeAccessTokenOnSignout',
        get: function get() {
            return this._revokeAccessTokenOnSignout;
        }
    }, {
        key: 'redirectNavigator',
        get: function get() {
            return this._redirectNavigator;
        }
    }, {
        key: 'popupNavigator',
        get: function get() {
            return this._popupNavigator;
        }
    }, {
        key: 'iframeNavigator',
        get: function get() {
            return this._iframeNavigator;
        }
    }, {
        key: 'userStore',
        get: function get() {
            return this._userStore;
        }
    }]);

    return UserManagerSettings;
}(_OidcClientSettings2.OidcClientSettings);

/***/ }),

/***/ "./src/WebStorageStateStore.js":
/*!*************************************!*\
  !*** ./src/WebStorageStateStore.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WebStorageStateStore = undefined;

var _Log = __webpack_require__(/*! ./Log.js */ "./src/Log.js");

var _Global = __webpack_require__(/*! ./Global.js */ "./src/Global.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

var WebStorageStateStore = exports.WebStorageStateStore = function () {
    function WebStorageStateStore() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$prefix = _ref.prefix,
            prefix = _ref$prefix === undefined ? "oidc." : _ref$prefix,
            _ref$store = _ref.store,
            store = _ref$store === undefined ? _Global.Global.localStorage : _ref$store;

        _classCallCheck(this, WebStorageStateStore);

        this._store = store;
        this._prefix = prefix;
    }

    WebStorageStateStore.prototype.set = function set(key, value) {
        _Log.Log.debug("WebStorageStateStore.set", key);

        key = this._prefix + key;

        this._store.setItem(key, value);

        return Promise.resolve();
    };

    WebStorageStateStore.prototype.get = function get(key) {
        _Log.Log.debug("WebStorageStateStore.get", key);

        key = this._prefix + key;

        var item = this._store.getItem(key);

        return Promise.resolve(item);
    };

    WebStorageStateStore.prototype.remove = function remove(key) {
        _Log.Log.debug("WebStorageStateStore.remove", key);

        key = this._prefix + key;

        var item = this._store.getItem(key);
        this._store.removeItem(key);

        return Promise.resolve(item);
    };

    WebStorageStateStore.prototype.getAllKeys = function getAllKeys() {
        _Log.Log.debug("WebStorageStateStore.getAllKeys");

        var keys = [];

        for (var index = 0; index < this._store.length; index++) {
            var key = this._store.key(index);

            if (key.indexOf(this._prefix) === 0) {
                keys.push(key.substr(this._prefix.length));
            }
        }

        return Promise.resolve(keys);
    };

    return WebStorageStateStore;
}();

/***/ }),

/***/ "./src/crypto/rsa.js":
/*!***************************!*\
  !*** ./src/crypto/rsa.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AllowedSigningAlgs = exports.b64tohex = exports.hextob64u = exports.crypto = exports.X509 = exports.KeyUtil = exports.jws = undefined;

var _jsbn = __webpack_require__(/*! jsbn */ "./node_modules/jsbn/index.js");

var _jsbn2 = _interopRequireDefault(_jsbn);

var _sha = __webpack_require__(/*! crypto-js/sha256 */ "./node_modules/crypto-js/sha256.js");

var _sha2 = _interopRequireDefault(_sha);

var _base64Js = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js");

var _base64Js2 = _interopRequireDefault(_base64Js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BigInteger = _jsbn2.default.BigInteger;

/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
/*
Based on the work of Auth0
https://github.com/auth0/idtoken-verifier
https://github.com/auth0/idtoken-verifier/blob/master/LICENSE
Which is based on the work of Tom Wu
http://www-cs-students.stanford.edu/~tjw/jsbn/
http://www-cs-students.stanford.edu/~tjw/jsbn/LICENSE
*/

/*
 * To support most basic OpenId use cases (using RSA256), we can get away without
 * requiring the full jrsasign feature set (and resulting massive bundle).
 *
 * - Support RSA 256 algorithm (optionally could support RSA* family)
 * - Parse JWT tokens using the (n) parameter.
 * - Verify signature of id_tokens
 * - Verify at_hash of access_tokens
 * - Perform common base64 encoding/decoding tasks.
 */

var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var b64pad = "=";

var Base64 = {
    b64tohex: function b64tohex(s) {
        var ret = "";
        var i;
        var k = 0; // b64 state, 0-3
        var slop;
        for (i = 0; i < s.length; ++i) {
            if (s.charAt(i) === b64pad) break;
            var v = b64map.indexOf(s.charAt(i));
            if (v < 0) continue;
            if (k === 0) {
                ret += String.fromCharCode(v >> 2);
                slop = v & 3;
                k = 1;
            } else if (k === 1) {
                ret += String.fromCharCode(slop << 2 | v >> 4);
                slop = v & 0xf;
                k = 2;
            } else if (k === 2) {
                ret += String.fromCharCode(slop);
                ret += String.fromCharCode(v >> 2);
                slop = v & 3;
                k = 3;
            } else {
                ret += String.fromCharCode(slop << 2 | v >> 4);
                ret += String.fromCharCode(v & 0xf);
                k = 0;
            }
        }
        if (k === 1) ret += String.fromCharCode(slop << 2);
        return ret;
    },
    hexToBase64: function hexToBase64(h) {
        var i;
        var c;
        var ret = "";
        for (i = 0; i + 3 <= h.length; i += 3) {
            c = parseInt(h.substring(i, i + 3), 16);
            ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
        }
        if (i + 1 === h.length) {
            c = parseInt(h.substring(i, i + 1), 16);
            ret += b64map.charAt(c << 2);
        } else if (i + 2 === h.length) {
            c = parseInt(h.substring(i, i + 2), 16);
            ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
        }
        if (b64pad) while ((ret.length & 3) > 0) {
            ret += b64pad;
        }return ret;
    },
    padding: function padding(str) {
        var mod = str.length % 4;
        var pad = 4 - mod;

        if (mod === 0) {
            return str;
        }

        return str + new Array(1 + pad).join('=');
    },
    byteArrayToHex: function byteArrayToHex(raw) {
        var HEX = '';

        for (var i = 0; i < raw.length; i++) {
            var _hex = raw[i].toString(16);
            HEX += _hex.length === 2 ? _hex : '0' + _hex;
        }

        return HEX;
    },
    decodeToHEX: function decodeToHEX(str) {
        return Base64.byteArrayToHex(_base64Js2.default.toByteArray(Base64.padding(str)));
    },
    base64ToBase64Url: function base64ToBase64Url(s) {
        s = s.replace(/=/g, "");
        s = s.replace(/\+/g, "-");
        s = s.replace(/\//g, "_");
        return s;
    },
    urlDecode: function urlDecode(str) {
        str = str.replace(/-/g, '+') // Convert '-' to '+'
        .replace(/_/g, '/') // Convert '_' to '/'
        .replace(/\s/g, ' '); // Convert '\s' to ' '

        return atob(str);
    }
};

var DigestInfoHead = {
    sha1: '3021300906052b0e03021a05000414',
    sha224: '302d300d06096086480165030402040500041c',
    sha256: '3031300d060960864801650304020105000420',
    sha384: '3041300d060960864801650304020205000430',
    sha512: '3051300d060960864801650304020305000440',
    md2: '3020300c06082a864886f70d020205000410',
    md5: '3020300c06082a864886f70d020505000410',
    ripemd160: '3021300906052b2403020105000414'
};

var DigestAlgs = {
    sha256: _sha2.default,
    SHA256: _sha2.default
};

function RSAVerifier(modulus, exp) {
    this.n = null;
    this.e = 0;

    if (modulus != null && exp != null && modulus.length > 0 && exp.length > 0) {
        this.n = new BigInteger(modulus, 16);
        this.e = parseInt(exp, 16);
    } else {
        throw new Error('Invalid key data');
    }
}

function getAlgorithmFromDigest(hDigestInfo) {
    for (var algName in DigestInfoHead) {
        var head = DigestInfoHead[algName];
        var len = head.length;

        if (hDigestInfo.substring(0, len) === head) {
            return {
                alg: algName,
                hash: hDigestInfo.substring(len)
            };
        }
    }
    return [];
}

RSAVerifier.prototype.verify = function (msg, encsig) {
    encsig = Base64.decodeToHEX(encsig);
    encsig = encsig.replace(/[^0-9a-f]|[\s\n]]/ig, '');

    var sig = new BigInteger(encsig, 16);

    if (sig.bitLength() > this.n.bitLength()) {
        throw new Error('Signature does not match with the key modulus.');
    }

    var decryptedSig = sig.modPowInt(this.e, this.n);
    var digest = decryptedSig.toString(16).replace(/^1f+00/, '');
    var digestInfo = getAlgorithmFromDigest(digest);

    if (digestInfo.length === 0) {
        return false;
    }

    if (!DigestAlgs.hasOwnProperty(digestInfo.alg)) {
        throw new Error('Hashing algorithm is not supported.');
    }

    var msgHash = DigestAlgs[digestInfo.alg](msg).toString();
    return digestInfo.hash === msgHash;
};

var AllowedSigningAlgs = ['RS256'];

var jws = {
    JWS: {
        parse: function parse(token) {
            var parts = token.split('.');
            var header;
            var payload;

            // This diverges from Auth0's implementation, which throws rather than
            // returning undefined
            if (parts.length !== 3) {
                return undefined;
            }

            try {
                header = JSON.parse(Base64.urlDecode(parts[0]));
                payload = JSON.parse(Base64.urlDecode(parts[1]));
            } catch (e) {
                return new Error('Token header or payload is not valid JSON');
            }

            return {
                headerObj: header,
                payloadObj: payload
            };
        },
        verify: function verify(jwt, key) {
            var allowedSigningAlgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

            allowedSigningAlgs.forEach(function (alg) {
                if (AllowedSigningAlgs.indexOf(alg) === -1) {
                    throw new Error('Invalid signing algorithm: ' + alg);
                }
            });
            var verify = new RSAVerifier(key.n, key.e);
            var parts = jwt.split('.');

            var headerAndPayload = [parts[0], parts[1]].join('.');
            return verify.verify(headerAndPayload, parts[2]);
        }
    }
};

var KeyUtil = {
    /**
     * Returns decoded keys in Hex format for use in crypto functions.
     * Supports modulus/exponent-style keys.
     *
     * @param {object} key the security key
     * @returns
     */
    getKey: function getKey(key) {
        if (key.kty === 'RSA') {
            return {
                e: Base64.decodeToHEX(key.e),
                n: Base64.decodeToHEX(key.n)
            };
        }

        return null;
    }
};

var X509 = {
    getPublicKeyFromCertPEM: function getPublicKeyFromCertPEM() {
        throw new Error('Not implemented. Use the full oidc-client library if you need support for X509.');
    }
};

var crypto = {
    Util: {
        hashString: function hashString(value, alg) {
            var hashFunc = DigestAlgs[alg];
            return hashFunc(value).toString();
        }
    }
};

function hextob64u(s) {
    if (s.length % 2 === 1) {
        s = '0' + s;
    }
    return Base64.base64ToBase64Url(Base64.hexToBase64(s));
}

var b64tohex = Base64.b64tohex;
exports.jws = jws;
exports.KeyUtil = KeyUtil;
exports.X509 = X509;
exports.crypto = crypto;
exports.hextob64u = hextob64u;
exports.b64tohex = b64tohex;
exports.AllowedSigningAlgs = AllowedSigningAlgs;

/***/ }),

/***/ "./src/random.js":
/*!***********************!*\
  !*** ./src/random.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = random;
/**
 * Generates RFC4122 version 4 guid ()
 */

var crypto = typeof window !== 'undefined' ? window.crypto || window.msCrypto : null;

function _cryptoUuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
  });
}

function _uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (c ^ Math.random() * 16 >> c / 4).toString(16);
  });
}

function random() {
  var hasCrypto = crypto != 'undefined' && crypto !== null;
  var hasRandomValues = hasCrypto && typeof crypto.getRandomValues != 'undefined';
  var uuid = hasRandomValues ? _cryptoUuidv4 : _uuidv4;
  return uuid().replace(/-/g, '');
}
module.exports = exports['default'];

/***/ }),

/***/ "./version.js":
/*!********************!*\
  !*** ./version.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Version = "1.11.2";exports.Version = Version;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3NoYTI1Ni5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNibi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQWNjZXNzVG9rZW5FdmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NoZWNrU2Vzc2lvbklGcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZG92YUlGcmFtZU5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZG92YVBvcHVwTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9Db3Jkb3ZhUG9wdXBXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Vycm9yUmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9HbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0lGcmFtZU5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSUZyYW1lV2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9Jbk1lbW9yeVdlYlN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pvc2VVdGlsSW1wbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSm9zZVV0aWxSc2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pzb25TZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9Mb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01ldGFkYXRhU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT2lkY0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT2lkY0NsaWVudFNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9Qb3B1cE5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUG9wdXBXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlZGlyZWN0TmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXNwb25zZVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2Vzc2lvbk1vbml0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25pblJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25pblJlc3BvbnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9TaWduaW5TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbm91dFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25vdXRSZXNwb25zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lsZW50UmVuZXdTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rva2VuQ2xpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9Ub2tlblJldm9jYXRpb25DbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VybFV0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJJbmZvU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJNYW5hZ2VyRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyTWFuYWdlclNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9XZWJTdG9yYWdlU3RhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3J5cHRvL3JzYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFuZG9tLmpzIiwid2VicGFjazovLy8uL3ZlcnNpb24uanMiXSwibmFtZXMiOlsiVmVyc2lvbiIsIkxvZyIsIk9pZGNDbGllbnQiLCJPaWRjQ2xpZW50U2V0dGluZ3MiLCJXZWJTdG9yYWdlU3RhdGVTdG9yZSIsIkluTWVtb3J5V2ViU3RvcmFnZSIsIlVzZXJNYW5hZ2VyIiwiQWNjZXNzVG9rZW5FdmVudHMiLCJNZXRhZGF0YVNlcnZpY2UiLCJDb3Jkb3ZhUG9wdXBOYXZpZ2F0b3IiLCJDb3Jkb3ZhSUZyYW1lTmF2aWdhdG9yIiwiQ2hlY2tTZXNzaW9uSUZyYW1lIiwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50IiwiU2Vzc2lvbk1vbml0b3IiLCJHbG9iYWwiLCJVc2VyIiwiRGVmYXVsdEFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lIiwiYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUiLCJhY2Nlc3NUb2tlbkV4cGlyaW5nVGltZXIiLCJUaW1lciIsImFjY2Vzc1Rva2VuRXhwaXJlZFRpbWVyIiwiX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lIiwiX2FjY2Vzc1Rva2VuRXhwaXJpbmciLCJfYWNjZXNzVG9rZW5FeHBpcmVkIiwibG9hZCIsImNvbnRhaW5lciIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNfaW4iLCJ1bmRlZmluZWQiLCJkdXJhdGlvbiIsImRlYnVnIiwiZXhwaXJpbmciLCJpbml0IiwiY2FuY2VsIiwiZXhwaXJlZCIsInVubG9hZCIsImFkZEFjY2Vzc1Rva2VuRXhwaXJpbmciLCJjYiIsImFkZEhhbmRsZXIiLCJyZW1vdmVBY2Nlc3NUb2tlbkV4cGlyaW5nIiwicmVtb3ZlSGFuZGxlciIsImFkZEFjY2Vzc1Rva2VuRXhwaXJlZCIsInJlbW92ZUFjY2Vzc1Rva2VuRXhwaXJlZCIsIkRlZmF1bHRJbnRlcnZhbCIsImNhbGxiYWNrIiwiY2xpZW50X2lkIiwidXJsIiwiaW50ZXJ2YWwiLCJzdG9wT25FcnJvciIsIl9jYWxsYmFjayIsIl9jbGllbnRfaWQiLCJfdXJsIiwiX2ludGVydmFsIiwiX3N0b3BPbkVycm9yIiwiaWR4IiwiaW5kZXhPZiIsIl9mcmFtZV9vcmlnaW4iLCJzdWJzdHIiLCJfZnJhbWUiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsIlByb21pc2UiLCJyZXNvbHZlIiwib25sb2FkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiX2JvdW5kTWVzc2FnZUV2ZW50IiwiX21lc3NhZ2UiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJvcmlnaW4iLCJzb3VyY2UiLCJjb250ZW50V2luZG93IiwiZGF0YSIsImVycm9yIiwic3RvcCIsInN0YXJ0Iiwic2Vzc2lvbl9zdGF0ZSIsIl9zZXNzaW9uX3N0YXRlIiwic2VuZCIsInBvc3RNZXNzYWdlIiwiX3RpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicHJlcGFyZSIsInBhcmFtcyIsInBvcHVwV2luZG93RmVhdHVyZXMiLCJwb3B1cCIsIkNvcmRvdmFQb3B1cFdpbmRvdyIsIkRlZmF1bHRQb3B1cEZlYXR1cmVzIiwiRGVmYXVsdFBvcHVwVGFyZ2V0IiwiX3Byb21pc2UiLCJyZWplY3QiLCJfcmVzb2x2ZSIsIl9yZWplY3QiLCJmZWF0dXJlcyIsInRhcmdldCIsInBvcHVwV2luZG93VGFyZ2V0IiwicmVkaXJlY3RfdXJpIiwic3RhcnRVcmwiLCJfaXNJbkFwcEJyb3dzZXJJbnN0YWxsZWQiLCJjb3Jkb3ZhTWV0YWRhdGEiLCJzb21lIiwibmFtZSIsImhhc093blByb3BlcnR5IiwibmF2aWdhdGUiLCJfZXJyb3IiLCJjb3Jkb3ZhIiwicmVxdWlyZSIsIm1ldGFkYXRhIiwiX3BvcHVwIiwiSW5BcHBCcm93c2VyIiwib3BlbiIsIl9leGl0Q2FsbGJhY2tFdmVudCIsIl9leGl0Q2FsbGJhY2siLCJfbG9hZFN0YXJ0Q2FsbGJhY2tFdmVudCIsIl9sb2FkU3RhcnRDYWxsYmFjayIsInByb21pc2UiLCJldmVudCIsIl9zdWNjZXNzIiwibWVzc2FnZSIsIl9jbGVhbnVwIiwiRXJyb3IiLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJFcnJvclJlc3BvbnNlIiwiZXJyb3JfZGVzY3JpcHRpb24iLCJlcnJvcl91cmkiLCJzdGF0ZSIsIkV2ZW50IiwiX25hbWUiLCJfY2FsbGJhY2tzIiwicHVzaCIsImZpbmRJbmRleCIsIml0ZW0iLCJzcGxpY2UiLCJyYWlzZSIsImkiLCJsZW5ndGgiLCJ0aW1lciIsImhhbmRsZSIsInRlc3RpbmciLCJyZXF1ZXN0IiwiX3Rlc3RpbmciLCJzZXRYTUxIdHRwUmVxdWVzdCIsIm5ld1JlcXVlc3QiLCJsb2NhdGlvbiIsImxvY2FsU3RvcmFnZSIsInNlc3Npb25TdG9yYWdlIiwiWE1MSHR0cFJlcXVlc3QiLCJJRnJhbWVOYXZpZ2F0b3IiLCJmcmFtZSIsIklGcmFtZVdpbmRvdyIsIm5vdGlmeVBhcmVudCIsIkRlZmF1bHRUaW1lb3V0IiwidGltZW91dCIsInNpbGVudFJlcXVlc3RUaW1lb3V0Iiwic2V0VGltZW91dCIsIl90aW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicmVtb3ZlQ2hpbGQiLCJfb3JpZ2luIiwiaHJlZiIsInBhcmVudCIsInByb3RvY29sIiwiaG9zdCIsIl9kYXRhIiwiZ2V0SXRlbSIsImtleSIsInNldEl0ZW0iLCJ2YWx1ZSIsInJlbW92ZUl0ZW0iLCJpbmRleCIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRKb3NlVXRpbCIsImp3cyIsIktleVV0aWwiLCJYNTA5IiwiY3J5cHRvIiwiaGV4dG9iNjR1IiwiYjY0dG9oZXgiLCJBbGxvd2VkU2lnbmluZ0FsZ3MiLCJwYXJzZUp3dCIsImp3dCIsInRva2VuIiwiSldTIiwicGFyc2UiLCJoZWFkZXIiLCJoZWFkZXJPYmoiLCJwYXlsb2FkIiwicGF5bG9hZE9iaiIsInZhbGlkYXRlSnd0IiwiaXNzdWVyIiwiYXVkaWVuY2UiLCJjbG9ja1NrZXciLCJub3ciLCJ0aW1lSW5zZW5zaXRpdmUiLCJvZmZzZXRTZWNvbmRzIiwiY29uc29sZSIsImxvZyIsImt0eSIsIm4iLCJnZXRLZXkiLCJ4NWMiLCJoZXgiLCJnZXRQdWJsaWNLZXlGcm9tQ2VydEhleCIsImNydiIsIngiLCJ5IiwiSm9zZVV0aWwiLCJfdmFsaWRhdGVKd3QiLCJ2YWxpZGF0ZUp3dEF0dHJpYnV0ZXMiLCJwYXJzZUludCIsIkRhdGUiLCJpc3MiLCJhdWQiLCJ2YWxpZEF1ZGllbmNlIiwiQXJyYXkiLCJpc0FycmF5IiwiYXpwIiwibG93ZXJOb3ciLCJ1cHBlck5vdyIsImlhdCIsIm5iZiIsImV4cCIsInRoZW4iLCJ2ZXJpZnkiLCJoYXNoU3RyaW5nIiwiYWxnIiwiVXRpbCIsImhleFRvQmFzZTY0VXJsIiwiSnNvblNlcnZpY2UiLCJhZGRpdGlvbmFsQ29udGVudFR5cGVzIiwiWE1MSHR0cFJlcXVlc3RDdG9yIiwiand0SGFuZGxlciIsIl9jb250ZW50VHlwZXMiLCJzbGljZSIsIl9YTUxIdHRwUmVxdWVzdCIsIl9qd3RIYW5kbGVyIiwiZ2V0SnNvbiIsInJlcSIsImFsbG93ZWRDb250ZW50VHlwZXMiLCJzdGF0dXMiLCJjb250ZW50VHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwiZm91bmQiLCJmaW5kIiwic3RhcnRzV2l0aCIsIkpTT04iLCJyZXNwb25zZVRleHQiLCJzdGF0dXNUZXh0Iiwib25lcnJvciIsInNldFJlcXVlc3RIZWFkZXIiLCJwb3N0Rm9ybSIsImVuY29kZVVSSUNvbXBvbmVudCIsIm5vcExvZ2dlciIsImluZm8iLCJ3YXJuIiwiTk9ORSIsIkVSUk9SIiwiV0FSTiIsIklORk8iLCJERUJVRyIsImxvZ2dlciIsImxldmVsIiwicmVzZXQiLCJhcmdzIiwiYXBwbHkiLCJmcm9tIiwiT2lkY01ldGFkYXRhVXJsUGF0aCIsInNldHRpbmdzIiwiSnNvblNlcnZpY2VDdG9yIiwiX3NldHRpbmdzIiwiX2pzb25TZXJ2aWNlIiwiZ2V0TWV0YWRhdGEiLCJtZXRhZGF0YVVybCIsImdldElzc3VlciIsIl9nZXRNZXRhZGF0YVByb3BlcnR5IiwiZ2V0QXV0aG9yaXphdGlvbkVuZHBvaW50IiwiZ2V0VXNlckluZm9FbmRwb2ludCIsImdldFRva2VuRW5kcG9pbnQiLCJvcHRpb25hbCIsImdldENoZWNrU2Vzc2lvbklmcmFtZSIsImdldEVuZFNlc3Npb25FbmRwb2ludCIsImdldFJldm9jYXRpb25FbmRwb2ludCIsImdldEtleXNFbmRwb2ludCIsImdldFNpZ25pbmdLZXlzIiwic2lnbmluZ0tleXMiLCJqd2tzX3VyaSIsImtleVNldCIsImtleXMiLCJfbWV0YWRhdGFVcmwiLCJhdXRob3JpdHkiLCJjcmVhdGVTaWduaW5SZXF1ZXN0IiwicmVzcG9uc2VfdHlwZSIsInNjb3BlIiwicHJvbXB0IiwibWF4X2FnZSIsInVpX2xvY2FsZXMiLCJpZF90b2tlbl9oaW50IiwibG9naW5faGludCIsImFjcl92YWx1ZXMiLCJyZXNvdXJjZSIsInJlcXVlc3RfdXJpIiwicmVzcG9uc2VfbW9kZSIsImV4dHJhUXVlcnlQYXJhbXMiLCJleHRyYVRva2VuUGFyYW1zIiwicmVxdWVzdF90eXBlIiwic2tpcFVzZXJJbmZvIiwic3RhdGVTdG9yZSIsIlNpZ25pblJlcXVlc3QiLCJpc0NvZGUiLCJfbWV0YWRhdGFTZXJ2aWNlIiwic2lnbmluUmVxdWVzdCIsImNsaWVudF9zZWNyZXQiLCJzaWduaW5TdGF0ZSIsIl9zdGF0ZVN0b3JlIiwic2V0IiwiaWQiLCJ0b1N0b3JhZ2VTdHJpbmciLCJyZWFkU2lnbmluUmVzcG9uc2VTdGF0ZSIsInJlbW92ZVN0YXRlIiwidXNlUXVlcnkiLCJkZWxpbWl0ZXIiLCJyZXNwb25zZSIsIlNpZ25pblJlc3BvbnNlIiwic3RhdGVBcGkiLCJyZW1vdmUiLCJnZXQiLCJzdG9yZWRTdGF0ZVN0cmluZyIsIlNpZ25pblN0YXRlIiwiZnJvbVN0b3JhZ2VTdHJpbmciLCJwcm9jZXNzU2lnbmluUmVzcG9uc2UiLCJfdmFsaWRhdG9yIiwidmFsaWRhdGVTaWduaW5SZXNwb25zZSIsImNyZWF0ZVNpZ25vdXRSZXF1ZXN0IiwicG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIiwiU2lnbm91dFJlcXVlc3QiLCJzaWdub3V0U3RhdGUiLCJyZWFkU2lnbm91dFJlc3BvbnNlU3RhdGUiLCJTaWdub3V0UmVzcG9uc2UiLCJzdGF0ZUtleSIsIlN0YXRlIiwicHJvY2Vzc1NpZ25vdXRSZXNwb25zZSIsInZhbGlkYXRlU2lnbm91dFJlc3BvbnNlIiwiY2xlYXJTdGFsZVN0YXRlIiwic3RhbGVTdGF0ZUFnZSIsInZhbGlkYXRvciIsIm1ldGFkYXRhU2VydmljZSIsIkRlZmF1bHRSZXNwb25zZVR5cGUiLCJEZWZhdWx0U2NvcGUiLCJEZWZhdWx0U3RhbGVTdGF0ZUFnZSIsIkRlZmF1bHRDbG9ja1NrZXdJblNlY29uZHMiLCJmaWx0ZXJQcm90b2NvbENsYWltcyIsImxvYWRVc2VySW5mbyIsInVzZXJJbmZvSnd0SXNzdWVyIiwiUmVzcG9uc2VWYWxpZGF0b3JDdG9yIiwiUmVzcG9uc2VWYWxpZGF0b3IiLCJNZXRhZGF0YVNlcnZpY2VDdG9yIiwiX2F1dGhvcml0eSIsIl9tZXRhZGF0YSIsIl9zaWduaW5nS2V5cyIsIl9jbGllbnRfc2VjcmV0IiwiX3Jlc3BvbnNlX3R5cGUiLCJfc2NvcGUiLCJfcmVkaXJlY3RfdXJpIiwiX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSIsIl9wcm9tcHQiLCJfZGlzcGxheSIsIl9tYXhfYWdlIiwiX3VpX2xvY2FsZXMiLCJfYWNyX3ZhbHVlcyIsIl9yZXNvdXJjZSIsIl9yZXNwb25zZV9tb2RlIiwiX2ZpbHRlclByb3RvY29sQ2xhaW1zIiwiX2xvYWRVc2VySW5mbyIsIl9zdGFsZVN0YXRlQWdlIiwiX2Nsb2NrU2tldyIsIl91c2VySW5mb0p3dElzc3VlciIsIl9leHRyYVF1ZXJ5UGFyYW1zIiwiX2V4dHJhVG9rZW5QYXJhbXMiLCJQb3B1cE5hdmlnYXRvciIsIlBvcHVwV2luZG93Iiwia2VlcE9wZW4iLCJub3RpZnlPcGVuZXIiLCJDaGVja0ZvclBvcHVwQ2xvc2VkSW50ZXJ2YWwiLCJfY2hlY2tGb3JQb3B1cENsb3NlZFRpbWVyIiwiX2NoZWNrRm9yUG9wdXBDbG9zZWQiLCJfaWQiLCJmb2N1cyIsImNsb3NlZCIsIm9wZW5lciIsIlVybFV0aWxpdHkiLCJwYXJzZVVybEZyYWdtZW50IiwiUmVkaXJlY3ROYXZpZ2F0b3IiLCJ1c2VSZXBsYWNlVG9OYXZpZ2F0ZSIsInJlcGxhY2UiLCJQcm90b2NvbENsYWltcyIsIlVzZXJJbmZvU2VydmljZUN0b3IiLCJVc2VySW5mb1NlcnZpY2UiLCJqb3NlVXRpbCIsIlRva2VuQ2xpZW50Q3RvciIsIlRva2VuQ2xpZW50IiwiX3VzZXJJbmZvU2VydmljZSIsIl9qb3NlVXRpbCIsIl90b2tlbkNsaWVudCIsIl9wcm9jZXNzU2lnbmluUGFyYW1zIiwiX3ZhbGlkYXRlVG9rZW5zIiwiX3Byb2Nlc3NDbGFpbXMiLCJub25jZSIsImlkX3Rva2VuIiwiY29kZV92ZXJpZmllciIsImNvZGUiLCJpc09wZW5JZENvbm5lY3QiLCJwcm9maWxlIiwiZ2V0Q2xhaW1zIiwiY2xhaW1zIiwic3ViIiwiX21lcmdlQ2xhaW1zIiwiY2xhaW1zMSIsImNsYWltczIiLCJyZXN1bHQiLCJhc3NpZ24iLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidHlwZSIsIl9wcm9jZXNzQ29kZSIsIl92YWxpZGF0ZUlkVG9rZW5BbmRBY2Nlc3NUb2tlbiIsIl92YWxpZGF0ZUlkVG9rZW4iLCJleGNoYW5nZUNvZGUiLCJ0b2tlblJlc3BvbnNlIiwiX3ZhbGlkYXRlSWRUb2tlbkF0dHJpYnV0ZXMiLCJjbG9ja1NrZXdJblNlY29uZHMiLCJfdmFsaWRhdGVBY2Nlc3NUb2tlbiIsImtpZCIsIl9maWx0ZXJCeUFsZyIsImZpbHRlciIsImF0X2hhc2giLCJoYXNoQWxnIiwiaGFzaEJpdHMiLCJzaGEiLCJoYXNoIiwibGVmdCIsImxlZnRfYjY0dSIsInVzZXJNYW5hZ2VyIiwiQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvciIsIl91c2VyTWFuYWdlciIsIl9DaGVja1Nlc3Npb25JRnJhbWVDdG9yIiwiZXZlbnRzIiwiYWRkVXNlckxvYWRlZCIsIl9zdGFydCIsImFkZFVzZXJVbmxvYWRlZCIsIl9zdG9wIiwiZ2V0VXNlciIsInVzZXIiLCJtb25pdG9yQW5vbnltb3VzU2Vzc2lvbiIsInF1ZXJ5U2Vzc2lvblN0YXR1cyIsInRtcFVzZXIiLCJzZXNzaW9uIiwic2lkIiwiY2F0Y2giLCJlcnIiLCJfc3ViIiwiX3NpZCIsIl9jaGVja1Nlc3Npb25JRnJhbWUiLCJfY2hlY2tTZXNzaW9uSW50ZXJ2YWwiLCJfc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IiLCJ0aW1lckhhbmRsZSIsInJhaXNlRXZlbnQiLCJfcmFpc2VVc2VyU2Vzc2lvbkNoYW5nZWQiLCJfcmFpc2VVc2VyU2lnbmVkT3V0IiwiX3JhaXNlVXNlclNpZ25lZEluIiwiY2hlY2tTZXNzaW9uSW50ZXJ2YWwiLCJzdG9wQ2hlY2tTZXNzaW9uT25FcnJvciIsIm9pZGMiLCJpc09pZGMiLCJhZGRRdWVyeVBhcmFtIiwiY29kZV9jaGFsbGVuZ2UiLCJzcGxpdCIsImlzT0F1dGgiLCJPaWRjU2NvcGUiLCJ0b2tlbl90eXBlIiwiZXhwaXJlc19hdCIsInNjb3BlcyIsImFyZ3VtZW50cyIsIl9ub25jZSIsIl9jb2RlX3ZlcmlmaWVyIiwiX2NvZGVfY2hhbGxlbmdlIiwiX3NraXBVc2VySW5mbyIsInN0cmluZ2lmeSIsImNyZWF0ZWQiLCJzdG9yYWdlU3RyaW5nIiwiU2lsZW50UmVuZXdTZXJ2aWNlIiwiX3Rva2VuRXhwaXJpbmciLCJzaWduaW5TaWxlbnQiLCJfcmFpc2VTaWxlbnRSZW5ld0Vycm9yIiwiX2NyZWF0ZWQiLCJfcmVxdWVzdF90eXBlIiwic3RvcmFnZSIsImFnZSIsImN1dG9mZiIsImdldEFsbEtleXMiLCJwcm9taXNlcyIsInAiLCJhbGwiLCJUaW1lckR1cmF0aW9uIiwibm93RnVuYyIsIl9ub3dGdW5jIiwiZXhwaXJhdGlvbiIsIl90aW1lckhhbmRsZSIsIl9leHBpcmF0aW9uIiwidGltZXJEdXJhdGlvbiIsImRpZmYiLCJncmFudF90eXBlIiwiZXhjaGFuZ2VSZWZyZXNoVG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwiQWNjZXNzVG9rZW5UeXBlSGludCIsIlJlZnJlc2hUb2tlblR5cGVIaW50IiwiX1hNTEh0dHBSZXF1ZXN0Q3RvciIsInJldm9rZSIsInJlcXVpcmVkIiwiX3Jldm9rZSIsInhociIsImdsb2JhbCIsImxhc3RJbmRleE9mIiwicmVnZXgiLCJtIiwiY291bnRlciIsImV4ZWMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwcm9wIiwiX2dldENsYWltc0Zyb21Kd3QiLCJpc3N1ZXJQcm9taXNlIiwiU2lsZW50UmVuZXdTZXJ2aWNlQ3RvciIsIlNlc3Npb25Nb25pdG9yQ3RvciIsIlRva2VuUmV2b2NhdGlvbkNsaWVudEN0b3IiLCJVc2VyTWFuYWdlclNldHRpbmdzIiwiX2V2ZW50cyIsIlVzZXJNYW5hZ2VyRXZlbnRzIiwiX3NpbGVudFJlbmV3U2VydmljZSIsImF1dG9tYXRpY1NpbGVudFJlbmV3Iiwic3RhcnRTaWxlbnRSZW5ldyIsIm1vbml0b3JTZXNzaW9uIiwiX3Nlc3Npb25Nb25pdG9yIiwiX3Rva2VuUmV2b2NhdGlvbkNsaWVudCIsIl9sb2FkVXNlciIsInJlbW92ZVVzZXIiLCJzdG9yZVVzZXIiLCJzaWduaW5SZWRpcmVjdCIsIm5hdlBhcmFtcyIsIl9zaWduaW5TdGFydCIsIl9yZWRpcmVjdE5hdmlnYXRvciIsInNpZ25pblJlZGlyZWN0Q2FsbGJhY2siLCJfc2lnbmluRW5kIiwic2lnbmluUG9wdXAiLCJwb3B1cF9yZWRpcmVjdF91cmkiLCJfc2lnbmluIiwiX3BvcHVwTmF2aWdhdG9yIiwic2lnbmluUG9wdXBDYWxsYmFjayIsIl9zaWduaW5DYWxsYmFjayIsIl91c2VSZWZyZXNoVG9rZW4iLCJpbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXciLCJ2YWxpZGF0ZVN1Yk9uU2lsZW50UmVuZXciLCJjdXJyZW50X3N1YiIsIl9zaWduaW5TaWxlbnRJZnJhbWUiLCJpZFRva2VuVmFsaWRhdGlvbiIsIl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW4iLCJhdXRoX3RpbWUiLCJzaWxlbnRfcmVkaXJlY3RfdXJpIiwiX2lmcmFtZU5hdmlnYXRvciIsInNpZ25pblNpbGVudENhbGxiYWNrIiwic2lnbmluQ2FsbGJhY2siLCJzaWdub3V0Q2FsbGJhY2siLCJzaWdub3V0UmVkaXJlY3RDYWxsYmFjayIsInNpZ25vdXRQb3B1cENhbGxiYWNrIiwicXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUiLCJuYXZSZXNwb25zZSIsInNpZ25pblJlc3BvbnNlIiwibmF2aWdhdG9yIiwibmF2aWdhdG9yUGFyYW1zIiwic2lnbm91dFJlZGlyZWN0IiwicG9zdExvZ291dFJlZGlyZWN0VXJpIiwiX3NpZ25vdXRTdGFydCIsIl9zaWdub3V0RW5kIiwic2lnbm91dFBvcHVwIiwicG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIiwiX3NpZ25vdXQiLCJyZXZva2VQcm9taXNlIiwicmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQiLCJfcmV2b2tlSW50ZXJuYWwiLCJzaWdub3V0UmVxdWVzdCIsInNpZ25vdXRSZXNwb25zZSIsInJldm9rZUFjY2Vzc1Rva2VuIiwic3VjY2VzcyIsIl9yZXZva2VBY2Nlc3NUb2tlbkludGVybmFsIiwiX3Jldm9rZVJlZnJlc2hUb2tlbkludGVybmFsIiwiYXRTdWNjZXNzIiwicnRTdWNjZXNzIiwic3RvcFNpbGVudFJlbmV3IiwiX3VzZXJTdG9yZSIsIl91c2VyU3RvcmVLZXkiLCJyZWRpcmVjdE5hdmlnYXRvciIsInBvcHVwTmF2aWdhdG9yIiwiaWZyYW1lTmF2aWdhdG9yIiwidXNlclN0b3JlIiwiX3VzZXJMb2FkZWQiLCJfdXNlclVubG9hZGVkIiwiX3NpbGVudFJlbmV3RXJyb3IiLCJfdXNlclNpZ25lZEluIiwiX3VzZXJTaWduZWRPdXQiLCJfdXNlclNlc3Npb25DaGFuZ2VkIiwicmVtb3ZlVXNlckxvYWRlZCIsInJlbW92ZVVzZXJVbmxvYWRlZCIsImFkZFNpbGVudFJlbmV3RXJyb3IiLCJyZW1vdmVTaWxlbnRSZW5ld0Vycm9yIiwiYWRkVXNlclNpZ25lZEluIiwicmVtb3ZlVXNlclNpZ25lZEluIiwiYWRkVXNlclNpZ25lZE91dCIsInJlbW92ZVVzZXJTaWduZWRPdXQiLCJhZGRVc2VyU2Vzc2lvbkNoYW5nZWQiLCJyZW1vdmVVc2VyU2Vzc2lvbkNoYW5nZWQiLCJEZWZhdWx0Q2hlY2tTZXNzaW9uSW50ZXJ2YWwiLCJzdG9yZSIsIl9wb3B1cF9yZWRpcmVjdF91cmkiLCJfcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIiwiX3BvcHVwV2luZG93RmVhdHVyZXMiLCJfcG9wdXBXaW5kb3dUYXJnZXQiLCJfc2lsZW50X3JlZGlyZWN0X3VyaSIsIl9zaWxlbnRSZXF1ZXN0VGltZW91dCIsIl9hdXRvbWF0aWNTaWxlbnRSZW5ldyIsIl92YWxpZGF0ZVN1Yk9uU2lsZW50UmVuZXciLCJfaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3IiwiX21vbml0b3JTZXNzaW9uIiwiX21vbml0b3JBbm9ueW1vdXNTZXNzaW9uIiwiX3F1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlIiwiX3Jldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0IiwicHJlZml4IiwiX3N0b3JlIiwiX3ByZWZpeCIsIkJpZ0ludGVnZXIiLCJKU0JOIiwiYjY0bWFwIiwiYjY0cGFkIiwiQmFzZTY0IiwicyIsInJldCIsImsiLCJzbG9wIiwiY2hhckF0IiwidiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImhleFRvQmFzZTY0IiwiaCIsImMiLCJzdWJzdHJpbmciLCJwYWRkaW5nIiwic3RyIiwibW9kIiwicGFkIiwiam9pbiIsImJ5dGVBcnJheVRvSGV4IiwicmF3IiwiSEVYIiwiX2hleCIsInRvU3RyaW5nIiwiZGVjb2RlVG9IRVgiLCJiYXNlNjRKcyIsInRvQnl0ZUFycmF5IiwiYmFzZTY0VG9CYXNlNjRVcmwiLCJ1cmxEZWNvZGUiLCJhdG9iIiwiRGlnZXN0SW5mb0hlYWQiLCJzaGExIiwic2hhMjI0Iiwic2hhMjU2Iiwic2hhMzg0Iiwic2hhNTEyIiwibWQyIiwibWQ1IiwicmlwZW1kMTYwIiwiRGlnZXN0QWxncyIsIlNIQTI1NiIsIlJTQVZlcmlmaWVyIiwibW9kdWx1cyIsImdldEFsZ29yaXRobUZyb21EaWdlc3QiLCJoRGlnZXN0SW5mbyIsImFsZ05hbWUiLCJoZWFkIiwibGVuIiwicHJvdG90eXBlIiwibXNnIiwiZW5jc2lnIiwic2lnIiwiYml0TGVuZ3RoIiwiZGVjcnlwdGVkU2lnIiwibW9kUG93SW50IiwiZGlnZXN0IiwiZGlnZXN0SW5mbyIsIm1zZ0hhc2giLCJwYXJ0cyIsImFsbG93ZWRTaWduaW5nQWxncyIsImhlYWRlckFuZFBheWxvYWQiLCJnZXRQdWJsaWNLZXlGcm9tQ2VydFBFTSIsImhhc2hGdW5jIiwicmFuZG9tIiwibXNDcnlwdG8iLCJfY3J5cHRvVXVpZHY0IiwiZ2V0UmFuZG9tVmFsdWVzIiwiVWludDhBcnJheSIsIl91dWlkdjQiLCJNYXRoIiwiaGFzQ3J5cHRvIiwiaGFzUmFuZG9tVmFsdWVzIiwidXVpZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJ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QWtDLFdBQXRFO0FBQ0EsTUFBSU0sT0FBT0Qsa0JBQWtCTixhQUFsQixHQUFrQ0csT0FBN0M7QUFDQSxTQUFPSSxPQUFPOVQsT0FBUCxDQUFlLElBQWYsRUFBcUIsRUFBckIsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkQsSUFBTXRaLFVBQVUsUUFBaEIsQyxRQUFrQ0EsTyxHQUFBQSxPIiwiZmlsZSI6Im9pZGMtY2xpZW50LnJzYTI1Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9zcmMvTG9nLmpzJztcbmltcG9ydCB7IE9pZGNDbGllbnQgfSBmcm9tICcuL3NyYy9PaWRjQ2xpZW50LmpzJztcbmltcG9ydCB7IE9pZGNDbGllbnRTZXR0aW5ncyB9IGZyb20gJy4vc3JjL09pZGNDbGllbnRTZXR0aW5ncy5qcyc7XG5pbXBvcnQgeyBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJy4vc3JjL1dlYlN0b3JhZ2VTdGF0ZVN0b3JlLmpzJztcbmltcG9ydCB7IEluTWVtb3J5V2ViU3RvcmFnZSB9IGZyb20gJy4vc3JjL0luTWVtb3J5V2ViU3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBVc2VyTWFuYWdlciB9IGZyb20gJy4vc3JjL1VzZXJNYW5hZ2VyLmpzJztcbmltcG9ydCB7IEFjY2Vzc1Rva2VuRXZlbnRzIH0gZnJvbSAnLi9zcmMvQWNjZXNzVG9rZW5FdmVudHMuanMnO1xuaW1wb3J0IHsgTWV0YWRhdGFTZXJ2aWNlIH0gZnJvbSAnLi9zcmMvTWV0YWRhdGFTZXJ2aWNlLmpzJztcbmltcG9ydCB7IENvcmRvdmFQb3B1cE5hdmlnYXRvciB9IGZyb20gJy4vc3JjL0NvcmRvdmFQb3B1cE5hdmlnYXRvci5qcyc7XG5pbXBvcnQgeyBDb3Jkb3ZhSUZyYW1lTmF2aWdhdG9yIH0gZnJvbSAnLi9zcmMvQ29yZG92YUlGcmFtZU5hdmlnYXRvci5qcyc7XG5pbXBvcnQgeyBDaGVja1Nlc3Npb25JRnJhbWUgfSBmcm9tICcuL3NyYy9DaGVja1Nlc3Npb25JRnJhbWUuanMnO1xuaW1wb3J0IHsgVG9rZW5SZXZvY2F0aW9uQ2xpZW50IH0gZnJvbSAnLi9zcmMvVG9rZW5SZXZvY2F0aW9uQ2xpZW50LmpzJztcbmltcG9ydCB7IFNlc3Npb25Nb25pdG9yIH0gZnJvbSAnLi9zcmMvU2Vzc2lvbk1vbml0b3IuanMnO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9zcmMvR2xvYmFsLmpzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3NyYy9Vc2VyLmpzJztcblxuaW1wb3J0IHsgVmVyc2lvbiB9IGZyb20gJy4vdmVyc2lvbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBWZXJzaW9uLFxuICAgIExvZyxcbiAgICBPaWRjQ2xpZW50LFxuICAgIE9pZGNDbGllbnRTZXR0aW5ncyxcbiAgICBXZWJTdG9yYWdlU3RhdGVTdG9yZSxcbiAgICBJbk1lbW9yeVdlYlN0b3JhZ2UsXG4gICAgVXNlck1hbmFnZXIsXG4gICAgQWNjZXNzVG9rZW5FdmVudHMsXG4gICAgTWV0YWRhdGFTZXJ2aWNlLFxuICAgIENvcmRvdmFQb3B1cE5hdmlnYXRvcixcbiAgICBDb3Jkb3ZhSUZyYW1lTmF2aWdhdG9yLFxuICAgIENoZWNrU2Vzc2lvbklGcmFtZSxcbiAgICBUb2tlblJldm9jYXRpb25DbGllbnQsXG4gICAgU2Vzc2lvbk1vbml0b3IsXG4gICAgR2xvYmFsLFxuICAgIFVzZXJcbn07XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKFxuICAgICAgdWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKVxuICAgICkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRyb290LkNyeXB0b0pTID0gZmFjdG9yeSgpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuXHQvKipcblx0ICogQ3J5cHRvSlMgY29yZSBjb21wb25lbnRzLlxuXHQgKi9cblx0dmFyIENyeXB0b0pTID0gQ3J5cHRvSlMgfHwgKGZ1bmN0aW9uIChNYXRoLCB1bmRlZmluZWQpIHtcblx0ICAgIC8qXG5cdCAgICAgKiBMb2NhbCBwb2x5ZmlsIG9mIE9iamVjdC5jcmVhdGVcblx0ICAgICAqL1xuXHQgICAgdmFyIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGUgfHwgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBmdW5jdGlvbiBGKCkge307XG5cblx0ICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuXHQgICAgICAgICAgICB2YXIgc3VidHlwZTtcblxuXHQgICAgICAgICAgICBGLnByb3RvdHlwZSA9IG9iajtcblxuXHQgICAgICAgICAgICBzdWJ0eXBlID0gbmV3IEYoKTtcblxuXHQgICAgICAgICAgICBGLnByb3RvdHlwZSA9IG51bGw7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHN1YnR5cGU7XG5cdCAgICAgICAgfTtcblx0ICAgIH0oKSlcblxuXHQgICAgLyoqXG5cdCAgICAgKiBDcnlwdG9KUyBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogTGlicmFyeSBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX2xpYiA9IEMubGliID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogQmFzZSBvYmplY3QgZm9yIHByb3RvdHlwYWwgaW5oZXJpdGFuY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBCYXNlID0gQ19saWIuQmFzZSA9IChmdW5jdGlvbiAoKSB7XG5cblxuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvdmVycmlkZXMgUHJvcGVydGllcyB0byBjb3B5IGludG8gdGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBNeVR5cGUgPSBDcnlwdG9KUy5saWIuQmFzZS5leHRlbmQoe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGZpZWxkOiAndmFsdWUnLFxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgICAgIG1ldGhvZDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIH1cblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgZXh0ZW5kOiBmdW5jdGlvbiAob3ZlcnJpZGVzKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBTcGF3blxuXHQgICAgICAgICAgICAgICAgdmFyIHN1YnR5cGUgPSBjcmVhdGUodGhpcyk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIEF1Z21lbnRcblx0ICAgICAgICAgICAgICAgIGlmIChvdmVycmlkZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLm1peEluKG92ZXJyaWRlcyk7XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBkZWZhdWx0IGluaXRpYWxpemVyXG5cdCAgICAgICAgICAgICAgICBpZiAoIXN1YnR5cGUuaGFzT3duUHJvcGVydHkoJ2luaXQnKSB8fCB0aGlzLmluaXQgPT09IHN1YnR5cGUuaW5pdCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3VidHlwZS4kc3VwZXIuaW5pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHQgICAgICAgICAgICAgICAgICAgIH07XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemVyJ3MgcHJvdG90eXBlIGlzIHRoZSBzdWJ0eXBlIG9iamVjdFxuXHQgICAgICAgICAgICAgICAgc3VidHlwZS5pbml0LnByb3RvdHlwZSA9IHN1YnR5cGU7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJlZmVyZW5jZSBzdXBlcnR5cGVcblx0ICAgICAgICAgICAgICAgIHN1YnR5cGUuJHN1cGVyID0gdGhpcztcblxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHN1YnR5cGU7XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIEV4dGVuZHMgdGhpcyBvYmplY3QgYW5kIHJ1bnMgdGhlIGluaXQgbWV0aG9kLlxuXHQgICAgICAgICAgICAgKiBBcmd1bWVudHMgdG8gY3JlYXRlKCkgd2lsbCBiZSBwYXNzZWQgdG8gaW5pdCgpLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBuZXcgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgaW5zdGFuY2UgPSBNeVR5cGUuY3JlYXRlKCk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuZXh0ZW5kKCk7XG5cdCAgICAgICAgICAgICAgICBpbnN0YW5jZS5pbml0LmFwcGx5KGluc3RhbmNlLCBhcmd1bWVudHMpO1xuXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBvYmplY3QuXG5cdCAgICAgICAgICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGFkZCBzb21lIGxvZ2ljIHdoZW4geW91ciBvYmplY3RzIGFyZSBjcmVhdGVkLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIE15VHlwZSA9IENyeXB0b0pTLmxpYi5CYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgKiAgICAgICAgICAgICAvLyAuLi5cblx0ICAgICAgICAgICAgICogICAgICAgICB9XG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQ29waWVzIHByb3BlcnRpZXMgaW50byB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgVGhlIHByb3BlcnRpZXMgdG8gbWl4IGluLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgTXlUeXBlLm1peEluKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBmaWVsZDogJ3ZhbHVlJ1xuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBtaXhJbjogZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBJRSB3b24ndCBjb3B5IHRvU3RyaW5nIHVzaW5nIHRoZSBsb29wIGFib3ZlXG5cdCAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eSgndG9TdHJpbmcnKSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMudG9TdHJpbmcgPSBwcm9wZXJ0aWVzLnRvU3RyaW5nO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgY2xvbmUuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSBpbnN0YW5jZS5jbG9uZSgpO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluaXQucHJvdG90eXBlLmV4dGVuZCh0aGlzKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH07XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFuIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge0FycmF5fSB3b3JkcyBUaGUgYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHNpZ0J5dGVzIFRoZSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgYnl0ZXMgaW4gdGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICovXG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5ID0gQmFzZS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtBcnJheX0gd29yZHMgKE9wdGlvbmFsKSBBbiBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHNpZ0J5dGVzIChPcHRpb25hbCkgVGhlIG51bWJlciBvZiBzaWduaWZpY2FudCBieXRlcyBpbiB0aGUgd29yZHMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZSgpO1xuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoWzB4MDAwMTAyMDMsIDB4MDQwNTA2MDddKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKFsweDAwMDEwMjAzLCAweDA0MDUwNjA3XSwgNik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdvcmRzLCBzaWdCeXRlcykge1xuXHQgICAgICAgICAgICB3b3JkcyA9IHRoaXMud29yZHMgPSB3b3JkcyB8fCBbXTtcblxuXHQgICAgICAgICAgICBpZiAoc2lnQnl0ZXMgIT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnNpZ0J5dGVzID0gc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnNpZ0J5dGVzID0gd29yZHMubGVuZ3RoICogNDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIHdvcmQgYXJyYXkgdG8gYSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0VuY29kZXJ9IGVuY29kZXIgKE9wdGlvbmFsKSBUaGUgZW5jb2Rpbmcgc3RyYXRlZ3kgdG8gdXNlLiBEZWZhdWx0OiBDcnlwdG9KUy5lbmMuSGV4XG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBzdHJpbmdpZmllZCB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5ICsgJyc7XG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkudG9TdHJpbmcoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheS50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIChlbmNvZGVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiAoZW5jb2RlciB8fCBIZXgpLnN0cmluZ2lmeSh0aGlzKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29uY2F0ZW5hdGVzIGEgd29yZCBhcnJheSB0byB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5IHRvIGFwcGVuZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB3b3JkQXJyYXkxLmNvbmNhdCh3b3JkQXJyYXkyKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjb25jYXQ6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB0aGlzV29yZHMgPSB0aGlzLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgdGhhdFdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgdGhpc1NpZ0J5dGVzID0gdGhpcy5zaWdCeXRlcztcblx0ICAgICAgICAgICAgdmFyIHRoYXRTaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDbGFtcCBleGNlc3MgYml0c1xuXHQgICAgICAgICAgICB0aGlzLmNsYW1wKCk7XG5cblx0ICAgICAgICAgICAgLy8gQ29uY2F0XG5cdCAgICAgICAgICAgIGlmICh0aGlzU2lnQnl0ZXMgJSA0KSB7XG5cdCAgICAgICAgICAgICAgICAvLyBDb3B5IG9uZSBieXRlIGF0IGEgdGltZVxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGF0U2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciB0aGF0Qnl0ZSA9ICh0aGF0V29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXNXb3Jkc1sodGhpc1NpZ0J5dGVzICsgaSkgPj4+IDJdIHw9IHRoYXRCeXRlIDw8ICgyNCAtICgodGhpc1NpZ0J5dGVzICsgaSkgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgLy8gQ29weSBvbmUgd29yZCBhdCBhIHRpbWVcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhhdFNpZ0J5dGVzOyBpICs9IDQpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzV29yZHNbKHRoaXNTaWdCeXRlcyArIGkpID4+PiAyXSA9IHRoYXRXb3Jkc1tpID4+PiAyXTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB0aGlzLnNpZ0J5dGVzICs9IHRoYXRTaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDaGFpbmFibGVcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlbW92ZXMgaW5zaWduaWZpY2FudCBiaXRzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB3b3JkQXJyYXkuY2xhbXAoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjbGFtcDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gdGhpcy53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gdGhpcy5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDbGFtcFxuXHQgICAgICAgICAgICB3b3Jkc1tzaWdCeXRlcyA+Pj4gMl0gJj0gMHhmZmZmZmZmZiA8PCAoMzIgLSAoc2lnQnl0ZXMgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICB3b3Jkcy5sZW5ndGggPSBNYXRoLmNlaWwoc2lnQnl0ZXMgLyA0KTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgY2xvbmUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjbG9uZSA9IHdvcmRBcnJheS5jbG9uZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEJhc2UuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUud29yZHMgPSB0aGlzLndvcmRzLnNsaWNlKDApO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHdvcmQgYXJyYXkgZmlsbGVkIHdpdGggcmFuZG9tIGJ5dGVzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG5CeXRlcyBUaGUgbnVtYmVyIG9mIHJhbmRvbSBieXRlcyB0byBnZW5lcmF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHJhbmRvbSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5yYW5kb20oMTYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJhbmRvbTogZnVuY3Rpb24gKG5CeXRlcykge1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblxuXHQgICAgICAgICAgICB2YXIgciA9IChmdW5jdGlvbiAobV93KSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgbV93ID0gbV93O1xuXHQgICAgICAgICAgICAgICAgdmFyIG1feiA9IDB4M2FkZTY4YjE7XG5cdCAgICAgICAgICAgICAgICB2YXIgbWFzayA9IDB4ZmZmZmZmZmY7XG5cblx0ICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgbV96ID0gKDB4OTA2OSAqIChtX3ogJiAweEZGRkYpICsgKG1feiA+PiAweDEwKSkgJiBtYXNrO1xuXHQgICAgICAgICAgICAgICAgICAgIG1fdyA9ICgweDQ2NTAgKiAobV93ICYgMHhGRkZGKSArIChtX3cgPj4gMHgxMCkpICYgbWFzaztcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gKChtX3ogPDwgMHgxMCkgKyBtX3cpICYgbWFzaztcblx0ICAgICAgICAgICAgICAgICAgICByZXN1bHQgLz0gMHgxMDAwMDAwMDA7XG5cdCAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IDAuNTtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICogKE1hdGgucmFuZG9tKCkgPiAuNSA/IDEgOiAtMSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0pO1xuXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCByY2FjaGU7IGkgPCBuQnl0ZXM7IGkgKz0gNCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIF9yID0gcigocmNhY2hlIHx8IE1hdGgucmFuZG9tKCkpICogMHgxMDAwMDAwMDApO1xuXG5cdCAgICAgICAgICAgICAgICByY2FjaGUgPSBfcigpICogMHgzYWRlNjdiNztcblx0ICAgICAgICAgICAgICAgIHdvcmRzLnB1c2goKF9yKCkgKiAweDEwMDAwMDAwMCkgfCAwKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIG5CeXRlcyk7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogRW5jb2RlciBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX2VuYyA9IEMuZW5jID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogSGV4IGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgSGV4ID0gQ19lbmMuSGV4ID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIGhleCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhleFN0cmluZyA9IENyeXB0b0pTLmVuYy5IZXguc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciBoZXhDaGFycyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHZhciBiaXRlID0gKHdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIGhleENoYXJzLnB1c2goKGJpdGUgPj4+IDQpLnRvU3RyaW5nKDE2KSk7XG5cdCAgICAgICAgICAgICAgICBoZXhDaGFycy5wdXNoKChiaXRlICYgMHgwZikudG9TdHJpbmcoMTYpKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBoZXhDaGFycy5qb2luKCcnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBoZXggc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBoZXhTdHIgVGhlIGhleCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLkhleC5wYXJzZShoZXhTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAoaGV4U3RyKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBoZXhTdHJMZW5ndGggPSBoZXhTdHIubGVuZ3RoO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGV4U3RyTGVuZ3RoOyBpICs9IDIpIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW2kgPj4+IDNdIHw9IHBhcnNlSW50KGhleFN0ci5zdWJzdHIoaSwgMiksIDE2KSA8PCAoMjQgLSAoaSAlIDgpICogNCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBoZXhTdHJMZW5ndGggLyAyKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIExhdGluMSBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIExhdGluMSA9IENfZW5jLkxhdGluMSA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBsYXRpbjFTdHJpbmcgPSBDcnlwdG9KUy5lbmMuTGF0aW4xLnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgbGF0aW4xQ2hhcnMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgYml0ZSA9ICh3b3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICBsYXRpbjFDaGFycy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYml0ZSkpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGxhdGluMUNoYXJzLmpvaW4oJycpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIExhdGluMSBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGxhdGluMVN0ciBUaGUgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuTGF0aW4xLnBhcnNlKGxhdGluMVN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChsYXRpbjFTdHIpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGxhdGluMVN0ckxlbmd0aCA9IGxhdGluMVN0ci5sZW5ndGg7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXRpbjFTdHJMZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbaSA+Pj4gMl0gfD0gKGxhdGluMVN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZikgPDwgKDI0IC0gKGkgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgbGF0aW4xU3RyTGVuZ3RoKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIFVURi04IGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgVXRmOCA9IENfZW5jLlV0ZjggPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIFVURi04IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHV0ZjhTdHJpbmcgPSBDcnlwdG9KUy5lbmMuVXRmOC5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKExhdGluMS5zdHJpbmdpZnkod29yZEFycmF5KSkpO1xuXHQgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hbGZvcm1lZCBVVEYtOCBkYXRhJyk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBVVEYtOCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHV0ZjhTdHIgVGhlIFVURi04IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZSh1dGY4U3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKHV0ZjhTdHIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIExhdGluMS5wYXJzZSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQodXRmOFN0cikpKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFic3RyYWN0IGJ1ZmZlcmVkIGJsb2NrIGFsZ29yaXRobSB0ZW1wbGF0ZS5cblx0ICAgICAqXG5cdCAgICAgKiBUaGUgcHJvcGVydHkgYmxvY2tTaXplIG11c3QgYmUgaW1wbGVtZW50ZWQgaW4gYSBjb25jcmV0ZSBzdWJ0eXBlLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBfbWluQnVmZmVyU2l6ZSBUaGUgbnVtYmVyIG9mIGJsb2NrcyB0aGF0IHNob3VsZCBiZSBrZXB0IHVucHJvY2Vzc2VkIGluIHRoZSBidWZmZXIuIERlZmF1bHQ6IDBcblx0ICAgICAqL1xuXHQgICAgdmFyIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0gPSBDX2xpYi5CdWZmZXJlZEJsb2NrQWxnb3JpdGhtID0gQmFzZS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlc2V0cyB0aGlzIGJsb2NrIGFsZ29yaXRobSdzIGRhdGEgYnVmZmVyIHRvIGl0cyBpbml0aWFsIHN0YXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLnJlc2V0KCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gSW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdGhpcy5fZGF0YSA9IG5ldyBXb3JkQXJyYXkuaW5pdCgpO1xuXHQgICAgICAgICAgICB0aGlzLl9uRGF0YUJ5dGVzID0gMDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQWRkcyBuZXcgZGF0YSB0byB0aGlzIGJsb2NrIGFsZ29yaXRobSdzIGJ1ZmZlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBhcHBlbmQuIFN0cmluZ3MgYXJlIGNvbnZlcnRlZCB0byBhIFdvcmRBcnJheSB1c2luZyBVVEYtOC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fYXBwZW5kKCdkYXRhJyk7XG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX2FwcGVuZCh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9hcHBlbmQ6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdCAgICAgICAgICAgIC8vIENvbnZlcnQgc3RyaW5nIHRvIFdvcmRBcnJheSwgZWxzZSBhc3N1bWUgV29yZEFycmF5IGFscmVhZHlcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgICAgICAgICBkYXRhID0gVXRmOC5wYXJzZShkYXRhKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEFwcGVuZFxuXHQgICAgICAgICAgICB0aGlzLl9kYXRhLmNvbmNhdChkYXRhKTtcblx0ICAgICAgICAgICAgdGhpcy5fbkRhdGFCeXRlcyArPSBkYXRhLnNpZ0J5dGVzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBQcm9jZXNzZXMgYXZhaWxhYmxlIGRhdGEgYmxvY2tzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogVGhpcyBtZXRob2QgaW52b2tlcyBfZG9Qcm9jZXNzQmxvY2sob2Zmc2V0KSwgd2hpY2ggbXVzdCBiZSBpbXBsZW1lbnRlZCBieSBhIGNvbmNyZXRlIHN1YnR5cGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRvRmx1c2ggV2hldGhlciBhbGwgYmxvY2tzIGFuZCBwYXJ0aWFsIGJsb2NrcyBzaG91bGQgYmUgcHJvY2Vzc2VkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgcHJvY2Vzc2VkIGRhdGEuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBwcm9jZXNzZWREYXRhID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fcHJvY2VzcygpO1xuXHQgICAgICAgICAqICAgICB2YXIgcHJvY2Vzc2VkRGF0YSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX3Byb2Nlc3MoISEnZmx1c2gnKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfcHJvY2VzczogZnVuY3Rpb24gKGRvRmx1c2gpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBkYXRhU2lnQnl0ZXMgPSBkYXRhLnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplID0gdGhpcy5ibG9ja1NpemU7XG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemVCeXRlcyA9IGJsb2NrU2l6ZSAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgYmxvY2tzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuQmxvY2tzUmVhZHkgPSBkYXRhU2lnQnl0ZXMgLyBibG9ja1NpemVCeXRlcztcblx0ICAgICAgICAgICAgaWYgKGRvRmx1c2gpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFJvdW5kIHVwIHRvIGluY2x1ZGUgcGFydGlhbCBibG9ja3Ncblx0ICAgICAgICAgICAgICAgIG5CbG9ja3NSZWFkeSA9IE1hdGguY2VpbChuQmxvY2tzUmVhZHkpO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgLy8gUm91bmQgZG93biB0byBpbmNsdWRlIG9ubHkgZnVsbCBibG9ja3MsXG5cdCAgICAgICAgICAgICAgICAvLyBsZXNzIHRoZSBudW1iZXIgb2YgYmxvY2tzIHRoYXQgbXVzdCByZW1haW4gaW4gdGhlIGJ1ZmZlclxuXHQgICAgICAgICAgICAgICAgbkJsb2Nrc1JlYWR5ID0gTWF0aC5tYXgoKG5CbG9ja3NSZWFkeSB8IDApIC0gdGhpcy5fbWluQnVmZmVyU2l6ZSwgMCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBDb3VudCB3b3JkcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbldvcmRzUmVhZHkgPSBuQmxvY2tzUmVhZHkgKiBibG9ja1NpemU7XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgYnl0ZXMgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5CeXRlc1JlYWR5ID0gTWF0aC5taW4obldvcmRzUmVhZHkgKiA0LCBkYXRhU2lnQnl0ZXMpO1xuXG5cdCAgICAgICAgICAgIC8vIFByb2Nlc3MgYmxvY2tzXG5cdCAgICAgICAgICAgIGlmIChuV29yZHNSZWFkeSkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgbldvcmRzUmVhZHk7IG9mZnNldCArPSBibG9ja1NpemUpIHtcblx0ICAgICAgICAgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWFsZ29yaXRobSBsb2dpY1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvUHJvY2Vzc0Jsb2NrKGRhdGFXb3Jkcywgb2Zmc2V0KTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHByb2Nlc3NlZCB3b3Jkc1xuXHQgICAgICAgICAgICAgICAgdmFyIHByb2Nlc3NlZFdvcmRzID0gZGF0YVdvcmRzLnNwbGljZSgwLCBuV29yZHNSZWFkeSk7XG5cdCAgICAgICAgICAgICAgICBkYXRhLnNpZ0J5dGVzIC09IG5CeXRlc1JlYWR5O1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gUmV0dXJuIHByb2Nlc3NlZCB3b3Jkc1xuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHByb2Nlc3NlZFdvcmRzLCBuQnl0ZXNSZWFkeSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgY2xvbmUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjbG9uZSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uY2xvbmUoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBCYXNlLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLl9kYXRhID0gdGhpcy5fZGF0YS5jbG9uZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX21pbkJ1ZmZlclNpemU6IDBcblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFic3RyYWN0IGhhc2hlciB0ZW1wbGF0ZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gYmxvY2tTaXplIFRoZSBudW1iZXIgb2YgMzItYml0IHdvcmRzIHRoaXMgaGFzaGVyIG9wZXJhdGVzIG9uLiBEZWZhdWx0OiAxNiAoNTEyIGJpdHMpXG5cdCAgICAgKi9cblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXIgPSBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29uZmlndXJhdGlvbiBvcHRpb25zLlxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNmZzogQmFzZS5leHRlbmQoKSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBoYXNoZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoaXMgaGFzaCBjb21wdXRhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2hlciA9IENyeXB0b0pTLmFsZ28uU0hBMjU2LmNyZWF0ZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChjZmcpIHtcblx0ICAgICAgICAgICAgLy8gQXBwbHkgY29uZmlnIGRlZmF1bHRzXG5cdCAgICAgICAgICAgIHRoaXMuY2ZnID0gdGhpcy5jZmcuZXh0ZW5kKGNmZyk7XG5cblx0ICAgICAgICAgICAgLy8gU2V0IGluaXRpYWwgdmFsdWVzXG5cdCAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVzZXRzIHRoaXMgaGFzaGVyIHRvIGl0cyBpbml0aWFsIHN0YXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBoYXNoZXIucmVzZXQoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBSZXNldCBkYXRhIGJ1ZmZlclxuXHQgICAgICAgICAgICBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtLnJlc2V0LmNhbGwodGhpcyk7XG5cblx0ICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1oYXNoZXIgbG9naWNcblx0ICAgICAgICAgICAgdGhpcy5fZG9SZXNldCgpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBVcGRhdGVzIHRoaXMgaGFzaGVyIHdpdGggYSBtZXNzYWdlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlVXBkYXRlIFRoZSBtZXNzYWdlIHRvIGFwcGVuZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0hhc2hlcn0gVGhpcyBoYXNoZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGhhc2hlci51cGRhdGUoJ21lc3NhZ2UnKTtcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnVwZGF0ZSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKG1lc3NhZ2VVcGRhdGUpIHtcblx0ICAgICAgICAgICAgLy8gQXBwZW5kXG5cdCAgICAgICAgICAgIHRoaXMuX2FwcGVuZChtZXNzYWdlVXBkYXRlKTtcblxuXHQgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGhhc2hcblx0ICAgICAgICAgICAgdGhpcy5fcHJvY2VzcygpO1xuXG5cdCAgICAgICAgICAgIC8vIENoYWluYWJsZVxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogRmluYWxpemVzIHRoZSBoYXNoIGNvbXB1dGF0aW9uLlxuXHQgICAgICAgICAqIE5vdGUgdGhhdCB0aGUgZmluYWxpemUgb3BlcmF0aW9uIGlzIGVmZmVjdGl2ZWx5IGEgZGVzdHJ1Y3RpdmUsIHJlYWQtb25jZSBvcGVyYXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgKE9wdGlvbmFsKSBBIGZpbmFsIG1lc3NhZ2UgdXBkYXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2ggPSBoYXNoZXIuZmluYWxpemUoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2ggPSBoYXNoZXIuZmluYWxpemUoJ21lc3NhZ2UnKTtcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2ggPSBoYXNoZXIuZmluYWxpemUod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24gKG1lc3NhZ2VVcGRhdGUpIHtcblx0ICAgICAgICAgICAgLy8gRmluYWwgbWVzc2FnZSB1cGRhdGVcblx0ICAgICAgICAgICAgaWYgKG1lc3NhZ2VVcGRhdGUpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX2FwcGVuZChtZXNzYWdlVXBkYXRlKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtaGFzaGVyIGxvZ2ljXG5cdCAgICAgICAgICAgIHZhciBoYXNoID0gdGhpcy5fZG9GaW5hbGl6ZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBoYXNoO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBibG9ja1NpemU6IDUxMi8zMixcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBzaG9ydGN1dCBmdW5jdGlvbiB0byBhIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0hhc2hlcn0gaGFzaGVyIFRoZSBoYXNoZXIgdG8gY3JlYXRlIGEgaGVscGVyIGZvci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgc2hvcnRjdXQgZnVuY3Rpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBTSEEyNTYgPSBDcnlwdG9KUy5saWIuSGFzaGVyLl9jcmVhdGVIZWxwZXIoQ3J5cHRvSlMuYWxnby5TSEEyNTYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9jcmVhdGVIZWxwZXI6IGZ1bmN0aW9uIChoYXNoZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlLCBjZmcpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBuZXcgaGFzaGVyLmluaXQoY2ZnKS5maW5hbGl6ZShtZXNzYWdlKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7SGFzaGVyfSBoYXNoZXIgVGhlIGhhc2hlciB0byB1c2UgaW4gdGhpcyBITUFDIGhlbHBlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgc2hvcnRjdXQgZnVuY3Rpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBIbWFjU0hBMjU2ID0gQ3J5cHRvSlMubGliLkhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihDcnlwdG9KUy5hbGdvLlNIQTI1Nik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2NyZWF0ZUhtYWNIZWxwZXI6IGZ1bmN0aW9uIChoYXNoZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlLCBrZXkpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ19hbGdvLkhNQUMuaW5pdChoYXNoZXIsIGtleSkuZmluYWxpemUobWVzc2FnZSk7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWxnb3JpdGhtIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbyA9IHt9O1xuXG5cdCAgICByZXR1cm4gQztcblx0fShNYXRoKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlM7XG5cbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoTWF0aCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlcjtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cblx0ICAgIC8vIEluaXRpYWxpemF0aW9uIGFuZCByb3VuZCBjb25zdGFudHMgdGFibGVzXG5cdCAgICB2YXIgSCA9IFtdO1xuXHQgICAgdmFyIEsgPSBbXTtcblxuXHQgICAgLy8gQ29tcHV0ZSBjb25zdGFudHNcblx0ICAgIChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgZnVuY3Rpb24gaXNQcmltZShuKSB7XG5cdCAgICAgICAgICAgIHZhciBzcXJ0TiA9IE1hdGguc3FydChuKTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgZmFjdG9yID0gMjsgZmFjdG9yIDw9IHNxcnROOyBmYWN0b3IrKykge1xuXHQgICAgICAgICAgICAgICAgaWYgKCEobiAlIGZhY3RvcikpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBmdW5jdGlvbiBnZXRGcmFjdGlvbmFsQml0cyhuKSB7XG5cdCAgICAgICAgICAgIHJldHVybiAoKG4gLSAobiB8IDApKSAqIDB4MTAwMDAwMDAwKSB8IDA7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgdmFyIG4gPSAyO1xuXHQgICAgICAgIHZhciBuUHJpbWUgPSAwO1xuXHQgICAgICAgIHdoaWxlIChuUHJpbWUgPCA2NCkge1xuXHQgICAgICAgICAgICBpZiAoaXNQcmltZShuKSkge1xuXHQgICAgICAgICAgICAgICAgaWYgKG5QcmltZSA8IDgpIHtcblx0ICAgICAgICAgICAgICAgICAgICBIW25QcmltZV0gPSBnZXRGcmFjdGlvbmFsQml0cyhNYXRoLnBvdyhuLCAxIC8gMikpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgS1tuUHJpbWVdID0gZ2V0RnJhY3Rpb25hbEJpdHMoTWF0aC5wb3cobiwgMSAvIDMpKTtcblxuXHQgICAgICAgICAgICAgICAgblByaW1lKys7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICBuKys7XG5cdCAgICAgICAgfVxuXHQgICAgfSgpKTtcblxuXHQgICAgLy8gUmV1c2FibGUgb2JqZWN0XG5cdCAgICB2YXIgVyA9IFtdO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNIQS0yNTYgaGFzaCBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBTSEEyNTYgPSBDX2FsZ28uU0hBMjU2ID0gSGFzaGVyLmV4dGVuZCh7XG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdGhpcy5faGFzaCA9IG5ldyBXb3JkQXJyYXkuaW5pdChILnNsaWNlKDApKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvUHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBIID0gdGhpcy5faGFzaC53b3JkcztcblxuXHQgICAgICAgICAgICAvLyBXb3JraW5nIHZhcmlhYmxlc1xuXHQgICAgICAgICAgICB2YXIgYSA9IEhbMF07XG5cdCAgICAgICAgICAgIHZhciBiID0gSFsxXTtcblx0ICAgICAgICAgICAgdmFyIGMgPSBIWzJdO1xuXHQgICAgICAgICAgICB2YXIgZCA9IEhbM107XG5cdCAgICAgICAgICAgIHZhciBlID0gSFs0XTtcblx0ICAgICAgICAgICAgdmFyIGYgPSBIWzVdO1xuXHQgICAgICAgICAgICB2YXIgZyA9IEhbNl07XG5cdCAgICAgICAgICAgIHZhciBoID0gSFs3XTtcblxuXHQgICAgICAgICAgICAvLyBDb21wdXRhdGlvblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDY0OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIGlmIChpIDwgMTYpIHtcblx0ICAgICAgICAgICAgICAgICAgICBXW2ldID0gTVtvZmZzZXQgKyBpXSB8IDA7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTB4ID0gV1tpIC0gMTVdO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTAgID0gKChnYW1tYTB4IDw8IDI1KSB8IChnYW1tYTB4ID4+PiA3KSkgIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZ2FtbWEweCA8PCAxNCkgfCAoZ2FtbWEweCA+Pj4gMTgpKSBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGdhbW1hMHggPj4+IDMpO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMXggPSBXW2kgLSAyXTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExICA9ICgoZ2FtbWExeCA8PCAxNSkgfCAoZ2FtbWExeCA+Pj4gMTcpKSBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGdhbW1hMXggPDwgMTMpIHwgKGdhbW1hMXggPj4+IDE5KSkgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChnYW1tYTF4ID4+PiAxMCk7XG5cblx0ICAgICAgICAgICAgICAgICAgICBXW2ldID0gZ2FtbWEwICsgV1tpIC0gN10gKyBnYW1tYTEgKyBXW2kgLSAxNl07XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIHZhciBjaCAgPSAoZSAmIGYpIF4gKH5lICYgZyk7XG5cdCAgICAgICAgICAgICAgICB2YXIgbWFqID0gKGEgJiBiKSBeIChhICYgYykgXiAoYiAmIGMpO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWEwID0gKChhIDw8IDMwKSB8IChhID4+PiAyKSkgXiAoKGEgPDwgMTkpIHwgKGEgPj4+IDEzKSkgXiAoKGEgPDwgMTApIHwgKGEgPj4+IDIyKSk7XG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWExID0gKChlIDw8IDI2KSB8IChlID4+PiA2KSkgXiAoKGUgPDwgMjEpIHwgKGUgPj4+IDExKSkgXiAoKGUgPDwgNykgIHwgKGUgPj4+IDI1KSk7XG5cblx0ICAgICAgICAgICAgICAgIHZhciB0MSA9IGggKyBzaWdtYTEgKyBjaCArIEtbaV0gKyBXW2ldO1xuXHQgICAgICAgICAgICAgICAgdmFyIHQyID0gc2lnbWEwICsgbWFqO1xuXG5cdCAgICAgICAgICAgICAgICBoID0gZztcblx0ICAgICAgICAgICAgICAgIGcgPSBmO1xuXHQgICAgICAgICAgICAgICAgZiA9IGU7XG5cdCAgICAgICAgICAgICAgICBlID0gKGQgKyB0MSkgfCAwO1xuXHQgICAgICAgICAgICAgICAgZCA9IGM7XG5cdCAgICAgICAgICAgICAgICBjID0gYjtcblx0ICAgICAgICAgICAgICAgIGIgPSBhO1xuXHQgICAgICAgICAgICAgICAgYSA9ICh0MSArIHQyKSB8IDA7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBJbnRlcm1lZGlhdGUgaGFzaCB2YWx1ZVxuXHQgICAgICAgICAgICBIWzBdID0gKEhbMF0gKyBhKSB8IDA7XG5cdCAgICAgICAgICAgIEhbMV0gPSAoSFsxXSArIGIpIHwgMDtcblx0ICAgICAgICAgICAgSFsyXSA9IChIWzJdICsgYykgfCAwO1xuXHQgICAgICAgICAgICBIWzNdID0gKEhbM10gKyBkKSB8IDA7XG5cdCAgICAgICAgICAgIEhbNF0gPSAoSFs0XSArIGUpIHwgMDtcblx0ICAgICAgICAgICAgSFs1XSA9IChIWzVdICsgZikgfCAwO1xuXHQgICAgICAgICAgICBIWzZdID0gKEhbNl0gKyBnKSB8IDA7XG5cdCAgICAgICAgICAgIEhbN10gPSAoSFs3XSArIGgpIHwgMDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvRmluYWxpemU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cblx0ICAgICAgICAgICAgdmFyIG5CaXRzVG90YWwgPSB0aGlzLl9uRGF0YUJ5dGVzICogODtcblx0ICAgICAgICAgICAgdmFyIG5CaXRzTGVmdCA9IGRhdGEuc2lnQnl0ZXMgKiA4O1xuXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1tuQml0c0xlZnQgPj4+IDVdIHw9IDB4ODAgPDwgKDI0IC0gbkJpdHNMZWZ0ICUgMzIpO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE0XSA9IE1hdGguZmxvb3IobkJpdHNUb3RhbCAvIDB4MTAwMDAwMDAwKTtcblx0ICAgICAgICAgICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNV0gPSBuQml0c1RvdGFsO1xuXHQgICAgICAgICAgICBkYXRhLnNpZ0J5dGVzID0gZGF0YVdvcmRzLmxlbmd0aCAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gSGFzaCBmaW5hbCBibG9ja3Ncblx0ICAgICAgICAgICAgdGhpcy5fcHJvY2VzcygpO1xuXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBmaW5hbCBjb21wdXRlZCBoYXNoXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYXNoO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBIYXNoZXIuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUuX2hhc2ggPSB0aGlzLl9oYXNoLmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMjU2KCdtZXNzYWdlJyk7XG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEyNTYod29yZEFycmF5KTtcblx0ICAgICAqL1xuXHQgICAgQy5TSEEyNTYgPSBIYXNoZXIuX2NyZWF0ZUhlbHBlcihTSEEyNTYpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30ga2V5IFRoZSBzZWNyZXQga2V5LlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1NIQTI1NihtZXNzYWdlLCBrZXkpO1xuXHQgICAgICovXG5cdCAgICBDLkhtYWNTSEEyNTYgPSBIYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoU0hBMjU2KTtcblx0fShNYXRoKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuU0hBMjU2O1xuXG59KSk7IiwiKGZ1bmN0aW9uKCl7XG5cbiAgICAvLyBDb3B5cmlnaHQgKGMpIDIwMDUgIFRvbSBXdVxuICAgIC8vIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgLy8gU2VlIFwiTElDRU5TRVwiIGZvciBkZXRhaWxzLlxuXG4gICAgLy8gQmFzaWMgSmF2YVNjcmlwdCBCTiBsaWJyYXJ5IC0gc3Vic2V0IHVzZWZ1bCBmb3IgUlNBIGVuY3J5cHRpb24uXG5cbiAgICAvLyBCaXRzIHBlciBkaWdpdFxuICAgIHZhciBkYml0cztcblxuICAgIC8vIEphdmFTY3JpcHQgZW5naW5lIGFuYWx5c2lzXG4gICAgdmFyIGNhbmFyeSA9IDB4ZGVhZGJlZWZjYWZlO1xuICAgIHZhciBqX2xtID0gKChjYW5hcnkmMHhmZmZmZmYpPT0weGVmY2FmZSk7XG5cbiAgICAvLyAocHVibGljKSBDb25zdHJ1Y3RvclxuICAgIGZ1bmN0aW9uIEJpZ0ludGVnZXIoYSxiLGMpIHtcbiAgICAgIGlmKGEgIT0gbnVsbClcbiAgICAgICAgaWYoXCJudW1iZXJcIiA9PSB0eXBlb2YgYSkgdGhpcy5mcm9tTnVtYmVyKGEsYixjKTtcbiAgICAgICAgZWxzZSBpZihiID09IG51bGwgJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2YgYSkgdGhpcy5mcm9tU3RyaW5nKGEsMjU2KTtcbiAgICAgICAgZWxzZSB0aGlzLmZyb21TdHJpbmcoYSxiKTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gbmV3LCB1bnNldCBCaWdJbnRlZ2VyXG4gICAgZnVuY3Rpb24gbmJpKCkgeyByZXR1cm4gbmV3IEJpZ0ludGVnZXIobnVsbCk7IH1cblxuICAgIC8vIGFtOiBDb21wdXRlIHdfaiArPSAoeCp0aGlzX2kpLCBwcm9wYWdhdGUgY2FycmllcyxcbiAgICAvLyBjIGlzIGluaXRpYWwgY2FycnksIHJldHVybnMgZmluYWwgY2FycnkuXG4gICAgLy8gYyA8IDMqZHZhbHVlLCB4IDwgMipkdmFsdWUsIHRoaXNfaSA8IGR2YWx1ZVxuICAgIC8vIFdlIG5lZWQgdG8gc2VsZWN0IHRoZSBmYXN0ZXN0IG9uZSB0aGF0IHdvcmtzIGluIHRoaXMgZW52aXJvbm1lbnQuXG5cbiAgICAvLyBhbTE6IHVzZSBhIHNpbmdsZSBtdWx0IGFuZCBkaXZpZGUgdG8gZ2V0IHRoZSBoaWdoIGJpdHMsXG4gICAgLy8gbWF4IGRpZ2l0IGJpdHMgc2hvdWxkIGJlIDI2IGJlY2F1c2VcbiAgICAvLyBtYXggaW50ZXJuYWwgdmFsdWUgPSAyKmR2YWx1ZV4yLTIqZHZhbHVlICg8IDJeNTMpXG4gICAgZnVuY3Rpb24gYW0xKGkseCx3LGosYyxuKSB7XG4gICAgICB3aGlsZSgtLW4gPj0gMCkge1xuICAgICAgICB2YXIgdiA9IHgqdGhpc1tpKytdK3dbal0rYztcbiAgICAgICAgYyA9IE1hdGguZmxvb3Iodi8weDQwMDAwMDApO1xuICAgICAgICB3W2orK10gPSB2JjB4M2ZmZmZmZjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgICAvLyBhbTIgYXZvaWRzIGEgYmlnIG11bHQtYW5kLWV4dHJhY3QgY29tcGxldGVseS5cbiAgICAvLyBNYXggZGlnaXQgYml0cyBzaG91bGQgYmUgPD0gMzAgYmVjYXVzZSB3ZSBkbyBiaXR3aXNlIG9wc1xuICAgIC8vIG9uIHZhbHVlcyB1cCB0byAyKmhkdmFsdWVeMi1oZHZhbHVlLTEgKDwgMl4zMSlcbiAgICBmdW5jdGlvbiBhbTIoaSx4LHcsaixjLG4pIHtcbiAgICAgIHZhciB4bCA9IHgmMHg3ZmZmLCB4aCA9IHg+PjE1O1xuICAgICAgd2hpbGUoLS1uID49IDApIHtcbiAgICAgICAgdmFyIGwgPSB0aGlzW2ldJjB4N2ZmZjtcbiAgICAgICAgdmFyIGggPSB0aGlzW2krK10+PjE1O1xuICAgICAgICB2YXIgbSA9IHhoKmwraCp4bDtcbiAgICAgICAgbCA9IHhsKmwrKChtJjB4N2ZmZik8PDE1KSt3W2pdKyhjJjB4M2ZmZmZmZmYpO1xuICAgICAgICBjID0gKGw+Pj4zMCkrKG0+Pj4xNSkreGgqaCsoYz4+PjMwKTtcbiAgICAgICAgd1tqKytdID0gbCYweDNmZmZmZmZmO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIC8vIEFsdGVybmF0ZWx5LCBzZXQgbWF4IGRpZ2l0IGJpdHMgdG8gMjggc2luY2Ugc29tZVxuICAgIC8vIGJyb3dzZXJzIHNsb3cgZG93biB3aGVuIGRlYWxpbmcgd2l0aCAzMi1iaXQgbnVtYmVycy5cbiAgICBmdW5jdGlvbiBhbTMoaSx4LHcsaixjLG4pIHtcbiAgICAgIHZhciB4bCA9IHgmMHgzZmZmLCB4aCA9IHg+PjE0O1xuICAgICAgd2hpbGUoLS1uID49IDApIHtcbiAgICAgICAgdmFyIGwgPSB0aGlzW2ldJjB4M2ZmZjtcbiAgICAgICAgdmFyIGggPSB0aGlzW2krK10+PjE0O1xuICAgICAgICB2YXIgbSA9IHhoKmwraCp4bDtcbiAgICAgICAgbCA9IHhsKmwrKChtJjB4M2ZmZik8PDE0KSt3W2pdK2M7XG4gICAgICAgIGMgPSAobD4+MjgpKyhtPj4xNCkreGgqaDtcbiAgICAgICAgd1tqKytdID0gbCYweGZmZmZmZmY7XG4gICAgICB9XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgdmFyIGluQnJvd3NlciA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCI7XG4gICAgaWYoaW5Ccm93c2VyICYmIGpfbG0gJiYgKG5hdmlnYXRvci5hcHBOYW1lID09IFwiTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyXCIpKSB7XG4gICAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbSA9IGFtMjtcbiAgICAgIGRiaXRzID0gMzA7XG4gICAgfVxuICAgIGVsc2UgaWYoaW5Ccm93c2VyICYmIGpfbG0gJiYgKG5hdmlnYXRvci5hcHBOYW1lICE9IFwiTmV0c2NhcGVcIikpIHtcbiAgICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFtID0gYW0xO1xuICAgICAgZGJpdHMgPSAyNjtcbiAgICB9XG4gICAgZWxzZSB7IC8vIE1vemlsbGEvTmV0c2NhcGUgc2VlbXMgdG8gcHJlZmVyIGFtM1xuICAgICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW0gPSBhbTM7XG4gICAgICBkYml0cyA9IDI4O1xuICAgIH1cblxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkRCID0gZGJpdHM7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuRE0gPSAoKDE8PGRiaXRzKS0xKTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5EViA9ICgxPDxkYml0cyk7XG5cbiAgICB2YXIgQklfRlAgPSA1MjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5GViA9IE1hdGgucG93KDIsQklfRlApO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkYxID0gQklfRlAtZGJpdHM7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuRjIgPSAyKmRiaXRzLUJJX0ZQO1xuXG4gICAgLy8gRGlnaXQgY29udmVyc2lvbnNcbiAgICB2YXIgQklfUk0gPSBcIjAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiO1xuICAgIHZhciBCSV9SQyA9IG5ldyBBcnJheSgpO1xuICAgIHZhciBycix2djtcbiAgICByciA9IFwiMFwiLmNoYXJDb2RlQXQoMCk7XG4gICAgZm9yKHZ2ID0gMDsgdnYgPD0gOTsgKyt2dikgQklfUkNbcnIrK10gPSB2djtcbiAgICByciA9IFwiYVwiLmNoYXJDb2RlQXQoMCk7XG4gICAgZm9yKHZ2ID0gMTA7IHZ2IDwgMzY7ICsrdnYpIEJJX1JDW3JyKytdID0gdnY7XG4gICAgcnIgPSBcIkFcIi5jaGFyQ29kZUF0KDApO1xuICAgIGZvcih2diA9IDEwOyB2diA8IDM2OyArK3Z2KSBCSV9SQ1tycisrXSA9IHZ2O1xuXG4gICAgZnVuY3Rpb24gaW50MmNoYXIobikgeyByZXR1cm4gQklfUk0uY2hhckF0KG4pOyB9XG4gICAgZnVuY3Rpb24gaW50QXQocyxpKSB7XG4gICAgICB2YXIgYyA9IEJJX1JDW3MuY2hhckNvZGVBdChpKV07XG4gICAgICByZXR1cm4gKGM9PW51bGwpPy0xOmM7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgY29weSB0aGlzIHRvIHJcbiAgICBmdW5jdGlvbiBibnBDb3B5VG8ocikge1xuICAgICAgZm9yKHZhciBpID0gdGhpcy50LTE7IGkgPj0gMDsgLS1pKSByW2ldID0gdGhpc1tpXTtcbiAgICAgIHIudCA9IHRoaXMudDtcbiAgICAgIHIucyA9IHRoaXMucztcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBzZXQgZnJvbSBpbnRlZ2VyIHZhbHVlIHgsIC1EViA8PSB4IDwgRFZcbiAgICBmdW5jdGlvbiBibnBGcm9tSW50KHgpIHtcbiAgICAgIHRoaXMudCA9IDE7XG4gICAgICB0aGlzLnMgPSAoeDwwKT8tMTowO1xuICAgICAgaWYoeCA+IDApIHRoaXNbMF0gPSB4O1xuICAgICAgZWxzZSBpZih4IDwgLTEpIHRoaXNbMF0gPSB4K3RoaXMuRFY7XG4gICAgICBlbHNlIHRoaXMudCA9IDA7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGJpZ2ludCBpbml0aWFsaXplZCB0byB2YWx1ZVxuICAgIGZ1bmN0aW9uIG5idihpKSB7IHZhciByID0gbmJpKCk7IHIuZnJvbUludChpKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHNldCBmcm9tIHN0cmluZyBhbmQgcmFkaXhcbiAgICBmdW5jdGlvbiBibnBGcm9tU3RyaW5nKHMsYikge1xuICAgICAgdmFyIGs7XG4gICAgICBpZihiID09IDE2KSBrID0gNDtcbiAgICAgIGVsc2UgaWYoYiA9PSA4KSBrID0gMztcbiAgICAgIGVsc2UgaWYoYiA9PSAyNTYpIGsgPSA4OyAvLyBieXRlIGFycmF5XG4gICAgICBlbHNlIGlmKGIgPT0gMikgayA9IDE7XG4gICAgICBlbHNlIGlmKGIgPT0gMzIpIGsgPSA1O1xuICAgICAgZWxzZSBpZihiID09IDQpIGsgPSAyO1xuICAgICAgZWxzZSB7IHRoaXMuZnJvbVJhZGl4KHMsYik7IHJldHVybjsgfVxuICAgICAgdGhpcy50ID0gMDtcbiAgICAgIHRoaXMucyA9IDA7XG4gICAgICB2YXIgaSA9IHMubGVuZ3RoLCBtaSA9IGZhbHNlLCBzaCA9IDA7XG4gICAgICB3aGlsZSgtLWkgPj0gMCkge1xuICAgICAgICB2YXIgeCA9IChrPT04KT9zW2ldJjB4ZmY6aW50QXQocyxpKTtcbiAgICAgICAgaWYoeCA8IDApIHtcbiAgICAgICAgICBpZihzLmNoYXJBdChpKSA9PSBcIi1cIikgbWkgPSB0cnVlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG1pID0gZmFsc2U7XG4gICAgICAgIGlmKHNoID09IDApXG4gICAgICAgICAgdGhpc1t0aGlzLnQrK10gPSB4O1xuICAgICAgICBlbHNlIGlmKHNoK2sgPiB0aGlzLkRCKSB7XG4gICAgICAgICAgdGhpc1t0aGlzLnQtMV0gfD0gKHgmKCgxPDwodGhpcy5EQi1zaCkpLTEpKTw8c2g7XG4gICAgICAgICAgdGhpc1t0aGlzLnQrK10gPSAoeD4+KHRoaXMuREItc2gpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgdGhpc1t0aGlzLnQtMV0gfD0geDw8c2g7XG4gICAgICAgIHNoICs9IGs7XG4gICAgICAgIGlmKHNoID49IHRoaXMuREIpIHNoIC09IHRoaXMuREI7XG4gICAgICB9XG4gICAgICBpZihrID09IDggJiYgKHNbMF0mMHg4MCkgIT0gMCkge1xuICAgICAgICB0aGlzLnMgPSAtMTtcbiAgICAgICAgaWYoc2ggPiAwKSB0aGlzW3RoaXMudC0xXSB8PSAoKDE8PCh0aGlzLkRCLXNoKSktMSk8PHNoO1xuICAgICAgfVxuICAgICAgdGhpcy5jbGFtcCgpO1xuICAgICAgaWYobWkpIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyh0aGlzLHRoaXMpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIGNsYW1wIG9mZiBleGNlc3MgaGlnaCB3b3Jkc1xuICAgIGZ1bmN0aW9uIGJucENsYW1wKCkge1xuICAgICAgdmFyIGMgPSB0aGlzLnMmdGhpcy5ETTtcbiAgICAgIHdoaWxlKHRoaXMudCA+IDAgJiYgdGhpc1t0aGlzLnQtMV0gPT0gYykgLS10aGlzLnQ7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHN0cmluZyByZXByZXNlbnRhdGlvbiBpbiBnaXZlbiByYWRpeFxuICAgIGZ1bmN0aW9uIGJuVG9TdHJpbmcoYikge1xuICAgICAgaWYodGhpcy5zIDwgMCkgcmV0dXJuIFwiLVwiK3RoaXMubmVnYXRlKCkudG9TdHJpbmcoYik7XG4gICAgICB2YXIgaztcbiAgICAgIGlmKGIgPT0gMTYpIGsgPSA0O1xuICAgICAgZWxzZSBpZihiID09IDgpIGsgPSAzO1xuICAgICAgZWxzZSBpZihiID09IDIpIGsgPSAxO1xuICAgICAgZWxzZSBpZihiID09IDMyKSBrID0gNTtcbiAgICAgIGVsc2UgaWYoYiA9PSA0KSBrID0gMjtcbiAgICAgIGVsc2UgcmV0dXJuIHRoaXMudG9SYWRpeChiKTtcbiAgICAgIHZhciBrbSA9ICgxPDxrKS0xLCBkLCBtID0gZmFsc2UsIHIgPSBcIlwiLCBpID0gdGhpcy50O1xuICAgICAgdmFyIHAgPSB0aGlzLkRCLShpKnRoaXMuREIpJWs7XG4gICAgICBpZihpLS0gPiAwKSB7XG4gICAgICAgIGlmKHAgPCB0aGlzLkRCICYmIChkID0gdGhpc1tpXT4+cCkgPiAwKSB7IG0gPSB0cnVlOyByID0gaW50MmNoYXIoZCk7IH1cbiAgICAgICAgd2hpbGUoaSA+PSAwKSB7XG4gICAgICAgICAgaWYocCA8IGspIHtcbiAgICAgICAgICAgIGQgPSAodGhpc1tpXSYoKDE8PHApLTEpKTw8KGstcCk7XG4gICAgICAgICAgICBkIHw9IHRoaXNbLS1pXT4+KHArPXRoaXMuREItayk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZCA9ICh0aGlzW2ldPj4ocC09aykpJmttO1xuICAgICAgICAgICAgaWYocCA8PSAwKSB7IHAgKz0gdGhpcy5EQjsgLS1pOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGQgPiAwKSBtID0gdHJ1ZTtcbiAgICAgICAgICBpZihtKSByICs9IGludDJjaGFyKGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbT9yOlwiMFwiO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIC10aGlzXG4gICAgZnVuY3Rpb24gYm5OZWdhdGUoKSB7IHZhciByID0gbmJpKCk7IEJpZ0ludGVnZXIuWkVSTy5zdWJUbyh0aGlzLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgfHRoaXN8XG4gICAgZnVuY3Rpb24gYm5BYnMoKSB7IHJldHVybiAodGhpcy5zPDApP3RoaXMubmVnYXRlKCk6dGhpczsgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuICsgaWYgdGhpcyA+IGEsIC0gaWYgdGhpcyA8IGEsIDAgaWYgZXF1YWxcbiAgICBmdW5jdGlvbiBibkNvbXBhcmVUbyhhKSB7XG4gICAgICB2YXIgciA9IHRoaXMucy1hLnM7XG4gICAgICBpZihyICE9IDApIHJldHVybiByO1xuICAgICAgdmFyIGkgPSB0aGlzLnQ7XG4gICAgICByID0gaS1hLnQ7XG4gICAgICBpZihyICE9IDApIHJldHVybiAodGhpcy5zPDApPy1yOnI7XG4gICAgICB3aGlsZSgtLWkgPj0gMCkgaWYoKHI9dGhpc1tpXS1hW2ldKSAhPSAwKSByZXR1cm4gcjtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8vIHJldHVybnMgYml0IGxlbmd0aCBvZiB0aGUgaW50ZWdlciB4XG4gICAgZnVuY3Rpb24gbmJpdHMoeCkge1xuICAgICAgdmFyIHIgPSAxLCB0O1xuICAgICAgaWYoKHQ9eD4+PjE2KSAhPSAwKSB7IHggPSB0OyByICs9IDE2OyB9XG4gICAgICBpZigodD14Pj44KSAhPSAwKSB7IHggPSB0OyByICs9IDg7IH1cbiAgICAgIGlmKCh0PXg+PjQpICE9IDApIHsgeCA9IHQ7IHIgKz0gNDsgfVxuICAgICAgaWYoKHQ9eD4+MikgIT0gMCkgeyB4ID0gdDsgciArPSAyOyB9XG4gICAgICBpZigodD14Pj4xKSAhPSAwKSB7IHggPSB0OyByICs9IDE7IH1cbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiB0aGUgbnVtYmVyIG9mIGJpdHMgaW4gXCJ0aGlzXCJcbiAgICBmdW5jdGlvbiBibkJpdExlbmd0aCgpIHtcbiAgICAgIGlmKHRoaXMudCA8PSAwKSByZXR1cm4gMDtcbiAgICAgIHJldHVybiB0aGlzLkRCKih0aGlzLnQtMSkrbmJpdHModGhpc1t0aGlzLnQtMV1eKHRoaXMucyZ0aGlzLkRNKSk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgPDwgbipEQlxuICAgIGZ1bmN0aW9uIGJucERMU2hpZnRUbyhuLHIpIHtcbiAgICAgIHZhciBpO1xuICAgICAgZm9yKGkgPSB0aGlzLnQtMTsgaSA+PSAwOyAtLWkpIHJbaStuXSA9IHRoaXNbaV07XG4gICAgICBmb3IoaSA9IG4tMTsgaSA+PSAwOyAtLWkpIHJbaV0gPSAwO1xuICAgICAgci50ID0gdGhpcy50K247XG4gICAgICByLnMgPSB0aGlzLnM7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgPj4gbipEQlxuICAgIGZ1bmN0aW9uIGJucERSU2hpZnRUbyhuLHIpIHtcbiAgICAgIGZvcih2YXIgaSA9IG47IGkgPCB0aGlzLnQ7ICsraSkgcltpLW5dID0gdGhpc1tpXTtcbiAgICAgIHIudCA9IE1hdGgubWF4KHRoaXMudC1uLDApO1xuICAgICAgci5zID0gdGhpcy5zO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzIDw8IG5cbiAgICBmdW5jdGlvbiBibnBMU2hpZnRUbyhuLHIpIHtcbiAgICAgIHZhciBicyA9IG4ldGhpcy5EQjtcbiAgICAgIHZhciBjYnMgPSB0aGlzLkRCLWJzO1xuICAgICAgdmFyIGJtID0gKDE8PGNicyktMTtcbiAgICAgIHZhciBkcyA9IE1hdGguZmxvb3Iobi90aGlzLkRCKSwgYyA9ICh0aGlzLnM8PGJzKSZ0aGlzLkRNLCBpO1xuICAgICAgZm9yKGkgPSB0aGlzLnQtMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgcltpK2RzKzFdID0gKHRoaXNbaV0+PmNicyl8YztcbiAgICAgICAgYyA9ICh0aGlzW2ldJmJtKTw8YnM7XG4gICAgICB9XG4gICAgICBmb3IoaSA9IGRzLTE7IGkgPj0gMDsgLS1pKSByW2ldID0gMDtcbiAgICAgIHJbZHNdID0gYztcbiAgICAgIHIudCA9IHRoaXMudCtkcysxO1xuICAgICAgci5zID0gdGhpcy5zO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzID4+IG5cbiAgICBmdW5jdGlvbiBibnBSU2hpZnRUbyhuLHIpIHtcbiAgICAgIHIucyA9IHRoaXMucztcbiAgICAgIHZhciBkcyA9IE1hdGguZmxvb3Iobi90aGlzLkRCKTtcbiAgICAgIGlmKGRzID49IHRoaXMudCkgeyByLnQgPSAwOyByZXR1cm47IH1cbiAgICAgIHZhciBicyA9IG4ldGhpcy5EQjtcbiAgICAgIHZhciBjYnMgPSB0aGlzLkRCLWJzO1xuICAgICAgdmFyIGJtID0gKDE8PGJzKS0xO1xuICAgICAgclswXSA9IHRoaXNbZHNdPj5icztcbiAgICAgIGZvcih2YXIgaSA9IGRzKzE7IGkgPCB0aGlzLnQ7ICsraSkge1xuICAgICAgICByW2ktZHMtMV0gfD0gKHRoaXNbaV0mYm0pPDxjYnM7XG4gICAgICAgIHJbaS1kc10gPSB0aGlzW2ldPj5icztcbiAgICAgIH1cbiAgICAgIGlmKGJzID4gMCkgclt0aGlzLnQtZHMtMV0gfD0gKHRoaXMucyZibSk8PGNicztcbiAgICAgIHIudCA9IHRoaXMudC1kcztcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyAtIGFcbiAgICBmdW5jdGlvbiBibnBTdWJUbyhhLHIpIHtcbiAgICAgIHZhciBpID0gMCwgYyA9IDAsIG0gPSBNYXRoLm1pbihhLnQsdGhpcy50KTtcbiAgICAgIHdoaWxlKGkgPCBtKSB7XG4gICAgICAgIGMgKz0gdGhpc1tpXS1hW2ldO1xuICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICB9XG4gICAgICBpZihhLnQgPCB0aGlzLnQpIHtcbiAgICAgICAgYyAtPSBhLnM7XG4gICAgICAgIHdoaWxlKGkgPCB0aGlzLnQpIHtcbiAgICAgICAgICBjICs9IHRoaXNbaV07XG4gICAgICAgICAgcltpKytdID0gYyZ0aGlzLkRNO1xuICAgICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICAgIH1cbiAgICAgICAgYyArPSB0aGlzLnM7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYyArPSB0aGlzLnM7XG4gICAgICAgIHdoaWxlKGkgPCBhLnQpIHtcbiAgICAgICAgICBjIC09IGFbaV07XG4gICAgICAgICAgcltpKytdID0gYyZ0aGlzLkRNO1xuICAgICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICAgIH1cbiAgICAgICAgYyAtPSBhLnM7XG4gICAgICB9XG4gICAgICByLnMgPSAoYzwwKT8tMTowO1xuICAgICAgaWYoYyA8IC0xKSByW2krK10gPSB0aGlzLkRWK2M7XG4gICAgICBlbHNlIGlmKGMgPiAwKSByW2krK10gPSBjO1xuICAgICAgci50ID0gaTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyAqIGEsIHIgIT0gdGhpcyxhIChIQUMgMTQuMTIpXG4gICAgLy8gXCJ0aGlzXCIgc2hvdWxkIGJlIHRoZSBsYXJnZXIgb25lIGlmIGFwcHJvcHJpYXRlLlxuICAgIGZ1bmN0aW9uIGJucE11bHRpcGx5VG8oYSxyKSB7XG4gICAgICB2YXIgeCA9IHRoaXMuYWJzKCksIHkgPSBhLmFicygpO1xuICAgICAgdmFyIGkgPSB4LnQ7XG4gICAgICByLnQgPSBpK3kudDtcbiAgICAgIHdoaWxlKC0taSA+PSAwKSByW2ldID0gMDtcbiAgICAgIGZvcihpID0gMDsgaSA8IHkudDsgKytpKSByW2kreC50XSA9IHguYW0oMCx5W2ldLHIsaSwwLHgudCk7XG4gICAgICByLnMgPSAwO1xuICAgICAgci5jbGFtcCgpO1xuICAgICAgaWYodGhpcy5zICE9IGEucykgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHIscik7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXNeMiwgciAhPSB0aGlzIChIQUMgMTQuMTYpXG4gICAgZnVuY3Rpb24gYm5wU3F1YXJlVG8ocikge1xuICAgICAgdmFyIHggPSB0aGlzLmFicygpO1xuICAgICAgdmFyIGkgPSByLnQgPSAyKngudDtcbiAgICAgIHdoaWxlKC0taSA+PSAwKSByW2ldID0gMDtcbiAgICAgIGZvcihpID0gMDsgaSA8IHgudC0xOyArK2kpIHtcbiAgICAgICAgdmFyIGMgPSB4LmFtKGkseFtpXSxyLDIqaSwwLDEpO1xuICAgICAgICBpZigocltpK3gudF0rPXguYW0oaSsxLDIqeFtpXSxyLDIqaSsxLGMseC50LWktMSkpID49IHguRFYpIHtcbiAgICAgICAgICByW2kreC50XSAtPSB4LkRWO1xuICAgICAgICAgIHJbaSt4LnQrMV0gPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihyLnQgPiAwKSByW3IudC0xXSArPSB4LmFtKGkseFtpXSxyLDIqaSwwLDEpO1xuICAgICAgci5zID0gMDtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBkaXZpZGUgdGhpcyBieSBtLCBxdW90aWVudCBhbmQgcmVtYWluZGVyIHRvIHEsIHIgKEhBQyAxNC4yMClcbiAgICAvLyByICE9IHEsIHRoaXMgIT0gbS4gIHEgb3IgciBtYXkgYmUgbnVsbC5cbiAgICBmdW5jdGlvbiBibnBEaXZSZW1UbyhtLHEscikge1xuICAgICAgdmFyIHBtID0gbS5hYnMoKTtcbiAgICAgIGlmKHBtLnQgPD0gMCkgcmV0dXJuO1xuICAgICAgdmFyIHB0ID0gdGhpcy5hYnMoKTtcbiAgICAgIGlmKHB0LnQgPCBwbS50KSB7XG4gICAgICAgIGlmKHEgIT0gbnVsbCkgcS5mcm9tSW50KDApO1xuICAgICAgICBpZihyICE9IG51bGwpIHRoaXMuY29weVRvKHIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZihyID09IG51bGwpIHIgPSBuYmkoKTtcbiAgICAgIHZhciB5ID0gbmJpKCksIHRzID0gdGhpcy5zLCBtcyA9IG0ucztcbiAgICAgIHZhciBuc2ggPSB0aGlzLkRCLW5iaXRzKHBtW3BtLnQtMV0pOyAgIC8vIG5vcm1hbGl6ZSBtb2R1bHVzXG4gICAgICBpZihuc2ggPiAwKSB7IHBtLmxTaGlmdFRvKG5zaCx5KTsgcHQubFNoaWZ0VG8obnNoLHIpOyB9XG4gICAgICBlbHNlIHsgcG0uY29weVRvKHkpOyBwdC5jb3B5VG8ocik7IH1cbiAgICAgIHZhciB5cyA9IHkudDtcbiAgICAgIHZhciB5MCA9IHlbeXMtMV07XG4gICAgICBpZih5MCA9PSAwKSByZXR1cm47XG4gICAgICB2YXIgeXQgPSB5MCooMTw8dGhpcy5GMSkrKCh5cz4xKT95W3lzLTJdPj50aGlzLkYyOjApO1xuICAgICAgdmFyIGQxID0gdGhpcy5GVi95dCwgZDIgPSAoMTw8dGhpcy5GMSkveXQsIGUgPSAxPDx0aGlzLkYyO1xuICAgICAgdmFyIGkgPSByLnQsIGogPSBpLXlzLCB0ID0gKHE9PW51bGwpP25iaSgpOnE7XG4gICAgICB5LmRsU2hpZnRUbyhqLHQpO1xuICAgICAgaWYoci5jb21wYXJlVG8odCkgPj0gMCkge1xuICAgICAgICByW3IudCsrXSA9IDE7XG4gICAgICAgIHIuc3ViVG8odCxyKTtcbiAgICAgIH1cbiAgICAgIEJpZ0ludGVnZXIuT05FLmRsU2hpZnRUbyh5cyx0KTtcbiAgICAgIHQuc3ViVG8oeSx5KTsgIC8vIFwibmVnYXRpdmVcIiB5IHNvIHdlIGNhbiByZXBsYWNlIHN1YiB3aXRoIGFtIGxhdGVyXG4gICAgICB3aGlsZSh5LnQgPCB5cykgeVt5LnQrK10gPSAwO1xuICAgICAgd2hpbGUoLS1qID49IDApIHtcbiAgICAgICAgLy8gRXN0aW1hdGUgcXVvdGllbnQgZGlnaXRcbiAgICAgICAgdmFyIHFkID0gKHJbLS1pXT09eTApP3RoaXMuRE06TWF0aC5mbG9vcihyW2ldKmQxKyhyW2ktMV0rZSkqZDIpO1xuICAgICAgICBpZigocltpXSs9eS5hbSgwLHFkLHIsaiwwLHlzKSkgPCBxZCkgeyAgIC8vIFRyeSBpdCBvdXRcbiAgICAgICAgICB5LmRsU2hpZnRUbyhqLHQpO1xuICAgICAgICAgIHIuc3ViVG8odCxyKTtcbiAgICAgICAgICB3aGlsZShyW2ldIDwgLS1xZCkgci5zdWJUbyh0LHIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihxICE9IG51bGwpIHtcbiAgICAgICAgci5kclNoaWZ0VG8oeXMscSk7XG4gICAgICAgIGlmKHRzICE9IG1zKSBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8ocSxxKTtcbiAgICAgIH1cbiAgICAgIHIudCA9IHlzO1xuICAgICAgci5jbGFtcCgpO1xuICAgICAgaWYobnNoID4gMCkgci5yU2hpZnRUbyhuc2gscik7IC8vIERlbm9ybWFsaXplIHJlbWFpbmRlclxuICAgICAgaWYodHMgPCAwKSBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8ocixyKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIG1vZCBhXG4gICAgZnVuY3Rpb24gYm5Nb2QoYSkge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIHRoaXMuYWJzKCkuZGl2UmVtVG8oYSxudWxsLHIpO1xuICAgICAgaWYodGhpcy5zIDwgMCAmJiByLmNvbXBhcmVUbyhCaWdJbnRlZ2VyLlpFUk8pID4gMCkgYS5zdWJUbyhyLHIpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gTW9kdWxhciByZWR1Y3Rpb24gdXNpbmcgXCJjbGFzc2ljXCIgYWxnb3JpdGhtXG4gICAgZnVuY3Rpb24gQ2xhc3NpYyhtKSB7IHRoaXMubSA9IG07IH1cbiAgICBmdW5jdGlvbiBjQ29udmVydCh4KSB7XG4gICAgICBpZih4LnMgPCAwIHx8IHguY29tcGFyZVRvKHRoaXMubSkgPj0gMCkgcmV0dXJuIHgubW9kKHRoaXMubSk7XG4gICAgICBlbHNlIHJldHVybiB4O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjUmV2ZXJ0KHgpIHsgcmV0dXJuIHg7IH1cbiAgICBmdW5jdGlvbiBjUmVkdWNlKHgpIHsgeC5kaXZSZW1Ubyh0aGlzLm0sbnVsbCx4KTsgfVxuICAgIGZ1bmN0aW9uIGNNdWxUbyh4LHkscikgeyB4Lm11bHRpcGx5VG8oeSxyKTsgdGhpcy5yZWR1Y2Uocik7IH1cbiAgICBmdW5jdGlvbiBjU3FyVG8oeCxyKSB7IHguc3F1YXJlVG8ocik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICBDbGFzc2ljLnByb3RvdHlwZS5jb252ZXJ0ID0gY0NvbnZlcnQ7XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUucmV2ZXJ0ID0gY1JldmVydDtcbiAgICBDbGFzc2ljLnByb3RvdHlwZS5yZWR1Y2UgPSBjUmVkdWNlO1xuICAgIENsYXNzaWMucHJvdG90eXBlLm11bFRvID0gY011bFRvO1xuICAgIENsYXNzaWMucHJvdG90eXBlLnNxclRvID0gY1NxclRvO1xuXG4gICAgLy8gKHByb3RlY3RlZCkgcmV0dXJuIFwiLTEvdGhpcyAlIDJeREJcIjsgdXNlZnVsIGZvciBNb250LiByZWR1Y3Rpb25cbiAgICAvLyBqdXN0aWZpY2F0aW9uOlxuICAgIC8vICAgICAgICAgeHkgPT0gMSAobW9kIG0pXG4gICAgLy8gICAgICAgICB4eSA9ICAxK2ttXG4gICAgLy8gICB4eSgyLXh5KSA9ICgxK2ttKSgxLWttKVxuICAgIC8vIHhbeSgyLXh5KV0gPSAxLWteMm1eMlxuICAgIC8vIHhbeSgyLXh5KV0gPT0gMSAobW9kIG1eMilcbiAgICAvLyBpZiB5IGlzIDEveCBtb2QgbSwgdGhlbiB5KDIteHkpIGlzIDEveCBtb2QgbV4yXG4gICAgLy8gc2hvdWxkIHJlZHVjZSB4IGFuZCB5KDIteHkpIGJ5IG1eMiBhdCBlYWNoIHN0ZXAgdG8ga2VlcCBzaXplIGJvdW5kZWQuXG4gICAgLy8gSlMgbXVsdGlwbHkgXCJvdmVyZmxvd3NcIiBkaWZmZXJlbnRseSBmcm9tIEMvQysrLCBzbyBjYXJlIGlzIG5lZWRlZCBoZXJlLlxuICAgIGZ1bmN0aW9uIGJucEludkRpZ2l0KCkge1xuICAgICAgaWYodGhpcy50IDwgMSkgcmV0dXJuIDA7XG4gICAgICB2YXIgeCA9IHRoaXNbMF07XG4gICAgICBpZigoeCYxKSA9PSAwKSByZXR1cm4gMDtcbiAgICAgIHZhciB5ID0geCYzOyAgICAgICAvLyB5ID09IDEveCBtb2QgMl4yXG4gICAgICB5ID0gKHkqKDItKHgmMHhmKSp5KSkmMHhmOyAvLyB5ID09IDEveCBtb2QgMl40XG4gICAgICB5ID0gKHkqKDItKHgmMHhmZikqeSkpJjB4ZmY7ICAgLy8geSA9PSAxL3ggbW9kIDJeOFxuICAgICAgeSA9ICh5KigyLSgoKHgmMHhmZmZmKSp5KSYweGZmZmYpKSkmMHhmZmZmOyAgICAvLyB5ID09IDEveCBtb2QgMl4xNlxuICAgICAgLy8gbGFzdCBzdGVwIC0gY2FsY3VsYXRlIGludmVyc2UgbW9kIERWIGRpcmVjdGx5O1xuICAgICAgLy8gYXNzdW1lcyAxNiA8IERCIDw9IDMyIGFuZCBhc3N1bWVzIGFiaWxpdHkgdG8gaGFuZGxlIDQ4LWJpdCBpbnRzXG4gICAgICB5ID0gKHkqKDIteCp5JXRoaXMuRFYpKSV0aGlzLkRWOyAgICAgICAvLyB5ID09IDEveCBtb2QgMl5kYml0c1xuICAgICAgLy8gd2UgcmVhbGx5IHdhbnQgdGhlIG5lZ2F0aXZlIGludmVyc2UsIGFuZCAtRFYgPCB5IDwgRFZcbiAgICAgIHJldHVybiAoeT4wKT90aGlzLkRWLXk6LXk7XG4gICAgfVxuXG4gICAgLy8gTW9udGdvbWVyeSByZWR1Y3Rpb25cbiAgICBmdW5jdGlvbiBNb250Z29tZXJ5KG0pIHtcbiAgICAgIHRoaXMubSA9IG07XG4gICAgICB0aGlzLm1wID0gbS5pbnZEaWdpdCgpO1xuICAgICAgdGhpcy5tcGwgPSB0aGlzLm1wJjB4N2ZmZjtcbiAgICAgIHRoaXMubXBoID0gdGhpcy5tcD4+MTU7XG4gICAgICB0aGlzLnVtID0gKDE8PChtLkRCLTE1KSktMTtcbiAgICAgIHRoaXMubXQyID0gMiptLnQ7XG4gICAgfVxuXG4gICAgLy8geFIgbW9kIG1cbiAgICBmdW5jdGlvbiBtb250Q29udmVydCh4KSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgeC5hYnMoKS5kbFNoaWZ0VG8odGhpcy5tLnQscik7XG4gICAgICByLmRpdlJlbVRvKHRoaXMubSxudWxsLHIpO1xuICAgICAgaWYoeC5zIDwgMCAmJiByLmNvbXBhcmVUbyhCaWdJbnRlZ2VyLlpFUk8pID4gMCkgdGhpcy5tLnN1YlRvKHIscik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyB4L1IgbW9kIG1cbiAgICBmdW5jdGlvbiBtb250UmV2ZXJ0KHgpIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICB4LmNvcHlUbyhyKTtcbiAgICAgIHRoaXMucmVkdWNlKHIpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8geCA9IHgvUiBtb2QgbSAoSEFDIDE0LjMyKVxuICAgIGZ1bmN0aW9uIG1vbnRSZWR1Y2UoeCkge1xuICAgICAgd2hpbGUoeC50IDw9IHRoaXMubXQyKSAvLyBwYWQgeCBzbyBhbSBoYXMgZW5vdWdoIHJvb20gbGF0ZXJcbiAgICAgICAgeFt4LnQrK10gPSAwO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMubS50OyArK2kpIHtcbiAgICAgICAgLy8gZmFzdGVyIHdheSBvZiBjYWxjdWxhdGluZyB1MCA9IHhbaV0qbXAgbW9kIERWXG4gICAgICAgIHZhciBqID0geFtpXSYweDdmZmY7XG4gICAgICAgIHZhciB1MCA9IChqKnRoaXMubXBsKygoKGoqdGhpcy5tcGgrKHhbaV0+PjE1KSp0aGlzLm1wbCkmdGhpcy51bSk8PDE1KSkmeC5ETTtcbiAgICAgICAgLy8gdXNlIGFtIHRvIGNvbWJpbmUgdGhlIG11bHRpcGx5LXNoaWZ0LWFkZCBpbnRvIG9uZSBjYWxsXG4gICAgICAgIGogPSBpK3RoaXMubS50O1xuICAgICAgICB4W2pdICs9IHRoaXMubS5hbSgwLHUwLHgsaSwwLHRoaXMubS50KTtcbiAgICAgICAgLy8gcHJvcGFnYXRlIGNhcnJ5XG4gICAgICAgIHdoaWxlKHhbal0gPj0geC5EVikgeyB4W2pdIC09IHguRFY7IHhbKytqXSsrOyB9XG4gICAgICB9XG4gICAgICB4LmNsYW1wKCk7XG4gICAgICB4LmRyU2hpZnRUbyh0aGlzLm0udCx4KTtcbiAgICAgIGlmKHguY29tcGFyZVRvKHRoaXMubSkgPj0gMCkgeC5zdWJUbyh0aGlzLm0seCk7XG4gICAgfVxuXG4gICAgLy8gciA9IFwieF4yL1IgbW9kIG1cIjsgeCAhPSByXG4gICAgZnVuY3Rpb24gbW9udFNxclRvKHgscikgeyB4LnNxdWFyZVRvKHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuXG4gICAgLy8gciA9IFwieHkvUiBtb2QgbVwiOyB4LHkgIT0gclxuICAgIGZ1bmN0aW9uIG1vbnRNdWxUbyh4LHkscikgeyB4Lm11bHRpcGx5VG8oeSxyKTsgdGhpcy5yZWR1Y2Uocik7IH1cblxuICAgIE1vbnRnb21lcnkucHJvdG90eXBlLmNvbnZlcnQgPSBtb250Q29udmVydDtcbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5yZXZlcnQgPSBtb250UmV2ZXJ0O1xuICAgIE1vbnRnb21lcnkucHJvdG90eXBlLnJlZHVjZSA9IG1vbnRSZWR1Y2U7XG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUubXVsVG8gPSBtb250TXVsVG87XG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUuc3FyVG8gPSBtb250U3FyVG87XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0cnVlIGlmZiB0aGlzIGlzIGV2ZW5cbiAgICBmdW5jdGlvbiBibnBJc0V2ZW4oKSB7IHJldHVybiAoKHRoaXMudD4wKT8odGhpc1swXSYxKTp0aGlzLnMpID09IDA7IH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXNeZSwgZSA8IDJeMzIsIGRvaW5nIHNxciBhbmQgbXVsIHdpdGggXCJyXCIgKEhBQyAxNC43OSlcbiAgICBmdW5jdGlvbiBibnBFeHAoZSx6KSB7XG4gICAgICBpZihlID4gMHhmZmZmZmZmZiB8fCBlIDwgMSkgcmV0dXJuIEJpZ0ludGVnZXIuT05FO1xuICAgICAgdmFyIHIgPSBuYmkoKSwgcjIgPSBuYmkoKSwgZyA9IHouY29udmVydCh0aGlzKSwgaSA9IG5iaXRzKGUpLTE7XG4gICAgICBnLmNvcHlUbyhyKTtcbiAgICAgIHdoaWxlKC0taSA+PSAwKSB7XG4gICAgICAgIHouc3FyVG8ocixyMik7XG4gICAgICAgIGlmKChlJigxPDxpKSkgPiAwKSB6Lm11bFRvKHIyLGcscik7XG4gICAgICAgIGVsc2UgeyB2YXIgdCA9IHI7IHIgPSByMjsgcjIgPSB0OyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gei5yZXZlcnQocik7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpc15lICUgbSwgMCA8PSBlIDwgMl4zMlxuICAgIGZ1bmN0aW9uIGJuTW9kUG93SW50KGUsbSkge1xuICAgICAgdmFyIHo7XG4gICAgICBpZihlIDwgMjU2IHx8IG0uaXNFdmVuKCkpIHogPSBuZXcgQ2xhc3NpYyhtKTsgZWxzZSB6ID0gbmV3IE1vbnRnb21lcnkobSk7XG4gICAgICByZXR1cm4gdGhpcy5leHAoZSx6KTtcbiAgICB9XG5cbiAgICAvLyBwcm90ZWN0ZWRcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb3B5VG8gPSBibnBDb3B5VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbUludCA9IGJucEZyb21JbnQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbVN0cmluZyA9IGJucEZyb21TdHJpbmc7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY2xhbXAgPSBibnBDbGFtcDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kbFNoaWZ0VG8gPSBibnBETFNoaWZ0VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZHJTaGlmdFRvID0gYm5wRFJTaGlmdFRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmxTaGlmdFRvID0gYm5wTFNoaWZ0VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuclNoaWZ0VG8gPSBibnBSU2hpZnRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zdWJUbyA9IGJucFN1YlRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5VG8gPSBibnBNdWx0aXBseVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNxdWFyZVRvID0gYm5wU3F1YXJlVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2UmVtVG8gPSBibnBEaXZSZW1UbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pbnZEaWdpdCA9IGJucEludkRpZ2l0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzRXZlbiA9IGJucElzRXZlbjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5leHAgPSBibnBFeHA7XG5cbiAgICAvLyBwdWJsaWNcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b1N0cmluZyA9IGJuVG9TdHJpbmc7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubmVnYXRlID0gYm5OZWdhdGU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYWJzID0gYm5BYnM7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZVRvID0gYm5Db21wYXJlVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYml0TGVuZ3RoID0gYm5CaXRMZW5ndGg7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kID0gYm5Nb2Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kUG93SW50ID0gYm5Nb2RQb3dJbnQ7XG5cbiAgICAvLyBcImNvbnN0YW50c1wiXG4gICAgQmlnSW50ZWdlci5aRVJPID0gbmJ2KDApO1xuICAgIEJpZ0ludGVnZXIuT05FID0gbmJ2KDEpO1xuXG4gICAgLy8gQ29weXJpZ2h0IChjKSAyMDA1LTIwMDkgIFRvbSBXdVxuICAgIC8vIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgLy8gU2VlIFwiTElDRU5TRVwiIGZvciBkZXRhaWxzLlxuXG4gICAgLy8gRXh0ZW5kZWQgSmF2YVNjcmlwdCBCTiBmdW5jdGlvbnMsIHJlcXVpcmVkIGZvciBSU0EgcHJpdmF0ZSBvcHMuXG5cbiAgICAvLyBWZXJzaW9uIDEuMTogbmV3IEJpZ0ludGVnZXIoXCIwXCIsIDEwKSByZXR1cm5zIFwicHJvcGVyXCIgemVyb1xuICAgIC8vIFZlcnNpb24gMS4yOiBzcXVhcmUoKSBBUEksIGlzUHJvYmFibGVQcmltZSBmaXhcblxuICAgIC8vIChwdWJsaWMpXG4gICAgZnVuY3Rpb24gYm5DbG9uZSgpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5jb3B5VG8ocik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gdmFsdWUgYXMgaW50ZWdlclxuICAgIGZ1bmN0aW9uIGJuSW50VmFsdWUoKSB7XG4gICAgICBpZih0aGlzLnMgPCAwKSB7XG4gICAgICAgIGlmKHRoaXMudCA9PSAxKSByZXR1cm4gdGhpc1swXS10aGlzLkRWO1xuICAgICAgICBlbHNlIGlmKHRoaXMudCA9PSAwKSByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHRoaXMudCA9PSAxKSByZXR1cm4gdGhpc1swXTtcbiAgICAgIGVsc2UgaWYodGhpcy50ID09IDApIHJldHVybiAwO1xuICAgICAgLy8gYXNzdW1lcyAxNiA8IERCIDwgMzJcbiAgICAgIHJldHVybiAoKHRoaXNbMV0mKCgxPDwoMzItdGhpcy5EQikpLTEpKTw8dGhpcy5EQil8dGhpc1swXTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gdmFsdWUgYXMgYnl0ZVxuICAgIGZ1bmN0aW9uIGJuQnl0ZVZhbHVlKCkgeyByZXR1cm4gKHRoaXMudD09MCk/dGhpcy5zOih0aGlzWzBdPDwyNCk+PjI0OyB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gdmFsdWUgYXMgc2hvcnQgKGFzc3VtZXMgREI+PTE2KVxuICAgIGZ1bmN0aW9uIGJuU2hvcnRWYWx1ZSgpIHsgcmV0dXJuICh0aGlzLnQ9PTApP3RoaXMuczoodGhpc1swXTw8MTYpPj4xNjsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgcmV0dXJuIHggcy50LiByXnggPCBEVlxuICAgIGZ1bmN0aW9uIGJucENodW5rU2l6ZShyKSB7IHJldHVybiBNYXRoLmZsb29yKE1hdGguTE4yKnRoaXMuREIvTWF0aC5sb2cocikpOyB9XG5cbiAgICAvLyAocHVibGljKSAwIGlmIHRoaXMgPT0gMCwgMSBpZiB0aGlzID4gMFxuICAgIGZ1bmN0aW9uIGJuU2lnTnVtKCkge1xuICAgICAgaWYodGhpcy5zIDwgMCkgcmV0dXJuIC0xO1xuICAgICAgZWxzZSBpZih0aGlzLnQgPD0gMCB8fCAodGhpcy50ID09IDEgJiYgdGhpc1swXSA8PSAwKSkgcmV0dXJuIDA7XG4gICAgICBlbHNlIHJldHVybiAxO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIGNvbnZlcnQgdG8gcmFkaXggc3RyaW5nXG4gICAgZnVuY3Rpb24gYm5wVG9SYWRpeChiKSB7XG4gICAgICBpZihiID09IG51bGwpIGIgPSAxMDtcbiAgICAgIGlmKHRoaXMuc2lnbnVtKCkgPT0gMCB8fCBiIDwgMiB8fCBiID4gMzYpIHJldHVybiBcIjBcIjtcbiAgICAgIHZhciBjcyA9IHRoaXMuY2h1bmtTaXplKGIpO1xuICAgICAgdmFyIGEgPSBNYXRoLnBvdyhiLGNzKTtcbiAgICAgIHZhciBkID0gbmJ2KGEpLCB5ID0gbmJpKCksIHogPSBuYmkoKSwgciA9IFwiXCI7XG4gICAgICB0aGlzLmRpdlJlbVRvKGQseSx6KTtcbiAgICAgIHdoaWxlKHkuc2lnbnVtKCkgPiAwKSB7XG4gICAgICAgIHIgPSAoYSt6LmludFZhbHVlKCkpLnRvU3RyaW5nKGIpLnN1YnN0cigxKSArIHI7XG4gICAgICAgIHkuZGl2UmVtVG8oZCx5LHopO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHouaW50VmFsdWUoKS50b1N0cmluZyhiKSArIHI7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgY29udmVydCBmcm9tIHJhZGl4IHN0cmluZ1xuICAgIGZ1bmN0aW9uIGJucEZyb21SYWRpeChzLGIpIHtcbiAgICAgIHRoaXMuZnJvbUludCgwKTtcbiAgICAgIGlmKGIgPT0gbnVsbCkgYiA9IDEwO1xuICAgICAgdmFyIGNzID0gdGhpcy5jaHVua1NpemUoYik7XG4gICAgICB2YXIgZCA9IE1hdGgucG93KGIsY3MpLCBtaSA9IGZhbHNlLCBqID0gMCwgdyA9IDA7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgeCA9IGludEF0KHMsaSk7XG4gICAgICAgIGlmKHggPCAwKSB7XG4gICAgICAgICAgaWYocy5jaGFyQXQoaSkgPT0gXCItXCIgJiYgdGhpcy5zaWdudW0oKSA9PSAwKSBtaSA9IHRydWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdyA9IGIqdyt4O1xuICAgICAgICBpZigrK2ogPj0gY3MpIHtcbiAgICAgICAgICB0aGlzLmRNdWx0aXBseShkKTtcbiAgICAgICAgICB0aGlzLmRBZGRPZmZzZXQodywwKTtcbiAgICAgICAgICBqID0gMDtcbiAgICAgICAgICB3ID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoaiA+IDApIHtcbiAgICAgICAgdGhpcy5kTXVsdGlwbHkoTWF0aC5wb3coYixqKSk7XG4gICAgICAgIHRoaXMuZEFkZE9mZnNldCh3LDApO1xuICAgICAgfVxuICAgICAgaWYobWkpIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyh0aGlzLHRoaXMpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIGFsdGVybmF0ZSBjb25zdHJ1Y3RvclxuICAgIGZ1bmN0aW9uIGJucEZyb21OdW1iZXIoYSxiLGMpIHtcbiAgICAgIGlmKFwibnVtYmVyXCIgPT0gdHlwZW9mIGIpIHtcbiAgICAgICAgLy8gbmV3IEJpZ0ludGVnZXIoaW50LGludCxSTkcpXG4gICAgICAgIGlmKGEgPCAyKSB0aGlzLmZyb21JbnQoMSk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuZnJvbU51bWJlcihhLGMpO1xuICAgICAgICAgIGlmKCF0aGlzLnRlc3RCaXQoYS0xKSkgICAgLy8gZm9yY2UgTVNCIHNldFxuICAgICAgICAgICAgdGhpcy5iaXR3aXNlVG8oQmlnSW50ZWdlci5PTkUuc2hpZnRMZWZ0KGEtMSksb3Bfb3IsdGhpcyk7XG4gICAgICAgICAgaWYodGhpcy5pc0V2ZW4oKSkgdGhpcy5kQWRkT2Zmc2V0KDEsMCk7IC8vIGZvcmNlIG9kZFxuICAgICAgICAgIHdoaWxlKCF0aGlzLmlzUHJvYmFibGVQcmltZShiKSkge1xuICAgICAgICAgICAgdGhpcy5kQWRkT2Zmc2V0KDIsMCk7XG4gICAgICAgICAgICBpZih0aGlzLmJpdExlbmd0aCgpID4gYSkgdGhpcy5zdWJUbyhCaWdJbnRlZ2VyLk9ORS5zaGlmdExlZnQoYS0xKSx0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBuZXcgQmlnSW50ZWdlcihpbnQsUk5HKVxuICAgICAgICB2YXIgeCA9IG5ldyBBcnJheSgpLCB0ID0gYSY3O1xuICAgICAgICB4Lmxlbmd0aCA9IChhPj4zKSsxO1xuICAgICAgICBiLm5leHRCeXRlcyh4KTtcbiAgICAgICAgaWYodCA+IDApIHhbMF0gJj0gKCgxPDx0KS0xKTsgZWxzZSB4WzBdID0gMDtcbiAgICAgICAgdGhpcy5mcm9tU3RyaW5nKHgsMjU2KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAocHVibGljKSBjb252ZXJ0IHRvIGJpZ2VuZGlhbiBieXRlIGFycmF5XG4gICAgZnVuY3Rpb24gYm5Ub0J5dGVBcnJheSgpIHtcbiAgICAgIHZhciBpID0gdGhpcy50LCByID0gbmV3IEFycmF5KCk7XG4gICAgICByWzBdID0gdGhpcy5zO1xuICAgICAgdmFyIHAgPSB0aGlzLkRCLShpKnRoaXMuREIpJTgsIGQsIGsgPSAwO1xuICAgICAgaWYoaS0tID4gMCkge1xuICAgICAgICBpZihwIDwgdGhpcy5EQiAmJiAoZCA9IHRoaXNbaV0+PnApICE9ICh0aGlzLnMmdGhpcy5ETSk+PnApXG4gICAgICAgICAgcltrKytdID0gZHwodGhpcy5zPDwodGhpcy5EQi1wKSk7XG4gICAgICAgIHdoaWxlKGkgPj0gMCkge1xuICAgICAgICAgIGlmKHAgPCA4KSB7XG4gICAgICAgICAgICBkID0gKHRoaXNbaV0mKCgxPDxwKS0xKSk8PCg4LXApO1xuICAgICAgICAgICAgZCB8PSB0aGlzWy0taV0+PihwKz10aGlzLkRCLTgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGQgPSAodGhpc1tpXT4+KHAtPTgpKSYweGZmO1xuICAgICAgICAgICAgaWYocCA8PSAwKSB7IHAgKz0gdGhpcy5EQjsgLS1pOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKChkJjB4ODApICE9IDApIGQgfD0gLTI1NjtcbiAgICAgICAgICBpZihrID09IDAgJiYgKHRoaXMucyYweDgwKSAhPSAoZCYweDgwKSkgKytrO1xuICAgICAgICAgIGlmKGsgPiAwIHx8IGQgIT0gdGhpcy5zKSByW2srK10gPSBkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBibkVxdWFscyhhKSB7IHJldHVybih0aGlzLmNvbXBhcmVUbyhhKT09MCk7IH1cbiAgICBmdW5jdGlvbiBibk1pbihhKSB7IHJldHVybih0aGlzLmNvbXBhcmVUbyhhKTwwKT90aGlzOmE7IH1cbiAgICBmdW5jdGlvbiBibk1heChhKSB7IHJldHVybih0aGlzLmNvbXBhcmVUbyhhKT4wKT90aGlzOmE7IH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzIG9wIGEgKGJpdHdpc2UpXG4gICAgZnVuY3Rpb24gYm5wQml0d2lzZVRvKGEsb3Ascikge1xuICAgICAgdmFyIGksIGYsIG0gPSBNYXRoLm1pbihhLnQsdGhpcy50KTtcbiAgICAgIGZvcihpID0gMDsgaSA8IG07ICsraSkgcltpXSA9IG9wKHRoaXNbaV0sYVtpXSk7XG4gICAgICBpZihhLnQgPCB0aGlzLnQpIHtcbiAgICAgICAgZiA9IGEucyZ0aGlzLkRNO1xuICAgICAgICBmb3IoaSA9IG07IGkgPCB0aGlzLnQ7ICsraSkgcltpXSA9IG9wKHRoaXNbaV0sZik7XG4gICAgICAgIHIudCA9IHRoaXMudDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBmID0gdGhpcy5zJnRoaXMuRE07XG4gICAgICAgIGZvcihpID0gbTsgaSA8IGEudDsgKytpKSByW2ldID0gb3AoZixhW2ldKTtcbiAgICAgICAgci50ID0gYS50O1xuICAgICAgfVxuICAgICAgci5zID0gb3AodGhpcy5zLGEucyk7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAmIGFcbiAgICBmdW5jdGlvbiBvcF9hbmQoeCx5KSB7IHJldHVybiB4Jnk7IH1cbiAgICBmdW5jdGlvbiBibkFuZChhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuYml0d2lzZVRvKGEsb3BfYW5kLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyB8IGFcbiAgICBmdW5jdGlvbiBvcF9vcih4LHkpIHsgcmV0dXJuIHh8eTsgfVxuICAgIGZ1bmN0aW9uIGJuT3IoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmJpdHdpc2VUbyhhLG9wX29yLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyBeIGFcbiAgICBmdW5jdGlvbiBvcF94b3IoeCx5KSB7IHJldHVybiB4Xnk7IH1cbiAgICBmdW5jdGlvbiBiblhvcihhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuYml0d2lzZVRvKGEsb3BfeG9yLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAmIH5hXG4gICAgZnVuY3Rpb24gb3BfYW5kbm90KHgseSkgeyByZXR1cm4geCZ+eTsgfVxuICAgIGZ1bmN0aW9uIGJuQW5kTm90KGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5iaXR3aXNlVG8oYSxvcF9hbmRub3Qscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB+dGhpc1xuICAgIGZ1bmN0aW9uIGJuTm90KCkge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnQ7ICsraSkgcltpXSA9IHRoaXMuRE0mfnRoaXNbaV07XG4gICAgICByLnQgPSB0aGlzLnQ7XG4gICAgICByLnMgPSB+dGhpcy5zO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyA8PCBuXG4gICAgZnVuY3Rpb24gYm5TaGlmdExlZnQobikge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIGlmKG4gPCAwKSB0aGlzLnJTaGlmdFRvKC1uLHIpOyBlbHNlIHRoaXMubFNoaWZ0VG8obixyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgPj4gblxuICAgIGZ1bmN0aW9uIGJuU2hpZnRSaWdodChuKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgaWYobiA8IDApIHRoaXMubFNoaWZ0VG8oLW4scik7IGVsc2UgdGhpcy5yU2hpZnRUbyhuLHIpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGluZGV4IG9mIGxvd2VzdCAxLWJpdCBpbiB4LCB4IDwgMl4zMVxuICAgIGZ1bmN0aW9uIGxiaXQoeCkge1xuICAgICAgaWYoeCA9PSAwKSByZXR1cm4gLTE7XG4gICAgICB2YXIgciA9IDA7XG4gICAgICBpZigoeCYweGZmZmYpID09IDApIHsgeCA+Pj0gMTY7IHIgKz0gMTY7IH1cbiAgICAgIGlmKCh4JjB4ZmYpID09IDApIHsgeCA+Pj0gODsgciArPSA4OyB9XG4gICAgICBpZigoeCYweGYpID09IDApIHsgeCA+Pj0gNDsgciArPSA0OyB9XG4gICAgICBpZigoeCYzKSA9PSAwKSB7IHggPj49IDI7IHIgKz0gMjsgfVxuICAgICAgaWYoKHgmMSkgPT0gMCkgKytyO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJucyBpbmRleCBvZiBsb3dlc3QgMS1iaXQgKG9yIC0xIGlmIG5vbmUpXG4gICAgZnVuY3Rpb24gYm5HZXRMb3dlc3RTZXRCaXQoKSB7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy50OyArK2kpXG4gICAgICAgIGlmKHRoaXNbaV0gIT0gMCkgcmV0dXJuIGkqdGhpcy5EQitsYml0KHRoaXNbaV0pO1xuICAgICAgaWYodGhpcy5zIDwgMCkgcmV0dXJuIHRoaXMudCp0aGlzLkRCO1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBudW1iZXIgb2YgMSBiaXRzIGluIHhcbiAgICBmdW5jdGlvbiBjYml0KHgpIHtcbiAgICAgIHZhciByID0gMDtcbiAgICAgIHdoaWxlKHggIT0gMCkgeyB4ICY9IHgtMTsgKytyOyB9XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gbnVtYmVyIG9mIHNldCBiaXRzXG4gICAgZnVuY3Rpb24gYm5CaXRDb3VudCgpIHtcbiAgICAgIHZhciByID0gMCwgeCA9IHRoaXMucyZ0aGlzLkRNO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMudDsgKytpKSByICs9IGNiaXQodGhpc1tpXV54KTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRydWUgaWZmIG50aCBiaXQgaXMgc2V0XG4gICAgZnVuY3Rpb24gYm5UZXN0Qml0KG4pIHtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcihuL3RoaXMuREIpO1xuICAgICAgaWYoaiA+PSB0aGlzLnQpIHJldHVybih0aGlzLnMhPTApO1xuICAgICAgcmV0dXJuKCh0aGlzW2pdJigxPDwobiV0aGlzLkRCKSkpIT0wKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0aGlzIG9wICgxPDxuKVxuICAgIGZ1bmN0aW9uIGJucENoYW5nZUJpdChuLG9wKSB7XG4gICAgICB2YXIgciA9IEJpZ0ludGVnZXIuT05FLnNoaWZ0TGVmdChuKTtcbiAgICAgIHRoaXMuYml0d2lzZVRvKHIsb3Ascik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIHwgKDE8PG4pXG4gICAgZnVuY3Rpb24gYm5TZXRCaXQobikgeyByZXR1cm4gdGhpcy5jaGFuZ2VCaXQobixvcF9vcik7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgJiB+KDE8PG4pXG4gICAgZnVuY3Rpb24gYm5DbGVhckJpdChuKSB7IHJldHVybiB0aGlzLmNoYW5nZUJpdChuLG9wX2FuZG5vdCk7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgXiAoMTw8bilcbiAgICBmdW5jdGlvbiBibkZsaXBCaXQobikgeyByZXR1cm4gdGhpcy5jaGFuZ2VCaXQobixvcF94b3IpOyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyArIGFcbiAgICBmdW5jdGlvbiBibnBBZGRUbyhhLHIpIHtcbiAgICAgIHZhciBpID0gMCwgYyA9IDAsIG0gPSBNYXRoLm1pbihhLnQsdGhpcy50KTtcbiAgICAgIHdoaWxlKGkgPCBtKSB7XG4gICAgICAgIGMgKz0gdGhpc1tpXSthW2ldO1xuICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICB9XG4gICAgICBpZihhLnQgPCB0aGlzLnQpIHtcbiAgICAgICAgYyArPSBhLnM7XG4gICAgICAgIHdoaWxlKGkgPCB0aGlzLnQpIHtcbiAgICAgICAgICBjICs9IHRoaXNbaV07XG4gICAgICAgICAgcltpKytdID0gYyZ0aGlzLkRNO1xuICAgICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICAgIH1cbiAgICAgICAgYyArPSB0aGlzLnM7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYyArPSB0aGlzLnM7XG4gICAgICAgIHdoaWxlKGkgPCBhLnQpIHtcbiAgICAgICAgICBjICs9IGFbaV07XG4gICAgICAgICAgcltpKytdID0gYyZ0aGlzLkRNO1xuICAgICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICAgIH1cbiAgICAgICAgYyArPSBhLnM7XG4gICAgICB9XG4gICAgICByLnMgPSAoYzwwKT8tMTowO1xuICAgICAgaWYoYyA+IDApIHJbaSsrXSA9IGM7XG4gICAgICBlbHNlIGlmKGMgPCAtMSkgcltpKytdID0gdGhpcy5EVitjO1xuICAgICAgci50ID0gaTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICsgYVxuICAgIGZ1bmN0aW9uIGJuQWRkKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5hZGRUbyhhLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAtIGFcbiAgICBmdW5jdGlvbiBiblN1YnRyYWN0KGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5zdWJUbyhhLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAqIGFcbiAgICBmdW5jdGlvbiBibk11bHRpcGx5KGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5tdWx0aXBseVRvKGEscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzXjJcbiAgICBmdW5jdGlvbiBiblNxdWFyZSgpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5zcXVhcmVUbyhyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgLyBhXG4gICAgZnVuY3Rpb24gYm5EaXZpZGUoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmRpdlJlbVRvKGEscixudWxsKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgJSBhXG4gICAgZnVuY3Rpb24gYm5SZW1haW5kZXIoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmRpdlJlbVRvKGEsbnVsbCxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIFt0aGlzL2EsdGhpcyVhXVxuICAgIGZ1bmN0aW9uIGJuRGl2aWRlQW5kUmVtYWluZGVyKGEpIHtcbiAgICAgIHZhciBxID0gbmJpKCksIHIgPSBuYmkoKTtcbiAgICAgIHRoaXMuZGl2UmVtVG8oYSxxLHIpO1xuICAgICAgcmV0dXJuIG5ldyBBcnJheShxLHIpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXMgKj0gbiwgdGhpcyA+PSAwLCAxIDwgbiA8IERWXG4gICAgZnVuY3Rpb24gYm5wRE11bHRpcGx5KG4pIHtcbiAgICAgIHRoaXNbdGhpcy50XSA9IHRoaXMuYW0oMCxuLTEsdGhpcywwLDAsdGhpcy50KTtcbiAgICAgICsrdGhpcy50O1xuICAgICAgdGhpcy5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXMgKz0gbiA8PCB3IHdvcmRzLCB0aGlzID49IDBcbiAgICBmdW5jdGlvbiBibnBEQWRkT2Zmc2V0KG4sdykge1xuICAgICAgaWYobiA9PSAwKSByZXR1cm47XG4gICAgICB3aGlsZSh0aGlzLnQgPD0gdykgdGhpc1t0aGlzLnQrK10gPSAwO1xuICAgICAgdGhpc1t3XSArPSBuO1xuICAgICAgd2hpbGUodGhpc1t3XSA+PSB0aGlzLkRWKSB7XG4gICAgICAgIHRoaXNbd10gLT0gdGhpcy5EVjtcbiAgICAgICAgaWYoKyt3ID49IHRoaXMudCkgdGhpc1t0aGlzLnQrK10gPSAwO1xuICAgICAgICArK3RoaXNbd107XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQSBcIm51bGxcIiByZWR1Y2VyXG4gICAgZnVuY3Rpb24gTnVsbEV4cCgpIHt9XG4gICAgZnVuY3Rpb24gbk5vcCh4KSB7IHJldHVybiB4OyB9XG4gICAgZnVuY3Rpb24gbk11bFRvKHgseSxyKSB7IHgubXVsdGlwbHlUbyh5LHIpOyB9XG4gICAgZnVuY3Rpb24gblNxclRvKHgscikgeyB4LnNxdWFyZVRvKHIpOyB9XG5cbiAgICBOdWxsRXhwLnByb3RvdHlwZS5jb252ZXJ0ID0gbk5vcDtcbiAgICBOdWxsRXhwLnByb3RvdHlwZS5yZXZlcnQgPSBuTm9wO1xuICAgIE51bGxFeHAucHJvdG90eXBlLm11bFRvID0gbk11bFRvO1xuICAgIE51bGxFeHAucHJvdG90eXBlLnNxclRvID0gblNxclRvO1xuXG4gICAgLy8gKHB1YmxpYykgdGhpc15lXG4gICAgZnVuY3Rpb24gYm5Qb3coZSkgeyByZXR1cm4gdGhpcy5leHAoZSxuZXcgTnVsbEV4cCgpKTsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IGxvd2VyIG4gd29yZHMgb2YgXCJ0aGlzICogYVwiLCBhLnQgPD0gblxuICAgIC8vIFwidGhpc1wiIHNob3VsZCBiZSB0aGUgbGFyZ2VyIG9uZSBpZiBhcHByb3ByaWF0ZS5cbiAgICBmdW5jdGlvbiBibnBNdWx0aXBseUxvd2VyVG8oYSxuLHIpIHtcbiAgICAgIHZhciBpID0gTWF0aC5taW4odGhpcy50K2EudCxuKTtcbiAgICAgIHIucyA9IDA7IC8vIGFzc3VtZXMgYSx0aGlzID49IDBcbiAgICAgIHIudCA9IGk7XG4gICAgICB3aGlsZShpID4gMCkgclstLWldID0gMDtcbiAgICAgIHZhciBqO1xuICAgICAgZm9yKGogPSByLnQtdGhpcy50OyBpIDwgajsgKytpKSByW2krdGhpcy50XSA9IHRoaXMuYW0oMCxhW2ldLHIsaSwwLHRoaXMudCk7XG4gICAgICBmb3IoaiA9IE1hdGgubWluKGEudCxuKTsgaSA8IGo7ICsraSkgdGhpcy5hbSgwLGFbaV0scixpLDAsbi1pKTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gXCJ0aGlzICogYVwiIHdpdGhvdXQgbG93ZXIgbiB3b3JkcywgbiA+IDBcbiAgICAvLyBcInRoaXNcIiBzaG91bGQgYmUgdGhlIGxhcmdlciBvbmUgaWYgYXBwcm9wcmlhdGUuXG4gICAgZnVuY3Rpb24gYm5wTXVsdGlwbHlVcHBlclRvKGEsbixyKSB7XG4gICAgICAtLW47XG4gICAgICB2YXIgaSA9IHIudCA9IHRoaXMudCthLnQtbjtcbiAgICAgIHIucyA9IDA7IC8vIGFzc3VtZXMgYSx0aGlzID49IDBcbiAgICAgIHdoaWxlKC0taSA+PSAwKSByW2ldID0gMDtcbiAgICAgIGZvcihpID0gTWF0aC5tYXgobi10aGlzLnQsMCk7IGkgPCBhLnQ7ICsraSlcbiAgICAgICAgclt0aGlzLnQraS1uXSA9IHRoaXMuYW0obi1pLGFbaV0sciwwLDAsdGhpcy50K2ktbik7XG4gICAgICByLmNsYW1wKCk7XG4gICAgICByLmRyU2hpZnRUbygxLHIpO1xuICAgIH1cblxuICAgIC8vIEJhcnJldHQgbW9kdWxhciByZWR1Y3Rpb25cbiAgICBmdW5jdGlvbiBCYXJyZXR0KG0pIHtcbiAgICAgIC8vIHNldHVwIEJhcnJldHRcbiAgICAgIHRoaXMucjIgPSBuYmkoKTtcbiAgICAgIHRoaXMucTMgPSBuYmkoKTtcbiAgICAgIEJpZ0ludGVnZXIuT05FLmRsU2hpZnRUbygyKm0udCx0aGlzLnIyKTtcbiAgICAgIHRoaXMubXUgPSB0aGlzLnIyLmRpdmlkZShtKTtcbiAgICAgIHRoaXMubSA9IG07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmFycmV0dENvbnZlcnQoeCkge1xuICAgICAgaWYoeC5zIDwgMCB8fCB4LnQgPiAyKnRoaXMubS50KSByZXR1cm4geC5tb2QodGhpcy5tKTtcbiAgICAgIGVsc2UgaWYoeC5jb21wYXJlVG8odGhpcy5tKSA8IDApIHJldHVybiB4O1xuICAgICAgZWxzZSB7IHZhciByID0gbmJpKCk7IHguY29weVRvKHIpOyB0aGlzLnJlZHVjZShyKTsgcmV0dXJuIHI7IH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiYXJyZXR0UmV2ZXJ0KHgpIHsgcmV0dXJuIHg7IH1cblxuICAgIC8vIHggPSB4IG1vZCBtIChIQUMgMTQuNDIpXG4gICAgZnVuY3Rpb24gYmFycmV0dFJlZHVjZSh4KSB7XG4gICAgICB4LmRyU2hpZnRUbyh0aGlzLm0udC0xLHRoaXMucjIpO1xuICAgICAgaWYoeC50ID4gdGhpcy5tLnQrMSkgeyB4LnQgPSB0aGlzLm0udCsxOyB4LmNsYW1wKCk7IH1cbiAgICAgIHRoaXMubXUubXVsdGlwbHlVcHBlclRvKHRoaXMucjIsdGhpcy5tLnQrMSx0aGlzLnEzKTtcbiAgICAgIHRoaXMubS5tdWx0aXBseUxvd2VyVG8odGhpcy5xMyx0aGlzLm0udCsxLHRoaXMucjIpO1xuICAgICAgd2hpbGUoeC5jb21wYXJlVG8odGhpcy5yMikgPCAwKSB4LmRBZGRPZmZzZXQoMSx0aGlzLm0udCsxKTtcbiAgICAgIHguc3ViVG8odGhpcy5yMix4KTtcbiAgICAgIHdoaWxlKHguY29tcGFyZVRvKHRoaXMubSkgPj0gMCkgeC5zdWJUbyh0aGlzLm0seCk7XG4gICAgfVxuXG4gICAgLy8gciA9IHheMiBtb2QgbTsgeCAhPSByXG4gICAgZnVuY3Rpb24gYmFycmV0dFNxclRvKHgscikgeyB4LnNxdWFyZVRvKHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuXG4gICAgLy8gciA9IHgqeSBtb2QgbTsgeCx5ICE9IHJcbiAgICBmdW5jdGlvbiBiYXJyZXR0TXVsVG8oeCx5LHIpIHsgeC5tdWx0aXBseVRvKHkscik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICBCYXJyZXR0LnByb3RvdHlwZS5jb252ZXJ0ID0gYmFycmV0dENvbnZlcnQ7XG4gICAgQmFycmV0dC5wcm90b3R5cGUucmV2ZXJ0ID0gYmFycmV0dFJldmVydDtcbiAgICBCYXJyZXR0LnByb3RvdHlwZS5yZWR1Y2UgPSBiYXJyZXR0UmVkdWNlO1xuICAgIEJhcnJldHQucHJvdG90eXBlLm11bFRvID0gYmFycmV0dE11bFRvO1xuICAgIEJhcnJldHQucHJvdG90eXBlLnNxclRvID0gYmFycmV0dFNxclRvO1xuXG4gICAgLy8gKHB1YmxpYykgdGhpc15lICUgbSAoSEFDIDE0Ljg1KVxuICAgIGZ1bmN0aW9uIGJuTW9kUG93KGUsbSkge1xuICAgICAgdmFyIGkgPSBlLmJpdExlbmd0aCgpLCBrLCByID0gbmJ2KDEpLCB6O1xuICAgICAgaWYoaSA8PSAwKSByZXR1cm4gcjtcbiAgICAgIGVsc2UgaWYoaSA8IDE4KSBrID0gMTtcbiAgICAgIGVsc2UgaWYoaSA8IDQ4KSBrID0gMztcbiAgICAgIGVsc2UgaWYoaSA8IDE0NCkgayA9IDQ7XG4gICAgICBlbHNlIGlmKGkgPCA3NjgpIGsgPSA1O1xuICAgICAgZWxzZSBrID0gNjtcbiAgICAgIGlmKGkgPCA4KVxuICAgICAgICB6ID0gbmV3IENsYXNzaWMobSk7XG4gICAgICBlbHNlIGlmKG0uaXNFdmVuKCkpXG4gICAgICAgIHogPSBuZXcgQmFycmV0dChtKTtcbiAgICAgIGVsc2VcbiAgICAgICAgeiA9IG5ldyBNb250Z29tZXJ5KG0pO1xuXG4gICAgICAvLyBwcmVjb21wdXRhdGlvblxuICAgICAgdmFyIGcgPSBuZXcgQXJyYXkoKSwgbiA9IDMsIGsxID0gay0xLCBrbSA9ICgxPDxrKS0xO1xuICAgICAgZ1sxXSA9IHouY29udmVydCh0aGlzKTtcbiAgICAgIGlmKGsgPiAxKSB7XG4gICAgICAgIHZhciBnMiA9IG5iaSgpO1xuICAgICAgICB6LnNxclRvKGdbMV0sZzIpO1xuICAgICAgICB3aGlsZShuIDw9IGttKSB7XG4gICAgICAgICAgZ1tuXSA9IG5iaSgpO1xuICAgICAgICAgIHoubXVsVG8oZzIsZ1tuLTJdLGdbbl0pO1xuICAgICAgICAgIG4gKz0gMjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaiA9IGUudC0xLCB3LCBpczEgPSB0cnVlLCByMiA9IG5iaSgpLCB0O1xuICAgICAgaSA9IG5iaXRzKGVbal0pLTE7XG4gICAgICB3aGlsZShqID49IDApIHtcbiAgICAgICAgaWYoaSA+PSBrMSkgdyA9IChlW2pdPj4oaS1rMSkpJmttO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB3ID0gKGVbal0mKCgxPDwoaSsxKSktMSkpPDwoazEtaSk7XG4gICAgICAgICAgaWYoaiA+IDApIHcgfD0gZVtqLTFdPj4odGhpcy5EQitpLWsxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG4gPSBrO1xuICAgICAgICB3aGlsZSgodyYxKSA9PSAwKSB7IHcgPj49IDE7IC0tbjsgfVxuICAgICAgICBpZigoaSAtPSBuKSA8IDApIHsgaSArPSB0aGlzLkRCOyAtLWo7IH1cbiAgICAgICAgaWYoaXMxKSB7ICAgIC8vIHJldCA9PSAxLCBkb24ndCBib3RoZXIgc3F1YXJpbmcgb3IgbXVsdGlwbHlpbmcgaXRcbiAgICAgICAgICBnW3ddLmNvcHlUbyhyKTtcbiAgICAgICAgICBpczEgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB3aGlsZShuID4gMSkgeyB6LnNxclRvKHIscjIpOyB6LnNxclRvKHIyLHIpOyBuIC09IDI7IH1cbiAgICAgICAgICBpZihuID4gMCkgei5zcXJUbyhyLHIyKTsgZWxzZSB7IHQgPSByOyByID0gcjI7IHIyID0gdDsgfVxuICAgICAgICAgIHoubXVsVG8ocjIsZ1t3XSxyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlKGogPj0gMCAmJiAoZVtqXSYoMTw8aSkpID09IDApIHtcbiAgICAgICAgICB6LnNxclRvKHIscjIpOyB0ID0gcjsgciA9IHIyOyByMiA9IHQ7XG4gICAgICAgICAgaWYoLS1pIDwgMCkgeyBpID0gdGhpcy5EQi0xOyAtLWo7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHoucmV2ZXJ0KHIpO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIGdjZCh0aGlzLGEpIChIQUMgMTQuNTQpXG4gICAgZnVuY3Rpb24gYm5HQ0QoYSkge1xuICAgICAgdmFyIHggPSAodGhpcy5zPDApP3RoaXMubmVnYXRlKCk6dGhpcy5jbG9uZSgpO1xuICAgICAgdmFyIHkgPSAoYS5zPDApP2EubmVnYXRlKCk6YS5jbG9uZSgpO1xuICAgICAgaWYoeC5jb21wYXJlVG8oeSkgPCAwKSB7IHZhciB0ID0geDsgeCA9IHk7IHkgPSB0OyB9XG4gICAgICB2YXIgaSA9IHguZ2V0TG93ZXN0U2V0Qml0KCksIGcgPSB5LmdldExvd2VzdFNldEJpdCgpO1xuICAgICAgaWYoZyA8IDApIHJldHVybiB4O1xuICAgICAgaWYoaSA8IGcpIGcgPSBpO1xuICAgICAgaWYoZyA+IDApIHtcbiAgICAgICAgeC5yU2hpZnRUbyhnLHgpO1xuICAgICAgICB5LnJTaGlmdFRvKGcseSk7XG4gICAgICB9XG4gICAgICB3aGlsZSh4LnNpZ251bSgpID4gMCkge1xuICAgICAgICBpZigoaSA9IHguZ2V0TG93ZXN0U2V0Qml0KCkpID4gMCkgeC5yU2hpZnRUbyhpLHgpO1xuICAgICAgICBpZigoaSA9IHkuZ2V0TG93ZXN0U2V0Qml0KCkpID4gMCkgeS5yU2hpZnRUbyhpLHkpO1xuICAgICAgICBpZih4LmNvbXBhcmVUbyh5KSA+PSAwKSB7XG4gICAgICAgICAgeC5zdWJUbyh5LHgpO1xuICAgICAgICAgIHguclNoaWZ0VG8oMSx4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB5LnN1YlRvKHgseSk7XG4gICAgICAgICAgeS5yU2hpZnRUbygxLHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihnID4gMCkgeS5sU2hpZnRUbyhnLHkpO1xuICAgICAgcmV0dXJuIHk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpcyAlIG4sIG4gPCAyXjI2XG4gICAgZnVuY3Rpb24gYm5wTW9kSW50KG4pIHtcbiAgICAgIGlmKG4gPD0gMCkgcmV0dXJuIDA7XG4gICAgICB2YXIgZCA9IHRoaXMuRFYlbiwgciA9ICh0aGlzLnM8MCk/bi0xOjA7XG4gICAgICBpZih0aGlzLnQgPiAwKVxuICAgICAgICBpZihkID09IDApIHIgPSB0aGlzWzBdJW47XG4gICAgICAgIGVsc2UgZm9yKHZhciBpID0gdGhpcy50LTE7IGkgPj0gMDsgLS1pKSByID0gKGQqcit0aGlzW2ldKSVuO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgMS90aGlzICUgbSAoSEFDIDE0LjYxKVxuICAgIGZ1bmN0aW9uIGJuTW9kSW52ZXJzZShtKSB7XG4gICAgICB2YXIgYWMgPSBtLmlzRXZlbigpO1xuICAgICAgaWYoKHRoaXMuaXNFdmVuKCkgJiYgYWMpIHx8IG0uc2lnbnVtKCkgPT0gMCkgcmV0dXJuIEJpZ0ludGVnZXIuWkVSTztcbiAgICAgIHZhciB1ID0gbS5jbG9uZSgpLCB2ID0gdGhpcy5jbG9uZSgpO1xuICAgICAgdmFyIGEgPSBuYnYoMSksIGIgPSBuYnYoMCksIGMgPSBuYnYoMCksIGQgPSBuYnYoMSk7XG4gICAgICB3aGlsZSh1LnNpZ251bSgpICE9IDApIHtcbiAgICAgICAgd2hpbGUodS5pc0V2ZW4oKSkge1xuICAgICAgICAgIHUuclNoaWZ0VG8oMSx1KTtcbiAgICAgICAgICBpZihhYykge1xuICAgICAgICAgICAgaWYoIWEuaXNFdmVuKCkgfHwgIWIuaXNFdmVuKCkpIHsgYS5hZGRUbyh0aGlzLGEpOyBiLnN1YlRvKG0sYik7IH1cbiAgICAgICAgICAgIGEuclNoaWZ0VG8oMSxhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZighYi5pc0V2ZW4oKSkgYi5zdWJUbyhtLGIpO1xuICAgICAgICAgIGIuclNoaWZ0VG8oMSxiKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSh2LmlzRXZlbigpKSB7XG4gICAgICAgICAgdi5yU2hpZnRUbygxLHYpO1xuICAgICAgICAgIGlmKGFjKSB7XG4gICAgICAgICAgICBpZighYy5pc0V2ZW4oKSB8fCAhZC5pc0V2ZW4oKSkgeyBjLmFkZFRvKHRoaXMsYyk7IGQuc3ViVG8obSxkKTsgfVxuICAgICAgICAgICAgYy5yU2hpZnRUbygxLGMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKCFkLmlzRXZlbigpKSBkLnN1YlRvKG0sZCk7XG4gICAgICAgICAgZC5yU2hpZnRUbygxLGQpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHUuY29tcGFyZVRvKHYpID49IDApIHtcbiAgICAgICAgICB1LnN1YlRvKHYsdSk7XG4gICAgICAgICAgaWYoYWMpIGEuc3ViVG8oYyxhKTtcbiAgICAgICAgICBiLnN1YlRvKGQsYik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdi5zdWJUbyh1LHYpO1xuICAgICAgICAgIGlmKGFjKSBjLnN1YlRvKGEsYyk7XG4gICAgICAgICAgZC5zdWJUbyhiLGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZih2LmNvbXBhcmVUbyhCaWdJbnRlZ2VyLk9ORSkgIT0gMCkgcmV0dXJuIEJpZ0ludGVnZXIuWkVSTztcbiAgICAgIGlmKGQuY29tcGFyZVRvKG0pID49IDApIHJldHVybiBkLnN1YnRyYWN0KG0pO1xuICAgICAgaWYoZC5zaWdudW0oKSA8IDApIGQuYWRkVG8obSxkKTsgZWxzZSByZXR1cm4gZDtcbiAgICAgIGlmKGQuc2lnbnVtKCkgPCAwKSByZXR1cm4gZC5hZGQobSk7IGVsc2UgcmV0dXJuIGQ7XG4gICAgfVxuXG4gICAgdmFyIGxvd3ByaW1lcyA9IFsyLDMsNSw3LDExLDEzLDE3LDE5LDIzLDI5LDMxLDM3LDQxLDQzLDQ3LDUzLDU5LDYxLDY3LDcxLDczLDc5LDgzLDg5LDk3LDEwMSwxMDMsMTA3LDEwOSwxMTMsMTI3LDEzMSwxMzcsMTM5LDE0OSwxNTEsMTU3LDE2MywxNjcsMTczLDE3OSwxODEsMTkxLDE5MywxOTcsMTk5LDIxMSwyMjMsMjI3LDIyOSwyMzMsMjM5LDI0MSwyNTEsMjU3LDI2MywyNjksMjcxLDI3NywyODEsMjgzLDI5MywzMDcsMzExLDMxMywzMTcsMzMxLDMzNywzNDcsMzQ5LDM1MywzNTksMzY3LDM3MywzNzksMzgzLDM4OSwzOTcsNDAxLDQwOSw0MTksNDIxLDQzMSw0MzMsNDM5LDQ0Myw0NDksNDU3LDQ2MSw0NjMsNDY3LDQ3OSw0ODcsNDkxLDQ5OSw1MDMsNTA5LDUyMSw1MjMsNTQxLDU0Nyw1NTcsNTYzLDU2OSw1NzEsNTc3LDU4Nyw1OTMsNTk5LDYwMSw2MDcsNjEzLDYxNyw2MTksNjMxLDY0MSw2NDMsNjQ3LDY1Myw2NTksNjYxLDY3Myw2NzcsNjgzLDY5MSw3MDEsNzA5LDcxOSw3MjcsNzMzLDczOSw3NDMsNzUxLDc1Nyw3NjEsNzY5LDc3Myw3ODcsNzk3LDgwOSw4MTEsODIxLDgyMyw4MjcsODI5LDgzOSw4NTMsODU3LDg1OSw4NjMsODc3LDg4MSw4ODMsODg3LDkwNyw5MTEsOTE5LDkyOSw5MzcsOTQxLDk0Nyw5NTMsOTY3LDk3MSw5NzcsOTgzLDk5MSw5OTddO1xuICAgIHZhciBscGxpbSA9ICgxPDwyNikvbG93cHJpbWVzW2xvd3ByaW1lcy5sZW5ndGgtMV07XG5cbiAgICAvLyAocHVibGljKSB0ZXN0IHByaW1hbGl0eSB3aXRoIGNlcnRhaW50eSA+PSAxLS41XnRcbiAgICBmdW5jdGlvbiBibklzUHJvYmFibGVQcmltZSh0KSB7XG4gICAgICB2YXIgaSwgeCA9IHRoaXMuYWJzKCk7XG4gICAgICBpZih4LnQgPT0gMSAmJiB4WzBdIDw9IGxvd3ByaW1lc1tsb3dwcmltZXMubGVuZ3RoLTFdKSB7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IGxvd3ByaW1lcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICBpZih4WzBdID09IGxvd3ByaW1lc1tpXSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmKHguaXNFdmVuKCkpIHJldHVybiBmYWxzZTtcbiAgICAgIGkgPSAxO1xuICAgICAgd2hpbGUoaSA8IGxvd3ByaW1lcy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIG0gPSBsb3dwcmltZXNbaV0sIGogPSBpKzE7XG4gICAgICAgIHdoaWxlKGogPCBsb3dwcmltZXMubGVuZ3RoICYmIG0gPCBscGxpbSkgbSAqPSBsb3dwcmltZXNbaisrXTtcbiAgICAgICAgbSA9IHgubW9kSW50KG0pO1xuICAgICAgICB3aGlsZShpIDwgaikgaWYobSVsb3dwcmltZXNbaSsrXSA9PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4geC5taWxsZXJSYWJpbih0KTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0cnVlIGlmIHByb2JhYmx5IHByaW1lIChIQUMgNC4yNCwgTWlsbGVyLVJhYmluKVxuICAgIGZ1bmN0aW9uIGJucE1pbGxlclJhYmluKHQpIHtcbiAgICAgIHZhciBuMSA9IHRoaXMuc3VidHJhY3QoQmlnSW50ZWdlci5PTkUpO1xuICAgICAgdmFyIGsgPSBuMS5nZXRMb3dlc3RTZXRCaXQoKTtcbiAgICAgIGlmKGsgPD0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgdmFyIHIgPSBuMS5zaGlmdFJpZ2h0KGspO1xuICAgICAgdCA9ICh0KzEpPj4xO1xuICAgICAgaWYodCA+IGxvd3ByaW1lcy5sZW5ndGgpIHQgPSBsb3dwcmltZXMubGVuZ3RoO1xuICAgICAgdmFyIGEgPSBuYmkoKTtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0OyArK2kpIHtcbiAgICAgICAgLy9QaWNrIGJhc2VzIGF0IHJhbmRvbSwgaW5zdGVhZCBvZiBzdGFydGluZyBhdCAyXG4gICAgICAgIGEuZnJvbUludChsb3dwcmltZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmxvd3ByaW1lcy5sZW5ndGgpXSk7XG4gICAgICAgIHZhciB5ID0gYS5tb2RQb3cocix0aGlzKTtcbiAgICAgICAgaWYoeS5jb21wYXJlVG8oQmlnSW50ZWdlci5PTkUpICE9IDAgJiYgeS5jb21wYXJlVG8objEpICE9IDApIHtcbiAgICAgICAgICB2YXIgaiA9IDE7XG4gICAgICAgICAgd2hpbGUoaisrIDwgayAmJiB5LmNvbXBhcmVUbyhuMSkgIT0gMCkge1xuICAgICAgICAgICAgeSA9IHkubW9kUG93SW50KDIsdGhpcyk7XG4gICAgICAgICAgICBpZih5LmNvbXBhcmVUbyhCaWdJbnRlZ2VyLk9ORSkgPT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZih5LmNvbXBhcmVUbyhuMSkgIT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBwcm90ZWN0ZWRcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jaHVua1NpemUgPSBibnBDaHVua1NpemU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudG9SYWRpeCA9IGJucFRvUmFkaXg7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbVJhZGl4ID0gYm5wRnJvbVJhZGl4O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmZyb21OdW1iZXIgPSBibnBGcm9tTnVtYmVyO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdHdpc2VUbyA9IGJucEJpdHdpc2VUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jaGFuZ2VCaXQgPSBibnBDaGFuZ2VCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYWRkVG8gPSBibnBBZGRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kTXVsdGlwbHkgPSBibnBETXVsdGlwbHk7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZEFkZE9mZnNldCA9IGJucERBZGRPZmZzZXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlMb3dlclRvID0gYm5wTXVsdGlwbHlMb3dlclRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5VXBwZXJUbyA9IGJucE11bHRpcGx5VXBwZXJUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RJbnQgPSBibnBNb2RJbnQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubWlsbGVyUmFiaW4gPSBibnBNaWxsZXJSYWJpbjtcblxuICAgIC8vIHB1YmxpY1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNsb25lID0gYm5DbG9uZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pbnRWYWx1ZSA9IGJuSW50VmFsdWU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYnl0ZVZhbHVlID0gYm5CeXRlVmFsdWU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2hvcnRWYWx1ZSA9IGJuU2hvcnRWYWx1ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaWdudW0gPSBiblNpZ051bTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b0J5dGVBcnJheSA9IGJuVG9CeXRlQXJyYXk7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZXF1YWxzID0gYm5FcXVhbHM7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubWluID0gYm5NaW47XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubWF4ID0gYm5NYXg7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW5kID0gYm5BbmQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUub3IgPSBibk9yO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnhvciA9IGJuWG9yO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFuZE5vdCA9IGJuQW5kTm90O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm5vdCA9IGJuTm90O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0TGVmdCA9IGJuU2hpZnRMZWZ0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0UmlnaHQgPSBiblNoaWZ0UmlnaHQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZ2V0TG93ZXN0U2V0Qml0ID0gYm5HZXRMb3dlc3RTZXRCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYml0Q291bnQgPSBibkJpdENvdW50O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRlc3RCaXQgPSBiblRlc3RCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2V0Qml0ID0gYm5TZXRCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY2xlYXJCaXQgPSBibkNsZWFyQml0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmZsaXBCaXQgPSBibkZsaXBCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYWRkID0gYm5BZGQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3VidHJhY3QgPSBiblN1YnRyYWN0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5ID0gYm5NdWx0aXBseTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZpZGUgPSBibkRpdmlkZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5yZW1haW5kZXIgPSBiblJlbWFpbmRlcjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZpZGVBbmRSZW1haW5kZXIgPSBibkRpdmlkZUFuZFJlbWFpbmRlcjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3cgPSBibk1vZFBvdztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RJbnZlcnNlID0gYm5Nb2RJbnZlcnNlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnBvdyA9IGJuUG93O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmdjZCA9IGJuR0NEO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzUHJvYmFibGVQcmltZSA9IGJuSXNQcm9iYWJsZVByaW1lO1xuXG4gICAgLy8gSlNCTi1zcGVjaWZpYyBleHRlbnNpb25cbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zcXVhcmUgPSBiblNxdWFyZTtcblxuICAgIC8vIEV4cG9zZSB0aGUgQmFycmV0dCBmdW5jdGlvblxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkJhcnJldHQgPSBCYXJyZXR0XG5cbiAgICAvLyBCaWdJbnRlZ2VyIGludGVyZmFjZXMgbm90IGltcGxlbWVudGVkIGluIGpzYm46XG5cbiAgICAvLyBCaWdJbnRlZ2VyKGludCBzaWdudW0sIGJ5dGVbXSBtYWduaXR1ZGUpXG4gICAgLy8gZG91YmxlIGRvdWJsZVZhbHVlKClcbiAgICAvLyBmbG9hdCBmbG9hdFZhbHVlKClcbiAgICAvLyBpbnQgaGFzaENvZGUoKVxuICAgIC8vIGxvbmcgbG9uZ1ZhbHVlKClcbiAgICAvLyBzdGF0aWMgQmlnSW50ZWdlciB2YWx1ZU9mKGxvbmcgdmFsKVxuXG4gICAgLy8gUmFuZG9tIG51bWJlciBnZW5lcmF0b3IgLSByZXF1aXJlcyBhIFBSTkcgYmFja2VuZCwgZS5nLiBwcm5nNC5qc1xuXG4gICAgLy8gRm9yIGJlc3QgcmVzdWx0cywgcHV0IGNvZGUgbGlrZVxuICAgIC8vIDxib2R5IG9uQ2xpY2s9J3JuZ19zZWVkX3RpbWUoKTsnIG9uS2V5UHJlc3M9J3JuZ19zZWVkX3RpbWUoKTsnPlxuICAgIC8vIGluIHlvdXIgbWFpbiBIVE1MIGRvY3VtZW50LlxuXG4gICAgdmFyIHJuZ19zdGF0ZTtcbiAgICB2YXIgcm5nX3Bvb2w7XG4gICAgdmFyIHJuZ19wcHRyO1xuXG4gICAgLy8gTWl4IGluIGEgMzItYml0IGludGVnZXIgaW50byB0aGUgcG9vbFxuICAgIGZ1bmN0aW9uIHJuZ19zZWVkX2ludCh4KSB7XG4gICAgICBybmdfcG9vbFtybmdfcHB0cisrXSBePSB4ICYgMjU1O1xuICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gXj0gKHggPj4gOCkgJiAyNTU7XG4gICAgICBybmdfcG9vbFtybmdfcHB0cisrXSBePSAoeCA+PiAxNikgJiAyNTU7XG4gICAgICBybmdfcG9vbFtybmdfcHB0cisrXSBePSAoeCA+PiAyNCkgJiAyNTU7XG4gICAgICBpZihybmdfcHB0ciA+PSBybmdfcHNpemUpIHJuZ19wcHRyIC09IHJuZ19wc2l6ZTtcbiAgICB9XG5cbiAgICAvLyBNaXggaW4gdGhlIGN1cnJlbnQgdGltZSAody9taWxsaXNlY29uZHMpIGludG8gdGhlIHBvb2xcbiAgICBmdW5jdGlvbiBybmdfc2VlZF90aW1lKCkge1xuICAgICAgcm5nX3NlZWRfaW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBwb29sIHdpdGgganVuayBpZiBuZWVkZWQuXG4gICAgaWYocm5nX3Bvb2wgPT0gbnVsbCkge1xuICAgICAgcm5nX3Bvb2wgPSBuZXcgQXJyYXkoKTtcbiAgICAgIHJuZ19wcHRyID0gMDtcbiAgICAgIHZhciB0O1xuICAgICAgaWYodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuY3J5cHRvKSB7XG4gICAgICAgIGlmICh3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICAgIC8vIFVzZSB3ZWJjcnlwdG8gaWYgYXZhaWxhYmxlXG4gICAgICAgICAgdmFyIHVhID0gbmV3IFVpbnQ4QXJyYXkoMzIpO1xuICAgICAgICAgIHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHVhKTtcbiAgICAgICAgICBmb3IodCA9IDA7IHQgPCAzMjsgKyt0KVxuICAgICAgICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gPSB1YVt0XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKG5hdmlnYXRvci5hcHBOYW1lID09IFwiTmV0c2NhcGVcIiAmJiBuYXZpZ2F0b3IuYXBwVmVyc2lvbiA8IFwiNVwiKSB7XG4gICAgICAgICAgLy8gRXh0cmFjdCBlbnRyb3B5ICgyNTYgYml0cykgZnJvbSBOUzQgUk5HIGlmIGF2YWlsYWJsZVxuICAgICAgICAgIHZhciB6ID0gd2luZG93LmNyeXB0by5yYW5kb20oMzIpO1xuICAgICAgICAgIGZvcih0ID0gMDsgdCA8IHoubGVuZ3RoOyArK3QpXG4gICAgICAgICAgICBybmdfcG9vbFtybmdfcHB0cisrXSA9IHouY2hhckNvZGVBdCh0KSAmIDI1NTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2hpbGUocm5nX3BwdHIgPCBybmdfcHNpemUpIHsgIC8vIGV4dHJhY3Qgc29tZSByYW5kb21uZXNzIGZyb20gTWF0aC5yYW5kb20oKVxuICAgICAgICB0ID0gTWF0aC5mbG9vcig2NTUzNiAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICBybmdfcG9vbFtybmdfcHB0cisrXSA9IHQgPj4+IDg7XG4gICAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdID0gdCAmIDI1NTtcbiAgICAgIH1cbiAgICAgIHJuZ19wcHRyID0gMDtcbiAgICAgIHJuZ19zZWVkX3RpbWUoKTtcbiAgICAgIC8vcm5nX3NlZWRfaW50KHdpbmRvdy5zY3JlZW5YKTtcbiAgICAgIC8vcm5nX3NlZWRfaW50KHdpbmRvdy5zY3JlZW5ZKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBybmdfZ2V0X2J5dGUoKSB7XG4gICAgICBpZihybmdfc3RhdGUgPT0gbnVsbCkge1xuICAgICAgICBybmdfc2VlZF90aW1lKCk7XG4gICAgICAgIHJuZ19zdGF0ZSA9IHBybmdfbmV3c3RhdGUoKTtcbiAgICAgICAgcm5nX3N0YXRlLmluaXQocm5nX3Bvb2wpO1xuICAgICAgICBmb3Iocm5nX3BwdHIgPSAwOyBybmdfcHB0ciA8IHJuZ19wb29sLmxlbmd0aDsgKytybmdfcHB0cilcbiAgICAgICAgICBybmdfcG9vbFtybmdfcHB0cl0gPSAwO1xuICAgICAgICBybmdfcHB0ciA9IDA7XG4gICAgICAgIC8vcm5nX3Bvb2wgPSBudWxsO1xuICAgICAgfVxuICAgICAgLy8gVE9ETzogYWxsb3cgcmVzZWVkaW5nIGFmdGVyIGZpcnN0IHJlcXVlc3RcbiAgICAgIHJldHVybiBybmdfc3RhdGUubmV4dCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJuZ19nZXRfYnl0ZXMoYmEpIHtcbiAgICAgIHZhciBpO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgYmEubGVuZ3RoOyArK2kpIGJhW2ldID0gcm5nX2dldF9ieXRlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gU2VjdXJlUmFuZG9tKCkge31cblxuICAgIFNlY3VyZVJhbmRvbS5wcm90b3R5cGUubmV4dEJ5dGVzID0gcm5nX2dldF9ieXRlcztcblxuICAgIC8vIHBybmc0LmpzIC0gdXNlcyBBcmNmb3VyIGFzIGEgUFJOR1xuXG4gICAgZnVuY3Rpb24gQXJjZm91cigpIHtcbiAgICAgIHRoaXMuaSA9IDA7XG4gICAgICB0aGlzLmogPSAwO1xuICAgICAgdGhpcy5TID0gbmV3IEFycmF5KCk7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBhcmNmb3VyIGNvbnRleHQgZnJvbSBrZXksIGFuIGFycmF5IG9mIGludHMsIGVhY2ggZnJvbSBbMC4uMjU1XVxuICAgIGZ1bmN0aW9uIEFSQzRpbml0KGtleSkge1xuICAgICAgdmFyIGksIGosIHQ7XG4gICAgICBmb3IoaSA9IDA7IGkgPCAyNTY7ICsraSlcbiAgICAgICAgdGhpcy5TW2ldID0gaTtcbiAgICAgIGogPSAwO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICAgICAgaiA9IChqICsgdGhpcy5TW2ldICsga2V5W2kgJSBrZXkubGVuZ3RoXSkgJiAyNTU7XG4gICAgICAgIHQgPSB0aGlzLlNbaV07XG4gICAgICAgIHRoaXMuU1tpXSA9IHRoaXMuU1tqXTtcbiAgICAgICAgdGhpcy5TW2pdID0gdDtcbiAgICAgIH1cbiAgICAgIHRoaXMuaSA9IDA7XG4gICAgICB0aGlzLmogPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIEFSQzRuZXh0KCkge1xuICAgICAgdmFyIHQ7XG4gICAgICB0aGlzLmkgPSAodGhpcy5pICsgMSkgJiAyNTU7XG4gICAgICB0aGlzLmogPSAodGhpcy5qICsgdGhpcy5TW3RoaXMuaV0pICYgMjU1O1xuICAgICAgdCA9IHRoaXMuU1t0aGlzLmldO1xuICAgICAgdGhpcy5TW3RoaXMuaV0gPSB0aGlzLlNbdGhpcy5qXTtcbiAgICAgIHRoaXMuU1t0aGlzLmpdID0gdDtcbiAgICAgIHJldHVybiB0aGlzLlNbKHQgKyB0aGlzLlNbdGhpcy5pXSkgJiAyNTVdO1xuICAgIH1cblxuICAgIEFyY2ZvdXIucHJvdG90eXBlLmluaXQgPSBBUkM0aW5pdDtcbiAgICBBcmNmb3VyLnByb3RvdHlwZS5uZXh0ID0gQVJDNG5leHQ7XG5cbiAgICAvLyBQbHVnIGluIHlvdXIgUk5HIGNvbnN0cnVjdG9yIGhlcmVcbiAgICBmdW5jdGlvbiBwcm5nX25ld3N0YXRlKCkge1xuICAgICAgcmV0dXJuIG5ldyBBcmNmb3VyKCk7XG4gICAgfVxuXG4gICAgLy8gUG9vbCBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0IGFuZCBncmVhdGVyIHRoYW4gMzIuXG4gICAgLy8gQW4gYXJyYXkgb2YgYnl0ZXMgdGhlIHNpemUgb2YgdGhlIHBvb2wgd2lsbCBiZSBwYXNzZWQgdG8gaW5pdCgpXG4gICAgdmFyIHJuZ19wc2l6ZSA9IDI1NjtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICAgICAgZGVmYXVsdDogQmlnSW50ZWdlcixcbiAgICAgICAgICAgIEJpZ0ludGVnZXI6IEJpZ0ludGVnZXIsXG4gICAgICAgICAgICBTZWN1cmVSYW5kb206IFNlY3VyZVJhbmRvbSxcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmpzYm4gPSB7XG4gICAgICAgICAgQmlnSW50ZWdlcjogQmlnSW50ZWdlcixcbiAgICAgICAgICBTZWN1cmVSYW5kb206IFNlY3VyZVJhbmRvbVxuICAgICAgICB9O1xuICAgIH1cblxufSkuY2FsbCh0aGlzKTtcbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCB7IFRpbWVyIH0gZnJvbSAnLi9UaW1lci5qcyc7XG5cbmNvbnN0IERlZmF1bHRBY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IDYwOyAvLyBzZWNvbmRzXG5cbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlbkV2ZW50cyB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIGFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lID0gRGVmYXVsdEFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lLFxuICAgICAgICBhY2Nlc3NUb2tlbkV4cGlyaW5nVGltZXIgPSBuZXcgVGltZXIoXCJBY2Nlc3MgdG9rZW4gZXhwaXJpbmdcIiksXG4gICAgICAgIGFjY2Vzc1Rva2VuRXhwaXJlZFRpbWVyID0gbmV3IFRpbWVyKFwiQWNjZXNzIHRva2VuIGV4cGlyZWRcIilcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSBhY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZTtcblxuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nID0gYWNjZXNzVG9rZW5FeHBpcmluZ1RpbWVyO1xuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQgPSBhY2Nlc3NUb2tlbkV4cGlyZWRUaW1lcjtcbiAgICB9XG5cbiAgICBsb2FkKGNvbnRhaW5lcikge1xuICAgICAgICAvLyBvbmx5IHJlZ2lzdGVyIGV2ZW50cyBpZiB0aGVyZSdzIGFuIGFjY2VzcyB0b2tlbiBhbmQgaXQgaGFzIGFuIGV4cGlyYXRpb25cbiAgICAgICAgaWYgKGNvbnRhaW5lci5hY2Nlc3NfdG9rZW4gJiYgY29udGFpbmVyLmV4cGlyZXNfaW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gY29udGFpbmVyLmV4cGlyZXNfaW47XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJBY2Nlc3NUb2tlbkV2ZW50cy5sb2FkOiBhY2Nlc3MgdG9rZW4gcHJlc2VudCwgcmVtYWluaW5nIGR1cmF0aW9uOlwiLCBkdXJhdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChkdXJhdGlvbiA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBvbmx5IHJlZ2lzdGVyIGV4cGlyaW5nIGlmIHdlIHN0aWxsIGhhdmUgdGltZVxuICAgICAgICAgICAgICAgIGxldCBleHBpcmluZyA9IGR1cmF0aW9uIC0gdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWU7XG4gICAgICAgICAgICAgICAgaWYgKGV4cGlyaW5nIDw9IDApe1xuICAgICAgICAgICAgICAgICAgICBleHBpcmluZyA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkFjY2Vzc1Rva2VuRXZlbnRzLmxvYWQ6IHJlZ2lzdGVyaW5nIGV4cGlyaW5nIHRpbWVyIGluOlwiLCBleHBpcmluZyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZy5pbml0KGV4cGlyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkFjY2Vzc1Rva2VuRXZlbnRzLmxvYWQ6IGNhbmNlbGluZyBleGlzdGluZyBleHBpcmluZyB0aW1lciBiZWNhc2Ugd2UncmUgcGFzdCBleHBpcmF0aW9uLlwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nLmNhbmNlbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiBpdCdzIG5lZ2F0aXZlLCBpdCB3aWxsIHN0aWxsIGZpcmVcbiAgICAgICAgICAgIGxldCBleHBpcmVkID0gZHVyYXRpb24gKyAxO1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiQWNjZXNzVG9rZW5FdmVudHMubG9hZDogcmVnaXN0ZXJpbmcgZXhwaXJlZCB0aW1lciBpbjpcIiwgZXhwaXJlZCk7XG4gICAgICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQuaW5pdChleHBpcmVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuY2FuY2VsKCk7XG4gICAgICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQuY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmxvYWQoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIkFjY2Vzc1Rva2VuRXZlbnRzLnVubG9hZDogY2FuY2VsaW5nIGV4aXN0aW5nIGFjY2VzcyB0b2tlbiB0aW1lcnNcIik7XG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuY2FuY2VsKCk7XG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJlZC5jYW5jZWwoKTtcbiAgICB9XG5cbiAgICBhZGRBY2Nlc3NUb2tlbkV4cGlyaW5nKGNiKSB7XG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuYWRkSGFuZGxlcihjYik7XG4gICAgfVxuICAgIHJlbW92ZUFjY2Vzc1Rva2VuRXhwaXJpbmcoY2IpIHtcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZy5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgICB9XG5cbiAgICBhZGRBY2Nlc3NUb2tlbkV4cGlyZWQoY2IpIHtcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLmFkZEhhbmRsZXIoY2IpO1xuICAgIH1cbiAgICByZW1vdmVBY2Nlc3NUb2tlbkV4cGlyZWQoY2IpIHtcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLnJlbW92ZUhhbmRsZXIoY2IpO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcblxuY29uc3QgRGVmYXVsdEludGVydmFsID0gMjAwMDtcblxuZXhwb3J0IGNsYXNzIENoZWNrU2Vzc2lvbklGcmFtZSB7XG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2ssIGNsaWVudF9pZCwgdXJsLCBpbnRlcnZhbCwgc3RvcE9uRXJyb3IgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuX2NsaWVudF9pZCA9IGNsaWVudF9pZDtcbiAgICAgICAgdGhpcy5fdXJsID0gdXJsO1xuICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IGludGVydmFsIHx8IERlZmF1bHRJbnRlcnZhbDtcbiAgICAgICAgdGhpcy5fc3RvcE9uRXJyb3IgPSBzdG9wT25FcnJvcjtcblxuICAgICAgICB2YXIgaWR4ID0gdXJsLmluZGV4T2YoXCIvXCIsIHVybC5pbmRleE9mKFwiLy9cIikgKyAyKTtcbiAgICAgICAgdGhpcy5fZnJhbWVfb3JpZ2luID0gdXJsLnN1YnN0cigwLCBpZHgpO1xuXG4gICAgICAgIHRoaXMuX2ZyYW1lID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG5cbiAgICAgICAgLy8gc2hvdGd1biBhcHByb2FjaFxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUud2lkdGggPSAwO1xuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS5oZWlnaHQgPSAwO1xuXG4gICAgICAgIHRoaXMuX2ZyYW1lLnNyYyA9IHVybDtcbiAgICB9XG4gICAgbG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9mcmFtZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9mcmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCA9IHRoaXMuX21lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX21lc3NhZ2UoZSkge1xuICAgICAgICBpZiAoZS5vcmlnaW4gPT09IHRoaXMuX2ZyYW1lX29yaWdpbiAmJlxuICAgICAgICAgICAgZS5zb3VyY2UgPT09IHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3dcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoZS5kYXRhID09PSBcImVycm9yXCIpIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJDaGVja1Nlc3Npb25JRnJhbWU6IGVycm9yIG1lc3NhZ2UgZnJvbSBjaGVjayBzZXNzaW9uIG9wIGlmcmFtZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RvcE9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZS5kYXRhID09PSBcImNoYW5nZWRcIikge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkNoZWNrU2Vzc2lvbklGcmFtZTogY2hhbmdlZCBtZXNzYWdlIGZyb20gY2hlY2sgc2Vzc2lvbiBvcCBpZnJhbWVcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkNoZWNrU2Vzc2lvbklGcmFtZTogXCIgKyBlLmRhdGEgKyBcIiBtZXNzYWdlIGZyb20gY2hlY2sgc2Vzc2lvbiBvcCBpZnJhbWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnQoc2Vzc2lvbl9zdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5fc2Vzc2lvbl9zdGF0ZSAhPT0gc2Vzc2lvbl9zdGF0ZSkge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiQ2hlY2tTZXNzaW9uSUZyYW1lLnN0YXJ0XCIpO1xuXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcblxuICAgICAgICAgICAgdGhpcy5fc2Vzc2lvbl9zdGF0ZSA9IHNlc3Npb25fc3RhdGU7XG5cbiAgICAgICAgICAgIGxldCBzZW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UodGhpcy5fY2xpZW50X2lkICsgXCIgXCIgKyB0aGlzLl9zZXNzaW9uX3N0YXRlLCB0aGlzLl9mcmFtZV9vcmlnaW4pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gdHJpZ2dlciBub3dcbiAgICAgICAgICAgIHNlbmQoKTtcblxuICAgICAgICAgICAgLy8gYW5kIHNldHVwIHRpbWVyXG4gICAgICAgICAgICB0aGlzLl90aW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbChzZW5kLCB0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLl9zZXNzaW9uX3N0YXRlID0gbnVsbDtcblxuICAgICAgICBpZiAodGhpcy5fdGltZXIpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkNoZWNrU2Vzc2lvbklGcmFtZS5zdG9wXCIpO1xuXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl90aW1lcik7XG4gICAgICAgICAgICB0aGlzLl90aW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBDb3Jkb3ZhUG9wdXBXaW5kb3cgfSBmcm9tICcuL0NvcmRvdmFQb3B1cFdpbmRvdy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBDb3Jkb3ZhSUZyYW1lTmF2aWdhdG9yIHtcblxuICAgIHByZXBhcmUocGFyYW1zKSB7XG4gICAgICAgIHBhcmFtcy5wb3B1cFdpbmRvd0ZlYXR1cmVzID0gJ2hpZGRlbj15ZXMnO1xuICAgICAgICBsZXQgcG9wdXAgPSBuZXcgQ29yZG92YVBvcHVwV2luZG93KHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocG9wdXApO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IENvcmRvdmFQb3B1cFdpbmRvdyB9IGZyb20gJy4vQ29yZG92YVBvcHVwV2luZG93LmpzJztcblxuZXhwb3J0IGNsYXNzIENvcmRvdmFQb3B1cE5hdmlnYXRvciB7XG5cbiAgICBwcmVwYXJlKHBhcmFtcykge1xuICAgICAgICBsZXQgcG9wdXAgPSBuZXcgQ29yZG92YVBvcHVwV2luZG93KHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocG9wdXApO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcblxuY29uc3QgRGVmYXVsdFBvcHVwRmVhdHVyZXMgPSAnbG9jYXRpb249bm8sdG9vbGJhcj1ubyx6b29tPW5vJztcbmNvbnN0IERlZmF1bHRQb3B1cFRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbmV4cG9ydCBjbGFzcyBDb3Jkb3ZhUG9wdXBXaW5kb3cge1xuXG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IHBhcmFtcy5wb3B1cFdpbmRvd0ZlYXR1cmVzIHx8IERlZmF1bHRQb3B1cEZlYXR1cmVzO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHBhcmFtcy5wb3B1cFdpbmRvd1RhcmdldCB8fCBEZWZhdWx0UG9wdXBUYXJnZXQ7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlZGlyZWN0X3VyaSA9IHBhcmFtcy5zdGFydFVybDtcbiAgICAgICAgTG9nLmRlYnVnKFwiQ29yZG92YVBvcHVwV2luZG93LmN0b3I6IHJlZGlyZWN0X3VyaTogXCIgKyB0aGlzLnJlZGlyZWN0X3VyaSk7XG4gICAgfVxuXG4gICAgX2lzSW5BcHBCcm93c2VySW5zdGFsbGVkKGNvcmRvdmFNZXRhZGF0YSkge1xuICAgICAgICByZXR1cm4gW1wiY29yZG92YS1wbHVnaW4taW5hcHBicm93c2VyXCIsIFwiY29yZG92YS1wbHVnaW4taW5hcHBicm93c2VyLmluYXBwYnJvd3NlclwiLCBcIm9yZy5hcGFjaGUuY29yZG92YS5pbmFwcGJyb3dzZXJcIl0uc29tZShmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvcmRvdmFNZXRhZGF0YS5oYXNPd25Qcm9wZXJ0eShuYW1lKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBuYXZpZ2F0ZShwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtcy51cmwpIHtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiTm8gdXJsIHByb3ZpZGVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF3aW5kb3cuY29yZG92YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9lcnJvcihcImNvcmRvdmEgaXMgdW5kZWZpbmVkXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBjb3Jkb3ZhTWV0YWRhdGEgPSB3aW5kb3cuY29yZG92YS5yZXF1aXJlKFwiY29yZG92YS9wbHVnaW5fbGlzdFwiKS5tZXRhZGF0YTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0luQXBwQnJvd3Nlckluc3RhbGxlZChjb3Jkb3ZhTWV0YWRhdGEpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9lcnJvcihcIkluQXBwQnJvd3NlciBwbHVnaW4gbm90IGZvdW5kXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wb3B1cCA9IGNvcmRvdmEuSW5BcHBCcm93c2VyLm9wZW4ocGFyYW1zLnVybCwgdGhpcy50YXJnZXQsIHRoaXMuZmVhdHVyZXMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BvcHVwKSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiQ29yZG92YVBvcHVwV2luZG93Lm5hdmlnYXRlOiBwb3B1cCBzdWNjZXNzZnVsbHkgY3JlYXRlZFwiKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLl9leGl0Q2FsbGJhY2tFdmVudCA9IHRoaXMuX2V4aXRDYWxsYmFjay5iaW5kKHRoaXMpOyBcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkU3RhcnRDYWxsYmFja0V2ZW50ID0gdGhpcy5fbG9hZFN0YXJ0Q2FsbGJhY2suYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiZXhpdFwiLCB0aGlzLl9leGl0Q2FsbGJhY2tFdmVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2Fkc3RhcnRcIiwgdGhpcy5fbG9hZFN0YXJ0Q2FsbGJhY2tFdmVudCwgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lcnJvcihcIkVycm9yIG9wZW5pbmcgcG9wdXAgd2luZG93XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2U7XG4gICAgfVxuXG4gICAgZ2V0IHByb21pc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICAgIH1cblxuICAgIF9sb2FkU3RhcnRDYWxsYmFjayhldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudXJsLmluZGV4T2YodGhpcy5yZWRpcmVjdF91cmkpID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWNjZXNzKHsgdXJsOiBldmVudC51cmwgfSk7XG4gICAgICAgIH0gICAgXG4gICAgfVxuICAgIF9leGl0Q2FsbGJhY2sobWVzc2FnZSkge1xuICAgICAgICB0aGlzLl9lcnJvcihtZXNzYWdlKTsgICAgXG4gICAgfVxuICAgIFxuICAgIF9zdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xuXG4gICAgICAgIExvZy5kZWJ1ZyhcIkNvcmRvdmFQb3B1cFdpbmRvdzogU3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIGNvcmRvdmEgcG9wdXAgd2luZG93XCIpO1xuICAgICAgICB0aGlzLl9yZXNvbHZlKGRhdGEpO1xuICAgIH1cbiAgICBfZXJyb3IobWVzc2FnZSkge1xuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XG5cbiAgICAgICAgTG9nLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLl9yZWplY3QobmV3IEVycm9yKG1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xuICAgIH1cblxuICAgIF9jbGVhbnVwKCkge1xuICAgICAgICBpZiAodGhpcy5fcG9wdXApe1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiQ29yZG92YVBvcHVwV2luZG93OiBjbGVhbmluZyB1cCBwb3B1cFwiKTtcbiAgICAgICAgICAgIHRoaXMuX3BvcHVwLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJleGl0XCIsIHRoaXMuX2V4aXRDYWxsYmFja0V2ZW50LCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLl9wb3B1cC5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZHN0YXJ0XCIsIHRoaXMuX2xvYWRTdGFydENhbGxiYWNrRXZlbnQsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuX3BvcHVwLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcG9wdXAgPSBudWxsO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcblxuZXhwb3J0IGNsYXNzIEVycm9yUmVzcG9uc2UgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3Ioe2Vycm9yLCBlcnJvcl9kZXNjcmlwdGlvbiwgZXJyb3JfdXJpLCBzdGF0ZSwgc2Vzc2lvbl9zdGF0ZX09e31cbiAgICApIHtcbiAgICAgICAgIGlmICghZXJyb3Ipe1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gZXJyb3IgcGFzc2VkIHRvIEVycm9yUmVzcG9uc2VcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlcnJvclwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyKGVycm9yX2Rlc2NyaXB0aW9uIHx8IGVycm9yKTtcblxuICAgICAgICB0aGlzLm5hbWUgPSBcIkVycm9yUmVzcG9uc2VcIjtcblxuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgIHRoaXMuZXJyb3JfZGVzY3JpcHRpb24gPSBlcnJvcl9kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5lcnJvcl91cmkgPSBlcnJvcl91cmk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLnNlc3Npb25fc3RhdGUgPSBzZXNzaW9uX3N0YXRlO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcblxuZXhwb3J0IGNsYXNzIEV2ZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IFtdO1xuICAgIH1cblxuICAgIGFkZEhhbmRsZXIoY2IpIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLnB1c2goY2IpO1xuICAgIH1cblxuICAgIHJlbW92ZUhhbmRsZXIoY2IpIHtcbiAgICAgICAgdmFyIGlkeCA9IHRoaXMuX2NhbGxiYWNrcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBjYik7XG4gICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmFpc2UoLi4ucGFyYW1zKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIkV2ZW50OiBSYWlzaW5nIGV2ZW50OiBcIiArIHRoaXMuX25hbWUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzW2ldKC4uLnBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5jb25zdCB0aW1lciA9IHtcbiAgICBzZXRJbnRlcnZhbDogZnVuY3Rpb24gKGNiLCBkdXJhdGlvbikge1xuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoY2IsIGR1cmF0aW9uKTtcbiAgICB9LFxuICAgIGNsZWFySW50ZXJ2YWw6IGZ1bmN0aW9uIChoYW5kbGUpIHtcbiAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcbiAgICB9XG59O1xuXG5sZXQgdGVzdGluZyA9IGZhbHNlO1xubGV0IHJlcXVlc3QgPSBudWxsO1xuXG5leHBvcnQgY2xhc3MgR2xvYmFsIHtcblxuICAgIHN0YXRpYyBfdGVzdGluZygpIHtcbiAgICAgICAgdGVzdGluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBsb2NhdGlvbigpIHtcbiAgICAgICAgaWYgKCF0ZXN0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYXRpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgaWYgKCF0ZXN0aW5nICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBzZXNzaW9uU3RvcmFnZSgpIHtcbiAgICAgICAgaWYgKCF0ZXN0aW5nICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0WE1MSHR0cFJlcXVlc3QobmV3UmVxdWVzdCkge1xuICAgICAgICByZXF1ZXN0ID0gbmV3UmVxdWVzdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFhNTEh0dHBSZXF1ZXN0KCkge1xuICAgICAgICBpZiAoIXRlc3RpbmcgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0IHx8IFhNTEh0dHBSZXF1ZXN0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCB0aW1lcigpIHtcbiAgICAgICAgaWYgKCF0ZXN0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBJRnJhbWVXaW5kb3cgfSBmcm9tICcuL0lGcmFtZVdpbmRvdy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBJRnJhbWVOYXZpZ2F0b3Ige1xuXG4gICAgcHJlcGFyZShwYXJhbXMpIHtcbiAgICAgICAgbGV0IGZyYW1lID0gbmV3IElGcmFtZVdpbmRvdyhwYXJhbXMpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZyYW1lKTtcbiAgICB9XG5cbiAgICBjYWxsYmFjayh1cmwpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lTmF2aWdhdG9yLmNhbGxiYWNrXCIpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBJRnJhbWVXaW5kb3cubm90aWZ5UGFyZW50KHVybCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcblxuY29uc3QgRGVmYXVsdFRpbWVvdXQgPSAxMDAwMDtcblxuZXhwb3J0IGNsYXNzIElGcmFtZVdpbmRvdyB7XG5cbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICAgICAgdGhpcy5fcmVqZWN0ID0gcmVqZWN0O1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCA9IHRoaXMuX21lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMuX2JvdW5kTWVzc2FnZUV2ZW50LCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5fZnJhbWUgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcblxuICAgICAgICAvLyBzaG90Z3VuIGFwcHJvYWNoXG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLmhlaWdodCA9IDA7XG5cbiAgICAgICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZnJhbWUpO1xuICAgIH1cblxuICAgIG5hdmlnYXRlKHBhcmFtcykge1xuICAgICAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnVybCkge1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJObyB1cmwgcHJvdmlkZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdGltZW91dCA9IHBhcmFtcy5zaWxlbnRSZXF1ZXN0VGltZW91dCB8fCBEZWZhdWx0VGltZW91dDtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5uYXZpZ2F0ZTogVXNpbmcgdGltZW91dCBvZjpcIiwgdGltZW91dCk7XG4gICAgICAgICAgICB0aGlzLl90aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuX3RpbWVvdXQuYmluZCh0aGlzKSwgdGltZW91dCk7XG4gICAgICAgICAgICB0aGlzLl9mcmFtZS5zcmMgPSBwYXJhbXMudXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcbiAgICB9XG5cbiAgICBnZXQgcHJvbWlzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XG4gICAgfVxuXG4gICAgX3N1Y2Nlc3MoZGF0YSkge1xuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XG5cbiAgICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lV2luZG93OiBTdWNjZXNzZnVsIHJlc3BvbnNlIGZyb20gZnJhbWUgd2luZG93XCIpO1xuICAgICAgICB0aGlzLl9yZXNvbHZlKGRhdGEpO1xuICAgIH1cbiAgICBfZXJyb3IobWVzc2FnZSkge1xuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XG5cbiAgICAgICAgTG9nLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLl9yZWplY3QobmV3IEVycm9yKG1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xuICAgIH1cblxuICAgIF9jbGVhbnVwKCkge1xuICAgICAgICBpZiAodGhpcy5fZnJhbWUpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdzogY2xlYW51cFwiKTtcblxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMuX2JvdW5kTWVzc2FnZUV2ZW50LCBmYWxzZSk7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKTtcbiAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuX2ZyYW1lKTtcblxuICAgICAgICAgICAgdGhpcy5fdGltZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fZnJhbWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fYm91bmRNZXNzYWdlRXZlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3RpbWVvdXQoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy50aW1lb3V0XCIpO1xuICAgICAgICB0aGlzLl9lcnJvcihcIkZyYW1lIHdpbmRvdyB0aW1lZCBvdXRcIik7XG4gICAgfVxuXG4gICAgX21lc3NhZ2UoZSkge1xuICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3cubWVzc2FnZVwiKTtcblxuICAgICAgICBpZiAodGhpcy5fdGltZXIgJiZcbiAgICAgICAgICAgIGUub3JpZ2luID09PSB0aGlzLl9vcmlnaW4gJiZcbiAgICAgICAgICAgIGUuc291cmNlID09PSB0aGlzLl9mcmFtZS5jb250ZW50V2luZG93XG4gICAgICAgICkge1xuICAgICAgICAgICAgbGV0IHVybCA9IGUuZGF0YTtcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWNjZXNzKHsgdXJsOiB1cmwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lcnJvcihcIkludmFsaWQgcmVzcG9uc2UgZnJvbSBmcmFtZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBfb3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICAgIH1cblxuICAgIHN0YXRpYyBub3RpZnlQYXJlbnQodXJsKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5ub3RpZnlQYXJlbnRcIik7XG4gICAgICAgIHVybCA9IHVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiSUZyYW1lV2luZG93Lm5vdGlmeVBhcmVudDogcG9zdGluZyB1cmwgbWVzc2FnZSB0byBwYXJlbnRcIik7XG4gICAgICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHVybCwgbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcblxuZXhwb3J0IGNsYXNzIEluTWVtb3J5V2ViU3RvcmFnZXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLl9kYXRhID0ge307XG4gICAgfVxuXG4gICAgZ2V0SXRlbShrZXkpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiSW5NZW1vcnlXZWJTdG9yYWdlLmdldEl0ZW1cIiwga2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFba2V5XTtcbiAgICB9XG5cbiAgICBzZXRJdGVtKGtleSwgdmFsdWUpe1xuICAgICAgICBMb2cuZGVidWcoXCJJbk1lbW9yeVdlYlN0b3JhZ2Uuc2V0SXRlbVwiLCBrZXkpO1xuICAgICAgICB0aGlzLl9kYXRhW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZW1vdmVJdGVtKGtleSl7XG4gICAgICAgIExvZy5kZWJ1ZyhcIkluTWVtb3J5V2ViU3RvcmFnZS5yZW1vdmVJdGVtXCIsIGtleSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9kYXRhW2tleV07XG4gICAgfVxuXG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuX2RhdGEpLmxlbmd0aDtcbiAgICB9XG5cbiAgICBrZXkoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuX2RhdGEpW2luZGV4XTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEpvc2VVdGlsKHsgandzLCBLZXlVdGlsLCBYNTA5LCBjcnlwdG8sIGhleHRvYjY0dSwgYjY0dG9oZXgsIEFsbG93ZWRTaWduaW5nQWxncyB9KSB7XG4gICAgcmV0dXJuIGNsYXNzIEpvc2VVdGlsIHtcblxuICAgICAgICBzdGF0aWMgcGFyc2VKd3Qoand0KSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJKb3NlVXRpbC5wYXJzZUp3dFwiKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIHRva2VuID0gandzLkpXUy5wYXJzZShqd3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogdG9rZW4uaGVhZGVyT2JqLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB0b2tlbi5wYXlsb2FkT2JqXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyB2YWxpZGF0ZUp3dChqd3QsIGtleSwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3LCBub3csIHRpbWVJbnNlbnNpdGl2ZSwgb2Zmc2V0U2Vjb25kcykge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiSm9zZVV0aWwudmFsaWRhdGVKd3RcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbGlkYXRlSldUIG5vdyBpc1wiLG5vdywgb2Zmc2V0U2Vjb25kcylcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5rdHkgPT09IFwiUlNBXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5lICYmIGtleS5uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBLZXlVdGlsLmdldEtleShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleS54NWMgJiYga2V5Lng1Yy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoZXggPSBiNjR0b2hleChrZXkueDVjWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IFg1MDkuZ2V0UHVibGljS2V5RnJvbUNlcnRIZXgoaGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLnZhbGlkYXRlSnd0OiBSU0Ega2V5IG1pc3Npbmcga2V5IG1hdGVyaWFsXCIsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiUlNBIGtleSBtaXNzaW5nIGtleSBtYXRlcmlhbFwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleS5rdHkgPT09IFwiRUNcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmNydiAmJiBrZXkueCAmJiBrZXkueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gS2V5VXRpbC5nZXRLZXkoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLnZhbGlkYXRlSnd0OiBFQyBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIiwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJFQyBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwudmFsaWRhdGVKd3Q6IFVuc3VwcG9ydGVkIGtleSB0eXBlXCIsIGtleSAmJiBrZXkua3R5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGtleSB0eXBlOiBcIiArIGtleSAmJiBrZXkua3R5KSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpvc2VVdGlsLl92YWxpZGF0ZUp3dChqd3QsIGtleSwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3LCBub3csIHRpbWVJbnNlbnNpdGl2ZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKGUgJiYgZS5tZXNzYWdlIHx8IGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkpXVCB2YWxpZGF0aW9uIGZhaWxlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyB2YWxpZGF0ZUp3dEF0dHJpYnV0ZXMoand0LCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXcsIG5vdywgdGltZUluc2Vuc2l0aXZlLCBvZmZzZXRTZWNvbmRzKSB7XG4gICAgICAgICAgICBpZiAoIWNsb2NrU2tldykge1xuICAgICAgICAgICAgICAgIGNsb2NrU2tldyA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghbm93KSB7XG4gICAgICAgICAgICAgICAgbm93ID0gcGFyc2VJbnQoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YWxpZCBhdHRyaWJ1dGVzIG5vdyBpc1wiLG5vdywgb2Zmc2V0U2Vjb25kcylcblxuICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBKb3NlVXRpbC5wYXJzZUp3dChqd3QpLnBheWxvYWQ7XG5cbiAgICAgICAgICAgIGlmICghcGF5bG9hZC5pc3MpIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGlzc3VlciB3YXMgbm90IHByb3ZpZGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpc3N1ZXIgd2FzIG5vdCBwcm92aWRlZFwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF5bG9hZC5pc3MgIT09IGlzc3Vlcikge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogSW52YWxpZCBpc3N1ZXIgaW4gdG9rZW5cIiwgcGF5bG9hZC5pc3MpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIGlzc3VlciBpbiB0b2tlbjogXCIgKyBwYXlsb2FkLmlzcykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXBheWxvYWQuYXVkKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBhdWQgd2FzIG5vdCBwcm92aWRlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiYXVkIHdhcyBub3QgcHJvdmlkZWRcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbGlkQXVkaWVuY2UgPSBwYXlsb2FkLmF1ZCA9PT0gYXVkaWVuY2UgfHwgKEFycmF5LmlzQXJyYXkocGF5bG9hZC5hdWQpICYmIHBheWxvYWQuYXVkLmluZGV4T2YoYXVkaWVuY2UpID49IDApO1xuICAgICAgICAgICAgaWYgKCF2YWxpZEF1ZGllbmNlKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBJbnZhbGlkIGF1ZGllbmNlIGluIHRva2VuXCIsIHBheWxvYWQuYXVkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBhdWRpZW5jZSBpbiB0b2tlbjogXCIgKyBwYXlsb2FkLmF1ZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBheWxvYWQuYXpwICYmIHBheWxvYWQuYXpwICE9PSBhdWRpZW5jZSkge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogSW52YWxpZCBhenAgaW4gdG9rZW5cIiwgcGF5bG9hZC5henApO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIGF6cCBpbiB0b2tlbjogXCIgKyBwYXlsb2FkLmF6cCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRpbWVJbnNlbnNpdGl2ZSkge1xuICAgICAgICAgICAgICAgIHZhciBsb3dlck5vdyA9IG5vdyArIGNsb2NrU2tldztcbiAgICAgICAgICAgICAgICB2YXIgdXBwZXJOb3cgPSBub3cgLSBjbG9ja1NrZXc7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXBheWxvYWQuaWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogaWF0IHdhcyBub3QgcHJvdmlkZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpYXQgd2FzIG5vdCBwcm92aWRlZFwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsb3dlck5vdyA8IHBheWxvYWQuaWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dDogaWF0IGlzIGluIHRoZSBmdXR1cmVcIiwgcGF5bG9hZC5pYXQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiaWF0IGlzIGluIHRoZSBmdXR1cmU6IFwiICsgcGF5bG9hZC5pYXQpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5uYmYgJiYgbG93ZXJOb3cgPCBwYXlsb2FkLm5iZikge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IG5iZiBpcyBpbiB0aGUgZnV0dXJlXCIsIHBheWxvYWQubmJmKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIm5iZiBpcyBpbiB0aGUgZnV0dXJlOiBcIiArIHBheWxvYWQubmJmKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFwYXlsb2FkLmV4cCkge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGV4cCB3YXMgbm90IHByb3ZpZGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiZXhwIHdhcyBub3QgcHJvdmlkZWRcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5leHAgPCB1cHBlck5vdykge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJKb3NlVXRpbC5fdmFsaWRhdGVKd3Q6IGV4cCBpcyBpbiB0aGUgcGFzdFwiLCBwYXlsb2FkLmV4cCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJleHAgaXMgaW4gdGhlIHBhc3Q6XCIgKyBwYXlsb2FkLmV4cCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwYXlsb2FkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBfdmFsaWRhdGVKd3Qoand0LCBrZXksIGlzc3VlciwgYXVkaWVuY2UsIGNsb2NrU2tldywgbm93LCB0aW1lSW5zZW5zaXRpdmUpIHtcblxuICAgICAgICAgICAgcmV0dXJuIEpvc2VVdGlsLnZhbGlkYXRlSnd0QXR0cmlidXRlcyhqd3QsIGlzc3VlciwgYXVkaWVuY2UsIGNsb2NrU2tldywgbm93LCB0aW1lSW5zZW5zaXRpdmUpLnRoZW4ocGF5bG9hZCA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFqd3MuSldTLnZlcmlmeShqd3QsIGtleSwgQWxsb3dlZFNpZ25pbmdBbGdzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0OiBzaWduYXR1cmUgdmFsaWRhdGlvbiBmYWlsZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwic2lnbmF0dXJlIHZhbGlkYXRpb24gZmFpbGVkXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXlsb2FkO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKGUgJiYgZS5tZXNzYWdlIHx8IGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwic2lnbmF0dXJlIHZhbGlkYXRpb24gZmFpbGVkXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBoYXNoU3RyaW5nKHZhbHVlLCBhbGcpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5VdGlsLmhhc2hTdHJpbmcodmFsdWUsIGFsZyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIGhleFRvQmFzZTY0VXJsKHZhbHVlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBoZXh0b2I2NHUodmFsdWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IGp3cywgS2V5VXRpbCwgWDUwOSwgY3J5cHRvLCBoZXh0b2I2NHUsIGI2NHRvaGV4LCBBbGxvd2VkU2lnbmluZ0FsZ3MgfSBmcm9tICcuL2NyeXB0by9yc2EnO1xuaW1wb3J0IGdldEpvc2VVdGlsIGZyb20gJy4vSm9zZVV0aWxJbXBsJztcblxuZXhwb3J0IGNvbnN0IEpvc2VVdGlsID0gZ2V0Sm9zZVV0aWwoeyBqd3MsIEtleVV0aWwsIFg1MDksIGNyeXB0bywgaGV4dG9iNjR1LCBiNjR0b2hleCwgQWxsb3dlZFNpZ25pbmdBbGdzIH0pO1xuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9HbG9iYWwuanMnO1xuXG5leHBvcnQgY2xhc3MgSnNvblNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBhZGRpdGlvbmFsQ29udGVudFR5cGVzID0gbnVsbCwgXG4gICAgICAgIFhNTEh0dHBSZXF1ZXN0Q3RvciA9IEdsb2JhbC5YTUxIdHRwUmVxdWVzdCwgXG4gICAgICAgIGp3dEhhbmRsZXIgPSBudWxsXG4gICAgKSB7XG4gICAgICAgIGlmIChhZGRpdGlvbmFsQ29udGVudFR5cGVzICYmIEFycmF5LmlzQXJyYXkoYWRkaXRpb25hbENvbnRlbnRUeXBlcykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRUeXBlcyA9IGFkZGl0aW9uYWxDb250ZW50VHlwZXMuc2xpY2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRUeXBlcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NvbnRlbnRUeXBlcy5wdXNoKCdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgIGlmIChqd3RIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9jb250ZW50VHlwZXMucHVzaCgnYXBwbGljYXRpb24vand0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9YTUxIdHRwUmVxdWVzdCA9IFhNTEh0dHBSZXF1ZXN0Q3RvcjtcbiAgICAgICAgdGhpcy5fand0SGFuZGxlciA9IGp3dEhhbmRsZXI7XG4gICAgfVxuXG4gICAgZ2V0SnNvbih1cmwsIHRva2VuKSB7XG4gICAgICAgIGlmICghdXJsKXtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLmdldEpzb246IE5vIHVybCBwYXNzZWRcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1cmxcIik7XG4gICAgICAgIH1cblxuICAgICAgICBMb2cuZGVidWcoXCJKc29uU2VydmljZS5nZXRKc29uLCB1cmw6IFwiLCB1cmwpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIHZhciByZXEgPSBuZXcgdGhpcy5fWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHJlcS5vcGVuKCdHRVQnLCB1cmwpO1xuXG4gICAgICAgICAgICB2YXIgYWxsb3dlZENvbnRlbnRUeXBlcyA9IHRoaXMuX2NvbnRlbnRUeXBlcztcbiAgICAgICAgICAgIHZhciBqd3RIYW5kbGVyID0gdGhpcy5fand0SGFuZGxlcjtcblxuICAgICAgICAgICAgcmVxLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLmdldEpzb246IEhUVFAgcmVzcG9uc2UgcmVjZWl2ZWQsIHN0YXR1c1wiLCByZXEuc3RhdHVzKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09PSAyMDApIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudFR5cGUgPSByZXEuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50VHlwZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBhbGxvd2VkQ29udGVudFR5cGVzLmZpbmQoaXRlbT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50VHlwZS5zdGFydHNXaXRoKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQgPT0gXCJhcHBsaWNhdGlvbi9qd3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp3dEhhbmRsZXIocmVxKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLmdldEpzb246IEVycm9yIHBhcnNpbmcgSlNPTiByZXNwb25zZVwiLCBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIENvbnRlbnQtVHlwZTogXCIgKyBjb250ZW50VHlwZSArIFwiLCBmcm9tIFVSTDogXCIgKyB1cmwpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihyZXEuc3RhdHVzVGV4dCArIFwiIChcIiArIHJlcS5zdGF0dXMgKyBcIilcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UuZ2V0SnNvbjogbmV0d29yayBlcnJvclwiKTtcbiAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLmdldEpzb246IHRva2VuIHBhc3NlZCwgc2V0dGluZyBBdXRob3JpemF0aW9uIGhlYWRlclwiKTtcbiAgICAgICAgICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyB0b2tlbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcS5zZW5kKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBvc3RGb3JtKHVybCwgcGF5bG9hZCkge1xuICAgICAgICBpZiAoIXVybCl7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJKc29uU2VydmljZS5wb3N0Rm9ybTogTm8gdXJsIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVybFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLnBvc3RGb3JtLCB1cmw6IFwiLCB1cmwpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIHZhciByZXEgPSBuZXcgdGhpcy5fWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHJlcS5vcGVuKCdQT1NUJywgdXJsKTtcblxuICAgICAgICAgICAgdmFyIGFsbG93ZWRDb250ZW50VHlwZXMgPSB0aGlzLl9jb250ZW50VHlwZXM7XG5cbiAgICAgICAgICAgIHJlcS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJKc29uU2VydmljZS5wb3N0Rm9ybTogSFRUUCByZXNwb25zZSByZWNlaXZlZCwgc3RhdHVzXCIsIHJlcS5zdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT09IDIwMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50VHlwZSA9IHJlcS5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb3VuZCA9IGFsbG93ZWRDb250ZW50VHlwZXMuZmluZChpdGVtPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UucG9zdEZvcm06IEVycm9yIHBhcnNpbmcgSlNPTiByZXNwb25zZVwiLCBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIENvbnRlbnQtVHlwZTogXCIgKyBjb250ZW50VHlwZSArIFwiLCBmcm9tIFVSTDogXCIgKyB1cmwpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09PSA0MDApIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudFR5cGUgPSByZXEuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50VHlwZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBhbGxvd2VkQ29udGVudFR5cGVzLmZpbmQoaXRlbT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50VHlwZS5zdGFydHNXaXRoKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGF5bG9hZCA9IEpTT04ucGFyc2UocmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkICYmIHBheWxvYWQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkpzb25TZXJ2aWNlLnBvc3RGb3JtOiBFcnJvciBmcm9tIHNlcnZlcjogXCIsIHBheWxvYWQuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihwYXlsb2FkLmVycm9yKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UucG9zdEZvcm06IEVycm9yIHBhcnNpbmcgSlNPTiByZXNwb25zZVwiLCBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IocmVxLnN0YXR1c1RleHQgKyBcIiAoXCIgKyByZXEuc3RhdHVzICsgXCIpXCIpKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiSnNvblNlcnZpY2UucG9zdEZvcm06IG5ldHdvcmsgZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgcmVqZWN0KEVycm9yKFwiTmV0d29yayBFcnJvclwiKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgYm9keSA9IFwiXCI7XG4gICAgICAgICAgICBmb3IobGV0IGtleSBpbiBwYXlsb2FkKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXlsb2FkW2tleV07XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9keS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5ICs9IFwiJlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBlbmNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBcIj1cIjtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgICAgICByZXEuc2VuZChib2R5KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxubGV0IG5vcExvZ2dlciA9IHtcbiAgICBkZWJ1Zygpe30sXG4gICAgaW5mbygpe30sXG4gICAgd2Fybigpe30sXG4gICAgZXJyb3IoKXt9XG59O1xuXG5jb25zdCBOT05FID0gMDtcbmNvbnN0IEVSUk9SID0gMTtcbmNvbnN0IFdBUk4gPSAyO1xuY29uc3QgSU5GTyA9IDM7XG5jb25zdCBERUJVRyA9IDQ7XG5cbmxldCBsb2dnZXI7XG5sZXQgbGV2ZWw7XG5cbmV4cG9ydCBjbGFzcyBMb2cge1xuICAgIHN0YXRpYyBnZXQgTk9ORSgpIHtyZXR1cm4gTk9ORX07XG4gICAgc3RhdGljIGdldCBFUlJPUigpIHtyZXR1cm4gRVJST1J9O1xuICAgIHN0YXRpYyBnZXQgV0FSTigpIHtyZXR1cm4gV0FSTn07XG4gICAgc3RhdGljIGdldCBJTkZPKCkge3JldHVybiBJTkZPfTtcbiAgICBzdGF0aWMgZ2V0IERFQlVHKCkge3JldHVybiBERUJVR307XG4gICAgXG4gICAgc3RhdGljIHJlc2V0KCl7XG4gICAgICAgIGxldmVsID0gSU5GTztcbiAgICAgICAgbG9nZ2VyID0gbm9wTG9nZ2VyO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZ2V0IGxldmVsKCl7XG4gICAgICAgIHJldHVybiBsZXZlbDtcbiAgICB9XG4gICAgc3RhdGljIHNldCBsZXZlbCh2YWx1ZSl7XG4gICAgICAgIGlmIChOT05FIDw9IHZhbHVlICYmIHZhbHVlIDw9IERFQlVHKXtcbiAgICAgICAgICAgIGxldmVsID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxvZyBsZXZlbFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZ2V0IGxvZ2dlcigpe1xuICAgICAgICByZXR1cm4gbG9nZ2VyO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0IGxvZ2dlcih2YWx1ZSl7XG4gICAgICAgIGlmICghdmFsdWUuZGVidWcgJiYgdmFsdWUuaW5mbykge1xuICAgICAgICAgICAgLy8ganVzdCB0byBzdGF5IGJhY2t3YXJkcyBjb21wYXQuIGNhbiByZW1vdmUgaW4gMi4wXG4gICAgICAgICAgICB2YWx1ZS5kZWJ1ZyA9IHZhbHVlLmluZm87XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUuZGVidWcgJiYgdmFsdWUuaW5mbyAmJiB2YWx1ZS53YXJuICYmIHZhbHVlLmVycm9yKXtcbiAgICAgICAgICAgIGxvZ2dlciA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsb2dnZXJcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGRlYnVnKC4uLmFyZ3Mpe1xuICAgICAgICBpZiAobGV2ZWwgPj0gREVCVUcpe1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnLmFwcGx5KGxvZ2dlciwgQXJyYXkuZnJvbShhcmdzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGluZm8oLi4uYXJncyl7XG4gICAgICAgIGlmIChsZXZlbCA+PSBJTkZPKXtcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvLmFwcGx5KGxvZ2dlciwgQXJyYXkuZnJvbShhcmdzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHdhcm4oLi4uYXJncyl7XG4gICAgICAgIGlmIChsZXZlbCA+PSBXQVJOKXtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuLmFwcGx5KGxvZ2dlciwgQXJyYXkuZnJvbShhcmdzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGVycm9yKC4uLmFyZ3Mpe1xuICAgICAgICBpZiAobGV2ZWwgPj0gRVJST1Ipe1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yLmFwcGx5KGxvZ2dlciwgQXJyYXkuZnJvbShhcmdzKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkxvZy5yZXNldCgpO1xuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuaW1wb3J0IHsgSnNvblNlcnZpY2UgfSBmcm9tICcuL0pzb25TZXJ2aWNlLmpzJztcblxuY29uc3QgT2lkY01ldGFkYXRhVXJsUGF0aCA9ICcud2VsbC1rbm93bi9vcGVuaWQtY29uZmlndXJhdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBNZXRhZGF0YVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBKc29uU2VydmljZUN0b3IgPSBKc29uU2VydmljZSkge1xuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJNZXRhZGF0YVNlcnZpY2U6IE5vIHNldHRpbmdzIHBhc3NlZCB0byBNZXRhZGF0YVNlcnZpY2VcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzZXR0aW5nc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuX2pzb25TZXJ2aWNlID0gbmV3IEpzb25TZXJ2aWNlQ3RvcihbJ2FwcGxpY2F0aW9uL2p3ay1zZXQranNvbiddKTtcbiAgICB9XG5cbiAgICBnZXQgbWV0YWRhdGFVcmwoKSB7XG4gICAgICAgIGlmICghdGhpcy5fbWV0YWRhdGFVcmwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YVVybCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsID0gdGhpcy5fc2V0dGluZ3MubWV0YWRhdGFVcmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCA9IHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tZXRhZGF0YVVybCAmJiB0aGlzLl9tZXRhZGF0YVVybC5pbmRleE9mKE9pZGNNZXRhZGF0YVVybFBhdGgpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWV0YWRhdGFVcmxbdGhpcy5fbWV0YWRhdGFVcmwubGVuZ3RoIC0gMV0gIT09ICcvJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgKz0gJy8nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsICs9IE9pZGNNZXRhZGF0YVVybFBhdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhVXJsO1xuICAgIH1cblxuICAgIGdldE1ldGFkYXRhKCkge1xuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubWV0YWRhdGEpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YTogUmV0dXJuaW5nIG1ldGFkYXRhIGZyb20gc2V0dGluZ3NcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3NldHRpbmdzLm1ldGFkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5tZXRhZGF0YVVybCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhOiBObyBhdXRob3JpdHkgb3IgbWV0YWRhdGFVcmwgY29uZmlndXJlZCBvbiBzZXR0aW5nc1wiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBhdXRob3JpdHkgb3IgbWV0YWRhdGFVcmwgY29uZmlndXJlZCBvbiBzZXR0aW5nc1wiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGE6IGdldHRpbmcgbWV0YWRhdGEgZnJvbVwiLCB0aGlzLm1ldGFkYXRhVXJsKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbih0aGlzLm1ldGFkYXRhVXJsKVxuICAgICAgICAgICAgLnRoZW4obWV0YWRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRNZXRhZGF0YToganNvbiByZWNlaXZlZFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXRhZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldElzc3VlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJpc3N1ZXJcIik7XG4gICAgfVxuXG4gICAgZ2V0QXV0aG9yaXphdGlvbkVuZHBvaW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcImF1dGhvcml6YXRpb25fZW5kcG9pbnRcIik7XG4gICAgfVxuXG4gICAgZ2V0VXNlckluZm9FbmRwb2ludCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJ1c2VyaW5mb19lbmRwb2ludFwiKTtcbiAgICB9XG5cbiAgICBnZXRUb2tlbkVuZHBvaW50KG9wdGlvbmFsPXRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJ0b2tlbl9lbmRwb2ludFwiLCBvcHRpb25hbCk7XG4gICAgfVxuXG4gICAgZ2V0Q2hlY2tTZXNzaW9uSWZyYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcImNoZWNrX3Nlc3Npb25faWZyYW1lXCIsIHRydWUpO1xuICAgIH1cblxuICAgIGdldEVuZFNlc3Npb25FbmRwb2ludCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJlbmRfc2Vzc2lvbl9lbmRwb2ludFwiLCB0cnVlKTtcbiAgICB9XG5cbiAgICBnZXRSZXZvY2F0aW9uRW5kcG9pbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwicmV2b2NhdGlvbl9lbmRwb2ludFwiLCB0cnVlKTtcbiAgICB9XG5cbiAgICBnZXRLZXlzRW5kcG9pbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiandrc191cmlcIiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgX2dldE1ldGFkYXRhUHJvcGVydHkobmFtZSwgb3B0aW9uYWw9ZmFsc2UpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhUHJvcGVydHkgZm9yOiBcIiArIG5hbWUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldE1ldGFkYXRhKCkudGhlbihtZXRhZGF0YSA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGFQcm9wZXJ0eTogbWV0YWRhdGEgcmVjaWV2ZWRcIik7XG5cbiAgICAgICAgICAgIGlmIChtZXRhZGF0YVtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLndhcm4oXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGFQcm9wZXJ0eTogTWV0YWRhdGEgZG9lcyBub3QgY29udGFpbiBvcHRpb25hbCBwcm9wZXJ0eSBcIiArIG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhUHJvcGVydHk6IE1ldGFkYXRhIGRvZXMgbm90IGNvbnRhaW4gcHJvcGVydHkgXCIgKyBuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0YWRhdGEgZG9lcyBub3QgY29udGFpbiBwcm9wZXJ0eSBcIiArIG5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhW25hbWVdO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRTaWduaW5nS2V5cygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLnNpZ25pbmdLZXlzKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0U2lnbmluZ0tleXM6IFJldHVybmluZyBzaWduaW5nS2V5cyBmcm9tIHNldHRpbmdzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9zZXR0aW5ncy5zaWduaW5nS2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcImp3a3NfdXJpXCIpLnRoZW4oandrc191cmkgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzOiBqd2tzX3VyaSByZWNlaXZlZFwiLCBqd2tzX3VyaSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uU2VydmljZS5nZXRKc29uKGp3a3NfdXJpKS50aGVuKGtleVNldCA9PiB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzOiBrZXkgc2V0IHJlY2VpdmVkXCIsIGtleVNldCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWtleVNldC5rZXlzKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk1ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5czogTWlzc2luZyBrZXlzIG9uIGtleXNldFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBrZXlzIG9uIGtleXNldFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9zZXR0aW5ncy5zaWduaW5nS2V5cyA9IGtleVNldC5rZXlzO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5zaWduaW5nS2V5cztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBPaWRjQ2xpZW50U2V0dGluZ3MgfSBmcm9tICcuL09pZGNDbGllbnRTZXR0aW5ncy5qcyc7XG5pbXBvcnQgeyBFcnJvclJlc3BvbnNlIH0gZnJvbSAnLi9FcnJvclJlc3BvbnNlLmpzJztcbmltcG9ydCB7IFNpZ25pblJlcXVlc3QgfSBmcm9tICcuL1NpZ25pblJlcXVlc3QuanMnO1xuaW1wb3J0IHsgU2lnbmluUmVzcG9uc2UgfSBmcm9tICcuL1NpZ25pblJlc3BvbnNlLmpzJztcbmltcG9ydCB7IFNpZ25vdXRSZXF1ZXN0IH0gZnJvbSAnLi9TaWdub3V0UmVxdWVzdC5qcyc7XG5pbXBvcnQgeyBTaWdub3V0UmVzcG9uc2UgfSBmcm9tICcuL1NpZ25vdXRSZXNwb25zZS5qcyc7XG5pbXBvcnQgeyBTaWduaW5TdGF0ZSB9IGZyb20gJy4vU2lnbmluU3RhdGUuanMnO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL1N0YXRlLmpzJztcblxuZXhwb3J0IGNsYXNzIE9pZGNDbGllbnQge1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzID0ge30pIHtcbiAgICAgICAgaWYgKHNldHRpbmdzIGluc3RhbmNlb2YgT2lkY0NsaWVudFNldHRpbmdzKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBuZXcgT2lkY0NsaWVudFNldHRpbmdzKHNldHRpbmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBfc3RhdGVTdG9yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3Muc3RhdGVTdG9yZTtcbiAgICB9XG4gICAgZ2V0IF92YWxpZGF0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnZhbGlkYXRvcjtcbiAgICB9XG4gICAgZ2V0IF9tZXRhZGF0YVNlcnZpY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLm1ldGFkYXRhU2VydmljZTtcbiAgICB9XG5cbiAgICBnZXQgc2V0dGluZ3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncztcbiAgICB9XG4gICAgZ2V0IG1ldGFkYXRhU2VydmljZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZTtcbiAgICB9XG5cbiAgICBjcmVhdGVTaWduaW5SZXF1ZXN0KHtcbiAgICAgICAgcmVzcG9uc2VfdHlwZSwgc2NvcGUsIHJlZGlyZWN0X3VyaSxcbiAgICAgICAgLy8gZGF0YSB3YXMgbWVhbnQgdG8gYmUgdGhlIHBsYWNlIGEgY2FsbGVyIGNvdWxkIGluZGljYXRlIHRoZSBkYXRhIHRvXG4gICAgICAgIC8vIGhhdmUgcm91bmQgdHJpcHBlZCwgYnV0IHBlb3BsZSB3ZXJlIGdldHRpbmcgY29uZnVzZWQsIHNvIGkgYWRkZWQgc3RhdGUgKHNpbmNlIHRoYXQgbWF0Y2hlcyB0aGUgc3BlYylcbiAgICAgICAgLy8gYW5kIHNvIG5vdyBpZiBkYXRhIGlzIG5vdCBwYXNzZWQsIGJ1dCBzdGF0ZSBpcyB0aGVuIHN0YXRlIHdpbGwgYmUgdXNlZFxuICAgICAgICBkYXRhLCBzdGF0ZSwgcHJvbXB0LCBkaXNwbGF5LCBtYXhfYWdlLCB1aV9sb2NhbGVzLCBpZF90b2tlbl9oaW50LCBsb2dpbl9oaW50LCBhY3JfdmFsdWVzLFxuICAgICAgICByZXNvdXJjZSwgcmVxdWVzdCwgcmVxdWVzdF91cmksIHJlc3BvbnNlX21vZGUsIGV4dHJhUXVlcnlQYXJhbXMsIGV4dHJhVG9rZW5QYXJhbXMsIHJlcXVlc3RfdHlwZSwgc2tpcFVzZXJJbmZvIH0gPSB7fSxcbiAgICAgICAgc3RhdGVTdG9yZVxuICAgICkge1xuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LmNyZWF0ZVNpZ25pblJlcXVlc3RcIik7XG5cbiAgICAgICAgbGV0IGNsaWVudF9pZCA9IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcbiAgICAgICAgcmVzcG9uc2VfdHlwZSA9IHJlc3BvbnNlX3R5cGUgfHwgdGhpcy5fc2V0dGluZ3MucmVzcG9uc2VfdHlwZTtcbiAgICAgICAgc2NvcGUgPSBzY29wZSB8fCB0aGlzLl9zZXR0aW5ncy5zY29wZTtcbiAgICAgICAgcmVkaXJlY3RfdXJpID0gcmVkaXJlY3RfdXJpIHx8IHRoaXMuX3NldHRpbmdzLnJlZGlyZWN0X3VyaTtcblxuICAgICAgICAvLyBpZF90b2tlbl9oaW50LCBsb2dpbl9oaW50IGFyZW4ndCBhbGxvd2VkIG9uIF9zZXR0aW5nc1xuICAgICAgICBwcm9tcHQgPSBwcm9tcHQgfHwgdGhpcy5fc2V0dGluZ3MucHJvbXB0O1xuICAgICAgICBkaXNwbGF5ID0gZGlzcGxheSB8fCB0aGlzLl9zZXR0aW5ncy5kaXNwbGF5O1xuICAgICAgICBtYXhfYWdlID0gbWF4X2FnZSB8fCB0aGlzLl9zZXR0aW5ncy5tYXhfYWdlO1xuICAgICAgICB1aV9sb2NhbGVzID0gdWlfbG9jYWxlcyB8fCB0aGlzLl9zZXR0aW5ncy51aV9sb2NhbGVzO1xuICAgICAgICBhY3JfdmFsdWVzID0gYWNyX3ZhbHVlcyB8fCB0aGlzLl9zZXR0aW5ncy5hY3JfdmFsdWVzO1xuICAgICAgICByZXNvdXJjZSA9IHJlc291cmNlIHx8IHRoaXMuX3NldHRpbmdzLnJlc291cmNlO1xuICAgICAgICByZXNwb25zZV9tb2RlID0gcmVzcG9uc2VfbW9kZSB8fCB0aGlzLl9zZXR0aW5ncy5yZXNwb25zZV9tb2RlO1xuICAgICAgICBleHRyYVF1ZXJ5UGFyYW1zID0gZXh0cmFRdWVyeVBhcmFtcyB8fCB0aGlzLl9zZXR0aW5ncy5leHRyYVF1ZXJ5UGFyYW1zO1xuICAgICAgICBleHRyYVRva2VuUGFyYW1zID0gZXh0cmFUb2tlblBhcmFtcyB8fCB0aGlzLl9zZXR0aW5ncy5leHRyYVRva2VuUGFyYW1zO1xuXG4gICAgICAgIGxldCBhdXRob3JpdHkgPSB0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHk7XG5cbiAgICAgICAgaWYgKFNpZ25pblJlcXVlc3QuaXNDb2RlKHJlc3BvbnNlX3R5cGUpICYmIHJlc3BvbnNlX3R5cGUgIT09IFwiY29kZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiT3BlbklEIENvbm5lY3QgaHlicmlkIGZsb3cgaXMgbm90IHN1cHBvcnRlZFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldEF1dGhvcml6YXRpb25FbmRwb2ludCgpLnRoZW4odXJsID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY3JlYXRlU2lnbmluUmVxdWVzdDogUmVjZWl2ZWQgYXV0aG9yaXphdGlvbiBlbmRwb2ludFwiLCB1cmwpO1xuXG4gICAgICAgICAgICBsZXQgc2lnbmluUmVxdWVzdCA9IG5ldyBTaWduaW5SZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY2xpZW50X2lkLFxuICAgICAgICAgICAgICAgIHJlZGlyZWN0X3VyaSxcbiAgICAgICAgICAgICAgICByZXNwb25zZV90eXBlLFxuICAgICAgICAgICAgICAgIHNjb3BlLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEgfHwgc3RhdGUsXG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5LFxuICAgICAgICAgICAgICAgIHByb21wdCwgZGlzcGxheSwgbWF4X2FnZSwgdWlfbG9jYWxlcywgaWRfdG9rZW5faGludCwgbG9naW5faGludCwgYWNyX3ZhbHVlcyxcbiAgICAgICAgICAgICAgICByZXNvdXJjZSwgcmVxdWVzdCwgcmVxdWVzdF91cmksIGV4dHJhUXVlcnlQYXJhbXMsIGV4dHJhVG9rZW5QYXJhbXMsIHJlcXVlc3RfdHlwZSwgcmVzcG9uc2VfbW9kZSxcbiAgICAgICAgICAgICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLl9zZXR0aW5ncy5jbGllbnRfc2VjcmV0LFxuICAgICAgICAgICAgICAgIHNraXBVc2VySW5mb1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBzaWduaW5TdGF0ZSA9IHNpZ25pblJlcXVlc3Quc3RhdGU7XG4gICAgICAgICAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xuXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVTdG9yZS5zZXQoc2lnbmluU3RhdGUuaWQsIHNpZ25pblN0YXRlLnRvU3RvcmFnZVN0cmluZygpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2lnbmluUmVxdWVzdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWFkU2lnbmluUmVzcG9uc2VTdGF0ZSh1cmwsIHN0YXRlU3RvcmUsIHJlbW92ZVN0YXRlID0gZmFsc2UpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5yZWFkU2lnbmluUmVzcG9uc2VTdGF0ZVwiKTtcblxuICAgICAgICBsZXQgdXNlUXVlcnkgPSB0aGlzLl9zZXR0aW5ncy5yZXNwb25zZV9tb2RlID09PSBcInF1ZXJ5XCIgfHwgXG4gICAgICAgICAgICAoIXRoaXMuX3NldHRpbmdzLnJlc3BvbnNlX21vZGUgJiYgU2lnbmluUmVxdWVzdC5pc0NvZGUodGhpcy5fc2V0dGluZ3MucmVzcG9uc2VfdHlwZSkpO1xuICAgICAgICBsZXQgZGVsaW1pdGVyID0gdXNlUXVlcnkgPyBcIj9cIiA6IFwiI1wiO1xuXG4gICAgICAgIHZhciByZXNwb25zZSA9IG5ldyBTaWduaW5SZXNwb25zZSh1cmwsIGRlbGltaXRlcik7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5zdGF0ZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiT2lkY0NsaWVudC5yZWFkU2lnbmluUmVzcG9uc2VTdGF0ZTogTm8gc3RhdGUgaW4gcmVzcG9uc2VcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc3RhdGUgaW4gcmVzcG9uc2VcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmUgfHwgdGhpcy5fc3RhdGVTdG9yZTtcblxuICAgICAgICB2YXIgc3RhdGVBcGkgPSByZW1vdmVTdGF0ZSA/IHN0YXRlU3RvcmUucmVtb3ZlLmJpbmQoc3RhdGVTdG9yZSkgOiBzdGF0ZVN0b3JlLmdldC5iaW5kKHN0YXRlU3RvcmUpO1xuXG4gICAgICAgIHJldHVybiBzdGF0ZUFwaShyZXNwb25zZS5zdGF0ZSkudGhlbihzdG9yZWRTdGF0ZVN0cmluZyA9PiB7XG4gICAgICAgICAgICBpZiAoIXN0b3JlZFN0YXRlU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiT2lkY0NsaWVudC5yZWFkU2lnbmluUmVzcG9uc2VTdGF0ZTogTm8gbWF0Y2hpbmcgc3RhdGUgZm91bmQgaW4gc3RvcmFnZVwiKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBtYXRjaGluZyBzdGF0ZSBmb3VuZCBpbiBzdG9yYWdlXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgc3RhdGUgPSBTaWduaW5TdGF0ZS5mcm9tU3RvcmFnZVN0cmluZyhzdG9yZWRTdGF0ZVN0cmluZyk7XG4gICAgICAgICAgICByZXR1cm4ge3N0YXRlLCByZXNwb25zZX07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb2Nlc3NTaWduaW5SZXNwb25zZSh1cmwsIHN0YXRlU3RvcmUpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbmluUmVzcG9uc2VcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZFNpZ25pblJlc3BvbnNlU3RhdGUodXJsLCBzdGF0ZVN0b3JlLCB0cnVlKS50aGVuKCh7c3RhdGUsIHJlc3BvbnNlfSkgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbmluUmVzcG9uc2U6IFJlY2VpdmVkIHN0YXRlIGZyb20gc3RvcmFnZTsgdmFsaWRhdGluZyByZXNwb25zZVwiKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3IudmFsaWRhdGVTaWduaW5SZXNwb25zZShzdGF0ZSwgcmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVTaWdub3V0UmVxdWVzdCh7aWRfdG9rZW5faGludCwgZGF0YSwgc3RhdGUsIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSwgZXh0cmFRdWVyeVBhcmFtcywgcmVxdWVzdF90eXBlIH0gPSB7fSxcbiAgICAgICAgc3RhdGVTdG9yZVxuICAgICkge1xuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LmNyZWF0ZVNpZ25vdXRSZXF1ZXN0XCIpO1xuXG4gICAgICAgIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSA9IHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSB8fCB0aGlzLl9zZXR0aW5ncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XG4gICAgICAgIGV4dHJhUXVlcnlQYXJhbXMgPSBleHRyYVF1ZXJ5UGFyYW1zIHx8IHRoaXMuX3NldHRpbmdzLmV4dHJhUXVlcnlQYXJhbXM7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRFbmRTZXNzaW9uRW5kcG9pbnQoKS50aGVuKHVybCA9PiB7XG4gICAgICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk9pZGNDbGllbnQuY3JlYXRlU2lnbm91dFJlcXVlc3Q6IE5vIGVuZCBzZXNzaW9uIGVuZHBvaW50IHVybCByZXR1cm5lZFwiKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJubyBlbmQgc2Vzc2lvbiBlbmRwb2ludFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jcmVhdGVTaWdub3V0UmVxdWVzdDogUmVjZWl2ZWQgZW5kIHNlc3Npb24gZW5kcG9pbnRcIiwgdXJsKTtcblxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgU2lnbm91dFJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBpZF90b2tlbl9oaW50LFxuICAgICAgICAgICAgICAgIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhIHx8IHN0YXRlLFxuICAgICAgICAgICAgICAgIGV4dHJhUXVlcnlQYXJhbXMsXG4gICAgICAgICAgICAgICAgcmVxdWVzdF90eXBlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIHNpZ25vdXRTdGF0ZSA9IHJlcXVlc3Quc3RhdGU7XG4gICAgICAgICAgICBpZiAoc2lnbm91dFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jcmVhdGVTaWdub3V0UmVxdWVzdDogU2lnbm91dCByZXF1ZXN0IGhhcyBzdGF0ZSB0byBwZXJzaXN0XCIpO1xuXG4gICAgICAgICAgICAgICAgc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmUgfHwgdGhpcy5fc3RhdGVTdG9yZTtcbiAgICAgICAgICAgICAgICBzdGF0ZVN0b3JlLnNldChzaWdub3V0U3RhdGUuaWQsIHNpZ25vdXRTdGF0ZS50b1N0b3JhZ2VTdHJpbmcoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWFkU2lnbm91dFJlc3BvbnNlU3RhdGUodXJsLCBzdGF0ZVN0b3JlLCByZW1vdmVTdGF0ZSA9IGZhbHNlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlXCIpO1xuXG4gICAgICAgIHZhciByZXNwb25zZSA9IG5ldyBTaWdub3V0UmVzcG9uc2UodXJsKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5zdGF0ZSkge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5yZWFkU2lnbm91dFJlc3BvbnNlU3RhdGU6IE5vIHN0YXRlIGluIHJlc3BvbnNlXCIpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBMb2cud2FybihcIk9pZGNDbGllbnQucmVhZFNpZ25vdXRSZXNwb25zZVN0YXRlOiBSZXNwb25zZSB3YXMgZXJyb3I6IFwiLCByZXNwb25zZS5lcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvclJlc3BvbnNlKHJlc3BvbnNlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe3N0YXRlOiB1bmRlZmluZWQsIHJlc3BvbnNlfSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3RhdGVLZXkgPSByZXNwb25zZS5zdGF0ZTtcblxuICAgICAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xuXG4gICAgICAgIHZhciBzdGF0ZUFwaSA9IHJlbW92ZVN0YXRlID8gc3RhdGVTdG9yZS5yZW1vdmUuYmluZChzdGF0ZVN0b3JlKSA6IHN0YXRlU3RvcmUuZ2V0LmJpbmQoc3RhdGVTdG9yZSk7XG4gICAgICAgIHJldHVybiBzdGF0ZUFwaShzdGF0ZUtleSkudGhlbihzdG9yZWRTdGF0ZVN0cmluZyA9PiB7XG4gICAgICAgICAgICBpZiAoIXN0b3JlZFN0YXRlU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiT2lkY0NsaWVudC5yZWFkU2lnbm91dFJlc3BvbnNlU3RhdGU6IE5vIG1hdGNoaW5nIHN0YXRlIGZvdW5kIGluIHN0b3JhZ2VcIik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbWF0Y2hpbmcgc3RhdGUgZm91bmQgaW4gc3RvcmFnZVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHN0YXRlID0gU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmVkU3RhdGVTdHJpbmcpO1xuXG4gICAgICAgICAgICByZXR1cm4ge3N0YXRlLCByZXNwb25zZX07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb2Nlc3NTaWdub3V0UmVzcG9uc2UodXJsLCBzdGF0ZVN0b3JlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucHJvY2Vzc1NpZ25vdXRSZXNwb25zZVwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkU2lnbm91dFJlc3BvbnNlU3RhdGUodXJsLCBzdGF0ZVN0b3JlLCB0cnVlKS50aGVuKCh7c3RhdGUsIHJlc3BvbnNlfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbm91dFJlc3BvbnNlOiBSZWNlaXZlZCBzdGF0ZSBmcm9tIHN0b3JhZ2U7IHZhbGlkYXRpbmcgcmVzcG9uc2VcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvci52YWxpZGF0ZVNpZ25vdXRSZXNwb25zZShzdGF0ZSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbm91dFJlc3BvbnNlOiBObyBzdGF0ZSBmcm9tIHN0b3JhZ2U7IHNraXBwaW5nIHZhbGlkYXRpbmcgcmVzcG9uc2VcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhclN0YWxlU3RhdGUoc3RhdGVTdG9yZSkge1xuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LmNsZWFyU3RhbGVTdGF0ZVwiKTtcblxuICAgICAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xuXG4gICAgICAgIHJldHVybiBTdGF0ZS5jbGVhclN0YWxlU3RhdGUoc3RhdGVTdG9yZSwgdGhpcy5zZXR0aW5ncy5zdGFsZVN0YXRlQWdlKTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJy4vV2ViU3RvcmFnZVN0YXRlU3RvcmUuanMnO1xuaW1wb3J0IHsgUmVzcG9uc2VWYWxpZGF0b3IgfSBmcm9tICcuL1Jlc3BvbnNlVmFsaWRhdG9yLmpzJztcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlLmpzJztcblxuY29uc3QgT2lkY01ldGFkYXRhVXJsUGF0aCA9ICcud2VsbC1rbm93bi9vcGVuaWQtY29uZmlndXJhdGlvbic7XG5cbmNvbnN0IERlZmF1bHRSZXNwb25zZVR5cGUgPSBcImlkX3Rva2VuXCI7XG5jb25zdCBEZWZhdWx0U2NvcGUgPSBcIm9wZW5pZFwiO1xuY29uc3QgRGVmYXVsdFN0YWxlU3RhdGVBZ2UgPSA2MCAqIDE1OyAvLyBzZWNvbmRzXG5jb25zdCBEZWZhdWx0Q2xvY2tTa2V3SW5TZWNvbmRzID0gNjAgKiA1O1xuXG5leHBvcnQgY2xhc3MgT2lkY0NsaWVudFNldHRpbmdzIHtcbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIC8vIG1ldGFkYXRhIHJlbGF0ZWRcbiAgICAgICAgYXV0aG9yaXR5LCBtZXRhZGF0YVVybCwgbWV0YWRhdGEsIHNpZ25pbmdLZXlzLFxuICAgICAgICAvLyBjbGllbnQgcmVsYXRlZFxuICAgICAgICBjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHJlc3BvbnNlX3R5cGUgPSBEZWZhdWx0UmVzcG9uc2VUeXBlLCBzY29wZSA9IERlZmF1bHRTY29wZSxcbiAgICAgICAgcmVkaXJlY3RfdXJpLCBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmksXG4gICAgICAgIC8vIG9wdGlvbmFsIHByb3RvY29sXG4gICAgICAgIHByb21wdCwgZGlzcGxheSwgbWF4X2FnZSwgdWlfbG9jYWxlcywgYWNyX3ZhbHVlcywgcmVzb3VyY2UsIHJlc3BvbnNlX21vZGUsXG4gICAgICAgIC8vIGJlaGF2aW9yIGZsYWdzXG4gICAgICAgIGZpbHRlclByb3RvY29sQ2xhaW1zID0gdHJ1ZSwgbG9hZFVzZXJJbmZvID0gdHJ1ZSxcbiAgICAgICAgc3RhbGVTdGF0ZUFnZSA9IERlZmF1bHRTdGFsZVN0YXRlQWdlLCBjbG9ja1NrZXcgPSBEZWZhdWx0Q2xvY2tTa2V3SW5TZWNvbmRzLFxuICAgICAgICB1c2VySW5mb0p3dElzc3VlciA9ICdPUCcsXG4gICAgICAgIC8vIG90aGVyIGJlaGF2aW9yXG4gICAgICAgIHN0YXRlU3RvcmUgPSBuZXcgV2ViU3RvcmFnZVN0YXRlU3RvcmUoKSxcbiAgICAgICAgUmVzcG9uc2VWYWxpZGF0b3JDdG9yID0gUmVzcG9uc2VWYWxpZGF0b3IsXG4gICAgICAgIE1ldGFkYXRhU2VydmljZUN0b3IgPSBNZXRhZGF0YVNlcnZpY2UsXG4gICAgICAgIC8vIGV4dHJhIHF1ZXJ5IHBhcmFtc1xuICAgICAgICBleHRyYVF1ZXJ5UGFyYW1zID0ge30sXG4gICAgICAgIGV4dHJhVG9rZW5QYXJhbXMgPSB7fVxuICAgIH0gPSB7fSkge1xuXG4gICAgICAgIHRoaXMuX2F1dGhvcml0eSA9IGF1dGhvcml0eTtcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgPSBtZXRhZGF0YVVybDtcbiAgICAgICAgdGhpcy5fbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgdGhpcy5fc2lnbmluZ0tleXMgPSBzaWduaW5nS2V5cztcblxuICAgICAgICB0aGlzLl9jbGllbnRfaWQgPSBjbGllbnRfaWQ7XG4gICAgICAgIHRoaXMuX2NsaWVudF9zZWNyZXQgPSBjbGllbnRfc2VjcmV0O1xuICAgICAgICB0aGlzLl9yZXNwb25zZV90eXBlID0gcmVzcG9uc2VfdHlwZTtcbiAgICAgICAgdGhpcy5fc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5fcmVkaXJlY3RfdXJpID0gcmVkaXJlY3RfdXJpO1xuICAgICAgICB0aGlzLl9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgPSBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XG5cbiAgICAgICAgdGhpcy5fcHJvbXB0ID0gcHJvbXB0O1xuICAgICAgICB0aGlzLl9kaXNwbGF5ID0gZGlzcGxheTtcbiAgICAgICAgdGhpcy5fbWF4X2FnZSA9IG1heF9hZ2U7XG4gICAgICAgIHRoaXMuX3VpX2xvY2FsZXMgPSB1aV9sb2NhbGVzO1xuICAgICAgICB0aGlzLl9hY3JfdmFsdWVzID0gYWNyX3ZhbHVlcztcbiAgICAgICAgdGhpcy5fcmVzb3VyY2UgPSByZXNvdXJjZTtcbiAgICAgICAgdGhpcy5fcmVzcG9uc2VfbW9kZSA9IHJlc3BvbnNlX21vZGU7XG5cbiAgICAgICAgdGhpcy5fZmlsdGVyUHJvdG9jb2xDbGFpbXMgPSAhIWZpbHRlclByb3RvY29sQ2xhaW1zO1xuICAgICAgICB0aGlzLl9sb2FkVXNlckluZm8gPSAhIWxvYWRVc2VySW5mbztcbiAgICAgICAgdGhpcy5fc3RhbGVTdGF0ZUFnZSA9IHN0YWxlU3RhdGVBZ2U7XG4gICAgICAgIHRoaXMuX2Nsb2NrU2tldyA9IGNsb2NrU2tldztcbiAgICAgICAgdGhpcy5fdXNlckluZm9Kd3RJc3N1ZXIgPSB1c2VySW5mb0p3dElzc3VlcjtcblxuICAgICAgICB0aGlzLl9zdGF0ZVN0b3JlID0gc3RhdGVTdG9yZTtcbiAgICAgICAgdGhpcy5fdmFsaWRhdG9yID0gbmV3IFJlc3BvbnNlVmFsaWRhdG9yQ3Rvcih0aGlzKTtcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlID0gbmV3IE1ldGFkYXRhU2VydmljZUN0b3IodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fZXh0cmFRdWVyeVBhcmFtcyA9IHR5cGVvZiBleHRyYVF1ZXJ5UGFyYW1zID09PSAnb2JqZWN0JyA/IGV4dHJhUXVlcnlQYXJhbXMgOiB7fTtcbiAgICAgICAgdGhpcy5fZXh0cmFUb2tlblBhcmFtcyA9IHR5cGVvZiBleHRyYVRva2VuUGFyYW1zID09PSAnb2JqZWN0JyA/IGV4dHJhVG9rZW5QYXJhbXMgOiB7fTtcbiAgICB9XG5cbiAgICAvLyBjbGllbnQgY29uZmlnXG4gICAgZ2V0IGNsaWVudF9pZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9pZDtcbiAgICB9XG4gICAgc2V0IGNsaWVudF9pZCh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuX2NsaWVudF9pZCkge1xuICAgICAgICAgICAgLy8gb25lLXRpbWUgc2V0IG9ubHlcbiAgICAgICAgICAgIHRoaXMuX2NsaWVudF9pZCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiT2lkY0NsaWVudFNldHRpbmdzLnNldF9jbGllbnRfaWQ6IGNsaWVudF9pZCBoYXMgYWxyZWFkeSBiZWVuIGFzc2lnbmVkLlwiKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2xpZW50X2lkIGhhcyBhbHJlYWR5IGJlZW4gYXNzaWduZWQuXCIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGNsaWVudF9zZWNyZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGllbnRfc2VjcmV0O1xuICAgIH1cbiAgICBnZXQgcmVzcG9uc2VfdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlX3R5cGU7XG4gICAgfVxuICAgIGdldCBzY29wZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3BlO1xuICAgIH1cbiAgICBnZXQgcmVkaXJlY3RfdXJpKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVkaXJlY3RfdXJpO1xuICAgIH1cbiAgICBnZXQgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xuICAgIH1cblxuXG4gICAgLy8gb3B0aW9uYWwgcHJvdG9jb2wgcGFyYW1zXG4gICAgZ2V0IHByb21wdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb21wdDtcbiAgICB9XG4gICAgZ2V0IGRpc3BsYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNwbGF5O1xuICAgIH1cbiAgICBnZXQgbWF4X2FnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heF9hZ2U7XG4gICAgfVxuICAgIGdldCB1aV9sb2NhbGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdWlfbG9jYWxlcztcbiAgICB9XG4gICAgZ2V0IGFjcl92YWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3JfdmFsdWVzO1xuICAgIH1cbiAgICBnZXQgcmVzb3VyY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZTtcbiAgICB9XG4gICAgZ2V0IHJlc3BvbnNlX21vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZV9tb2RlO1xuICAgIH1cblxuXG4gICAgLy8gbWV0YWRhdGFcbiAgICBnZXQgYXV0aG9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aG9yaXR5O1xuICAgIH1cbiAgICBzZXQgYXV0aG9yaXR5KHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5fYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICAvLyBvbmUtdGltZSBzZXQgb25seVxuICAgICAgICAgICAgdGhpcy5fYXV0aG9yaXR5ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJPaWRjQ2xpZW50U2V0dGluZ3Muc2V0X2F1dGhvcml0eTogYXV0aG9yaXR5IGhhcyBhbHJlYWR5IGJlZW4gYXNzaWduZWQuXCIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRob3JpdHkgaGFzIGFscmVhZHkgYmVlbiBhc3NpZ25lZC5cIilcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgbWV0YWRhdGFVcmwoKSB7XG4gICAgICAgIGlmICghdGhpcy5fbWV0YWRhdGFVcmwpIHtcbiAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsID0gdGhpcy5hdXRob3JpdHk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9tZXRhZGF0YVVybCAmJiB0aGlzLl9tZXRhZGF0YVVybC5pbmRleE9mKE9pZGNNZXRhZGF0YVVybFBhdGgpIDwgMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tZXRhZGF0YVVybFt0aGlzLl9tZXRhZGF0YVVybC5sZW5ndGggLSAxXSAhPT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsICs9ICcvJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgKz0gT2lkY01ldGFkYXRhVXJsUGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVVybDtcbiAgICB9XG5cbiAgICAvLyBzZXR0YWJsZS9jYWNoYWJsZSBtZXRhZGF0YSB2YWx1ZXNcbiAgICBnZXQgbWV0YWRhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YTtcbiAgICB9XG4gICAgc2V0IG1ldGFkYXRhKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21ldGFkYXRhID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHNpZ25pbmdLZXlzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluZ0tleXM7XG4gICAgfVxuICAgIHNldCBzaWduaW5nS2V5cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9zaWduaW5nS2V5cyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8vIGJlaGF2aW9yIGZsYWdzXG4gICAgZ2V0IGZpbHRlclByb3RvY29sQ2xhaW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyUHJvdG9jb2xDbGFpbXM7XG4gICAgfVxuICAgIGdldCBsb2FkVXNlckluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkVXNlckluZm87XG4gICAgfVxuICAgIGdldCBzdGFsZVN0YXRlQWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhbGVTdGF0ZUFnZTtcbiAgICB9XG4gICAgZ2V0IGNsb2NrU2tldygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nsb2NrU2tldztcbiAgICB9XG4gICAgZ2V0IHVzZXJJbmZvSnd0SXNzdWVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlckluZm9Kd3RJc3N1ZXI7XG4gICAgfVxuXG4gICAgZ2V0IHN0YXRlU3RvcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZVN0b3JlO1xuICAgIH1cbiAgICBnZXQgdmFsaWRhdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yO1xuICAgIH1cbiAgICBnZXQgbWV0YWRhdGFTZXJ2aWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlO1xuICAgIH1cblxuICAgIC8vIGV4dHJhIHF1ZXJ5IHBhcmFtc1xuICAgIGdldCBleHRyYVF1ZXJ5UGFyYW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXh0cmFRdWVyeVBhcmFtcztcbiAgICB9XG4gICAgc2V0IGV4dHJhUXVlcnlQYXJhbXModmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpe1xuICAgICAgICAgICAgdGhpcy5fZXh0cmFRdWVyeVBhcmFtcyA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZXh0cmFRdWVyeVBhcmFtcyA9IHt9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZXh0cmEgdG9rZW4gcGFyYW1zXG4gICAgZ2V0IGV4dHJhVG9rZW5QYXJhbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leHRyYVRva2VuUGFyYW1zO1xuICAgIH1cbiAgICBzZXQgZXh0cmFUb2tlblBhcmFtcyh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICB0aGlzLl9leHRyYVRva2VuUGFyYW1zID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9leHRyYVRva2VuUGFyYW1zID0ge307XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBQb3B1cFdpbmRvdyB9IGZyb20gJy4vUG9wdXBXaW5kb3cuanMnO1xuXG5leHBvcnQgY2xhc3MgUG9wdXBOYXZpZ2F0b3Ige1xuXG4gICAgcHJlcGFyZShwYXJhbXMpIHtcbiAgICAgICAgbGV0IHBvcHVwID0gbmV3IFBvcHVwV2luZG93KHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocG9wdXApO1xuICAgIH1cblxuICAgIGNhbGxiYWNrKHVybCwga2VlcE9wZW4sIGRlbGltaXRlcikge1xuICAgICAgICBMb2cuZGVidWcoXCJQb3B1cE5hdmlnYXRvci5jYWxsYmFja1wiKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgUG9wdXBXaW5kb3cubm90aWZ5T3BlbmVyKHVybCwga2VlcE9wZW4sIGRlbGltaXRlcik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCB7IFVybFV0aWxpdHkgfSBmcm9tICcuL1VybFV0aWxpdHkuanMnO1xuXG5jb25zdCBDaGVja0ZvclBvcHVwQ2xvc2VkSW50ZXJ2YWwgPSA1MDA7XG5jb25zdCBEZWZhdWx0UG9wdXBGZWF0dXJlcyA9ICdsb2NhdGlvbj1ubyx0b29sYmFyPW5vLHdpZHRoPTUwMCxoZWlnaHQ9NTAwLGxlZnQ9MTAwLHRvcD0xMDA7Jztcbi8vY29uc3QgRGVmYXVsdFBvcHVwRmVhdHVyZXMgPSAnbG9jYXRpb249bm8sdG9vbGJhcj1ubyx3aWR0aD01MDAsaGVpZ2h0PTUwMCxsZWZ0PTEwMCx0b3A9MTAwO3Jlc2l6YWJsZT15ZXMnO1xuXG5jb25zdCBEZWZhdWx0UG9wdXBUYXJnZXQgPSBcIl9ibGFua1wiO1xuXG5leHBvcnQgY2xhc3MgUG9wdXBXaW5kb3cge1xuXG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHRhcmdldCA9IHBhcmFtcy5wb3B1cFdpbmRvd1RhcmdldCB8fCBEZWZhdWx0UG9wdXBUYXJnZXQ7XG4gICAgICAgIGxldCBmZWF0dXJlcyA9IHBhcmFtcy5wb3B1cFdpbmRvd0ZlYXR1cmVzIHx8IERlZmF1bHRQb3B1cEZlYXR1cmVzO1xuXG4gICAgICAgIHRoaXMuX3BvcHVwID0gd2luZG93Lm9wZW4oJycsIHRhcmdldCwgZmVhdHVyZXMpO1xuICAgICAgICBpZiAodGhpcy5fcG9wdXApIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlBvcHVwV2luZG93LmN0b3I6IHBvcHVwIHN1Y2Nlc3NmdWxseSBjcmVhdGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tGb3JQb3B1cENsb3NlZFRpbWVyID0gd2luZG93LnNldEludGVydmFsKHRoaXMuX2NoZWNrRm9yUG9wdXBDbG9zZWQuYmluZCh0aGlzKSwgQ2hlY2tGb3JQb3B1cENsb3NlZEludGVydmFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBwcm9taXNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbWlzZTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZShwYXJhbXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9wb3B1cCkge1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJQb3B1cFdpbmRvdy5uYXZpZ2F0ZTogRXJyb3Igb3BlbmluZyBwb3B1cCB3aW5kb3dcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnVybCkge1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJQb3B1cFdpbmRvdy5uYXZpZ2F0ZTogbm8gdXJsIHByb3ZpZGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJObyB1cmwgcHJvdmlkZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJQb3B1cFdpbmRvdy5uYXZpZ2F0ZTogU2V0dGluZyBVUkwgaW4gcG9wdXBcIik7XG5cbiAgICAgICAgICAgIHRoaXMuX2lkID0gcGFyYW1zLmlkO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lkKSB7XG4gICAgICAgICAgICAgICAgd2luZG93W1wicG9wdXBDYWxsYmFja19cIiArIHBhcmFtcy5pZF0gPSB0aGlzLl9jYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9wb3B1cC5mb2N1cygpO1xuICAgICAgICAgICAgdGhpcy5fcG9wdXAud2luZG93LmxvY2F0aW9uID0gcGFyYW1zLnVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2U7XG4gICAgfVxuXG4gICAgX3N1Y2Nlc3MoZGF0YSkge1xuICAgICAgICBMb2cuZGVidWcoXCJQb3B1cFdpbmRvdy5jYWxsYmFjazogU3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIHBvcHVwIHdpbmRvd1wiKTtcblxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XG4gICAgICAgIHRoaXMuX3Jlc29sdmUoZGF0YSk7XG4gICAgfVxuICAgIF9lcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIExvZy5lcnJvcihcIlBvcHVwV2luZG93LmVycm9yOiBcIiwgbWVzc2FnZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XG4gICAgICAgIHRoaXMuX3JlamVjdChuZXcgRXJyb3IobWVzc2FnZSkpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLl9jbGVhbnVwKGZhbHNlKTtcbiAgICB9XG5cbiAgICBfY2xlYW51cChrZWVwT3Blbikge1xuICAgICAgICBMb2cuZGVidWcoXCJQb3B1cFdpbmRvdy5jbGVhbnVwXCIpO1xuXG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuX2NoZWNrRm9yUG9wdXBDbG9zZWRUaW1lcik7XG4gICAgICAgIHRoaXMuX2NoZWNrRm9yUG9wdXBDbG9zZWRUaW1lciA9IG51bGw7XG5cbiAgICAgICAgZGVsZXRlIHdpbmRvd1tcInBvcHVwQ2FsbGJhY2tfXCIgKyB0aGlzLl9pZF07XG5cbiAgICAgICAgaWYgKHRoaXMuX3BvcHVwICYmICFrZWVwT3Blbikge1xuICAgICAgICAgICAgdGhpcy5fcG9wdXAuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wb3B1cCA9IG51bGw7XG4gICAgfVxuXG4gICAgX2NoZWNrRm9yUG9wdXBDbG9zZWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5fcG9wdXAgfHwgdGhpcy5fcG9wdXAuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aGlzLl9lcnJvcihcIlBvcHVwIHdpbmRvdyBjbG9zZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY2FsbGJhY2sodXJsLCBrZWVwT3Blbikge1xuICAgICAgICB0aGlzLl9jbGVhbnVwKGtlZXBPcGVuKTtcblxuICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJQb3B1cFdpbmRvdy5jYWxsYmFjayBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgdGhpcy5fc3VjY2Vzcyh7IHVybDogdXJsIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUG9wdXBXaW5kb3cuY2FsbGJhY2s6IEludmFsaWQgcmVzcG9uc2UgZnJvbSBwb3B1cFwiKTtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yKFwiSW52YWxpZCByZXNwb25zZSBmcm9tIHBvcHVwXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIG5vdGlmeU9wZW5lcih1cmwsIGtlZXBPcGVuLCBkZWxpbWl0ZXIpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5vcGVuZXIpIHtcbiAgICAgICAgICAgIHVybCA9IHVybCB8fCB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IFVybFV0aWxpdHkucGFyc2VVcmxGcmFnbWVudCh1cmwsIGRlbGltaXRlcik7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IFwicG9wdXBDYWxsYmFja19cIiArIGRhdGEuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHdpbmRvdy5vcGVuZXJbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUG9wdXBXaW5kb3cubm90aWZ5T3BlbmVyOiBwYXNzaW5nIHVybCBtZXNzYWdlIHRvIG9wZW5lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVybCwga2VlcE9wZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLndhcm4oXCJQb3B1cFdpbmRvdy5ub3RpZnlPcGVuZXI6IG5vIG1hdGNoaW5nIGNhbGxiYWNrIGZvdW5kIG9uIG9wZW5lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLndhcm4oXCJQb3B1cFdpbmRvdy5ub3RpZnlPcGVuZXI6IG5vIHN0YXRlIGZvdW5kIGluIHJlc3BvbnNlIHVybFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBMb2cud2FybihcIlBvcHVwV2luZG93Lm5vdGlmeU9wZW5lcjogbm8gd2luZG93Lm9wZW5lci4gQ2FuJ3QgY29tcGxldGUgbm90aWZpY2F0aW9uLlwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcblxuZXhwb3J0IGNsYXNzIFJlZGlyZWN0TmF2aWdhdG9yIHtcblxuICAgIHByZXBhcmUoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcyk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGUocGFyYW1zKSB7XG4gICAgICAgIGlmICghcGFyYW1zIHx8ICFwYXJhbXMudXJsKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZWRpcmVjdE5hdmlnYXRvci5uYXZpZ2F0ZTogTm8gdXJsIHByb3ZpZGVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHVybCBwcm92aWRlZFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLnVzZVJlcGxhY2VUb05hdmlnYXRlKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShwYXJhbXMudXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHBhcmFtcy51cmw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgZ2V0IHVybCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlLmpzJztcbmltcG9ydCB7IFVzZXJJbmZvU2VydmljZSB9IGZyb20gJy4vVXNlckluZm9TZXJ2aWNlLmpzJztcbmltcG9ydCB7IFRva2VuQ2xpZW50IH0gZnJvbSAnLi9Ub2tlbkNsaWVudC5qcyc7XG5pbXBvcnQgeyBFcnJvclJlc3BvbnNlIH0gZnJvbSAnLi9FcnJvclJlc3BvbnNlLmpzJztcbmltcG9ydCB7IEpvc2VVdGlsIH0gZnJvbSAnLi9Kb3NlVXRpbC5qcyc7XG5cbmNvbnN0IFByb3RvY29sQ2xhaW1zID0gW1wibm9uY2VcIiwgXCJhdF9oYXNoXCIsIFwiaWF0XCIsIFwibmJmXCIsIFwiZXhwXCIsIFwiYXVkXCIsIFwiaXNzXCIsIFwiY19oYXNoXCJdO1xuXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VWYWxpZGF0b3Ige1xuXG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIFxuICAgICAgICBNZXRhZGF0YVNlcnZpY2VDdG9yID0gTWV0YWRhdGFTZXJ2aWNlLFxuICAgICAgICBVc2VySW5mb1NlcnZpY2VDdG9yID0gVXNlckluZm9TZXJ2aWNlLCBcbiAgICAgICAgam9zZVV0aWwgPSBKb3NlVXRpbCxcbiAgICAgICAgVG9rZW5DbGllbnRDdG9yID0gVG9rZW5DbGllbnQpIHtcbiAgICAgICAgaWYgKCFzZXR0aW5ncykge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuY3RvcjogTm8gc2V0dGluZ3MgcGFzc2VkIHRvIFJlc3BvbnNlVmFsaWRhdG9yXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2V0dGluZ3NcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgICAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UgPSBuZXcgTWV0YWRhdGFTZXJ2aWNlQ3Rvcih0aGlzLl9zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuX3VzZXJJbmZvU2VydmljZSA9IG5ldyBVc2VySW5mb1NlcnZpY2VDdG9yKHRoaXMuX3NldHRpbmdzKTtcbiAgICAgICAgdGhpcy5fam9zZVV0aWwgPSBqb3NlVXRpbDtcbiAgICAgICAgdGhpcy5fdG9rZW5DbGllbnQgPSBuZXcgVG9rZW5DbGllbnRDdG9yKHRoaXMuX3NldHRpbmdzKTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZVNpZ25pblJlc3BvbnNlKHN0YXRlLCByZXNwb25zZSkge1xuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25pblJlc3BvbnNlXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzU2lnbmluUGFyYW1zKHN0YXRlLCByZXNwb25zZSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25pblJlc3BvbnNlOiBzdGF0ZSBwcm9jZXNzZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVUb2tlbnMoc3RhdGUsIHJlc3BvbnNlKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25pblJlc3BvbnNlOiB0b2tlbnMgdmFsaWRhdGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzQ2xhaW1zKHN0YXRlLCByZXNwb25zZSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2U6IGNsYWltcyBwcm9jZXNzZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZVNpZ25vdXRSZXNwb25zZShzdGF0ZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHN0YXRlLmlkICE9PSByZXNwb25zZS5zdGF0ZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IudmFsaWRhdGVTaWdub3V0UmVzcG9uc2U6IFN0YXRlIGRvZXMgbm90IG1hdGNoXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlN0YXRlIGRvZXMgbm90IG1hdGNoXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vdyB0aGF0IHdlIGtub3cgdGhlIHN0YXRlIG1hdGNoZXMsIHRha2UgdGhlIHN0b3JlZCBkYXRhXG4gICAgICAgIC8vIGFuZCBzZXQgaXQgaW50byB0aGUgcmVzcG9uc2Ugc28gY2FsbGVycyBjYW4gZ2V0IHRoZWlyIHN0YXRlXG4gICAgICAgIC8vIHRoaXMgaXMgaW1wb3J0YW50IGZvciBib3RoIHN1Y2Nlc3MgJiBlcnJvciBvdXRjb21lc1xuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci52YWxpZGF0ZVNpZ25vdXRSZXNwb25zZTogc3RhdGUgdmFsaWRhdGVkXCIpO1xuICAgICAgICByZXNwb25zZS5zdGF0ZSA9IHN0YXRlLmRhdGE7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgICBMb2cud2FybihcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbm91dFJlc3BvbnNlOiBSZXNwb25zZSB3YXMgZXJyb3JcIiwgcmVzcG9uc2UuZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvclJlc3BvbnNlKHJlc3BvbnNlKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICBfcHJvY2Vzc1NpZ25pblBhcmFtcyhzdGF0ZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHN0YXRlLmlkICE9PSByZXNwb25zZS5zdGF0ZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IFN0YXRlIGRvZXMgbm90IG1hdGNoXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlN0YXRlIGRvZXMgbm90IG1hdGNoXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3RhdGUuY2xpZW50X2lkKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogTm8gY2xpZW50X2lkIG9uIHN0YXRlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGNsaWVudF9pZCBvbiBzdGF0ZVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXN0YXRlLmF1dGhvcml0eSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IE5vIGF1dGhvcml0eSBvbiBzdGF0ZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBhdXRob3JpdHkgb24gc3RhdGVcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcyBhbGxvd3MgdGhlIGF1dGhvcml0eSB0byBiZSBsb2FkZWQgZnJvbSB0aGUgc2lnbmluIHN0YXRlXG4gICAgICAgIGlmICghdGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICB0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHkgPSBzdGF0ZS5hdXRob3JpdHk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZW5zdXJlIHdlJ3JlIHVzaW5nIHRoZSBjb3JyZWN0IGF1dGhvcml0eSBpZiB0aGUgYXV0aG9yaXR5IGlzIG5vdCBsb2FkZWQgZnJvbSBzaWduaW4gc3RhdGVcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5ICYmIHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eSAhPT0gc3RhdGUuYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogYXV0aG9yaXR5IG1pc21hdGNoIG9uIHNldHRpbmdzIHZzLiBzaWduaW4gc3RhdGVcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiYXV0aG9yaXR5IG1pc21hdGNoIG9uIHNldHRpbmdzIHZzLiBzaWduaW4gc3RhdGVcIikpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMgYWxsb3dzIHRoZSBjbGllbnRfaWQgdG8gYmUgbG9hZGVkIGZyb20gdGhlIHNpZ25pbiBzdGF0ZVxuICAgICAgICBpZiAoIXRoaXMuX3NldHRpbmdzLmNsaWVudF9pZCkge1xuICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkID0gc3RhdGUuY2xpZW50X2lkO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVuc3VyZSB3ZSdyZSB1c2luZyB0aGUgY29ycmVjdCBjbGllbnRfaWQgaWYgdGhlIGNsaWVudF9pZCBpcyBub3QgbG9hZGVkIGZyb20gc2lnbmluIHN0YXRlXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZCAmJiB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQgIT09IHN0YXRlLmNsaWVudF9pZCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXM6IGNsaWVudF9pZCBtaXNtYXRjaCBvbiBzZXR0aW5ncyB2cy4gc2lnbmluIHN0YXRlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImNsaWVudF9pZCBtaXNtYXRjaCBvbiBzZXR0aW5ncyB2cy4gc2lnbmluIHN0YXRlXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vdyB0aGF0IHdlIGtub3cgdGhlIHN0YXRlIG1hdGNoZXMsIHRha2UgdGhlIHN0b3JlZCBkYXRhXG4gICAgICAgIC8vIGFuZCBzZXQgaXQgaW50byB0aGUgcmVzcG9uc2Ugc28gY2FsbGVycyBjYW4gZ2V0IHRoZWlyIHN0YXRlXG4gICAgICAgIC8vIHRoaXMgaXMgaW1wb3J0YW50IGZvciBib3RoIHN1Y2Nlc3MgJiBlcnJvciBvdXRjb21lc1xuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogc3RhdGUgdmFsaWRhdGVkXCIpO1xuICAgICAgICByZXNwb25zZS5zdGF0ZSA9IHN0YXRlLmRhdGE7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgICBMb2cud2FybihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBSZXNwb25zZSB3YXMgZXJyb3JcIiwgcmVzcG9uc2UuZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvclJlc3BvbnNlKHJlc3BvbnNlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGUubm9uY2UgJiYgIXJlc3BvbnNlLmlkX3Rva2VuKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogRXhwZWN0aW5nIGlkX3Rva2VuIGluIHJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGlkX3Rva2VuIGluIHJlc3BvbnNlXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3RhdGUubm9uY2UgJiYgcmVzcG9uc2UuaWRfdG9rZW4pIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBOb3QgZXhwZWN0aW5nIGlkX3Rva2VuIGluIHJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgaWRfdG9rZW4gaW4gcmVzcG9uc2VcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlLmNvZGVfdmVyaWZpZXIgJiYgIXJlc3BvbnNlLmNvZGUpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zOiBFeHBlY3RpbmcgY29kZSBpbiByZXNwb25zZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBjb2RlIGluIHJlc3BvbnNlXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3RhdGUuY29kZV92ZXJpZmllciAmJiByZXNwb25zZS5jb2RlKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc1NpZ25pblBhcmFtczogTm90IGV4cGVjdGluZyBjb2RlIGluIHJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgY29kZSBpbiByZXNwb25zZVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3BvbnNlLnNjb3BlKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGVyZSdzIG5vIHNjb3BlIG9uIHRoZSByZXNwb25zZSwgdGhlbiBhc3N1bWUgYWxsIHNjb3BlcyBncmFudGVkIChwZXItc3BlYykgYW5kIGNvcHkgb3ZlciBzY29wZXMgZnJvbSBvcmlnaW5hbCByZXF1ZXN0XG4gICAgICAgICAgICByZXNwb25zZS5zY29wZSA9IHN0YXRlLnNjb3BlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgX3Byb2Nlc3NDbGFpbXMoc3RhdGUsIHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5pc09wZW5JZENvbm5lY3QpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ2xhaW1zOiByZXNwb25zZSBpcyBPSURDLCBwcm9jZXNzaW5nIGNsYWltc1wiKTtcblxuICAgICAgICAgICAgcmVzcG9uc2UucHJvZmlsZSA9IHRoaXMuX2ZpbHRlclByb3RvY29sQ2xhaW1zKHJlc3BvbnNlLnByb2ZpbGUpO1xuXG4gICAgICAgICAgICBpZiAoc3RhdGUuc2tpcFVzZXJJbmZvICE9PSB0cnVlICYmIHRoaXMuX3NldHRpbmdzLmxvYWRVc2VySW5mbyAmJiByZXNwb25zZS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NsYWltczogbG9hZGluZyB1c2VyIGluZm9cIik7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdXNlckluZm9TZXJ2aWNlLmdldENsYWltcyhyZXNwb25zZS5hY2Nlc3NfdG9rZW4pLnRoZW4oY2xhaW1zID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXM6IHVzZXIgaW5mbyBjbGFpbXMgcmVjZWl2ZWQgZnJvbSB1c2VyIGluZm8gZW5kcG9pbnRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsYWltcy5zdWIgIT09IHJlc3BvbnNlLnByb2ZpbGUuc3ViKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NsYWltczogc3ViIGZyb20gdXNlciBpbmZvIGVuZHBvaW50IGRvZXMgbm90IG1hdGNoIHN1YiBpbiBhY2Nlc3NfdG9rZW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwic3ViIGZyb20gdXNlciBpbmZvIGVuZHBvaW50IGRvZXMgbm90IG1hdGNoIHN1YiBpbiBhY2Nlc3NfdG9rZW5cIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucHJvZmlsZSA9IHRoaXMuX21lcmdlQ2xhaW1zKHJlc3BvbnNlLnByb2ZpbGUsIGNsYWltcyk7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ2xhaW1zOiB1c2VyIGluZm8gY2xhaW1zIHJlY2VpdmVkLCB1cGRhdGVkIHByb2ZpbGU6XCIsIHJlc3BvbnNlLnByb2ZpbGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ2xhaW1zOiBub3QgbG9hZGluZyB1c2VyIGluZm9cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NsYWltczogcmVzcG9uc2UgaXMgbm90IE9JREMsIG5vdCBwcm9jZXNzaW5nIGNsYWltc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIF9tZXJnZUNsYWltcyhjbGFpbXMxLCBjbGFpbXMyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBjbGFpbXMxKTtcblxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIGNsYWltczIpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBjbGFpbXMyW25hbWVdO1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBbdmFsdWVzXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHRbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0W25hbWVdKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0W25hbWVdLmluZGV4T2YodmFsdWUpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W25hbWVdLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdFtuYW1lXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IHRoaXMuX21lcmdlQ2xhaW1zKHJlc3VsdFtuYW1lXSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IFtyZXN1bHRbbmFtZV0sIHZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgX2ZpbHRlclByb3RvY29sQ2xhaW1zKGNsYWltcykge1xuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyUHJvdG9jb2xDbGFpbXMsIGluY29taW5nIGNsYWltczpcIiwgY2xhaW1zKTtcblxuICAgICAgICB2YXIgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgY2xhaW1zKTtcblxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MuX2ZpbHRlclByb3RvY29sQ2xhaW1zKSB7XG4gICAgICAgICAgICBQcm90b2NvbENsYWltcy5mb3JFYWNoKHR5cGUgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRbdHlwZV07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlclByb3RvY29sQ2xhaW1zOiBwcm90b2NvbCBjbGFpbXMgZmlsdGVyZWRcIiwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9maWx0ZXJQcm90b2NvbENsYWltczogcHJvdG9jb2wgY2xhaW1zIG5vdCBmaWx0ZXJlZFwiKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBfdmFsaWRhdGVUb2tlbnMoc3RhdGUsIHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5jb2RlKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVUb2tlbnM6IFZhbGlkYXRpbmcgY29kZVwiKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzQ29kZShzdGF0ZSwgcmVzcG9uc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLmlkX3Rva2VuKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlVG9rZW5zOiBWYWxpZGF0aW5nIGlkX3Rva2VuIGFuZCBhY2Nlc3NfdG9rZW5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbkFuZEFjY2Vzc1Rva2VuKHN0YXRlLCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZVRva2VuczogVmFsaWRhdGluZyBpZF90b2tlblwiKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUlkVG9rZW4oc3RhdGUsIHJlc3BvbnNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZVRva2VuczogTm8gY29kZSB0byBwcm9jZXNzIG9yIGlkX3Rva2VuIHRvIHZhbGlkYXRlXCIpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICBfcHJvY2Vzc0NvZGUoc3RhdGUsIHJlc3BvbnNlKSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgY2xpZW50X2lkOiBzdGF0ZS5jbGllbnRfaWQsXG4gICAgICAgICAgICBjbGllbnRfc2VjcmV0OiBzdGF0ZS5jbGllbnRfc2VjcmV0LFxuICAgICAgICAgICAgY29kZSA6IHJlc3BvbnNlLmNvZGUsXG4gICAgICAgICAgICByZWRpcmVjdF91cmk6IHN0YXRlLnJlZGlyZWN0X3VyaSxcbiAgICAgICAgICAgIGNvZGVfdmVyaWZpZXI6IHN0YXRlLmNvZGVfdmVyaWZpZXJcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoc3RhdGUuZXh0cmFUb2tlblBhcmFtcyAmJiB0eXBlb2Yoc3RhdGUuZXh0cmFUb2tlblBhcmFtcykgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlcXVlc3QsIHN0YXRlLmV4dHJhVG9rZW5QYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW5DbGllbnQuZXhjaGFuZ2VDb2RlKHJlcXVlc3QpLnRoZW4odG9rZW5SZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcih2YXIga2V5IGluIHRva2VuUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZVtrZXldID0gdG9rZW5SZXNwb25zZVtrZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuaWRfdG9rZW4pIHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NvZGU6IHRva2VuIHJlc3BvbnNlIHN1Y2Nlc3NmdWwsIHByb2Nlc3NpbmcgaWRfdG9rZW5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbkF0dHJpYnV0ZXMoc3RhdGUsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzQ29kZTogdG9rZW4gcmVzcG9uc2Ugc3VjY2Vzc2Z1bCwgcmV0dXJuaW5nIHJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzKHN0YXRlLCByZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldElzc3VlcigpLnRoZW4oaXNzdWVyID0+IHtcblxuICAgICAgICAgICAgbGV0IGF1ZGllbmNlID0gc3RhdGUuY2xpZW50X2lkO1xuICAgICAgICAgICAgbGV0IGNsb2NrU2tld0luU2Vjb25kcyA9IHRoaXMuX3NldHRpbmdzLmNsb2NrU2tldztcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzOiBWYWxpZGFpbmcgSldUIGF0dHJpYnV0ZXM7IHVzaW5nIGNsb2NrIHNrZXcgKGluIHNlY29uZHMpIG9mOiBcIiwgY2xvY2tTa2V3SW5TZWNvbmRzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pvc2VVdGlsLnZhbGlkYXRlSnd0QXR0cmlidXRlcyhyZXNwb25zZS5pZF90b2tlbiwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3SW5TZWNvbmRzKS50aGVuKHBheWxvYWQgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLm5vbmNlICYmIHN0YXRlLm5vbmNlICE9PSBwYXlsb2FkLm5vbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW5BdHRyaWJ1dGVzOiBJbnZhbGlkIG5vbmNlIGluIGlkX3Rva2VuXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBub25jZSBpbiBpZF90b2tlblwiKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFwYXlsb2FkLnN1Yikge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuQXR0cmlidXRlczogTm8gc3ViIHByZXNlbnQgaW4gaWRfdG9rZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzdWIgcHJlc2VudCBpbiBpZF90b2tlblwiKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UucHJvZmlsZSA9IHBheWxvYWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF92YWxpZGF0ZUlkVG9rZW5BbmRBY2Nlc3NUb2tlbihzdGF0ZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbihzdGF0ZSwgcmVzcG9uc2UpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlQWNjZXNzVG9rZW4ocmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdmFsaWRhdGVJZFRva2VuKHN0YXRlLCByZXNwb25zZSkge1xuICAgICAgICBpZiAoIXN0YXRlLm5vbmNlKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBObyBub25jZSBvbiBzdGF0ZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBub25jZSBvbiBzdGF0ZVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgand0ID0gdGhpcy5fam9zZVV0aWwucGFyc2VKd3QocmVzcG9uc2UuaWRfdG9rZW4pO1xuICAgICAgICBpZiAoIWp3dCB8fCAhand0LmhlYWRlciB8fCAhand0LnBheWxvYWQpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IEZhaWxlZCB0byBwYXJzZSBpZF90b2tlblwiLCBqd3QpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byBwYXJzZSBpZF90b2tlblwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGUubm9uY2UgIT09IGp3dC5wYXlsb2FkLm5vbmNlKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBJbnZhbGlkIG5vbmNlIGluIGlkX3Rva2VuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgbm9uY2UgaW4gaWRfdG9rZW5cIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGtpZCA9IGp3dC5oZWFkZXIua2lkO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0SXNzdWVyKCkudGhlbihpc3N1ZXIgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogUmVjZWl2ZWQgaXNzdWVyXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzKCkudGhlbihrZXlzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogTm8gc2lnbmluZyBrZXlzIGZyb20gbWV0YWRhdGFcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzaWduaW5nIGtleXMgZnJvbSBtZXRhZGF0YVwiKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbjogUmVjZWl2ZWQgc2lnbmluZyBrZXlzXCIpO1xuICAgICAgICAgICAgICAgIGxldCBrZXk7XG4gICAgICAgICAgICAgICAgaWYgKCFraWQpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5cyA9IHRoaXMuX2ZpbHRlckJ5QWxnKGtleXMsIGp3dC5oZWFkZXIuYWxnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBObyBraWQgZm91bmQgaW4gaWRfdG9rZW4gYW5kIG1vcmUgdGhhbiBvbmUga2V5IGZvdW5kIGluIG1ldGFkYXRhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGtpZCBmb3VuZCBpbiBpZF90b2tlbiBhbmQgbW9yZSB0aGFuIG9uZSBrZXkgZm91bmQgaW4gbWV0YWRhdGFcIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2lkIGlzIG1hbmRhdG9yeSBvbmx5IHdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIGtleXMgaW4gdGhlIHJlZmVyZW5jZWQgSldLIFNldCBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VlIGh0dHA6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWNvcmUtMV8wLmh0bWwjU2lnbmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5c1swXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5cy5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkua2lkID09PSBraWQ7XG4gICAgICAgICAgICAgICAgICAgIH0pWzBdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IE5vIGtleSBtYXRjaGluZyBraWQgb3IgYWxnIGZvdW5kIGluIHNpZ25pbmcga2V5c1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGtleSBtYXRjaGluZyBraWQgb3IgYWxnIGZvdW5kIGluIHNpZ25pbmcga2V5c1wiKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGF1ZGllbmNlID0gc3RhdGUuY2xpZW50X2lkO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNsb2NrU2tld0luU2Vjb25kcyA9IHRoaXMuX3NldHRpbmdzLmNsb2NrU2tldztcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuOiBWYWxpZGFpbmcgSldUOyB1c2luZyBjbG9jayBza2V3IChpbiBzZWNvbmRzKSBvZjogXCIsIGNsb2NrU2tld0luU2Vjb25kcyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fam9zZVV0aWwudmFsaWRhdGVKd3QocmVzcG9uc2UuaWRfdG9rZW4sIGtleSwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3SW5TZWNvbmRzKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IEpXVCB2YWxpZGF0aW9uIHN1Y2Nlc3NmdWxcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFqd3QucGF5bG9hZC5zdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUlkVG9rZW46IE5vIHN1YiBwcmVzZW50IGluIGlkX3Rva2VuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHN1YiBwcmVzZW50IGluIGlkX3Rva2VuXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnByb2ZpbGUgPSBqd3QucGF5bG9hZDtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2ZpbHRlckJ5QWxnKGtleXMsIGFsZyl7XG4gICAgICAgIHZhciBrdHkgPSBudWxsO1xuICAgICAgICBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJSU1wiKSkge1xuICAgICAgICAgICAga3R5ID0gXCJSU0FcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhbGcuc3RhcnRzV2l0aChcIlBTXCIpKSB7XG4gICAgICAgICAgICBrdHkgPSBcIlBTXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJFU1wiKSkge1xuICAgICAgICAgICAga3R5ID0gXCJFQ1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlckJ5QWxnOiBhbGcgbm90IHN1cHBvcnRlZDogXCIsIGFsZyk7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyQnlBbGc6IExvb2tpbmcgZm9yIGtleXMgdGhhdCBtYXRjaCBrdHk6IFwiLCBrdHkpO1xuXG4gICAgICAgIGtleXMgPSBrZXlzLmZpbHRlcihrZXkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGtleS5rdHkgPT09IGt0eTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlckJ5QWxnOiBOdW1iZXIgb2Yga2V5cyB0aGF0IG1hdGNoIGt0eTogXCIsIGt0eSwga2V5cy5sZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH1cblxuICAgIF92YWxpZGF0ZUFjY2Vzc1Rva2VuKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghcmVzcG9uc2UucHJvZmlsZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IE5vIHByb2ZpbGUgbG9hZGVkIGZyb20gaWRfdG9rZW5cIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gcHJvZmlsZSBsb2FkZWQgZnJvbSBpZF90b2tlblwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3BvbnNlLnByb2ZpbGUuYXRfaGFzaCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IE5vIGF0X2hhc2ggaW4gaWRfdG9rZW5cIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gYXRfaGFzaCBpbiBpZF90b2tlblwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3BvbnNlLmlkX3Rva2VuKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogTm8gaWRfdG9rZW5cIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gaWRfdG9rZW5cIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGp3dCA9IHRoaXMuX2pvc2VVdGlsLnBhcnNlSnd0KHJlc3BvbnNlLmlkX3Rva2VuKTtcbiAgICAgICAgaWYgKCFqd3QgfHwgIWp3dC5oZWFkZXIpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBGYWlsZWQgdG8gcGFyc2UgaWRfdG9rZW5cIiwgand0KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgaWRfdG9rZW5cIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhhc2hBbGcgPSBqd3QuaGVhZGVyLmFsZztcbiAgICAgICAgaWYgKCFoYXNoQWxnIHx8IGhhc2hBbGcubGVuZ3RoICE9PSA1KSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogVW5zdXBwb3J0ZWQgYWxnOlwiLCBoYXNoQWxnKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBhbGc6IFwiICsgaGFzaEFsZykpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhhc2hCaXRzID0gaGFzaEFsZy5zdWJzdHIoMiwgMyk7XG4gICAgICAgIGlmICghaGFzaEJpdHMpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBVbnN1cHBvcnRlZCBhbGc6XCIsIGhhc2hBbGcsIGhhc2hCaXRzKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBhbGc6IFwiICsgaGFzaEFsZykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGFzaEJpdHMgPSBwYXJzZUludChoYXNoQml0cyk7XG4gICAgICAgIGlmIChoYXNoQml0cyAhPT0gMjU2ICYmIGhhc2hCaXRzICE9PSAzODQgJiYgaGFzaEJpdHMgIT09IDUxMikge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IFVuc3VwcG9ydGVkIGFsZzpcIiwgaGFzaEFsZywgaGFzaEJpdHMpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGFsZzogXCIgKyBoYXNoQWxnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2hhID0gXCJzaGFcIiArIGhhc2hCaXRzO1xuICAgICAgICB2YXIgaGFzaCA9IHRoaXMuX2pvc2VVdGlsLmhhc2hTdHJpbmcocmVzcG9uc2UuYWNjZXNzX3Rva2VuLCBzaGEpO1xuICAgICAgICBpZiAoIWhhc2gpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuOiBhY2Nlc3NfdG9rZW4gaGFzaCBmYWlsZWQ6XCIsIHNoYSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHZhbGlkYXRlIGF0X2hhc2hcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxlZnQgPSBoYXNoLnN1YnN0cigwLCBoYXNoLmxlbmd0aCAvIDIpO1xuICAgICAgICB2YXIgbGVmdF9iNjR1ID0gdGhpcy5fam9zZVV0aWwuaGV4VG9CYXNlNjRVcmwobGVmdCk7XG4gICAgICAgIGlmIChsZWZ0X2I2NHUgIT09IHJlc3BvbnNlLnByb2ZpbGUuYXRfaGFzaCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlQWNjZXNzVG9rZW46IEZhaWxlZCB0byB2YWxpZGF0ZSBhdF9oYXNoXCIsIGxlZnRfYjY0dSwgcmVzcG9uc2UucHJvZmlsZS5hdF9oYXNoKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdmFsaWRhdGUgYXRfaGFzaFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlbjogc3VjY2Vzc1wiKTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBDaGVja1Nlc3Npb25JRnJhbWUgfSBmcm9tICcuL0NoZWNrU2Vzc2lvbklGcmFtZS5qcyc7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICcuL0dsb2JhbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBTZXNzaW9uTW9uaXRvciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih1c2VyTWFuYWdlciwgQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvciA9IENoZWNrU2Vzc2lvbklGcmFtZSwgdGltZXIgPSBHbG9iYWwudGltZXIpIHtcbiAgICAgICAgaWYgKCF1c2VyTWFuYWdlcikge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2Vzc2lvbk1vbml0b3IuY3RvcjogTm8gdXNlciBtYW5hZ2VyIHBhc3NlZCB0byBTZXNzaW9uTW9uaXRvclwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzZXJNYW5hZ2VyXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIgPSB1c2VyTWFuYWdlcjtcbiAgICAgICAgdGhpcy5fQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvciA9IENoZWNrU2Vzc2lvbklGcmFtZUN0b3I7XG4gICAgICAgIHRoaXMuX3RpbWVyID0gdGltZXI7XG5cbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLmFkZFVzZXJMb2FkZWQodGhpcy5fc3RhcnQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5hZGRVc2VyVW5sb2FkZWQodGhpcy5fc3RvcC5iaW5kKHRoaXMpKTtcblxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5nZXRVc2VyKCkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIC8vIGRvaW5nIHRoaXMgbWFudWFsbHkgaGVyZSBzaW5jZSBjYWxsaW5nIGdldFVzZXIgXG4gICAgICAgICAgICAvLyBkb2Vzbid0IHRyaWdnZXIgbG9hZCBldmVudC5cbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQodXNlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9zZXR0aW5ncy5tb25pdG9yQW5vbnltb3VzU2Vzc2lvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1cygpLnRoZW4oc2Vzc2lvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0bXBVc2VyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbl9zdGF0ZSA6IHNlc3Npb24uc2Vzc2lvbl9zdGF0ZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvbi5zdWIgJiYgc2Vzc2lvbi5zaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcFVzZXIucHJvZmlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWI6IHNlc3Npb24uc3ViLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZDogc2Vzc2lvbi5zaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQodG1wVXNlcik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2F0Y2ggdG8gc3VwcHJlc3MgZXJyb3JzIHNpbmNlIHdlJ3JlIGluIGEgY3RvclxuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJTZXNzaW9uTW9uaXRvciBjdG9yOiBlcnJvciBmcm9tIHF1ZXJ5U2Vzc2lvblN0YXR1czpcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgLy8gY2F0Y2ggdG8gc3VwcHJlc3MgZXJyb3JzIHNpbmNlIHdlJ3JlIGluIGEgY3RvclxuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2Vzc2lvbk1vbml0b3IgY3RvcjogZXJyb3IgZnJvbSBnZXRVc2VyOlwiLCBlcnIubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBfc2V0dGluZ3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTWFuYWdlci5zZXR0aW5ncztcbiAgICB9XG4gICAgZ2V0IF9tZXRhZGF0YVNlcnZpY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTWFuYWdlci5tZXRhZGF0YVNlcnZpY2U7XG4gICAgfVxuICAgIGdldCBfY2xpZW50X2lkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xuICAgIH1cbiAgICBnZXQgX2NoZWNrU2Vzc2lvbkludGVydmFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3MuY2hlY2tTZXNzaW9uSW50ZXJ2YWw7XG4gICAgfVxuICAgIGdldCBfc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5zdG9wQ2hlY2tTZXNzaW9uT25FcnJvcjtcbiAgICB9XG5cbiAgICBfc3RhcnQodXNlcikge1xuICAgICAgICBsZXQgc2Vzc2lvbl9zdGF0ZSA9IHVzZXIuc2Vzc2lvbl9zdGF0ZTtcblxuICAgICAgICBpZiAoc2Vzc2lvbl9zdGF0ZSkge1xuICAgICAgICAgICAgaWYgKHVzZXIucHJvZmlsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N1YiA9IHVzZXIucHJvZmlsZS5zdWI7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2lkID0gdXNlci5wcm9maWxlLnNpZDtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ6IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb25fc3RhdGUsIFwiLCBzdWI6XCIsIHRoaXMuX3N1Yik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWIgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2lkID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9zdGFydDogc2Vzc2lvbl9zdGF0ZTpcIiwgc2Vzc2lvbl9zdGF0ZSwgXCIsIGFub255bW91cyB1c2VyXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRDaGVja1Nlc3Npb25JZnJhbWUoKS50aGVuKHVybCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9zdGFydDogSW5pdGlhbGl6aW5nIGNoZWNrIHNlc3Npb24gaWZyYW1lXCIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGllbnRfaWQgPSB0aGlzLl9jbGllbnRfaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLl9jaGVja1Nlc3Npb25JbnRlcnZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdG9wT25FcnJvciA9IHRoaXMuX3N0b3BDaGVja1Nlc3Npb25PbkVycm9yO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUgPSBuZXcgdGhpcy5fQ2hlY2tTZXNzaW9uSUZyYW1lQ3Rvcih0aGlzLl9jYWxsYmFjay5iaW5kKHRoaXMpLCBjbGllbnRfaWQsIHVybCwgaW50ZXJ2YWwsIHN0b3BPbkVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5sb2FkKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lLnN0YXJ0KHNlc3Npb25fc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cud2FybihcIlNlc3Npb25Nb25pdG9yLl9zdGFydDogTm8gY2hlY2sgc2Vzc2lvbiBpZnJhbWUgZm91bmQgaW4gdGhlIG1ldGFkYXRhXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2F0Y2ggdG8gc3VwcHJlc3MgZXJyb3JzIHNpbmNlIHdlJ3JlIGluIG5vbi1wcm9taXNlIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlNlc3Npb25Nb25pdG9yLl9zdGFydDogRXJyb3IgZnJvbSBnZXRDaGVja1Nlc3Npb25JZnJhbWU6XCIsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5zdGFydChzZXNzaW9uX3N0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9zdG9wKCkge1xuICAgICAgICB0aGlzLl9zdWIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3NpZCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAodGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fc3RvcFwiKTtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5zdG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubW9uaXRvckFub255bW91c1Nlc3Npb24pIHtcbiAgICAgICAgICAgIC8vIHVzaW5nIGEgdGltZXIgdG8gZGVsYXkgcmUtaW5pdGlhbGl6YXRpb24gdG8gYXZvaWQgcmFjZSBjb25kaXRpb25zIGR1cmluZyBzaWdub3V0XG4gICAgICAgICAgICBsZXQgdGltZXJIYW5kbGUgPSB0aGlzLl90aW1lci5zZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuX3RpbWVyLmNsZWFySW50ZXJ2YWwodGltZXJIYW5kbGUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzKCkudGhlbihzZXNzaW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRtcFVzZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uX3N0YXRlIDogc2Vzc2lvbi5zZXNzaW9uX3N0YXRlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXNzaW9uLnN1YiAmJiBzZXNzaW9uLnNpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG1wVXNlci5wcm9maWxlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Yjogc2Vzc2lvbi5zdWIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lkOiBzZXNzaW9uLnNpZFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFydCh0bXBVc2VyKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYXRjaCB0byBzdXBwcmVzcyBlcnJvcnMgc2luY2Ugd2UncmUgaW4gYSBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJTZXNzaW9uTW9uaXRvcjogZXJyb3IgZnJvbSBxdWVyeVNlc3Npb25TdGF0dXM6XCIsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1cygpLnRoZW4oc2Vzc2lvbiA9PiB7XG4gICAgICAgICAgICB2YXIgcmFpc2VFdmVudCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChzZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlc3Npb24uc3ViID09PSB0aGlzLl9zdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmFpc2VFdmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JRnJhbWUuc3RhcnQoc2Vzc2lvbi5zZXNzaW9uX3N0YXRlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Vzc2lvbi5zaWQgPT09IHRoaXMuX3NpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTYW1lIHN1YiBzdGlsbCBsb2dnZWQgaW4gYXQgT1AsIHJlc3RhcnRpbmcgY2hlY2sgc2Vzc2lvbiBpZnJhbWU7IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb24uc2Vzc2lvbl9zdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s6IFNhbWUgc3ViIHN0aWxsIGxvZ2dlZCBpbiBhdCBPUCwgc2Vzc2lvbiBzdGF0ZSBoYXMgY2hhbmdlZCwgcmVzdGFydGluZyBjaGVjayBzZXNzaW9uIGlmcmFtZTsgc2Vzc2lvbl9zdGF0ZTpcIiwgc2Vzc2lvbi5zZXNzaW9uX3N0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5fcmFpc2VVc2VyU2Vzc2lvbkNoYW5nZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBEaWZmZXJlbnQgc3ViamVjdCBzaWduZWQgaW50byBPUDpcIiwgc2Vzc2lvbi5zdWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogU3ViamVjdCBubyBsb25nZXIgc2lnbmVkIGludG8gT1BcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyYWlzZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N1Yikge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s6IFNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazsgcmFpc2luZyBzaWduZWQgb3V0IGV2ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlVXNlclNpZ25lZE91dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrOiBTZXNzaW9uTW9uaXRvci5fY2FsbGJhY2s7IHJhaXNpbmcgc2lnbmVkIGluIGV2ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlVXNlclNpZ25lZEluKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3N1Yikge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazogRXJyb3IgY2FsbGluZyBxdWVyeUN1cnJlbnRTaWduaW5TZXNzaW9uOyByYWlzaW5nIHNpZ25lZCBvdXQgZXZlbnRcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5fcmFpc2VVc2VyU2lnbmVkT3V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCB7IFVybFV0aWxpdHkgfSBmcm9tICcuL1VybFV0aWxpdHkuanMnO1xuaW1wb3J0IHsgU2lnbmluU3RhdGUgfSBmcm9tICcuL1NpZ25pblN0YXRlLmpzJztcblxuZXhwb3J0IGNsYXNzIFNpZ25pblJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgLy8gbWFuZGF0b3J5XG4gICAgICAgIHVybCwgY2xpZW50X2lkLCByZWRpcmVjdF91cmksIHJlc3BvbnNlX3R5cGUsIHNjb3BlLCBhdXRob3JpdHksXG4gICAgICAgIC8vIG9wdGlvbmFsXG4gICAgICAgIGRhdGEsIHByb21wdCwgZGlzcGxheSwgbWF4X2FnZSwgdWlfbG9jYWxlcywgaWRfdG9rZW5faGludCwgbG9naW5faGludCwgYWNyX3ZhbHVlcywgcmVzb3VyY2UsIHJlc3BvbnNlX21vZGUsXG4gICAgICAgIHJlcXVlc3QsIHJlcXVlc3RfdXJpLCBleHRyYVF1ZXJ5UGFyYW1zLCByZXF1ZXN0X3R5cGUsIGNsaWVudF9zZWNyZXQsIGV4dHJhVG9rZW5QYXJhbXMsIHNraXBVc2VySW5mb1xuICAgIH0pIHtcbiAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNpZ25pblJlcXVlc3QuY3RvcjogTm8gdXJsIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVybFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNsaWVudF9pZCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lnbmluUmVxdWVzdC5jdG9yOiBObyBjbGllbnRfaWQgcGFzc2VkXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2xpZW50X2lkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVkaXJlY3RfdXJpKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIHJlZGlyZWN0X3VyaSBwYXNzZWRcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZWRpcmVjdF91cmlcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNwb25zZV90eXBlKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIHJlc3BvbnNlX3R5cGUgcGFzc2VkXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVzcG9uc2VfdHlwZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNjb3BlKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIHNjb3BlIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNjb3BlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTaWduaW5SZXF1ZXN0LmN0b3I6IE5vIGF1dGhvcml0eSBwYXNzZWRcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRob3JpdHlcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb2lkYyA9IFNpZ25pblJlcXVlc3QuaXNPaWRjKHJlc3BvbnNlX3R5cGUpO1xuICAgICAgICBsZXQgY29kZSA9IFNpZ25pblJlcXVlc3QuaXNDb2RlKHJlc3BvbnNlX3R5cGUpO1xuXG4gICAgICAgIGlmICghcmVzcG9uc2VfbW9kZSkge1xuICAgICAgICAgICAgcmVzcG9uc2VfbW9kZSA9IFNpZ25pblJlcXVlc3QuaXNDb2RlKHJlc3BvbnNlX3R5cGUpID8gXCJxdWVyeVwiIDogbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgU2lnbmluU3RhdGUoeyBub25jZTogb2lkYywgXG4gICAgICAgICAgICBkYXRhLCBjbGllbnRfaWQsIGF1dGhvcml0eSwgcmVkaXJlY3RfdXJpLCBcbiAgICAgICAgICAgIGNvZGVfdmVyaWZpZXI6IGNvZGUsIFxuICAgICAgICAgICAgcmVxdWVzdF90eXBlLCByZXNwb25zZV9tb2RlLFxuICAgICAgICAgICAgY2xpZW50X3NlY3JldCwgc2NvcGUsIGV4dHJhVG9rZW5QYXJhbXMsIHNraXBVc2VySW5mbyB9KTtcblxuICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcImNsaWVudF9pZFwiLCBjbGllbnRfaWQpO1xuICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInJlZGlyZWN0X3VyaVwiLCByZWRpcmVjdF91cmkpO1xuICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInJlc3BvbnNlX3R5cGVcIiwgcmVzcG9uc2VfdHlwZSk7XG4gICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwic2NvcGVcIiwgc2NvcGUpO1xuXG4gICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwic3RhdGVcIiwgdGhpcy5zdGF0ZS5pZCk7XG4gICAgICAgIGlmIChvaWRjKSB7XG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcIm5vbmNlXCIsIHRoaXMuc3RhdGUubm9uY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2RlKSB7XG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcImNvZGVfY2hhbGxlbmdlXCIsIHRoaXMuc3RhdGUuY29kZV9jaGFsbGVuZ2UpO1xuICAgICAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJjb2RlX2NoYWxsZW5nZV9tZXRob2RcIiwgXCJTMjU2XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wdGlvbmFsID0geyBwcm9tcHQsIGRpc3BsYXksIG1heF9hZ2UsIHVpX2xvY2FsZXMsIGlkX3Rva2VuX2hpbnQsIGxvZ2luX2hpbnQsIGFjcl92YWx1ZXMsIHJlc291cmNlLCByZXF1ZXN0LCByZXF1ZXN0X3VyaSwgcmVzcG9uc2VfbW9kZSB9O1xuICAgICAgICBmb3IobGV0IGtleSBpbiBvcHRpb25hbCl7XG4gICAgICAgICAgICBpZiAob3B0aW9uYWxba2V5XSkge1xuICAgICAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIGtleSwgb3B0aW9uYWxba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IGtleSBpbiBleHRyYVF1ZXJ5UGFyYW1zKXtcbiAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIGtleSwgZXh0cmFRdWVyeVBhcmFtc1trZXldKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzT2lkYyhyZXNwb25zZV90eXBlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZXNwb25zZV90eXBlLnNwbGl0KC9cXHMrL2cpLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbSA9PT0gXCJpZF90b2tlblwiO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICEhKHJlc3VsdFswXSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzT0F1dGgocmVzcG9uc2VfdHlwZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVzcG9uc2VfdHlwZS5zcGxpdCgvXFxzKy9nKS5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT09IFwidG9rZW5cIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAhIShyZXN1bHRbMF0pO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgaXNDb2RlKHJlc3BvbnNlX3R5cGUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlX3R5cGUuc3BsaXQoL1xccysvZykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtID09PSBcImNvZGVcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAhIShyZXN1bHRbMF0pO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IFVybFV0aWxpdHkgfSBmcm9tICcuL1VybFV0aWxpdHkuanMnO1xuXG5jb25zdCBPaWRjU2NvcGUgPSBcIm9wZW5pZFwiO1xuXG5leHBvcnQgY2xhc3MgU2lnbmluUmVzcG9uc2Uge1xuICAgIGNvbnN0cnVjdG9yKHVybCwgZGVsaW1pdGVyID0gXCIjXCIpIHtcblxuICAgICAgICB2YXIgdmFsdWVzID0gVXJsVXRpbGl0eS5wYXJzZVVybEZyYWdtZW50KHVybCwgZGVsaW1pdGVyKTtcblxuICAgICAgICB0aGlzLmVycm9yID0gdmFsdWVzLmVycm9yO1xuICAgICAgICB0aGlzLmVycm9yX2Rlc2NyaXB0aW9uID0gdmFsdWVzLmVycm9yX2Rlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmVycm9yX3VyaSA9IHZhbHVlcy5lcnJvcl91cmk7XG5cbiAgICAgICAgdGhpcy5jb2RlID0gdmFsdWVzLmNvZGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB2YWx1ZXMuc3RhdGU7XG4gICAgICAgIHRoaXMuaWRfdG9rZW4gPSB2YWx1ZXMuaWRfdG9rZW47XG4gICAgICAgIHRoaXMuc2Vzc2lvbl9zdGF0ZSA9IHZhbHVlcy5zZXNzaW9uX3N0YXRlO1xuICAgICAgICB0aGlzLmFjY2Vzc190b2tlbiA9IHZhbHVlcy5hY2Nlc3NfdG9rZW47XG4gICAgICAgIHRoaXMudG9rZW5fdHlwZSA9IHZhbHVlcy50b2tlbl90eXBlO1xuICAgICAgICB0aGlzLnNjb3BlID0gdmFsdWVzLnNjb3BlO1xuICAgICAgICB0aGlzLnByb2ZpbGUgPSB1bmRlZmluZWQ7IC8vIHdpbGwgYmUgc2V0IGZyb20gUmVzcG9uc2VWYWxpZGF0b3JcblxuICAgICAgICB0aGlzLmV4cGlyZXNfaW4gPSB2YWx1ZXMuZXhwaXJlc19pbjtcbiAgICB9XG5cbiAgICBnZXQgZXhwaXJlc19pbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZXhwaXJlc19hdCkge1xuICAgICAgICAgICAgbGV0IG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4cGlyZXNfYXQgLSBub3c7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc2V0IGV4cGlyZXNfaW4odmFsdWUpe1xuICAgICAgICBsZXQgZXhwaXJlc19pbiA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBleHBpcmVzX2luID09PSAnbnVtYmVyJyAmJiBleHBpcmVzX2luID4gMCkge1xuICAgICAgICAgICAgbGV0IG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgICAgIHRoaXMuZXhwaXJlc19hdCA9IG5vdyArIGV4cGlyZXNfaW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZXhwaXJlZCgpIHtcbiAgICAgICAgbGV0IGV4cGlyZXNfaW4gPSB0aGlzLmV4cGlyZXNfaW47XG4gICAgICAgIGlmIChleHBpcmVzX2luICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBleHBpcmVzX2luIDw9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBnZXQgc2NvcGVzKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuc2NvcGUgfHwgXCJcIikuc3BsaXQoXCIgXCIpO1xuICAgIH1cblxuICAgIGdldCBpc09wZW5JZENvbm5lY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3Blcy5pbmRleE9mKE9pZGNTY29wZSkgPj0gMCB8fCAhIXRoaXMuaWRfdG9rZW47XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL1N0YXRlLmpzJztcbmltcG9ydCB7IEpvc2VVdGlsIH0gZnJvbSAnLi9Kb3NlVXRpbC5qcyc7XG5pbXBvcnQgcmFuZG9tIGZyb20gJy4vcmFuZG9tLmpzJztcblxuZXhwb3J0IGNsYXNzIFNpZ25pblN0YXRlIGV4dGVuZHMgU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKHtub25jZSwgYXV0aG9yaXR5LCBjbGllbnRfaWQsIHJlZGlyZWN0X3VyaSwgY29kZV92ZXJpZmllciwgcmVzcG9uc2VfbW9kZSwgY2xpZW50X3NlY3JldCwgc2NvcGUsIGV4dHJhVG9rZW5QYXJhbXMsIHNraXBVc2VySW5mb30gPSB7fSkge1xuICAgICAgICBzdXBlcihhcmd1bWVudHNbMF0pO1xuXG4gICAgICAgIGlmIChub25jZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbm9uY2UgPSByYW5kb20oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub25jZSkge1xuICAgICAgICAgICAgdGhpcy5fbm9uY2UgPSBub25jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2RlX3ZlcmlmaWVyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyByYW5kb20oKSBwcm9kdWNlcyAzMiBsZW5ndGhcbiAgICAgICAgICAgIHRoaXMuX2NvZGVfdmVyaWZpZXIgPSByYW5kb20oKSArIHJhbmRvbSgpICsgcmFuZG9tKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29kZV92ZXJpZmllcikge1xuICAgICAgICAgICAgdGhpcy5fY29kZV92ZXJpZmllciA9IGNvZGVfdmVyaWZpZXI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmNvZGVfdmVyaWZpZXIpIHtcbiAgICAgICAgICAgIGxldCBoYXNoID0gSm9zZVV0aWwuaGFzaFN0cmluZyh0aGlzLmNvZGVfdmVyaWZpZXIsIFwiU0hBMjU2XCIpO1xuICAgICAgICAgICAgdGhpcy5fY29kZV9jaGFsbGVuZ2UgPSBKb3NlVXRpbC5oZXhUb0Jhc2U2NFVybChoYXNoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3JlZGlyZWN0X3VyaSA9IHJlZGlyZWN0X3VyaTtcbiAgICAgICAgdGhpcy5fYXV0aG9yaXR5ID0gYXV0aG9yaXR5O1xuICAgICAgICB0aGlzLl9jbGllbnRfaWQgPSBjbGllbnRfaWQ7XG4gICAgICAgIHRoaXMuX3Jlc3BvbnNlX21vZGUgPSByZXNwb25zZV9tb2RlO1xuICAgICAgICB0aGlzLl9jbGllbnRfc2VjcmV0ID0gY2xpZW50X3NlY3JldDtcbiAgICAgICAgdGhpcy5fc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5fZXh0cmFUb2tlblBhcmFtcyA9IGV4dHJhVG9rZW5QYXJhbXM7XG4gICAgICAgIHRoaXMuX3NraXBVc2VySW5mbyA9IHNraXBVc2VySW5mbztcbiAgICB9XG5cbiAgICBnZXQgbm9uY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ub25jZTtcbiAgICB9XG4gICAgZ2V0IGF1dGhvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhvcml0eTtcbiAgICB9XG4gICAgZ2V0IGNsaWVudF9pZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9pZDtcbiAgICB9XG4gICAgZ2V0IHJlZGlyZWN0X3VyaSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZGlyZWN0X3VyaTtcbiAgICB9XG4gICAgZ2V0IGNvZGVfdmVyaWZpZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2RlX3ZlcmlmaWVyO1xuICAgIH1cbiAgICBnZXQgY29kZV9jaGFsbGVuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2RlX2NoYWxsZW5nZTtcbiAgICB9XG4gICAgZ2V0IHJlc3BvbnNlX21vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZV9tb2RlO1xuICAgIH1cbiAgICBnZXQgY2xpZW50X3NlY3JldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9zZWNyZXQ7XG4gICAgfVxuICAgIGdldCBzY29wZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3BlO1xuICAgIH1cbiAgICBnZXQgZXh0cmFUb2tlblBhcmFtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4dHJhVG9rZW5QYXJhbXM7XG4gICAgfVxuICAgIGdldCBza2lwVXNlckluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9za2lwVXNlckluZm87XG4gICAgfVxuICAgIFxuICAgIHRvU3RvcmFnZVN0cmluZygpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiU2lnbmluU3RhdGUudG9TdG9yYWdlU3RyaW5nXCIpO1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICAgICAgICBjcmVhdGVkOiB0aGlzLmNyZWF0ZWQsXG4gICAgICAgICAgICByZXF1ZXN0X3R5cGU6IHRoaXMucmVxdWVzdF90eXBlLFxuICAgICAgICAgICAgbm9uY2U6IHRoaXMubm9uY2UsXG4gICAgICAgICAgICBjb2RlX3ZlcmlmaWVyOiB0aGlzLmNvZGVfdmVyaWZpZXIsXG4gICAgICAgICAgICByZWRpcmVjdF91cmk6IHRoaXMucmVkaXJlY3RfdXJpLFxuICAgICAgICAgICAgYXV0aG9yaXR5OiB0aGlzLmF1dGhvcml0eSxcbiAgICAgICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWQsXG4gICAgICAgICAgICByZXNwb25zZV9tb2RlOiB0aGlzLnJlc3BvbnNlX21vZGUsXG4gICAgICAgICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLmNsaWVudF9zZWNyZXQsXG4gICAgICAgICAgICBzY29wZTogdGhpcy5zY29wZSxcbiAgICAgICAgICAgIGV4dHJhVG9rZW5QYXJhbXMgOiB0aGlzLmV4dHJhVG9rZW5QYXJhbXMsXG4gICAgICAgICAgICBza2lwVXNlckluZm86IHRoaXMuc2tpcFVzZXJJbmZvXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tU3RvcmFnZVN0cmluZyhzdG9yYWdlU3RyaW5nKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlNpZ25pblN0YXRlLmZyb21TdG9yYWdlU3RyaW5nXCIpO1xuICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2Uoc3RvcmFnZVN0cmluZyk7XG4gICAgICAgIHJldHVybiBuZXcgU2lnbmluU3RhdGUoZGF0YSk7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuaW1wb3J0IHsgVXJsVXRpbGl0eSB9IGZyb20gJy4vVXJsVXRpbGl0eS5qcyc7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4vU3RhdGUuanMnO1xuXG5leHBvcnQgY2xhc3MgU2lnbm91dFJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKHt1cmwsIGlkX3Rva2VuX2hpbnQsIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSwgZGF0YSwgZXh0cmFRdWVyeVBhcmFtcywgcmVxdWVzdF90eXBlfSkge1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lnbm91dFJlcXVlc3QuY3RvcjogTm8gdXJsIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVybFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpZF90b2tlbl9oaW50KSB7XG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcImlkX3Rva2VuX2hpbnRcIiwgaWRfdG9rZW5faGludCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpKSB7XG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaVwiLCBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgU3RhdGUoeyBkYXRhLCByZXF1ZXN0X3R5cGUgfSk7XG5cbiAgICAgICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInN0YXRlXCIsIHRoaXMuc3RhdGUuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBrZXkgaW4gZXh0cmFRdWVyeVBhcmFtcyl7XG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBrZXksIGV4dHJhUXVlcnlQYXJhbXNba2V5XSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IFVybFV0aWxpdHkgfSBmcm9tICcuL1VybFV0aWxpdHkuanMnO1xuXG5leHBvcnQgY2xhc3MgU2lnbm91dFJlc3BvbnNlIHtcbiAgICBjb25zdHJ1Y3Rvcih1cmwpIHtcblxuICAgICAgICB2YXIgdmFsdWVzID0gVXJsVXRpbGl0eS5wYXJzZVVybEZyYWdtZW50KHVybCwgXCI/XCIpO1xuXG4gICAgICAgIHRoaXMuZXJyb3IgPSB2YWx1ZXMuZXJyb3I7XG4gICAgICAgIHRoaXMuZXJyb3JfZGVzY3JpcHRpb24gPSB2YWx1ZXMuZXJyb3JfZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZXJyb3JfdXJpID0gdmFsdWVzLmVycm9yX3VyaTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gdmFsdWVzLnN0YXRlO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcblxuZXhwb3J0IGNsYXNzIFNpbGVudFJlbmV3U2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih1c2VyTWFuYWdlcikge1xuICAgICAgICB0aGlzLl91c2VyTWFuYWdlciA9IHVzZXJNYW5hZ2VyO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAoIXRoaXMuX2NhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFjayA9IHRoaXMuX3Rva2VuRXhwaXJpbmcuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5hZGRBY2Nlc3NUb2tlbkV4cGlyaW5nKHRoaXMuX2NhbGxiYWNrKTtcblxuICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHRyaWdnZXIgbG9hZGluZyBvZiB0aGUgdXNlciBzbyB0aGUgZXhwaXJpbmcgZXZlbnRzIGNhbiBiZSBpbml0aWFsaXplZFxuICAgICAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZ2V0VXNlcigpLnRoZW4odXNlcj0+e1xuICAgICAgICAgICAgICAgIC8vIGRlbGliZXJhdGUgbm9wXG4gICAgICAgICAgICB9KS5jYXRjaChlcnI9PntcbiAgICAgICAgICAgICAgICAvLyBjYXRjaCB0byBzdXBwcmVzcyBlcnJvcnMgc2luY2Ugd2UncmUgaW4gYSBjdG9yXG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiU2lsZW50UmVuZXdTZXJ2aWNlLnN0YXJ0OiBFcnJvciBmcm9tIGdldFVzZXI6XCIsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMucmVtb3ZlQWNjZXNzVG9rZW5FeHBpcmluZyh0aGlzLl9jYWxsYmFjayk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfdG9rZW5FeHBpcmluZygpIHtcbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuc2lnbmluU2lsZW50KCkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNpbGVudFJlbmV3U2VydmljZS5fdG9rZW5FeHBpcmluZzogU2lsZW50IHRva2VuIHJlbmV3YWwgc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlNpbGVudFJlbmV3U2VydmljZS5fdG9rZW5FeHBpcmluZzogRXJyb3IgZnJvbSBzaWduaW5TaWxlbnQ6XCIsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5fcmFpc2VTaWxlbnRSZW5ld0Vycm9yKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCByYW5kb20gZnJvbSAnLi9yYW5kb20uanMnO1xuXG5leHBvcnQgY2xhc3MgU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKHtpZCwgZGF0YSwgY3JlYXRlZCwgcmVxdWVzdF90eXBlfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuX2lkID0gaWQgfHwgcmFuZG9tKCk7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY3JlYXRlZCA9PT0gJ251bWJlcicgJiYgY3JlYXRlZCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZWQgPSBjcmVhdGVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlZCA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZXF1ZXN0X3R5cGUgPSAgcmVxdWVzdF90eXBlO1xuICAgIH1cblxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgICBnZXQgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuICAgIGdldCBjcmVhdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlZDtcbiAgICB9XG4gICAgZ2V0IHJlcXVlc3RfdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RfdHlwZTtcbiAgICB9XG5cbiAgICB0b1N0b3JhZ2VTdHJpbmcoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlN0YXRlLnRvU3RvcmFnZVN0cmluZ1wiKTtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgICAgICAgY3JlYXRlZDogdGhpcy5jcmVhdGVkLFxuICAgICAgICAgICAgcmVxdWVzdF90eXBlOiB0aGlzLnJlcXVlc3RfdHlwZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmFnZVN0cmluZykge1xuICAgICAgICBMb2cuZGVidWcoXCJTdGF0ZS5mcm9tU3RvcmFnZVN0cmluZ1wiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdGF0ZShKU09OLnBhcnNlKHN0b3JhZ2VTdHJpbmcpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYXJTdGFsZVN0YXRlKHN0b3JhZ2UsIGFnZSkge1xuXG4gICAgICAgIHZhciBjdXRvZmYgPSBEYXRlLm5vdygpIC8gMTAwMCAtIGFnZTtcblxuICAgICAgICByZXR1cm4gc3RvcmFnZS5nZXRBbGxLZXlzKCkudGhlbihrZXlzID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogZ290IGtleXNcIiwga2V5cyk7XG5cbiAgICAgICAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIHAgPSBzdG9yYWdlLmdldChrZXkpLnRoZW4oaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZW1vdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBTdGF0ZS5mcm9tU3RvcmFnZVN0cmluZyhpdGVtKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuY2xlYXJTdGFsZVN0YXRlOiBnb3QgaXRlbSBmcm9tIGtleTogXCIsIGtleSwgc3RhdGUuY3JlYXRlZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuY3JlYXRlZCA8PSBjdXRvZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlN0YXRlLmNsZWFyU3RhbGVTdGF0ZTogRXJyb3IgcGFyc2luZyBzdGF0ZSBmb3Iga2V5XCIsIGtleSwgZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuY2xlYXJTdGFsZVN0YXRlOiBubyBpdGVtIGluIHN0b3JhZ2UgZm9yIGtleTogXCIsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuY2xlYXJTdGFsZVN0YXRlOiByZW1vdmVkIGl0ZW0gZm9yIGtleTogXCIsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmFnZS5yZW1vdmUoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuY2xlYXJTdGFsZVN0YXRlOiB3YWl0aW5nIG9uIHByb21pc2UgY291bnQ6XCIsIHByb21pc2VzLmxlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICcuL0dsb2JhbC5qcyc7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4vRXZlbnQuanMnO1xuXG5jb25zdCBUaW1lckR1cmF0aW9uID0gNTsgLy8gc2Vjb25kc1xuXG5leHBvcnQgY2xhc3MgVGltZXIgZXh0ZW5kcyBFdmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0aW1lciA9IEdsb2JhbC50aW1lciwgbm93RnVuYyA9IHVuZGVmaW5lZCkge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgdGhpcy5fdGltZXIgPSB0aW1lcjtcblxuICAgICAgICBpZiAobm93RnVuYykge1xuICAgICAgICAgICAgdGhpcy5fbm93RnVuYyA9IG5vd0Z1bmM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9ub3dGdW5jID0gKCkgPT4gRGF0ZS5ub3coKSAvIDEwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgbm93KCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5fbm93RnVuYygpKTtcbiAgICB9XG5cbiAgICBpbml0KGR1cmF0aW9uKSB7XG4gICAgICAgIGlmIChkdXJhdGlvbiA8PSAwKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZHVyYXRpb24gPSBwYXJzZUludChkdXJhdGlvbik7XG5cbiAgICAgICAgdmFyIGV4cGlyYXRpb24gPSB0aGlzLm5vdyArIGR1cmF0aW9uO1xuICAgICAgICBpZiAodGhpcy5leHBpcmF0aW9uID09PSBleHBpcmF0aW9uICYmIHRoaXMuX3RpbWVySGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBubyBuZWVkIHRvIHJlaW5pdGlhbGl6ZSB0byBzYW1lIGV4cGlyYXRpb24sIHNvIGJhaWwgb3V0XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJUaW1lci5pbml0IHRpbWVyIFwiICsgdGhpcy5fbmFtZSArIFwiIHNraXBwaW5nIGluaXRpYWxpemF0aW9uIHNpbmNlIGFscmVhZHkgaW5pdGlhbGl6ZWQgZm9yIGV4cGlyYXRpb246XCIsIHRoaXMuZXhwaXJhdGlvbik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbmNlbCgpO1xuXG4gICAgICAgIExvZy5kZWJ1ZyhcIlRpbWVyLmluaXQgdGltZXIgXCIgKyB0aGlzLl9uYW1lICsgXCIgZm9yIGR1cmF0aW9uOlwiLCBkdXJhdGlvbik7XG4gICAgICAgIHRoaXMuX2V4cGlyYXRpb24gPSBleHBpcmF0aW9uO1xuXG4gICAgICAgIC8vIHdlJ3JlIHVzaW5nIGEgZmFpcmx5IHNob3J0IHRpbWVyIGFuZCB0aGVuIGNoZWNraW5nIHRoZSBleHBpcmF0aW9uIGluIHRoZVxuICAgICAgICAvLyBjYWxsYmFjayB0byBoYW5kbGUgc2NlbmFyaW9zIHdoZXJlIHRoZSBicm93c2VyIGRldmljZSBzbGVlcHMsIGFuZCB0aGVuXG4gICAgICAgIC8vIHRoZSB0aW1lcnMgZW5kIHVwIGdldHRpbmcgZGVsYXllZC5cbiAgICAgICAgdmFyIHRpbWVyRHVyYXRpb24gPSBUaW1lckR1cmF0aW9uO1xuICAgICAgICBpZiAoZHVyYXRpb24gPCB0aW1lckR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aW1lckR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGltZXJIYW5kbGUgPSB0aGlzLl90aW1lci5zZXRJbnRlcnZhbCh0aGlzLl9jYWxsYmFjay5iaW5kKHRoaXMpLCB0aW1lckR1cmF0aW9uICogMTAwMCk7XG4gICAgfVxuICAgIFxuICAgIGdldCBleHBpcmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhwaXJhdGlvbjtcbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLl90aW1lckhhbmRsZSkge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVGltZXIuY2FuY2VsOiBcIiwgdGhpcy5fbmFtZSk7XG4gICAgICAgICAgICB0aGlzLl90aW1lci5jbGVhckludGVydmFsKHRoaXMuX3RpbWVySGFuZGxlKTtcbiAgICAgICAgICAgIHRoaXMuX3RpbWVySGFuZGxlID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIGRpZmYgPSB0aGlzLl9leHBpcmF0aW9uIC0gdGhpcy5ub3c7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlRpbWVyLmNhbGxiYWNrOyBcIiArIHRoaXMuX25hbWUgKyBcIiB0aW1lciBleHBpcmVzIGluOlwiLCBkaWZmKTtcblxuICAgICAgICBpZiAodGhpcy5fZXhwaXJhdGlvbiA8PSB0aGlzLm5vdykge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICAgICAgICAgIHN1cGVyLnJhaXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBKc29uU2VydmljZSB9IGZyb20gJy4vSnNvblNlcnZpY2UuanMnO1xuaW1wb3J0IHsgTWV0YWRhdGFTZXJ2aWNlIH0gZnJvbSAnLi9NZXRhZGF0YVNlcnZpY2UuanMnO1xuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuXG5leHBvcnQgY2xhc3MgVG9rZW5DbGllbnQge1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBKc29uU2VydmljZUN0b3IgPSBKc29uU2VydmljZSwgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSkge1xuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5jdG9yOiBObyBzZXR0aW5ncyBwYXNzZWRcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzZXR0aW5nc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuX2pzb25TZXJ2aWNlID0gbmV3IEpzb25TZXJ2aWNlQ3RvcigpO1xuICAgICAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UgPSBuZXcgTWV0YWRhdGFTZXJ2aWNlQ3Rvcih0aGlzLl9zZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgZXhjaGFuZ2VDb2RlKGFyZ3MgPSB7fSkge1xuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XG5cbiAgICAgICAgYXJncy5ncmFudF90eXBlID0gYXJncy5ncmFudF90eXBlIHx8IFwiYXV0aG9yaXphdGlvbl9jb2RlXCI7XG4gICAgICAgIGFyZ3MuY2xpZW50X2lkID0gYXJncy5jbGllbnRfaWQgfHwgdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xuICAgICAgICBhcmdzLnJlZGlyZWN0X3VyaSA9IGFyZ3MucmVkaXJlY3RfdXJpIHx8IHRoaXMuX3NldHRpbmdzLnJlZGlyZWN0X3VyaTtcblxuICAgICAgICBpZiAoIWFyZ3MuY29kZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiVG9rZW5DbGllbnQuZXhjaGFuZ2VDb2RlOiBObyBjb2RlIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIGNvZGUgaXMgcmVxdWlyZWRcIikpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYXJncy5yZWRpcmVjdF91cmkpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogTm8gcmVkaXJlY3RfdXJpIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIHJlZGlyZWN0X3VyaSBpcyByZXF1aXJlZFwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhcmdzLmNvZGVfdmVyaWZpZXIpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuQ2xpZW50LmV4Y2hhbmdlQ29kZTogTm8gY29kZV92ZXJpZmllciBwYXNzZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQSBjb2RlX3ZlcmlmaWVyIGlzIHJlcXVpcmVkXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFyZ3MuY2xpZW50X2lkKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IE5vIGNsaWVudF9pZCBwYXNzZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQSBjbGllbnRfaWQgaXMgcmVxdWlyZWRcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRUb2tlbkVuZHBvaW50KGZhbHNlKS50aGVuKHVybCA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IFJlY2VpdmVkIHRva2VuIGVuZHBvaW50XCIpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UucG9zdEZvcm0odXJsLCBhcmdzKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlbkNsaWVudC5leGNoYW5nZUNvZGU6IHJlc3BvbnNlIHJlY2VpdmVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleGNoYW5nZVJlZnJlc2hUb2tlbihhcmdzID0ge30pIHtcbiAgICAgICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xuXG4gICAgICAgIGFyZ3MuZ3JhbnRfdHlwZSA9IGFyZ3MuZ3JhbnRfdHlwZSB8fCBcInJlZnJlc2hfdG9rZW5cIjtcbiAgICAgICAgYXJncy5jbGllbnRfaWQgPSBhcmdzLmNsaWVudF9pZCB8fCB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQ7XG4gICAgICAgIGFyZ3MuY2xpZW50X3NlY3JldCA9IGFyZ3MuY2xpZW50X3NlY3JldCB8fCB0aGlzLl9zZXR0aW5ncy5jbGllbnRfc2VjcmV0O1xuXG4gICAgICAgIGlmICghYXJncy5yZWZyZXNoX3Rva2VuKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZVJlZnJlc2hUb2tlbjogTm8gcmVmcmVzaF90b2tlbiBwYXNzZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQSByZWZyZXNoX3Rva2VuIGlzIHJlcXVpcmVkXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFyZ3MuY2xpZW50X2lkKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlbkNsaWVudC5leGNoYW5nZVJlZnJlc2hUb2tlbjogTm8gY2xpZW50X2lkIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIGNsaWVudF9pZCBpcyByZXF1aXJlZFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldFRva2VuRW5kcG9pbnQoZmFsc2UpLnRoZW4odXJsID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuQ2xpZW50LmV4Y2hhbmdlUmVmcmVzaFRva2VuOiBSZWNlaXZlZCB0b2tlbiBlbmRwb2ludFwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb25TZXJ2aWNlLnBvc3RGb3JtKHVybCwgYXJncykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVG9rZW5DbGllbnQuZXhjaGFuZ2VSZWZyZXNoVG9rZW46IHJlc3BvbnNlIHJlY2VpdmVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBNZXRhZGF0YVNlcnZpY2UgfSBmcm9tICcuL01ldGFkYXRhU2VydmljZS5qcyc7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICcuL0dsb2JhbC5qcyc7XG5cbmNvbnN0IEFjY2Vzc1Rva2VuVHlwZUhpbnQgPSBcImFjY2Vzc190b2tlblwiO1xuY29uc3QgUmVmcmVzaFRva2VuVHlwZUhpbnQgPSBcInJlZnJlc2hfdG9rZW5cIjtcblxuZXhwb3J0IGNsYXNzIFRva2VuUmV2b2NhdGlvbkNsaWVudCB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIFhNTEh0dHBSZXF1ZXN0Q3RvciA9IEdsb2JhbC5YTUxIdHRwUmVxdWVzdCwgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSkge1xuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlblJldm9jYXRpb25DbGllbnQuY3RvcjogTm8gc2V0dGluZ3MgcHJvdmlkZWRcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzZXR0aW5ncyBwcm92aWRlZC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgICAgICB0aGlzLl9YTUxIdHRwUmVxdWVzdEN0b3IgPSBYTUxIdHRwUmVxdWVzdEN0b3I7XG4gICAgICAgIHRoaXMuX21ldGFkYXRhU2VydmljZSA9IG5ldyBNZXRhZGF0YVNlcnZpY2VDdG9yKHRoaXMuX3NldHRpbmdzKTtcbiAgICB9XG5cbiAgICByZXZva2UodG9rZW4sIHJlcXVpcmVkLCB0eXBlID0gXCJhY2Nlc3NfdG9rZW5cIikge1xuICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBObyB0b2tlbiBwcm92aWRlZFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHRva2VuIHByb3ZpZGVkLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlICE9PSBBY2Nlc3NUb2tlblR5cGVIaW50ICYmIHR5cGUgIT0gUmVmcmVzaFRva2VuVHlwZUhpbnQpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2U6IEludmFsaWQgdG9rZW4gdHlwZVwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdG9rZW4gdHlwZS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldFJldm9jYXRpb25FbmRwb2ludCgpLnRoZW4odXJsID0+IHtcbiAgICAgICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlRva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2U6IFJldm9jYXRpb24gbm90IHN1cHBvcnRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmV2b2NhdGlvbiBub3Qgc3VwcG9ydGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIG5vdCByZXF1aXJlZCwgc28gZG9uJ3QgZXJyb3IgYW5kIGp1c3QgcmV0dXJuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlOiBSZXZva2luZyBcIiArIHR5cGUpO1xuICAgICAgICAgICAgdmFyIGNsaWVudF9pZCA9IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcbiAgICAgICAgICAgIHZhciBjbGllbnRfc2VjcmV0ID0gdGhpcy5fc2V0dGluZ3MuY2xpZW50X3NlY3JldDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXZva2UodXJsLCBjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHRva2VuLCB0eXBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3Jldm9rZSh1cmwsIGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgdG9rZW4sIHR5cGUpIHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IHRoaXMuX1hNTEh0dHBSZXF1ZXN0Q3RvcigpO1xuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCk7XG5cbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZTogSFRUUCByZXNwb25zZSByZWNlaXZlZCwgc3RhdHVzXCIsIHhoci5zdGF0dXMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoeGhyLnN0YXR1c1RleHQgKyBcIiAoXCIgKyB4aHIuc3RhdHVzICsgXCIpXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7IFxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlRva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2U6IE5ldHdvcmsgRXJyb3IuXCIpXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiTmV0d29yayBFcnJvclwiKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBib2R5ID0gXCJjbGllbnRfaWQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoY2xpZW50X2lkKTtcbiAgICAgICAgICAgIGlmIChjbGllbnRfc2VjcmV0KSB7XG4gICAgICAgICAgICAgICAgYm9keSArPSBcIiZjbGllbnRfc2VjcmV0PVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGNsaWVudF9zZWNyZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9keSArPSBcIiZ0b2tlbl90eXBlX2hpbnQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodHlwZSk7XG4gICAgICAgICAgICBib2R5ICs9IFwiJnRva2VuPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHRva2VuKTtcblxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgICAgICB4aHIuc2VuZChib2R5KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9HbG9iYWwuanMnO1xuXG5leHBvcnQgY2xhc3MgVXJsVXRpbGl0eSB7XG4gICAgc3RhdGljIGFkZFF1ZXJ5UGFyYW0odXJsLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZiAodXJsLmluZGV4T2YoJz8nKSA8IDApIHtcbiAgICAgICAgICAgIHVybCArPSBcIj9cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1cmxbdXJsLmxlbmd0aCAtIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgdXJsICs9IFwiJlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsICs9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTtcbiAgICAgICAgdXJsICs9IFwiPVwiO1xuICAgICAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIHN0YXRpYyBwYXJzZVVybEZyYWdtZW50KHZhbHVlLCBkZWxpbWl0ZXIgPSBcIiNcIiwgZ2xvYmFsID0gR2xvYmFsKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKXtcbiAgICAgICAgICAgIHZhbHVlID0gZ2xvYmFsLmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaWR4ID0gdmFsdWUubGFzdEluZGV4T2YoZGVsaW1pdGVyKTtcbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cihpZHggKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWxpbWl0ZXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSdyZSBkb2luZyBxdWVyeSwgdGhlbiBzdHJpcCBvZmYgaGFzaCBmcmFnbWVudCBiZWZvcmUgd2UgcGFyc2VcbiAgICAgICAgICAgIGlkeCA9IHZhbHVlLmluZGV4T2YoJyMnKTtcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKDAsIGlkeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFyYW1zID0ge30sXG4gICAgICAgICAgICByZWdleCA9IC8oW14mPV0rKT0oW14mXSopL2csXG4gICAgICAgICAgICBtO1xuXG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgd2hpbGUgKG0gPSByZWdleC5leGVjKHZhbHVlKSkge1xuICAgICAgICAgICAgcGFyYW1zW2RlY29kZVVSSUNvbXBvbmVudChtWzFdKV0gPSBkZWNvZGVVUklDb21wb25lbnQobVsyXS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XG4gICAgICAgICAgICBpZiAoY291bnRlcisrID4gNTApIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVcmxVdGlsaXR5LnBhcnNlVXJsRnJhZ21lbnQ6IHJlc3BvbnNlIGV4Y2VlZGVkIGV4cGVjdGVkIG51bWJlciBvZiBwYXJhbWV0ZXJzXCIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogXCJSZXNwb25zZSBleGNlZWRlZCBleHBlY3RlZCBudW1iZXIgb2YgcGFyYW1ldGVyc1wiXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcblxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIGNvbnN0cnVjdG9yKHtpZF90b2tlbiwgc2Vzc2lvbl9zdGF0ZSwgYWNjZXNzX3Rva2VuLCByZWZyZXNoX3Rva2VuLCB0b2tlbl90eXBlLCBzY29wZSwgcHJvZmlsZSwgZXhwaXJlc19hdCwgc3RhdGV9KSB7XG4gICAgICAgIHRoaXMuaWRfdG9rZW4gPSBpZF90b2tlbjtcbiAgICAgICAgdGhpcy5zZXNzaW9uX3N0YXRlID0gc2Vzc2lvbl9zdGF0ZTtcbiAgICAgICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSBhY2Nlc3NfdG9rZW47XG4gICAgICAgIHRoaXMucmVmcmVzaF90b2tlbiA9IHJlZnJlc2hfdG9rZW47XG4gICAgICAgIHRoaXMudG9rZW5fdHlwZSA9IHRva2VuX3R5cGU7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5wcm9maWxlID0gcHJvZmlsZTtcbiAgICAgICAgdGhpcy5leHBpcmVzX2F0ID0gZXhwaXJlc19hdDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIGdldCBleHBpcmVzX2luKCkge1xuICAgICAgICBpZiAodGhpcy5leHBpcmVzX2F0KSB7XG4gICAgICAgICAgICBsZXQgbm93ID0gcGFyc2VJbnQoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwaXJlc19hdCAtIG5vdztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzZXQgZXhwaXJlc19pbih2YWx1ZSkge1xuICAgICAgICBsZXQgZXhwaXJlc19pbiA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBleHBpcmVzX2luID09PSAnbnVtYmVyJyAmJiBleHBpcmVzX2luID4gMCkge1xuICAgICAgICAgICAgbGV0IG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgICAgIHRoaXMuZXhwaXJlc19hdCA9IG5vdyArIGV4cGlyZXNfaW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZXhwaXJlZCgpIHtcbiAgICAgICAgbGV0IGV4cGlyZXNfaW4gPSB0aGlzLmV4cGlyZXNfaW47XG4gICAgICAgIGlmIChleHBpcmVzX2luICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBleHBpcmVzX2luIDw9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBnZXQgc2NvcGVzKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuc2NvcGUgfHwgXCJcIikuc3BsaXQoXCIgXCIpO1xuICAgIH1cblxuICAgIHRvU3RvcmFnZVN0cmluZygpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlci50b1N0b3JhZ2VTdHJpbmdcIik7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBpZF90b2tlbjogdGhpcy5pZF90b2tlbixcbiAgICAgICAgICAgIHNlc3Npb25fc3RhdGU6IHRoaXMuc2Vzc2lvbl9zdGF0ZSxcbiAgICAgICAgICAgIGFjY2Vzc190b2tlbjogdGhpcy5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICByZWZyZXNoX3Rva2VuOiB0aGlzLnJlZnJlc2hfdG9rZW4sXG4gICAgICAgICAgICB0b2tlbl90eXBlOiB0aGlzLnRva2VuX3R5cGUsXG4gICAgICAgICAgICBzY29wZTogdGhpcy5zY29wZSxcbiAgICAgICAgICAgIHByb2ZpbGU6IHRoaXMucHJvZmlsZSxcbiAgICAgICAgICAgIGV4cGlyZXNfYXQ6IHRoaXMuZXhwaXJlc19hdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmFnZVN0cmluZykge1xuICAgICAgICBMb2cuZGVidWcoXCJVc2VyLmZyb21TdG9yYWdlU3RyaW5nXCIpO1xuICAgICAgICByZXR1cm4gbmV3IFVzZXIoSlNPTi5wYXJzZShzdG9yYWdlU3RyaW5nKSk7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgSnNvblNlcnZpY2UgfSBmcm9tICcuL0pzb25TZXJ2aWNlLmpzJztcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlLmpzJztcbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCB7IEpvc2VVdGlsIH0gZnJvbSAnLi9Kb3NlVXRpbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBVc2VySW5mb1NlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBzZXR0aW5ncywgXG4gICAgICAgIEpzb25TZXJ2aWNlQ3RvciA9IEpzb25TZXJ2aWNlLCBcbiAgICAgICAgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSwgXG4gICAgICAgIGpvc2VVdGlsID0gSm9zZVV0aWxcbiAgICApIHtcbiAgICAgICAgaWYgKCFzZXR0aW5ncykge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlckluZm9TZXJ2aWNlLmN0b3I6IE5vIHNldHRpbmdzIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNldHRpbmdzXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgdGhpcy5fanNvblNlcnZpY2UgPSBuZXcgSnNvblNlcnZpY2VDdG9yKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzLl9nZXRDbGFpbXNGcm9tSnd0LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UgPSBuZXcgTWV0YWRhdGFTZXJ2aWNlQ3Rvcih0aGlzLl9zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuX2pvc2VVdGlsID0gam9zZVV0aWw7XG4gICAgfVxuXG4gICAgZ2V0Q2xhaW1zKHRva2VuKSB7XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5nZXRDbGFpbXM6IE5vIHRva2VuIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIHRva2VuIGlzIHJlcXVpcmVkXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0VXNlckluZm9FbmRwb2ludCgpLnRoZW4odXJsID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5nZXRDbGFpbXM6IHJlY2VpdmVkIHVzZXJpbmZvIHVybFwiLCB1cmwpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbih1cmwsIHRva2VuKS50aGVuKGNsYWltcyA9PiB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLmdldENsYWltczogY2xhaW1zIHJlY2VpdmVkXCIsIGNsYWltcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYWltcztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZ2V0Q2xhaW1zRnJvbUp3dChyZXEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBqd3QgPSB0aGlzLl9qb3NlVXRpbC5wYXJzZUp3dChyZXEucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGlmICghand0IHx8ICFqd3QuaGVhZGVyIHx8ICFqd3QucGF5bG9hZCkge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogRmFpbGVkIHRvIHBhcnNlIEpXVFwiLCBqd3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgaWRfdG9rZW5cIikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIga2lkID0gand0LmhlYWRlci5raWQ7XG5cbiAgICAgICAgICAgIGxldCBpc3N1ZXJQcm9taXNlO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9zZXR0aW5ncy51c2VySW5mb0p3dElzc3Vlcikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ09QJzpcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVyUHJvbWlzZSA9IHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRJc3N1ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQU5ZJzpcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVyUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShqd3QucGF5bG9hZC5pc3MpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpc3N1ZXJQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3NldHRpbmdzLnVzZXJJbmZvSnd0SXNzdWVyKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpc3N1ZXJQcm9taXNlLnRoZW4oaXNzdWVyID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IFJlY2VpdmVkIGlzc3VlcjpcIiArIGlzc3Vlcik7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzKCkudGhlbihrZXlzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFrZXlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IE5vIHNpZ25pbmcga2V5cyBmcm9tIG1ldGFkYXRhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHNpZ25pbmcga2V5cyBmcm9tIG1ldGFkYXRhXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogUmVjZWl2ZWQgc2lnbmluZyBrZXlzXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWtpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5cyA9IHRoaXMuX2ZpbHRlckJ5QWxnKGtleXMsIGp3dC5oZWFkZXIuYWxnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogTm8ga2lkIGZvdW5kIGluIGlkX3Rva2VuIGFuZCBtb3JlIHRoYW4gb25lIGtleSBmb3VuZCBpbiBtZXRhZGF0YVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8ga2lkIGZvdW5kIGluIGlkX3Rva2VuIGFuZCBtb3JlIHRoYW4gb25lIGtleSBmb3VuZCBpbiBtZXRhZGF0YVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBraWQgaXMgbWFuZGF0b3J5IG9ubHkgd2hlbiB0aGVyZSBhcmUgbXVsdGlwbGUga2V5cyBpbiB0aGUgcmVmZXJlbmNlZCBKV0sgU2V0IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VlIGh0dHA6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWNvcmUtMV8wLmh0bWwjU2lnbmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXlzLmZpbHRlcihrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkua2lkID09PSBraWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVswXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VySW5mb1NlcnZpY2UuX2dldENsYWltc0Zyb21Kd3Q6IE5vIGtleSBtYXRjaGluZyBraWQgb3IgYWxnIGZvdW5kIGluIHNpZ25pbmcga2V5c1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBrZXkgbWF0Y2hpbmcga2lkIG9yIGFsZyBmb3VuZCBpbiBzaWduaW5nIGtleXNcIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGF1ZGllbmNlID0gdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjbG9ja1NrZXdJblNlY29uZHMgPSB0aGlzLl9zZXR0aW5ncy5jbG9ja1NrZXc7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogVmFsaWRhaW5nIEpXVDsgdXNpbmcgY2xvY2sgc2tldyAoaW4gc2Vjb25kcykgb2Y6IFwiLCBjbG9ja1NrZXdJblNlY29uZHMpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9qb3NlVXRpbC52YWxpZGF0ZUp3dChyZXEucmVzcG9uc2VUZXh0LCBrZXksIGlzc3VlciwgYXVkaWVuY2UsIGNsb2NrU2tld0luU2Vjb25kcywgdW5kZWZpbmVkLCB0cnVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZ2V0Q2xhaW1zRnJvbUp3dDogSldUIHZhbGlkYXRpb24gc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBqd3QucGF5bG9hZDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlckluZm9TZXJ2aWNlLl9nZXRDbGFpbXNGcm9tSnd0OiBFcnJvciBwYXJzaW5nIEpXVCByZXNwb25zZVwiLCBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2ZpbHRlckJ5QWxnKGtleXMsIGFsZykge1xuICAgICAgICB2YXIga3R5ID0gbnVsbDtcbiAgICAgICAgaWYgKGFsZy5zdGFydHNXaXRoKFwiUlNcIikpIHtcbiAgICAgICAgICAgIGt0eSA9IFwiUlNBXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJQU1wiKSkge1xuICAgICAgICAgICAga3R5ID0gXCJQU1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFsZy5zdGFydHNXaXRoKFwiRVNcIikpIHtcbiAgICAgICAgICAgIGt0eSA9IFwiRUNcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZmlsdGVyQnlBbGc6IGFsZyBub3Qgc3VwcG9ydGVkOiBcIiwgYWxnKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJJbmZvU2VydmljZS5fZmlsdGVyQnlBbGc6IExvb2tpbmcgZm9yIGtleXMgdGhhdCBtYXRjaCBrdHk6IFwiLCBrdHkpO1xuXG4gICAgICAgIGtleXMgPSBrZXlzLmZpbHRlcihrZXkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGtleS5rdHkgPT09IGt0eTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLl9maWx0ZXJCeUFsZzogTnVtYmVyIG9mIGtleXMgdGhhdCBtYXRjaCBrdHk6IFwiLCBrdHksIGtleXMubGVuZ3RoKTtcblxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBPaWRjQ2xpZW50IH0gZnJvbSAnLi9PaWRjQ2xpZW50LmpzJztcbmltcG9ydCB7IFVzZXJNYW5hZ2VyU2V0dGluZ3MgfSBmcm9tICcuL1VzZXJNYW5hZ2VyU2V0dGluZ3MuanMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vVXNlci5qcyc7XG5pbXBvcnQgeyBVc2VyTWFuYWdlckV2ZW50cyB9IGZyb20gJy4vVXNlck1hbmFnZXJFdmVudHMuanMnO1xuaW1wb3J0IHsgU2lsZW50UmVuZXdTZXJ2aWNlIH0gZnJvbSAnLi9TaWxlbnRSZW5ld1NlcnZpY2UuanMnO1xuaW1wb3J0IHsgU2Vzc2lvbk1vbml0b3IgfSBmcm9tICcuL1Nlc3Npb25Nb25pdG9yLmpzJztcbmltcG9ydCB7IFRva2VuUmV2b2NhdGlvbkNsaWVudCB9IGZyb20gJy4vVG9rZW5SZXZvY2F0aW9uQ2xpZW50LmpzJztcbmltcG9ydCB7IFRva2VuQ2xpZW50IH0gZnJvbSAnLi9Ub2tlbkNsaWVudC5qcyc7XG5pbXBvcnQgeyBKb3NlVXRpbCB9IGZyb20gJy4vSm9zZVV0aWwuanMnO1xuXG5cbmV4cG9ydCBjbGFzcyBVc2VyTWFuYWdlciBleHRlbmRzIE9pZGNDbGllbnQge1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzID0ge30sXG4gICAgICAgIFNpbGVudFJlbmV3U2VydmljZUN0b3IgPSBTaWxlbnRSZW5ld1NlcnZpY2UsXG4gICAgICAgIFNlc3Npb25Nb25pdG9yQ3RvciA9IFNlc3Npb25Nb25pdG9yLFxuICAgICAgICBUb2tlblJldm9jYXRpb25DbGllbnRDdG9yID0gVG9rZW5SZXZvY2F0aW9uQ2xpZW50LFxuICAgICAgICBUb2tlbkNsaWVudEN0b3IgPSBUb2tlbkNsaWVudCxcbiAgICAgICAgam9zZVV0aWwgPSBKb3NlVXRpbFxuICAgICkge1xuXG4gICAgICAgIGlmICghKHNldHRpbmdzIGluc3RhbmNlb2YgVXNlck1hbmFnZXJTZXR0aW5ncykpIHtcbiAgICAgICAgICAgIHNldHRpbmdzID0gbmV3IFVzZXJNYW5hZ2VyU2V0dGluZ3Moc2V0dGluZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKHNldHRpbmdzKTtcblxuICAgICAgICB0aGlzLl9ldmVudHMgPSBuZXcgVXNlck1hbmFnZXJFdmVudHMoc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLl9zaWxlbnRSZW5ld1NlcnZpY2UgPSBuZXcgU2lsZW50UmVuZXdTZXJ2aWNlQ3Rvcih0aGlzKTtcblxuICAgICAgICAvLyBvcmRlciBpcyBpbXBvcnRhbnQgZm9yIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczsgdGhlc2Ugc2VydmljZXMgZGVwZW5kIHVwb24gdGhlIGV2ZW50cy5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYXV0b21hdGljU2lsZW50UmVuZXcpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLmN0b3I6IGF1dG9tYXRpY1NpbGVudFJlbmV3IGlzIGNvbmZpZ3VyZWQsIHNldHRpbmcgdXAgc2lsZW50IHJlbmV3XCIpO1xuICAgICAgICAgICAgdGhpcy5zdGFydFNpbGVudFJlbmV3KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5tb25pdG9yU2Vzc2lvbikge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuY3RvcjogbW9uaXRvclNlc3Npb24gaXMgY29uZmlndXJlZCwgc2V0dGluZyB1cCBzZXNzaW9uIG1vbml0b3JcIik7XG4gICAgICAgICAgICB0aGlzLl9zZXNzaW9uTW9uaXRvciA9IG5ldyBTZXNzaW9uTW9uaXRvckN0b3IodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl90b2tlblJldm9jYXRpb25DbGllbnQgPSBuZXcgVG9rZW5SZXZvY2F0aW9uQ2xpZW50Q3Rvcih0aGlzLl9zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuX3Rva2VuQ2xpZW50ID0gbmV3IFRva2VuQ2xpZW50Q3Rvcih0aGlzLl9zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuX2pvc2VVdGlsID0gam9zZVV0aWw7XG4gICAgfVxuXG4gICAgZ2V0IF9yZWRpcmVjdE5hdmlnYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MucmVkaXJlY3ROYXZpZ2F0b3I7XG4gICAgfVxuICAgIGdldCBfcG9wdXBOYXZpZ2F0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnBvcHVwTmF2aWdhdG9yO1xuICAgIH1cbiAgICBnZXQgX2lmcmFtZU5hdmlnYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MuaWZyYW1lTmF2aWdhdG9yO1xuICAgIH1cbiAgICBnZXQgX3VzZXJTdG9yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MudXNlclN0b3JlO1xuICAgIH1cblxuICAgIGdldCBldmVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudHM7XG4gICAgfVxuXG4gICAgZ2V0VXNlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5nZXRVc2VyOiB1c2VyIGxvYWRlZFwiKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5sb2FkKHVzZXIsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5nZXRVc2VyOiB1c2VyIG5vdCBmb3VuZCBpbiBzdG9yYWdlXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVVc2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVVzZXIobnVsbCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnJlbW92ZVVzZXI6IHVzZXIgcmVtb3ZlZCBmcm9tIHN0b3JhZ2VcIik7XG4gICAgICAgICAgICB0aGlzLl9ldmVudHMudW5sb2FkKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNpZ25pblJlZGlyZWN0KGFyZ3MgPSB7fSkge1xuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XG5cbiAgICAgICAgYXJncy5yZXF1ZXN0X3R5cGUgPSBcInNpOnJcIjtcbiAgICAgICAgbGV0IG5hdlBhcmFtcyA9IHtcbiAgICAgICAgICAgIHVzZVJlcGxhY2VUb05hdmlnYXRlIDogYXJncy51c2VSZXBsYWNlVG9OYXZpZ2F0ZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluU3RhcnQoYXJncywgdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3IsIG5hdlBhcmFtcykudGhlbigoKT0+e1xuICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5SZWRpcmVjdDogc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpZ25pblJlZGlyZWN0Q2FsbGJhY2sodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5FbmQodXJsIHx8IHRoaXMuX3JlZGlyZWN0TmF2aWdhdG9yLnVybCkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xuICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbmluUmVkaXJlY3RDYWxsYmFjazogc3VjY2Vzc2Z1bCwgc2lnbmVkIGluIHN1YjogXCIsIHVzZXIucHJvZmlsZS5zdWIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5SZWRpcmVjdENhbGxiYWNrOiBubyBzdWJcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaWduaW5Qb3B1cChhcmdzID0ge30pIHtcbiAgICAgICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xuXG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzaTpwXCI7XG4gICAgICAgIGxldCB1cmwgPSBhcmdzLnJlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnBvcHVwX3JlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnJlZGlyZWN0X3VyaTtcbiAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwOiBObyBwb3B1cF9yZWRpcmVjdF91cmkgb3IgcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gcG9wdXBfcmVkaXJlY3RfdXJpIG9yIHJlZGlyZWN0X3VyaSBjb25maWd1cmVkXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFyZ3MucmVkaXJlY3RfdXJpID0gdXJsO1xuICAgICAgICBhcmdzLmRpc3BsYXkgPSBcInBvcHVwXCI7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pbihhcmdzLCB0aGlzLl9wb3B1cE5hdmlnYXRvciwge1xuICAgICAgICAgICAgc3RhcnRVcmw6IHVybCxcbiAgICAgICAgICAgIHBvcHVwV2luZG93RmVhdHVyZXM6IGFyZ3MucG9wdXBXaW5kb3dGZWF0dXJlcyB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93RmVhdHVyZXMsXG4gICAgICAgICAgICBwb3B1cFdpbmRvd1RhcmdldDogYXJncy5wb3B1cFdpbmRvd1RhcmdldCB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93VGFyZ2V0XG4gICAgICAgIH0pLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwOiBzaWduaW5Qb3B1cCBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwOiBubyBzdWJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpZ25pblBvcHVwQ2FsbGJhY2sodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5DYWxsYmFjayh1cmwsIHRoaXMuX3BvcHVwTmF2aWdhdG9yKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodXNlci5wcm9maWxlICYmIHVzZXIucHJvZmlsZS5zdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5Qb3B1cENhbGxiYWNrOiBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwQ2FsbGJhY2s6IG5vIHN1YlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICB9KS5jYXRjaChlcnI9PntcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwQ2FsbGJhY2sgZXJyb3I6IFwiICsgZXJyICYmIGVyci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2lnbmluU2lsZW50KGFyZ3MgPSB7fSkge1xuICAgICAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgYXJncyk7XG5cbiAgICAgICAgYXJncy5yZXF1ZXN0X3R5cGUgPSBcInNpOnNcIjtcbiAgICAgICAgLy8gZmlyc3QgZGV0ZXJtaW5lIGlmIHdlIGhhdmUgYSByZWZyZXNoIHRva2VuLCBvciBuZWVkIHRvIHVzZSBpZnJhbWVcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyICYmIHVzZXIucmVmcmVzaF90b2tlbikge1xuICAgICAgICAgICAgICAgIGFyZ3MucmVmcmVzaF90b2tlbiA9IHVzZXIucmVmcmVzaF90b2tlbjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdXNlUmVmcmVzaFRva2VuKGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJncy5pZF90b2tlbl9oaW50ID0gYXJncy5pZF90b2tlbl9oaW50IHx8ICh0aGlzLnNldHRpbmdzLmluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyAmJiB1c2VyICYmIHVzZXIuaWRfdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh1c2VyICYmIHRoaXMuX3NldHRpbmdzLnZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldykge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnQsIHN1YmplY3QgcHJpb3IgdG8gc2lsZW50IHJlbmV3OiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuY3VycmVudF9zdWIgPSB1c2VyLnByb2ZpbGUuc3ViO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluU2lsZW50SWZyYW1lKGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdXNlUmVmcmVzaFRva2VuKGFyZ3MgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW5DbGllbnQuZXhjaGFuZ2VSZWZyZXNoVG9rZW4oYXJncykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5fdXNlUmVmcmVzaFRva2VuOiBObyByZXNwb25zZSByZXR1cm5lZCBmcm9tIHRva2VuIGVuZHBvaW50XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIk5vIHJlc3BvbnNlIHJldHVybmVkIGZyb20gdG9rZW4gZW5kcG9pbnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5fdXNlUmVmcmVzaFRva2VuOiBObyBhY2Nlc3MgdG9rZW4gcmV0dXJuZWQgZnJvbSB0b2tlbiBlbmRwb2ludFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJObyBhY2Nlc3MgdG9rZW4gcmV0dXJuZWQgZnJvbSB0b2tlbiBlbmRwb2ludFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWRUb2tlblZhbGlkYXRpb24gPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pZF90b2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRUb2tlblZhbGlkYXRpb24gPSB0aGlzLl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW4odXNlci5wcm9maWxlLCByZXN1bHQuaWRfdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlkVG9rZW5WYWxpZGF0aW9uLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3VzZVJlZnJlc2hUb2tlbjogcmVmcmVzaCB0b2tlbiByZXNwb25zZSBzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5pZF90b2tlbiA9IHJlc3VsdC5pZF90b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuYWNjZXNzX3Rva2VuID0gcmVzdWx0LmFjY2Vzc190b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIucmVmcmVzaF90b2tlbiA9IHJlc3VsdC5yZWZyZXNoX3Rva2VuIHx8IHVzZXIucmVmcmVzaF90b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZXhwaXJlc19pbiA9IHJlc3VsdC5leHBpcmVzX2luO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVVzZXIodXNlcikudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5sb2FkKHVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW4ocHJvZmlsZSwgaWRfdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRJc3N1ZXIoKS50aGVuKGlzc3VlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fam9zZVV0aWwudmFsaWRhdGVKd3RBdHRyaWJ1dGVzKGlkX3Rva2VuLCBpc3N1ZXIsIHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZCwgdGhpcy5fc2V0dGluZ3MuY2xvY2tTa2V3KS50aGVuKHBheWxvYWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5fdmFsaWRhdGVJZFRva2VuRnJvbVRva2VuUmVmcmVzaFRva2VuOiBGYWlsZWQgdG8gdmFsaWRhdGUgaWRfdG9rZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdmFsaWRhdGUgaWRfdG9rZW5cIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5zdWIgIT09IHByb2ZpbGUuc3ViKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW46IHN1YiBpbiBpZF90b2tlbiBkb2VzIG5vdCBtYXRjaCBjdXJyZW50IHN1YlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcInN1YiBpbiBpZF90b2tlbiBkb2VzIG5vdCBtYXRjaCBjdXJyZW50IHN1YlwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLmF1dGhfdGltZSAmJiBwYXlsb2FkLmF1dGhfdGltZSAhPT0gcHJvZmlsZS5hdXRoX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIuX3ZhbGlkYXRlSWRUb2tlbkZyb21Ub2tlblJlZnJlc2hUb2tlbjogYXV0aF90aW1lIGluIGlkX3Rva2VuIGRvZXMgbm90IG1hdGNoIG9yaWdpbmFsIGF1dGhfdGltZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImF1dGhfdGltZSBpbiBpZF90b2tlbiBkb2VzIG5vdCBtYXRjaCBvcmlnaW5hbCBhdXRoX3RpbWVcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5henAgJiYgcGF5bG9hZC5henAgIT09IHByb2ZpbGUuYXpwKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIlVzZXJNYW5hZ2VyLl92YWxpZGF0ZUlkVG9rZW5Gcm9tVG9rZW5SZWZyZXNoVG9rZW46IGF6cCBpbiBpZF90b2tlbiBkb2VzIG5vdCBtYXRjaCBvcmlnaW5hbCBhenBcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJhenAgaW4gaWRfdG9rZW4gZG9lcyBub3QgbWF0Y2ggb3JpZ2luYWwgYXpwXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFwYXlsb2FkLmF6cCAmJiBwcm9maWxlLmF6cCkge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5fdmFsaWRhdGVJZFRva2VuRnJvbVRva2VuUmVmcmVzaFRva2VuOiBhenAgbm90IGluIGlkX3Rva2VuLCBidXQgcHJlc2VudCBpbiBvcmlnaW5hbCBpZF90b2tlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImF6cCBub3QgaW4gaWRfdG9rZW4sIGJ1dCBwcmVzZW50IGluIG9yaWdpbmFsIGlkX3Rva2VuXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIF9zaWduaW5TaWxlbnRJZnJhbWUoYXJncyA9IHt9KSB7XG4gICAgICAgIGxldCB1cmwgPSBhcmdzLnJlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnNpbGVudF9yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5yZWRpcmVjdF91cmk7XG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnQ6IE5vIHNpbGVudF9yZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzaWxlbnRfcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJncy5yZWRpcmVjdF91cmkgPSB1cmw7XG4gICAgICAgIGFyZ3MucHJvbXB0ID0gYXJncy5wcm9tcHQgfHwgXCJub25lXCI7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pbihhcmdzLCB0aGlzLl9pZnJhbWVOYXZpZ2F0b3IsIHtcbiAgICAgICAgICAgIHN0YXJ0VXJsOiB1cmwsXG4gICAgICAgICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dDogYXJncy5zaWxlbnRSZXF1ZXN0VGltZW91dCB8fCB0aGlzLnNldHRpbmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0XG4gICAgICAgIH0pLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudDogc3VjY2Vzc2Z1bCwgc2lnbmVkIGluIHN1YjogXCIsIHVzZXIucHJvZmlsZS5zdWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnQ6IG5vIHN1YlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaWduaW5TaWxlbnRDYWxsYmFjayh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pbkNhbGxiYWNrKHVybCwgdGhpcy5faWZyYW1lTmF2aWdhdG9yKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodXNlci5wcm9maWxlICYmIHVzZXIucHJvZmlsZS5zdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnRDYWxsYmFjazogc3VjY2Vzc2Z1bCwgc2lnbmVkIGluIHN1YjogXCIsIHVzZXIucHJvZmlsZS5zdWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnRDYWxsYmFjazogbm8gc3ViXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNpZ25pbkNhbGxiYWNrKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkU2lnbmluUmVzcG9uc2VTdGF0ZSh1cmwpLnRoZW4oKHtzdGF0ZSwgcmVzcG9uc2V9KSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNpOnJcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25pblJlZGlyZWN0Q2FsbGJhY2sodXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZS5yZXF1ZXN0X3R5cGUgPT09IFwic2k6cFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2lnbmluUG9wdXBDYWxsYmFjayh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlLnJlcXVlc3RfdHlwZSA9PT0gXCJzaTpzXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaWduaW5TaWxlbnRDYWxsYmFjayh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImludmFsaWQgcmVzcG9uc2VfdHlwZSBpbiBzdGF0ZVwiKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNpZ25vdXRDYWxsYmFjayh1cmwsIGtlZXBPcGVuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRTaWdub3V0UmVzcG9uc2VTdGF0ZSh1cmwpLnRoZW4oKHtzdGF0ZSwgcmVzcG9uc2V9KSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNvOnJcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaWdub3V0UmVkaXJlY3RDYWxsYmFjayh1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUucmVxdWVzdF90eXBlID09PSBcInNvOnBcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaWdub3V0UG9wdXBDYWxsYmFjayh1cmwsIGtlZXBPcGVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImludmFsaWQgcmVzcG9uc2VfdHlwZSBpbiBzdGF0ZVwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHF1ZXJ5U2Vzc2lvblN0YXR1cyhhcmdzID0ge30pIHtcbiAgICAgICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xuXG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzaTpzXCI7IC8vIHRoaXMgYWN0cyBsaWtlIGEgc2lnbmluIHNpbGVudFxuICAgICAgICBsZXQgdXJsID0gYXJncy5yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5zaWxlbnRfcmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucmVkaXJlY3RfdXJpO1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiVXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzOiBObyBzaWxlbnRfcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc2lsZW50X3JlZGlyZWN0X3VyaSBjb25maWd1cmVkXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFyZ3MucmVkaXJlY3RfdXJpID0gdXJsO1xuICAgICAgICBhcmdzLnByb21wdCA9IFwibm9uZVwiO1xuICAgICAgICBhcmdzLnJlc3BvbnNlX3R5cGUgPSBhcmdzLnJlc3BvbnNlX3R5cGUgfHwgdGhpcy5zZXR0aW5ncy5xdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZTtcbiAgICAgICAgYXJncy5zY29wZSA9IGFyZ3Muc2NvcGUgfHwgXCJvcGVuaWRcIjtcbiAgICAgICAgYXJncy5za2lwVXNlckluZm8gPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5TdGFydChhcmdzLCB0aGlzLl9pZnJhbWVOYXZpZ2F0b3IsIHtcbiAgICAgICAgICAgIHN0YXJ0VXJsOiB1cmwsXG4gICAgICAgICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dDogYXJncy5zaWxlbnRSZXF1ZXN0VGltZW91dCB8fCB0aGlzLnNldHRpbmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0XG4gICAgICAgIH0pLnRoZW4obmF2UmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1NpZ25pblJlc3BvbnNlKG5hdlJlc3BvbnNlLnVybCkudGhlbihzaWduaW5SZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIucXVlcnlTZXNzaW9uU3RhdHVzOiBnb3Qgc2lnbmluIHJlc3BvbnNlXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNpZ25pblJlc3BvbnNlLnNlc3Npb25fc3RhdGUgJiYgc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJVc2VyTWFuYWdlci5xdWVyeVNlc3Npb25TdGF0dXM6IHF1ZXJ5U2Vzc2lvblN0YXR1cyBzdWNjZXNzIGZvciBzdWI6IFwiLCAgc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zdWIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbl9zdGF0ZTogc2lnbmluUmVzcG9uc2Uuc2Vzc2lvbl9zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yjogc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zdWIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWQ6IHNpZ25pblJlc3BvbnNlLnByb2ZpbGUuc2lkXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcInF1ZXJ5U2Vzc2lvblN0YXR1cyBzdWNjZXNzZnVsLCB1c2VyIG5vdCBhdXRoZW50aWNhdGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLnNlc3Npb25fc3RhdGUgJiYgdGhpcy5zZXR0aW5ncy5tb25pdG9yQW5vbnltb3VzU2Vzc2lvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyLm1lc3NhZ2UgPT0gXCJsb2dpbl9yZXF1aXJlZFwiIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLm1lc3NhZ2UgPT0gXCJjb25zZW50X3JlcXVpcmVkXCIgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIubWVzc2FnZSA9PSBcImludGVyYWN0aW9uX3JlcXVpcmVkXCIgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIubWVzc2FnZSA9PSBcImFjY291bnRfc2VsZWN0aW9uX3JlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1czogcXVlcnlTZXNzaW9uU3RhdHVzIHN1Y2Nlc3MgZm9yIGFub255bW91cyB1c2VyXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uX3N0YXRlOiBlcnIuc2Vzc2lvbl9zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfc2lnbmluKGFyZ3MsIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pblN0YXJ0KGFyZ3MsIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zKS50aGVuKG5hdlJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5FbmQobmF2UmVzcG9uc2UudXJsLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9zaWduaW5TdGFydChhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcyA9IHt9KSB7XG5cbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5wcmVwYXJlKG5hdmlnYXRvclBhcmFtcykudGhlbihoYW5kbGUgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pblN0YXJ0OiBnb3QgbmF2aWdhdG9yIHdpbmRvdyBoYW5kbGVcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNpZ25pblJlcXVlc3QoYXJncykudGhlbihzaWduaW5SZXF1ZXN0ID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluU3RhcnQ6IGdvdCBzaWduaW4gcmVxdWVzdFwiKTtcblxuICAgICAgICAgICAgICAgIG5hdmlnYXRvclBhcmFtcy51cmwgPSBzaWduaW5SZXF1ZXN0LnVybDtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3JQYXJhbXMuaWQgPSBzaWduaW5SZXF1ZXN0LnN0YXRlLmlkO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZS5uYXZpZ2F0ZShuYXZpZ2F0b3JQYXJhbXMpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlLmNsb3NlKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWduaW5TdGFydDogRXJyb3IgYWZ0ZXIgcHJlcGFyaW5nIG5hdmlnYXRvciwgY2xvc2luZyBuYXZpZ2F0b3Igd2luZG93XCIpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfc2lnbmluRW5kKHVybCwgYXJncyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTaWduaW5SZXNwb25zZSh1cmwpLnRoZW4oc2lnbmluUmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pbkVuZDogZ290IHNpZ25pbiByZXNwb25zZVwiKTtcblxuICAgICAgICAgICAgbGV0IHVzZXIgPSBuZXcgVXNlcihzaWduaW5SZXNwb25zZSk7XG5cbiAgICAgICAgICAgIGlmIChhcmdzLmN1cnJlbnRfc3ViKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MuY3VycmVudF9zdWIgIT09IHVzZXIucHJvZmlsZS5zdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pbkVuZDogY3VycmVudCB1c2VyIGRvZXMgbm90IG1hdGNoIHVzZXIgcmV0dXJuZWQgZnJvbSBzaWduaW4uIHN1YiBmcm9tIHNpZ25pbjogXCIsIHVzZXIucHJvZmlsZS5zdWIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwibG9naW5fcmVxdWlyZWRcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25pbkVuZDogY3VycmVudCB1c2VyIG1hdGNoZXMgdXNlciByZXR1cm5lZCBmcm9tIHNpZ25pblwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlVXNlcih1c2VyKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluRW5kOiB1c2VyIHN0b3JlZFwiKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5sb2FkKHVzZXIpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9zaWduaW5DYWxsYmFjayh1cmwsIG5hdmlnYXRvcikge1xuICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbmluQ2FsbGJhY2tcIik7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IuY2FsbGJhY2sodXJsKTtcbiAgICB9XG5cbiAgICBzaWdub3V0UmVkaXJlY3QoYXJncyA9IHt9KSB7XG4gICAgICAgIGFyZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBhcmdzKTtcblxuICAgICAgICBhcmdzLnJlcXVlc3RfdHlwZSA9IFwic286clwiO1xuICAgICAgICBsZXQgcG9zdExvZ291dFJlZGlyZWN0VXJpID0gYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XG4gICAgICAgIGlmIChwb3N0TG9nb3V0UmVkaXJlY3RVcmkpe1xuICAgICAgICAgICAgYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgPSBwb3N0TG9nb3V0UmVkaXJlY3RVcmk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5hdlBhcmFtcyA9IHtcbiAgICAgICAgICAgIHVzZVJlcGxhY2VUb05hdmlnYXRlIDogYXJncy51c2VSZXBsYWNlVG9OYXZpZ2F0ZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbm91dFN0YXJ0KGFyZ3MsIHRoaXMuX3JlZGlyZWN0TmF2aWdhdG9yLCBuYXZQYXJhbXMpLnRoZW4oKCk9PntcbiAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbm91dFJlZGlyZWN0OiBzdWNjZXNzZnVsXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2lnbm91dFJlZGlyZWN0Q2FsbGJhY2sodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0RW5kKHVybCB8fCB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvci51cmwpLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbm91dFJlZGlyZWN0Q2FsbGJhY2s6IHN1Y2Nlc3NmdWxcIik7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNpZ25vdXRQb3B1cChhcmdzID0ge30pIHtcbiAgICAgICAgYXJncyA9IE9iamVjdC5hc3NpZ24oe30sIGFyZ3MpO1xuXG4gICAgICAgIGFyZ3MucmVxdWVzdF90eXBlID0gXCJzbzpwXCI7XG4gICAgICAgIGxldCB1cmwgPSBhcmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnBvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTtcbiAgICAgICAgYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgPSB1cmw7XG4gICAgICAgIGFyZ3MuZGlzcGxheSA9IFwicG9wdXBcIjtcbiAgICAgICAgaWYgKGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpKXtcbiAgICAgICAgICAgIC8vIHdlJ3JlIHB1dHRpbmcgYSBkdW1teSBlbnRyeSBpbiBoZXJlIGJlY2F1c2Ugd2VcbiAgICAgICAgICAgIC8vIG5lZWQgYSB1bmlxdWUgaWQgZnJvbSB0aGUgc3RhdGUgZm9yIG5vdGlmaWNhdGlvblxuICAgICAgICAgICAgLy8gdG8gdGhlIHBhcmVudCB3aW5kb3csIHdoaWNoIGlzIG5lY2Vzc2FyeSBpZiB3ZVxuICAgICAgICAgICAgLy8gcGxhbiB0byByZXR1cm4gYmFjayB0byB0aGUgY2xpZW50IGFmdGVyIHNpZ25vdXRcbiAgICAgICAgICAgIC8vIGFuZCBzbyB3ZSBjYW4gY2xvc2UgdGhlIHBvcHVwIGFmdGVyIHNpZ25vdXRcbiAgICAgICAgICAgIGFyZ3Muc3RhdGUgPSBhcmdzLnN0YXRlIHx8IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25vdXQoYXJncywgdGhpcy5fcG9wdXBOYXZpZ2F0b3IsIHtcbiAgICAgICAgICAgIHN0YXJ0VXJsOiB1cmwsXG4gICAgICAgICAgICBwb3B1cFdpbmRvd0ZlYXR1cmVzOiBhcmdzLnBvcHVwV2luZG93RmVhdHVyZXMgfHwgdGhpcy5zZXR0aW5ncy5wb3B1cFdpbmRvd0ZlYXR1cmVzLFxuICAgICAgICAgICAgcG9wdXBXaW5kb3dUYXJnZXQ6IGFyZ3MucG9wdXBXaW5kb3dUYXJnZXQgfHwgdGhpcy5zZXR0aW5ncy5wb3B1cFdpbmRvd1RhcmdldFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIuc2lnbm91dFBvcHVwOiBzdWNjZXNzZnVsXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2lnbm91dFBvcHVwQ2FsbGJhY2sodXJsLCBrZWVwT3Blbikge1xuICAgICAgICBpZiAodHlwZW9mKGtlZXBPcGVuKSA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mKHVybCkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAga2VlcE9wZW4gPSB1cmw7XG4gICAgICAgICAgICB1cmwgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRlbGltaXRlciA9ICc/JztcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHVwTmF2aWdhdG9yLmNhbGxiYWNrKHVybCwga2VlcE9wZW4sIGRlbGltaXRlcikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBMb2cuaW5mbyhcIlVzZXJNYW5hZ2VyLnNpZ25vdXRQb3B1cENhbGxiYWNrOiBzdWNjZXNzZnVsXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfc2lnbm91dChhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0U3RhcnQoYXJncywgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMpLnRoZW4obmF2UmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25vdXRFbmQobmF2UmVzcG9uc2UudXJsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9zaWdub3V0U3RhcnQoYXJncyA9IHt9LCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IucHJlcGFyZShuYXZpZ2F0b3JQYXJhbXMpLnRoZW4oaGFuZGxlID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0U3RhcnQ6IGdvdCBuYXZpZ2F0b3Igd2luZG93IGhhbmRsZVwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbm91dFN0YXJ0OiBsb2FkZWQgY3VycmVudCB1c2VyIGZyb20gc3RvcmFnZVwiKTtcblxuICAgICAgICAgICAgICAgIHZhciByZXZva2VQcm9taXNlID0gdGhpcy5fc2V0dGluZ3MucmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQgPyB0aGlzLl9yZXZva2VJbnRlcm5hbCh1c2VyKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXZva2VQcm9taXNlLnRoZW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZF90b2tlbiA9IGFyZ3MuaWRfdG9rZW5faGludCB8fCB1c2VyICYmIHVzZXIuaWRfdG9rZW47XG4gICAgICAgICAgICAgICAgICAgIGlmIChpZF90b2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogU2V0dGluZyBpZF90b2tlbiBpbnRvIHNpZ25vdXQgcmVxdWVzdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MuaWRfdG9rZW5faGludCA9IGlkX3Rva2VuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlVXNlcigpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX3NpZ25vdXRTdGFydDogdXNlciByZW1vdmVkLCBjcmVhdGluZyBzaWdub3V0IHJlcXVlc3RcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNpZ25vdXRSZXF1ZXN0KGFyZ3MpLnRoZW4oc2lnbm91dFJlcXVlc3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0U3RhcnQ6IGdvdCBzaWdub3V0IHJlcXVlc3RcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3JQYXJhbXMudXJsID0gc2lnbm91dFJlcXVlc3QudXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaWdub3V0UmVxdWVzdC5zdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3JQYXJhbXMuaWQgPSBzaWdub3V0UmVxdWVzdC5zdGF0ZS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZS5uYXZpZ2F0ZShuYXZpZ2F0b3JQYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlLmNsb3NlKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLl9zaWdub3V0U3RhcnQ6IEVycm9yIGFmdGVyIHByZXBhcmluZyBuYXZpZ2F0b3IsIGNsb3NpbmcgbmF2aWdhdG9yIHdpbmRvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3NpZ25vdXRFbmQodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTaWdub3V0UmVzcG9uc2UodXJsKS50aGVuKHNpZ25vdXRSZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fc2lnbm91dEVuZDogZ290IHNpZ25vdXQgcmVzcG9uc2VcIik7XG5cbiAgICAgICAgICAgIHJldHVybiBzaWdub3V0UmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldm9rZUFjY2Vzc1Rva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXIoKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZUludGVybmFsKHVzZXIsIHRydWUpLnRoZW4oc3VjY2VzcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIucmV2b2tlQWNjZXNzVG9rZW46IHJlbW92aW5nIHRva2VuIHByb3BlcnRpZXMgZnJvbSB1c2VyIGFuZCByZS1zdG9yaW5nXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHVzZXIuYWNjZXNzX3Rva2VuID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdXNlci5yZWZyZXNoX3Rva2VuID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdXNlci5leHBpcmVzX2F0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdXNlci50b2tlbl90eXBlID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVVzZXIodXNlcikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5yZXZva2VBY2Nlc3NUb2tlbjogdXNlciBzdG9yZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHMubG9hZCh1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgIExvZy5pbmZvKFwiVXNlck1hbmFnZXIucmV2b2tlQWNjZXNzVG9rZW46IGFjY2VzcyB0b2tlbiByZXZva2VkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3Jldm9rZUludGVybmFsKHVzZXIsIHJlcXVpcmVkKSB7XG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICB2YXIgYWNjZXNzX3Rva2VuID0gdXNlci5hY2Nlc3NfdG9rZW47XG4gICAgICAgICAgICB2YXIgcmVmcmVzaF90b2tlbiA9IHVzZXIucmVmcmVzaF90b2tlbjtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZUFjY2Vzc1Rva2VuSW50ZXJuYWwoYWNjZXNzX3Rva2VuLCByZXF1aXJlZClcbiAgICAgICAgICAgICAgICAudGhlbihhdFN1Y2Nlc3MgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmV2b2tlUmVmcmVzaFRva2VuSW50ZXJuYWwocmVmcmVzaF90b2tlbiwgcmVxdWlyZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihydFN1Y2Nlc3MgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYXRTdWNjZXNzICYmICFydFN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIucmV2b2tlQWNjZXNzVG9rZW46IG5vIG5lZWQgdG8gcmV2b2tlIGR1ZSB0byBubyB0b2tlbihzKSwgb3IgSldUIGZvcm1hdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0U3VjY2VzcyB8fCBydFN1Y2Nlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgIH1cblxuICAgIF9yZXZva2VBY2Nlc3NUb2tlbkludGVybmFsKGFjY2Vzc190b2tlbiwgcmVxdWlyZWQpIHtcbiAgICAgICAgLy8gY2hlY2sgZm9yIEpXVCB2cy4gcmVmZXJlbmNlIHRva2VuXG4gICAgICAgIGlmICghYWNjZXNzX3Rva2VuIHx8IGFjY2Vzc190b2tlbi5pbmRleE9mKCcuJykgPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZShhY2Nlc3NfdG9rZW4sIHJlcXVpcmVkKS50aGVuKCgpID0+IHRydWUpO1xuICAgIH1cblxuICAgIF9yZXZva2VSZWZyZXNoVG9rZW5JbnRlcm5hbChyZWZyZXNoX3Rva2VuLCByZXF1aXJlZCkge1xuICAgICAgICBpZiAoIXJlZnJlc2hfdG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2UocmVmcmVzaF90b2tlbiwgcmVxdWlyZWQsIFwicmVmcmVzaF90b2tlblwiKS50aGVuKCgpID0+IHRydWUpO1xuICAgIH1cblxuICAgIHN0YXJ0U2lsZW50UmVuZXcoKSB7XG4gICAgICAgIHRoaXMuX3NpbGVudFJlbmV3U2VydmljZS5zdGFydCgpO1xuICAgIH1cblxuICAgIHN0b3BTaWxlbnRSZW5ldygpIHtcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdTZXJ2aWNlLnN0b3AoKTtcbiAgICB9XG5cbiAgICBnZXQgX3VzZXJTdG9yZUtleSgpIHtcbiAgICAgICAgcmV0dXJuIGB1c2VyOiR7dGhpcy5zZXR0aW5ncy5hdXRob3JpdHl9OiR7dGhpcy5zZXR0aW5ncy5jbGllbnRfaWR9YDtcbiAgICB9XG5cbiAgICBfbG9hZFVzZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyU3RvcmUuZ2V0KHRoaXMuX3VzZXJTdG9yZUtleSkudGhlbihzdG9yYWdlU3RyaW5nID0+IHtcbiAgICAgICAgICAgIGlmIChzdG9yYWdlU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuX2xvYWRVc2VyOiB1c2VyIHN0b3JhZ2VTdHJpbmcgbG9hZGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBVc2VyLmZyb21TdG9yYWdlU3RyaW5nKHN0b3JhZ2VTdHJpbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5fbG9hZFVzZXI6IG5vIHVzZXIgc3RvcmFnZVN0cmluZ1wiKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdG9yZVVzZXIodXNlcikge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuc3RvcmVVc2VyOiBzdG9yaW5nIHVzZXJcIik7XG5cbiAgICAgICAgICAgIHZhciBzdG9yYWdlU3RyaW5nID0gdXNlci50b1N0b3JhZ2VTdHJpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91c2VyU3RvcmUuc2V0KHRoaXMuX3VzZXJTdG9yZUtleSwgc3RvcmFnZVN0cmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJzdG9yZVVzZXIuc3RvcmVVc2VyOiByZW1vdmluZyB1c2VyXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJTdG9yZS5yZW1vdmUodGhpcy5fdXNlclN0b3JlS2V5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCB7IExvZyB9IGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCB7IEFjY2Vzc1Rva2VuRXZlbnRzIH0gZnJvbSAnLi9BY2Nlc3NUb2tlbkV2ZW50cy5qcyc7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4vRXZlbnQuanMnO1xuXG5leHBvcnQgY2xhc3MgVXNlck1hbmFnZXJFdmVudHMgZXh0ZW5kcyBBY2Nlc3NUb2tlbkV2ZW50cyB7XG5cbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgICAgICBzdXBlcihzZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuX3VzZXJMb2FkZWQgPSBuZXcgRXZlbnQoXCJVc2VyIGxvYWRlZFwiKTtcbiAgICAgICAgdGhpcy5fdXNlclVubG9hZGVkID0gbmV3IEV2ZW50KFwiVXNlciB1bmxvYWRlZFwiKTtcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvciA9IG5ldyBFdmVudChcIlNpbGVudCByZW5ldyBlcnJvclwiKTtcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZEluID0gbmV3IEV2ZW50KFwiVXNlciBzaWduZWQgaW5cIik7XG4gICAgICAgIHRoaXMuX3VzZXJTaWduZWRPdXQgPSBuZXcgRXZlbnQoXCJVc2VyIHNpZ25lZCBvdXRcIik7XG4gICAgICAgIHRoaXMuX3VzZXJTZXNzaW9uQ2hhbmdlZCA9IG5ldyBFdmVudChcIlVzZXIgc2Vzc2lvbiBjaGFuZ2VkXCIpO1xuICAgIH1cblxuICAgIGxvYWQodXNlciwgcmFpc2VFdmVudD10cnVlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLmxvYWRcIik7XG4gICAgICAgIHN1cGVyLmxvYWQodXNlcik7XG4gICAgICAgIGlmIChyYWlzZUV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLl91c2VyTG9hZGVkLnJhaXNlKHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVubG9hZCgpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMudW5sb2FkXCIpO1xuICAgICAgICBzdXBlci51bmxvYWQoKTtcbiAgICAgICAgdGhpcy5fdXNlclVubG9hZGVkLnJhaXNlKCk7XG4gICAgfVxuXG4gICAgYWRkVXNlckxvYWRlZChjYikge1xuICAgICAgICB0aGlzLl91c2VyTG9hZGVkLmFkZEhhbmRsZXIoY2IpO1xuICAgIH1cbiAgICByZW1vdmVVc2VyTG9hZGVkKGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJMb2FkZWQucmVtb3ZlSGFuZGxlcihjYik7XG4gICAgfVxuXG4gICAgYWRkVXNlclVubG9hZGVkKGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJVbmxvYWRlZC5hZGRIYW5kbGVyKGNiKTtcbiAgICB9XG4gICAgcmVtb3ZlVXNlclVubG9hZGVkKGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJVbmxvYWRlZC5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgICB9XG5cbiAgICBhZGRTaWxlbnRSZW5ld0Vycm9yKGNiKSB7XG4gICAgICAgIHRoaXMuX3NpbGVudFJlbmV3RXJyb3IuYWRkSGFuZGxlcihjYik7XG4gICAgfVxuICAgIHJlbW92ZVNpbGVudFJlbmV3RXJyb3IoY2IpIHtcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvci5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgICB9XG4gICAgX3JhaXNlU2lsZW50UmVuZXdFcnJvcihlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLl9yYWlzZVNpbGVudFJlbmV3RXJyb3JcIiwgZS5tZXNzYWdlKTtcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvci5yYWlzZShlKTtcbiAgICB9XG5cbiAgICBhZGRVc2VyU2lnbmVkSW4oY2IpIHtcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZEluLmFkZEhhbmRsZXIoY2IpO1xuICAgIH1cbiAgICByZW1vdmVVc2VyU2lnbmVkSW4oY2IpIHtcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZEluLnJlbW92ZUhhbmRsZXIoY2IpO1xuICAgIH1cbiAgICBfcmFpc2VVc2VyU2lnbmVkSW4oKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLl9yYWlzZVVzZXJTaWduZWRJblwiKTtcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZEluLnJhaXNlKCk7XG4gICAgfVxuXG4gICAgYWRkVXNlclNpZ25lZE91dChjYikge1xuICAgICAgICB0aGlzLl91c2VyU2lnbmVkT3V0LmFkZEhhbmRsZXIoY2IpO1xuICAgIH1cbiAgICByZW1vdmVVc2VyU2lnbmVkT3V0KGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJTaWduZWRPdXQucmVtb3ZlSGFuZGxlcihjYik7XG4gICAgfVxuICAgIF9yYWlzZVVzZXJTaWduZWRPdXQoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLl9yYWlzZVVzZXJTaWduZWRPdXRcIik7XG4gICAgICAgIHRoaXMuX3VzZXJTaWduZWRPdXQucmFpc2UoKTtcbiAgICB9XG5cbiAgICBhZGRVc2VyU2Vzc2lvbkNoYW5nZWQoY2IpIHtcbiAgICAgICAgdGhpcy5fdXNlclNlc3Npb25DaGFuZ2VkLmFkZEhhbmRsZXIoY2IpO1xuICAgIH1cbiAgICByZW1vdmVVc2VyU2Vzc2lvbkNoYW5nZWQoY2IpIHtcbiAgICAgICAgdGhpcy5fdXNlclNlc3Npb25DaGFuZ2VkLnJlbW92ZUhhbmRsZXIoY2IpO1xuICAgIH1cbiAgICBfcmFpc2VVc2VyU2Vzc2lvbkNoYW5nZWQoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLl9yYWlzZVVzZXJTZXNzaW9uQ2hhbmdlZFwiKTtcbiAgICAgICAgdGhpcy5fdXNlclNlc3Npb25DaGFuZ2VkLnJhaXNlKCk7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IHsgTG9nIH0gZnJvbSAnLi9Mb2cuanMnO1xuaW1wb3J0IHsgT2lkY0NsaWVudFNldHRpbmdzIH0gZnJvbSAnLi9PaWRjQ2xpZW50U2V0dGluZ3MuanMnO1xuaW1wb3J0IHsgUmVkaXJlY3ROYXZpZ2F0b3IgfSBmcm9tICcuL1JlZGlyZWN0TmF2aWdhdG9yLmpzJztcbmltcG9ydCB7IFBvcHVwTmF2aWdhdG9yIH0gZnJvbSAnLi9Qb3B1cE5hdmlnYXRvci5qcyc7XG5pbXBvcnQgeyBJRnJhbWVOYXZpZ2F0b3IgfSBmcm9tICcuL0lGcmFtZU5hdmlnYXRvci5qcyc7XG5pbXBvcnQgeyBXZWJTdG9yYWdlU3RhdGVTdG9yZSB9IGZyb20gJy4vV2ViU3RvcmFnZVN0YXRlU3RvcmUuanMnO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnLi9HbG9iYWwuanMnO1xuaW1wb3J0IHsgU2lnbmluUmVxdWVzdCB9IGZyb20gJy4vU2lnbmluUmVxdWVzdC5qcyc7XG5cbmNvbnN0IERlZmF1bHRBY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IDYwO1xuY29uc3QgRGVmYXVsdENoZWNrU2Vzc2lvbkludGVydmFsID0gMjAwMDtcblxuZXhwb3J0IGNsYXNzIFVzZXJNYW5hZ2VyU2V0dGluZ3MgZXh0ZW5kcyBPaWRjQ2xpZW50U2V0dGluZ3Mge1xuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgcG9wdXBfcmVkaXJlY3RfdXJpLFxuICAgICAgICBwb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmksXG4gICAgICAgIHBvcHVwV2luZG93RmVhdHVyZXMsXG4gICAgICAgIHBvcHVwV2luZG93VGFyZ2V0LFxuICAgICAgICBzaWxlbnRfcmVkaXJlY3RfdXJpLFxuICAgICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dCxcbiAgICAgICAgYXV0b21hdGljU2lsZW50UmVuZXcgPSBmYWxzZSxcbiAgICAgICAgdmFsaWRhdGVTdWJPblNpbGVudFJlbmV3ID0gZmFsc2UsXG4gICAgICAgIGluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyA9IHRydWUsXG4gICAgICAgIG1vbml0b3JTZXNzaW9uID0gdHJ1ZSxcbiAgICAgICAgbW9uaXRvckFub255bW91c1Nlc3Npb24gPSBmYWxzZSxcbiAgICAgICAgY2hlY2tTZXNzaW9uSW50ZXJ2YWwgPSBEZWZhdWx0Q2hlY2tTZXNzaW9uSW50ZXJ2YWwsXG4gICAgICAgIHN0b3BDaGVja1Nlc3Npb25PbkVycm9yID0gdHJ1ZSxcbiAgICAgICAgcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUsXG4gICAgICAgIHJldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0ID0gZmFsc2UsXG4gICAgICAgIGFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lID0gRGVmYXVsdEFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lLFxuICAgICAgICByZWRpcmVjdE5hdmlnYXRvciA9IG5ldyBSZWRpcmVjdE5hdmlnYXRvcigpLFxuICAgICAgICBwb3B1cE5hdmlnYXRvciA9IG5ldyBQb3B1cE5hdmlnYXRvcigpLFxuICAgICAgICBpZnJhbWVOYXZpZ2F0b3IgPSBuZXcgSUZyYW1lTmF2aWdhdG9yKCksXG4gICAgICAgIHVzZXJTdG9yZSA9IG5ldyBXZWJTdG9yYWdlU3RhdGVTdG9yZSh7IHN0b3JlOiBHbG9iYWwuc2Vzc2lvblN0b3JhZ2UgfSlcbiAgICB9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoYXJndW1lbnRzWzBdKTtcblxuICAgICAgICB0aGlzLl9wb3B1cF9yZWRpcmVjdF91cmkgPSBwb3B1cF9yZWRpcmVjdF91cmk7XG4gICAgICAgIHRoaXMuX3BvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSA9IHBvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTtcbiAgICAgICAgdGhpcy5fcG9wdXBXaW5kb3dGZWF0dXJlcyA9IHBvcHVwV2luZG93RmVhdHVyZXM7XG4gICAgICAgIHRoaXMuX3BvcHVwV2luZG93VGFyZ2V0ID0gcG9wdXBXaW5kb3dUYXJnZXQ7XG5cbiAgICAgICAgdGhpcy5fc2lsZW50X3JlZGlyZWN0X3VyaSA9IHNpbGVudF9yZWRpcmVjdF91cmk7XG4gICAgICAgIHRoaXMuX3NpbGVudFJlcXVlc3RUaW1lb3V0ID0gc2lsZW50UmVxdWVzdFRpbWVvdXQ7XG4gICAgICAgIHRoaXMuX2F1dG9tYXRpY1NpbGVudFJlbmV3ID0gYXV0b21hdGljU2lsZW50UmVuZXc7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldyA9IHZhbGlkYXRlU3ViT25TaWxlbnRSZW5ldztcbiAgICAgICAgdGhpcy5faW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3ID0gaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3O1xuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IGFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lO1xuXG4gICAgICAgIHRoaXMuX21vbml0b3JTZXNzaW9uID0gbW9uaXRvclNlc3Npb247XG4gICAgICAgIHRoaXMuX21vbml0b3JBbm9ueW1vdXNTZXNzaW9uID0gbW9uaXRvckFub255bW91c1Nlc3Npb247XG4gICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbkludGVydmFsID0gY2hlY2tTZXNzaW9uSW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuX3N0b3BDaGVja1Nlc3Npb25PbkVycm9yID0gc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3I7XG4gICAgICAgIGlmIChxdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSkge1xuICAgICAgICAgICAgdGhpcy5fcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUgPSBxdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZTtcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSBpZiAoYXJndW1lbnRzWzBdICYmIGFyZ3VtZW50c1swXS5yZXNwb25zZV90eXBlKSB7XG4gICAgICAgICAgICB0aGlzLl9xdWVyeV9zdGF0dXNfcmVzcG9uc2VfdHlwZSA9IFNpZ25pblJlcXVlc3QuaXNPaWRjKGFyZ3VtZW50c1swXS5yZXNwb25zZV90eXBlKSA/IFwiaWRfdG9rZW5cIiA6IFwiY29kZVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUgPSBcImlkX3Rva2VuXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQgPSByZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dDtcblxuICAgICAgICB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvciA9IHJlZGlyZWN0TmF2aWdhdG9yO1xuICAgICAgICB0aGlzLl9wb3B1cE5hdmlnYXRvciA9IHBvcHVwTmF2aWdhdG9yO1xuICAgICAgICB0aGlzLl9pZnJhbWVOYXZpZ2F0b3IgPSBpZnJhbWVOYXZpZ2F0b3I7XG5cbiAgICAgICAgdGhpcy5fdXNlclN0b3JlID0gdXNlclN0b3JlO1xuICAgIH1cblxuICAgIGdldCBwb3B1cF9yZWRpcmVjdF91cmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3B1cF9yZWRpcmVjdF91cmk7XG4gICAgfVxuICAgIGdldCBwb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XG4gICAgfVxuICAgIGdldCBwb3B1cFdpbmRvd0ZlYXR1cmVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBXaW5kb3dGZWF0dXJlcztcbiAgICB9XG4gICAgZ2V0IHBvcHVwV2luZG93VGFyZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBXaW5kb3dUYXJnZXQ7XG4gICAgfVxuXG4gICAgZ2V0IHNpbGVudF9yZWRpcmVjdF91cmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWxlbnRfcmVkaXJlY3RfdXJpO1xuICAgIH1cbiAgICAgZ2V0IHNpbGVudFJlcXVlc3RUaW1lb3V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lsZW50UmVxdWVzdFRpbWVvdXQ7XG4gICAgfVxuICAgIGdldCBhdXRvbWF0aWNTaWxlbnRSZW5ldygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dG9tYXRpY1NpbGVudFJlbmV3O1xuICAgIH1cbiAgICBnZXQgdmFsaWRhdGVTdWJPblNpbGVudFJlbmV3KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVTdWJPblNpbGVudFJlbmV3O1xuICAgIH1cbiAgICBnZXQgaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3O1xuICAgIH1cbiAgICBnZXQgYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZTtcbiAgICB9XG5cbiAgICBnZXQgbW9uaXRvclNlc3Npb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb25pdG9yU2Vzc2lvbjtcbiAgICB9XG4gICAgZ2V0IG1vbml0b3JBbm9ueW1vdXNTZXNzaW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9uaXRvckFub255bW91c1Nlc3Npb247XG4gICAgfVxuICAgIGdldCBjaGVja1Nlc3Npb25JbnRlcnZhbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrU2Vzc2lvbkludGVydmFsO1xuICAgIH1cbiAgICBnZXQgc3RvcENoZWNrU2Vzc2lvbk9uRXJyb3IoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3BDaGVja1Nlc3Npb25PbkVycm9yO1xuICAgIH1cbiAgICBnZXQgcXVlcnlfc3RhdHVzX3Jlc3BvbnNlX3R5cGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJ5X3N0YXR1c19yZXNwb25zZV90eXBlO1xuICAgIH1cbiAgICBnZXQgcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dDtcbiAgICB9XG5cbiAgICBnZXQgcmVkaXJlY3ROYXZpZ2F0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvcjtcbiAgICB9XG4gICAgZ2V0IHBvcHVwTmF2aWdhdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBOYXZpZ2F0b3I7XG4gICAgfVxuICAgIGdldCBpZnJhbWVOYXZpZ2F0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZnJhbWVOYXZpZ2F0b3I7XG4gICAgfVxuXG4gICAgZ2V0IHVzZXJTdG9yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJTdG9yZTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL0xvZy5qcyc7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICcuL0dsb2JhbC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBXZWJTdG9yYWdlU3RhdGVTdG9yZSB7XG4gICAgY29uc3RydWN0b3Ioe3ByZWZpeCA9IFwib2lkYy5cIiwgc3RvcmUgPSBHbG9iYWwubG9jYWxTdG9yYWdlfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuX3N0b3JlID0gc3RvcmU7XG4gICAgICAgIHRoaXMuX3ByZWZpeCA9IHByZWZpeDtcbiAgICB9XG5cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBMb2cuZGVidWcoXCJXZWJTdG9yYWdlU3RhdGVTdG9yZS5zZXRcIiwga2V5KTtcblxuICAgICAgICBrZXkgPSB0aGlzLl9wcmVmaXggKyBrZXk7XG5cbiAgICAgICAgdGhpcy5fc3RvcmUuc2V0SXRlbShrZXksIHZhbHVlKTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgZ2V0KGtleSkge1xuICAgICAgICBMb2cuZGVidWcoXCJXZWJTdG9yYWdlU3RhdGVTdG9yZS5nZXRcIiwga2V5KTtcblxuICAgICAgICBrZXkgPSB0aGlzLl9wcmVmaXggKyBrZXk7XG5cbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9zdG9yZS5nZXRJdGVtKGtleSk7XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpdGVtKTtcbiAgICB9XG5cbiAgICByZW1vdmUoa2V5KSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIldlYlN0b3JhZ2VTdGF0ZVN0b3JlLnJlbW92ZVwiLCBrZXkpO1xuXG4gICAgICAgIGtleSA9IHRoaXMuX3ByZWZpeCArIGtleTtcblxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX3N0b3JlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgdGhpcy5fc3RvcmUucmVtb3ZlSXRlbShrZXkpO1xuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaXRlbSk7XG4gICAgfVxuXG4gICAgZ2V0QWxsS2V5cygpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiV2ViU3RvcmFnZVN0YXRlU3RvcmUuZ2V0QWxsS2V5c1wiKTtcblxuICAgICAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9zdG9yZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBrZXkgPSB0aGlzLl9zdG9yZS5rZXkoaW5kZXgpO1xuXG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YodGhpcy5fcHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkuc3Vic3RyKHRoaXMuX3ByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoa2V5cyk7XG4gICAgfVxufVxuIiwiLypcbkJhc2VkIG9uIHRoZSB3b3JrIG9mIEF1dGgwXG5odHRwczovL2dpdGh1Yi5jb20vYXV0aDAvaWR0b2tlbi12ZXJpZmllclxuaHR0cHM6Ly9naXRodWIuY29tL2F1dGgwL2lkdG9rZW4tdmVyaWZpZXIvYmxvYi9tYXN0ZXIvTElDRU5TRVxuV2hpY2ggaXMgYmFzZWQgb24gdGhlIHdvcmsgb2YgVG9tIFd1XG5odHRwOi8vd3d3LWNzLXN0dWRlbnRzLnN0YW5mb3JkLmVkdS9+dGp3L2pzYm4vXG5odHRwOi8vd3d3LWNzLXN0dWRlbnRzLnN0YW5mb3JkLmVkdS9+dGp3L2pzYm4vTElDRU5TRVxuKi9cblxuLypcbiAqIFRvIHN1cHBvcnQgbW9zdCBiYXNpYyBPcGVuSWQgdXNlIGNhc2VzICh1c2luZyBSU0EyNTYpLCB3ZSBjYW4gZ2V0IGF3YXkgd2l0aG91dFxuICogcmVxdWlyaW5nIHRoZSBmdWxsIGpyc2FzaWduIGZlYXR1cmUgc2V0IChhbmQgcmVzdWx0aW5nIG1hc3NpdmUgYnVuZGxlKS5cbiAqXG4gKiAtIFN1cHBvcnQgUlNBIDI1NiBhbGdvcml0aG0gKG9wdGlvbmFsbHkgY291bGQgc3VwcG9ydCBSU0EqIGZhbWlseSlcbiAqIC0gUGFyc2UgSldUIHRva2VucyB1c2luZyB0aGUgKG4pIHBhcmFtZXRlci5cbiAqIC0gVmVyaWZ5IHNpZ25hdHVyZSBvZiBpZF90b2tlbnNcbiAqIC0gVmVyaWZ5IGF0X2hhc2ggb2YgYWNjZXNzX3Rva2Vuc1xuICogLSBQZXJmb3JtIGNvbW1vbiBiYXNlNjQgZW5jb2RpbmcvZGVjb2RpbmcgdGFza3MuXG4gKi9cblxuaW1wb3J0IEpTQk4gZnJvbSAnanNibic7XG5pbXBvcnQgU0hBMjU2IGZyb20gJ2NyeXB0by1qcy9zaGEyNTYnO1xuaW1wb3J0IGJhc2U2NEpzIGZyb20gJ2Jhc2U2NC1qcyc7XG5cbnZhciBCaWdJbnRlZ2VyID0gSlNCTi5CaWdJbnRlZ2VyO1xuXG4vKiEgKGMpIFRvbSBXdSB8IGh0dHA6Ly93d3ctY3Mtc3R1ZGVudHMuc3RhbmZvcmQuZWR1L350ancvanNibi9cbiAqL1xudmFyIGI2NG1hcCA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiO1xudmFyIGI2NHBhZCA9IFwiPVwiO1xuXG5jb25zdCBCYXNlNjQgPSB7XG4gICAgYjY0dG9oZXgocykge1xuICAgICAgICB2YXIgcmV0ID0gXCJcIjtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciBrID0gMDsgLy8gYjY0IHN0YXRlLCAwLTNcbiAgICAgICAgdmFyIHNsb3A7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmKHMuY2hhckF0KGkpID09PSBiNjRwYWQpIGJyZWFrO1xuICAgICAgICAgICAgdmFyIHYgPSBiNjRtYXAuaW5kZXhPZihzLmNoYXJBdChpKSk7XG4gICAgICAgICAgICBpZih2IDwgMCkgY29udGludWU7XG4gICAgICAgICAgICBpZihrID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodiA+PiAyKTtcbiAgICAgICAgICAgICAgICBzbG9wID0gdiAmIDM7XG4gICAgICAgICAgICAgICAgayA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGsgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoc2xvcCA8PCAyKSB8ICh2ID4+IDQpKTtcbiAgICAgICAgICAgICAgICBzbG9wID0gdiAmIDB4ZjtcbiAgICAgICAgICAgICAgICBrID0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoayA9PT0gMikge1xuICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHNsb3ApO1xuICAgICAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHYgPj4gMik7XG4gICAgICAgICAgICAgICAgc2xvcCA9IHYgJiAzO1xuICAgICAgICAgICAgICAgIGsgPSAzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKHNsb3AgPDwgMikgfCAodiA+PiA0KSk7XG4gICAgICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodiAmIDB4Zik7XG4gICAgICAgICAgICAgICAgayA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoayA9PT0gMSlcbiAgICAgICAgICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHNsb3AgPDwgMik7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcbiAgICBoZXhUb0Jhc2U2NChoKSB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgYztcbiAgICAgICAgdmFyIHJldCA9IFwiXCI7XG4gICAgICAgIGZvcihpID0gMDsgaSszIDw9IGgubGVuZ3RoOyBpKz0zKSB7XG4gICAgICAgICAgICBjID0gcGFyc2VJbnQoaC5zdWJzdHJpbmcoaSxpKzMpLDE2KTtcbiAgICAgICAgICAgIHJldCArPSBiNjRtYXAuY2hhckF0KGMgPj4gNikgKyBiNjRtYXAuY2hhckF0KGMgJiA2Myk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaSsxID09PSBoLmxlbmd0aCkge1xuICAgICAgICAgICAgYyA9IHBhcnNlSW50KGguc3Vic3RyaW5nKGksaSsxKSwxNik7XG4gICAgICAgICAgICByZXQgKz0gYjY0bWFwLmNoYXJBdChjIDw8IDIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoaSsyID09PSBoLmxlbmd0aCkge1xuICAgICAgICAgICAgYyA9IHBhcnNlSW50KGguc3Vic3RyaW5nKGksaSsyKSwxNik7XG4gICAgICAgICAgICByZXQgKz0gYjY0bWFwLmNoYXJBdChjID4+IDIpICsgYjY0bWFwLmNoYXJBdCgoYyAmIDMpIDw8IDQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiNjRwYWQpIHdoaWxlKChyZXQubGVuZ3RoICYgMykgPiAwKSByZXQgKz0gYjY0cGFkO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH0sXG5cbiAgICBwYWRkaW5nKHN0cikge1xuICAgICAgICB2YXIgbW9kID0gKHN0ci5sZW5ndGggJSA0KTtcbiAgICAgICAgdmFyIHBhZCA9IDQgLSBtb2Q7XG5cbiAgICAgICAgaWYgKG1vZCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHIgKyAobmV3IEFycmF5KDEgKyBwYWQpKS5qb2luKCc9Jyk7XG4gICAgfSxcblxuICAgIGJ5dGVBcnJheVRvSGV4KHJhdykge1xuICAgICAgICB2YXIgSEVYID0gJyc7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByYXcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBfaGV4ID0gcmF3W2ldLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgIEhFWCArPSAoX2hleC5sZW5ndGggPT09IDIgPyBfaGV4IDogJzAnICsgX2hleCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gSEVYO1xuICAgIH0sXG5cbiAgICBkZWNvZGVUb0hFWChzdHIpIHtcbiAgICAgICAgcmV0dXJuIEJhc2U2NC5ieXRlQXJyYXlUb0hleChiYXNlNjRKcy50b0J5dGVBcnJheShCYXNlNjQucGFkZGluZyhzdHIpKSk7XG4gICAgfSxcblxuICAgIGJhc2U2NFRvQmFzZTY0VXJsKHMpIHtcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvPS9nLCBcIlwiKTtcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvXFwrL2csIFwiLVwiKTtcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvXFwvL2csIFwiX1wiKTtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfSxcblxuICAgIHVybERlY29kZShzdHIpIHtcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoLy0vZywgJysnKSAvLyBDb252ZXJ0ICctJyB0byAnKydcbiAgICAgICAgICAgIC5yZXBsYWNlKC9fL2csICcvJykgLy8gQ29udmVydCAnXycgdG8gJy8nXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzL2csICcgJyk7IC8vIENvbnZlcnQgJ1xccycgdG8gJyAnXG5cbiAgICAgICAgcmV0dXJuIGF0b2Ioc3RyKTtcbiAgICB9XG59O1xuXG5cbnZhciBEaWdlc3RJbmZvSGVhZCA9IHtcbiAgICBzaGExOiAnMzAyMTMwMDkwNjA1MmIwZTAzMDIxYTA1MDAwNDE0JyxcbiAgICBzaGEyMjQ6ICczMDJkMzAwZDA2MDk2MDg2NDgwMTY1MDMwNDAyMDQwNTAwMDQxYycsXG4gICAgc2hhMjU2OiAnMzAzMTMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjAxMDUwMDA0MjAnLFxuICAgIHNoYTM4NDogJzMwNDEzMDBkMDYwOTYwODY0ODAxNjUwMzA0MDIwMjA1MDAwNDMwJyxcbiAgICBzaGE1MTI6ICczMDUxMzAwZDA2MDk2MDg2NDgwMTY1MDMwNDAyMDMwNTAwMDQ0MCcsXG4gICAgbWQyOiAnMzAyMDMwMGMwNjA4MmE4NjQ4ODZmNzBkMDIwMjA1MDAwNDEwJyxcbiAgICBtZDU6ICczMDIwMzAwYzA2MDgyYTg2NDg4NmY3MGQwMjA1MDUwMDA0MTAnLFxuICAgIHJpcGVtZDE2MDogJzMwMjEzMDA5MDYwNTJiMjQwMzAyMDEwNTAwMDQxNCdcbn07XG5cbnZhciBEaWdlc3RBbGdzID0ge1xuICAgIHNoYTI1NjogU0hBMjU2LFxuICAgIFNIQTI1NjpTSEEyNTZcbn07XG5cbmZ1bmN0aW9uIFJTQVZlcmlmaWVyKG1vZHVsdXMsIGV4cCkge1xuICAgIHRoaXMubiA9IG51bGw7XG4gICAgdGhpcy5lID0gMDtcblxuICAgIGlmIChtb2R1bHVzICE9IG51bGwgJiYgZXhwICE9IG51bGwgJiYgbW9kdWx1cy5sZW5ndGggPiAwICYmIGV4cC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMubiA9IG5ldyBCaWdJbnRlZ2VyKG1vZHVsdXMsIDE2KTtcbiAgICAgICAgdGhpcy5lID0gcGFyc2VJbnQoZXhwLCAxNik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGtleSBkYXRhJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbGdvcml0aG1Gcm9tRGlnZXN0KGhEaWdlc3RJbmZvKSB7XG4gICAgZm9yICh2YXIgYWxnTmFtZSBpbiBEaWdlc3RJbmZvSGVhZCkge1xuICAgICAgICB2YXIgaGVhZCA9IERpZ2VzdEluZm9IZWFkW2FsZ05hbWVdO1xuICAgICAgICB2YXIgbGVuID0gaGVhZC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGhEaWdlc3RJbmZvLnN1YnN0cmluZygwLCBsZW4pID09PSBoZWFkKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFsZzogYWxnTmFtZSxcbiAgICAgICAgICAgICAgICBoYXNoOiBoRGlnZXN0SW5mby5zdWJzdHJpbmcobGVuKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gW107XG59XG5cblxuUlNBVmVyaWZpZXIucHJvdG90eXBlLnZlcmlmeSA9IGZ1bmN0aW9uIChtc2csIGVuY3NpZykge1xuICAgIGVuY3NpZyA9IEJhc2U2NC5kZWNvZGVUb0hFWChlbmNzaWcpO1xuICAgIGVuY3NpZyA9IGVuY3NpZy5yZXBsYWNlKC9bXjAtOWEtZl18W1xcc1xcbl1dL2lnLCAnJyk7XG5cbiAgICB2YXIgc2lnID0gbmV3IEJpZ0ludGVnZXIoZW5jc2lnLCAxNik7XG5cbiAgICBpZiAoc2lnLmJpdExlbmd0aCgpID4gdGhpcy5uLmJpdExlbmd0aCgpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2lnbmF0dXJlIGRvZXMgbm90IG1hdGNoIHdpdGggdGhlIGtleSBtb2R1bHVzLicpO1xuICAgIH1cblxuICAgIHZhciBkZWNyeXB0ZWRTaWcgPSBzaWcubW9kUG93SW50KHRoaXMuZSwgdGhpcy5uKTtcbiAgICB2YXIgZGlnZXN0ID0gZGVjcnlwdGVkU2lnLnRvU3RyaW5nKDE2KS5yZXBsYWNlKC9eMWYrMDAvLCAnJyk7XG4gICAgdmFyIGRpZ2VzdEluZm8gPSBnZXRBbGdvcml0aG1Gcm9tRGlnZXN0KGRpZ2VzdCk7XG5cbiAgICBpZiAoZGlnZXN0SW5mby5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghRGlnZXN0QWxncy5oYXNPd25Qcm9wZXJ0eShkaWdlc3RJbmZvLmFsZykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIYXNoaW5nIGFsZ29yaXRobSBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgIH1cblxuICAgIHZhciBtc2dIYXNoID0gRGlnZXN0QWxnc1tkaWdlc3RJbmZvLmFsZ10obXNnKS50b1N0cmluZygpO1xuICAgIHJldHVybiAoZGlnZXN0SW5mby5oYXNoID09PSBtc2dIYXNoKTtcbn07XG5cbmNvbnN0IEFsbG93ZWRTaWduaW5nQWxncyA9IFsnUlMyNTYnXTtcblxuY29uc3QgandzID0ge1xuICAgIEpXUzoge1xuICAgICAgICBwYXJzZTogZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IHRva2VuLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICB2YXIgaGVhZGVyO1xuICAgICAgICAgICAgdmFyIHBheWxvYWQ7XG5cbiAgICAgICAgICAgIC8vIFRoaXMgZGl2ZXJnZXMgZnJvbSBBdXRoMCdzIGltcGxlbWVudGF0aW9uLCB3aGljaCB0aHJvd3MgcmF0aGVyIHRoYW5cbiAgICAgICAgICAgIC8vIHJldHVybmluZyB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChwYXJ0cy5sZW5ndGggIT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGhlYWRlciA9IEpTT04ucGFyc2UoQmFzZTY0LnVybERlY29kZShwYXJ0c1swXSkpO1xuICAgICAgICAgICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKEJhc2U2NC51cmxEZWNvZGUocGFydHNbMV0pKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdUb2tlbiBoZWFkZXIgb3IgcGF5bG9hZCBpcyBub3QgdmFsaWQgSlNPTicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhlYWRlck9iajogaGVhZGVyLFxuICAgICAgICAgICAgICAgIHBheWxvYWRPYmo6IHBheWxvYWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB2ZXJpZnk6IGZ1bmN0aW9uKGp3dCwga2V5LCBhbGxvd2VkU2lnbmluZ0FsZ3MgPSBbXSkge1xuICAgICAgICAgICAgYWxsb3dlZFNpZ25pbmdBbGdzLmZvckVhY2goKGFsZykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChBbGxvd2VkU2lnbmluZ0FsZ3MuaW5kZXhPZihhbGcpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2lnbmluZyBhbGdvcml0aG06ICcgKyBhbGcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHZlcmlmeSA9IG5ldyBSU0FWZXJpZmllcihrZXkubiwga2V5LmUpO1xuICAgICAgICAgICAgdmFyIHBhcnRzID0gand0LnNwbGl0KCcuJyk7XG5cbiAgICAgICAgICAgIHZhciBoZWFkZXJBbmRQYXlsb2FkID0gW3BhcnRzWzBdLCBwYXJ0c1sxXV0uam9pbignLicpO1xuICAgICAgICAgICAgcmV0dXJuIHZlcmlmeS52ZXJpZnkoaGVhZGVyQW5kUGF5bG9hZCwgcGFydHNbMl0pO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG5jb25zdCBLZXlVdGlsID0ge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgZGVjb2RlZCBrZXlzIGluIEhleCBmb3JtYXQgZm9yIHVzZSBpbiBjcnlwdG8gZnVuY3Rpb25zLlxuICAgICAqIFN1cHBvcnRzIG1vZHVsdXMvZXhwb25lbnQtc3R5bGUga2V5cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBrZXkgdGhlIHNlY3VyaXR5IGtleVxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgZ2V0S2V5KGtleSkge1xuICAgICAgICBpZiAoa2V5Lmt0eSA9PT0gJ1JTQScpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZTogQmFzZTY0LmRlY29kZVRvSEVYKGtleS5lKSxcbiAgICAgICAgICAgICAgICBuOiBCYXNlNjQuZGVjb2RlVG9IRVgoa2V5Lm4pLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG59O1xuXG5jb25zdCBYNTA5ID0ge1xuICAgIGdldFB1YmxpY0tleUZyb21DZXJ0UEVNOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQuIFVzZSB0aGUgZnVsbCBvaWRjLWNsaWVudCBsaWJyYXJ5IGlmIHlvdSBuZWVkIHN1cHBvcnQgZm9yIFg1MDkuJyk7XG4gICAgfSxcbn07XG5cbmNvbnN0IGNyeXB0byA9IHtcbiAgICBVdGlsOiB7XG4gICAgICAgIGhhc2hTdHJpbmc6IGZ1bmN0aW9uKHZhbHVlLCBhbGcpIHtcbiAgICAgICAgICAgIHZhciBoYXNoRnVuYyA9IERpZ2VzdEFsZ3NbYWxnXTtcbiAgICAgICAgICAgIHJldHVybiBoYXNoRnVuYyh2YWx1ZSkudG9TdHJpbmcoKTtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBoZXh0b2I2NHUocykge1xuICAgIGlmIChzLmxlbmd0aCAlIDIgPT09IDEpIHtcbiAgICAgICAgcyA9ICcwJyArIHM7XG4gICAgfVxuICAgIHJldHVybiBCYXNlNjQuYmFzZTY0VG9CYXNlNjRVcmwoQmFzZTY0LmhleFRvQmFzZTY0KHMpKTtcbn1cblxuY29uc3Qge2I2NHRvaGV4fSA9IEJhc2U2NDtcblxuZXhwb3J0IHtcbiAgICBqd3MsXG4gICAgS2V5VXRpbCxcbiAgICBYNTA5LFxuICAgIGNyeXB0byxcbiAgICBoZXh0b2I2NHUsXG4gICAgYjY0dG9oZXgsXG4gICAgQWxsb3dlZFNpZ25pbmdBbGdzXG59O1xuIiwiLyoqXG4gKiBHZW5lcmF0ZXMgUkZDNDEyMiB2ZXJzaW9uIDQgZ3VpZCAoKVxuICovXG5cbnZhciBjcnlwdG8gPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpID8gKHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvKSA6IG51bGw7XG5cbmZ1bmN0aW9uIF9jcnlwdG9VdWlkdjQoKSB7XG4gIHJldHVybiAoWzFlN10rLTFlMystNGUzKy04ZTMrLTFlMTEpLnJlcGxhY2UoL1swMThdL2csIGMgPT5cbiAgICAoYyBeIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdICYgMTUgPj4gYyAvIDQpLnRvU3RyaW5nKDE2KVxuICApXG59XG5cbmZ1bmN0aW9uIF91dWlkdjQoKSB7XG4gICAgcmV0dXJuIChbMWU3XSstMWUzKy00ZTMrLThlMystMWUxMSkucmVwbGFjZSgvWzAxOF0vZywgYyA9PlxuICAgIChjIF4gTWF0aC5yYW5kb20oKSAqIDE2ID4+IGMgLyA0KS50b1N0cmluZygxNilcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5kb20oKSB7XG4gIHZhciBoYXNDcnlwdG8gPSBjcnlwdG8gIT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvICE9PSBudWxsO1xuICB2YXIgaGFzUmFuZG9tVmFsdWVzID0gaGFzQ3J5cHRvICYmICh0eXBlb2YoY3J5cHRvLmdldFJhbmRvbVZhbHVlcykgIT0gJ3VuZGVmaW5lZCcpOyAgXG4gIHZhciB1dWlkID0gaGFzUmFuZG9tVmFsdWVzID8gX2NyeXB0b1V1aWR2NCA6IF91dWlkdjQ7XG4gIHJldHVybiB1dWlkKCkucmVwbGFjZSgvLS9nLCAnJyk7XG59XG4iLCJjb25zdCBWZXJzaW9uID0gXCIxLjExLjJcIjsgZXhwb3J0IHtWZXJzaW9ufTsiXSwic291cmNlUm9vdCI6IiJ9