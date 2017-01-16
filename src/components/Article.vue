<template>
	<div class="article">
		<h1 class="article-head">
			{{data.title}}
			<span class="article-date">{{new Date(data.date).Format("YYYY-MM-DD")}}</span>
		</h1>
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
	}
</style>