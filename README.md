# vue2.0 + vue-router +vue-resource +vuex个人博客

> A Vue.js project

## 安装

``` bash
git clone https://github.com/DemonGao/VueBlog.git

cd VueBlog

# 安装依赖
npm install

# 修改配置文件
src/store/index-default.js 内容  并重命名为index.js

# 启动项目
npm run dev

# 项目打包
npm run build
```

  
修改 build 文件 webpack.prod.conf.js
```
output: {
    path: config.build.assetsRoot,
-   filename: utils.assetsPath('js/[name].[chunkhash].js'),   
-   chunkFilename: utils.assetsPath('js/[id].[chunkhash].js') 
+    filename: utils.assetsPath('[name].[chunkhash].js'),   //entry 里面生成出来的文件名
+    chunkFilename: utils.assetsPath('[id].[chunkhash].js') //未被列在entry中，却又需要被打包出来的文件命名配置
  },
```


build 文件都放在了 static 目录下 ,方便 上传 到 cdn

