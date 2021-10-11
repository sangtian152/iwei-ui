<template>
  <a class="zmbl-tab-item"
    @click="$parent.$emit('input', id)"
    :class="{ 'is-selected': $parent.value === id }">
    <div class="zmbl-tab-item-icon"><slot name="icon"></slot></div>
    <div class="zmbl-tab-item-label"><slot></slot></div>
  </a>
</template>

<script>
/**
 * mt-tab-item
 * @module components/tab-item
 * @desc 搭配 tabbar 或 navbar 使用
 * @param {*} id - 选中后的返回值，任意类型
 * @param {slot} [icon] - icon 图标
 * @param {slot} - 文字
 *
 * @example
 * <mt-tab-item>
 *   <img slot="icon" src="http://placehold.it/100x100">
 *   订单
 * </mt-tab-item>
 */
export default {
  name: 'mt-tab-item',

  props: ['id']
};
</script>

<style lang="scss">
  @import "../../../src/style/var.scss";

  .zmbl {
    &-tab-item {
      display: block;
      padding: 7px 0;
      flex: 1;
      text-decoration: none;

      &-icon {
        width: 24px;
        height: 24px;
        margin: 0 auto 5px;

        &:empty {
          display: none;
        }

        & > * {
          display: block;
          width: 100%;
        }
      }

      &-label {
        color: inherit;
        font-size: $tab-item-font-size;
        line-height: 1;
      }
    }
  }
</style>
