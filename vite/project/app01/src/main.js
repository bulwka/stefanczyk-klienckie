import './assets/main.css'
import store from "./store/index.js"
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

app.use(router).mount('#app')