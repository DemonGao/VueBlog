<template>
  <transition

    enter-active-class="animated bounceIn"
    leave-active-class="animated bounceOut"
  >
    <div class="container" v-if="searchOpt.isshow">
    <!--<div class="closebtn" @click="searchOpt.isshow = !searchOpt.isshow">-->
    <div class="closebtn" @click="searchOpt.isshow = !searchOpt.isshow">
      <i class="iconfont icon-guanbi"></i>
    </div>
    <header>
      <input
        type="search"
        placeholder="Demon 帮您搜索..."
        value=""
        class="search-input"
        name="keyword"
        autocomplete="off"
        v-model="searchVal"
        @keyup.enter="getArticles"
      >
      <i class="iconfont icon-sousuo_sousuo icon-search searchBtn " @click="getArticles"></i>
      <slot name="header"></slot>
    </header>
    <div class="content">
      <!--等待-->
      <div class="loading" v-show="loading">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
      <!--数据-->

      <!--<transition-group tag="ul" class="list"-->
                        <!--enter-active-class="animated fadeIn"-->
                        <!--leave-active-class="animated fadeOut "-->
                        <!--v-show="!loading"-->
                        <!--v-if="!msg"-->
      <!--&gt;-->
        <!--<li v-for="item in orderedArticles" class="item" v-bind:key="item">-->
          <!--<h1>{{item.title}}<span>{{new Date(item.date).Format("YYYY-MM-DD")}}</span></h1>-->
          <!--<div class="item-content" v-html="item.content"></div>-->
          <!--<div class="item-footer">-->
            <!--<div class="icon-tags">-->
              <!--&lt;!&ndash;<i class="iconfont icon-liulan"></i>&ndash;&gt;-->
              <!--<router-link class="icon-tags-title" :to="{name:'article',params:{id:item._id}}" tag="span">阅读:{{item.view}}</router-link>-->

            <!--</div>-->
            <!--<router-link class="more" :to="{name:'article',params:{id:item._id}}" tag="span">查看更多</router-link>-->
          <!--</div>-->
          <!--<section class="mask"></section>-->
        <!--</li>-->
      <!--</transition-group>-->
      <ul class="list"
                        v-show="!loading"
                        v-if="!msg"
      >
        <li v-for="item in orderedArticles" class="item" >
          <h1>{{item.title}}<span>{{new Date(item.date).Format("YYYY-MM-DD")}}</span></h1>
          <div class="item-content" v-html="item.content"></div>
          <div class="item-footer">
            <div class="icon-tags">
              <!--<i class="iconfont icon-liulan"></i>-->
              <router-link class="icon-tags-title" :to="{name:'article',params:{id:item._id}}" tag="span">阅读:{{item.view}}</router-link>

            </div>
            <!--<router-link class="more" :to="{name:'article',params:{id:item._id}}" tag="span">查看更多</router-link>-->
            <span class="more" @click="seemore(item._id)" >查看更多</span>
          </div>
          <section class="mask"></section>
        </li>
      </ul>
      <p v-else="!msg">{{msg}}</p>
    </div>
    <footer>
      <slot name="button"></slot>
    </footer>


  </div>
  </transition>
</template>

<script type="text/javascript">
  export default{
    props: {
      searchOpt:{

      },
    },
    computed: {
      orderedArticles(){
        return _.orderBy(this.articles, 'date', 'desc')
      }
    },
    data(){
      return {
        loading:false,
        searchVal:'',
        articles: [],
        msg:''
      }
    },
    mounted(){
//      this.ajax();
    },
    methods:{
      getArticles(){
        this.articles = [];
        var self =this;
        this.loading = true;
        this.axios.get(this.$store.state.serverurl + 'api/getArticlesByTitle', {
          params: {
            title:this.searchVal
          }
        }).then((response) => {

          var data = response.data;
          if (data.status) {
            this.articles = data.data;
            this.loading = false;
            this.msg = false
          } else {
            this.loading = false;
//
            console.log('没有你想要的查找的文章...');
            this.msg = "没有你想要的查找的文章..."
          }
        })
      },
      seemore(id){
        this.$router.push({name:'article',params:{id}});
        this.searchOpt.isshow = false;
      }
    }

  }
</script>

