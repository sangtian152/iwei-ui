<template>
  <x-cell
    class="zmbl-field"
    :title="label"
    v-clickoutside="doCloseActive"
    :class="[{
      'is-textarea': type === 'textarea',
      'is-nolabel': !label
    }]">
    <textarea
      @change="$emit('change', currentValue)"
      ref="textarea"
      class="zmbl-field-core"
      :placeholder="placeholder"
      v-if="type === 'textarea'"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly"
      v-model="currentValue">
    </textarea>
    <input
      @change="$emit('change', currentValue)"
      ref="input"
      class="zmbl-field-core"
      :placeholder="placeholder"
      :number="type === 'number'"
      v-else
      :type="type"
      @focus="active = true"
      :disabled="disabled"
      :readonly="readonly"
      :value="currentValue"
      @input="handleInput">
    <div
      @click="handleClear"
      class="zmbl-field-clear"
      v-if="!disableClear"
      v-show="currentValue && type !== 'textarea' && active">
      <i class="zmblui zmblui-field-error"></i>
    </div>
    <span class="zmbl-field-state" v-if="state" :class="['is-' + state]">
      <i class="zmblui" :class="['zmblui-field-' + state]"></i>
    </span>
    <div class="zmbl-field-other">
      <slot></slot>
    </div>
  </x-cell>
</template>

<script>
import XCell from 'iwei-ui/packages/cell/index.js';
import Clickoutside from 'iwei-ui/src/utils/clickoutside';
if (process.env.NODE_ENV === 'component') {
  require('iwei-ui/packages/cell/style.css');
}

/**
 * zmbl-field
 * @desc 编辑器，依赖 cell
 * @module components/field
 *
 * @param {string} [type=text] - field 类型，接受 text, textarea 等
 * @param {string} [label] - 标签
 * @param {string} [rows] - textarea 的 rows
 * @param {string} [placeholder] - placeholder
 * @param {string} [disabled] - disabled
 * @param {string} [readonly] - readonly
 * @param {string} [state] - 表单校验状态样式，接受 error, warning, success
 *
 * @example
 * <zmbl-field v-model="value" label="用户名"></zmbl-field>
 * <zmbl-field v-model="value" label="密码" placeholder="请输入密码"></zmbl-field>
 * <zmbl-field v-model="value" label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></zmbl-field>
 * <zmbl-field v-model="value" label="邮箱" placeholder="成功状态" state="success"></zmbl-field>
 */
export default {
  name: 'zmbl-field',

  data() {
    return {
      active: false,
      currentValue: this.value
    };
  },

  directives: {
    Clickoutside
  },

  props: {
    type: {
      type: String,
      default: 'text'
    },
    rows: String,
    label: String,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    disableClear: Boolean,
    state: {
      type: String,
      default: 'default'
    },
    value: {},
    attr: Object
  },

  components: { XCell },

  methods: {
    doCloseActive() {
      this.active = false;
    },

    handleInput(evt) {
      this.currentValue = evt.target.value;
    },

    handleClear() {
      if (this.disabled || this.readonly) return;
      this.currentValue = '';
    }
  },

  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      this.$emit('input', val);
    },

    attr: {
      immediate: true,
      handler(attrs) {
        this.$nextTick(() => {
          const target = [this.$refs.input, this.$refs.textarea];
          target.forEach(el => {
            if (!el || !attrs) return;
            Object.keys(attrs).map(name => el.setAttribute(name, attrs[name]));
          });
        });
      }
    }
  }
};
</script>

<style lang="scss">
  @import "../../../src/style/var.scss";

  .zmbl {
    &-field {
      display: flex;

      &.is-textarea {
        align-items: inherit;

        .zmbl-cell-title {
          padding: 10px 0;
        }

        .zmbl-cell-value {
          padding: 5px 0;
        }
      }

      .zmbl-cell-title {
        width: 105px;
        flex: none;
      }

      .zmbl-cell-value {
        flex: 1;
        color: inherit;
        display: flex;
      }

      &-core {
        appearance: none;
        border-radius: 0;
        border: 0;
        flex: 1;
        outline: 0;
        line-height: 1.6;
        font-size: inherit;
        width: 100%;
      }

      &-clear {
        opacity: .2;
      }

      &-state {
        color: inherit;
        margin-left: 20px;

        .zmblui {
          font-size: 20px;
        }

        &.is-error {
          color: $error-color;
        }

        &.is-warning {
          color: $warning-color;
        }

        &.is-success {
          color: $success-color;
        }

        &.is-default {
          margin-left: 0;
        }
      }

      &-other {
        position: relative;
        top: 0;
        right: 0;
      }

      &.is-nolabel {
        .zmbl-cell-title {
          display: none;
        }
      }
    }
  }
</style>
