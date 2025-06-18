<script lang="ts" setup>
import NumberFlow from '@number-flow/vue'

const props = defineProps<{ data: DashboardData }>()
</script>

<template>
	<DataBox title="加盟商概况">
		<SplitLine />
		<div class="grid grid-cols-3 text-white">
			<div class="flex flex-col items-center gap-4">
				<p class="text-4xl italic">
					<NumberFlow :value="props.data.today_franchisee" />
				</p>
				<p>今日</p>
			</div>
			<div class="flex flex-col items-center gap-4">
				<p class="text-4xl italic">
					<NumberFlow :value="props.data.yesterday_franchisee" />
				</p>
				<p>昨日</p>
			</div>
			<div class="flex flex-col items-center gap-4">
				<p class="text-4xl italic">
					<NumberFlow :value="props.data.month_franchisee" />
				</p>
				<p>本月</p>
			</div>
		</div>
	</DataBox>
</template>
