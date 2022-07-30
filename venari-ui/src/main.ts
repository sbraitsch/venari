import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueDragScroll from 'vue-dragscroll'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(VueDragScroll)
app.use(createPinia())
app.use(router)

app.mount('#app')
