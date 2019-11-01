import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default () => {
    return new Vuex.Store({
        state: {
            title: '产能监控',
            ifBottomTabShow: false,
            showicon:false
        },
        mutations: {
            increment(state, title) {
                state.title = title
            },
            changeBarStatus(state){
                state.ifBottomTabShow = !state.ifBottomTabShow
            },
            changeIconStatus(state){
                state.showicon = !state.showicon
            }
        }
    })
}