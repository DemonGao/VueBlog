<template>
  <div class="home">
    <div class="loading" v-show="loading">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
    <div class="panel-body" v-show="!loading">
      <div class="sortbar">
        <div :class="['sortbtn',sortType === 'date' ? 'active' :'']" @click="sortAjax('date','desc')">
          <i class="iconfont icon-fabushijian" style="color: #47adf8;"></i>
          发布
        </div>
        <div :class="['sortbtn',sortType === 'edit_date' ? 'active' :'']" @click="sortAjax('edit_date','desc')">
          <i class="iconfont icon-updata" style="color: #419866;"></i>
          更新
        </div>
        <div :class="['sortbtn',sortType === 'view' ? 'active' :'']" @click="sortAjax('view','desc')">
          <i class="iconfont icon-icon" style="color: red;"></i>
          热度
        </div>
      </div>
      <ul class="home-list">
        <li v-for="item in articles" class="home-item">
          <!--{{item}}-->
          <h1>{{item.title}}<span>{{new Date(item.date).Format("YYYY-MM-DD")}}</span></h1>
          <div class="home-item-content" v-html="item.content"></div>
          <div class="home-item-footer">
            <div class="icon-tags">
              <i class="iconfont icon-biaoqian"></i>
              <router-link class="icon-tags-title" to="/sign" tag="span">{{item.tag}}</router-link>
            </div>
            <router-link class="more" :to="{name:'article',params:{id:item._id}}" tag="span">查看更多</router-link>
          </div>
          <section class="mask"></section>
        </li>
      </ul>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="total">
        <!--layout="total, sizes, prev, pager, next, jumper"-->
      </el-pagination>
    </div>
  </div>
</template>
<script type="text/javascript">


  export default{
    data(){
      return {
        articles: [],
        pageSizes: [2, 4, 6],
        pageSize: 8,
        currentPage: 1,
        total: 0,
        loading: true,
        sortObj: undefined,
        sortType: 'date'
      }
    },
    computed: {},
    mounted(){
//      window.addEventListener('scroll',this.handleScroll)
      var ua = navigator.userAgent;
      var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
        isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
        isAndroid = ua.match(/(Android)\s+([\d.]+)/),
        isMobile = isIphone || isAndroid;
      //判断
      if (isMobile) {
        this.pageSize = 10;
      }
      this.ajax();
    },
    methods: {
      sortAjax(key, value){
        let obj = {};
        obj[key] = value;
        this.sortType = key;
        this.sortObj = JSON.stringify(obj);
        this.ajax();
      },
      handleSizeChange(val) {
//        console.log(`每页 ${val} 条`);
        this.pageSize = val;
        this.ajax();
      },
      handleCurrentChange(val) {
//        console.log(`当前页: ${val}`);
        this.currentPage = val;
        this.ajax();
        this.goTop();
      },
      ajax(){
        this.loading = true;
        if (!this.$route.params.tag) {
          this.$route.params.tag = 'all';
        }
        this.axios.get(this.$store.state.serverurl + 'api/getArticles', {
          params: {
            tag: this.$route.params.tag,
            page: this.currentPage,
            pageSize: this.pageSize,
            sortObj: this.sortObj
          }
        }).then((response) => {
          var data = response.data;
          if (data.status) {
            this.articles = data.data.results;
            this.total = data.data.total;
            this.loading = false;
          } else {
            alert(data.msg);
          }
        })
      },
      goTop(){
        var timer = setInterval(function () {
          //获取滚动条距离顶部高度
          var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
          var ispeed = Math.floor(-scrollTop / 7);

          document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = scrollTop + ispeed;
          //到达顶部，清除定时器
          if (scrollTop == 0) {
            clearInterval(timer);
          }
          ;
//        isTop = true;

        }, 30);
      }
    }
  }
