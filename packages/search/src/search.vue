<template>
  <div class="zmbl-search">
    <div class="zmbl-searchbar">
      <div class="zmbl-searchbar-inner">
        <i class="zmblui zmblui-search"></i>
        <input
        ref="input"
        @click="visible = true"
        type="search"
        v-model="currentValue"
        :placeholder="placeholder"
        class="zmbl-searchbar-core">
      </div>
      <a
        class="zmbl-searchbar-cancel"
        @click="visible = false, currentValue = ''"
        v-show="visible"
        v-text="cancelText">
      </a>
    </div>
    <div class="zmbl-search-list" v-show="show || currentValue">
      <div class="zmbl-search-list-warp">
        <slot>
          <x-cell v-for="(item, index) in result" :key="index" :title="item"></x-cell>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import XCell from 'zmbl-ui/packages/cell/index.js';
if (process.env.NODE_ENV === 'component') {
  require('zmbl-ui/packages/cell/style.css');
}

/**
 * zmbl-search
 * @module components/search
 * @desc 搜索框
 * @param {string} value - 绑定值
 * @param {string} [cancel-text=取消] - 取消按钮文字
 * @param {string} [placeholder=取消] - 搜索框占位内容
 * @param {boolean} [autofocus=false] - 自动 focus
 * @param {boolean} [show=false] - 始终显示列表
 * @param {string[]} [result] - 结果列表
 * @param {slot} 结果列表
 *
 * @example
 * <zmbl-search :value.sync="value" :result.sync="result"></zmbl-search>
 * <zmbl-search :value.sync="value">
 *   <zmbl-cell v-for="item in result" :title="item"></zmbl-cell>
 * </zmbl-search>
 */
export default {
  name: 'zmbl-search',

  data() {
    return {
      visible: false,
      currentValue: this.value
    };
  },

  components: { XCell },

  watch: {
    currentValue(val) {
      this.$emit('input', val);
    },

    value(val) {
      this.currentValue = val;
    }
  },

  props: {
    value: String,
    autofocus: Boolean,
    show: Boolean,
    cancelText: {
      default: '取消'
    },
    placeholder: {
      default: '搜索'
    },
    result: Array
  },

  mounted() {
    this.autofocus && this.$refs.input.focus();
  }
};
</script>

<style lang="scss">
  @import "../../../src/style/var.scss";

  .zmbl {
    &-search {
      height: 100%;
      height: 100vh;
      overflow: hidden;
    }

    &-searchbar {
      position: relative;
      align-items: center;
      background-color: $color-grey;
      box-sizing: border-box;
      display: flex;
      padding: 8px 10px;
      z-index: 1;

      &-inner {
        align-items: center;
        background-color: $color-white;
        border-radius: 2px;
        display: flex;
        flex: 1;
        height: 28px;
        padding: 4px 6px;

        .zmblui-search {
          font-size: 12px;
          color: $color-grey;
        }
      }

      &-core {
        appearance: none;
        border: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        outline: 0;
      }

      &-cancel {
        color: $color-blue;
        margin-left: 10px;
        text-decoration: none;
      }
    }

    &-search-list {
      overflow: auto;
      padding-top: 44px;
      position: absolute;
      right: 0;
      left: 0;
      bottom:0;
      top: 0;
    }
  }
</style>
