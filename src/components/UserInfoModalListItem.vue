<script setup lang="ts">
interface Props {
	label: string
}

defineProps<Props>()
</script>

<template>
	<li class="grid grid-cols-[40%_60%] gap-2 text-sm">
		<span>{{ label }}:</span>
		<slot />
	</li>
</template>

<style scoped>
:slotted(span) {
	@apply text-gray-500 text-xs whitespace-nowrap text-ellipsis overflow-hidden;
}
</style>
