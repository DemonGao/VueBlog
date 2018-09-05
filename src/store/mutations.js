/*
	注册我们各种数据变化的方法
*/
import * as types from './mutation-types'

export default {
  //更新地图
  [types.UPDATE_MAP](state,map){
  	state.map=map;
  },
  //更新当前坐标
  [types.UPDATE_POINT](state,point){
    state.point=point;
  },
  //打开或关闭添加文章模态框
  [types.ADDARTICLE_TOGGLE_MODAL](state){
  	state.addmodal = !state.addmodal;
  },
  [types.UPDATE_ARTICLE](state,obj){

    state.article[obj.key]= obj.val;
  }

};