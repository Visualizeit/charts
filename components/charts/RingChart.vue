<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref(null)
let chartInstance: echarts.ECharts | null = null

const initChart = () => {
	if (!chartRef.value) return

	chartInstance = echarts.init(chartRef.value)

	const dataStyle = {
		normal: {
			label: { show: false },
			labelLine: { show: false },
			shadowBlur: 0,
			shadowColor: '#203665',
		},
	}

	const option = {
		series: [
			{
				name: '第一个圆环',
				type: 'pie',
				clockWise: false,
				radius: [45, 55],
				itemStyle: dataStyle,
				hoverAnimation: false,
				center: ['15%', '50%'],
				data: [
					{
						value: 25,
						label: {
							normal: {
								rich: {
									a: {
										color: '#3a7ad5',
										align: 'center',
										fontSize: 14,
										fontWeight: 'bold',
									},
									b: { color: '#fff', align: 'center', fontSize: 12 },
								},
								formatter: function (params) {
									return (
										'{b|饮用水质}\n\n' +
										'{a|' +
										params.value +
										'个}' +
										'\n\n{b|增长2%}'
									)
								},
								position: 'center',
								show: true,
								textStyle: {
									fontSize: '12',
									fontWeight: 'normal',
									color: '#fff',
								},
							},
						},
						itemStyle: {
							normal: {
								color: '#2c6cc4',
								shadowColor: '#2c6cc4',
								shadowBlur: 0,
							},
						},
					},
					{
						value: 75,
						name: 'invisible',
						itemStyle: {
							normal: { color: '#24375c' },
							emphasis: { color: '#24375c' },
						},
					},
				],
			},
			{
				name: '第二个圆环',
				type: 'pie',
				clockWise: false,
				radius: [45, 55],
				itemStyle: dataStyle,
				hoverAnimation: false,
				center: ['50%', '50%'],
				data: [
					{
						value: 50,
						label: {
							normal: {
								rich: {
									a: {
										color: '#d03e93',
										align: 'center',
										fontSize: 14,
										fontWeight: 'bold',
									},
									b: { color: '#fff', align: 'center', fontSize: 12 },
								},
								formatter: function (params) {
									return (
										'{b|生活用水}\n\n' +
										'{a|' +
										params.value +
										'个}' +
										'\n\n{b|增长2%}'
									)
								},
								position: 'center',
								show: true,
								textStyle: {
									fontSize: '12',
									fontWeight: 'normal',
									color: '#fff',
								},
							},
						},
						itemStyle: {
							normal: {
								color: '#ef45ac',
								shadowColor: '#ef45ac',
								shadowBlur: 0,
							},
						},
					},
					{
						value: 50,
						name: 'invisible',
						itemStyle: {
							normal: { color: '#412a4e' },
							emphasis: { color: '#412a4e' },
						},
					},
				],
			},
			{
				name: '第三个圆环',
				type: 'pie',
				clockWise: false,
				radius: [45, 55],
				itemStyle: dataStyle,
				hoverAnimation: false,
				center: ['85%', '50%'],
				data: [
					{
						value: 75,
						label: {
							normal: {
								rich: {
									a: {
										color: '#603dd0',
										align: 'center',
										fontSize: 14,
										fontWeight: 'bold',
									},
									b: { color: '#fff', align: 'center', fontSize: 12 },
								},
								formatter: function (params) {
									return (
										'{b|自来水}\n\n' +
										'{a|' +
										params.value +
										'个}' +
										'\n\n{b|增长2%}'
									)
								},
								position: 'center',
								show: true,
								textStyle: {
									fontSize: '12',
									fontWeight: 'normal',
									color: '#fff',
								},
							},
						},
						itemStyle: {
							normal: {
								color: '#613fd1',
								shadowColor: '#613fd1',
								shadowBlur: 0,
							},
						},
					},
					{
						value: 25,
						name: 'invisible',
						itemStyle: {
							normal: { color: '#453284' },
							emphasis: { color: '#453284' },
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
	resize: () => chartInstance?.resize(),
})
</script>

<template>
	<div ref="chartRef" class="size-full" />
</template>

<style scoped></style>
