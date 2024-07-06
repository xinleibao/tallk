<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="toc-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>
<script>
import Layout from '@/components/Layout'
import BlogTOC from './components/BlogTOC.vue'
import BlogDetail from './components/BlogDetail.vue';
import fetchData from '../../mixins/fetchData'
import BlogComment from './components/BlogComment.vue'
import { getBlog } from '@/api/blog'
import mainScroll from '@/mixins/mainScroll';
import { titleController } from '@/utils';
export default {
  components: {
    Layout,
    BlogTOC,
    BlogDetail,
    BlogComment
  },
  mixins: [fetchData(null), mainScroll('mainContainer')],
  methods: {
    async fetchData() {
      const resp =  await getBlog(this.$route.params.id)
      titleController.setRouteTitle(resp.title)
      return resp
    },
  },
  updated() {
    const hash = location.hash
    location.hash = ''
    setTimeout(() => {
      location.hash = hash
    }, 50)
  }
}
</script>

<style>
.main-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  /* padding: 20px; */
  scroll-behavior: smooth;
  box-sizing: border-box;
  overflow-x: hidden;
}

.toc-container {
  width: 300px;
  position: relative;
  height: 100%;
}
</style>
