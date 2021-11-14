<template>
  <transition name="actionsheet-float">
    <div v-show="currentValue" class="zmbl-actionsheet">
      <ul class="zmbl-actionsheet-list" :style="{ 'margin-bottom': cancelText ? '5px' : '0' }">
        <li v-for="( item, index ) in actions" :key="index" class="zmbl-actionsheet-listitem" @click.stop="itemClick(item, index)">{{ item.name || item }}</li>
      </ul>
      <a class="zmbl-actionsheet-button" @click.stop="handleClose" v-if="showCancel">{{ cancelText }}</a>
    </div>
  </transition>
</template>

<style lang="scss">
  .zmbl {
    &-actionsheet {
      position: fixed;
      background: #e0e0e0;
      width: 100%;
      text-align: center;
      bottom: 0;
      left: 50%;
      max-height: 100%;
      overflow-y: auto;
      transform: translate3d(-50%, 0, 0);
      backface-visibility: hidden;
      transition: transform .3s ease-out;

      &-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      &-listitem {
        border-bottom: solid 1px #e0e0e0;
      }

      &-listitem, &-button {
        display: block;
        width: 100%;
        height: 45px;
        line-height: 45px;
        font-size: 18px;
        color: #333;
        background-color: #fff;
        &:active {
           background-color: #f0f0f0;
        }
      }
    }
  }

  .actionsheet-float-enter,
  .actionsheet-float-leave-active {
    transform: translate3d(-50%, 100%, 0);
  }
</style>

<script type="text/babel">
  import Popup from 'zmbl-ui/src/mixins/popup';
  import 'zmbl-ui/src/style/popup.css';

  export default {
    name: 'zmbl-actionsheet',

    mixins: [Popup],

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
      showCancel: {
        type: Boolean,
        default: true
      },
      cancelText: {
        type: String,
        default: '取消'
      },

      actions: {
        type: Array,
        default: () => []
      }
    },

    data() {
      return {
        currentValue: false
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

    methods: {
      onOpen(){
        this.$emit('on-open');
      },
      itemClick(item, index) {
        if (item.method && typeof item.method === 'function') {
          item.method(item, index);
        }
        this.$emit('on-click', item)
        this.currentValue = false;
      },
      handleClose(){
        this.$emit('on-close')
        this.currentValue = false;
      },
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
