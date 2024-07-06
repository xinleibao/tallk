<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h3 class="title">文章分类</h3>
    <RightList :list="list" @select="handleSelect" />

  </div>
</template>

<script>
import RightList from './RightList.vue'
import fetchData from '@/mixins/fetchData'
import { getBlogCategories } from '@/api/blog'
export default {
  components: {
    RightList
  },
  mixins: [fetchData([])],
  data() {
    return {

    }
  },
  methods: {
    async fetchData() {
      // console.log(await getBlogCategory())
      return await getBlogCategories()
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit
      }
      if (item.id === -1) {
        this.$router.push({
          name: 'Blog',
          query
        })
      } else {
        this.$router.push({
          name: 'CategoryBlog',
          query,
          params: {
            categoryId: item.id
          }
        })
      }


    }
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1
    },
    limit() {
      return +this.$route.query.limit || 10
    },
    list() {
      const todalArticleCount = this.data.reduce((a, b) => a + b.articleCount, 0)
      const result = [
        { name: '全部', id: -1, articleCount: todalArticleCount },
        ...this.data
      ]

      return result.map(it => ({
        ...it,
        isSelect: it.id === this.categoryId,
        aside: it.articleCount + '篇'
      })

      )

    }
  }
}
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 300px;
  padding: 20px 10px;
  height: 100%;
  position: relative;

  .title {
    font-weight: bold;
    letter-spacing: 2px;
    margin: 0 0 5px 0;
    font-size: 1rem;
  }

  .category {
    list-style: none;

    .count {
      margin: 0 0 0 10px;
    }
  }
}

.blog-category-container {
  overflow-y: auto;
}
</style>
