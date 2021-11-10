import type {App} from 'vue';
import router from '@/packages/router'
import setupInit from '@/packages/base/index'
import jquery from "jquery"


const install = async (app: App) => {
    app.config.globalProperties.version = '0.0.1';
    app.provide("AppGlobal", {version: '0.0.1'}); // 具体请看官网 [https://v3.cn.vuejs.org/api/application-api.html#provide]
    setupInit(app)
    router.isReady().then(() => {
        app.mount('#app')
    })
    window.$ = jquery;
    window.__app__ = app;
}

export default install;
