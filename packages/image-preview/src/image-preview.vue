<template>
  <transition name="van-fade" @after-leave="onClosed">
    <Popup class="zmbl-image-preview" v-model="value" :close-on-click-modal="false" :class="className">
      <i class="zmbl-image-preview__close" v-if="closeable" @click="emitClose">×</i>
      <Swipe
        ref="swipe"
        lazyRender
        :loop="loop"
        :auto="0"
        class="zmbl-image-preview__swipe"
        :duration="swipeDuration"
        :initialSwipe="startPosition"
        :showIndicators="showIndicators"
        indicatorColor="white"
        @change="setActive"
      >
        <template v-for="image in images">
          <ImagePreviewItem
            :key="image"
            :src="image"
            :show="value"
            :active="active"
            :maxZoom="maxZoom"
            :minZoom="minZoom"
            :rootWidth="rootWidth"
            :rootHeight="rootHeight"
            @scale="emitScale"
          />
        </template>
      </Swipe>
      <div class="zmbl-image-preview__index">
        <slot name="index" :index="active">{{`${active + 1} / ${images.length}`}}</slot>
      </div>
    </Popup>
  </transition>
</template>
<style lang="scss" scoped>
.zmbl-image-preview {
  width: 100%;
  height: 100%;
  background: transparent;
  .zmbl-image-preview__index {
    color: #fff;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
  .zmbl-image-preview__close {
    color: #000;
    width: 22px;
    height: 22px;
    font-size: 18px;
    text-align: center;
    line-height: 22px;
    background: #c8c9cc;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
  }
}
</style>
<script>
// Mixins
import { TouchMixin } from 'zmbl-ui/src/mixins/touch';
import { BindEventMixin } from 'zmbl-ui/src/mixins/bind-event';

// Components
import Popup from 'zmbl-ui/packages/popup'
import Swipe from 'zmbl-ui/packages/swipe'
import ImagePreviewItem from './image-preview-item';

export default {
  name: 'zmbl-image-preview',
  components:{
    Popup,
    Swipe,
    ImagePreviewItem
  },
  mixins: [
    TouchMixin,
    BindEventMixin(function (bind) {
      bind(window, 'resize', this.resize, true);
      bind(window, 'orientationchange', this.resize, true);
    }),
  ],

  props: {
    value: Boolean,
    className: null,
    closeable: Boolean,
    asyncClose: Boolean,
    showIndicators: Boolean,
    images: {
      type: Array,
      default: () => [],
    },
    loop: {
      type: Boolean,
      default: true,
    },
    overlay: {
      type: Boolean,
      default: true,
    },
    minZoom: {
      type: [Number, String],
      default: 1 / 3,
    },
    maxZoom: {
      type: [Number, String],
      default: 3,
    },
    showIndex: {
      type: Boolean,
      default: true,
    },
    swipeDuration: {
      type: [Number, String],
      default: 500,
    },
    startPosition: {
      type: [Number, String],
      default: 0,
    },
    overlayClass: {
      type: String,
      default: "zmbl-image-preview__overlay",
    },
    closeIcon: {
      type: String,
      default: 'clear',
    },
    closeOnPopstate: {
      type: Boolean,
      default: true,
    },
    closeIconPosition: {
      type: String,
      default: 'top-right',
    },
  },

  data() {
    return {
      active: 0,
      rootWidth: 0,
      rootHeight: 0,
      doubleClickTimer: null,
    };
  },

  mounted() {
    this.resize();
  },

  watch: {
    startPosition: 'setActive',

    value(val) {
      if (val) {
        this.setActive(+this.startPosition);
        this.$nextTick(() => {
          this.resize();
          this.$refs.swipe.swipeTo(+this.startPosition, { immediate: true });
        });
      } else {
        this.$emit('close', {
          index: this.active,
          url: this.images[this.active],
        });
      }
    },
  },

  methods: {
    resize() {
      if (this.$el && this.$el.getBoundingClientRect) {
        const rect = this.$el.getBoundingClientRect();
        this.rootWidth = rect.width;
        this.rootHeight = rect.height;
      }
    },

    emitClose() {
      if (!this.asyncClose) {
        this.$emit('input', false);
      }
    },

    emitScale(args) {
      this.$emit('scale', args);
    },

    setActive(active) {
      if (active !== this.active) {
        this.active = active;
        this.$emit('change', active);
      }
    },

    onClosed() {
      this.$emit('closed');
    },

    // @exposed-api
    swipeTo(index, options) {
      if (this.$refs.swipe) {
        this.$refs.swipe.swipeTo(index, options);
      }
    },
  }
};
</script>