<template>
	<div class="home">
		<!-- <div class="panel-heading">
			<h3>文章</h3>
		</div> -->

		<div class="panel-body">
			<ul class="home-list">
				<li v-for="item in orderedArticles" class="home-item">
					<h1>{{item.title}}<span>{{new Date(item.date).Format("YYYY-MM-DD")}}</span></h1>
					<div class="home-item-content" v-html="item.content"></div>
					<div class="home-item-footer">
						<div class="icon-tags">
							<i class="iconfont icon-biaoqian"></i>
							<router-link class="icon-tags-title" to="/sign" tag="span">{{item.tag}}</router-link>
						</div>
						<router-link class="more" :to="{name:'article',params:{id:item._id}}" tag="span">查看更多</router-link>
					</div>
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
				articles:[],
        pageSizes:[2,4,6],
        pageSize: 2,
        currentPage:1,
        total:0,

        backtop:false,
			}
		},
		computed:{
			orderedArticles(){
				return _.orderBy(this.articles,'date','desc')
			}
		},
		mounted(){
//      window.addEventListener('scroll',this.handleScroll)
      var ua = navigator.userAgent;
      var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
        isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
        isAndroid = ua.match(/(Android)\s+([\d.]+)/),
        isMobile = isIphone || isAndroid;
      //判断
      if(isMobile) {
        this.pageSize =10;


      }
      this.ajax();
    },
    methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize = val;
        this.ajax();
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;
        this.ajax();
        document.body.scrollTop = 0;
      },
      ajax(){
        this.axios.get(this.$store.state.serverurl+'api/getArticles',{
          params:{
            tag : this.$route.params.tag,
            page : this.currentPage,
            pageSize : this.pageSize
          }
        }).then((response) => {
          var data = response.data;
          if (data.status) {
            this.articles = data.data.results;
            this.total = data.data.total;
            // console.log(this.articles);
          }else{
            alert(data.msg);
          }
        })
      },
      handleScroll(){
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

        console.log(getViewPortHeight());
        if(scrollTop>getViewPortHeight()){
          this.backtop = true;
          console.log(scrollTop);
        }else{
          this.backtop = false;
        }
        console.log(scrollTop);
      }
    }
	}
</script>
<style type="text/css" scope="scope">

	.home .panel-heading{
		padding:10px 30px;
		background-color: #fff;
	}
	.home .panel-heading h3{margin-top: 10px;}
	.home .panel-body{
		padding: 0;
	}
	.home .panel-body .home-list{
		list-style: none;
		padding-left: 0;
		margin-bottom: 0;
		background-color: #F5F5F5;
	}
	.home .panel-body .home-list .home-item{
		position: relative;
		padding:10px 30px;
		border-top: 1px solid #eee;
		background-color: #fff;
		box-sizing: border-box;
	    width: 100%;
	    height: auto;
	    margin-bottom: 10px;
	    background: #fff;
	    border-radius: 5px;
	    box-shadow: 0 0 0 1px rgba(0,0,0,.02),0 4px 10px rgba(0,0,0,.06);
	}
	/*.home .panel-body ul li:nth-child(1){
		margin-top: 10px;
	}*/
	.home .panel-body .home-list .home-item:after{
		content: '';
	    position: absolute;
	    bottom: 1px;
	    left: 0;
	    height: 2px;
	    width: 0;
	    background: #42b983;
	    -webkit-transition: all .4s ease-in;
	    transition: all .4s ease-in;
	}
	.home .panel-body .home-list .home-item:hover:after{

	    width: 100%;

	    -webkit-transition: all .4s ease-in;
	    transition: all .4s ease-in;
	}
	.home-list .home-item h1{
		margin-top: 10px;
		line-height: 20px;
		font-size: 20px;
		font-weight: bold;
		overflow: hidden;
	}
	.home-list .home-item h1 span{
		float: right;
		color:#999;
		font-size: 12px;
	}
	.home-list .home-item .home-item-content{
		position: relative;
		padding: 10px 0 30px;
		border-bottom: 1px dotted #ccc;
		color: #7f7f7f;
		line-height: 35px;
		max-height: 185px;
		overflow: hidden;
	}
	.home-list .home-item .home-item-content:after{
		position: absolute;
		bottom: 0;
		left: 0;
		display: inline-block;
		content: '......';
		width:100%;
		height: 30px;
		line-height: 20px;
		font-size: 20px;
		background-color: #FFF;
	}
	.home-item-footer{
		position: relative;
		padding-top: 10px;
	}
	.home-item-footer .icon-tags .icon-tags-title{
		display: inline-block;
		position: relative;
		height: 18px;
		line-height: 18px;
		margin-left: 18px;
		padding: 0 10px;
		color: #fff;
		background-color: rgb(186, 143, 108);
	}
	.home-item-footer .icon-tags .icon-tags-title:after{
    	position: absolute;
		top: 7px;
		left: 2px;
		height: 4px;
		width: 4px;
		content: ' ';
		border-radius: 4px;
		box-shadow: 0 0 0 1px rgba(0,0,0,.3);
		background-color: #fff;
	}
	.home-item-footer .icon-tags .icon-tags-title:before{
		position: absolute;
		left: -18px;
		content: ' ';
		border: 9px solid transparent;
    	border-right-color: rgb(186, 143, 108);
	}
	.home-item-footer .icon-tags .icon-tags-title:hover{
		background-color: rgba(186, 143, 108,.7);
		cursor: pointer;
	}
	.home-item-footer .icon-tags .icon-tags-title:hover:before{
		border-right-color: rgba(186, 143, 108,.7);
	}
	.home-item-footer .icon-tags .icon-tags-title,.home-item-footer .icon-tags .icon-tags-title:before,.home-item-footer .icon-tags .icon-tags-title:hover,.home-item-footer .icon-tags .icon-tags-title:hover:before{
		-webkit-transition: all .2s ease-in;
	    transition: all .2s ease-in;
	}
	.home-item-footer .more{
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
		background-color: rgba(0,0,0,.5);
		padding: 0 8px;
		-webkit-transition: all .2s ease-in;
	    transition: all .2s ease-in;
	}
	.home-item-footer .more:after{
		content: '》';
		width:10px;
		height: 10px;
		margin-left: 5px;
	}
	.home-item-footer .more:hover{
		cursor: pointer;
		background-color: rgba(0,0,0,.4);
		-webkit-transition: all .2s ease-in;
	    transition: all .2s ease-in;
	}
  .el-pagination{
    text-align: center;
  }
</style>
