import './assets/main.css'

import { createApp } from 'vue'
import App from './App5.vue'

import { createStore } from 'vuex'

const store = createStore({
    state: {
        c: 0
    },

    mutations: {
        plus(state) {
            this.state.c++
        },
        minus(state) {
            this.state.c--
        },
        changeInStore(state, id) {
            this.state.c = id // -> 5
        }
    }
})

createApp(App).use(store).mount('#app')
