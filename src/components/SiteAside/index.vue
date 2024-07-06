<template>
  <div class="site-aside-container">
    <div class="self-introduction">
      <Avatar :url="data.avatar" />
      <h1 class="title">{{ data.siteTitle }}</h1>
    </div>
    <Menu />
    <div class="footer-container">
      <Contact />
      <p class="footer">{{ data.icp }}</p>
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
import Contact from './Contact'
import { mapState } from 'vuex'
import Menu from './Menu'
import '@/styles/global.less'
export default {
  components: {
    Avatar,
    Contact,
    Menu
  },
  computed: {
    ...mapState('setting', ['data'])
  }
}
</script>

<style lang="less" scoped>
@import url('~@/styles/var.less');

.site-aside-container {
  height: 100vh;
  width: 100%;
  background: #000;
  color: @gray;
  text-align: center;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: space-around;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 10px 0;
  position: relative;

  .self-introduction {

    .avatar-container {
      margin: auto;
    }

    .title {
      font-size: 20px;
      text-align: center;
      margin: 10px 0;
      font-weight: 600;

    }

  }

  .footer-container {
    position: absolute;
    bottom: 30px;
  }

  .footer {
    margin: 30px 0 0;
  }
}
</style>
