/**
 * @description 在指定范围内的随机秒数之后执行函数。
 * @param {number} startSeconds 时间范围的起始秒数。
 * @param {number} endSeconds 时间范围的结束秒数。
 * @return {number} 返回指定毫秒数
 */
export const getRandomMilliseconds = (startSeconds: number, endSeconds: number): number => {
	const randomSeconds = Math.floor(Math.random() * (endSeconds - startSeconds + 1)) + startSeconds
	return randomSeconds * 1000
}
