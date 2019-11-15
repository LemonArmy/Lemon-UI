import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'

@Component
export default class PageOne extends tsx.Component<{}> {
	render() {
		return <div>this is page1 demo</div>
	}
}
