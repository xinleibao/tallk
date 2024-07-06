<template>
  <div class="blog-container">
    <Layout>
      <template>
        <BlogList />
        
      </template>
      <template #right>
        <BlogCategory />
      </template>
    </Layout>

  </div>
</template>
  
<script>
import Layout from '@/components/Layout'
import BlogCategory from './components/BlogCategory.vue'
import BlogList from './components/BlogList.vue'

export default {
  components: {
    Layout,
    BlogCategory,
    BlogList,

  },
  data() {
    return {

    }
  },
  methods: {

  },
  // created(){
  //   const data = this.$route
  //   console.log(data)
  // }
}
</script>
  
<style lang="less" scoped>
.blog-container {
  height: 100%;
  width: 100%;
}


//     <h3 class="h3">
//       文档文章界面 id:{{ $route.params.categoryId }} <br>
//       文档文章界面 page:{{ $route.query.page }} <br>
//       文档文章界面 limit:{{ $route.query.limit }} <br>
//     </h3>
// .h3 {
//   position: fixed;
//   top: 10px;
//   left: 10px;
//   background-color: antiquewhite;
//   overflow: hidden;
//   width: 260px;
// }
</style>
  