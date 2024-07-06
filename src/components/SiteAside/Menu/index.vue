<template>
    <nav class="menu-container">
        <RouterLink v-for="(item, index) in items" :exact="item.exact" :key="index" :to="{ name: item.name }"
        active-class="selected" exact-active-class=""
        >
            <div class="icon">
                <Icon :type="item.icon"></Icon>
            </div>
            <span>{{ item.title }}</span>
        </RouterLink>
    </nav>
</template>

<script>
import Icon from '@/components/Icon'
export default {
    components: {
        Icon
    },
    data() {
        return {
            items: [
                {
                    name: 'Home',
                    title: '首页',
                    link: '/',
                    icon: 'home',
                    exact:true
                },
                {
                    name: 'Blog',
                    title: '文章',
                    link: '/blog',
                    icon: 'blog',
                    exact:false
                },
                {
                    name: 'About',
                    title: '关于我',
                    link: '/about',
                    icon: 'info',
                    exact:true
                },
                {
                    name: 'Project',
                    title: '项目&效果',
                    link: '/project',
                    icon: 'code',
                    exact:true
                },
                {
                    name: 'Message',
                    title: '留言板',
                    link: '/message',
                    icon: 'chat',
                    exact:true
                }
            ]
        }
    },
    // methods: {
    //     isSelected(item) {
    //         const link = item.link.toLocaleLowerCase()
    //         const path = location.pathname.toLocaleLowerCase()
    //         if (item.startWith) {
    //             return path.startsWith(link)
    //         } else {
    //             return path === link
    //         }
    //     }
    // }
}
</script>

<style lang="less" scoped>
@import url('~@/styles/var.less');
@import url('~@/styles/global.less');

.menu-container {
    color: @gray;
    margin: 20px 0;
    width: inherit;


    a {
        display: flex;
        padding: 0px 50px;
        align-items: center;
        height: 45px;

        &:hover {
            color: #fff;
            background: rgba(@gray, 0.3);
        }

        &.selected {
            color: #fff;
            background: rgba(@gray, 0.3);
        }

        .icon {
            width: 24px;
            font-size: 18px;
        }
    }
}
</style>
