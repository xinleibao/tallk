import { getAbout } from '../api/about'

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
        async fetchAbout(ctx) {
            if (ctx.state.data.length) return
            ctx.commit('setLoading', true)
            const resp = await getAbout()
            console.log(resp)
            ctx.commit('setData', resp)
            ctx.commit('setLoading', false)
        }
    }
}