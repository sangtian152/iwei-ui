<template>
  <div @change="$emit('change', currentValue)" class="zmbl-checklist" :class="{ 'is-limit': max <= currentValue.length }">
    <label class="zmbl-checklist-title" v-text="title"></label>
    <x-cell v-for="option in options" :key="option.value || option">
      <label class="zmbl-checklist-label" slot="title">
        <span
          :class="{'is-right': align === 'right'}"
          class="zmbl-checkbox">
          <input
            class="zmbl-checkbox-input"
            type="checkbox"
            :name="name"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option">
          <span class="zmbl-checkbox-core"></span>
        </span>
        <span class="zmbl-checkbox-label" v-text="option.label || option"></span>
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
 * mt-checklist
 * @module components/checklist
 * @desc 复选框列表，依赖 cell 组件
 *
 * @param {(string[]|object[])} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string[]} value - 选中值的数组
 * @param {string} title - 标题
 * @param {number} [max] - 最多可选的个数
 * @param {string} [align=left] - checkbox 对齐位置，`left`, `right`
 *
 *
 * @example
 * <mt-checklist :v-model="value" :options="['a', 'b', 'c']"></mt-checklist>
 */
export default {
  name: 'mt-checklist',

  props: {
    min: Number,
    max: Number,
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    name: String,
    value: Array
  },

  components: { XCell },

  data() {
    return {
      currentValue: this.value
    };
  },

  computed: {
    limit() {
      return this.max < this.currentValue.length;
    }
  },

  watch: {
    value(val) {
      this.currentValue = val;
      console.log(this.currentValue, 75)
    },

    currentValue(val) {
      if (this.limit) val.pop();
      this.$emit('input', val);
    }
  }
};
</script>

<style lang="scss">
  @import "~src/style/var.scss";

  .zmbl {
    &-checklist {

      .zmbl-cell {
        padding: 0;
      }

      &-label {
        display: block;
        padding: 0 10px;
      }

      &-title {
        color: $checklist-title-color;
        display: block;
        font-size: 12px;
        margin: 8px;
      }

      &.is-limit {
        .zmbl-checkbox-core:not(:checked) {
          background-color: $color-grey;
          border-color: $color-grey;
        }
      }
    }

    &-checkbox {
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
          + .zmbl-checkbox-core {
            background-color: $color-blue;
            border-color: $color-blue;

            &::after {
              border-color: $color-white;
              transform: rotate(45deg) scale(1);
            }
          }
        }

        &[disabled] + .zmbl-checkbox-core {
          background-color: $color-grey;
          border-color: #ccc;
        }
      }

      &-core {
        display: inline-block;
        background-color: $color-white;
        border-radius: 100%;
        border: 1px solid #ccc;
        position: relative;
        width: 20px;
        height: 20px;
        vertical-align: middle;

        &::after {
          border: 2px solid transparent;
          border-left: 0;
          border-top: 0;
          content: " ";
          position: absolute;
          top: 3px;
          left: 6px;
          width: 4px;
          height: 8px;
          transform: rotate(45deg) scale(0);
          transition: transform .2s;
        }
      }
    }
  }
</style>
