<template>
  <div class="page-switch">
    <div class="page-title">Switch</div>
    <div class="page-part page-switch-padding">
      <zmbl-switch v-model="value1" @change="handleChange"></zmbl-switch>
    </div>

    <div class="page-part page-switch-padding">
      <zmbl-switch v-model="value4" @change="handleChange">开关</zmbl-switch>
    </div>

    <zmbl-cell :title="'选项 ' + value2">
      <zmbl-switch v-model="value2" @change="handleChange"></zmbl-switch>
    </zmbl-cell>
    <zmbl-cell :title="'选项 ' + value3">
      <zmbl-switch v-model="value3" @change="handleChange"></zmbl-switch>
    </zmbl-cell>
  </div>
</template>

<script>
export default {
  name: 'page-switch',

  data() {
    return {
      value1: false,
      value2: false,
      value3: true,
      value4: true
    };
  },

  methods: {
    handleChange(event) {
      console.log(event);
    }
  }
};
</script>

<style lang="scss">
  .page {
    &-switch {
      &-padding {
        padding: 0 10px;
      }
    }
  }
</style>
