<script lang="ts" setup>
const data = shallowRef<DashboardData>()

onMounted(() => {
	api().then((json) => {
		data.value = json
	})
})
</script>

<template>
	<main
		class="h-dvh w-dvw overflow-hidden bg-[url(background.png)] bg-size-[100%_100%] bg-center"
	>
		<h1
			class="absolute top-8 left-1/2 -translate-x-1/2 transform text-5xl tracking-widest text-white"
		>
			趣爱眼智慧数据中心
		</h1>
		<DateText class="absolute top-8 right-16" />
		<div class="h-32" />
		<div class="grid grid-cols-48 px-14">
			<div class="col-span-10 flex flex-col gap-6 pt-10">
				<template v-if="data">
					<UsageBlock :data="data" />
					<RepurchaseBlock :data="data" />
				</template>
			</div>
			<div class="col-span-28">
				<div class="flex h-full flex-col">
					<div class="mx-auto grid w-2/3 grid-cols-2 gap-8">
						<template v-if="data">
							<DataCell
								name="消费总金额"
								:value="data.total_order_price"
								unit="元"
							/>
							<DataCell
								name="加盟商数量"
								:value="data.franchisee_total"
								unit="家"
							/>
						</template>
					</div>
					<div class="flex-1">
						<ChinaMapChart v-if="data" />
					</div>
				</div>
			</div>
			<div class="col-span-10 flex flex-col gap-6 pt-10">
				<template v-if="data">
					<FranchiseeBlock :data="data" />
					<FranchiseeList :data="data" />
					<MemberBlock :data="data" />
				</template>
			</div>
		</div>
	</main>
</template>
