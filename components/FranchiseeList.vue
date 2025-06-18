<script lang="ts" setup>
const props = defineProps<{ data: DashboardData }>()
</script>

<template>
	<div class="flex flex-col gap-4">
		<p class="text-center text-2xl text-white">区域门店数据</p>
		<ul>
			<li
				v-for="(item, index) in props.data.area_data"
				:key="index"
				class="flex justify-between bg-neutral-400 p-4 text-white even:bg-neutral-800"
			>
				<p>{{ item.store_title }}</p>
				<p>{{ item.area }}</p>
				<p>{{ item.count }}</p>
			</li>
		</ul>
	</div>
</template>
