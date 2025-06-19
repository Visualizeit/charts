<script lang="ts" setup>
import { Vue3Marquee } from 'vue3-marquee'

const props = defineProps<{ data: DashboardData }>()
</script>

<template>
	<DataBox title="会员等级概况">
		<div class="max-h-48 overflow-y-auto text-white">
			<Vue3Marquee class="w-full!" vertical>
				<div
					v-for="(item, index) in props.data.member_data"
					:key="index"
					class="flex h-5 w-full justify-between"
				>
					<p class="font-bold text-yellow-500">{{ item.level }}</p>
					<p>{{ item.level_name }}</p>
					<p>{{ item.count }}</p>
				</div>
			</Vue3Marquee>
		</div>
	</DataBox>
</template>

<style scoped>
:deep(.marquee) {
	gap: 8px;
}
</style>
