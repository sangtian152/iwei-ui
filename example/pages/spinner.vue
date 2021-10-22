<template>
  <div class="page-spinner">
    <div class="page-title">Spinner</div>

    <zmbl-cell title="snake">
      <zmbl-spinner color="#26a2ff" type="snake"></zmbl-spinner>
    </zmbl-cell>

    <zmbl-cell title="double-bounce">
      <zmbl-spinner color="#26a2ff" type="double-bounce"></zmbl-spinner>
    </zmbl-cell>

    <zmbl-cell title="triple-bounce">
      <zmbl-spinner color="#26a2ff" type="triple-bounce"></zmbl-spinner>
    </zmbl-cell>

    <zmbl-cell title="fading-circle">
      <zmbl-spinner color="#26a2ff" type="fading-circle"></zmbl-spinner>
    </zmbl-cell>
  </div>
</template>

<script>
export default {
  name: 'page-spinner',

  data() {
    return {

    };
  }
};
</script>

<style lang="scss">
  .page {
    &-spinner {
      .zmbl-cell {
        min-height: 50px;
      }
    }
  }
</style>