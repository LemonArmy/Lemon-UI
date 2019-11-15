import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import './style.scss'

@Component
export default class Button extends tsx.componentFactory.create({
	props: {
		size: String,
		type: String,
		plain: Boolean,
		round: Boolean,
		circle: Boolean,
		//loading: Boolean,
		disable: Boolean,
		icon: String, //To Do icon Function Part after ICON Component completed
		handleClick: Function
	}
}) {
	calRuleSet(props: any) {
		// According to props to calculate style sheet's className
		let res: string = ''
		let defaultRuleSet: any = {
			size: 'medium',
			type: 'primary'
		}
		for (const key in props) {
			if (typeof props[key] === 'boolean' && props[key]) {
				res += ' ' + key
			}
			if (typeof props[key] === 'string') {
				res += props[key]
			}
			if (typeof props[key] === 'undefined') {
				res +=
					defaultRuleSet[key] === undefined
						? ''
						: ' ' + defaultRuleSet[key]
			}
		}
		return res
	}

	render() {
		const myProp = this.$props
		return (
			<button
				class={this.calRuleSet(myProp) + ' Button'}
				disabled={myProp.disable}
				onClick={
					myProp.handleClick === undefined
						? () => {}
						: myProp.handleClick
				}
			>
				{this.$slots.default === undefined
					? 'default'
					: this.$slots.default}
			</button>
		)
	}
}
