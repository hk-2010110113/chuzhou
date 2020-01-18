import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default () => {
    return new Vuex.Store({
        state: {
            title: '产能监控',
            ifBottomTabShow: false,
            showicon:false,
            ifshowTabsAndBar:false
        },
        mutations: {
            increment(state, title) {
                state.title = title
            },
            changeshowTabsAndBar(state){
                state.ifshowTabsAndBar = true
            },
            changeBarStatus(state){
                state.ifBottomTabShow = !state.ifBottomTabShow
            },
            changeIconStatus(state){
                state.showicon = !state.showicon
            },
            showBottomTabShow(state){
                state.ifBottomTabShow = false
            },
            showIcon(state){
                state.showicon = false
            }
        }
    })
}