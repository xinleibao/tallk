<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.layout-container{
  width: 100%;
  height: 100%;
  display: flex;
  
  .left,.right{
    flex:0 0 auto;
    overflow: hidden;
  }
  .content{
    flex: 1 1 auto;
    overflow: hidden;
    height: 100%;
  }
}

</style>
