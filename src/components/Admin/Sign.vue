<template>
  <div class="adminsign">
    <el-breadcrumb separator="/" class="adminsign-head">
      <el-breadcrumb-item :to="{ path: '/admin_home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>标签管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      v-loading.body="loading"
      element-loading-text="拼命加载中..."
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        label="日期"
        width="180">
        <template scope="scope">
          <el-icon name="time"></el-icon>
          <span style="margin-left: 10px">{{  new Date(scope.row.date).Format("YYYY-MM-DD")}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="标签名称"
        >
        <template scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag>{{ scope.row.tag }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <div class="block">
      <span class="demonstration"></span>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="pageSizes"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </div> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        loading: true,
        // pageSizes:[2,4,6,8],
        // pageSize: 2,
        // currentPage:1,
        // total:8
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.post(this.$store.state.serverurl+'api/delTag',{
            _id:row._id,
          }).then((response) => {
            var data = response.data;
            console.log(data);
            if(data.status){
              this.tableData.splice(index,1);
              this.$message({
                type: 'success',
                message: data.msg
              });

            }else{
              this.$message({
                type: 'error',
                message: data.msg
              });
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
      }
    },
    mounted(){
      this.axios.get(this.$store.state.serverurl+'api/getTags').then((response) => {
          var data = response.data;
          this.loading=false;
          if (data.status) {
            this.tableData = data.data;
          }else{
            alert(data.tableData);
          }
      })

      
    },
  }
</script>
<style type="text/css" scoped="scoped">
.adminsign{
  height: 100%;
}
  .adminsign-head{
    padding: 20px;
    font-size: 16px;
    margin-bottom: 30px;
    background-color: #fff;
    box-shadow: 2px 3px 5px 0 #ddd;
  }
</style>