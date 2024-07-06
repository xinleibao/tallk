// import About from '@/views/About'
// import Home from '@/views/Home'
// import Blog from '@/views/Blog'
// import Message from '@/views/Message'
// import Project from '@/views/Project'
// import Detail from '@/views/Blog/Detail.vue'
import 'nprogress/nprogress.css'
import { start, done, configure } from 'nprogress'

configure({
    easing: 'ease',
    speed: 500,
    trickleSpeed: 50,//跳转进度条速度
    showSpinner: false // 是否显示右侧加载动画
})

function delay(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, duration)
    })
}

export default [
    {
        name: "About",
        path: "/about",
        component: async () => {
            // console.log('组件加载...')
            start()
            // await delay(5000)
            const AboutComp = await import(/* webpackChunkName:"about"*/ '@/views/About')
            done()
            // console.log('组件加载成功')
            return AboutComp
        },
        meta: {
            title: '关于'
        }
    },
    {
        name: "Blog",
        path: "/article",
        component: async () => {
            start()
            const BlogComp = await import(/* webpackChunkName:"article"*/'@/views/Blog')
            done()
            return BlogComp
        },
        meta: {
            title: '文章'
        }
    },
    {
        name: "CategoryBlog",
        path: "/article/cate/:categoryId",
        component: async () => {
            start()
            const BlogComp = await import(/* webpackChunkName:"category"*/'@/views/Blog')
            done()
            return BlogComp
        },
        meta: {
            title: '博客'
        }
    },
    {
        name: "Details",
        path: "/article/:id",
        component: async () => {
            start()
            const detailsComp = await import(/* webpackChunkName:"details"*/'@/views/Blog/Detail')
            done()
            return detailsComp
        },
        meta: {
            title: '博客详情'
        }
    },
    {
        name: "Home",
        path: "/",
        component: async () => {
            start()
            const homeComp = await import(/* webpackChunkName:"home"*/'@/views/Home')
            done()
            return homeComp
        },
        meta: {
            title: '主页'
        }
    },
    {
        name: "Message",
        path: "/message",
        component: async () => {
            start()
            const messageComp = await import(/* webpackChunkName:"message"*/'@/views/Message')
            done()
            return messageComp
        },
        meta: {
            title: '留言板'
        }
    },
    {
        name: "Project",
        path: "/project",
        component: async () => {
            start()
            const projectComp = await import(/* webpackChunkName:"project"*/'@/views/Project')
            done()
            return projectComp
        },
        meta: {
            title: '项目&效果'
        }
    }
]