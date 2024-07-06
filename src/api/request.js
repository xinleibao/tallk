import axios from 'axios'
import showMessage from '@/utils/showMessage'

const ins = axios.create() // 创建一个axios的实例
ins.interceptors.response.use(function (response) {
    let content = '暂无数据'
    if (typeof response.data === 'string') {
        content = JSON.parse(response.data).msg
    } else {
        content = response.data
    }

    if (response.data.code !== 0) {
        showMessage({
            content,
            duration: 1500,
            type: 'error'
        })
        return null
    }
    return response.data.data
})


export default ins