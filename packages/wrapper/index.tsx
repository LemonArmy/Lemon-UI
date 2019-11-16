import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import './style.scss'

@Component
export default class Wrapper extends tsx.Component<{}> {
	render() {
		return (
			<div class="wrapper">
				<router-view></router-view>
			</div>
		)
	}
}
