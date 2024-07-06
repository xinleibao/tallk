<template>
    <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classtMap = {
    home: "iconzhuye",
    success: "iconzhengque",
    error: "iconcuowu",
    close: "iconguanbi",
    warn: "iconjinggao",
    info: "iconxinxi",
    blog: "iconblog",
    code: "iconcode",
    about: "iconset_about_hov",
    weixin: "iconweixin",
    mail: "iconemail",
    github: "icongithub",
    qq: "iconsign_qq",
    arrowUp: "iconiconfonticonfonti2copy",
    arrowDown: "iconiconfonticonfonti2",
    empty: "iconempty",
    chat: "iconliuyan",
}
export  const types = Object.keys(classtMap)
export default {
    props:{
        type:{
            type:String,
            required:true
        }
    },
    computed:{
        fontClass(){
            return classtMap[this.type]
        }
    }
}
</script>

<style scoped>
@import '//at.alicdn.com/t/font_2164449_nalfgtq7il.css';
.icon-container{
    color: inherit;
    font-size: inherit;
}
</style>
