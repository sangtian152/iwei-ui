<template>
  <div class="page-range">
    <h1 class="page-title">Range</h1>
    <p class="page-range-header">基本功能</p>
    <zmbl-cell title="默认" :label="'value:' + value1">
      <zmbl-range v-model="value1"></zmbl-range>
    </zmbl-cell>
    <zmbl-cell title="左右文字" :label="'value:' + value3">
      <zmbl-range v-model="value3">
        <div slot="start">{{ 0 }}</div>
        <div slot="end">{{ 100 }}</div>
      </zmbl-range>
    </zmbl-cell>
    <p class="page-range-header">自定义</p>
    <zmbl-cell title="定义步长" :label="'value:' + value4">
      <zmbl-range v-model="value4" :step="10"></zmbl-range>
    </zmbl-cell>
    <zmbl-cell title="定义区间" :label="'value:' + value5">
      <zmbl-range v-model="value5" :min="10" :max="90"></zmbl-range>
    </zmbl-cell>
    <zmbl-cell title="禁用" :label="'value:' + value7">
      <zmbl-range v-model="value7" disabled></zmbl-range>
    </zmbl-cell>
    <!-- 
    <p class="page-range-header">场景举例</p>
    <zmbl-cell v-for="(item, index) in cells3" :title="item.title" :key="item.value + index" :label="'value:' + item.value">
      <zmbl-range v-model="item.value" :min="item.min || 0" :max="item.max || 100" :step="item.step || 1">
        <div slot="start" v-if="item.start" :style="{ 'font-size': item.start + 'px' }">{{ item.start }}</div>
        <div slot="end" v-if="item.end" :style="{ 'font-size': item.end + 'px' }">{{ item.end }}</div>
      </zmbl-range>
    </zmbl-cell> -->
  </div>
</template>

<style lang="scss">
  .page {
    &-range {
      .zmbl-range {
        width: 100%;
      }

      .zmbl-cell-value {
        flex: 2.5;
        position: relative;
      }

      &-header {
        margin-bottom: 8px;
        padding-left: 15px;

        &:not(:first-of-type) {
          margin-top: 28px;
        }
      }

      &-desc {
        padding: 5px 0 5px 5%;
      }
    }
  }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        value1: 0,
        value2: 20,
        value3: 0,
        value4: 0,
        value5: 10,
        value6: 0,
        value7: 40,
        value8: 14,
        cells1: null,
        cells2: null,
        cells3: null
      };
    },

    created() {
      this.cells1 = [{
        title: '默认',
        value: this.value1
      }, {
        title: '预设 value',
        value: this.value2
      }, {
        title: '左右文字',
        value: this.value3,
        start: '0',
        end: '100'
      }];
      this.cells2 = [{
        title: '定义步长',
        value: this.value4,
        step: 10
      }, {
        title: '定义区间',
        value: this.value5,
        start: '10',
        end: '90',
        min: 10,
        max: 90
      }, {
        title: '定义线宽',
        value: this.value6,
        barHeight: 5
      }, {
        title: '置为无效',
        value: this.value7,
        disabled: true
      }];
      this.cells3 = [{
        title: '字体大小',
        value: this.value8,
        start: '14',
        end: '22',
        min: 14,
        max: 22,
        step: 2
      }];
    }
  };
</script>