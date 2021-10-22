<template>
  <div class="zmbl-dialog-wrapper">
    <transition name="dialog-bounce">
      <div class="zmbl-dialog" v-show="value">
        <div class="zmbl-dialog-header" v-if="!!title">
          <div class="zmbl-dialog-title">{{ title }}</div>
        </div>
        <div class="zmbl-dialog-content">
          <div class="zmbl-dialog-message">
            <slot></slot>
          </div>
        </div>
        <div class="zmbl-dialog-btns">
          <button :class="[ cancelButtonClasses ]" v-show="showCancelButton" @click="handleAction('cancel')">{{ cancelButtonText }}</button>
          <button :class="[ confirmButtonClasses ]" v-show="showConfirmButton" @click="handleAction('confirm')">{{ confirmButtonText }}</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

  import Popup from 'zmbl-ui/src/mixins/popup';
  export default {
    name: 'zmbl-dialog',
    mixins: [ Popup ],

    props: {
      modal: {
        default: true
      },
      lockScroll: {
        type: Boolean,
        default: false
      },
      closeOnClickModal: {
        default: true
      },
      closeOnPressEscape: {
        default: true
      },
      title: String,
      showConfirmButton: {
        type: Boolean,
        default: true
      },
      showCancelButton: {
        type: Boolean,
        default: true
      },
      confirmButtonText: {
        type: String,
        default: '确定'
      },
      cancelButtonText: {
        type: String,
        default: '取消'
      },
      confirmButtonClass: String,
      confirmButtonDisabled: Boolean,
      cancelButtonClass: String,
      callback: Function,
    },

    computed: {
      confirmButtonClasses() {
        let classes = 'zmbl-dialog-btn zmbl-dialog-confirm ' + this.confirmButtonClass;
        return classes;
      },
      cancelButtonClasses() {
        let classes = 'zmbl-dialog-btn zmbl-dialog-cancel ' + this.cancelButtonClass;
        return classes;
      }
    },

    methods: {
      onClose(){
        this.handleClose()
        this.$emit('on-close');
      },
      onOpen(){
        this.$emit('on-open');
      },
      handleAction(action) {
        if(action === 'cancel') {
          this.handleClose();
        }
        this.$emit('on-click', action);
      },
      handleClose(){
        this.currentValue = false;
        this.$emit('input', false)
      },
    },

    watch: {
      currentValue(val) {
        this.$emit('input', val);
      },

      value(val) {
        this.currentValue = val;
      }
    },

    data() {
      return {
        currentValue: false,
      };
    },
    mounted(){
      if(this.value) {
        this.currentValue = true;
        this.open()
      }
    },
  };
</script>
<style lang="scss">
  .zmbl {
    &-dialog {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      background-color: #fff;
      width: 85%;
      border-radius: 3px;
      font-size: 16px;
      -webkit-user-select: none;
      overflow: hidden;
      backface-visibility: hidden;
      transition: .2s;

      &-header {
        padding: 15px 0 0;
      }

      &-content {
        padding: 10px 20px 15px;
        border-bottom: 1px solid #ddd;
        min-height: 36px;
        position: relative;
      }

      &-input {
        padding-top: 15px;
        & input {
          border: 1px solid #dedede;
          border-radius: 5px;
          padding: 4px 5px;
          width: 100%;
          appearance: none;
          outline: none;
        }
        & input.invalid {
          border-color: #ff4949;
          &:focus {
            border-color: #ff4949;
          }
        }
      }

      &-errormsg {
        color: red;
        font-size: 12px;
        min-height: 18px;
        margin-top: 2px;
      }

      &-title {
        text-align: center;
        padding-left: 0;
        margin-bottom: 0;
        font-size: 16px;
        font-weight: bold;
        color: #333;
      }

      &-message {
        color: #999;
        margin: 0;
        text-align: center;
        line-height: 36px;
      }

      &-btns {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        height: 40px;
        line-height: 40px;
      }

      &-btn {
        line-height: 35px;
        display: block;
        background-color: #fff;
        flex: 1;
        margin: 0;
        border: 0;

        &:focus {
          outline: none;
        }

        &:active {
          background-color: #fff;
        }
      }

      &-cancel {
        width: 50%;
        border-right: 1px solid #ddd;
        &:active {
          color: #000;
        }
      }

      &-confirm {
        color: #26a2ff;
        width: 50%;
        &:active {
         color: #26a2ff;
        }
      }
    }
  }

  .dialog-bounce-enter {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.7);
  }
  .dialog-bounce-leave-active {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.9);
  }
</style>
