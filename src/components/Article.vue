<template>
  <div class="container">
    <div class="loading" v-show="loading">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
    <div class="article" v-show="!loading">
      <h1 class="article-head clearfix">
        {{data.title}}
        <!--<span class="article-date">{{new Date(data.date).Format("YYYY-MM-DD")}}</span>-->
      </h1>
      <div class="article-detail">
        <span class="article-detail-meta">
          <i class="iconfont icon-tubiaozitihua02"></i> {{new Date(data.date).Format("YYYY-MM-DD")}}
        </span>
        <span class="article-detail-meta">
          <i class="iconfont icon-liulan"></i>阅读: {{data.view}}
        </span>
        <span class="article-detail-meta">
          <i class="iconfont icon-zuozhe"></i>作者: Demon
        </span>
        <span class="article-detail-meta">
          <i class="iconfont icon-biaoqian"></i>分类: <router-link :to="{name:'home',params:{tag:data.tag}}" class="sign-item">{{data.tag}}</router-link>
        </span>
      </div>

      <a-player :music="songs" ref="player"></a-player>
      <!--<div class="clearfix">-->
      <!--<div class="bdsharebuttonbox" data-tag="share_1" style="float:right">-->
      <!--<a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>-->
      <!--&lt;!&ndash;<a class="bds_mshare" data-cmd="mshare"></a>&ndash;&gt;-->
      <!--<a class="bds_qzone" data-cmd="qzone" href="#"></a>-->
      <!--<a class="bds_tsina" data-cmd="tsina"></a>-->
      <!--<a class="bds_renren" data-cmd="renren"></a>-->
      <!--<a class="bds_more" data-cmd="more">更多</a>-->
      <!--<a class="bds_count" data-cmd="count"></a>-->
      <!--</div>-->
      <!--</div>-->

      <div class="article-content" >
        <div v-html="data.content"></div>
        <p class="article-content-footer">
        <p>更多内容可以订阅本人微信公众号，一起开启前端小白进阶的世界！</p>
        <img src="./../assets/img/wx.jpg" />
      </div>


      <div v-html="share"></div>
      <div v-html="duoshuo"></div>
    </div>

  </div>
</template>
<script type="text/javascript">
  import VueAplayer from 'vue-aplayer'
  export default{
    components: {
      'a-player': VueAplayer
    },
    data(){
      return {
        loading:true,
        data:{},
        songs: [
          {
            title: 'Preparation',
            author: 'Hans Zimmer/Richard Harvey',
            url: 'http://devtest.qiniudn.com/Preparation.mp3',
            pic: 'http://devtest.qiniudn.com/Preparation.jpg',
            lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
          }
        ],
        duoshuo:'',
        share:''
      }
    },
    mounted(){

      let aplayer = this.$refs.player.control;
//      aplayer.play()
      //获取文章内容
      this.axios.get(this.$store.state.serverurl+'api/getArticle',{
        params:{
          id:this.$route.params.id,
        }
      }).then((response) => {
        var data = response.data;
        if (data.status) {
          this.data = data.data;
          this.duoshuo =`<div  class="ds-thread" data-thread-key="${this.$route.path.split('/')[2]}" data-title="${this.data.title}" data-url="http://demongao.com${this.$route.path}"></div>
`;
//          this.share = `
//            <div class="ds-share flat"
//              data-thread-key="${this.$route.path.split('/')[2]}"
//              data-title="${this.data.title}"
//              data-images="http://demongao.com/public/uploads/avatar-1489419148456.jpg"
//              data-content="我发了一篇好文章,推荐给大家瞧一瞧"
//              data-url="http://demongao.com${this.$route.path}">
//              <div class="ds-share-inline">
//                <ul  class="ds-share-icons-16">
//                  <li data-toggle="ds-share-icons-more"><a class="ds-more" href="javascript:void(0);">分享到：</a></li>
//                  <li><a class="ds-weibo" href="javascript:void(0);" data-service="weibo">微博</a></li>
//                  <li><a class="ds-qzone" href="javascript:void(0);" data-service="qzone">QQ空间</a></li>
//                  <li><a class="ds-qqt" href="javascript:void(0);" data-service="qqt">腾讯微博</a></li>
//                  <li><a class="ds-wechat" href="javascript:void(0);" data-service="wechat">微信</a></li>
//                </ul>
//          <div class="ds-share-icons-more">
//          </div>
//        </div>
//      </div>`

          localStorage.setItem("demongao_bdText",this.data.title)

//          setTimeout(()=>{
//
//            this.loading = false;
//          },600)
          this.loading = false;
        }else{
          console.log(data.msg);
        }
      })
      //浏览量+1
      this.axios.post(this.$store.state.serverurl+'api/viewArticle',{id:this.$route.params.id})



    }
  }

</script>
<style type="text/css" scopep="scoped">
  .container{
    height:100%;
  }
  .container .loading{

  }
  .article{
    border-radius: 5px;
    padding: 25px;
    background-color:#fff;
  }
  .article-head{
    font-size:36px;
    margin:0;
  }
  .article-date{
    float: right;
    font-size: 12px;
    line-height: 39px
  }
  .article-detail{
    padding:15px 20px;
  }
  .article-detail .article-detail-meta{
    margin-right:15px;
  }
  .article-detail .article-detail-meta:last-child{
    margin-right: 0;
  }
  .article-detail .article-detail-meta i{
    margin-right:3px;
  }
  @media (max-width: 768px) {
    .article{
      padding:10px;
    }

  }
  .article-content h1,.article-content h2,.article-content >h3,.article-content >h4,.article-content >h5,.article-content >h6{
    /*position: relative;*/
    /*margin-left:10px;*/
    color: #4bb5e4 ;
  }

  .article-content blockquote{
    border-left: 2px solid #009A61;
    background: #F6F6F6;
    color: #555;
    font-size: 1em;
  }
  .article-content a,.article-detail-meta a{
    color: #009a61;
    text-decoration: none;
  }
  .article-content img{
    max-width: 100%;
  }
  .article-content-footer{
    border-top:1px solid #ccc;
  }
  .article-content-footer img{
    max-width: 100%;
  }

  .aplayer{
    margin-bottom: 1.5rem !important;
  }
  .aplayer-list,.aplayer-icon-menu{
    display: none !important;
  }
</style>
