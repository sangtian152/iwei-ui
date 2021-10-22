"use strict";

exports.__esModule = true;
exports.addUnit = addUnit;
exports.generateId = exports.escapeRegexpString = exports.coerceTruthyValueToArray = exports.capitalize = exports.autoprefixer = exports.arrayFindIndex = exports.arrayFind = exports.arrayEquals = void 0;
exports.getPropByPath = getPropByPath;
exports.getValueByPath = void 0;
exports.hasOwn = hasOwn;
exports.looseEqual = exports.kebabCase = exports.isServer = exports.isIE = exports.isFirefox = exports.isEqual = exports.isEmpty = exports.isEdge = exports.inBrowser = void 0;
exports.noop = noop;
exports.objToArray = objToArray;
exports.rafThrottle = rafThrottle;
exports.range = range;
exports.toObject = toObject;
exports.valueEquals = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _types = require("zmbl-ui/lib/utils/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasOwnProperty = Object.prototype.hasOwnProperty;

function noop() {}

;

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
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

exports.getValueByPath = getValueByPath;

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

exports.generateId = generateId;

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

exports.valueEquals = valueEquals;

var escapeRegexpString = function escapeRegexpString(value) {
  if (value === void 0) {
    value = '';
  }

  return String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
}; // TODO: use native Array.find, Array.findIndex when IE support is dropped


exports.escapeRegexpString = escapeRegexpString;

var arrayFindIndex = function arrayFindIndex(arr, pred) {
  for (var i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i;
    }
  }

  return -1;
};

exports.arrayFindIndex = arrayFindIndex;

var arrayFind = function arrayFind(arr, pred) {
  var idx = arrayFindIndex(arr, pred);
  return idx !== -1 ? arr[idx] : undefined;
}; // coerce truthy value to array


exports.arrayFind = arrayFind;

var coerceTruthyValueToArray = function coerceTruthyValueToArray(val) {
  if (Array.isArray(val)) {
    return val;
  } else if (val) {
    return [val];
  } else {
    return [];
  }
};

exports.coerceTruthyValueToArray = coerceTruthyValueToArray;
var inBrowser = typeof window !== 'undefined';
exports.inBrowser = inBrowser;
var isServer = _vue.default.prototype.$isServer;
exports.isServer = isServer;

var isIE = function isIE() {
  return !isServer && !isNaN(Number(document.documentMode));
};

exports.isIE = isIE;

var isEdge = function isEdge() {
  return !isServer && navigator.userAgent.indexOf('Edge') > -1;
};

exports.isEdge = isEdge;

var isFirefox = function isFirefox() {
  return !isServer && !!window.navigator.userAgent.match(/firefox/i);
};

exports.isFirefox = isFirefox;

var autoprefixer = function autoprefixer(style) {
  if (typeof style !== 'object') return style;
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

exports.autoprefixer = autoprefixer;

var kebabCase = function kebabCase(str) {
  var hyphenateRE = /([^-])([A-Z])/g;
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
};

exports.kebabCase = kebabCase;

var capitalize = function capitalize(str) {
  if (!(0, _types.isString)(str)) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

exports.capitalize = capitalize;

var looseEqual = function looseEqual(a, b) {
  var isObjectA = (0, _types.isObject)(a);
  var isObjectB = (0, _types.isObject)(b);

  if (isObjectA && isObjectB) {
    return JSON.stringify(a) === JSON.stringify(b);
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
};

exports.looseEqual = looseEqual;

var arrayEquals = function arrayEquals(arrayA, arrayB) {
  arrayA = arrayA || [];
  arrayB = arrayB || [];

  if (arrayA.length !== arrayB.length) {
    return false;
  }

  for (var i = 0; i < arrayA.length; i++) {
    if (!looseEqual(arrayA[i], arrayB[i])) {
      return false;
    }
  }

  return true;
};

exports.arrayEquals = arrayEquals;

var isEqual = function isEqual(value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return arrayEquals(value1, value2);
  }

  return looseEqual(value1, value2);
};

exports.isEqual = isEqual;

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

exports.isEmpty = isEmpty;

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
  if (!(0, _types.isDefined)(value)) {
    return undefined;
  }

  value = String(value);
  return (0, _types.isNumeric)(value) ? value + "px" : value;
}

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}