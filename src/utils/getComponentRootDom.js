import Vue from 'vue'

/**
 * 
 * @param {HTMLElement} comp 组件
 * @param {String} props 组件的属性 传入一个对象
 * @returns 组件渲染的Dom根元素
 */
function getComponentRootDom(comp, props) {
    const vm = new Vue({
        render: h => h(comp, { props })
    })
    vm.$mount()
    return vm.$el

}

export default getComponentRootDom