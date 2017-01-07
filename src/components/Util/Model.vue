<template>
	<transition name="modal">
	<div v-if="showModel" >
		<div class="overlay" @click="close"></div>
		<div class="dialog">
			<div class="dialog-heade">
				<h1>发表博客</h1>
			</div>
			<div class="dialog-content">
				<p>当前拥有的标签有</p>
				<ul class="clearfix" @click="addSign">
					<li>JavaScript</li>
					<li>Css</li>
					<li>Html</li>
					<li>Node</li>
				</ul>
				<input type="text" v-model="sign">
			</div>
			<div class="dialog-footer clearfix">
				<a class="btn"  @click="addArticle">发布</a>
			</div>
		</div>
	</div>
	</transition>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				sign:''
			}
		},
		computed:{
			showModel(){
				return this.$store.state.addmodal;
			},
			article(){
				return this.$store.state.article
			}
		},
		methods:{
			close(){
				this.$store.dispatch('addarticle_toggle_modal')
			},
			addSign(event){
				// console.log(e.target);
				var event = event || window.event;
				var target = event.target || event.srcElement;
				if(target.tagName=="LI"){
					this.sign = target.innerHTML;
				}
			},
			addArticle(){
				var article = this.article;
				if(article.title==""){
					alert("标题不能为空!");
					return ;
				}else if(article.content==""){
					alert("内容不能为空!");
					return ;
				}else if(this.sign==""){
					alert("标签不能为空!");
					return ;
				}
				article.sign = this.sign;
				alert(JSON.stringify(this.article));
			}
		}
	}
</script>
<style type="text/css" scoped>
	.modal-enter-active {
	  transition: all .3s ease;

	}
	.modal-leave-active {
	  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.modal-enter, .modal-leave-active {
	  top: 0;
	  opacity: 0;
	}
	.overlay{
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: #000;
		opacity: .2;
	}
	.dialog{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);

		width: 400px;
		z-index: 9998;
		box-shadow: 0 0 0 1px rgba(0,0,0,.02),0 4px 10px rgba(0,0,0,.06);

	}
	.dialog-heade{
		height: 51px;
		line-height: 50px;
		padding: 0 20px;

		background-color: #99F0CA;
		border-radius: 5px 5px 0 0;
	}
	.dialog-content{
		padding: 20px;
		padding-bottom: 0;
		background-color: #FDFFE7;

	}
	.dialog-footer{
		padding: 10px 20px ;
		background-color: #FDFFE7;

	}
	.dialog-heade h1{
		margin: 0;
		font-size: 20px;
		line-height: inherit;
	}
	.dialog-content input{
		width: 100%;
		padding-left: 2em;
		outline: none;
		border:none;
		border-bottom:1px solid #000;
		background-color: transparent;
	}
	.dialog-content ul{
		list-style: none;
		padding:10px 20px;
	}
	.dialog-content ul li{
		float: left;
		margin: 10px;
		padding: 2px 10px;
		border-radius: 20px;
		background-color: #C9FDD7;
		position: relative;
	}
	.dialog-content ul li::before{
		content: "+";
		position: absolute;
		top: 0;
		right: -10px;
		visibility: hidden;
	}
	.dialog-content ul li:hover{
		cursor:pointer;
	}
	.dialog-content ul li:hover::before {
		visibility: visible;
	}
	

	.dialog-footer .btn{
		display: block;
		float: right;
		padding: 5px 25px;
		background-color: #8C7676;
		color: #fff;
	}
</style>