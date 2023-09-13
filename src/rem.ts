const baseSize = 16

const setRem = () => {
	const scale = document.documentElement.clientWidth / 1440
	document.documentElement.style.fontSize = baseSize * scale + 'px'
}

setRem()

window.onresize = () => setRem()
