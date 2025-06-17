<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')
const currentDate = ref('')
const currentWeekday = ref('')

let timerId

const updateDateTime = () => {
	const now = new Date()

	// 格式化时间 HH:MM:SS
	const hours = now.getHours().toString().padStart(2, '0')
	const minutes = now.getMinutes().toString().padStart(2, '0')
	const seconds = now.getSeconds().toString().padStart(2, '0')
	currentTime.value = `${hours}:${minutes}:${seconds}`

	// 格式化日期 YYYY年MM月DD日
	const year = now.getFullYear()
	const month = (now.getMonth() + 1).toString().padStart(2, '0')
	const day = now.getDate().toString().padStart(2, '0')
	currentDate.value = `${year}年${month}月${day}日`

	// 格式化星期几
	const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
	const weekdayIndex = now.getDay()
	currentWeekday.value = weekdays[weekdayIndex]
}

onMounted(() => {
	// 初始化时间
	updateDateTime()

	// 设置定时器，每秒更新一次
	timerId = setInterval(updateDateTime, 1000)
})

onUnmounted(() => {
	// 清理定时器
	if (timerId) {
		clearInterval(timerId)
	}
})
</script>

<template>
	<div class="flex text-white gap-3">
		<p>{{ currentTime }}</p>
		<p class="text-cyan-500">{{ currentWeekday }}</p>
		<p class="text-cyan-500">{{ currentDate }}</p>
	</div>
</template>
