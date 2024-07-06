<template>
  <div class="message-area-container">
    <MessageArea title="评论列表" :subTitle="`${data.total}`" :list="data.rows" :isListLoading="isLoading"
      @submit="handleSubmit" />
  </div>
</template>

<script>
import MessageArea from '@/components/MessageArea/index'
import fetchData from '@/mixins/fetchData';
import { getComments, postComment } from '@/api/blog'

export default {
  components: {
    MessageArea
  },
  mixins: [fetchData({ total: 0, rows: [] })],
  data() {
    return {
      page: 1,
      limit: 10,
      isLoading: false
    }
  },
  created() {
    this.$bus.$on('mainScroll', this.handleScroll)
  },
  destroyed() {
    this.$bus.$off('mainScroll', this.handleScroll)
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total
    }
  },
  methods: {
    handleScroll(dom) {
      // console.log(dom)
      if (this.isLoading || !dom) return
      const range = 200
      // 元素的滚动高度 + 元素本身高度 - 元素滚动的高度
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight)
      if (dec <= range) {
        this.fetchMore()
      }
    },
    async fetchData() {
      const res = await getComments(this.$route.params.id, this.page, this.limit)
      // console.log(res)
      return res
    },
    // 请求下一页数据
    async fetchMore() {
      if (!this.hasMore) return
      this.isLoading = true
      this.page++
      const resp = await this.fetchData()
      this.data.total = resp.total
      this.data.rows = this.data.rows.concat(resp.rows)
      this.isLoading = false
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData
      })
      if (!resp) return
      this.data.rows.unshift(resp)
      this.data.total++
      callback('评论成功')

    }
  }
}
</script>


<style scoped lang="less">
.message-area-container {
  padding: 10px;
}
</style>