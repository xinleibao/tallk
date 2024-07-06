<template>
  <div class="project-container" ref="projectContainer" v-loading="loading">
    <a class="project-item" :href="item.url ? item.url : `javascript:alert('只能内网访问');`"
      :target="item.url ? '_blank' : '_self'" v-for="item in data" :key="item.id">
      <div class="img-container">
        <img v-lazy="item.thumb" alt="item.name">
      </div>
      <div class="project-content">
        <h3>
          {{ item.name }}
          <a class="github-container" v-if="item.github" :href="item.github" target="_blank">github</a>
        </h3>
        <p v-for="(desc,index) in item.description" :key="index">{{ desc }}</p>
      </div>
    </a>
    <Empty v-if="data.length === 0 && !loading"/>
  </div>
</template>
  
<script>
import { mapState } from 'vuex'
import mainScroll from '@/mixins/mainScroll'
import Empty from '@/components/Empty'
export default {
  components:{
    Empty
  },
  mixins:[mainScroll('projectContainer')],
  data() {
    return {

    }
  },
  computed: {
    ...mapState('project', ['loading', 'data'])
  },
  methods: {

  },
  created() {
    this.$store.dispatch('project/fetchProject')
  }
}
</script>
  
<style lang="less" scoped>
.project-container {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;

}

.project-item {
  // border: 1px solid #ccc;
  height: 200px;
  display: flex;
  padding: 10px;
  &:hover{
    color: #000;
  }

  .img-container {
    width: 280px;
    height: 100%;
    text-align: center;

    // border: 1px solid #ccc;

    // padding: 20px;
    // box-sizing: border-box;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-radius: 10px;
      // max-width: 100%;
    }
  }
  .project-content{
    flex: 1;
    padding: 0 0 0 10px;
    .github-container{
      font-size: 14px;
    }
  }
}
</style>
  