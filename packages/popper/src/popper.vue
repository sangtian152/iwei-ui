<template>
  <span>
    <transition
      :name="transition"
      @after-enter="handleAfterEnter"
      @after-leave="handleAfterLeave">
      <div
        class="zmbl-popper"
        :class="[popperClass, content && 'zmbl-popper--plain']"
        ref="popper"
        v-show="!disabled && showPopper"
        :style="{ width: width + 'px' }"
        role="tooltip"
        :id="tooltipId"
        :aria-hidden="(disabled || !showPopper) ? 'true' : 'false'"
      >
        <div class="zmbl-popper__title" v-if="title" v-text="title"></div>
        <slot>{{ content }}</slot>
      </div>
    </transition>
    <span class="zmbl-popper__reference-wrapper" ref="wrapper" >
      <slot name="reference"></slot>
    </span>
  </span>
</template>
<script>
import Popper from 'iwei-ui/src/mixins/popper';
import { on, off } from 'iwei-ui/src/utils/dom';
import { addClass, removeClass } from 'iwei-ui/src/utils/dom';
import { generateId } from 'iwei-ui/src/utils/util';

export default {
  name: 'zmbl-popper',

  mixins: [Popper],

  props: {
    trigger: {
      type: String,
      default: 'click',
      validator: value => ['click', 'focus', 'manual'].indexOf(value) > -1
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 200
    },
    title: String,
    disabled: Boolean,
    content: String,
    reference: {},
    popperClass: String,
    width: {},
    visibleArrow: {
      default: true
    },
    arrowOffset: {
      type: Number,
      default: 0
    },
    transition: {
      type: String,
      default: 'fade-in-linear'
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },

  computed: {
    tooltipId() {
      return `zmbl-popper-${generateId()}`;
    }
  },
  watch: {
    showPopper(val) {
      if (this.disabled) {
        return;
      }
      val ? this.$emit('show') : this.$emit('hide');
    }
  },

  mounted() {
    let reference = this.referenceElm = this.reference || this.$refs.reference;
    const popper = this.popper || this.$refs.popper;

    if (!reference && this.$refs.wrapper.children) {
      reference = this.referenceElm = this.$refs.wrapper.children[0];
    }
    // 可访问性
    if (reference) {
      addClass(reference, 'el-popover__reference');
      reference.setAttribute('aria-describedby', this.tooltipId);
      reference.setAttribute('tabindex', this.tabindex); // tab序列
      popper.setAttribute('tabindex', 0);

      if (this.trigger !== 'click') {
        on(reference, 'focusin', () => {
          this.handleFocus();
          const instance = reference.__vue__;
          if (instance && typeof instance.focus === 'function') {
            instance.focus();
          }
        });
        on(popper, 'focusin', this.handleFocus);
        on(reference, 'focusout', this.handleBlur);
        on(popper, 'focusout', this.handleBlur);
      }
      on(reference, 'click', this.handleClick);
    }
    if (this.trigger === 'click') {
      on(reference, 'click', this.doToggle);
      on(document, 'click', this.handleDocumentClick);
    } else if (this.trigger === 'focus') {
      if (this.tabindex < 0) {
        console.warn('[Element Warn][Popover]a negative taindex means that the element cannot be focused by tab key');
      }
      if (reference.querySelector('input, textarea')) {
        on(reference, 'focusin', this.doShow);
        on(reference, 'focusout', this.doClose);
      } else {
        on(reference, 'click', this.doToggle);
        on(document, 'click', this.handleDocumentClick);
      }
    }
  },

  beforeDestroy() {
    this.cleanup();
  },

  deactivated() {
    this.cleanup();
  },

  methods: {
    doToggle() {
      this.showPopper = !this.showPopper;
    },
    doShow() {
      this.showPopper = true;
    },
    doClose() {
      this.showPopper = false;
    },
    handleFocus() {
      addClass(this.referenceElm, 'focusing');
      if (this.trigger === 'click' || this.trigger === 'focus') this.showPopper = true;
    },
    handleClick() {
      removeClass(this.referenceElm, 'focusing');
    },
    handleBlur() {
      removeClass(this.referenceElm, 'focusing');
      if (this.trigger === 'click' || this.trigger === 'focus') this.showPopper = false;
    },
    handleDocumentClick(e) {
      let reference = this.reference || this.$refs.reference;
      const popper = this.popper || this.$refs.popper;

      if (!reference && this.$refs.wrapper.children) {
        reference = this.referenceElm = this.$refs.wrapper.children[0];
      }
      if (!this.$el ||
        !reference ||
        this.$el.contains(e.target) ||
        reference.contains(e.target) ||
        !popper ||
        popper.contains(e.target)) return;
      this.showPopper = false;
    },
    handleAfterEnter() {
      this.$emit('after-enter');
    },
    handleAfterLeave() {
      this.$emit('after-leave');
      this.doDestroy();
    },
    cleanup() {
      if (this.openDelay || this.closeDelay) {
        clearTimeout(this._timer);
      }
    }
  },

  destroyed() {
    const reference = this.reference;

    off(reference, 'click', this.doToggle);
    off(reference, 'focusin', this.doShow);
    off(reference, 'focusout', this.doClose);
    off(document, 'click', this.handleDocumentClick);
  }
};
</script>
<style lang="scss">
.zmbl-popper {
	position: absolute;
	background: #FFF;
	min-width: 150px;
	border-radius: 4px;
	border: 1px solid #EBEEF5;
	padding: 12px;
	z-index: 2000;
	color: #606266;
	line-height: 1.4;
	text-align: justify;
	font-size: 14px;
	-webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
	box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
	word-break: break-all
}

.zmbl-popper--plain {
	padding: 18px 20px
}

.zmbl-popper__title {
	color: #303133;
	font-size: 16px;
	line-height: 1;
	margin-bottom: 12px
}

.zmbl-popper:focus,
.zmbl-popper:focus:active,
.zmbl-popper__reference:focus:hover,
.zmbl-popper__reference:focus:not(.focusing) {
	outline-width: 0
}
.zmbl-popper .popper__arrow,
.zmbl-popper .popper__arrow::after {
	position: absolute;
	display: block;
	width: 0;
	height: 0;
	border-color: transparent;
	border-style: solid
}

.zmbl-popper .popper__arrow {
	border-width: 6px;
	-webkit-filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
	filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03))
}

