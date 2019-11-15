import VueRouter, { RouteConfig as Config } from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
interface RouteConfig extends Config {
	meta?: {
		title: string
	}
}
const routeConfig: RouteConfig[] = [
	{
		path: '/page1',
		component: () => import('../page1'),
		meta: {
			title: 'page1'
		}
	},
	{
		path: '/page2',
		component: () => import('../page2'),
		meta: {
			title: 'page2'
		}
	}
]
const router: VueRouter = new VueRouter({
	mode: 'history',
	routes: routeConfig
})
export { RouteConfig, router, routeConfig as routes }
