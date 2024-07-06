<template>
    <div class="image-loader-container">
        <img class="placeholder" :src="placeholder" v-if="!everythingDone">
        <img @load="handleLoad" class="origin" :style="{ opacity: originOpacity, transition: duration + 'ms' }" :src="src">
    </div>
</template>

<script>
export default {
    data() {
        return {
            originLoaded: false, //原图是否加载完成
            everythingDone: false //整个组件是否加载完成
        }
    },
    props: {
        src: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            default: 500
        }
    },
    computed: {
        originOpacity() {
            //计算原图的透明度
            return this.originLoaded ? 1 : 0
        }
    },
    methods: {
        handleLoad() {
            this.originLoaded = true
            setTimeout(() => {
                this.everythingDone = true,
                    this.$emit('load')
            }, this.duration)

        }
    }

}
</script>

<style lang="less" scoped>
@import url('~@/styles/mixin.less');

.image-loader-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    img {
        .self-fill();
        object-fit: cover;
    }

    .placeholder {
        filter: blur(1vw);
    }
}
</style>
