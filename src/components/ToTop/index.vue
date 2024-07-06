<template>
    <div v-show="show" @click="handleClick" class="to-top-container">
        top
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    created() {
        this.$bus.$on('mainScroll', this.handleScroll)
    },
    destroyed() {
        this.$bus.$off('mainScroll', this.handleScroll)
    },
    methods: {
        handleScroll(dom) {
            // console.log(dom)
            if (!dom) {
                this.show = false
                return
            }
            this.show = dom.scrollTop >= 500
        },
        handleClick(){
            // 滚动条高度设置为0
            this.$bus.$emit('setMainScroll',0)
        }
    }

}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.to-top-container {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    line-height: 50px;
    text-align: center;
    position: fixed;
    right: 50px;
    bottom: 50px;
    background: @primary;
    color: @white;
    cursor: pointer;
}
</style>