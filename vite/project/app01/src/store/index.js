import { createStore } from 'vuex'
import axios from 'axios'


import promotions from './promotions'

const modules = {
    promotions,
    // kolejne moduły

}
const getters = {
    //zadanie lekcja 9
    GET_POSTS(state) {
        return state.posts
    }
} // getters

const actions = {

    ///zadanie lekcja 9
    async GET_POSTS_ACTION({ commit }) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log("response.data", response.data);
            commit('SET_POSTS', response.data)
        }
        catch (ex) {
            console.log("error: " + ex)
        }
    }

} // actions

const mutations = {

    ///zadanie lekcja 9
    SET_POSTS(state, posts) {
        state.posts = posts

    }
} //mutations

const state = {
    posts: []
}

export default createStore({
    modules,
})