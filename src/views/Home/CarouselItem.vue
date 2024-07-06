<template>
  <div class="carousel-item-container" ref="container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <div class="img-container" ref="image" :style="imgPosition">
      <ImageLoader @load="showWords" :src="carousel.bigImg" :placeholder="carousel.midImg" :duration="500" />
    </div>
    <!-- <div class="test">x{{ mouseX.toFixed(2) }} y{{ mouseY.toFixed(2) }}</div> -->
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'
export default {
  components: {
    ImageLoader
  },
  props: ['carousel'],
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, //外层容器的大小
      innerSize: null, //内层容器的大小
      mouseX: 0,
      mouseY: 0
    }
  },

  mounted() {
    this.titleWidth = this.$refs.title.clientWidth
    this.descWidth = this.$refs.desc.clientWidth
    this.setSize()
    this.mouseX = this.centre.x
    this.mouseY = this.centre.y
    window.addEventListener('resize', this.setSize)
  },
  destroyed() {
    window.removeEventListener('resize', this.setSize)
  },
  computed: {
    imgPosition() {
      if (!this.innerSize || !this.containerSize) {
        return
      }
      const extraHeight = this.innerSize.height - this.containerSize.height
      const extraWeight = this.innerSize.width - this.containerSize.width
      const left = -extraWeight / this.containerSize.width * this.mouseX
      const top = -extraHeight / this.containerSize.height * this.mouseY

      return {
        transform: 'translate(' + left + 'px,' + top + 'px)'
      }
    },
    centre() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2
      }
    }
  },
  methods: {
    showWords() {
      this.shareWords(this.$refs.title, this.titleWidth)
      this.shareWords(this.$refs.desc, this.descWidth)
      this.$refs.desc.style.transition = '2s 1s'
    },
    shareWords(dom, width) {
      dom.style.opacity = 1
      dom.style.width = 0
      dom.clientWidth
      dom.style.width = width + 'px'
    },
    setSize() {
      this.containerSize = {
        height: this.$refs.container.clientHeight,
        width: this.$refs.container.clientWidth
      }
      this.innerSize = {
        height: this.$refs.image.clientHeight,
        width: this.$refs.image.clientWidth
      }
    },
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect()
      this.mouseX = e.clientX - rect.left
      this.mouseY = e.clientY - rect.top
    },
    handleMouseLeave() {
      this.mouseX = this.centre.x
      this.mouseY = this.centre.y
    }
  }
}
</script>

<style lang="less" scoped>
@import url('~@/styles/var.less');

.carousel-item-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  // background: #fff;
  .img-container {
    width: 110%;
    height: 110%;
    // left: 0;
    // top: 0;
    position: absolute;
    transition: .3s;

  }

  // .test {
  //   font-size: 1.2rem;
  //   color: #fff;
  // }

  .title,
  .desc {
    color: #fff;
    position: absolute;
    left: 30px;
    letter-spacing: 3px;
    text-shadow: 1px 0 0 rgba(0, 0, 0, .5), -1px 0 0 rgba(0, 0, 0, .5),
      0 1px 0 rgba(0, 0, 0, .5), 0 -1px 0 rgba(0, 0, 0, .5);
    transition: 1s;
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
  }

  .title {

    font-size: 2rem;
    top: calc(50% - 50px);
  }

  .desc {

    font-size: 1.2rem;
    top: calc(50% + 10px);
    color: lighten(@gray, 20%);
  }
}
</style>
