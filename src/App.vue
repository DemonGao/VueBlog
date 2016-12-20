<template>
  <div id="wrapper">
    <div class="container">
      <div class="col-md-2 col-sm-4">
        <sidebar></sidebar>
      </div>
      <div class="col-md-8 col-sm-8">
        <router-view></router-view>
      </div>
      <div class="col-md-2">
        2
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import Sidebar from './components/Sidebar'
  export default{
    //注册组件
    components:{
      //对于自定义标签名，Vue.js 不强制要求遵循 W3C规则 （小写，并且包含一个短杠），尽管遵循这个规则比较好。
      'sidebar':Sidebar
    }
  }
</script>
<style type="text/css">
  html{
      background-color:#F5F5F5;
  }
  #wrapper{
      background-color:#F5F5F5;
      height: 100%;
      margin-top: 80px;
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
</style>
