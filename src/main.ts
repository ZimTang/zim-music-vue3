import { createApp } from 'vue'
import '@/assets/styles/reset.scss'
import '@/assets/styles/base.scss'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from '@/router/index'
import piniaInstance from '@/stores/index'

const app = createApp(App)

app.use(router).use(ElementPlus).use(piniaInstance).mount('#app')
