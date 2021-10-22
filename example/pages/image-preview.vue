<template>
  <div class="page-image-preview">
    <h1 class="page-title">ImagePreview</h1>
    <div class="button">
      <zmbl-button type="primary" @click="showImagePreview">点击打开dialog</zmbl-button>
    </div>
    <zmbl-image-preview v-model="show" :images="images" closeable @change="onChange">
      <span name="index" slot-scope="{index}">{{index}}</span>
    </zmbl-image-preview>
  </div>
</template>
<script>
export default {
  name: 'image-preview',
  data(){
    const images = [
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg',
      'https://img.yzcdn.cn/vant/apple-3.jpg',
      'https://img.yzcdn.cn/vant/apple-4.jpg',
    ];
    return {
      images,
      show: false
    }
  },
  methods:{
    onChange(index) {
      this.index = index;
    },
    showImagePreview(options) {
      this.show = true
    },
  }
}
</script>
<style lang="scss">
  .page-image-preview {
    padding: 0 15px 15px;
  }
</style>