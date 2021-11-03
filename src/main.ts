import { createApp } from 'vue'
import router from '@src/router/index'
import { key, store } from '@src/store'
import App from './App.vue'
import '@src/style/basic.styl'

const app = createApp(App)
app.use(router).use(store, key).mount('#app')
