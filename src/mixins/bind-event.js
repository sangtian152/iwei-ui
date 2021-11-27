/**
 * Bind event when mounted or activated
 */
import { on, off } from 'iwei-ui/src/utils/dom';

let uid = 0;

export function BindEventMixin(handler) {
  const key = `binded_${uid++}`;

  function bind() {
    if (!this[key]) {
      handler.call(this, on, true);
      this[key] = true;
    }
  }

  function unbind() {
    if (this[key]) {
      handler.call(this, off, false);
      this[key] = false;
    }
  }

  return {
    mounted: bind,
    activated: bind,
    deactivated: unbind,
    beforeDestroy: unbind,
  };
}
 