<style type="text/css" scoped="scoped">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .container{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height:100%;
    background-color:rgba(255,255,255,.9);
    z-index:999
  }
  /*----------------------------关闭按钮----------------------------*/
  .closebtn{
    position: absolute;
    right: 0;
    top:-10px;
  }
  .closebtn i{
    /*float: right;*/
    font-size:40px;
  }
  /*----------------------------头部(搜索栏)----------------------------*/
  header{
    width: 500px;
    margin:50px auto 0;
    height: 40px;
    z-index: 10;
    border-bottom: 2px solid #666;
    position: relative;
  }
  header>i.iconfont{
    position: absolute;
    top:0;
    right:0;
    font-size: 24px;
    font-weight:bold;
  }

  .search-input{
    width: 450px;
    height: 38px;
    padding: 0 24px;
    border: none;
    font-size: 1.6rem;
    outline: none;
    -webkit-appearance: none;
    background-color: transparent;
  }
  /*----------------------------内容部分----------------------------*/
  .content{
    width: 65%;
    height:calc(100% - 40px);
    margin:20px auto 0;
    /*position: relative;*/
  }

  .list {
    height:92%;
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    overflow-y: auto;
  }

  .list .item {
    position: relative;
    padding: 0 0 10px;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    border-radius: 5px;

    border-top:2px dashed #000000;
  }

  /*.home .panel-body ul li:nth-child(1){
        margin-top: 10px;
    }*/
  /*.list .item:after {*/
    /*content: '';*/
    /*position: absolute;*/
    /*bottom: 1px;*/
    /*left: 0;*/
    /*height: 2px;*/
    /*width: 0;*/
    /*background: #70ACB1;*/
    /*-webkit-transition: all .4s ease-in;*/
    /*transition: all .4s ease-in;*/

  /*}*/

  .list .item:hover:after {

    width: 100%;

    -webkit-transition: all .4s ease-in;
    transition: all .4s ease-in;
  }

  .list .item > h1 {
    position: relative;
    padding: 20px 0;
    font-size: 26px;
    font-weight: bold;
    color: #59606D;;
  }

  .list .item>h1::before {
    content: ' ';
    position: absolute;
    left: -30px;
    top: 0;
    height: 100%;
    width: 4px;
    background-color: #70ACB1;

  }

  .list .item>h1 span {
    float: right;
    color: #59606D;
    font-size: 16px;
  }
  /*----------------------文章部分----------------------*/

  .list .item .item-content {
    position: relative;
    /*padding: 10px 0 30px;*/
    padding: 0 30px;
    /*border-bottom: 2px dashed #ccc;*/
    color: #777;
    line-height: 35px;
    /*padding-bottom: 10px;*/
    max-height: 205px;
    overflow: hidden;
  }


  .list .item .item-content img {
    max-width: 100%;
  }
  .list .item .item-content h1,.list .item .item-content h2,.list .item .item-content h3,.list .item .item-content h4{
    font-size:16px !important;
    color: red;
  }
  .item-footer {
    position: relative;
    padding-top: 10px;
  }
  /*---------------文章页脚----------------*/


  .item-footer .icon-tags .icon-tags-title {

    display: inline-block;
    position: relative;
    height: 18px;
    line-height: 18px;
    margin-left: 18px;
    padding: 0 10px;
    color: #ffffff;
    background-color: rgb(186, 143, 108);
    font-size:12px;
    z-index: 2;
  }

  .item-footer .icon-tags .icon-tags-title:after {
    position: absolute;
    top: 7px;
    left: 2px;
    height: 4px;
    width: 4px;
    content: ' ';
    border-radius: 4px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .3);
    background-color: #fff;
  }

  .item-footer .icon-tags .icon-tags-title:before {
    position: absolute;
    left: -18px;
    content: ' ';
    border: 9px solid transparent;
    border-right-color: rgb(186, 143, 108);
  }

  .item-footer .icon-tags .icon-tags-title:hover {
    background-color: rgba(186, 143, 108, .7);
    cursor: pointer;
  }

  .item-footer .icon-tags .icon-tags-title:hover:before {
    border-right-color: rgba(186, 143, 108, .7);
  }

  .item-footer .icon-tags .icon-tags-title, .item-footer .icon-tags .icon-tags-title:before, .item-footer .icon-tags .icon-tags-title:hover, .item-footer .icon-tags .icon-tags-title:hover:before {
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
  }

  .item-footer .more {
    display: inline-block;
    position: absolute;
    top: 10px;
    right: 10px;
    box-sizing: border-box;
    border-radius: 2px;
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    color: #fff;
    background-color: rgba(0, 0, 0, .5);
    padding: 0 8px;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;

    z-index: 2;
  }

  .item-footer .more:after {
    content: '》';
    width: 10px;
    height: 10px;
    margin-left: 5px;
  }

  .item-footer .more:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, .4);
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
  }
  /*----------------------------页脚部分----------------------------*/
  footer{
    padding:0 20px;
  }
  footer button{
    float: right;
  }
  /*----------------------------自适应区域----------------------------*/

  @media (max-width: 800px) {
    /*max-width:800   小于800px 时*/
    header{
      width:80%;
    }
    .search-input{
      width:100%;
    }
    .content{
      width:90%;
      /*padding:;*/
    }
    .list .item>h1 span {
      display: none;
    }
  }
</style>
