<script setup lang="ts">
import { UiAppSpinner } from '@/components'

interface Props {
	isLoading: boolean
	isError: boolean
	error: unknown
}

defineProps<Props>()
</script>

<template>
	<div>
		<slot v-if="isLoading" name="loading">
			<UiAppSpinner :active="isLoading" />
		</slot>
		<slot v-else-if="isError" name="error">
			<h1 class="text-2xl text-red-400">Произошла ошибка!!!</h1>
			<pre>{{ JSON.stringify(error, null, 4) }}</pre>
		</slot>
		<slot v-else />
	</div>
</template>

<style scoped>
/*  */
</style>
