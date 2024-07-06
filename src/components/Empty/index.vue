<template>
    <div class="empty-container">
        <Icon type="empty" />
        <p class="text">{{ text }}</p>
    </div>
</template>

<script>
import Icon from '../Icon'
export default {
    components: {
        Icon
    },
    props: {
        text: {
            type: String,
            default: '无数据'
        }
    }
}
</script>

<style lang="less" scoped>
@import url('~@/styles/var.less');
@import url('~@/styles/mixin.less');

.empty-container {
    .flex-center();
    color: @gray;
    .iconfont {
        font-size: 10rem;
    }

    .text {
        font-weight: 500;
        padding: 25px 20px 20px;
        font-size: 20px;
    }

}
</style>
