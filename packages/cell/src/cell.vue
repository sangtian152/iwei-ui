<template>
  <a class="zmbl-cell" :href="href">
    <span class="zmbl-cell-mask" v-if="isLink"></span>
    <div class="zmbl-cell-left">
      <slot name="left"></slot>
    </div>
    <div class="zmbl-cell-wrapper">
      <div class="zmbl-cell-title">
        <slot name="icon">
          <i v-if="icon" class="zmblui" :class="'zmblui-' + icon"></i>
        </slot>
        <slot name="title">
          <span class="zmbl-cell-text" v-text="title"></span>
          <span v-if="label" class="zmbl-cell-label" v-text="label"></span>
        </slot>
      </div>
      <div class="zmbl-cell-value" :class="{ 'is-link' : isLink }">
        <slot>
          <span v-text="value"></span>
        </slot>
      </div>
      <i v-if="isLink" class="zmbl-cell-allow-right"></i>
    </div>
    <div class="zmbl-cell-right">
      <slot name="right"></slot>
    </div>
  </a>
</template>

<script>
if (process.env.NODE_ENV === 'component') {
  require('iwei-ui/packages/font/style.css');
}

/**
 * zmbl-cell
 * @module components/cell
 * @desc 单元格
 * @param {string|Object} [to] - 跳转链接，使用 vue-router 的情况下 to 会传递给 router.push，否则作为 a 标签的 href 属性处理
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .zmblui-xxx）
 * @param {string} [title] - 标题
 * @param {string} [label] - 备注信息
 * @param {boolean} [is-link=false] - 可点击的链接
 * @param {string} [value] - 右侧显示文字
 * @param {slot} - 同 value, 会覆盖 value 属性
 * @param {slot} [title] - 同 title, 会覆盖 title 属性
 * @param {slot} [icon] - 同 icon, 会覆盖 icon 属性，例如可以传入图片
 *
 * @example
 * <zmbl-cell title="标题文字" icon="back" is-link value="描述文字"></zmbl-cell>
 * <zmbl-cell title="标题文字" icon="back">
 *   <div slot="value">描述文字啊哈</div>
 * </zmbl-cell>
 */
export default {
  name: 'zmbl-cell',

  props: {
    to: [String, Object],
    icon: String,
    title: String,
    label: String,
    isLink: Boolean,
    value: {}
  },

  computed: {
    href() {
      if (this.to && !this.added && this.$router) {
        const resolved = this.$router.match(this.to);
        if (!resolved.matched.length) return this.to;

        this.$nextTick(() => {
          this.added = true;
          this.$el.addEventListener('click', this.handleClick);
        });
        return resolved.fullPath || resolved.path;
      }
      return this.to;
    }
  },

  methods: {
    handleClick($event) {
      $event.preventDefault();
      this.$router.push(this.href);
    }
  }
};
</script>

<style lang="scss">
  @import "~src/style/var.scss";

  .zmbl {
    &-cell {
      background-color: $color-white;
      box-sizing: border-box;
      color: inherit;
      min-height: 48px;
      display: block;
      overflow: hidden;
      position: relative;
      text-decoration: none;

      &:first-child {
        .zmbl-cell-wrapper {
          background-origin: border-box;
        }
      }

      &:last-child {
        background-image: linear-gradient(0deg, $color-grey, $color-grey 50%, transparent 50%);
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: bottom;
      }

      &-wrapper {
        background-image:linear-gradient(180deg, $color-grey, $color-grey 50%, transparent 50%);
        background-size: 120% 1px;
        background-repeat: no-repeat;
        background-position: top left;
        background-origin: content-box;
        align-items: center;
        box-sizing: border-box;
        display: flex;
        font-size: 16px;
        line-height: 1;
        min-height: inherit;
        overflow: hidden;
        padding: 0 10px;
        width: 100%;
      }

      &-mask {
        &::after {
          background-color: #000;
          content: " ";
          opacity: 0;
          position: absolute;
          top: 0;
        }

        &:active::after {
          opacity: .1;
        }
      }

      &-text {
        vertical-align: middle;
      }

      &-label {
        color: #888;
        display: block;
        font-size: 12px;
        margin-top: 6px;
      }

      img {
        vertical-align: middle;
      }

      &-title {
        flex: 1;
      }

      &-value {
        color: $cell-value-color;
        display: flex;
        align-items: center;

        &.is-link {
          margin-right: 24px;
        }
      }

      &-left {
        position: absolute;
        height: 100%;
        left: 0;
        transform: translate3d(-100%, 0, 0);
      }

      &-right {
        position: absolute;
        height: 100%;
        right: 0;
        top: 0;
        transform: translate3d(100%, 0, 0);
      }

      &-allow-right::after {
        border: solid 2px $border-color;
        border-bottom-width: 0;
        border-left-width: 0;
        content: " ";
        position: absolute;
        top: 50%;
        right: 20px;
        width: 5px;
        height: 5px;
        transform: translateY(-50%) rotate(45deg);
      }
    }
  }
</style>
