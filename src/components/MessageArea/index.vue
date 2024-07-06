<template>
  <div class="message-area-container">
    <DataForm  v-on="$listeners"/>
    <header class="title">
      {{ title }} <span>{{ subTitle }}</span>
    </header>

    <DataList :list="list"/>
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from './DataForm.vue'
import DataList from './DataList.vue'
export default {
  components: {
    DataForm,
    DataList
  },
  props: {
    title: {
      type: String,
      default: '顶部标题'
    },
    subTitle: {
      type: String,
      default: 0
    },
    list: {
      type: Array,
      default: () => []
    },
    isListLoading: {
      type: Boolean,
      default: false
    }
  },
  mounted(){
    // console.log(this.$listeners)
  },
  methods:{
    // handleSubmit(formDate){
    //   console.log(formDate)
    // }
  }
}
</script>

<style lang="less" scoped>
.message-area-container{
  width: 100%;

}
.loading{
  position: relative;
  height: 100px;
}
.title{
  padding: 10px;
}
</style>