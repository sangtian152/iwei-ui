<template>
  <div
    v-show="$parent.swiping || id === $parent.currentActive"
    class="zmbl-tab-container-item">
    <slot></slot>
  </div>
</template>

<script>
/**
 * zmbl-tab-container-item
 * @desc 搭配 tab-container 使用
 * @module components/tab-container-item
 *
 * @param {number|string} [id] - 该项的 id
 *
 * @example
 * <zmbl-tab-container v-model="selected">
 *   <zmbl-tab-container-item id="1"> 内容A </zmbl-tab-container-item>
 *   <zmbl-tab-container-item id="2"> 内容B </zmbl-tab-container-item>
 *   <zmbl-tab-container-item id="3"> 内容C </zmbl-tab-container-item>
 * </zmbl-tab-container>
 */
export default {
  name: 'zmbl-tab-container-item',

  props: ['id']
};
</script>

<style lang="scss">
  .zmbl {
    &-tab-container-item {
      flex-shrink: 0;
      width: 100%;
    }
  }
</style>
