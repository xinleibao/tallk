<template>
    <ul class="right-list-container">
        <li v-for="(item, index) in list" :key="index">
            <span :class="{ active: item.isSelect }" @click="handleClick(item)">
                {{ item.name }}
            </span>
            <span  v-if="item.aside" class="aside" :class="{ active: item.isSelect }" @click="handleClick(item)">
                {{ item.aside }}
            </span>
            <RightList :list="item.children" @select="handleClick" />
        </li>

    </ul>
</template>

<script>
export default {
    name: 'RightList',
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        handleClick(item) {
            if (!item.isSelect) {
                this.$emit('select', item)
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import url('~@/styles/var.less');

.right-list-container {
    padding-left: 0;
    margin: 0;
    // background: #ccc;
    list-style: none;


    .right-list-container {
        margin-left: 1em;

    }

    li {
        min-height: 40px;
        line-height: 40px;
        font-size: 14px;

        span {
            cursor: pointer;
        }
    }

    li:nth-last-child(1) {
        padding: 0 0 20px 0;
    }

    .aside {
        font-weight: normal;
        color: @gray;
    }

    .active {
        color: coral;
        font-weight: bold;
    }


}
</style>
