<template>
  <div class="page-button">
    <h1 class="page-title">Button</h1>
    <div class="page-button-group">
      <zmbl-button size="large">default</zmbl-button>
      <zmbl-button size="large" type="primary">primary</zmbl-button>
      <zmbl-button size="large" type="danger">danger</zmbl-button>
    </div>

    <div class="page-button-group">
      <zmbl-button>default</zmbl-button>
      <zmbl-button type="primary">primary</zmbl-button>
      <zmbl-button type="danger">danger</zmbl-button>
    </div>

    <div class="page-button-group">
      <zmbl-button size="small">default</zmbl-button>
      <zmbl-button size="small" type="primary">primary</zmbl-button>
      <zmbl-button size="small" type="danger">danger</zmbl-button>
    </div>

    <div class="page-button-group">
      <zmbl-button disabled size="large">default</zmbl-button>
      <zmbl-button disabled size="large" type="primary">primary</zmbl-button>
      <zmbl-button disabled size="large" type="danger">danger</zmbl-button>
    </div>

    <div class="page-button-group">
      <zmbl-button plain size="large">default</zmbl-button>
      <zmbl-button plain size="large" type="primary">primary</zmbl-button>
      <zmbl-button plain size="large" type="danger">danger</zmbl-button>
    </div>

    <div class="page-button-group">
      <zmbl-button>
        <img src="../assets/100x100.png" height="20" width="20" slot="icon">
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
