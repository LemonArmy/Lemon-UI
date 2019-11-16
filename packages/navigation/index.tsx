import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import './style.scss'
import MajorMenu from './menu/MajorMenu'
import SubMenu from './menu/SubMenu'

@Component
export default class Navigation extends tsx.Component<{}> {
	render() {
		return (
			<div class="container">
				<div class="header">
					<MajorMenu></MajorMenu>
				</div>
				<div class="context">
					<div class="aside">
						<SubMenu></SubMenu>
					</div>
					<div class="main">
						<router-view></router-view>
					</div>
				</div>
			</div>
		)
	}
}
