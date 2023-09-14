import React, { useEffect, useState } from 'react'
import TextAnimation from './TextAnimation.tsx'
import './index.scss'
import imgList from './imgList.ts'

const Loading: React.FC = () => {
	const [isDelete, setIsDelete] = useState(true)
	const [imgUrl, setImgUrl] = useState('')
	useEffect(() => {
		setImgUrl(imgList[Math.floor(Math.random() * imgList.length)])
		setTimeout(() => {
			const loadingBox: HTMLElement = document.querySelector('.loading')!
			loadingBox.classList.add('animate__fadeOut')
			if (isDelete) {
				setTimeout(() => {
					loadingBox.remove()
					setIsDelete(false)
				}, 1000)
			}
		}, 5000)
	}, [])

	return (
		<div
			className='loading absolute w-full h-full z-10 animate__animated'
			style={{ backgroundImage: `url(https://blogapi.darling0.cn/public/uploads/${imgUrl}.png)` }}
		>
			<TextAnimation />
		</div>
	)
}

export default Loading
