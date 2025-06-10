<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import RadarChart from './charts/RadarChart.vue'
import PollutionBarChart from './charts/PollutionBarChart.vue'
import ChinaMapChart from './charts/ChinaMapChart.vue'
import RingChart from './charts/RingChart.vue'
import LineChart from './charts/LineChart.vue'
import PollutionTop5 from './charts/PollutionTop5.vue'
import WaterStats from './charts/WaterStats.vue'

// 图表组件引用
const radarChartRef = useTemplateRef('radarChartRef')
const pollutionBarChartRef = useTemplateRef('pollutionBarChartRef')
const chinaMapChartRef = useTemplateRef('chinaMapChartRef')
const ringChartRef = useTemplateRef('ringChartRef')
const lineChartRef = useTemplateRef('lineChartRef')

// 水质污染TOP5数据
const pollutionTop5Data = ref([
	{
		rank: 1,
		level: '严重',
		province: '北京市',
		city: '房山区',
		status: '重度污染',
		distance: '15公里',
	},
	{
		rank: 2,
		level: '严重',
		province: '上海市',
		city: '闵行区',
		status: '重度污染',
		distance: '10公里',
	},
	{
		rank: 3,
		level: '严重',
		province: '北京市',
		city: '朝阳区',
		status: '重度污染',
		distance: '9.3公里',
	},
	{
		rank: 4,
		level: '中度',
		province: '广东省',
		city: '广州市',
		status: '中度污染',
		distance: '8.6公里',
	},
	{
		rank: 5,
		level: '中度',
		province: '浙江省',
		city: '杭州市',
		status: '中度污染',
		distance: '6.6公里',
	},
])

// 水量统计数据
const waterStatsData = ref({
	injection: {
		value: 1756,
		unit: 'm3/h',
	},
	drainage: {
		value: 3520,
		unit: 'm3/h',
	},
})

// 统一处理窗口大小变化
const handleResize = () => {
	radarChartRef.value?.resize()
	pollutionBarChartRef.value?.resize()
	chinaMapChartRef.value?.resize()
	ringChartRef.value?.resize()
	lineChartRef.value?.resize()
}

onMounted(() => {
	// 监听窗口大小变化
	window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
	// 移除事件监听器
	window.removeEventListener('resize', handleResize)
})
</script>

<template>
	<div class="absolute h-full w-full bg-[#0d325f]">
		<!-- Header -->
		<header class="h-[70px] w-full">
			<div class="float-left w-full leading-[70px]">
				<span class="px-5 text-2xl font-bold tracking-[2px] text-white">
					水质情况实时监测预警系统
				</span>
			</div>
		</header>

		<!-- Main Content -->
		<main class="absolute h-[calc(100%-75px)] w-full">
			<div class="h-full">
				<!-- Left Panel -->
				<aside class="float-left mx-[0.3%] h-full w-[22%]">
					<!-- Top Section -->
					<section class="h-[27%] w-full bg-[rgba(12,26,63,0.3)]">
						<div
							class="relative top-0 left-[5px] h-[30px] w-[calc(100%-20px)] pl-4 text-[13px] leading-[30px] text-white before:absolute before:top-[5px] before:left-[5px] before:h-5 before:w-1 before:rounded-[2px] before:bg-[#2997e4] before:content-['']"
						>
							重点水质量检测区
						</div>
						<div class="h-[calc(100%-30px)] w-full">
							<WaterStats :data="waterStatsData" />
						</div>
					</section>

					<!-- Middle Section -->
					<section class="mt-[1.6%] h-[38%] w-full bg-[rgba(12,26,63,0.3)]">
						<div
							class="relative top-0 left-[5px] h-[30px] w-[calc(100%-20px)] pl-4 text-[13px] leading-[30px] text-white before:absolute before:top-[5px] before:left-[5px] before:h-5 before:w-1 before:rounded-[2px] before:bg-[#2997e4] before:content-['']"
						>
							水质量分布情况
						</div>
						<div class="h-[calc(100%-30px)] w-full">
							<RadarChart ref="radarChartRef" />
						</div>
					</section>

					<!-- Bottom Section -->
					<section class="mt-[1.6%] h-[32%] w-full bg-[rgba(12,26,63,0.3)]">
						<div
							class="relative top-0 left-[5px] h-[30px] w-[calc(100%-20px)] pl-4 text-[13px] leading-[30px] text-white before:absolute before:top-[5px] before:left-[5px] before:h-5 before:w-1 before:rounded-[2px] before:bg-[#2997e4] before:content-['']"
						>
							企业污染排放情况
						</div>
						<div class="h-[calc(100%-30px)] w-full">
							<PollutionBarChart ref="pollutionBarChartRef" />
						</div>
					</section>
				</aside>

				<!-- Center Panel -->
				<main class="float-left mx-[0.3%] h-full w-[54%]">
					<ChinaMapChart ref="chinaMapChartRef" />
				</main>

				<!-- Right Panel -->
				<aside class="float-right mx-[0.3%] h-full w-[22%]">
					<!-- Top Section -->
					<section class="h-[32%] w-full bg-[rgba(12,26,63,0.3)]">
						<div
							class="relative top-0 left-[5px] h-[30px] w-[calc(100%-20px)] pl-4 text-[13px] leading-[30px] text-white before:absolute before:top-[5px] before:left-[5px] before:h-5 before:w-1 before:rounded-[2px] before:bg-[#2997e4] before:content-['']"
						>
							水质污染TOP5
						</div>
						<div class="h-[calc(100%-30px)] w-full">
							<PollutionTop5 :data="pollutionTop5Data" />
						</div>
					</section>

					<!-- Middle Section -->
					<section class="mt-[2%] h-[25%] w-full bg-[rgba(12,26,63,0.3)]">
						<div
							class="relative top-0 left-[5px] h-[30px] w-[calc(100%-20px)] pl-4 text-[13px] leading-[30px] text-white before:absolute before:top-[5px] before:left-[5px] before:h-5 before:w-1 before:rounded-[2px] before:bg-[#2997e4] before:content-['']"
						>
							水质类别占比
						</div>
						<div class="h-[calc(100%-30px)] w-full">
							<RingChart ref="ringChartRef" />
						</div>
					</section>

					<!-- Bottom Section -->
					<section class="mt-[2%] h-[39%] w-full bg-[rgba(12,26,63,0.3)]">
						<div
							class="relative top-0 left-[5px] h-[30px] w-[calc(100%-20px)] pl-4 text-[13px] leading-[30px] text-white before:absolute before:top-[5px] before:left-[5px] before:h-5 before:w-1 before:rounded-[2px] before:bg-[#2997e4] before:content-['']"
						>
							主要地区水流量
						</div>
						<div class="h-[calc(100%-30px)] w-full">
							<LineChart ref="lineChartRef" />
						</div>
					</section>
				</aside>
			</div>
		</main>
	</div>
</template>
