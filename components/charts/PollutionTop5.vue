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
	<div class="w-full h-full">
		<div class="w-[calc(100%-20px)] h-[calc(100%-30px)] p-[10px]">
			<ul class="w-full h-full list-none m-0 p-0">
				<li 
					v-for="(item, index) in props.data" 
					:key="item.rank"
					class="w-full h-[20%] text-white leading-[68px] justify-center"
				>
					<span class="ml-[3%] text-xl text-[#eb6841] italic inline-block text-center">
						{{ item.rank }}
					</span>
					<span 
						class="ml-[3%] text-sm w-[10%] inline-block text-center h-[30px] leading-[30px] align-middle rounded-[5px] text-white"
						:class="index < 3 ? 'bg-[#d89346]' : 'bg-[#1db5ea]'"
					>
						{{ item.level }}
					</span>
					<span class="ml-[3%] text-sm inline-block text-center">
						{{ item.province }}
					</span>
					<span class="ml-[3%] text-sm inline-block text-center">
						{{ item.city }}
					</span>
					<span class="ml-[3%] text-sm inline-block text-center">
						{{ item.status }}
					</span>
					<span class="ml-[3%] text-sm inline-block text-center">
						{{ item.distance }}
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>


