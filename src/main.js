import Vue from 'vue'
import VueRouter from 'vue-router'		//路由

import _ from 'lodash'
/*ajax*/
import axios from 'axios'
import VueAxios from 'vue-axios'
/*管理全局变量*/
import store from './store'				//vuex

import './assets/css/style.css'   //引入个人样式库
import './assets/js/ripple.js'
//引入element ui库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
import routes from './routes'

import './assets/css/monokai-sublime.css'   //markdown 代码块样式
import './assets/css/slide3D-1.2.1.min.css'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
//图片渐进式加载
import './assets/css/progressive-image.css'
import progressive from 'progressive-image/dist/vue'
Vue.use(progressive, {
  removePreview: true
})
// import 'animate.css'    //引入 Animate.css 动画库

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
NProgress.configure({ easing: 'ease', speed: 1000, showSpinner: true })


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
