import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import { Navigation } from 'packages/index'

@Component
export default class App extends tsx.Component<{}> {
	render() {
		return <Navigation></Navigation>
	}
}
