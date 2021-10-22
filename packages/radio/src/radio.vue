<template>
  <div class="zmbl-radiolist" @change="$emit('change', currentValue)">
    <label class="zmbl-radiolist-title" v-text="title"></label>
    <x-cell v-for="option in options" :key="option.value || option">
      <label class="zmbl-radiolist-label" slot="title">
        <span
          :class="{'is-right': align === 'right'}"
          class="zmbl-radio">
          <input
            class="zmbl-radio-input"
            type="radio"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option">
          <span class="zmbl-radio-core"></span>
        </span>
        <span class="zmbl-radio-label" v-text="option.label || option"></span>
      </label>
    </x-cell>
  </div>
</template>

<script>
import XCell from 'zmbl-ui/packages/cell/index.js';
if (process.env.NODE_ENV === 'component') {
  require('zmbl-ui/packages/cell/style.css');
}
/**
 * zmbl-radio
 * @module components/radio
 * @desc 单选框列表，依赖 cell 组件
 *
 * @param {string[], object[]} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string} value - 选中值
 * @param {string} title - 标题
 * @param {string} [align=left] - checkbox 对齐位置，`left`, `right`
 *
 * @example
 * <zmbl-radio v-model="value" :options="['a', 'b', 'c']"></zmbl-radio>
 */
export default {
  name: 'zmbl-radio',

  props: {
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: String
  },

  data() {
    return {
      currentValue: this.value
    };
  },

  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      this.$emit('input', val);
    }
  },

  components: {
    XCell
  }
};
</script>

<style lang="scss">
  @import "../../../src/style/var.scss";

  .zmbl {
    &-radiolist {

      .zmbl-cell {
        padding: 0;
      }

      &-label {
        display: block;
        padding: 0 10px;
      }

      &-title {
        font-size: 12px;
        margin: 8px;
        display: block;
        color: $radio-title-color;
      }
    }

    &-radio {
      &.is-right {
        float: right;
      }

      &-label {
        vertical-align: middle;
        margin-left: 6px;
      }

      &-input {
        display: none;

        &:checked {
          + .zmbl-radio-core {
            background-color: $color-blue;
            border-color: $color-blue;

            &::after {
              background-color: $color-white;
              transform: scale(1);
            }
          }
        }

        &[disabled] + .zmbl-radio-core {
          background-color: $color-grey;
          border-color: #ccc;
        }
      }

      &-core {
        box-sizing: border-box;
        display: inline-block;
        background-color: $color-white;
        border-radius: 100%;
        border: 1px solid #ccc;
        position: relative;
        width: 20px;
        height: 20px;
        vertical-align: middle;

        &::after {
          content: " ";
          border-radius: 100%;
          position: absolute;
          top: 5px;
          left: 5px;
          width: 8px;
          height: 8px;
          transition: transform .2s;
          transform: scale(0);
        }
      }
    }
  }
</style>
