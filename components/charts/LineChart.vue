<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref(null)
let chartInstance: echarts.ECharts | null = null

const initChart = () => {
	if (!chartRef.value) return

	chartInstance = echarts.init(chartRef.value)

	const dataObj = {
		year: ['2015', '2016', '2017', '2018', '2019', '2020'],
		data: {
			value: [
				{ name: '上游流速', value: [127, 224, 250, 278, 227, 355] },
				{ name: '下游流速', value: [27, 124, 70, 178, 127, 157] },
				{ name: '平均流速', value: [127, 74, 120, 99, 130, 50] },
			],
		},
	}

	const dataArr = dataObj.data.value.map((item) => ({
		name: item.name,
		type: 'line',
		smooth: true,
		symbolSize: 8,
		data: item.value,
		barWidth: '30%',
		itemStyle: {
			normal: {
				color:
					item.name === '上游流速'
						? '#f0c725'
						: item.name === '下游流速'
							? '#0BE3FF'
							: '#16f892',
			},
		},
	}))

	const option = {
		color: ['#f0c725', '#16f892'],
		title: {
			left: 'center',
			text: '',
			textStyle: { color: '#FFFFFF', fontSize: '14' },
		},
		tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
		legend: {
			x: 'center',
			top: '25',
			textStyle: { color: '#c1cadf', fontSize: 14 },
		},
		grid: {
			left: '6%',
			right: '4%',
			top: '25%',
			bottom: '3%',
			containLabel: true,
		},
		toolbox: { show: true, orient: 'vertical', x: 'right', y: 'center' },
		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				data: dataObj.year,
				axisLine: { lineStyle: { color: 'rgba(240,199,37,0.5)' } },
				axisLabel: { interval: 0, color: '#c1cadf', fontSize: '15' },
			},
		],
		yAxis: [
			{
				type: 'value',
				name: '(m3)',
				nameTextStyle: { color: '#c1cadf', align: 'right', lineHeight: 10 },
				axisLine: { lineStyle: { color: 'rgba(240,199,37,0.5)' } },
				axisLabel: { interval: 0, color: '#c1cadf', fontSize: '15' },
				splitLine: { show: false },
			},
		],
		series: dataArr,
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
