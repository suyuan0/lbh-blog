import React, { useEffect, useState } from 'react'
import TextAnimation from './TextAnimation.tsx'

const Loading: React.FC = () => {
	const [isDelete, setIsDelete] = useState(true)
	useEffect(() => {
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
		<div className='loading absolute w-full h-full z-10 animate__animated'>
			<TextAnimation />
		</div>
	)
}

export default Loading
