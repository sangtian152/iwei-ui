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
/******/ 	return __webpack_require__(__webpack_require__.s = 164);
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

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_swipe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_swipe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_swipe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom-collections.for-each.js");

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "SwipeItem", function() { return /* reexport */ swipe_item; });

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/swipe/src/swipe.vue?vue&type=template&id=258031b4&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "zmbl-swipe" }, [
    _c(
      "div",
      { ref: "wrap", staticClass: "zmbl-swipe-items-wrap" },
      [_vm._t("default")],
      2
    ),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.showIndicators,
            expression: "showIndicators",
          },
        ],
        staticClass: "zmbl-swipe-indicators",
      },
      _vm._l(_vm.pages, function (page, $index) {
        return _c("div", {
          key: $index,
          staticClass: "zmbl-swipe-indicator",
          class: { "is-active": $index === _vm.index },
        })
      }),
      0
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/swipe/src/swipe.vue?vue&type=template&id=258031b4&

// EXTERNAL MODULE: external "core-js/modules/es.number.constructor.js"
var es_number_constructor_js_ = __webpack_require__(2);

// EXTERNAL MODULE: external "core-js/modules/es.object.to-string.js"
var es_object_to_string_js_ = __webpack_require__(6);

// EXTERNAL MODULE: external "core-js/modules/web.dom-collections.for-each.js"
var web_dom_collections_for_each_js_ = __webpack_require__(16);

// EXTERNAL MODULE: external "zmbl-ui/lib/utils/dom"
var dom_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/swipe/src/swipe.vue?vue&type=script&lang=js&






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


