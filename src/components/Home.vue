<template>
	<div class="panel">
		<div class="panel-heading">
			<h3>文章</h3>
		</div>
		<div class="panel-body">
			<ul>
		      	<li><router-link :to="{name:'article',params:{id:123}}"  :class="{'router-link-active':$route.path =='/'}">文章</router-link></li>
		      	<li><router-link to="/type">分类</router-link></li>
		      	<li><router-link to="/sign">标签</router-link></li>
		      </ul>
		</div>
		This is $route.params.id{{ $route.params.id }}
	</div>
</template>
<style type="text/css">
	
</style>