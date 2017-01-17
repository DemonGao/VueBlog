<template>
	<div id="addArticle" class="editor">
    <div class="editor-title">
      <input type="text" placeholder="请输入文章标题" @input="updateTitle"/>
      <a href="javascript:;" @click="showModel">重新发布</a>
    </div>
	  <div class="editor-content clearfix">
      <div class="col-xs-6 write">
        <textarea  :value="input" @input="update"></textarea>
      </div>
      <div class="col-xs-6 view" v-html="compiledMarkdown"></div> 
    </div>
	</div>
</template>
<!-- {{$route.params.id}} -->
<script type="text/javascript">
  import marked from 'marked'
	export default{
    // components:{
    //   'model' : Model
    // },
		data(){
			return {
				input : ''
			}
		},
		computed: {
    		compiledMarkdown:function () {
      			return marked(this.input, { sanitize: true })
    		}
		},
		methods: {
			update(e) {
		    	this.input = e.target.value
          var obj ={
            key:'content',
            val:marked(this.input, { sanitize: true })
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
		}
	}
</script>
<style type="text/css" scoped>
  
.editor{
  /*background-color: #F7FED8;*/
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  height: 100%;
  background-color: #fff;
}
.editor-head{
  padding: 20px;
  font-size: 16px;
  box-sizing: border-box;
  border-bottom: 10px solid #f5f5f5;
}
.editor .editor-title{
  height: 80px;
}
.editor .editor-content{
  word-wrap: break-word;
  height: 100%;
  margin-top: -80px;
  padding-top: 80px;
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
.editor .editor-content .write{
  height: 100%;
  padding-right: 0;
  background-color: #000;
  color: #fff;
}
.editor .editor-content .write textarea{
  display: block;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
.editor .editor-content .view{
  max-height:700px;
  vertical-align: top;
  box-sizing: border-box;
  padding: 20px 20px 0;
  overflow-y:auto;
  overflow-x:hidden;
}
textarea, .editor .editor-content .view {
  /*display: inline-block;
  width: 49%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 20px 20px 0;
  overflow-y:auto;
  overflow-x:hidden;*/
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
</style>