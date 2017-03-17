<template>
	<div class="timeaxis panel">
		<div class="panel-heading">
			<h3>时间轴</h3>
		</div>
		<div class="panel-body">
			<section>
				<h3>2016</h3>
				<ul class="timeaxis-list">
					<li class="timeaxis-item">
						<span>2016-10-26</span>
						<router-link :to="{name:'home',params:{tag:'all'}}" >JavaScript闭包详解</router-link>
					</li>
				</ul>
			</section>
		</div>
	</div>
</template>
<style type="text/css" scoped="scoped">
  .timeaxis{
    position: absolute;
    height: 100%;
    width: 100%;
  }
	.timeaxis .panel-heading{
		padding:10px 30px;
		background-color: #fff;
		border-bottom: 1px solid #CCC;
	}
	.timeaxis .panel-heading h3{margin-top: 10px;}
	.timeaxis .panel-body{
		/*padding: 10px 20px;*/

    min-height: -moz-calc(100% - 59px);
    min-height: -webkit-calc(100% - 59px);
    min-height: calc(100% - 59px);
    padding: 10px 20px;

    background-color: #ffffff;
	}
	.timeaxis .panel-body section{
		position: relative;
		padding-left: 10px;
		border-left: 2px solid rgba(101,248,205,1);
	}
	.timeaxis .panel-body section h3{
		margin: 0;
	}
	.timeaxis .panel-body section h3:before{
		position: absolute;
		left: -5.5px;
		content: '';
		width: 10px;
		height: 10px;
		top: 8px;
		background-color: rgba(101,248,205,1);
		border:1px solid #fff;
		border-radius: 10px;
	}
	.timeaxis-list{
		position: relative;
		padding-left: 2em;
		list-style: none;
	}
	.timeaxis-list:before{
		position: absolute;
		width: 5px;
		height: 5px;
	}
</style>
