<template>
  <div class="container">
    <!--侧导航-->
    <sidebar class="sidebar"></sidebar>

    <article class="clearfix">
      <!--顶部导航-->
      <!--<top-menu></top-menu>-->
      <!--路由页面-->
      <div class="content">
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
    </article>
  </div>
</template>
<script>
  import Sidebar from './layout/SideBar'
  export default{
    //注册组件
    components: {
      //对于自定义标签名，Vue.js 不强制要求遵循 W3C规则 （小写，并且包含一个短杠），尽管遵循这个规则比较好。
      'sidebar': Sidebar,

    },
    data(){
      return{

      }
    },
    mounted(){


    },
    methods: {
      // 过渡进入
      // 设置过渡进入之前的组件状态
      beforeEnter: function (el) {
        el.style.opacity = 0;

        Velocity(el, {translateX: '10%'})
      },
      // 设置过渡进入完成时的组件状态
      enter: function (el, done) {
        // ...
        Velocity(el, {opacity: 1, translateX: 0}, {duration: 300})
        Velocity(el, {fontSize: '1em'}, {complete: done})
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
        Velocity(el, {opacity: 0}, {duration: 300})
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
<style type="text/css" scoped="scoped">

  /*总布局*/
  .container {
    min-height: 100%;
    /*position: absolute;*/
  }

  /*左边布局*/
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    min-height: 700px;
    color: #59606D;
  }

  /*右边布局*/
  article {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 300px;
    /* margin-right: 20px; */
    min-height: 100%;
    width: calc(100% - 300px);
  }
  /*--------------------------------------路由页面--------------------------------------*/
  article .content {
    position: absolute;
    top: 0;
    /*margin-top: 60px;*/
    width: 100%;
    height:100%;
    /*background-color: #ffffff;*/
    /*top: 60px;;*/
  }

  @media (max-width: 800px) {
    /*max-width:800   小于800px 时*/
    article {
      width:100%;
      margin-left:0;
      margin-right:0;
    }



    .sidebar {
      display: none;
    }




  }
</style>
