<template>
  <i :class="['iconfont','ie-icon-' + name]"></i>
</template>

<script>
  export default {
    name: 'zmbl-icon',

    props: {
      name: String
    }
  };
</script>
