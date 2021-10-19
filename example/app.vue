<template>
  <div class="page">
    <router-link class="page-back" v-if="visible" :to="'/'">
      <i class="zmblui zmblui-back"></i>
    </router-link>
    <router-view></router-view>
    <!-- <zmbl-popper
        placement="top-start"
        title="标题"
        width="200"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <mt-button type="primary" slot="reference">click 激活</mt-button>
      </zmbl-popper> -->
  </div>
</template>

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

<script>
  import 'src/assets/font/iconfont.css';

  export default {
    computed: {
      visible() {
        return ['/', '/header', '/search'].indexOf(this.$route.path) < 0;
      }
    }
  };
</script>
