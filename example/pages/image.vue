<template>
  <div class="page-image">
    <h1 class="page-title">Image</h1>
    <mt-image
      width="100"
      height="100"
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
    />
    <mt-image
      width="10rem"
      height="10rem"
      fit="contain"
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
    />
  </div>
</template>

<script>
export default {
  name: 'image',
  data(){
    return {
      
    }
  },
  methods:{
    
  }
};
</script>

<style lang="scss">
    .page-dialog {
      padding: 0 15px 15px;
    }
</style>
