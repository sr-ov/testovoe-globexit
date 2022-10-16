<script setup lang="ts">
import { UiModalDialog, UserInfoModalList } from '@/components'
import { useUserStore } from '@/stores'

const { state, actions } = useUserStore()
</script>

<template>
	<UiModalDialog
		@close="actions.toggleUserModal"
		:is-visible="state.isOpenUserModal"
	>
		<div class="text-2xl font-medium mb-8">{{ state.user.name }}</div>
		<UserInfoModalList class="mb-8" />
		<div>
			<div class="mb-2">Дополнительная информация:</div>
			<div class="text-xs text-gray-500">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci sit
				est placeat sunt impedit! Recusandae minus adipisci totam delectus
				excepturi!
				{{ state.user.address }}
			</div>
		</div>
	</UiModalDialog>
</template>

<style scoped>
/*  */
</style>
