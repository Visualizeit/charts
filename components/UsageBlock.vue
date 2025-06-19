<script lang="ts" setup>
import { Vue3Marquee } from 'vue3-marquee'

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

			<div class="max-h-38 overflow-y-auto">
				<Vue3Marquee class="w-full!" vertical>
					<div
						v-for="(item, index) in props.data.device_store_data"
						:key="index"
						class="flex justify-between w-full"
					>
						<p>{{ item.store_name }}</p>
						<p>{{ item.open_times }}/{{ item.total_times }}</p>
					</div>
				</Vue3Marquee>
			</div>
		</div>
	</DataBox>
</template>

<style scoped>
:deep(.marquee) {
	gap: 8px;
}
</style>
