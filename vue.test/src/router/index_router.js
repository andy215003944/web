import Vue from 'vue'
import Router from 'vue-router'

import start from '@/components/start.vue'
import home from '@/components/home.vue'
import homeIndex from '@/components/home/index.vue'
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
		path: '/home',
		name: 'home',
		component: home,
		children:[
		{
			path:'homeIndex',name: 'homeIndex',component:homeIndex
		},
		{
			path:'reg',name: 'reg',component:reg
		},
		{
			path:'about',name: 'about',component:about
		},
		{
			path:'',name: 'default',component:homeIndex
		}
		]
	},
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