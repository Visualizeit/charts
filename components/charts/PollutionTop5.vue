<script lang="ts" setup>
// 定义污染数据的类型
interface PollutionItem {
	rank: number
	level: string
	province: string
	city: string
	status: string
	distance: string
}

// 可以接受外部传入的数据，如果没有传入则使用默认数据
const props = withDefaults(defineProps<{
	data?: PollutionItem[]
}>(), {
	data: () => [
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
	]
})
</script>

<template>
	<div class="pollution-top5">
		<div class="top5-ul">
			<ul>
				<li v-for="item in props.data" :key="item.rank">
					<span>{{ item.rank }}</span>
					<span>{{ item.level }}</span>
					<span>{{ item.province }}</span>
					<span>{{ item.city }}</span>
					<span>{{ item.status }}</span>
					<span>{{ item.distance }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
.pollution-top5 {
	width: 100%;
	height: 100%;
}

.top5-ul {
	width: calc(100% - 20px);
	height: calc(100% - 30px);
	padding: 10px;
}

.top5-ul ul {
	width: 100%;
	height: 100%;
	list-style: none;
	margin: 0;
	padding: 0;
}

.top5-ul ul > li {
	width: 100%;
	height: 20%;
	color: #ffffff;
	line-height: 68px;
	justify-content: center;
}

.top5-ul ul li span {
	margin-left: 3%;
	font-size: 14px;
}

.top5-ul ul li span:nth-child(1) {
	color: #eb6841;
	font-style: oblique;
	display: inline-block;
	text-align: center;
	font-size: 20px;
}

.top5-ul ul li span:nth-child(2) {
	width: 10%;
	display: inline-block;
	text-align: center;
	height: 30px;
	line-height: 30px;
	vertical-align: center;
	border-radius: 5px;
	color: #ffffff;
}

.top5-ul ul li:nth-child(1) span:nth-child(2),
.top5-ul ul li:nth-child(2) span:nth-child(2),
.top5-ul ul li:nth-child(3) span:nth-child(2) {
	background: #d89346;
}

.top5-ul ul li:nth-child(4) span:nth-child(2),
.top5-ul ul li:nth-child(5) span:nth-child(2) {
	background: #1db5ea;
}

.top5-ul ul li span:nth-child(3) {
	display: inline-block;
	text-align: center;
}

.top5-ul ul li span:nth-child(4) {
	display: inline-block;
	text-align: center;
}

.top5-ul ul li span:nth-child(5) {
	display: inline-block;
	text-align: center;
}

.top5-ul ul li span:nth-child(6) {
	display: inline-block;
	text-align: center;
}
</style>
