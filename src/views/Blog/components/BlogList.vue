<template>
    <div class="blog-list-container" ref="container" v-loading="isLoading">
        <div class="blog-list" v-for="item in data.rows" :key="item.id">
            <div class="img-container" v-if="item.thumb">
                <RouterLink :to="{
                    name: 'Details',
                    params: {
                        id: item.id
                    }
                }">
                    <!-- src -->
                    <img v-lazy="item.thumb" :alt="item.title" :title="item.title">
                </RouterLink>
            </div>
            <div class="content-container">
                <RouterLink :to="{
                    name: 'Details',
                    params: {
                        id: item.id
                    }
                }">
                    <h3 class="title">{{ item.title }}</h3>
                </RouterLink>
                <p class="aside">
                    <span>日期：{{ formatData(+item.createDate) }}</span>
                    <span>浏览：{{ item.scanNumber }}</span>
                    <span>评论：{{ item.commentNumber }}</span>
                    <!-- <span>分类： -->
                    <RouterLink :to="{
                        name: 'CategoryBlog',
                        params: {
                            categoryId: item.category ? item.category.id : -1
                        }
                    }">
                        {{ item.category ? item.category.name : '未分类' }}
                    </RouterLink>
                    <!-- </span> -->
                </p>
                <p class="paragraph">
                    {{ item.description }}
                </p>
            </div>
        </div>
        <Empty v-if="data.rows.length === 0 && !isLoading" />
        <Pager v-if="data.total" :current="routeInfo.page" :total="data.total" :limit="routeInfo.limit" :visibleNumber="10"
            @pageChange="handlePageChange" />
    </div>
</template>

<script>
import Pager from '@/components/Pager'
import fetchData from '@/mixins/fetchData.js'
import { getBlogs } from '@/api/blog'
import { formatData } from '@/utils'
import mainScroll from '@/mixins/mainScroll'
import Empty from '@/components/Empty'
export default {
    components: {
        Pager,
        Empty
    },
    mixins: [fetchData({ total: 0, rows: [] }), mainScroll('container')],
    data() {
        return {

        }
    },
    computed: {
        routeInfo() {
            // console.log('19 ==>',+this.$route.params.categoryId);
            const categoryId = this.$route.params.categoryId || -1
            const page = +this.$route.query.page || 1
            const limit = +this.$route.query.limit || 10
            return {
                categoryId, page, limit
            }
        }
    },
    watch: {
        async $route() {
            // console.log(this.$route)
            this.isLoading = true
            this.$refs.container.scrollTop = 0
            this.data = await this.fetchData()
            this.isLoading = false
        }
    },
    methods: {
        formatData,
        async fetchData() {
            return await getBlogs(
                this.routeInfo.page,
                this.routeInfo.limit,
                this.routeInfo.categoryId
            )
        },
        handlePageChange(newPage) {
            const query = {
                page: newPage,
                limit: this.routeInfo.limit
            }
            // console.log(newPage)
            if (this.routeInfo.categoryId === -1) {
                this.$router.push({
                    name: 'Blog',
                    query
                })
            } else {
                this.$router.push({
                    name: 'CategoryBlog',
                    query,
                    params: this.routeInfo.categoryId
                })
            }
        },
    }
}
</script>

<style lang="less" scoped>
@import url('~@/styles/var.less');

.blog-list-container {
    height: 100%;
    width: 100%;
    padding: 20px 0 30px 0;
    // position: relative;
    scroll-behavior: smooth;
    overflow-y: auto;

    .blog-list {
        height: 150px;
        border-bottom: 1px solid;
        margin: 0 10px;
        display: flex;
        align-items: center;
        overflow: hidden;

        .img-container {
            width: 160px;
            height: 120px;
            // background: yellowgreen;
            // float: left;
            // flex: 1;
            margin: 10px 10px 10px 0;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 5px;
            }




        }

        .content-container {
            flex: 1;
            white-space: nowrap;
            text-overflow: ellipsis;
            // float: left;


            .title {
                margin: 5px 0;

                &:hover {
                    color: @primary;
                }
            }

            .aside {
                margin: 5px 0;
                color: @lightWords;

                span {
                    margin-right: 15px;
                }
            }

            .paragraph {
                margin: 5px 0;
                height: 65px;
                overflow: hidden;
                text-overflow: ellipsis;

            }
        }


    }

    .pager-container {
        // position: absolute;
        // bottom: 5px;
        // left: 50%;
        // transform: translateX(-50%);
        padding: 10px 0;
        margin: 0 0 20px 0;

    }

}
</style>
