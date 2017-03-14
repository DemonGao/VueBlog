<template>
  <header class="header">
    <!--pc 端 menu-->
    <nav class="menu">
      <router-link :to="{name:'home',params:{tag:'all'}}"
                   :class="{'router-link-active':$route.path.indexOf('home')!=-1||$route.path.indexOf('article')!=-1}">
        首页
      </router-link>
      <router-link to="/sign">专题</router-link>
      <!--<router-link to="/case">H5作品</router-link>-->
    </nav>

    <!--移动端 menu-->
    <div class="mobil-menu">

    </div>
    <div class="search">
      <div class="placeholder">翻页太辛苦，试试直接搜索</div>
      <i class="iconfont icon-sousuo_sousuo icon-search searchBtn "></i>
    </div>
  </header>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    mounted(){
      
    },

  }
</script>

<style scoped="scoped">
  /*--------------------------------------头部导航--------------------------------------*/
  .header {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    margin-left: 300px;
    z-index: 999;
    background-color: #fff;
    border-bottom: 2px solid #eee;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  header a {
    display: block;
    min-width: 60px;
    height: 50px;
    line-height: 50px;
    float: left;
    color: #999;
    font-size: 1.4rem;
    text-align: center;
  }
/*--------------------------------------pc端 menu--------------------------------------*/
  .header .menu {
    position: relative;
    float: left;
    height: 50px;
    margin-left: 20px;
  }

  .header .menu a {
    position: relative;
    padding: 0 30px;
    width: auto;
    font-size: 1.3rem;
  }

  .header .menu a:hover, .header .menu a.router-link-active {
    color: #555;
  }

  .header .menu a:hover:after, .header .menu a.router-link-active:after {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  .header .menu a:after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #555;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  /*--------------------------------------移动端 menu--------------------------------------*/
  .mobil-menu{
    display: none;
  }
  /*--------------------------------------搜索栏样式--------------------------------------*/
  .search {
    float: right;
    border-radius: 15px;
    margin: 8px 20px;
    margin-right: 40px;;
    width: 220px;
    position: relative;
    border: 1px solid #d9d9d9;
    cursor: pointer;
  }

  .search .placeholder {
    position: absolute;
    top: 0;
    left: 10px;
    line-height: 30px;
    color: #999;
  }

  .search .icon-search {
    cursor: pointer;
  }

  .search .icon-search {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    float: right;
    border-radius: 50%;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
  }

  @media (max-width: 800px) {
    /*max-width:800   小于800px 时*/
    .header {
      margin-left: 0;
    }
    /*pc 端 menu*/
    .header .menu{
      /*display: none;*/
      margin-left:0;
    }
    .header .menu a{
      padding:0;
    }
    /*移动端 menu*/
    .mobil-menu{
      display: block;
    }
    /*搜索栏*/
    .header .search{
      position: fixed;
      top:0;
      right:0;
      margin-right: 20px;
    }
    .header .search .placeholder{
      font-size: 12px;
    }


  }

</style>
