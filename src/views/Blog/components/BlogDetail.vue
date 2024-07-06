<template>
    <div class="blog-detail-container">
        <h1 class="title">{{ blog.title }}</h1>
        <div class="aside">
            <span>日期:{{ formatData(+blog.createDate) }}</span>
            <span>浏览:{{ blog.scanNumber }}</span>
            <a href="#form-container">评论:{{ blog.commentNumber }}</a>
            <RouterLink :to="{
                name: 'CategoryBlog',
                params: {
                    categoryId: blog.category.id
                }
            }">{{ blog.category.name }}</RouterLink>
        </div>
        <div v-html="blog.htmlContent" class="markdown-body"></div>
    </div>
</template>

<script>
import { formatData } from '@/utils'
import "highlight.js/styles/github.css";
export default {
    props: {
        blog: {
            type: Object,
            require: true
        }
    },
    data() {
        return {

        }
    },
    methods: {
        formatData,
    },
    mounted() {
        // console.log('17 ==>', this.blog.htmlContent);
        // console.log(typeof this.blog.createDate)
    }
}
</script>

<style lang="less" scoped>
@import url('~@/styles/var.less');
@import url('~@/styles/markdown.css');


.blog-detail-container {
    padding: 15px;

    .title {
        margin-bottom: 10px;
    }

    .aside {
        color: @gray;


        span,
        a {
            margin: 0 10px 0 0;
            font-size: 14px;


        }

        a {
            cursor: pointer;
        }
    }
}

.markdown-body {
    padding: 2rem 0;
}
</style>
