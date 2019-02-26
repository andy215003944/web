import Vue from 'vue'
import Router from 'vue-router'

import homeIndex from '@/components/home/index'
import about from '@/components/about/index'
import reg from '@/components/login/reg'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/home/homeIndex',
		name: 'home',
		component: homeIndex
	},{
		path: '/home/reg',
		name: '注册',
		component: reg
	},
	{
		path: '/home/about',
		name: 'HelloWorld2',
		component: about
	}
	]
})