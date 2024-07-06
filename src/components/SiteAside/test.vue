<template>
  <div class="test">
       <SiteAside/>
  </div>
</template>

<script>
import SiteAside from './'
export default {
    components:{
        SiteAside
    },
  data () {
    return {
       
    }
  },
  methods: {
       
  }
}
</script>

<style lang="less" scoped>
@import url('~@/styles/global.less');
  .test{
    width: 280px;
    height: 100vh;
  }
</style>
