import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import {
	NavGetter,
	Getters as NavGetters,
	NavMutation,
	Mutations as NavMutations
} from '../factory'
import { Watch } from 'vue-property-decorator'
import { RouteConfig } from '@/router'
import './menu.scss'

@Component
export default class MajorMenu extends tsx.Component<{}, {}, {}> {
	@NavGetter(NavGetters.router)
	public routes!: RouteConfig[]
	@NavGetter(NavGetters.majorActive)
	public active!: RouteConfig
	@NavMutation(NavMutations.majorActive)
	updateActive!: (route: RouteConfig) => void
	@Watch('active')
	handleActiveUpdate() {
		this.$router.push({ path: this.active.path })
	}
	handleClick(route: RouteConfig) {
		this.updateActive(route)
	}
	render() {
		const { routes, handleClick } = this
		return (
			<div class="major-menu">
				<div class="major-menu-icon">
					<slot></slot>
				</div>
				{routes.map(route => {
					return (
						<div
							class={this.active === route && 'major-menu-active'}
							onClick={() => handleClick(route)}
						>
							{route.meta?.title || route.name}
						</div>
					)
				})}
			</div>
		)
	}
}
