import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import './menu.scss'
import { NavGetter, Getters as NavGetters } from '../factory'
import { RouteConfig } from '@/router'
import { Watch } from 'vue-property-decorator'

@Component
export default class LeftMenu extends tsx.Component<{}> {
	@NavGetter(NavGetters.majorActive)
	public active!: RouteConfig
	public activeMiniSub?: RouteConfig = {} as RouteConfig
	handleClick(item: RouteConfig) {
		if (this.activeMiniSub === item) return
		this.activeMiniSub = item
		this.$router.push({ path: item.path })
	}
	@Watch('active', { immediate: true })
	handleActiveUpdate() {
		this.activeMiniSub = this.active.children?.[0]
		this.$router.push({
			path: this.active.children?.[0]?.path ?? this.active.path
		})
	}

	render() {
		const { active, handleClick, activeMiniSub } = this
		return (
			<div class="sub-menu">
				<div class="sub-menu-title">
					{active.meta?.title || active.name}
				</div>
				<div>
					{active.children?.map(item => {
						return (
							<div
								class={[
									'sub-menu-tab',
									activeMiniSub === item &&
										'sub-menu-active-tab'
								]}
								onClick={() => handleClick(item)}
							>
								{item.meta.title}
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}
