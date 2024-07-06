<template>
    <div class="test">
        <ImageLoader
            src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
            placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" :duration="1500"
            @load="handleLoaded" />
    </div>
</template>

<script>
import ImageLoader from './'
export default {
    components: {
        ImageLoader
    },
    methods: {
        handleLoaded() {
            console.log('整个组件加载完成')
        }
    }
}
</script>

<style>
.test {
    width: 600px;
    height: 400px;
    outline: 2px solid;
    margin: 30px auto;
}
</style>


