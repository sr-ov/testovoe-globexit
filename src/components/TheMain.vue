<script setup lang="ts">
import { UiAppInput, UsersList, WithAsyncData } from '@/components'
import { useUsers } from '@/composables'
import { useUserStore } from '@/stores'

const { actions } = useUserStore()
const { users, searchValue, hasUsers, isError, isLoading, error } =
	await useUsers()
</script>

<template>
	<main class="py-8">
		<UiAppInput class="mb-12" v-model="searchValue" is-debounced />
		<WithAsyncData v-bind="{ isLoading, isError, error }">
			<UsersList
				:users="users"
				:has-users="hasUsers"
				@set-user="actions.setUser"
			></UsersList>
		</WithAsyncData>
	</main>
</template>

<style scoped>
/*  */
</style>
