import { Store, install } from 'vuex'
import Vue from 'vue'
import banner from './banner'
import setting from './setting'
import about from './about'
import project from './project'

if (!window.Vuex) {
    // 不影响开发坏境
    install(Vue)
}
// Vue.use(Vuex)


export default new Store({
    modules: {
        banner,
        setting,
        about,
        project
    },
    strict: true
})

