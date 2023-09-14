import Texty from 'rc-texty'
import 'rc-texty/assets/index.css'
import TweenOne from 'rc-tween-one'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'

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
				return 150 + 450 + (e.index - 2) * 150
			default:
				return 150 + 450 + (e.index - 6) * 150
		}
	}
	const [hitokotoForm, setHitokotoForm] = useState({
		id: 7719,
		uuid: 'a153a1dc-88f4-4d27-866b-7f0895169599',
		hitokoto: '',
		type: 'c',
		from: '',
		from_who: '',
		creator: '焚天炼日',
		creator_uid: 11206,
		reviewer: 4756,
		commit_from: 'web',
		created_at: '1641538420',
		length: 14
	})

	const getHitokoto = useCallback(async () => {
		const res = await axios.get('https://www.darling0.cn/hitokoto/?max_length=15')
		setHitokotoForm(res.data)
	}, [hitokotoForm])

	const handleViewHitokoto = () => {
		window.open(`https://hitokoto.cn/?uuid=${hitokotoForm.uuid}`)
	}

	useEffect(() => {
		getHitokoto()
	}, [])

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
		<div
			className='text-animation-container absolute w-full bottom-1/4 text-center tracking-wide cursor-pointer text-white'
			onClick={handleViewHitokoto}
		>
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
				{hitokotoForm.hitokoto.replace('。', '')}
			</Texty>
			<Texty className='mt-4' type='bottom' split={getSplit} delay={2200} interval={30}>
				{hitokotoForm.from && '「' + hitokotoForm.from + '」'}
			</Texty>
		</div>
	)
}
export default TextAnimation
