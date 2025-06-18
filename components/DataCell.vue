<script lang="ts" setup>
import NumberFlow from '@number-flow/vue'

const props = defineProps<{
	value: string | number
	unit: string
	name: string
}>()
</script>

<template>
	<div
		class="grid place-items-center gap-2 bg-[url(board-background.png)] bg-size-[100%_100%] bg-center bg-no-repeat p-6"
	>
		<div class="flex items-end gap-3">
			<p class="text-5xl text-yellow-300 italic">
				<NumberFlow
					v-if="typeof props.value === 'number'"
					:value="props.value"
				/>
				<span v-else>{{ props.value }}</span>
			</p>
			<p class="text-lg text-white">{{ props.unit }}</p>
		</div>
		<p class="text-xl text-white">{{ props.name }}</p>
	</div>
</template>
