<!--template<template>-->
<!--<div class="albumphoto">-->
<!--<div class="albumphotoitem" v-for="item in imgs">-->
<!--<div class="space"></div>-->
<!--<div class="progressive">-->
<!--<img class="preview" v-progressive="item.src" :data-srcset="item.srcset" :src="item.preview" />-->
<!--</div>-->
<!--</div>-->
<!--&lt;!&ndash;<figure class="albumphotoitem">&ndash;&gt;-->
<!--&lt;!&ndash;<img src="../../assets/img/bg.jpg">&ndash;&gt;-->
<!--&lt;!&ndash;</figure>&ndash;&gt;-->
<!--&lt;!&ndash;<figure class="albumphotoitem">&ndash;&gt;-->
<!--&lt;!&ndash;<img src="../../assets/img/bg.jpg">&ndash;&gt;-->
<!--&lt;!&ndash;</figure>&ndash;&gt;-->
<!--&lt;!&ndash;<figure class="albumphotoitem">&ndash;&gt;-->
<!--&lt;!&ndash;<img src="../../assets/img/bg.jpg">&ndash;&gt;-->
<!--&lt;!&ndash;</figure>&ndash;&gt;-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default{-->
<!--data(){-->
<!--return {-->
<!--imgs: [-->
<!--{-->
<!--src: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161494811.jpg',-->
<!--preview: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161494811.jpg-smphoto'-->
<!--},-->
<!--{-->
<!--src: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161917374.jpg',-->
<!--preview: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161917374.jpg-smphoto'-->
<!--},-->
<!--{-->
<!--src: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/2.jpg',-->
<!--preview: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/r2.jpg'-->
<!--},-->
<!--{-->
<!--src: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/3.jpg',-->
<!--preview: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/r3.jpg'-->
<!--}-->
<!--]-->
<!--}-->
<!--}-->
<!--}-->
<!--</script>-->

<!--<style scoped="scoped">-->

<!--.albumphoto{-->
<!--margin:0 -20px;-->
<!--padding:0;-->
<!--height:calc(100% - 50px);-->
<!--list-style: none;-->
<!--}-->
<!--.albumphotoitem{-->
<!--float: left;-->
<!--width:20%;-->
<!--margin: 2.5%;-->
<!--height:auto;-->

<!--position: relative;-->

<!--box-sizing: border-box;-->
<!--border:8px solid #ffffff;-->
<!-- -webkit-border-radius:5px;-->
<!-- -moz-border-radius:5px;-->
<!--border-radius:5px;-->
<!--}-->

<!--/*-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;封面图片-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;*/-->


<!--.albumphotoitem img{-->
<!--width:100%;-->
<!--/*height:100%;*/-->
<!-- -webkit-border-radius:5px;-->
<!-- -moz-border-radius:5px;-->
<!--border-radius:5px;-->
<!--overflow: hidden;-->
<!--}-->

<!--/*媒体查询 兼容性 小于800像素的效果*/-->
<!--@media (max-width: 1100px) {-->
<!--.albumphotoitem{-->
<!--width:30%;-->
<!--margin:1.65%;-->
<!--}-->

<!--}-->

<!--@media (max-width: 900px) {-->
<!--.albumphotoitem{-->
<!--width:45%;-->
<!--margin:2.5%;-->
<!--}-->

<!--}-->

<!--@media (max-width: 800px) {-->
<!--.albumphoto{-->
<!--margin:0;-->
<!--}-->

<!--}-->

<!--@media (max-width: 500px) {-->
<!--.albumphotoitem{-->
<!--width:100%;-->
<!--margin:0;-->
<!--margin-bottom: 20px;;-->
<!--}-->

<!--}-->
<!--</style>-->


<!--<template>-->
<!--&lt;!&ndash;<div class="albumphoto">&ndash;&gt;-->