</script>
<style type="text/css">
  .home {

  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0);
  }

  .home .panel-heading {
    padding: 10px 30px;
    background-color: #fff;

  }

  .home .panel-heading h3 {
    margin-top: 10px;
  }

  .home .panel-body {
    padding: 0;
  }

  .home .panel-body .sortbar {
    display: box; /* OLD - Android 4.4- */
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Chrome */
    display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */
    /* 09版 */
    -webkit-box-orient: horizontal;
    /* 12版 */
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    -o-flex-direction: row;
    flex-direction: row;

    justify-content: flex-end;
    -webkit-justify-content: flex-end;
  }

  .home .panel-body .sortbar .sortbtn {
    cursor: pointer;
    padding: 5px 10px;
    margin: 5px 10px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    overflow: hidden;
  }

  .home .panel-body .sortbar .sortbtn:hover,.home .panel-body .sortbar .sortbtn.active {
    background-color: rgba(255,255,255,.7);
  }

  .home .panel-body .home-list {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    background-color: #F5F5F5;
  }

  .home .panel-body .home-list .home-item {
    position: relative;
    padding: 0 30px 10px;
    border-top: 1px solid #eee;
    background-color: #fff;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .02), 0 4px 10px rgba(0, 0, 0, .06);
  }

  /*.home .panel-body ul li:nth-child(1){
        margin-top: 10px;
    }*/
  .home .panel-body .home-list .home-item:after {
    content: '';
    position: absolute;
    bottom: 1px;
    left: 0;
    height: 2px;
    width: 0;
    background: #70ACB1;
    -webkit-transition: all .4s ease-in;
    transition: all .4s ease-in;
  }

  .home .panel-body .home-list .home-item:hover:after {

    width: 100%;

    -webkit-transition: all .4s ease-in;
    transition: all .4s ease-in;
  }

  .home-list .home-item h1 {
    position: relative;
    /*height:40px;*/
    padding: 20px;
    /*line-height: 20px;*/
    font-size: 26px;
    font-weight: bold;
    color: #59606D;;
  }

  .home-list .home-item h1::before {
    content: ' ';
    position: absolute;
    left: -30px;
    top: 0;
    height: 100%;
    width: 4px;
    background-color: #70ACB1;

  }

  .home-list .home-item h1 span {
    float: right;
    color: #999;
    font-size: 16px;
  }

  .home-list .home-item .home-item-content {
    position: relative;
    border-bottom: 1px dotted #ccc;
    color: #7f7f7f;
    line-height: 35px;
    max-height: 305px;
    overflow: hidden;
  }

  .home-list .home-item .home-item-content:after {
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline-block;
    content: '......';
    width: 100%;
    height: 30px;
    line-height: 20px;
    font-size: 20px;
    background-color: #FFF;
  }

  .home-list .home-item .home-item-content img {
    position: relative;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    box-shadow: 0 0 15px #000;
  }

  .home-item-footer {
    position: relative;
    padding-top: 10px;
  }

  .home-item-footer .icon-tags .icon-tags-title {
    display: inline-block;
    position: relative;
    height: 18px;
    line-height: 18px;
    margin-left: 18px;
    padding: 0 10px;
    color: #fff;
    background-color: rgb(186, 143, 108);
    z-index: 2;
  }

  .home-item-footer .icon-tags .icon-tags-title:after {
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

  .home-item-footer .icon-tags .icon-tags-title:before {
    position: absolute;
    left: -18px;
    content: ' ';
    border: 9px solid transparent;
    border-right-color: rgb(186, 143, 108);
  }

  .home-item-footer .icon-tags .icon-tags-title:hover {
    background-color: rgba(186, 143, 108, .7);
    cursor: pointer;
  }

  .home-item-footer .icon-tags .icon-tags-title:hover:before {
    border-right-color: rgba(186, 143, 108, .7);
  }

  .home-item-footer .icon-tags .icon-tags-title, .home-item-footer .icon-tags .icon-tags-title:before, .home-item-footer .icon-tags .icon-tags-title:hover, .home-item-footer .icon-tags .icon-tags-title:hover:before {
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
  }

  .home-item-footer .more {
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

  .home-item-footer .more:after {
    content: '》';
    width: 10px;
    height: 10px;
    margin-left: 5px;
  }

  .home-item-footer .more:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, .4);
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
  }

  .el-pagination {
    text-align: center;
  }

  @media (max-width: 800px) {
    .home-list .home-item h1 {
      padding: 5px;
    }

    .home-list .home-item h1 span {
      display: none;
    }
    .home .panel-body .sortbar {
      justify-content: flex-start;
      -webkit-justify-content: flex-start;
    }
  }

</style>
