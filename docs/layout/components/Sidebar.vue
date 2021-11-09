<template>
  <div class="sidebar">
    <div v-for="(group, index) in navs" :key="index" class="doc-nav_group">
      <div class="page-title" v-text="group.title"></div>
      <div v-for="item in group.list" :key="item.path" class="doc-nav_item">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import { navs } from 'docs/route';

  export default {
    data() {
      return {
        navs: []
      };
    },

    created() {
      this.navs = navs;
    },
    methods:{
      log(){
        console.log('log')
      }
    }
  };
</script>
<style lang="scss" scoped>
.sidebar {
  width: 200px;
  border: 1px solid #ddd;
  .page-title {
    font-size: 20px;
    margin: 20px auto;
    text-align: center;
    display: block;
    line-height: 1;
  }
  .doc-nav_item {
    height: 44px;
    line-height: 44px;
    a {
      color: #455a64;
      display: block;
      padding-left: 30px;
      &.router-link-active {
        color: #409EFF;
      }
    }
  }
}
</style>