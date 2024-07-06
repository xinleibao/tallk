import request from './request'

/**
 * 获取博客列表数据
 * @param {number} page 页码
 * @param {number} limit 页码的容器
 * @param {number} categoryid 页码的分类
 * @returns 返回请求的数据
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
    // console.log(page,limit,categoryid)
    return await request.get('/api/blog', {
        params: {
            page,
            limit,
            categoryid
        }
    })
}



/**
 * 获取博客的分类
 * @returns 返回博客的数据
 */
export async function getBlogCategories() {
    return await request.get('/api/blogtype')
}




/**
 * 获取单个博客
 */

export async function getBlog(id) {
    return await request.get(`/api/blog/${id}`)
}


/**
 * 提交评论
 */

export async function postComment(commentInfo) {
    return await request.post('/api/comment', commentInfo)
}


/**
 * 分页获取评论
 */

export async function getComments(blogid, page = 1, limit = 10) {
    return await request.get('/api/comment', {
        params: {
            blogid,
            page,
            limit
        }
    })
}