.zmbl-popper .popper__arrow::after {
	content: " ";
	border-width: 6px
}

.zmbl-popper[x-placement^=top] {
	margin-bottom: 12px
}

.zmbl-popper[x-placement^=top] .popper__arrow {
	bottom: -6px;
	left: 50%;
	margin-right: 3px;
	border-top-color: #EBEEF5;
	border-bottom-width: 0
}

.zmbl-popper[x-placement^=top] .popper__arrow::after {
	bottom: 1px;
	margin-left: -6px;
	border-top-color: #FFF;
	border-bottom-width: 0
}

.zmbl-popper[x-placement^=bottom] {
	margin-top: 12px
}

.zmbl-popper[x-placement^=bottom] .popper__arrow {
	top: -6px;
	left: 50%;
	margin-right: 3px;
	border-top-width: 0;
	border-bottom-color: #EBEEF5
}

.zmbl-popper[x-placement^=bottom] .popper__arrow::after {
	top: 1px;
	margin-left: -6px;
	border-top-width: 0;
	border-bottom-color: #FFF
}

.zmbl-popper[x-placement^=right] {
	margin-left: 12px
}

.zmbl-popper[x-placement^=right] .popper__arrow {
	top: 50%;
	left: -6px;
	margin-bottom: 3px;
	border-right-color: #EBEEF5;
	border-left-width: 0
}

.zmbl-popper[x-placement^=right] .popper__arrow::after {
	bottom: -6px;
	left: 1px;
	border-right-color: #FFF;
	border-left-width: 0
}

.zmbl-popper[x-placement^=left] {
	margin-right: 12px
}

.zmbl-popper[x-placement^=left] .popper__arrow {
	top: 50%;
	right: -6px;
	margin-bottom: 3px;
	border-right-width: 0;
	border-left-color: #EBEEF5
}

.zmbl-popper[x-placement^=left] .popper__arrow::after {
	right: 1px;
	bottom: -6px;
	margin-left: -6px;
	border-right-width: 0;
	border-left-color: #FFF
}
</style>
