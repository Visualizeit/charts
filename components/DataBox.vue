<script lang="ts" setup>
const props = defineProps<{ title: string }>()
</script>

<template>
	<div class="border border-white p-4">
		<p class="text-3xl text-white">{{ props.title }}</p>
	</div>
</template>
