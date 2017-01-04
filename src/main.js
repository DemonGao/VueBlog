import Vue from 'vue'
import VueRouter from 'vue-router'		//路由
/*ajax*/
import axios from 'axios'
import VueAxios from 'vue-axios'
/*管理全局变量*/
import store from './store'				//vuex

import App from './App'
import Home from './components/Home'
import Sign from './components/Sign'
import Article from './components/Article'
import TimeAxis from './components/TimeAxis'

import Admin from './components/Admin'

import 'bootstrap/dist/css/bootstrap.min.css'
//引入
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
/*路由配置*/
const routes = [
	{
		path : '/',
		component : Home
	},
	{
		path : '/home',
		component : Home
	},
	{
		path : '/sign',
		component : Sign
	},
	{
		path : '/article/:id',
		name : 'article',
		component : Article
	},
	{
		path : '/timeaxis',
		component : TimeAxis
	},



	//后台管理端
	{
		path : '/admin',
		component : Admin
	}
];
const router = new VueRouter({
	mode: 'history',
  	routes
});


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