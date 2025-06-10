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
const radarChartRef = ref(null)
const pollutionBarChartRef = ref(null)
const chinaMapChartRef = ref(null)
const ringChartRef = ref(null)
const lineChartRef = ref(null)

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
	<div class="absolute w-full h-full bg-[#0d325f]">
		<!-- Header -->
		<header class="h-[70px] w-full">
			<div class="w-full float-left leading-[70px]">
				<span class="text-white font-bold text-2xl tracking-[2px] px-5">
					水质情况实时监测预警系统
				</span>
			</div>
		</header>

		<!-- Main Content -->
		<main class="w-full h-[calc(100%-75px)] absolute">
			<div class="h-full">
				<!-- Left Panel -->
				<aside class="w-[22%] h-full float-left mx-[0.3%]">
					<!-- Top Section -->
					<section class="w-full h-[27%] bg-[rgba(12,26,63,0.3)]">
						<div class="relative w-[calc(100%-20px)] h-[30px] top-0 left-[5px] text-white pl-4 leading-[30px] text-[13px] before:content-[''] before:w-1 before:h-5 before:top-[5px] before:absolute before:bg-[#2997e4] before:rounded-[2px] before:left-[5px]">
							重点水质量检测区
						</div>
						<div class="w-full h-[calc(100%-30px)]">
							<WaterStats :data="waterStatsData" />
						</div>
					</section>
					
					<!-- Middle Section -->
					<section class="w-full h-[38%] mt-[1.6%] bg-[rgba(12,26,63,0.3)]">
						<div class="relative w-[calc(100%-20px)] h-[30px] top-0 left-[5px] text-white pl-4 leading-[30px] text-[13px] before:content-[''] before:w-1 before:h-5 before:top-[5px] before:absolute before:bg-[#2997e4] before:rounded-[2px] before:left-[5px]">
							水质量分布情况
						</div>
						<div class="w-full h-[calc(100%-30px)]">
							<RadarChart ref="radarChartRef" />
						</div>
					</section>
					
					<!-- Bottom Section -->
					<section class="w-full h-[32%] mt-[1.6%] bg-[rgba(12,26,63,0.3)]">
						<div class="relative w-[calc(100%-20px)] h-[30px] top-0 left-[5px] text-white pl-4 leading-[30px] text-[13px] before:content-[''] before:w-1 before:h-5 before:top-[5px] before:absolute before:bg-[#2997e4] before:rounded-[2px] before:left-[5px]">
							企业污染排放情况
						</div>
						<div class="w-full h-[calc(100%-30px)]">
							<PollutionBarChart ref="pollutionBarChartRef" />
						</div>
					</section>
				</aside>

				<!-- Center Panel -->
				<main class="w-[54%] h-full mx-[0.3%] float-left">
					<ChinaMapChart ref="chinaMapChartRef" />
				</main>

				<!-- Right Panel -->
				<aside class="w-[22%] h-full float-right mx-[0.3%]">
					<!-- Top Section -->
					<section class="w-full h-[32%] bg-[rgba(12,26,63,0.3)]">
						<div class="relative w-[calc(100%-20px)] h-[30px] top-0 left-[5px] text-white pl-4 leading-[30px] text-[13px] before:content-[''] before:w-1 before:h-5 before:top-[5px] before:absolute before:bg-[#2997e4] before:rounded-[2px] before:left-[5px]">
							水质污染TOP5
						</div>
						<div class="w-full h-[calc(100%-30px)]">
							<PollutionTop5 :data="pollutionTop5Data" />
						</div>
					</section>
					
					<!-- Middle Section -->
					<section class="w-full h-[25%] mt-[2%] bg-[rgba(12,26,63,0.3)]">
						<div class="relative w-[calc(100%-20px)] h-[30px] top-0 left-[5px] text-white pl-4 leading-[30px] text-[13px] before:content-[''] before:w-1 before:h-5 before:top-[5px] before:absolute before:bg-[#2997e4] before:rounded-[2px] before:left-[5px]">
							水质类别占比
						</div>
						<div class="w-full h-[calc(100%-30px)]">
							<RingChart ref="ringChartRef" />
						</div>
					</section>
					
					<!-- Bottom Section -->
					<section class="w-full h-[39%] mt-[2%] bg-[rgba(12,26,63,0.3)]">
						<div class="relative w-[calc(100%-20px)] h-[30px] top-0 left-[5px] text-white pl-4 leading-[30px] text-[13px] before:content-[''] before:w-1 before:h-5 before:top-[5px] before:absolute before:bg-[#2997e4] before:rounded-[2px] before:left-[5px]">
							主要地区水流量
						</div>
						<div class="w-full h-[calc(100%-30px)]">
							<LineChart ref="lineChartRef" />
						</div>
					</section>
				</aside>
			</div>
		</main>
	</div>
</template>


