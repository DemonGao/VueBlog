/*
	初始化我们的Store
*/
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
	serverurl:'http://123.207.169.191:3000/',
  // serverurl:'http://127.0.0.1:3000/',
  map:{},
  article:{
    title:'',
    content:'',
    markdown:'',
    tag:''
  },
  addmodal:false,
  	// point:{
  	// 	lng:116.404, //纬度
  	//   lat:39.915119    //经度
    // },
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
