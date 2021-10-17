<template>
  <div
    class="zmbl-image"
    :class="{'zmbl-image--round': round}"
    :style="style"
    @click="onClick"
  >
    <img
      :src="src"
      :alt="alt"
      class="zmbl-image__img"
      :style="{'object-fit': fit}"
      @load="onLoad"
      @error="onError"
    />
    <div class="zmbl-image__loading"
      v-if="loading && showLoading && inBrowser">
      <slot name="loading"></slot>
    </div>
    <div class="zmbl-image__error"
      v-if="error && showError">
      <slot name="error"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
import { isDefined } from 'zmbl-ui/src/utils/types';
import { addUnit, inBrowser } from 'zmbl-ui/src/utils/util';
export default {
  name: 'mt-image',
  props: {
    src: String,
    fit: String,
    alt: String,
    round: Boolean,
    width: [Number, String],
    height: [Number, String],
    radius: [Number, String],
    lazyLoad: Boolean,
    iconPrefix: String,
    showError: {
      type: Boolean,
      default: true,
    },
    showLoading: {
      type: Boolean,
      default: true,
    }
  },

  data() {
    return {
      loading: true,
      error: false,
      inBrowser: inBrowser
    };
  },

  watch: {
    src() {
      this.loading = true;
      this.error = false;
    },
  },

  computed: {
    style() {
      const style = {};

      if (isDefined(this.width)) {
        style.width = addUnit(this.width);
      }

      if (isDefined(this.height)) {
        style.height = addUnit(this.height);
      }

      if (isDefined(this.radius)) {
        style.overflow = 'hidden';
        style.borderRadius = addUnit(this.radius);
      }

      return style;
    },
  },

  created() {
    const { $Lazyload } = this;

    if ($Lazyload && inBrowser) {
      $Lazyload.$on('loaded', this.onLazyLoaded);
      $Lazyload.$on('error', this.onLazyLoadError);
    }
  },

  beforeDestroy() {
    const { $Lazyload } = this;

    if ($Lazyload) {
      $Lazyload.$off('loaded', this.onLazyLoaded);
      $Lazyload.$off('error', this.onLazyLoadError);
    }
  },

  methods: {
    onLoad(event) {
      this.loading = false;
      this.$emit('load', event);
    },

    onLazyLoaded({ el }) {
      if (el === this.$refs.image && this.loading) {
        this.onLoad();
      }
    },

    onLazyLoadError({ el }) {
      if (el === this.$refs.image && !this.error) {
        this.onError();
      }
    },

    onError(event) {
      this.error = true;
      this.loading = false;
      this.$emit('error', event);
    },

    onClick(event) {
      this.$emit('click', event);
    }
  },
};
</script>
<style lang="scss">
@import "../../../src/style/var.scss";
.zmbl-image {
  position: relative;
  display: inline-block;

  &--round {
    overflow: hidden;
    border-radius: 50%;

    img {
      border-radius: inherit;
    }
  }

  &__img,
  &__error,
  &__loading {
    display: block;
    width: 100%;
    height: 100%;
  }

  &__error,
  &__loading {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: $image-placeholder-text-color;
    font-size: $image-placeholder-font-size;
    background-color: $image-placeholder-background-color;
  }

  &__loading-icon {
    color: $image-loading-icon-color;
    font-size: $image-loading-icon-size;
  }

  &__error-icon {
    color: $image-error-icon-color;
    font-size: $image-error-icon-size;
  }
}
</style>

