<template>
  <div class="page-badge">
    <div class="page-title">Badge</div>

    <div class="page-badge-container">
      <div class="page-part">
        <zmbl-badge type="primary" size="large">30</zmbl-badge>
        <zmbl-badge type="error" size="large">10</zmbl-badge>
        <zmbl-badge type="success" size="large">10</zmbl-badge>
        <zmbl-badge type="warning" size="large">10</zmbl-badge>
      </div>

      <div class="page-part">
        <zmbl-badge type="primary">30</zmbl-badge>
        <zmbl-badge type="error">10</zmbl-badge>
        <zmbl-badge type="success">10</zmbl-badge>
        <zmbl-badge type="warning">10</zmbl-badge>
      </div>

      <div class="page-part">
        <zmbl-badge type="primary" size="small">30</zmbl-badge>
        <zmbl-badge type="error" size="small">10</zmbl-badge>
        <zmbl-badge type="success" size="small">10</zmbl-badge>
        <zmbl-badge type="warning" size="small">10</zmbl-badge>
      </div>

      <div class="page-part">
        <zmbl-badge size="small" color="#888">自定义颜色</zmbl-badge>
      </div>
    </div>

    <div class="page-part">
      <zmbl-cell title="徽章">
        <span style="margin-right: 5px;">未读消息</span>
        <zmbl-badge type="error" size="small">10</zmbl-badge>
      </zmbl-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-badge'
};
</script>

<style lang="scss">
  .page-badge-container {
    padding: 0 10px;
  }
</style>
