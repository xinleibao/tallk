<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea title="留言板" :subTitle="`( ${data.total} )`" :list="data.rows" :isListLoading="isLoading"
      @submit="handleSubmit" />
  </div>
</template>
  
<script>
import fetchData from '@/mixins/fetchData'
import MessageArea from '@/components/MessageArea'
import * as msgApi from '@/api/message'
import mainScroll from '@/mixins/mainScroll';
export default {
  components: {
    MessageArea
  },
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll('messageContainer')],
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
    async fetchData() {
      const resp = msgApi.getMessages(this.page, this.limit)
      // console.log(resp)
      return resp
    },
    async handleSubmit(data, callback) {
      const resp = await msgApi.postMessage(data)
      if (!resp) return
      callback('感谢您的留言')
      this.data.rows.unshift(resp);
    }
  }
}
</script>
  
<style lang="less" scoped>
.message-container {
  padding: 10px 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;

  .message-area-container {
    width: 700px;
    margin: 0 auto;
  }
}
</style>
  