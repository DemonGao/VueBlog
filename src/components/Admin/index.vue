<template>
  <div class="admin">
    <transition>
      <router-view></router-view>
    </transition>
    <model></model>
  </div>
</template>
<script>

  import Model from './Util/Model.vue'
  export default{
    components: {
      'model': Model
    },
    data(){
      return {
        model: false,
      }
    },
    mounted(){
      let demongao_user = localStorage.getItem('demongao_user');

      if (localStorage.getItem('demongao_user') == null) {
        this.$router.push({path:"/admin/login"});
      }
    }

  }
</script>
<style type="text/css" scoped="scoped">

  .admin {
    height: 100%;
    background-color: #fff;
    box-shadow: 1px 1px 5px #fff;
  }

</style>
