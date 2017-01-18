<template>
  <div id="addArticle" class="editor">
    <div class="editor-title">
      <input type="text" placeholder="请输入文章标题" @input="updateTitle"/>
      <a href="#" @click="showModel">发表博客</a>
    </div>
    <div class="editor-content clearfix">
      <div id="write" class="col-xs-6 write">
        <textarea  :value="input" @input="update"></textarea>
      </div>
      <div id="view" class="col-xs-6 view" v-html="compiledMarkdown"></div> 
    </div>
  </div>
</template>
<script type="text/javascript">
  import marked from 'marked'
  import highlight from 'highlight.js'
  marked.setOptions({
    highlight: function (code) {
      return highlight.highlightAuto(code).value;
    }
  });
  export default{
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

          obj ={
            key:'markdown',
            val:this.input
          }
          this.$store.dispatch('update_article',obj)
          console.log(this.$store.state.article);
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
      var obj ={
          key:'_id',
          val:null
      }
      this.$store.dispatch('update_article',obj)

      var obj ={
          key:'title',
          val:''
      }
      this.$store.dispatch('update_article',obj)
    }
  }

</script>
<style type="text/css" scoped>
  
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
.editor .editor-content{
  word-wrap: break-word;
  height: 100%;
  margin-top: -85px;
  padding-top: 85px;
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
  /*padding: 20px 20px 0;*/
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