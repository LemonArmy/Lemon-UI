import VueRouter, { RouteConfig as Config } from 'vue-router'
import Vue from 'vue'
import Wrapper from 'packages/wrapper/index'
Vue.use(VueRouter)
interface RouteConfig extends Config {
	meta?: {
		title: string
	}
}
const routeConfig: RouteConfig[] = [
	{
		path: '/component1',
		component: Wrapper,
		meta: {
			title: 'component1'
		},
		children: [
			{
				path: '/component1/page1',
				component: () => import('../page1'),
				meta: {
					title: 'page1'
				}
			},
			{
				path: '/component1/page2',
				component: () => import('../page2'),
				meta: {
					title: 'page2'
				}
			}
		]
	},
	{
		path: '/component2',
		component: Wrapper,
		meta: {
			title: 'component2'
		},
		children: [
			{
				path: '/component1/page2',
				component: () => import('../page2'),
				meta: {
					title: 'page2'
				}
			}
		]
	}
]
const router: VueRouter = new VueRouter({
	mode: 'history',
	routes: routeConfig
})
export { RouteConfig, router, routeConfig as routes }
