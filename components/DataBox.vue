<script lang="ts" setup>
const props = defineProps<{ title: string }>()
</script>

<template>
	<div class="relative flex flex-col gap-4 p-8">
		<DataBoxBorder class="top-0 left-0" />
		<DataBoxBorder class="top-0 right-0 rotate-y-180" />
		<DataBoxBorder class="bottom-0 left-0 rotate-x-180" />
		<DataBoxBorder class="right-0 bottom-0 rotate-x-180 rotate-y-180" />
		<p class="text-2xl text-white">{{ props.title }}</p>
		<slot />
	</div>
</template>
