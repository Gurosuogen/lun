import Dialog from './Dialog.vue'
import { createApp, h, HTMLAttributes } from 'vue'

type options = {
    title: Object | string,
    content: Object | string,
    ok: Function,
    cancel: Function
}

export const openDialog = (options: options) => {
    const { title, content, ok, cancel } = options
    const div = document.createElement("div")
    document.body.appendChild(div)
    const close = () => {
        app.unmount();
        div.remove()
    }
    const app = createApp({
        render() {
            return h(Dialog, {
                visible: true,
                "onUpdate:visible": (newVisible: Boolean) => {
                    if (newVisible === false) {
                        close()
                    }
                }, ok, cancel
            }, { title, content })
        }
    })
    app.mount(div)
}