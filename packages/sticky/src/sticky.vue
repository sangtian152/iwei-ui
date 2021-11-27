<template>
  <div :style="{height: $height}">
      <div class="zmbl-sticky" :class="{'zmbl-sticky--fixed': fixed}" :style="style">
        <slot></slot>
      </div>
    </div>
</template>
<script>
import { isHidden } from 'iwei-ui/src/utils/style';
import { unitToPx } from 'iwei-ui/src/utils/format/unit';
import { isDefined } from 'iwei-ui/src/utils/types';
import { isServer } from 'iwei-ui/src/utils/util';
import { getScrollTop, getElementTop, getScroller } from 'iwei-ui/src/utils/scroll';
import { BindEventMixin } from 'iwei-ui/src/mixins/bind-event';

export default {
  name: 'zmbl-sticky',
  mixins: [
    BindEventMixin(function (bind, isBind) {
      if (!this.scroller) {
        this.scroller = getScroller(this.$el);
      }

      if (this.observer) {
        const method = isBind ? 'observe' : 'unobserve';
        this.observer[method](this.$el);
      }

      bind(this.scroller, 'scroll', this.onScroll, true);
      this.onScroll();
    }),
  ],

  props: {
    zIndex: [Number, String],
    container: null,
    offsetTop: {
      type: [Number, String],
      default: 0,
    },
  },

  data() {
    return {
      fixed: false,
      height: 0,
      transform: 0,
    };
  },

  computed: {
    offsetTopPx() {
      return unitToPx(this.offsetTop);
    },

    style() {
      if (!this.fixed) {
        return;
      }

      const style = {};

      if (isDefined(this.zIndex)) {
        style.zIndex = this.zIndex;
      }

      if (this.offsetTopPx && this.fixed) {
        style.top = `${this.offsetTopPx}px`;
      }

      if (this.transform) {
        style.transform = `translate3d(0, ${this.transform}px, 0)`;
      }

      return style;
    },
    $height(){
      return this.fixed ? `${this.height}px` : null
    }
  },
  watch: {
    fixed(val) {
      this.$emit('change', val);
    },
  },
  created() {
    // compatibility: https://caniuse.com/#feat=intersectionobserver
    if (!isServer && window.IntersectionObserver) {
      this.observer = new IntersectionObserver(
        (entries) => {
          // trigger scroll when visibility changed
          if (entries[0].intersectionRatio > 0) {
            this.onScroll();
          }
        },
        { root: document.body }
      );
    }
  },

  methods: {
    onScroll() {
      if (isHidden(this.$el)) {
        return;
      }

      this.height = this.$el.offsetHeight;

      const { container, offsetTopPx } = this;
      const scrollTop = getScrollTop(window);
      const topToPageTop = getElementTop(this.$el);

      const emitScrollEvent = () => {
        this.$emit('scroll', {
          scrollTop,
          isFixed: this.fixed,
        });
      };

      // The sticky component should be kept inside the container element
      if (container) {
        const bottomToPageTop = topToPageTop + container.offsetHeight;

        if (scrollTop + offsetTopPx + this.height > bottomToPageTop) {
          const distanceToBottom = this.height + scrollTop - bottomToPageTop;

          if (distanceToBottom < this.height) {
            this.fixed = true;
            this.transform = -(distanceToBottom + offsetTopPx);
          } else {
            this.fixed = false;
          }

          emitScrollEvent();
          return;
        }
      }

      if (scrollTop + offsetTopPx > topToPageTop) {
        this.fixed = true;
        this.transform = 0;
      } else {
        this.fixed = false;
      }

      emitScrollEvent();
    },
  }
};
</script>
<style lang="scss">
.zmbl-sticky {
  &--fixed {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
  }
}
</style>