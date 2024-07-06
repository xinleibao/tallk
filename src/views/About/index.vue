<template>
  <div class="about-container" v-loading="loading || !srcLoaded">
    <iframe v-if="src" class="about-content" :src="src" frameborder="0" @load="srcLoaded = true"></iframe>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      srcLoaded:false
    }
  },
  computed: {
    ...mapState('about', {
      src: 'data',
      loading: 'loading'
    })
  },
  methods: {
    ...mapActions('about', ['fetchAbout'])
  },
  created() {
    this.fetchAbout()
  }
}
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  .about-content {
    width: 100%;
    height: 100%;
  }
}
</style>
