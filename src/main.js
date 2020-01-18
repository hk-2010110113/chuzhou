// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './plugins/echarts'
// babel-polyfill使低版本浏览器支持babel-polyfill
import 'babel-polyfill'
import routers from './router/router'
import stores from './store/index'
//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/assets/style/global.styl'
//import 'normalize.css'

Vue.use(Vant);
const router = routers()
const store = stores()

Vue.config.productionTip = false

// 首先判断有没有登陆过，没有则要登陆，
// 登陆过就调到主页

router.beforeEach((to,from,next)=>{
  let username = localStorage.getItem('chuzhouUsername')
  if(to.matched.some(r => r.meta.ifneedsignIn)){   //需要登录
    if(!username){  // 没有登录，调到登录页面
      next({
        name:'Login'
      })
    }else{          // 登录了进入对应的页面
      store.commit('changeshowTabsAndBar')
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
    }
  }else{  // 不需要登录
    next()
  } 
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
