<template>
<div class="album">
  <!--pc 端 menu-->
  <nav class="album-menu">
    <router-link to="/album" :class="{'router-link-active':$route.path =='/album'}">相册</router-link>

    <a href="javascript:;" v-if="$route.path.includes('/album/photos/')">{{$route.path.split('/')[$route.path.split('/').length - 1]}}</a>
    <!--<router-link to="/album/timeaxis" >时间轴</router-link>-->
    <!--<router-link to="/album/photos" >图集</router-link>-->
    <!--<router-link to="/case">H5作品</router-link>-->
  </nav>
  <transition
    enter-active-class="animated bounceIn"
    leave-active-class="animated bounceOut"
  >
    <router-view></router-view>
  </transition>
</div>
</template>

<script>
</script>

<style scoped="scoped">
  .album{
    position: absolute;
    width:100%;
    height:100%;

  }
  .album-menu{
    background-color: #ffffff;
    height:50px;
    padding: 10px 0;
    margin:0 -20px;
    border-bottom: 1px solid #dae0e3;
  }
  .album-menu a{
    display: block;
    min-width: 60px;
    height: 30px;
    line-height: 30px;
    margin:0 10px;
    float: left;
    color: #999;
    font-size: 1.4rem;
    text-align: center;
    -webkit-border-radius:15px;
    -moz-border-radius:15px;
    border-radius:15px;
  }
  .album-menu a.router-link-active{
    background: #cccccc;
    color: #ffffff;
  }
/*媒体查询 兼容性 小于800像素的效果*/
  @media (max-width: 800px) {
    .album-menu{
      margin:0;
    }
  }


</style>
