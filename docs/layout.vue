<template>
<div>
  <router-view></router-view>
  <iframe :src="iframeSrc" frameborder="0"></iframe>
</div>
</template>
<script>
export default {
  data(){
    return {}
  },
  computed:{
    iframeSrc(){
      console.log(this.$route.path, 155)
      let path = this.$route.path.replace('/docs', '')
      return `/#${path}`
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