<script setup lang="ts">
import { IconEmail, IconSmartphone, UserLink } from '@/components'

interface Props {
	name: string
	phone: string
	email: string
}

defineProps<Props>()
</script>

<template>
	<article class="rounded-lg shadow p-6 min-h-[240px] cursor-pointer">
		<div class="font-medium mb-4 text-lg">{{ name }}</div>
		<UserLink class="mb-2" type="tel" :href="phone">
			<IconSmartphone height="20" width="20" fill="#a855f7" />
			{{ phone }}
		</UserLink>
		<UserLink class="text-xs underline" type="email" :href="email">
			<IconEmail height="20" width="20" fill="#a855f7" />
			{{ email }}
		</UserLink>
	</article>
</template>

<style scoped>
/*  */
</style>
