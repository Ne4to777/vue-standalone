/* eslint-disable no-restricted-globals */
import Vue from 'vue'
import VueRouter from 'vue-router'
import userInfo from '../dev/private.json'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(VueRouter)

export default new VueRouter({
	base: userInfo.siteRelativePath,
	mode: history.pushState ? 'history' : 'hash',
	routes: [{
		path: '/index.aspx',
		alias: '/',
		name: 'home',
		component: Home
	}, {
		path: '/about/index.aspx',
		name: 'about',
		component: About
	}]
})
