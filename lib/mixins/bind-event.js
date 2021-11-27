"use strict";

exports.__esModule = true;
exports.BindEventMixin = BindEventMixin;

var _dom = require("iwei-ui/lib/utils/dom");

/**
 * Bind event when mounted or activated
 */
var uid = 0;

function BindEventMixin(handler) {
  var key = "binded_" + uid++;

  function bind() {
    if (!this[key]) {
      handler.call(this, _dom.on, true);
      this[key] = true;
    }
  }

  function unbind() {
    if (this[key]) {
      handler.call(this, _dom.off, false);
      this[key] = false;
    }
  }

  return {
    mounted: bind,
    activated: bind,
    deactivated: unbind,
    beforeDestroy: unbind
  };
}