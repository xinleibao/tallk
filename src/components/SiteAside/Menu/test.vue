<template>
  <div class="test">
       <Menu/>
  </div>
</template>

<script>
import Menu from './'
export default {
    components:{
        Menu
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
    .test{
        width: 300px;
        height: 400px;
        outline: 2px solid red;
        padding: 200px 0 0;
        background: #000;
        margin: auto;
    }
</style>
