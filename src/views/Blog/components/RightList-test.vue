<template>
        <!-- <RightList/> -->
        <RightList :list="list"  @select="handleSelect"/>
</template>

<script>
import RightList from "./RightList.vue";
export default {
    components: {
        RightList
    },

    data() {
        return {
            list: [
                {
                    name: '1', isSelect: false, children: [
                        { name: '1-1', isSelect: true },
                        { name: '1-2', isSelect: false },
                        {
                            name: '1-3', isSelect: false, children: [
                                { name: '1-3-1', isSelect: true },
                                { name: '1-3-2', isSelect: false },
                                { name: '1-3-3', isSelect: false },
                            ]
                        },

                    ]
                },
                {
                    name: '2', isSelect: false, children: [
                        { name: '2-1', isSelect: true },
                        { name: '2-2', isSelect: false },
                        { name: '2-3', isSelect: false },
                    ]
                },
                { name: '3', isSelect: false },
                {
                    name: '4', isSelect: false, children: [
                        { name: '4-1', isSelect: true },
                        { name: '4-2', isSelect: false },
                    ]
                },
            ]

        }
    },
    methods: {
        handleSelect(item){
            console.log(item)
        }
    }
}
</script>

<style lang="less" scoped></style>
