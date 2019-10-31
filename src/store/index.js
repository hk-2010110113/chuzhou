import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default () => {
    return new Vuex.Store({
        state: {
            title: '产能监控'
        },
        mutations: {
            increment(state,title) {
                state.title = title
            }
        }
    })
}