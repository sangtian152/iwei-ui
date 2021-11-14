module.exports =
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 165);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name.js");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.number.constructor.js");

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec.js");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string.js");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.match.js");

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = require("zmbl-ui/lib/utils/util");

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.replace.js");

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

module.exports = require("zmbl-ui/lib/utils/types");

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.iterator.js");

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

module.exports = require("zmbl-ui/lib/mixins/bind-event");

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.keys.js");

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.test.js");

/***/ }),
/* 39 */,
/* 40 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.slice.js");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.split.js");

/***/ }),
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, exports) {

module.exports = require("zmbl-ui/lib/utils/scroll");

/***/ }),
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.string.fixed.js");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array-buffer.slice.js");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.int8-array.js");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.copy-within.js");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.every.js");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.fill.js");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.filter.js");

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.find.js");

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.find-index.js");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.for-each.js");

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.includes.js");

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.index-of.js");

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.iterator.js");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.join.js");

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.last-index-of.js");

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.map.js");

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.reduce.js");

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.reduce-right.js");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.reverse.js");

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.set.js");

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.slice.js");

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.some.js");

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.sort.js");

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.subarray.js");

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.to-locale-string.js");

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.to-string.js");

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */
/***/ (function(module, exports) {

module.exports = require("zmbl-ui/lib/utils/style");

/***/ }),
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.json.stringify.js");

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.typed-array.at.js");

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sticky_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sticky_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sticky_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 163 */,
/* 164 */,
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/sticky/src/sticky.vue?vue&type=template&id=8f695074&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { style: { height: _vm.$height } }, [
    _c(
      "div",
      {
        staticClass: "zmbl-sticky",
        class: { "zmbl-sticky--fixed": _vm.fixed },
        style: _vm.style,
      },
      [_vm._t("default")],
      2
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/sticky/src/sticky.vue?vue&type=template&id=8f695074&

// EXTERNAL MODULE: external "core-js/modules/es.number.constructor.js"
var es_number_constructor_js_ = __webpack_require__(2);

// EXTERNAL MODULE: external "core-js/modules/es.string.fixed.js"
var es_string_fixed_js_ = __webpack_require__(92);

// EXTERNAL MODULE: external "zmbl-ui/lib/utils/style"
var style_ = __webpack_require__(124);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.exec.js"
var es_regexp_exec_js_ = __webpack_require__(5);

// EXTERNAL MODULE: external "core-js/modules/es.string.replace.js"
var es_string_replace_js_ = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(21);

// EXTERNAL MODULE: external "core-js/modules/es.string.split.js"
var es_string_split_js_ = __webpack_require__(41);

// EXTERNAL MODULE: external "core-js/modules/es.string.match.js"
var es_string_match_js_ = __webpack_require__(7);

// EXTERNAL MODULE: external "core-js/modules/es.object.to-string.js"
var es_object_to_string_js_ = __webpack_require__(6);

// EXTERNAL MODULE: external "core-js/modules/es.array.slice.js"
var es_array_slice_js_ = __webpack_require__(40);

// EXTERNAL MODULE: external "core-js/modules/es.object.keys.js"
var es_object_keys_js_ = __webpack_require__(29);

// EXTERNAL MODULE: external "core-js/modules/es.json.stringify.js"
var es_json_stringify_js_ = __webpack_require__(160);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "zmbl-ui/lib/utils/types"
var types_ = __webpack_require__(13);

// CONCATENATED MODULE: ./src/utils/util.js




















var util_hasOwnProperty = Object.prototype.hasOwnProperty;
function noop() {}
;
function hasOwn(obj, key) {
  return util_hasOwnProperty.call(obj, key);
}
;

function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }

  return to;
}

;
function toObject(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
}
;
var getValueByPath = function getValueByPath(object, prop) {
  prop = prop || '';
  var paths = prop.split('.');
  var current = object;
  var result = null;

  for (var i = 0, j = paths.length; i < j; i++) {
    var path = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }

    current = current[path];
  }

  return result;
};
function getPropByPath(obj, path, strict) {
  var tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');
  var keyArr = path.split('.');
  var i = 0;

  for (var len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break;
    var key = keyArr[i];

    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!');
      }

      break;
    }
  }

  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  };
}
;
var generateId = function generateId() {
  return Math.floor(Math.random() * 10000);
};
var valueEquals = function valueEquals(a, b) {
  // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true;
  if (!(a instanceof Array)) return false;
  if (!(b instanceof Array)) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
};
var escapeRegexpString = function escapeRegexpString() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
}; // TODO: use native Array.find, Array.findIndex when IE support is dropped

