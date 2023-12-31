import Texty from 'rc-texty'
import 'rc-texty/assets/index.css'
import TweenOne from 'rc-tween-one'

const TextAnimation = () => {
	const getEnter = (e: any) => {
		const t = {
			opacity: 0,
			scale: 0.8,
			y: '-100%'
		}
		if (e.index >= 2 && e.index <= 6) {
			return { ...t, y: '-30%', duration: 150 }
		}
		return t
	}

	const geInterval = (e: any) => {
		switch (e.index) {
			case 0:
				return 0
			case 1:
				return 150
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
				return 150 + 450 + (e.index - 2) * 10
			default:
				return 150 + 450 + (e.index - 6) * 150
		}
	}

	const getSplit = (e: any) => {
		const t = e.split(' ')
		const c: any = []
		t.forEach((str: any, i: any) => {
			c.push(<span key={`${str}-${i}`}>{str}</span>)
			if (i < t.length - 1) {
				c.push(<span key={` -${i}`}> </span>)
			}
		})
		return c
	}

	return (
		<div className='text-animation-container absolute w-full bottom-1/4 text-center tracking-wide'>
			<Texty
				className='text-6xl'
				type='mask-top'
				delay={400}
				enter={getEnter}
				interval={geInterval}
				component={TweenOne}
				componentProps={{
					animation: [
						{ x: 130, type: 'set' },
						{ x: 100, delay: 500, duration: 450 },
						{
							ease: 'easeOutQuart',
							duration: 300,
							x: 0
						},
						{
							letterSpacing: 0,
							delay: -300,
							scale: 0.9,
							ease: 'easeInOutQuint',
							duration: 1000
						},
						{ scale: 1, width: '100%', delay: -300, duration: 1000, ease: 'easeInOutQuint' }
					]
				}}
			>
				「存在与时间」
			</Texty>
			<Texty className='mt-4' type='bottom' split={getSplit} delay={2200} interval={30}>
				虽然人生在世有种种不如意，但你仍可以在幸福与不幸中做选择。
			</Texty>
		</div>
	)
}
export default TextAnimation
