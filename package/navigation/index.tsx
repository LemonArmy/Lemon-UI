import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import './style.scss'

@Component
export default class Navigation extends tsx.Component<{}> {
	render() {
		return (
			<div class="container">
				<div class="header">aabbcc</div>
				<div class="context">
					<div class="aside">leftMenu</div>
					<div class="main">this is main context</div>
				</div>
			</div>
		)
	}
}
