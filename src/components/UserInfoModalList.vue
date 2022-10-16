<script setup lang="ts">
import { UserInfoModalListItem, UserLink } from '@/components'
import { useUserStore } from '@/stores'

const { state } = useUserStore()
</script>

<template>
	<ul class="space-y-2">
		<UserInfoModalListItem label="Телефон">
			<UserLink class="underline" type="tel" :href="state.user.phone">
				{{ state.user.phone }}
			</UserLink>
		</UserInfoModalListItem>
		<UserInfoModalListItem label="Почта">
			<UserLink class="text-xs underline" type="email" :href="state.user.email">
				{{ state.user.email }}
			</UserLink>
		</UserInfoModalListItem>
		<UserInfoModalListItem label="Дата приёма">
			<span>{{ state.user.hire_date }}</span>
		</UserInfoModalListItem>
		<UserInfoModalListItem label="Должность">
			<span>{{ state.user.position_name }}</span>
		</UserInfoModalListItem>
		<UserInfoModalListItem label="Подразделение">
			<span>{{ state.user.department }}</span>
		</UserInfoModalListItem>
	</ul>
</template>

<style scoped>
/*  */
</style>
