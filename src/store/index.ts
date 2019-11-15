import Vuex from 'vuex'
import state from './state'
import mutations from './mutation'
import getters from './getter'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
	state,
	mutations,
	getters
})
