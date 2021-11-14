<template>
  <div class="page">
    <router-view></router-view>
  </div>
</template>
<script>
import 'src/assets/font/iconfont.css';
export default {
  data(){
    return {}
  }
}
</script>

<style lang="scss">
  @import '~example/assets/styles/reset.css';
  html, body {
    height: 100%;
    -webkit-overflow-scrolling: touch;
    user-select: none;
  }

  a {
    color: inherit;
  }
  .page {
    height: 100%;
    background-color: #f5f5f5;
  }
</style>
