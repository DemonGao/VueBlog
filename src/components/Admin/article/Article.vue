
<template>
  <div class="article">
    <el-breadcrumb separator="/" class="article-head">
      <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-if="$route.path=='/admin/article/add'||$route.path.indexOf('/admin/article/edit')!=-1" :to="{ path: '/admin/article'}">文章管理</el-breadcrumb-item>
      <el-breadcrumb-item v-if="$route.path!='/admin/article/add'&&$route.path.indexOf('/admin/article/edit')==-1">文章管理</el-breadcrumb-item>
      <el-breadcrumb-item v-if="$route.path=='/admin/article/add'">文章添加</el-breadcrumb-item>
      <el-breadcrumb-item v-if="$route.path.indexOf('/admin/article/edit')!=-1">文章修改</el-breadcrumb-item>
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
.article{
  height: 100%;
  background-color: #fff;
}
  .article-head{
    padding: 20px 40px 20px 20px;
    font-size: 16px;
    box-sizing: border-box;
    border-bottom: 10px solid #f5f5f5;
  }
</style>
