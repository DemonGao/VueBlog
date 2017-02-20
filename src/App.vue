<template>
    <div id="wrapper" :class="[$route.path.indexOf('admin')!=-1?'margin_t_0':'']"><!-- :class="[!islogin?'margin_t_0':'']"-->

      <div id="wrapper_content" :class="['clearfix',$route.path.indexOf('admin')==-1?'container':'content']">
            <login v-if="islogin"></login>

            <div class="row" v-if="!islogin">
                <div class="row-left col-md-2 col-sm-4">
                    <sidebar></sidebar>
                </div>
                <div  :class="['row-center','col-sm-8',$route.path.indexOf('admin')==-1?'col-md-7':'col-md-10']">
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
                <div class="'row-right' col-md-3 md-hiden" v-if="$route.path.indexOf('admin')==-1" >
                    <weather-forecast></weather-forecast>
                </div>
            </div>
        </div>

        <model></model>
    </div>
</template>
<script type="text/javascript">
  import Sidebar from './components/Sidebar'
  import WeatherForecast from './components/WeatherForecast'
  import Login from './components/Login'
  import Model from './components/Util/Model'
  export default{
    filters:{
      showlogin(){
        return false
      }
    },
    //注册组件
    components:{
      //对于自定义标签名，Vue.js 不强制要求遵循 W3C规则 （小写，并且包含一个短杠），尽管遵循这个规则比较好。
      'sidebar':Sidebar,
      'weatherForecast':WeatherForecast,
      'login':Login,
      'model' : Model
    },

    computed:{
      islogin(){
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
        loadding:true
      }
    },
    created(){
//        document.getElementById("loadding").innerHTML="加载中.... demongao";
    },
    mounted(){

      // console.log(document.getElementById("wrapper_content").clientHeight+'px');
      document.getElementById("wrapper").style.height = document.body.offsetHeight+'px';
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
  .row{
    margin-left:0;
    margin-right:0;
  }
  #wrapper{
      /*background-color:#F5F5F5;*/
      /*height: 100%;*/
      padding-top:100px;
  }
  #wrapper .container{padding-left: 0;padding-right: 0;}
  #wrapper .panel{
      box-sizing: border-box;
      width: 100%;
      height: auto;
      margin-bottom: 0px;
      background: #fff;
      border-radius: 5px;
      box-shadow: 0 0 0 1px rgba(0,0,0,.02),0 4px 10px rgba(0,0,0,.06);
  }
  #wrapper .content{
    height: 100%;
  }
  #wrapper .content .row{
    height: 100%;
  }
  #wrapper .content .row-left{
    height: 100%;
  }
  #wrapper .content .row-center{
    height: 100%;
  }
  #wrapper .row-center.col-sm-8{
    padding-left: 0;
    padding-right:0;
  }
  #wrapper .row-left.col-sm-4{
    padding-left: 0;
    /*padding-right:0;*/
  }
  .margin_t_0{
    padding-top:0 !important;
  }

</style>
