<template>
  <transition name="backtop">
  <div class="backtop" v-if="isshow" @click="goTop">
    <i class="iconfont icon-huidaodingbu"></i>
  </div>
  </transition>
</template>

<script>

export default{
  data(){
    return {
      isshow:false
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll)
  },
  methods:{
    handleScroll(){
      var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      var clientWidth = document.documentElement.clientWidth || document.body.clientWidth
      if(scrollTop>clientWidth){
        this.isshow = true;
      }else{
        this.isshow = false;
      }
    },
    goTop(){
      console.log(123)
      var timer = setInterval(function(){
        //获取滚动条距离顶部高度
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop ;
        var ispeed = Math.floor(-scrollTop / 7);

        document.documentElement.scrollTop = document.body.scrollTop =window.pageYOffset = scrollTop+ispeed;
        //到达顶部，清除定时器
        if (scrollTop == 0) {
          clearInterval(timer);
        };
//        isTop = true;

      },30);
    }
  }
}
</script>

<style scoped="scoped">
  .backtop{
    position: fixed;
    bottom: 40px;
    right:0;
    width:50px;
    height:50px;
    /*background-color: green;*/
    text-align: center;
  }

  .backtop-enter-active {
    transition: all .3s ease;
  }
  .backtop-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .backtop-enter, .backtop-leave-active {
    transform: translateX(20px);
    opacity: 0;
  }
  .backtop i.iconfont{
    font-size:4rem;

  }
</style>
