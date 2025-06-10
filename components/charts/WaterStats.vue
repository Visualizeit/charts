<script lang="ts" setup>
interface WaterStats {
	injection: {
		value: number
		unit: string
	}
	drainage: {
		value: number
		unit: string
	}
}

const props = withDefaults(defineProps<{
	data?: WaterStats
}>(), {
	data: () => ({
		injection: {
			value: 1756,
			unit: 'm3/h'
		},
		drainage: {
			value: 3520,
			unit: 'm3/h'
		}
	})
})
</script>

<template>
	<div class="w-full h-full flex">
		<div class="flex-1 h-full">
			<div class="w-full h-full p-[30px] box-border">
				<h6 class="text-[#bad0e2] m-0">注水量</h6>
				<span class="mt-[30px] inline-block text-[#2aa4f1]">
					<b class="text-[30px] tracking-[5px]">{{ props.data.injection.value }}</b>{{ props.data.injection.unit }}
				</span>
				<img src="/image/pictre.png" alt="注水量" class="w-[80%]" />
			</div>
		</div>
		<div class="flex-1 h-full">
			<div class="w-full h-full p-[30px] box-border">
				<h6 class="text-[#bad0e2] m-0">泄水量</h6>
				<span class="mt-[30px] inline-block text-[#2aa4f1]">
					<b class="text-[30px] tracking-[5px]">{{ props.data.drainage.value }}</b>{{ props.data.drainage.unit }}
				</span>
				<img src="/image/pictre.png" alt="泄水量" class="w-[80%]" />
			</div>
		</div>
	</div>
</template>


