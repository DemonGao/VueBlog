<template>
  <div class="upload">
    <header>
      <slot name="header"></slot>
      {{uploadShow}}
    </header>
    <div class="content">
      <slot></slot>
    </div>
    <footer>
      <slot name="button"></slot>
    </footer>
  </div>
</template>

<script>
  export default{
    props: ['uploadShow'],

  }
</script>

<style scoped="scoped">
  .upload{
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width: 400px;
    height:100px;

    border:1px solid #cccccc;
    -webkit-border-radius:5px;
    -moz-border-radius:5px;
    border-radius:5px;
    background-color:#fff;
    -webkit-box-shadow: 5px 10px 50px #ccc;
    -moz-box-shadow: 5px 10px 50px #ccc;
    box-shadow: 5px 10px 50px #ccc;
  }
  header{
    padding:0 20px;
    margin:5px 0;
    border-bottom:1px solid #000000;
  }
  .content{
    padding:0 20px;
  }
  footer{
    padding:0 20px;
  }
  footer button{
    float: right;
  }
</style>
