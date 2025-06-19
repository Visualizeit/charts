<script lang="ts" setup>
import { onMounted, onUnmounted, watch, useTemplateRef } from 'vue'
import * as echarts from 'echarts'
import { useElementSize } from '@vueuse/core'
import chinaJSON from '~/utils/chinaJSON'

const chartRef = useTemplateRef('chartRef')
let chartInstance: any = null

const registerChinaMap = () => {
	echarts.registerMap('china', chinaJSON)
}

const initChart = () => {
	if (!chartRef.value) return

	registerChinaMap()
	chartInstance = echarts.init(chartRef.value)

	const data = [
		{ name: '北京', value: [116.24, 39.55, 150] }, // 黄色范围
		{ name: '广东', value: [114.271522, 22.753644, 800] }, // 红色范围（深圳属于广东）
		{ name: '重庆', value: [106.54, 29.59, 50] }, // 蓝色范围
		{ name: '浙江', value: [120.19, 30.26, 300] }, // 黄色范围
		{ name: '上海', value: [121.4648, 31.2891, 600] }, // 红色范围
	]

	// 根据数值映射颜色的函数
	const getColorByValue = (value) => {
		if (value >= 0 && value <= 100) return '#FD8918' // 蓝色
		if (value > 100 && value <= 500) return '#F6FD18' // 黄色
		if (value > 500 && value <= 1000) return '#18DBFD' // 红色
		return '#FD8918' // 默认蓝色
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
			max: 1000,
			left: 256,
			bottom: 120,
			orient: 'vertical',
			itemWidth: 20,
			itemHeight: 14,
			itemGap: 8,
			pieces: [
				{ min: 0, max: 100, color: '#FD8918', label: '500-1000' },
				{ min: 100, max: 500, color: '#F6FD18', label: '100-500' },
				{ min: 500, max: 1000, color: '#18DBFD', label: '0-100' },
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
			layoutSize: '100%',
			itemStyle: {
				normal: {
					borderColor: 'rgba(147, 235, 248, 1)',
					borderWidth: 1,
					areaColor: {
						type: 'radial',
						x: 0.5,
						y: 0.5,
						r: 0.8,
						colorStops: [
							{
								offset: 0,
								color: 'rgba(175,238,238, 0)', // 0% 处的颜色
							},
							{
								offset: 1,
								color: 'rgba(47,79,79, .1)', // 100% 处的颜色
							},
						],
						globalCoord: false, // 缺省为 false
					},
					shadowColor: 'rgba(128, 217, 248, 1)',
					shadowOffsetX: -2,
					shadowOffsetY: 2,
					shadowBlur: 10,
				},
				emphasis: {
					areaColor: '#389BB7',
					borderWidth: 0,
				},
			},
			regions: [
				{
					name: '南海诸岛',
					itemStyle: {
						areaColor: 'rgba(0, 10, 52, 1)',
						borderColor: 'rgba(0, 10, 52, 1)',
						normal: { opacity: 0, label: { show: false, color: '#009cc9' } },
					},
					label: { show: false, color: '#FFFFFF', fontSize: 12 },
				},
			],
		},
		series: [
			{
				type: 'map',
				mapType: 'china',
				aspectScale: 0.85,
				layoutCenter: ['50%', '50%'],
				layoutSize: '100%',
				zoom: 1,
				scaleLimit: { min: 1, max: 2 },
				data: mapData,
				itemStyle: {
					normal: {
						areaColor: '#0c274b',
						borderColor: '#1cccff',
						borderWidth: 1.5,
					},
					emphasis: { areaColor: '#02102b', label: { color: '#fff' } },
				},
			},
			{
				type: 'effectScatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				symbolSize: 6,
				rippleEffect: {
					period: 4,
					scale: 4,
					brushType: 'fill',
					color: '#ffffff',
				},
				label: {
					normal: {
						show: true,
						position: 'right',
						formatter: '{b}',
						color: '#ffffff',
						fontWeight: 'bold',
						fontSize: 16,
					},
				},
				data: data,
				itemStyle: {
					normal: {
						show: true,
						color: '#ffffff',
						shadowBlur: 20,
						shadowColor: '#ffffff',
					},
					emphasis: {
						color: '#4293b3',
						shadowBlur: 25,
						shadowColor: '#4293b3',
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
					trailLength: 0.8,
					color: '#00FFFF',
					symbolSize: 4,
					symbol: 'arrow',
					shadowBlur: 10,
					shadowColor: '#00FFFF',
				},
				lineStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
						{
							offset: 0,
							color: '#B0C4DE',
						},
						{
							offset: 0.5,
							color: '#87CEEB',
						},
						{
							offset: 1,
							color: '#ADD8E6',
						},
					]),
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
