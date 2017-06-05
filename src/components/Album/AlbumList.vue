<template>
<ul class="albumlist">
  <router-link to="/album/photos" class="albumitem"  v-for="item in albums" tag="li">
    <figure>
      <img src="../../assets/img/bg.jpg">
    </figure>
    <em class="albumitem-title">2017.3.19日游记</em>
  </router-link>
</ul>
</template>

<script>
  export default{
    data(){
      return{
//        albums:[1,2,3,4,5,6,7,8,9,0,10,11,12,13,14,15,16,17,18]
        albums:[1,2,3,4,5]
      }
    }

  }
</script>

<style scoped="scoped">
  .albumlist{
    margin:0 -20px;
    padding:0;
    height:calc(100% - 50px);
    list-style: none;
  }

  .albumitem{
    float: left;
    width:20%;
    background-color: red;
    margin: 2.5%;
    height:200px;

    position: relative;
  }

  /*---------------------------标题---------------------------*/

  .albumitem .albumitem-title{
    position: absolute;
    bottom:0;
    width:100%;
    color: #ffffff;
    padding-left: 2em;;
    background-color: rgba(0,0,0,.4);
  }

  /*---------------------------封面图片---------------------------*/

  .albumitem figure{
    width:100%;
    height:100%;
  }
  .albumitem figure img{
    width:100%;
    height:100%;
  }

  /*媒体查询 兼容性 小于800像素的效果*/
  @media (max-width: 1100px) {
    .albumitem{
      width:30%;
      margin:1.65%;
    }

  }

  @media (max-width: 900px) {
    .albumitem{
      width:45%;
      margin:2.5%;
    }

  }

  @media (max-width: 800px) {
    .albumlist{
      margin:0;
    }

  }

  @media (max-width: 500px) {
    .albumitem{
      width:100%;
      margin:0;
      margin-bottom: 20px;;
    }

  }
</style>
