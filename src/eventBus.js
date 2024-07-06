// const listeners = {}

// export default {

//     // 监听事件
//     $on(eventName, handler) {
//         if (!listeners[eventName]) {
//             listeners[eventName] = new Set()
//         }
//         listeners[eventName].add(handler)
//     },
//     // 取消监听
//     $off(eventName, handler) {
//         if (!listeners[eventName]) {
//             return
//         }
//         listeners[eventName].delete(handler)

//     },
//     // 触发事件
//     $emit(eventName, ...args) {
//         if (!listeners[eventName]) {
//             return
//         }

//         for (const handler of listeners[eventName]) {
//             handler(...args)
//         }

//     }
// }


// 方法二
/**
 * 事件名:mainScroll
 * 含义:著区域滚动条位置变化后触发
 * 参数:
 * -滚动的dom元素,如果是undefined 表示dom元素不存在
 * 
 * 事件名:setMainScroll
 * 含义:当需要设置主区域滚动条位置时触发
 * 参数:
 * -滚动高度
 */
import Vue from 'vue'
const app = new Vue({})
Vue.prototype.$bus = app
// export default new Vue({})

export default app
