<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'
import { computed } from 'vue'

interface Props {
	modelValue: string
	isDebounced?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const setValue = (value: string) => {
	emit('update:modelValue', value)
}

const debouncedFn = useDebounceFn(setValue, 500)

const value = computed({
	get: () => props.modelValue,
	set: props.isDebounced ? debouncedFn : setValue,
})
</script>

<template>
	<input
		class="app-input block w-full h-full p-2 pr-14 outline-transparent rounded-full border ring-slate-200 focus:ring-8"
		v-model="value"
	/>
</template>

<style scoped>
.app-input {
	background: no-repeat url('@/components/icons/search.svg') right 15px center /
		26px;
}
</style>
