/**
 * Created by demongao on 2017/3/20.
 */
/*
 初始化我们的Store
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
  serverurl:'http://ip:port/',
  map:{},
  article:{
    title:'',
    content:'',
    markdown:'',
    tag:''
  },
  addmodal:false,
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
