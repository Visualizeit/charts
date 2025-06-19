<script lang="ts" setup>
import { onMounted, onUnmounted, watch, useTemplateRef } from 'vue'
import * as echarts from 'echarts'
import { useElementSize } from '@vueuse/core'
import chinaJSON from '~/utils/chinaJSON'

const chartRef = useTemplateRef('chartRef')
let chartInstance = null

const registerChinaMap = () => {
	echarts.registerMap('china', chinaJSON)
}

const initChart = () => {
	if (!chartRef.value) return

	registerChinaMap()
	chartInstance = echarts.init(chartRef.value)

	const data = [
		{ name: '北京', value: [116.24, 39.55, 25000] }, // 黄色范围
		{ name: '广东', value: [114.271522, 22.753644, 80000] }, // 红色范围（深圳属于广东）
		{ name: '重庆', value: [106.54, 29.59, 5000] }, // 蓝色范围
		{ name: '浙江', value: [120.19, 30.26, 35000] }, // 黄色范围
		{ name: '上海', value: [121.4648, 31.2891, 60000] }, // 红色范围
	]

	// 根据数值映射颜色的函数
	const getColorByValue = (value) => {
		if (value >= 0 && value <= 10000) return '#18DBFD' // 蓝色
		if (value > 10000 && value <= 50000) return '#F6FD18' // 黄色
		if (value > 50000 && value <= 100000) return '#FD8918' // 橙色/红色
		return '#18DBFD' // 默认蓝色
	}

	// 地图区域数据，包含颜色映射
	const mapData = data.map((item) => ({
		name: item.name,
		value: item.value[2], // 数值
		itemStyle: {
			areaColor: getColorByValue(item.value[2]),
			borderColor: '#fff',
			borderWidth: 1,
		},
	}))

	// 连线数据：从各城市到深圳（广东）
	const linesData = [
		{
			coords: [
				[116.24, 39.55],
				[114.271522, 22.753644],
			],
		}, // 北京到深圳
		{
			coords: [
				[106.54, 29.59],
				[114.271522, 22.753644],
			],
		}, // 重庆到深圳
		{
			coords: [
				[120.19, 30.26],
				[114.271522, 22.753644],
			],
		}, // 浙江到深圳
		{
			coords: [
				[121.4648, 31.2891],
				[114.271522, 22.753644],
			],
		}, // 上海到深圳
	]

	const option = {
		visualMap: {
			type: 'piecewise',
			min: 0,
			max: 100000,
			left: 256,
			bottom: 100,
			orient: 'vertical',
			inverse: true,
			itemWidth: 20,
			itemHeight: 14,
			itemGap: 8,
			pieces: [
				{ min: 0, max: 10000, color: '#18DBFD', label: '0-10000' },
				{ min: 10000, max: 50000, color: '#F6FD18', label: '10000-50000' },
				{ min: 50000, max: 100000, color: '#FD8918', label: '50000-100000' },
			],
			textStyle: {
				color: '#fff',
				fontSize: 12,
			},
			itemSymbol: 'rect',
			showLabel: true,
			splitNumber: 3,
		},
		geo: {
			map: 'china',
			aspectScale: 0.85,
			layoutCenter: ['50%', '50%'],
			layoutSize: '120%',
			itemStyle: {
				normal: {
					borderColor: '#24C1F7FF',
					borderWidth: 1,
					areaColor: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 1,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: '#658D9300',
							},
							{
								offset: 1,
								color: '#93EBF821',
							},
						],
					},
					shadowColor: '#0499CDBF',
					shadowOffsetX: -2,
					shadowOffsetY: 2,
					shadowBlur: 10,
				},
				emphasis: {
					areaColor: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 1,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: '#658D9300',
							},
							{
								offset: 1,
								color: '#93EBF821',
							},
						],
					},
					borderColor: '#24C1F7FF',
					borderWidth: 1,
				},
			},
			tooltip: {
				show: true,
				textStyle: {
					fontSize: 12,
					color: '#FFFFFF',
				},
				backgroundColor: '#00000061',
				borderWidth: 0,
			},
			regions: mapData
				.map((item) => ({
					name: item.name,
					itemStyle: {
						areaColor: getColorByValue(item.value),
						borderColor: '#fff',
						borderWidth: 1,
					},
				}))
				.concat([
					{
						name: '南海诸岛',
						itemStyle: {
							areaColor: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 1,
								colorStops: [
									{
										offset: 0,
										color: '#658D9300',
									},
									{
										offset: 1,
										color: '#93EBF821',
									},
								],
							},
							borderColor: '#24C1F7FF',
							borderWidth: 1,
						},
					},
				]),
		},
		series: [
			{
				type: 'effectScatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				symbolSize: 4,
				rippleEffect: {
					period: 4,
					scale: 6,
					brushType: 'fill',
					color: '#FFFFFF',
				},
				label: {
					normal: {
						show: true,
						position: 'right',
						formatter: '{b}',
						color: '#FFFFFF',
						fontWeight: 'bold',
						fontSize: 11,
					},
				},
				data: data,
				itemStyle: {
					normal: {
						show: true,
						color: '#FFFFFF',
						shadowBlur: 20,
						shadowColor: '#FFFFFF',
					},
					emphasis: {
						color: '#FFFFFF',
						shadowBlur: 25,
						shadowColor: '#FFFFFF',
					},
				},
			},
			{
				type: 'lines',
				coordinateSystem: 'geo',
				zlevel: 3,
				effect: {
					show: true,
					period: 2,
					trailLength: 0.9,
					color: '#4FB6D2',
					symbolSize: 4,
					symbol: 'arrow',
				},
				lineStyle: {
					width: 1,
					curveness: 0.3,
				},
				data: linesData,
			},
		],
	}
	chartInstance?.setOption(option)
}

onMounted(() => {
	initChart()
})

onUnmounted(() => {
	chartInstance?.dispose()
})

const { width, height } = useElementSize(chartRef)

watch([width, height], () => {
	if (chartInstance) {
		chartInstance.resize()
	}
})
</script>

<template>
	<div ref="chartRef" class="size-full" />
</template>

<style scoped></style>
