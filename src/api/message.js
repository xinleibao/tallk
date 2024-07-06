import request from './request'

export async function postMessage(msgInfo) {
    return await request.post('/api/message', msgInfo)
}


/**
 * 
 * @param {*} msgInfo  {
        page, 当前页码
        limit, 页容量
        keyword 模糊查询关键字
    }
 * @returns 
 */

export async function getMessages(page = 1, limit = 10) {
    return await request.get('/api/message', {
        params: {
            page,
            limit
        }
    })
}
