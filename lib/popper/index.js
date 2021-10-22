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
/******/ 	return __webpack_require__(__webpack_require__.s = 195);
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

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("zmbl-ui/lib/utils/util");

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

module.exports = require("zmbl-ui/lib/mixins/popper");

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_popper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_popper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_popper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/popper/src/popper.vue?vue&type=template&id=52772fe6&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    [
      _c(
        "transition",
        {
          attrs: { name: _vm.transition },
          on: {
            "after-enter": _vm.handleAfterEnter,
            "after-leave": _vm.handleAfterLeave
          }
        },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.disabled && _vm.showPopper,
                  expression: "!disabled && showPopper"
                }
              ],
              ref: "popper",
              staticClass: "zmbl-popper",
              class: [_vm.popperClass, _vm.content && "zmbl-popper--plain"],
              style: { width: _vm.width + "px" },
              attrs: {
                role: "tooltip",
                id: _vm.tooltipId,
                "aria-hidden":
                  _vm.disabled || !_vm.showPopper ? "true" : "false"
              }
            },
            [
              _vm.title
                ? _c("div", {
                    staticClass: "zmbl-popper__title",
                    domProps: { textContent: _vm._s(_vm.title) }
                  })
                : _vm._e(),
              _vm._t("default", function() {
                return [_vm._v(_vm._s(_vm.content))]
              })
            ],
            2
          )
        ]
      ),
      _c(
        "span",
        { ref: "wrapper", staticClass: "zmbl-popper__reference-wrapper" },
        [_vm._t("reference")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/popper/src/popper.vue?vue&type=template&id=52772fe6&

// EXTERNAL MODULE: external "core-js/modules/es.number.constructor.js"
var es_number_constructor_js_ = __webpack_require__(2);

// EXTERNAL MODULE: external "core-js/modules/es.array.index-of.js"
var es_array_index_of_js_ = __webpack_require__(9);

// EXTERNAL MODULE: external "zmbl-ui/lib/mixins/popper"
var popper_ = __webpack_require__(130);
var popper_default = /*#__PURE__*/__webpack_require__.n(popper_);

// EXTERNAL MODULE: external "zmbl-ui/lib/utils/dom"
var dom_ = __webpack_require__(3);

// EXTERNAL MODULE: external "zmbl-ui/lib/utils/util"
var util_ = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/popper/src/popper.vue?vue&type=script&lang=js&



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




/* harmony default export */ var poppervue_type_script_lang_js_ = ({
  name: 'zmbl-popper',
  mixins: [popper_default.a],
  props: {
    trigger: {
      type: String,
      "default": 'click',
      validator: function validator(value) {
        return ['click', 'focus', 'manual'].indexOf(value) > -1;
      }
    },
    openDelay: {
      type: Number,
      "default": 0
    },
    closeDelay: {
      type: Number,
      "default": 200
    },
    title: String,
    disabled: Boolean,
    content: String,
    reference: {},
    popperClass: String,
    width: {},
    visibleArrow: {
      "default": true
    },
    arrowOffset: {
      type: Number,
      "default": 0
    },
    transition: {
      type: String,
      "default": 'fade-in-linear'
    },
    tabindex: {
      type: Number,
      "default": 0
    }
  },
  computed: {
    tooltipId: function tooltipId() {
      return "zmbl-popper-".concat(Object(util_["generateId"])());
    }
  },
  watch: {
    showPopper: function showPopper(val) {
      if (this.disabled) {
        return;
      }

      val ? this.$emit('show') : this.$emit('hide');
    }
  },
  mounted: function mounted() {
    var _this = this;

    var reference = this.referenceElm = this.reference || this.$refs.reference;
    var popper = this.popper || this.$refs.popper;

    if (!reference && this.$refs.wrapper.children) {
      reference = this.referenceElm = this.$refs.wrapper.children[0];
    } // 可访问性


    if (reference) {
      Object(dom_["addClass"])(reference, 'el-popover__reference');
      reference.setAttribute('aria-describedby', this.tooltipId);
      reference.setAttribute('tabindex', this.tabindex); // tab序列

      popper.setAttribute('tabindex', 0);

      if (this.trigger !== 'click') {
        Object(dom_["on"])(reference, 'focusin', function () {
          _this.handleFocus();

          var instance = reference.__vue__;

          if (instance && typeof instance.focus === 'function') {
            instance.focus();
          }
        });
        Object(dom_["on"])(popper, 'focusin', this.handleFocus);
        Object(dom_["on"])(reference, 'focusout', this.handleBlur);
        Object(dom_["on"])(popper, 'focusout', this.handleBlur);
      }

      Object(dom_["on"])(reference, 'click', this.handleClick);
    }

    if (this.trigger === 'click') {
      Object(dom_["on"])(reference, 'click', this.doToggle);
      Object(dom_["on"])(document, 'click', this.handleDocumentClick);
    } else if (this.trigger === 'focus') {
      if (this.tabindex < 0) {
        console.warn('[Element Warn][Popover]a negative taindex means that the element cannot be focused by tab key');
      }

      if (reference.querySelector('input, textarea')) {
        Object(dom_["on"])(reference, 'focusin', this.doShow);
        Object(dom_["on"])(reference, 'focusout', this.doClose);
      } else {
        Object(dom_["on"])(reference, 'click', this.doToggle);
        Object(dom_["on"])(document, 'click', this.handleDocumentClick);
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.cleanup();
  },
  deactivated: function deactivated() {
    this.cleanup();
  },
  methods: {
    doToggle: function doToggle() {
      this.showPopper = !this.showPopper;
    },
    doShow: function doShow() {
      this.showPopper = true;
    },
    doClose: function doClose() {
      this.showPopper = false;
    },
    handleFocus: function handleFocus() {
      Object(dom_["addClass"])(this.referenceElm, 'focusing');
      if (this.trigger === 'click' || this.trigger === 'focus') this.showPopper = true;
    },
    handleClick: function handleClick() {
      Object(dom_["removeClass"])(this.referenceElm, 'focusing');
    },
    handleBlur: function handleBlur() {
      Object(dom_["removeClass"])(this.referenceElm, 'focusing');
      if (this.trigger === 'click' || this.trigger === 'focus') this.showPopper = false;
    },
    handleDocumentClick: function handleDocumentClick(e) {
      var reference = this.reference || this.$refs.reference;
      var popper = this.popper || this.$refs.popper;

      if (!reference && this.$refs.wrapper.children) {
        reference = this.referenceElm = this.$refs.wrapper.children[0];
      }

      if (!this.$el || !reference || this.$el.contains(e.target) || reference.contains(e.target) || !popper || popper.contains(e.target)) return;
      this.showPopper = false;
    },
    handleAfterEnter: function handleAfterEnter() {
      this.$emit('after-enter');
    },
    handleAfterLeave: function handleAfterLeave() {
      this.$emit('after-leave');
      this.doDestroy();
    },
    cleanup: function cleanup() {
      if (this.openDelay || this.closeDelay) {
        clearTimeout(this._timer);
      }
    }
  },
  destroyed: function destroyed() {
    var reference = this.reference;
    Object(dom_["off"])(reference, 'click', this.doToggle);
    Object(dom_["off"])(reference, 'focusin', this.doShow);
    Object(dom_["off"])(reference, 'focusout', this.doClose);
    Object(dom_["off"])(document, 'click', this.handleDocumentClick);
  }
});
// CONCATENATED MODULE: ./packages/popper/src/popper.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_poppervue_type_script_lang_js_ = (poppervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/popper/src/popper.vue?vue&type=style&index=0&lang=scss&
var poppervue_type_style_index_0_lang_scss_ = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/popper/src/popper.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_poppervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/popper/src/popper.vue"
/* harmony default export */ var src_popper = (component.exports);
// CONCATENATED MODULE: ./packages/popper/index.js




src_popper.install = function (Vue) {
  return Vue.component(src_popper.name, src_popper);
};

/* harmony default export */ var packages_popper = __webpack_exports__["default"] = (src_popper);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.number.constructor.js");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("zmbl-ui/lib/utils/dom");

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.index-of.js");

/***/ })

/******/ });