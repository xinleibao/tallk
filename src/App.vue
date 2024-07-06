<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <aside class="left">
          <SiteAside />
        </aside>
      </template>
      <template>
        <main class="main">
          <RouterView />
        </main>
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import SiteAside from '@/components/SiteAside'
import ToTop from './components/ToTop'
export default {
  components: {
    Layout,
    SiteAside,
    ToTop
  }
}
</script>

<style lang="less" scoped>
@import url('~@/styles/mixin.less');

.app-container {
  .self-fill(fixed);

  .left {
    width: 280px;
    height: 100%;
  }

  .main {
    width: 100%;
    height: 100%;
  }
}
</style>
