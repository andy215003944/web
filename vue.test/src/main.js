// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index_router.js'
import store from './store'
import axios from 'axios'
import http from './util/http'

Vue.config.productionTip = false

axios.defaults.baseURL= 'http://localhost:3000';//'http://local.test.com';
Vue.prototype.$axios=axios;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App,
	},
	template: '<App/>',

})


var t;
clearTimeout(t);
t = setTimeout(function() {
		router.push('home');
}, 2000);


