<template>
  <div class="timeaxis panel">
    <div class="panel-heading">
      <h3>作品集</h3>
    </div>
    <div class="panel-body">
      <section>
        <h3>2016年</h3>
        <ul class="timeaxis-list">
          <li class="timeaxis-item">
            <span>10月26日 </span>
            <router-link :to="{name:'article',params:{id:123}}" >JavaScript闭包详解</router-link>
          </li>

        </ul>
        <h3>2015年</h3>
        <ul class="timeaxis-list">
          <li class="timeaxis-item">
            <span>10月26日</span>
            <router-link :to="{name:'article',params:{id:123}}" >前端工程师的自我修养</router-link>
          </li>
          <li class="timeaxis-item">
            <span>10-26</span>
            <router-link :to="{name:'article',params:{id:123}}" >UI 组件之照片墙</router-link>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<style type="text/css" scoped>
  .timeaxis .panel-heading{
    padding:10px 30px;
    background-color: #fff;
    border-bottom: 1px solid #CCC;
  }
  .timeaxis .panel-heading h3{margin-top: 10px;}
  .timeaxis .panel-body{
    padding: 10px 20px;
  }
  .timeaxis .panel-body section{
    position: relative;
    padding-left: 20px;
    border-left: 2px solid rgba(101,248,205,1);
  }
  .timeaxis .panel-body section h3{
    position: relative;
    margin: 0;
  }
  .timeaxis .panel-body section h3:before{
    position: absolute;
    left: -28.5px;
    content: '';
    width: 15px;
    height: 15px;
    top: 8px;
    background-color: rgba(101,248,205,1);
    border: 1px solid #fff;
    border-radius: 15px;
  }
  .timeaxis-list{
    position: relative;
    padding-left: 55px;
    list-style: none;
  }
  .timeaxis-list:before{
    position: absolute;
    width: 5px;
    height: 5px;
  }
  .timeaxis-list .timeaxis-item{
    position: relative;
    margin:15px 0;
    color: #999;
  }
  .timeaxis-list .timeaxis-item::before{
    position: absolute;
    left: -81px;
    content: '';
    width: 10px;
    height: 10px;
    top: 5px;
    background-color: rgba(101,248,205,1);
    border: 1px solid #fff;
    border-radius: 15px;
  }
  .timeaxis-list .timeaxis-item::after{
    position: absolute;
    left: -65px;
    content: '';
    width: 60px;
    height: 0px;
    top: 9px;
    /*background-color: rgba(101,248,205,1);*/
    border-top: 2px dotted rgba(101,248,205,1);
  }

  .timeaxis-list .timeaxis-item:nth-child(16n+1)::before{
    background-color: #99FF99;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+2)::before{
    background-color: #CCFF99;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+3)::before{
    background-color: #EEFFBB;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+4)::before{
    background-color: #FFFFBB;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+5)::before{
     background-color: #FFEE99;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+6)::before{
    background-color: #FFDDAA;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+7)::before{
    background-color: #FFC8B4;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+8)::before {
    background-color: #FFCCCC;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+9)::before {
    background-color: #FFB7DD;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+10)::before {
    background-color: #CCEEFF;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+11)::before {
    background-color: #CCDDFF;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+12)::before {
    background-color: #CCCCFF;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+13)::before {
    background-color: #CCBBFF;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+14)::before {
    background-color: #D1BBFF;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+15)::before {
    background-color: #E8CCFF;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+16)::before {
    background-color: #F0BBFF;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+1)::after{
    border-top: 2px dotted #99FF99;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+2)::after{
    border-top: 2px dotted  #CCFF99;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+3)::after{
    border-top: 2px dotted #EEFFBB;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+4)::after{
    border-top: 2px dotted #FFFFBB;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+5)::after{
    border-top: 2px dotted #FFEE99;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+6)::after{
    border-top: 2px dotted #FFDDAA;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+7)::after{
    border-top: 2px dotted #FFC8B4;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+8)::after {
    border-top: 2px dotted #FFCCCC;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+9)::after {
    border-top: 2px dotted #FFB7DD;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+10)::after {
    border-top: 2px dotted #CCEEFF;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+11)::after {
    border-top: 2px dotted #CCDDFF;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+12)::after {
    border-top: 2px dotted #CCCCFF;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+13)::after {
    border-top: 2px dotted #CCBBFF;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+14)::after {
    border-top: 2px dotted #D1BBFF;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+15)::after {
    border-top: 2px dotted #E8CCFF;
  }
  .timeaxis-list .timeaxis-item:nth-child(16n+16)::after {
    border-top: 2px dotted #F0BBFF;
  }


  .timeaxis-list .timeaxis-item a{
    text-decoration: none;
    /*color: #333;*/
  }
  .timeaxis-list .timeaxis-item a:link{
    color: darkseagreen;
  }
  .timeaxis-list .timeaxis-item a:hover{

  }
</style>
