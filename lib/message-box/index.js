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
/******/ 	return __webpack_require__(__webpack_require__.s = 168);
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

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("zmbl-ui/lib/mixins/popup");

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.promise.js");

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_message_box_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_message_box_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_message_box_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_popup_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_popup_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_popup_css_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(21);

// EXTERNAL MODULE: external "core-js/modules/es.object.to-string.js"
var es_object_to_string_js_ = __webpack_require__(6);

// EXTERNAL MODULE: external "core-js/modules/es.promise.js"
var es_promise_js_ = __webpack_require__(152);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(4);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/message-box/src/message-box.vue?vue&type=template&id=3f2ab088&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "zmbl-msgbox-wrapper" },
    [
      _c("transition", { attrs: { name: "msgbox-bounce" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.value,
                expression: "value",
              },
            ],
            staticClass: "zmbl-msgbox",
          },
          [
            _vm.title !== ""
              ? _c("div", { staticClass: "zmbl-msgbox-header" }, [
                  _c("div", { staticClass: "zmbl-msgbox-title" }, [
                    _vm._v(_vm._s(_vm.title)),
                  ]),
                ])
              : _vm._e(),
            _vm.message !== ""
              ? _c("div", { staticClass: "zmbl-msgbox-content" }, [
                  _c("div", {
                    staticClass: "zmbl-msgbox-message",
                    domProps: { innerHTML: _vm._s(_vm.message) },
                  }),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.showInput,
                          expression: "showInput",
                        },
                      ],
                      staticClass: "zmbl-msgbox-input",
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inputValue,
                            expression: "inputValue",
                          },
                        ],
                        ref: "input",
                        attrs: { placeholder: _vm.inputPlaceholder },
                        domProps: { value: _vm.inputValue },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.inputValue = $event.target.value
                          },
                        },
                      }),
                      _c(
                        "div",
                        {
                          staticClass: "zmbl-msgbox-errormsg",
                          style: {
                            visibility: !!_vm.editorErrorMessage
                              ? "visible"
                              : "hidden",
                          },
                        },
                        [_vm._v(_vm._s(_vm.editorErrorMessage))]
                      ),
                    ]
                  ),
                ])
              : _vm._e(),
            _c("div", { staticClass: "zmbl-msgbox-btns" }, [
              _c(
                "button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.showCancelButton,
                      expression: "showCancelButton",
                    },
                  ],
                  class: [_vm.cancelButtonClasses],
                  on: {
                    click: function ($event) {
                      return _vm.handleAction("cancel")
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.cancelButtonText))]
              ),
              _c(
                "button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.showConfirmButton,
                      expression: "showConfirmButton",
                    },
                  ],
                  class: [_vm.confirmButtonClasses],
                  on: {
                    click: function ($event) {
                      return _vm.handleAction("confirm")
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.confirmButtonText))]
              ),
            ]),
          ]
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/message-box/src/message-box.vue?vue&type=template&id=3f2ab088&

// EXTERNAL MODULE: external "core-js/modules/es.regexp.exec.js"
var es_regexp_exec_js_ = __webpack_require__(5);

// EXTERNAL MODULE: external "core-js/modules/es.regexp.test.js"
var es_regexp_test_js_ = __webpack_require__(38);

