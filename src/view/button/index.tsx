import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import { Button, ButtonSize } from 'packages/index'

@Component
export default class ButtonView extends tsx.Component<{}> {
	render() {
		return (
			<div>
				<Button size={ButtonSize.mini}>mini</Button>
				<Button size={ButtonSize.small}>small</Button>
				<Button size={ButtonSize.medium}>medium</Button>
				<Button onClick={e => console.log(e)}>click</Button>
			</div>
		)
	}
}
