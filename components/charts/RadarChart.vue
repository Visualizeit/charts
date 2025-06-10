<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref(null)
let chartInstance: echarts.ECharts | null = null

const initChart = () => {
	if (!chartRef.value) return
	
	chartInstance = echarts.init(chartRef.value)
	const option = {
		color: ['#00c2ff', '#f9cf67', '#e92b77'],
		legend: {
			show: true,
			bottom: 0,
			center: 0,
			itemWidth: 14,
			itemHeight: 14,
			itemGap: 21,
			textStyle: { fontSize: 12, color: '#ade3ff' },
			data: ['2016', '2017', '2018'],
		},
		radar: [
			{
				indicator: [
					{ text: '重庆市', max: 100 },
					{ text: '北京市', max: 100 },
					{ text: '上海市', max: 100 },
					{ text: '广东省', max: 100 },
					{ text: '浙江省', max: 100 },
				],
				textStyle: { color: 'red' },
				center: ['50%', '50%'],
				radius: 60,
				startAngle: 90,
				splitNumber: 3,
				orient: 'horizontal',
				name: {
					formatter: '{value}',
					textStyle: { fontSize: 12, color: '#5b81cb' },
				},
				splitArea: { show: true, areaStyle: { color: ['#141c42', '#141c42'] } },
				axisLine: { lineStyle: { color: '#153269' } },
				splitLine: { lineStyle: { color: '#113865', width: 1 } },
			},
		],
		series: [
			{
				name: '雷达图',
				type: 'radar',
				itemStyle: { emphasis: { lineStyle: { width: 4 } } },
				data: [
					{
						name: '2016',
						value: [85, 65, 55, 90, 82],
						areaStyle: {
							normal: {
								color: {
									type: 'linear',
									x: 0,
									y: 0,
									x2: 1,
									y2: 1,
									colorStops: [
										{ offset: 0, color: '#00c2ff' },
										{ offset: 0.5, color: 'rgba(0,0,0,0)' },
										{ offset: 1, color: '#00c2ff' },
									],
									globalCoord: false,
								},
								opacity: 1,
							},
						},
						symbolSize: 2.5,
						label: {
							normal: {
								show: true,
								position: 'top',
								distance: 2,
								color: '#6692e2',
								fontSize: 14,
								formatter: function (params) {
									return params.value
								},
							},
						},
						itemStyle: { normal: { borderColor: '#00c2ff', borderWidth: 2.5 } },
					},
					{
						name: '2017',
						value: [50, 20, 45, 30, 75],
						symbolSize: 2.5,
						itemStyle: { normal: { borderColor: '#f9cf67', borderWidth: 2.5 } },
						areaStyle: {
							normal: {
								color: {
									type: 'linear',
									x: 0,
									y: 0,
									x2: 1,
									y2: 1,
									colorStops: [
										{ offset: 0, color: '#f9cf67' },
										{ offset: 0.5, color: 'rgba(0,0,0,0)' },
										{ offset: 1, color: '#f9cf67' },
									],
									globalCoord: false,
								},
								opacity: 1,
							},
						},
					},
					{
						name: '2018',
						value: [37, 80, 12, 50, 25],
						symbolSize: 2.5,
						itemStyle: { normal: { borderColor: '#e92b77', borderWidth: 2.5 } },
						areaStyle: {
							normal: {
								color: {
									type: 'linear',
									x: 0,
									y: 0,
									x2: 1,
									y2: 1,
									colorStops: [
										{ offset: 0, color: '#e92b77' },
										{ offset: 0.5, color: 'rgba(0,0,0,0)' },
										{ offset: 1, color: '#e92b77' },
									],
									globalCoord: false,
								},
								opacity: 1,
							},
						},
					},
				],
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
	resize: () => chartInstance?.resize()
})
</script>

<template>
	<div ref="chartRef" class="w-full h-full" />
</template>


