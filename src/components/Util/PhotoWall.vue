<template>
  <!--照片墙组件-->
  <div class="photowall" id="photowall">
    {{imgs}}
  </div>
</template>

<script>
  export default{
    props: {
      imgs: {},
    },
    data(){
      return {

      }
    },
    mounted(){
      //
      var new_image = new Image();

      new_image.src = this.imgs[0].src;
      console.log(this.imgs[0].src)
      console.log(new_image.width);
//      console.log(document.getElementById("photowall").offsetWidth)
    },
    methods:{

    }
  }
</script>

<style scoped="scoped">

</style>
