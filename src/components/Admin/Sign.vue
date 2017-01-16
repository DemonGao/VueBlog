<template>
	<div class="sign">
		<admin-navbar :datas="navbar_datas"></admin-navbar>
	</div>
</template>
<script type="text/javascript">
	import AdminNavbar from './../layout/AdminNavbar' 
	export default{
		data(){
			return {
				navbar_datas: {
					style:{
						color:'#000',
						selectColor:'red',
						background:'#000',
						selectBackground:'#000',
					},
					items:[
						{
							title:'添加',
							icon:'',
							function:'/admin_addSign'
						},
						{
							title:'修改',
							icon:'',
							function:'/admin_editSign'
						},
						{
							title:'删除',
							icon:'',
							function:'/admin_delSign'
						},
					]
				}
			}
		},
		components:{
			'adminNavbar' : AdminNavbar
		},
		mounted(){
			// this.$on('add',(msg)=>{
   //      		console.log(msg);
   //      	});
			// this.$on('add',(msg)=>{
			// 	console.log("+++");
   //      		console.log(msg);
   //      	});
   			this.$on('add',function(msg){
        		alert("123123");
        	});
		}
	}
</script>