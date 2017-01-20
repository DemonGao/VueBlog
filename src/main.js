import Vue from 'vue'
import VueRouter from 'vue-router'		//路由

import _ from 'lodash'
/*ajax*/
import axios from 'axios'
import VueAxios from 'vue-axios'
/*管理全局变量*/
import store from './store'				//vuex

//引入element ui库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
import routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/monokai-sublime.css'
//引入
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(ElementUI)

const router = new VueRouter({
	mode: 'history',
  	routes
});

// router.redirect({
//     '/':'/home?all'
// })
// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })


router.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})


new Vue({
  el: '#app',
  router,//路由
  store,//vuex
  render: h =>h(App)
})