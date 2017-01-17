<template>
  <div class="adminsign">
    <el-breadcrumb separator="/" class="adminsign-head">
      <el-breadcrumb-item :to="{ path: '/admin_home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-if="$route.path=='/admin_articles/add'" :to="{ path: '/admin_articles'}">文章管理</el-breadcrumb-item>
      <el-breadcrumb-item v-if="$route.path!='/admin_articles/add'">文章管理</el-breadcrumb-item>
      <el-breadcrumb-item v-if="$route.path=='/admin_articles/add'">文章添加</el-breadcrumb-item>
      <!-- $route.path.indexOf('/admin_articles/edit')!=-1" :to="{ path: '/admin_articles'} -->
    </el-breadcrumb>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
       
      }
    },
    methods: {
      
    },
  }
</script>
<style type="text/css" scoped="scoped">
.adminsign{
  height: 100%;
  background-color: #fff;
}
  .adminsign-head{
    padding: 20px;
    font-size: 16px;
    box-sizing: border-box;
    border-bottom: 10px solid #f5f5f5;
  }
  .adminsign-content{
    padding: 0 20px;
  }
    .btnteam{
      padding:20px 0;
    }
      .tagSearc{
        float: right;
        width: 200px;
      }
</style>