var arrayFindIndex = function arrayFindIndex(arr, pred) {
  for (var i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i;
    }
  }

  return -1;
};
var arrayFind = function arrayFind(arr, pred) {
  var idx = arrayFindIndex(arr, pred);
  return idx !== -1 ? arr[idx] : undefined;
}; // coerce truthy value to array

var coerceTruthyValueToArray = function coerceTruthyValueToArray(val) {
  if (Array.isArray(val)) {
    return val;
  } else if (val) {
    return [val];
  } else {
    return [];
  }
};
var inBrowser = typeof window !== 'undefined';
var isServer = external_vue_default.a.prototype.$isServer;
var isIE = function isIE() {
  return !isServer && !isNaN(Number(document.documentMode));
};
var isEdge = function isEdge() {
  return !isServer && navigator.userAgent.indexOf('Edge') > -1;
};
var isFirefox = function isFirefox() {
  return !isServer && !!window.navigator.userAgent.match(/firefox/i);
};
var util_autoprefixer = function autoprefixer(style) {
  if (Object(esm_typeof["a" /* default */])(style) !== 'object') return style;
  var rules = ['transform', 'transition', 'animation'];
  var prefixes = ['ms-', 'webkit-'];
  rules.forEach(function (rule) {
    var value = style[rule];

    if (rule && value) {
      prefixes.forEach(function (prefix) {
        style[prefix + rule] = value;
      });
    }
  });
  return style;
};
var kebabCase = function kebabCase(str) {
  var hyphenateRE = /([^-])([A-Z])/g;
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
};
var util_capitalize = function capitalize(str) {
  if (!Object(types_["isString"])(str)) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var util_looseEqual = function looseEqual(a, b) {
  var isObjectA = Object(types_["isObject"])(a);
  var isObjectB = Object(types_["isObject"])(b);

  if (isObjectA && isObjectB) {
    return JSON.stringify(a) === JSON.stringify(b);
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
};
var arrayEquals = function arrayEquals(arrayA, arrayB) {
  arrayA = arrayA || [];
  arrayB = arrayB || [];

  if (arrayA.length !== arrayB.length) {
    return false;
  }

  for (var i = 0; i < arrayA.length; i++) {
    if (!util_looseEqual(arrayA[i], arrayB[i])) {
      return false;
    }
  }

  return true;
};
var isEqual = function isEqual(value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return arrayEquals(value1, value2);
  }

  return util_looseEqual(value1, value2);
};
var isEmpty = function isEmpty(val) {
  // null or undefined
  if (val == null) return true;
  if (typeof val === 'boolean') return false;
  if (typeof val === 'number') return !val;
  if (val instanceof Error) return val.message === '';

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length;
    // Map or Set or File

    case '[object File]':
    case '[object Map]':
    case '[object Set]':
      {
        return !val.size;
      }
    // Plain Object

    case '[object Object]':
      {
        return !Object.keys(val).length;
      }
  }

  return false;
};
function rafThrottle(fn) {
  var locked = false;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (locked) return;
    locked = true;
    window.requestAnimationFrame(function (_) {
      fn.apply(_this, args);
      locked = false;
    });
  };
}
function objToArray(obj) {
  if (Array.isArray(obj)) {
    return obj;
  }

  return isEmpty(obj) ? [] : [obj];
}
function addUnit(value) {
  if (!Object(types_["isDefined"])(value)) {
    return undefined;
  }

  value = String(value);
  return Object(types_["isNumeric"])(value) ? "".concat(value, "px") : value;
}
function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
// EXTERNAL MODULE: external "core-js/modules/es.array.iterator.js"
var es_array_iterator_js_ = __webpack_require__(23);

