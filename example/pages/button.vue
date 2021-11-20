<template>
  <div class="page-button">
    <h1 class="page-title">Button</h1>

    <p>基础按钮</p>
    <div class="page-button-group">
      <zmbl-button>default</zmbl-button>
      <zmbl-button type="primary">primary</zmbl-button>
      <zmbl-button type="danger">danger</zmbl-button>
    </div>
    <p>幽灵按钮</p>
    <div class="page-button-group">
      <zmbl-button plain>default</zmbl-button>
      <zmbl-button plain type="primary">primary</zmbl-button>
      <zmbl-button plain type="danger">danger</zmbl-button>
    </div>
    <p>不同尺寸</p>
    <div class="page-button-group">
      <zmbl-button size="small">small</zmbl-button>
      <zmbl-button size="normal" type="primary">normal</zmbl-button>
      <zmbl-button size="large" type="danger">large</zmbl-button>
    </div>
    <p>禁用状态</p>
    <div class="page-button-group">
      <zmbl-button disabled size="large" type="primary">primary</zmbl-button>
    </div>

    
    <p>带图标</p>
    <div class="page-button-group">
      <zmbl-button icon="back">
        带自定义图标
      </zmbl-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'button'
};
</script>

<style lang="scss">
    .page-button {
      padding: 0 15px 15px;

      &-group {
        margin-bottom: 15px;

        & > * {
          margin-bottom: 15px;
        }
      }
    }
</style>