// EXTERNAL MODULE: external "zmbl-ui/lib/mixins/popup"
var popup_ = __webpack_require__(15);
var popup_default = /*#__PURE__*/__webpack_require__.n(popup_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/message-box/src/message-box.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var CONFIRM_TEXT = '确定';
var CANCEL_TEXT = '取消';

/* harmony default export */ var message_boxvue_type_script_lang_js_ = ({
  mixins: [popup_default.a],
  props: {
    modal: {
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: false
    },
    closeOnClickModal: {
      default: true
    },
    closeOnPressEscape: {
      default: true
    },
    inputType: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    confirmButtonClasses: function confirmButtonClasses() {
      var classes = 'zmbl-msgbox-btn zmbl-msgbox-confirm ' + this.confirmButtonClass;

      if (this.confirmButtonHighlight) {
        classes += ' zmbl-msgbox-confirm-highlight';
      }

      return classes;
    },
    cancelButtonClasses: function cancelButtonClasses() {
      var classes = 'zmbl-msgbox-btn zmbl-msgbox-cancel ' + this.cancelButtonClass;

      if (this.cancelButtonHighlight) {
        classes += ' zmbl-msgbox-cancel-highlight';
      }

      return classes;
    }
  },
  methods: {
    doClose: function doClose() {
      var _this = this;

      this.value = false;
      this._closing = true;
      this.onClose && this.onClose();
      setTimeout(function () {
        if (_this.modal && _this.bodyOverflow !== 'hidden') {
          document.body.style.overflow = _this.bodyOverflow;
          document.body.style.paddingRight = _this.bodyPaddingRight;
        }

        _this.bodyOverflow = null;
        _this.bodyPaddingRight = null;
      }, 200);
      this.opened = false;

      if (!this.transition) {
        this.doAfterClose();
      }
    },
    handleAction: function handleAction(action) {
      if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
        return;
      }

      var callback = this.callback;
      this.value = false;
      callback(action);
    },
    validate: function validate() {
      if (this.$type === 'prompt') {
        var inputPattern = this.inputPattern;

        if (inputPattern && !inputPattern.test(this.inputValue || '')) {
          this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
          this.$refs.input.classList.add('invalid');
          return false;
        }

        var inputValidator = this.inputValidator;

        if (typeof inputValidator === 'function') {
          var validateResult = inputValidator(this.inputValue);

          if (validateResult === false) {
            this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
            this.$refs.input.classList.add('invalid');
            return false;
          }

          if (typeof validateResult === 'string') {
            this.editorErrorMessage = validateResult;
            return false;
          }
        }
      }

      this.editorErrorMessage = '';
      this.$refs.input.classList.remove('invalid');
      return true;
    },
    handleInputType: function handleInputType(val) {
      if (val === 'range' || !this.$refs.input) return;
      this.$refs.input.type = val;
    }
  },
  watch: {
    inputValue: function inputValue() {
      if (this.$type === 'prompt') {
        this.validate();
      }
    },
    value: function value(val) {
      var _this2 = this;

      this.handleInputType(this.inputType);

      if (val && this.$type === 'prompt') {
        setTimeout(function () {
          if (_this2.$refs.input) {
            _this2.$refs.input.focus();
          }
        }, 500);
      }
    },
    inputType: function inputType(val) {
      this.handleInputType(val);
    }
  },
  data: function data() {
    return {
      title: '',
      message: '',
      type: '',
      showInput: false,
      inputValue: null,
      inputPlaceholder: '',
      inputPattern: null,
      inputValidator: null,
      inputErrorMessage: '',
      showConfirmButton: true,
      showCancelButton: false,
      confirmButtonText: CONFIRM_TEXT,
      cancelButtonText: CANCEL_TEXT,
      confirmButtonClass: '',
      confirmButtonDisabled: false,
      cancelButtonClass: '',
      editorErrorMessage: null,
      callback: null
    };
  }
});
// CONCATENATED MODULE: ./packages/message-box/src/message-box.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_message_boxvue_type_script_lang_js_ = (message_boxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/message-box/src/message-box.vue?vue&type=style&index=0&lang=scss&
var message_boxvue_type_style_index_0_lang_scss_ = __webpack_require__(153);

// EXTERNAL MODULE: ./src/style/popup.css?vue&type=style&index=1&lang=css&
var popupvue_type_style_index_1_lang_css_ = __webpack_require__(154);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/message-box/src/message-box.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_message_boxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/message-box/src/message-box.vue"
/* harmony default export */ var message_box = (component.exports);
// CONCATENATED MODULE: ./packages/message-box/src/message-box.js




var message_box_CONFIRM_TEXT = '确定';
var message_box_CANCEL_TEXT = '取消';
var defaults = {
  title: '提示',
  message: '',
  type: '',
  showInput: false,
  showClose: true,
  modalFade: false,
  lockScroll: false,
  closeOnClickModal: true,
  inputValue: null,
  inputPlaceholder: '',
  inputPattern: null,
  inputValidator: null,
  inputErrorMessage: '',
  showConfirmButton: true,
  showCancelButton: false,
  confirmButtonPosition: 'right',
  confirmButtonHighlight: false,
  cancelButtonHighlight: false,
  confirmButtonText: message_box_CONFIRM_TEXT,
  cancelButtonText: message_box_CANCEL_TEXT,
  confirmButtonClass: '',
  cancelButtonClass: ''
};



