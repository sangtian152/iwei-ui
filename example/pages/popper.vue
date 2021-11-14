<template>
  <div class="page-popper">
    <h1 class="page-title">popper</h1>
    <div class="page-popper-wrapper">
      <zmbl-popper
        placement="top"
        title="标题"
        width="200"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <zmbl-button type="primary" slot="reference">click 激活</zmbl-button>
      </zmbl-popper>
      <zmbl-popper
        placement="top-start"
        title="标题"
        width="200"
        trigger="focus"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <div class="popper-input" slot="reference">
          <input type="text" placeholder="focus 激活">
        </div>
      </zmbl-popper>
    </div>
  </div>
</template>

<style lang="scss">
  .page {
    &-popper-wrapper {
      text-align: center;
    }
    .popper-input {
      width: 180px;
      margin: 20px auto;
      input {
        width: 100%;
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }
    }
  }
</style>
