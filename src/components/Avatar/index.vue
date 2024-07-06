<template>
    <img class="avatar-container" :src="url" :style="{ width: size + 'px', height: size + 'px' }">
</template>

<script>
export default {
    props: {
        url: {
            type: String | undefined,
            required: true
        },
        size: {
            type: Number,
            default: 150
        }
    }
}
</script>

<style lang="less" scoped>
.avatar-container {
    border-radius: 50%;
    display: block;
    object-fit: cover;
}
</style>
