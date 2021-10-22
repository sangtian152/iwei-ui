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
/******/ 	return __webpack_require__(__webpack_require__.s = 200);
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

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.timers.js");

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.number.constructor.js");

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/index-list/src/index-list.vue?vue&type=template&id=48c82d74&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "zmbl-indexlist" }, [
    _c(
      "ul",
      {
        ref: "content",
        staticClass: "zmbl-indexlist-content",
        style: {
          height: _vm.currentHeight + "px",
          "margin-right": _vm.navWidth + "px"
        }
      },
      [_vm._t("default")],
      2
    ),
    _c(
      "div",
      {
        ref: "nav",
        staticClass: "zmbl-indexlist-nav",
        on: { touchstart: _vm.handleTouchStart }
      },
      [
        _c(
          "ul",
          { staticClass: "zmbl-indexlist-navlist" },
          _vm._l(_vm.sections, function(section) {
            return _c(
              "li",
              { key: section.index, staticClass: "zmbl-indexlist-navitem" },
              [_vm._v(_vm._s(section.index))]
            )
          }),
          0
        )
      ]
    ),
    _vm.showIndicator
      ? _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.moving,
                expression: "moving"
              }
            ],
            staticClass: "zmbl-indexlist-indicator"
          },
          [_vm._v(_vm._s(_vm.currentIndicator))]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/index-list/src/index-list.vue?vue&type=template&id=48c82d74&

// EXTERNAL MODULE: external "core-js/modules/es.number.constructor.js"
var es_number_constructor_js_ = __webpack_require__(2);

// EXTERNAL MODULE: external "core-js/modules/es.array.filter.js"
var es_array_filter_js_ = __webpack_require__(23);

// EXTERNAL MODULE: external "core-js/modules/web.timers.js"
var web_timers_js_ = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/index-list/src/index-list.vue?vue&type=script&lang=js&





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
/* harmony default export */ var index_listvue_type_script_lang_js_ = ({
  name: 'zmbl-index-list',
  props: {
    height: Number,
    showIndicator: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      sections: [],
      navWidth: 0,
      indicatorTime: null,
      moving: false,
      firstSection: null,
      currentIndicator: '',
      currentHeight: this.height,
      navOffsetX: 0
    };
  },
  watch: {
    sections: function sections() {
      this.init();
    },
    height: function height(val) {
      if (val) {
        this.currentHeight = val;
      }
    }
  },
  methods: {
    init: function init() {
      var _this = this;

      this.$nextTick(function () {
        _this.navWidth = _this.$refs.nav.clientWidth;
      });
      var listItems = this.$refs.content.getElementsByTagName('li');

      if (listItems.length > 0) {
        this.firstSection = listItems[0];
      }
    },
    handleTouchStart: function handleTouchStart(e) {
      if (e.target.tagName !== 'LI') {
        return;
      }

      this.navOffsetX = e.changedTouches[0].clientX;
      this.scrollList(e.changedTouches[0].clientY);

      if (this.indicatorTime) {
        clearTimeout(this.indicatorTime);
      }

      this.moving = true;
      window.addEventListener('touchmove', this.handleTouchMove);
      window.addEventListener('touchend', this.handleTouchEnd);
    },
    handleTouchMove: function handleTouchMove(e) {
      e.preventDefault();
      this.scrollList(e.changedTouches[0].clientY);
    },
    handleTouchEnd: function handleTouchEnd() {
      var _this2 = this;

      this.indicatorTime = setTimeout(function () {
        _this2.moving = false;
        _this2.currentIndicator = '';
      }, 500);
      window.removeEventListener('touchmove', this.handleTouchMove);
      window.removeEventListener('touchend', this.handleTouchEnd);
    },
    scrollList: function scrollList(y) {
      var currentItem = document.elementFromPoint(this.navOffsetX, y);

      if (!currentItem || !currentItem.classList.contains('zmbl-indexlist-navitem')) {
        return;
      }

      this.currentIndicator = currentItem.innerText;
      var targets = this.sections.filter(function (section) {
        return section.index === currentItem.innerText;
      });
      var targetDOM;

      if (targets.length > 0) {
        targetDOM = targets[0].$el;
        this.$refs.content.scrollTop = targetDOM.getBoundingClientRect().top - this.firstSection.getBoundingClientRect().top;
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    if (!this.currentHeight) {
      window.scrollTo(0, 0);
      requestAnimationFrame(function () {
        _this3.currentHeight = document.documentElement.clientHeight - _this3.$refs.content.getBoundingClientRect().top;
      });
    }

    this.init();
  }
});
// CONCATENATED MODULE: ./packages/index-list/src/index-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_index_listvue_type_script_lang_js_ = (index_listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/index-list/src/index-list.vue?vue&type=style&index=0&lang=scss&
var index_listvue_type_style_index_0_lang_scss_ = __webpack_require__(165);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/index-list/src/index-list.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_index_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/index-list/src/index-list.vue"
/* harmony default export */ var index_list = (component.exports);
// CONCATENATED MODULE: ./packages/index-list/index.js




index_list.install = function (Vue) {
  return Vue.component(index_list.name, index_list);
};

/* harmony default export */ var packages_index_list = __webpack_exports__["default"] = (index_list);

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.filter.js");

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });