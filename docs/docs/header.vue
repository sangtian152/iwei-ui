<template>
  <div>
    <zmbl-header fixed title="固定在顶部"></zmbl-header>
    <div class="page-header-main">
      <div class="page-title">Header</div>
      <zmbl-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
        <router-link to="/" slot="left">
          <zmbl-button icon="back">返回</zmbl-button>
        </router-link>
        <zmbl-button icon="more" slot="right"></zmbl-button>
      </zmbl-header>

      <zmbl-header title="多个按钮">
        <router-link to="/" slot="left">
          <zmbl-button icon="back">返回</zmbl-button>
        </router-link>
        <zmbl-button @click="handleClose">关闭</zmbl-button>
        <zmbl-button icon="more" slot="right"></zmbl-button>
      </zmbl-header>

      <zmbl-header title="左侧仅文字">
        <router-link to="/" slot="left">
            <zmbl-button>返回</zmbl-button>
          </router-link>
      </zmbl-header>

      <zmbl-header title="右侧仅文字">
        <router-link to="/" slot="right">
          <zmbl-button>分享</zmbl-button>
        </router-link>
      </zmbl-header>

      <zmbl-header title="仅图标">
        <router-link to="/" slot="left">
          <zmbl-button icon="back"></zmbl-button>
        </router-link>
        <zmbl-button slot="right" icon="more"></zmbl-button>
      </zmbl-header>
    </div>

  </div>
</template>

<script>
export default {
  name: 'header',

  data() {
    return {

    };
  },

  methods: {
    handleClose() {
      alert('close this page');
    }
  }
};
</script>

<style lang="scss">
  .page {
    &-header {
      &-main {
        margin-top: 50px;
        min-height: 120vh;

        > * {
          margin-bottom: 15px;
        }
      }
    }
  }
</style>