<!--&lt;!&ndash;<figure v-for="item in imgs" class="albumphotoitem progressive">&ndash;&gt;-->
<!--&lt;!&ndash;<img class="preview" v-progressive="item.src" :data-srcset="item.srcset" :src="item.preview" />&ndash;&gt;-->
<!--&lt;!&ndash;</figure>&ndash;&gt;-->
<!--&lt;!&ndash;</div>&ndash;&gt;-->
<!--<div id="main">-->
<!--<div class="pin">-->
<!--<div class="box">-->
<!--<img src="./../../assets/images/3.jpg"/>-->
<!--</div>-->
<!--</div>-->
<!--<div class="pin">-->
<!--<div class="box">-->
<!--<img src="./../../assets/images/1.jpg"/>-->
<!--</div>-->
<!--</div>-->
<!--<div class="pin">-->
<!--<div class="box">-->
<!--<img src="./../../assets/images/4.jpg"/>-->
<!--</div>-->
<!--</div>-->
<!--<div class="pin">-->
<!--<div class="box">-->
<!--<img src="./../../assets/images/2.jpg"/>-->
<!--</div>-->
<!--</div>-->
<!--<div class="pin">-->
<!--<div class="box">-->
<!--<img src="http://7xiblh.com1.z0.glb.clouddn.com/progressive/2.jpg"/>-->
<!--</div>-->
<!--</div>-->