// EXTERNAL MODULE: external "core-js/modules/es.array-buffer.slice.js"
var es_array_buffer_slice_js_ = __webpack_require__(93);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.int8-array.js"
var es_typed_array_int8_array_js_ = __webpack_require__(94);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.copy-within.js"
var es_typed_array_copy_within_js_ = __webpack_require__(95);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.every.js"
var es_typed_array_every_js_ = __webpack_require__(96);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.fill.js"
var es_typed_array_fill_js_ = __webpack_require__(97);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.filter.js"
var es_typed_array_filter_js_ = __webpack_require__(98);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.find.js"
var es_typed_array_find_js_ = __webpack_require__(99);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.find-index.js"
var es_typed_array_find_index_js_ = __webpack_require__(100);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.for-each.js"
var es_typed_array_for_each_js_ = __webpack_require__(101);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.includes.js"
var es_typed_array_includes_js_ = __webpack_require__(102);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.index-of.js"
var es_typed_array_index_of_js_ = __webpack_require__(103);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.iterator.js"
var es_typed_array_iterator_js_ = __webpack_require__(104);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.join.js"
var es_typed_array_join_js_ = __webpack_require__(105);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.last-index-of.js"
var es_typed_array_last_index_of_js_ = __webpack_require__(106);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.map.js"
var es_typed_array_map_js_ = __webpack_require__(107);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.reduce.js"
var es_typed_array_reduce_js_ = __webpack_require__(108);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.reduce-right.js"
var es_typed_array_reduce_right_js_ = __webpack_require__(109);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.reverse.js"
var es_typed_array_reverse_js_ = __webpack_require__(110);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.set.js"
var es_typed_array_set_js_ = __webpack_require__(111);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.slice.js"
var es_typed_array_slice_js_ = __webpack_require__(112);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.some.js"
var es_typed_array_some_js_ = __webpack_require__(113);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.sort.js"
var es_typed_array_sort_js_ = __webpack_require__(114);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.subarray.js"
var es_typed_array_subarray_js_ = __webpack_require__(115);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.to-locale-string.js"
var es_typed_array_to_locale_string_js_ = __webpack_require__(116);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.to-string.js"
var es_typed_array_to_string_js_ = __webpack_require__(117);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.test.js"
var es_regexp_test_js_ = __webpack_require__(38);

// EXTERNAL MODULE: external "core-js/modules/es.typed-array.at.js"
var es_typed_array_at_js_ = __webpack_require__(161);

// CONCATENATED MODULE: ./src/utils/types.js



























































function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
function isNumeric(val) {
  return /^\d+(\.\d+)?$/.test(val);
}
function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE;
}
/**
 *  - Inspired:
 *    https://github.com/jashkenas/underscore/blob/master/modules/isFunction.js
 */

var isFunction = function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
};

if ( true && (typeof Int8Array === "undefined" ? "undefined" : Object(esm_typeof["a" /* default */])(Int8Array)) !== 'object' && (external_vue_default.a.prototype.$isServer || typeof document.childNodes !== 'function')) {
  isFunction = function isFunction(obj) {
    return typeof obj === 'function' || false;
  };
}


var isUndefined = function isUndefined(val) {
  return val === void 0;
};
var isDefined = function isDefined(val) {
  return val !== undefined && val !== null;
};
// CONCATENATED MODULE: ./src/utils/format/unit.js






function unit_addUnit(value) {
  if (!isDefined(value)) {
    return undefined;
  }

  value = String(value);
  return isNumeric(value) ? "".concat(value, "px") : value;
} // cache

var rootFontSize;

function getRootFontSize() {
  if (!rootFontSize) {
    var doc = document.documentElement;
    var fontSize = doc.style.fontSize || window.getComputedStyle(doc).fontSize;
    rootFontSize = parseFloat(fontSize);
  }

  return rootFontSize;
}

function convertRem(value) {
  value = value.replace(/rem/g, '');
  return +value * getRootFontSize();
}

function convertVw(value) {
  value = value.replace(/vw/g, '');
  return +value * window.innerWidth / 100;
}

function convertVh(value) {
  value = value.replace(/vh/g, '');
  return +value * window.innerHeight / 100;
}

function unitToPx(value) {
  if (typeof value === 'number') {
    return value;
  }

  if (inBrowser) {
    if (value.indexOf('rem') !== -1) {
      return convertRem(value);
    }

    if (value.indexOf('vw') !== -1) {
      return convertVw(value);
    }

    if (value.indexOf('vh') !== -1) {
      return convertVh(value);
    }
  }

  return parseFloat(value);
}
// EXTERNAL MODULE: external "zmbl-ui/lib/utils/util"
var util_ = __webpack_require__(9);

