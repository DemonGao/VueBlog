<template>
	<div id="sidebar" :class="{'height100':$route.path.indexOf('admin')!=-1}">
		<!-- 用户PC端导航-->
		<nav class="panel sidebar sm-hiden" v-if="$route.path.indexOf('admin')==-1">
		    <div class="panel-heading">
		      <img src="./../assets/logo.jpg" >
		      <router-link to="/admin_home" tag="h4" class="text-center">DemonGao</router-link>
		      <span class="text-center writing">全栈工程师</span>
		    </div>
		    <div class="panel-body">
		      <ul>
		      	<li>
		      		<router-link :to="{name:'home',params:{tag:'all'}}" :class="{'router-link-active':$route.path =='home'||$route.path.indexOf('article')!=-1}">文章</router-link>
		      	</li>
		      	<li><router-link to="/sign">标签</router-link></li>
		      	<li><router-link to="/timeaxis">时间轴</router-link></li>
		      </ul>
		    </div>
	  	</nav>
	  	<!-- 用户手机端导航-->
	  	<nav class="mobile sm-show" v-if="$route.path.indexOf('admin')==-1">
	  		<div class="mobile-head">
	  			<h3 class="head-title">DemonGaob博客</h3>
	  			<img class="head-left" src="./../assets/logo.jpg">
	  			<a class="head-right" href="https://github.com/DemonGao">GitHub</a>
	  		</div>
	  		<ul class="mobile-nav">
	  			<router-link :to="{name:'home',params:{tag:'all'}}" :class="{'router-link-active':$route.path =='/'||$route.path.indexOf('article')!=-1}" tag="li">文章</router-link>
	  			<router-link to="/sign" tag="li">标签</router-link>
	  			<router-link to="/timeaxis" tag="li">时间轴</router-link>
	  			<router-link to="/weather" tag="li">天气预报</router-link>
	  		</ul>
	  	</nav>

	  	<!--管理员PC导航-->
		<nav class="panel sidebar" v-if="$route.path.indexOf('admin')!=-1">
		    <div class="panel-heading">
		      <img src="./../assets/logo.jpg" >
		      <h4 class="text-center">DemonGao</router-link>
		      <span class="text-center">全栈工程师</span>
		    </div>
		    <div class="panel-body">
		      <ul>
		      	<li><router-link to="/admin_home">首页</router-link><li>
		      	<li>
		      		<router-link to="/admin_articles" :class="{'router-link-active':$route.path.indexOf('article')!=-1}">文章管理</router-link>
		      	</li>
		      	
		      	<li><router-link to="/admin_sign">标签管理</router-link></li>
		      	<li><router-link to="/home/all">返回博客</router-link></li>
		      </ul>
		    </div>
	  	</nav>
	</div>

</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				collapse_show:false
			}
		},
		methods:{
			click:function(){
				var el = document.getElementById("bs-example-navbar-collapse-1");
				if(this.collapse_show){
					
					Velocity(el, { /*translateY: '-186px',*/opacity:0 }, { duration: 300 })
				}else{

					Velocity(el, { /*translateY: '0',*/opacity:1 }, { duration: 300 })
				}
				
				this.collapse_show = !this.collapse_show;
			},
			aclick:function(){
				alert(1);
			}
		},
		mounted(){
			$$('.writing').forEach(function(text){
				var len = text.textContent.length,
					s = text.style;
				s.width = len + 'ch';
				s.animationTimingFunction = "steps("+len+"),steps(1)";
			})
		}
	}
</script>
<style type="text/css" scoped>
	.mobile{
		position: fixed;
		top: 0;
		width: 100%;
		height: 100px;
		box-sizing: border-box;
		overflow: hidden;
		background-color: #f5f5f5;
		z-index: 99999;
	}
	.mobile .mobile-head{
		box-sizing: border-box;
		height: 50px;
		padding: 5px;
		border-bottom: 1px solid #fff;
	}
	.mobile .mobile-head .head-title{
		float: left;
		width: 100%;
		margin: 0;
		height: 40px;
		line-height: 40px;
		padding-left: 40px;
		padding-right: 44px; 
		text-align: center;
	}
	.mobile .mobile-head .head-left{
		border-radius: 5px;
		width: 40px;
		height: 100%;
		margin-left: -100%;
	}
	.mobile .mobile-head .head-right{
		float: left;
		overflow: hidden;
		line-height: 40px;
		height: 40px;
		margin-left: -50px;
	}
	.mobile .mobile-nav{
		display: -webkit-flex; /* Safari */
  		display: flex;
  		list-style: none;
  		padding-left: 0;
	}
	.mobile .mobile-nav li{
		flex:1;
		padding:15px 0;
		text-align: center;
	}
	.mobile .mobile-nav li.router-link-active{
		color: #fff;
		background-color: rgba(101,248,205,1);
	}
	.panel{ margin-bottom:0; }
	.panel.sidebar{
		height: 100%;
	}
	.panel.sidebar .panel-heading{}
	.panel.sidebar .panel-heading img{
		border-radius: 100%;
		height: 100%;
		width:100%;
	}
	.panel.sidebar .panel-heading span{
		display: block;
		margin:10px auto; 
	}
	.panel.sidebar .panel-heading h4{
		position: relative;
		margin-top: 15px;
	}
	.panel.sidebar .panel-heading h4:after{
		content: '';
	    position: absolute;
	    bottom: -5px;
	    left: 0;
	    height: 1px;
	    width: 100%;
	    background: rgba(0,0,0,.4);
	    -webkit-transition: all .2s ease-in;
	    transition: all .2s ease-in;
	    -webkit-transform: scaleX(1);
	    transform: scaleX(1);
	}
	.panel.sidebar .panel-heading h4:hover::after{
		-webkit-transform: scaleX(0);
		transform: scaleX(0)
	}
	.panel.sidebar .panel-body{
		padding-left: 0px;
		padding-right: 0px;
	
	}
	.panel.sidebar .panel-body ul{
		list-style: none;
		padding-left: 0;
	}
	.panel.sidebar .panel-body ul li{
		
	}
	.panel .panel-body ul li a{
		display: block;
		width:100%;
		height: 100%;
		padding: 10px;
		color: #333;
		text-align: center;
	}
	.panel .panel-body ul li a.router-link-active{
		color:#FFF;
		text-decoration: none;

		background-color: rgba(101,248,205,1);
	}



	.height100{
		height: 100%;
	}


	/*打字动画*/
	@keyframes typing{
		0%{ width:0;}
		20%{ width:9ch; }
		100%{ width:9ch; }
	}
	@keyframes caret{
		50% { border-color:currentColor;}
	}
	.writing{
		width: 9ch;
		overflow:hidden;
		white-space: nowrap;
		border-right: 1px solid transparent;
		animation: typing 10s  infinite,
				   caret 1s  infinite;
	}
</style>