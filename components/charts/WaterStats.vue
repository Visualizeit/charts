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
	<div class="water-stats">
		<div class="stats-left">
			<div class="stats-title">
				<h6>注水量</h6>
				<span><b>{{ props.data.injection.value }}</b>{{ props.data.injection.unit }}</span>
				<img src="/image/pictre.png" alt="注水量" />
			</div>
		</div>
		<div class="stats-right">
			<div class="stats-title">
				<h6>泄水量</h6>
				<span><b>{{ props.data.drainage.value }}</b>{{ props.data.drainage.unit }}</span>
				<img src="/image/pictre.png" alt="泄水量" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.water-stats {
	width: 100%;
	height: 100%;
	display: flex;
}

.stats-left,
.stats-right {
	flex: 1;
	height: 100%;
}

.stats-title {
	width: 100%;
	height: 100%;
	padding: 30px;
	box-sizing: border-box;
}

.stats-title h6 {
	color: #bad0e2;
	margin: 0;
}

.stats-title span {
	margin-top: 30px;
	display: inline-block;
	color: #2aa4f1;
}

.stats-title span b {
	font-size: 30px;
	letter-spacing: 5px;
}

.stats-title img {
	width: 80%;
}
</style>
