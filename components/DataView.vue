<script lang="ts" setup></script>

<template>
	<main
		class="h-dvh w-dvw bg-[url(background.png)] bg-size-[100%_100%] bg-center"
	>
		<h1
			class="absolute top-8 left-1/2 -translate-x-1/2 transform text-5xl text-white"
		>
			趣爱眼智慧数据中心
		</h1>
		<DateText class="absolute top-8 right-16" />
		<div class="h-32" />
		<div class="grid grid-cols-12 px-14">
			<div class="col-span-3 flex flex-col gap-6 pt-10">
				<DataBox title="天使之笔仪器" />
				<DataBox title="复购产品概况" />
			</div>
			<div class="col-span-6">
				<div class="grid grid-cols-2">
					<DateCell name="消费总金额" value="0.14" unit="元" />
					<DateCell name="加盟商数量" value="61" unit="家" />
				</div>
			</div>
			<div class="col-span-3 flex flex-col gap-6 pt-10">
				<DataBox title="加盟商概况" />
				<DataBox title="会员等级概况" />
			</div>
		</div>
	</main>
</template>
