<script setup lang="ts">
import { computed } from 'vue'

import { removeNonDigits } from '@/utils'

interface Props {
	type: 'email' | 'tel'
	href: string
}

const props = defineProps<Props>()

const isEmail = computed(() => props.type === 'email')
const href = computed(() =>
	isEmail.value ? `mailto:${props.href}` : `tel:${removeNonDigits(props.href)}`
)
</script>

<template>
	<a
		class="text-gray-500 flex items-center gap-2 hover:text-purple-500 transition"
		:href="href"
	>
		<slot />
	</a>
</template>

<style scoped>
/*  */
</style>
