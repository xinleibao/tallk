<template>
    <div class="test-container">
        <Layout>
            <template #left>
                <div class="left">
                    左边栏区域，宽度适应内容，溢出隐藏
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, vitae accusamus! Ex quae consequatur, tempore laudantium, impedit eveniet dolores, aperiam inventore ut quos corporis! Dolorum fugit aperiam, expedita ad architecto enim iure. Et necessitatibus quia praesentium eaque ad in corporis quod eius saepe, perspiciatis culpa, blanditiis ducimus! Neque a dolorem repellendus cum recusandae, similique adipisci fugit assumenda. Nobis repudiandae, minima delectus at atque iusto saepe porro earum placeat facere ipsam veniam omnis est ipsa sunt dolores? Velit expedita esse consequuntur facere quam soluta reiciendis explicabo nobis? Ab similique consectetur odit amet, accusamus maxime temporibus porro nobis fuga numquam. Ducimus, minus!
                </div>
            </template>
            <div class="main">
                主区域，宽度占满剩余空间，溢出隐藏
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium molestiae blanditiis, tempora possimus culpa nobis harum nisi nesciunt eligendi doloremque quas omnis adipisci laudantium repudiandae ratione rerum commodi! Explicabo reprehenderit quod eaque maxime accusantium necessitatibus ullam odio illum exercitationem fugit? Facilis inventore voluptatem voluptatum. Deleniti, corrupti necessitatibus. Ipsam, vel neque accusamus esse explicabo nulla corporis dicta fugit nesciunt fugiat officiis, modi earum distinctio minima? Sunt placeat, ipsum consequuntur ipsam ratione tempore in, quibusdam, similique eos asperiores nulla voluptatem. Harum officia ab commodi quod quia quae eligendi quas, molestias error reprehenderit qui tempore perferendis dolor vel cum aspernatur nihil sint dignissimos eius facilis maiores consequatur! Libero velit dolor animi inventore, architecto nesciunt praesentium ipsum accusantium dolorem. Distinctio commodi adipisci corporis minus sapiente. Vel, ut! Nostrum deleniti at minus, quas, mollitia reprehenderit voluptates iusto ex consectetur veritatis fugit hic distinctio accusantium pariatur? Reprehenderit velit, a quia autem ducimus consequatur officiis incidunt maiores blanditiis. Architecto, quisquam? Animi veniam repellat deleniti sapiente corporis voluptatem reprehenderit quo illo perspiciatis quam? Sequi numquam eligendi iusto ut assumenda. Veniam aut voluptatum laboriosam, reprehenderit sint delectus harum maxime eius asperiores earum, alias iste laborum tempore. Iusto tempore corrupti non sed vero libero amet nulla quod recusandae reprehenderit assumenda cupiditate laborum laboriosam neque, eum ratione earum similique modi debitis. Unde, dicta obcaecati. Iste laboriosam quis accusantium aliquam sint, odit inventore maiores voluptatibus? Quidem fugiat sunt, corporis exercitationem illum delectus. Dolore assumenda obcaecati reiciendis tempora ab quam, numquam cumque sunt minus tempore. Sunt soluta suscipit consectetur, quis dolore id deleniti necessitatibus! Autem explicabo reiciendis possimus molestias, obcaecati, fuga quaerat maiores ipsum accusamus veritatis voluptatem esse quia nam unde sint saepe laboriosam? Blanditiis iusto inventore porro eos cum. Impedit ipsa modi id commodi rem, voluptate ducimus mollitia. Esse ipsum ipsa, obcaecati unde ratione aliquid aut, deserunt nemo nihil, exercitationem expedita?
            </div>
            <template #right>
                <div class="right">
                    右边栏区域，宽度适应内容，溢出隐藏
                </div>
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from './'
export default {
    components: {
        Layout
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.test-container {
    width:100vw;
    height:600px;
    outline: 2px solid red;
    margin: 80px auto;
}

.left{
    width: 200px;
    height: 100%;
    background: skyblue;
    white-space: nowrap;
}

.main{
    width: 100%;
    height: 100%;
    background: antiquewhite;
    white-space: nowrap;
}

.right{
    width: 150px;
    height: 100%;
    background: yellowgreen;
}
</style>
