<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <div class="page-title">Tabbar</div>
      <div>
        <zmbl-cell class="page-part" title="当前选中" :value="selected" />
      </div>

      <zmbl-tab-container class="page-tabbar-container" v-model="selected">
        <zmbl-tab-container-item id="外卖">
          <zmbl-cell v-for="n in 10" :title="'餐厅 ' + n" :key="n" />
        </zmbl-tab-container-item>
        <zmbl-tab-container-item id="订单">
          <zmbl-cell v-for="n in 5" :title="'订单 ' + n" :key="n" />
        </zmbl-tab-container-item>
        <zmbl-tab-container-item id="发现">
          <zmbl-cell v-for="n in 7" :title="'发现 ' + n" :key="n" />
        </zmbl-tab-container-item>
        <zmbl-tab-container-item id="我的">
          <div class="page-part">
            <zmbl-cell v-for="n in 12" :title="'我的 ' + n" :key="n" />
          </div>
          <router-link to="/">
            <zmbl-button type="danger" size="large">退出</zmbl-button>
          </router-link>
        </zmbl-tab-container-item>
      </zmbl-tab-container>
    </div>

    <zmbl-tabbar v-model="selected" fixed>
      <zmbl-tab-item id="外卖">
        <img slot="icon" src="../assets/100x100.png">
        外卖
      </zmbl-tab-item>
      <zmbl-tab-item id="订单">
        <img slot="icon" src="../assets/100x100.png">
        订单
      </zmbl-tab-item>
      <zmbl-tab-item id="发现">
        <img slot="icon" src="../assets/100x100.png">
        发现
      </zmbl-tab-item>
      <zmbl-tab-item id="我的">
        <img slot="icon" src="../assets/100x100.png">
        我的
      </zmbl-tab-item>
    </zmbl-tabbar>
  </div>
</template>

<script>
export default {
  name: 'page-tabbar',
  data() {
    return {
      selected: '外卖'
    };
  }
};
</script>

<style lang="scss">
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }

  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
</style>
