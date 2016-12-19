<template>
	<div class="panel home">
		<div class="panel-heading">
			<h3>文章</h3>
		</div>
		<div class="panel-body">
			<ul class="home-list">
				<li class="home-item">
					<h1>JavaScript闭包</h1>
				</li>
<!-- 		      	<li><router-link :to="{name:'article',params:{id:123}}"  :class="{'router-link-active':$route.path =='/'}">文章</router-link></li>
		      	<li><router-link to="/type">分类</router-link></li>
		      	<li><router-link to="/sign">标签</router-link></li> -->
		    </ul>
		</div>
		<!-- This is $route.params.id{{ $route.params.id }} -->
	</div>
</template>
<style type="text/css">
	.home .panel-heading h3{margin-top: 10px;}
	.home .panel-body{
		padding-left: 0;
		padding-right: 0;
	}
	.home .panel-body ul{
		list-style: none;
		padding-left: 0;
		margin-bottom: 0;
	}
	.home .panel-body ul li{
		border-bottom: 1px solid #eee;
		padding: 15px;
	}
	.home .panel-body ul li:nth-child(1){
		border-bottom: 1px solid #eee;
	}
	.home-list .home-item{
		border-top: 1px solid #eee;
	}
	.home-list .home-item h1{
		margin-top: 10px;
		font-size: 18px;
		font-weight: bold;
	}
</style>