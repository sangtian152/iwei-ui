<template>
  <label class="zmbl-switch">
    <input class="zmbl-switch-input" :disabled="disabled" @change="$emit('change', currentValue)" type="checkbox" v-model="currentValue">
    <span class="zmbl-switch-core"></span>
    <div class="zmbl-switch-label"><slot></slot></div>
  </label>
</template>

<script>
/**
 * mt-switch
 * @module components/switch
 * @desc 切换按钮
 * @param {boolean} [value] - 绑定值，支持双向绑定
 * @param {slot} - 显示内容
 *
 * @example
 * <mt-switch v-model="value"></mt-switch>
 */
export default {
  name: 'mt-switch',

  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
};
</script>

<style lang="scss">
  @import "../../../src/style/var.scss";

  .zmbl {
    &-switch {
      display: flex;
      align-items: center;
      position: relative;

      * {
        pointer-events: none;
      }

      &-label {
        margin-left: 10px;
        display: inline-block;

        &:empty {
          margin-left: 0;
        }
      }

      &-core {
        display: inline-block;
        position: relative;
        height: 32px;
        width: 52px;
        border: 1px solid $color-grey;
        border-radius: 16px;
        box-sizing: border-box;
        background: $color-grey;

        &::after, &::before {
          content: " ";
          position: absolute;
          top: 0;
          left: 0;
          transition:transform .3s;
          border-radius: 15px;
        }

        &::after {
          width: 30px;
          height: 30px;
          background-color: $color-white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
        }

        &::before {
          width: 50px;
          height: 30px;
          background-color: #fdfdfd;
        }
      }

      &-input {
        display: none;

        &:checked {
          + .zmbl-switch-core {
            border-color: $color-blue;
            background-color: $color-blue;

            &::before {
              transform: scale(0);
            }

            &::after {
              transform: translateX(20px);
            }
          }
        }
      }
    }
  }
</style>
