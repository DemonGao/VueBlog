import Vue from 'vue'
import VueRouter from 'vue-router'		//路由
import VueResource from 'vue-resource'	//ajax

import App from './App'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'

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
		path : '/article/:id',
		name : 'article',
		component : Home
	}
];
const router = new VueRouter({
	mode: 'history',
  	routes
});

new Vue({
  el: '#app',
  router,//路由
  render: h =>h(App)
})
