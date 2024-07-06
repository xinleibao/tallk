import { getSetting } from '../api/setting'
import { titleController } from '../utils'
export default {
    namespaced: true,
    state: {
        loading: false,
        data: []
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setData(state, payload) {
            state.data = payload
        }
    },
    actions: {
        async fetchSetting(ctx) {
            if (ctx.state.data.length) return
            ctx.commit('setLoading', true)
            const resp = await getSetting()
            // console.log(resp)
            ctx.commit('setData', resp)
            ctx.commit('setLoading', false)
            if (resp.favicon) {
                // 处理网站图标
                let link = document.querySelector("link[rel='shortcut icon']")
                if (link) return
                link = document.createElement('link')
                link.href = resp.favicon
                link.rel = 'shortcut icon'
                link.type = 'images/x-icon'
                document.querySelector('head').appendChild(link)
            }

            if (resp.siteTitle) {
                titleController.setSiteTitle(resp.siteTitle)
            }
        }
    }
}