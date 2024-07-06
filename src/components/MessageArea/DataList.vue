<template>
    <div class="data-list-container">
        <div class="comment-container" v-for="(item, index) in list" :key="item.id">
            <div class="avator">
                <!-- {{ item.avatar }} -->
                <Avatar :url="item.avatar" :size="50" />
            </div>
            <div class="comment">
                <p class="author">{{ item.nickname }}</p>
                <p class="content">{{ item.content }}</p>
            </div>
            <div class="time">
                {{ formatData(item.createDate,true) }}
            </div>
        </div>
    </div>
</template>

<script>
import Avatar from '../Avatar/index'
import { formatData } from '@/utils'
export default {
    components: {
        Avatar
    },
    props: {

        list: {
            type: Array,
            default: () => []
        },
        // avator: {
        //     type: String,
        //     default: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F29%2F20200529105244_npian.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704874341&t=a24833dc40d3fc0ca362b1572f04a399'
        // },
        // author: {
        //     type: String,
        //     default: '佚名'
        // },

        // content: {
        //     type: String,
        //     default: '暂无内容'
        // }
    },
    methods:{
        formatData,
    }
}

</script>


<style lang="less" scoped>
@import url('~@/styles/var.less');

// 标题样式
.title {
    font-weight: 600;
    font-size: 16px;
}

.comment-container {
    display: flex;
    padding: 10px;
    position: relative;

    .avator {
        padding-right: 10px;
    }

    .comment {
        p {
            margin: 0;
        }

        .author {
            color: @success ;
            font-weight: 550;
            margin-bottom: 5px;
        }
    }

    .time {
        position: absolute;
        top: 10px;
        right: 15px;
        color: @gray;
        font-size: 14px;
    }
}
</style>