<script lang="ts" setup></script>

<template>
	<svg class="absolute">
		<polygon
			fill="#4fd2dd"
			points="6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"
		>
			<animate
				attributeName="fill"
				values="#4fd2dd;#235fa7;#4fd2dd"
				dur="0.5s"
				begin="0s"
				repeatCount="indefinite"
			/>
		</polygon>
		<polygon
			fill="#235fa7"
			points="27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8"
		>
			<animate
				attributeName="fill"
				values="#235fa7;#4fd2dd;#235fa7"
				dur="0.5s"
				begin="0s"
				repeatCount="indefinite"
			/>
		</polygon>
		<polygon
			fill="#4fd2dd"
			points="9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54"
		>
			<animate
				attributeName="fill"
				values="#4fd2dd;#235fa7;transparent"
				dur="1.5s"
				begin="0s"
				repeatCount="indefinite"
			/>
		</polygon>
	</svg>
</template>
