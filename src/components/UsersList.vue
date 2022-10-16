<script setup lang="ts">
import type { IUser } from '@/types'
import { UserCard } from '@/components'

interface Props {
	users: IUser[] | undefined
	hasUsers: boolean
}
interface Emits {
	(e: 'setUser', user: IUser): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()
</script>

<template>
	<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
		<template v-if="hasUsers">
			<li class="group" v-for="user in users" :key="user.name">
				<UserCard
					class="group-hover:-translate-y-2 transition"
					:name="user.name"
					:phone="user.phone"
					:email="user.email"
					@click="emit('setUser', user)"
				></UserCard>
			</li>
		</template>
		<li v-else>Ничего не найдено</li>
	</ul>
</template>

<style scoped>
/*  */
</style>
