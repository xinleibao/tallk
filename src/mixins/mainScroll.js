export default function (refValue) {
    return {
        mounted() {
            // 监听设置滚动高度
            this.$bus.$on('setMainScroll', this.handleSetMainScroll)
            // 监听滚动事件
            this.$refs[refValue].addEventListener('scroll', this.handleMainScroll)
        },
        beforeDestroy() {
            // 触发
            this.$bus.$emit('mainScroll')
            // 移除滚动高度
            this.$refs[refValue].removeEventListener('scroll', this.handleMainScroll)
            // 关闭设置滚动高度
            this.$bus.$off('setMainScroll', this.handleSetMainScroll)
        },
        methods: {
            handleMainScroll() {
                // 触发滚动事件
                this.$bus.$emit('mainScroll', this.$refs[refValue])
            },
            handleSetMainScroll(scrollTop) {
                // 设置滚动事件
                this.$refs[refValue].scrollTop = scrollTop
            }
        }
    }
}