/* harmony default export */ var swipevue_type_script_lang_js_ = ({
  name: 'zmbl-swipe',
  created: function created() {
    this.dragState = {};
  },
  data: function data() {
    return {
      ready: false,
      dragging: false,
      userScrolling: false,
      animating: false,
      index: 0,
      pages: [],
      timer: null,
      reInitTimer: null,
      noDrag: false,
      isDone: false
    };
  },
  props: {
    speed: {
      type: Number,
      default: 300
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    auto: {
      type: Number,
      default: 3000
    },
    continuous: {
      type: Boolean,
      default: true
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    noDragWhenSingle: {
      type: Boolean,
      default: true
    },
    prevent: {
      type: Boolean,
      default: false
    },
    stopPropagation: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    index: function index(newIndex) {
      this.$emit('change', newIndex);
    }
  },
  methods: {
    swipeItemCreated: function swipeItemCreated() {
      var _this = this;

      if (!this.ready) return;
      clearTimeout(this.reInitTimer);
      this.reInitTimer = setTimeout(function () {
        _this.reInitPages();
      }, 100);
    },
    swipeItemDestroyed: function swipeItemDestroyed() {
      var _this2 = this;

      if (!this.ready) return;
      clearTimeout(this.reInitTimer);
      this.reInitTimer = setTimeout(function () {
        _this2.reInitPages();
      }, 100);
    },
    rafTranslate: function rafTranslate(element, initOffset, offset, callback, nextElement) {
      var ALPHA = 0.88;
      this.animating = true;
      var _offset = initOffset;
      var raf = 0;

      function animationLoop() {
        if (Math.abs(_offset - offset) < 0.5) {
          this.animating = false;
          _offset = offset;
          element.style.webkitTransform = '';

          if (nextElement) {
            nextElement.style.webkitTransform = '';
          }

          cancelAnimationFrame(raf);

          if (callback) {
            callback();
          }

          return;
        }

        _offset = ALPHA * _offset + (1.0 - ALPHA) * offset;
        element.style.webkitTransform = "translate3d(".concat(_offset, "px, 0, 0)");

        if (nextElement) {
          nextElement.style.webkitTransform = "translate3d(".concat(_offset - offset, "px, 0, 0)");
        }

        raf = requestAnimationFrame(animationLoop.bind(this));
      }

      animationLoop.call(this);
    },
    translate: function translate(element, offset, speed, callback) {
      var _arguments = arguments,
          _this3 = this;

      if (speed) {
        this.animating = true;
        element.style.webkitTransition = '-webkit-transform ' + speed + 'ms ease-in-out';
        setTimeout(function () {
          element.style.webkitTransform = "translate3d(".concat(offset, "px, 0, 0)");
        }, 50);
        var called = false;

        var transitionEndCallback = function transitionEndCallback() {
          if (called) return;
          called = true;
          _this3.animating = false;
          element.style.webkitTransition = '';
          element.style.webkitTransform = '';

          if (callback) {
            callback.apply(_this3, _arguments);
          }
        };

        Object(dom_["once"])(element, 'webkitTransitionEnd', transitionEndCallback);
        setTimeout(transitionEndCallback, speed + 100); // webkitTransitionEnd maybe not fire on lower version android.
      } else {
        element.style.webkitTransition = '';
        element.style.webkitTransform = "translate3d(".concat(offset, "px, 0, 0)");
      }
    },
    reInitPages: function reInitPages() {
      var children = this.$children;
      this.noDrag = children.length === 1 && this.noDragWhenSingle;
      var pages = [];
      var intDefaultIndex = Math.floor(this.defaultIndex);
      var defaultIndex = intDefaultIndex >= 0 && intDefaultIndex < children.length ? intDefaultIndex : 0;
      this.index = defaultIndex;
      children.forEach(function (child, index) {
        pages.push(child.$el);
        Object(dom_["removeClass"])(child.$el, 'is-active');

        if (index === defaultIndex) {
          Object(dom_["addClass"])(child.$el, 'is-active');
        }
      });
      this.pages = pages;
    },
    swipeTo: function swipeTo() {},
    doAnimate: function doAnimate(towards, options) {
      var _this4 = this;

      if (this.$children.length === 0) return;
      if (!options && this.$children.length < 2) return;
      var prevPage, nextPage, currentPage, pageWidth, offsetLeft, speedX;
      var speed = this.speed || 300;
      var index = this.index;
      var pages = this.pages;
      var pageCount = pages.length;

      if (!options) {
        pageWidth = this.$el.clientWidth;
        currentPage = pages[index];
        prevPage = pages[index - 1];
        nextPage = pages[index + 1];

        if (this.continuous && pages.length > 1) {
          if (!prevPage) {
            prevPage = pages[pages.length - 1];
          }

          if (!nextPage) {
            nextPage = pages[0];
          }
        }

        if (prevPage) {
          prevPage.style.display = 'block';
          this.translate(prevPage, -pageWidth);
        }

        if (nextPage) {
          nextPage.style.display = 'block';
          this.translate(nextPage, pageWidth);
        }
      } else {
        prevPage = options.prevPage;
        currentPage = options.currentPage;
        nextPage = options.nextPage;
        pageWidth = options.pageWidth;
        offsetLeft = options.offsetLeft;
        speedX = options.speedX;
      }

      var newIndex;
      var oldPage = this.$children[index].$el;

      if (towards === 'prev') {
        if (index > 0) {
          newIndex = index - 1;
        }

        if (this.continuous && index === 0) {
          newIndex = pageCount - 1;
        }
      } else if (towards === 'next') {
        if (index < pageCount - 1) {
          newIndex = index + 1;
        }

        if (this.continuous && index === pageCount - 1) {
          newIndex = 0;
        }
      }

      var callback = function callback() {
        if (newIndex !== undefined) {
          var newPage = _this4.$children[newIndex].$el;
          Object(dom_["removeClass"])(oldPage, 'is-active');
          Object(dom_["addClass"])(newPage, 'is-active');
          _this4.index = newIndex;
        }

        if (_this4.isDone) {
          _this4.end();
        }

        if (prevPage) {
          prevPage.style.display = '';
        }

        if (nextPage) {
          nextPage.style.display = '';
        }
      };

      setTimeout(function () {
        if (towards === 'next') {
          _this4.isDone = true;

          _this4.before(currentPage);

          if (speedX) {
            _this4.rafTranslate(currentPage, offsetLeft, -pageWidth, callback, nextPage);
          } else {
            _this4.translate(currentPage, -pageWidth, speed, callback);

            if (nextPage) {
              _this4.translate(nextPage, 0, speed);
            }
          }
        } else if (towards === 'prev') {
          _this4.isDone = true;

          _this4.before(currentPage);

          if (speedX) {
            _this4.rafTranslate(currentPage, offsetLeft, pageWidth, callback, prevPage);
          } else {
            _this4.translate(currentPage, pageWidth, speed, callback);

            if (prevPage) {
              _this4.translate(prevPage, 0, speed);
            }
          }
        } else {
          _this4.isDone = false;

          _this4.translate(currentPage, 0, speed, callback);

          if (typeof offsetLeft !== 'undefined') {
            if (prevPage && offsetLeft > 0) {
              _this4.translate(prevPage, pageWidth * -1, speed);
            }

            if (nextPage && offsetLeft < 0) {
              _this4.translate(nextPage, pageWidth, speed);
            }
          } else {
            if (prevPage) {
              _this4.translate(prevPage, pageWidth * -1, speed);
            }

            if (nextPage) {
              _this4.translate(nextPage, pageWidth, speed);
            }
          }
        }
      }, 10);
    },
    next: function next() {
      this.doAnimate('next');
    },
    prev: function prev() {
      this.doAnimate('prev');
    },
    before: function before() {
      this.$emit('before', this.index);
    },
    end: function end() {
      this.$emit('end', this.index);
    },
    doOnTouchStart: function doOnTouchStart(event) {
      if (this.noDrag) return;
      var element = this.$el;
      var dragState = this.dragState;
      var touch = event.touches[0];
      dragState.startTime = new Date();
      dragState.startLeft = touch.pageX;
      dragState.startTop = touch.pageY;
      dragState.startTopAbsolute = touch.clientY;
      dragState.pageWidth = element.offsetWidth;
      dragState.pageHeight = element.offsetHeight;
      var prevPage = this.$children[this.index - 1];
      var dragPage = this.$children[this.index];
      var nextPage = this.$children[this.index + 1];

      if (this.continuous && this.pages.length > 1) {
        if (!prevPage) {
          prevPage = this.$children[this.$children.length - 1];
        }

        if (!nextPage) {
          nextPage = this.$children[0];
        }
      }

      dragState.prevPage = prevPage ? prevPage.$el : null;
      dragState.dragPage = dragPage ? dragPage.$el : null;
      dragState.nextPage = nextPage ? nextPage.$el : null;

      if (dragState.prevPage) {
        dragState.prevPage.style.display = 'block';
      }

      if (dragState.nextPage) {
        dragState.nextPage.style.display = 'block';
      }
    },
    doOnTouchMove: function doOnTouchMove(event) {
      if (this.noDrag) return;
      var dragState = this.dragState;
      var touch = event.touches[0];
      dragState.speedX = touch.pageX - dragState.currentLeft;
      dragState.currentLeft = touch.pageX;
      dragState.currentTop = touch.pageY;
      dragState.currentTopAbsolute = touch.clientY;
      var offsetLeft = dragState.currentLeft - dragState.startLeft;
      var offsetTop = dragState.currentTopAbsolute - dragState.startTopAbsolute;
      var distanceX = Math.abs(offsetLeft);
      var distanceY = Math.abs(offsetTop);

      if (distanceX < 5 || distanceX >= 5 && distanceY >= 1.73 * distanceX) {
        this.userScrolling = true;
        return;
      } else {
        this.userScrolling = false;
        event.preventDefault();
      }

      offsetLeft = Math.min(Math.max(-dragState.pageWidth + 1, offsetLeft), dragState.pageWidth - 1);
      var towards = offsetLeft < 0 ? 'next' : 'prev';

      if (dragState.prevPage && towards === 'prev') {
        this.translate(dragState.prevPage, offsetLeft - dragState.pageWidth);
      }

      this.translate(dragState.dragPage, offsetLeft);

      if (dragState.nextPage && towards === 'next') {
        this.translate(dragState.nextPage, offsetLeft + dragState.pageWidth);
      }
    },
    doOnTouchEnd: function doOnTouchEnd() {
      if (this.noDrag) return;
      var dragState = this.dragState;
      var dragDuration = new Date() - dragState.startTime;
      var towards = null;
      var offsetLeft = dragState.currentLeft - dragState.startLeft;
      var offsetTop = dragState.currentTop - dragState.startTop;
      var pageWidth = dragState.pageWidth;
      var index = this.index;
      var pageCount = this.pages.length;

      if (dragDuration < 300) {
        var fireTap = Math.abs(offsetLeft) < 5 && Math.abs(offsetTop) < 5;

        if (isNaN(offsetLeft) || isNaN(offsetTop)) {
          fireTap = true;
        }

        if (fireTap) {
          this.$children[this.index].$emit('tap');
        }
      }

      if (dragDuration < 300 && dragState.currentLeft === undefined) return;

      if (dragDuration < 300 || Math.abs(offsetLeft) > pageWidth / 2) {
        towards = offsetLeft < 0 ? 'next' : 'prev';
      }

      if (!this.continuous) {
        if (index === 0 && towards === 'prev' || index === pageCount - 1 && towards === 'next') {
          towards = null;
        }
      }

      if (this.$children.length < 2) {
        towards = null;
      }

      this.doAnimate(towards, {
        offsetLeft: offsetLeft,
        pageWidth: dragState.pageWidth,
        prevPage: dragState.prevPage,
        currentPage: dragState.dragPage,
        nextPage: dragState.nextPage,
        speedX: dragState.speedX
      });
      this.dragState = {};
    },
    initTimer: function initTimer() {
      var _this5 = this;

      if (this.auto > 0 && !this.timer) {
        this.timer = setInterval(function () {
          if (!_this5.continuous && _this5.index >= _this5.pages.length - 1) {
            return _this5.clearTimer();
          }

          if (!_this5.dragging && !_this5.animating) {
            _this5.next();
          }
        }, this.auto);
      }
    },
    clearTimer: function clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
    }
  },
  destroyed: function destroyed() {
    if (this.timer) {
      this.clearTimer();
    }

    if (this.reInitTimer) {
      clearTimeout(this.reInitTimer);
      this.reInitTimer = null;
    }
  },
  mounted: function mounted() {
    var _this6 = this;

    this.ready = true;
    this.initTimer();
    this.reInitPages();
    var element = this.$el;
    element.addEventListener('touchstart', function (event) {
      if (_this6.prevent) event.preventDefault();
      if (_this6.stopPropagation) event.stopPropagation();
      if (_this6.animating) return;
      _this6.dragging = true;
      _this6.userScrolling = false;

      _this6.doOnTouchStart(event);
    });
    element.addEventListener('touchmove', function (event) {
      if (!_this6.dragging) return;
      if (_this6.timer) _this6.clearTimer();

      _this6.doOnTouchMove(event);
    });
    element.addEventListener('touchend', function (event) {
      if (_this6.userScrolling) {
        _this6.dragging = false;
        _this6.dragState = {};
        return;
      }

      if (!_this6.dragging) return;

      _this6.initTimer();

      _this6.doOnTouchEnd(event);

      _this6.dragging = false;
    });
  }
});
// CONCATENATED MODULE: ./packages/swipe/src/swipe.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_swipevue_type_script_lang_js_ = (swipevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/swipe/src/swipe.vue?vue&type=style&index=0&lang=scss&
var swipevue_type_style_index_0_lang_scss_ = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/swipe/src/swipe.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_swipevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/swipe/src/swipe.vue"
/* harmony default export */ var swipe = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/swipe/src/swipe-item.vue?vue&type=template&id=2e2538ec&
var swipe_itemvue_type_template_id_2e2538ec_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "zmbl-swipe-item" }, [_vm._t("default")], 2)
}
var swipe_itemvue_type_template_id_2e2538ec_staticRenderFns = []
swipe_itemvue_type_template_id_2e2538ec_render._withStripped = true


