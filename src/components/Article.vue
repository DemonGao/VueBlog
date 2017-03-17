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
          <i class="iconfont icon-biaoqian"></i>分类: <router-link :to="{name:'home',params:{tag:data.tag}}" class="sign-item">{{data.tag}}</router-link>
        </span>
      </div>
      <!--音乐播放器组件-->
      <a-player :music="songs" ref="player"></a-player>
      <!--文章内容-->
      <div class="article-content" >
        <div v-html="data.content"></div>
        <!--<p class="article-content-footer">-->
        <!--<p>更多内容可以订阅本人微信公众号，一起开启前端小白进阶的世界！</p>-->
        <!--<img src="./../assets/img/wx.jpg" />-->
      <!--</div>-->

        <div id="duoshuo"></div>
        <div v-html="share"></div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import VueAplayer from 'vue-aplayer'

  export default{
    components: {
      'a-player': VueAplayer,
//      'remote-js': {
//        render(createElement) {
//          return createElement('div',{},[
//            createElement('div',{
//              attrs:{
//                class:'ds-thread',
//                'data-thread-key':'58c80779ef4ec808ab2230c0',
//                'data-title':'CDN加速你的网站',
//                'data-url':'http://demongao.com/article/58c80779ef4ec808ab2230c0'
//              }
//            })
//            ,createElement('script', {attrs: {type: 'text/javascript'}},['var duoshuoQuery = {short_name:"demongao"};']),
//            ,createElement('script', {attrs: {type: 'text/javascript', src: this.src}}),
//          ]);
//        },
//        props: {
//          src: { type: String, required: true },
//        },
//      }
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
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        console.log(to.params.id);
        this.ajax();
      }
    },
    mounted(){
      this.toggleDuoshuoComments();
      let aplayer = this.$refs.player.control;
      this.ajax();

//      var arr = document.getElementsByTagName("pre");
//      console.log(arr[0].innerHTML)
//      for(let i=0;i<arr.length;i++){
//        console.log(arr[i].innerHTML)
//      }
//      _.forEach(arr,function(val){
//        console.log(val);
////        .innerHTML.split("\n")
//      })
//      console.log(arr);
//      var text = "<ol>";
//      $.each(arr,function(i,item){
//        if(item.trim()!=""){
//          text += "<li>"+ item +"</li>";
//        }
//        text += "</ol>"
//        $("pre").html(text);
//      });
    },
    methods:{
      //多说加载评论框
      toggleDuoshuoComments:function () {
        var el = document.createElement('div');//该div不需要设置class="ds-thread"
        el.setAttribute('data-thread-key', this.$route.path.split('/')[2]);//必选参数
        el.setAttribute('data-url', 'http://demongao.com'+this.$route.path);//必选参数
        DUOSHUO.EmbedThread(el);
        document.getElementById("duoshuo").appendChild(el);
      },
      ajax(){
        //获取文章内容
        this.axios.get(this.$store.state.serverurl+'api/getArticle',{
          params:{
            id:this.$route.params.id,
          }
        }).then((response) => {
          var data = response.data;
          if (data.status) {
            this.data = data.data;
            localStorage.setItem("demongao_bdText",this.data.title)
            this.loading = false;
//            this.share = `
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
            var str = this.data.content;
//            console.log(str);
            let preArr = str.match(/<(pre)>[\s\S]*?<\/pre>/g);
//            console.log(preArr);
            if(preArr ==null){
              return ;
            }
////            遍历正则匹配到的<pre></pre>标签组
//            for(let i=0; i<preArr.length;i++){
//              var newpresub = preArr[i].slice(11,-13).replace(/([\s\S]*?\n)/g,'<li>$1</li>')
//              preArr[i] = '<pre><code><ol>'+newpresub+'</ol></code></pre>';
//              str = str.replace(/<(pre)><(code)>[\s\S]*?<\/code><\/pre>/g,preArr[i])
//            }
//            this.data.content = str;

//            生成 span 标签行
            for(let i=0; i<preArr.length;i++){
              var index = 0;
              var newpresub = preArr[i].slice(11,-13).replace(/([\s\S]*?\n)/g,function(){
//                console.log(arguments);

                console.log(index)
                index++;
                var strindex = index>9 ? index : '0'+index
                return `<em class="demon_code_index">${strindex}</em>${arguments[1]}` ;
              })
              console.log('----------------------------');
              preArr[i] = `<pre><code class="demon_code">${newpresub}</code></pre>`;
              str = str.replace(/<(pre)><(code)>[\s\S]*?<\/code><\/pre>/g,preArr[i])
            }
            this.data.content = str;
          }else{
            console.log(data.msg);
          }
        })
        //浏览量+1
        this.axios.post(this.$store.state.serverurl+'api/viewArticle',{id:this.$route.params.id})
      }
    }
  }
</script>
<style type="text/css">
  .article_container{
    height:100%;
  }
  .article_container .loading{

  }
  .article_container .article{
    border-radius: 5px;
    padding: 25px;
    background-color:#fff;
  }
  .article_container .article-head{
    font-size:36px;
    margin:0;
  }
  .article_container .article-detail{
    padding:15px 20px;
  }
  .article_container .article-detail .article-detail-meta{
    margin-right:15px;
  }
  .article_container .article-detail .article-detail-meta:last-child{
    margin-right: 0;
  }
  .article_container .article-detail .article-detail-meta i{
    margin-right:3px;
  }
  @media (max-width: 768px) {
    .article{
      padding:10px;
    }

  }
  .article_container .article-content h1,.article_container .article-content h2,.article_container .article-content h3,.article_container .article-content h4,.article_container .article-content h5{
    color: #4bb5e4 ;
  }

  .article_container .article-content blockquote{
    border-left: 2px solid #009A61;
    background: #F6F6F6;
    color: #555;
    font-size: 1em;
  }
  .article_container .article-content a,.article_container .article-detail-meta a{
    color: #009a61;
    text-decoration: none;
  }
  .article_container .article-content img{
    max-width: 100%;
  }
  .article_container .article-content-footer{
    border-top:1px solid #ccc;
  }
  .article_container .article-content-footer img{
    max-width: 100%;
  }

  .article_container .article-content ol{
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
  }



  /*.codeindex span{*/
    /*color: #ffffff;*/
  /*}*/
  .article_container .aplayer{
    margin-bottom: 1.5rem !important;
  }
  .article_container .aplayer-list,.aplayer-icon-menu{
    display: none !important;
  }
</style>
