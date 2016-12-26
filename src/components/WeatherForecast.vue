<template>
	<div id="weather">
		<figure class="weather-nowday">
			<p class="title">
				<span>{{pubdate}}</span>
				<span>星期{{week}}</span>
				<span>烟台</span>
			</p>
			<figcaption class="weather-nowday-figcaption">
				<h2>
					<span>{{temperature}}°</span>
					<span>[ <p>{{updatetime}}</p> 更新 ]</span>
					</h2>
					<p class="info">
						<img :src="img">
						<span>{{info}} {{lowweather}}/{{hightweather}}</span>
					</p>
					<div class="state">
						<p>PM2.5：{{pm25}}&nbsp;&nbsp;&nbsp;&nbsp;{{quality}}</p>
						<p>{{wind.direct}}&nbsp;{{wind.power}}</p>
					</div>
			</figcaption>
		</figure>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				pubdate:null,
				week:null,
				temperature:null,
				updatetime:null,
				info:null,
				img:null,
				wind:{
					direct:null,
					power:null
				},
				hightweather:null,
				lowweather:null,
				pm25:null,
				quality:null
			}
		},
		beforeCreate:function(){
			var _self = this;
			JSONP('http://op.juhe.cn/onebox/weather/query', {  
			  data: {  
			      	cityname:'烟台',
  					dataType:'json',
  					key:"69a45338e81d01fb2b9e3d322fdc9e99"  
			  },  
			  callback: function (data) {  
			    // data 是服务端返回的数据
			    var weather = data.result.data;
			    _self.pubdate = weather.pubdate;//日期
			    _self.week = weather.weather[0].week;//日期
			    _self.updatetime = weather.realtime.time;
			    _self.temperature = weather.realtime.weather.temperature;
			    _self.info = weather.realtime.weather.info;
			    _self.img ='../../static/img/weatherIcon/'+ weather.realtime.weather.img +'.png';
			    _self.wind.direct = weather.realtime.wind.direct;
			    _self.wind.power = weather.realtime.wind.power;
			    _self.hightweather = weather.weather[0].info.day[2];
			    _self.lowweather = weather.weather[0].info.night[2];
			    _self.pm25 = weather.pm25.pm25.pm25;
			    _self.quality = weather.pm25.pm25.quality;
			    console.log(weather); 
			  }  
			})  
		},
		mounted:function(){
			console.log(this.weather);
		}
	}  
</script>
<style scoped>
	/*天气css*/
#weather{
	box-sizing: border-box;
	/*width:100%;*/
	margin: 10px;
	
}
.weather-nowday{
	background-image: url('../../static/img/weather_bg.png');
	background-size: 100% 100%;
	background-position:center center;
	color:#FFFFFF;
	border-radius: 10px;
}
.weather-nowday .title,.weather-nowday h2,.weather-nowday .info{
	padding: 10px;
}
/*天气顶部时间星期地点*/
.weather-nowday .title span:nth-child(4){
	float: right;
}
.weather-nowday .title span:nth-child(3){
	float: right;
	font-size: 12px;
	vertical-align: top;
	line-height: 16px;
}
.weather-nowday .title span:nth-child(3) i{
	text-decoration: none;
	cursor: pointer;
	color: #83D2ED;
	
}
.weather-nowday .title span:nth-child(1){
	margin-right: 10px;
}
.weather-nowday img{
}
.weather-nowday-figcaption{
	
}
.weather-nowday-figcaption h2{
	margin-top: 80px;
	text-align: center;
}
.weather-nowday-figcaption h2::after{
	/*清除浮动*/
	clear:both;
	content:'.';
	display:block;
	width: 0;
	height: 0;
	visibility: hidden;
}
.weather-nowday-figcaption h2 span{
	/*float: left;*/
}
.weather-nowday-figcaption h2 span:nth-child(1){
	display: inline-block;
	width: 100%;
	font-size: 3.5em;
}
.weather-nowday-figcaption h2 span:nth-child(2){
	font-size: 12px;
	display: inline-block;
	position: relative;
	top: -20px;	
	left: 50px;
}
.weather-nowday-figcaption h2 span:nth-child(2) p{
	width: 30px;
	vertical-align: top;
	overflow: hidden;
	display: inline-block;
}
.weather-nowday-figcaption .info{
	text-align: center;
}
.weather-nowday-figcaption .info img{
	width: 25px;
}
.weather-nowday-figcaption .info span{
	display: inline-block;
	vertical-align: top;
	height: 25px;
	line-height: 25px;
}
.weather-nowday-figcaption .state{
	text-align: center;
	box-sizing: border-box;
	border-top: 2px solid #FFFFFF;
	padding: 5px 10px;
}
.weather-nowday-figcaption .state p{
	font-size: 12px;
	margin-left: 10px;
	display: inline-block;
	vertical-align: top;	
}


/*天气输入*/
.selectcity{
	position: relative;
	top: 0;
	float: right;
}
#Icityname{
	width: 80px;
	text-indent: .25em;
}

</style>