<template>
  <div class="article-content">
    <div class="btnteam">
        <el-button type="primary" icon="plus" @click="handleEdit">添加</el-button>
        <el-input
          class="tagSearc"
          placeholder="请输入文章名称"
          icon="search"
          v-model="searchVal"
          :on-icon-click="handleEdit">
        </el-input>
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
          label="标题">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.title }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="标签"
          width="180"
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
    <div class="block">
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
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        loading: true,
        searchVal:'',
        tagType:'all',
        pageSizes:[2,4,6,8],
        pageSize: 2,
        currentPage:1,
        total:8
      }
    },
    methods: {
      handleEdit(index, row) {
      	if (typeof(row)!="undefined") {
      		this.$router.push('/admin_articles/edit/'+row._id);
      	}else{
      		this.$router.push('/admin_articles/add');
      	}

      },
      handleDelete(index, row) {
        console.log(index, row);
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.post(this.$store.state.serverurl+'api/delArticle',{
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
      },
    },
    mounted(){
      this.axios.get(this.$store.state.serverurl+'api/getArticles',{
      	params:{
		  	tag:this.tagType
	  	}
      }).then((response) => {
          var data = response.data;
          console.log(data);
          this.loading=false;
          if (data.status) {
            this.tableData = data.data.results;
            console.log(data.data);
          }else{
            alert(data.tableData);
          }
      })
    },
  }
</script>
<style type="text/css" scoped="scoped">
  .article-content{
    padding:0 40px 0 20px;
  }
    .btnteam{
      padding:20px 0;
    }
      .tagSearc{
        float: right;
        width: 200px;
      }
</style>
