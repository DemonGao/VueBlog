<template>
	<!-- <div id="sidebar"> -->
		<div class="panel sidebar">
		    <div class="panel-heading">
		      <img src="../assets/logo.jpg" >
		      <h3 class="text-center">DemonGao</h3>
		      <span class="text-center">全栈工程师</span>
		    </div>
		    <div class="panel-body">
		      <ul>
		      	<li><router-link to="/home" :class="{'router-link-active':$route.path =='/'}">文章</router-link></li>
		      	<li><router-link to="/type">分类</router-link></li>
		      	<li><router-link to="/sign">标签</router-link></li>
		      </ul>
		    </div>
	  	</div>
	<!-- </div> -->
</template>
<style type="text/css">
	.panel.sidebar{}
	.panel.sidebar .panel-heading{}
	.panel.sidebar .panel-heading img{
		border-radius: 100%;
		height: 100%;
		width:100%;
	}
	.panel.sidebar .panel-heading span{
		display: block;
		padding: 0 10px;
		margin:10px 0; 
	}
	.panel.sidebar .panel-heading h3{
		position: relative;
	}
	.panel.sidebar .panel-heading h3:after{
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
	.panel.sidebar .panel-heading h3:hover::after{
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
</style>