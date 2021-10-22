<template>
  <header
    class="zmbl-header"
    :class="{ 'is-fixed': fixed }">
    <div class="zmbl-header-button is-left">
      <slot name="left"></slot>
    </div>
    <h1 class="zmbl-header-title" v-text="title"></h1>
    <div class="zmbl-header-button is-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
/**
 * zmbl-header
 * @module components/header
 * @desc 顶部导航
 * @param {boolean} [fixed=false] - 固定顶部
 * @param {string} [title] - 标题
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 *
 * @example
 * <zmbl-header title="我是标题" fixed>
 *   <zmbl-button slot="left" icon="back" @click="handleBack">返回</zmbl-button>
 *   <zmbl-button slot="right" icon="more"></zmbl-button>
 * </zmbl-header>
 */
export default {
  name: 'zmbl-header',

  props: {
    fixed: Boolean,
    title: String
  }
};
</script>

<style lang="scss">
  @import "../../../src/style/var.scss";

  .zmbl {
    &-header {
      align-items: center;
      background-color: $color-blue;
      box-sizing: border-box;
      color: $color-white;
      display: flex;
      font-size: 14px;
      height: $header-height;
      line-height: 1;
      padding: 0 10px;
      position: relative;
      text-align: center;
      white-space: nowrap;

      .zmbl-button {
        background-color: transparent;
        border: 0;
        box-shadow: none;
        color: inherit;
        display: inline-block;
        padding: 0;
        font-size: inherit;

        &::after {
          content: none;
        }
      }

      &-button {
        flex: .5;

        > a {
          color: inherit;
        }

        &.is-left {
          text-align: left;
        }

        &.is-right {
          text-align: right;
        }
      }

      &-title {
        overflow:hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        font-size: inherit;
        font-weight: normal;
        flex: 1;
      }

      &.is-fixed {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: $z-index-normal;
      }
    }
  }
</style>
