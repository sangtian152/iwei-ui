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
/******/ 	return __webpack_require__(__webpack_require__.s = 171);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name.js");

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_toast_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(1);

// EXTERNAL MODULE: external "core-js/modules/es.array.splice.js"
var es_array_splice_js_ = __webpack_require__(24);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/toast/src/toast.vue?vue&type=template&id=a4cf9880&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "zmbl-toast-pop" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.visible,
            expression: "visible",
          },
        ],
        staticClass: "zmbl-toast",
        class: _vm.customClass,
        style: { padding: _vm.iconClass === "" ? "10px" : "20px" },
      },
      [
        _vm.iconClass !== ""
          ? _c("i", { staticClass: "zmbl-toast-icon", class: _vm.iconClass })
          : _vm._e(),
        _c(
          "span",
          {
            staticClass: "zmbl-toast-text",
            style: { "padding-top": _vm.iconClass === "" ? "0" : "10px" },
          },
          [_vm._v(_vm._s(_vm.message))]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/toast/src/toast.vue?vue&type=template&id=a4cf9880&

// EXTERNAL MODULE: external "core-js/modules/es.array.join.js"
var es_array_join_js_ = __webpack_require__(20);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/toast/src/toast.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var toastvue_type_script_lang_js_ = ({
  name: 'zmbl-toast',
  props: {
    message: String,
    className: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'middle'
    },
    iconClass: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      visible: false
    };
  },
  computed: {
    customClass: function customClass() {
      var classes = [];

      switch (this.position) {
        case 'top':
          classes.push('is-placetop');
          break;

        case 'bottom':
          classes.push('is-placebottom');
          break;

        default:
          classes.push('is-placemiddle');
      }

      classes.push(this.className);
      return classes.join(' ');
    }
  }
});
// CONCATENATED MODULE: ./packages/toast/src/toast.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_toastvue_type_script_lang_js_ = (toastvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/toast/src/toast.vue?vue&type=style&index=0&lang=scss&
var toastvue_type_style_index_0_lang_scss_ = __webpack_require__(153);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/toast/src/toast.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_toastvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/toast/src/toast.vue"
/* harmony default export */ var toast = (component.exports);
// CONCATENATED MODULE: ./packages/toast/src/toast.js




var ToastConstructor = external_vue_default.a.extend(toast);
var toastPool = [];

var getAnInstance = function getAnInstance() {
  if (toastPool.length > 0) {
    var instance = toastPool[0];
    toastPool.splice(0, 1);
    return instance;
  }

  return new ToastConstructor({
    el: document.createElement('div')
  });
};

var returnAnInstance = function returnAnInstance(instance) {
  if (instance) {
    toastPool.push(instance);
  }
};

var removeDom = function removeDom(event) {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
};

ToastConstructor.prototype.close = function () {
  this.visible = false;
  this.$el.addEventListener('transitionend', removeDom);
  this.closed = true;
  returnAnInstance(this);
};

var toast_Toast = function Toast() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var duration = options.duration || 3000;
  var instance = getAnInstance();
  instance.closed = false;
  clearTimeout(instance.timer);
  instance.message = typeof options === 'string' ? options : options.message;
  instance.position = options.position || 'middle';
  instance.className = options.className || '';
  instance.iconClass = options.iconClass || '';
  document.body.appendChild(instance.$el);
  external_vue_default.a.nextTick(function () {
    instance.visible = true;
    instance.$el.removeEventListener('transitionend', removeDom);
    ~duration && (instance.timer = setTimeout(function () {
      if (instance.closed) return;
      instance.close();
    }, duration));
  });
  return instance;
};

/* harmony default export */ var src_toast = (toast_Toast);
// CONCATENATED MODULE: ./packages/toast/index.js




src_toast.install = function (Vue) {
  return Vue.component(src_toast.name, src_toast);
};

/* harmony default export */ var packages_toast = __webpack_exports__["default"] = (src_toast);

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.join.js");

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.splice.js");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });