<template>
  <div class="blog-toc-container">
    <h1>目录</h1>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from './RightList.vue'
import { debounce } from '@/utils'
export default {
  components: {
    RightList
  },
  data() {
    return {
      activeAnchor: ''
    }
  },
  props: {
    toc: {
      type: Array,
      default: () => []
    }
  },

  created() {
    this.setSelectDebounce = debounce(this.setSelect, 50)
    this.$bus.$on('mainScroll', this.setSelectDebounce)
  },
  destroyed() {
    this.$bus.$off('mainScroll', this.setSelectDebounce)
  },
  computed: {
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map(it => ({
          ...it,
          isSelect: this.activeAnchor === it.anchor,
          children: getTOC(it.children)
        }))
      }
      return getTOC(this.toc)
    },
    doms() {
      const doms = []
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor))
          // console.log(t.anchor)
          if (t.children && t.children.length) {
            addToDoms(t.children)
          }
        }
      }

      addToDoms(this.toc)
      return doms

    },

  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor
      
    },
    setSelect(scrollDom) {
      if (!scrollDom) return
      this.activeAnchor = ''
      const range = 200
      // console.log(this.doms)
      for (const dom of this.doms) {
        if (!dom) {
          continue
        }

        const top = dom.getBoundingClientRect().top
        if (top >= 0 && top <= range) {
          // 在指定的范围
          this.activeAnchor = dom.id
          // console.log('指定范围')
          return
        } else if (top > range) {
          // 在范围上方
          // console.log('指定范围上方')
          return
        } else {
          // 在范围下方
          this.activeAnchor = dom.id
          // console.log('指定范围下方')
        }
      }
    }
  },
}
</script>

<style lang="less" scoped>
.blog-toc-container {
  // width: 100%;
  padding: 20px 10px;
  height: 100%;
  position: relative;

  .titl {
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

.blog-toc-container {
  overflow-y: auto;
}
</style>
