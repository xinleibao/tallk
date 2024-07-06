<template>
  <div class="emptyTest-container">
       <Empty text="网络连接失败"/>
       <Empty text="请求失败"/>
       <Empty text="离线请重新登录"/>
       <Empty text="夜已深，请休息"/>
  </div>
</template>

<script>
import Empty from './'
export default {
  components:{
    Empty
  }
}
</script>


<style>
.emptyTest-container{
  width: 600px;
  height: 800px;
  outline: 2px solid;
  position: relative;
}

</style>

