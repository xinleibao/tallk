// 入口文件
import '@/Mock'
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from './router'
import showMessage from "./utils/showMessage";
import store from './store'
// 引入全局自定义指令
import vLoading from '@/directive/loading'
import vLazy from '@/directive/lazy'
import './eventBus'

store.dispatch('setting/fetchSetting')
Vue.directive('loading', vLoading)
Vue.directive('lazy', vLazy)
Vue.prototype.$showMessage = showMessage

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");




// 测试blog接口
// import * as blogApi from './api/blog'
// blogApi.getBlogType().then(r=>console.log(r))
// blogApi.getBlogs(7,11,1).then(r=>console.log(r))
// blogApi.getBlog().then(r=>console.log(r))
// blogApi.getComment(
//   {
//     nickname: '昵称',
//     content: '一条评论',
//     blogId: '123'
//   }
// ).then(r => console.log(r))
// blogApi.getComments(3).then(r=>console.log(r))


// eventBus测试

// import eventBus from './eventBus'

// function handler1(data){
//   console.log('handle1触发了',data)
// }

// function handler2(data){
//   console.log('handle2触发了',data)
// }

// eventBus.$on('event1',handler1)
// eventBus.$on('event1',handler2)
// eventBus.$on('event2',handler1)

// window.eventBus = eventBus
// window.handler1 = handler1
// window.handler2 = handler2