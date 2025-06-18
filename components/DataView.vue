<script lang="ts" setup></script>

<template>
	<main
		class="h-dvh w-dvw bg-[url(background.png)] bg-size-[100%_100%] bg-center"
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
				<UsageBlock />
				<RepurchaseBlock />
			</div>
			<div class="col-span-28">
				<div class="flex h-full flex-col">
					<div class="mx-auto grid w-2/3 grid-cols-2 gap-8">
						<DateCell name="消费总金额" value="0.14" unit="元" />
						<DateCell name="加盟商数量" value="61" unit="家" />
					</div>
					<div class="flex-1">
						<ChinaMapChart />
					</div>
				</div>
			</div>
			<div class="col-span-10 flex flex-col gap-6 pt-10">
				<FranchiseeBlock />
				<FranchiseeList />
				<MemberBlock />
			</div>
		</div>
	</main>
</template>
