<template>
  <transition name="zmbl-indicator">
    <div class="zmbl-indicator" v-show="visible">
      <div class="zmbl-indicator-wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
        <spinner class="zmbl-indicator-spin" :type="convertedSpinnerType" :size="32"></spinner>
        <span class="zmbl-indicator-text" v-show="text">{{ text }}</span>
      </div>
      <div class="zmbl-indicator-mask" @touchmove.stop.prevent></div>
    </div>
  </transition>
</template>

<style lang="scss">
.zmbl {
  &-indicator {
    transition: opacity .2s linear;

    &-wrapper {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      box-sizing: border-box;
      text-align: center;
      z-index: 3000;
    }

    &-text {
      display: block;
      color: #fff;
      text-align: center;
      margin-top: 10px;
      font-size: 16px;
    }

    &-spin {
      display: inline-block;
      text-align: center;
    }

    &-mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      background: transparent;
      z-index: 3000;
    }
  }
}

.zmbl-indicator-enter,
.zmbl-indicator-leave-active {
  opacity: 0;
}
</style>

<script type="text/babel">
  import Spinner from 'iwei-ui/packages/spinner/index.js';
  if (process.env.NODE_ENV === 'component') {
    require('iwei-ui/packages/spinner/style.css');
  }

  export default {
    data() {
      return {
        visible: false
      };
    },

    components: {
      Spinner
    },

    computed: {
      convertedSpinnerType() {
        switch (this.spinnerType) {
          case 'double-bounce':
            return 1;
          case 'triple-bounce':
            return 2;
          case 'fading-circle':
            return 3;
          default:
            return 0;
        }
      }
    },

    props: {
      text: String,
      spinnerType: {
        type: String,
        default: 'snake'
      }
    }
  };
</script>