// CONCATENATED MODULE: ./packages/swipe/src/swipe-item.vue?vue&type=template&id=2e2538ec&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/swipe/src/swipe-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var swipe_itemvue_type_script_lang_js_ = ({
  name: 'zmbl-swipe-item',
  mounted: function mounted() {
    this.$parent && this.$parent.swipeItemCreated(this);
  },
  destroyed: function destroyed() {
    this.$parent && this.$parent.swipeItemDestroyed(this);
  }
});
// CONCATENATED MODULE: ./packages/swipe/src/swipe-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_swipe_itemvue_type_script_lang_js_ = (swipe_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/swipe/src/swipe-item.vue





/* normalize component */

var swipe_item_component = Object(componentNormalizer["a" /* default */])(
  src_swipe_itemvue_type_script_lang_js_,
  swipe_itemvue_type_template_id_2e2538ec_render,
  swipe_itemvue_type_template_id_2e2538ec_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var swipe_item_api; }
swipe_item_component.options.__file = "packages/swipe/src/swipe-item.vue"
/* harmony default export */ var swipe_item = (swipe_item_component.exports);
// CONCATENATED MODULE: ./packages/swipe/index.js




swipe.install = function (Vue) {
  return Vue.component(swipe.name, swipe);
};


/* harmony default export */ var packages_swipe = __webpack_exports__["default"] = (swipe);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.number.constructor.js");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("zmbl-ui/lib/utils/dom");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string.js");

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });