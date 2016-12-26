import Vue from 'vue'
import VueRouter from 'vue-router'		//路由
import VueResource from 'vue-resource'	//ajax

import App from './App'
import Home from './components/Home'
import Sign from './components/Sign'
import Article from './components/Article'
import 'bootstrap/dist/css/bootstrap.min.css'
//引入
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(VueRouter)
Vue.use(VueResource)
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
		path : '/article?id=:id',
		name : 'article',
		component : Article
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
  render: h =>h(App)
})
