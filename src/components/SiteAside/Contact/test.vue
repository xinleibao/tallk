<template>
  <div class="test-container">
       <Contact/>
  </div>
</template>

<script>
import Contact from './'
export default {
  components: {
    Contact
  }
}
</script>

<style lang="less" scoped>
  .test-container{
    width: 300px;
    height: 400px;
    outline: 2px solid red;
    margin:80px auto;
    background: black;
    padding: 200px 0 0;
  }
</style>
