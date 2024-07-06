<template>
  <div class="loading-container">
    <img src="@/assets/loading.svg" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
       
    }
  },
  methods: {
       
  }
}
</script>

<style lang="less" scoped>
@import url('~@/styles/mixin.less');

.loading-container {
//.self-center();
position: relative;
  img {
    .self-center();
  }
}

</style>
