<template>
  <div class="page-image-preview">
    <h1 class="page-title">ImagePreview</h1>
    <div class="img-list">
      <zmbl-image
        v-for="src in images"
        width="100"
        height="100"
        :src="src"
        :key="src"
        @click="onClick(src)"
      />
    </div>
    <zmbl-image-preview v-model="show" :images="images" :start-position="index" :key="time" closeable @change="onChange">
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
      show: false,
      index: 0,
      time: 0
    }
  },
  methods:{
    onChange(index) {
      this.index = index;
    },
    onClick(src){
      this.show = true
      this.index = this.images.indexOf(src);
      this.time = new Date().getTime()
    },
    showImagePreview() {
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