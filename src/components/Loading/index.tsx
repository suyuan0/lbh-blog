import React, { useCallback, useEffect, useState } from 'react'
import TextAnimation from './TextAnimation.tsx'
import './index.scss'
import imgList from './imgList.ts'
import { Progress } from 'antd'

const Loading: React.FC = () => {
	// const [isDelete, setIsDelete] = useState(true)
	const [imgUrl, setImgUrl] = useState('')
	const [progress, setProgress] = useState(0)

	const getImageLoadTime = useCallback((tag: string) => {
		const image = new Image()
		image.onload = () => {
			setProgress(100)
			console.log(performance.now() - startTime)
			const loadingBox: HTMLElement = document.querySelector('.loading')!
			setTimeout(() => {
				loadingBox.classList.add('animate__fadeOut')
				setTimeout(() => {
					loadingBox.remove()
				}, 1000)
			}, 3000)
		}

		const timer = setInterval(() => {
			setProgress(prevProgress => {
				const newProgress = prevProgress + 1

				// 如果进度已经达到 100，清除定时器
				if (newProgress >= 100) {
					clearInterval(timer)
				}

				return newProgress
			})
		}, 50)

		const startTime = performance.now()

		image.src = 'https://blogapi.darling0.cn/public/uploads/' + tag + '.png'
	}, [])

	useEffect(() => {
		const index = Math.floor(Math.random() * imgList.length)
		setImgUrl(imgList[index])
		getImageLoadTime(imgList[index])
	}, [])

	// useEffect(() => {
	// 	setImgUrl(imgList[Math.floor(Math.random() * imgList.length)])
	// 	setTimeout(() => {
	// 		const loadingBox: HTMLElement = document.querySelector('.loading')!
	// 		loadingBox.classList.add('animate__fadeOut')
	// 		if (isDelete) {
	// 			setTimeout(() => {
	// 				loadingBox.remove()
	// 				setIsDelete(false)
	// 			}, 1000)
	// 		}
	// 	}, 5000)
	// }, [])

	return (
		<div
			className='loading absolute w-full h-full z-10 animate__animated'
			style={{ backgroundImage: `url(https://blogapi.darling0.cn/public/uploads/${imgUrl}.png)` }}
		>
			<Progress strokeColor='rgba(0, 0, 0, 0.2)' showInfo={false} percent={progress} />
			<TextAnimation />
		</div>
	)
}

export default Loading
