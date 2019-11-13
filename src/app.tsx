import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import { Navigation } from 'package'

@Component
export default class App extends tsx.Component<{}> {
	render() {
		return <Navigation></Navigation>
	}
}
