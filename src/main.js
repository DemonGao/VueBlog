import Vue from 'vue'
import VueRouter from 'vue-router'		//路由
import VueResource from 'vue-resource'	//ajax

import App from './App'
import Article from './components/Article'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)
Vue.use(VueResource)
/*路由配置*/
const routers = [
	{
		path : '/',
		component : Article
	},
	{
		path : '/article',
		component : Article
	}
];
const router = new VueRouter({
	mode: 'history',
  	routers
});

new Vue({
  el: '#app',
  router,//路由
  render: h =>h(App)
})
