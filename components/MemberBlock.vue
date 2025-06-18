<script lang="ts" setup>
const props = defineProps<{ data: DashboardData }>()
</script>

<template>
	<DataBox title="会员等级概况">
		<ul class="flex flex-col gap-2 text-white">
			<li
				v-for="(item, index) in props.data.member_data"
				:key="index"
				class="flex h-5 justify-between"
			>
				<p class="text-yellow-500">{{ item.level }}</p>
				<p>{{ item.level_name }}</p>
				<p>{{ item.count }}</p>
			</li>
		</ul>
	</DataBox>
</template>
