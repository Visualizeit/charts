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
	<div class="content-body">
		<div class="header">
			<div class="header-left">
				<span>水质情况实时监测预警系统</span>
			</div>
		</div>

		<div class="content">
			<div class="content-con">
				<div class="left-body">
					<div class="left-top public-bg">
						<div class="public-title">重点水质量检测区</div>
						<div class="top-body">
							<WaterStats :data="waterStatsData" />
						</div>
					</div>
					<div class="left-con public-bg">
						<div class="public-title">水质量分布情况</div>
						<div class="title-nav">
							<RadarChart ref="radarChartRef" />
						</div>
					</div>
					<div class="left-bottom public-bg">
						<div class="public-title">企业污染排放情况</div>
						<div class="title-nav">
							<PollutionBarChart ref="pollutionBarChartRef" />
						</div>
					</div>
				</div>

				<div class="center-body">
					<ChinaMapChart ref="chinaMapChartRef" />
				</div>

				<div class="right-body">
					<div class="right-top public-bg">
						<div class="public-title">水质污染TOP5</div>
						<div class="title-nav">
							<PollutionTop5 :data="pollutionTop5Data" />
						</div>
					</div>
					<div class="right-con public-bg">
						<div class="public-title">水质类别占比</div>
						<div class="title-nav">
							<RingChart ref="ringChartRef" />
						</div>
					</div>
					<div class="right-bottom public-bg">
						<div class="public-title">主要地区水流量</div>
						<div class="title-nav">
							<LineChart ref="lineChartRef" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.public-bg {
	background: rgba(12, 26, 63, 0.3);
}

.public-title {
	width: calc(100% - 20px);
	height: 30px;
	position: relative;
	top: 0;
	left: 5px;
	color: white;
	padding-left: 16px;
	line-height: 30px;
	font-size: 13px;
}
.public-title:before {
	width: 4px;
	height: 20px;
	top: 5px;
	position: absolute;
	content: '';
	background: #2997e4;
	border-radius: 2px;
	left: 5px;
}

.content-body {
	width: 100%;
	height: 100%;
	background: #0d325f;
	background-size: 100% 100%;
	position: absolute;
}

.header {
	height: 70px;
	width: 100%;
	/*    border: 1px solid red;*/
}
.header .header-left {
	width: 100%;
	float: left;
	line-height: 70px;
}
.header .header-left span {
	color: #ffffff;
	font-weight: bold;
	font-size: 24px;
	letter-spacing: 2px;
	padding: 0 20px;
}
.content {
	width: 100%;
	height: calc(100% - 75px);
	position: absolute;
}
.content .content-con {
	height: 100%;
}
.content .content-con .left-body {
	width: 22%;
	height: 100%;
	float: left;
	margin: 0 0.3%;
}
.left-body .left-top {
	width: 100%;
	height: 27%;
}
.left-body .left-top .top-body {
	width: 100%;
	height: calc(100% - 30px);
}
.left-body .left-con {
	width: 100%;
	height: 38%;
	margin-top: 1.6%;
}

.left-body .left-bottom {
	width: 100%;
	height: 32%;
	margin-top: 1.6%;
}

.title-nav {
	width: 100%;
	height: calc(100% - 30px);
}

.center-body {
	width: 54%;
	height: 100%;
	margin: 0 0.3%;
	float: left;
}

.right-body {
	width: 22%;
	height: 100%;
	float: right;
	margin: 0 0.3%;
}

.right-body .right-top {
	width: 100%;
	height: 32%;
}

.right-body .right-con {
	width: 100%;
	height: 25%;
	margin-top: 2%;
}

.right-body .right-bottom {
	width: 100%;
	height: 39%;
	margin-top: 2%;
}
</style>
