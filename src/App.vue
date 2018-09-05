<template>
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
</template>
<script type="text/javascript">



  export default{
    data(){
      return {
        loadding:true,
        model:false,
      }
    },
    methods:{
      // 过渡进入
      // 设置过渡进入之前的组件状态
      beforeEnter: function (el) {
        el.style.opacity = 0;

//        Velocity(el, { translateX: '10%' })

      },
      // 设置过渡进入完成时的组件状态
      enter: function (el, done) {
        // ...
        Velocity(el, { opacity: 1 }, { duration: 400 })

//        Velocity(el, { translateX: '-3%',fontSize: '1em' })
//        Velocity(el, { translateX: '3%',fontSize: '1em' })
//        Velocity(el, { translateX: '-2%',fontSize: '1em' })
//        Velocity(el, { translateX: '2%',fontSize: '1em' })
//        Velocity(el, { translateX: '-1%',fontSize: '1em' })
//        Velocity(el, { translateX: '1%',fontSize: '1em' })
//        Velocity(el, { translateX: '0%',fontSize: '1em' ,opacity: 1 })

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
<style type="text/css" scoped="scoped"></style>
