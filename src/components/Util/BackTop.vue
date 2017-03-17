<template>
  <div class="backtop">
    <div class="backtop-sub wx">
      <i class="iconfont icon-wx"></i>
      <span class="word">公众账号</span>
      <div class="ggzh">
        <em>
          扫描二维码关注 前端Demon
          <br>
          公众账号
        </em>
      </div>
    </div>
    <transition name="backtop">
      <div class="backtop-sub gotop" v-show="isshow" @click="goTop">
        <i class="iconfont icon-huidaodingbu"></i>
        <span class="word">返回顶部</span>
      </div>
    </transition>
  </div>

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
      if(scrollTop>300){
        this.isshow = true;
      }else{
        this.isshow = false;
      }

    },
    goTop(){
      document.documentElement.scrollTop = document.body.scrollTop =window.pageYOffset = 0;
//      this.timer = setInterval(()=>{
//        //设置回滚状态
//        this.backing = true;
//        //获取滚动条距离顶部高度
//        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop ;
//        var ispeed = Math.floor(-scrollTop / 10);
//
//        document.documentElement.scrollTop = document.body.scrollTop =window.pageYOffset = scrollTop+ispeed;
//        //到达顶部，清除定时器
//        if (scrollTop == 0) {
//          clearInterval(this.timer);
//
//        };
//
//      },30);
    }
  }
}
</script>

<style type="text/css" scoped="scoped">
  .backtop{
    position: fixed;
    bottom: 3rem;
    right: 1.7rem;
    width: 4rem;
    height: 8.1rem;;
    /*background-color: green;*/
    text-align: center;
    z-index:99;

    -webkit-border-radius:5px;
    -moz-border-radius:5px;
    border-radius:5px;
    /*overflow: hidden;*/
  }

  .backtop-enter-active {
    transition: all .5s ease;
  }
  .backtop-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .backtop-enter, .backtop-leave-active {
    transform: translateX(20px);
    opacity: 0;
  }
  .backtop-sub{
    width: 4rem;
    height:4rem;
    line-height:4rem;
    background-color: #70ACB1;
    /*background-color: #C6F1E7;*/
    position: relative;

    opacity: .5;
  }
  .backtop-sub:hover{
    background-color: #59606D;
    opacity: 1;
  }
  .backtop-sub.gotop{
    position:absolute;
    top:4.1rem;
    left:0;
    z-index:999999999;
  }
  .backtop-sub:hover .iconfont{

    opacity: 0;
  }
  .backtop-sub .word{
    position: absolute;
    top:0;
    left:calc(50% - 1em);
    opacity: 0;
    display: block;
    width:2em;
    line-height: 2rem;
    height:4rem;

    color:#ffffff;
  }
  .backtop-sub:hover .word{
    opacity: 1;
  }
  .backtop-sub i.iconfont{
    display: inline-block;
    width:4rem;
    height:4rem;
    color:#dfdfdf;
    font-size:3rem;
    /*line-height: 4rem;;*/

  }
  .backtop-sub.gotop,.backtop-sub .word,.backtop-sub i.iconfont,.backtop-sub i.iconfont:hover{
    cursor: pointer;
    -webkit-transition: .4s all;
    -moz-transition: .4s all;
    -ms-transition: .4s all;
    -o-transition: .4s all;
    transition: .4s all;
  }

  /*公共账号 样式*/
  .backtop-sub.wx .ggzh{
    position: absolute;
    top:-16rem;
    left: -16rem;
    width: 16rem;
    height: 20rem;

    background: #fff url(./../../assets/img/wx.jpg) no-repeat 50% 0;
    background-size: 16.5rem;
    padding-top: 16.5rem;;
    opacity: 0;
    box-shadow: -2px 0 3px 3px rgba(0, 0, 0, .1);
    -webkit-transform: scale(0);
    -webkit-transform-origin: 100% 70%;
    -moz-transform-origin: 100% 70%;
    transform-origin: 100% 70%;
    -webkit-transition: all ease 0.3s;
    transition: all ease 0.3s;
  }
  .backtop-sub.wx:hover .ggzh{
    opacity: 1;
    -webkit-transform: scale(1);
    -webkit-transform-origin: 100% 70%;
    -moz-transform-origin: 100% 70%;
    transform-origin: 100% 70%;
    -webkit-transition: all ease 0.3s;
    transition: all ease 0.3s;
  }
  @media (max-width: 800px) {
    .backtop{
      right: 0rem;;
    }
    .backtop-sub.wx{
      display: none;
    }
  }
</style>
