<template>
<div class="app-wrapper">
  <navbar />
  <div class="app-container">
    <sidebar class="sidebar-container" />
    <div class="doc-container">
      <app-main />
      <div class="mobile">
        <iframe :src="iframeSrc" frameborder="0" style="width: 100%; height: 100%"></iframe>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { AppMain, Navbar, Sidebar } from './components'
export default {
  components: {
    AppMain,
    Navbar,
    Sidebar
  },
  data(){
    return {}
  },
  computed:{
    iframeSrc(){
      const { meta, path } = this.$route
      let route = meta && meta.demo ? meta.demo : path
      return `/demo.html/#${route}`
    }
  },
  created(){
    console.log(this.$route.path, 15)
  },
  watch:{
    iframeSrc(src){
      console.log(src)
    }
  }
}
</script>
<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  .navbar {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .app-container {
    display: flex;
    height: 100%;
    padding-top: 60px;
    overflow: hidden;
  }
  .sidebar-container {
    overflow: auto;
  }
  .doc-container {
    flex: 1;
    display: flex;
    padding: 20px;
  }
  .app-main {
    flex: 1;
    overflow: auto;
    border-radius: 10px;
  }
}
.mobile {
  width: 330px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-left: 20px;
  overflow: hidden;
}
</style>