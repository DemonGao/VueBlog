<template>
  <div class="adminsign">
    <el-breadcrumb separator="/" class="adminsign-head">
      <el-breadcrumb-item :to="{ path: '/admin_home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>标签管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="adminsign-content">
      <div class="btnteam">
        <el-button type="primary" icon="plus" @click="handleEdit">添加</el-button>
        <el-input
          class="tagSearc"
          placeholder="请输入标签名称"
          icon="search"
          v-model="tag_search"
          :on-icon-click="handleEdit">
        </el-input>
        <!-- <el-button type="primary" icon="search">搜索</el-button> -->
      </div>
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
    </div>

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
        tag_search:''
        // pageSizes:[2,4,6,8],
        // pageSize: 2,
        // currentPage:1,
        // total:8
      }
    },
    methods: {
      handleEdit(index, row) {
        var params = {
          tag:''
        }
        var inputPlaceholder = '标签名称';
        if(typeof(row) != "undefined"){

          params._id = row._id;
          inputPlaceholder = row.tag;
        }
        // console.log(params);
        this.$prompt('请输入想要添加的标签名称', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPlaceholder:inputPlaceholder,
          inputPattern: /^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$$/,
          inputErrorMessage: '请输入2-20位英文、数字或汉字'
        }).then(({ value }) => {
          params.tag = value;
          this.axios.post(this.$store.state.serverurl+'api/saveTag',params).then((response) => {
            var data = response.data;
            this.loading=false;
            if (data.status) {
              typeof(row) != "undefined" ? this.tableData[index].tag=data.tag : this.tableData.push(data.tag)
              // this.tableData.push(data.tag);
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
            message: '取消输入'
          });
        });
      },
      handleDelete(index, row) {
        // console.log(index, row);
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.post(this.$store.state.serverurl+'api/delTag',{
            _id:row._id,
          }).then((response) => {
            var data = response.data;
            // console.log(data);
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
//        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
//        console.log(`当前页: ${val}`);
      }
    },
    mounted(){
      this.axios.get(this.$store.state.serverurl+'api/getTags').then((response) => {
          var data = response.data;
//          console.log(data);
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
  background-color: #fff;
}
  .adminsign-head{
    padding: 20px;
    font-size: 16px;
    box-sizing: border-box;
    border-bottom: 10px solid #f5f5f5;
  }
  .adminsign-content{
    min-height: 100%;
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
