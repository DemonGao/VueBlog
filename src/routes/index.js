import Home from './../components/Home'
import Sign from './../components/Sign'
import Article from './../components/Article'
import TimeAxis from './../components/TimeAxis'


import Admin from './../components/Admin/Admin'
import Admin_Article from './../components/Admin/article/Article'
import Admin_ArticleList from './../components/Admin/article/ArticleList'
import Admin_AddArticle from './../components/Admin/article/AddArticle'
import Admin_EditArticle from './../components/Admin/article/EditArticle'
import Admin_Sign from './../components/Admin/Sign';


/*路由配置*/
const routes = [
	{
		path : '/',
		redirect: { name: 'home',params:{tag:'all'}},
	},
	{
		path : '/home/:tag',
		name : 'home',
		component : Home
	},
	{
		path : '/sign',
		component : Sign
	},
	{
		path : '/article/:id',
		name : 'article',
		component : Article
	},
	{
		path : '/timeaxis',
		component : TimeAxis
	},



	//后台管理端
	{
		path : '/admin_home',
		component : Admin
	},
	{
		path : '/admin_articles',
		component : Admin_Article,
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
        ]
	},
	{
		path : '/admin_addarticle',
		component: Admin_AddArticle
	},
	{
		path : '/admin_sign',
		component : Admin_Sign
	}

];
export default routes;