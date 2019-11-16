import { RouteConfig } from '@/router'
import { Store, GetterTree, MutationTree } from 'vuex'
import { namespace } from 'vuex-class'
export enum Getters {
	router = 'router',
	majorActive = 'majorActive'
}
type RouteStore = {
	routes: RouteConfig[]
	active: RouteConfig
}
export enum Mutations {
	router = 'router',
	majorActive = 'majorActive'
}

const ModuleName = 'router'
const a = namespace(ModuleName)
export const NavGetter = a.Getter
export const NavMutation = a.Mutation

const getters: GetterTree<RouteStore, void> = {
	[Getters.router](store) {
		return store.routes
	},
	[Getters.majorActive](store) {
		return store.active
	}
}
const mutations: MutationTree<RouteStore> = {
	[Mutations.router](store, value) {
		store.routes = value
	},
	[Mutations.majorActive](store, value) {
		store.active = value
	}
}
export const registerRouterFactory = (
	store: Store<any>,
	routes: RouteConfig[]
) => {
	store.registerModule('router', {
		namespaced: true,
		state: {
			routes: routes,
			active: routes[0]
		},
		getters,
		mutations
	})
}
