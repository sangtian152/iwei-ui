<template>
  <div class="sidebar">
    <div v-for="(route, index) in navs" :key="index" class="doc-nav_group">
      <div v-if="route.path" :key="route.path" class="doc-nav_item">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </div>
      <template v-else>
        <div class="page-title" v-text="route.title"></div>
        <div v-for="item in route.list" :key="item.path" class="doc-nav_item">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </div>
      </template>
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
  width: 220px;
  border: 1px solid #ddd;
  background: #fff;
  padding: 24px 0 32px;
  .page-title {
    font-weight: 700;
    margin: 20px auto;
    line-height: 1;
    padding-left: 30px;
  }
  .doc-nav_item {
    height: 44px;
    line-height: 44px;
    background: #fff;
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