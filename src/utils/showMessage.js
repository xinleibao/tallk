import getComponentRootDom from "./getComponentRootDom";
import Icon from '@/components/Icon'
import styles from './showMessage.module.less'

/**
 * 
 * @param {String} content 消息内容
 * @param {String} type 消息类型 默认：info  error  success  warn
 * @param {Number} duration 消息消失时间
 * @param {HTMLElement} container 消息挂载的容器 默认是body
 * @param {Function} callback 调用回调函数
 */

function showMessage(option = {}) {
    const content = option.content || ''
    const type = option.type || 'info'
    const duration = option.duration || 2000
    const container = option.container || document.body

    const div = document.createElement('div')
    const typeClass = styles[`message-container-${type}`]
    div.className = `${styles[`message-container`]} ${typeClass}`

    const iconDom = getComponentRootDom(Icon, { type })
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`

    getComputedStyle(container).position === 'static' && (container.style.position = 'relative')


    container.appendChild(div)

    // 强制浏览器刷新
    div.clientHeight //导致reflow

    div.style.transform = `translate(-50%, -50%) translateY(-15px)`
    div.style.opacity = 1


    setTimeout(() => {
        div.style.transform = `translate(-50%, -50%) translateY(-35px)`
        div.style.opacity = 0
        div.addEventListener('transitionend', function () {
            this.remove()
            option.callback && option.callback()
        }, { once: true })

    }, duration)

}


export default showMessage