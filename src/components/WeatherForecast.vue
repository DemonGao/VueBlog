<template>
	<div id="weather">
		<figure class="weather-nowday">
			<p class="title">
				<span>2016-12-26</span>
				<span>周一</span>
				<span>[<i id="cityname">切换</i>]</span>
				<span>北京</span>
			</p>
			<figcaption class="weather-nowday-figcaption">
				<h2>
					<span>3°</span>
					<span>[<p>16:00:00</p>更新]</span>
					</h2>
					<p class="info">
						<img src="img/weatherIcon/1.png">
						<span>多云-7/4</span>
					</p>
					<div class="state">
						<p>空气质量：优</p>
						<p>湿度：23%</p>
						<p>东北风 3级</p>
					</div>
			</figcaption>
		</figure>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{

			}
		},
		mounted:function(){
			this.axios.get('http://op.juhe.cn/onebox/weather/query',{
  				params:{
  					cityname:'济南',
  					dataType:'json',
  					key:"69a45338e81d01fb2b9e3d322fdc9e99"
  				}
  			}).then((response) => {
  				console.log(response.data)
  				// MapUtils.createMarker(map,response.data,_self);
  				// this.items = response.data.results;//将查询出来的数据赋值给items
			})
		}

	}
</script>
<style scoped>
	.weather{
		border:1px solid red;
	}
</style>