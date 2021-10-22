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
/******/ 	return __webpack_require__(__webpack_require__.s = 186);
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

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_tab_container_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/tab-container/src/tab-container.vue?vue&type=template&id=09544c84&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "zmbl-tab-container",
      on: {
        touchstart: _vm.startDrag,
        mousedown: _vm.startDrag,
        touchmove: _vm.onDrag,
        mousemove: _vm.onDrag,
        mouseup: _vm.endDrag,
        touchend: _vm.endDrag
      }
    },
    [
      _c(
        "div",
        { ref: "wrap", staticClass: "zmbl-tab-container-wrap" },
        [_vm._t("default")],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/tab-container/src/tab-container.vue?vue&type=template&id=09544c84&

// EXTERNAL MODULE: external "core-js/modules/es.array.find-index.js"
var es_array_find_index_js_ = __webpack_require__(74);

// EXTERNAL MODULE: external "core-js/modules/web.timers.js"
var web_timers_js_ = __webpack_require__(10);

// EXTERNAL MODULE: external "zmbl-ui/lib/utils/dom"
var dom_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/tab-container/src/tab-container.vue?vue&type=script&lang=js&



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

/**
 * zmbl-tab-container
 * @desc 面板，搭配 tab-container-item 使用
 * @module components/tab-container
 *
 * @param {number|string} [value] - 当前激活的 tabId
 *
 * @example
 * <zmbl-tab-container v-model="selected">
 *   <zmbl-tab-container-item id="1"> 内容A </zmbl-tab-container-item>
 *   <zmbl-tab-container-item id="2"> 内容B </zmbl-tab-container-item>
 *   <zmbl-tab-container-item id="3"> 内容C </zmbl-tab-container-item>
 * </zmbl-tab-container>
 */

/* harmony default export */ var tab_containervue_type_script_lang_js_ = ({
  name: 'zmbl-tab-container',
  props: {
    value: {},
    swipeable: Boolean
  },
  data: function data() {
    return {
      start: {
        x: 0,
        y: 0
      },
      swiping: false,
      activeItems: [],
      pageWidth: 0,
      currentActive: this.value
    };
  },
  watch: {
    value: function value(val) {
      this.currentActive = val;
    },
    currentActive: function currentActive(val, oldValue) {
      this.$emit('input', val);
      if (!this.swipeable) return;
      var lastIndex = this.$children.findIndex(function (item) {
        return item.id === oldValue;
      });
      this.swipeLeaveTransition(lastIndex);
    }
  },
  mounted: function mounted() {
    if (!this.swipeable) return;
    this.wrap = this.$refs.wrap;
    this.pageWidth = this.wrap.clientWidth;
    this.limitWidth = this.pageWidth / 4;
  },
  methods: {
    swipeLeaveTransition: function swipeLeaveTransition() {
      var _this = this;

      var lastIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (typeof this.index !== 'number') {
        this.index = arrayFindIndex(this.$children, function (item) {
          return item.id === _this.currentActive;
        });
        this.swipeMove(-lastIndex * this.pageWidth);
      }

      setTimeout(function () {
        _this.wrap.classList.add('swipe-transition');

        _this.swipeMove(-_this.index * _this.pageWidth);

        Object(dom_["once"])(_this.wrap, 'webkitTransitionEnd', function (_) {
          _this.wrap.classList.remove('swipe-transition');

          _this.wrap.style.webkitTransform = '';
          _this.swiping = false;
          _this.index = null;
        });
      }, 0);
    },
    swipeMove: function swipeMove(offset) {
      this.wrap.style.webkitTransform = "translate3d(".concat(offset, "px, 0, 0)");
      this.swiping = true;
    },
    startDrag: function startDrag(evt) {
      if (!this.swipeable) return;
      evt = evt.changedTouches ? evt.changedTouches[0] : evt;
      this.dragging = true;
      this.start.x = evt.pageX;
      this.start.y = evt.pageY;
    },
    onDrag: function onDrag(evt) {
      var _this2 = this;

      if (!this.dragging) return;
      var swiping;
      var e = evt.changedTouches ? evt.changedTouches[0] : evt;
      var offsetTop = e.pageY - this.start.y;
      var offsetLeft = e.pageX - this.start.x;
      var y = Math.abs(offsetTop);
      var x = Math.abs(offsetLeft);
      swiping = !(x < 5 || x >= 5 && y >= x * 1.73);
      if (!swiping) return;
      evt.preventDefault();
      var len = this.$children.length - 1;
      var index = arrayFindIndex(this.$children, function (item) {
        return item.id === _this2.currentActive;
      });
      var currentPageOffset = index * this.pageWidth;
      var offset = offsetLeft - currentPageOffset;
      var absOffset = Math.abs(offset);

      if (absOffset > len * this.pageWidth || offset > 0 && offset < this.pageWidth) {
        this.swiping = false;
        return;
      }

      this.offsetLeft = offsetLeft;
      this.index = index;
      this.swipeMove(offset);
    },
    endDrag: function endDrag() {
      if (!this.swiping) return;
      this.dragging = false;
      var direction = this.offsetLeft > 0 ? -1 : 1;
      var isChange = Math.abs(this.offsetLeft) > this.limitWidth;

      if (isChange) {
        this.index += direction;
        var child = this.$children[this.index];

        if (child) {
          this.currentActive = child.id;
          return;
        }
      }

      this.swipeLeaveTransition();
    }
  }
});
// CONCATENATED MODULE: ./packages/tab-container/src/tab-container.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_tab_containervue_type_script_lang_js_ = (tab_containervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/tab-container/src/tab-container.vue?vue&type=style&index=0&lang=scss&
var tab_containervue_type_style_index_0_lang_scss_ = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/tab-container/src/tab-container.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_tab_containervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/tab-container/src/tab-container.vue"
/* harmony default export */ var tab_container = (component.exports);
// CONCATENATED MODULE: ./packages/tab-container/index.js




tab_container.install = function (Vue) {
  return Vue.component(tab_container.name, tab_container);
};

/* harmony default export */ var packages_tab_container = __webpack_exports__["default"] = (tab_container);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("zmbl-ui/lib/utils/dom");

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.find-index.js");

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });