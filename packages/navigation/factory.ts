import { Store, GetterTree, MutationTree } from 'vuex'
import { RouteConfig } from '../../src/router/index'
import { namespace } from 'vuex-class'
const ModuleName = 'router'
const a = namespace(ModuleName)
export const NavGetter = a.Getter
export const NavMutation = a.Mutation
export enum Getters {
	router = 'router',
	active = 'active'
}
type RouteStore = {
	routes: RouteConfig[]
	active: RouteConfig
}
export enum Mutations {
	router = 'router',
	active = 'active'
}
const getters: GetterTree<RouteStore, void> = {
	[Getters.router](store) {
		return store.routes
	},
	[Getters.active](store) {
		return store.active
	}
}
const mutations: MutationTree<RouteStore> = {
	[Mutations.router](store, value) {
		store.routes = value
	},
	[Mutations.active](store, value) {
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
