// import Home from './../components/Home'
// import Sign from './../components/Sign'
// import Admin from './../components/Admin/Admin'
// import Admin_Article from './../components/Admin/article/Article'
// import Admin_ArticleList from './../components/Admin/article/ArticleList'
// import Admin_AddArticle from './../components/Admin/article/AddArticle'
// import Admin_EditArticle from './../components/Admin/article/EditArticle'
// import Admin_Sign from './../components/Admin/Sign';
// import Article from './../components/Article'
// import TimeAxis from './../components/TimeAxis'

const User = resolve => require(['./../components/User.vue'], resolve)
const Home = resolve => require(['./../components/Home.vue'], resolve)
const Sign = resolve => require(['./../components/Sign.vue'], resolve)
const Article = resolve => require(['./../components/Article.vue'], resolve)
const TimeAxis = resolve => require(['./../components/TimeAxis.vue'], resolve)
const Case = resolve => require(['./../components/Case.vue'], resolve)
const Album = resolve => require(['./../components/Album.vue'], resolve)
const AlbumList = resolve => require(['./../components/Album/AlbumList.vue'], resolve)
// const AlbumPhotos = resolve => require(['./../components/Util/photo/photo.vue'], resolve)
const AlbumPhotos = resolve => require(['./../components/Album/AlbumPhotos.vue'], resolve)

const Index = resolve => require(['./../components/Admin/Index.vue'], resolve)  //admin 主路由{登录,管理}
const Admin = resolve => require(['./../components/Admin/Admin.vue'], resolve)  //管理
const Admin_Login = resolve => require(['./../components/Admin/Login.vue'], resolve)//登录
const Admin_Article = resolve => require(['./../components/Admin/article/Article.vue'], resolve)
const Admin_ArticleList = resolve => require(['./../components/Admin/article/ArticleList.vue'], resolve)
const Admin_AddArticle = resolve => require(['./../components/Admin/article/AddArticle.vue'], resolve)
const Admin_EditArticle = resolve => require(['./../components/Admin/article/EditArticle.vue'], resolve)
const Admin_Sign = resolve => require(['./../components/Admin/Sign.vue'], resolve)

/*路由配置*/
const routes = [
  {
    //前台界面
    path: '/',
    component: User,
    children: [
      {
        path: '/',
        redirect: {name: 'home', params: {tag: 'all'}},
      },
      {
        path: 'home/:tag',
        name: 'home',
        component: Home
      },
      {
        path: 'sign',
        component: Sign
      },
      {
        path: 'article/:id',
        name: 'article',
        component: Article
      },
      {
        path: 'timeaxis',
        component: TimeAxis
      },
      {
        path: 'case',
        component: Case
      },
      {
        //相册
        path: 'album',
        component:Album,
        children:[
          {
            path:'/',
            component:AlbumList,
          },
          {
            path:'home',
            component:AlbumList
          },
          {
            path:'timeaxis',
            component:Case
          },
          {
            path:'photos/:tag',
            name:'album/photos',
            component:AlbumPhotos
          }
        ]


      }
    ]
  },

  //后台管理端
  {
    path: '/admin',
    component: Index,
    children: [
      {
        path: '',
        component: Admin,
        children: [
          {
            path: 'article',
            component: Admin_Article,
            children: [
              {
                path: '',
                component: Admin_ArticleList
              },
              {
                path: 'add',
                component: Admin_AddArticle
              },
              {
                path: 'edit/:id',
                name: 'edit',
                component: Admin_EditArticle
              }
            ],
          },
          {
            path: 'sign',
            component: Admin_Sign,
          }
        ]
      },
      {
        path: 'login',
        component: Admin_Login
      }
    ]
  },
];
export default routes;
