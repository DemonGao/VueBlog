<template>
  <div class="article_container">
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
          <i class="iconfont icon-biaoqian"></i>分类: <router-link :to="{name:'home',params:{tag:data.tag}}"
                                                                 class="sign-item">{{data.tag}}</router-link>
        </span>
      </div>
      <!--音乐播放器组件-->
      <!-- <a-player :music="songs" ref="player"></a-player> -->
      <!--文章内容-->
      <div class="article-content">
        <div v-html="data.content"></div>
        <!--<p class="article-content-footer">-->
        <!--<p>更多内容可以订阅本人微信公众号，一起开启前端小白进阶的世界！</p>-->
        <!--<img src="./../assets/img/wx.jpg" />-->
        <!--</div>-->
        <div v-html="share"></div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  // import VueAplayer from 'vue-aplayer'

  export default{
    // components: {
    //   'a-player': VueAplayer,
    // },
    data(){
      return {
        loading: true,
        data: {},
        // songs: [
        //   {
        //     title: '去大理',
        //     author: '黄渤',
        //     url: 'http://cdn.demongao.com/mp3/qdl.mp3',
        //     pic: 'http://cdn.demongao.com/mp3/qdl.jpg',
        //     lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
        //   }
        // ],
        share: ''
      }
    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
//        console.log(to.params.id);
        this.ajax();
      }
    },
    mounted(){
      // let aplayer = this.$refs.player.control;
      this.ajax();
    },
    methods: {
      ajax(){
        //获取文章内容
        this.axios.get(this.$store.state.serverurl + 'api/getArticle', {
          params: {
            id: this.$route.params.id,
          }
        }).then((response) => {
          var data = response.data;
          if (data.status) {
            this.data = data.data;
            localStorage.setItem("demongao_bdText", this.data.title)
            this.loading = false;
            var str = this.data.content;
            let preArr = str.match(/<(pre)>[\s\S]*?<\/pre>/g);
            if (preArr == null) {
              return;
            }
//            生成 span 标签行
            for (let i = 0; i < preArr.length; i++) {
              var index = 0;
              var newpresub = preArr[i].slice(11, -13).replace(/([\s\S]*?\n)/g, function () {
//                将< pre><code></code></pre>剪切
                index++;
                var strindex = index > 9 ? index : '0' + index
                return `<div class="demon_code_line"><em class="demon_code_index">${strindex}</em> <div class="demon_code_content">${arguments[1]}</div></div>`;
              })
              //将源字符串进行 replace 替换成需要的
              str = str.replace(preArr[i], `<pre class="demon_pre"><code class="demon_code">${newpresub}</code></pre>`)

            }
            this.data.content = str;
          } else {
            console.log(data.msg);
          }
        })
        //浏览量+1
        this.axios.post(this.$store.state.serverurl + 'api/viewArticle', {id: this.$route.params.id})
      }
    }
  }
</script>
<style type="text/css">
  .article_container {
    margin-top: 10px;;
    height: 100%;
  }

  .article_container .loading {

  }

  .article_container .article {
    border-radius: 5px;
    padding: 25px;
    background-color: #fff;
  }

  .article_container .article-head {
    font-size: 36px;
    margin: 0;
  }

  .article_container .article-detail {
    padding: 15px 20px;
  }

  .article_container .article-detail .article-detail-meta {
    margin-right: 15px;
  }

  .article_container .article-detail .article-detail-meta:last-child {
    margin-right: 0;
  }

  .article_container .article-detail .article-detail-meta i {
    margin-right: 3px;
  }

  @media (max-width: 768px) {
    .article {
      padding: 10px;
    }

  }

  .article_container .article-content {
    line-height: 1.8em;
  }

  .article_container .article-content h1, .article_container .article-content h2, .article_container .article-content h3, .article_container .article-content h4, .article_container .article-content h5 {
    color: #4bb5e4;
  }

  .article_container .article-content blockquote {
    border-left: 2px solid #009A61;
    background: #F6F6F6;
    color: #555;
    font-size: 1em;
  }

  .article_container .article-content a, .article_container .article-detail-meta a {
    color: #009a61;
    text-decoration: none;
  }

  .article_container .article-content code {
    color: #f66;
  }

  .article_container .article-content pre code {
    color: #fff;;
  }

  .article_container .article-content p {

  }

  .article_container .article-content img {
    position: relative;
    left:50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    margin: 20px 0;
    max-width: 100%;
    border-radius: 5px;
    box-shadow: 0 0 15px #000;
  }

  .article_container .article-content-footer {
    border-top: 1px solid #ccc;
  }

  .article_container .article-content-footer img {
    max-width: 100%;
  }

  .article_container .article-content ol {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
  }

  /*.codeindex span{*/
  /*color: #ffffff;*/
  /*}*/
  .article_container .aplayer {
    margin-bottom: 1.5rem !important;
  }

  .article_container .aplayer-list, .aplayer-icon-menu {
    display: none !important;
  }

  /*@media (max-width: 800px) {*/
  /*.article_container .article{*/
  /*padding:10px;*/
  /*}*/
  /*}*/
</style>
