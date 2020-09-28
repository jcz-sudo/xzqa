import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//导入页面组件
import Film from '../views/Film.vue'
import Me from '../views/Me.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
	{ path: '/', component: Home },
	{ path: '/home', redirect: '/' },
	{ path: '/film', component: Film },
	{ path: '/me', component: Me },
	{ path: '/login', component: Login },
	{ path: '/register', component: Register },
	// {
	//   path: '/about',
	//   name: 'About',
	//   // route level code-splitting
	//   // this generates a separate chunk (about.[hash].js) for this route
	//   // which is lazy-loaded when the route is visited.
	//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	// }
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
