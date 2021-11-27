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
/******/ 	return __webpack_require__(__webpack_require__.s = 167);
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

/***/ 122:
/***/ (function(module, exports) {

module.exports = require("iwei-ui/lib/popup");

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

module.exports = require("iwei-ui/lib/image");

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

module.exports = require("iwei-ui/lib/swipe-item");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.concat.js");

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_image_preview_item_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_image_preview_item_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_image_preview_item_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_image_preview_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_image_preview_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_image_preview_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/image-preview/src/image-preview.vue?vue&type=template&id=7c453f44&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    { attrs: { name: "van-fade" }, on: { "after-leave": _vm.onClosed } },
    [
      _c(
        "Popup",
        {
          staticClass: "zmbl-image-preview",
          class: _vm.className,
          on: { close: _vm.emitClose },
          model: {
            value: _vm.value,
            callback: function ($$v) {
              _vm.value = $$v
            },
            expression: "value",
          },
        },
        [
          _vm.closeable
            ? _c("icon", {
                staticClass: "zmbl-image-preview__close",
                attrs: { name: "roundclosefill" },
                nativeOn: {
                  click: function ($event) {
                    return _vm.emitClose.apply(null, arguments)
                  },
                },
              })
            : _vm._e(),
          _c(
            "Swipe",
            {
              ref: "swipe",
              staticClass: "zmbl-image-preview__swipe",
              attrs: {
                lazyRender: "",
                auto: 0,
                continuous: _vm.loop,
                duration: _vm.swipeDuration,
                "default-index": _vm.startPosition,
                showIndicators: _vm.showIndicators,
                indicatorColor: "white",
              },
              on: { change: _vm.setActive },
            },
            [
              _vm._l(_vm.images, function (image) {
                return [
                  _c("ImagePreviewItem", {
                    key: image,
                    attrs: {
                      src: image,
                      show: _vm.value,
                      active: _vm.active,
                      maxZoom: _vm.maxZoom,
                      minZoom: _vm.minZoom,
                      rootWidth: _vm.rootWidth,
                      rootHeight: _vm.rootHeight,
                    },
                    on: { scale: _vm.emitScale },
                    nativeOn: {
                      click: function ($event) {
                        return _vm.onClick.apply(null, arguments)
                      },
                    },
                  }),
                ]
              }),
            ],
            2
          ),
          _c(
            "div",
            { staticClass: "zmbl-image-preview__index" },
            [
              _vm._t(
                "index",
                function () {
                  return [
                    _vm._v(_vm._s(_vm.active + 1 + " / " + _vm.images.length)),
                  ]
                },
                { index: _vm.active }
              ),
            ],
            2
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/image-preview/src/image-preview.vue?vue&type=template&id=7c453f44&

// EXTERNAL MODULE: external "core-js/modules/es.number.constructor.js"
var es_number_constructor_js_ = __webpack_require__(2);

// EXTERNAL MODULE: external "iwei-ui/lib/mixins/touch"
var touch_ = __webpack_require__(50);

// EXTERNAL MODULE: external "iwei-ui/lib/mixins/bind-event"
var bind_event_ = __webpack_require__(25);

// EXTERNAL MODULE: external "iwei-ui/lib/popup"
var popup_ = __webpack_require__(122);
var popup_default = /*#__PURE__*/__webpack_require__.n(popup_);

// EXTERNAL MODULE: external "iwei-ui/lib/swipe"
var swipe_ = __webpack_require__(27);
var swipe_default = /*#__PURE__*/__webpack_require__.n(swipe_);

// EXTERNAL MODULE: external "iwei-ui/lib/icon"
var icon_ = __webpack_require__(43);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/image-preview/src/image-preview-item.vue?vue&type=template&id=4862ed52&
var image_preview_itemvue_type_template_id_4862ed52_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "zmbl-swipe-item",
    { staticClass: "zmbl-image-preview__swipe-item" },
    [
      _c("zmbl-image", {
        staticClass: "zmbl-image-preview__image",
        class: { vertical: this.vertical },
        style: _vm.imageStyle,
        attrs: { src: _vm.src, fit: "contain" },
        on: { load: _vm.onLoad },
      }),
    ],
    1
  )
}
var image_preview_itemvue_type_template_id_4862ed52_staticRenderFns = []
image_preview_itemvue_type_template_id_4862ed52_render._withStripped = true


// CONCATENATED MODULE: ./packages/image-preview/src/image-preview-item.vue?vue&type=template&id=4862ed52&

// EXTERNAL MODULE: external "core-js/modules/es.array.concat.js"
var es_array_concat_js_ = __webpack_require__(14);

// EXTERNAL MODULE: external "iwei-ui/lib/utils/util"
var util_ = __webpack_require__(9);

// EXTERNAL MODULE: external "iwei-ui/lib/utils/dom"
var dom_ = __webpack_require__(3);

// EXTERNAL MODULE: external "iwei-ui/lib/image"
var image_ = __webpack_require__(123);
var image_default = /*#__PURE__*/__webpack_require__.n(image_);

// EXTERNAL MODULE: external "iwei-ui/lib/swipe-item"
var swipe_item_ = __webpack_require__(124);
var swipe_item_default = /*#__PURE__*/__webpack_require__.n(swipe_item_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/image-preview/src/image-preview-item.vue?vue&type=script&lang=js&




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
// Utils

 // Mixins

 // Component




function getDistance(touches) {
  return Math.sqrt(Math.pow(touches[0].clientX - touches[1].clientX, 2) + Math.pow(touches[0].clientY - touches[1].clientY, 2));
}

/* harmony default export */ var image_preview_itemvue_type_script_lang_js_ = ({
  name: 'zmbl-image-preview-item',
  mixins: [touch_["TouchMixin"]],
  components: {
    'zmbl-image': image_default.a,
    'zmbl-swipe-item': swipe_item_default.a
  },
  props: {
    src: String,
    show: Boolean,
    active: Number,
    minZoom: [Number, String],
    maxZoom: [Number, String],
    rootWidth: Number,
    rootHeight: Number
  },
  data: function data() {
    return {
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      imageRatio: 0,
      displayWidth: 0,
      displayHeight: 0
    };
  },
  computed: {
    vertical: function vertical() {
      var rootWidth = this.rootWidth,
          rootHeight = this.rootHeight;
      var rootRatio = rootHeight / rootWidth;
      return this.imageRatio > rootRatio;
    },
    imageStyle: function imageStyle() {
      var scale = this.scale;
      var style = {
        transitionDuration: this.zooming || this.moving ? '0s' : '.3s',
        height: '100%'
      };

      if (scale !== 1) {
        var offsetX = this.moveX / scale;
        var offsetY = this.moveY / scale;
        style.transform = "scale(".concat(scale, ", ").concat(scale, ") translate(").concat(offsetX, "px, ").concat(offsetY, "px)");
      }

      return style;
    },
    maxMoveX: function maxMoveX() {
      if (this.imageRatio) {
        var displayWidth = this.vertical ? this.rootHeight / this.imageRatio : this.rootWidth;
        return Math.max(0, (this.scale * displayWidth - this.rootWidth) / 2);
      }

      return 0;
    },
    maxMoveY: function maxMoveY() {
      if (this.imageRatio) {
        var displayHeight = this.vertical ? this.rootHeight : this.rootWidth * this.imageRatio;
        return Math.max(0, (this.scale * displayHeight - this.rootHeight) / 2);
      }

      return 0;
    }
  },
  watch: {
    show: function show(val) {
      if (!val) {
        this.resetScale();
      }
    }
  },
  mounted: function mounted() {
    this.bindTouchEvent(this.$el);
  },
  methods: {
    swipeItemCreated: function swipeItemCreated() {
      this.$parent && this.$parent.swipeItemCreated();
    },
    swipeItemDestroyed: function swipeItemDestroyed() {
      this.$parent && this.$parent.swipeItemDestroyed();
    },
    resetScale: function resetScale() {
      this.setScale(1);
      this.moveX = 0;
      this.moveY = 0;
    },
    setScale: function setScale(scale) {
      this.scale = Object(util_["range"])(scale, +this.minZoom, +this.maxZoom);
      this.$emit('scale', {
        scale: this.scale,
        index: this.active
      });
    },
    toggleScale: function toggleScale() {
      var scale = this.scale > 1 ? 1 : 2;
      this.setScale(scale);
      this.moveX = 0;
      this.moveY = 0;
    },
    onTouchStart: function onTouchStart(event) {
      var touches = event.touches;
      var _this$offsetX = this.offsetX,
          offsetX = _this$offsetX === void 0 ? 0 : _this$offsetX;
      this.touchStart(event);
      this.touchStartTime = new Date();
      this.startMoveX = this.moveX;
      this.startMoveY = this.moveY;
      this.moving = touches.length === 1 && this.scale !== 1;
      this.zooming = touches.length === 2 && !offsetX;

      if (this.zooming) {
        this.startScale = this.scale;
        this.startDistance = getDistance(event.touches);
      }
    },
    onTouchMove: function onTouchMove(event) {
      var touches = event.touches;
      this.touchMove(event);

      if (this.moving || this.zooming) {
        Object(dom_["preventDefault"])(event, true);
      }

      if (this.moving) {
        var moveX = this.deltaX + this.startMoveX;
        var moveY = this.deltaY + this.startMoveY;
        this.moveX = Object(util_["range"])(moveX, -this.maxMoveX, this.maxMoveX);
        this.moveY = Object(util_["range"])(moveY, -this.maxMoveY, this.maxMoveY);
      }

      if (this.zooming && touches.length === 2) {
        var distance = getDistance(touches);
        var scale = this.startScale * distance / this.startDistance;
        this.setScale(scale);
      }
    },
    onTouchEnd: function onTouchEnd(event) {
      var stopPropagation = false;
      /* istanbul ignore else */

      if (this.moving || this.zooming) {
        stopPropagation = true;

        if (this.moving && this.startMoveX === this.moveX && this.startMoveY === this.moveY) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          if (this.zooming) {
            this.moveX = Object(util_["range"])(this.moveX, -this.maxMoveX, this.maxMoveX);
            this.moveY = Object(util_["range"])(this.moveY, -this.maxMoveY, this.maxMoveY);
            this.zooming = false;
          }

          this.moving = false;
          this.startMoveX = 0;
          this.startMoveY = 0;
          this.startScale = 1;

          if (this.scale < 1) {
            this.resetScale();
          }
        }
      } // eliminate tap delay on safari


      Object(dom_["preventDefault"])(event, stopPropagation);
      this.checkTap();
      this.resetTouchStatus();
    },
    checkTap: function checkTap() {
      var _this = this;

      var _this$offsetX2 = this.offsetX,
          offsetX = _this$offsetX2 === void 0 ? 0 : _this$offsetX2,
          _this$offsetY = this.offsetY,
          offsetY = _this$offsetY === void 0 ? 0 : _this$offsetY;
      var deltaTime = new Date() - this.touchStartTime;
      var TAP_TIME = 250;
      var TAP_OFFSET = 10;

      if (offsetX < TAP_OFFSET && offsetY < TAP_OFFSET && deltaTime < TAP_TIME) {
        if (this.doubleTapTimer) {
          clearTimeout(this.doubleTapTimer);
          this.doubleTapTimer = null;
          this.toggleScale();
        } else {
          this.doubleTapTimer = setTimeout(function () {
            _this.$emit('close');

            _this.doubleTapTimer = null;
          }, TAP_TIME);
        }
      }
    },
    onLoad: function onLoad(event) {
      var _event$target = event.target,
          naturalWidth = _event$target.naturalWidth,
          naturalHeight = _event$target.naturalHeight;
      this.imageRatio = naturalHeight / naturalWidth;
    }
  }
});
// CONCATENATED MODULE: ./packages/image-preview/src/image-preview-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_image_preview_itemvue_type_script_lang_js_ = (image_preview_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/image-preview/src/image-preview-item.vue?vue&type=style&index=0&lang=scss&
var image_preview_itemvue_type_style_index_0_lang_scss_ = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/image-preview/src/image-preview-item.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_image_preview_itemvue_type_script_lang_js_,
  image_preview_itemvue_type_template_id_4862ed52_render,
  image_preview_itemvue_type_template_id_4862ed52_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/image-preview/src/image-preview-item.vue"
/* harmony default export */ var image_preview_item = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/image-preview/src/image-preview.vue?vue&type=script&lang=js&


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
// Mixins

 // Components





/* harmony default export */ var image_previewvue_type_script_lang_js_ = ({
  name: 'zmbl-image-preview',
  components: {
    icon: icon_default.a,
    Popup: popup_default.a,
    Swipe: swipe_default.a,
    ImagePreviewItem: image_preview_item
  },
  mixins: [touch_["TouchMixin"], Object(bind_event_["BindEventMixin"])(function (bind) {
    bind(window, 'resize', this.resize, true);
    bind(window, 'orientationchange', this.resize, true);
  })],
  props: {
    value: Boolean,
    className: null,
    closeable: Boolean,
    asyncClose: Boolean,
    showIndicators: Boolean,
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    minZoom: {
      type: [Number, String],
      default: 1 / 3
    },
    maxZoom: {
      type: [Number, String],
      default: 3
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    swipeDuration: {
      type: [Number, String],
      default: 500
    },
    startPosition: {
      type: [Number, String],
      default: 0
    },
    overlayClass: {
      type: String,
      default: "zmbl-image-preview__overlay"
    },
    closeIcon: {
      type: String,
      default: 'clear'
    },
    closeOnPopstate: {
      type: Boolean,
      default: true
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    closeIconPosition: {
      type: String,
      default: 'top-right'
    }
  },
  data: function data() {
    return {
      active: 0,
      rootWidth: 0,
      rootHeight: 0,
      doubleClickTimer: null
    };
  },
  mounted: function mounted() {
    this.resize();
  },
  watch: {
    startPosition: 'setActive',
    value: function value(val) {
      var _this = this;

      if (val) {
        this.setActive(+this.startPosition);
        this.$nextTick(function () {
          _this.resize();

          _this.$refs.swipe.swipeTo(+_this.startPosition, {
            immediate: true
          });
        });
      } else {
        this.$emit('close', {
          index: this.active,
          url: this.images[this.active]
        });
      }
    }
  },
  methods: {
    resize: function resize() {
      if (this.$el && this.$el.getBoundingClientRect) {
        var rect = this.$el.getBoundingClientRect();
        this.rootWidth = rect.width;
        this.rootHeight = rect.height;
      }
    },
    onClick: function onClick() {
      if (this.closeOnClick) {
        this.emitClose();
      }
    },
    emitClose: function emitClose() {
      if (!this.asyncClose) {
        this.$emit('input', false);
      }
    },
    emitScale: function emitScale(args) {
      this.$emit('scale', args);
    },
    setActive: function setActive(active) {
      if (active !== this.active) {
        this.active = active;
        this.$emit('change', active);
      }
    },
    onClosed: function onClosed() {
      this.$emit('closed');
    },
    // @exposed-api
    swipeTo: function swipeTo(index, options) {
      if (this.$refs.swipe) {
        this.$refs.swipe.swipeTo(index, options);
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/image-preview/src/image-preview.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_image_previewvue_type_script_lang_js_ = (image_previewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/image-preview/src/image-preview.vue?vue&type=style&index=0&lang=scss&
var image_previewvue_type_style_index_0_lang_scss_ = __webpack_require__(142);

// CONCATENATED MODULE: ./packages/image-preview/src/image-preview.vue






/* normalize component */

var image_preview_component = Object(componentNormalizer["a" /* default */])(
  src_image_previewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var image_preview_api; }
image_preview_component.options.__file = "packages/image-preview/src/image-preview.vue"
/* harmony default export */ var image_preview = (image_preview_component.exports);
// CONCATENATED MODULE: ./packages/image-preview/index.js




image_preview.install = function (Vue) {
  return Vue.component(image_preview.name, image_preview);
};

/* harmony default export */ var packages_image_preview = __webpack_exports__["default"] = (image_preview);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.number.constructor.js");

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = require("iwei-ui/lib/mixins/bind-event");

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports = require("iwei-ui/lib/swipe");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("iwei-ui/lib/utils/dom");

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

module.exports = require("iwei-ui/lib/icon");

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

module.exports = require("iwei-ui/lib/mixins/touch");

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("iwei-ui/lib/utils/util");

/***/ })

/******/ });