import Vue from 'vue'
import Router from 'vue-router'

import start from '@/components/start.vue'
import common from '@/components/common.vue'
import home from '@/components/home/index.vue'
import about from '@/components/about/index.vue'
import reg from '@/components/login/reg.vue'


Vue.use(Router)
const routes =[
	{
		path: '/start',
		name: 'start',
		component: start
	},
	{
		path: '/common',
		name: 'common',
		component: common,
		children:[
		{
			path:'home',component:home
		},
		{
			path:'',component:reg
		},
		{
			path:'about',component:about
		},
		{
			path:'',component:home
		}
		]
	},{
    path:'/shop',

  }
	{
        path: '/',
        redirect: '/start'
    }

	]

var router=new Router({
	routes
})

/**
 * @desc 全局监听路由变化
 */
router.beforeEach((to, from, next) => {
  next()
})

export default router;