// EXTERNAL MODULE: external "zmbl-ui/lib/utils/scroll"
var scroll_ = __webpack_require__(50);

// EXTERNAL MODULE: external "zmbl-ui/lib/mixins/bind-event"
var bind_event_ = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/sticky/src/sticky.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//






/* harmony default export */ var stickyvue_type_script_lang_js_ = ({
  name: 'zmbl-sticky',
  mixins: [Object(bind_event_["BindEventMixin"])(function (bind, isBind) {
    if (!this.scroller) {
      this.scroller = Object(scroll_["getScroller"])(this.$el);
    }

    if (this.observer) {
      var method = isBind ? 'observe' : 'unobserve';
      this.observer[method](this.$el);
    }

    bind(this.scroller, 'scroll', this.onScroll, true);
    this.onScroll();
  })],
  props: {
    zIndex: [Number, String],
    container: null,
    offsetTop: {
      type: [Number, String],
      default: 0
    }
  },
  data: function data() {
    return {
      fixed: false,
      height: 0,
      transform: 0
    };
  },
  computed: {
    offsetTopPx: function offsetTopPx() {
      return unitToPx(this.offsetTop);
    },
    style: function style() {
      if (!this.fixed) {
        return;
      }

      var style = {};

      if (Object(types_["isDefined"])(this.zIndex)) {
        style.zIndex = this.zIndex;
      }

      if (this.offsetTopPx && this.fixed) {
        style.top = "".concat(this.offsetTopPx, "px");
      }

      if (this.transform) {
        style.transform = "translate3d(0, ".concat(this.transform, "px, 0)");
      }

      return style;
    },
    $height: function $height() {
      return this.fixed ? "".concat(this.height, "px") : null;
    }
  },
  watch: {
    fixed: function fixed(val) {
      this.$emit('change', val);
    }
  },
  created: function created() {
    var _this = this;

    // compatibility: https://caniuse.com/#feat=intersectionobserver
    if (!util_["isServer"] && window.IntersectionObserver) {
      this.observer = new IntersectionObserver(function (entries) {
        // trigger scroll when visibility changed
        if (entries[0].intersectionRatio > 0) {
          _this.onScroll();
        }
      }, {
        root: document.body
      });
    }
  },
  methods: {
    onScroll: function onScroll() {
      var _this2 = this;

      if (Object(style_["isHidden"])(this.$el)) {
        return;
      }

      this.height = this.$el.offsetHeight;
      var container = this.container,
          offsetTopPx = this.offsetTopPx;
      var scrollTop = Object(scroll_["getScrollTop"])(window);
      var topToPageTop = Object(scroll_["getElementTop"])(this.$el);

      var emitScrollEvent = function emitScrollEvent() {
        _this2.$emit('scroll', {
          scrollTop: scrollTop,
          isFixed: _this2.fixed
        });
      }; // The sticky component should be kept inside the container element


      if (container) {
        var bottomToPageTop = topToPageTop + container.offsetHeight;

        if (scrollTop + offsetTopPx + this.height > bottomToPageTop) {
          var distanceToBottom = this.height + scrollTop - bottomToPageTop;

          if (distanceToBottom < this.height) {
            this.fixed = true;
            this.transform = -(distanceToBottom + offsetTopPx);
          } else {
            this.fixed = false;
          }

          emitScrollEvent();
          return;
        }
      }

      if (scrollTop + offsetTopPx > topToPageTop) {
        this.fixed = true;
        this.transform = 0;
      } else {
        this.fixed = false;
      }

      emitScrollEvent();
    }
  }
});
// CONCATENATED MODULE: ./packages/sticky/src/sticky.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_stickyvue_type_script_lang_js_ = (stickyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/sticky/src/sticky.vue?vue&type=style&index=0&lang=scss&
var stickyvue_type_style_index_0_lang_scss_ = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/sticky/src/sticky.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_stickyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/sticky/src/sticky.vue"
/* harmony default export */ var sticky = (component.exports);
// CONCATENATED MODULE: ./packages/sticky/index.js




sticky.install = function (Vue) {
  return Vue.component(sticky.name, sticky);
};

/* harmony default export */ var packages_sticky = __webpack_exports__["default"] = (sticky);

/***/ })
/******/ ]);