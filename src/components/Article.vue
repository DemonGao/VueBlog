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
        <i class="iconfont icon-zuozhe"></i>作者: DemonGao(高世超)
      </span>
      <span class="article-detail-meta">
        <i class="iconfont icon-biaoqian"></i>分类: <router-link :to="{name:'home',params:{tag:data.tag}}" class="sign-item">{{data.tag}}</router-link>
      </span>
    </div>
		<div v-html="data.content">

		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				data:{}
			}
		},
		mounted(){
		  //获取文章内容
			this.axios.get(this.$store.state.serverurl+'api/getArticle',{
					params:{
		  				id:this.$route.params.id,
	  				}
				}).then((response) => {
		  		var data = response.data;
		  		if (data.status) {
		 			this.data = data.data;
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
<style type="text/css" scoped>
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
    margin-right:20px;
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
</style>