var merge = function merge(target) {
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i];

    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        var value = source[prop];

        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
};

var MessageBoxConstructor = external_vue_default.a.extend(message_box);
var currentMsg, instance;
var msgQueue = [];

var defaultCallback = function defaultCallback(action) {
  if (currentMsg) {
    var callback = currentMsg.callback;

    if (typeof callback === 'function') {
      if (instance.showInput) {
        callback(instance.inputValue, action);
      } else {
        callback(action);
      }
    }

    if (currentMsg.resolve) {
      var $type = currentMsg.options.$type;

      if ($type === 'confirm' || $type === 'prompt') {
        if (action === 'confirm') {
          if (instance.showInput) {
            currentMsg.resolve({
              value: instance.inputValue,
              action: action
            });
          } else {
            currentMsg.resolve(action);
          }
        } else if (action === 'cancel' && currentMsg.reject) {
          currentMsg.reject(action);
        }
      } else {
        currentMsg.resolve(action);
      }
    }
  }
};

var initInstance = function initInstance() {
  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  });
  instance.callback = defaultCallback;
};

var message_box_showNextMsg = function showNextMsg() {
  if (!instance) {
    initInstance();
  }

  if (!instance.value || instance.closeTimer) {
    if (msgQueue.length > 0) {
      currentMsg = msgQueue.shift();
      var options = currentMsg.options;

      for (var prop in options) {
        if (options.hasOwnProperty(prop)) {
          instance[prop] = options[prop];
        }
      }

      if (options.callback === undefined) {
        instance.callback = defaultCallback;
      }

      ['modal', 'showClose', 'closeOnClickModal', 'closeOnPressEscape'].forEach(function (prop) {
        if (instance[prop] === undefined) {
          instance[prop] = true;
        }
      });
      document.body.appendChild(instance.$el);
      external_vue_default.a.nextTick(function () {
        instance.value = true;
      });
    }
  }
};

var MessageBox = function MessageBox(options, callback) {
  if (typeof options === 'string') {
    options = {
      title: options
    };

    if (arguments[1]) {
      options.message = arguments[1];
    }

    if (arguments[2]) {
      options.type = arguments[2];
    }
  } else if (options.callback && !callback) {
    callback = options.callback;
  }

  if (typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      // eslint-disable-line
      msgQueue.push({
        options: merge({}, defaults, MessageBox.defaults || {}, options),
        callback: callback,
        resolve: resolve,
        reject: reject
      });
      message_box_showNextMsg();
    });
  } else {
    msgQueue.push({
      options: merge({}, defaults, MessageBox.defaults || {}, options),
      callback: callback
    });
    message_box_showNextMsg();
  }
};

MessageBox.setDefaults = function (defaults) {
  MessageBox.defaults = defaults;
};

MessageBox.alert = function (message, title, options) {
  if (Object(esm_typeof["a" /* default */])(title) === 'object') {
    options = title;
    title = '';
  }

  return MessageBox(merge({
    title: title,
    message: message,
    $type: 'alert',
    closeOnPressEscape: false,
    closeOnClickModal: false
  }, options));
};

MessageBox.confirm = function (message, title, options) {
  if (Object(esm_typeof["a" /* default */])(title) === 'object') {
    options = title;
    title = '';
  }

  return MessageBox(merge({
    title: title,
    message: message,
    $type: 'confirm',
    showCancelButton: true
  }, options));
};

MessageBox.prompt = function (message, title, options) {
  if (Object(esm_typeof["a" /* default */])(title) === 'object') {
    options = title;
    title = '';
  }

  return MessageBox(merge({
    title: title,
    message: message,
    showCancelButton: true,
    showInput: true,
    $type: 'prompt'
  }, options));
};

MessageBox.close = function () {
  if (!instance) return;
  instance.value = false;
  msgQueue = [];
  currentMsg = null;
};

/* harmony default export */ var src_message_box = (MessageBox);

// CONCATENATED MODULE: ./packages/message-box/index.js




src_message_box.install = function (Vue) {
  return Vue.component(src_message_box.name, src_message_box);
};

/* harmony default export */ var packages_message_box = __webpack_exports__["default"] = (src_message_box);

/***/ }),

/***/ 21:
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

/***/ 38:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.test.js");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.regexp.exec.js");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.object.to-string.js");

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });