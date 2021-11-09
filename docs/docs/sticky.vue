<template>
  <div class="page-stickey">
    <h1 class="page-title">Stickey</h1>
    <div style="height: 200px"></div>
    <zmbl-sticky :offset-top="10">
      <zmbl-button type="primary">Offset Top</zmbl-button>
    </zmbl-sticky>
    <div style="height: 400px"></div>
    <zmbl-sticky :offset-top="10">
      <zmbl-button type="danger">Offset Top</zmbl-button>
    </zmbl-sticky>
    <div style="height: 800px"></div>
  </div>
</template>