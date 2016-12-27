<template>
	<div class="sign panel">
		<div class="panel-heading">
			<h3>标签</h3>
		</div>
		<div class="panel-body">
			<h4 class="text-center">目前有的标签</h4>
			<ul class="sign-list clearfix">
				<router-link to="/timeaxis" class="sign-item" tag="li">JavaScript</router-link>
				<router-link to="/timeaxis" class="sign-item" tag="li">JavaScript</router-link>
				<router-link to="/timeaxis" class="sign-item" tag="li">JavaScript</router-link>
				<router-link to="/timeaxis" class="sign-item" tag="li">JavaScript</router-link>
				<router-link to="/timeaxis" class="sign-item" tag="li">JavaScript</router-link>
				<router-link to="/timeaxis" class="sign-item" tag="li">JavaScript</router-link>
			</ul>
		</div>
	</div>
</template>
<style type="text/css" scoped>
	.sign .panel-heading{
		padding:10px 30px;
		background-color: #fff;
		border-bottom: 1px solid #CCC;
	}
	.sign .panel-heading h3{margin-top: 10px;}
	.sign .panel-body{
		padding: 10px 30px;
	}
	.sign .sign-list{
		list-style: none;
	}
	.sign .sign-list .sign-item{
		float: left;
		background-color: rgb(186, 143, 108);
		color: #fff;
		margin: 10px 20px;
		padding: 5px 10px;
		border-radius: 4px;
	}
</style>