<template>
	<div class="login" id="login">
		<h2 class="text-center">DemonGao博客后台管理</h2>
		<div class="login-content">
			<div class="form-group clearfix">
			    <label for="username_label" class="col-sm-2 control-label">用户名</label>
			    <div class="col-sm-10">
			      <input type="email" class="form-control" id="username_label" placeholder="用户名" v-model="username">
			    </div>
			</div>
			<div class="form-group clearfix">
			    <label for="password_label" class="col-sm-2 control-label">密码</label>
			    <div class="col-sm-10">
			      <input type="password" class="form-control" id="password_label" placeholder="密码" v-model="password">
			    </div>
			</div>
			<a href="javascript:;" @click="login" class="btn btn-primary btn-sm btn-block" style="width:40%;margin:20px auto 0">登录</a>
		</div>
	</div>
</template>
<style type="text/css" scoped>
	.login{
		position: relative;
		width: 500px;
		/*height: 300px;*/
		border-radius: 5px;
		background-color: #fff;
		box-shadow: 1px 1px 5px #fff;
	}
	.login h2{
		padding:30px 0 10px;
		margin: 0;
	}
	.login-content{
		padding: 30px 20px 20px;
	}
	.login-content .form-group{
		margin-bottom: 10px;

	}
	.login-content .control-label{
		line-height: 34px;
	}
</style>
<script type="text/javascript">
	export default{
		data(){
			return {
				username:'',
				password:''
			}
		},
		computed:{
			serverurl(){
				return this.$store.state.serverurl
			}
		},
		mounted(){
	      // localStorage.setItem('demongao_user','123');
	      // let demongao_user = localStorage.getItem('demongao_user');
	    	if(localStorage.getItem('demongao_user')!=null){
	        	this.islogin=true;
	      	}
	      	let login = document.getElementById('login');
	      	login.style.top = document.body.clientHeight/2 - login.offsetHeight/2+'px';
	      	login.style.left = (document.body.clientWidth-login.clientWidth)/2+'px';
	    },
	    methods:{
	    	login(){
	   	 		this.axios.get(this.serverurl+'api/login',{
	  				params:{
	  					username:this.username,
	  					password:this.password,
	  				}
	  			}).then((response) => {
	  				var data = response.data;
	  				if (data.status) {
	  					// this.$router.push({path:"/admin_"});
	  					this.$router.go(0);
	  					localStorage.setItem('demongao_user',data.admin);
	  				}else{
	  					alert(data.msg);
	  				}
				})
	    	}
	    }
	}
</script>