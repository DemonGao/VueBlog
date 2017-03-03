<template>
	<div class="sign panel">
		<div class="panel-heading">
			<h3>标签</h3>
		</div>
		<div class="panel-body">
			<h4 class="text-center">目前有的标签</h4>
			<ul class="sign-list clearfix">
				<router-link :to="{name:'home',params:{tag:'all'}}" class="sign-item" tag="li">全部</router-link>
				<router-link v-for="item in tags" :to="{name:'home',params:{tag:item.tag}}" class="sign-item" tag="li">{{item.tag}}</router-link>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				tags:{}
			}
		},
		mounted(){
			this.axios.get(this.$store.state.serverurl+'api/getTags').then((response) => {
	  			var data = response.data;
	  			if (data.status) {
	  				this.tags = data.data;
	  			}else{
	  				alert(data.msg);
	  			}
			})
    	},
	}
</script>
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
		cursor:pointer;
	}
</style>
