<template>
  <nav class="panel sm-hiden">
    <div class="panel-heading">
      <a class="logo">
        <img src="../../assets/img/logo.jpg" >
      </a>
      <router-link to="/admin/login" tag="h1" class="text-center">Demon Gao</router-link>
      <span class="text-center writing">做一个敢拼敢闯敢干的程序猿</span>
    </div>

    <!--<div class="panel-body">-->
      <!--<ul>-->
        <!--<li>-->
          <!--<router-link :to="{name:'home',params:{tag:'all'}}" :class="{'router-link-active':$route.path.indexOf('home')!=-1||$route.path.indexOf('article')!=-1}">文章</router-link>-->
        <!--</li>-->
        <!--<li><router-link to="/sign">标签</router-link></li>-->
        <!--&lt;!&ndash;<li><router-link to="/timeaxis">时间轴</router-link></li>&ndash;&gt;-->
        <!--<li><router-link to="/case">作品集</router-link></li>-->
      <!--</ul>-->
    <!--</div>-->
    <footer class="footer">
      <aside class="panel-otherUrl">
        <a href="https://juejin.im/user/582a61fc0ce463006cd1350c" target="_blank"><img class="juejin" src="../../assets/img/juejin.png"/></a>
        <a href="https://github.com/demongao" target="_blank"><i class="iconfont icon-github github"></i></a>
        <!--<a href="https://segmentfault.com/u/demongao" target="_blank"><i class="iconfont icon-weixin wx"></i></a>-->
        <a href="http://www.jianshu.com/u/b82bf52ac021" target="_blank"><i class="iconfont icon-jian"></i></a>
        <a href="https://segmentfault.com/u/demongao" target="_blank"><i class="iconfont icon-sf sf"></i></a>

      </aside>
      <p>copyright © 2016-2020 DemonGao</p>
      <p>鲁ICP备16039275号</p>
    </footer>
    <!--轮播图-->
    <div class="container3D turn">
      <div class="wrapper3D"></div>
      <div class="slide3D-pagination"  style="display: none"></div>
      <div class="slide3D-prev-button" style="display: none"></div>
      <div class="slide3D-next-button" style="display: none"></div>
    </div>
    <!--蒙版-->
    <div class="mask"></div>
  </nav>
</template>

<script>
  import '../../assets/js/slide3D-1.2.1.min.js';
  export default{
    data(){
      return {
        collapse_show:false
      }
    },
    methods:{
      click:function(){
        var el = document.getElementById("bs-example-navbar-collapse-1");
        if(this.collapse_show){

          Velocity(el, { /*translateY: '-186px',*/opacity:0 }, { duration: 300 })
        }else{

          Velocity(el, { /*translateY: '0',*/opacity:1 }, { duration: 300 })
        }

        this.collapse_show = !this.collapse_show;
      },
    },
    mounted(){
      //打字动画
      $$('.writing').forEach(function(text){
        var len = text.textContent.length,
          s = text.style;
        s.width = len + 'ch';
        s.animationTimingFunction = "steps("+len+"),steps(1)";
      })

      //轮播动画
      var mySlide3 = new Slide3D('.turn', {
//        width: width,
//        height:height,
        effect: 'turn',  // flip | turn | slide | flat | fragment
        sources: [
          './../../../static/img/sidebar/t_nw01.jpg',
          './../../../static/img/sidebar/t_nw02.jpg',
          './../../../static/img/sidebar/t_nw03.jpg',
          './../../../static/img/sidebar/t_nw04.jpg',
          './../../../static/img/sidebar/t_nw05.jpg',
          './../../../static/img/sidebar/t_nw06.jpg',
          './../../../static/img/sidebar/t_nw07.jpg',
          './../../../static/img/sidebar/t_nw08.jpg'
        ],
        box:{
          rows: 10,  // 切割行
          cols: 5  // 切割列
        },
        pagination: false,  // 是否添加分页器
        paginationClickable: false,
        autoplay: 2000,
//				autoplayDisableOnInteraction : false
      });
    }
  }
</script>

