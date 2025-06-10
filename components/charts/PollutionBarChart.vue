<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref(null)
let chartInstance: echarts.ECharts | null = null

const initChart = () => {
	if (!chartRef.value) return

	chartInstance = echarts.init(chartRef.value)

	const salvProName = ['企业总数', '废气企业', '废水企业', '铅污染', '铬污染']
	const salvProValue = [117, 74, 72, 67, 55]
	const salvProMax = []

	for (let i = 0; i < salvProValue.length; i++) {
		salvProMax.push(salvProValue[0])
	}

	const option = {
		grid: {
			left: '2%',
			right: '2%',
			bottom: '-6%',
			top: '8%',
			containLabel: true,
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: { type: 'none' },
			formatter: function (params) {
				return params[0].name + ' : ' + params[0].value
			},
		},
		xAxis: { show: false, type: 'value' },
		yAxis: [
			{
				type: 'category',
				inverse: true,
				axisLabel: { show: true, textStyle: { color: '#fff' } },
				splitLine: { show: false },
				axisTick: { show: false },
				axisLine: { show: false },
				data: salvProName,
			},
			{
				type: 'category',
				inverse: true,
				axisTick: 'none',
				axisLine: 'none',
				show: true,
				axisLabel: { textStyle: { color: '#ffffff', fontSize: '12' } },
				data: salvProValue,
			},
		],
		series: [
			{
				name: '值',
				type: 'bar',
				zlevel: 1,
				itemStyle: {
					normal: {
						barBorderRadius: 30,
						color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
							{ offset: 0, color: 'rgb(57,89,255,1)' },
							{ offset: 1, color: 'rgb(46,200,207,1)' },
						]),
					},
				},
				barWidth: 10,
				data: salvProValue,
			},
			{
				name: '背景',
				type: 'bar',
				barWidth: 10,
				barGap: '-100%',
				data: salvProMax,
				itemStyle: {
					normal: { color: 'rgba(24,31,68,1)', barBorderRadius: 30 },
				},
			},
		],
	}
	chartInstance.setOption(option)
}

const handleResize = () => {
	chartInstance?.resize()
}

onMounted(() => {
	initChart()
	window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
	chartInstance?.dispose()
	window.removeEventListener('resize', handleResize)
})

defineExpose({
	resize: () => chartInstance?.resize(),
})
</script>

<template>
	<div ref="chartRef" class="size-full" />
</template>

<style scoped></style>
