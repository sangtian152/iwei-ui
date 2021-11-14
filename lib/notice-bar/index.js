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
/******/ 	return __webpack_require__(__webpack_require__.s = 194);
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

/***/ 13:
/***/ (function(module, exports) {

module.exports = require("zmbl-ui/lib/utils/types");

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_bar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_bar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_notice_bar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/notice-bar/src/notice-bar.vue?vue&type=template&id=47dff2a6&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.show,
          expression: "show",
        },
      ],
      staticClass: "zmbl-notice-bar",
      class: { "zmbl-notice-bar--wrapable": _vm.wrapable },
      style: _vm.barStyle,
      attrs: { role: "alert" },
      on: {
        click: function ($event) {
          return _vm.$emit("click")
        },
      },
    },
    [
      _vm._t("left-icon"),
      _c(
        "div",
        {
          ref: "wrap",
          staticClass: "zmbl-notice-bar__wrap",
          attrs: { role: "marquee" },
        },
        [
          _c(
            "div",
            {
              ref: "content",
              staticClass: "zmbl-notice-bar__content",
              class: {
                "zmbl-ellipsis": this.scrollable === false && !this.wrapable,
              },
              style: _vm.contentStyle,
              on: { transitionend: _vm.onTransitionEnd },
            },
            [
              _vm._t("default", function () {
                return [_vm._v(_vm._s(_vm.text))]
              }),
            ],
            2
          ),
        ]
      ),
      _vm._t("right-icon"),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/notice-bar/src/notice-bar.vue?vue&type=template&id=47dff2a6&

// EXTERNAL MODULE: external "core-js/modules/es.number.constructor.js"
var es_number_constructor_js_ = __webpack_require__(2);

// EXTERNAL MODULE: external "zmbl-ui/lib/utils/types"
var types_ = __webpack_require__(13);

// EXTERNAL MODULE: external "zmbl-ui/lib/utils/raf"
var raf_ = __webpack_require__(49);

// EXTERNAL MODULE: external "zmbl-ui/lib/mixins/bind-event"
var bind_event_ = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/notice-bar/src/notice-bar.vue?vue&type=script&lang=js&


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



/* harmony default export */ var notice_barvue_type_script_lang_js_ = ({
  name: 'zmbl-notice-bar',
  mixins: [Object(bind_event_["BindEventMixin"])(function (bind) {
    // fix cache issues with forwards and back history in safari
    // see: https://guwii.com/cache-issues-with-forwards-and-back-history-in-safari/
    bind(window, 'pageshow', this.start);
  })],
  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    scrollable: {
      type: Boolean,
      default: null
    },
    delay: {
      type: [Number, String],
      default: 1
    },
    speed: {
      type: [Number, String],
      default: 50
    }
  },
  data: function data() {
    return {
      show: true,
      offset: 0,
      duration: 0,
      wrapWidth: 0,
      contentWidth: 0
    };
  },
  computed: {
    contentStyle: function contentStyle() {
      return {
        transform: this.offset ? "translateX(".concat(this.offset, "px)") : '',
        transitionDuration: this.duration + 's'
      };
    },
    barStyle: function barStyle() {
      return {
        color: this.color,
        background: this.background
      };
    }
  },
  watch: {
    scrollable: 'start',
    text: {
      handler: 'start',
      immediate: true
    }
  },
  activated: function activated() {
    this.start();
  },
  methods: {
    onClickIcon: function onClickIcon(event) {
      if (this.mode === 'closeable') {
        this.show = false;
        this.$emit('close', event);
      }
    },
    onTransitionEnd: function onTransitionEnd() {
      var _this = this;

      this.offset = this.wrapWidth;
      this.duration = 0; // wait for Vue to render offset
      // using nextTick won't work in iOS14

      Object(raf_["raf"])(function () {
        // use double raf to ensure animation can start
        Object(raf_["doubleRaf"])(function () {
          _this.offset = -_this.contentWidth;
          _this.duration = (_this.contentWidth + _this.wrapWidth) / _this.speed;

          _this.$emit('replay');
        });
      });
    },
    reset: function reset() {
      this.offset = 0;
      this.duration = 0;
      this.wrapWidth = 0;
      this.contentWidth = 0;
    },
    start: function start() {
      var _this2 = this;

      var delay = Object(types_["isDefined"])(this.delay) ? this.delay * 1000 : 0;
      this.reset();
      clearTimeout(this.startTimer);
      this.startTimer = setTimeout(function () {
        var _this2$$refs = _this2.$refs,
            wrap = _this2$$refs.wrap,
            content = _this2$$refs.content;

        if (!wrap || !content || _this2.scrollable === false) {
          return;
        }

        var wrapWidth = wrap.getBoundingClientRect().width;
        var contentWidth = content.getBoundingClientRect().width;

        if (_this2.scrollable || contentWidth > wrapWidth) {
          Object(raf_["doubleRaf"])(function () {
            _this2.offset = -contentWidth;
            _this2.duration = contentWidth / _this2.speed;
            _this2.wrapWidth = wrapWidth;
            _this2.contentWidth = contentWidth;
          });
        }
      }, delay);
    }
  }
});
// CONCATENATED MODULE: ./packages/notice-bar/src/notice-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_notice_barvue_type_script_lang_js_ = (notice_barvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/notice-bar/src/notice-bar.vue?vue&type=style&index=0&lang=scss&
var notice_barvue_type_style_index_0_lang_scss_ = __webpack_require__(159);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/notice-bar/src/notice-bar.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_notice_barvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/notice-bar/src/notice-bar.vue"
/* harmony default export */ var notice_bar = (component.exports);
// CONCATENATED MODULE: ./packages/notice-bar/index.js




notice_bar.install = function (Vue) {
  return Vue.component(notice_bar.name, notice_bar);
};

/* harmony default export */ var packages_notice_bar = __webpack_exports__["default"] = (notice_bar);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.number.constructor.js");

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("zmbl-ui/lib/mixins/bind-event");

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

module.exports = require("zmbl-ui/lib/utils/raf");

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });