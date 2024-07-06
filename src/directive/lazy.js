import eventBus from '../eventBus'
import { debounce } from '@/utils'
import defaultImg from '@/assets/default.gif'

let imgs = []

function setImage(img) {
    img.dom.src = defaultImg
    // 整个视口高度
    const clientHeight = document.documentElement.clientHeight
    // 获取图片高度 
    const rect = img.dom.getBoundingClientRect()
    const height = rect.height || 150
    // 只要它的高度超出自己本身的高度就不再视口范围内，在视口范围的上方 && 只要top距离超出当前视口的高度就在视口的下方
    if (rect.top >= -height && rect.top <= clientHeight) {
        // 如果在视口范围内
        // console.log(img.dom, rect.top, height, clientHeight)
        // const tempImg = new Image()
        // tempImg.onload = function () {
        //     img.dom.src = img.src
        // }
        // tempImg.src = img.src
        img.dom.src = img.src
        imgs = imgs.filter((i) => i !== img)
    }
}

function setImages() {
    for (const img of imgs) {
        setImage(img)
    }
}

function handleScroll() {
    setImages()
}

// setInterval(() => {
//     console.log(imgs)
// }, 1000)

eventBus.$on('mainScroll', debounce(handleScroll, 50))

export default {
    inserted(el, bindings) {
        const img = {
            dom: el,
            src: bindings.value
        }
        imgs.push(img)
        setImage(img)
    },
    unbind(el) {
        imgs = imgs.filter(it => it.dom !== el)
    }
}