<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default{-->
<!--data(){-->
<!--return {-->
<!--imgs: [-->
<!--{-->
<!--src: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161494811.jpg',-->
<!--preview: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161494811.jpg-smphoto'-->
<!--},-->
<!--{-->
<!--src: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161917374.jpg',-->
<!--preview: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161917374.jpg-smphoto'-->
<!--},-->
<!--{-->
<!--src: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/2.jpg',-->
<!--preview: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/r2.jpg'-->
<!--},-->
<!--{-->
<!--src: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/3.jpg',-->
<!--preview: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/r3.jpg'-->
<!--},-->
<!--{-->
<!--src: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161494811.jpg',-->
<!--preview: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161494811.jpg-smphoto'-->
<!--},-->
<!--{-->
<!--src: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161917374.jpg',-->
<!--preview: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161917374.jpg-smphoto'-->
<!--},-->
<!--{-->
<!--src: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/2.jpg',-->
<!--preview: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/r2.jpg'-->
<!--},-->
<!--{-->
<!--src: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/3.jpg',-->
<!--preview: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/r3.jpg'-->
<!--},-->
<!--{-->
<!--src: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161494811.jpg',-->
<!--preview: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161494811.jpg-smphoto'-->
<!--},-->
<!--{-->
<!--src: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161917374.jpg',-->
<!--preview: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161917374.jpg-smphoto'-->
<!--},-->
<!--{-->
<!--src: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/2.jpg',-->
<!--preview: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/r2.jpg'-->
<!--},-->
<!--{-->
<!--src: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/3.jpg',-->
<!--preview: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/r3.jpg'-->
<!--},-->
<!--{-->
<!--src: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161494811.jpg',-->
<!--preview: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161494811.jpg-smphoto'-->
<!--},-->
<!--{-->
<!--src: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161917374.jpg',-->
<!--preview: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161917374.jpg-smphoto'-->
<!--},-->
<!--{-->
<!--src: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/2.jpg',-->
<!--preview: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/r2.jpg'-->
<!--},-->
<!--{-->
<!--src: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/3.jpg',-->
<!--preview: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/r3.jpg'-->
<!--}-->
<!--]-->
<!--}-->
<!--},-->
<!--mounted(){-->
<!--this.waterfall('main','pin');-->

<!--var dataInt={'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'}]};-->
<!--window.onscroll=()=>{-->
<!--if(this.checkscrollside()){-->
<!--var oParent = document.getElementById('main');// 父级对象-->
<!--for(var i=0;i<dataInt.data.length;i++){-->
<!--var oPin=document.createElement('div'); //添加 元素节点-->
<!--oPin.className='pin';                   //添加 类名 name属性-->
<!--oParent.appendChild(oPin);              //添加 子节点-->
<!--var oBox=document.createElement('div');-->
<!--oBox.className='box';-->
<!--oPin.appendChild(oBox);-->
<!--var oImg=document.createElement('img');-->
<!--oImg.src='./../../assets/images/'+dataInt.data[i].src;-->
<!--oBox.appendChild(oImg);-->
<!--}-->
<!--this.waterfall('main','pin');-->
<!--};-->
<!--}-->
<!--},-->
<!--methods:{-->
<!--/*-->
<!--parend 父级id-->
<!--pin 元素id-->
<!--*/-->
<!--waterfall(parent,pin){-->
<!--var oParent=document.getElementById(parent);// 父级对象-->
<!--var aPin=this.getClassObj(oParent,pin);// 获取存储块框pin的数组aPin-->
<!--console.log(aPin)-->
<!--var iPinW=aPin[0].offsetWidth;// 一个块框pin的宽-->
<!--//        var num=Math.floor(document.documentElement.clientWidth/iPinW);//每行中能容纳的pin个数【窗口宽度除以一个块框宽度】-->
<!--var num=Math.floor(parseInt(getComputedStyle(oParent, null)['width'])/iPinW);//每行中能容纳的pin个数【窗口宽度除以一个块框宽度】-->
<!--oParent.style.cssText='width:'+iPinW*num+'px;margin:0 auto;';//设置父级居中样式：定宽+自动水平外边距-->
<!--var pinHArr=[];//用于存储 每列中的所有块框相加的高度。a-->
<!--for(var i=0;i<aPin.length;i++){//遍历数组aPin的每个块框元素-->
<!--var pinH=aPin[i].offsetHeight;-->
<!--console.log(aPin[i].offsetHeight)-->
<!--console.log(pinH)-->
<!--if(i<num){-->
<!--pinHArr[i]=pinH; //第一行中的num个块框pin 先添加进数组pinHArr-->

<!--}else{-->
<!--var minH=Math.min.apply(null,pinHArr);//数组pinHArr中的最小值minH-->
<!--console.log(minH)-->
<!--var minHIndex=this.getminHIndex(pinHArr,minH);-->
<!--aPin[i].style.position='absolute';//设置绝对位移-->
<!--aPin[i].style.top=minH+'px';-->
<!--aPin[i].style.left=aPin[minHIndex].offsetLeft+'px';-->
<!--//数组 最小高元素的高 + 添加上的aPin[i]块框高-->
<!--pinHArr[minHIndex]+=aPin[i].offsetHeight;//更新添加了块框后的列高-->
<!--}-->
<!--}-->
<!--},-->
<!--getClassObj(parent,className){-->
<!--var obj=parent.getElementsByTagName('*');//获取 父级的所有子集-->
<!--var pinS=[];//创建一个数组 用于收集子元素-->
<!--for (var i=0;i<obj.length;i++) {//遍历子元素、判断类别、压入数组-->
<!--if (obj[i].className==className){-->
<!--pinS.push(obj[i]);-->
<!--}-->
<!--};-->
<!--return pinS;-->
<!--},-->
<!--getminHIndex(arr,minH){-->
<!--for(var i in arr){-->
<!--if(arr[i]==minH){-->
<!--return i;-->
<!--}-->
<!--}-->
<!--},-->
<!--checkscrollside(){-->
<!--var oParent=document.getElementById('main');-->
<!--var aPin=this.getClassObj(oParent,'pin');-->
<!--var lastPinH=aPin[aPin.length-1].offsetTop+Math.floor(aPin[aPin.length-1].offsetHeight/2);//创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)-->
<!--var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;//注意解决兼容性-->
<!--var documentH=document.documentElement.clientHeight;//页面高度-->
<!--return (lastPinH<scrollTop+documentH)?true:false;//到达指定高度后 返回true，触发waterfall()函数-->
<!--}-->
<!--}-->
<!--}-->
<!--</script>-->
<!--<style scoped="scoped">-->

<!--#main{-->
<!--position: relative;-->
<!--}-->
<!--.pin{-->
<!--padding: 15px 0 0 15px;-->
<!--float:left;-->
<!--}-->
<!--.box{-->
<!--padding: 10px;-->
<!--border:1px solid #ccc;-->
<!--box-shadow: 0 0 6px #ccc;-->
<!--border-radius: 5px;-->
<!--}-->
<!--.box img{-->
<!--width:162px;-->
<!--height:auto;-->
<!--}-->


