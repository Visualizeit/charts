<script lang="ts" setup>
import { Vue3Marquee } from 'vue3-marquee'

const props = defineProps<{ data: DashboardData }>()
</script>

<template>
	<DataBox title="今日新增加盟商列表">
		<div class="max-h-42 overflow-y-auto">
			<Vue3Marquee class="w-full!" vertical>
				<div
					v-for="(item, index) in props.data.today_franchisee_data"
					:key="index"
					class="flex h-14 w-full justify-between p-4 text-white even:bg-neutral-800"
				>
					<div class="flex gap-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="icon icon-tabler icons-tabler-outline icon-tabler-user-plus"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
							<path d="M16 19h6" />
							<path d="M19 16v6" />
							<path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
						</svg>
						<p>{{ item.realname }}</p>
					</div>
					<p>{{ item.mobile }}</p>
					<p>
						<span>{{ item.level_name.name }}</span>
					</p>
				</div>
			</Vue3Marquee>
		</div>
	</DataBox>
</template>
