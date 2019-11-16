import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import './style.scss'
import { Prop, Emit } from 'vue-property-decorator'

interface Props {
	size?: ButtonSize
	type?: string
	plain?: boolean
	round?: boolean
	circle?: boolean
	disable?: boolean
	icon?: string
}
interface Events {
	onClick: (e: Events) => void
}
enum ButtonSize {
	mini = 'mini',
	small = 'small',
	medium = 'medium'
}
enum ButtonType {
	primary = 'primary'
}
@Component
class Button extends tsx.Component<Props, Events> {
	@Prop({ default: ButtonSize.medium }) size!: ButtonSize
	@Prop({ default: ButtonType.primary }) type!: ButtonType
	@Prop() disable?: boolean
	@Prop({ default: false }) circle!: boolean
	@Prop({ default: false }) round!: boolean

	@Emit('click')
	onClick(event) {
		return event
	}

	render() {
		const { disable, size, type, circle, round, onClick } = this
		return (
			<button
				class={[size, type, circle && 'circle', round && 'round']}
				disabled={disable}
				onClick={onClick}
			>
				{this.$slots.default ?? 'default'}
			</button>
		)
	}
}

export { Button, ButtonSize, ButtonType }
