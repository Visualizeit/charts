<script lang="ts" setup></script>

<template>
	<div class="flex flex-col gap-4">
		<p class="text-white text-2xl text-center">今日新增加盟商列表</p>
		<ul>
			<li v-for="i in 3" :key="i" class="flex justify-between text-white p-4 bg-neutral-400 even:bg-neutral-800">
                <p>{{ i }}</p>
				<p>今日增加加盟商</p>
				<p>深圳龙华上塘</p>
                <p>优秀</p>
			</li>
	
		</ul>
	</div>
</template>
