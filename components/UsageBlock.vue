<script lang="ts" setup>
const props = defineProps<{ data: DashboardData }>()
</script>

<template>
	<DataBox title="天使之笔仪器">
		<div class="grid grid-cols-2">
			<div class="flex flex-col items-center gap-3">
				<p class="text-4xl text-blue-400 italic">3221</p>
				<p class="text-white">仪器总数</p>
			</div>
			<div class="flex flex-col items-center gap-3">
				<p class="text-4xl text-blue-400 italic">135</p>
				<p class="text-white">今日使用</p>
			</div>
		</div>
		<SplitLine />
		<div class="flex flex-col gap-4 text-white">
			<p>热门门店（已购/已用）</p>
			<ul class="flex flex-col gap-2">
				<li
					v-for="item in props.data.device_store_data"
					:key="item.store_name"
					class="flex justify-between"
				>
					<p>{{ item.store_name }}</p>
					<p>{{ item.open_times }}/{{ item.total_times }}</p>
				</li>
			</ul>
		</div>
	</DataBox>
</template>
