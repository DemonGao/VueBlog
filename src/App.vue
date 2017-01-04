<template>
    <div id="wrapper" :class="[islogin?'margin_t_0':'']"><!-- :class="[!islogin?'margin_t_0':'']"-->
        <div :class="['clearfix',$route.path.indexOf('admin')==-1?'container':'']">
            <login v-if="islogin"></login>
            <div class="row" v-if="$route.path.indexOf('admin')==-1">
                <div class="col-md-2 col-sm-4">
                    <sidebar></sidebar>
                </div>
                <div  :class="['content','col-sm-8',$route.path.indexOf('admin')==-1?'col-md-7':'col-md-10']">
                    <transition
                        v-on:before-enter="beforeEnter"
                        v-on:enter="enter"
                        v-on:after-enter="afterEnter"
                        v-on:enter-cancelled="enterCancelled"
                        v-on:before-leave="beforeLeave"
                        v-on:leave="leave"
                        v-on:after-leave="afterLeave"
                        v-on:leave-cancelled="leaveCancelled"
                    >
                        <router-view></router-view>
                    </transition>  
                </div>
                <div class="col-md-3 md-hiden" v-if="$route.path.indexOf('admin')==-1" >
                    <weather-forecast></weather-forecast>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
  import Sidebar from './components/Sidebar'
  import WeatherForecast from './components/WeatherForecast'
  import Login from './components/Login'
  export default{
    //注册组件
    components:{
      //对于自定义标签名，Vue.js 不强制要求遵循 W3C规则 （小写，并且包含一个短杠），尽管遵循这个规则比较好。
      'sidebar':Sidebar,
      'weatherForecast':WeatherForecast,
      'login':Login
    },
    computed:{
      islogin:function(){
          if(this.$route.path.indexOf('admin')==-1){
            console.log("用户界面");
            return false;
          }

          if(localStorage.getItem('demongao_user')!=null){
            console.log("已登录");
            return false;
          }
            
          console.log("未登录");
          return true;
      }
    },
    data(){
      return {
        
      }
    },
    mounted:function(){
      // localStorage.setItem('demongao_user','123');
      // let demongao_user = localStorage.getItem('demongao_user');
      // if(localStorage.getItem('demongao_user')!=null){
      //   this.islogin=true;
      // }
      // alert(demongao_user);
    },
    methods:{
      // 过渡进入
      // 设置过渡进入之前的组件状态
      beforeEnter: function (el) {
        el.style.opacity = 0;
        
        Velocity(el, { translateX: '10%' })
      },
      // 设置过渡进入完成时的组件状态
      enter: function (el, done) {
        // ...
        Velocity(el, { opacity: 1 ,translateX: 0}, { duration: 300 })
        Velocity(el, { fontSize: '1em' }, { complete: done })
      },
      // 设置过渡进入完成之后的组件状态
      afterEnter: function (el) {
        // ...
      },
      enterCancelled: function (el) {
        // ...
      },
      // 过渡离开
      // 设置过渡离开之前的组件状态
      beforeLeave: function (el) {
        // ...
      },
      // 设置过渡离开完成时地组件状态
      leave: function (el, done) {
        // ...
        Velocity(el, { opacity: 0}, { duration: 300 })
        done()
      },
      // 设置过渡离开完成之后的组件状态
      afterLeave: function (el) {
        // ...
      },
      // leaveCancelled 只用于 v-show 中
      leaveCancelled: function (el) {
        // ...
        }
    }
  }
</script>
<style type="text/css" scoped>
  
  #wrapper{
      background-color:#F5F5F5;
      height: 100%;
      margin-top:100px;
      overflow: hidden;
  }
  #wrapper .container{padding-left: 0;padding-right: 0}
  #wrapper .panel{
      box-sizing: border-box;
      width: 100%;
      height: auto;
      margin-bottom: 0px;
      background: #fff;
      border-radius: 5px;
      box-shadow: 0 0 0 1px rgba(0,0,0,.02),0 4px 10px rgba(0,0,0,.06);
  }
  
  .margin_t_0{
    margin-top:0 !important;
  }
 
</style>