<!--/*.albumphoto{*/-->
<!--/*display: flex;*/-->
<!--/*flex-flow:row wrap;*/-->
<!--/*align-content: flex-start;*/-->
<!--/*margin:0 -20px;*/-->
<!--/*padding:0;*/-->
<!--/*height:calc(100% - 50px);*/-->
<!--/*list-style: none;*/-->
<!--/*}*/-->
<!--/*.albumphotoitem{*/-->
<!--/*!*float: left;*!*/-->
<!--/*height: 150px;*/-->
<!--/*margin: 2.5%;*/-->
<!--/*width:auto;*/-->
<!--/*position: relative;*/-->
<!--/*box-sizing: border-box;*/-->
<!--/*border:8px solid #ffffff;*/-->
<!--/*-webkit-border-radius:5px;*/-->
<!--/*-moz-border-radius:5px;*/-->
<!--/*border-radius:5px;*/-->
<!--/*}*/-->
<!--/*!*-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;封面图片-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;*!*/-->
<!--/*.albumphotoitem img{*/-->
<!--/*width:100%;*/-->
<!--/*!*height:100%;*!*/-->
<!--/*-webkit-border-radius:5px;*/-->
<!--/*-moz-border-radius:5px;*/-->
<!--/*border-radius:5px;*/-->
<!--/*overflow: hidden;*/-->
<!--/*}*/-->
<!--/*!*媒体查询 兼容性 小于800像素的效果*!*/-->
<!--/*@media (max-width: 1100px) {*/-->
<!--/*.albumphotoitem{*/-->
<!--/*!*width:30%;*!*/-->
<!--/*margin:1.65%;*/-->
<!--/*}*/-->
<!--/*}*/-->
<!--/*@media (max-width: 900px) {*/-->
<!--/*.albumphotoitem{*/-->
<!--/*!*width:45%;*!*/-->
<!--/*margin:2.5%;*/-->
<!--/*}*/-->
<!--/*}*/-->
<!--/*@media (max-width: 800px) {*/-->
<!--/*.albumphoto{*/-->
<!--/*margin:0;*/-->
<!--/*}*/-->
<!--/*}*/-->
<!--/*@media (max-width: 500px) {*/-->
<!--/*.albumphotoitem{*/-->
<!--/*!*width:100%;*!*/-->
<!--/*margin:0;*/-->
<!--/*margin-bottom: 20px;;*/-->
<!--/*}*/-->
<!--/*}*/-->
<!--</style>-->


<!--<div>-->

<!--<template>-->
<!--<div class="albumphoto">-->

<!--<photo-wall :imgs="imgs"></photo-wall>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->

<!--import PhotoWall from './../Util/PhotoWall.vue'-->
<!--export default{-->
<!--components:{-->
<!--photoWall:PhotoWall-->
<!--},-->
<!--data(){-->
<!--return {-->
<!--imgs: [-->
<!--{-->
<!--src: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161494811.jpg',-->
<!--preview: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161494811.jpg-smphoto'-->
<!--},-->
<!--{-->
<!--src: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161917374.jpg',-->
<!--preview: 'http://cdn.demongao.com/ecompany/upload/userimg/userimg-1490161917374.jpg-smphoto'-->
<!--},-->
<!--{-->
<!--src: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/2.jpg',-->
<!--preview: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/r2.jpg'-->
<!--},-->
<!--{-->
<!--src: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/3.jpg',-->
<!--preview: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/r3.jpg'-->
<!--}-->
<!--]-->
<!--}-->
<!--}-->
<!--}-->
<!--</script>-->

<!--<style scoped="scoped">-->

<!--.albumphoto{-->
<!--/*margin:0 -20px;*/-->
<!--padding:0;-->
<!--margin-top:20px;-->
<!--height:calc(100% - 70px);-->
<!--list-style: none;-->

<!--}-->
<!--/*-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;封面图片-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;*/-->

<!--@media (max-width: 800px) {-->
<!--.albumphoto{-->
<!--margin:0;-->
<!--}-->

<!--}-->
<!--</style>-->

<!--</div>-->


