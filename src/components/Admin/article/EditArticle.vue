<template>
	<div
    id="addArticle" class="editor" v-loading.body.lock="loading"
    element-loading-text="拼命加载中">
    <div class="editor-title" >
      <input type="text" placeholder="请输入文章标题" @input="updateTitle" v-model="title"/>
      <a href="javascript:;" @click="showModel">重新发布</a>
    </div>
    <div class="editor-util">
      <div class="editor-util-item" @click="dialogFormVisible =true">
        <i class="iconfont icon-tupian" title="添加图片"></i>
      </div>
    </div>
	  <div class="editor-content clearfix">
      <div id="write" class="write">
        <textarea  :value="input" @input="update"></textarea>
      </div>
      <div id="view" class="view" v-html="compiledMarkdown"></div>
    </div>


    <el-dialog title="上传图片" v-model="dialogFormVisible">
      <input type="file" name="avatar" id="avatar"/>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="uploadpic">确 定</el-button>
      </div>
    </el-dialog>
	</div>
</template>
<!-- {{$route.params.id}} -->
<script type="text/javascript">
  import marked from 'marked'
  import highlight from 'highlight.js'
  marked.setOptions({
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return highlight.highlightAuto(code).value;
    }
  });
	export default{
    // components:{
    //   'model' : Model
    // },
		data(){
			return {
				input : '',
        loading : true,
        title:'',
        dialogFormVisible: false,
        imageUrl: ''
			}
		},
		computed: {
    		compiledMarkdown:function () {
      			return marked(this.input, { sanitize: true })
    		}
		},
		methods: {
      uploadpic(){
//        var filenode = document.getElementById("avatar");
//
//          var xhr=new XMLHttpRequest();
//          //设置回调，当请求的状态发生变化时，就会被调用
//          xhr.onreadystatechange = function () {
//            //等待上传结果,将背景图像设置为tx2.jpg
//            if (xhr.readyState == 1) {
//              filenode.parentNode.style.backgroundImage = "url('/images/tx2.jpg')";
//            }
//            //上传成功，返回的文件名，设置到父节点的背景中
//            if (xhr.readyState == 4 && xhr.status == 200) {
//              var path=JSON.parse(xhr.responseText).path.split("\\");
//              filenode.parentNode.style.backgroundImage = "url('./uploads/" +path[path.length-1]+ "')";
//            }
//          }
//
//          //构造form数据
//          var data= new FormData();
//          data.append("avatar", filenode.files[0]);
//
//          //设置请求，true：表示异步
//          xhr.open("post", this.$store.state.serverurl+'profile', true);
//          //不要缓存
//          //xhr.setRequestHeader("If-Modified-Since", "0");
//          //提交请求
//          xhr.send(data);
//          //清除掉，否则下一次选择同样的文件就进入不到onchange函数中了
//          filenode.value = null;
        var filenode = document.getElementById("avatar");
        let form = new FormData(document.getElementById("avatar")[0])
//        构造form数据
        var data= new FormData();
        data.append("avatar", filenode.files[0]);

//        console.log(filenode.files[0])
        this.axios.post(this.$store.state.serverurl+'profile',data)
          .then((response)=>{
//            console.log(response.data)
            this.input += `![图片描述](${response.data.result.path})`
            this.dialogFormVisible = false;
          })
          .catch(e=>{console.log(e)})
      },
			update(e) {
		    	this.input = e.target.value
          var obj ={
            key:'content',
            val:marked(this.input, { sanitize: true })
          }
          this.$store.dispatch('update_article',obj)
          obj ={
            key:'markdown',
            val:this.input
          }
          this.$store.dispatch('update_article',obj)

		  },
      showModel(){
        this.$store.dispatch('addarticle_toggle_modal')
      },
      updateTitle(e){
          var obj ={
            key:'title',
            val:e.target.value
          }
          this.$store.dispatch('update_article',obj)
      }
		},
    mounted(){
      //设置mardown转换后 试图栏的高度
      document.getElementById("view").style.height=document.getElementById("write").offsetHeight+'px';
      this.axios.get(this.$store.state.serverurl+'api/getArticle',{
        params:{
          id:this.$route.params.id
        }
      }).then((response) => {
          var data = response.data;
          this.loading=false;
          if (data.status) {
            this.title = data.data.title;
            this.input = data.data.markdown
            var obj ={
              key:'_id',
              val:data.data._id
            }
            this.$store.dispatch('update_article',obj)

            obj ={
              key:'title',
              val:this.title
            }
            this.$store.dispatch('update_article',obj)
            obj ={
              key:'tag',
              val:data.data.tag
            }
            this.$store.dispatch('update_article',obj)
            obj ={
              key:'content',
              val:data.data.content
            }
            this.$store.dispatch('update_article',obj)
            obj ={
              key:'markdown',
              val:this.input
            }
            this.$store.dispatch('update_article',obj)

//            console.log(this.$store.state.article);
          }else{
            // alert(data.tableData);
          }
      })
    },
	}
