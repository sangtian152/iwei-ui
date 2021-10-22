<template>
  <div class="page-navbar">
    <div class="page-title">Navbar</div>
    <zmbl-navbar class="page-part" v-model="selected">
      <zmbl-tab-item id="1">选项一</zmbl-tab-item>
      <zmbl-tab-item id="2">选项二</zmbl-tab-item>
      <zmbl-tab-item id="3">选项三</zmbl-tab-item>
    </zmbl-navbar>

    <div>
      <zmbl-cell class="page-part" title="当前选中">{{ selected }}</zmbl-cell>
    </div>

    <zmbl-tab-container v-model="selected">
      <zmbl-tab-container-item id="1">
        <zmbl-cell v-for="n in 10" :key="n" :title="'内容 ' + n" />
      </zmbl-tab-container-item>
      <zmbl-tab-container-item id="2">
        <zmbl-cell v-for="n in 4" :key="n" :title="'测试 ' + n" />
      </zmbl-tab-container-item>
      <zmbl-tab-container-item id="3">
        <zmbl-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />
      </zmbl-tab-container-item>
    </zmbl-tab-container>
  </div>
</template>

<script>
export default {
  name: 'page-navbar',

  data() {
    return {
      selected: '1'
    };
  }
};
</script>