<template>
  <div class="albumphoto">
    <div class="albumphotoitem" v-for="item in imgs">
      <div class="space"></div>
      <div class="progressive">
        <img class="preview" v-progressive="item.src" :data-srcset="item.srcset" :src="previewImg(item.src)"/>
      </div>
    </div>
    <!--<figure class="albumphotoitem">-->
    <!--<img src="../../assets/img/bg.jpg">-->
    <!--</figure>-->
    <!--<figure class="albumphotoitem">-->
    <!--<img src="../../assets/img/bg.jpg">-->
    <!--</figure>-->
    <!--<figure class="albumphotoitem">-->
    <!--<img src="../../assets/img/bg.jpg">-->
    <!--</figure>-->

  </div>
</template>

<script>

  export default{
    components: {

    },
    computed: {

    },
    data(){
      return {
        containerDom:'',
        imgs: [
          {
            src: 'http://ecompany.demongao.com/1.jpg',
          },
          {
            src: 'http://ecompany.demongao.com/2.jpg',

          },
          {
            src: 'http://ecompany.demongao.com/3.jpg',

          },
          {
            src: 'http://ecompany.demongao.com/4.jpg',

          },
          {
            src: 'http://ecompany.demongao.com/5.jpg',

          },
          {
            src: 'http://ecompany.demongao.com/6.jpg',

          },
          {
            src: 'http://ecompany.demongao.com/7.jpg',

          },
          {
            src: 'http://ecompany.demongao.com/8.jpg',

          },
          {
            src: 'http://ecompany.demongao.com/9.jpg',

          },
          {
            src: 'http://ecompany.demongao.com/10.jpg',

          }
        ]
      }
    },
    mounted(){
      this.containerDom = this.$el;
      var imgArr = this.containerDom.querySelectorAll('img');


    },
    methods:{
      previewImg(src){
        return src+'-loadImg';
      }
    }
  }
</script>

<style scoped="scoped">
  .m-gallery>div{
    display: flex;
    flex-wrap: wrap;
  }
  .m-gallery .item{
    height: 100px;
    flex-grow:1;
    margin: 2px;
  }
  .m-gallery  img{
    height: 100px;
    min-width: 100%;
    max-width: 100%;
    /*       background-color: red;
     */      object-fit: cover;
    vertical-align: bottom;
  }

  .albumphoto{
    display: flex;
    flex-wrap: wrap;
  }

  .albumphoto .albumphotoitem{
    height: 200px;
    flex-grow:1;
    margin: 3px;
  }


  /*.albumphoto {*/
    /*margin-left:-20px;*/
    /*margin-right:-20px;*/
    /*padding: 0;*/
    /*height: calc(100% - 50px);*/
    /*list-style: none;*/
  /*}*/

  /*.albumphotoitem {*/
    /*float: left;*/
    /*width: 20%;*/
    /*margin: 2.5%;*/
    /*height: 30%;*/

    /*position: relative;*/

    /*box-sizing: border-box;*/
    /*border: 8px solid #ffffff;*/
    /*-webkit-border-radius: 5px;*/
    /*-moz-border-radius: 5px;*/
    /*border-radius: 5px;*/
  /*}*/

  /*!*---------------------------封面图片---------------------------*!*/

  /*.albumphotoitem img {*/
    /*width: 100%;*/
    /*!*height:100%;*!*/
    /*object-fit:cover;*/
    /*-webkit-border-radius: 5px;*/
    /*-moz-border-radius: 5px;*/
    /*border-radius: 5px;*/
    /*overflow: hidden;*/
  /*}*/
  /*!*媒体查询 兼容性 小于XXX像素的效果*!*/
  /*@media (max-width: 1200px) {*/
    /*.albumphotoitem {*/
      /*width: 30%;*/
      /*margin: 1.65%;*/
    /*}*/
  /*}*/

  /*@media (max-width: 900px) {*/
    /*.albumphotoitem {*/
      /*width: 45%;*/
      /*margin: 2.5%;*/
    /*}*/
  /*}*/

  /*@media (max-width: 800px) {*/
    /*.albumphoto {*/
      /*margin:10px 0 0;*/
    /*}*/

  /*}*/

  /*@media (max-width: 500px) {*/
    /*.albumphoto*/
    /*.albumphotoitem {*/
      /*marginm-bottom:5px;*/
      /*margin-top:0;*/
      /*height:150px;*/
    /*}*/

  /*}*/
</style>
