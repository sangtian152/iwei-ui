"use strict";

exports.__esModule = true;
exports.isFunction = exports.isDefined = void 0;
exports.isHtmlElement = isHtmlElement;
exports.isNumeric = isNumeric;
exports.isObject = isObject;
exports.isString = isString;
exports.isUndefined = void 0;

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.isFunction = isFunction;

if (typeof /./ !== 'function' && typeof Int8Array !== 'object' && (_vue.default.prototype.$isServer || typeof document.childNodes !== 'function')) {
  exports.isFunction = isFunction = function isFunction(obj) {
    return typeof obj === 'function' || false;
  };
}

var isUndefined = function isUndefined(val) {
  return val === void 0;
};

exports.isUndefined = isUndefined;

var isDefined = function isDefined(val) {
  return val !== undefined && val !== null;
};

exports.isDefined = isDefined;