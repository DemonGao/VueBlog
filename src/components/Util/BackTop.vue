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
      isshow:false,
      timeer:null,
      backing:false
    }
  },
  mounted(){
    var self = this;
//    var throttled = _throttle(this.handleScroll, 250)
    window.addEventListener('scroll', this.handleScroll);
//    /***********************
//     * 函数：判断滚轮滚动方向
//     * 作者：walkingp
//     * 参数：event
//     * 返回：滚轮方向 1：向上 -1：向下
//     *************************/
//    var scrollFunc=function(e){
//      var direct=0;
//      var value;
//      e=e || window.event;
//
//      if(e.wheelDelta){//IE/Opera/Chrome
//        value=e.wheelDelta;
//      }else if(e.detail){//Firefox
//        value=e.detail;
//      }
//      if(value !=0){
//        //判断是否在回滚中
//        if(self.backing){
//          //正在回滚 则清楚定时器,停止回滚
//          clearInterval(self.timer);
//        }
//      }
//      console.log(value)
//    }
//    /*注册事件*/
//    if(document.addEventListener){
//      document.addEventListener('DOMMouseScroll',scrollFunc,false);
//    }//W3C
//    window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari

  },
  methods:{
    handleScroll(){
      var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      var clientWidth = document.documentElement.clientWidth || document.body.clientWidth
      if(scrollTop>0){
        this.isshow = true;
      }else{
        this.isshow = false;
      }

    },
    goTop(){
      this.timer = setInterval(()=>{
        //设置回滚状态
        this.backing = true;
        //获取滚动条距离顶部高度
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop ;
        var ispeed = Math.floor(-scrollTop / 10);

        document.documentElement.scrollTop = document.body.scrollTop =window.pageYOffset = scrollTop+ispeed;
        //到达顶部，清除定时器
        if (scrollTop == 0) {
          clearInterval(this.timer);

        };

      },30);
    }
  }
}
</script>

<style scoped="scoped">
  .backtop{
    position: fixed;
    bottom: 4rem;
    right: 3rem;;
    width:5rem;
    height:5rem;
    /*background-color: green;*/
    text-align: center;
    z-index:999999;
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
    color:#70ACB1;
    font-size:4rem;
    -webkit-transition: .5s all;
    -moz-transition: .5s all;
    -ms-transition: .5s all;
    -o-transition: .5s all;
    transition: .5s all;
  }
  .backtop i.iconfont:hover{
    cursor: pointer;
    font-size:5rem;
    -webkit-transition: .5s all;
    -moz-transition: .5s all;
    -ms-transition: .5s all;
    -o-transition: .5s all;
    transition: .5s all;
  }


  @media (max-width: 800px) {
    .backtop{
      right: 0rem;;
    }
  }
</style>
