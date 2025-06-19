const setRemUnit = () => {
	const designWidth = 1920 // 设计稿宽度
	const baseSize = 16 // 基准字体大小
	const currentWidth = window.innerWidth

	// 计算当前屏幕应该的根字体大小
	const fontSize = (currentWidth / designWidth) * baseSize
	document.documentElement.style.fontSize = fontSize + 'px'
}

export default setRemUnit
