<template>
  <div class="home-container" @wheel="handleWheel" ref="container" v-loading="loading">
    <ul class="carousel-container" ref="carousel" :style="{ marginTop }" @transitionend="handleTransitionEnd">
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
      <div v-show="index >= 1" class="arrow arrow-up" @click="switchTo(index - 1)">
        <Icon type="arrowUp" />
      </div>
      <div v-show="index < data.length - 1" class="arrow arrow-down" @click="switchTo(index + 1)">
        <Icon type="arrowDown" />
      </div>
      <ul class="indicator-container">
        <li class="indicator" v-for="(item, i) in data" :key="item.id" @click="switchTo(i)"
          :class="{ 'activer': i === index }"></li>
      </ul>
    </ul>
  </div>
</template>
  
<script>
import CarouselItem from '@/views/Home/CarouselItem'
// import { getBanner } from '@/api/banner'
import Icon from '@/components/Icon'
// import fetchData from '@/mixins/fetchData'
import { mapState } from 'vuex'
export default {
  components: {
    CarouselItem,
    Icon
  },
  // mixins: [fetchData([])],
  data() {
    return {
      index: 0,
      containerHeight: 0,
      switching: false,
    }
  },
  created() {
    this.$store.dispatch('banner/fetchBanner')
  },

  mounted() {
    this.containerHeight = this.$refs.carousel.clientHeight
    window.addEventListener('resize', this.handleResize)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    marginTop() {
      return - this.index * this.containerHeight + 'px'
    },
    ...mapState('banner', ['loading', 'data'])
  },
  methods: {
    // async fetchData(){
    //   return await getBanner()
    // },
    switchTo(i) {
      this.index = i
    },
    handleWheel(e) {
      if (this.switching) {
        return
      }
      if (e.deltaY > 0 && this.index < this.data.length - 1) {
        this.switching = true
        this.switchTo(this.index + 1)
      } else if (e.deltaY < 0 && this.index > 0) {
        this.switching = true
        this.switchTo(this.index - 1)
      }
    },
    handleTransitionEnd() {
      this.switching = false
    },
    handleResize() {
      this.containerHeight = this.$refs.carousel.clientHeight
    }
  }


}

</script>
  
<style lang="less" scoped>
@import url('~@/styles/mixin.less');
@import url('~@/styles/var.less');

.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  // background: @dark;
  overflow: hidden;

  // width: 60%;
  // height: 60%;
  // border: 2px solid red;
  // margin: 30px auto;

  .carousel-container {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    height: 100%;
    transition: 500ms;

    li {
      width: 100%;
      height: 100%;
    }
  }

  .arrow {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 32px;
    cursor: pointer;
    color: @gray;
    @gay: 20px;

    &.arrow-up {
      top: @gay;
      animation: jump-up 2s infinite;
    }

    &.arrow-down {
      bottom: @gay;
      animation: jump-down 2s infinite;
    }
  }

  .indicator-container {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    list-style: none;

    .indicator {
      width: 8px;
      height: 8px;
      background: @words;
      border-radius: 50%;
      margin: 5px;
      cursor: pointer;
      border: 1px solid white;

      &.activer {
        background: white;

      }
    }

  }
}

@jump: 10px;

@keyframes jump-up {
  0% {
    transform: translate(-50%, -@jump);
  }

  50% {
    transform: translate(-50%, @jump);
  }

  100% {
    transform: translate(-50%, -@jump);
  }
}

@keyframes jump-down {
  0% {
    transform: translate(-50%, @jump);
  }

  50% {
    transform: translate(-50%, -@jump);
  }

  100% {
    transform: translate(-50%, @jump);
  }
}
</style>
  