</script>
<style type="text/css" scoped="scoped">

.editor{
  /*background-color: #F7FED8;*/
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  height: 100%;
  margin-top: -66px;
  padding-top: 66px;
}
.editor-head{
  padding: 20px;
  font-size: 16px;
  box-sizing: border-box;
  border-bottom: 10px solid #f5f5f5;
}
.editor .editor-title{
  height: 80px;
  box-sizing: border-box;
  box-shadow: 1px 2px 5px  #ccc;
  margin-bottom:5px;
}
 /*工具 */
 .editor .editor-util{
   display: -webkit-box;
   display: -webkit-flex;
   display: flex;
   -webkit-box-orient: vertical;
   -webkit-flex-flow: row nowrap;
   flex-flow:row nowrap;

   -webkit-justify-content:flex-start;
   justify-content:flex-start;

   -webkit-align-items: center;
   align-items: center;

   box-sizing: border-box;
   height:30px;
   box-shadow: 1px 2px 5px #ccc;
   margin-bottom: 5px;
   padding:0 30px;
 }
 .editor .editor-util .editor-util-item{
   box-sizing: border-box;
   height:30px;
   line-height:30px;
   padding:0 10px;
 }
 .editor .editor-util .editor-util-item i{
   font-size:25px;
 }
 .editor .editor-util .editor-util-item:hover{
   cursor: pointer;
 }
.editor .editor-content{
  word-wrap: break-word;
  height: 100%;
  margin-top: -120px;
  padding-top: 120px;
  /*padding-bottom: 150px;*/
}
.editor-footer{
  height: 150px;
  margin-top: -150px;
  background-color: #fff;
  padding: 20px;
}
.editor .editor-title input{
  float: left;
  height: 80px;
  width: 100%;
  padding-right: 240px;
  font-size: 26px;
  padding-left: 2em;
  border:none;
  outline:none;
}
.editor .editor-title a{
  float: left;
  display: block;
  width: 150px;
  height: 40px;
  line-height: 40px;
  margin: 20px 0;
  margin-left: -180px;
  text-align: center;
  background-color: #8C7676;
  color: #FDFFE7;
  text-decoration: none;
}
 .editor .editor-content .write,.editor .editor-content .view{
   width:50%;
   padding: 20px;
   display: inline-block;
   float: left;
 }
.editor .editor-content .write{
  height: 100%;
  padding-right: 0;
  background-color: #F6F7D3;
  color: #000;
}
.editor .editor-content .write textarea{
  display: block;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
.editor .editor-content .view{
  vertical-align: top;
  box-sizing: border-box;

  overflow-y:auto;
  overflow-x:hidden;
}
.editor .editor-content .view pre{
    /*color: #fff;*/
    background-color: #23241F !important;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: transparent;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
}

code {
  color: #f66;
}

 #view h1,#view h2,#view h3,#view h4,#view h5,#view h6{
   /*position: relative;*/
   /*margin-left:10px;*/
   color: #4bb5e4 ;
 }
 #view img{
   max-width: 100%;
 }
 #view a{
   color: #009a61;
   text-decoration: none;
 }
 #view blockquote {
   border-left: 2px solid #009A61;
   background: #F6F6F6;
   color: #555;
   font-size: 1em;
 }
</style>
