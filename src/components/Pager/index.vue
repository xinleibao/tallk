<template>
    <div class="pager-container" v-if="PageNumber > 1">
        <a @click="handleClick(1)" :class="{ disabled: current === 1 }">首页</a>
        <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }">上一页</a>
        <a @click="handleClick(n)" v-for="(n, index) in numbers" :key="index" :class="{ active: current === n }">{{ n }}</a>
        <a @click="handleClick(current + 1)" :class="{ disabled: current === PageNumber }">下一页</a>
        <a @click="handleClick(PageNumber)" :class="{ disabled: current === PageNumber }">尾页</a>
    </div>
</template>

<script>
export default {
    props: {
        current: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            default: 0
        },
        limit: {
            type: Number,
            default: 10
        },
        visibleNumber: {
            type: Number,
            default: 10
        }
    },
    computed: {
        PageNumber() {
            return Math.ceil(this.total / this.limit)
        },
        visibleMin() {
            let min = this.current - Math.floor(this.visibleNumber / 2)
            if (min < 1) {
                min = 1
            }
            return min
        },
        visibleMax() {

            let max = this.visibleMin + this.visibleNumber - 1
            if (max > this.PageNumber) {
                max = this.PageNumber
            }
            return max
        },
        numbers() {
            let nums = []
            for (let i = this.visibleMin; i <= this.visibleMax; i++) {
                nums.push(i)
            }
            return nums
        }
    },
    methods: {
        handleClick(newPage) {

            if (newPage < 1) {
                newPage = 1
            }
            if (newPage > this.PageNumber) {
                newPage = this.PageNumber
            }
            if (newPage === this.current) {
                return
            }
            this.$emit('pageChange', newPage)
        }
    }

}

</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.pager-container {
    display: flex;
    justify-content: center;
    white-space: nowrap;
    a {
        margin: 0 3px;
        padding: 5px 10px;
        color: @primary;
        cursor: pointer;

        &.disabled {
            color: @lightWords;
            cursor: not-allowed;
        }

        &.active {
            color: @words;
            cursor: text;
            font-weight: bold;
        }

    }

}
</style>
