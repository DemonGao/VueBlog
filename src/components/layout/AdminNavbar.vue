<template>
	<nav class="navbar">
		<!-- {{items}} -->
		<ul class="navbar-list">
			<li v-for="item in items" class="navbar-item"  @click="add">
				<i class="iconfont icon-biaoqian"></i>
				<span>{{item.title}}</span>
			</li>
		</ul>
	</nav>>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				style : this.datas.style,
				items : this.datas.items
			}
		},
		props: {
        	datas: Object
        },
        methods : {
        	add(){
        		this.$emit('add');
        	}
        }
	}
</script>
<style>
	.navbar{
		height: 60px;
		overflow: hidden;

		background-color: #FFF;
	}
	.navbar-list{
		margin: 0;
		padding:0;
		list-style: none;
		display: flex;
		height: 100%;
	}
	.navbar-list .navbar-item{
		flex: 1;
		text-align: center;
		line-height: 60px;
	}
	.navbar-list .navbar-item{

	}
</style>