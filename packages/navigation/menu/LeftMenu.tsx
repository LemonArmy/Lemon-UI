import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import './menu.scss'
import { NavGetter, Getters as NavGetters } from '../factory'
import { RouteConfig } from '@/router'

@Component
export default class LeftMenu extends tsx.Component<{}> {
	@NavGetter(NavGetters.active)
	public active!: RouteConfig
	render() {
		const { active } = this
		return (
			<div class="left-menu">
				<div class="left-menu-title">
					{active.meta?.title || active.name}
				</div>
			</div>
		)
	}
}
