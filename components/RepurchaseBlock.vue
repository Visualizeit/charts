<script lang="ts" setup>
const props = defineProps<{ data: DashboardData }>()
</script>

<template>
	<DataBox title="复购产品概况">
		<div class="grid grid-cols-2 gap-6 text-white">
			<div class="flex items-center justify-center gap-2">
				<p>今日</p>
				<p class="text-3xl text-red-500 italic">122</p>
			</div>
			<div class="flex items-center justify-center gap-2">
				<p>昨日</p>
				<p class="text-3xl text-red-500 italic">135</p>
			</div>
			<div class="flex items-center justify-center gap-2">
				<p>总数</p>
				<p class="text-3xl text-blue-400 italic">8933</p>
			</div>
			<div class="flex items-center justify-center gap-2">
				<p>本月</p>
				<p class="text-3xl text-orange-500 italic">1123</p>
			</div>
		</div>
	</DataBox>
</template>
