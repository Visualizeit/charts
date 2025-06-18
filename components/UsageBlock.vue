<script lang="ts" setup></script>

<template>
	<DataBox title="天使之笔仪器">
		<div class="grid grid-cols-2">
			<div class="flex flex-col items-center gap-3">
				<p class="text-4xl text-blue-400 italic">3221</p>
				<p class="text-white">仪器总数</p>
			</div>
			<div class="flex flex-col items-center gap-3">
				<p class="text-4xl text-blue-400 italic">135</p>
				<p class="text-white">今日使用</p>
			</div>
		</div>
		<SplitLine />
		<div class="flex flex-col gap-4 text-white">
			<p>热门门店（已购/已用）</p>
			<ul class="flex flex-col gap-2">
				<li class="flex justify-between">
					<p>深圳龙华上塘</p>
					<p>50/22</p>
				</li>
				<li class="flex justify-between">
					<p>深圳龙华上塘</p>
					<p>50/22</p>
				</li>
				<li class="flex justify-between">
					<p>深圳龙华上塘</p>
					<p>50/22</p>
				</li>
				<li class="flex justify-between">
					<p>深圳龙华上塘</p>
					<p>50/22</p>
				</li>
			</ul>
		</div>
	</DataBox>
</template>
