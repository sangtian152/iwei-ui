<template>
  <div class="page-dialog">
    <h1 class="page-title">Dialog</h1>
    <div class="button">
      <zmbl-button type="primary" @click="dialogVisible = true">打开dialog</zmbl-button>
    </div>

    <zmbl-dialog
      v-model="dialogVisible"
      title="提示"
      @on-click="handleDialog">
      <div class="dialog-content">
        <span>这是一段信息</span>
      </div>
    </zmbl-dialog>
  </div>
</template>

<script>
export default {
  name: 'dialog',
  data(){
    return {
      dialogVisible: false
    }
  },
  methods:{
    handleDialog(){
      this.dialogVisible = false
    }
  }
};
</script>

<style lang="scss">
    .page-dialog {
      padding: 0 15px 15px;

      .button {
        text-align: center;
      }
    }
</style>