<style scoped="scoped">

  /*-----------------------------------DemonGao + logo + 背景色-----------------------------------*/
  .panel .panel-heading{
    /*height: 180px;*/
    position: relative;
    top: 100px;
    z-index:999;
  }
  /*-----------------logo-----------------*/
  .panel-heading .logo{

    width: 128px;
    height:128px;
    margin: 0 auto;
    /*background: #88acdb;*/
    -webkit-transition: all .2s ease-in;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    text-align: center;
    perspective: 1000px;
    -webkit-perspective: 1000px;
  }
  .panel .panel-heading img{

    border-radius: 100%;
    width:100%;
    /*border:2px solid #ffffff;*/
    -webkit-box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5), 0 2px 24px 10px rgba(0, 0, 0, 0.55);
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5), 0 2px 24px 10px rgba(0, 0, 0, 0.55);
    border-radius: 50%;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
  }
  /*-----------------Demon Gao-----------------*/
  .panel .panel-heading h1,.panel .panel-heading span{
    color: #dfdfdf;
  }
  .panel .panel-heading h1{
    /*position: relative;*/
    margin: 45px 0 0;
    font-size: 45px;;
    text-align: center;
    font-family: Roboto,serif;
    font-weight: 600;


  }
  /*.panel.sidebar .panel-heading h1:after{*/
    /*content: '';*/
    /*position: absolute;*/
    /*bottom: -5px;*/
    /*left: 0;*/
    /*height: 1px;*/
    /*width: 100%;*/
    /*background: rgba(0,0,0,.4);*/
    /*-webkit-transition: all .2s ease-in;*/
    /*transition: all .2s ease-in;*/
    /*-webkit-transform: scaleX(1);*/
    /*transform: scaleX(1);*/
  /*}*/
  /*.panel.sidebar .panel-heading h1:hover::after{*/
    /*-webkit-transform: scaleX(0);*/
    /*transform: scaleX(0)*/
  /*}*/
  /*-----------------打字动画-----------------*/
  .panel .panel-heading span{
    display: block;
    margin: 30px auto;
    width: 23.5ch;
    color: #dfdfdf;
  }

  .panel .panel-heading span.writing{
    overflow:hidden;
    white-space: nowrap;
    border-right: 1px solid transparent;
    animation: typing 10s  infinite, caret 1s  infinite;

  }
  @keyframes typing{
    0%{ width:0;}
    20%{ width:23.5ch; }
    100%{ width:23.5ch; }
  }
  @keyframes caret{
    50% { border-color:currentColor;}
  }
  /*-----------------------------------导航栏标题-----------------------------------*/
  /*.panel.sidebar .panel-body{*/
    /*!*position: absolute;*!*/
    /*!*bottom: 300px;*!*/
    /*width:100%;*/
    /*padding-left: 0px;*/
    /*padding-right: 0px;*/
    /*margin:60px 0;*/

  /*}*/
  /*.panel.sidebar .panel-body ul{*/
    /*list-style: none;*/
    /*padding-left: 0;*/
  /*}*/
  /*.panel.sidebar .panel-body ul li{*/

  /*}*/
  /*.panel .panel-body ul li a{*/
    /*box-sizing: border-box;*/
    /*display: block;*/
    /*width:100%;*/
    /*height: 100%;*/
    /*padding: 10px;*/
    /*color: #333;*/
    /*text-align: center;*/

  /*}*/
  /*.panel .panel-body ul li a.router-link-active{*/
    /*color:#FFF;*/
    /*text-decoration: none;*/

    /*background-color: #70ACB1;*/
  /*}*/



  /*-----------------------------------页脚-----------------------------------*/
  footer.footer{
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0;
    width: 100%;
    text-align: center;
    background: transparent;
    border: none;
    box-shadow: none;
    z-index:999;
    color: #999999;
  }
  /*-----------------GitHub SF 知乎 简书 -----------------*/
  .panel .panel-otherUrl{
    position: absolute;
    bottom: 100px;
    width:100%;

    display: -webkit-flex; /* Safari */
    display: flex;
    flex-flow:row nowrap;
    -webkit-flex-flow: row nowrap;
    justify-content: space-around;
    -webkit-justify-content: space-around;

  }
  .panel .panel-otherUrl a{

    text-decoration: none;
    /*line-height: 60px;*/
  }
  .panel .panel-otherUrl a i{
    font-size:40px;
  }
  .panel .panel-otherUrl a i.github{
    color: #000;
  }
  .panel .panel-otherUrl a i.sf{
    color:#419866;
  }
  .panel .panel-otherUrl a i.wx{
    color:#60b852;
  }
  .panel .panel-otherUrl a i.icon-jian{
    font-size:40px;
    color: #ea6f5a;
  }
  .panel .panel-otherUrl a img.juejin{
    width: 38px;
    height:38px;
    margin:12px 0;
    border-radius: 10px;
  }
  /*-----------------------------------轮播图动画-----------------------------------*/
  .slide3D img{
    width: 100%;
  }
  .container3D{
    background: #eee;
    /*margin:10px;*/
    float:left;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    /*padding-top: 220px;*/
    background: rgba(0, 0, 0, 1);
  }

  .mask{
    position: absolute;
    top:0;
    width:100%;
    height:100%;
    /*background-color:rgba(255,255,255,.3);*/
    background-color:rgba(0,0,0,.3);
    z-index:998;
  }
</style>
