<script lang="ts" setup>
import { Vue3Marquee } from 'vue3-marquee'

const props = defineProps<{ data: DashboardData }>()
</script>

<template>
	<div class="flex flex-col gap-4">
		<p class="text-center text-2xl text-white">区域门店数据</p>
		<div class="max-h-42 overflow-y-auto">
			<Vue3Marquee class="w-full!" vertical>
				<div
					v-for="(item, index) in props.data.area_data"
					:key="index"
					class="flex h-14 w-full justify-between bg-neutral-400 p-4 text-white even:bg-neutral-800"
				>
					<p>{{ item.store_title }}</p>
					<p>{{ item.area }}</p>
					<p>{{ item.count }}</p>
				</div>
			</Vue3Marquee>
		</div>
	</div>
</template>
