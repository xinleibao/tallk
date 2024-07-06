import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { titleController } from '../utils'

if (!window.VueRouter) {
    // 如果没有全局变量没有vue-router 代表是开发坏境
    Vue.use(VueRouter)
}



const router = new VueRouter({
    routes,
    mode: 'history'
})

router.afterEach((to, from) => {
    // to.meta.title && (document.title = to.meta.title)
    if (to.meta.title) {
        titleController.setRouteTitle(to.meta.title)
    }
})

export default router