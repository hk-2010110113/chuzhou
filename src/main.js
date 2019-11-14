// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './plugins/echarts'
import routers from './router/router'
import stores from './store/index'
//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/assets/style/global.styl'
import 'normalize.css'
Vue.use(Vant);
const router = routers()
const store = stores()

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  store.commit('increment',to.meta.title)
  if(to.meta.title == '变更详情'){
    //隐藏下面的tabs，显示返回按钮
    store.commit('changeBarStatus')
    store.commit('changeIconStatus')
  }else{
    //显示下面的tabs,隐藏返回按钮
    store.commit('showBottomTabShow')
    store.commit('showIcon')
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
