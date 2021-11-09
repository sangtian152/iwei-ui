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
    background-color: #fafafa;
    -webkit-overflow-scrolling: touch;
    user-select: none;
  }

  a {
    color: inherit;
  }

  .page-back {
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center;
    position: absolute;
    top: 12px;
    left: 10px;
    i {
      font-size: 24px;
      line-height: 40px;
    }
  }

  .page-title {
    font-size: 20px;
    margin: 20px auto;
    text-align: center;
    display: block;
    line-height: 1;
  }
  .page-part {
    margin-bottom: 15px;
  }
</style>
