<template>
	<div class="article">
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
        <img src="./../../static/img/wx.jpg" >
      </div>
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
				data:{},
        songs: [
          {
            title: 'Preparation',
            author: 'Hans Zimmer/Richard Harvey',
            url: 'http://devtest.qiniudn.com/Preparation.mp3',
            pic: 'http://devtest.qiniudn.com/Preparation.jpg',
            lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
          }
        ]
			}
		},
		mounted(){
      let aplayer = this.$refs.player.control;
      aplayer.play()
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
		 			  console.log(this.data);
		  		}else{
		  			alert(data.msg);
		  		}
			})

      //浏览量+1
      this.axios.post(this.$store.state.serverurl+'api/viewArticle',{id:this.$route.params.id})
//        .then((response) => {
//        var data = response.data;
//        if (data.status) {
//          this.data = data.data;
//          console.log(this.data);
//        }else{
//          alert(data.msg);
//        }
//      })
		}
	}

</script>
<style type="text/css" scopep="scoped">
	.article{
		border-radius: 5px;
		padding: 25px;
		background-color:#fff;
	}
	.article-head{
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
