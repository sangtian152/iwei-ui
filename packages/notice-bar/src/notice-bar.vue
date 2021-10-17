<template>
  <div
    role="alert"
    v-show="show"
    class="zmbl-notice-bar"
    :class="{'zmbl-notice-bar--wrapable': wrapable }"
    :style="barStyle"
    @click="$emit('click')"
  >
    <slot name="left-icon"></slot>
    <div ref="wrap" class="zmbl-notice-bar__wrap" role="marquee">
      <div
        ref="content"
        class="zmbl-notice-bar__content"
        :class="{'zmbl-ellipsis': this.scrollable === false && !this.wrapable}"
        :style="contentStyle"
        @transitionend="onTransitionEnd"
      >
        <slot>{{text}}</slot>
      </div>
    </div>
    <slot name="right-icon"></slot>
  </div>
</template>
<script>
import { isDefined } from 'zmbl-ui/src/utils/types';
import { doubleRaf, raf } from 'zmbl-ui/src/utils/raf';
import { BindEventMixin } from 'zmbl-ui/src/mixins/bind-event';

export default {
  name: 'zmbl-notice-bar',
  mixins: [
    BindEventMixin(function (bind) {
      // fix cache issues with forwards and back history in safari
      // see: https://guwii.com/cache-issues-with-forwards-and-back-history-in-safari/
      bind(window, 'pageshow', this.start);
    }),
  ],

  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    scrollable: {
      type: Boolean,
      default: null,
    },
    delay: {
      type: [Number, String],
      default: 1,
    },
    speed: {
      type: [Number, String],
      default: 50,
    },
  },

  data() {
    return {
      show: true,
      offset: 0,
      duration: 0,
      wrapWidth: 0,
      contentWidth: 0,
    };
  },
  computed:{
    contentStyle(){
      return {
        transform: this.offset ? `translateX(${this.offset}px)` : '',
        transitionDuration: this.duration + 's',
      }
    },
    barStyle(){
      return {
        color: this.color,
        background: this.background,
      }
    }
  },
  watch: {
    scrollable: 'start',
    text: {
      handler: 'start',
      immediate: true,
    },
  },

  activated() {
    this.start();
  },

  methods: {
    onClickIcon(event) {
      if (this.mode === 'closeable') {
        this.show = false;
        this.$emit('close', event);
      }
    },

    onTransitionEnd() {
      this.offset = this.wrapWidth;
      this.duration = 0;

      // wait for Vue to render offset
      // using nextTick won't work in iOS14
      raf(() => {
        // use double raf to ensure animation can start
        doubleRaf(() => {
          this.offset = -this.contentWidth;
          this.duration = (this.contentWidth + this.wrapWidth) / this.speed;
          this.$emit('replay');
        });
      });
    },

    reset() {
      this.offset = 0;
      this.duration = 0;
      this.wrapWidth = 0;
      this.contentWidth = 0;
    },

    start() {
      const delay = isDefined(this.delay) ? this.delay * 1000 : 0;

      this.reset();
      clearTimeout(this.startTimer);
      this.startTimer = setTimeout(() => {
        const { wrap, content } = this.$refs;
        if (!wrap || !content || this.scrollable === false) {
          return;
        }

        const wrapWidth = wrap.getBoundingClientRect().width;
        const contentWidth = content.getBoundingClientRect().width;

        if (this.scrollable || contentWidth > wrapWidth) {
          doubleRaf(() => {
            this.offset = -contentWidth;
            this.duration = contentWidth / this.speed;
            this.wrapWidth = wrapWidth;
            this.contentWidth = contentWidth;
          });
        }
      }, delay);
    },
  }
};
</script>
<style lang="scss">
@import "../../../src/style/var.scss";

.zmbl-notice-bar {
  position: relative;
  display: flex;
  align-items: center;
  height: $notice-bar-height;
  padding: $notice-bar-padding;
  color: $notice-bar-text-color;
  font-size: $notice-bar-font-size;
  line-height: $notice-bar-line-height;
  background-color: $notice-bar-background-color;

  &__left-icon,
  &__right-icon {
    min-width: $notice-bar-icon-min-width;
    font-size: $notice-bar-icon-size;
  }

  &__right-icon {
    text-align: right;
    cursor: pointer;
  }

  &__wrap {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    height: 100%;
    overflow: hidden;
  }

  &__content {
    position: absolute;
    white-space: nowrap;
    transition-timing-function: linear;

    &.zmbl-ellipsis {
      max-width: 100%;
    }
  }

  &--wrapable {
    height: auto;
    padding: $notice-bar-wrapable-padding;

    .zmbl-notice-bar {
      &__wrap {
        height: auto;
      }

      &__content {
        position: relative;
        white-space: normal;
        word-wrap: break-word;
      }
    }
  }
}

</style>