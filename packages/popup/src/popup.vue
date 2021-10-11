<template>
  <transition :name="currentTransition">
    <div v-show="currentValue" class="zmbl-popup" :class="[position ? 'zmbl-popup-' + position : '']">
      <slot></slot>
    </div>
  </transition>
</template>

<style lang="scss">
  .zmbl {
    &-popup {
      position: fixed;
      background: #fff;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      backface-visibility: hidden;
      transition: .2s ease-out;

      &-top {
        top: 0;
        right: auto;
        bottom: auto;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
      }

      &-right {
        top: 50%;
        right: 0;
        bottom: auto;
        left: auto;
        transform: translate3d(0, -50%, 0);
      }

      &-bottom {
        top: auto;
        right: auto;
        bottom: 0;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
      }

      &-left {
        top: 50%;
        right: auto;
        bottom: auto;
        left: 0;
        transform: translate3d(0, -50%, 0);
      }
    }
  }

  .popup-slide-top-enter,
  .popup-slide-top-leave-active {
    transform: translate3d(-50%, -100%, 0);
  }

  .popup-slide-right-enter,
  .popup-slide-right-leave-active {
    transform: translate3d(100%, -50%, 0);
  }

  .popup-slide-bottom-enter,
  .popup-slide-bottom-leave-active {
    transform: translate3d(-50%, 100%, 0);
  }

  .popup-slide-left-enter,
  .popup-slide-left-leave-active {
    transform: translate3d(-100%, -50%, 0);
  }

  .popup-fade-enter,
  .popup-fade-leave-active {
    opacity: 0;
  }
</style>

<script type="text/babel">
  import Popup from 'zmbl-ui/src/mixins/popup';
  import { CloseOnPopstateMixin } from 'zmbl-ui/src/mixins/close-on-popstate';
  import Vue from 'vue';
  if (!Vue.prototype.$isServer) {
    require('zmbl-ui/src/style/popup.css');
  }

  export default {
    name: 'mt-popup',

    mixins: [Popup, CloseOnPopstateMixin],

    props: {
      modal: {
        default: true
      },

      modalFade: {
        default: false
      },

      lockScroll: {
        default: false
      },

      closeOnClickModal: {
        default: true
      },

      popupTransition: {
        type: String,
        default: 'popup-slide'
      },

      position: {
        type: String,
        default: ''
      }
    },

    data() {
      return {
        currentValue: false,
        currentTransition: this.popupTransition
      };
    },

    watch: {
      currentValue(val) {
        this.$emit('input', val);
      },

      value(val) {
        this.currentValue = val;
      }
    },

    beforeMount() {
      if (this.popupTransition !== 'popup-fade') {
        this.currentTransition = `popup-slide-${ this.position }`;
      }
    },

    mounted() {
      if (this.value) {
        this.rendered = true;
        this.currentValue = true;
        this.open();
      }
    }
  };
</script>