<template>
  <aside>
    <!--canvas背景图-->
    <div id="bgCanvas"></div>

    <!--登录框-->
    <div class="login" id="login">
      <h2 class="text-center">DemonGao博客后台管理</h2>
      <div class="login-content">
        <div class="form-group clearfix">
          <label for="username_label" class="col-sm-2 control-label">用户名</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="username_label" placeholder="用户名" v-model="username">
          </div>
        </div>
        <div class="form-group clearfix">
          <label for="password_label" class="col-sm-2 control-label">密码</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="password_label" placeholder="密码" v-model="password">
          </div>
        </div>
        <a href="javascript:;" @click="login" class="btn btn-primary btn-sm btn-block"
           style="width:40%;margin:20px auto 0">登录</a>
      </div>
    </div>

  </aside>
</template>
<style type="text/css" scoped="scoped">
  .login {
    position: relative;
    width: 500px;
    /*height: 300px;*/
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 1px 1px 5px #fff;
  }

  .login h2 {
    padding: 30px 0 10px;
    margin: 0;
    text-align: center;
  }

  .login-content {
    padding: 30px 20px 20px;
  }

  .login-content .form-group {
    margin-bottom: 10px;

  }

  .login-content .control-label {
    line-height: 34px;
  }

  /*背景画布*/
  #bgCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 1);
  }
</style>
<script type="text/javascript">
  import Particleground from 'Particleground.js';
  export default{
    data(){
      return {
        username: '',
        password: ''
      }
    },
    computed: {
      serverurl(){
        return this.$store.state.serverurl
      }
    },
    mounted(){

      let demongao_user = localStorage.getItem('demongao_user');
      if (localStorage.getItem('demongao_user') != null&&localStorage.getItem('demongao_user') =='[object Object]') {
        this.$router.push({path:"/admin"});
      }
      let login = document.getElementById('login');
      login.style.top = document.body.clientHeight / 2 - login.offsetHeight / 2 + 'px';
      login.style.left = (document.body.clientWidth - login.clientWidth) / 2 + 'px';

      //Canvas 背景画布定义
      new Particleground.particle('#bgCanvas', {
        opacity: 1,  //透明度 默认1
        maxSpeed: .2,//最快速度
        minSpeed: 0,//最慢速度
        // 两粒子圆心点连线的最大距离为90
        distance: 100,
        // 在定位点半径为100内的所有粒子，两粒子圆心点之间满足dis，则连线
        range: 150,
        num: 250,
        maxR: 3,
        lineWidth: .4
      });
    },
    methods: {
      login(){
        this.axios.get(this.serverurl + 'api/login', {
          params: {
            username: this.username,
            password: this.password,
          }
        }).then((response) => {
          var data = response.data;
          if (data.status) {
            //登陆成功 本地存储用户信息
            localStorage.setItem('demongao_user', data.admin);
            //跳转到管理界面
            this.$router.push({path:"/admin"});
          } else {
            alert(data.msg);
          }
        })
      }
    }
  }
</script>
